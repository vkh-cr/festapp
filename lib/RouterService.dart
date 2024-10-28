import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/AppRouter.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:fstapp/services/ToastHelper.dart';

class RouterService {
  static const LINK = "link";
  static const LINK_PATH = "/:$LINK";
  static String currentOccasionLink = "";

  static String getCurrentLink() => "/$currentOccasionLink/";

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

  static void goBackOrHome(BuildContext context) {
    if (!context.router.canPop()) {
      navigateOccasion(context, "");
    } else {
      context.router.maybePop();
    }
  }

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

  static Future<bool> updateOccasionFromLink(String newLink) async {
    bool canContinue = true;
    var checkedObject = await SynchroService.getOccasionFromLink(newLink);
    RightsService.currentUserOccasion = checkedObject.user;
    RightsService.currentOccasion = checkedObject.occasionId;
    RightsService.currentLink = checkedObject.link;
    RightsService.isAdminField = checkedObject.isAdmin;

    if (checkedObject.link != RouterService.currentOccasionLink &&
        checkedObject.isAvailable()) {
      canContinue = true;
    } else if (checkedObject.isAccessDenied()) {
      ToastHelper.Show("You cannot access this occasion.");
      canContinue = false;
    } else if (checkedObject.isNotFound()) {
      ToastHelper.Show("The occasion has not been found.");
      canContinue = false;
    }

    return canContinue;
  }
}
