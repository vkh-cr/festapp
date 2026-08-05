import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/data_services/client_sync/client_sync_remote.dart';

void main() {
  group('resolvePublicArtifactRequestUriForPage', () {
    final artifact = Uri.parse(
      'https://assets.festapp.net/client-sync/v1/9/643/live.json?revision=2',
    );

    test('routes public sync artifacts through the localhost proxy', () {
      expect(
        resolvePublicArtifactRequestUriForPage(
          artifact,
          Uri.parse('http://localhost:8080/csmostrava2026/news'),
        ),
        Uri.parse(
          'http://localhost:8080/__festapp_sync_asset__/client-sync/v1/9/643/live.json?revision=2',
        ),
      );
    });

    test('keeps the production artifact URL unchanged', () {
      expect(
        resolvePublicArtifactRequestUriForPage(
          artifact,
          Uri.parse('https://csmostrava.festapp.net/csmostrava2026/news'),
        ),
        artifact,
      );
    });
  });
}
