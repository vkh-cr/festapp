import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataModelsEshop/ProductModel.dart';

class TicketProductEditorRow extends StatefulWidget {
  final ProductModel product;
  final VoidCallback onDelete;
  const TicketProductEditorRow({
    Key? key,
    required this.product,
    required this.onDelete,
  }) : super(key: key);

  @override
  _TicketProductEditorRowState createState() => _TicketProductEditorRowState();
}

class _TicketProductEditorRowState extends State<TicketProductEditorRow> {
  late TextEditingController _titleController;
  late TextEditingController _priceController;

  @override
  void initState() {
    super.initState();
    _titleController =
        TextEditingController(text: widget.product.title ?? "");
    _priceController =
        TextEditingController(text: (widget.product.price ?? 0).toString());
    _titleController.addListener(() {
      widget.product.title = _titleController.text;
    });
    _priceController.addListener(() {
      widget.product.price =
          double.tryParse(_priceController.text) ?? 0.0;
    });
  }

  @override
  void dispose() {
    _titleController.dispose();
    _priceController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final effectiveOpacity =
    (widget.product.isHidden ?? false) ? 0.5 : 1.0;
    return Opacity(
      opacity: effectiveOpacity,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 6.0),
        child: Row(
          children: [
            Expanded(
              flex: 4,
              child: TextField(
                controller: _titleController,
                decoration: InputDecoration(
                  labelText: "Title".tr(),
                  border: const UnderlineInputBorder(),
                ),
              ),
            ),
            const SizedBox(width: 8),
            Expanded(
              flex: 2,
              child: TextField(
                controller: _priceController,
                keyboardType:
                const TextInputType.numberWithOptions(decimal: true),
                decoration: InputDecoration(
                  labelText: "Price".tr(),
                  border: const UnderlineInputBorder(),
                ),
              ),
            ),
            const SizedBox(width: 8),
            Column(
              children: [
                Text("Show".tr(),
                    style: Theme.of(context).textTheme.bodySmall),
                Switch(
                  value: !(widget.product.isHidden ?? false),
                  onChanged: (val) {
                    setState(() {
                      widget.product.isHidden = !val;
                    });
                  },
                ),
              ],
            ),
            const SizedBox(width: 8),
            if (widget.product.id == null)
              IconButton(
                icon: const Icon(Icons.delete),
                onPressed: widget.onDelete,
              ),
          ],
        ),
      ),
    );
  }
}
