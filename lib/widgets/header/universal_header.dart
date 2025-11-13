import 'package:flutter/material.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/logo_widget.dart';
import 'package:fstapp/widgets/header/user_header_widget.dart';

const double kToolbarHeight = 80.0;
const double kHorizontalPadding = 16.0;

class UniversalHeader extends StatelessWidget {
  final ScrollController scrollController;
  final Future<void> Function()? onSignIn;
  final VoidCallback? onAdminPressed;

  const UniversalHeader(
      {super.key,
        required this.scrollController,
        this.onSignIn,
        this.onAdminPressed});

  @override
  Widget build(BuildContext context) {
    return SliverAppBar(
      automaticallyImplyLeading: false,
      floating: true,
      snap: true,
      pinned: false,
      toolbarHeight: kToolbarHeight,
      backgroundColor: ThemeConfig.logoBackgroundColor(context),
      elevation: 2,
      centerTitle: false,
      titleSpacing: kHorizontalPadding,
      title: Padding(
        padding: const EdgeInsets.symmetric(horizontal: kHorizontalPadding),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            InkWell(
              onTap: () async {
                await RouterService.navigateHome(context);
                scrollController.animateTo(
                  0.0,
                  duration: const Duration(milliseconds: 300),
                  curve: Curves.easeOut,
                );
              },
              child: LogoWidget(height: 60),
            ),
            UserHeaderWidget(
              onSignIn: onSignIn,
              onAdminPressed: onAdminPressed,
            ), // Pass callback here
          ],
        ),
      ),
    );
  }
}