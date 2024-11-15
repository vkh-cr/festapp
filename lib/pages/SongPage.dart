import 'package:auto_route/auto_route.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/DbInformation.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/pages/SongDialog.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/themeConfig.dart';

@RoutePage()
class SongbookPage extends StatefulWidget {
  final String? type = "song";
  static const ROUTE = "songbook";

  SongbookPage({super.key});

  @override
  _SongbookPageState createState() => _SongbookPageState();
}

class _SongbookPageState extends State<SongbookPage> {
  List<InformationModel>? _informationList;
  static bool? isDarkMode; // Independent theme state for the page
  static bool isDarkModeDefault = false; // Independent theme state for the page

  // Define light and dark themes for this page
  final ThemeData lightTheme = ThemeConfig.baseTheme();
  final ThemeData darkTheme = ThemeConfig.darkTheme(ThemeConfig.baseTheme());

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    loadData();
  }

  @override
  Widget build(BuildContext context) {
    isDarkMode = isDarkMode ?? ThemeConfig.isDarkMode(context);
    return Theme(
      data: isDarkMode ?? isDarkModeDefault ? darkTheme : lightTheme,
      child: Scaffold(
        appBar: AppBar(
          title: Text(
            "Songbook".tr(),
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w500),
          ),
          leading: BackButton(
            onPressed: () => RouterService.popOrHome(context),
          ),
          actions: [
            // Sun and Moon icons with the switch in grayscale
            Row(
              children: [
                Icon(Icons.wb_sunny, color: Colors.grey),
                Switch(
                  value: isDarkMode ?? isDarkModeDefault,
                  onChanged: (value) {
                    setState(() {
                      isDarkMode = value;
                    });
                  },
                  activeColor: Colors.grey[600],
                  inactiveThumbColor: Colors.grey[400],
                  inactiveTrackColor: Colors.grey[300],
                  activeTrackColor: Colors.grey[600],
                ),
                Icon(Icons.nightlight_round, color: Colors.grey),
              ],
            ),
          ],
        ),
        body: Align(
          alignment: Alignment.topCenter,
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: appMaxWidth),
            child: ListView.builder(
              itemCount: _informationList?.length ?? 0,
              itemBuilder: (BuildContext context, int index) {
                if (index == 0) {
                  // Add extra space above the first item
                  return Column(
                    children: [
                      SizedBox(height: 16), // Extra space below the AppBar
                      buildListItem(index),
                    ],
                  );
                }
                return buildListItem(index);
              },
            ),
          ),
        ),
      ),
    );
  }

  Widget buildListItem(int index) {
    return TextButton(
      onPressed: () async {
        await loadItemDescription(index);
        showDialog(
          context: context,
          builder: (context) => SongDialog(
            title: _informationList![index].title ?? "",
            description: _informationList![index].description ?? "",
            isDarkMode: isDarkMode ?? isDarkModeDefault, // Pass theme setting to dialog
          ),
        );
      },
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 12),
        alignment: Alignment.centerLeft,
        child: Text(
          _informationList![index].title ?? "-",
          textAlign: TextAlign.left,
          style: TextStyle(fontSize: 18),
        ),
      ),
    );
  }

  Future<void> loadData() async {
    _informationList =
        (await OfflineDataService.getAllInfo()).filterByType(widget.type);
    var allInfo = await DbInformation.getAllActiveInformation();
    _informationList = allInfo.filterByType(widget.type);
    OfflineDataService.saveAllInfo(allInfo);
    setState(() {});
    DbInformation.updateInfoDescription();
  }

  Future<void> loadItemDescription(int index) async {
    var info = _informationList![index];
    await DbInformation.fillDescriptionFromOffline(info);
  }
}
