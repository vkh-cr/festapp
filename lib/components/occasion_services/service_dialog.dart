import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/components/inventory/views/place_search_dialog.dart';
import 'package:fstapp/components/inventory/views/quick_search_dialog.dart';
import 'package:fstapp/components/map/db_places.dart';
import 'package:fstapp/components/map/place_model.dart';
import 'package:fstapp/components/occasion_services/occasion_services_strings.dart';
import 'package:fstapp/components/occasion_services/service_item_model.dart';
import 'package:fstapp/components/occasion/db_occasions.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/components/_shared/common_strings.dart';

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

  List<PlaceModel> _places = [];
  PlaceModel? _selectedPlace;

  /// Reference for a non-place service (e.g. food -> event id) is entered
  /// as a raw number.
  final TextEditingController _referenceController = TextEditingController();

  /// Whether the reference of this service points to a map place, in which
  /// case we offer a quick-search picker instead of a raw numeric field.
  bool get _isPlaceReference =>
      widget.type == DbOccasions.serviceTypeAccommodation;

  @override
  void initState() {
    super.initState();
    DbOccasions.getAllServices(widget.type).then((v) {
      if (!mounted) return;
      setState(() {
        widget.items = v;
      });
    });
    if (_isPlaceReference) {
      DbPlaces.getAllPlaces().then((places) {
        if (!mounted) return;
        setState(() {
          _places = places;
        });
      });
    }
  }

  @override
  void dispose() {
    _titleController.dispose();
    _codeController.dispose();
    _referenceController.dispose();
    super.dispose();
  }

  /// Resolves the current reference value the create form should submit.
  /// Returns null when the reference has not been filled in yet.
  int? get _currentReference {
    if (_isPlaceReference) return _selectedPlace?.id;
    return int.tryParse(_referenceController.text);
  }

  /// Human readable label of a reference for the existing-items list.
  String _referenceLabel(int? reference) {
    if (reference == null) return '';
    if (_isPlaceReference) {
      final place = _places.firstWhereOrNull((p) => p.id == reference);
      if (place != null) return place.title ?? '#$reference';
    }
    return '#$reference';
  }

  Future<void> _createService() async {
    if (_titleController.text.trim().isEmpty ||
        _codeController.text.trim().isEmpty ||
        _currentReference == null) {
      ToastHelper.Show(context, OccasionServicesStrings.fillAllFields,
          severity: ToastSeverity.NotOk);
      return;
    }

    final created = await DbOccasions.createService(
      widget.type,
      ServiceItemModel(
        title: _titleController.text.trim(),
        code: _codeController.text.trim(),
        reference: _currentReference,
      ),
    );

    if (!mounted) return;
    if (!created) {
      ToastHelper.Show(context, OccasionServicesStrings.createItemFailed,
          severity: ToastSeverity.NotOk);
      return;
    }

    _titleController.clear();
    _codeController.clear();
    _referenceController.clear();
    _selectedPlace = null;
    var all = await DbOccasions.getAllServices(widget.type);
    if (!mounted) return;
    setState(() {
      widget.items = all;
    });
  }

  Future<void> _updateService(ServiceItemModel item) async {
    await DbOccasions.updateService(widget.type, item);
    var all = await DbOccasions.getAllServices(widget.type);
    if (!mounted) return;
    setState(() {
      widget.items = all;
    });
  }

  Future<void> _deleteService(ServiceItemModel companion) async {
    if (!await DbOccasions.deleteService(widget.type, companion)) {
      var answer = await DialogHelper.showConfirmationDialog(
        context,
        OccasionServicesStrings.deleteServiceConfirmTitle,
        OccasionServicesStrings.deleteServiceConfirmText,
      );
      if (answer) {
        await DbOccasions.deleteService(widget.type, companion, true);
      } else {
        return;
      }
    }
    widget.items = await DbOccasions.getAllServices(widget.type);
    if (!mounted) return;
    setState(() {});
  }

  /// Opens the place quick-search dialog and returns the chosen place
  /// (or null when the user cleared the selection).
  Future<PlaceModel?> _pickPlace(PlaceModel? current) async {
    final result = await showDialog(
      context: context,
      builder: (_) => PlaceSearchDialog(
        allPlaces: _places,
        currentPlace: current,
      ),
    );
    if (result is PlaceModel) return result;
    if (result is UnassignAction) return null;
    return current;
  }

  /// A field for the service reference: a tappable place picker for
  /// accommodation, otherwise a plain numeric field (e.g. food -> event).
  Widget _buildReferenceField({
    required PlaceModel? selected,
    required ValueChanged<PlaceModel?> onSelected,
    TextEditingController? numericController,
  }) {
    if (!_isPlaceReference) {
      return TextField(
        controller: numericController,
        decoration: InputDecoration(
          labelText: widget.referenceString,
          border: const OutlineInputBorder(),
          isDense: true,
        ),
        keyboardType: TextInputType.number,
        inputFormatters: [
          LengthLimitingTextInputFormatter(10),
          FilteringTextInputFormatter.digitsOnly,
        ],
      );
    }
    return InkWell(
      borderRadius: BorderRadius.circular(4),
      onTap: () async {
        final picked = await _pickPlace(selected);
        onSelected(picked);
      },
      child: InputDecorator(
        decoration: InputDecoration(
          labelText: widget.referenceString,
          border: const OutlineInputBorder(),
          isDense: true,
          suffixIcon: const Icon(Icons.search),
        ),
        child: Text(
          selected?.title ?? OccasionServicesStrings.noPlaceSelected,
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          style: selected == null
              ? TextStyle(color: Theme.of(context).hintColor)
              : null,
        ),
      ),
    );
  }

  Future<void> _showEditDialog(ServiceItemModel item) async {
    final TextEditingController titleController =
        TextEditingController(text: item.title);
    final TextEditingController referenceController =
        TextEditingController(text: item.reference?.toString() ?? '');
    PlaceModel? selectedPlace =
        _places.firstWhereOrNull((p) => p.id == item.reference);

    await showDialog(
      context: context,
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setInnerState) => AlertDialog(
            title: Text(CommonStrings.edit),
            content: SizedBox(
              width: 360,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  TextField(
                    controller: titleController,
                    decoration: InputDecoration(
                      labelText: CommonStrings.title,
                      border: const OutlineInputBorder(),
                      isDense: true,
                    ),
                  ),
                  const SizedBox(height: 16),
                  _buildReferenceField(
                    selected: selectedPlace,
                    numericController: referenceController,
                    onSelected: (place) => setInnerState(() {
                      selectedPlace = place;
                      referenceController.text = place?.id?.toString() ?? '';
                    }),
                  ),
                ],
              ),
            ),
            actions: [
              TextButton(
                onPressed: () => Navigator.of(context).pop(),
                child: Text(CommonStrings.storno),
              ),
              FilledButton(
                onPressed: () async {
                  final ref = _isPlaceReference
                      ? selectedPlace?.id
                      : int.tryParse(referenceController.text);
                  item.title = titleController.text.trim();
                  item.reference = ref ?? item.reference;
                  await _updateService(item);
                  if (context.mounted) Navigator.of(context).pop();
                },
                child: Text(CommonStrings.save),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildCreateForm() {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surfaceContainerHighest,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          TextField(
            controller: _titleController,
            decoration: InputDecoration(
              labelText: CommonStrings.title,
              border: const OutlineInputBorder(),
              isDense: true,
            ),
          ),
          const SizedBox(height: 12),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                flex: 2,
                child: TextField(
                  controller: _codeController,
                  decoration: InputDecoration(
                    labelText: OccasionServicesStrings.code,
                    border: const OutlineInputBorder(),
                    isDense: true,
                  ),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                flex: 3,
                child: _buildReferenceField(
                  selected: _selectedPlace,
                  numericController: _referenceController,
                  onSelected: (place) =>
                      setState(() => _selectedPlace = place),
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Align(
            alignment: Alignment.centerRight,
            child: FilledButton.icon(
              onPressed: _createService,
              icon: const Icon(Icons.add),
              label: Text(CommonStrings.create),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildItemsList() {
    if (widget.items.isEmpty) {
      return Padding(
        padding: const EdgeInsets.symmetric(vertical: 24),
        child: Center(
          child: Icon(
            _isPlaceReference ? Icons.bedroom_parent_outlined : Icons.fastfood,
            size: 40,
            color: Theme.of(context).hintColor,
          ),
        ),
      );
    }
    return ListView.separated(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: widget.items.length,
      separatorBuilder: (_, __) => const Divider(height: 1),
      itemBuilder: (context, index) {
        final companion = widget.items[index];
        final refLabel = _referenceLabel(companion.reference);
        return ListTile(
          contentPadding: const EdgeInsets.symmetric(horizontal: 8),
          dense: true,
          title: Text(
            companion.title ?? '',
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
          subtitle: Row(
            children: [
              Container(
                padding:
                    const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                decoration: BoxDecoration(
                  color: Theme.of(context)
                      .colorScheme
                      .secondaryContainer,
                  borderRadius: BorderRadius.circular(4),
                ),
                child: Text(
                  companion.code,
                  style: Theme.of(context).textTheme.labelSmall,
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Row(
                  children: [
                    if (_isPlaceReference) ...[
                      const Icon(Icons.place_outlined, size: 14),
                      const SizedBox(width: 2),
                    ],
                    Flexible(
                      child: Text(
                        refLabel,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(color: Colors.grey),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          trailing: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              IconButton(
                visualDensity: VisualDensity.compact,
                icon: const Icon(Icons.edit),
                onPressed: () => _showEditDialog(companion),
              ),
              IconButton(
                visualDensity: VisualDensity.compact,
                icon: const Icon(Icons.delete_outline),
                onPressed: () => _deleteService(companion),
              ),
            ],
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(widget.title),
      contentPadding: const EdgeInsets.fromLTRB(24, 16, 24, 0),
      content: SizedBox(
        width: 480,
        child: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                widget.description,
                style: Theme.of(context).textTheme.bodyMedium,
              ),
              const SizedBox(height: 16),
              _buildCreateForm(),
              const SizedBox(height: 8),
              const Divider(),
              _buildItemsList(),
            ],
          ),
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: Text(CommonStrings.ok),
        ),
      ],
    );
  }
}
