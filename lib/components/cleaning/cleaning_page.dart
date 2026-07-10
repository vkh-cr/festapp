import 'dart:async';

import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/cleaning/cleaning_status.dart';
import 'package:fstapp/components/cleaning/cleaning_strings.dart';
import 'package:fstapp/components/cleaning/db_cleaning.dart';
import 'package:fstapp/components/cleaning/models/cleaning_place_status.dart';
import 'package:fstapp/components/cleaning/cleaning_report_flow.dart';
import 'package:fstapp/components/cleaning/models/cleaning_report.dart';
import 'package:fstapp/components/map/map_page.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/services/exception_handler.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/navigate_back_button.dart';
import 'package:intl/intl.dart';

/// Cleaning service page. Shows a grid of toilets colored by their derived
/// status; tapping a toilet opens the report dialog. Every participant can
/// report (Q7). The cleaning crew additionally sees the reported notes/times
/// and can mark a whole toilet as cleaned.
///
/// Top-level occasion route (own Scaffold, like CounselingPage) with an optional
/// `:id` deep-link that opens the report dialog for that toilet directly —
/// groundwork for QR stickers (Q5).
@RoutePage()
class CleaningPage extends StatefulWidget {
  static const ROUTE = "cleaning";

  final int? id;

  const CleaningPage({@pathParam this.id, super.key});

  @override
  State<CleaningPage> createState() => _CleaningPageState();
}

class _CleaningPageState extends State<CleaningPage> {
  static const Duration _pollInterval = Duration(seconds: 30);

  List<CleaningPlaceStatus> _places = [];
  List<CleaningReport> _reports = [];
  bool _loading = true;
  bool _deepLinkHandled = false;
  Timer? _pollTimer;

  bool get _isCrew => RightsService.isCleaningCrew();
  int get _occasionId => RightsService.currentOccasionId()!;

  @override
  void initState() {
    super.initState();
    _loadData();
    // Live data matters for the crew; poll quietly while the page is open.
    if (_isCrew) {
      _pollTimer = Timer.periodic(_pollInterval, (_) => _loadData(silent: true));
    }
  }

  @override
  void dispose() {
    _pollTimer?.cancel();
    super.dispose();
  }

  Future<void> _loadData({bool silent = false}) async {
    Future<_CleaningData> fetch() async {
      final places = await DbCleaning.getStatus(_occasionId);
      final reports = _isCrew
          ? await DbCleaning.getReports(_occasionId)
          : <CleaningReport>[];
      return _CleaningData(places, reports);
    }

    _CleaningData? data;
    if (silent) {
      // Background poll: swallow transient errors instead of popping UI.
      try {
        data = await fetch();
      } catch (_) {
        return;
      }
    } else {
      data = await ExceptionHandler.guard(context, futureFunction: fetch);
    }
    if (!mounted) return;
    setState(() {
      if (data != null) {
        _places = data.places;
        _reports = data.reports;
      }
      _loading = false;
    });
    _maybeHandleDeepLink();
  }

  /// When opened via `cleaning/:id`, open the report dialog for that toilet once
  /// the status list is available.
  void _maybeHandleDeepLink() {
    if (_deepLinkHandled || widget.id == null) return;
    _deepLinkHandled = true;
    CleaningPlaceStatus? place;
    for (final p in _places) {
      if (p.place == widget.id) {
        place = p;
        break;
      }
    }
    if (place != null) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (mounted) _openReportDialog(place!);
      });
    }
  }

  Future<void> _openReportDialog(CleaningPlaceStatus place) async {
    final changed = await CleaningReportFlow.report(
      context,
      placeId: place.place,
      placeTitle: place.title,
      onShowOnMap: () => RouterService.navigateOccasion(
          context, "${MapPage.ROUTE}/${place.place}"),
    );
    if (changed && mounted) await _loadData();
  }

  Future<void> _resolvePlace(int placeId) async {
    await ExceptionHandler.guardVoid(
      context,
      futureFunction: () async {
        await DbCleaning.resolvePlace(placeId);
        if (!mounted) return;
        ToastHelper.Show(context, CleaningStrings.cleanedConfirm);
        await _loadData();
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: const ScheduleBackButton(),
        title: Text(CleaningStrings.pageTitle),
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            tooltip: CleaningStrings.refresh,
            onPressed: () => _loadData(),
          ),
        ],
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
          child: RefreshIndicator(
            onRefresh: () => _loadData(),
            child: _buildBody(context),
          ),
        ),
      ),
    );
  }

  Widget _buildBody(BuildContext context) {
    if (_loading) {
      return const Center(child: CircularProgressIndicator());
    }
    if (_places.isEmpty) {
      return ListView(
        children: [
          const SizedBox(height: 80),
          Center(
            child: Padding(
              padding: const EdgeInsets.all(24),
              child: Text(
                CleaningStrings.noToilets,
                textAlign: TextAlign.center,
                style: TextStyle(color: ThemeConfig.grey600(context)),
              ),
            ),
          ),
        ],
      );
    }

    final reportsByPlace = <int, List<CleaningReport>>{};
    for (final r in _reports) {
      reportsByPlace.putIfAbsent(r.place, () => []).add(r);
    }
    final problemPlaces =
        _places.where((p) => p.status != CleaningStatus.green).toList();

    return ListView(
      padding: const EdgeInsets.all(12),
      children: [
        GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
            maxCrossAxisExtent: 140,
            childAspectRatio: 1,
            crossAxisSpacing: 12,
            mainAxisSpacing: 12,
          ),
          itemCount: _places.length,
          itemBuilder: (context, index) =>
              _CleaningTile(place: _places[index], onTap: _openReportDialog),
        ),
        // Crew-only: detailed open reports with notes/times + "Cleaned".
        if (_isCrew && problemPlaces.isNotEmpty) ...[
          const SizedBox(height: 20),
          for (final place in problemPlaces)
            _CrewReportCard(
              place: place,
              reports: reportsByPlace[place.place] ?? const [],
              onResolve: () => _resolvePlace(place.place),
            ),
        ],
      ],
    );
  }
}

class _CleaningData {
  final List<CleaningPlaceStatus> places;
  final List<CleaningReport> reports;
  _CleaningData(this.places, this.reports);
}

class _CleaningTile extends StatelessWidget {
  final CleaningPlaceStatus place;
  final void Function(CleaningPlaceStatus) onTap;

  const _CleaningTile({required this.place, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final color = CleaningStatusHelper.color(place.status);
    final biohazard = CleaningStatusHelper.showsBiohazard(place.status);
    return Material(
      color: color,
      borderRadius: BorderRadius.circular(16),
      child: InkWell(
        borderRadius: BorderRadius.circular(16),
        onTap: () => onTap(place),
        child: Padding(
          padding: const EdgeInsets.all(8),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              if (biohazard) const Text('☣️', style: TextStyle(fontSize: 22)),
              Flexible(
                child: FittedBox(
                  fit: BoxFit.scaleDown,
                  child: Text(
                    place.title,
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 28,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

/// Crew card for one problematic toilet: its open reports (type, note(s),
/// reporter, time) and a "Cleaned" button resolving them all at once.
class _CrewReportCard extends StatelessWidget {
  final CleaningPlaceStatus place;
  final List<CleaningReport> reports;
  final VoidCallback onResolve;

  const _CrewReportCard({
    required this.place,
    required this.reports,
    required this.onResolve,
  });

  @override
  Widget build(BuildContext context) {
    final color = CleaningStatusHelper.color(place.status);
    final timeFmt = DateFormat.Hm();
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
        side: BorderSide(color: color, width: 2),
      ),
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(Icons.wc, color: color),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    place.title,
                    style: const TextStyle(
                        fontWeight: FontWeight.bold, fontSize: 18),
                  ),
                ),
                FilledButton.icon(
                  onPressed: onResolve,
                  icon: const Icon(Icons.check),
                  label: Text(CleaningStrings.markCleaned),
                ),
              ],
            ),
            const SizedBox(height: 8),
            for (final r in reports)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 4),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Container(
                          width: 10,
                          height: 10,
                          decoration: BoxDecoration(
                            color: CleaningStatusHelper.colorForType(
                                r.problemType),
                            shape: BoxShape.circle,
                          ),
                        ),
                        const SizedBox(width: 8),
                        Expanded(
                          child: Text(
                            CleaningStrings.problemLabel(r.problemType),
                            style:
                                const TextStyle(fontWeight: FontWeight.w600),
                          ),
                        ),
                        Text(
                          "${timeFmt.format(r.createdAt)} · ${r.createdByName ?? CleaningStrings.anonymous}",
                          style: TextStyle(
                              fontSize: 12,
                              color: ThemeConfig.grey600(context)),
                        ),
                      ],
                    ),
                    for (final note in [
                      if (r.note != null) r.note!,
                      ...r.extraNotes
                    ])
                      Padding(
                        padding: const EdgeInsets.only(left: 18, top: 2),
                        child: Text('„$note"',
                            style: const TextStyle(
                                fontStyle: FontStyle.italic)),
                      ),
                  ],
                ),
              ),
          ],
        ),
      ),
    );
  }
}
