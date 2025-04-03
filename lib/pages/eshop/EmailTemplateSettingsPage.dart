import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/EmailTemplateModel.dart';
import 'package:fstapp/dataServices/DbEmailTemplates.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/utility/HtmlEditorPage.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HtmlView.dart';

class EmailTemplateSettingsPage extends StatefulWidget {
  final EmailTemplateModel template;
  final EmailTemplatesResponse emailTemplatesResponse;

  const EmailTemplateSettingsPage({
    super.key,
    required this.template,
    required this.emailTemplatesResponse,
  });

  @override
  _EmailTemplateSettingsPageState createState() =>
      _EmailTemplateSettingsPageState();
}

class _EmailTemplateSettingsPageState extends State<EmailTemplateSettingsPage> {
  final _formKey = GlobalKey<FormState>();
  late String? _subject;
  late String? _htmlContent;
  bool _isSendingTestEmail = false;

  @override
  void initState() {
    super.initState();
    _subject = widget.template.subject;
    _htmlContent = widget.template.html;
  }

  Future<void> _saveSettings() async {
    if (_formKey.currentState?.validate() ?? false) {
      _formKey.currentState!.save();
      widget.template.subject = _subject;
      widget.template.html = _htmlContent;

      // Set the integer fields from the emailTemplatesResponse if available.
      widget.template.occasion = widget.emailTemplatesResponse.occasion.id;
      widget.template.unit = widget.emailTemplatesResponse.unit.id;
      widget.template.organization =
          widget.emailTemplatesResponse.organization.id;

      await DbEmailTemplates.updateEmailTemplate(widget.template);
      ToastHelper.Show(
          context, "${"Saved".tr()}: ${widget.template.subject ?? ''}");
      Navigator.of(context).pop();
    }
  }

  Future<void> _sendTestEmail() async {
    setState(() {
      _isSendingTestEmail = true;
    });

    // Retrieve usage details from the template.
    final usageDetails = widget.template.getUsageDetails();
    final subsMap = <String, String>{};

    if (usageDetails['subs'] is List) {
      for (var sub in usageDetails['subs']) {
        if (sub is EmailTemplateSub) {
          subsMap[sub.code] = sub.defaultValue;
        }
      }
    }

    try {
      await DbEmailTemplates.sendCustomEmail(widget.template, subsMap,
          RightsService.currentUser!.email!);
      ToastHelper.Show(context, "Test email sent successfully.".tr());
    } catch (e) {
      ToastHelper.Show(context, "Failed to send test email.".tr());
    } finally {
      if (mounted) {
        setState(() {
          _isSendingTestEmail = false;
        });
      }
    }
  }

  /// Builds a widget displaying the available substitutions.
  /// If [subs] is a list, each substitution is shown on its own line.
  Widget _buildSubsDefinition(dynamic subs) {
    if (subs == null) return const SizedBox();
    if (subs is List) {
      return Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: subs.map<Widget>((sub) {
          if (sub is EmailTemplateSub) {
            return SelectableText(
              "{{${sub.code}}}: ${sub.description}",
              style: const TextStyle(fontSize: 14),
              maxLines: 1,
            );
          }
          return const SizedBox();
        }).toList(),
      );
    } else if (subs is String) {
      return SelectableText(
        subs,
        style: const TextStyle(fontSize: 14),
        maxLines: 2,
      );
    } else if (subs is Map<String, dynamic>) {
      final subsText = subs.entries
          .map((entry) => "${entry.key}: ${entry.value}".tr())
          .join("\n");
      return SelectableText(
        subsText,
        style: const TextStyle(fontSize: 14),
        maxLines: 3,
      );
    }
    return const SizedBox();
  }

  @override
  Widget build(BuildContext context) {
    // Get usage details from the email template (read-only info).
    final usageDetails = widget.template.getUsageDetails();
    return Scaffold(
      appBar: AppBar(
        title: Text(
          usageDetails['title'] ?? '',
          maxLines: 1,
          style: TextStyle(
            color: Theme.of(context).appBarTheme.titleTextStyle?.color ??
                Colors.white,
          ),
        ),
        automaticallyImplyLeading: false,
        actions: [
          IconButton(
            icon: const Icon(Icons.close),
            onPressed: () => Navigator.of(context).pop(),
          )
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Form(
          key: _formKey,
          child: Center(
            child: ConstrainedBox(
              constraints:
              BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
              child: ListView(
                shrinkWrap: true,
                children: [
                  // Test email button at the top.
                  Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      ElevatedButton.icon(
                        onPressed: _isSendingTestEmail ? null : _sendTestEmail,
                        icon: _isSendingTestEmail
                            ? const SizedBox(
                          height: 16,
                          width: 16,
                          child: CircularProgressIndicator(
                            strokeWidth: 2,
                          ),
                        )
                            : const Icon(Icons.send),
                        label: Text("Send Test Email".tr()),
                      ),
                    ],
                  ),
                  const SizedBox(height: 16),
                  // Usage details container wrapped in a SelectionArea.
                  SelectionArea(
                    child: Container(
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: ThemeConfig.grey150(context),
                        borderRadius: BorderRadius.circular(8),
                        border: Border.all(color: ThemeConfig.grey300(context)),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            usageDetails['title'] ?? '',
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.bold),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            usageDetails['description'] ?? '',
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              fontSize: 14,
                              color: ThemeConfig.grey850(context),
                            ),
                          ),
                          const SizedBox(height: 8),
                          Text(
                            "Available Substitutions:".tr(),
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(
                                fontSize: 14, fontWeight: FontWeight.bold),
                          ),
                          const SizedBox(height: 4),
                          _buildSubsDefinition(usageDetails['subs']),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  // Subject text field.
                  TextFormField(
                    initialValue: _subject,
                    decoration: InputDecoration(labelText: "Subject".tr()),
                    validator: FormBuilderValidators.compose([
                      FormBuilderValidators.required(
                          errorText: "Subject is required".tr()),
                    ]),
                    onSaved: (val) => _subject = val,
                    style: TextStyle(
                      color: ThemeConfig.grey850(context),
                    ),
                  ),
                  const SizedBox(height: 16),
                  // Email Template Content Section header.
                  Container(
                    padding: const EdgeInsets.symmetric(vertical: 8.0),
                    decoration: BoxDecoration(
                      border: Border(
                        bottom: BorderSide(
                          color: ThemeConfig.grey300(context),
                          width: 1.0,
                        ),
                      ),
                    ),
                    child: Text(
                      "Email Template Content".tr(),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w600,
                        color: Theme.of(context)
                            .inputDecorationTheme
                            .labelStyle
                            ?.color ??
                            ThemeConfig.grey700(context).withOpacity(0.85),
                      ),
                    ),
                  ),
                  const SizedBox(height: 8),
                  // Preview of the HTML content.
                  HtmlView(
                    html: _htmlContent ?? "",
                    isSelectable: true,
                  ),
                  const SizedBox(height: 8),
                  Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      ElevatedButton(
                        onPressed: () async {
                          final result = await RouterService.navigatePageInfo(
                            context,
                            HtmlEditorRoute(
                              content: {HtmlEditorPage.parContent: _htmlContent},
                              occasionId: widget.template.occasion
                            ),
                          );
                          if (result != null && result is String) {
                            setState(() {
                              _htmlContent = result;
                            });
                          }
                        },
                        child: Text("Edit content".tr()),
                      ),
                    ],
                  ),
                  const SizedBox(height: 16),
                ],
              ),
            ),
          ),
        ),
      ),
      bottomNavigationBar: Container(
        padding:
        const EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
        color: Theme.of(context).appBarTheme.backgroundColor ??
            Theme.of(context).primaryColor,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(),
              child: Text("Storno".tr()),
            ),
            const SizedBox(width: 8),
            ElevatedButton(
              onPressed: _saveSettings,
              child: Text("Save".tr()),
            ),
          ],
        ),
      ),
    );
  }
}
