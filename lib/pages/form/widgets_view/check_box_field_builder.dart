import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/services/HtmlHelper.dart';
import 'package:fstapp/themeConfig.dart';
import '../models/field_holder.dart';
import '../models/form_holder.dart';
import 'form_helper.dart';
import 'option_field_helper.dart';

class CheckboxFieldBuilder {
  static Widget buildSelectManyField(
      BuildContext context,
      FieldHolder fieldHolder,
      List<FormOptionModel> optionsIn,
      FormHolder formHolder,
      ) {
    if (!FormHelper.isCardDesign(formHolder, fieldHolder)) {
      return _BasicCheckboxFieldWidget(
        fieldHolder: fieldHolder,
        optionsIn: optionsIn,
        formHolder: formHolder,
      );
    } else {
      return _buildCardSelectManyField(context, fieldHolder, optionsIn, formHolder);
    }
  }

  static Widget _buildCardSelectManyField(
      BuildContext context,
      FieldHolder fieldHolder,
      List<FormOptionModel> optionsIn,
      FormHolder formHolder,
      ) {
    return FormHelper.buildCardWrapperDesign(
      context: context,
      fieldHolder: fieldHolder,
      content: ClipRect(
        child: AnimatedSize(
          alignment: Alignment.topCenter,
          duration: Duration(milliseconds: 300),
          curve: Curves.easeInOut,
          child: FormBuilderField<List<FormOptionModel>>(
            name: fieldHolder.id.toString(),
            validator: fieldHolder.isRequired ? FormBuilderValidators.required() : null,
            initialValue: [],
            builder: (FormFieldState<List<FormOptionModel>> field) {
              return Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  ...optionsIn.map(
                        (o) => _buildOptionCard(context, field, o, formHolder),
                  ),
                  // Show error text below the options if validation fails.
                  if (field.errorText != null)
                    Padding(
                      padding: const EdgeInsets.only(top: 8.0),
                      child: Text(
                        field.errorText!,
                        style: TextStyle(
                          color: ThemeConfig.redColor(context),
                          fontSize: 12,
                        ),
                      ),
                    ),
                ],
              );
            },
          ),
        ),
      ),
      hasError: formHolder.controller?.globalKey.currentState
          ?.fields[fieldHolder.id.toString()]?.hasError ??
          false,
    );
  }

  static Widget _buildOptionCard(
      BuildContext context,
      FormFieldState<List<FormOptionModel>> field,
      FormOptionModel o,
      FormHolder formHolder,
      ) {
    final title = OptionFieldHelper.buildOptionTitle(context, o);
    final isSelected = field.value?.contains(o) ?? false;

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
          field.validate();
        },
      ),
      onTap: () {
        _toggleItemInFieldValue(field, o, isSelected);
        formHolder.controller?.updateTotalPrice?.call();
        field.validate();
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

/// A stateful widget wrapping the basic checkbox group for multi-selection,
/// showing live error cues (red border and error text).
class _BasicCheckboxFieldWidget extends StatefulWidget {
  final FieldHolder fieldHolder;
  final List<FormOptionModel> optionsIn;
  final FormHolder formHolder;

  const _BasicCheckboxFieldWidget({
    required this.fieldHolder,
    required this.optionsIn,
    required this.formHolder,
  });

  @override
  _BasicCheckboxFieldWidgetState createState() => _BasicCheckboxFieldWidgetState();
}

class _BasicCheckboxFieldWidgetState extends State<_BasicCheckboxFieldWidget> {
  final GlobalKey<FormBuilderFieldState> fieldKey = GlobalKey<FormBuilderFieldState>();

  @override
  Widget build(BuildContext context) {
    final options = widget.optionsIn.map((o) {
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
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        FormBuilderCheckboxGroup<FormOptionModel>(
          key: fieldKey,
          name: widget.fieldHolder.id.toString(),
          decoration: FormHelper.buildInputDecoration(
            context: context,
            label: widget.fieldHolder.title ?? '',
            isRequired: widget.fieldHolder.isRequired,
          ),
          validator: widget.fieldHolder.isRequired
              ? FormBuilderValidators.required()
              : null,
          options: options,
          orientation: OptionsOrientation.vertical,
          wrapDirection: Axis.vertical,
          onChanged: (val) {
            // Immediately trigger validation on change.
            fieldKey.currentState?.validate();
            widget.formHolder.controller?.updateTotalPrice?.call();
            setState(() {}); // Force rebuild to update visual cues.
          },
        ),
        Divider(
          thickness: 1,
          color: ThemeConfig.grey500(context),
        ),
      ],
    );
  }
}
