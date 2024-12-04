class UuidConverter {
  static const String base62Chars =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  /// Converts a UUID to a Base62 encoded string
  static String uuidToBase62(String uuid) {
    // Remove dashes from UUID and parse as a base16 (hexadecimal) integer
    final hexString = uuid.replaceAll('-', '');
    final bigIntValue = BigInt.parse(hexString, radix: 16);

    // Convert the integer to a Base62 string
    return _toBase62(bigIntValue);
  }

  /// Converts a Base62 string back to a UUID
  static String base62ToUuid(String base62) {
    // Convert the Base62 string back to a BigInt
    final bigIntValue = _fromBase62(base62);

    // Convert the BigInt back to a hexadecimal string
    final hexString = bigIntValue.toRadixString(16).padLeft(32, '0'); // UUID is 128 bits (32 hex digits)

    // Reformat as a UUID with dashes
    return '${hexString.substring(0, 8)}-'
        '${hexString.substring(8, 12)}-'
        '${hexString.substring(12, 16)}-'
        '${hexString.substring(16, 20)}-'
        '${hexString.substring(20)}';
  }

  /// Converts a BigInt to a Base62 string
  static String _toBase62(BigInt number) {
    final base = base62Chars.length;
    final result = StringBuffer();

    while (number > BigInt.zero) {
      final remainder = number % BigInt.from(base);
      result.write(base62Chars[remainder.toInt()]);
      number = number ~/ BigInt.from(base);
    }

    return result.toString().split('').reversed.join(); // Reverse the string
  }

  /// Converts a Base62 string to a BigInt
  static BigInt _fromBase62(String base62) {
    final base = base62Chars.length;
    BigInt number = BigInt.zero;

    for (int i = 0; i < base62.length; i++) {
      final char = base62[i];
      final value = base62Chars.indexOf(char);
      if (value == -1) {
        throw FormatException("Invalid character in Base62 string: $char");
      }
      number = number * BigInt.from(base) + BigInt.from(value);
    }

    return number;
  }
}