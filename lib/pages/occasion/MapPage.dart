import 'dart:async';
import 'dart:io';

import 'package:auto_route/auto_route.dart';
import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart' as fm;
import 'package:flutter_map_animations/flutter_map_animations.dart';
import 'package:flutter_map_location_marker/flutter_map_location_marker.dart';
import 'package:flutter_map_marker_popup/flutter_map_marker_popup.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/components/map/MapDescriptionPopup.dart';
import 'package:fstapp/components/map/MapLocationPinHelper.dart';
import 'package:fstapp/components/map/MapMarkerWithText.dart';
import 'package:fstapp/components/map/MapPlaceModel.dart';
import 'package:fstapp/dataModels/IconModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/DbGroups.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/services/PlatformHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/features/Feature.dart';
import 'package:fstapp/services/features/FeatureConstants.dart';
import 'package:fstapp/services/features/FeatureService.dart';
import 'package:fstapp/services/offline_map_helper.dart';
import 'package:fstapp/widgets/PopButton.dart';
import 'package:collection/collection.dart';
import 'package:latlong2/latlong.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter_map_cancellable_tile_provider/flutter_map_cancellable_tile_provider.dart';
import 'package:url_launcher/url_launcher.dart';

// Offline map packages.
import 'package:mbtiles/mbtiles.dart';
import 'package:vector_map_tiles/vector_map_tiles.dart' as vmt;
import 'package:vector_map_tiles_mbtiles/vector_map_tiles_mbtiles.dart' as vmtm;

@RoutePage()
class MapPage extends StatefulWidget {
  static const ROUTE = "map";
  int? id;
  final PlaceModel? place;

  MapPage({@pathParam this.id, this.place, super.key});

  @override
  State<MapPage> createState() => _MapPageState();
}

class _MapPageState extends State<MapPage> with TickerProviderStateMixin {
  // Single animated map controller for both online and offline maps.
  late final _animatedMapController = AnimatedMapController(vsync: this);

  List<IconModel> _icons = [];
  final List<MapMarkerWithText> _markers = [];
  final List<MapMarkerWithText> _selectedMarkers = [];
  static MapMarkerWithText? focusedMarker;
  static MapMarkerWithText? selectedMarker;
  String pageTitle = AppConfig.mapTitle;
  bool isOnlyEditMode = false;

  /// Controller for popups.
  final PopupController _popupLayerController = PopupController();

  fm.FlutterMap? _map;
  LatLng? _mapCenter;
  late final MapFeature _mapFeature;

  // --- Variables for Offline Map support ---
  bool _useOffline = false;
  bool _isDownloading = false;
  double _downloadProgress = 0.0;
  bool _downloadCompleted = false;
  String? _offlinePackagePath;
  MbTiles? _mbtiles;
  var _theme;

  @override
  void didChangeDependencies() async {
    super.didChangeDependencies();

    // Get map feature.
    final feature = FeatureService.getFeatureDetails(FeatureConstants.map);
    _mapFeature = (feature == null || feature is! MapFeature)
        ? MapFeature.getDefault()
        : feature;

    _mapCenter = widget.place != null
        ? LatLng(widget.place!.getLat(), widget.place!.getLng())
        : LatLng(
      _mapFeature.defaultMapLocation.lat,
      _mapFeature.defaultMapLocation.lng,
    );

    // Check connectivity; if connected, default to online; otherwise, use offline.
    List<ConnectivityResult> connectivityResult =
    await Connectivity().checkConnectivity();
    bool hasConnection = connectivityResult.isNotEmpty &&
        !connectivityResult.contains(ConnectivityResult.none);
    setState(() {
      _useOffline = !hasConnection;
    });

    // Enable offline functionality only on non-web and only if all offline fields are set.
    if (!PlatformHelper.isWeb && _isOfflineMapConfigured()) {
      // Use a fixed URL.
      _mapFeature.offlineMapLayer.offlineMapPackageURL =
      'https://lwfpdjxsdmkfyrzqbrlk.supabase.co/storage/v1/object/public/public-files/maps/roma.mbtiles';
      _offlinePackagePath = await OfflineMapHelper.getOfflinePackagePath(
          _mapFeature.offlineMapLayer.offlineMapPackageURL!);
      if (await File(_offlinePackagePath!).exists()) {
        _mbtiles = MbTiles(mbtilesPath: _offlinePackagePath!, gzip: true);
        _theme = await OfflineMapHelper.loadOfflineMapStyle(
            _mapFeature.offlineMapLayer.offlineMapStyleURL!);
      } else {
        if (_mapFeature.offlineMapLayer.autoDownloadOfflineMap == true) {
          // Start download in background (after a short delay) so online map is first shown.
          Future.delayed(Duration(seconds: 1), () => _downloadOfflinePackage());
        }
      }
    } else {
      // If offline fields are not properly configured, always use online.
      setState(() {
        _useOffline = false;
      });
    }

    if (widget.id == null && context.routeData.hasPendingChildren) {
      widget.id = context.routeData.pendingChildren[0].params.getInt("id");
    }

    // Set up places.
    selectedMarker = null;
    var placeModel = widget.place;
    if (placeModel == null || placeModel.latLng == null) {
      loadPlaces(placeId: widget.id);
    } else {
      if (placeModel.latLng.toString().isEmpty) {
        placeModel.latLng = {
          "lat": _mapFeature.defaultMapLocation.lat,
          "lng": _mapFeature.defaultMapLocation.lng
        };
      }
      pageTitle = placeModel.title ?? AppConfig.mapTitle;
      addPlacesToMap([placeModel]);
      // Ensure _markers is not empty before calling runEditPositionMode.
      if (_markers.isNotEmpty) {
        runEditPositionMode(_markers.single);
      }
      isOnlyEditMode = true;
    }
  }

  /// Returns true if all three offline map configuration fields are non-empty.
  bool _isOfflineMapConfigured() {
    final offlineLayer = _mapFeature.offlineMapLayer;
    return (offlineLayer.offlineMapPackageURL?.isNotEmpty ?? false) &&
        (offlineLayer.offlineMapStyleURL?.isNotEmpty ?? false) &&
        (offlineLayer.offlineMapLayerName?.isNotEmpty ?? false);
  }

  Future<void> _downloadOfflinePackage() async {
    if (!_isOfflineMapConfigured() || _offlinePackagePath == null) {
      return;
    }
    setState(() {
      _isDownloading = true;
      _downloadProgress = 0.0;
    });
    try {
      // Download the MBTiles package.
      await OfflineMapHelper.downloadOfflinePackage(
          _mapFeature.offlineMapLayer.offlineMapPackageURL!,
          _offlinePackagePath!, (progress) {
        setState(() {
          _downloadProgress = progress;
        });
      });
      // After downloading the package, also download the style file.
      final offlineStylePath = await OfflineMapHelper.getOfflineStyleFilePath(
          _mapFeature.offlineMapLayer.offlineMapStyleURL!);
      await OfflineMapHelper.downloadOfflineStyle(
          _mapFeature.offlineMapLayer.offlineMapStyleURL!,
          offlineStylePath, (progress) {
        // Optionally handle style download progress.
      });
      setState(() {
        _isDownloading = false;
        _downloadCompleted = true;
      });
      _mbtiles = MbTiles(mbtilesPath: _offlinePackagePath!, gzip: true);
      _theme = await OfflineMapHelper.loadOfflineMapStyle(
          _mapFeature.offlineMapLayer.offlineMapStyleURL!);
      ToastHelper.Show(context, "Offline map downloaded and ready for offline use".tr());
      // Display check icon for 2 seconds.
      Timer(Duration(seconds: 2), () {
        setState(() {
          _downloadCompleted = false;
          _useOffline = true;
        });
      });
    } catch (e) {
      debugPrint("Error downloading offline package: $e");
      setState(() {
        _isDownloading = false;
      });
    }
  }

  Future<void> loadPlaces({int? placeId, bool loadOtherGroups = false}) async {
    _markers.clear();
    List<PlaceModel> mapOfflinePlaces = [];
    var offlinePlaces = await OfflineDataService.getAllPlaces();
    _icons = await OfflineDataService.getAllIcons();
    offlinePlaces.sortPlaces(false);
    mapOfflinePlaces = loadOtherGroups
        ? offlinePlaces
        : offlinePlaces.where((element) => !element.isHidden).toList();
    if (placeId != null) {
      var p = offlinePlaces.firstWhereOrNull((p) => p.id == placeId);
      if (p != null) mapOfflinePlaces.add(p);
    }
    await addEventsToPlace(mapOfflinePlaces);
    addPlacesToMap(mapOfflinePlaces);
    if (placeId != null) {
      var p = mapOfflinePlaces.firstWhereOrNull((p) => p.id == placeId);
      if (p != null) setMapToOnePlaceAndShowPopup(placeId, p);
    }
    _icons = await DbPlaces.getAllIcons();
    List<PlaceModel> mapPlaces = [];
    List<PlaceModel> showMapPlaces = [];
    if (loadOtherGroups) {
      var groups = await DbGroups.getGroupsWithPlaces();
      for (var element in groups) {
        if (element.place == null) continue;
        element.place!.title = element.title;
        mapPlaces.add(element.place!);
      }
    } else {
      mapPlaces = await DbPlaces.getAllPlaces();
      showMapPlaces = mapPlaces.where((p) => !p.isHidden).toList();
      showMapPlaces.sortPlaces(false);
      await OfflineDataService.saveAllPlaces(mapPlaces);
    }
    if (placeId != null) {
      var p = mapPlaces.firstWhereOrNull((p) => p.id == placeId);
      if (p != null) showMapPlaces.add(p);
    }
    if (showMapPlaces.isNotEmpty) {
      _markers.clear();
      await addEventsToPlace(showMapPlaces);
      addPlacesToMap(showMapPlaces);
    }
    if (placeId != null) {
      var p = mapOfflinePlaces.firstWhereOrNull((p) => p.id == placeId);
      if (p != null) setMapToOnePlaceAndShowPopup(placeId, p);
    }
  }

  void setMapToOnePlaceAndShowPopup(int placeId, PlaceModel p) {
    var m = _markers.firstWhere((m) => m.place.id == placeId);
    _markers.remove(m);
    _markers.add(m);
    focusedMarker = m;
    _popupLayerController.showPopupsOnlyFor([m]);
    setMapToOnePlace(p);
  }

  Future<void> addEventsToPlace(List<PlaceModel> places) async {
    var events = await OfflineDataService.getAllEvents();
    for (var p in places) {
      var matches = events.where((e) => e.place?.id == p.id);
      p.events.addAll(matches);
    }
  }

  void setMapToOnePlace(PlaceModel place) {
    _mapCenter = LatLng(place.getLat(), place.getLng());
    _animatedMapController.animateTo(
        dest: _mapCenter!, zoom: _mapFeature.defaultMapZoom);
  }

  void addPlacesToMap(List<PlaceModel> places) {
    var mappedMarkers = places.map((place) {
      var mapPlace = MapPlaceModel.fromPlaceModel(place);
      return MapMarkerWithText(
        context: context,
        place: mapPlace,
        point: mapPlace.latLng,
        width: 60,
        height: 60,
        icon: isIconVisible(place)
            ? MapLocationPinHelper.type2icon(context, mapPlace, _icons)
            : null,
        alignment: Alignment.topCenter,
        editAction: runEditPositionMode,
      );
    }).toList();
    setState(() {
      _markers.addAll(mappedMarkers);
    });
  }

  void runEditPositionMode(MapMarkerWithText marker) {
    _popupLayerController.hideAllPopups();
    marker.oldPoint = marker.point;
    setState(() {
      selectedMarker = marker;
    });
    _selectedMarkers.clear();
    _selectedMarkers.add(selectedMarker!);
  }

  @override
  Widget build(BuildContext context) {
    // Show online map during download; if not downloading and offline is enabled, show offline.
    Widget mapWidget;
    if (_isDownloading) {
      mapWidget = _buildOnlineMap();
    } else if (_useOffline && _mbtiles != null && _theme != null) {
      mapWidget = _buildOfflineMap();
    } else {
      mapWidget = _buildOnlineMap();
    }
    return Scaffold(
      appBar: AppBar(
        title: Text(pageTitle),
        leading: PopButton(),
        actions: [
          // Only show the offline switch if on non-web and all offline fields are configured.
          if (!PlatformHelper.isWeb && _isOfflineMapConfigured())
            Row(
              children: [
                Icon(_useOffline ? Icons.landscape : Icons.cloud,
                    color: Colors.grey),
                Switch(
                  onChanged: _isDownloading
                      ? null
                      : (value) async {
                    final currentCenter =
                        _animatedMapController.mapController.camera.center;
                    final currentZoom =
                        _animatedMapController.mapController.camera.zoom;
                    if (value) {
                      if (_offlinePackagePath != null &&
                          !(await File(_offlinePackagePath!).exists())) {
                        await _downloadOfflinePackage();
                        if (!(await File(_offlinePackagePath!).exists())) {
                          setState(() {
                            _useOffline = false;
                          });
                        } else {
                          setState(() {
                            _useOffline = true;
                          });
                        }
                      } else {
                        setState(() {
                          _useOffline = true;
                        });
                      }
                    } else {
                      setState(() {
                        _useOffline = false;
                      });
                    }
                    _animatedMapController.animateTo(
                        dest: currentCenter, zoom: currentZoom);
                  },
                  value: _useOffline,
                  activeColor: Colors.grey[600],
                  inactiveThumbColor: Colors.grey[400],
                  inactiveTrackColor: Colors.grey[300],
                  activeTrackColor: Colors.grey[600],
                ),
              ],
            ),
        ],
      ),
      body: Stack(
        children: [
          (_mapCenter == null || (_useOffline && _theme == null))
              ? const SizedBox.shrink()
              : mapWidget,
          // Download progress overlay, aligned to top-right with padding.
          if (_isDownloading || _downloadCompleted)
            IgnorePointer(
              child: Align(
                alignment: Alignment.topRight,
                child: Padding(
                  padding: const EdgeInsets.only(top: 16, right: 16),
                  child: Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(
                      color: Colors.black45,
                      shape: BoxShape.circle,
                    ),
                    child: _isDownloading
                        ? Stack(
                      alignment: Alignment.center,
                      children: [
                        SizedBox(
                          width: 40,
                          height: 40,
                          child: CircularProgressIndicator(
                            strokeWidth: 3,
                            value: _downloadProgress,
                            valueColor: AlwaysStoppedAnimation<Color>(
                                Colors.white),
                          ),
                        ),
                        Text(
                          "${(_downloadProgress * 100).toInt()}%",
                          style: TextStyle(
                              color: Colors.white, fontSize: 10),
                        ),
                      ],
                    )
                        : Icon(Icons.check, size: 18, color: Colors.white),
                  ),
                ),
              ),
            ),
          // Edit marker UI – only visible when a marker is selected.
          if (selectedMarker != null)
            Visibility(
              visible: selectedMarker != null,
              child: Column(
                children: [
                  Container(
                    color: Colors.white,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        ElevatedButton(
                          onPressed: cancelNewPosition,
                          child: const Text("Storno").tr(),
                        ),
                        const Padding(padding: EdgeInsets.all(16.0)),
                        Visibility(
                          visible: !isOnlyEditMode,
                          child: ElevatedButton(
                            onPressed: showAllGroups,
                            child: const Text("Show groups").tr(),
                          ),
                        ),
                        const Padding(padding: EdgeInsets.all(16.0)),
                        ElevatedButton(
                          onPressed: saveNewPosition,
                          child: const Text("Save location").tr(),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    color: Colors.white,
                    child: const Text("You can change location by tapping on the map.").tr(),
                  ),
                  Expanded(child: Container()),
                ],
              ),
            ),
        ],
      ),
    );
  }

  Widget _buildOnlineMap() {
    return fm.FlutterMap(
      mapController: _animatedMapController.mapController,
      options: fm.MapOptions(
        interactionOptions: const fm.InteractionOptions(
          flags: fm.InteractiveFlag.doubleTapDragZoom |
          fm.InteractiveFlag.doubleTapZoom |
          fm.InteractiveFlag.pinchMove |
          fm.InteractiveFlag.pinchZoom |
          fm.InteractiveFlag.flingAnimation |
          fm.InteractiveFlag.drag |
          fm.InteractiveFlag.scrollWheelZoom,
        ),
        initialZoom: _mapFeature.defaultMapZoom,
        maxZoom: 18,
        initialCenter: _mapCenter!,
        onTap: (_, location) => onMapTap(location),
      ),
      children: [
        fm.TileLayer(
          tileProvider: CancellableNetworkTileProvider(),
          maxZoom: 18,
          urlTemplate: _mapFeature.onlineMapLayer.layerLink,
          fallbackUrl: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        ),
        if ((_mapFeature.onlineMapLayer.logo?.isNotEmpty ?? false) ||
            (_mapFeature.onlineMapLayer.text?.isNotEmpty ?? false))
          fm.RichAttributionWidget(
            showFlutterMapAttribution: false,
            animationConfig: const fm.ScaleRAWA(),
            attributions: [
              if (_mapFeature.onlineMapLayer.logo?.isNotEmpty ?? false)
                fm.LogoSourceAttribution(
                  SvgPicture.network(
                    _mapFeature.onlineMapLayer.logo!,
                    height: 28,
                  ),
                  onTap: _mapFeature.onlineMapLayer.logoLink?.isNotEmpty ?? false
                      ? () => launchUrl(Uri.parse(_mapFeature.onlineMapLayer.logoLink!))
                      : null,
                ),
              if (_mapFeature.onlineMapLayer.text?.isNotEmpty ?? false)
                fm.TextSourceAttribution(
                  _mapFeature.onlineMapLayer.text!,
                  onTap: _mapFeature.onlineMapLayer.textLink?.isNotEmpty ?? false
                      ? () => launchUrl(Uri.parse(_mapFeature.onlineMapLayer.textLink!))
                      : null,
                ),
            ],
          ),
        CurrentLocationLayer(),
        PopupMarkerLayer(
          options: PopupMarkerLayerOptions(
            popupController: _popupLayerController,
            markers: selectedMarker != null ? _selectedMarkers : _markers,
            popupDisplayOptions: PopupDisplayOptions(
              snap: PopupSnap.markerTop,
              builder: (BuildContext context, fm.Marker marker) {
                if (marker is MapMarkerWithText) {
                  return MapDescriptionPopup(marker, selectedMarker);
                }
                return const SizedBox.shrink();
              },
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildOfflineMap() {
    return fm.FlutterMap(
      mapController: _animatedMapController.mapController,
      options: fm.MapOptions(
        minZoom: 2,
        maxZoom: 18,
        initialZoom: _mapFeature.defaultMapZoom,
        initialCenter: _mapCenter!,
        onTap: (_, location) => onMapTap(location),
        interactionOptions: const fm.InteractionOptions(
          flags: fm.InteractiveFlag.doubleTapDragZoom |
          fm.InteractiveFlag.doubleTapZoom |
          fm.InteractiveFlag.pinchMove |
          fm.InteractiveFlag.pinchZoom |
          fm.InteractiveFlag.flingAnimation |
          fm.InteractiveFlag.drag |
          fm.InteractiveFlag.scrollWheelZoom,
        ),
      ),
      children: [
        vmt.VectorTileLayer(
          theme: _theme,
          tileProviders: vmt.TileProviders({
            _mapFeature.offlineMapLayer.offlineMapLayerName!:
            vmtm.MbTilesVectorTileProvider(
              mbtiles: _mbtiles!,
            ),
          }),
          maximumZoom: 18,
        ),
        // Show attributions on offline map too, if available.
        if ((_mapFeature.offlineMapLayer.logo?.isNotEmpty ?? false) ||
            (_mapFeature.offlineMapLayer.text?.isNotEmpty ?? false))
          fm.RichAttributionWidget(
            showFlutterMapAttribution: false,
            animationConfig: const fm.ScaleRAWA(),
            attributions: [
              if (_mapFeature.offlineMapLayer.logo?.isNotEmpty ?? false)
                fm.LogoSourceAttribution(
                  SvgPicture.network(
                    _mapFeature.offlineMapLayer.logo!,
                    height: 28,
                  ),
                  onTap: _mapFeature.offlineMapLayer.logoLink?.isNotEmpty ?? false
                      ? () => launchUrl(Uri.parse(_mapFeature.offlineMapLayer.logoLink!))
                      : null,
                ),
              if (_mapFeature.offlineMapLayer.text?.isNotEmpty ?? false)
                fm.TextSourceAttribution(
                  _mapFeature.offlineMapLayer.text!,
                  onTap: _mapFeature.offlineMapLayer.textLink?.isNotEmpty ?? false
                      ? () => launchUrl(Uri.parse(_mapFeature.offlineMapLayer.textLink!))
                      : null,
                ),
            ],
          ),
        CurrentLocationLayer(),
        PopupMarkerLayer(
          options: PopupMarkerLayerOptions(
            popupController: _popupLayerController,
            markers: selectedMarker != null ? _selectedMarkers : _markers,
            popupDisplayOptions: PopupDisplayOptions(
              snap: PopupSnap.markerTop,
              builder: (BuildContext context, fm.Marker marker) {
                if (marker is MapMarkerWithText) {
                  return MapDescriptionPopup(marker, selectedMarker);
                }
                return const SizedBox.shrink();
              },
            ),
          ),
        ),
      ],
    );
  }

  void onMapTap(LatLng pos) {
    if (selectedMarker != null) {
      _selectedMarkers.remove(selectedMarker);
      selectedMarker = selectedMarker!
          .cloneWithNewPoint(context, LatLng(pos.latitude, pos.longitude));
      _selectedMarkers.add(selectedMarker!);
      setState(() {});
    } else {
      _popupLayerController.hideAllPopups();
    }
  }

  Future<void> saveNewPosition() async {
    if (isOnlyEditMode) {
      RouterService.goBack(context, {
        "lat": selectedMarker!.point.latitude,
        "lng": selectedMarker!.point.longitude
      });
      return;
    }
    await DbPlaces.saveLocation(selectedMarker!.place.id!,
        selectedMarker!.point.latitude, selectedMarker!.point.longitude);
    ToastHelper.Show(context, "Place has been changed.".tr());
    var markerToRemove =
    _markers.firstWhere((m) => m.place.id == selectedMarker!.place.id);
    _markers.remove(markerToRemove);
    _markers.add(selectedMarker!);
    _popupLayerController.hideAllPopups();
    setState(() {
      selectedMarker = null;
    });
  }

  void cancelNewPosition() {
    if (isOnlyEditMode) {
      RouterService.goBack(context);
      return;
    }
    setState(() {
      selectedMarker = null;
    });
  }

  void showAllGroups() {
    loadPlaces(loadOtherGroups: true);
    cancelNewPosition();
  }

  bool isIconVisible(PlaceModel place) {
    return true;
  }
}
