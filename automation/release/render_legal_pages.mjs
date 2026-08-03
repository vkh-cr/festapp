import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const sources = [
  ['privacy-policy.cs.md', 'privacy/index.html', 'Ochrana osobních údajů'],
  ['privacy-choices.cs.md', 'privacy/choices/index.html', 'Vaše volby a práva'],
  ['terms.cs.md', 'terms/index.html', 'Podmínky'],
];

const escape = (value) => value
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function inline(value) {
  return escape(value)
    .replaceAll(/`([^`]+)`/g, '<code>$1</code>')
    .replaceAll(/&lt;(https:\/\/[^&]+)&gt;/g, '<a href="$1">$1</a>');
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
<meta name="robots" content="index,follow"><title>${title} | CSM Ostrava</title>
<style>body{margin:0;background:#f6f7fb;color:#15182d;font:17px/1.6 system-ui,sans-serif}main{max-width:760px;margin:auto;padding:40px 22px 72px}h1{line-height:1.18;color:#0000b8}a{color:#0000b8}code{font:inherit}nav{margin-bottom:32px}nav a{margin-right:18px}</style></head>
<body><main><nav aria-label="Právní informace"><a href="/privacy">Soukromí</a><a href="/privacy/choices">Volby</a><a href="/terms">Podmínky</a><a href="/">CSM Ostrava</a></nav>${content}</main></body></html>\n`;
}

for (const [source, output, title] of sources) {
  const markdownText = fs.readFileSync(path.join(root, 'automation/release/legal', source), 'utf8');
  const target = path.join(root, 'web', output);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, document(title, markdown(markdownText)));
}

console.log(`Rendered ${sources.length} legal pages.`);
