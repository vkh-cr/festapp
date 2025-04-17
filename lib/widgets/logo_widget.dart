import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/theme_config.dart';

class LogoWidget extends StatelessWidget {
  /// Optional callback when the logo is tapped.
  final VoidCallback? onTap;

  /// Optional parameters to control the logo size.
  final double? height;
  final double? width;

  /// Force dark mode assets even if the current theme is light.
  final bool? forceDark;

  const LogoWidget({
    Key? key,
    this.onTap,
    this.height,
    this.width,
    this.forceDark,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Determine the asset path based on the current theme or forceDark flag.
    // Change these asset paths to match your actual file names.
    final String logoAsset = ThemeConfig.isDarkMode(context) || forceDark == true
        ? 'assets/icons/fstapplogo.dark.svg'
        : 'assets/icons/fstapplogo.svg';

    // If the asset file is an SVG, use SvgPicture; otherwise, use Image.
    final Widget logo = logoAsset.toLowerCase().endsWith('.svg')
        ? SvgPicture.asset(
      logoAsset,
      height: height,
      width: width,
      semanticsLabel: 'Festapp logo',
    )
        : Image.asset(
      logoAsset,
      height: height,
      width: width,
    );

    return InkWell(
      onTap: onTap,
      child: logo,
    );
  }
}