import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_models/icon_model.dart';
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
    var toReturn = List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
    toReturn.sortPlaces();
    return toReturn;
  }

  static Future<List<PlaceModel>> getAllPlaces() async {
    var data = await _supabase
        .from(Tb.places.table)
        .select()
        .eq(Tb.places.occasion, RightsService.currentOccasionId!);
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
    var data = await _supabase.from(Tb.icons.table).select().eq(Tb.icons.organization, AppConfig.organization);
    var toReturn = List<IconModel>.from(data.map((x) => IconModel.fromJson(x)));
    return toReturn;
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
    await _supabase.from(Tb.places.table).delete().eq(Tb.places.id, placeModel.id!);
  }

  static Future<PlaceModel> updatePlace(PlaceModel placeModel) async
  {
    var upsertObj = placeModel.toJson();
    Map<String, dynamic> data;
    if(placeModel.id!=null) {
      data = await _supabase.from(Tb.places.table).update(upsertObj).eq(Tb.places.id, placeModel.id!).select().single();
    }
    else
    {
      upsertObj.remove(Tb.places.id);
      upsertObj.addAll({Tb.places.occasion: RightsService.currentOccasionId!});
      data = await _supabase.from(Tb.places.table).insert(upsertObj).select().single();
    }
    return PlaceModel.fromJson(data);
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
  }
}

