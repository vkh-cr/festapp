import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services_eshop/db_forms.dart';
import 'package:fstapp/pages/form/pages/form_page.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/html_view.dart';
import 'package:fstapp/pages/utility/html_editor_page.dart';
import 'package:easy_localization/easy_localization.dart';

import '../widgets_editor/form_fields_generator.dart';

/// Global constant for hidden item opacity
const double kHiddenOpacity = 0.5;

class FormEditorContent extends StatefulWidget {
  const FormEditorContent({super.key});

  @override
  _FormEditorContentState createState() => _FormEditorContentState();
}

class _FormEditorContentState extends State<FormEditorContent> {
  FormModel? form;
  String? formLink;
  final ScrollController _scrollController = ScrollController();

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (formLink == null && context.routeData.params.isNotEmpty) {
      formLink = context.routeData.params.getString("formLink");
    }
    loadData();
  }

  Future<void> loadData() async {
    form = await DbForms.getFormForEdit(formLink!);
    if (mounted) {
      setState(() {});
    }
  }

  Future<void> saveChanges() async {
    if (form == null || form!.relatedFields == null) return;
    // Update order for form fields
    form!.relatedFields!
        .sort((a, b) => (a.order ?? 0).compareTo(b.order ?? 0));
    for (int i = 0; i < form!.relatedFields!.length; i++) {
      form!.relatedFields![i].order = i;
    }

    // Update order for products within each product type field
    for (final field in form!.relatedFields!) {
      if (field.isTicketField == true &&
          field.type == FormHelper.fieldTypeProductType &&
          field.productType != null &&
          field.productType!.products != null) {
        field.productType!.products!
            .sort((a, b) => (a.order ?? 0).compareTo(b.order ?? 0));
        for (int i = 0; i < field.productType!.products!.length; i++) {
          field.productType!.products![i].order = i;
        }
      }
    }

    await DbForms.updateForm(context, form!);
    ToastHelper.Show(context, "${"Saved".tr()}: ${form?.link}");
    loadData();
  }

  void cancelEdit() {
    Navigator.of(context).pop();
  }

  List<String> get _availableFieldTypes {
    final existingTypes = form?.relatedFields?.map((f) => f.type).toList() ?? [];
    return FormHelper.fieldTypeIcons.keys.where((type) {
      if ([
        FormHelper.fieldTypeText,
        FormHelper.fieldTypeSelectOne,
        FormHelper.fieldTypeSelectMany,
      ].contains(type)) {
        return true;
      }
      return !existingTypes.contains(type);
    }).toList();
  }

  Widget _buildFormOpenToggleAndOffTextEditor() {
    if (form == null) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 12.0),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("Form is open".tr()),
              Switch(
                value: form!.isOpen ?? true,
                onChanged: RightsService.canEditOccasion()
                    ? (value) {
                  if (mounted) {
                    setState(() {
                      form!.isOpen = value;
                    });
                  }
                }
                    : null,
              ),
            ],
          ),
          if (!(form!.isOpen ?? true)) ...[
            const SizedBox(height: 12),
            Text(
              "This form is currently turned off".tr(),
              textAlign: TextAlign.center,
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                color: ThemeConfig.redColor(context),
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            const Divider(
              thickness: 1,
              color: Colors.grey,
            ),
            if (form!.headerOff?.isNotEmpty ?? false)
              IntrinsicWidth(
                child: HtmlView(
                  html: form!.headerOff!,
                  isSelectable: true,
                ),
              ),
            const SizedBox(height: 16),
            Center(
              child: ElevatedButton.icon(
                icon: const Icon(Icons.edit),
                label: Text("Edit off text".tr()),
                onPressed: () async {
                  final result = await RouterService.navigatePageInfo(
                    context,
                    HtmlEditorRoute(
                        content: {HtmlEditorPage.parContent: form!.headerOff ?? ''},
                        occasionId: form!.occasion),
                  );
                  if (result != null && mounted) {
                    setState(() => form!.headerOff = result as String);
                  }
                },
              ),
            ),
          ],
        ],
      ),
    );
  }

  void _addNewField() async {
    if (form == null) return;

    final availableTypes = _availableFieldTypes;
    final personalInfoTypes = FormHelper.personalInfoFields
        .where((type) => availableTypes.contains(type))
        .toList();
    final otherTypes = availableTypes
        .where((type) => !FormHelper.personalInfoFields.contains(type))
        .toList();

    String? finalSelectedType;
    bool isWideScreen = MediaQuery.of(context).size.width > 600;

    finalSelectedType = await showDialog<String>(
      context: context,
      builder: (BuildContext dialogContext) {
        List<Widget> resolvedItemsForDialog = [];
        if (personalInfoTypes.isNotEmpty) {
          resolvedItemsForDialog.add(
              PopupMenuButton<String>(
                tooltip: "Personal Info".tr(),
                offset: isWideScreen ? const Offset(230, 0) : Offset.zero, // Modified Offset
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.0)),
                onSelected: (String type) {
                  Navigator.of(dialogContext).pop(type);
                },
                itemBuilder: (BuildContext popupContext) {
                  return personalInfoTypes.map((type) {
                    return PopupMenuItem<String>(
                      value: type,
                      child: Row(
                        children: [
                          Icon(FormHelper.fieldTypeIcons[type] ?? Icons.circle_outlined, size: 20, color: Theme.of(context).textTheme.bodyLarge?.color),
                          const SizedBox(width: 12),
                          Text(FormHelper.fieldTypeToLocale(type)),
                        ],
                      ),
                    );
                  }).toList();
                },
                child: ListTile(
                  leading: Icon(Icons.person_search_outlined, size: 20, color: Theme.of(context).textTheme.bodyLarge?.color),
                  title: Text("Personal Info".tr()),
                  trailing: Icon(Icons.chevron_right, color: Theme.of(context).textTheme.bodyLarge?.color),
                  dense: true,
                ),
              )
          );
          resolvedItemsForDialog.add(const Divider(height: 1, thickness: 0.5));
        }

        resolvedItemsForDialog.addAll(otherTypes.map((type) {
          return ListTile(
            leading: Icon(FormHelper.fieldTypeIcons[type] ?? Icons.circle_outlined, size: 20, color: Theme.of(context).textTheme.bodyLarge?.color),
            title: Text(FormHelper.fieldTypeToLocale(type)),
            dense: true,
            onTap: () {
              Navigator.of(dialogContext).pop(type);
            },
          );
        }).toList());

        if (resolvedItemsForDialog.isEmpty) {
          resolvedItemsForDialog.add(
              Center(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Text("No fields available to add.".tr()),
                ),
              )
          );
        }


        return AlertDialog(
          title: Text("Add Field".tr()),
          contentPadding: const EdgeInsets.symmetric(vertical: 8.0),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.0)),
          content: SizedBox(
            width: 280, // You might want to make this responsive or remove fixed width
            child: ListView(
              shrinkWrap: true,
              children: resolvedItemsForDialog,
            ),
          ),
        );
      },
    );


    if (finalSelectedType != null) {
      _addFieldOfType(finalSelectedType);
    }
  }

  void _addFieldOfType(String type) {
    if (!mounted || form == null || form!.relatedFields == null) return;

    final newField = FormFieldModel(
      title: FormHelper.fieldTypeToLocale(type),
      type: type,
      order: form!.relatedFields!.length,
      isRequired: FormHelper.isAlwaysRequired(type),
      isHidden: false,
      isTicketField: false,
    );

    setState(() {
      // Create a new list instance to ensure Flutter detects the change.
      form!.relatedFields = List.from(form!.relatedFields!)..add(newField);
    });

    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_scrollController.hasClients) {
        _scrollController.animateTo(
          _scrollController.position.maxScrollExtent,
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeInOut,
        );
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButtonLocation: FloatingActionButtonLocation.endDocked,
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            heroTag: "viewFormFab",
            onPressed: () {
              RouterService.navigate(context, "${FormPage.ROUTE}/$formLink");
            },
            child: const Icon(Icons.remove_red_eye_rounded),
          ),
          const SizedBox.square(dimension: 12),
          if (RightsService.canEditOccasion())
            FloatingActionButton(
              heroTag: "addFieldFab",
              onPressed: _addNewField,
              tooltip: 'Add Field'.tr(),
              child: const Icon(Icons.add),
            ),
          const SizedBox.square(dimension: 64),
        ],
      ),
      body: form == null
          ? const Center(child: CircularProgressIndicator())
          : Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
          child: SingleChildScrollView(
            controller: _scrollController,
            child: Padding(
              padding: const EdgeInsets.all(6),
              child: Column(
                children: [
                  _buildFormOpenToggleAndOffTextEditor(),
                  const Divider(
                    thickness: 1,
                    color: Colors.grey,
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      if (form!.header?.isNotEmpty ?? false)
                        HtmlView(html: form!.header!, isSelectable: true),
                      const SizedBox(height: 16),
                      Center(
                        child: ElevatedButton.icon(
                          icon: const Icon(Icons.edit),
                          label: Text("Edit content".tr()),
                          onPressed: () async {
                            final result = await RouterService.navigatePageInfo(
                              context,
                              HtmlEditorRoute(
                                  content: {HtmlEditorPage.parContent: form!.header ?? ""},
                                  occasionId: form!.occasion),
                            );
                            if (result != null && mounted) {
                              setState(() => form!.header = result as String);
                            }
                          },
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const SizedBox(height: 8),
                      Text(
                        "Drag to reorder fields".tr(),
                        style: Theme.of(context).textTheme.bodySmall,
                      ),
                    ],
                  ),
                  const SizedBox(height: 16),
                  // Delegate the field‐generation UI to the separate widget.
                  FormFieldsGenerator(form: form!),
                  const SizedBox(height: 102),
                ],
              ),
            ),
          ),
        ),
      ),
      bottomNavigationBar: Container(
        color: ThemeConfig.appBarColor(),
        padding: const EdgeInsets.all(10),
        child: SafeArea(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              TextButton(
                onPressed:
                RightsService.canEditOccasion() ? cancelEdit : null,
                child: Text("Storno".tr()),
              ),
              const SizedBox(width: 16),
              ElevatedButton(
                onPressed:
                RightsService.canEditOccasion() ? saveChanges : null,
                child: Text("Save changes".tr()),
              ),
            ],
          ),
        ),
      ),
    );
  }
}