import 'package:flutter/material.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:easy_localization/easy_localization.dart';
import '../widgets/HtmlView.dart';

class SongDialog extends StatefulWidget {
  final String title;
  final String description;
  final bool isDarkMode;

  const SongDialog({
    super.key,
    required this.title,
    required this.description,
    required this.isDarkMode,
  });

  @override
  _SongDialogState createState() => _SongDialogState();
}

class _SongDialogState extends State<SongDialog> {
  static double fontSize = 18;
  static const double fontSizeStep = 2;
  static const double maxFontSize = 50;
  static const double minFontSize = 8;
  double buttonVisibleOpacity(BuildContext context) => ThemeConfig.isDarkMode(context) ? 1 : 0.9;
  static const double buttonHiddenOpacity = 0.2;
  static const double scrollThreshold = 50.0;

  final ScrollController _scrollController = ScrollController();
  double _buttonOpacity = 1;

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_updateButtonOpacity);
  }

  @override
  void dispose() {
    _scrollController.removeListener(_updateButtonOpacity);
    _scrollController.dispose();
    super.dispose();
  }

  void _updateButtonOpacity() {
    setState(() {
      _buttonOpacity = _scrollController.position.pixels <= scrollThreshold
          ? buttonVisibleOpacity(context)
          : buttonHiddenOpacity;
    });
  }

  @override
  Widget build(BuildContext context) {
    final themeData = widget.isDarkMode
        ? ThemeConfig.darkTheme(ThemeConfig.baseTheme())
        : ThemeConfig.baseTheme();

    return Theme(
      data: themeData,
      child: Builder(
        builder: (BuildContext context) {
          return Dialog(
            insetPadding: EdgeInsets.zero, // Remove default padding
            child: Container(
              width: MediaQuery.of(context).size.width,
              height: MediaQuery.of(context).size.height,
              color: ThemeConfig.backgroundColor(context), // Set background color of the dialog
              child: Stack(
                alignment: Alignment.topCenter,
                children: [
                  SingleChildScrollView(
                    controller: _scrollController,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        SizedBox(height: 32),
                        Container(
                          padding: const EdgeInsets.all(12),
                          alignment: Alignment.topCenter,
                          child: HtmlView(
                            html:
                            "<div style='text-align: center;'><h3>${widget.title}</h3>${widget.description}</div>",
                            isSelectable: true,
                            fontSize: fontSize,
                          ),
                        ),
                        SizedBox(height: 102),
                      ],
                    ),
                  ),
                  Positioned(
                    bottom: 20,
                    child: AnimatedOpacity(
                      opacity: _buttonOpacity,
                      duration: const Duration(milliseconds: 300),
                      child: Row(
                        children: [
                          // "Smaller -" Button
                          ElevatedButton(
                            onPressed: () {
                              setState(() {
                                fontSize = (fontSize - fontSizeStep).clamp(minFontSize, maxFontSize);
                              });
                            },
                            style: ElevatedButton.styleFrom(
                              padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 20),
                              backgroundColor: ThemeConfig.songButtonColor(context).withOpacity(buttonVisibleOpacity(context)),
                              shadowColor: Colors.transparent,
                              elevation: 0,
                            ),
                            child: Row(
                              children: [
                                Icon(Icons.remove, size: 28, color: ThemeConfig.whiteTextColor(context)),
                                const SizedBox(width: 8),
                                Text("Smaller".tr(), style: TextStyle(color: ThemeConfig.whiteTextColor(context), fontSize: 18)),
                              ],
                            ),
                          ),
                          const SizedBox(width: 20),
                          // "Larger +" Button
                          ElevatedButton(
                            onPressed: () {
                              setState(() {
                                fontSize = (fontSize + fontSizeStep).clamp(minFontSize, maxFontSize);
                              });
                            },
                            style: ElevatedButton.styleFrom(
                              padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 20),
                              backgroundColor: ThemeConfig.songButtonColor(context).withOpacity(buttonVisibleOpacity(context)),
                              shadowColor: Colors.transparent,
                              elevation: 0,
                            ),
                            child: Row(
                              children: [
                                Text("Larger".tr(), style: TextStyle(color: ThemeConfig.whiteTextColor(context), fontSize: 18)),
                                const SizedBox(width: 8),
                                Icon(Icons.add, size: 28, color: ThemeConfig.whiteTextColor(context)),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Positioned(
                    top: 20,
                    left: 20,
                    child: AnimatedOpacity(
                      opacity: _buttonOpacity,
                      duration: const Duration(milliseconds: 300),
                      child: ElevatedButton(
                        onPressed: () => Navigator.pop(context),
                        style: ElevatedButton.styleFrom(
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                          padding: const EdgeInsets.all(16),
                          backgroundColor: ThemeConfig.songButtonColor(context).withOpacity(buttonVisibleOpacity(context)),
                          shadowColor: Colors.transparent,
                          elevation: 0,
                        ),
                        child: Icon(Icons.adaptive.arrow_back, color: ThemeConfig.whiteTextColor(context)),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
