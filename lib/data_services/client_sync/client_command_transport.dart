import 'dart:async';

import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:uuid/uuid.dart';

typedef ClientCommandRpc = Future<Object?> Function(
  String functionName,
  Map<String, dynamic> parameters,
);

/// Internal transport for typed command adapters.
///
/// The command UUID is allocated once per invocation and remains stable across
/// transport-level retries. Domain ports remain statically bound to their RPC.
class ClientCommandTransport {
  ClientCommandTransport(this._rpc, {this.maxAttempts = 2});

  factory ClientCommandTransport.supabase(SupabaseClient client) =>
      ClientCommandTransport(
        (functionName, parameters) =>
            client.rpc(functionName, params: parameters),
      );

  final ClientCommandRpc _rpc;
  final int maxAttempts;

  Future<Object?> invoke(
    String functionName,
    Map<String, dynamic> parameters,
  ) async {
    final commandId = const Uuid().v4();
    final boundParameters = <String, dynamic>{
      ...parameters,
      'p_command_id': commandId,
    };
    for (var attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        return await _rpc(functionName, boundParameters);
      } on TimeoutException {
        if (attempt == maxAttempts) rethrow;
      } on http.ClientException {
        if (attempt == maxAttempts) rethrow;
      }
    }
    throw StateError('Command retry loop completed without a result');
  }
}
