#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { assertNewEvidencePaths, assertPrivateOutput, sha256, SOURCES, stableJson } from './lib.mjs';

function parseArgs(argv) {
  const values = {};
  for (let index = 0; index < argv.length; index += 2) {
    if (!argv[index]?.startsWith('--') || argv[index + 1] === undefined) {
      throw new Error('usage: resolve-auth-collisions.mjs --input COLLISIONS.json --output /private/decisions.json');
    }
    values[argv[index].slice(2)] = argv[index + 1];
  }
  if (!values.input || !values.output) throw new Error('--input and --output are required');
  return values;
}

export function buildIdentityDecisions(report) {
  const { report_sha256: claimedChecksum, ...unsignedReport } = report;
  const actualChecksum = sha256(stableJson(unsignedReport));
  if (!claimedChecksum || actualChecksum !== claimedChecksum) {
    throw new Error('collision report checksum mismatch');
  }
  if (report.sources?.default !== SOURCES.default || report.sources?.a !== SOURCES.a) {
    throw new Error('collision report source identity mismatch');
  }
  if (report.auth.same_uuid_different_email.length !== 0) {
    throw new Error('same UUID with different e-mail requires a separate manual decision');
  }
  if ((report.auth.same_provider_identity_different_uuid?.length ?? 0) !== 0 ||
      (report.auth.same_verified_phone_different_uuid?.length ?? 0) !== 0) {
    throw new Error('provider identity or verified phone collision requires a separate manual decision');
  }
  const decisions = report.auth.same_email_different_uuid.map((collision) => {
    if (collision.status !== 'manual-merge-required' || !collision.default_verified || !collision.a_verified) {
      throw new Error('ambiguous or unverified identity cannot use the canonical verified-email rule');
    }
    if (!isSimpleEmailIdentity(collision.default_auth_state) || !isSimpleEmailIdentity(collision.a_auth_state)) {
      throw new Error('provider, MFA, phone, SSO, anonymous or pending-token state requires a manual identity decision');
    }
    return {
      source_project: 'a',
      source_user_id: collision.a_user_id,
      target_user_id: collision.default_user_id,
      email_hmac: collision.email_hmac,
      rule: 'verified-email-prefer-default-v1',
      canonical_password: 'preserve-default-hash',
      source_password: 'require-reset',
      memberships: 'merge-after-user-id-remap',
      providers: 'reconcile-without-duplicate-email-identity',
      provider_evidence: 'email-only-on-both-sources',
      mfa_evidence: 'none-on-both-sources',
      pending_token_evidence: 'none-on-both-sources',
      status: 'approved-by-execution-rule',
    };
  });
  return {
    decision_version: '2026-08-27.1',
    sources: report.sources,
    source_collision_report_sha256: report.report_sha256,
    decisions,
    validation: {
      status: 'pass',
      input_collisions: report.auth.same_email_different_uuid.length,
      resolved: decisions.length,
      unresolved: 0,
    },
  };
}

function isSimpleEmailIdentity(state) {
  if (!state || stableJson(state.providers) !== stableJson(['email']) || state.mfa.length !== 0) return false;
  if (state.phone_hmac !== null || state.phone_verified || state.is_sso_user || state.is_anonymous) return false;
  return Object.values(state.pending_tokens).every((value) => value === false);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const output = assertPrivateOutput(args.output);
  assertNewEvidencePaths([output]);
  const report = JSON.parse(fs.readFileSync(args.input, 'utf8'));
  const result = buildIdentityDecisions(report);
  result.created_at = new Date().toISOString();
  result.decision_sha256 = sha256(stableJson(result));
  fs.mkdirSync(path.dirname(output), { recursive: true, mode: 0o700 });
  fs.writeFileSync(output, `${JSON.stringify(result, null, 2)}\n`, { mode: 0o600, flag: 'wx' });
  process.stdout.write(`identity decisions: resolved=${result.validation.resolved}, unresolved=0, sha256=${result.decision_sha256}\n`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}
