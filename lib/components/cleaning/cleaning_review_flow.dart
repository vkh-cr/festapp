import 'package:flutter/material.dart';
import 'package:fstapp/components/cleaning/cleaning_strings.dart';
import 'package:fstapp/components/cleaning/db_cleaning.dart';
import 'package:fstapp/components/cleaning/widgets/cleaning_review_dialog.dart';
import 'package:fstapp/services/toast_helper.dart';

/// Shared "rate a toilet" flow (feature C) used by the Cleaning page tiles and
/// the map popup: shows the smiley dialog and submits the rating via the RPC.
class CleaningReviewFlow {
  /// Returns true when a rating was submitted, so callers can refresh.
  static Future<bool> rate(
    BuildContext context, {
    required int placeId,
    required String placeTitle,
  }) async {
    final result = await showDialog<CleaningReviewOutcome>(
      context: context,
      builder: (_) => CleaningReviewDialog(
        placeId: placeId,
        placeTitle: placeTitle,
      ),
    );
    if (result == null || !context.mounted) return false;

    try {
      await DbCleaning.submitReview(
        placeId: placeId,
        rating: result.rating,
        note: result.note,
      );
      if (context.mounted) {
        ToastHelper.Show(context, CleaningStrings.reviewSuccess);
      }
      return true;
    } on CleaningException catch (e) {
      if (context.mounted) {
        ToastHelper.Show(
          context,
          e.code == 403
              ? CleaningStrings.blockedMessage
              : CleaningStrings.reportError,
          severity: ToastSeverity.NotOk,
        );
      }
      return false;
    } catch (_) {
      if (context.mounted) {
        ToastHelper.Show(context, CleaningStrings.reportError,
            severity: ToastSeverity.NotOk);
      }
      return false;
    }
  }
}
