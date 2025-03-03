import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/pages/form/widgets/option_editor_dialog.dart';

class SelectManyEditor {
  static Widget buildSelectManyReadOnly(BuildContext context, FormFieldModel field) {
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
            Checkbox(
              value: false,
              onChanged: null,
            ),
            Text(option.title),
            if (option.description != null && option.description!.trim().isNotEmpty)
              Padding(
                padding: const EdgeInsets.only(left: 8.0),
                child: Tooltip(
                  message: "Has description".tr(),
                  child: const Icon(Icons.description, size: 16),
                ),
              ),
          ],
        );
      }).toList(),
    );
  }

  static Widget buildSelectManyEditor(BuildContext context, FormFieldModel field) {
    final optionsController = TextEditingController();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('Options'.tr(), style: Theme.of(context).textTheme.titleSmall),
        const SizedBox(height: 8),
        Column(
          children: field.options.map((FormOptionModel formOption) {
            final optionController = TextEditingController(text: formOption.title);
            return Row(
              children: [
                Checkbox(
                  value: false,
                  onChanged: (_) {},
                ),
                Expanded(
                  child: TextFormField(
                    controller: optionController,
                    decoration: InputDecoration(
                      border: const UnderlineInputBorder(),
                      suffixIcon: formOption.description != null && formOption.description!.trim().isNotEmpty
                          ? Tooltip(
                        message: "Has description".tr(),
                        child: Icon(Icons.description, size: 20),
                      )
                          : null,
                    ),
                    onChanged: (value) {
                      formOption.title = value;
                    },
                  ),
                ),
                // Three-dots popup for additional settings
                PopupMenuButton<String>(
                  onSelected: (value) {
                    if (value == 'additional_settings') {
                      showDialog(
                        context: context,
                        builder: (context) => OptionDetailEditorDialog(option: formOption),
                      ).then((_) {
                        // Refresh the widget when the dialog is closed.
                        (context as Element).markNeedsBuild();
                      });
                    }
                  },
                  itemBuilder: (BuildContext context) => <PopupMenuEntry<String>>[
                    PopupMenuItem<String>(
                      value: 'additional_settings',
                      child: Text("Additional Settings".tr()),
                    ),
                  ],
                  icon: const Icon(Icons.more_vert),
                ),
                IconButton(
                  icon: const Icon(Icons.delete),
                  onPressed: () {
                    field.options.remove(formOption);
                    (context as Element).markNeedsBuild();
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
                  final newOption = FormOptionModel(
                    optionsController.text,
                    optionsController.text,
                  );
                  field.options.add(newOption);
                  optionsController.clear();
                  (context as Element).markNeedsBuild();
                }
              },
            ),
          ],
        ),
      ],
    );
  }
}
