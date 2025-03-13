import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/pages/form/widgets_view/option_field_helper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';

import '../form/models/form_holder.dart';
import '../form/models/ticket_holder.dart';

class OrderPreviewScreen extends StatelessWidget {
  final FormHolder formHolder;
  final double totalPrice;
  final VoidCallback onSendPressed;

  static const double fontSizeFactor = 1.2;

  const OrderPreviewScreen({
    super.key,
    required this.formHolder,
    required this.totalPrice,
    required this.onSendPressed,
  });

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Stack(
        children: [
          IntrinsicHeight(
            child: Align(
              alignment: Alignment.bottomCenter,
              child: ConstrainedBox(
                constraints: BoxConstraints(
                  maxWidth: StylesConfig.formMaxWidth,
                ),
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: SingleChildScrollView(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        // Header
                        Center(
                          child: Text(
                            "Summary".tr(),
                            style: StylesConfig.textStyleBig.copyWith(
                              fontSize: 18 * fontSizeFactor,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                        const SizedBox(height: 16),

                        // Personal Info Section
                        _buildDataSection(context),

                        const SizedBox(height: 16),
                        const Divider(),

                        // Tickets Section
                        _buildTicketsSection(context),

                        const SizedBox(height: 16),

                        // Total Price
                        _buildTotalPrice(context),

                        const SizedBox(height: 16),

                        // Submit Button
                        Center(
                          child: ButtonsHelper.primaryButton(
                              context: context,
                              onPressed: onSendPressed,
                              label: "Submit order".tr(),
                              height: 50.0,
                              width: 250.0
                          )),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),

          // Close Icon
          Positioned(
            top: 0,
            right: 0,
            child: IconButton(
              icon: Icon(
                Icons.close,
                size: 24 * fontSizeFactor, // Make the icon size scalable with the factor
              ),
              onPressed: () {
                Navigator.of(context).pop(); // Close the modal
              },
              tooltip: "Close".tr(),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDataSection(BuildContext context) {
    // Filter personal info fields based on their type
    final dataFields = formHolder.fields.where((field) {
      return field.fieldType != FormHelper.fieldTypeTicket;
    }).toList();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: dataFields.map((field) {
        var value = field.getValue(formHolder.controller!.globalKey);
        if(value != null){
          return _buildInfoRow(
            context,
            field.title!,
            value.toString(),
            field.fieldType
          );
        }
        return SizedBox.shrink();
      }).toList(),
    );
  }

  Widget _buildTicketsSection(BuildContext context) {
    final ticketHolder = formHolder.fields
        .firstWhere((field) => field.fieldType == FormHelper.fieldTypeTicket) as TicketHolder;

    return Column(
      children: ticketHolder.tickets.asMap().entries.map((entry) {
        final ticketIndex = entry.key + 1;
        final ticket = entry.value;

        return Padding(
          padding: const EdgeInsets.symmetric(vertical: 8.0),
          child: Container(
            width: double.infinity,
            decoration: BoxDecoration(
              color: ThemeConfig.whiteColor(context),
              border: Border.all(
                color: Theme.of(context).primaryColor,
                width: 2.0,
              ),
              borderRadius: BorderRadius.circular(8.0),
            ),
            padding: const EdgeInsets.all(12.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  ticketHolder.tickets.length > 1 ? "${"Ticket".tr()} $ticketIndex" : "Ticket".tr(),
                  style: StylesConfig.textStyleBig.copyWith(
                    fontSize: 16 * fontSizeFactor,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 8),

                if (ticket.seat != null)
                  _buildInfoRow(context, "Spot".tr(), ticket.seat!.objectModel.toString()),

                // Display ticket details
                ...ticket.ticketValues.where((entry) {
                  // Filter out rows with null values
                  final value = entry.getValue(ticket.ticketKey);
                  return value != null && value.toString().isNotEmpty;
                }).map((entry) {

                  String s;
                  var value = entry.getValue(ticket.ticketKey);

                  if(value is FormOptionModel){
                    s = OptionFieldHelper.buildOptionTitle(context, entry.getValue(ticket.ticketKey));
                  } else {
                    s = value.toString();
                  }

                  return _buildInfoRow(
                      context,
                      entry.title!,
                      s,
                      entry.fieldType);
                }),
              ],
            ),
          ),
        );
      }).toList(),
    );
  }


  Widget _buildInfoRow(BuildContext context, String label, String value, [String? fieldType]) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 6.0),
      child: SelectableText.rich(
        TextSpan(
          children: [
            TextSpan(
              text: "$label: ",
              style: TextStyle(fontSize: 14 * fontSizeFactor),
            ),
            TextSpan(
              text: FormHelper.fieldTypeValue(context, value, fieldType),
              style: TextStyle(fontSize: 14 * fontSizeFactor),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTotalPrice(BuildContext context) {
    return Center(
      child: Text(
        "Total Price: {price}".tr(namedArgs: {
          "price": Utilities.formatPrice(context, totalPrice),
        }),
        style: StylesConfig.textStyleBig.copyWith(
          fontSize: 16 * fontSizeFactor,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}
