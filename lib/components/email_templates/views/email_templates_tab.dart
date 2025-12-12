
import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/components/email_templates/email_template_model.dart';
import 'package:fstapp/components/email_templates/db_email_templates.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/components/email_templates/views/email_template_card.dart';

import 'email_templates_settings_page.dart';

class EmailTemplatesTab extends StatefulWidget {
  const EmailTemplatesTab({super.key});

  @override
  _EmailTemplatesTabState createState() => _EmailTemplatesTabState();
}

class _EmailTemplatesTabState extends State<EmailTemplatesTab> {
  EmailTemplatesResponse? emailTemplatesResponse;
  List<EmailTemplateModel> _templates = [];
  String? occasionLink;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (occasionLink == null && context.routeData.params.isNotEmpty) {
      occasionLink = context.routeData.params.get(AppRouter.linkFormatted, null);
    }
    loadData();
  }

  Future<void> loadData() async {
    if(occasionLink != null) {
      emailTemplatesResponse =
      await DbEmailTemplates.getAllEmailTemplatesViaOccasionLink(occasionLink!);
    }

    _templates = emailTemplatesResponse!.templates;
    setState(() {});
  }

  Future<void> _handleEdit(EmailTemplateModel template) async {
    await DialogHelper.showCustomDialog(
      context: context,
      child: EmailTemplateSettingsPage(template: template, emailTemplatesResponse: emailTemplatesResponse!,),
    );
    await loadData();
  }

  /// Determines the meta title based on the individual template's values.
  String _getMetaTitle(EmailTemplateModel template) {
    if (template.occasion != null) {
      return emailTemplatesResponse!.occasion.title!;
    } else if (template.unit != null) {
      return emailTemplatesResponse!.unit.title!;
    } else if (template.organization != null) {
      return emailTemplatesResponse!.organization.title!;
    } else {
      return 'default'.tr();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: CustomScrollView(
          slivers: [
            // Header with title only.
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(
                  "Email Templates".tr(),
                  style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                ),
              ),
            ),
            const SliverToBoxAdapter(child: SizedBox(height: 16)),
            // Grid of email template cards using a max cross-axis extent for responsiveness.
            SliverPadding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              sliver: SliverGrid(
                gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                  maxCrossAxisExtent: 250,
                  mainAxisExtent: 150,
                  mainAxisSpacing: 10,
                  crossAxisSpacing: 10,
                  childAspectRatio: 250 / 150, // Adjust as needed.
                ),
                delegate: SliverChildBuilderDelegate(
                      (context, index) {
                    final template = _templates[index];
                    final metaTitle = _getMetaTitle(template);
                    return EmailTemplateCard(
                      template: template,
                      onEdit: () => _handleEdit(template),
                      contextTitle: metaTitle,
                    );
                  },
                  childCount: _templates.length,
                ),
              ),
            ),
            const SliverToBoxAdapter(child: SizedBox(height: 64)),
          ],
        ),
      ),
    );
  }
}
