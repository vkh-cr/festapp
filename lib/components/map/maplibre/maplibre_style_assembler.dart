import 'dart:convert';
import 'dart:io';

import 'package:fstapp/components/map/offline_map_bundle_manager.dart';
import 'package:fstapp/components/map/offline_map_bundle_manifest.dart';
import 'package:fstapp/components/map/maplibre/maplibre_style_optimizer.dart';

class MapLibreStyleAssembler {
  static Future<String> assemble({
    required String sourceStyleJson,
    required OfflineMapBundleInstallation installation,
  }) async {
    final manifest = installation.manifest;
    final bundleDirectory = installation.directory;

    final decoded = jsonDecode(sourceStyleJson);
    if (decoded is! Map) {
      throw OfflineMapBundleException('Style root must be an object.');
    }
    final style = MapLibreStyleOptimizer.optimize(
      Map<String, dynamic>.from(decoded),
      sourceName: manifest.sourceName,
    );
    final rawSources = style['sources'];
    if (rawSources is! Map ||
        rawSources.length != 1 ||
        !rawSources.containsKey(manifest.sourceName)) {
      throw OfflineMapBundleException(
        'Style must contain only the declared vector source.',
      );
    }
    final source =
        Map<String, dynamic>.from(rawSources[manifest.sourceName] as Map);
    if (source['type'] != 'vector') {
      throw OfflineMapBundleException('Offline PMTiles source must be vector.');
    }

    final pmtilesPath = _absoluteAssetPath(
      bundleDirectory,
      manifest.assetFor(OfflineMapAssetRole.pmtiles).path,
    );
    source
      ..remove('tiles')
      ..['url'] = 'pmtiles://${Uri.file(pmtilesPath)}';
    style['sources'] = <String, dynamic>{manifest.sourceName: source};

    final spriteJson = manifest.assetFor(OfflineMapAssetRole.spriteJson1x);
    final spriteBase = _absoluteAssetPath(bundleDirectory, spriteJson.path)
        .replaceFirst(RegExp(r'\.json$'), '');
    style['sprite'] = Uri.file(spriteBase).toString();
    final glyphsDirectory = Uri.directory(
      '${bundleDirectory.absolute.path}/glyphs',
    ).toString();
    style['glyphs'] = '$glyphsDirectory{fontstack}/{range}.pbf';

    _requireLocalUri(style['sprite'], 'sprite');
    _requireLocalUri(style['glyphs'], 'glyphs');
    _requireLocalUri(source['url'], 'source');
    return jsonEncode(style);
  }

  static String _absoluteAssetPath(Directory root, String relativePath) =>
      '${root.absolute.path}/$relativePath';

  static void _requireLocalUri(Object? value, String field) {
    if (value is! String ||
        !(value.startsWith('file:///') ||
            value.startsWith('pmtiles://file:///'))) {
      throw OfflineMapBundleException('$field must resolve inside the bundle.');
    }
  }
}
