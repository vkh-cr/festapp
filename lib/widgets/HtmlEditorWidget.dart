import 'dart:async';

import 'package:flutter/material.dart';
import 'package:quill_html_editor/quill_html_editor.dart';

class HtmlEditorWidget extends StatefulWidget {
  final String initialContent;
  final QuillEditorController controller;
  final Function(String)? onTextChanged;

  HtmlEditorWidget({
    required this.initialContent,
    required this.controller,
    this.onTextChanged,
    Key? key,
  }) : super(key: key);

  @override
  _HtmlEditorWidgetState createState() => _HtmlEditorWidgetState();
}

class _HtmlEditorWidgetState extends State<HtmlEditorWidget> {
  late String _html;
  bool isLoading = true;
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
  final _hintTextStyle = const TextStyle(fontSize: 18, color: Colors.black12);

  @override
  void initState() {
    super.initState();
    _html = widget.initialContent;
    widget.controller.onTextChanged((text) {
      widget.onTextChanged?.call(text);
    });
    widget.controller.onEditorLoaded(() {
      debugPrint('Editor Loaded :)');
    });

      Timer(const Duration(seconds: 2), () {
        setState(() {
          isLoading = false;
        });
        if(_html.isNotEmpty) {
          setHtmlText(_html);
      }});

  }

  @override
  void dispose() {
    widget.controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Row(
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
            controller: widget.controller,
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
            controller: widget.controller,
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
              return isLoading ? const Center(
                  child: CircularProgressIndicator(
                    strokeWidth: 0.4,
                  )) : const SizedBox.shrink();
            },
            onFocusChanged: (focus) {
              debugPrint('has focus $focus');
              setState(() {});
            },
            onTextChanged: (text) => debugPrint('widget text change $text'),
            onEditorCreated: () {},
            onEditorResized: (height) => debugPrint('Editor resized $height'),
            onSelectionChanged: (sel) =>
                debugPrint('index ${sel.index}, range ${sel.length}'),
          ),
        ),
      ],
    );
  }

  void setHtmlText(String text) async {
    await widget.controller.setText(text);
  }
}