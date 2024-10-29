import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:flutter/foundation.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/DbInformation.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/widgets/PopButton.dart';
import '../services/ToastHelper.dart';
import '../services/js/js_interop.dart';
import '../widgets/HtmlView.dart';
import 'HtmlEditorPage.dart';

@RoutePage()
class InfoPage extends StatefulWidget {
  int? id;
  static const ROUTE = "info";
  InfoPage({@pathParam this.id, super.key});

  @override
  _InfoPageState createState() => _InfoPageState();
}

class _InfoPageState extends State<InfoPage> {
  final JSInterop jsInterop = JSInterop();
  final ScrollController _scrollController = ScrollController();
  List<InformationModel>? _informationList;
  Map<int, bool> _isItemLoading = {};

  String title = "Information".tr();

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if(widget.id == null && context.routeData.hasPendingChildren){
      widget.id = context.routeData.pendingChildren[0].pathParams.getInt("id");
    }
    loadData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppConfig.infoPageColor,
      appBar: AppBar(
        title: Text(title),
        leading: PopButton(color: Colors.white),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: appMaxWidth),
          child: SingleChildScrollView(
            controller: _scrollController,
            child: ExpansionPanelList(
              expansionCallback: (panelIndex, isExpanded) async {
                await handleExpansion(panelIndex, isExpanded);
              },
              children: _informationList == null
                  ? []
                  : _informationList!.map<ExpansionPanel>((InformationModel item) {
                int index = _informationList!.indexOf(item);
                return ExpansionPanel(
                  backgroundColor: AppConfig.backgroundColor,
                  headerBuilder: (BuildContext context, bool isExpanded) {
                    return ListTile(
                      title: Text(item.title ?? ""),
                    );
                  },
                  body: _isItemLoading[index] ?? false
                      ? const Padding(
                    padding: EdgeInsets.all(8.0),
                    child: Center(child: CircularProgressIndicator()),
                  )
                      : Column(
                    children: [
                      if (RightsService.isEditor())
                        ElevatedButton(
                          onPressed: () async {
                            var result = await RouterService.navigatePageInfo(
                                context, HtmlEditorRoute(content: {HtmlEditorPage.parContent: item.description}));
                            if (result != null) {
                              setState(() {
                                item.description = result as String;
                              });
                              await DbInformation.updateInformation(item);
                              ToastHelper.Show("Content has been changed.".tr());
                            }
                          },
                          child: const Text("Edit content").tr(),
                        ),
                      Padding(
                        padding: const EdgeInsetsDirectional.all(12),
                        child: HtmlView(html: item.description ?? "", isSelectable: true),
                      )
                    ],
                  ),
                  isExpanded: item.isExpanded,
                  canTapOnHeader: true,
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
    setState(() {});
    var allInfo = await DbInformation.getAllActiveInformation();
    await OfflineDataService.saveAllInfo(allInfo);
    await loadDataOffline();
    if (widget.id != null) {
      var focused = allInfo.firstWhereOrNull((b) => b.id == widget.id);
      if (focused != null) {
        var index = allInfo.indexOf(focused);
        await handleExpansion(index, true);
        _scrollToExpandedItem(index);
      }
    }
    setState(() {});
  }

  Future<void> handleExpansion(int panelIndex, bool isExpanded) async {
    setState(() {
      for (var element in _informationList!) {
        element.isExpanded = false;
      }
      _informationList![panelIndex].isExpanded = isExpanded;
    });

    if (kIsWeb) {
      if (_informationList![panelIndex].isExpanded) {
        jsInterop.changeUrl("${RouterService.getCurrentUriWithOccasion()}${InfoPage.ROUTE}/${_informationList![panelIndex].id}");
      } else {
        jsInterop.changeUrl("${RouterService.getCurrentUriWithOccasion()}${InfoPage.ROUTE}");
      }
    }


    if (_informationList![panelIndex].description == null &&
        !_isItemLoading[panelIndex]!) {
      await loadItemDescription(panelIndex);
    }
  }

  Future<void> loadItemDescription(int index) async {
    setState(() {
      _isItemLoading[index] = true;
    });

    var info = _informationList![index];
    await fillDescriptionFromOffline(info);
    setState(() {
      if (info.description != null) {
        _isItemLoading[index] = false;
      }
    });
    await DbInformation.updateInfoDescription([info.id!]);
    await fillDescriptionFromOffline(info);
    setState(() {
      _isItemLoading[index] = false;
    });
  }

  Future<void> fillDescriptionFromOffline(InformationModel info) async {
    var infoDesc = await OfflineDataService.getInfoDescription(info.id!.toString());
    if (infoDesc != null) {
      setState(() {
        info.description = infoDesc.description ?? "";
      });
    }
  }

  Future<void> loadDataOffline() async {
    _informationList = (await OfflineDataService.getAllInfo()).filterByType(null);
    _isItemLoading = {for (int i = 0; i < _informationList!.length; i++) i: false};
  }

  void _scrollToExpandedItem(int index) {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      final context = _scrollController.position.context.storageContext;
      final RenderBox? renderBox = context.findRenderObject() as RenderBox?;
      if (renderBox != null && renderBox.hasSize) {
        final offset = renderBox.size.height * index / _informationList!.length;
        _scrollController.animateTo(
          offset,
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeInOut,
        );
      }
    });
  }
}
