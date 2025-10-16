import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_models/information_model.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_models/unit_model.dart';
import 'package:fstapp/data_services/db_information.dart';
import 'package:fstapp/data_services/db_units.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/services/responsive_service.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/html_view.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/widgets/occasion_card.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/widgets/header/universal_header.dart';

// Define layout constant.
const double kVerticalPadding = 32.0;

@RoutePage()
class UnitPage extends StatefulWidget {
  static const ROUTE = "unit";
  final int? id;

  const UnitPage({@pathParam this.id, super.key});

  @override
  _UnitPageState createState() => _UnitPageState();
}

class _UnitPageState extends State<UnitPage> {
  UnitModel? _unit;
  List<OccasionModel> _occasions = [];
  InformationModel? _quote;
  final ScrollController _scrollController = ScrollController();
  int? _currentUnitId;

  @override
  void initState() {
    super.initState();
    _initialLoad();
  }

  // Handles the very first load when the widget is created.
  Future<void> _initialLoad() async {
    // Immediately load from cache for a faster UI response.
    final cachedOccasions = await OfflineDataService.getAllOccasions();
    if (mounted) {
      setState(() {
        _occasions = cachedOccasions;
      });
    }

    // Determine the ID: prioritize URL, then fallback to current user's unit.
    final idToLoad = widget.id ?? RightsService.currentUnit()?.id;

    if (idToLoad != null) {
      await _loadDataForUnit(idToLoad);
    }
  }

  // Centralized method to fetch and set all data for a given unit ID.
  Future<void> _loadDataForUnit(int unitId) async {
    _currentUnitId = unitId;

    // Update global app context for the selected unit.
    await RightsService.updateAppData(unitId: unitId, refreshOffline: false);

    final unit = await DbUnits.getUnit(unitId);
    final occasions = unit.occasions ?? [];
    await OfflineDataService.saveAllOccasions(occasions);

    InformationModel? quote;
    if (FeatureService.isFeatureEnabled(FeatureConstants.quotes, features: unit.features)) {
      quote = await DbInformation.getCurrentQuote(unitId);
    }

    if (mounted) {
      setState(() {
        _unit = unit;
        _occasions = occasions;
        _quote = quote;
      });
    }
  }

  // Callback specifically for handling sign-in/out events.
  Future<void> _handleSignInOut() async {
    // After sign-in/out, get the new unit associated with the user.
    final newUnitId = RightsService.currentUnit()!.id!;

    if(mounted) {
      await _loadDataForUnit(newUnitId);
      await RouterService.goToUnit(context, newUnitId);
    }
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final now = DateTime.now();
    final presentEvents = _occasions
        .where((o) => o.startTime!.isBefore(now) && o.endTime!.isAfter(now))
        .toList();
    final upcomingEvents =
    _occasions.where((o) => o.startTime!.isAfter(now)).toList();
    upcomingEvents.sort((a, b) => a.startTime!.compareTo(b.startTime!));
    final pastEvents =
    _occasions.where((o) => o.endTime!.isBefore(now)).toList();

    return Scaffold(
      floatingActionButton: RightsService.canUserSeeUnitWorkspace()
          ? FloatingActionButton(
        onPressed: () {
          if (_currentUnitId != null) {
            RouterService.navigate(context, "unit/$_currentUnitId/edit")
                .then((_) {
              // After editing, reload data for the same unit.
              if (_currentUnitId != null) {
                _loadDataForUnit(_currentUnitId!);
              }
            });
          }
        },
        child: const Icon(Icons.edit),
      )
          : null,
      body: CustomScrollView(
        controller: _scrollController,
        cacheExtent: 500,
        slivers: [
          UniversalHeader(
            scrollController: _scrollController,
            onSignInOut: _handleSignInOut, // Use the new callback
          ),
          // Quote section rendered as HTML in a paper-like container.
          if (_unit != null && _quote != null)
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.symmetric(
                    vertical: kVerticalPadding, horizontal: 16.0),
                child: Center(
                  child: ConstrainedBox(
                    constraints:
                    BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
                    child: Container(
                      padding: const EdgeInsets.all(16.0),
                      decoration: BoxDecoration(
                        color: ThemeConfig.whiteColor(context),
                        border:
                        Border.all(color: ThemeConfig.grey300(context)),
                        borderRadius: BorderRadius.circular(8.0),
                        boxShadow: const [
                          BoxShadow(
                            color: Colors.black12,
                            blurRadius: 4.0,
                            offset: Offset(0, 2),
                          ),
                        ],
                      ),
                      child: HtmlView(
                        html: _quote!.description ?? "",
                        isSelectable: true,
                      ),
                    ),
                  ),
                ),
              ),
            ),
          // "Happening Now" title for present events.
          if (presentEvents.isNotEmpty)
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.symmetric(
                    vertical: 16.0, horizontal: 16.0),
                child: Text(
                  "Happening Now".tr(),
                  style: const TextStyle(
                      fontSize: 24, fontWeight: FontWeight.bold),
                ),
              ),
            ),
          // Grid of present occasion cards.
          if (presentEvents.isNotEmpty)
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
                  childAspectRatio: OccasionCard.kCardWidth /
                      OccasionCard.kCardHeight,
                ),
                delegate: SliverChildBuilderDelegate(
                      (context, index) {
                    final occasion = presentEvents[index];
                    // Wrap each card in a RepaintBoundary.
                    return RepaintBoundary(
                      child: OccasionCard(
                        occasion: occasion,
                        isPast: false,
                        isPresent: true,
                      ),
                    );
                  },
                  childCount: presentEvents.length,
                ),
              ),
            ),
          // "Upcoming Events" title.
          if (upcomingEvents.isNotEmpty)
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.symmetric(
                    vertical: 16.0, horizontal: 16.0),
                child: Text(
                  "Upcoming Events".tr(),
                  style: const TextStyle(
                      fontSize: 24, fontWeight: FontWeight.bold),
                ),
              ),
            ),
          // Grid of upcoming occasion cards.
          if (upcomingEvents.isNotEmpty)
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
                  childAspectRatio: OccasionCard.kCardWidth /
                      OccasionCard.kCardHeight,
                ),
                delegate: SliverChildBuilderDelegate(
                      (context, index) {
                    final occasion = upcomingEvents[index];
                    return RepaintBoundary(
                      child: OccasionCard(
                        occasion: occasion,
                        isPast: false,
                        isPresent: false,
                      ),
                    );
                  },
                  childCount: upcomingEvents.length,
                ),
              ),
            ),
          // "Past Events" title.
          if (pastEvents.isNotEmpty)
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.symmetric(
                    vertical: 16.0, horizontal: 16.0),
                child: Text(
                  "Past Events".tr(),
                  style: const TextStyle(
                      fontSize: 24, fontWeight: FontWeight.bold),
                ),
              ),
            ),
          // Grid of past occasion cards.
          if (pastEvents.isNotEmpty)
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
                  childAspectRatio: OccasionCard.kCardWidth /
                      OccasionCard.kCardHeight,
                ),
                delegate: SliverChildBuilderDelegate(
                      (context, index) {
                    final occasion = pastEvents[index];
                    return RepaintBoundary(
                      child: OccasionCard(
                        occasion: occasion,
                        isPast: true,
                        isPresent: false,
                      ),
                    );
                  },
                  childCount: pastEvents.length,
                ),
              ),
            ),
          // Extra space below the last item.
          const SliverToBoxAdapter(
            child: SizedBox(height: 64),
          ),
        ],
      ),
    );
  }
}