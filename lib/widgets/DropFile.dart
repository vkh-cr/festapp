import 'package:desktop_drop/desktop_drop.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:cross_file/cross_file.dart';
import 'package:fstapp/themeConfig.dart';

class DropFile extends StatefulWidget {
  /// Called when a file is dropped/selected.
  final void Function(XFile) onFilePathChanged;

  /// Optional hint text (e.g. what files, dimensions, etc.) displayed above the upload icon.
  final String? hint;

  const DropFile({
    Key? key,
    required this.onFilePathChanged,
    this.hint,
  }) : super(key: key);

  @override
  _DropFileState createState() => _DropFileState();
}

class _DropFileState extends State<DropFile> {
  XFile? file;
  bool _dragging = false;
  Offset? offset;

  @override
  Widget build(BuildContext context) {
    return DropTarget(
      onDragDone: (detail) async {
        setState(() {
          file = detail.files.last;
          widget.onFilePathChanged(file!);
        });

        debugPrint('File dropped:');
        for (final droppedFile in detail.files) {
          debugPrint(
            '  ${droppedFile.path} ${droppedFile.name} '
                '  ${await droppedFile.lastModified()} '
                '  ${await droppedFile.length()} '
                '  ${droppedFile.mimeType}',
          );
        }
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
              Text(
                "Drop file here".tr(),
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                  color: _dragging
                      ? Colors.blue
                      : ThemeConfig.grey600(context),
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
    );
  }
}