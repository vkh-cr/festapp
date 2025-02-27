import 'FeatureConstants.dart';
import 'FeatureMetadata.dart';

class Feature {
  // Core properties (used for JSON conversion)
  final String code;
  bool isEnabled;

  // UI-only properties (not included in JSON)
  String title;
  String description;

  // Extra data for specific features:

  // Ticket feature extra fields
  String? ticketLightColor;
  String? ticketDarkColor;
  String? ticketBackground;

  // Form feature extra fields
  bool? formUseExternal;
  String? formExternalLink;
  String? formExternalPrice;
  String? reserveButtonTitle; // New field for custom reserve button title

  // Companions feature extra field
  int? companionsMax;

  Feature({
    required this.code,
    this.isEnabled = false,
    String? title,
    String? description,
    this.ticketLightColor,
    this.ticketDarkColor,
    this.ticketBackground,
    this.formUseExternal,
    this.formExternalLink,
    this.formExternalPrice,
    this.reserveButtonTitle, // Added here
    this.companionsMax,
  })  : title = title ?? FeatureMetadata.getTitle(code),
        description = description ?? FeatureMetadata.getDescription(code);

  /// Creates a Feature instance from JSON.
  /// Note: title and description are not part of the JSON conversion.
  factory Feature.fromJson(Map<String, dynamic> json) {
    return Feature(
      code: json[FeatureConstants.metaCode],
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? false,
      ticketLightColor: json[FeatureConstants.ticketLightColor],
      ticketDarkColor: json[FeatureConstants.ticketDarkColor],
      ticketBackground: json[FeatureConstants.ticketBackground],
      formUseExternal: json[FeatureConstants.formUseExternal],
      formExternalLink: json[FeatureConstants.formExternalLink],
      formExternalPrice: json[FeatureConstants.formExternalPrice],
      reserveButtonTitle: json[FeatureConstants.reserveButtonTitle],
      companionsMax: json[FeatureConstants.companionsMax],
    );
  }

  /// Converts the Feature instance to JSON.
  /// Title and description are excluded.
  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
    };

    if (ticketLightColor != null) {
      data[FeatureConstants.ticketLightColor] = ticketLightColor;
    }
    if (ticketDarkColor != null) {
      data[FeatureConstants.ticketDarkColor] = ticketDarkColor;
    }
    if (ticketBackground != null) {
      data[FeatureConstants.ticketBackground] = ticketBackground;
    }
    if (formUseExternal != null) {
      data[FeatureConstants.formUseExternal] = formUseExternal;
    }
    if (formExternalLink != null) {
      data[FeatureConstants.formExternalLink] = formExternalLink;
    }
    if (formExternalPrice != null) {
      data[FeatureConstants.formExternalPrice] = formExternalPrice;
    }
    if (reserveButtonTitle != null) {
      data[FeatureConstants.reserveButtonTitle] = reserveButtonTitle;
    }
    if (companionsMax != null) {
      data[FeatureConstants.companionsMax] = companionsMax;
    }
    return data;
  }
}
