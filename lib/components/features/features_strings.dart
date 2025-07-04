import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';

class FeaturesStrings {

// Form Settings Feature
  static String get formSettingsTitle => 'FeatureFormSettings.title'.tr();
  static String get formNotFound => 'FeatureFormSettings.formNotFound'.tr();
  static String get labelFormTitle => 'FeatureFormSettings.labelFormTitle'.tr();
  static String get labelFormLink => 'FeatureFormSettings.labelFormLink'.tr();
  static String get validationLinkRequired => 'FeatureFormSettings.validationLinkRequired'.tr();
  static String get validationLinkInvalidChars => 'FeatureFormSettings.validationLinkInvalidChars'.tr();
  static String get validationLinkInUse => 'FeatureFormSettings.validationLinkInUse'.tr();
  static String get labelDeadlineDays => 'FeatureFormSettings.labelDeadlineDays'.tr();
  static String get helperDeadlineDays => 'FeatureFormSettings.helperDeadlineDays'.tr();
  static String get labelCardDesign => 'FeatureFormSettings.labelCardDesign'.tr();
  static String get subtitleCardDesign => 'FeatureFormSettings.subtitleCardDesign'.tr();
  static String get errorFixBeforeSave => 'FeatureFormSettings.errorFixBeforeSave'.tr();
  static String get labelUseExternalForm => 'FeatureFormSettings.labelUseExternalForm'.tr();
  static String get labelReservationLink => 'FeatureFormSettings.labelReservationLink'.tr();
  static String get helperReservationLink => 'FeatureFormSettings.helperReservationLink'.tr();
  static String get labelPrice => 'FeatureFormSettings.labelPrice'.tr();
  static String get helperPrice => 'FeatureFormSettings.helperPrice'.tr();
  static String get labelAdvancedSettings => 'FeatureFormSettings.labelAdvancedSettings'.tr();
  static String get labelReserveButtonTitle => 'FeatureFormSettings.labelReserveButtonTitle'.tr();
  static String get labelDeadlineDuration => 'FeatureFormSettings.labelDeadlineDuration'.tr();
  static String get helperDeadlineDuration => 'FeatureFormSettings.helperDeadlineDuration'.tr();
  static String get labelReminderEnabled => 'FeatureFormSettings.labelReminderEnabled'.tr();
  static String get helperReminderEnabled => 'FeatureFormSettings.helperReminderEnabled'.tr();
  static String get labelReminderInterval => 'FeatureFormSettings.labelReminderInterval'.tr();
  static String get helperReminderInterval => 'FeatureFormSettings.helperReminderInterval'.tr();
  static String get validationReminderInterval => 'FeatureFormSettings.validationReminderInterval'.tr();
  static String get labelEnableReminders => 'FeatureFormSettings.labelEnableReminders'.tr();
  static String get subtitleEnableReminders => 'FeatureFormSettings.subtitleEnableReminders'.tr();
  static String get subtitleRemindersDisabled => 'FeatureFormSettings.subtitleRemindersDisabled'.tr();


// --- FormsTab (Main Grid View) ---
  static String get formsTitle => 'FormsFeature.formsTitle'.tr(); // "Forms"
  static String get createNewForm => 'FormsFeature.createNewForm'.tr(); // "Create New Form"
  static String get createCopy => 'FormsFeature.createCopy'.tr(); // "Create Copy"
  static String get statusOpen => 'FormsFeature.statusOpen'.tr(); // "Form is Open"
  static String get statusClosed => 'FormsFeature.statusClosed'.tr(); // "Closed"
  static String get responses => 'FormsFeature.responses'.tr(); // "Responses"
  static String get duplicateSuccess => 'FormsFeature.duplicateSuccess'.tr(); // "Form duplicated successfully!"
  static String get deleteFormTitle => 'FormsFeature.deleteFormTitle'.tr();
  static String get deleteFormContent => 'FormsFeature.deleteFormContent'.tr();

// --- FormTab (The TabBar holder) ---
  static String get tabForm => 'FormsFeature.tabForm'.tr(); // "Form"
  static String get tabResponses => 'FormsFeature.tabResponses'.tr(); // "Responses" (can be reused)


// --- FormCreationHelper (Creation Dialog) ---
  static String get defaultFormTitle => 'FormsFeature.defaultFormTitle'.tr(); // "new-form"
  static String get formAvailableAt => 'FormsFeature.formAvailableAt'.tr(); // "This form will be available at"
  static String get formCreatedSuccess => 'FormsFeature.formCreatedSuccess'.tr(); // "Form created successfully!"


// --- FormEditorContent (Form Editor Tab) ---
  static String get formTurnedOff => 'FormsFeature.formTurnedOff'.tr(); // "This form is currently turned off"
  static String get editOffText => 'FormsFeature.editOffText'.tr(); // "Edit off text"
  static String get editContent => 'FormsFeature.editContent'.tr(); // "Edit content"
  static String get dragToReorder => 'FormsFeature.dragToReorder'.tr(); // "Drag to reorder fields"
  static String get addFieldTitle => 'FormsFeature.addFieldTitle'.tr(); // "Add Field"
  static String get personalInfo => 'FormsFeature.personalInfo'.tr(); // "Personal Info"
  static String get noFieldsAvailable => 'FormsFeature.noFieldsAvailable'.tr(); // "No fields available to add."

// --- Form Editor (Ticket Editor) ---
  static String get addProductTypeTitle => 'FormsFeature.addProductTypeTitle'.tr();
  static String get createNewProductTypeOption => 'FormsFeature.createNewProductTypeOption'.tr();
  static String get untitledProductType => 'FormsFeature.untitledProductType'.tr();
  static String get noProductTypesToAdd => 'FormsFeature.noProductTypesToAdd'.tr();
  static String get newProductTypeDefaultName => 'FormsFeature.newProductTypeDefaultName'.tr();


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
  static String get importFeatureDescription => 'FeatureImport.importFeatureDescription'.tr();
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
  static String get deletedUsers => 'FeatureImport.deletedUsers'.tr();
  static String get none => 'FeatureImport.none'.tr();

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

  // --- Products Dialog ---
  static String get productsUpdateSuccess => 'ProductsDialog.productsUpdateSuccess'.tr();
  static String get productsUpdateFailed => 'ProductsDialog.productsUpdateFailed'.tr();
  static String get sendUpdateTitle => 'ProductsDialog.sendUpdateTitle'.tr();
  static String sendUpdateContent(String email) => 'ProductsDialog.sendUpdateContent'.tr(namedArgs: {'email': email});
  static String get sendUpdateItemSummary => 'ProductsDialog.sendUpdateItemSummary'.tr();
  static String get sendUpdateItemStatus => 'ProductsDialog.sendUpdateItemStatus'.tr();
  static String get sendUpdateItemQr => 'ProductsDialog.sendUpdateItemQr'.tr();
  static String get sendUpdateItemRefund => 'ProductsDialog.sendUpdateItemRefund'.tr();
  static String get sendEmailButton => 'ProductsDialog.sendEmailButton'.tr();
  static String get sendEmailFailed => 'ProductsDialog.sendEmailFailed'.tr();
  static String get sendEmailSuccess => 'ProductsDialog.sendEmailSuccess'.tr();
  static String get dialogTitleFallback => 'ProductsDialog.dialogTitleFallback'.tr();
  static String get originalPrice => 'ProductsDialog.originalPrice'.tr();
  static String get currentPrice => 'ProductsDialog.currentPrice'.tr();
  static String get priceChange => 'ProductsDialog.priceChange'.tr();
  static String get noProducts => 'ProductsDialog.noProducts'.tr();
  static String get addBackTooltip => 'ProductsDialog.addBackTooltip'.tr();
  static String get removeTooltip => 'ProductsDialog.removeTooltip'.tr();
  static String get addProductsButton => 'ProductsDialog.addProductsButton'.tr();
  static String get infoTicketSymbol => 'ProductsDialog.infoTicketSymbol'.tr();
  static String get infoEmail => 'ProductsDialog.infoEmail'.tr();
  static String get infoOrderStatus => 'ProductsDialog.infoOrderStatus'.tr();
  static String get infoPayment => 'ProductsDialog.infoPayment'.tr();
  static String get outdatedTitle => 'ProductsDialog.outdatedTitle'.tr();
  static String get outdatedSubtitle => 'ProductsDialog.outdatedSubtitle'.tr();
  static String get sendUpdateButton => 'ProductsDialog.sendUpdateButton'.tr();

  // --- Order Grid Columns ---
  static String get gridId => 'OrderGridColumns.id'.tr();
  static String get gridHide => 'OrderGridColumns.hide'.tr();
  static String get gridTitle => 'OrderGridColumns.title'.tr();
  static String get gridPrice => 'OrderGridColumns.price'.tr();
  static String get gridProductType => 'OrderGridColumns.productType'.tr();
  static String get gridOrder => 'OrderGridColumns.order'.tr();
  static String get gridMax => 'OrderGridColumns.max'.tr();
  static String get gridOrdered => 'OrderGridColumns.ordered'.tr();
  static String get gridPaid => 'OrderGridColumns.paid'.tr();
  static String get gridCurrency => 'OrderGridColumns.currency'.tr();
  static String get gridDescription => 'OrderGridColumns.description'.tr();
  static String get gridState => 'OrderGridColumns.state'.tr();
  static String get gridCreated => 'OrderGridColumns.created'.tr();
  static String get gridProducts => 'OrderGridColumns.products'.tr();
  static String get gridNote => 'OrderGridColumns.note'.tr();
  static String get gridHiddenNote => 'OrderGridColumns.hiddenNote'.tr();
  static String get gridSpot => 'OrderGridColumns.spot'.tr();
  static String get gridOrderSymbol => 'OrderGridColumns.orderSymbol'.tr();
  static String get gridCustomer => 'OrderGridColumns.customer'.tr();
  static String get gridEmail => 'OrderGridColumns.email'.tr();
  static String get gridHistory => 'OrderGridColumns.history'.tr();
  static String get gridTransactions => 'OrderGridColumns.transactions'.tr();
  static String get gridAmount => 'OrderGridColumns.amount'.tr();
  static String get gridReturned => 'OrderGridColumns.returned'.tr();
  static String get gridVariableSymbol => 'OrderGridColumns.variableSymbol'.tr();
  static String get gridDeadline => 'OrderGridColumns.deadline'.tr();
  static String get gridForm => 'OrderGridColumns.form'.tr();
  static String get gridReminderSent => 'OrderGridColumns.reminderSent'.tr();


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
