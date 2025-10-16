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
import 'package:youtube_player_flutter/youtube_player_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'zoomable_image/zoomable_image.dart';

/// Factory to enable cached network images in HtmlWidget
class MyWidgetFactory extends WidgetFactory with CachedNetworkImageFactory {}

class HtmlWithAppLinksWidget extends HtmlWidget {
  HtmlWithAppLinksWidget(
      this.context,
      super.html, {
        super.key,
        required RenderMode renderMode,
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
    super.key,
    required this.html,
    this.fontSize = 18,
    this.isSelectable = false,
    this.color,
    this.twoFingersOn,
    this.twoFingersOff,
  });

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
      renderMode: RenderMode.listView,
      textStyle: TextStyle(
        fontSize: widget.fontSize,
        fontFamily: ThemeConfig.fontFamily,
        color: textColor,
        inherit: false,
      ),
      customStylesBuilder: (el) {
        // Handle alignment classes from rich text editors like Quill.js
        if (el.attributes['class'] != null) {
          final classes = el.attributes['class']!.split(' ');
          if (classes.contains('ql-align-center')) {
            return {'text-align': 'center'};
          }
          if (classes.contains('ql-align-right')) {
            return {'text-align': 'right'};
          }
          if (classes.contains('ql-align-justify')) {
            return {'text-align': 'justify'};
          }
        }
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
              onTwoFingerStart: widget.twoFingersOn,
              onTwoFingerEnd: widget.twoFingersOff,
              child: img,
            ),
          );
        }

        if (!kIsWeb && el.localName == 'a') {
          final url = el.attributes['href']!;
          final vid = YoutubePlayer.convertUrlToId(url);
          if (vid != null) {
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