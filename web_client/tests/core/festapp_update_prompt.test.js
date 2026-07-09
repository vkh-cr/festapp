import { test, describe } from 'node:test';
import assert from 'node:assert';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// The script lives with the Flutter web template (web/), not web_client, but it
// is plain browser JS so we exercise it here with the existing jsdom harness.
const SCRIPT = readFileSync(
    resolve(__dirname, '../../../web/festapp_update_prompt.js'),
    'utf-8'
);

const BANNER_ID = 'festapp-update-banner';

/**
 * Boot a jsdom window with festapp_update_prompt.js evaluated inside it.
 *
 *  - buildVersion  -> window.__FESTAPP_BUILD_VERSION__ (read at IIFE eval time)
 *  - locale        -> seeded into localStorage['flutter.Locale'] before eval
 *  - latestVersion -> what the mocked /festapp-version.json returns
 *  - fetchOk       -> HTTP ok flag for that fetch
 *
 * Timers are captured (not fired) so the 3s load poll and 5-min interval never
 * run mid-test — we drive checkVersion explicitly via the 'focus' listener.
 */
function boot({ buildVersion = '1.0.0+1', locale, latestVersion, fetchOk = true } = {}) {
    const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>', {
        url: 'https://csmostrava.festapp.net/',
        runScripts: 'dangerously',
        beforeParse(window) {
            window.__FESTAPP_BUILD_VERSION__ = buildVersion;
            if (locale) window.localStorage.setItem('flutter.Locale', JSON.stringify(locale));

            // Deterministic timers: record calls, never auto-run.
            window.setTimeout = () => 0;
            window.setInterval = () => 0;

            window.__fetchCalls = [];
            window.fetch = async (url) => {
                window.__fetchCalls.push(String(url));
                return { ok: fetchOk, json: async () => ({ version: latestVersion }) };
            };
        },
    });

    const script = dom.window.document.createElement('script');
    script.textContent = SCRIPT;
    dom.window.document.body.appendChild(script);
    return dom;
}

// Let the fire-and-forget async checkVersion() settle.
const flush = async () => {
    for (let i = 0; i < 5; i++) await new Promise((r) => setImmediate(r));
};

const banner = (window) => window.document.getElementById(BANNER_ID);
const messageText = (window) => banner(window)?.firstChild?.textContent;
const button = (window, action) =>
    window.document.querySelector(`[data-festapp-update-action="${action}"]`);

describe('festapp_update_prompt.js', () => {
    test('festapp-update-available event shows an English banner by default', () => {
        const { window } = boot();
        window.dispatchEvent(new window.CustomEvent('festapp-update-available', {
            detail: { version: '2.0.0+2', reason: 'new-version' },
        }));

        assert.ok(banner(window), 'banner should be inserted');
        assert.strictEqual(messageText(window), 'A new version of the app is available.');
        assert.strictEqual(button(window, 'reload').textContent, 'Reload');
        assert.strictEqual(button(window, 'later').textContent, 'Later');
    });

    test('renders Czech copy when the in-app locale is cs', () => {
        const { window } = boot({ locale: 'cs' });
        window.dispatchEvent(new window.CustomEvent('festapp-update-available', {
            detail: { version: '2.0.0+2', reason: 'new-version' },
        }));

        assert.strictEqual(messageText(window), 'Je dostupná nová verze aplikace.');
        assert.strictEqual(button(window, 'reload').textContent, 'Načíst');
        assert.strictEqual(button(window, 'later').textContent, 'Později');
    });

    test('legacy-cache reason uses the refresh copy', () => {
        const { window } = boot({ locale: 'cs' });
        window.dispatchEvent(new window.CustomEvent('festapp-update-available', {
            detail: { version: '1.0.0+1', reason: 'legacy-cache' },
        }));

        assert.strictEqual(messageText(window), 'Aplikace je připravená k obnovení.');
        assert.strictEqual(button(window, 'reload').textContent, 'Obnovit');
    });

    test('version check shows a banner when the server build is newer', async () => {
        const { window } = boot({ buildVersion: '1.0.0+1', latestVersion: '1.0.0+2' });
        window.dispatchEvent(new window.Event('focus'));
        await flush();

        assert.ok(window.__fetchCalls.some((u) => u.includes('/festapp-version.json')),
            'should poll /festapp-version.json');
        assert.ok(banner(window), 'newer server version should surface the banner');
    });

    test('version check stays silent when the server build matches', async () => {
        const { window } = boot({ buildVersion: '1.0.0+1', latestVersion: '1.0.0+1' });
        window.dispatchEvent(new window.Event('focus'));
        await flush();

        assert.strictEqual(banner(window), null, 'matching version should not show a banner');
    });

    test('a failed version fetch never shows a banner', async () => {
        const { window } = boot({ buildVersion: '1.0.0+1', latestVersion: '9.9.9+9', fetchOk: false });
        window.dispatchEvent(new window.Event('focus'));
        await flush();

        assert.strictEqual(banner(window), null, 'non-ok response must be ignored');
    });

    test('"Later" dismisses the banner and suppresses re-showing the same version', () => {
        const { window } = boot();
        const fire = () => window.dispatchEvent(new window.CustomEvent('festapp-update-available', {
            detail: { version: '2.0.0+2', reason: 'new-version' },
        }));

        fire();
        assert.ok(banner(window), 'banner present before dismiss');
        button(window, 'later').click();
        assert.strictEqual(banner(window), null, 'banner removed after Later');
        assert.strictEqual(window.sessionStorage.getItem('festappDismissedVersion'), '2.0.0+2');

        fire();
        assert.strictEqual(banner(window), null, 'dismissed version should not re-show this session');
    });

    test('exposes window.clearLegacyFlutterCaches for the index.html cleanup block', () => {
        const { window } = boot();
        assert.strictEqual(typeof window.clearLegacyFlutterCaches, 'function');
    });
});
