import 'package:fstapp/components/seatReservation/utils/SeatState.dart';
import 'package:fstapp/dataModelsEshop/BlueprintGroup.dart';
import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'BlueprintConfiguration.dart';
import 'BlueprintObjectModel.dart';
import 'package:collection/collection.dart';

class BlueprintModel {
  static const String metaSpots = "spots";
  static const String metaProducts = "products";
  static const String metaDefaultProduct = "default_product";
  static const String metaTableAreaType = "table";
  static const String metaSpotType = "spot";

  int? id;
  DateTime? createdAt;
  Map<String, dynamic>? data;
  String? title;
  int? organization;
  int? occasion;
  ProductModel? defaultProduct;
  BlueprintConfiguration? configuration;
  List<BlueprintObjectModel>? objects;
  List<BlueprintObjectModel>? spots;
  List<BlueprintGroupModel>? groups;
  String? backgroundSvg;

  factory BlueprintModel.fromJson(Map<String, dynamic> json) {
    final List<BlueprintGroupModel> groups = _parseGroups(json);
    final List<BlueprintObjectModel>? rawObjects = _parseObjects(json);
    final List<BlueprintObjectModel>? spots = _parseSpots(json);
    final List<ProductModel>? products = _parseProducts(json);
    final List<BlueprintObjectModel>? enrichedObjects = _enrichObjects(rawObjects, spots, products);

    _assignObjectsToGroups(enrichedObjects, groups);

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
      objects: enrichedObjects,
      groups: groups,
      backgroundSvg: json[TbEshop.blueprints.background_svg],
    );
  }

  // Helper Methods
  static List<BlueprintGroupModel> _parseGroups(Map<String, dynamic> json) {
    return json[TbEshop.blueprints.groups] != null
        ? List<BlueprintGroupModel>.from(
        json[TbEshop.blueprints.groups].map((g) => BlueprintGroupModel.fromJson(g)))
        : [];
  }

  static List<BlueprintObjectModel>? _parseObjects(Map<String, dynamic> json) {
    return json[TbEshop.blueprints.objects] != null
        ? List<BlueprintObjectModel>.from(
        json[TbEshop.blueprints.objects].map((obj) => BlueprintObjectModel.fromJson(obj)))
        : null;
  }

  static List<BlueprintObjectModel>? _parseSpots(Map<String, dynamic> json) {
    return json[BlueprintModel.metaSpots] != null
        ? List<BlueprintObjectModel>.from(
        json[BlueprintModel.metaSpots].map((spot) => BlueprintObjectModel.fromJson(spot)))
        : null;
  }

  static List<ProductModel>? _parseProducts(Map<String, dynamic> json) {
    return json[BlueprintModel.metaProducts] != null
        ? List<ProductModel>.from(
        json[BlueprintModel.metaProducts].map((spot) => ProductModel.fromJson(spot)))
        : null;
  }

  static List<BlueprintObjectModel>? _enrichObjects(
      List<BlueprintObjectModel>? rawObjects,
      List<BlueprintObjectModel>? spots,
      List<ProductModel>? products) {
    if (rawObjects == null) return null;

    return rawObjects.map((object) {
      if (object.type == metaSpotType) {
        final matchingSpot = spots?.firstWhereOrNull((spot) => spot.id == object.id);
        return BlueprintObjectModel(
          id: object.id,
          type: object.type,
          spotProduct: matchingSpot?.spotProduct,
          product: products?.firstWhereOrNull((p) => p.id == matchingSpot?.spotProduct),
          groupId: object.groupId,
          title: matchingSpot?.title ?? object.title,
          stateEnum: BlueprintObjectModel.States.entries
              .firstWhereOrNull((entry) => entry.value == matchingSpot?.state)
              ?.key ??
              SeatState.available,
          x: object.x,
          y: object.y,
        );
      } else if (object.type == metaTableAreaType) {
        return BlueprintObjectModel(
          id: object.id,
          type: object.type,
          title: object.title,
          stateEnum: SeatState.black,
          x: object.x,
          y: object.y,
        );
      }
      return null; // Skip unrecognized object types
    }).whereType<BlueprintObjectModel>().toList(); // Filter out null values
  }

  static void _assignObjectsToGroups(
      List<BlueprintObjectModel>? objects, List<BlueprintGroupModel>? groups) {
    if (objects != null) {
      for (var obj in objects) {
        if (obj.groupId != null) {
          final group = groups?.firstWhereOrNull((g) => g.id == obj.groupId);
          obj.group = group;
          if (group != null) {
            group.objects.add(obj);
          }
        }
      }
    }
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
    TbEshop.blueprints.background_svg: backgroundSvg, // Include background SVG
  };

  String toBasicString() => title ?? id.toString();

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
    this.backgroundSvg, // Add to constructor
  });

  int getFirstAvailableGroupId() {
    int id = 1;
    while (groups?.any((group) => group.id == id) ?? false) {
      id++;
    }
    return id;
  }
}
