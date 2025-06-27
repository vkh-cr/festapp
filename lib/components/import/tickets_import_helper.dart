import 'package:flutter/cupertino.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/import_feature.dart';


import 'csv_import_helper.dart';
import 'import_dialog_helper.dart';

class TicketsImportHelper {

  static Future<void> import(BuildContext context) async {
    final importFeature = FeatureService.getFeatureDetails(FeatureConstants.import) as ImportFeature?;
    if (importFeature == null || !importFeature.isEnabled) return;

    var choice = await ImportDialogHelper.showImportSourceSelectionDialog(
      context,
      showCsvImport: importFeature.importFromCsv,
      showTicketImport: importFeature.importFromTickets,
    );

    if (choice == null) return;

    switch (choice) {
      case ImportSource.csv:
        await CsvImportHelper.importFromCsv(context);
        break;
      case ImportSource.tickets:
        await TicketsImportHelper.importFromTickets(context);
        break;
    }
  }

  static Future<void> importFromTickets(BuildContext context) async {
    var confirm = await DialogHelper.showConfirmationDialogAsync(
        context,
        FeaturesStrings.importFromTicketsTitle,
        FeaturesStrings.importFromTicketsConfirm
    );

    if(!confirm) return;

    try {
      var result = await DbUsers.importUsersFromTickets(RightsService.currentOccasionId()!);

      if (result == null) {
        ToastHelper.Show(context, "${FeaturesStrings.importFromTicketsError}: No response from server.");
        return;
      }

      final Map<String, dynamic> resultMap = result['data'] as Map<String, dynamic>;
      final List<dynamic> insertedUsersRaw = resultMap['inserted'] ?? [];
      final List<dynamic> updatedUsersRaw = resultMap['updated'] ?? [];

      final List<Map<String, dynamic>> insertedUsers = insertedUsersRaw.map((e) => e as Map<String, dynamic>).toList();
      final List<Map<String, dynamic>> updatedUsers = updatedUsersRaw.map((e) => e as Map<String, dynamic>).toList();

      final int insertedCount = insertedUsers.length;
      final int updatedCount = updatedUsers.length;

      final insertedEmails = insertedUsers.map((u) => "- ${u['email']}").join("\n");
      final updatedEmails = updatedUsers.map((u) => "- ${u['email']}").join("\n");

      String message = "${FeaturesStrings.importFromTicketsCompleted}\n\n"
          "${FeaturesStrings.createdUsers} ($insertedCount):\n"
          "${insertedUsers.isEmpty ? FeaturesStrings.none : insertedEmails}\n\n"
          "${FeaturesStrings.updatedUsers} ($updatedCount):\n"
          "${updatedUsers.isEmpty ? FeaturesStrings.none : updatedEmails}";

      await DialogHelper.showConfirmationDialogAsync(
        context,
        FeaturesStrings.importResultsTitle,
        message,
        confirmButtonMessage: FeaturesStrings.ok,
      );
    } catch (e) {
      ToastHelper.Show(context, "${FeaturesStrings.importFromTicketsError}: $e");
    }
  }
}