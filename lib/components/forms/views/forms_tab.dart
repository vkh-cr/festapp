import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/components/eshop/orders_strings.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/data_services_eshop/db_forms.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import '../form_strings.dart';
import 'create_or_copy_dialog.dart';
import 'form_creation_helper.dart';
import 'form_tab.dart';

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

    final List<FormModel> formsForDialog =
    await DbForms.getAllFormsForOccasionOrUnit();

    final result = await showDialog<dynamic>(
      context: context,
      builder: (BuildContext dialogContext) {
        // Use the new, imported dialog widget
        return CreateOrCopyFormDialog(
          existingForms: formsForDialog,
        );
      },
    );

    if (result == null) return; // Dialog dismissed

    if (result is FormModel) {
      await _handleCreateCopy(result);
    } else if (result == 'CREATE_NEW') {
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

  Future<void> _handleCreateCopy(FormModel formToCopy) async {
    if (occasionLink == null) return;
    try {
      await DbForms.duplicateFormToOccasion(
        sourceFormId: formToCopy.id!,
        targetOccasionLink: occasionLink!,
      );

      if (!mounted) return;
      ToastHelper.Show(context, FormStrings.duplicateSuccess, severity: ToastSeverity.Ok);
      _navigateToFormsHome();
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
                  FormStrings.formsTitle,
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
                mainAxisExtent: 125,
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

  Widget _buildEmptyState() {
    return Center(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 24.0),
        child: Text(
          FormStrings.noFormsForEventPrompt(FormStrings.createNewForm),
          textAlign: TextAlign.center,
          style: Theme.of(context).textTheme.titleMedium?.copyWith(
              color: Theme.of(context).hintColor
          ),
        ),
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
              label: Text(FormStrings.createNewForm),
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
          : _selectedForm != null
          ? FormTab(
        key: ValueKey(_selectedForm!.id),
        formLink: _selectedForm!.link!,
        onActionCompleted: _handleActionAndRefresh,
        onDataUpdated: loadData,
      )
          : _forms.isEmpty
          ? _buildEmptyState()
          : _buildFormsGrid(),
    );
  }
}

// NOTE: The FormCard widget and the now-removed _CreateOrCopyFormDialog
// remain the same as in your provided code, but the dialog is now in its own file.
// I have included FormCard here for completeness of the file.

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
                    child: Text(FormStrings.createCopy),
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
                              _buildStat(context, icon: Icons.chat_bubble, value: form.stats!.total.toString(), tooltip: FormStrings.responses),
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
                          form.isOpen == true ? FormStrings.statusOpen : FormStrings.statusClosed,
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