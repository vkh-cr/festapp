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
    var canSave = true;
    late StateSetter setState;
    await tester.pumpWidget(MaterialApp(
      home: StatefulBuilder(builder: (context, update) {
        setState = update;
        return SavedProgramActionIcon(
          canSave: canSave,
          color: Colors.blue,
          addIcon: Icons.add,
          savedIcon: Icons.check,
          size: 30,
        );
      }),
    ));

    expect(find.byIcon(Icons.add), findsOneWidget);
    setState(() => canSave = false);
    await tester.pump();

    expect(find.byIcon(Icons.add), findsNothing);
    expect(find.byIcon(Icons.check), findsOneWidget);
  });
}
