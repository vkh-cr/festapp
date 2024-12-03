import 'package:fstapp/components/seatReservation/utils/SeatState.dart';
import 'package:fstapp/dataModelsEshop/BlueprintGroup.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'BlueprintConfiguration.dart';
import 'BlueprintObjectModel.dart';
import 'package:collection/collection.dart';

class BlueprintModel {
  static const String metaSpots = "spots";
  static const String metaTableAreaType = "table";
  static const String metaSpotType = "spot";

  int? id;
  DateTime? createdAt;
  Map<String, dynamic>? data;
  String? title;
  int? organization;
  int? occasion;
  BlueprintConfiguration? configuration;
  List<BlueprintObjectModel>? objects;
  List<BlueprintObjectModel>? spots;
  List<BlueprintGroupModel>? groups;

  factory BlueprintModel.fromJson(Map<String, dynamic> json) {
    return BlueprintModel(
      id: json[TbEshop.blueprints.id],
      createdAt: json[TbEshop.blueprints.created_at] != null
          ? DateTime.parse(json[TbEshop.blueprints.created_at])
          : null,
      data: json[TbEshop.blueprints.data],
      title: json[TbEshop.blueprints.title],
      organization: json[TbEshop.blueprints.organization],
      occasion: json[TbEshop.blueprints.occasion],
      configuration: json[TbEshop.blueprints.configuration] != null
          ? BlueprintConfiguration.fromJson(json[TbEshop.blueprints.configuration])
          : null,
      objects: json[TbEshop.blueprints.objects] != null
          ? List<BlueprintObjectModel>.from(
          json[TbEshop.blueprints.objects].map((obj) => BlueprintObjectModel.fromJson(obj)))
          : null,
      spots: json[metaSpots] != null
          ? List<BlueprintObjectModel>.from(
          json[metaSpots].map((spot) => BlueprintObjectModel.fromJson(spot)))
          : null,
      groups: json[TbEshop.blueprints.groups] != null
          ? List<BlueprintGroupModel>.from(
          json[TbEshop.blueprints.groups].map((g) => BlueprintGroupModel.fromJson(g)))
          : [],
    );
  }

  Map<String, dynamic> toJson() => {
    TbEshop.blueprints.id: id,
    TbEshop.blueprints.created_at: createdAt?.toIso8601String(),
    TbEshop.blueprints.data: data,
    TbEshop.blueprints.title: title,
    TbEshop.blueprints.occasion: occasion,
    TbEshop.blueprints.organization: organization,
    TbEshop.blueprints.configuration: configuration,
    TbEshop.blueprints.objects: objects,
    TbEshop.blueprints.groups: groups,
  };

  String toBasicString() => title ?? id.toString();

  List<BlueprintObjectModel> toBlueprintObjects() {
    if (objects == null) return [];

    return objects!.map((object) {
      if (object.type == metaSpotType) {
        final matchingSpot = spots?.firstWhereOrNull((spot) => spot.id == object.id);
        return BlueprintObjectModel(
          id: object.id,
          title: matchingSpot?.title ?? object.title,
          stateEnum: BlueprintObjectModel.States.entries
              .firstWhere(
                  (entry) => entry.value == matchingSpot?.state,
              orElse: () => MapEntry(SeatState.available, BlueprintObjectModel.availableType)).key,
          x: object.x,
          y: object.y,
        );
      } else if (object.type == metaTableAreaType) {
        return BlueprintObjectModel(
          id: object.id,
          title: object.title,
          stateEnum: SeatState.black,
          x: object.x,
          y: object.y,
        );
      }
      // If the object type is neither "spot" nor "table", skip it
      return null;
    }).whereType<BlueprintObjectModel>().toList(); // Filter out null values
  }

  BlueprintModel({
    this.id,
    this.createdAt,
    this.data,
    this.title,
    this.organization,
    this.occasion,
    this.configuration,
    this.objects,
    this.spots,
    this.groups,
  });
}
