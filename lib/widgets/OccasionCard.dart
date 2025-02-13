import 'dart:ui';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:intl/intl.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/widgets/OccasionDetailDialog.dart';

// Constants for card styling.
const double kCardBorderRadius = 15.0;
const double kPresentBorderWidth = 4.0;
const double kMinCardWidth = 300.0;
const double kMinCardHeight = 150.0;
const Duration kAnimationDuration = Duration(milliseconds: 200);
const double kButtonVerticalPadding = 16.0;
const double kButtonHorizontalPadding = 20.0;
const double kCardWidth = 16.0;
const double kCardHeight = 9.0;

class OccasionCard extends StatefulWidget {
  final OccasionModel occasion;
  final bool isPast;
  final bool isPresent;

  const OccasionCard({
    super.key,
    required this.occasion,
    this.isPast = false,
    this.isPresent = false,
  });

  @override
  _OccasionCardState createState() => _OccasionCardState();
}

class _OccasionCardState extends State<OccasionCard> {
  bool isHovered = false;

  @override
  Widget build(BuildContext context) {
    // When the event is present, add a thicker border and an extra glowing shadow.
    final Border? border = widget.isPresent
        ? Border.all(
        color: Theme.of(context).primaryColor, width: kPresentBorderWidth)
        : null;

    // Adjust the inner clipping radius to account for the border width.
    final double innerRadius = widget.isPresent
        ? kCardBorderRadius - kPresentBorderWidth
        : kCardBorderRadius;

    return MouseRegion(
      onEnter: (_) => setState(() => isHovered = true),
      onExit: (_) => setState(() => isHovered = false),
      child: LayoutBuilder(builder: (context, constraints) {
        return ConstrainedBox(
          constraints: const BoxConstraints(
            minWidth: kMinCardWidth,
            minHeight: kMinCardHeight,
          ),
          child: AnimatedContainer(
            duration: kAnimationDuration,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(kCardBorderRadius),
              border: border,
              boxShadow: [
                if (widget.isPresent)
                  BoxShadow(
                    color:
                    Theme.of(context).primaryColor.withOpacity(0.6),
                    blurRadius: 20,
                    spreadRadius: 4,
                  ),
                BoxShadow(
                  color: isHovered ? Colors.black26 : Colors.black12,
                  blurRadius: isHovered ? 8 : 4,
                  offset: isHovered
                      ? const Offset(0, 4)
                      : const Offset(0, 2),
                ),
              ],
            ),
            // Clip the child so that the content respects the rounded corners.
            child: ClipRRect(
              borderRadius: BorderRadius.circular(innerRadius),
              child: Stack(
                children: [
                  if(widget.occasion.data?[Tb.occasions.data_image] != null)
                  Positioned.fill(
                    child: Image.network(
                      widget.occasion.data?[Tb.occasions.data_image],
                      fit: BoxFit.cover,
                    ),
                  ),
                  // If the event is past, add a gray overlay.
                  if (widget.isPast)
                    Positioned.fill(
                      child: Container(
                        color: Colors.grey.withOpacity(0.6),
                      ),
                    ),
                  // Blurred and darkened overlay at the bottom for title and dates.
                  Positioned(
                    left: 0,
                    right: 0,
                    bottom: 0,
                    child: ClipRect(
                      child: BackdropFilter(
                        filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
                        child: Container(
                          padding: const EdgeInsets.all(8.0),
                          color: Colors.black.withOpacity(0.4),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              SelectableText(
                                widget.occasion.title ?? '',
                                style: const TextStyle(
                                  color: Colors.white,
                                  fontSize: 18,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              const SizedBox(height: 4),
                              SelectableText(
                                '${DateFormat.yMMMd(Localizations.localeOf(context).languageCode)
                                    .format(widget.occasion.startTime!)} - '
                                    '${DateFormat.yMMMd(Localizations.localeOf(context).languageCode)
                                    .format(widget.occasion.endTime!)}',
                                style: const TextStyle(
                                  color: Colors.white,
                                  fontSize: 14,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                  // Detail/reserve button over the image at the bottom right.
                  Positioned(
                    bottom: 8,
                    right: 8,
                    child: OutlinedButton(
                      onPressed: () {
                        // Show detail dialog.
                        showDialog(
                          context: context,
                          builder: (context) => OccasionDetailDialog(
                              occasion: widget.occasion),
                        );
                      },
                      style: OutlinedButton.styleFrom(
                        padding: const EdgeInsets.symmetric(
                            vertical: kButtonVerticalPadding,
                            horizontal: kButtonHorizontalPadding),
                        side: const BorderSide(
                          color: Colors.white,
                        ),
                      ),
                      child: Text(
                        widget.isPast || widget.isPresent
                            ? "Detail".tr()
                            : "Reserve a spot".tr(),
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 16,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      }),
    );
  }
}
