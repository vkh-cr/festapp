import 'package:easy_localization/easy_localization.dart';
import 'feature_constants.dart';

class FeatureMetadata {
  // Store the raw translation keys without immediately invoking .tr()
  static const Map<String, Map<String, String>> _rawMetadata = {
    FeatureConstants.ticket: {
      'title': 'Ticket',
      'description': 'After payment, a ticket is sent to the user. The ticket can have a custom background and text color.',
    },
    FeatureConstants.form: {
      'title': 'Form',
      'description': 'Allows creating a form to reserve one or more seats at an event.',
    },
    FeatureConstants.companions: {
      'title': 'Companions',
      'description': 'Allows adding companions (partner, child, or friend without a phone) and signing them up for workshops.',
    },
    FeatureConstants.songbook: {
      'title': 'Songbook',
      'description': 'Displays a songbook and allows adding custom songs.',
    },
    FeatureConstants.game: {
      'title': 'Game',
      'description': 'Allows defining teams, stations, and playing a game where team members enter a code to complete a station.',
    },
    FeatureConstants.userGroups: {
      'title': 'Groups',
      'description': 'Allows creating groups and scheduling meetings for them.',
    },
    FeatureConstants.mySchedule: {
      'title': 'My schedule',
      'description': 'Enables adding program items to favorites.',
    },
    FeatureConstants.services: {
      'title': 'Services',
      'description': 'Allows assigning accommodations to a user and displaying them on the user profile.',
    },
    FeatureConstants.entryCode: {
      'title': 'Entry Code',
      'description': 'It is posible to verify users via QR code on workshops or other limited events.',
    },
    FeatureConstants.blueprint: {
      'title': 'Blueprint',
      'description': 'This feature lets you create a seating blueprint with a limited number of seats for the reservation form. For example, you can design a seating chart for a bus or a layout of a hall with assigned seats.',
    },
    FeatureConstants.map: {
      'title': 'Map',
      'description': 'Various settings for map inside the app.',
    },
    FeatureConstants.timetable: {
      'title': 'Timetable',
      'description': 'Allows displaying the program in a table.',
    },
  };

  /// Returns the translated title for the given feature code.
  static String getTitle(String code) {
    return _rawMetadata[code]?['title']?.tr() ?? '';
  }

  /// Returns the translated description for the given feature code.
  static String getDescription(String code) {
    return _rawMetadata[code]?['description']?.tr() ?? '';
  }
}
