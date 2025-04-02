import 'dart:ui';

import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/AppRouter.dart';
import 'package:fstapp/dataModels/EmailTemplateModel.dart';
import 'package:fstapp/dataServices/DbEmailTemplates.dart';
import 'package:fstapp/pages/eshop/EmailTemplateSettingsPage.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/widgets/EmailTemplateCard.dart';

class EmailTemplatesTab extends StatefulWidget {
  const EmailTemplatesTab({super.key});

  @override
  _EmailTemplatesTabState createState() => _EmailTemplatesTabState();
}

class _EmailTemplatesTabState extends State<EmailTemplatesTab> {
  EmailTemplatesResponse? emailTemplatesResponse;
  List<EmailTemplateModel> _templates = [];
  String? formLink;
  String? occasionLink;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (formLink == null && context.routeData.params.isNotEmpty) {
      formLink = context.routeData.params.get("formLink", null);
      occasionLink = context.routeData.params.get(AppRouter.linkFormatted, null);
    }
    loadData();
  }

  Future<void> loadData() async {
    if(formLink != null){
      emailTemplatesResponse =
      await DbEmailTemplates.getAllEmailTemplatesViaFormLink(formLink!);
    } else if(occasionLink != null) {
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
