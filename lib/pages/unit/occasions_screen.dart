import 'dart:ui';

import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_models/unit_model.dart';
import 'package:fstapp/data_services/db_occasions.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/pages/form/pages/form_page.dart';
import 'package:fstapp/pages/occasionAdmin/admin_page.dart';
import 'package:fstapp/pages/unit/occasion_settings_page.dart';
import 'package:fstapp/services/occasion_creation_helper.dart';
import 'package:fstapp/services/responsive_service.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/widgets/occasion_card.dart';
import 'package:fstapp/widgets/occasion_edit_card.dart';

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
    var occasions = await DbOccasions.getAllOccasionsForEdit(widget.unit.id!);
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
    await DialogHelper.showCustomDialog(
      context: context,
      child: OccasionSettingsPage(occasion: occasion),
    );
  }

  /// Handles viewing an occasion.
  Future<void> _handleView(OccasionModel occasion) async {
    await RightsService.updateOccasionData(occasion.link!);
    RouterService.navigateOccasion(context, "");
  }

  /// Handles the reservation action.
  Future<void> _handleReservation(OccasionModel occasion) async {
    await RightsService.updateOccasionData(occasion.link!);
    RouterService.navigate(
      context,
      "${FormPage.ROUTE}/${occasion.form!.link!}/edit",
    );
  }

  /// Handles editing an occasion.
  Future<void> _handleEdit(OccasionModel occasion) async {
    await _openSettingsDialog(occasion);
    await _loadOccasions();
  }

  /// Handles administration navigation.
  Future<void> _handleAdmin(OccasionModel occasion) async {
    await RightsService.updateOccasionData(occasion.link!);
    RouterService.navigateOccasion(context, AdminPage.ROUTE);
  }

  /// Handles creating a copy of the occasion after confirmation.
  Future<void> _handleCreateCopy(OccasionModel occasion) async {
    final confirmation = await DialogHelper.showConfirmationDialogAsync(
      context,
      "Create Copy".tr(),
      "Do you want to create copy of this event?".tr(),
    );
    if (confirmation == true) {
      try {
        await DbOccasions.duplicateOccasion(occasion.id!, occasion.unit);
        ToastHelper.Show(context, "Event copy created successfully.".tr());
        await _loadOccasions();
      } catch (e) {
        ToastHelper.Show(context, "Failed to create event copy.".tr());
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final now = DateTime.now();
    final presentEvents = _occasions
        .where((o) => o.startTime!.isBefore(now) && o.endTime!.isAfter(now))
        .toList();
    final upcomingEvents = _occasions.where((o) => o.startTime!.isAfter(now)).toList();
    upcomingEvents.sort((a, b) => a.startTime!.compareTo(b.startTime!));
    final pastEvents = _occasions.where((o) => o.endTime!.isBefore(now)).toList();

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
                    "Events".tr(),
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
                  padding: const EdgeInsets.symmetric(vertical: 16.0, horizontal: 16.0),
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
                    childAspectRatio: OccasionCard.kCardWidth / OccasionCard.kCardHeight,
                  ),
                  delegate: SliverChildBuilderDelegate(
                        (context, index) {
                      final occasion = presentEvents[index];
                      return OccasionEditCard(
                        occasion: occasion,
                        onView: () => _handleView(occasion),
                        onReservation: () => _handleReservation(occasion),
                        onSettings: () => _handleEdit(occasion),
                        onApp: () => _handleAdmin(occasion),
                        onCreateCopy: () => _handleCreateCopy(occasion),
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
                  padding: const EdgeInsets.symmetric(vertical: 16.0, horizontal: 16.0),
                  child: Text(
                    "Upcoming Events".tr(),
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
                    childAspectRatio: OccasionCard.kCardWidth / OccasionCard.kCardHeight,
                  ),
                  delegate: SliverChildBuilderDelegate(
                        (context, index) {
                      final occasion = upcomingEvents[index];
                      return OccasionEditCard(
                        occasion: occasion,
                        onView: () => _handleView(occasion),
                        onReservation: () => _handleReservation(occasion),
                        onSettings: () => _handleEdit(occasion),
                        onApp: () => _handleAdmin(occasion),
                        onCreateCopy: () => _handleCreateCopy(occasion),
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
                  padding: const EdgeInsets.symmetric(vertical: 16.0, horizontal: 16.0),
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
                    childAspectRatio: OccasionCard.kCardWidth / OccasionCard.kCardHeight,
                  ),
                  delegate: SliverChildBuilderDelegate(
                        (context, index) {
                      final occasion = pastEvents[index];
                      return OccasionEditCard(
                        occasion: occasion,
                        onView: () => _handleView(occasion),
                        onReservation: () => _handleReservation(occasion),
                        onSettings: () => _handleEdit(occasion),
                        onApp: () => _handleAdmin(occasion),
                        onCreateCopy: () => _handleCreateCopy(occasion),
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