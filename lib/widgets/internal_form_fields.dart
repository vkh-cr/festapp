import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/person_fields_strings.dart';

class InternalFormFields {
  static TextFormField email(TextEditingController controller) {
    return TextFormField(
      autofillHints: const [AutofillHints.email],
      keyboardType: TextInputType.emailAddress,
      controller: controller,
      decoration: InputDecoration(
          border: const OutlineInputBorder(),
          labelText: PersonFieldsStrings.email),
      validator: (String? value) {
        if (value!.isEmpty || !value.contains('@')) {
          return PersonFieldsStrings.emailInvalid;
        }
        return null;
      },
    );
  }
}
