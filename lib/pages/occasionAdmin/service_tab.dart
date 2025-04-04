import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/data_models/occasion_user_model.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/data_models/service_item_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/db_occasions.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/pages/occasionAdmin/user_columns.dart';
import 'package:fstapp/dialogs/service_dialog.dart';

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
  SingleDataGridController<OccasionUserModel>? _controller;

  @override
  void initState() {
    super.initState();
    loadData();
  }

  /// Loads service data for food and accommodation and updates the grid.
  Future<void> loadData() async {
    var af = await DbOccasions.getAllServices(DbOccasions.serviceTypeFood);
    var aa = await DbOccasions.getAllServices(DbOccasions.serviceTypeAccommodation);

    setState(() {
      allFood = af;
      allAccommodation = aa;
    });

    // If the controller is already created, update its columns and force a reload.
    if (_controller != null) {
      _controller!.columns = UserColumns.generateColumns(
        columnIdentifiers,
        data: {
          UserColumns.FOOD: allFood,
          UserColumns.ACCOMMODATION: allAccommodation,
        },
      );
      _controller!.forceReload();
    }
  }

  @override
  Widget build(BuildContext context) {
    // Show a loading indicator until the data is available.
    if (allFood == null || allAccommodation == null) {
      return Center(child: CircularProgressIndicator());
    }

    // Create the controller only once.
    _controller ??= SingleDataGridController<OccasionUserModel>(
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
    );

    return SingleTableDataGrid<OccasionUserModel>(_controller!);
  }

  _accommodationDefinition(SingleDataGridController<ITrinaRowModel> controller) async {
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

    // Reload the service data and refresh the grid.
    await loadData();
  }

  _foodDefinition(SingleDataGridController<ITrinaRowModel> controller) async {
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

    // Reload the service data and refresh the grid.
    await loadData();
  }
}
