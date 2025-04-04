import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/data_models_eshop/product_model.dart';
import 'package:fstapp/data_models_eshop/product_type_model.dart';
import 'package:fstapp/services/html_helper.dart';

import '../pages/form_editor_content.dart';
import 'description_with_edit.dart';
import 'ticket_product_editor_row.dart';

class ProductTypeEditor extends StatefulWidget {
  final FormModel form;
  final FormFieldModel ptField;
  final VoidCallback refresh;

  const ProductTypeEditor({
    super.key,
    required this.form,
    required this.ptField,
    required this.refresh,
  });

  @override
  _ProductTypeEditorState createState() => _ProductTypeEditorState();
}

class _ProductTypeEditorState extends State<ProductTypeEditor> {
  late TextEditingController groupTitleController;

  @override
  void initState() {
    super.initState();
    // Initialize productType if null.
    widget.ptField.productType ??= ProductTypeModel(
      title: widget.ptField.title,
      products: [],
    );
    // Ensure the products list is not null.
    final group = widget.ptField.productType!;
    group.products ??= [];

    // Initialize the title controller.
    groupTitleController = TextEditingController(
      text: widget.ptField.title ?? group.title,
    );
  }

  @override
  void dispose() {
    groupTitleController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final defaultDescription = "Description".tr();
    final group = widget.ptField.productType!;
    final groupIsRequired = widget.ptField.isRequired ?? false;
    final groupIsHidden = widget.ptField.isHidden ?? false;
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
              // Title, required checkbox, show switch, popup menu and delete button.
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
                        setState(() {
                          widget.ptField.title = val;
                          group.title = val;
                        });
                      },
                    ),
                  ),
                  const SizedBox(width: 12),
                  Column(
                    children: [
                      Text(
                        "Required".tr(),
                        style: Theme.of(context).textTheme.bodySmall,
                      ),
                      Checkbox(
                        value: groupIsRequired,
                        onChanged: (val) {
                          setState(() {
                            widget.ptField.isRequired = val;
                          });
                          widget.refresh();
                        },
                      ),
                    ],
                  ),
                  const SizedBox(width: 12),
                  Column(
                    children: [
                      Text(
                        "Show".tr(),
                        style: Theme.of(context).textTheme.bodySmall,
                      ),
                      Switch(
                        value: !groupIsHidden,
                        onChanged: (val) {
                          setState(() {
                            widget.ptField.isHidden = !val;
                          });
                          widget.refresh();
                        },
                      ),
                    ],
                  ),
                  PopupMenuButton<String>(
                    onSelected: (value) {
                      if (value == "add_description") {
                        setState(() {
                          if (HtmlHelper.isHtmlEmptyOrNull(
                              widget.ptField.productType!.description)) {
                            widget.ptField.productType!.description =
                                defaultDescription;
                          }
                        });
                      }
                    },
                    itemBuilder: (context) => [
                      PopupMenuItem<String>(
                        value: "add_description",
                        child: Text("Add description".tr()),
                      ),
                    ],
                    icon: const Icon(Icons.more_vert),
                  ),
                  if (widget.ptField.id == null)
                    IconButton(
                      icon: const Icon(Icons.delete),
                      onPressed: () {
                        setState(() {
                          widget.form.relatedFields!.remove(widget.ptField);
                        });
                        widget.refresh();
                      },
                    ),
                ],
              ),
              // Description editor
              if (!HtmlHelper.isHtmlEmptyOrNull(
                  widget.ptField.productType?.description))
                DescriptionWithEdit(
                  description: widget.ptField.productType!.description!,
                  defaultDescription: defaultDescription,
                  onDescriptionChanged: (newDescription) {
                    setState(() {
                      widget.ptField.productType!.description = newDescription;
                    });
                  },
                  occasionId: widget.form.occasion!,
                ),
              const SizedBox(height: 16),
              // List of product rows
              for (int i = 0; i < group.products!.length; i++)
                TicketProductEditorRow(
                  product: group.products![i],
                  onDelete: () {
                    setState(() {
                      group.products!.removeAt(i);
                    });
                    widget.refresh();
                  },
                ),
              // Add product button
              Align(
                alignment: Alignment.centerRight,
                child: TextButton.icon(
                  onPressed: () {
                    setState(() {
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
                    });
                    widget.refresh();
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
}
