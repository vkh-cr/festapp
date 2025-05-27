import 'package:easy_localization/easy_localization.dart';
import 'package:intl/intl.dart'; // For DateFormat

class IdDocumentData {
  final String idNumber;
  final DateTime? expiryDate;

  IdDocumentData({
    required this.idNumber,
    this.expiryDate,
  });

  // Factory constructor to create an IdDocumentData instance from a JSON map
  factory IdDocumentData.fromJson(Map<String, dynamic> json) {
    final idNumber = json[IdDocumentFieldHolder.keyIdNumber] as String;

    final expiryDateString = json[IdDocumentFieldHolder.keyIdExpiryDate] as String?;
    final DateTime? expiryDate = expiryDateString != null ? DateTime.tryParse(expiryDateString) : null;

    return IdDocumentData(
      idNumber: idNumber,
      expiryDate: expiryDate,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      IdDocumentFieldHolder.keyIdNumber: idNumber,
      IdDocumentFieldHolder.keyIdExpiryDate: expiryDate?.toIso8601String(),
    };
  }

  @override
  String toString() {
    if (expiryDate != null) {
      final formattedExpiryDate = DateFormat.yMd().format(expiryDate!);
      return "${"ID".tr()}: $idNumber [$formattedExpiryDate]";
    } else {
      return "${"ID".tr()}: $idNumber";
    }
  }
}

class IdDocumentFieldHolder {
  static const String keyIdNumber = "id_document_number";
  static const String keyIdExpiryDate = "id_document_expiry_date";
}
