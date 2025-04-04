import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_services_eshop/db_eshop.dart';
import 'package:fstapp/data_services_eshop/db_tickets.dart';
import 'package:fstapp/pages/occasion/scan_page.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'dart:math';
import 'package:fstapp/widgets/html_view.dart';

class TicketCodeHelper {
  static String generateRandomCode(int length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    Random rnd = Random();
    return String.fromCharCodes(
      Iterable.generate(
        length,
            (_) => chars.codeUnitAt(rnd.nextInt(chars.length)),
      ),
    );
  }

  static Future<bool> showScanTicketCode(
      BuildContext context,
      String titleMessage,
      String formLink) async {

    String? getCode = await DbTickets.getScanCode(formLink);
    if(getCode == null){
      getCode = generateRandomCode(5);
      await DbTickets.updateScanCode(formLink, getCode);
    }
    String generatedCode = getCode;
    bool result = false;
    String linkBase = "${AppConfig.webLink}/#/${ScanPage.ROUTE}/";
    String fullLink = linkBase + generatedCode;

    // Add the htmlLink field here
    String htmlLink = '<a href="$fullLink">$fullLink</a>';

    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return StatefulBuilder(
          builder: (BuildContext context, StateSetter setState) {
            Future<void> handleGenerateCode() async {
              bool confirm = await DialogHelper.showConfirmationDialogAsync(
                  context,
                  titleMessage,
                  "By generating a new code, the old one will be replaced and will no longer work.".tr()
              );
              if (confirm) {
                String newCode = generateRandomCode(5);
                await DbTickets.updateScanCode(formLink, newCode);
                setState(() {
                  generatedCode = newCode;
                  fullLink = "$linkBase$newCode";
                  htmlLink = '<a href="$fullLink">$fullLink</a>'; // Update htmlLink
                });
              }
            }

            void handleCopyCode() {
              Clipboard.setData(ClipboardData(text: generatedCode));
              ToastHelper.Show(context, "Copied to clipboard".tr());
            }

            void handleCopyLink() {
              Clipboard.setData(ClipboardData(text: fullLink));
              ToastHelper.Show(context, "Copied to clipboard".tr());
            }

            return AlertDialog(
              title: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Expanded(child: Text(titleMessage)),
                  IconButton(
                    icon: Icon(Icons.close),
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                  ),
                ],
              ),
              content: SingleChildScrollView(
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16.0),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Provide the following link or code to the people who will be checking the tickets.",
                        style: TextStyle(fontSize: 15),
                      ).tr(),
                      const SizedBox(height: 28),
                      Row(
                        children: [
                          Expanded(
                            child: HtmlView(
                              html: htmlLink, // Use htmlLink instead of fullLink
                              fontSize: 14,
                              isSelectable: true,
                            ),
                          ),
                          IconButton(
                            icon: Icon(Icons.copy),
                            tooltip: 'Copy Link'.tr(),
                            onPressed: fullLink.isNotEmpty
                                ? handleCopyLink
                                : null,
                          ),
                        ],
                      ),
                      const SizedBox(height: 20),
                      Row(
                        children: [
                          Expanded(
                            child: SelectableText(
                              generatedCode.isNotEmpty
                                  ? '$generatedCode'
                                  : '',
                              style: TextStyle(fontSize: 16),
                            ),
                          ),
                          IconButton(
                            icon: Icon(Icons.copy),
                            tooltip: 'Copy'.tr(),
                            onPressed: generatedCode.isNotEmpty
                                ? handleCopyCode
                                : null,
                          ),
                        ],
                      ),
                      const SizedBox(height: 10),
                      Center(
                        child: ElevatedButton(
                          onPressed: handleGenerateCode,
                          child: Text("Generate New Code").tr(),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            );
          },
        );
      },
    );

    return result;
  }
}
