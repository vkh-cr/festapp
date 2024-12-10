import 'package:fstapp/AppRouter.dart';
import 'package:fstapp/pages/Eshop/FormPage.dart';

class LinkModel {
  String? formLink;
  String? occasionLink;

  LinkModel({this.occasionLink, this.formLink});

  factory LinkModel.extractOccasionLink(String url) {
    String? firstPart;
    String? secondPart;

    // Use a regular expression with named groups to match the pattern after the hash sign (#)
    final regex = RegExp(r'#\/(?<firstPart>[^\/]+)\/(?<secondPart>[^\/]+)');
    final match = regex.firstMatch(url);

    var rootLinks = AppRouter.getRootLinks();
    if (match != null) {
      // Extract named groups
      firstPart = match.namedGroup('firstPart');
      secondPart = match.namedGroup('secondPart');

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