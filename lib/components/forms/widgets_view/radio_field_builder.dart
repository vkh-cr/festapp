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
/// Also handles filtering by currency if options have different currencies.
class RadioFieldBuilder {
  /// Builds a currency-aware radio field.
  static Widget buildRadioField(
      BuildContext context,
      FieldHolder fieldHolder,
      List<FormOptionModel> optionsIn,
      FormHolder formHolder,
      ) {
    return _CurrencyFilteredRadioField(
      fieldHolder: fieldHolder,
      optionsIn: optionsIn,
      formHolder: formHolder,
    );
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
    // If there are no options to display for the current filter, show a message.
    if (optionsIn.isEmpty) {
      return FormHelper.buildCardWrapperDesign(
          context: context,
          fieldHolder: fieldHolder,
          hasError: false,
          content: Center(child: Text("No options available for the selected currency.").tr())
      );
    }
    return ClipRect(
      child: AnimatedSize(
        alignment: Alignment.topCenter,
        duration: Duration(milliseconds: 300),
        curve: Curves.easeInOut,
        child: FormBuilderField<FormOptionModel?>(
          key: ValueKey(fieldHolder.id.toString() + optionsIn.toString()), // Add key to force rebuild
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
    final effectiveTitle = isDisabled ? "$title (${tr('Unavailable')})" : title;
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

/// A wrapper widget that handles currency filtering for radio fields.
class _CurrencyFilteredRadioField extends StatefulWidget {
  final FieldHolder fieldHolder;
  final List<FormOptionModel> optionsIn;
  final FormHolder formHolder;

  const _CurrencyFilteredRadioField({
    required this.fieldHolder,
    required this.optionsIn,
    required this.formHolder,
  });

  @override
  State<_CurrencyFilteredRadioField> createState() => _CurrencyFilteredRadioFieldState();
}

class _CurrencyFilteredRadioFieldState extends State<_CurrencyFilteredRadioField> {
  final List<String> _availableCurrencies = [];
  String? _selectedCurrency;

  @override
  void initState() {
    super.initState();
    _initializeCurrencies();
  }

  void _initializeCurrencies() {
    final currencies = <String>{};
    for (final option in widget.optionsIn) {
      if (option is FormOptionProductModel && option.price > 0 && option.currencyCode != null) {
        currencies.add(option.currencyCode!);
      }
    }
    _availableCurrencies.addAll(currencies.toList()..sort());
    if (_availableCurrencies.isNotEmpty) {
      _selectedCurrency = _availableCurrencies.first;
    }
  }

  void _onCurrencyChanged(String newCurrency) {
    setState(() {
      _selectedCurrency = newCurrency;
    });
  }

  Widget _buildCurrencyToggle() {
    if (_availableCurrencies.length <= 1) {
      return const SizedBox.shrink();
    }

    return Padding(
      padding: const EdgeInsets.only(bottom: 12.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "V jaké měně chcete platit?",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              color: Theme.of(context).colorScheme.onSurface.withOpacity(0.8),
            ),
          ),
          const SizedBox(height: 8),
          ToggleButtons(
            isSelected: _availableCurrencies.map((c) => c == _selectedCurrency).toList(),
            onPressed: (index) {
              _onCurrencyChanged(_availableCurrencies[index]);
            },
            borderRadius: BorderRadius.circular(8.0),
            constraints: BoxConstraints(minHeight: 40.0, minWidth: 80.0),
            children: _availableCurrencies
                .map((c) => Text(c.toUpperCase()))
                .toList(),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    List<FormOptionModel> filteredOptions;

    // Filter options based on the selected currency
    if (_selectedCurrency == null) {
      filteredOptions = widget.optionsIn;
    } else {
      filteredOptions = widget.optionsIn.where((option) {
        if (option is FormOptionProductModel && option.price > 0 && option.currencyCode != null) {
          return option.currencyCode == _selectedCurrency;
        }
        // Always include non-product options or free products
        return true;
      }).toList();
    }

    // If the currently selected value is not in the filtered list, clear it.
    final formState = FormBuilder.of(context);
    final fieldState = formState?.fields[widget.fieldHolder.id.toString()];
    if (fieldState?.value != null && !filteredOptions.contains(fieldState?.value)) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (mounted) {
          fieldState?.didChange(null);
          widget.formHolder.controller?.updateTotalPrice?.call();
        }
      });
    }

    final fieldWidget = FormHelper.isCardDesign(widget.formHolder, widget.fieldHolder)
        ? RadioFieldBuilder._buildCardDesignRadioField(
        context, widget.fieldHolder, filteredOptions, widget.formHolder)
        : RadioFieldBuilder._buildBasicRadioField(
        context, widget.fieldHolder, filteredOptions, widget.formHolder);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildCurrencyToggle(),
        fieldWidget,
      ],
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
  final GlobalKey<FormBuilderFieldState> _radioGroupKey = GlobalKey<FormBuilderFieldState>();

  @override
  Widget build(BuildContext context) {
    // If there are no options to display for the current filter, show nothing or a message.
    if (widget.optionsIn.isEmpty) {
      return Padding(
        padding: const EdgeInsets.symmetric(vertical: 16.0),
        child: Text("No options available for the selected currency.").tr(),
      );
    }

    final options = widget.optionsIn.map((o) {
      // If the option is a product option, check if it's disabled.
      final bool isDisabled = o is FormOptionProductModel && !o.isAvailable;
      final style = OptionFieldHelper.optionTitleTextStyle().copyWith(
        color: isDisabled ? Theme.of(context).disabledColor : null,
      );
      final title = OptionFieldHelper.buildOptionTitle(context, o);
      final effectiveTitle = isDisabled ? "$title (${tr('Unavailable')})" : title;
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
          key: _radioGroupKey,
          // Re-create the widget when options change to reset state correctly
          name: widget.fieldHolder.id.toString(),
          decoration: FormHelper.buildInputDecoration(
            context: context,
            label: widget.fieldHolder.title ?? '',
            isRequired: widget.fieldHolder.isRequired,
          ),
          validator:
          widget.fieldHolder.isRequired ? FormBuilderValidators.required() : null,
          options: options,
          orientation: OptionsOrientation.vertical,
          wrapDirection: Axis.vertical,
          onChanged: (val) {
            // Prevent selection change if the option is disabled.
            if (val is FormOptionProductModel && !val.isAvailable) {
              return;
            }
            // Trigger rebuild to show/hide the clear button
            setState(() {});
            _radioGroupKey.currentState?.validate();
            widget.formHolder.controller?.updateTotalPrice?.call();
          },
        ),
        if (_radioGroupKey.currentState?.value != null)
          Align(
            alignment: Alignment.centerLeft,
            child: OutlinedButton(
              onPressed: () {
                _radioGroupKey.currentState?.didChange(null);
                // Trigger rebuild to hide the clear button
                setState(() {});
                _radioGroupKey.currentState?.validate();
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