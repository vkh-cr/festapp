import 'package:av_app/services/DataService.dart';
import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';

import '../models/InformationModel.dart';

class InfoPage extends StatefulWidget {
  static const ROUTE = "/info";
  const InfoPage({Key? key}) : super(key: key);

  @override
  _InfoPageState createState() => _InfoPageState();
}

class _InfoPageState extends State<InfoPage> {
  List<InformationModel>? _information;
  _InfoPageState();

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
      body: SingleChildScrollView(
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
                body: Padding(
                  padding: const EdgeInsetsDirectional.all(12),
                  child: HtmlWidget(
                    // the first parameter (`html`) is required
                    item.description!,

                    // select the render mode for HTML body
                    // by default, a simple `Column` is rendered
                    // consider using `ListView` or `SliverList` for better performance
                    renderMode: RenderMode.column,

                    // set the default styling for text
                    textStyle: const TextStyle(fontSize: 14),

                  ),
                ),
                  isExpanded: item.isExpanded,
                  canTapOnHeader: true
              );
            }).toList(),
        ),
      ),
    );
  }

  Future<void> loadData() async {
    _information = await DataService.getInformation();
    setState(() {});
  }
}