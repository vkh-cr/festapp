import 'dart:async';
// import 'dart:io';
// import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:av_app/auth_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class ParseRegistrationsSheet {
  void parse() async {
    Map<String, String>? h = await AuthHelper.authenticate();
    try {
      var u = Uri.https("script.google.com",
          "/macros/s/AKfycbz8gUht2wTEckxY6CFKEI38YbxArqDC2xVL0dPQXhY/dev");
      print("tu");
      var v = await http.get(
        u,
        // Uri.parse(
        //   // this should work, but it doesn't :(
        //   "https://script.google.com/macros/s/AKfycbz8gUht2wTEckxY6CFKEI38YbxArqDC2xVL0dPQXhY/dev",
        //   // ...but it works with this -- weird!
        //   //"https://jsonplaceholder.typicode.com/albums/1",
        // ),
        headers: h,
      );
      // var u = Uri.parse(
      //   //     // this should work, but it doesn't :(
      //   "https://script.google.com/macros/s/AKfycbz8gUht2wTEckxY6CFKEI38YbxArqDC2xVL0dPQXhY/dev",
      //   //     // ...but it works with this -- weird!
      //   //"https://jsonplaceholder.typicode.com/albums/1",
      // );
      // http.Request r = http.Request("get", u);
      // r.maxRedirects = 5;
      // r.followRedirects = true;
      // try {await supabase.from("information").insert(data2);
      //   var x = await r.send();
      print("Tady");
      print(v);
    } catch (e) {
      print(e);
    }
    return;
  }

  void insert(var supabase) async {
    var x = await supabase.from("information");
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
