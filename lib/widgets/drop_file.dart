import 'package:desktop_drop/desktop_drop.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:cross_file/cross_file.dart';
import 'package:fstapp/services/platform_helper.dart';
import 'package:fstapp/theme_config.dart';

class DropFile extends StatefulWidget {
  /// Called when a file is dropped/selected.
  final void Function(XFile) onFilePathChanged;

  /// Optional hint text (e.g. what files, dimensions, etc.) displayed above the upload icon.
  final String? hint;

  /// List of allowed file extensions (e.g. ['jpg', 'png']).
  final List<String>? allowedExtensions;

  const DropFile({
    super.key,
    required this.onFilePathChanged,
    this.hint,
    this.allowedExtensions,
  });

  @override
  _DropFileState createState() => _DropFileState();
}

class _DropFileState extends State<DropFile> {
  XFile? file;
  bool _dragging = false;
  Offset? offset;

  Future<void> _pickFile() async {
    if (!PlatformHelper.isWeb) return;

    FilePickerResult? result = await FilePicker.platform.pickFiles(
      type: widget.allowedExtensions != null ? FileType.custom : FileType.any,
      allowedExtensions: widget.allowedExtensions,
    );

    if (result != null && result.files.isNotEmpty) {
      // On web bytes are available, path might not be.
      // cross_file XFile.fromData is useful for web if we have bytes.
      // FilePicker 'files' on web has bytes.
      final picked = result.files.first;
      XFile xFile;
      if (picked.bytes != null) {
         xFile = XFile.fromData(picked.bytes!, name: picked.name);
      } else {
         // Fallback if path is available (e.g. not web, but check isWeb above)
         xFile = XFile(picked.path!, name: picked.name);
      }

      setState(() {
        file = xFile;
        widget.onFilePathChanged(file!);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    bool isClickable = PlatformHelper.isWeb;

    return DropTarget(
      onDragDone: (detail) async {
        // Basic extension check if needed, though usually dragdrop allows any.
        // Enforce extensions here if needed
        var droppedFile = detail.files.last;
        if (widget.allowedExtensions != null) {
          final ext = droppedFile.name.split('.').last.toLowerCase();
          if (!widget.allowedExtensions!.contains(ext)) {
            return; 
          }
        }

        setState(() {
          file = droppedFile;
          widget.onFilePathChanged(file!);
        });
      },
      onDragUpdated: (details) {
        setState(() {
          offset = details.localPosition;
        });
      },
      onDragEntered: (detail) {
        setState(() {
          _dragging = true;
          offset = detail.localPosition;
        });
      },
      onDragExited: (detail) {
        setState(() {
          _dragging = false;
          offset = null;
        });
      },
      child: InkWell(
        onTap: isClickable ? _pickFile : null,
        borderRadius: BorderRadius.circular(12),
        child: Container(
          height: 250,
          width: double.infinity,
          margin: const EdgeInsets.symmetric(vertical: 16.0, horizontal: 8.0),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            color: _dragging
                ? Colors.blue.withOpacity(0.2)
                : ThemeConfig.grey200(context),
            border: Border.all(
              color: _dragging ? Colors.blue : ThemeConfig.grey380(context),
              width: 2,
            ),
          ),
          child: Center(
            child: file == null
                ? Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        Icons.cloud_upload,
                        size: 50,
                        color: _dragging
                            ? Colors.blue
                            : ThemeConfig.grey600(context),
                      ),
                      const SizedBox(height: 12),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20.0),
                        child: Text(
                          isClickable
                              ? "Drop file here or click to upload".tr()
                              : "Drop file here".tr(),
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w600,
                            color: _dragging
                                ? Colors.blue
                                : ThemeConfig.grey600(context),
                          ),
                        ),
                      ),
                      if (widget.hint != null)
                        Padding(
                          padding: const EdgeInsets.only(top: 8.0),
                          child: Text(
                            widget.hint!,
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.w500,
                              color: _dragging
                                  ? Colors.blue
                                  : ThemeConfig.grey600(context),
                            ),
                          ),
                        ),
                    ],
                  )
                : Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        Icons.insert_drive_file,
                        size: 50,
                        color: Colors.green,
                      ),
                      const SizedBox(height: 12),
                      Text(
                        file!.name,
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: 14,
                          fontWeight: FontWeight.w500,
                          color: ThemeConfig.grey800(context),
                        ),
                      ),
                    ],
                  ),
          ),
        ),
      ),
    );
  }
}
