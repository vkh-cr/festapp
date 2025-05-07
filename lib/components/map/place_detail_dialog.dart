import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/map/map_marker_with_text.dart';
import 'package:fstapp/widgets/html_view.dart';
import 'package:fstapp/widgets/zoomable_image/zoomable_image.dart';

class PlaceDetailDialog extends StatefulWidget {
  final MapMarkerWithText marker;
  final MapMarkerWithText? selectedMarker;

  const PlaceDetailDialog({
    super.key,
    required this.marker,
    this.selectedMarker,
  });

  @override
  _PlaceDetailDialogState createState() => _PlaceDetailDialogState();
}

class _PlaceDetailDialogState extends State<PlaceDetailDialog> {
  @override
  Widget build(BuildContext context) {
    final place = widget.marker.place;

    return AlertDialog(
      insetPadding: const EdgeInsets.all(16),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      titlePadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      contentPadding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
      title: Row(
        children: [
          Expanded(
            child: SelectableText(
              place.title,
            ),
          ),
          IconButton(
            icon: const Icon(Icons.close),
            onPressed: () => Navigator.of(context).pop(),
          ),
        ],
      ),
      content: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 350, maxHeight: 400),
        child: PinchScrollView(
          builder: (onPinchStart, onPinchEnd) => Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Change location button, only for editors or group-leaders
              if (RightsService.isEditor() ||
                  (AuthService.isGroupLeader() &&
                      AuthService.currentUserGroup()!.place!.id ==
                          place.id))
                Padding(
                  padding: const EdgeInsets.only(bottom: 12),
                  child: ElevatedButton.icon(
                    onPressed: widget.selectedMarker != null
                        ? null
                        : _onChangeLocation,
                    icon: const Icon(Icons.place),
                    label: Text('Change location'.tr()),
                  ),
                ),

              // HTML description of the place
              HtmlView(
                html: place.description ?? '',
                isSelectable: true,
                twoFingersOn: onPinchStart,
                twoFingersOff: onPinchEnd,
              ),

              // (Optional) upcoming events timeline
              // if (place.events?.isNotEmpty ?? false) ...[
              //   const SizedBox(height: 16),
              //   Text('Upcoming events'.tr(), style: Theme.of(context).textTheme.subtitle1),
              //   const SizedBox(height: 8),
              //   ConstrainedBox(
              //     constraints: const BoxConstraints(maxHeight: 200),
              //     child: ScheduleTimeline(
              //       eventGroups: ScheduleTimelineHelper.splitEventsByDay(
              //         place.events!, context),
              //     ),
              //   ),
              // ],
            ],
          ),
        ),
      ),
      actionsPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      actions: [
        TextButton(
          child: Text('Close'.tr()),
          onPressed: () => Navigator.of(context).pop(),
        ),
      ],
    );
  }

  void _onChangeLocation() {
    Navigator.of(context).pop();
    widget.marker.editAction!(widget.marker);
  }
}
