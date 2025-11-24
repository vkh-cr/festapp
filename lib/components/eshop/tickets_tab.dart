import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/components/eshop/models/ticket_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services_eshop/db_tickets.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/ticket_code_helper.dart';
import 'package:fstapp/services/toast_helper.dart';

import 'eshop_columns.dart';
import 'orders_strings.dart';

class TicketsTab extends StatefulWidget {
  const TicketsTab({super.key});

  @override
  _TicketsTabState createState() => _TicketsTabState();
}

class _TicketsTabState extends State<TicketsTab> {
  SingleDataGridController<TicketModel>? _controller;
  String? occasionLink;
  bool _isLoading = true;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final newOccasionLink = context.routeData.params.getString(AppRouter.linkFormatted);
    // Initialize only once when the link is available
    if (occasionLink == null) {
      occasionLink = newOccasionLink;
      _initializeController();
    }
  }

  Future<void> _initializeController() async {
    if (occasionLink == null) {
      if (mounted) {
        setState(() {
          _isLoading = false;
        });
      }
      return;
    }

    final List<String> columnIdentifiers = [
      EshopColumns.TICKET_ID,
      EshopColumns.ORDER_SYMBOL,
      EshopColumns.ORDER_DATA,
      EshopColumns.TICKET_SYMBOL,
      EshopColumns.TICKET_CREATED_AT,
      EshopColumns.TICKET_STATE,
      EshopColumns.TICKET_CONFIRM,
      EshopColumns.TICKET_TOTAL_PRICE,
      EshopColumns.TICKET_SPOT,
      EshopColumns.TICKET_PRODUCTS_EXTENDED,
      EshopColumns.TICKET_PRODUCTS_EDIT,
      if (FeatureService.isFeatureEnabled(FeatureConstants.ticket))
        EshopColumns.TICKET_LAST_CHANGE,
      EshopColumns.TICKET_NOTE,
      EshopColumns.TICKET_NOTE_HIDDEN,
    ];

    final newController = SingleDataGridController<TicketModel>(
      context: context,
      loadData: () => DbTickets.getAllTickets(occasionLink!),
      fromPlutoJson: TicketModel.fromPlutoJson,
      firstColumnType: DataGridFirstColumn.check,
      idColumn: EshopColumns.TICKET_ID,
      actionsExtended: DataGridActionsController(
        areAllActionsEnabled: RightsService.isEditorOrder,
        isAddActionPossible: () => false,
      ),
      headerChildren: [
        DataGridAction(
          name: CommonStrings.cancel,
          action: (SingleDataGridController singleDataGrid, [_]) =>
              _stornoTickets(singleDataGrid),
          isEnabled: RightsService.isOrderEditor,
        ),
        if (FeatureService.isFeatureEnabled(FeatureConstants.ticket))
          DataGridAction(
            name: OrdersStrings.scanActionText,
            action: (SingleDataGridController singleDataGrid, [_]) =>
                _scanTickets(singleDataGrid),
            isEnabled: RightsService.isOrderEditor,
          ),
      ],
      columns: EshopColumns.generateColumns(
        context,
        columnIdentifiers,
        data: {
          EshopColumns.TICKET_PRODUCTS_EXTENDED: EshopColumns.productCategories,
          EshopColumns.TICKET_PRODUCTS_EDIT: refreshData,
          EshopColumns.TICKET_CONFIRM: refreshData
        },
      ),
    );

    if (mounted) {
      setState(() {
        _controller = newController;
        _isLoading = false;
      });
    }
  }

  Future<void> refreshData() async {
    await _controller?.reloadData();
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return const Center(child: CircularProgressIndicator());
    }

    // If loading is finished but the controller is still null,
    // it means initialization failed or there was no data context.
    if (_controller == null) {
      return Center(child: Text("No data to display.".tr()));
    }

    return SingleTableDataGrid<TicketModel>(_controller!);
  }

  Future<void> _scanTickets(SingleDataGridController singleDataGrid) async {
    await TicketCodeHelper.showScanTicketCode(
      context,
      OrdersStrings.scanActionText,
      occasionLink!,
    );
    refreshData();
  }

  Future<void> _stornoTickets(SingleDataGridController singleDataGrid) async {
    var selectedTickets = _getCheckedTickets(singleDataGrid);

    if (selectedTickets.isEmpty) {
      return;
    }

    var confirm = await DialogHelper.showConfirmationDialog(
      context,
      CommonStrings.cancel,
      "${OrdersStrings.cancelItemsConfirmationText} (${selectedTickets.length})",
    );

    if (confirm && mounted) {
      var stornoFutures = selectedTickets.map((ticket) {
        return () async {
          await DbTickets.stornoTicket(ticket.id!);
          if (mounted) {
            ToastHelper.Show(
              context,
              OrdersStrings.stornoCompletedText.tr(
                namedArgs: {
                  "item": ticket.ticketSymbol ?? ticket.id.toString(),
                },
              ),
            );
          }
        };
      }).toList();

      await DialogHelper.showProgressDialogAsync(
        context,
        OrdersStrings.processing,
        stornoFutures.length,
        futures: stornoFutures,
      );
      refreshData();
    }
  }

  List<TicketModel> _getCheckedTickets(SingleDataGridController singleDataGrid) {
    return List<TicketModel>.from(
      singleDataGrid.stateManager.refRows.originalList
          .where((row) => row.checked == true)
          .map((row) => TicketModel.fromPlutoJson(row.toJson())),
    );
  }
}