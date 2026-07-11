import 'package:flutter/material.dart';
import 'package:fstapp/components/cleaning/cleaning_strings.dart';
import 'package:fstapp/components/cleaning/db_cleaning.dart';

/// The chosen quality rating (1 sad / 2 neutral / 3 happy) + optional note,
/// returned by [CleaningReviewDialog].
class CleaningReviewOutcome {
  final int rating;
  final String? note;
  CleaningReviewOutcome({required this.rating, this.note});
}

/// Quality-rating dialog (feature C): three big smiley buttons + an optional
/// note. Preloads the caller's previous rating (so it is preselected) and shows
/// the current average / count. "Send" returns the [CleaningReviewOutcome].
class CleaningReviewDialog extends StatefulWidget {
  final int placeId;
  final String placeTitle;

  const CleaningReviewDialog({
    required this.placeId,
    required this.placeTitle,
    super.key,
  });

  @override
  State<CleaningReviewDialog> createState() => _CleaningReviewDialogState();
}

class _CleaningReviewDialogState extends State<CleaningReviewDialog> {
  int? _selected;
  final _noteController = TextEditingController();
  CleaningReviewInfo? _info;
  bool _loading = true;

  static const _ratings = [3, 2, 1]; // happy first

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final info = await DbCleaning.getReview(widget.placeId);
      if (!mounted) return;
      setState(() {
        _info = info;
        _selected = info.myRating;
        if (info.myNote != null) _noteController.text = info.myNote!;
        _loading = false;
      });
    } catch (_) {
      if (mounted) setState(() => _loading = false);
    }
  }

  @override
  void dispose() {
    _noteController.dispose();
    super.dispose();
  }

  static IconData _icon(int rating) {
    switch (rating) {
      case 3:
        return Icons.sentiment_very_satisfied;
      case 2:
        return Icons.sentiment_neutral;
      default:
        return Icons.sentiment_very_dissatisfied;
    }
  }

  static Color _color(int rating) {
    switch (rating) {
      case 3:
        return const Color(0xFF2E7D32);
      case 2:
        return const Color(0xFFF9A825);
      default:
        return const Color(0xFFC62828);
    }
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(CleaningStrings.rateDialogTitle(widget.placeTitle)),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (_loading)
              const Padding(
                padding: EdgeInsets.all(16),
                child: CircularProgressIndicator(),
              )
            else ...[
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [for (final r in _ratings) _buildSmiley(r)],
              ),
              if ((_info?.ratingCount ?? 0) > 0) ...[
                const SizedBox(height: 10),
                Text(
                  CleaningStrings.ratingSummary(
                      _info!.ratingAvg?.toStringAsFixed(1) ?? '-',
                      _info!.ratingCount),
                  style: TextStyle(
                      fontSize: 12, color: Theme.of(context).hintColor),
                ),
              ],
              const SizedBox(height: 12),
              TextField(
                controller: _noteController,
                maxLines: 2,
                maxLength: 2000,
                decoration: InputDecoration(
                  hintText: CleaningStrings.noteHint,
                  border: const OutlineInputBorder(),
                ),
              ),
            ],
          ],
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: Text(CleaningStrings.cancel),
        ),
        FilledButton(
          onPressed: _selected == null
              ? null
              : () {
                  final note = _noteController.text.trim();
                  Navigator.of(context).pop(CleaningReviewOutcome(
                    rating: _selected!,
                    note: note.isEmpty ? null : note,
                  ));
                },
          child: Text(CleaningStrings.send),
        ),
      ],
    );
  }

  Widget _buildSmiley(int rating) {
    final selected = _selected == rating;
    final color = _color(rating);
    return InkWell(
      borderRadius: BorderRadius.circular(50),
      onTap: () => setState(() => _selected = rating),
      child: Container(
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: selected ? color.withValues(alpha: 0.16) : null,
          border: Border.all(
            color: selected ? color : Colors.transparent,
            width: 2,
          ),
        ),
        child: Icon(_icon(rating),
            size: 44, color: selected ? color : color.withValues(alpha: 0.55)),
      ),
    );
  }
}
