import 'package:fstapp/components/seatReservation/model/BoxModel.dart';
import 'package:fstapp/components/seatReservation/utils/SeatState.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'BlueprintConfiguration.dart';
import 'BlueprintObject.dart';

class BlueprintModel {
  static const String metaSpots = "spots";

  int? id;
  DateTime? createdAt;
  Map<String, dynamic>? data;
  String? title;
  int? organization;
  BlueprintConfiguration? configuration;
  List<BlueprintObject>? objects;
  List<BlueprintObject>? spots;

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
          ? List<BlueprintObject>.from(
          json[TbEshop.blueprints.objects].map((obj) => BlueprintObject.fromJson(obj)))
          : null,
      spots: json[metaSpots] != null
          ? List<BlueprintObject>.from(
          json[metaSpots].map((spot) => BlueprintObject.fromJson(spot)))
          : null,
    );
  }

  Map<String, dynamic> toJson() => {
    TbEshop.blueprints.id: id,
    TbEshop.blueprints.created_at: createdAt?.toIso8601String(),
    TbEshop.blueprints.data: data,
    TbEshop.blueprints.title: title,
    TbEshop.blueprints.organization: organization,
    TbEshop.blueprints.configuration: configuration?.toJson(),
    TbEshop.blueprints.objects: objects?.map((obj) => obj.toJson()).toList(),
    metaSpots: spots?.map((spot) => spot.toJson()).toList(),
  };

  String toBasicString() => title ?? id.toString();

  List<BoxModel> toBoxModels() {
    if (objects == null) return [];

    return objects!.map((object) {
      if (object.type == "spot") {
        // Find the matching spot in the spots list
        final matchingSpot = spots?.firstWhere(
              (spot) => spot.id == object.spot,
        );
        return BoxModel(
          id: object.spot, // Use object spot ID
          name: matchingSpot?.title ?? object.title, // Spot title or object title
          type: BoxModel.States.entries
              .firstWhere(
                  (entry) => entry.value == matchingSpot?.state,
              orElse: () => MapEntry(SeatState.available, BoxModel.availableType)).key, // Map state from spot
          x: object.x,
          y: object.y,
        );
      } else if (object.type == "table") {
        return BoxModel(
          id: object.spot, // Use object spot ID or null
          name: object.title, // Use object title
          type: SeatState.black, // "table" type always results in black state
          x: object.x,
          y: object.y,
        );
      }
      // If the object type is neither "spot" nor "table", skip it
      return null;
    }).whereType<BoxModel>().toList(); // Filter out null values
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
  });
}
