import 'dart:async';
import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fwfh_cached_network_image/fwfh_cached_network_image.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter_cache_manager/flutter_cache_manager.dart';
import 'package:pinch_zoom_release_unzoom/pinch_zoom_release_unzoom.dart';
import 'package:youtube_player_flutter/youtube_player_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

/// Wraps any child and provides a scroll view that can be blocked
/// during two-finger pinch gestures.
class PinchScrollView extends StatefulWidget {
  /// Builder that receives callbacks to toggle scroll blocking.
  final Widget Function(VoidCallback onPinchStart, VoidCallback onPinchEnd)
  builder;

  const PinchScrollView({Key? key, required this.builder}) : super(key: key);

  @override
  State<PinchScrollView> createState() => _PinchScrollViewState();
}

class _PinchScrollViewState extends State<PinchScrollView> {
  bool blockScroll = false;
  final ScrollController controller = ScrollController();

  void _onPinchStart() => setState(() => blockScroll = true);
  void _onPinchEnd() => Future.delayed(
    PinchZoomReleaseUnzoomWidget.defaultResetDuration,
        () => setState(() => blockScroll = false),
  );

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      controller: controller,
      physics: blockScroll
          ? const NeverScrollableScrollPhysics()
          : const BouncingScrollPhysics(),
      child: widget.builder(_onPinchStart, _onPinchEnd),
    );
  }
}

/// Factory to enable cached network images in HtmlWidget
class MyWidgetFactory extends WidgetFactory with CachedNetworkImageFactory {}

class HtmlWithAppLinksWidget extends HtmlWidget {
  HtmlWithAppLinksWidget(
      this.context,
      super.html, {
        super.key,
        required ColumnMode renderMode,
        super.textStyle,
        super.customWidgetBuilder,
        super.customStylesBuilder,
      }) : super(factoryBuilder: () => MyWidgetFactory());

  final BuildContext context;

  @override
  FutureOr<bool> Function(String p1)? get onTapUrl => (url) {
    if (AppConfig.compatibleUrls()
        .where((u) => u.isNotEmpty)
        .any((u) => url.startsWith(u)) ||
        url.contains("localhost")) {
      final path = url.split('/#/').last;
      RouterService.navigate(context, path);
      return true;
    }
    super.onTapUrl?.call(url);
    return false;
  };

  @override
  void Function(ImageMetadata)? get onTapImage => (_) {};
}

class HtmlView extends StatefulWidget {
  final String html;
  final double? fontSize;
  final bool isSelectable;
  final Color? color;

  /// Callbacks provided by [PinchScrollView] to block/unblock scrolling
  final VoidCallback? twoFingersOn;
  final VoidCallback? twoFingersOff;

  HtmlView({
    Key? key,
    required this.html,
    this.fontSize = 18,
    this.isSelectable = false,
    this.color,
    this.twoFingersOn,
    this.twoFingersOff,
  }) : super(key: key);

  @override
  State<HtmlView> createState() => _HtmlViewState();
}

class _HtmlViewState extends State<HtmlView> {
  @override
  Widget build(BuildContext context) {
    final textColor = widget.color ?? ThemeConfig.defaultHtmlViewColor(context);
    final linkColor =
    colorToRgbString(ThemeConfig.htmlLinkColor(context));

    Widget content = HtmlWithAppLinksWidget(
      context,
      widget.html,
      renderMode: RenderMode.column,
      textStyle: TextStyle(
        fontSize: widget.fontSize,
        fontFamily: "Futura",
        color: textColor,
        inherit: false,
      ),
      customStylesBuilder: (element) {
        switch (element.localName) {
          case 'a':
            return {'color': linkColor};
          case 'li':
            if (element.attributes['data-list'] == 'bullet') {
              return {'list-style-type': 'disc'};
            }
            break;
        }
        return null;
      },
      customWidgetBuilder: (element) {
        // IMAGE HANDLING
        if (element.localName == 'img') {
          final src = element.attributes['src']!;
          Widget imageWidget;
          if (src.startsWith('data:image/')) {
            final base64Data = src.split(',').last;
            final bytes = base64Decode(base64Data);
            imageWidget = Image.memory(bytes);
          } else {
            imageWidget = CachedNetworkImage(
              imageUrl: src,
              cacheManager: DefaultCacheManager(),
            );
          }
          // Center without extra vertical space, and hook into pinch callbacks
          return Align(
            alignment: Alignment.center,
            heightFactor: 1,
            child: PinchZoomReleaseUnzoomWidget(
              child: imageWidget,
              twoFingersOn: widget.twoFingersOn ?? () {},
              twoFingersOff: widget.twoFingersOff ?? () {},
            ),
          );
        }

        // YOUTUBE EMBEDDING (mobile only)
        if (!kIsWeb &&
            element.localName == 'a' &&
            (element.attributes['href']?.contains('youtube.com') == true ||
                element.attributes['href']?.contains('youtu.be') == true)) {
          final url = element.attributes['href']!;
          final videoId = YoutubePlayer.convertUrlToId(url) ?? url;
          final controller = YoutubePlayerController(
            initialVideoId: videoId,
            flags: const YoutubePlayerFlags(
              useHybridComposition: true,
              showLiveFullscreenButton: false,
              autoPlay: false,
              mute: false,
            ),
          );
          final titleWidget = AnimatedBuilder(
            animation: controller,
            builder: (ctx, _) {
              final title = controller.metadata.title;
              final displayTitle =
              title.isNotEmpty ? title : 'Loading title…';
              return Expanded(
                child: GestureDetector(
                  onTap: () async {
                    final uri = Uri.parse(url);
                    if (await canLaunchUrl(uri)) await launchUrl(uri);
                  },
                  child: Text(
                    displayTitle,
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 18.0,
                      decoration: TextDecoration.underline,
                    ),
                    overflow: TextOverflow.ellipsis,
                    maxLines: 1,
                  ),
                ),
              );
            },
          );
          return YoutubePlayer(
            controller: controller,
            showVideoProgressIndicator: true,
            topActions: [titleWidget],
            bottomActions: [
              CurrentPosition(),
              ProgressBar(isExpanded: true),
              RemainingDuration(),
            ],
          );
        }

        return null;
      },
    );

    // Wrap in SelectionArea if needed
    return widget.isSelectable
        ? SelectionArea(
      focusNode: FocusNode(),
      selectionControls: materialTextSelectionControls,
      child: content,
    )
        : content;
  }

  String colorToRgbString(Color? color) {
    if (color != null) {
      final r = (color.r * 255).round();
      final g = (color.g * 255).round();
      final b = (color.b * 255).round();
      return 'rgb($r, $g, $b)';
    }
    return '';
  }
}
