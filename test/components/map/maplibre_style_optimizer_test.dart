import 'dart:convert';
import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/map/maplibre/maplibre_style_optimizer.dart';

void main() {
  test('event-map profile removes clutter while preserving navigation layers',
      () async {
    final source = jsonDecode(
      await File('automation/offline-map/style/style.json').readAsString(),
    ) as Map<String, dynamic>;

    final optimized = MapLibreStyleOptimizer.optimize(
      source,
      sourceName: 'versatiles-shortbread',
    );
    final layers = (optimized['layers'] as List).cast<Map<String, dynamic>>();
    final ids = layers.map((layer) => layer['id']).toSet();

    expect((source['layers'] as List), hasLength(307));
    expect(layers, hasLength(159));
    expect(
      ids,
      containsAll({
        'building',
        'street-primary',
        'bridge-street-primary',
        'tunnel-street-primary',
        'transport-rail',
        'label-motorway-shield',
        'label-street-primary',
        'label-place-city',
        'symbol-transit-station',
      }),
    );
    for (final removed in {
      'poi-shop',
      'label-address-housenumber',
      'boundary-country:outline',
      'street-primary:outline',
      'street-primary-bicycle',
      'marking-oneway',
    }) {
      expect(ids, isNot(contains(removed)));
    }
  });

  test('unknown vector sources are left untouched', () {
    final style = <String, dynamic>{
      'layers': [
        {'id': 'custom', 'type': 'fill'},
      ],
    };

    expect(
      MapLibreStyleOptimizer.optimize(style, sourceName: 'custom-source'),
      same(style),
    );
  });
}
