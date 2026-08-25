import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const configArgument = process.argv.indexOf('--config');
const configPath = configArgument === -1
  ? path.join(root, 'automation/project.conf')
  : path.resolve(process.argv[configArgument + 1] || '');
const projectConfig = fs.readFileSync(configPath, 'utf8');
const configValue = (key) => projectConfig.match(new RegExp(`^${key}=(.*)$`, 'm'))?.[1]
  .trim()
  .replace(/^(['"])(.*)\1$/, '$2');
const appName = configValue('APP_NAME');
const domain = configValue('DOMAIN');
if (!appName) throw new Error(`${configPath} lacks APP_NAME`);
if (!domain) throw new Error(`${configPath} lacks DOMAIN`);
const checkOnly = process.argv.includes('--check');
const validateOnly = process.argv.includes('--validate');
const pages = [
  { key: 'PRIVACY_URL', source: 'privacy-policy.cs.md', output: 'privacy/index.html', pathname: '/privacy/', title: 'Ochrana osobních údajů', nav: 'Soukromí' },
  { key: 'PRIVACY_CHOICES_URL', source: 'privacy-choices.cs.md', output: 'privacy/choices/index.html', pathname: '/privacy/choices/', title: 'Vaše volby a práva', nav: 'Volby' },
  { key: 'TERMS_URL', source: 'terms.cs.md', output: 'terms/index.html', pathname: '/terms/', title: 'Podmínky', nav: 'Podmínky' },
  { key: 'SUPPORT_URL', source: 'support.cs.md', output: 'support/index.html', pathname: '/support/', title: 'Podpora', nav: 'Podpora' },
];
const expectedOrigin = `https://${domain}`;
const configuredUrls = new Map();
for (const page of pages) {
  const value = configValue(page.key);
  if (!value) throw new Error(`${page.key} must be defined in ${configPath}`);
  const url = new URL(value);
  if (url.origin !== expectedOrigin || url.pathname !== page.pathname || url.search || url.hash || url.username || url.password) {
    throw new Error(`${page.key} must equal ${expectedOrigin}${page.pathname}`);
  }
  configuredUrls.set(page.key, url);
}
const deleteAccountUrl = configValue('DELETE_ACCOUNT_URL');
if (!deleteAccountUrl) throw new Error(`DELETE_ACCOUNT_URL must be defined in ${configPath}`);
const parsedDeleteAccountUrl = new URL(deleteAccountUrl);
if (parsedDeleteAccountUrl.origin !== expectedOrigin || parsedDeleteAccountUrl.pathname !== '/delete-account/' ||
    parsedDeleteAccountUrl.search || parsedDeleteAccountUrl.hash || parsedDeleteAccountUrl.username || parsedDeleteAccountUrl.password) {
  throw new Error(`DELETE_ACCOUNT_URL must equal ${expectedOrigin}/delete-account/`);
}
for (const page of pages) {
  const sourcePath = path.join(root, 'automation/release/legal', page.source);
  if (!fs.existsSync(sourcePath) || !fs.readFileSync(sourcePath, 'utf8').trim()) {
    throw new Error(`Required legal source is missing or empty: ${sourcePath}`);
  }
}
if (validateOnly) {
  console.log(`Validated required legal configuration for ${domain}.`);
  process.exit(0);
}

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
      const isInternalLegalLink = parsed.origin === expectedOrigin &&
        pages.some((page) => page.pathname === normalizedPath);
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
  const navigation = pages.map((page) =>
    `<a href="${configuredUrls.get(page.key).pathname}" data-legal-link>${page.nav}</a>`
  ).join('');
  return `<!doctype html>
<html lang="cs"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="index,follow"><title>${title} | ${appName}</title>
<style>body{margin:0;background:#f6f7fb;color:#15182d;font:17px/1.6 system-ui,sans-serif}main{max-width:760px;margin:auto;padding:56px 22px 72px}h1{line-height:1.18;color:#0000b8}a{color:#0000b8}code{font:inherit}.app-close{position:fixed;z-index:1;top:12px;right:12px;width:42px;height:42px;border-radius:50%;background:#fff;box-shadow:0 2px 12px #15182d24;color:#15182d;font-size:30px;line-height:38px;text-align:center;text-decoration:none}nav{display:flex;flex-wrap:wrap;gap:8px 18px;margin-bottom:32px;padding-right:36px}nav a{text-underline-offset:3px}</style></head>
<body><a class="app-close" href="/login" aria-label="Zavřít a vrátit se do aplikace">&times;</a><main><nav aria-label="Právní informace">${navigation}</nav>${content}</main><script>(()=>{const params=new URLSearchParams(window.location.search);const returnTo=params.get('returnTo');if(!returnTo||!returnTo.startsWith('/')||returnTo.startsWith('//'))return;const parsedDepth=Number.parseInt(params.get('legalDepth')||'1',10);const legalDepth=Number.isSafeInteger(parsedDepth)&&parsedDepth>0?parsedDepth:1;const close=document.querySelector('.app-close');close.setAttribute('href',returnTo);close.addEventListener('click',(event)=>{event.preventDefault();window.setTimeout(()=>window.location.assign(returnTo),350);window.history.go(-legalDepth);});document.querySelectorAll('[data-legal-link]').forEach((link)=>{const target=new URL(link.href);target.searchParams.set('returnTo', returnTo);target.searchParams.set('legalDepth',String(legalDepth+1));link.href=target.pathname+target.search+target.hash;});})();</script></body></html>\n`;
}

let stale = false;
for (const page of pages) {
  const markdownText = fs.readFileSync(path.join(root, 'automation/release/legal', page.source), 'utf8');
  const target = path.join(root, 'web', page.output);
  const rendered = document(page.title, markdown(markdownText));
  if (checkOnly) {
    if (!fs.existsSync(target) || fs.readFileSync(target, 'utf8') !== rendered) {
      console.error(`Stale generated legal page: ${page.output}`);
      stale = true;
    }
  } else {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, rendered);
  }
}

if (stale) process.exit(1);
console.log(checkOnly
  ? `Verified ${pages.length} generated legal pages.`
  : `Rendered ${pages.length} legal pages.`);
