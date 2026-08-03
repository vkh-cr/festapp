import { ClientSyncPublisher } from './publisher.js';
import { R2NativeObjectStore } from './r2_object_store.js';
import { SupabasePublisherDatabase } from './supabase_database.js';

export interface Env {
  PUBLIC_SYNC: R2Bucket;
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  SYNC_ASSET_ORIGIN: string;
  SYNC_SCOPE_IDS: string;
}

function scopeIds(value: string): number[] {
  const parsed = value.split(',').map((item) => Number(item.trim()));
  if (!parsed.length || parsed.some((item) => !Number.isSafeInteger(item) || item <= 0)) {
    throw new Error('SYNC_SCOPE_IDS must contain positive integer IDs');
  }
  return parsed;
}

export function createWorkerPublisher(env: Env): ClientSyncPublisher {
  return new ClientSyncPublisher(
    new SupabasePublisherDatabase(
      env.SUPABASE_URL,
      env.SUPABASE_SERVICE_ROLE_KEY,
      scopeIds(env.SYNC_SCOPE_IDS),
    ),
    new R2NativeObjectStore(env.PUBLIC_SYNC),
    env.SYNC_ASSET_ORIGIN,
  );
}

export default {
  async scheduled(_controller: ScheduledController, env: Env): Promise<void> {
    try {
      const publishedScopes = await createWorkerPublisher(env).runOnce();
      console.log(JSON.stringify({ event: 'client_sync_publish', publishedScopes }));
    } catch (error) {
      const errors = error instanceof AggregateError ? error.errors : [error];
      console.error(JSON.stringify({
        event: 'client_sync_publish_failed',
        errors: errors.map((item) => item instanceof Error ? item.message : String(item)),
      }));
      throw error;
    }
  },
} satisfies ExportedHandler<Env>;
