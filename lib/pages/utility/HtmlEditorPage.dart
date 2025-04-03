import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/services/HtmlHelper.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:fstapp/widgets/HtmlEditorWidget.dart';
import 'package:quill_html_editor/quill_html_editor.dart';

@RoutePage()
class HtmlEditorPage extends StatefulWidget {
  static const String parContent = "content";
  static const String parLoad = "load";
  static const ROUTE = "htmlEditor";

  final Map<String, dynamic>? content;
  final int? occasionId;

  const HtmlEditorPage({this.content, this.occasionId, super.key});

  @override
  _HtmlEditorPageState createState() => _HtmlEditorPageState();
}

class _HtmlEditorPageState extends State<HtmlEditorPage> {
  final String _html = "";
  String? _originalHtml;
  bool _isTextSet = false;
  bool _isContentLoading = false;
  bool _isSaving = false;
  bool _showOverlay = false;
  double? _progress;

  int processedCount = 0;
  List<String> imagesToProcess = [];

  late QuillEditorController controller;

  @override
  void initState() {
    super.initState();
    if (widget.content != null) {
      _originalHtml = widget.content?[HtmlEditorPage.parContent];
    }

    controller = QuillEditorController();
    var firstLoad = (t) async {
      if (_isContentLoading) {
        _isTextSet = true;
      }
      if (_isTextSet) {
        return;
      }
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
            if (!_isSaving && !_showOverlay)
              Align(
                alignment: Alignment.topCenter,
                child: ConstrainedBox(
                  constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
                  child: HtmlEditorWidget(
                    initialContent: _html,
                    controller: controller,
                  ),
                ),
              ),
            if (_isContentLoading)
              Container(
                color: Colors.black54,
                child: const Center(
                  child: CircularProgressIndicator(),
                ),
              ),
            if (_showOverlay)
              Container(
                color: Colors.black54,
                child: Center(
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        if (_progress == null) ...[
                          const Text('Processing content and detecting large images...', style: TextStyle(color: Colors.white, fontSize: 16)).tr(),
                        ] else ...[
                          Container(
                            padding: const EdgeInsets.all(16),
                            color: Colors.white,
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                const Text('Reducing Images Size...', style: TextStyle(color: Colors.black, fontSize: 16)).tr(),
                                const SizedBox(height: 20),
                                LinearProgressIndicator(value: _progress),
                                const SizedBox(height: 10),
                                Text(
                                  '$processedCount / ${imagesToProcess.length}',
                                  style: const TextStyle(fontSize: 16, color: Colors.black),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ],
                    ),
                  ),
                ),
              ),
          ],
        ),
        bottomNavigationBar: !_isSaving && !_showOverlay
            ? Container(
          width: double.maxFinite,
          color: Colors.grey.shade200,
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: IntrinsicWidth(
              child: Row(
                children: [
                  ButtonsHelper.bottomBarButton(
                    text: "Reset".tr(),
                    onPressed: _isSaving
                        ? null
                        : () async {
                      await setHtmlText(_originalHtml ?? _html);
                    },
                  ),
                  ButtonsHelper.bottomBarButton(
                    text: "Storno".tr(),
                    onPressed: _isSaving ? null : cancelPressed,
                  ),
                  ButtonsHelper.bottomBarButton(
                    text: "Save".tr(),
                    onPressed: _isSaving ? null : savePressed,
                  ),
                ],
              ),
            ),
          ),
        )
            : null,
      ),
    );
  }

  Future<void> savePressed() async {
    String? htmlTextEdited = await controller.getText();
    var htmlText = HtmlHelper.removeColor(htmlTextEdited);
    htmlText = HtmlHelper.detectAndReplaceLinks(htmlText);

    // New way using storeImagesToOccasion with the occasionId from widget
    if (widget.occasionId != null) {
      setState(() {
        _isSaving = true;
        _showOverlay = true;
      });
      htmlText = await HtmlHelper.storeImagesToOccasion(_originalHtml ?? _html, htmlText, widget.occasionId!);
      RouterService.goBack(context, htmlText);
      return;
    }

    setState(() {
      _isSaving = true;
      _showOverlay = true;
    });
    await Future.delayed(const Duration(milliseconds: 200));

    imagesToProcess = HtmlHelper.detectImagesToProcess(htmlText);
    bool hasLargeImages = imagesToProcess.isNotEmpty;

    if (hasLargeImages) {
      bool compress = await showDialog(
        barrierDismissible: false,
        context: context,
        builder: (context) => AlertDialog(
          title: const Text("Large Images Detected"),
          content: const Text("Some images are large and may slow down the app. Press OK to convert them into optimal size."),
          actions: [
            TextButton(
              child: const Text("Ok").tr(),
              onPressed: () => Navigator.of(context).pop(true),
            ),
          ],
        ),
      );

      if (compress) {
        setState(() {
          _progress = 0.0;
        });
        await Future.delayed(const Duration(milliseconds: 200));

        for (String imageSrc in imagesToProcess) {
          htmlText = await HtmlHelper.compressImage(htmlText, imageSrc, () {
            setState(() {
              processedCount++;
              _progress = processedCount / imagesToProcess.length;
            });
          });
        }
      }
    }

    setState(() {
      _isSaving = false;
    });
    RouterService.goBack(context, htmlText);
  }

  Future<void> saveRawPressed() async {
    String? htmlText = await controller.getText();
    RouterService.goBack(context, htmlText);
  }

  void cancelPressed() async {
    RouterService.goBack(context);
  }

  Future<void> setHtmlText(String text) async {
    await controller.setText(text);
  }
}
