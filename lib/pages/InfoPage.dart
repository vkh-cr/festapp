import 'package:festapp/data/DataExtensions.dart';
import 'package:festapp/data/OfflineDataHelper.dart';
import 'package:festapp/models/InformationModel.dart';
import 'package:festapp/data/DataService.dart';
import 'package:festapp/router.dart';
import 'package:festapp/services/NavigationHelper.dart';
import 'package:festapp/styles/Styles.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import '../services/ToastHelper.dart';
import '../widgets/HtmlView.dart';
import 'HtmlEditorPage.dart';

class InfoPage extends StatefulWidget {
  String? type;
  static const ROUTE = "info";
  InfoPage({this.type, super.key});

  @override
  _InfoPageState createState() => _InfoPageState();
}

class _InfoPageState extends State<InfoPage> {
  List<InformationModel>? _informationList;
  _InfoPageState();

  String title = "Information".tr();

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    loadData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
        leading: BackButton(
          onPressed: () => NavigationHelper.goBackOrHome(context),
        ),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: appMaxWidth),
          child: SingleChildScrollView(
            child: ExpansionPanelList(
              expansionCallback: (panelIndex, isExpanded) {
                for (var element in _informationList!) { element.isExpanded = false; }
                _informationList![panelIndex].isExpanded = isExpanded;
                setState(() {
                });

              },
              children:
                _informationList == null ? [] : _informationList!.map<ExpansionPanel>((InformationModel item) {
                  return ExpansionPanel(
                    headerBuilder: (BuildContext context, bool isExpanded) {
                      return ListTile(
                        title: Text(item.title),
                      );
                    },
                    body: Column(
                      children: [
                        Visibility(
                            visible: DataService.isEditor(),
                            child: ElevatedButton(
                                onPressed: () => RouterService.navigate(context, HtmlEditorPage.ROUTE, extra: item.description).then((value) async {
                                  if(value != null)
                                  {
                                    setState(() {
                                      item.description = value as String;
                                    });
                                    await DataService.updateInformation(item);
                                    ToastHelper.Show("Content has been changed.".tr());
                                  }
                                }),
                                child: const Text("Edit content").tr())),
                        Padding(
                        padding: const EdgeInsetsDirectional.all(12),
                        child: HtmlView(html: item.description ?? ""),
                      )],
                    ),
                      isExpanded: item.isExpanded,
                      canTapOnHeader: true
                  );
                }).toList(),
            ),
          ),
        ),
      ),
    );
  }

  Future<void> loadData() async {
    _informationList = OfflineDataHelper.getAllInfo().filterByType(widget.type);
    var allInfo = await DataService.getAllActiveInformation();
    _informationList = allInfo.filterByType(widget.type);
    OfflineDataHelper.saveAllInfo(allInfo);
    setState(() {});
  }
}