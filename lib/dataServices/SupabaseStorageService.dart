import 'package:collection/collection.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModelsEshop/BlueprintGroup.dart';
import 'package:fstapp/dataModelsEshop/BlueprintHelper.dart';
import 'package:fstapp/dataModelsEshop/BlueprintModel.dart';
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'package:fstapp/dataModelsEshop/OrderModel.dart';
import 'package:fstapp/dataModelsEshop/OrderProductTicketModel.dart';
import 'package:fstapp/dataModelsEshop/PaymentInfoModel.dart';
import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/dataModelsEshop/ProductTypeModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataModelsEshop/TicketModel.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class SupabaseStorageService {
  static const String _bucketName = 'editor-files';

  static final _supabase = Supabase.instance.client;

  static Future<bool> uploadFile(BuildContext context, Uint8List data, String format) async {
    final path = '${DateTime.now().millisecondsSinceEpoch}.$format';
    final uploadResponse = await _supabase.storage.from(_bucketName).uploadBinary(path, data);
    if (uploadResponse.isEmpty) {

    }
    return false;
  }



}
