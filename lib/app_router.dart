import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/pages/occasion/check_page.dart';
import 'package:fstapp/pages/occasion/event_edit_page.dart';
import 'package:fstapp/pages/occasion/event_page.dart';
import 'package:fstapp/pages/occasionAdmin/admin_page.dart';
import 'package:fstapp/pages/unit/unit_page.dart';
import 'package:fstapp/pages/user/login_page.dart';
import 'package:fstapp/pages/user/signup_password_page.dart';
import 'package:fstapp/pages/utility/html_editor_page.dart';
import 'package:fstapp/pages/occasion/info_page.dart';
import 'package:fstapp/pages/utility/install_page.dart';
import 'package:fstapp/pages/occasion/map_page.dart';
import 'package:fstapp/pages/occasion/news_form_page.dart';
import 'package:fstapp/pages/occasion/news_page.dart';
import 'package:fstapp/pages/occasion/my_schedule_page.dart';
import 'package:fstapp/pages/user/forgot_password_page.dart';
import 'package:fstapp/pages/occasion/scan_page.dart';
import 'package:fstapp/pages/occasion/settings_page.dart';
import 'package:fstapp/pages/user/signup_page.dart';
import 'package:fstapp/pages/occasion/song_page.dart';
import 'package:fstapp/pages/occasion/timetable_page.dart';
import 'package:fstapp/pages/occasion/user_page.dart';
import 'package:fstapp/pages/form/pages/form_page.dart';
import 'package:fstapp/pages/utility/instance_install_page.dart';

import 'app_router.gr.dart';
import 'pages/occasion/game_page.dart';

@AutoRouterConfig(replaceInRouteName: 'Page,Route', deferredLoading: true)
class AppRouter extends RootStackRouter {
  static const String LINK = "occasionLink";
  static const String linkFormatted = "{$LINK}";

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
    AutoRoute(page: CheckRoute.page, path: "/:$linkFormatted/${CheckPage.ROUTE}/:id"),
    AutoRoute(page: NewsFormRoute.page, path: "/:$linkFormatted/${NewsFormPage.ROUTE}"),
    AutoRoute(page: HtmlEditorRoute.page, path: "/:$linkFormatted/${HtmlEditorPage.ROUTE}"),
    AutoRoute(page: AdminRoute.page, path: "/:$linkFormatted/${AdminPage.ROUTE}"),
    AutoRoute(page: MyScheduleRoute.page, path: "/:$linkFormatted/${MySchedulePage.ROUTE}"),
    AutoRoute(page: TimetableRoute.page, path: "/:$linkFormatted/${TimetablePage.ROUTE}"),
    AutoRoute(page: GameRoute.page, path: "/:$linkFormatted/${GamePage.ROUTE}"),
    AutoRoute(page: SongbookRoute.page, path: "/:$linkFormatted/${SongbookPage.ROUTE}"),
    AutoRoute(page: EventEditRoute.page, path: "/:$linkFormatted/${EventEditPage.ROUTE}", children: [
      AutoRoute(path: ':id', page: EventEditRoute.page,),
    ]),
    AutoRoute(page: OccasionHomeRoute.page, path: "/:$linkFormatted", children: [
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

    if(RightsService.useOfflineVersion){
      return "/${RightsService.currentLink}";
    }
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
