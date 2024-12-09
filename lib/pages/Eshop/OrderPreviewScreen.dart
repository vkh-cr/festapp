import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataModels/FormFields.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';

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
                        _buildPersonalInfoSection(context),

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

  Widget _buildPersonalInfoSection(BuildContext context) {
    // Filter personal info fields based on their type
    final personalInfoFields = formHolder.fields.where((field) {
      return [
        FormHelper.fieldTypeName,
        FormHelper.fieldTypeSurname,
        FormHelper.fieldTypeEmail,
        FormHelper.fieldTypeNote,
      ].contains(field.fieldType);
    }).toList();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: personalInfoFields.map((field) {
        var value = field.getValue(formHolder.controller!.globalKey);
        if(value != null){
          return _buildInfoRow(
            field.label!,
            value.toString(),
          );
        }
        return SizedBox.shrink();
      }).toList(),
    );
  }

  Widget _buildTicketsSection(BuildContext context) {
    final ticketHolder = formHolder.fields
        .firstWhere((field) => field.fieldType == FormHelper.fieldTypeTicket) as TicketHolder;

    final ticketWidgets = ticketHolder.tickets.asMap().entries.map((entry) {
      final ticketIndex = entry.key;
      final ticket = entry.value;

      // Build a card for the ticket with the index (1-based)
      return _buildTicketCard(context, ticket, ticketIndex + 1);
    }).toList();

    return Column(
      children: ticketWidgets,
    );
  }

  Widget _buildTicketCard(BuildContext context, FormTicketModel ticket, int index) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Container(
        decoration: BoxDecoration(
          color: ThemeConfig.whiteColor(context),
          border: Border.all(
            color: Theme.of(context).primaryColor, // Use the primary color for the border
            width: 2.0,
          ),
          borderRadius: BorderRadius.circular(8.0),
        ),
        padding: const EdgeInsets.all(12.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Display ticket index at the top of the container
            Text(
              "${"Ticket".tr()} $index",
              style: StylesConfig.textStyleBig.copyWith(
                fontSize: 16 * fontSizeFactor,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),

            _buildInfoRow("Spot".tr(), ticket.seat.objectModel.toString()),
            // Display ticket details
            ...ticket.ticketValues.where((entry) {
              // Filter out rows with null values
              final value = entry.getValue(ticket.ticketKey);
              return value != null && value.toString().isNotEmpty;
            }).map((entry) {
              return _buildInfoRow(entry.label!, entry.getValue(ticket.ticketKey).toString());
            }),
          ],
        ),
      ),
    );
  }

  Widget _buildInfoRow(String label, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "$label: ",
            style: TextStyle(
              fontSize: 14 * fontSizeFactor,
            ),
          ),
          Expanded(
            child: Text(
              value,
              style: TextStyle(
                fontSize: 14 * fontSizeFactor, // Regular style for value
              ),
            ),
          ),
        ],
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
