import 'dart:collection';

import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataModels/ExclusiveGroupModel.dart';
import 'package:fstapp/dataModels/OrganizationModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/DbCompanions.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/DbInformation.dart';
import 'package:fstapp/dataServices/DbNews.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataModels/IconModel.dart';
import 'package:fstapp/dataModels/OccasionLinkModel.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataModels/OccasionSettingsModel.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserGroupInfoModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataModels/InformationModel.dart';

import 'package:fstapp/dataModels/NewsModel.dart';
import 'package:fstapp/services/NotificationHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:pwa_install/pwa_install.dart';
import 'package:supabase_flutter/supabase_flutter.dart';


class ImportService {
  static final _supabase = Supabase.instance.client;

  static Future<void> emailMailerSend(String recipient, String templateId, List<Map<String, String>> variables)
  async {
    await _supabase.rpc("send_email_mailersend",
        params: {"message": {
          "sender": "info@absolventskyvelehrad.cz",
          "recipient": recipient,
          "template_id": templateId
        }, "subs": variables});
  }

  static Future<void> ImportFromSingleToMultipleEventType() async {
    var data = await _supabase.from(Tb.user_info.table).select();
    var allUsers = List<UserInfoModel>.from(data.map((x) => UserInfoModel.fromJson(x)));
    List<OccasionUserModel> insertOu = [];
    var ou = await DbUsers.getOccasionUsers();
    for(var userInfo in allUsers){
      if(!ou.any((element) => element.user==userInfo.id))
      {
        insertOu.add(
            OccasionUserModel(
              user: userInfo.id,
              isEditor: userInfo.isEditor!,
              isManager: false,
              isApprover: false,
              isApproved: false,
              occasion: 1,
              data:{
                Tb.occasion_users.data_email: userInfo.email,
                Tb.occasion_users.data_sex: userInfo.sex,
                Tb.occasion_users.data_name: userInfo.name,
                Tb.occasion_users.data_surname: userInfo.surname,
                Tb.occasion_users.data_phone: userInfo.phone,
                Tb.occasion_users.data_accommodation: userInfo.accommodation,
                Tb.occasion_users.data_birthDate: userInfo.birthDate?.toIso8601String(),
                Tb.occasion_users.data_isInvited: true,
              }
            )
        );
      }
    }
    for(var usr in insertOu){
      await _supabase.from(Tb.occasion_users.table).insert(usr.toUpdateJson());
    }

  }

// static Future<List<ParticipantModel>> searchParticipants(String searchTerm) async {
//   List<ParticipantModel> toReturn = [];
//   var result = await _supabase
//       .from("user_info")
//       .select("email, name, surname")
//       .or('or(name.ilike.%$searchTerm%),or(surname.ilike.%$searchTerm%),or(email.ilike.%$searchTerm%)')
//       .limit(10);
//   for(var p in result)
//   {
//     toReturn.add(ParticipantModel(p["email"], p["name"], p["surname"]));
//   }
//   return toReturn;
// }
}
