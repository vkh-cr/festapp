import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/data_models/service_item_model.dart';
import 'package:fstapp/data_services/db_occasions.dart';
import 'package:fstapp/services/dialog_helper.dart';

class ServiceDialog extends StatefulWidget {
  final String type;
  final String title;
  final String description;
  final String referenceString;

  ServiceDialog({
    super.key,
    required this.type,
    required this.title,
    required this.description,
    required this.referenceString,
  });

  @override
  _ServiceDialogState createState() => _ServiceDialogState();

  List<ServiceItemModel> items = [];
}

class _ServiceDialogState extends State<ServiceDialog> {
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _codeController = TextEditingController();
  final TextEditingController _referenceController = TextEditingController();

  @override
  void initState() {
    super.initState();
    DbOccasions.getAllServices(widget.type).then((v) {
      setState(() {
        widget.items = v;
      });
    });
  }

  Future<void> _createService() async {
    if (_titleController.text.isNotEmpty &&
        _codeController.text.isNotEmpty &&
        _referenceController.text.isNotEmpty) {
      final reference = int.tryParse(_referenceController.text) ?? 1;
      await DbOccasions.createService(
        widget.type,
        ServiceItemModel(
          title: _titleController.text,
          code: _codeController.text,
          reference: reference,
        ),
      );
      _titleController.clear();
      _codeController.clear();
      _referenceController.clear();
      var all = await DbOccasions.getAllServices(widget.type);
      setState(() {
        widget.items = all;
      });
    }
  }

  Future<void> _updateService(ServiceItemModel item) async {
    await DbOccasions.updateService(widget.type, item);
    var all = await DbOccasions.getAllServices(widget.type);
    setState(() {
      widget.items = all;
    });
  }

  Future<void> _deleteService(ServiceItemModel companion) async {
    if (!await DbOccasions.deleteService(widget.type, companion)) {
      var answer = await DialogHelper.showConfirmationDialogAsync(
        context,
        "Really delete service?".tr(),
        "At least one user has this service. You can find them in the grid. Are you sure you want to delete it? Deletion cannot be undone.".tr(),
      );
      if (answer) {
        await DbOccasions.deleteService(widget.type, companion, true);
      } else {
        return;
      }
    }
    widget.items = await DbOccasions.getAllServices(widget.type);
    setState(() {});
  }

  Future<void> _showEditDialog(ServiceItemModel item) async {
    final TextEditingController titleController = TextEditingController(text: item.title);
    final TextEditingController referenceController = TextEditingController(text: item.reference.toString());

    await showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text("Edit".tr()),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                controller: titleController,
                decoration: InputDecoration(labelText: "Title".tr()),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: referenceController,
                decoration: InputDecoration(labelText: widget.referenceString),
                keyboardType: TextInputType.number,
                inputFormatters: [
                  LengthLimitingTextInputFormatter(10),
                  FilteringTextInputFormatter.digitsOnly,
                ],
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(),
              child: Text("Storno".tr()),
            ),
            TextButton(
              onPressed: () async {
                item.title = titleController.text;
                item.reference = int.tryParse(referenceController.text) ?? item.reference;
                await _updateService(item);
                Navigator.of(context).pop();
              },
              child: Text("Save".tr()),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(widget.title.tr()),
      content: SingleChildScrollView(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 480, maxHeight: 480),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(widget.description),
              const SizedBox(height: 20),
              TextField(
                controller: _titleController,
                decoration: InputDecoration(labelText: "Title".tr()),
              ),
              const SizedBox(height: 10),
              Row(
                children: [
                  Expanded(
                    flex: 3, // 75% width
                    child: TextField(
                      controller: _codeController,
                      decoration: InputDecoration(labelText: "Code".tr()),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    flex: 1, // 25% width
                    child: TextField(
                      controller: _referenceController,
                      decoration: InputDecoration(labelText: widget.referenceString),
                      keyboardType: TextInputType.number,
                      inputFormatters: [
                        LengthLimitingTextInputFormatter(10),
                        FilteringTextInputFormatter.digitsOnly,
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: _createService,
                child: const Text("Create").tr(),
              ),
              const SizedBox(height: 20),
              SizedBox(
                width: 420,
                height: 250,
                child: ListView.builder(
                  itemCount: widget.items.length,
                  itemBuilder: (context, index) {
                    final companion = widget.items[index];
                    return Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
                      child: Row(
                        children: [
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(companion.title!),
                                Text(
                                  '${companion.code} | ${companion.reference}',
                                  style: const TextStyle(color: Colors.grey),
                                ),
                              ],
                            ),
                          ),
                          IconButton(
                            icon: const Icon(Icons.edit),
                            onPressed: () => _showEditDialog(companion),
                          ),
                          IconButton(
                            icon: const Icon(Icons.delete),
                            onPressed: () => _deleteService(companion),
                          ),
                        ],
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: const Text("Ok").tr(),
        ),
      ],
    );
  }
}
