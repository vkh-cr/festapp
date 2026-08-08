import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/components/occasion/occasion_home_page.dart';

void main() {
  test('program tab has a canonical root distinct from event detail', () {
    final router = AppRouter();
    final occasionRoutes = router.routeCollection
        .subCollectionOf(OccasionHomeRoute.name)
        .subCollectionOf(ScheduleNavigationRoute.name);
    final root = occasionRoutes.routes.singleWhere(
      (route) => route.path.isEmpty,
    );

    expect(root.name, isNot(EventRoute.name));
  });

  test('bottom navigation replaces the program stack with canonical root', () {
    final source = File(
      'lib/components/occasion/occasion_home_page.dart',
    ).readAsStringSync();

    expect(source, contains('if (tabKey == OccasionTab.home)'));
    expect(source, contains('route.path.isEmpty'));
    expect(source, contains('stackRouter.replaceAll'));
    expect(source, contains('if (isReselected)'));
  });

  test('only tapping the already active bottom tab requests a root reset', () {
    expect(
      isBottomNavigationReselection(activeIndex: 1, selectedIndex: 0),
      isFalse,
    );
    expect(
      isBottomNavigationReselection(activeIndex: 0, selectedIndex: 0),
      isTrue,
    );
  });
}
