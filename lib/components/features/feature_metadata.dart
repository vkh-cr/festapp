import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/components/inventory/views/inventory_strings.dart';
import 'feature_constants.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'schedule_feature.dart';

class FeatureMetadata {
  static Map<String, Map<String, String>> _rawMetadata() => {
    FeatureConstants.ticket: {
      'title': 'Ticket'.tr(),
      'description': 'After payment, a ticket is sent to the user. The ticket can have a custom background and text color.'.tr(),
    },
    FeatureConstants.form: {
      'title': 'Form'.tr(),
      'description': 'Allows creating a form to reserve one or more seats at an event.'.tr(),
    },
    FeatureConstants.companions: {
      'title': 'Companions'.tr(),
      'description': 'Allows adding companions (partner, child, or friend without a phone) and signing them up for workshops.'.tr(),
    },
    FeatureConstants.songbook: {
      'title': 'Songbook'.tr(),
      'description': 'Displays a songbook and allows adding custom songs.'.tr(),
    },
    FeatureConstants.game: {
      'title': 'Game'.tr(),
      'description': 'Allows defining teams, stations, and playing a game where team members enter a code to complete a station.'.tr(),
    },
    FeatureConstants.userGroups: {
      'title': 'Groups'.tr(),
      'description': 'Allows creating groups and scheduling meetings for them.'.tr(),
    },
    FeatureConstants.mySchedule: {
      'title': 'My schedule'.tr(),
      'description': 'Enables adding program items to favorites.'.tr(),
    },
    FeatureConstants.services: {
      'title': InventoryStrings.featureTitle,
      'description': InventoryStrings.featureDescription,
    },
    FeatureConstants.entryCode: {
      'title': 'Entry Code'.tr(),
      'description': 'It is possible to verify users via QR code on workshops or other limited events.'.tr(),
    },
    FeatureConstants.blueprint: {
      'title': 'Blueprint'.tr(),
      'description': 'This feature lets you create a seating blueprint with a limited number of seats for the reservation form. For example, you can design a seating chart for a bus or a layout of a hall with assigned seats.'.tr(),
    },
    FeatureConstants.map: {
      'title': 'Map'.tr(),
      'description': 'Various settings for map inside the app.'.tr(),
    },
    FeatureConstants.timetable: {
      'title': 'Timetable'.tr(),
      'description': 'Allows displaying the program in a table.'.tr(),
    },
    FeatureConstants.workshops: {
      'title': 'Workshops'.tr(),
      'description': 'Indicates the start time from when people can sign in for workshops.'.tr(),
    },
    ScheduleFeature.metaSchedule: {
      'title': 'Schedule'.tr(),
      'description': 'Allows customizing event schedule display settings.'.tr(),
    },
    FeatureConstants.volunteers: {
      'title': 'Volunteers'.tr(),
      'description': 'Allows management of activities for volunteers.'.tr(),
    },
    FeatureConstants.import: {
      'title': CommonStrings.import,
      'description': FeaturesStrings.importFeatureDescription,
    },
  };

  /// Returns the translated title for the given feature code.
  static String getTitle(String code) {
    return _rawMetadata()[code]?['title'] ?? '';
  }

  /// Returns the translated description for the given feature code.
  static String getDescription(String code) {
    return _rawMetadata()[code]?['description'] ?? '';
  }
}