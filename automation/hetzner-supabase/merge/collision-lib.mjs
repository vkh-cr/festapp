import crypto from 'node:crypto';

export function evidenceHash(value, key) {
  if (value === null || value === undefined || value === '') return null;
  return crypto.createHmac('sha256', key).update(String(value)).digest('hex');
}

export function classifyAuthCollisions(defaultUsers, aUsers, key) {
  const defaultById = new Map(defaultUsers.map((user) => [user.id, user]));
  const defaultByEmail = new Map(defaultUsers.filter((user) => user.normalized_email)
    .map((user) => [user.normalized_email, user]));
  const sameUuidDifferentEmail = [];
  const sameEmailDifferentUuid = [];
  const sameIdentity = [];
  for (const user of aUsers) {
    const byId = defaultById.get(user.id);
    if (byId) {
      const entry = {
        default_user_id: byId.id,
        a_user_id: user.id,
        default_email_hmac: evidenceHash(byId.normalized_email, key),
        a_email_hmac: evidenceHash(user.normalized_email, key),
        default_verified: Boolean(byId.verified),
        a_verified: Boolean(user.verified),
      };
      if (byId.normalized_email !== user.normalized_email) sameUuidDifferentEmail.push(entry);
      else sameIdentity.push(entry);
    }
    const byEmail = user.normalized_email && defaultByEmail.get(user.normalized_email);
    if (byEmail && byEmail.id !== user.id) {
      sameEmailDifferentUuid.push({
        default_user_id: byEmail.id,
        a_user_id: user.id,
        email_hmac: evidenceHash(user.normalized_email, key),
        default_verified: Boolean(byEmail.verified),
        a_verified: Boolean(user.verified),
        status: byEmail.verified && user.verified ? 'manual-merge-required' : 'ambiguous-unverified-blocker',
      });
    }
  }
  return { same_uuid_different_email: sameUuidDifferentEmail, same_email_different_uuid: sameEmailDifferentUuid, same_identity: sameIdentity };
}

export function classifyStorageCollisions(defaultObjects, aObjects, key) {
  const defaultByKey = new Map(defaultObjects.map((object) => [`${object.bucket_id}\0${object.name}`, object]));
  const collisions = [];
  for (const object of aObjects) {
    const canonical = defaultByKey.get(`${object.bucket_id}\0${object.name}`);
    if (!canonical) continue;
    const etagKnown = Boolean(canonical.etag && object.etag);
    const sameMetadata = etagKnown && canonical.etag === object.etag && String(canonical.size) === String(object.size);
    collisions.push({
      bucket_id: object.bucket_id,
      object_key_hmac: evidenceHash(object.name, key),
      default_size: canonical.size === null ? null : Number(canonical.size),
      a_size: object.size === null ? null : Number(object.size),
      metadata_match: sameMetadata,
      status: sameMetadata ? 'requires-object-sha256-confirmation' : 'content-collision-blocker',
    });
  }
  return collisions;
}
