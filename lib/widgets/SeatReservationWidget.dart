import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/seatReservation/widgets/SeatWidget.dart';
import 'package:fstapp/dataModelsEshop/BlueprintGroup.dart';
import 'package:fstapp/dataModelsEshop/BlueprintModel.dart';
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
  final String formDataKey;
  SeatModel? selectedSeat;

  SeatReservationWidget({Key? key, required this.blueprintId, required this.secret, required this.formDataKey, this.selectedSeat}) : super(key: key);

  @override
  State<SeatReservationWidget> createState() => _SeatReservationWidgetState();
}

class _SeatReservationWidgetState extends State<SeatReservationWidget> {
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
                            state: SeatState.selected_by_me,
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
                    onSeatTap: (model) async {
                      if (model.seatState == SeatState.selected_by_me_focused) {
                        if(await DbEshop.selectSpot(context, widget.formDataKey, widget.secret, widget.selectedSeat!.objectModel!.id!, false)){
                          model.seatState = SeatState.available;
                          widget.selectedSeat = null;
                        }
                      } else if (model.seatState == SeatState.available) {
                        if (widget.selectedSeat != null) {
                          if(await DbEshop.selectSpot(context, widget.formDataKey, widget.secret, widget.selectedSeat!.objectModel!.id!, false)){
                            widget.selectedSeat!.seatState = SeatState.available;
                          }
                        }
                        model.seatState = SeatState.selected_by_me_focused;
                        widget.selectedSeat = model;
                        if(!await DbEshop.selectSpot(context, widget.formDataKey, widget.secret, widget.selectedSeat!.objectModel!.id!, true)){
                          widget.selectedSeat = null;
                          model.seatState = SeatState.available;
                        }
                      }
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
                    const SizedBox(width: 24),
                    ElevatedButton(
                      onPressed: () {
                        // Save changes logic
                        Navigator.pop(context, widget.selectedSeat);
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
    blueprint = await DbEshop.getBlueprint(widget.secret, widget.formDataKey, widget.blueprintId);
    if (blueprint == null) {
      return;
    }

    if (widget.selectedSeat != null) {
      blueprint?.objects
          ?.firstWhereOrNull((object) => object.id == widget.selectedSeat?.objectModel?.id)
          ?.stateEnum = SeatState.selected_by_me_focused;
    }


    setState(() {});
  }
}
