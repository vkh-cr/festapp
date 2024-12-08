import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/seatReservation/model/SeatModel.dart';
import 'package:fstapp/dataModels/FormFields.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';

class FormHelper {
  // Field Type Constants
  static const String fieldTypeName = "name";
  static const String fieldTypeSurname = "surname";
  static const String fieldTypeCity = "city";
  static const String fieldTypeEmail = "email";
  static const String fieldTypeSex = "sex";
  static const String fieldTypeBirthYear = "birth_year";
  static const String fieldTypeNote = "note";
  static const String fieldTypeSpot = "spot";

  static const String fieldTypeTicket = "ticket";

  static const String metaMaxTickets = "max_tickets";
  static const String metaFields = "fields";
  static const String metaType = "type";
  static const String metaLabel = "label";
  static const String metaOptions = "options";
  static const String metaOptionsType = "optionsType";
  static const String metaSecret = "secret";
  static const String metaForm = "form";
  static const String metaEmpty = "---";

  static const String fieldTypeOptions = "options";

  // Field Attribute Constants
  static const String IS_REQUIRED = "is_required";

  // Labels and messages
  static String noteLabel() => "Note".tr();
  static String nameLabel() => "Name".tr();
  static String surnameLabel() => "Surname".tr();
  static String cityLabel() => "City".tr();
  static String spotLabel() => "Spot".tr();
  static String emailLabel() => "E-mail".tr();
  static String sexLabel() => "I am".tr();
  static String birthYearLabel() => "Birth year".tr();
  static String emailInvalidMessage() => "E-mail is not valid!".tr();
  static String maleLabel() => "Male".tr();
  static String femaleLabel() => "Female".tr();
  static String notSpecifiedLabel() => "Not specified".tr();

  static double fontSizeFactor = 1.2;

  static List<Widget> getAllFormFields(BuildContext context, GlobalKey<FormBuilderState> formKey, FormHolder formHolder) {
    return formHolder.fields.map<Widget>((field) => createFormField(context, formKey, formHolder, field)).toList();
  }

  static List<Widget> getFormFields(BuildContext context, GlobalKey<FormBuilderState> formKey, FormHolder formHolder, List<FieldHolder> fields) {
    return fields.map<Widget>((field) => createFormField(context, formKey, formHolder, field)).toList();
  }

  static bool saveAndValidate(FormHolder formHolder){
    bool toReturn = formHolder.controller!.globalKey.currentState?.saveAndValidate() ?? false;
    for(var k in formHolder.getTicket()!.tickets){
      if(!(k.ticketKey.currentState?.saveAndValidate() ?? false)){
        toReturn = false;
      }
    }
    return toReturn;
  }

  // Retrieve form data by iterating over defined fields
  static Map<String, dynamic> getDataFromForm(FormHolder formHolder) {
    Map<String, dynamic> toReturn = {};
    for (var k in formHolder.fields) {
      toReturn[k.getFieldTypeValue()] = getFieldData(formHolder.controller!.globalKey, k);
    }
    return toReturn;
  }

  static String getFieldTypeValue(FieldHolder fieldHolder){
    if(fieldHolder is OptionsFieldHolder){
      return fieldHolder.optionsType;
    }
    return fieldHolder.fieldType;
  }

  // Determine the correct data from the form based on type
  static dynamic getFieldData(GlobalKey<FormBuilderState> formKey, FieldHolder fieldHolder) {
    var fieldValue = formKey.currentState?.fields[fieldHolder.getFieldTypeValue()]?.value;

    if (fieldHolder.fieldType == fieldTypeSex) {
      if (fieldValue == null) {
        return null;
      }
      return (fieldValue as FormOptionModel).id;
    } else if (fieldHolder.fieldType == fieldTypeBirthYear) {
      return (fieldValue != null && fieldValue.isNotEmpty) ? int.tryParse(fieldValue) : null;
    } else if (fieldHolder.fieldType == fieldTypeSpot) {
      if (fieldValue is SeatModel) {
        return fieldValue.objectModel;
      }
      return null;
    } else if (fieldHolder.fieldType == fieldTypeTicket) {
      // Collect ticket data from multiple ticket forms
      List<Map<String, dynamic>> tickets = [];

      var ticket = fieldHolder as TicketHolder;
      for (int i = 0; i < ticket.tickets.length; i++) {
        final ticketKey = ticket.tickets[i].ticketKey;
        if (ticketKey.currentState == null) continue;

        Map<String, dynamic> ticketData = {};

        for(var subFieldHolder in ticket.fields){
          ticketData[subFieldHolder.getFieldTypeValue()] = getFieldData(ticketKey, subFieldHolder);
        }
        ticketData[fieldTypeSpot] = ticket.tickets[i].seat.objectModel;
        tickets.add(ticketData);
      }

      return tickets;
    }

    if(fieldValue is String){
      return fieldValue.trim();
    }
    return fieldValue;
  }


  // Create individual form field widget based on configuration
  static Widget createFormField(BuildContext context, GlobalKey<FormBuilderState> formKey, FormHolder formHolder, FieldHolder field) {
    final bool isRequiredField = field.isRequired;
    switch (field.fieldType) {
      case fieldTypeNote:
        field.label = noteLabel();
        return buildTextField(field, []);
      case fieldTypeName:
        field.label = nameLabel();
        return buildTextField(field, [AutofillHints.givenName]);
      case fieldTypeSurname:
        field.label = surnameLabel();
        return buildTextField(field, [AutofillHints.familyName]);
      case fieldTypeCity:
        field.label = cityLabel();
        return buildTextField(field, [AutofillHints.addressCity]);
      case fieldTypeSpot:
        field.label = spotLabel();
        return buildSpotField(context, formKey, formHolder, field);
      case fieldTypeEmail:
        field.label = emailLabel();
        return buildEmailField(field);
      case fieldTypeSex:
        field.label = sexLabel();
        var sexOptions = [
          FormOptionModel(UserInfoModel.sexes[0], maleLabel()),
          FormOptionModel(UserInfoModel.sexes[1], femaleLabel()),
        ];
        if (!isRequiredField) {
          sexOptions.insert(0, FormOptionModel(UserInfoModel.sexes[2], notSpecifiedLabel()));
        }
        return buildRadioField(field, sexOptions);
      case fieldTypeOptions:
        var optionsField = field as OptionsFieldHolder;
        return buildRadioField(optionsField, optionsField.options);
      case fieldTypeBirthYear:
        field.label = birthYearLabel();
        return buildBirthYearField(field);
      case fieldTypeTicket:
        var ticketHolder = field as TicketHolder;
        return buildTicketField(formHolder, ticketHolder);
      default:
        return const SizedBox.shrink();
    }
  }

  static Widget buildTicketField(
      FormHolder formHolder,
      TicketHolder ticket
      ) {

    return StatefulBuilder(
      builder: (context, setState) {
        Future<void> removeTicket(int index) async {
          await DbEshop.selectSpot(context, formHolder.controller!.formKey!, formHolder.controller!.secret!, ticket.tickets[index].seat.objectModel!.id!, false);
          setState(() {
            ticket.tickets.removeAt(index);
          });
          formHolder.controller!.updateTotalPrice?.call();
        }

        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 12),
            Center(
              child: ButtonsHelper.primaryButton(
                context: context,
                onPressed: () async {
                  var seats = await formHolder.controller!.showSeatReservation!(ticket.tickets.map((t)=>t.seat).toList());
                  if(seats != null){
                    ticket.updateTickets(seats);
                  }
                  formHolder.controller!.updateTotalPrice?.call();
                },
                label: "Výběr místa",
                height: 50.0,
                width: 250.0,
                suffixIcon: Icon(Icons.event_seat)
              ),
            ),
            const SizedBox(height: 12),
            for (int i = 0; i < ticket.tickets.length; i++)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8),
                child: Align(
                  alignment: Alignment.center, // Center the ticket
                  child: Container(
                    decoration: BoxDecoration(
                      color: ThemeConfig.whiteColor(context),
                      border: Border.all(color: Theme.of(context).primaryColor, width: 2.0),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    padding: const EdgeInsets.all(12),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Stack(
                          children: [
                            Padding(
                              padding: const EdgeInsets.symmetric(vertical: 12),
                              child: Align(
                                alignment: Alignment.center,
                                child: Text(
                                  "Ticket {number}".tr(namedArgs: {"number": (i + 1).toString()}), // Use translated string
                                  style: TextStyle(
                                    fontWeight: FontWeight.bold,
                                    fontSize: 16 * fontSizeFactor,
                                  ),
                                ),
                              ),
                            ),
                            Align(
                              alignment: Alignment.centerRight,
                              child: IconButton(
                                onPressed: () => removeTicket(i),
                                icon: Icon(Icons.delete),
                                tooltip: "Delete".tr(),
                              ),
                            ),
                          ],
                        ),
                        Text("${ticket.tickets[i].seat.objectModel}",
                          style: TextStyle(
                          fontSize: 14 * fontSizeFactor,
                        ),),
                        Divider(
                            color: Colors.black
                        ),
                        FormBuilder(
                          key: ticket.tickets[i].ticketKey, // Assign the corresponding key
                          onChanged: formHolder.controller!.updateTotalPrice, // Trigger price update on change
                          child: Column(
                            children: getFormFields(context, ticket.tickets[i].ticketKey, formHolder, ticket.tickets[i].ticketValues),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
          ],
        );
      },
    );
  }


  // Build a simple text field with optional validation
  static Widget buildSpotField(BuildContext context, GlobalKey<FormBuilderState> formKey, FormHolder formHolder, FieldHolder fieldHolder) {
    TextEditingController textController = TextEditingController();

    return FormBuilderField<SeatModel>(
      name: fieldHolder.fieldType,
      validator: FormBuilderValidators.compose([
        if (fieldHolder.isRequired) FormBuilderValidators.required(),
            (value) => value == null ? "Please select a seat.".tr() : null,
      ]),
      builder: (FormFieldState<SeatModel?> field) {
        SeatModel? seat = field.value;
        textController.text = seat?.objectModel?.toString() ?? metaEmpty;
        return TextField(
          controller: textController,
          readOnly: true,
          canRequestFocus: false,
          decoration: InputDecoration(
            labelText: fieldHolder.label,
            suffixIcon: const Icon(Icons.event_seat),
            labelStyle: StylesConfig.textStyleBig.copyWith(fontSize: 16 * fontSizeFactor),
            errorText: field.errorText,
          ),
          onTap: () async {
            await formHolder.controller!.showSeatReservation!(seat == null ? []:[seat]);
          },
        );
      },
    );
  }

  // Build a simple text field with optional validation
  static FormBuilderTextField buildTextField(FieldHolder fieldHolder, Iterable<String> autofillHints) {
    return FormBuilderTextField(
      name: fieldHolder.fieldType,
      autofillHints: autofillHints,
      decoration: InputDecoration(
        labelText: fieldHolder.label,
        labelStyle: TextStyle(fontSize: 16 * fontSizeFactor),
      ),
      validator: fieldHolder.isRequired ? FormBuilderValidators.required() : null,
    );
  }

  static FormBuilderTextField buildEmailField(FieldHolder fieldHolder) {
    return FormBuilderTextField(
      name: fieldHolder.fieldType,
      autofillHints: [AutofillHints.email],
      decoration: InputDecoration(
        labelText: fieldHolder.label,
        labelStyle: TextStyle(fontSize: 16 * fontSizeFactor),
      ),
      validator: FormBuilderValidators.compose([
        if (fieldHolder.isRequired) FormBuilderValidators.required(),
        FormBuilderValidators.email(errorText: emailInvalidMessage()),
      ]),
    );
  }

  // Build a radio group field using the FieldHolder as parameter
  static FormBuilderRadioGroup buildRadioField(FieldHolder fieldHolder, List<FormOptionModel> optionsIn) {
    List<FormBuilderFieldOption<FormOptionModel>> options = optionsIn.map(
          (o) => FormBuilderFieldOption(
        value: FormOptionModel(o.id, o.name, price: o.price),
        child: Text(
          o.name,
          style: TextStyle(fontSize: 14.0 * fontSizeFactor),
        ),
      ),
    ).toList();

    return FormBuilderRadioGroup<FormOptionModel>(
      name: fieldHolder.getFieldTypeValue(),
      decoration: InputDecoration(
        labelText: fieldHolder.label,
        labelStyle: StylesConfig.textStyleBig.copyWith(fontSize: 16 * fontSizeFactor),
      ),
      validator: fieldHolder.isRequired ? FormBuilderValidators.required() : null,
      options: options,
      initialValue: options.isNotEmpty ? options.first.value : null,
      orientation: OptionsOrientation.vertical,
      wrapDirection: Axis.vertical,
    );
  }

  static FormBuilderRadioGroup buildGenericOptions(
      String name, String label, List<FormOptionModel> optionsIn) {
    List<FormBuilderFieldOption<FormOptionModel>> options = [];

    for (var o in optionsIn) {
      options.add(FormBuilderFieldOption(
          value: FormOptionModel(
            o.id,
            o.name,
            price: o.price,
          ),
        child: Text(
          o.name,
          style: TextStyle(fontSize: 14.0 * fontSizeFactor), // Adjust font size dynamically
        ),
      ));
    }

    // Use the first option as the default initial value
    final initialValue = options.isNotEmpty ? options.first.value : null;

      return FormBuilderRadioGroup<FormOptionModel>(
      name: name,
      decoration: InputDecoration(labelText: label,
        labelStyle: StylesConfig.textStyleBig.copyWith(fontSize: 16 * fontSizeFactor),),
      validator: FormBuilderValidators.required(),
      options: options,
      initialValue: initialValue,
      orientation: OptionsOrientation.vertical,
      wrapDirection: Axis.vertical,
    );
  }

  static FormBuilderTextField buildBirthYearField(FieldHolder fieldHolder) {
    return FormBuilderTextField(
      name: fieldHolder.fieldType,
      decoration: InputDecoration(labelText: fieldHolder.label,
        labelStyle: TextStyle(fontSize: 16 * fontSizeFactor),),
      validator: FormBuilderValidators.compose([
        if (fieldHolder.isRequired) FormBuilderValidators.required(),
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

  static Map<String, dynamic> replaceSpotWithId(Map<String, dynamic> inputData) {
    if (inputData.containsKey(fieldTypeTicket) && inputData[fieldTypeTicket] is List) {
      List<dynamic> tickets = inputData[fieldTypeTicket];

      // Process each ticket in the list using an index
      for (int i = 0; i < tickets.length; i++) {
        var ticket = tickets[i];
        if (ticket is Map<String, dynamic> && ticket.containsKey(fieldTypeSpot)) {
          // Replace the spot value with spot['id']
          var spot = ticket[fieldTypeSpot];
          if (spot is BlueprintObjectModel) {
            ticket[fieldTypeSpot] = spot.id;
          }
        }
      }
    }
    return inputData;
  }

}