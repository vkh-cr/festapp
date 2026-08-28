import fs from 'node:fs';

const source = fs.readFileSync(new URL('./project.conf', import.meta.url), 'utf8');
const matches = [...source.matchAll(/^FLUTTER_VERSION=([^\r\n#]+)$/gm)];
if (matches.length !== 1) {
  throw new Error('automation/project.conf must define FLUTTER_VERSION exactly once');
}
const version = matches[0][1].trim().replace(/^(['"])(.*)\1$/, '$2');

if (!/^\d+\.\d+\.\d+$/.test(version)) {
  throw new Error('FLUTTER_VERSION must be a semantic Flutter version');
}

process.stdout.write(version);
