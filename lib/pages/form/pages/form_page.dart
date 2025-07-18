import 'dart:async';

import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/pages/form/pages/reservation_page.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/components/seat_reservation/model/seat_model.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/data_models/form_option_model.dart';
import 'package:fstapp/data_models/form_option_product_model.dart';
import 'package:fstapp/components/eshop/models/product_type_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services_eshop/db_forms.dart';
import 'package:fstapp/data_services_eshop/db_orders.dart';
import 'package:fstapp/pages/form/pages/order_preview_screen.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:flutter/services.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/widgets/html_view.dart';
import 'package:fstapp/components/seat_reservation/widgets/seat_reservation_widget.dart';

import '../models/form_holder.dart';
import '../models/ticket_holder.dart';
import 'order_finish_screen.dart';

@RoutePage()
class FormPage extends StatefulWidget {
  static const ROUTE = "form";

  String? formLink;
  FormPage({super.key, @pathParam this.formLink});

  @override
  _FormPageState createState() => _FormPageState();
}

class _FormPageState extends State<FormPage> {
  bool _isLoading = false;
  bool _formNotAvailable = false;
  double _totalPrice = 0.0;

  int _totalTickets = 0;
  Map<String, dynamic>? formResult;
  FormHolder? formHolder;
  FormModel? form;
  List<SeatModel> selectedSeats = [];

  final _formKey = GlobalKey<FormBuilderState>();
  final ScrollController _scrollController = ScrollController();

  @override
  Future<void> didChangeDependencies() async {
    if (widget.formLink == null && context.routeData.hasPendingChildren) {
      widget.formLink =
          context.routeData.pendingChildren[0].params.getString("formLink");
    }

    await loadData();
    super.didChangeDependencies();
  }

  bool _isSeatReservationVisible = false;
  Completer<List<SeatModel>?>? _seatReservationCompleter;

  /// Simulates the showDialog functionality for SeatReservation
  Future<List<SeatModel>?> _showSeatReservation(List<SeatModel> seats) {
    selectedSeats = seats;
    setState(() {
      _isSeatReservationVisible = true;
    });

    _seatReservationCompleter = Completer<List<SeatModel>?>();

    return _seatReservationCompleter!.future;
  }

  /// Hides the SeatReservationWidget and resolves the completer
  void _hideSeatReservation(List<SeatModel>? seats) {
    setState(() {
      _isSeatReservationVisible = false;
    });

    _seatReservationCompleter!.complete(seats);
    _seatReservationCompleter = null;
  }

  Widget _buildSeatReservationOverlay() {
    if (!_isSeatReservationVisible) return const SizedBox.shrink();

    return Positioned.fill(
      child: Container(
        color: ThemeConfig.dddBackground, // Dim background
        child: Center(
          child: SeatReservationWidget(
            secret: formHolder!.controller!.secret!,
            formDataKey: formHolder!.controller!.formKey!,
            blueprintId: formHolder!.controller!.blueprintId!,
            selectedSeats: selectedSeats,
            maxTickets: formHolder!.getTicket()?.maxTickets,
            onSelectionChanged: (sts) {
              _totalTickets = sts.length;
              _totalPrice = 0;
              for (var s in sts) {
                _totalPrice += s.objectModel?.product?.price ?? 0;
              }
              setState(() {});
            },
            onCloseSeatReservation:
            formHolder!.controller!.onCloseSeatReservation!,
          ),
        ),
      ),
    );
  }

  void _updateTotalPrice() {
    String? currencyC;
    _totalPrice = 0.0;
    _totalTickets = 0;

    for (var field in formHolder!.fields) {
      if (field.fieldType == FormHelper.fieldTypeProductType) {
        var selectedOption = field.getValue(formHolder!.controller!.globalKey);
        if (selectedOption is FormOptionProductModel) {
          _totalPrice += selectedOption.price;
          currencyC ??= selectedOption.currencyCode;
        }
      }

      if (field is TicketHolder) {
        if (_isSeatReservationVisible) {
          _totalTickets = selectedSeats.length;
        } else {
          _totalTickets = field.tickets.length;
        }

        if (_isSeatReservationVisible) {
          for (var s in selectedSeats) {
            _totalPrice += s.objectModel!.product!.price!;
          }
        } else {
          for (var s in field.tickets) {
            if (s.seat != null) {
              _totalPrice += s.seat!.objectModel!.product!.price!;
              currencyC ??= s.seat!.objectModel!.product!.currencyCode;
            }
          }
        }

        var tickets = FormHelper.getFieldData(_formKey, field) ?? [];

        for (var ticketData in tickets) {
          for (var ticketField in ticketData[FormHelper.metaFields]) {
            for (var fValue in ticketField.values) {
              if (fValue is FormOptionProductModel) {
                _totalPrice += fValue.price;
                currencyC ??= fValue.currencyCode;
              } else if (fValue is Iterable) {
                // Convert the JSArray (or any iterable) to a Dart list and sum the prices.
                var products = List<FormOptionProductModel>.from(fValue);
                _totalPrice += products.fold(0, (sum, product) => sum + product.price);
                currencyC ??= products.firstOrNull?.currencyCode;
              }
            }
          }
        }
      }
    }

    formHolder!.controller!.currencyCode = currencyC;
    setState(() {});
  }

  Widget _buildPriceAndTicketInfo() {
    if (_totalPrice <= 0) return SizedBox(); // Do not display if total price is 0

    return Positioned(
      top: 16,
      right: 16,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),
        decoration: BoxDecoration(
          color: Theme.of(context).primaryColor.withOpacity(0.7), // Primary color background
          borderRadius: BorderRadius.circular(8.0),
          boxShadow: [BoxShadow(blurRadius: 5, color: Colors.black26)],
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              "${_totalTickets}x",
              style: const TextStyle(
                fontSize: 18, // Increased font size
                fontWeight: FontWeight.bold,
                color: Colors.white, // White bold text
              ),
            ),
            const SizedBox(width: 6), // Increased spacing
            Icon(
              Icons.local_activity, // Ticket icon
              color: Colors.white,
              size: 24, // Increased icon size
            ),
            const SizedBox(width: 10), // Increased spacing
            Text(
              Utilities.formatPrice(context, _totalPrice, currencyCode: formHolder!.controller!.currencyCode),
              style: const TextStyle(
                fontSize: 18, // Increased font size
                fontWeight: FontWeight.bold,
                color: Colors.white, // White bold text
              ),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _showOrderPreview(BuildContext scrollContext) async {
    TextInput.finishAutofillContext();
    var valid = await FormHelper.saveValidateAndScroll(formHolder!);
    setState(() {});
    if (valid) {
      showModalBottomSheet(
        context: context,
        isScrollControlled: true,
        builder: (_) {
          return OrderPreviewScreen(
            formHolder: formHolder!,
            totalPrice: _totalPrice,
            onSendPressed: _sendOrder,
          );
        },
      );
    }
  }

  void _scrollToTop() {
    _scrollController.jumpTo(0.0);
  }

  Future<void> _sendOrder() async {
    if (formHolder == null || form == null) return;

    setState(() {
      _isLoading = true;
    });

    var data = FormHelper.getDataFromForm(formHolder!);
    data = FormHelper.replaceSpotWithId(data);
    data[FormHelper.metaSecret] = form!.secret;
    data[FormHelper.metaForm] = form!.key;
    formResult = data;

    showGeneralDialog(
      context: context,
      barrierDismissible: false, // Disable dismissing by tapping outside
      barrierLabel: "FinishOrderDialog",
      pageBuilder: (context, anim1, anim2) => FinishOrderScreen(
        orderFutureFunction: () async {
          return await DbOrders.sendTicketOrder(data);
        },
        onResetForm: () async {
          Navigator.of(context).pop(); // Close the FinishOrderScreen
          _scrollToTop();
          await loadData();
          _updateTotalPrice();
        },
      ),
      transitionBuilder: (context, anim1, anim2, child) {
        return FadeTransition(
          opacity: anim1, // Fade animation
          child: child,
        );
      },
    );

    setState(() {
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Stack(
          children: [
            Align(
              alignment: Alignment.topCenter,
              child: ConstrainedBox(
                constraints: BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
                child: Builder(
                  builder: (scrollContext)
                  {
                    return SingleChildScrollView(
                    controller: _scrollController,
                    child: Padding(
                      padding: const EdgeInsets.all(12.0),
                      child: _isLoading
                          ? const Center(child: CircularProgressIndicator())
                          : _formNotAvailable
                          ? _buildFormNotAvailableMessage()
                          : (formHolder == null
                          ? const Center(child: CircularProgressIndicator())
                          : FormBuilder(
                        key: _formKey,
                        child: AutofillGroup(
                          child: Column(
                            children: [
                              if (form!.header != null)
                                Column(
                                  children: [
                                    HtmlView(
                                        html: form!.header!,
                                        isSelectable: true),
                                    const SizedBox(height: 16),
                                  ],
                                ),
                              ...FormHelper.getAllFormFields(
                                  context, _formKey, formHolder!),
                              const SizedBox(height: 32),
                              ButtonsHelper.primaryButton(
                                context: context,
                                onPressed: _isLoading
                                    ? null
                                    : () => _showOrderPreview(scrollContext),
                                label: "Continue".tr(),
                                isLoading: _isLoading,
                                height: 50.0,
                                width: 250.0,
                                //isEnabled: _totalPrice > 0,
                              ),
                              const SizedBox(height: 32),
                            ],
                          ),
                        ),
                      )),
                    ),
                  );
                  },
                ),
              ),
            ),
            _buildSeatReservationOverlay(),
            _buildPriceAndTicketInfo(),
          ],
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.endDocked,
      floatingActionButton: Padding(
        padding: EdgeInsets.only(bottom: 24),
        child: Visibility(
          visible: RightsService.isEditor(),
          child: FloatingActionButton(
            onPressed: () {
              RouterService.navigateOccasion(
                  context, ReservationsPage.ROUTE)
                  .then((value) => loadData());
            },
            child: const Icon(Icons.edit),
          ),
        ),
      ),
    );
  }

  Widget _buildFormNotAvailableMessage() {
    String notAvailableText = (form?.headerOff?.isNotEmpty ?? false)
        ? form!.headerOff!
        : "Reservation for the selected event is currently unavailable.".tr();
    return Center(
      child: Container(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisSize: MainAxisSize.min,
          children: [
            const Icon(
              Icons.event_busy,
              size: 60,
            ),
            const SizedBox(height: 16),
            const Text(
              "Reservation Unavailable",
              style: TextStyle(
                fontSize:  24,
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ).tr(),
            const SizedBox(height: 8),
            IntrinsicWidth(
              child: HtmlView(
                html: notAvailableText,
                isSelectable: true,
              ),
            ),
            const SizedBox(height: 24),
          ],
        ),
      ),
    );
  }

  // Function to generate options for a specific item type and add them to the ticket fields
  Map<String, dynamic> generateOptionsForItemType(
      List<ProductTypeModel> allItems, String itemType) {
    var itemTypeModel =
    allItems.firstWhereOrNull((item) => item.type == itemType);

    if (itemTypeModel == null || itemTypeModel.products == null) {
      return {};
    }

    List<Map<String, dynamic>> options = [];

    for (var item in itemTypeModel.products!) {
      options.add({
        FormOptionModel.metaOptionsName: item.title.toString(),
        FormOptionModel.metaOptionsId: item.id.toString(),
        FormOptionModel.metaOptionsPrice: item.price ?? 0.0, // Include price in the options
      });
    }

    return {
      FormHelper.metaType: FormHelper.fieldTypeSelectOne,
      FormHelper.metaOptions: options,
      FormHelper.metaLabel: itemTypeModel.title,
      FormHelper.metaOptionsType: itemType,
    };
  }

  Future<void> loadData() async {
    setState(() {
      _isLoading = true;
      _formNotAvailable = false; // Reset the message flag
    });

    if (widget.formLink == null) {
      setState(() {
        _isLoading = false;
        _formNotAvailable = true; // Show message if formLink is null
      });
      return;
    }
    //var key = UuidConverter.base62ToUuid(widget.id!);

    try {
      form = await DbForms.getFormFromLink(widget.formLink!);
      if (form == null) {
        setState(() {
          _isLoading = false;
          _formNotAvailable = true; // Show message if form is not found
        });
        return;
      }

      formHolder = FormHolder.fromFormFieldModel(form!);

      formHolder!.controller = FormHolderController(
          secret: form!.secret,
          blueprintId: form!.blueprint,
          globalKey: _formKey,
          formKey: form!.key!,
          updateTotalPrice: _updateTotalPrice,
          showSeatReservation: _showSeatReservation,
          onCloseSeatReservation: _hideSeatReservation);

      setState(() {
        _isLoading = false;
      });
    } catch (e) {
      // Handle any unexpected errors
      print("Error loading form: $e");
      setState(() {
        _isLoading = false;
        _formNotAvailable = true;
      });
    }
  }
}
