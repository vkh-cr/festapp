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

