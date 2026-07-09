import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/services/launch_url_service.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:fstapp/services/dialog_helper.dart';

class UpdateService {
  static String? versionRecommended;
  static String? versionLink;
  static bool alreadyChecked = false;
  static Future<void>? _pendingCheck;

  static Future<void> versionCheck(BuildContext context) async {
    if (alreadyChecked) return;
    // Deduplicate concurrent calls — reuse the pending future.
    if (_pendingCheck != null) return;
    _pendingCheck = _doVersionCheck(context);
    try {
      await _pendingCheck;
    } finally {
      _pendingCheck = null;
    }
  }

  static Future<void> _doVersionCheck(BuildContext context) async {
    if (versionRecommended != null) {
      var packageInfo = await PackageInfo.fromPlatform();
      String currentVersion = packageInfo.version;

      if (_isVersionOutdated(currentVersion, versionRecommended!)) {
        bool updateConfirmed = await DialogHelper.showConfirmationDialog(
            context,
            CommonStrings.newVersionAvailable,
            CommonStrings.updateAppPrompt,
            confirmButtonMessage: CommonStrings.update);

        if (updateConfirmed) {
          _redirectToUpdate();
        } else {
          alreadyChecked = true;
        }
      }
    }
  }

  static bool _isVersionOutdated(
      String currentVersion, String versionRecommended) {
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
    LaunchUrlService.launchURL(versionLink!, true);
  }
}
