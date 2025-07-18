import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/data_models/form_option_model.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/theme_config.dart';
import '../models/field_holder.dart';
import '../models/form_holder.dart';
import 'form_helper.dart';
import 'option_field_helper.dart';
import 'package:fstapp/data_models/form_option_product_model.dart';

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
    if (!FormHelper.isCardDesign(formHolder, fieldHolder)) {
      return _buildBasicRadioField(context, fieldHolder, optionsIn, formHolder);
    } else {
      return _buildCardDesignRadioField(context, fieldHolder, optionsIn, formHolder);
    }
  }

  /// A simple radio group when none of the options have a description.
  static Widget _buildBasicRadioField(
      BuildContext context,
      FieldHolder fieldHolder,
      List<FormOptionModel> optionsIn,
      FormHolder formHolder,
      ) {
    return _BasicRadioFieldWidget(
      fieldHolder: fieldHolder,
      optionsIn: optionsIn,
      formHolder: formHolder,
    );
  }

  /// A card-based radio list when at least one option has a description.
  /// This version uses the FormBuilderField's builder to obtain the live error state.
  static Widget _buildCardDesignRadioField(
      BuildContext context,
      FieldHolder fieldHolder,
      List<FormOptionModel> optionsIn,
      FormHolder formHolder,
      ) {
    return ClipRect(
      child: AnimatedSize(
        alignment: Alignment.topCenter,
        duration: Duration(milliseconds: 300),
        curve: Curves.easeInOut,
        child: FormBuilderField<FormOptionModel?>(
          name: fieldHolder.id.toString(),
          validator: fieldHolder.isRequired ? FormBuilderValidators.required() : null,
          initialValue: null,
          builder: (field) {
            // Use the field's error state to update the card wrapper.
            return FormHelper.buildCardWrapperDesign(
              context: context,
              fieldHolder: fieldHolder,
              content: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Build the list of option cards.
                  Column(
                    children: optionsIn
                        .map((o) => _buildRadioOptionCard(context, field, o, formHolder))
                        .toList(),
                  ),
                  // Animate the appearance/disappearance of the "Clear selection" button.
                  AnimatedSwitcher(
                    duration: Duration(milliseconds: 300),
                    child: field.value != null
                        ? Padding(
                      key: ValueKey('removeButton'),
                      padding: const EdgeInsets.only(top: 8.0),
                      child: TextButton(
                        onPressed: () {
                          field.didChange(null);
                          formHolder.controller?.updateTotalPrice?.call();
                          field.validate();
                        },
                        child: Text("Clear selection").tr(),
                      ),
                    )
                        : SizedBox(key: ValueKey('empty')),
                  ),
                  // Display error text below the field if there is one.
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
              ),
              hasError: field.hasError,
            );
          },
        ),
      ),
    );
  }

  /// Builds a single card with a radio button for the given option.
  static Widget _buildRadioOptionCard(
      BuildContext context,
      FormFieldState<FormOptionModel?> field,
      FormOptionModel o,
      FormHolder formHolder,
      ) {
    // If the option is a product option and is disabled, mark it accordingly.
    final bool isDisabled = o is FormOptionProductModel && !o.isAvailable;
    final title = OptionFieldHelper.buildOptionTitle(context, o);
    // If disabled, update text style to use the disabled color and append "Unavailable".
    final effectiveTitle = isDisabled
        ? "$title (${tr('Unavailable')})"
        : title;
    final isSelected = (field.value == o);
    final optionCard = OptionFieldHelper.buildOptionCard(
      context: context,
      isSelected: isSelected,
      title: effectiveTitle,
      description: o.description,
      leading: Radio<FormOptionModel>(
        value: o,
        groupValue: field.value,
        onChanged: isDisabled
            ? null
            : (val) {
          field.didChange(val);
          formHolder.controller?.updateTotalPrice?.call();
          field.validate();
        },
      ),
      onTap: isDisabled
          ? null
          : () {
        field.didChange(o);
        formHolder.controller?.updateTotalPrice?.call();
        field.validate();
      },
    );
    // Wrap the card in an Opacity widget to grey it out if disabled.
    return isDisabled ? Opacity(opacity: 0.5, child: optionCard) : optionCard;
  }
}

// Private StatefulWidget that implements the basic radio field with the remove button.
class _BasicRadioFieldWidget extends StatefulWidget {
  final FieldHolder fieldHolder;
  final List<FormOptionModel> optionsIn;
  final FormHolder formHolder;

  const _BasicRadioFieldWidget({
    required this.fieldHolder,
    required this.optionsIn,
    required this.formHolder,
  });

  @override
  _BasicRadioFieldWidgetState createState() => _BasicRadioFieldWidgetState();
}

class _BasicRadioFieldWidgetState extends State<_BasicRadioFieldWidget> {
  FormOptionModel? currentSelection;
  final GlobalKey<FormBuilderFieldState> radioGroupKey = GlobalKey<FormBuilderFieldState>();

  @override
  Widget build(BuildContext context) {
    final options = widget.optionsIn.map((o) {
      // If the option is a product option, check if it's disabled.
      final bool isDisabled = o is FormOptionProductModel && !o.isAvailable;
      final style = OptionFieldHelper.optionTitleTextStyle().copyWith(
        color: isDisabled ? Theme.of(context).disabledColor : null,
      );
      final title = OptionFieldHelper.buildOptionTitle(context, o);
      final effectiveTitle = isDisabled
          ? "$title (${tr('Unavailable')})"
          : title;
      return FormBuilderFieldOption<FormOptionModel>(
        value: o,
        child: Text(
          effectiveTitle,
          style: style,
        ),
      );
    }).toList();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        FormBuilderRadioGroup<FormOptionModel>(
          key: radioGroupKey,
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
          initialValue: null,
          orientation: OptionsOrientation.vertical,
          wrapDirection: Axis.vertical,
          onChanged: (val) {
            // Prevent selection change if the option is disabled.
            if (val is FormOptionProductModel && !val.isAvailable) {
              return;
            }
            setState(() {
              currentSelection = val;
            });
            radioGroupKey.currentState?.validate();
            widget.formHolder.controller?.updateTotalPrice?.call();
          },
        ),
        if (currentSelection != null)
          Align(
            alignment: Alignment.centerLeft,
            child: OutlinedButton(
              onPressed: () {
                radioGroupKey.currentState?.didChange(null);
                setState(() {
                  currentSelection = null;
                });
                radioGroupKey.currentState?.validate();
                widget.formHolder.controller?.updateTotalPrice?.call();
              },
              child: Text("Clear selection").tr(),
            ),
          ),
        Divider(
          thickness: 1,
          color: ThemeConfig.grey500(context),
        ),
      ],
    );
  }
}
