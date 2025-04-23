import 'dart:async';
import 'dart:io';
import 'dart:math';
import 'dart:math' as math;

import 'package:auto_route/auto_route.dart';
import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart' as fm;
import 'package:flutter_map_animations/flutter_map_animations.dart';
import 'package:flutter_map_location_marker/flutter_map_location_marker.dart';
import 'package:flutter_map_marker_popup/flutter_map_marker_popup.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/components/map/map_page_helper.dart';
import 'package:fstapp/pages/occasion/occasion_home_page.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/features/feature.dart';
import 'package:fstapp/components/map/map_description_popup.dart';
import 'package:fstapp/components/map/map_location_pin_helper.dart';
import 'package:fstapp/components/map/map_marker_with_text.dart';
import 'package:fstapp/components/map/map_place_model.dart';
import 'package:fstapp/components/map/offline_map_style_helper.dart';
import 'package:fstapp/data_models/icon_model.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'package:fstapp/data_models/path_group_model.dart';
import 'package:fstapp/data_services/DataExtensions.dart';
import 'package:fstapp/data_services/db_groups.dart';
import 'package:fstapp/data_services/db_places.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/services/platform_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/map/offline_map_helper.dart';
import 'package:fstapp/widgets/pop_button.dart';
import 'package:collection/collection.dart';
import 'package:latlong2/latlong.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter_map_cancellable_tile_provider/flutter_map_cancellable_tile_provider.dart';
import 'package:url_launcher/url_launcher.dart';
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

class _MapPageState extends State<MapPage> with TickerProviderStateMixin  {
  late final _animatedMapController = AnimatedMapController(vsync: this);
  final PopupController _popupLayerController = PopupController();

  List<IconModel> _icons = [];
  List<MapMarkerWithText> _markers = [];
  List<MapMarkerWithText> _selectedMarkers = [];
  static MapMarkerWithText? focusedMarker;
  static MapMarkerWithText? selectedMarker;

  List<PathGroupsModel> _pathGroups = [];
  Map<int, List<fm.Polyline>> _allGroupPolylines = {};
  int? _selectedGroupId;

  List<fm.Polyline> _polylines = [];

  String pageTitle = AppConfig.mapTitle;
  bool isOnlyEditMode = false;

  LatLng? _mapCenter;
  late final MapFeature _mapFeature;

  bool _useOffline = false;
  bool _isDownloading = false;
  double _downloadProgress = 0.0;
  bool _downloadCompleted = false;
  String? _offlinePackagePath;
  bool _isMapLoaded = false;
  MbTiles? _mbtiles;
  dynamic _style;

  late final ScrollController _iconScrollController;

  bool _showLocation = true;

  @override
  void initState() {
    super.initState();
    _iconScrollController = ScrollController();
  }

  @override
  void dispose() {
    _iconScrollController.dispose();
    super.dispose();
  }

  fm.MapOptions get _mapOptions => fm.MapOptions(
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
  );

  @override
  void didChangeDependencies() async {
    super.didChangeDependencies();

    // var _observer = RouterScope.of(context).firstObserverOfType<AutoRouteObserver>();
    // if (_observer != null) {
    //   _observer.subscribe(this, context.router.currentChild!);
    // }

    context.tabsRouter.addListener(() {
      if (context.tabsRouter.activeIndex == OccasionHomePage.visibleTabKeys.indexOf(OccasionTab.map)) {
        setState(() => _showLocation = true);
      } else {
        setState(() => _showLocation = false);
      }
    });

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
    if (!PlatformHelper.isWeb && _isOfflineMapConfigured()) {
      _useOffline = true;
      await _initOfflineMap();
    }
    if (widget.id == null && context.routeData.hasPendingChildren) {
      widget.id =
          context.routeData.pendingChildren[0].params.getInt("id");
    }
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
      if (_markers.isNotEmpty) runEditPositionMode(_markers.single);
      isOnlyEditMode = true;
    }
  }

  bool _isOfflineMapConfigured() {
    final offlineLayer = _mapFeature.offlineMapLayer;
    return (offlineLayer.offlineMapPackageURL?.isNotEmpty ?? false) &&
        (offlineLayer.offlineMapStyleURL?.isNotEmpty ?? false) &&
        (offlineLayer.offlineMapLayerName?.isNotEmpty ?? false);
  }

  Future<void> _initOfflineMap() async {
    try {
      _style = await StyleReader(
          uri: _mapFeature.offlineMapLayer.offlineMapStyleURL!)
          .read();
    } catch (e) {
      debugPrint("Failed to load style: $e");
    }
    _offlinePackagePath = await OfflineMapHelper
        .getOfflinePackagePath(_mapFeature.offlineMapLayer.offlineMapPackageURL!);
    bool fileExists = await File(_offlinePackagePath!).exists();
    if (fileExists) {
      _mbtiles = MbTiles(mbtilesPath: _offlinePackagePath!, gzip: true);
    }
    if (_mapFeature.offlineMapLayer.autoDownloadOfflineMap == true) {
      setState(() => _useOffline = true);
      if (!fileExists) {
        Future.delayed(Duration(seconds: 1), () => _downloadOfflinePackage());
      }
    } else {
      List<ConnectivityResult> connectivityResult =
      await Connectivity().checkConnectivity();
      bool hasConnection = connectivityResult.isNotEmpty &&
          !connectivityResult.contains(ConnectivityResult.none);
      setState(() => _useOffline = !hasConnection);
    }
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
      final mbtilesFile = await OfflineMapHelper.getOfflineMapPackage(
        _mapFeature.offlineMapLayer.offlineMapPackageURL!,
        _offlinePackagePath!,
            (progress) {
          setState(() => _downloadProgress = progress);
        },
      );
      if (mbtilesFile == null) {
        setState(() => _isDownloading = false);
        return;
      }
      final offlineStylePath = await OfflineMapHelper.getOfflineStyleFilePath(
          _mapFeature.offlineMapLayer.offlineMapStyleURL!);
      final styleFile = await OfflineMapHelper.getOrDownloadFile(
        _mapFeature.offlineMapLayer.offlineMapStyleURL!,
        offlineStylePath,
            (progress) {},
      );
      if (styleFile == null) {
        setState(() => _isDownloading = false);
        return;
      }
      setState(() {
        _isDownloading = false;
        _downloadCompleted = true;
      });
      _mbtiles = MbTiles(mbtilesPath: _offlinePackagePath!, gzip: true);
      ToastHelper.Show(
          context, "Offline map downloaded and ready for offline use".tr());
      Timer(Duration(seconds: 2), () {
        setState(() {
          _downloadCompleted = false;
          _useOffline = true;
        });
      });
    } catch (e) {
      debugPrint("Error downloading offline package: $e");
      setState(() => _isDownloading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    Widget mapWidget =
    _useOffline ? _buildOfflineMap() : _buildOnlineMap();
    return Scaffold(
      appBar: AppBar(
        title: Text(pageTitle),
        leading: PopButton(),
        actions: [
          if (!PlatformHelper.isWeb && _isOfflineMapConfigured())
            Row(
              children: [
                Icon(
                  _useOffline ? Icons.landscape : Icons.cloud,
                  color: Colors.grey,
                ),
                Switch(
                  onChanged: _isDownloading
                      ? null
                      : (value) async {
                    final currentCenter = _animatedMapController
                        .mapController
                        .camera
                        .center;
                    final currentZoom = _animatedMapController
                        .mapController
                        .camera
                        .zoom;
                    if (value) {
                      if (_offlinePackagePath != null &&
                          !(await File(_offlinePackagePath!)
                              .exists())) {
                        await _downloadOfflinePackage();
                        if (!(await File(_offlinePackagePath!)
                            .exists())) {
                          setState(() => _useOffline = false);
                        } else {
                          setState(() => _useOffline = true);
                        }
                      } else {
                        setState(() => _useOffline = true);
                      }
                    } else {
                      setState(() => _useOffline = false);
                    }
                    _animatedMapController.animateTo(
                      dest: currentCenter,
                      zoom: currentZoom,
                    );
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
          (_mapCenter == null || (_useOffline && _style == null))
              ? const SizedBox.shrink()
              : mapWidget,
          if (_isDownloading || _downloadCompleted)
            _buildProgressIndicator(),
          if (selectedMarker != null) _buildEditControls(),

          if (selectedMarker == null)
            MapPageHelper.buildGroupIconArea(
              context,
              _pathGroups,
              _selectedGroupId,
              _onGroupIconTap,
              _icons,
              scrollController: _iconScrollController,
            ),
          if (selectedMarker == null)
            MapPageHelper.buildSelectedGroupTitle(
              context,
              _pathGroups.firstWhereOrNull((g) => g.id == _selectedGroupId),
            ),
        ],
      ),
    );
  }

  Widget _buildProgressIndicator() {
    Alignment alignment =
    _useOffline ? Alignment.center : Alignment.topRight;
    EdgeInsets padding = _useOffline
        ? EdgeInsets.zero
        : const EdgeInsets.only(top: 16, right: 16);
    return IgnorePointer(
      child: Align(
        alignment: alignment,
        child: Padding(
          padding: padding,
          child: Container(
            width: 40,
            height: 40,
            decoration: const BoxDecoration(
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
                    valueColor:
                    const AlwaysStoppedAnimation<Color>(Colors.white),
                  ),
                ),
                Text(
                  "${(_downloadProgress * 100).toInt()}%",
                  style:
                  const TextStyle(color: Colors.white, fontSize: 10),
                ),
              ],
            )
                : const Icon(Icons.check,
                size: 18, color: Colors.white),
          ),
        ),
      ),
    );
  }

  Widget _buildOnlineMap() {
    _isMapLoaded = true;
    return fm.FlutterMap(
      mapController: _animatedMapController.mapController,
      options: _mapOptions,
      children: [
        fm.TileLayer(
          tileProvider: CancellableNetworkTileProvider(),
          maxZoom: 18,
          urlTemplate: _mapFeature.onlineMapLayer.layerLink,
          fallbackUrl: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        ),
        if ((_mapFeature.onlineMapLayer.logo?.isNotEmpty ?? false) ||
            (_mapFeature.onlineMapLayer.text?.isNotEmpty ?? false))
          _buildOnlineAttribution(),
        ..._buildCommonMapLayers(),
      ],
    );
  }

  Widget _buildOfflineMap() {
    if (_style == null || _mbtiles == null) {
      return const SizedBox.shrink();
    }
    _isMapLoaded = true;
    return fm.FlutterMap(
      mapController: _animatedMapController.mapController,
      options: _mapOptions,
      children: [
        vmt.VectorTileLayer(
          theme: _style?.theme,
          sprites: _style?.sprites,
          tileProviders: vmt.TileProviders({
            _mapFeature.offlineMapLayer.offlineMapLayerName!:
            vmtm.MbTilesVectorTileProvider(
              mbtiles: _mbtiles!,
            ),
          }),
          maximumZoom: 18,
        ),
        if ((_mapFeature.offlineMapLayer.logo?.isNotEmpty ?? false) ||
            (_mapFeature.offlineMapLayer.text?.isNotEmpty ?? false))
          _buildOfflineAttribution(),
        ..._buildCommonMapLayers(),
      ],
    );
  }

  List<Widget> _buildCommonMapLayers() {
    return [
      fm.PolylineLayer(polylines: _polylines),
      if(_showLocation) CurrentLocationLayer(),
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
    ];
  }

  Widget _buildOnlineAttribution() {
    return fm.RichAttributionWidget(
      showFlutterMapAttribution: false,
      animationConfig: const fm.ScaleRAWA(),
      attributions: [
        if (_mapFeature.onlineMapLayer.logo?.isNotEmpty ?? false)
          fm.LogoSourceAttribution(
            SvgPicture.network(
              _mapFeature.onlineMapLayer.logo!,
              height: 28,
            ),
            onTap: (_mapFeature.onlineMapLayer.logoLink?.isNotEmpty ?? false)
                ? () => launchUrl(Uri.parse(
                _mapFeature.onlineMapLayer.logoLink!))
                : null,
          ),
        if (_mapFeature.onlineMapLayer.text?.isNotEmpty ?? false)
          fm.TextSourceAttribution(
            _mapFeature.onlineMapLayer.text!,
            onTap: (_mapFeature.onlineMapLayer.textLink?.isNotEmpty ?? false)
                ? () => launchUrl(Uri.parse(
                _mapFeature.onlineMapLayer.textLink!))
                : null,
          ),
      ],
    );
  }

  Widget _buildOfflineAttribution() {
    return fm.RichAttributionWidget(
      showFlutterMapAttribution: false,
      animationConfig: const fm.ScaleRAWA(),
      attributions: [
        if (_mapFeature.offlineMapLayer.logo?.isNotEmpty ?? false)
          fm.LogoSourceAttribution(
            SvgPicture.network(
              _mapFeature.offlineMapLayer.logo!,
              height: 28,
            ),
            onTap: (_mapFeature.offlineMapLayer.logoLink?.isNotEmpty ?? false)
                ? () => launchUrl(Uri.parse(
                _mapFeature.offlineMapLayer.logoLink!))
                : null,
          ),
        if (_mapFeature.offlineMapLayer.text?.isNotEmpty ?? false)
          fm.TextSourceAttribution(
            _mapFeature.offlineMapLayer.text!,
            onTap: (_mapFeature.offlineMapLayer.textLink?.isNotEmpty ?? false)
                ? () => launchUrl(Uri.parse(
                _mapFeature.offlineMapLayer.textLink!))
                : null,
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

  void runEditPositionMode(MapMarkerWithText marker) {
    _popupLayerController.hideAllPopups();
    marker.oldPoint = marker.point;
    setState(() => selectedMarker = marker);
    _selectedMarkers
      ..clear()
      ..add(selectedMarker!);
  }

  Future<void> saveNewPosition() async {
    if (isOnlyEditMode) {
      RouterService.goBack(context, {
        "lat": selectedMarker!.point.latitude,
        "lng": selectedMarker!.point.longitude
      });
      return;
    }
    await DbPlaces.saveLocation(
        selectedMarker!.place.id!,
        selectedMarker!.point.latitude,
        selectedMarker!.point.longitude);
    ToastHelper.Show(context, "Place has been changed.".tr());
    var markerToRemove =
    _markers.firstWhere((m) => m.place.id == selectedMarker!.place.id);
    _markers.remove(markerToRemove);
    _markers.add(selectedMarker!);
    _popupLayerController.hideAllPopups();
    setState(() => selectedMarker = null);
  }

  void cancelNewPosition() {
    if (isOnlyEditMode) {
      RouterService.goBack(context);
      return;
    }
    setState(() => selectedMarker = null);
  }

  void showAllGroups() {
    loadPlaces(loadOtherGroups: true);
    cancelNewPosition();
  }

  Future<void> loadPlaces(
      {int? placeId, bool loadOtherGroups = false}) async {
    _markers.clear();
    var offlinePlaces = await OfflineDataService.getAllPlaces();
    _icons = await OfflineDataService.getAllIcons();
    offlinePlaces.sortPlaces(false);
    var offlineList =
    loadOtherGroups ? offlinePlaces : offlinePlaces.where((e) => !e.isHidden).toList();
    if (placeId != null) {
      var p = offlinePlaces.firstWhereOrNull((p) => p.id == placeId);
      if (p != null) offlineList.add(p);
    }
    await addEventsToPlace(offlineList);
    addPlacesToMap(offlineList);
    _pathGroups = (await OfflineDataService.getAllPathGroups()).where((p)=>!p.isHidden!).toList();
    _allGroupPolylines = await MapPageHelper.loadGroupPolylines(
      offlineList,
      _pathGroups
    );

    var onlineIcons = await DbPlaces.getAllIcons();
    // overwrite _icons so path-group icons match DB icons
    _icons = onlineIcons;

    // now markers for online data:
    List<PlaceModel> onlineList;
    if (loadOtherGroups) {
      var dbGroups = await DbGroups.getGroupsWithPlaces();
      onlineList = dbGroups
          .where((e) => e.place != null)
          .map((e) {
        e.place!.title = e.title;
        return e.place!;
      })
          .toList();
    } else {
      var places = await DbPlaces.getAllPlaces();
      await OfflineDataService.saveAllPlaces(places);
      onlineList = places.where((p) => !p.isHidden).toList();
    }
    onlineList.sortPlaces(false);
    if (placeId != null) {
      var p = onlineList.firstWhereOrNull((p) => p.id == placeId);
      if (p != null) onlineList.add(p);
    }
    _markers.clear();
    await addEventsToPlace(onlineList);
    addPlacesToMap(onlineList);

    _pathGroups = (await DbPlaces.getAllPathGroups()).where((p)=>!p.isHidden!).toList();
    _allGroupPolylines = await MapPageHelper.loadGroupPolylines(
        onlineList,
        _pathGroups
    );
    // show all by default:
    setState(() {
      _polylines = _allGroupPolylines.values.expand((l) => l).toList();
    });

    if (placeId != null) {
      var p = onlineList.firstWhereOrNull((p) => p.id == placeId);
      if (p != null) {
        setMapToOnePlaceAndShowPopup(placeId, p);
      }
    }
  }

  Future<void> addEventsToPlace(List<PlaceModel> places) async {
    var events = await OfflineDataService.getAllEvents();
    for (var p in places) {
      var matches = events.where((e) => e.place?.id == p.id);
      p.events.addAll(matches);
    }
  }

  void addPlacesToMap(List<PlaceModel> places) {
    var mappedMarkers = places.map((place) {
      var mapPlace = MapPlaceModel.fromPlaceModel(place);
      return MapMarkerWithText(
        context: context,
        place: mapPlace,
        point: mapPlace.latLng,
        width: 58,
        height: 52,
        icon: isIconVisible(place)
            ? MapLocationPinHelper.type2icon(context, mapPlace, _icons)
            : null,
        alignment: Alignment.topCenter,
        editAction: runEditPositionMode,
      );
    }).toList();
    setState(() => _markers.addAll(mappedMarkers));
  }

  void setMapToOnePlaceAndShowPopup(int placeId, PlaceModel p) {
    var m = _markers.firstWhere((m) => m.place.id == placeId);
    _markers.remove(m);
    _markers.add(m);
    focusedMarker = m;
    _popupLayerController.showPopupsOnlyFor([m]);
    setMapToOnePlace(p);
  }

  void setMapToOnePlace(PlaceModel place) {
    _mapCenter = LatLng(place.getLat(), place.getLng());
    if (_isMapLoaded) {
      _animatedMapController.animateTo(dest: _mapCenter!);
    }
  }

  bool isIconVisible(PlaceModel place) {
    return true;
  }

  // ─── NEW: handle tapping a path-group icon ───
  void _onGroupIconTap(int groupId) async {
    if (_selectedGroupId == groupId) {
      // deselect: show all
      _selectedGroupId = null;
      setState(() {
        _polylines =
            _allGroupPolylines.values.expand((l) => l).toList();
      });
    } else {
      // select one group
      _selectedGroupId = groupId;
      final newLines = _allGroupPolylines[groupId] ?? [];
      setState(() {
        _polylines = newLines;
      });
      // animate map to fit this group's bounds
      final allPoints = newLines.expand((pl) => pl.points).toList();
      if (allPoints.isNotEmpty) {
        await _animatedMapController.centerOnPoints(
          allPoints,
          curve: Curves.easeInOut,
        );
      }
    }
  }

  Widget _buildEditControls() {
    return Visibility(
      visible: selectedMarker != null,
      child: Column(
        children: [
          Container(
            color: Colors.white,
            child: Row(
              mainAxisAlignment:
              MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: cancelNewPosition,
                  child: const Text("Storno").tr(),
                ),
                const Padding(
                    padding:
                    EdgeInsets.all(16.0)),
                Visibility(
                  visible: !isOnlyEditMode,
                  child: ElevatedButton(
                    onPressed: showAllGroups,
                    child:
                    const Text("Show groups")
                        .tr(),
                  ),
                ),
                const Padding(
                    padding:
                    EdgeInsets.all(16.0)),
                ElevatedButton(
                  onPressed: saveNewPosition,
                  child: const Text("Save location")
                      .tr(),
                ),
              ],
            ),
          ),
          Container(
            color: Colors.white,
            child: const Text(
                "You can change location by tapping on the map.")
                .tr(),
          ),
          Expanded(child: Container()),
        ],
      ),
    );
  }
}
