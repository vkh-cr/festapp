import 'package:festapp/appConfig.dart';
import 'package:festapp/data/DataService.dart';
import 'package:festapp/data/RightsHelper.dart';
import 'package:festapp/models/OccasionUserModel.dart';
import 'package:festapp/models/PlaceModel.dart';
import 'package:festapp/pages/AdministrationPage.dart';
import 'package:festapp/pages/EventPage.dart';
import 'package:festapp/pages/HtmlEditorPage.dart';
import 'package:festapp/pages/InfoPage.dart';
import 'package:festapp/pages/LoginPage.dart';
import 'package:festapp/pages/MapPage.dart';
import 'package:festapp/pages/NewsPage.dart';
import 'package:festapp/pages/MySchedulePage.dart';
import 'package:festapp/pages/ResetPasswordPage.dart';
import 'package:festapp/pages/ForgotPassword.dart';
import 'package:festapp/pages/SongPage.dart';
import 'package:festapp/pages/TimetablePage.dart';
import 'package:festapp/pages/UserPage.dart';
import 'package:festapp/services/NavigationService.dart';
import 'package:festapp/services/ToastHelper.dart';
import 'package:flutter/cupertino.dart';
import 'package:go_router/go_router.dart';

import 'main.dart';

class RouterService{
  static const LINK = "link";
  static const LINK_PATH = "/:$LINK";
  static String currentOccasionLink = "";

  static String getCurrentLink() => "/$currentOccasionLink/";

  static Future<T?> navigateOccasion<T extends Object?>(BuildContext context, String location, {Object? extra})
  {
    return context.push(RouterService.getCurrentLink()+location, extra: extra);
  }

  static Future<T?> navigate<T extends Object?>(BuildContext context, String location, {Object? extra})
  {
    return context.push("/$location", extra: extra);
  }

  static void pushReplacementFull<T extends Object?>(BuildContext context, String location, {Object? extra})
  {
    return context.pushReplacement("/$location", extra: extra);
  }

  static void pushReplacementOccasion<T extends Object?>(BuildContext context, String location, {Object? extra})
  {
    return context.pushReplacement(RouterService.getCurrentLink()+location, extra: extra);
  }

  static void goBackOrHome(BuildContext context){
    if(!context.canPop())
    {
      navigate(context, "");
      return;
    }
    context.pop();
  }

  static void goBackOrInitial(BuildContext context){
    if(!context.canPop())
    {
      goToInitial(context);
      return;
    }
    context.pop();
  }

  static void goToInitial(BuildContext context){
    navigateOccasion(context, "/${AppConfig.defaultLink}");
  }

  static Uri getCurrentUri(){
    return Uri.base;
  }

  static final router = GoRouter(
    navigatorKey: NavigationService.navigatorKey,
    initialLocation: "/${AppConfig.defaultLink}",
    routes: <GoRoute>[
        GoRoute(
          path: "/",
          builder: (context, state) {
            currentOccasionLink = "";
            return const MyHomePage(title: MyHomePage.HOME_PAGE);
          },
        ),
        GoRoute(
        path: "/${ResetPasswordPage.ROUTE}",
        builder: (context, state) => const ResetPasswordPage(),
        ),
        GoRoute(
          path: "/${ForgotPasswordPage.ROUTE}",
          builder: (context, state) => const ForgotPasswordPage(),
        ),
        GoRoute(
          path: "/${LoginPage.ROUTE}",
          builder: (context, state) => const LoginPage(),
        ),
        GoRoute(
          path: LINK_PATH,
          builder: (context, state) {
            currentOccasionLink = state.pathParameters[LINK]??"";
            return const MyHomePage(title: MyHomePage.HOME_PAGE,);
          },
          routes: <RouteBase>[
            GoRoute(
              path: MapPage.ROUTE,
              builder: (context, state) => MapPage(place: state.extra as PlaceModel?),
              routes: <RouteBase>[
                GoRoute(
                  path: ":id",
                  builder: (context, state) {
                    var id = int.parse(state.pathParameters["id"] ?? "0");
                    return MapPage(id: id);
                  },
                )
              ],
            ),
            GoRoute(
              path: "${EventPage.ROUTE}/:id",
              builder: (context, state) {
                var id = int.parse(state.pathParameters["id"] ?? "0");
                return EventPage(id: id);
              },
            ),
            GoRoute(
              path: InfoPage.ROUTE,
              builder: (context, state) => InfoPage(),
              routes: <RouteBase>[
                GoRoute(
                  path: ":type",
                  builder: (context, state) {
                    var type = state.pathParameters["type"];
                    return InfoPage(type: type);
                  },
                )
              ],
            ),
            GoRoute(
              path: SongPage.ROUTE,
              builder: (context, state) => SongPage(),
            ),
            GoRoute(
              path: UserPage.ROUTE,
              builder: (context, state) => const UserPage(),
            ),
            GoRoute(
              path: HtmlEditorPage.ROUTE,
              builder: (context, state) =>
                  HtmlEditorPage(content: state.extra as String?),
            ),
            GoRoute(
              path: AdministrationPage.ROUTE,
              builder: (context, state) => const AdministrationPage(),
            ),
            GoRoute(
              path: NewsPage.ROUTE,
              builder: (context, state) => const NewsPage(),
            ),
            GoRoute(
              path: MySchedulePage.ROUTE,
              builder: (context, state) => const MySchedulePage(),
            ),
            GoRoute(
              path: ProgramViewPage.ROUTE,
              builder: (context, state) => const ProgramViewPage.TimetablePage(),
            ),
          ]
      ),
    ],
  );

  static Future<bool> checkOccasionLinkAndRedirect(BuildContext context) async {
    bool canContinue = true;
    var checkedObject = await DataService.checkOccasionLink(RouterService.currentOccasionLink);
    RightsHelper.currentUserOccasion = checkedObject.user;
    RightsHelper.currentOccasion = checkedObject.occasionId;
    RightsHelper.currentLink = checkedObject.link;

    if(checkedObject.link!=RouterService.currentOccasionLink && checkedObject.isAvailable())
    {
      RouterService.pushReplacementFull(context, checkedObject.link!);
      canContinue = false;
    }
    else if(checkedObject.isAccessDenied())
    {
      ToastHelper.Show("You cannot access this occasion.");
      canContinue = false;
    }
    else if(checkedObject.isNotFound())
    {
      ToastHelper.Show("The occasion has not been found.");
      canContinue = false;
    }

    return canContinue;
  }
}

