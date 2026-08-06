import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import type { SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";
import { exchangeLoginQr } from "./exchange.ts";

Deno.test("valid login QR returns only a normal session after marking use", async () => {
  const calls: string[] = [];
  const admin = {
    rpc(name: string) {
      calls.push(name);
      if (name === "resolve_reception_login_qr_v1") {
        return Promise.resolve({
          data: { authEmail: "9+guest@test.local" },
          error: null,
        });
      }
      return Promise.resolve({ data: null, error: null });
    },
    auth: {
      admin: {
        generateLink() {
          calls.push("generateLink");
          return Promise.resolve({
            data: { properties: { hashed_token: "otp-proof" } },
            error: null,
          });
        },
      },
    },
  } as unknown as SupabaseClient;
  const anon = {
    auth: {
      verifyOtp() {
        calls.push("verifyOtp");
        return Promise.resolve({
          data: {
            session: {
              access_token: "access",
              refresh_token: "refresh",
              expires_at: 123,
              token_type: "bearer",
            },
          },
          error: null,
        });
      },
    },
  } as unknown as SupabaseClient;

  const result = await exchangeLoginQr(
    `festapp-login:v1:42:${"A".repeat(43)}`,
    admin,
    anon,
  );

  assertEquals(calls, [
    "resolve_reception_login_qr_v1",
    "generateLink",
    "verifyOtp",
    "mark_reception_login_qr_used_v1",
  ]);
  assertEquals(result, {
    access_token: "access",
    refresh_token: "refresh",
    expires_at: 123,
    token_type: "bearer",
  });
});
