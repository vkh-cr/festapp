import 'package:collection/collection.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/eshop/models/order_model.dart';
import 'package:fstapp/components/eshop/models/order_product_ticket_model.dart';
import 'package:fstapp/components/eshop/models/ticket_model.dart';
import 'package:fstapp/components/forms/widgets_view/form_helper.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_models/occasion_user_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_models/unit_model.dart';
import 'package:fstapp/data_models/unit_user_model.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/db_occasions.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class OccasionEditorData {
  final List<OccasionUserModel> users;
  final List<FormModel> forms;
  OccasionEditorData({required this.users, required this.forms});
}

class OccasionUsersBundle {
  final Map<String, UserInfoModel> users;
  final Map<int, TicketModel> tickets;
  final Map<int, OrderProductTicketModel> orderProductTickets;
  final Map<int, OrderModel> orders;
  final Map<int, FormModel> forms;
  final Map<int, FormFieldModel> formFields;

  OccasionUsersBundle({
    required this.users,
    required this.tickets,
    required this.orderProductTickets,
    required this.orders,
    required this.forms,
    required this.formFields,
  });
}

class DbUsers {
  static final _supabase = Supabase.instance.client;

  static const String formIdKey = 'form_id';
  static const String orderCreatedAtKey = 'order_created_at';
  static const String lastSignInAtKey = 'last_sign_in_at';

  static Future<List<OccasionUserModel>> getOccasionEditorData() async {
    var result = await _supabase.rpc(
        'get_occasion_users_for_edit',
        params: {'p_occasion_id': RightsService.currentOccasionId()!}
    );

    if (result != null && result["code"] == 200) {
      var data = result["data"];
      var users = List<OccasionUserModel>.from(
          data["occasion_users"].map((x) => OccasionUserModel.fromJson(x))
      );
      var forms = List<FormModel>.from(
          data["forms"].map((x) => FormModel.fromJson(x))
      );

      final formMap = { for (var form in forms) form.key : form };

      for (final user in users) {
        if (user.formId != null && formMap.containsKey(user.formId)) {
          user.form = formMap[user.formId];
        }
      }

      users.sort((a, b) {
        bool isAPrivileged = a.isPrivileged();
        bool isBPrivileged = b.isPrivileged();

        if (isAPrivileged && !isBPrivileged) return -1;
        if (!isAPrivileged && isBPrivileged) return 1;

        final dateA = a.orderCreatedAt ?? a.createdAt;
        final dateB = b.orderCreatedAt ?? b.createdAt;

        if (dateA == null && dateB == null) return 0;
        if (dateA == null) return 1;
        if (dateB == null) return -1;

        return dateA.compareTo(dateB);
      });

      return users;
    }
    if (result != null && result["code"] == 403) {
      print("Authorization error: ${result['message']}");
    }
    return [];
  }


  static Future<OccasionUsersBundle> getOccasionUsersWithOrdersBundle() async {
    final response = await _supabase.rpc(
      'get_users_from_occasion_with_orders',
      params: {'oc': RightsService.currentOccasionId()!},
    );

    final json = response;

    // 1. Parse all data into dictionaries, keyed by ID
    final users = (json['users'] as Map<String, dynamic>).map((key, value) => MapEntry(key, UserInfoModel.fromJson(value)));
    final tickets = (json['tickets'] as Map<String, dynamic>).map((key, value) => MapEntry(int.parse(key), TicketModel.fromJson(value)));
    final orderProductTickets = (json['order_product_ticket'] as Map<String, dynamic>).map((key, value) => MapEntry(int.parse(key), OrderProductTicketModel.fromJson(value)));
    final orders = (json['orders'] as Map<String, dynamic>).map((key, value) => MapEntry(int.parse(key), OrderModel.fromJson(value)));
    final forms = (json['forms'] as Map<String, dynamic>).map((key, value) => MapEntry(int.parse(key), FormModel.fromJson(value)));
    final formFields = (json['form_fields'] as Map<String, dynamic>).map((key, value) => MapEntry(int.parse(key), FormFieldModel.fromJson(value)));

    // 2. Link the parsed models together
    final formMapByKey = { for (var f in forms.values) f.key : f };
    final optsByTicketId = groupBy(orderProductTickets.values, (opt) => opt.ticketId);

    for (final order in orders.values) {
      if (order.formKey != null) {
        order.form = formMapByKey[order.formKey];
      }
    }

    for (final ticket in tickets.values) {
      final ticketOpts = optsByTicketId[ticket.id];
      if (ticketOpts != null && ticketOpts.isNotEmpty) {
        final orderId = ticketOpts.first.orderId;
        if(orderId != null) {
          ticket.relatedOrder = orders[orderId];
        }
      }
    }

    for (final user in users.values) {
      if (user.ticketId != null) {
        user.ticket = tickets[user.ticketId];
      }
    }

    for (final field in formFields.values) {
      if (field.form != null && forms.containsKey(field.form)) {
        forms[field.form]!.relatedFields.add(field);
      }
    }

    // 3. **UPDATED**: Enhance user data with info from their order form in a single pass.
    for (final user in users.values) {
      final order = user.ticket?.relatedOrder;
      final orderDataFields = order?.data?['fields'];

      if (orderDataFields is! List) continue;

      for (final fieldResponse in orderDataFields) {
        if (fieldResponse is! Map || fieldResponse.isEmpty) continue;

        final fieldIdStr = fieldResponse.keys.first as String;
        final fieldValue = fieldResponse.values.first;
        if (fieldValue == null) continue;

        final fieldId = int.tryParse(fieldIdStr);
        if (fieldId == null) continue;

        final formFieldModel = formFields[fieldId];
        if (formFieldModel == null) continue;

        // Check for birth_date if not already present on the user model
        if (user.birthDate == null) {
          if (formFieldModel.type == FormHelper.fieldTypeBirthDate) {
            final date = DateTime.tryParse(fieldValue as String);
            if (date != null) user.birthDate = date;
          } else if (formFieldModel.type == FormHelper.fieldTypeBirthYear) {
            final year = int.tryParse(fieldValue.toString());
            if (year != null) user.birthDate = DateTime(year);
          }
        }

        // Check for the group feature field if not already present
        if (user.groupFeatureAnswer == null && formFieldModel.data?[FormHelper.isGroupFeatureField] == true) {
          user.groupFeatureAnswer = fieldValue.toString();
        }

        // Exit early if we've found both pieces of information we're looking for
        if (user.birthDate != null && user.groupFeatureAnswer != null) {
          break;
        }
      }
    }

    return OccasionUsersBundle(
      users: users,
      tickets: tickets,
      orderProductTickets: orderProductTickets,
      orders: orders,
      forms: forms,
      formFields: formFields,
    );
  }

  static Future<List<UserInfoModel>> getUsersInfo(List<String> userIds) async {
    var result = await _supabase.rpc("get_user_info_for_users",
        params: {"oc": RightsService.currentOccasionId(), "user_ids": userIds});
    if(result["code"] == 200) {
      return List<UserInfoModel>.from(result["data"].map((x) => UserInfoModel.fromJson(x)));
    }
    return [];
  }

  static Future<UserInfoModel?> getUserInfo(String userId) async {
    var list = await getUsersInfo([userId]);
    if(list.length == 1){
      return list[0];
    }
    return null;
  }

  static Future<List<UserInfoModel>> getAllUsersBasics() async {
    var result = await _supabase.rpc("get_all_user_basics_from_occasion",
        params: {"oc": RightsService.currentOccasionId()});
    if(result["code"] == 200) {
      var t = List<UserInfoModel>.from(result["data"].map((x) => UserInfoModel.fromJson(x)));
      return t;
    }
    return [];
  }

  static Future<List<UserInfoModel>> getAllUsersBasicsForUnit() async {
    var result = await _supabase.rpc("get_all_user_basics_from_occasion_unit",
        params: {"oc": RightsService.currentOccasionId()});
    if(result["code"] == 200) {
      var t = List<UserInfoModel>.from(result["data"].map((x) => UserInfoModel.fromJson(x)));
      return t;
    }
    return [];
  }

  static Future<List<UnitUserModel>> getAllUsersFromUnit(int unitId) async {
    var result = await _supabase.rpc("get_all_users_from_unit",
        params: {"unit_id": unitId});
    if(result["code"] == 200) {
      var t = List<UnitUserModel>.from(result["data"].map((x) => UnitUserModel.fromJson(x)));
      return t;
    }
    return [];
  }

  static Future<void> updateUserInfo(OccasionUserModel oum) async {
    final response = await _supabase.rpc("update_user",
        params: {"input_data":{"occasion": oum.occasion!, "user": oum.user, "data": oum.data}});

    var code = response['code'];
    if(code != 200 && code != 201){
      throw Exception(response['message']);
    }
  }

  static Future<String?> unsafeCreateUser(int occasion, String email, String pw, dynamic data) async {
    var newId = await _supabase.rpc("create_user_in_organization_with_data",
        params: {"org": AppConfig.organization, "email": email, "password": pw, "data": data});
    if (newId==null)
    {
      throw Exception("Creating of user has failed.");
    }
    await addUserToOccasion(newId, occasion);
    return newId;
  }

  static Future<UnitModel?> getCurrentUnit(int unit) async {
    var result = await _supabase.rpc("get_unit_for_edit",
        params: {"unit_id": unit});

    if (result != null && result["code"] == 200) {
      return UnitModel.fromJson(result["data"]);
    }
    return null;
  }

  static Future<UnitModel?> getCurrentOrganization() async {
    var result = await _supabase.rpc("get_current_organization_data");

    if (result != null && result["code"] == 200) {
      return UnitModel.fromJson(result["data"]);
    } else if (result != null && result["code"] == 403) {
      print("User is not authorized or found (admin rights required)");
    }

    // Return null if no organization data is found or unauthorized
    return null;
  }

  static Future<void> updateUnitUser(UnitUserModel uum) async {
    var response = await _supabase.rpc("update_unit_user",
        params:
        {
          "input_data": uum,
        });
    var code = response['code'];
    if(code != 200 && code != 201){
      throw Exception(response['message']);
    }
  }

  static Future<void> updateOccasionUser(OccasionUserModel oum) async {
    await AuthService.ensureCanUpdateUsers(oum);

    final response = await _supabase.rpc("update_user",
        params: {"input_data":{"occasion": oum.occasion!, "user": oum.user, "data": oum.data}});

    var code = response['code'];
    if(code != 200 && code != 201){
      throw Exception(response['message']);
    }

    oum.user ??= response['user'];
    await addUserToOccasion(oum.user!, oum.occasion!);

    if(oum.user!=null){
      await _supabase.from(Tb.occasion_users.table).upsert(
          oum.toUpdateJson()
      );
    }
  }

  static Future<void> addUserToOccasion(String id, int occasion) async {
    await _supabase.rpc("add_user_to_occasion",
        params:
        {
          "usr": id,
          "oc": occasion,
        });
  }

  static Future<void> addUserToUnit(String id, int unit) async {
    await _supabase.rpc("add_user_to_unit",
        params:
        {
          "usr": id,
          "unit_id": unit,
        });
  }

  static Future<void> updateExistingImportedOccasionUser(OccasionUserModel oum) async {
    await AuthService.ensureCanUpdateUsers(oum);
    await _supabase.from(Tb.occasion_users.table).upsert(
        oum.toImportedUpdateJson()
    );
    await DbUsers.updateUserInfo(oum);

  }

  static Future<void> deleteUnitUser(String user, int unit) async {
    await _supabase.rpc("delete_unit_user",
        params:
        {
          "usr": user,
          "unit_id": unit
        });
  }

  static Future<void> deleteOccasionUser(String user, int occasion) async {
    await _supabase.rpc("delete_occasion_user_ws",
        params:
        {
          "usr_to_delete": user,
          "occasion_id": occasion
        });
  }

  static Future<void> deleteUser(String user, int occasion) async {
    await _supabase.rpc("delete_user",
        params:
        {
          "usr": user,
          "oc": occasion
        });
  }

  static Future<String?> getUserByEmail(String email) async {
    var data = await _supabase.rpc("get_user_id_by_email",
        params: {"email": email.toLowerCase()}).maybeSingle();
    if(data == null)
    {
      return null;
    }
    return data["id"];
  }

  static Future<String?> getLastTimeSignIn(String id) async {
    var data = await _supabase.rpc("get_last_sign_in_at",
        params: {"user_id": id});
    return data;
  }

  static Future<OccasionUserModel> getOccasionUser(String id) async {
    var data = await _supabase.from(Tb.occasion_users.table).select().eq(Tb.occasion_users.user, id).limit(1).single();
    return OccasionUserModel.fromJson(data);
  }

  static Future<List<OccasionUserModel>> getOccasionUsers() async {
    var data = await _supabase.from(Tb.occasion_users.table).select().eq(Tb.occasion_users.occasion, RightsService.currentOccasionId()!);
    return List<OccasionUserModel>.from(data.map((x) => OccasionUserModel.fromJson(x))).sortedBy((ou)=>ou.createdAt!);
  }

  static Future<List<OccasionUserModel>> getOccasionUsersServiceTab() async {
    var allFood = await DbOccasions.getAllServices("food");
    var data = await _supabase.from(Tb.occasion_users.table).select().eq(Tb.occasion_users.occasion, RightsService.currentOccasionId()!);
    for(var ou in data){
      for(var f in allFood) {
        if(ou[Tb.occasion_users.services] == null){
          ou[Tb.occasion_users.services] = {DbOccasions.serviceTypeFood:{}};
        }
        if(ou[Tb.occasion_users.services][DbOccasions.serviceTypeFood] == null){
          ou[Tb.occasion_users.services][DbOccasions.serviceTypeFood] = {};
        }
        if(ou[Tb.occasion_users.services][DbOccasions.serviceTypeFood][f.code] == null) {
          ou[Tb.occasion_users.services][DbOccasions.serviceTypeFood][f.code] =
              DbOccasions.serviceNone;
        }
      }
    }
    return List<OccasionUserModel>.from(data.map((x) => OccasionUserModel.fromJson(x))).sortedBy((ou)=>ou.createdAt!);
  }

  static Future<OccasionModel> getOccasion(int id) async {
    var data = await _supabase.from(Tb.occasions.table).select().eq(Tb.occasions.id, id).single();
    return OccasionModel.fromJson(data);
  }

  static Future<dynamic> importUsersFromTickets(int occasionId) async {
    return await _supabase.rpc(
        'import_users_from_tickets_ws',
        params: {'p_occasion_id': occasionId});
  }
}