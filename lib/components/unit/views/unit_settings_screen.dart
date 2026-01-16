import 'package:flutter/material.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/occasion_settings/occasion_settings_strings.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:fstapp/components/unit/unit_model.dart';
import 'package:fstapp/components/unit/db_units.dart';
import 'package:fstapp/components/users/db_users.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/unit/unit_settings_strings.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:timezone/timezone.dart' as tz;
import 'package:fstapp/components/bank_accounts/views/unit_bank_accounts_screen.dart';
import 'package:fstapp/components/bank_accounts/bank_account_strings.dart';

class UnitSettingsScreen extends StatefulWidget {
  final UnitModel unit;
  final VoidCallback onUnitUpdated;

  const UnitSettingsScreen({
    super.key,
    required this.unit,
    required this.onUnitUpdated,
  });

  @override
  State<UnitSettingsScreen> createState() => _UnitSettingsScreenState();
}

class _UnitSettingsScreenState extends State<UnitSettingsScreen> {
  final _formKey = GlobalKey<FormState>();
  bool _isSaving = false;
  bool _isLoading = true;
  bool _canEdit = false;
  late UnitModel _unit;

  late String? _title;
  late TextEditingController _replyToEmailController;
  String? _selectedTimezone;
  List<String> _allTimezones = [];
  String _versionInfo = "";

  // Constants for data keys
  // Constants for data keys
  static const String dataTimezone = "timezone";
  static const int maxTitleLength = 30;

  @override
  void initState() {
    super.initState();
    _unit = widget.unit;
    _loadUnitData();
    _loadVersionInfo();
  }

  Future<void> _loadVersionInfo() async {
    PackageInfo packageInfo = await PackageInfo.fromPlatform();
    if (mounted) {
      setState(() {
        _versionInfo = "${packageInfo.version}+${packageInfo.buildNumber}";
      });
    }
  }

  Future<void> _loadUnitData() async {
    setState(() {
      _isLoading = true;
    });
    try {
      final freshUnit = await DbUsers.getCurrentUnit(widget.unit.id!);
      if (freshUnit != null) {
        _unit = freshUnit;
      }
    } catch (e) {
      print("Error loading unit data: $e");
    } finally {
      if (mounted) {
        _initializeFormState();
        setState(() {
          _isLoading = false;
        });
      }
    }
  }

  void _initializeFormState() {
    _title = _unit.title;
    _canEdit = RightsService.isUnitManager();
    _replyToEmailController = TextEditingController(
      text: _unit.data?[Tb.units.data_reply_to] as String? ?? '',
    );

    _allTimezones = TimeHelper.getAvailableTimezoneNames();
    _selectedTimezone = _unit.data?[dataTimezone] as String? ?? tz.local.name;

    if (!_allTimezones.contains(_selectedTimezone) && _allTimezones.isNotEmpty) {
      _selectedTimezone = _allTimezones.contains("Europe/Prague")
          ? "Europe/Prague"
          : _allTimezones.first;
    }
  }

  @override
  void dispose() {
    _replyToEmailController.dispose();
    super.dispose();
  }

  Future<void> _saveSettings() async {
    if (!(_formKey.currentState?.validate() ?? false)) return;

    setState(() {
      _isSaving = true;
    });

    _formKey.currentState!.save();

    _formKey.currentState!.save();

    _unit.title = _title;
    _unit.data ??= {};

    final trimmedEmail = _replyToEmailController.text.trim();
    if (trimmedEmail.isEmpty) {
      _unit.data!.remove(Tb.units.data_reply_to);
    } else {
      _unit.data![Tb.units.data_reply_to] = trimmedEmail;
    }

    _unit.data![dataTimezone] = _selectedTimezone;

    try {
      await DbUnits.updateUnit(_unit);
      ToastHelper.Show(context, "${CommonStrings.saved}: ${_unit.title!}");
      widget.onUnitUpdated();
    } catch (e) {
      ToastHelper.Show(context, e.toString(), severity: ToastSeverity.NotOk);
    } finally {
      if (mounted) {
        setState(() {
          _isSaving = false;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.transparent,
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(16.0),
            child: Form(
              key: _formKey,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  if (_isLoading)
                    const Center(child: CircularProgressIndicator())
                  else ...[
                    TextFormField(
                      initialValue: _title,
                      enabled: _canEdit,
                      maxLength: maxTitleLength,
                      buildCounter: (context, {required currentLength, required isFocused, required maxLength}) {
                        return isFocused
                            ? Text(
                                '$currentLength/$maxLength',
                                style: Theme.of(context).textTheme.bodySmall,
                              )
                            : null;
                      },
                      decoration: InputDecoration(
                        labelText: OccasionSettingsStrings.title,
                      ),
                      validator: (val) {
                        if (val == null || val.trim().isEmpty) {
                          return OccasionSettingsStrings.titleIsRequired;
                        }
                        return null;
                      },
                      onSaved: (val) {
                        _title = val;
                      },
                    ),
                  const SizedBox(height: 24),
                  TextFormField(
                    controller: _replyToEmailController,
                    enabled: _canEdit,
                    decoration: InputDecoration(
                      labelText: UnitSettingsStrings.labelReplyToEmail,
                      border: const OutlineInputBorder(),
                      helperText: OccasionSettingsStrings.helperReplyToEmail,
                      helperMaxLines: 3,
                    ),
                    keyboardType: TextInputType.emailAddress,
                    validator: FormBuilderValidators.compose([
                      FormBuilderValidators.required(errorText: CommonStrings.fieldCannotBeEmpty),
                      FormBuilderValidators.email(
                          errorText: OccasionSettingsStrings.validationEmailInvalid),
                    ]),
                  ),
                  const SizedBox(height: 24),
                  if (_allTimezones.isNotEmpty)
                    Autocomplete<String>(
                      initialValue: _selectedTimezone != null &&
                              _allTimezones.contains(_selectedTimezone)
                          ? TextEditingValue(text: _selectedTimezone!)
                          : null,
                      optionsBuilder: (TextEditingValue textEditingValue) {
                        if (textEditingValue.text.isEmpty) {
                          return _allTimezones.take(50);
                        }
                        return _allTimezones.where((String option) {
                          return option
                              .toLowerCase()
                              .contains(textEditingValue.text.toLowerCase());
                        });
                      },
                      onSelected: (String selection) {
                        setState(() {
                          _selectedTimezone = selection;
                        });
                      },
                      fieldViewBuilder: (BuildContext context,
                          TextEditingController fieldTextEditingController,
                          FocusNode fieldFocusNode,
                          VoidCallback onFieldSubmitted) {
                          return TextFormField(
                            controller: fieldTextEditingController,
                            focusNode: fieldFocusNode,
                            enabled: _canEdit,
                            decoration: InputDecoration(
                              labelText: UnitSettingsStrings.labelDefaultTimezone,
                              border: const OutlineInputBorder(),
                              suffixIcon: fieldTextEditingController.text.isNotEmpty && _canEdit
                                ? IconButton(
                                    icon: const Icon(Icons.clear),
                                    onPressed: () {
                                      fieldTextEditingController.clear();
                                      setState(() {
                                        _selectedTimezone = null;
                                      });
                                    },
                                  )
                                : null,
                          ),
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return OccasionSettingsStrings.timezoneIsRequired;
                            }
                            if (!_allTimezones.contains(value)) {
                              if (_selectedTimezone != value) {
                                return OccasionSettingsStrings.invalidTimezone;
                              }
                            }
                            if (_allTimezones.contains(value) &&
                                _selectedTimezone != value) {
                              WidgetsBinding.instance.addPostFrameCallback((_) {
                                if (mounted) {
                                  setState(() {
                                    _selectedTimezone = value;
                                  });
                                }
                              });
                            }
                            return null;
                          },
                          onFieldSubmitted: (_) => onFieldSubmitted(),
                        );
                      },
                      optionsViewBuilder: (BuildContext context,
                          AutocompleteOnSelected<String> onSelected,
                          Iterable<String> options) {
                        return Align(
                          alignment: Alignment.topLeft,
                          child: Material(
                            elevation: 4.0,
                            child: ConstrainedBox(
                              constraints: BoxConstraints(
                                  maxHeight: 300,
                                  maxWidth: MediaQuery.of(context).size.width - 40 > 0
                                      ? MediaQuery.of(context).size.width - 40
                                      : 300),
                              child: ListView.builder(
                                padding: EdgeInsets.zero,
                                itemCount: options.length,
                                shrinkWrap: true,
                                itemBuilder: (BuildContext context, int index) {
                                  final String option = options.elementAt(index);
                                  return InkWell(
                                    onTap: () {
                                      onSelected(option);
                                    },
                                    child: Padding(
                                      padding: const EdgeInsets.all(16.0),
                                      child: Text(option),
                                    ),
                                  );
                                },
                              ),
                            ),
                          ),
                        );
                      },
                    )
                  else
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 12.0),
                      child: Text(OccasionSettingsStrings.timezonesLoading),
                    ),
                  const SizedBox(height: 24),
                  if (_canEdit)
                    Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        ElevatedButton.icon(
                          icon: _isSaving
                              ? const SizedBox.shrink()
                              : const Icon(Icons.save, size: 18),
                          label: _isSaving
                              ? const SizedBox(
                                  width: 20,
                                  height: 20,
                                  child: CircularProgressIndicator(strokeWidth: 2))
                              : Text(CommonStrings.save),
                          onPressed: _isSaving ? null : _saveSettings,
                        ),
                      ],
                    ),
                  const SizedBox(height: 24),
                  if (_canEdit)
                    ListTile(
                      leading: const Icon(Icons.account_balance),
                      title: Text(BankAccountStrings.bankAccountsTitle),
                      trailing: const Icon(Icons.chevron_right),
                      onTap: () {
                        Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (context) => UnitBankAccountsScreen(unitId: _unit.id!),
                          ),
                        );
                      },
                    ),
                  const SizedBox(height: 80),
                  if (_versionInfo.isNotEmpty)
                    Padding(
                      padding: const EdgeInsets.only(bottom: 24.0),
                      child: Center(
                        child: Text(
                          "Version: $_versionInfo",
                          style: Theme.of(context).textTheme.bodySmall,
                        ),
                      ),
                    ),
                  ],
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
