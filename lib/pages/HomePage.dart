import 'dart:async';

import 'package:auto_route/auto_route.dart';
import 'package:badges/badges.dart' as badges;
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/AppConfigService.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/DbNews.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/pages/LoginPage.dart';
import 'package:fstapp/services/NotificationHelper.dart';
import 'package:fstapp/services/StylesHelper.dart';
import 'package:fstapp/themeConfig.dart';

@RoutePage()
class HomePage extends StatefulWidget {
  static const HOME_PAGE = AppConfig.appName;

  const HomePage({super.key});

  final String title = AppConfig.appName;

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with WidgetsBindingObserver {
  String? userName;
  int _messageCount = 0;
  int currentPageIndex = 0;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    loadData();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    StylesHelper.setMetaThemeColor(ThemeConfig.seed1);
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
      DbUsers.getCurrentUserInfo().then((value) => setState(() => userName = value.name!));
      DbNews.countNewMessages().then((value) => setState(() => _messageCount = value));
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
      routes: [
        ScheduleNavigationRoute(),
        NewsRoute(),
        MapRoute(),
        InfoRoute(),
        UserRoute(),
      ],
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
              if(!AuthService.isLoggedIn() && index == 4){
                await RouterService.navigate(context, LoginPage.ROUTE);
                await loadData();
              } else{
                setState(() {
                  tabsRouter.setActiveIndex(index);
                });
              }
            },
            items: <BottomNavigationBarItem>[
              BottomNavigationBarItem(
                icon: Icon(Icons.home_outlined),
                activeIcon: Icon(Icons.home),
                label: "Home".tr(),
              ),
              BottomNavigationBarItem(
                icon: badges.Badge(
                  showBadge: _messageCount > 0,
                  badgeContent: Text(
                    messageCountString(),
                    style: TextStyle(color: Colors.white, fontSize: 10),
                  ),
                  child: Icon(Icons.notifications_none_outlined),
                ),
                activeIcon: badges.Badge(
                  showBadge: _messageCount > 0,
                  badgeContent: Text(
                    messageCountString(),
                    style: TextStyle(color: Colors.white, fontSize: 10),
                  ),
                  child: Icon(Icons.notifications),
                ),
                label: "News".tr(),
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.map_outlined),
                activeIcon: Icon(Icons.map),
                label: "Map".tr(),
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.info_outline),
                activeIcon: Icon(Icons.info),
                label: "More".tr(),
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.account_circle_outlined),
                activeIcon: Icon(Icons.account_circle),
                label: AuthService.currentUser?.name??userName??"Sign in".tr(),
              ),
            ],
          ),
          body: child,
        );
      },
    );
  }
}
