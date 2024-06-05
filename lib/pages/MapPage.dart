import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/data/DataExtensions.dart';
import 'package:fstapp/data/DataService.dart';
import 'package:fstapp/data/OfflineDataHelper.dart';
import 'package:fstapp/data/RightsHelper.dart';
import 'package:fstapp/services/MapIconService.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:flutter_map_location_marker/flutter_map_location_marker.dart';
import 'package:flutter_map_marker_popup/flutter_map_marker_popup.dart';
import 'package:flutter_svg/svg.dart';
import 'package:go_router/go_router.dart';
import 'package:latlong2/latlong.dart';
import 'package:flutter_map_cancellable_tile_provider/flutter_map_cancellable_tile_provider.dart';


import '../models/PlaceModel.dart';

class MarkerWithText extends Marker {
  LatLng? oldPoint;
  final PlaceModel place;
  Function(MarkerWithText marker)? editAction;

  MarkerWithText(
      {required super.point,
      required this.place,
      super.key,
      super.width,
      super.height,
      super.rotate,
      super.alignment,
      required super.child,
      AlignmentGeometry? rotateAlignment,
      this.editAction,
      LatLng? oldPoint})
      : super();

  MarkerWithText cloneWithNewPoint(LatLng point) {
    return MarkerWithText(
      oldPoint: oldPoint,
      place: place,
      point: point,
      width: width,
      height: height,
      child: child,
      alignment: alignment,
      editAction: editAction,
    );
  }
}

class MapPage extends StatefulWidget {
  static const ROUTE = "map";
  final int? id;
  final PlaceModel? place;

  const MapPage({this.id, this.place, super.key});

  @override
  State<MapPage> createState() => _MapPageState();
}

class _MapPageState extends State<MapPage> {
  final List<MarkerWithText> _markers = [];
  final List<MarkerWithText> _selectedMarkers = [];
  static MarkerWithText? selectedMarker;
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
    //todo clean offline access
    //await RightsHelper.ensureAccessProcedure(context);
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

  Widget type2icon(String? placeType) {
    SvgPicture? fill;
    var iconLink = MapIconHelper.getIconAddress(placeType);
    if (iconLink != null) {
      fill = SvgPicture.asset(
        iconLink,
        colorFilter: const ColorFilter.mode(Colors.black, BlendMode.srcIn),
      );
    }
    if (fill != null) {
      return Stack(children: [
        const Icon(Icons.location_pin, size: 58, color: AppConfig.mapPinColor),
        Positioned(
          top: 7.5,
          left: 14.5,
          child: Container(
              width: 29.0,
              height: 29.0,
              decoration: const BoxDecoration(
                color: Colors.white,
                shape: BoxShape.circle,
              )),
        ),
        Positioned(
            top: 12,
            left: 19,
            width: 19,
            height: 19,
            child: Container(alignment: Alignment.center, child: fill))
      ]);
    }
    return const Icon(Icons.location_pin, size: 36, color: AppConfig.mapPinColor);
  }

  Future<void> loadPlaces({int? placeId, bool loadOtherGroups = false}) async {
    _markers.clear();
    List<PlaceModel> mapOfflinePlaces = [];
    var offlinePlaces = OfflineDataHelper.getAllPlaces();
    offlinePlaces.sortPlaces();
    if (placeId != null && !loadOtherGroups) {
      var place = offlinePlaces.firstWhereOrNull((p) => p.id == placeId);
      if (place != null) {
        mapOfflinePlaces = [place];
        setMapToOnePlace(place);
      }
    } else if (loadOtherGroups) {
      mapOfflinePlaces = offlinePlaces;
    } else {
      mapOfflinePlaces =
          offlinePlaces.where((element) => !element.isHidden).toList();
    }
    addPlacesToMap(mapOfflinePlaces);

    List<PlaceModel> mapPlaces = [];
    if (placeId != null && !loadOtherGroups) {
      var place = await DataService.getPlace(placeId);
      mapPlaces = [place];
      setMapToOnePlace(place);
    } else if (loadOtherGroups) {
      var groups = await DataService.getGroupsWithPlaces();
      for (var element in groups) {
        if (element.place == null) {
          continue;
        }
        element.place!.title = element.title;
        mapPlaces.add(element.place!);
      }
    } else {
      mapPlaces = await DataService.getMapPlaces();
    }

    if (mapPlaces.isNotEmpty) {
      _markers.clear();
      addPlacesToMap(mapPlaces);
    }
  }

  void setMapToOnePlace(PlaceModel place) {
    _mapCenter = LatLng(place.getLat(), place.getLng());
    if (_map != null) {
      mapController.move(_mapCenter!, mapController.camera.zoom);
    }
    pageTitle = place.title!;
  }

  void addPlacesToMap(List<PlaceModel> places) {
    var mappedMarkers = places
        .map(
          (place) => MarkerWithText(
            place: place,
            point: LatLng(place.getLat(), place.getLng()),
            width: 60,
            height: 60,
            child: type2icon(place.type),
            alignment: Alignment.topCenter,
            editAction: runEditPositionMode,
          ),
        )
        .toList();
    setState(() {
      mappedMarkers.forEach((m) => _markers.add(m));
    });
  }

  runEditPositionMode(MarkerWithText marker) {
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
                        if (marker is MarkerWithText) {
                          return MapDescriptionPopup(marker);
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
    await DataService.saveLocation(selectedMarker!.place.id!,
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
}

class MapDescriptionPopup extends StatefulWidget {
  final MarkerWithText marker;

  const MapDescriptionPopup(this.marker, {super.key});

  @override
  State<StatefulWidget> createState() => _MapDescriptionPopupState();
}

class _MapDescriptionPopupState extends State<MapDescriptionPopup> {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          _cardDescription(context),
        ],
      ),
    );
  }

  Widget _cardDescription(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(10),
      child: Container(
        constraints: const BoxConstraints(minWidth: 100, maxWidth: 200),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Text(
              widget.marker.place.title!,
              overflow: TextOverflow.fade,
              softWrap: true,
              style: const TextStyle(
                fontWeight: FontWeight.w500,
                fontSize: 14.0,
              ),
            ),
            const Padding(padding: EdgeInsets.symmetric(vertical: 4.0)),
            Visibility(
                visible: RightsHelper.isEditor() ||
                    (DataService.isGroupLeader() &&
                        DataService.currentUserGroup()!.place!.id ==
                            widget.marker.place.id),
                child: ElevatedButton(
                    onPressed: _MapPageState.selectedMarker != null
                        ? null
                        : changePositionPressed,
                    child: const Text("Change location").tr())),
            Text(
              widget.marker.place.description ?? "",
              style: const TextStyle(fontSize: 12.0),
            ),
          ],
        ),
      ),
    );
  }

  void changePositionPressed() => widget.marker.editAction!(widget.marker);
}
