import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/data_services/client_sync/client_sync_protocol.dart';
import 'package:fstapp/data_services/client_sync/client_sync_store.dart';

void main() {
  test('cache activation rejects a lower component revision', () {
    expect(
      clientSyncRevisionsRegress(
        const {ClientSyncComponent.privateProgram: 8},
        const {ClientSyncComponent.privateProgram: 7},
      ),
      isTrue,
    );
    expect(
      clientSyncRevisionsRegress(
        const {ClientSyncComponent.privateProgram: 8},
        const {ClientSyncComponent.privateProgram: 9},
      ),
      isFalse,
    );
  });

  test('cache activation cannot silently drop an active component revision',
      () {
    expect(
      clientSyncRevisionsRegress(
        const {
          ClientSyncComponent.privateProgram: 8,
          ClientSyncComponent.privateProfile: 3,
        },
        const {ClientSyncComponent.privateProgram: 9},
      ),
      isTrue,
    );
  });
}
