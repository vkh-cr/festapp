import { createHash } from 'node:crypto';
import { GetObjectCommand, HeadObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

export const REQUIRED_CATALOGS = [
  'occasion_config',
  'program_catalog',
  'map_catalog',
  'content_catalog',
  'unit_catalog',
] as const;
type CatalogName = (typeof REQUIRED_CATALOGS)[number];

const RAW_BUDGETS: Record<string, number> = {
  program_catalog: 1024 * 1024,
  occasion_config: 1024 * 1024,
  map_catalog: 1024 * 1024,
  content_catalog: 2 * 1024 * 1024,
  unit_catalog: 1024 * 1024,
  live_public: 512 * 1024,
};

export interface DirtyKey {
  component: string;
  scope_type: string;
  scope_id: number;
  entity_id: number;
  source_revision: number;
  claim_token: string;
}

export interface Descriptor {
  revision: number;
  mediaType: string;
  url: string;
  sha256: string;
  bytes: number;
}

export interface PublicationState {
  scope: string;
  catalog?: Descriptor;
  live?: Descriptor;
  components: Partial<Record<CatalogName, Descriptor>>;
  headEtag?: string;
}

export interface PublisherDatabase {
  claim(limit: number): Promise<DirtyKey[]>;
  refreshEvents(occasionId: number, eventIds: number[]): Promise<void>;
  refreshCleaning(occasionId: number): Promise<void>;
  nextReleaseRevision(): Promise<number>;
  component(name: string, scopeType: string, scopeId: number): Promise<unknown>;
  publicationState(scopeType: string, scopeId: number): Promise<PublicationState>;
  complete(input: CompletionInput): Promise<boolean>;
}

export interface CompletionInput {
  scopeType: string;
  scopeId: number;
  releaseRevision?: number;
  manifest?: unknown;
  manifestUrl?: string;
  manifestSha256?: string;
  manifestBytes?: number;
  live?: Descriptor;
  head: unknown;
  headEtag: string;
  catalogClaimTokens: string[];
  liveClaimTokens: string[];
}

export interface ObjectStore {
  putImmutable(key: string, bytes: Uint8Array, contentType: string): Promise<void>;
  putHead(key: string, bytes: Uint8Array, expectedPreviousEtag?: string): Promise<{ etag: string; head: unknown }>;
}

function encoded(value: unknown): Uint8Array {
  return new TextEncoder().encode(JSON.stringify(value));
}

function digest(bytes: Uint8Array): string {
  return createHash('sha256').update(bytes).digest('hex');
}

function assertBudget(component: string, bytes: Uint8Array): void {
  if (bytes.byteLength > (RAW_BUDGETS[component] ?? 1024 * 1024)) {
    throw new Error(`${component} exceeds its raw publication budget`);
  }
}

export class ClientSyncPublisher {
  constructor(
    private readonly db: PublisherDatabase,
    private readonly store: ObjectStore,
    private readonly assetOrigin = 'https://assets.festapp.net',
    private readonly now = () => new Date(),
  ) {}

  async runOnce(): Promise<number> {
    const dirty = await this.db.claim(1000);
    const scopes = new Map<string, DirtyKey[]>();
    for (const key of dirty) {
      const scope = `${key.scope_type}/${key.scope_id}`;
      scopes.set(scope, [...(scopes.get(scope) ?? []), key]);
    }
    const failures: unknown[] = [];
    for (const keys of scopes.values()) {
      try { await this.publishScope(keys); } catch (error) { failures.push(error); }
    }
    if (failures.length) throw new AggregateError(failures, 'one or more client-sync scopes failed');
    return scopes.size;
  }

  private async artifact(name: string, scopeType: string, scopeId: number, scope: string): Promise<Descriptor> {
    const value = await this.db.component(name, scopeType, scopeId) as { revision: number; scope: string };
    if (value.scope !== scope) throw new Error(`${name} returned a mismatched scope`);
    const bytes = encoded(value);
    assertBudget(name, bytes);
    const sha256 = digest(bytes);
    const key = `client-sync/v1/${scope}/${name}/${value.revision}-${sha256}.json`;
    await this.store.putImmutable(key, bytes, 'application/json');
    return { revision: Number(value.revision), mediaType: 'application/json', url: `${this.assetOrigin}/${key}`, sha256, bytes: bytes.byteLength };
  }

  private async publishScope(keys: DirtyKey[]): Promise<void> {
    const [{ scope_type: scopeType, scope_id: scopeId }] = keys;
    const previous = await this.db.publicationState(scopeType, scopeId);
    const catalogKeys = keys.filter((key) => key.component !== 'live_public');
    const liveKeys = keys.filter((key) => key.component === 'live_public');
    let catalog = previous.catalog;
    let live = previous.live;
    let manifest: unknown | undefined;
    let manifestUrl: string | undefined;
    let manifestSha256: string | undefined;
    let manifestBytes: number | undefined;
    let releaseRevision: number | undefined;
    let catalogFailure: unknown;
    let liveFailure: unknown;

    if (catalogKeys.length) {
      try {
        const dirtyNames = new Set(catalogKeys.map((key) => key.component));
        const descriptors = { ...previous.components };
        for (const name of REQUIRED_CATALOGS) {
          if (dirtyNames.has(name) || !descriptors[name]) {
            descriptors[name] = await this.artifact(name, scopeType, scopeId, previous.scope);
          }
        }
        for (const name of REQUIRED_CATALOGS) {
          if (!descriptors[name]) throw new Error(`missing required ${name} descriptor`);
        }
        releaseRevision = await this.db.nextReleaseRevision();
        manifest = {
          protocol: 1,
          schema: 1,
          scope: previous.scope,
          releaseRevision,
          generatedAt: this.now().toISOString(),
          components: Object.fromEntries(REQUIRED_CATALOGS.map((name) => [name, descriptors[name]])),
        };
        const bytes = encoded(manifest);
        if (bytes.byteLength > 16 * 1024) throw new Error('release manifest exceeds 16 KiB');
        manifestBytes = bytes.byteLength;
        manifestSha256 = digest(bytes);
        const key = `client-sync/v1/${previous.scope}/manifests/${releaseRevision}-${manifestSha256}.json`;
        await this.store.putImmutable(key, bytes, 'application/json');
        manifestUrl = `${this.assetOrigin}/${key}`;
        catalog = { revision: releaseRevision, mediaType: 'application/json', url: manifestUrl, sha256: manifestSha256, bytes: manifestBytes };
      } catch (error) { catalogFailure = error; }
    }

    if (liveKeys.length) {
      try {
        const eventIds = [...new Set(liveKeys.filter((key) => key.entity_id > 0).map((key) => key.entity_id))];
        await this.db.refreshEvents(scopeId, eventIds);
        await this.db.refreshCleaning(scopeId);
        live = await this.artifact('live_public', scopeType, scopeId, previous.scope);
      } catch (error) { liveFailure = error; }
    }

    const catalogSucceeded = catalogKeys.length > 0 && !catalogFailure;
    const liveSucceeded = liveKeys.length > 0 && !liveFailure;
    if (!catalogSucceeded && !liveSucceeded) throw (catalogFailure ?? liveFailure ?? new Error('nothing publishable'));
    if (!catalog) throw new Error('cannot publish a public head without an initial catalog');

    const head = { protocol: 1, serverTime: this.now().toISOString(), catalog, ...(live ? { live } : {}), publicationPending: Boolean(catalogFailure || liveFailure) };
    const headBytes = encoded(head);
    if (headBytes.byteLength > 16 * 1024) throw new Error('public head exceeds 16 KiB');
    const headKey = `client-sync/v1/${previous.scope}/public-head.json`;
    const headWrite = await this.store.putHead(headKey, headBytes, previous.headEtag);
    const acceptedHead = headWrite.head as typeof head;
    const acceptedLive = acceptedHead.live;
    if (liveSucceeded && !acceptedLive) {
      throw new Error('accepted public head omitted the live descriptor');
    }
    const accepted = await this.db.complete({
      scopeType, scopeId,
      ...(catalogSucceeded ? { releaseRevision, manifest, manifestUrl, manifestSha256, manifestBytes } : {}),
      ...(liveSucceeded ? { live: acceptedLive! } : {}),
      head: acceptedHead, headEtag: headWrite.etag,
      catalogClaimTokens: catalogSucceeded ? [...new Set(catalogKeys.map((key) => key.claim_token))] : [],
      liveClaimTokens: liveSucceeded ? [...new Set(liveKeys.map((key) => key.claim_token))] : [],
    });
    if (!accepted) throw new Error('database rejected a stale public head');
    if (catalogFailure || liveFailure) throw (catalogFailure ?? liveFailure);
  }
}

export class R2S3ObjectStore implements ObjectStore {
  constructor(private readonly client: S3Client, private readonly bucket: string) {}

  async putImmutable(key: string, bytes: Uint8Array, contentType: string): Promise<void> {
    try {
      const existing = await this.client.send(new HeadObjectCommand({ Bucket: this.bucket, Key: key }));
      if (existing.ContentLength !== bytes.byteLength) throw new Error(`immutable key collision: ${key}`);
      return;
    } catch (error) {
      if ((error as { $metadata?: { httpStatusCode?: number } }).$metadata?.httpStatusCode !== 404) throw error;
    }
    await this.client.send(new PutObjectCommand({ Bucket: this.bucket, Key: key, Body: bytes, ContentType: contentType, CacheControl: 'public, max-age=31536000, immutable' }));
    const verified = await this.client.send(new HeadObjectCommand({ Bucket: this.bucket, Key: key }));
    if (verified.ContentLength !== bytes.byteLength) throw new Error(`R2 verification failed: ${key}`);
  }

  async putHead(key: string, bytes: Uint8Array, expectedPreviousEtag?: string): Promise<{ etag: string; head: unknown }> {
    const next = JSON.parse(new TextDecoder().decode(bytes)) as { catalog?: { revision?: number }; live?: { revision?: number } };
    let previousEtag = expectedPreviousEtag;
    try {
      const current = await this.client.send(new GetObjectCommand({ Bucket: this.bucket, Key: key }));
      previousEtag = current.ETag;
      const currentBytes = new Uint8Array(await current.Body!.transformToByteArray());
      const old = JSON.parse(new TextDecoder().decode(currentBytes)) as typeof next;
      const oldCatalog = Number(old.catalog?.revision ?? -1), newCatalog = Number(next.catalog?.revision ?? -1);
      const oldLive = Number(old.live?.revision ?? -1), newLive = Number(next.live?.revision ?? -1);
      if (newCatalog === oldCatalog && newLive === oldLive) {
        return {
          etag: current.ETag ?? `"${digest(currentBytes)}"`,
          head: old,
        };
      }
      if (newCatalog < oldCatalog || newLive < oldLive) {
        throw new Error('refusing stale or unchanged R2 head');
      }
    } catch (error) {
      const status = (error as { $metadata?: { httpStatusCode?: number } }).$metadata?.httpStatusCode;
      if (status !== 404) throw error;
    }
    await this.client.send(new PutObjectCommand({ Bucket: this.bucket, Key: key, Body: bytes, ContentType: 'application/json', CacheControl: 'public, max-age=0, must-revalidate', ...(previousEtag ? { IfMatch: previousEtag } : { IfNoneMatch: '*' }) }));
    const verified = await this.client.send(new HeadObjectCommand({ Bucket: this.bucket, Key: key }));
    return {
      etag: verified.ETag ?? `"${digest(bytes)}"`,
      head: next,
    };
  }
}
