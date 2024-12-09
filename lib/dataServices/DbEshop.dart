import 'package:collection/collection.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModelsEshop/BlueprintGroup.dart';
import 'package:fstapp/dataModelsEshop/BlueprintHelper.dart';
import 'package:fstapp/dataModelsEshop/BlueprintModel.dart';
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'package:fstapp/dataModelsEshop/OrderModel.dart';
import 'package:fstapp/dataModelsEshop/OrderProductTicketModel.dart';
import 'package:fstapp/dataModelsEshop/PaymentInfoModel.dart';
import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/dataModelsEshop/ProductTypeModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataModelsEshop/TicketModel.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbEshop {
  static final _supabaseEshop = Supabase.instance.client.schema("eshop");
  static final _supabase = Supabase.instance.client;

  static Future<List<ProductTypeModel>> getProducts(BuildContext context, int currentOccasion) async {
    var data = await _supabaseEshop
        .from(TbEshop.product_types.table)
        .select(
        "${TbEshop.product_types.id},"
        "${TbEshop.product_types.type},"
        "${TbEshop.product_types.title},"
        "${TbEshop.products.table}(${TbEshop.products.id},${TbEshop.products.title},${TbEshop.products.price})"
        )
        .eq(TbEshop.product_types.occasion, currentOccasion)
        .eq("${TbEshop.products.table}.${TbEshop.products.is_hidden}", false);

    var infoList = List<ProductTypeModel>.from(
        data.map((x) {
          var toReturn = ProductTypeModel.fromJson(x);
          toReturn.products = toReturn.products?.sortedBy((i) => i.title ?? "");
          toReturn.products = toReturn.products?.sortedBy<num>((i) => i.price ?? 0);
          for (ProductModel v in toReturn.products??[]){
            v.title = v.price != null && v.price! > 0 ? "${v.title} (${Utilities.formatPrice(context, v.price!)})" : v.title;
          }
          return toReturn;
        }));

    return infoList;
  }

  static Future<FunctionResponse> sendTicketOrder(Map<String, dynamic> data) async {
    return await _supabase.functions.invoke("send-ticket-order", body: {"orderDetails": data});
  }

  static Future<FormModel?> getForm(String formKey) async {
    final response = await _supabase
        .rpc('get_form', params: {'form_key': formKey});

    if(response["code"] == 200){
      var form = FormModel.fromJson(response["data"]);
      return form;
    }
    return null;
  }

  static Future<FormModel?> getFormForEdit(String formKey) async {
    var data = await _supabase
        .from(Tb.forms.table)
        .select()
        .eq(Tb.forms.key, formKey)
        .maybeSingle();
    if(data==null)
    {
      return null;
    }
    return FormModel.fromJson(data);
  }

  static Future<void> updateForm(FormModel form) async {
    var upsertObj = form.toEditedJson();
    if(form.id!=null) {
      await _supabase.from(Tb.forms.table).update(upsertObj).eq(Tb.forms.id, form.id!);
    }
    else {
      upsertObj.remove(Tb.forms.id);
      upsertObj.addAll({Tb.forms.occasion: RightsService.currentOccasion!});
      await _supabase.from(Tb.forms.table).insert(upsertObj);
    }
  }

  static Future<BlueprintModel?> getBlueprint(String mySecret, String formKey, int blueprintId) async {
    final response = await _supabase.rpc(
      'get_blueprint',
      params: {
        'my_secret': mySecret,
        'form_key': formKey,
        'blueprint_id': blueprintId,
      },
    );

    if (response["code"] != 200) {
      return null;
    }

    var b = BlueprintModel.fromJson(response["data"]);
    b.assignAllSpotsWithBlueprint();
    return b;
  }

  static Future<BlueprintModel?> getBlueprintForEdit(String formKey) async {

    final response = await _supabase.rpc(
      'get_blueprint_editor',
      params: {
        'form_key': formKey,
      },
    );

    if (response["code"] != 200) {
      return null;
    }

    var b = BlueprintModel.fromJson(response["data"]);
    b.assignAllSpotsWithBlueprint();
    return b;
  }

  static Future<bool> updateBlueprint(context, BlueprintModel blueprint) async {
    final response = await _supabase.rpc(
      'update_blueprint',
      params: {
        'input_data': blueprint,
      },
    );

    var code = response["code"];
    if (code != 200) {
      ToastHelper.Show(context, code.toString(), severity: ToastSeverity.NotOk);
      return false;
    }

    return true;
  }

  static Future<bool> selectSpot(context, String formKey, String secret, int spotId, bool selecting) async {
    final response = await _supabase.rpc(
      'select_spot',
      params: {
        'form_key': formKey,
        'secret_id': secret,
        'spot_id': spotId,
        'selecting': selecting,
      },
    );

    var code = response["code"];
    var message = response["message"];

    if (code != 200) {
      ToastHelper.Show(context, message.toString(), severity: ToastSeverity.NotOk);
      return false;
    }
    return true;
  }

  static Future<List<OrderModel>> getAllOrders(String formKey) async {

    final response = await _supabase.rpc(
      'get_orders',
      params: {
        'form_key': formKey,
      },
    );

    if (response["code"] != 200) {
      return [];
    }
    var json = response["data"];

    final List<BlueprintObjectModel>? spots = BlueprintHelper.parseSpots(json);
    final List<ProductModel>? products = BlueprintHelper.parseProducts(json);
    final List<TicketModel>? tickets = BlueprintHelper.parseTickets(json);
    final List<OrderModel>? orders = BlueprintHelper.parseOrders(json);
    final List<PaymentInfoModel>? payments = BlueprintHelper.parsePaymentInfo(json);
    final List<OrderProductTicketModel>? orderProductTickets = BlueprintHelper.parseOrderProductTickets(json);

    for (var order in orders!) {
      // Attach tickets related to the order via orderProductTickets
      final List<TicketModel> relatedTickets = tickets!.where((ticket) {
        return orderProductTickets!.any((opt) => opt.orderId == order.id && opt.ticketId == ticket.id);
      }).toList();
      order.relatedTickets = relatedTickets;

      for (var ticket in order.relatedTickets!) {
        // Relate spots to the ticket via orderProductTickets
        ticket.relatedSpots = spots!.where((spot) {
          return orderProductTickets!.any((opt) => opt.ticketId == ticket.id && opt.id == spot.orderProductTicket);
        }).toList();

        // Relate products to the ticket via orderProductTickets
        ticket.relatedProducts = products!.where((product) {
          return orderProductTickets!.any((opt) => opt.ticketId == ticket.id && opt.productId == product.id);
        }).toList();

        // Relate order to the ticket via orderProductTickets
        ticket.relatedOrder = orders!.firstWhereOrNull((order) {
          return orderProductTickets!.any((opt) => opt.ticketId == ticket.id && opt.orderId == order.id);
        });
      }


      // Attach spots related to the tickets
      final List<BlueprintObjectModel> relatedSpots = spots!.where((spot) {
        return relatedTickets.any((ticket) => ticket.id == spot.orderProductTicket);
      }).toList();

      // Attach products related to the tickets
      final List<ProductModel> relatedProducts = products!.where((product) {
        return relatedTickets.any((ticket) => ticket.id == product.id);
      }).toList();

      // Attach payment info
      final PaymentInfoModel? relatedPaymentInfo =
      payments!.firstWhereOrNull((payment) => payment.id == order.paymentInfo);

      // Update the order object
      order.relatedSpots = relatedSpots;
      order.relatedProducts = relatedProducts;
      order.paymentInfoModel = relatedPaymentInfo;
    }

    return orders;
  }

  static Future<void> deleteOrder(OrderModel model) async {

  }

}
