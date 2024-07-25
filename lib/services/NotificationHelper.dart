import 'dart:async';
import 'package:flutter/foundation.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/dataServices/DataService.dart';
import 'package:fstapp/pages/NewsPage.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/StorageHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/js/js_interop.dart';
import 'package:onesignal_flutter/onesignal_flutter.dart';
import 'package:fstapp/appConfig.dart';
import 'NavigationService.dart';

class NotificationHelper {
  static const notificationAllowedAsked = "NotificationAllowed";
  static final JSInterop jsInterop = JSInterop();

  static Future<void> initializeOneSignalWeb() async {
    if (kIsWeb) {
      await jsInterop.callMethod('initializeOneSignal', []);
    }
  }

  static Future<bool> requestNotificationPermissionWeb() async {
    if (kIsWeb) {
      return jsInterop.callBoolMethod('requestNotificationPermission', []);
    }
    return false;
  }

  static Future<void> logoutOneSignalWeb() async {
    if (kIsWeb) {
      await jsInterop.callMethod('logout', []);
    }
  }

  static Future<void> loginOneSignalWeb(String externalId) async {
    if (kIsWeb) {
      await jsInterop.callMethod('login', [externalId]);
    }
  }

  static bool getNotificationPermission() {
    if (kIsWeb) {
      return jsInterop.callBoolMethod('getNotificationPermission', []);
    }
    return false;
  }

  static void initialize() async {
    if (!AppConfig.isNotificationsSupported) {
      return;
    }

    if (kIsWeb) {
      await initializeOneSignalWeb();
    } else {
      OneSignal.initialize(AppConfig.oneSignalAppId);

      OneSignal.Notifications.addClickListener((event) {
        RouterService.navigateOccasion(NavigationService.navigatorKey.currentContext!, NewsPage.ROUTE);
      });
    }
    if (DataService.isLoggedIn()) {
      await NotificationHelper.login(DataService.currentUserId());
    }
  }

  static Future<void> checkForNotificationPermission(BuildContext context) async {
    var allowed = getNotificationPermission();
    if (!allowed) {
      var wasAsked = await StorageHelper.get(notificationAllowedAsked);
      if (wasAsked == null) {
        var dialogResult = await DialogHelper.showNotificationPermissionDialog(context);
        await StorageHelper.set(notificationAllowedAsked, dialogResult.toString());
        var requestResult = await requestNotificationPermission();
        if (requestResult) {
          ToastHelper.Show("Notifications have been allowed.");
        } else {
          ToastHelper.Show("Notifications have been disabled.");
        }
      }
    }
  }

  static Future<bool> requestNotificationPermission() async {
    if (kIsWeb) {
      return await requestNotificationPermissionWeb();
    }
    return await OneSignal.Notifications.requestPermission(false);
  }

  static Future<void> login(String currentUserId) async {
    if (!AppConfig.isNotificationsSupported || !OneSignal.Notifications.permission) {
      return;
    }
    if (kIsWeb) {
      await loginOneSignalWeb(currentUserId);
      return;
    }

    await OneSignal.login(currentUserId);
  }

  static Future<void> logout() async {
    if (!AppConfig.isNotificationsSupported) {
      return;
    }
    if (kIsWeb) {
      await logoutOneSignalWeb();
      return;
    }

    OneSignal.logout();
  }
}
