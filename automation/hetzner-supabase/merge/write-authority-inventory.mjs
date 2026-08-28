#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { assertNewEvidencePaths, assertPrivateOutput, REPOSITORY_ROOT, sha256, stableJson } from './lib.mjs';

const INCLUDED_ROOTS = ['lib', 'web_client/src', 'web_client/scripts', 'supabase/functions', 'database', 'automation', 'workers'];
const EXTENSIONS = new Set(['.dart', '.js', '.mjs', '.ts', '.sql', '.sh', '.rb', '.py']);
const SKIP_NAMES = new Set(['node_modules', '.dart_tool', 'build', '.git', 'fixtures', 'test', 'tests', 'hetzner-supabase']);

export function scanWriteSignals(text) {
  const signals = new Set();
  const patterns = [
    ['direct-dml', /(?:\b\w*supabase\w*|\badmin|\bclient)\s*\.from\s*\([\s\S]{0,160}?\)\s*\.(?:insert|update|upsert|delete)\s*\(/gi],
    ['rpc', /\.rpc\s*\(/g],
    ['storage-mutation', /\.storage\s*\.from\s*\([\s\S]{0,160}?\)[\s\S]{0,160}?\.(?:upload|uploadBinary|update|move|copy|remove)\s*\(/g],
    ['sql-cron', /cron\.schedule\s*\(/gi],
    ['database-webhook', /net\.http_post\s*\(/gi],
    ['email-side-effect', /(?:\b(?:sendEmail|send_email|sendTickets|send_tickets)\s*\(|nodemailer\.|resend\.emails|smtpClient)/g],
    ['payment-side-effect', /(?:\b(?:stripe|gopay|comgate)\s*\.|payment_intent|\bcharge\s*\()/gi],
    ['push-side-effect', /(?:\bOneSignal\.|\bsendPush\s*\(|push_notification)/g],
  ];
  for (const [name, pattern] of patterns) if (pattern.test(text)) signals.add(name);
  return [...signals].sort();
}

function filesUnder(root) {
  const values = [];
  if (!fs.existsSync(root)) return values;
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (SKIP_NAMES.has(entry.name)) continue;
    const absolute = path.join(root, entry.name);
    if (entry.isDirectory()) values.push(...filesUnder(absolute));
    else if (EXTENSIONS.has(path.extname(entry.name))) values.push(absolute);
  }
  return values;
}

export function buildWriteInventory(root = REPOSITORY_ROOT) {
  const entries = [];
  for (const relativeRoot of INCLUDED_ROOTS) {
    for (const filePath of filesUnder(path.join(root, relativeRoot))) {
      const text = fs.readFileSync(filePath, 'utf8');
      const signals = scanWriteSignals(text);
      if (signals.length === 0) continue;
      entries.push({
        path: path.relative(root, filePath),
        signals,
        write_owner: null,
        hybrid_contract: null,
        status: 'unreviewed',
      });
    }
  }
  entries.sort((left, right) => left.path.localeCompare(right.path));
  const counts = {};
  for (const entry of entries) for (const signal of entry.signals) counts[signal] = (counts[signal] ?? 0) + 1;
  return {
    inventory_version: 1,
    roots: INCLUDED_ROOTS,
    entries,
    counts,
    validation: {
      status: entries.length === 0 ? 'fail' : 'blocked',
      unreviewed: entries.length,
      unknown_writers: entries.length,
      notes: [
        'regex discovery is a reachability candidate list, not proof of complete runtime traffic',
        'production branches, deployed versions, provider callbacks and manual operator paths require separate reconciliation',
        'every entry must receive one write owner and an explicit hybrid contract or not-applicable decision',
      ],
    },
  };
}

async function main() {
  const outputIndex = process.argv.indexOf('--output');
  if (outputIndex < 0 || !process.argv[outputIndex + 1]) {
    throw new Error('usage: write-authority-inventory.mjs --output /private/path/write-authority.json');
  }
  const output = assertPrivateOutput(process.argv[outputIndex + 1]);
  assertNewEvidencePaths([output]);
  const inventory = buildWriteInventory();
  inventory.generated_at = new Date().toISOString();
  inventory.inventory_sha256 = sha256(stableJson(inventory));
  fs.mkdirSync(path.dirname(output), { recursive: true, mode: 0o700 });
  fs.writeFileSync(output, `${JSON.stringify(inventory, null, 2)}\n`, { mode: 0o600, flag: 'wx' });
  process.stdout.write(`write authority inventory: entries=${inventory.entries.length}, unreviewed=${inventory.validation.unreviewed}, sha256=${inventory.inventory_sha256}\n`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}
