import 'package:av_app/pages/ModelInformation.dart';
import 'package:av_app/services/DataService.dart';
import 'package:av_app/styles/Styles.dart';
import 'package:flutter/material.dart';
import '../services/ToastHelper.dart';
import '../widgets/HtmlDescriptionWidget.dart';
import 'HtmlEditorPage.dart';

class InfoPage extends StatefulWidget {
  static const ROUTE = "/info";
  const InfoPage({Key? key}) : super(key: key);

  @override
  _InfoPageState createState() => _InfoPageState();
}

class _InfoPageState extends State<InfoPage> {
  List<InformationModel>? _information;
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
        title: const Text("Informace"),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: appMaxWidth),
          child: SingleChildScrollView(
            child: ExpansionPanelList(
              expansionCallback: (panelIndex, isExpanded) {
                _information!.forEach((element) { element.isExpanded = false; });
                _information![panelIndex].isExpanded = !isExpanded;
                setState(() {
                });

              },
              children:
                _information == null ? [] : _information!.map<ExpansionPanel>((InformationModel item) {
                  return ExpansionPanel(
                    headerBuilder: (BuildContext context, bool isExpanded) {
                      return ListTile(
                        title: Text(item.title),
                      );
                    },
                    body: Column(
                      children: [
                        Visibility(
                            visible: DataService.isAdmin(),
                            child: ElevatedButton(
                                onPressed: () => Navigator.pushNamed(context, HtmlEditorPage.ROUTE, arguments: item.description).then((value) async {
                                  if(value != null)
                                  {
                                    item.description = value as String;
                                    await DataService.updateInformation(item);
                                    ToastHelper.Show("Popis změněn!");
                                    Navigator.popAndPushNamed(context, InfoPage.ROUTE);
                                  }
                                }),
                                child: const Text("Upravit popis"))),
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
    _information = await DataService.getInformation();
    setState(() {});
  }
}