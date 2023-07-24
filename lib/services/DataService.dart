import 'package:av_app/models/InformationModel.dart';
import 'package:av_app/models/NewsMessage.dart';
import 'package:av_app/models/UserData.dart';
import 'package:av_app/services/ToastHelper.dart';
import 'package:collection/collection.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../models/EventModel.dart';
import '../models/ParticipantModel.dart';
import '../models/PlaceModel.dart';

class DataService {
  static final _supabase = Supabase.instance.client;
  static final _secureStorage = FlutterSecureStorage();
  static const REFRESH_TOKEN_KEY = 'refresh';

  //final String _baseUrl = "http://localhost:5001/";
  // Future<HelloWorldResponse> getHelloWorld() async{
  //   final url = Uri.parse("${_baseUrl}api/Test/hello/world");
  //   final response = await http.get(url);
  //   if (response.statusCode == 200) {
  //     return HelloWorldResponse.fromJson((json.decode(response.body)));
  //   } else{
  //     throw Exception("status Code != 200");
  //   }
  // }

  static Future<String> getFirstProgramTitle() async {
    var programJson =
        await _supabase.from('events').select('title').limit(1).single();
    return programJson['title'].toString();
  }

  static Future<bool> tryAuthUser() async {
    if (!await _secureStorage.containsKey(key: REFRESH_TOKEN_KEY)) {
      return false;
    }
    var refresh = await _secureStorage.read(key: REFRESH_TOKEN_KEY);
    var result = await _supabase.auth.setSession(refresh.toString());
    if (result.user != null) {
      await _secureStorage.write(
          key: REFRESH_TOKEN_KEY,
          value: _supabase.auth.currentSession!.refreshToken.toString());
      return true;
    }
    return false;
  }

  static isLoggedIn() {
    return _supabase.auth.currentSession != null;
  }

  static String? currentUserEmail() {
    return _supabase.auth.currentUser?.email;
  }

  static Future<void> login(String email, String password) async {
    var data = await _supabase.auth
        .signInWithPassword(email: email, password: password);
    await _secureStorage.write(
        key: REFRESH_TOKEN_KEY, value: data.session!.refreshToken.toString());
  }

  static Future<void> logout() async {
    _secureStorage.delete(key: REFRESH_TOKEN_KEY);
    await _supabase.auth.signOut();
  }

  static Future<UserData> getCurrentUserData() async {
    if (!isLoggedIn()) {
      throw Exception("User must be logged in.");
    }
    var jsonUser = await _supabase
        .from('migrated_users')
        .select()
        .eq('email', _supabase.auth.currentUser!.email)
        .limit(1)
        .single();
    return UserData.fromJson(jsonUser);
  }

  static Future<PlaceModel?> getUserAccommodation(
      String accommodationType) async {
    var data = await _supabase
        .from('accommodation_places')
        .select("places(id, title)")
        .eq("accommodation_type", accommodationType)
        .maybeSingle();
    if (data == null) {
      return null;
    }
    return PlaceModel.fromJson(data["places"]);
  }

  static Future<List<PlaceModel>> getPlaces() async {
    var data = await _supabase.from('places').select();
    return List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
  }

  static Future<PlaceModel> getPlace(int id) async {
    var data = await _supabase.from('places').select().eq("id", id).single();
    return PlaceModel.fromJson(data);
  }

  static Future<List<InformationModel>> getInformation() async {
    var data = await _supabase.from("information").select();
    var infoList = List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
    infoList.sortBy((element) => element.title.toLowerCase());
    return infoList;
  }

  static Future<dynamic> getEvents() async => await _supabase
      .from('events')
      .select()
      .order('start_time', ascending: true);

  static Future<EventModel> getEvent(int eventId) async {
    var data = await _supabase
        .from('events')
        .select(
            "id, title, start_time, end_time, max_participants, description, places(id, title)")
        .eq("id", eventId)
        .single();
    return EventModel.fromJson(data);
  }

  static Future<dynamic> getParticipantsPerEvent(int eventId) => _supabase
      .from('event_users')
      .select("email, event, migrated_users(name, surname)")
      .eq("event", eventId);

  static Future<int> getParticipantsPerEventCount(int eventId) async {
    var result = await _supabase
        .from('event_users')
        .select('*', const FetchOptions(count: CountOption.exact, head: true))
        .eq("event", eventId);
    return result.count;
  }

  static Future<List<EventModel>> getParticipantEventTimes(String email) async {
    var data = await _supabase
        .from('event_users')
        .select("events(id, start_time, end_time)")
        .eq("email", email);
    return List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x["events"])));
  }

  static Future<bool> isCurrentUserSignedToEvent(int eventId) async {
    var result = await _supabase
        .from('event_users')
        .select('*', const FetchOptions(count: CountOption.exact, head: true))
        .eq("event", eventId)
        .eq("email", currentUserEmail());
    return result.count > 0;
  }

  static signInToEvent(int eventId, [String? email]) async {
    var finalEmail = email ?? _supabase.auth.currentUser?.email;
    if (finalEmail == null) {
      throw Exception("User must be logged in.");
    }

    //check for max participants
    var event = await getEvent(eventId);
    if (event.startTime.isBefore(DateTime.now())) {
      ToastHelper.Show("Nelze přihlásit! Událost už proběhla.");
      return;
    }

    //check for similar times
    var userEvents = await getParticipantEventTimes(finalEmail);
    for (var i = 0; i < userEvents.length; i++) {
      var e = userEvents[i];
      if (e.startTime.isBefore(event.endTime) &&
              e.startTime.isAfter(event.startTime) ||
          e.endTime.isBefore(event.endTime) &&
              e.endTime.isAfter(event.startTime) ||
          e.startTime.isAtSameMomentAs(event.startTime) ||
          e.endTime.isAtSameMomentAs(event.endTime)) {
        ToastHelper.Show(
            "Nelze přihlásit! $finalEmail je přihlášen na jiné události ve stejném čase.");
        return;
      }
    }

    bool signedIn = await _supabase.rpc("upsert_event_user",
        params: {"event_id": eventId, "user_id": finalEmail});

    if (signedIn) {
      ToastHelper.Show("Přihlášen $finalEmail");
    } else {
      ToastHelper.Show("Nelze přihlásit! Událost byla zaplněna.");
    }
  }

  static signOutFromEvent(int eventId, [String? email]) async {
    var finalEmail = email ?? _supabase.auth.currentUser?.email;
    if (finalEmail == null) {
      throw Exception("User must be logged in.");
    }
    await _supabase
        .from('event_users')
        .delete()
        .eq("event", eventId)
        .eq("email", finalEmail);

    ToastHelper.Show("Odhlášen $finalEmail");
  }

  static updateEvent(EventModel event) async {
    if (!DataService.isLoggedIn()) {
      return;
    }
    await _supabase.from('events').upsert({
      "description": event.description,
      "id": event.id,
      "start_time": event.startTime.toIso8601String(),
      "end_time": event.endTime.toIso8601String(),
      "title": event.title,
      "max_participants": event.maxParticipants,
      "place": event.place?.placeId
    }).select();
  }

  static updateInfo(InformationModel info) async {
    if (!DataService.isLoggedIn()) {
      return;
    }
    await _supabase.from('information').upsert({
      "title": info.title,
      "id": info.id,
      "description": info.description
    }).select();
  }

  static Future<List<ParticipantModel>> getAllUsers() async {
    List<ParticipantModel> toReturn = [];
    var result =
        await _supabase.from("migrated_users").select("email, name, surname");
    for (var p in result) {
      toReturn.add(ParticipantModel(p["email"], p["name"], p["surname"]));
    }
    return toReturn;
  }

  static insertNewsMessage(String message) async {
    await _supabase.from('news').insert(
        {"message": message, "created_by": currentUserEmail()}).select();
    ToastHelper.Show("Zpráva byla odeslána!");
  }

  static Future<int> countNewMessages() async {
    int lastMessageId = await getLastReadMessage();
    var result = await _supabase
        .from('news')
        .select('*', const FetchOptions(count: CountOption.exact, head: true))
        .gt("id", lastMessageId);
    return result.count;
  }

  static Future<int> getLastReadMessage() async {
    int lastMessageId = 0;
    var lastMessage = await _supabase
        .from("user_news")
        .select("news_id")
        .eq("user", currentUserEmail())
        .maybeSingle();
    if (lastMessage != null) {
      lastMessageId = lastMessage["news_id"];
    }
    return lastMessageId;
  }

  static void setMessagesAsRead(int newsId) async {
    if (currentUserEmail() == null) {
      return;
    }
    await _supabase
        .from('user_news')
        .upsert({"user": currentUserEmail(), "news_id": newsId}).select();
  }

  static Future<List<NewsMessage>> loadNewsMessages() async {
    int lastReadMessageId = 0;
    if (isLoggedIn()) {
      lastReadMessageId = await getLastReadMessage();
    }
    var messagesData = await _supabase
        .from('news')
        .select('id, created_at, message, migrated_users(name, surname)')
        .order("created_at");
    List<NewsMessage> loadedMessages = [];

    for (var row in messagesData) {
      DateTime createdAt = DateTime.parse(row['created_at']);
      String message = row['message'];
      var fullName = row['migrated_users']['name'] +
          " " +
          row['migrated_users']['surname'];
      NewsMessage newsMessage = NewsMessage(
          createdAt: createdAt,
          message: message,
          createdBy: fullName,
          id: row['id']);
      if (isLoggedIn()) {
        newsMessage.isRead = lastReadMessageId >= newsMessage.id;
      }
      loadedMessages.add(newsMessage);
    }
    return loadedMessages;
  }

  static Future<void> updateEvents(List<EventModel> events) async {
    var eventsData = await DataService.getEvents();
    eventsData.forEach((e) {
      var updatedEvent = EventModel.fromJson(e);
      var eventToChange =
          events.firstWhereOrNull((eve) => eve.id == updatedEvent.id);
      if (eventToChange != null) {
        eventToChange.copyFromEvent(updatedEvent);
      } else {
        events.add(updatedEvent);
      }
    });
  }

  static Future<void> SaveLocation(int placeId, double lat, double lng) async {
    await _supabase.from("places").update({
      "coordinates": {
        "latLng": {"lat": lat, "lng": lng}
      }
    }).eq("id", placeId);
    ToastHelper.Show("Pozice změněna!");
  }

// static Future<List<ParticipantModel>> searchParticipants(String searchTerm) async {
//   List<ParticipantModel> toReturn = [];
//   var result = await _supabase
//       .from("migrated_users")
//       .select("email, name, surname")
//       .or('or(name.ilike.%$searchTerm%),or(surname.ilike.%$searchTerm%),or(email.ilike.%$searchTerm%)')
//       .limit(10);
//   for(var p in result)
//   {
//     toReturn.add(ParticipantModel(p["email"], p["name"], p["surname"]));
//   }
//   return toReturn;
// }
}
