import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';

class FeaturesStrings {
  // Schedule Feature Form
  static String get labelScheduleType => 'FeatureSchedule.labelScheduleType'.tr();
  static String get optionBasic => 'FeatureSchedule.optionBasic'.tr();
  static String get optionAdvanced => 'FeatureSchedule.optionAdvanced'.tr();

  // New strings for Enable Children
  static String get labelEnableChildren => 'FeatureSchedule.labelEnableChildren'.tr();
  static String get subtitleEnableChildren => 'FeatureSchedule.subtitleEnableChildren'.tr();

  static String get labelBreakDefinition => 'FeatureSchedule.labelBreakDefinition'.tr();
  static String get optionTime => 'FeatureSchedule.optionTime'.tr();
  static String get optionPlace => 'FeatureSchedule.optionPlace'.tr();

  static String get titleTimeBasedBreaks => 'FeatureSchedule.titleTimeBasedBreaks'.tr();
  static String get labelAfternoonTime => 'FeatureSchedule.labelAfternoonTime'.tr();
  static String get labelEveningTime => 'FeatureSchedule.labelEveningTime'.tr();

  // Event Types Management for Schedule Feature
  static String get titleEventTypes => 'FeatureSchedule.titleEventTypes'.tr();
  static String get buttonAddEventType => 'FeatureSchedule.buttonAddEventType'.tr();
  static String get eventTypeDefaultTitle => 'FeatureSchedule.eventTypeDefaultTitle'.tr();
  static String get labelEventTypeCode => 'FeatureSchedule.labelEventTypeCode'.tr();
  static String get labelEventTypeTitle => 'FeatureSchedule.labelEventTypeTitle'.tr();
  static String get labelColorSource => 'FeatureSchedule.labelColorSource'.tr();
  static String get optionCustomColor => 'FeatureSchedule.optionCustomColor'.tr();
  static String get labelCustomColorHex => 'FeatureSchedule.labelCustomColorHex'.tr();
  static String get tooltipRemoveEventType => 'FeatureSchedule.tooltipRemoveEventType'.tr();
  static String get emptyEventTypes => 'FeatureSchedule.emptyEventTypes'.tr();
  static String get noType => 'FeatureSchedule.noType'.tr();

  // Import Feature
  static String get labelImportFromCsv => 'FeatureImport.labelImportFromCsv'.tr();
  static String get labelImportFromTickets => 'FeatureImport.labelImportFromTickets'.tr();
  static String get importFromTicketsSuccess => 'FeatureImport.importFromTicketsSuccess'.tr();
  static String get importFromTicketsConfirm => 'FeatureImport.importFromTicketsConfirm'.tr();
  static String get importFromTicketsError => 'FeatureImport.importFromTicketsError'.tr();
  static String get importFromTicketsTitle => 'FeatureImport.importFromTicketsTitle'.tr();
  static String get importFromTicketsCompleted => 'FeatureImport.importFromTicketsCompleted'.tr();
  static String get importResultsTitle => 'FeatureImport.importResultsTitle'.tr();
  static String get chooseSourcePrompt => 'FeatureImport.chooseSourcePrompt'.tr();
  static String get createdUsers => 'FeatureImport.createdUsers'.tr();
  static String get updatedUsers => 'FeatureImport.updatedUsers'.tr();
  static String get none => 'FeatureImport.none'.tr();
  static String get ok => 'FeatureImport.ok'.tr();

  // Orders Tab
  static String get cancel => 'FeatureOrders.cancel'.tr();
  static String get synchronizePayments => 'FeatureOrders.synchronizePayments'.tr();
  static String get processing => 'FeatureOrders.processing'.tr();
  static String get changeStateToPaid => 'FeatureOrders.changeStateToPaid'.tr();
  static String get changeStateToPaidConfirmation => 'FeatureOrders.changeStateToPaidConfirmation'.tr();
  static String get tickets => 'FeatureOrders.tickets'.tr();
  static String get ticket => 'FeatureOrders.ticket'.tr();
  static String get applications => 'FeatureOrders.applications'.tr();
  static String get application => 'FeatureOrders.application'.tr();

  /// Returns "Tickets" or "Applications" based on whether the ticket feature is enabled.
  static String get itemsPlural {
    if (FeatureService.isFeatureEnabled(FeatureConstants.ticket)) {
      return tickets;
    }
    return applications;
  }

  /// Returns "Ticket" or "Application" based on whether the ticket feature is enabled.
  static String get itemSingular {
    if (FeatureService.isFeatureEnabled(FeatureConstants.ticket)) {
      return ticket;
    }
    return application;
  }

  /// Returns "Send tickets" or "Send confirmations" based on whether the ticket feature is enabled.
  static String get sendActionText {
    if (FeatureService.isFeatureEnabled(FeatureConstants.ticket)) {
      return 'FeatureOrders.sendTickets'.tr();
    }
    return 'FeatureOrders.sendConfirmations'.tr();
  }

  /// Returns confirmation text for cancelling orders, with or without mentioning tickets.
  static String get cancelOrdersConfirmationText {
    if (FeatureService.isFeatureEnabled(FeatureConstants.ticket)) {
      return 'FeatureOrders.cancelOrdersAndTicketsConfirmation'.tr();
    }
    return 'FeatureOrders.cancelOrdersConfirmation'.tr();
  }

  static String get itemSymbol {
    if (FeatureService.isFeatureEnabled(FeatureConstants.ticket)) {
      return 'FeatureOrders.ticketSymbol'.tr();
    }
    return 'FeatureOrders.applicationSymbol'.tr();
  }

  /// Returns confirmation text for sending tickets/confirmations.
  static String get sendActionConfirmationText {
    if (FeatureService.isFeatureEnabled(FeatureConstants.ticket)) {
      return 'FeatureOrders.sendTicketsToOrdersConfirmation'.tr();
    }
    return 'FeatureOrders.sendConfirmationsToOrdersConfirmation'.tr();
  }

  // Tickets Tab
  static String get scanActionText {
    if (FeatureService.isFeatureEnabled(FeatureConstants.ticket)) {
      return 'FeatureOrders.scanTickets'.tr();
    }
    return 'FeatureOrders.scanEntries'.tr();
  }

  static String get cancelItemsConfirmationText {
    if (FeatureService.isFeatureEnabled(FeatureConstants.ticket)) {
      return 'FeatureOrders.cancelTicketsConfirmation'.tr();
    }
    return 'FeatureOrders.cancelItemsConfirmation'.tr();
  }

  static String get stornoCompletedText {
    return 'FeatureOrders.stornoCompletedItem'.tr();
  }

  static String get stornoFailed => 'FeatureOrders.stornoFailed'.tr();
}