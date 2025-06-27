import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_models/occasion_user_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/toast_helper.dart';

class UserManagementHelper{

  static Future<bool> unsafeChangeUserPassword(BuildContext context, OccasionUserModel user) async {
    if(user.data?[Tb.occasion_users.data_email] == null)
    {
      throw Exception("User must have an e-mail!");
    }
    if(user.user == null)
    {
      throw Exception("User must be created first.");
    }
    var pw = await DialogHelper.showPasswordInputDialog(context, "Password".tr(), "Insert here".tr());
    if(pw==null || pw.isEmpty)
    {
      throw Exception("Password has not been set.");
    }
    try{
      await AuthService.unsafeChangeUserPassword(user, pw);
    } catch (e){
      ToastHelper.Show(context, e.toString());
    }
    return true;
  }
}
