import 'dart:async';

import 'package:auto_route/auto_route.dart';
import 'package:badges/badges.dart' as badges;
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/app_config_service.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/db_news.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/pages/occasion/news_page.dart';
import 'package:fstapp/pages/user/login_page.dart';
import 'package:fstapp/services/notification_helper.dart';
import 'package:fstapp/services/web_styles_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/app_router.gr.dart';

@RoutePage()
class OccasionHomePage extends StatefulWidget {
  static const HOME_PAGE = AppConfig.appName;

  const OccasionHomePage({Key? key}) : super(key: key);

  @override
  State<OccasionHomePage> createState() => _OccasionHomePageState();
}

class _OccasionHomePageState extends State<OccasionHomePage> with WidgetsBindingObserver {
  String? userName;
  int _messageCount = 0;

  final List<String> visibleTabKeys = [
    OccasionTab.home,
    OccasionTab.news,
    OccasionTab.map,
    OccasionTab.more,
    OccasionTab.user,
  ];

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    loadData();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();

    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
      statusBarColor: ThemeConfig.seed1,
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
    await loadOfflineData();
    await AppConfigService.versionCheck(context);

    if (AuthService.isLoggedIn()) {
      DbUsers.getCurrentUserInfo().then((user) {
        setState(() => userName = user.name!);
      });
      DbNews.countNewMessages().then((count) {
        setState(() => _messageCount = count);
      });
    }

    await NotificationHelper.checkForNotificationPermission(context);
  }

  Future<void> loadOfflineData() async {
    if (AuthService.isLoggedIn()) {
      var userInfo = await OfflineDataService.getUserInfo();
      setState(() {
        userName = userInfo?.occasionUser?.data?[Tb.occasion_users.data_name];
      });
    }
  }

  String messageCountString() => _messageCount < 100 ? _messageCount.toString() : "99+";

  @override
  Widget build(BuildContext context) {
    return AutoTabsRouter(
      routes: OccasionTab.getTabRoutes(visibleTabKeys),
      builder: (context, child) {
        final tabsRouter = AutoTabsRouter.of(context);
        return Scaffold(
          bottomNavigationBar: BottomNavigationBar(
            backgroundColor: ThemeConfig.bottomNavBackgroundColor(context),
            selectedItemColor: ThemeConfig.bottomNavSelectedItemColor(context),
            unselectedItemColor: ThemeConfig.bottomNavUnselectedItemColor(context),
            currentIndex: tabsRouter.activeIndex,
            type: BottomNavigationBarType.fixed,
            onTap: (int index) async {
              final key = visibleTabKeys[index];
              final tab = OccasionTab.availableTabs[key]!;

              if (tab.requiresLogin && !AuthService.isLoggedIn()) {
                await RouterService.navigate(context, LoginPage.ROUTE);
                await loadData();
              } else {
                tabsRouter.setActiveIndex(index);
              }
            },
            items: visibleTabKeys.map((key) {
              final tab = OccasionTab.availableTabs[key]!;
              return BottomNavigationBarItem(
                icon: tab.buildIcon(context, _messageCount, messageCountString),
                activeIcon: tab.buildActiveIcon(context, _messageCount, messageCountString),
                label: key == OccasionTab.user
                    ? (userName ?? "Sign in".tr())
                    : tab.label,
              );
            }).toList(),
          ),
          body: Builder(
            builder: (context) {
              if (visibleTabKeys[tabsRouter.activeIndex] == OccasionTab.news) {
                // Inject the onDataLoaded callback into NewsPage
                return NewsPage(onSetAsRead: () {
                  setState(() {
                    _messageCount = 0;
                  });
                });
              }
              return child;
            },
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

  OccasionTab({
    required this.key,
    required this.label,
    required this.icon,
    required this.activeIcon,
    required this.route,
    this.requiresLogin = false,
  });

  static const String home = "home";
  static const String news = "news";
  static const String map = "map";
  static const String more = "more";
  static const String user = "user";

  static final Map<String, OccasionTab> availableTabs = {
    home: OccasionTab(
      key: home,
      label: "Home".tr(),
      icon: Icons.home_outlined,
      activeIcon: Icons.home,
      route: ScheduleNavigationRoute(),
    ),
    news: OccasionTab(
      key: news,
      label: "News".tr(),
      icon: Icons.notifications_none_outlined,
      activeIcon: Icons.notifications,
      route: NewsRoute(),
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
  };

  static List<PageRouteInfo<dynamic>> getTabRoutes(List<String> tabKeys) {
    return tabKeys.map((key) => availableTabs[key]!.route).toList();
  }

  Widget buildIcon(BuildContext context, int messageCount, String Function() messageCountString) {
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

  Widget buildActiveIcon(BuildContext context, int messageCount, String Function() messageCountString) {
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
