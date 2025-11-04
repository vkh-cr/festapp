import 'dart:typed_data';
import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/components/blueprint/blueprint_strings.dart';
import 'package:fstapp/components/seat_reservation/widgets/seat_widget.dart';
import 'package:fstapp/components/blueprint/blueprint_group.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/components/blueprint/blueprint_object_model.dart';
import 'package:fstapp/components/eshop/models/product_model.dart';
import 'package:fstapp/data_services/db_images.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services_eshop/db_forms.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/image_compression_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/auto_resize_interactive_viewer_controller.dart';
import 'package:fstapp/components/seat_reservation/widgets/seat_reservation_widget.dart';
import 'package:collection/collection.dart';

import '../seat_reservation/model/seat_layout_state_model.dart';
import '../seat_reservation/model/seat_model.dart';
import '../seat_reservation/utils/seat_state.dart';
import '../seat_reservation/widgets/seat_layout_widget.dart';

class BlueprintTab extends StatefulWidget {

  const BlueprintTab({super.key});

  @override
  State<BlueprintTab> createState() => _BlueprintTabState();
}

class _BlueprintTabState extends State<BlueprintTab> {
  BlueprintModel? blueprint;
  BlueprintGroupModel? currentGroup;
  String? occasionLink;

  List<SeatModel> allBoxes = [];
  selectionMode currentSelectionMode = selectionMode.none;
  final AutoResizeInteractiveViewerController seatLayoutController =
  AutoResizeInteractiveViewerController();

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (occasionLink == null && context.routeData.params.isNotEmpty) {
      occasionLink = context.routeData.params.getString(AppRouter.linkFormatted);
    }
    loadData();
  }

  // ... (build methods and other logic remain the same)
  Widget _buildDesktopLayout() {
    return Row(
      children: [
        Container(
          width: 250,
          padding: const EdgeInsets.all(16.0),
          child: _buildLeftPanel(),
        ),
        const SizedBox(width: 16),
        Expanded(
          child: _buildMainContent(),
        ),
        const SizedBox(width: 16),
        Container(
          width: 250,
          padding: const EdgeInsets.all(16.0),
          child: _buildRightPanel(),
        ),
      ],
    );
  }

  Widget _buildMobileLayout() {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 250,
            padding: const EdgeInsets.all(16.0),
            child: _buildLeftPanel(),
          ),
          SizedBox(
            width: 400,
            child: _buildMainContent(),
          ),
          Container(
            width: 250,
            padding: const EdgeInsets.all(16.0),
            child: _buildRightPanel(),
          ),
        ],
      ),
    );
  }

  Widget _buildLeftPanel() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(bottom: 16.0),
          child: Text(
            BlueprintStrings.legendInstruction.tr(),
            style: Theme.of(context).textTheme.bodySmall,
            textAlign: TextAlign.left,
          ),
        ),
        buildLegend(),
      ],
    );
  }

  Widget _buildMainContent() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        const SizedBox(height: 16),
        blueprint == null ? const SizedBox.shrink() : buildDimensionControls(),
        const SizedBox(height: 16),
        Flexible(
          child: blueprint == null
              ? const Center(child: CircularProgressIndicator())
              : SeatLayoutWidget(
            isEditorMode: true,
            controller: seatLayoutController,
            onSeatTap: handleSeatTap,
            stateModel: SeatLayoutStateModel(
              rows: blueprint!.configuration!.height!,
              cols: blueprint!.configuration!.width!,
              seatSize: SeatReservationWidget.boxSize,
              currentObjects: blueprint!.objects!,
              allBoxes: allBoxes,
              backgroundSvg: blueprint!.backgroundSvg,
            ),
          ),
        ),
        const SizedBox(height: 16),
      ],
    );
  }

  Widget _buildRightPanel() {
    return buildGroupsSection();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: Text(blueprint?.title ?? BlueprintStrings.edit.tr()),
        actions: [
          IconButton(
            icon: const Icon(Icons.edit),
            tooltip: BlueprintStrings.changeTitle.tr(),
            onPressed: RightsService.canEditOccasion() ? editBlueprintTitle : null,
          ),
        ],
      ),
      body: SafeArea(
        child: LayoutBuilder(
          builder: (context, constraints) {
            if (constraints.maxWidth > 800) {
              return _buildDesktopLayout();
            } else {
              return _buildMobileLayout();
            }
          },
        ),
      ),
      bottomNavigationBar: Container(
        color: ThemeConfig.appBarColor(),
        padding: const EdgeInsets.all(8.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            TextButton(
              onPressed: RightsService.canEditOccasion() ? () => Navigator.pop(context) : null,
              style: TextButton.styleFrom(
                foregroundColor: Colors.white,
              ),
              child: Text(BlueprintStrings.storno.tr()),
            ),
            const SizedBox(width: 16),
            ElevatedButton(
              onPressed: RightsService.canEditOccasion() ? saveChanges : null,
              child: Text(BlueprintStrings.save.tr()),
            ),
          ],
        ),
      ),
    );
  }

  Widget buildGroupsSection() {
    return blueprint == null
        ? const Center(child: CircularProgressIndicator())
        : Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              BlueprintStrings.groupsTitle.tr(),
              style: Theme.of(context).textTheme.titleMedium,
            ),
            Row(
              children: [
                IconButton(
                  icon: const Icon(Icons.add),
                  tooltip: BlueprintStrings.addNew.tr(),
                  onPressed: RightsService.canEditOccasion() ? addGroup : null,
                ),
                IconButton(
                  icon: const Icon(Icons.delete),
                  tooltip: BlueprintStrings.delete.tr(),
                  onPressed: RightsService.canEditOccasion() ? deleteGroup : null,
                ),
                IconButton(
                  icon: const Icon(Icons.edit),
                  tooltip: BlueprintStrings.rename.tr(),
                  onPressed: RightsService.canEditOccasion() ? renameGroup : null,
                ),
              ],
            ),
          ],
        ),
        const SizedBox(height: 8),
        Expanded(
          child: ListView.builder(
            itemCount: blueprint!.groups!.length,
            itemBuilder: (context, index) {
              final group = blueprint!.groups![index];
              final isSelected = currentGroup == group;
              return GestureDetector(
                onTap: () {
                  setState(() {
                    currentGroup = group;
                  });
                },
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  margin: const EdgeInsets.symmetric(vertical: 4),
                  padding: const EdgeInsets.symmetric(
                      vertical: 8, horizontal: 12),
                  decoration: BoxDecoration(
                    color: isSelected
                        ? Theme.of(context)
                        .colorScheme
                        .primary
                        .withOpacity(0.2)
                        : Colors.transparent,
                    border: Border.all(
                      color: isSelected
                          ? Theme.of(context).colorScheme.primary
                          : Colors.grey,
                      width: isSelected ? 2 : 1,
                    ),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        group.title!,
                        style: Theme.of(context)
                            .textTheme
                            .bodyMedium
                            ?.copyWith(
                          color: isSelected
                              ? Theme.of(context).colorScheme.primary
                              : null,
                          fontWeight:
                          isSelected ? FontWeight.bold : null,
                        ),
                      ),
                      Row(
                        children: [
                          Text(
                            "(${group.objects.length})",
                            style: Theme.of(context).textTheme.bodySmall,
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }

  void addGroup() async {
    final defaultName = "${blueprint!.groups!.length + 1}";

    final newTitle = await DialogHelper.showInputDialog(
      context: context,
      dialogTitle: BlueprintStrings.addNew.tr(),
      labelText: BlueprintStrings.dialogGroupNumber.tr(),
      initialValue: defaultName,
    );

    if (newTitle != null && newTitle.isNotEmpty) {
      final newGroup = BlueprintGroupModel(
          title: newTitle, id: blueprint!.getFirstAvailableGroupId());

      setState(() {
        blueprint!.groups!.add(newGroup);
        blueprint!.groups!
            .sort((a, b) => Utilities.naturalCompare(a.title!, b.title!));
        currentGroup = newGroup;
      });
    }
  }

  void deleteGroup() {
    if (currentGroup == null) return;

    setState(() {
      blueprint!.groups!.remove(currentGroup);
      currentGroup = null;
    });
  }

  void renameGroup() async {
    if (currentGroup == null) return;

    final newTitle = await DialogHelper.showInputDialog(
      context: context,
      dialogTitle: BlueprintStrings.rename.tr(),
      labelText: BlueprintStrings.dialogTitle.tr(),
      initialValue: currentGroup!.title,
    );

    if (newTitle != null && newTitle.isNotEmpty) {
      setState(() {
        currentGroup!.title = newTitle;
        blueprint!.groups!.sort((a,b) => Utilities.naturalCompare(a.title!, b.title!));
      });
    }
  }

  Widget buildLegend() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        buildLegendItem(
          BlueprintStrings.legendBlackArea.tr(),
          SeatState.black,
          isActive: currentSelectionMode == selectionMode.addBlack,
          onTap: () {
            setState(() {
              currentSelectionMode = selectionMode.addBlack;
            });
          },
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          BlueprintStrings.legendAvailable.tr(),
          SeatState.available,
          isActive: currentSelectionMode == selectionMode.addAvailable,
          onTap: () {
            setState(() {
              currentSelectionMode = selectionMode.addAvailable;
            });
          },
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          BlueprintStrings.legendEmpty.tr(),
          SeatState.empty,
          isActive: currentSelectionMode == selectionMode.emptyArea,
          onTap: () {
            setState(() {
              currentSelectionMode = selectionMode.emptyArea;
            });
          },
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          BlueprintStrings.legendUsed.tr(),
          SeatState.used,
          isActive: false,
          grayedOut: true,
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          BlueprintStrings.legendOccupied.tr(),
          SeatState.ordered,
          isActive: false, // Not clickable
          grayedOut: true,
        ),
        const SizedBox(height: 8),
        buildLegendItem(
          BlueprintStrings.legendSelected.tr(),
          SeatState.selected_by_me,
          isActive: false, // Not clickable
          grayedOut: true,
        ),
      ],
    );
  }

  Widget buildLegendItem(String label, SeatState state,
      {bool isActive = false, VoidCallback? onTap, bool grayedOut = false}) {
    return MouseRegion(
      cursor: grayedOut ? SystemMouseCursors.forbidden : SystemMouseCursors.click,
      child: GestureDetector(
        onTap: grayedOut ? null : onTap,
        child: Opacity(
          opacity: grayedOut ? 0.8 : 1.0, // Reduce opacity for grayed-out items
          child: Container(
            decoration: BoxDecoration(
              border: Border.all(
                color: isActive
                    ? Theme.of(context).colorScheme.primary
                    : Colors.transparent, // Highlight active items
                width: 2,
              ),
              borderRadius: BorderRadius.circular(4),
            ),
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                SeatWidgetHelper.buildSeat(
                  context: context,
                  state: state,
                  size: SeatReservationWidget.boxSize.toDouble(),
                ),
                const SizedBox(width: 4),
                Text(
                  label,
                  style: TextStyle(
                    color: grayedOut ? Colors.grey : null,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget buildDimensionControls() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        buildDimensionEditor(
          BlueprintStrings.width.tr(),
          blueprint!.configuration!.width!,
              (value) {
            setState(() {
              blueprint!.configuration!.width = value;
            });
            seatLayoutController.fitContent();
          },
        ),
        const SizedBox(width: 12),
        buildDimensionEditor(
          BlueprintStrings.height.tr(),
          blueprint!.configuration!.height!,
              (value) {
            setState(() {
              blueprint!.configuration!.height = value;
            });
            seatLayoutController.fitContent();
          },
        ),
        const SizedBox(width: 24),
        _buildBackgroundControls(),
      ],
    );
  }

  Widget _buildBackgroundControls() {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        PopupMenuButton<String>(
          tooltip: BlueprintStrings.changeBackground.tr(),
          onSelected: (value) {
            if (value == 'svg') {
              _uploadSvgBackground();
            } else if (value == 'image') {
              _uploadImageBackground();
            }
          },
          itemBuilder: (BuildContext context) => <PopupMenuEntry<String>>[
            PopupMenuItem<String>(
              value: 'svg',
              child: Text(BlueprintStrings.uploadSVG.tr()),
            ),
            PopupMenuItem<String>(
              value: 'image',
              child: Text(BlueprintStrings.uploadImage.tr()),
            ),
          ],
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 8.0),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(BlueprintStrings.background.tr()),
                const SizedBox(width: 8),
                const Icon(Icons.grid_on),
              ],
            ),
          ),
        ),
        if (blueprint?.backgroundSvg != null && blueprint!.backgroundSvg!.isNotEmpty)
          IconButton(
            icon: const Icon(Icons.delete_outline),
            tooltip: BlueprintStrings.removeBackground.tr(),
            onPressed: _removeBackground,
          ),
      ],
    );
  }


  Widget buildDimensionEditor(String label, int currentValue, ValueChanged<int> onChanged) {
    return Column(
      children: [
        Text(
          label,
          style: const TextStyle(
            fontSize: 12,
          ),
        ),
        const SizedBox(height: 4),
        Row(
          children: [
            IconButton(
              icon: const Icon(Icons.remove),
              iconSize: 16,
              padding: const EdgeInsets.all(4),
              constraints: const BoxConstraints(),
              onPressed: () {
                if (currentValue > 1) {
                  onChanged(currentValue - 1);
                }
              },
            ),
            Text(
              "$currentValue",
              style: const TextStyle(
                fontSize: 14,
              ),
            ),
            IconButton(
              icon: const Icon(Icons.add),
              iconSize: 16,
              padding: const EdgeInsets.all(4),
              constraints: const BoxConstraints(),
              onPressed: () {
                onChanged(currentValue + 1);
              },
            ),
          ],
        ),
      ],
    );
  }

  Widget buildEditorActions() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        ElevatedButton(
          onPressed: () => Navigator.pop(context),
          child: Text(BlueprintStrings.storno.tr()),
        ),
        const SizedBox(width: 12),
        ElevatedButton(
          onPressed: saveChanges,
          child: Text(BlueprintStrings.save.tr()),
        ),
      ],
    );
  }

  void editBlueprintTitle() async {
    final newTitle = await DialogHelper.showInputDialog(
      context: context,
      dialogTitle: BlueprintStrings.rename.tr(),
      labelText: BlueprintStrings.dialogTitle.tr(),
      initialValue: blueprint?.title ?? "",
    );

    if (newTitle != null && newTitle.isNotEmpty) {
      setState(() {
        blueprint!.title = newTitle;
      });
    }
  }

  void handleSeatTap(SeatModel model) {
    if (model.objectModel?.isOrdered() ?? false) {
      ToastHelper.Show(context, BlueprintStrings.toastOccupiedCannotBeChanged.tr(), severity: ToastSeverity.NotOk);
      return;
    }

    switch (currentSelectionMode) {
      case selectionMode.addBlack:
        _handleAddBlack(model);
        break;
      case selectionMode.addAvailable:
        _handleAddAvailable(model);
        break;
      case selectionMode.emptyArea:
        _handleEmptyArea(model);
        break;
      default:
        break;
    }
    setState(() {});
  }

  void _handleAddBlack(SeatModel model) {
    model.seatState = SeatState.black;

    if (model.objectModel != null && model.objectModel!.type == BlueprintModel.metaTableAreaType) {
      return;
    }
    if (model.objectModel != null && model.objectModel!.type != BlueprintModel.metaTableAreaType) {
      blueprint!.objects!.remove(model.objectModel!);
    }
    model.objectModel = model.objectModel ?? BlueprintObjectModel(x: model.colI, y: model.rowI);
    model.objectModel!.type = BlueprintModel.metaTableAreaType;
    blueprint!.objects!.add(model.objectModel!);
  }

  void _handleAddAvailable(SeatModel model) {
    if(currentGroup == null){
      ToastHelper.Show(context, BlueprintStrings.toastSelectGroupFirst.tr(), severity: ToastSeverity.NotOk);
      return;
    }

    model.seatState = SeatState.available;

    if (model.objectModel != null && model.objectModel!.type == BlueprintModel.metaSpotType) {
      return;
    }

    if (model.objectModel != null && model.objectModel!.type != BlueprintModel.metaSpotType) {
      blueprint!.objects!.remove(model.objectModel!);
    }

    model.objectModel = model.objectModel ?? BlueprintObjectModel(x: model.colI, y: model.rowI);
    model.objectModel!.type = BlueprintModel.metaSpotType;
    model.objectModel!.product = blueprint!.products?.firstWhereOrNull((p)=>p.productTypeString == ProductModel.spotType);
    model.objectModel!.group = currentGroup;
    model.objectModel!.title = currentGroup?.getNextBoxName();
    currentGroup?.objects.add(model.objectModel!);
    blueprint!.objects!.add(model.objectModel!);
    ToastHelper.Show(context, "${BlueprintStrings.toastSpotAdded.tr()} ${model.objectModel!.title}");
  }

  void _handleEmptyArea(SeatModel model) {
    if (model.objectModel != null) {
      if (model.seatState == SeatState.black) {
        ToastHelper.Show(context, BlueprintStrings.toastAreaRemoved.tr());
      } else {
        ToastHelper.Show(context, BlueprintStrings.toastSpotRemoved.tr());
      }
      blueprint!.objects!.remove(model.objectModel);
      for (var group in blueprint!.groups!) {
        group.objects.remove(model.objectModel);
      }
      model.objectModel = null;
      model.seatState = SeatState.empty;
    }
  }

  void _uploadSvgBackground() async {
    var file = await DialogHelper.dropFilesHere(
      context,
      BlueprintStrings.dialogImportSvgTitle.tr(),
      BlueprintStrings.dialogOk.tr(),
      BlueprintStrings.storno.tr(),
    );
    if (file != null) {
      try {
        var content = await file.readAsString();
        if (!content.trim().startsWith('<svg')) {
          ToastHelper.Show(context, BlueprintStrings.toastInvalidSvg.tr(), severity: ToastSeverity.NotOk);
          return;
        }
        setState(() {
          blueprint!.backgroundSvg = content;
        });
        ToastHelper.Show(context, BlueprintStrings.toastSvgUploadSuccess.tr());
      } catch (e) {
        ToastHelper.Show(context, BlueprintStrings.toastSvgReadFail.tr(), severity: ToastSeverity.NotOk);
      }
    }
  }

  void _uploadImageBackground() async {
    var file = await DialogHelper.dropFilesHere(
      context,
      BlueprintStrings.dialogImportImageTitle.tr(),
      BlueprintStrings.dialogOk.tr(),
      BlueprintStrings.storno.tr(),
    );
    if (file != null) {
      try {
        Uint8List imageData = await file.readAsBytes();
        var compressedImageData = await ImageCompressionHelper.compress(imageData, 3000, quality: 100);
        final publicUrl = await DbImages.uploadImage(compressedImageData, blueprint!.occasion, null);
        setState(() {
          blueprint!.backgroundSvg = publicUrl;
        });
        ToastHelper.Show(context, BlueprintStrings.toastImageUploadSuccess.tr());
      } catch (e) {
        ToastHelper.Show(context, BlueprintStrings.toastImageUploadFail.tr(), severity: ToastSeverity.NotOk);
      }
    }
  }

  void _removeBackground() async {
    final confirmed = await DialogHelper.showConfirmationDialog(
        context,
        BlueprintStrings.dialogConfirmRemoveBackgroundTitle.tr(),
        BlueprintStrings.dialogConfirmRemoveBackgroundContent.tr());

    if (confirmed == true) {

      setState(() {
        blueprint!.backgroundSvg = null;
      });
      ToastHelper.Show(context, BlueprintStrings.toastBackgroundRemoved.tr());
    }
  }


  void saveChanges() async {
    if (blueprint == null) return;
    try {
      await DbForms.updateBlueprint(blueprint!);
      ToastHelper.Show(context, BlueprintStrings.saved.tr(), severity: ToastSeverity.Ok);
      await loadData();
    } catch (e) {
      ToastHelper.Show(context, e.toString().replaceFirst("Exception: ", ""), severity: ToastSeverity.NotOk);
    }
  }

  Future<void> loadData() async {
    blueprint = await DbForms.getBlueprintForEdit(occasionLink!);
    setState(() {});
  }
}

enum selectionMode { none, emptyArea, addBlack, addAvailable }