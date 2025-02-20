import 'package:flutter/cupertino.dart';
import 'package:fstapp/components/dataGrid/PlutoAbstract.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/dataModelsEshop/ProductTypeModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:intl/intl.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class FormFieldModel extends IPlutoRowModel {
  int? id;
  DateTime? createdAt;
  DateTime? updatedAt;
  String? title;
  String? description;
  String? type;
  bool? isRequired;
  bool? isHidden;
  bool? isTicketField;
  int? form;
  int? order;
  int? productTypeId;
  dynamic data;
  List<FormOptionModel> options;
  ProductTypeModel? productType;

  static const String metaRequired = "required";
  static const String metaHidden = "hidden";
  static const String metaTitle = "title";
  static const String metaDescription = "description";

  FormFieldModel({
    this.id,
    this.createdAt,
    this.updatedAt,
    this.title,
    this.description,
    this.type,
    this.isRequired,
    this.isHidden,
    this.isTicketField,
    this.form,
    this.order,
    this.data,
    this.productTypeId,
    this.productType,
    List<FormOptionModel>? options,
  }) : options = options ?? [];

  factory FormFieldModel.fromJson(Map<String, dynamic> json) {
    var type = json[TbEshop.form_fields.type];
    var data = json[TbEshop.form_fields.data];
    List<FormOptionModel> options = [];
    if (type == FormHelper.fieldTypeSelectOne && data is Map) {
      options = data[FormHelper.metaOptions].map<FormOptionModel>((e) {
        return FormOptionModel.fromJson(e);
      }).toList();
    }
    return FormFieldModel(
        id: json[TbEshop.form_fields.id],
        createdAt: json[TbEshop.form_fields.created_at] != null
            ? DateTime.parse(json[TbEshop.form_fields.created_at])
            : null,
        title: json[TbEshop.form_fields.title],
        description: json[TbEshop.form_fields.description],
        type: type,
        isRequired: json[TbEshop.form_fields.is_required],
        isHidden: json[TbEshop.form_fields.is_hidden],
        isTicketField: json[TbEshop.form_fields.is_ticket_field],
        form: json[TbEshop.form_fields.form],
        order: json[TbEshop.form_fields.order],
        data: data,
        productTypeId: json[TbEshop.form_fields.product_type],
        productType: json[TbEshop.form_fields.product_type_data] != null
            ? ProductTypeModel.fromJson(json[TbEshop.form_fields.product_type_data])
            : null,
        options: options
    );
  }

  Map<String, dynamic> toJson() {
    final jsonData = Map<String, dynamic>.from(data ?? {});

    if (options.isNotEmpty) {
      jsonData[FormHelper.metaOptions] = options.map((option) {
        return {'value': option.title};
      }).toList();
    }

    return {
      TbEshop.form_fields.id: id,
      TbEshop.form_fields.title: title,
      TbEshop.form_fields.description: description,
      TbEshop.form_fields.type: type,
      TbEshop.form_fields.is_required: isRequired,
      TbEshop.form_fields.is_hidden: isHidden,
      TbEshop.form_fields.is_ticket_field: isTicketField,
      TbEshop.form_fields.order: order,
      TbEshop.form_fields.data: jsonData.isNotEmpty ? jsonData : null,
      TbEshop.form_fields.product_type: productType,
    };
  }

  @override
  PlutoRow toPlutoRow(BuildContext context) {
    return PlutoRow(cells: {
      TbEshop.form_fields.id: PlutoCell(value: id ?? 0),
      TbEshop.form_fields.created_at: PlutoCell(
          value: createdAt != null
              ? DateFormat('yyyy-MM-dd').format(createdAt!)
              : ""),
      TbEshop.form_fields.title: PlutoCell(value: title ?? ""),
      TbEshop.form_fields.description: PlutoCell(value: description ?? ""),
      TbEshop.form_fields.type: PlutoCell(value: type ?? ""),
      metaRequired: PlutoCell(value: isRequired.toString()),
      metaHidden: PlutoCell(value: isHidden.toString()),
      TbEshop.form_fields.is_ticket_field: PlutoCell(value: isTicketField.toString()),
      TbEshop.form_fields.order: PlutoCell(value: order ?? 0),
    });
  }

  static FormFieldModel fromPlutoJson(Map<String, dynamic> json) {
    return FormFieldModel(
      id: json[TbEshop.form_fields.id] == -1 ? null : json[TbEshop.form_fields.id],
      isHidden: json[TbEshop.form_fields.is_hidden],
      isTicketField: json[TbEshop.form_fields.is_ticket_field],
    );
  }

  @override
  Future<void> deleteMethod() async {
  }

  @override
  Future<void> updateMethod() async {
  }

  @override
  String toBasicString() => title ?? id.toString();
}
