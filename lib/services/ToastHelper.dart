import 'package:fluttertoast/fluttertoast.dart';

class ToastHelper {
  static void Show(String value) {
    Fluttertoast.showToast(msg: value, timeInSecForIosWeb: 3, webBgColor: "#BA5D3F");
  }
}