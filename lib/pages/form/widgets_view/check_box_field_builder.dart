import 'package:easy_localization/easy_localization.dart'; // Added for translation support.
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/data_models/form_option_model.dart';
import 'package:fstapp/data_models/form_option_product_model.dart'; // Importing product model.
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/theme_config.dart';
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
                  // Build card for each option.
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
    // Determine if this option is a priced product and disabled.
    final bool isDisabled = o is FormOptionProductModel && !o.isEnabled;
    final originalTitle = OptionFieldHelper.buildOptionTitle(context, o);
    final effectiveTitle =
    isDisabled ? "$originalTitle (${tr('Unavailable')})" : originalTitle;
    final isSelected = field.value?.contains(o) ?? false;

    Widget optionCard = OptionFieldHelper.buildOptionCard(
      context: context,
      isSelected: isSelected,
      title: effectiveTitle,
      description: o.description,
      // The leading widget (checkbox) is disabled when needed.
      leading: Checkbox(
        value: isSelected,
        onChanged: isDisabled
            ? null
            : (val) {
          _toggleItemInFieldValue(field, o, isSelected);
          formHolder.controller?.updateTotalPrice?.call();
          field.validate();
        },
      ),
      // Disable onTap for disabled items.
      onTap: isDisabled
          ? null
          : () {
        _toggleItemInFieldValue(field, o, isSelected);
        formHolder.controller?.updateTotalPrice?.call();
        field.validate();
      },
    );

    // Grey out the card if the option is disabled.
    if (isDisabled) {
      optionCard = Opacity(opacity: 0.5, child: optionCard);
    }
    return optionCard;
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
  _BasicCheckboxFieldWidgetState createState() =>
      _BasicCheckboxFieldWidgetState();
}

class _BasicCheckboxFieldWidgetState extends State<_BasicCheckboxFieldWidget> {
  final GlobalKey<FormBuilderFieldState> fieldKey =
  GlobalKey<FormBuilderFieldState>();

  @override
  Widget build(BuildContext context) {
    // Create options with disabled support.
    final options = widget.optionsIn.map((o) {
      final bool isDisabled = o is FormOptionProductModel && !o.isEnabled;
      final originalTitle = OptionFieldHelper.buildOptionTitle(context, o);
      final effectiveTitle =
      isDisabled ? "$originalTitle (${tr('Unavailable')})" : originalTitle;
      return FormBuilderFieldOption<FormOptionModel>(
        value: o,
        child: Text(
          effectiveTitle,
          style: OptionFieldHelper.optionTitleTextStyle().copyWith(
            color: isDisabled ? Theme.of(context).disabledColor : null,
          ),
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
            // Filter out any disabled options from the selected list.
            if (val != null) {
              final selectedList = val;
              final filteredList = selectedList.where((option) {
                if (option is FormOptionProductModel) {
                  return option.isEnabled;
                }
                return true;
              }).toList();
              if (filteredList.length != selectedList.length) {
                // Override the selection if disabled items were selected.
                fieldKey.currentState?.didChange(filteredList);
              }
            }
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
