import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:fstapp/services/app_logger.dart';
import 'package:path_provider/path_provider.dart';
import 'package:vector_tile_renderer/vector_tile_renderer.dart';

class OfflineMapHelper {
  /// Universal method: Checks if a file exists locally.
  /// If it exists, returns it; otherwise, if connectivity is available,
  /// downloads the file from [url] to [filePath] (reporting progress via [onProgress]).
  /// If no connectivity is available or the download fails, returns null.
  static Future<File?> getOrDownloadFile(
      String url, String filePath, Function(double) onProgress) async {
    final file = File(filePath);
    if (await file.exists()) {
      return file;
    }
    final connectivity = await Connectivity().checkConnectivity();
    if (connectivity.contains(ConnectivityResult.none)) {
      // No connection and no cache.
      return null;
    }
    final part = File('$filePath.part');
    final client = HttpClient();
    IOSink? output;
    try {
      await file.parent.create(recursive: true);
      if (await part.exists()) await part.delete();
      final request = await client.getUrl(Uri.parse(url));
      final response = await request.close();
      if (response.statusCode < 200 || response.statusCode >= 300) {
        throw HttpException(
          'Offline map download failed: ${response.statusCode}',
        );
      }
      final contentLength = response.contentLength;
      var downloaded = 0;
      output = part.openWrite();
      await for (final data in response) {
        output.add(data);
        downloaded += data.length;
        onProgress(contentLength > 0 ? downloaded / contentLength : 0.0);
      }
      await output.flush();
      await output.close();
      output = null;
      if (contentLength >= 0 && downloaded != contentLength) {
        throw HttpException('Offline map download was incomplete.');
      }
      await part.rename(filePath);
      return file;
    } catch (e) {
      AppLogger.error('Offline map download failed: $e');
      await output?.close();
      if (await part.exists()) await part.delete();
      return null;
    } finally {
      client.close(force: true);
    }
  }

  /// Computes the local file path for the offline MBTiles package,
  /// deleting any old .mbtiles files not matching the current file name.
  static Future<String> getOfflinePackagePath(
      String offlineMapPackageURL) async {
    final directory = await getApplicationDocumentsDirectory();
    String fileName = Uri.parse(offlineMapPackageURL).pathSegments.last;
    String filePath = "${directory.path}/$fileName";
    final dirList = directory.listSync();
    for (var entity in dirList) {
      if (entity is File &&
          entity.path.endsWith(".mbtiles") &&
          entity.path != filePath) {
        await entity.delete();
      }
    }
    return filePath;
  }

  /// Computes the local file path for the style JSON,
  /// deleting any old .json files not matching the current file name.
  static Future<String> getOfflineStyleFilePath(String styleURL) async {
    final directory = await getApplicationDocumentsDirectory();
    String fileName = Uri.parse(styleURL).pathSegments.last;
    String filePath = "${directory.path}/$fileName";
    final dirList = directory.listSync();
    for (var entity in dirList) {
      if (entity is File &&
          entity.path.endsWith(".json") &&
          entity.path != filePath) {
        await entity.delete();
      }
    }
    return filePath;
  }

  /// Computes the local file path for the sprite JSON.
  static Future<String> getOfflineSpriteJsonPath(String spriteJsonUrl) async {
    final directory = await getApplicationDocumentsDirectory();
    String fileName = Uri.parse(spriteJsonUrl).pathSegments.last;
    String filePath = "${directory.path}/$fileName";
    final dirList = directory.listSync();
    for (var entity in dirList) {
      if (entity is File &&
          entity.path.endsWith(".json") &&
          entity.path != filePath) {
        await entity.delete();
      }
    }
    return filePath;
  }

  /// Computes the local file path for the sprite image.
  static Future<String> getOfflineSpriteImagePath(String spriteImageUrl) async {
    final directory = await getApplicationDocumentsDirectory();
    String fileName = Uri.parse(spriteImageUrl).pathSegments.last;
    String filePath = "${directory.path}/$fileName";
    final dirList = directory.listSync();
    for (var entity in dirList) {
      if (entity is File &&
          (entity.path.endsWith(".png") || entity.path.endsWith(".jpg")) &&
          entity.path != filePath) {
        await entity.delete();
      }
    }
    return filePath;
  }

  /// Loads the offline map style.
  /// Attempts to retrieve a cached style JSON (and associated sprites) via [getOrDownloadFile].
  /// Returns the parsed theme or null if unavailable.
  static Future<dynamic> loadOfflineMapStyle(String styleURL) async {
    final filePath = await getOfflineStyleFilePath(styleURL);
    final file = await getOrDownloadFile(styleURL, filePath, (progress) {});
    if (file == null) return null;
    try {
      final fileContent = await file.readAsString();
      var vectorTileTheme = jsonDecode(fileContent) as Map<String, dynamic>;
      return ThemeReader().read(vectorTileTheme);
    } catch (e) {
      AppLogger.error("Error loading offline map style: $e");
      return null;
    }
  }

  /// Retrieves (or downloads if available) the offline MBTiles package.
  static Future<File?> getOfflineMapPackage(String offlineMapPackageURL,
      String filePath, Function(double) onProgress) async {
    return await getOrDownloadFile(offlineMapPackageURL, filePath, onProgress);
  }

  /// Retrieves (or downloads if available) the sprite JSON file.
  static Future<File?> getSpriteJson(String spriteJsonUrl, String filePath,
      Function(double) onProgress) async {
    return await getOrDownloadFile(spriteJsonUrl, filePath, onProgress);
  }

  /// Retrieves (or downloads if available) the sprite image file.
  static Future<File?> getSpriteImage(String spriteImageUrl, String filePath,
      Function(double) onProgress) async {
    return await getOrDownloadFile(spriteImageUrl, filePath, onProgress);
  }

  /// Removes the offline MBTiles package at [filePath] if it exists.
  static Future<void> removeOfflinePackage(String filePath) async {
    final file = File(filePath);
    if (await file.exists()) {
      await file.delete();
    }
  }
}
