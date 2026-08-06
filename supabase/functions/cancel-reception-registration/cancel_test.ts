import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import type { SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";
import { cancelRegistration } from "./cancel.ts";

Deno.test("cancel blocks the domain before globally revoking refresh sessions", async () => {
  const calls: string[] = [];
  const userClient = {
    rpc() {
      calls.push("domainCancel");
      return Promise.resolve({ data: { code: 200 }, error: null });
    },
  } as unknown as SupabaseClient;
  const admin = {
    auth: {
      admin: {
        getUserById() {
          calls.push("getTarget");
          return Promise.resolve({
            data: { user: { email: "9+guest@test.local" } },
            error: null,
          });
        },
        generateLink() {
          calls.push("generateLink");
          return Promise.resolve({
            data: { properties: { hashed_token: "proof" } },
            error: null,
          });
        },
      },
    },
    rpc() {
      calls.push("markRevoked");
      return Promise.resolve({ data: null, error: null });
    },
  } as unknown as SupabaseClient;
  const anon = {
    auth: {
      verifyOtp() {
        calls.push("verifyOtp");
        return Promise.resolve({
          data: { session: { access_token: "temporary" } },
          error: null,
        });
      },
    },
  } as unknown as SupabaseClient;

  const result = await cancelRegistration(
    42,
    "00000000-0000-4000-8000-000000000001",
    userClient,
    admin,
    anon,
    async () => {
      calls.push("globalSignOut");
    },
  );

  assertEquals(calls, [
    "domainCancel",
    "getTarget",
    "generateLink",
    "verifyOtp",
    "globalSignOut",
    "markRevoked",
  ]);
  assertEquals(result, { status: 200, body: { status: "cancelled" } });
});

Deno.test("auth failure stays fail-closed and retryable after domain cancel", async () => {
  const calls: string[] = [];
  const userClient = {
    rpc() {
      calls.push("domainCancel");
      return Promise.resolve({ data: { code: 200 }, error: null });
    },
  } as unknown as SupabaseClient;
  const admin = {
    auth: {
      admin: {
        getUserById: () =>
          Promise.resolve({
            data: { user: { email: "9+guest@test.local" } },
            error: null,
          }),
        generateLink: () =>
          Promise.resolve({
            data: { properties: { hashed_token: "proof" } },
            error: null,
          }),
      },
    },
    rpc() {
      calls.push("markRevoked");
      return Promise.resolve({ data: null, error: null });
    },
  } as unknown as SupabaseClient;
  const anon = {
    auth: {
      verifyOtp: () =>
        Promise.resolve({
          data: { session: { access_token: "temporary" } },
          error: null,
        }),
    },
  } as unknown as SupabaseClient;

  const result = await cancelRegistration(
    42,
    "00000000-0000-4000-8000-000000000001",
    userClient,
    admin,
    anon,
    async () => {
      calls.push("globalSignOut");
      throw new Error("auth unavailable");
    },
  );

  assertEquals(calls, ["domainCancel", "globalSignOut"]);
  assertEquals(result, {
    status: 202,
    body: { status: "domain_blocked_auth_revocation_pending" },
  });
});
