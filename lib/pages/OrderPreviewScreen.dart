import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/dataModels/FormFields.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';

class OrderPreviewScreen extends StatelessWidget {
  final FormHolder formHolder;
  final double totalPrice; // Injected total price
  final VoidCallback onSendPressed;

  const OrderPreviewScreen({
    super.key,
    required this.formHolder,
    required this.totalPrice,
    required this.onSendPressed,
  });

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header
              Center(
                child: Text(
                  "Rekapitulace Vaší objednávky:".tr(),
                  style: const TextStyle(
                    fontSize: 18,
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
                child: ButtonsHelper.bigButton(
                  context: context,
                  onPressed: onSendPressed,
                  label: "Odeslat objednávku".tr(),
                  height: 50.0,
                  width: 250.0,
                ),
              ),
            ],
          ),
        ),
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
        return _buildInfoRow(
          field.label!,
          field.getValue(formHolder.controller!.globalKey).toString(),
        );
      }).toList(),
    );
  }
  Widget _buildTicketsSection(BuildContext context) {
    // Filter ticket-related fields
    final ticketHolder = formHolder.fields
        .firstWhere((field) => field.fieldType == FormHelper.fieldTypeTicket) as TicketHolder;

    return Column(
      children: ticketHolder.ticketValues.asMap().entries.map((entry) {
        final index = entry.key; // Index for ticket values
        final ticketFields = entry.value;
        final ticketKey = ticketHolder.ticketKeys[index]; // Get the corresponding key for this ticket

        return _buildTicketCard(context, ticketFields, ticketKey, index + 1); // Pass ticket key and index
      }).toList(),
    );
  }

  Widget _buildTicketCard(BuildContext context, List<FieldHolder> fieldData, GlobalKey<FormBuilderState> ticketKey, int index) {
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
              "Ticket {number}".tr(namedArgs: {"number": (index).toString()}),
              style: const TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),

            // Display ticket details
            ...fieldData.where((entry) {
              // Filter out rows with null values
              final value = entry.getValue(ticketKey);
              return value != null && value.toString().isNotEmpty;
            }).map((entry) {
              return _buildInfoRow(entry.label!, entry.getValue(ticketKey).toString());
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
            style: const TextStyle(fontWeight: FontWeight.bold),
          ),
          Expanded(
            child: Text(value),
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
        style: const TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}
