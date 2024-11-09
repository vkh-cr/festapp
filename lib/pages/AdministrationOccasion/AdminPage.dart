import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/IconModel.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/AdministrationOccasion/EventsTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/ExclusivityTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/InformationTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/PlacesTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/ServiceTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/UserGroupsTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/UsersTab.dart';

@RoutePage()
class AdminPage extends StatefulWidget {
  static const ROUTE = "admin";
  const AdminPage({Key? key}) : super(key: key);

  @override
  _AdminPageState createState() => _AdminPageState();
}

class _AdminPageState extends State<AdminPage> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  // Shared Data
  OccasionModel? occasionModel;
  List<String> places = [];
  List<int?> mapIcons = [];
  List<IconModel> svgIcons = [];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(vsync: this, length: 7);
    loadData();
  }

  Future<void> loadData() async {
    // Load data for all tabs
    occasionModel = await DbUsers.getOccasion(RightsService.currentOccasion!);
    var svgs = await DbPlaces.getAllIcons();
    svgIcons.clear();
    svgIcons.addAll(svgs);
    mapIcons.clear();
    mapIcons.addAll(svgIcons.map((icon) => icon.id).toList());
    mapIcons.add(null);

    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: _tabController.length,
      child: Scaffold(
        appBar: AppBar(
          title: const Text("Admin").tr(),
          leading: BackButton(
            onPressed: () => RouterService.popOrHome(context),
          ),
          bottom: PreferredSize(
            preferredSize: const Size.fromHeight(40),
            child: Align(
              alignment: Alignment.centerLeft,
              child: TabBar(
                controller: _tabController,
                isScrollable: true,
                tabs: [
                  Row(
                      children: [
                        const Icon(Icons.info),
                        Padding(padding: const EdgeInsets.all(12), child: const Text("Info").tr())
                      ]
                  ),
                  Row(
                      children: [
                        const Icon(Icons.calendar_month),
                        Padding(padding: const EdgeInsets.all(12), child: const Text("Events").tr())
                      ]
                  ),
                  Row(
                      children: [
                        const Icon(Icons.pin_drop),
                        Padding(padding: const EdgeInsets.all(12), child: const Text("Places").tr())
                      ]
                  ),
                  Row(
                      children: [
                        const Icon(Icons.punch_clock_rounded),
                        Padding(padding: const EdgeInsets.all(12), child: const Text("Exclusivity").tr())
                      ]
                  ),
                  Row(
                      children: [
                        const Icon(Icons.groups),
                        Padding(padding: const EdgeInsets.all(12), child: const Text("Groups").tr())
                      ]
                  ),
                  Row(
                      children: [
                        const Icon(Icons.food_bank),
                        Padding(padding: const EdgeInsets.all(12), child: const Text("Service").tr())
                      ]
                  ),
                  Row(
                      children: [
                        const Icon(Icons.people),
                        Padding(padding: const EdgeInsets.all(12), child: const Text("Users").tr())
                      ]
                  ),
                ],
              ),
            ),
          ),
        ),
        body: TabBarView(
          controller: _tabController,
          physics: const NeverScrollableScrollPhysics(),
          children: [
            InformationTab(),
            EventsTab(occasionModel: occasionModel),
            PlacesTab(svgIcons: svgIcons, mapIcons: mapIcons),
            ExclusivityTab(),
            UserGroupsTab(),
            ServiceTab(),
            UsersTab(),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }
}
