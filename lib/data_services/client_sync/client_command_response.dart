import 'package:fstapp/data_services/client_sync/client_sync_protocol.dart';
import 'package:fstapp/data_services/client_sync/client_sync_runtime.dart';

/// Parsed standard response shared by all typed domain command adapters.
/// Domain adapters still own DTOs and result types; this module owns only the
/// mutation protocol envelope and cache replacement activation.
class ClientCommandResponse {
  const ClientCommandResponse({
    required this.status,
    required this.code,
    required this.data,
    required this.replacements,
  });

  final String status;
  final int code;
  final Map<String, dynamic> data;
  final List<Map<String, dynamic>> replacements;

  factory ClientCommandResponse.from(Object? raw) {
    if (raw is! Map) {
      throw const FormatException('Invalid client command response');
    }
    final response = raw.cast<String, dynamic>();
    final status = response['status'];
    final code = response['code'];
    final data = response['data'];
    final sync = response['sync'];
    if (status is! String ||
        !const {'applied', 'unchanged', 'rejected', 'conflict'}
            .contains(status) ||
        code is! num ||
        data is! Map ||
        sync is! Map ||
        sync['replacements'] is! List) {
      throw const FormatException('Invalid client command envelope');
    }
    return ClientCommandResponse(
      status: status,
      code: code.toInt(),
      data: data.cast<String, dynamic>(),
      replacements: (sync['replacements'] as List)
          .map((item) => (item as Map).cast<String, dynamic>())
          .toList(growable: false),
    );
  }

  Future<void> applyReplacements({
    bool notifyProjection = true,
    String? expectedContextToken,
  }) async {
    for (final replacement in replacements) {
      final component =
          ClientSyncComponentWireName.parse(replacement['component'] as String);
      final revision = (replacement['revision'] as num).toInt();
      if (component == ClientSyncComponent.livePublic) {
        await ClientSyncRuntime.applyLiveReplacement(
          revision: revision,
          payload: replacement['payload'],
          notifyProjection: notifyProjection,
          expectedContextToken: expectedContextToken,
        );
      } else if (component.isPrivate) {
        await ClientSyncRuntime.applyPrivateReplacement(
          component: component,
          revision: revision,
          payload: replacement['payload'],
          notifyProjection: notifyProjection,
          expectedContextToken: expectedContextToken,
        );
      } else {
        await ClientSyncRuntime.applyPublicReplacement(
          component: component,
          revision: revision,
          payload: replacement['payload'],
          notifyProjection: notifyProjection,
          expectedContextToken: expectedContextToken,
        );
      }
    }
  }
}
