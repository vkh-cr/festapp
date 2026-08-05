import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/app_router.dart';

void main() {
  test('standalone document paths are not parsed as occasion links', () {
    expect(
      AppRouter.getRootLinks(),
      containsAll(<String>[
        'privacy',
        'terms',
        'support',
        'delete-account',
      ]),
    );
  });
}
