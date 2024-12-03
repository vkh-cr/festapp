import 'package:fstapp/components/seatReservation/utils/SeatState.dart';
import 'package:fstapp/dataModelsEshop/BlueprintGroup.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'BlueprintConfiguration.dart';
import 'BlueprintObjectModel.dart';
import 'package:collection/collection.dart';

class BlueprintModel {
  static const String metaSpots = "spots";
  static const String metaDefaultProduct = "default_product";
  static const String metaTableAreaType = "table";
  static const String metaSpotType = "spot";

  int? id;
  DateTime? createdAt;
  Map<String, dynamic>? data;
  String? title;
  int? organization;
  int? occasion;
  int? defaultProduct;
  BlueprintConfiguration? configuration;
  List<BlueprintObjectModel>? objects;
  List<BlueprintObjectModel>? spots;
  List<BlueprintGroupModel>? groups;

  factory BlueprintModel.fromJson(Map<String, dynamic> json) {
    List<BlueprintGroupModel>? groups = json[TbEshop.blueprints.groups] != null
        ? List<BlueprintGroupModel>.from(
        json[TbEshop.blueprints.groups].map((g) => BlueprintGroupModel.fromJson(g)))
        : [];

    List<BlueprintObjectModel>? objects = json[TbEshop.blueprints.objects] != null
        ? List<BlueprintObjectModel>.from(
        json[TbEshop.blueprints.objects].map((obj) => BlueprintObjectModel.fromJson(obj)))
        : null;

    // Assign objects to groups
    if (objects != null) {
      for (var obj in objects) {
        if (obj.groupId != null) {
          final group = groups.firstWhereOrNull((g) => g.id == obj.groupId);
          if (group != null) {
            group.objects.add(obj);
          }
        }
      }
    }

    return BlueprintModel(
      id: json[TbEshop.blueprints.id],
      createdAt: json[TbEshop.blueprints.created_at] != null
          ? DateTime.parse(json[TbEshop.blueprints.created_at])
          : null,
      data: json[TbEshop.blueprints.data],
      title: json[TbEshop.blueprints.title],
      organization: json[TbEshop.blueprints.organization],
      occasion: json[TbEshop.blueprints.occasion],
      defaultProduct: json[BlueprintModel.metaDefaultProduct],
      configuration: json[TbEshop.blueprints.configuration] != null
          ? BlueprintConfiguration.fromJson(json[TbEshop.blueprints.configuration])
          : null,
      objects: objects,
      spots: json[BlueprintModel.metaSpots] != null
          ? List<BlueprintObjectModel>.from(
          json[BlueprintModel.metaSpots].map((spot) => BlueprintObjectModel.fromJson(spot)))
          : null,
      groups: groups,
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
          product: matchingSpot?.product,
          title: matchingSpot?.title ?? object.title,
          stateEnum: BlueprintObjectModel.States.entries
              .firstWhereOrNull(
                  (entry) => entry.value == matchingSpot?.state)?.key??SeatState.available,
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
    this.defaultProduct,
    this.configuration,
    this.objects,
    this.spots,
    this.groups,
  });

  int getFirstAvailableGroupId() {
    int id = 1;
    while (groups?.any((group) => group.id == id)??false) {
      id++;
    }
    return id;
  }
}
