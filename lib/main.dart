import 'dart:async';
import 'dart:convert';
import 'package:avapp/config.dart';
import 'package:avapp/models/PlaceModel.dart';
import 'package:avapp/services/NotificationHelper.dart';
import 'package:avapp/services/StorageHelper.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:get_storage/get_storage.dart';
import 'package:avapp/pages/AdministrationPage.dart';
import 'package:avapp/pages/InfoPage.dart';
import 'package:avapp/pages/MapPage.dart';
import 'package:avapp/pages/UserPage.dart';
import 'package:avapp/pages/NewsPage.dart';
import 'package:avapp/services/DataService.dart';
import 'package:avapp/services/ToastHelper.dart';
import 'package:avapp/widgets/ProgramTabView.dart';
import 'package:avapp/widgets/ProgramTimeline.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:go_router/go_router.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:supabase_flutter/supabase_flutter.dart';


import 'models/EventModel.dart';
import 'pages/EventPage.dart';
import 'pages/HtmlEditorPage.dart';
import 'pages/LoginPage.dart';
import 'pages/ProgramPage.dart';
import 'services/NavigationService.dart';
import 'styles/Styles.dart';
import 'configure_nonweb.dart' if (dart.library.html) 'configure_web.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:badges/badges.dart' as badges;

Future<void> main() async {
  await initializeEverything();
  runApp(
    EasyLocalization(
        supportedLocales: config.AvailableLanguages.map((e) => e.locale).toList(),
        path: "assets/translations",
        fallbackLocale: config.AvailableLanguages.map((e) => e.locale).first,
        useOnlyLangCode: true,
        saveLocale: true,
        child: const MyApp()
    ),
  );
}

Future<void> initializeEverything() async {
  //configureUrlFormat();
  GoRouter.optionURLReflectsImperativeAPIs = true;
  await GetStorage.init();

  await Supabase.initialize(
    url: config.supabase_url,
    anonKey: config.anon_key,
  );
  initializeDateFormatting();

  WidgetsFlutterBinding.ensureInitialized();
  await EasyLocalization.ensureInitialized();

  if(!DataService.isLoggedIn())
  {
    DataService.tryAuthUser();
  }
  try {
    NotificationHelper.Initialize();
    DataService.loadOrInitGlobalSettings();
  } catch(e) {}
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: _router,
      debugShowCheckedModeBanner: false,
        // builder: (context, child) {
        //   final mediaQueryData = MediaQuery.of(context);
        //   final scale = mediaQueryData.textScaleFactor.clamp(1.0, 1.3);
        //   return MediaQuery(
        //     child: child!,
        //     data: MediaQuery.of(context).copyWith(textScaleFactor: scale),
        //   );
        // },
      localizationsDelegates: context.localizationDelegates,
      supportedLocales: context.supportedLocales,
      locale: context.locale,
      title: MyHomePage.HOME_PAGE,
      theme: ThemeData(
          // This is the theme of your application.
          //
          // Try running your application with "flutter run". You'll see the
          // application has a blue toolbar. Then, without quitting the app, try
          // changing the primarySwatch below to Colors.green and then invoke
          // "hot reload" (press "r" in the console where you ran "flutter run",
          // or simply save your changes to "hot reload" in a Flutter IDE).
          // Notice that the counter didn't reset back to zero; the application
          // is not restarted.
          fontFamily: 'Futura',
          useMaterial3: false,
          scaffoldBackgroundColor: config.backgroundColor,
          secondaryHeaderColor: const Color(0xFFBA5D3F),
          colorScheme: ColorScheme.fromSwatch(primarySwatch: primarySwatch)
              .copyWith(background: config.backgroundColor)),
    ).animate().fadeIn(
      duration: 300.ms,
    );
  }
}

final _router = GoRouter(
  navigatorKey: NavigationService.navigatorKey,
  initialLocation: '/',
  routes: <GoRoute>[
    GoRoute(
      path: '/',
      builder: (context, state) => const MyHomePage(title: MyHomePage.HOME_PAGE),
    ),
    GoRoute(
      path: MapPage.ROUTE,
      builder: (context, state) => MapPage(place: state.extra as PlaceModel?),
      routes: <RouteBase>[
      GoRoute(
        path: ":id",
        builder: (context, state) {
          var id = int.parse(state.pathParameters["id"]??"0");
          return MapPage(id: id);
          },
        )
      ],
    ),
    GoRoute(
      path: "${EventPage.ROUTE}/:id",
      builder: (context, state) {
        var id = int.parse(state.pathParameters["id"]??"0");
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
      builder: (context, state) => HtmlEditorPage(content: state.extra as String?),
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
      path: ProgramPage.ROUTE,
      builder: (context, state) => const ProgramPage(),
    ),
  ],
);

class MyHomePage extends StatefulWidget {
  static const HOME_PAGE = config.home_page;

  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> with WidgetsBindingObserver {

String userName = "";

@override
void initState() {
  super.initState();
  WidgetsBinding.instance.addObserver(this);
}

@override
void didChangeDependencies() {
  super.didChangeDependencies();
  loadData();
}

@override
void didChangeAppLifecycleState(AppLifecycleState state) {
  if(state == AppLifecycleState.resumed)
  {
    loadData();
  }
}

@override
void dispose() {
  WidgetsBinding.instance.removeObserver(this);
  super.dispose();
}

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
        body: SafeArea(
      child: Column(
        mainAxisSize: MainAxisSize.max,
        children: <Widget>[
          Padding(
              padding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  GestureDetector(
                    onDoubleTap: () async {
                      var packageInfo = await PackageInfo.fromPlatform();
                      ToastHelper.Show("${packageInfo.appName} ${packageInfo.version}+${packageInfo.buildNumber}");
                    },
                    child: SvgPicture.asset(
                height: 112,
                semanticsLabel: 'Festapp logo',
                'assets/icons/festapplogo.svg',
              ),
                  ),
                  const Spacer(),
                  Visibility(
                    visible: !DataService.isLoggedIn(),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Column(
                          mainAxisSize: MainAxisSize.min,
                          children: <Widget>[
                            CircularButton(
                              onPressed: _loginPressed,
                              backgroundColor: config.color1,
                              child: const Icon(Icons.login),
                            ),
                            Text("Sign in".tr()),
                          ],
                        ),
                      ],
                    ),
                  ),
                  Visibility(
                    visible: DataService.isLoggedIn(),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Column(
                          mainAxisSize: MainAxisSize.min,
                          children: <Widget>[
                            CircularButton(
                              onPressed: _profileButtonPressed,
                              backgroundColor: config.color1,
                              child: const Icon(Icons.account_circle_rounded),
                            ),
                            Text(userName),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              )),
          Expanded(child: ProgramTabView(events: _dots, onEventPressed: _eventPressed,)),
          Padding(
            padding: const EdgeInsets.only(bottom: 6.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Column(
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    MainPageButton(
                      onPressed: _programPressed,
                      backgroundColor: config.color1,
                      child: const Icon(Icons.calendar_month),
                    ),
                    Text("My program".tr()),
                  ],
                ),
                Column(
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    badges.Badge(
                      showBadge: showMessageCount(),
                      badgeContent: SizedBox(
                        width: 20, height: 20,
                        child: Center(
                          child: Text(messageCountString(), style: const TextStyle(
                            color: Colors.white,
                            fontSize: 16
                          )
                      ),
                    )
                ),
                      child: MainPageButton(
                        onPressed: _newsPressed,
                        backgroundColor: config.color3,
                        child: const Icon(Icons.newspaper),
                      ),
                    ),
                    Text("News".tr()),
                  ],
                ),
                Column(
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    MainPageButton(
                      onPressed: _mapPressed,
                      backgroundColor: config.color2,
                      child: const Icon(Icons.map),
                    ),
                    Text("Map".tr()),
                  ],
                ),
                Column(
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    MainPageButton(
                      onPressed: _infoPressed,
                      backgroundColor: config.color4,
                      child: const Icon(Icons.info),
                    ),
                    Text("Info".tr()),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    ));
  }

  void _programPressed() {
  if(!DataService.isLoggedIn())
    {
      ToastHelper.Show("Sign in to view My program!".tr());
      return;
    }
    context.push(ProgramPage.ROUTE).then((value) => loadData());
  }

  Future<void> _newsPressed() async {
    context.push(NewsPage.ROUTE).then((value) => loadData());
  }

  void _infoPressed() {
    context.push(InfoPage.ROUTE).then((value) => loadData());
  }

  void _mapPressed() {
    context.push(MapPage.ROUTE).then((value) => loadData());
  }

  void _loginPressed() {
    context.push(LoginPage.ROUTE).then((value) => loadData());
  }

  void _profileButtonPressed() {
    context.push(UserPage.ROUTE).then((value) => loadData());
  }

  final List<TimeLineItem> _dots = [];
  final List<EventModel> _events = [];

  Future<void> loadEventParticipants() async {
    // update sign in status / current participants for events
    await DataService.loadEventsParticipantsAndStatus(_events);
    for (var e in _events)
    {
        var dot = _dots.singleWhere((element) => element.id == e.id!);
        setState(() {
          dot.rightText = e.toString();
          dot.dotType = TimeLineItem.getIndicatorFromEvent(e);
        });
    }

    //update offline
    var encoded = jsonEncode(_events);
    StorageHelper.Set(EventModel.eventTableStorage, encoded);
  }

  _eventPressed(int id) {
    context.push("${EventPage.ROUTE}/$id");
  }

  int _messageCount = 0;
  bool showMessageCount() => _messageCount>0;
  String messageCountString() => _messageCount<100?_messageCount.toString():"99";
  Future<void> loadData() async {
    //get data from offline
    try
    {
      var eventData = StorageHelper.Get(EventModel.eventTableStorage);
      if(eventData!=null && _events.isEmpty)
      {
          var offlineEventsData = json.decode(eventData);
          setState((){
            _events.addAll(List<EventModel>.from(offlineEventsData.map((o)=>EventModel.fromJson(o))));
            _dots.clear();
            _dots.addAll(_events.map((e) => TimeLineItem.fromEventModel(e)));
          });
      }
    }
    catch(e)
    {
      // make sure not to fail on start
    }

    if(DataService.isLoggedIn())
    {
      await DataService.getCurrentUserInfo().then((value) => userName = value.name!);
    }

    //load online data
    await DataService.updateEvents(_events)
        .whenComplete(() async {
          _dots.clear();
          _dots.addAll(_events.map((e) => TimeLineItem.fromEventModel(e)));
          if(!DataService.isLoggedIn()) {
            return;
          }
          var count = await DataService.countNewMessages();

          setState(() {
            _messageCount = count;
          });
        });

    loadEventParticipants();
  }
}

