import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/services/html_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/html_view.dart';
import '../pages/form_editor_content.dart';
import '../widgets_view/form_helper.dart';
import 'birth_date_editor.dart';
import 'description_with_edit.dart';
import 'sex_editor.dart';
import 'ticket_editor_widgets.dart';
import 'select_one_editor.dart';
import 'select_many_editor.dart';

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
      primary: false,
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

  Widget _buildFieldItem(BuildContext context, int index, FormFieldModel field,
      List<FormFieldModel> displayList) {
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
    final icon = FormHelper.fieldTypeIcons[field.type];
    final bool hidden = field.isHidden ?? false;
    final requiredStar = (field.isRequired ?? false)
        ? TextSpan(
      text: ' *',
      style: TextStyle(color: ThemeConfig.redColor(context)),
    )
        : null;
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
    final displayTitle = (field.title?.isNotEmpty ?? false)
        ? field.title!
        : FormHelper.fieldTypeToLocale(field.type!);

    final fieldContent = _buildAnswerWidget(context, field, false);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            if (icon != null) ...[
              Icon(icon,
                  size: 24, color: Theme.of(context).colorScheme.primary),
              const SizedBox(width: 8),
            ],
            Flexible(
              child: RichText(
                text: TextSpan(
                  style: titleStyle,
                  text: displayTitle,
                  children: [if (requiredStar != null) requiredStar],
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 8),
        if (!HtmlHelper.isHtmlEmptyOrNull(field.description))
          Column(
            children: [
              HtmlView(
                html: field.description!,
                fontSize: 14,
              ),
              const SizedBox(height: 16),
            ],
          ),
        fieldContent,
      ],
    );
  }

  Widget _buildFieldItemSelected(
      FormFieldModel field, List<FormFieldModel> displayList, int index) {
    final bool isTicket = field.type == FormHelper.fieldTypeTicket;
    final String defaultDescription = "Description".tr();

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
        if (isTicket)
          Row(
            children: [
              Icon(FormHelper.fieldTypeIcons[FormHelper.fieldTypeTicket],
                  size: 24, color: Theme.of(context).colorScheme.primary),
              const SizedBox(width: 8),
              Text("Ticket",
                  style: Theme.of(context)
                      .textTheme
                      .titleMedium
                      ?.copyWith(
                      fontWeight: FontWeight.bold,
                      color: Theme.of(context).colorScheme.primary))
                  .tr(),
            ],
          )
        else ...[
          TextFormField(
            style: Theme.of(context)
                .textTheme
                .titleMedium
                ?.copyWith(
                fontWeight: FontWeight.bold,
                color: Theme.of(context).colorScheme.primary),
            decoration: InputDecoration(
              border: const UnderlineInputBorder(),
              hintText: FormHelper.fieldTypeToLocale(field.type ?? ''),
              contentPadding: const EdgeInsets.symmetric(vertical: 8),
            ),
            initialValue: field.title,
            onChanged: (value) => field.title = value,
          ),
          if (!HtmlHelper.isHtmlEmptyOrNull(field.description))
            Column(
              children: [
                DescriptionWithEdit(
                  description: field.description!,
                  defaultDescription: defaultDescription,
                  onDescriptionChanged: (newDescription) {
                    setState(() {
                      field.description = newDescription;
                    });
                  },
                  occasionId: widget.form.occasion!,
                ),
                const SizedBox(height: 16),
              ],
            ),
        ],
        _buildAnswerWidget(context, field, true),
        const SizedBox(height: 16),
        Row(
          children: [
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
                        Icon(FormHelper.fieldTypeIcons[field.type]),
                        const SizedBox(width: 8),
                        Text(FormHelper.fieldTypeToLocale(field.type!)),
                      ],
                    ),
                  ),
                  itemBuilder: (context) => _availableFieldTypes
                      .map((entry) => PopupMenuItem(
                    value: entry,
                    child: Row(
                      children: [
                        Icon(FormHelper.fieldTypeIcons[entry]),
                        const SizedBox(width: 8),
                        Text(FormHelper.fieldTypeToLocale(entry)),
                      ],
                    ),
                  ))
                      .toList(),
                  onSelected: (newType) => setState(() {
                    if (!((field.type == FormHelper.fieldTypeSelectOne ||
                        field.type == FormHelper.fieldTypeSelectMany) &&
                        (newType == FormHelper.fieldTypeSelectOne ||
                            newType == FormHelper.fieldTypeSelectMany))) {
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
              TicketEditorWidgets.buildTicketNoteCheckbox(context, widget.form,
                      () {
                    setState(() {});
                  }),
              const SizedBox(width: 16),
            ],
            Row(
              children: [
                Text('Required'.tr(),
                    style: Theme.of(context).textTheme.bodySmall),
                Checkbox(
                  value: FormHelper.isAlwaysRequired(field.type ?? '') ||
                      (field.isRequired ?? false),
                  onChanged: FormHelper.isAlwaysRequired(field.type ?? '')
                      ? null
                      : (value) => setState(() => field.isRequired = value),
                ),
              ],
            ),
            const SizedBox(width: 16),
            Row(
              children: [
                Text('Show'.tr(),
                    style: Theme.of(context).textTheme.bodySmall),
                Switch(
                  value: !(field.isHidden ?? false),
                  onChanged: (field.type == FormHelper.fieldTypeEmail || isTicket)
                      ? null
                      : (value) => setState(() => field.isHidden = !value),
                ),
              ],
            ),
            if (!isTicket)
              PopupMenuButton<String>(
                onSelected: (value) {
                  if (value == "add_description") {
                    setState(() {
                      if (HtmlHelper.isHtmlEmptyOrNull(field.description)) {
                        field.description = defaultDescription;
                      }
                    });
                  }
                },
                itemBuilder: (context) => [
                  PopupMenuItem<String>(
                    value: "add_description",
                    child: Text("Add description".tr()),
                  ),
                ],
                icon: const Icon(Icons.more_vert),
              ),
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

  Widget _buildAnswerWidget(
      BuildContext context, FormFieldModel field, bool isEditable) {
    switch (field.type) {
      case FormHelper.fieldTypeTicket:
        return isEditable
            ? TicketEditorWidgets.buildTicketEditor(
            context, widget.form, field, () {
          setState(() {});
        })
            : TicketEditorWidgets.buildTicketEditorReadOnly(
            context, widget.form, field);
      case FormHelper.fieldTypeSelectOne:
        return isEditable
            ? SelectOneEditor.buildSelectOneEditor(context, field, widget.form.occasion)
            : SelectOneEditor.buildSelectOneReadOnly(context, field);
      case FormHelper.fieldTypeSelectMany:
        return isEditable
            ? SelectManyEditor.buildSelectManyEditor(context, field, widget.form.occasion)
            : SelectManyEditor.buildSelectManyReadOnly(context, field);
      case FormHelper.fieldTypeSex:
        return SexEditor.buildSexFieldReadOnly(context, field);
      case FormHelper.fieldTypeBirthDate:
        return isEditable
            ? BirthDateEditor.buildBirthDateEditor(context, field, widget.form.occasion)
            : BirthDateEditor.buildBirthDateReadOnly(context, field);
      default:
        if (isEditable) {
          return Padding(
            padding: const EdgeInsets.only(top: 8.0),
            child: TextFormField(
              decoration: InputDecoration(
                border: const UnderlineInputBorder(),
                hintText: 'Answer text'.tr(),
                contentPadding:
                const EdgeInsets.symmetric(vertical: 8),
              ),
              style: Theme.of(context).textTheme.bodyLarge,
            ),
          );
        } else {
          return Text(
            'Answer text'.tr(),
            style: Theme.of(context)
                .textTheme
                .bodyLarge
                ?.copyWith(color: Colors.grey),
          );
        }
    }
  }

  List<String> get _availableFieldTypes {
    final existingTypes =
        widget.form.relatedFields?.map((f) => f.type).toList() ?? [];
    return FormHelper.fieldTypeIcons.keys.where((type) {
      if ([
        FormHelper.fieldTypeText,
        FormHelper.fieldTypeSelectOne,
        FormHelper.fieldTypeSelectMany,
        FormHelper.fieldTypePhone,
      ].contains(type)) {
        return true;
      }
      return !existingTypes.contains(type);
    }).toList();
  }
}
