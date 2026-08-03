#!/usr/bin/env node

import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  managementQuery,
  parseKeyValueFile,
} from '../lib/supabase_management.mjs';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '../..');

function sqlLiteral(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}

export function loadTarget(root = projectRoot) {
  const config = parseKeyValueFile(path.join(root, 'automation/project.conf'));
  const localEnvironment = parseKeyValueFile(path.join(root, '.env.local'));
  const supabaseUrl = config.get('SUPABASE_URL');
  const projectRef = supabaseUrl?.match(
    /^https:\/\/([a-z0-9]+)\.supabase\.co$/,
  )?.[1];
  const organization = Number(config.get('ORGANIZATION_ID'));
  const occasionLink = config.get('FORCE_OCCASION_LINK');
  const accessToken =
    process.env.SUPABASE_ACCESS_TOKEN ||
    localEnvironment.get('SUPABASE_ACCESS_TOKEN');

  if (!projectRef) throw new Error('SUPABASE_URL is missing or invalid');
  if (!Number.isSafeInteger(organization) || organization <= 0) {
    throw new Error('ORGANIZATION_ID must be a positive integer');
  }
  if (!occasionLink || !/^[a-z0-9][a-z0-9-]*$/.test(occasionLink)) {
    throw new Error('FORCE_OCCASION_LINK is missing or invalid');
  }
  if (!accessToken) throw new Error('SUPABASE_ACCESS_TOKEN is required');

  return { projectRef, organization, occasionLink, accessToken };
}

export function buildPreflightSql({ organization, occasionLink }) {
  return `
SELECT jsonb_build_object(
  'occasion', (
    SELECT jsonb_build_object(
      'id', o.id,
      'link', o.link,
      'enabled', COALESCE((o.data->>'client_sync_v1')::boolean, false)
    )
    FROM public.occasions o
    WHERE o.organization = ${organization}
      AND o.link = ${sqlLiteral(occasionLink)}
  ),
  'registryVersion', (
    SELECT max(registry_version) FROM public.client_sync_component_sources
  ),
  'registryRows', (
    SELECT count(*) FROM public.client_sync_component_sources
    WHERE registry_version=(
      SELECT max(registry_version) FROM public.client_sync_component_sources
    )
  ),
  'readyRows', (
    SELECT count(*) FROM public.client_sync_component_sources
    WHERE registry_version=(
      SELECT max(registry_version) FROM public.client_sync_component_sources
    ) AND cutover_ready
  ),
  'sourceTables', (
    SELECT count(DISTINCT source_relation)
    FROM public.client_sync_component_sources
    WHERE registry_version=(
      SELECT max(registry_version) FROM public.client_sync_component_sources
    )
  ),
  'ordinaryDmlTables', (
    SELECT count(DISTINCT (g.table_schema,g.table_name))
    FROM information_schema.role_table_grants g
    WHERE g.grantee IN ('anon','authenticated')
      AND g.privilege_type IN ('INSERT','UPDATE','DELETE')
      AND (quote_ident(g.table_schema)||'.'||quote_ident(g.table_name))::regclass
        IN (
          SELECT DISTINCT source_relation
          FROM public.client_sync_component_sources
          WHERE registry_version=(
            SELECT max(registry_version)
            FROM public.client_sync_component_sources
          )
      )
  ),
  'otherEnabledOccasions', (
    SELECT count(*) FROM public.occasions o
    WHERE COALESCE((o.data->>'client_sync_v1')::boolean, false)
      AND NOT (
        o.organization=${organization}
        AND o.link=${sqlLiteral(occasionLink)}
      )
  ),
  'pgauditInstalled', EXISTS (
    SELECT 1 FROM pg_extension WHERE extname='pgaudit'
  ),
  'pgauditRolesConfigured', (
    EXISTS (
      SELECT 1 FROM pg_db_role_setting s
      JOIN pg_roles r ON r.oid=s.setrole
      WHERE r.rolname='postgres'
        AND array_to_string(s.setconfig, ',') LIKE '%pgaudit.log=write%'
    ) AND EXISTS (
      SELECT 1 FROM pg_db_role_setting s
      JOIN pg_roles r ON r.oid=s.setrole
      WHERE r.rolname='authenticator'
        AND array_to_string(s.setconfig, ',') LIKE '%pgaudit.log=write%'
    )
  )
) AS result;
`;
}

export function buildActivateSql({ organization, occasionLink }) {
  return `
DO $client_sync_cutover$
DECLARE
  v_registry_version integer;
  v_relation regclass;
  v_occasion_id bigint;
  v_config jsonb;
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_extension WHERE extname='pgaudit') THEN
    RAISE EXCEPTION 'pgaudit is not installed';
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_db_role_setting s JOIN pg_roles r ON r.oid=s.setrole
    WHERE r.rolname='postgres'
      AND array_to_string(s.setconfig, ',') LIKE '%pgaudit.log=write%'
  ) OR NOT EXISTS (
    SELECT 1 FROM pg_db_role_setting s JOIN pg_roles r ON r.oid=s.setrole
    WHERE r.rolname='authenticator'
      AND array_to_string(s.setconfig, ',') LIKE '%pgaudit.log=write%'
  ) THEN
    RAISE EXCEPTION 'pgaudit write logging is not configured for required roles';
  END IF;

  SELECT max(registry_version) INTO v_registry_version
  FROM public.client_sync_component_sources;
  IF v_registry_version IS NULL OR NOT EXISTS (
    SELECT 1 FROM public.client_sync_component_sources
    WHERE registry_version=v_registry_version
  ) THEN
    RAISE EXCEPTION 'client sync registry is empty';
  END IF;
  IF EXISTS (
    SELECT 1 FROM public.client_sync_component_sources
    WHERE registry_version=v_registry_version AND disposition='boundary'
  ) THEN
    RAISE EXCEPTION 'client sync registry contains unresolved boundaries';
  END IF;
  IF EXISTS (
    SELECT 1 FROM public.occasions o
    WHERE COALESCE((o.data->>'client_sync_v1')::boolean, false)
      AND NOT (
        o.organization=${organization}
        AND o.link=${sqlLiteral(occasionLink)}
      )
  ) THEN
    RAISE EXCEPTION 'another occasion already has client_sync_v1 enabled';
  END IF;

  SELECT o.id INTO STRICT v_occasion_id
  FROM public.occasions o
  WHERE o.organization=${organization}
    AND o.link=${sqlLiteral(occasionLink)}
  FOR UPDATE;

  FOR v_relation IN
    SELECT DISTINCT source_relation
    FROM public.client_sync_component_sources
    WHERE registry_version=v_registry_version
  LOOP
    EXECUTE format(
      'REVOKE INSERT, UPDATE, DELETE ON TABLE %s FROM anon, authenticated',
      v_relation
    );
  END LOOP;

  IF EXISTS (
    SELECT 1 FROM information_schema.role_table_grants g
    WHERE g.grantee IN ('anon','authenticated')
      AND g.privilege_type IN ('INSERT','UPDATE','DELETE')
      AND (quote_ident(g.table_schema)||'.'||quote_ident(g.table_name))::regclass
        IN (
          SELECT DISTINCT source_relation
          FROM public.client_sync_component_sources
          WHERE registry_version=v_registry_version
        )
  ) THEN
    RAISE EXCEPTION 'ordinary direct DML grants remain after revocation';
  END IF;

  UPDATE public.client_sync_component_sources
  SET cutover_ready=true
  WHERE registry_version=v_registry_version;

  UPDATE public.occasions
  SET data=jsonb_set(
    COALESCE(data, '{}'::jsonb),
    '{client_sync_v1}',
    'true'::jsonb,
    true
  )
  WHERE id=v_occasion_id;

  v_config := public.get_app_config_v219(jsonb_build_object(
    'link', ${sqlLiteral(occasionLink)},
    'form_link', NULL,
    'unit_id', NULL,
    'organization', ${organization},
    'platform', 'release-cutover'
  ));
  IF COALESCE((v_config->>'client_sync_v1')::boolean, false) IS NOT TRUE THEN
    RAISE EXCEPTION 'capability verification failed';
  END IF;
END
$client_sync_cutover$;
`;
}

export function buildDisableSql({ organization, occasionLink }) {
  return `
DO $client_sync_disable$
DECLARE v_count integer;
BEGIN
  UPDATE public.occasions
  SET data=jsonb_set(
    COALESCE(data, '{}'::jsonb),
    '{client_sync_v1}',
    'false'::jsonb,
    true
  )
  WHERE organization=${organization}
    AND link=${sqlLiteral(occasionLink)};
  GET DIAGNOSTICS v_count = ROW_COUNT;
  IF v_count <> 1 THEN
    RAISE EXCEPTION 'expected one target occasion, updated %', v_count;
  END IF;
END
$client_sync_disable$;
`;
}

function parseMode(args) {
  const modes = ['--apply', '--disable'].filter((flag) => args.includes(flag));
  if (modes.length > 1) throw new Error('choose only one operation');
  return modes[0] ?? '--dry-run';
}

export async function main(args = process.argv.slice(2)) {
  const mode = parseMode(args);
  const target = loadTarget();
  const queryTarget = {
    organization: target.organization,
    occasionLink: target.occasionLink,
  };

  if (mode === '--apply') {
    const required = [
      '--audit-gate-confirmed',
      '--legacy-writer-gate-confirmed',
      `--confirm=${target.occasionLink}`,
    ];
    const missing = required.filter((flag) => !args.includes(flag));
    if (missing.length > 0) {
      throw new Error(`activation refused; missing ${missing.join(', ')}`);
    }
    await managementQuery({
      ...target,
      query: buildActivateSql(queryTarget),
    });
  } else if (mode === '--disable') {
    if (!args.includes(`--confirm=${target.occasionLink}`)) {
      throw new Error(`disable refused; missing --confirm=${target.occasionLink}`);
    }
    await managementQuery({
      ...target,
      query: buildDisableSql(queryTarget),
    });
  }

  const rows = await managementQuery({
    ...target,
    query: buildPreflightSql(queryTarget),
  });
  const result = rows[0]?.result;
  if (!result?.occasion) throw new Error('target occasion was not found');
  console.log(JSON.stringify({ mode, projectRef: target.projectRef, ...result }));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
