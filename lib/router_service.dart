import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/data_models/unit_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/pages/form/pages/reservation_page.dart';
import 'package:fstapp/pages/occasionAdmin/admin_page.dart';

class RouterService {
  static const link = "link";
  static const subpage = "subpage";
  static const linkPath = "/:$link";
  static String currentOccasionLink = "";

  //todo temporary fix
  static String getCurrentLink() => currentOccasionLink.isNotEmpty ? "/$currentOccasionLink/" : "/offlineOccasion/"; //to avoid offline errors

  static Future<T?> navigatePageInfo<T extends Object?>(BuildContext context, PageRouteInfo route){
    return context.router.push(route);
  }

  static Future<T?> navigateOccasion<T extends Object?>(
      BuildContext context, String path) {
    return context.router.pushPath(getCurrentLink() + path);
  }

  static Future<T?> navigateOccasionNoContext<T extends Object?>(
      String path) {
    return router.pushPath(getCurrentLink() + path);
  }

  static Future<T?> changeOnOccasion<T extends Object?>(
      BuildContext context, String path, {Object? extra}) {
    return context.router.push(
      PageRouteInfo<void>(getCurrentLink() + path, args: extra),
    );
  }

  static Future<T?> navigate<T extends Object?>(BuildContext context, String path) {
    path = fixPath(path);
    return context.router.pushPath(path);
  }

  static String fixPath(String path) {
    if(!path.startsWith("/")){
      path = "/$path";
    }
    return path;
  }

  static Future<void> pushReplacementFull<T extends Object?> (
      BuildContext context, String path) async {
    path = fixPath(path);
    await context.router.replacePath(path);
  }

  static void pushReplacementOccasion<T extends Object?>(
      BuildContext context, String path) {
    context.router.replacePath(getCurrentLink() + path);
  }

  static void popOrHome(BuildContext context) {
    if (context.router.canPop()) {
      context.router.maybePop();
    } else {
      navigateOccasion(context, "");
    }
  }

  static void scheduleBack(BuildContext context) {
    //if(context.router.canPop()){
    context.router.replace(ScheduleRoute());
    context.router.maybePopTop();
    //}
  }

  static bool canPop(BuildContext context) => context.router.canPop();
  static bool canNavigateBack(BuildContext context) => context.router.canNavigateBack;

  static void goBackOrInitial(BuildContext context) {
    if (!context.router.canPop()) {
      goToInitial(context);
    } else {
      context.router.back();
    }
  }

  static void goBack(BuildContext context, [dynamic result]) {
    context.router.pop(result);
  }

  static Future<void> goToUnit(BuildContext context, int? unitId) async {
    if(unitId == null){
      goToInitial(context);
      return;
    }
    await context.router.replace(UnitRoute(id: unitId));
  }

  static void goToInitial(BuildContext context) {
    navigateOccasion(context, "");
  }

  static Uri getCurrentUri() {
    return Uri.base;
  }

  static String getCurrentUriWithOccasion() {
    if (Uri.base.scheme == "http" || Uri.base.scheme == "https") {
      return "${Uri.base.origin}/#${getCurrentLink()}";
    }
    return "${Uri.base}/#${getCurrentLink()}";
  }

  static final router = AppRouter();

  static void popTwo(BuildContext context) {
    Navigator.of(context)..pop()..pop();
  }

  /// Navigates to a specific unit's edit page after updating app data.
  static Future<void> navigateToUnit(BuildContext context, UnitModel unit) async {
    await RightsService.updateAppData(
        unitId: unit.id, force: true, refreshOffline: false);
    await RouterService.navigate(context, "unit/${unit.id}/edit");
  }

  /// Navigates to a specific occasion's admin page after updating app data.
  static Future<void> navigateToOccasionByLink(BuildContext context, String link) async {
    await RightsService.updateAppData(
        link: link, force: true, refreshOffline: false);
    await RouterService.navigate(context, "/$link/${AdminPage.ROUTE}");
  }

  /// Navigates to a specific occasion's reservation page after updating app data.
  static Future<void> navigateToOccasionReservationsByLink(BuildContext context, String link) async {
    await RightsService.updateAppData(
        link: link, force: true, refreshOffline: false);
    await RouterService.navigate(context, "/$link/${ReservationsPage.ROUTE}");
  }

  /// Navigates to an occasion's administration page based on context.
  ///
  /// This method determines the destination by first checking the type of the
  /// current widget from the `BuildContext`. If the context is an `AdminPage` or
  /// `ReservationsPage`, it navigates to the corresponding view.
  ///
  /// If the widget type isn't a recognized admin page, it uses the fallback route
  /// defined in `AppConfig.defaultAdministrationRoute`.
  ///
  /// The [occasionLink] can be passed directly. If not, it's extracted from
  /// the current route's parameters.
  static Future<void> navigateToOccasionAdministration(
      BuildContext context, {String? occasionLink}) async {
    String? resolvedLink = occasionLink;

    // Get the link from arguments or route parameters.
    if (resolvedLink == null || resolvedLink.isEmpty) {
      resolvedLink = context.routeData.params.getString(link);
    }

    // If no link could be resolved, we can't navigate.
    if (resolvedLink.isEmpty) {
      debugPrint("RouterService Error: Could not resolve occasion link for navigation.");
      return;
    }

    // 1. Decide destination based on the current widget type.
    if(context.widget is AdminPage) {
      await navigateToOccasionByLink(context, resolvedLink);
      return;
    } else if (context.widget is ReservationsPage) {
      await navigateToOccasionReservationsByLink(context, resolvedLink);
      return;
    }

    // 2. Fallback to the default route from AppConfig.
    if (AppConfig.defaultAdministrationRoute == ReservationsPage.ROUTE) {
      await navigateToOccasionReservationsByLink(context, resolvedLink);
    } else {
      // Default to the main admin page.
      await navigateToOccasionByLink(context, resolvedLink);
    }
  }
}