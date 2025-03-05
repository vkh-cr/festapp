import 'dart:math';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/dataModelsEshop/ProductTypeModel.dart';
import 'package:fstapp/services/HtmlHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/services/features/FeatureConstants.dart';
import 'package:fstapp/services/features/FeatureService.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/themeConfig.dart';
import '../pages/form_editor_content.dart';
import 'ticket_product_editor_row.dart';

class TicketEditorWidgets {
  static Widget buildTicketEditorReadOnly(
      BuildContext context, FormModel form, FormFieldModel ticketField) {
    List<Widget> children = [];
    if (FeatureService.isFeatureEnabled(FeatureConstants.blueprint)) {
      children.add(buildSpotFieldReadOnly(context, form));
      children.add(const SizedBox(height: 8));
    }
    final productTypeFields = form.relatedFields!
        .where((f) =>
    f.isTicketField == true &&
        f.type == FormHelper.fieldTypeProductType)
        .toList();
    if (productTypeFields.isEmpty) {
      children.add(Padding(
        padding: const EdgeInsets.only(top: 8.0),
        child: Text(
          'No Product Types'.tr(),
          style: Theme.of(context).textTheme.bodyMedium,
        ),
      ));
    } else {
      productTypeFields.sort((a, b) => (a.order ?? 0).compareTo(b.order ?? 0));
      for (var ptField in productTypeFields) {
        children.add(buildTicketGroupReadOnly(context, ptField));
        children.add(const SizedBox(height: 16));
      }
    }
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: children,
    );
  }

  static Widget buildTicketEditor(BuildContext context, FormModel form,
      FormFieldModel ticketField, VoidCallback refresh) {
    List<Widget> children = [];
    if (FeatureService.isFeatureEnabled(FeatureConstants.blueprint)) {
      children.add(buildSpotFieldEditor(context, form, refresh));
      children.add(const SizedBox(height: 16));
    }
    final productTypeFields = form.relatedFields!
        .where((f) =>
    f.isTicketField == true &&
        f.type == FormHelper.fieldTypeProductType)
        .toList();
    productTypeFields.sort((a, b) => (a.order ?? 0).compareTo(b.order ?? 0));
    children.add(Text(
      'Product Types'.tr(),
      style: Theme.of(context).textTheme.titleSmall,
    ));
    children.add(const SizedBox(height: 8));
    for (var ptField in productTypeFields) {
      children.add(buildTicketGroupEditor(context, form, ptField, refresh));
      children.add(const SizedBox(height: 16));
    }
    children.add(Row(
      children: [
        const Spacer(),
        ElevatedButton.icon(
          icon: const Icon(Icons.add),
          label: Text("Add Product Type".tr()),
          onPressed: () {
            final newProductTypeField = FormFieldModel(
              title: "New Product Type".tr(),
              type: FormHelper.fieldTypeProductType,
              isTicketField: true,
              isRequired: false,
              isHidden: false,
              order: (form.relatedFields!
                  .map((x) => x.order ?? 0)
                  .fold(0, max)) +
                  1,
              productType: ProductTypeModel(
                title: "New Product Type".tr(),
                products: [],
              ),
            );
            form.relatedFields!.add(newProductTypeField);
            refresh();
          },
        ),
      ],
    ));
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: children,
    );
  }

  static Widget buildTicketGroupReadOnly(
      BuildContext context, FormFieldModel ptField) {
    ptField.productType ??= ProductTypeModel(title: ptField.title, products: []);
    final group = ptField.productType!;
    group.products ??= [];
    final groupHidden = ptField.isHidden ?? false;
    final requiredStar = (ptField.isRequired ?? false)
        ? TextSpan(
      text: ' *',
      style: TextStyle(color: ThemeConfig.redColor(context)),
    )
        : null;
    final groupTitleStyle = groupHidden
        ? Theme.of(context).textTheme.titleMedium?.copyWith(
      fontWeight: FontWeight.bold,
      decoration: TextDecoration.lineThrough,
    )
        : Theme.of(context).textTheme.titleMedium?.copyWith(
      fontWeight: FontWeight.bold,
    );
    final showCapacityColumn =
    group.products!.any((product) => (product.maximum ?? 0) != 0);
    return Card(
      elevation: 3,
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            RichText(
              text: TextSpan(
                text: ptField.title ?? group.title ?? '',
                style: groupTitleStyle,
                children: [
                  if (requiredStar != null) requiredStar,
                ],
              ),
            ),
            const SizedBox(height: 8),
            if (group.products!.isEmpty)
              Text('No Products'.tr())
            else ...[
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 4.0),
                child: Row(
                  children: [
                    Expanded(
                      flex: 10,
                      child: Text(
                        "Title".tr(),
                        style: Theme.of(context)
                            .textTheme
                            .bodySmall
                            ?.copyWith(fontWeight: FontWeight.bold),
                      ),
                    ),
                    Expanded(
                      flex: 2,
                      child: Text(
                        "Price".tr(),
                        style: Theme.of(context)
                            .textTheme
                            .bodySmall
                            ?.copyWith(fontWeight: FontWeight.bold),
                      ),
                    ),
                    if (showCapacityColumn)
                      Expanded(
                        flex: 2,
                        child: Tooltip(
                          message: "Product Quantity".tr(),
                          child: Icon(Icons.stacked_bar_chart, size: 16, color: Theme.of(context)
                              .textTheme
                              .bodySmall?.color),
                        ),
                      ),
                  ],
                ),
              ),
              Column(
                children: group.products!.map((product) {
                  final productHidden = product.isHidden ?? false;
                  final rowStyle = productHidden
                      ? const TextStyle(decoration: TextDecoration.lineThrough)
                      : const TextStyle();
                  final capacityText =
                  (product.maximum ?? 0) != 0 ? '${product.maximum}' : '';
                  return Padding(
                    padding: const EdgeInsets.symmetric(vertical: 2.0),
                    child: Row(
                      children: [
                        Expanded(
                          flex: 10,
                          child: Row(
                            children: [
                              Flexible(
                                child: Text(
                                  product.title ?? '',
                                  style: rowStyle,
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
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
                        Expanded(
                          flex: 2,
                          child: Text(
                            '${product.price ?? 0}',
                            style: rowStyle,
                          ),
                        ),
                        if (showCapacityColumn)
                          Expanded(
                            flex: 2,
                            child: Text(
                              capacityText,
                              style: rowStyle,
                              textAlign: TextAlign.center,
                              maxLines: 1,
                              overflow: TextOverflow.visible,
                            ),
                          ),
                      ],
                    ),
                  );
                }).toList(),
              ),
            ],
          ],
        ),
      ),
    );
  }

  static Widget buildTicketGroupEditor(BuildContext context, FormModel form,
      FormFieldModel ptField, VoidCallback refresh) {
    ptField.productType ??=
        ProductTypeModel(title: ptField.title, products: []);
    final group = ptField.productType!;
    group.products ??= [];
    final groupTitleController =
    TextEditingController(text: ptField.title ?? group.title);
    final groupIsRequired = ptField.isRequired ?? false;
    final groupIsHidden = ptField.isHidden ?? false;
    final effectiveOpacity = groupIsHidden ? kHiddenOpacity : 1.0;
    return Opacity(
      opacity: effectiveOpacity,
      child: Card(
        elevation: 3,
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: groupTitleController,
                      decoration: InputDecoration(
                        labelText: "Product Type Title".tr(),
                        border: const UnderlineInputBorder(),
                      ),
                      onChanged: (val) {
                        ptField.title = val;
                        group.title = val;
                      },
                    ),
                  ),
                  const SizedBox(width: 12),
                  Column(
                    children: [
                      Text("Required".tr(),
                          style: Theme.of(context).textTheme.bodySmall),
                      Checkbox(
                        value: groupIsRequired,
                        onChanged: (val) {
                          ptField.isRequired = val;
                          refresh();
                        },
                      ),
                    ],
                  ),
                  const SizedBox(width: 12),
                  Column(
                    children: [
                      Text("Show".tr(),
                          style: Theme.of(context).textTheme.bodySmall),
                      Switch(
                        value: !groupIsHidden,
                        onChanged: (val) {
                          ptField.isHidden = !val;
                          refresh();
                        },
                      ),
                    ],
                  ),
                  const SizedBox(width: 12),
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
              const SizedBox(height: 16),
              for (int i = 0; i < group.products!.length; i++)
                TicketProductEditorRow(
                  product: group.products![i],
                  onDelete: () {
                    group.products!.removeAt(i);
                    refresh();
                  },
                ),
              Align(
                alignment: Alignment.centerRight,
                child: TextButton.icon(
                  onPressed: () {
                    group.products!.add(
                      ProductModel(
                        title: "New Product".tr(),
                        price: 0.0,
                        isHidden: false,
                        order: (group.products!.isNotEmpty
                            ? group.products!.last.order ?? 0
                            : 0) +
                            1,
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

  static Widget buildSpotFieldEditor(BuildContext context, FormModel form, VoidCallback refresh) {
    var spotField = form.relatedFields!.firstWhereOrNull((f) =>
    f.isTicketField == true && f.type == FormHelper.fieldTypeSpot);
    return Card(
      elevation: 3,
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Row(
          children: [
            Icon(fieldTypeIcons[FormHelper.fieldTypeSpot]),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                "Seat selection".tr(),
                style: Theme.of(context).textTheme.bodyMedium,
              ),
            ),
            Switch(
              value: !(spotField?.isHidden ?? true),
              onChanged: (val) {
                if (val) {
                  if (spotField == null) {
                    spotField = FormFieldModel(
                      type: FormHelper.fieldTypeSpot,
                      isTicketField: true,
                      isRequired: false,
                      isHidden: false,
                      order: (form.relatedFields!
                          .map((x) => x.order ?? 0)
                          .fold(0, max)) +
                          1,
                    );
                    form.relatedFields!.add(spotField!);
                  }
                  spotField!.isHidden = false;
                } else {
                  var field = form.relatedFields!.firstWhereOrNull((f) =>
                  f.isTicketField == true &&
                      f.type == FormHelper.fieldTypeSpot);
                  if (field != null) {
                    field.isHidden = true;
                  }
                }
                refresh();
              },
            ),
          ],
        ),
      ),
    );
  }

  static Widget buildSpotFieldReadOnly(BuildContext context, FormModel form) {
    bool spotExists = form.relatedFields!.any((f) =>
    f.isTicketField == true &&
        f.type == FormHelper.fieldTypeSpot &&
        !(f.isHidden ?? false));
    return Card(
      elevation: 3,
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Row(
          children: [
            Icon(fieldTypeIcons[FormHelper.fieldTypeSpot]),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                "Seat selection".tr(),
                style: Theme.of(context).textTheme.bodyMedium,
              ),
            ),
            Switch(
              value: spotExists,
              onChanged: null,
            ),
          ],
        ),
      ),
    );
  }

  static Widget buildTicketNoteCheckbox(BuildContext context, FormModel form, VoidCallback refresh) {
    final noteFieldIndex = form.relatedFields!.indexWhere((f) =>
    f.isTicketField == true &&
        f.type == FormHelper.fieldTypeNote &&
        !(f.isHidden ?? true));
    final noteExists = noteFieldIndex != -1;
    return Checkbox(
      value: noteExists,
      onChanged: (val) {
        _toggleTicketNote(form, val ?? false);
        refresh();
      },
    );
  }

  static void _toggleTicketNote(FormModel form, bool val) {
    var ticketNote = form.relatedFields!
        .firstWhereOrNull((f) =>
    f.isTicketField == true && f.type == FormHelper.fieldTypeNote);
    if (val) {
      if (ticketNote == null) {
        final newNoteField = FormFieldModel(
          title: "Note".tr(),
          type: FormHelper.fieldTypeNote,
          isTicketField: true,
          isRequired: false,
          isHidden: false,
          order: (form.relatedFields!
              .map((x) => x.order ?? 0)
              .fold(0, max)) +
              1,
        );
        form.relatedFields!.add(newNoteField);
      } else {
        ticketNote.isHidden = false;
        ticketNote.order = (form.relatedFields!
            .map((x) => x.order ?? 0)
            .fold(0, max)) +
            1;
      }
    } else {
      if (ticketNote != null) {
        ticketNote.isHidden = true;
      }
    }
  }
}
