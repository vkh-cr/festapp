import 'package:flutter/material.dart' as seat_layout_widget;
import 'package:collection/collection.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/AutoResizeInteractiveViewerController.dart';

import '../model/seat_layout_state_model.dart';
import '../model/seat_model.dart';
import '../utils/seat_state.dart';
import 'seat_widget.dart';

class SeatLayoutWidget extends seat_layout_widget.StatefulWidget {
  final SeatLayoutStateModel stateModel;
  final AutoResizeInteractiveViewerController? controller;
  final void Function(SeatModel model)? onSeatTap;
  final bool? isEditorMode;
  const SeatLayoutWidget({
    super.key,
    required this.stateModel,
    this.controller,
    this.onSeatTap,
    this.isEditorMode,
  });

  @override
  _SeatLayoutWidgetState createState() => _SeatLayoutWidgetState();
}

class _SeatLayoutWidgetState extends seat_layout_widget.State<SeatLayoutWidget> {
  final seat_layout_widget.TransformationController _controller = seat_layout_widget.TransformationController();
  late List<SeatModel> _seats;
  double _minScale = 1.0; // Dynamic minimum scale

  @override
  void initState() {
    super.initState();

    widget.controller?.attachFitContent(_fitLayout);

    _seats = _generateSeatModels();

    _controller.addListener(_onTransformationChanged); // Add listener

    seat_layout_widget.WidgetsBinding.instance.addPostFrameCallback((_) {
      _fitLayout();
    });
  }

  @override
  void dispose() {
    _controller.removeListener(_onTransformationChanged); // Remove listener
    super.dispose();
  }

  List<SeatModel> _generateSeatModels() {
    final List<SeatModel> seats = [];
    for (int row = 0; row < widget.stateModel.rows; row++) {
      for (int col = 0; col < widget.stateModel.cols; col++) {
        var boxModel = widget.stateModel.currentObjects
            .firstWhereOrNull((b) => b.x == col && b.y == row);
        seats.add(
          SeatModel(
            objectModel: boxModel,
            seatState: boxModel?.stateEnum ?? SeatState.empty,
            rowI: row,
            colI: col,
            seatSize: widget.stateModel.seatSize,
          ),
        );
      }
    }
    return seats;
  }

  void _fitLayout() {
    if (!mounted) return;

    // Get the size of the widget (visible area)
    final seat_layout_widget.RenderBox renderBox = context.findRenderObject() as seat_layout_widget.RenderBox;
    double widgetWidth = renderBox.size.width;
    double widgetHeight = renderBox.size.height;

    // Calculate the size of the content
    int layoutWidth = widget.stateModel.cols * widget.stateModel.seatSize;
    int layoutHeight = widget.stateModel.rows * widget.stateModel.seatSize;

    // Determine the scale needed to fit the content fully within the widget
    double scaleX = widgetWidth / layoutWidth;
    double scaleY = widgetHeight / layoutHeight;
    double scaleFactor = scaleX < scaleY ? scaleX : scaleY;

    setState(() {
      _minScale = scaleFactor; // Ensure the minScale allows the content to fit fully
      _controller.value = seat_layout_widget.Matrix4.identity()
        ..scale(scaleFactor)
        ..setTranslationRaw(
          (widgetWidth - layoutWidth * scaleFactor) / 2,
          (widgetHeight - layoutHeight * scaleFactor) / 2,
          0,
        );
    });
  }

  @override
  seat_layout_widget.Widget build(seat_layout_widget.BuildContext context) {
    double layoutWidth = (widget.stateModel.cols * widget.stateModel.seatSize).toDouble();
    double layoutHeight = (widget.stateModel.rows * widget.stateModel.seatSize).toDouble();

    return seat_layout_widget.InteractiveViewer(
      minScale: _minScale,
      maxScale: 5,
      boundaryMargin: const seat_layout_widget.EdgeInsets.all(double.infinity),
      constrained: false,
      transformationController: _controller,
      child: seat_layout_widget.Stack(
        children: [
          seat_layout_widget.Positioned.fill(
            child: seat_layout_widget.Container(
              width: layoutWidth,
              height: layoutHeight,
              decoration: seat_layout_widget.BoxDecoration(
                color: widget.stateModel.backgroundSvg != null
                    ? seat_layout_widget.Colors.transparent
                    : ThemeConfig.grey300(context),
                borderRadius: seat_layout_widget.BorderRadius.circular(12.0),
              ),
              child: widget.stateModel.backgroundSvg != null
                  ? seat_layout_widget.ClipRRect(
                borderRadius: seat_layout_widget.BorderRadius.circular(12.0),
                child: SvgPicture.string(
                  widget.stateModel.backgroundSvg!,
                  width: layoutWidth,
                  height: layoutHeight,
                  fit: seat_layout_widget.BoxFit.cover,
                ),
              )
                  : null,
            ),
          ),
          seat_layout_widget.SizedBox(
            width: layoutWidth,
            height: layoutHeight,
            child: seat_layout_widget.Stack(
              children: _seats
                  .where((seatModel) =>
              (seatModel.objectModel != null &&
                  seatModel.objectModel!.id != null) ||
                  widget.isEditorMode == true)
                  .map((seatModel) {
                return seat_layout_widget.Positioned(
                  left: seatModel.colI * seatModel.seatSize.toDouble(),
                  top: seatModel.rowI * seatModel.seatSize.toDouble(),
                  child: seatModel.objectModel == null
                      ? seat_layout_widget.GestureDetector(
                    onTap: () {
                      if (widget.onSeatTap != null) {
                        widget.onSeatTap!(seatModel);
                      }
                    },
                    child: SeatWidgetHelper.buildSeat(
                      state: seatModel.seatState,
                      size: seatModel.seatSize.toDouble(),
                    ),
                  )
                      : seat_layout_widget.Tooltip(
                    showDuration: const Duration(seconds: 0),
                    message:
                    "${seatModel.objectModel?.blueprintTooltip(context)}",
                    child: seat_layout_widget.GestureDetector(
                      onTap: () {
                        if (widget.onSeatTap != null) {
                          widget.onSeatTap!(seatModel);
                        }
                      },
                      child: SeatWidgetHelper.buildSeat(
                        state: seatModel.seatState,
                        size: seatModel.seatSize.toDouble(),
                      ),
                    ),
                    decoration: seat_layout_widget.BoxDecoration(
                      color: ThemeConfig.whiteColor(context),
                      borderRadius: seat_layout_widget.BorderRadius.circular(8.0),
                      border: seat_layout_widget.Border.all(
                        width: 2,
                        color: ThemeConfig.blackColor(context),
                      ),
                    ),
                    textStyle: seat_layout_widget.TextStyle(
                      fontSize: 16.0,
                      color: ThemeConfig.blackColor(context),
                    ),
                    verticalOffset: 20.0,
                  ),
                );
              }).toList(),
            ),
          ),
        ],
      ),
    );
  }

  @override
  void didUpdateWidget(covariant SeatLayoutWidget oldWidget) {
    super.didUpdateWidget(oldWidget);

    // Check if rows or columns have changed
    if (widget.stateModel.rows != oldWidget.stateModel.rows ||
        widget.stateModel.cols != oldWidget.stateModel.cols ||
        !const DeepCollectionEquality().equals(
            widget.stateModel.currentObjects, oldWidget.stateModel.currentObjects)) {
      setState(() {
        _seats = _generateSeatModels();
      });

      seat_layout_widget.WidgetsBinding.instance.addPostFrameCallback((_) {
        _fitLayout();
      });
    }
  }

  void _onTransformationChanged() {
    final seat_layout_widget.Matrix4 matrix = _controller.value;
    final seat_layout_widget.RenderBox renderBox = context.findRenderObject() as seat_layout_widget.RenderBox;

    double widgetWidth = renderBox.size.width;
    double widgetHeight = renderBox.size.height;

    int layoutWidth = widget.stateModel.cols * widget.stateModel.seatSize;
    int layoutHeight = widget.stateModel.rows * widget.stateModel.seatSize;

    double scale = matrix.getMaxScaleOnAxis();
    double translateX = matrix.getTranslation().x;
    double translateY = matrix.getTranslation().y;

    // Calculate the scaled content size
    double scaledWidth = layoutWidth * scale;
    double scaledHeight = layoutHeight * scale;

    // Calculate the center offsets for zoomed-out state
    double centerOffsetX = (widgetWidth - scaledWidth).clamp(0, double.infinity) / 2;
    double centerOffsetY = (widgetHeight - scaledHeight).clamp(0, double.infinity) / 2;

    // Clamping ranges for each side
    double minX = widgetWidth < scaledWidth ? widgetWidth - scaledWidth : centerOffsetX;
    double maxX = widgetWidth < scaledWidth ? 0 : centerOffsetX;
    double minY = widgetHeight < scaledHeight ? widgetHeight - scaledHeight : centerOffsetY;
    double maxY = widgetHeight < scaledHeight ? 0 : centerOffsetY;

    // Clamp translation to prevent empty spaces
    double clampedX = translateX.clamp(minX, maxX);
    double clampedY = translateY.clamp(minY, maxY);

    // Apply only if there is a change
    if (clampedX != translateX || clampedY != translateY) {
      _controller.value = matrix
        ..setTranslationRaw(clampedX, clampedY, 0);
    }
  }
}

