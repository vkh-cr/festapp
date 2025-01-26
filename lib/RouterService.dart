import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/AppRouter.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/dataServices/AppConfigService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:fstapp/services/LinkModel.dart';

class RouterService {
  static const LINK = "link";
  static const LINK_PATH = "/:$LINK";
  static String currentOccasionLink = "";

  //todo temporary fix
  static String getCurrentLink() => currentOccasionLink.isNotEmpty ? "/$currentOccasionLink/" : "/offlineOccasion/"; //to avoid offline errors

  static Future<T?> navigatePageInfo<T extends Object?>(BuildContext context, PageRouteInfo route){
    return context.router.push(route);
  }

  static Future<T?> navigateOccasion<T extends Object?>(
      BuildContext context, String path) {
    return context.router.pushNamed(getCurrentLink() + path);
  }

  static Future<T?> changeOnOccasion<T extends Object?>(
      BuildContext context, String path, {Object? extra}) {
    return context.router.push(
      PageRouteInfo<void>(getCurrentLink() + path, args: extra),
    );
  }

  static Future<T?> navigate<T extends Object?>(BuildContext context, String path) {
    path = fixPath(path);
    return context.router.pushNamed(path);
  }

  static String fixPath(String path) {
    if(!path.startsWith("/")){
      path = "/$path";
    }
    return path;
  }

  static void pushReplacementFull<T extends Object?>(
      BuildContext context, String path) {
    path = fixPath(path);
    context.router.replaceNamed(path);
  }

  static void pushReplacementOccasion<T extends Object?>(
      BuildContext context, String path) {
    context.router.replaceNamed(getCurrentLink() + path);
  }

  static void popOrHome(BuildContext context) {
    if (context.router.canPop()) {
      context.router.maybePop();
    } else {
      navigateOccasion(context, "");
    }
  }

  static void scheduleBack(BuildContext context) {
    if(context.router.canNavigateBack){
      context.router.replace(ScheduleRoute());
      context.router.maybePopTop();
    }
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
    context.router.popForced(result);
  }

  static void goToInitial(BuildContext context) {
    //for now initial is home
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
    RightsService.currentOccasionUser = checkedObject.user;
    RightsService.currentUnitUser = checkedObject.unitUser;
    RightsService.currentOccasion = checkedObject.occasionId;
    RightsService.currentLink = checkedObject.link;
    RightsService.isAdminField = checkedObject.isAdmin;
    RightsService.bankAccountAdmin = checkedObject.bankAccountsAdmin;
    AppConfigService.versionRecommended = checkedObject.versionRecommended;

    if (checkedObject.link != RouterService.currentOccasionLink &&
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
