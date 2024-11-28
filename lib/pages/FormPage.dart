import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/dataModelsEshop/ItemModel.dart';
import 'package:fstapp/dataModelsEshop/ItemTypeModel.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:fstapp/services/Utilities.dart';
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
  Map<String, dynamic>? formData;
  Map<String, dynamic>? fields;

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
    for (var field in fields?[FormHelper.metaFields] ?? []) {
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
              _totalPrice += ticketValue.price ?? 0.0;
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
                            .tr(namedArgs: {"email": formData?[FormHelper.fieldTypeEmail] ?? ""}),
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
                  : fields == null
                  ? const Center(
                child: CircularProgressIndicator(),
              )
                  : FormBuilder(
                key: _formKey,
                child: AutofillGroup(
                  child: Column(
                    children: [
                      ...FormHelper.getFormFields(fields?[FormHelper.metaFields], _updateTotalPrice),
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
                          if (_formKey.currentState?.saveAndValidate() ?? false) {
                            setState(() {
                              _isLoading = true;
                            });
                            var data = FormHelper.getDataFromForm(
                                _formKey, fields?[FormHelper.metaFields]);
                            formData = data;

                            // Simulate sending process
                            await Future.delayed(const Duration(seconds: 2));

                            setState(() {
                              _isSendSuccess = true;
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
      List<ItemTypeModel> allItems,
      String itemType
      ) {
    var itemTypeModel = allItems.firstWhereOrNull((item) => item.type == itemType);

    if (itemTypeModel == null || itemTypeModel.items == null) {
      return {};
    }

    List<Map<String, dynamic>> options = [];

    for (var item in itemTypeModel.items!) {
      options.add({
        FormHelper.metaOptionsName: item.title.toString(),
        FormHelper.metaOptionsCode: item.id.toString(),
        FormHelper.metaOptionsPrice: item.price ?? 0.0, // Include price in the options
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

    // Fetching items
    var allItems = await DbEshop.getItems(context, 13);
    var foodOptionsField = generateOptionsForItemType(allItems, ItemModel.foodType);
    var taxiOptionsField = generateOptionsForItemType(allItems, ItemModel.taxiType);

    // Updating form fields
    fields = {
      FormHelper.metaFields: [
        {FormHelper.metaType: FormHelper.fieldTypeName, FormHelper.IS_REQUIRED: true},
        {FormHelper.metaType: FormHelper.fieldTypeSurname, FormHelper.IS_REQUIRED: true},
        {FormHelper.metaType: FormHelper.fieldTypeEmail, FormHelper.IS_REQUIRED: true},
        {FormHelper.metaType: FormHelper.fieldTypeNote},
        {
          FormHelper.metaType: FormHelper.fieldTypeTicket,
          FormHelper.metaMaxTickets: 6,
          FormHelper.metaFields: [
            if (taxiOptionsField.isNotEmpty) taxiOptionsField,
            if (foodOptionsField.isNotEmpty) foodOptionsField,
            {FormHelper.metaType: FormHelper.fieldTypeNote},
          ],
        },
      ],
    };

    setState(() {
      _isLoading = false;
    });
  }
}




