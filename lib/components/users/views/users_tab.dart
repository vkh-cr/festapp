import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/import_feature.dart';
import 'package:fstapp/components/import/import_dialog_helper.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/i_has_id.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/components/users/occasion_user_model.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:fstapp/components/users/db_users.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/users/user_columns.dart';
import 'package:fstapp/components/users/views/user_page.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/users/views/users_tab_helper.dart';

class UsersTab extends StatefulWidget {
  const UsersTab({super.key});

  @override
  _UsersTabState createState() => _UsersTabState();
}

class _UsersTabState extends State<UsersTab> {
  static List<String> getColumnIdentifiers() {
    final identifiers = [
      UserColumns.ID,
      UserColumns.EMAIL,
      UserColumns.NAME,
      UserColumns.SURNAME,
      UserColumns.SEX,
      if (FeatureService.isFeatureEnabled(FeatureConstants.services))
        UserColumns.ACCOMMODATION,
      if (FeatureService.isFeatureEnabled(FeatureConstants.volunteers))
        UserColumns.IS_VOLUNTEER,
      UserColumns.MANAGER,
      UserColumns.EDITOR,
      UserColumns.EDITOR_VIEW,
      if (FeatureService.isFeatureEnabled(FeatureConstants.form))
        UserColumns.EDITOR_ORDER,
      if (FeatureService.isFeatureEnabled(FeatureConstants.form))
        UserColumns.EDITOR_ORDER_VIEW,
      if (FeatureService.isFeatureEnabled(FeatureConstants.entryCode))
        UserColumns.APPROVER,
      if (FeatureService.isFeatureEnabled(FeatureConstants.entryCode))
        UserColumns.APPROVED,
      UserColumns.INVITED,
      UserColumns.CREATED_AT,
      UserColumns.LAST_SIGN_IN_AT,
    ];

    final importFeature =
    FeatureService.getFeatureDetails(FeatureConstants.import)
    as ImportFeature?;
    if (importFeature != null &&
        importFeature.isEnabled &&
        importFeature.importFromTickets) {
      identifiers.addAll([
        UserColumns.ORDERED_AT,
        UserColumns.FORM,
      ]);
    }

    return identifiers;
  }

  SingleDataGridController<OccasionUserModel>? controller;

  Future<void> refreshData() async {
    await controller?.reloadData();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (controller == null) {
      final headerActions = [
        if (RightsService.isManager())
          DataGridAction(
            name: "Add existing".tr(),
            action: (SingleDataGridController p0, [_]) async {
              await UsersTabHelper.addExisting(
                  context,
                  p0,
                  (await DbUsers.getAllUsersBasics()).cast<IHasId>(),
                  refreshData);
            },
          ),
        DataGridAction(
          name: "Invite".tr(),
          action: (SingleDataGridController p0, [_]) async {
            await UsersTabHelper.invite(context, p0, refreshData);
          },
          isEnabled: RightsService.canUpdateUsers,
        ),
        DataGridAction(
          name: "Change password".tr(),
          action: (SingleDataGridController p0, [_]) =>
              UsersTabHelper.setPassword(context, p0),
          isEnabled: RightsService.canUpdateUsers,
        ),
        if (FeatureService.isFeatureEnabled(FeatureConstants.import))
          DataGridAction(
            name: CommonStrings.import,
            action: (SingleDataGridController p0, [_]) async {
              await ImportDialogHelper.import(context);
              await refreshData();
            },
            isEnabled: RightsService.canUpdateUsers,
          ),
      ];

      controller = SingleDataGridController<OccasionUserModel>(
        context: context,
        loadData: DbUsers.getOccasionEditorData,
        fromPlutoJson: OccasionUserModel.fromPlutoJson,
        getNewObject: () => OccasionUserModel.newRow(RightsService.currentOccasionId()!),
        firstColumnType: DataGridFirstColumn.deleteAndCheck,
        idColumn: Tb.occasion_users.user,
        actionsExtended: DataGridActionsController(
          areAllActionsEnabled: RightsService.canUpdateUsers,
        ),
        headerChildren: headerActions,
        columns: UserColumns.generateColumns(getColumnIdentifiers()),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    if (controller == null) {
      return const Center(child: CircularProgressIndicator());
    }
    return SingleTableDataGrid<OccasionUserModel>(controller!);
  }
}