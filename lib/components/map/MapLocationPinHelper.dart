import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataModels/IconModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/components/map/MapIconService.dart';
import 'package:latlong2/latlong.dart';

class MapLocationPinHelper {
  static Widget type2icon(String? placeType, List<IconModel> source) {
    SvgPicture? fill;
    var iconLink = MapIconHelper.getIconAddress(placeType);
    if (iconLink != null) {
      fill = SvgPicture.asset(
        iconLink,
        colorFilter: const ColorFilter.mode(Colors.black, BlendMode.srcIn),
      );
    }
    if (fill != null) {
      return locationPinOld(fill);
    }
    var iconData = source.firstWhereOrNull((i)=> i.link == placeType)?.data;
    if(iconData!=null) {
      fill = SvgPicture.string(
        iconData,
        colorFilter: const ColorFilter.mode(Colors.black, BlendMode.srcIn),
      );
      return locationPin(fill);
    }
    return const Icon(Icons.location_pin, size: 36, color: AppConfig.mapPinColor);
  }

  static Stack locationPin(SvgPicture fill) {
    return Stack(children: [
      const Icon(Icons.location_pin, size: 58, color: AppConfig.mapPinColor),
      Positioned(
        top: 7.5,
        left: 14.5,
        child: Container(
            width: 29.0,
            height: 29.0,
            decoration: const BoxDecoration(
              color: Colors.white,
              shape: BoxShape.circle,
            )),
      ),
      Positioned(
          top: 12,
          left: 18,
          width: 21,
          height: 21,
          child: Container(alignment: Alignment.center, child: fill))
    ]);
  }

  static Stack locationPinOld(SvgPicture fill) {
    return Stack(children: [
      const Icon(Icons.location_pin, size: 58, color: AppConfig.mapPinColor),
      Positioned(
        top: 7.5,
        left: 14.5,
        child: Container(
            width: 29.0,
            height: 29.0,
            decoration: const BoxDecoration(
              color: Colors.white,
              shape: BoxShape.circle,
            )),
      ),
      Positioned(
          top: 12,
          left: 19,
          width: 19,
          height: 19,
          child: Container(alignment: Alignment.center, child: fill))
    ]);
  }

}

class MapPlaceModel {
  final int id;
  final String title;
  final String? description;
  final String? type;
  final LatLng latLng;
  final int? icon;

  MapPlaceModel({
    required this.id,
    required this.title,
    this.description,
    this.type,
    required this.latLng,
    this.icon,
  });

  factory MapPlaceModel.fromPlaceModel(PlaceModel place) {
    return MapPlaceModel(
      id: place.id!,
      title: place.title!,
      description: place.description,
      type: place.type,
      latLng: LatLng(place.getLat(), place.getLng()),
      icon: place.icon,
    );
  }
}
