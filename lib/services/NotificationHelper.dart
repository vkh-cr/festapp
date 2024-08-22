import 'dart:async';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
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
  static bool _isNotificationDialogShown = false;

  static Future<bool> isNotificationOnOff() async {
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

  static Future<void> optInNotifications() async {
    if (kIsWeb) {
      await jsInterop.callFutureMethod('optIn', []);
    } else {
      await OneSignal.User.pushSubscription.optIn();
    }
  }

  static Future<void> optOutNotifications() async {
    if (kIsWeb) {
      await jsInterop.callFutureMethod('optOut', []);
    } else {
      await OneSignal.User.pushSubscription.optOut();
    }
  }

  static Future<void> initialize() async {
    if (!AppConfig.isNotificationsCurrentlySupported()) {
      return;
    }

    if (kIsWeb) {
      await jsInterop.callFutureMethod('initializeOneSignal', []);
    } else {
      OneSignal.initialize(AppConfig.oneSignalAppId);
      OneSignal.Notifications.addClickListener((event) {
        RouterService.navigateOccasion(NavigationService.navigatorKey.currentContext!, NewsPage.ROUTE);
      });
    }
    await NotificationHelper.login();
  }

  static Future<void> checkForNotificationPermission(BuildContext context, [bool forceAsk = false]) async {
    if (!SynchroService.isPwaInstalledOrNative() && !forceAsk) {
      return;
    }
    var allowed = getNotificationPermission();
    if (!allowed) {
      var wasAsked = await StorageHelper.get(notificationAllowedAsked);
      if (wasAsked == null && !_isNotificationDialogShown) {
        _isNotificationDialogShown = true;
        var dialogResult = await DialogHelper.showNotificationPermissionDialog(context);
        _isNotificationDialogShown = false;

        // save default so user don't get ask again, even if later code fails
        await StorageHelper.set(notificationAllowedAsked, false.toString());

        if (!dialogResult) {
          ToastHelper.Show("Notifications have been disabled.".tr());
          return;
        }
        var requestResult = await requestNotificationPermission();
        await StorageHelper.set(notificationAllowedAsked, requestResult.toString());
        if (requestResult) {
          ToastHelper.Show("Notifications have been allowed.".tr());
        } else {
          ToastHelper.Show("Notifications have been disabled.".tr());
        }
      }
    }
  }

  static Future<bool> turnNotificationOn() async {
    var currentPermission = getNotificationPermission();
    if (!currentPermission) {
      currentPermission = await requestNotificationPermission();
    }
    await StorageHelper.set(notificationAllowedAsked, currentPermission.toString());
    if (currentPermission) {
      await optInNotifications();
      await NotificationHelper.login();
    }
    return currentPermission;
  }

  static Future<void> turnNotificationOff() async {
    await StorageHelper.set(notificationAllowedAsked, false.toString());
    await optOutNotifications();
  }

  static Future<bool> requestNotificationPermission() async {
    if (kIsWeb) {
      return await jsInterop.callFutureBoolMethod('requestNotificationPermission', []);
    }
    return await OneSignal.Notifications.requestPermission(false);
  }

  static Future<void> login() async {
    if (!AppConfig.isNotificationsCurrentlySupported() || !getNotificationPermission() || !AuthService.isLoggedIn()) {
      return;
    }

    if (kIsWeb) {
      await jsInterop.callFutureMethod('login', [AuthService.currentUserId()]);
      return;
    }

    await OneSignal.login(AuthService.currentUserId());
  }

  static Future<void> logout() async {
    if (!AppConfig.isNotificationsCurrentlySupported() || !AuthService.isLoggedIn()) {
      return;
    }
    if (kIsWeb) {
      await jsInterop.callFutureMethod('logout', []);
      return;
    }

    OneSignal.logout();
  }
}
