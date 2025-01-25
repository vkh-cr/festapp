import 'package:fstapp/dataModels/Tb.dart';

class NewsModel {
  static const String newsOffline = "newsOffline";
  static const String viewsColumn = "views";

  DateTime? createdAt;
  String? message;
  String? createdBy;
  int id;
  int views = 0;
  bool isRead = false;

  NewsModel({
    required this.createdAt,
    required this.message,
    required this.createdBy,
    required this.id,
    required this.views,
  });

  Map toJson() =>
  {
    Tb.news.id: id,
    Tb.news.created_at: createdAt?.toIso8601String(),
    Tb.news.created_by: createdBy,
    viewsColumn: views,
    Tb.news.message: message,
  };

  factory NewsModel.fromJson(Map<String, dynamic> json) {
    return NewsModel(
      id: json[Tb.news.id],
      createdAt: json.containsKey(Tb.news.created_at) ? DateTime.parse(json[Tb.news.created_at]) : null,
      message: json[Tb.news.message],
      createdBy: json[Tb.user_info_public.name],
      views: json[NewsModel.viewsColumn]
    );
  }
}