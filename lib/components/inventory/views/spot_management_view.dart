import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/inventory/models/resource_model.dart';
import 'package:fstapp/components/inventory/models/resource_slot_model.dart';
import 'package:fstapp/components/inventory/models/spot_management_bundle.dart';
import 'package:fstapp/components/inventory/models/spot_management_models_and_constants.dart';
import 'package:fstapp/components/single_data_grid/data_grid_action.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/single_data_grid/single_table_data_grid.dart';
import 'package:fstapp/data_models_eshop/spot_model.dart';
import 'package:fstapp/data_services_eshop/db_spots.dart';
import 'package:fstapp/components/inventory/views/spot_management_columns.dart';
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

  @override
  void initState() {
    super.initState();
    loadData();
  }

  @override
  void didUpdateWidget(covariant SpotManagementView oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.inventoryPoolId != widget.inventoryPoolId) {
      loadData();
    }
  }

  @override
  void dispose() {
    _dialogSearchNotifier.dispose();
    super.dispose();
  }

  /// Fetches data and configures the data grid controller.
  Future<void> loadData() async {
    if (!mounted) return;
    setState(() { _isLoading = true; });

    try {
      // Perform an initial fetch to get the data needed to build the columns.
      final initialBundle = await DbSpots.getSpotManagementBundle(widget.inventoryPoolId);

      if (mounted) {
        setState(() {
          _controller = SingleDataGridController<SpotMatrixRow>(
            context: context,
            // This function fetches data and generates the row models for the grid.
            loadData: () async {
              final bundle = await DbSpots.getSpotManagementBundle(widget.inventoryPoolId);
              return _generateMatrixRows(bundle);
            },
            fromPlutoJson: SpotMatrixRow.fromPlutoJson,
            idColumn: SpotManagementConstants.rowIdentifier,
            firstColumnType: DataGridFirstColumn.none,
            columns: SpotManagementColumns.generateColumns(
              context,
              initialBundle.inventoryContexts,
              _dialogSearchNotifier,
            ),
            actionsExtended: DataGridActionsController(
              isAddActionPossible: () => false,
            ),
          );
          _isLoading = false;
        });
      }
    } catch (e) {
      debugPrint("Error loading spot management data: $e");
      if (mounted) {
        setState(() { _isLoading = false; });
      }
    }
  }

  /// Generates the list of [SpotMatrixRow] models for the data grid.
  List<SpotMatrixRow> _generateMatrixRows(SpotManagementBundle bundle) {
    // Create a lookup map for all spots for easy access.
    final allSpotsMap = { for (var spot in bundle.spots) spot.id!: spot };

    // Create lookups for currently assigned spots to efficiently build rows.
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

    // Sort resources to ensure rows appear in a predictable order.
    bundle.resources.sort((a, b) => Utilities.naturalCompare(a.title ?? '', b.title ?? ''));

    final List<SpotMatrixRow> generatedRows = [];
    for (final ResourceModel resource in bundle.resources) {
      final slotsForResource = bundle.resourceSlots.where((s) => s.resourceId == resource.id).toList();

      if (slotsForResource.isNotEmpty) {
        // Case 1: Resource has explicit slots. Create one row per slot.
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
        // Case 2: Resource has general capacity. Create one row per capacity unit.
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