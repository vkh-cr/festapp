import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';
import 'package:flutter_map_marker_popup/flutter_map_marker_popup.dart';
import 'dart:convert';


class MarkerWithText extends Marker {
  final String title;
  final String shortDescription;

  MarkerWithText({
    required LatLng point,
    required WidgetBuilder builder,
    Key? key,
    double width = 30.0,
    double height = 30.0,
    bool? rotate,
    Offset? rotateOrigin,
    AlignmentGeometry? rotateAlignment,
    AnchorPos<dynamic>? anchorPos,
    required this.title,
    required this.shortDescription,
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
  late List<MarkerWithText> _markers;

  /// Used to trigger showing/hiding of popups.
  final PopupController _popupLayerController = PopupController();

  @override
  void initState() {
    super.initState();

    var _markers = await supabase
        .from('places')
        .select('*');

    _markers = [
      [LatLng(49.10343, 17.39380), const Icon(Icons.bed,color:Colors.red, size: 40), 'nazev1', 'popis1'],
      [LatLng(49.10432, 17.39432), const Icon(Icons.location_on,color:Colors.blue, size: 40), 'nazev2', 'popis2'],
      [LatLng(49.10374, 17.39598), const Icon(Icons.location_on,color:Colors.yellow, size: 40), 'nazev3', 'popis3']
    ]
        .map(
          (markerPosition) => MarkerWithText(
        point: markerPosition[0] as LatLng,
        width: 40,
        height: 40,
        builder: (_) => markerPosition[1] as Widget,
        anchorPos: AnchorPos.align(AnchorAlign.top),
        title: markerPosition[2] as String,
        shortDescription: markerPosition[3] as String
      ),
    )
        .toList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Mapa AV 2023'),
      ),
     // drawer: buildDrawer(context, MapPage.route),
      body: FlutterMap(
        options: MapOptions(
          zoom: 16.5,
          center: LatLng(49.10353, 17.39502),
          onTap: (_, __) => _popupLayerController
              .hideAllPopups(), // Hide popup when the map is tapped.
        ),
        children: [
          TileLayer(
            urlTemplate: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            subdomains: const ['a', 'b', 'c'],
          ),
          PopupMarkerLayerWidget(
            options: PopupMarkerLayerOptions(
              popupController: _popupLayerController,
              markers: _markers,
              markerRotateAlignment:
              PopupMarkerLayerOptions.rotationAlignmentFor(AnchorAlign.top),
              popupBuilder: (BuildContext context, Marker marker) {
                if (marker is MarkerWithText) {
                  return MapDescriptionPopup(marker);
                }
                return SizedBox.shrink();
              },
            ),
          ),
        ],
      ),
    );
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
      )
    ;
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
              widget.marker.title,
              overflow: TextOverflow.fade,
              softWrap: false,
              style: const TextStyle(
                fontWeight: FontWeight.w500,
                fontSize: 14.0,
              ),
            ),
            const Padding(padding: EdgeInsets.symmetric(vertical: 4.0)),
            Text(
              widget.marker.shortDescription,
              style: const TextStyle(fontSize: 12.0),
            ),
          ],
        ),
      ),
    );
  }
}

