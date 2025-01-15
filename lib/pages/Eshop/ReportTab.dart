import 'package:flutter/material.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:auto_route/auto_route.dart';

class ReportTab extends StatefulWidget {
  const ReportTab({super.key});

  @override
  _ReportTabState createState() => _ReportTabState();
}

class _ReportTabState extends State<ReportTab> {
  String? textReport;
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
    textReport = await DbEshop.getReportForOccasion(formLink!);
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: textReport == null
          ? const Center(child: CircularProgressIndicator())
          : Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  if (textReport != null)
                    SelectableText(
                      textReport!,
                      style: TextStyle(fontSize: 16),
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
