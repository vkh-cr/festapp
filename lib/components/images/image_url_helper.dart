/// Helper for transforming image URLs to use on-the-fly Worker transforms.
///
/// Appends query parameters (?w=&f=&q=) that the image Worker uses
/// to resize and re-encode images via the Cloudflare Images binding.
class ImageUrlHelper {
  /// Standard thumbnail widths to maximize CDN cache hits.
  static const int thumbnailWidth = 300;
  static const int mediumWidth = 600;
  static const int fullWidth = 1200;

  /// Hosts that support Worker image transforms.
  static const String _imageHost = 'img.festapp.net';
  static const String _workerHost = 'festapp-image-worker.festapp.workers.dev';

  /// Transforms an img.festapp.net URL to include resize query parameters.
  ///
  /// Returns the original URL unchanged if it's not an img.festapp.net URL
  /// or if parsing fails.
  ///
  /// [width] defaults to [thumbnailWidth] (300px).
  /// [format] defaults to 'auto' for automatic WebP/AVIF negotiation.
  /// [quality] is optional (1-100); omitted if null.
  static String transformImageUrl(
    String originalUrl, {
    int width = thumbnailWidth,
    String format = 'auto',
    int? quality,
  }) {
    try {
      final uri = Uri.parse(originalUrl);
      if (!uri.host.contains(_imageHost) && !uri.host.contains(_workerHost)) {
        return originalUrl;
      }

      final queryParams = <String, String>{
        'w': width.toString(),
        'f': format,
        if (quality != null) 'q': quality.toString(),
      };

      return uri.replace(queryParameters: queryParams).toString();
    } catch (_) {
      return originalUrl;
    }
  }
}
