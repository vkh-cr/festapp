import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/components/blueprint/blueprint_object_model.dart';
import 'package:fstapp/components/blueprint/blueprint_seat.dart';
import 'package:fstapp/components/blueprint/blueprint_strings.dart';
import 'package:fstapp/components/eshop/db_orders.dart';
import 'package:fstapp/components/forms/db_forms.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/exception_handler.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:venue_seat_picker/venue_seat_picker.dart';

/// Festapp reservation adapter around the package's optimistic [SeatPicker].
/// SQL remains authoritative; a rejected RPC automatically restores the UI.
class SeatReservationWidget extends StatefulWidget {
  static const int boxSize = 15;

  final int blueprintId;
  final String secret;
  final String formDataKey;
  final void Function(List<BlueprintSeat>)? onSelectionChanged;
  final void Function(List<BlueprintSeat>?)? onCloseSeatReservation;
  final List<BlueprintSeat> selectedSeats;
  final int? maxTickets;

  const SeatReservationWidget({
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
  late final SeatLayoutController<BlueprintObjectModel> _controller;
  late List<BlueprintSeat> _selectedSeats;

  @override
  void initState() {
    super.initState();
    _selectedSeats = List.of(widget.selectedSeats);
    _controller = SeatLayoutController<BlueprintObjectModel>();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _loadData();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => SafeArea(
        child: Center(
          child: Container(
            constraints:
                const BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
            child: Column(
              children: [
                Flexible(
                  child: blueprint == null
                      ? const Center(child: CircularProgressIndicator())
                      : Padding(
                          padding: const EdgeInsets.fromLTRB(12, 24, 12, 0),
                          child: SeatPicker<BlueprintObjectModel>(
                            controller: _controller,
                            maxSelection: widget.maxTickets,
                            onLimitReached: () => ToastHelper.Show(
                              context,
                              BlueprintStrings.toastMaxTicketsReached,
                            ),
                            onSelectionRequest: _requestSelection,
                            onSelectionChanged: (seats) {
                              _selectedSeats = seats;
                              widget.onSelectionChanged?.call(seats);
                              if (mounted) setState(() {});
                            },
                            tooltipBuilder: (context, cell) =>
                                cell.item?.blueprintTooltip(context) ?? '',
                          ),
                        ),
                ),
                Padding(
                  padding: const EdgeInsets.all(16),
                  child: ButtonsHelper.primaryButton(
                    context: context,
                    onPressed: () =>
                        widget.onCloseSeatReservation?.call(_selectedSeats),
                    label: CommonStrings.continueAction,
                    width: 250,
                  ),
                ),
              ],
            ),
          ),
        ),
      );

  Future<bool> _requestSelection(BlueprintSeat seat, bool selected) async {
    final accepted = await ExceptionHandler.guard<bool>(
      context,
      futureFunction: () => DbOrders.selectSpot(
          context, widget.formDataKey, widget.secret, seat.item!.id!, selected),
    );
    return accepted ?? false;
  }

  Future<void> _loadData() async {
    final loaded = await DbForms.getBlueprint(
      widget.secret,
      widget.formDataKey,
      widget.blueprintId,
    );
    if (loaded == null || !mounted) return;
    blueprint = loaded;

    final selectedIds =
        _selectedSeats.map((seat) => seat.item?.id).whereType<int>().toSet();
    for (final object in loaded.objects ?? const []) {
      if (selectedIds.contains(object.id)) {
        object.seatState = SeatState.selectedByMe;
      }
    }

    _controller.loadLayout(
      rows: loaded.configuration?.height ?? 1,
      columns: loaded.configuration?.width ?? 1,
      items: (loaded.objects ?? const [])
          .where((object) => object.x != null && object.y != null),
      cellSize: SeatReservationWidget.boxSize.toDouble(),
      background: switch (loaded.backgroundSvg) {
        final String source when source.isNotEmpty =>
          SeatLayoutBackground.parse(source),
        _ => null,
      },
    );
    _selectedSeats = _controller.cells
        .where((cell) => cell.state == SeatState.selectedByMe)
        .toList();
    setState(() {});
  }
}
