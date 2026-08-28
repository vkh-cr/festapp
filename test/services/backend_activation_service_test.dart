import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/services/backend_activation_service.dart';

void main() {
  const tenant = 'festival-test';
  const legacyUrl = 'https://legacy.supabase.co';
  const canonicalUrl = 'https://api.festapp.net';
  final canonicalBytes = utf8.encode(
    '{"schemaVersion":1,"tenantId":"$tenant","generation":1,'
    '"backend":"canonical"}\n',
  );
  final canonicalSha = sha256.convert(canonicalBytes).toString();

  BackendActivationService service({
    required Map<String, String> storage,
    required Future<List<int>> Function(Uri) fetch,
  }) =>
      BackendActivationService(
        tenantId: tenant,
        manifestUrl: 'https://app.example.test/backend-activation.json',
        canonicalManifestSha256: canonicalSha,
        legacySupabaseUrl: legacyUrl,
        legacyAnonKey: 'legacy-key',
        canonicalSupabaseUrl: canonicalUrl,
        canonicalAnonKey: 'canonical-key',
        read: (key) async => storage[key],
        write: (key, value) async => storage[key] = value,
        fetch: fetch,
      );

  test('defaults to the legacy writer when activation is unavailable',
      () async {
    final resolved = await service(
      storage: {},
      fetch: (_) async => throw Exception('offline'),
    ).resolve();

    expect(resolved.supabaseUrl, legacyUrl);
    expect(resolved.isCanonical, isFalse);
  });

  test('accepts only the exact canonical document and persists it', () async {
    final storage = <String, String>{};
    final first = await service(
      storage: storage,
      fetch: (_) async => canonicalBytes,
    ).resolve();
    expect(first.supabaseUrl, canonicalUrl);
    expect(first.isCanonical, isTrue);

    final sticky = await service(
      storage: storage,
      fetch: (_) async => throw Exception('manifest regressed'),
    ).resolve();
    expect(sticky.supabaseUrl, canonicalUrl);
    expect(sticky.isCanonical, isTrue);
  });

  test('rejects a modified or legacy activation response', () async {
    final storage = <String, String>{};
    final modified = utf8.encode(
      '{"schemaVersion":1,"tenantId":"$tenant","generation":0,'
      '"backend":"legacy"}\n',
    );
    final resolved = await service(
      storage: storage,
      fetch: (_) async => modified,
    ).resolve();

    expect(resolved.supabaseUrl, legacyUrl);
    expect(storage, isEmpty);
  });

  test('storage read and write failures keep the legacy writer', () async {
    final readFailure = BackendActivationService(
      tenantId: tenant,
      manifestUrl: 'https://app.example.test/backend-activation.json',
      canonicalManifestSha256: canonicalSha,
      legacySupabaseUrl: legacyUrl,
      legacyAnonKey: 'legacy-key',
      canonicalSupabaseUrl: canonicalUrl,
      canonicalAnonKey: 'canonical-key',
      read: (_) async => throw Exception('storage unavailable'),
      write: (_, __) async {},
      fetch: (_) async => canonicalBytes,
    );
    expect((await readFailure.resolve()).isCanonical, isFalse);

    final writeFailure = BackendActivationService(
      tenantId: tenant,
      manifestUrl: 'https://app.example.test/backend-activation.json',
      canonicalManifestSha256: canonicalSha,
      legacySupabaseUrl: legacyUrl,
      legacyAnonKey: 'legacy-key',
      canonicalSupabaseUrl: canonicalUrl,
      canonicalAnonKey: 'canonical-key',
      read: (_) async => null,
      write: (_, __) async => throw Exception('storage unavailable'),
      fetch: (_) async => canonicalBytes,
    );
    expect((await writeFailure.resolve()).isCanonical, isFalse);
  });
}
