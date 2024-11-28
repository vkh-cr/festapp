import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class Utilities {
  static formatPrice(BuildContext context, double price) {
    // Get locale from context or fallback to Czech locale
    final locale = EasyLocalization.of(context)?.locale.toString() ?? 'cs_CZ';

    // Configure the currency formatter
    final NumberFormat currencyFormatter = NumberFormat.currency(
      locale: locale,
      symbol: 'KČ', // Use the CZK symbol
    );

    return currencyFormatter.format(price); // Format the price as currency
  }



  static int naturalCompare(String a, String b) {
    final regex = RegExp(r'\d+|\D+');
    final aMatches = regex.allMatches(a).map((m) => m.group(0)!).toList();
    final bMatches = regex.allMatches(b).map((m) => m.group(0)!).toList();

    for (var i = 0; i < aMatches.length && i < bMatches.length; i++) {
      final aPart = aMatches[i];
      final bPart = bMatches[i];

      // Compare numbers as numbers
      if (RegExp(r'^\d+$').hasMatch(aPart) && RegExp(r'^\d+$').hasMatch(bPart)) {
        final aNum = int.parse(aPart);
        final bNum = int.parse(bPart);
        final numCompare = aNum.compareTo(bNum);
        if (numCompare != 0) return numCompare;
      } else {
        // Compare non-numeric parts lexicographically
        final strCompare = aPart.compareTo(bPart);
        if (strCompare != 0) return strCompare;
      }
    }

    // If all parts are equal so far, compare lengths
    return aMatches.length.compareTo(bMatches.length);
  }
}