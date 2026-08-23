import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'automation/release/app_store_config.json'), 'utf8'));
const checkOnly = process.argv.includes('--check');
const sources = [
  ['privacy-policy.cs.md', 'privacy/index.html', 'Ochrana osobních údajů'],
  ['privacy-choices.cs.md', 'privacy/choices/index.html', 'Vaše volby a práva'],
  ['terms.cs.md', 'terms/index.html', 'Podmínky'],
  ['support.cs.md', 'support/index.html', 'Podpora'],
];

const legalPaths = new Set(['/privacy/', '/privacy/choices/', '/terms/', '/support/']);

const escape = (value) => value
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function inline(value) {
  return escape(value)
    .replaceAll(/`([^`]+)`/g, '<code>$1</code>')
    .replaceAll(/&lt;(https:\/\/[^&]+)&gt;/g, (_, url) => {
      const parsed = new URL(url);
      const normalizedPath = parsed.pathname.endsWith('/')
        ? parsed.pathname
        : `${parsed.pathname}/`;
      const isInternalLegalLink = parsed.hostname.endsWith('.festapp.net') &&
        legalPaths.has(normalizedPath);
      const href = isInternalLegalLink ? normalizedPath : url;
      return `<a href="${href}"${isInternalLegalLink ? ' data-legal-link' : ''}>${url}</a>`;
    });
}

function markdown(value) {
  return value.trim().split(/\n\s*\n/).map((block) => {
    if (block.startsWith('# ')) return `<h1>${inline(block.slice(2))}</h1>`;
    return `<p>${inline(block.replaceAll('\n', ' '))}</p>`;
  }).join('\n');
}

function document(title, content) {
  return `<!doctype html>
<html lang="cs"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="index,follow"><title>${title} | ${manifest.target.name}</title>
<style>body{margin:0;background:#f6f7fb;color:#15182d;font:17px/1.6 system-ui,sans-serif}main{max-width:760px;margin:auto;padding:56px 22px 72px}h1{line-height:1.18;color:#0000b8}a{color:#0000b8}code{font:inherit}.app-close{position:fixed;z-index:1;top:12px;right:12px;width:42px;height:42px;border-radius:50%;background:#fff;box-shadow:0 2px 12px #15182d24;color:#15182d;font-size:30px;line-height:38px;text-align:center;text-decoration:none}nav{display:flex;flex-wrap:wrap;gap:8px 18px;margin-bottom:32px;padding-right:36px}nav a{text-underline-offset:3px}</style></head>
<body><a class="app-close" href="/login" aria-label="Zavřít a vrátit se do aplikace">&times;</a><main><nav aria-label="Právní informace"><a href="/privacy/" data-legal-link>Soukromí</a><a href="/privacy/choices/" data-legal-link>Volby</a><a href="/terms/" data-legal-link>Podmínky</a><a href="/support/" data-legal-link>Podpora</a></nav>${content}</main><script>(()=>{const params=new URLSearchParams(window.location.search);const returnTo=params.get('returnTo');if(!returnTo||!returnTo.startsWith('/')||returnTo.startsWith('//'))return;const parsedDepth=Number.parseInt(params.get('legalDepth')||'1',10);const legalDepth=Number.isSafeInteger(parsedDepth)&&parsedDepth>0?parsedDepth:1;const close=document.querySelector('.app-close');close.setAttribute('href',returnTo);close.addEventListener('click',(event)=>{event.preventDefault();window.setTimeout(()=>window.location.assign(returnTo),350);window.history.go(-legalDepth);});document.querySelectorAll('[data-legal-link]').forEach((link)=>{const target=new URL(link.href);target.searchParams.set('returnTo', returnTo);target.searchParams.set('legalDepth',String(legalDepth+1));link.href=target.pathname+target.search+target.hash;});})();</script></body></html>\n`;
}

let stale = false;
for (const [source, output, title] of sources) {
  const markdownText = fs.readFileSync(path.join(root, 'automation/release/legal', source), 'utf8');
  const target = path.join(root, 'web', output);
  const rendered = document(title, markdown(markdownText));
  if (checkOnly) {
    if (!fs.existsSync(target) || fs.readFileSync(target, 'utf8') !== rendered) {
      console.error(`Stale generated legal page: ${output}`);
      stale = true;
    }
  } else {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, rendered);
  }
}

if (stale) process.exit(1);
console.log(checkOnly
  ? `Verified ${sources.length} generated legal pages.`
  : `Rendered ${sources.length} legal pages.`);
