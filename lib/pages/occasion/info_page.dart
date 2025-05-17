import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:flutter/foundation.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/data_extensions.dart';
import 'package:fstapp/data_services/db_information.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_models/information_model.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/pages/occasion/game_page.dart';
import 'package:fstapp/pages/occasion/song_page.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:fstapp/widgets/pop_button.dart';
import 'package:fstapp/widgets/zoomable_image/zoomable_image.dart';
import '../../services/toast_helper.dart';
import '../../services/js/js_interop.dart';
import '../../widgets/html_view.dart';
import '../utility/html_editor_page.dart';

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
  List<GlobalKey> _itemKeys = [];

  String title = "Information".tr();

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (widget.id == null && context.routeData.hasPendingChildren) {
      widget.id = context.routeData.pendingChildren[0].params.getInt("id");
    }
    loadData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ThemeConfig.infoPageColor(context),
      appBar: AppBar(
        title: Text(title, style: TextStyle(color: ThemeConfig.appBarColorNegative()),),
        leading: PopButton(),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
          child: PinchScrollView(
            builder: (onPinchStart, onPinchEnd) => SingleChildScrollView(
              controller: _scrollController,
              child: Column(
                children: [
                  if (FeatureService.isFeatureEnabled(FeatureConstants.game) ||
                      FeatureService.isFeatureEnabled(FeatureConstants.songbook))
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(24),
                      decoration: BoxDecoration(
                        border: Border(
                          bottom: BorderSide(color: Colors.grey[300]!),
                        ),
                      ),
                      child: Align(
                        alignment: Alignment.center,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            if (FeatureService.isFeatureEnabled(FeatureConstants.game))
                              ButtonsHelper.buildReferenceButton(
                                context: context,
                                onPressed: () {
                                  if (!AuthService.isLoggedIn()) {
                                    ToastHelper.Show(
                                        context, "Sign in to participate in the game.".tr());
                                    return;
                                  }
                                  RouterService.navigateOccasion(context, GamePage.ROUTE);
                                },
                                icon: Icons.gamepad,
                                label: "Game",
                              ),
                            if (FeatureService.isFeatureEnabled(FeatureConstants.songbook))
                              const SizedBox(width: 16),
                            if (FeatureService.isFeatureEnabled(FeatureConstants.songbook))
                              ButtonsHelper.buildReferenceButton(
                                context: context,
                                onPressed: () {
                                  RouterService.navigateOccasion(
                                      context, SongbookPage.ROUTE);
                                },
                                icon: Icons.library_music,
                                label: "Songbook",
                              ),
                          ],
                        ),
                      ),
                    ),
                  ExpansionPanelList(
                    expansionCallback: (panelIndex, isExpanded) async {
                      await handleExpansion(panelIndex, isExpanded);
                    },
                    children: _informationList == null
                        ? []
                        : _informationList!.map<ExpansionPanel>((InformationModel item) {
                      int index = _informationList!.indexOf(item);
                      return ExpansionPanel(
                        backgroundColor: ThemeConfig.backgroundColor(context),
                        headerBuilder: (BuildContext context, bool isExpanded) {
                          return Container(
                            key: _itemKeys[index],
                            child: ListTile(
                              title: Text(item.title ?? ""),
                            ),
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
                                      context,
                                      HtmlEditorRoute(
                                          content: {
                                            HtmlEditorPage.parContent:
                                            item.description
                                          },
                                          occasionId:
                                          RightsService.currentOccasionId()));
                                  if (result != null) {
                                    setState(() {
                                      item.description = result as String;
                                    });
                                    await DbInformation.updateInformation(item);
                                    ToastHelper.Show(
                                        context, "Content has been changed.".tr());
                                  }
                                },
                                child: const Text("Edit content").tr(),
                              ),
                            Padding(
                              padding: const EdgeInsetsDirectional.all(12),
                              child: HtmlView(
                                html: item.description ?? "",
                                isSelectable: true,
                                twoFingersOn: onPinchStart,
                                twoFingersOff: onPinchEnd,
                              ),
                            ),
                          ],
                        ),
                        isExpanded: item.isExpanded,
                        canTapOnHeader: true,
                      );
                    }).toList(),
                  ),
                  const SizedBox(height: 24),
                ],
              ),
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
      if (focused != null && _informationList != null) {
        var index = _informationList!.indexWhere((i) => i.id == focused.id);
        await handleExpansion(index, true);
        // _scrollToExpandedItem(index);
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

    // ensure header of expanded item is visible
    if (_informationList![panelIndex].isExpanded) {
      WidgetsBinding.instance.addPostFrameCallback((_) async {
        await Future.delayed(Duration(milliseconds: 100));
        final contextItem = _itemKeys[panelIndex].currentContext;
        if (contextItem != null) {
          Scrollable.ensureVisible(
            contextItem,
            duration: const Duration(milliseconds: 300),
          );
        }
      });
    }

    if (kIsWeb) {
      if (_informationList![panelIndex].isExpanded) {
        jsInterop.changeUrl(
            "${RouterService.getCurrentUriWithOccasion()}${InfoPage.ROUTE}/${_informationList![panelIndex].id}");
      } else {
        jsInterop.changeUrl("${RouterService.getCurrentUriWithOccasion()}${InfoPage.ROUTE}");
      }
    }
  }

  Future<void> loadDataOffline() async {
    _informationList = (await OfflineDataService.getAllInfo()).filterByType(null);
    // collapse all panels by default
    _informationList!.forEach((item) => item.isExpanded = false);
    // initialize keys for ensuring visibility
    _itemKeys = List.generate(_informationList!.length, (_) => GlobalKey());

    _isItemLoading = {for (int i = 0; i < _informationList!.length; i++) i: false};
  }
}
