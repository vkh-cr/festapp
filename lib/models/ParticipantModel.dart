class ParticipantModel {
  ParticipantModel(this.id, this.email, this.name, this.surname);
  String id;
  String email;
  String name;
  String surname;
  bool isSignedIn = false;
  @override
  String toString() {
    return "$name $surname";
  }
}