import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/occasion/db_occasions.dart';
import 'package:fstapp/components/users/db_users.dart';
import 'package:fstapp/components/users/occasion_editor_payload.dart';

void main() {
  test('one RPC bundle preserves more than 1000 users and service definitions',
      () {
    final users = List.generate(
      5001,
      (index) => {
        'user': '00000000-0000-0000-0000-${index.toString().padLeft(12, '0')}',
        'data': <String, dynamic>{},
        'services': <String, dynamic>{},
      },
    );
    final result = {
      'code': 200,
      'data': {
        'occasion_users': users,
        'forms': <dynamic>[],
        'services': {
          'accommodation': [
            {
              'code': 'A1',
              'title': 'Hotel',
              'reference': 10,
              'place_title': 'Budova Orion',
            },
            {'code': 'A2', 'title': 'Hostel', 'reference': 11},
          ],
          'food': <dynamic>[],
        },
      },
    };

    final bundle = OccasionEditorPayload.fromRpc(result);

    expect(bundle.users, hasLength(5001));
    expect(
      bundle.services['accommodation']?.map((item) => item['code']),
      ['A1', 'A2'],
    );
    expect(
      bundle.services['accommodation']?.first['place_title'],
      'Budova Orion',
    );
  });

  test('shared bundle preserves the Stay tab user and service contract', () {
    final result = {
      'code': 200,
      'data': {
        'occasion_users': [
          {
            'user': '00000000-0000-0000-0000-000000000001',
            'data': {'email': 'stay@test.local'},
            'services': {
              'accommodation': {'A1': DbOccasions.servicePaid},
              'food': <String, dynamic>{},
            },
          },
        ],
        'forms': <dynamic>[],
        'services': {
          'accommodation': [
            {
              'code': 'A1',
              'title': 'Hotel',
              'reference': 10,
              'place_title': 'Budova Orion',
            },
          ],
          'food': [
            {'code': 'F1', 'title': 'Oběd'},
          ],
        },
      },
    };

    final bundle = DbUsers.parseOccasionEditorData(result);

    expect(bundle.users, hasLength(1));
    expect(
      bundle.users.single.services?[DbOccasions.serviceTypeAccommodation]
          ?['A1'],
      DbOccasions.servicePaid,
    );
    expect(
      bundle.users.single.services?[DbOccasions.serviceTypeFood]?['F1'],
      DbOccasions.serviceNone,
    );
    expect(
      bundle.services[DbOccasions.serviceTypeAccommodation]?.single.placeTitle,
      'Budova Orion',
    );
  });
}
