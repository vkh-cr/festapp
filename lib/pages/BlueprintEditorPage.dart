import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/seatReservation/widgets/SeatWidget.dart';
import 'package:fstapp/dataModelsEshop/BlueprintGroup.dart';
import 'package:fstapp/dataModelsEshop/BlueprintModel.dart';
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/styles/StylesConfig.dart';
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

  int currentWidth = 20;
  int currentHeight = 20;

  List<SeatModel> changedBoxes = [];
  List<SeatModel> allBoxes = [];
  bool showHint = true;

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
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Center(
              child: Text(
                blueprint?.title ?? "",
                overflow: TextOverflow.ellipsis,
              ),
            ),
            IconButton(
              icon: const Icon(Icons.edit),
              onPressed: editBlueprintTitle,
            ),
          ],
        ),
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
                    if (showHint)
                      Padding(
                        padding: const EdgeInsets.only(bottom: 16.0),
                        child: Text(
                          "Pro přidávání sedadel a stolů klikněte na čtvereček v legendě (Dostupné nebo Stůl).",
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
                    buildDimensionControls(),
                    const SizedBox(height: 16),
                    Flexible(
                      child: blueprint == null
                          ? const Center(child: CircularProgressIndicator())
                          : SeatLayoutWidget(
                        controller: seatLayoutController,
                        onSeatTap: handleSeatTap,
                        stateModel: SeatLayoutStateModel(
                          rows: currentHeight,
                          cols: currentWidth,
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
                        "${group.objects.length} objektů",
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
    final newTitle = await DialogHelper.showInputDialog(
      context: context,
      dialogTitle: "Přidat nový stůl",
      labelText: "Název stolu",
    );

    if (newTitle != null && newTitle.isNotEmpty) {
      setState(() {
        blueprint!.groups!.add(BlueprintGroupModel(title: newTitle));
        blueprint!.groups!.sort((a,b) => Utilities.naturalCompare(a.title!, b.title!));
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
              showHint = false; // Hide hint on click
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
              showHint = false; // Hide hint on click
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
          currentWidth,
              (value) {
            setState(() {
              currentWidth = value;
            });
            seatLayoutController.fitLayout(); // Fit layout after width change
          },
        ),
        const SizedBox(width: 12), // Reduced spacing between editors
        buildDimensionEditor(
          "Výška",
          currentHeight,
              (value) {
            setState(() {
              currentHeight = value;
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
    if (currentSelectionMode == selectionMode.addBlack) {
      model.seatState = SeatState.black;
      changedBoxes.add(model);
    } else if (currentSelectionMode == selectionMode.addAvailable) {
      model.seatState = SeatState.available;
      model.objectModel = model.objectModel ?? BlueprintObjectModel(x: model.colI, y: model.rowI);
      model.objectModel!.group = currentGroup!;
      model.objectModel!.title = currentGroup!.getNextBoxName();
      currentGroup!.objects.add(model.objectModel!);
      changedBoxes.add(model);
      ToastHelper.Show(context, "Přidáno sedadlo ${model.objectModel!.title}.");
    }
    setState(() {});
  }

  void saveChanges() async {
    var updatedObjects = changedBoxes.map((e) {
      var newObject = e.objectModel ?? BlueprintObjectModel(x: e.colI, y: e.rowI);
      newObject.stateEnum = e.seatState;
      return newObject;
    }).toList();

    // Save changes to the backend
    // DataService.updateBlueprintObjects(updatedObjects);

    ToastHelper.Show(context, "Změny byly uloženy.");
    Navigator.pop(context);
  }

  void loadData() async {
    blueprint = await DbEshop.getBlueprintForEdit(widget.id!);

    setState(() {
      currentBoxes = blueprint!.toBlueprintObjects();
      currentHeight = blueprint!.configuration!.height!;
      currentWidth = blueprint!.configuration!.width!;
    });
  }
}


enum selectionMode { none, addBlack, addAvailable }
