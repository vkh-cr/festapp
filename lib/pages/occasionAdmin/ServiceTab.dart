import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridAction.dart';
import 'package:fstapp/components/dataGrid/PlutoAbstract.dart';
import 'package:fstapp/components/dataGrid/SingleDataGridController.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModels/ServiceItemModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbOccasions.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/occasionAdmin/UserColumns.dart';
import 'package:fstapp/widgets/ServiceDialog.dart';

class ServiceTab extends StatefulWidget {
  const ServiceTab({Key? key}) : super(key: key);

  @override
  _ServiceTabState createState() => _ServiceTabState();
}

class _ServiceTabState extends State<ServiceTab> {
  static const List<String> columnIdentifiers = [
    UserColumns.ID,
    UserColumns.EMAIL,
    UserColumns.NAME,
    UserColumns.SURNAME,
    UserColumns.TEXT1,
    UserColumns.TEXT2,
    UserColumns.ACCOMMODATION,
    UserColumns.FOOD,
    UserColumns.DIET,
    UserColumns.NOTE,
  ];

  List<ServiceItemModel>? allFood;
  List<ServiceItemModel>? allAccommodation;
  Key refreshKey = UniqueKey();

  @override
  void initState() {
    super.initState();
    loadData();
  }

  Future<void> loadData() async {
    var af = await DbOccasions.getAllServices(DbOccasions.serviceTypeFood);
    var aa = await DbOccasions.getAllServices(DbOccasions.serviceTypeAccommodation);

    setState(() {
      allAccommodation = aa;
      allFood = af;
      refreshKey = UniqueKey();
    });
  }

  @override
  Widget build(BuildContext context) {
    return KeyedSubtree(
      key: refreshKey,
      child: allFood == null
          ? Center(child: CircularProgressIndicator())
          : SingleTableDataGrid<OccasionUserModel>(
        SingleDataGridController<OccasionUserModel>(
          context: context,
          loadData: DbUsers.getOccasionUsersServiceTab,
          fromPlutoJson: OccasionUserModel.fromPlutoJson,
          firstColumnType: DataGridFirstColumn.none,
          idColumn: Tb.occasion_users.user,
          actionsExtended: DataGridActionsController(
            areAllActionsEnabled: RightsService.canUpdateUsers,
            isAddActionPossible: () => false,
          ),
          headerChildren: [
            DataGridAction(
              name: "Accommodation settings".tr(),
              action: (SingleDataGridController p0, [_]) => _accommodationDefinition(p0),
              isEnabled: RightsService.isManager,
            ),
            DataGridAction(
              name: "Food settings".tr(),
              action: (SingleDataGridController p0, [_]) => _foodDefinition(p0),
              isEnabled: RightsService.isManager,
            ),
          ],
          columns: UserColumns.generateColumns(
            columnIdentifiers,
            data: {
              UserColumns.FOOD: allFood,
              UserColumns.ACCOMMODATION: allAccommodation,
            },
          ),
        ),
      ),
    );
  }

  _accommodationDefinition(SingleDataGridController<IPlutoRowModel> p0) async {
    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return ServiceDialog(
          type: DbOccasions.serviceTypeAccommodation,
          title: "Accommodation".tr(),
          description: "To create accommodation, fill in the title, unique code, and the reference of the place.".tr(),
          referenceString: "Place".tr(),
        );
      },
    );

    // Reload data and trigger a full page rebuild
    await loadData();
  }

  _foodDefinition(SingleDataGridController<IPlutoRowModel> p0) async {
    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return ServiceDialog(
          type: DbOccasions.serviceTypeFood,
          title: "Food".tr(),
          description: "To create food, fill in the title, unique code, and the reference of the event.".tr(),
          referenceString: "Event".tr(),
        );
      },
    );

    // Reload data and trigger a full page rebuild
    await loadData();
  }
}
