import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/widgets.dart';

class PublicOrderStrings {
  static const String _prefix = 'PublicOrder';

  static String _tr(String key, String? tone) {
    if (tone == 'informal') {
      final informalKey = '${key}_informal';
      if (informalKey.tr() != informalKey) {
        return informalKey.tr();
      }
    }
    return key.tr();
  }
  
  // Re-verify the logic:
  // If I call _tr('PublicOrder.successTitle', 'informal')
  // It checks 'PublicOrder.successTitle_informal'.
  
  static String successTitle(String? tone, {bool hasTickets = true}) {
    if (hasTickets) {
      return _tr('$_prefix.successTitle', tone);
    }
    return _tr('$_prefix.successRegistrationTitle', tone);
  }
  
  static String paymentInfo(String? tone) => _tr('$_prefix.paymentInfo', tone);
  
  static String selectSeat(String? tone) => _tr('$_prefix.selectSeat', tone);
  
  static String getSubmitButton(bool hasTickets, String? tone) {
    if (hasTickets) {
      return _tr('$_prefix.submitOrder', tone);
    }
    return _tr('$_prefix.submitRegistration', tone);
  }

  static String get summary => '$_prefix.summary'.tr();
  static String get backToForm => '$_prefix.backToForm'.tr();
  static String get orderFailed => '$_prefix.orderFailed'.tr();
  
  static String orderError(String code) => '$_prefix.orderError'.tr(namedArgs: {"code": code});
  
  static String productUnavailable(String productTitle) => 
      '$_prefix.productUnavailable'.tr(namedArgs: {"product_title": productTitle});
      
  static String chooseDifferentVariant(String? tone) => _tr('$_prefix.chooseDifferentVariant', tone);
  
  static String totalPrice(BuildContext context, String price) => 
      '$_prefix.totalPrice'.tr(namedArgs: {"price": price});

}
