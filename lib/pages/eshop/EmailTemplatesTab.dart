import 'dart:ui';

import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/EmailTemplateModel.dart';
import 'package:fstapp/dataServices/DbEmailTemplates.dart';
import 'package:fstapp/pages/eshop/EmailTemplateSettingsPage.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ResponsiveService.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/widgets/EmailTemplateCard.dart';

class EmailTemplatesTab extends StatefulWidget {
  const EmailTemplatesTab({Key? key}) : super(key: key);

  @override
  _EmailTemplatesTabState createState() => _EmailTemplatesTabState();
}

class _EmailTemplatesTabState extends State<EmailTemplatesTab> {
  List<EmailTemplateModel> _templates = [];
  String? formLink;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (formLink == null && context.routeData.pathParams.isNotEmpty) {
      formLink = context.routeData.pathParams.getString("formLink");
    }
    loadData();
  }

  Future<void> loadData() async {
    _templates = await DbEmailTemplates.getAllEmailTemplatesViaFormLink(formLink!);
    setState(() {});
  }

  Future<void> _handleEdit(EmailTemplateModel template) async {
    await DialogHelper.showCustomDialog(
      context: context,
      child: EmailTemplateSettingsPage(template: template),
      barrierDismissible: false,
    );
    // Reload the email templates after editing.
    await loadData();
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
                  maxCrossAxisExtent: 250, // Cards will be at most 250 pixels wide.
                  mainAxisSpacing: 10,
                  crossAxisSpacing: 10,
                  childAspectRatio: 250 / 150, // Adjust as needed.
                ),
                delegate: SliverChildBuilderDelegate(
                      (context, index) {
                    final template = _templates[index];
                    return EmailTemplateCard(
                      template: template,
                      onEdit: () => _handleEdit(template),
                    );
                  },
                  childCount: _templates.length,
                ),
              ),
            ),
            // Extra space at the bottom.
            const SliverToBoxAdapter(child: SizedBox(height: 64)),
          ],
        ),
      ),
    );
  }
}
