import 'package:flutter/material.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'package:fstapp/components/inventory/views/inventory_strings.dart';
import 'package:fstapp/components/inventory/views/quick_search_dialog.dart';

class PlaceSearchDialog extends StatelessWidget {
  final List<PlaceModel> allPlaces;
  final PlaceModel? currentPlace;

  const PlaceSearchDialog({
    super.key,
    required this.allPlaces,
    this.currentPlace,
  });

  @override
  Widget build(BuildContext context) {
    return QuickSearchDialog<PlaceModel>(
      title: InventoryStrings.searchDialogTitlePlace,
      allItems: allPlaces,
      currentItem: currentPlace,
      getItemTitle: (place) => place.title ?? 'Unnamed Place',
      compareItems: (a, b) => a.id == b.id,
    );
  }
}
