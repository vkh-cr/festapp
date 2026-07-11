import 'package:flutter/material.dart';
import 'package:fstapp/components/cleaning/cleaning_status.dart';
import 'package:fstapp/components/cleaning/cleaning_strings.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/map/map_marker_with_text.dart';
import 'package:fstapp/components/map/map_strings.dart';
import 'package:fstapp/components/html/html_view.dart';

class MapDescriptionPopup extends StatefulWidget {
  final MapMarkerWithText marker;
  final MapMarkerWithText? selectedMarker;

  /// For toilet places with the cleaning feature on: the derived status (drives
  /// a colored chip), the "report a problem" action and the "rate quality"
  /// action (feature C), plus the public rating aggregate. Null for other places.
  final CleaningStatus? cleaningStatus;
  final VoidCallback? onReportCleaning;
  final VoidCallback? onRateCleaning;
  final double? ratingAvg;
  final int ratingCount;

  const MapDescriptionPopup(
    this.marker,
    this.selectedMarker, {
    this.cleaningStatus,
    this.onReportCleaning,
    this.onRateCleaning,
    this.ratingAvg,
    this.ratingCount = 0,
    super.key,
  });

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
            if (widget.cleaningStatus != null) _buildCleaningSection(context),
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
                    label: Text(MapStrings.changeLocation))),
            HtmlView(
              html: widget.marker.place.description ?? "",
              isSelectable: true,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCleaningSection(BuildContext context) {
    final status = widget.cleaningStatus!;
    final color = CleaningStatusHelper.color(status);
    final isOk = status == CleaningStatus.green;
    return Padding(
      padding: const EdgeInsets.only(bottom: 6),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: 12,
                height: 12,
                decoration: BoxDecoration(color: color, shape: BoxShape.circle),
              ),
              const SizedBox(width: 6),
              Text(
                isOk
                    ? CleaningStrings.statusOk
                    : CleaningStrings.problemLabel(
                        CleaningStatusHelper.codeOf(status)),
                style: TextStyle(color: color, fontWeight: FontWeight.w600),
              ),
            ],
          ),
          if (widget.ratingCount > 0)
            Padding(
              padding: const EdgeInsets.only(top: 2),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.sentiment_satisfied_alt,
                      size: 15, color: Color(0xFF2E7D32)),
                  const SizedBox(width: 4),
                  Text(
                    CleaningStrings.ratingSummary(
                        widget.ratingAvg?.toStringAsFixed(1) ?? '-',
                        widget.ratingCount),
                    style: TextStyle(
                        fontSize: 12, color: Theme.of(context).hintColor),
                  ),
                ],
              ),
            ),
          const SizedBox(height: 4),
          if (widget.onReportCleaning != null)
            TextButton.icon(
              icon: const Icon(Icons.report_problem_outlined),
              onPressed: widget.onReportCleaning,
              label: Text(CleaningStrings.reportProblem),
              style: TextButton.styleFrom(
                padding: const EdgeInsets.symmetric(horizontal: 8),
                minimumSize: const Size(0, 36),
                visualDensity: VisualDensity.compact,
              ),
            ),
          if (widget.onRateCleaning != null)
            TextButton.icon(
              icon: const Icon(Icons.star_outline),
              onPressed: widget.onRateCleaning,
              label: Text(CleaningStrings.rateQuality),
              style: TextButton.styleFrom(
                padding: const EdgeInsets.symmetric(horizontal: 8),
                minimumSize: const Size(0, 36),
                visualDensity: VisualDensity.compact,
              ),
            ),
        ],
      ),
    );
  }

  void changePositionPressed() => widget.marker.editAction!(widget.marker);
}
