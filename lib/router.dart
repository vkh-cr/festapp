import 'package:avapp/data/DataService.dart';
import 'package:avapp/models/PlaceModel.dart';
import 'package:avapp/pages/AdministrationPage.dart';
import 'package:avapp/pages/EventPage.dart';
import 'package:avapp/pages/HtmlEditorPage.dart';
import 'package:avapp/pages/InfoPage.dart';
import 'package:avapp/pages/LoginPage.dart';
import 'package:avapp/pages/MapPage.dart';
import 'package:avapp/pages/NewsPage.dart';
import 'package:avapp/pages/MySchedulePage.dart';
import 'package:avapp/pages/SongPage.dart';
import 'package:avapp/pages/TimetablePage.dart';
import 'package:avapp/pages/UserPage.dart';
import 'package:avapp/services/NavigationService.dart';
import 'package:avapp/services/ToastHelper.dart';
import 'package:flutter/cupertino.dart';
import 'package:go_router/go_router.dart';

import 'main.dart';

class RouterService{
  static const LINK = "link";
  static const LINK_PATH = "/:$LINK";
  static String currentOccasionLink = "";
  static String getCurrentLink() => "/$currentOccasionLink/";

  static Future<T?> navigate<T extends Object?>(BuildContext context, String location, {Object? extra})
  {
    return GoRouter.of(context).push(RouterService.getCurrentLink()+location, extra: extra);
  }

  static void pushReplacement<T extends Object?>(BuildContext context, String location, {Object? extra})
  {
    return context.pushReplacement("/"+location, extra: extra);
  }

  static final router = GoRouter(
    navigatorKey: NavigationService.navigatorKey,
    initialLocation: "/",
    routes: <GoRoute>[
      GoRoute(
        path: "/",
        builder: (context, state) {
          currentOccasionLink = "";
          return const MyHomePage(title: MyHomePage.HOME_PAGE);
        },
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
              path: LoginPage.ROUTE,
              builder: (context, state) => const LoginPage(),
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
    var userOccasion = await DataService.checkOccasionLink(RouterService.currentOccasionLink);

    if(userOccasion.link!=RouterService.currentOccasionLink && userOccasion.isAvailable())
    {
      RouterService.pushReplacement(context, userOccasion.link!);
      canContinue = false;
    }
    else if(userOccasion.isAccessDenied())
    {
      ToastHelper.Show("You cannot access this occasion.");
      canContinue = false;
    }
    else if(userOccasion.isNotFound())
    {
      ToastHelper.Show("The occasion has not been found.");
      canContinue = false;
    }

    return canContinue;
  }
}

