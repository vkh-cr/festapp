// timeline_row.dart
import 'dart:math' as math;
import 'package:collection/collection.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/data_models/activity_model.dart';
import 'package:fstapp/data_models/event_model.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'constants.dart';


class TimelineRow extends StatefulWidget {
  final DateTime start, end;
  final DateTime itemStart, itemEnd;
  final void Function(DateTime finalStart, DateTime finalEnd) onDragEnd;
  final VoidCallback? onTapBar;
  final VoidCallback? onDragStart;
  final Color? barColor;
  final bool draggable;
  final double zoomScale;
  final void Function(dynamic droppedItemData)? onPlaceOrEventDropped;
  final ActivityAssignmentModel? assignment;
  final LayerLink layerLink;
  final bool isDarkMode;

  const TimelineRow({
    Key? key, required this.start, required this.end,
    required this.itemStart, required this.itemEnd,
    required this.onDragEnd,
    this.onTapBar, this.onDragStart, this.barColor, this.draggable = true, this.zoomScale = 1.0,
    this.onPlaceOrEventDropped,
    this.assignment,
    required this.layerLink,
    required this.isDarkMode,
  }) : super(key: key);

  @override
  _TimelineRowState createState() => _TimelineRowState();
}

class _TimelineRowState extends State<TimelineRow> {
  late double _leftPct, _widthPct;
  late DateTime _dragItemStartInternal, _dragItemEndInternal;
  double _dragGlobalStartX = 0.0;
  double _resizeGlobalStartX = 0.0;
  double _initialLeftPctOnDrag = 0.0;
  double _initialWidthPctOnDrag = 0.0;
  bool _isPlaceOrEventDragOver = false;

  @override
  void initState() {
    super.initState();
    _dragItemStartInternal = widget.itemStart;
    _dragItemEndInternal = widget.itemEnd;
    _updateInternalTimesAndPercentagesFromWidget();
  }

  @override
  void didUpdateWidget(covariant TimelineRow oldWidget) {
    super.didUpdateWidget(oldWidget);
    bool needsRecompute = false;
    if (oldWidget.itemStart != widget.itemStart || oldWidget.itemEnd != widget.itemEnd) {
      _dragItemStartInternal = widget.itemStart;
      _dragItemEndInternal = widget.itemEnd;
      needsRecompute = true;
    }
    if (oldWidget.start != widget.start || oldWidget.end != widget.end ||
        oldWidget.zoomScale != widget.zoomScale ||
        !DeepCollectionEquality().equals(oldWidget.assignment?.places, widget.assignment?.places) ||
        !DeepCollectionEquality().equals(oldWidget.assignment?.events, widget.assignment?.events) ||
        oldWidget.layerLink != widget.layerLink || oldWidget.barColor != widget.barColor ||
        oldWidget.draggable != widget.draggable || oldWidget.isDarkMode != widget.isDarkMode
    ) {
      needsRecompute = true;
    }

    if (needsRecompute) {
      _updateInternalTimesAndPercentagesFromWidget();
    }
  }

  void _updateInternalTimesAndPercentagesFromWidget() {
    _recomputePercentagesFromInternalState();
  }

  void _recomputePercentagesFromInternalState() {
    final totalDurationSeconds = widget.end.difference(widget.start).inSeconds.toDouble();
    if (totalDurationSeconds <= 0) {
      _leftPct = 0; _widthPct = 0; return;
    }
    DateTime clampedItemStart = _dragItemStartInternal.isBefore(widget.start) ? widget.start : _dragItemStartInternal;
    clampedItemStart = clampedItemStart.isAfter(widget.end) ? widget.end : clampedItemStart;

    DateTime clampedItemEnd = _dragItemEndInternal.isBefore(widget.start) ? widget.start : _dragItemEndInternal;
    clampedItemEnd = clampedItemEnd.isAfter(widget.end) ? widget.end : clampedItemEnd;

    if (clampedItemStart.isAfter(clampedItemEnd)) {
      clampedItemEnd = clampedItemStart;
    }

    final offsetSeconds = clampedItemStart.difference(widget.start).inSeconds.toDouble();
    final itemDurationSeconds = clampedItemEnd.difference(clampedItemStart).inSeconds.toDouble();

    _leftPct = (offsetSeconds / totalDurationSeconds).clamp(0.0, 1.0);
    _widthPct = (itemDurationSeconds / totalDurationSeconds).clamp(0.0, 1.0 - _leftPct);
  }

  double _snapPctValue(double pctValue, double totalMinutesInTimeline) {
    if (totalMinutesInTimeline <= 0) return pctValue;
    final Duration stepDuration = widget.zoomScale < 0.5 ? kSnapStepCoarse : kSnapStepFine;
    if (stepDuration.inMinutes <= 0) return pctValue;
    final double stepAsPct = stepDuration.inMinutes / totalMinutesInTimeline;
    return stepAsPct <= 0 ? pctValue : (pctValue / stepAsPct).round() * stepAsPct;
  }

  void _onItemDragStart(DragStartDetails d) {
    if (!widget.draggable) return;
    widget.onDragStart?.call();
    _dragGlobalStartX = d.globalPosition.dx;
    _initialLeftPctOnDrag = _leftPct;
    _updateInternalTimesFromPercentages();
  }

  void _onItemDragUpdate(DragUpdateDetails d, BoxConstraints bc) {
    if (!widget.draggable) return;
    final dx = d.globalPosition.dx - _dragGlobalStartX;
    final dPct = bc.maxWidth > 0 ? (dx / bc.maxWidth) : 0.0;
    final totalMinutes = widget.end.difference(widget.start).inMinutes.toDouble();
    double newLeftPct = (_initialLeftPctOnDrag + dPct);
    newLeftPct = _snapPctValue(newLeftPct, totalMinutes);

    setState(() {
      _leftPct = newLeftPct.clamp(0.0, 1.0 - _widthPct);
      _updateInternalTimesFromPercentages();
    });
  }

  void _onItemDragEnd(DragEndDetails d) {
    if (!widget.draggable) return;
    widget.onDragEnd(_dragItemStartInternal, _dragItemEndInternal);
  }

  void _onResizeDragStart(DragStartDetails d) {
    if (!widget.draggable) return;
    widget.onDragStart?.call();
    _resizeGlobalStartX = d.globalPosition.dx;
    _initialLeftPctOnDrag = _leftPct;
    _initialWidthPctOnDrag = _widthPct;
    _updateInternalTimesFromPercentages();
    if (mounted) setState(() {});
  }

  void _onResizeDragUpdate(DragUpdateDetails d, BoxConstraints bc, bool isResizingRightHandle) {
    if (!widget.draggable) return;
    final dx = d.globalPosition.dx - _resizeGlobalStartX;
    final dPct = bc.maxWidth > 0 ? (dx / bc.maxWidth) : 0.0;
    final totalTimelineSeconds = widget.end.difference(widget.start).inSeconds.toDouble();
    final minWidthPct = totalTimelineSeconds > 0 ? (kMinTimeLength.inSeconds / totalTimelineSeconds) : 0.0;
    final totalMinutes = totalTimelineSeconds / 60.0;

    setState(() {
      if (isResizingRightHandle) {
        double newWidthPct = _initialWidthPctOnDrag + dPct;
        double snappedEndPct = _snapPctValue(_initialLeftPctOnDrag + newWidthPct, totalMinutes);
        newWidthPct = snappedEndPct - _initialLeftPctOnDrag;
        _widthPct = newWidthPct.clamp(minWidthPct, 1.0 - _leftPct);
      } else { // Resizing left handle
        double newLeftProposedPct = _initialLeftPctOnDrag + dPct;
        double newSnappedLeftPct = _snapPctValue(newLeftProposedPct, totalMinutes);
        double widthChangePct = newSnappedLeftPct - _initialLeftPctOnDrag;
        double newWidthPct = _initialWidthPctOnDrag - widthChangePct;

        if (newWidthPct < minWidthPct) {
          newWidthPct = minWidthPct;
          newSnappedLeftPct = _snapPctValue(_initialLeftPctOnDrag + _initialWidthPctOnDrag - newWidthPct, totalMinutes);
        }
        _leftPct = newSnappedLeftPct.clamp(0.0, 1.0 - minWidthPct);
        _widthPct = newWidthPct.clamp(minWidthPct, 1.0 - _leftPct);
      }
      _updateInternalTimesFromPercentages();
    });
  }

  void _onResizeDragEnd(DragEndDetails d) {
    if (!widget.draggable) return;
    widget.onDragEnd(_dragItemStartInternal, _dragItemEndInternal);
  }

  void _updateInternalTimesFromPercentages() {
    final totalSeconds = widget.end.difference(widget.start).inSeconds;
    if (totalSeconds <= 0) {
      _dragItemStartInternal = widget.start;
      _dragItemEndInternal = widget.start;
      _recomputePercentagesFromInternalState();
      return;
    }

    int newStartOffsetSeconds = (totalSeconds * _leftPct).round();
    int newDurationSeconds = (totalSeconds * _widthPct).round();

    if (newDurationSeconds < kMinTimeLength.inSeconds && totalSeconds >= kMinTimeLength.inSeconds) {
      newDurationSeconds = kMinTimeLength.inSeconds;
    } else if (newDurationSeconds <= 0 && totalSeconds > 0) {
      newDurationSeconds = kMinTimeLength.inSeconds.clamp(1, totalSeconds);
    }

    _widthPct = (newDurationSeconds / totalSeconds).clamp(0.0, 1.0);

    if (_leftPct + _widthPct > 1.0) {
      _widthPct = (1.0 - _leftPct).clamp(0.0, 1.0);
      newDurationSeconds = (totalSeconds * _widthPct).round();
    }
    if (_leftPct > 1.0 - _widthPct) {
      _leftPct = (1.0 - _widthPct).clamp(0.0, 1.0);
      newStartOffsetSeconds = (totalSeconds * _leftPct).round();
    }

    DateTime newStart = widget.start.add(Duration(seconds: newStartOffsetSeconds));
    DateTime newEnd = newStart.add(Duration(seconds: newDurationSeconds));

    if (newStart.isBefore(widget.start)) newStart = widget.start;
    if (newEnd.isAfter(widget.end)) newEnd = widget.end;

    if (newEnd.difference(newStart).inSeconds < newDurationSeconds && newStart.add(Duration(seconds: newDurationSeconds)).isAfter(widget.start)) {
      newStart = newEnd.subtract(Duration(seconds: newDurationSeconds));
      if (newStart.isBefore(widget.start)) newStart = widget.start;
    }
    if (newStart.isAfter(newEnd)) newEnd = newStart;

    _dragItemStartInternal = newStart;
    _dragItemEndInternal = newEnd;

    _recomputePercentagesFromInternalState();
  }

  String _formatTime(DateTime dt) {
    return "${dt.hour.toString().padLeft(2, '0')}:${dt.minute.toString().padLeft(2, '0')}";
  }

  @override
  Widget build(BuildContext context) {
    final isPreviewItem = widget.assignment?.data?['isDragPreview'] == true;
    final Color contentColor = Colors.white.withOpacity(0.95);

    return LayoutBuilder(builder: (c, bc) {
      if (bc.maxWidth <= 0) return const SizedBox.shrink();
      _recomputePercentagesFromInternalState();

      final currentItemWidthPx = (bc.maxWidth * _widthPct).clamp(0.0, bc.maxWidth);
      if (currentItemWidthPx < 1.0 && widget.draggable && !isPreviewItem) {
        return const SizedBox.shrink();
      }

      List<Widget> barChildren = [];
      double availableWidthForContent = currentItemWidthPx - 6.0; // 3px padding on each side of the Row
      const double minVisibleTextWidth = 20.0; // Minimum width to attempt showing any text
      const double spacing = 4.0; // General spacing between elements

      // 1. Avatar
      var userInfo = widget.assignment?.user;
      if (userInfo != null) {
        final initials = userInfo.toFullNameString().split(' ').map((w) => w.isNotEmpty ? w[0] : '').take(2).join().toUpperCase();
        Color userAvatarBgColor = darkUserColors[userInfo.hashCode % darkUserColors.length];
        const double avatarWidgetWidth = 16 /*avatar*/ + 4 /*margin right*/ + 1 /*margin left*/;
        if (availableWidthForContent >= avatarWidgetWidth) {
          barChildren.add(
              Container(
                width: 16, height: 16,
                margin: const EdgeInsets.only(right: spacing, left: 1), // Use spacing constant
                decoration: BoxDecoration(
                    color: userAvatarBgColor.withOpacity(widget.isDarkMode ? 0.85 : 0.95),
                    shape: BoxShape.circle,
                    border: Border.all(color: Colors.white.withOpacity(0.4), width: 0.75)
                ),
                child: Center(child: Text(initials, style: TextStyle(fontSize: 8, color: Colors.white, fontWeight: FontWeight.bold))),
              )
          );
          availableWidthForContent -= avatarWidgetWidth;
        } else {
          const double minAvatarPlaceholder = 1.0;
          if (availableWidthForContent >= minAvatarPlaceholder) {
            barChildren.add(SizedBox(width: minAvatarPlaceholder));
            availableWidthForContent -= minAvatarPlaceholder;
          }
        }
      } else {
        const double noAvatarPadding = spacing; // Consistent padding
        if (availableWidthForContent >= noAvatarPadding) {
          barChildren.add(SizedBox(width: noAvatarPadding)); // Align with avatar's potential space
          availableWidthForContent -= noAvatarPadding;
        }
      }

      // 2. Time Text
      final String timeText = "${_formatTime(_dragItemStartInternal)} - ${_formatTime(_dragItemEndInternal)}";
      final timeTextPainter = TextPainter(
        text: TextSpan(text: timeText, style: TextStyle(color: contentColor, fontSize: 10, fontWeight: FontWeight.w500)),
        textDirection: TextDirection.ltr,
      )..layout();
      double timeTextMeasuredWidth = timeTextPainter.width;
      bool timeTextAdded = false;
      bool timeTextExpanded = false;

      if (availableWidthForContent >= timeTextMeasuredWidth) {
        barChildren.add(
            Text(timeText, style: TextStyle(color: contentColor, fontSize: 10, fontWeight: FontWeight.w500), overflow: TextOverflow.clip, softWrap: false)
        );
        availableWidthForContent -= timeTextMeasuredWidth;
        timeTextAdded = true;
      } else if (availableWidthForContent >= minVisibleTextWidth) {
        barChildren.add(Expanded(
            child: Text(timeText, style: TextStyle(color: contentColor, fontSize: 10, fontWeight: FontWeight.w500), overflow: TextOverflow.ellipsis, softWrap: false)
        ));
        availableWidthForContent = 0;
        timeTextAdded = true;
        timeTextExpanded = true;
      }

      // 3. Icons
      final placeCount = widget.assignment?.places.length ?? 0;
      final eventCount = widget.assignment?.events.length ?? 0;
      bool iconsAdded = false;

      if (timeTextAdded && (placeCount > 0 || eventCount > 0)) {
        double iconsRequiredWidth = 0;
        List<Widget> tempIconWidgets = [];

        if (placeCount > 0 || eventCount > 0) {
          iconsRequiredWidth += spacing;

          if (placeCount > 0) {
            iconsRequiredWidth += 12;
            if (placeCount > 1) {
              final pCountPainter = TextPainter(text: TextSpan(text: '$placeCount', style: TextStyle(fontSize: 9)), textDirection: TextDirection.ltr)..layout();
              iconsRequiredWidth += (2.0 + pCountPainter.width);
            }
          }
          if (placeCount > 0 && eventCount > 0) iconsRequiredWidth += spacing;

          if (eventCount > 0) {
            iconsRequiredWidth += 12;
            if (eventCount > 1) {
              final eCountPainter = TextPainter(text: TextSpan(text: '$eventCount', style: TextStyle(fontSize: 9)), textDirection: TextDirection.ltr)..layout();
              iconsRequiredWidth += (2.0 + eCountPainter.width);
            }
          }
        }

        if (availableWidthForContent >= iconsRequiredWidth) {
          tempIconWidgets.add(const SizedBox(width: spacing));

          if (placeCount > 0) {
            tempIconWidgets.add(Icon(Icons.location_pin, size: 12, color: contentColor.withOpacity(0.85)));
            if (placeCount > 1) {
              tempIconWidgets.add(Padding(
                padding: const EdgeInsets.only(left: 2.0),
                child: Text('$placeCount', style: TextStyle(fontSize: 9, color: contentColor.withOpacity(0.85))),
              ));
            }
            if (eventCount > 0) tempIconWidgets.add(const SizedBox(width: spacing));
          }

          if (eventCount > 0) {
            tempIconWidgets.add(Icon(Icons.event, size: 12, color: contentColor.withOpacity(0.85)));
            if (eventCount > 1) {
              tempIconWidgets.add(Padding(
                padding: const EdgeInsets.only(left: 2.0),
                child: Text('$eventCount', style: TextStyle(fontSize: 9, color: contentColor.withOpacity(0.85))),
              ));
            }
          }
          barChildren.addAll(tempIconWidgets);
          availableWidthForContent -= iconsRequiredWidth;
          iconsAdded = true;
        }
      }

      // 4. Detail Text (Place/Event Title)
      String? placeTitle = widget.assignment?.places.firstOrNull?.title;
      String? eventTitle = widget.assignment?.events.firstOrNull?.title;
      String detailText = placeTitle ?? eventTitle ?? "";
      bool detailTextExpanded = false;

      if ((timeTextAdded || iconsAdded) && detailText.isNotEmpty) {
        const double minDetailTextWidth = 20.0;
        final double requiredSpaceForDetailText = spacing + minDetailTextWidth;

        if (availableWidthForContent >= requiredSpaceForDetailText) {
          barChildren.add(const SizedBox(width: spacing));
          barChildren.add(Expanded(
            child: Text(
              detailText,
              style: TextStyle(color: contentColor.withOpacity(0.85), fontSize: 9),
              overflow: TextOverflow.ellipsis,
              softWrap: false,
            ),
          ));
          availableWidthForContent = 0;
          detailTextExpanded = true;
        }
      }

      bool hasExpandedChild = timeTextExpanded || detailTextExpanded;

      if (!hasExpandedChild) {
        if (barChildren.isNotEmpty) {
          barChildren.add(Expanded(child: SizedBox.shrink()));
        } else if (currentItemWidthPx > 0) {
          barChildren.add(Expanded(child: SizedBox.shrink()));
        }
      }

      Widget barContent = Padding(
        padding: const EdgeInsets.symmetric(horizontal: 3.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: barChildren,
        ),
      );

      Widget itemBar = Container(
        decoration: BoxDecoration(
          color: (widget.barColor ?? Theme.of(context).primaryColor).withOpacity(widget.draggable || isPreviewItem ? (widget.isDarkMode ? 0.75 : 0.85) : (widget.isDarkMode? 0.45 : 0.55)),
          borderRadius: BorderRadius.circular(4),
          border: Border.all(
            color: _isPlaceOrEventDragOver
                ? Colors.greenAccent.shade400
                : (widget.barColor ?? Theme.of(context).primaryColor).withOpacity(widget.isDarkMode ? 0.9 : 1.0),
            width: _isPlaceOrEventDragOver ? 1.8 : (widget.draggable || isPreviewItem ? 1.0: 0.5),
          ),
          boxShadow: (widget.draggable || isPreviewItem) ? [
            BoxShadow(
                color: Colors.black.withOpacity(0.20),
                blurRadius: 1.5,
                offset: Offset(0,1)
            )
          ] : null,
        ),
        child: Stack(clipBehavior: Clip.hardEdge, children: [ // Added clipBehavior
          Positioned.fill(child: barContent),
          if (widget.draggable && !isPreviewItem) ...[
            Positioned(left: 0, top: 0, bottom: 0, width: 10.clamp(0, currentItemWidthPx / 3).toDouble(), child: GestureDetector(
                behavior: HitTestBehavior.translucent, onHorizontalDragStart: _onResizeDragStart,
                onHorizontalDragUpdate: (d) => _onResizeDragUpdate(d, bc, false),
                onHorizontalDragEnd: _onResizeDragEnd,
                child: MouseRegion(cursor: SystemMouseCursors.resizeLeftRight, child: Container(color: Colors.transparent)))),
            Positioned(right: 0, top: 0, bottom: 0, width: 10.clamp(0, currentItemWidthPx / 3).toDouble(), child: GestureDetector(
                behavior: HitTestBehavior.translucent, onHorizontalDragStart: _onResizeDragStart,
                onHorizontalDragUpdate: (d) => _onResizeDragUpdate(d, bc, true),
                onHorizontalDragEnd: _onResizeDragEnd,
                child: MouseRegion(cursor: SystemMouseCursors.resizeLeftRight, child: Container(color: Colors.transparent)))),
          ],
        ]),
      );

      Widget interactiveItemBar = GestureDetector(
        onTap: widget.draggable && !isPreviewItem ? widget.onTapBar : null,
        onHorizontalDragStart: widget.draggable && !isPreviewItem ? _onItemDragStart : null,
        onHorizontalDragUpdate: widget.draggable && !isPreviewItem ? (d) => _onItemDragUpdate(d, bc) : null,
        onHorizontalDragEnd: widget.draggable && !isPreviewItem ? _onItemDragEnd : null,
        child: CompositedTransformTarget(
          link: widget.layerLink,
          child: itemBar,
        ),
      );

      return Stack(children: [
        Positioned(
          left: (bc.maxWidth * _leftPct).clamp(0.0, bc.maxWidth - (widget.draggable || isPreviewItem ? 1 : 0)),
          width: currentItemWidthPx.clamp(widget.draggable || isPreviewItem ? 1.0 : 0.0, bc.maxWidth),
          top: 1, bottom: 1,
          child: widget.onPlaceOrEventDropped != null && widget.draggable && !isPreviewItem
              ? DragTarget<Object>(
            builder: (BuildContext context, List<Object?> candidateData, List<dynamic> rejectedData) {
              return interactiveItemBar;
            },
            onWillAcceptWithDetails: (details) {
              if (details.data is PlaceModel || details.data is EventModel) {
                if (mounted) {
                  setState(() { _isPlaceOrEventDragOver = true; });
                }
                return true;
              }
              if (_isPlaceOrEventDragOver && mounted) {
                setState(() { _isPlaceOrEventDragOver = false; });
              }
              return false;
            },
            onAcceptWithDetails: (details) {
              widget.onPlaceOrEventDropped?.call(details.data);
              if (mounted) {
                setState(() { _isPlaceOrEventDragOver = false; });
              }
            },
            onLeave: (data) {
              if (mounted) {
                setState(() { _isPlaceOrEventDragOver = false; });
              }
            },
          )
              : interactiveItemBar,
        ),
      ]);
    });
  }
}