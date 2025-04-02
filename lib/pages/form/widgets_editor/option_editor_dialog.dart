import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/pages/utility/HtmlEditorPage.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:fstapp/widgets/standard_dialog.dart';

class OptionDetailEditorDialog extends StatefulWidget {
  final FormOptionModel option;
  const OptionDetailEditorDialog({super.key, required this.option});

  @override
  _OptionDetailEditorDialogState createState() => _OptionDetailEditorDialogState();
}

class _OptionDetailEditorDialogState extends State<OptionDetailEditorDialog> {
  late String _description;

  @override
  void initState() {
    super.initState();
    _description = widget.option.description ?? "";
  }

  Future<void> _editContent() async {
    RouterService.navigatePageInfo(
      context,
      HtmlEditorRoute(content: {HtmlEditorPage.parContent: _description}),
    ).then((value) {
      if (value != null) {
        setState(() {
          _description = value as String;
          widget.option.description = _description;
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return StandardDialog(
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const SizedBox(height: 32),
            Text(
              "Description".tr(),
              style: Theme.of(context)
                  .textTheme
                  .titleLarge
                  ?.copyWith(fontWeight: FontWeight.w600),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            HtmlView(
              html: _description,
              isSelectable: true,
            ),
            const SizedBox(height: 16),
            Center(
              child: ElevatedButton(
                onPressed: _editContent,
                child: Text("Edit content".tr()),
              ),
            ),
            const SizedBox(height: 24),
          ],
        ),
      ),
    );
  }
}
