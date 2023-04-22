import 'package:flutter/foundation.dart';
import 'package:google_sign_in/google_sign_in.dart';

class AuthHelper {
  //nsert Web client ID
  static const webClientId =
      "757587425634-8kc7rpa6j2phhdq74macmgr3erk86cl6.apps.googleusercontent.com";

  static Future<Map<String, String>?> authenticate() async {
    final googleSignin = GoogleSignIn(
      clientId: kIsWeb ? webClientId : null,
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/spreadsheets"
      ],
    );

    try {
      final auth = await googleSignin.signIn();

      if (auth == null) {
        return null;
      } else {
        final headers = await auth.authHeaders;

        return headers;
      }
    } catch (e) {
      debugPrint("AN ERROR OCCURRED ======== $e");
    }
    return null;
  }
}
