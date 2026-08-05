import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/map/path_group_model.dart';
import 'package:fstapp/components/map/path_node.dart';
import 'package:fstapp/database_tables/tb.dart';

/// Round-trip coverage for the mixed path node model: segments hold either
/// place references (bare numbers) or free points ({lat,lng} objects), and both
/// the server JSON and the grid CSV representations must survive a round trip.
void main() {
  group('PathNode', () {
    test('place ref serializes to a bare int', () {
      final node = PathNode.place(7);
      expect(node.isPoint, isFalse);
      expect(node.placeId, 7);
      expect(node.toJson(), 7);
    });

    test('free point serializes to a {lat,lng} map', () {
      final node = PathNode.point(49.83, 18.28);
      expect(node.isPoint, isTrue);
      expect(node.placeId, isNull);
      expect(node.toJson(), {'lat': 49.83, 'lng': 18.28});
    });

    test('fromJson parses numbers as place refs and maps as points', () {
      expect(PathNode.fromJson(3), PathNode.place(3));
      expect(PathNode.fromJson(3.0), PathNode.place(3));
      expect(
        PathNode.fromJson({'lat': 1.5, 'lng': 2.5}),
        PathNode.point(1.5, 2.5),
      );
    });

    test('fromJson returns null for unrecognized input', () {
      expect(PathNode.fromJson('nope'), isNull);
      expect(PathNode.fromJson({'lat': 1.0}), isNull);
    });
  });

  group('PathGroupsModel JSON round-trip', () {
    test('mixed nodes survive fromJson -> toJson', () {
      final json = {
        Tb.path_groups.id: 5,
        Tb.path_groups.title: 'Mixed path',
        Tb.path_groups.data: {'color': '#FF0000'},
        Tb.path_groups.is_hidden: false,
        Tb.path_groups.path_data: [
          [
            1,
            {'lat': 49.83, 'lng': 18.28},
            2,
          ],
          [5, 6],
        ],
        Tb.path_groups.icon: null,
        Tb.path_groups.order: 1,
      };

      final model = PathGroupsModel.fromJson(json);
      expect(model.pathData, hasLength(2));
      expect(model.pathData![0], [
        PathNode.place(1),
        PathNode.point(49.83, 18.28),
        PathNode.place(2),
      ]);
      expect(model.pathData![1], [PathNode.place(5), PathNode.place(6)]);

      // toJson must produce the same array-of-arrays (ints + {lat,lng} maps).
      final out = model.toJson()[Tb.path_groups.path_data];
      expect(out, [
        [
          1,
          {'lat': 49.83, 'lng': 18.28},
          2,
        ],
        [5, 6],
      ]);
    });

    test('legacy int-only path data still parses (backward compatible)', () {
      final json = {
        Tb.path_groups.id: 1,
        Tb.path_groups.path_data: [
          [1, 2, 3],
        ],
      };
      final model = PathGroupsModel.fromJson(json);
      expect(model.pathData, [
        [PathNode.place(1), PathNode.place(2), PathNode.place(3)],
      ]);
    });
  });

  group('CSV round-trip', () {
    test('pathDataToCsv encodes place refs and free points', () {
      final csv = PathGroupsModel.pathDataToCsv([
        [PathNode.place(1), PathNode.point(49.83, 18.28), PathNode.place(2)],
        [PathNode.place(5), PathNode.place(6)],
      ]);
      expect(csv, '1,@49.83:18.28,2;5,6');
    });

    testWidgets('fromPlutoJson -> toTrinaRow preserves the mixed CSV',
        (tester) async {
      const csv = '1,@49.83:18.28,2;5,6';
      final model = PathGroupsModel.fromPlutoJson({
        Tb.path_groups.id: -1,
        Tb.path_groups.title: 'Path',
        Tb.places.table: csv,
      });

      expect(model.pathData, [
        [PathNode.place(1), PathNode.point(49.83, 18.28), PathNode.place(2)],
        [PathNode.place(5), PathNode.place(6)],
      ]);

      // toTrinaRow needs a BuildContext but only uses it to build cells.
      late BuildContext ctx;
      await tester.pumpWidget(MaterialApp(
        home: Builder(builder: (c) {
          ctx = c;
          return const SizedBox.shrink();
        }),
      ));

      final row = model.toTrinaRow(ctx);
      expect(row.cells[Tb.places.table]!.value, csv);
    });
  });
}
