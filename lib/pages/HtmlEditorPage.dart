import 'package:easy_localization/easy_localization.dart';
import 'package:go_router/go_router.dart';
import 'package:quill_html_editor/quill_html_editor.dart';
import 'package:flutter/material.dart';

class HtmlEditorPage extends StatefulWidget {
  static const ROUTE = "/htmlEditor";
  String? content;
  HtmlEditorPage({this.content, super.key});

  @override
  _HtmlEditorState createState() => _HtmlEditorState();
}

class _HtmlEditorState extends State<HtmlEditorPage> {
  _HtmlEditorState();
  late String _html;
  void didChangeDependencies() {
    super.didChangeDependencies();
    _html = widget.content??"";
  }

  ///[controller] create a QuillEditorController to access the editor methods
  late QuillEditorController controller;

  ///[customToolBarList] pass the custom toolbarList to show only selected styles in the editor

  final customToolBarList = [
    ToolBarStyle.bold,
    ToolBarStyle.italic,
    ToolBarStyle.underline,
    ToolBarStyle.strike,
    ToolBarStyle.align,
    ToolBarStyle.clean,
    ToolBarStyle.link,
  ];

  final _toolbarColor = Colors.grey.shade200;
  final _backgroundColor = Colors.white70;
  final _toolbarIconColor = Colors.black87;
  final _editorTextStyle = const TextStyle(
      fontSize: 16,
      fontFamily: '"PT Sans", Calibri, Tahoma, sans-serif',
  );
  final _hintTextStyle = const TextStyle(
      fontSize: 18, color: Colors.black12);

  @override
  void initState() {
    controller = QuillEditorController();
    controller.onTextChanged((text) {
      debugPrint('listening to $text');
    });
    controller.onEditorLoaded(() {
      debugPrint('Editor Loaded :)');
      setHtmlText(_html);
    });
    super.initState();
  }

  @override
  void dispose() {
    /// please do not forget to dispose the controller
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.white,
        resizeToAvoidBottomInset: true,
        body: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            SizedBox(
              width: 50,
              child: ToolBar.scroll(
                toolBarColor: _toolbarColor,
                padding: const EdgeInsets.all(8),
                iconSize: 25,
                iconColor: _toolbarIconColor,
                activeIconColor: Colors.greenAccent.shade400,
                controller: controller,
                toolBarConfig: customToolBarList,
                crossAxisAlignment: CrossAxisAlignment.center,
                direction: Axis.vertical,
                customButtons: [],
              ),
            ),
            Flexible(
              fit: FlexFit.tight,
              child: QuillHtmlEditor(
                hintText: null,
                controller: controller,
                isEnabled: true,
                ensureVisible: false,
                minHeight: 200,
                textStyle: _editorTextStyle,
                hintTextStyle: _hintTextStyle,
                hintTextAlign: TextAlign.start,
                padding: const EdgeInsets.only(left: 10, top: 10),
                hintTextPadding: const EdgeInsets.only(left: 20),
                backgroundColor: _backgroundColor,
                loadingBuilder: (context) {
                  return const Center(
                      child: CircularProgressIndicator(
                        strokeWidth: 0.4,
                      ));
                },
                onFocusChanged: (focus) {
                  debugPrint('has focus $focus');
                  setState(() {
                  });
                },
                onTextChanged: (text) => debugPrint('widget text change $text'),
                onEditorCreated: () {},
                onEditorResized: (height) =>
                    debugPrint('Editor resized $height'),
                onSelectionChanged: (sel) =>
                    debugPrint('index ${sel.index}, range ${sel.length}'),
              ),
            ),
          ],
        ),
        bottomNavigationBar: Visibility(
          visible: true,
          child: Container(
            width: double.maxFinite,
            color: _toolbarColor,
            child: Wrap(
              children: [
                textButton(
                    text: "Reset".tr(),
                    onPressed: () {
                      setHtmlText(_html);
                    }),
                textButton(
                    text: "Storno".tr(),
                    onPressed: () {
                      cancelPressed();
                    }),
                textButton(
                    text: "Save".tr(),
                    onPressed: () {
                      savePressed();
                    }),
              ],
            ),
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
          color: _toolbarIconColor,
          onPressed: onPressed,
          child: Text(
            text,
            style: TextStyle(color: _toolbarColor),
          )),
    );
  }

  void savePressed() async {
    String? htmlText = await controller.getText();
    context.pop(htmlText);
  }

  void cancelPressed() async {
    context.pop();
  }

  ///[setHtmlText] to set the html text to editor
  void setHtmlText(String text) async {
    await controller.setText(text);
  }


  /// to clear the editor
  void clearEditor() => controller.clear();
}