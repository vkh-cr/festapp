import 'package:avapp/config.dart';
import 'package:avapp/services/DataService.dart';
import 'package:avapp/services/MapIconService.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:flutter_map_location_marker/flutter_map_location_marker.dart';
import 'package:flutter_map_marker_popup/flutter_map_marker_popup.dart';
import 'package:flutter_svg/svg.dart';
import 'package:latlong2/latlong.dart';

import '../models/PlaceModel.dart';

class MarkerWithText extends Marker {
  LatLng? oldPoint;
  final PlaceModel place;
  Function(MarkerWithText marker)? editAction;

  MarkerWithText(
      {required LatLng point,
      required WidgetBuilder builder,
      required this.place,
      Key? key,
      double width = 30.0,
      double height = 30.0,
      bool? rotate,
      Offset? rotateOrigin,
      AlignmentGeometry? rotateAlignment,
      AnchorPos? anchorPos,
      this.editAction,
      LatLng? oldPoint})
      : super(
          point: point,
          builder: builder,
          key: key,
          width: width,
          height: height,
          rotate: rotate,
          rotateOrigin: rotateOrigin,
          rotateAlignment: rotateAlignment,
          anchorPos: anchorPos,
        );

  MarkerWithText cloneWithNewPoint(LatLng point) {
    return MarkerWithText(
      oldPoint: oldPoint,
      place: place,
      point: point,
      width: width,
      height: height,
      builder: builder,
      anchorPos: anchorPos,
      editAction: editAction,
    );
  }
}

class MapPage extends StatefulWidget {
  static const ROUTE = "/map";

  const MapPage({Key? key}) : super(key: key);

  @override
  State<MapPage> createState() => _MapPageState();
}

class _MapPageState extends State<MapPage> {
  final List<MarkerWithText> _markers = [];
  final List<MarkerWithText> _selectedMarkers = [];
  static MarkerWithText? selectedMarker;
  String PageTitle = config.map_page;
  bool isOnlyEditMode = false;

  /// Used to trigger showing/hiding of popups.
  final PopupController _popupLayerController = PopupController();

  late final MapController mapController = MapController();

  void didChangeDependencies() {
    super.didChangeDependencies();
    //reset static values
    selectedMarker = null;

    final placeModel = ModalRoute.of(context)?.settings.arguments as PlaceModel?;
    if(placeModel == null || placeModel.latLng == null) {
      loadPlaces(placeId: placeModel?.id);
    }
    else{
      PageTitle = placeModel.title ?? config.map_page;
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
        const Icon(Icons.location_pin, size: 58, color: config.color1),
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
    return const Icon(Icons.location_pin, size: 36, color: config.color1);
  }

  Future<void> loadPlaces({int? placeId, bool loadOtherGroups = false}) async {

    _markers.clear();
    List<PlaceModel> places = [];
    if (placeId != null && !loadOtherGroups) {
      var place = await DataService.getPlace(placeId);
      places = [place];
      setState(() {
        mapController.move(LatLng(place.latLng['lat'], place.latLng['lng']),
            mapController.zoom);
        PageTitle = place.title!;
      });
    }
    else if (loadOtherGroups)
    {
      var groups = await DataService.getGroupsWithPlaces();
      for (var element in groups) {
        if(element.place == null) {
          continue;
        }
        element.place!.title = element.title;
        places.add(element.place!);
      }
    }
    else {
      places = await DataService.getMapPlaces();
    }
    addPlacesToMap(places);
  }

  void addPlacesToMap(List<PlaceModel> places) {
    var mappedMarkers = places
        .map(
          (place) => MarkerWithText(
            place: place,
            point: LatLng(place.latLng['lat'], place.latLng['lng']),
            width: 60,
            height: 60,
            builder: (_) => type2icon(place.type),
            anchorPos: AnchorPos.align(AnchorAlign.top),
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
        title: Text(PageTitle),
      ),
      body: Stack(
        children: [
          FlutterMap(
            mapController: mapController,
            options: MapOptions(
                interactiveFlags: InteractiveFlag.pinchZoom | InteractiveFlag.drag,
                zoom: DataService.globalSettingsModel!.defaultMapZoom,
                maxZoom: 19,

                center: LatLng(DataService.globalSettingsModel!.defaultMapLocation["lat"], DataService.globalSettingsModel!.defaultMapLocation["lng"]),
                onTap: (_, location) => onMapTap(location)),
            children: [
              TileLayer(
                maxZoom: 19,
                urlTemplate:
                    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                subdomains: const ['a', 'b', 'c'],
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
                          child: const Text("Storno")),
                      const Padding(padding: EdgeInsets.all(16.0)),
                      Visibility(
                        visible: !isOnlyEditMode,
                        child: ElevatedButton(
                            onPressed: showAllGroups,
                            child: const Text("Zobrazit skupinky")),
                      ),
                      const Padding(padding: EdgeInsets.all(16.0)),
                      ElevatedButton(
                          onPressed: saveNewPosition,
                          child: const Text("Uložit pozici")),
                    ],
                  ),
                ),
                Container(
                  color: Colors.white,
                  child: const Text("Pozici změníš klikem na mapu."),
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
    if(isOnlyEditMode)
    {
      Navigator.pop(context, {"lat": selectedMarker!.point.latitude, "lng": selectedMarker!.point.longitude});
      return;
    }
    await DataService.SaveLocation(selectedMarker!.place.id!,
        selectedMarker!.point.latitude, selectedMarker!.point.longitude);

    var markerToRemove = _markers
        .firstWhere((m) => m.place.id == selectedMarker!.place.id);
    //var newMarker = selectedMarker!.cloneWithNewPoint(selectedMarker!.point!);
    _markers.remove(markerToRemove);
    _markers.add(selectedMarker!);

    _popupLayerController.hideAllPopups();
    setState(() {
      selectedMarker = null;
    });
  }

  void cancelNewPosition() {
    if(isOnlyEditMode)
    {
      Navigator.pop(context);
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

  const MapDescriptionPopup(this.marker, {Key? key}) : super(key: key);

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
                visible: DataService.isEditor() || (DataService.isGroupLeader() && DataService.currentUserGroup()!.place!.id == widget.marker.place.id),
                child: ElevatedButton(
                    onPressed: _MapPageState.selectedMarker != null
                        ? null
                        : changePositionPressed,
                    child: const Text("Změnit polohu"))),
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
