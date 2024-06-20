import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/components/map/MapPlaceModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/DataService.dart';
import 'package:fstapp/dataServices/OfflineDataHelper.dart';
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
import 'package:latlong2/latlong.dart';
import 'package:flutter_map_cancellable_tile_provider/flutter_map_cancellable_tile_provider.dart';


class MapPage extends StatefulWidget {
  static const ROUTE = "map";
  final int? id;
  final PlaceModel? place;

  const MapPage({this.id, this.place, super.key});

  @override
  State<MapPage> createState() => _MapPageState();
}

class _MapPageState extends State<MapPage> {
  List<IconModel> _icons = [];
  final List<MapMarkerWithText> _markers = [];
  final List<MapMarkerWithText> _selectedMarkers = [];
  static MapMarkerWithText? focusedMarker;
  static MapMarkerWithText? selectedMarker;
  String pageTitle = AppConfig.mapTitle;
  bool isOnlyEditMode = false;

  /// Used to trigger showing/hiding of popups.
  final PopupController _popupLayerController = PopupController();

  final MapController mapController = MapController();
  FlutterMap? _map;
  LatLng? _mapCenter;

  @override
  void didChangeDependencies() async {
    super.didChangeDependencies();
    _mapCenter = widget.place != null
        ? LatLng(widget.place!.getLat(), widget.place!.getLng())
        : LatLng(DataService.globalSettingsModel!.defaultMapLocation["lat"],
        DataService.globalSettingsModel!.defaultMapLocation["lng"]);
    //reset static values
    selectedMarker = null;
    var placeModel = widget.place;
    if (placeModel == null || placeModel.latLng == null) {
      loadPlaces(placeId: widget.id);
    } else {
      //new place
      if (placeModel.latLng.toString().isEmpty) {
        placeModel.latLng = DataService.globalSettingsModel!.defaultMapLocation;
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
    var offlinePlaces = OfflineDataHelper.getAllPlaces();
    _icons = OfflineDataHelper.getAllIcons();
    offlinePlaces.sortPlaces(false);

    if (loadOtherGroups) {
      mapOfflinePlaces = offlinePlaces;
    } else {
      mapOfflinePlaces =
          offlinePlaces.where((element) => !element.isHidden).toList();
    }

    addEventsToPlace(mapOfflinePlaces);
    addPlacesToMap(mapOfflinePlaces);

    if(placeId != null) {
      var p = mapOfflinePlaces.firstWhereOrNull((p)=>p.id == placeId);
      if(p!=null){
        setMapToOnePlace(p);
      }
    }

    _icons = await DataService.getAllIcons();
    List<PlaceModel> mapPlaces = [];
    if (loadOtherGroups) {
      var groups = await DataService.getGroupsWithPlaces();
      for (var element in groups) {
        if (element.place == null) {
          continue;
        }
        element.place!.title = element.title;
        mapPlaces.add(element.place!);
      }
    } else {
      mapPlaces = await DataService.getAllPlaces();
      mapPlaces = mapPlaces.where((p)=>!p.isHidden).toList();
      mapPlaces.sortPlaces(false);
      OfflineDataHelper.saveAllPlaces(mapPlaces);
    }

    if (mapPlaces.isNotEmpty) {
      _markers.clear();
      addEventsToPlace(mapPlaces);
      addPlacesToMap(mapPlaces);
    }

    if(placeId != null) {
      var p = mapOfflinePlaces.firstWhereOrNull((p) => p.id == placeId);
      if (p != null) {
        var m = _markers.firstWhere((m)=>m.place.id == placeId);
        _markers.remove(m);
        _markers.add(m);
        focusedMarker = m;
        _popupLayerController.showPopupsOnlyFor([m]);
        setMapToOnePlace(p);
      }
    }
  }

  void addEventsToPlace(List<PlaceModel> places) {
    var events = OfflineDataHelper.getAllEvents();
    for (var p in places) {
      var matches = events.where((e) => e.place?.id == p.id);
      p.events.addAll(matches);
    }
  }

  void setMapToOnePlace(PlaceModel place) {
    _mapCenter = LatLng(place.getLat(), place.getLng());
    if (_map != null) {
      mapController.move(_mapCenter!, 17);
    }
  }

  void addPlacesToMap(List<PlaceModel> places) {
    var mappedMarkers = places.map((place) {
      var mapPlace = MapPlaceModel.fromPlaceModel(place);
      return MapMarkerWithText(
        place: mapPlace,
        point: mapPlace.latLng,
        width: 60,
        height: 60,
        icon: isIconVisible(place) ? MapLocationPinHelper.type2icon(mapPlace.type, _icons) : null,
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
      appBar: AppBar(
        title: Text(pageTitle),
        leading: BackButton(
          onPressed: () => RouterService.goBackOrHome(context),
        ),
      ),
      body: Stack(
        children: [
          _mapCenter == null ? const SizedBox.shrink() : _map = FlutterMap(
            mapController: mapController,
            options: MapOptions(
                interactionOptions: const InteractionOptions(
                  flags: InteractiveFlag.doubleTapDragZoom |
                  InteractiveFlag.doubleTapZoom |
                  InteractiveFlag.pinchMove |
                  InteractiveFlag.pinchZoom |
                  InteractiveFlag.flingAnimation |
                  InteractiveFlag.drag |
                  InteractiveFlag.scrollWheelZoom),
                initialZoom: DataService.globalSettingsModel!.defaultMapZoom,
                maxZoom: 19,
                initialCenter: _mapCenter!,
                onTap: (_, location) => onMapTap(location)),
            children: [
              TileLayer(
                tileProvider: CancellableNetworkTileProvider(),
                maxZoom: 19,
                urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
              ),
              CurrentLocationLayer(),
              PopupMarkerLayer(
                options: PopupMarkerLayerOptions(
                  popupController: _popupLayerController,
                  markers: selectedMarker != null ? _selectedMarkers : _markers,
                  popupDisplayOptions: PopupDisplayOptions(
                      snap: PopupSnap.markerTop,
                      builder: (BuildContext context, Marker marker) {
                        if (marker is MapMarkerWithText) {
                          return MapDescriptionPopup(marker, selectedMarker);
                        }
                        return const SizedBox.shrink();
                      }),
                ),
              ),
            ],
          ),
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
                          child: const Text("Storno").tr()),
                      const Padding(padding: EdgeInsets.all(16.0)),
                      Visibility(
                        visible: !isOnlyEditMode,
                        child: ElevatedButton(
                            onPressed: showAllGroups,
                            child: const Text("Show groups").tr()),
                      ),
                      const Padding(padding: EdgeInsets.all(16.0)),
                      ElevatedButton(
                          onPressed: saveNewPosition,
                          child: const Text("Save location").tr()),
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
          )
        ],
      ),
    );
  }

  onMapTap(LatLng pos) {
    if (selectedMarker != null) {
      _selectedMarkers.remove(selectedMarker);
      selectedMarker = selectedMarker!.cloneWithNewPoint(pos);
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
    await DataService.saveLocation(selectedMarker!.place.id,
        selectedMarker!.point.latitude, selectedMarker!.point.longitude);

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
