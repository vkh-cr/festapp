import 'package:flutter_test/flutter_test.dart';
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
}
