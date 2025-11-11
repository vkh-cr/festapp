import 'dart:math';

import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/components/blueprint/blueprint_strings.dart';
import 'package:fstapp/components/blueprint/blueprint_group.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/components/blueprint/blueprint_object_model.dart';
import 'package:fstapp/components/eshop/models/product_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services_eshop/db_forms.dart';
import 'package:fstapp/data_services_eshop/db_spots.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/theme_config.dart';
import 'package:collection/collection.dart';

import '../../_shared/common_strings.dart';
import '../seat_reservation/model/seat_model.dart';
import '../seat_reservation/utils/seat_state.dart';
import '../seat_reservation/widgets/seat_layout_controller.dart';
import '../seat_reservation/widgets/seat_layout_widget.dart';
import '../seat_reservation/widgets/seat_reservation_widget.dart';
import 'blueprint_controls_bar.dart';
import 'blueprint_groups_panel.dart';
import 'blueprint_legend.dart';
import 'blueprint_product_dialogs.dart'; // Import

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
      occasionLink =
          context.routeData.params.getString(AppRouter.linkFormatted);
    }
    loadData();
  }

  @override
  void dispose() {
    _seatLayoutController.dispose();
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

  /// Left Panel: The Legend
  Widget _buildLeftPanel() {
    return BlueprintLegend(
      currentSelectionMode: currentSelectionMode,
      onModeSelected: _handleModeSelected,
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
      onGroupSelected: (group) {
        setState(() {
          currentGroup = group;
        });
      },
      onAddGroup: canEdit ? addGroup : null,
      onDeleteGroup: canEdit ? deleteGroup : null,
      onRenameGroup: canEdit ? renameGroup : null,
      onEditGroupProduct: canEdit ? _editGroupProduct : null,
    );
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
            onPressed:
            RightsService.canEditOccasion() ? editBlueprintTitle : null,
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
              onPressed: RightsService.canEditOccasion()
                  ? () => Navigator.pop(context)
                  : null,
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

  //
  // LOGIC & HANDLERS
  //

  void _handleModeSelected(selectionMode mode) {
    if (mode == selectionMode.swapSeats) {
      setState(() {
        currentSelectionMode = selectionMode.swapSeats;
      });
      ToastHelper.Show(context, BlueprintStrings.swapHelpSelectFirst);
    } else {
      _clearSwapSelection();
      setState(() {
        currentSelectionMode = mode;
      });
    }
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
      ToastHelper.Show(context, BlueprintStrings.toastOccupiedCannotBeChanged,
          severity: ToastSeverity.NotOk);
      return;
    }

    // If no seats are occupied, proceed with deleting all seats and the group
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
        blueprint!.groups!
            .sort((a, b) => Utilities.naturalCompare(a.title!, b.title!));
      });
    }
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
          ToastHelper.Show(context, BlueprintStrings.toastOccupiedCannotBeChanged,
              severity: ToastSeverity.NotOk);
        }
        break;
    }
  }

  void _handleAddBlack(SeatModel model) {
    // Check if the seat is occupied
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
    model.objectModel!.setSeatState(SeatState.black); // Use new method
    blueprint!.objects!.add(model.objectModel!);
    _seatLayoutController.addObject(model.objectModel!);
  }

  void _handleAddAvailable(SeatModel model) {
    // Check if the seat is occupied
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

    // Check if a product is assigned to the group
    final groupProduct = currentGroup!.objects.isNotEmpty
        ? currentGroup!.objects.first.product
        : null;

    model.objectModel =
        model.objectModel ?? BlueprintObjectModel(x: model.colI, y: model.rowI);
    model.objectModel!.type = BlueprintModel.metaSpotType;
    model.objectModel!.setSeatState(SeatState.available); // Use new method
    // Assign group's product or first available spot product
    model.objectModel!.product = groupProduct ?? blueprint!.spotProducts.firstOrNull;
    model.objectModel!.group = currentGroup;
    model.objectModel!.title = currentGroup?.getNextBoxName().toUpperCase();

    currentGroup?.objects.add(model.objectModel!);
    blueprint!.objects!.add(model.objectModel!);
    _seatLayoutController.addObject(model.objectModel!);
    ToastHelper.Show(
        context, "${BlueprintStrings.toastSpotAdded} ${model.objectModel!.title}");
  }

  void _handleEmptyArea(SeatModel model) {
    var objectToRemove = model.objectModel;
    if (objectToRemove != null) {
      // Check if the seat is occupied
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
    }
  }

  void _handleSwapSeats(SeatModel model) {
    final obj = model.objectModel;
    // Prevent swapping black or empty areas
    if (obj == null ||
        obj.stateEnum == SeatState.black ||
        obj.stateEnum == SeatState.empty) {
      ToastHelper.Show(context, BlueprintStrings.swapErrorEmpty,
          severity: ToastSeverity.NotOk);
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
      ToastHelper.Show(
          context, BlueprintStrings.swapHelpSelectSecond(obj.toShortString()));
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
            TextSpan(
                text:
                "${BlueprintStrings.swapConfirmMessage(summary1, seatName1, summary2, seatName2)}\n\n"),
            TextSpan(
              text: summary1,
              style: const TextStyle(fontWeight: FontWeight.bold),
            ),
            TextSpan(text: " ($seatName1)\n"),
            const TextSpan(
              text: " \u2195 ", // Unicode Up Down Arrow
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            TextSpan(
              text: "\n" + summary2,
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

  //
  // (Modified) Product Management Logic
  //

  /// Assigns a selected product to all spots in a group
  void _editGroupProduct(BlueprintGroupModel group) async {
    if (blueprint == null) return;

    // Check if any seat in the group is occupied
    final bool hasOccupiedSeats = group.objects.any(_isSeatOccupied);
    if (hasOccupiedSeats) {
      ToastHelper.Show(context, BlueprintStrings.toastOccupiedCannotBeChanged,
          severity: ToastSeverity.NotOk);
      return;
    }

    // (Modified) Find the current product to pass its ID
    final currentProduct = group.objects.isNotEmpty
        ? group.objects.first.product
        : null;

    final selectedProduct = await showDialog<ProductModel>(
      context: context,
      builder: (BuildContext dialogContext) {
        return SelectProductDialog(
          blueprint: blueprint!,
          currentProductId: currentProduct?.id, // Pass the ID
        );
      },
    );

    if (selectedProduct != null) {
      setState(() {
        for (var obj in group.objects) {
          obj.product = selectedProduct;
          obj.spotProduct = selectedProduct.id; // Ensure ID is also synced
        }
      });
      ToastHelper.Show(context, BlueprintStrings.productAssigned, severity: ToastSeverity.Ok);
    } else {
      // If the user closed the dialog, we might need to refresh state
      // in case they added/edited products but didn't select one.
      setState(() {});
    }
  }

  //
  // Save & Load
  //

  void saveChanges() async {
    if (blueprint == null) return;
    try {
      // Ensure blueprint model objects are in sync before saving
      blueprint!.objects = _seatLayoutController.seats
          .map((s) => s.objectModel)
          .whereNotNull()
          .toList();

      // Ensure products on objects are properly saved as IDs
      for(var obj in blueprint!.objects!) {
        if(obj.product != null) {
          obj.spotProduct = obj.product!.id;
        }
      }

      await DbForms.updateBlueprint(blueprint!);
      ToastHelper.Show(context, CommonStrings.saved, severity: ToastSeverity.Ok);
      await loadData();
    } catch (e) {
      ToastHelper.Show(context, e.toString().replaceFirst("Exception: ", ""),
          severity: ToastSeverity.NotOk);
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
    if (mounted) {
      setState(() {});
    }
  }
}

enum selectionMode { none, emptyArea, addBlack, addAvailable, swapSeats }