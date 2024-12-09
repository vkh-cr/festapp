import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/themeConfig.dart';

class HtmlWithAppLinksWidget extends HtmlWidget {
  HtmlWithAppLinksWidget(this.context, super.html,
      {required ColumnMode renderMode,
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

class HtmlView extends StatefulWidget {
  final String html;
  final double? fontSize;
  final bool isSelectable;
  Color? color;

  HtmlView({
    Key? key,
    required this.html,
    this.fontSize = 18,
    this.isSelectable = false,
  }) : super(key: key);

  @override
  _HtmlViewState createState() => _HtmlViewState();
}

class _HtmlViewState extends State<HtmlView> {
  _HtmlViewState();

  @override
  Widget build(BuildContext context) {
    widget.color ??= ThemeConfig.defaultHtmlViewColor(context);
    String widgetColor = colorToRgbString(widget.color);
    String aColor = colorToRgbString(ThemeConfig.htmlLinkColor(context));

    Widget htmlWidget = HtmlWithAppLinksWidget(
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
        final tagName = element.localName;
        if (tagName == 'a') {
          return {
            'color': aColor,
          };
        }
        return null;
      },
    );

    return widget.isSelectable
        ? SelectionArea(
      focusNode: FocusNode(),
      selectionControls: materialTextSelectionControls,
      child: htmlWidget,
    )
        : htmlWidget;
  }

  String colorToRgbString(Color? color) {
    if (color != null) {
      final int r = color.red;
      final int g = color.green;
      final int b = color.blue;
      return 'rgb($r, $g, $b)';
    } else {
      return "";
    }
  }
}
