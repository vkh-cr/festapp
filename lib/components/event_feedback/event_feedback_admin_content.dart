import 'dart:convert';
import 'dart:typed_data';

import 'package:csv/csv.dart';
import 'package:file_saver/file_saver.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/event_feedback/db_event_feedback.dart';
import 'package:fstapp/components/event_feedback/event_feedback_strings.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_header.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/exception_handler.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:trina_grid/trina_grid.dart';

/// Program → Feedback admin subtab: occasion-wide data grid of all event
/// feedback with CSV export, refresh, and an admin-only delete action. Data
/// columns and widths mirror the deployed build exactly (event · from · to ·
/// rating · comment · respondent · anonymous · submitted_at · updated_at).
class EventFeedbackAdminContent extends StatefulWidget {
  const EventFeedbackAdminContent({
    super.key,
    this.loadOverride,
    this.deleteOverride,
  });

  final Future<List<Map<String, dynamic>>> Function(int occasionId)?
      loadOverride;
  final Future<void> Function(int occasionId, int feedbackId)? deleteOverride;

  @override
  State<EventFeedbackAdminContent> createState() =>
      _EventFeedbackAdminContentState();
}

class _EventFeedbackAdminContentState extends State<EventFeedbackAdminContent> {
  List<Map<String, dynamic>> _rows = [];
  bool _loading = true;
  bool _exporting = false;

  bool get _canDelete => RightsService.isAdmin();

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    setState(() => _loading = true);
    try {
      final occ = RightsService.currentOccasionId();
      final rows = widget.loadOverride != null
          ? await widget.loadOverride!(occ ?? 0)
          : occ == null
              ? <Map<String, dynamic>>[]
              : await DbEventFeedback.exportForEdit(occ);
      if (!mounted) return;
      setState(() {
        _rows = rows;
        _loading = false;
      });
    } catch (_) {
      if (mounted) setState(() => _loading = false);
    }
  }

  Future<void> _deleteFeedback(int feedbackId) async {
    final rowIndex =
        _rows.indexWhere((item) => item['feedback_id'] == feedbackId);
    final occasionId = RightsService.currentOccasionId();
    if (rowIndex < 0 || occasionId == null) return;
    final row = _rows[rowIndex];

    final confirmed = await DialogHelper.showConfirmationDialog(
      context,
      CommonStrings.confirmRemoval,
      '${EventFeedbackStrings.removeFeedback}: '
      '${row['event_title'] ?? ''}',
      confirmButtonMessage: CommonStrings.delete,
    );
    if (!confirmed || !mounted) return;

    final deleted = await ExceptionHandler.guardVoid(
      context,
      futureFunction: () =>
          widget.deleteOverride?.call(
            occasionId,
            feedbackId,
          ) ??
          DbEventFeedback.deleteForEdit(occasionId, feedbackId),
    );
    if (!deleted || !mounted) return;

    setState(() => _rows.removeWhere(
          (item) => item['feedback_id'] == feedbackId,
        ));
    ToastHelper.Show(context, EventFeedbackStrings.feedbackRemoved);
  }

  /// Ordered display cells for one feedback row (matches the deployed columns).
  List<String> _cells(Map<String, dynamic> r) {
    final anon = r['is_anonymous'] == true;
    return [
      (r['event_title'] ?? '').toString(),
      (r['event_start_time'] ?? '').toString(),
      (r['event_end_time'] ?? '').toString(),
      EventFeedbackStrings.ratingLabel((r['rating'] ?? '').toString()),
      (r['note'] ?? '').toString(),
      anon ? EventFeedbackStrings.anonymous : (r['user_name'] ?? '').toString(),
      anon ? EventFeedbackStrings.yes : EventFeedbackStrings.no,
      (r['created_at'] ?? '').toString(),
      (r['updated_at'] ?? '').toString(),
    ];
  }

  Future<void> _exportCsv() async {
    if (_rows.isEmpty) return;
    setState(() => _exporting = true);
    try {
      final header = [
        EventFeedbackStrings.event,
        EventFeedbackStrings.from,
        EventFeedbackStrings.to,
        EventFeedbackStrings.rating,
        EventFeedbackStrings.comment,
        EventFeedbackStrings.respondent,
        EventFeedbackStrings.anonymous,
        EventFeedbackStrings.submittedAt,
        EventFeedbackStrings.updatedAt,
      ];
      final csvRows = <List<dynamic>>[header, ..._rows.map(_cells)];
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
    final theme = Theme.of(context);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 8),
          child: Wrap(
            spacing: 12,
            runSpacing: 8,
            crossAxisAlignment: WrapCrossAlignment.center,
            children: [
              FilledButton.tonalIcon(
                onPressed: (_rows.isEmpty || _exporting) ? null : _exportCsv,
                icon: const Icon(Icons.download, size: 18),
                label: Text(EventFeedbackStrings.exportFeedbackCsv),
              ),
              OutlinedButton.icon(
                onPressed: _loading ? null : _load,
                icon: const Icon(Icons.refresh, size: 18),
                label: Text(EventFeedbackStrings.refresh),
              ),
              Text(
                '${EventFeedbackStrings.featureTitle}: ${_rows.length}',
                style: theme.textTheme.labelLarge,
              ),
            ],
          ),
        ),
        const Divider(height: 1),
        Expanded(
          child: _loading
              ? const Center(child: CircularProgressIndicator())
              : _rows.isEmpty
                  ? Center(child: Text(EventFeedbackStrings.noFeedbackYet))
                  : _grid(context),
        ),
      ],
    );
  }

  TrinaColumn _col(String field, String title, double width) => TrinaColumn(
        title: title,
        field: field,
        type: TrinaColumnType.text(),
        readOnly: true,
        enableEditingMode: false,
        width: width,
      );

  Widget _grid(BuildContext context) {
    final columns = <TrinaColumn>[
      if (_canDelete)
        TrinaColumn(
          title: '',
          field: 'delete',
          type: TrinaColumnType.number(),
          readOnly: true,
          enableFilterMenuItem: false,
          enableSorting: false,
          enableDropToResize: false,
          enableColumnDrag: false,
          enableContextMenu: false,
          cellPadding: EdgeInsets.zero,
          width: 50,
          renderer: (rendererContext) => IconButton(
            tooltip: CommonStrings.delete,
            onPressed: () => _deleteFeedback(
              (rendererContext.cell.value as num).toInt(),
            ),
            icon: const Icon(Icons.delete_forever),
          ),
        ),
      _col('event', EventFeedbackStrings.event, 240),
      _col('from', EventFeedbackStrings.from, 130),
      _col('to', EventFeedbackStrings.to, 130),
      _col('rating', EventFeedbackStrings.rating, 110),
      _col('comment', EventFeedbackStrings.comment, 340),
      _col('respondent', EventFeedbackStrings.respondent, 180),
      _col('anonymous', EventFeedbackStrings.anonymous, 110),
      _col('submitted_at', EventFeedbackStrings.submittedAt, 145),
      _col('updated_at', EventFeedbackStrings.updatedAt, 145),
    ];
    final fields = [
      'event',
      'from',
      'to',
      'rating',
      'comment',
      'respondent',
      'anonymous',
      'submitted_at',
      'updated_at',
    ];
    final rows = _rows.map((r) {
      final c = _cells(r);
      return TrinaRow(cells: {
        if (_canDelete) 'delete': TrinaCell(value: r['feedback_id']),
        for (var i = 0; i < fields.length; i++)
          fields[i]: TrinaCell(value: c[i]),
      });
    }).toList();

    // The grid's cell colors are transparent (see defaultTrinaGridConfiguration)
    // so it MUST sit on a white surface — otherwise the black cell text renders
    // on the dark scaffold and the whole grid looks black.
    return Container(
      decoration: BoxDecoration(color: ThemeConfig.whiteColor(context)),
      child: TrinaGrid(
        columns: columns,
        rows: rows,
        mode: TrinaGridMode.readOnly,
        onLoaded: (e) => e.stateManager.setShowColumnFilter(true),
        configuration: SingleDataGridHeader.defaultTrinaGridConfiguration(
          context,
          Localizations.localeOf(context).languageCode,
        ),
      ),
    );
  }
}
