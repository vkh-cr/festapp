import 'package:cross_file/cross_file.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/drop_file.dart';

/// onFileSelected now returns the new public URL
typedef FileUploadCallback = Future<String?> Function(XFile file);

class ImageArea extends StatefulWidget {
  /// Initial image URL
  final String? imageUrl;

  /// Called when a file is dropped/selected. Must return the uploaded image's URL.
  final FileUploadCallback onFileSelected;

  /// Called when the user wants to remove the current image.
  final VoidCallback onRemove;

  /// Optional hint text to display above the drop zone.
  final String? hint;

  /// Controls if the user can change or remove the image.
  final bool enabled;

  const ImageArea({
    super.key,
    required this.imageUrl,
    required this.onFileSelected,
    required this.onRemove,
    this.hint,
    this.enabled = true,
  });

  @override
  _ImageAreaState createState() => _ImageAreaState();
}

class _ImageAreaState extends State<ImageArea> {
  String? _currentUrl;
  bool _uploading = false;

  @override
  void initState() {
    super.initState();
    _currentUrl = widget.imageUrl;
  }

  @override
  void didUpdateWidget(ImageArea old) {
    super.didUpdateWidget(old);
    // keep in sync if parent gives a new URL
    if (widget.imageUrl != old.imageUrl) {
      _currentUrl = widget.imageUrl;
    }
  }

  Future<void> _handleFileSelected(XFile file) async {
    setState(() {
      _uploading = true;
    });
    try {
      final uploadedUrl = await widget.onFileSelected(file);
      setState(() {
        _currentUrl = uploadedUrl;
      });
    } catch (e) {
      // you might want to show an error here
    } finally {
      setState(() {
        _uploading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    // If we're uploading, show a spinner
    if (_uploading) {
      return const SizedBox(
        height: 200,
        child: Center(child: CircularProgressIndicator()),
      );
    }

    // If we have a URL (either initial or newly uploaded), show it
    if (_currentUrl != null && _currentUrl!.isNotEmpty) {
      return Stack(
        clipBehavior: Clip.none,
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(12),
            child: Image.network(
              _currentUrl!,
              height: 200,
              width: double.infinity,
              fit: BoxFit.contain,
            ),
          ),
          Positioned(
            top: 0,
            right: 0,
            child: IconButton(
              icon: Icon(Icons.close, color: ThemeConfig.redColor(context)),
              // Set onPressed to null to disable the button
              onPressed: widget.enabled
                  ? () {
                widget.onRemove();
                setState(() => _currentUrl = null);
              }
                  : null,
              padding: const EdgeInsets.all(4),
              constraints: const BoxConstraints(),
            ),
          ),
        ],
      );
    }

    // Otherwise, show the drop/select area.
    // Wrap with IgnorePointer and Opacity to disable interaction and give visual feedback.
    return IgnorePointer(
      ignoring: !widget.enabled,
      child: Opacity(
        opacity: widget.enabled ? 1.0 : 0.5,
        child: DropFile(
          hint: widget.hint,
          onFilePathChanged: (file) => _handleFileSelected(file),
        ),
      ),
    );
  }
}