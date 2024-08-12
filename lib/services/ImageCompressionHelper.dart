import 'dart:typed_data';
import 'package:fstapp/appConfig.dart';
import 'package:image/image.dart' as img;
import 'package:supabase_flutter/supabase_flutter.dart';

class ImageCompressionHelper {
  static const String _bucketName = 'images-temp';
  static const String _jpgFormat = 'jpg';
  static const String _pngFormat = 'png';

  static Future<Uint8List> compressJpeg(Uint8List imageData, int width, {int quality = 85}) async {
    return await _compressImageWithSupabase(
      imageData,
      width,
      quality: quality,
      format: _jpgFormat,
      offlineCompression: () => compressJpegOffline(imageData, width, quality: quality),
    );
  }

  static Future<Uint8List> compressPng(Uint8List imageData, int width) async {
    return await _compressImageWithSupabase(
      imageData,
      width,
      format: _pngFormat,
      offlineCompression: () => compressPngOffline(imageData, width),
    );
  }

  static Future<Uint8List> _compressImageWithSupabase(
      Uint8List imageData,
      int width, {
        int? quality,
        required String format,
        required Uint8List Function() offlineCompression,
      }) async {
    if (!AppConfig.isProLicense) {
      return offlineCompression();
    }

    final supabase = Supabase.instance.client;
    final path = 'uploads/${DateTime.now().millisecondsSinceEpoch}.$format';

    try {
      // Upload the image to Supabase Storage
      final uploadResponse = await supabase.storage.from(_bucketName).uploadBinary(path, imageData);
      if (uploadResponse.isEmpty) {
        return offlineCompression();
      }

      try {
        // Attempt to transform and download the image
        var imgData = await supabase.storage.from(_bucketName).download(
          path,
          transform: TransformOptions(
              width: width,
              quality: quality,
              resize: ResizeMode.contain,
              format: RequestImageFormat.origin
          ),
        );

        return imgData;
      } on StorageException catch (e) {
        if (e.statusCode == "403") {
          // Set limited license flag and fallback to offline conversion
          AppConfig.isProLicense = false;
        }
        return offlineCompression();
      } finally {
        // Always delete the original image from Supabase Storage after processing
        await supabase.storage.from(_bucketName).remove([path]);
      }
    } catch (e) {
      // If an error occurs, fallback to offline compression
      return offlineCompression();
    }
  }

  static Uint8List compressJpegOffline(Uint8List imageData, int width, {int quality = 85}) {
    return _compressImageOffline(imageData, width, quality: quality, format: _jpgFormat);
  }

  static Uint8List compressPngOffline(Uint8List imageData, int width) {
    return _compressImageOffline(imageData, width, format: _pngFormat);
  }

  static Uint8List _compressImageOffline(
      Uint8List imageData,
      int width, {
        int? quality,
        required String format,
      }) {
    final img.Image? originalImage = img.decodeImage(imageData);
    if (originalImage == null) {
      throw Exception("Failed to decode $format image");
    }

    final img.Image resizedImage = img.copyResize(originalImage, width: width);

    if (format == _jpgFormat) {
      return Uint8List.fromList(img.encodeJpg(resizedImage, quality: quality ?? 85));
    } else if (format == _pngFormat) {
      return Uint8List.fromList(img.encodePng(resizedImage));
    } else {
      throw Exception("Unsupported image format: $format");
    }
  }
}
