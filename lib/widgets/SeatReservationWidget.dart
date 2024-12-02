import 'package:flutter/material.dart';
import 'package:fstapp/components/seatReservation/widgets/SeatWidget.dart';
import 'package:fstapp/dataModelsEshop/BlueprintModel.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/StylesConfig.dart';

import '../components/seatReservation/model/BoxGroupModel.dart';
import '../components/seatReservation/model/BoxModel.dart';
import '../components/seatReservation/model/SeatLayoutStateModel.dart';
import '../components/seatReservation/model/SeatModel.dart';
import '../components/seatReservation/utils/SeatState.dart';
import '../components/seatReservation/widgets/SeatLayoutWidget.dart';

class SeatReservationWidget extends StatefulWidget {
  final int blueprintId;
  final String secret;
  final String formKey;

  SeatReservationWidget({Key? key, required this.blueprintId, required this.secret, required this.formKey}) : super(key: key);

  @override
  State<SeatReservationWidget> createState() => _SeatReservationWidgetState();
}

class _SeatReservationWidgetState extends State<SeatReservationWidget> {
  Set<BoxModel> selectedSeats = {};
  BlueprintModel? blueprint;
  _SeatReservationWidgetState();

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    loadData();
  }

  List<BoxModel>? currentBoxes;
  BoxGroupModel? currentBoxGroup;

  int currentWidth = 20;
  int currentHeight = 20;

  List<SeatModel> changedBoxes = [];
  List<SeatModel> allBoxes = [];

  static int boxSize = 15;
  selectionMode currentSelectionMode = selectionMode.normal;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: Container(
            constraints: const BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const SizedBox(
                  height: 16,
                ),
                Text(blueprint?.title ?? "", style: const TextStyle(fontWeight: FontWeight.bold)),
                const SizedBox(
                  height: 16,
                ),
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          SeatWidget.buildSeat(
                            state: SeatState.ordered,
                            size: 15.0,
                          ),
                          const SizedBox(width: 8),
                          const Text("obsazené"),
                        ],
                      ),
                      Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          GestureDetector(
                            onTap: () {
                              if (currentBoxGroup != null) {
                                currentSelectionMode = selectionMode.addAvailable;
                              }
                            },
                            child: SeatWidget.buildSeat(
                              state: SeatState.available,
                              size: 15.0,
                            ),
                          ),
                          const SizedBox(width: 8),
                          const Text("dostupné"),
                        ],
                      ),
                      Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          SeatWidget.buildSeat(
                            state: SeatState.selected,
                            size: 15.0,
                          ),
                          const SizedBox(width: 8),
                          const Text("vybrané"),
                        ],
                      ),
                      Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          GestureDetector(
                            onTap: () {
                              if (currentBoxGroup != null) {
                                currentSelectionMode = selectionMode.addBlack;
                              }
                            },
                            child: SeatWidget.buildSeat(
                              state: SeatState.black,
                              size: 15.0,
                            ),
                          ),
                          const SizedBox(width: 8),
                          const Text("stůl"),
                        ],
                      ),
                    ],
                  ),
                ),
                const SizedBox(
                  height: 12,
                ),
                Visibility(
                  visible: currentBoxes != null,
                  child: Flexible(
                    child: SeatLayoutWidget(
                      onSeatTap: (model) {
                        if (currentSelectionMode == selectionMode.addBlack) {
                          model.seatState = SeatState.black;
                          changedBoxes.add(model);
                        } else if (currentSelectionMode == selectionMode.addAvailable) {
                          model.seatState = SeatState.available;
                          model.boxModel = model.boxModel ?? BoxModel(x: model.colI, y: model.rowI);
                          model.boxModel!.boxGroupId = currentBoxGroup!.id;
                          model.boxModel!.name = currentBoxGroup!.getNextBoxName();
                          currentBoxGroup!.boxes!.add(model.boxModel!);

                          changedBoxes.add(model);
                          ToastHelper.Show(context, "Přidáno sedadlo ${model.boxModel!.name}.");
                        } else if (currentSelectionMode == selectionMode.normal) {
                          if (model.seatState == SeatState.selected) {
                            model.seatState = SeatState.available;
                            changedBoxes.remove(model);
                            return;
                          } else if (model.seatState != SeatState.available) {
                            return;
                          }

                          // available
                          var alreadySelected = allBoxes.where((b) => b.seatState == SeatState.selected);
                          if (alreadySelected.isNotEmpty) {
                            ToastHelper.Show(context, "Je možné vybrat pouze jedno místo!");
                            return;
                          }
                          model.seatState = SeatState.selected;
                          changedBoxes.add(model);
                        }
                      },
                      stateModel: SeatLayoutStateModel(
                        rows: currentHeight,
                        cols: currentWidth,
                        seatSize: boxSize,
                        currentBoxes: currentBoxes ?? [],
                        allBoxes: allBoxes,
                      ),
                    ),
                  ),
                ),
                const SizedBox(
                  height: 12,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Visibility(
                      visible: RightsService.isEditor(),
                      child: ElevatedButton(
                        onPressed: () async {
                          Set<BoxGroupModel> tables = {};
                          tables.addAll(currentBoxes!.where((element) => element.boxGroup != null).map((e) => e.boxGroup!));
                          var newTableName = ((tables.length + 1)).toString();
                          var result = await DialogHelper.showConfirmationDialogAsync(context, "Přidat stůl", "Chcete přidat stůl ${newTableName}?");
                          if (!result) {
                            return;
                          }
                          var newBox = BoxGroupModel(name: newTableName, blueprintId: blueprint?.id);
                          // currentBoxGroup = await DataService.updateBoxGroup(newBox);
                          ToastHelper.Show(context, "Vytvořen stůl ${newTableName}.");
                        },
                        child: const Text("přidat stůl"),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Visibility(
                      visible: RightsService.isEditor(),
                      child: ElevatedButton(
                        onPressed: () async {
                          Set<BoxGroupModel> tables = {};
                          tables.addAll(currentBoxes!.where((element) => element.boxGroup != null).map((e) => e.boxGroup!));
                          // var selectedTable = await DialogHelper.chooseBoxGroup(context, tables.toList());
                          var selectedTable = null;

                          if (selectedTable == null) {
                            return;
                          }
                          var result = await DialogHelper.showConfirmationDialogAsync(context, "Přidání ke stolu", "Chcete přidat židle ke stolu ${selectedTable.name!}?");
                          if (!result) {
                            return;
                          }
                          currentBoxGroup = selectedTable;
                          ToastHelper.Show(context, "Nyní přidáváte ke stolu ${selectedTable.name}.");
                        },
                        child: const Text("přidat ke stolu"),
                      ),
                    ),
                    const SizedBox(width: 12),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.pop(context);
                      },
                      child: const Text("zpět"),
                    ),
                    const SizedBox(width: 12),
                    ElevatedButton(
                      onPressed: () {
                        var changed = changedBoxes.map((e) {
                          var newBoxModel = e.boxModel ?? BoxModel(x: e.colI, y: e.rowI);
                          newBoxModel.type = e.seatState;
                          return newBoxModel;
                        }).toList();

                        // only non-selected
                        selectedSeats.clear();
                        selectedSeats.addAll(changed.where((element) => element.type == BoxModel.selectedType));
                        changed = changed.where((element) => element.type != BoxModel.selectedType).toList();

                        // DataService.updateBoxes(changed);
                        Navigator.pop(context);
                      },
                      child: const Text("uložit"),
                    ),
                  ],
                ),
                const SizedBox(height: 12),
              ],
            ),
          ),
        ),
      ),
    );
  }

  void loadData() async {
    blueprint = await DbEshop.getBlueprint(widget.secret, widget.formKey, widget.blueprintId);
    if (blueprint == null) {
      return;
    }

    setState(() {
      currentBoxes = blueprint!.toBoxModels();
      currentHeight = blueprint!.configuration!.height!;
      currentWidth = blueprint!.configuration!.width!;
    });
  }
}

enum selectionMode {
  normal,
  addBlack,
  addAvailable,
}
