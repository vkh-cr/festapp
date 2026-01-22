import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:easy_localization/easy_localization.dart';
import 'toast_helper.dart';

// ... (AppError class remains the same) ...
class AppError {
  final dynamic code;
  final String message;
  final String rawJson;

  AppError({
    required this.code,
    required this.message,
    required this.rawJson,
  });
}

class ExceptionHandler {
  /// **NEW:** Executes an async function and handles any exceptions that occur.
  ///
  /// This avoids repetitive try...catch blocks in your UI code.
  /// - [futureFunction]: The asynchronous database call to execute.
  /// - [rethrowError]: If true, the exception will be re-thrown after the dialog is closed.
  /// This is useful for data grids that need to know the operation failed.
  /// - Returns the result of [futureFunction] on success, or `null` on a handled error.
  static Future<T?> guard<T>(
    BuildContext context, {
    required Future<T> Function() futureFunction,
    String? defaultErrorMessage,
    bool rethrowError = false,
  }) async {
    try {
      return await futureFunction();
    } catch (e) {
      // Use the existing handle method to show the UI
      await handle(
        context,
        error: e,
        defaultMessage: defaultErrorMessage,
        showAsDialog: true, // Defaults to showing a dialog for guarded actions
      );

      if (rethrowError) {
        rethrow;
      }
      return null;
    }
  }

  /// Returns `true` on success and `false` on a handled failure.
  static Future<bool> guardVoid(
    BuildContext context, {
    required Future<void> Function() futureFunction,
    String? defaultErrorMessage,
    bool rethrowError = false,
  }) async {
    try {
      await futureFunction();
      return true;
    } catch (e) {
      await handle(
        context,
        error: e,
        defaultMessage: defaultErrorMessage,
        showAsDialog: true,
      );
      if (rethrowError) {
        rethrow;
      }
      return false;
    }
  }

  /// Handles an error by showing a user-friendly UI.
  /// Returns a Future that completes when the UI (e.g., dialog) is dismissed.
  static Future<void> handle(
    BuildContext context, {
    required Object error,
    String? defaultMessage,
    bool showAsDialog = false,
  }) async {
    final AppError? appError = _parsePostgrestException(error);

    if (appError != null) {
      if (showAsDialog) {
        await _showErrorDialog(context, appError);
      } else {
        ToastHelper.Show(context, appError.message,
            severity: ToastSeverity.NotOk);
      }
    } else {
      final message = defaultMessage ?? "An unexpected error occurred.".tr();
      ToastHelper.Show(context, message, severity: ToastSeverity.NotOk);
      debugPrint('Unhandled Exception: ${error.toString()}');
    }
  }

  // Helper methods _parsePostgrestException and _showErrorDialog remain the same...
  static AppError? _parsePostgrestException(Object exception) {
    if (exception is! PostgrestException) return null;
    final jsonRegex = RegExp(r'\{.*\}');
    final match = jsonRegex.firstMatch(exception.message);
    if (match == null) return null;
    final jsonString = match.group(0)!;
    try {
      final jsonMap = jsonDecode(jsonString) as Map<String, dynamic>;
      return AppError(
        code: jsonMap['code'] ?? 'N/A',
        message: jsonMap['message'] as String? ??
            'An unknown database error occurred.'.tr(),
        rawJson: jsonString,
      );
    } catch (e) {
      return null;
    }
  }

  static Future<void> _showErrorDialog(
      BuildContext context, AppError appError) {
    return showDialog(
      context: context,
      builder: (ctx) {
        final theme = Theme.of(ctx);
        return AlertDialog(
          title: Text('Error (Code: ${appError.code})'.tr()),
          content: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  appError.message,
                  style: const TextStyle(fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 24),
                Text('Details:'.tr()),
                const SizedBox(height: 8),
                Container(
                  padding: const EdgeInsets.all(8),
                  color: theme.colorScheme.surfaceContainerHighest,
                  child: SelectableText(
                    const JsonEncoder.withIndent('  ')
                        .convert(jsonDecode(appError.rawJson)),
                    style:
                        const TextStyle(fontFamily: 'monospace', fontSize: 12),
                  ),
                ),
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(ctx).pop(),
              child: Text('OK'.tr()),
            ),
          ],
        );
      },
    );
  }
}
