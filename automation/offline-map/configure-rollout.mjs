#!/usr/bin/env node

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

function fail(message) { throw new Error(message); }

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])]));
  }
  return value;
}

function comparable(occasion) {
  const copy = structuredClone(occasion);
  delete copy.updated_at;
  delete copy.aggregate_version;
  return stable(copy);
}

async function rpc(name, body) {
  const url = process.env.FESTAPP_SUPABASE_URL;
  const anonKey = process.env.FESTAPP_SUPABASE_ANON_KEY;
  const accessToken = process.env.FESTAPP_USER_ACCESS_TOKEN;
  if (!url || !anonKey || !accessToken) fail('Supabase URL, anon key and user access token are required');
  const response = await fetch(`${url}/rest/v1/rpc/${name}`, {
    method: 'POST',
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const error = new Error(`${name} failed (${response.status}): ${(await response.text()).slice(0, 800)}`);
    error.status = response.status;
    throw error;
  }
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

async function getOccasion(occasionLink) {
  try {
    return await rpc('get_occasion_by_link', { link_param: occasionLink });
  } catch (error) {
    if (error.status !== 404) throw error;
    const organizationId = Number(process.env.FESTAPP_ORGANIZATION_ID);
    if (!Number.isSafeInteger(organizationId) || organizationId <= 0) {
      fail('legacy occasion reader requires FESTAPP_ORGANIZATION_ID');
    }
    return rpc('get_occasion_from_link', { org_id: organizationId, link_txt: occasionLink });
  }
}

async function main() {
  const [occasionLink, manifestArg, evidenceRootArg] = process.argv.slice(2);
  if (!occasionLink || !manifestArg || !evidenceRootArg) {
    fail('usage: configure-rollout.mjs OCCASION_LINK MANIFEST.json PRIVATE_EVIDENCE_ROOT');
  }
  const manifestPath = path.resolve(manifestArg);
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const isDualRenderer = manifest.schema_version === 2 && manifest.bundle_mode == null;
  const isMapLibreOnly = manifest.schema_version === 3 && manifest.bundle_mode === 'maplibre_only';
  if ((!isDualRenderer && !isMapLibreOnly) || manifest.occasion?.id == null ||
      !String(manifest.base_url).startsWith('https://assets.festapp.net/')) {
    fail('unsupported or unsafe offline map manifest');
  }

  const before = await getOccasion(occasionLink);
  if (before?.id !== manifest.occasion.id || !Array.isArray(before.features)) {
    fail('occasion identity or feature payload does not match manifest');
  }
  const mapFeatures = before.features.filter(feature => feature?.code === 'map');
  if (mapFeatures.length !== 1) fail(`expected exactly one map feature, found ${mapFeatures.length}`);
  const mbtilesAsset = manifest.assets?.find(asset => asset.role === 'mbtiles');
  const styleAsset = manifest.assets?.find(asset => asset.role === 'style');
  if (!styleAsset || (isDualRenderer && !mbtilesAsset)) {
    fail('manifest is missing required renderer assets');
  }

  const expected = structuredClone(before);
  const mapFeature = expected.features.find(feature => feature?.code === 'map');
  const baseUrl = new URL(manifest.base_url);
  const rendererSettings = {
    ...(mapFeature.map_layer_offline ?? {}),
    logo: null,
    text: '© OpenStreetMap contributors',
    logo_link: null,
    text_link: 'https://www.openstreetmap.org/copyright',
    layer_link: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    offlineMapRenderer: 'maplibre',
    offlineMapBundleManifestURL: new URL('manifest.json', baseUrl).href,
    forceOfflineMap: false,
  };
  if (mbtilesAsset) {
    rendererSettings.offlineMapPackageURL = new URL(mbtilesAsset.path, baseUrl).href;
    rendererSettings.offlineMapStyleURL = new URL(styleAsset.path, baseUrl).href;
    rendererSettings.offlineMapLayerName = manifest.source_name;
  }
  mapFeature.map_layer_offline = rendererSettings;

  await rpc('update_occasion_203', { input_data: expected });
  const after = await getOccasion(occasionLink);
  if (JSON.stringify(comparable(after)) !== JSON.stringify(comparable(expected))) {
    fail('occasion readback differs from the exact settings payload');
  }

  const runId = new Date().toISOString().replace(/[-:.]/g, '').replace('Z', 'Z');
  const runDir = path.resolve(evidenceRootArg, `slunovrat-offline-map-${runId}`);
  fs.mkdirSync(runDir, { recursive: true, mode: 0o700 });
  fs.writeFileSync(path.join(runDir, 'before.json'), `${JSON.stringify(before, null, 2)}\n`, { mode: 0o600 });
  fs.writeFileSync(path.join(runDir, 'after.json'), `${JSON.stringify(after, null, 2)}\n`, { mode: 0o600 });
  const result = {
    occasion_id: after.id,
    occasion_link: occasionLink,
    manifest_url: mapFeature.map_layer_offline.offlineMapBundleManifestURL,
    renderer: 'maplibre',
    force_offline_map: false,
    before_sha256: crypto.createHash('sha256').update(JSON.stringify(stable(before))).digest('hex'),
    after_sha256: crypto.createHash('sha256').update(JSON.stringify(stable(after))).digest('hex'),
    write_contract: 'authenticated-update_occasion_203-used-by-Occasion-Settings',
    deleted_rows: 0,
  };
  fs.writeFileSync(path.join(runDir, 'result.json'), `${JSON.stringify(result, null, 2)}\n`, { mode: 0o600 });
  process.stdout.write(`${JSON.stringify({ ...result, evidence: runDir })}\n`);
}

main().catch(error => {
  process.stderr.write(`ERROR: ${error.message}\n`);
  process.exitCode = 1;
});
