import 'package:flutter/material.dart';
import 'package:collection/collection.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/components/blueprint/blueprint_object_model.dart';
import 'package:fstapp/components/seat_reservation/model/seat_model.dart';
import 'package:fstapp/components/seat_reservation/utils/seat_state.dart';

class SeatLayoutController extends ChangeNotifier {
  /// Transformation controller for the InteractiveViewer
  final TransformationController transformationController = TransformationController();

  /// The complete list of seat models representing the grid
  List<SeatModel> seats = [];

  /// Dimensions of the grid
  int rows = 0;
  int cols = 0;
  int seatSize = 15;

  /// Background SVG or Image URL string
  String? backgroundSvg;

  /// Minimum scale for the InteractiveViewer
  double minScale = 1.0;

  /// Key to get the layout widget's size for fitting content
  GlobalKey? _layoutKey;

  SeatLayoutController() {
    // Listen to transformation changes to apply boundary constraints
    transformationController.addListener(_onTransformationChanged);
  }

  /// Attaches the GlobalKey from the layout widget to this controller
  void attachLayoutKey(GlobalKey key) {
    _layoutKey = key;
  }

  /// Loads a blueprint, generates the seat grid, and fits it to the view
  void loadBlueprint(BlueprintModel model, {int newSeatSize = 15}) {
    rows = model.configuration?.height ?? 1;
    cols = model.configuration?.width ?? 1;
    seatSize = newSeatSize;
    backgroundSvg = model.backgroundSvg;
    _generateSeatModels(model.objects ?? []);

    // Fit layout after the frame is rendered
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _fitLayout();
    });

    notifyListeners();
  }

  /// Generates the list of SeatModel objects based on blueprint objects
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

  /// Updates the grid dimensions
  void setConfiguration(int newRows, int newCols) {
    rows = newRows;
    cols = newCols;
    // Re-generate seats with existing objects
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

  /// Updates the background
  void setBackground(String? svgOrUrl) {
    backgroundSvg = svgOrUrl;
    notifyListeners();
  }

  /// Programmatically updates a single seat's state
  void updateSeat(SeatModel model, SeatState newState) {
    final seat = seats.firstWhereOrNull(
            (s) => s.rowI == model.rowI && s.colI == model.colI);
    if (seat != null) {
      seat.seatState = newState;
      seat.objectModel?.stateEnum = newState; // Keep object model in sync
      notifyListeners();
    }
  }

  /// Adds a new object to the grid
  void addObject(BlueprintObjectModel objectModel) {
    if (objectModel.x == null || objectModel.y == null) return;
    final seat = seats.firstWhereOrNull(
            (s) => s.rowI == objectModel.y && s.colI == objectModel.x);
    if (seat != null) {
      seat.objectModel = objectModel;
      seat.seatState = objectModel.stateEnum ?? SeatState.available;
      notifyListeners();
    }
  }

  /// Removes an object from the grid
  void removeObject(BlueprintObjectModel objectModel) {
    if (objectModel.x == null || objectModel.y == null) return;
    final seat = seats.firstWhereOrNull(
            (s) => s.rowI == objectModel.y && s.colI == objectModel.x);
    if (seat != null) {
      seat.objectModel = null;
      seat.seatState = SeatState.empty;
      notifyListeners();
    }
  }

  /// Calculates and applies the correct scale and translation to fit the layout
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
    notifyListeners(); // Notify to update minScale
  }

  /// Listener for transformation changes to enforce boundaries
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