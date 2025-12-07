import 'dart:async';
import 'dart:io';

import 'package:auto_route/auto_route.dart';
import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart' as fm;
import 'package:flutter_map_animations/flutter_map_animations.dart';
import 'package:flutter_map_location_marker/flutter_map_location_marker.dart';
import 'package:flutter_map_marker_popup/flutter_map_marker_popup.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/components/features/map_feature.dart';
import 'package:fstapp/components/map/map_page_helper.dart';
import 'package:fstapp/components/timeline/schedule_helper.dart';
import 'package:fstapp/components/timeline/schedule_timeline.dart';
import 'package:fstapp/data_services/db_events.dart';
import 'package:fstapp/dialogs/detail_dialog.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/pages/occasion/occasion_home_page.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/map/map_description_popup.dart';
import 'package:fstapp/components/map/map_location_pin_helper.dart';
import 'package:fstapp/components/map/map_marker_with_text.dart';
import 'package:fstapp/components/map/map_place_model.dart';
import 'package:fstapp/components/map/offline_map_style_helper.dart';
import 'package:fstapp/data_models/icon_model.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'package:fstapp/data_models/path_group_model.dart';
import 'package:fstapp/data_services/data_extensions.dart';
import 'package:fstapp/data_services/db_groups.dart';
import 'package:fstapp/data_services/db_places.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/services/html_helper.dart';
import '../../services/js/js_interop.dart';
import 'package:fstapp/services/platform_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/map/offline_map_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/pop_button.dart';
import 'package:collection/collection.dart';
import 'package:latlong2/latlong.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter_map_cancellable_tile_provider/flutter_map_cancellable_tile_provider.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:mbtiles/mbtiles.dart';
import 'package:vector_map_tiles/vector_map_tiles.dart' as vmt;
import 'package:vector_map_tiles_mbtiles/vector_map_tiles_mbtiles.dart' as vmtm;

import 'event_page.dart';

@RoutePage()
class MapPage extends StatefulWidget {
  static const ROUTE = "map";
  int? id;
  PlaceModel? place;

  MapPage({@pathParam this.id, this.place, super.key});

  @override
  State<MapPage> createState() => _MapPageState();
}

class _MapPageState extends State<MapPage> with TickerProviderStateMixin  {
  static const bool _showAllPathsWhenNoGroupSelected = true;
  late final _animatedMapController = AnimatedMapController(vsync: this);
  final PopupController _popupLayerController = PopupController();
  final JSInterop jsInterop = JSInterop();

  List<IconModel> _icons = [];
  final List<MapMarkerWithText> _markers = [];
  final List<MapMarkerWithText> _selectedMarkers = [];
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
  bool _isShowingGroupsInEditMode = false;

  @override
  void initState() {
    super.initState();
    _iconScrollController = ScrollController();
    context.tabsRouter.addListener(() async {
      if (context.tabsRouter.activeIndex == OccasionHomePage.visibleTabKeys.indexOf(OccasionTab.map)) {
        setState(() => _showLocation = true);
        widget.id = null;
        if(kIsWeb) {
          WidgetsBinding.instance.addPostFrameCallback((_) async {
            await Future.delayed(Duration(milliseconds: 100));
            jsInterop.changeUrl("${RouterService.getCurrentUriWithOccasion()}${MapPage.ROUTE}");
          });
        }
      } else {
        setState(() => _showLocation = false);
      }
    });
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

    if (widget.id == null && context.routeData.hasPendingChildren) {
      widget.id = context.routeData.pendingChildren[0].params.getInt("id");
    }

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

    selectedMarker = null;
    var placeModel = widget.place;
    if (placeModel == null || placeModel.latLng == null) {
      loadData(placeId: widget.id);
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
    if (_mapFeature.offlineMapLayer.forceOfflineMap == true) {
      setState(() => _useOffline = true);
      if (!fileExists) {
        Future.delayed(const Duration(seconds: 1), () => _downloadOfflinePackage());
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
      Timer(const Duration(seconds: 2), () {
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
        title: Text(pageTitle, style: TextStyle(color: ThemeConfig.appBarColorNegative())),
        leading: PopButton(color: ThemeConfig.appBarColorNegative(),),
        actions: [
          if (!kIsWeb && _isOfflineMapConfigured() && !_mapFeature.offlineMapLayer.forceOfflineMap)
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
          _buildAttributionWidget(
            logoUrl: _mapFeature.onlineMapLayer.logo,
            logoLinkUrl: _mapFeature.onlineMapLayer.logoLink,
            text: _mapFeature.onlineMapLayer.text,
            textLinkUrl: _mapFeature.onlineMapLayer.textLink,
          ),
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
          _buildAttributionWidget(
            logoUrl: _mapFeature.offlineMapLayer.logo,
            logoLinkUrl: _mapFeature.offlineMapLayer.logoLink,
            text: _mapFeature.offlineMapLayer.text,
            textLinkUrl: _mapFeature.offlineMapLayer.textLink,
          ),
        ..._buildCommonMapLayers(),
      ],
    );
  }

  List<fm.Marker> _getDisplayedMarkers() {
    if (selectedMarker != null) {
      final List<MapMarkerWithText> backgroundMarkers = _markers
          .where((m) => m.place.id != selectedMarker!.place.id)
          .toList();
      return [...backgroundMarkers, ..._selectedMarkers];
    } else {
      return _markers;
    }
  }

  List<Widget> _buildCommonMapLayers() {
    return [
      fm.PolylineLayer(polylines: _polylines),
      if(_showLocation) CurrentLocationLayer(),
      PopupMarkerLayer(
        options: PopupMarkerLayerOptions(
          popupController: _popupLayerController,
          markers: _getDisplayedMarkers(),
          markerTapBehavior: MarkerTapBehavior.custom((space, state, controller){
            showPopupOrDialogFor(controller, space.marker);
          }),
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

  Widget _buildAttributionWidget({
    String? logoUrl,
    String? logoLinkUrl,
    String? text,
    String? textLinkUrl,
  }) {
    return fm.RichAttributionWidget(
      showFlutterMapAttribution: false,
      animationConfig: const fm.ScaleRAWA(),
      attributions: [
        if (logoUrl?.isNotEmpty ?? false)
          fm.LogoSourceAttribution(
            SvgPicture.network(
              logoUrl!,
              height: 28,
            ),
            onTap: (logoLinkUrl?.isNotEmpty ?? false)
                ? () => launchUrl(Uri.parse(logoLinkUrl!))
                : null,
          ),
        if (text?.isNotEmpty ?? false)
          fm.TextSourceAttribution(
            text!,
            onTap: (textLinkUrl?.isNotEmpty ?? false)
                ? () => launchUrl(Uri.parse(textLinkUrl!))
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
      hideAll();
    }
  }

  void hideAll() {
    _popupLayerController.hideAllPopups();
    if (focusedMarker != null) {
      setState(() {
        final oldFocusedIndex = _markers.indexWhere((m) => m.place.id == focusedMarker!.place.id);
        if (oldFocusedIndex != -1) {
          _markers[oldFocusedIndex] = _markers[oldFocusedIndex].cloneWithFocus(context, false);
        }
        focusedMarker = null;
      });
    }
  }

  void runEditPositionMode(MapMarkerWithText marker) {
    _popupLayerController.hideAllPopups();
    if (focusedMarker != null && focusedMarker!.place.id != marker.place.id) {
      final oldFocusedIndex = _markers.indexWhere((m) => m.place.id == focusedMarker!.place.id);
      if (oldFocusedIndex != -1) {
        _markers[oldFocusedIndex] = _markers[oldFocusedIndex].cloneWithFocus(context, false);
      }
      focusedMarker = null;
    } else if (focusedMarker != null && focusedMarker!.place.id == marker.place.id) {
      final oldFocusedIndex = _markers.indexWhere((m) => m.place.id == focusedMarker!.place.id);
      if (oldFocusedIndex != -1) {
        _markers[oldFocusedIndex] = _markers[oldFocusedIndex].cloneWithFocus(context, false);
      }
      focusedMarker = null;
    }

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

    // We keep selectedMarker assigned until after potentially reloading places
    final savedMarkerPlaceId = selectedMarker!.place.id;

    if (_isShowingGroupsInEditMode) {
      _isShowingGroupsInEditMode = false;
      // Store current selected marker details to reapply focus/edit state after load
      if(selectedMarker?.place.id != null) {
        // If we need to re-enter edit mode for the same item after reload:
        // This part might be complex if the item is removed or its properties change significantly.
        // For now, we just reload places and exit edit mode.
      }
      selectedMarker = null; // Exit edit mode
      await loadData(); // Reload default places and polylines
    } else {
      // Original logic for updating _markers when not in _isShowingGroupsInEditMode
      var markerToRemove = _markers.firstWhereOrNull((m) => m.place.id == savedMarkerPlaceId);
      if(markerToRemove != null) _markers.remove(markerToRemove);
      // Add the updated marker back without the edit-mode specific focus.
      // The selectedMarker instance holds the new point.
      _markers.add(selectedMarker!.cloneWithFocus(context, false)); // Assuming cloneWithFocus also updates the point if needed from selectedMarker
      selectedMarker = null; // Exit edit mode
    }
    _popupLayerController.hideAllPopups();
    setState(() {}); // General UI update
  }


  void cancelNewPosition() {
    if (isOnlyEditMode) {
      RouterService.goBack(context);
      return;
    }

    final originalPlaceId = selectedMarker?.place.id;
    final oldPoint = selectedMarker?.oldPoint;

    if (_isShowingGroupsInEditMode) {
      _isShowingGroupsInEditMode = false;
      selectedMarker = null; // Exit edit mode first
      loadData().then((_) { // Reload default places
        // If we need to restore focus or re-select the original marker:
        if (originalPlaceId != null) {
          var originalMarkerInNewList = _markers.firstWhereOrNull((m) => m.place.id == originalPlaceId);
          if (originalMarkerInNewList != null && oldPoint != null) {
            // Potentially re-focus or re-select, but for cancel, usually just revert and exit edit mode.
          }
        }
        setState(() {});
      });
    } else {
      // Original cancel logic
      if (selectedMarker != null && selectedMarker!.oldPoint != null) {
        final originalMarkerIndex = _markers.indexWhere((m) => m.place.id == selectedMarker!.place.id);
        if (originalMarkerIndex != -1) {
          _markers[originalMarkerIndex] = MapMarkerWithText(
              context: context,
              point: selectedMarker!.oldPoint!,
              place: selectedMarker!.place,
              icon: selectedMarker!.icon,
              editAction: runEditPositionMode,
              showTitle: false
          );
        }
      }
      selectedMarker = null;
      setState(() {});
    }
  }

  void showAllGroups() {
    setState(() {
      _isShowingGroupsInEditMode = true;
    });
    // selectedMarker remains active, edit mode continues
    // loadPlaces will repopulate _markers with group places
    // addPlacesToMap will use _isShowingGroupsInEditMode to set titles
    // _getDisplayedMarkers will combine _markers (groups) and _selectedMarkers (edited one)
    loadData(loadOtherGroups: true);
  }


  Future<void> loadData(
      {int? placeId, bool loadOtherGroups = false}) async {
    // Preserve selected marker's ID if in edit mode to potentially re-apply state later if needed,
    // though current logic replaces _markers list entirely.
    // The selectedMarker instance itself in _selectedMarkers should persist.

    _markers.clear();
    var offlinePlaces = await OfflineDataService.getAllPlaces();
    _icons = await OfflineDataService.getAllIcons();
    offlinePlaces.sortPlaces(false);
    var offlineList =
    loadOtherGroups ? offlinePlaces : offlinePlaces.where((e) => !(e.isHidden)).toList();
    if (placeId != null) {
      var p = offlinePlaces.firstWhereOrNull((p) => p.id == placeId);
      if (p != null && !offlineList.any((item) => item.id == p.id)) offlineList.add(p);
    }
    await addOfflineEventsToPlace(offlineList);
    addPlacesToMap(offlineList);

    _pathGroups = (await OfflineDataService.getAllPathGroups()).where((p)=> !(p.isHidden??false)).toList();
    _allGroupPolylines = await MapPageHelper.loadGroupPolylines(
        offlineList, // Use offline list for initial polyline calculation if it's primary
        _pathGroups
    );

    bool isPlaceSetToOnePlace = false;

    // Update polylines based on current selection
    if (_selectedGroupId == null) {
      if (_showAllPathsWhenNoGroupSelected) {
        _polylines = _allGroupPolylines.values.expand((list) => list).toList();
      } else {
        _polylines = [];
      }
    } else {
      _polylines = _allGroupPolylines[_selectedGroupId!] ?? [];
    }

    if(mounted) setState(() {});
    if (placeId != null && !isOnlyEditMode && selectedMarker == null) { // Avoid auto-focusing if in edit mode already
      var p = offlineList.firstWhereOrNull((p) => p.id == placeId);
      if (p != null) {
        setMapToOnePlaceAndShowPopup(placeId, p);
        isPlaceSetToOnePlace = true;
      }
    }


    // online part
    var onlineIcons = await DbPlaces.getAllIcons();
    _icons = onlineIcons; // Prefer online icons

    List<PlaceModel> onlineList;
    var placesFromDb = await DbPlaces.getAllPlaces();
    await OfflineDataService.saveAllPlaces(placesFromDb);

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
      onlineList = placesFromDb.where((p) => !(p.isHidden)).toList();
    }
    onlineList.sortPlaces(false);

    if (placeId != null) {
      var p = onlineList.firstWhereOrNull((p) => p.id == placeId);
      // Ensure 'p' is added only if not already present to avoid duplicates from loadOtherGroups logic
      if (p != null && !onlineList.any((item) => item.id == p.id)) {
        onlineList.add(p);
      } else if (p != null && loadOtherGroups) {
        // If loading other groups and p is already there, ensure its data is primary
        onlineList.removeWhere((item) => item.id == p.id);
        onlineList.add(p);
      }
    }

    _markers.clear(); // Clear again before final population with online/merged data
    await addEventsToPlace(onlineList);
    addPlacesToMap(onlineList); // This will use the _isShowingGroupsInEditMode flag correctly

    _pathGroups = (await DbPlaces.getAllPathGroups()).where((p)=>!(p.isHidden??false)).toList();
    _allGroupPolylines = await MapPageHelper.loadGroupPolylines(
        onlineList, // Use final list of places for polylines
        _pathGroups
    );

    // Update polylines based on current selection
    if (_selectedGroupId == null) {
      if (_showAllPathsWhenNoGroupSelected) {
        _polylines = _allGroupPolylines.values.expand((list) => list).toList();
      } else {
        _polylines = [];
      }
    } else {
      _polylines = _allGroupPolylines[_selectedGroupId!] ?? [];
    }

    // This setState call was inside addPlacesToMap, moved here for clarity after all data processing
    if(mounted) setState(() {});


    if (placeId != null && !isOnlyEditMode && selectedMarker == null && !isPlaceSetToOnePlace) { // Avoid auto-focusing if in edit mode already
      var p = onlineList.firstWhereOrNull((p) => p.id == placeId);
      if (p != null) {
        setMapToOnePlaceAndShowPopup(placeId, p);
      }
    }
  }

  Future<void> addOfflineEventsToPlace(List<PlaceModel> places) async {
    var events = await OfflineDataService.getAllEvents();
    events = events.filterRootEvents().sortEvents();
    for (var p in places) {
      var matches = events.where((e) => e.place?.id == p.id);
      p.events.clear();
      p.events.addAll(matches);
    }
  }

  Future<void> addEventsToPlace(List<PlaceModel> places) async {
    var events = await DbEvents.getAllEvents(RightsService.currentOccasionId()!, false);
    events = events.filterRootEvents().sortEvents();
    for (var p in places) {
      var matches = events.where((e) => e.place?.id == p.id);
      p.events.clear();
      p.events.addAll(matches);
    }
  }

  bool _shouldShowMarkerTitle(
      int? placeId,
      int? currentFocusedMarkerId,
      int? editingMarkerId,
      Set<int> placeIdsInCurrentGroup
      ) {
    if (_isShowingGroupsInEditMode) {
      // In "show all groups during edit" mode:
      // Show title for all markers EXCEPT the one currently being edited.
      return editingMarkerId == null || placeId != editingMarkerId;
    } else {
      // Normal mode (not showing all group titles during edit):
      // Show title if the marker is currently focused.
      if (currentFocusedMarkerId != null && placeId == currentFocusedMarkerId) {
        return true;
      }
      // Show title if a group is selected AND this marker belongs to that group.
      if (_selectedGroupId != null && placeIdsInCurrentGroup.contains(placeId)) {
        return true;
      }
    }
    return false; // Default: do not show title.
  }

  void addPlacesToMap(List<PlaceModel> places) {
    var currentFocusedId = focusedMarker?.place.id;
    var editingMarkerId = selectedMarker?.place.id;

    Set<int> placeIdsInSelectedGroup = {};
    if (!_isShowingGroupsInEditMode && _selectedGroupId != null) {
      final group = _pathGroups.firstWhereOrNull((g) => g.id == _selectedGroupId);
      if (group != null && group.pathData != null) {
        placeIdsInSelectedGroup.addAll(group.pathData!.expand((segment) => segment));
      }
    }

    var mappedMarkers = places.map((place) {
      var mapPlace = MapPlaceModel.fromPlaceModel(place);
      var iconWidget = isIconVisible(place)
          ? MapLocationPinHelper.type2icon(context, mapPlace, _icons)
          : null;

      bool displayTitle = _shouldShowMarkerTitle(
          mapPlace.id,
          currentFocusedId,
          editingMarkerId,
          placeIdsInSelectedGroup
      );

      return MapMarkerWithText(
        context: context,
        place: mapPlace,
        point: mapPlace.latLng,
        width: 58,
        height: 52,
        icon: iconWidget,
        alignment: Alignment.topCenter,
        editAction: runEditPositionMode,
        showTitle: displayTitle,
      );
    }).toList();

    _markers.clear();
    _markers.addAll(mappedMarkers);
    // setState is called in loadPlaces after this
  }

  void setMapToOnePlaceAndShowPopup(int placeId, PlaceModel p) {
    var m = _markers.firstWhereOrNull((m) => m.place.id == placeId);
    if (m == null) return;

    _markers.remove(m);
    _markers.add(m);

    showPopupOrDialogFor(_popupLayerController, m);
    setMapToOnePlace(p);
  }

  void setMapToOnePlace(PlaceModel place) async {
    _mapCenter = LatLng(place.getLat(), place.getLng());
    int i = 0;
    while (!_isMapLoaded && mounted && i < 50) { // Poll with 5-second timeout
      await Future.delayed(const Duration(milliseconds: 100));
      i++;
    }
    if (_isMapLoaded && mounted) {
      _animatedMapController.animateTo(dest: _mapCenter!, zoom: _mapOptions.maxZoom);
    }
  }

  bool isIconVisible(PlaceModel place) {
    return true;
  }

  void _onGroupIconTap(int groupId) async {
    List<fm.Polyline> newLines = [];
    List<LatLng> allPoints = [];

    if (_selectedGroupId == groupId) {
      _selectedGroupId = null;
      if (_showAllPathsWhenNoGroupSelected) {
        newLines = _allGroupPolylines.values.expand((list) => list).toList();
        allPoints = [];
      }
      // else newLines is already [], allPoints is already []
    } else {
      _selectedGroupId = groupId;
      newLines = _allGroupPolylines[groupId] ?? [];
      allPoints = newLines.expand((pl) => pl.points).toList();
    }

    final List<MapMarkerWithText> groupMarkers = [];
    final List<MapMarkerWithText> otherMarkers = [];
    Set<int> placeIdsInSelectedGroup = {};
    if (_selectedGroupId != null) {
      final group = _pathGroups.firstWhereOrNull((g) => g.id == _selectedGroupId);
      if (group != null && group.pathData != null) {
        placeIdsInSelectedGroup.addAll(group.pathData!.expand((segment) => segment));
      }
    }

    var currentFocusedId = focusedMarker?.place.id;
    var editingMarkerId = selectedMarker?.place.id;

    for (final oldMarker in _markers) {
      bool newShowTitleState = _shouldShowMarkerTitle(
          oldMarker.place.id!,
          currentFocusedId,
          editingMarkerId,
          placeIdsInSelectedGroup
      );

      var updatedMarker = oldMarker;
      if (oldMarker.showTitle != newShowTitleState) {
        updatedMarker = MapMarkerWithText(
          context: context,
          place: oldMarker.place,
          point: oldMarker.point,
          width: oldMarker.width,
          height: oldMarker.height,
          icon: oldMarker.icon,
          alignment: oldMarker.alignment,
          editAction: oldMarker.editAction,
          showTitle: newShowTitleState,
        );
      }

      if (placeIdsInSelectedGroup.contains(oldMarker.place.id!)) {
        groupMarkers.add(updatedMarker);
      } else {
        otherMarkers.add(updatedMarker);
      }
    }

    _markers.clear();
    _markers.addAll(otherMarkers);
    _markers.addAll(groupMarkers);

    if (allPoints.isNotEmpty) {
      setState(() {
        _polylines = newLines;
      });
      await _animatedMapController.animatedFitCamera(
        cameraFit: fm.CameraFit.coordinates(coordinates: allPoints, padding: EdgeInsets.fromLTRB(32, 160, 84, 12)),
        curve: Curves.easeInOut,
      );
    } else {
      setState(() {
        _polylines = newLines; // Will be [] if deselected (and not _showAllPathsWhenNoGroupSelected) or if selected group has no lines
      });
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
                    onPressed: showAllGroups, // This now handles being in edit mode
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
                "You can change location by tapping on the map.",
              style: TextStyle(color: Colors.black),
            )
                .tr(),
          ),
          Expanded(child: Container()),
        ],
      ),
    );
  }

  void _setFocusedMarkerLogic(MapMarkerWithText markerToFocus) {
    // If we are in the mode of showing all group titles during edit, don't let tap-focus override them
    if (_isShowingGroupsInEditMode && (selectedMarker != null && markerToFocus.place.id != selectedMarker!.place.id)) {
      // If a group marker (not the one being edited) is tapped, show its popup but don't change its title state from true.
      // The popup logic is handled in showPopupOrDialogFor.
      // Here we just avoid toggling its 'showTitle' if it's a background group marker.
      return;
    }

    setState(() {
      final placeIdToFocus = markerToFocus.place.id;
      bool newFocusSet = false;
      MapMarkerWithText? markerToBringToTop;

      for (int i = 0; i < _markers.length; i++) {
        // Do not change focus state of the marker currently being edited
        if (selectedMarker != null && _markers[i].place.id == selectedMarker!.place.id) {
          if (_markers[i].place.id == placeIdToFocus) { // If the edited marker itself is somehow re-focused
            focusedMarker = _markers[i]; // Keep it as the focused marker conceptually
            newFocusSet = true;
          }
          continue;
        }

        if (_markers[i].place.id == placeIdToFocus) {
          if (!_markers[i].showTitle) {
            _markers[i] = _markers[i].cloneWithFocus(context, true);
          }
          focusedMarker = _markers[i];
          markerToBringToTop = _markers[i];
          newFocusSet = true;
        } else {
          if (_markers[i].showTitle) {
            // Only defocuse if not part of selected group that should show title or not in group edit mode display
            bool shouldRetainTitle = false;
            if (_selectedGroupId != null) {
              final group = _pathGroups.firstWhereOrNull((g) => g.id == _selectedGroupId);
              if (group != null && group.pathData != null && group.pathData!.any((segment) => segment.contains(_markers[i].place.id))) {
                shouldRetainTitle = true;
              }
            }
            if(!shouldRetainTitle) {
              _markers[i] = _markers[i].cloneWithFocus(context, false);
            }
          }
        }
      }
      if (!newFocusSet) {
        focusedMarker = null;
      }

      if (markerToBringToTop != null) {
        _markers.removeWhere((m) => m.place.id == markerToBringToTop!.place.id);
        _markers.add(markerToBringToTop);
      }
    });
  }


  void showPopupOrDialogFor(PopupController controller, fm.Marker markerInstance) async {
    if (selectedMarker != null && markerInstance is MapMarkerWithText && markerInstance.place.id != selectedMarker!.place.id) {
      // If in edit mode, and a *different* marker is tapped,
      // we might want to show its popup but not switch focus or exit edit mode.
      // For now, let's only allow interaction with the selectedMarker or no popups for others.
      // Or, if the tap on a background marker should show its popup:
      // Check if it's a background marker during group edit mode
      if(_isShowingGroupsInEditMode) {
        // Allow popup for background group markers
        _popupLayerController.hideAllPopups(); // Hide any existing popups
        controller.showPopupsOnlyFor([markerInstance]); // Show popup for this tapped marker
        return; // Do not proceed with focus logic or dialog for these background markers
      }
    }


    if (markerInstance is MapMarkerWithText) {
      final currentPlace = markerInstance.place;
      final hasLongDescription = HtmlHelper.isHtmlLong(currentPlace.description);
      final hasEvents = currentPlace.events?.isNotEmpty ?? false;
      final descriptionIsNullOrEmpty = currentPlace.description == null || currentPlace.description!.isEmpty;

      _popupLayerController.hideAllPopups();

      if (hasLongDescription || hasEvents) {
        // Set focus only if not in edit mode or if it's the marker being edited.
        if(selectedMarker == null || markerInstance.place.id == selectedMarker!.place.id) {
          _setFocusedMarkerLogic(markerInstance);
        }

        var events = markerInstance.place.events;
        await showDialog(
          context: context,
          builder: (BuildContext context) {
            return DetailDialog(
              title: currentPlace.title,
              canEdit: RightsService.isEditor(),
              onEditPressed: () {
                if(selectedMarker == null) { // Only enter edit mode if not already editing another
                  runEditPositionMode(markerInstance);
                }
              },
              htmlDescription: currentPlace.description,
              customContentWidget: activityContent(events),);
          },
        );
        // Show title after dialog closes, only if not in edit mode for another marker
        if(selectedMarker == null || markerInstance.place.id == selectedMarker!.place.id) {
          _setFocusedMarkerLogic(markerInstance);
        }

      } else {
        // No dialog needed (short/no description AND no events)
        if (descriptionIsNullOrEmpty) {
          // Description is null or empty: Show Title only (if not in edit mode for another)
          if(selectedMarker == null || markerInstance.place.id == selectedMarker!.place.id) {
            _setFocusedMarkerLogic(markerInstance);
          }
        } else {
          // Description is short but not empty: Show Popup
          controller.showPopupsOnlyFor([markerInstance]);
        }
      }
    }
  }

  Widget activityContent(List<TimeBlockItem>? events) {
    return Column(
      children: [
        if (events != null && events.isNotEmpty)
          Padding(
            padding: const EdgeInsets.fromLTRB(0,0,0,24),
            child: ScheduleTimeline(
              eventGroups: TimeBlockHelper.splitTimeBlocksByDay(events, context),
              onEventPressed: (int id) {
                RouterService.navigateOccasion(context, "${EventPage.ROUTE}/$id")
                    .then((_) => loadData());
               },
              showAddNewEventButton: () => false,
              onAddNewEvent: null,
              nodePosition: 0.35,
            ),
          ),
      ],
    );
  }
}