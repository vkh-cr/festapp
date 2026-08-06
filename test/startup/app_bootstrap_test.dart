import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/main.dart';

void main() {
  test('opens the forced occasion when the web URL has no path', () {
    expect(
      initialRouteForUri(
        Uri.parse('https://preview.example/'),
        forcedOccasionLink: 'sample-occasion',
      ),
      '/sample-occasion',
    );
  });

  test('keeps the root route when no occasion is forced', () {
    expect(
      initialRouteForUri(
        Uri.parse('https://preview.example/'),
        forcedOccasionLink: null,
      ),
      '/',
    );
  });

  test('preserves explicit web deep links', () {
    expect(
      initialRouteForUri(Uri.parse(
          'https://preview.example/sample-occasion/news?filter=latest')),
      '/sample-occasion/news?filter=latest',
    );
  });

  testWidgets('preserves a password-reset deep link while initialization runs',
      (tester) async {
    const resetRoute = '/resetPassword?token=test-token';
    final initialization = Completer<void>();

    await tester.pumpWidget(FestappBootstrap(
      initialRoute: resetRoute,
      initialize: () => initialization.future,
      buildReadyApp: () => const SizedBox(),
    ));

    final loadingContext =
        tester.element(find.byKey(FestappBootstrap.loadingKey));
    expect(ModalRoute.of(loadingContext)?.settings.name, resetRoute);

    initialization.complete();
    await tester.pump();
    await tester.pump();
  });

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
    await tester.pump();
    await tester.pump();

    expect(find.byKey(FestappBootstrap.loadingKey), findsNothing);
    expect(find.text('ready'), findsOneWidget);
  });

  testWidgets('opens the app shell after an unexpected initialization error',
      (tester) async {
    await tester.pumpWidget(FestappBootstrap(
      initialize: () => Future<void>.error(Exception('startup failed')),
      buildReadyApp: () => const MaterialApp(home: Text('offline shell')),
    ));

    await tester.pump();
    await tester.pump();

    expect(find.byKey(FestappBootstrap.loadingKey), findsNothing);
    expect(find.text('offline shell'), findsOneWidget);
  });
}
