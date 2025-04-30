import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/data_models/form_option_model.dart';
import 'package:fstapp/data_models/form_option_product_model.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/pages/form/widgets_view/option_field_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';

import '../form/models/form_holder.dart';
import '../form/models/ticket_holder.dart';

class OrderPreviewScreen extends StatefulWidget {
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
  _OrderPreviewScreenState createState() => _OrderPreviewScreenState();
}

class _OrderPreviewScreenState extends State<OrderPreviewScreen> {
  late ScrollController _scrollController;

  @override
  void initState() {
    super.initState();
    _scrollController = ScrollController();

    // After the frame is rendered, animate scroll to the bottom to reveal the Submit button.
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_scrollController.hasClients) {
        _scrollController.animateTo(
          _scrollController.position.maxScrollExtent,
          duration: const Duration(seconds: 1),
          curve: Curves.easeInOut,
        );
      }
    });
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  // Helper method to intersperse dividers between widgets.
  List<Widget> _addDividers(List<Widget> widgets) {
    if (widgets.isEmpty) return widgets;
    final List<Widget> result = [];
    for (int i = 0; i < widgets.length; i++) {
      result.add(widgets[i]);
      if (i != widgets.length - 1) {
        result.add(const Divider());
      }
    }
    return result;
  }

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
                    controller: _scrollController,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        // Header
                        Center(
                          child: Text(
                            "Summary".tr(),
                            style: StylesConfig.textStyleBig.copyWith(
                              fontSize: 18 * OrderPreviewScreen.fontSizeFactor,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                        const SizedBox(height: 16),

                        // Personal Info Section with dividers between rows (no extra divider at end)
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: _addDividers(_buildDataSection(context)),
                        ),

                        const SizedBox(height: 16),

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
                            onPressed: widget.onSendPressed,
                            label: "Submit order".tr(),
                            height: 50.0,
                            width: 250.0,
                          ),
                        ),
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
                size: 24 * OrderPreviewScreen.fontSizeFactor,
              ),
              onPressed: () {
                Navigator.of(context).pop();
              },
              tooltip: "Close".tr(),
            ),
          ),
        ],
      ),
    );
  }

  // Builds a list of info rows for the personal data section.
  List<Widget> _buildDataSection(BuildContext context) {
    final dataFields = widget.formHolder.fields.where((field) {
      return field.fieldType != FormHelper.fieldTypeTicket;
    }).toList();

    final List<Widget> infoRows = [];
    for (var field in dataFields) {
      var value = field.getValue(widget.formHolder.controller!.globalKey);
      if (value != null) {
        infoRows.add(_buildInfoRow(
          context,
          field.title!,
          value.toString(),
          field.fieldType,
        ));
      }
    }
    return infoRows;
  }

  Widget _buildTicketsSection(BuildContext context) {
    final ticketHolder = widget.formHolder.fields.firstWhere(
          (field) => field.fieldType == FormHelper.fieldTypeTicket,
    ) as TicketHolder;

    return Column(
      children: ticketHolder.tickets.asMap().entries.map((entry) {
        final ticketIndex = entry.key + 1;
        final ticket = entry.value;

        final List<Widget> ticketInfoRows = [];

        ticketInfoRows.add(Text(
          ticketHolder.tickets.length > 1
              ? "${"Ticket".tr()} $ticketIndex"
              : "Ticket".tr(),
          style: StylesConfig.textStyleBig.copyWith(
            fontSize: 16 * OrderPreviewScreen.fontSizeFactor,
            fontWeight: FontWeight.bold,
          ),
        ));

        // If there is a seat, add it.
        if (ticket.seat != null) {
          ticketInfoRows.add(_buildInfoRow(
            context,
            "Spot".tr(),
            ticket.seat!.objectModel.toString(),
          ));
        }

        // Add ticket details rows.
        final ticketDetails = ticket.ticketValues.where((entry) {
          final value = entry.getValue(ticket.ticketKey);
          return value != null && value.toString().isNotEmpty;
        }).map((entry) {
          String s;
          var value = entry.getValue(ticket.ticketKey);
          if (value is FormOptionModel) {
            s = OptionFieldHelper.buildOptionTitle(
                context, entry.getValue(ticket.ticketKey));
          } else {
            if(value is Iterable && value.isNotEmpty && value.first is FormOptionProductModel)
            {
              var sectionPrice = 0.0;
              var products = List<FormOptionProductModel>.from(value);
              sectionPrice += products.fold(0, (sum, product) => sum + product.price);
              s = "$value (${Utilities.formatPrice(context, sectionPrice, currencyCode: widget.formHolder.controller!.currencyCode)})";
            } else if (value.isEmpty) {
              s = "";
            } else {
              s = value.toString();
            }
          }
          return _buildInfoRow(context, entry.title!, s, entry.fieldType);
        }).toList();

        // Combine all ticket info rows with dividers.
        final List<Widget> combinedRows = _addDividers(ticketInfoRows + ticketDetails);

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
              children: combinedRows,
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
              style: TextStyle(fontSize: 14 * OrderPreviewScreen.fontSizeFactor),
            ),
            TextSpan(
              text: FormHelper.fieldTypeValue(context, value, fieldType),
              style: TextStyle(fontSize: 14 * OrderPreviewScreen.fontSizeFactor),
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
          "price": Utilities.formatPrice(context, widget.totalPrice, currencyCode: widget.formHolder.controller!.currencyCode),
        }),
        style: StylesConfig.textStyleBig.copyWith(
          fontSize: 16 * OrderPreviewScreen.fontSizeFactor,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}
