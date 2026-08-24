import 'dart:convert';
import 'dart:typed_data';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/images/image_control_client.dart';
import 'package:http/http.dart' as http;
import 'package:http/testing.dart';

void main() {
  test(
      'upload uses the control origin and stable projectId without credentials',
      () async {
    late http.Request captured;
    final client = MockClient((request) async {
      captured = request;
      return http.Response(
          jsonEncode({'url': 'https://a.img.festapp.net/images/1/x.jpg'}), 200);
    });
    final api = ImageControlClient(
        endpoint: 'https://image-api.festapp.net',
        projectId: 'a',
        httpClient: client);
    final result = await api.upload(
        bytes: Uint8List.fromList([1, 2]),
        filename: 'x.jpg',
        accessToken: 'jwt',
        occasionId: 1);
    expect(captured.url.toString(), 'https://image-api.festapp.net/upload');
    expect(captured.headers['Authorization'], 'Bearer jwt');
    final body = captured.body;
    expect(body, contains('name="projectId"'));
    expect(body, contains('\r\na\r\n'));
    expect(body, isNot(contains('anonKey')));
    expect(body, isNot(contains('supabaseUrl')));
    expect(result, 'https://a.img.festapp.net/images/1/x.jpg');
  });

  test('single and cleanup deletes use the same bounded URL batch contract',
      () async {
    final bodies = <Map<String, dynamic>>[];
    final client = MockClient((request) async {
      bodies.add(jsonDecode(request.body) as Map<String, dynamic>);
      return http.Response(jsonEncode({'complete': true}), 200);
    });
    final api = ImageControlClient(
        endpoint: 'https://image-api.festapp.net',
        projectId: 'default',
        httpClient: client);
    await api.deleteLinks(['https://img.festapp.net/images/1/a.jpg'], 'jwt');
    await api.deleteLinks([
      'https://img.festapp.net/images/1/a.jpg',
      'https://img.festapp.net/images/1/b.jpg',
    ], 'jwt');
    expect(bodies[0], {
      'projectId': 'default',
      'links': ['https://img.festapp.net/images/1/a.jpg']
    });
    expect((bodies[1]['links'] as List).length, 2);
  });

  test('copy download preserves bytes for the subsequent upload', () async {
    final api = ImageControlClient(
        endpoint: 'https://image-api.festapp.net',
        projectId: 'default',
        httpClient:
            MockClient((_) async => http.Response.bytes([1, 2, 3], 200)));
    expect(await api.download('https://img.festapp.net/images/1/a.jpg'),
        Uint8List.fromList([1, 2, 3]));
  });
}
