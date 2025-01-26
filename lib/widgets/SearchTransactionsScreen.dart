
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataModelsEshop/TransactionModel.dart';
import 'package:fstapp/dataServicesEshop/DbEshop.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';

class SearchTransactionsScreen extends StatefulWidget {
  final int paymentInfoId;
  final int bankAccount;

  SearchTransactionsScreen({
    Key? key,
    required this.paymentInfoId,
    required this.bankAccount,
  }) : super(key: key);

  @override
  _SearchTransactionsScreenState createState() => _SearchTransactionsScreenState();
}

class _SearchTransactionsScreenState extends State<SearchTransactionsScreen> {
  List<TransactionModel> _availableTransactions = [];
  List<TransactionModel> _filteredTransactions = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _fetchAvailableTransactions();
  }

  Future<void> _fetchAvailableTransactions() async {
    setState(() {
      _isLoading = true;
    });

    final transactions = await DbEshop.getTransactionsWithSameBankAccountAndNullPaymentInfo(widget.paymentInfoId);

    if (transactions != null) {
      setState(() {
        _availableTransactions = transactions;
        _filteredTransactions = transactions;
        _isLoading = false;
      });
    } else {
      setState(() {
        _availableTransactions = [];
        _filteredTransactions = [];
        _isLoading = false;
      });
    }
  }

  void _filterTransactions(String query) {
    List<TransactionModel> filtered = _availableTransactions.where((transaction) {
      // You can adjust the filter criteria based on your requirements
      return transaction.messageForRecipient?.toLowerCase().contains(query.toLowerCase()) ?? false ||
          (transaction.counterAccount?.toLowerCase().contains(query.toLowerCase()) ?? false) ||
          (transaction.vs?.toLowerCase().contains(query.toLowerCase()) ?? false);
    }).toList();

    setState(() {
      _filteredTransactions = filtered;
    });
  }

  void _selectTransaction(TransactionModel transaction) async {
    await DbEshop.addTransactionToPaymentInfoWithSecurity(
      context,
      transaction.id!,
      widget.paymentInfoId,
    );

    // Show success message
    ToastHelper.Show(context, "Transaction added successfully.".tr());

    // Close the search screen and indicate that a transaction was added
    Navigator.of(context).pop(true);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Search Transactions".tr()),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              decoration: InputDecoration(
                labelText: "Search".tr(),
                prefixIcon: Icon(Icons.search),
                border: OutlineInputBorder(),
              ),
              onChanged: _filterTransactions,
            ),
          ),
          Expanded(
            child: _isLoading
                ? Center(child: CircularProgressIndicator())
                : _filteredTransactions.isEmpty
                ? Center(child: Text("No transactions found.".tr()))
                : ListView.builder(
              itemCount: _filteredTransactions.length,
              itemBuilder: (context, index) {
                final transaction = _filteredTransactions[index];
                final counterAccountName = transaction.counterAccountName ?? transaction.performedBy;

                return Card(
                  margin: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                  child: ListTile(
                    title: Text(
                      '${Utilities.formatPrice(
                        context,
                        transaction.amount!,
                        currencyCode: transaction.currency!,
                        decimalDigits: 2,
                      )} - ${transaction.counterAccount}',
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          '${'Date'.tr()}: ${DateFormat.yMMMd(context.locale.languageCode).format(transaction.date!)}',
                        ),
                        Text(
                          '${'Message for Recipient'.tr()}: ${transaction.messageForRecipient ?? "N/A".tr()}',
                        ),
                      ],
                    ),
                    trailing: ElevatedButton(
                      onPressed: () => _selectTransaction(transaction),
                      child: Text("Add".tr()),
                    ),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
