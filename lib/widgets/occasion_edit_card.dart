import 'dart:ui';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/theme_config.dart';

class OccasionEditCard extends StatelessWidget {
  final OccasionModel occasion;
  final VoidCallback onView;
  final VoidCallback onSettings;
  final VoidCallback onApp;
  final VoidCallback onReservation;
  final VoidCallback onCreateCopy;
  final bool isPresent;

  const OccasionEditCard({
    super.key,
    required this.occasion,
    required this.onView,
    required this.onSettings,
    required this.onApp,
    required this.onReservation,
    required this.onCreateCopy,
    this.isPresent = false,
  });

  @override
  Widget build(BuildContext context) {
    // For present events, add a thicker border.
    final borderSide = isPresent
        ? BorderSide(color: Theme.of(context).primaryColor, width: 4)
        : BorderSide.none;

    return LayoutBuilder(
      builder: (context, constraints) {
        return ConstrainedBox(
          constraints: const BoxConstraints(minWidth: 300, minHeight: 150),
          child: RepaintBoundary( // ← Cache entire card, including image & overlay
            child: Material(
              clipBehavior: Clip.antiAlias,
              elevation: 2,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(15.0),
                side: borderSide,
              ),
              child: Stack(
                children: [
                  // Background image.
                  if (occasion.data?[Tb.occasions.data_image] != null)
                    Positioned.fill(
                      child: Image.network(
                        occasion.data?[Tb.occasions.data_image]!,
                        fit: BoxFit.cover,
                      ),
                    ),

                  // Dark overlay area (with blur) behind text and buttons – only over the bottom area.
                  Positioned(
                    left: 0,
                    right: 0,
                    bottom: 0,
                    child: RepaintBoundary( // ← Cache just this blurred footer
                      child: ClipRRect(
                        borderRadius: const BorderRadius.only(
                          bottomLeft: Radius.circular(15.0),
                          bottomRight: Radius.circular(15.0),
                        ),
                        child: BackdropFilter(
                          filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
                          child: Container(
                            color: Colors.black.withOpacity(0.4),
                            padding: const EdgeInsets.all(8.0),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                GestureDetector(
                                  onTap: onView,
                                  child: SelectableText(
                                    occasion.title ?? '',
                                    style: const TextStyle(
                                      color: Colors.white,
                                      fontSize: 18,
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ),
                                const SizedBox(height: 4),
                                SelectableText(
                                  TimeHelper.getMinimalisticDateRange(
                                      context,
                                      occasion.startTime!,
                                      occasion.endTime!),
                                  style: const TextStyle(
                                    color: Colors.white,
                                    fontSize: 14,
                                  ),
                                ),
                                const SizedBox(height: 8),
                                Row(
                                  children: [
                                    if (occasion.form != null)
                                      TextButton.icon(
                                        onPressed: onReservation,
                                        icon: const Icon(Icons.login,
                                            color: Colors.white),
                                        label: Text(
                                          'Reservation'.tr(),
                                          style: const TextStyle(
                                              color: Colors.white),
                                        ),
                                      ),
                                    TextButton.icon(
                                      onPressed: onApp,
                                      icon: const Icon(
                                          Icons.admin_panel_settings,
                                          color: Colors.white),
                                      label: Text(
                                        'App'.tr(),
                                        style: const TextStyle(
                                            color: Colors.white),
                                      ),
                                    ),
                                    TextButton.icon(
                                      onPressed: onSettings,
                                      icon: const Icon(Icons.settings,
                                          color: Colors.white),
                                      label: Text(
                                        'Settings'.tr(),
                                        style: const TextStyle(
                                            color: Colors.white),
                                      ),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),

                  // Public badge
                  if (occasion.isOpen)
                    Positioned(
                      top: 8,
                      left: 8,
                      child: Container(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                          color: ThemeConfig.greenColor(),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: const Text(
                          'Public',
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                          ),
                        ).tr(),
                      ),
                    ),

                  // Three vertical dots menu
                  Positioned(
                    top: 8,
                    right: 8,
                    child: Container(
                      decoration: BoxDecoration(
                        color: Colors.black.withOpacity(0.2),
                        shape: BoxShape.circle,
                      ),
                      child: PopupMenuButton<String>(
                        icon: const Icon(Icons.more_vert,
                            color: Colors.white),
                        onSelected: (value) {
                          if (value == "create_copy") {
                            onCreateCopy();
                          }
                        },
                        itemBuilder: (BuildContext context) => [
                          PopupMenuItem(
                            value: "create_copy",
                            child: Text("Create Copy".tr()),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
