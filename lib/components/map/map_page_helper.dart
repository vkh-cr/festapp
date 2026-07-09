import 'dart:math';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart' as fm;
import 'package:collection/collection.dart';
import 'package:fstapp/components/map/place_model.dart';
import 'package:fstapp/services/responsive_service.dart';
import 'package:latlong2/latlong.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/components/map/path_group_model.dart';
import 'package:fstapp/components/map/icon_model.dart';
import 'package:fstapp/components/icons/place_type_model.dart';
import 'package:fstapp/components/icons/icons_strings.dart';
import 'package:fstapp/theme_config.dart';

class MapPageHelper {
  static double _toRadians(double deg) => deg * (pi / 180.0);
  static double _toDegrees(double rad) => rad * (180.0 / pi);

  static double _calculateBearing(LatLng a, LatLng b) {
    final lat1 = _toRadians(a.latitude);
    final lat2 = _toRadians(b.latitude);
    final dLon = _toRadians(b.longitude - a.longitude);
    final y = sin(dLon) * cos(lat2);
    final x = cos(lat1) * sin(lat2) - sin(lat1) * cos(lat2) * cos(dLon);
    return (_toDegrees(atan2(y, x)) + 360) % 360;
  }

  static LatLng _offsetPoint(LatLng p, double angleDeg, double dist) {
    final ang = _toRadians(angleDeg);
    final dLat = dist * cos(ang);
    final dLon = dist * sin(ang) / cos(_toRadians(p.latitude));
    return LatLng(p.latitude + dLat, p.longitude + dLon);
  }

  /// Build all polylines per group and return a map: groupId -> List<Polyline>.
  static Future<Map<int, List<fm.Polyline>>> loadGroupPolylines(
    List<PlaceModel> placesList,
    List<PathGroupsModel> groups,
  ) async {
    const bool drawFilledTriangles = true;
    const int trianglesPerSegment = 3;
    const int hatchLinesPerTriangle = 4;

    final Map<int, List<fm.Polyline>> result = {};

    for (var g in groups) {
      if (g.isHidden == true || g.pathData == null) continue;
      final groupId = g.id;
      if (groupId == null) continue;

      final pathColor = g.color != null
          ? Color(int.parse(g.color!.replaceFirst('#', '0x')))
          : Colors.blue;
      final lines = <fm.Polyline>[];

      for (var segment in g.pathData!) {
        // map segment (List<PathNode>) -> List<LatLng>: place refs are looked
        // up in placesList, free points use their inline coordinates.
        final pts = List<LatLng>.from(
          segment
              .map((node) => node.resolve(placesList))
              .whereType<LatLng>(),
        );
        if (pts.length < 2) continue;

        // main line
        lines.add(fm.Polyline(points: pts, color: pathColor, strokeWidth: 3));

        if (!drawFilledTriangles) continue;

        // directional triangles + hatch
        for (var i = 0; i < pts.length - 1; i++) {
          final start = pts[i], end = pts[i + 1];
          final bearing = _calculateBearing(start, end);
          const size = 0.0005;

          for (var t = 1; t <= trianglesPerSegment; t++) {
            final frac = t / (trianglesPerSegment + 1);
            final mid = LatLng(
              start.latitude + (end.latitude - start.latitude) * frac,
              start.longitude + (end.longitude - start.longitude) * frac,
            );
            final leftAng = (bearing + 150) % 360;
            final rightAng = (bearing - 150) % 360;
            final p1 = _offsetPoint(mid, leftAng, size);
            final p2 = _offsetPoint(mid, rightAng, size);

            // triangle border
            lines.add(fm.Polyline(
              points: [p1, mid, p2, p1],
              color: pathColor,
              strokeWidth: 3,
            ));

            // hatch fill
            for (var h = 1; h <= hatchLinesPerTriangle; h++) {
              final t2 = h / (hatchLinesPerTriangle + 1);
              final a = LatLng(
                p1.latitude + (mid.latitude - p1.latitude) * t2,
                p1.longitude + (mid.longitude - p1.longitude) * t2,
              );
              final b = LatLng(
                p2.latitude + (mid.latitude - p2.latitude) * t2,
                p2.longitude + (mid.longitude - p2.longitude) * t2,
              );
              lines.add(fm.Polyline(
                points: [a, b],
                color: pathColor,
                strokeWidth: 1,
              ));
            }
          }
        }
      }

      result[groupId] = lines;
    }

    return result;
  }

  /// Builds a responsive, rounded background "icon area" that is either
  /// a horizontal strip (mobile) or vertical column (tablet/desktop).
  static Widget buildGroupIconArea(
    BuildContext context,
    List<PathGroupsModel> groups,
    int? selectedGroupId,
    void Function(int) onTap,
    List<IconModel> icons, {
    ScrollController? scrollController,
  }) {
    if (groups.isEmpty) return const SizedBox.shrink();

    final bool isMobile = ResponsiveService.isMobile(context);
    final double itemWidth = 60; // same as in _buildIconColumn
    final double itemSpacing = 12; // horizontal margin*2

    // build children with index so we can scroll to i
    final children = List<Widget>.generate(groups.length, (i) {
      final g = groups[i];
      return _buildIconColumn(
        context,
        g,
        selectedGroupId,
        (id) {
          if (g.id == null) return;
          onTap(g.id!);

          // on mobile, animate the scroll so tapped icon is centered
          if (isMobile && scrollController != null) {
            final screenW = MediaQuery.of(context).size.width;
            final target =
                i * (itemWidth + itemSpacing) - (screenW - itemWidth) / 2;
            scrollController.animateTo(
              target.clamp(0.0, scrollController.position.maxScrollExtent),
              duration: const Duration(milliseconds: 300),
              curve: Curves.easeInOut,
            );
          }
        },
        icons,
      );
    });

    Widget strip = isMobile
        ? SingleChildScrollView(
            controller: scrollController,
            scrollDirection: Axis.horizontal,
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start, // icons stay at top
              children: children,
            ),
          )
        : SingleChildScrollView(
            controller: scrollController,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start, // align left
              children: children,
            ),
          );

    return Positioned(
      top: 8,
      left: isMobile ? 8 : null,
      right: 8,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
        decoration: BoxDecoration(
          color: Colors.white70,
          borderRadius: BorderRadius.circular(12),
        ),
        child: strip,
      ),
    );
  }

  static Widget _buildIconColumn(
    BuildContext context,
    PathGroupsModel g,
    int? selectedGroupId,
    void Function(int) onTap,
    List<IconModel> icons,
  ) {
    final pathColor = g.color != null
        ? Color(int.parse(g.color!.replaceFirst('#', '0x')))
        : Colors.blue;
    final bool isSelected = g.id == selectedGroupId;
    final iconSvg = icons.firstWhereOrNull((i) => i.id == g.icon)?.data;

    Widget badge = (iconSvg != null)
        ? SvgPicture.string(iconSvg, width: 24, height: 24)
        : Icon(Icons.route_outlined, size: 24, color: pathColor);

    return GestureDetector(
      onTap: () {
        if (g.id != null) onTap(g.id!);
      },
      child: Container(
        width: 60, // enough to fit icon + two lines
        margin: const EdgeInsets.symmetric(horizontal: 6, vertical: 4),
        child: Column(
          children: [
            Container(
              width: 44,
              height: 44,
              decoration: BoxDecoration(
                color: Colors.white,
                shape: BoxShape.circle,
                border: Border.all(
                  color: isSelected ? pathColor : Colors.grey.shade400,
                  width: 3,
                ),
              ),
              child: Center(child: badge),
            ),
            const SizedBox(height: 4),
            Text(
              g.title ?? '',
              textAlign: TextAlign.center,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(
                color: Colors.black,
                fontSize: 11,
                fontWeight: isSelected
                    ? FontWeight.bold
                    : FontWeight.normal, // bold when selected
              ),
            ),
          ],
        ),
      ),
    );
  }

  /// Bottom-center dark pill with one chip per visible place type plus a
  /// trailing "Other" chip. Single-select: the caller filters the map markers
  /// to the tapped type (or the [otherCode] bucket) and re-fits the camera.
  /// Returns an empty box when there are no place types to show.
  static Widget buildPlaceTypeFilterBar(
    BuildContext context,
    List<PlaceTypeModel> placeTypes,
    String? selectedCode,
    String otherCode,
    void Function(String? code) onTap,
    List<IconModel> icons,
  ) {
    if (placeTypes.isEmpty) return const SizedBox.shrink();

    final chips = <Widget>[
      for (final type in placeTypes)
        _buildPlaceTypeChip(
          code: type.code,
          iconWidget: _placeTypeIcon(type.icon, icons),
          isSelected: selectedCode == type.code,
          onTap: onTap,
          semanticLabel: type.title ?? '',
        ),
      _buildPlaceTypeChip(
        code: otherCode,
        iconWidget: const Icon(Icons.more_horiz,
            size: _chipIconSize, color: Colors.white),
        isSelected: selectedCode == otherCode,
        onTap: onTap,
        semanticLabel: IconsStrings.placeTypesOther,
      ),
    ];

    return Positioned(
      left: 0,
      right: 0,
      bottom: 16,
      child: Center(
        child: Material(
          color: Colors.transparent,
          child: Container(
            constraints: BoxConstraints(
              maxWidth: MediaQuery.of(context).size.width - 24,
            ),
            padding: const EdgeInsets.all(6),
            decoration: BoxDecoration(
              color: ThemeConfig.appBarColor(),
              borderRadius: BorderRadius.circular(12),
              boxShadow: const [
                BoxShadow(
                  color: Colors.black26,
                  blurRadius: 6,
                  offset: Offset(0, 2),
                ),
              ],
            ),
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: chips,
              ),
            ),
          ),
        ),
      ),
    );
  }

  static Widget _buildPlaceTypeChip({
    required String? code,
    required Widget iconWidget,
    required bool isSelected,
    required void Function(String? code) onTap,
    String? semanticLabel,
  }) {
    return Tooltip(
      message: semanticLabel ?? '',
      child: GestureDetector(
        onTap: () => onTap(code),
        child: Container(
          width: 34,
          height: 34,
          margin: const EdgeInsets.symmetric(horizontal: 2),
          decoration: BoxDecoration(
            color: isSelected
                ? Colors.white.withValues(alpha: 0.22)
                : Colors.transparent,
            borderRadius: BorderRadius.circular(8),
          ),
          child: Center(child: iconWidget),
        ),
      ),
    );
  }

  /// Hard cap on a chip icon's rendered width AND height (dp). Icons vary wildly
  /// in viewBox aspect ratio (wide "bed", tall "church", square "badge"); a
  /// fixed box + BoxFit.contain keeps every one within the same footprint so
  /// none reads as oversized.
  static const double _chipIconSize = 18;

  /// White monochrome rendering of a place type's icon (from the loaded icon
  /// set), capped to [_chipIconSize] in both dimensions, falling back to a
  /// generic pin when no icon is configured.
  static Widget _placeTypeIcon(int? iconId, List<IconModel> icons) {
    final svg = icons.firstWhereOrNull((i) => i.id == iconId)?.data;
    if (svg == null) {
      return const Icon(Icons.place,
          size: _chipIconSize, color: Colors.white);
    }
    return SizedBox(
      width: _chipIconSize,
      height: _chipIconSize,
      child: SvgPicture.string(
        svg,
        fit: BoxFit.contain,
        colorFilter: const ColorFilter.mode(Colors.white, BlendMode.srcIn),
      ),
    );
  }

  /// Shows the selected path‑group’s title in a pill overlay with matching border.
  static Widget buildSelectedGroupTitle(
    BuildContext context,
    PathGroupsModel? selectedGroup,
  ) {
    if (ResponsiveService.isMobile(context) ||
        selectedGroup == null ||
        selectedGroup.title == null) {
      return const SizedBox.shrink();
    }
    final pathColor = selectedGroup.color != null
        ? Color(int.parse(selectedGroup.color!.replaceFirst('#', '0x')))
        : Colors.blue;

    return Positioned(
      top: 24,
      left: 0,
      right: 0,
      child: Center(
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: pathColor, width: 3),
          ),
          constraints: const BoxConstraints(maxWidth: 200),
          child: Text(
            selectedGroup.title!,
            textAlign: TextAlign.center,
            style: const TextStyle(
                fontSize: 17, fontWeight: FontWeight.bold, color: Colors.black),
          ),
        ),
      ),
    );
  }
}
