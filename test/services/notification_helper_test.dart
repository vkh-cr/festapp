import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/services/notification_helper.dart';

class _FakeAudienceClient implements NotificationAudienceClient {
  final addedTags = <Map<String, String>>[];
  final logins = <String>[];
  var logoutCount = 0;

  @override
  Future<void> addTags(Map<String, String> tags) async =>
      addedTags.add(Map.of(tags));

  @override
  Future<void> login(String externalId) async => logins.add(externalId);

  @override
  Future<void> logout() async => logoutCount++;
}

void main() {
  late _FakeAudienceClient client;
  late bool supported;
  late bool permitted;
  late bool loggedIn;
  late NotificationAudienceCoordinator coordinator;

  setUp(() {
    client = _FakeAudienceClient();
    supported = true;
    permitted = true;
    loggedIn = false;
    coordinator = NotificationAudienceCoordinator(
      client: client,
      notificationsSupported: () => supported,
      notificationPermission: () => permitted,
      isLoggedIn: () => loggedIn,
      currentUserId: () => 'user-uuid',
      occasionLink: () => 'csmostrava2026',
      installationGeneration: 'csm_ostrava_2026_v1',
    );
  });

  test('tags an anonymous opted-in CSM subscription', () async {
    await coordinator.tagCurrentSubscription();
    await coordinator.loginCurrentUser();

    expect(client.addedTags, [
      {'app_generation': 'csm_ostrava_2026_v1', 'occasion': 'csmostrava2026'},
    ]);
    expect(client.logins, isEmpty);
  });

  test(
    'authenticated identity login is separate from subscription tags',
    () async {
      loggedIn = true;

      await coordinator.loginCurrentUser();

      expect(client.logins, ['user-uuid']);
      expect(client.addedTags, isEmpty);
    },
  );

  test('permission blocks both tags and identity login', () async {
    permitted = false;
    loggedIn = true;

    await coordinator.tagCurrentSubscription();
    await coordinator.loginCurrentUser();

    expect(client.addedTags, isEmpty);
    expect(client.logins, isEmpty);
  });

  test(
    'logout clears a stale external identity without an auth session',
    () async {
      await coordinator.logoutCurrentUser();

      expect(client.logoutCount, 1);
    },
  );

  test(
    'omits tenant generation and empty occasion when not configured',
    () async {
      coordinator = NotificationAudienceCoordinator(
        client: client,
        notificationsSupported: () => supported,
        notificationPermission: () => permitted,
        isLoggedIn: () => loggedIn,
        currentUserId: () => 'user-uuid',
        occasionLink: () => '',
        installationGeneration: '',
      );

      await coordinator.tagCurrentSubscription();

      expect(client.addedTags, isEmpty);
    },
  );
}
