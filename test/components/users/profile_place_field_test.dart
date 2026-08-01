import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/groups/user_group_info_model.dart';
import 'package:fstapp/components/map/place_model.dart';
import 'package:fstapp/components/users/user_info_model.dart';
import 'package:fstapp/components/users/widgets/profile_place_field.dart';
import 'package:fstapp/database_tables/tb.dart';

void main() {
  Widget testApp({
    required PlaceModel? place,
    required ValueChanged<int> onOpenPlace,
  }) {
    return MaterialApp(
      home: Scaffold(
        body: ProfilePlaceField(
          label: UserInfoModel.userGroupColumn,
          value: Tb.user_group_info.title,
          place: place,
          icon: Icons.groups_outlined,
          onOpenPlace: onOpenPlace,
        ),
      ),
    );
  }

  testWidgets('opens an assigned place through the canonical callback',
      (tester) async {
    final placeId = Tb.places.id.hashCode;
    int? openedPlaceId;

    await tester.pumpWidget(testApp(
      place: PlaceModel(id: placeId),
      onOpenPlace: (id) => openedPlaceId = id,
    ));

    await tester.tap(find.byType(InkWell));

    expect(openedPlaceId, placeId);
  });

  testWidgets('keeps an unassigned value read-only', (tester) async {
    int? openedPlaceId;

    await tester.pumpWidget(testApp(
      place: null,
      onOpenPlace: (id) => openedPlaceId = id,
    ));

    expect(find.byType(InkWell), findsNothing);
    expect(openedPlaceId, isNull);
  });

  test('cached user info retains the group place used by offline navigation',
      () {
    final placeId = Tb.places.id.hashCode;
    final cached = UserInfoModel(
      eventUserGroup: UserGroupInfoModel(
        id: Tb.user_group_info.id.hashCode,
        title: Tb.user_group_info.title,
        place: PlaceModel(id: placeId, title: Tb.places.title),
      ),
    ).toJson();

    final restored = UserInfoModel.fromJson(cached);

    expect(restored.eventUserGroup?.place?.id, placeId);
    expect(restored.eventUserGroup?.place?.title, Tb.places.title);
  });
}
