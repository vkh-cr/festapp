import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/components/email_templates/email_template_model.dart';
import 'package:fstapp/components/email_templates/db_email_templates.dart';
import 'package:fstapp/components/email_templates/email_templates_strings.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/components/_shared/common_strings.dart';

import 'package:fstapp/components/html/html_editor_page.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/components/html/html_view.dart';
import 'package:fstapp/styles/styles_config.dart';

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
      widget.template.occasion = widget.emailTemplatesResponse.occasion?.id;
      widget.template.unit = widget.emailTemplatesResponse.unit.id;
      widget.template.organization =
          widget.emailTemplatesResponse.organization.id;

      await DbEmailTemplates.updateEmailTemplate(widget.template);
      ToastHelper.Show(
          context, "${CommonStrings.saved}: ${widget.template.subject ?? ''}");
      Navigator.of(context).pop();
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
            return Text(
              "{{${sub.code}}}: ${sub.description}",
              style: const TextStyle(fontSize: 14),
            );
          }
          return const SizedBox();
        }).toList(),
      );
    } else if (subs is String) {
      return Text(
        subs,
        style: const TextStyle(fontSize: 14),
        maxLines: 2,
        overflow: TextOverflow.ellipsis,
      );
    } else if (subs is Map<String, dynamic>) {
      final subsText = subs.entries
          .map((entry) => "${entry.key}: ${entry.value}".tr())
          .join("\n");
      return Text(
        subsText,
        style: const TextStyle(fontSize: 14),
        maxLines: 3,
        overflow: TextOverflow.ellipsis,
      );
    }
    return const SizedBox();
  }

  @override
  Widget build(BuildContext context) {
    // Get usage details from the email template (read-only info).
    final usageDetails = widget.template.getUsageDetails();
    return AlertDialog(
      title: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Expanded(
            child: Text(
              usageDetails['title'] ?? '',
              style: const TextStyle(fontSize: 20),
            ),
          ),
          IconButton(
            icon: const Icon(Icons.close),
            onPressed: () => Navigator.of(context).pop(),
          )
        ],
      ),
      contentPadding: const EdgeInsets.fromLTRB(24, 20, 24, 0),
      actionsPadding: const EdgeInsets.fromLTRB(16, 0, 16, 12),
      content: SizedBox(
        width: StylesConfig.formMaxWidth, // Use max available width in dialog
        child: Form(
          key: _formKey,
          child: ListView(
            shrinkWrap: true,
            children: [
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
                  if ((widget.template.occasion != null && widget.template.occasion == widget.emailTemplatesResponse.occasion?.id) ||
                          (widget.template.unit != null && widget.template.unit == widget.emailTemplatesResponse.unit.id && widget.emailTemplatesResponse.occasion == null))
                        Padding(
                          padding: const EdgeInsets.only(left: 8.0),
                          child: ElevatedButton(
                            style: ElevatedButton.styleFrom(
                              backgroundColor: ThemeConfig.redColor(context),
                              foregroundColor: Colors.white,
                            ),
                            onPressed: () async {
                              final confirmed = await DialogHelper.showConfirmationDialog(
                                context,
                                EmailTemplatesStrings.resetConfirmTitle,
                                EmailTemplatesStrings.resetConfirmContent,
                                confirmButtonMessage: EmailTemplatesStrings.resetToDefault,
                              );
                              
                              if (confirmed == true) {
                                await DbEmailTemplates.deleteEntityEmailTemplate(
                                  occasionId: widget.emailTemplatesResponse.occasion?.id,
                                  unitId: widget.emailTemplatesResponse.occasion == null ? widget.emailTemplatesResponse.unit.id : null,
                                  code: widget.template.code!,
                                );

                                if (context.mounted) {
                                  Navigator.of(context).pop();
                                }
                              }
                            },
                            child: Text(EmailTemplatesStrings.resetToDefault),
                          ),
                        ),
                ],
              ),
              const SizedBox(height: 16),
            ],
          ),
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: Text(CommonStrings.storno),
        ),
        ElevatedButton(
          onPressed: _saveSettings,
          child: Text(CommonStrings.save),
        ),
      ],
    );
  }
}
