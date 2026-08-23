import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/html/html_view.dart';
import 'package:youtube_player_flutter/youtube_player_flutter.dart';

void main() {
  test('recognizes common YouTube URL variants', () {
    const id = 'dQw4w9WgXcQ';
    expect(youtubeVideoIdFromUrl('https://youtu.be/$id?si=abc'), id);
    expect(youtubeVideoIdFromUrl('https://youtube.com/shorts/$id'), id);
    expect(youtubeVideoIdFromUrl('https://youtube.com/embed/$id'), id);
    expect(
      youtubeVideoIdFromUrl('https://youtube.com/watch?si=abc&v=$id'),
      id,
    );
  });

  testWidgets('offline YouTube anchor becomes a disabled external link',
      (tester) async {
    const url = 'https://youtu.be/dQw4w9WgXcQ';
    await tester.pumpWidget(const MaterialApp(
      home: Scaffold(
        body: HtmlView(
          html: '<a href="$url">Video</a>',
          offlineOverride: true,
        ),
      ),
    ));
    await tester.pumpAndSettle();

    expect(find.byType(YoutubePlayer), findsNothing);
    expect(find.text(url), findsOneWidget);
    expect(tester.widget<OutlinedButton>(find.byType(OutlinedButton)).onPressed,
        isNull);
  });
}
