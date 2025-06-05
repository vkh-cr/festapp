import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';

import 'feature.dart';
import 'feature_constants.dart';

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
      defaultMapZoom: (json[FeatureConstants.defaultMapZoom]?.toDouble() ?? 17.0),
      defaultMapLocation: json[FeatureConstants.defaultMapLocation] != null
          ? MapLocation.fromJson(json[FeatureConstants.defaultMapLocation])
          : defaultLocation,
    );
  }

  @override
  Map<String, dynamic> toJson() {
    return {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
      FeatureConstants.defaultMapZoom: defaultMapZoom,
      FeatureConstants.defaultMapLocation: defaultMapLocation,
      FeatureConstants.onlineMapLayer: onlineMapLayer.toJson(),
      FeatureConstants.offlineMapLayer: offlineMapLayer.toJson(),
    };
  }

  /// Builds the form field for this feature in FeatureForm.
  Widget buildFormField(BuildContext context) {
    return StatefulBuilder(
      builder: (ctx, setLocalState) {
        // controllers local to this builder
        final zoomCtrl = TextEditingController(text: defaultMapZoom.toString());
        final latCtrl = TextEditingController(text: defaultMapLocation.lat.toString());
        final lngCtrl = TextEditingController(text: defaultMapLocation.lng.toString());

        final onlineLogo = TextEditingController(text: onlineMapLayer.logo);
        final onlineText = TextEditingController(text: onlineMapLayer.text);
        final onlineLogoLink = TextEditingController(text: onlineMapLayer.logoLink);
        final onlineTextLink = TextEditingController(text: onlineMapLayer.textLink);
        final onlineLayerLink = TextEditingController(text: onlineMapLayer.layerLink);

        final offlineLogo = TextEditingController(text: offlineMapLayer.logo);
        final offlineText = TextEditingController(text: offlineMapLayer.text);
        final offlineLogoLink = TextEditingController(text: offlineMapLayer.logoLink);
        final offlineTextLink = TextEditingController(text: offlineMapLayer.textLink);

        bool autoOffline = offlineMapLayer.forceOfflineMap;
        final pkgCtrl = TextEditingController(text: offlineMapLayer.offlineMapPackageURL);
        final styleCtrl = TextEditingController(text: offlineMapLayer.offlineMapStyleURL);
        final layerNameCtrl = TextEditingController(text: offlineMapLayer.offlineMapLayerName);

        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // zoom
            TextFormField(
              controller: zoomCtrl,
              decoration: InputDecoration(labelText: 'Map Zoom'.tr()),
              keyboardType: TextInputType.numberWithOptions(decimal: true),
              onSaved: (val) =>
              defaultMapZoom = double.tryParse(val ?? '') ?? defaultMapZoom,
            ),

            const SizedBox(height: 16),
            // lat / lng
            Row(children: [
              Expanded(
                child: TextFormField(
                  controller: latCtrl,
                  decoration: InputDecoration(labelText: 'Latitude'.tr()),
                  keyboardType: TextInputType.numberWithOptions(decimal: true),
                  onSaved: (val) {
                    final lat = double.tryParse(val ?? '') ?? defaultMapLocation.lat;
                    defaultMapLocation = MapLocation(lat: lat, lng: defaultMapLocation.lng);
                  },
                ),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: TextFormField(
                  controller: lngCtrl,
                  decoration: InputDecoration(labelText: 'Longitude'.tr()),
                  keyboardType: TextInputType.numberWithOptions(decimal: true),
                  onSaved: (val) {
                    final lng = double.tryParse(val ?? '') ?? defaultMapLocation.lng;
                    defaultMapLocation = MapLocation(lat: defaultMapLocation.lat, lng: lng);
                  },
                ),
              ),
            ]),

            const SizedBox(height: 16),
            ExpansionTile(
              title: Text('Map Layer Settings'.tr()),
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      TextFormField(
                        controller: onlineLogo,
                        decoration: InputDecoration(labelText: 'Map Layer Logo'.tr()),
                        onSaved: (val) => onlineMapLayer.logo = val ?? '',
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        controller: onlineText,
                        decoration: InputDecoration(labelText: 'Map Layer Text'.tr()),
                        onSaved: (val) => onlineMapLayer.text = val ?? '',
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        controller: onlineLogoLink,
                        decoration: InputDecoration(labelText: 'Map Layer Logo Link'.tr()),
                        onSaved: (val) => onlineMapLayer.logoLink = val ?? '',
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        controller: onlineTextLink,
                        decoration: InputDecoration(labelText: 'Map Layer Text Link'.tr()),
                        onSaved: (val) => onlineMapLayer.textLink = val ?? '',
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        controller: onlineLayerLink,
                        decoration: InputDecoration(labelText: 'Map Layer URL'.tr()),
                        onSaved: (val) => onlineMapLayer.layerLink = val ?? '',
                      ),
                    ],
                  ),
                ),
              ],
            ),

            const SizedBox(height: 16),
            ExpansionTile(
              title: Text('Offline Map Layer Settings'.tr()),
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      TextFormField(
                        controller: offlineLogo,
                        decoration: InputDecoration(labelText: 'Map Layer Logo'.tr()),
                        onSaved: (val) => offlineMapLayer.logo = val ?? '',
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        controller: offlineText,
                        decoration: InputDecoration(labelText: 'Map Layer Text'.tr()),
                        onSaved: (val) => offlineMapLayer.text = val ?? '',
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        controller: offlineLogoLink,
                        decoration: InputDecoration(labelText: 'Map Layer Logo Link'.tr()),
                        onSaved: (val) => offlineMapLayer.logoLink = val ?? '',
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        controller: offlineTextLink,
                        decoration: InputDecoration(labelText: 'Map Layer Text Link'.tr()),
                        onSaved: (val) => offlineMapLayer.textLink = val ?? '',
                      ),
                      const SizedBox(height: 16),
                      SwitchListTile(
                        title: Text('Force offline map'.tr()),
                        value: autoOffline,
                        onChanged: (v) => setLocalState(() {
                          autoOffline = v;
                          offlineMapLayer.forceOfflineMap = v;
                        }),
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        controller: pkgCtrl,
                        decoration: InputDecoration(labelText: 'Offline Map Package URL'.tr()),
                        onSaved: (val) => offlineMapLayer.offlineMapPackageURL = val ?? '',
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        controller: styleCtrl,
                        decoration: InputDecoration(labelText: 'Offline Map Style URL'.tr()),
                        onSaved: (val) => offlineMapLayer.offlineMapStyleURL = val ?? '',
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        controller: layerNameCtrl,
                        decoration: InputDecoration(labelText: 'Offline Map Layer Name'.tr()),
                        onSaved: (val) => offlineMapLayer.offlineMapLayerName = val ?? '',
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ],
        );
      },
    );
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
  bool forceOfflineMap;

  MapLayer({
    this.logo,
    this.text,
    this.logoLink,
    this.textLink,
    this.layerLink = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    this.offlineMapPackageURL,
    this.offlineMapStyleURL,
    this.offlineMapLayerName,
    this.forceOfflineMap = false,
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
      forceOfflineMap: json[FeatureConstants.forceOfflineMap] as bool? ?? false,
    );
  }

  Map<String, dynamic> toJson() {
    final data = {
      FeatureConstants.mapLogo: logo,
      FeatureConstants.mapText: text,
      FeatureConstants.mapLogoLink: logoLink,
      FeatureConstants.mapTextLink: textLink,
      FeatureConstants.mapLayerLink: layerLink,
      FeatureConstants.forceOfflineMap: forceOfflineMap,
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