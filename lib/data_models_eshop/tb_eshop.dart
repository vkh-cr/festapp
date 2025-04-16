class TbEshop {
  static ProductTypesTb product_types = const ProductTypesTb();
  static ProductsTb products = const ProductsTb();
  static OrderProductTicketTb order_product_ticket = const OrderProductTicketTb();
  static OrdersTb orders = const OrdersTb();
  static OrdersHistoryTb orders_history = const OrdersHistoryTb();
  static TicketsTb tickets = const TicketsTb();
  static BlueprintTb blueprints = const BlueprintTb();
  static SpotsTb spots = const SpotsTb();
  static PaymentInfoTb payment_info = const PaymentInfoTb();
  static TransactionsTb transactions = const TransactionsTb();
  static BankAccountsTb bank_accounts = const BankAccountsTb();
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
  String get currency_code => "currency_code";
  String get data => "data";
  String get product_type => "product_type";
  String get occasion => "occasion";
  String get order => "order";
  String get maximum => "maximum";
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
  String get order_symbol => "order_symbol";
  String get payment_info => "payment_info";
  String get currency_code => "currency_code";
  String get data_form => "form";
  String get data_note => "note";
  String get data_email => "email";
  String get note_hidden => "note_hidden";
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
  String get note_hidden => "note_hidden";
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
  String get returned => "returned";
  String get deadline => "deadline";
  String get currency_code => "currency_code";
}

class OrdersHistoryTb {
  const OrdersHistoryTb();
  String get table => "orders_history";
  String get id => "id";
  String get created_at => "created_at";
  String get data => "data";
  String get order => "order";
  String get state => "state";
  String get price => "price";
  String get currency_code => "currency_code";
}

class TransactionsTb {
  const TransactionsTb();

  String get table => "transactions";
  String get id => "id";
  String get transaction_id => "transaction_id";
  String get date => "date";
  String get amount => "amount";
  String get currency => "currency";
  String get counter_account => "counter_account";
  String get bank_code => "bank_code";
  String get bank_name => "bank_name";
  String get ks => "ks";
  String get vs => "vs";
  String get ss => "ss";
  String get user_identification => "user_identification";
  String get transaction_type => "transaction_type";
  String get performed_by => "performed_by";
  String get comment => "comment";
  String get command_id => "command_id";
  String get bank_account_id => "bank_account_id";
  String get payment_info => "payment_info";
  String get created_at => "created_at";
  String get message_for_recipient => "message_for_recipient";
  String get counter_account_name => "counter_account_name";
}

class BankAccountsTb {
  const BankAccountsTb();
  String get table => "bank_accounts";
  String get id => "id";
  String get created_at => "created_at";
  String get account_number_human_readable => "account_number_human_readable";
  String get secret => "secret";
  String get account_number => "account_number";
  String get title => "title";
  String get type => "type";
  String get min_fetch_wait_seconds => "min_fetch_wait_seconds";
  String get last_fetch_time => "last_fetch_time";
  String get is_fetch_enabled => "is_fetch_enabled";
  String get supported_currencies => "supported_currencies";
}
