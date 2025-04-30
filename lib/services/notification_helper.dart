import 'dart:async' as notification_helper;
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/pages/occasion/news_page.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/platform_helper.dart';
import 'package:fstapp/services/storage_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/js/js_interop.dart';
import 'package:onesignal_flutter/onesignal_flutter.dart';
import 'package:fstapp/app_config.dart';
import 'navigation_service.dart';

class NotificationHelper {
  static const notificationAllowedAsked = "NotificationAllowed";
  static final JSInterop jsInterop = JSInterop();
  static bool _isNotificationDialogShown = false;

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
        RouterService.navigateOccasion(NavigationService.navigatorKey.currentContext!, NewsPage.ROUTE);
      });
    }
    await NotificationHelper.login();
  }

  static notification_helper.Future<void> checkForNotificationPermission(BuildContext context, [bool forceAsk = false]) async {
    if (!PlatformHelper.isPwaInstalledOrNative() && !forceAsk) {
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
          ToastHelper.Show(context, "Notifications have been disabled.".tr());
          return;
        }
        var requestResult = await requestNotificationPermission();
        await StorageHelper.set(notificationAllowedAsked, requestResult.toString());
        if (requestResult) {
          ToastHelper.Show(context, "Notifications have been allowed.".tr());
        } else {
          ToastHelper.Show(context, "Notifications have been disabled.".tr());
        }
      }
    }
  }

  static notification_helper.Future<bool> turnNotificationOn() async {
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

  static notification_helper.Future<void> turnNotificationOff() async {
    await StorageHelper.set(notificationAllowedAsked, false.toString());
    await optOutNotifications();
  }

  static notification_helper.Future<bool> requestNotificationPermission() async {
    if (kIsWeb) {
      return await jsInterop.callFutureBoolMethod('requestNotificationPermission', []);
    }
    return await OneSignal.Notifications.requestPermission(false);
  }

  static notification_helper.Future<void> login() async {
    if (!AppConfig.isNotificationsCurrentlySupported() || !getNotificationPermission() || !AuthService.isLoggedIn()) {
      return;
    }

    if (kIsWeb) {
      await jsInterop.callFutureMethod('login', [AuthService.currentUserId()]);
      return;
    }

    await OneSignal.login(AuthService.currentUserId());
  }

  static notification_helper.Future<void> logout() async {
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
