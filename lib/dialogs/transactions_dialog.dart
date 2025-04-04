import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_models_eshop/payment_info_model.dart';
import 'package:fstapp/data_models_eshop/transaction_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services_eshop/db_eshop.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/utilities.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/search_transactions_screen.dart';
import 'package:intl/intl.dart';

class TransactionsDialog extends StatefulWidget {
  final int orderId;

  TransactionsDialog({
    Key? key,
    required this.orderId,
  }) : super(key: key);

  @override
  _TransactionsDialogState createState() => _TransactionsDialogState();
}

class _TransactionsDialogState extends State<TransactionsDialog> {
  List<TransactionModel> _transactions = [];
  PaymentInfoModel? _payment;
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _fetchTransactions();
  }

  /// Fetches transactions associated with the current order.
  Future<void> _fetchTransactions() async {
    setState(() {
      _isLoading = true;
    });

    final transactionObject = await DbEshop.getTransactionsForOrder(widget.orderId);
    if (transactionObject != null) {
      // Sort transactions by date in descending order
      transactionObject.transactions.sort((a, b) => b.date!.compareTo(a.date!));
      setState(() {
        _transactions = transactionObject.transactions;
        _payment = transactionObject.paymentInfo;
        _isLoading = false;
      });
    } else {
      setState(() {
        _isLoading = false;
      });
    }
  }

  /// Navigates to the search screen to add a new transaction.
  void _addTransaction() async {

    // Navigate to the SearchTransactionsScreen and wait for a result
    final result = await Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) => SearchTransactionsScreen(
          paymentInfoId: _payment!.id!,
          bankAccount: _payment!.bankAccount!,
        ),
      ),
    );

    // If a transaction was added, refresh the transactions list
    if (result == true) {
      _fetchTransactions();
    }
  }

  /// Removes a transaction after user confirmation.
  void _removeTransaction(TransactionModel transaction) async {
    final confirm = await DialogHelper.showConfirmationDialogAsync(
      context,
      "Confirm removal".tr(),
      "Are you sure you want to unlink this transaction?".tr(),
    );

    // If user confirmed, proceed to remove the transaction
    if (confirm == true) {
      await DbEshop.removeTransactionFromPaymentInfoWithSecurity(
        context,
        transaction.id!,
        _payment!.id!,
      );
      ToastHelper.Show(
        context,
        "Removed {item}.".tr(namedArgs: {"item": transaction.toBasicString()}),
      );
      _fetchTransactions();
    }
  }

  /// Checks if the current user is a bank admin for the given bank account.
  bool _isBankAdmin() {
    if (_payment == null || _payment!.bankAccount == null) {
      return false;
    }
    return RightsService.bankAccountAdmin?.any((i) => _payment!.bankAccount == i) ?? false;
  }

  @override
  @override
  Widget build(BuildContext context) {
    // Calculate dialog height based on screen size, but set a maximum height to ensure it fits on phone screens
    final dialogHeight = MediaQuery.of(context).size.height * 0.6;

    return AlertDialog(
      title: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Expanded(
            child: Text(
              "Transactions for order {order}.".tr(namedArgs: {"order": widget.orderId.toString()}),
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
          ),
          IconButton(
            icon: Icon(Icons.close),
            onPressed: () {
              Navigator.of(context).pop();
            },
            tooltip: "Close".tr(),
          ),
        ],
      ),
      content: _isLoading
          ? SizedBox(
        height: 100,
        child: Center(child: CircularProgressIndicator()),
      )
          : Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // **Variable Symbol Section**
          if (_payment != null && _payment!.variableSymbol != null)
            Padding(
              padding: const EdgeInsets.only(bottom: 10.0),
              child: Row(
                children: [
                  Text(
                    "${"Variable symbol".tr()}: ",
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 14,
                    ),
                  ),
                  Expanded(
                    child: SelectableText(
                      _payment!.variableSymbol!.toString(),
                      style: TextStyle(
                        fontSize: 14,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          // **Overview Section**
          if (_payment != null)
            Card(
              margin: EdgeInsets.only(bottom: 10),
              elevation: 2, // Consistent shadow elevation
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(8),
              ),
              child: Padding(
                padding: const EdgeInsets.all(12.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    // Amount
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "Amount".tr(),
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 14,
                          ),
                        ),
                        SizedBox(height: 4),
                        SelectableText(
                          _payment!.amount != null
                              ? Utilities.formatPrice(
                            context,
                            _payment!.amount!,
                            currencyCode: _payment!.currencyCode ?? "N/A",
                            decimalDigits: 2,
                          )
                              : "N/A".tr(),
                          style: TextStyle(
                            fontSize: 14,
                          ),
                        ),
                      ],
                    ),
                    // Paid
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "Paid".tr(),
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 14,
                          ),
                        ),
                        SizedBox(height: 4),
                        SelectableText(
                          _payment!.paid != null
                              ? Utilities.formatPrice(
                            context,
                            _payment!.paid!,
                            currencyCode: _payment!.currencyCode ?? "N/A",
                            decimalDigits: 2,
                          )
                              : "N/A".tr(),
                          style: TextStyle(
                            fontSize: 14,
                          ),
                        ),
                      ],
                    ),
                    // Returned
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "Returned".tr(),
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 14,
                          ),
                        ),
                        SizedBox(height: 4),
                        SelectableText(
                          _payment!.returned != null
                              ? Utilities.formatPrice(
                            context,
                            _payment!.returned!,
                            currencyCode: _payment!.currencyCode ?? "N/A",
                            decimalDigits: 2,
                          )
                              : "N/A".tr(),
                          style: TextStyle(
                            fontSize: 14,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),

          // Transactions List
          _transactions.isEmpty
              ? Text("No transactions found.".tr())
              : SizedBox(
            width: StylesConfig.formMaxWidth,
            height: dialogHeight,
            child: ListView.builder(
              shrinkWrap: true,
              itemCount: _transactions.length,
              itemBuilder: (context, index) {
                final transaction = _transactions[index];
                final counterAccountName =
                    transaction.counterAccountName ?? transaction.performedBy ?? "N/A".tr();

                return Card(
                  margin: EdgeInsets.symmetric(vertical: 5),
                  elevation: 2, // Consistent shadow elevation
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(12.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        // Row containing transaction details and the delete icon
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            // Expanded Column for transaction details
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  // Amount and Counter Account Name
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                    children: [
                                      // Amount
                                      SelectableText(
                                        Utilities.formatPrice(
                                          context,
                                          transaction.amount!,
                                          currencyCode: transaction.currency ?? "N/A",
                                          decimalDigits: 2,
                                        ),
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                        ),
                                      ),
                                      // Counter Account Name
                                      if (counterAccountName.isNotEmpty)
                                        SelectableText(
                                          counterAccountName,
                                          style: TextStyle(
                                            fontStyle: FontStyle.italic,
                                            color: ThemeConfig.grey600(context),
                                            fontSize: 14,
                                          ),
                                        ),
                                    ],
                                  ),
                                  SizedBox(height: 6),
                                ],
                              ),
                            ),
                            // Delete Icon (conditionally shown)
                            if (_isBankAdmin())
                              IconButton(
                                icon: Icon(Icons.delete),
                                tooltip: "Remove".tr(),
                                onPressed: () => _removeTransaction(transaction),
                              ),
                          ],
                        ),

                        // Additional transaction details
                        // Date
                        _buildInfoRow(
                          title: 'Date'.tr(),
                          value: transaction.date != null
                              ? DateFormat.yMMMd(context.locale.languageCode).format(transaction.date!)
                              : "N/A".tr(),
                        ),
                        SizedBox(height: 5),

                        // Amount and Currency
                        _buildInfoRow(
                          title: 'Amount'.tr(),
                          value: transaction.amount != null
                              ? Utilities.formatPrice(
                            context,
                            transaction.amount!,
                            currencyCode: transaction.currency ?? "N/A",
                            decimalDigits: 2,
                          )
                              : "N/A".tr(),
                        ),
                        SizedBox(height: 5),

                        // Bank Account formatted as account/bankcode (bank name)
                        _buildInfoRow(
                          title: 'Bank Account'.tr(),
                          value:
                          '${transaction.counterAccount ?? "N/A".tr()} / ${transaction.bankCode ?? "N/A".tr()} (${transaction.bankName ?? "N/A".tr()})',
                        ),
                        SizedBox(height: 5),

                        // Variable Symbol
                        if (transaction.vs != null && transaction.vs!.isNotEmpty)
                          _buildInfoRow(
                            title: 'Variable symbol'.tr(),
                            value: transaction.vs!,
                          ),
                        if (transaction.vs != null && transaction.vs!.isNotEmpty)
                          SizedBox(height: 5),

                        // Message for Recipient
                        if (transaction.messageForRecipient != null &&
                            transaction.messageForRecipient!.isNotEmpty)
                          _buildInfoRow(
                            title: 'Message for Recipient'.tr(),
                            value: transaction.messageForRecipient!,
                          ),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),
          SizedBox(height: 20),
          if (_isBankAdmin())
            ElevatedButton(
              onPressed: _addTransaction,
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
              child: Text("Find and link a transaction".tr()),
            ),
        ],
      ),
      // Removed the 'actions' section as the close button is now in the title
    );
  }

  /// Helper method to build a row with a title and value, visually differentiating them.
  /// If [isBold] is true, the title will be bold.
  Widget _buildInfoRow({
    required String title,
    required String value,
    bool isBold = false,
  }) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Title
        Expanded(
          flex: 3,
          child: Text(
            '$title:',
            style: TextStyle(
              fontWeight: isBold ? FontWeight.bold : FontWeight.normal,
            ),
          ),
        ),
        // Value
        Expanded(
          flex: 5,
          child: SelectableText(value),
        ),
      ],
    );
  }
}
