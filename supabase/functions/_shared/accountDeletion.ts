export const accountDeletionCors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

export function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...accountDeletionCors, "Content-Type": "application/json" },
  });
}

export function maskEmail(email: string) {
  const [local, domain] = email.split("@");
  if (!local || !domain) return "***";
  return `${local.slice(0, 1)}***@${domain}`;
}

export function createOpaqueToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return btoa(String.fromCharCode(...bytes))
    .replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

export async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export type DeleteOneSignalDependencies = {
  fetch: typeof fetch;
  wait(milliseconds: number): Promise<void>;
};

export type AccountDeletionStorageObject = {
  bucketId: string;
  name: string;
};

export type DeleteAccountStorageDependencies = {
  getBatch(requestId: string, limit: number): Promise<unknown>;
  remove(bucketId: string, names: string[]): Promise<void>;
};

export async function deleteAccountStorageObjects(
  requestId: string,
  dependencies: DeleteAccountStorageDependencies,
  batchLimit = 100,
) {
  if (batchLimit < 1 || batchLimit > 1000) throw new Error("storage_batch_limit");
  for (let batchNumber = 0; batchNumber < 10_000; batchNumber++) {
    const value = await dependencies.getBatch(requestId, batchLimit);
    if (!Array.isArray(value)) throw new Error("storage_inventory");
    if (value.length === 0) return;
    const grouped = new Map<string, string[]>();
    for (const item of value) {
      if (!item || typeof item !== "object") throw new Error("storage_inventory");
      const { bucketId, name } = item as Partial<AccountDeletionStorageObject>;
      if (typeof bucketId !== "string" || !bucketId || typeof name !== "string" || !name) {
        throw new Error("storage_inventory");
      }
      grouped.set(bucketId, [...(grouped.get(bucketId) || []), name]);
    }
    for (const [bucketId, names] of grouped) await dependencies.remove(bucketId, names);
  }
  throw new Error("storage_inventory_limit");
}

export async function deleteOneSignalUser(
  appId: string,
  apiKey: string,
  externalId: string,
  dependencies: DeleteOneSignalDependencies = {
    fetch,
    wait: (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds)),
  },
) {
  const url = `https://api.onesignal.com/apps/${encodeURIComponent(appId)}/users/by/external_id/${encodeURIComponent(externalId)}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    const response = await dependencies.fetch(url, {
      method: "DELETE",
      headers: { Authorization: `Key ${apiKey}` },
    });
    if (response.ok || response.status === 404) return;
    if (response.status !== 429 && response.status < 500) {
      throw new Error("onesignal_permanent");
    }
    if (attempt < 2) await dependencies.wait(250 * (2 ** attempt));
  }
  throw new Error("onesignal_retryable");
}
