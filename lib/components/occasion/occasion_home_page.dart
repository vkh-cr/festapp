import 'dart:async';

import 'package:auto_route/auto_route.dart';
import 'package:badges/badges.dart' as badges;
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/components/occasion/occasion_link_model.dart';
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
    await UpdateService.versionCheck(context);
    if (AuthService.isLoggedIn()) {
      DbNews.countNewMessages().then((count) {
        if (mounted) {
          setState(() => _messageCount = count);
        }
      });
    }
    await NotificationHelper.checkForNotificationPermission(context);
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
                    if (AuthService.isLoggedIn() &&
                        context.widget is OccasionHomePage) {
                      DbNews.countNewMessages().then((count) {
                        if (mounted) {
                          setState(() => _messageCount = count);
                        }
                      });
                    }
                    tabsRouter.setActiveIndex(index);
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
          body: child,
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

  OccasionTab({
    required this.key,
    required this.label,
    required this.icon,
    required this.activeIcon,
    required this.route,
    this.requiresLogin = false,
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
          label: "Home".tr(),
          icon: Icons.home_outlined,
          activeIcon: Icons.home,
          route: UnitRoute(),
        ),
        home: OccasionTab(
          key: home,
          label: "Schedule".tr(),
          icon: Icons.calendar_month_outlined,
          activeIcon: Icons.calendar_month,
          route: ScheduleNavigationRoute(),
        ),
        timetable: OccasionTab(
          key: home,
          label: "Schedule".tr(),
          icon: Icons.calendar_month_outlined,
          activeIcon: Icons.calendar_month,
          route: TimetableRoute(),
        ),
        news: OccasionTab(
          key: news,
          label: "News".tr(),
          icon: Icons.notifications_none_outlined,
          activeIcon: Icons.notifications,
          route: NewsRoute(onSetAsRead: onSetAsRead),
        ),
        map: OccasionTab(
          key: map,
          label: "Map".tr(),
          icon: Icons.map_outlined,
          activeIcon: Icons.map,
          route: MapRoute(),
        ),
        more: OccasionTab(
          key: more,
          label: "More".tr(),
          icon: Icons.info_outline,
          activeIcon: Icons.info,
          route: InfoRoute(),
        ),
        user: OccasionTab(
          key: user,
          label: "", // Label dynamically replaced in the navigation bar
          icon: Icons.account_circle_outlined,
          activeIcon: Icons.account_circle,
          route: UserRoute(),
          requiresLogin: true,
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
