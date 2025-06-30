import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_models/occasion_user_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/toast_helper.dart';

class UserManagementHelper{

  /// Prompts for and sets a new password for a single user.
  /// Throws an exception if the process fails.
  static Future<bool> unsafeChangeUserPassword(
      BuildContext context, OccasionUserModel user) async {
    if (user.data?[Tb.occasion_users.data_email] == null) {
      throw Exception("User must have an e-mail!");
    }
    if (user.user == null) {
      throw Exception("User must be created first.");
    }
    var pw = await DialogHelper.showPasswordInputDialog(
        context, "Password".tr(), "Insert here".tr());
    if (pw == null || pw.isEmpty) {
      // User cancelled the dialog, so we can return without an error.
      // Or throw an exception if a password MUST be set.
      throw Exception("Password has not been set.");
    }

    // The try-catch block is removed from here.
    // The exception from the service will now be propagated up to the caller.
    await AuthService.unsafeChangeUserPassword(user, pw);

    return true;
  }
}
