import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/theme_config.dart';

class HtmlWithAppLinksWidget extends HtmlWidget {
  HtmlWithAppLinksWidget(this.context, super.html,
      {super.key, required ColumnMode renderMode,
        super.textStyle,
        super.customStylesBuilder});

  final BuildContext context;

  @override
  FutureOr<bool> Function(String p1)? get onTapUrl {
    return (String url) {
      if (AppConfig.compatibleUrls().where((u) => u.isNotEmpty).any((u) =>url.startsWith(u)) || url.contains("localhost")) {
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
  void Function(ImageMetadata p1)? get onTapImage {
    return (ImageMetadata imgData) {
      return;
    };
  }
}

class HtmlView extends StatelessWidget {
  final String html;
  final double? fontSize;
  final bool isSelectable;
  Color? color;

  HtmlView({
    super.key,
    required this.html,
    this.fontSize = 18,
    this.isSelectable = false,
    this.color
  });

  @override
  Widget build(BuildContext context) {
    color ??= ThemeConfig.defaultHtmlViewColor(context);
    String aColor = colorToRgbString(ThemeConfig.htmlLinkColor(context));

    Widget htmlWidget = HtmlWithAppLinksWidget(
      context,
      html,
      renderMode: RenderMode.column,
      textStyle: TextStyle(
        fontSize: fontSize,
        fontFamily: "Futura",
        color: color,
        inherit: false,
      ),
      customStylesBuilder: (element) {
        final tagName = element.localName;
        if (tagName == 'a') {
          return {
            'color': aColor,
          };
        }
        // quill specific fix
        else if (tagName == 'li' && element.attributes['data-list'] == 'bullet') {
          return {
            'list-style-type': 'disc',
          };
        }
        return null;
      },
    );

    return isSelectable
        ? SelectionArea(
      focusNode: FocusNode(),
      selectionControls: materialTextSelectionControls,
      child: htmlWidget,
    )
        : htmlWidget;
  }

  String colorToRgbString(Color? color) {
    if (color != null) {
      final int r = color.r.toInt();
      final int g = color.g.toInt();
      final int b = color.b.toInt();
      return 'rgb($r, $g, $b)';
    } else {
      return "";
    }
  }
}
