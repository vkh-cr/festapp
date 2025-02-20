import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataModelsEshop/TransactionModel.dart';
import 'package:fstapp/dataServicesEshop/DbEshop.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:intl/intl.dart';
import 'dart:async';

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
  Timer? _debounce;

  @override
  void initState() {
    super.initState();
    _fetchAvailableTransactions();
  }

  @override
  void dispose() {
    _debounce?.cancel();
    super.dispose();
  }

  /// Fetches available transactions that match the bank account and have no payment info.
  Future<void> _fetchAvailableTransactions() async {
    setState(() {
      _isLoading = true;
    });

    final transactions = await DbEshop.getTransactionsForOrderAllAvailable(widget.paymentInfoId);

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

  /// Filters transactions based on the search query.
  void _filterTransactions(String query) {
    // Debounce to prevent excessive filtering
    if (_debounce?.isActive ?? false) _debounce!.cancel();
    _debounce = Timer(const Duration(milliseconds: 300), () {
      List<TransactionModel> filtered = _availableTransactions.where((transaction) {
        bool matches = false;

        // Normalize query for case-insensitive comparison
        String normalizedQuery = query.toLowerCase();

        // Check messageForRecipient
        if (transaction.messageForRecipient != null &&
            transaction.messageForRecipient!.toLowerCase().contains(normalizedQuery)) {
          matches = true;
        }

        // Check counterAccount
        if (transaction.counterAccount != null &&
            transaction.counterAccount!.toLowerCase().contains(normalizedQuery)) {
          matches = true;
        }

        // Check variable symbol (vs)
        if (transaction.vs != null && transaction.vs!.toLowerCase().contains(normalizedQuery)) {
          matches = true;
        }

        // Check counterAccountName
        if (transaction.counterAccountName != null &&
            transaction.counterAccountName!.toLowerCase().contains(normalizedQuery)) {
          matches = true;
        }

        // Check amount
        double? queryAmount = double.tryParse(query);
        if (queryAmount != null) {
          // Compare amounts with a small epsilon to account for floating point precision
          const double epsilon = 0.01;
          if ((transaction.amount! - queryAmount).abs() < epsilon) {
            matches = true;
          }
        }

        return matches;
      }).toList();

      setState(() {
        _filteredTransactions = filtered;
      });
    });
  }

  /// Handles the selection of a transaction to add it to the payment info.
  void _selectTransaction(TransactionModel transaction) async {
    // Optional: Add a confirmation dialog to prevent accidental additions
    final confirm = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: Text("Confirm Add".tr()),
        content: Text("Are you sure you want to add this transaction?".tr()),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(false),
            child: Text("Storno".tr()),
          ),
          ElevatedButton(
            onPressed: () => Navigator.of(context).pop(true),
            child: Text("Add".tr()),
          ),
        ],
      ),
    );

    if (confirm != true) return;
    await DbEshop.addTransactionToPaymentInfoWithSecurity(
      context,
      transaction.id!,
      widget.paymentInfoId,
    );

    // Show success message
    ToastHelper.Show(context, "Transaction added successfully.".tr());
    Navigator.of(context).pop(true);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Search Transactions".tr()),
        centerTitle: true,
      ),
      body: Column(
        children: [
          // Search Bar
          Padding(
            padding: const EdgeInsets.all(12.0),
            child: TextField(
              decoration: InputDecoration(
                labelText: "Search".tr(),
                hintText: "Search by message, account, symbol, name, or amount".tr(),
                prefixIcon: Icon(Icons.search),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
              onChanged: _filterTransactions,
            ),
          ),
          // Transaction List
          Expanded(
            child: _isLoading
                ? Center(child: CircularProgressIndicator())
                : _filteredTransactions.isEmpty
                ? Center(child: Text("No transactions found.".tr()))
                : ListView.builder(
              itemCount: _filteredTransactions.length,
              itemBuilder: (context, index) {
                final transaction = _filteredTransactions[index];
                final counterAccountName = transaction.counterAccountName ?? transaction.performedBy ?? "N/A".tr();

                return Card(
                  margin: EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                  elevation: 1, // Reduced elevation for a subtler shadow
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(12.0),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        // Transaction Details
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
                                      currencyCode: transaction.currency!,
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
                              // Date
                              SelectableText(
                                '${'Date'.tr()}: ${DateFormat.yMMMd(context.locale.languageCode).format(transaction.date!)}',
                                style: TextStyle(fontSize: 14),
                              ),
                              SizedBox(height: 4),
                              // Bank Account
                              SelectableText(
                                '${'Bank Account'.tr()}: ${transaction.counterAccount ?? "N/A".tr()} / ${transaction.bankCode ?? "N/A".tr()} (${transaction.bankName ?? "N/A".tr()})',
                                style: TextStyle(fontSize: 14),
                              ),
                              SizedBox(height: 4),
                              // Variable Symbol (if available)
                              if (transaction.vs != null && transaction.vs!.isNotEmpty)
                                SelectableText(
                                  '${'Variable symbol'.tr()}: ${transaction.vs!}',
                                  style: TextStyle(fontSize: 14),
                                ),
                              // Message for Recipient (if available)
                              if (transaction.messageForRecipient != null && transaction.messageForRecipient!.isNotEmpty)
                                SelectableText(
                                  '${'Message for Recipient'.tr()}: ${transaction.messageForRecipient!}',
                                  style: TextStyle(fontSize: 14),
                                ),
                            ],
                          ),
                        ),
                        // Add Button
                        SizedBox(width: 10),
                        ElevatedButton(
                          onPressed: () => _selectTransaction(transaction),
                          style: ElevatedButton.styleFrom(
                            padding: EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(8),
                            ),
                          ),
                          child: Text(
                            "Add".tr(),
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ],
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
