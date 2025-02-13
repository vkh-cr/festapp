import 'dart:math';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/dataModelsEshop/ProductTypeModel.dart';
import 'package:fstapp/dataServices/featureService.dart';
import 'package:fstapp/pages/form/FormEditorContent.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:fstapp/themeConfig.dart';

/// Duplicate the constant icons (so both files share the same icons)
const Map<String, IconData> fieldTypeIcons = {
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

class FormFieldsGenerator extends StatefulWidget {
  final FormModel form;
  const FormFieldsGenerator({Key? key, required this.form}) : super(key: key);

  @override
  _FormFieldsGeneratorState createState() => _FormFieldsGeneratorState();
}

class _FormFieldsGeneratorState extends State<FormFieldsGenerator> {
  int? selectedIndex;

  @override
  void initState() {
    super.initState();
    // Initialize selectedIndex to 0 if there are any non-ticket fields
    final topLevelFields = widget.form.relatedFields
        ?.where((f) => f.isTicketField != true)
        .toList() ??
        [];
    if (topLevelFields.isNotEmpty) {
      selectedIndex = 0;
    }
  }

  @override
  Widget build(BuildContext context) {
    return _buildFieldsList();
  }

  Widget _buildFieldsList() {
    // Filter out subfields that belong to the ticket
    final topLevelFields = widget.form.relatedFields!
        .where((f) => f.isTicketField != true)
        .toList();

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

          // Reapply changes back to widget.form.relatedFields in new order
          final updatedList = <FormFieldModel>[];
          // Add all non-ticket fields in updated order
          updatedList.addAll(topLevelFields);
          // Then add the ticket fields (unchanged order)
          updatedList.addAll(widget.form.relatedFields!
              .where((f) => f.isTicketField == true));
          widget.form.relatedFields = updatedList;

          // Update order values
          for (int i = 0; i < widget.form.relatedFields!.length; i++) {
            widget.form.relatedFields![i].order = i;
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

  Widget _buildFieldItem(BuildContext context, int index,
      FormFieldModel field, List<FormFieldModel> displayList) {
    final isSelected = (selectedIndex == index);
    final effectiveOpacity = (field.isHidden ?? false) ? kHiddenOpacity : 1.0;

    return GestureDetector(
      key: ValueKey(field.id),
      onTap: () {
        if (!isSelected) {
          setState(() {
            selectedIndex = index;
          });
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

  Widget _buildFieldItemNonSelected(FormFieldModel field) {
    final isTicket = (field.type == FormHelper.fieldTypeTicket);
    final isSelectOne = (field.type == FormHelper.fieldTypeSelectOne);
    final icon = fieldTypeIcons[field.type];
    final requiredStar = (field.isRequired ?? false)
        ? TextSpan(
      text: ' *',
      style: TextStyle(color: ThemeConfig.redColor(context)),
    )
        : null;
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
        // Ticket or select-one read-only editors:
        if (isTicket) _buildTicketEditorReadOnly(field),
        if (isSelectOne) _buildSelectOneReadOnly(field),
        // Otherwise, show a hint for user input.
        if (!isTicket && !isSelectOne)
          Text(
            'Answer text'.tr(),
            style: Theme.of(context)
                .textTheme
                .bodyLarge
                ?.copyWith(color: Colors.grey),
          ),
      ],
    );
  }

  Widget _buildFieldItemSelected(
      FormFieldModel field, List<FormFieldModel> displayList, int index) {
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
        // Title: for ticket, show a fixed label; else, use a text field.
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
        // Dummy answer input (only if not ticket or select-one)
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
        // Additional editors based on type.
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
        // Bottom row of toggles & actions.
        Row(
          children: [
            // Popup to change type (disabled for ticket/email)
            if (!isTicket && field.type != FormHelper.fieldTypeEmail)
              SizedBox(
                width: 150,
                child: PopupMenuButton<String>(
                  child: Container(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 12, vertical: 8),
                    decoration: BoxDecoration(
                      border: Border.all(color: Colors.grey),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Row(
                      children: [
                        Icon(fieldTypeIcons[field.type]),
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
                    // If we change away from selectOne, remove data.
                    if (field.type == FormHelper.fieldTypeSelectOne &&
                        newType != FormHelper.fieldTypeSelectOne) {
                      field.data = null;
                      field.options.clear();
                    }
                    field.type = newType;
                    // If user hasn't customized title, use default locale.
                    if ((field.title?.isEmpty ?? true)) {
                      field.title = FormHelper.fieldTypeToLocale(newType);
                    }
                    // Force isRequired if always required.
                    if (FormHelper.isAlwaysRequired(newType)) {
                      field.isRequired = true;
                    }
                  }),
                ),
              ),
            const Spacer(),
            // "Note" checkbox for ticket fields.
            if (isTicket) ...[
              Text("Note".tr(),
                  style: Theme.of(context).textTheme.bodySmall),
              const SizedBox(width: 4),
              _buildTicketNoteCheckbox(),
              const SizedBox(width: 16),
            ],
            // Required checkbox.
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
            // Visible switch.
            Row(
              children: [
                Text(
                  'Show'.tr(),
                  style: Theme.of(context).textTheme.bodySmall,
                ),
                Switch(
                  value: !(field.isHidden ?? false),
                  onChanged: disableHideSwitch
                      ? null
                      : (value) => setState(() => field.isHidden = !value),
                ),
              ],
            ),
            const SizedBox(width: 16),
            // Delete button (only for new fields).
            if (field.id == null)
              IconButton(
                icon: Icon(Icons.delete,
                    color: Theme.of(context).iconTheme.color),
                onPressed: () {
                  setState(() {
                    displayList.remove(field);
                    widget.form.relatedFields!.remove(field);
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

  List<String> get _availableFieldTypes {
    final existingTypes =
        widget.form.relatedFields?.map((f) => f.type).toList() ?? [];
    return fieldTypeIcons.keys.where((type) {
      if ([
        FormHelper.fieldTypeText,
        FormHelper.fieldTypeSelectOne,
      ].contains(type)) {
        return true;
      }
      return !existingTypes.contains(type);
    }).toList();
  }

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
              onChanged: null,
            ),
            Text(option.title),
          ],
        );
      }).toList(),
    );
  }

  Widget _buildSelectOneEditor(FormFieldModel field) {
    final optionsController = TextEditingController();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('Options'.tr(), style: Theme.of(context).textTheme.titleSmall),
        const SizedBox(height: 8),
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

  void _toggleTicketNote(bool val) {
    var ticketNote = widget.form.relatedFields!
        .firstWhereOrNull((f) =>
    f.isTicketField == true && f.type == FormHelper.fieldTypeNote);
    setState(() {
      if (val) {
        if (ticketNote == null) {
          final newNoteField = FormFieldModel(
            title: "Note".tr(),
            type: FormHelper.fieldTypeNote,
            isTicketField: true,
            isRequired: false,
            isHidden: false,
            order: (widget.form.relatedFields!
                .map((x) => x.order ?? 0)
                .fold(0, max)) +
                1,
          );
          widget.form.relatedFields!.add(newNoteField);
        } else {
          ticketNote.isHidden = false;
          ticketNote.order = (widget.form.relatedFields!
              .map((x) => x.order ?? 0)
              .fold(0, max)) +
              1;
        }
      } else {
        if (ticketNote != null) {
          ticketNote.isHidden = true;
        }
      }
    });
  }

  Widget _buildTicketNoteCheckbox() {
    final noteFieldIndex = widget.form.relatedFields!.indexWhere((f) =>
    f.isTicketField == true &&
        f.type == FormHelper.fieldTypeNote &&
        !(f.isHidden ?? true));
    final noteExists = noteFieldIndex != -1;
    return Checkbox(
      value: noteExists,
      onChanged: (val) => _toggleTicketNote(val ?? false),
    );
  }

  Widget _buildSpotFieldEditor() {
    // Check if a spot field exists.
    var spotField = widget.form.relatedFields!.firstWhereOrNull((f) =>
    f.isTicketField == true && f.type == FormHelper.fieldTypeSpot);
    return Card(
      elevation: 3,
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Row(
          children: [
            Icon(fieldTypeIcons[FormHelper.fieldTypeSpot]),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                "Seat selection".tr(),
                style: Theme.of(context).textTheme.bodyMedium,
              ),
            ),
            Switch(
              value: !(spotField?.isHidden??true),
              onChanged: (val) {
                setState(() {
                  if (val) {
                    // Add spot field if it does not exist.
                    if (spotField == null) {
                      spotField = FormFieldModel(
                        type: FormHelper.fieldTypeSpot,
                        isTicketField: true,
                        isRequired: false,
                        isHidden: false,
                        order: (widget.form.relatedFields!
                            .map((x) => x.order ?? 0)
                            .fold(0, max)) +
                            1,
                      );
                      widget.form.relatedFields!.add(spotField!);
                    }
                    spotField!.isHidden = false;
                  } else {
                    // Remove spot field if it exists.
                    var field = widget.form.relatedFields!.firstWhereOrNull((f) =>
                    f.isTicketField == true &&
                        f.type == FormHelper.fieldTypeSpot);
                    if(field != null) {
                      field.isHidden = true;
                    }
                  }
                });
              },
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSpotFieldReadOnly() {
    // Only display if a non-hidden spot field exists.
    bool spotExists = widget.form.relatedFields!.any((f) =>
    f.isTicketField == true &&
        f.type == FormHelper.fieldTypeSpot &&
        !(f.isHidden ?? false));
    return Card(
      elevation: 3,
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Row(
          children: [
            Icon(fieldTypeIcons[FormHelper.fieldTypeSpot]),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                "Seat selection".tr(),
                style: Theme.of(context).textTheme.bodyMedium,
              ),
            ),
            Switch(
              value: spotExists,
              onChanged: null,
            ),
          ],
        ),
      ),
    );
  }
  /// --- END OF SPOT FIELD SECTION ---

  Widget _buildTicketEditorReadOnly(FormFieldModel ticketField) {
    List<Widget> children = [];
    if (FeatureService.isFeatureEnabled(FeatureService.blueprint)) {
      children.add(_buildSpotFieldReadOnly());
      children.add(const SizedBox(height: 8));
    }
    final productTypeFields = widget.form.relatedFields!
        .where((f) =>
    f.isTicketField == true &&
        f.type == FormHelper.fieldTypeProductType)
        .toList();

    if (productTypeFields.isEmpty) {
      children.add(Padding(
        padding: const EdgeInsets.only(top: 8.0),
        child: Text(
          'No Product Types'.tr(),
          style: Theme.of(context).textTheme.bodyMedium,
        ),
      ));
    } else {
      productTypeFields.sort((a, b) => (a.order ?? 0).compareTo(b.order ?? 0));
      for (var ptField in productTypeFields) {
        children.add(_buildTicketGroupReadOnly(ptField));
        children.add(const SizedBox(height: 16));
      }
    }
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: children,
    );
  }

  Widget _buildTicketEditor(FormFieldModel ticketField) {
    List<Widget> children = [];
    if (FeatureService.isFeatureEnabled(FeatureService.blueprint)) {
      children.add(_buildSpotFieldEditor());
      children.add(const SizedBox(height: 16));
    }
    final productTypeFields = widget.form.relatedFields!
        .where((f) =>
    f.isTicketField == true &&
        f.type == FormHelper.fieldTypeProductType)
        .toList();
    productTypeFields.sort((a, b) => (a.order ?? 0).compareTo(b.order ?? 0));
    children.add(Text('Product Types'.tr(),
        style: Theme.of(context).textTheme.titleSmall));
    children.add(const SizedBox(height: 8));
    for (var ptField in productTypeFields) {
      children.add(_buildTicketGroupEditor(ptField));
      children.add(const SizedBox(height: 16));
    }
    children.add(Row(
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
                order: (widget.form.relatedFields!
                    .map((x) => x.order ?? 0)
                    .fold(0, max)) +
                    1,
                productType: ProductTypeModel(
                  title: "New Product Type".tr(),
                  products: [],
                ),
              );
              widget.form.relatedFields!.add(newProductTypeField);
            });
          },
        ),
      ],
    ));
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: children,
    );
  }

  Widget _buildTicketGroupReadOnly(FormFieldModel ptField) {
    ptField.productType ??=
        ProductTypeModel(title: ptField.title, products: []);
    final group = ptField.productType!;
    group.products ??= [];
    final groupHidden = ptField.isHidden ?? false;
    final requiredStar = (ptField.isRequired ?? false)
        ? TextSpan(
      text: ' *',
      style: TextStyle(color: ThemeConfig.redColor(context)),
    )
        : null;
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
            RichText(
              text: TextSpan(
                text: ptField.title ?? group.title ?? '',
                style: groupTitleStyle?.copyWith(
                  color: groupTitleStyle?.color,
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
              Column(
                children: group.products!.map((product) {
                  final productHidden = product.isHidden ?? false;
                  final rowStyle = productHidden
                      ? const TextStyle(decoration: TextDecoration.lineThrough)
                      : const TextStyle();
                  return Padding(
                    padding: const EdgeInsets.symmetric(vertical: 2.0),
                    child: Row(
                      children: [
                        Expanded(
                          flex: 3,
                          child:
                          Text(product.title ?? '', style: rowStyle),
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

  Widget _buildTicketGroupEditor(FormFieldModel ptField) {
    ptField.productType ??=
        ProductTypeModel(title: ptField.title, products: []);
    final group = ptField.productType!;
    group.products ??= [];
    final groupTitleController =
    TextEditingController(text: ptField.title ?? group.title);
    final groupIsRequired = ptField.isRequired ?? false;
    final groupIsHidden = ptField.isHidden ?? false;
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
                  if (ptField.id == null)
                    IconButton(
                      icon: const Icon(Icons.delete),
                      onPressed: () {
                        setState(() {
                          widget.form.relatedFields!.remove(ptField);
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
    _titleController =
        TextEditingController(text: widget.product.title ?? "");
    _priceController =
        TextEditingController(text: (widget.product.price ?? 0).toString());
    _titleController.addListener(() {
      widget.product.title = _titleController.text;
    });
    _priceController.addListener(() {
      widget.product.price =
          double.tryParse(_priceController.text) ?? 0.0;
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
