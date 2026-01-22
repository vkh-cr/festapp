import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/components/forms/db_forms.dart';
import 'package:fstapp/components/eshop/db_orders.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';

import '../model/seat_model.dart';
import '../utils/seat_state.dart';
import 'seat_layout_controller.dart';
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
    super.key,
    required this.blueprintId,
    required this.secret,
    required this.formDataKey,
    required this.selectedSeats,
    this.maxTickets,
    this.onSelectionChanged,
    this.onCloseSeatReservation,
  });

  @override
  State<SeatReservationWidget> createState() => _SeatReservationWidgetState();
}

class _SeatReservationWidgetState extends State<SeatReservationWidget> {
  BlueprintModel? blueprint;
  late final SeatLayoutController _seatLayoutController;

  @override
  void initState() {
    super.initState();
    _seatLayoutController = SeatLayoutController();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    loadData();
  }

  @override
  void dispose() {
    _seatLayoutController.dispose();
    super.dispose();
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
                        controller: _seatLayoutController,
                        isEditorMode: false,
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
      // Deselect
      model.seatState = SeatState.available; // Optimistic update
      _seatLayoutController.updateSeat(model, SeatState.available);
      
      // Optimistic list update
      widget.selectedSeats.remove(model);
      widget.onSelectionChanged?.call(widget.selectedSeats);
      setState(() {});

      bool success = false;
      try{
        success = await DbOrders.selectSpot(
          context,
          widget.formDataKey,
          widget.secret,
          model.objectModel!.id!,
          false,
        );
      } catch(e){
        success = false;
      }

      if (success) {
        model.objectModel!.stateEnum = SeatState.available;
      } else {
        // Revert
        model.seatState = SeatState.selected_by_me;
        _seatLayoutController.updateSeat(model, SeatState.selected_by_me);
        
        // Revert list update
        widget.selectedSeats.add(model);
        widget.onSelectionChanged?.call(widget.selectedSeats);
      }
    } else if (model.seatState == SeatState.available) {
      // Select
      if(widget.maxTickets != null && widget.selectedSeats.length >= widget.maxTickets!){
        ToastHelper.Show(context, "It is not possible to select more tickets.".tr());
        return;
      }
      model.seatState = SeatState.selected_by_me; // Optimistic update
      _seatLayoutController.updateSeat(model, SeatState.selected_by_me);

      // Optimistic list update
      widget.selectedSeats.add(model);
      widget.onSelectionChanged?.call(widget.selectedSeats);
      setState(() {});

      bool success = false;
      try{
        success = await DbOrders.selectSpot(
          context,
          widget.formDataKey,
          widget.secret,
          model.objectModel!.id!,
          true,
        );
      } catch (e){
        success = false;
      }

      if (success) {
        model.objectModel!.stateEnum = SeatState.selected_by_me;
      } else {
        // Revert
        model.seatState = SeatState.available;
        _seatLayoutController.updateSeat(model, SeatState.available);

        // Revert list update
        widget.selectedSeats.remove(model);
        widget.onSelectionChanged?.call(widget.selectedSeats);
      }
    }
    // We already called onSelectionChanged optimistically, so no need to call it here at the end unconditionally
  }

  /// Loads Blueprint Data
  void loadData() async {
    blueprint = await DbForms.getBlueprint(
      widget.secret,
      widget.formDataKey,
      widget.blueprintId,
    );
    if (blueprint == null || !mounted) return;

    // Manually set already selected seats
    for (var object in blueprint!.objects ?? []) {
      if (widget.selectedSeats.any((s) => s.objectModel!.id! == object.id)) {
        object.stateEnum = SeatState.selected_by_me;
      }
    }

    _seatLayoutController.loadBlueprint(
      blueprint!,
      newSeatSize: SeatReservationWidget.boxSize,
    );

    setState(() {});
  }
}