class BankAccountModel {
  final int id;
  final String? accountNumber;
  final String? title;
  final String type;
  final bool isAdmin;
  final int priority;
  
  final String? tokenMasked;
  final DateTime? tokenExpiryDate;
  final List<String> supportedCurrencies;
  final List<String> linkedUnits;
  final String? accountNumberHumanReadable;
  final DateTime? lastFetchTime;

  BankAccountModel({
    required this.id,
    this.accountNumber,
    this.title,
    this.priority = 0,
    this.type = 'FIO',
    this.isAdmin = false,
    this.tokenMasked,
    this.tokenExpiryDate,
    this.supportedCurrencies = const [],
    this.linkedUnits = const [],
    this.accountNumberHumanReadable,
    this.lastFetchTime,
  });

  factory BankAccountModel.fromJson(Map<String, dynamic> json) {
    return BankAccountModel(
      id: json['id'],
      accountNumber: json['account_number'],
      title: json['title'],
      priority: json['priority'] ?? 0,
      type: json['type'] ?? 'FIO',
      isAdmin: json['is_admin'] ?? false,
      tokenMasked: json['token_masked'],
      tokenExpiryDate: json['token_expiry_date'] != null ? DateTime.parse(json['token_expiry_date']) : null,
      supportedCurrencies: (json['supported_currencies'] as List<dynamic>?)?.map((e) => e.toString()).toList() ?? [],
      linkedUnits: (json['linked_units'] as List<dynamic>?)?.map((e) => e.toString()).toList() ?? [],
      accountNumberHumanReadable: json['account_number_human_readable'],
      lastFetchTime: json['last_fetch_time'] != null ? DateTime.parse(json['last_fetch_time']) : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'account_number': accountNumber,
      'title': title,
      'priority': priority,
      'type': type,
      'is_admin': isAdmin,
      'token_masked': tokenMasked,
      'token_expiry_date': tokenExpiryDate?.toIso8601String(),
      'supported_currencies': supportedCurrencies,
      'account_number_human_readable': accountNumberHumanReadable,
      'last_fetch_time': lastFetchTime?.toIso8601String(),
    };
  }

  BankAccountModel copyWith({
    int? id,
    String? accountNumber,
    String? title,
    String? type,
    bool? isAdmin,
    int? priority,
    String? tokenMasked,
    DateTime? tokenExpiryDate,
    List<String>? supportedCurrencies,
    List<String>? linkedUnits,
    String? accountNumberHumanReadable,
    DateTime? lastFetchTime,
  }) {
    return BankAccountModel(
      id: id ?? this.id,
      accountNumber: accountNumber ?? this.accountNumber,
      title: title ?? this.title,
      type: type ?? this.type,
      isAdmin: isAdmin ?? this.isAdmin,
      priority: priority ?? this.priority,
      tokenMasked: tokenMasked ?? this.tokenMasked,
      tokenExpiryDate: tokenExpiryDate ?? this.tokenExpiryDate,
      supportedCurrencies: supportedCurrencies ?? this.supportedCurrencies,
      linkedUnits: linkedUnits ?? this.linkedUnits,
      accountNumberHumanReadable: accountNumberHumanReadable ?? this.accountNumberHumanReadable,
      lastFetchTime: lastFetchTime ?? this.lastFetchTime,
    );
  }
}

class BankAccountUser {
  final String userId;
  final String? email;
  final String? name;
  final String? surname;
  final bool isAdmin;
  final bool isSupport;

  BankAccountUser({
    required this.userId,
    this.email,
    this.name,
    this.surname,
    this.isAdmin = false,
    this.isSupport = false,
  });

  factory BankAccountUser.fromJson(Map<String, dynamic> json) {
    return BankAccountUser(
      userId: json['user_id'],
      email: json['email'],
      name: json['name'],
      surname: json['surname'],
      isAdmin: json['is_admin'] ?? false,
      isSupport: json['is_support'] ?? false,
    );
  }
}
