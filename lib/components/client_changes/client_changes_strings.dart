import 'package:easy_localization/easy_localization.dart';

class ClientChangesStrings {
  static String get title => 'ClientChanges.title'.tr();
  static String get onlineOnly => 'ClientChanges.onlineOnly'.tr();
  static String get empty => 'ClientChanges.empty'.tr();
  static String get notActive => 'ClientChanges.notActive'.tr();
  static String get retry => 'ClientChanges.retry'.tr();
  static String get loadError => 'ClientChanges.loadError'.tr();
  static String get subtitle => 'ClientChanges.subtitle'.tr();
  static String get time => 'ClientChanges.time'.tr();
  static String get less => 'ClientChanges.less'.tr();
  static String get more => 'ClientChanges.more'.tr();
  static String get structural => 'ClientChanges.structural'.tr();
  static String get live => 'ClientChanges.live'.tr();
  static String get private => 'ClientChanges.private'.tr();
  static String get bulk => 'ClientChanges.bulk'.tr();
  static String get other => 'ClientChanges.other'.tr();
  static String activityCount(int count) =>
      'ClientChanges.activityCount'.tr(namedArgs: {'count': '$count'});
}
