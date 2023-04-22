import 'dart:async';
// import 'dart:io';
// import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:path_provider/path_provider.dart';
import 'package:av_app/auth_helper.dart';

class ParseRegistrationsSheet {
  Future<String> Dir() async {
    final directory = await getApplicationDocumentsDirectory();
    return directory.path;
  }

  void parse() async {
    Map<String, String>? h = await AuthHelper.authenticate();

    // Map<String, String> userHeader = {
    //   "Authorization": h["Authorization"],
    // };
    var v = await http.get(
      Uri.parse(
        //"https://script.google.com/macros/s/AKfycbz8gUht2wTEckxY6CFKEI38YbxArqDC2xVL0dPQXhY/dev",
        "https://jsonplaceholder.typicode.com/albums/1",
      ),
      headers: h, //userHeader,
    );

    // final v = await getDataFromGoogleSheet(h);

    // dir += "/soubor.txt";

    //await _localPath;
    //print('$directory');
    return;
  }

  // Future<String> getDataFromGoogleSheet(var h) async {
  //   http.Response data = await http.get(
  //     Uri.parse(
  //       //"https://script.google.com/macros/s/AKfycbz8gUht2wTEckxY6CFKEI38YbxArqDC2xVL0dPQXhY/dev",
  //       //"https://script.google.com/macros/s/AKfycbxE6-AxajgO0kcVuBE8Ra5A4rBSCB10SNA5l7yrjcOUFnHztOfGhjMX81UVVHDDtFZm/exec",
  //       "https://seznam.cz",
  //     ),
  //     //headers: h,
  //   );
  //   dynamic jsonAppData = jsonDecode(data.body);
  //   return '';
  // }

  // DateTime _convertDateFromString(String date) {
  //   return DateTime.parse(date);
  // }
}
