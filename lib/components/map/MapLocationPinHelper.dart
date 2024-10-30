import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataModels/IconModel.dart';

class MapLocationPinHelper {
  static Widget? type2icon(String? placeType, List<IconModel> source) {
    SvgPicture? fill;

    var iconData = source.firstWhereOrNull((i) => i.link == placeType)?.data;
    if (iconData != null) {
      fill = SvgPicture.string(
        iconData,
        colorFilter: const ColorFilter.mode(Colors.black, BlendMode.srcIn),
      );
      return _locationPin(fill, top: 7.5, left: 14.5, iconTop: 12, iconLeft: 19, iconWidth: 19, iconHeight: 19);
    }

    return null;
  }

  static Stack _locationPin(SvgPicture fill, {required double top, required double left, required double iconTop, required double iconLeft, required double iconWidth, required double iconHeight}) {
    return Stack(
      children: [
        const Icon(Icons.location_pin, size: 58, color: AppConfig.mapPinColor),
        Positioned(
          top: top,
          left: left,
          child: Container(
            width: 29.0,
            height: 29.0,
            decoration: const BoxDecoration(
              color: Colors.white,
              shape: BoxShape.circle,
            ),
          ),
        ),
        Positioned(
          top: iconTop,
          left: iconLeft,
          width: iconWidth,
          height: iconHeight,
          child: Container(alignment: Alignment.center, child: fill),
        ),
      ],
    );
  }
}
