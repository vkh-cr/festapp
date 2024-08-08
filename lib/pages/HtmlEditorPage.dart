import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:fstapp/widgets/HtmlEditorWidget.dart';
import 'package:quill_html_editor/quill_html_editor.dart';
import 'package:flutter/material.dart';

class HtmlEditorPage extends StatefulWidget {
  static const String parContent = "content";
  static const String parLoad = "load";
  static const ROUTE = "htmlEditor";
  Map<String, dynamic>? content;
  HtmlEditorPage({this.content, super.key});

  @override
  _HtmlEditorPageState createState() => _HtmlEditorPageState();
}

class _HtmlEditorPageState extends State<HtmlEditorPage> {
  final String _html = "";
  String? _originalHtml;
  bool _isTextSet = false;
  bool _isContentLoading = false;

  Map<String, dynamic>? parameters;
  late QuillEditorController controller;

  @override
  void initState() {
    super.initState();
    if (widget.content != null) {
      _originalHtml = widget.content?[HtmlEditorPage.parContent];
    }


    controller = QuillEditorController();
    var firstLoad = (t) async {
      if(_isTextSet){return;}
      await setHtmlText(_originalHtml ?? _html);
      _isTextSet = true;
    };
    controller.onTextChanged(firstLoad);
    if (_originalHtml == null) {
      _loadHtmlContent();
    }
  }

  Future<void> _loadHtmlContent() async {
    setState(() {
      _isContentLoading = true;
      //avoid double setting of text
      _isTextSet = true;
    });
    try {
      _originalHtml = await widget.content?[HtmlEditorPage.parLoad]();
      if (_originalHtml != null) {
        await setHtmlText(_originalHtml!);
      }
    } catch (e) {
      // Handle error
    }
    setState(() {
      _isContentLoading = false;
    });
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.white,
        resizeToAvoidBottomInset: true,
        body: Stack(
          children: [
            Align(
              alignment: Alignment.topCenter,
              child: ConstrainedBox(
                constraints: BoxConstraints(maxWidth: appMaxWidth),
                child: HtmlEditorWidget(
                  initialContent: _html,
                  controller: controller,
                  onTextChanged: (text) => debugPrint('listening to $text'),
                ),
              ),
            ),
            if (_isContentLoading)
              Container(
                color: Colors.black54,
                child: Center(
                  child: CircularProgressIndicator(),
                ),
              ),
          ],
        ),
        bottomNavigationBar: Container(
          width: double.maxFinite,
          color: Colors.grey.shade200,
          child: Wrap(
            alignment: WrapAlignment.end,
            children: [
              ButtonsHelper.bottomBarButton(
                text: "Reset".tr(),
                onPressed: () async {
                  await setHtmlText(_originalHtml ?? _html);
                },
              ),
              ButtonsHelper.bottomBarButton(
                text: "Storno".tr(),
                onPressed: cancelPressed,
              ),
              ButtonsHelper.bottomBarButton(
                text: "Save".tr(),
                onPressed: savePressed,
              ),
            ],
          ),
        ),
      ),
    );
  }

  void savePressed() async {
    String? htmlTextEdited = await controller.getText();
    var htmlText = htmlTextEdited.removeBackgroundColor();
    RouterService.goBack(context, htmlText);
  }

  void cancelPressed() async {
    RouterService.goBack(context);
  }

  Future<void> setHtmlText(String text) async {
    await controller.setText(text);
  }
}
