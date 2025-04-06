import 'package:cross_file/cross_file.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/drop_file.dart';

class ImageArea extends StatefulWidget {
  /// If an image URL is provided, the image is shown.
  /// Otherwise the drop zone is displayed.
  final String? imageUrl;

  /// Called when a file is dropped/selected.
  final ValueChanged<XFile> onFileSelected;

  /// Called when the user wants to remove the current image.
  final VoidCallback onRemove;

  /// Optional hint text to display above the drop zone.
  final String? hint;

  const ImageArea({
    Key? key,
    required this.imageUrl,
    required this.onFileSelected,
    required this.onRemove,
    this.hint,
  }) : super(key: key);

  @override
  _ImageAreaState createState() => _ImageAreaState();
}

class _ImageAreaState extends State<ImageArea> {
  XFile? _selectedFile;

  @override
  Widget build(BuildContext context) {
    if (widget.imageUrl != null && widget.imageUrl!.isNotEmpty) {
      return Stack(
        clipBehavior: Clip.none,
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(12),
            child: Image.network(
              widget.imageUrl!,
              height: 200,
              width: double.infinity,
              fit: BoxFit.contain,
            ),
          ),
          // Remove button directly on top-right of the image.
          Positioned(
            top: 0,
            right: 0,
            child: IconButton(
              icon: Icon(Icons.close, color: ThemeConfig.redColor(context)),
              onPressed: widget.onRemove,
              padding: const EdgeInsets.all(4),
              constraints: const BoxConstraints(),
            ),
          ),
        ],
      );
    } else {
      return DropFile(
        hint: widget.hint,
        onFilePathChanged: (file) {
          setState(() {
            _selectedFile = file;
          });
          widget.onFileSelected(file);
        },
      );
    }
  }
}
