import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/themeConfig.dart';

class FormHelper {
  // Field Type Constants
  static const String fieldTypeName = "name";
  static const String fieldTypeSurname = "surname";
  static const String fieldTypeCity = "city";
  static const String fieldTypeEmail = "email";
  static const String fieldTypeSex = "sex";
  static const String fieldTypeBirthYear = "birth_year";
  static const String fieldTypeNote = "note";

  static const String fieldTypeTicket = "ticket";

  static const String metaMaxTickets = "max_tickets";
  static const String metaFields = "fields";
  static const String metaType = "type";
  static const String metaLabel = "label";
  static const String metaOptions = "options";
  static const String metaOptionsType = "optionsType";
  static const String metaOptionsCode = "code";
  static const String metaOptionsName = "name";
  static const String metaOptionsPrice = "price";

  static const String fieldTypeOptions = "options";

  // Field Attribute Constants
  static const String IS_REQUIRED = "is_required";

  // Labels and messages
  static String noteLabel() => "Note".tr();
  static String nameLabel() => "Name".tr();
  static String surnameLabel() => "Surname".tr();
  static String cityLabel() => "City".tr();
  static String emailLabel() => "E-mail".tr();
  static String sexLabel() => "I am".tr();
  static String birthYearLabel() => "Birth year".tr();
  static String emailInvalidMessage() => "E-mail is not valid!".tr();
  static String maleLabel() => "Male".tr();
  static String femaleLabel() => "Female".tr();
  static String notSpecifiedLabel() => "Not specified".tr();

  static List<Map<String, dynamic>> ticketValues = [];
  static List<GlobalKey<FormBuilderState>> ticketKeys = [];

  // Public method to generate form fields from configuration
  static List<Widget> getFormFields(dynamic fields) {
    return fields.map<Widget>((field) => createFormField(field)).toList();
  }

  // Retrieve form data by iterating over defined fields
  static Map<String, dynamic> getDataFromForm(GlobalKey<FormBuilderState> key, dynamic fields) {
    Map<String, dynamic> toReturn = {};
    for (var k in fields) {
      toReturn[k[metaType]] = getFieldData(key, k[metaType], ticketKeys: ticketKeys);
    }
    return toReturn;
  }

  // Determine the correct data from the form based on type
  static dynamic getFieldData(GlobalKey<FormBuilderState> formKey, String fieldType, {List<GlobalKey<FormBuilderState>>? ticketKeys}) {
    var fieldValue = formKey.currentState?.fields[fieldType]?.value;

    if (fieldType == fieldTypeSex) {
      if (fieldValue == null) {
        return null;
      }
      return (fieldValue as FormOptionModel).code;
    } else if (fieldType == fieldTypeBirthYear) {
      return (fieldValue != null && fieldValue.isNotEmpty) ? int.tryParse(fieldValue) : null;
    } else if (fieldType == fieldTypeTicket) {
      // Collect ticket data from multiple ticket forms
      List<Map<String, dynamic>> tickets = [];

      if (ticketKeys != null) {
        for (int i = 0; i < ticketKeys.length; i++) {
          final ticketKey = ticketKeys[i];
          if (ticketKey.currentState == null) continue;

          Map<String, dynamic> ticketData = {};

          for (FormBuilderFieldState<FormBuilderField<dynamic>, dynamic> ticketSubField in ticketKey.currentState?.fields.values ?? []) {
            var subFieldType = ticketSubField.widget.name;
            var subFieldValue = ticketSubField.value;
            ticketData[subFieldType] = subFieldValue;
          }

          tickets.add(ticketData);
        }
      }

      return tickets; // Return ticket data with all subfields and prices
    }

    return fieldValue?.trim();
  }


  // Create individual form field widget based on configuration
  static Widget createFormField(Map<String, dynamic> field) {
    final bool isRequiredField = field[IS_REQUIRED] ?? false;
    switch (field[metaType]) {
      case fieldTypeNote:
        return buildTextField(fieldTypeName, noteLabel(), isRequiredField, []);
      case fieldTypeName:
        return buildTextField(fieldTypeName, nameLabel(), isRequiredField, [AutofillHints.givenName]);
      case fieldTypeSurname:
        return buildTextField(fieldTypeSurname, surnameLabel(), isRequiredField, [AutofillHints.familyName]);
      case fieldTypeCity:
        return buildTextField(fieldTypeCity, cityLabel(), isRequiredField, [AutofillHints.addressCity]);
      case fieldTypeEmail:
        return buildEmailField(isRequiredField);
      case fieldTypeSex:
        return buildRadioField(fieldTypeSex, sexLabel(), isRequiredField);
      case fieldTypeOptions:
        return buildGenericOptions(field[metaOptionsType], field[metaLabel], field[metaOptions]);
      case fieldTypeBirthYear:
        return buildBirthYearField(fieldTypeBirthYear, birthYearLabel(), isRequiredField);
      case fieldTypeTicket:
        return buildTicketField(field, ticketValues, ticketKeys);
      default:
        return const SizedBox.shrink();
    }
  }

  static Widget buildTicketField(
      Map<String, dynamic> field,
      List<Map<String, dynamic>> ticketValues,
      List<GlobalKey<FormBuilderState>> ticketKeys) {
    final maxTickets = field[metaMaxTickets] ?? 1;

    // Ensure ticketValues and ticketKeys are initialized
    if (ticketValues.isEmpty) {
      ticketValues.add({...field}); // Clone the field structure for the first ticket
      ticketKeys.add(GlobalKey<FormBuilderState>()); // Add a unique key for the first ticket
    }

    return StatefulBuilder(
      builder: (context, setState) {
        void addTicket() {
          if (ticketValues.length < maxTickets) {
            setState(() {
              // Add a new ticket form configuration
              ticketValues.add({...field}); // Clone the field structure for the new ticket

              // Add a new unique key for the new ticket form
              ticketKeys.add(GlobalKey<FormBuilderState>());
            });
          }
        }

        void removeTicket(int index) {
          if (ticketValues.length > 1) {
            setState(() {
              // Remove the ticket field structure
              ticketValues.removeAt(index);

              // Remove the corresponding key
              ticketKeys.removeAt(index);
            });
          }
        }

        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            for (int i = 0; i < ticketValues.length; i++)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8),
                child: Container(
                  decoration: BoxDecoration(
                    color: ThemeConfig.whiteColor(context),
                    border: Border.all(color: Theme.of(context).primaryColor),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  padding: const EdgeInsets.all(12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            "Ticket ${i + 1}".tr(),
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 16,
                            ),
                          ),
                          if (i > 0) // Do not show the remove button for the first ticket
                            IconButton(
                              onPressed: () => removeTicket(i),
                              icon: Icon(Icons.delete, color: Colors.red),
                              tooltip: "Delete Ticket".tr(),
                            ),
                        ],
                      ),
                      FormBuilder(
                        key: ticketKeys[i], // Assign the corresponding key
                        child: Column(
                          children: getFormFields(ticketValues[i][metaFields]),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            if (ticketValues.length < maxTickets)
              Align(
                alignment: Alignment.center,
                child: ElevatedButton.icon(
                  onPressed: addTicket,
                  icon: Icon(Icons.add, color: ThemeConfig.whiteColor(context)),
                  label: const Text("Add another ticket").tr(),
                ),
              ),
          ],
        );
      },
    );
  }


  // Build a simple text field with optional validation
  static FormBuilderTextField buildTextField(String name, String label, bool isRequired, [List<String>? autofillHints]) {
    return FormBuilderTextField(
      name: name,
      autofillHints: autofillHints,
      decoration: InputDecoration(labelText: label),
      validator: isRequired ? FormBuilderValidators.required() : null,
    );
  }

  // Build an email field with validation for format and required status
  static FormBuilderTextField buildEmailField(bool isRequired) {
    return FormBuilderTextField(
      name: fieldTypeEmail,
      autofillHints: [AutofillHints.email],
      decoration: InputDecoration(labelText: emailLabel()),
      validator: FormBuilderValidators.compose([
        if (isRequired) FormBuilderValidators.required(),
        FormBuilderValidators.email(errorText: emailInvalidMessage()),
      ]),
    );
  }

  // Build a radio group for selecting sex
  static FormBuilderRadioGroup buildRadioField(String name, String label, bool isRequired) {
    var options = [
      FormBuilderFieldOption(value: FormOptionModel(UserInfoModel.sexes[0], maleLabel())),
      FormBuilderFieldOption(value: FormOptionModel(UserInfoModel.sexes[1], femaleLabel()))
    ];
    if(!isRequired){
      options.insert(0, FormBuilderFieldOption(value: FormOptionModel(UserInfoModel.sexes[2], notSpecifiedLabel())));
    }
    return FormBuilderRadioGroup(
      name: name,
      decoration: InputDecoration(labelText: label),
      validator: isRequired ? FormBuilderValidators.required() : null,
      options: options,
    );
  }

  static FormBuilderRadioGroup buildGenericOptions(
      String name, String label, List<dynamic> optionsIn) {
    List<FormBuilderFieldOption<FormOptionModel>> options = [];

    for (var o in optionsIn) {
      options.add(FormBuilderFieldOption(
          value: FormOptionModel(
            o[metaOptionsCode],
            o[metaOptionsName],
            price: o[metaOptionsPrice] ?? 0.0, // Use price from the option or default to 0.0
          )));
    }

    // Use the first option as the default initial value
    final initialValue = options.isNotEmpty ? options.first.value : null;

    return FormBuilderRadioGroup<FormOptionModel>(
      name: name,
      decoration: InputDecoration(labelText: label),
      validator: FormBuilderValidators.required(),
      options: options,
      initialValue: initialValue,
      orientation: OptionsOrientation.vertical,
      wrapDirection: Axis.vertical,
    );
  }

  static FormBuilderTextField buildBirthYearField(String name, String label, bool isRequired) {
    return FormBuilderTextField(
      name: name,
      decoration: InputDecoration(labelText: label),
      validator: FormBuilderValidators.compose([
        if (isRequired) FormBuilderValidators.required(),
        // Allow empty for optional field; validate only if non-empty
            (value) {
          if (value == null || value.isEmpty || value == "") {
            return null;
          }
          if (int.tryParse(value) == null) {
            return NumericValidator().translatedErrorText; // uses default numeric error message
          }
          final numericValue = int.parse(value);
          if (numericValue < 1900 || numericValue > DateTime.now().year - 12) {
            return RangeValidator(DateTime.now().year - 12, 1900).translatedErrorText;
          }
          return null;
        },
      ]),
      keyboardType: TextInputType.number,
    );
  }
}

class FormOptionModel {
  FormOptionModel(this.code, this.name, {this.price = 0.0});
  final String name;
  final String code;
  final double price;

  @override
  String toString() => name;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
          other is FormOptionModel &&
              runtimeType == other.runtimeType &&
              code == other.code;

  @override
  int get hashCode => code.hashCode;
}