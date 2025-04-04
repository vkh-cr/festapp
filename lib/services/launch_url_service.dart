import 'package:url_launcher/url_launcher.dart';

class LaunchUrlService {
  static Future<void> launchURL(String url, [bool self = false]) async {
    if (await canLaunchUrl(Uri.parse(url))) {
      await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication, webOnlyWindowName: self ? "_self" : null);
    }
  }
}