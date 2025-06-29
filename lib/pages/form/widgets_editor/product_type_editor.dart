import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/data_models_eshop/product_model.dart';
import 'package:fstapp/data_models_eshop/product_type_model.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/services/html_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/theme_config.dart';

import 'description_with_edit.dart';
import 'form_fields_generator.dart';
import 'ticket_editor_widgets.dart';
import 'ticket_product_editor_row.dart';

class ProductTypeEditorWidgets {
  /// Builds the read-only view for a product type group.
  static Widget buildProductTypeReadOnly(BuildContext context, FormFieldModel ptField) {
    ptField.productType ??= ProductTypeModel(title: ptField.title, products: []);
    final group = ptField.productType!;
    group.products ??= [];
    final groupHidden = ptField.isHidden ?? false;

    // NOTE: Removed filtering of hidden products. They will be shown with a strikethrough.

    final isSelectMany = ptField.data?[FormHelper.metaSelectionType] == FormHelper.metaSelectionTypeMany;

    final requiredStar = (ptField.isRequired ?? false)
        ? TextSpan(
      text: ' *',
      style: TextStyle(color: ThemeConfig.redColor(context)),
    )
        : null;

    final groupTitleStyle = Theme.of(context).textTheme.titleMedium?.copyWith(
      fontWeight: FontWeight.bold,
      decoration: groupHidden ? TextDecoration.lineThrough : null,
    );

    final showCapacityColumn = group.products!.any((product) => (product.maximum ?? 0) != 0);

    return Opacity(
      opacity: groupHidden ? kHiddenOpacity : 1.0,
      child: Card(
        elevation: 3,
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Group Title
              Row(
                children: [
                  RichText(
                    text: TextSpan(
                      text: ptField.productType?.title ?? group.title ?? '',
                      style: groupTitleStyle,
                      children: [if (requiredStar != null) requiredStar],
                    ),
                  ),
                  if (!HtmlHelper.isHtmlEmptyOrNull(ptField.productType?.description))
                    Padding(
                      padding: const EdgeInsets.only(left: 8.0, right: 4.0),
                      child: Tooltip(
                        message: "Has description".tr(),
                        child: const Icon(Icons.description, size: 16),
                      ),
                    ),
                ],
              ),
              const SizedBox(height: 8),
              if (group.products!.isEmpty)
                Text('No Products'.tr())
              else ...[
                // Header Row for the product list
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 4.0),
                  child: Row(
                    children: [
                      const SizedBox(width: 48), // Space for selection control
                      Expanded(
                        flex: 8,
                        child: Text("Title".tr(), style: Theme.of(context).textTheme.bodySmall?.copyWith(fontWeight: FontWeight.bold)),
                      ),
                      Expanded(
                        flex: 3,
                        child: Text("Price".tr(), style: Theme.of(context).textTheme.bodySmall?.copyWith(fontWeight: FontWeight.bold)),
                      ),
                      if (showCapacityColumn)
                        Expanded(
                          flex: 3,
                          child: Tooltip(
                            message: "Product Quantity".tr(),
                            child: Icon(Icons.stacked_bar_chart, size: 16, color: Theme.of(context).textTheme.bodySmall?.color),
                          ),
                        ),
                    ],
                  ),
                ),
                // List of Products
                Column(
                  children: group.products!.map((product) {
                    // UPDATED: Logic to handle hidden product style
                    final productHidden = product.isHidden ?? false;
                    final rowStyle = TextStyle(
                      decoration: productHidden ? TextDecoration.lineThrough : null,
                    );

                    return Opacity(
                      opacity: productHidden ? kHiddenOpacity : 1.0,
                      child: Padding(
                        padding: const EdgeInsets.symmetric(vertical: 2.0),
                        child: Row(
                          children: [
                            // Radio or Checkbox based on selection type
                            SizedBox(
                              width: 48,
                              child: isSelectMany
                                  ? Checkbox(value: false, onChanged: null)
                                  : Radio<String>(value: product.id.toString(), groupValue: null, onChanged: null),
                            ),
                            // Product title and description icon
                            Expanded(
                              flex: 8,
                              child: Row(
                                children: [
                                  Flexible(
                                    child: Text(
                                      product.title ?? '',
                                      maxLines: 1,
                                      overflow: TextOverflow.ellipsis,
                                      style: rowStyle, // Apply style
                                    ),
                                  ),
                                  if (!HtmlHelper.isHtmlEmptyOrNull(product.description))
                                    Padding(
                                      padding: const EdgeInsets.only(left: 8.0, right: 4.0),
                                      child: Tooltip(
                                        message: "Has description".tr(),
                                        child: const Icon(Icons.description, size: 16),
                                      ),
                                    ),
                                ],
                              ),
                            ),
                            // Product price
                            Expanded(
                              flex: 3,
                              child: Text(
                                Utilities.formatPrice(context, product.price ?? 0, currencyCode: product.currencyCode),
                                style: rowStyle, // Apply style
                              ),
                            ),
                            // Product capacity
                            if (showCapacityColumn)
                              Expanded(
                                flex: 3,
                                child: Text(
                                  TicketEditorWidgets.formatOrderedCount(product.orderedCount, product.maximum),
                                  textAlign: TextAlign.center,
                                  style: rowStyle, // Apply style
                                ),
                              ),
                          ],
                        ),
                      ),
                    );
                  }).toList(),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }

  /// Builds the editor for a product type group.
  static Widget buildProductTypeEditor(BuildContext context, FormModel form, FormFieldModel ptField, VoidCallback refresh) {
    // Initialize data models safely
    ptField.productType ??= ProductTypeModel(title: ptField.title, products: []);
    final group = ptField.productType!;
    group.products ??= [];

    final groupTitleController = TextEditingController(text: ptField.title ?? group.title);
    final defaultDescription = "Description".tr();
    final groupIsRequired = ptField.isRequired ?? false;
    final groupIsHidden = ptField.isHidden ?? false;
    final canSelectMany = ptField.data?[FormHelper.metaSelectionType] == FormHelper.metaSelectionTypeMany;

    return Opacity(
      opacity: groupIsHidden ? kHiddenOpacity : 1.0,
      child: Card(
        elevation: 3,
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header row with controls
              Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: groupTitleController,
                      decoration: InputDecoration(labelText: "Product Type Title".tr(), border: const UnderlineInputBorder()),
                      onChanged: (val) {
                        ptField.title = val;
                        group.title = val;
                        refresh();
                      },
                    ),
                  ),
                  const SizedBox(width: 12),
                  _buildControl(context, "Required".tr(), Checkbox(value: groupIsRequired, onChanged: (val) {
                    ptField.isRequired = val;
                    refresh();
                  })),
                  const SizedBox(width: 12),
                  _buildControl(context, "Multiple Choice".tr(), Switch(value: canSelectMany, onChanged: (val) {
                    ptField.data ??= {};
                    if (val) {
                      ptField.data![FormHelper.metaSelectionType] = FormHelper.metaSelectionTypeMany;
                    } else {
                      ptField.data!.remove(FormHelper.metaSelectionType);
                    }
                    refresh();
                  })),
                  const SizedBox(width: 12),
                  _buildControl(context, "Show".tr(), Switch(value: !groupIsHidden, onChanged: (val) {
                    ptField.isHidden = !val;
                    refresh();
                  })),
                  PopupMenuButton<String>(
                    onSelected: (value) {
                      if (value == "add_description") {
                        if (HtmlHelper.isHtmlEmptyOrNull(ptField.productType!.description)) {
                          ptField.productType!.description = defaultDescription;
                        }
                        refresh();
                      }
                    },
                    itemBuilder: (context) => [
                      PopupMenuItem<String>(value: "add_description", child: Text("Add description".tr())),
                    ],
                    icon: const Icon(Icons.more_vert),
                  ),
                  if (ptField.id == null)
                    IconButton(
                      icon: const Icon(Icons.delete),
                      onPressed: () {
                        form.relatedFields!.remove(ptField);
                        refresh();
                      },
                    ),
                ],
              ),
              // Description Editor
              if (!HtmlHelper.isHtmlEmptyOrNull(ptField.productType?.description))
                DescriptionWithEdit(
                  description: ptField.productType!.description!,
                  defaultDescription: defaultDescription,
                  onDescriptionChanged: (newDescription) {
                    ptField.productType!.description = newDescription;
                    refresh();
                  },
                  occasionId: form.occasion!,
                ),
              const SizedBox(height: 16),
              // List of Product Rows
              for (int i = 0; i < group.products!.length; i++)
                TicketProductEditorRow(
                  product: group.products![i],
                  onDelete: () {
                    group.products!.removeAt(i);
                    refresh();
                  },
                  availableCurrencies: form.getSupportedCurrencies(),
                ),
              // Add Product Button
              Align(
                alignment: Alignment.centerRight,
                child: TextButton.icon(
                  onPressed: () {
                    group.products!.add(
                      ProductModel(
                        title: "New Product".tr(),
                        price: 0.0,
                        isHidden: false,
                        order: (group.products!.isNotEmpty ? group.products!.last.order ?? 0 : 0) + 1,
                      ),
                    );
                    refresh();
                  },
                  icon: const Icon(Icons.add),
                  label: Text("Add Product".tr()),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  // Helper for building compact controls
  static Widget _buildControl(BuildContext context, String label, Widget control) {
    return Column(
      children: [
        Text(label, style: Theme.of(context).textTheme.bodySmall),
        control,
      ],
    );
  }
}