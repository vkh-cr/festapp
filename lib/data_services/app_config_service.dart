import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/services/launch_url_service.dart';
import 'package:fstapp/services/platform_helper.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:fstapp/services/dialog_helper.dart';

class AppConfigService {
  static String? versionRecommended;
  static bool alreadyChecked = false;
  static bool isVersionChecking = false;

  static Future<void> versionCheck(BuildContext context) async {
    if (alreadyChecked || isVersionChecking) return;

    isVersionChecking = true;

    if (versionRecommended != null) {
      var packageInfo = await PackageInfo.fromPlatform();
      String currentVersion = packageInfo.version;

      if (_isVersionOutdated(currentVersion, versionRecommended!)) {
        bool updateConfirmed = await DialogHelper.showConfirmationDialogAsync(
            context,
            "New Version Available".tr(),
            "Update the app to the latest version to access all features.".tr(),
            confirmButtonMessage: "Update".tr()
        );

        if (updateConfirmed) {
          _redirectToUpdate();
        } else {
          alreadyChecked = true;
        }
      }
    }

    isVersionChecking = false;
  }

  static bool _isVersionOutdated(String currentVersion, String versionRecommended) {
    List<String> currentVersionParts = currentVersion.split('.');
    List<String> recommendedVersionParts = versionRecommended.split('.');

    for (int i = 0; i < recommendedVersionParts.length; i++) {
      int current = int.parse(currentVersionParts[i]);
      int recommended = int.parse(recommendedVersionParts[i]);

      if (current < recommended) {
        return true;
      } else if (current > recommended) {
        return false;
      }
    }
    return false;
  }

  static void _redirectToUpdate() {
    if (PlatformHelper.isWeb) {
      LaunchUrlService.launchURL(AppConfig.webLink, true);
    } else if (PlatformHelper.isAndroid) {
      LaunchUrlService.launchURL(AppConfig.playStoreLaunchLink, true);
    } else if (PlatformHelper.isIOS) {
      LaunchUrlService.launchURL(AppConfig.appStoreLink, true);
    }
  }
}
