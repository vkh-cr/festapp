import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/occasion/CheckPage.dart';
import 'package:fstapp/pages/occasion/EventEditPage.dart';
import 'package:fstapp/pages/occasion/EventPage.dart';
import 'package:fstapp/pages/occasionAdmin/AdminPage.dart';
import 'package:fstapp/pages/unit/UnitPage.dart';
import 'package:fstapp/pages/user/LoginPage.dart';
import 'package:fstapp/pages/user/SignupPasswordPage.dart';
import 'package:fstapp/pages/utility/HtmlEditorPage.dart';
import 'package:fstapp/pages/occasion/InfoPage.dart';
import 'package:fstapp/pages/utility/InstallPage.dart';
import 'package:fstapp/pages/occasion/MapPage.dart';
import 'package:fstapp/pages/occasion/NewsFormPage.dart';
import 'package:fstapp/pages/occasion/NewsPage.dart';
import 'package:fstapp/pages/occasion/MySchedulePage.dart';
import 'package:fstapp/pages/user/ForgotPasswordPage.dart';
import 'package:fstapp/pages/occasion/ScanPage.dart';
import 'package:fstapp/pages/occasion/SettingsPage.dart';
import 'package:fstapp/pages/user/SignupPage.dart';
import 'package:fstapp/pages/occasion/SongPage.dart';
import 'package:fstapp/pages/occasion/TimetablePage.dart';
import 'package:fstapp/pages/occasion/UserPage.dart';
import 'package:fstapp/pages/form/pages/form_page.dart';
import 'package:fstapp/pages/utility/InstanceInstallPage.dart';

import 'AppRouter.gr.dart';
import 'pages/occasion/GamePage.dart';

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
    AutoRoute(page: InstanceInstallRoute.page, path: sl(InstanceInstallPage.ROUTE)),
    AutoRoute(page: UnitAdminRoute.page, path: "/${UnitPage.ROUTE}/:id/edit"),
    AutoRoute(page: UnitRoute.page, path: "/${UnitPage.ROUTE}/:id"),
    AutoRoute(page: ScanRoute.page, path: "/${ScanPage.ROUTE}", children: [
      AutoRoute(path: ':scanCode', page: ScanRoute.page,),
    ]),
    AutoRoute(page: FormRoute.page, path: "/${FormPage.ROUTE}/:formLink"),
    AutoRoute(page: FormEditRoute.page, path: "/${FormPage.ROUTE}/:formLink/edit"),
    AutoRoute(page: CheckRoute.page, path: "/:{$LINK}/${CheckPage.ROUTE}/:id"),
    AutoRoute(page: NewsFormRoute.page, path: "/:{$LINK}/${NewsFormPage.ROUTE}"),
    AutoRoute(page: HtmlEditorRoute.page, path: "/:{$LINK}/${HtmlEditorPage.ROUTE}"),
    AutoRoute(page: AdminRoute.page, path: "/:{$LINK}/${AdminPage.ROUTE}"),
    AutoRoute(page: MyScheduleRoute.page, path: "/:{$LINK}/${MySchedulePage.ROUTE}"),
    AutoRoute(page: TimetableRoute.page, path: "/:{$LINK}/${TimetablePage.ROUTE}"),
    AutoRoute(page: GameRoute.page, path: "/:{$LINK}/${GamePage.ROUTE}"),
    AutoRoute(page: SongbookRoute.page, path: "/:{$LINK}/${SongbookPage.ROUTE}"),
    AutoRoute(page: EventEditRoute.page, path: "/:{$LINK}/${EventEditPage.ROUTE}", children: [
      AutoRoute(path: ':id', page: EventEditRoute.page,),
    ]),
    AutoRoute(page: OccasionHomeRoute.page, path: "/:{$LINK}", children: [
      AutoRoute(page: UserRoute.page, path: UserPage.ROUTE),
      AutoRoute(page: ScheduleNavigationRoute.page, path: EventPage.ROUTE, children: [
                  AutoRoute(page: ScheduleRoute.page, path: "", initial: true),
                  AutoRoute(page: EventRoute.page, path: ":id")
                  ]),
      AutoRoute(page: NewsRoute.page, path: "${NewsPage.ROUTE}", maintainState: false),
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

    RedirectRoute(path: '*', redirectTo: getDefaultLink()),
  ];

  static String getDefaultLink() {
    if(RightsService.currentLink != null){
      return "/${RightsService.currentLink}";
    }
    return "/${UnitPage.ROUTE}/${RightsService.currentUnit?.id??1}";
  }

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
      UnitPage.ROUTE,
      FormPage.ROUTE,
      ScanPage.ROUTE,
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
