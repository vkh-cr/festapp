import 'dart:async';

import 'package:festapp/RouterService.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';

class HtmlWithAppLinksWidget extends HtmlWidget {
  HtmlWithAppLinksWidget(this.context, super.html, {required ColumnMode renderMode, super.textStyle});

  final BuildContext context;
@override
  FutureOr<bool> Function(String p1)? get onTapUrl {
  return (String url) {
    if(url.startsWith("navigate:"))
    {
      var navigateTo = url.replaceFirst(RegExp("navigate:"), "");
      RouterService.navigateOccasion(context, navigateTo);
      return true;
    }
    super.onTapUrl?.call(url);
    return false;
  };

}
}

class HtmlView extends StatefulWidget {
  final String html;
  double? fontSize;

  HtmlView({super.key, required this.html, this.fontSize = 18 });

  @override
  _HtmlViewState createState() => _HtmlViewState();
}

class _HtmlViewState extends State<HtmlView> {

  _HtmlViewState();
  @override
  Widget build(BuildContext context) {
    return HtmlWithAppLinksWidget(
      // the first parameter (`html`) is required
      context,
      widget.html,
      // select the render mode for HTML body
      // by default, a simple `Column` is rendered
      // consider using `ListView` or `SliverList` for better performance
      renderMode: RenderMode.column,
      textStyle: TextStyle(
        fontSize: widget.fontSize,
      fontFamily: "Futura",
      color: Colors.black,
      inherit: false,
      ),
    );
    }
  }