import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';

class HtmlWithAppLinksWidget extends HtmlWidget {
  HtmlWithAppLinksWidget(this.context, super.html,
      {required ColumnMode renderMode, super.textStyle, super.customStylesBuilder});

  final BuildContext context;

  @override
  FutureOr<bool> Function(String p1)? get onTapUrl {
    return (String url) {
      if (url.startsWith("navigate:")) {
        var navigateTo = url.replaceFirst(RegExp("navigate:"), "");
        RouterService.navigateOccasion(context, navigateTo);
        return true;
      }
      super.onTapUrl?.call(url);
      return false;
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
  Color? color;

  HtmlView({
    Key? key,
    required this.html,
    this.fontSize = 18,
    this.color = AppConfig.defaultHtmlViewColor,
  }) : super(key: key);

  @override
  _HtmlViewState createState() => _HtmlViewState();
}

class _HtmlViewState extends State<HtmlView> {
  _HtmlViewState();

  @override
  Widget build(BuildContext context) {
    String widgetColor;
    if (widget.color != null) {
      widgetColor = '#${widget.color?.value.toRadixString(16)}';
    } else {
      widgetColor = "";
    }

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
        final tagName = element.localName;
        if (tagName == 'a') {
          return {
            'color': widgetColor,
          };
        }
        return null;
      },
    );
  }
}
