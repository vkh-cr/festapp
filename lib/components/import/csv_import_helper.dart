// file: lib/helpers/csv_import_helper.dart

import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/components/users/occasion_user_model.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:fstapp/components/users/db_users.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/components/import/import_strings.dart';
import 'package:fstapp/components/users/import_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/theme_config.dart';

class CsvImportHelper {
  static Future<void> importFromCsv(BuildContext context) async {
    // Replaced the direct file picker with a dialog that allows drag-and-drop.
    var file = await DialogHelper.dropFilesHere(
        context,
        FeaturesStrings.labelImportFromCsv,
        CommonStrings.import,
        CommonStrings.storno,
        headerContent: buildCsvFormatInfo(context));

    if (file == null) return; // User canceled the dialog

    var users = await ImportHelper.getUsersFromFile(file);
    var addOrUpdateUsers = users
        .where((element) =>
            element[Tb.occasion_users.data_text4]?.toLowerCase() != "storno")
        .toList();
    var deleteUsers = users
        .where((element) =>
            element[Tb.occasion_users.data_text4]?.toLowerCase() == "storno")
        .toList();

    var proceed = await DialogHelper.showConfirmationDialog(
      context,
      FeaturesStrings.labelImportFromCsv,
      "${CommonStrings.users} (${users.length}):\n${users.map((value) => value[Tb.occasion_users.data_email]).toList().join(",\n")}",
      confirmButtonMessage: CommonStrings.proceed,
    );

    if (!proceed) return;

    var existingUsers = await DbUsers.getOccasionUsers();
    var toBeCreated = _getUsersToBeCreated(addOrUpdateUsers, existingUsers);
    var toBeUpdated = _getUsersToBeUpdated(addOrUpdateUsers, existingUsers);
    var toBeDeleted =
        _getUsersToBeDeleted(deleteUsers, addOrUpdateUsers, existingUsers);

    await _handleCreateUsers(context, toBeCreated);
    await _handleUpdateUsers(context, toBeUpdated, existingUsers);
    await _handleDeleteUsers(context, toBeDeleted);
  }

  // Helper to get users to be created
  static List<Map<String, dynamic>> _getUsersToBeCreated(
      Iterable<Map<String, dynamic>> users,
      List<OccasionUserModel> existingUsers) {
    return users.where((u) {
      return existingUsers.firstWhereOrNull(
            (e) =>
                e.data?[Tb.occasion_users.data_email]?.toLowerCase() ==
                u[Tb.occasion_users.data_email]?.toLowerCase(),
          ) ==
          null;
    }).toList();
  }

  // Helper to get users to be updated
  static List<Map<String, dynamic>> _getUsersToBeUpdated(
      Iterable<Map<String, dynamic>> users,
      List<OccasionUserModel> existingUsers) {
    return users.where((u) {
      var existing = existingUsers.firstWhereOrNull(
        (e) =>
            e.data?[Tb.occasion_users.data_email]?.toLowerCase() ==
            u[Tb.occasion_users.data_email]?.toLowerCase(),
      );
      return existing != null && !existing.importedEquals(u);
    }).toList();
  }

  // Helper to get users to be deleted
  static List<OccasionUserModel> _getUsersToBeDeleted(
      Iterable<Map<String, dynamic>> deleteUsers,
      Iterable<Map<String, dynamic>> addOrUpdateUsers,
      List<OccasionUserModel> existingUsers) {
    return deleteUsers
        .map((u) {
          var existing = existingUsers.firstWhereOrNull(
            (e) =>
                e.data?[Tb.occasion_users.data_email] ==
                u[Tb.occasion_users.data_email],
          );
          var duplicated = addOrUpdateUsers.firstWhereOrNull(
            (e) =>
                e[Tb.occasion_users.data_email] ==
                u[Tb.occasion_users.data_email],
          );
          return (existing != null && duplicated == null) ? existing : null;
        })
        .whereNotNull()
        .toList();
  }

  // Handle creating users with progress dialog
  static Future<void> _handleCreateUsers(
      BuildContext context, List<Map<String, dynamic>> toBeCreated) async {
    if (toBeCreated.isEmpty) return;

    var proceed = await DialogHelper.showConfirmationDialog(
      context,
      ImportStrings.creatingUsers,
      "${ImportStrings.createUsersConfirm}\n${CommonStrings.users} (${toBeCreated.length}):\n${toBeCreated.map((u) => u[Tb.occasion_users.data_email]).join(",\n")}",
      confirmButtonMessage: CommonStrings.proceed,
    );

    if (!proceed) return;

    await DialogHelper.showProgressDialogAsync(
      context,
      ImportStrings.creatingUsers,
      toBeCreated.length,
      futures: toBeCreated
          .map((u) => () async {
                await DbUsers.updateOccasionUser(
                    OccasionUserModel.fromImportedJson(u));
                ToastHelper.Show(
                    context,
                    ImportStrings.createdItem(
                        item: u[Tb.occasion_users.data_email]));
              })
          .toList(),
    );
  }

  // Handle updating users with progress dialog
  static Future<void> _handleUpdateUsers(
      BuildContext context,
      List<Map<String, dynamic>> toBeUpdated,
      List<OccasionUserModel> existingUsers) async {
    if (toBeUpdated.isEmpty) return;

    var proceed = await DialogHelper.showConfirmationDialog(
      context,
      ImportStrings.updatingUsers,
      "${ImportStrings.updateUsersConfirm}\n${CommonStrings.users} (${toBeUpdated.length}):\n${toBeUpdated.map((u) => u[Tb.occasion_users.data_email]).join(",\n")}",
      confirmButtonMessage: CommonStrings.proceed,
    );

    if (!proceed) return;

    await DialogHelper.showProgressDialogAsync(
      context,
      ImportStrings.updatingUsers,
      toBeUpdated.length,
      futures: toBeUpdated
          .map((u) => () async {
                var existing = existingUsers.firstWhere(
                  (e) =>
                      e.data?[Tb.occasion_users.data_email] ==
                      u[Tb.occasion_users.data_email],
                );
                var fromExisting =
                    OccasionUserModel.fromImportedJson(u, existing);
                await DbUsers.updateExistingImportedOccasionUser(fromExisting);
                ToastHelper.Show(
                    context,
                    CommonStrings.updatedItem(
                        item: u[Tb.occasion_users.data_email]));
              })
          .toList(),
    );
  }

  /// Builds a collapsed help section (shown above the drop area) that, when
  /// expanded, lists every recognised column: its exact header text (as
  /// required in the CSV) and a translatable explanation. Kept collapsed by
  /// default so the drop/import area stays the focus. Accommodation, food and
  /// diet columns are only listed when the corresponding services setting is
  /// enabled, so the description matches what the event actually uses.
  static Widget buildCsvFormatInfo(BuildContext context) {
    final theme = Theme.of(context);
    final headers = ImportHelper.migrateColumns;

    final columns = <_CsvColumnInfo>[
      _CsvColumnInfo(
          Tb.occasion_users.data_email, FeaturesStrings.csvColEmail,
          isRequired: true),
      _CsvColumnInfo(Tb.occasion_users.data_name, FeaturesStrings.csvColName,
          isRequired: true),
      _CsvColumnInfo(
          Tb.occasion_users.data_surname, FeaturesStrings.csvColSurname,
          isRequired: true),
      _CsvColumnInfo(Tb.occasion_users.data_sex, FeaturesStrings.csvColSex),
      _CsvColumnInfo(
          Tb.occasion_users.data_phone, FeaturesStrings.csvColPhone),
      _CsvColumnInfo(
          Tb.occasion_users.data_text1, FeaturesStrings.csvColText1),
      _CsvColumnInfo(
          Tb.occasion_users.data_text2, FeaturesStrings.csvColText2),
      _CsvColumnInfo(
          Tb.occasion_users.data_birthDate, FeaturesStrings.csvColBirthDate),
      _CsvColumnInfo(Tb.occasion_users.data_note, FeaturesStrings.csvColNote),
      if (FeatureService.isServiceFoodEnabled())
        _CsvColumnInfo(
            Tb.occasion_users.data_diet, FeaturesStrings.csvColDiet),
      if (FeatureService.isServiceFoodEnabled())
        _CsvColumnInfo(
            Tb.occasion_users.services_food, FeaturesStrings.csvColFood),
      if (FeatureService.isServiceAccommodationEnabled())
        _CsvColumnInfo(Tb.occasion_users.services_accommodation,
            FeaturesStrings.csvColAccommodation),
    ];

    return ConstrainedBox(
      constraints: const BoxConstraints(maxWidth: 460),
      // Collapsed by default: a slim "show more" help row above the drop area.
      child: Theme(
        data: theme.copyWith(dividerColor: Colors.transparent),
        child: ExpansionTile(
          tilePadding: EdgeInsets.zero,
          childrenPadding: const EdgeInsets.only(bottom: 8.0),
          expandedCrossAxisAlignment: CrossAxisAlignment.start,
          leading: Icon(Icons.help_outline, color: theme.colorScheme.primary),
          title: Text(
            FeaturesStrings.csvFormatTitle,
            style: theme.textTheme.titleSmall
                ?.copyWith(fontWeight: FontWeight.bold),
          ),
          children: [
            Text(
              FeaturesStrings.csvFormatIntro,
              style: theme.textTheme.bodySmall,
            ),
            const SizedBox(height: 8),
            Align(
              alignment: Alignment.centerLeft,
              child: OutlinedButton.icon(
                onPressed: () => _copyToClipboard(
                  context,
                  // Tab-separated so pasting splits into columns in a spreadsheet.
                  columns
                      .map((c) => headers[c.headerKey] ?? c.headerKey)
                      .join('\t'),
                ),
                icon: const Icon(Icons.copy, size: 16),
                label: Text(FeaturesStrings.csvCopyHeader),
              ),
            ),
            const SizedBox(height: 12),
            for (final col in columns)
              Padding(
                padding: const EdgeInsets.only(bottom: 8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Wrap(
                      crossAxisAlignment: WrapCrossAlignment.center,
                      spacing: 8,
                      runSpacing: 2,
                      children: [
                        // The chip is tappable to copy this single header value.
                        Tooltip(
                          message: FeaturesStrings.csvCopyTooltip,
                          child: InkWell(
                            borderRadius: BorderRadius.circular(4),
                            onTap: () => _copyToClipboard(
                                context, headers[col.headerKey] ?? col.headerKey),
                            child: Container(
                              padding: const EdgeInsets.fromLTRB(6, 2, 4, 2),
                              decoration: BoxDecoration(
                                color: ThemeConfig.grey200(context),
                                borderRadius: BorderRadius.circular(4),
                              ),
                              child: Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Text(
                                    headers[col.headerKey] ?? col.headerKey,
                                    style: const TextStyle(
                                      fontFamily: 'monospace',
                                      fontWeight: FontWeight.w600,
                                    ),
                                  ),
                                  const SizedBox(width: 4),
                                  Icon(Icons.copy,
                                      size: 13,
                                      color: ThemeConfig.grey700(context)),
                                ],
                              ),
                            ),
                          ),
                        ),
                        if (col.isRequired)
                          Text(
                            "• ${FeaturesStrings.csvFormatRequired}",
                            style: theme.textTheme.labelSmall?.copyWith(
                              color: theme.colorScheme.primary,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                      ],
                    ),
                    const SizedBox(height: 2),
                    Text(
                      col.explanation,
                      style: theme.textTheme.bodySmall
                          ?.copyWith(color: ThemeConfig.grey700(context)),
                    ),
                  ],
                ),
              ),
          ],
        ),
      ),
    );
  }

  /// Copies [text] to the clipboard and shows a confirmation toast.
  static void _copyToClipboard(BuildContext context, String text) {
    Clipboard.setData(ClipboardData(text: text));
    ToastHelper.Show(context, FeaturesStrings.csvCopiedToast,
        severity: ToastSeverity.Ok);
  }

  // Handle deleting users with progress dialog
  static Future<void> _handleDeleteUsers(
      BuildContext context, List<OccasionUserModel> toBeDeleted) async {
    if (toBeDeleted.isEmpty) return;

    var proceed = await DialogHelper.showConfirmationDialog(
      context,
      ImportStrings.removingUsers,
      "${ImportStrings.removeUsersConfirm}\n${CommonStrings.users} (${toBeDeleted.length}):\n${toBeDeleted.map((u) => u.toBasicString()).join(",\n")}",
      confirmButtonMessage: CommonStrings.proceed,
    );

    if (!proceed) return;

    await DialogHelper.showProgressDialogAsync(
      context,
      ImportStrings.removingUsers,
      toBeDeleted.length,
      futures: toBeDeleted
          .map((existing) => () async {
                await DbUsers.deleteOccasionUser(
                    existing.user!, existing.occasion!);
                ToastHelper.Show(context,
                    ImportStrings.removedItem(item: existing.toBasicString()));
              })
          .toList(),
    );
  }
}

/// One recognised CSV column: which header it maps to and how to explain it.
class _CsvColumnInfo {
  /// Key into [ImportHelper.migrateColumns] that yields the literal header text.
  final String headerKey;

  /// Translatable, human-readable explanation of the column's value.
  final String explanation;

  /// Whether the import fails without this column.
  final bool isRequired;

  const _CsvColumnInfo(this.headerKey, this.explanation,
      {this.isRequired = false});
}
