import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/data_services/client_sync/client_sync_projection.dart';
import 'package:timezone/data/latest.dart' as timezone_data;
import 'package:timezone/timezone.dart' as timezone;

void main() {
  setUpAll(() {
    timezone_data.initializeTimeZones();
    timezone.setLocalLocation(timezone.getLocation('Europe/Prague'));
  });

  test('event projection hydrates a saved event place from the map catalog',
      () {
    final events = ClientSyncProjection.projectEvents(
      catalog: {
        'events': [
          {
            'id': 42,
            'title': 'Večerní program',
            'startTime': '2026-08-14T18:00:00Z',
            'endTime': '2026-08-14T19:00:00Z',
            'placeId': 7,
          },
        ],
      },
      map: {
        'places': [
          {
            'id': 7,
            'title': 'Hlavní hala',
            'description': null,
            'type': 'hall',
            'coordinates': null,
            'order': 1,
            'icon': null,
            'aggregateVersion': 3,
          },
        ],
      },
      live: const {},
      privateProgram: const {
        'saved': [42],
      },
    );

    expect(events.single.isInMySchedule, isTrue);
    expect(events.single.place?.id, 7);
    expect(events.single.place?.title, 'Hlavní hala');
  });

  test('news projection preserves legacy newest-first order and view counts',
      () {
    final news = ClientSyncProjection.projectNews(
      content: {
        'news': [
          {
            'id': 199,
            'message': 'Oldest',
            'createdAt': '2026-08-01T10:00:00Z',
            'aggregateVersion': 1,
          },
          {
            'id': 204,
            'message': 'Newest',
            'createdAt': '2026-08-03T10:00:00Z',
            'aggregateVersion': 2,
          },
          {
            'id': 202,
            'message': 'Middle',
            'createdAt': '2026-08-02T10:00:00Z',
            'aggregateVersion': 1,
          },
        ],
      },
      live: {
        'newsViews': [
          {'newsId': 199, 'views': 2041},
          {'newsId': 202, 'views': 1157},
          {'newsId': 204, 'views': 1145},
        ],
      },
      marker: [
        {'newsId': 202}
      ],
    );

    expect(news.map((item) => item.id), [204, 202, 199]);
    expect(news.map((item) => item.views), [1145, 1157, 2041]);
    expect(news.map((item) => item.isRead), [false, true, true]);
  });
}
