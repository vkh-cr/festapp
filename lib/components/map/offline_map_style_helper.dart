import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:latlong2/latlong.dart';
import 'package:vector_map_tiles/vector_map_tiles.dart';
import 'package:vector_tile_renderer/vector_tile_renderer.dart';
import 'package:path_provider/path_provider.dart';

import 'offline_map_helper.dart';

class Style {
  final String? name;
  final Theme theme;
  final TileProviders providers;
  final SpriteStyle? sprites;
  final LatLng? center;
  final double? zoom;

  Style({
    this.name,
    required this.theme,
    required this.providers,
    this.sprites,
    this.center,
    this.zoom,
  });
}

class StyleReader {
  final String uri;
  final String? apiKey;
  final Logger logger;
  final Map<String, String>? httpHeaders;

  StyleReader({
    required this.uri,
    this.apiKey,
    Logger? logger,
    this.httpHeaders,
  }) : logger = logger ?? const Logger.noop();

  Future<Style> read() async {
    final uriMapper = StyleUriMapper(key: apiKey);
    final url = uriMapper.map(uri);
    // Use our cached-get helper instead of a direct HTTP request.
    final styleText = await _cachedGet(url);
    final style = await compute(jsonDecode, styleText);
    if (style is! Map<String, dynamic>) {
      throw _invalidStyle(url);
    }
    final sources = style['sources'];
    if (sources is! Map) {
      throw _invalidStyle(url);
    }
    final providerByName = await _readProviderByName(sources);
    final name = style['name'] as String?;

    final center = style['center'];
    LatLng? centerPoint;
    if (center is List && center.length == 2) {
      centerPoint =
          LatLng((center[1] as num).toDouble(), (center[0] as num).toDouble());
    }
    double? zoom = (style['zoom'] as num?)?.toDouble();
    if (zoom != null && zoom < 2) {
      zoom = null;
      centerPoint = null;
    }
    final spriteUri = style['sprite'];
    SpriteStyle? sprites;
    if (spriteUri is String && spriteUri.trim().isNotEmpty) {
      final spriteUris = uriMapper.mapSprite(uri, spriteUri);
      for (final spriteUri in spriteUris) {
        dynamic spritesJson;
        try {
          // Use the cached-get helper to load the sprite JSON.
          final spritesJsonText = await _cachedGet(spriteUri.json);
          spritesJson = await compute(jsonDecode, spritesJsonText);
        } catch (e) {
          logger.log(() => 'error reading sprite uri: ${spriteUri.json}');
          continue;
        }
        sprites = SpriteStyle(
          atlasProvider: () async {
            // Use the cached binary loader for the sprite image.
            return await _cachedLoadBinary(spriteUri.image);
          },
          index: SpriteIndexReader(logger: logger).read(spritesJson),
        );
        break;
      }
    }
    return Style(
      theme: ThemeReader(logger: logger).read(style),
      providers: TileProviders(providerByName),
      sprites: sprites,
      name: name,
      center: centerPoint,
      zoom: zoom,
    );
  }

  Future<Map<String, VectorTileProvider>> _readProviderByName(
      Map sources) async {
    final providers = <String, VectorTileProvider>{};
    final sourceEntries = sources.entries.toList();
    for (final entry in sourceEntries) {
      final sourceType = entry.value['type'];
      var type = TileProviderType.values
          .where((e) => e.name.replaceAll('_', '-') == sourceType)
          .firstOrNull;
      if (type == null) continue;
      dynamic source;
      var entryUrl = entry.value['url'] as String?;
      if (entryUrl != null) {
        final sourceUrl = StyleUriMapper(key: apiKey).mapSource(uri, entryUrl);
        // Use the cached-get helper to load source JSON.
        final sourceText = await _cachedGet(sourceUrl);
        source = await compute(jsonDecode, sourceText);
        if (source is! Map) {
          throw _invalidStyle(sourceUrl);
        }
      } else {
        source = entry.value;
      }
      final entryTiles = source['tiles'];
      final maxzoom = source['maxzoom'] as int? ?? 14;
      final minzoom = source['minzoom'] as int? ?? 1;
      if (entryTiles is List && entryTiles.isNotEmpty) {
        final tileUri = entryTiles[0] as String;
        final tileUrl = StyleUriMapper(key: apiKey).mapTiles(tileUri);
        providers[entry.key] = NetworkVectorTileProvider(
          type: type,
          urlTemplate: tileUrl,
          maximumZoom: maxzoom,
          minimumZoom: minzoom,
          httpHeaders: httpHeaders,
        );
      }
    }
    if (providers.isEmpty) {
      throw 'Unexpected response';
    }
    return providers;
  }
}

String _invalidStyle(String url) =>
    'Uri does not appear to be a valid style: $url';

/// Returns the cached file contents as a String.
/// Computes a file path based on the URL and attempts to get the file via OfflineMapHelper.
/// If no file is available (and thus no connectivity), an exception is thrown.
Future<String> _cachedGet(String url) async {
  final directory = await getApplicationDocumentsDirectory();
  String fileName = Uri.parse(url).pathSegments.last;
  String filePath = "${directory.path}/$fileName";
  final file = await OfflineMapHelper.getOrDownloadFile(url, filePath, (progress) {});
  if (file != null) {
    return await file.readAsString();
  }
  throw Exception("Failed to load $url");
}

/// Returns the cached binary file as Uint8List.
/// Computes a file path based on the URL and attempts to get the file via OfflineMapHelper.
Future<Uint8List> _cachedLoadBinary(String url) async {
  final directory = await getApplicationDocumentsDirectory();
  String fileName = Uri.parse(url).pathSegments.last;
  String filePath = "${directory.path}/$fileName";
  final file = await OfflineMapHelper.getOrDownloadFile(url, filePath, (progress) {});
  if (file != null) {
    return await file.readAsBytes();
  }
  throw Exception("Failed to load binary from $url");
}

class StyleUriMapper {
  final String? _key;

  StyleUriMapper({String? key}) : _key = key;

  String map(String uri) {
    var mapped = uri;
    mapped = _replaceKey(mapped, _key);
    return mapped;
  }

  String mapSource(String styleUri, String sourceUri) {
    var mapped = sourceUri;
    mapped = _replaceKey(mapped, _key);
    return mapped;
  }

  List<SpriteUri> mapSprite(String styleUri, String spriteUri) {
    final parameters = Uri.parse(map(styleUri)).queryParameters;
    final uris = <SpriteUri>[];
    uris.add(_toSpriteUri(spriteUri, parameters, '@2x'));
    uris.add(_toSpriteUri(spriteUri, parameters, ''));
    return uris;
  }

  String mapTiles(String tileUri) {
    return _replaceKey(tileUri, _key);
  }

  SpriteUri _toSpriteUri(
      String spriteUri, Map<String, String> parameters, String suffix) {
    return SpriteUri(
        json:
        '$spriteUri$suffix.json?secure&${parameters.entries.map((e) => '${e.key}=${Uri.encodeQueryComponent(e.value)}').join('&')}',
        image:
        '$spriteUri$suffix.png?secure&${parameters.entries.map((e) => '${e.key}=${Uri.encodeQueryComponent(e.value)}').join('&')}');
  }
}

String _replaceKey(String url, String? key) {
  return url.replaceAll(
      RegExp(RegExp.escape(_keyToken)), Uri.encodeQueryComponent(key ?? ''));
}

const _keyToken = '{key}';

class SpriteUri {
  final String json;
  final String image;

  SpriteUri({required this.json, required this.image});
}
