import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/widgets/html_view.dart';
import 'package:fstapp/widgets/zoomable_image/zoomable_image.dart'; // For PinchScrollView

class DetailDialog extends StatefulWidget {
  final String title;
  final String? htmlDescription;
  final bool canEdit;
  final VoidCallback? onEditPressed; // Callback for the edit action
  final Widget? customContentWidget; // Optional custom widget

  const DetailDialog({
    super.key,
    required this.title,
    this.htmlDescription,
    this.canEdit = false,
    this.onEditPressed,
    this.customContentWidget,
  });

  @override
  _DetailDialogState createState() => _DetailDialogState();
}

class _DetailDialogState extends State<DetailDialog> {
  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      insetPadding: const EdgeInsets.all(16),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      titlePadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      contentPadding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
      title: Row(
        children: [
          Expanded(
            child: SelectableText(
              widget.title,
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
        child: SizedBox(
          height: widget.customContentWidget != null ? 400 : null,
          width: widget.customContentWidget != null ? 350 : null,
          child: PinchScrollView( // PinchScrollView kept for description zooming
            builder: (onPinchStart, onPinchEnd) => Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              mainAxisSize: MainAxisSize.min, // Important for Column in ScrollView
              children: [
                // Edit button, shown if canEdit is true and onEditPressed is provided
                if (widget.canEdit && widget.onEditPressed != null)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 12),
                    child: TextButton.icon(
                      onPressed: _handleEditPressed,
                      icon: const Icon(Icons.edit), // Generic edit icon
                      label: Text('Edit'.tr()), // Generic edit text
                    ),
                  ),

                // (Optional) Custom widget slot below description
                if (widget.customContentWidget != null) ...[
                  const SizedBox(height: 16),
                  widget.customContentWidget!,
                ],

                if(widget.htmlDescription != null)
                  HtmlView(
                    html: widget.htmlDescription!, // Use the passed-in HTML description
                    isSelectable: true,
                    twoFingersOn: onPinchStart,
                    twoFingersOff: onPinchEnd,
                  ),

                // (Optional) upcoming events timeline - Preserved comment block
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

  void _handleEditPressed() {
    if (widget.onEditPressed != null) {
      Navigator.of(context).pop(); // Pop the dialog first
      widget.onEditPressed!();     // Then call the edit action
    }
  }
}