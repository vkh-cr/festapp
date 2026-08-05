import { assertEquals, assertRejects } from "jsr:@std/assert@1";
import {
  deleteAccountStorageObjects,
  deleteOneSignalUser,
  maskEmail,
  sha256,
} from "./accountDeletion.ts";

Deno.test("account deletion helpers hide identity and hash tokens", async () => {
  assertEquals(maskEmail("alice@example.test"), "a***@example.test");
  assertEquals((await sha256("opaque-token")).length, 64);
});

Deno.test("OneSignal deletion retries transient errors and treats 404 as absent", async () => {
  const statuses = [429, 503, 404];
  const waits: number[] = [];
  await deleteOneSignalUser("app", "secret", "user", {
    fetch: async (_url, init) => {
      assertEquals(init?.method, "DELETE");
      assertEquals((init?.headers as Record<string, string>).Authorization, "Key secret");
      return new Response("", { status: statuses.shift()! });
    },
    wait: async (milliseconds) => { waits.push(milliseconds); },
  });
  assertEquals(waits, [250, 500]);
});

Deno.test("OneSignal deletion does not retry permanent failures", async () => {
  await assertRejects(() => deleteOneSignalUser("app", "secret", "user", {
    fetch: async () => new Response("", { status: 401 }),
    wait: async () => { throw new Error("must not wait"); },
  }), Error, "onesignal_permanent");
});

Deno.test("account deletion removes owned storage in bucket batches", async () => {
  const batches: unknown[] = [
    [
      { bucketId: "private", name: "a.pdf" },
      { bucketId: "images", name: "avatar.png" },
      { bucketId: "private", name: "b.pdf" },
    ],
    [],
  ];
  const removals: Array<[string, string[]]> = [];
  await deleteAccountStorageObjects("request", {
    getBatch: async () => batches.shift(),
    remove: async (bucketId, names) => { removals.push([bucketId, names]); },
  });
  assertEquals(removals, [
    ["private", ["a.pdf", "b.pdf"]],
    ["images", ["avatar.png"]],
  ]);
});

Deno.test("account deletion rejects malformed storage inventory", async () => {
  await assertRejects(() => deleteAccountStorageObjects("request", {
    getBatch: async () => [{ bucketId: "private" }],
    remove: async () => {},
  }), Error, "storage_inventory");
});
