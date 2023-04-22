import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisSize: MainAxisSize.max,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 48.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Column(
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    //InsertUsername(),
                    // Row(
                    //   mainAxisAlignment: MainAxisAlignment.center,
                    //   children: [TextFormField()],
                    // ),
                    // Dominik: tohle nefunguje
                    //const MyCustomForm(),
                    ElevatedButton(
                        onPressed: _callApiPressed,
                        child: const Text('Přihlásit')),
                  ],
                ),
              ],
            ),
          ),
          const Padding(
              padding: EdgeInsets.all(24.0), child: Text("Přihlášení"))
        ],
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }

  void _callApiPressed() async {}
}

// class InsertUsername extends StatelessWidget {
//   const InsertUsername({
//     super.key,
//   });

//   @override
//   Widget build(BuildContext context) {
//     return Column(
//       child: TextField(
//           //keyboardType: TextInputType.number,
//           ),
//     );
//   }
//}

class MyCustomForm extends StatelessWidget {
  const MyCustomForm({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: 8, vertical: 16),
          child: TextField(
            decoration: InputDecoration(
              border: OutlineInputBorder(),
              hintText: 'Enter a search term',
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 16),
          child: TextFormField(
            decoration: const InputDecoration(
              border: UnderlineInputBorder(),
              labelText: 'Enter your username',
            ),
          ),
        ),
      ],
    );
  }
}
