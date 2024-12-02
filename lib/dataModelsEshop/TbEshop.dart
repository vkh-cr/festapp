class TbEshop {
  static ProductTypesTb product_types = const ProductTypesTb();
  static ProductsTb products = const ProductsTb();
  static OrderProductTicketTb order_product_ticket = const OrderProductTicketTb();
  static OrdersTb orders = const OrdersTb();
  static TicketsTb tickets = const TicketsTb();
  static BlueprintTb blueprints = const BlueprintTb();
}

class ProductTypesTb {
  const ProductTypesTb();
  String get table => "product_types";
  String get id => "id";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get title => "title";
  String get description => "description";
  String get type => "type";
  String get data => "data";
  String get occasion => "occasion";
}

class ProductsTb {
  const ProductsTb();
  String get table => "products";
  String get id => "id";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get is_hidden => "is_hidden";
  String get title => "title";
  String get description => "description";
  String get price => "price";
  String get data => "data";
  String get product_type => "product_type";
  String get occasion => "occasion";
}

class OrderProductTicketTb {
  const OrderProductTicketTb();
  String get table => "order_product_ticket";
  String get id => "id";
  String get created_at => "created_at";
  String get order => "order";
  String get product => "product";
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

class BlueprintTb {
  const BlueprintTb();
  String get table => "blueprints";
  String get id => "id";
  String get created_at => "created_at";
  String get data => "data";
  String get title => "title";
  String get organization => "organization";
  String get configuration => "configuration";
  String get objects => "objects";
  String get groups => "groups";
}
