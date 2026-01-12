import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart'; // Already imported, no change needed
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/schedule_feature.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/forms/views/reservation_page.dart';
import 'package:fstapp/components/scan/check_page.dart';
import 'package:fstapp/components/schedule/event_edit_page.dart';
import 'package:fstapp/components/schedule/event_page.dart';
import 'package:fstapp/components/inventory/views/user_stay_page.dart';
import 'package:fstapp/components/occasion/admin_page.dart';
// Import new page
import 'package:fstapp/components/unit/views/unit_page.dart';
import 'package:fstapp/components/users/views/login_page.dart';
import 'package:fstapp/components/users/views/transfer_page.dart';
import 'package:fstapp/components/users/views/reset_password_page.dart';
import 'package:fstapp/components/html/html_editor_page.dart';
import 'package:fstapp/components/information/info_page.dart';
import 'package:fstapp/components/app_management/install_page.dart';
import 'package:fstapp/components/map/map_page.dart';
import 'package:fstapp/components/news/news_form_page.dart';
import 'package:fstapp/components/news/news_page.dart';
import 'package:fstapp/components/schedule/my_schedule_page.dart';
import 'package:fstapp/components/users/views/forgot_password_page.dart';
import 'package:fstapp/components/scan/scan_page.dart';
import 'package:fstapp/components/app_management/settings_page.dart';
import 'package:fstapp/components/users/views/signup_page.dart';
import 'package:fstapp/components/information/song/song_page.dart';
import 'package:fstapp/components/schedule/timetable_page.dart';
import 'package:fstapp/components/users/views/user_page.dart';
import 'package:fstapp/components/forms/views/form_page.dart';
import 'package:fstapp/components/app_management/instance_install_page.dart';

import 'app_router.gr.dart';
import 'components/information/game/game_page.dart';

@AutoRouterConfig(replaceInRouteName: 'Page,Route', deferredLoading: true)
class AppRouter extends RootStackRouter {
  static const String LINK = "occasionLink";
  static const String linkFormatted = "{$LINK}";

  @override
  RouteType get defaultRouteType => const RouteType.material();

  @override
  List<AutoRoute> get routes => [
    CustomRoute(
        page: OrganizationRoute.page,
        path: "/",
        guards: [InitialRedirectGuard()],
        transitionsBuilder: TransitionsBuilders.noTransition),

    AutoRoute(page: ResetPasswordRoute.page, path: sl(ResetPasswordPage.ROUTE)),
    AutoRoute(
        page: ForgotPasswordRoute.page, path: sl(ForgotPasswordPage.ROUTE)),
    AutoRoute(page: LoginRoute.page, path: sl(LoginPage.ROUTE)),
    AutoRoute(page: SignupRoute.page, path: sl(SignupPage.ROUTE)),
    AutoRoute(page: SettingsRoute.page, path: sl(SettingsPage.ROUTE)),
    AutoRoute(page: InstallRoute.page, path: sl(InstallPage.ROUTE)),
    AutoRoute(page: TransferRoute.page, path: "/${TransferPage.ROUTE}"),
    AutoRoute(
        page: InstanceInstallRoute.page,
        path: sl(InstanceInstallPage.ROUTE)),
    CustomRoute(
        page: UnitAdminRoute.page,
        path: "/${UnitPage.ROUTE}/:id/edit",
        transitionsBuilder: TransitionsBuilders.noTransition),

    // Use UnitPage for the /unit/:id path (this was commented out)
    AutoRoute(page: UnitRoute.page, path: "/${UnitPage.ROUTE}/:id"),

    AutoRoute(page: ScanRoute.page, path: "/${ScanPage.ROUTE}", children: [
      AutoRoute(
        path: ':scanCode',
        page: ScanRoute.page,
      ),
    ]),
    AutoRoute(page: FormRoute.page, path: "/${FormPage.ROUTE}/:formLink"),
    CustomRoute(
        page: ReservationsRoute.page,
        path: "/:$linkFormatted/${ReservationsPage.ROUTE}",
        transitionsBuilder: TransitionsBuilders.noTransition),
    AutoRoute(
        page: CheckRoute.page,
        path: "/:$linkFormatted/${CheckPage.ROUTE}/:id"),
    AutoRoute(
        page: NewsFormRoute.page,
        path: "/:$linkFormatted/${NewsFormPage.ROUTE}"),
    AutoRoute(
        page: HtmlEditorRoute.page,
        path: "/:$linkFormatted/${HtmlEditorPage.ROUTE}"),
    CustomRoute(
        page: AdminRoute.page,
        path: "/:$linkFormatted/${AdminPage.ROUTE}",
        transitionsBuilder: TransitionsBuilders.noTransition),
    AutoRoute(
        page: MyScheduleRoute.page,
        path: "/:$linkFormatted/${MySchedulePage.ROUTE}"),
    AutoRoute(
        page: TimetableRoute.page,
        path: "/:$linkFormatted/${TimetablePage.ROUTE}"),
    AutoRoute(
        page: GameRoute.page, path: "/:$linkFormatted/${GamePage.ROUTE}"),
    AutoRoute(
        page: SongbookRoute.page,
        path: "/:$linkFormatted/${SongbookPage.ROUTE}"),
    AutoRoute(
        page: UserStayRoute.page,
        path: "/:$linkFormatted/${UserStayPage.ROUTE}"),
    AutoRoute(
        page: EventEditRoute.page,
        path: "/:$linkFormatted/${EventEditPage.ROUTE}",
        children: [
          AutoRoute(
            path: ':id',
            page: EventEditRoute.page,
          ),
        ]),
    AutoRoute(page: OccasionHomeRoute.page, path: "/:$linkFormatted", children: [
      AutoRoute(page: UserRoute.page, path: UserPage.ROUTE),
      AutoRoute(
          page: ScheduleNavigationRoute.page,
          path: EventPage.ROUTE,
          children: [
            getSchedulePage(),
            AutoRoute(page: EventRoute.page, path: ":id")
          ]),
      AutoRoute(page: NewsRoute.page, path: NewsPage.ROUTE),

      // Use UnitPage for the nested /:occasionLink/unit path
      AutoRoute(
          page: UnitRoute.page, path: UnitPage.ROUTE, maintainState: false),

      AutoRoute(page: MapRoute.page, path: MapPage.ROUTE, children: [
        AutoRoute(
          path: ':id',
          page: MapRoute.page,
        ),
      ]),
      AutoRoute(page: InfoRoute.page, path: InfoPage.ROUTE, children: [
        AutoRoute(
          path: ':id',
          page: InfoRoute.page,
        ),
      ]),
      AutoRoute(page: TimetableRoute.page, path: TimetablePage.ROUTE),
    ]),

    RedirectRoute(path: '*', redirectTo: getDefaultLink()),
  ];

  static AutoRoute getSchedulePage() {
    var scheduleFeat =
    FeatureService.getFeatureDetails(ScheduleFeature.metaSchedule);
    if (scheduleFeat is ScheduleFeature &&
        scheduleFeat.scheduleType == ScheduleFeature.scheduleTypeAdvanced) {
      return AutoRoute(page: ScheduleRoute.page, path: "", initial: true);
    }
    return AutoRoute(page: ScheduleBasicRoute.page, path: "", initial: true);
  }

  static String getDefaultLink() {
    if (!AppConfig.isAppSupported) {
      return "/";
    }

    if (RightsService.useOfflineVersion) {
      return "/${RightsService.currentLink}";
    }
    if (RightsService.currentLink != null) {
      return "/${RightsService.currentLink}";
    }

    if (AppConfig.isAllUnit) {
      return "/${RightsService.currentLink}";
    }

    // This now correctly points to the /unit/:id route
    return "/${UnitPage.ROUTE}/${RightsService.currentUnit()?.id}";
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
      TransferPage.ROUTE,
    ];
  }
}

/// Observer to monitor routing events for debugging or analytics purposes.
class RoutingObserver extends AutoRouteObserver {
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

/// This guard checks if the app is supported when landing on the root '/'.
/// If the app is supported, it redirects to the appropriate unit or occasion.
/// If not, it allows the user to see the OrganizationPage at '/'.
class InitialRedirectGuard extends AutoRouteGuard {
  @override
  void onNavigation(NavigationResolver resolver, StackRouter router) {
      final redirectPath = AppRouter.getDefaultLink();

      if (redirectPath != "/") {
        router.replacePath(redirectPath);

      } else {
        resolver.next(true);
      }
  }
}