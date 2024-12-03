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
            Text("Editor Blueprintu:"),
            Flexible(
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
          child: Container(
            constraints: const BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const SizedBox(height: 16),
                buildDimensionControls(),
                const SizedBox(height: 12),
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
                buildLegend(),
                const SizedBox(height: 16),
              ],
            ),
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
        const SizedBox(width: 16),
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

  Widget buildLegend() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center, // Center legend items
        children: [
          buildLegendItem("Obsazené", SeatState.ordered, isActive: currentSelectionMode == selectionMode.none),
          const SizedBox(width: 8), // Reduce spacing
          buildLegendItem("Dostupné", SeatState.available, isActive: currentSelectionMode == selectionMode.addAvailable, onTap: () {
            setState(() {
              currentSelectionMode = selectionMode.addAvailable;
            });
          }),
          const SizedBox(width: 8),
          buildLegendItem("Vybrané", SeatState.selected, isActive: currentSelectionMode == selectionMode.none),
          const SizedBox(width: 8),
          buildLegendItem("Stůl", SeatState.black, isActive: currentSelectionMode == selectionMode.addBlack, onTap: () {
            setState(() {
              currentSelectionMode = selectionMode.addBlack;
            });
          }),
        ],
      ),
    );
  }

  Widget buildLegendItem(String label, SeatState state, {bool isActive = false, VoidCallback? onTap}) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          border: Border.all(
            color: isActive ? Colors.blue : Colors.transparent, // Highlight active state
            width: 2,
          ),
          borderRadius: BorderRadius.circular(4),
        ),
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            SeatWidget.buildSeat(state: state, size: SeatReservationWidget.boxSize.toDouble()),
            const SizedBox(width: 4),
            Text(label),
          ],
        ),
      ),
    );
  }

  Widget buildDimensionEditor(String label, int currentValue, ValueChanged<int> onChanged) {
    return Column(
      children: [
        Text(label),
        const SizedBox(height: 8),
        Row(
          children: [
            IconButton(
              icon: const Icon(Icons.remove),
              onPressed: () {
                if (currentValue > 1) {
                  onChanged(currentValue - 1);
                }
              },
            ),
            Text(
                "$currentValue"
            ),
            IconButton(
              icon: const Icon(Icons.add),
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
