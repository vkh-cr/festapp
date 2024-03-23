class OccasionModel {
  int? id;
  DateTime? createdAt;
  DateTime? udpatedAt;
  DateTime? startTime;
  DateTime? endTime;
  bool isOpen;
  bool isHidden;
  String? link;
  String? title;

  OccasionModel({this.id, this.createdAt, this.udpatedAt, this.startTime,
      this.endTime, required this.isOpen, required this.isHidden, this.link, this.title});
}