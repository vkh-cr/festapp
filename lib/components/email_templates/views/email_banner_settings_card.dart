
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/email_templates/db_email_templates.dart';
import 'package:fstapp/components/email_templates/email_templates_strings.dart';
import 'package:fstapp/components/images/db_images.dart';
import 'package:fstapp/components/images/image_area.dart';
import 'package:fstapp/components/images/image_compression_helper.dart';
import 'package:fstapp/components/occasion/occasion_model.dart';
import 'package:fstapp/components/unit/unit_model.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/theme_config.dart';

class EmailBannerSettingsCard extends StatefulWidget {
  final EmailTemplatesResponse response;

  const EmailBannerSettingsCard({
    super.key,
    required this.response,
  });

  @override
  State<EmailBannerSettingsCard> createState() => _EmailBannerSettingsCardState();
}

class _EmailBannerSettingsCardState extends State<EmailBannerSettingsCard> {
  String? _effectiveUrl;
  String? _overrideUrl;
  String? _inheritedUrl;
  bool _isLoading = false;
  bool _isExpanded = false;

  bool get _isOccasion => widget.response.occasion != null;
  OccasionModel? get _occasion => widget.response.occasion;
  UnitModel get _unit => widget.response.unit;
  UnitModel get _organization => widget.response.organization;

  @override
  void initState() {
    super.initState();
    _loadUrls();
  }

  @override
  void didUpdateWidget(covariant EmailBannerSettingsCard oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.response != oldWidget.response) {
      _loadUrls();
    }
  }

  void _loadUrls() {
    if (_isOccasion) {
      _overrideUrl = _occasion!.data?['email_banner'];
      _inheritedUrl = _unit.data?['email_banner'] ?? _organization.data?['email_banner'];
    } else {
      _overrideUrl = _unit.data?['email_banner'];
      _inheritedUrl = _organization.data?['email_banner'];
    }
    _effectiveUrl = _overrideUrl ?? _inheritedUrl;
  }

  Future<void> _updateBanner(String? url) async {
    setState(() => _isLoading = true);
    try {
      await DbEmailTemplates.updateEntityEmailBanner(
        occasionId: _isOccasion ? _occasion!.id : null,
        unitId: !_isOccasion ? _unit.id : null,
        bannerUrl: url,
      );

      // Update local model
      if (_isOccasion) {
        if (_occasion!.data == null) _occasion!.data = {};
        if (url != null) {
          _occasion!.data!['email_banner'] = url;
        } else {
          _occasion!.data!.remove('email_banner');
        }
      } else {
        if (_unit.data == null) _unit.data = {};
        if (url != null) {
          _unit.data!['email_banner'] = url;
        } else {
          _unit.data!.remove('email_banner');
        }
      }

      setState(() {
        _overrideUrl = url;
        _effectiveUrl = _overrideUrl ?? _inheritedUrl;
      });

      if (mounted) ToastHelper.Show(context, CommonStrings.saved);
    } catch (e) {
      if (mounted) ToastHelper.Show(context, EmailTemplatesStrings.settingsUploadFailed, severity: ToastSeverity.NotOk);
    } finally {
      if (mounted) setState(() => _isLoading = false);
    }
  }

  Future<void> _handleReset() async {
    await _updateBanner(null);
  }

  @override
  Widget build(BuildContext context) {
    String statusText;
    bool isOverride = _overrideUrl != null;
    
    if (isOverride) {
      statusText = _isOccasion ? EmailTemplatesStrings.statusOccasionOverride : EmailTemplatesStrings.statusUnit;
    } else if (_inheritedUrl != null) {
      statusText = EmailTemplatesStrings.statusUnitInherited;
    } else {
      statusText = EmailTemplatesStrings.statusNoBanner;
    }

    // Professional Look:
    // Darker borders/text.
    // Clean Header.
    // Status text in a "pill" or subtitle relative to context.

    return Card(
      elevation: 0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(6),
        side: BorderSide(color: ThemeConfig.grey300(context)),
      ),
      color: Theme.of(context).cardColor,
      margin: EdgeInsets.zero,
      child: Theme(
        data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
        child: ExpansionTile(
          initiallyExpanded: false,
          tilePadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          childrenPadding: const EdgeInsets.all(16),
          leading: _effectiveUrl != null 
            ? ClipRRect(
                borderRadius: BorderRadius.circular(4),
                child: Image.network(
                  _effectiveUrl!,
                  width: 90,
                  height: 30,
                  fit: BoxFit.cover,
                  errorBuilder: (context, error, stackTrace) => Icon(Icons.image, color: ThemeConfig.grey600(context)),
                ),
              )
            : Icon(Icons.image, color: ThemeConfig.grey600(context)),
          title: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                EmailTemplatesStrings.settingsBanner,
                style: TextStyle(
                  fontWeight: FontWeight.bold, 
                  fontSize: 15,
                  // Use body text color from theme
                  color: Theme.of(context).textTheme.bodyMedium?.color
                ),
              ),
              const SizedBox(height: 4),
              // Status Pill
              Container(
                 padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                decoration: BoxDecoration(
                  color: ThemeConfig.grey200(context),
                  borderRadius: BorderRadius.circular(4),
                ),
                child: Text(
                  statusText,
                  style: TextStyle(
                    fontSize: 11, 
                    fontWeight: FontWeight.w600,
                    color: ThemeConfig.grey800(context)
                  ),
                ),
              ),
            ],
          ),
          children: [
             // Content Area
             Column(
               crossAxisAlignment: CrossAxisAlignment.start,
               children: [
                 SelectableText(
                   _isOccasion 
                     ? EmailTemplatesStrings.settingsBannerDescriptionOccasion 
                     : EmailTemplatesStrings.settingsBannerDescriptionOrganization,
                    style: TextStyle(fontSize: 13, color: ThemeConfig.grey600(context)),
                 ),
                 const SizedBox(height: 12),
                 if (_overrideUrl != null)
                   AspectRatio(
                     aspectRatio: 3,
                     child: _isLoading 
                      ? const Center(child: CircularProgressIndicator())
                      : ImageArea(
                        imageUrl: _overrideUrl,
                        hint: EmailTemplatesStrings.settingsBannerHint,
                        onFileSelected: (file) async {
                          Uint8List imageData = await file.readAsBytes();
                          try {
                            var compressedImageData = await ImageCompressionHelper.compress(imageData, 900);
                            final publicUrl = await DbImages.uploadImage(
                              compressedImageData,
                              _isOccasion ? _occasion!.id : null,
                              !_isOccasion ? _unit.id : null
                            );
                            await _updateBanner(publicUrl);
                            return publicUrl;
                          } catch (e) {
                             if(mounted) ToastHelper.Show(context, EmailTemplatesStrings.settingsUploadFailed, severity: ToastSeverity.NotOk);
                            return null;
                          }
                        },
                        onRemove: () {
                           if (_overrideUrl != null) {
                              _handleReset();
                           }
                        },
                      ),
                   )
                 else
                   ConstrainedBox(
                     constraints: const BoxConstraints(maxHeight: 250),
                     child: _isLoading 
                      ? const SizedBox(height: 100, child: Center(child: CircularProgressIndicator()))
                      : ImageArea(
                        imageUrl: _overrideUrl,
                        hint: EmailTemplatesStrings.settingsBannerHint,
                        onFileSelected: (file) async {
                          Uint8List imageData = await file.readAsBytes();
                          try {
                            var compressedImageData = await ImageCompressionHelper.compress(imageData, 900);
                            final publicUrl = await DbImages.uploadImage(
                              compressedImageData,
                              _isOccasion ? _occasion!.id : null,
                              !_isOccasion ? _unit.id : null
                            );
                            await _updateBanner(publicUrl);
                            return publicUrl;
                          } catch (e) {
                             if(mounted) ToastHelper.Show(context, EmailTemplatesStrings.settingsUploadFailed, severity: ToastSeverity.NotOk);
                            return null;
                          }
                        },
                        onRemove: () {
                           if (_overrideUrl != null) {
                              _handleReset();
                           }
                        },
                      ),
                   ),
               ],
             )
          ],
        ),
      ),
    );
  }
}