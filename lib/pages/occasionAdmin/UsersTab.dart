import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/i_has_id.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/services/features/FeatureConstants.dart';
import 'package:fstapp/services/features/FeatureService.dart';
import 'package:fstapp/pages/occasionAdmin/UserColumns.dart';
import 'package:fstapp/pages/occasionAdmin/UsersTabHelper.dart';

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
    return SingleTableDataGrid<OccasionUserModel>(controller!);
  }
}
