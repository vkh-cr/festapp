import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/schedule/saved_program_ui.dart';

void main() {
  test('a stale load cannot overwrite an in-flight optimistic choice', () {
    expect(
      reconcileLoadedSavedProgramState(
        incoming: false,
        visible: true,
        mutationInFlight: true,
        loadRevision: 0,
        currentRevision: 1,
      ),
      isTrue,
    );
    expect(
      reconcileLoadedSavedProgramState(
        incoming: false,
        visible: true,
        mutationInFlight: false,
        loadRevision: 2,
        currentRevision: 2,
      ),
      isFalse,
    );
    expect(
      reconcileLoadedSavedProgramState(
        incoming: false,
        visible: true,
        mutationInFlight: false,
        loadRevision: 0,
        currentRevision: 2,
      ),
      isTrue,
      reason: 'a load started before a completed mutation is still stale',
    );
  });

  testWidgets('saved-program icon changes atomically without an old icon frame',
      (tester) async {
    final canSave = ValueNotifier(true);
    addTearDown(canSave.dispose);
    await tester.pumpWidget(MaterialApp(
      home: IconButton(
        style: savedProgramActionButtonStyle,
        onPressed: () {},
        icon: SavedProgramActionIcon(
          canSave: canSave,
          color: Colors.blue,
          addIcon: Icons.add,
          savedIcon: Icons.check,
          size: 30,
        ),
      ),
    ));

    final buttonBefore = tester.element(find.byType(IconButton));
    final buttonRectBefore = tester.getRect(find.byType(IconButton));
    expect(find.byIcon(Icons.add, skipOffstage: false), findsOneWidget);
    expect(find.byIcon(Icons.check, skipOffstage: false), findsOneWidget,
        reason: 'both glyphs must stay mounted to avoid a replacement flash');
    canSave.value = false;
    await tester.pump();

    expect(tester.element(find.byType(IconButton)), same(buttonBefore),
        reason: 'save must not rebuild or disable the surrounding button');
    expect(tester.getRect(find.byType(IconButton)), buttonRectBefore,
        reason: 'the action must keep exactly the same geometry');
    expect(find.byIcon(Icons.add, skipOffstage: false), findsOneWidget);
    expect(find.byIcon(Icons.check, skipOffstage: false), findsOneWidget);
    expect(find.byIcon(Icons.add), findsNothing);
    expect(find.byIcon(Icons.check), findsOneWidget);
  });

  test('saved-program button has no transient material overlay', () {
    expect(savedProgramActionButtonStyle.splashFactory,
        same(NoSplash.splashFactory));
    expect(
      savedProgramActionButtonStyle.overlayColor!
          .resolve({WidgetState.pressed}),
      Colors.transparent,
    );
    expect(
      savedProgramActionButtonStyle.overlayColor!
          .resolve({WidgetState.focused}),
      Colors.transparent,
    );
  });
}
