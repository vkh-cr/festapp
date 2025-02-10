import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/seatReservation/widgets/SeatWidget.dart';
import 'package:fstapp/dataModelsEshop/BlueprintGroup.dart';
import 'package:fstapp/dataModelsEshop/BlueprintModel.dart';
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataServicesEshop/DbForms.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/AutoResizeInteractiveViewerController.dart';
import 'package:fstapp/widgets/SeatReservationWidget.dart';
import 'package:collection/collection.dart';


import '../../components/seatReservation/model/SeatLayoutStateModel.dart';
import '../../components/seatReservation/model/SeatModel.dart';
import '../../components/seatReservation/utils/SeatState.dart';
import '../../components/seatReservation/widgets/SeatLayoutWidget.dart';

class BlueprintTab extends StatefulWidget {

  const BlueprintTab({super.key});

  @override
  State<BlueprintTab> createState() => _BlueprintTabState();
}

class _BlueprintTabState extends State<BlueprintTab> {
  BlueprintModel? blueprint;
  BlueprintGroupModel? currentGroup;
  String? formLink;

  List<SeatModel> allBoxes = [];
  selectionMode currentSelectionMode = selectionMode.none;
  final AutoResizeInteractiveViewerController seatLayoutController =
  AutoResizeInteractiveViewerController();

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (formLink == null && context.routeData.pathParams.isNotEmpty) {
      formLink = context.routeData.pathParams.getString("formLink");
    }
    loadData();
  }

  Widget _buildDesktopLayout() {
    return Row(
      children: [
        // Left panel
        Container(
          width: 250,
          padding: const EdgeInsets.all(16.0),
          child: _buildLeftPanel(),
        ),
        const SizedBox(width: 16),
        // Main content
        Expanded(
          child: _buildMainContent(),
        ),
        const SizedBox(width: 16),
        // Right panel
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
          // Left panel
          Container(
            width: 250,
            padding: const EdgeInsets.all(16.0),
            child: _buildLeftPanel(),
          ),
          // Main content
          SizedBox(
            width: 400,
            child: _buildMainContent(),
          ),
          // Right panel
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
            "Click an option in the legend to add seats.",
            style: Theme.of(context).textTheme.bodySmall,
            textAlign: TextAlign.left,
          ).tr(),
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
            controller: seatLayoutController,
            onSeatTap: handleSeatTap,
            stateModel: SeatLayoutStateModel(
              rows: blueprint!.configuration!.height!,
              cols: blueprint!.configuration!.width!,
              seatSize: SeatReservationWidget.boxSize,
              currentObjects: blueprint!.objects!,
              allBoxes: allBoxes,
              backgroundSvg: blueprint!.backgroundSvg,
            ),
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
        title: Text(blueprint?.title ?? "Edit".tr()),
        actions: [
          IconButton(
            icon: const Icon(Icons.edit),
            tooltip: "Change title".tr(),
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
              child: Text("Storno").tr(),
            ),
            const SizedBox(width: 16),
            ElevatedButton(
              onPressed: RightsService.canEditOccasion() ? saveChanges : null,
              child: Text("Save").tr(),
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
              "Groups (Tables):",
              style: Theme.of(context).textTheme.titleMedium,
            ).tr(),
            Row(
              children: [
                IconButton(
                  icon: const Icon(Icons.add),
                  tooltip: "Add new".tr(),
                  onPressed: RightsService.canEditOccasion() ? addGroup : null,
                ),
                IconButton(
                  icon: const Icon(Icons.delete),
                  tooltip: "Delete".tr(),
                  onPressed: RightsService.canEditOccasion() ? deleteGroup : null,
                ),
                IconButton(
                  icon: const Icon(Icons.edit),
                  tooltip: "Rename".tr(),
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
      dialogTitle: "Add new".tr(),
      labelText: "Group number".tr(),
      initialValue: defaultName,
    );

    if (newTitle != null && newTitle.isNotEmpty) {
      setState(() {
        blueprint!.groups!.add(BlueprintGroupModel(title: newTitle, id: blueprint!.getFirstAvailableGroupId()));
        blueprint!.groups!.sort((a, b) => Utilities.naturalCompare(a.title!, b.title!));
      });
    }
  }

  void deleteGroup() {
    if (currentGroup == null) return;

    setState(() {
      blueprint!.groups!.remove(currentGroup);
      currentGroup = null;
    });
  }

  void renameGroup() async {
    if (currentGroup == null) return;

    final newTitle = await DialogHelper.showInputDialog(
      context: context,
      dialogTitle: "Rename".tr(),
      labelText: "Title".tr(),
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
          "Black area".tr(),
          SeatState.black,
          isActive: currentSelectionMode == selectionMode.addBlack,
          onTap: () {
            setState(() {
              currentSelectionMode = selectionMode.addBlack;
            });
          },
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          "Available".tr(),
          SeatState.available,
          isActive: currentSelectionMode == selectionMode.addAvailable,
          onTap: () {
            setState(() {
              currentSelectionMode = selectionMode.addAvailable;
            });
          },
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          "Empty".tr(),
          SeatState.empty,
          isActive: currentSelectionMode == selectionMode.emptyArea,
          onTap: () {
            setState(() {
              currentSelectionMode = selectionMode.emptyArea;
            });
          },
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          "Used".tr(),
          SeatState.used,
          isActive: false,
          grayedOut: true,
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          "Occupied".tr(),
          SeatState.ordered,
          isActive: false, // Not clickable
          grayedOut: true,
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          "Selected".tr(),
          SeatState.selected_by_me,
          isActive: false, // Not clickable
          grayedOut: true,
        ),
      ],
    );
  }

  Widget buildLegendItem(String label, SeatState state,
      {bool isActive = false, VoidCallback? onTap, bool grayedOut = false}) {
    return MouseRegion(
      cursor: grayedOut ? SystemMouseCursors.forbidden : SystemMouseCursors.click,
      child: GestureDetector(
        onTap: grayedOut ? null : onTap,
        child: Opacity(
          opacity: grayedOut ? 0.8 : 1.0, // Reduce opacity for grayed-out items
          child: Container(
            decoration: BoxDecoration(
              border: Border.all(
                color: isActive
                    ? Theme.of(context).colorScheme.primary
                    : Colors.transparent, // Highlight active items
                width: 2,
              ),
              borderRadius: BorderRadius.circular(4),
            ),
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                SeatWidgetHelper.buildSeat(
                  state: state,
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
          "Width".tr(),
          blueprint!.configuration!.width!,
              (value) {
            setState(() {
              blueprint!.configuration!.width = value;
            });
            seatLayoutController.fitContent();
          },
        ),
        const SizedBox(width: 12), // Reduced spacing between editors
        buildDimensionEditor(
          "Height".tr(),
          blueprint!.configuration!.height!,
              (value) {
            setState(() {
              blueprint!.configuration!.height = value;
            });
            seatLayoutController.fitContent();
          },
        ),
        const SizedBox(width: 12),
        TextButton(
          onPressed: () async {
            var file = await DialogHelper.dropFilesHere(
              context,
              "Import SVG background".tr(),
              "Ok".tr(),
              "Storno".tr(),
            );
            if (file != null) {
              var content = await file.readAsString();
              setState(() {
                blueprint!.backgroundSvg = content;
              });
              ToastHelper.Show(context, "File uploaded successfully.".tr());
            }
          },
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text("Import background").tr(),
              const SizedBox(width: 8), // Optional spacing between text and icon
              const Icon(Icons.grid_on),
            ],
          ),
        ),
      ],
    );
  }

  Widget buildDimensionEditor(String label, int currentValue, ValueChanged<int> onChanged) {
    return Column(
      children: [
        Text(
          label,
          style: TextStyle(
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
              onPressed: () {
                if (currentValue > 1) {
                  onChanged(currentValue - 1);
                }
              },
            ),
            Text(
              "$currentValue",
              style: TextStyle(
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
          child: const Text("Storno").tr(),
        ),
        const SizedBox(width: 12),
        ElevatedButton(
          onPressed: saveChanges,
          child: const Text("Save").tr(),
        ),
      ],
    );
  }

  void editBlueprintTitle() async {
    final newTitle = await DialogHelper.showInputDialog(
      context: context,
      dialogTitle: "Rename".tr(),
      labelText: "Title".tr(),
      initialValue: blueprint?.title ?? "",
    );

    if (newTitle != null && newTitle.isNotEmpty) {
      setState(() {
        blueprint!.title = newTitle;
      });
    }
  }

  void handleSeatTap(SeatModel model) {
    if (model.objectModel?.isOrdered() ?? false) {
      ToastHelper.Show(context, "Places that are occupied cannot be changed.".tr(), severity: ToastSeverity.NotOk);
      return;
    }

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
      default:
      // Do nothing for other cases
        break;
    }
    setState(() {});
  }

  /// Handle adding a black (table area) seat.
  void _handleAddBlack(SeatModel model) {
    model.seatState = SeatState.black;

    if (model.objectModel != null && model.objectModel!.type == BlueprintModel.metaTableAreaType) {
      return;
    }
    // Remove existing object if it's not a table area
    if (model.objectModel != null && model.objectModel!.type != BlueprintModel.metaTableAreaType) {
      blueprint!.objects!.remove(model.objectModel!);
    }

    // Create or update the object model
    model.objectModel = model.objectModel ?? BlueprintObjectModel(x: model.colI, y: model.rowI);
    model.objectModel!.type = BlueprintModel.metaTableAreaType;
    blueprint!.objects!.add(model.objectModel!);
  }

  /// Handle adding an available (spot) seat.
  void _handleAddAvailable(SeatModel model) {
    if(currentGroup == null){
      ToastHelper.Show(context, "First, select or create a group to add a spot (on the right).".tr(), severity: ToastSeverity.NotOk);
      return;
    }

    model.seatState = SeatState.available;

    if (model.objectModel != null && model.objectModel!.type == BlueprintModel.metaSpotType) {
      return;
    }

    if (model.objectModel != null && model.objectModel!.type != BlueprintModel.metaSpotType) {
      blueprint!.objects!.remove(model.objectModel!);
    }

    // Create or update the object model
    model.objectModel = model.objectModel ?? BlueprintObjectModel(x: model.colI, y: model.rowI);
    model.objectModel!.type = BlueprintModel.metaSpotType;
    model.objectModel!.product = blueprint!.products?.firstWhereOrNull((p)=>p.productTypeString == ProductModel.spotType);
    model.objectModel!.group = currentGroup;
    model.objectModel!.title = currentGroup?.getNextBoxName();

    // Add the object to the current group and blueprint
    currentGroup?.objects.add(model.objectModel!);
    blueprint!.objects!.add(model.objectModel!);

    // Notify the user
    ToastHelper.Show(context, "${"Spot added:".tr()} ${model.objectModel!.title}");
  }

  /// Handle clearing an area (emptying a seat).
  void _handleEmptyArea(SeatModel model) {
    if (model.objectModel != null) {
      // Determine the type of area being removed and notify the user
      if (model.seatState == SeatState.black) {
        ToastHelper.Show(context, "Area removed.".tr());
      } else {
        ToastHelper.Show(context, "Spot removed.".tr());
      }

      // Remove the object from blueprint and all groups
      blueprint!.objects!.remove(model.objectModel);
      for (var group in blueprint!.groups!) {
        group.objects.remove(model.objectModel);
      }

      // Clear the object model and reset the seat state
      model.objectModel = null;
      model.seatState = SeatState.empty;
    }
  }

  void saveChanges() async {
    var success = await DbForms.updateBlueprint(context, blueprint!);
    if(success){
      ToastHelper.Show(context, "Saved".tr());
      await loadData();
    }
  }

  Future<void> loadData() async {
    blueprint = await DbForms.getBlueprintForEdit(formLink!);
    setState(() {});
  }
}


enum selectionMode { none, emptyArea, addBlack, addAvailable }
