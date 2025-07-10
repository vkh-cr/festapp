import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/inventory/models/spot_management_models_and_constants.dart';
import 'package:fstapp/data_models_eshop/spot_model.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:trina_grid/trina_grid.dart';

import '../models/spot_management_constants.dart';
import 'inventory_strings.dart';

/// A stateful dialog that allows searching and selecting a spot for a single cell.
class SpotSearchDialog extends StatefulWidget {
  final TrinaColumnRendererContext rendererContext;
  final SpotManagementRowReference rowReference;
  final int? currentSpotId;
  final int contextId;
  final ValueNotifier<String> searchNotifier;

  const SpotSearchDialog({
    super.key,
    required this.rendererContext,
    required this.rowReference,
    required this.currentSpotId,
    required this.contextId,
    required this.searchNotifier,
  });

  @override
  State<SpotSearchDialog> createState() => _SpotSearchDialogState();
}

class _SpotSearchDialogState extends State<SpotSearchDialog> {
  final _searchController = TextEditingController();
  List<SpotModel> _availableSpots = [];
  List<SpotModel> _filteredSpots = [];

  @override
  void initState() {
    super.initState();
    _prepareInitialSpotList();
    // Initialize the controller with the shared value
    _searchController.text = widget.searchNotifier.value;
    // Add a listener that updates both the shared value and the local UI
    _searchController.addListener(_onSearchChanged);
    // Perform an initial filter based on the restored search text
    _filterSpots();
  }

  @override
  void dispose() {
    _searchController.removeListener(_onSearchChanged);
    _searchController.dispose();
    super.dispose();
  }

  /// Listener for the search field.
  void _onSearchChanged() {
    // Update the shared notifier so the next dialog instance gets the text
    widget.searchNotifier.value = _searchController.text;
    // Filter the list and trigger a local rebuild to show/hide the clear button
    _filterSpots();
  }

  void _prepareInitialSpotList() {
    // --- AVAILABILITY LOGIC ---
    final assignedSpotIdsInContext = <int>{};
    final currentColumnField = widget.rendererContext.column.field;
    for (final row in widget.rendererContext.stateManager.rows) {
      final cellValue = row.cells[currentColumnField]?.value as String? ?? '';
      if (cellValue.isNotEmpty) {
        final spotIdInCell = int.tryParse(cellValue.split(SpotManagementConstants.cellValueSeparator)[0]);
        if (spotIdInCell != null) {
          assignedSpotIdsInContext.add(spotIdInCell);
        }
      }
    }

    final availableSpotsForDialog = <SpotModel>[];
    widget.rowReference.allSpotsMap.values.forEach((spot) {
      if (spot.inventoryContextId == widget.contextId && spot.order != null) {
        if (!assignedSpotIdsInContext.contains(spot.id) || spot.id == widget.currentSpotId) {
          availableSpotsForDialog.add(spot);
        }
      }
    });

    // --- SORTING LOGIC ---
    final currentResourceId = widget.rowReference.resource.id;
    final assignedSpotIdsToThisResource = <int>{};

    for (final row in widget.rendererContext.stateManager.rows) {
      final rowRef = row.cells[SpotManagementConstants.rowReference]?.value as SpotManagementRowReference?;
      if (rowRef?.resource.id == currentResourceId) {
        for (final cellEntry in row.cells.entries) {
          if (cellEntry.key.startsWith(SpotManagementConstants.contextColumnPrefix)) {
            final cellValue = cellEntry.value.value as String? ?? '';
            if (cellValue.isNotEmpty) {
              final spotIdInCell = int.tryParse(cellValue.split(SpotManagementConstants.cellValueSeparator)[0]);
              if (spotIdInCell != null) {
                assignedSpotIdsToThisResource.add(spotIdInCell);
              }
            }
          }
        }
      }
    }

    availableSpotsForDialog.sort((a, b) {
      final isAOnThisResource = assignedSpotIdsToThisResource.contains(a.id);
      final isBOnThisResource = assignedSpotIdsToThisResource.contains(b.id);
      if (isAOnThisResource && !isBOnThisResource) return -1;
      if (!isAOnThisResource && isBOnThisResource) return 1;
      return (a.order!.toCustomerData()).compareTo(b.order!.toCustomerData());
    });

    setState(() {
      _availableSpots = availableSpotsForDialog;
      _filteredSpots = availableSpotsForDialog;
    });
  }

  void _filterSpots() {
    final query = _searchController.text;
    if (query.isEmpty) {
      setState(() { _filteredSpots = List.from(_availableSpots); });
    } else {
      final normalizedQuery = Utilities.removeDiacritics(query.toLowerCase());
      setState(() {
        _filteredSpots = _availableSpots.where((spot) {
          final customerData = spot.order!.toCustomerData();
          final normalizedName = Utilities.removeDiacritics(customerData.toLowerCase());
          return normalizedName.contains(normalizedQuery);
        }).toList();
      });
    }
  }

  void _selectAndPop(String value) {
    Navigator.pop(context, {
      'value': value,
      'applyToAll': 'false' // This feature was removed, but we keep the structure
    });
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(InventoryStrings.searchDialogTitle(widget.rendererContext.column.title)),
      contentPadding: const EdgeInsets.fromLTRB(16.0, 20.0, 16.0, 0),
      content: SizedBox(
        width: 350,
        height: 500,
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              child: TextField(
                controller: _searchController,
                autofocus: true,
                decoration: InputDecoration(
                  hintText: InventoryStrings.searchDialogHint,
                  prefixIcon: const Icon(Icons.search),
                  suffixIcon: _searchController.text.isNotEmpty
                      ? IconButton(
                    icon: const Icon(Icons.clear),
                    onPressed: () => _searchController.clear(),
                  )
                      : null,
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(8.0)),
                  isDense: true,
                ),
              ),
            ),
            const SizedBox(height: 12),
            Expanded(
              child: ListView(
                children: [
                  // Option to unassign the spot
                  ListTile(
                    title: Text(InventoryStrings.searchDialogUnassign),
                    onTap: () => _selectAndPop(''), // Pass empty string for unassign
                  ),
                  const Divider(height: 1),
                  // List of available spots
                  ..._filteredSpots.map((spot) {
                    final spotTitle = spot.order!.toCustomerData();
                    return ListTile(
                      title: Text(spotTitle),
                      onTap: () {
                        final value = '${spot.id}${SpotManagementConstants.cellValueSeparator}$spotTitle';
                        _selectAndPop(value);
                      },
                    );
                  }),
                ],
              ),
            ),
          ],
        ),
      ),
      actions: <Widget>[
        // Action: Storno (Cancel)
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: Text('Storno'.tr()),
        ),
      ],
    );
  }
}