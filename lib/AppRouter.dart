import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/AdminDashboardPage.dart';
import 'package:fstapp/pages/CheckPage.dart';
import 'package:fstapp/pages/EventEditPage.dart';
import 'package:fstapp/pages/EventPage.dart';
import 'package:fstapp/pages/HtmlEditorPage.dart';
import 'package:fstapp/pages/InfoPage.dart';
import 'package:fstapp/pages/InstallPage.dart';
import 'package:fstapp/pages/LoginPage.dart';
import 'package:fstapp/pages/MapPage.dart';
import 'package:fstapp/pages/NewsFormPage.dart';
import 'package:fstapp/pages/NewsPage.dart';
import 'package:fstapp/pages/MySchedulePage.dart';
import 'package:fstapp/pages/ResetPasswordPage.dart';
import 'package:fstapp/pages/ForgotPasswordPage.dart';
import 'package:fstapp/pages/SchedulePage.dart';
import 'package:fstapp/pages/SettingsPage.dart';
import 'package:fstapp/pages/SignupPage.dart';
import 'package:fstapp/pages/SongPage.dart';
import 'package:fstapp/pages/TimetablePage.dart';
import 'package:fstapp/pages/UserPage.dart';

import 'AppRouter.gr.dart';
import 'pages/AdministrationOccasion/AdminPage.dart';
import 'pages/GamePage.dart';

@AutoRouterConfig(replaceInRouteName: 'Page,Route', deferredLoading: true)
class AppRouter extends RootStackRouter {
  static const String LINK = "occasionLink";

  @override
  RouteType get defaultRouteType => const RouteType.material();

  @override
  List<AutoRoute> get routes => [
    AutoRoute(page: ResetPasswordRoute.page, path: sl(ResetPasswordPage.ROUTE)),
    AutoRoute(page: ForgotPasswordRoute.page, path: sl(ForgotPasswordPage.ROUTE)),
    AutoRoute(page: LoginRoute.page, path: sl(LoginPage.ROUTE)),
    AutoRoute(page: SignupRoute.page, path: sl(SignupPage.ROUTE)),
    AutoRoute(page: SettingsRoute.page, path: sl(SettingsPage.ROUTE)),
    AutoRoute(page: InstallRoute.page, path: sl(InstallPage.ROUTE)),
    AutoRoute(page: AdminDashboardRoute.page, path: sl(AdminDashboardPage.ROUTE)),
    AutoRoute(page: CheckRoute.page, path: "/:{$LINK}/${CheckPage.ROUTE}/:id"),
    AutoRoute(page: NewsFormRoute.page, path: "/:{$LINK}/${NewsFormPage.ROUTE}"),
    AutoRoute(page: HtmlEditorRoute.page, path: "/:{$LINK}/${HtmlEditorPage.ROUTE}"),
    AutoRoute(page: AdminRoute.page, path: "/:{$LINK}/${AdminPage.ROUTE}"),
    AutoRoute(page: MyScheduleRoute.page, path: "/:{$LINK}/${MySchedulePage.ROUTE}"),
    AutoRoute(page: ProgramViewRoute.page, path: "/:{$LINK}/${ProgramViewPage.ROUTE}"),
    AutoRoute(page: GameRoute.page, path: "/:{$LINK}/${GamePage.ROUTE}"),
    AutoRoute(page: SongbookRoute.page, path: "/:{$LINK}/${SongbookPage.ROUTE}"),
    AutoRoute(page: EventEditRoute.page, path: "/:{$LINK}/${EventEditPage.ROUTE}", children: [
      AutoRoute(path: ':id', page: EventEditRoute.page,),
    ]),
    AutoRoute(page: OccasionHomeRoute.page, path: "/:{$LINK}", children: [
      AutoRoute(page: UserRoute.page, path: "${UserPage.ROUTE}"),
      AutoRoute(page: ScheduleNavigationRoute.page, path: EventPage.ROUTE, children: [
                  AutoRoute(page: ScheduleRoute.page, path: "", initial: true),
                  AutoRoute(page: EventRoute.page, path: ":id")
                  ]),
      AutoRoute(page: NewsRoute.page, path: "${NewsPage.ROUTE}"),
      AutoRoute(page: MapRoute.page, path: "${MapPage.ROUTE}", maintainState: false, children: [
        AutoRoute(path: ':id', page: MapRoute.page,),
      ]),
      AutoRoute(page: InfoRoute.page, path: "${InfoPage.ROUTE}", children: [
        AutoRoute(
          path: ':id',
          page: InfoRoute.page,
        ),
      ]),
    ]),
    RedirectRoute(path: '*', redirectTo: "/${RightsService.currentLink}"),
  ];

  static void Function()? regenerateRoutes;

  /// Static sl function to standardize the route format.
  static String sl(String route) {
    return route.startsWith('/') ? route : '/$route';
  }

  static List<String> getRootLinks() {
    return [
      ResetPasswordPage.ROUTE,
      ForgotPasswordPage.ROUTE,
      LoginPage.ROUTE,
      SignupPage.ROUTE,
      SettingsPage.ROUTE,
      InstallPage.ROUTE,
      AdminDashboardPage.ROUTE,
    ];
  }
}

/// Observer to monitor routing events for debugging or analytics purposes.
class RoutingObserver extends AutoRouterObserver {
  @override
  void didPush(Route route, Route? previousRoute) {
    print('New route pushed: ${route.settings.name}');
  }

  @override
  void didInitTabRoute(TabPageRoute route, TabPageRoute? previousRoute) {
    print('Tab route visited: ${route.name}');
  }

  @override
  void didChangeTabRoute(TabPageRoute route, TabPageRoute previousRoute) {
    print('Tab route re-visited: ${route.name}');
  }
}
