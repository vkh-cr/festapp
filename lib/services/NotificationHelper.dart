import 'dart:async';

import 'package:fstapp/pages/NewsPage.dart';
import 'package:fstapp/RouterService.dart';
import 'package:onesignal_flutter/onesignal_flutter.dart';
import 'package:fstapp/appConfig.dart';
import 'package:flutter/foundation.dart';
import 'dart:js' as js;

import 'NavigationService.dart';

class NotificationHelper
{
  static Future<void> initializeOneSignalWeb() async {
    await js.context.callMethod('eval', ['initializeOneSignal()']);
  }

  static Future<void> requestNotificationPermissionWeb() async {
    await js.context.callMethod('eval', ['requestNotificationPermission()']);
  }

  static Future<void> logoutOneSignalWeb() async {
    await js.context.callMethod('eval', ['logout()']);
  }

  static Future<void> loginOneSignalWeb(String externalId) async {
    await js.context.callMethod('eval', ['login("$externalId")']);
  }

  static void initialize() async {
    if(!AppConfig.isNotificationsSupported) {
        return;
    }

    if (kIsWeb) {
      await initializeOneSignalWeb();
      await requestNotificationPermissionWeb();

    } else{
      OneSignal.initialize(AppConfig.oneSignalAppId);
      var userAgree = await OneSignal.Notifications.requestPermission(false);
      if(!userAgree) {
        return;
      }

      OneSignal.Notifications.addClickListener((event) {
        RouterService.navigateOccasion(NavigationService.navigatorKey.currentContext!, NewsPage.ROUTE);
      });
    }
  }

  static Future<void> login(String currentUserId) async {
    if(!AppConfig.isNotificationsSupported) {
      return;
    }
    if (kIsWeb) {
      await loginOneSignalWeb(currentUserId);
      return;
    }

    if(!OneSignal.Notifications.permission)
    {
      return;
    }
    await OneSignal.login(currentUserId);
  }

  static Future<void> logout() async {
    if(!AppConfig.isNotificationsSupported) {
      return;
    }
    if (kIsWeb) {
      await logoutOneSignalWeb();
      return;
    }

    OneSignal.logout();
  }

}