import 'package:flutter/material.dart';
import 'package:flutter_quill/flutter_quill.dart' as quill;
import 'package:vsc_quill_delta_to_html/vsc_quill_delta_to_html.dart';

/// A Flutter-native rich text editor for platforms where an iframe-backed
/// contenteditable conflicts with the virtual keyboard (notably Android web).
class NativeHtmlEditorController {
  NativeHtmlEditorController()
      : quillController = quill.QuillController.basic();

  final quill.QuillController quillController;

  String getHtml() {
    final operations = quillController.document
        .toDelta()
        .toJson()
        .map((operation) => Map<String, dynamic>.from(operation))
        .toList();
    return QuillDeltaToHtmlConverter(
      operations,
      ConverterOptions(
        multiLineParagraph: false,
        converterOptions: OpConverterOptions(inlineStylesFlag: true),
      ),
    ).convert();
  }

  void dispose() => quillController.dispose();
}

class NativeHtmlEditorWidget extends StatelessWidget {
  const NativeHtmlEditorWidget({
    required this.controller,
    super.key,
  });

  final NativeHtmlEditorController controller;

  @override
  Widget build(BuildContext context) {
    final colors = Theme.of(context).colorScheme;
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 12),
      child: Container(
        key: const ValueKey('news-native-html-editor'),
        height: 320,
        decoration: BoxDecoration(
          color: colors.surface,
          border: Border.all(color: colors.outlineVariant),
          borderRadius: BorderRadius.circular(8),
        ),
        clipBehavior: Clip.antiAlias,
        child: Column(
          children: [
            quill.QuillSimpleToolbar(
              controller: controller.quillController,
              config: quill.QuillSimpleToolbarConfig(
                multiRowsDisplay: true,
                showDividers: false,
                showFontFamily: false,
                showFontSize: false,
                showSmallButton: false,
                showInlineCode: false,
                showColorButton: false,
                showBackgroundColorButton: false,
                showHeaderStyle: false,
                showListNumbers: false,
                showListBullets: false,
                showListCheck: false,
                showCodeBlock: false,
                showQuote: false,
                showIndent: false,
                showUndo: false,
                showRedo: false,
                showSearchButton: false,
                showSubscript: false,
                showSuperscript: false,
                showAlignmentButtons: true,
                color: colors.surfaceContainerHighest,
              ),
            ),
            Divider(height: 1, color: colors.outlineVariant),
            Expanded(
              child: quill.QuillEditor.basic(
                controller: controller.quillController,
                config: const quill.QuillEditorConfig(
                  padding: EdgeInsets.all(12),
                  expands: true,
                  scrollable: true,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
