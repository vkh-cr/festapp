import 'package:av_app/services/DataService.dart';
import 'package:av_app/styles/Styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:flutter_map_location_marker/flutter_map_location_marker.dart';
import 'package:flutter_map_marker_popup/flutter_map_marker_popup.dart';
import 'package:flutter_svg/svg.dart';
import 'package:latlong2/latlong.dart';

import '../models/PlaceModel.dart';

const double InitLat = 49.10353;
const double InitLng = 17.39502;
const double InitZoom = 17;

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
  String PageTitle = "Mapa AV 2023";

  /// Used to trigger showing/hiding of popups.
  final PopupController _popupLayerController = PopupController();

  late final MapController mapController = MapController();

  void didChangeDependencies() {
    super.didChangeDependencies();
    final placeId = ModalRoute.of(context)?.settings.arguments as int?;
    loadPlaces(placeId);
  }

  Map<String, String> type2icon_map = {
    "atm": "atm.svg",
    "church": "church.svg",
    "coffee": "coffee.svg",
    "wine": "wine.svg",
    "beer": "beer.svg",
    "reception": "card.svg",
    "food": "food.svg",
    "sport": "ball.svg",
    "lecture": "speaker.svg",
    "workshop": "church.svg",
    "accommodation": "bed.svg",
    "group": "conversation.svg",
    "cross": "cross.svg",
  };

  Widget type2icon(String placeType) {
    SvgPicture? fill;
    if (type2icon_map.containsKey(placeType)) {
      fill = SvgPicture.asset(
        "assets/images/map/${type2icon_map[placeType]!}",
        colorFilter: const ColorFilter.mode(Colors.black, BlendMode.srcIn),
      );
    }
    if (fill != null) {
      return Stack(children: [
        const Icon(Icons.location_pin, size: 58, color: primaryBlue1),
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
    return const Icon(Icons.location_pin, size: 36, color: primaryBlue1);
  }

  Future<void> loadPlaces([int? placeId]) async {
    List<PlaceModel> places;
    if (placeId != null) {
      var place = await DataService.getPlace(placeId);
      places = [place];
      setState(() {
        mapController.move(LatLng(place.latLng['lat'], place.latLng['lng']),
            mapController.zoom);
        PageTitle = place.title;
      });
    } else {
      places = await DataService.getPlaces();
    }
    var mappedMarkers = places
        .map(
          (place) => MarkerWithText(
            place: place,
            point: LatLng(place.latLng['lat'], place.latLng['lng']),
            width: 60,
            height: 60,
            builder: (_) => type2icon(place.type ?? ""),
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
                zoom: InitZoom,
                maxZoom: 18,
                center: const LatLng(InitLat, InitLng),
                onTap: (_, location) => onMapTap(location)),
            children: [
              TileLayer(
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
    await DataService.SaveLocation(selectedMarker!.place.id,
        selectedMarker!.point.latitude, selectedMarker!.point.longitude);

    var markerToRemove = _markers
        .firstWhere((m) => m.place.id == selectedMarker!.place.id);
    //var newMarker = selectedMarker!.cloneWithNewPoint(selectedMarker!.point!);
    _markers.remove(markerToRemove);
    _markers.add(selectedMarker!);

    setState(() {
      selectedMarker = null;
    });
  }

  void cancelNewPosition() {
    setState(() {
      selectedMarker = null;
    });
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
              widget.marker.place.title,
              overflow: TextOverflow.fade,
              softWrap: true,
              style: const TextStyle(
                fontWeight: FontWeight.w500,
                fontSize: 14.0,
              ),
            ),
            const Padding(padding: EdgeInsets.symmetric(vertical: 4.0)),
            Visibility(
                visible: DataService.isAdmin(),
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
