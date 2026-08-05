import 'dart:convert';
import 'dart:io';

import 'package:convert/convert.dart';
import 'package:crypto/crypto.dart';
import 'package:flutter/foundation.dart';
import 'package:fstapp/components/map/offline_map_bundle_manifest.dart';
import 'package:http/http.dart' as http;

typedef OfflineMapAssetUriResolver = Uri Function(
  OfflineMapBundleAsset asset,
);

class OfflineMapBundleProgress {
  const OfflineMapBundleProgress(this.downloadedBytes, this.totalBytes);

  final int downloadedBytes;
  final int totalBytes;

  double get fraction => totalBytes == 0 ? 1 : downloadedBytes / totalBytes;
}

class OfflineMapBundleInstallation {
  const OfflineMapBundleInstallation._({
    required this.directory,
    required this.manifest,
  });

  final Directory directory;
  final OfflineMapBundleManifest manifest;
}

class OfflineMapBundleManager {
  OfflineMapBundleManager({
    required this.rootDirectory,
    http.Client? client,
    this.assetUriResolver,
    this.debugAllowInsecureHttp = false,
  }) : _client = client ?? http.Client() {
    if (debugAllowInsecureHttp && !kDebugMode) {
      throw StateError('Insecure map transport is debug-only.');
    }
  }

  static const _readyFileName = '.ready.json';
  static const _manifestFileName = 'manifest.json';
  static const _maximumManifestBytes = 2 * 1024 * 1024;
  static const _parallelDownloads = 6;

  final Directory rootDirectory;
  final http.Client _client;
  final OfflineMapAssetUriResolver? assetUriResolver;
  final bool debugAllowInsecureHttp;

  Future<OfflineMapBundleInstallation> install(
    Uri manifestUri, {
    VoidCallback? onDownloadRequired,
    void Function(OfflineMapBundleProgress progress)? onProgress,
  }) =>
      _install(
        manifestUri,
        onDownloadRequired: onDownloadRequired,
        onProgress: onProgress,
        useReadyCache: true,
      );

  Future<OfflineMapBundleInstallation> update(
    Uri manifestUri, {
    VoidCallback? onDownloadRequired,
    void Function(OfflineMapBundleProgress progress)? onProgress,
  }) =>
      _install(
        manifestUri,
        onDownloadRequired: onDownloadRequired,
        onProgress: onProgress,
        useReadyCache: false,
      );

  /// Opens and verifies an installed bundle without issuing a network request.
  Future<OfflineMapBundleInstallation?> openCached(Uri manifestUri) async {
    _requireAllowedUri(manifestUri);
    return _openCachedForManifestUri(manifestUri);
  }

  Future<OfflineMapBundleInstallation> _install(
    Uri manifestUri, {
    required bool useReadyCache,
    VoidCallback? onDownloadRequired,
    void Function(OfflineMapBundleProgress progress)? onProgress,
  }) async {
    _requireAllowedUri(manifestUri);
    if (useReadyCache) {
      final cached = await _openCachedForManifestUri(manifestUri);
      if (cached != null) return cached;
    }
    final manifestBytes = await _downloadManifest(manifestUri);
    final manifestHash = sha256.convert(manifestBytes).toString();
    final decoded = jsonDecode(utf8.decode(manifestBytes));
    final manifest = OfflineMapBundleManifest.parse(
      Map<String, dynamic>.from(decoded as Map),
    );
    final sourceRoot = Directory(
      '${rootDirectory.path}/${manifest.sourceName}',
    );
    final target = Directory(
      '${sourceRoot.path}/${manifest.artifactVersion}',
    );
    final staging = Directory('${target.path}.part');

    final ready = await _openReady(target, manifest, manifestHash);
    if (ready != null) {
      await _rememberManifestUri(manifestUri, ready);
      return ready;
    }
    onDownloadRequired?.call();

    if (await staging.exists()) await staging.delete(recursive: true);
    await staging.create(recursive: true);
    var downloaded = 0;
    final total =
        manifest.assets.fold<int>(0, (sum, asset) => sum + asset.bytes);
    try {
      await File('${staging.path}/$_manifestFileName').writeAsBytes(
        manifestBytes,
        flush: true,
      );
      var nextAsset = 0;
      Future<void> downloadWorker() async {
        while (nextAsset < manifest.assets.length) {
          final asset = manifest.assets[nextAsset++];
          final destination = File('${staging.path}/${asset.path}');
          await destination.parent.create(recursive: true);
          final uri = assetUriResolver?.call(asset) ?? asset.url;
          _requireAllowedUri(uri);
          final received = await _downloadAsset(
            uri: uri,
            destination: destination,
            asset: asset,
            onChunk: (count) {
              downloaded += count;
              onProgress?.call(OfflineMapBundleProgress(downloaded, total));
            },
          );
          if (received != asset.bytes) {
            throw OfflineMapBundleException('Size mismatch: ${asset.path}.');
          }
        }
      }

      await Future.wait(List.generate(
        _parallelDownloads.clamp(1, manifest.assets.length),
        (_) => downloadWorker(),
      ));
      await File('${staging.path}/$_readyFileName').writeAsString(
        jsonEncode({'schema': 1, 'manifest_sha256': manifestHash}),
        flush: true,
      );
      await target.parent.create(recursive: true);
      if (await target.exists()) {
        throw OfflineMapBundleException(
          'Immutable bundle version already exists but is not ready.',
        );
      }
      await staging.rename(target.path);
      final installation = OfflineMapBundleInstallation._(
        directory: target,
        manifest: manifest,
      );
      await _rememberManifestUri(manifestUri, installation);
      return installation;
    } catch (_) {
      if (await staging.exists()) await staging.delete(recursive: true);
      rethrow;
    }
  }

  Future<OfflineMapBundleInstallation> verifyExisting(
    Directory directory,
  ) async {
    final decoded = jsonDecode(
      await File('${directory.path}/$_manifestFileName').readAsString(),
    );
    final manifest = OfflineMapBundleManifest.parse(
      Map<String, dynamic>.from(decoded as Map),
    );
    await manifest.verifyBundle(directory);
    return OfflineMapBundleInstallation._(
      directory: directory,
      manifest: manifest,
    );
  }

  Future<OfflineMapBundleInstallation?> _openReady(
    Directory target,
    OfflineMapBundleManifest manifest,
    String manifestHash,
  ) async {
    final readyFile = File('${target.path}/$_readyFileName');
    if (!await readyFile.exists()) return null;
    final ready = jsonDecode(await readyFile.readAsString()) as Map;
    if (ready['schema'] != 1 || ready['manifest_sha256'] != manifestHash) {
      throw OfflineMapBundleException(
        'Immutable bundle version conflicts with the downloaded manifest.',
      );
    }
    await manifest.verifyBundle(target);
    return OfflineMapBundleInstallation._(
      directory: target,
      manifest: manifest,
    );
  }

  Future<OfflineMapBundleInstallation?> _openCachedForManifestUri(
    Uri manifestUri,
  ) async {
    final pointer = File(_pointerPath(manifestUri));
    if (!await pointer.exists()) return null;
    final pointerJson = jsonDecode(await pointer.readAsString()) as Map;
    final sourceName = pointerJson['source_name'];
    final artifactVersion = pointerJson['artifact_version'];
    if (sourceName is! String ||
        artifactVersion is! String ||
        !_isSafeSegment(sourceName) ||
        !_isSafeSegment(artifactVersion)) {
      throw OfflineMapBundleException('Cached bundle pointer is invalid.');
    }
    final target = Directory(
      '${rootDirectory.path}/$sourceName/$artifactVersion',
    );
    final manifestBytes = await File(
      '${target.path}/$_manifestFileName',
    ).readAsBytes();
    final decoded = jsonDecode(utf8.decode(manifestBytes));
    final manifest = OfflineMapBundleManifest.parse(
      Map<String, dynamic>.from(decoded as Map),
    );
    if (manifest.sourceName != sourceName ||
        manifest.artifactVersion != artifactVersion) {
      throw OfflineMapBundleException('Cached bundle pointer is invalid.');
    }
    return _openReady(
      target,
      manifest,
      sha256.convert(manifestBytes).toString(),
    );
  }

  Future<void> _rememberManifestUri(
    Uri manifestUri,
    OfflineMapBundleInstallation installation,
  ) async {
    final pointer = File(_pointerPath(manifestUri));
    await pointer.parent.create(recursive: true);
    final part = File('${pointer.path}.part');
    await part.writeAsString(
      jsonEncode({
        'schema': 1,
        'source_name': installation.manifest.sourceName,
        'artifact_version': installation.manifest.artifactVersion,
      }),
      flush: true,
    );
    if (await pointer.exists()) await pointer.delete();
    await part.rename(pointer.path);
  }

  String _pointerPath(Uri manifestUri) =>
      '${rootDirectory.path}/.manifest-pointers/'
      '${sha256.convert(utf8.encode(manifestUri.toString()))}.json';

  bool _isSafeSegment(String value) =>
      value.isNotEmpty &&
      value != '.' &&
      value != '..' &&
      !value.contains('/') &&
      !value.contains(r'\');

  Future<List<int>> _downloadManifest(Uri uri) async {
    final response = await _client.send(http.Request('GET', uri));
    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw HttpException('Manifest download failed: ${response.statusCode}');
    }
    final bytes = <int>[];
    await for (final chunk in response.stream) {
      bytes.addAll(chunk);
      if (bytes.length > _maximumManifestBytes) {
        throw OfflineMapBundleException('Manifest is too large.');
      }
    }
    return bytes;
  }

  Future<int> _downloadAsset({
    required Uri uri,
    required File destination,
    required OfflineMapBundleAsset asset,
    required void Function(int bytes) onChunk,
  }) async {
    final response = await _client.send(http.Request('GET', uri));
    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw HttpException(
        'Asset download failed (${response.statusCode}): ${asset.path}',
      );
    }
    final part = File('${destination.path}.part');
    final output = part.openWrite();
    final digestOutput = AccumulatorSink<Digest>();
    final digestInput = sha256.startChunkedConversion(digestOutput);
    var received = 0;
    try {
      await for (final chunk in response.stream) {
        output.add(chunk);
        digestInput.add(chunk);
        received += chunk.length;
        onChunk(chunk.length);
      }
      await output.flush();
      await output.close();
      digestInput.close();
      if (digestOutput.events.single.toString() != asset.sha256) {
        throw OfflineMapBundleException('Checksum mismatch: ${asset.path}.');
      }
      if (received != asset.bytes) {
        throw OfflineMapBundleException('Size mismatch: ${asset.path}.');
      }
      await part.rename(destination.path);
      return received;
    } catch (_) {
      await output.close();
      if (await part.exists()) await part.delete();
      rethrow;
    }
  }

  void _requireAllowedUri(Uri uri) {
    final secure = uri.scheme == 'https' && uri.hasAuthority;
    final debugHttp =
        debugAllowInsecureHttp && uri.scheme == 'http' && uri.hasAuthority;
    if (!secure && !debugHttp) {
      throw OfflineMapBundleException('Map URL must use HTTPS: $uri');
    }
  }
}
