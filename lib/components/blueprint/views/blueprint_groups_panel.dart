import 'package:flutter/material.dart';
import 'package:fstapp/components/blueprint/blueprint_group.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/components/blueprint/blueprint_strings.dart';
import 'package:fstapp/services/utilities_all.dart';

import '../../_shared/common_strings.dart';

class BlueprintGroupsPanel extends StatelessWidget {
  final BlueprintModel? blueprint;
  final BlueprintGroupModel? currentGroup;
  final ValueChanged<BlueprintGroupModel> onGroupSelected;
  final VoidCallback? onAddGroup;
  final VoidCallback? onDeleteGroup;
  final VoidCallback? onRenameGroup;
  final bool canEdit;

  const BlueprintGroupsPanel({
    super.key,
    required this.blueprint,
    required this.currentGroup,
    required this.onGroupSelected,
    this.onAddGroup,
    this.onDeleteGroup,
    this.onRenameGroup,
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
                  onPressed: onAddGroup,
                ),
                IconButton(
                  icon: const Icon(Icons.delete),
                  tooltip: CommonStrings.delete,
                  onPressed: onDeleteGroup,
                ),
                IconButton(
                  icon: const Icon(Icons.edit),
                  tooltip: CommonStrings.rename,
                  onPressed: onRenameGroup,
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
}