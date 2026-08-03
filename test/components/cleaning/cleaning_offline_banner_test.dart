import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/cleaning/models/cleaning_data.dart';

void main() {
  test('cached cleaning projection is not presented as offline while online',
      () {
    expect(
      shouldShowCleaningOfflineBanner(
        cacheFetchedAt: DateTime(2026, 8, 3, 11, 57),
        isOffline: false,
      ),
      isFalse,
    );
  });

  test('cached cleaning projection shows its age when actually offline', () {
    expect(
      shouldShowCleaningOfflineBanner(
        cacheFetchedAt: DateTime(2026, 8, 3, 11, 57),
        isOffline: true,
      ),
      isTrue,
    );
  });
}
