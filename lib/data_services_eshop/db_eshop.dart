import 'package:collection/collection.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/data_models_eshop/payment_info_model.dart';
import 'package:fstapp/data_models_eshop/product_model.dart';
import 'package:fstapp/data_models_eshop/product_type_model.dart';
import 'package:fstapp/data_models_eshop/transaction_model.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbEshop {
  static final _supabase = Supabase.instance.client;

  /// Fetches transactions based on a form link using a Supabase Function.
  static Future<FunctionResponse> fetchTransactions(String formLink) async {
    return await _supabase.functions.invoke("fetch-transactions", body: {"formLink": formLink});
  }

  static Future<String> getReportForOccasion(String link) async {
    final response = await _supabase
        .rpc('get_report_for_occasion_ws', params: {'form_link': link});

    if(response["code"] == 200){
      return response["data"];
    }
    return "";
  }

  /// Retrieves all transactions associated with a specific order ID.
  static Future<GetTransactionsForOrderResponse?> getTransactionsForOrder(int orderId) async {
    final response = await _supabase.rpc(
      'get_transactions_for_order',
      params: {'order_id': orderId},
    );

    if (response != null) {
      return GetTransactionsForOrderResponse.fromJson(response);
    }

    return null;
  }

  /// Retrieves all transactions that have the same bank account as the order's payment_info
  /// and have a NULL payment_info field.
  static Future<List<TransactionModel>?> getTransactionsForOrderAllAvailable(int paymentInfoId) async {
    final response = await _supabase.rpc(
      'get_transactions_for_order_all_available',
      params: {'payment_info_id': paymentInfoId},
    );

    if (response != null) {
      return List<TransactionModel>.from(response.map((x) => TransactionModel.fromJson(x)));
    }

    return null;

  }

  /// Adds a transaction to payment_info with security checks using RPC.
  static Future<void> addTransactionToPaymentInfoWithSecurity(BuildContext context,
      int transactionId, int paymentInfoId) async {
    try{
      final response = await _supabase.rpc(
        'add_transaction_to_payment_info_ws',
        params: {
          'p_transaction_id': transactionId,
          'p_payment_info_id': paymentInfoId,
        },
      );
    }catch(e){
      ToastHelper.Show(context, e.toString());
      rethrow;
    }
  }

  /// Removes a transaction from payment_info with security checks using RPC.
  static Future<void> removeTransactionFromPaymentInfoWithSecurity(
      BuildContext context, int transactionId, int paymentInfoId) async {
    try {
      final response = await _supabase.rpc(
        'remove_transaction_from_payment_info_ws',
        params: {
          'p_transaction_id': transactionId,
          'p_payment_info_id': paymentInfoId,
        },
      );
    } catch (e) {
      ToastHelper.Show(context, e.toString());
      rethrow;
    }
  }

  static Future<List<ProductModel>?> getProductsForTicketAllAvailable(int ticketId) async {
    final result = await _supabase
        .rpc('get_products_for_ticket_all_available', params: {'ticket_id': ticketId});
    if (result != null && result['code'] == 200) {
      return (result['data'] as List)
          .map((e) => ProductModel.fromJson(e as Map<String, dynamic>))
          .toList();
    } else {
      return [];
    }
  }

  static Future<List<ProductModel>?> getProductsForTicket(int ticketId) async {
    final result = await _supabase
        .rpc('get_products_for_ticket', params: {'ticket_id': ticketId});
    if (result != null && result['code'] == 200) {
      return (result['data'] as List? ?? [])
          .map((e) => ProductModel.fromJson(e as Map<String, dynamic>))
          .toList();
    } else {
      return [];
    }
  }

  static Future<bool> updateProductsForOrder(int ticketId, List<int> list) async {
    final result = await _supabase.rpc(
      'update_ticket_products_ws',
      params: {'p_ticket_id': ticketId, 'p_product_ids': list},
    );
    if (result != null && result['code'] == 200) {
      return true;
    }
    return false;
  }

  static Future<List<ProductModel>> getProductsAndTypesForOccasion(String formLink) async {
    final response = await _supabase.rpc(
      'get_products_and_types_for_occasion',
      params: {'form_link': formLink},
    );
    if (response != null) {
      final typesJson = (response['product_types'] as List<dynamic>?) ?? [];
      final productsJson = (response['products'] as List<dynamic>?) ?? [];

      final types = typesJson
          .map((t) => ProductTypeModel.fromJson(t as Map<String, dynamic>))
          .toList();
      final products = productsJson
          .map((p) => ProductModel.fromJson(p as Map<String, dynamic>))
          .toList();

      for (var product in products) {
        product.productType = types.firstWhereOrNull(
              (t) => t.id == product.productTypeId,
        );
      }

      products.sort((a, b) {
        final aType = a.productTypeId ?? 0;
        final bType = b.productTypeId ?? 0;
        if (aType != bType) return aType.compareTo(bType);
        final aOrder = a.order ?? 0;
        final bOrder = b.order ?? 0;
        return aOrder.compareTo(bOrder);
      });

      return products;
    }
    return [];
  }

  /// Updates a product via RPC.
  static Future<bool> updateProduct(ProductModel product) async {
    final response = await _supabase.rpc(
      'update_product',
      params: {'p_input': product},
    );
    return response != null && response['code'] == 200;
  }

  static Future<void> deleteProduct(int productId) async {
    await _supabase.rpc(
      'delete_product',
      params: {'p_product_id': productId},
    );
  }

}

class GetTransactionsForOrderResponse {
  final PaymentInfoModel? paymentInfo;
  final List<TransactionModel> transactions;

  GetTransactionsForOrderResponse({
    required this.paymentInfo,
    required this.transactions,
  });

  factory GetTransactionsForOrderResponse.fromJson(Map<String, dynamic> json) {
    return GetTransactionsForOrderResponse(
      paymentInfo: json['payment_info'] != null
          ? PaymentInfoModel.fromJson(json['payment_info'])
          : null,
      transactions: json['transactions'] != null
          ? List<TransactionModel>.from(
          json['transactions'].map((x) => TransactionModel.fromJson(x)))
          : [],
    );
  }
}
