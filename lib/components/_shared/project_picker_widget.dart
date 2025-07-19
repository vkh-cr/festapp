import 'package:flutter/material.dart';
import 'package:fstapp/services/utilities_all.dart';

/// A custom stateful widget for the picker UI with search functionality.
class ProjectPicker<T> extends StatefulWidget {
  final VoidCallback onDismiss;
  final List<T> items;
  final T selectedItem;
  final String Function(T item) itemTitleBuilder;
  final void Function(T item) onItemSelected;
  final VoidCallback? onCreateNew;
  final String hintText;
  final String createNewText;

  const ProjectPicker({
    super.key,
    required this.onDismiss,
    required this.items,
    required this.selectedItem,
    required this.itemTitleBuilder,
    required this.onItemSelected,
    this.onCreateNew,
    required this.hintText,
    required this.createNewText,
  });

  @override
  State<ProjectPicker<T>> createState() => _ProjectPickerState<T>();
}

class _ProjectPickerState<T> extends State<ProjectPicker<T>> {
  late List<T> _filteredItems;
  final TextEditingController _searchController = TextEditingController();

  @override
  void initState() {
    super.initState();
    // If there's no hint text, don't enable filtering.
    if (widget.hintText.isNotEmpty) {
      _filteredItems = widget.items;
      _searchController.addListener(_filterItems);
    } else {
      _filteredItems = widget.items;
    }
  }

  @override
  void dispose() {
    _searchController.removeListener(_filterItems);
    _searchController.dispose();
    super.dispose();
  }

  void _filterItems() {
    final query = _searchController.text;
    if (query.isEmpty) {
      setState(() {
        _filteredItems = List.from(widget.items);
      });
      return;
    }

    final normalizedQuery = Utilities.removeDiacritics(query.toLowerCase());
    setState(() {
      _filteredItems = widget.items.where((item) {
        final normalizedTitle =
        Utilities.removeDiacritics(widget.itemTitleBuilder(item).toLowerCase());
        return normalizedTitle.contains(normalizedQuery);
      }).toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDarkMode = theme.brightness == Brightness.dark;

    // Define base styles for consistency, using a slightly smaller font.
    final baseTextStyle = theme.textTheme.bodyMedium;
    final textColor = isDarkMode ? Colors.grey[300] : Colors.grey[800];
    final hintColor = isDarkMode ? Colors.grey[500] : Colors.grey[500];
    final iconColor = isDarkMode ? Colors.grey[400] : Colors.grey[600];

    // Create consistent text styles from the base style
    final titleTextStyle = baseTextStyle?.copyWith(color: textColor);
    final hintTextStyle = baseTextStyle?.copyWith(color: hintColor, fontWeight: FontWeight.normal);
    const iconSize = 20.0;

    return SizedBox(
      width: 300,
      child: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            // Conditionally show the search bar
            if (widget.hintText.isNotEmpty) ...[
              ListTile(
                dense: true,
                contentPadding: const EdgeInsets.only(left: 16.0, right: 16.0),
                title: Row(
                  children: [
                    Icon(Icons.search, color: iconColor, size: iconSize),
                    const SizedBox(width: 12),
                    Expanded(
                      child: TextField(
                        controller: _searchController,
                        autofocus: true,
                        style: titleTextStyle,
                        decoration: InputDecoration(
                          hintText: widget.hintText,
                          hintStyle: hintTextStyle,
                          border: InputBorder.none,
                          isDense: true,
                          contentPadding: EdgeInsets.zero,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const Divider(height: 1),
            ],
            ListView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              padding: const EdgeInsets.symmetric(vertical: 4),
              itemCount: _filteredItems.length,
              itemBuilder: (context, index) {
                final item = _filteredItems[index];
                // Use a safe way to compare items, assuming `T` has `==` implemented.
                final isSelected = item == widget.selectedItem;
                return ListTile(
                  dense: true,
                  contentPadding: const EdgeInsets.only(left: 16.0, right: 16.0),
                  title: Text(widget.itemTitleBuilder(item), style: titleTextStyle),
                  trailing: isSelected ? Icon(Icons.check, color: theme.primaryColor, size: iconSize) : null,
                  onTap: () {
                    widget.onItemSelected(item);
                    widget.onDismiss();
                  },
                );
              },
            ),
            if(widget.onCreateNew != null)
              Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Divider(height: 1),
                  ListTile(
                    dense: true,
                    contentPadding: const EdgeInsets.only(left: 16.0, right: 16.0),
                    onTap: () {
                      widget.onCreateNew!();
                      widget.onDismiss();
                    },
                    title: Row(
                      children: [
                        Icon(Icons.add, color: iconColor, size: iconSize),
                        const SizedBox(width: 12),
                        Text(widget.createNewText, style: titleTextStyle),
                      ],
                    ),
                  ),
                ],
              ),
          ],
        ),
      ),
    );
  }
}