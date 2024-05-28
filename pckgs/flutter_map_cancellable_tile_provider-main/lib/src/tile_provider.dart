import 'dart:async';
import 'dart:collection';

import 'package:dio/dio.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_map/flutter_map.dart';

import 'image_provider.dart';

/// [TileProvider] that fetches tiles from the network, with the capability to
/// cancel unnecessary HTTP tile requests
///
/// {@template fmctp-desc}
///
/// Tiles that are removed/pruned before they are fully loaded do not need to
/// complete (down)loading, and therefore do not need to complete the HTTP
/// interaction. Cancelling these unnecessary tile requests early could:
///
/// - Reduce tile loading durations (particularly on the web)
/// - Reduce users' (cellular) data and cache space consumption
/// - Reduce costly tile requests to tile servers*
/// - Improve performance by reducing CPU and IO work
///
/// This provider uses '[dio](https://pub.dev/packages/dio)', which supports
/// aborting unnecessary HTTP requests in-flight, after they have already been
/// sent.
///
/// Although HTTP request abortion is supported on all platforms, it is
/// especially useful on the web - and therefore recommended for web apps. This
/// is because the web platform has a limited number of simulatous HTTP requests,
/// and so closing the requests allows new requests to be made for new tiles.
/// On other platforms, the other benefits may still occur, but may not be as
/// visible as on the web.
///
/// Once HTTP request abortion is
/// [added to Dart's 'native' 'http' package (which already has a PR opened)](https://github.com/dart-lang/http/issues/424),
/// `NetworkTileProvider` will be updated to take advantage of it, replacing and
/// deprecating this provider. This tile provider is currently a seperate package
/// and not the default due to the reliance on the additional Dio dependency.
///
/// ---
///
/// On the web, the 'User-Agent' header cannot be changed as specified in
/// [TileLayer.tileProvider]'s documentation, due to a Dart/browser limitation.
///
/// The [silenceExceptions] argument controls whether to ignore exceptions and
/// errors that occur whilst fetching tiles over the network, and just return a
/// transparent tile.
/// {@endtemplate}
base class CancellableNetworkTileProvider extends TileProvider {
  /// Create a [CancellableNetworkTileProvider] to fetch tiles from the network,
  /// with cancellation support
  ///
  /// {@macro fmctp-desc}
  CancellableNetworkTileProvider({
    super.headers,
    Dio? dioClient,
    this.silenceExceptions = false,
  }) : _dioClient = dioClient ?? Dio();

  /// Whether to ignore exceptions and errors that occur whilst fetching tiles
  /// over the network, and just return a transparent tile
  final bool silenceExceptions;

  /// Long living client used to make all tile requests by [CancellableNetworkImageProvider]
  /// for the duration that this provider is alive
  final Dio _dioClient;

  /// Each [Completer] is completed once the corresponding tile has finished
  /// loading
  ///
  /// Used to avoid disposing of [_dioClient] whilst HTTP requests are still
  /// underway.
  ///
  /// Does not include tiles loaded from session cache.
  final _tilesInProgress = HashMap<TileCoordinates, Completer<void>>();

  @override
  bool get supportsCancelLoading => true;

  @override
  ImageProvider getImageWithCancelLoadingSupport(
    TileCoordinates coordinates,
    TileLayer options,
    Future<void> cancelLoading,
  ) =>
      CancellableNetworkImageProvider(
        url: getTileUrl(coordinates, options),
        fallbackUrl: getTileFallbackUrl(coordinates, options),
        headers: headers,
        dioClient: _dioClient,
        cancelLoading: cancelLoading,
        silenceExceptions: silenceExceptions,
        startedLoading: () => _tilesInProgress[coordinates] = Completer(),
        finishedLoadingBytes: () {
          _tilesInProgress[coordinates]?.complete();
          _tilesInProgress.remove(coordinates);
        },
      );

  @override
  Future<void> dispose() async {
    if (_tilesInProgress.isNotEmpty) {
      await Future.wait(_tilesInProgress.values.map((c) => c.future));
    }
    _dioClient.close();
    super.dispose();
  }
}
