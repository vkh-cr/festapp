import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/data/DataService.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:fstapp/widgets/HtmlEditorWidget.dart';
import 'package:quill_html_editor/quill_html_editor.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:easy_localization/easy_localization.dart';

class NewsFormPage extends StatefulWidget {
  static const ROUTE = "newsForm";
  const NewsFormPage({Key? key}) : super(key: key);

  @override
  _NewsFormPageState createState() => _NewsFormPageState();
}

class _NewsFormPageState extends State<NewsFormPage> {
  final _formKey = GlobalKey<FormBuilderState>();
  late QuillEditorController _controller;
  final bool _sendWithNotification = true;
  final FocusNode _toFocusNode = FocusNode();

  @override
  void initState() {
    super.initState();
    _controller = QuillEditorController();
  }

  @override
  void dispose() {
    _controller.dispose();
    _toFocusNode.dispose();
    super.dispose();
  }

  void _stornoPressed() {
    Navigator.pop(context);
  }

  void _sendPressed() async {
      var htmlContent = await _controller.getText();
      if (htmlContent.isNotEmpty) {

        var currentUser = await DataService.getCurrentUserInfo();
        var toReturn = {
          "to": null,
          "content": htmlContent,
          "heading": currentUser.name,
          "with_notification": _formKey.currentState?.fields["with_notification"]!.value
        };
        Navigator.pop(context, toReturn);
      } else {
        debugPrint('Content is required');
      }
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          centerTitle: true,
          title: const Text("Create news").tr(),
          leading: BackButton(
            onPressed: () => RouterService.goBackOrHome(context),
          ),
        ),
        body: Align(
          alignment: Alignment.topCenter,
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: appMaxWidth),
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 12.0),
                  child: FormBuilder(
                    key: _formKey,
                    child: Column(
                      children: [
                        // FormBuilderTextField(
                        //   name: 'to',
                        //   focusNode: _toFocusNode,
                        //   decoration: const InputDecoration(
                        //     labelText: 'To',
                        //   ),
                        // ),
                        // if (_isToFieldFocused)
                        //   const Padding(
                        //     padding: EdgeInsets.symmetric(vertical: 8.0),
                        //     child: Text(
                        //       "If the 'To' field remains empty, the message will be sent to all.",
                        //       style: TextStyle(color: Colors.grey),
                        //     ),
                        //   ),
                        FormBuilderCheckbox(
                          name: 'with_notification',
                          initialValue: _sendWithNotification,
                          title: const Text("Send with notification").tr(),
                        ),
                      ],
                    ),
                  ),
                ),
                HtmlEditorWidget(
                  initialContent: '',
                  controller: _controller,
                ),
              ],
            ),
          ),
        ),
        bottomNavigationBar: Container(
          width: double.maxFinite,
          color: Colors.grey.shade200,
          child: Wrap(
            alignment: WrapAlignment.end,
            children: [
              ButtonsHelper.bottomBarButton(
                onPressed: _stornoPressed,
                text: "Storno".tr(),
              ),
              ButtonsHelper.bottomBarButton(
                onPressed: _sendPressed,
                text: "Send".tr(),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
