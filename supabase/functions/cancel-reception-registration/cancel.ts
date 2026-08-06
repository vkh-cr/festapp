import type { SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";

export type SignOutTarget = (accessToken: string) => Promise<void>;

export async function cancelRegistration(
  occasion: number,
  user: string,
  userClient: SupabaseClient,
  admin: SupabaseClient,
  anon: SupabaseClient,
  signOutTarget: SignOutTarget,
) {
  const { data: domain, error: domainError } = await userClient.rpc(
    "cancel_reception_registration_v1",
    { p_occasion: occasion, p_user: user },
  );
  if (domainError || domain?.code !== 200) {
    return {
      status: domain?.code ?? 403,
      body: { error: "registration_unavailable" },
    };
  }
  try {
    const { data: target, error: targetError } = await admin.auth.admin
      .getUserById(user);
    if (targetError || !target.user?.email) {
      throw targetError ?? new Error("target unavailable");
    }
    const { data: link, error: linkError } = await admin.auth.admin
      .generateLink({ type: "magiclink", email: target.user.email });
    if (linkError || !link.properties?.hashed_token) {
      throw linkError ?? new Error("link unavailable");
    }
    const { data: verified, error: verifyError } = await anon.auth.verifyOtp({
      type: "magiclink",
      token_hash: link.properties.hashed_token,
    });
    if (verifyError || !verified.session) {
      throw verifyError ?? new Error("session unavailable");
    }
    await signOutTarget(verified.session.access_token);
    await admin.rpc("mark_reception_auth_revoked_v1", {
      p_occasion: occasion,
      p_user: user,
    });
    return { status: 200, body: { status: "cancelled" } };
  } catch {
    return {
      status: 202,
      body: { status: "domain_blocked_auth_revocation_pending" },
    };
  }
}
