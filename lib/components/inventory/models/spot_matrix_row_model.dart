import 'package:flutter/material.dart';
import 'package:fstapp/components/inventory/models/resource_model.dart';
import 'package:fstapp/components/inventory/models/resource_slot_model.dart';
import 'package:fstapp/components/inventory/models/spot_management_constants.dart';
import 'package:fstapp/components/inventory/views/inventory_strings.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/data_models_eshop/spot_model.dart';
import 'package:fstapp/data_services_eshop/db_spots.dart';
import 'package:trina_grid/trina_grid.dart';

import 'spot_management_models_and_constants.dart';

class SpotMatrixRow extends ITrinaRowModel {
  // A single, unified object containing all the row's metadata.
  final SpotManagementRowReference rowReference;

  // Temporary storage for changed cell data, as required by ITrinaRowModel.
  Map<String, dynamic> updatedCells = {};

  /// A unique identifier for the row, e.g., 'resource_12_slot_34' or 'resource_12_index_1'.
  String get rowIdentifier => rowReference.slot != null
      ? 'resource_${rowReference.resource.id}_slot_${rowReference.slot!.id}'
      : 'resource_${rowReference.resource.id}_index_${rowReference.implicitSlotIndex}';

  // The grid needs a stable ID. We use our generated unique identifier.
  @override
  String get id => rowIdentifier;

  SpotMatrixRow({
    required this.rowReference,
  });

  /// Converts this model into a TrinaRow for the data grid.
  @override
  TrinaRow toTrinaRow(BuildContext context) {
    final cells = <String, TrinaCell>{};

    // --- Visible and Identifier Columns ---
    cells[SpotManagementConstants.rowIdentifier] = TrinaCell(value: rowIdentifier);

    String displayTitle = rowReference.resource.title ?? InventoryStrings.resourceDefaultTitle(rowReference.resource.id.toString());
    if (rowReference.slot?.title != null) {
      displayTitle = rowReference.slot!.title!;
    } else if (rowReference.implicitSlotIndex != null) {
      displayTitle = "$displayTitle #${rowReference.implicitSlotIndex}";
    }
    cells[SpotManagementConstants.resourceTitle] = TrinaCell(value: displayTitle);

    // --- The SINGLE Hidden Reference Column ---
    // Pass the entire reference object in one go. This replaces all the individual reference columns.
    cells[SpotManagementConstants.rowReference] = TrinaCell(value: rowReference);

    // --- Dynamic Context Columns ---
    // Populate cells for each context based on the initial state from the reference object.
    rowReference.initialSpotsInRow.forEach((contextId, spot) {
      final fieldName = '${SpotManagementConstants.contextColumnPrefix}$contextId';
      if (spot != null && spot.order != null) {
        final cellValue = '${spot.id}${SpotManagementConstants.cellValueSeparator}${spot.order!.toCustomerData()}';
        cells[fieldName] = TrinaCell(value: cellValue);
      } else {
        cells[fieldName] = TrinaCell(value: ''); // Use empty string for unassigned
      }
    });

    return TrinaRow(cells: cells);
  }

  /// Reconstructs the model from grid data for the update mechanism.
  static SpotMatrixRow fromPlutoJson(Map<String, dynamic> json) {
    // Reconstruct the object by simply extracting our unified reference object.
    final rowRef = json[SpotManagementConstants.rowReference] as SpotManagementRowReference;

    final updatedRow = SpotMatrixRow(rowReference: rowRef);

    // Preserve the map of updated cells for the updateMethod.
    updatedRow.updatedCells = json;
    return updatedRow;
  }

  /// Called by the grid to save changes.
  @override
  Future<void> updateMethod(BuildContext context) async {
    final List<Map<String, dynamic>> changes = [];

    for (var entry in updatedCells.entries) {
      if (!entry.key.startsWith(SpotManagementConstants.contextColumnPrefix)) continue;

      final contextId = int.tryParse(entry.key.replaceAll(SpotManagementConstants.contextColumnPrefix, ''));
      if (contextId == null) continue;

      final cellValue = entry.value as String? ?? '';
      final newSpotId = cellValue.isEmpty
          ? null
          : int.tryParse(cellValue.split(SpotManagementConstants.cellValueSeparator)[0]);

      final oldSpotId = rowReference.initialSpotsInRow[contextId]?.id;

      // If the assignment hasn't actually changed, skip it.
      if (newSpotId == oldSpotId) continue;

      changes.add({
        'old_spot_id': oldSpotId,
        'new_spot_id': newSpotId,
        'resource_id': rowReference.resource.id,
        'resource_slot_id': rowReference.slot?.id,
        // The backend will need the context_id to correctly handle the assignment
        'inventory_context_id': contextId,
      });
    }

    if (changes.isNotEmpty) {
      // Make a single efficient batch call to the database service.
      await DbSpots.updateSpotAssignments(changes);
    }
  }

  @override
  String toBasicString() => rowReference.resource.title ?? InventoryStrings.resourceDefaultTitle(rowReference.resource.id.toString());

  @override
  Future<void> deleteMethod(BuildContext context) async {
    // Deleting a resource row is not a supported operation in this view.
  }
}