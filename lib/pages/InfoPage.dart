import 'package:avapp/data/DataExtensions.dart';
import 'package:avapp/data/OfflineDataHelper.dart';
import 'package:avapp/models/InformationModel.dart';
import 'package:avapp/data/DataService.dart';
import 'package:avapp/services/NavigationHelper.dart';
import 'package:avapp/styles/Styles.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../services/ToastHelper.dart';
import '../widgets/HtmlDescriptionWidget.dart';
import 'HtmlEditorPage.dart';

class InfoPage extends StatefulWidget {
  String? type;
  static const ROUTE = "/info";
  InfoPage({this.type, super.key});

  @override
  _InfoPageState createState() => _InfoPageState();
}

class _InfoPageState extends State<InfoPage> {
  List<InformationModel>? _informationList;
  _InfoPageState();

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    loadData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Information").tr(),
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
                                onPressed: () => context.push(HtmlEditorPage.ROUTE, extra: item.description).then((value) async {
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
                        child: HtmlDescriptionWidget(html: item.description ?? ""),
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