import 'dart:convert';
import 'dart:typed_data';
import 'package:http/http.dart' as http;

class ImageControlClient {
  final String endpoint;
  final String projectId;
  final http.Client httpClient;

  const ImageControlClient({
    required this.endpoint,
    required this.projectId,
    required this.httpClient,
  });

  Future<String> upload({
    required Uint8List bytes,
    required String filename,
    required String accessToken,
    int? occasionId,
    int? unitId,
    int? maxEdge,
    int? maxBytes,
    int? quality,
  }) async {
    final request = http.MultipartRequest('POST', Uri.parse('$endpoint/upload'))
      ..headers['Authorization'] = 'Bearer $accessToken'
      ..fields['projectId'] = projectId
      ..files
          .add(http.MultipartFile.fromBytes('file', bytes, filename: filename));
    if (occasionId != null) request.fields['occasionId'] = '$occasionId';
    if (unitId != null) request.fields['unitId'] = '$unitId';
    if (maxEdge != null) request.fields['maxEdge'] = '$maxEdge';
    if (maxBytes != null) request.fields['maxBytes'] = '$maxBytes';
    if (quality != null) request.fields['quality'] = '$quality';

    final streamed = await httpClient.send(request);
    final responseBody = await streamed.stream.bytesToString();
    if (streamed.statusCode != 200)
      throw Exception('Upload failed: $responseBody');
    return (jsonDecode(responseBody) as Map<String, dynamic>)['url'] as String;
  }

  Future<void> deleteLinks(List<String> links, String accessToken) async {
    final response = await httpClient.post(
      Uri.parse('$endpoint/delete'),
      headers: {
        'Authorization': 'Bearer $accessToken',
        'Content-Type': 'application/json'
      },
      body: jsonEncode({'projectId': projectId, 'links': links}),
    );
    if (response.statusCode != 200)
      throw Exception('Image delete incomplete: ${response.body}');
  }

  Future<Uint8List> download(String url) async {
    final response = await httpClient.get(Uri.parse(url));
    if (response.statusCode != 200)
      throw Exception('Image download failed: ${response.statusCode}');
    return response.bodyBytes;
  }
}
