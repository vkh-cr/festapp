import 'package:flutter/material.dart';
import 'package:fstapp/components/blueprint/blueprint_group.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/components/blueprint/blueprint_strings.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/theme_config.dart';
import 'package:collection/collection.dart';

import '../../_shared/common_strings.dart';

class BlueprintGroupsPanel extends StatelessWidget {
  final BlueprintModel? blueprint;
  final BlueprintGroupModel? currentGroup;
  final ValueChanged<BlueprintGroupModel> onGroupSelected;
  final VoidCallback? onAddGroup;
  final VoidCallback? onDeleteGroup;
  final VoidCallback? onRenameGroup;
  final ValueChanged<BlueprintGroupModel>? onEditGroupProduct; // Callback
  final bool canEdit;

  const BlueprintGroupsPanel({
    super.key,
    required this.blueprint,
    required this.currentGroup,
    required this.onGroupSelected,
    this.onAddGroup,
    this.onDeleteGroup,
    this.onRenameGroup,
    this.onEditGroupProduct,
    required this.canEdit,
  });

  @override
  Widget build(BuildContext context) {
    if (blueprint == null) {
      return const Center(child: CircularProgressIndicator());
    }

    // Ensure groups are sorted
    blueprint!.groups!
        .sort((a, b) => Utilities.naturalCompare(a.title!, b.title!));

    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              BlueprintStrings.groupsTitle,
              style: Theme.of(context).textTheme.titleMedium,
            ),
            Row(
              children: [
                IconButton(
                  icon: const Icon(Icons.add),
                  tooltip: CommonStrings.addNew,
                  onPressed: canEdit ? onAddGroup : null, // Apply canEdit
                ),
                IconButton(
                  icon: const Icon(Icons.delete),
                  tooltip: CommonStrings.delete,
                  onPressed: canEdit ? onDeleteGroup : null, // Apply canEdit
                ),
                IconButton(
                  icon: const Icon(Icons.edit),
                  tooltip: CommonStrings.rename,
                  onPressed: canEdit ? onRenameGroup : null, // Apply canEdit
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
                onTap: () => onGroupSelected(group),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  margin: const EdgeInsets.symmetric(vertical: 4),
                  padding:
                  const EdgeInsets.symmetric(vertical: 8, horizontal: 12),
                  decoration: BoxDecoration(
                    color: isSelected
                        ? Theme.of(context).colorScheme.primary.withOpacity(0.2)
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
                    crossAxisAlignment: CrossAxisAlignment.center, // Align center
                    children: [
                      Expanded( // Allow text to wrap if needed
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              group.title!,
                              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                                color: isSelected
                                    ? Theme.of(context).colorScheme.primary
                                    : null,
                                fontWeight: isSelected ? FontWeight.bold : null,
                              ),
                            ),
                            const SizedBox(height: 4),
                            // Show product and price
                            Builder(
                                builder: (context) {
                                  final groupProduct = group.objects.isNotEmpty
                                      ? group.objects.first.product
                                      : blueprint!.spotProducts.firstOrNull;

                                  final priceString = groupProduct != null
                                      ? Utilities.formatPrice(context, groupProduct.price ?? 0)
                                      : null;
                                  final productTitle = groupProduct?.title ?? BlueprintStrings.noProductAssigned;

                                  return Text(
                                    priceString != null ? "$productTitle ($priceString)" : productTitle,
                                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                                      color: isSelected
                                          ? Theme.of(context).colorScheme.primary.withOpacity(0.9)
                                          : ThemeConfig.grey600(context),
                                    ),
                                    overflow: TextOverflow.ellipsis,
                                  );
                                }
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(width: 8),
                      // Group for count and edit button
                      Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            "(${group.objects.length})",
                            style: Theme.of(context).textTheme.bodySmall,
                          ),
                          if (canEdit) // Only show if editable
                            IconButton(
                              // Use category icon
                              icon: const Icon(Icons.category_outlined),
                              iconSize: 20,
                              padding: const EdgeInsets.all(4),
                              constraints: const BoxConstraints(),
                              tooltip: BlueprintStrings.assignProductToGroup,
                              onPressed: () => onEditGroupProduct?.call(group),
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
}