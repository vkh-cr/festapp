export type LoginQr = { occasion: number; token: string };

export function parseLoginQr(payload: unknown): LoginQr | null {
  if (typeof payload !== "string" || payload.length > 160) return null;
  const match = /^festapp-login:v1:([1-9][0-9]*):([A-Za-z0-9_-]{40,80})$/.exec(
    payload,
  );
  if (!match) return null;
  const occasion = Number(match[1]);
  if (!Number.isSafeInteger(occasion)) return null;
  return { occasion, token: match[2] };
}

export async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
