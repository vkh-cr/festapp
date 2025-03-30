import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:path_provider/path_provider.dart';
import 'package:vector_tile_renderer/vector_tile_renderer.dart';

class OfflineMapHelper {
  /// Returns the offline package file path based on the given URL.
  /// Deletes any old .mbtiles files that do not match the current file name.
  static Future<String> getOfflinePackagePath(String offlineMapPackageURL) async {
    final directory = await getApplicationDocumentsDirectory();
    String fileName = Uri.parse(offlineMapPackageURL).pathSegments.last;
    String filePath = "${directory.path}/$fileName";

    // Delete any old .mbtiles files that are not the current file.
    final dirList = directory.listSync();
    for (var entity in dirList) {
      if (entity is File && entity.path.endsWith(".mbtiles") && entity.path != filePath) {
        await entity.delete();
      }
    }
    return filePath;
  }

  /// Returns the offline style file path based on the given style URL.
  /// Deletes any old .json files that are not the current file.
  static Future<String> getOfflineStyleFilePath(String styleURL) async {
    final directory = await getApplicationDocumentsDirectory();
    String fileName = Uri.parse(styleURL).pathSegments.last;
    String filePath = "${directory.path}/$fileName";

    // Delete any old .json files that are not the current file.
    final dirList = directory.listSync();
    for (var entity in dirList) {
      if (entity is File && entity.path.endsWith(".json") && entity.path != filePath) {
        await entity.delete();
      }
    }
    return filePath;
  }

  /// Loads an offline map style from the given style URL.
  /// If the file does not exist locally, it downloads it first.
  static Future<dynamic> loadOfflineMapStyle(String styleURL) async {
    final filePath = await getOfflineStyleFilePath(styleURL);
    if (!(await File(filePath).exists())) {
      // Download style file if it does not exist.
      await downloadOfflineStyle(styleURL, filePath, (progress) {});
    }
    try {
      final fileContent = await File(filePath).readAsString();
      var vectorTileTheme = jsonDecode(fileContent) as Map<String, dynamic>;
      return ThemeReader().read(vectorTileTheme);
    } catch (e) {
      print("Error loading offline map style: $e");
    }
    return null;
  }

  /// Downloads the offline MBTiles package from the given URL to the specified file path.
  /// Calls [onProgress] with a progress value between 0.0 and 1.0.
  static Future<void> downloadOfflinePackage(
      String offlineMapPackageURL,
      String filePath,
      Function(double) onProgress) async {
    final url = offlineMapPackageURL;
    final request = await HttpClient().getUrl(Uri.parse(url));
    final response = await request.close();
    final contentLength = response.contentLength;
    final file = File(filePath);
    List<int> bytes = [];
    int downloaded = 0;
    await for (var data in response) {
      bytes.addAll(data);
      downloaded += data.length;
      onProgress(contentLength > 0 ? downloaded / contentLength : 0.0);
    }
    await file.writeAsBytes(bytes);
  }

  /// Downloads the offline style file from the given URL to the specified file path.
  /// Calls [onProgress] with a progress value between 0.0 and 1.0.
  static Future<void> downloadOfflineStyle(
      String styleURL,
      String filePath,
      Function(double) onProgress) async {
    final url = styleURL;
    final request = await HttpClient().getUrl(Uri.parse(url));
    final response = await request.close();
    final contentLength = response.contentLength;
    final file = File(filePath);
    List<int> bytes = [];
    int downloaded = 0;
    await for (var data in response) {
      bytes.addAll(data);
      downloaded += data.length;
      onProgress(contentLength > 0 ? downloaded / contentLength : 0.0);
    }
    await file.writeAsBytes(bytes);
  }

  /// Removes the offline MBTiles package at the given file path.
  static Future<void> removeOfflinePackage(String filePath) async {
    final file = File(filePath);
    if (await file.exists()) {
      await file.delete();
    }
  }
}
