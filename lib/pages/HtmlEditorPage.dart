import 'dart:convert';
import 'dart:typed_data';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:fstapp/widgets/HtmlEditorWidget.dart';
import 'package:quill_html_editor/quill_html_editor.dart';
import 'package:html/parser.dart' as html_parser;
import 'package:image/image.dart' as img;
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:http/http.dart' as http;


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
  bool _isSaving = false;
  double _progress = 0.0;  // Progress indicator for image processing

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
            if (!_isSaving) // Display the editor only if not saving
              Align(
                alignment: Alignment.topCenter,
                child: ConstrainedBox(
                  constraints: BoxConstraints(maxWidth: appMaxWidth),
                  child: HtmlEditorWidget(
                    initialContent: _html,
                    controller: controller,
                  ),
                ),
              ),
            if (_isContentLoading) // Display loading indicator when loading
              Container(
                color: Colors.black54,
                child: Center(
                  child: CircularProgressIndicator(),
                ),
              ),
          ],
        ),
        bottomNavigationBar: !_isSaving // Hide the buttons if saving
            ? Container(
          width: double.maxFinite,
          color: Colors.grey.shade200,
          child: Wrap(
            alignment: WrapAlignment.end,
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
        )
            : null,
      ),
    );
  }

  List<String> detectImagesToProcess(String htmlText) {
    final document = html_parser.parse(htmlText);
    final images = document.getElementsByTagName('img');
    List<String> imagesToProcess = [];

    for (var image in images) {
      String? src = image.attributes['src'];
      if (src != null && (src.startsWith('data:image/jpeg;base64,') || src.startsWith('data:image/png;base64,'))) {
        String base64Data = src.contains('data:image/jpeg;base64,')
            ? src.replaceFirst('data:image/jpeg;base64,', '')
            : src.replaceFirst('data:image/png;base64,', '');

        Uint8List imageData = base64.decode(base64Data);

        if (src.startsWith('data:image/jpeg;base64,')) {
          if (imageData.length > 1000000) { // Size > 1MB
            imagesToProcess.add(src);
          }
        } else if (src.startsWith('data:image/png;base64,')) {
          img.Image? originalImage = img.decodeImage(imageData);
          if (originalImage != null && originalImage.width > 1200) {
            imagesToProcess.add(src);
          }
        }
      }
    }
    return imagesToProcess;
  }

  Future<String> compressImages(String htmlText, List<String> imagesToProcess) async {
    final document = html_parser.parse(htmlText);
    final images = document.getElementsByTagName('img');

    int processedCount = 0;

    for (var image in images) {
      String? src = image.attributes['src'];
      if (src != null && imagesToProcess.contains(src)) {
        String base64Data = src.contains('data:image/jpeg;base64,')
            ? src.replaceFirst('data:image/jpeg;base64,', '')
            : src.replaceFirst('data:image/png;base64,', '');

        Uint8List imageData = base64.decode(base64Data);

        Uint8List compressedData;

        if (src.startsWith('data:image/jpeg;base64,')) {
          if (imageData.length > 1000000) {
            compressedData = compressJpeg(imageData, 1200);
            String compressedBase64 = base64.encode(compressedData);
            image.attributes['src'] = 'data:image/jpeg;base64,$compressedBase64';
          }
        } else if (src.startsWith('data:image/png;base64,')) {
          img.Image? originalImage = img.decodeImage(imageData);
          if (originalImage != null && originalImage.width > 1200) {
            compressedData = compressPng(imageData, 1200);
            String compressedBase64 = base64.encode(compressedData);
            image.attributes['src'] = 'data:image/png;base64,$compressedBase64';
          }
        }

        // Update progress
        processedCount++;
        setState(() {
          _progress = processedCount / imagesToProcess.length;
        });

        // Delay to show progress (simulated delay, remove in production)
        await Future.delayed(Duration(milliseconds: 200));
      }
    }

    return document.outerHtml;
  }

  Uint8List compressJpeg(Uint8List imageData, int width, {int quality = 85}) {
    final img.Image? originalImage = img.decodeImage(imageData);
    if (originalImage == null) {
      throw Exception("Failed to decode JPEG image");
    }
    final img.Image resizedImage = img.copyResize(originalImage, width: width);
    return Uint8List.fromList(img.encodeJpg(resizedImage, quality: quality));
  }

  Uint8List compressPng(Uint8List imageData, int width) {
    final img.Image? originalImage = img.decodeImage(imageData);
    if (originalImage == null) {
      throw Exception("Failed to decode PNG image");
    }
    final img.Image resizedImage = img.copyResize(originalImage, width: width);
    return Uint8List.fromList(img.encodePng(resizedImage));
  }

  // Future<Uint8List> compressJpegWithSupabase(Uint8List imageData, int width, {int quality = 85}) async {
  //   final supabase = Supabase.instance.client;
  //   final bucketName = 'your-bucket-name';
  //   final path = 'uploads/${DateTime.now().millisecondsSinceEpoch}.jpg';
  //
  //   // Upload the image to Supabase Storage
  //   final uploadResponse = await supabase.storage.from(bucketName).uploadBinary(path, imageData);
  //   if (uploadResponse.isNotEmpty) {
  //     throw Exception('Error uploading image: ${uploadResponse.toString()}');
  //   }
  //
  //   // Get the URL with the transformation parameters
  //   final transformedUrl = supabase.storage
  //       .from(bucketName)
  //       .getPublicUrl(path)
  //       .replaceAll('your-bucket-name', 'your-bucket-name/image/resize')
  //       .replaceAll('storage/v1', 'storage/v1/render/image') +
  //       '?width=$width&quality=$quality';
  //
  //   // Download the transformed image
  //   final response = await http.get(Uri.parse(transformedUrl));
  //   if (response.statusCode != 200) {
  //     throw Exception('Failed to fetch transformed image');
  //   }
  //
  //   // Delete the original image from Supabase Storage
  //   final deleteResponse = await supabase.storage.from(bucketName).remove([path]);
  //   if (deleteResponse.isNotEmpty) {
  //     throw Exception('Error deleting image: ${deleteResponse.toString()}');
  //   }
  //
  //   return response.bodyBytes;
  // }
  //
  // Future<Uint8List> compressPngWithSupabase(Uint8List imageData, int width) async {
  //   final supabase = Supabase.instance.client;
  //   final bucketName = 'your-bucket-name';
  //   final path = 'uploads/${DateTime.now().millisecondsSinceEpoch}.png';
  //
  //   // Upload the image to Supabase Storage
  //   final uploadResponse = await supabase.storage.from(bucketName).uploadBinary(path, imageData);
  //   if (uploadResponse.isNotEmpty) {
  //     throw Exception('Error uploading image: ${uploadResponse.toString()}');
  //   }
  //
  //   // Get the URL with the transformation parameters
  //   final transformedUrl = supabase.storage
  //       .from(bucketName)
  //       .getPublicUrl(path)
  //       .replaceAll('your-bucket-name', 'your-bucket-name/image/resize')
  //       .replaceAll('storage/v1', 'storage/v1/render/image') +
  //       '?width=$width&format=png';
  //
  //   // Download the transformed image
  //   final response = await http.get(Uri.parse(transformedUrl));
  //   if (response.statusCode != 200) {
  //     throw Exception('Failed to fetch transformed image');
  //   }
  //
  //   // Delete the original image from Supabase Storage
  //   final deleteResponse = await supabase.storage.from(bucketName).remove([path]);
  //   if (deleteResponse.isNotEmpty) {
  //     throw Exception('Error deleting image: ${deleteResponse.toString()}');
  //   }
  //
  //   return response.bodyBytes;
  // }

  Future<void> savePressed() async {
    setState(() {
      _isSaving = true; // Set saving state to true, remove editor and show loading
    });

    try {
      String? htmlTextEdited = await controller.getText();
      var htmlText = htmlTextEdited.removeBackgroundColor();

      // Detect images that need processing
      List<String> imagesToProcess = detectImagesToProcess(htmlText);
      bool hasLargeImages = imagesToProcess.isNotEmpty;

      if (hasLargeImages) {
        bool compress = await showDialog(
          context: context,
          builder: (context) => AlertDialog(
            title: Text("Large Images Detected"),
            content: Text("Some images are large and may slow down the app. Do you want to compress them?"),
            actions: [
              TextButton(
                child: Text("No"),
                onPressed: () => Navigator.of(context).pop(false),
              ),
              TextButton(
                child: Text("Yes"),
                onPressed: () => Navigator.of(context).pop(true),
              ),
            ],
          ),
        );

        if (compress) {
          showDialog(
            context: context,
            barrierDismissible: false,
            builder: (context) {
              Future.delayed(Duration(milliseconds: 200), () async {
                htmlText = await compressImages(htmlText, imagesToProcess);
                Navigator.of(context).pop(); // Close the progress dialog
                RouterService.goBack(context, htmlText);
              });

              return PopScope(
                canPop: false, // Disable back button
                child: Dialog(
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text('Processing Images...'),
                        SizedBox(height: 20),
                        LinearProgressIndicator(value: _progress),
                        SizedBox(height: 10),
                        Text(
                          '${(_progress * imagesToProcess.length).toInt()} / ${imagesToProcess.length}',
                          style: TextStyle(fontSize: 16),
                        ),
                      ],
                    ),
                  ),
                ),
              );
            },
          );
        }
      } else {
        RouterService.goBack(context, htmlText);
      }
    } finally {
      setState(() {
        _isSaving = false; // Set saving state to false after completing save
      });
    }
  }

  void cancelPressed() async {
    RouterService.goBack(context);
  }

  Future<void> setHtmlText(String text) async {
    await controller.setText(text);
  }
}
