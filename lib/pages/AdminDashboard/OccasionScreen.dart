import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataModels/UnitModel.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/AdminDashboard/OccasionSettingPage.dart';
import 'package:fstapp/pages/AdministrationOccasion/AdminPage.dart';
import 'package:fstapp/pages/Eshop/FormPage.dart';
import 'package:fstapp/services/OccasionCreationHelper.dart';
import 'package:fstapp/services/ResponsiveService.dart';
import 'package:fstapp/RouterService.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/widgets/OccasionCard.dart';
import 'package:fstapp/widgets/OccasionEditCard.dart';

class OccasionsScreen extends StatefulWidget {
  final UnitModel unit;

  const OccasionsScreen({Key? key, required this.unit}) : super(key: key);

  @override
  _OccasionsScreenState createState() => _OccasionsScreenState();
}

class _OccasionsScreenState extends State<OccasionsScreen> {
  List<OccasionModel> _occasions = [];

  @override
  void initState() {
    super.initState();
    _loadOccasions();
  }

  Future<void> _loadOccasions() async {
    var occasions = await DbUsers.getAllOccasionsForEdit(widget.unit.id!);
    setState(() {
      _occasions = occasions;
    });
  }

  void _addNewEvent() {
    OccasionCreationHelper.createNewOccasion(
      context,
      widget.unit,
      _occasions,
      _loadOccasions,
    );
  }

  /// Opens the settings dialog for the given occasion.
  Future<void> _openSettingsDialog(OccasionModel occasion) async {
    await showDialog(
      context: context,
      builder: (context) {
        return Dialog(
          insetPadding: const EdgeInsets.all(16.0),
          child: Container(
            constraints: BoxConstraints(
              maxWidth: ResponsiveService.isDesktop(context) ? 600 : double.infinity,
            ),
            padding: const EdgeInsets.all(16.0),
            child: OccasionSettingsPage(occasion: occasion),
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final now = DateTime.now();
    final presentEvents = _occasions
        .where((o) => o.startTime!.isBefore(now) && o.endTime!.isAfter(now))
        .toList();
    final upcomingEvents =
    _occasions.where((o) => o.startTime!.isAfter(now)).toList();
    final pastEvents =
    _occasions.where((o) => o.endTime!.isBefore(now)).toList();

    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: CustomScrollView(
          slivers: [
            // Header row with title and Add New Event button.
            SliverToBoxAdapter(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    'Events',
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ).tr(),
                  ElevatedButton.icon(
                    onPressed: _addNewEvent,
                    icon: Icon(Icons.add),
                    label: Text('Add New Event').tr(),
                  ),
                ],
              ),
            ),
            const SliverToBoxAdapter(child: SizedBox(height: 16)),
            // Group: Happening Now (present events)
            if (presentEvents.isNotEmpty) ...[
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                      vertical: 16.0, horizontal: 16.0),
                  child: Text(
                    "Happening Now".tr(),
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                ),
              ),
              SliverPadding(
                padding: const EdgeInsets.symmetric(horizontal: 8.0),
                sliver: SliverGrid(
                  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: ResponsiveService.isDesktop(context)
                        ? 3
                        : ResponsiveService.isTablet(context)
                        ? 2
                        : 1,
                    crossAxisSpacing: 10,
                    mainAxisSpacing: 10,
                    childAspectRatio: kCardWidth / kCardHeight,
                  ),
                  delegate: SliverChildBuilderDelegate(
                        (context, index) {
                      final occasion = presentEvents[index];
                      return OccasionEditCard(
                        occasion: occasion,
                        onView: () async {
                          await RightsService.updateOccasionData(occasion.link!);
                          RouterService.navigateOccasion(context, "");
                        },
                        onReservation: () async {
                          await RightsService.updateOccasionData(occasion.link!);
                          RouterService.navigate(
                            context,
                            "${FormPage.ROUTE}/${occasion.form!.link!}/edit",
                          );
                        },
                        onEdit: () async {
                          await _openSettingsDialog(occasion);
                          await _loadOccasions();
                        },
                        onAdmin: () async {
                          await RightsService.updateOccasionData(occasion.link!);
                          RouterService.navigateOccasion(context, AdminPage.ROUTE);
                        },
                        // Mark as present so the card gets a glowing border.
                        isPresent: true,
                      );
                    },
                    childCount: presentEvents.length,
                  ),
                ),
              ),
            ],
            // Group: Upcoming Events
            if (upcomingEvents.isNotEmpty) ...[
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                      vertical: 16.0, horizontal: 16.0),
                  child: Text(
                    "Events".tr(),
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                ),
              ),
              SliverPadding(
                padding: const EdgeInsets.symmetric(horizontal: 8.0),
                sliver: SliverGrid(
                  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: ResponsiveService.isDesktop(context)
                        ? 3
                        : ResponsiveService.isTablet(context)
                        ? 2
                        : 1,
                    crossAxisSpacing: 10,
                    mainAxisSpacing: 10,
                    childAspectRatio: kCardWidth / kCardHeight,
                  ),
                  delegate: SliverChildBuilderDelegate(
                        (context, index) {
                      final occasion = upcomingEvents[index];
                      return OccasionEditCard(
                        occasion: occasion,
                        onView: () async {
                          await RightsService.updateOccasionData(occasion.link!);
                          RouterService.navigateOccasion(context, "");
                        },
                        onReservation: () async {
                          await RightsService.updateOccasionData(occasion.link!);
                          RouterService.navigate(
                            context,
                            "${FormPage.ROUTE}/${occasion.form!.link!}/edit",
                          );
                        },
                        onEdit: () async {
                          await _openSettingsDialog(occasion);
                          await _loadOccasions();
                        },
                        onAdmin: () async {
                          await RightsService.updateOccasionData(occasion.link!);
                          RouterService.navigateOccasion(context, AdminPage.ROUTE);
                        },
                        isPresent: false,
                      );
                    },
                    childCount: upcomingEvents.length,
                  ),
                ),
              ),
            ],
            // Group: Past Events
            if (pastEvents.isNotEmpty) ...[
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                      vertical: 16.0, horizontal: 16.0),
                  child: Text(
                    "Past Events".tr(),
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                ),
              ),
              SliverPadding(
                padding: const EdgeInsets.symmetric(horizontal: 8.0),
                sliver: SliverGrid(
                  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: ResponsiveService.isDesktop(context)
                        ? 3
                        : ResponsiveService.isTablet(context)
                        ? 2
                        : 1,
                    crossAxisSpacing: 10,
                    mainAxisSpacing: 10,
                    childAspectRatio: kCardWidth / kCardHeight,
                  ),
                  delegate: SliverChildBuilderDelegate(
                        (context, index) {
                      final occasion = pastEvents[index];
                      return OccasionEditCard(
                        occasion: occasion,
                        onView: () async {
                          await RightsService.updateOccasionData(occasion.link!);
                          RouterService.navigateOccasion(context, "");
                        },
                        onReservation: () async {
                          await RightsService.updateOccasionData(occasion.link!);
                          RouterService.navigate(
                            context,
                            "${FormPage.ROUTE}/${occasion.form!.link!}/edit",
                          );
                        },
                        onEdit: () async {
                          await _openSettingsDialog(occasion);
                          await _loadOccasions();
                        },
                        onAdmin: () async {
                          await RightsService.updateOccasionData(occasion.link!);
                          RouterService.navigateOccasion(context, AdminPage.ROUTE);
                        },
                        isPresent: false,
                      );
                    },
                    childCount: pastEvents.length,
                  ),
                ),
              ),
            ],
            // Extra space below the last item.
            const SliverToBoxAdapter(child: SizedBox(height: 64)),
          ],
        ),
      ),
    );
  }
}