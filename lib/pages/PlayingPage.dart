import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

import '../services/DataService.dart';

class PlayingPage extends StatefulWidget {
  const PlayingPage({Key? key}) : super(key: key);

  @override
  _PlayingPageState createState() => _PlayingPageState();
}

class _PlayingPageState extends State<PlayingPage> {
  String infoText = "Info";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisSize: MainAxisSize.max,
        children: <Widget> [
          const Padding(
              padding: EdgeInsets.all(24.0),
              child: Text("Our playing page")),
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 48.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Column(
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    ElevatedButton(
                        onPressed: _callApiPressed,
                        child: const Text('Call API!')),
                    Text(infoText), // <-- Text
                  ],
                ),
              ],
            ),
          )],
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }


  void _callApiPressed() async{
    var client = DataService();
    try{
      setState(() {
        infoText = "called";
      });
      Fluttertoast.showToast(msg: "called");
    }catch(e){
      Fluttertoast.showToast(msg: "Api call error");
    }
  }
}