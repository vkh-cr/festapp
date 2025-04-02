import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbInformation {
  static final _supabase = Supabase.instance.client;

  static List<InformationModel> _sortViaDatetime(List<InformationModel> infoList) {
    infoList.sort((a, b) {
      final orderComparison = a.getDateTime().compareTo(b.getDateTime());
      return orderComparison;
    });
    return infoList;
  }

  static List<InformationModel> _sortInformationList(List<InformationModel> infoList) {
    infoList.sort((a, b) {
      final orderComparison = a.getOrder().compareTo(b.getOrder());
      if (orderComparison != 0) {
        return orderComparison;
      }
      return Utilities.naturalCompare(a.title?.toLowerCase() ?? "", b.title?.toLowerCase() ?? "");
    });
    return infoList;
  }

  static Future<List<InformationModel>> getAllInformationForDataGrid([String? type]) async {
    var select = "${Tb.information.id},"
        "${Tb.information.occasion},"
        "${Tb.information.created_at},"
        "${Tb.information.updated_at},"
        "${Tb.information.is_hidden},"
        "${Tb.information.title},"
        "${Tb.information.order},"
        "${Tb.information.type},"
        "${Tb.information.data},"
        "${Tb.information_hidden.table}(*)";
    List<Map<String, dynamic>> data = [];
    if (type != null) {
      data = await _supabase.from(Tb.information.table).select(select)
          .eq(Tb.information.occasion, RightsService.currentOccasionId!)
          .filter(Tb.information.type, "eq", type);
    } else {
      data = await _supabase.from(Tb.information.table).select(select)
          .eq(Tb.information.occasion, RightsService.currentOccasionId!)
          .or("${Tb.information.type}.eq.,${Tb.information.type}.is.null");
    }
    var infoList = List<InformationModel>.from(data.map((x) => InformationModel.fromJson(x)));
    return _sortInformationList(infoList);
  }

  static Future<List<InformationModel>> getAllInformationForDataGridForUnit(int unitId, [String? type]) async {
    var select = "${Tb.information.id},"
        "${Tb.information.unit},"
        "${Tb.information.occasion},"
        "${Tb.information.created_at},"
        "${Tb.information.updated_at},"
        "${Tb.information.is_hidden},"
        "${Tb.information.title},"
        "${Tb.information.order},"
        "${Tb.information.type},"
        "${Tb.information.data},"
        "${Tb.information_hidden.table}(*)";
    List<Map<String, dynamic>> data = [];
    if (type != null) {
      data = await _supabase.from(Tb.information.table).select(select)
          .or("${Tb.information.occasion}.is.null")
          .eq(Tb.information.unit, unitId)
          .filter(Tb.information.type, "eq", type);
    } else {
      data = await _supabase.from(Tb.information.table).select(select)
          .or("${Tb.information.occasion}.is.null")
          .eq(Tb.information.unit, unitId)
          .or("${Tb.information.type}.eq.,${Tb.information.type}.is.null");
    }
    var infoList = List<InformationModel>.from(data.map((x) => InformationModel.fromJson(x)));
    return _sortViaDatetime(infoList);
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
        .eq(Tb.information.occasion, RightsService.currentOccasionId!);

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
        .eq(Tb.information.occasion, RightsService.currentOccasionId!);

    return List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
  }

  static Future<void> updateInformation(InformationModel info) async {
    if(info.type == InformationModel.gameType){

      Map<String, dynamic> upsertObj = {
        Tb.information_hidden.data: info.informationHidden?.data,
        Tb.information_hidden.occasion: RightsService.currentOccasionId!
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
      if(info.unit == null){
        upsertObj.addAll({Tb.information.occasion: RightsService.currentOccasionId!});
      } else{
        upsertObj.addAll({Tb.information.unit: info.unit});
      }
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

  static Future<InformationModel?> getCurrentQuote(int unitId) async {
    var data = await _supabase.rpc("get_current_quote",
        params:
        {
          "unit_id": unitId,
        });
    if(data["code"] == 200){
      return InformationModel.fromJson(data["data"]);
    }
    return null;
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
