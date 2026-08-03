import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/search/global_search_dialog.dart';
import 'package:fstapp/components/search/search_result_model.dart';
import 'package:fstapp/components/speakers/speaker_avatar.dart';
import 'package:fstapp/components/speakers/speaker_model.dart';
import 'package:fstapp/components/speakers/speakers_bundle.dart';

void main() {
  testWidgets('speaker without an event still opens a profile', (tester) async {
    final speakers = Completer<SpeakersBundle?>();
    await tester.pumpWidget(MaterialApp(
      home: Builder(builder: (context) {
        return TextButton(
          onPressed: () => showDialog<void>(
            context: context,
            builder: (_) => GlobalSearchDialog(
              search: (_) async => [
                SearchResultModel(
                  entityType: 'speaker',
                  entityId: 42,
                  title: 'Jan Bez Programu',
                  snippet: 'psychoterapeut',
                ),
              ],
              loadSpeakers: () => speakers.future,
            ),
          ),
          child: const Text('Search'),
        );
      }),
    ));

    await tester.tap(find.text('Search'));
    await tester.pumpAndSettle();
    await tester.enterText(find.byType(TextField), 'jan');
    await tester.pump(const Duration(milliseconds: 300));
    await tester.pumpAndSettle();

    await tester.tap(find.text('Jan Bez Programu'));
    await tester.pump();
    expect(find.byKey(const Key('speaker-profile-dialog')), findsNothing);

    speakers.complete(SpeakersBundle(
      speakers: [
        SpeakerModel(
          id: 42,
          title: 'Jan Bez Programu',
          subtitle: 'psychoterapeut',
          image: 'https://img.festapp.net/jan.jpg',
        ),
      ],
      topics: const [],
      topicsBySpeaker: const {},
      speakersByTopic: const {},
      speakersByEvent: const {},
    ));
    await tester.pumpAndSettle();

    final profile = find.byKey(const Key('speaker-profile-dialog'));
    expect(profile, findsOneWidget);
    expect(
      find.descendant(of: profile, matching: find.text('Jan Bez Programu')),
      findsOneWidget,
    );
    expect(
      find.descendant(of: profile, matching: find.text('psychoterapeut')),
      findsOneWidget,
    );
    expect(
      tester.widget<SpeakerAvatar>(find.byType(SpeakerAvatar)).imageUrl,
      'https://img.festapp.net/jan.jpg',
    );
  });
}
