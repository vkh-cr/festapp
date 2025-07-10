import 'package:fstapp/components/inventory/models/resource_model.dart';
import 'package:fstapp/components/inventory/models/resource_slot_model.dart';
import 'package:fstapp/data_models_eshop/spot_model.dart';
import 'package:flutter/material.dart'; // For Color
import 'package:fstapp/components/inventory/models/spot_management_constants.dart'; // Assuming colors are moved here


/// A unified object to hold all reference data for a single row in the spot management grid.
/// This is passed in a single hidden column to simplify data access in renderers and dialogs.
class SpotManagementRowReference {
  final ResourceModel resource;
  final ResourceSlotModel? slot;
  final int? implicitSlotIndex;
  final Map<int, SpotModel?> initialSpotsInRow;
  final Map<int, SpotModel> allSpotsMap;

  SpotManagementRowReference({
    required this.resource,
    this.slot,
    this.implicitSlotIndex,
    required this.initialSpotsInRow,
    required this.allSpotsMap,
  });
}
