import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/seatReservation/widgets/SeatWidget.dart';
import 'package:fstapp/dataModelsEshop/BlueprintGroup.dart';
import 'package:fstapp/dataModelsEshop/BlueprintModel.dart';
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/styles/StylesConfig.dart';

import '../components/seatReservation/model/SeatLayoutStateModel.dart';
import '../components/seatReservation/model/SeatModel.dart';
import '../components/seatReservation/utils/SeatState.dart';
import '../components/seatReservation/widgets/SeatLayoutWidget.dart';

class SeatReservationWidget extends StatefulWidget {
  static const int boxSize = 15;

  final int blueprintId;
  final String secret;
  final String formKey;

  SeatReservationWidget({Key? key, required this.blueprintId, required this.secret, required this.formKey}) : super(key: key);

  @override
  State<SeatReservationWidget> createState() => _SeatReservationWidgetState();
}

class _SeatReservationWidgetState extends State<SeatReservationWidget> {
  SeatModel? selectedSeat;
  List<SeatModel> allObjects = [];


  BlueprintModel? blueprint;
  _SeatReservationWidgetState();

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    loadData();
  }

  BlueprintGroupModel? currentBoxGroup;

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
                const SizedBox(height: 16),
                Text(blueprint?.title ?? "", style: StylesConfig.textStyleBig),
                const SizedBox(height: 16),
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          SeatWidgetHelper.buildSeat(
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
                          SeatWidgetHelper.buildSeat(
                            state: SeatState.available,
                            size: SeatReservationWidget.boxSize.toDouble(),
                          ),
                          const SizedBox(width: 8),
                          const Text("dostupné"),
                        ],
                      ),
                      Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          SeatWidgetHelper.buildSeat(
                            state: SeatState.selected,
                            size: SeatReservationWidget.boxSize.toDouble(),
                          ),
                          const SizedBox(width: 8),
                          const Text("vybrané"),
                        ],
                      ),
                      Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          SeatWidgetHelper.buildSeat(
                            state: SeatState.black,
                            size: 15.0,
                          ),
                          const SizedBox(width: 8),
                          const Text("stůl"),
                        ],
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 12),
                Flexible(
                  child:
                  blueprint == null
                      ? const Center(child: CircularProgressIndicator()) :
                  SeatLayoutWidget(
                    onSeatTap: (model) {
                      if (model.seatState == SeatState.selected) {
                        model.seatState = SeatState.available;
                        selectedSeat = null;
                        return;
                      } else if (model.seatState != SeatState.available) {
                        return;
                      }

                      if(selectedSeat != null) {
                        selectedSeat?.seatState = SeatState.available;
                      }
                      model.seatState = SeatState.selected;
                      selectedSeat = model;
                      setState(() {});
                    },
                    stateModel: SeatLayoutStateModel(
                      rows: blueprint!.configuration!.height!,
                      cols: blueprint!.configuration!.width!,
                      seatSize: SeatReservationWidget.boxSize,
                      currentObjects: blueprint!.objects!,
                      allBoxes: allObjects,
                    ),
                  ),
                ),
                const SizedBox(height: 12),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    ElevatedButton(
                      onPressed: () {
                        Navigator.pop(context);
                      },
                      child: const Text("Storno").tr(),
                    ),
                    const SizedBox(width: 12),
                    ElevatedButton(
                      onPressed: () {
                        // Save changes logic
                        Navigator.pop(context);
                      },
                      child: const Text("Save").tr(),
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

    setState(() {});
  }
}

enum selectionMode {
  normal,
  addBlack,
  addAvailable,
}
