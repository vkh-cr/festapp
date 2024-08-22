import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataServices/DataService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/pages/AdminDashboardPage.dart';
import 'package:fstapp/pages/AdministrationPage.dart';
import 'package:fstapp/pages/CheckPage.dart';
import 'package:fstapp/pages/EventPage.dart';
import 'package:fstapp/pages/HomePage.dart';
import 'package:fstapp/pages/HtmlEditorPage.dart';
import 'package:fstapp/pages/InfoPage.dart';
import 'package:fstapp/pages/InstallPage.dart';
import 'package:fstapp/pages/LoginPage.dart';
import 'package:fstapp/pages/MapPage.dart';
import 'package:fstapp/pages/NewsFormPage.dart';
import 'package:fstapp/pages/NewsPage.dart';
import 'package:fstapp/pages/MySchedulePage.dart';
import 'package:fstapp/pages/ResetPasswordPage.dart';
import 'package:fstapp/pages/ForgotPasswordPage.dart';
import 'package:fstapp/pages/SettingsPage.dart';
import 'package:fstapp/pages/SignupPage.dart';
import 'package:fstapp/pages/SongPage.dart';
import 'package:fstapp/pages/TimetablePage.dart';
import 'package:fstapp/pages/UserPage.dart';
import 'package:fstapp/services/NavigationService.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:flutter/cupertino.dart';
import 'package:go_router/go_router.dart';

class RouterService{
  static const LINK = "link";
  static const LINK_PATH = "/:$LINK";
  static String currentOccasionLink = "";

  static String getCurrentLink() => "/$currentOccasionLink/";

  static Future<T?> navigateOccasion<T extends Object?>(BuildContext context, String location, {Object? extra})
  {
    return context.push(RouterService.getCurrentLink()+location, extra: extra);
  }

  static Future<T?> changeOnOccasion<T extends Object?>(BuildContext context, String location, {Object? extra})
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
    Router.neglect(context, () => context.pop());
  }

  static void goBackOrInitial(BuildContext context){
    if(!context.canPop())
    {
      goToInitial(context);
      return;
    }
    Router.neglect(context, () => context.pop());
  }

  static void goBack(BuildContext context, [dynamic object]){
    Router.neglect(context, () => context.pop(object));
  }

  static void goToInitial(BuildContext context){
    navigateOccasion(context, "/${AppConfig.defaultLink}");
  }

  static Uri getCurrentUri(){
    return Uri.base;
  }

  static String getCurrentUriWithOccasion(){
    if(Uri.base.scheme == "http" || Uri.base.scheme == "https"){
      return "${Uri.base.origin}/#${getCurrentLink()}";
    }
    return "${Uri.base}/#${getCurrentLink()}";
  }

  static final router = GoRouter(
    navigatorKey: NavigationService.navigatorKey,
    initialLocation: "/${AppConfig.defaultLink}",
    routes: <GoRoute>[
        GoRoute(
          path: "/",
          builder: (context, state) {
            currentOccasionLink = "";
            return const HomePage(title: HomePage.HOME_PAGE);
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
          path: "/${SignupPage.ROUTE}",
          builder: (context, state) => const SignupPage(),
        ),
        GoRoute(
          path: "/${SettingsPage.ROUTE}",
          builder: (context, state) => const SettingsPage(),
        ),
        GoRoute(
          path: "/${InstallPage.ROUTE}",
          builder: (context, state) => const InstallPage(),
        ),
        GoRoute(
          path: "/${AdminDashboardPage.ROUTE}",
          builder: (context, state) => const AdminDashboardPage(),
        ),
        GoRoute(
          path: "/${CheckPage.ROUTE}/:id",
          builder: (context, state) {
            var id = int.parse(state.pathParameters["id"] ?? "0");
            return CheckPage(id: id);
          },
        ),
        GoRoute(
          path: LINK_PATH,
          builder: (context, state) {
            currentOccasionLink = state.pathParameters[LINK]??"";
            return const HomePage(title: HomePage.HOME_PAGE,);
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
                  path: ":id",
                  builder: (context, state) {
                    var id = int.parse(state.pathParameters["id"] ?? "0");
                    return InfoPage(id: id);
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
                  HtmlEditorPage(content: state.extra as Map<String, dynamic>),
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
            GoRoute(
              path: NewsFormPage.ROUTE,
              builder: (context, state) => const NewsFormPage(),
            ),
          ]
      ),
    ],
  );

  static Future<bool> checkOccasionLinkAndRedirect(BuildContext context) async {
    bool canContinue = true;
    var checkedObject = await DataService.checkOccasionLink(RouterService.currentOccasionLink);
    RightsService.currentUserOccasion = checkedObject.user;
    RightsService.currentOccasion = checkedObject.occasionId;
    RightsService.currentLink = checkedObject.link;

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

