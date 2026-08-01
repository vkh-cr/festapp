import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/users/user_info_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/services/app_logger.dart';
import 'package:fstapp/components/html/html_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:fstapp/components/html/html_editor_widget.dart';
import 'package:quill_html_editor/quill_html_editor.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/news/news_strings.dart';
import 'package:fstapp/components/news/news_send_confirmation_dialog.dart';
import 'package:fstapp/components/news/news_notification_audience_selector.dart';

@RoutePage()
class NewsFormPage extends StatefulWidget {
  static const ROUTE = "newsForm";

  const NewsFormPage({super.key});

  @override
  _NewsFormPageState createState() => _NewsFormPageState();
}

class _NewsFormPageState extends State<NewsFormPage> {
  final _formKey = GlobalKey<FormBuilderState>();
  late QuillEditorController _controller;
  NewsNotificationAudience? _audience;
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
    _currentUser = RightsService.currentUser();
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

  Future<void> _sendPressed({bool isTest = false, bool process = false}) async {
    var htmlContent = await _controller.getText();
    if (!mounted) return;
    htmlContent = HtmlHelper.removeColor(htmlContent);
    if (process == true) {
      htmlContent = HtmlHelper.detectAndReplaceLinks(htmlContent);
    }
    if (htmlContent.isNotEmpty) {
      final heading =
          _formKey.currentState?.fields["heading"]?.value as String?;
      final headingForNotification = heading?.trim().isNotEmpty == true
          ? heading!.trim()
          : _currentUser!.name;
      final sendsNotification =
          isTest || _audience != NewsNotificationAudience.none;
      final sendsToSelf = isTest ||
          _audience == NewsNotificationAudience.self ||
          AppConfig.isPublicNotificationSendingDisabled;

      if (sendsNotification) {
        final confirmed = await showDialog<bool>(
          context: context,
          builder: (dialogContext) => NewsSendConfirmationDialog(
            isTest: isTest,
            isSelfOnly: sendsToSelf,
            recipientIdentity: _currentUserIdentity,
            heading: headingForNotification ?? '',
            htmlContent: htmlContent,
          ),
        );
        if (confirmed != true || !mounted) return;
      }

      var toReturn = {
        "content": htmlContent,
        "heading": heading,
        "heading_default": _currentUser!.name,
        // A test always means a real push to the current user, independently
        // of the audience chosen for the eventual published news item.
        "with_notification": sendsNotification,
        if (sendsToSelf) "to": [AuthService.currentUserId()],
        if (isTest) "add_to_news": false,
      };
      Navigator.pop(context, toReturn);
    } else {
      AppLogger.debug('Content is required');
    }
  }

  Future<void> _processAndSendTest() async {
    _sendPressed(isTest: true, process: true);
  }

  String get _currentUserIdentity {
    final name = _currentUser?.toFullNameString() ?? '';
    final email = _currentUser?.email ?? '';
    if (name.isNotEmpty && email.isNotEmpty) return '$name · $email';
    if (name.isNotEmpty) return name;
    return email;
  }

  String get _publishButtonText => switch (_audience) {
        NewsNotificationAudience.none => NewsStrings.publishWithoutNotification,
        NewsNotificationAudience.self => NewsStrings.publishAndSendSelf,
        NewsNotificationAudience.everyone => NewsStrings.publishAndSendEveryone,
        null => NewsStrings.selectRecipients,
      };

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          centerTitle: true,
          title: Text(NewsStrings.createNews),
          leading: BackButton(
            onPressed: () => RouterService.popOrHome(context),
          ),
        ),
        body: Align(
          alignment: Alignment.topCenter,
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
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
                              labelText: NewsStrings.heading,
                              hintText: _currentUser?.name,
                              floatingLabelBehavior:
                                  FloatingLabelBehavior.always),
                        ),
                        NewsNotificationAudienceSelector(
                          selected: _audience,
                          currentUserIdentity: _currentUserIdentity,
                          allowEveryone:
                              !AppConfig.isPublicNotificationSendingDisabled,
                          onChanged: (value) =>
                              setState(() => _audience = value),
                        ),
                        const SizedBox(height: 12),
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
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: IntrinsicWidth(
              child: Row(
                children: [
                  ButtonsHelper.bottomBarButton(
                    onPressed: _stornoPressed,
                    text: CommonStrings.storno,
                  ),
                  ButtonsHelper.bottomBarButton(
                    onPressed: _processAndSendTest,
                    text: NewsStrings.sendTestToMe,
                  ),
                  ButtonsHelper.bottomBarButton(
                    onPressed: _audience == null
                        ? null
                        : () => _sendPressed(process: true),
                    text: _publishButtonText,
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
