import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/theme_config.dart';

class LogoWidget extends StatelessWidget {
  /// Optional callback when the logo is tapped.
  final VoidCallback? onTap;

  /// Optional parameters to control the logo size.
  final double? height;
  final double? width;

  /// Force dark mode assets even if the current theme is light.
  final bool? forceDark;

  /// Opt-in alternate asset for schedule/program-style pages.
  /// Default keeps the normal logo; brand branches configure an alternate
  /// asset through `PROGRAM_LOGO_ASSET` when needed.
  final bool programVariant;

  const LogoWidget({
    super.key,
    this.onTap,
    this.height,
    this.width,
    this.forceDark,
    this.programVariant = false,
  });

  @override
  Widget build(BuildContext context) {
    final String logoAsset = programVariant
        ? AppConfig.programLogoAsset
        : (ThemeConfig.isDarkMode(context) || forceDark == true
              ? AppConfig.darkLogoAsset
              : AppConfig.logoAsset);

    // If the asset file is an SVG, use SvgPicture; otherwise, use Image.
    final Widget logo = logoAsset.toLowerCase().endsWith('.svg')
        ? SvgPicture.asset(
            logoAsset,
            height: height,
            width: width,
            semanticsLabel: 'Festapp logo',
          )
        : Image.asset(logoAsset, height: height, width: width);

    return InkWell(onTap: onTap, child: logo);
  }
}
