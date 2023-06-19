class ParticipantModel {
  ParticipantModel(this.email, this.name, this.surname);
  String email;
  String name;
  String surname;
  bool isSignedIn = false;
  @override
  String toString() {
    return "$name $surname";
  }
}