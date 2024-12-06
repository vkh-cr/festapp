import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/FormFields.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:easy_localization/easy_localization.dart';

class OrderPreviewScreen extends StatelessWidget {
  final FormHolder formHolder;
  final double totalPrice;
  final VoidCallback onSendPressed;

  const OrderPreviewScreen({
    Key? key,
    required this.formHolder,
    required this.totalPrice,
    required this.onSendPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              "Order Preview".tr(),
              style: const TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
             ...[
              // List the order details
              Expanded(
                child: SingleChildScrollView(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      for (var entry in formHolder.fields)
                        Padding(
                          padding: const EdgeInsets.symmetric(vertical: 4.0),
                          child: Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                "${entry.label}: ",
                                style: const TextStyle(
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              Expanded(
                                child: Text(
                                  entry.getValue(formHolder.controller!.globalKey).toString(),
                                  style: const TextStyle(
                                    fontSize: 16,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                    ],
                  ),
                ),
              ),
            ],
            const SizedBox(height: 16),
            Text(
              "Total Price: {price}".tr(namedArgs: {
                "price": Utilities.formatPrice(context, totalPrice),
              }),
              style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            ButtonsHelper.bigButton(
              context: context,
              onPressed: onSendPressed,
              label: "Send".tr(),
              height: 50.0,
              width: 250.0,
            ),
          ],
        ),
      ),
    );
  }
}
