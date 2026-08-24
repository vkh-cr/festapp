import fs from 'node:fs';

const config = JSON.parse(
  fs.readFileSync(new URL('../.fvmrc', import.meta.url), 'utf8'),
);
const version = config.flutter;

if (typeof version !== 'string' || !/^\d+\.\d+\.\d+$/.test(version)) {
  throw new Error('.fvmrc must define a semantic Flutter version');
}

process.stdout.write(version);
