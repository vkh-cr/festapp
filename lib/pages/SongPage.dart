import 'package:auto_route/auto_route.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/DbInformation.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';

import '../widgets/HtmlView.dart';

@RoutePage()
class SongPage extends StatefulWidget {
  final String? type = "song";

  static const ROUTE = "songs";

  SongPage({super.key});

  @override
  _SongPageState createState() => _SongPageState();
}

class _SongPageState extends State<SongPage> {
  List<InformationModel>? _informationList;

  static double fontSize = 18;
  double fontSizeStep = 2;
  double maxFontSize = 50;
  double minFontSize = 8;

  _SongPageState();

  String title = "Songs".tr();

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
          onPressed: () => RouterService.popOrHome(context),
        ),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: appMaxWidth),
          child: ListView.builder(
              itemCount: _informationList?.length??0,
              itemBuilder: (BuildContext context, int index) {
                return TextButton(
                  onPressed: () async {
                    await showGeneralDialog(
                        context: context,
                        barrierDismissible: false,
                        barrierColor: Colors.white,
                        barrierLabel: _informationList![index].title,
                        transitionDuration: const Duration(milliseconds: 300),
                        pageBuilder: (context, __, ___) {
                          var htmlContent =
                              "<br/><br/><h3><p style='text-align: center;'>${_informationList![index].title}</p></h3>${_informationList![index].description ?? ""}${"<br/><br/>"}";
                          return StatefulBuilder(builder:
                              (BuildContext context, StateSetter setState) {
                            return Stack(
                              alignment: Alignment.topCenter,
                              children: [
                                SingleChildScrollView(
                                  child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.center,
                                      children: [
                                        Container(
                                            decoration: const BoxDecoration(
                                              borderRadius: BorderRadius.all(
                                                  Radius.circular(12)),
                                              color: Colors.white,
                                            ),
                                            padding:
                                                const EdgeInsetsDirectional
                                                    .all(12),
                                            alignment: Alignment.topCenter,
                                            constraints: BoxConstraints(
                                                maxWidth: appMaxWidth),
                                            child: HtmlView(
                                                html: htmlContent,
                                                fontSize: fontSize)),
                                      ]),
                                ),
                                Positioned(
                                  bottom: 12,
                                  right: 12,
                                  child: ElevatedButton(
                                    onPressed: () {
                                      var newSize = fontSize + fontSizeStep;
                                      if (newSize > maxFontSize) {
                                        newSize = maxFontSize;
                                      }
                                      setState(() {
                                        fontSize = newSize;
                                      });
                                    },
                                    child: Icon(Icons.add, color: Colors.white),
                                    style: ElevatedButton.styleFrom(
                                      shape: CircleBorder(),
                                      padding: EdgeInsets.all(12),
                                      backgroundColor: AppConfig.color1,
                                      foregroundColor: AppConfig.color2,
                                    ),
                                  ),
                                ),
                                Positioned(
                                  bottom: 12,
                                  left: 12,
                                  child: ElevatedButton(
                                    onPressed: () {
                                      var newSize = fontSize - fontSizeStep;
                                      if (newSize < minFontSize) {
                                        newSize = minFontSize;
                                      }
                                      setState(() {
                                        fontSize = newSize;
                                      });
                                    },
                                    style: ElevatedButton.styleFrom(
                                      shape: CircleBorder(),
                                      padding: EdgeInsets.all(12),
                                      backgroundColor: AppConfig.color1,
                                      foregroundColor: AppConfig.color2,
                                    ),
                                    child: const Icon(Icons.remove,
                                        color: Colors.white),
                                  ),
                                ),
                                Positioned(
                                  top: 12,
                                  left: 12,
                                  child: ElevatedButton(
                                    onPressed: () {
                                      Navigator.pop(context);
                                    },
                                    style: ElevatedButton.styleFrom(
                                      shape: CircleBorder(),
                                      padding: EdgeInsets.all(12),
                                      backgroundColor: AppConfig.color1,
                                      foregroundColor: AppConfig.color2,
                                    ),
                                    child: Icon(Icons.adaptive.arrow_back,
                                        color: Colors.white),
                                  ),
                                )
                              ],
                            );
                          });
                        });
                  },
                  child: Container(
                      padding: const EdgeInsets.all(12),
                      alignment: Alignment.centerLeft,
                      child: Text(_informationList![index].title??"-", textAlign: TextAlign.left, style: TextStyle(fontSize: 18),)),
                );
              }),
        ),
      ),
    );
  }

  Future<void> loadData() async {
    _informationList = (await OfflineDataService.getAllInfo()).filterByType(widget.type);
    var allInfo = await DbInformation.getAllActiveInformation();
    _informationList = allInfo.filterByType(widget.type);
    OfflineDataService.saveAllInfo(allInfo);
    setState(() {});
  }
}
