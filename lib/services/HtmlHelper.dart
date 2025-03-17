import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/services.dart';
import 'package:fstapp/dataServices/DbImages.dart';
import 'package:fstapp/services/ImageCompressionHelper.dart';
import 'package:html/parser.dart' as html_parser;
import 'package:http/http.dart' as http;
import 'package:image/image.dart' as img;
import 'package:html/dom.dart';

class HtmlHelper {
  static const int jpegThreshold = 1200;
  static const int pngThreshold = 1000;
  static int maxImageSize = (0.5 * 1024 * 1024) as int;

  static const String jpegBase64Prefix = 'data:image/jpeg;base64,';
  static const String pngBase64Prefix = 'data:image/png;base64,';

  static List<String> detectImagesToProcess(String htmlText) {
    final document = html_parser.parse(htmlText);
    final images = document.getElementsByTagName('img');
    List<String> imagesToProcess = [];

    for (var image in images) {
      String? src = image.attributes['src'];
      if (src != null && (src.startsWith(jpegBase64Prefix) || src.startsWith(pngBase64Prefix))) {
        String base64Data = src.contains(jpegBase64Prefix)
            ? src.replaceFirst(jpegBase64Prefix, '')
            : src.replaceFirst(pngBase64Prefix, '');

        // Calculate the approximate size of the base64 data in bytes
        int base64Length = base64Data.length;
        int imageSizeInBytes = (base64Length * 3) ~/ 4; // ~75% of base64 string length

        if (imageSizeInBytes > maxImageSize) {
          Uint8List imageData = base64.decode(base64Data);

          if (src.startsWith(jpegBase64Prefix)) {
            img.Image? originalImage = img.decodeImage(imageData);
            if (originalImage != null && originalImage.width > 1200) {
              imagesToProcess.add(src);
            }
          } else if (src.startsWith(pngBase64Prefix)) {
            img.Image? originalImage = img.decodeImage(imageData);
            if (originalImage != null && originalImage.width > 1000) {
              imagesToProcess.add(src);
            }
          }
        }
      }
    }
    return imagesToProcess;
  }

  static Future<String> compressImage(
      String htmlText, String imageSrc, void Function() onImageProcessed) async {
    final document = html_parser.parse(htmlText);
    final image = document.querySelector('img[src="$imageSrc"]');

    if (image != null) {
      String base64Data = imageSrc.contains(jpegBase64Prefix)
          ? imageSrc.replaceFirst(jpegBase64Prefix, '')
          : imageSrc.replaceFirst(pngBase64Prefix, '');

      Uint8List imageData = base64.decode(base64Data);

      Uint8List compressedData;

      if (imageSrc.startsWith(jpegBase64Prefix)) {
        compressedData = await ImageCompressionHelper.compressJpeg(imageData, jpegThreshold);
        String compressedBase64 = base64.encode(compressedData);
        image.attributes['src'] = '$jpegBase64Prefix$compressedBase64';
      } else if (imageSrc.startsWith(pngBase64Prefix)) {
        img.Image? originalImage = img.decodeImage(imageData);
        if (originalImage != null) {
          compressedData = await ImageCompressionHelper.compressPng(imageData, pngThreshold);
          String compressedBase64 = base64.encode(compressedData);
          image.attributes['src'] = '$pngBase64Prefix$compressedBase64';
        }
      }

      // Call the callback to update the processed count in the main widget
      onImageProcessed();
    }

    return document.outerHtml;
  }

  static String removeColor(String htmlText) {
    RegExp regExp = RegExp(r'(background-color|color)\s*:\s*[^;]+;?\s*', caseSensitive: false);
    String cleanedHtmlString = htmlText.replaceAll(regExp, '');
    return cleanedHtmlString;
  }

  static String detectAndReplaceLinks(String htmlText) {
    final emailRegex = RegExp(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b');
    final urlRegex = RegExp(r'\b((http|https)://|www\.)[^\s/$.?#].\S*', caseSensitive: false);

    // Updated phoneRegex to ensure there must be spaces or other separators between digit groups
    final phoneRegex = RegExp(r'\b(\+?[0-9]{1,4}[-.\s]+)?(\(?\d{2,3}\)?[-.\s]+)?\d{3}[-.\s]+\d{3}[-.\s]+\d{3,4}\b');

    final document = html_parser.parse(htmlText);

    // Function to add anchor tags for matches
    void addAnchorTag(Node node, Match match, String hrefPrefix) {
      final textContent = node.text!;
      final newNodes = <Node>[];
      var lastIndex = 0;

      if (match.start > lastIndex) {
        newNodes.add(Text(textContent.substring(lastIndex, match.start)));
      }

      var matchedText = match.group(0)!;
      var hrefValue = matchedText;

      if (hrefPrefix.isEmpty && matchedText.startsWith('www.')) {
        hrefValue = 'https://$matchedText';  // Add https:// to href only
      }

      final anchor = Element.tag('a')
        ..attributes['href'] = '$hrefPrefix$hrefValue'
        ..text = matchedText;  // Keep the original text
      newNodes.add(anchor);

      lastIndex = match.end;

      if (lastIndex < textContent.length) {
        newNodes.add(Text(textContent.substring(lastIndex)));
      }

      // Replace the old text node with new nodes
      node.replaceWith(DocumentFragment()..nodes.addAll(newNodes));
    }

    // Process emails
    for (var element in document.body!.querySelectorAll('*')) {
      if (element.localName == 'a') continue;

      element.nodes.whereType<Text>().toList().forEach((node) {
        final textContent = node.text;
        textContent.replaceAllMapped(emailRegex, (match) {
          addAnchorTag(node, match, 'mailto:');
          return '';
        });
      });
    }

    // Process URLs
    for (var element in document.body!.querySelectorAll('*')) {
      if (element.localName == 'a') continue; // Skip existing <a> tags

      element.nodes.whereType<Text>().toList().forEach((node) {
        final textContent = node.text;
        textContent.replaceAllMapped(urlRegex, (match) {
          addAnchorTag(node, match, '');
          return '';
        });
      });
    }

    // Process phone numbers
    for (var element in document.body!.querySelectorAll('*')) {
      if (element.localName == 'a') continue; // Skip existing <a> tags

      element.nodes.whereType<Text>().toList().forEach((node) {
        final textContent = node.text;
        textContent.replaceAllMapped(phoneRegex, (match) {
          addAnchorTag(node, match, 'tel:');
          return '';
        });
      });
    }

    return document.body!.innerHtml;
  }

  static String stripHtml(String htmlText) {
    return htmlText.replaceAll(
        RegExp(r'<(?!img\b)[^>]*>', caseSensitive: false),
        ''
    );
  }

  static bool isHtmlEmptyOrNull(String? htmlText) {
    if(htmlText == null) {
      return true;
    }

    return htmlText.replaceAll(
        RegExp(r'<(?!img\b)[^>]*>', caseSensitive: false),
        ''
    ).trim().isEmpty;
  }

  static Future<String> storeImagesToOccasion(String oldHtml, String newHtml, int occasionId, { maxWidth = 1200 }) async {
    // Parse the old and new HTML documents.
    final oldDocument = html_parser.parse(oldHtml);
    final newDocument = html_parser.parse(newHtml);

    // Collect image src values from the old HTML.
    List<String> oldImageUrls = oldDocument.getElementsByTagName('img')
        .map((img) => img.attributes['src'] ?? '')
        .where((src) => src.isNotEmpty && !(src.startsWith(jpegBase64Prefix) || src.startsWith(pngBase64Prefix)))
        .toList();

    // Process each image in the new HTML.
    List<Element> newImages = newDocument.getElementsByTagName('img');
    for (var image in newImages) {
      String? src = image.attributes['src'];
      if (src == null || src.isEmpty) continue;

      bool isBase64 = src.startsWith(jpegBase64Prefix) || src.startsWith(pngBase64Prefix);

      // For non-base64 images, check if it has already been uploaded.
      bool alreadyUploaded = false;
      if (!isBase64) {
        alreadyUploaded = await DbImages.isImageUploaded(src, occasionId);
        if (alreadyUploaded) continue;
      }

      Uint8List imageData;
      if (isBase64) {
        // Decode the base64 image data.
        String base64Data = src.contains(jpegBase64Prefix)
            ? src.replaceFirst(jpegBase64Prefix, '')
            : src.replaceFirst(pngBase64Prefix, '');
        imageData = base64.decode(base64Data);
      } else {
        // For linked images, fetch the image data from the URL.
        var fetched = await fetchImageData(src);
        if(fetched == null) {
          continue;
        }
        imageData = fetched;
      }


      var compressedImageData = await ImageCompressionHelper.compress(imageData, maxWidth);
      // Upload the compressed image and get the public URL.
      final publicUrl = await DbImages.uploadImage(compressedImageData, occasionId, null);
      // Update the image tag's src attribute.
      image.attributes['src'] = publicUrl;
    }

    // Collect image src values from the new HTML after processing.
    List<String> newImageUrls = newDocument.getElementsByTagName('img')
        .map((img) => img.attributes['src'] ?? '')
        .where((src) => src.isNotEmpty)
        .toList();

    // Determine which images have been removed (present in old HTML but not in new HTML).
    List<String> removedImages = oldImageUrls.where((oldUrl) => !newImageUrls.contains(oldUrl)).toList();
    // Clean up the removed images from occasion storage.
    await DbImages.cleanupRemovedImages(removedImages, occasionId);

    return newDocument.outerHtml;
  }

  static Future<Uint8List?> fetchImageData(String src) async {
    final client = http.Client();
    try {
      final response = await client.get(Uri.parse(src));
      if (response.statusCode == 200) {
        return response.bodyBytes;
      } else {
        print('Error fetching image: ${response.statusCode}');
        return null;
      }
    } catch (e) {
      print('Error fetching image: $e');
      return null;
    } finally {
      client.close();
    }
  }
}