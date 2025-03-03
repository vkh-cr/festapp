import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/dataModels/FormFields.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/services/HtmlHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'FormHelper.dart';

class RadioFieldBuilder {
  /// Builds a single select field widget that renders either a basic
  /// radio group or a card-based option list based on option descriptions.
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

  /// Builds a basic radio group field when none of the options have a description.
  static Widget _buildBasicRadioField(
      BuildContext context,
      FieldHolder fieldHolder,
      List<FormOptionModel> optionsIn,
      FormHolder formHolder,
      ) {
    List<FormBuilderFieldOption<FormOptionModel>> options = optionsIn.map((o) {
      final title = o.title +
          (o.price > 0 ? " (${Utilities.formatPrice(context, o.price)})" : "");
      return FormBuilderFieldOption(
        value: o,
        child: Text(
          title,
          style: TextStyle(fontSize: 14.0 * FormHelper.fontSizeFactor),
        ),
      );
    }).toList();

    return FormBuilderRadioGroup<FormOptionModel>(
      onChanged: (v) {
        formHolder.controller!.updateTotalPrice?.call();
      },
      name: fieldHolder.id.toString(),
      decoration: InputDecoration(
        label: FormHelper.buildTitleWidget(
          fieldHolder.title!,
          fieldHolder.isRequired,
          context,
          textStyle: TextStyle(
            fontWeight: FontWeight.bold,
            color: ThemeConfig.grey700(context),
            fontSize: 16 * FormHelper.fontSizeFactor,
          ),
        ),
      ),
      validator:
      fieldHolder.isRequired ? FormBuilderValidators.required() : null,
      options: options,
      initialValue: null,
      orientation: OptionsOrientation.vertical,
      wrapDirection: Axis.vertical,
    );
  }

  /// Builds a card based radio field when one or more options have a description.
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
          validator:
          fieldHolder.isRequired ? FormBuilderValidators.required() : null,
          initialValue: null,
          builder: (FormFieldState<FormOptionModel?> field) {
            return Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                InputDecorator(
                  decoration: InputDecoration(
                    label: FormHelper.buildTitleWidget(
                      fieldHolder.title!,
                      fieldHolder.isRequired,
                      context,
                      textStyle: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: ThemeConfig.grey700(context),
                        fontSize: 16 * FormHelper.fontSizeFactor,
                      ),
                    ),
                    errorText: field.errorText,
                    border: InputBorder.none,
                  ),
                  child: Column(
                    children: [
                      SizedBox.square(dimension: 12),
                      ...optionsIn
                          .map((o) => _buildRadioOptionCard(
                        context,
                        field,
                        o,
                        formHolder,
                      ))
                          .toList(),
                    ],
                  ),
                ),
              ],
            );
          },
        ),
        Divider(thickness: 1, color: ThemeConfig.grey600(context)),
      ],
    );
  }

  /// Builds an individual option card that wraps a radio button and its content.
  static Widget _buildRadioOptionCard(
      BuildContext context,
      FormFieldState<FormOptionModel?> field,
      FormOptionModel o,
      FormHolder formHolder,
      ) {
    final title = o.title +
        (o.price > 0 ? " (${Utilities.formatPrice(context, o.price)})" : "");
    final isSelected = field.value == o;

    return InkWell(
      onTap: () {
        field.didChange(o);
        formHolder.controller!.updateTotalPrice?.call();
      },
      child: Card(
        elevation: 0,
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
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Radio<FormOptionModel>(
                value: o,
                groupValue: field.value,
                onChanged: (val) {
                  field.didChange(val);
                  formHolder.controller!.updateTotalPrice?.call();
                },
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      title,
                      style:
                      TextStyle(fontSize: 14.0 * FormHelper.fontSizeFactor),
                    ),
                    if (!HtmlHelper.isHtmlEmptyOrNull(o.description))
                      Padding(
                        padding: const EdgeInsets.only(top: 4.0),
                        child: Material(
                          type: MaterialType.transparency,
                          child: HtmlView(
                            color: ThemeConfig.grey600(context),
                            html: o.description!,
                            fontSize: 11.0 * FormHelper.fontSizeFactor,
                            isSelectable: false,
                          ),
                        ),
                      ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
