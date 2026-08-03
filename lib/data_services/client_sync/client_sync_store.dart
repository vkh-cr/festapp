import 'dart:convert';

import 'package:fstapp/data_services/client_sync/client_sync_protocol.dart';
import 'package:fstapp/services/storage_helper.dart';

class StoredSyncGeneration {
  const StoredSyncGeneration({
    required this.pointer,
    required this.revisions,
    required this.updatedAt,
  });

  final String pointer;
  final Map<ClientSyncComponent, int> revisions;
  final DateTime updatedAt;
}

/// Content-addressed client cache with scoped, atomically activated pointers.
class ClientSyncStore {
  ClientSyncStore({this.databasePath = 'client_sync_v1.db'});

  final String databasePath;

  String _blobKey(String digest) => 'blob/$digest';
  String _pointerKey(String scope, SyncFreshnessClass type) =>
      'pointer/$scope/${type.name}';
  String _generationKey(
          String scope, SyncFreshnessClass type, String pointer) =>
      'generation/$scope/${type.name}/$pointer';

  Future<bool> containsBlob(String sha256) async =>
      await StorageHelper.get(_blobKey(sha256), databasePath) != null;

  Future<void> stageBlob(String sha256, List<int> bytes) =>
      StorageHelper.set(_blobKey(sha256), base64Encode(bytes), databasePath);

  Future<List<int>?> readBlob(String sha256) async {
    final value = await StorageHelper.get(_blobKey(sha256), databasePath);
    return value == null ? null : base64Decode(value);
  }

  Future<StoredSyncGeneration?> activeGeneration(
      String scope, SyncFreshnessClass type) async {
    final pointer =
        await StorageHelper.get(_pointerKey(scope, type), databasePath);
    if (pointer == null) return null;
    final raw = await StorageHelper.get(
        _generationKey(scope, type, pointer), databasePath);
    if (raw == null) return null;
    final json = jsonDecode(raw) as Map<String, dynamic>;
    return StoredSyncGeneration(
      pointer: pointer,
      revisions: (json['revisions'] as Map<String, dynamic>).map((key, value) =>
          MapEntry(ClientSyncComponentWireName.parse(key), value as int)),
      updatedAt: DateTime.parse(json['updatedAt'] as String).toUtc(),
    );
  }

  Future<Object?> readComponent(String scope, SyncFreshnessClass type,
      ClientSyncComponent component) async {
    final generation = await activeGeneration(scope, type);
    if (generation == null) return null;
    final raw = await StorageHelper.get(
        '${_generationKey(scope, type, generation.pointer)}/${component.wireName}',
        databasePath);
    return raw == null ? null : jsonDecode(raw);
  }

  /// Stages all component references and switches the class pointer in the
  /// same transaction. Each consistency class is intentionally independent.
  Future<void> activate({
    required String scope,
    required SyncFreshnessClass type,
    required String pointer,
    required DateTime updatedAt,
    required Map<ClientSyncComponent, int> revisions,
    required Map<ClientSyncComponent, Object?> payloads,
  }) async {
    final prefix = _generationKey(scope, type, pointer);
    final metadata = jsonEncode({
      'revisions': revisions.map((key, value) => MapEntry(key.wireName, value)),
      'updatedAt': updatedAt.toUtc().toIso8601String(),
    });
    await StorageHelper.setAllAtomic({
      prefix: metadata,
      for (final entry in payloads.entries)
        '$prefix/${entry.key.wireName}': jsonEncode(entry.value),
      _pointerKey(scope, type): pointer,
    }, databasePath);
  }

  Future<void> clearPrivateScope(String scope) async {
    await StorageHelper.setAllAtomic(
        {_pointerKey(scope, SyncFreshnessClass.privateIdentity): null},
        databasePath);
    await StorageHelper.removeByPrefix(
        'generation/$scope/${SyncFreshnessClass.privateIdentity.name}/',
        databasePath);
  }
}
