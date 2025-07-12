import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';

class OrdersStrings {

  // --- Orders Tab ---
  static String get cancel => 'FeatureOrders.cancel'.tr();
  static String get synchronizePayments => 'FeatureOrders.synchronizePayments'.tr();
  static String get processing => 'FeatureOrders.processing'.tr();
  static String get changeStateToPaid => 'FeatureOrders.changeStateToPaid'.tr();
  static String get changeStateToPaidConfirmation => 'FeatureOrders.changeStateToPaidConfirmation'.tr();
  static String get tickets => 'FeatureOrders.tickets'.tr();
  static String get ticket => 'FeatureOrders.ticket'.tr();
  static String get applications => 'FeatureOrders.applications'.tr();
  static String get application => 'FeatureOrders.application'.tr();
  static String get stornoFailed => 'FeatureOrders.stornoFailed'.tr();
  static String get ordersTab => 'FeatureOrders.ordersTab'.tr();
  static String get ordersHistoryTab => 'FeatureOrders.ordersHistoryTab'.tr();

  // --- Tickets/Items Tab ---
  static String get stornoCompletedText => 'FeatureOrders.stornoCompletedItem'.tr();

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
  static String get gridChangedAt => 'OrderGridColumns.changedAt'.tr();
  static String get gridChangedBy => 'OrderGridColumns.changedBy'.tr();
  static String get gridChanges => 'OrderGridColumns.changes'.tr();
  static String get gridPaidOrSent => 'OrderGridColumns.paidOrSent'.tr();
  static String get gridCancelled => 'OrderGridColumns.cancelled'.tr();


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
  static String get editPriceTooltip => 'ProductsDialog.editPriceTooltip'.tr();
  static String get editPriceTitle => 'ProductsDialog.editPriceTitle'.tr();
  static String get newPriceLabel => 'ProductsDialog.newPriceLabel'.tr();
  static String get priceValidationRequired => 'ProductsDialog.priceValidationRequired'.tr();
  static String get priceValidationInvalid => 'ProductsDialog.priceValidationInvalid'.tr();
  static String get noProductChangesDetected => 'ProductsDialog.noProductChangesDetected'.tr();
  static String get addedProductsTitle => 'ProductsDialog.addedProductsTitle'.tr();
  static String get removedProductsTitle => 'ProductsDialog.removedProductsTitle'.tr();
  static String get changedPricesTitle => 'ProductsDialog.changedPricesTitle'.tr();
  static String get emailContentIntro => 'ProductsDialog.emailContentIntro'.tr();
  static String get setToZeroButton => 'ProductsDialog.setToZeroButton'.tr(); // e.g., "Set to Zero"
  static String get sendUpdateItemChanges => 'ProductsDialog.sendUpdateItemChanges'.tr(); // e.g., "Overview of product changes"
  static String get priceValidationNegative => 'ProductsDialog.priceValidationNegative'.tr(); // e.g., "Price cannot be negative."
  static String get totalPriceChange => 'ProductsDialog.totalPriceChange'.tr();

  // --- Order History ---
  static String get noHistoryFound => 'OrderHistory.noHistoryFound'.tr();
  static String get currentState => 'OrderHistory.currentState'.tr();
  static String get systemUser => 'OrderHistory.systemUser'.tr();
  static String get changes => 'OrderHistory.changes'.tr();
  static String get totalPrice => 'OrderHistory.totalPrice'.tr();
  static String get noProductChanges => 'OrderHistory.noProductChanges'.tr();
  static String get expiredOrderTooltip => 'OrderHistory.expiredOrderTooltip'.tr();
  static String toBasicString(int id, int orderId) => 'OrderHistory.toBasicString'.tr(namedArgs: {"id": id.toString(), "orderId": orderId.toString()});
}
