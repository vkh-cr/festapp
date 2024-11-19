// ignore_for_file: unused_import

import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataModels/CompanionModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbInformation {
  static final _supabase = Supabase.instance.client;

  static Future<List<InformationModel>> getAllInformationForDataGrid([String? informationType]) async {
    var data = await _supabase.from(Tb.information.table).select(
        "${Tb.information.id},"
            "${Tb.information.occasion},"
            "${Tb.information.created_at},"
            "${Tb.information.updated_at},"
            "${Tb.information.is_hidden},"
            "${Tb.information.title},"
            "${Tb.information.order},"
            "${Tb.information.type},"
            "${Tb.information.data},"
            "${Tb.information_hidden.table}(*)")
        .eq(Tb.information.occasion, RightsService.currentOccasion!)
        .filter(Tb.information.type, "eq", informationType ?? "");

    var infoList = List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));

    infoList.sort((a, b) {
      // Sort by order first
      final orderComparison = a.getOrder().compareTo(b.getOrder());
      if (orderComparison != 0) {
        return orderComparison;
      }
      // If order is the same, sort naturally by title
      return _naturalCompare(
          a.title?.toLowerCase() ?? "", b.title?.toLowerCase() ?? "");
    });

    return infoList;
  }

  static int _naturalCompare(String a, String b) {
    final regex = RegExp(r'\d+|\D+');
    final aMatches = regex.allMatches(a).map((m) => m.group(0)!).toList();
    final bMatches = regex.allMatches(b).map((m) => m.group(0)!).toList();

    for (var i = 0; i < aMatches.length && i < bMatches.length; i++) {
      final aPart = aMatches[i];
      final bPart = bMatches[i];

      // Compare numbers as numbers
      if (RegExp(r'^\d+$').hasMatch(aPart) && RegExp(r'^\d+$').hasMatch(bPart)) {
        final aNum = int.parse(aPart);
        final bNum = int.parse(bPart);
        final numCompare = aNum.compareTo(bNum);
        if (numCompare != 0) return numCompare;
      } else {
        // Compare non-numeric parts lexicographically
        final strCompare = aPart.compareTo(bPart);
        if (strCompare != 0) return strCompare;
      }
    }

    // If all parts are equal so far, compare lengths
    return aMatches.length.compareTo(bMatches.length);
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
            "${Tb.information.id},"
            "${Tb.information.data}"
        )
        .eq(Tb.information.is_hidden, false)
        .eq(Tb.information.occasion, RightsService.currentOccasion!);

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
          "${Tb.information.updated_at}")
        .eq(Tb.information.is_hidden, false)
        .eq(Tb.information.occasion, RightsService.currentOccasion!);

    return List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
  }

  static Future<void> updateInformation(InformationModel info) async {
    if(info.type == InformationModel.gameType){


      Map<String, dynamic> upsertObj = {
        Tb.information_hidden.data: info.informationHidden?.data,
        Tb.information_hidden.occasion: RightsService.currentOccasion!
      };
      Map<String, dynamic> ref;
      if(info.informationHidden?.id != null){
        upsertObj.addAll({
          Tb.information_hidden.id: info.informationHidden?.id,
        });
        ref = await _supabase.from(Tb.information_hidden.table).update(upsertObj).eq(Tb.information_hidden.id, info.informationHidden!.id!).select(Tb.information_hidden.id).single();
      } else {
        ref = await _supabase.from(Tb.information_hidden.table).insert(upsertObj).select(Tb.information_hidden.id).single();
      }

      info.informationHidden = InformationHiddenModel(id: ref[Tb.information_hidden.id]);
    }
    var upsertObj = {
      Tb.information.title: info.title,
      Tb.information.type: info.type,
      Tb.information.is_hidden: info.isHidden,
      Tb.information.order: info.order,
      Tb.information.data: info.data,
      Tb.information.information_hidden: info.informationHidden?.id
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
      upsertObj.addAll({Tb.information.occasion: RightsService.currentOccasion!});
      await _supabase.from(Tb.information.table).insert(upsertObj);
    }
  }

  static Future<void> deleteInformation(InformationModel info) async {
    await _supabase
        .from(Tb.information.table)
        .delete()
        .eq(Tb.information.id, info.id!);
  }

  static Future<void> updateInfoDescription([List<int>? infoIds]) async {
    var needsUpdate = <int>[];
    var allMeta = await DbInformation.getAllInfoMeta();

    List<InformationModel> infosToCheck;
    if (infoIds != null) {
      infosToCheck = allMeta.where((e) => infoIds.contains(e.id)).toList();
    } else {
      infosToCheck = allMeta;
    }

    await _checkForUpdates(infosToCheck, needsUpdate);

    if (needsUpdate.isNotEmpty) {
      var fullEvents = await DbInformation.getInfosDescription(needsUpdate);
      for (var e in fullEvents) {
        await OfflineDataService.saveInfoDescription(e);
      }
    }
  }

  static Future<void> fillDescriptionFromOffline(InformationModel info) async {
    var infoDesc = await OfflineDataService.getInfoDescription(info.id!.toString());
    if (infoDesc != null) {
      info.description = infoDesc.description ?? "";
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

  static Future<bool> makeGameGuess(BuildContext context, int checkPointId, String guess) async {
    var result = await _supabase.rpc("game_guess", params: {
      "check_point_id": checkPointId,
      "guess": guess,
    });

    switch (result["code"]) {
      case 200:  // Correct answer
        ToastHelper.Show(context, "Correct!".tr());
        return true;

      case 4031:  // User not in occasion
        ToastHelper.Show(context, "You are not part of this occasion.".tr(), severity: ToastSeverity.NotOk);
        break;

      case 4032:  // User not part of a game group
        ToastHelper.Show(context, "You are not part of a game group.".tr(), severity: ToastSeverity.NotOk);
        break;

      case 4033:  // Guessing outside allowed time window
        ToastHelper.Show(context, "Guessing is only allowed within the game time window.", severity: ToastSeverity.NotOk);
        break;

      case 4041:  // Correct reference not found
        ToastHelper.Show(context, "Correct answer for this check point was not set.".tr(), severity: ToastSeverity.NotOk);
        break;

      case 4042:  // Hidden info not found
        ToastHelper.Show(context, "Correct answer was not set.".tr(), severity: ToastSeverity.NotOk);
        break;

      case 4001:  // Incorrect guess
        ToastHelper.Show(context, "Incorrect, try again!".tr(), severity: ToastSeverity.NotOk);
        break;

      default:
        ToastHelper.Show(context, "An unexpected error occurred.".tr(), severity: ToastSeverity.NotOk);
        break;
    }
    return false;
  }

}
