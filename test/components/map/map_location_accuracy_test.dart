import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/map/map_location_accuracy.dart';
import 'package:geolocator/geolocator.dart';

void main() {
  test('open mobile map requests maximum continuous location accuracy', () {
    expect(
      MapLocationAccuracy.iosTemporaryFullAccuracyPurposeKey,
      'MapLocation',
    );
    expect(
      MapLocationAccuracy.settings.accuracy,
      LocationAccuracy.bestForNavigation,
    );
    expect(MapLocationAccuracy.settings.distanceFilter, 0);
  });
}
