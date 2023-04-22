import 'package:av_app/pages/PlayingPage.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

Future<void> main() async {

  await Supabase.initialize(
    url: 'https://jyghacisbuntbrshhhey.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5Z2hhY2lzYnVudGJyc2hoaGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxMjAyMjksImV4cCI6MTk5NzY5NjIyOX0.SLVxu1YRl2iBYRqk2LTm541E0lwBiP4FBebN8PS0Rqg',
  );
  runApp(const MyApp());
}

final supabase = Supabase.instance.client;

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Absolventský Velehrad',
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
        fontFamily: 'RussoOne',
        secondaryHeaderColor: const Color(0xFFBA5D3F), colorScheme: ColorScheme.fromSwatch(primarySwatch: primarySwatch).copyWith(background: backgroundColor)
      ),
      home: const MyHomePage(title: 'Absolventský Velehrad'),
    );
  }
}

class MyHomePage extends StatefulWidget {
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

class _MyHomePageState extends State<MyHomePage> {

  String futureProgram = "loading...";

  @override
  void initState() {
    super.initState();
    getFirstProgramTitle().then((fp) {
      setState(() {
        futureProgram = fp;
      });
    });
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
      body: Column(

        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        mainAxisSize: MainAxisSize.max,
        children: <Widget> [
          Padding(
              padding: const EdgeInsets.all(24.0),
              child: SvgPicture.asset(
            width: 250,
            semanticsLabel: 'Absolventský Velehrad',
            'assets/images/avlogo.svg',
          )),
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 48.0),
            child: Row(
            // Column is also a layout widget. It takes a list of children and
            // arranges them vertically. By default, it sizes itself to fit its
            // children horizontally, and tries to be as tall as its parent.
            //
            // Invoke "debug painting" (press "p" in the console, choose the
            // "Toggle Debug Paint" action from the Flutter Inspector in Android
            // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
            // to see the wireframe for each widget.
            //
            // Column has various properties to control how it sizes itself and
            // how it positions its children. Here we use mainAxisAlignment to
            // center the children vertically; the main axis here is the vertical
            // axis because Columns are vertical (the cross axis would be
            // horizontal).
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Column(
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  MainPageButton(
                    onPressed: _programPressed,
                    backgroundColor: primaryBlue1,
                    child: const Icon(Icons.calendar_month),
                  ),// <-- Icon
                  const Text("Program"), // <-- Text
                ],
              ),
              Column(
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  MainPageButton(
                    onPressed: _programPressed,
                    backgroundColor: primaryYellow,
                    child: const Icon(Icons.newspaper),
                  ),// <-- Icon
                  const Text("Ohlášky"), // <-- Text
                ],
              ),
              Column(
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  MainPageButton(
                    onPressed: _programPressed,
                    backgroundColor: primaryRed,
                    child: const Icon(Icons.map),
                  ),// <-- Icon
                  const Text("Mapa"), // <-- Text
                ],
              ),
              Column(
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  MainPageButton(
                    onPressed: _infoPressed,
                    backgroundColor: primaryBlue2,
                    child: const Icon(Icons.info),
                  ),// <-- Icon
                  const Text("Info"), // <-- Text
                ],
              ),
            ],
        ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 48.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Column(
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    MainPageButton(
                      onPressed: _loginPressed,
                      backgroundColor: primaryBlue2,
                      child: const Icon(Icons.login),
                    ), // <-- Icon
                    const Text("Přihlášení"), // <-- Text
                  ],
                ),
              ],
            ),
          ),
              Padding(
          padding: const EdgeInsets.symmetric(vertical: 48.0),
          child: Text(futureProgram))
          ],
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }

  Future<String> getFirstProgramTitle() async {
    var programJson = await supabase
        .from('events')
        .select('title')
        .limit(1)
        .single();
    return programJson['title'].toString();
  }

  void _programPressed() {
    Fluttertoast.showToast(msg: ("any button was pressed"));
  }

  void _infoPressed(){
    Navigator.push(context, MaterialPageRoute(builder: (context) => const PlayingPage()));
  }

  void _loginPressed() {
    Navigator.push(
        context, MaterialPageRoute(builder: (context) => const LoginPage()));
  }
}

MaterialColor primarySwatch = const MaterialColor(
  0xFF2C677B,
  <int, Color>{
    50: Color(0xFFE1F0F4),
    100: Color(0xFFB4D9E4),
    200: Color(0xFF84BFD3),
    300: Color(0xFF55A5C2),
    400: Color(0xFF3994B6),
    500: Color(0xFF1D838A),
    600: Color(0xFF176E6F),
    700: Color(0xFF125954),
    800: Color(0xFF0C4239),
    900: Color(0xFF062E1E),
  },
);

const backgroundColor = Color(0xFFD3D3D3);
const primaryBlue1 = Color(0xFF2C677B);
const Color primaryRed = Color(0xFFBA5D3F);
const primaryYellow = Color(0xFFE0B73B);
const primaryBlue2 = Color(0xFF2A77A0);

ButtonStyle mainPageButtonStyle = OutlinedButton.styleFrom(
    padding: const EdgeInsets.all(16),
    tapTargetSize: MaterialTapTargetSize.padded,
    backgroundColor: primaryRed,
    shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8))
);

class MainPageButton extends StatelessWidget {
  final VoidCallback onPressed;
  final Widget child;
  final EdgeInsets margin;
  final Color backgroundColor;

  const MainPageButton({
    Key? key,
    required this.onPressed,
    required this.child,
    this.backgroundColor = primaryRed,
    this.margin = const EdgeInsets.symmetric(horizontal: 8.0),
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: margin,
      child: ElevatedButton(
        onPressed: onPressed,
        style: mainPageButtonStyle.copyWith(backgroundColor: MaterialStateProperty.all(backgroundColor)),
        child: child,
      ),
    );
  }
}
