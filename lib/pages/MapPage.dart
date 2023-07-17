import 'package:av_app/services/DataService.dart';
import 'package:av_app/styles/Styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:flutter_svg/svg.dart';
import 'package:latlong2/latlong.dart';
import 'package:flutter_map_marker_popup/flutter_map_marker_popup.dart';

import '../models/PlaceModel.dart';

const double InitLat = 49.10353;
const double InitLng = 17.39502;
const double InitZoom = 16.5;

class MarkerWithText extends Marker {
  double? oldLat;
  double? oldLng;
  final PlaceModel place;
  Function(MarkerWithText marker)? editAction;

  MarkerWithText({
    required LatLng point,
    required WidgetBuilder builder,
    required this.place,
    Key? key,
    double width = 30.0,
    double height = 30.0,
    bool? rotate,
    Offset? rotateOrigin,
    AlignmentGeometry? rotateAlignment,
    AnchorPos<dynamic>? anchorPos,
    this.editAction
  }) : super(
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
}

class MapPage extends StatefulWidget {
  static const route = 'MapPage';

  const MapPage({Key? key}) : super(key: key);

  @override
  State<MapPage> createState() => _MapPageState();
}

class _MapPageState extends State<MapPage> {
  final List<MarkerWithText> _markers = [];
  static MarkerWithText? selectedMarker;

  /// Used to trigger showing/hiding of popups.
  final PopupController _popupLayerController = PopupController();

  @override
  void initState() {
    super.initState();
    loadPlaces();
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
    if (type2icon_map.containsKey(placeType))
    {
      fill = SvgPicture.asset("assets/images/map/${type2icon_map[placeType]!}", colorFilter: const ColorFilter.mode(Colors.black, BlendMode.srcIn), );
    }
    if(fill != null)
      {
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
            left: 19, width: 19, height: 19,
            child: Container(alignment: Alignment.center, child: fill))]
        );
      }
    return const Icon(Icons.location_pin, size: 36, color: primaryBlue1);
  }

  Future<void> loadPlaces() async {
    var places = await DataService.getPlaces();
    var mappedMarkers = places
        .map(
          (place) => MarkerWithText(
            place: place,
            point: LatLng(
                place.latLng['lat'],
                place.latLng['lng']),
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
    marker.oldLat = marker.point.latitude;
    marker.oldLng = marker.point.longitude;
    setState(() {
      selectedMarker = marker;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Mapa AV 2023'),
      ),
      body: Stack(
        children: [
          FlutterMap(
            options: MapOptions(
              zoom: InitZoom,
              maxZoom: 18,
              center: LatLng(InitLat, InitLng),
              onTap: (_, location) => onMapTap(location),
            ),
            children: [
              TileLayer(
                urlTemplate:
                    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                subdomains: const ['a', 'b', 'c'],
              ),
              PopupMarkerLayerWidget(
                options: PopupMarkerLayerOptions(
                  popupController: _popupLayerController,
                  markers: _markers,
                  markerRotateAlignment:
                      PopupMarkerLayerOptions.rotationAlignmentFor(
                          AnchorAlign.top),
                  popupBuilder: (BuildContext context, Marker marker) {
                    if (marker is MarkerWithText) {
                      return MapDescriptionPopup(marker);
                    }
                    return const SizedBox.shrink();
                  },
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
                          onPressed: cancelNewPosition, child: const Text("Storno")),
                      const Padding(padding: EdgeInsets.all(16.0)),
                      ElevatedButton(
                          onPressed: saveNewPosition, child: const Text("Uložit pozici")),
                    ],
                  ),
                ),
                Container(
                  color: Colors.white,
                  child:
                  const Text("Pozici změníš klikem na mapu."),),
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
      selectedMarker!.point.latitude = pos.latitude;
      selectedMarker!.point.longitude = pos.longitude;
    }
    else {
      _popupLayerController.hideAllPopups();
    }
  }

  Future<void> saveNewPosition() async {
    await DataService.SaveLocation(selectedMarker!.place.placeId, selectedMarker!.point.latitude, selectedMarker!.point.longitude);
    setState(() {
      selectedMarker = null;
    });
  }

  void cancelNewPosition() {
    selectedMarker!.point.latitude = selectedMarker!.oldLat!;
    selectedMarker!.point.longitude = selectedMarker!.oldLng!;
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
              softWrap: false,
              style: const TextStyle(
                fontWeight: FontWeight.w500,
                fontSize: 14.0,
              ),
            ),
            const Padding(padding: EdgeInsets.symmetric(vertical: 4.0)),
            Visibility(
                visible: DataService.isLoggedIn(),
                child: ElevatedButton(
                    onPressed: _MapPageState.selectedMarker != null ? null : changePositionPressed,
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
