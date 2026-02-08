import 'package:flutter/services.dart';
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

import 'package:fstapp/components/bank_accounts/logic/iban_utils.dart';
import 'package:fstapp/components/bank_accounts/data/cz_banks.dart';
import 'package:timeago/timeago.dart' as timeago;


class BankAccountSettingsScreen extends StatefulWidget {
  final int unitId;
  final int? organizationId;
  final BankAccountModel account;
  final bool readOnly;

  final bool isDialog;

  const BankAccountSettingsScreen({
    super.key,
    required this.unitId,
    this.organizationId,
    required this.account,
    this.readOnly = false,
    this.isDialog = false,
  });

  @override
  State<BankAccountSettingsScreen> createState() =>
      _BankAccountSettingsScreenState();
}

class _BankAccountSettingsScreenState extends State<BankAccountSettingsScreen>
    with SingleTickerProviderStateMixin {
  // New state for IBAN/Account switching
  bool _isTokenTokenVisible = false;
  bool _useIbanInput = true;


  late TextEditingController _ibanController;
  late TextEditingController _prefixController;
  late TextEditingController _accountBodyController;
  late TextEditingController _bankCodeController; // Used for text input if needed, but mainly we sync with dropdown

  String? _selectedBankCode;

  late TextEditingController _titleController;
  late TextEditingController _priorityController;
  late TextEditingController _tokenController;
  late TabController _tabController;
  DateTime? _expiryDate;

  late BankAccountModel _account;
  // _selectedType removed, we use dynamic check

  String? _pairingCode; // Code for parsing email
  List<String> _supportedCurrencies = [];
  List<BankAccountUser> _users = [];
  bool _isLoadingUsers = false;
  bool _isSaving = false;
  
  // Validation State
  String? _ibanError;
  String? _humanError;

  final _formKey = GlobalKey<FormState>();

  bool get _isReadOnly => widget.readOnly || _account.type == 'CASH';
  final String _emailDomain = "bank.festapp.net";

  @override
  void initState() {
    super.initState();
    _account = widget.account;
    _titleController = TextEditingController(text: _account.title);
    _priorityController =
        TextEditingController(text: _account.priority.toString());
    _tokenController = TextEditingController(); // FIO Token

    _ibanController = TextEditingController(text: _account.accountNumber);
    _prefixController = TextEditingController();
    _accountBodyController = TextEditingController();
    _bankCodeController = TextEditingController();
    
    _pairingCode = _account.pairingCode;
    // _selectedType init removed

    
    _parseInitialIban();
    
    // Default: Split Format, unless we have data that isn't valid CZ
    bool hasData = _ibanController.text.isNotEmpty;
    bool isCzParsed = _prefixController.text.isNotEmpty || 
                      _accountBodyController.text.isNotEmpty || 
                      (_selectedBankCode != null);
    
    _useIbanInput = hasData && !isCzParsed;
    _supportedCurrencies = List.from(_account.supportedCurrencies);
    _expiryDate = _account.tokenExpiryDate;



    // Listeners for Sync
    _ibanController.addListener(_onIbanChanged);
    _prefixController.addListener(_onHumanChanged);
    _accountBodyController.addListener(_onHumanChanged);
    // _selectedBankCode changes trigger _onHumanChanged manually

    _initTabController();
    _loadUsers();

    if (_supportedCurrencies.isEmpty) {
      _supportedCurrencies.add('CZK');
    }
    
    // Auto-generate token block removed to prevent accidental regeneration on view

    // Configure timeago
    timeago.setLocaleMessages('cs', timeago.CsMessages());
  }

  bool get _isFio {
    if (_ibanController.text.isNotEmpty && isFioBank(_ibanController.text)) return true;
    if (_selectedBankCode != null && isFioBank(_selectedBankCode)) return true;
    return false;
  }

  @override
  void dispose() {
    _ibanController.dispose();
    _prefixController.dispose();
    _accountBodyController.dispose();
    _bankCodeController.dispose();
    
    _titleController.dispose();
    _priorityController.dispose();
    _tokenController.dispose();
    _tabController.dispose();
    super.dispose();
  }

  void _parseInitialIban() {
    final iban = _ibanController.text.trim();
    if (iban.isNotEmpty) {
      final parsed = IbanUtils.parseCzIban(iban);
      if (parsed != null) {
        _prefixController.text = parsed.prefix == '0' ? '' : parsed.prefix;
        _accountBodyController.text = parsed.number;
          if (czBanks.containsKey(parsed.bankCode)) {
          _selectedBankCode = parsed.bankCode;
          // _selectedType update removed

        } else {

        }
      }
    }
  }

  bool _isUpdating = false;

  void _onIbanChanged() {
    if (_isUpdating) return;
    final iban = _ibanController.text.trim();
    
    // Validate IBAN
    bool isValid = IbanUtils.isValidIban(iban);
    if (iban.isNotEmpty && !isValid) {
      setState(() => _ibanError = "Invalid IBAN");
      // Don't clear human fields, user might be typing
      return;
    } else {
      if (mounted && _ibanError != null) setState(() => _ibanError = null);
    }

    if (isValid && iban.toUpperCase().startsWith('CZ')) {
       final parsed = IbanUtils.parseCzIban(iban);
       if (parsed != null) {
         _isUpdating = true;
         _prefixController.text = parsed.prefix == '0' ? '' : parsed.prefix;
         _accountBodyController.text = parsed.number;
          if (czBanks.containsKey(parsed.bankCode)) {
             setState(() {
               _selectedBankCode = parsed.bankCode;
                // _selectedType update removed
             });
          }
         _isUpdating = false;
       }
    }
  }

  void _onHumanChanged() {
    if (_isUpdating) return;
    
    String prefix = _prefixController.text.trim();
    String body = _accountBodyController.text.trim();
    String? bank = _selectedBankCode;

    if (body.isEmpty || bank == null) {
       return; // Not enough info to generate
    }

    // Attempt generation
    try {
      if (prefix.isEmpty) prefix = "0";
      
      // Validate components locally first to show specific errors
      // (Optional, IbanUtils.generate throws)
      
      String generated = IbanUtils.generateCzIban(bank, prefix, body);
      
      _isUpdating = true;
      if (_ibanController.text != generated) {
        _ibanController.text = generated;
        setState(() => _ibanError = null); // Valid generation implies valid IBAN
      }
      _isUpdating = false;
      
      if (_humanError != null) setState(() => _humanError = null);

    } catch (e) {
      // Show error on human side?
      // Or just don't generate IBAN
      // setState(() => _humanError = e.toString());
    }
  }
  

  Future<void> _saveGeneralInfo() async {
    if (!_formKey.currentState!.validate()) return;
    
    // Custom Validation
    if (_ibanError != null) {
        _showError("Please fix validaton errors: $_ibanError");
        return;
    }
    // Validate final IBAN validity
    if (!IbanUtils.isValidIban(_ibanController.text)) {
         _showError("Invalid IBAN format");
         return;
    }

    final isCreation = _account.id == 0;

    setState(() => _isSaving = true);
    try {
      final updatedAccount = BankAccountModel(
          id: _account.id,
          title: _titleController.text,
          accountNumber: _ibanController.text.trim(), // Saving IBAN
          priority: int.tryParse(_priorityController.text) ?? _account.priority,
          type: _isFio ? 'FIO' : 'OTHER', // Derived type
          isAdmin: _account.isAdmin,

          supportedCurrencies: _supportedCurrencies,

          accountNumberHumanReadable: _buildLegacyHumanReadable(),
          tokenMasked: _account.tokenMasked,
          lastFetchTime: _account.lastFetchTime,
          tokenExpiryDate: _account.tokenExpiryDate,
          pairingCode: _pairingCode,
      );
      final newId = await DbBankAccounts.updateBankAccount(updatedAccount,
          unitId: widget.unitId, organizationId: widget.organizationId);
      final savedAccount = updatedAccount.copyWith(id: newId);

      if (!mounted) return;
      
      setState(() {
        _account = savedAccount;
      });

      if (isCreation) {
         // On creation, we immediately fetch/regenerate the pairing code
         // so the user can see it once and set it up.
         await _regenerateToken(silent: true);
         
         // Switch to Connection Tab
         _tabController.animateTo(1);
         
         ToastHelper.Show(context, "${BankAccountStrings.save}. ${BankAccountStrings.setupConnectionNow}");
      } else {
         ToastHelper.Show(context, BankAccountStrings.save);
      }
      
      if (widget.isDialog && _account.pairingCode == null) {
          // If it's a dialog and we didn't just generate a code (or user closed it?)
          // actually, if we just created it, we usually want to stay open to show the code.
          // If it's an EDIT, we might pop. 
          // But for flow consistency: 
          if (!isCreation) {
             Navigator.pop(context, savedAccount);
          }
      } else if (!isCreation && widget.isDialog) {
         Navigator.pop(context, savedAccount);
      }
    } catch (e) {
      if (e.toString().contains("ACCOUNT_NUMBER_EXISTS")) {
        _showError(BankAccountStrings.accountNumberExists);
      } else {
        _showError("$e");
      }
    } finally {
      if (mounted) setState(() => _isSaving = false);
    }
  }
  
  String? _buildLegacyHumanReadable() {
    if (_accountBodyController.text.isEmpty || _selectedBankCode == null) return null;
    String prefix = _prefixController.text.trim();
    String body = _accountBodyController.text.trim();
    if (prefix.isNotEmpty && prefix != '0') {
        return "$prefix-$body/$_selectedBankCode";
    }
    return "$body/$_selectedBankCode";
  }

  void _initTabController() {
    _tabController = TabController(length: 3, vsync: this);
  }

  Future<void> _loadUsers() async {
    setState(() => _isLoadingUsers = true);
    try {
      final users = await DbBankAccounts.getBankAccountUsers(_account.id,
          unitId: widget.unitId);
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


  


  Future<void> _addUser() async {
    // 1. Fetch potential users (Unit users)
    setState(() => _isLoadingUsers = true);
    try {
      final allUnitUsers =
          await DbUsers.getAllUsersBasicsForUnit(widget.unitId);

      // 2. Filter out already added users
      final currentIds = _users.map((u) => u.userId).toSet();
      final availableUsers =
          allUnitUsers.where((u) => !currentIds.contains(u.id)).toList();

      if (mounted) setState(() => _isLoadingUsers = false);

      if (availableUsers.isEmpty) {
        if (mounted) {
          ToastHelper.Show(context, BankAccountStrings.noMoreUsersToAdd);
        }
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
              title: Text(
                  '${BankAccountStrings.addUser}: ${chosenUser.name ?? chosenUser.email}'),
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
                        style:
                            const TextStyle(fontSize: 14, color: Colors.grey),
                      ),
                    ),
                ],
              ),
              actions: [
                TextButton(
                    onPressed: () => Navigator.pop(context),
                    child: Text(BankAccountStrings.cancel)),
                ElevatedButton(
                  onPressed: () async {
                    Navigator.pop(context);
                    await _performUpdateUser(
                        chosenUser.email!, isAdmin, isSupport);
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
          title: Text(
              '${BankAccountStrings.editRole}: ${user.name ?? user.email}'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              CheckboxListTile(
                title: Text(BankAccountStrings.isAdminLabel),
                value: isAdmin,
                onChanged: (v) => setState(() => isAdmin = v!),
              ),


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
            TextButton(
                onPressed: () => Navigator.pop(context),
                child: Text(BankAccountStrings.cancel)),
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

  Future<void> _performUpdateUser(
      String email, bool isAdmin, bool isSupport) async {
    setState(() => _isLoadingUsers = true);
    try {
      await DbBankAccounts.updateBankAccountUser(
          _account.id, email, isAdmin, isSupport);
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
            Tab(text: BankAccountStrings.bankConnectionTab),
            Tab(text: BankAccountStrings.usersTab),
          ],
        ),
        Expanded(
          child: TabBarView(
            controller: _tabController,
            children: [
              _buildGeneralTab(),
              _buildConnectionTab(),
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
        title:
            Text(_account.title ?? BankAccountStrings.bankAccountSettingsTitle),
      ),
      body: content,
    );
  }

  Widget _buildConnectionTab() {
    final forwardingEmail = 'bank.${_pairingCode ?? '**********'}@$_emailDomain';

    return SelectionArea(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            if (_isFio) ..._buildFioTokenSectionWidgets(),
            if (_isFio) ...[
              const SizedBox(height: 24),
              Row(
                children: [
                  const Expanded(child: Divider()),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 8.0),
                    child: Text(CommonStrings.or.toUpperCase(),
                        style:
                            const TextStyle(color: Colors.grey, fontSize: 12)),
                  ),
                  const Expanded(child: Divider()),
                ],
              ),
              const SizedBox(height: 24),
            ],
            Text(BankAccountStrings.syncInstruction),
            const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: Theme.of(context).dividerColor),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                   if (_isFio) ...[
                     Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text("💡 ", style: TextStyle(fontSize: 14)),
                        Expanded(
                            child: Text(BankAccountStrings
                                .setupGuideExplanationFioNote,
                                style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13))),
                      ],
                    ),
                    const SizedBox(height: 12),
                   ],
                   Text(
                    BankAccountStrings.setupGuideExplanationTitle,
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 8),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text("✅ ", style: TextStyle(fontSize: 14)),
                      Expanded(
                          child: Text(BankAccountStrings.setupGuideExplanationSet,
                              style: const TextStyle(fontSize: 13))),
                    ],
                  ),
                  const SizedBox(height: 4),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text("❌ ", style: TextStyle(fontSize: 14)),
                      Expanded(
                          child: Text(BankAccountStrings
                              .setupGuideExplanationNotSet,
                              style: const TextStyle(fontSize: 13))),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 16),
             _buildGuideCard(
               context,
               title: BankAccountStrings.setupGuideTitle,
               steps: [
                 BankAccountStrings.setupGuideStep1,
                 BankAccountStrings.setupGuideStep2,
                 BankAccountStrings.setupGuideStep3,
                 BankAccountStrings.setupGuideStep4,
                 BankAccountStrings.setupGuideStep5,
               ],
             ),
            const SizedBox(height: 24),
            InputDecorator(
              decoration: InputDecoration(
                labelText: BankAccountStrings.forwardingEmailLabel,
                border: const OutlineInputBorder(),
                suffixIcon: _pairingCode == null
                    ? const Icon(Icons.lock_outline, color: Colors.grey)
                    : IconButton(
                        icon: const Icon(Icons.copy),
                        onPressed: () {
                          Clipboard.setData(ClipboardData(text: forwardingEmail));
                          ToastHelper.Show(context, BankAccountStrings.copyEmail);
                        },
                      ),
              ),
              child: SelectableText(
                forwardingEmail,
                style:
                    const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
              ),
            ),
            if (_pairingCode == null)
              Padding(
                padding: const EdgeInsets.only(top: 8.0),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Icon(Icons.info_outline, size: 16, color: Colors.grey),
                    const SizedBox(width: 8),
                    Expanded(
                      child: Text(
                        BankAccountStrings.maskedEmailExplanation,
                        style: const TextStyle(
                            color: Colors.grey, fontStyle: FontStyle.italic, fontSize: 13),
                      ),
                    ),
                  ],
                ),
              ),
             const SizedBox(height: 8),
            Row(
              children: [
                const Icon(Icons.security, size: 20),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    BankAccountStrings.emailSecurityNote,
                    style: TextStyle(
                        color: Theme.of(context).textTheme.bodySmall?.color, fontSize: 13),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16),
            if (!_isReadOnly)
              Align(
                alignment: Alignment.centerRight,
                child: TextButton.icon(
                  onPressed: _regenerateToken,
                  icon: const Icon(Icons.refresh),
                  label: Text(BankAccountStrings.regenerateToken),
                ),
              ),
            const SizedBox(height: 24),

            const SizedBox(height: 24),

              if (_account.lastFetchTime != null)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 8.0),
                  child: Center(
                    child: Text(
                      "${BankAccountStrings.lastFetchTime}: ${timeago.format(_account.lastFetchTime!.toLocal(), locale: context.locale.languageCode)}",
                      style: const TextStyle(color: Colors.grey, fontSize: 13),
                    ),
                  ),
                ),
          ],
        ),
      ),
    );
  }

  Widget _buildGuideCard(BuildContext context,
      {required String title, required List<String> steps}) {
    return Card(
      elevation: 0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
        side: BorderSide(
          color: Theme.of(context).dividerColor,
        ),
      ),
      child: ExpansionTile(
        title: Text(
          title,
          style: const TextStyle(fontWeight: FontWeight.bold),
        ),
        subtitle: Text(
          steps.first,
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          style: Theme.of(context).textTheme.bodySmall,
        ),
        initiallyExpanded: false,
        childrenPadding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
        children: steps.asMap().entries.map((e) => _buildStep(e.key + 1, e.value)).toList(),
      ),
    );
  }

  Widget _buildStep(int number, String text) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          CircleAvatar(
            radius: 10,
            backgroundColor: Theme.of(context).colorScheme.primary,
            child: Text(
              number.toString(),
              style: TextStyle(
                color: Theme.of(context).colorScheme.onPrimary,
                fontSize: 12,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          const SizedBox(width: 12),
          Expanded(child: Text(text)),
        ],
      ),
    );
  }

  Future<void> _saveToken() async {
    setState(() => _isSaving = true);
    try {
      await DbBankAccounts.updateBankAccountToken(
          _account.id, _tokenController.text, _expiryDate);
      if (!mounted) return;

      // Update local masking to reflect change immediately
      final newToken = _tokenController.text;
      if (newToken.isNotEmpty) {
        final mask =
            "************${newToken.length >= 4 ? newToken.substring(newToken.length - 4) : newToken}";
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

  Future<void> _regenerateToken({bool silent = false}) async {
    if (!silent) {
      bool? confirm = await showDialog<bool>(
        context: context,
        builder: (context) => AlertDialog(
          title: Text(BankAccountStrings.regenerateToken),
          content: Text(BankAccountStrings.regenerateTokenConfirmation),
          actions: [
            TextButton(
                onPressed: () => Navigator.pop(context, false),
                child: Text(BankAccountStrings.cancel)),
            TextButton(
                style: TextButton.styleFrom(
                    foregroundColor: Theme.of(context).colorScheme.error),
                onPressed: () => Navigator.pop(context, true),
                child: Text(BankAccountStrings.regenerateToken)),
          ],
        ),
      );
      if (confirm != true) return;
    }

    setState(() => _isSaving = true);
    try {
      final newToken =
          await DbBankAccounts.regenerateBankAccountPairingCode(_account.id);
      setState(() {
        _pairingCode = newToken;
        _account = _account.copyWith(pairingCode: newToken); // Update local model
      });
      if (!silent) {
        if (!mounted) return;
        ToastHelper.Show(context, BankAccountStrings.tokenUpdated);
      }
    } catch (e) {
      _showError("${BankAccountStrings.errorSavingToken}: $e");
    } finally {
      if (mounted) setState(() => _isSaving = false);
    }
  }


  Widget _buildGeneralTab() {
    return SelectionArea(
        child: SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Form(
        key: _formKey,
        child: Column(
          children: [

            const SizedBox(height: 16),
            TextFormField(
              controller: _titleController,
              decoration:
                  InputDecoration(labelText: BankAccountStrings.titleLabel),
              readOnly: _isReadOnly,
              validator: (v) =>
                  v!.isEmpty ? CommonStrings.fieldCannotBeEmpty : null,
            ),
            const SizedBox(height: 16),
            const SizedBox(height: 24),
            if (!_isReadOnly)
              LayoutBuilder(builder: (context, constraints) {
                return ToggleButtons(
                  isSelected: [!_useIbanInput, _useIbanInput],
                  onPressed: (index) =>
                      setState(() => _useIbanInput = index == 1),
                  borderRadius: BorderRadius.circular(8),
                  constraints: BoxConstraints.expand(
                      width: (constraints.maxWidth - 4) / 2, height: 40),
                  children: [
                    Text(BankAccountStrings.inputModeSplit),
                    Text(BankAccountStrings.inputModeIban),
                  ],
                );
              }),
            const SizedBox(height: 16),
            if (_useIbanInput)
              TextFormField(
                controller: _ibanController,
                decoration: InputDecoration(
                    labelText: BankAccountStrings.accountNumberLabel,
                    errorText: _ibanError,
                    helperText: _useIbanInput && !_isReadOnly
                        ? BankAccountStrings.ibanValidationHelp
                        : null),
                readOnly: _isReadOnly,
                onChanged: (_) => _onIbanChanged(),
                validator: (v) =>
                    v!.isEmpty ? CommonStrings.fieldCannotBeEmpty : null,
              )
            else
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey.shade300),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Column(
                  children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(
                          width: 80,
                          child: TextFormField(
                            controller: _prefixController,
                            decoration: InputDecoration(labelText: BankAccountStrings.prefixLabel),
                            keyboardType: TextInputType.number,
                            inputFormatters: [FilteringTextInputFormatter.digitsOnly],
                            onChanged: (_) => _onHumanChanged(),
                            readOnly: _isReadOnly,
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: TextFormField(
                            controller: _accountBodyController,
                            decoration:
                                InputDecoration(labelText: BankAccountStrings.accountNumberLabel),
                            keyboardType: TextInputType.number,
                            inputFormatters: [FilteringTextInputFormatter.digitsOnly],
                            onChanged: (_) => _onHumanChanged(),
                            readOnly: _isReadOnly,
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 12),
                    DropdownButtonFormField<String>(
                      isExpanded: true,
                      value: czBanks.containsKey(_selectedBankCode)
                          ? _selectedBankCode
                          : null,
                      decoration: InputDecoration(labelText: BankAccountStrings.bankCodeLabel),
                      items: czBanks.entries
                          .map((e) => DropdownMenuItem(
                                value: e.key,
                                child: Text("${e.value} (${e.key})",
                                    overflow: TextOverflow.ellipsis),
                              ))
                          .toList(),
                      onChanged: _isReadOnly ? null : (v) {
                        setState(() {
                          _selectedBankCode = v;
                          // _selectedType update removed
                        });
                        _onHumanChanged();
                      },
                    ),
                    if (_selectedBankCode != null &&
                        _accountBodyController.text.isNotEmpty)
                      Padding(
                        padding: const EdgeInsets.only(top: 8.0),
                        child: Text(
                          "${BankAccountStrings.fullFormatLabel} ${_buildLegacyHumanReadable() ?? ''}",
                          style: TextStyle(
                              color: Theme.of(context).hintColor, fontSize: 13),
                        ),
                      ),
                  ],
                ),
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
                            onDeleted: _isReadOnly
                                ? null
                                : () => setState(
                                    () => _supportedCurrencies.remove(c)),
                          )),
                      if (!_isReadOnly)
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
            if (!_isReadOnly)
              ElevatedButton(
                onPressed: _isSaving ? null : _saveGeneralInfo,
                child: _isSaving
                    ? const CircularProgressIndicator()
                    : Text(BankAccountStrings.saveChanges),
              ),
          ],
        ),
      ),
    ));
  }

  List<Widget> _buildFioTokenSectionWidgets() {
    return [
      Text(BankAccountStrings.fioTokenInstruction),
      const SizedBox(height: 16),
      _buildGuideCard(
        context,
        title: BankAccountStrings.fioSetupGuideTitle,
        steps: [
          BankAccountStrings.fioSetupGuideStep1,
          BankAccountStrings.fioSetupGuideStep2,
          BankAccountStrings.fioSetupGuideStep3,
        ],
      ),
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
        readOnly: _isReadOnly,
        obscureText: !_isTokenTokenVisible,
        onChanged: (value) {
          if (_expiryDate != null) {
            setState(() {
              _expiryDate = null;
            });
          }
        },
        decoration: InputDecoration(
          labelText: BankAccountStrings.fioTokenLabel,
          hintText: BankAccountStrings.fioTokenHint,
          helperText: _account.tokenMasked != null
              ? BankAccountStrings.leaveEmptyToKeepToken
              : null,
          suffixIcon: IconButton(
            icon: Icon(_isTokenTokenVisible
                ? Icons.visibility
                : Icons.visibility_off),
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
        onTap: _isReadOnly
            ? null
            : () async {
                final picked = await showDatePicker(
                  context: context,
                  initialDate: _expiryDate ?? DateTime.now(),
                  firstDate: DateTime(2000),
                  lastDate: DateTime(2100),
                );
                if (picked != null) {
                  setState(() => _expiryDate = picked);
                }
              },
        child: InputDecorator(
          decoration: InputDecoration(
            labelText: BankAccountStrings.tokenExpiryDateLabel,
            suffixIcon: const Icon(Icons.calendar_today),
          ),
          child: Text(
            _expiryDate != null
                ? DateFormat.yMd(context.locale.toString())
                    .format(_expiryDate!)
                : BankAccountStrings.setDate,
          ),
        ),
      ),
      const SizedBox(height: 24),
      if (!_isReadOnly)
        Center(
          child: ElevatedButton(
            onPressed: _isSaving ? null : _saveToken,
            child: _isSaving
                ? const CircularProgressIndicator()
                : Text(BankAccountStrings.updateToken),
          ),
        ),
    ];
  }

  Widget _buildUsersTab() {
    if (_isLoadingUsers) {
      return const Center(child: CircularProgressIndicator());
    }

    return Column(
      children: [
        if (!_isReadOnly)
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
              final fullName = [user.name, user.surname]
                  .where((s) => s != null && s.isNotEmpty)
                  .join(' ');
              final displayName = fullName.isNotEmpty
                  ? "$fullName (${user.email ?? ''})"
                  : (user.email ?? 'Unknown');

              return ListTile(
                title: Text(displayName),
                subtitle: Wrap(
                  spacing: 8,
                  children: [
                    if (user.isAdmin)
                      Container(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 8, vertical: 2),
                        decoration: BoxDecoration(
                          color: Colors.orange.shade100,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: Colors.orange.shade300),
                        ),
                        child: Text(BankAccountStrings.isAdminLabel,
                            style: TextStyle(
                                fontSize: 12, color: Colors.orange.shade900)),
                      ),
                    if (AppConfig.showBankSupportRole && user.isSupport)
                      Container(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 8, vertical: 2),
                        decoration: BoxDecoration(
                          color: Colors.blue.shade100,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: Colors.blue.shade300),
                        ),
                        child: Text(BankAccountStrings.isSupportLabel,
                            style: TextStyle(
                                fontSize: 12, color: Colors.blue.shade900)),
                      ),
                  ],
                ),
                trailing: _isReadOnly
                    ? null
                    : Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          IconButton(
                              icon: const Icon(Icons.edit),
                              onPressed: () => _editUser(user)),
                          IconButton(
                              icon: const Icon(Icons.delete),
                              onPressed: () => _removeUser(user)),
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
              children: ['CZK', 'EUR']
                  .where((c) => !_supportedCurrencies.contains(c))
                  .map((c) => ActionChip(
                        label: Text(c),
                        onPressed: () => Navigator.pop(context, c),
                      ))
                  .toList(),
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
          TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text(BankAccountStrings.cancel)),
          ElevatedButton(
            onPressed: () {
              final val = controller.text.toUpperCase();
              if (val.length == 3) {
                Navigator.pop(context, val);
              } else {
                ToastHelper.Show(
                    context, BankAccountStrings.invalidCurrencyCode);
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
