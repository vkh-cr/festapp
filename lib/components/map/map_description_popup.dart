import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/map/map_marker_with_text.dart';
import 'package:fstapp/components/html/html_view.dart';

class MapDescriptionPopup extends StatefulWidget {
  final MapMarkerWithText marker;
  final MapMarkerWithText? selectedMarker;

  const MapDescriptionPopup(this.marker, this.selectedMarker, {super.key});

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
        constraints: const BoxConstraints(minWidth: 100, maxWidth: 300),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Text(
              widget.marker.place.title,
              overflow: TextOverflow.fade,
              softWrap: true,
              style: const TextStyle(fontWeight: FontWeight.w500, fontSize: 18),
            ),
            const Padding(padding: EdgeInsets.symmetric(vertical: 4.0)),
            Visibility(
                visible: RightsService.isEditor() ||
                    (RightsService.isGroupAdmin() &&
                        RightsService.currentUserGroup()!.place!.id ==
                            widget.marker.place.id),
                child: TextButton.icon(
                    icon: const Icon(Icons.edit),
                    onPressed: widget.selectedMarker != null
                        ? null
                        : changePositionPressed,
                    label: Text("Change location".tr()))),
            HtmlView(
              html: widget.marker.place.description ?? "",
              isSelectable: true,
            ),
          ],
        ),
      ),
    );
  }

  void changePositionPressed() => widget.marker.editAction!(widget.marker);
}
