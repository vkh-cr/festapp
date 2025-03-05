import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataServicesEshop/DbForms.dart';
import 'package:fstapp/pages/form/pages/form_page.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:fstapp/pages/utility/HtmlEditorPage.dart';
import 'package:easy_localization/easy_localization.dart';

import '../widgets_editor/form_fields_generator.dart';


/// Global constant for hidden item opacity
const double kHiddenOpacity = 0.5;

/// Global constant for the available field type icons
const Map<String, IconData> fieldTypeIcons = {
  FormHelper.fieldTypeText: Icons.text_fields,
  FormHelper.fieldTypeSelectOne: Icons.radio_button_checked,
  FormHelper.fieldTypeSelectMany: Icons.check_box_outlined,
  FormHelper.fieldTypeEmail: Icons.email,
  FormHelper.fieldTypeName: Icons.person,
  FormHelper.fieldTypeSurname: Icons.person_outline,
  FormHelper.fieldTypeSex: Icons.wc,
  FormHelper.fieldTypeCity: Icons.location_city,
  FormHelper.fieldTypeBirthYear: Icons.cake,
  FormHelper.fieldTypeNote: Icons.note,
  FormHelper.fieldTypeSpot: Icons.event_seat,
  FormHelper.fieldTypeProductType: Icons.category,
  FormHelper.fieldTypeTicket: Icons.confirmation_number,
};

class FormEditorContent extends StatefulWidget {
  const FormEditorContent({super.key});

  @override
  _FormEditorContentState createState() => _FormEditorContentState();
}

class _FormEditorContentState extends State<FormEditorContent> {
  FormModel? form;
  String? formLink;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (formLink == null && context.routeData.pathParams.isNotEmpty) {
      formLink = context.routeData.pathParams.getString("formLink");
    }
    loadData();
  }

  Future<void> loadData() async {
    form = await DbForms.getFormForEdit(formLink!);
    setState(() {});
  }

  Future<void> saveChanges() async {
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

  /// Filter available field types for brand-new fields
  List<String> get _availableFieldTypes {
    final existingTypes = form?.relatedFields?.map((f) => f.type).toList() ?? [];
    return fieldTypeIcons.keys.where((type) {
      // These types can appear multiple times
      if ([
        FormHelper.fieldTypeText,
        FormHelper.fieldTypeSelectOne,
        FormHelper.fieldTypeSelectMany,
      ].contains(type)) {
        return true;
      }
      // Single-occurrence types cannot appear if they already do
      return !existingTypes.contains(type);
    }).toList();
  }

  Widget _buildFormOpenToggleAndOffTextEditor() {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 12.0),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Center the switch + text
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("Form is open".tr()),
              Switch(
                value: form!.isOpen ?? true,
                onChanged: RightsService.canEditOccasion()
                    ? (value) {
                  setState(() {
                    form!.isOpen = value;
                  });
                }
                    : null,
              ),
            ],
          ),
          // If form is off => show the red text + footer editor
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
                    ),
                  );
                  if (result != null) {
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

  /// Adds a new field of a selected type.
  void _addNewField() async {
    final selectedType = await showDialog<String>(
      context: context,
      builder: (context) => SimpleDialog(
        title: Text("Add Field".tr()),
        children: _availableFieldTypes.map((type) {
          return SimpleDialogOption(
            onPressed: () => Navigator.pop(context, type),
            child: Row(
              children: [
                Icon(fieldTypeIcons[type]),
                const SizedBox(width: 12),
                Text(FormHelper.fieldTypeToLocale(type)),
              ],
            ),
          );
        }).toList(),
      ),
    );

    if (selectedType != null) {
      setState(() {
        form!.relatedFields!.add(
          FormFieldModel(
            title: FormHelper.fieldTypeToLocale(selectedType),
            type: selectedType,
            order: form!.relatedFields!.length,
            isRequired: false,
            isHidden: false,
            isTicketField: false,
          ),
        );
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButtonLocation: FloatingActionButtonLocation.endDocked,
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            onPressed: () {
              RouterService.navigate(
                  context, "${FormPage.ROUTE}/$formLink");
            },
            child: const Icon(Icons.remove_red_eye_rounded),
          ),
          const SizedBox.square(dimension: 12),
          if (RightsService.canEditOccasion())
            FloatingActionButton(
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
                      HtmlView(html: form!.header ?? "", isSelectable: true),
                      const SizedBox(height: 16),
                      Center(
                        child: ElevatedButton.icon(
                          icon: const Icon(Icons.edit),
                          label: Text("Edit content".tr()),
                          onPressed: () async {
                            final result = await RouterService
                                .navigatePageInfo(
                              context,
                              HtmlEditorRoute(
                                content: {
                                  HtmlEditorPage.parContent: form!.header ?? ""
                                },
                              ),
                            );
                            if (result != null) {
                              setState(() =>
                              form!.header = result as String);
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
