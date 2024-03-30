import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';

class FormFields{
  static TextFormField email(TextEditingController controller) {
    return TextFormField(
      autofillHints: const [AutofillHints.email],
      keyboardType: TextInputType.emailAddress,
      controller: controller,
      decoration: InputDecoration(
          border: const OutlineInputBorder(),
          labelText: "E-mail".tr()),
      validator: (String? value) {
        if (value!.isEmpty || !value.contains('@')) {
          return "E-mail is not valid!".tr();
        }
      },
    );
  }

  static TextFormField password(TextEditingController controller) {
    return TextFormField(
      controller: controller,
      autofillHints: const [AutofillHints.password],
      keyboardType: TextInputType.text,
      obscureText: true,
      decoration: InputDecoration(
          border: const OutlineInputBorder(),
          labelText: "Password".tr()),
      validator: (String? value) {
        if (value!.isEmpty) {
          return "Fill the password!".tr();
        }
      },
    );
  }

}