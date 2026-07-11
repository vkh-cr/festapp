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
import 'package:fstapp/services/app_logger.dart';
import 'package:fstapp/services/exception_handler.dart';
import 'package:fstapp/components/map/map_page_helper.dart';
import 'package:fstapp/components/timeline/schedule_helper.dart';
import 'package:fstapp/components/timeline/schedule_timeline.dart';
import 'package:fstapp/components/schedule/db_events.dart';
import 'package:fstapp/widgets/detail_dialog.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/occasion/occasion_home_page.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/map/map_description_popup.dart';
import 'package:fstapp/components/map/map_location_pin_helper.dart';
import 'package:fstapp/components/cleaning/cleaning_status.dart';
import 'package:fstapp/components/cleaning/db_cleaning.dart';
import 'package:fstapp/components/cleaning/cleaning_report_flow.dart';
import 'package:fstapp/components/cleaning/models/cleaning_place_status.dart';
import 'package:fstapp/components/map/map_marker_with_text.dart';
import 'package:fstapp/components/map/map_place_model.dart';
import 'package:fstapp/components/map/offline_map_style_helper.dart';
import 'package:fstapp/components/map/icon_model.dart';
import 'package:fstapp/components/icons/place_type_model.dart';
import 'package:fstapp/components/icons/db_place_types.dart';
import 'package:fstapp/components/map/path_group_model.dart';
import 'package:fstapp/components/map/path_node.dart';
import 'package:fstapp/components/map/gpx_importer.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/widgets/drop_file.dart';
import 'package:cross_file/cross_file.dart';
import 'package:fstapp/data_services/data_extensions.dart';
import 'package:fstapp/components/groups/db_groups.dart';
import 'package:fstapp/components/map/db_places.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/components/html/html_helper.dart';
import 'place_model.dart';
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
import 'package:fstapp/components/map/map_strings.dart';
import 'package:flutter_map_cancellable_tile_provider/flutter_map_cancellable_tile_provider.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:mbtiles/mbtiles.dart';
import 'package:vector_map_tiles/vector_map_tiles.dart' as vmt;
import 'package:vector_map_tiles_mbtiles/vector_map_tiles_mbtiles.dart' as vmtm;

import '../schedule/event_page.dart';

@RoutePage()
class MapPage extends StatefulWidget {
  static const ROUTE = "map";
  int? id;
  PlaceModel? place;

  /// When set, the map opens in path-drawing mode for this group: tapping
  /// existing place markers appends place-ref nodes, tapping empty map appends
  /// free-point nodes, and Save returns the drawn path as a CSV string.
  PathGroupsModel? editPathGroup;

  /// Optional deep-link place-type filter (e.g. `map?placeType=toilet` from the
  /// Cleaning page) — opens the map showing only that category.
  final String? placeType;

  MapPage({
    @pathParam this.id,
    this.place,
    this.editPathGroup,
    @QueryParam('placeType') this.placeType,
    super.key,
  });

  /// True while the map is in path-drawing mode. The occasion shell listens to
  /// this to hide its bottom navigation bar during editing.
  static final ValueNotifier<bool> isEditingNotifier = ValueNotifier(false);

  @override
  State<MapPage> createState() => _MapPageState();
}

class _MapPageState extends State<MapPage> with TickerProviderStateMixin {
  // Paths stay hidden until the user selects a group; nothing is drawn by default.
  static const bool _showAllPathsWhenNoGroupSelected = false;
  late final _animatedMapController = AnimatedMapController(vsync: this);
  final PopupController _popupLayerController = PopupController();
  final JSInterop jsInterop = JSInterop();

  List<IconModel> _icons = [];
  // Derived cleaning status + rating aggregate per toilet place id (empty unless
  // the cleaning feature is enabled). Colors the toilet pins for everyone.
  Map<int, CleaningPlaceStatus> _cleaningByPlace = {};
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

  /// Visible place types (categories) shown as the bottom filter bar. Loaded
  /// from the occasion; hidden types are excluded from the chips but their
  /// places fall into the trailing "Other" bucket.
  List<PlaceTypeModel> _placeTypes = [];

  /// Sentinel code for the trailing "Other" filter chip (untyped places and
  /// places whose type is not among the visible chips).
  static const String _otherPlaceTypeCode = "__other__";

  /// Currently selected place-type filter (a type `code`, [_otherPlaceTypeCode],
  /// or null while no types are loaded). Single-select.
  String? _selectedPlaceTypeCode;
  bool _placeTypeInitialized = false;

  /// Deep-link place-type filter (from `map?placeType=…`). When set it wins over
  /// the saved/default selection and filters even if that code is not a catalog
  /// place_type chip (e.g. toilets marked only via the "WC" checkbox).
  String? _deepLinkPlaceType;

  /// True once we know the place-type situation authoritatively enough to filter
  /// without flashing: either cached types were loaded (offline) or the online
  /// load finished. Until then the default marker view is held back so an empty
  /// offline type cache can't briefly paint *every* place unfiltered before the
  /// category filter kicks in.
  bool _placeTypesResolved = false;

  /// Place we were deep-linked to (e.g. from a user's accommodation link). It
  /// must stay visible on the map regardless of the active category filter.
  int? _forcedVisiblePlaceId;

  /// Working copy of the path being drawn (mode active when
  /// `widget.editPathGroup != null`). Each inner list is a segment of nodes.
  final List<List<PathNode>> _drawSegments = [];

  /// Markers for free points added while drawing (not backed by place rows).
  final List<fm.Marker> _drawPointMarkers = [];

  bool get _isDrawingPath => widget.editPathGroup != null;

  @override
  void initState() {
    super.initState();
    if (widget.placeType != null && widget.placeType!.isNotEmpty) {
      _deepLinkPlaceType = widget.placeType;
      _selectedPlaceTypeCode = widget.placeType;
      _placeTypeInitialized = true;
    }
    _iconScrollController = ScrollController();
    context.tabsRouter.addListener(() async {
      if (context.tabsRouter.activeIndex ==
          OccasionHomePage.baseTabKeys.indexOf(OccasionTab.map)) {
        setState(() => _showLocation = true);
        widget.id = null;
        if (kIsWeb) {
          WidgetsBinding.instance.addPostFrameCallback((_) async {
            await Future.delayed(Duration(milliseconds: 100));
            jsInterop.changeUrl(
                "${RouterService.getCurrentUriWithOccasion()}${MapPage.ROUTE}");
          });
        }
      } else {
        setState(() => _showLocation = false);
      }
    });
  }

  @override
  void dispose() {
    if (_isDrawingPath) {
      MapPage.isEditingNotifier.value = false;
    }
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

    // Hide the occasion shell's bottom navigation bar while drawing a path.
    // Deferred to after the frame so we never notify listeners mid-build.
    WidgetsBinding.instance.addPostFrameCallback(
        (_) => MapPage.isEditingNotifier.value = _isDrawingPath);

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

    if (_isDrawingPath) {
      // Seed the working path from the group being edited (deep copy so undo /
      // cancel never mutate the caller's model).
      _drawSegments
        ..clear()
        ..addAll((widget.editPathGroup!.pathData ?? [])
            .map((seg) => List<PathNode>.from(seg)));
      pageTitle = widget.editPathGroup!.title ?? MapStrings.drawPath;
    }

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
      AppLogger.error("Failed to load style: $e");
    }
    _offlinePackagePath = await OfflineMapHelper.getOfflinePackagePath(
        _mapFeature.offlineMapLayer.offlineMapPackageURL!);
    bool fileExists = await File(_offlinePackagePath!).exists();
    if (fileExists) {
      _mbtiles = MbTiles(mbtilesPath: _offlinePackagePath!, gzip: true);
    }
    if (_mapFeature.offlineMapLayer.forceOfflineMap == true) {
      setState(() => _useOffline = true);
      if (!fileExists) {
        Future.delayed(
            const Duration(seconds: 1), () => _downloadOfflinePackage());
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
      ToastHelper.Show(context, MapStrings.offlineMapReady);
      Timer(const Duration(seconds: 2), () {
        setState(() {
          _downloadCompleted = false;
          _useOffline = true;
        });
      });
    } catch (e) {
      AppLogger.error("Error downloading offline package: $e");
      setState(() => _isDownloading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    Widget mapWidget = _useOffline ? _buildOfflineMap() : _buildOnlineMap();
    return Scaffold(
      appBar: AppBar(
        title: Text(pageTitle,
            style: TextStyle(color: ThemeConfig.appBarColorNegative())),
        leading: PopButton(
          color: ThemeConfig.appBarColorNegative(),
        ),
        actions: [
          if (!kIsWeb &&
              _isOfflineMapConfigured() &&
              !_mapFeature.offlineMapLayer.forceOfflineMap)
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
                              .mapController.camera.center;
                          final currentZoom =
                              _animatedMapController.mapController.camera.zoom;
                          if (value) {
                            if (_offlinePackagePath != null &&
                                !(await File(_offlinePackagePath!).exists())) {
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
                  activeThumbColor: Colors.grey[600],
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
          if (_isDownloading || _downloadCompleted) _buildProgressIndicator(),
          if (_isDrawingPath) _buildDrawControls(),
          if (!_isDrawingPath && selectedMarker != null) _buildEditControls(),
          if (!_isDrawingPath && selectedMarker == null)
            MapPageHelper.buildGroupIconArea(
              context,
              _pathGroups,
              _selectedGroupId,
              _onGroupIconTap,
              _icons,
              scrollController: _iconScrollController,
            ),
          if (!_isDrawingPath && selectedMarker == null)
            MapPageHelper.buildSelectedGroupTitle(
              context,
              _pathGroups.firstWhereOrNull((g) => g.id == _selectedGroupId),
            ),
          if (!_isDrawingPath && selectedMarker == null)
            MapPageHelper.buildPlaceTypeFilterBar(
              context,
              _placeTypes,
              _selectedPlaceTypeCode,
              _otherPlaceTypeCode,
              _onPlaceTypeTap,
              _icons,
            ),
        ],
      ),
    );
  }

  Widget _buildProgressIndicator() {
    Alignment alignment = _useOffline ? Alignment.center : Alignment.topRight;
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
                : const Icon(Icons.check, size: 18, color: Colors.white),
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
    } else if (_isDrawingPath) {
      // Show every place (so any can be tapped into the path) plus the pins for
      // the free points added so far.
      return [..._markers, ..._drawPointMarkers];
    } else if (!_placeTypesResolved) {
      // Types not loaded yet: show only a deep-linked place (if any) and hold the
      // rest back rather than flashing every place unfiltered for a frame.
      return _markers
          .where((m) => m.place.id == _forcedVisiblePlaceId)
          .toList();
    } else {
      return _markers
          .where((m) =>
              m.place.id == _forcedVisiblePlaceId ||
              _placeMatchesSelectedType(m.place))
          .toList();
    }
  }

  /// Whether a place passes the active place-type filter. With no filter loaded
  /// every place matches; the "Other" bucket matches untyped places and places
  /// whose type is not among the visible chips.
  bool _placeMatchesSelectedType(MapPlaceModel place) {
    // A deep-link filter (e.g. toilets) applies even with no catalog place_types.
    if (_deepLinkPlaceType != null) {
      return place.type == _deepLinkPlaceType;
    }
    if (_selectedPlaceTypeCode == null || _placeTypes.isEmpty) return true;
    if (_selectedPlaceTypeCode == _otherPlaceTypeCode) {
      final visibleCodes = _placeTypes.map((t) => t.code).toSet();
      return place.type == null || !visibleCodes.contains(place.type);
    }
    return place.type == _selectedPlaceTypeCode;
  }

  List<Widget> _buildCommonMapLayers() {
    return [
      fm.PolylineLayer(polylines: _polylines),
      if (_showLocation) CurrentLocationLayer(),
      PopupMarkerLayer(
        options: PopupMarkerLayerOptions(
          popupController: _popupLayerController,
          markers: _getDisplayedMarkers(),
          markerTapBehavior:
              MarkerTapBehavior.custom((space, state, controller) {
            showPopupOrDialogFor(controller, space.marker);
          }),
          popupDisplayOptions: PopupDisplayOptions(
            snap: PopupSnap.markerTop,
            builder: (BuildContext context, fm.Marker marker) {
              if (marker is MapMarkerWithText) {
                final isToilet = marker.place.type ==
                        CleaningStatusHelper.toiletPlaceTypeCode &&
                    FeatureService.isFeatureEnabled(FeatureConstants.cleaning);
                return MapDescriptionPopup(
                  marker,
                  selectedMarker,
                  cleaningStatus: isToilet
                      ? (_cleaningByPlace[marker.place.id]?.status ??
                          CleaningStatus.green)
                      : null,
                  onReportCleaning: isToilet
                      ? () => _reportCleaningForPlace(marker.place)
                      : null,
                );
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
    if (_isDrawingPath) {
      _addDrawNode(PathNode.point(pos.latitude, pos.longitude));
      return;
    }
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
        final oldFocusedIndex =
            _markers.indexWhere((m) => m.place.id == focusedMarker!.place.id);
        if (oldFocusedIndex != -1) {
          _markers[oldFocusedIndex] =
              _markers[oldFocusedIndex].cloneWithFocus(context, false);
        }
        focusedMarker = null;
      });
    }
  }

  void runEditPositionMode(MapMarkerWithText marker) {
    _popupLayerController.hideAllPopups();
    if (focusedMarker != null && focusedMarker!.place.id != marker.place.id) {
      final oldFocusedIndex =
          _markers.indexWhere((m) => m.place.id == focusedMarker!.place.id);
      if (oldFocusedIndex != -1) {
        _markers[oldFocusedIndex] =
            _markers[oldFocusedIndex].cloneWithFocus(context, false);
      }
      focusedMarker = null;
    } else if (focusedMarker != null &&
        focusedMarker!.place.id == marker.place.id) {
      final oldFocusedIndex =
          _markers.indexWhere((m) => m.place.id == focusedMarker!.place.id);
      if (oldFocusedIndex != -1) {
        _markers[oldFocusedIndex] =
            _markers[oldFocusedIndex].cloneWithFocus(context, false);
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
    await DbPlaces.saveLocation(selectedMarker!.place.id!,
        selectedMarker!.point.latitude, selectedMarker!.point.longitude);
    ToastHelper.Show(context, MapStrings.placeChanged);

    // We keep selectedMarker assigned until after potentially reloading places
    final savedMarkerPlaceId = selectedMarker!.place.id;

    if (_isShowingGroupsInEditMode) {
      _isShowingGroupsInEditMode = false;
      // Store current selected marker details to reapply focus/edit state after load
      if (selectedMarker?.place.id != null) {
        // If we need to re-enter edit mode for the same item after reload:
        // This part might be complex if the item is removed or its properties change significantly.
        // For now, we just reload places and exit edit mode.
      }
      selectedMarker = null; // Exit edit mode
      await loadData(); // Reload default places and polylines
    } else {
      // Original logic for updating _markers when not in _isShowingGroupsInEditMode
      var markerToRemove =
          _markers.firstWhereOrNull((m) => m.place.id == savedMarkerPlaceId);
      if (markerToRemove != null) _markers.remove(markerToRemove);
      // Add the updated marker back without the edit-mode specific focus.
      // The selectedMarker instance holds the new point.
      _markers.add(selectedMarker!.cloneWithFocus(context,
          false)); // Assuming cloneWithFocus also updates the point if needed from selectedMarker
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
      loadData().then((_) {
        // Reload default places
        // If we need to restore focus or re-select the original marker:
        if (originalPlaceId != null) {
          var originalMarkerInNewList =
              _markers.firstWhereOrNull((m) => m.place.id == originalPlaceId);
          if (originalMarkerInNewList != null && oldPoint != null) {
            // Potentially re-focus or re-select, but for cancel, usually just revert and exit edit mode.
          }
        }
        setState(() {});
      });
    } else {
      // Original cancel logic
      if (selectedMarker != null && selectedMarker!.oldPoint != null) {
        final originalMarkerIndex =
            _markers.indexWhere((m) => m.place.id == selectedMarker!.place.id);
        if (originalMarkerIndex != -1) {
          _markers[originalMarkerIndex] = MapMarkerWithText(
              context: context,
              point: selectedMarker!.oldPoint!,
              place: selectedMarker!.place,
              icon: selectedMarker!.icon,
              editAction: runEditPositionMode,
              showTitle: false);
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

  Future<void> loadData({int? placeId, bool loadOtherGroups = false}) async {
    // Preserve selected marker's ID if in edit mode to potentially re-apply state later if needed,
    // though current logic replaces _markers list entirely.
    // The selectedMarker instance itself in _selectedMarkers should persist.

    _markers.clear();
    var offlinePlaces = await OfflineDataService.getAllPlaces();
    _icons = await OfflineDataService.getAllIcons();

    // Load cached place types and pick the filter BEFORE the first render, so
    // cached places don't flash unfiltered while the online types are still
    // loading. The last selection is restored from offline storage; if there is
    // none (or it is no longer valid), _initPlaceTypeSelection falls back to
    // the default type.
    _placeTypes = (await OfflineDataService.getAllPlaceTypes())
        .where((t) => !(t.isHidden ?? false))
        .toList();
    if (!_placeTypeInitialized) {
      final savedCode = await OfflineDataService.getSelectedPlaceType();
      if (savedCode != null) {
        _selectedPlaceTypeCode = savedCode;
        _placeTypeInitialized = true;
      }
    }
    _initPlaceTypeSelection();
    // Cached types are enough to filter the first paint; if there are none we
    // wait for the online pass so we don't flash every place unfiltered.
    if (_placeTypes.isNotEmpty) _placeTypesResolved = true;

    offlinePlaces.sortPlaces(false);
    var offlineList = loadOtherGroups
        ? offlinePlaces
        : offlinePlaces.where((e) => !(e.isHidden)).toList();
    if (placeId != null) {
      var p = offlinePlaces.firstWhereOrNull((p) => p.id == placeId);
      if (p != null && !offlineList.any((item) => item.id == p.id))
        offlineList.add(p);
    }
    await addOfflineEventsToPlace(offlineList);
    addPlacesToMap(offlineList);

    _pathGroups = (await OfflineDataService.getAllPathGroups())
        .where((p) => !(p.isHidden ?? false))
        .toList();
    _allGroupPolylines = await MapPageHelper.loadGroupPolylines(
        offlineList, // Use offline list for initial polyline calculation if it's primary
        _pathGroups);

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

    if (mounted) setState(() {});
    if (placeId != null && !isOnlyEditMode && selectedMarker == null) {
      // Avoid auto-focusing if in edit mode already
      var p = offlineList.firstWhereOrNull((p) => p.id == placeId);
      if (p != null) {
        setMapToOnePlaceAndShowPopup(placeId, p);
        isPlaceSetToOnePlace = true;
      }
    }

    // online part
    var onlineIcons = await DbPlaces.getAllIcons();
    _icons = onlineIcons; // Prefer online icons

    try {
      var placeTypesFromDb = await DbPlaceTypes.getPlaceTypes();
      await OfflineDataService.saveAllPlaceTypes(placeTypesFromDb);
      _placeTypes =
          placeTypesFromDb.where((t) => !(t.isHidden ?? false)).toList();
      _initPlaceTypeSelection();
    } catch (e) {
      AppLogger.error("Failed to load place types: $e");
    }
    // Online pass is authoritative: from here the filter is known even when the
    // occasion legitimately has no place types (all places then show).
    _placeTypesResolved = true;

    List<PlaceModel> onlineList;
    var placesFromDb = await DbPlaces.getAllPlaces();
    await OfflineDataService.saveAllPlaces(placesFromDb);

    if (loadOtherGroups) {
      var dbGroups = await DbGroups.getGroupsWithPlaces();
      onlineList = dbGroups.where((e) => e.place != null).map((e) {
        e.place!.title = e.title;
        return e.place!;
      }).toList();
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

    _markers
        .clear(); // Clear again before final population with online/merged data
    await addEventsToPlace(onlineList);
    await _loadCleaningStatus();
    addPlacesToMap(
        onlineList); // This will use the _isShowingGroupsInEditMode flag correctly

    _pathGroups = (await DbPlaces.getAllPathGroups())
        .where((p) => !(p.isHidden ?? false))
        .toList();
    _allGroupPolylines = await MapPageHelper.loadGroupPolylines(
        onlineList, // Use final list of places for polylines
        _pathGroups);

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
    if (mounted) setState(() {});

    if (placeId != null &&
        !isOnlyEditMode &&
        selectedMarker == null &&
        !isPlaceSetToOnePlace) {
      // Avoid auto-focusing if in edit mode already
      var p = onlineList.firstWhereOrNull((p) => p.id == placeId);
      if (p != null) {
        setMapToOnePlaceAndShowPopup(placeId, p);
      }
    }

    if (_isDrawingPath) _rebuildDrawOverlay();
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
    var events =
        await DbEvents.getAllEvents(RightsService.currentOccasionId()!, false);
    events = events.filterRootEvents().sortEvents();
    for (var p in places) {
      var matches = events.where((e) => e.place?.id == p.id);
      p.events.clear();
      p.events.addAll(matches);
    }
  }

  bool _shouldShowMarkerTitle(int? placeId, int? currentFocusedMarkerId,
      int? editingMarkerId, Set<int> placeIdsInCurrentGroup) {
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
      if (_selectedGroupId != null &&
          placeIdsInCurrentGroup.contains(placeId)) {
        return true;
      }
    }
    return false; // Default: do not show title.
  }

  /// Loads the derived cleaning status for toilet places (feature-gated).
  /// Non-fatal: the map still works without colors if the RPC fails.
  Future<void> _loadCleaningStatus() async {
    if (!FeatureService.isFeatureEnabled(FeatureConstants.cleaning)) {
      _cleaningByPlace = {};
      return;
    }
    final oc = RightsService.currentOccasionId();
    if (oc == null) return;
    try {
      final statuses = await DbCleaning.getStatus(oc);
      _cleaningByPlace = {for (final s in statuses.places) s.place: s};
    } catch (_) {
      // ignore — map remains usable without cleaning colors
    }
  }

  /// Status color for a place if it is a toilet and the feature is on, else null.
  Color? _cleaningPinColorFor(MapPlaceModel place) {
    if (place.type != CleaningStatusHelper.toiletPlaceTypeCode ||
        !FeatureService.isFeatureEnabled(FeatureConstants.cleaning)) {
      return null;
    }
    final status = _cleaningByPlace[place.id]?.status ?? CleaningStatus.green;
    return CleaningStatusHelper.color(status);
  }

  /// Opens the report dialog from a toilet popup and refreshes colors.
  Future<void> _reportCleaningForPlace(MapPlaceModel place) async {
    if (place.id == null) return;
    final changed = await CleaningReportFlow.report(
      context,
      placeId: place.id!,
      placeTitle: place.title,
    );
    if (changed && mounted) await loadData();
  }

  void addPlacesToMap(List<PlaceModel> places) {
    // A place without coordinates or a title can't become a map marker
    // (MapPlaceModel force-reads lat/lng and title). Skip it silently — a place
    // with no coordinates simply doesn't belong on the map.
    places = places.where((p) => p.hasCoordinates && p.title != null).toList();
    var currentFocusedId = focusedMarker?.place.id;
    var editingMarkerId = selectedMarker?.place.id;

    Set<int> placeIdsInSelectedGroup = {};
    if (!_isShowingGroupsInEditMode && _selectedGroupId != null) {
      final group =
          _pathGroups.firstWhereOrNull((g) => g.id == _selectedGroupId);
      if (group != null && group.pathData != null) {
        placeIdsInSelectedGroup.addAll(group.pathData!
            .expand((segment) => segment)
            .map((node) => node.placeId)
            .whereType<int>());
      }
    }

    final wcIconId = FeatureService.isFeatureEnabled(FeatureConstants.cleaning)
        ? _icons
            .firstWhereOrNull((i) =>
                i.link == CleaningStatusHelper.toiletPlaceTypeCode ||
                i.link == 'wc')
            ?.id
        : null;

    var mappedMarkers = places.map((place) {
      // Toilets without their own icon still show the shared "wc" icon.
      if (wcIconId != null &&
          place.type == CleaningStatusHelper.toiletPlaceTypeCode &&
          place.icon == null) {
        place.icon = wcIconId;
      }
      var mapPlace = MapPlaceModel.fromPlaceModel(place);
      var pinColor = _cleaningPinColorFor(mapPlace);
      var iconWidget = isIconVisible(place)
          ? MapLocationPinHelper.type2icon(context, mapPlace, _icons,
              pinColor: pinColor)
          : null;

      bool displayTitle = _shouldShowMarkerTitle(mapPlace.id, currentFocusedId,
          editingMarkerId, placeIdsInSelectedGroup);

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
        pinColor: pinColor,
      );
    }).toList();

    _markers.clear();
    _markers.addAll(mappedMarkers);
    // setState is called in loadPlaces after this
  }

  void setMapToOnePlaceAndShowPopup(int placeId, PlaceModel p) {
    var m = _markers.firstWhereOrNull((m) => m.place.id == placeId);
    if (m == null) return;

    // Keep this place visible even if the active category filter excludes it.
    _forcedVisiblePlaceId = placeId;

    _markers.remove(m);
    _markers.add(m);

    showPopupOrDialogFor(_popupLayerController, m);
    setMapToOnePlace(p);
  }

  void setMapToOnePlace(PlaceModel place) async {
    _mapCenter = LatLng(place.getLat(), place.getLng());
    int i = 0;
    while (!_isMapLoaded && mounted && i < 50) {
      // Poll with 5-second timeout
      await Future.delayed(const Duration(milliseconds: 100));
      i++;
    }
    if (_isMapLoaded && mounted) {
      _animatedMapController.animateTo(
          dest: _mapCenter!, zoom: _mapOptions.maxZoom);
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
      final group =
          _pathGroups.firstWhereOrNull((g) => g.id == _selectedGroupId);
      if (group != null && group.pathData != null) {
        placeIdsInSelectedGroup.addAll(group.pathData!
            .expand((segment) => segment)
            .map((node) => node.placeId)
            .whereType<int>());
      }
    }

    var currentFocusedId = focusedMarker?.place.id;
    var editingMarkerId = selectedMarker?.place.id;

    for (final oldMarker in _markers) {
      bool newShowTitleState = _shouldShowMarkerTitle(oldMarker.place.id!,
          currentFocusedId, editingMarkerId, placeIdsInSelectedGroup);

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
        cameraFit: fm.CameraFit.coordinates(
            coordinates: allPoints,
            padding: EdgeInsets.fromLTRB(32, 160, 84, 12)),
        curve: Curves.easeInOut,
      );
    } else {
      setState(() {
        _polylines =
            newLines; // Will be [] if deselected (and not _showAllPathsWhenNoGroupSelected) or if selected group has no lines
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
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: cancelNewPosition,
                  child: Text(CommonStrings.storno),
                ),
                const Padding(padding: EdgeInsets.all(16.0)),
                Visibility(
                  visible: !isOnlyEditMode,
                  child: ElevatedButton(
                    onPressed:
                        showAllGroups, // This now handles being in edit mode
                    child: Text(MapStrings.showGroups),
                  ),
                ),
                const Padding(padding: EdgeInsets.all(16.0)),
                ElevatedButton(
                  onPressed: () => ExceptionHandler.guardVoid(context,
                      futureFunction: saveNewPosition),
                  child: Text(MapStrings.saveLocation),
                ),
              ],
            ),
          ),
          Container(
            color: Colors.white,
            child: Text(
              MapStrings.changeLocationHint,
              style: const TextStyle(color: Colors.black),
            ),
          ),
          Expanded(child: Container()),
        ],
      ),
    );
  }

  Color _drawPathColor() {
    final hex = widget.editPathGroup?.color;
    if (hex != null && hex.isNotEmpty) {
      try {
        return Color(int.parse(hex.replaceFirst('#', '0x')));
      } catch (_) {}
    }
    return Colors.blue;
  }

  /// Resolve a draw node to a coordinate: free points use their inline lat/lng,
  /// place refs are looked up among the loaded markers.
  LatLng? _resolveDrawNode(PathNode node) {
    if (node.isPoint) return LatLng(node.lat!, node.lng!);
    return _markers.firstWhereOrNull((m) => m.place.id == node.placeId)?.point;
  }

  /// Recompute the live polyline and free-point markers from [_drawSegments].
  void _rebuildDrawOverlay() {
    final color = _drawPathColor();

    final lines = <fm.Polyline>[];
    for (final seg in _drawSegments) {
      final pts = seg.map(_resolveDrawNode).whereType<LatLng>().toList();
      if (pts.length >= 2) {
        lines.add(fm.Polyline(points: pts, color: color, strokeWidth: 3));
      }
    }

    _drawPointMarkers
      ..clear()
      ..addAll(_drawSegments.expand((seg) => seg).where((n) => n.isPoint).map(
            (n) => fm.Marker(
              point: LatLng(n.lat!, n.lng!),
              width: 22,
              height: 22,
              alignment: Alignment.center,
              child: Icon(Icons.circle, size: 14, color: color),
            ),
          ));

    _polylines = lines;
    if (mounted) setState(() {});
  }

  void _addDrawNode(PathNode node) {
    if (_drawSegments.isEmpty) _drawSegments.add(<PathNode>[]);
    _drawSegments.last.add(node);
    _rebuildDrawOverlay();
  }

  /// Remove the most recently added node (from the last non-empty segment).
  void _undoLastDrawNode() {
    for (var i = _drawSegments.length - 1; i >= 0; i--) {
      if (_drawSegments[i].isNotEmpty) {
        _drawSegments[i].removeLast();
        break;
      }
    }
    while (_drawSegments.length > 1 && _drawSegments.last.isEmpty) {
      _drawSegments.removeLast();
    }
    _rebuildDrawOverlay();
  }

  /// Start a fresh segment so the next taps form a disconnected path piece.
  void _newDrawSegment() {
    if (_drawSegments.isEmpty || _drawSegments.last.isNotEmpty) {
      _drawSegments.add(<PathNode>[]);
    }
    _rebuildDrawOverlay();
  }

  /// Replace the working path with imported [segments], redraw, and fit the
  /// camera to the new geometry.
  Future<void> _applyImportedSegments(List<List<PathNode>> segments) async {
    _drawSegments
      ..clear()
      ..addAll(segments);
    _rebuildDrawOverlay();

    final allPoints = _drawSegments
        .expand((s) => s)
        .map(_resolveDrawNode)
        .whereType<LatLng>()
        .toList();
    if (allPoints.length == 1) {
      await _animatedMapController.animateTo(dest: allPoints.single);
    } else if (allPoints.length > 1) {
      await _animatedMapController.animatedFitCamera(
        cameraFit: fm.CameraFit.coordinates(
          coordinates: allPoints,
          padding: const EdgeInsets.fromLTRB(48, 48, 48, 120),
        ),
        curve: Curves.easeInOut,
      );
    }
  }

  /// Import a route from a GPX file (Mapy.com, Strava, Garmin, komoot, …).
  Future<void> _importGpxFile(XFile file) async {
    List<List<PathNode>> segments;
    try {
      final content = await file.readAsString();
      segments = GpxImporter.parse(content);
    } catch (e) {
      AppLogger.error("Failed to read GPX: $e");
      segments = [];
    }

    if (segments.isEmpty) {
      if (mounted) {
        ToastHelper.Show(context, MapStrings.noRouteInGpx,
            severity: ToastSeverity.NotOk);
      }
      return;
    }
    await _applyImportedSegments(segments);
  }

  Future<void> _showImportDialog() async {
    await showDialog(
      context: context,
      builder: (dialogContext) => AlertDialog(
        title: Text(MapStrings.importRoute),
        content: SizedBox(
          width: 420,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(MapStrings.importRouteHint),
              DropFile(
                height: 180,
                allowedExtensions: const ['gpx'],
                onFilePathChanged: (file) async {
                  Navigator.of(dialogContext).pop();
                  await _importGpxFile(file);
                },
              ),
            ],
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(dialogContext).pop(),
            child: Text(CommonStrings.storno),
          ),
        ],
      ),
    );
  }

  /// Return the drawn path to the caller as the grid's CSV string.
  void _saveDrawPath() {
    final segments = _drawSegments.where((s) => s.isNotEmpty).toList();
    RouterService.goBack(context, PathGroupsModel.pathDataToCsv(segments));
  }

  Widget _buildDrawControls() {
    return Positioned(
      left: 0,
      right: 0,
      bottom: 0,
      child: Container(
        color: Colors.white,
        padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 8),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              MapStrings.drawPathHint,
              style: const TextStyle(color: Colors.black),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            Wrap(
              alignment: WrapAlignment.center,
              crossAxisAlignment: WrapCrossAlignment.center,
              spacing: 8,
              runSpacing: 8,
              children: [
                // Build tools: import a route, then refine by hand.
                ElevatedButton.icon(
                  onPressed: _showImportDialog,
                  icon: const Icon(Icons.upload_file),
                  label: Text(MapStrings.importRoute),
                ),
                ElevatedButton.icon(
                  onPressed: _undoLastDrawNode,
                  icon: const Icon(Icons.undo),
                  label: Text(MapStrings.undo),
                ),
                ElevatedButton.icon(
                  onPressed: _newDrawSegment,
                  icon: const Icon(Icons.linear_scale),
                  label: Text(MapStrings.newSegment),
                ),
                // Visual gap separating the build tools from the save action.
                const SizedBox(width: 24),
                ElevatedButton.icon(
                  onPressed: _saveDrawPath,
                  icon: const Icon(Icons.check),
                  label: Text(MapStrings.saveRoute),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  /// Pick the initial place-type filter once types are available: the default
  /// type (`is_default`) if any, otherwise the first (order-sorted) type. Keeps
  /// an existing selection unless it no longer matches any visible chip (e.g.
  /// initialized from a stale offline cache).
  void _initPlaceTypeSelection() {
    // A deep-link filter wins and must not be overridden by saved/default type.
    if (_deepLinkPlaceType != null) {
      _selectedPlaceTypeCode = _deepLinkPlaceType;
      _placeTypeInitialized = true;
      return;
    }
    if (_placeTypes.isEmpty) return;
    if (_placeTypeInitialized &&
        (_selectedPlaceTypeCode == _otherPlaceTypeCode ||
            _placeTypes.any((t) => t.code == _selectedPlaceTypeCode))) {
      return;
    }
    final defaultType = _placeTypes.firstWhereOrNull((t) => t.isDefault == true);
    _selectedPlaceTypeCode = (defaultType ?? _placeTypes.first).code;
    _placeTypeInitialized = true;
  }

  Future<void> _onPlaceTypeTap(String? code) async {
    if (code == null) return;
    // Tapping a chip returns to normal filtering, dropping any deep-link filter.
    _deepLinkPlaceType = null;
    setState(() => _selectedPlaceTypeCode = code);
    await OfflineDataService.saveSelectedPlaceType(code);

    final points = _markers
        .where((m) => _placeMatchesSelectedType(m.place))
        .map((m) => m.point)
        .toList();

    if (points.length == 1) {
      await _animatedMapController.animateTo(
        dest: points.single,
        zoom: _mapFeature.defaultMapZoom,
        curve: Curves.easeInOut,
      );
    } else if (points.length > 1) {
      await _animatedMapController.animatedFitCamera(
        cameraFit: fm.CameraFit.coordinates(
          coordinates: points,
          padding: const EdgeInsets.fromLTRB(48, 48, 48, 96),
        ),
        curve: Curves.easeInOut,
      );
    }
  }

  void _setFocusedMarkerLogic(MapMarkerWithText markerToFocus) {
    // If we are in the mode of showing all group titles during edit, don't let tap-focus override them
    if (_isShowingGroupsInEditMode &&
        (selectedMarker != null &&
            markerToFocus.place.id != selectedMarker!.place.id)) {
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
        if (selectedMarker != null &&
            _markers[i].place.id == selectedMarker!.place.id) {
          if (_markers[i].place.id == placeIdToFocus) {
            // If the edited marker itself is somehow re-focused
            focusedMarker =
                _markers[i]; // Keep it as the focused marker conceptually
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
              final group =
                  _pathGroups.firstWhereOrNull((g) => g.id == _selectedGroupId);
              if (group != null &&
                  group.pathData != null &&
                  group.pathData!.any((segment) => segment
                      .any((node) => node.placeId == _markers[i].place.id))) {
                shouldRetainTitle = true;
              }
            }
            if (!shouldRetainTitle) {
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

  void showPopupOrDialogFor(
      PopupController controller, fm.Marker markerInstance) async {
    if (_isDrawingPath) {
      // In drawing mode a marker tap appends a place-ref node instead of
      // opening the place popup/dialog.
      if (markerInstance is MapMarkerWithText &&
          markerInstance.place.id != null) {
        _addDrawNode(PathNode.place(markerInstance.place.id!));
      }
      return;
    }
    if (selectedMarker != null &&
        markerInstance is MapMarkerWithText &&
        markerInstance.place.id != selectedMarker!.place.id) {
      // If in edit mode, and a *different* marker is tapped,
      // we might want to show its popup but not switch focus or exit edit mode.
      // For now, let's only allow interaction with the selectedMarker or no popups for others.
      // Or, if the tap on a background marker should show its popup:
      // Check if it's a background marker during group edit mode
      if (_isShowingGroupsInEditMode) {
        // Allow popup for background group markers
        _popupLayerController.hideAllPopups(); // Hide any existing popups
        controller.showPopupsOnlyFor(
            [markerInstance]); // Show popup for this tapped marker
        return; // Do not proceed with focus logic or dialog for these background markers
      }
    }

    if (markerInstance is MapMarkerWithText) {
      final currentPlace = markerInstance.place;

      // Toilets always open the map popup (which carries the cleaning status +
      // "report a problem" / "rate quality" actions), even when they have no
      // description or events — otherwise the tap would only show the title.
      if (currentPlace.type == CleaningStatusHelper.toiletPlaceTypeCode &&
          FeatureService.isFeatureEnabled(FeatureConstants.cleaning)) {
        _popupLayerController.hideAllPopups();
        controller.showPopupsOnlyFor([markerInstance]);
        return;
      }

      final hasLongDescription =
          HtmlHelper.isHtmlLong(currentPlace.description);
      final hasEvents = currentPlace.events?.isNotEmpty ?? false;
      final descriptionIsNullOrEmpty =
          currentPlace.description == null || currentPlace.description!.isEmpty;

      _popupLayerController.hideAllPopups();

      if (hasLongDescription || hasEvents) {
        // Set focus only if not in edit mode or if it's the marker being edited.
        if (selectedMarker == null ||
            markerInstance.place.id == selectedMarker!.place.id) {
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
                if (selectedMarker == null) {
                  // Only enter edit mode if not already editing another
                  runEditPositionMode(markerInstance);
                }
              },
              htmlDescription: currentPlace.description,
              customContentWidget: activityContent(events),
            );
          },
        );
        // Show title after dialog closes, only if not in edit mode for another marker
        if (selectedMarker == null ||
            markerInstance.place.id == selectedMarker!.place.id) {
          _setFocusedMarkerLogic(markerInstance);
        }
      } else {
        // No dialog needed (short/no description AND no events)
        if (descriptionIsNullOrEmpty) {
          // Description is null or empty: Show Title only (if not in edit mode for another)
          if (selectedMarker == null ||
              markerInstance.place.id == selectedMarker!.place.id) {
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
            padding: const EdgeInsets.fromLTRB(0, 0, 0, 24),
            child: ScheduleTimeline(
              eventGroups:
                  TimeBlockHelper.splitTimeBlocksByDay(events, context),
              onEventPressed: (int id) {
                RouterService.navigateOccasion(
                        context, "${EventPage.ROUTE}/$id")
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
