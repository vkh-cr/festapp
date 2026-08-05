import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/main.dart';

void main() {
  testWidgets('renders a launch surface while initialization is still pending',
      (tester) async {
    final initialization = Completer<void>();

    await tester.pumpWidget(FestappBootstrap(
      initialize: () => initialization.future,
      buildReadyApp: () => const MaterialApp(home: Text('ready')),
    ));

    expect(find.byKey(FestappBootstrap.loadingKey), findsOneWidget);
    expect(find.text('ready'), findsNothing);

    initialization.complete();
    await tester.pumpAndSettle();

    expect(find.byKey(FestappBootstrap.loadingKey), findsNothing);
    expect(find.text('ready'), findsOneWidget);
  });

  testWidgets('opens the app shell after an unexpected initialization error',
      (tester) async {
    await tester.pumpWidget(FestappBootstrap(
      initialize: () => Future<void>.error(Exception('startup failed')),
      buildReadyApp: () => const MaterialApp(home: Text('offline shell')),
    ));

    await tester.pumpAndSettle();

    expect(find.byKey(FestappBootstrap.loadingKey), findsNothing);
    expect(find.text('offline shell'), findsOneWidget);
  });
}
