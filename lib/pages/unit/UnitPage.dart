import 'dart:ui';
import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/services/ResponsiveService.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/widgets/OccasionCard.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/RouterService.dart';

// Define some layout constants.
const double kToolbarHeight = 80.0;
const double kHorizontalPadding = 16.0;
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
  List<OccasionModel> _occasions = [];
  final ScrollController _scrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    _loadOccasions();
  }

  Future<void> _loadOccasions() async {
    var occasions = await DbUsers.getAllOccasionsForUnit(widget.id);
    setState(() {
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
    final logoAsset = ThemeConfig.isDarkMode(context)
        ? 'assets/icons/fstapplogo.dark.svg'
        : 'assets/icons/fstapplogo.svg';

    // Define the HTML content for the quote section.
    final String eventDescription =
        "Drahé děti!<br><br>"
        "V tomto milostivém roce vás volám k obrácení. Dejte Boha, drahé děti, do centra svého života a plody budou láska k bližnímu i radost ze svědectví a svatost vašeho života se stane pravdivým svědectvím víry.<br><br>"
        "Děkuji vám, že jste odpověděly na mé pozvání.";

    final now = DateTime.now();
    final presentEvents = _occasions
        .where((o) => o.startTime!.isBefore(now) && o.endTime!.isAfter(now))
        .toList();
    final upcomingEvents =
    _occasions.where((o) => o.startTime!.isAfter(now)).toList();
    final pastEvents =
    _occasions.where((o) => o.endTime!.isBefore(now)).toList();

    return Scaffold(
      floatingActionButton: RightsService.canUserSeeUnitWorkspace()
          ? FloatingActionButton(
        onPressed: () {
          RouterService.navigate(context, "unit/${widget.id}/edit")
              .then((_) => _loadOccasions());
        },
        child: const Icon(Icons.edit),
      )
          : null,
      body: CustomScrollView(
        controller: _scrollController,
        slivers: [
          // Slim header: a SliverAppBar showing only the logo aligned to the left.
          SliverAppBar(
            floating: true,
            snap: true,
            pinned: false,
            toolbarHeight: kToolbarHeight,
            backgroundColor: ThemeConfig.whiteColorDarker(context),
            elevation: 2,
            centerTitle: false,
            titleSpacing: kHorizontalPadding,
            title: InkWell(
              onTap: () {
                _scrollController.animateTo(
                  0.0,
                  duration: const Duration(milliseconds: 300),
                  curve: Curves.easeOut,
                );
              },
              child: SvgPicture.asset(
                logoAsset,
                height: 60,
                width: 40,
                semanticsLabel: 'Festapp logo',
              ),
            ),
          ),
          // Quote section rendered as HTML in a paper-like container.
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.symmetric(
                  vertical: kVerticalPadding, horizontal: kHorizontalPadding),
              child: Center(
                child: ConstrainedBox(
                  constraints:
                  BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
                  child: Container(
                    padding: const EdgeInsets.all(16.0),
                    decoration: BoxDecoration(
                      color: ThemeConfig.whiteColor(context),
                      border: Border.all(color: ThemeConfig.grey300(context)),
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
                      html: eventDescription,
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
                    vertical: 16.0, horizontal: kHorizontalPadding),
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
                  childAspectRatio: kCardWidth / kCardHeight,
                ),
                delegate: SliverChildBuilderDelegate(
                      (context, index) {
                    final occasion = presentEvents[index];
                    return OccasionCard(
                      occasion: occasion,
                      isPast: false,
                      isPresent: true,
                    );
                  },
                  childCount: presentEvents.length,
                ),
              ),
            ),
          // "Events" title for upcoming events.
          if (upcomingEvents.isNotEmpty)
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.symmetric(
                    vertical: 16.0, horizontal: kHorizontalPadding),
                child: Text(
                  "Events".tr(),
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
                  childAspectRatio: kCardWidth / kCardHeight,
                ),
                delegate: SliverChildBuilderDelegate(
                      (context, index) {
                    final occasion = upcomingEvents[index];
                    return OccasionCard(
                      occasion: occasion,
                      isPast: false,
                      isPresent: false,
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
                    vertical: 16.0, horizontal: kHorizontalPadding),
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
                  childAspectRatio: kCardWidth / kCardHeight,
                ),
                delegate: SliverChildBuilderDelegate(
                      (context, index) {
                    final occasion = pastEvents[index];
                    return OccasionCard(
                      occasion: occasion,
                      isPast: true,
                      isPresent: false,
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
