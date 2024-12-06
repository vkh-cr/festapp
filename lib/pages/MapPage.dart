import 'package:auto_route/auto_route.dart';
import 'package:flutter_map_animations/flutter_map_animations.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/components/map/MapPlaceModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/DbGroups.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataModels/IconModel.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:flutter_map_location_marker/flutter_map_location_marker.dart';
import 'package:flutter_map_marker_popup/flutter_map_marker_popup.dart';
import 'package:fstapp/components/map/MapDescriptionPopup.dart';
import 'package:fstapp/components/map/MapLocationPinHelper.dart';
import 'package:fstapp/components/map/MapMarkerWithText.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/widgets/PopButton.dart';
import 'package:latlong2/latlong.dart';
import 'package:flutter_map_cancellable_tile_provider/flutter_map_cancellable_tile_provider.dart';
import 'package:maplibre_gl/maplibre_gl.dart' as ml;
import 'package:url_launcher/url_launcher.dart';


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

  static const double singlePlaceZoom = 17.7;
  late final _animatedMapController = AnimatedMapController(vsync: this);

  List<IconModel> _icons = [];
  final List<MapMarkerWithText> _markers = [];
  final List<MapMarkerWithText> _selectedMarkers = [];
  static MapMarkerWithText? focusedMarker;
  static MapMarkerWithText? selectedMarker;
  String pageTitle = AppConfig.mapTitle;
  bool isOnlyEditMode = false;

  /// Used to trigger showing/hiding of popups.
  final PopupController _popupLayerController = PopupController();

  FlutterMap? _map;
  LatLng? _mapCenter;

  @override
  void didChangeDependencies() async {
    super.didChangeDependencies();
    if(widget.id == null && context.routeData.hasPendingChildren){
      widget.id = context.routeData.pendingChildren[0].pathParams.getInt("id");
    }
    _mapCenter = widget.place != null
        ? LatLng(widget.place!.getLat(), widget.place!.getLng())
        : LatLng(SynchroService.globalSettingsModel!.defaultMapLocation["lat"],
        SynchroService.globalSettingsModel!.defaultMapLocation["lng"]);
    //reset static values
    selectedMarker = null;
    var placeModel = widget.place;
    if (placeModel == null || placeModel.latLng == null) {
      loadPlaces(placeId: widget.id);
    } else {
      //new place
      if (placeModel.latLng.toString().isEmpty) {
        placeModel.latLng = SynchroService.globalSettingsModel!.defaultMapLocation;
      }
      pageTitle = placeModel.title ?? AppConfig.mapTitle;
      addPlacesToMap([placeModel]);
      runEditPositionMode(_markers.single);
      isOnlyEditMode = true;
    }
  }

  Future<void> loadPlaces({int? placeId, bool loadOtherGroups = false}) async {
    _markers.clear();
    List<PlaceModel> mapOfflinePlaces = [];
    var offlinePlaces = await OfflineDataService.getAllPlaces();
    _icons = await OfflineDataService.getAllIcons();
    offlinePlaces.sortPlaces(false);

    if (loadOtherGroups) {
      mapOfflinePlaces = offlinePlaces;
    } else {
      mapOfflinePlaces =
          offlinePlaces.where((element) => !element.isHidden).toList();
    }

    if(placeId != null) {
      var p = offlinePlaces.firstWhereOrNull((p)=>p.id == placeId);
      if(p != null) {
        mapOfflinePlaces.add(p);
      }
    }

    await addEventsToPlace(mapOfflinePlaces);
    addPlacesToMap(mapOfflinePlaces);

    if(placeId != null) {
      var p = mapOfflinePlaces.firstWhereOrNull((p)=>p.id == placeId);
      if(p!=null){
        setMapToOnePlaceAndShowPopup(placeId, p);
      }
    }

    _icons = await DbPlaces.getAllIcons();
    List<PlaceModel> mapPlaces = [];
    List<PlaceModel> showMapPlaces = [];

    if (loadOtherGroups) {
      var groups = await DbGroups.getGroupsWithPlaces();
      for (var element in groups) {
        if (element.place == null) {
          continue;
        }
        element.place!.title = element.title;
        mapPlaces.add(element.place!);
      }
    } else {
      mapPlaces = await DbPlaces.getAllPlaces();
      showMapPlaces = mapPlaces.where((p)=>!p.isHidden).toList();
      showMapPlaces.sortPlaces(false);
      await OfflineDataService.saveAllPlaces(mapPlaces);
    }

    if(placeId != null) {
      var p = mapPlaces.firstWhereOrNull((p)=>p.id == placeId);
      if(p != null) {
        showMapPlaces.add(p);
      }
    }

    if (showMapPlaces.isNotEmpty) {
      _markers.clear();
      await addEventsToPlace(showMapPlaces);
      addPlacesToMap(showMapPlaces);
    }

    if(placeId != null) {
      var p = mapOfflinePlaces.firstWhereOrNull((p) => p.id == placeId);
      if (p != null) {
        setMapToOnePlaceAndShowPopup(placeId, p);
      }
    }
  }

  void setMapToOnePlaceAndShowPopup(int placeId, PlaceModel p) {
    var m = _markers.firstWhere((m)=>m.place.id == placeId);
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
    if (_map != null) {
      _animatedMapController.animateTo(dest: _mapCenter!, zoom: singlePlaceZoom);
    }
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
        icon: isIconVisible(place) ? MapLocationPinHelper.type2icon(context, mapPlace, _icons) : null,
        alignment: Alignment.topCenter,
        editAction: runEditPositionMode,
      );
    }).toList();

    setState(() {
      _markers.addAll(mappedMarkers);
    });
  }

  runEditPositionMode(MapMarkerWithText marker) {
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
    return Scaffold(
      body: ml.MapLibreMap(
        styleString: "https://api.maptiler.com/maps/005b5661-cd29-4445-bb4f-0e56c3de021f/style.json?key=zM1Re72zizWVlLwwrQoJ",
        myLocationEnabled: true,
        initialCameraPosition: const ml.CameraPosition(target: ml.LatLng(41.90268, 12.457128), tilt: 60, zoom: 16.67, bearing: -113.6),
        trackCameraPosition: true,
      ),
    );
  }

  onMapTap(LatLng pos) {
    if (selectedMarker != null) {
      _selectedMarkers.remove(selectedMarker);
      selectedMarker = selectedMarker!.cloneWithNewPoint(context, pos);
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
    //var newMarker = selectedMarker!.cloneWithNewPoint(selectedMarker!.point!);
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
