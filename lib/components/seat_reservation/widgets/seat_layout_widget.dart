import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/auto_resize_interactive_viewer_controller.dart';
import 'package:fstapp/widgets/text_tooltip_widget.dart';

import '../model/seat_layout_state_model.dart';
import '../model/seat_model.dart';
import '../utils/seat_state.dart';
import 'seat_widget.dart';

class SeatLayoutWidget extends StatefulWidget {
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

class _SeatLayoutWidgetState extends State<SeatLayoutWidget> {
  final TransformationController _controller = TransformationController();
  late List<SeatModel> _seats;
  double _minScale = 1.0; // Dynamic minimum scale

  @override
  void initState() {
    super.initState();

    widget.controller?.attachFitContent(_fitLayout);

    _seats = _generateSeatModels();

    _controller.addListener(_onTransformationChanged); // Add listener

    WidgetsBinding.instance.addPostFrameCallback((_) {
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
    final RenderBox renderBox = context.findRenderObject() as RenderBox;
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
      _controller.value = Matrix4.identity()
        ..scale(scaleFactor)
        ..setTranslationRaw(
          (widgetWidth - layoutWidth * scaleFactor) / 2,
          (widgetHeight - layoutHeight * scaleFactor) / 2,
          0,
        );
    });
  }

  @override
  Widget build(BuildContext context) {
    double layoutWidth = (widget.stateModel.cols * widget.stateModel.seatSize).toDouble();
    double layoutHeight = (widget.stateModel.rows * widget.stateModel.seatSize).toDouble();

    return InteractiveViewer(
      minScale: _minScale,
      maxScale: 5,
      boundaryMargin: const EdgeInsets.all(double.infinity),
      constrained: false,
      transformationController: _controller,
      child: Stack(
        children: [
          Positioned.fill(
            child: Container(
              width: layoutWidth,
              height: layoutHeight,
              decoration: BoxDecoration(
                color: widget.stateModel.backgroundSvg != null
                    ? Colors.transparent
                    : ThemeConfig.grey300(context),
                borderRadius: BorderRadius.circular(12.0),
              ),
              child: widget.stateModel.backgroundSvg != null
                  ? ClipRRect(
                borderRadius: BorderRadius.circular(12.0),
                child: SvgPicture.string(
                  widget.stateModel.backgroundSvg!,
                  width: layoutWidth,
                  height: layoutHeight,
                  fit: BoxFit.cover,
                ),
              )
                  : null,
            ),
          ),
          SizedBox(
            width: layoutWidth,
            height: layoutHeight,
            child: Stack(
              children: _seats
                  .where((seatModel) =>
              (seatModel.objectModel != null &&
                  seatModel.objectModel!.id != null) ||
                  widget.isEditorMode == true)
                  .map((seatModel) {
                return Positioned(
                  left: seatModel.colI * seatModel.seatSize.toDouble(),
                  top: seatModel.rowI * seatModel.seatSize.toDouble(),
                  child: seatModel.objectModel == null
                      ? GestureDetector(
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
                      : TextTooltipWidget(
                    content:
                    "${seatModel.objectModel?.blueprintTooltip(context)}",
                    child: GestureDetector(
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

      WidgetsBinding.instance.addPostFrameCallback((_) {
        _fitLayout();
      });
    }
  }

  void _onTransformationChanged() {
    final Matrix4 matrix = _controller.value;
    final RenderBox renderBox = context.findRenderObject() as RenderBox;

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
    double centerOffsetX =
        (widgetWidth - scaledWidth).clamp(0, double.infinity) / 2;
    double centerOffsetY =
        (widgetHeight - scaledHeight).clamp(0, double.infinity) / 2;

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
      _controller.value = matrix..setTranslationRaw(clampedX, clampedY, 0);
    }
  }
}
