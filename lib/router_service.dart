import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/data_services/app_config_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services/synchro_service.dart';
import 'package:fstapp/services/link_model.dart';

class RouterService {
  static const link = "link";
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

  static Future<bool> updateOccasionFromLink(LinkModel link) async {
    bool canContinue = true;
    var checkedObject = await SynchroService.getAppConfig(occasionLink: link.occasionLink, formLink: link.formLink);
    RightsService.occasionLinkModel = checkedObject;
    RightsService.currentLink = checkedObject.occasion?.link;
    AppConfigService.versionRecommended = checkedObject.versionRecommended;

    if (checkedObject.occasion?.link != RouterService.currentOccasionLink &&
        checkedObject.isAvailable()) {
      canContinue = true;
    } else if (checkedObject.isAccessDenied()) {
      canContinue = false;
    } else if (checkedObject.isNotFound()) {
      canContinue = false;
    }

    return canContinue;
  }

  static void popTwo(BuildContext context) {
    Navigator.of(context)..pop()..pop();
  }
}
