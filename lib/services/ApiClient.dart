import 'dart:convert';
import 'package:http/http.dart' as http;

import '../models/responses/HelloWorldResponse.dart';

class ApiClient {
  final String _baseUrl = "http://localhost:5001/";

  Future<HelloWorldResponse> getHelloWorld() async{
    final url = Uri.parse("${_baseUrl}api/Test/hello/world");
    final response = await http.get(url);
    if (response.statusCode == 200) {
      return HelloWorldResponse.fromJson((json.decode(response.body)));
    } else{
      throw Exception("status Code != 200");
    }
  }
}