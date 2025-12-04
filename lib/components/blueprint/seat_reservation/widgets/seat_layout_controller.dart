import 'package:flutter/material.dart';
import 'package:collection/collection.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/components/blueprint/blueprint_object_model.dart';

import '../../blueprint_group.dart';
import '../model/seat_model.dart';
import '../utils/seat_state.dart';

class SeatLayoutController extends ChangeNotifier {
  final TransformationController transformationController = TransformationController();
  List<SeatModel> seats = [];
  int rows = 0;
  int cols = 0;
  int seatSize = 15;
  String? backgroundSvg;
  double minScale = 1.0;
  GlobalKey? _layoutKey;

  SeatLayoutController() {
    transformationController.addListener(_onTransformationChanged);
  }

  void attachLayoutKey(GlobalKey key) {
    _layoutKey = key;
  }

  void loadBlueprint(BlueprintModel model, {int newSeatSize = 15}) {
    rows = model.configuration?.height ?? 1;
    cols = model.configuration?.width ?? 1;
    seatSize = newSeatSize;
    backgroundSvg = model.backgroundSvg;
    _generateSeatModels(model.objects ?? []);

    WidgetsBinding.instance.addPostFrameCallback((_) {
      _fitLayout();
    });

    notifyListeners();
  }

  void _generateSeatModels(List<BlueprintObjectModel> objects) {
    final List<SeatModel> newSeats = [];
    for (int row = 0; row < rows; row++) {
      for (int col = 0; col < cols; col++) {
        var boxModel =
        objects.firstWhereOrNull((b) => b.x == col && b.y == row);
        newSeats.add(
          SeatModel(
            objectModel: boxModel,
            seatState: boxModel?.stateEnum ?? SeatState.empty,
            rowI: row,
            colI: col,
            seatSize: seatSize,
          ),
        );
      }
    }
    seats = newSeats;
  }

  void setConfiguration(int newRows, int newCols) {
    rows = newRows;
    cols = newCols;
    final objects = seats
        .map((s) => s.objectModel)
        .whereNotNull()
        .where((o) => o.x! < newCols && o.y! < newRows)
        .toList();
    _generateSeatModels(objects);

    WidgetsBinding.instance.addPostFrameCallback((_) {
      _fitLayout();
    });

    notifyListeners();
  }

  void setBackground(String? svgOrUrl) {
    backgroundSvg = svgOrUrl;
    notifyListeners();
  }

  /// Updates both the visual seat state AND the underlying data model.
  /// Use this for permanent changes (Edit mode).
  void updateSeat(SeatModel model, SeatState newState) {
    final seat = seats.firstWhereOrNull(
            (s) => s.rowI == model.rowI && s.colI == model.colI);
    if (seat != null) {
      seat.seatState = newState;
      seat.objectModel?.stateEnum = newState;
      notifyListeners();
    }
  }

  /// NEW: Updates ONLY the visual appearance of the seat.
  /// Use this for temporary selections (Create Order, Swapping) so the
  /// underlying data (objectModel) remains untouched for saving.
  void updateVisualState(SeatModel model, SeatState visualState) {
    final seat = seats.firstWhereOrNull(
            (s) => s.rowI == model.rowI && s.colI == model.colI);
    if (seat != null) {
      seat.seatState = visualState;
      notifyListeners();
    }
  }

  void setSeatHighlight(SeatModel model, bool isHighlighted) {
    final seat = seats.firstWhereOrNull(
            (s) => s.rowI == model.rowI && s.colI == model.colI);
    if (seat != null) {
      seat.isHighlightedForSwap = isHighlighted;
      notifyListeners();
    }
  }

  void addObject(BlueprintObjectModel objectModel, {bool isHighlighted = false}) {
    if (objectModel.x == null || objectModel.y == null) return;
    final seat = seats.firstWhereOrNull(
            (s) => s.rowI == objectModel.y && s.colI == objectModel.x);
    if (seat != null) {
      seat.objectModel = objectModel;
      seat.seatState = objectModel.stateEnum ?? SeatState.available;
      seat.isHighlightedForGroup = isHighlighted;
      notifyListeners();
    }
  }

  void removeObject(BlueprintObjectModel objectModel) {
    if (objectModel.x == null || objectModel.y == null) return;
    final seat = seats.firstWhereOrNull(
            (s) => s.rowI == objectModel.y && s.colI == objectModel.x);
    if (seat != null) {
      seat.objectModel = null;
      seat.seatState = SeatState.empty;
      seat.isHighlightedForGroup = false;
      notifyListeners();
    }
  }

  void setHighlightedGroup(BlueprintGroupModel? group) {
    for (final seat in seats) {
      seat.isHighlightedForGroup = false;
    }

    if (group != null) {
      final groupObjectIds = group.objects.map((o) => o.id).toSet();
      for (final seat in seats) {
        if (seat.objectModel != null && groupObjectIds.contains(seat.objectModel!.id)) {
          seat.isHighlightedForGroup = true;
        }
      }
    }
    notifyListeners();
  }

  void setTooltipSeat(SeatModel? model) {
    // Clear previous tooltip highlight
    for (final seat in seats) {
      seat.isHighlightedForTooltip = false;
    }

    if (model != null) {
      final seat = seats.firstWhereOrNull(
              (s) => s.rowI == model.rowI && s.colI == model.colI);
      if (seat != null) {
        seat.isHighlightedForTooltip = true;
      }
    }
    notifyListeners();
  }

  void _fitLayout() {
    if (_layoutKey?.currentContext == null) return;

    final RenderBox? renderBox =
    _layoutKey!.currentContext!.findRenderObject() as RenderBox?;
    if (renderBox == null || !renderBox.hasSize) return;

    double widgetWidth = renderBox.size.width;
    double widgetHeight = renderBox.size.height;

    if (widgetWidth <= 0 || widgetHeight <= 0) return;

    double layoutWidth = (cols * seatSize).toDouble();
    double layoutHeight = (rows * seatSize).toDouble();

    if (layoutWidth <= 0 || layoutHeight <= 0) return;

    double scaleX = widgetWidth / layoutWidth;
    double scaleY = widgetHeight / layoutHeight;
    double scaleFactor = scaleX < scaleY ? scaleX : scaleY;

    minScale = scaleFactor;
    transformationController.value = Matrix4.identity()
      ..scale(scaleFactor)
      ..setTranslationRaw(
        (widgetWidth - layoutWidth * scaleFactor) / 2,
        (widgetHeight - layoutHeight * scaleFactor) / 2,
        0,
      );
    notifyListeners();
  }

  void _onTransformationChanged() {
    if (_layoutKey?.currentContext == null) return;

    final RenderBox? renderBox =
    _layoutKey!.currentContext!.findRenderObject() as RenderBox?;
    if (renderBox == null || !renderBox.hasSize) return;

    final Matrix4 matrix = transformationController.value;
    double widgetWidth = renderBox.size.width;
    double widgetHeight = renderBox.size.height;

    double layoutWidth = (cols * seatSize).toDouble();
    double layoutHeight = (rows * seatSize).toDouble();

    double scale = matrix.getMaxScaleOnAxis();
    double translateX = matrix.getTranslation().x;
    double translateY = matrix.getTranslation().y;

    double scaledWidth = layoutWidth * scale;
    double scaledHeight = layoutHeight * scale;

    double centerOffsetX =
        (widgetWidth - scaledWidth).clamp(0, double.infinity) / 2;
    double centerOffsetY =
        (widgetHeight - scaledHeight).clamp(0, double.infinity) / 2;

    double minX =
    widgetWidth < scaledWidth ? widgetWidth - scaledWidth : centerOffsetX;
    double maxX = widgetWidth < scaledWidth ? 0 : centerOffsetX;
    double minY =
    widgetHeight < scaledHeight ? widgetHeight - scaledHeight : centerOffsetY;
    double maxY = widgetHeight < scaledHeight ? 0 : centerOffsetY;

    double clampedX = translateX.clamp(minX, maxX);
    double clampedY = translateY.clamp(minY, maxY);

    if (clampedX != translateX || clampedY != translateY) {
      transformationController.value = matrix
        ..setTranslationRaw(clampedX, clampedY, 0);
    }
  }

  @override
  void dispose() {
    transformationController.removeListener(_onTransformationChanged);
    transformationController.dispose();
    super.dispose();
  }
}