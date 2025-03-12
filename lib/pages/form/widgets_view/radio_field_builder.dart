import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/themeConfig.dart';
import '../models/field_holder.dart';
import '../models/form_holder.dart';
import 'form_helper.dart';
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
          field.validate();
        },
      ),
      onTap: () {
        field.didChange(o);
        formHolder.controller?.updateTotalPrice?.call();
        field.validate();
      },
    );
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

