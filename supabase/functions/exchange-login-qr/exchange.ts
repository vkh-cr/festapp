import type { SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";
import { parseLoginQr, sha256Hex } from "./qr.ts";

export async function exchangeLoginQr(
  payload: unknown,
  admin: SupabaseClient,
  anon: SupabaseClient,
) {
  const parsed = parseLoginQr(payload);
  if (!parsed) return null;
  const { data: resolved, error: resolveError } = await admin.rpc(
    "resolve_reception_login_qr_v1",
    {
      p_occasion: parsed.occasion,
      p_token_hash: await sha256Hex(parsed.token),
    },
  );
  if (resolveError || !resolved?.authEmail) return null;
  const { data: link, error: linkError } = await admin.auth.admin.generateLink({
    type: "magiclink",
    email: resolved.authEmail,
  });
  const hashedToken = link?.properties?.hashed_token;
  if (linkError || !hashedToken) return null;
  const { data: verified, error: verifyError } = await anon.auth.verifyOtp({
    type: "magiclink",
    token_hash: hashedToken,
  });
  if (verifyError || !verified.session) return null;
  const { error: markError } = await admin.rpc(
    "mark_reception_login_qr_used_v1",
    {
      p_occasion: parsed.occasion,
      p_token_hash: await sha256Hex(parsed.token),
    },
  );
  if (markError) return null;
  return {
    access_token: verified.session.access_token,
    refresh_token: verified.session.refresh_token,
    expires_at: verified.session.expires_at,
    token_type: verified.session.token_type,
  };
}
