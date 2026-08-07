import 'package:flutter/material.dart';
import 'package:fstapp/components/client_changes/client_change_model.dart';
import 'package:fstapp/components/client_changes/client_changes_strings.dart';
import 'package:fstapp/components/client_changes/db_client_changes.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/connectivity_service.dart';
import 'package:fstapp/services/exception_handler.dart';
import 'package:intl/intl.dart';

typedef ClientActivityLoader = Future<List<ClientActivityBucket>> Function({
  required int occasionId,
  required DateTime from,
  required DateTime to,
});

class ClientChangesTab extends StatefulWidget {
  const ClientChangesTab({
    super.key,
    this.clientSyncEnabled,
    this.activityLoader,
    this.isOffline,
    this.occasionId,
  });

  final bool? clientSyncEnabled;
  final ClientActivityLoader? activityLoader;
  final Future<bool> Function()? isOffline;
  final int? occasionId;

  @override
  State<ClientChangesTab> createState() => _ClientChangesTabState();
}

class _ClientChangesTabState extends State<ClientChangesTab> {
  DbClientChanges? _repository;
  List<ClientActivityBucket> _buckets = const [];
  late DateTime _from;
  late DateTime _to;
  int _loadEpoch = 0;
  bool _error = false;
  bool _offline = false;
  bool _loading = false;

  bool get _clientSyncEnabled =>
      widget.clientSyncEnabled ??
      RightsService.occasionLinkModel?.clientSyncV1 ??
      false;

  @override
  void initState() {
    super.initState();
    final today = DateUtils.dateOnly(DateTime.now());
    _from = today.subtract(const Duration(days: 6));
    _to = today.add(const Duration(days: 1));
    if (_clientSyncEnabled) {
      if (widget.activityLoader == null) _repository = DbClientChanges();
      _load();
    }
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
    final result = await ExceptionHandler.guard(
      context,
      futureFunction: () => (widget.activityLoader ?? _repository!.activity)(
        occasionId: widget.occasionId ?? RightsService.currentOccasionId()!,
        from: _from,
        to: _to,
      ),
    );
    if (!mounted || epoch != _loadEpoch) return;
    setState(() {
      if (result == null) {
        _error = true;
      } else {
        _buckets = result;
      }
      _loading = false;
    });
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
            Text(ClientChangesStrings.notActive, textAlign: TextAlign.center),
          ],
        ),
      );
    }

    return Column(
      children: [
        if (_loading) const LinearProgressIndicator(),
        Expanded(
          child: _error && _buckets.isEmpty
              ? Center(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(_offline
                          ? ClientChangesStrings.onlineOnly
                          : ClientChangesStrings.loadError),
                      TextButton(
                        onPressed: _load,
                        child: Text(ClientChangesStrings.retry),
                      ),
                    ],
                  ),
                )
              : RefreshIndicator(
                  onRefresh: _load,
                  child: ListView(
                    physics: const AlwaysScrollableScrollPhysics(),
                    padding: const EdgeInsets.all(16),
                    children: [
                      Text(
                        ClientChangesStrings.title,
                        style: Theme.of(context).textTheme.headlineSmall,
                      ),
                      const SizedBox(height: 4),
                      Text(ClientChangesStrings.subtitle),
                      const SizedBox(height: 24),
                      if (_buckets.isEmpty && !_loading)
                        Padding(
                          padding: const EdgeInsets.symmetric(vertical: 40),
                          child:
                              Center(child: Text(ClientChangesStrings.empty)),
                        )
                      else
                        ClientActivityHeatmap(
                          buckets: _buckets,
                          from: _from,
                          to: _to,
                        ),
                    ],
                  ),
                ),
        ),
      ],
    );
  }
}

class ClientActivityHeatmap extends StatelessWidget {
  const ClientActivityHeatmap({
    super.key,
    required this.buckets,
    required this.from,
    required this.to,
  });

  final List<ClientActivityBucket> buckets;
  final DateTime from;
  final DateTime to;

  static const _slotWidth = 20.0;
  static const _labelWidth = 92.0;
  static const _categories = <String>[
    'structural',
    'live',
    'private',
    'bulk',
    'other',
  ];

  Color _categoryColor(BuildContext context, String category) {
    final colors = Theme.of(context).colorScheme;
    return switch (category) {
      'structural' => colors.primary,
      'live' => Colors.green.shade600,
      'private' => Colors.purple.shade400,
      'bulk' => Colors.orange.shade700,
      _ => colors.outline,
    };
  }

  String _categoryLabel(String category) => switch (category) {
        'structural' => ClientChangesStrings.structural,
        'live' => ClientChangesStrings.live,
        'private' => ClientChangesStrings.private,
        'bulk' => ClientChangesStrings.bulk,
        _ => ClientChangesStrings.other,
      };

  @override
  Widget build(BuildContext context) {
    final bySlot = <String, Map<String, int>>{};
    for (final bucket in buckets) {
      final local = bucket.startedAt;
      final slot = DateTime(local.year, local.month, local.day, local.hour,
          local.minute < 30 ? 0 : 30);
      final key = slot.toIso8601String();
      final category =
          _categories.contains(bucket.category) ? bucket.category : 'other';
      bySlot.putIfAbsent(key, () => <String, int>{}).update(
            category,
            (value) => value + bucket.count,
            ifAbsent: () => bucket.count,
          );
    }
    final maximum = bySlot.values.fold<int>(
      1,
      (current, counts) => counts.values
          .fold<int>(current, (inner, count) => count > inner ? count : inner),
    );
    final days = <DateTime>[];
    for (var day = DateUtils.dateOnly(from);
        day.isBefore(to);
        day = day.add(const Duration(days: 1))) {
      days.add(day);
    }

    return Card(
      clipBehavior: Clip.antiAlias,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: SizedBox(
                width: _labelWidth + 48 * _slotWidth,
                child: Column(
                  children: [
                    _timeAxis(context),
                    const SizedBox(height: 6),
                    ...days.map((day) => _dayRow(
                          context,
                          day,
                          bySlot,
                          maximum,
                        )),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 18),
            Wrap(
              spacing: 16,
              runSpacing: 8,
              children: _categories
                  .map((category) => _LegendItem(
                        color: _categoryColor(context, category),
                        label: _categoryLabel(category),
                      ))
                  .toList(growable: false),
            ),
          ],
        ),
      ),
    );
  }

  Widget _timeAxis(BuildContext context) => Row(
        children: [
          SizedBox(
            width: _labelWidth,
            child: Text(
              ClientChangesStrings.time,
              style: Theme.of(context).textTheme.labelSmall,
            ),
          ),
          ...List.generate(48, (slot) {
            final showLabel = slot % 12 == 0;
            return SizedBox(
              width: _slotWidth,
              child: showLabel
                  ? Text('${(slot ~/ 2).toString().padLeft(2, '0')}:00',
                      style: Theme.of(context).textTheme.labelSmall)
                  : null,
            );
          }),
        ],
      );

  Widget _dayRow(
    BuildContext context,
    DateTime day,
    Map<String, Map<String, int>> bySlot,
    int maximum,
  ) =>
      Padding(
        padding: const EdgeInsets.symmetric(vertical: 3),
        child: Row(
          children: [
            SizedBox(
              width: _labelWidth,
              child: Text(DateFormat.MMMEd().format(day),
                  style: Theme.of(context).textTheme.labelMedium),
            ),
            ...List.generate(48, (index) {
              final slot = day.add(Duration(minutes: index * 30));
              final counts = bySlot[slot.toIso8601String()] ?? const {};
              final total = counts.values.fold<int>(0, (a, b) => a + b);
              final dominant = counts.entries.fold<MapEntry<String, int>?>(
                null,
                (best, entry) =>
                    best == null || entry.value > best.value ? entry : best,
              );
              final opacity = total == 0
                  ? 0.06
                  : 0.2 + 0.8 * (total / maximum).clamp(0.0, 1.0);
              final details = counts.entries
                  .map(
                      (entry) => '${_categoryLabel(entry.key)}: ${entry.value}')
                  .join('\n');
              return Tooltip(
                message: total == 0
                    ? DateFormat.MMMd().add_Hm().format(slot)
                    : '${DateFormat.MMMd().add_Hm().format(slot)}\n'
                        '${ClientChangesStrings.activityCount(total)}\n$details',
                child: Container(
                  key: ValueKey('activity-${slot.toIso8601String()}'),
                  width: _slotWidth - 2,
                  height: 28,
                  margin: const EdgeInsets.symmetric(horizontal: 1),
                  decoration: BoxDecoration(
                    color: (dominant == null
                            ? Theme.of(context).colorScheme.outline
                            : _categoryColor(context, dominant.key))
                        .withValues(alpha: opacity),
                    borderRadius: BorderRadius.circular(3),
                  ),
                ),
              );
            }),
          ],
        ),
      );
}

class _LegendItem extends StatelessWidget {
  const _LegendItem({required this.color, required this.label});

  final Color color;
  final String label;

  @override
  Widget build(BuildContext context) => Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: 12,
            height: 12,
            decoration: BoxDecoration(
              color: color,
              borderRadius: BorderRadius.circular(3),
            ),
          ),
          const SizedBox(width: 6),
          Text(label),
        ],
      );
}
