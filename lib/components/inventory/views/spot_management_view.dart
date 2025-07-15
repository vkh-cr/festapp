import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/inventory/models/resource_model.dart';
import 'package:fstapp/components/inventory/models/resource_slot_model.dart';
import 'package:fstapp/components/inventory/models/spot_management_bundle.dart';
import 'package:fstapp/components/inventory/models/spot_management_models_and_constants.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/components/eshop/models/spot_model.dart';
import 'package:fstapp/data_services_eshop/db_spots.dart';
import 'package:fstapp/components/inventory/views/spot_management_columns.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/utilities_all.dart';

import '../models/spot_management_constants.dart';
import '../models/spot_matrix_row_model.dart';
import 'inventory_strings.dart';

class SpotManagementView extends StatefulWidget {
  final int inventoryPoolId;
  const SpotManagementView({super.key, required this.inventoryPoolId});

  @override
  SpotManagementViewState createState() => SpotManagementViewState();
}

class SpotManagementViewState extends State<SpotManagementView> {
  SingleDataGridController<SpotMatrixRow>? _controller;
  bool _isLoading = true;
  final _dialogSearchNotifier = ValueNotifier<String>('');

  // New: A temporary cache for the initial data bundle to avoid a double fetch.
  SpotManagementBundle? _initialBundle;

  static final String _clearAllTitle = InventoryStrings.spotManagementClearAllTitle;
  static final String _clearAllConfirmation = InventoryStrings.spotManagementClearAllConfirmation;


  @override
  void initState() {
    super.initState();
    _initializeController();
  }

  @override
  void didUpdateWidget(covariant SpotManagementView oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.inventoryPoolId != widget.inventoryPoolId) {
      _initializeController();
    }
  }

  @override
  void dispose() {
    _dialogSearchNotifier.dispose();
    // It's good practice to also dispose the controller if it's not null.
    // Assuming SingleDataGridController has a dispose method.
    // _controller?.dispose();
    super.dispose();
  }

  /// New: This function handles fetching data for the data grid.
  /// It uses the cached `_initialBundle` for the first load and
  /// fetches fresh data for subsequent refreshes.
  Future<List<SpotMatrixRow>> fetchGridData() async {
    // If we have a pre-fetched bundle, use it and clear the cache.
    if (_initialBundle != null) {
      final bundle = _initialBundle!;
      _initialBundle = null; // Consume the cached bundle
      return _generateMatrixRows(bundle);
    }

    // If no cached bundle, fetch fresh data from the database.
    // This path is taken on user-initiated refreshes within the grid.
    final bundle = await DbSpots.getSpotManagementBundle(widget.inventoryPoolId);
    return _generateMatrixRows(bundle);
  }

  /// Fetches initial data once and configures the data grid controller.
  /// The controller itself will then use the cached data for its first render.
  Future<void> _initializeController() async {
    if (!mounted) return;
    setState(() { _isLoading = true; });

    try {
      // Fetch #1: This is now the ONLY initial fetch.
      _initialBundle = await DbSpots.getSpotManagementBundle(widget.inventoryPoolId);

      if (mounted) {
        setState(() {
          _controller = SingleDataGridController<SpotMatrixRow>(
            context: context,
            // The controller will call this function to get its data.
            // On the first run, it will get the cached `_initialBundle`.
            loadData: fetchGridData,
            fromPlutoJson: SpotMatrixRow.fromPlutoJson,
            idColumn: SpotManagementConstants.rowIdentifier,
            firstColumnType: DataGridFirstColumn.none,
            // Use the cached bundle for generating initial columns to avoid null errors.
            columns: SpotManagementColumns.generateColumns(
              context,
              _initialBundle!.inventoryContexts,
              _dialogSearchNotifier,
            ),
            actionsExtended: DataGridActionsController(
              isAddActionPossible: () => false,
            ),
            headerChildren: [
              DataGridAction(
                name: _clearAllTitle,
                action: (controller, [_]) => _clearAllAssignments(controller!),
                isEnabled: () => true,
              ),
            ],
          );
          _isLoading = false;
        });
      }
    } catch (e) {
      debugPrint("Error loading spot management data: $e");
      if (mounted) {
        // Clear the cached bundle on error to prevent using stale/bad data.
        _initialBundle = null;
        setState(() { _isLoading = false; });
      }
    }
  }

  /// Generates the list of [SpotMatrixRow] models for the data grid.
  /// This function remains unchanged.
  List<SpotMatrixRow> _generateMatrixRows(SpotManagementBundle bundle) {
    final allSpotsMap = { for (var spot in bundle.spots) spot.id!: spot };
    final assignedSpotsBySlotLookup = <String, SpotModel>{};
    final assignedSpotsByResourceLookup = <int, Map<int, List<SpotModel>>>{};
    for (final spot in bundle.spots) {
      if (spot.resourceId != null && spot.inventoryContextId != null) {
        if (spot.resourceSlotId != null) {
          final key = 'slot_${spot.resourceSlotId}_context_${spot.inventoryContextId}';
          assignedSpotsBySlotLookup[key] = spot;
        } else {
          assignedSpotsByResourceLookup.putIfAbsent(spot.resourceId!, () => {});
          assignedSpotsByResourceLookup[spot.resourceId!]!.putIfAbsent(spot.inventoryContextId!, () => []);
          assignedSpotsByResourceLookup[spot.resourceId!]![spot.inventoryContextId!]!.add(spot);
        }
      }
    }

    bundle.resources.sort((a, b) => Utilities.naturalCompare(a.title ?? '', b.title ?? ''));

    final List<SpotMatrixRow> generatedRows = [];
    for (final ResourceModel resource in bundle.resources) {
      final slotsForResource = bundle.resourceSlots.where((s) => s.resourceId == resource.id).toList();

      if (slotsForResource.isNotEmpty) {
        for (final ResourceSlotModel slot in slotsForResource) {
          final initialSpotsInRow = <int, SpotModel?>{};
          for (final context in bundle.inventoryContexts) {
            final key = 'slot_${slot.id}_context_${context.id}';
            initialSpotsInRow[context.id!] = assignedSpotsBySlotLookup[key];
          }

          generatedRows.add(SpotMatrixRow(
            rowReference: SpotManagementRowReference(
              resource: resource,
              slot: slot,
              initialSpotsInRow: initialSpotsInRow,
              allSpotsMap: allSpotsMap,
            ),
          ));
        }
      } else {
        final int capacity = (resource.capacity ?? 1) > 0 ? resource.capacity! : 1;
        final spotsForThisResource = assignedSpotsByResourceLookup[resource.id] ?? {};

        for (int i = 0; i < capacity; i++) {
          final initialSpotsInRow = <int, SpotModel?>{};
          for (final context in bundle.inventoryContexts) {
            final spotsInCell = spotsForThisResource[context.id] ?? [];
            initialSpotsInRow[context.id!] = (spotsInCell.length > i) ? spotsInCell[i] : null;
          }

          generatedRows.add(SpotMatrixRow(
            rowReference: SpotManagementRowReference(
              resource: resource,
              implicitSlotIndex: i + 1,
              initialSpotsInRow: initialSpotsInRow,
              allSpotsMap: allSpotsMap,
            ),
          ));
        }
      }
    }
    return generatedRows;
  }

  /// Clears all spot assignments by mutating the underlying models and then refreshing the UI.
  /// This function remains unchanged.
  Future<void> _clearAllAssignments(SingleDataGridController<ITrinaRowModel> controller) async {
    if (!mounted) return;

    final confirm = await DialogHelper.showConfirmationDialog(
      context,
      _clearAllTitle,
      _clearAllConfirmation,
    );

    if (confirm && mounted) {
      final stateManager = controller.stateManager;

      for (final row in stateManager.rows) {
        final rowRef = row.cells[SpotManagementConstants.rowReference]?.value as SpotManagementRowReference?;
        if (rowRef == null) continue;

        // 1. Mutate the data model for the entire row to be null.
        rowRef.currentSpotsInRow.updateAll((key, value) => null);

        // 2. Update the UI for each cell in the row.
        for (final cellEntry in row.cells.entries) {
          if (cellEntry.key.startsWith(SpotManagementConstants.contextColumnPrefix)) {
            stateManager.changeCellValue(cellEntry.value, '', force: true, notify: false);
          }
        }
      }
      // Notify the grid to re-render everything at once after all changes.
      stateManager.notifyListeners();
    }
  }


  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return const Center(child: CircularProgressIndicator());
    }
    if (_controller == null) {
      return Center(child: Text(InventoryStrings.spotManagementNoData));
    }
    return SingleTableDataGrid<SpotMatrixRow>(_controller!);
  }
}