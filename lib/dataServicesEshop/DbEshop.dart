import 'package:collection/collection.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModels/FormResponseModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
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
import 'package:fstapp/dataModelsEshop/TransactionModel.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbEshop {
  static final _supabaseEshop = Supabase.instance.client.schema("eshop");
  static final _supabase = Supabase.instance.client;

  /// Fetches transactions based on a form link using a Supabase Function.
  static Future<FunctionResponse> fetchTransactions(String formLink) async {
    return await _supabase.functions.invoke("fetch-transactions", body: {"formLink": formLink});
  }

  static Future<String> getReportForOccasion(String link) async {
    final response = await _supabase
        .rpc('get_report_for_occasion_with_security', params: {'form_link': link});

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
