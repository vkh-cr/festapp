import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/services/HtmlHelper.dart';
import 'package:fstapp/themeConfig.dart';
import '../models/field_holder.dart';
import '../models/form_holder.dart';
import 'option_field_helper.dart';

/// Builds a single-select field (radio). Decides whether to show
/// a basic radio group or a card-based option list based on whether
/// any option has a description.
class RadioFieldBuilder {
  /// Builds either a basic radio group or a card-based radio list, depending on options.
  static Widget buildRadioField(
      BuildContext context,
      FieldHolder fieldHolder,
      List<FormOptionModel> optionsIn,
      FormHolder formHolder,
      ) {
    final anyHasDescription =
    optionsIn.any((o) => !HtmlHelper.isHtmlEmptyOrNull(o.description));

    if (!anyHasDescription) {
      return _buildBasicRadioField(context, fieldHolder, optionsIn, formHolder);
    } else {
      return _buildCardRadioField(context, fieldHolder, optionsIn, formHolder);
    }
  }

  /// A simple radio group when none of the options have a description.
  static Widget _buildBasicRadioField(
      BuildContext context,
      FieldHolder fieldHolder,
      List<FormOptionModel> optionsIn,
      FormHolder formHolder,
      ) {
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
        FormBuilderRadioGroup<FormOptionModel>(
          name: fieldHolder.id.toString(),
          decoration: OptionFieldHelper.buildInputDecoration(
            context: context,
            label: fieldHolder.title ?? '',
            isRequired: fieldHolder.isRequired,
          ),
          validator: fieldHolder.isRequired ? FormBuilderValidators.required() : null,
          options: options,
          initialValue: null,
          orientation: OptionsOrientation.vertical,
          wrapDirection: Axis.vertical,
          onChanged: (_) {
            formHolder.controller?.updateTotalPrice?.call();
          },
        ),
        Divider(thickness: 1, color: ThemeConfig.grey500(context)),
      ],
    );
  }

  /// A card-based radio list when at least one option has a description.
  static Widget _buildCardRadioField(
      BuildContext context,
      FieldHolder fieldHolder,
      List<FormOptionModel> optionsIn,
      FormHolder formHolder,
      ) {
    return Column(
      children: [
        FormBuilderField<FormOptionModel?>(
          name: fieldHolder.id.toString(),
          validator: fieldHolder.isRequired ? FormBuilderValidators.required() : null,
          initialValue: null,
          builder: (FormFieldState<FormOptionModel?> field) {
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
                            (o) => _buildRadioOptionCard(context, field, o, formHolder),
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

  /// Builds a single card with a radio button for the given option.
  static Widget _buildRadioOptionCard(
      BuildContext context,
      FormFieldState<FormOptionModel?> field,
      FormOptionModel o,
      FormHolder formHolder,
      ) {
    final title = OptionFieldHelper.buildOptionTitle(context, o);
    final isSelected = (field.value == o);

    return OptionFieldHelper.buildOptionCard(
      context: context,
      isSelected: isSelected,
      title: title,
      description: o.description,
      leading: Radio<FormOptionModel>(
        value: o,
        groupValue: field.value,
        onChanged: (val) {
          field.didChange(val);
          formHolder.controller?.updateTotalPrice?.call();
        },
      ),
      onTap: () {
        field.didChange(o);
        formHolder.controller?.updateTotalPrice?.call();
      },
    );
  }
}
