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


        debugPrint('onDragDone:');
        for (final file in detail.files) {
          debugPrint('  ${file.path} ${file.name}'
              '  ${await file.lastModified()}'
              '  ${await file.length()}'
              '  ${file.mimeType}');
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
        height: 200,
        width: 200,
        color: _dragging ? Colors.blue.withOpacity(0.4) : Colors.black26,
        child: Stack(
          children: [
            if (file == null)
              Center(child: Text("Drop files here").tr())
            else
              Text(file?.path??"")
          ],
        ),
      ),
    );
  }
}