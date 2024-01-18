import 'package:avapp/pages/NewsPage.dart';
import 'package:go_router/go_router.dart';
import 'package:onesignal_flutter/onesignal_flutter.dart';
import 'package:avapp/config.dart';
import 'package:flutter/foundation.dart';

import 'NavigationService.dart';

class NotificationHelper
{
  static void Initialize() async {
    if(!config.isNotificationsSupported) {
        return;
    }
    if (kIsWeb) {
      return;
    }

    OneSignal.initialize(config.OneSignalAppId);

    var userAgree = await OneSignal.Notifications.requestPermission(false);
    if(!userAgree) {
      return;
    }

    OneSignal.Notifications.addClickListener((event) {
      NavigationService.navigatorKey.currentContext!.push(NewsPage.ROUTE);
    });
  }

  static void Login(String currentUserId) {
    if(!config.isNotificationsSupported) {
      return;
    }
    if (kIsWeb) {
      return;
    }

    if(!OneSignal.Notifications.permission)
    {
      return;
    }
    OneSignal.login(currentUserId);
  }

  static void Logout() {
    if(!config.isNotificationsSupported) {
      return;
    }
    if (kIsWeb) {
      return;
    }

    OneSignal.logout();
  }

}