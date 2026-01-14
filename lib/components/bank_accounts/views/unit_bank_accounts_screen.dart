import 'package:flutter/material.dart';
import 'package:fstapp/components/bank_accounts/bank_account_model.dart';
import 'package:fstapp/components/bank_accounts/db_bank_accounts.dart';
import 'package:fstapp/components/bank_accounts/views/bank_account_settings_screen.dart';
import 'package:fstapp/components/bank_accounts/bank_account_strings.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/_shared/drag_handle_dots.dart';
import 'package:fstapp/services/toast_helper.dart';

class UnitBankAccountsScreen extends StatefulWidget {
  final int unitId;

  const UnitBankAccountsScreen({super.key, required this.unitId});

  @override
  State<UnitBankAccountsScreen> createState() => _UnitBankAccountsScreenState();
}

class _UnitBankAccountsScreenState extends State<UnitBankAccountsScreen> {
  List<BankAccountModel> _accounts = [];
  bool _isLoading = true;

  String _getTypeName(String type) {
    if (type == 'General') return BankAccountStrings.typeGeneral;
    return BankAccountStrings.typeFio;
  }

  @override
  void initState() {
    super.initState();
    _loadAccounts();
  }

  void _showError(String message) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Error'),
        content: SelectableText(message),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('OK'),
          ),
        ],
      ),
    );
  }

  Future<void> _loadAccounts() async {
    try {
      final accounts = await DbBankAccounts.getBankAccountsForUnit(widget.unitId);
      setState(() {
        _accounts = accounts;
        _isLoading = false;
      });
    } catch (e) {
      if (mounted) {
        setState(() => _isLoading = false);
        _showError('Error loading accounts: $e');
      }
    }
  }

  Future<void> _addOrEditAccount([BankAccountModel? account]) async {
    // If we have an account, check if we have admin rights to edit it?
    // User said: "Others can only see it". So allow opening, but pass readOnly flag.
    bool readOnly = false;
    if (account != null) {
      readOnly = !account.isAdmin;
    }

    if (account == null) {
      // Creation/Link Flow
      // Ask user: Create New OR Link Existing?
      // First, fetch existing accounts to see if there are any to link.
      setState(() => _isLoading = true);
      List<BankAccountModel> myAccounts = [];
      try {
        myAccounts = await DbBankAccounts.getMyAdminBankAccounts();
        // Filter out accounts already linked to this unit
        final currentIds = _accounts.map((a) => a.id).toSet();
        myAccounts = myAccounts.where((a) => !currentIds.contains(a.id)).toList();
      } catch (e) {
        // failed to fetch? minor enough to ignore or log
        // print(e);
      } finally {
        if (mounted) setState(() => _isLoading = false);
      }

      BankAccountModel? selectedAccount;
      bool createNew = true;

      // Always ask user: Create New OR Link Existing?
      final choice = await showDialog<String>(
        context: context,
        builder: (context) => SimpleDialog(
          title: Text(BankAccountStrings.addBankAccount),
          children: [
            SimpleDialogOption(
              onPressed: () => Navigator.pop(context, 'new'),
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(BankAccountStrings.createNewAccount),
              ),
            ),
            SimpleDialogOption(
              onPressed: () => Navigator.pop(context, 'link'),
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(BankAccountStrings.linkExistingAccount),
              ),
            ),
          ],
        ),
      );
      
      if (choice == null) return;
      createNew = choice == 'new';

      if (!createNew && myAccounts.isEmpty) {
         ToastHelper.Show(context, "No existing admin accounts found to link."); // Consider adding to Strings if strict
         return;
      }

      if (!createNew) {
        // Show selection dialog
        selectedAccount = await showDialog<BankAccountModel>(
          context: context,
          builder: (context) => SimpleDialog(
            title: Text(BankAccountStrings.selectAccount),
            children: myAccounts.map((a) => SimpleDialogOption(
              onPressed: () => Navigator.pop(context, a),
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(a.title ?? BankAccountStrings.untitled, style: const TextStyle(fontWeight: FontWeight.bold)),
                    Text(
                      '${a.accountNumber?.replaceAll('\n', '')} (${a.type == 'General' ? BankAccountStrings.typeGeneral : BankAccountStrings.typeFio})',
                      style: Theme.of(context).textTheme.bodySmall,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                    if (a.linkedUnits.isNotEmpty)
                      Text(
                        '${BankAccountStrings.usedIn}: ${() {
                          const int limit = 3;
                          if (a.linkedUnits.length <= limit) {
                            return a.linkedUnits.join(", ");
                          }
                          return "${a.linkedUnits.take(limit).join(", ")} (+${a.linkedUnits.length - limit})";
                        }()}',
                        style: Theme.of(context).textTheme.bodySmall?.copyWith(fontStyle: FontStyle.italic),
                        maxLines: 3,
                        overflow: TextOverflow.ellipsis,
                      ),
                  ],
                ),
              ),
            )).toList(),
          ),
        );
        if (selectedAccount == null) return;
      } else {
         // Create New Dialog
        selectedAccount = await showDialog<BankAccountModel>(
          context: context,
          builder: (context) => BankAccountSettingsScreen(
            unitId: widget.unitId,
            account: BankAccountModel(id: 0, type: 'FIO', supportedCurrencies: []),
            isDialog: true,
          ),
        );
      }

      if (selectedAccount != null) {
        setState(() => _isLoading = true);
        try {
          // If new, create it first
          int bankAccountId = selectedAccount.id;
          if (createNew) {
             // If we came from the dialog, it's already saved.
             // But if we came from 'Link Existing', selectedAccount has the ID.
             // If we created new, BankAccountSettingsScreen returned the SAVED account with ID.
             bankAccountId = selectedAccount.id;
          }
          
          // Link it
          int priority = _accounts.isEmpty ? 0 : _accounts.last.priority + 1;
          await DbBankAccounts.linkBankAccountToUnit(widget.unitId, bankAccountId, priority);
          
          await _loadAccounts(); // Reload
          
           // If we created a new one, we are already done (Settings Screen handled it).
           // If we linked an existing one, we might want to navigate to settings?
           // User instructions: "Link Existing -> Select -> Dialog -> Success".
           // Current flow: Link -> Select -> Link in DB -> Reload.
           // Maybe open settings if they want to edit immediately? 
           // The original code opened settings for NEW accounts. 
           // For LINKED accounts, we didn't open settings.
           // Since Settings Screen is ALREADY used for creation, we don't need to open it again.

        } catch (e) {
          if (mounted) {
             _showError('${BankAccountStrings.errorSaving}: $e');
          }
        } finally {
          if (mounted) setState(() => _isLoading = false);
        }
      }
    } else {
      // Edit/View Flow
      await showDialog(
        context: context,
        builder: (context) => BankAccountSettingsScreen(
          unitId: widget.unitId,
          account: account,
          readOnly: readOnly,
          isDialog: true,
        ),
      );
      _loadAccounts(); // Reload on return
    }
  }

  Future<void> _deleteAccount(BankAccountModel account) async {
    final confirm = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(BankAccountStrings.deleteAccountTitle),
        content: Text(BankAccountStrings.removeAccountConfirmation),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context, false), child: Text(BankAccountStrings.cancel)),
          TextButton(
            style: TextButton.styleFrom(foregroundColor: Theme.of(context).colorScheme.error),
            onPressed: () => Navigator.pop(context, true), 
            child: Text(CommonStrings.delete)
          ),        ],
      ),
    );

    if (confirm == true) {
      setState(() => _isLoading = true);
      try {
        await DbBankAccounts.linkBankAccountToUnit(widget.unitId, account.id, null);
        await _loadAccounts();
      } catch (e) {
        if (mounted) {
          setState(() => _isLoading = false);
          _showError('Error removing account: $e');
        }
      }
    }
  }

  Future<void> _onReorder(int oldIndex, int newIndex) async {
    if (oldIndex < newIndex) {
      newIndex -= 1;
    }
    final item = _accounts.removeAt(oldIndex);
    _accounts.insert(newIndex, item);
    setState(() {}); // Update UI immediately

    // Update priorities in DB
    try {
      for (int i = 0; i < _accounts.length; i++) {
        await DbBankAccounts.linkBankAccountToUnit(widget.unitId, _accounts[i].id, i);
      }
    } catch (e) {
        _showError('Error saving order: $e');
        _loadAccounts(); // Revert on error
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(BankAccountStrings.bankAccountsTitle),
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 800),
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(16.0),
                      child: Text(
                        BankAccountStrings.description,
                        style: Theme.of(context).textTheme.bodyMedium,
                        textAlign: TextAlign.center,
                      ),
                    ),
                    Expanded(
                      child: ReorderableListView.builder(
                        buildDefaultDragHandles: false,
                        itemCount: _accounts.length,
                        onReorder: _onReorder,
                        itemBuilder: (context, index) {
                          final account = _accounts[index];
                          bool canEdit = account.isAdmin;
                          return ListTile(
                            key: ValueKey(account.id),
                            title: Text(account.title ?? BankAccountStrings.untitled),
                            subtitle: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                if (account.accountNumber != null) 
                                  Text(account.accountNumberHumanReadable ?? account.accountNumber!),
                                if (account.supportedCurrencies.isNotEmpty)
                                  Padding(
                                    padding: const EdgeInsets.only(top: 4.0),
                                    child: () {
                                      // Pre-calculate logic inside map callback? No, inefficient.
                                      // Better to access precomputed map from parent scope?
                                      // Since this is inside itemBuilder, we can access state variables.
                                      // BUT we need to compute it.
                                      
                                      // Let's compute it once per build or just here efficiently.
                                      // Actually, we can just do it on the fly:
                                      // Is this the first account in the list to have this currency?
                                      // Since the list is sorted by priority (index), 
                                      // we can check if any *previous* account has this currency.
                                    
                                      return Wrap(
                                        spacing: 4,
                                        runSpacing: 4,
                                        children: account.supportedCurrencies.map((c) {
                                          // Check if any higher priority (lower index) account has this currency
                                          bool isPrimary = true;
                                          for (int i = 0; i < index; i++) {
                                            if (_accounts[i].supportedCurrencies.contains(c)) {
                                              isPrimary = false;
                                              break;
                                            }
                                          }

                                          return Tooltip(
                                            message: isPrimary ? BankAccountStrings.primaryAccountFor(c) : BankAccountStrings.backupAccountFor(c),
                                            child: Container(
                                              padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                                              decoration: BoxDecoration(
                                                color: isPrimary ? Colors.green.shade100 : Colors.grey.shade200,
                                                borderRadius: BorderRadius.circular(4),
                                                border: Border.all(
                                                  color: isPrimary ? Colors.green.shade400 : Colors.grey.shade400
                                                ),
                                              ),
                                              child: Row(
                                                mainAxisSize: MainAxisSize.min,
                                                children: [
                                                  Text(c, style: TextStyle(
                                                    fontSize: 10, 
                                                    fontWeight: FontWeight.bold,
                                                    color: isPrimary ? Colors.green.shade900 : Colors.black87
                                                  )),
                                                  if (isPrimary) ...[
                                                    const SizedBox(width: 4),
                                                    Icon(Icons.star, size: 10, color: Colors.green.shade800),
                                                  ]
                                                ],
                                              ),
                                            ),
                                          );
                                        }).toList(),
                                      );
                                    }(),
                                  ),
                              ],
                            ),
                            trailing: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                IconButton(
                                  icon: Icon(canEdit ? Icons.edit : Icons.visibility),
                                  onPressed: () => _addOrEditAccount(account),
                                ),
                                  IconButton(
                                    icon: const Icon(Icons.delete),
                                    onPressed: () => _deleteAccount(account),
                                  ),
                                if (canEdit)
                                  ReorderableDragStartListener(
                                    index: index,
                                    child: const DragHandleDots(),
                                  ),
                              ],
                            ),
                          );
                        },
                      ),
                    ),
                  ],
                ),
              ),
            ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _addOrEditAccount(),
        child: const Icon(Icons.add),
      ),
    );
  }
}

