import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/DataService.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
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
  UserInfoModel? _currentUser;

  @override
  void initState() {
    super.initState();
    _controller = QuillEditorController();
  }

  @override
  void didChangeDependencies() async {
    super.didChangeDependencies();
    _currentUser = await DataService.getCurrentUserInfo();
    setState(() {});
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

  Future<void> _sendPressed({bool isTest = false}) async {
    var htmlContent = await _controller.getText();
    htmlContent = htmlContent.removeBackgroundColor();
    if (htmlContent.isNotEmpty) {
      var toReturn = {
        "content": htmlContent,
        "heading": _formKey.currentState?.fields["heading"]!.value,
        "heading_default": _currentUser!.name,
        "with_notification": _formKey.currentState?.fields["with_notification"]!.value,
        if (isTest) "to": [DataService.currentUserId()],
        if (isTest) "add_to_news": false,
      };
      Navigator.pop(context, toReturn);
    } else {
      debugPrint('Content is required');
    }
  }

  Future<void> _testPressed() async {
    _sendPressed(isTest: true);
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
                        FormBuilderTextField(
                          name: "heading",
                          focusNode: _toFocusNode,
                          decoration: InputDecoration(
                              labelText: "Heading".tr(),
                              hintText: _currentUser?.name,
                              floatingLabelBehavior: FloatingLabelBehavior.always
                          ),
                        ),
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
                onPressed: _testPressed,
                text: "Test".tr(),
              ),
              ButtonsHelper.bottomBarButton(
                onPressed: () => _sendPressed(),
                text: "Send".tr(),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
