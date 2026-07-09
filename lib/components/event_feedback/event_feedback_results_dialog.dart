import 'dart:convert';
import 'dart:typed_data';

import 'package:csv/csv.dart';
import 'package:file_saver/file_saver.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/event_feedback/db_event_feedback.dart';
import 'package:fstapp/components/event_feedback/event_feedback_model.dart';
import 'package:fstapp/components/event_feedback/event_feedback_strings.dart';

/// Admin view of feedback for one event: summary counts + respondent list,
/// plus an occasion-wide CSV export.
class EventFeedbackResultsDialog extends StatefulWidget {
  final int eventId;
  final int occasionId;
  final String? eventTitle;

  const EventFeedbackResultsDialog({
    super.key,
    required this.eventId,
    required this.occasionId,
    this.eventTitle,
  });

  static Future<void> show(
    BuildContext context, {
    required int eventId,
    required int occasionId,
    String? eventTitle,
  }) {
    return showDialog(
      context: context,
      builder: (_) => EventFeedbackResultsDialog(
        eventId: eventId,
        occasionId: occasionId,
        eventTitle: eventTitle,
      ),
    );
  }

  @override
  State<EventFeedbackResultsDialog> createState() =>
      _EventFeedbackResultsDialogState();
}

class _EventFeedbackResultsDialogState
    extends State<EventFeedbackResultsDialog> {
  EventFeedbackForEdit? _data;
  bool _loading = true;
  bool _exporting = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    setState(() => _loading = true);
    try {
      final d = await DbEventFeedback.getForEdit(widget.eventId);
      if (!mounted) return;
      setState(() {
        _data = d;
        _loading = false;
      });
    } catch (_) {
      if (mounted) setState(() => _loading = false);
    }
  }

  Future<void> _exportCsv() async {
    setState(() => _exporting = true);
    try {
      final rows = await DbEventFeedback.exportForEdit(widget.occasionId);
      final header = [
        EventFeedbackStrings.event,
        EventFeedbackStrings.from,
        EventFeedbackStrings.to,
        EventFeedbackStrings.rating,
        EventFeedbackStrings.comment,
        EventFeedbackStrings.respondent,
        EventFeedbackStrings.submittedAt,
        EventFeedbackStrings.updatedAt,
      ];
      final csvRows = <List<dynamic>>[header];
      for (final r in rows) {
        csvRows.add([
          r['event_title'] ?? '',
          r['event_start_time'] ?? '',
          r['event_end_time'] ?? '',
          EventFeedbackStrings.ratingLabel((r['rating'] ?? '').toString()),
          r['note'] ?? '',
          (r['is_anonymous'] == true)
              ? EventFeedbackStrings.anonymous
              : (r['user_name'] ?? ''),
          r['created_at'] ?? '',
          r['updated_at'] ?? '',
        ]);
      }
      final csv = const ListToCsvConverter().convert(csvRows);
      final bytes = <int>[0xEF, 0xBB, 0xBF, ...utf8.encode(csv)];
      await FileSaver.instance.saveFile(
        name: 'event_feedback',
        bytes: Uint8List.fromList(bytes),
        fileExtension: 'csv',
        mimeType: MimeType.csv,
      );
    } finally {
      if (mounted) setState(() => _exporting = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(widget.eventTitle ?? EventFeedbackStrings.feedbackResults),
      content: SizedBox(
        width: 480,
        child: _loading
            ? const Padding(
                padding: EdgeInsets.all(24),
                child: Center(child: CircularProgressIndicator()),
              )
            : _buildContent(),
      ),
      actions: [
        TextButton(
          onPressed: _exporting ? null : _exportCsv,
          child: Text(EventFeedbackStrings.exportFeedbackCsv),
        ),
        TextButton(
          onPressed: _loading ? null : _load,
          child: Text(EventFeedbackStrings.refresh),
        ),
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: const Text('OK'),
        ),
      ],
    );
  }

  Widget _buildContent() {
    final data = _data;
    if (data == null || data.summary.total == 0) {
      return Padding(
        padding: const EdgeInsets.all(16),
        child: Text(EventFeedbackStrings.noFeedbackYet),
      );
    }
    final s = data.summary;
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            _summaryChip(Icons.sentiment_very_satisfied, s.happy),
            _summaryChip(Icons.sentiment_neutral, s.neutral),
            _summaryChip(Icons.sentiment_very_dissatisfied, s.sad),
          ],
        ),
        const Divider(),
        Flexible(
          child: ListView.builder(
            shrinkWrap: true,
            itemCount: data.items.length,
            itemBuilder: (context, i) {
              final it = data.items[i];
              return ListTile(
                dense: true,
                leading: Icon(_ratingIcon(it.rating)),
                title: Text(it.isAnonymous
                    ? EventFeedbackStrings.anonymous
                    : (it.userName ?? EventFeedbackStrings.anonymous)),
                subtitle:
                    (it.note?.isNotEmpty ?? false) ? Text(it.note!) : null,
              );
            },
          ),
        ),
      ],
    );
  }

  Widget _summaryChip(IconData icon, int count) => Column(
        children: [
          Icon(icon, size: 32),
          Text('$count'),
        ],
      );

  IconData _ratingIcon(String rating) {
    switch (rating) {
      case 'happy':
        return Icons.sentiment_very_satisfied;
      case 'sad':
        return Icons.sentiment_very_dissatisfied;
      default:
        return Icons.sentiment_neutral;
    }
  }
}
