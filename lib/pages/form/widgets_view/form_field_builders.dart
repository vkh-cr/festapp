import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/seatReservation/model/SeatModel.dart';
import 'package:fstapp/dataModels/FormFields.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/dataServicesEshop/DbOrders.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:fstapp/services/HtmlHelper.dart';
import 'package:fstapp/widgets/HtmlView.dart';

class FormFieldBuilders {
  static Widget buildTitleWidget(String displayTitle, bool isRequired, BuildContext context,
      {FocusNode? focusNode, TextStyle? textStyle}) {
    final TextStyle defaultLabelStyle = Theme.of(context).inputDecorationTheme.labelStyle ??
        TextStyle(
            fontSize: 16 * FormHelper.fontSizeFactor,
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

  static Widget buildTicketField(BuildContext context, FormHolder formHolder, TicketHolder ticket) {
    if (ticket.fields.none((f) => f.fieldType == FormHelper.fieldTypeSpot)) {
      if (ticket.tickets.isEmpty) {
        ticket.tickets.add(FormTicketModel(
            ticketValues: ticket.fields, ticketKey: GlobalKey<FormBuilderState>()));
      }
      return FormBuilder(
        key: ticket.tickets[0].ticketKey,
        onChanged: formHolder.controller!.updateTotalPrice,
        child: Column(
          children: FormHelper.getFormFields(
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
                  alignment: Alignment.center,
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
                          style: TextStyle(fontSize: 14 * FormHelper.fontSizeFactor),
                        ),
                        Divider(color: Colors.black),
                        FormBuilder(
                          key: ticket.tickets[i].ticketKey,
                          onChanged: formHolder.controller!.updateTotalPrice,
                          child: Column(
                            children: FormHelper.getFormFields(
                                context,
                                ticket.tickets[i].ticketKey,
                                formHolder,
                                ticket.tickets[i].ticketValues
                                    .where((f) => f.fieldType != FormHelper.fieldTypeSpot)
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
        textController.text = seat?.objectModel?.toString() ?? FormHelper.metaEmpty;
        return TextField(
          controller: textController,
          focusNode: _focusNode,
          readOnly: true,
          canRequestFocus: true,
          decoration: InputDecoration(
            label: buildTitleWidget(fieldHolder.title!, fieldHolder.isRequired, context, focusNode: _focusNode),
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

  static FormBuilderTextField buildTextField(
      BuildContext context, FieldHolder fieldHolder, Iterable<String> autofillHints) {
    FocusNode focusNode = FocusNode();
    return FormBuilderTextField(
      maxLines: null,
      name: fieldHolder.id.toString(),
      focusNode: focusNode,
      autofillHints: autofillHints,
      decoration: InputDecoration(
        label: buildTitleWidget(fieldHolder.title!, fieldHolder.isRequired, context, focusNode: focusNode),
      ),
      validator: fieldHolder.isRequired ? FormBuilderValidators.required() : null,
    );
  }

  static Widget buildTextFieldWithDescription(
      BuildContext context, FieldHolder fieldHolder, Iterable<String> autofillHints) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
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
        label: buildTitleWidget(fieldHolder.title!, fieldHolder.isRequired, context, focusNode: _focusNode),
      ),
      validator: FormBuilderValidators.compose([
        if (fieldHolder.isRequired) FormBuilderValidators.required(),
        FormBuilderValidators.email(errorText: FormHelper.emailInvalidMessage()),
      ]),
    );
  }

  static FormBuilderTextField buildBirthYearField(BuildContext context, FieldHolder fieldHolder) {
    FocusNode _focusNode = FocusNode();
    return FormBuilderTextField(
      name: fieldHolder.id.toString(),
      focusNode: _focusNode,
      decoration: InputDecoration(
        label: buildTitleWidget(fieldHolder.title!, fieldHolder.isRequired, context, focusNode: _focusNode),
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
}