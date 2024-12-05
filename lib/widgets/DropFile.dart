import 'package:desktop_drop/desktop_drop.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:cross_file/cross_file.dart';

class DropFile extends StatefulWidget {
  const DropFile({Key? key, required this.onFilePathChanged}) : super(key: key);

  final void Function(XFile) onFilePathChanged;

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
          color: _dragging ? Colors.blue.withOpacity(0.2) : Colors.grey.shade200,
          border: Border.all(
            color: _dragging ? Colors.blue : Colors.grey.shade400,
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
                color: _dragging ? Colors.blue : Colors.grey,
              ),
              const SizedBox(height: 12),
              Text(
                "Drop file here".tr(),
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                  color: _dragging ? Colors.blue : Colors.black54,
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
                  color: Colors.black87,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
