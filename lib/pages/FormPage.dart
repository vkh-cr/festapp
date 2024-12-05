import 'dart:convert';

import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'package:fstapp/dataModelsEshop/ProductTypeModel.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/services/UuidConverter.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:flutter/services.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/services/ToastHelper.dart';

@RoutePage()
class FormPage extends StatefulWidget {
  static const ROUTE = "form";

  String? id;
  FormPage({super.key});

  @override
  _FormPageState createState() => _FormPageState();
}

class _FormPageState extends State<FormPage> {
  bool _isLoading = false;
  bool _isSendSuccess = false;
  double _totalPrice = 0.0; // Total price
  Map<String, dynamic>? formResult;
  FormModel? form;

  final _formKey = GlobalKey<FormBuilderState>();

  @override
  Future<void> didChangeDependencies() async {
    if (widget.id == null && context.routeData.hasPendingChildren) {
      widget.id = context.routeData.pendingChildren[0].pathParams.getString("id");
    }

    await loadData();
    super.didChangeDependencies();
  }

  void _updateTotalPrice() {
    // Reset total price
    _totalPrice = 0.0;

    // Iterate over all fields and calculate total price
    for (var field in form?.data?[FormHelper.metaFields] ?? []) {
      // Calculate price for regular options
      if (field[FormHelper.metaType] == FormHelper.fieldTypeOptions) {
        var selectedOption = _formKey.currentState?.fields[field[FormHelper.metaOptionsType]]?.value;
        if (selectedOption is FormOptionModel) {
          _totalPrice += selectedOption.price;
        }
      }

      // Calculate price for tickets
      if (field[FormHelper.metaType] == FormHelper.fieldTypeTicket) {
        var ticketDataList = FormHelper.getFieldData(
            _formKey,
            FormHelper.fieldTypeTicket,
            ticketKeys: FormHelper.ticketKeys
        ) ?? [];

        for (var ticketData in ticketDataList) {
          for (var ticketValue in ticketData.values) {
            if (ticketValue is FormOptionModel) {
              _totalPrice += ticketValue.price;
            } else if (ticketValue is BlueprintObjectModel){
              _totalPrice += ticketValue.product?.price??0;
            }
          }
        }
      }
    }

    setState(() {}); // Update the UI
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text("Form Page").tr(),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
          child: SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.all(12.0),
              child: _isSendSuccess
                  ? Padding(
                padding: const EdgeInsets.fromLTRB(12, 88, 12, 12),
                child: RichText(
                  textAlign: TextAlign.center,
                  text: TextSpan(
                    children: [
                      TextSpan(
                        style: TextStyle(
                          fontSize: 18,
                          color: ThemeConfig.blackColor(context),
                        ),
                        text: "Your order was successfully sent to your email {email}."
                            .tr(namedArgs: {"email": formResult?[FormHelper.fieldTypeEmail] ?? ""}),
                      ),
                      const WidgetSpan(
                        child: Padding(
                          padding: EdgeInsets.fromLTRB(6, 0, 0, 0),
                          child: Icon(Icons.check_circle),
                        ),
                      ),
                    ],
                  ),
                ),
              )
                  : form?.data == null
                  ? const Center(
                child: CircularProgressIndicator(),
              )
                  : FormBuilder(
                key: _formKey,
                child: AutofillGroup(
                  child: Column(
                    children: [
                      ...FormHelper.getAllFormFields(context, _formKey, form!, _updateTotalPrice),
                      const SizedBox(height: 16),
                      if (_totalPrice > 0)
                        Text(
                          "Total Price: {price}".tr(namedArgs: {
                            "price": Utilities.formatPrice(context, _totalPrice),
                          }),
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      const SizedBox(height: 16),
                      ButtonsHelper.bigButton(
                        context: context,
                        onPressed: _isLoading
                            ? null
                            : () async {
                          TextInput.finishAutofillContext();
                          if (FormHelper.saveAndValidate(_formKey)) {
                            setState(() {
                              _isLoading = true;
                            });
                            var data = FormHelper.getDataFromForm(
                                _formKey, form?.data?[FormHelper.metaFields]);

                            data = FormHelper.replaceSpotWithId(data);
                            data[FormHelper.metaSecret] = form!.secret;
                            data[FormHelper.metaForm] = form!.formKey;
                            formResult = data;


                            var response = await DbEshop.sendTicketOrder(data);

                            if(response.data["code"] != 200){
                              ToastHelper.Show(context, "There was an error during ordering. Error code: ${response.data["code"]}", severity: ToastSeverity.NotOk);
                              setState(() {
                                _isLoading = false;
                              });
                              return;
                            }

                            setState(() {
                              //_isSendSuccess = true;
                              _isLoading = false;
                            });

                            ToastHelper.Show(
                                context,
                                "Your order has been sent successfully!"
                                    .tr());
                          }
                        },
                        label: "Send".tr(),
                        isEnabled: !_isLoading,
                        height: 50.0,
                        width: 250.0,
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
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

    // if(widget.id == null) {
    //   return;
    // }
    //var key = UuidConverter.base62ToUuid(widget.id!);

    form = await DbEshop.getForm("7f4e3892-a544-4385-b933-61117e9755c3");
    if(form == null) {
      return;
    }
    // Fetching items
    var allItems = await DbEshop.getProducts(context, form!.occasion!);
    // New fields to replace existing ones
    List<dynamic> updatedFields = [];

    // Loop through the fields in form.data
    for (var field in form?.data![FormHelper.metaFields]) {
      // Check if the field is a ticket
      if (field[FormHelper.metaType] == FormHelper.fieldTypeTicket) {
        // Process the fields inside the ticket
        List<dynamic> updatedTicketFields = [];
        for (var ticketField in field[FormHelper.metaFields]) {
          // Check if the ticket field has an optionsType
          if (ticketField.containsKey(FormHelper.metaOptionsType)) {
            var optionsType = ticketField[FormHelper.metaOptionsType];
            var generatedOptions = generateOptionsForItemType(allItems, optionsType);
            updatedTicketFields.add(generatedOptions);
          } else {
            // Directly add the ticket field if no optionsType is present
            updatedTicketFields.add(ticketField);
          }
        }

        // Replace the fields inside the ticket
        updatedFields.add({
          FormHelper.metaType: field[FormHelper.metaType],
          FormHelper.metaMaxTickets: field[FormHelper.metaMaxTickets],
          FormHelper.metaFields: updatedTicketFields,
        });
      } else {
        // Directly add the field if it's not a ticket
        updatedFields.add(field);
      }
    }


    form?.data![FormHelper.metaFields] = updatedFields;

    setState(() {
      _isLoading = false;
    });
  }
}




