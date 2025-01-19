import 'package:flutter/cupertino.dart';
import 'package:fstapp/components/dataGrid/PlutoAbstract.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
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
  int? form;
  int? order;
  dynamic data;  // Added the 'data' field here

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
    this.form,
    this.order,
    this.data, // Added the 'data' parameter here
  });

  factory FormFieldModel.fromJson(Map<String, dynamic> json) {
    return FormFieldModel(
      id: json[TbEshop.form_fields.id],
      createdAt: json[TbEshop.form_fields.created_at] != null
          ? DateTime.parse(json[TbEshop.form_fields.created_at])
          : null,
      title: json[TbEshop.form_fields.title],
      description: json[TbEshop.form_fields.description],
      type: json[TbEshop.form_fields.type],
      isRequired: json[TbEshop.form_fields.is_required],
      isHidden: json[TbEshop.form_fields.is_hidden],
      form: json[TbEshop.form_fields.form],
      order: json[TbEshop.form_fields.order],
      data: json[TbEshop.form_fields.data],
    );
  }

  Map<String, dynamic> toJson() => {
    TbEshop.form_fields.title: title,
    TbEshop.form_fields.description: description,
    TbEshop.form_fields.type: type,
    TbEshop.form_fields.is_required: isRequired,
    TbEshop.form_fields.is_hidden: isHidden,
    TbEshop.form_fields.order: order,
    TbEshop.form_fields.data: data,
  };

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
      TbEshop.form_fields.order: PlutoCell(value: order ?? 0),
    });
  }

  static FormFieldModel fromPlutoJson(Map<String, dynamic> json) {
    return FormFieldModel(
      id: json[TbEshop.form_fields.id] == -1 ? null : json[TbEshop.form_fields.id],
      isHidden: json[TbEshop.form_fields.is_hidden],
    );
  }

  @override
  Future<void> deleteMethod() async {
    // Implement your delete logic here
  }

  @override
  Future<void> updateMethod() async {
    // Implement your update logic here
  }

  @override
  String toBasicString() => title ?? id.toString();
}
