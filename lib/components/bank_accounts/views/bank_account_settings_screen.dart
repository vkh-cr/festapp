// ignore_for_file: deprecated_member_use

import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/bank_accounts/bank_account_model.dart';
import 'package:fstapp/components/bank_accounts/db_bank_accounts.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/bank_accounts/bank_account_strings.dart';
import 'package:fstapp/components/users/db_users.dart';
import 'package:fstapp/services/dialog_helper.dart';

import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/services/time_helper.dart';

class BankAccountSettingsScreen extends StatefulWidget {
  final int unitId;
  final BankAccountModel account;
  final bool readOnly;

  final bool isDialog;

  const BankAccountSettingsScreen({
    super.key,
    required this.unitId,
    required this.account,
    this.readOnly = false,
    this.isDialog = false,
  });

  @override
  State<BankAccountSettingsScreen> createState() => _BankAccountSettingsScreenState();
}

class _BankAccountSettingsScreenState extends State<BankAccountSettingsScreen> with TickerProviderStateMixin {
  late TabController _tabController;
  late TextEditingController _titleController;
  late TextEditingController _numberController;
  late TextEditingController _humanReadableController;
  late TextEditingController _tokenController;
  late TextEditingController _priorityController;
  DateTime? _validUntil;
  
  late BankAccountModel _account;
  String _selectedType = 'FIO';
  List<String> _supportedCurrencies = [];
  List<BankAccountUser> _users = [];
  bool _isLoadingUsers = false;
  bool _isSaving = false;
  bool _isTokenTokenVisible = false;

  final _formKey = GlobalKey<FormState>();

  @override
  void initState() {
    super.initState();
    _account = widget.account;
    _selectedType = _account.type;
    _titleController = TextEditingController(text: _account.title);
    _numberController = TextEditingController(text: _account.accountNumber);
    _humanReadableController = TextEditingController(text: _account.accountNumberHumanReadable);
    _priorityController = TextEditingController(text: _account.priority.toString());
    _supportedCurrencies = List.from(_account.supportedCurrencies);
    _tokenController = TextEditingController(); 
    _validUntil = _account.tokenValidUntil;
    
    _numberController.addListener(_updateHumanReadable);
    _updateHumanReadable(); // Initial check if empty but number exists
    
    _initTabController();
    
    _loadUsers();
    
    if (_supportedCurrencies.isEmpty) {
      _supportedCurrencies.add('CZK');
    }
  }

  void _updateHumanReadable() {
    final iban = _numberController.text.trim();
    if (iban.isEmpty) {
       if (_humanReadableController.text.isNotEmpty) {
         _humanReadableController.clear();
       }
       return;
    }

    if (iban.toUpperCase().startsWith('CZ') && iban.length == 24) {
       try {
         final bankCode = iban.substring(4, 8);
         String prefix = iban.substring(8, 14);
         String number = iban.substring(14, 24);
         
         prefix = int.parse(prefix).toString();
         number = int.parse(number).toString();
         
         String generated;
         if (prefix == '0') {
           generated = '$number/$bankCode';
         } else {
           generated = '$prefix-$number/$bankCode';
         }

         if (_humanReadableController.text != generated) {
           _humanReadableController.text = generated;
         }
       } catch (e) {
         // Invalid format, ignore
       }
    }
  }

  void _initTabController() {
    _tabController = TabController(length: _selectedType == 'FIO' ? 3 : 2, vsync: this);
  }

  Future<void> _loadUsers() async {
    setState(() => _isLoadingUsers = true);
    try {
      final users = await DbBankAccounts.getBankAccountUsers(_account.id, unitId: widget.unitId);
      if (mounted) {
        setState(() {
          _users = users;
          _isLoadingUsers = false;
        });
      }
    } catch (e) {
      if (mounted) setState(() => _isLoadingUsers = false);
      debugPrint("Error loading users: $e");
    }
  }

  void _showError(String message) {
    if (!mounted) return;
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

  Future<void> _saveGeneralInfo() async {
    if (!_formKey.currentState!.validate()) return;
    setState(() => _isSaving = true);
    try {
      final updatedAccount = BankAccountModel(
        id: _account.id,
        title: _titleController.text,
        accountNumber: _numberController.text.trim(),
        priority: int.tryParse(_priorityController.text) ?? _account.priority,
        type: _selectedType,
        isAdmin: _account.isAdmin,
        supportedCurrencies: _supportedCurrencies,
        accountNumberHumanReadable: _humanReadableController.text.isEmpty ? null : _humanReadableController.text,
        tokenMasked: _account.tokenMasked, // Preserve masking state
        lastFetchTime: _account.lastFetchTime,
        tokenValidUntil: _account.tokenValidUntil
      );
      final newId = await DbBankAccounts.updateBankAccount(updatedAccount, unitId: widget.unitId);
      final savedAccount = updatedAccount.copyWith(id: newId);
      
      if (!mounted) return;
      ToastHelper.Show(context, BankAccountStrings.save);
      
      setState(() {
        _account = savedAccount;
      });
      
      if (_account.type != _selectedType) {
         setState(() {
           // Re-init tabs if type changed
           _tabController.dispose();
           _initTabController();
         });
      }
      if (widget.isDialog) {
        if (mounted) Navigator.pop(context, savedAccount);
      }
    } catch (e) {
      if (e.toString().contains("ACCOUNT_NUMBER_EXISTS")) {
        if (mounted) _showError(BankAccountStrings.accountNumberExists);
      } else {
        if (mounted) _showError("${BankAccountStrings.errorSaving}: $e");
      }
    } finally {
      if (mounted) setState(() => _isSaving = false);
    }
  }

  Future<void> _saveToken() async {
    setState(() => _isSaving = true);
    try {
      await DbBankAccounts.updateBankAccountToken(_account.id, _tokenController.text, _validUntil);
      if (!mounted) return;
      
      // Update local masking to reflect change immediately
      final newToken = _tokenController.text;
      if (newToken.isNotEmpty) {
        final mask = "************${newToken.length >= 4 ? newToken.substring(newToken.length - 4) : newToken}";
         setState(() {
          _account = _account.copyWith(tokenMasked: mask);
        });
      }
      
      ToastHelper.Show(context, BankAccountStrings.tokenUpdated);
      _tokenController.clear();
    } catch (e) {
      if (mounted) _showError("${BankAccountStrings.errorSavingToken}: $e");
    } finally {
      if (mounted) setState(() => _isSaving = false);
    }
  }

  Future<void> _addUser() async {
    // 1. Fetch potential users (Unit users)
    setState(() => _isLoadingUsers = true);
    try {
      final allUnitUsers = await DbUsers.getAllUsersBasicsForUnit(widget.unitId);
      
      // 2. Filter out already added users
      final currentIds = _users.map((u) => u.userId).toSet();
      final availableUsers = allUnitUsers.where((u) => !currentIds.contains(u.id)).toList();
      
      if (mounted) setState(() => _isLoadingUsers = false);

      if (availableUsers.isEmpty) {
        if (mounted) ToastHelper.Show(context, BankAccountStrings.noMoreUsersToAdd);
        return;
      }

      // 3. Show selection dialog
      if (!mounted) return;
      DialogHelper.chooseUser(context, (chosenUser) async {
         if (chosenUser.id == null || chosenUser.email == null) {
           _showError(BankAccountStrings.errorUpdatingUser);
           return;
         }
         
         // 4. Show Role Selection Dialog
         bool isAdmin = true;
         bool isSupport = false;
         
         await showDialog(
          context: context,
          builder: (context) => StatefulBuilder(
            builder: (context, setState) => AlertDialog(
              title: Text('${BankAccountStrings.addUser}: ${chosenUser.name ?? chosenUser.email}'),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                   Padding(
                    padding: const EdgeInsets.symmetric(vertical: 8.0),
                    child: Text(
                      BankAccountStrings.addUserExplanation,
                      style: const TextStyle(fontSize: 14, color: Colors.grey),
                    ),
                  ),
                  CheckboxListTile(
                    title: Text(BankAccountStrings.isAdminLabel),
                    value: isAdmin,
                    onChanged: (v) => setState(() => isAdmin = v!),
                  ),
                  if (AppConfig.showBankSupportRole)
                    CheckboxListTile(
                      title: Text(BankAccountStrings.isSupportLabel),
                      value: isSupport,
                      onChanged: (v) => setState(() => isSupport = v!),
                    ),
                   if (isAdmin)
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text(
                        BankAccountStrings.adminInfoText,
                        style: const TextStyle(fontSize: 14, color: Colors.grey),
                      ),
                    ),
                ],
              ),
              actions: [
                TextButton(onPressed: () => Navigator.pop(context), child: Text(BankAccountStrings.cancel)),
                ElevatedButton(
                  onPressed: () async {
                     Navigator.pop(context);
                     await _performUpdateUser(chosenUser.email!, isAdmin, isSupport);
                  },
                  child: Text(BankAccountStrings.add),
                ),
              ],
            ),
          ),
        );

      }, availableUsers, BankAccountStrings.add);

    } catch (e) {
      if (mounted) setState(() => _isLoadingUsers = false);
      _showError("Error loading users: $e");
    }
  }

  Future<void> _editUser(BankAccountUser user) async {
    bool isAdmin = user.isAdmin;
    bool isSupport = user.isSupport;

    await showDialog(
      context: context,
      builder: (context) => StatefulBuilder(
        builder: (context, setState) => AlertDialog(
          title: Text('${BankAccountStrings.editRole}: ${user.name ?? user.email}'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
               CheckboxListTile(
                title: Text(BankAccountStrings.isAdminLabel),
                value: isAdmin,
                onChanged: (v) => setState(() => isAdmin = v!),
              ),

              // CheckboxListTile(
              //   title: Text(BankAccountStrings.isSupportLabel),
              //   value: isSupport,
              //   onChanged: (v) => setState(() => isSupport = v!),
              // ),
              if (isAdmin)
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    BankAccountStrings.checkAdminInfo,
                    style: const TextStyle(fontSize: 14, color: Colors.grey),
                  ),
                ),
            ],
          ),
           actions: [
            TextButton(onPressed: () => Navigator.pop(context), child: Text(BankAccountStrings.cancel)),
            ElevatedButton(
              onPressed: () async {
                 Navigator.pop(context);
                 if (user.email != null) {
                    _performUpdateUser(user.email!, isAdmin, isSupport);
                 }
              },
              child: Text(BankAccountStrings.save),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _performUpdateUser(String email, bool isAdmin, bool isSupport) async {
    setState(() => _isLoadingUsers = true);
    try {
      await DbBankAccounts.updateBankAccountUser(_account.id, email, isAdmin, isSupport);
      await _loadUsers();
    } catch (e) {
      _showError("${BankAccountStrings.errorUpdatingUser}: $e");
      if (mounted) setState(() => _isLoadingUsers = false);
    }
  }

  Future<void> _removeUser(BankAccountUser user) async {
    setState(() => _isLoadingUsers = true);
    try {
      if (user.email == null) {
         _showError("${BankAccountStrings.errorRemovingUser}: Email missing");
         setState(() => _isLoadingUsers = false);
         return;
      }
      await DbBankAccounts.removeBankAccountUser(_account.id, user.email!);
      await _loadUsers();
    } catch (e) {
      _showError("${BankAccountStrings.errorRemovingUser}: $e");
       if (mounted) setState(() => _isLoadingUsers = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    bool showFio = _selectedType == 'FIO';
    int tabCount = 2 + (showFio ? 1 : 0);
    
    if (_tabController.length != tabCount) {
      _tabController.dispose();
      _tabController = TabController(length: tabCount, vsync: this);
    }

    final content = Column(
      children: [
        if (widget.isDialog)
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Text(
              _account.title ?? BankAccountStrings.bankAccountSettingsTitle,
              style: Theme.of(context).textTheme.titleLarge,
            ),
          ),
        TabBar(
          controller: _tabController,
          labelColor: Theme.of(context).primaryColor,
          tabs: [
            Tab(text: BankAccountStrings.generalTab),
            if (showFio) Tab(text: BankAccountStrings.fioTokenTab),
            Tab(text: BankAccountStrings.usersTab),
          ],
        ),
        Expanded(
          child: TabBarView(
            controller: _tabController,
            children: [
              _buildGeneralTab(),
              if (showFio) _buildFioTab(),
              _buildUsersTab(),
            ],
          ),
        ),
        if (widget.isDialog)
           Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: Text(BankAccountStrings.cancel),
                ),
              ],
            ),
          ),
      ],
    );

    if (widget.isDialog) {
       return Dialog(
         child: ConstrainedBox(
           constraints: const BoxConstraints(maxWidth: 600, maxHeight: 800),
           child: content,
         ),
       );
    }

    return Scaffold(
      appBar: AppBar(
        title: Text(_account.title ?? BankAccountStrings.bankAccountSettingsTitle),
      ),
      body: content,
    );
  }

  Widget _buildGeneralTab() {
    return SelectionArea(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Form(
        key: _formKey,
        child: Column(
          children: [
             widget.readOnly 
               ? TextFormField(
                   initialValue: _selectedType == 'General' ? BankAccountStrings.typeGeneral : BankAccountStrings.typeFio,
                   decoration: InputDecoration(labelText: BankAccountStrings.typeLabel),
                   readOnly: true,
                 )
               : DropdownButtonFormField<String>(
              value: _selectedType,
              decoration: InputDecoration(labelText: BankAccountStrings.typeLabel),
              items: [
                DropdownMenuItem(value: 'FIO', child: Text(BankAccountStrings.typeFio)),
                DropdownMenuItem(value: 'General', child: Text(BankAccountStrings.typeGeneral)),
              ],
              onChanged: (v) {
                if (v != _selectedType) {
                  _tabController.dispose();
                  setState(() {
                    _selectedType = v!;
                    _initTabController();
                  });
                }
              },
            ),
            const SizedBox(height: 16),
            TextFormField(
              controller: _titleController,
              decoration: InputDecoration(labelText: BankAccountStrings.titleLabel),
              readOnly: widget.readOnly,
              validator: (v) => v!.isEmpty ? CommonStrings.fieldCannotBeEmpty : null,
            ),
            const SizedBox(height: 16),
            TextFormField(
              controller: _numberController,
              decoration: InputDecoration(labelText: BankAccountStrings.accountNumberLabel),
              readOnly: widget.readOnly,
              validator: (v) => v!.isEmpty ? CommonStrings.fieldCannotBeEmpty : null,
            ),
            const SizedBox(height: 16),
            TextFormField(
              controller: _priorityController,
              decoration: InputDecoration(
                labelText: BankAccountStrings.priority,
                suffixIcon: IconButton(
                  icon: const Icon(Icons.info_outline),
                  onPressed: () {
                    showDialog(
                      context: context,
                      builder: (context) => AlertDialog(
                        title: Text(BankAccountStrings.priorityHelpTitle),
                        content: Text(BankAccountStrings.priorityHelpContent),
                        actions: [
                          TextButton(
                            onPressed: () => Navigator.pop(context),
                            child: const Text('OK'),
                          ),
                        ],
                      ),
                    );
                  },
                ),
              ),
              keyboardType: TextInputType.number,
              readOnly: true,
            ),
            const SizedBox(height: 16),
            TextFormField(
              controller: _humanReadableController,
              decoration: InputDecoration(
                labelText: BankAccountStrings.humanReadableLabel, // Needs to be added to strings? Or hardcoded for now "Human Readable Format"
                helperText: BankAccountStrings.humanReadableHelper, // "Auto-generated from IBAN"
              ),
              readOnly: true,
            ),
            const SizedBox(height: 16),
            InputDecorator(
              decoration: InputDecoration(
                labelText: BankAccountStrings.supportedCurrencies,
                border: const OutlineInputBorder(),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Wrap(
                    spacing: 8,
                    children: [
                      ..._supportedCurrencies.map((c) => Chip(
                        label: Text(c),
                        onDeleted: widget.readOnly ? null : () => setState(() => _supportedCurrencies.remove(c)),
                      )),
                      if (!widget.readOnly)
                        ActionChip(
                          avatar: const Icon(Icons.add, size: 16),
                          label: Text(BankAccountStrings.addCurrency),
                          onPressed: _showAddCurrencyDialog,
                        ),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),
            if (!widget.readOnly)
              ElevatedButton(
                onPressed: _isSaving ? null : _saveGeneralInfo,
                child: _isSaving ? const CircularProgressIndicator() : Text(BankAccountStrings.saveChanges),
              ),
          ],
        ),
      ),
    ));
  }

  Widget _buildFioTab() {
    return SelectionArea(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(BankAccountStrings.fioTokenInstruction),
          const SizedBox(height: 16),
          if (_account.tokenMasked != null)
             Padding(
               padding: const EdgeInsets.only(bottom: 16.0),
               child: Text(
                 "${BankAccountStrings.tokenMaskedInfo}: ${_account.tokenMasked}",
                 style: const TextStyle(fontWeight: FontWeight.bold),
               ),
             ),
          
          TextFormField(
            controller: _tokenController,
            readOnly: widget.readOnly,
            obscureText: !_isTokenTokenVisible,
            onChanged: (value) {
              if (_validUntil != null) {
                setState(() {
                  _validUntil = null;
                });
              }
            },
            decoration: InputDecoration(
              labelText: BankAccountStrings.fioTokenLabel,
              hintText: BankAccountStrings.fioTokenHint,
              helperText: _account.tokenMasked != null ? BankAccountStrings.leaveEmptyToKeepToken : null,
              suffixIcon: IconButton(
                icon: Icon(_isTokenTokenVisible ? Icons.visibility : Icons.visibility_off),
                onPressed: () {
                  setState(() {
                    _isTokenTokenVisible = !_isTokenTokenVisible;
                  });
                },
              ),
            ),
          ),
          const SizedBox(height: 16),
          InkWell(
            onTap: widget.readOnly ? null : () async {
              final picked = await showDatePicker(
                context: context,
                initialDate: _validUntil ?? DateTime.now(),
                firstDate: DateTime(2000),
                lastDate: DateTime(2100),
              );
              if (picked != null) {
                setState(() => _validUntil = picked);
              }
            },
            child: InputDecorator(
              decoration: InputDecoration(
                labelText: BankAccountStrings.tokenValidUntilLabel,
                suffixIcon: const Icon(Icons.calendar_today),
              ),
              child: Text(
                _validUntil != null 
                  ? DateFormat.yMd(context.locale.toString()).format(_validUntil!) 
                  : BankAccountStrings.setDate,
              ),
            ),
          ),
          const SizedBox(height: 24),
          if (!widget.readOnly)
            Center(
              child: ElevatedButton(
                onPressed: _isSaving ? null : _saveToken,
                child: _isSaving ? const CircularProgressIndicator() : Text(BankAccountStrings.updateToken),
              ),
            ),
          const SizedBox(height: 24),
          if (_account.lastFetchTime != null)
             Padding(
              padding: const EdgeInsets.symmetric(vertical: 8.0),
              child: Text(
                "${BankAccountStrings.lastFetchTime}: ${DateFormat.yMd(context.locale.toString()).add_jm().format(_account.lastFetchTime!.toOccasionTime())}",
                style: const TextStyle(color: Colors.grey, fontSize: 13),
              ),
            ),
        ],
      ),
    ));
  }

  Widget _buildUsersTab() {
    if (_isLoadingUsers) return const Center(child: CircularProgressIndicator());
    
    return Column(
      children: [
        if (!widget.readOnly)
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: ElevatedButton.icon(
              icon: const Icon(Icons.add),
              label: Text(BankAccountStrings.addUser),
              onPressed: _addUser,
            ),
          ),
        Expanded(
          child: ListView.builder(
            itemCount: _users.length,
            itemBuilder: (context, index) {
              final user = _users[index];
              final fullName = [user.name, user.surname].where((s) => s != null && s.isNotEmpty).join(' ');
              final displayName = fullName.isNotEmpty ? "$fullName (${user.email ?? ''})" : (user.email ?? 'Unknown');

              return ListTile(
                title: Text(displayName),
                subtitle: Wrap(
                  spacing: 8,
                  children: [
                    if (user.isAdmin)
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                        decoration: BoxDecoration(
                          color: Colors.orange.shade100,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: Colors.orange.shade300),
                        ),
                        child: Text(BankAccountStrings.isAdminLabel, style: TextStyle(fontSize: 12, color: Colors.orange.shade900)),
                      ),
                    if (AppConfig.showBankSupportRole && user.isSupport)
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                        decoration: BoxDecoration(
                          color: Colors.blue.shade100,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: Colors.blue.shade300),
                        ),
                        child: Text(BankAccountStrings.isSupportLabel, style: TextStyle(fontSize: 12, color: Colors.blue.shade900)),
                      ),
                  ],
                ),
                trailing: widget.readOnly ? null : Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    IconButton(icon: const Icon(Icons.edit), onPressed: () => _editUser(user)),
                    IconButton(icon: const Icon(Icons.delete), onPressed: () => _removeUser(user)),
                  ],
                ),
              );
            },
          ),
        ),
      ],
    );
  }

  Future<void> _showAddCurrencyDialog() async {
    final controller = TextEditingController();
    await showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(BankAccountStrings.addCurrency),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Wrap(
              spacing: 8,
              children: ['CZK', 'EUR'].where((c) => !_supportedCurrencies.contains(c)).map((c) => ActionChip(
                label: Text(c),
                onPressed: () => Navigator.pop(context, c),
              )).toList(),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: controller,
              decoration: InputDecoration(
                labelText: BankAccountStrings.currencyCodeLabel,
                hintText: BankAccountStrings.currencyHint,
              ),
              textCapitalization: TextCapitalization.characters,
              maxLength: 3,
            ),
          ],
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context), child: Text(BankAccountStrings.cancel)),
          ElevatedButton(
            onPressed: () {
               final val = controller.text.toUpperCase();
               if (val.length == 3) {
                 Navigator.pop(context, val);
               } else {
                 ToastHelper.Show(context, BankAccountStrings.invalidCurrencyCode);
               }
            },
            child: Text(BankAccountStrings.addCurrency),
          ),
        ],
      ),
    ).then((val) {
      if (val != null && val is String && val.length == 3) {
        if (!_supportedCurrencies.contains(val)) {
           setState(() => _supportedCurrencies.add(val));
        }
      }
    });
  }
}
