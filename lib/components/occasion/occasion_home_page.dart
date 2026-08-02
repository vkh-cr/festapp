import 'dart:async';

import 'package:auto_route/auto_route.dart';
import 'package:badges/badges.dart' as badges;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/occasion/occasion_home_strings.dart';
import 'package:fstapp/components/occasion/occasion_link_model.dart';
import 'package:fstapp/components/occasion/news_badge_controller.dart';
import 'package:fstapp/components/offline/offline_banner.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_services/update_service.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/components/users/user_strings.dart';
import 'package:fstapp/components/news/db_news.dart';
import 'package:fstapp/components/users/views/login_page.dart';
import 'package:fstapp/services/notification_helper.dart';
import 'package:fstapp/services/web_styles_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/components/map/map_page.dart';
import 'package:fstapp/components/schedule/event_page.dart';
import 'package:fstapp/components/schedule/timetable_page.dart';
import 'package:fstapp/components/news/news_page.dart';
import 'package:fstapp/components/information/info_page.dart';
import 'package:fstapp/components/unit/views/unit_page.dart';
import 'package:fstapp/components/users/views/user_page.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/search/global_search_dialog.dart';
import 'package:fstapp/components/search/search_strings.dart';

@RoutePage()
class OccasionHomePage extends StatefulWidget {
  static const homePageTitle = AppConfig.appName;

  const OccasionHomePage({super.key});

  /// Base bottom-nav tabs. When the GlobalSearch feature is enabled the "user"
  /// tab is dropped (profile moves to the app bar) and a "search" tab is
  /// appended — see [_OccasionHomePageState.visibleTabKeys].
  static final List<String> baseTabKeys = [
    if (AppConfig.isAllUnit) OccasionTab.unit,
    if (!AppConfig.isAllUnit) OccasionTab.home,
    OccasionTab.map,
    OccasionTab.news,
    OccasionTab.more,
  ];

  @override
  State<OccasionHomePage> createState() => _OccasionHomePageState();
}

class _OccasionHomePageState extends State<OccasionHomePage>
    with WidgetsBindingObserver {
  int _messageCount = 0;
  bool _isLoadingData = false;
  late final Map<String, OccasionTab> _availableTabs;

  /// Effective bottom-nav keys: when GlobalSearch is on, the profile ("user")
  /// tab is replaced by a "search" tab (profile moves to the app bar), matching
  /// production. Otherwise the default profile tab is shown.
  List<String> get visibleTabKeys => [
        ...OccasionHomePage.baseTabKeys,
        if (FeatureService.isFeatureEnabled(FeatureConstants.globalSearch))
          OccasionTab.search
        else
          OccasionTab.user,
      ];

  @override
  void initState() {
    super.initState();
    _availableTabs = OccasionTab.getAvailableTabs(() {
      setState(() {
        _messageCount = 0;
      });
    });
    WidgetsBinding.instance.addObserver(this);
    loadData();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
      statusBarColor: ThemeConfig.logoBackgroundColor(context),
      systemNavigationBarColor: ThemeConfig.appBarColor(),
    ));
    WebStylesHelper.setBodyBackgroundColor(ThemeConfig.appBarColor());
    WebStylesHelper.setMetaThemeColor(ThemeConfig.seed1);
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      loadData();
    }
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  Future<void> loadData() async {
    // Coalesce rapid/overlapping triggers (lifecycle resumes, tab notifications)
    // so we never fire concurrent version checks + countNewMessages() bursts.
    if (_isLoadingData) return;
    _isLoadingData = true;
    try {
      await UpdateService.versionCheck(context);
      if (AuthService.isLoggedIn()) {
        DbNews.countNewMessages().then((count) {
          if (mounted) {
            setState(() => _messageCount = count);
          }
        });
      }
      await NotificationHelper.checkForNotificationPermission(context);
    } finally {
      _isLoadingData = false;
    }
  }

  String messageCountString() =>
      _messageCount < 100 ? _messageCount.toString() : "99+";

  @override
  Widget build(BuildContext context) {
    return AutoTabsRouter(
      routes: visibleTabKeys
          .map((key) => _availableTabs[key]!.route)
          .toList(),
      builder: (tabsContext, child) {
        final tabsRouter = AutoTabsRouter.of(tabsContext);
        return Scaffold(
          bottomNavigationBar: ValueListenableBuilder<bool>(
            valueListenable: MapPage.isEditingNotifier,
            builder: (context, isEditingMap, _) {
              // Hide the bottom navigation while drawing a path on the map.
              if (isEditingMap) return const SizedBox.shrink();
              return ValueListenableBuilder<OccasionLinkModel?>(
            valueListenable: RightsService.occasionLinkModelNotifier,
            builder: (listenableContext, occasionLinkModel, __) {
              return BottomNavigationBar(
                backgroundColor:
                    ThemeConfig.bottomNavBackgroundColor(listenableContext),
                selectedItemColor:
                    ThemeConfig.bottomNavSelectedItemColor(listenableContext),
                unselectedItemColor:
                    ThemeConfig.bottomNavUnselectedItemColor(listenableContext),
                currentIndex: tabsRouter.activeIndex,
                type: BottomNavigationBarType.fixed,
                onTap: (int index) async {
                  final key = visibleTabKeys[index];
                  final tab = _availableTabs[key]!;

                  // Search is a modal overlay, not a real tab — show it and
                  // keep the current tab active (matches production).
                  if (key == OccasionTab.search) {
                    GlobalSearchDialog.show(listenableContext);
                    return;
                  }

                  if (tab.requiresLogin && !AuthService.isLoggedIn()) {
                    await RouterService.navigate(
                        listenableContext, LoginPage.ROUTE);
                    await loadData();
                  } else {
                    handleNewsBadgeTabTap(
                      isNewsTab: key == OccasionTab.news,
                      isLoggedIn: AuthService.isLoggedIn(),
                      loadUnreadCount: DbNews.countNewMessages,
                      setUnreadCount: (count) {
                        if (mounted) {
                          setState(() => _messageCount = count);
                        }
                      },
                    );
                    // A bottom-bar tap must always land on the section's
                    // homepage, even when the user is deep in a nested detail
                    // page (e.g. an event opened directly via URL / reload /
                    // notification, where the nested stack contains only the
                    // detail and popUntilRoot() would do nothing). Navigating
                    // by the section path re-resolves the whole hierarchy: the
                    // nested router lands on its initial child (the configured
                    // schedule variant for Program) and the active tab switches
                    // on its own — so no setActiveIndex is needed.
                    final tabPath = tab.path;
                    if (tabPath != null) {
                      listenableContext.router
                          .navigatePath(RouterService.getCurrentLink() + tabPath);
                    } else {
                      tabsRouter.stackRouterOfIndex(index)?.popUntilRoot();
                      tabsRouter.setActiveIndex(index);
                    }
                  }
                },
                items: visibleTabKeys.map((key) {
                  final tab = _availableTabs[key]!;
                  return BottomNavigationBarItem(
                    icon: tab.buildIcon(
                        listenableContext, _messageCount, messageCountString),
                    activeIcon: tab.buildActiveIcon(
                        listenableContext, _messageCount, messageCountString),
                    label: key == OccasionTab.user
                        ? (occasionLinkModel?.userInfo?.name ??
                            UserStrings.signIn)
                        : tab.label,
                  );
                }).toList(),
              );
            },
          );
            },
          ),
          body: Column(
            children: [
              // Offline indicator for every tab; renders nothing when online.
              const OfflineBanner(),
              Expanded(child: child),
            ],
          ),
        );
      },
    );
  }
}

class OccasionTab {
  final String key;
  final String label;
  final IconData icon;
  final IconData activeIcon;
  final PageRouteInfo<dynamic> route;
  final bool requiresLogin;

  /// Occasion-relative path of this section's homepage (e.g. "event", "map").
  /// Used by the bottom nav to always return to the section root on tap, even
  /// from a deep-linked nested detail. Null for tabs without a page (search).
  final String? path;

  OccasionTab({
    required this.key,
    required this.label,
    required this.icon,
    required this.activeIcon,
    required this.route,
    this.requiresLogin = false,
    this.path,
  });

  static const String unit = "unit";
  static const String home = "home";
  static const String news = "news";
  static const String map = "map";
  static const String more = "more";
  static const String user = "user";
  static const String timetable = "timetable";
  static const String search = "search";

  static Map<String, OccasionTab> getAvailableTabs(
          [VoidCallback? onSetAsRead]) =>
      {
        unit: OccasionTab(
          key: unit,
          label: OccasionHomeStrings.home,
          icon: Icons.home_outlined,
          activeIcon: Icons.home,
          route: UnitRoute(),
          path: UnitPage.ROUTE,
        ),
        home: OccasionTab(
          key: home,
          label: CommonStrings.schedule,
          icon: Icons.calendar_month_outlined,
          activeIcon: Icons.calendar_month,
          route: ScheduleNavigationRoute(),
          path: EventPage.ROUTE,
        ),
        timetable: OccasionTab(
          key: home,
          label: CommonStrings.schedule,
          icon: Icons.calendar_month_outlined,
          activeIcon: Icons.calendar_month,
          route: TimetableRoute(),
          path: TimetablePage.ROUTE,
        ),
        news: OccasionTab(
          key: news,
          label: OccasionHomeStrings.news,
          icon: Icons.notifications_none_outlined,
          activeIcon: Icons.notifications,
          route: NewsRoute(onSetAsRead: onSetAsRead),
          path: NewsPage.ROUTE,
        ),
        map: OccasionTab(
          key: map,
          label: CommonStrings.map,
          icon: Icons.map_outlined,
          activeIcon: Icons.map,
          route: MapRoute(),
          path: MapPage.ROUTE,
        ),
        more: OccasionTab(
          key: more,
          label: OccasionHomeStrings.more,
          icon: Icons.info_outline,
          activeIcon: Icons.info,
          route: InfoRoute(),
          path: InfoPage.ROUTE,
        ),
        user: OccasionTab(
          key: user,
          label: "", // Label dynamically replaced in the navigation bar
          icon: Icons.account_circle_outlined,
          activeIcon: Icons.account_circle,
          route: UserRoute(),
          requiresLogin: true,
          path: UserPage.ROUTE,
        ),
        // "search" opens GlobalSearchDialog on tap (handled in onTap); the
        // route is a never-displayed placeholder so tab/route counts align.
        search: OccasionTab(
          key: search,
          label: SearchStrings.tooltip,
          icon: Icons.search,
          activeIcon: Icons.search,
          route: UserRoute(),
        ),
      };

  static List<PageRouteInfo<dynamic>> getTabRoutes(List<String> tabKeys) {
    return tabKeys.map((key) => getAvailableTabs()[key]!.route).toList();
  }

  Widget buildIcon(BuildContext context, int messageCount,
      String Function() messageCountString) {
    if (key == news) {
      return badges.Badge(
        showBadge: messageCount > 0,
        badgeContent: Text(
          messageCountString(),
          style: const TextStyle(color: Colors.white, fontSize: 10),
        ),
        child: Icon(icon),
      );
    }
    return Icon(icon);
  }

  Widget buildActiveIcon(BuildContext context, int messageCount,
      String Function() messageCountString) {
    if (key == news) {
      return badges.Badge(
        showBadge: messageCount > 0,
        badgeContent: Text(
          messageCountString(),
          style: const TextStyle(color: Colors.white, fontSize: 10),
        ),
        child: Icon(activeIcon),
      );
    }
    return Icon(activeIcon);
  }
}
