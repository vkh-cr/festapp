import 'dart:async';
import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/PinchZoomReleaseUnzoomWidget.dart';
import 'package:fwfh_cached_network_image/fwfh_cached_network_image.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter_cache_manager/flutter_cache_manager.dart';
import 'package:youtube_player_flutter/youtube_player_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

/// Provides the “blockScroll” callbacks to all descendants.
class PinchScrollScope extends InheritedWidget {
  final VoidCallback onPinchStart;
  final VoidCallback onPinchEnd;

  const PinchScrollScope({
    Key? key,
    required this.onPinchStart,
    required this.onPinchEnd,
    required Widget child,
  }) : super(key: key, child: child);

  static PinchScrollScope? of(BuildContext context) =>
      context.dependOnInheritedWidgetOfExactType<PinchScrollScope>();

  @override
  bool updateShouldNotify(covariant PinchScrollScope old) => false;
}

/// Wraps any child and provides a scroll view that can be blocked
/// during two-finger pinch gestures.
class PinchScrollView extends StatefulWidget {
  final Widget Function(VoidCallback onPinchStart, VoidCallback onPinchEnd)
  builder;

  const PinchScrollView({Key? key, required this.builder}) : super(key: key);

  @override
  State<PinchScrollView> createState() => _PinchScrollViewState();
}

class _PinchScrollViewState extends State<PinchScrollView> {
  bool blockScroll = false;
  final ScrollController controller = ScrollController();

  void _onPinchStart() {
    print('>> scroll blocked');
    setState(() => blockScroll = true);
  }

  void _onPinchEnd() {
    Future.delayed(
      PinchZoomReleaseUnzoomWidget.defaultResetDuration,
          () {
        print('>> scroll unblocked');
        setState(() => blockScroll = false);
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return PinchScrollScope(
      onPinchStart: _onPinchStart,
      onPinchEnd: _onPinchEnd,
      child: SingleChildScrollView(
        controller: controller,
        physics: blockScroll
            ? const NeverScrollableScrollPhysics()
            : const BouncingScrollPhysics(),
        child: widget.builder(_onPinchStart, _onPinchEnd),
      ),
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
  FutureOr<bool> Function(String)? get onTapUrl => (url) {
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
  final double fontSize;
  final bool isSelectable;
  final Color? color;

  /// Optional overrides; if you don’t pass them, we’ll fall back to the scope.
  final VoidCallback? twoFingersOn;
  final VoidCallback? twoFingersOff;

  const HtmlView({
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
    final textColor =
        widget.color ?? ThemeConfig.defaultHtmlViewColor(context);
    final linkColor = colorToRgbString(ThemeConfig.htmlLinkColor(context));

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
      customStylesBuilder: (el) {
        switch (el.localName) {
          case 'a':
            return {'color': linkColor};
          case 'li':
            if (el.attributes['data-list'] == 'bullet') {
              return {'list-style-type': 'disc'};
            }
        }
        return null;
      },
      customWidgetBuilder: (el) {
        if (el.localName == 'img') {
          final src = el.attributes['src']!;
          final img = src.startsWith('data:image/')
              ? Image.memory(base64Decode(src.split(',').last))
              : CachedNetworkImage(
            imageUrl: src,
            cacheManager: DefaultCacheManager(),
          );
          return Align(
            alignment: Alignment.center,
            heightFactor: 1,
            child: ZoomableImage(
              child: img,
              onTwoFingerStart: widget.twoFingersOn,
              onTwoFingerEnd: widget.twoFingersOff,
            ),
          );
        }

        if (!kIsWeb &&
            el.localName == 'a' &&
            ((el.attributes['href'] ?? '').contains('youtube.com') ||
                el.attributes['href']!.contains('youtu.be'))) {
          final url = el.attributes['href']!;
          final vid = YoutubePlayer.convertUrlToId(url) ?? url;
          final ctrl = YoutubePlayerController(
            initialVideoId: vid,
            flags: const YoutubePlayerFlags(
              useHybridComposition: true,
              showLiveFullscreenButton: false,
              autoPlay: false,
              mute: false,
            ),
          );
          final title = AnimatedBuilder(
            animation: ctrl,
            builder: (_, __) {
              final t = ctrl.metadata.title;
              return Expanded(
                child: GestureDetector(
                  onTap: () async {
                    final uri = Uri.parse(url);
                    if (await canLaunchUrl(uri)) launchUrl(uri);
                  },
                  child: Text(
                    t.isNotEmpty ? t : 'Loading title…',
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 18,
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
            controller: ctrl,
            showVideoProgressIndicator: true,
            topActions: [title],
            bottomActions: const [
              CurrentPosition(),
              ProgressBar(isExpanded: true),
              RemainingDuration(),
            ],
          );
        }

        return null;
      },
    );

    return widget.isSelectable
        ? SelectionArea(
      focusNode: FocusNode(),
      selectionControls: materialTextSelectionControls,
      child: content,
    )
        : content;
  }

  String colorToRgbString(Color? c) {
    if (c == null) return '';
    return 'rgb(${(c.r * 255).round()}, ${(c.g * 255).round()}, ${(c.b * 255).round()})';
  }
}
