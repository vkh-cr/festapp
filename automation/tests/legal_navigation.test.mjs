import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const pages = [
  'web/privacy/index.html',
  'web/privacy/choices/index.html',
  'web/terms/index.html',
  'web/support/index.html',
];

test('legal pages provide an app close action and preserve it across navigation', async () => {
  for (const page of pages) {
    const html = await readFile(page, 'utf8');
    assert.match(html, /class="app-close"[^>]+href="\/login"/);
    assert.match(html, /aria-label="Zavřít a vrátit se do aplikace"/);
    assert.match(html, /data-legal-link/);
    assert.match(html, /searchParams\.set\('returnTo', returnTo\)/);
    assert.match(html, /history\.go\(-legalDepth\)/);
    assert.match(html, /searchParams\.set\('legalDepth',String\(legalDepth\+1\)\)/);
  }
});

test('internal legal links use canonical static paths', async () => {
  for (const page of pages) {
    const html = await readFile(page, 'utf8');
    assert.doesNotMatch(
      html,
      /href="https:\/\/csmostrava\.festapp\.net\/(?:privacy|terms|support)/,
    );
    for (const path of ['/privacy/', '/privacy/choices/', '/terms/', '/support/']) {
      assert.match(html, new RegExp(`href="${path}"[^>]*data-legal-link`));
    }
  }
});
