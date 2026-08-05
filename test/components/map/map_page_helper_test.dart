import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/icons/icons_strings.dart';
import 'package:fstapp/components/icons/place_type_model.dart';
import 'package:fstapp/components/map/icon_model.dart';
import 'package:fstapp/components/map/map_page_helper.dart';
import 'package:fstapp/components/map/map_scene.dart';
import 'package:fstapp/components/map/path_group_model.dart';
import 'package:fstapp/components/map/path_node.dart';
import 'package:fstapp/components/map/place_model.dart';

/// The place-type filter bar shown at the bottom of the map: one chip per
/// visible place type plus a trailing "Other" chip, single-select.
void main() {
  const otherCode = "__other__";

  final placeTypes = [
    PlaceTypeModel(id: 1, code: "ubytovani", title: "Ubytování", icon: 171),
    PlaceTypeModel(id: 2, code: "hl_prog", title: "Hlavní programy", icon: 180),
    PlaceTypeModel(id: 3, code: "dieceze", title: "Diecézní", icon: 999),
  ];

  final icons = [
    // A valid SVG so the icon chip exercises the SvgPicture.string path.
    IconModel(
      id: 171,
      data:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><rect width="10" height="10"/></svg>',
    ),
    IconModel(
      id: 180,
      data:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5"/></svg>',
    ),
    // icon 999 has no matching entry -> falls back to a generic pin icon.
  ];

  Future<void> pumpBar(
    WidgetTester tester, {
    required List<PlaceTypeModel> types,
    String? selectedCode,
    required void Function(String? code) onTap,
  }) async {
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: Stack(
            children: [
              Builder(
                builder: (context) => MapPageHelper.buildPlaceTypeFilterBar(
                  context,
                  types,
                  selectedCode,
                  otherCode,
                  onTap,
                  icons,
                ),
              ),
            ],
          ),
        ),
      ),
    );
    await tester.pumpAndSettle();
  }

  testWidgets('empty place types renders nothing (no pill)', (tester) async {
    await pumpBar(tester, types: const [], selectedCode: null, onTap: (_) {});
    expect(find.byType(Tooltip), findsNothing);
  });

  testWidgets('renders one chip per type plus a trailing Other chip',
      (tester) async {
    await pumpBar(tester,
        types: placeTypes, selectedCode: "ubytovani", onTap: (_) {});

    // 3 type chips + 1 "Other" chip.
    expect(find.byType(Tooltip), findsNWidgets(placeTypes.length + 1));
    // Other chip uses the more-horiz glyph.
    expect(find.byIcon(Icons.more_horiz), findsOneWidget);
    // The type with an unknown icon id falls back to the generic pin.
    expect(find.byIcon(Icons.place), findsOneWidget);
  });

  testWidgets('place type names are not permanently shown in the compact bar',
      (tester) async {
    await pumpBar(tester,
        types: placeTypes, selectedCode: "ubytovani", onTap: (_) {});

    expect(find.text("Ubytování"), findsNothing);
    expect(find.text("Hlavní programy"), findsNothing);
    expect(find.text(IconsStrings.placeTypesOther), findsNothing);
  });

  testWidgets('selection feedback briefly shows the selected type name',
      (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: Stack(
            children: [
              Builder(
                builder: (context) =>
                    MapPageHelper.buildPlaceTypeSelectionFeedback(
                  context,
                  "Hlavní programy",
                ),
              ),
            ],
          ),
        ),
      ),
    );

    expect(find.text("Hlavní programy"), findsOneWidget);
    expect(
      find.byWidgetPredicate(
        (widget) => widget is IgnorePointer && widget.ignoring,
      ),
      findsOneWidget,
    );
  });

  testWidgets('tapping a type chip reports that type code', (tester) async {
    String? tapped;
    await pumpBar(tester,
        types: placeTypes, selectedCode: "ubytovani", onTap: (c) => tapped = c);

    await tester.tap(find.byTooltip("Hlavní programy"));
    expect(tapped, "hl_prog");
  });

  testWidgets('tapping the Other chip reports the other-bucket code',
      (tester) async {
    String? tapped;
    await pumpBar(tester,
        types: placeTypes, selectedCode: "ubytovani", onTap: (c) => tapped = c);

    // Untranslated in the test env, the tooltip is the raw key.
    await tester.tap(find.byTooltip(IconsStrings.placeTypesOther));
    expect(tapped, otherCode);
  });

  testWidgets('selected chip is highlighted while others are transparent',
      (tester) async {
    await pumpBar(tester,
        types: placeTypes, selectedCode: "hl_prog", onTap: (_) {});

    Color? chipColor(String tooltip) {
      final container = tester.widget<Container>(
        find.descendant(
          of: find.byTooltip(tooltip),
          matching: find.byType(Container),
        ),
      );
      return (container.decoration as BoxDecoration).color;
    }

    // Selected chip has a visible (non-transparent) fill; an unselected one is transparent.
    expect(chipColor("Hlavní programy"), isNot(Colors.transparent));
    expect(chipColor("Ubytování"), Colors.transparent);
  });

  test('group paths stay semantic before direction-marker layout', () async {
    final places = [
      PlaceModel(
        id: 1,
        title: 'Start',
        latLng: {'lat': 49.82, 'lng': 18.26},
      ),
      PlaceModel(
        id: 2,
        title: 'End',
        latLng: {'lat': 49.8205, 'lng': 18.2605},
      ),
    ];
    final groups = [
      PathGroupsModel(
        id: 7,
        color: '#ff3366',
        pathData: [
          [PathNode.place(1), PathNode.place(2)],
        ],
      ),
    ];

    final paths = await MapPageHelper.loadGroupPaths(places, groups);

    expect(paths.keys, [7]);
    expect(paths[7], hasLength(1));
    expect(paths[7]!.first.kind, MapPathKind.main);
    expect(paths[7]!.first.points, hasLength(2));
    expect(paths[7]!.first.colorValue, const Color(0xffff3366).toARGB32());
    expect(paths[7]!.every((path) => path.kind == MapPathKind.main), isTrue);
  });

  test('place popup requires meaningful HTML content', () {
    expect(MapPageHelper.hasMeaningfulPlaceDescription(null), isFalse);
    expect(MapPageHelper.hasMeaningfulPlaceDescription(''), isFalse);
    expect(
      MapPageHelper.hasMeaningfulPlaceDescription('<p><br></p>'),
      isFalse,
    );
    expect(
      MapPageHelper.hasMeaningfulPlaceDescription('<p>Stage details</p>'),
      isTrue,
    );
    expect(
      MapPageHelper.hasMeaningfulPlaceDescription('<p><img src="map.jpg"></p>'),
      isTrue,
    );
  });
}
