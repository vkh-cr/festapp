import 'dart:math';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/dataModelsEshop/ProductTypeModel.dart';
import 'package:fstapp/dataServicesEshop/DbForms.dart';
import 'package:fstapp/pages/Eshop/FormPage.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:fstapp/pages/HtmlEditorPage.dart';
import 'package:easy_localization/easy_localization.dart';

/// Global constant for hidden item opacity
const double kHiddenOpacity = 0.5;

class FormEditorContent extends StatefulWidget {
  const FormEditorContent({Key? key}) : super(key: key);

  @override
  _FormEditorContentState createState() => _FormEditorContentState();
}

class _FormEditorContentState extends State<FormEditorContent> {
  FormModel? form;
  String? formLink;

  static const Map<String, IconData> fieldTypeIcons = {
    FormHelper.fieldTypeText: Icons.text_fields,
    FormHelper.fieldTypeSelectOne: Icons.radio_button_checked,
    FormHelper.fieldTypeEmail: Icons.email,
    FormHelper.fieldTypeName: Icons.person,
    FormHelper.fieldTypeSurname: Icons.person_outline,
    FormHelper.fieldTypeSex: Icons.wc,
    FormHelper.fieldTypeCity: Icons.location_city,
    FormHelper.fieldTypeBirthYear: Icons.cake,
    FormHelper.fieldTypeNote: Icons.note,
    FormHelper.fieldTypeSpot: Icons.place,
    FormHelper.fieldTypeProductType: Icons.category,
    FormHelper.fieldTypeTicket: Icons.confirmation_number,
  };

  int? selectedIndex;

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
    if (form?.relatedFields?.isNotEmpty ?? false) {
      selectedIndex = 0;
    }
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
        field.productType!.products!.sort((a, b) => (a.order ?? 0).compareTo(b.order ?? 0));
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
      ].contains(type)) {
        return true;
      }
      // single-occurrence types cannot appear if they already do
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
                onChanged: (value) {
                  setState(() {
                    form!.isOpen = value;
                  });
                },
              ),
            ],
          ),

          // If form is off => show the red text + footer editor
          if (!(form!.isOpen ?? true)) ...[
            const SizedBox(height: 12),

            // Center the red "off" text
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
              SizedBox.square(dimension: 12,),
              FloatingActionButton(
              onPressed: _addNewField,
              tooltip: 'Add Field'.tr(),
              child: const Icon(Icons.add),
            ),
            SizedBox.square(dimension: 64,),]),
      body: form == null
          ? const Center(child: CircularProgressIndicator())
          : Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
          child: SingleChildScrollView(
            child: Padding(
              padding: EdgeInsetsDirectional.all(6),
              child: Column(
                children: [
                  _buildFormOpenToggleAndOffTextEditor(),
                  const Divider(
                    thickness: 1,
                    color: Colors.grey,
                  ),
                  if (form?.header != null)
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
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
                                  content: {HtmlEditorPage.parContent: form!.header!},
                                ),
                              );
                              if (result != null) {
                                setState(
                                        () => form!.header = result as String);
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
                  _buildFieldsList(),
                  const SizedBox(height: 52),
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
                onPressed: cancelEdit,
                child: Text("Storno".tr()),
              ),
              const SizedBox(width: 16),
              ElevatedButton(
                onPressed: saveChanges,
                child: Text("Save changes".tr()),
              ),
            ],
          ),
        ),
      ),
    );
  }

  /// Build the list of top-level fields (i.e. those that are NOT isTicketField).
  Widget _buildFieldsList() {
    // Filter out subfields that belong to the ticket
    final topLevelFields =
    form!.relatedFields!.where((f) => f.isTicketField != true).toList();

    return ReorderableListView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      buildDefaultDragHandles: false,
      itemCount: topLevelFields.length,
      itemBuilder: (context, index) {
        final field = topLevelFields[index];
        return _buildFieldItem(context, index, field, topLevelFields);
      },
      onReorder: (oldIndex, newIndex) {
        setState(() {
          if (oldIndex < newIndex) newIndex -= 1;
          final item = topLevelFields.removeAt(oldIndex);
          topLevelFields.insert(newIndex, item);

          // Reapply changes back to form!.relatedFields! in new order
          final updatedList = <FormFieldModel>[];
          // Add all non-ticket fields in updated order
          updatedList.addAll(topLevelFields);
          // Then add the ticket fields (unchanged order)
          updatedList.addAll(
              form!.relatedFields!.where((f) => f.isTicketField == true));
          form!.relatedFields = updatedList;

          // Update order values
          for (int i = 0; i < form!.relatedFields!.length; i++) {
            form!.relatedFields![i].order = i;
          }

          // Update selected index if needed
          if (selectedIndex == oldIndex) {
            selectedIndex = newIndex;
          } else if (selectedIndex != null &&
              selectedIndex! >= newIndex &&
              selectedIndex! < oldIndex) {
            selectedIndex = selectedIndex! + 1;
          }
        });
      },
    );
  }

  /// Builds a single item in the top-level list
  Widget _buildFieldItem(
      BuildContext context,
      int index,
      FormFieldModel field,
      List<FormFieldModel> displayList,
      ) {
    final isSelected = (selectedIndex == index);

    // Wrap the entire card in an opacity if hidden
    final effectiveOpacity = (field.isHidden ?? false) ? kHiddenOpacity : 1.0;

    return GestureDetector(
      key: ValueKey(field.id),
      onTap: () {
        if (!isSelected) {
          setState(() => selectedIndex = index);
        }
      },
      child: Opacity(
        opacity: effectiveOpacity,
        child: Card(
          elevation: isSelected ? 4 : 2,
          margin: const EdgeInsets.symmetric(vertical: 4),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
            side: BorderSide(
              color: isSelected
                  ? Theme.of(context).colorScheme.primary
                  : Colors.grey.withOpacity(0.3),
              width: isSelected ? 2 : 0,
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.all(12.0),
            child: isSelected
                ? _buildFieldItemSelected(field, displayList, index)
                : _buildFieldItemNonSelected(field),
          ),
        ),
      ),
    );
  }

  /// Non-selected (read-only) mode for a single field
  Widget _buildFieldItemNonSelected(FormFieldModel field) {
    final isTicket = (field.type == FormHelper.fieldTypeTicket);
    final isSelectOne = (field.type == FormHelper.fieldTypeSelectOne);

    // For normal fields, we use the local icon if available
    final icon = fieldTypeIcons[field.type];
    final requiredStar = (field.isRequired ?? false)
        ? TextSpan(text: ' *', style: TextStyle(color: ThemeConfig.redColor(context)))
        : null;

    // Handle hidden => strikethrough
    final hidden = (field.isHidden ?? false);
    final titleStyle = hidden
        ? TextStyle(
      decoration: TextDecoration.lineThrough,
      color: Theme.of(context).colorScheme.primary,
      fontWeight: FontWeight.bold,
    )
        : TextStyle(
      color: Theme.of(context).colorScheme.primary,
      fontWeight: FontWeight.bold,
    );

    // If user never set a custom title, fallback to type-locale
    var displayTitle = field.title;
    if (displayTitle?.isEmpty ?? true) {
      displayTitle = FormHelper.fieldTypeToLocale(field.type!);
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Title row
        Row(
          children: [
            if (icon != null) ...[
              Icon(
                icon,
                size: 24,
                color: Theme.of(context).colorScheme.primary,
              ),
              const SizedBox(width: 8),
            ],
            Flexible(
              child: RichText(
                text: TextSpan(
                  style: titleStyle,
                  text: displayTitle,
                  children: [
                    if (requiredStar != null) requiredStar,
                  ],
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 8),

        // If it's a ticket, show read-only product types
        if (isTicket) _buildTicketEditorReadOnly(field),

        // If it's select_one, show read-only options
        if (isSelectOne) _buildSelectOneReadOnly(field),

        // Otherwise, just show a hint for user input (read-only style)
        if (!isTicket && !isSelectOne)
          Text(
            'Answer text'.tr(),
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
              color: Colors.grey,
            ),
          ),
      ],
    );
  }

  /// Selected (editable) mode for a single field
  Widget _buildFieldItemSelected(
      FormFieldModel field,
      List<FormFieldModel> displayList,
      int index,
      ) {
    final isTicket = (field.type == FormHelper.fieldTypeTicket);
    final isAlwaysRequired = FormHelper.isAlwaysRequired(field.type ?? '');
    final disableHideSwitch =
    (isTicket || field.type == FormHelper.fieldTypeEmail);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Drag handle
        Center(
          child: ReorderableDragStartListener(
            index: index,
            child: const Icon(Icons.drag_handle, color: Colors.grey, size: 24),
          ),
        ),
        const SizedBox(height: 8),

        // Title (ticket => non-editable label "Ticket", else => TextFormField)
        if (isTicket) ...[
          Row(
            children: [
              Icon(
                fieldTypeIcons[FormHelper.fieldTypeTicket],
                size: 24,
                color: Theme.of(context).colorScheme.primary,
              ),
              const SizedBox(width: 8),
              Text(
                "Ticket",
                style: Theme.of(context).textTheme.titleMedium?.copyWith(
                  fontWeight: FontWeight.bold,
                  color: Theme.of(context).colorScheme.primary,
                ),
              ).tr(),
            ],
          ),
        ] else ...[
          TextFormField(
            style: Theme.of(context).textTheme.titleMedium?.copyWith(
              fontWeight: FontWeight.bold,
              color: Theme.of(context).colorScheme.primary,
            ),
            decoration: InputDecoration(
              border: const UnderlineInputBorder(),
              hintText: FormHelper.fieldTypeToLocale(field.type ?? ''),
              contentPadding: const EdgeInsets.symmetric(vertical: 8),
            ),
            initialValue: field.title,
            onChanged: (value) => field.title = value,
          ),
        ],

        // If field is NOT ticket and NOT select_one, show a dummy user-input area
        if (!isTicket && field.type != FormHelper.fieldTypeSelectOne)
          Padding(
            padding: const EdgeInsets.only(top: 8.0),
            child: TextFormField(
              decoration: InputDecoration(
                border: const UnderlineInputBorder(),
                hintText: 'Answer text'.tr(),
                contentPadding: const EdgeInsets.symmetric(vertical: 8),
              ),
              style: Theme.of(context).textTheme.bodyLarge,
            ),
          ),

        // Additional editors based on type
        if (field.type == FormHelper.fieldTypeSelectOne)
          Padding(
            padding: const EdgeInsets.only(top: 16.0),
            child: _buildSelectOneEditor(field),
          ),

        if (isTicket)
          Padding(
            padding: const EdgeInsets.only(top: 16.0),
            child: _buildTicketEditor(field),
          ),

        const SizedBox(height: 16),

        // Bottom row of toggles & actions
        Row(
          children: [
            // Type popup (disable if it's a ticket or email - can't change type)
            if (!isTicket && field.type != FormHelper.fieldTypeEmail)
              SizedBox(
                width: 150,
                child: PopupMenuButton<String>(
                  child: Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 12,
                      vertical: 8,
                    ),
                    decoration: BoxDecoration(
                      border: Border.all(color: Colors.grey),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Row(
                      children: [
                        Icon(fieldTypeIcons[field.type], size: 20),
                        const SizedBox(width: 8),
                        Text(FormHelper.fieldTypeToLocale(field.type!)),
                      ],
                    ),
                  ),
                  itemBuilder: (context) {
                    return fieldTypeIcons.entries
                        .where((entry) =>
                        _availableFieldTypes.contains(entry.key))
                        .map((entry) => PopupMenuItem(
                      value: entry.key,
                      child: Row(
                        children: [
                          Icon(entry.value),
                          const SizedBox(width: 8),
                          Text(FormHelper.fieldTypeToLocale(entry.key)),
                        ],
                      ),
                    ))
                        .toList();
                  },
                  onSelected: (newType) => setState(() {
                    // If we change away from selectOne, remove data
                    if (field.type == FormHelper.fieldTypeSelectOne &&
                        newType != FormHelper.fieldTypeSelectOne) {
                      field.data = null;
                      field.options.clear();
                    }

                    field.type = newType;
                    // If user hasn't customized title, use default locale
                    if ((field.title?.isEmpty ?? true)) {
                      field.title = FormHelper.fieldTypeToLocale(newType);
                    }

                    // Force field.isRequired if always required
                    if (FormHelper.isAlwaysRequired(newType)) {
                      field.isRequired = true;
                    }
                  }),
                ),
              ),

            const Spacer(),

            // "Note" checkbox if it's ticket
            if (isTicket) ...[
              Text("Note".tr(), style: Theme.of(context).textTheme.bodySmall),
              const SizedBox(width: 4),
              _buildTicketNoteCheckbox(),
              const SizedBox(width: 16),
            ],

            // Required checkbox
            Row(
              children: [
                Text('Required'.tr(),
                    style: Theme.of(context).textTheme.bodySmall),
                Checkbox(
                  value: isAlwaysRequired || (field.isRequired ?? false),
                  onChanged: isAlwaysRequired
                      ? null
                      : (value) => setState(() => field.isRequired = value),
                ),
              ],
            ),
            const SizedBox(width: 16),

            // Visible switch
            Row(
              children: [
                Text(
                  'Show'.tr(),
                  style: Theme.of(context).textTheme.bodySmall,
                ),
                Switch(
                  value: !(field.isHidden ?? false),
                  // Disable switch (onChanged = null) if disableHideSwitch == true
                  onChanged: disableHideSwitch
                      ? null
                      : (value) => setState(() => field.isHidden = !value),
                ),
              ],
            ),
            const SizedBox(width: 16),

            // Delete Button for brand-new fields (id == null)
            if (field.id == null)
              IconButton(
                icon: Icon(Icons.delete,
                    color: Theme.of(context).iconTheme.color),
                onPressed: () {
                  setState(() {
                    displayList.remove(field);
                    form!.relatedFields!.remove(field);
                    if (selectedIndex == index) {
                      selectedIndex = null;
                    }
                  });
                },
              ),
          ],
        ),
      ],
    );
  }

  /// Builds read-only view for "select_one" type fields
  Widget _buildSelectOneReadOnly(FormFieldModel field) {
    final options = field.options;
    if (options.isEmpty) {
      return Text(
        'No options'.tr(),
        style: Theme.of(context).textTheme.bodyMedium,
      );
    }

    return Column(
      children: options.map((option) {
        return Row(
          children: [
            Radio<String>(
              value: option.title,
              groupValue: null,
              onChanged: null, // disabled
            ),
            Text(option.title),
          ],
        );
      }).toList(),
    );
  }

  /// Builds editor for "select_one" type fields (when selected)
  Widget _buildSelectOneEditor(FormFieldModel field) {
    final optionsController = TextEditingController();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('Options'.tr(), style: Theme.of(context).textTheme.titleSmall),
        const SizedBox(height: 8),

        // Existing options
        Column(
          children: field.options.map((option) {
            return Row(
              children: [
                Radio<String>(
                  value: option.title,
                  groupValue: null,
                  onChanged: (_) {},
                ),
                Expanded(child: Text(option.title)),
                IconButton(
                  icon: const Icon(Icons.delete),
                  onPressed: () {
                    setState(() {
                      field.options.remove(option);
                    });
                  },
                ),
              ],
            );
          }).toList(),
        ),

        const SizedBox(height: 12),

        // Add new option
        Row(
          children: [
            Expanded(
              child: TextField(
                controller: optionsController,
                decoration: InputDecoration(
                  hintText: 'Enter option value'.tr(),
                  border: const UnderlineInputBorder(),
                ),
              ),
            ),
            const SizedBox(width: 8),
            IconButton(
              icon: const Icon(Icons.add),
              onPressed: () {
                if (optionsController.text.isNotEmpty) {
                  setState(() {
                    final newOption = FormOptionModel(
                      optionsController.text,
                      optionsController.text,
                    );
                    field.options.add(newOption);
                  });
                  optionsController.clear();
                }
              },
            ),
          ],
        ),
      ],
    );
  }

  /// A checkbox that, if checked, ensures there's a subfield with type=note, isTicketField=true
  void _toggleTicketNote(bool val) {
    var ticketNote = form!.relatedFields!
        .firstWhereOrNull((f) => f.isTicketField == true && f.type == FormHelper.fieldTypeNote);

    setState(() {
      if (val) {
        // Create if not existing
        if (ticketNote == null) {
          final newNoteField = FormFieldModel(
            title: "Note".tr(),
            type: FormHelper.fieldTypeNote,
            isTicketField: true,
            isRequired: false,
            isHidden: false,
            order:
            (form!.relatedFields!.map((x) => x.order ?? 0).fold(0, max)) + 1,
          );
          form!.relatedFields!.add(newNoteField);
        } else {
          ticketNote.isHidden = false;
          ticketNote.order = (form!.relatedFields!.map((x) => x.order ?? 0).fold(0, max)) + 1;
        }
      } else {
        if (ticketNote != null) {
          ticketNote.isHidden = true;
        }
      }
    });
  }

  /// Build the small "Note" checkbox in the ticket field's row
  Widget _buildTicketNoteCheckbox() {
    final noteFieldIndex = form!.relatedFields!.indexWhere(
            (f) => f.isTicketField == true && f.type == FormHelper.fieldTypeNote && !f.isHidden!);
    final noteExists = noteFieldIndex != -1;
    return Checkbox(
      value: noteExists,
      onChanged: (val) => _toggleTicketNote(val ?? false),
    );
  }

  /// Read-only version of ticket editor (shows product types & products in read-only form)
  Widget _buildTicketEditorReadOnly(FormFieldModel ticketField) {
    // subfields with isTicketField == true and type=productType
    final productTypeFields = form!.relatedFields!
        .where((f) =>
    f.isTicketField == true && f.type == FormHelper.fieldTypeProductType)
        .toList();

    if (productTypeFields.isEmpty) {
      return Padding(
        padding: const EdgeInsets.only(top: 8.0),
        child: Text(
          'No Product Types'.tr(),
          style: Theme.of(context).textTheme.bodyMedium,
        ),
      );
    }
    // sort by order
    productTypeFields.sort((a, b) => (a.order ?? 0).compareTo(b.order ?? 0));

    return Column(
      children: [
        const SizedBox(height: 8),
        for (var ptField in productTypeFields) ...[
          _buildTicketGroupReadOnly(ptField),
          const SizedBox(height: 16),
        ],
      ],
    );
  }

  /// Selected (editable) version of ticket editor
  Widget _buildTicketEditor(FormFieldModel ticketField) {
    final productTypeFields = form!.relatedFields!
        .where((f) =>
    f.isTicketField == true && f.type == FormHelper.fieldTypeProductType)
        .toList();
    productTypeFields.sort((a, b) => (a.order ?? 0).compareTo(b.order ?? 0));

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('Product Types'.tr(), style: Theme.of(context).textTheme.titleSmall),
        const SizedBox(height: 8),

        // Show each product-type field as a "group"
        for (var ptField in productTypeFields) ...[
          _buildTicketGroupEditor(ptField),
          const SizedBox(height: 16),
        ],

        // Add new product group
        Row(
          children: [
            const Spacer(),
            ElevatedButton.icon(
              icon: const Icon(Icons.add),
              label: Text("Add Product Type".tr()),
              onPressed: () {
                setState(() {
                  final newProductTypeField = FormFieldModel(
                    title: "New Product Type".tr(),
                    type: FormHelper.fieldTypeProductType,
                    isTicketField: true,
                    isRequired: false,
                    isHidden: false,
                    order: (form!.relatedFields!
                        .map((x) => x.order ?? 0)
                        .fold(0, max)) +
                        1,
                    productType: ProductTypeModel(
                      title: "New Product Type".tr(),
                      products: [],
                    ),
                  );
                  form!.relatedFields!.add(newProductTypeField);
                });
              },
            ),
          ],
        ),
      ],
    );
  }

  /// Read-only product-type "group"
  Widget _buildTicketGroupReadOnly(FormFieldModel ptField) {
    ptField.productType ??= ProductTypeModel(title: ptField.title, products: []);
    final group = ptField.productType!;
    group.products ??= [];

    final groupHidden = ptField.isHidden ?? false;
    final requiredStar = (ptField.isRequired ?? false)
        ? TextSpan(text: ' *', style: TextStyle(color: ThemeConfig.redColor(context)))
        : null;

    // Strikethrough if hidden
    final groupTitleStyle = groupHidden
        ? Theme.of(context).textTheme.titleMedium?.copyWith(
      fontWeight: FontWeight.bold,
      decoration: TextDecoration.lineThrough,
    )
        : Theme.of(context).textTheme.titleMedium?.copyWith(
      fontWeight: FontWeight.bold,
    );

    return Card(
      elevation: 3,
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Group title + optional star
            RichText(
              text: TextSpan(
                text: ptField.title ?? group.title ?? '',
                style: groupTitleStyle?.copyWith(
                  color: groupTitleStyle.color,
                ),
                children: [
                  if (requiredStar != null) requiredStar,
                ],
              ),
            ),

            const SizedBox(height: 8),

            if (group.products!.isEmpty)
              Text('No Products'.tr())
            else ...[
              // 2) Show "Title / Price" headers
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 4.0),
                child: Row(
                  children: [
                    Expanded(
                      flex: 3,
                      child: Text(
                        "Title".tr(),
                        style: Theme.of(context)
                            .textTheme
                            .bodySmall
                            ?.copyWith(fontWeight: FontWeight.bold),
                      ),
                    ),
                    Expanded(
                      flex: 1,
                      child: Text(
                        "Price".tr(),
                        style: Theme.of(context)
                            .textTheme
                            .bodySmall
                            ?.copyWith(fontWeight: FontWeight.bold),
                      ),
                    ),
                  ],
                ),
              ),

              // Products
              Column(
                children: group.products!.map((product) {
                  final productHidden = product.isHidden ?? false;
                  // If hidden, strikethrough the row
                  final rowStyle = productHidden
                      ? const TextStyle(decoration: TextDecoration.lineThrough)
                      : const TextStyle();

                  return Padding(
                    padding: const EdgeInsets.symmetric(vertical: 2.0),
                    child: Row(
                      children: [
                        Expanded(
                          flex: 3,
                          child: Text(product.title ?? '', style: rowStyle),
                        ),
                        Expanded(
                          flex: 1,
                          child: Text(
                            '${product.price ?? 0}',
                            style: rowStyle,
                          ),
                        ),
                      ],
                    ),
                  );
                }).toList(),
              ),
            ],
          ],
        ),
      ),
    );
  }

  /// Editable product-type "group"
  Widget _buildTicketGroupEditor(FormFieldModel ptField) {
    ptField.productType ??=
        ProductTypeModel(title: ptField.title, products: []);
    final group = ptField.productType!;
    group.products ??= [];

    final groupTitleController =
    TextEditingController(text: ptField.title ?? group.title);
    final groupIsRequired = ptField.isRequired ?? false;
    final groupIsHidden = ptField.isHidden ?? false;

    // Opacity if hidden
    final effectiveOpacity = groupIsHidden ? kHiddenOpacity : 1.0;

    return Opacity(
      opacity: effectiveOpacity,
      child: Card(
        elevation: 3,
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header row: group title, toggles, delete
              Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: groupTitleController,
                      decoration: InputDecoration(
                        labelText: "Product Type Title".tr(),
                        border: const UnderlineInputBorder(),
                      ),
                      onChanged: (val) {
                        ptField.title = val;
                        group.title = val;
                      },
                    ),
                  ),
                  const SizedBox(width: 12),
                  // isRequired
                  Column(
                    children: [
                      Text("Required".tr(),
                          style: Theme.of(context).textTheme.bodySmall),
                      Checkbox(
                        value: groupIsRequired,
                        onChanged: (val) {
                          setState(() {
                            ptField.isRequired = val;
                          });
                        },
                      ),
                    ],
                  ),
                  const SizedBox(width: 12),
                  // isHidden
                  Column(
                    children: [
                      Text("Show".tr(),
                          style: Theme.of(context).textTheme.bodySmall),
                      Switch(
                        value: !groupIsHidden,
                        onChanged: (val) {
                          setState(() {
                            ptField.isHidden = !val;
                          });
                        },
                      ),
                    ],
                  ),
                  const SizedBox(width: 12),
                  // Delete group (only if ptField.id == null => newly added)
                  if (ptField.id == null)
                    IconButton(
                      icon: const Icon(Icons.delete),
                      onPressed: () {
                        setState(() {
                          form!.relatedFields!.remove(ptField);
                        });
                      },
                    ),
                ],
              ),

              const SizedBox(height: 16),
              // Product list
              for (int i = 0; i < group.products!.length; i++)
                _TicketProductEditorRow(
                  product: group.products![i],
                  onDelete: () {
                    setState(() {
                      group.products!.removeAt(i);
                    });
                  },
                ),

              // Add product
              Align(
                alignment: Alignment.centerRight,
                child: TextButton.icon(
                  onPressed: () {
                    setState(() {
                      group.products!.add(
                        ProductModel(
                          title: "New Product".tr(),
                          price: 0.0,
                          isHidden: false,
                          order: (group.products!.lastOrNull?.order ?? 0) + 1,
                        ),
                      );
                    });
                  },
                  icon: const Icon(Icons.add),
                  label: Text("Add Product".tr()),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

/// A separate stateful widget for editing a single ProductModel inside a ticket group.
class _TicketProductEditorRow extends StatefulWidget {
  final ProductModel product;
  final VoidCallback onDelete;

  const _TicketProductEditorRow({
    Key? key,
    required this.product,
    required this.onDelete,
  }) : super(key: key);

  @override
  State<_TicketProductEditorRow> createState() =>
      _TicketProductEditorRowState();
}

class _TicketProductEditorRowState extends State<_TicketProductEditorRow> {
  late TextEditingController _titleController;
  late TextEditingController _priceController;

  @override
  void initState() {
    super.initState();
    _titleController = TextEditingController(text: widget.product.title ?? "");
    _priceController = TextEditingController(
      text: (widget.product.price ?? 0).toString(),
    );

    _titleController.addListener(() {
      widget.product.title = _titleController.text;
    });
    _priceController.addListener(() {
      widget.product.price = double.tryParse(_priceController.text) ?? 0.0;
    });
  }

  @override
  void dispose() {
    _titleController.dispose();
    _priceController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final effectiveOpacity =
    (widget.product.isHidden ?? false) ? kHiddenOpacity : 1.0;

    return Opacity(
      opacity: effectiveOpacity,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 6.0),
        child: Row(
          children: [
            // Title
            Expanded(
              flex: 4,
              child: TextField(
                controller: _titleController,
                decoration: InputDecoration(
                  labelText: "Title".tr(),
                  border: const UnderlineInputBorder(),
                ),
              ),
            ),
            const SizedBox(width: 8),
            // Price
            Expanded(
              flex: 2,
              child: TextField(
                controller: _priceController,
                keyboardType:
                const TextInputType.numberWithOptions(decimal: true),
                decoration: InputDecoration(
                  labelText: "Price".tr(),
                  border: const UnderlineInputBorder(),
                ),
              ),
            ),
            const SizedBox(width: 8),
            // Hidden switch
            Column(
              children: [
                Text("Show".tr(),
                    style: Theme.of(context).textTheme.bodySmall),
                Switch(
                  value: !(widget.product.isHidden ?? false),
                  onChanged: (val) {
                    setState(() {
                      widget.product.isHidden = !val;
                    });
                  },
                ),
              ],
            ),
            const SizedBox(width: 8),
            // Delete (only if product.id == null => newly added)
            if (widget.product.id == null)
              IconButton(
                icon: const Icon(Icons.delete),
                onPressed: widget.onDelete,
              ),
          ],
        ),
      ),
    );
  }
}
