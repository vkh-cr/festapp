import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/timeline/advanced_timeline_day_list.dart';

void main() {
  test('day list reserves space below expandable event content', () {
    expect(
      dayListContentPadding.bottom,
      greaterThan(kBottomNavigationBarHeight),
    );
  });
}
