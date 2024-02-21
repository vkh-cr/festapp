import 'package:avapp/models/PlaceModel.dart';
import 'package:avapp/pages/AdministrationPage.dart';
import 'package:avapp/pages/EventPage.dart';
import 'package:avapp/pages/HtmlEditorPage.dart';
import 'package:avapp/pages/InfoPage.dart';
import 'package:avapp/pages/LoginPage.dart';
import 'package:avapp/pages/MapPage.dart';
import 'package:avapp/pages/NewsPage.dart';
import 'package:avapp/pages/MySchedulePage.dart';
import 'package:avapp/pages/TimetablePage.dart';
import 'package:avapp/pages/UserPage.dart';
import 'package:avapp/services/NavigationService.dart';
import 'package:go_router/go_router.dart';

import 'main.dart';

final router = GoRouter(
  navigatorKey: NavigationService.navigatorKey,
  initialLocation: "/",
  routes: <GoRoute>[
    GoRoute(
      path: "/",
      builder: (context, state) =>
          const MyHomePage(title: MyHomePage.HOME_PAGE),
    ),
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
      builder: (context, state) => const InfoPage(),
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
  ],
);
