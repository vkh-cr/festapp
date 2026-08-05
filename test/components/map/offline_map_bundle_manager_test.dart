import 'dart:convert';
import 'dart:io';

import 'package:crypto/crypto.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/map/offline_map_bundle_manager.dart';
import 'package:fstapp/components/map/offline_map_bundle_manifest.dart';
import 'package:http/http.dart' as http;
import 'package:http/testing.dart';

void main() {
  test('offline cache lookup never falls through to the network', () async {
    final root = await Directory.systemTemp.createTemp('bundle-offline-test');
    addTearDown(() => root.delete(recursive: true));
    var requests = 0;
    final manager = OfflineMapBundleManager(
      rootDirectory: root,
      client: MockClient((request) async {
        requests++;
        return http.Response('unexpected', 500);
      }),
    );

    final cached = await manager.openCached(
      Uri.parse('https://example.test/manifest.json'),
    );

    expect(cached, isNull);
    expect(requests, 0);
  });

  test('downloads, verifies, publishes, and reuses a ready bundle', () async {
    final root = await Directory.systemTemp.createTemp('bundle-manager-test');
    addTearDown(() => root.delete(recursive: true));
    final fixture = _fixture('v2');
    var requests = 0;
    final manager = OfflineMapBundleManager(
      rootDirectory: root,
      client: MockClient((request) async {
        requests++;
        if (request.url.path.endsWith('manifest.json')) {
          return http.Response(jsonEncode(fixture.manifest), 200);
        }
        final bytes = fixture.assets[request.url.path.substring(1)];
        return bytes == null
            ? http.Response('missing', 404)
            : http.Response.bytes(bytes, 200);
      }),
    );

    final progress = <double>[];
    var downloadRequired = 0;
    final first = await manager.install(
      Uri.parse('https://example.test/manifest.json'),
      onDownloadRequired: () => downloadRequired++,
      onProgress: (value) => progress.add(value.fraction),
    );
    expect(File('${first.directory.path}/.ready.json').existsSync(), isTrue);
    expect(progress.last, 1);
    expect(downloadRequired, 1);
    final firstRequestCount = requests;

    final reusedProgress = <double>[];
    var reusedDownloadRequired = 0;
    final reused = await manager.install(
      Uri.parse('https://example.test/manifest.json'),
      onDownloadRequired: () => reusedDownloadRequired++,
      onProgress: (value) => reusedProgress.add(value.fraction),
    );
    expect(reused.directory.path, first.directory.path);
    expect(requests, firstRequestCount, reason: 'Ready cache is fully local.');
    expect(
      reusedProgress,
      isEmpty,
      reason: 'A cache hit must not enter visual download progress.',
    );
    expect(reusedDownloadRequired, 0);
  });

  test('failed download removes staging and preserves an older ready version',
      () async {
    final root = await Directory.systemTemp.createTemp('bundle-manager-fail');
    addTearDown(() => root.delete(recursive: true));
    final v1 = _fixture('v1');
    var active = v1;
    var failPmtiles = false;
    final manager = OfflineMapBundleManager(
      rootDirectory: root,
      client: MockClient((request) async {
        if (request.url.path.endsWith('manifest.json')) {
          return http.Response(jsonEncode(active.manifest), 200);
        }
        final path = request.url.path.substring(1);
        if (failPmtiles && path.endsWith('.pmtiles')) {
          return http.Response('interrupted', 503);
        }
        return http.Response.bytes(active.assets[path]!, 200);
      }),
    );
    final installedV1 = await manager.install(
      Uri.parse('https://example.test/manifest.json'),
    );

    active = _fixture('v2');
    failPmtiles = true;
    await expectLater(
      manager.update(Uri.parse('https://example.test/manifest.json')),
      throwsA(isA<HttpException>()),
    );
    expect(
        File('${installedV1.directory.path}/.ready.json').existsSync(), isTrue);
    expect(
      Directory('${root.path}/test-map/v2.part').existsSync(),
      isFalse,
    );
  });

  test('ready cache rejects same-size asset corruption', () async {
    final root = await Directory.systemTemp.createTemp('bundle-corrupt-test');
    addTearDown(() => root.delete(recursive: true));
    final fixture = _fixture('v2');
    final manager = OfflineMapBundleManager(
      rootDirectory: root,
      client: MockClient((request) async {
        if (request.url.path.endsWith('manifest.json')) {
          return http.Response(jsonEncode(fixture.manifest), 200);
        }
        return http.Response.bytes(
          fixture.assets[request.url.path.substring(1)]!,
          200,
        );
      }),
    );
    final manifestUri = Uri.parse('https://example.test/manifest.json');
    final installation = await manager.install(manifestUri);
    await File('${installation.directory.path}/map.pmtiles')
        .writeAsBytes([3, 2, 1], flush: true);

    await expectLater(
      manager.install(manifestUri),
      throwsA(
        isA<OfflineMapBundleException>().having(
          (error) => error.message,
          'message',
          contains('Checksum mismatch'),
        ),
      ),
    );
  });
}

class _BundleFixture {
  const _BundleFixture(this.manifest, this.assets);

  final Map<String, Object?> manifest;
  final Map<String, List<int>> assets;
}

_BundleFixture _fixture(String version) {
  final assets = <String, List<int>>{
    'style.json': utf8.encode('{"version":8}'),
    'map.pmtiles': [1, 2, 3],
    'map.mbtiles': [4, 5, 6],
    'sprites/sprites.json': utf8.encode('{}'),
    'sprites/sprites.png': [7],
    'sprites/sprites@2x.json': utf8.encode('{}'),
    'sprites/sprites@2x.png': [8],
    'glyphs/noto_sans_regular/0-255.pbf': [9],
    'glyphs/noto_sans_bold/0-255.pbf': [10],
  };
  const roles = {
    'style.json': 'style',
    'map.pmtiles': 'pmtiles',
    'map.mbtiles': 'mbtiles',
    'sprites/sprites.json': 'sprite_json_1x',
    'sprites/sprites.png': 'sprite_png_1x',
    'sprites/sprites@2x.json': 'sprite_json_2x',
    'sprites/sprites@2x.png': 'sprite_png_2x',
    'glyphs/noto_sans_regular/0-255.pbf': 'glyph',
    'glyphs/noto_sans_bold/0-255.pbf': 'glyph',
  };
  return _BundleFixture({
    'schema_version': 2,
    'artifact_version': version,
    'source_name': 'test-map',
    'base_url': 'https://example.test/',
    'assets': assets.entries
        .map((entry) => {
              'role': roles[entry.key],
              'path': entry.key,
              'url': 'https://example.test/${entry.key}',
              'bytes': entry.value.length,
              'sha256': sha256.convert(entry.value).toString(),
            })
        .toList(),
  }, assets);
}
