import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/components/inventory/models/inventory_context_model.dart';
import 'package:fstapp/components/inventory/models/inventory_pool_bundle.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/exception_handler.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/data_services/db_inventory_pools.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:intl/intl.dart';

import 'inventory_strings.dart';

class InventoryPoolSettingsView extends StatefulWidget {
  final int poolId;
  final VoidCallback? onPoolUpdated;
  final VoidCallback? onPoolDeleted;

  const InventoryPoolSettingsView({
    super.key,
    required this.poolId,
    this.onPoolUpdated,
    this.onPoolDeleted,
  });

  @override
  _InventoryPoolSettingsViewState createState() =>
      _InventoryPoolSettingsViewState();
}

class _LoadResult {
  final InventoryPoolBundle bundle;
  final OccasionModel? occasion;
  _LoadResult(this.bundle, this.occasion);
}

class _InventoryPoolSettingsViewState extends State<InventoryPoolSettingsView> {
  static const int _datePickerPaddingDays = 7;
  final _formKey = GlobalKey<FormState>();
  InventoryPoolBundle? _bundle;
  List<InventoryContextModel> _originalContexts = [];
  OccasionModel? _occasion;
  bool _isLoading = true;
  bool _isSaving = false;

  late TextEditingController _poolTitleController;
  late TextEditingController _sellableCapacityController;

  @override
  void initState() {
    super.initState();
    _poolTitleController = TextEditingController();
    _sellableCapacityController = TextEditingController();
    _loadData();
  }

  @override
  void dispose() {
    _poolTitleController.dispose();
    _sellableCapacityController.dispose();
    super.dispose();
  }

  Future<void> _loadData() async {
    if (!mounted) return;
    setState(() => _isLoading = true);

    final result = await ExceptionHandler.guard<_LoadResult>(
      context,
      futureFunction: () async {
        final bundle = await DbInventoryPools.getInventoryPoolBundle(widget.poolId);
        OccasionModel? occasion;
        if (bundle.pool.occasionId != null) {
          occasion = await DbUsers.getOccasion(bundle.pool.occasionId!);
        }
        return _LoadResult(bundle, occasion);
      },
      defaultErrorMessage: InventoryStrings.settingsErrorLoad,
    );

    if (mounted) {
      if (result != null) {
        setState(() {
          _bundle = result.bundle;
          _occasion = result.occasion;
          _originalContexts = result.bundle.contexts?.map((c) => c.copyWith()).toList() ?? [];
          _poolTitleController.text = result.bundle.pool.title ?? '';
          _sellableCapacityController.text =
              result.bundle.pool.sellableCapacity?.toString() ?? '';
        });
      }
      setState(() => _isLoading = false);
    }
  }

  void _updateContextsOrder() {
    if (_bundle?.contexts == null) return;
    for (int i = 0; i < _bundle!.contexts!.length; i++) {
      _bundle!.contexts![i].order = i;
    }
  }

  Future<void> _saveChanges(BuildContext currentContext) async {
    if (!_formKey.currentState!.validate() || _bundle == null) return;

    final contextsToDelete = _originalContexts
        .where((orig) =>
    orig.id != null &&
        !_bundle!.contexts!.any((curr) => curr.id == orig.id))
        .toList();

    if (contextsToDelete.isNotEmpty) {
      final confirmed = await DialogHelper.showConfirmationDialog(
        currentContext,
        InventoryStrings.settingsConfirmDeletionTitle,
        InventoryStrings.settingsConfirmContextDeletionContent(contextsToDelete.length),
      );
      if (confirmed != true) return;
    }

    setState(() => _isSaving = true);

    _bundle!.pool.title = _poolTitleController.text.trim();
    _bundle!.pool.sellableCapacity = int.tryParse(_sellableCapacityController.text);
    _updateContextsOrder();

    final updatedBundle = await ExceptionHandler.guard(
      currentContext,
      futureFunction: () => DbInventoryPools.updateInventoryPoolBundle(_bundle!),
      defaultErrorMessage: InventoryStrings.settingsErrorSave,
    );

    if (mounted) {
      if (updatedBundle != null) {
        setState(() {
          _bundle = updatedBundle;
          _originalContexts = updatedBundle.contexts?.map((c) => c.copyWith()).toList() ?? [];
          _poolTitleController.text = updatedBundle.pool.title ?? '';
          _sellableCapacityController.text =
              updatedBundle.pool.sellableCapacity?.toString() ?? '';
        });
        await ToastHelper.Show(currentContext, InventoryStrings.settingsSuccessSave, severity: ToastSeverity.Ok);
        widget.onPoolUpdated?.call();
      }
      setState(() => _isSaving = false);
    }
  }

  Future<void> _confirmDelete(BuildContext currentContext) async {
    final confirmed = await DialogHelper.showConfirmationDialog(
      currentContext,
      InventoryStrings.settingsDeletePoolButton,
      InventoryStrings.settingsConfirmPoolDeletionContent,
    );
    if (confirmed != true || _bundle == null) return;

    final success = await ExceptionHandler.guardVoid(
      currentContext,
      futureFunction: () => DbInventoryPools.deleteInventoryPool(_bundle!.pool.id!),
      defaultErrorMessage: InventoryStrings.settingsErrorDelete,
    );

    if (success && mounted) {
      await ToastHelper.Show(currentContext, InventoryStrings.settingsSuccessDelete, severity: ToastSeverity.Ok);
      widget.onPoolDeleted?.call();
    }
  }

  void _cancelEdit() {
    setState(() {
      _bundle?.contexts = _originalContexts.map((c) => c.copyWith()).toList();
    });
  }

  void _removeContext(InventoryContextModel context) {
    setState(() {
      if (context.id != null) {
        _bundle!.contexts!.removeWhere((c) => c.id == context.id);
      } else {
        _bundle!.contexts!.removeWhere((c) => c == context);
      }
      _updateContextsOrder();
    });
  }

  void _addContextBack(InventoryContextModel context) {
    setState(() {
      _bundle!.contexts!.add(context);
      _updateContextsOrder();
    });
  }

  Future<void> _showEditContextDialog({InventoryContextModel? contextModel}) async {
    final bool isNew = contextModel == null;
    final model = contextModel?.copyWith() ?? InventoryContextModel(inventoryPoolId: widget.poolId);

    final result = await showDialog<InventoryContextModel>(
      context: context,
      builder: (dialogContext) {
        final titleController = TextEditingController(text: model.title);
        final dateController = TextEditingController();
        final dateNotifier = ValueNotifier<DateTime?>(model.blockDate);

        if (model.blockDate != null) {
          dateController.text = DateFormat.yMMMd(dialogContext.locale.toString()).format(model.blockDate!);
        }

        return AlertDialog(
          title: Text(isNew ? InventoryStrings.contextDialogAddTitle : InventoryStrings.contextDialogEditTitle),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextFormField(
                controller: titleController,
                decoration: InputDecoration(
                    labelText: InventoryStrings.contextDialogTitleLabel,
                    border: const OutlineInputBorder(),
                    hintText: InventoryStrings.contextDialogTitleHint),
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: dateController,
                readOnly: true,
                decoration: InputDecoration(
                  labelText: InventoryStrings.contextDialogDateLabel,
                  border: const OutlineInputBorder(),
                  suffixIcon: const Icon(Icons.calendar_today),
                ),
                onTap: () async {
                  const datePadding = Duration(days: _datePickerPaddingDays);
                  final DateTime firstDate = (_occasion?.startTime ?? DateTime(2020)).subtract(datePadding);
                  final DateTime lastDate = (_occasion?.endTime ?? DateTime(2030)).add(datePadding);

                  // **FIX:** Pass the current context's locale to the date picker.
                  final newDate = await showDatePicker(
                    context: dialogContext,
                    locale: dialogContext.locale,
                    initialDate: dateNotifier.value ?? _occasion?.startTime ?? DateTime.now(),
                    firstDate: firstDate,
                    lastDate: lastDate,
                  );
                  if (newDate != null) {
                    dateNotifier.value = newDate;
                    dateController.text = DateFormat.yMMMd(dialogContext.locale.toString()).format(newDate);
                  }
                },
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(dialogContext).pop(),
              child: Text("Storno".tr()),
            ),
            ElevatedButton(
              onPressed: () {
                model.title = titleController.text.trim().isEmpty ? null : titleController.text.trim();
                model.blockDate = dateNotifier.value;
                if (model.title == null && model.blockDate == null) {
                  ToastHelper.Show(context, InventoryStrings.contextDialogValidationError, severity: ToastSeverity.NotOk);
                  return;
                }
                Navigator.of(dialogContext).pop(model);
              },
              child: Text("Save".tr()),
            ),
          ],
        );
      },
    );

    if (result != null) {
      setState(() {
        if (isNew) {
          _bundle!.contexts!.add(result);
        } else {
          final index = _bundle!.contexts!.indexWhere((c) => c.id == result.id);
          if (index != -1) {
            _bundle!.contexts![index] = result;
          }
        }
        _updateContextsOrder();
      });
    }
  }


  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return const Scaffold(body: Center(child: CircularProgressIndicator()));
    }
    if (_bundle == null) {
      return Scaffold(body: Center(child: Text(InventoryStrings.settingsErrorCouldNotLoad)));
    }

    // **FIX:** Separate active and deleted contexts for proper rendering and reordering.
    final activeContexts = _bundle!.contexts!;
    activeContexts.sort((a,b) => (a.order ?? 999).compareTo((b.order ?? 999)));

    final deletedContexts = _originalContexts
        .where((orig) => orig.id != null && !activeContexts.any((curr) => curr.id == orig.id))
        .toList();


    return Scaffold(
      body: Builder(
        builder: (innerContext) {
          return Align(
            alignment: Alignment.topCenter,
            child: ConstrainedBox(
              constraints: BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
              child: Form(
                key: _formKey,
                child: ListView(
                  padding: const EdgeInsets.all(24.0),
                  children: [
                    Text(
                      InventoryStrings.settingsConfigureTitle(_bundle!.pool.title ?? 'Pool'),
                      style: Theme.of(innerContext).textTheme.headlineSmall,
                    ),
                    const SizedBox(height: 24),

                    Text(InventoryStrings.settingsPoolSettingsSectionTitle, style: Theme.of(context).textTheme.titleLarge),
                    const SizedBox(height: 16),
                    TextFormField(
                      controller: _poolTitleController,
                      decoration: InputDecoration(
                        labelText: InventoryStrings.poolTitleLabel,
                        border: const OutlineInputBorder(),
                      ),
                      validator: (value) => (value == null || value.trim().isEmpty)
                          ? InventoryStrings.validationTitleEmpty
                          : null,
                    ),
                    const SizedBox(height: 16),
                    TextFormField(
                      controller: _sellableCapacityController,
                      decoration: InputDecoration(
                        labelText: InventoryStrings.settingsSellableCapacityLabel,
                        hintText: InventoryStrings.settingsSellableCapacityHint,
                        border: const OutlineInputBorder(),
                      ),
                      keyboardType: TextInputType.number,
                      inputFormatters: [FilteringTextInputFormatter.digitsOnly],
                    ),
                    const SizedBox(height: 16),
                    SwitchListTile(
                      contentPadding: EdgeInsets.zero,
                      title: Text(InventoryStrings.settingsAutoAssignmentLabel),
                      subtitle: Text(InventoryStrings.settingsAutoAssignmentSubtitle),
                      value: _bundle!.pool.isAutoResourceAssignment,
                      onChanged: (bool value) {
                        setState(() {
                          _bundle!.pool.isAutoResourceAssignment = value;
                        });
                      },
                    ),

                    const Divider(height: 40),

                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(InventoryStrings.settingsContextsSectionTitle, style: Theme.of(context).textTheme.titleLarge),
                        IconButton(
                          icon: const Icon(Icons.add_circle_outline),
                          tooltip: InventoryStrings.settingsAddContextTooltip,
                          onPressed: () => _showEditContextDialog(),
                        )
                      ],
                    ),
                    const SizedBox(height: 8),
                    if (activeContexts.isEmpty)
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 16.0),
                        child: Center(child: Text(InventoryStrings.settingsNoContexts)),
                      ),

                    // **FIX:** ReorderableListView now only contains active items.
                    ReorderableListView(
                      buildDefaultDragHandles: false,
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      proxyDecorator: (Widget child, int index, Animation<double> animation) {
                        return Material(
                          elevation: 4.0,
                          color: Colors.transparent,
                          child: child,
                        );
                      },
                      onReorder: (oldIndex, newIndex) {
                        setState(() {
                          if (newIndex > oldIndex) {
                            newIndex -= 1;
                          }
                          // This logic now works correctly because the list of children
                          // matches the list being modified (_bundle.contexts).
                          final item = _bundle!.contexts!.removeAt(oldIndex);
                          _bundle!.contexts!.insert(newIndex, item);
                          _updateContextsOrder();
                        });
                      },
                      children: [
                        for (int i = 0; i < activeContexts.length; i++)
                          _buildContextEditor(activeContexts[i], i, isDeleted: false)
                      ],
                    ),

                    // **FIX:** Display deleted items in a separate, non-reorderable list.
                    if (deletedContexts.isNotEmpty) ...[
                      const SizedBox(height: 16),
                      Text(InventoryStrings.settingsMarkedForDeletion, style: Theme.of(context).textTheme.titleMedium),
                      const SizedBox(height: 8),
                      ListView(
                        shrinkWrap: true,
                        physics: const NeverScrollableScrollPhysics(),
                        children: [
                          for (final deletedItem in deletedContexts)
                            _buildContextEditor(deletedItem, -1, isDeleted: true)
                        ],
                      )
                    ],

                    const SizedBox(height: 48),
                    Center(
                      child: TextButton(
                        onPressed: () => _confirmDelete(innerContext),
                        child: Text(
                          InventoryStrings.settingsDeletePoolButton,
                          style: TextStyle(color: ThemeConfig.redColor(innerContext)),
                        ),
                      ),
                    ),
                    const SizedBox(height: 48),
                  ],
                ),
              ),
            ),
          );
        },
      ),
      bottomNavigationBar: Builder(builder: (innerContext) {
        return Container(
          color: ThemeConfig.appBarColor(),
          padding: const EdgeInsets.all(10),
          child: SafeArea(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                TextButton(
                  onPressed: _isSaving ? null : _cancelEdit,
                  child: Text("Storno".tr()),
                ),
                const SizedBox(width: 16),
                ElevatedButton.icon(
                  icon: _isSaving ? const SizedBox.shrink() : const Icon(Icons.save, size: 18),
                  label: _isSaving
                      ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2))
                      : Text(InventoryStrings.settingsSaveChanges),
                  onPressed: _isSaving ? null : () => _saveChanges(innerContext),
                ),
              ],
            ),
          ),
        );
      }),
    );
  }

  Widget _buildContextEditor(InventoryContextModel contextModel, int index, {required bool isDeleted}) {
    contextModel.inventoryPool = _bundle?.pool;

    final isNew = _originalContexts.firstWhereOrNull((c) =>
    (c.id != null && c.id == contextModel.id) ||
        (c.id == null && c == contextModel)) == null;

    return Card(
      key: ValueKey(contextModel.id ?? contextModel.hashCode),
      margin: const EdgeInsets.symmetric(vertical: 4.0),
      color: isDeleted
          ? Colors.red.withOpacity(0.05)
          : isNew
          ? Colors.green.withOpacity(0.05)
          : null,
      child: Row(
        children: <Widget>[
          Expanded(
            child: ReorderableDragStartListener(
              index: index,
              // Disable dragging for deleted items.
              enabled: !isDeleted,
              child: ListTile(
                title: Text(
                  contextModel.getFullTitle(context),
                  style: TextStyle(
                    decoration: isDeleted ? TextDecoration.lineThrough : null,
                    color: isDeleted ? Theme.of(context).disabledColor : null,
                  ),
                ),
              ),
            ),
          ),
          IconButton(
            icon: const Icon(Icons.edit_outlined),
            tooltip: InventoryStrings.edit,
            onPressed: isDeleted ? null : () => _showEditContextDialog(contextModel: contextModel),
          ),
          IconButton(
            icon: isDeleted
                ? const Icon(Icons.add_circle_outline, color: Colors.green)
                : Icon(Icons.delete_outline, color: ThemeConfig.redColor(context)),
            tooltip: isDeleted ? InventoryStrings.restore : InventoryStrings.remove,
            onPressed: () {
              if (isDeleted) {
                _addContextBack(contextModel);
              } else {
                _removeContext(contextModel);
              }
            },
          ),
          const SizedBox(width: 8),
        ],
      ),
    );
  }
}