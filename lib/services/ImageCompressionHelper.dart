import 'dart:typed_data';
import 'package:fstapp/appConfig.dart';
import 'package:image/image.dart' as img;
import 'package:supabase_flutter/supabase_flutter.dart';

class ImageCompressionHelper {
  static const String _bucketName = 'images-temp';
  static const String _jpgFormat = 'jpg';
  static const String _pngFormat = 'png';
  static const String _webpFormat = 'webp';

  static Future<Uint8List> compressJpeg(Uint8List imageData, int width, {int quality = 85}) async {
    return await compressImageWithSupabase(
      imageData,
      width,
      quality: quality,
      format: _jpgFormat,
      offlineCompression: () => compressJpegOffline(imageData, width, quality: quality),
    );
  }

  static Future<Uint8List> compressPng(Uint8List imageData, int width) async {
    return await compressImageWithSupabase(
      imageData,
      width,
      format: _pngFormat,
      offlineCompression: () => compressPngOffline(imageData, width),
    );
  }

  static Future<Uint8List> compressWebp(Uint8List imageData, int width, {int quality = 85}) async {
    return await compressImageWithSupabase(
      imageData,
      width,
      quality: quality,
      format: _webpFormat,
      offlineCompression: () => compressWebpOffline(imageData, width, quality: quality),
    );
  }

  static Future<Uint8List> compressImageWithSupabase(
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

  static Uint8List compressWebpOffline(Uint8List imageData, int width, {int quality = 85}) {
    return _compressImageOffline(imageData, width, quality: quality, format: _webpFormat);
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
    } else if (format == _webpFormat) {
      // not supported
      return imageData;
    } else {
      throw Exception("Unsupported image format: $format");
    }
  }

  /// Determines the image format based on magic bytes.
  static String _determineImageFormat(Uint8List imageData) {
    // JPEG: starts with 0xFF 0xD8
    if (imageData.length >= 2 &&
        imageData[0] == 0xFF &&
        imageData[1] == 0xD8) {
      return _jpgFormat;
    }
    // PNG: starts with 0x89 0x50 0x4E 0x47
    if (imageData.length >= 8 &&
        imageData[0] == 0x89 &&
        imageData[1] == 0x50 &&
        imageData[2] == 0x4E &&
        imageData[3] == 0x47) {
      return _pngFormat;
    }
    // WebP: RIFF header "RIFF" then "WEBP" at offset 8
    if (imageData.length >= 12 &&
        imageData[0] == 0x52 && // 'R'
        imageData[1] == 0x49 && // 'I'
        imageData[2] == 0x46 && // 'F'
        imageData[3] == 0x46 && // 'F'
        imageData[8] == 0x57 && // 'W'
        imageData[9] == 0x45 && // 'E'
        imageData[10] == 0x42 && // 'B'
        imageData[11] == 0x50) { // 'P'
      return _webpFormat;
    }
    // Default to JPEG if format is not recognized
    return _jpgFormat;
  }

  /// Universal compress method which determines the proper compression routine based on the image data.
  /// The only required parameter is the desired width.
  static Future<Uint8List> compress(Uint8List imageData, int width, {int quality = 85}) async {
    final format = _determineImageFormat(imageData);
    if (format == _jpgFormat) {
      return await compressJpeg(imageData, width, quality: quality);
    } else if (format == _pngFormat) {
      return await compressPng(imageData, width);
    } else if (format == _webpFormat) {
      return await compressWebp(imageData, width, quality: quality);
    } else {
      // Fallback to JPEG compression if the format is not recognized.
      return await compressJpeg(imageData, width, quality: quality);
    }
  }
}
