import 'package:flutter/material.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/components/eshop/db_eshop.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:auto_route/auto_route.dart';

class ReportTab extends StatefulWidget {
  const ReportTab({super.key});

  @override
  _ReportTabState createState() => _ReportTabState();
}

class _ReportTabState extends State<ReportTab> {
  String? textReport;
  String? occasionLink;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (occasionLink == null && context.routeData.params.isNotEmpty) {
      occasionLink =
          context.routeData.params.getString(AppRouter.linkFormatted);
    }
    loadData();
  }

  Future<void> loadData() async {
    textReport = await DbEshop.getReportForOccasion(occasionLink!);
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
