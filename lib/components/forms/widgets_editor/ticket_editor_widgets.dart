import 'dart:math';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/components/eshop/models/product_type_model.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/forms/widgets_view/form_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'product_type_editor.dart';

class TicketEditorWidgets {
  static String formatOrderedCount(int? orderedCount, int? maximum) {
    final count = orderedCount ?? 0;
    final maxStr = (maximum != null && maximum != 0) ? maximum.toString() : '∞';
    return '$count / $maxStr';
  }

  static Widget buildTicketEditorReadOnly(BuildContext context, FormModel form, FormFieldModel ticketField) {
    List<Widget> children = [];
    if (FeatureService.isFeatureEnabled(FeatureConstants.blueprint)) {
      children.add(buildSpotFieldReadOnly(context, form));
      children.add(const SizedBox(height: 8));
    }
    final productTypeFields = form.relatedFields!
        .where((f) => f.isTicketField == true && f.type == FormHelper.fieldTypeProductType)
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
        children.add(ProductTypeEditorWidgets.buildProductTypeReadOnly(context, ptField));
        children.add(const SizedBox(height: 16));
      }
    }
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: children,
    );
  }

  static Widget buildTicketEditor(BuildContext context, FormModel form, List<ProductTypeModel> allProductTypes, VoidCallback refresh) {
    List<Widget> children = [];
    if (FeatureService.isFeatureEnabled(FeatureConstants.blueprint)) {
      children.add(buildSpotFieldEditor(context, form, refresh));
      children.add(const SizedBox(height: 16));
    }
    final productTypeFields = form.relatedFields!
        .where((f) => f.isTicketField == true && f.type == FormHelper.fieldTypeProductType)
        .toList();
    productTypeFields.sort((a, b) => (a.order ?? 0).compareTo(b.order ?? 0));
    children.add(Text(
      'Product Types'.tr(),
      style: Theme.of(context).textTheme.titleSmall,
    ));
    children.add(const SizedBox(height: 8));
    for (var ptField in productTypeFields) {
      children.add(ProductTypeEditorWidgets.buildProductTypeEditor(context, form, ptField, refresh));
      children.add(const SizedBox(height: 16));
    }
    children.add(Row(
      children: [
        const Spacer(),
        ElevatedButton.icon(
          icon: const Icon(Icons.add),
          label: Text(FeaturesStrings.addProductTypeTitle),
          onPressed: () async {
            final existingPtIds = form.relatedFields!
                .where((f) => f.isTicketField == true && f.type == FormHelper.fieldTypeProductType && f.productType != null)
                .map((f) => f.productType!.id)
                .toSet();

            final availableProductTypes = allProductTypes
                .where((pt) => !existingPtIds.contains(pt.id))
                .toList();

            dynamic result;
            if (availableProductTypes.isEmpty) {
              result = '__CREATE_NEW__';
            } else {
              result = await _showAddProductTypeDialog(context, availableProductTypes);
            }

            if (result == null) return;

            if (result is String && result == '__CREATE_NEW__') {
              _createNewProductType(form);
            } else if (result is ProductTypeModel) {
              _addExistingProductType(form, result);
            }
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

  static void _createNewProductType(FormModel form) {
    final newProductTypeField = FormFieldModel(
      title: FeaturesStrings.newProductTypeDefaultName,
      type: FormHelper.fieldTypeProductType,
      isTicketField: true,
      productType: ProductTypeModel(
        title: FeaturesStrings.newProductTypeDefaultName,
        products: [],
      ),
      order: (form.relatedFields!.map((x) => x.order ?? 0).fold(0, max)) + 1,
    );
    form.relatedFields!.add(newProductTypeField);
  }

  static void _addExistingProductType(FormModel form, ProductTypeModel productType) {
    final newProductTypeField = FormFieldModel(
      title: productType.title,
      type: FormHelper.fieldTypeProductType,
      isTicketField: true,
      productType: productType,
      order: (form.relatedFields!.map((x) => x.order ?? 0).fold(0, max)) + 1,
    );
    form.relatedFields!.add(newProductTypeField);
  }

  static Future<dynamic> _showAddProductTypeDialog(BuildContext context, List<ProductTypeModel> availableProductTypes) async {
    return showDialog<dynamic>(
      context: context,
      builder: (BuildContext dialogContext) {
        return Dialog(
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.0)),
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
            child: Padding(
              padding: const EdgeInsets.all(24.0),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    FeaturesStrings.addProductTypeTitle,
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                  const SizedBox(height: 16),
                  Flexible(
                    child: ListView(
                      shrinkWrap: true,
                      children: [
                        ListTile(
                          leading: const Icon(Icons.add_circle_outline),
                          title: Text(FeaturesStrings.createNewProductTypeOption),
                          onTap: () => Navigator.of(dialogContext).pop('__CREATE_NEW__'),
                        ),
                        const Divider(),
                        ...availableProductTypes.map((pt) {
                          return ListTile(
                            leading: const Icon(Icons.category_outlined),
                            title: Text(pt.title ?? FeaturesStrings.untitledProductType),
                            onTap: () => Navigator.of(dialogContext).pop(pt),
                          );
                        }).toList()
                      ],
                    ),
                  ),
                  const SizedBox(height: 16),
                  Align(
                    alignment: Alignment.centerRight,
                    child: TextButton(
                      onPressed: () => Navigator.of(dialogContext).pop(),
                      child: Text("Storno".tr()),
                    ),
                  )
                ],
              ),
            ),
          ),
        );
      },
    );
  }

  static Widget buildSpotFieldEditor(BuildContext context, FormModel form, VoidCallback refresh) {
    var spotField = form.relatedFields!.firstWhereOrNull((f) => f.isTicketField == true && f.type == FormHelper.fieldTypeSpot);
    return Card(
      elevation: 3,
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Row(
          children: [
            Icon(FormHelper.fieldTypeIcons[FormHelper.fieldTypeSpot]),
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
                      isHidden: false,
                      order: (form.relatedFields!.map((x) => x.order ?? 0).fold(0, max)) + 1,
                    );
                    form.relatedFields!.add(spotField!);
                  }
                  spotField!.isHidden = false;
                } else {
                  var field = form.relatedFields!.firstWhereOrNull((f) => f.isTicketField == true && f.type == FormHelper.fieldTypeSpot);
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
    bool spotExists = form.relatedFields!.any((f) => f.isTicketField == true && f.type == FormHelper.fieldTypeSpot && !(f.isHidden ?? false));
    return Card(
      elevation: 3,
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Row(
          children: [
            Icon(FormHelper.fieldTypeIcons[FormHelper.fieldTypeSpot]),
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
    final noteFieldIndex = form.relatedFields!.indexWhere((f) => f.isTicketField == true && f.type == FormHelper.fieldTypeNote && !(f.isHidden ?? true));
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
    var ticketNote = form.relatedFields!.firstWhereOrNull((f) => f.isTicketField == true && f.type == FormHelper.fieldTypeNote);
    if (val) {
      if (ticketNote == null) {
        final newNoteField = FormFieldModel(
          title: "Note".tr(),
          type: FormHelper.fieldTypeNote,
          isTicketField: true,
          isHidden: false,
          order: (form.relatedFields!.map((x) => x.order ?? 0).fold(0, max)) + 1,
        );
        form.relatedFields!.add(newNoteField);
      } else {
        ticketNote.isHidden = false;
        ticketNote.order = (form.relatedFields!.map((x) => x.order ?? 0).fold(0, max)) + 1;
      }
    } else {
      if (ticketNote != null) {
        ticketNote.isHidden = true;
      }
    }
  }
}