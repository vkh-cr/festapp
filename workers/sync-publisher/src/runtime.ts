import { S3Client } from '@aws-sdk/client-s3';
import { ClientSyncPublisher } from './publisher.js';
import { R2S3ObjectStore } from './s3_object_store.js';
import { SupabasePublisherDatabase } from './supabase_database.js';

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
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
