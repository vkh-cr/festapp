import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridAction.dart';
import 'package:fstapp/components/dataGrid/IHasId.dart';
import 'package:fstapp/components/dataGrid/SingleDataGridController.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
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
    if(FeatureService.isFeatureEnabled(FeatureConstants.services))
    UserColumns.ACCOMMODATION,
    UserColumns.MANAGER,
    UserColumns.EDITOR,
    UserColumns.EDITOR_VIEW,
    if(FeatureService.isFeatureEnabled(FeatureConstants.entryCode))
    UserColumns.APPROVER,
    if(FeatureService.isFeatureEnabled(FeatureConstants.entryCode))
    UserColumns.APPROVED,
    UserColumns.INVITED
  ];

  SingleDataGridController<OccasionUserModel>? controller;

  Future<void> refreshData() async {
    controller?.reloadData();
  }

  @override
  Widget build(BuildContext context) {

    controller = SingleDataGridController<OccasionUserModel>(
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
            action: (SingleDataGridController p0, [_]) async => UsersTabHelper.addExisting(
                context, p0, (await DbUsers.getAllUsersBasics()).cast<IHasId>(), refreshData),
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
        // DataGridAction(
        //   name: "Add to group".tr(),
        //   action: (SingleTableDataGrid p0, [_]) =>
        //       UsersTabHelper.addToGroup(context, p0),
        // ),
      ],
      columns: UserColumns.generateColumns(columnIdentifiers),
    );

    return SingleTableDataGrid<OccasionUserModel>(controller!);
  }
}