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
  static Future<void> initializeOneSignal() async {
    await js.context.callMethod('eval', ['initializeOneSignal()']);
  }

  static Future<void> requestNotificationPermission() async {
    await js.context.callMethod('eval', ['requestNotificationPermission()']);
  }

  static Future<void> logout() async {
    await js.context.callMethod('eval', ['logout()']);
  }

  static Future<void> login(String externalId) async {
    await js.context.callMethod('eval', ['login("$externalId")']);
  }

  static void Initialize() async {
    if(!AppConfig.isNotificationsSupported) {
        return;
    }

    if (kIsWeb) {
      await initializeOneSignal();
      await requestNotificationPermission();

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

  static Future<void> Login(String currentUserId) async {
    if(!AppConfig.isNotificationsSupported) {
      return;
    }
    if (kIsWeb) {
      await login(currentUserId);
      return;
    }

    if(!OneSignal.Notifications.permission)
    {
      return;
    }
    OneSignal.login(currentUserId);
  }

  static Future<void> Logout() async {
    if(!AppConfig.isNotificationsSupported) {
      return;
    }
    if (kIsWeb) {
      await logout();
      return;
    }

    OneSignal.logout();
  }

}