import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/components/forms/models/field_holder.dart';
import 'package:fstapp/components/forms/models/form_holder.dart';
import 'package:fstapp/components/forms/widgets_view/form_field_builders.dart';
import 'package:fstapp/components/forms/widgets_view/form_helper.dart';
import 'package:fstapp/services/html_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/components/forms/widgets_view/phone_input_formatter.dart';

import '../form_strings.dart';

class TextFieldBuilder extends StatelessWidget {
  final FieldHolder fieldHolder;
  final FormHolder formHolder;
  final Iterable<String> autofillHints;
  final bool isEmail;
  final bool isPhone;
  final bool isAddress;
  final bool isNationality;

  const TextFieldBuilder({
    super.key,
    required this.fieldHolder,
    required this.formHolder,
    this.autofillHints = const [],
    this.isEmail = false,
    this.isPhone = false,
    this.isAddress = false,
    this.isNationality = false,
  });

  @override
  Widget build(BuildContext context) {
    if (!FormHelper.isCardDesign(formHolder, fieldHolder) && HtmlHelper.isHtmlEmptyOrNull(fieldHolder.description)) {
      return _buildStandardTextField(context);
    } else {
      return _buildCardDesignTextField(context);
    }
  }

  Widget _buildStandardTextField(BuildContext context) {
    FocusNode focusNode = FocusNode();
    List<String? Function(String?)> validators = [];
    
    // Default prefill for phone
    if (isPhone) {
      var field = FormBuilder.of(context)?.fields[fieldHolder.id.toString()];
      if (field != null && (field.value == null || field.value.toString().isEmpty)) {
        // We can't easily set initial value here for FormBuilderTextField without controller or initialValue param
        // But FormBuilderTextField takes initialValue.
        // However, we are inside build.
        // Let's use the initialValue of FormBuilderTextField if possible, but it depends on fieldHolder.
        // Actually, we can just set it in the FormBuilderTextField's initialValue if it's not set in formHolder.
      }
    }

    if (fieldHolder.isRequired) {
      validators.add(FormBuilderValidators.required());
    }

    if (isEmail) {
      validators.add(FormBuilderValidators.email(
        errorText: FormHelper.emailInvalidMessage(),
      ));
    }

    if (isPhone) {
      validators.add(FormBuilderValidators.phoneNumber(
        regex: RegExp(r'^\+?[0-9]{' + PhoneInputFormatter.kMaxPhoneNumberLength.toString() + r'}$'),
        checkNullOrEmpty: false,
        errorText: FormStrings.phoneFormatValidation,
      ));
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        FormBuilderTextField(
          maxLines: null,
          name: fieldHolder.id.toString(),
          initialValue: isPhone ? '+420' : null,
          focusNode: focusNode,
          autofillHints: autofillHints,
          autovalidateMode: isEmail || isPhone
              ? AutovalidateMode.onUnfocus
              : AutovalidateMode.onUserInteraction,
          decoration: InputDecoration(
            hintText: isPhone ? FormStrings.phoneFormatHint : null,
            label: FormFieldBuilders.buildTitleWidget(
              fieldHolder.title!,
              fieldHolder.isRequired,
              context,
              focusNode: focusNode,
            ),
          ),
          inputFormatters: isPhone ? [PhoneInputFormatter()] : null,
          validator: validators.isNotEmpty
              ? FormBuilderValidators.compose(validators)
              : null,
          onChanged: (value) {
            // Intelligent validation: if field has error, validate on change to clear it immediately when fixed
            var field = FormBuilder.of(context)?.fields[fieldHolder.id.toString()];
            if (field != null && field.hasError) {
              field.validate();
            }
          },
        ),
        if (isPhone)
          _PhonePrefixHelpers(
            onPrefixSelected: (prefix) {
              // Keep focus to prevent onUnfocus validation
              focusNode.requestFocus();
              
              var field = FormBuilder.of(context)?.fields[fieldHolder.id.toString()];
              if (field != null) {
                String current = field.value?.toString() ?? '';
                String newText = _applyPrefix(current, prefix);
                field.didChange(newText);
              }
            },
          ),
      ],
    );
  }

  Widget _buildCardDesignTextField(BuildContext context) {
    List<String? Function(String?)> validators = [];

    if (fieldHolder.isRequired) {
      validators.add(FormBuilderValidators.required());
    }

    if (isEmail) {
      validators.add(FormBuilderValidators.email(
        errorText: FormHelper.emailInvalidMessage(),
      ));
    }

    if (isPhone) {
      validators.add(FormBuilderValidators.phoneNumber(
        regex: RegExp(r'^\+?[0-9]{' + PhoneInputFormatter.kMaxPhoneNumberLength.toString() + r'}$'),
        checkNullOrEmpty: false,
        errorText: FormStrings.phoneFormatValidation,
      ));
    }

    return ClipRect(
      child: AnimatedSize(
        alignment: Alignment.topCenter,
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeInOut,
        child: FormBuilderField<String?>(
          name: fieldHolder.id.toString(),
          validator: FormBuilderValidators.compose(validators),
          autovalidateMode: isEmail || isPhone
              ? AutovalidateMode.onUnfocus
              : AutovalidateMode.onUserInteraction,
          builder: (field) {
            return _CardTextField(
              field: field,
              fieldHolder: fieldHolder,
              autofillHints: autofillHints,
              isPhone: isPhone,
              isEmail: isEmail,
            );
          },
        ),
      ),
    );
  }
}

class _CardTextField extends StatefulWidget {
  final FormFieldState<String?> field;
  final FieldHolder fieldHolder;
  final Iterable<String> autofillHints;
  final bool isPhone;
  final bool isEmail;

  const _CardTextField({
    required this.field,
    required this.fieldHolder,
    required this.autofillHints,
    required this.isPhone,
    required this.isEmail,
  });

  @override
  _CardTextFieldState createState() => _CardTextFieldState();
}

class _CardTextFieldState extends State<_CardTextField> {
  late final TextEditingController _controller;
  final FocusNode _focusNode = FocusNode();

  @override
  void initState() {
    super.initState();
    String? initialValue = widget.field.value;
    if (widget.isPhone && (initialValue == null || initialValue.isEmpty)) {
      initialValue = '+420';
    }
    _controller = TextEditingController(text: initialValue);
  }

  @override
  void dispose() {
    _controller.dispose();
    _focusNode.dispose();
    super.dispose();
  }

  @override
  void didUpdateWidget(covariant _CardTextField oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.field.value != null && widget.field.value != _controller.text) {
      _controller.text = widget.field.value!;
    }
  }

  TextInputType _getKeyboardType() {
    if (widget.isPhone) {
      return TextInputType.phone;
    }
    if (widget.isEmail) {
      return TextInputType.emailAddress;
    }
    return TextInputType.text;
  }

  String? _getPrefixFromText(String text) {
    if (text.startsWith('+420')) return '+420';
    if (text.startsWith('+421')) return '+421';
    return null;
  }

  @override
  Widget build(BuildContext context) {
    return FormHelper.buildCardWrapperDesign(
      context: context,
      fieldHolder: widget.fieldHolder,
      hasError: widget.field.hasError,
      content: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          TextField(
            controller: _controller,
            focusNode: _focusNode,
            maxLines: null,
            autofillHints: widget.autofillHints,
            keyboardType: _getKeyboardType(),
            inputFormatters: widget.isPhone ? [PhoneInputFormatter()] : null,
            decoration: InputDecoration(
              hintText: widget.isPhone ? FormStrings.phoneFormatHint : FormStrings.typeHere,
              isDense: true,
              contentPadding: const EdgeInsets.fromLTRB(2, 12, 2, 12),
              border: const UnderlineInputBorder(),
              focusedBorder: UnderlineInputBorder(
                borderSide: BorderSide(color: Theme.of(context).primaryColor, width: 2.0),
              ),
              errorBorder: UnderlineInputBorder(
                borderSide: BorderSide(color: ThemeConfig.redColor(context), width: 1.0),
              ),
              focusedErrorBorder: UnderlineInputBorder(
                borderSide: BorderSide(color: ThemeConfig.redColor(context), width: 2.0),
              ),
            ),
            onChanged: (value) {
              widget.field.didChange(value.isEmpty ? null : value);
              // Intelligent validation: if field has error, validate on change to clear it immediately when fixed
              if (widget.field.hasError) {
                widget.field.validate();
              }
            },
          ),
          if (widget.isPhone)
            _PhonePrefixHelpers(
              onPrefixSelected: (prefix) {
                // Keep focus to prevent onUnfocus validation
                _focusNode.requestFocus();
                
                String current = _controller.text;
                String newText = _applyPrefix(current, prefix);
                _controller.value = TextEditingValue(
                  text: newText,
                  selection: TextSelection.collapsed(offset: newText.length),
                );
                widget.field.didChange(newText);
              },
            ),
          if (widget.field.hasError)
            Padding(
              padding: const EdgeInsets.only(top: 8.0, left: 2.0),
              child: Text(
                widget.field.errorText!,
                style: TextStyle(
                  color: ThemeConfig.redColor(context),
                  fontSize: 12,
                ),
              ),
            ),
        ],
      ),
    );
  }
}

String _applyPrefix(String current, String prefix) {
  String result = current;
  if (current.startsWith(prefix)) {
    result = current;
  } else if (current.startsWith('+420')) {
    result = prefix + current.substring(4);
  } else if (current.startsWith('+421')) {
    result = prefix + current.substring(4);
  } else if (current.startsWith('+')) {
     // If starts with +, replace until space or just replace first 4 chars if they are +ddd?
     // Safest is: if empty, set prefix. If starts with +, replace.
     // But user might have typed +1.
     // Let's stick to replacing known prefixes or just prepending if empty.
     // If user typed +123, and clicks +420, maybe they want to replace +123?
     // Let's go with: replace known prefixes, otherwise prepend/replace start.
     result = prefix + current.substring(current.indexOf(' ') > 0 ? current.indexOf(' ') : current.length); 
  } else {
    result = prefix + current;
  }

  // Clean and enforce max length using shared logic
  String cleaned = PhoneInputFormatter.cleanPhoneNumber(result);
  
  // Re-apply formatting to the result
  return PhoneInputFormatter.formatPhoneNumber(cleaned);
}

class _PhonePrefixHelpers extends StatelessWidget {
  final Function(String) onPrefixSelected;

  const _PhonePrefixHelpers({required this.onPrefixSelected});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 8.0),
      child: Wrap(
        spacing: 8.0,
        children: [
          _buildChip(context, 'CZ +420', '+420'),
          _buildChip(context, 'SK +421', '+421'),
        ],
      ),
    );
  }

  Widget _buildChip(BuildContext context, String label, String value) {
    return InkWell(
      onTap: () => onPrefixSelected(value),
      borderRadius: BorderRadius.circular(12),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
        decoration: BoxDecoration(
          color: Theme.of(context).primaryColor.withOpacity(0.1),
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: Theme.of(context).primaryColor.withOpacity(0.3)),
        ),
        child: Text(
          label,
          style: TextStyle(
            fontSize: 12,
            color: Theme.of(context).primaryColor,
            fontWeight: FontWeight.w500,
          ),
        ),
      ),
    );
  }
}