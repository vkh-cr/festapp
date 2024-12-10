import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/dataModelsEshop/OrderModel.dart';
import 'package:fstapp/dataModelsEshop/TicketModel.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';

class EshopColumns {
  // Column identifier constants
  static const String TICKET_ID = "ticketId";
  static const String TICKET_SYMBOL = "ticketSymbol";
  static const String TICKET_STATE = "ticketState";
  static const String TICKET_NOTE = "ticketNote";

  static const String ORDER_ID = "orderId";
  static const String ORDER_PRICE = "orderPrice";
  static const String ORDER_STATE = "orderState";

  static const String PRODUCT_ID = "productId";
  static const String PRODUCT_TITLE = "productTitle";
  static const String PRODUCT_PRICE = "productPrice";

  static const String PAYMENT_INFO_AMOUNT = "paymentInfoAmount";
  static const String PAYMENT_INFO_PAID = "paymentInfoPaid";
  static const String PAYMENT_INFO_VARIABLE_SYMBOL = "paymentInfoVariableSymbol";
  static const String PAYMENT_INFO_DEADLINE = "orderDataDeadline";

  static const String ORDER_DATA = "orderData";
  static const String ORDER_DATA_NOTE = "orderDataNote";
  static const String ORDER_DATA_NOTE_HIDDEN = "orderDataNoteHidden";

  // Define columns
  static Map<String, dynamic> get columnBuilders => {
    TICKET_ID: [
      PlutoColumn(
        hide: true,
        readOnly: true,
        enableEditingMode: false,
        title: "Id".tr(),
        field: TbEshop.tickets.id,
        type: PlutoColumnType.number(defaultValue: -1),
        width: 50,
        renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
      ),
    ],
    TICKET_SYMBOL: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Ticket Symbol".tr(),
        field: TbEshop.tickets.ticket_symbol,
        type: PlutoColumnType.text(),
        width: 150,
      ),
    ],
    TICKET_STATE: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "State".tr(),
        field: TbEshop.tickets.state,
        type: PlutoColumnType.select(
          [TicketModel.orderedState, TicketModel.paidState, TicketModel.usedState, TicketModel.stornoState],
        ),
        width: 120,
      ),
    ],
    TICKET_NOTE: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Note".tr(),
        field: TbEshop.tickets.note,
        type: PlutoColumnType.text(),
        width: 200,
      ),
    ],
    ORDER_ID: [
      PlutoColumn(
        hide: true,
        title: "Id".tr(),
        field: TbEshop.orders.id,
        type: PlutoColumnType.number(defaultValue: -1),
        readOnly: true,
        enableEditingMode: false,
        width: 50,
        renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
      ),
    ],
    ORDER_PRICE: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Price".tr(),
        field: TbEshop.orders.price,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 100,
      ),
    ],
    ORDER_STATE: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "State".tr(),
        field: TbEshop.orders.state,
        type: PlutoColumnType.select(
          [OrderModel.orderedState, OrderModel.paidState, OrderModel.canceledState],
        ),
        textAlign: PlutoColumnTextAlign.end,
        width: 120,
      ),
    ],
    ORDER_DATA: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Customer".tr(),
        field: TbEshop.orders.data,
        type: PlutoColumnType.text(),
        width: 250,
      ),
    ],
    ORDER_DATA_NOTE: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Note".tr(),
        field: TbEshop.orders.data_note,
        type: PlutoColumnType.text(),
        width: 200,
      ),
    ],
    ORDER_DATA_NOTE_HIDDEN: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Hidden note".tr(),
        field: TbEshop.orders.data_note_hidden,
        type: PlutoColumnType.text(),
        width: 200,
      ),
    ],
    PRODUCT_ID: [
      PlutoColumn(
        hide: true,
        title: "Id".tr(),
        field: TbEshop.products.id,
        type: PlutoColumnType.number(defaultValue: -1),
        readOnly: true,
        enableEditingMode: false,
        width: 50,
        renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
      ),
    ],
    PRODUCT_TITLE: [
      PlutoColumn(
        title: "Title".tr(),
        field: TbEshop.products.title,
        type: PlutoColumnType.text(),
        width: 200,
      ),
    ],
    PRODUCT_PRICE: [
      PlutoColumn(
        title: "Product Price".tr(),
        field: TbEshop.products.price,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_AMOUNT: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Amount".tr(),
        field: TbEshop.payment_info.amount,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_PAID: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Paid amount".tr(),
        field: TbEshop.payment_info.paid,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 120,
      ),
    ],
    PAYMENT_INFO_VARIABLE_SYMBOL: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Variable symbol".tr(),
        field: TbEshop.payment_info.variable_symbol,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_DEADLINE: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Deadline".tr(),
        field: TbEshop.payment_info.deadline,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 100,
      ),
    ],
  };

  /// Generates columns based on a list of column identifiers.
  /// Optional `data` map is used for columns that require extra configuration.
  static List<PlutoColumn> generateColumns(List<String> identifiers, {Map<String, dynamic>? data}) {
    return identifiers
        .where((id) => columnBuilders.containsKey(id))
        .expand((id) {
      var columnEntry = columnBuilders[id];
      if (columnEntry is List<PlutoColumn>) {
        return columnEntry; // Static columns
      } else if (columnEntry is Function) {
        return (columnEntry(data ?? {}) as List<PlutoColumn>);
      }
      return <PlutoColumn>[];
    }).toList();
  }
}
