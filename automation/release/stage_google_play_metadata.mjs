#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const source = path.join(root, 'repo-data/store-screenshots/csm-2026/final');
const listing = path.join(here, 'fastlane/metadata/googleplay/cs-CZ');
const playAssets = path.join(source, 'google-play-assets');
const target = path.join(root, 'build/release/google-play-metadata/cs-CZ');
const manifest = JSON.parse(fs.readFileSync(path.join(source, 'manifest.json'), 'utf8'));

function pngSize(file) {
  const data = fs.readFileSync(file);
  if (data.toString('ascii', 1, 4) !== 'PNG') throw new Error(`Not PNG: ${file}`);
  return [data.readUInt32BE(16), data.readUInt32BE(20)];
}

function pngColorType(file) {
  const data = fs.readFileSync(file);
  if (data.toString('ascii', 1, 4) !== 'PNG') throw new Error(`Not PNG: ${file}`);
  return data.readUInt8(25);
}

function sha256(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

function stageSet(name, sourceDir, destinationDirs) {
  const set = manifest.sets[name];
  const actual = fs.readdirSync(path.join(source, sourceDir)).filter(f => f.endsWith('.png')).sort();
  if (JSON.stringify(actual) !== JSON.stringify(set.files)) throw new Error(`${name}: file list differs from manifest`);
  for (const file of set.files) {
    const input = path.join(source, sourceDir, file);
    if (JSON.stringify(pngSize(input)) !== JSON.stringify(set.size)) throw new Error(`${name}/${file}: unexpected dimensions`);
    for (const dir of destinationDirs) {
      fs.mkdirSync(path.join(target, 'images', dir), { recursive: true });
      fs.copyFileSync(input, path.join(target, 'images', dir, file));
    }
  }
}

fs.rmSync(target, { recursive: true, force: true });
fs.mkdirSync(target, { recursive: true });
for (const file of ['title.txt', 'short_description.txt', 'full_description.txt']) {
  const input = path.join(listing, file);
  const text = fs.readFileSync(input, 'utf8');
  for (const forbidden of ['bujnmi', 'festapp']) {
    if (text.toLocaleLowerCase('cs-CZ').includes(forbidden)) {
      throw new Error(`${file}: forbidden public-store term detected`);
    }
  }
  fs.copyFileSync(input, path.join(target, file));
}
const changelogSource = path.join(listing, 'changelogs');
const changelogTarget = path.join(target, 'changelogs');
fs.mkdirSync(changelogTarget, { recursive: true });
for (const file of fs.readdirSync(changelogSource).filter(file => file.endsWith('.txt'))) {
  const text = fs.readFileSync(path.join(changelogSource, file), 'utf8');
  for (const forbidden of ['bujnmi', 'festapp']) {
    if (text.toLocaleLowerCase('cs-CZ').includes(forbidden)) throw new Error(`changelogs/${file}: forbidden public-store term detected`);
  }
  fs.copyFileSync(path.join(changelogSource, file), path.join(changelogTarget, file));
}

const icon = path.join(playAssets, 'icon.png');
if (JSON.stringify(pngSize(icon)) !== JSON.stringify([512, 512])) throw new Error('Play icon must be 512x512');
if (pngColorType(icon) !== 2) throw new Error('Play icon must be RGB without an alpha channel');
const featureGraphic = path.join(playAssets, 'featureGraphic.png');
if (JSON.stringify(pngSize(featureGraphic)) !== JSON.stringify([1024, 500])) throw new Error('Play feature graphic must be 1024x500');
if (pngColorType(featureGraphic) !== 2) throw new Error('Play feature graphic must be RGB without an alpha channel');
fs.mkdirSync(path.join(target, 'images'), { recursive: true });
fs.copyFileSync(icon, path.join(target, 'images/icon.png'));
fs.copyFileSync(featureGraphic, path.join(target, 'images/featureGraphic.png'));
stageSet('googlePhone', 'google-phone', ['phoneScreenshots']);
stageSet('googleTablet', 'google-tablet', ['sevenInchScreenshots', 'tenInchScreenshots']);

const evidence = [];
for (const file of fs.readdirSync(target, { recursive: true }).sort()) {
  const absolute = path.join(target, file);
  if (fs.statSync(absolute).isFile()) evidence.push({ path: file.replaceAll('\\', '/'), sha256: sha256(absolute) });
}
fs.writeFileSync(path.join(target, 'staging-manifest.json'), `${JSON.stringify({ packageName: 'fstapp.jm2025', files: evidence }, null, 2)}\n`);
console.log(`Staged fstapp.jm2025 metadata, canonical Play graphics, 7 phone, 6 seven-inch and 6 ten-inch screenshots.`);
