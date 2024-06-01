import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:fstapp/widgets/HtmlEditorWidget.dart';
import 'package:go_router/go_router.dart';
import 'package:quill_html_editor/quill_html_editor.dart';
import 'package:flutter/material.dart';

class HtmlEditorPage extends StatefulWidget {
  static const ROUTE = "htmlEditor";
  String? content;
  HtmlEditorPage({this.content, super.key});

  @override
  _HtmlEditorPageState createState() => _HtmlEditorPageState();
}

class _HtmlEditorPageState extends State<HtmlEditorPage> {
  late String _html;
  late QuillEditorController controller;

  @override
  void initState() {
    super.initState();
    _html = widget.content ?? "";
    controller = QuillEditorController();
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
        body: Align(
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
        bottomNavigationBar: Container(
          width: double.maxFinite,
          color: Colors.grey.shade200,
          child: Wrap(
            alignment: WrapAlignment.end,
            children: [
              ButtonsHelper.bottomBarButton(
                text: "Reset".tr(),
                onPressed: () {
                  setHtmlText(_html);
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
    var htmlText = removeBackgroundColor(htmlTextEdited);
    context.pop(htmlText);
  }

  void cancelPressed() async {
    context.pop();
  }

  void setHtmlText(String text) async {
    await controller.setText(text);
  }

  String removeBackgroundColor(String htmlString) {
    RegExp regExp = RegExp(r'background-color\s*:\s*[^;]+;?\s*', caseSensitive: false);
    String cleanedHtmlString = htmlString.replaceAll(regExp, '');
    return cleanedHtmlString;
  }
}