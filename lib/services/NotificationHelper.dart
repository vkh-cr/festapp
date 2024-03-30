import 'package:festapp/pages/NewsPage.dart';
import 'package:festapp/RouterService.dart';
import 'package:onesignal_flutter/onesignal_flutter.dart';
import 'package:festapp/appConfig.dart';
import 'package:flutter/foundation.dart';

import 'NavigationService.dart';

class NotificationHelper
{
  static void Initialize() async {
    if(!AppConfig.isNotificationsSupported) {
        return;
    }
    if (kIsWeb) {
      return;
    }

    OneSignal.initialize(AppConfig.OneSignalAppId);

    var userAgree = await OneSignal.Notifications.requestPermission(false);
    if(!userAgree) {
      return;
    }

    OneSignal.Notifications.addClickListener((event) {
      RouterService.navigateOccasion(NavigationService.navigatorKey.currentContext!, NewsPage.ROUTE);
    });
  }

  static void Login(String currentUserId) {
    if(!AppConfig.isNotificationsSupported) {
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
    if(!AppConfig.isNotificationsSupported) {
      return;
    }
    if (kIsWeb) {
      return;
    }

    OneSignal.logout();
  }

}