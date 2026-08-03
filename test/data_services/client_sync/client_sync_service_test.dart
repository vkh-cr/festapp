import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/data_services/client_sync/client_sync_protocol.dart';
import 'package:fstapp/data_services/client_sync/client_sync_remote.dart';
import 'package:fstapp/data_services/client_sync/client_sync_service.dart';
import 'package:fstapp/data_services/client_sync/client_sync_store.dart';

void main() {
  const context = SyncContext(
    organizationId: 1,
    occasionId: 2,
    occasionLink: 'test',
    identityEpoch: 0,
  );

  test('a complete valid public release activates one catalog generation',
      () async {
    final fixture = _PublicFixture(validMapClosure: true);
    final store = _MemoryStore();
    final service = ClientSyncService(
      publicHeadRemote: fixture,
      publicComponentRemote: fixture,
      privateRemote: _NoPrivateRemote(),
      store: store,
      clock: () => DateTime.utc(2026, 8, 3),
    );

    await service.open(context).first;
    await service.refresh(reason: SyncReason.bootstrap);

    expect(store.activations, hasLength(1));
    expect(store.activations.single.type, SyncFreshnessClass.catalog);
    expect(
      store.activations.single.payloads.keys,
      containsAll(ReleaseManifest.requiredComponents),
    );
    await service.dispose();
  });

  test('a dangling map icon keeps the previous public generation active',
      () async {
    final fixture = _PublicFixture(validMapClosure: false);
    final store = _MemoryStore();
    final service = ClientSyncService(
      publicHeadRemote: fixture,
      publicComponentRemote: fixture,
      privateRemote: _NoPrivateRemote(),
      store: store,
      clock: () => DateTime.utc(2026, 8, 3),
    );

    await service.open(context).first;
    await service.refresh(reason: SyncReason.bootstrap);

    expect(store.activations, isEmpty);
    await service.dispose();
  });

  test('reconnect refreshes immediately and resumes periodic synchronization',
      () async {
    final fixture = _PublicFixture(validMapClosure: true);
    final service = ClientSyncService(
      publicHeadRemote: fixture,
      publicComponentRemote: fixture,
      privateRemote: _NoPrivateRemote(),
      store: _MemoryStore(),
      clock: () => DateTime.utc(2026, 8, 3),
    );

    await service.open(context).first;
    await service.reconnect();

    expect(fixture.headCalls, 1);
    await service.dispose();
  });

  test('failed public activations do not advance the private-tick cadence',
      () async {
    final fixture = _PublicFixture(validMapClosure: false);
    final private = _CountingPrivateRemote();
    var now = DateTime.utc(2026, 8, 3);
    final service = ClientSyncService(
      publicHeadRemote: fixture,
      publicComponentRemote: fixture,
      privateRemote: private,
      store: _MemoryStore(),
      clock: () => now,
    );
    const authenticated = SyncContext(
      organizationId: 1,
      occasionId: 2,
      occasionLink: 'test',
      userId: 'user-a',
      identityEpoch: 1,
    );

    await service.open(authenticated).first;
    for (var i = 0; i < 5; i++) {
      await service.refresh(reason: SyncReason.timer, privateConsumer: true);
      now = now.add(const Duration(minutes: 5));
    }

    expect(private.calls, 0);
    await service.dispose();
  });

  test('a component artifact from another scope is never activated', () async {
    final fixture =
        _PublicFixture(validMapClosure: true, componentScope: '1/999');
    final store = _MemoryStore();
    final service = ClientSyncService(
      publicHeadRemote: fixture,
      publicComponentRemote: fixture,
      privateRemote: _NoPrivateRemote(),
      store: store,
      clock: () => DateTime.utc(2026, 8, 3),
    );

    await service.open(context).first;
    await service.refresh(reason: SyncReason.bootstrap);

    expect(store.activations, isEmpty);
    await service.dispose();
  });

  test('a catalog that regresses an active component is never activated',
      () async {
    final fixture = _PublicFixture(validMapClosure: true);
    final store = _MemoryStore(
      initialCatalog: StoredSyncGeneration(
        pointer: 'newer-generation',
        revisions: {
          for (final component in ReleaseManifest.requiredComponents)
            component: 2,
        },
        updatedAt: DateTime.utc(2026, 8, 3),
      ),
    );
    final service = ClientSyncService(
      publicHeadRemote: fixture,
      publicComponentRemote: fixture,
      privateRemote: _NoPrivateRemote(),
      store: store,
      clock: () => DateTime.utc(2026, 8, 3),
    );

    await service.open(context).first;
    await service.refresh(reason: SyncReason.bootstrap);

    expect(store.activations, isEmpty);
    await service.dispose();
  });
}

class _PublicFixture implements PublicSyncHeadRemote, PublicComponentRemote {
  _PublicFixture(
      {required bool validMapClosure, String componentScope = '1/2'}) {
    final payloads = <ClientSyncComponent, Object?>{
      ClientSyncComponent.occasionConfig: <String, Object?>{},
      ClientSyncComponent.programCatalog: {'events': <Object?>[]},
      ClientSyncComponent.mapCatalog: {
        'places': [
          {'id': 1, 'icon': validMapClosure ? 10 : 11}
        ],
        'placeTypes': <Object?>[],
        'paths': <Object?>[],
        'icons': [
          {'id': 10, 'svg': '<svg />'}
        ],
      },
      ClientSyncComponent.contentCatalog: <String, Object?>{},
      ClientSyncComponent.unitCatalog: <String, Object?>{},
    };
    final descriptors = <String, Object?>{};
    var digestIndex = 1;
    for (final entry in payloads.entries) {
      final uri = Uri.parse('https://assets.test/${entry.key.wireName}.json');
      final bytes = utf8.encode(jsonEncode({
        'protocol': 1,
        'schema': 1,
        'component': entry.key.wireName,
        'scope': componentScope,
        'revision': 1,
        'generatedAt': '2026-08-03T00:00:00Z',
        'payload': entry.value,
      }));
      _bytes[uri] = bytes;
      descriptors[entry.key.wireName] = _descriptor(
          uri, bytes.length, 1, digestIndex.toString().padLeft(64, '0'));
      digestIndex++;
    }
    final manifest = utf8.encode(jsonEncode({
      'protocol': 1,
      'schema': 1,
      'scope': '1/2',
      'releaseRevision': 1,
      'generatedAt': '2026-08-03T00:00:00Z',
      'components': descriptors,
    }));
    _bytes[_manifestUri] = manifest;
    _head = PublicSyncHead(
      protocol: 1,
      serverTime: DateTime.utc(2026, 8, 3),
      catalog: ArtifactDescriptor.fromJson(
          _descriptor(_manifestUri, manifest.length, 1, 'f'.padLeft(64, 'f'))),
      live: null,
      publicationPending: false,
    );
  }

  static final _manifestUri = Uri.parse('https://assets.test/manifest.json');
  final Map<Uri, List<int>> _bytes = {};
  late final PublicSyncHead _head;
  int headCalls = 0;

  static Map<String, dynamic> _descriptor(
          Uri uri, int bytes, int revision, String digest) =>
      {
        'revision': revision,
        'mediaType': 'application/json',
        'url': uri.toString(),
        'sha256': digest,
        'bytes': bytes,
      };

  @override
  Future<PublicHeadResult> getHead(SyncContext context) async {
    headCalls++;
    return PublicHeadResult(notModified: false, head: _head);
  }

  @override
  Future<List<int>> download(ArtifactDescriptor descriptor,
          {required int maxBytes}) async =>
      _bytes[descriptor.url]!;
}

class _NoPrivateRemote implements PrivateSyncRemote {
  @override
  Future<PrivateSyncResponse> getChanges(
          SyncContext context, Map<ClientSyncComponent, int> knownVector) =>
      throw StateError('private sync was not expected');
}

class _CountingPrivateRemote implements PrivateSyncRemote {
  int calls = 0;

  @override
  Future<PrivateSyncResponse> getChanges(
      SyncContext context, Map<ClientSyncComponent, int> knownVector) async {
    calls++;
    return PrivateSyncResponse(
      serverTime: DateTime.utc(2026, 8, 3),
      vector: const {},
      replacements: const [],
    );
  }
}

class _Activation {
  const _Activation(this.type, this.payloads);
  final SyncFreshnessClass type;
  final Map<ClientSyncComponent, Object?> payloads;
}

class _MemoryStore extends ClientSyncStore {
  _MemoryStore({this.initialCatalog});

  final StoredSyncGeneration? initialCatalog;
  final Map<String, List<int>> blobs = {};
  final List<_Activation> activations = [];

  @override
  Future<StoredSyncGeneration?> activeGeneration(
          String scope, SyncFreshnessClass type) async =>
      type == SyncFreshnessClass.catalog ? initialCatalog : null;

  @override
  Future<List<int>?> readBlob(String sha256) async => blobs[sha256];

  @override
  Future<void> stageBlob(String sha256, List<int> bytes) async {
    blobs[sha256] = bytes;
  }

  @override
  Future<void> activate({
    required String scope,
    required SyncFreshnessClass type,
    required String pointer,
    required DateTime updatedAt,
    required Map<ClientSyncComponent, int> revisions,
    required Map<ClientSyncComponent, Object?> payloads,
  }) async {
    activations.add(_Activation(type, payloads));
  }
}
