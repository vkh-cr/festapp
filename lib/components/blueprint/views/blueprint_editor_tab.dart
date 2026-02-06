import 'dart:async';

import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/components/blueprint/blueprint_strings.dart';
import 'package:fstapp/components/blueprint/blueprint_group.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/components/blueprint/blueprint_object_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/forms/db_forms.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/theme_config.dart';
import 'package:collection/collection.dart';

import '../../_shared/common_strings.dart';
import '../../eshop/db_tickets.dart';
import '../seat_reservation/model/seat_model.dart';
import '../seat_reservation/utils/seat_state.dart';
import '../seat_reservation/widgets/seat_layout_controller.dart';
import '../seat_reservation/widgets/seat_layout_widget.dart';
import '../seat_reservation/widgets/seat_reservation_widget.dart';
import 'blueprint_controls_bar.dart';
import 'blueprint_create_order_dialog.dart';
import 'blueprint_groups_panel.dart';
import 'blueprint_legend.dart';
import 'blueprint_product_dialogs.dart';

enum BlueprintSelectionMode {
  none,
  emptyArea,
  addBlack,
  addAvailable,
  swapSeats,
  createNewOrder
}

class BlueprintTab extends StatefulWidget {
  const BlueprintTab({super.key});

  @override
  State<BlueprintTab> createState() => _BlueprintTabState();
}

class _BlueprintTabState extends State<BlueprintTab> {
  BlueprintModel? blueprint;
  BlueprintGroupModel? currentGroup;
  String? occasionLink;

  BlueprintSelectionMode currentSelectionMode = BlueprintSelectionMode.none;
  late final SeatLayoutController _seatLayoutController;

  // State for Swap Seats feature
  SeatModel? _seatToSwap1;
  SeatModel? _seatToSwap2;

  // State for Create New Order feature
  final Set<SeatModel> _selectedSeatsForOrder = {};

  bool _hasCenteredMobileView = false;
  late final ScrollController _mobileHorizontalController;
  bool _canScrollLeft = false;
  bool _canScrollRight = true;

  Timer? _arrowFadeTimer;
  bool _arrowsVisible = true;

  @override
  void initState() {
    super.initState();
    _seatLayoutController = SeatLayoutController();
    _mobileHorizontalController = ScrollController();
    _mobileHorizontalController.addListener(_updateScrollArrows);
    _resetArrowFadeTimer();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (occasionLink == null && context.routeData.params.isNotEmpty) {
      occasionLink =
          context.routeData.params.getString(AppRouter.linkFormatted);
    }
    loadData();
  }

  @override
  void dispose() {
    _seatLayoutController.dispose();
    _mobileHorizontalController.dispose();
    _arrowFadeTimer?.cancel();
    super.dispose();
  }

  /// Helper to check if a seat is in a state that prevents modification
  bool _isSeatOccupied(BlueprintObjectModel? obj) {
    if (obj == null || obj.stateEnum == null) return false;
    final state = obj.stateEnum;
    return state == SeatState.ordered ||
        state == SeatState.used ||
        state == SeatState.selected ||
        state == SeatState.selected_by_me;
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

  void _updateScrollArrows() {
    if (!_mobileHorizontalController.hasClients) return;
    final offset = _mobileHorizontalController.offset;
    final maxScroll = _mobileHorizontalController.position.maxScrollExtent;

    // Use a small threshold to avoid flickering at exact bounds
    final canScrollLeft = offset > 10;
    final canScrollRight = offset < maxScroll - 10;

    if (canScrollLeft != _canScrollLeft || canScrollRight != _canScrollRight) {
      setState(() {
        _canScrollLeft = canScrollLeft;
        _canScrollRight = canScrollRight;
      });
    }
    _resetArrowFadeTimer();
  }

  void _resetArrowFadeTimer() {
    _arrowFadeTimer?.cancel();
    if (!_arrowsVisible) {
      setState(() {
        _arrowsVisible = true;
      });
    }
    _arrowFadeTimer = Timer(const Duration(seconds: 2), () {
      if (mounted) {
        setState(() {
          _arrowsVisible = false;
        });
      }
    });
  }

  Widget _buildMobileLayout(double screenWidth) {
    if (!_hasCenteredMobileView) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (!mounted) return;
        if (_mobileHorizontalController.hasClients) {
          // Left panel is 250. We want to start showing from the main content.
          // Scrolling to 250 will hide the left panel and start with the main layout.
          _mobileHorizontalController.jumpTo(250.0);
          // Manually trigger update after jump
          _updateScrollArrows();
        }
      });
      _hasCenteredMobileView = true;
    }

    return Stack(
      children: [
        SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          controller: _mobileHorizontalController,
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: 250,
                padding: const EdgeInsets.all(16.0),
                child: _buildLeftPanel(),
              ),
              Container(
                width: screenWidth,
                padding: const EdgeInsets.symmetric(horizontal: 12.0),
                child: _buildMainContent(),
              ),
              Container(
                width: 250,
                padding: const EdgeInsets.all(16.0),
                child: _buildRightPanel(),
              ),
            ],
          ),
        ),
        if (_canScrollLeft)
          Align(
            alignment: Alignment.centerLeft,
            child: AnimatedOpacity(
              opacity: _arrowsVisible ? 1.0 : 0.3,
              duration: const Duration(milliseconds: 300),
              child: Padding(
                padding: const EdgeInsets.only(left: 8.0),
                child: Container(
                  width: 36,
                  height: 36,
                  decoration: BoxDecoration(
                    color: Colors.black.withOpacity(0.7),
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.3),
                        blurRadius: 4,
                        offset: const Offset(0, 2),
                      ),
                    ],
                  ),
                  child: Material(
                    color: Colors.transparent,
                    child: InkWell(
                      customBorder: const CircleBorder(),
                      onTap: () {
                        final target =
                            (_mobileHorizontalController.offset - 250.0).clamp(
                                0.0,
                                _mobileHorizontalController
                                    .position.maxScrollExtent);
                        _mobileHorizontalController.animateTo(
                          target,
                          duration: const Duration(milliseconds: 300),
                          curve: Curves.easeOut,
                        );
                      },
                      child: const Center(
                        child: Icon(Icons.chevron_left,
                            size: 24, color: Colors.white),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        if (_canScrollRight)
          Align(
            alignment: Alignment.centerRight,
            child: AnimatedOpacity(
              opacity: _arrowsVisible ? 1.0 : 0.3,
              duration: const Duration(milliseconds: 300),
              child: Padding(
                padding: const EdgeInsets.only(right: 8.0),
                child: Container(
                  width: 36,
                  height: 36,
                  decoration: BoxDecoration(
                    color: Colors.black.withOpacity(0.7),
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.3),
                        blurRadius: 4,
                        offset: const Offset(0, 2),
                      ),
                    ],
                  ),
                  child: Material(
                    color: Colors.transparent,
                    child: InkWell(
                      customBorder: const CircleBorder(),
                      onTap: () {
                        final target =
                            (_mobileHorizontalController.offset + 250.0).clamp(
                                0.0,
                                _mobileHorizontalController
                                    .position.maxScrollExtent);
                        _mobileHorizontalController.animateTo(
                          target,
                          duration: const Duration(milliseconds: 300),
                          curve: Curves.easeOut,
                        );
                      },
                      child: const Center(
                        child: Icon(Icons.chevron_right,
                            size: 24, color: Colors.white),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
      ],
    );
  }

  /// Left Panel: The Legend and Action Buttons
  Widget _buildLeftPanel() {
    final Map<SeatState, int> stateCounts = {};
    if (blueprint?.objects != null) {
      for (var obj in blueprint!.objects!) {
        // Only count actual spots, not potential auxiliary objects if any
        if (obj.type == BlueprintModel.metaSpotType) {
          final state = obj.stateEnum ?? SeatState.available;
          stateCounts[state] = (stateCounts[state] ?? 0) + 1;
        }
      }
    }

    return BlueprintLegend(
      currentSelectionMode: currentSelectionMode,
      onModeSelected: _handleModeSelected,
      // Pass the count and the callback for the Create Order button
      selectedCount: _selectedSeatsForOrder.length,
      onConfirmOrder: _processNewOrder,
      stateCounts: stateCounts,
    );
  }

  /// Main Content: Controls and Seat Layout
  Widget _buildMainContent() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        const SizedBox(height: 16),
        blueprint == null
            ? const SizedBox.shrink()
            : BlueprintControlsBar(
                blueprint: blueprint,
                seatLayoutController: _seatLayoutController,
                canEdit: RightsService.canEditOccasion(),
              ),
        const SizedBox(height: 16),
        Flexible(
          child: blueprint == null
              ? const Center(child: CircularProgressIndicator())
              : SeatLayoutWidget(
                  isEditorMode: true,
                  controller: _seatLayoutController,
                  onSeatTap: handleSeatTap,
                  shouldShowTooltipOnTap: (model) {
                    return currentSelectionMode == BlueprintSelectionMode.none;
                  },
                ),
        ),
        const SizedBox(height: 16),
      ],
    );
  }

  /// Right Panel: The Groups List
  Widget _buildRightPanel() {
    final bool canEdit = RightsService.canEditOccasion();
    return BlueprintGroupsPanel(
      blueprint: blueprint,
      currentGroup: currentGroup,
      canEdit: canEdit,
      onGroupSelected: _onGroupSelected,
      onAddGroup: canEdit ? addGroup : null,
      onDeleteGroup: canEdit ? deleteGroup : null,
      onEditGroupProduct: canEdit ? _editGroupProduct : null,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: GestureDetector(
          onTap: () => _seatLayoutController.setTooltipSeat(null),
          behavior: HitTestBehavior.translucent,
          child: LayoutBuilder(
            builder: (context, constraints) {
              if (constraints.maxWidth > 800) {
                return _buildDesktopLayout();
              } else {
                return _buildMobileLayout(constraints.maxWidth);
              }
            },
          ),
        ),
      ),
      bottomNavigationBar: Container(
        color: ThemeConfig.appBarColor(),
        padding: const EdgeInsets.all(8.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            TextButton(
              onPressed: RightsService.canEditOccasion() ? loadData : null,
              style: TextButton.styleFrom(
                foregroundColor: Colors.white,
              ),
              child: Text(CommonStrings.reset),
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

  //
  // LOGIC & HANDLERS
  //

  void _onGroupSelected(BlueprintGroupModel? group) {
    setState(() {
      currentGroup = group;
    });
    _seatLayoutController.setTooltipSeat(null);
    _seatLayoutController.setHighlightedGroup(currentGroup);
  }

  /// Handles mode changes. Toggles off if the same mode is clicked.
  void _handleModeSelected(BlueprintSelectionMode mode) {
    // 1. If clicking the SAME mode, toggle it OFF.
    if (currentSelectionMode == mode) {
      _resetAllSelections();
      _seatLayoutController.setTooltipSeat(null);
      setState(() {
        currentSelectionMode = BlueprintSelectionMode.none;
      });
      return;
    }

    // 2. If clicking a DIFFERENT mode, clear previous state and switch.
    _resetAllSelections();
    _seatLayoutController.setTooltipSeat(null);

    setState(() {
      currentSelectionMode = mode;
    });

    // Toast helpers for complex modes
    if (mode == BlueprintSelectionMode.swapSeats) {
      ToastHelper.Show(context, BlueprintStrings.swapHelpSelectFirst);
    } else if (mode == BlueprintSelectionMode.createNewOrder) {
      ToastHelper.Show(context, BlueprintStrings.createOrderHelp);
    }
  }

  /// Clears temporary selections (Swap or Create Order) and resets visuals.
  void _resetAllSelections() {
    // Clear Swap Highlighting
    if (_seatToSwap1 != null)
      _seatLayoutController.setSeatHighlight(_seatToSwap1!, false);
    if (_seatToSwap2 != null)
      _seatLayoutController.setSeatHighlight(_seatToSwap2!, false);
    _seatToSwap1 = null;
    _seatToSwap2 = null;

    // Clear Create Order Selections
    for (var seat in _selectedSeatsForOrder) {
      // Revert the visual state to the actual data state
      final originalState = seat.objectModel?.stateEnum ?? SeatState.available;
      _seatLayoutController.updateVisualState(seat, originalState);
    }
    _selectedSeatsForOrder.clear();
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
      _seatLayoutController.setHighlightedGroup(currentGroup);
    }
  }

  void deleteGroup() {
    if (currentGroup == null) return;
    final bool hasOccupiedSeats = currentGroup!.objects.any(_isSeatOccupied);

    if (hasOccupiedSeats) {
      ToastHelper.Show(context, BlueprintStrings.toastOccupiedCannotBeChanged,
          severity: ToastSeverity.NotOk);
      return;
    }

    final objectsToRemove =
        List<BlueprintObjectModel>.from(currentGroup!.objects);

    for (var obj in objectsToRemove) {
      blueprint!.objects!.remove(obj);
      _seatLayoutController.removeObject(obj);
    }

    setState(() {
      blueprint!.groups!.remove(currentGroup);
      currentGroup = null;
    });
    _seatLayoutController.setHighlightedGroup(null);
  }

  /// Main Tap Handler
  void handleSeatTap(SeatModel model) {
    if (currentSelectionMode != BlueprintSelectionMode.createNewOrder &&
        _isSeatOccupied(model.objectModel)) {
      if (currentSelectionMode == BlueprintSelectionMode.none) {
        // Do nothing, let the tooltip handle it (via SeatLayoutWidget)
        return;
      }
      if (currentSelectionMode != BlueprintSelectionMode.swapSeats) {
        ToastHelper.Show(context, BlueprintStrings.toastOccupiedCannotBeChanged,
            severity: ToastSeverity.NotOk);
        return;
      }
    }

    switch (currentSelectionMode) {
      case BlueprintSelectionMode.addBlack:
        _handleAddBlack(model);
        break;
      case BlueprintSelectionMode.addAvailable:
        _handleAddAvailable(model);
        break;
      case BlueprintSelectionMode.emptyArea:
        _handleEmptyArea(model);
        break;
      case BlueprintSelectionMode.swapSeats:
        _handleSwapSeats(model);
        break;
      case BlueprintSelectionMode.createNewOrder:
        _handleCreateNewOrder(model);
        break;
      default:
        break;
    }
  }

  void _handleCreateNewOrder(SeatModel model) {
    // Only spots (tables/seats) can be ordered, not black areas or empty space
    if (model.objectModel == null ||
        model.objectModel!.type == BlueprintModel.metaTableAreaType) {
      return;
    }

    setState(() {
      if (_selectedSeatsForOrder.contains(model)) {
        // Deselect
        _selectedSeatsForOrder.remove(model);

        // Restore the visual look to its actual state (available, ordered, etc.)
        final originalState =
            model.objectModel?.stateEnum ?? SeatState.available;
        _seatLayoutController.updateVisualState(model, originalState);
      } else {
        // Select
        _selectedSeatsForOrder.add(model);

        // Visually change to "Selected By Me" (Green Checkmark)
        // using the controller's visual-only update method
        _seatLayoutController.updateVisualState(
            model, SeatState.selected_by_me);
      }
    });
  }

  void _processNewOrder() async {
    if (_selectedSeatsForOrder.isEmpty) return;

    final spotIds =
        _selectedSeatsForOrder.map((s) => s.objectModel?.id).nonNulls.toList();

    if (spotIds.isEmpty) return;

    final dynamic result = await showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => BlueprintCreateOrderDialog(
        selectedSpotIds: spotIds,
      ),
    );

    if (result == true) {
      ToastHelper.Show(context, BlueprintStrings.orderCreatedSuccess,
          severity: ToastSeverity.Ok);
      _handleModeSelected(BlueprintSelectionMode.none);
      await loadData();
    }
  }

  void _handleAddBlack(SeatModel model) {
    if (_isSeatOccupied(model.objectModel)) {
      ToastHelper.Show(context, BlueprintStrings.toastOccupiedCannotBeChanged,
          severity: ToastSeverity.NotOk);
      return;
    }

    model.seatState = SeatState.black;

    if (model.objectModel != null &&
        model.objectModel!.type == BlueprintModel.metaTableAreaType) {
      return;
    }
    if (model.objectModel != null &&
        model.objectModel!.type != BlueprintModel.metaTableAreaType) {
      blueprint!.objects!.remove(model.objectModel!);
    }
    model.objectModel =
        model.objectModel ?? BlueprintObjectModel(x: model.colI, y: model.rowI);
    model.objectModel!.type = BlueprintModel.metaTableAreaType;
    model.objectModel!.setSeatState(SeatState.black);
    blueprint!.objects!.add(model.objectModel!);
    _seatLayoutController.addObject(model.objectModel!, isHighlighted: false);
  }

  void _handleAddAvailable(SeatModel model) {
    if (_isSeatOccupied(model.objectModel)) {
      ToastHelper.Show(context, BlueprintStrings.toastOccupiedCannotBeChanged,
          severity: ToastSeverity.NotOk);
      return;
    }

    if (currentGroup == null) {
      ToastHelper.Show(context, BlueprintStrings.toastSelectGroupFirst,
          severity: ToastSeverity.NotOk);
      return;
    }

    model.seatState = SeatState.available;

    if (model.objectModel != null &&
        model.objectModel!.type == BlueprintModel.metaSpotType) {
      return;
    }

    if (model.objectModel != null &&
        model.objectModel!.type != BlueprintModel.metaSpotType) {
      blueprint!.objects!.remove(model.objectModel!);
    }

    // Inherit product from group or first available
    final groupProduct = currentGroup!.product ??
        (currentGroup!.objects.isNotEmpty
            ? currentGroup!.objects.first.product
            : null);

    model.objectModel =
        model.objectModel ?? BlueprintObjectModel(x: model.colI, y: model.rowI);
    model.objectModel!.type = BlueprintModel.metaSpotType;
    model.objectModel!.setSeatState(SeatState.available);

    model.objectModel!.product =
        groupProduct ?? blueprint!.spotProducts.firstOrNull;
    model.objectModel!.group = currentGroup;
    model.objectModel!.title = currentGroup?.getNextBoxName().toUpperCase();

    currentGroup?.objects.add(model.objectModel!);
    blueprint!.objects!.add(model.objectModel!);

    _seatLayoutController.addObject(model.objectModel!,
        isHighlighted: currentGroup != null);

    ToastHelper.Show(context,
        "${BlueprintStrings.toastSpotAdded} ${model.objectModel!.title}");
    setState(() {});
  }

  void _handleEmptyArea(SeatModel model) {
    var objectToRemove = model.objectModel;
    if (objectToRemove != null) {
      if (_isSeatOccupied(objectToRemove)) {
        ToastHelper.Show(context, BlueprintStrings.toastOccupiedCannotBeChanged,
            severity: ToastSeverity.NotOk);
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
      setState(() {});
    }
  }

  void _handleSwapSeats(SeatModel model) {
    final obj = model.objectModel;
    if (obj == null ||
        obj.stateEnum == SeatState.black ||
        obj.stateEnum == SeatState.empty) {
      ToastHelper.Show(context, BlueprintStrings.swapErrorEmpty,
          severity: ToastSeverity.NotOk);
      return;
    }

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

    if (_seatToSwap1 == null) {
      _seatToSwap1 = model;
      _seatLayoutController.setSeatHighlight(model, true);
      ToastHelper.Show(
          context, BlueprintStrings.swapHelpSelectSecond(obj.toString()));
      return;
    }

    if (_seatToSwap2 == null) {
      _seatToSwap2 = model;
      _seatLayoutController.setSeatHighlight(model, true);
      _showSwapConfirmationDialog();
    }
  }

  void _showSwapConfirmationDialog() async {
    if (_seatToSwap1 == null || _seatToSwap2 == null) return;

    final obj1 = _seatToSwap1!.objectModel!;
    final obj2 = _seatToSwap2!.objectModel!;

    final summary1 = obj1.getSwapSummary();
    final seatName1 = obj1.toString();
    final summary2 = obj2.getSwapSummary();
    final seatName2 = obj2.toString();

    final confirmed = await DialogHelper.showConfirmationDialogRichText(
      context,
      BlueprintStrings.swapConfirmTitle,
      Text.rich(
        TextSpan(
          style: DefaultTextStyle.of(context).style,
          children: [
            TextSpan(
                text:
                    "${BlueprintStrings.swapConfirmMessage(summary1, seatName1, summary2, seatName2)}\n\n"),
            TextSpan(
              text: summary1,
              style: const TextStyle(fontWeight: FontWeight.bold),
            ),
            TextSpan(text: " ($seatName1)\n"),
            const TextSpan(
              text: " \u2195 ",
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            TextSpan(
              text: "\n$summary2",
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

    final tempOrderProductTicket = obj1.orderProductTicket;
    final tempStateEnum = obj1.stateEnum ?? SeatState.available;

    obj1.orderProductTicket = obj2.orderProductTicket;
    obj1.setSeatState(obj2.stateEnum ?? SeatState.available);

    obj2.orderProductTicket = tempOrderProductTicket;
    obj2.setSeatState(tempStateEnum);

    await DbTickets.swapSpotTickets(obj1.id!, obj2.id!);
    ToastHelper.Show(context, BlueprintStrings.swapSuccess,
        severity: ToastSeverity.Ok);

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

  void _editGroupProduct(BlueprintGroupModel group) async {
    if (blueprint == null) return;

    // Open the Unified Manager Dialog
    await showDialog(
      context: context,
      builder: (context) => GroupProductManagerDialog(
        blueprint: blueprint!,
        group: group,
      ),
    );

    // Refresh UI after dialog closes to show changes in price/titles
    setState(() {});
  }

  void saveChanges() async {
    if (blueprint == null) return;
    try {
      // Ensure blueprint model objects are in sync
      blueprint!.objects = _seatLayoutController.seats
          .map((s) => s.objectModel)
          .nonNulls
          .toList();

      for (var obj in blueprint!.objects!) {
        if (obj.product != null) {
          obj.spotProduct = obj.product!.id;
        }
      }

      await DbForms.updateBlueprint(blueprint!);
      ToastHelper.Show(context, CommonStrings.saved,
          severity: ToastSeverity.Ok);
      await loadData();
    } catch (e) {
      ToastHelper.Show(context, e.toString().replaceFirst("Exception: ", ""),
          severity: ToastSeverity.NotOk);
    }
  }

  Future<void> loadData() async {
    _resetAllSelections(); // Ensure clean state
    blueprint = await DbForms.getBlueprintForEdit(occasionLink!);
    if (blueprint != null) {
      _seatLayoutController.loadBlueprint(
        blueprint!,
        newSeatSize: SeatReservationWidget.boxSize,
      );
    }
    if (mounted) {
      setState(() {});
    }
  }
}
