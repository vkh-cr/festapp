import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_models/icon_model.dart';
import 'package:fstapp/data_models/path_group_model.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/DataExtensions.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbPlaces {
  static final _supabase = Supabase.instance.client;

  static Future<List<PlaceModel>> getMapPlaces() async {
    var data = await _supabase
        .from(Tb.places.table)
        .select()
        .eq(Tb.places.is_hidden, false)
        .eq(Tb.places.occasion, RightsService.currentOccasionId!);
    var toReturn =
    List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
    toReturn.sortPlaces();
    return toReturn;
  }

  static Future<List<PlaceModel>> getAllPlaces() async {
    var data = await _supabase
        .from(Tb.places.table)
        .select()
        .eq(Tb.places.occasion, RightsService.currentOccasionId!);
    var toReturn =
    List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
    toReturn.sortPlaces();
    return toReturn;
  }

  static Future<List<PlaceModel>> getPlacesIn(List<int> ids) async {
    var data = await _supabase
        .from(Tb.places.table)
        .select()
        .inFilter(Tb.places.id, ids);
    var toReturn =
    List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
    toReturn.sortPlaces();
    return toReturn;
  }

  static Future<List<IconModel>> getAllIcons() async {
    var data = await _supabase
        .from(Tb.icons.table)
        .select()
        .eq(Tb.icons.organization, AppConfig.organization);
    return List<IconModel>.from(data.map((x) => IconModel.fromJson(x)));
  }

  static Future<PlaceModel> getPlace(int id) async {
    var data = await _supabase
        .from(Tb.places.table)
        .select()
        .eq(Tb.places.id, id)
        .single();
    return PlaceModel.fromJson(data);
  }

  static Future<void> deletePlace(PlaceModel placeModel) async {
    await _supabase
        .from(Tb.places.table)
        .delete()
        .eq(Tb.places.id, placeModel.id!);
  }

  static Future<PlaceModel> updatePlace(PlaceModel placeModel) async {
    var upsertObj = placeModel.toJson();
    dynamic data;
    if (placeModel.id != null) {
      data = await _supabase
          .from(Tb.places.table)
          .update(upsertObj)
          .eq(Tb.places.id, placeModel.id!)
          .select()
          .single();
    } else {
      upsertObj.remove(Tb.places.id);
      upsertObj[Tb.places.occasion] = RightsService.currentOccasionId!;
      data = await _supabase
          .from(Tb.places.table)
          .insert(upsertObj)
          .select()
          .single();
    }
    return PlaceModel.fromJson(data);
  }

  static Future<void> saveLocation(
      int placeId, double lat, double lng) async {
    if (!(RightsService.isEditor() ||
        (AuthService.isGroupLeader() &&
            AuthService.currentUserGroup()!.place!.id == placeId))) {
      throw Exception("You cannot change this place.");
    }
    await _supabase.from(Tb.places.table).update({
      Tb.places.coordinates: {
        "latLng": {"lat": lat, "lng": lng}
      }
    }).eq(Tb.places.id, placeId);
  }

  /// Fetch all path‑groups, including their List<List<int>> `path_data`
  static Future<List<PathGroupsModel>> getAllPathGroups() async {
    final data = await _supabase
        .from(Tb.path_groups.table)
        .select(
        '${Tb.path_groups.id},'
            '${Tb.path_groups.title},'
            '${Tb.path_groups.order},'
            '${Tb.path_groups.is_hidden},'
            '${Tb.path_groups.data},'
            '${Tb.path_groups.path_data},'
            '${Tb.path_groups.icon}'
    )
        .eq(Tb.path_groups.occasion, RightsService.currentOccasionId!);

    var toReturn =  (data as List<dynamic>)
        .map((x) => PathGroupsModel.fromJson(x as Map<String, dynamic>))
        .toList();
    toReturn.sortPathGroups();
    return toReturn;
  }

  /// Insert or update a path‑group, writing its `pathData` directly into
  /// the `path_data` JSON column.
  static Future<void> updatePathGroup(PathGroupsModel model) async {
    // build our upsert object
    final upsertObj = <String, dynamic>{
      Tb.path_groups.title:    model.title,
      Tb.path_groups.order:     model.order,
      Tb.path_groups.data:     model.data,
      Tb.path_groups.is_hidden: model.isHidden,
      Tb.path_groups.path_data: model.pathData,
      Tb.path_groups.icon: model.icon,
    };

    dynamic pgData;
    if (model.id != null) {
      // --- UPDATE existing
      upsertObj[Tb.path_groups.id] = model.id;
      pgData = await _supabase
          .from(Tb.path_groups.table)
          .update(upsertObj)
          .eq(Tb.path_groups.id, model.id!)
          .select()
          .single();
    } else {
      // --- INSERT new
      upsertObj[Tb.path_groups.occasion] = RightsService.currentOccasionId!;
      pgData = await _supabase
          .from(Tb.path_groups.table)
          .insert(upsertObj)
          .select()
          .single();
    }

    // refresh local model if needed
    final updated = PathGroupsModel.fromJson(pgData as Map<String, dynamic>);
    model.id       = updated.id;
    model.data     = updated.data;
    model.pathData = updated.pathData;
    // (and any other fields you want to keep in sync)
  }

  /// Delete a path‑group (now only needs to remove the row itself)
  static Future<void> deletePathGroup(PathGroupsModel model) async {
    await _supabase
        .from(Tb.path_groups.table)
        .delete()
        .eq(Tb.path_groups.id, model.id!);
  }
}
