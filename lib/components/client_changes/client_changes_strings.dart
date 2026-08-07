import 'package:easy_localization/easy_localization.dart';

class ClientChangesStrings {
  static String get title => 'ClientChanges.title'.tr();
  static String get onlineOnly => 'ClientChanges.onlineOnly'.tr();
  static String get empty => 'ClientChanges.empty'.tr();
  static String get notActive => 'ClientChanges.notActive'.tr();
  static String get retry => 'ClientChanges.retry'.tr();
  static String get loadError => 'ClientChanges.loadError'.tr();
  static String get publicationPending =>
      'ClientChanges.publicationPending'.tr();
  static String get published => 'ClientChanges.published'.tr();
  static String get deletedActor => 'ClientChanges.deletedActor'.tr();
  static String get filters => 'ClientChanges.filters'.tr();
  static String get all => 'ClientChanges.all'.tr();
  static String get component => 'ClientChanges.component'.tr();
  static String get changeClass => 'ClientChanges.changeClass'.tr();
  static String get publication => 'ClientChanges.publication'.tr();
  static String get details => 'ClientChanges.details'.tr();
  static String get actorSearch => 'ClientChanges.actorSearch'.tr();
  static String get previousPage => 'ClientChanges.previousPage'.tr();
  static String get nextPage => 'ClientChanges.nextPage'.tr();
  static String page(int page) =>
      'ClientChanges.page'.tr(namedArgs: {'page': '$page'});
  static String itemCount(int count) =>
      'ClientChanges.itemCount'.plural(count, namedArgs: {'count': '$count'});
}
