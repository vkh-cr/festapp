import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/themeConfig.dart';

class LogoWidget extends StatelessWidget {
  /// Optional callback when the logo is tapped.
  final VoidCallback? onTap;

  /// Optional parameters to control the logo size.
  final double? height;
  final double? width;
  final bool? forceDark;

  const LogoWidget({
    Key? key,
    this.onTap,
    this.height,
    this.width,
    this.forceDark
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // You can adjust the asset based on the theme, if needed.
    final logoAsset = ThemeConfig.isDarkMode(context) || forceDark == true
        ? 'assets/icons/fstapplogo.dark.svg'
        : 'assets/icons/fstapplogo.svg';
    return InkWell(
      onTap: onTap,
      child: SvgPicture.asset(
        logoAsset,
        height: height,
        width: width,
        semanticsLabel: 'Festapp logo',
      ),
    );
  }
}
