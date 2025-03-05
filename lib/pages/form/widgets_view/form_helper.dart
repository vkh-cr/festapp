import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/seatReservation/model/SeatModel.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'package:fstapp/pages/form/widgets_view/check_box_field_builder.dart';
import 'package:fstapp/pages/form/widgets_view/radio_field_builder.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:fstapp/widgets/standard_dialog.dart';
import '../models/birth_date_field_holder.dart';
import '../models/field_holder.dart';
import '../models/form_holder.dart';
import '../models/ticket_holder.dart';
import 'birth_date_field_builder.dart';
import 'form_field_builders.dart';

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
  static const String fieldTypeBirthDate = "birth_date";

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
  static String birthDateLabel() => "Birth Date".tr();
  static String emailInvalidMessage() => "E-mail is not valid!".tr();
  static String maleLabel() => "Male".tr();
  static String femaleLabel() => "Female".tr();
  static String notSpecifiedLabel() => "Not specified".tr();

  static String ticketLabel() => "Ticket".tr();
  static String textLabel() => "Text".tr();
  static String selectOneLabel() => "Single Choice".tr();
  static String selectManyLabel() => "Multiple Choice".tr();
  static String productTypeLabel() => "Product Type".tr();

  static bool isAlwaysRequired(String? type) {
    return const [
      fieldTypeEmail,
      fieldTypeTicket,
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
        return ticketLabel();
      case fieldTypeText:
        return textLabel();
      case fieldTypeSelectOne:
        return selectOneLabel();
      case fieldTypeSelectMany:
        return selectManyLabel();
      case fieldTypeProductType:
        return productTypeLabel();
      case fieldTypeBirthDate:
        return birthDateLabel();
      default:
        return fieldType.tr();
    }
  }


  static double fontSizeFactor = 1.2;

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

  static Widget createFormField(BuildContext context, GlobalKey<FormBuilderState> formKey,
      FormHolder formHolder, FieldHolder field) {
    final bool isRequiredField = field.isRequired;
    switch (field.fieldType) {
      case fieldTypeText:
        return FormFieldBuilders.buildTextFieldWithDescription(context, field, []);
      case fieldTypeNote:
        field.title = noteLabel();
        return FormFieldBuilders.buildTextField(context, field, []);
      case fieldTypeName:
        field.title = nameLabel();
        return FormFieldBuilders.buildTextField(context, field, [AutofillHints.givenName]);
      case fieldTypeSurname:
        field.title = surnameLabel();
        return FormFieldBuilders.buildTextField(context, field, [AutofillHints.familyName]);
      case fieldTypeCity:
        field.title = cityLabel();
        return FormFieldBuilders.buildTextField(context, field, [AutofillHints.addressCity]);
      case fieldTypeSpot:
        field.title = spotLabel();
        return FormFieldBuilders.buildSpotField(context, formKey, formHolder, field);
      case fieldTypeEmail:
        field.title = emailLabel();
        return FormFieldBuilders.buildEmailField(context, field);
      case fieldTypeSex:
        field.title = sexLabel();
        var sexOptions = [
          FormOptionModel(UserInfoModel.sexes[0], maleLabel()),
          FormOptionModel(UserInfoModel.sexes[1], femaleLabel()),
        ];
        if (!isRequiredField) {
          sexOptions.insert(0, FormOptionModel(UserInfoModel.sexes[2], notSpecifiedLabel()));
        }
        return RadioFieldBuilder.buildRadioField(context, field, sexOptions, formHolder);
      case fieldTypeSelectOne:
        var optionsField = field as OptionsFieldHolder;
        return RadioFieldBuilder.buildRadioField(context, optionsField, optionsField.options, formHolder);
      case fieldTypeSelectMany:
        var optionsField = field as OptionsFieldHolder;
        return CheckboxFieldBuilder.buildSelectManyField(context, optionsField, optionsField.options, formHolder);
      case fieldTypeProductType:
        var optionsField = field as OptionsFieldHolder;
        return RadioFieldBuilder.buildRadioField(context, optionsField, optionsField.options, formHolder);
      case fieldTypeBirthDate:
        field.title = birthDateLabel();
        return BirthDateFieldBuilder(
            fieldHolder: field as BirthDateFieldHolder,
            formKey: formHolder.controller!.globalKey,
        );
      case fieldTypeBirthYear:
        field.title = birthYearLabel();
        return FormFieldBuilders.buildBirthYearField(context, field);
      case fieldTypeTicket:
        var ticketHolder = field as TicketHolder;
        return FormFieldBuilders.buildTicketField(context, formHolder, ticketHolder);
      default:
        return const SizedBox.shrink();
    }
  }

  static Map<String, dynamic> replaceSpotWithId(Map<String, dynamic> inputData) {
    if (inputData.containsKey(fieldTypeTicket) && inputData[fieldTypeTicket] is List) {
      List<dynamic> tickets = inputData[fieldTypeTicket];
      for (int i = 0; i < tickets.length; i++) {
        var ticket = tickets[i];
        if (ticket is Map<String, dynamic> && ticket.containsKey(fieldTypeSpot)) {
          var spot = ticket[fieldTypeSpot];
          if (spot is BlueprintObjectModel) {
            ticket[fieldTypeSpot] = spot.id;
          }
        }
      }
    }
    return inputData;
  }

  static Widget buildDescriptionButton(BuildContext context, String title, String description) {
    return TextButton(
      onPressed: () {
        showDialog(
          context: context,
          builder: (context) => StandardDialog(
            content: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    title ?? "Description".tr(),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 8),
                  HtmlView(
                    html: description!,
                    isSelectable: true,
                  ),
                ],
              ),
            ),
          ),
        );
      },
      child: Text("View more".tr()),
    );
  }

  /// This is the custom UI for each option (both radio & checkbox).
  /// It is a “card” with a border that highlights when selected.
  static Widget buildOptionCard({
    required BuildContext context,
    required FormOptionModel option,
    required bool hasDescription,
    required bool hasAnyDescriptions,
    required bool isCheckbox,
  }) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 4),
      decoration: BoxDecoration(
        color: Theme.of(context).cardColor,
        border: Border.all(
          color: Colors.grey.shade300,
          width: 1,
        ),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // The actual Radio or Checkbox is rendered by FormBuilder inside
            // the option. Usually, that means FormBuilder places it on the left.
            // If you want to show it inside your custom widget, you'd set
            // `optionWidgetBuilder` in the `FormBuilderFieldOption`. But
            // let's keep it simple, so the default radio/checkbox is to the left
            // and we just handle text & description to the right:
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Title
                  Text(
                    buildOptionTitle(context, option),
                    style: TextStyle(
                      fontSize: 14.0 * FormHelper.fontSizeFactor,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const SizedBox(height: 4),
                  // If there's a description and at least one option in the group
                  // has a description, show the inline HtmlView.
                  if (hasAnyDescriptions)
                    AnimatedSwitcher(
                      duration: const Duration(milliseconds: 200),
                      child: hasDescription
                          ? HtmlView(
                        html: option.description ?? '',
                        isSelectable: true,
                      )
                          : const SizedBox.shrink(),
                    ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  /// Helper to build the text for the option's title, including price if > 0.
  static String buildOptionTitle(BuildContext context, FormOptionModel option) {
    if (option.price > 0) {
      final priceStr = Utilities.formatPrice(context, option.price);
      return '${option.title} ($priceStr)';
    } else {
      return option.title;
    }
  }

  static TextStyle labelTextStyle(BuildContext context) {
    return TextStyle(
      fontWeight: FontWeight.bold,
      color: ThemeConfig.grey700(context),
      fontSize: 19 * FormHelper.fontSizeFactor,
    );
  }

  static Widget buildLabel(BuildContext context, String label, {bool isRequired = false}) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          label,
          style: FormHelper.labelTextStyle(context),
        ),
        if (isRequired)
          Text(
            ' *',
            style: FormHelper.labelTextStyle(context).copyWith(
              color: ThemeConfig.redColor(context),
            ),
          ),
      ],
    );
  }

}
