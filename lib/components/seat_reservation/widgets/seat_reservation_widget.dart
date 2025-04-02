import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/dataServicesEshop/DbEshop.dart';
import 'package:fstapp/dataServicesEshop/DbForms.dart';
import 'package:fstapp/dataServicesEshop/DbOrders.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';

import '../model/seat_layout_state_model.dart';
import '../model/seat_model.dart';
import '../utils/seat_state.dart';
import 'seat_layout_widget.dart';

class SeatReservationWidget extends StatefulWidget {
  static const int boxSize = 15;

  final int blueprintId;
  final String secret;
  final String formDataKey;
  final void Function(List<SeatModel>)? onSelectionChanged;
  final void Function(List<SeatModel>?)? onCloseSeatReservation;
  List<SeatModel> selectedSeats;
  final int? maxTickets;

  SeatReservationWidget({
    Key? key,
    required this.blueprintId,
    required this.secret,
    required this.formDataKey,
    required this.selectedSeats,
    this.maxTickets,
    this.onSelectionChanged,
    this.onCloseSeatReservation,
  }) : super(key: key);

  @override
  State<SeatReservationWidget> createState() => _SeatReservationWidgetState();
}

class _SeatReservationWidgetState extends State<SeatReservationWidget> {
  List<SeatModel> allObjects = [];
  BlueprintModel? blueprint;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    loadData();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
          child: Stack(
            children: [
              // Main Content
              Column(
                children: [
                  Flexible(
                    child: blueprint == null
                        ? const Center(child: CircularProgressIndicator())
                        : Padding(
                      padding: const EdgeInsets.fromLTRB(12, 24, 12, 0),
                      child: SeatLayoutWidget(
                        onSeatTap: (model) async {
                          await _handleSeatTap(model);
                        },
                        stateModel: SeatLayoutStateModel(
                          rows: blueprint!.configuration!.height!,
                          cols: blueprint!.configuration!.width!,
                          seatSize: SeatReservationWidget.boxSize,
                          currentObjects: blueprint!.objects!,
                          allBoxes: allObjects,
                          backgroundSvg: blueprint!.backgroundSvg,
                        ),
                      ),
                    ),
                  ),
                  // Bottom Buttons
                  Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Center(
                      child: ButtonsHelper.primaryButton(
                        context: context,
                        onPressed: () {
                          widget.onCloseSeatReservation?.call(widget.selectedSeats);
                        },
                        label: "Continue".tr(),
                        width: 250
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  /// Handles Seat Tap Logic
  Future<void> _handleSeatTap(SeatModel model) async {
    if (model.seatState == SeatState.selected_by_me) {
      model.seatState = SeatState.available;
      setState(() {});
      if (await DbOrders.selectSpot(
        context,
        widget.formDataKey,
        widget.secret,
        model.objectModel!.id!,
        false,
      )) {
        model.seatState = SeatState.available;
        model.objectModel!.stateEnum = SeatState.available;
        widget.selectedSeats.remove(model);
      } else {
        model.seatState = SeatState.selected_by_me;
      }
    } else if (model.seatState == SeatState.available) {
      if(widget.maxTickets != null && widget.selectedSeats.length >= widget.maxTickets!){
        ToastHelper.Show(context, "It is not possible to select more tickets.".tr());
        return;
      }
      model.seatState = SeatState.selected_by_me;
      setState(() {});
      if (await DbOrders.selectSpot(
        context,
        widget.formDataKey,
        widget.secret,
        model.objectModel!.id!,
        true,
      )) {
        widget.selectedSeats.add(model);
        model.seatState = SeatState.selected_by_me;
        model.objectModel!.stateEnum = SeatState.selected_by_me;
      } else {
        model.seatState = SeatState.available;
      }
    }
    widget.onSelectionChanged?.call(widget.selectedSeats);
  }

  /// Loads Blueprint Data
  void loadData() async {
    blueprint = await DbForms.getBlueprint(
      widget.secret,
      widget.formDataKey,
      widget.blueprintId,
    );
    if (blueprint == null) return;

    blueprint?.objects
        ?.firstWhereOrNull((object) => widget.selectedSeats.any((s) => s.objectModel!.id! == object.id))
        ?.stateEnum = SeatState.selected_by_me;

    setState(() {});
  }
}
