import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/data_services/client_sync/client_sync_protocol.dart';
import 'package:fstapp/data_services/client_sync/client_sync_projection.dart';
import 'package:fstapp/data_services/client_sync/client_sync_remote.dart';
import 'package:fstapp/data_services/client_sync/client_sync_service.dart';
import 'package:fstapp/data_services/client_sync/client_sync_store.dart';
import 'package:timezone/data/latest.dart' as timezone_data;
import 'package:timezone/timezone.dart' as timezone;

void main() {
  setUpAll(() {
    timezone_data.initializeTimeZones();
    timezone.setLocalLocation(timezone.getLocation('Europe/Prague'));
  });

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

  test('catalog activation schedules every occasion media URL for caching',
      () async {
    final fixture = _PublicFixture(
      validMapClosure: true,
      mediaUrls: const [
        'https://img.festapp.net/description-a.webp',
        'https://img.festapp.net/header-b.jpg',
      ],
    );
    final cached = <Uri>[];
    final service = ClientSyncService(
      publicHeadRemote: fixture,
      publicComponentRemote: fixture,
      privateRemote: _NoPrivateRemote(),
      store: _MemoryStore(),
      cacheOccasionMedia: (_, urls, {required refreshExisting}) async {
        expect(refreshExisting, isTrue);
        cached.addAll(urls);
      },
      clock: () => DateTime.utc(2026, 8, 3),
    );

    await service.open(context).first;
    await service.refresh(reason: SyncReason.bootstrap);

    expect(cached, [
      Uri.parse('https://img.festapp.net/description-a.webp'),
      Uri.parse('https://img.festapp.net/header-b.jpg'),
    ]);
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

  test(
      'a companion self-login caches owner-created attendance for offline projection',
      () async {
    final fixture = _PublicFixture(validMapClosure: true);
    final private = _CompanionPrivateRemote();
    final store = _MemoryStore();
    final service = ClientSyncService(
      publicHeadRemote: fixture,
      publicComponentRemote: fixture,
      privateRemote: private,
      store: store,
      clock: () => DateTime.utc(2026, 8, 5),
    );
    const companionContext = SyncContext(
      organizationId: 1,
      occasionId: 2,
      occasionLink: 'companion-test',
      userId: 'companion-user',
      identityEpoch: 1,
    );

    await service.open(companionContext).first;
    await service.refresh(reason: SyncReason.login, privateConsumer: true);

    final activation = store.activations.singleWhere(
      (item) => item.type == SyncFreshnessClass.privateIdentity,
    );
    expect(activation.scope, '1/2/companion-user/1');
    final privateProgram = activation
        .payloads[ClientSyncComponent.privateProgram] as Map<String, dynamic>;
    expect(privateProgram['signedIn'], [42]);

    final offlineEvents = ClientSyncProjection.projectEvents(
      catalog: const {
        'events': [
          {
            'id': 42,
            'title': 'Owner-created attendance fixture',
            'startTime': '2026-08-12T10:00:00Z',
            'endTime': '2026-08-12T11:00:00Z',
          },
        ],
      },
      map: const {},
      live: const {},
      privateProgram: privateProgram,
    );
    expect(offlineEvents.single.isSignedIn, isTrue);
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

  test('a matching catalog pointer repairs missing component payloads',
      () async {
    final fixture = _PublicFixture(validMapClosure: true);
    final store = _MemoryStore(
      initialCatalog: StoredSyncGeneration(
        pointer: 'f'.padLeft(64, 'f'),
        revisions: {
          for (final component in ReleaseManifest.requiredComponents)
            component: 1,
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

    expect(store.activations, hasLength(1));
    expect(
      store.activations.single.payloads.keys,
      containsAll(ReleaseManifest.requiredComponents),
    );
    await service.dispose();
  });

  test('private sync does not advertise a missing cached payload', () async {
    final fixture = _PublicFixture(validMapClosure: true);
    final private = _RepairingPrivateRemote();
    final privateRevisions = {
      for (final component in ClientSyncComponent.values)
        if (component.isPrivate) component: 1,
    };
    final store = _MemoryStore(
      initialPrivate: StoredSyncGeneration(
        pointer: 'private',
        revisions: privateRevisions,
        updatedAt: DateTime.utc(2026, 8, 3),
      ),
    );
    const authenticated = SyncContext(
      organizationId: 1,
      occasionId: 2,
      occasionLink: 'test',
      userId: 'user-a',
      identityEpoch: 1,
    );
    final service = ClientSyncService(
      publicHeadRemote: fixture,
      publicComponentRemote: fixture,
      privateRemote: private,
      store: store,
      clock: () => DateTime.utc(2026, 8, 3),
    );

    await service.open(authenticated).first;
    await service.refresh(reason: SyncReason.bootstrap, privateConsumer: true);

    expect(private.receivedKnownVector, isEmpty);
    final activation = store.activations.singleWhere(
      (item) => item.type == SyncFreshnessClass.privateIdentity,
    );
    expect(activation.payloads.keys, containsAll(privateRevisions.keys));
    await service.dispose();
  });
}

class _PublicFixture implements PublicSyncHeadRemote, PublicComponentRemote {
  _PublicFixture(
      {required bool validMapClosure,
      String componentScope = '1/2',
      List<String> mediaUrls = const []}) {
    final payloads = <ClientSyncComponent, Object?>{
      ClientSyncComponent.occasionConfig: <String, Object?>{
        'media': [
          for (var i = 0; i < mediaUrls.length; i++)
            {'id': i + 1, 'url': mediaUrls[i]},
        ],
      },
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

class _CompanionPrivateRemote implements PrivateSyncRemote {
  @override
  Future<PrivateSyncResponse> getChanges(
      SyncContext context, Map<ClientSyncComponent, int> knownVector) async {
    final vector = {
      for (final component in ClientSyncComponent.values)
        if (component.isPrivate) component: 1,
    };
    return PrivateSyncResponse(
      serverTime: DateTime.utc(2026, 8, 5),
      vector: vector,
      replacements: [
        for (final component in vector.keys)
          PrivateComponentReplacement(
            component: component,
            revision: 1,
            payload: component == ClientSyncComponent.privateProgram
                ? <String, dynamic>{
                    'signedIn': [42],
                    'saved': <int>[],
                  }
                : <String, dynamic>{},
          ),
      ],
    );
  }
}

class _RepairingPrivateRemote implements PrivateSyncRemote {
  Map<ClientSyncComponent, int>? receivedKnownVector;

  @override
  Future<PrivateSyncResponse> getChanges(
      SyncContext context, Map<ClientSyncComponent, int> knownVector) async {
    receivedKnownVector = Map.of(knownVector);
    final vector = {
      for (final component in ClientSyncComponent.values)
        if (component.isPrivate) component: 1,
    };
    return PrivateSyncResponse(
      serverTime: DateTime.utc(2026, 8, 3),
      vector: vector,
      replacements: [
        for (final component in vector.keys)
          if (!knownVector.containsKey(component))
            PrivateComponentReplacement(
              component: component,
              revision: 1,
              payload: <String, dynamic>{},
            ),
      ],
    );
  }
}

class _Activation {
  const _Activation(this.scope, this.type, this.payloads);
  final String scope;
  final SyncFreshnessClass type;
  final Map<ClientSyncComponent, Object?> payloads;
}

class _MemoryStore extends ClientSyncStore {
  _MemoryStore({this.initialCatalog, this.initialPrivate});

  final StoredSyncGeneration? initialCatalog;
  final StoredSyncGeneration? initialPrivate;
  final Map<String, List<int>> blobs = {};
  final Map<ClientSyncComponent, Object?> storedComponents = {};
  final List<_Activation> activations = [];

  @override
  Future<StoredSyncGeneration?> activeGeneration(
      String scope, SyncFreshnessClass type) async {
    return switch (type) {
      SyncFreshnessClass.catalog => initialCatalog,
      SyncFreshnessClass.privateIdentity => initialPrivate,
      SyncFreshnessClass.live => null,
    };
  }

  @override
  Future<List<int>?> readBlob(String sha256) async => blobs[sha256];

  @override
  Future<Object?> readComponent(String scope, SyncFreshnessClass type,
          ClientSyncComponent component) async =>
      storedComponents[component];

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
    activations.add(_Activation(scope, type, payloads));
  }

  @override
  Future<bool> activateGuarded({
    required String scope,
    required SyncFreshnessClass type,
    required String pointer,
    required DateTime updatedAt,
    required Map<ClientSyncComponent, int> revisions,
    required Map<ClientSyncComponent, Object?> payloads,
    required bool Function() precondition,
  }) async {
    if (!precondition()) return false;
    activations.add(_Activation(scope, type, payloads));
    return true;
  }
}
