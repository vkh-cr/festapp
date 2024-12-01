class TbEshop {
  static ItemTypesTb item_types = const ItemTypesTb();
  static ItemsTb items = const ItemsTb();
  static OrderItemTicketTb order_item_ticket = const OrderItemTicketTb();
  static OrdersTb orders = const OrdersTb();
  static TicketsTb tickets = const TicketsTb();
}

class ItemTypesTb {
  const ItemTypesTb();
  String get table => "item_types";
  String get id => "id";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get title => "title";
  String get description => "description";
  String get type => "type";
  String get data => "data";
  String get occasion => "occasion";
}

class ItemsTb {
  const ItemsTb();
  String get table => "items";
  String get id => "id";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get is_hidden => "is_hidden";
  String get title => "title";
  String get description => "description";
  String get price => "price";
  String get data => "data";
  String get item_type => "item_type";
  String get occasion => "occasion";
}

class OrderItemTicketTb {
  const OrderItemTicketTb();
  String get table => "order_item_ticket";
  String get id => "id";
  String get created_at => "created_at";
  String get order => "order";
  String get item => "item";
  String get ticket => "ticket";
}

class OrdersTb {
  const OrdersTb();
  String get table => "orders";
  String get id => "id";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get price => "price";
  String get state => "state";
  String get data => "data";
  String get occasion => "occasion";
}

class TicketsTb {
  const TicketsTb();
  String get table => "tickets";
  String get id => "id";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get alias => "alias";
  String get state => "state";
  String get occasion => "occasion";
}
