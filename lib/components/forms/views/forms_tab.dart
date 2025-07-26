import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/components/eshop/orders_strings.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_services_eshop/db_forms.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:intl/intl.dart';
import 'form_creation_helper.dart';
import 'form_tab.dart';
import 'package:fstapp/components/features/features_strings.dart';

@RoutePage()
class FormsTab extends StatefulWidget {
  const FormsTab({super.key});

  @override
  _FormsTabState createState() => _FormsTabState();
}

class _FormsTabState extends State<FormsTab> {
  List<FormModel> _forms = [];
  String? occasionLink;
  bool _isLoading = true;

  FormModel? _selectedForm;
  String? _previousOccasionLink;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final newOccasionLink = context.routeData.params.get(AppRouter.linkFormatted, null);

    if (newOccasionLink != null && newOccasionLink != _previousOccasionLink) {
      occasionLink = newOccasionLink;
      _previousOccasionLink = newOccasionLink;
      loadData();
    }
  }

  Future<void> loadData() async {
    if (!mounted) return;
    if (!_isLoading) {
      setState(() => _isLoading = true);
    }
    if (occasionLink != null) {
      _forms = await DbForms.getAllFormsByOccasionLink(occasionLink!);
      if (_forms.length == 1) {
        _selectedForm = _forms.first;
      }
    }
    if (mounted) {
      setState(() => _isLoading = false);
    }
  }

  Future<void> _handleCardTap(FormModel form) async {
    setState(() {
      _selectedForm = form;
    });
  }

  Future<void> _handleCreateNew() async {
    if (occasionLink == null) return;

    // --- FAKE DATA GENERATION FOR DEMONSTRATION ---
    // Create fake OccasionModels to be linked to the forms.
    final occasionSummer = OccasionModel(id: 101, title: "Summer Camp 2025", isOpen: true, isHidden: false);
    final occasionWinter = OccasionModel(id: 102, title: "Winter Retreat 2024", isOpen: true, isHidden: false);
    final occasionConference = OccasionModel(id: 103, title: "Annual Conference 2025", isOpen: true, isHidden: false);

    // Create a list of fake FormModels with rich data.
    final List<FormModel> fakeFormsForDialog = [
      FormModel(
        id: 1,
        title: "Summer Camp Registration",
        link: "reg-summer-25",
        createdAt: DateTime.now().subtract(const Duration(days: 3)), // Recent
        occasionModel: occasionSummer,
        occasionId: occasionSummer.id,
      ),
      FormModel(
        id: 2,
        title: "Conference Attendee Info",
        link: "conf-info-25",
        createdAt: DateTime.now().subtract(const Duration(days: 20)), // Last month
        occasionModel: occasionConference,
        occasionId: occasionConference.id,
      ),
      FormModel(
        id: 4,
        title: "Winter Retreat Signup",
        link: "signup-winter-24",
        createdAt: DateTime.now().subtract(const Duration(days: 90)), // Older
        occasionModel: occasionWinter,
        occasionId: occasionWinter.id,
      ),
      FormModel(
        id: 5,
        title: "Archived Form (No Date)",
        link: "archived-form",
        createdAt: null, // To test the "Other" group
        occasionModel: occasionWinter,
        occasionId: occasionWinter.id,
      ),
      FormModel(
        id: 3,
        title: "Feedback Form - Summer",
        link: "feedback-summer-25",
        createdAt: DateTime.now().subtract(const Duration(days: 6)), // Recent
        occasionModel: occasionSummer,
        occasionId: occasionSummer.id,
      ),
    ];
    // --- END OF FAKE DATA ---

    final result = await showDialog<dynamic>(
      context: context,
      builder: (BuildContext dialogContext) {
        return _CreateOrCopyFormDialog(
          // Use the generated fake data instead of the live `_forms` list.
          existingForms: fakeFormsForDialog,
        );
      },
    );

    if (result == null) return; // Dialog dismissed

    if (result is FormModel) {
      // A real implementation would proceed to copy the selected form.
      await _handleCreateCopy(result);
    } else if (result == 'CREATE_NEW') {
      // The user chose to create a new blank form.
      if (!mounted) return;
      await FormCreationHelper.showCreateFormDialog(
        context,
        occasionLink: occasionLink!,
        onFormCreated: () {
          _navigateToFormsHome();
          loadData();
        },
      );
    }
  }

  Future<void> _handleCreateCopy(FormModel form) async {
    try {
      await DbForms.duplicateForm(form.id!);
      if (!mounted) return;
      ToastHelper.Show(context, FeaturesStrings.duplicateSuccess, severity: ToastSeverity.Ok);
      await loadData();
    } catch (e) {
      if (!mounted) return;
      ToastHelper.Show(context, e.toString().replaceFirst("Exception: ", ""), severity: ToastSeverity.NotOk);
    }
  }

  void _navigateToFormsHome() {
    setState(() {
      _selectedForm = null;
    });
  }

  void _handleActionAndRefresh() {
    _navigateToFormsHome();
    loadData();
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
            onTap: _navigateToFormsHome,
            borderRadius: BorderRadius.circular(StylesConfig.commonRoundness),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.article_outlined, size: 20, color: onAppBarColor),
                const SizedBox(width: 6),
                Text(
                  FeaturesStrings.formsTitle,
                  style: TextStyle(fontSize: 16, color: onAppBarColor, fontWeight: FontWeight.normal),
                ),
              ],
            ),
          ),
          if (_selectedForm != null) ...[
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 4.0),
              child: Text(
                "/",
                style: TextStyle(fontSize: 14, color: onAppBarColor.withOpacity(0.4)),
              ),
            ),
            _buildFormSelector(),
          ],
        ],
      ),
    );
  }

  Widget _buildFormSelector() {
    final onAppBarColor = Theme.of(context).appBarTheme.foregroundColor ?? Colors.white;
    if (_forms.length <= 1) {
      return Text(
        _selectedForm.toString(),
        style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: onAppBarColor),
      );
    }

    return PopupMenuButton<FormModel>(
      onSelected: (FormModel form) {
        setState(() {
          _selectedForm = form;
        });
      },
      itemBuilder: (BuildContext context) {
        return _forms.map((form) {
          final isSelected = form.id == _selectedForm!.id;
          return PopupMenuItem<FormModel>(
            value: form,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(form.toString()),
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
              _selectedForm.toString(),
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

  Widget _buildFormsGrid() {
    return RefreshIndicator(
      onRefresh: loadData,
      child: CustomScrollView(
        slivers: [
          const SliverToBoxAdapter(child: SizedBox(height: 16)),
          SliverPadding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            sliver: SliverGrid(
              gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                maxCrossAxisExtent: 380,
                mainAxisExtent: 110,
                mainAxisSpacing: 16,
                crossAxisSpacing: 16,
              ),
              delegate: SliverChildBuilderDelegate(
                    (context, index) {
                  final form = _forms[index];
                  return FormCard(
                    form: form,
                    onTap: () => _handleCardTap(form),
                    onCreateCopy: () => _handleCreateCopy(form),
                  );
                },
                childCount: _forms.length,
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
              label: Text(FeaturesStrings.createNewForm),
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
          : _selectedForm == null
          ? _buildFormsGrid()
          : FormTab(
        key: ValueKey(_selectedForm!.id),
        formLink: _selectedForm!.link!,
        onActionCompleted: _handleActionAndRefresh,
        onDataUpdated: loadData,
      ),
    );
  }
}

class FormCard extends StatelessWidget {
  final FormModel form;
  final VoidCallback onTap;
  final VoidCallback onCreateCopy;

  const FormCard({
    super.key,
    required this.form,
    required this.onTap,
    required this.onCreateCopy,
  });

  Widget _buildStat(BuildContext context, {required IconData icon, required String value, required String tooltip, Color? color}) {
    final theme = Theme.of(context);
    final defaultColor = theme.colorScheme.onSurface.withOpacity(0.7);
    final iconColor = color ?? defaultColor;
    final statsTextStyle = theme.textTheme.bodySmall?.copyWith(color: defaultColor);

    return Tooltip(
      message: tooltip,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 15.0, color: iconColor),
          const SizedBox(width: 4.0),
          Text(value, style: statsTextStyle),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDarkMode = theme.brightness == Brightness.dark;
    final onSurfaceColor = theme.colorScheme.onSurface;

    final cardColor = isDarkMode ? Colors.grey[850] : theme.cardColor;
    final borderColor = isDarkMode ? Colors.grey[700]! : theme.dividerColor;

    return Card(
      elevation: 0,
      color: cardColor,
      clipBehavior: Clip.antiAlias,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(StylesConfig.commonRoundness),
        side: BorderSide(color: borderColor, width: 1),
      ),
      child: InkWell(
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 8.0),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              PopupMenuButton<String>(
                elevation: 0,
                icon: Icon(Icons.more_vert, color: onSurfaceColor.withOpacity(0.7)),
                onSelected: (value) {
                  if (value == "create_copy") {
                    onCreateCopy();
                  }
                },
                itemBuilder: (BuildContext context) => [
                  PopupMenuItem(
                    value: "create_copy",
                    child: Text(FeaturesStrings.createCopy),
                  ),
                ],
              ),
              const SizedBox(width: 4),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text(
                          form.toString(),
                          style: theme.textTheme.titleMedium?.copyWith(
                            fontWeight: FontWeight.bold,
                          ),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                        if (form.stats != null) ...[
                          const SizedBox(height: 8),
                          Wrap(
                            spacing: 12.0,
                            runSpacing: 4.0,
                            children: [
                              _buildStat(context, icon: Icons.people_alt_outlined, value: form.stats!.total.toString(), tooltip: FeaturesStrings.responses),
                              _buildStat(context, icon: Icons.check_circle_outline, value: form.stats!.paidOrSent.toString(), tooltip: OrdersStrings.gridPaidOrSent),
                              _buildStat(context, icon: Icons.shopping_cart_outlined, value: form.stats!.ordered.toString(), tooltip: OrdersStrings.gridOrdered),
                              _buildStat(context, icon: Icons.cancel_outlined, value: form.stats!.storno.toString(), tooltip: OrdersStrings.gridCancelled),
                            ],
                          )
                        ],
                      ],
                    ),
                    Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(
                          form.isOpen == true ? Icons.check_circle : Icons.cancel,
                          color: form.isOpen == true
                              ? ThemeConfig.greenColor(context)
                              : ThemeConfig.redColor(context),
                          size: 16,
                        ),
                        const SizedBox(width: 6),
                        Text(
                          form.isOpen == true ? FeaturesStrings.statusOpen : FeaturesStrings.statusClosed,
                          style: theme.textTheme.bodyMedium?.copyWith(
                            color: form.isOpen == true
                                ? ThemeConfig.greenColor(context)
                                : ThemeConfig.redColor(context),
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 8),
              Icon(Icons.chevron_right, color: onSurfaceColor.withOpacity(0.5)),
              const SizedBox(width: 4),
            ],
          ),
        ),
      ),
    );
  }
}

class _CreateOrCopyFormDialog extends StatefulWidget {
  final List<FormModel> existingForms;

  const _CreateOrCopyFormDialog({required this.existingForms});

  @override
  _CreateOrCopyFormDialogState createState() => _CreateOrCopyFormDialogState();
}

class _CreateOrCopyFormDialogState extends State<_CreateOrCopyFormDialog> {
  final _searchController = TextEditingController();
  List<dynamic> _groupedAndFilteredForms = [];

  @override
  void initState() {
    super.initState();
    _filterAndGroupForms();
    _searchController.addListener(_filterAndGroupForms);
  }

  @override
  void dispose() {
    _searchController.removeListener(_filterAndGroupForms);
    _searchController.dispose();
    super.dispose();
  }

  void _filterAndGroupForms() {
    final query = _searchController.text;
    List<FormModel> tempFilteredForms;

    if (query.isEmpty) {
      tempFilteredForms = widget.existingForms;
    } else {
      final normalizedQuery = Utilities.removeDiacritics(query.toLowerCase());
      tempFilteredForms = widget.existingForms.where((form) {
        final normalizedTitle = Utilities.removeDiacritics((form.title ?? "").toLowerCase());
        return normalizedTitle.contains(normalizedQuery);
      }).toList();
    }

    tempFilteredForms.sort((a, b) => (b.createdAt ?? DateTime(0)).compareTo(a.createdAt ?? DateTime(0)));

    final List<dynamic> newGroupedList = [];
    final now = DateTime.now();
    final List<FormModel> recent = [];
    final List<FormModel> lastMonth = [];
    final List<FormModel> older = [];
    final List<FormModel> dateless = [];

    for (var form in tempFilteredForms) {
      if (form.createdAt == null) {
        dateless.add(form);
        continue;
      }
      final difference = now.difference(form.createdAt!);
      if (difference.inDays <= 7) {
        recent.add(form);
      } else if (difference.inDays <= 30) {
        lastMonth.add(form);
      } else {
        older.add(form);
      }
    }

    if (recent.isNotEmpty) {
      newGroupedList.add("Recent");
      newGroupedList.addAll(recent);
    }
    if (lastMonth.isNotEmpty) {
      newGroupedList.add("Last 30 days");
      newGroupedList.addAll(lastMonth);
    }
    if (older.isNotEmpty) {
      newGroupedList.add("Older");
      newGroupedList.addAll(older);
    }
    if (dateless.isNotEmpty) {
      newGroupedList.add("Other");
      newGroupedList.addAll(dateless);
    }

    setState(() {
      _groupedAndFilteredForms = newGroupedList;
    });
  }

  @override
  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text("Add a Form"),
      contentPadding: EdgeInsets.zero,
      content: SizedBox(
        width: 450,
        height: 500,
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: TextField(
                controller: _searchController,
                autofocus: true,
                decoration: InputDecoration(
                  hintText: "Search existing forms to copy...",
                  prefixIcon: const Icon(Icons.search),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(8.0)),
                  isDense: true,
                ),
              ),
            ),
            ListTile(
              leading: const Icon(Icons.add_circle_outline),
              title: const Text("Create a new blank form"),
              onTap: () => Navigator.of(context).pop('CREATE_NEW'),
            ),
            const Divider(height: 1),
            Expanded(
              child: ListView.builder(
                shrinkWrap: true,
                itemCount: _groupedAndFilteredForms.length,
                itemBuilder: (context, index) {
                  final item = _groupedAndFilteredForms[index];
                  if (item is String) {
                    // Renders group headers like "Recent", "Older", etc.
                    return Padding(
                      padding: const EdgeInsets.fromLTRB(16.0, 16.0, 16.0, 8.0),
                      child: Text(
                        item,
                        style: Theme.of(context).textTheme.labelLarge?.copyWith(
                          color: Theme.of(context).primaryColor,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    );
                  } else if (item is FormModel) {
                    // Renders the enhanced list item for a form.
                    final form = item;
                    final occasionTitle = form.occasionModel?.title;
                    final dateText = form.createdAt != null
                        ? 'Created: ${DateFormat('d. M. yyyy').format(form.createdAt!)}'
                        : 'No creation date';

                    return ListTile(
                      leading: const Icon(Icons.article_outlined),
                      title: Text(form.toString()),
                      subtitle: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          if (occasionTitle != null)
                            Padding(
                              padding: const EdgeInsets.only(top: 2.0, bottom: 2.0),
                              child: Text(
                                'Occasion: $occasionTitle',
                                style: Theme.of(context).textTheme.bodySmall,
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                              ),
                            ),
                          Text(
                            dateText,
                            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                              color: Theme.of(context).hintColor,
                            ),
                          ),
                        ],
                      ),
                      isThreeLine: occasionTitle != null,
                      onTap: () => Navigator.of(context).pop(form),
                    );
                  }
                  return const SizedBox.shrink();
                },
              ),
            ),
          ],
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: const Text("Cancel"),
        ),
      ],
    );
  }
}