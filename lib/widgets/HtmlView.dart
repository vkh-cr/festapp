import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';

class HtmlWithAppLinksWidget extends HtmlWidget {
  HtmlWithAppLinksWidget(this.context, super.html,
      {required ColumnMode renderMode,
        super.textStyle,
        super.customStylesBuilder});

  final BuildContext context;

  @override
  FutureOr<bool> Function(String p1)? get onTapUrl {
    return (String url) {
      if (url.startsWith("navigate:")) {
        var navigateTo = url.replaceFirst(RegExp("navigate:"), "");
        RouterService.navigateOccasion(context, navigateTo);
        return true;
      } else if (url.startsWith(AppConfig.webLink) || url.contains("localhost")) {
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
    this.color = AppConfig.defaultHtmlViewColor,
    this.isSelectable = false,
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
      final int r = widget.color!.red;
      final int g = widget.color!.green;
      final int b = widget.color!.blue;
      widgetColor = 'rgb($r, $g, $b)';
    } else {
      widgetColor = "";
    }

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
            'color': widgetColor,
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
}
