class TbEshop {
  static ProductTypesTb product_types = const ProductTypesTb();
  static ProductsTb products = const ProductsTb();
  static OrderProductTicketTb order_product_ticket = const OrderProductTicketTb();
  static OrdersTb orders = const OrdersTb();
  static TicketsTb tickets = const TicketsTb();
  static BlueprintTb blueprints = const BlueprintTb();
  static SpotsTb spots = const SpotsTb();
  static PaymentInfoTb payment_info = const PaymentInfoTb();
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
  String get form => "form";
  String get order_symbol => "order_symbol";
  String get payment_info => "payment_info";
  String get currency_code => "currency_code";
  String get data_note => "note";
  String get data_note_hidden => "note_hidden";
}

class TicketsTb {
  const TicketsTb();
  String get table => "tickets";
  String get id => "id";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get ticket_symbol => "ticket_symbol";
  String get state => "state";
  String get occasion => "occasion";
  String get note => "note";
  String get note_hidden => "hidden_note";
}

class BlueprintTb {
  const BlueprintTb();
  String get table => "blueprints";
  String get id => "id";
  String get created_at => "created_at";
  String get data => "data";
  String get title => "title";
  String get organization => "organization";
  String get occasion => "occasion";
  String get configuration => "configuration";
  String get objects => "objects";
  String get groups => "groups";
  String get background_svg => "background_svg";
}

class SpotsTb {
  const SpotsTb();
  String get table => "spots";
  String get id => "id";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get occasion => "occasion";
  String get product => "product";
  String get secret => "secret";
  String get secret_expiration_time => "secret_expiration_time";
  String get title => "title";
  String get order_product_ticket => "order_product_ticket";
}

class PaymentInfoTb {
  const PaymentInfoTb();
  String get table => "payment_info";
  String get id => "id";
  String get created_at => "created_at";
  String get bank_account => "bank_account";
  String get variable_symbol => "variable_symbol";
  String get amount => "amount";
  String get paid => "paid";
  String get deadline => "deadline";
  String get currency_code => "currency_code";
}