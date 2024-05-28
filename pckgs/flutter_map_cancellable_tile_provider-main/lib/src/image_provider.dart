import 'dart:async';
import 'dart:ui';

import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:meta/meta.dart';

@internal
@visibleForTesting
class CancellableNetworkImageProvider
    extends ImageProvider<CancellableNetworkImageProvider> {
  final String url;
  final String? fallbackUrl;
  final Map<String, String> headers;
  final Dio dioClient;
  final Future<void> cancelLoading;
  final bool silenceExceptions;
  final void Function() startedLoading;
  final void Function() finishedLoadingBytes;

  const CancellableNetworkImageProvider({
    required this.url,
    required this.fallbackUrl,
    required this.headers,
    required this.dioClient,
    required this.cancelLoading,
    required this.silenceExceptions,
    required this.startedLoading,
    required this.finishedLoadingBytes,
  });

  @override
  ImageStreamCompleter loadImage(
    CancellableNetworkImageProvider key,
    ImageDecoderCallback decode,
  ) =>
      MultiFrameImageStreamCompleter(
        codec: _load(key, decode),
        scale: 1,
        debugLabel: url,
        informationCollector: () => [
          DiagnosticsProperty('URL', url),
          DiagnosticsProperty('Fallback URL', fallbackUrl),
          DiagnosticsProperty('Current provider', key),
        ],
      );

  Future<Codec> _load(
    CancellableNetworkImageProvider key,
    ImageDecoderCallback decode, {
    bool useFallback = false,
  }) {
    startedLoading();

    final cancelToken = CancelToken();
    unawaited(cancelLoading.then((_) => cancelToken.cancel()));

    return dioClient
        .getUri<Uint8List>(
          Uri.parse(useFallback ? fallbackUrl ?? '' : url),
          cancelToken: cancelToken,
          options: Options(headers: headers, responseType: ResponseType.bytes),
        )
        .whenComplete(finishedLoadingBytes)
        .then((response) => ImmutableBuffer.fromUint8List(response.data!))
        .then(decode)
        .onError<Exception>((err, stack) {
      scheduleMicrotask(() => PaintingBinding.instance.imageCache.evict(key));
      if (err is DioException && CancelToken.isCancel(err)) {
        return ImmutableBuffer.fromUint8List(TileProvider.transparentImage)
            .then(decode);
      }
      if (useFallback || fallbackUrl == null) {
        if (!silenceExceptions) throw err;
        return ImmutableBuffer.fromUint8List(TileProvider.transparentImage)
            .then(decode);
      }
      return _load(key, decode, useFallback: true);
    });
  }

  @override
  SynchronousFuture<CancellableNetworkImageProvider> obtainKey(
    ImageConfiguration configuration,
  ) =>
      SynchronousFuture(this);

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is CancellableNetworkImageProvider &&
          fallbackUrl == null &&
          url == other.url);

  @override
  int get hashCode =>
      Object.hashAll([url, if (fallbackUrl != null) fallbackUrl]);
}
