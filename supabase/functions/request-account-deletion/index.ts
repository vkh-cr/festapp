import { deliverEmail } from "../_shared/emailDelivery.ts";
import { accountDeletionCors, createOpaqueToken, jsonResponse, maskEmail, sha256 } from "../_shared/accountDeletion.ts";
import { createUserClient, supabaseAdmin } from "../_shared/supabaseUtil.ts";

const organizationId = Number(Deno.env.get("ACCOUNT_DELETION_ORGANIZATION_ID") || "9");
const confirmationBase = Deno.env.get("ACCOUNT_DELETION_CONFIRMATION_URL") ||
  "https://csmostrava.festapp.net/delete-account";

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: accountDeletionCors });
  if (request.method !== "POST") return jsonResponse({ error: "method_not_allowed" }, 405);

  const authorization = request.headers.get("Authorization");
  if (!authorization?.startsWith("Bearer ")) return jsonResponse({ error: "unauthenticated" }, 401);

  let body: Record<string, unknown> = {};
  try {
    const text = await request.text();
    body = text ? JSON.parse(text) : {};
  } catch {
    return jsonResponse({ error: "invalid_request" }, 400);
  }
  if (!body || Array.isArray(body) || Object.keys(body).length !== 0) {
    return jsonResponse({ error: "authoritative_identity_fields_forbidden" }, 400);
  }

  const { data: authData, error: authError } = await createUserClient(authorization).auth.getUser();
  const user = authData.user;
  if (authError || !user?.id || !user.email) return jsonResponse({ error: "unauthenticated" }, 401);

  const { data: profile } = await supabaseAdmin.from("user_info")
    .select("organization").eq("id", user.id).eq("organization", organizationId).maybeSingle();
  if (!profile) return jsonResponse({ error: "account_unavailable" }, 403);

  const token = createOpaqueToken();
  const tokenHash = await sha256(token);
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
  const maskedEmail = maskEmail(user.email);
  const { data: created, error: createError } = await supabaseAdmin.rpc(
    "create_account_deletion_request",
    { p_user: user.id, p_organization: organizationId, p_token_hash: tokenHash,
      p_expires_at: expiresAt, p_masked_email: maskedEmail },
  );
  if (createError) {
    const cooldown = createError.message?.includes("account_deletion_cooldown");
    return jsonResponse({ error: cooldown ? "cooldown" : "request_failed" }, cooldown ? 429 : 500);
  }

  const requestId = created.requestId as string;
  try {
    await deliverEmail({
      to: user.email,
      templateCode: "ACCOUNT_DELETION_CONFIRM",
      context: { organization: organizationId },
      substitutions: {
        confirmationUrl: `${confirmationBase}?token=${encodeURIComponent(token)}`,
        expiresAt,
        appName: "CSM Ostrava",
      },
      from: `CSM Ostrava | Festapp <${Deno.env.get("DEFAULT_EMAIL") || ""}>`,
    });
    await supabaseAdmin.rpc("set_account_deletion_email_state", {
      p_request_id: requestId, p_delivered: true,
    });
  } catch {
    await supabaseAdmin.rpc("set_account_deletion_email_state", {
      p_request_id: requestId, p_delivered: false,
    });
    return jsonResponse({ error: "delivery_failed" }, 503);
  }

  return jsonResponse({ status: "email_sent", maskedEmail, expiresAt }, 202);
});
