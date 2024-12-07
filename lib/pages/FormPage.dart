import 'dart:convert';

import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/dataModels/FormFields.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'package:fstapp/dataModelsEshop/ProductTypeModel.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/pages/OrderPreviewScreen.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/services/UuidConverter.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:flutter/services.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/widgets/HtmlView.dart';

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
  FormHolder? formHolder;
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
    _totalPrice = 0.0;

    for (var field in formHolder!.fields) {
      if (field.fieldType == FormHelper.fieldTypeOptions) {
        var selectedOption = field.getValue(formHolder!.controller!.globalKey);
        if (selectedOption is FormOptionModel) {
          _totalPrice += selectedOption.price;
        }
      }

      if (field.fieldType == FormHelper.fieldTypeTicket) {
        var ticketDataList = FormHelper.getFieldData(_formKey, field) ?? [];

        for (var ticketData in ticketDataList) {
          for (var ticketValue in ticketData.values) {
            if (ticketValue is FormOptionModel) {
              _totalPrice += ticketValue.price;
            } else if (ticketValue is BlueprintObjectModel) {
              _totalPrice += ticketValue.product?.price ?? 0;
            }
          }
        }
      }
    }

    setState(() {}); // Update the UI
  }

  void _showOrderPreview() {
    TextInput.finishAutofillContext();
    //if (FormHelper.saveAndValidate(formHolder!))
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

    var response = await DbEshop.sendTicketOrder(data);

    if (response.data["code"] != 200) {
      ToastHelper.Show(
        context,
        "There was an error during ordering. Error code: ${response.data["code"]}",
        severity: ToastSeverity.NotOk,
      );
    } else {
      setState(() {
        _isSendSuccess = true;
      });
      ToastHelper.Show(
        context,
        "Your order has been sent successfully!".tr(),
      );
    }

    setState(() {
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
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
                  : formHolder == null
                  ? const Center(
                child: CircularProgressIndicator(),
              )
                  : FormBuilder(
                key: _formKey,
                child: AutofillGroup(
                  child: Column(
                    children: [
                      if (form!.footer != null)
                        Column(
                          children: [
                            HtmlView(html: form!.header!, isSelectable: true),
                            const SizedBox(height: 16),
                          ],
                        ),
                      ...FormHelper.getAllFormFields(context, _formKey, formHolder!),
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
                      if (form!.footer != null)
                        Column(
                          children: [
                            HtmlView(html: form!.footer!, isSelectable: true),
                            const SizedBox(height: 16),
                          ],
                        ),
                      ButtonsHelper.bigButton(
                        context: context,
                        onPressed: _isLoading ? null : _showOrderPreview,
                        label: "Continue".tr(),
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
    );
    form!.data![FormHelper.metaFields] = updatedFields;

    setState(() {
      _isLoading = false;
    });
  }
}