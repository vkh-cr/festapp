import 'package:collection/collection.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/OfflineDataHelper.dart';
import 'package:fstapp/dataServices/RightsHelper.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/dataServices/DataService.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/styles/Styles.dart';
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
      backgroundColor: AppConfig.infoPageColor,
      appBar: AppBar(
        title: Text(title),
        leading: BackButton(
          onPressed: () => RouterService.goBackOrHome(context),
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
                    backgroundColor: AppConfig.backgroundColor,
                    headerBuilder: (BuildContext context, bool isExpanded) {
                      return ListTile(
                        title: Text(item.title??"",),
                      );
                    },
                    body: Column(
                      children: [
                        Visibility(
                            visible: RightsHelper.isEditor(),
                            child: ElevatedButton(
                                onPressed: () => RouterService.navigateOccasion(context, HtmlEditorPage.ROUTE, extra: item.description).then((value) async {
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
    await loadDataOffline();
    var allInfo = await DataService.getAllActiveInformation();
    _informationList = allInfo.filterByType(widget.type);
    OfflineDataHelper.saveAllInfo(allInfo);
    if(DataService.canSaveBigData()){
      await DataService.updateInfoDescription();
      fillDescriptionsFromOffline();
    } else {
      var fullEvents = await DataService.getInfosDescription(_informationList!.map((i)=>i.id!));
      for(var info in _informationList!) {
        var infoDesc = fullEvents.firstWhereOrNull((i)=>i.id==info.id);
        if(infoDesc != null) {
          info.description = infoDesc.description!;
        }
      }
    }
    setState(() {});
  }

  Future<void> fillDescriptionsFromOffline() async {
    for(var info in _informationList!) {
      var infoDesc = await OfflineDataHelper.getInfoDescription(info.id!.toString());
      if(infoDesc != null) {
        info.description = infoDesc.description!;
      }
    }
  }

  Future<void> loadDataOffline() async {
    _informationList = (await OfflineDataHelper.getAllInfo()).filterByType(widget.type);
    fillDescriptionsFromOffline();
  }
}