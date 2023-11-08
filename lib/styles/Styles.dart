import 'package:flutter/material.dart';
import 'package:avapp/config.dart';

MaterialColor primarySwatch = const MaterialColor(
  config.primaryColor,
  <int, Color>{
    50: Color(0xFFE1F0F4),
    100: Color(0xFFB4D9E4),
    200: Color(0xFF84BFD3),
    300: Color(0xFF55A5C2),
    400: Color(0xFF3994B6),
    500: Color(0xFF1D838A),
    600: Color(0xFF176E6F),
    700: Color(0xFF125954),
    800: Color(0xFF0C4239),
    900: Color(0xFF062E1E),
  },
);

TextStyle normalTextStyle = const TextStyle(fontSize: 18);
double appMaxWidth = 820;


ButtonStyle mainPageButtonStyle = OutlinedButton.styleFrom(
    padding: const EdgeInsets.all(8),
    minimumSize: const Size(70, 50),

    maximumSize: const Size(80, 60),
    tapTargetSize: MaterialTapTargetSize.padded,
    backgroundColor: config.color2,
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)));

class MainPageButton extends StatelessWidget {
  final VoidCallback onPressed;
  final Widget child;
  final EdgeInsets margin;
  final Color backgroundColor;

  const MainPageButton({
    Key? key,
    required this.onPressed,
    required this.child,
    this.backgroundColor = config.color2,
    this.margin = const EdgeInsets.symmetric(horizontal: 8.0),
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: margin,
      child: ElevatedButton(
        onPressed: onPressed,
        style: mainPageButtonStyle.copyWith(
          backgroundColor: MaterialStateProperty.all(backgroundColor),
        ),
        child: child,
      ),
    );
  }
}

class CircularButton extends MainPageButton {
  final Size size;

  const CircularButton({
    Key? key,
    required VoidCallback onPressed,
    required Widget child,
    backgroundColor = config.color2,
    this.size = const Size(50, 50),
  }) : super(
          key: key,
          onPressed: onPressed,
          child: child,
          backgroundColor: backgroundColor,
        );

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: margin,
      child: ElevatedButton(
        onPressed: onPressed,
        style: mainPageButtonStyle.copyWith(
          backgroundColor: MaterialStateProperty.all(backgroundColor),
          shape: MaterialStateProperty.all(const CircleBorder()),
          minimumSize: MaterialStateProperty.all(size),
        ),
        child: child,
      ),
    );
  }
}
