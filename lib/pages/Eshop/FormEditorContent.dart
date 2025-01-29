import 'dart:math';
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
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:fstapp/pages/HtmlEditorPage.dart';
import 'package:easy_localization/easy_localization.dart';

/// Global constant for hidden item opacity
const double kHiddenOpacity = 0.6;

class FormEditorContent extends StatefulWidget {
  const FormEditorContent({Key? key}) : super(key: key);

  @override
  _FormEditorContentState createState() => _FormEditorContentState();
}

class _FormEditorContentState extends State<FormEditorContent> {
  FormModel? form;
  String? formLink;

  static const Map<String, IconData> fieldTypeIcons = {
    FormHelper.fieldTypeName: Icons.person,
    FormHelper.fieldTypeSurname: Icons.person_outline,
    FormHelper.fieldTypeCity: Icons.location_city,
    FormHelper.fieldTypeEmail: Icons.email,
    FormHelper.fieldTypeSex: Icons.wc,
    FormHelper.fieldTypeBirthYear: Icons.cake,
    FormHelper.fieldTypeNote: Icons.note,
    FormHelper.fieldTypeSpot: Icons.place,
    FormHelper.fieldTypeText: Icons.text_fields,
    FormHelper.fieldTypeSelectOne: Icons.radio_button_checked,
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
    await DbForms.updateForm(form!);
    ToastHelper.Show(context, "${"Saved".tr()}: ${form?.formKey}");
    Navigator.of(context).pop();
  }

  void cancelEdit() {
    Navigator.of(context).pop();
  }

  /// Filter available field types for brand-new fields
  List<String> get _availableFieldTypes {
    final existingTypes = form?.relatedFields?.map((f) => f.type)?.toList() ?? [];
    return fieldTypeIcons.keys.where((type) {
      // These types can appear multiple times
      if ([
        FormHelper.fieldTypeText,
        FormHelper.fieldTypeSelectOne,
        FormHelper.fieldTypeProductType,
      ].contains(type)) {
        return true;
      }
      // single-occurrence types cannot appear if they already do
      return !existingTypes.contains(type);
    }).toList();
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
      floatingActionButton: FloatingActionButton(
        onPressed: _addNewField,
        tooltip: 'Add Field'.tr(),
        child: const Icon(Icons.add),
      ),
      body: form == null
          ? const Center(child: CircularProgressIndicator())
          : Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: ListView(
              children: [
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
                              setState(() => form!.header = result as String);
                              await DbForms.updateForm(form!);
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
                    Text(
                      "Form Fields".tr(),
                      style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                        fontWeight: FontWeight.bold,
                        color: Theme.of(context).colorScheme.primary,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      "Drag to reorder fields".tr(),
                      style: Theme.of(context).textTheme.bodySmall,
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                _buildFieldsList(),
              ],
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
                child: Text("Save Changes".tr()),
              ),
            ],
          ),
        ),
      ),
    );
  }

  /// Build the list of top-level fields (i.e. those that are NOT isTicketField).
  /// Ticket subfields (isTicketField == true) will be handled in _buildTicketEditor.
  Widget _buildFieldsList() {
    // Filter out subfields that belong to the ticket
    final topLevelFields = form!.relatedFields!
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

          // Reapply changes back to form!.relatedFields!
          // We'll reorder them in form!.relatedFields! accordingly
          final updatedList = <FormFieldModel>[];
          // Gather all isTicketField == false fields in the updated order
          updatedList.addAll(topLevelFields);
          // Then add the isTicketField == true fields (unchanged order)
          updatedList.addAll(
            form!.relatedFields!.where((f) => f.isTicketField == true),
          );
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
  Widget _buildFieldItem(BuildContext context, int index, FormFieldModel field,
      List<FormFieldModel> displayList) {
    final isAlwaysRequired = FormHelper.isAlwaysRequired(field.type ?? '');
    final isSelected = (selectedIndex == index);
    final titleFocusNode = FocusNode();

    // Ticket field specifics
    final isTicket = (field.type == FormHelper.fieldTypeTicket);

    // Wrap the entire card in an opacity if hidden
    final effectiveOpacity = (field.isHidden ?? false) ? kHiddenOpacity : 1.0;

    return GestureDetector(
      key: ValueKey(field.id),
      onTap: () {
        if (!isSelected) {
          setState(() => selectedIndex = index);
        } else {
          // If already selected, focus the title text field
          titleFocusNode.requestFocus();
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
              width: 2,
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.all(12.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (isSelected)
                  Center(
                    child: ReorderableDragStartListener(
                      index: index,
                      child: const Icon(Icons.drag_handle, color: Colors.grey, size: 24),
                    ),
                  ),

                // Title:
                // - If it's the ticket, show "Ticket" (non-editable).
                // - Otherwise, show an editable field.
                if (isTicket) ...[
                  // Non-editable title with icon
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 8),
                    child: Row(
                      children: [
                        Icon(fieldTypeIcons[FormHelper.fieldTypeTicket], size: 24, color: Theme.of(context).colorScheme.primary,),
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
                  ),
                  if (!isSelected) const SizedBox(height: 12),
                ] else ...[
                  // Editable title for other fields
                  TextFormField(
                    focusNode: titleFocusNode,
                    style: Theme.of(context).textTheme.titleMedium?.copyWith(
                      fontWeight: FontWeight.bold,
                      color: Theme.of(context).colorScheme.primary,
                    ),
                    decoration: InputDecoration(
                      border:
                      isSelected ? const UnderlineInputBorder() : InputBorder.none,
                      hintText: FormHelper.fieldTypeToLocale(field.type ?? ''),
                      contentPadding: const EdgeInsets.symmetric(vertical: 8),
                    ),
                    controller: TextEditingController(text: field.title),
                    onChanged: (value) => field.title = value,
                    onTap: () {
                      if (!isSelected) {
                        setState(() => selectedIndex = index);
                      }
                    },
                  ),
                ],

                // If it's not selectOne or ticket, show a dummy "answer" field
                if (!isTicket && field.type != FormHelper.fieldTypeSelectOne)
                  GestureDetector(
                    onTap: () => setState(() => selectedIndex = index),
                    child: TextFormField(
                      decoration: InputDecoration(
                        border: const UnderlineInputBorder(),
                        hintText: 'Answer text'.tr(),
                        contentPadding: const EdgeInsets.symmetric(vertical: 8),
                      ),
                      style: Theme.of(context).textTheme.bodyLarge,
                      onChanged: (value) {
                        // If you want to store or do something with this
                      },
                    ),
                  ),

                // Expanded settings only when selected
                if (isSelected) ...[
                  // If the field is select_one, show the selectOne editor
                  if (field.type == FormHelper.fieldTypeSelectOne)
                    Padding(
                      padding: const EdgeInsets.only(top: 16.0),
                      child: _buildSelectOneEditor(field),
                    ),

                  // If the field is a ticket, show ticket editor
                  if (isTicket)
                    Padding(
                      padding: const EdgeInsets.only(top: 16.0),
                      child: _buildTicketEditor(field),
                    ),

                  const SizedBox(height: 16),
                  Row(
                    children: [
                      // If it's the ticket, do NOT show the type popup or "visible" toggle
                      if (!isTicket) ...[
                        SizedBox(
                          width: 180,
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
                                  .where((entry) => _availableFieldTypes.contains(entry.key))
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
                      ] else ...[
                        const Spacer(),
                      ],

                      // "Note" checkbox ONLY if it's a ticket
                      if (isTicket) ...[
                        Text("Note".tr(), style: Theme.of(context).textTheme.bodySmall),
                        const SizedBox(width: 4),
                        _buildTicketNoteCheckbox(),
                        const SizedBox(width: 16),
                      ],

                      // Required as a CHECKBOX
                      Row(
                        children: [
                          Text('Required'.tr(), style: Theme.of(context).textTheme.bodySmall),
                          Checkbox(
                            value: isAlwaysRequired || (field.isRequired ?? false),
                            onChanged: isAlwaysRequired
                                ? null
                                : (value) => setState(() => field.isRequired = value),
                          ),
                        ],
                      ),
                      const SizedBox(width: 16),

                      // If it's not a ticket, show the "Visible" switch
                      if (!isTicket) ...[
                        Row(
                          children: [
                            Text('Visible'.tr(), style: Theme.of(context).textTheme.bodySmall),
                            Switch(
                              value: !(field.isHidden ?? false),
                              onChanged: (value) => setState(() => field.isHidden = !value),
                            ),
                          ],
                        ),
                        const SizedBox(width: 16),
                      ],

                      // Delete Button for brand-new fields (id == null)
                      if (field.id == null)
                        IconButton(
                          icon: Icon(Icons.delete, color: Theme.of(context).iconTheme.color),
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
              ],
            ),
          ),
        ),
      ),
    );
  }

  /// Builds editor for "select_one" type fields
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
                  icon: const Icon(Icons.close),
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
                    final newOption =
                    FormOptionModel(optionsController.text, optionsController.text);
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

  /// Builds a checkbox for "Note" under the TICKET field's main row
  /// If checked, ensures there's a subfield with isTicketField=true, type=note.
  /// If unchecked, removes that subfield.
  Widget _buildTicketNoteCheckbox() {
    // Check if there's a note subfield
    final noteField = form!.relatedFields!.firstWhere(
          (f) => f.isTicketField == true && f.type == FormHelper.fieldTypeNote,
      orElse: () => FormFieldModel(type: 'none'),
    );
    final noteExists = noteField.type == FormHelper.fieldTypeNote;

    return Checkbox(
      value: noteExists,
      onChanged: (val) {
        setState(() {
          if (val == true) {
            // Create if not existing
            if (!noteExists) {
              final newNoteField = FormFieldModel(
                title: "Note".tr(),
                type: FormHelper.fieldTypeNote,
                isTicketField: true,
                isRequired: false,
                isHidden: false,
                order: (form!.relatedFields!.map((x) => x.order ?? 0).fold(0, max)) + 1,
              );
              form!.relatedFields!.add(newNoteField);
            }
          } else {
            // Remove existing note subfield(s)
            form!.relatedFields!.removeWhere(
                  (f) => f.isTicketField == true && f.type == FormHelper.fieldTypeNote,
            );
          }
        });
      },
    );
  }

  /// Builds editor for "ticket" type fields.
  /// We gather subfields (isTicketField == true) with type=productType (and possibly note)
  /// but only show productTypes here. The note is toggled via the "Note" checkbox above.
  Widget _buildTicketEditor(FormFieldModel ticketField) {
    // Gather productType subfields that belong to the ticket
    final productTypeFields = form!.relatedFields!
        .where((f) => f.isTicketField == true && f.type == FormHelper.fieldTypeProductType)
        .toList();

    // Sort them by order
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
                order: (form!.relatedFields!.map((x) => x.order ?? 0).fold(0, max)) + 1,
                productType: ProductTypeModel(
                  title: "New Product Type".tr(),
                  products: [],
                  data: {
                    "isHidden": false,
                    "isRequired": false,
                  },
                ),
              );
              form!.relatedFields!.add(newProductTypeField);
            });
          },
        ),
      ],
    );
  }

  /// Builds the UI for an individual "productType" field (which is a subfield in a ticket)
  Widget _buildTicketGroupEditor(FormFieldModel ptField) {
    // If productType is null, create a blank one
    ptField.productType ??= ProductTypeModel(
      title: ptField.title,
      products: [],
      data: {"isHidden": ptField.isHidden ?? false, "isRequired": ptField.isRequired ?? false},
    );

    final group = ptField.productType!;
    group.data ??= {"isHidden": false, "isRequired": false};

    // Keep the FieldModel's isRequired/isHidden in sync with productType data
    bool groupIsRequired = ptField.isRequired ?? false;
    bool groupIsHidden = ptField.isHidden ?? false;

    final groupTitleController = TextEditingController(text: ptField.title ?? group.title);

    // Because the productType might exist in DB, if there's no list init it
    group.products ??= [];

    // Opacity if groupIsHidden
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
                  // If group.type == "spot", show a small icon or text
                  if (group.type == FormHelper.fieldTypeSpot) ...[
                    const Icon(Icons.event_seat),
                    const SizedBox(width: 8),
                  ],

                  // Group name
                  Expanded(
                    child: TextField(
                      controller: groupTitleController,
                      decoration: InputDecoration(
                        labelText: "Product Type Title".tr(),
                        border: const UnderlineInputBorder(),
                      ),
                      onChanged: (val) {
                        setState(() {
                          ptField.title = val;
                          group.title = val;
                        });
                      },
                    ),
                  ),
                  const SizedBox(width: 12),

                  // isRequired as CHECKBOX
                  Column(
                    children: [
                      Text("Required".tr(), style: Theme.of(context).textTheme.bodySmall),
                      Checkbox(
                        value: groupIsRequired,
                        onChanged: (val) {
                          setState(() {
                            ptField.isRequired = val;
                            group.data!["isRequired"] = val;
                          });
                        },
                      ),
                    ],
                  ),
                  const SizedBox(width: 12),

                  // isHidden as a SWITCH
                  Column(
                    children: [
                      Text("Show".tr(), style: Theme.of(context).textTheme.bodySmall),
                      Switch(
                        value: !groupIsHidden,
                        onChanged: (val) {
                          setState(() {
                            ptField.isHidden = !val;
                            group.data!["isHidden"] = ptField.isHidden;
                          });
                        },
                      ),
                    ],
                  ),
                  const SizedBox(width: 12),

                  // Delete group only if ptField.id == null
                  if (ptField.id == null)
                    IconButton(
                      icon: const Icon(Icons.delete),
                      onPressed: () {
                        setState(() {
                          // Remove from form's related fields
                          form!.relatedFields!.remove(ptField);
                        });
                      },
                    ),
                ],
              ),

              const SizedBox(height: 16),
              // Product list
              if (group.products != null) ...[
                Column(
                  children: group.products!.asMap().entries.map((entry) {
                    final productIndex = entry.key;
                    final product = entry.value;
                    return _buildTicketProductEditor(ptField, product, productIndex);
                  }).toList(),
                ),
              ],

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

  /// Builds editor for individual ProductModel in a productType group
  Widget _buildTicketProductEditor(
      FormFieldModel ptField,
      ProductModel product,
      int productIndex,
      ) {
    final productTitleController = TextEditingController(text: product.title ?? "");
    final productPriceController =
    TextEditingController(text: (product.price ?? 0).toString());

    // Opacity if product.isHidden is true
    final effectiveOpacity = (product.isHidden ?? false) ? kHiddenOpacity : 1.0;

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
                controller: productTitleController,
                decoration: InputDecoration(
                  labelText: "Title".tr(),
                  border: const UnderlineInputBorder(),
                ),
                onChanged: (val) {
                  setState(() {
                    product.title = val;
                  });
                },
              ),
            ),
            const SizedBox(width: 8),
            // Price
            Expanded(
              flex: 2,
              child: TextField(
                controller: productPriceController,
                keyboardType: const TextInputType.numberWithOptions(decimal: true),
                decoration: InputDecoration(
                  labelText: "Price".tr(),
                  border: const UnderlineInputBorder(),
                ),
                onChanged: (val) {
                  setState(() {
                    product.price = double.tryParse(val) ?? 0.0;
                  });
                },
              ),
            ),
            const SizedBox(width: 8),
            // Hidden switch
            Column(
              children: [
                Text("Show".tr(), style: Theme.of(context).textTheme.bodySmall),
                Switch(
                  value: !(product.isHidden ?? false),
                  onChanged: (val) {
                    setState(() {
                      product.isHidden = !val;
                    });
                  },
                ),
              ],
            ),
            const SizedBox(width: 8),
            // Delete product only if product.id == null
            if (product.id == null)
              IconButton(
                icon: const Icon(Icons.close),
                onPressed: () {
                  setState(() {
                    ptField.productType!.products!.removeAt(productIndex);
                  });
                },
              ),
          ],
        ),
      ),
    );
  }
}
