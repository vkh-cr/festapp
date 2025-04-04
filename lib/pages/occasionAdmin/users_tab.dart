import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/i_has_id.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/data_models/occasion_user_model.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/pages/occasionAdmin/user_columns.dart';
import 'package:fstapp/pages/occasionAdmin/users_tab_helper.dart';

class UsersTab extends StatefulWidget {
  const UsersTab({super.key});

  @override
  _UsersTabState createState() => _UsersTabState();
}

class _UsersTabState extends State<UsersTab> {
  static List<String> columnIdentifiers = [
    UserColumns.ID,
    UserColumns.EMAIL,
    UserColumns.NAME,
    UserColumns.SURNAME,
    UserColumns.SEX,
    if (FeatureService.isFeatureEnabled(FeatureConstants.services))
      UserColumns.ACCOMMODATION,
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
    UserColumns.INVITED
  ];

  SingleDataGridController<OccasionUserModel>? controller;

  Future<void> refreshData() async {
    await controller?.forceReload();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    controller ??= SingleDataGridController<OccasionUserModel>(
        context: context,
        loadData: DbUsers.getOccasionUsers,
        fromPlutoJson: OccasionUserModel.fromPlutoJson,
        firstColumnType: DataGridFirstColumn.deleteAndCheck,
        idColumn: Tb.occasion_users.user,
        actionsExtended: DataGridActionsController(
          areAllActionsEnabled: RightsService.canUpdateUsers,
        ),
        headerChildren: [
          if (RightsService.isManager())
            DataGridAction(
              name: "Add existing".tr(),
              action: (SingleDataGridController p0, [_]) async =>
                  UsersTabHelper.addExisting(
                      context,
                      p0,
                      (await DbUsers.getAllUsersBasics()).cast<IHasId>(),
                      refreshData),
            ),
          DataGridAction(
            name: "Invite".tr(),
            action: (SingleDataGridController p0, [_]) =>
                UsersTabHelper.invite(context, p0, refreshData),
            isEnabled: RightsService.canUpdateUsers,
          ),
          DataGridAction(
            name: "Change password".tr(),
            action: (SingleDataGridController p0, [_]) =>
                UsersTabHelper.setPassword(context, p0),
            isEnabled: RightsService.canUpdateUsers,
          ),
        ],
        columns: UserColumns.generateColumns(columnIdentifiers),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (controller == null) {
      // Should rarely happen since initController is called once both are loaded.
      return Center(child: CircularProgressIndicator());
    }
    return SingleTableDataGrid<OccasionUserModel>(controller!);
  }
}
