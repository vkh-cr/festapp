import 'package:fstapp/components/seatReservation/utils/SeatState.dart';
import 'package:fstapp/dataModelsEshop/BlueprintGroup.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'BlueprintConfiguration.dart';
import 'BlueprintObjectModel.dart';

class BlueprintModel {
  static const String metaSpots = "spots";
  static const String metaTableAreaType = "table";
  static const String metaSpotType = "spot";

  int? id;
  DateTime? createdAt;
  Map<String, dynamic>? data;
  String? title;
  int? organization;
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
      configuration: json[TbEshop.blueprints.configuration] != null
          ? BlueprintConfiguration.fromJson(json[TbEshop.blueprints.configuration])
          : null,
      objects: json[TbEshop.blueprints.objects] != null
          ? List<BlueprintObjectModel>.from(
          json[TbEshop.blueprints.objects].map((obj) => BlueprintObjectModel.fromJson(obj)))
          : null,
      spots: json[metaSpotType] != null
          ? List<BlueprintObjectModel>.from(
          json[metaSpotType].map((spot) => BlueprintObjectModel.fromJson(spot)))
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
    TbEshop.blueprints.organization: organization,
    TbEshop.blueprints.configuration: configuration?.toJson(),
    TbEshop.blueprints.objects: objects?.map((obj) => obj.toJson()),
    TbEshop.blueprints.groups: groups?.map((g) => g.toJson()),
  };

  String toBasicString() => title ?? id.toString();

  List<BlueprintObjectModel> toBlueprintObjects() {
    if (objects == null) return [];

    return objects!.map((object) {
      if (object.type == metaSpotType) {
        final matchingSpot = spots?.firstWhere((spot) => spot.id == object.spot);
        return BlueprintObjectModel(
          id: object.spot,
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
          id: object.spot, // Use object spot ID or null
          title: object.title, // Use object title
          stateEnum: SeatState.black, // "table" type always results in black state
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
    this.configuration,
    this.objects,
    this.spots,
    this.groups,
  });
}
