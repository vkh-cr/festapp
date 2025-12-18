import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/widgets/text_tooltip_widget.dart';

import 'seat_layout_controller.dart';
import '../model/seat_model.dart';
import 'seat_widget.dart';

class SeatLayoutWidget extends StatefulWidget {
  final SeatLayoutController controller;
  final void Function(SeatModel model)? onSeatTap;
  final bool? isEditorMode;
  final bool Function(SeatModel model)? shouldShowTooltipOnTap;

  static const Color _defaultBackgroundColor = Colors.white;

  const SeatLayoutWidget({
    super.key,
    required this.controller,
    this.onSeatTap,
    this.isEditorMode,
    this.shouldShowTooltipOnTap,
  });

  @override
  _SeatLayoutWidgetState createState() => _SeatLayoutWidgetState();
}

class _SeatLayoutWidgetState extends State<SeatLayoutWidget> {
  final GlobalKey _layoutKey = GlobalKey();

  @override
  void initState() {
    super.initState();
    // Attach the key and a listener to rebuild on state changes
    widget.controller.attachLayoutKey(_layoutKey);
    widget.controller.addListener(_onStateChanged);
  }

  @override
  void dispose() {
    widget.controller.removeListener(_onStateChanged);
    super.dispose();
  }

  @override
  void didUpdateWidget(covariant SeatLayoutWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    // If the controller instance changes, swap listeners
    if (widget.controller != oldWidget.controller) {
      oldWidget.controller.removeListener(_onStateChanged);
      widget.controller.attachLayoutKey(_layoutKey);
      widget.controller.addListener(_onStateChanged);
    }
  }

  // Rebuild the widget when the controller notifies
  void _onStateChanged() {
    if (mounted) {
      setState(() {});
    }
  }

  /// Helper method to build the background from either an SVG string or a URL.
  Widget _buildBackgroundWidget(String backgroundSource, double width, double height) {
    final trimmedSource = backgroundSource.trim();
    final isUrl = trimmedSource.startsWith('http://') || trimmedSource.startsWith('https://');
    final isSvg = trimmedSource.startsWith('<svg');

    if (isUrl) {
      return Image.network(
        trimmedSource,
        width: width,
        height: height,
        fit: BoxFit.cover,
        loadingBuilder: (context, child, loadingProgress) {
          if (loadingProgress == null) return child;
          return const Center(child: CircularProgressIndicator());
        },
        errorBuilder: (context, error, stackTrace) {
          return const Center(child: Icon(Icons.error_outline, color: Colors.red));
        },
      );
    }

    if (isSvg) {
      return SvgPicture.string(
        trimmedSource,
        width: width,
        height: height,
        fit: BoxFit.cover,
      );
    }

    return const SizedBox.shrink();
  }

  @override
  Widget build(BuildContext context) {
    // Get all state directly from the controller
    double layoutWidth = (widget.controller.cols * widget.controller.seatSize).toDouble();
    double layoutHeight = (widget.controller.rows * widget.controller.seatSize).toDouble();
    final backgroundSource = widget.controller.backgroundSvg;

    // Wrap InteractiveViewer in a Container and attach the key here.
    // This allows the controller to get the correct viewport size.
    return Container(
      key: _layoutKey,
      child: AnimatedOpacity(
        opacity: widget.controller.isLayoutReady ? 1.0 : 0.0,
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeInOut,
        child: InteractiveViewer(
          minScale: widget.controller.minScale,
          maxScale: 5,
          boundaryMargin: const EdgeInsets.all(double.infinity),
          constrained: false,
          transformationController: widget.controller.transformationController,
        child: RepaintBoundary(
          child: Stack(
            children: [
              // Background
              Positioned.fill(
                child: GestureDetector(
                  onTap: () {
                    widget.controller.setTooltipSeat(null);
                  },
                  behavior: HitTestBehavior.translucent,
                  child: Container(
                    width: layoutWidth,
                    height: layoutHeight,
                    decoration: BoxDecoration(
                      color: SeatLayoutWidget._defaultBackgroundColor,
                      borderRadius: BorderRadius.circular(12.0),
                    ),
                    child: backgroundSource != null && backgroundSource.isNotEmpty
                        ? ClipRRect(
                      borderRadius: BorderRadius.circular(12.0),
                      child: _buildBackgroundWidget(backgroundSource, layoutWidth, layoutHeight),
                    )
                        : null,
                  ),
                ),
              ),
              // Seats
              SizedBox(
                width: layoutWidth,
                height: layoutHeight,
                child: Stack(
                  children: widget.controller.seats
                      .where((seatModel) =>
                  (seatModel.objectModel != null &&
                      seatModel.objectModel!.id != null) ||
                      widget.isEditorMode == true)
                      .map((seatModel) {
                    return Positioned(
                      left: seatModel.colI * seatModel.seatSize.toDouble(),
                      top: seatModel.rowI * seatModel.seatSize.toDouble(),
                      child: seatModel.objectModel == null
                          ? _TouchTapListener(
                        onTap: () {
                          if (widget.onSeatTap != null) {
                            widget.onSeatTap!(seatModel);
                          }
                        },
                        child: SeatWidgetHelper.buildSeat(
                          context: context,
                          state: seatModel.seatState,
                          isHighlightedForSwap: seatModel.isHighlightedForSwap,
                          isHighlightedForGroup: seatModel.isHighlightedForGroup,
                          isHighlightedForTooltip: seatModel.isHighlightedForTooltip,
                          size: seatModel.seatSize.toDouble(),
                        ),
                      )
                          : TapRegion(
                        onTapOutside: (event) {
                          if (seatModel.isHighlightedForTooltip) {
                            widget.controller.setTooltipSeat(null);
                          }
                        },
                        child: _TouchTapListener(
                          onTap: () {
                            if (widget.shouldShowTooltipOnTap?.call(seatModel) ?? false) {
                              if (seatModel.isHighlightedForTooltip) {
                                widget.controller.setTooltipSeat(null);
                              } else {
                                widget.controller.setTooltipSeat(seatModel);
                              }
                            } else {
                              if (widget.onSeatTap != null) {
                                widget.onSeatTap!(seatModel);
                              }
                            }
                          },
                          child: TextTooltipWidget(
                            fontSize: 18.0,
                            triggerMode: (widget.shouldShowTooltipOnTap?.call(seatModel) ?? false)
                                ? TooltipTriggerMode.tap
                                : null,
                            content:
                            "${seatModel.objectModel?.blueprintTooltip(context)}",
                            child: SeatWidgetHelper.buildSeat(
                              context: context,
                              state: seatModel.seatState,
                              isHighlightedForSwap: seatModel.isHighlightedForSwap,
                              isHighlightedForGroup: seatModel.isHighlightedForGroup,
                              isHighlightedForTooltip: seatModel.isHighlightedForTooltip,
                              size: seatModel.seatSize.toDouble(),
                            ),
                          ),
                        ),
                      ),
                    );
                  }).toList(),
                ),
              ),
            ],
          ),
        ),
      ),
      ),
    );
  }
}

class _TouchTapListener extends StatefulWidget {
  final Widget child;
  final VoidCallback onTap;

  const _TouchTapListener({
    required this.child,
    required this.onTap,
  });

  @override
  State<_TouchTapListener> createState() => _TouchTapListenerState();
}

class _TouchTapListenerState extends State<_TouchTapListener> {
  Offset? _startPos;

  @override
  Widget build(BuildContext context) {
    return Listener(
      onPointerDown: (event) {
        _startPos = event.position;
      },
      onPointerUp: (event) {
        if (_startPos != null) {
          final distance = (event.position - _startPos!).distance;
          if (distance < 20.0) {
            widget.onTap();
          }
        }
        _startPos = null;
      },
      onPointerCancel: (event) {
        _startPos = null;
      },
      child: widget.child,
    );
  }
}