import 'dart:async';

import 'package:flutter/material.dart';
import 'package:fstapp/components/client_changes/client_change_model.dart';
import 'package:fstapp/components/client_changes/client_changes_strings.dart';
import 'package:fstapp/components/client_changes/db_client_changes.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/connectivity_service.dart';
import 'package:fstapp/services/exception_handler.dart';
import 'package:intl/intl.dart';

typedef ClientChangesPageLoader = Future<ClientChangesPage> Function({
  required int occasionId,
  DateTime? beforeTime,
  String? beforeId,
  required Map<String, dynamic> filters,
});
typedef ClientChangeDetailLoader = Future<ClientChangeDetail> Function(
    String commitId);

class ClientChangesTab extends StatefulWidget {
  const ClientChangesTab({
    super.key,
    this.clientSyncEnabled,
    this.pageLoader,
    this.detailLoader,
    this.isOffline,
    this.occasionId,
  });

  final bool? clientSyncEnabled;
  final ClientChangesPageLoader? pageLoader;
  final ClientChangeDetailLoader? detailLoader;
  final Future<bool> Function()? isOffline;
  final int? occasionId;

  @override
  State<ClientChangesTab> createState() => _ClientChangesTabState();
}

class _ClientChangesTabState extends State<ClientChangesTab> {
  DbClientChanges? _repository;
  final _actorController = TextEditingController();
  Timer? _actorSearchDebounce;
  final _items = <ClientChangeSummary>[];
  DateTime? _cursorTime;
  String? _cursorId;
  final _pageTimes = <DateTime?>[null];
  final _pageIds = <String?>[null];
  int _pageIndex = 0;
  int _loadEpoch = 0;
  bool _error = false;
  bool _offline = false;
  bool _loading = false;
  bool _hasMore = true;
  String? _componentFilter;
  String? _classFilter;
  String? _actorFilter;

  static const _components = <String>[
    'occasion_config',
    'program_catalog',
    'map_catalog',
    'content_catalog',
    'unit_catalog',
    'live_public',
    'private_program',
    'private_profile',
    'private_inventory',
    'private_activity',
    'private_news',
    'private_feedback',
  ];
  static const _classes = <String>['structural', 'live', 'private', 'bulk'];

  bool get _clientSyncEnabled =>
      widget.clientSyncEnabled ??
      RightsService.occasionLinkModel?.clientSyncV1 ??
      false;

  @override
  void initState() {
    super.initState();
    if (_clientSyncEnabled) {
      if (widget.pageLoader == null || widget.detailLoader == null) {
        _repository = DbClientChanges();
      }
      _load();
    }
  }

  @override
  void dispose() {
    _actorSearchDebounce?.cancel();
    _actorController.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    final epoch = ++_loadEpoch;
    setState(() {
      _loading = true;
      _error = false;
      _offline = false;
    });
    final isOffline =
        await (widget.isOffline ?? ConnectivityService.isOffline)();
    if (!mounted || epoch != _loadEpoch) return;
    if (isOffline) {
      setState(() {
        _error = true;
        _offline = true;
        _loading = false;
      });
      return;
    }
    final page = await ExceptionHandler.guard(
      context,
      futureFunction: () => (widget.pageLoader ?? _repository!.list)(
        occasionId: widget.occasionId ?? RightsService.currentOccasionId()!,
        beforeTime: _cursorTime,
        beforeId: _cursorId,
        filters: {
          if (_componentFilter != null) 'component': _componentFilter,
          if (_classFilter != null) 'changeClass': _classFilter,
          if (_actorFilter != null) 'actor': _actorFilter,
        },
      ),
    );
    if (!mounted || epoch != _loadEpoch) return;
    setState(() {
      if (page != null) {
        _items
          ..clear()
          ..addAll(page.items);
        _cursorTime = page.nextTime;
        _cursorId = page.nextId;
        _hasMore = page.hasMore;
      } else {
        _error = true;
      }
      _loading = false;
    });
  }

  Future<void> _showDetail(ClientChangeSummary change) async {
    final detail = await ExceptionHandler.guard(
      context,
      futureFunction: () =>
          (widget.detailLoader ?? _repository!.detail)(change.commitId),
    );
    if (detail == null) return;
    if (!mounted) return;
    await showDialog<void>(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(
            '${change.source} · ${DateFormat.yMd().add_Hm().format(change.occurredAt)}'),
        content: SizedBox(
          width: 680,
          child: ListView(
            shrinkWrap: true,
            children: [
              ...detail.items.map((item) => ListTile(
                    title: Text(item['safeLabel']?.toString() ??
                        item['entityType'].toString()),
                    subtitle: Text(
                        '${item['operation']} · ${((item['changedFields'] as List?) ?? const []).join(', ')}'),
                  )),
              const Divider(),
              Text(ClientChangesStrings.publication),
              ...(((detail.summary['components'] as List?) ?? const []).map(
                (raw) {
                  final component = (raw as Map).cast<String, dynamic>();
                  final published =
                      component['publicationStatus'] == 'published';
                  return ListTile(
                    dense: true,
                    leading:
                        Icon(published ? Icons.cloud_done : Icons.cloud_upload),
                    title: Text(component['component'].toString()),
                    subtitle: Text(published
                        ? ClientChangesStrings.published
                        : ClientChangesStrings.publicationPending),
                    trailing: Text('${component['revision']}'),
                  );
                },
              )),
            ],
          ),
        ),
        actions: [
          TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Icon(Icons.close))
        ],
      ),
    );
  }

  void _setFilters({String? component, String? changeClass}) {
    setState(() {
      _componentFilter = component;
      _classFilter = changeClass;
      _actorFilter = _normalizedActorFilter;
      _items.clear();
      _cursorTime = null;
      _cursorId = null;
      _pageIndex = 0;
      _pageTimes
        ..clear()
        ..add(null);
      _pageIds
        ..clear()
        ..add(null);
      _hasMore = true;
    });
    _load();
  }

  String? get _normalizedActorFilter {
    final value = _actorController.text.trim();
    return value.isEmpty ? null : value;
  }

  void _applyActorFilter() {
    _actorSearchDebounce?.cancel();
    _setFilters(component: _componentFilter, changeClass: _classFilter);
  }

  void _scheduleActorFilter() {
    _actorSearchDebounce?.cancel();
    _actorSearchDebounce = Timer(
      const Duration(milliseconds: 350),
      _applyActorFilter,
    );
  }

  void _nextPage() {
    if (!_hasMore || _loading || _cursorTime == null || _cursorId == null) {
      return;
    }
    final nextIndex = _pageIndex + 1;
    if (_pageTimes.length == nextIndex) {
      _pageTimes.add(_cursorTime);
      _pageIds.add(_cursorId);
    }
    setState(() {
      _pageIndex = nextIndex;
      _cursorTime = _pageTimes[nextIndex];
      _cursorId = _pageIds[nextIndex];
    });
    _load();
  }

  void _previousPage() {
    if (_pageIndex == 0 || _loading) return;
    setState(() {
      _pageIndex--;
      _cursorTime = _pageTimes[_pageIndex];
      _cursorId = _pageIds[_pageIndex];
    });
    _load();
  }

  @override
  Widget build(BuildContext context) {
    if (!_clientSyncEnabled) {
      return Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Icon(Icons.history_toggle_off),
            const SizedBox(height: 8),
            Text(
              ClientChangesStrings.notActive,
              textAlign: TextAlign.center,
            ),
          ],
        ),
      );
    }
    return Column(children: [
      Padding(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
        child: Wrap(spacing: 12, runSpacing: 4, children: [
          const Icon(Icons.filter_list),
          SizedBox(
              width: 240,
              child: DropdownButton<String?>(
                isExpanded: true,
                value: _componentFilter,
                hint: Text(ClientChangesStrings.component),
                items: [
                  DropdownMenuItem<String?>(
                      value: null, child: Text(ClientChangesStrings.all)),
                  ..._components.map((value) => DropdownMenuItem<String?>(
                      value: value, child: Text(value))),
                ],
                onChanged: (value) =>
                    _setFilters(component: value, changeClass: _classFilter),
              )),
          SizedBox(
              width: 220,
              child: DropdownButton<String?>(
                isExpanded: true,
                value: _classFilter,
                hint: Text(ClientChangesStrings.changeClass),
                items: [
                  DropdownMenuItem<String?>(
                      value: null, child: Text(ClientChangesStrings.all)),
                  ..._classes.map((value) => DropdownMenuItem<String?>(
                      value: value, child: Text(value))),
                ],
                onChanged: (value) => _setFilters(
                    component: _componentFilter, changeClass: value),
              )),
          SizedBox(
            width: 280,
            child: TextField(
              controller: _actorController,
              textInputAction: TextInputAction.search,
              decoration: InputDecoration(
                isDense: true,
                hintText: ClientChangesStrings.actorSearch,
                prefixIcon: const Icon(Icons.person_search),
                suffixIcon: IconButton(
                  onPressed: _applyActorFilter,
                  icon: const Icon(Icons.search),
                ),
              ),
              onChanged: (_) => _scheduleActorFilter(),
              onSubmitted: (_) => _applyActorFilter(),
            ),
          ),
        ]),
      ),
      if (_loading) const LinearProgressIndicator(),
      Expanded(
          child: _error && _items.isEmpty
              ? Center(
                  child: Column(mainAxisSize: MainAxisSize.min, children: [
                  Text(_offline
                      ? ClientChangesStrings.onlineOnly
                      : ClientChangesStrings.loadError),
                  TextButton(
                      onPressed: _load,
                      child: Text(ClientChangesStrings.retry)),
                ]))
              : _items.isEmpty && _loading
                  ? const Center(child: CircularProgressIndicator())
                  : _items.isEmpty
                      ? Center(child: Text(ClientChangesStrings.empty))
                      : ListView.builder(
                          itemCount: _items.length,
                          itemBuilder: (context, index) {
                            final change = _items[index];
                            return ListTile(
                              onTap: () => _showDetail(change),
                              leading: const Icon(Icons.history),
                              title: Text(
                                  '${change.source} · ${ClientChangesStrings.itemCount(change.itemCount)}'),
                              subtitle: Text(change.actorDisplay ??
                                  ClientChangesStrings.deletedActor),
                              trailing: Text(DateFormat.yMd()
                                  .add_Hm()
                                  .format(change.occurredAt)),
                            );
                          },
                        )),
      SafeArea(
        top: false,
        child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
          IconButton(
            tooltip: ClientChangesStrings.previousPage,
            onPressed: _pageIndex > 0 && !_loading ? _previousPage : null,
            icon: const Icon(Icons.chevron_left),
          ),
          Text(ClientChangesStrings.page(_pageIndex + 1)),
          IconButton(
            tooltip: ClientChangesStrings.nextPage,
            onPressed: _hasMore && !_loading ? _nextPage : null,
            icon: const Icon(Icons.chevron_right),
          ),
        ]),
      ),
    ]);
  }
}
