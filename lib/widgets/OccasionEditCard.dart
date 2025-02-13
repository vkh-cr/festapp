import 'dart:ui';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:intl/intl.dart';

class OccasionEditCard extends StatelessWidget {
  final OccasionModel occasion;
  final VoidCallback onView;
  final VoidCallback onEdit;
  final VoidCallback onAdmin;
  final VoidCallback onReservation;
  final VoidCallback onCreateCopy;
  final bool isPresent;

  const OccasionEditCard({
    Key? key,
    required this.occasion,
    required this.onView,
    required this.onEdit,
    required this.onAdmin,
    required this.onReservation,
    required this.onCreateCopy,
    this.isPresent = false,
  }) : super(key: key);

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
                      occasion.data?[Tb.occasions.data_image],
                      fit: BoxFit.cover,
                    ),
                  ),
                // Dark overlay area (with blur) behind text and buttons – only over the bottom area.
                Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
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
                              '${DateFormat.yMMMd(Localizations.localeOf(context).languageCode).format(occasion.startTime!)} - '
                                  '${DateFormat.yMMMd(Localizations.localeOf(context).languageCode).format(occasion.endTime!)}',
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
                                    icon: const Icon(Icons.login, color: Colors.white),
                                    label: Text(
                                      'Reservation'.tr(),
                                      style: const TextStyle(color: Colors.white),
                                    ),
                                  ),
                                TextButton.icon(
                                  onPressed: onAdmin,
                                  icon: const Icon(Icons.admin_panel_settings, color: Colors.white),
                                  label: Text(
                                    'App'.tr(),
                                    style: const TextStyle(color: Colors.white),
                                  ),
                                ),
                                TextButton.icon(
                                  onPressed: onEdit,
                                  icon: const Icon(Icons.settings, color: Colors.white),
                                  label: Text(
                                    'Settings'.tr(),
                                    style: const TextStyle(color: Colors.white),
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
                // "Open" badge at top left.
                if (occasion.isOpen)
                  Positioned(
                    top: 8,
                    left: 8,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(
                        color: ThemeConfig.greenColor(),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: const Text(
                        'Open',
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ),
                // Three vertical dots at top right.
                Positioned(
                  top: 8,
                  right: 8,
                  child: PopupMenuButton<String>(
                    icon: const Icon(Icons.more_vert, color: Colors.white),
                    onSelected: (value) async {
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
              ],
            ),
          ),
        );
      },
    );
  }
}
