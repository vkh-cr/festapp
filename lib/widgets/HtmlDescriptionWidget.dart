import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:go_router/go_router.dart';

class HtmlWithAppLinksWidget extends HtmlWidget {
  HtmlWithAppLinksWidget(this.context, super.html, {required ColumnMode renderMode, super.textStyle});

  final BuildContext context;
@override
  FutureOr<bool> Function(String p1)? get onTapUrl {
  return (String url) {
    if(url.startsWith("navigate:"))
    {
      var navigateTo = url.replaceFirst(RegExp("navigate:"), "");
      context.push(navigateTo);
      return true;
    }
    super.onTapUrl?.call(url);
    return false;
  };

}
}

class HtmlDescriptionWidget extends StatefulWidget {
  final String html;

  const HtmlDescriptionWidget({super.key, required this.html});

  @override
  _HtmlDescriptionWidgetState createState() => _HtmlDescriptionWidgetState(html);
}

class _HtmlDescriptionWidgetState extends State<HtmlDescriptionWidget> {

  final String html;
  _HtmlDescriptionWidgetState(this.html);
  @override
  Widget build(BuildContext context) {
    return HtmlWithAppLinksWidget(
      // the first parameter (`html`) is required
      context,
        html,
        // select the render mode for HTML body
        // by default, a simple `Column` is rendered
        // consider using `ListView` or `SliverList` for better performance
        renderMode: RenderMode.column,
      textStyle: const TextStyle(fontSize: 18, fontFamily: "Futura"),

    );
    }
  }