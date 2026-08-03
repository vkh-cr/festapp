import { S3Client } from '@aws-sdk/client-s3';
import { ClientSyncPublisher, R2S3ObjectStore, type CompletionInput, type DirtyKey, type PublicationState, type PublisherDatabase } from './publisher.js';

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

class SupabasePublisherDatabase implements PublisherDatabase {
  constructor(private readonly origin: string, private readonly serviceKey: string) {}

  private async rpc<T>(name: string, params: unknown): Promise<T> {
    const response = await fetch(`${this.origin}/rest/v1/rpc/${name}`, {
      method: 'POST',
      headers: {
        apikey: this.serviceKey,
        Authorization: `Bearer ${this.serviceKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    if (!response.ok) throw new Error(`${name} returned ${response.status}: ${await response.text()}`);
    return (await response.json()) as T;
  }

  claim(limit: number) {
    return this.rpc<DirtyKey[]>('claim_client_projection_dirty_v1', { p_limit: limit });
  }
  refreshEvents(occasionId: number, eventIds: number[]) {
    return this.rpc<void>('refresh_event_public_state_v1', { p_occasion: occasionId, p_event_ids: eventIds });
  }
  refreshCleaning(occasionId: number) {
    return this.rpc<void>('refresh_cleaning_public_state_v1', { p_occasion: occasionId });
  }
  nextReleaseRevision() {
    return this.rpc<number>('next_client_sync_release_revision_v1', {});
  }
  component(name: string, scopeType: string, scopeId: number) {
    return this.rpc<unknown>('get_public_client_sync_component_v1', {
      p_component: name,
      p_scope_type: scopeType,
      p_scope_id: scopeId,
    });
  }
  publicationState(scopeType: string, scopeId: number) {
    return this.rpc<PublicationState>('get_client_sync_publication_state_v1', {
      p_scope_type: scopeType,
      p_scope_id: scopeId,
    });
  }
  complete(input: CompletionInput) {
    return this.rpc<boolean>('complete_client_sync_publication_classes_v1', {
      p_scope_type: input.scopeType,
      p_scope_id: input.scopeId,
      p_release_revision: input.releaseRevision ?? null,
      p_manifest: input.manifest ?? null,
      p_manifest_url: input.manifestUrl ?? null,
      p_manifest_sha256: input.manifestSha256 ?? null,
      p_manifest_bytes: input.manifestBytes ?? null,
      p_live: input.live ?? null,
      p_head_json: input.head,
      p_head_etag: input.headEtag,
      p_catalog_claim_tokens: input.catalogClaimTokens,
      p_live_claim_tokens: input.liveClaimTokens,
    });
  }
}

export function createPublisher(): ClientSyncPublisher {
  const accountId = required('CLOUDFLARE_ACCOUNT_ID');
  const s3 = new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: required('R2_ACCESS_KEY_ID'),
      secretAccessKey: required('R2_SECRET_ACCESS_KEY'),
    },
  });
  return new ClientSyncPublisher(
    new SupabasePublisherDatabase(required('SUPABASE_URL'), required('SUPABASE_SERVICE_ROLE_KEY')),
    new R2S3ObjectStore(s3, required('R2_BUCKET')),
    required('SYNC_ASSET_ORIGIN'),
  );
}
