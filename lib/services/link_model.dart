import 'package:fstapp/app_router.dart';
import 'package:fstapp/pages/form/pages/form_page.dart';

class LinkModel {
  String? formLink;
  String? occasionLink;

  LinkModel({this.occasionLink, this.formLink});

  factory LinkModel.extractOccasionLink(String url) {
    String? firstPart;
    String? secondPart;

    // Use a regular expression with named groups to match the pattern after the hash sign (#)
    final regex = RegExp(r'#/(?<firstPart>[^/]+)(?:/(?<secondPart>[^/]+))?');
    final match = regex.firstMatch(url);

    var rootLinks = AppRouter.getRootLinks();
    if (match != null) {
      // Extract named groups
      firstPart = match.namedGroup('firstPart');

      if (firstPart == FormPage.ROUTE) {
        secondPart = match.namedGroup('secondPart');
      }

      if (rootLinks.any((rootLink) => firstPart == rootLink)) {
        firstPart = "";
      }
    }

    return LinkModel(
      occasionLink: firstPart,
      formLink: secondPart,
    );
  }

}