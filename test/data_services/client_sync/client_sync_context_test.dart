import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/data_services/client_sync/client_sync_store.dart';

void main() {
  test('offline bootstrap context survives serialization', () {
    const original = StoredSyncContext(
      organizationId: 7,
      occasionId: 42,
      occasionLink: 'festival-2026',
    );

    final restored = StoredSyncContext.fromJson(original.toJson());

    expect(restored, isNotNull);
    expect(restored!.organizationId, 7);
    expect(restored.occasionId, 42);
    expect(restored.occasionLink, 'festival-2026');
  });

  test('invalid offline bootstrap context is rejected', () {
    expect(
      StoredSyncContext.fromJson({
        'organizationId': 7,
        'occasionId': 42,
        'occasionLink': '',
      }),
      isNull,
    );
  });
}
