import 'package:flutter/material.dart';
import 'package:fstapp/components/client_changes/client_change_model.dart';
import 'package:fstapp/components/client_changes/client_changes_strings.dart';
import 'package:fstapp/components/client_changes/db_client_changes.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/connectivity_service.dart';
import 'package:fstapp/services/exception_handler.dart';
import 'package:intl/intl.dart';

class ClientChangesTab extends StatefulWidget {
  const ClientChangesTab({super.key});
  @override
  State<ClientChangesTab> createState() => _ClientChangesTabState();
}

class _ClientChangesTabState extends State<ClientChangesTab> {
  final _repository = DbClientChanges();
  final _items = <ClientChangeSummary>[];
  DateTime? _cursorTime;
  String? _cursorId;
  bool _error = false;
  bool _offline = false;
  bool _loading = false;
  bool _hasMore = true;
  String? _componentFilter;
  String? _classFilter;

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

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    if (_loading || !_hasMore) return;
    final isOffline = await ConnectivityService.isOffline();
    if (!mounted) return;
    if (isOffline) {
      setState(() {
        _error = true;
        _offline = true;
      });
      return;
    }
    setState(() {
      _loading = true;
      _error = false;
      _offline = false;
    });
    final page = await ExceptionHandler.guard(
      context,
      futureFunction: () => _repository.list(
        occasionId: RightsService.currentOccasionId()!,
        beforeTime: _cursorTime,
        beforeId: _cursorId,
        filters: {
          if (_componentFilter != null) 'component': _componentFilter,
          if (_classFilter != null) 'changeClass': _classFilter,
        },
      ),
    );
    if (!mounted) return;
    setState(() {
      if (page != null) {
        _items.addAll(page.items);
        _cursorTime = page.nextTime;
        _cursorId = page.nextId;
        _hasMore = page.items.length == 50;
      } else {
        _error = true;
      }
      _loading = false;
    });
  }

  Future<void> _showDetail(ClientChangeSummary change) async {
    final detail = await ExceptionHandler.guard(
      context,
      futureFunction: () => _repository.detail(change.commitId),
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
      _items.clear();
      _cursorTime = null;
      _cursorId = null;
      _hasMore = true;
    });
    _load();
  }

  @override
  Widget build(BuildContext context) {
    if (_error && _items.isEmpty) {
      return Center(
          child: Column(mainAxisSize: MainAxisSize.min, children: [
        Text(_offline
            ? ClientChangesStrings.onlineOnly
            : ClientChangesStrings.loadError),
        TextButton(onPressed: _load, child: Text(ClientChangesStrings.retry)),
      ]));
    }
    if (_items.isEmpty && _loading) {
      return const Center(child: CircularProgressIndicator());
    }
    if (_items.isEmpty) {
      return Center(child: Text(ClientChangesStrings.empty));
    }
    return Column(children: [
      Padding(
        padding: const EdgeInsets.symmetric(horizontal: 12),
        child: Row(children: [
          const Icon(Icons.filter_list),
          const SizedBox(width: 8),
          Expanded(
              child: DropdownButton<String?>(
            isExpanded: true,
            value: _componentFilter,
            hint: Text(ClientChangesStrings.component),
            items: [
              DropdownMenuItem<String?>(
                  value: null, child: Text(ClientChangesStrings.all)),
              ..._components.map((value) =>
                  DropdownMenuItem<String?>(value: value, child: Text(value))),
            ],
            onChanged: (value) =>
                _setFilters(component: value, changeClass: _classFilter),
          )),
          const SizedBox(width: 12),
          Expanded(
              child: DropdownButton<String?>(
            isExpanded: true,
            value: _classFilter,
            hint: Text(ClientChangesStrings.changeClass),
            items: [
              DropdownMenuItem<String?>(
                  value: null, child: Text(ClientChangesStrings.all)),
              ..._classes.map((value) =>
                  DropdownMenuItem<String?>(value: value, child: Text(value))),
            ],
            onChanged: (value) =>
                _setFilters(component: _componentFilter, changeClass: value),
          )),
        ]),
      ),
      Expanded(
          child: ListView.builder(
        itemCount: _items.length + (_hasMore ? 1 : 0),
        itemBuilder: (context, index) {
          if (index == _items.length) {
            _load();
            return const Center(
                child: Padding(
                    padding: EdgeInsets.all(16),
                    child: CircularProgressIndicator()));
          }
          final change = _items[index];
          return ListTile(
            onTap: () => _showDetail(change),
            leading: const Icon(Icons.history),
            title: Text(change.source),
            subtitle:
                Text(change.actorDisplay ?? ClientChangesStrings.deletedActor),
            trailing: Text(DateFormat.yMd().add_Hm().format(change.occurredAt)),
          );
        },
      )),
    ]);
  }
}
