import 'package:fstapp/components/blueprint/blueprint_group.dart';
import 'package:fstapp/components/blueprint/blueprint_helper.dart';
import 'package:fstapp/data_models_eshop/order_model.dart';
import 'package:fstapp/data_models_eshop/order_product_ticket_model.dart';
import 'package:fstapp/data_models_eshop/product_model.dart';
import 'package:fstapp/data_models_eshop/tb_eshop.dart';
import 'package:fstapp/data_models_eshop/ticket_model.dart';
import 'blueprint_configuration.dart';
import 'blueprint_object_model.dart';

class BlueprintModel {
  static const String metaSpots = "spots";
  static const String metaProducts = "products";
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
  String? backgroundSvg;
  List<ProductModel>? products;
  List<TicketModel>? tickets;
  List<OrderModel>? orders;
  List<OrderProductTicketModel>? orderProductTickets;

  factory BlueprintModel.fromJson(Map<String, dynamic> json) {
    final List<BlueprintGroupModel> groups = BlueprintHelper.parseGroups(json);
    final List<BlueprintObjectModel>? rawObjects = BlueprintHelper.parseObjects(json);
    final List<BlueprintObjectModel>? spots = BlueprintHelper.parseSpots(json);
    final List<ProductModel>? products = BlueprintHelper.parseProducts(json);
    final List<TicketModel>? tickets = BlueprintHelper.parseTickets(json);
    final List<OrderModel>? orders = BlueprintHelper.parseOrders(json);
    final List<OrderProductTicketModel>? orderProductTickets = BlueprintHelper.parseOrderProductTickets(json);

    final List<BlueprintObjectModel>? enrichedObjects = BlueprintHelper.enrichObjects(rawObjects, spots, products);

    BlueprintHelper.assignObjectsToGroups(enrichedObjects, groups);

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
      objects: enrichedObjects??[],
      groups: groups,
      backgroundSvg: json[TbEshop.blueprints.background_svg],
      products: products,
      tickets: tickets,
      orders: orders,
      orderProductTickets: orderProductTickets,
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
    TbEshop.blueprints.background_svg: backgroundSvg,
    TbEshop.products.table: products,
    TbEshop.tickets.table: tickets,
    TbEshop.orders.table: orders,
    TbEshop.order_product_ticket.table: orderProductTickets,
  };

  String toBasicString() => title ?? id.toString();

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
    this.backgroundSvg,
    this.products,
    this.tickets,
    this.orders,
    this.orderProductTickets,
  });

  void assignAllSpotsWithBlueprint() {
    for (var o in objects ?? []) {
      o.blueprint = this;
    }
  }

  int getFirstAvailableGroupId() {
    int id = 1;
    while (groups?.any((group) => group.id == id) ?? false) {
      id++;
    }
    return id;
  }
}