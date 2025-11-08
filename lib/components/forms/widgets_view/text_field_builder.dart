import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/components/forms/models/field_holder.dart';
import 'package:fstapp/components/forms/models/form_holder.dart';
import 'package:fstapp/components/forms/widgets_view/form_field_builders.dart';
import 'package:fstapp/components/forms/widgets_view/form_helper.dart';
import 'package:fstapp/services/html_helper.dart';
import 'package:fstapp/theme_config.dart';

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

    if (fieldHolder.isRequired) {
      validators.add(FormBuilderValidators.required());
    }

    if (isEmail) {
      validators.add(FormBuilderValidators.email(
        errorText: FormHelper.emailInvalidMessage(),
      ));
    }

    if (isPhone) {
      validators.add(FormBuilderValidators.phoneNumber(regex: RegExp(r'^\+?[1-9]\d{9,12}$'), checkNullOrEmpty: false));
    }

    return FormBuilderTextField(
      maxLines: null,
      name: fieldHolder.id.toString(),
      focusNode: focusNode,
      autofillHints: autofillHints,
      autovalidateMode: isEmail || isPhone
          ? AutovalidateMode.onUnfocus
          : AutovalidateMode.onUserInteraction,
      decoration: InputDecoration(
        label: FormFieldBuilders.buildTitleWidget(
          fieldHolder.title!,
          fieldHolder.isRequired,
          context,
          focusNode: focusNode,
        ),
      ),
      validator: validators.isNotEmpty
          ? FormBuilderValidators.compose(validators)
          : null,
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
      validators.add(FormBuilderValidators.phoneNumber(regex: RegExp(r'^\+?[1-9]\d{9,12}$'), checkNullOrEmpty: false));
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

  @override
  void initState() {
    super.initState();
    _controller = TextEditingController(text: widget.field.value);
  }

  @override
  void dispose() {
    _controller.dispose();
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
            maxLines: null,
            autofillHints: widget.autofillHints,
            keyboardType: _getKeyboardType(),
            decoration: InputDecoration(
              hintText: FormStrings.typeHere,
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