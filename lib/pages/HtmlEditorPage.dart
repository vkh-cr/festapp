import 'package:easy_localization/easy_localization.dart';
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
        body: HtmlEditorWidget(
          initialContent: _html,
          controller: controller,
          onTextChanged: (text) => debugPrint('listening to $text'),
        ),
        bottomNavigationBar: Container(
          width: double.maxFinite,
          color: Colors.grey.shade200,
          child: Wrap(
            children: [
              textButton(
                text: "Reset".tr(),
                onPressed: () {
                  setHtmlText(_html);
                },
              ),
              textButton(
                text: "Storno".tr(),
                onPressed: () {
                  cancelPressed();
                },
              ),
              textButton(
                text: "Save".tr(),
                onPressed: () {
                  savePressed();
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget textButton({required String text, required VoidCallback onPressed}) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: MaterialButton(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        color: Colors.black87,
        onPressed: onPressed,
        child: Text(
          text,
          style: TextStyle(color: Colors.grey.shade200),
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