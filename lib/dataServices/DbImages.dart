import 'dart:typed_data';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbImages {
  static final _supabase = Supabase.instance.client;
  static const _bucketName = 'public-files';

  static Future<String> uploadImage(Uint8List imageData, int? occasion, int? unit) async {
    final path = 'images/${DateTime.now().millisecondsSinceEpoch}.jpg';
    final uploadResponse =
    await _supabase.storage.from(_bucketName).uploadBinary(path, imageData);
    if (uploadResponse.isEmpty) throw Exception('Upload failed');
    final publicUrl = _supabase.storage.from(_bucketName).getPublicUrl(path);
    await _supabase.from(Tb.images.table).insert({
      Tb.images.link: publicUrl,
      Tb.images.occasion: occasion,
      Tb.images.unit: unit,
    });

    return publicUrl;
  }

  static Future<void> removeImage(String imageUrl) async {
    final uri = Uri.parse(imageUrl);
    final segments = uri.pathSegments;
    final bucketIndex = segments.indexOf(_bucketName);
    if (bucketIndex == -1 || bucketIndex + 1 >= segments.length) {
      throw Exception('Invalid image URL');
    }
    final filePathSegments = segments.sublist(bucketIndex + 1);
    final filePath = filePathSegments.join('/');
    await _supabase.storage.from(_bucketName).remove([filePath]);
    await _supabase
        .from(Tb.images.table)
        .delete()
        .eq(Tb.images.link, imageUrl);
  }

  static Future<String> createCopyOfImage(String imageUrl, int? occasion, int? unit) async {
    final uri = Uri.parse(imageUrl);
    final segments = uri.pathSegments;
    final bucketIndex = segments.indexOf(_bucketName);
    if (bucketIndex == -1 || bucketIndex + 1 >= segments.length) {
      throw Exception('Invalid image URL');
    }
    final filePathSegments = segments.sublist(bucketIndex + 1);
    final filePath = filePathSegments.join('/');

    final newPath = 'images/${DateTime.now().millisecondsSinceEpoch}.jpg';
    await _supabase.storage.from(_bucketName).copy(filePath, newPath);

    final newPublicUrl = _supabase.storage.from(_bucketName).getPublicUrl(newPath);

    await _supabase.from(Tb.images.table).insert({
      Tb.images.link: newPublicUrl,
      Tb.images.occasion: occasion,
      Tb.images.unit: unit,
    });

    return newPublicUrl;
  }

  static Future<bool> isImageUploaded(String imageUrl, int occasion) async {
    final response = await _supabase.from(Tb.images.table)
        .select()
        .eq(Tb.images.link, imageUrl)
        .eq(Tb.images.occasion, occasion);
    return response.isNotEmpty;
  }

  static Future<void> cleanupRemovedImages(List<String> removedImages, int occasion) async {
    if (removedImages.isEmpty) return;

    final response = await _supabase.from(Tb.images.table)
        .select()
        .inFilter(Tb.images.link, removedImages)
        .eq(Tb.images.occasion, occasion);

    List<String> filePaths = [];
    for (var image in response) {
      String imageUrl = image[Tb.images.link];
      final uri = Uri.parse(imageUrl);
      final segments = uri.pathSegments;
      final bucketIndex = segments.indexOf(_bucketName);
      if (bucketIndex != -1 && bucketIndex + 1 < segments.length) {
        final filePath = segments.sublist(bucketIndex + 1).join('/');
        filePaths.add(filePath);
      }
    }

    if (filePaths.isNotEmpty) {
      await _supabase.storage.from(_bucketName).remove(filePaths);
    }

    await _supabase.from(Tb.images.table)
        .delete()
        .inFilter(Tb.images.link, removedImages)
        .eq(Tb.images.occasion, occasion);
  }
}
