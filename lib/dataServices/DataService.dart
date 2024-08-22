import 'dart:collection';

import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataModels/ExclusiveGroupModel.dart';
import 'package:fstapp/dataModels/OrganizationModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/DbCompanions.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
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
import 'package:fstapp/appConfig.dart';
import 'package:html/parser.dart';


class DataService {
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

  static OccasionSettingsModel? globalSettingsModel = OccasionSettingsModel.DefaultSettings;

  static Future<OccasionSettingsModel> loadOrInitGlobalSettings() async {
    OccasionSettingsModel toReturn;
    if(RightsService.currentOccasion == null) {
      toReturn =  OccasionSettingsModel.DefaultSettings;
    }
    else{
      var data = await _supabase
          .from(Tb.occasions.table)
          .select(Tb.occasions.data)
          .eq(Tb.occasions.id, RightsService.currentOccasion!)
          .single();

      toReturn = OccasionSettingsModel.fromJson(data[Tb.occasions.data]);
    }

    globalSettingsModel = toReturn;
    return toReturn;
  }

  static Future<UserInfoModel> getCurrentUserInfo() async {
    if(AuthService.currentUser == null){
      return await AuthService.loadCurrentUserData();
    }
    return AuthService.currentUser!;
  }

  static Future<void> deleteUser(String user, int occasion) async {
    await _supabase.rpc("delete_user",
    params:
    {
      "usr": user,
      "oc": occasion
    });
  }

  static Future<String?> getUserByEmail(String email) async {
    var data = await _supabase.rpc("get_user_id_by_email",
        params: {"email": email.toLowerCase()}).maybeSingle();
    if(data == null)
    {
      return null;
    }
    return data["id"];
  }

  static Future<String?> getLastTimeSignIn(String id) async {
    var data = await _supabase.rpc("get_last_sign_in_at",
        params: {"user_id": id});
    return data;
  }

  

  static Future<List<OccasionUserModel>> getOccasionUsers() async {
    var data = await _supabase.from(Tb.occasion_users.table).select().eq(Tb.occasion_users.occasion, RightsService.currentOccasion!);
    return List<OccasionUserModel>.from(data.map((x) => OccasionUserModel.fromJson(x))).sortedBy((ou)=>ou.createdAt!);
  }

  static Future<OccasionModel> getOccasion(int id) async {
    var data = await _supabase.from(Tb.occasions.table).select().eq(Tb.occasions.id, id).single();
    return OccasionModel.fromJson(data);
  }

  static Future<String?> unsafeChangeUserPassword(OccasionUserModel occasionUserModel, String pwd) async {
    return await _supabase.rpc("set_user_password",
      params:
      {
        "usr": occasionUserModel.user,
        "oc": occasionUserModel.occasion??RightsService.currentOccasion,
        "password": pwd
      });
  }

  static Future<void> changeMyPassword(String pw) async {
    await _supabase.auth.updateUser(
        UserAttributes(
          password: pw,
        ));
  }

  static Future<dynamic> changePassword(String token, String pw) async {
    return await _supabase.rpc("set_user_password_token",
        params:
        {
          "token": token,
          "password": pw,
        });
  }

  static Future<String?> unsafeCreateUser(int occasion, String email, String pw, dynamic data) async {
    var newId = await _supabase.rpc("create_user_with_data",
        params: {"oc": occasion, "email": email, "password": pw, "data": data});
    if (newId==null)
    {
      throw Exception("Creating of user has failed.");
    }
    return newId;
  }

  static Future<OrganizationModel?> getCurrentOrganization() async {
    var result = await _supabase.rpc("get_current_organization_data");

    if (result != null && result["code"] == 200) {
      return OrganizationModel.fromJson(result["data"]);
    } else if (result != null && result["code"] == 403) {
      print("User is not authorized or found (admin rights required)");
    }

    // Return null if no organization data is found or unauthorized
    return null;
  }

  static Future<List<OccasionModel>> getAllOccasions(int org) async {
    var data = await _supabase.from(Tb.occasions.table).select().eq(Tb.occasions.organization, org);
    var toReturn = List<OccasionModel>.from(data.map((x) => OccasionModel.fromJson(x)));
    return toReturn;
  }

  static Future<OccasionModel> updateOccasion(OccasionModel occasionModel) async {
    var json = occasionModel.toJson();
    Map<String, dynamic> data;

    if (occasionModel.id != null) {
      data = await _supabase
          .from(Tb.occasions.table)
          .update(json)
          .eq(Tb.occasions.id, occasionModel.id!)
          .select()
          .single();
    } else {
      json.remove(Tb.occasions.id);
      data = await _supabase
          .from(Tb.occasions.table)
          .insert(json)
          .select()
          .single();
    }

    return OccasionModel.fromJson(data);
  }

  static updateOccasionUser(OccasionUserModel oum) async {
      await ensureCanUpdateUsers(oum);
      if (oum.user == null) {
        oum.user = await DataService.unsafeCreateUser(oum.occasion!, oum.data?[Tb.occasion_users.data_email], "", oum.data);
      } else {
        await _supabase.rpc("update_user",
            params: {"oc": oum.occasion!, "usr": oum.user!, "data": oum.data!});
        await addUserToCurrentOccasion(oum.user!, oum.occasion!);
      }

      if(oum.user!=null){
        await _supabase.from(Tb.occasion_users.table).upsert(
            oum.toUpdateJson()
        );
      }
  }

  static Future<void> addUserToCurrentOccasion(String id, int occasion) async {
    await _supabase.rpc("add_user_to_occasion",
      params:
      {
        "usr": id,
        "oc": occasion,
      });
  }

  static updateExistingImportedOccasionUser(OccasionUserModel oum) async {
    await ensureCanUpdateUsers(oum);
    await _supabase.from(Tb.occasion_users.table).upsert(
        oum.toImportedUpdateJson()
    );
    await updateUserInfo(oum);

  }

  static Future<void> ensureCanUpdateUsers(OccasionUserModel oum) async {
    if(!RightsService.canUpdateUsers())
    {
      await AuthService.refreshSession();
      if(!RightsService.canUpdateUsers())
      {
        var errorText = "Elevated permission is required. Changes to user ${oum.data?[Tb.occasion_users.data_email]} could not be saved.";
        throw Exception(errorText);
      }
    }
  }

  static Future<void> updateUserInfo(OccasionUserModel data) async {
    await _supabase.rpc("update_user",
        params:
        {
          "usr": data.user,
          "oc": data.occasion,
          "data": data.data
        });
  }

  static Future<List<PlaceModel>> getMapPlaces() async {
    var data = await _supabase.from(Tb.places.table).select().eq(Tb.places.is_hidden, false);
    var toReturn = List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
    toReturn.sortPlaces(false);
    return toReturn;
  }

  static Future<List<PlaceModel>> getAllPlaces() async {
    var data = await _supabase.from(Tb.places.table).select();
    var toReturn = List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
    toReturn.sortPlaces();
    return toReturn;
  }

  static Future<List<PlaceModel>> getPlacesIn(List<int> ids) async {
    var data = await _supabase.from(Tb.places.table)
        .select()
        .inFilter(Tb.places.id, ids);
    var toReturn = List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
    toReturn.sortPlaces();
    return toReturn;
  }

  static Future<List<IconModel>> getAllIcons() async {
    var data = await _supabase.from(Tb.icons.table).select();
    var toReturn = List<IconModel>.from(data.map((x) => IconModel.fromJson(x)));
    return toReturn;
  }

  static Future<List<UserGroupInfoModel>> getGroupsWithPlaces() async {
    var data = await _supabase.from(Tb.user_group_info.table)
        .select("${Tb.user_group_info.title}, ${Tb.places.table}(*)");
    return List<UserGroupInfoModel>.from(data.map((x) => UserGroupInfoModel.fromJson(x)));
  }

  static Future<PlaceModel> getPlace(int id) async {
    var data = await _supabase.from(Tb.places.table).select().eq(Tb.places.id, id).single();
    return PlaceModel.fromJson(data);
  }

  static Future<void> deletePlace(PlaceModel placeModel) async {
    await _supabase.from(Tb.places.table).delete().eq(Tb.places.id, placeModel.id!);
  }

  static Future<PlaceModel> updatePlace(PlaceModel placeModel) async
  {
    var json = placeModel.toJson();
    Map<String, dynamic> data;
    if(placeModel.id!=null) {
      data = await _supabase.from(Tb.places.table).update(json).eq(Tb.places.id, placeModel.id!).select().single();
    }
    else
    {
      json.remove(Tb.places.id);
      data = await _supabase.from(Tb.places.table).insert(json).select().single();
    }
    return PlaceModel.fromJson(data);
  }

  static Future<List<InformationModel>> getAllInformation() async {
    var data = await _supabase.from(Tb.information.table).select();
    var infoList = List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
    infoList.sortBy((element) => element.title??"".toLowerCase());
    infoList.sort((a,b) => (a.getOrder().compareTo(b.getOrder())));
    return infoList;
  }

  static Future<List<InformationModel>> getAllInformationForDataGrid() async {
    var data = await _supabase.from(Tb.information.table).select(
        "${Tb.information.id},"
        "${Tb.information.occasion},"
        "${Tb.information.created_at},"
        "${Tb.information.updated_at},"
        "${Tb.information.is_hidden},"
        "${Tb.information.title},"
        "${Tb.information.order},"
        "${Tb.information.type}"
    );
    var infoList = List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
    infoList.sortBy((element) => element.title??"".toLowerCase());
    infoList.sort((a,b) => (a.getOrder().compareTo(b.getOrder())));
    return infoList;
  }

  static Future<List<InformationModel>> getAllActiveInformation() async {
    var data = await _supabase
        .from(Tb.information.table)
        .select(
          "${Tb.information.id},"
          "${Tb.information.updated_at},"
          "${Tb.information.order},"
          "${Tb.information.type},"
          "${Tb.information.title},"
          "${Tb.information.id}"
        )
        .eq(Tb.information.is_hidden, false);

    var infoList = List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
    infoList.sortBy((element) => element.title??"".toLowerCase());
    infoList.sort((a,b) => (a.getOrder().compareTo(b.getOrder())));
    return infoList;
  }

  static Future<List<InformationModel>> getInfosDescription(Iterable<int> ids) async {
    var data = await _supabase
        .from(Tb.information.table)
        .select("${Tb.information.id}, ${Tb.information.updated_at}, ${Tb.information.description}")
        .inFilter(Tb.information.id, ids.toList());
    return List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
  }
  
  static Future<List<InformationModel>> getAllInfoMeta() async {
    var data = await _supabase
        .from(Tb.information.table)
        .select(
          "${Tb.information.id},"
          "${Tb.information.updated_at}"
    );

    return List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
  }

  static Future<List<UserGroupInfoModel>> getAllUserGroupInfo() async {
    var data = await _supabase
        .from(Tb.user_group_info.table)
        .select(
        "${Tb.user_group_info.id},"
        "${Tb.user_group_info.title},"
        "${Tb.user_info_public.table}!${Tb.user_group_info.leader}(${Tb.user_info.id}, ${Tb.user_info.name}, ${Tb.user_info.surname}),"
        "${Tb.places.table}(*),"
        "${Tb.user_group_info.description},"
        "${Tb.user_groups.table}(${Tb.user_info_public.table}(${Tb.user_info.id}, ${Tb.user_info.name}, ${Tb.user_info.surname}))");
    return List<UserGroupInfoModel>.from(
        data.map((x) => UserGroupInfoModel.fromJson(x)));
  }

  static Future<UserGroupInfoModel?> getUserGroupInfo(int id) async {
    var data = await _supabase
        .from(Tb.user_group_info.table)
        .select(
        "${Tb.user_group_info.id},"
            "${Tb.user_group_info.title},"
            "${Tb.user_info_public.table}!${Tb.user_group_info.leader}(${Tb.user_info_public.id}, ${Tb.user_info_public.name}, ${Tb.user_info_public.surname}),"
            "${Tb.places.table}(*),"
            "${Tb.user_group_info.description},"
            "${Tb.user_groups.table}(${Tb.user_info_public.table}(${Tb.user_info_public.id}, ${Tb.user_info_public.name}, ${Tb.user_info_public.surname}))")
    .eq(Tb.user_group_info.id, id)
    .maybeSingle();
    if(data==null)
    {
      return null;
    }
    return UserGroupInfoModel.fromJson(data);
  }

  static Future<List<ExclusiveGroupModel>> getAllExclusiveGroups() async {
    var data = await _supabase
        .from(Tb.exclusive_groups.table)
        .select("${Tb.exclusive_groups.id}, ${Tb.exclusive_groups.title}, ${Tb.exclusive_events.table}(${Tb.exclusive_events.event})");
    return List<ExclusiveGroupModel>.from(
        data.map((x) => ExclusiveGroupModel.fromJson(x)));
  }

  static updateUserGroupInfo(UserGroupInfoModel model) async {
    if(!(RightsService.isEditor() || model.leader!.id == AuthService.currentUserId()))
    {
      throw Exception("Must be leader or admin to change the group.");
    }

    var upsertObj = {
      Tb.user_group_info.title: model.title,
      Tb.user_group_info.leader: model.leader?.id,
    };

    if(model.description != null)
    {
      upsertObj.addAll({Tb.user_group_info.description: model.description});
    }
    if(model.place != null)
    {
      model.place = await DataService.updatePlace(model.place!);
      upsertObj.addAll({Tb.user_group_info.place: model.place!.id.toString()});
    }
    dynamic eventData;
    if(model.id!=null) {
      upsertObj.addAll({Tb.user_group_info.id: model.id.toString()});
      eventData = await _supabase.from(Tb.user_group_info.table).upsert(upsertObj).eq(Tb.user_group_info.id, model.id!).select().single();
    }
    else
    {
      eventData = await _supabase.from(Tb.user_group_info.table).insert(upsertObj).select().single();
    }
    var updated = UserGroupInfoModel.fromJson(eventData);
    await updateUserGroupParticipants(updated, model.participants!);
  }

  static updateUserGroupParticipants(UserGroupInfoModel group, Set<UserInfoModel> participants) async {
    await _supabase
        .from(Tb.user_groups.table)
        .delete()
        .eq(Tb.user_groups.group, group.id!);

    for(var p in participants)
    {
      await _supabase
          .from(Tb.user_groups.table)
          .insert({
              Tb.user_groups.group:group.id,
              Tb.user_groups.user:p.id
          });
    }
  }

  static deleteUserGroupInfo(UserGroupInfoModel model) async {
    await _supabase
        .from(Tb.user_groups.table)
        .delete()
        .eq(Tb.user_groups.group, model.id!);
    await _supabase
        .from(Tb.user_group_info.table)
        .delete()
        .eq(Tb.user_group_info.id, model.id!);
    if(model.place!=null)
    {
      await _supabase
          .from(Tb.places.table)
          .delete()
          .eq(Tb.places.id, model.place!.id!);
    }
  }

  static updateExclusiveGroup(ExclusiveGroupModel model) async {
    var upsertObj = {
      Tb.exclusive_groups.title: model.title,
    };

    dynamic eventData;
    if(model.id!=null) {
      upsertObj.addAll({Tb.exclusive_groups.id: model.id.toString()});
      eventData = await _supabase.from(Tb.exclusive_groups.table).update(upsertObj).eq(Tb.exclusive_groups.id, model.id!).select().single();
    }
    else
    {
      eventData = await _supabase.from(Tb.exclusive_groups.table).insert(upsertObj).select().single();
    }
    var updated = ExclusiveGroupModel.fromJson(eventData);

    await _supabase
        .from(Tb.exclusive_events.table)
        .delete()
        .eq(Tb.exclusive_events.group, updated.id!);

    var insert = [];
    for(var e in model.events!)
    {
      insert.add(
          {Tb.exclusive_events.group:updated.id, 
            Tb.exclusive_events.event:e});
    }
    await _supabase
        .from(Tb.exclusive_events.table)
        .insert(insert)
        .select();
  }

  static Future<void> deleteExclusiveGroup(ExclusiveGroupModel data) async {
    await _supabase
        .from(Tb.exclusive_events.table)
        .delete()
        .eq(Tb.exclusive_events.group, data.id!);
    await _supabase
        .from(Tb.exclusive_groups.table)
        .delete()
        .eq(Tb.exclusive_groups.id, data.id!);
  }

  static Future<void> signOutFromEvent(int eventId, [UserInfoModel? participant]) async {
    AuthService.ensureUserIsLoggedIn();
    var userId = participant?.id ?? AuthService.currentUserId();

    var result = await _supabase.rpc("sign_user_out_of_event",
        params: {"ev": eventId, "usr": userId});
    switch(result["code"]) {
      case 200:
        if(participant == null) {
          var trPrefix = AuthService.currentUser!.getGenderPrefix();
          ToastHelper.Show("${trPrefix}You have been signed out.".tr());
          return;
        }
        else{
          var trPrefix = participant.getGenderPrefix();
          ToastHelper.Show("${trPrefix}{user} has been signed out.".tr(namedArgs: {"user":participant.toString()}));
        }
        return;
      case 201:
        ToastHelper.Show("It is not possible to sign out from an event that has already taken place.".tr(), severity: ToastSeverity.NotOk);
        return;
    }
  }

  static Future<void> updateInformation(InformationModel info) async {
    var upsertObj = {
      Tb.information.title: info.title,
      Tb.information.type: info.type,
      Tb.information.is_hidden: info.isHidden,
      Tb.information.order: info.order
    };
    if(info.description!=null) {
      upsertObj.addAll({Tb.information.description: info.description});
    }
    if(info.id!=null) {
      upsertObj.addAll({Tb.information.id: info.id});
      await _supabase.from(Tb.information.table).update(upsertObj).eq(Tb.information.id, info.id!);
    }
    else
    {
      await _supabase.from(Tb.information.table).insert(upsertObj);
    }
  }

  static Future<void> deleteInformation(InformationModel info) async {
    await _supabase
        .from(Tb.information.table)
        .delete()
        .eq(Tb.information.id, info.id!);
  }

  static Future<void> deleteNewsMessage(NewsModel message) async {
    var lastMes = await _supabase
        .from(Tb.news.table)
        .select(Tb.news.id)
        .lt(Tb.news.created_at, message.createdAt!)
    // from some reason lower than is behaving like lower and equal than on web platform
    // therefore additional check
        .neq(Tb.news.id, message.id)
        .order(Tb.news.created_at)
        .limit(1)
        .maybeSingle();

    if(lastMes!=null) {
      var currentUsers = await _supabase
          .from(Tb.user_news.table)
          .select(Tb.user_news.user)
          .eq(Tb.user_news.news_id, message.id);

      List<Map<String, dynamic>> toBeUpdated = [];
      for(var u in currentUsers) {
        toBeUpdated.add({
          Tb.user_news.user: u[Tb.user_news.user],
          Tb.user_news.news_id: lastMes[Tb.news.id]
        });
      }

      await _supabase
        .from(Tb.user_news.table)
        .upsert(toBeUpdated).select();
    }
    else {
      await _supabase
          .from(Tb.user_news.table)
          .delete()
          .eq(Tb.user_news.news_id, message.id);
    }

    await _supabase
        .from(Tb.news.table)
        .delete()
        .eq(Tb.news.id, message.id);

    ToastHelper.Show("Message has been removed.".tr());
  }

  static Future<void> updateNewsMessage(NewsModel message) async {
    await _supabase
        .from(Tb.news.table)
        .update({Tb.news.message:message.message})
        .eq(Tb.news.id, message.id);
    ToastHelper.Show("Message has been changed.".tr());
  }

  static insertNewsMessage(String? heading, String headingDefault, String message, bool addToNews, bool withNotification, List<String>? to) async {
    if (addToNews) {
      var messageForNews = heading != null ? "<strong>$heading</strong><br>$message" : message;
      await _supabase.from(Tb.news.table).insert(
          {
            Tb.news.message: messageForNews,
            Tb.news.created_by: AuthService.currentUserId()
          }
      ).select();
    }

    if (withNotification) {
      String basicMessage = "";
      var document = parse(message);
      for (var child in document.getElementsByTagName("p")) {
        var innerText = "${child.text}\n";
        if (innerText.trim().isEmpty) {
          continue;
        }
        basicMessage += innerText;
      }
      basicMessage = basicMessage.trim();
      await _supabase.from(Tb.log_notifications.table)
          .insert(
          {
            Tb.log_notifications.to: to,
            Tb.log_notifications.content: basicMessage,
            Tb.log_notifications.heading: heading ?? headingDefault
          }
      );

      ToastHelper.Show("Message has been sent.".tr());
      return;
    }

    if (addToNews) {
      ToastHelper.Show("Message has been created.".tr());
    }
  }

  static Future<int> countNewMessages() async {
    AuthService.ensureUserIsLoggedIn();
    int lastMessageId = await getLastReadMessage();
    var result = await _supabase
        .from(Tb.news.table)
        .select()
        .gt(Tb.news.id, lastMessageId)
        .count();
    return result.count;
  }

  static Future<int> getLastReadMessage() async {
    AuthService.ensureUserIsLoggedIn();
    int lastMessageId = 0;
    var lastMessage = await _supabase
        .from(Tb.user_news.table)
        .select(Tb.user_news.news_id)
        .eq(Tb.user_news.user, AuthService.currentUserId())
        .maybeSingle();
    if (lastMessage != null) {
      lastMessageId = lastMessage[Tb.user_news.news_id];
    }
    return lastMessageId;
  }

  static void setMessagesAsRead(int newsId) async {
    AuthService.ensureUserIsLoggedIn();
    await _supabase
        .from(Tb.user_news.table)
        .upsert({Tb.user_news.user: AuthService.currentUserId(), Tb.user_news.news_id: newsId}).select();
  }

  static Future<List<NewsModel>> getAllNewsMessages() async {
    int lastReadMessageId = 0;
    if (AuthService.isLoggedIn()) {
      lastReadMessageId = await getLastReadMessage();
    }
    var data = await _supabase
        .from(Tb.news.table)
        .select(
            "${Tb.news.id},"
            "${Tb.news.created_at},"
            "${Tb.news.message},"
            "${Tb.user_info_public.table}(${Tb.user_info_public.name},${Tb.user_info_public.surname}),"
            "${Tb.user_news_views.table}(count)")
        .order(Tb.news.created_at);

    List<NewsModel> loadedMessages = List<NewsModel>.from(data.map((x) => NewsModel.fromJson(x)));

    int viewsAggregate = 0;
    for (var message in loadedMessages) {
      viewsAggregate += message.views;
      message.views = viewsAggregate;
      if (AuthService.isLoggedIn()) {
        message.isRead = lastReadMessageId >= message.id;
      }
    }
    return loadedMessages;
  }

  static Future<void> saveLocation(int placeId, double lat, double lng) async {
    if(!(RightsService.isEditor() || (AuthService.isGroupLeader() && AuthService.currentUserGroup()!.place!.id == placeId)))
    {
      throw Exception("You cannot change this place.");
    }
    await _supabase.from(Tb.places.table).update({
      Tb.places.coordinates: {
        "latLng": {"lat": lat, "lng": lng}
      }
    }).eq(Tb.places.id, placeId);
    ToastHelper.Show("Place has been changed.".tr());
  }

  static Future<void> refreshOfflineData() async {
    if(AuthService.isLoggedIn()) {
      var userInfo = await AuthService.getFullUserInfo();
      await OfflineDataService.saveUserInfo(userInfo);
    }
    else {
      await OfflineDataService.deleteUserInfo();
    }

    var places = await getAllPlaces();
    await OfflineDataService.saveAllPlaces(places);

    var icons = await getAllIcons();
    await OfflineDataService.saveAllIcons(icons);

    var info = await getAllActiveInformation();
    await OfflineDataService.saveAllInfo(info);

    var messages = await getAllNewsMessages();
    await OfflineDataService.saveAllMessages(messages);

    if (isPwaInstalledOrNative() )
    {
      await updateEventDescriptions();
      await updateInfoDescription();
    }

    await DbEvents.synchronizeMySchedule();
  }

  static bool isPwaInstalledOrNative() => !const bool.fromEnvironment('dart.library.js_util') || PWAInstall().launchMode!.installed ;

  static Future<void> updateEventDescriptions() async {
    var needsUpdate = <int>[];
    var allEventsMeta = await DbEvents.getAllEventsMeta();

    for(var e in allEventsMeta) {
      var oe = await OfflineDataService.getEventDescription(e.id.toString());
      if(oe==null || oe.updatedAt==null || oe.updatedAt!.isBefore(e.updatedAt!)) {
          needsUpdate.add(e.id!);
      }
    }

    var fullEvents = await DbEvents.getEventsDescription(needsUpdate);
    for(var e in fullEvents) {
      await OfflineDataService.saveEventDescription(e);
    }
  }

  static Future<void> updateInfoDescription([List<int>? infoIds]) async {
    var needsUpdate = <int>[];
    var allMeta = await getAllInfoMeta();

    List<InformationModel> infosToCheck;
    if (infoIds != null) {
      infosToCheck = allMeta.where((e) => infoIds.contains(e.id)).toList();
    } else {
      infosToCheck = allMeta;
    }

    await _checkForUpdates(infosToCheck, needsUpdate);

    if (needsUpdate.isNotEmpty) {
      var fullEvents = await getInfosDescription(needsUpdate);
      for (var e in fullEvents) {
        await OfflineDataService.saveInfoDescription(e);
      }
    }
  }

  static Future<void> _checkForUpdates(List<InformationModel> infosToCheck, List<int> needsUpdate) async {
    for (var infoMeta in infosToCheck) {
      var oe = await OfflineDataService.getInfoDescription(infoMeta.id.toString());
      if (oe == null || oe.updatedAt == null || oe.updatedAt!.isBefore(infoMeta.updatedAt!)) {
        needsUpdate.add(infoMeta.id!);
      }
    }
  }


  static Future<OccasionLinkModel> checkOccasionLink(String link) async {
    var data = await _supabase.rpc("check_occasion_link",
        params: {"link_txt": link});
    return OccasionLinkModel.fromJson(data);
  }
  static Future<bool> hasEventAllowedRole(int eventId) async {
    var data = await _supabase.rpc("get_is_event_allowed",
        params: {"ev": eventId});
    return data;
  }

  static Future<void> ImportFromSingleToMultipleEventType() async {
    var data = await _supabase.from(Tb.user_info.table).select();
    var allUsers = List<UserInfoModel>.from(data.map((x) => UserInfoModel.fromJson(x)));
    List<OccasionUserModel> insertOu = [];
    var ou = await getOccasionUsers();
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

  static Future<Map<String, dynamic>> register(Map<String, dynamic> data) async {
    var resp = await _supabase.functions.invoke("register", body: data);
    return resp.data;
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
