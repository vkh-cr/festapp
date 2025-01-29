import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/dataServicesEshop/DbEshop.dart';
import 'package:fstapp/dataServicesEshop/DbForms.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:fstapp/pages/HtmlEditorPage.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:easy_localization/easy_localization.dart';

class FormEditorContent extends StatefulWidget {
  const FormEditorContent({super.key});

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

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (formLink == null && context.routeData.pathParams.isNotEmpty) {
      formLink = context.routeData.pathParams.getString("formLink");
    }
    loadData();
  }

  int? selectedIndex;

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

  Future<void> deleteForm() async {
    final confirmation = await DialogHelper.showConfirmationDialogAsync(
      context,
      "Confirm removal".tr(),
      "Are you sure you want to delete this form?".tr(),
    );
    if (confirmation) {
      ToastHelper.Show(context, "${"Not supported yet".tr()}: ${form?.formKey}");
    }
  }

  void cancelEdit() {
    Navigator.of(context).pop();
  }

  List<String> get _availableFieldTypes {
    final existingTypes = form?.relatedFields?.map((f) => f.type)?.toList() ?? [];
    return fieldTypeIcons.keys.where((type) {
      if (['text', 'select_one', 'product_type'].contains(type)) return true;
      return !existingTypes.contains(type);
    }).toList();
  }

  void _addNewField() async {
    final selectedType = await showDialog<String>(
      context: context,
      builder: (context) => SimpleDialog(
        title: Text("Add Field".tr()),
        children: _availableFieldTypes.map((type) => SimpleDialogOption(
          onPressed: () => Navigator.pop(context, type),
          child: Row(
            children: [
              Icon(fieldTypeIcons[type]),
              const SizedBox(width: 12),
              Text(FormHelper.fieldTypeToLocale(type)),
            ],
          ),
        )).toList(),
      ),
    );

    if (selectedType != null) {
      setState(() {
        form!.relatedFields!.add(FormFieldModel(
          title: FormHelper.fieldTypeToLocale(selectedType),
          type: selectedType,
          order: form!.relatedFields!.length,
          isRequired: false,
          isHidden: false,
        ));
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
                            final result =
                            await RouterService.navigatePageInfo(
                              context,
                              HtmlEditorRoute(
                                  content: {
                                    HtmlEditorPage.parContent:
                                    form!.header!
                                  }),
                            );
                            if (result != null) {
                              setState(() => form!.header =
                              result as String);
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
                      style: Theme.of(context)
                          .textTheme
                          .headlineSmall
                          ?.copyWith(
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
                child: Text("Cancel".tr()),
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

  Widget _buildFieldItem(BuildContext context, int index, FormFieldModel field) {
    final isAlwaysRequired = FormHelper.isAlwaysRequired(field.type ?? '');

    final isSelected = selectedIndex == index;
    final defaultTitle = FormHelper.fieldTypeToLocale(field.type ?? '');
    final titleFocusNode = FocusNode(); // FocusNode for title field

    return GestureDetector(
      key: ValueKey(field.id),
      onTap: () {
        if (!isSelected) {
          setState(() => selectedIndex = index);
        } else {
          titleFocusNode.requestFocus(); // Focus on the title field
        }
      },
      child: Opacity(
        opacity: field.isHidden == true ? 0.6 : 1.0,
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
                      child: const Icon(Icons.drag_handle,
                          color: Colors.grey, size: 24),
                    ),
                  ),

                // Title Field (with underline when selected)
                TextFormField(
                  focusNode: titleFocusNode,
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                    fontWeight: FontWeight.bold,
                    color: Theme.of(context).colorScheme.primary,
                  ),
                  decoration: InputDecoration(
                    border: isSelected
                        ? const UnderlineInputBorder() // Underline when selected
                        : InputBorder.none,
                    hintText: defaultTitle,
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

                // Answer Field
                if (field.type != FormHelper.fieldTypeSelectOne)
                  GestureDetector(
                    onTap: () => setState(() => selectedIndex = index),
                    child: TextFormField(
                      decoration: InputDecoration(
                        border: const UnderlineInputBorder(),
                        hintText: 'Answer text',
                        contentPadding: const EdgeInsets.symmetric(vertical: 8),
                      ),
                      style: Theme.of(context).textTheme.bodyLarge,
                      onChanged: (value) {
                        // Handle answer changes
                      },
                      onTap: () => setState(() => selectedIndex = index),
                    ),
                  ),

                // Expanded Settings (only when selected)
                if (isSelected) ...[
                  // Options Editor for Select One type
                  if (field.type == FormHelper.fieldTypeSelectOne)
                    Padding(
                      padding: const EdgeInsets.only(top: 16.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Options'.tr(),
                              style: Theme.of(context).textTheme.titleSmall),
                          _buildOptionsEditor(field),
                        ],
                      ),
                    ),
                  const SizedBox(height: 16),
                  Row(
                    children: [
                      // Field Type Selector
                      SizedBox(
                        width: 200,
                        child: PopupMenuButton<String>(
                          child: Container(
                            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
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
                          itemBuilder: (context) => fieldTypeIcons.entries
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
                              .toList(),
                          onSelected: (newType) => setState(() {
                            // Clear options when changing from select_one
                            if (field.type == FormHelper.fieldTypeSelectOne &&
                                newType != FormHelper.fieldTypeSelectOne) {
                              field.data = null;
                            }

                            // Initialize options for select_one
                            if (newType == FormHelper.fieldTypeSelectOne && field.data == null) {
                              field.data = [];
                            }

                            field.type = newType;
                            if (field.title == defaultTitle || field.title?.isEmpty == true) {
                              field.title = FormHelper.fieldTypeToLocale(newType);
                            }

                            // Set required state for always-required fields
                            if (FormHelper.isAlwaysRequired(newType)) {
                              field.isRequired = true;
                            }
                          }),
                        ),
                      ),
                      const Spacer(),
                      // Required Toggle
                      Row(
                        children: [
                          Text('Required'.tr(),
                              style: Theme.of(context).textTheme.bodySmall),
                          Checkbox(
                            value: FormHelper.isAlwaysRequired(field.type!) ||
                                (field.isRequired ?? false),
                            onChanged: FormHelper.isAlwaysRequired(field.type!)
                                ? null
                                : (value) => setState(() => field.isRequired = value),
                          ),
                        ],
                      ),
                      const SizedBox(width: 16),
                      // Visibility Toggle
                      Row(
                        children: [
                          Text('Visible'.tr(),
                              style: Theme.of(context).textTheme.bodySmall),
                          Switch(
                            value: !(field.isHidden ?? false),
                            onChanged: (value) => setState(() => field.isHidden = !value),
                          ),
                        ],
                      ),
                      const SizedBox(width: 16),
                      // Delete Button
                      if(field.id == null)
                        IconButton(
                          icon: Icon(
                            Icons.delete, // Changed from delete_outline to close
                            color: Theme.of(context).iconTheme.color, // Default icon color
                          ),
                          onPressed: () => setState(() {
                            form!.relatedFields!.removeAt(index);
                            if (selectedIndex == index) {
                              selectedIndex = null;
                            }
                          }),
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

  Widget _buildOptionsEditor(FormFieldModel field) {
    final optionsController = TextEditingController();

    return Column(
      children: [
        // Options List
        Column(
          children: field.options!.map((option) => Row(
            children: [
              // Radio Button (Enabled Appearance, Non-Interactive)
              Radio<String>(
                value: option.title,
                groupValue: null, // No selection in editor
                onChanged: (_) {}, // Dummy function to keep it enabled
                activeColor: Theme.of(context).colorScheme.primary,
              ),
              // Option Title
              Expanded(
                child: Text(option.title),
              ),
              // Delete Button
              IconButton(
                icon: const Icon(Icons.close), // Cross icon
                color: Theme.of(context).iconTheme.color, // Default icon color
                onPressed: () => setState(() {
                  field.options = field.options!.where((o) => o != option).toList();
                }),
              ),
            ],
          )).toList(),
        ),
        const SizedBox(height: 12),
        // Add Option Field at the Bottom (Simple TextField)
        Row(
          children: [
            Expanded(
              child: TextField(
                controller: optionsController,
                decoration: InputDecoration(
                  hintText: 'Enter option value'.tr(),
                  border: UnderlineInputBorder(), // Adds an underline
                  focusedBorder: UnderlineInputBorder(
                    borderSide: BorderSide(
                      color: Theme.of(context).colorScheme.primary, // Optional: Customize underline color when focused
                    ),
                  ),
                ),
              ),
            ),
            const SizedBox(width: 8),
            IconButton(
              icon: const Icon(Icons.add),
              onPressed: () {
                if (optionsController.text.isNotEmpty) {
                  setState(() {
                    final newOption = FormOptionModel(optionsController.text, optionsController.text);
                    field.options = [...field.options!, newOption];
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

  Widget _buildFieldsList() {
    return ReorderableListView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      buildDefaultDragHandles: false,
      itemCount: form!.relatedFields!.length,
      itemBuilder: (context, index) {
        final field = form!.relatedFields![index];
        return _buildFieldItem(context, index, field);
      },
      onReorder: (oldIndex, newIndex) {
        setState(() {
          if (oldIndex < newIndex) newIndex -= 1;
          final item = form!.relatedFields!.removeAt(oldIndex);
          form!.relatedFields!.insert(newIndex, item);

          // Update selected index if needed
          if (selectedIndex == oldIndex) {
            selectedIndex = newIndex;
          } else if (selectedIndex != null &&
              selectedIndex! >= newIndex &&
              selectedIndex! < oldIndex) {
            selectedIndex = selectedIndex! + 1;
          }

          // Update order values
          for (int i = 0; i < form!.relatedFields!.length; i++) {
            form!.relatedFields![i].order = i;
          }
        });
      },
    );
  }
}
