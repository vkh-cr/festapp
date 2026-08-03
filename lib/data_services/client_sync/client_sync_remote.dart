import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:fstapp/data_services/client_sync/client_sync_protocol.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

class PublicHeadResult {
  const PublicHeadResult({required this.notModified, this.head});
  final bool notModified;
  final PublicSyncHead? head;
}

abstract interface class PublicSyncHeadRemote {
  Future<PublicHeadResult> getHead(SyncContext context);
}

abstract interface class PublicComponentRemote {
  Future<List<int>> download(ArtifactDescriptor descriptor,
      {required int maxBytes});
}

abstract interface class PrivateSyncRemote {
  Future<PrivateSyncResponse> getChanges(
      SyncContext context, Map<ClientSyncComponent, int> knownVector);
}

class HttpPublicSyncRemote
    implements PublicSyncHeadRemote, PublicComponentRemote {
  HttpPublicSyncRemote({
    required this.headOrigin,
    required this.artifactOrigin,
    http.Client? client,
  })
      : _client = client ?? http.Client();

  final Uri headOrigin;
  final Uri artifactOrigin;
  final http.Client _client;
  final Map<String, String> _etags = {};

  @override
  Future<PublicHeadResult> getHead(SyncContext context) async {
    final uri = headOrigin.resolve(
        '/v1/public-sync/${context.organizationId}/${context.occasionId}/head');
    final response = await _client.get(uri, headers: {
      'Accept': 'application/json',
      if (_etags[context.publicScope] case final etag?) 'If-None-Match': etag,
    });
    if (response.statusCode == 304) {
      return const PublicHeadResult(notModified: true);
    }
    if (response.statusCode != 200) {
      throw http.ClientException(
          'Public sync head returned ${response.statusCode}', uri);
    }
    if (response.bodyBytes.length > 16 * 1024) {
      throw const FormatException('Public sync head exceeds 16 KiB');
    }
    final etag = response.headers['etag'];
    if (etag != null) _etags[context.publicScope] = etag;
    return PublicHeadResult(
      notModified: false,
      head: PublicSyncHead.fromJson(
          (jsonDecode(utf8.decode(response.bodyBytes)) as Map)
              .cast<String, dynamic>()),
    );
  }

  @override
  Future<List<int>> download(ArtifactDescriptor descriptor,
      {required int maxBytes}) async {
    if (artifactOrigin.scheme != 'https' ||
        descriptor.url.scheme != artifactOrigin.scheme ||
        descriptor.url.host != artifactOrigin.host ||
        descriptor.url.port != artifactOrigin.port) {
      throw const FormatException(
          'Public sync artifact origin is not allowed');
    }
    if (descriptor.bytes < 0 || descriptor.bytes > maxBytes) {
      throw FormatException('Artifact size is outside the component budget');
    }
    final response = await _client.get(descriptor.url, headers: {
      'Accept': descriptor.mediaType,
    });
    if (response.statusCode != 200) {
      throw http.ClientException(
          'Artifact returned ${response.statusCode}', descriptor.url);
    }
    final bytes = response.bodyBytes;
    if (bytes.length != descriptor.bytes || bytes.length > maxBytes) {
      throw const FormatException('Artifact byte length mismatch');
    }
    if (sha256.convert(bytes).toString() != descriptor.sha256.toLowerCase()) {
      throw const FormatException('Artifact SHA-256 mismatch');
    }
    return bytes;
  }
}

class SupabasePrivateSyncRemote implements PrivateSyncRemote {
  SupabasePrivateSyncRemote(this._client);
  final SupabaseClient _client;

  @override
  Future<PrivateSyncResponse> getChanges(
      SyncContext context, Map<ClientSyncComponent, int> knownVector) async {
    final raw = await _client.rpc('get_private_client_sync_v1', params: {
      'p_context': {
        'organizationId': context.organizationId,
        'occasionId': context.occasionId,
      },
      'p_known_private_vector':
          knownVector.map((key, value) => MapEntry(key.wireName, value)),
    });
    final json = (raw as Map).cast<String, dynamic>();
    if (json['code'] != 200) {
      throw StateError('Private sync rejected with code ${json['code']}');
    }
    final data = (json['data'] as Map).cast<String, dynamic>();
    final vector =
        ((data['vector'] as Map?) ?? const {}).cast<String, dynamic>();
    final replacements =
        ((data['components'] as List?) ?? const []).map((item) {
      final component = (item as Map).cast<String, dynamic>();
      final parsed =
          ClientSyncComponentWireName.parse(component['component'] as String);
      if (!parsed.isPrivate) {
        throw const FormatException(
            'Private handshake returned a public component');
      }
      return PrivateComponentReplacement(
        component: parsed,
        revision: component['revision'] as int,
        payload: component['payload'],
      );
    }).toList(growable: false);
    return PrivateSyncResponse(
      serverTime: DateTime.parse(data['serverTime'] as String).toUtc(),
      vector: vector.map((key, value) {
        final component = ClientSyncComponentWireName.parse(key);
        if (!component.isPrivate) {
          throw const FormatException(
              'Private vector contains a public component');
        }
        return MapEntry(component, value as int);
      }),
      replacements: replacements,
    );
  }
}
