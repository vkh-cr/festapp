import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:auto_route/auto_route.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/form_feature.dart';
import 'package:fstapp/components/forms/widgets_view/form_helper.dart';
import 'package:fstapp/components/forms/models/form_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/forms/db_forms.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/components/html/html_view.dart';

import '../form_strings.dart';
import 'package:fstapp/components/_shared/common_strings.dart';

class FormSettingsContent extends StatefulWidget {
  final String? formLink;
  final VoidCallback? onActionCompleted;
  final VoidCallback? onDataUpdated;
  const FormSettingsContent({super.key, this.formLink, this.onActionCompleted, this.onDataUpdated});

  @override
  _FormSettingsContentState createState() => _FormSettingsContentState();
}

class _FormSettingsContentState extends State<FormSettingsContent> {
  final _formKey = GlobalKey<FormState>();
  FormModel? _form;
  String? _formLink;

  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _linkController = TextEditingController();
  final TextEditingController _deadlineDaysController = TextEditingController();
  final TextEditingController _startingNumberController = TextEditingController();
  final ValueNotifier<String> _htmlNotifier = ValueNotifier<String>("");


  bool _isReminderEnabled = false;
  late FormFeature _formFeature;
  String? _linkError;
  bool _isLoading = true;

  String _variableSymbolType = 'random';
  String _paymentMessageType = 'name_surname';
  String _communicationTone = 'formal';

  @override
  void initState() {
    super.initState();
    _formFeature = FeatureService.getFeatureDetails(FeatureConstants.form) as FormFeature;
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final newFormLink = widget.formLink ?? context.routeData.params.getString("formLink");
    if (newFormLink != _formLink) {
      _formLink = newFormLink;
      _loadData();
    }
  }

  @override
  void dispose() {
    _titleController.dispose();
    _linkController.removeListener(_updateHtml);
    _linkController.dispose();
    _deadlineDaysController.dispose();
    _startingNumberController.dispose();
    _htmlNotifier.dispose();
    super.dispose();
  }

  String _generateFormHtml(String? link) {
    if (link == null || link.isEmpty) return "";
    final fullUrl = "${AppConfig.webLink}/form/$link";
    return '''
       <p>${FormStrings.formAvailableAt}:<br>
       <a href="$fullUrl">$fullUrl</a></p>
     ''';
  }

  void _updateHtml() {
    _htmlNotifier.value = _generateFormHtml(_linkController.text);
  }

  Future<void> _loadData() async {
    if (_formLink == null) return;
    if (mounted) {
      setState(() => _isLoading = true);
    }
    final bundle = await DbForms.getFormForEdit(_formLink!);
    if (!mounted) return;

    if (bundle != null) {
      _form = bundle.form;
      _titleController.text = _form!.title ?? '';
      _linkController.text = _form!.link ?? '';
      _htmlNotifier.value = _generateFormHtml(_linkController.text);
      _linkController.removeListener(_updateHtml);
      _linkController.addListener(_updateHtml);
      _isReminderEnabled = _form!.data?[FormModel.metaIsReminderEnabled] as bool? ?? false;

      final vsData = _form!.data?[FormModel.metaVariableSymbol] as Map<String, dynamic>?;
      _variableSymbolType = vsData?[FormModel.metaType] as String? ?? 'random';
      if (_variableSymbolType == 'sequence') {
        final startNum = vsData?[FormModel.metaStartingNumber];
        _startingNumberController.text = startNum?.toString() ?? '';
      } else {
        _startingNumberController.text = '';
      }

      final msgData = _form!.data?[FormModel.metaPaymentMessage] as Map<String, dynamic>?;
      _paymentMessageType = msgData?[FormModel.metaType] as String? ?? 'name_surname';

      _communicationTone = _form!.data?[FormHelper.metaCommunicationTone] as String? ?? 'formal';

      if (_form!.deadlineDurationSeconds != null && _form!.deadlineDurationSeconds! > 0) {
        final days = (_form!.deadlineDurationSeconds! / (24 * 3600)).round();
        _deadlineDaysController.text = days.toString();
      } else {
        _deadlineDaysController.text = '';
      }
    } else {
      _form = null;
    }
    setState(() => _isLoading = false);
  }


  void _validateLink(String? value) {
    setState(() {
      if (value == null || value.isEmpty) {
        _linkError = FormStrings.validationLinkRequired;
      } else if (!Utilities.isValidUrl(value)) {
        _linkError = FormStrings.validationLinkInvalidChars;
      } else {
        _linkError = null;
      }
    });
  }

  Future<void> _saveChanges(BuildContext currentContext) async {
    _validateLink(_linkController.text);
    if (!_formKey.currentState!.validate() || _linkError != null) {
      ToastHelper.Show(currentContext, FormStrings.errorFixBeforeSave, severity: ToastSeverity.NotOk);
      return;
    }
    if (_form == null) return;

    final trimmedTitle = _titleController.text.trim();
    _form!.title = trimmedTitle.isEmpty ? null : trimmedTitle;
    _form!.link = _linkController.text.trim();
    _form!.data ??= {};
    _form!.data![FormModel.metaIsReminderEnabled] = _isReminderEnabled;

    if (_variableSymbolType == 'sequence') {
      final startingNumber = int.tryParse(_startingNumberController.text);
      _form!.data![FormModel.metaVariableSymbol] = {
        FormModel.metaType: 'sequence',
        FormModel.metaStartingNumber: startingNumber,
      };
    } else {
      _form!.data![FormModel.metaVariableSymbol] = {
        FormModel.metaType: 'random',
      };
    }

    _form!.data![FormModel.metaPaymentMessage] = {
      FormModel.metaType: _paymentMessageType,
    };

    _form!.data![FormHelper.metaCommunicationTone] = _communicationTone;

    final days = int.tryParse(_deadlineDaysController.text);
    if (days != null && days > 0) {
      _form!.deadlineDurationSeconds = days * 24 * 60 * 60;
    } else {
      _form!.deadlineDurationSeconds = null;
    }

    try {
      await DbForms.updateForm(_form!);
      if (!mounted) return;
      ToastHelper.Show(currentContext, "${CommonStrings.saved}: ${_form?.title ?? ""}", severity: ToastSeverity.Ok);
      if (_formLink != _form!.link) {
        setState(() {
          _formLink = _form!.link;
        });
      }
      await _loadData();
      widget.onDataUpdated?.call();
    } catch (e) {
      if (!mounted) return;
      final errorMessage = e.toString().replaceFirst("Exception: ", "");
      if(errorMessage.toLowerCase().contains("link")){
        setState(() => _linkError = errorMessage);
      } else {
        ToastHelper.Show(currentContext, errorMessage, severity: ToastSeverity.NotOk);
      }
    }
  }

  void _cancelEdit() {
    widget.onActionCompleted?.call();
  }

  Future<void> _deleteForm(BuildContext currentContext) async {
    try {
      await DbForms.deleteForm(_form!.id!);
      if (!mounted) return;
      ToastHelper.Show(currentContext, "${CommonStrings.deleted}: ${_form!.title ?? _form!.link}");
      widget.onActionCompleted?.call();
    }
    catch (e) {
      if (!mounted) return;
      ToastHelper.Show(currentContext, e.toString().replaceFirst("Exception: ", ""), severity: ToastSeverity.NotOk);
    }
  }

  Future<void> _confirmDelete(BuildContext currentContext) async {
    bool? confirm = await showDialog<bool>(
      context: currentContext,
      builder: (context) => AlertDialog(
        insetPadding: const EdgeInsets.all(16.0),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.0)),
        title: Text(FormStrings.deleteFormTitle),
        content: Text(FormStrings.deleteFormContent),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(false),
            child: Text(CommonStrings.storno),
          ),
          TextButton(
            onPressed: () => Navigator.of(context).pop(true),
            child: Text(CommonStrings.delete, style: TextStyle(color: ThemeConfig.redColor(context))),
          ),
        ],
      ),
    );
    if (confirm == true) {
      await _deleteForm(currentContext);
    }
  }

  @override
  Widget build(BuildContext context) {
    final bool isReminderFeatureEnabled = _formFeature.isEnabled && (_formFeature.reminderIsEnabled ?? false);

    return Scaffold(
      body: Builder(
        builder: (innerContext) {
          return _isLoading
              ? const Center(child: CircularProgressIndicator())
              : _form == null
              ? Center(child: Text(FormStrings.formNotFound))
              : Align(
            alignment: Alignment.topCenter,
            child: ConstrainedBox(
              constraints: BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
              child: SingleChildScrollView(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Form(
                    key: _formKey,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(FormStrings.formSettingsTitle, style: Theme.of(innerContext).textTheme.headlineSmall),
                        const SizedBox(height: 24),
                        SwitchListTile(
                          title: Text(FormStrings.labelEnableReminders),
                          subtitle: Text(!isReminderFeatureEnabled
                              ? FormStrings.subtitleRemindersDisabled
                              : FormStrings.subtitleEnableReminders),
                          value: _isReminderEnabled,
                          onChanged: isReminderFeatureEnabled
                              ? (value) {
                            setState(() {
                              _isReminderEnabled = value;
                            });
                          }
                              : null,
                          contentPadding: EdgeInsets.zero,
                        ),
                        const SizedBox(height: 24),
                        TextFormField(
                          controller: _titleController,
                          decoration: InputDecoration(
                            labelText: FormStrings.labelFormTitle,
                            border: const OutlineInputBorder(),
                          ),
                        ),
                        const SizedBox(height: 24),
                        TextFormField(
                          controller: _linkController,
                          decoration: InputDecoration(
                            labelText: FormStrings.labelFormLink,
                            border: const OutlineInputBorder(),
                            errorText: _linkError,
                          ),
                          onChanged: _validateLink,
                        ),
                        const SizedBox(height: 16),
                        ValueListenableBuilder<String>(
                          valueListenable: _htmlNotifier,
                          builder: (context, htmlContent, child) {
                            if (htmlContent.isEmpty) return const SizedBox.shrink();
                            return Padding(
                              padding: const EdgeInsets.symmetric(horizontal: 12.0),
                              child: HtmlView(
                                isSelectable: true,
                                fontSize: 12,
                                html: htmlContent,
                              ),
                            );
                          },
                        ),
                        const SizedBox(height: 24),
                        TextFormField(
                          controller: _deadlineDaysController,
                          decoration: InputDecoration(
                            labelText: FormStrings.labelDeadlineDays,
                            border: const OutlineInputBorder(),
                            helperText: FormStrings.helperDeadlineDays,
                            helperMaxLines: 5,
                          ),
                          keyboardType: TextInputType.number,
                          inputFormatters: [
                            FilteringTextInputFormatter.digitsOnly
                          ],
                        ),

                        const SizedBox(height: 24),
                        const Divider(),
                        const SizedBox(height: 16),
                        Text(FormStrings.paymentDetailsTitle, style: Theme.of(innerContext).textTheme.titleLarge),
                        const SizedBox(height: 24),

                        DropdownButtonFormField<String>(
                          value: _variableSymbolType,
                          decoration: InputDecoration(
                            labelText: FormStrings.labelVariableSymbol,
                            border: const OutlineInputBorder(),
                          ),
                          items: [
                            DropdownMenuItem(value: 'random', child: Text(FormStrings.vsTypeRandom)),
                            DropdownMenuItem(value: 'sequence', child: Text(FormStrings.vsTypeSequence)),
                          ],
                          onChanged: (value) {
                            if (value != null) {
                              setState(() {
                                _variableSymbolType = value;
                              });
                            }
                          },
                        ),
                        const SizedBox(height: 16),

                        Visibility(
                          visible: _variableSymbolType == 'sequence',
                          child: Padding(
                            padding: const EdgeInsets.only(bottom: 24.0),
                            child: TextFormField(
                              controller: _startingNumberController,
                              decoration: InputDecoration(
                                labelText: FormStrings.labelStartingNumber,
                                border: const OutlineInputBorder(),
                                helperText: FormStrings.helperStartingNumber,
                                counterText: "",
                              ),
                              keyboardType: TextInputType.number,
                              maxLength: 10,
                              inputFormatters: [
                                FilteringTextInputFormatter.digitsOnly,
                                LengthLimitingTextInputFormatter(10),
                              ],
                            ),
                          ),
                        ),

                        DropdownButtonFormField<String>(
                          value: _paymentMessageType,
                          decoration: InputDecoration(
                            labelText: FormStrings.labelPaymentMessage,
                            border: const OutlineInputBorder(),
                          ),
                          items: [
                            DropdownMenuItem(value: 'name_surname', child: Text(FormStrings.msgTypeNameSurname)),
                            DropdownMenuItem(value: 'none', child: Text(FormStrings.msgTypeNone)),
                            DropdownMenuItem(value: 'occasion_title', child: Text(FormStrings.msgTypeOccasionTitle)),
                          ],
                          onChanged: (value) {
                            if (value != null) {
                              setState(() {
                                _paymentMessageType = value;
                              });
                            }
                          },
                        ),

                        const SizedBox(height: 24),
                        const Divider(),
                        const SizedBox(height: 16),



                        const SizedBox(height: 24),
                        const Divider(),
                        const SizedBox(height: 16),

                        Text(
                            FormStrings.communicationToneTitle,
                            style: Theme.of(innerContext).textTheme.titleLarge
                        ),
                        const SizedBox(height: 8),
                        Text(
                          FormStrings.helperCommunicationTone,
                          style: Theme.of(context).textTheme.bodyMedium,
                        ),
                        const SizedBox(height: 24),

                        DropdownButtonFormField<String>(
                          initialValue: _communicationTone,
                          decoration: InputDecoration(
                            labelText: FormStrings.labelCommunicationTone,
                            border: const OutlineInputBorder(),
                          ),
                          items: [
                            DropdownMenuItem(
                                value: 'formal',
                                child: Text(FormStrings.toneFormal)
                            ),
                            DropdownMenuItem(
                                value: 'informal',
                                child: Text(FormStrings.toneInformal)
                            ),
                          ],
                          onChanged: (value) {
                            if (value != null) {
                              setState(() {
                                _communicationTone = value;
                              });
                            }
                          },
                        ),

                        const SizedBox(height: 48),
                        if (RightsService.canEditOccasion())
                          Center(
                            child: TextButton(
                              onPressed: () => _confirmDelete(innerContext),
                              child: Text(
                                FormStrings.deleteFormTitle,
                                style: TextStyle(color: ThemeConfig.redColor(innerContext)),
                              ),
                            ),
                          ),
                        const SizedBox(height: 48),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          );
        },
      ),
      bottomNavigationBar: Builder(
          builder: (innerContext) {
            return Container(
              color: ThemeConfig.appBarColor(),
              padding: const EdgeInsets.all(10),
              child: SafeArea(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    TextButton(
                      onPressed: _cancelEdit,
                      child: Text(CommonStrings.storno),
                    ),
                    const SizedBox(width: 16),
                    ElevatedButton(
                      onPressed: RightsService.canEditOccasion() ? () => _saveChanges(innerContext) : null,
                      child: Text(CommonStrings.save),
                    ),
                  ],
                ),
              ),
            );
          }
      ),
    );
  }
}