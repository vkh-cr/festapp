import 'package:fstapp/data_services/client_sync/client_command_transport.dart';
import 'package:fstapp/data_services/client_sync/client_command_response.dart';
import 'package:fstapp/data_services/client_sync/client_sync_protocol.dart';
import 'package:fstapp/data_services/client_sync/client_sync_runtime.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

enum SavedProgramMode { join, remove, replace }

abstract interface class SavedProgramCommands {
  Future<List<int>> update(List<int> eventIds, SavedProgramMode mode);
}

typedef LegacySavedProgramRpcInvoker = Future<dynamic> Function(
  String functionName,
  Map<String, dynamic> parameters,
);
typedef LegacySavedProgramMutation = Future<void> Function(
  List<int> eventIds,
  SavedProgramMode mode,
);
typedef LegacySavedProgramReader = Future<List<int>> Function();

/// Compatibility adapter for cloud projects that predate the atomic
/// `set_saved_program` RPC. The coordinator still sees one authoritative
/// [SavedProgramCommands] interface; only an exact missing-function response
/// enables the former RLS-protected table transport.
///
/// Remove this adapter after every tenant activates the canonical
/// `set_saved_program_client_sync_v1` command path.
class LegacySavedProgramCommands implements SavedProgramCommands {
  LegacySavedProgramCommands(
    SupabaseClient client,
    int occasionId,
    String userId,
  ) : this.withAdapters(
          occasionId: occasionId,
          invoke: (name, parameters) => client.rpc(name, params: parameters),
          mutate: (eventIds, mode) =>
              _mutateDirect(client, userId, eventIds, mode),
          read: () => _readDirect(client, occasionId, userId),
        );

  LegacySavedProgramCommands.withAdapters({
    required int occasionId,
    required LegacySavedProgramRpcInvoker invoke,
    required LegacySavedProgramMutation mutate,
    required LegacySavedProgramReader read,
  })  : _occasionId = occasionId,
        _invoke = invoke,
        _mutate = mutate,
        _read = read;

  final int _occasionId;
  final LegacySavedProgramRpcInvoker _invoke;
  final LegacySavedProgramMutation _mutate;
  final LegacySavedProgramReader _read;

  @override
  Future<List<int>> update(List<int> eventIds, SavedProgramMode mode) async {
    final normalizedIds = eventIds.toSet().toList()..sort();
    try {
      final response = await _invoke('set_saved_program', {
        'p_occasion': _occasionId,
        'p_event_ids': normalizedIds,
        'p_mode': mode.name,
      });
      return (response as List)
          .whereType<num>()
          .map((value) => value.toInt())
          .toList(growable: false);
    } catch (error) {
      if (!isMissingLegacySavedProgramRpc(error)) rethrow;
    }

    if (normalizedIds.length != 1 || mode == SavedProgramMode.replace) {
      throw UnsupportedError(
        'Legacy saved-program fallback supports one join/remove mutation',
      );
    }
    await _mutate(normalizedIds, mode);
    return _read();
  }

  static Future<void> _mutateDirect(
    SupabaseClient client,
    String userId,
    List<int> eventIds,
    SavedProgramMode mode,
  ) async {
    final eventId = eventIds.single;
    if (mode == SavedProgramMode.remove) {
      await client
          .from(Tb.event_users_saved.table)
          .delete()
          .eq(Tb.event_users_saved.event, eventId)
          .eq(Tb.event_users_saved.user, userId);
      return;
    }
    try {
      await client.from(Tb.event_users_saved.table).insert({
        Tb.event_users_saved.event: eventId,
        Tb.event_users_saved.user: userId,
      });
    } on PostgrestException catch (error) {
      // A prior session may already have persisted the same favorite. Treat
      // only the unique-key race as the requested idempotent join.
      if (error.code != '23505') rethrow;
    }
  }

  static Future<List<int>> _readDirect(
    SupabaseClient client,
    int occasionId,
    String userId,
  ) async {
    final rows = await client
        .from(Tb.events.table)
        .select('${Tb.events.id},${Tb.event_users_saved.table}!inner(*)')
        .eq('${Tb.event_users_saved.table}.${Tb.event_users_saved.user}',
            userId)
        .eq(Tb.events.occasion, occasionId)
        .order(Tb.events.id, ascending: true);
    return rows
        .map<int>((row) => (row[Tb.events.id] as num).toInt())
        .toList(growable: false);
  }
}

bool isMissingLegacySavedProgramRpc(Object error) {
  if (error is PostgrestException && error.code == 'PGRST202') return true;
  return error is PostgrestException &&
      error.code == '404' &&
      error.message.contains('set_saved_program');
}

class SupabaseSavedProgramCommands implements SavedProgramCommands {
  SupabaseSavedProgramCommands(SupabaseClient client, this._occasionId)
      : _transport = ClientCommandTransport.supabase(client);

  SupabaseSavedProgramCommands.withTransport(
    this._transport,
    this._occasionId,
  );

  final ClientCommandTransport _transport;
  final int _occasionId;

  @override
  Future<List<int>> update(List<int> eventIds, SavedProgramMode mode) async {
    final contextToken = ClientSyncRuntime.mutationContextToken;
    final raw = await _transport.invoke('set_saved_program_client_sync_v1', {
      'p_occasion': _occasionId,
      'p_event_ids': eventIds.toSet().toList()..sort(),
      'p_mode': mode.name,
    });
    if (!ClientSyncRuntime.isCurrentMutationContext(contextToken)) {
      throw StateError('Saved-program identity changed during mutation');
    }
    final response = ClientCommandResponse.from(raw);
    // EventPage owns this tiny optimistic state transition. Activating the
    // authoritative cache replacements must not bump the process-wide
    // projection epoch: OccasionHomePage keys its routed child by that epoch,
    // which would otherwise dispose and recreate the entire event detail.
    await response.applyReplacements(
      notifyProjection: false,
      expectedContextToken: contextToken,
    );
    if (!ClientSyncRuntime.isCurrentMutationContext(contextToken)) {
      throw StateError('Saved-program identity changed during mutation');
    }
    final data = response.data;
    final saved = ((data['saved'] as List?) ?? const [])
        .whereType<num>()
        .map((id) => id.toInt())
        .toList(growable: false);
    final replacedPrivateProgram = response.replacements.any((replacement) =>
        replacement['component'] ==
        ClientSyncComponent.privateProgram.wireName);
    if (!replacedPrivateProgram) {
      await ClientSyncRuntime.refresh(
        SyncReason.manual,
        privateConsumer: true,
      );
    }
    return saved;
  }
}
