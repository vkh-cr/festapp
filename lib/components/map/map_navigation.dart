import 'package:flutter/widgets.dart';
import 'package:fstapp/components/map/map_page.dart';
import 'package:fstapp/router_service.dart';

/// Canonical navigation boundary for opening a place on the occasion map.
abstract final class MapNavigation {
  static Future<void> openPlace(BuildContext context, int placeId) async {
    await RouterService.navigateOccasion<void>(
      context,
      '${MapPage.ROUTE}/$placeId',
    );
  }
}
