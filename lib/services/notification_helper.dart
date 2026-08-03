import 'dart:async' as notification_helper;
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/components/news/news_page.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/platform_helper.dart';
import 'package:fstapp/services/storage_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/js/js_interop.dart';
import 'package:onesignal_flutter/onesignal_flutter.dart';
import 'package:fstapp/app_config.dart';

abstract interface class NotificationAudienceClient {
  notification_helper.Future<void> addTags(Map<String, String> tags);
  notification_helper.Future<void> login(String externalId);
  notification_helper.Future<void> logout();
}

class NotificationAudienceCoordinator {
  NotificationAudienceCoordinator({
    required this.client,
    required this.notificationsSupported,
    required this.notificationPermission,
    required this.isLoggedIn,
    required this.currentUserId,
    required this.occasionLink,
  });

  static const installationGeneration = 'csm_ostrava_2026_v1';

  final NotificationAudienceClient client;
  final bool Function() notificationsSupported;
  final bool Function() notificationPermission;
  final bool Function() isLoggedIn;
  final String Function() currentUserId;
  final String Function() occasionLink;

  notification_helper.Future<void> tagCurrentSubscription() async {
    if (!notificationsSupported() || !notificationPermission()) return;
    await client.addTags({
      'app_generation': installationGeneration,
      'occasion': occasionLink(),
    });
  }

  notification_helper.Future<void> loginCurrentUser() async {
    if (!notificationsSupported() ||
        !notificationPermission() ||
        !isLoggedIn()) {
      return;
    }
    await client.login(currentUserId());
  }

  notification_helper.Future<void> logoutCurrentUser() async {
    if (!notificationsSupported()) return;
    await client.logout();
  }
}

class _RuntimeNotificationAudienceClient implements NotificationAudienceClient {
  @override
  notification_helper.Future<void> addTags(Map<String, String> tags) async {
    if (kIsWeb) {
      await NotificationHelper.jsInterop
          .callFutureMethod('tagCurrentSubscription', []);
      return;
    }
    await OneSignal.User.addTags(tags);
  }

  @override
  notification_helper.Future<void> login(String externalId) async {
    if (kIsWeb) {
      await NotificationHelper.jsInterop
          .callFutureMethod('login', [externalId]);
      return;
    }
    await OneSignal.login(externalId);
  }

  @override
  notification_helper.Future<void> logout() async {
    if (kIsWeb) {
      await NotificationHelper.jsInterop.callFutureMethod('logout', []);
      return;
    }
    OneSignal.logout();
  }
}

class NotificationHelper {
  static const notificationAllowedAsked = "NotificationAllowed";
  static final JSInterop jsInterop = JSInterop();
  static bool _isNotificationDialogShown = false;
  static final NotificationAudienceCoordinator _audience =
      NotificationAudienceCoordinator(
    client: _RuntimeNotificationAudienceClient(),
    notificationsSupported: AppConfig.isNotificationsCurrentlySupported,
    notificationPermission: getNotificationPermission,
    isLoggedIn: AuthService.isLoggedIn,
    currentUserId: AuthService.currentUserId,
    occasionLink: () => AppConfig.forceOccasionLink ?? 'csmostrava2026',
  );

  static notification_helper.Future<bool> isNotificationOnOff() async {
    var isPermissionOn = getNotificationPermission();
    var isSetupAsOn = await StorageHelper.get(notificationAllowedAsked);
    return isPermissionOn && isSetupAsOn == "true";
  }

  static bool getNotificationPermission() {
    if (kIsWeb) {
      return jsInterop.callBoolMethod('getNotificationPermission', []);
    } else {
      return OneSignal.Notifications.permission;
    }
  }

  static notification_helper.Future<void> optInNotifications() async {
    if (kIsWeb) {
      await jsInterop.callFutureMethod('optIn', []);
    } else {
      await OneSignal.User.pushSubscription.optIn();
    }
  }

  static notification_helper.Future<void> optOutNotifications() async {
    if (kIsWeb) {
      await jsInterop.callFutureMethod('optOut', []);
    } else {
      await OneSignal.User.pushSubscription.optOut();
    }
  }

  static notification_helper.Future<void> initialize() async {
    if (!AppConfig.isNotificationsCurrentlySupported()) {
      return;
    }

    if (kIsWeb) {
      await jsInterop.callFutureMethod('initializeOneSignal', []);
    } else {
      OneSignal.initialize(AppConfig.oneSignalAppId);
      OneSignal.Notifications.addClickListener((event) {
        RouterService.navigateOccasionNoContext(NewsPage.ROUTE);
      });
    }
    await tagCurrentSubscription();
    await loginCurrentUser();
  }

  static notification_helper.Future<void> checkForNotificationPermission(
      BuildContext context,
      [bool forceAsk = false]) async {
    if (!PlatformHelper.isPwaInstalledOrNative() && !forceAsk) {
      return;
    }
    var allowed = getNotificationPermission();
    if (!allowed) {
      var wasAsked = await StorageHelper.get(notificationAllowedAsked);
      if (wasAsked == null && !_isNotificationDialogShown) {
        _isNotificationDialogShown = true;
        var dialogResult =
            await DialogHelper.showNotificationPermissionDialog(context);
        _isNotificationDialogShown = false;

        // save default so user don't get ask again, even if later code fails
        await StorageHelper.set(notificationAllowedAsked, false.toString());

        if (!dialogResult) {
          ToastHelper.Show(context, CommonStrings.notificationsDisabled);
          return;
        }
        var requestResult = await requestNotificationPermission();
        await StorageHelper.set(
            notificationAllowedAsked, requestResult.toString());
        if (requestResult) {
          ToastHelper.Show(context, CommonStrings.notificationsAllowed);
        } else {
          ToastHelper.Show(context, CommonStrings.notificationsDisabled);
        }
      }
    }
  }

  static notification_helper.Future<bool> turnNotificationOn() async {
    var currentPermission = getNotificationPermission();
    if (!currentPermission) {
      currentPermission = await requestNotificationPermission();
    }
    await StorageHelper.set(
        notificationAllowedAsked, currentPermission.toString());
    if (currentPermission) {
      await optInNotifications();
      await tagCurrentSubscription();
      await loginCurrentUser();
    }
    return currentPermission;
  }

  static notification_helper.Future<void> turnNotificationOff() async {
    await StorageHelper.set(notificationAllowedAsked, false.toString());
    await optOutNotifications();
  }

  static notification_helper.Future<bool>
      requestNotificationPermission() async {
    if (kIsWeb) {
      return await jsInterop
          .callFutureBoolMethod('requestNotificationPermission', []);
    }
    return await OneSignal.Notifications.requestPermission(false);
  }

  static notification_helper.Future<void> tagCurrentSubscription() =>
      _audience.tagCurrentSubscription();

  static notification_helper.Future<void> loginCurrentUser() =>
      _audience.loginCurrentUser();

  static notification_helper.Future<void> logoutCurrentUser() =>
      _audience.logoutCurrentUser();
}
