import 'package:avapp/pages/NewsPage.dart';
import 'package:flutter/material.dart';
import 'package:onesignal_flutter/onesignal_flutter.dart';
import 'package:avapp/config.dart';

import 'NavigationService.dart';

class NotificationHelper
{
  static void Initialize() async {
    if(!config.isNotificationsSupported) {
        return;
    }

    OneSignal.initialize(config.OneSignalAppId);

    var userAgree = await OneSignal.Notifications.requestPermission(false);
    if(!userAgree) {
      return;
    }

    OneSignal.Notifications.addClickListener((event) {
      Navigator.pushNamed(
          NavigationService.navigatorKey.currentContext!, NewsPage.ROUTE);
    });
  }

  static void Login(String currentUserId) {
    if(!config.isNotificationsSupported) {
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
    OneSignal.logout();
  }

}