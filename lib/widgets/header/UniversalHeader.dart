import 'package:flutter/material.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/LogoWidget.dart';
import 'package:fstapp/widgets/header/UserHeaderWidget.dart';

const double kToolbarHeight = 80.0;
const double kHorizontalPadding = 16.0;

class UniversalHeader extends StatelessWidget {
  final ScrollController scrollController;

  const UniversalHeader({super.key, required this.scrollController});

  @override
  Widget build(BuildContext context) {
    return SliverAppBar(
      automaticallyImplyLeading: false,
      floating: true,
      snap: true,
      pinned: false,
      toolbarHeight: kToolbarHeight,
      backgroundColor: ThemeConfig.whiteColorDarker(context),
      elevation: 2,
      centerTitle: false,
      titleSpacing: kHorizontalPadding,
      title: Padding(
        padding: const EdgeInsets.symmetric(horizontal: kHorizontalPadding),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            InkWell(
              onTap: () {
                scrollController.animateTo(
                  0.0,
                  duration: const Duration(milliseconds: 300),
                  curve: Curves.easeOut,
                );
              },
              child: LogoWidget(height: 60),
            ),
            const UserHeaderWidget(), // New widget on the right side
          ],
        ),
      ),
    );
  }
}
