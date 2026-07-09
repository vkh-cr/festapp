import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/images/image_url_helper.dart';

/// A circular speaker/counselor avatar. Falls back to a person icon when the
/// speaker has no image. Kept small and self-contained so it can be reused by
/// the event-page medallion and the counselor cards, and pumped directly in
/// widget tests.
class SpeakerAvatar extends StatelessWidget {
  final String? imageUrl;
  final double radius;

  const SpeakerAvatar({super.key, this.imageUrl, this.radius = 24});

  @override
  Widget build(BuildContext context) {
    final url = imageUrl;
    if (url == null || url.isEmpty) {
      return CircleAvatar(
        radius: radius,
        backgroundColor: Theme.of(context).colorScheme.surfaceContainerHighest,
        child: Icon(Icons.person, size: radius * 1.1),
      );
    }
    return CircleAvatar(
      radius: radius,
      backgroundColor: Theme.of(context).colorScheme.surfaceContainerHighest,
      backgroundImage: CachedNetworkImageProvider(
        ImageUrlHelper.transformImageUrl(url,
            width: ImageUrlHelper.thumbnailWidth, quality: 80),
      ),
    );
  }
}
