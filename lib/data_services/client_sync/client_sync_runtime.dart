import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/occasion/occasion_link_model.dart';
import 'package:fstapp/components/occasion/occasion_model.dart';
import 'package:fstapp/data_services/client_sync/client_sync_protocol.dart';
import 'package:fstapp/data_services/client_sync/client_sync_remote.dart';
import 'package:fstapp/data_services/client_sync/client_sync_service.dart';
import 'package:fstapp/data_services/client_sync/client_sync_store.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// Process-wide owner of the selected legacy/v1 context mode.
///
/// Features may request a refresh reason but cannot create timers or network
/// loaders. A capability change is observed only on the next context bootstrap.
class ClientSyncRuntime {
  static final state = ValueNotifier<ClientSyncState?>(null);
  static final projectionEpoch = ValueNotifier<int>(0);
  static ClientSyncService? _service;
  static Future<void> Function(DateTime)? _onLastSuccess;
  static StreamSubscription<ClientSyncState>? _subscription;
  static OccasionLinkModel? _selectedModel;
  static bool _v1Selected = false;
  static int _identityEpoch = 0;
  static SyncContext? _context;
  static String? _projectionSignature;

  static bool get isV1Selected => _v1Selected;
  static DateTime? get latestLastSuccess {
    DateTime? latest;
    for (final classState
        in state.value?.classes.values ?? const <SyncClassState>[]) {
      final candidate = classState.lastSuccess;
      if (candidate != null && (latest == null || candidate.isAfter(latest))) {
        latest = candidate;
      }
    }
    return latest;
  }

  static DateTime? lastSuccess(SyncFreshnessClass type) =>
      state.value?.classes[type]?.lastSuccess;
  static ClientSyncStore get store => _store;
  static final ClientSyncStore _store = ClientSyncStore();

  static void configure(
    SupabaseClient supabase, {
    Future<void> Function(DateTime)? onLastSuccess,
  }) {
    _onLastSuccess = onLastSuccess;
    final publicRemote = HttpPublicSyncRemote(
      headOrigin: Uri.parse(AppConfig.syncHeadOrigin),
      artifactOrigin: Uri.parse(AppConfig.syncAssetOrigin),
    );
    _service = ClientSyncService(
      publicHeadRemote: publicRemote,
      publicComponentRemote: publicRemote,
      privateRemote: SupabasePrivateSyncRemote(supabase),
      store: _store,
    );
  }

  static Future<OccasionLinkModel?> restoreLastContext() async {
    final stored = await _store.readLastContext();
    if (stored == null) return null;
    final publicScope = '${stored.organizationId}/${stored.occasionId}';
    final catalog = await _store.activeGeneration(
      publicScope,
      SyncFreshnessClass.catalog,
    );
    if (!isRestorableSyncContext(stored, catalog)) {
      await _store.clearLastContext();
      return null;
    }
    final model = OccasionLinkModel(
      code: 200,
      clientSyncV1: true,
      occasion: OccasionModel(
        id: stored.occasionId,
        link: stored.occasionLink,
        organization: stored.organizationId,
        isOpen: true,
        isHidden: false,
        isPromoted: false,
      ),
    );
    await bootstrap(model, networkAvailable: false);
    return model;
  }

  static Future<void> bootstrap(
    OccasionLinkModel model, {
    bool networkAvailable = true,
  }) async {
    final service = _service;
    final occasion = model.occasion;
    if (service == null || occasion?.id == null || occasion?.link == null) {
      return;
    }
    await _subscription?.cancel();
    await service.closeContext();
    _selectedModel = model;
    _v1Selected = model.clientSyncV1;
    _context = null;
    _projectionSignature = null;
    projectionEpoch.value++;
    state.value = null;
    if (!_v1Selected) {
      if (networkAvailable) await _store.clearLastContext();
      return;
    }
    final context = SyncContext(
      organizationId: occasion?.organization ?? AppConfig.organization,
      occasionId: occasion!.id!,
      occasionLink: occasion.link!,
      userId: Supabase.instance.client.auth.currentUser?.id,
      identityEpoch: _identityEpoch,
    );
    _context = context;
    final opened = Completer<void>();
    _subscription = service.open(context).listen(
      (value) {
        state.value = value;
        final latest = latestLastSuccess;
        final persist = _onLastSuccess;
        if (latest != null && persist != null) {
          unawaited(persist(latest));
        }
        unawaited(_updateProjectionEpoch());
        if (!opened.isCompleted) opened.complete();
      },
      onError: (Object error, StackTrace stackTrace) {
        if (!opened.isCompleted) opened.completeError(error, stackTrace);
      },
    );
    await opened.future;
    if (!networkAvailable) return;
    final existing = await _store.activeGeneration(
        context.publicScope, SyncFreshnessClass.catalog);
    if (existing == null) {
      await service.start();
    } else {
      unawaited(service.start());
    }
    final activated = await _store.activeGeneration(
      context.publicScope,
      SyncFreshnessClass.catalog,
    );
    if (activated != null) {
      await _store.saveLastContext(StoredSyncContext(
        organizationId: context.organizationId,
        occasionId: context.occasionId,
        occasionLink: context.occasionLink,
      ));
    }
  }

  static Future<void> identityChanged() async {
    final oldPrivateScope = _context?.privateScope;
    _identityEpoch++;
    if (oldPrivateScope != null) {
      await _store.clearPrivateScope(oldPrivateScope);
    }
    final selected = _selectedModel;
    if (selected != null) await bootstrap(selected);
  }

  static Future<void> refresh(SyncReason reason,
      {bool privateConsumer = false}) async {
    if (!_v1Selected) return;
    await _service?.refresh(reason: reason, privateConsumer: privateConsumer);
  }

  static Future<void> connectivityRestored() async {
    if (!_v1Selected) return;
    await _service?.reconnect();
  }

  static Future<Map<String, dynamic>?> readPublic(
      ClientSyncComponent component) async {
    final context = _context;
    if (!_v1Selected || context == null) return null;
    final type = component == ClientSyncComponent.livePublic
        ? SyncFreshnessClass.live
        : SyncFreshnessClass.catalog;
    final stored =
        await _store.readComponent(context.publicScope, type, component);
    if (stored is! Map) return null;
    final artifact = stored.cast<String, dynamic>();
    final payload = artifact['payload'];
    return payload is Map ? payload.cast<String, dynamic>() : artifact;
  }

  static Future<Object?> readPrivate(ClientSyncComponent component) async {
    final context = _context;
    final scope = context?.privateScope;
    if (!_v1Selected || scope == null) return null;
    final payload = await _store.readComponent(
        scope, SyncFreshnessClass.privateIdentity, component);
    return payload;
  }

  static Future<void> applyPrivateReplacement({
    required ClientSyncComponent component,
    required int revision,
    required Object? payload,
  }) async {
    final context = _context;
    final scope = context?.privateScope;
    if (!_v1Selected || context == null || scope == null) return;
    final current = await _store.activeGeneration(
        scope, SyncFreshnessClass.privateIdentity);
    if (current != null && (current.revisions[component] ?? -1) > revision) {
      return;
    }
    final revisions = {...?current?.revisions, component: revision};
    final payloads = <ClientSyncComponent, Object?>{};
    for (final item in revisions.keys) {
      payloads[item] = item == component
          ? payload
          : await _store.readComponent(
              scope, SyncFreshnessClass.privateIdentity, item);
    }
    await _store.activate(
      scope: scope,
      type: SyncFreshnessClass.privateIdentity,
      pointer:
          '${context.identityEpoch}-${DateTime.now().toUtc().microsecondsSinceEpoch}',
      updatedAt: DateTime.now().toUtc(),
      revisions: revisions,
      payloads: payloads,
    );
    _notifyProjectionChanged();
  }

  static Future<void> applyPublicReplacement({
    required ClientSyncComponent component,
    required int revision,
    required Object? payload,
  }) async {
    final context = _context;
    if (!_v1Selected || context == null) return;
    final current = await _store.activeGeneration(
        context.publicScope, SyncFreshnessClass.catalog);
    if (current == null) return;
    if ((current.revisions[component] ?? -1) > revision) return;
    final revisions = {...current.revisions, component: revision};
    final payloads = <ClientSyncComponent, Object?>{};
    for (final item in revisions.keys) {
      payloads[item] = item == component
          ? payload
          : await _store.readComponent(
              context.publicScope, SyncFreshnessClass.catalog, item);
    }
    await _store.activate(
      scope: context.publicScope,
      type: SyncFreshnessClass.catalog,
      pointer: 'mutation-${DateTime.now().toUtc().microsecondsSinceEpoch}',
      updatedAt: DateTime.now().toUtc(),
      revisions: revisions,
      payloads: payloads,
    );
    _notifyProjectionChanged();
  }

  static Future<void> applyLiveReplacement({
    required int revision,
    required Object? payload,
  }) async {
    final context = _context;
    if (!_v1Selected || context == null) return;
    final current = await _store.activeGeneration(
        context.publicScope, SyncFreshnessClass.live);
    if (current != null &&
        (current.revisions[ClientSyncComponent.livePublic] ?? -1) > revision) {
      return;
    }
    await _store.activate(
      scope: context.publicScope,
      type: SyncFreshnessClass.live,
      pointer: 'mutation-live-$revision',
      updatedAt: DateTime.now().toUtc(),
      revisions: {ClientSyncComponent.livePublic: revision},
      payloads: {ClientSyncComponent.livePublic: payload},
    );
    _notifyProjectionChanged();
  }

  static void _notifyProjectionChanged() {
    final current = state.value;
    if (current == null) return;
    state.value = ClientSyncState(
      context: current.context,
      classes: {...current.classes},
    );
    _projectionSignature = null;
    projectionEpoch.value++;
  }

  static Future<void> _updateProjectionEpoch() async {
    final context = _context;
    if (!_v1Selected || context == null) return;
    final catalog = await _store.activeGeneration(
        context.publicScope, SyncFreshnessClass.catalog);
    final live = await _store.activeGeneration(
        context.publicScope, SyncFreshnessClass.live);
    final privateScope = context.privateScope;
    final private = privateScope == null
        ? null
        : await _store.activeGeneration(
            privateScope, SyncFreshnessClass.privateIdentity);
    if (_context != context) return;
    final signature = [
      context.publicScope,
      catalog?.pointer ?? '-',
      live?.pointer ?? '-',
      privateScope ?? '-',
      private?.pointer ?? '-',
    ].join('|');
    if (_projectionSignature == signature) return;
    _projectionSignature = signature;
    projectionEpoch.value++;
  }

  static void setForeground(bool foreground) {
    if (_v1Selected) _service?.setForeground(foreground);
  }
}

bool isRestorableSyncContext(
  StoredSyncContext? context,
  StoredSyncGeneration? catalog,
) =>
    context != null && catalog != null;
