import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/components/seatReservation/widgets/SeatWidget.dart';
import 'package:fstapp/dataModelsEshop/BlueprintGroup.dart';
import 'package:fstapp/dataModelsEshop/BlueprintModel.dart';
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/SeatReservationWidget.dart';

import '../components/seatReservation/model/SeatLayoutStateModel.dart';
import '../components/seatReservation/model/SeatModel.dart';
import '../components/seatReservation/utils/SeatState.dart';
import '../components/seatReservation/widgets/SeatLayoutWidget.dart';

@RoutePage()
class BlueprintEditorPage extends StatefulWidget {
  static const ROUTE = "blueprintEdit";

  int? id;

  BlueprintEditorPage({super.key, @pathParam this.id});

  @override
  State<BlueprintEditorPage> createState() => _BlueprintEditorPageState();
}

class _BlueprintEditorPageState extends State<BlueprintEditorPage> {
  BlueprintModel? blueprint;
  List<BlueprintObjectModel>? currentBoxes;
  BlueprintGroupModel? currentGroup;


  List<SeatModel> allBoxes = [];

  selectionMode currentSelectionMode = selectionMode.none;

  final SeatLayoutWidgetController seatLayoutController =
  SeatLayoutWidgetController();

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (widget.id == null && context.routeData.hasPendingChildren) {
      widget.id =
          context.routeData.pendingChildren[0].pathParams.getInt("id");
    }
    loadData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(blueprint?.title??"Edit".tr()),
        actions: [
          IconButton(
            icon: const Icon(Icons.edit),
            tooltip: "Změnit název".tr(),
            onPressed: editBlueprintTitle,
          ),
        ],
      ),
      body: SafeArea(
        child: Center(
          child: Row(
            children: [
              // Left panel (Legend)
              Container(
                width: 250,
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Padding(
                      padding: const EdgeInsets.only(bottom: 16.0),
                      child: Text(
                        "Pro přidávání sedadel a stolů klikněte na čtvereček v legendě.",
                        style: Theme.of(context).textTheme.bodySmall,
                        textAlign: TextAlign.left,
                      ),
                    ),
                    buildLegend(),
                  ],
                ),
              ),
              const SizedBox(width: 16), // Padding between legend and main content
              // Main content section
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const SizedBox(height: 16),
                    blueprint == null
                        ? const SizedBox.shrink() :
                    buildDimensionControls(),
                    const SizedBox(height: 16),
                    Flexible(
                      child: blueprint == null
                          ? const Center(child: CircularProgressIndicator())
                          : SeatLayoutWidget(
                        controller: seatLayoutController,
                        onSeatTap: handleSeatTap,
                        stateModel: SeatLayoutStateModel(
                          rows: blueprint!.configuration!.height!,
                          cols: blueprint!.configuration!.width!,
                          seatSize: SeatReservationWidget.boxSize,
                          currentObjects: currentBoxes ?? [],
                          allBoxes: allBoxes,
                        ),
                      ),
                    ),
                    const SizedBox(height: 16),
                  ],
                ),
              ),
              const SizedBox(width: 16), // Padding between main content and groups
              // Right panel (Groups)
              Container(
                width: 250,
                padding: const EdgeInsets.all(16.0),
                child: buildGroupsSection(),
              ),
            ],
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
              onPressed: () => Navigator.pop(context),
              style: TextButton.styleFrom(
                foregroundColor: Colors.white,
              ),
              child: Text("Storno").tr(),
            ),
            const SizedBox(width: 16),
            ElevatedButton(
              onPressed: saveChanges,
              child: Text("Save").tr(),
            ),
          ],
        ),
      ),
    );
  }


  Widget buildGroupsSection() {
    return blueprint == null
    ? const Center(child: CircularProgressIndicator()) :
    Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              "Stoly (Skupiny):",
              style: Theme.of(context).textTheme.titleMedium,
            ),
            Row(
              children: [
                IconButton(
                  icon: const Icon(Icons.add),
                  tooltip: "Přidat nový stůl",
                  onPressed: addGroup,
                ),
                IconButton(
                  icon: const Icon(Icons.delete),
                  tooltip: "Smazat vybraný stůl",
                  onPressed: deleteGroup,
                ),
                IconButton(
                  icon: const Icon(Icons.edit),
                  tooltip: "Přejmenovat vybraný stůl",
                  onPressed: renameGroup,
                ),
              ],
            ),
          ],
        ),
        const SizedBox(height: 8),
        Container(
          height: 120, // Limit height for the group list
          child: ListView.builder(
            itemCount: blueprint!.groups!.length,
            itemBuilder: (context, index) {
              final group = blueprint!.groups![index];
              return GestureDetector(
                onTap: () {
                  setState(() {
                    currentGroup = group;
                  });
                },
                child: Container(
                  padding: const EdgeInsets.symmetric(vertical: 4, horizontal: 8),
                  decoration: BoxDecoration(
                    color: currentGroup == group
                        ? Theme.of(context).colorScheme.primary.withOpacity(0.1)
                        : Colors.transparent,
                    border: Border.all(
                      color: currentGroup == group
                          ? Theme.of(context).colorScheme.primary
                          : Colors.grey,
                    ),
                    borderRadius: BorderRadius.circular(4),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        group.title!,
                        style: Theme.of(context).textTheme.bodySmall,
                      ),
                      Text(
                        "${group.objects.length}",
                        style: Theme.of(context).textTheme.bodySmall,
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
      dialogTitle: "Přidat nový stůl",
      labelText: "Číslo stolu",
      initialValue: defaultName,
    );

    if (newTitle != null && newTitle.isNotEmpty) {
      setState(() {
        blueprint!.groups!.add(BlueprintGroupModel(title: newTitle));
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
      dialogTitle: "Přejmenovat stůl",
      labelText: "Nový název",
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
          "Stůl",
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
          "Dostupné",
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
          "Prázdné",
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
          "Obsazené",
          SeatState.ordered,
          isActive: false, // Not clickable
          grayedOut: true,
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          "Vybrané",
          SeatState.selected,
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
          opacity: grayedOut ? 0.4 : 1.0, // Reduce opacity for grayed-out items
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
                SeatWidget.buildSeat(
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
          "Šířka",
          blueprint!.configuration!.width!,
              (value) {
            setState(() {
              blueprint!.configuration!.width = value;
            });
            seatLayoutController.fitLayout(); // Fit layout after width change
          },
        ),
        const SizedBox(width: 12), // Reduced spacing between editors
        buildDimensionEditor(
          "Výška",
          blueprint!.configuration!.height!,
              (value) {
            setState(() {
              blueprint!.configuration!.height = value;
            });
            seatLayoutController.fitLayout(); // Fit layout after height change
          },
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
      dialogTitle: "Změnit název",
      labelText: "Název blueprintu",
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
      default:
      // Do nothing for other cases
        break;
    }
    setState(() {});
  }

  /// Handle adding a black (table area) seat.
  void _handleAddBlack(SeatModel model) {
    model.seatState = SeatState.black;

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
      ToastHelper.Show(context, "Nejdřív vyberte/vytvořte skupinu pro přidání místa (vpravo).");
      return;
    }
    model.seatState = SeatState.available;

    // Remove existing object if it's not a spot
    if (model.objectModel != null && model.objectModel!.type != BlueprintModel.metaSpotType) {
      blueprint!.objects!.remove(model.objectModel!);

      // Remove the object from all groups
      for (var group in blueprint!.groups!) {
        group.objects.remove(model.objectModel);
      }
    }

    // Create or update the object model
    model.objectModel = model.objectModel ?? BlueprintObjectModel(x: model.colI, y: model.rowI);
    model.objectModel!.type = BlueprintModel.metaSpotType;
    model.objectModel!.group = currentGroup;
    model.objectModel!.title = currentGroup?.getNextBoxName();

    // Add the object to the current group and blueprint
    currentGroup?.objects.add(model.objectModel!);
    blueprint!.objects!.add(model.objectModel!);

    // Notify the user
    ToastHelper.Show(context, "Přidáno sedadlo ${model.objectModel!.title}.");
  }

  /// Handle clearing an area (emptying a seat).
  void _handleEmptyArea(SeatModel model) {
    if (model.objectModel != null) {
      // Determine the type of area being removed and notify the user
      if (model.seatState == SeatState.black) {
        ToastHelper.Show(context, "Odstraněna plocha.");
      } else {
        ToastHelper.Show(context, "Odstraněno místo.");
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
    await DbEshop.updateBlueprint(blueprint!);
    ToastHelper.Show(context, "Změny byly uloženy.");
    await loadData();
  }

  Future<void> loadData() async {
    blueprint = await DbEshop.getBlueprintForEdit(widget.id!);

    setState(() {
      currentBoxes = blueprint!.toBlueprintObjects();
    });
  }
}


enum selectionMode { none, emptyArea, addBlack, addAvailable }
