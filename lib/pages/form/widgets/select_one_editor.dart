import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';

class SelectOneEditor {
  static Widget buildSelectOneReadOnly(BuildContext context, FormFieldModel field) {
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

  static Widget buildSelectOneEditor(BuildContext context, FormFieldModel field) {
    final optionsController = TextEditingController();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('Options'.tr(), style: Theme.of(context).textTheme.titleSmall),
        const SizedBox(height: 8),
        Column(
          children: field.options.map((FormOptionModel formOption) {
            final optionController =
            TextEditingController(text: formOption.title);
            return Row(
              children: [
                Radio<String>(
                  value: formOption.title,
                  groupValue: null,
                  onChanged: (_) {},
                ),
                Expanded(
                  child: TextFormField(
                    controller: optionController,
                    decoration: const InputDecoration(
                      border: UnderlineInputBorder(),
                    ),
                    onChanged: (value) {
                      formOption.title = value;
                    },
                  ),
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
