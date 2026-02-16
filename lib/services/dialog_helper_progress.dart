import 'dart:async';

import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/components/_shared/common_strings.dart';

class ProgressDialogs {
  static Future<bool> showProgressDialogAsync(
    BuildContext context,
    String title,
    int total, {
    List<Future<void> Function()>? futures,
    Duration? delay,
    bool isBasic = false,
  }) async {
    final completer = Completer<bool>();
    final progressNotifier = ValueNotifier<int>(0);
    final isCancelled = ValueNotifier<bool>(false);
    final statusMessage = ValueNotifier<String>("");
    final isStornoActive = ValueNotifier<bool>(!isBasic);
    final isOkActive = ValueNotifier<bool>(false);
    final hasError = ValueNotifier<bool>(false);

    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext context) {
        return ValueListenableBuilder<int>(
          valueListenable: progressNotifier,
          builder: (context, progress, _) {
            return AlertDialog(
              title: Text(title),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text("${"Progress".tr()}: $progress/$total"),
                  SizedBox(height: 20),
                  LinearProgressIndicator(
                      value: total > 0 ? progress / total : 0),
                  SizedBox(height: 20),
                  ValueListenableBuilder<String>(
                    valueListenable: statusMessage,
                    builder: (context, message, _) {
                      return Text(
                        message,
                        style: TextStyle(
                          color: hasError.value
                              ? ThemeConfig.redColor(context)
                              : ThemeConfig.blackColor(context),
                        ),
                        textAlign: TextAlign.center,
                      );
                    },
                  ),
                  ValueListenableBuilder<bool>(
                    valueListenable: hasError,
                    builder: (context, errorOccurred, _) {
                      if (!isBasic || errorOccurred) {
                        return Column(
                          children: [
                            SizedBox(height: 20),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                ValueListenableBuilder<bool>(
                                  valueListenable: isStornoActive,
                                  builder: (context, isActive, _) {
                                    return SizedBox(
                                      width: 100,
                                      child: ElevatedButton(
                                        onPressed: isActive
                                            ? () {
                                                isCancelled.value = true;
                                                isStornoActive.value = false;
                                                isOkActive.value = true;
                                                statusMessage.value =
                                                    "The processing has been cancelled."
                                                        .tr();
                                              }
                                            : null,
                                        child: Text(CommonStrings.storno),
                                      ),
                                    );
                                  },
                                ),
                                SizedBox(width: 20),
                                ValueListenableBuilder<bool>(
                                  valueListenable: isOkActive,
                                  builder: (context, isActive, _) {
                                    return SizedBox(
                                      width: 100,
                                      child: ElevatedButton(
                                        onPressed: isActive
                                            ? () {
                                                Navigator.of(context).pop();
                                                completer.complete(false);
                                              }
                                            : null,
                                        child: Text(CommonStrings.ok),
                                      ),
                                    );
                                  },
                                ),
                              ],
                            ),
                          ],
                        );
                      } else {
                        return SizedBox.shrink();
                      }
                    },
                  ),
                ],
              ),
            );
          },
        );
      },
    );

    if (futures != null && futures.isNotEmpty) {
      for (var future in futures) {
        if (isCancelled.value) break;
        try {
          statusMessage.value = "Processing...".tr();
          await future.call();
          progressNotifier.value++;
          if (delay != null) {
            await Future.delayed(delay);
          }
        } catch (e) {
          statusMessage.value = "$e";
          isCancelled.value = true;
          isStornoActive.value = false;
          isOkActive.value = true;
          hasError.value = true;
          break;
        }
      }
    }

    isOkActive.value = true;
    isStornoActive.value = false;
    if (hasError.value) {
      statusMessage.value = "The processing has finished with error.".tr();
    } else if (isCancelled.value) {
      statusMessage.value = "The processing has been cancelled.".tr();
    } else {
      statusMessage.value = "The processing has completed successfully.".tr();
      if (isBasic && !hasError.value) {
        Navigator.of(context).pop();
        completer.complete(true);
      }
    }

    if (!completer.isCompleted) {
      completer.complete(!hasError.value && !isCancelled.value);
    }

    return completer.future;
  }

  static Future<T?> showFutureProgressDialog<T>({
    required BuildContext context,
    required String title,
    required Future<T> Function() futureCallback,
  }) async {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(title),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const LinearProgressIndicator(),
              const SizedBox(height: 20),
              Text("Processing...".tr()),
            ],
          ),
        );
      },
    );

    try {
      final result = await futureCallback();

      if (context.mounted) {
        Navigator.of(context).pop();
      }
      return result;
    } catch (e) {
      if (context.mounted) {
        Navigator.of(context).pop();
        ToastHelper.Show(context, "Error: $e");
      }
      return null;
    }
  }
}
