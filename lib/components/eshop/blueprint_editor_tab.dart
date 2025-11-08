import 'dart:typed_data';

import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/components/blueprint/blueprint_strings.dart';
import 'package:fstapp/components/seat_reservation/widgets/seat_layout_controller.dart';
import 'package:fstapp/components/seat_reservation/widgets/seat_widget.dart';
import 'package:fstapp/components/blueprint/blueprint_group.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/components/blueprint/blueprint_object_model.dart';
import 'package:fstapp/components/eshop/models/product_model.dart';
import 'package:fstapp/data_services/db_images.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services_eshop/db_forms.dart';
import 'package:fstapp/data_services_eshop/db_spots.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/image_compression_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/components/seat_reservation/widgets/seat_reservation_widget.dart';
import 'package:collection/collection.dart';

import '../_shared/common_strings.dart';
import '../seat_reservation/model/seat_model.dart';
import '../seat_reservation/utils/seat_state.dart';
import '../seat_reservation/widgets/seat_layout_widget.dart';

class BlueprintTab extends StatefulWidget {

  const BlueprintTab({super.key});

  @override
  State<BlueprintTab> createState() => _BlueprintTabState();
}

class _BlueprintTabState extends State<BlueprintTab> {
  BlueprintModel? blueprint;
  BlueprintGroupModel? currentGroup;
  String? occasionLink;

  selectionMode currentSelectionMode = selectionMode.none;
  late final SeatLayoutController _seatLayoutController;

  // State for Swap Seats feature
  SeatModel? _seatToSwap1;
  SeatModel? _seatToSwap2;

  @override
  void initState() {
    super.initState();
    _seatLayoutController = SeatLayoutController();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (occasionLink == null && context.routeData.params.isNotEmpty) {
      occasionLink = context.routeData.params.getString(AppRouter.linkFormatted);
    }
    loadData();
  }

  @override
  void dispose() {
    _seatLayoutController.dispose();
    super.dispose();
  }

  /// Helper to get all seats that have an object model
  List<SeatModel> get _allNonEmptySeats => _seatLayoutController.seats
      .where((s) => s.objectModel != null)
      .toList();

  /// Helper to check if a seat is in a state that prevents modification
  bool _isSeatOccupied(BlueprintObjectModel? obj) {
    if (obj == null || obj.stateEnum == null) return false;
    final state = obj.stateEnum;
    return state == SeatState.ordered ||
        state == SeatState.used ||
        state == SeatState.selected ||
        state == SeatState.selected_by_me;
  }

  /// Checks if decreasing width is safe (won't cut off seats)
  bool _canDecreaseWidth() {
    if (blueprint == null) return false;
    int newValue = blueprint!.configuration!.width! - 1;
    if (newValue <= 0) return false; // Can't go below 1

    int maxX = -1;
    for (var seat in _allNonEmptySeats) {
      if (seat.objectModel!.x! > maxX) {
        maxX = seat.objectModel!.x!;
      }
    }
    // If new value (1-based count) is <= max 0-based index, a seat would be cut off.
    if (newValue <= maxX) {
      return false; // Not safe
    }
    return true; // Safe
  }

  /// Checks if decreasing height is safe (won't cut off seats)
  bool _canDecreaseHeight() {
    if (blueprint == null) return false;
    int newValue = blueprint!.configuration!.height! - 1;
    if (newValue <= 0) return false; // Can't go below 1

    int maxY = -1;
    for (var seat in _allNonEmptySeats) {
      if (seat.objectModel!.y! > maxY) {
        maxY = seat.objectModel!.y!;
      }
    }
    // If new value (1-based count) is <= max 0-based index, a seat would be cut off.
    if (newValue <= maxY) {
      return false; // Not safe
    }
    return true; // Safe
  }

  Widget _buildDesktopLayout() {
    return Row(
      children: [
        Container(
          width: 250,
          padding: const EdgeInsets.all(16.0),
          child: _buildLeftPanel(),
        ),
        const SizedBox(width: 16),
        Expanded(
          child: _buildMainContent(),
        ),
        const SizedBox(width: 16),
        Container(
          width: 250,
          padding: const EdgeInsets.all(16.0),
          child: _buildRightPanel(),
        ),
      ],
    );
  }

  Widget _buildMobileLayout() {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 250,
            padding: const EdgeInsets.all(16.0),
            child: _buildLeftPanel(),
          ),
          SizedBox(
            width: 400,
            child: _buildMainContent(),
          ),
          Container(
            width: 250,
            padding: const EdgeInsets.all(16.0),
            child: _buildRightPanel(),
          ),
        ],
      ),
    );
  }

  Widget _buildLeftPanel() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(bottom: 16.0),
          child: Text(
            currentSelectionMode == selectionMode.swapSeats
                ? BlueprintStrings.swapHelpIntro
                : BlueprintStrings.legendInstruction,
            style: Theme.of(context).textTheme.bodySmall,
            textAlign: TextAlign.left,
          ),
        ),
        buildLegend(),
      ],
    );
  }

  Widget _buildMainContent() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        const SizedBox(height: 16),
        blueprint == null ? const SizedBox.shrink() : buildDimensionControls(),
        const SizedBox(height: 16),
        Flexible(
          child: blueprint == null
              ? const Center(child: CircularProgressIndicator())
              : SeatLayoutWidget(
            isEditorMode: true,
            controller: _seatLayoutController,
            onSeatTap: handleSeatTap,
          ),
        ),
        const SizedBox(height: 16),
      ],
    );
  }

  Widget _buildRightPanel() {
    return buildGroupsSection();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: Text(blueprint?.title ?? BlueprintStrings.edit),
        actions: [
          IconButton(
            icon: const Icon(Icons.edit),
            tooltip: BlueprintStrings.changeTitle,
            onPressed: RightsService.canEditOccasion() ? editBlueprintTitle : null,
          ),
        ],
      ),
      body: SafeArea(
        child: LayoutBuilder(
          builder: (context, constraints) {
            if (constraints.maxWidth > 800) {
              return _buildDesktopLayout();
            } else {
              return _buildMobileLayout();
            }
          },
        ),
      ),
      bottomNavigationBar: Container(
        color: ThemeConfig.appBarColor(),
        padding: const EdgeInsets.all(8.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            TextButton(
              onPressed: RightsService.canEditOccasion() ? () => Navigator.pop(context) : null,
              style: TextButton.styleFrom(
                foregroundColor: Colors.white,
              ),
              child: Text(CommonStrings.storno),
            ),
            const SizedBox(width: 16),
            ElevatedButton(
              onPressed: RightsService.canEditOccasion() ? saveChanges : null,
              child: Text(CommonStrings.save),
            ),
          ],
        ),
      ),
    );
  }

  Widget buildGroupsSection() {
    return blueprint == null
        ? const Center(child: CircularProgressIndicator())
        : Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              BlueprintStrings.groupsTitle,
              style: Theme.of(context).textTheme.titleMedium,
            ),
            Row(
              children: [
                IconButton(
                  icon: const Icon(Icons.add),
                  tooltip: CommonStrings.addNew,
                  onPressed: RightsService.canEditOccasion() ? addGroup : null,
                ),
                IconButton(
                  icon: const Icon(Icons.delete),
                  tooltip: CommonStrings.delete,
                  onPressed: RightsService.canEditOccasion() ? deleteGroup : null,
                ),
                IconButton(
                  icon: const Icon(Icons.edit),
                  tooltip: CommonStrings.rename,
                  onPressed: RightsService.canEditOccasion() ? renameGroup : null,
                ),
              ],
            ),
          ],
        ),
        const SizedBox(height: 8),
        Expanded(
          child: ListView.builder(
            itemCount: blueprint!.groups!.length,
            itemBuilder: (context, index) {
              final group = blueprint!.groups![index];
              final isSelected = currentGroup == group;
              return GestureDetector(
                onTap: () {
                  setState(() {
                    currentGroup = group;
                  });
                },
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  margin: const EdgeInsets.symmetric(vertical: 4),
                  padding: const EdgeInsets.symmetric(
                      vertical: 8, horizontal: 12),
                  decoration: BoxDecoration(
                    color: isSelected
                        ? Theme.of(context)
                        .colorScheme
                        .primary
                        .withOpacity(0.2)
                        : Colors.transparent,
                    border: Border.all(
                      color: isSelected
                          ? Theme.of(context).colorScheme.primary
                          : Colors.grey,
                      width: isSelected ? 2 : 1,
                    ),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        group.title!,
                        style: Theme.of(context)
                            .textTheme
                            .bodyMedium
                            ?.copyWith(
                          color: isSelected
                              ? Theme.of(context).colorScheme.primary
                              : null,
                          fontWeight:
                          isSelected ? FontWeight.bold : null,
                        ),
                      ),
                      Row(
                        children: [
                          Text(
                            "(${group.objects.length})",
                            style: Theme.of(context).textTheme.bodySmall,
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }

  void addGroup() async {
    final defaultName = "${blueprint!.groups!.length + 1}";

    final newTitle = await DialogHelper.showInputDialog(
      context: context,
      dialogTitle: CommonStrings.addNew,
      labelText: BlueprintStrings.dialogGroupNumber,
      initialValue: defaultName,
    );

    if (newTitle != null && newTitle.isNotEmpty) {
      final newGroup = BlueprintGroupModel(
          title: newTitle, id: blueprint!.getFirstAvailableGroupId());

      setState(() {
        blueprint!.groups!.add(newGroup);
        blueprint!.groups!
            .sort((a, b) => Utilities.naturalCompare(a.title!, b.title!));
        currentGroup = newGroup;
      });
    }
  }

  void deleteGroup() {
    if (currentGroup == null) return;

    // Check if any seat in the group is occupied
    final bool hasOccupiedSeats = currentGroup!.objects.any(_isSeatOccupied);

    if (hasOccupiedSeats) {
      // If any seat is occupied, show toast and abort deletion
      ToastHelper.Show(context, BlueprintStrings.toastOccupiedCannotBeChanged, severity: ToastSeverity.NotOk);
      return;
    }

    // If no seats are occupied, proceed with deleting all seats and the group
    final objectsToRemove = List<BlueprintObjectModel>.from(currentGroup!.objects);

    for (var obj in objectsToRemove) {
      blueprint!.objects!.remove(obj);
      _seatLayoutController.removeObject(obj);
    }

    setState(() {
      blueprint!.groups!.remove(currentGroup);
      currentGroup = null;
    });
  }

  void renameGroup() async {
    if (currentGroup == null) return;

    final newTitle = await DialogHelper.showInputDialog(
      context: context,
      dialogTitle: CommonStrings.rename,
      labelText: BlueprintStrings.dialogTitle,
      initialValue: currentGroup!.title,
    );

    if (newTitle != null && newTitle.isNotEmpty) {
      setState(() {
        currentGroup!.title = newTitle;
        blueprint!.groups!.sort((a,b) => Utilities.naturalCompare(a.title!, b.title!));
      });
    }
  }

  Widget buildLegend() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        buildLegendItem(
          label: BlueprintStrings.legendBlackArea,
          state: SeatState.black,
          isActive: currentSelectionMode == selectionMode.addBlack,
          onTap: () {
            _clearSwapSelection();
            setState(() {
              currentSelectionMode = selectionMode.addBlack;
            });
          },
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          label: BlueprintStrings.legendAvailable,
          state: SeatState.available,
          isActive: currentSelectionMode == selectionMode.addAvailable,
          onTap: () {
            _clearSwapSelection();
            setState(() {
              currentSelectionMode = selectionMode.addAvailable;
            });
          },
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          label: BlueprintStrings.legendEmpty,
          state: SeatState.empty,
          isActive: currentSelectionMode == selectionMode.emptyArea,
          onTap: () {
            _clearSwapSelection();
            setState(() {
              currentSelectionMode = selectionMode.emptyArea;
            });
          },
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          label: BlueprintStrings.legendSwapSeats,
          state: SeatState.empty,
          isActive: currentSelectionMode == selectionMode.swapSeats,
          forceHighlight: true,
          onTap: () {
            setState(() {
              currentSelectionMode = selectionMode.swapSeats;
            });
            ToastHelper.Show(context, BlueprintStrings.swapHelpSelectFirst);
          },
        ),
        const SizedBox(height: 8),
        const Divider(),
        const SizedBox(height: 8),
        buildLegendItem(
          label: BlueprintStrings.legendUsed,
          state: SeatState.used,
          isActive: false,
          grayedOut: true,
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          label: BlueprintStrings.legendOccupied,
          state: SeatState.ordered,
          isActive: false,
          grayedOut: true,
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          label: BlueprintStrings.legendSelected,
          state: SeatState.selected_by_me,
          isActive: false,
          grayedOut: true,
        ),
      ],
    );
  }

  Widget buildLegendItem({
    required String label,
    required SeatState state,
    bool isActive = false,
    VoidCallback? onTap,
    bool grayedOut = false,
    bool forceHighlight = false,
  }) {
    return MouseRegion(
      cursor: grayedOut ? SystemMouseCursors.forbidden : SystemMouseCursors.click,
      child: GestureDetector(
        onTap: grayedOut ? null : onTap,
        child: Opacity(
          opacity: grayedOut ? 0.8 : 1.0,
          child: Container(
            decoration: BoxDecoration(
              border: Border.all(
                color: isActive
                    ? Theme.of(context).colorScheme.primary
                    : Colors.transparent,
                width: 2,
              ),
              borderRadius: BorderRadius.circular(4),
            ),
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                SeatWidgetHelper.buildSeat(
                  context: context,
                  state: state,
                  isHighlighted: forceHighlight,
                  size: SeatReservationWidget.boxSize.toDouble(),
                ),
                const SizedBox(width: 4),
                Text(
                  label,
                  style: TextStyle(
                    color: grayedOut ? Colors.grey : null,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget buildDimensionControls() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        buildDimensionEditor(
          label: BlueprintStrings.width,
          currentValue: blueprint!.configuration!.width!,
          isDecreaseEnabled: _canDecreaseWidth(), // Pass the check result
          onChanged: (value) {
            // Allow change
            setState(() {
              blueprint!.configuration!.width = value;
            });
            _seatLayoutController.setConfiguration(
                blueprint!.configuration!.height!, value);
          },
        ),
        const SizedBox(width: 12),
        buildDimensionEditor(
          label: BlueprintStrings.height,
          currentValue: blueprint!.configuration!.height!,
          isDecreaseEnabled: _canDecreaseHeight(), // Pass the check result
          onChanged: (value) {
            // Allow change
            setState(() {
              blueprint!.configuration!.height = value;
            });
            _seatLayoutController.setConfiguration(
                value, blueprint!.configuration!.width!);
          },
        ),
        const SizedBox(width: 24),
        _buildBackgroundControls(),
      ],
    );
  }

  Widget _buildBackgroundControls() {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        PopupMenuButton<String>(
          tooltip: BlueprintStrings.changeBackground,
          onSelected: (value) {
            if (value == 'svg') {
              _uploadSvgBackground();
            } else if (value == 'image') {
              _uploadImageBackground();
            }
          },
          itemBuilder: (BuildContext context) => <PopupMenuEntry<String>>[
            PopupMenuItem<String>(
              value: 'svg',
              child: Text(BlueprintStrings.uploadSVG),
            ),
            PopupMenuItem<String>(
              value: 'image',
              child: Text(BlueprintStrings.uploadImage),
            ),
          ],
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 8.0),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(BlueprintStrings.background),
                const SizedBox(width: 8),
                const Icon(Icons.grid_on),
              ],
            ),
          ),
        ),
        if (blueprint?.backgroundSvg != null && blueprint!.backgroundSvg!.isNotEmpty)
          IconButton(
            icon: const Icon(Icons.delete_outline),
            tooltip: BlueprintStrings.removeBackground,
            onPressed: _removeBackground,
          ),
      ],
    );
  }


  Widget buildDimensionEditor({
    required String label,
    required int currentValue,
    required ValueChanged<int> onChanged,
    bool isDecreaseEnabled = true, // New parameter
  }) {
    return Column(
      children: [
        Text(
          label,
          style: const TextStyle(
            fontSize: 12,
          ),
        ),
        const SizedBox(height: 4),
        Row(
          children: [
            IconButton(
              icon: const Icon(Icons.remove),
              iconSize: 16,
              padding: const EdgeInsets.all(4),
              constraints: const BoxConstraints(),
              // Use the flag here to disable the button
              onPressed: isDecreaseEnabled
                  ? () {
                if (currentValue > 1) {
                  onChanged(currentValue - 1);
                }
              }
                  : null,
            ),
            Text(
              "$currentValue",
              style: const TextStyle(
                fontSize: 14,
              ),
            ),
            IconButton(
              icon: const Icon(Icons.add),
              iconSize: 16,
              padding: const EdgeInsets.all(4),
              constraints: const BoxConstraints(),
              onPressed: () {
                onChanged(currentValue + 1);
              },
            ),
          ],
        ),
      ],
    );
  }

  Widget buildEditorActions() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        ElevatedButton(
          onPressed: () => Navigator.pop(context),
          child: Text(CommonStrings.storno),
        ),
        const SizedBox(width: 12),
        ElevatedButton(
          onPressed: saveChanges,
          child: Text(CommonStrings.save),
        ),
      ],
    );
  }

  void editBlueprintTitle() async {
    final newTitle = await DialogHelper.showInputDialog(
      context: context,
      dialogTitle: BlueprintStrings.changeTitle,
      labelText: BlueprintStrings.dialogTitle,
      initialValue: blueprint?.title ?? "",
    );

    if (newTitle != null && newTitle.isNotEmpty) {
      setState(() {
        blueprint!.title = newTitle;
      });
    }
  }

  void handleSeatTap(SeatModel model) {
    switch (currentSelectionMode) {
      case selectionMode.addBlack:
        _handleAddBlack(model);
        break;
      case selectionMode.addAvailable:
        _handleAddAvailable(model);
        break;
      case selectionMode.emptyArea:
        _handleEmptyArea(model);
        break;
      case selectionMode.swapSeats:
        _handleSwapSeats(model);
        break;
      default:
      // Handle other cases or do nothing
        if (_isSeatOccupied(model.objectModel)) {
          ToastHelper.Show(context, BlueprintStrings.toastOccupiedCannotBeChanged, severity: ToastSeverity.NotOk);
        }
        break;
    }
  }

  void _handleAddBlack(SeatModel model) {
    // Check if the seat is occupied
    if (_isSeatOccupied(model.objectModel)) {
      ToastHelper.Show(context, BlueprintStrings.toastOccupiedCannotBeChanged, severity: ToastSeverity.NotOk);
      return;
    }

    model.seatState = SeatState.black;

    if (model.objectModel != null && model.objectModel!.type == BlueprintModel.metaTableAreaType) {
      return;
    }
    if (model.objectModel != null && model.objectModel!.type != BlueprintModel.metaTableAreaType) {
      blueprint!.objects!.remove(model.objectModel!);
    }
    model.objectModel = model.objectModel ?? BlueprintObjectModel(x: model.colI, y: model.rowI);
    model.objectModel!.type = BlueprintModel.metaTableAreaType;
    model.objectModel!.setSeatState(SeatState.black); // Use new method
    blueprint!.objects!.add(model.objectModel!);
    _seatLayoutController.addObject(model.objectModel!);
  }

  void _handleAddAvailable(SeatModel model) {
    // Check if the seat is occupied
    if (_isSeatOccupied(model.objectModel)) {
      ToastHelper.Show(context, BlueprintStrings.toastOccupiedCannotBeChanged, severity: ToastSeverity.NotOk);
      return;
    }

    if(currentGroup == null){
      ToastHelper.Show(context, BlueprintStrings.toastSelectGroupFirst, severity: ToastSeverity.NotOk);
      return;
    }

    model.seatState = SeatState.available;

    if (model.objectModel != null && model.objectModel!.type == BlueprintModel.metaSpotType) {
      return;
    }

    if (model.objectModel != null && model.objectModel!.type != BlueprintModel.metaSpotType) {
      blueprint!.objects!.remove(model.objectModel!);
    }

    model.objectModel = model.objectModel ?? BlueprintObjectModel(x: model.colI, y: model.rowI);
    model.objectModel!.type = BlueprintModel.metaSpotType;
    model.objectModel!.setSeatState(SeatState.available); // Use new method
    model.objectModel!.product = blueprint!.products?.firstWhereOrNull((p)=>p.productTypeString == ProductModel.spotType);
    model.objectModel!.group = currentGroup;
    model.objectModel!.title = currentGroup?.getNextBoxName().toUpperCase();

    currentGroup?.objects.add(model.objectModel!);
    blueprint!.objects!.add(model.objectModel!);
    _seatLayoutController.addObject(model.objectModel!);
    ToastHelper.Show(context, "${BlueprintStrings.toastSpotAdded} ${model.objectModel!.title}");
  }

  void _handleEmptyArea(SeatModel model) {
    var objectToRemove = model.objectModel;
    if (objectToRemove != null) {
      // Check if the seat is occupied
      if (_isSeatOccupied(objectToRemove)) {
        ToastHelper.Show(context, BlueprintStrings.toastOccupiedCannotBeChanged, severity: ToastSeverity.NotOk);
        return;
      }

      if (model.seatState == SeatState.black) {
        ToastHelper.Show(context, BlueprintStrings.toastAreaRemoved);
      } else {
        ToastHelper.Show(context, BlueprintStrings.toastSpotRemoved);
      }
      blueprint!.objects!.remove(objectToRemove);
      for (var group in blueprint!.groups!) {
        group.objects.remove(objectToRemove);
      }
      _seatLayoutController.removeObject(objectToRemove);
      model.objectModel = null;
      model.seatState = SeatState.empty;
    }
  }

  void _handleSwapSeats(SeatModel model) {
    final obj = model.objectModel;
    // Prevent swapping black or empty areas
    if (obj == null || obj.stateEnum == SeatState.black || obj.stateEnum == SeatState.empty) {
      ToastHelper.Show(context, BlueprintStrings.swapErrorEmpty, severity: ToastSeverity.NotOk);
      return;
    }

    // Check if deselecting
    if (model == _seatToSwap1) {
      _seatLayoutController.setSeatHighlight(model, false);
      _seatToSwap1 = null;
      return;
    }
    if (model == _seatToSwap2) {
      _seatLayoutController.setSeatHighlight(model, false);
      _seatToSwap2 = null;
      return;
    }

    // Check if selecting first seat
    if (_seatToSwap1 == null) {
      _seatToSwap1 = model;
      _seatLayoutController.setSeatHighlight(model, true);
      ToastHelper.Show(context, BlueprintStrings.swapHelpSelectSecond(obj.toShortString()));
      return;
    }

    // Check if selecting second seat
    if (_seatToSwap2 == null) {
      _seatToSwap2 = model;
      _seatLayoutController.setSeatHighlight(model, true);
      // Both seats selected, show confirmation
      _showSwapConfirmationDialog();
    }
  }

  void _showSwapConfirmationDialog() async {
    if (_seatToSwap1 == null || _seatToSwap2 == null) return;

    final obj1 = _seatToSwap1!.objectModel!;
    final obj2 = _seatToSwap2!.objectModel!;

    final summary1 = obj1.getSwapSummary();
    final seatName1 = obj1.toShortString();
    final summary2 = obj2.getSwapSummary();
    final seatName2 = obj2.toShortString();

    // Using the new DialogHelper API structure from your file
    final confirmed = await DialogHelper.showConfirmationDialogRichText(
      context,
      BlueprintStrings.swapConfirmTitle,
      Text.rich(
        TextSpan(
          style: DefaultTextStyle.of(context).style,
          children: [
            TextSpan(text: "${BlueprintStrings.swapConfirmMessage(summary1, seatName1, summary2, seatName2)}\n\n"),
            TextSpan(
              text: summary1,
              style: const TextStyle(fontWeight: FontWeight.bold),
            ),
            TextSpan(text: " ($seatName1)\n"),
            const TextSpan(
              text: " \u2195 ", // Unicode Up Down Arrow
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            TextSpan(text: "\n" + summary2,
              style: const TextStyle(fontWeight: FontWeight.bold),
            ),
            TextSpan(text: " ($seatName2)"),
          ],
        ),
        textAlign: TextAlign.center,
      ),
      confirmButtonMessage: CommonStrings.confirm,
      cancelButtonMessage: CommonStrings.storno,
    );

    if (confirmed == true) {
      _performSwap();
    } else {
      _clearSwapSelection();
    }
  }

  Future<void> _performSwap() async {
    if (_seatToSwap1 == null || _seatToSwap2 == null) return;

    final obj1 = _seatToSwap1!.objectModel!;
    final obj2 = _seatToSwap2!.objectModel!;

    // Swap the data that moves with the order
    final tempOrderProductTicket = obj1.orderProductTicket;
    final tempStateEnum = obj1.stateEnum ?? SeatState.available;

    obj1.orderProductTicket = obj2.orderProductTicket;
    obj1.setSeatState(obj2.stateEnum ?? SeatState.available);

    obj2.orderProductTicket = tempOrderProductTicket;
    obj2.setSeatState(tempStateEnum);

    await DbSpots.swapSpotTickets(obj1.id!, obj2.id!);
    ToastHelper.Show(context, BlueprintStrings.swapSuccess, severity: ToastSeverity.Ok);

    _seatLayoutController.updateSeat(_seatToSwap1!, obj1.stateEnum!);
    _seatLayoutController.updateSeat(_seatToSwap2!, obj2.stateEnum!);

    await loadData();
  }

  void _clearSwapSelection() {
    if (_seatToSwap1 != null) {
      _seatLayoutController.setSeatHighlight(_seatToSwap1!, false);
    }
    if (_seatToSwap2 != null) {
      _seatLayoutController.setSeatHighlight(_seatToSwap2!, false);
    }
    _seatToSwap1 = null;
    _seatToSwap2 = null;
  }


  void _uploadSvgBackground() async {
    // Using the new DialogHelper API structure from your file
    var file = await DialogHelper.dropFilesHere(
      context,
      BlueprintStrings.dialogImportSvgTitle,
      CommonStrings.ok,
      CommonStrings.storno,
    );
    if (file != null) {
      try {
        var content = await file.readAsString();
        if (!content.trim().startsWith('<svg')) {
          ToastHelper.Show(context, BlueprintStrings.toastInvalidSvg, severity: ToastSeverity.NotOk);
          return;
        }
        setState(() {
          blueprint!.backgroundSvg = content;
        });
        _seatLayoutController.setBackground(content);
        ToastHelper.Show(context, BlueprintStrings.toastSvgUploadSuccess);
      } catch (e) {
        ToastHelper.Show(context, BlueprintStrings.toastSvgReadFail, severity: ToastSeverity.NotOk);
      }
    }
  }

  void _uploadImageBackground() async {
    var file = await DialogHelper.dropFilesHere(
      context,
      BlueprintStrings.dialogImportImageTitle,
      CommonStrings.ok,
      CommonStrings.storno,
    );
    if (file != null) {
      try {
        Uint8List imageData = await file.readAsBytes();
        var compressedImageData = await ImageCompressionHelper.compress(imageData, 3000, quality: 100);
        final publicUrl = await DbImages.uploadImage(compressedImageData, blueprint!.occasion, null);
        setState(() {
          blueprint!.backgroundSvg = publicUrl;
        });
        _seatLayoutController.setBackground(publicUrl);
        ToastHelper.Show(context, BlueprintStrings.toastImageUploadSuccess);
      } catch (e) {
        ToastHelper.Show(context, BlueprintStrings.toastImageUploadFail, severity: ToastSeverity.NotOk);
      }
    }
  }

  void _removeBackground() async {
    // Using the new DialogHelper API structure from your file
    final confirmed = await DialogHelper.showConfirmationDialog(
        context,
        BlueprintStrings.dialogConfirmRemoveBackgroundTitle,
        BlueprintStrings.dialogConfirmRemoveBackgroundContent);

    if (confirmed == true) {
      setState(() {
        blueprint!.backgroundSvg = null;
      });
      _seatLayoutController.setBackground(null);
      ToastHelper.Show(context, BlueprintStrings.toastBackgroundRemoved);
    }
  }


  void saveChanges() async {
    if (blueprint == null) return;
    try {
      // Ensure blueprint model objects are in sync before saving
      blueprint!.objects = _seatLayoutController.seats
          .map((s) => s.objectModel)
          .whereNotNull()
          .toList();

      await DbForms.updateBlueprint(blueprint!);
      ToastHelper.Show(context, CommonStrings.saved, severity: ToastSeverity.Ok);
      await loadData();
    } catch (e) {
      ToastHelper.Show(context, e.toString().replaceFirst("Exception: ", ""), severity: ToastSeverity.NotOk);
    }
  }

  Future<void> loadData() async {
    _clearSwapSelection();
    blueprint = await DbForms.getBlueprintForEdit(occasionLink!);
    if (blueprint != null) {
      _seatLayoutController.loadBlueprint(
        blueprint!,
        newSeatSize: SeatReservationWidget.boxSize,
      );
    }
    setState(() {});
  }
}

enum selectionMode { none, emptyArea, addBlack, addAvailable, swapSeats }