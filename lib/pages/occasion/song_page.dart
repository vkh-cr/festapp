import 'package:auto_route/auto_route.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/data_services/DataExtensions.dart';
import 'package:fstapp/data_services/db_information.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/data_models/information_model.dart';
import 'package:fstapp/pages/occasion/song_dialog.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';

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
  static bool? isDarkMode;
  static bool isDarkModeDefault = false;

  final ThemeData lightTheme = ThemeConfig.baseTheme();
  final ThemeData darkTheme = ThemeConfig.darkTheme(ThemeConfig.baseTheme());

  bool _isDialogOpen = false;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    loadData();
  }

  @override
  Widget build(BuildContext context) {
    isDarkMode = isDarkMode ?? ThemeConfig.isDarkMode(context);
    return PopScope(
      onPopInvokedWithResult: (result, x) {
        if (_isDialogOpen) {
          Navigator.of(context).pop(); // Close the dialog
          setState(() {
            _isDialogOpen = false;
          });
          result = false;
        }
        result = true; // Allow page pop
      },
      child: Theme(
        data: isDarkMode ?? isDarkModeDefault ? darkTheme : lightTheme,
        child: Scaffold(
          appBar: AppBar(
            title: Text(
              "Songbook".tr(),
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.w500),
            ),
            leading: BackButton(
              onPressed: () {
                if (_isDialogOpen) {
                  Navigator.of(context).pop(); // Close the dialog
                  setState(() {
                    _isDialogOpen = false;
                  });
                } else {
                  RouterService.popOrHome(context); // Pop the page
                }
              },
            ),
            actions: [
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
              constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
              child: ListView.builder(
                itemCount: _informationList?.length ?? 0,
                itemBuilder: (BuildContext context, int index) {
                  if (index == 0) {
                    return Column(
                      children: [
                        SizedBox(height: 16),
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
      ),
    );
  }

  Widget buildListItem(int index) {
    return TextButton(
      onPressed: () async {
        await loadItemDescription(index);
        setState(() {
          _isDialogOpen = true;
        });
        showDialog(
          context: context,
          builder: (context) => SongDialog(
            title: _informationList![index].title ?? "",
            description: _informationList![index].description ?? "",
            isDarkMode: isDarkMode ?? isDarkModeDefault,
          ),
        ).then((_) {
          setState(() {
            _isDialogOpen = false;
          });
        });
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
    setState(() {});
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
