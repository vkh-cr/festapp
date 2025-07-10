import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/inventory/models/inventory_context_model.dart';
import 'package:fstapp/components/inventory/models/spot_management_models_and_constants.dart';
import 'package:trina_grid/trina_grid.dart';

import '../models/spot_management_constants.dart';
import 'inventory_strings.dart';
import 'spot_search_dialog.dart';

class SpotManagementColumns {
  static List<TrinaColumn> generateColumns(
      BuildContext context,
      List<InventoryContextModel> inventoryContexts,
      ValueNotifier<String> dialogSearchNotifier,
      ) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    Widget cellRenderer(TrinaColumnRendererContext rendererContext) {
      final rowRef = rendererContext.row.cells[SpotManagementConstants.rowReference]?.value as SpotManagementRowReference?;
      if (rowRef == null) return const SizedBox.shrink();

      final cellValue = rendererContext.cell.value as String? ?? 'null;';
      final valueParts = cellValue.split(SpotManagementConstants.cellValueSeparator);
      final currentSpotId = int.tryParse(valueParts[0]);
      final displayValue = currentSpotId != null ? valueParts[1] : null;

      final colorList = isDark
          ? SpotManagementConstants.darkModeResourceColors
          : SpotManagementConstants.lightModeResourceColors;
      final resourceColor = colorList[rowRef.resource.id!.hashCode % colorList.length];

      Widget cellContent;
      if (displayValue != null) {
        cellContent = Center(
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            decoration: BoxDecoration(
              color: resourceColor,
              borderRadius: BorderRadius.circular(16.0),
            ),
            child: Text(
              displayValue,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(
                color: SpotManagementConstants.getTextColorForBackground(resourceColor),
                fontWeight: FontWeight.w500,
              ),
            ),
          ),
        );
      } else {
        cellContent = Center(
          child: TextButton.icon(
            onPressed: null,
            icon: Icon(Icons.add, size: 16, color: Colors.grey.shade600),
            label: Text(
              InventoryStrings.spotManagementAssign,
              style: TextStyle(color: Colors.grey.shade600, fontWeight: FontWeight.normal),
            ),
            style: TextButton.styleFrom(
              padding: const EdgeInsets.symmetric(horizontal: 10),
            ),
          ),
        );
      }

      return GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: () {
          final contextId = int.parse(rendererContext.column.field.replaceAll(SpotManagementConstants.contextColumnPrefix, ''));
          _showSpotSelectionDialog(
            context,
            rendererContext,
            rowRef,
            currentSpotId,
            contextId,
            dialogSearchNotifier,
          );
        },
        child: Container(
          width: double.infinity,
          height: double.infinity,
          padding: const EdgeInsets.all(4.0),
          child: cellContent,
        ),
      );
    }

    List<TrinaColumn> columns = [
      TrinaColumn(
        field: SpotManagementConstants.resourceTitle,
        title: InventoryStrings.spotManagementResource,
        type: TrinaColumnType.text(),
        readOnly: true,
        enableEditingMode: false,
        width: 250,
        renderer: (rendererContext) {
          final rowRef = rendererContext.row.cells[SpotManagementConstants.rowReference]?.value as SpotManagementRowReference?;
          if(rowRef == null) return const SizedBox.shrink();

          final colorList = isDark
              ? SpotManagementConstants.darkModeResourceColors
              : SpotManagementConstants.lightModeResourceColors;
          final resourceColor = colorList[rowRef.resource.id!.hashCode % colorList.length];

          return Container(
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            alignment: Alignment.centerLeft,
            child: Row(
              children: [
                Container(
                  width: 12,
                  height: 12,
                  decoration: BoxDecoration(color: resourceColor, shape: BoxShape.circle),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(
                    rendererContext.cell.value.toString(),
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                ),
              ],
            ),
          );
        },
      ),
      // --- All hidden data is now in this single reference object ---
      TrinaColumn(field: SpotManagementConstants.rowReference, hide: true, type: TrinaColumnType.text(), title: ''),
    ];

    inventoryContexts.sort((a, b) => (a.blockDate ?? DateTime(0)).compareTo(b.blockDate ?? DateTime(0)));

    for (var contextModel in inventoryContexts) {
      final fieldName = "${SpotManagementConstants.contextColumnPrefix}${contextModel.id}";
      columns.add(
        TrinaColumn(
          field: fieldName,
          title: contextModel.getContextTitle(context), // Assuming this helper exists
          type: TrinaColumnType.text(),
          readOnly: true,
          enableEditingMode: false,
          width: 200,
          textAlign: TrinaColumnTextAlign.center,
          renderer: cellRenderer,
        ),
      );
    }

    return columns;
  }

  static Future<void> _showSpotSelectionDialog(
      BuildContext context,
      TrinaColumnRendererContext rendererContext,
      SpotManagementRowReference rowReference, // Pass the unified object
      int? currentSpotId,
      int contextId,
      ValueNotifier<String> dialogSearchNotifier,
      ) async {
    final selectedValue = await showDialog<Map<String, String?>>(
      context: context,
      builder: (BuildContext dialogContext) {
        // The dialog can now be updated to accept the single 'rowReference' object,
        // giving it access to allSpotsMap and other necessary data.
        return SpotSearchDialog(
          rendererContext: rendererContext,
          // Pass the new object to the dialog
          rowReference: rowReference,
          currentSpotId: currentSpotId,
          contextId: contextId,
          searchNotifier: dialogSearchNotifier,
        );
      },
    );

    if (selectedValue != null && context.mounted) {
      final value = selectedValue['value'];
      final applyToAll = selectedValue['applyToAll'] == 'true';

      if (value != null) {
        if (applyToAll) {
          final row = rendererContext.stateManager.getRowByIdx(rendererContext.rowIdx)!;
          for (final cellEntry in row.cells.entries) {
            if (cellEntry.key.startsWith(SpotManagementConstants.contextColumnPrefix)) {
              rendererContext.stateManager.changeCellValue(cellEntry.value, value, force: true);
            }
          }
        } else {
          var cell = rendererContext.stateManager.getRowByIdx(rendererContext.rowIdx)!.cells[rendererContext.column.field]!;
          rendererContext.stateManager.changeCellValue(cell, value, force: true);
        }
      }
    }
  }
}