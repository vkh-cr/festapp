import 'dart:ui';
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
  final int id;

  const UnitPage({@pathParam required this.id, Key? key}) : super(key: key);

  @override
  _UnitPageState createState() => _UnitPageState();
}

class _UnitPageState extends State<UnitPage> {
  UnitModel? _unit;
  List<OccasionModel> _occasions = [];
  InformationModel? _quote;
  final ScrollController _scrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    _loadUnitAndOccasions();
  }

  Future<void> _loadUnitAndOccasions() async {
    _occasions = await OfflineDataService.getAllOccasions();
    setState(() {});

    final unit = await DbUnits.getUnit(widget.id);

    final occasions = unit.occasions!;
    OfflineDataService.saveAllOccasions(occasions);

    if (FeatureService.isFeatureEnabled(FeatureConstants.quotes,
        features: unit.features)) {
      _quote = await DbInformation.getCurrentQuote(widget.id);
    }
    setState(() {
      _unit = unit;
      _occasions = occasions;
    });
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
          RouterService.navigate(context, "unit/${widget.id}/edit")
              .then((_) => _loadUnitAndOccasions());
        },
        child: const Icon(Icons.edit),
      )
          : null,
      body: CustomScrollView(
        controller: _scrollController,
        cacheExtent: 500,
        slivers: [
          UniversalHeader(scrollController: _scrollController),
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
