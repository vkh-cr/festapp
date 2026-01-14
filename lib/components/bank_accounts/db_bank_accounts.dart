import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:fstapp/components/bank_accounts/bank_account_model.dart';
import 'package:fstapp/services/toast_helper.dart';

class DbBankAccounts {
  static final _supabase = Supabase.instance.client;

  static Future<List<BankAccountModel>> getBankAccountsForUnit(int unitId) async {
    final response = await _supabase.rpc('get_bank_accounts_for_unit_management', params: {
      'p_unit_id': unitId,
    });
    return (response as List).map((e) => BankAccountModel.fromJson(e)).toList();
  }

  static Future<int> updateBankAccount(BankAccountModel account, {int? unitId}) async {
    final response = await _supabase.rpc('update_bank_account', params: {
      'p_id': account.id == 0 ? null : account.id,
      'p_account_number': account.accountNumber,
      'p_title': account.title,
      'p_type': account.type,
      'p_supported_currencies': account.supportedCurrencies,
      'p_account_number_human_readable': account.accountNumberHumanReadable,
      'p_unit_id': unitId,
    });
    return response as int;
  }

  static Future<List<BankAccountUser>> getBankAccountUsers(int bankAccountId, {int? unitId}) async {
    final response = await _supabase.rpc("get_bank_account_users", 
      params: {
        "p_bank_account_id": bankAccountId,
        "p_unit_id": unitId
      }
    );
    return (response as List).map((e) => BankAccountUser.fromJson(e)).toList();
  }

  static Future<void> updateBankAccountUser(int bankAccountId, String email, bool isAdmin, bool isSupport) async {
    await _supabase.rpc('update_bank_account_user', params: {
      'p_bank_account_id': bankAccountId,
      'p_user_email': email,
      'p_is_admin': isAdmin,
      'p_is_support': isSupport,
    });
  }

  static Future<void> removeBankAccountUser(int bankAccountId, String email) async {
    // To remove, we update with both flags as false/null
    await _supabase.rpc('update_bank_account_user', params: {
      'p_bank_account_id': bankAccountId,
      'p_user_email': email,
      'p_is_admin': false,
      'p_is_support': false,
    });
  }

  static Future<void> updateBankAccountToken(int bankAccountId, String token, DateTime? validUntil) async {
    await _supabase.rpc('update_bank_account_token', params: {
      'p_bank_account_id': bankAccountId,
      'p_token': token,
      'p_valid_until': validUntil?.toIso8601String(),
    });
  }

  static Future<List<BankAccountModel>> getMyAdminBankAccounts() async {
    final response = await _supabase.rpc('get_my_admin_bank_accounts');
    return (response as List).map((e) => BankAccountModel.fromJson(e)).toList();
  }

  static Future<void> linkBankAccountToUnit(int unitId, int bankAccountId, int? priority) async {
    await _supabase.rpc('link_bank_account_to_unit', params: {
      'p_unit_id': unitId,
      'p_bank_account_id': bankAccountId,
      'p_priority': priority,
    });
  }
}
