import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/timeline/ScheduleTimeline.dart';
import 'package:fstapp/components/timeline/ScheduleTimelineHelper.dart';
import 'package:fstapp/dataServices/DataService.dart';
import 'package:fstapp/dataServices/RightsHelper.dart';
import 'package:fstapp/components/map/MapMarkerWithText.dart';

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
                    onPressed: widget.selectedMarker != null
                        ? null
                        : changePositionPressed,
                    child: const Text("Change location").tr())),
            Text(
              widget.marker.place.description ?? "",
              style: const TextStyle(fontSize: 12.0),
            ),
            // if(widget.marker.place.events?.isNotEmpty??false)
            //   ConstrainedBox(
            //     constraints: const BoxConstraints(maxHeight: 500),
            //     child: SingleChildScrollView(
            //       child: Column(children: [
            //         SizedBox.fromSize(size: const Size.square(12),),
            //         ScheduleTimeline(eventGroups: ScheduleTimelineHelper.splitEventsByDay(widget.marker.place.events!, context))
            //       ],),
            //     ),
            //   )
          ],
        ),
      ),
    );
  }

  void changePositionPressed() => widget.marker.editAction!(widget.marker);
}