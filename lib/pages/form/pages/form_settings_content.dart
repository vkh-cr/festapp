import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:auto_route/auto_route.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services_eshop/db_forms.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/widgets/html_view.dart';

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
  final ValueNotifier<String> _htmlNotifier = ValueNotifier<String>("");

  bool _isCardDesign = false;
  String? _linkError;
  bool _isLoading = true;

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
    _htmlNotifier.dispose();
    super.dispose();
  }

  String _generateFormHtml(String? link) {
    if (link == null || link.isEmpty) return "";
    final fullUrl = "${AppConfig.webLink}/#/form/$link";
    return '''
       <p>${FeaturesStrings.formAvailableAt}:<br>
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
      _isCardDesign = _form!.data?[FormModel.metaIsCardDesign] as bool? ?? false;
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
        _linkError = FeaturesStrings.validationLinkRequired;
      } else if (!Utilities.isValidUrl(value)) {
        _linkError = FeaturesStrings.validationLinkInvalidChars;
      } else {
        _linkError = null;
      }
    });
  }

  Future<void> _saveChanges(BuildContext currentContext) async {
    _validateLink(_linkController.text);
    if (!_formKey.currentState!.validate() || _linkError != null) {
      ToastHelper.Show(currentContext, FeaturesStrings.errorFixBeforeSave, severity: ToastSeverity.NotOk);
      return;
    }
    if (_form == null) return;

    final trimmedTitle = _titleController.text.trim();
    _form!.title = trimmedTitle.isEmpty ? null : trimmedTitle;
    _form!.link = _linkController.text.trim();
    _form!.data ??= {};
    _form!.data![FormModel.metaIsCardDesign] = _isCardDesign;
    final days = int.tryParse(_deadlineDaysController.text);
    if (days != null && days > 0) {
      _form!.deadlineDurationSeconds = days * 24 * 60 * 60;
    } else {
      _form!.deadlineDurationSeconds = null;
    }

    try {
      await DbForms.updateForm(_form!);
      if (!mounted) return;
      ToastHelper.Show(currentContext, "${"Saved".tr()}: ${_form?.title ?? ""}", severity: ToastSeverity.Ok);
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
      ToastHelper.Show(currentContext, "${"Deleted".tr()}: ${_form!.title ?? _form!.link}");
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
        title: Text(FeaturesStrings.deleteFormTitle),
        content: Text(FeaturesStrings.deleteFormContent),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(false),
            child: Text("Storno".tr()),
          ),
          TextButton(
            onPressed: () => Navigator.of(context).pop(true),
            child: Text("Delete".tr(), style: TextStyle(color: ThemeConfig.redColor(context))),
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
    return Scaffold(
      body: Builder(
        builder: (innerContext) {
          return _isLoading
              ? const Center(child: CircularProgressIndicator())
              : _form == null
              ? Center(child: Text(FeaturesStrings.formNotFound))
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
                        Text(FeaturesStrings.formSettingsTitle, style: Theme.of(innerContext).textTheme.headlineSmall),
                        const SizedBox(height: 24),
                        TextFormField(
                          controller: _titleController,
                          decoration: InputDecoration(
                            labelText: FeaturesStrings.labelFormTitle,
                            border: const OutlineInputBorder(),
                          ),
                        ),
                        const SizedBox(height: 24),
                        TextFormField(
                          controller: _linkController,
                          decoration: InputDecoration(
                            labelText: FeaturesStrings.labelFormLink,
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
                            labelText: FeaturesStrings.labelDeadlineDays,
                            border: const OutlineInputBorder(),
                            helperText: FeaturesStrings.helperDeadlineDays,
                          ),
                          keyboardType: TextInputType.number,
                          inputFormatters: [
                            FilteringTextInputFormatter.digitsOnly
                          ],
                        ),
                        const SizedBox(height: 24),
                        SwitchListTile(
                          title: Text(FeaturesStrings.labelCardDesign),
                          subtitle: Text(FeaturesStrings.subtitleCardDesign),
                          value: _isCardDesign,
                          onChanged: RightsService.canEditOccasion()
                              ? (value) {
                            setState(() {
                              _isCardDesign = value;
                            });
                          }
                              : null,
                          contentPadding: EdgeInsets.zero,
                        ),
                        const SizedBox(height: 48),
                        if (RightsService.canEditOccasion())
                          Center(
                            child: TextButton(
                              onPressed: () => _confirmDelete(innerContext),
                              child: Text(
                                FeaturesStrings.deleteFormTitle,
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
                      child: Text("Storno".tr()),
                    ),
                    const SizedBox(width: 16),
                    ElevatedButton(
                      onPressed: RightsService.canEditOccasion() ? () => _saveChanges(innerContext) : null,
                      child: Text("Save changes".tr()),
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