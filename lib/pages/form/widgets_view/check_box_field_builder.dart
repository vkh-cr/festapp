import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/dataModels/FormFields.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/services/HtmlHelper.dart';
import 'package:fstapp/themeConfig.dart';
import 'option_field_helper.dart';

class CheckboxFieldBuilder {
  static Widget buildSelectManyField(
      BuildContext context,
      FieldHolder fieldHolder,
      List<FormOptionModel> optionsIn,
      FormHolder formHolder,
      ) {
    final anyHasDescription =
    optionsIn.any((o) => !HtmlHelper.isHtmlEmptyOrNull(o.description));

    if (!anyHasDescription) {
      return _buildBasicSelectManyField(context, fieldHolder, optionsIn, formHolder);
    } else {
      return _buildCardSelectManyField(context, fieldHolder, optionsIn, formHolder);
    }
  }

  static Widget _buildBasicSelectManyField(
      BuildContext context,
      FieldHolder fieldHolder,
      List<FormOptionModel> optionsIn,
      FormHolder formHolder,
      ) {
    // Map our options to FormBuilderFieldOption
    final options = optionsIn.map((o) {
      final title = OptionFieldHelper.buildOptionTitle(context, o);

      return FormBuilderFieldOption<FormOptionModel>(
        value: o,
        child: Text(
          title,
          style: OptionFieldHelper.optionTitleTextStyle(),
        ),
      );
    }).toList();

    return Column(
      children: [
        FormBuilderCheckboxGroup<FormOptionModel>(
          name: fieldHolder.id.toString(),
          decoration: OptionFieldHelper.buildInputDecoration(
            context: context,
            label: fieldHolder.title ?? '',
            isRequired: fieldHolder.isRequired,
          ),
          validator: fieldHolder.isRequired ? FormBuilderValidators.required() : null,
          options: options,
          orientation: OptionsOrientation.vertical,
          wrapDirection: Axis.vertical,
          onChanged: (_) {
            // Update total price on changes, if needed
            formHolder.controller?.updateTotalPrice?.call();
          },
        ),
        Divider(thickness: 1, color: ThemeConfig.grey500(context)),
      ],
    );
  }

  static Widget _buildCardSelectManyField(
      BuildContext context,
      FieldHolder fieldHolder,
      List<FormOptionModel> optionsIn,
      FormHolder formHolder,
      ) {
    return Column(
      children: [
        FormBuilderField<List<FormOptionModel>>(
          name: fieldHolder.id.toString(),
          validator: fieldHolder.isRequired ? FormBuilderValidators.required() : null,
          initialValue: [],
          builder: (FormFieldState<List<FormOptionModel>> field) {
            return Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                InputDecorator(
                  decoration: OptionFieldHelper.buildInputDecoration(
                    context: context,
                    label: fieldHolder.title ?? '',
                    isRequired: fieldHolder.isRequired,
                    errorText: field.errorText,
                  ),
                  child: Column(
                    children: [
                      const SizedBox.square(dimension: 12),
                      ...optionsIn.map(
                            (o) => _buildOptionCard(context, field, o, formHolder),
                      ),
                    ],
                  ),
                ),
              ],
            );
          },
        ),
        Divider(thickness: 1, color: ThemeConfig.grey500(context)),
      ],
    );
  }

  static Widget _buildOptionCard(
      BuildContext context,
      FormFieldState<List<FormOptionModel>> field,
      FormOptionModel o,
      FormHolder formHolder,
      ) {
    final title = OptionFieldHelper.buildOptionTitle(context, o);
    final isSelected = (field.value?.contains(o)) ?? false;

    return OptionFieldHelper.buildOptionCard(
      context: context,
      isSelected: isSelected,
      title: title,
      description: o.description,
      // Provide the leading widget (checkbox) to the shared card builder:
      leading: Checkbox(
        value: isSelected,
        onChanged: (val) {
          _toggleItemInFieldValue(field, o, isSelected);
          formHolder.controller?.updateTotalPrice?.call();
        },
      ),
      onTap: () {
        _toggleItemInFieldValue(field, o, isSelected);
        formHolder.controller?.updateTotalPrice?.call();
      },
    );
  }

  static void _toggleItemInFieldValue(
      FormFieldState<List<FormOptionModel>> field,
      FormOptionModel option,
      bool isSelected,
      ) {
    final newValue = List<FormOptionModel>.from(field.value ?? []);
    if (isSelected) {
      newValue.remove(option);
    } else {
      newValue.add(option);
    }
    field.didChange(newValue);
  }
}
