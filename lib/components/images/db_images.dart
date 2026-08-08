import 'dart:convert';
import 'dart:typed_data';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:fstapp/services/app_logger.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';

class DbImages {
  static final _supabase = Supabase.instance.client;
  static const _bucketName = 'public-files';

  /// Detect image format from magic bytes and return extension.
  static String _detectExtension(Uint8List data) {
    if (data.length >= 8 &&
        data[0] == 0x89 &&
        data[1] == 0x50 &&
        data[2] == 0x4E &&
        data[3] == 0x47) {
      return 'png';
    }
    if (data.length >= 12 &&
        data[0] == 0x52 &&
        data[1] == 0x49 &&
        data[2] == 0x46 &&
        data[3] == 0x46 &&
        data[8] == 0x57 &&
        data[9] == 0x45 &&
        data[10] == 0x42 &&
        data[11] == 0x50) {
      return 'webp';
    }
    return 'jpg';
  }

  /// Upload an image to the shared Worker with optional server-side transform.
  ///
  /// The Worker validates the user's JWT against the Supabase project identified
  /// by [supabaseUrl] + [anonKey]. This allows a single Worker (img.festapp.net)
  /// to serve multiple Supabase projects.
  ///
  /// [imageData]   – raw image bytes.
  /// [occasion]    – occasion ID for permission check (mutually exclusive with [unit]).
  /// [unit]        – unit ID for permission check (mutually exclusive with [occasion]).
  /// [maxEdge]     – longer-edge limit in px (Worker default: 1200).
  /// [maxBytes]    – skip transform when file is smaller (Worker default: 800 KB).
  /// [quality]     – JPEG quality 1-100 (Worker default: 70, ignored for PNG).
  /// [workerUrl]   – override Worker URL (defaults to [AppConfig.imageWorkerUrl]).
  /// [supabaseUrl] – Supabase project URL for Worker auth (defaults to [AppConfig.supabaseUrl]).
  /// [anonKey]     – Supabase anon key for Worker auth (defaults to [AppConfig.anonKey]).
  static Future<String> uploadImage(
    Uint8List imageData,
    int? occasion,
    int? unit, {
    int? maxEdge,
    int? maxBytes,
    int? quality,
    String? workerUrl,
    String? supabaseUrl,
    String? anonKey,
  }) async {
    final session = _supabase.auth.currentSession;
    if (session == null) throw Exception('Not authenticated');

    final baseUrl = workerUrl ?? AppConfig.imageWorkerUrl;
    final ext = _detectExtension(imageData);
    final request = http.MultipartRequest(
      'POST',
      Uri.parse('$baseUrl/upload'),
    );
    request.headers['Authorization'] = 'Bearer ${session.accessToken}';
    request.files.add(http.MultipartFile.fromBytes(
      'file',
      imageData,
      filename: '${DateTime.now().millisecondsSinceEpoch}.$ext',
    ));
    if (occasion != null) {
      request.fields['occasionId'] = occasion.toString();
    }
    if (unit != null) {
      request.fields['unitId'] = unit.toString();
    }
    if (maxEdge != null) {
      request.fields['maxEdge'] = maxEdge.toString();
    }
    if (maxBytes != null) {
      request.fields['maxBytes'] = maxBytes.toString();
    }
    if (quality != null) {
      request.fields['quality'] = quality.toString();
    }
    // Tell the Worker which Supabase project to validate the JWT against
    request.fields['supabaseUrl'] = supabaseUrl ?? AppConfig.supabaseUrl;
    request.fields['anonKey'] = anonKey ?? AppConfig.anonKey;

    final streamedResponse = await request.send();
    final responseBody = await streamedResponse.stream.bytesToString();
    if (streamedResponse.statusCode != 200) {
      throw Exception('Upload failed: $responseBody');
    }

    final json = jsonDecode(responseBody) as Map<String, dynamic>;
    return json['url'] as String;
  }

  static bool _isR2Url(String url) =>
      url.contains('img.festapp.net') ||
      url.contains('festapp-image-worker.festapp.workers.dev');

  static Future<void> removeImage(String imageUrl) async {
    if (_isR2Url(imageUrl)) {
      // R2: delete via Worker /delete endpoint
      final key = Uri.parse(imageUrl).path.substring(1);
      final token = _supabase.auth.currentSession!.accessToken;
      final response = await http.post(
        Uri.parse('${AppConfig.imageWorkerUrl}/delete'),
        headers: {
          'Authorization': 'Bearer $token',
          'Content-Type': 'application/json',
        },
        body: jsonEncode({
          'key': key,
          'supabaseUrl': AppConfig.supabaseUrl,
          'anonKey': AppConfig.anonKey,
        }),
      );
      if (response.statusCode != 200) {
        AppLogger.error('R2 delete returned ${response.statusCode}: ${response.body}');
      }
    } else {
      // Supabase Storage: existing path extraction
      final uri = Uri.parse(imageUrl);
      final segments = uri.pathSegments;
      final bucketIndex = segments.indexOf(_bucketName);
      if (bucketIndex == -1 || bucketIndex + 1 >= segments.length) {
        throw Exception('Invalid image URL');
      }
      final filePath = segments.sublist(bucketIndex + 1).join('/');
      await _supabase.storage.from(_bucketName).remove([filePath]);
    }
    await _supabase.rpc('remove_image_records', params: {
      'p_links': [imageUrl],
    });
  }

  static Future<String> createCopyOfImage(
      String imageUrl, int? occasion, int? unit) async {
    if (_isR2Url(imageUrl)) {
      // R2: download the image bytes and re-upload via Worker
      final downloadResponse = await http.get(Uri.parse(imageUrl));
      if (downloadResponse.statusCode != 200) {
        throw Exception('Failed to download R2 image: ${downloadResponse.statusCode}');
      }
      return await uploadImage(downloadResponse.bodyBytes, occasion, unit);
    }

    // Supabase Storage: existing copy logic
    final uri = Uri.parse(imageUrl);
    final segments = uri.pathSegments;
    final bucketIndex = segments.indexOf(_bucketName);
    if (bucketIndex == -1 || bucketIndex + 1 >= segments.length) {
      throw Exception('Invalid image URL');
    }
    final filePath = segments.sublist(bucketIndex + 1).join('/');

    final newPath = 'images/${DateTime.now().millisecondsSinceEpoch}.jpg';
    await _supabase.storage.from(_bucketName).copy(filePath, newPath);

    final newPublicUrl =
        _supabase.storage.from(_bucketName).getPublicUrl(newPath);

    await _supabase.rpc('add_image_record', params: {
      'p_link': newPublicUrl,
      'p_occasion_id': occasion,
      'p_unit_id': unit,
    });

    return newPublicUrl;
  }

  static Future<bool> isImageUploaded(String imageUrl, int occasion) async {
    final response = await _supabase
        .from(Tb.images.table)
        .select()
        .eq(Tb.images.link, imageUrl)
        .eq(Tb.images.occasion, occasion);
    return response.isNotEmpty;
  }

  static Future<void> cleanupRemovedImages(
      List<String> removedImages, int occasion) async {
    if (removedImages.isEmpty) return;

    final response = await _supabase
        .from(Tb.images.table)
        .select()
        .inFilter(Tb.images.link, removedImages)
        .eq(Tb.images.occasion, occasion);

    // Partition URLs into R2 and Supabase Storage lists
    List<String> r2Keys = [];
    List<String> supabasePaths = [];
    for (var image in response) {
      String imageUrl = image[Tb.images.link];
      if (_isR2Url(imageUrl)) {
        r2Keys.add(Uri.parse(imageUrl).path.substring(1));
      } else {
        final uri = Uri.parse(imageUrl);
        final segments = uri.pathSegments;
        final bucketIndex = segments.indexOf(_bucketName);
        if (bucketIndex != -1 && bucketIndex + 1 < segments.length) {
          supabasePaths.add(segments.sublist(bucketIndex + 1).join('/'));
        }
      }
    }

    // Delete R2 images individually via Worker
    if (r2Keys.isNotEmpty) {
      final token = _supabase.auth.currentSession!.accessToken;
      for (final key in r2Keys) {
        final deleteResponse = await http.post(
          Uri.parse('${AppConfig.imageWorkerUrl}/delete'),
          headers: {
            'Authorization': 'Bearer $token',
            'Content-Type': 'application/json',
          },
          body: jsonEncode({
            'key': key,
            'supabaseUrl': AppConfig.supabaseUrl,
            'anonKey': AppConfig.anonKey,
          }),
        );
        if (deleteResponse.statusCode != 200) {
          AppLogger.error('R2 cleanup delete returned ${deleteResponse.statusCode} for key: $key');
        }
      }
    }

    // Delete Supabase Storage images in batch
    if (supabasePaths.isNotEmpty) {
      await _supabase.storage.from(_bucketName).remove(supabasePaths);
    }

    await _supabase.rpc('remove_image_records', params: {
      'p_links': removedImages,
    });
  }
}
