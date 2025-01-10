import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:fstapp/pages/HtmlEditorPage.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:easy_localization/easy_localization.dart';

@RoutePage()
class FormEditorTab extends StatefulWidget {
  const FormEditorTab({super.key});

  @override
  _FormEditorTabState createState() => _FormEditorTabState();
}

class _FormEditorTabState extends State<FormEditorTab> {
  FormModel? form;
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
    form = await DbEshop.getFormForEdit(formLink!);
    setState(() {});
  }

  Future<void> saveChanges() async {
    await DbEshop.updateForm(form!);
    ToastHelper.Show(context, "${"Saved".tr()}: ${form?.formKey}");
    Navigator.of(context).pop();
  }

  Future<void> deleteForm() async {
    final confirmation = await DialogHelper.showConfirmationDialogAsync(
      context,
      "Confirm removal".tr(),
      "Are you sure you want to delete this form?".tr(),
    );
    if (confirmation) {
      ToastHelper.Show(context, "${"Not supported yet".tr()}: ${form?.formKey}");
      // Uncomment when delete logic is ready
      // await DbEshop.deleteForm(form!);
      // ToastHelper.Show(context, "${"Deleted".tr()}: ${form?.formKey}");
      // Navigator.of(context).pop();
    }
  }

  void cancelEdit() {
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: form == null
          ? const Center(child: CircularProgressIndicator())
          : Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
          child: Padding(
            padding: const EdgeInsets.all(16.0),
              child: ListView(
                children: [
                  if (form?.header != null)
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        HtmlView(html: form!.header!, isSelectable: true),
                        const SizedBox(height: 8),
                        Center(
                          child: ElevatedButton(
                            onPressed: () async {
                              RouterService.navigatePageInfo(
                                context,
                                HtmlEditorRoute(content: {HtmlEditorPage.parContent: form!.header!}),
                              ).then((value) async {
                                if (value != null) {
                                  setState(() {
                                    form!.header = value as String;
                                  });
                                  await DbEshop.updateForm(form!);
                                }
                              });
                            },
                            child: Text("Edit content").tr(),
                          ),
                        ),
                      ],
                    ),
                ],
            ),
          ),
        ),
      ),
      bottomNavigationBar: Container(
        color: ThemeConfig.appBarColor(),
        padding: const EdgeInsets.all(8.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            TextButton(
              onPressed: cancelEdit,
              style: TextButton.styleFrom(
                foregroundColor: Colors.white,
              ),
              child: Text("Storno").tr(),
            ),
            const SizedBox(width: 16),
            ElevatedButton(
              onPressed: saveChanges,
              child: Text("Save").tr(),
            ),
          ],
        ),
      ),
    );
  }
}

