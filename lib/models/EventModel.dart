class EventModel {
  String startTime;

  int? maxParticipants;

  int id;
  int? currentParticipants;

  EventModel(this.id, this.title, this.startTime, this.isSignedIn, this.maxParticipants);

  String title;
  String? description;
  bool isSignedIn = false;

  bool isFull() => currentParticipants!>=maxParticipants!;
  bool canSignIn() => maxParticipants!=null;

  @override
  String toString() {
    return maxParticipants==null?title:"$title (${currentParticipants??"-"}/$maxParticipants)";
  }
}