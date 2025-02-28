import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/seatReservation/model/SeatModel.dart';
import 'package:fstapp/dataModels/FormFields.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'package:fstapp/dataServicesEshop/DbOrders.dart';
import 'package:fstapp/services/Utilities.dart';
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
  static const String fieldTypeText = "text";
  static const String fieldTypeSelectOne = "select_one";
  static const String fieldTypeSelectMany = "select_many";
  static const String fieldTypeProductType = "product_type";
  static const String fieldTypeTicket = "ticket";

  // Additional constant for option delimiter
  static const String optionDelimiter = " | ";

  static const String metaMaxTickets = "max_tickets";
  static const String metaFields = "fields";
  static const String metaType = "type";
  static const String metaLabel = "label";
  static const String metaOptions = "options";
  static const String metaOptionsType = "optionsType";
  static const String metaSecret = "secret";
  static const String metaForm = "form";
  static const String metaEmpty = "---";
  static const String metaProducts = "products";

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

  static bool isAlwaysRequired(String? type) {
    return const [
      fieldTypeEmail,
      fieldTypeTicket,
      // add other always-required types here
    ].contains(type);
  }

  static String fieldTypeToLocale(String fieldType) {
    switch (fieldType) {
      case fieldTypeName:
        return nameLabel();
      case fieldTypeSurname:
        return surnameLabel();
      case fieldTypeCity:
        return cityLabel();
      case fieldTypeEmail:
        return emailLabel();
      case fieldTypeSex:
        return sexLabel();
      case fieldTypeBirthYear:
        return birthYearLabel();
      case fieldTypeNote:
        return noteLabel();
      case fieldTypeSpot:
        return spotLabel();
      case fieldTypeTicket:
        return "Ticket".tr();
      case fieldTypeText:
        return "Text".tr();
      case fieldTypeSelectOne:
        return "Single Choice".tr();
      case fieldTypeSelectMany:
        return "Multiple Choice".tr();
      case fieldTypeProductType:
        return "Product Type".tr();
      default:
        return fieldType;
    }
  }

  static double fontSizeFactor = 1.2;

  /// Helper method that creates a title widget.
  /// When the provided FocusNode is focused (i.e. the associated field has a cursor),
  /// the title text changes to the primary color.
  static Widget buildTitleWidget(String displayTitle, bool isRequired, BuildContext context,
      {FocusNode? focusNode, TextStyle? textStyle}) {
    final TextStyle defaultLabelStyle = Theme.of(context).inputDecorationTheme.labelStyle ??
        TextStyle(
            fontSize: 16 * fontSizeFactor,
            color: ThemeConfig.grey600(context),
            fontFamily: ThemeConfig.fontFamily);
    final TextStyle effectiveBaseStyle =
    textStyle != null ? defaultLabelStyle.merge(textStyle) : defaultLabelStyle;

    if (focusNode != null) {
      return AnimatedBuilder(
        animation: focusNode,
        builder: (context, child) {
          final bool isFocused = focusNode.hasFocus;
          final TextStyle effectiveStyle = effectiveBaseStyle.copyWith(
            color: isFocused ? Theme.of(context).primaryColor : effectiveBaseStyle.color,
          );
          final TextSpan? requiredStar = isRequired
              ? TextSpan(text: ' *', style: TextStyle(color: ThemeConfig.redColor(context)))
              : null;
          return RichText(
            text: TextSpan(
              style: effectiveStyle,
              text: displayTitle,
              children: [if (requiredStar != null) requiredStar],
            ),
          );
        },
      );
    } else {
      final TextSpan? requiredStar = isRequired
          ? TextSpan(text: ' *', style: TextStyle(color: ThemeConfig.redColor(context)))
          : null;
      return RichText(
        text: TextSpan(
          style: effectiveBaseStyle,
          text: displayTitle,
          children: [if (requiredStar != null) requiredStar],
        ),
      );
    }
  }

  static List<Widget> getAllFormFields(
      BuildContext context, GlobalKey<FormBuilderState> formKey, FormHolder formHolder) {
    return formHolder.fields
        .map<Widget>((field) => createFormField(context, formKey, formHolder, field))
        .toList();
  }

  static List<Widget> getFormFields(BuildContext context, GlobalKey<FormBuilderState> formKey,
      FormHolder formHolder, List<FieldHolder> fields) {
    return fields
        .map<Widget>((field) => createFormField(context, formKey, formHolder, field))
        .toList();
  }

  static bool saveAndValidate(FormHolder formHolder) {
    bool toReturn = formHolder.controller!.globalKey.currentState?.saveAndValidate() ?? false;
    for (var k in formHolder.getTicket()!.tickets) {
      if (!(k.ticketKey.currentState?.saveAndValidate() ?? false)) {
        toReturn = false;
      }
    }
    return toReturn;
  }

  // Retrieve form data by iterating over defined fields
  static Map<String, dynamic> getDataFromForm(FormHolder formHolder, [bool? returnWithType]) {
    Map<String, dynamic> toReturn = {};
    for (var k in formHolder.fields) {
      var value = getFieldData(formHolder.controller!.globalKey, k);

      if (k.fieldType == fieldTypeTicket) {
        toReturn[fieldTypeTicket] = value;
      } else {
        if (returnWithType == true) {
          if (toReturn[metaFields] == null) {
            toReturn[metaFields] = {};
          }
          toReturn[metaFields][k.fieldType] = value;
        } else {
          if (toReturn[metaFields] == null) {
            toReturn[metaFields] = [];
          }
          toReturn[metaFields].add({k.id.toString(): value});
        }
      }
    }
    return toReturn;
  }

  // Determine the correct data from the form based on type
  static dynamic getFieldData(GlobalKey<FormBuilderState> formKey, FieldHolder fieldHolder) {
    var fieldValue = formKey.currentState?.fields[fieldHolder.id.toString()]?.value;

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
        for (var subFieldHolder in ticket.fields) {
          if (ticketData[metaFields] == null) {
            ticketData[metaFields] = [];
          }
          var value = getFieldData(ticketKey, subFieldHolder);
          ticketData[metaFields].add({subFieldHolder.fieldType: value});
        }
        if (ticket.tickets[i].seat != null) {
          ticketData[fieldTypeSpot] = ticket.tickets[i].seat!.objectModel;
        }
        tickets.add(ticketData);
      }
      return tickets;
    } else if (fieldHolder.fieldType == fieldTypeSelectMany) {
      // Save answer as "option | option | option" using the defined delimiter.
      if (fieldValue is List) {
        return fieldValue.map((e) {
          if (e is FormOptionModel) return e.title;
          return e.toString();
        }).join(optionDelimiter);
      }
      return fieldValue;
    }
    if (fieldValue is String) {
      return fieldValue.trim();
    }
    return fieldValue;
  }

  // Create individual form field widget based on configuration
  static Widget createFormField(BuildContext context, GlobalKey<FormBuilderState> formKey,
      FormHolder formHolder, FieldHolder field) {
    final bool isRequiredField = field.isRequired;
    switch (field.fieldType) {
      case fieldTypeText:
        return buildTextFieldWithDescription(context, field, []);
      case fieldTypeNote:
        field.title = noteLabel();
        return buildTextField(context, field, []);
      case fieldTypeName:
        field.title = nameLabel();
        return buildTextField(context, field, [AutofillHints.givenName]);
      case fieldTypeSurname:
        field.title = surnameLabel();
        return buildTextField(context, field, [AutofillHints.familyName]);
      case fieldTypeCity:
        field.title = cityLabel();
        return buildTextField(context, field, [AutofillHints.addressCity]);
      case fieldTypeSpot:
        field.title = spotLabel();
        return buildSpotField(context, formKey, formHolder, field);
      case fieldTypeEmail:
        field.title = emailLabel();
        return buildEmailField(context, field);
      case fieldTypeSex:
        field.title = sexLabel();
        var sexOptions = [
          FormOptionModel(UserInfoModel.sexes[0], maleLabel()),
          FormOptionModel(UserInfoModel.sexes[1], femaleLabel()),
        ];
        if (!isRequiredField) {
          sexOptions.insert(0, FormOptionModel(UserInfoModel.sexes[2], notSpecifiedLabel()));
        }
        return buildRadioField(context, field, sexOptions, formHolder);
      case fieldTypeSelectOne:
        var optionsField = field as OptionsFieldHolder;
        return buildRadioField(context, optionsField, optionsField.options, formHolder);
      case fieldTypeSelectMany:
        var optionsField = field as OptionsFieldHolder;
        return buildSelectManyField(context, optionsField, optionsField.options, formHolder);
      case fieldTypeProductType:
        var optionsField = field as OptionsFieldHolder;
        return buildRadioField(context, optionsField, optionsField.options, formHolder);
      case fieldTypeBirthYear:
        field.title = birthYearLabel();
        return buildBirthYearField(context, field);
      case fieldTypeTicket:
        var ticketHolder = field as TicketHolder;
        return buildTicketField(context, formHolder, ticketHolder);
      default:
        return const SizedBox.shrink();
    }
  }

  static Widget buildTicketField(
      BuildContext context, FormHolder formHolder, TicketHolder ticket) {
    if (ticket.fields.none((f) => f.fieldType == fieldTypeSpot)) {
      if (ticket.tickets.isEmpty) {
        ticket.tickets.add(FormTicketModel(
            ticketValues: ticket.fields, ticketKey: GlobalKey<FormBuilderState>()));
      }
      return FormBuilder(
        key: ticket.tickets[0].ticketKey, // Assign the corresponding key
        onChanged: formHolder.controller!.updateTotalPrice, // Trigger price update on change
        child: Column(
          children: getFormFields(
              context, ticket.tickets[0].ticketKey, formHolder, ticket.tickets[0].ticketValues),
        ),
      );
    }
    return StatefulBuilder(
      builder: (context, setState) {
        Future<void> removeTicket(int index) async {
          await DbOrders.selectSpot(
              context,
              formHolder.controller!.formKey!,
              formHolder.controller!.secret!,
              ticket.tickets[index].seat!.objectModel!.id!,
              false);
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
                  var seats = await formHolder.controller!.showSeatReservation!(
                      ticket.tickets.map((t) => t.seat!).toList());
                  if (seats != null) {
                    ticket.updateTickets(seats);
                  }
                  formHolder.controller!.updateTotalPrice?.call();
                },
                label: "Seat selection".tr(),
                height: 50.0,
                width: 250.0,
                suffixIcon: Icon(Icons.event_seat),
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
                                child: buildTitleWidget(
                                  "${"Ticket".tr()} ${i + 1}",
                                  false,
                                  context,
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
                        Text(
                          "${ticket.tickets[i].seat!.objectModel}",
                          style: TextStyle(fontSize: 14 * fontSizeFactor),
                        ),
                        Divider(color: Colors.black),
                        FormBuilder(
                          key: ticket.tickets[i].ticketKey, // Assign the corresponding key
                          onChanged: formHolder.controller!.updateTotalPrice, // Trigger price update on change
                          child: Column(
                            children: getFormFields(
                                context,
                                ticket.tickets[i].ticketKey,
                                formHolder,
                                ticket.tickets[i].ticketValues
                                    .where((f) => f.fieldType != fieldTypeSpot)
                                    .toList()),
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

  // Build a simple text field with optional validation for seat selection
  static Widget buildSpotField(BuildContext context, GlobalKey<FormBuilderState> formKey,
      FormHolder formHolder, FieldHolder fieldHolder) {
    FocusNode _focusNode = FocusNode();
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
          focusNode: _focusNode,
          readOnly: true,
          canRequestFocus: true,
          decoration: InputDecoration(
            label:
            buildTitleWidget(fieldHolder.title!, fieldHolder.isRequired, context, focusNode: _focusNode),
            suffixIcon: const Icon(Icons.event_seat),
            errorText: field.errorText,
          ),
          onTap: () async {
            await formHolder.controller!.showSeatReservation!(seat == null ? [] : [seat]);
          },
        );
      },
    );
  }

  // Build a simple text field with optional validation
  static FormBuilderTextField buildTextField(
      BuildContext context, FieldHolder fieldHolder, Iterable<String> autofillHints) {
    FocusNode _focusNode = FocusNode();
    return FormBuilderTextField(
      maxLines: null,
      name: fieldHolder.id.toString(),
      focusNode: _focusNode,
      autofillHints: autofillHints,
      decoration: InputDecoration(
        label:
        buildTitleWidget(fieldHolder.title!, fieldHolder.isRequired, context, focusNode: _focusNode),
      ),
      validator: fieldHolder.isRequired ? FormBuilderValidators.required() : null,
    );
  }

  static Widget buildTextFieldWithDescription(
      BuildContext context, FieldHolder fieldHolder, Iterable<String> autofillHints) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Optionally, you can add an HtmlView widget here to display a description.
        buildTextField(context, fieldHolder, autofillHints),
      ],
    );
  }

  static FormBuilderTextField buildEmailField(BuildContext context, FieldHolder fieldHolder) {
    FocusNode _focusNode = FocusNode();
    return FormBuilderTextField(
      name: fieldHolder.id.toString(),
      focusNode: _focusNode,
      autofillHints: [AutofillHints.email],
      decoration: InputDecoration(
        label:
        buildTitleWidget(fieldHolder.title!, fieldHolder.isRequired, context, focusNode: _focusNode),
      ),
      validator: FormBuilderValidators.compose([
        if (fieldHolder.isRequired) FormBuilderValidators.required(),
        FormBuilderValidators.email(errorText: emailInvalidMessage()),
      ]),
    );
  }

  // Build a radio group field using the FieldHolder as parameter
  static FormBuilderRadioGroup buildRadioField(
      BuildContext context, FieldHolder fieldHolder, List<FormOptionModel> optionsIn, FormHolder formHolder) {
    List<FormBuilderFieldOption<FormOptionModel>> options = optionsIn
        .map(
          (o) => FormBuilderFieldOption(
        value: o,
        child: Text(
          o.title + (o.price > 0 ? " (${Utilities.formatPrice(context, o.price)})" : ""),
          style: TextStyle(fontSize: 14.0 * fontSizeFactor),
        ),
      ),
    )
        .toList();
    return FormBuilderRadioGroup<FormOptionModel>(
      onChanged: (v) {
        formHolder.controller!.updateTotalPrice?.call();
      },
      name: fieldHolder.id.toString(),
      decoration: InputDecoration(
        label: buildTitleWidget(fieldHolder.title!, fieldHolder.isRequired, context,
            textStyle: TextStyle(
                fontWeight: FontWeight.bold,
                color: ThemeConfig.grey700(context),
                fontSize: 16 * fontSizeFactor)),
      ),
      validator: fieldHolder.isRequired ? FormBuilderValidators.required() : null,
      options: options,
      initialValue: null,
      orientation: OptionsOrientation.vertical,
      wrapDirection: Axis.vertical,
    );
  }

  // Build a checkbox group field for selectMany
  static FormBuilderCheckboxGroup<FormOptionModel> buildSelectManyField(
      BuildContext context, FieldHolder fieldHolder, List<FormOptionModel> optionsIn, FormHolder formHolder) {
    List<FormBuilderFieldOption<FormOptionModel>> options = optionsIn
        .map(
          (o) => FormBuilderFieldOption(
        value: o,
        child: Text(
          o.title + (o.price > 0 ? " (${Utilities.formatPrice(context, o.price)})" : ""),
          style: TextStyle(fontSize: 14.0 * fontSizeFactor),
        ),
      ),
    )
        .toList();
    return FormBuilderCheckboxGroup<FormOptionModel>(
      name: fieldHolder.id.toString(),
      decoration: InputDecoration(
        label: buildTitleWidget(fieldHolder.title!, fieldHolder.isRequired, context,
            textStyle: TextStyle(
                fontWeight: FontWeight.bold,
                color: ThemeConfig.grey700(context),
                fontSize: 16 * fontSizeFactor)),
      ),
      validator: fieldHolder.isRequired ? FormBuilderValidators.required() : null,
      options: options,
      orientation: OptionsOrientation.vertical,
      wrapDirection: Axis.vertical,
      onChanged: (v) {
        formHolder.controller!.updateTotalPrice?.call();
      },
    );
  }

  static FormBuilderTextField buildBirthYearField(BuildContext context, FieldHolder fieldHolder) {
    FocusNode _focusNode = FocusNode();
    return FormBuilderTextField(
      name: fieldHolder.id.toString(),
      focusNode: _focusNode,
      decoration: InputDecoration(
        label:
        buildTitleWidget(fieldHolder.title!, fieldHolder.isRequired, context, focusNode: _focusNode),
      ),
      validator: FormBuilderValidators.compose([
        if (fieldHolder.isRequired) FormBuilderValidators.required(),
            (value) {
          if (value == null || value.isEmpty || value == "") {
            return null;
          }
          if (int.tryParse(value) == null) {
            return NumericValidator().translatedErrorText;
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
