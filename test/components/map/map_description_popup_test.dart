import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/map/map_description_popup.dart';
import 'package:fstapp/components/map/map_place_model.dart';
import 'package:latlong2/latlong.dart';

void main() {
  testWidgets('popup offers an explicit close action', (tester) async {
    var closed = false;

    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: MapDescriptionPopup(
            place: MapPlaceModel(
              id: 1,
              title: 'Stage',
              description: 'Programme details',
              latLng: const LatLng(49.82, 18.26),
            ),
            isEditing: false,
            onClose: () => closed = true,
          ),
        ),
      ),
    );

    await tester.tap(find.byTooltip('Close'));

    expect(closed, isTrue);
  });
}
