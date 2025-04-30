// feature.dart
import 'feature_constants.dart';
import 'feature_metadata.dart';

/// Base abstract class for all features.
abstract class Feature {
  final String code;
  bool isEnabled;
  String title;
  String description;

  Feature({
    required this.code,
    this.isEnabled = false,
    String? title,
    String? description,
  })  : title = title ?? FeatureMetadata.getTitle(code),
        description = description ?? FeatureMetadata.getDescription(code);

  /// Factory constructor to create a feature from JSON.
  factory Feature.fromJson(Map<String, dynamic> json) {
    final code = json[FeatureConstants.metaCode];
    switch (code) {
      case FeatureConstants.ticket:
        return TicketFeature.fromJson(json);
      case FeatureConstants.form:
        return FormFeature.fromJson(json);
      case FeatureConstants.companions:
        return CompanionsFeature.fromJson(json);
      case FeatureConstants.map:
        return MapFeature.fromJson(json);
      case FeatureConstants.workshops:
        return WorkshopsFeature.fromJson(json);
      default:
        return SimpleFeature.fromJson(json);
    }
  }

  /// Converts the feature to JSON.
  Map<String, dynamic> toJson();
}

/// A simple feature without extra properties.
class SimpleFeature extends Feature {
  SimpleFeature({
    required super.code,
    super.isEnabled,
    super.title,
    super.description,
  });

  factory SimpleFeature.fromJson(Map<String, dynamic> json) {
    return SimpleFeature(
      code: json[FeatureConstants.metaCode],
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? false,
    );
  }

  @override
  Map<String, dynamic> toJson() {
    return {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
    };
  }
}

/// Feature for tickets with extra UI color fields.
/// Feature for tickets with extra UI color fields.
class TicketFeature extends Feature {
  String? ticketLightColor;
  String? ticketDarkColor;
  String? ticketBackground;
  // New field to specify type ("named" or "wide")
  String? ticketType;

  TicketFeature({
    required super.code,
    super.isEnabled,
    super.title,
    super.description,
    this.ticketLightColor,
    this.ticketDarkColor,
    this.ticketBackground,
    this.ticketType,
  });

  factory TicketFeature.fromJson(Map<String, dynamic> json) {
    return TicketFeature(
      code: json[FeatureConstants.metaCode],
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? false,
      ticketLightColor: json[FeatureConstants.ticketLightColor],
      ticketDarkColor: json[FeatureConstants.ticketDarkColor],
      ticketBackground: json[FeatureConstants.ticketBackground],
      ticketType: json[FeatureConstants.ticketType],
    );
  }

  @override
  Map<String, dynamic> toJson() {
    final data = {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
    };

    if (ticketLightColor != null) {
      data[FeatureConstants.ticketLightColor] = ticketLightColor!;
    }
    if (ticketDarkColor != null) {
      data[FeatureConstants.ticketDarkColor] = ticketDarkColor!;
    }
    if (ticketBackground != null) {
      data[FeatureConstants.ticketBackground] = ticketBackground!;
    }
    if (ticketType != null) {
      data[FeatureConstants.ticketType] = ticketType!;
    }
    return data;
  }
}

/// Feature for forms that may use an external system and allow a custom reserve button title.
class FormFeature extends Feature {
  bool? formUseExternal;
  String? formExternalLink;
  String? formExternalPrice;
  String? reserveButtonTitle;

  FormFeature({
    required super.code,
    super.isEnabled,
    super.title,
    super.description,
    this.formUseExternal,
    this.formExternalLink,
    this.formExternalPrice,
    this.reserveButtonTitle,
  });

  factory FormFeature.fromJson(Map<String, dynamic> json) {
    return FormFeature(
      code: json[FeatureConstants.metaCode],
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? false,
      formUseExternal: json[FeatureConstants.formUseExternal],
      formExternalLink: json[FeatureConstants.formExternalLink],
      formExternalPrice: json[FeatureConstants.formExternalPrice],
      reserveButtonTitle: json[FeatureConstants.reserveButtonTitle],
    );
  }

  @override
  Map<String, dynamic> toJson() {
    final data = {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
    };

    if (formUseExternal != null) {
      data[FeatureConstants.formUseExternal] = formUseExternal!;
    }
    if (formExternalLink != null) {
      data[FeatureConstants.formExternalLink] = formExternalLink!;
    }
    if (formExternalPrice != null) {
      data[FeatureConstants.formExternalPrice] = formExternalPrice!;
    }
    if (reserveButtonTitle != null) {
      data[FeatureConstants.reserveButtonTitle] = reserveButtonTitle!;
    }
    return data;
  }
}

/// Feature for companions with a max count field.
class CompanionsFeature extends Feature {
  int? companionsMax;

  CompanionsFeature({
    required super.code,
    super.isEnabled,
    super.title,
    super.description,
    this.companionsMax,
  });

  factory CompanionsFeature.fromJson(Map<String, dynamic> json) {
    return CompanionsFeature(
      code: json[FeatureConstants.metaCode],
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? false,
      companionsMax: json[FeatureConstants.companionsMax],
    );
  }

  @override
  Map<String, dynamic> toJson() {
    final data = {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
    };

    if (companionsMax != null) {
      data[FeatureConstants.companionsMax] = companionsMax!;
    }
    return data;
  }
}

/// Helper class representing a map layer.
class MapLayer {
  String? logo;
  String? text;
  String? logoLink;
  String? textLink;
  String? layerLink;
  // Offline extra fields (for offline map layer)
  String? offlineMapPackageURL;
  String? offlineMapStyleURL;
  String? offlineMapLayerName;
  bool autoDownloadOfflineMap;

  MapLayer({
    this.logo,
    this.text,
    this.logoLink,
    this.textLink,
    this.layerLink = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    this.offlineMapPackageURL,
    this.offlineMapStyleURL,
    this.offlineMapLayerName,
    this.autoDownloadOfflineMap = false,
  });

  factory MapLayer.fromJson(Map<String, dynamic> json) {
    return MapLayer(
      logo: json[FeatureConstants.mapLogo] as String?,
      text: json[FeatureConstants.mapText] as String?,
      logoLink: json[FeatureConstants.mapLogoLink] as String?,
      textLink: json[FeatureConstants.mapTextLink] as String?,
      layerLink: json[FeatureConstants.mapLayerLink] as String? ??
          'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      offlineMapPackageURL: json[FeatureConstants.offlineMapPackageURL] as String?,
      offlineMapStyleURL: json[FeatureConstants.offlineMapStyleURL] as String?,
      offlineMapLayerName: json[FeatureConstants.offlineMapLayerName] as String?,
      autoDownloadOfflineMap: json[FeatureConstants.forceOfflineMap] as bool? ?? false,
    );
  }

  Map<String, dynamic> toJson() {
    final data = {
      FeatureConstants.mapLogo: logo,
      FeatureConstants.mapText: text,
      FeatureConstants.mapLogoLink: logoLink,
      FeatureConstants.mapTextLink: textLink,
      FeatureConstants.mapLayerLink: layerLink,
      FeatureConstants.forceOfflineMap: autoDownloadOfflineMap,
    };
    if (offlineMapPackageURL != null) {
      data[FeatureConstants.offlineMapPackageURL] = offlineMapPackageURL!;
    }
    if (offlineMapStyleURL != null) {
      data[FeatureConstants.offlineMapStyleURL] = offlineMapStyleURL!;
    }
    if (offlineMapLayerName != null) {
      data[FeatureConstants.offlineMapLayerName] = offlineMapLayerName!;
    }
    return data;
  }
}

/// Helper class representing a map location.
class MapLocation {
  final double lat;
  final double lng;

  const MapLocation({
    required this.lat,
    required this.lng,
  });

  factory MapLocation.fromJson(Map<String, dynamic> json) {
    return MapLocation(
      lat: (json['lat'] as num).toDouble(),
      lng: (json['lng'] as num).toDouble(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'lat': lat,
      'lng': lng,
    };
  }
}

/// Feature for maps with separate online and offline map layers.
class MapFeature extends Feature {
  static const MapLocation defaultLocation = MapLocation(lat: 49.1038023, lng: 17.3947819);
  MapLayer onlineMapLayer;
  MapLayer offlineMapLayer;
  double defaultMapZoom;
  MapLocation defaultMapLocation;

  MapFeature({
    super.code = FeatureConstants.map,
    super.isEnabled,
    super.title,
    super.description,
    MapLayer? onlineMapLayer,
    MapLayer? offlineMapLayer,
    this.defaultMapZoom = 17.0,
    this.defaultMapLocation = defaultLocation,
  })  : onlineMapLayer = onlineMapLayer ?? MapLayer(),
        offlineMapLayer = offlineMapLayer ?? MapLayer();

  factory MapFeature.getDefault() {
    return MapFeature(
      onlineMapLayer: MapLayer(),
      offlineMapLayer: MapLayer(),
    );
  }

  factory MapFeature.fromJson(Map<String, dynamic> json) {
    return MapFeature(
      code: json[FeatureConstants.metaCode],
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? false,
      onlineMapLayer: json[FeatureConstants.onlineMapLayer] != null
          ? MapLayer.fromJson(json[FeatureConstants.onlineMapLayer])
          : MapLayer(),
      offlineMapLayer: json[FeatureConstants.offlineMapLayer] != null
          ? MapLayer.fromJson(json[FeatureConstants.offlineMapLayer])
          : MapLayer(),
      defaultMapZoom: json[FeatureConstants.defaultMapZoom]?.toDouble() ?? 17.0,
      defaultMapLocation: json[FeatureConstants.defaultMapLocation] != null
          ? MapLocation.fromJson(json[FeatureConstants.defaultMapLocation])
          : const MapLocation(lat: 49.1038023, lng: 17.3947819),
    );
  }

  @override
  Map<String, dynamic> toJson() {
    return {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
      FeatureConstants.defaultMapZoom: defaultMapZoom,
      FeatureConstants.defaultMapLocation: defaultMapLocation,
      FeatureConstants.onlineMapLayer: onlineMapLayer,
      FeatureConstants.offlineMapLayer: offlineMapLayer,
    };
  }
}

class WorkshopsFeature extends Feature {
  DateTime? startTime;

  WorkshopsFeature({
    super.code = FeatureConstants.workshops,
    super.isEnabled = true,
    super.title,
    super.description,
    this.startTime,
  });

  factory WorkshopsFeature.fromJson(Map<String, dynamic> json) {
    return WorkshopsFeature(
      code: json[FeatureConstants.metaCode],
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? true,
      startTime: json['start_time'] != null ? DateTime.parse(json['start_time'] as String) : null,
    );
  }

  @override
  Map<String, dynamic> toJson() {
    return {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
      'start_time': startTime?.toIso8601String(),
    };
  }
}
