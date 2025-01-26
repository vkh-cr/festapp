import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:intl/intl.dart';
import 'package:fstapp/dataModelsEshop/TransactionModel.dart';
import 'package:fstapp/dataServicesEshop/DbEshop.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';

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
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _fetchTransactions();
  }

  Future<void> _fetchTransactions() async {
    final transactions = await DbEshop.getTransactionsForOrder(widget.orderId);
    if (transactions != null) {
      // Sort transactions by date in descending order
      transactions.sort((a, b) => b.date!.compareTo(a.date!));
      setState(() {
        _transactions = transactions;
        _isLoading = false;
      });
    } else {
      setState(() {
        _isLoading = false;
      });
    }
  }

  void _addTransaction() {
    // Implementation for adding a transaction will follow
    // You can navigate to another screen or show another dialog to add a transaction
  }

  @override
  Widget build(BuildContext context) {
    // Calculate dialog height based on screen size, but set a maximum height to ensure it fits on phone screens
    final dialogHeight = MediaQuery.of(context).size.height * 0.5;

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
                    transaction.counterAccountName ?? transaction.performedBy;

                return Card(
                  margin: EdgeInsets.symmetric(vertical: 5),
                  child: Padding(
                    padding: const EdgeInsets.all(10.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        // Counter Account Name or Performed By (Top)
                        if (counterAccountName != null && counterAccountName.isNotEmpty)
                          _buildInfoRow(
                            title: 'Account Name'.tr(),
                            value: counterAccountName,
                            isBold: true,
                          ),

                        if (counterAccountName != null && counterAccountName.isNotEmpty)
                          SizedBox(height: 5),

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
                            currencyCode: transaction.currency!,
                            decimalDigits: 2,
                          )
                              : "N/A".tr(),
                        ),
                        SizedBox(height: 5),

                        // Counter Account / Bank Code and Bank Name
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
          // ElevatedButton(
          //   onPressed: _addTransaction,
          //   child: Text("Add Transaction".tr()),
          // ),
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
          child: Text(value),
        ),
      ],
    );
  }
}
