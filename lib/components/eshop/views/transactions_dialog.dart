import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/eshop/models/payment_info_model.dart';
import 'package:fstapp/components/eshop/models/transaction_model.dart';
import 'package:fstapp/components/eshop/orders_strings.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/eshop/db_eshop.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/components/eshop/views/search_transactions_screen.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/bank_accounts/bank_account_strings.dart';
import 'add_cash_payment_dialog.dart';

class TransactionsDialog extends StatefulWidget {
  final int orderId;
  final int? unitId;

  const TransactionsDialog({
    super.key,
    required this.orderId,
    this.unitId,
  });

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

  /// Shows the dialog to add a cash payment directly.
  void _addCashPayment() async {
    final result = await showDialog(
      context: context,
      builder: (context) => AddCashPaymentDialog(
        unitId: widget.unitId ?? RightsService.currentUnit()!.id!,
        currency: _payment!.currencyCode!,
        variableSymbol: _payment!.variableSymbol?.toString() ?? "",
        paymentInfoId: _payment!.id!,
      ),
    );

    if (result == true) {
      _fetchTransactions();
    }
  }

  // NOTE: I am assuming _addTransaction is called via search. The user wants to add CASH.
  // Wait, I need to check where AddCashPaymentDialog is actually instantiated.
  // It is instantiated in `SearchTransactionsScreen` OR `TransactionsDialog`?
  // Let me check SearchTransactionsScreen. 
  // Ah, the user flow is `Add Payment` -> `Cash`.
  // I need to find where `AddCashPaymentDialog` is used.
  // Based on my view_file of `TransactionsDialog.dart` earlier, there is NO usage of `AddCashPaymentDialog`.
  // It must be in `SearchTransactionsScreen`!
  // I must check `SearchTransactionsScreen.dart`.

  /// Removes a transaction after user confirmation.
  void _removeTransaction(TransactionModel transaction) async {
    final isManual = transaction.transactionType == 'manual';
    final confirmMessage = isManual 
        ? OrdersStrings.deleteCashTransactionConfirmation 
        : OrdersStrings.unlinkTransactionConfirmation;
        
    final confirm = await DialogHelper.showConfirmationDialog(
      context,
      OrdersStrings.confirmRemoval,
      confirmMessage,
    );

    // If user confirmed, proceed to remove the transaction
    if (confirm == true) {
      if (isManual) {
        await DbEshop.deleteManualTransactionWithSecurity(
          context,
          transaction.id!,
          _payment!.id!,
        );
      } else {
        await DbEshop.removeTransactionFromPaymentInfoWithSecurity(
          context,
          transaction.id!,
          _payment!.id!,
        );
      }
      ToastHelper.Show(
        context,
        OrdersStrings.removeTransactionSuccess(transaction.toBasicString()),
      );
      _fetchTransactions();
    }
  }

  /// Checks if the current user is a bank admin for the given bank account.
  bool _isBankAdmin() {
    if (_payment == null || _payment!.bankAccount == null) {
      return false;
    }
    return RightsService.bankAccountAdmin()?.any((i) => _payment!.bankAccount == i) ?? false;
  }

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
              OrdersStrings.transactionsForOrder(widget.orderId.toString()),
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
          ),
          IconButton(
            icon: Icon(Icons.close),
            onPressed: () {
              Navigator.of(context).pop();
            },
            tooltip: CommonStrings.close,
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
                    "${OrdersStrings.variableSymbol}: ",
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
                          OrdersStrings.amount,
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
                          OrdersStrings.paid,
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
                          OrdersStrings.returned,
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
          if (_transactions.isEmpty)
            Text(OrdersStrings.noTransactionsFound)
          else
            Flexible(
              child: ConstrainedBox(
                constraints: BoxConstraints(maxHeight: dialogHeight),
                child: SizedBox(
                  width: StylesConfig.formMaxWidth,
                  child: ListView.builder(
                    shrinkWrap: true,
                    itemCount: _transactions.length,
                    itemBuilder: (context, index) {
                      final transaction = _transactions[index];
                      final counterAccountName =
                          transaction.counterAccountName ??
                              transaction.performedBy ??
                              "N/A".tr();

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
                                          mainAxisAlignment:
                                          MainAxisAlignment.spaceBetween,
                                          children: [
                                            // Amount
                                            SelectableText(
                                              Utilities.formatPrice(
                                                context,
                                                transaction.amount!,
                                                currencyCode:
                                                transaction.currency ?? "N/A",
                                                decimalDigits: 2,
                                              ),
                                              style: TextStyle(
                                                fontWeight: FontWeight.bold,
                                                fontSize: 16,
                                              ),
                                            ),
                                            // Counter Account Name or Cash Indicator
                                            if (transaction.transactionType == 'manual')
                                              Row(
                                                children: [
                                                  Icon(Icons.payments, size: 18, color: Colors.grey[700]),
                                                  SizedBox(width: 8),
                                                  Text(
                                                    OrdersStrings.transactionTypeCash,
                                                    style: TextStyle(
                                                      fontWeight: FontWeight.bold,
                                                      fontSize: 15,
                                                    ),
                                                  ),
                                                ],
                                              )
                                            else if (counterAccountName.isNotEmpty)
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
                                      tooltip: OrdersStrings.removeTransactionTooltip,
                                      onPressed: () =>
                                          _removeTransaction(transaction),
                                    ),
                                ],
                              ),

                              // Additional transaction details
                              // Date
                              _buildInfoRow(
                                title: OrdersStrings.date,
                                value: transaction.date != null
                                    ? DateFormat.yMMMd(
                                    context.locale.languageCode)
                                    .format(transaction.date!)
                                    : "N/A".tr(),
                              ),
                              SizedBox(height: 5),

                              // Amount and Currency
                              _buildInfoRow(
                                title: OrdersStrings.amount,
                                value: transaction.amount != null
                                    ? Utilities.formatPrice(
                                  context,
                                  transaction.amount!,
                                  currencyCode:
                                  transaction.currency ?? "N/A",
                                  decimalDigits: 2,
                                )
                                    : "N/A".tr(),
                              ),
                              SizedBox(height: 5),

                              // Bank Account
                              if (transaction.transactionType != 'manual') ...[
                                _buildInfoRow(
                                  title: BankAccountStrings.bankAccount,
                                  value:
                                  '${transaction.counterAccount ?? "N/A".tr()} / ${transaction.bankCode ?? "N/A".tr()} (${transaction.bankName ?? "N/A".tr()})',
                                ),
                                SizedBox(height: 5),
                              ],

                              // Variable Symbol (Hide if manual or empty)
                              if (transaction.transactionType != 'manual' && 
                                  transaction.vs != null &&
                                  transaction.vs!.isNotEmpty)
                                _buildInfoRow(
                                  title: OrdersStrings.variableSymbol,
                                  value: transaction.vs!,
                                ),
                              if (transaction.transactionType != 'manual' && 
                                  transaction.vs != null &&
                                  transaction.vs!.isNotEmpty)
                                SizedBox(height: 5),

                              // Comment (Note)
                              if (transaction.transactionType == 'manual' &&
                                  transaction.comment != null &&
                                  transaction.comment!.isNotEmpty)
                                _buildInfoRow(
                                  title: CommonStrings.note,
                                  value: transaction.comment!,
                                ),
                              
                              // Message for Recipient (Backwards compatibility)
                              if (transaction.messageForRecipient != null &&
                                  transaction.messageForRecipient!.isNotEmpty)
                                _buildInfoRow(
                                    title: OrdersStrings.messageForRecipient,
                                    value: transaction.messageForRecipient!,
                                  ),

                                // Created By (for manual transactions)

                                if (transaction.transactionType == 'manual' && transaction.createdByName != null)
                                  _buildInfoRow(
                                    title: OrdersStrings.acceptedBy,
                                    value: transaction.createdByName!,
                                  ),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ),
            ),

          // trimmed spacer so button sits up higher
          SizedBox(height: 8),
            Wrap(
              alignment: WrapAlignment.center,
              spacing: 10,
              runSpacing: 10,
              children: [
                ElevatedButton(
                  onPressed: _addTransaction,
                  style: ElevatedButton.styleFrom(
                    padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                  ),
                  child: Text(OrdersStrings.findAndLinkTransaction),
                ),
                ElevatedButton(
                  onPressed: _addCashPayment,
                  style: ElevatedButton.styleFrom(
                    padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                  ),
                  child: Text(OrdersStrings.addCashPaymentTitle),
                ),
              ],
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
