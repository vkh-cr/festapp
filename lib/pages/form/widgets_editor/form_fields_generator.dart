import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/themeConfig.dart';
import '../pages/form_editor_content.dart';
import '../widgets_view/form_helper.dart';
import 'sex_editor.dart';
import 'ticket_editor_widgets.dart';
import 'select_one_editor.dart';
import 'select_many_editor.dart'; // new import for selectMany functionality

class FormFieldsGenerator extends StatefulWidget {
  final FormModel form;
  const FormFieldsGenerator({super.key, required this.form});

  @override
  _FormFieldsGeneratorState createState() => _FormFieldsGeneratorState();
}

class _FormFieldsGeneratorState extends State<FormFieldsGenerator> {
  int? selectedIndex;

  @override
  void initState() {
    super.initState();
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

          final updatedList = <FormFieldModel>[];
          updatedList.addAll(topLevelFields);
          updatedList.addAll(widget.form.relatedFields!
              .where((f) => f.isTicketField == true));
          widget.form.relatedFields = updatedList;

          for (int i = 0; i < widget.form.relatedFields!.length; i++) {
            widget.form.relatedFields![i].order = i;
          }

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
    final isSelectMany = (field.type == FormHelper.fieldTypeSelectMany);
    final isSexType = (field.type == FormHelper.fieldTypeSex);
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
        if (isTicket)
          TicketEditorWidgets.buildTicketEditorReadOnly(
              context, widget.form, field)
        else if (isSelectOne)
          SelectOneEditor.buildSelectOneReadOnly(context, field)
        else if (isSexType)
             SexEditor.buildSexFieldReadOnly(context, field)
        else if (isSelectMany)
            SelectManyEditor.buildSelectManyReadOnly(context, field)
          else
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

  Widget _buildFieldItemSelected(FormFieldModel field,
      List<FormFieldModel> displayList, int index) {
    final isTicket = (field.type == FormHelper.fieldTypeTicket);
    final isSexField = (field.type == FormHelper.fieldTypeSex);
    final isSelectOne = (field.type == FormHelper.fieldTypeSelectOne);
    final isSelectMany = (field.type == FormHelper.fieldTypeSelectMany);
    final isAlwaysRequired = FormHelper.isAlwaysRequired(field.type ?? '');
    final disableHideSwitch =
    (isTicket || field.type == FormHelper.fieldTypeEmail);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Center(
          child: ReorderableDragStartListener(
            index: index,
            child:
            const Icon(Icons.drag_handle, color: Colors.grey, size: 24),
          ),
        ),
        const SizedBox(height: 8),
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
        if (!isTicket && !isSelectOne && !isSelectMany && !isSexField)
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
        if (isSexField)
          Padding(
            padding: const EdgeInsets.only(top: 16.0),
            child: SexEditor.buildSexFieldReadOnly(context, field),
          ),
        if (isSelectOne)
          Padding(
            padding: const EdgeInsets.only(top: 16.0),
            child: SelectOneEditor.buildSelectOneEditor(context, field),
          ),
        if (isSelectMany)
          Padding(
            padding: const EdgeInsets.only(top: 16.0),
            child: SelectManyEditor.buildSelectManyEditor(context, field),
          ),
        if (isTicket)
          Padding(
            padding: const EdgeInsets.only(top: 16.0),
            child: TicketEditorWidgets.buildTicketEditor(context, widget.form, field, () {
              setState(() {});
            }),
          ),
        const SizedBox(height: 16),
        Row(
          children: [
            if (!isTicket && field.type != FormHelper.fieldTypeEmail)
              SizedBox(
                width: 150,
                child: PopupMenuButton<String>(
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
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
                    return _availableFieldTypes.map((entry) => PopupMenuItem(
                      value: entry,
                      child: Row(
                        children: [
                          Icon(fieldTypeIcons[entry]),
                          const SizedBox(width: 8),
                          Text(FormHelper.fieldTypeToLocale(entry)),
                        ],
                      ),
                    )).toList();
                  },
                  onSelected: (newType) => setState(() {
                    // Only clear options if switching to a type that's not selectOne/selectMany.
                    if (!((field.type == FormHelper.fieldTypeSelectOne || field.type == FormHelper.fieldTypeSelectMany) &&
                        (newType == FormHelper.fieldTypeSelectOne || newType == FormHelper.fieldTypeSelectMany))) {
                      field.data = null;
                      field.options.clear();
                    }
                    field.type = newType;
                    if ((field.title?.isEmpty ?? true)) {
                      field.title = FormHelper.fieldTypeToLocale(newType);
                    }
                    if (FormHelper.isAlwaysRequired(newType)) {
                      field.isRequired = true;
                    }
                  }),
                ),
              ),
            const Spacer(),
            if (isTicket) ...[
              Text("Note".tr(),
                  style: Theme.of(context).textTheme.bodySmall),
              const SizedBox(width: 4),
              TicketEditorWidgets.buildTicketNoteCheckbox(context, widget.form, () {
                setState(() {});
              }),
              const SizedBox(width: 16),
            ],
            Row(
              children: [
                Text('Required'.tr(),
                    style: Theme.of(context).textTheme.bodySmall),
                Checkbox(
                  value: isAlwaysRequired || (field.isRequired ?? false),
                  onChanged: isAlwaysRequired
                      ? null
                      : (value) =>
                      setState(() => field.isRequired = value),
                ),
              ],
            ),
            const SizedBox(width: 16),
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
                      : (value) =>
                      setState(() => field.isHidden = !value),
                ),
              ],
            ),
            const SizedBox(width: 16),
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
        FormHelper.fieldTypeSelectMany,
      ].contains(type)) {
        return true;
      }
      return !existingTypes.contains(type);
    }).toList();
  }
}
