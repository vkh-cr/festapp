// ignore_for_file: unused_import

import 'package:collection/collection.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataModels/CompanionModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbInformation {
  static final _supabase = Supabase.instance.client;

  static Future<List<InformationModel>> getAllInformationForDataGrid() async {
    var data = await _supabase.from(Tb.information.table).select(
        "${Tb.information.id},"
        "${Tb.information.occasion},"
        "${Tb.information.created_at},"
        "${Tb.information.updated_at},"
        "${Tb.information.is_hidden},"
        "${Tb.information.title},"
        "${Tb.information.order},"
        "${Tb.information.type}")
    .eq(Tb.information.occasion, RightsService.currentOccasion!);
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
      upsertObj.addAll({Tb.information.occasion: RightsService.currentOccasion});
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

  static Future<void> _checkForUpdates(List<InformationModel> infosToCheck, List<int> needsUpdate) async {
    for (var infoMeta in infosToCheck) {
      var oe = await OfflineDataService.getInfoDescription(infoMeta.id.toString());
      if (oe == null || oe.updatedAt == null || oe.updatedAt!.isBefore(infoMeta.updatedAt!)) {
        needsUpdate.add(infoMeta.id!);
      }
    }
  }
}
