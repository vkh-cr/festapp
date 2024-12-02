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
                buildDimensionControls(), // Dimension controls above layout
                const SizedBox(height: 12),
                Flexible(
                  child: blueprint == null
                      ? const Center(child: CircularProgressIndicator())
                      : SeatLayoutWidget(
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
                const SizedBox(height: 12),
                buildLegend(), // Legend moved below layout
                const SizedBox(height: 12),
                buildEditorActions(), // Save and cancel buttons
                const SizedBox(height: 12),
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
              (value) => setState(() {
            currentWidth = value;
          }),
        ),
        const SizedBox(width: 16),
        buildDimensionEditor(
          "Výška",
          currentHeight,
              (value) => setState(() {
            currentHeight = value;
          }),
        ),
      ],
    );
  }

  Widget buildLegend() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          buildLegendItem("Obsazené", SeatState.ordered),
          buildLegendItem("Dostupné", SeatState.available, selectable: true, onTap: () {
            currentSelectionMode = selectionMode.addAvailable;
          }),
          buildLegendItem("Vybrané", SeatState.selected),
          buildLegendItem("Stůl", SeatState.black, selectable: true, onTap: () {
            currentSelectionMode = selectionMode.addBlack;
          }),
        ],
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

  Widget buildLegendItem(String label, SeatState state, {bool selectable = false, VoidCallback? onTap}) {
    return GestureDetector(
      onTap: selectable ? onTap : null,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          SeatWidget.buildSeat(state: state, size: SeatReservationWidget.boxSize.toDouble()),
          const SizedBox(width: 8),
          Text(label),
        ],
      ),
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
