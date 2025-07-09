import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/components/inventory/models/inventory_pools_list_bundle.dart';
import 'package:fstapp/data_services/db_inventory_pools.dart';
import 'package:fstapp/styles/styles_config.dart';

import '../models/inventory_pool_model.dart';
import 'inventory_pool_card.dart';
import 'inventory_pool_creation_helper.dart';
import 'inventory_pool_detail_view.dart';
import 'inventory_strings.dart';

@RoutePage()
class InventoryPoolsTab extends StatefulWidget {
  const InventoryPoolsTab({super.key});

  @override
  _InventoryPoolsTabState createState() => _InventoryPoolsTabState();
}

class _InventoryPoolsTabState extends State<InventoryPoolsTab> {
  InventoryPoolsListBundle? _bundle;
  bool _isLoading = true;

  InventoryPoolModel? _selectedCapacityGroup;
  String? _previousOccasionLink;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final newOccasionLink = context.routeData.params.get(AppRouter.linkFormatted, null);

    if (newOccasionLink != null && newOccasionLink != _previousOccasionLink) {
      _previousOccasionLink = newOccasionLink;
      loadData(newOccasionLink);
    }
  }

  Future<void> loadData(String occasionLink, {bool isRefresh = false, int? newSelectedGroupId}) async {
    if (!mounted) return;

    final int? selectedGroupId = newSelectedGroupId ?? (isRefresh ? _selectedCapacityGroup?.id : null);

    setState(() {
      _isLoading = true;
      if (!isRefresh && newSelectedGroupId == null) {
        _selectedCapacityGroup = null;
      }
    });

    try {
      final newBundle = await DbInventoryPools.getInventoryPoolsByOccasionLink(occasionLink);
      _bundle = newBundle; // Assign new data

      if (_bundle != null) {
        // Link objects for easier access
        _bundle!.inventoryContexts.forEach((context) {
          context.inventoryPool = _bundle!.pools.firstWhereOrNull((group) => group.id == context.inventoryPoolId);
        });
        _bundle!.spots.forEach((spot) {
          spot.inventoryContext = _bundle!.inventoryContexts.firstWhereOrNull((context) => context.id == spot.inventoryContextId);
        });

        // After data is loaded, find and set the selected group based on the determined ID.
        if (selectedGroupId != null) {
          _selectedCapacityGroup = _bundle!.pools.firstWhereOrNull((g) => g.id == selectedGroupId);
        } else if (!isRefresh && _bundle!.pools.length == 1) {
          _selectedCapacityGroup = _bundle!.pools.first;
        }
      }
    } catch (e, s) {
      print("Error fetching capacity groups bundle: $e");
      print("Stack trace: $s");
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(InventoryStrings.tabErrorRefresh), backgroundColor: Colors.red),
        );
      }
      // On error, do not clear the bundle to avoid a full UI reset
    }

    if (mounted) {
      setState(() => _isLoading = false);
    }
  }

  void _handleCardTap(InventoryPoolModel group) {
    setState(() {
      _selectedCapacityGroup = group;
    });
  }

  Future<void> _handleCreateNew() async {
    if (_bundle?.occasion.id != null) {
      await InventoryPoolCreationHelper.showCreatePoolDialog(
        context: context,
        occasionId: _bundle!.occasion.id!,
        onPoolCreated: () {
          _navigateHomeAndRefresh();
        },
      );
    }
  }

  void _navigateToHome() {
    setState(() {
      _selectedCapacityGroup = null;
    });
  }

  /// Navigates to the home grid and reloads the data.
  /// Used after an action like deletion or by clicking the home breadcrumb.
  void _navigateHomeAndRefresh() {
    _navigateToHome();
    if (_previousOccasionLink != null) {
      loadData(_previousOccasionLink!);
    }
  }

  /// **NEW**: Refreshes data while attempting to stay on the currently selected group.
  Future<void> _refreshDataForCurrentGroup() async {
    if (_previousOccasionLink != null) {
      // We pass the current group's ID to ensure it's re-selected after the load.
      await loadData(
        _previousOccasionLink!,
        isRefresh: true,
        newSelectedGroupId: _selectedCapacityGroup?.id,
      );
    }
  }

  Widget _buildBreadcrumbs() {
    final theme = Theme.of(context);
    final onAppBarColor = theme.appBarTheme.foregroundColor ?? Colors.white;

    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          InkWell(
            onTap: _navigateHomeAndRefresh, // MODIFIED: Clearer function name
            borderRadius: BorderRadius.circular(StylesConfig.commonRoundness),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.inventory_2_outlined, size: 20, color: onAppBarColor),
                const SizedBox(width: 6),
                Text(
                  InventoryStrings.tabTitle,
                  style: TextStyle(fontSize: 16, color: onAppBarColor, fontWeight: FontWeight.normal),
                ),
              ],
            ),
          ),
          if (_selectedCapacityGroup != null) ...[
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 4.0),
              child: Text(
                "/",
                style: TextStyle(fontSize: 14, color: onAppBarColor.withOpacity(0.4)),
              ),
            ),
            _buildGroupSelector(),
          ],
        ],
      ),
    );
  }

  Widget _buildGroupSelector() {
    final onAppBarColor = Theme.of(context).appBarTheme.foregroundColor ?? Colors.white;
    if (_bundle == null || _bundle!.pools.length <= 1) {
      return Text(
        _selectedCapacityGroup?.title ?? InventoryStrings.tabUnnamedGroup,
        style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: onAppBarColor),
      );
    }

    return PopupMenuButton<InventoryPoolModel>(
      onSelected: _handleCardTap,
      itemBuilder: (BuildContext context) {
        return _bundle!.pools.map((group) {
          final isSelected = group.id == _selectedCapacityGroup!.id;
          return PopupMenuItem<InventoryPoolModel>(
            value: group,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(group.title ?? InventoryStrings.tabUnnamedGroup),
                if (isSelected)
                  Icon(Icons.check, color: Theme.of(context).colorScheme.primary),
              ],
            ),
          );
        }).toList();
      },
      elevation: 0,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 6.0),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              _selectedCapacityGroup?.title ?? InventoryStrings.tabUnnamedGroup,
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.normal, color: onAppBarColor),
            ),
            const SizedBox(width: 8),
            Transform.scale(
              scaleY: 0.8,
              child: Icon(Icons.unfold_more_rounded, size: 20, color: onAppBarColor.withOpacity(0.7)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildGroupsGrid() {
    if (_bundle == null) {
      return Center(child: Text(InventoryStrings.tabNoData));
    }
    return RefreshIndicator(
      onRefresh: () => loadData(_previousOccasionLink!),
      child: CustomScrollView(
        slivers: [
          const SliverToBoxAdapter(child: SizedBox(height: 16)),
          SliverPadding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            sliver: SliverGrid(
              gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                maxCrossAxisExtent: 480,
                mainAxisExtent: 210,
                mainAxisSpacing: 16,
                crossAxisSpacing: 16,
              ),
              delegate: SliverChildBuilderDelegate(
                    (context, index) {
                  final group = _bundle!.pools[index];
                  final groupContexts = _bundle!.inventoryContexts.where((c) => c.inventoryPoolId == group.id).toList();
                  final contextIds = groupContexts.map((c) => c.id).toSet();
                  final groupSpots = _bundle!.spots.where((s) => contextIds.contains(s.inventoryContextId)).toList();

                  return InventoryPoolCard(
                    pool: group,
                    contexts: groupContexts,
                    spots: groupSpots,
                    onTap: () => _handleCardTap(group),
                  );
                },
                childCount: _bundle!.pools.length,
              ),
            ),
          ),
          const SliverToBoxAdapter(child: SizedBox(height: 40)),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: _buildBreadcrumbs(),
        elevation: 0,
        toolbarHeight: 44.0,
        automaticallyImplyLeading: false,
        actions: [
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 4),
            child: ElevatedButton.icon(
              icon: const Icon(Icons.add, size: 18),
              label: Text(InventoryStrings.tabCreateNewGroup),
              onPressed: _handleCreateNew,
              style: ElevatedButton.styleFrom(
                backgroundColor: Theme.of(context).colorScheme.primary,
                foregroundColor: Theme.of(context).colorScheme.onPrimary,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(StylesConfig.commonRoundness),
                ),
              ),
            ),
          ),
          const SizedBox(width: 8),
        ],
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : _selectedCapacityGroup == null
          ? _buildGroupsGrid()
          : InventoryPoolDetailView(
        key: ValueKey(_selectedCapacityGroup!.id),
        poolId: _selectedCapacityGroup!.id!,
        // MODIFIED: Use the "go home" function for actions that complete a flow, like deletion
        onDeleteCompleted: _navigateHomeAndRefresh,
        // MODIFIED: Use the new "stay here and refresh" function for data updates
        onDataUpdated: _refreshDataForCurrentGroup,
      ),
    );
  }
}