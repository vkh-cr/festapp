import 'package:auto_route/auto_route.dart';
import 'package:flutter/foundation.dart'; // Import for kIsWeb
import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/data_models/unit_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/forms/views/reservation_page.dart';
import 'package:fstapp/pages/occasionAdmin/admin_page.dart';
import 'package:fstapp/services/js/js_interop.dart'; // Import JSInterop
import 'dart:async';

class RouterService {
  static const link = "link";
  static const subpage = "subpage";
  static const linkPath = "/:$link";
  static String currentOccasionLink = "";

  //todo temporary fix
  static String getCurrentLink() => currentOccasionLink.isNotEmpty
      ? "/$currentOccasionLink/"
      : "/offlineOccasion/"; //to avoid offline errors

  static Future<T?> navigatePageInfo<T extends Object?>(
      BuildContext context, PageRouteInfo route) {
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

  static Future<T?> navigate<T extends Object?>(
      BuildContext context, String path) {
    path = fixPath(path);
    return context.router.pushPath(path);
  }

  static String fixPath(String path) {
    if (!path.startsWith("/")) {
      path = "/$path";
    }
    return path;
  }

  static Future<void> pushReplacementFull<T extends Object?>(
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
  static bool canNavigateBack(BuildContext context) =>
      context.router.canNavigateBack;

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
    if (unitId == null) {
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
      return "${Uri.base.origin}${getCurrentLink()}";
    }
    return "${Uri.base}${getCurrentLink()}";
  }

  static final router = AppRouter();

  static void popTwo(BuildContext context) {
    Navigator.of(context)..pop()..pop();
  }

  /// Navigates to a specific unit's edit page after updating app data.
  static Future<void> navigateToUnitAdmin(
      BuildContext context, UnitModel unit) async {
    await RightsService.updateAppData(
        unitId: unit.id, force: true, refreshOffline: false);
    await RouterService.navigate(
        context, "unit/${RightsService.currentUnit()!.id!}/edit");
  }

  static Future<void> navigateHome(BuildContext context) async {
    String targetHomePath = fixPath(""); // This resolves to "/"

    // First, update app data regardless of navigation
    await RightsService.updateAppData(
        unitId: null, force: true, refreshOffline: false);

    // Check if the current path is already the target home path
    if (context.routeData.path == targetHomePath) {
      // Already at home, so don't navigate
      return;
    }

    // Not at home, navigate
    await RouterService.navigate(context, ""); // Navigates to "/"
  }

  /// Navigates to a specific occasion's admin page after updating app data.
  static Future<void> navigateToOccasionByLink(
      BuildContext context, String link) async {
    await RightsService.updateAppData(
        link: link, force: true, refreshOffline: false);
    await RouterService.navigate(context, "/$link/${AdminPage.ROUTE}");
  }

  /// Navigates to a specific occasion's reservation page after updating app data.
  static Future<void> navigateToOccasionReservationsByLink(
      BuildContext context, String link) async {
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
      debugPrint(
          "RouterService Error: Could not resolve occasion link for navigation.");
      return;
    }

    if (!AppConfig.isAppSupported) {
      await navigateToOccasionReservationsByLink(context, resolvedLink);
      return;
    }

    // 1. Decide destination based on the current widget type.
    if (context.widget is AdminPage) {
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

  static final JSInterop _js = JSInterop();

  /// Provides a stream of `popstate` events from the browser.
  /// On non-web platforms, returns an empty stream.
  static Stream<dynamic> get onPopState {
    if (kIsWeb) {
      return _js.onPopState;
    }
    return Stream.empty();
  }

  /// Pushes a new "fake" history state for an overlay.
  /// [overlayTag] is a string like "seat-reservation" to be appended as a hash.
  static void pushOverlayState(String overlayTag) {
    if (kIsWeb) {
      final currentUrl = _js.getCurrentUrl();
      _js.pushState('$currentUrl#$overlayTag');
    }
  }

  /// Triggers a `history.back()` command in the browser.
  static void goBackProgrammatically() {
    if (kIsWeb) {
      _js.goBack();
    }
  }

  /// Gets the current full URL from the browser.
  static String getCurrentBrowserUrl() {
    if (kIsWeb) {
      return _js.getCurrentUrl();
    }
    return Uri.base.toString(); // Fallback
  }

  /// (Legacy Support) Replaces the current history state.
  /// Used by NotificationHelper.
  static void changeUrl(String newUrl) {
    if (kIsWeb) {
      _js.changeUrl(newUrl);
    }
  }
}