import 'dart:async';

import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/components/seatReservation/model/SeatModel.dart';
import 'package:fstapp/dataModels/FormFields.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'package:fstapp/dataModelsEshop/ProductTypeModel.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/Eshop/OrderFinishScreen.dart';
import 'package:fstapp/pages/Eshop/OrderPreviewScreen.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/services/UuidConverter.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:flutter/services.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:fstapp/widgets/SeatReservationWidget.dart';

@RoutePage()
class FormPage extends StatefulWidget {
  static const ROUTE = "form";

  String? formLink;
  FormPage({super.key,  @pathParam this.formLink});

  @override
  _FormPageState createState() => _FormPageState();
}

class _FormPageState extends State<FormPage> {
  bool _isLoading = false;
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
      widget.formLink = context.routeData.pendingChildren[0].pathParams.getString("formLink");
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
              for(var s in sts){
                _totalPrice += s.objectModel?.product?.price ?? 0;
              }
              setState(() {});
            },
            onCloseSeatReservation: formHolder!.controller!.onCloseSeatReservation!,
          ),
        ),
      ),
    );
  }

  void _updateTotalPrice() {
    _totalPrice = 0.0;
    _totalTickets = 0;

    for (var field in formHolder!.fields) {
      if (field.fieldType == FormHelper.fieldTypeOptions) {
        var selectedOption = field.getValue(formHolder!.controller!.globalKey);
        if (selectedOption is FormOptionModel) {
          _totalPrice += selectedOption.price;
        }
      }

      if (field is TicketHolder) {
        if(_isSeatReservationVisible){
          _totalTickets = selectedSeats.length;
        } else {
          _totalTickets = field.tickets.length;
        }

        if(_isSeatReservationVisible){
          for (var s in selectedSeats) {
            _totalPrice += s.objectModel!.product!.price!;
          }
        } else {
          for (var s in field.tickets) {
            _totalPrice += s.seat.objectModel!.product!.price!;
          }
        }

        var ticketDataList = FormHelper.getFieldData(_formKey, field) ?? [];

        for (var ticketData in ticketDataList) {
          for (var ticketValue in ticketData.values) {
            if (ticketValue is FormOptionModel) {
              _totalPrice += ticketValue.price;
            }
          }
        }
      }
    }

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
              Utilities.formatPrice(context, _totalPrice),
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

  void _showOrderPreview() {
    TextInput.finishAutofillContext();
    if (FormHelper.saveAndValidate(formHolder!))
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
    data[FormHelper.metaForm] = form!.formKey;
    formResult = data;

    showGeneralDialog(
      context: context,
      barrierDismissible: false, // Disable dismissing by tapping outside
      barrierLabel: "FinishOrderDialog",
      pageBuilder: (context, anim1, anim2) => FinishOrderScreen(
        orderFutureFunction: () async {
          return await DbEshop.sendTicketOrder(data);
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
      body: Stack(
        children: [
          Align(
            alignment: Alignment.topCenter,
            child: ConstrainedBox(
              constraints: BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
              child: SingleChildScrollView(
                controller: _scrollController,
                child: Padding(
                  padding: const EdgeInsets.all(12.0),
                  child: formHolder == null
                      ? const Center(child: CircularProgressIndicator())
                      : FormBuilder(
                    key: _formKey,
                    child: AutofillGroup(
                      child: Column(
                        children: [
                          if (form!.header != null)
                            Column(
                              children: [
                                HtmlView(html: form!.header!, isSelectable: true),
                                const SizedBox(height: 16),
                              ],
                            ),
                          ...FormHelper.getAllFormFields(context, _formKey, formHolder!),
                          const SizedBox(height: 32),
                          ButtonsHelper.primaryButton(
                            context: context,
                            onPressed: _isLoading ? null : _showOrderPreview,
                            label: "Continue".tr(),
                            isLoading: _isLoading,
                            height: 50.0,
                            width: 250.0,
                            isEnabled: _totalPrice > 0
                          ),
                          const SizedBox(height: 32),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
          _buildSeatReservationOverlay(),
          _buildPriceAndTicketInfo(),
        ],
      ),
      floatingActionButton: Visibility(
        visible: RightsService.isEditor(),
        child: FloatingActionButton(
          onPressed: () {
            RouterService.navigate(
                context,
                "${FormPage.ROUTE}/${form!.formKey}/edit")
                .then((value) => loadData());
          },
          child: const Icon(Icons.edit),
        ),
      ),
    );
  }

  // Function to generate options for a specific item type and add them to the ticket fields
  Map<String, dynamic> generateOptionsForItemType(
      List<ProductTypeModel> allItems,
      String itemType
      ) {
    var itemTypeModel = allItems.firstWhereOrNull((item) => item.type == itemType);

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
      FormHelper.metaType: FormHelper.fieldTypeOptions,
      FormHelper.metaOptions: options,
      FormHelper.metaLabel: itemTypeModel.title,
      FormHelper.metaOptionsType: itemType,
    };
  }

  Future<void> loadData() async {
    setState(() {
      _isLoading = true;
    });

    if(widget.formLink == null) {
      return;
    }
    //var key = UuidConverter.base62ToUuid(widget.id!);

    form = await DbEshop.getFormFromLink(widget.formLink!);
    if (form == null) {
      return;
    }
    var allItems = await DbEshop.getProducts(context, form!.occasion!);
    List<Map<String, dynamic>> updatedFields = [];

    for (var field in form?.data![FormHelper.metaFields]) {
      if (field[FormHelper.metaType] == FormHelper.fieldTypeTicket) {
        List<Map<String, dynamic>> updatedTicketFields = [];
        for (var ticketField in field[FormHelper.metaFields]) {
          if (ticketField.containsKey(FormHelper.metaOptionsType)) {
            var optionsType = ticketField[FormHelper.metaOptionsType];
            var generatedOptions = generateOptionsForItemType(allItems, optionsType);
            updatedTicketFields.add(generatedOptions);
          } else {
            updatedTicketFields.add(ticketField);
          }
        }

        updatedFields.add({
          FormHelper.metaType: field[FormHelper.metaType],
          FormHelper.metaMaxTickets: field[FormHelper.metaMaxTickets],
          FormHelper.metaFields: updatedTicketFields,
        });
      } else {
        updatedFields.add(field);
      }
    }
    Map<String, dynamic> json = {FormHelper.metaFields: updatedFields};

    formHolder = FormHolder.fromJson(json);
    formHolder!.controller = FormHolderController(
      secret: form!.secret,
      blueprintId: form!.blueprint,
      globalKey: _formKey,
      formKey: form!.formKey!,
      updateTotalPrice: _updateTotalPrice,
      showSeatReservation: _showSeatReservation,
      onCloseSeatReservation: _hideSeatReservation
    );
    form!.data![FormHelper.metaFields] = updatedFields;

    setState(() {
      _isLoading = false;
    });
  }
}