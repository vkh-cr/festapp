import 'dart:async';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fwfh_cached_network_image/fwfh_cached_network_image.dart';
import 'package:youtube_player_flutter/youtube_player_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

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
  FutureOr<bool> Function(String p1)? get onTapUrl {
    return (String url) {
      if (AppConfig.compatibleUrls().where((u) => u.isNotEmpty).any((u) => url.startsWith(u)) ||
          url.contains("localhost")) {
        var path = url.split('/#/').last;
        RouterService.navigate(context, path);
        return true;
      } else {
        super.onTapUrl?.call(url);
        return false;
      }
    };
  }

  @override
  void Function(ImageMetadata)? get onTapImage => (_) {};
}

class HtmlView extends StatefulWidget {
  final String html;
  final double? fontSize;
  final bool isSelectable;
  Color? color;

  HtmlView({
    super.key,
    required this.html,
    this.fontSize = 18,
    this.isSelectable = false,
    this.color,
  });

  @override
  State<HtmlView> createState() => _HtmlViewState();
}

class _HtmlViewState extends State<HtmlView> {
  @override
  Widget build(BuildContext context) {
    widget.color ??= ThemeConfig.defaultHtmlViewColor(context);
    String linkColor = colorToRgbString(ThemeConfig.htmlLinkColor(context));

    return widget.isSelectable
        ? SelectionArea(
      focusNode: FocusNode(),
      selectionControls: materialTextSelectionControls,
      child: _buildHtml(context, linkColor),
    )
        : _buildHtml(context, linkColor);
  }

  Widget _buildHtml(BuildContext context, String linkColor) {
    return HtmlWithAppLinksWidget(
      context,
      widget.html,
      renderMode: RenderMode.column,
      textStyle: TextStyle(
        fontSize: widget.fontSize,
        fontFamily: "Futura",
        color: widget.color,
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
        // On web, skip YouTube embedding
        if (kIsWeb) return null;

        if (element.localName == 'a' &&
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
            builder: (context, _) {
              final title = controller.metadata.title;
              final displayTitle = title.isNotEmpty ? title : 'Loading title…';
              return Expanded(
                child: GestureDetector(
                  onTap: () async {
                    final uri = Uri.parse(url);
                    if (await canLaunchUrl(uri)) {
                      await launchUrl(uri);
                    }
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
  }

  String colorToRgbString(Color? color) {
    if (color != null) {
      final int r = (color.r * 255).round();
      final int g = (color.g * 255).round();
      final int b = (color.b * 255).round();
      return 'rgb($r, $g, $b)';
    } else {
      return "";
    }
  }
}
