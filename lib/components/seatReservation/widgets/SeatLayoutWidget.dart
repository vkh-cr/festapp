import 'package:flutter/material.dart';
import 'package:collection/collection.dart';

import '../model/SeatLayoutStateModel.dart';
import '../model/SeatModel.dart';
import '../utils/SeatState.dart';
import 'SeatWidget.dart';

class SeatLayoutWidget extends StatefulWidget {
  final SeatLayoutStateModel stateModel;
  final SeatLayoutWidgetController? controller;
  final void Function(SeatModel model)? onSeatTap;

  const SeatLayoutWidget({
    Key? key,
    required this.stateModel,
    this.controller,
    this.onSeatTap,
  }) : super(key: key);

  @override
  _SeatLayoutWidgetState createState() => _SeatLayoutWidgetState();
}

class _SeatLayoutWidgetState extends State<SeatLayoutWidget> {
  final TransformationController _controller = TransformationController();
  late List<SeatModel> _seats;

  @override
  void initState() {
    super.initState();

    widget.controller?.attachFitLayout(_fitLayout);

    _seats = _generateSeatModels();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      _fitLayout();
    });
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

    final RenderBox renderBox = context.findRenderObject() as RenderBox;
    double widgetWidth = renderBox.size.width;
    double widgetHeight = renderBox.size.height;

    int layoutWidth = widget.stateModel.cols * widget.stateModel.seatSize;
    int layoutHeight = widget.stateModel.rows * widget.stateModel.seatSize;

    double scaleX = widgetWidth / layoutWidth;
    double scaleY = widgetHeight / layoutHeight;
    double scaleFactor = scaleX < scaleY ? scaleX : scaleY;

    setState(() {
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
    return InteractiveViewer(
      minScale: 0.1,
      maxScale: 5,
      boundaryMargin: const EdgeInsets.all(double.infinity),
      constrained: false,
      transformationController: _controller,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: List.generate(widget.stateModel.rows, (rowI) {
          return Row(
            mainAxisSize: MainAxisSize.min,
            children: List.generate(widget.stateModel.cols, (colI) {
              final seatModel =
              _seats.firstWhere((seat) => seat.rowI == rowI && seat.colI == colI);
              return Tooltip(
                showDuration: const Duration(seconds: 0),
                message: seatModel.objectModel?.title ?? "",
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
              );
            }),
          );
        }),
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
}

class SeatLayoutWidgetController {
  Function()? _fitLayout;

  /// Attach a fit layout method
  void attachFitLayout(Function()? fitLayout) {
    _fitLayout = fitLayout;
  }

  /// Call the fit layout method
  void fitLayout() {
    _fitLayout?.call();
  }
}
