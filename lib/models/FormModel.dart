import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
//import 'package:form_builder_validators/form_builder_validators.dart';

class FormModel{
  int? id;
  dynamic data;

  factory FormModel.fromJson(Map<String, dynamic> json) {
    return FormModel(
      id: json["id"],
      data: json["data"],
    );
  }

  FormModel({this.id, this.data});
}

