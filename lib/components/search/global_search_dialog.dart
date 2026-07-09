import 'dart:async';

import 'package:flutter/material.dart';
import 'package:fstapp/components/information/info_page.dart';
import 'package:fstapp/components/map/map_page.dart';
import 'package:fstapp/components/schedule/event_page.dart';
import 'package:fstapp/components/search/db_search.dart';
import 'package:fstapp/components/search/search_result_model.dart';
import 'package:fstapp/components/search/search_strings.dart';
import 'package:fstapp/components/html/html_view.dart';
import 'package:fstapp/router_service.dart';

/// Global search overlay: a search field plus grouped, ranked results across
/// program / places / info / songs / games / news. Online uses the
/// `search_occasion_content` RPC; offline falls back to the local index.
class GlobalSearchDialog extends StatefulWidget {
  const GlobalSearchDialog({super.key});

  static Future<void> show(BuildContext context) {
    return showDialog(
      context: context,
      barrierColor: Colors.black.withValues(alpha: 0.5),
      builder: (_) => const GlobalSearchDialog(),
    );
  }

  @override
  State<GlobalSearchDialog> createState() => _GlobalSearchDialogState();
}

class _GlobalSearchDialogState extends State<GlobalSearchDialog> {
  final TextEditingController _controller = TextEditingController();
  Timer? _debounce;
  bool _loading = false;
  String _query = '';
  List<SearchResultModel> _results = [];
  int _requestId = 0;

  @override
  void dispose() {
    _debounce?.cancel();
    _controller.dispose();
    super.dispose();
  }

  void _onChanged(String value) {
    _debounce?.cancel();
    _debounce = Timer(const Duration(milliseconds: 250), () => _run(value));
  }

  Future<void> _run(String value) async {
    final q = value.trim();
    final reqId = ++_requestId;
    setState(() {
      _query = q;
      _loading = q.isNotEmpty;
      if (q.isEmpty) _results = [];
    });
    if (q.isEmpty) return;
    final res = await DbSearch.search(q);
    if (!mounted || reqId != _requestId) return;
    setState(() {
      _results = res;
      _loading = false;
    });
  }

  void _openResult(SearchResultModel r) {
    Navigator.of(context).pop();
    // Routes mirror the deployed build exactly (SearchService nav switch):
    //   event -> event/<id>, place -> map/<id>, info -> info/<id>,
    //   song  -> songbook,   game  -> game,     news -> news.
    switch (r.entityType) {
      case 'event':
        RouterService.navigateOccasion(
            context, "${EventPage.ROUTE}/${r.entityId}");
        break;
      case 'place':
        RouterService.navigateOccasion(
            context, "${MapPage.ROUTE}/${r.entityId}");
        break;
      case 'info':
        RouterService.navigateOccasion(
            context, "${InfoPage.ROUTE}/${r.entityId}");
        break;
      case 'song':
        RouterService.navigateOccasion(context, "songbook");
        break;
      case 'game':
        RouterService.navigateOccasion(context, "game");
        break;
      case 'news':
        RouterService.navigateOccasion(context, "news");
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Dialog(
      insetPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 48),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 560, maxHeight: 640),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 12, 8, 8),
              child: Row(
                children: [
                  const Icon(Icons.search),
                  const SizedBox(width: 8),
                  Expanded(
                    child: TextField(
                      controller: _controller,
                      autofocus: true,
                      textInputAction: TextInputAction.search,
                      decoration: InputDecoration(
                        hintText: SearchStrings.hint,
                        border: InputBorder.none,
                      ),
                      onChanged: _onChanged,
                      onSubmitted: _run,
                    ),
                  ),
                  IconButton(
                    icon: const Icon(Icons.close),
                    onPressed: () => Navigator.of(context).pop(),
                  ),
                ],
              ),
            ),
            const Divider(height: 1),
            Expanded(child: _buildBody(theme)),
          ],
        ),
      ),
    );
  }

  Widget _buildBody(ThemeData theme) {
    if (_loading) {
      return const Center(child: CircularProgressIndicator());
    }
    if (_query.isEmpty) {
      return _centeredHint(SearchStrings.emptyPrompt);
    }
    if (_results.isEmpty) {
      return _centeredHint(SearchStrings.noResults);
    }

    final children = <Widget>[];
    for (final group in SearchStrings.groupOrder) {
      final items = _results.where((r) => r.entityType == group).toList();
      if (items.isEmpty) continue;
      children.add(Padding(
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 4),
        child: Text(
          SearchStrings.groupTitle(group),
          style: theme.textTheme.labelLarge
              ?.copyWith(color: theme.colorScheme.primary),
        ),
      ));
      for (final r in items) {
        final hasTitle = r.title != null && r.title!.isNotEmpty;
        final hasSnippet = r.snippet?.isNotEmpty ?? false;
        children.add(ListTile(
          dense: true,
          // Descriptions/snippets come back as HTML — render them with the
          // shared HtmlView (as everywhere else in the app), not as raw text.
          title: hasTitle
              ? Text(r.title!)
              : (hasSnippet
                  ? HtmlView(html: r.snippet!, fontSize: 14)
                  : const Text('')),
          subtitle: (hasTitle && hasSnippet)
              ? HtmlView(html: r.snippet!, fontSize: 12)
              : null,
          onTap: () => _openResult(r),
        ));
      }
    }
    return ListView(children: children);
  }

  Widget _centeredHint(String text) => Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Text(text, textAlign: TextAlign.center),
        ),
      );
}
