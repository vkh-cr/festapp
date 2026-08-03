import 'package:fstapp/components/icons/place_type_model.dart';
import 'package:fstapp/components/cleaning/models/cleaning_place_status.dart';
import 'package:fstapp/components/information/information_model.dart';
import 'package:fstapp/components/map/icon_model.dart';
import 'package:fstapp/components/map/path_group_model.dart';
import 'package:fstapp/components/map/place_model.dart';
import 'package:fstapp/components/news/news_model.dart';
import 'package:fstapp/components/schedule/event_model.dart';
import 'package:fstapp/components/speakers/speakers_bundle.dart';
import 'package:fstapp/components/groups/user_group_info_model.dart';
import 'package:fstapp/components/users/user_info_model.dart';
import 'package:fstapp/components/users/companion/companion_model.dart';
import 'package:fstapp/components/activities/activity_data_helper.dart';
import 'package:fstapp/components/activities/activity_model.dart';
import 'package:fstapp/components/inventory/models/user_inventory_bundle.dart';
import 'package:fstapp/components/event_feedback/event_feedback_model.dart';
import 'package:fstapp/data_services/client_sync/client_sync_protocol.dart';
import 'package:fstapp/data_services/client_sync/client_sync_runtime.dart';
import 'package:flutter/foundation.dart';

class ClientSyncProjection {
  static Future<Map<String, dynamic>> occasionConfig() async =>
      (await ClientSyncRuntime.readPublic(ClientSyncComponent.occasionConfig) ??
              const <String, dynamic>{})
          .cast<String, dynamic>();

  static Future<List<EventModel>> events() async {
    final catalog =
        await ClientSyncRuntime.readPublic(ClientSyncComponent.programCatalog);
    final live =
        await ClientSyncRuntime.readPublic(ClientSyncComponent.livePublic);
    final privateProgram =
        await ClientSyncRuntime.readPrivate(ClientSyncComponent.privateProgram);
    final liveById = <int, Map>{
      for (final item
          in ((live?['events'] as List?) ?? const []).whereType<Map>())
        (item['eventId'] as num).toInt(): item,
    };
    final privateProgramMap = privateProgram is Map ? privateProgram : null;
    final signedIn = _ids(privateProgramMap?['signedIn']);
    final saved = _ids(privateProgramMap?['saved']);
    final groups =
        ((catalog?['eventGroups'] as List?) ?? const []).whereType<Map>();
    final roles =
        ((catalog?['eventRoles'] as List?) ?? const []).whereType<Map>();
    final events =
        ((catalog?['events'] as List?) ?? const []).whereType<Map>().map((raw) {
      final id = (raw['id'] as num).toInt();
      final liveEvent = liveById[id];
      return EventModel.fromJson({
        'id': id,
        'title': raw['title'],
        'start_time': raw['startTime'],
        'end_time': raw['endTime'],
        'max_participants': raw['maxParticipants'],
        'description': raw['description'],
        'place': raw['placeId'],
        'type': raw['type'],
        'data': raw['data'],
        'split_for_men_women': raw['splitForMenWomen'] ?? false,
        'is_group_event': raw['isGroupEvent'] ?? false,
        'isSignedIn': signedIn.contains(id),
        'isEventInMyProgram': saved.contains(id),
        'currentParticipants': liveEvent?['participantCount'] ?? 0,
        'event_users_saved': [
          {'count': liveEvent?['savedCount'] ?? 0}
        ],
        'event_groups': [
          for (final group in groups)
            if (group['parentId'] == id)
              {'event_child': group['childId']}
            else if (group['childId'] == id)
              {'event_parent': group['parentId']},
        ],
        'event_roles': [
          for (final role in roles)
            if (role['eventId'] == id) {'role': role['roleId']},
        ],
      });
    }).toList(growable: false);
    final eventsById = <int, EventModel>{
      for (final event in events)
        if (event.id case final id?) id: event,
    };
    for (final event in events) {
      event.childEvents = [
        for (final childId in event.childEventIds ?? const <int>[])
          if (eventsById[childId] case final child?) child,
      ];
    }
    return events;
  }

  static Set<int> _ids(Object? value) => value is List
      ? value.whereType<num>().map((id) => id.toInt()).toSet()
      : <int>{};

  static Future<Map<String, dynamic>> _map() async =>
      await ClientSyncRuntime.readPublic(ClientSyncComponent.mapCatalog) ?? {};

  static Future<List<PlaceModel>> places() async =>
      ((await _map())['places'] as List? ?? const [])
          .whereType<Map>()
          .map((raw) => PlaceModel.fromJson({
                'id': raw['id'],
                'title': raw['title'],
                'description': raw['description'],
                'type': raw['type'],
                'coordinates': raw['coordinates'],
                'order': raw['order'],
                'icon': raw['icon'],
                'is_hidden': false,
                'aggregate_version': raw['aggregateVersion'],
              }))
          .toList(growable: false);

  static Future<List<PlaceTypeModel>> placeTypes() async =>
      ((await _map())['placeTypes'] as List? ?? const [])
          .whereType<Map>()
          .map((raw) => PlaceTypeModel.fromJson({
                'id': raw['id'],
                'code': raw['code'],
                'title': raw['title'],
                'icon': raw['icon'],
                'order': raw['order'],
                'is_hidden': false,
                'is_default': raw['isDefault'] ?? false,
                'aggregate_version': raw['aggregateVersion'],
              }))
          .toList(growable: false);

  static Future<List<PathGroupsModel>> paths() async =>
      ((await _map())['paths'] as List? ?? const [])
          .whereType<Map>()
          .map((raw) => PathGroupsModel.fromJson({
                'id': raw['id'],
                'title': raw['title'],
                'path_data': raw['pathData'],
                'data': raw['data'],
                'icon': raw['icon'],
                'order': raw['order'],
                'is_hidden': false,
                'aggregate_version': raw['aggregateVersion'],
              }))
          .toList(growable: false);

  static Future<List<IconModel>> icons() async =>
      ((await _map())['icons'] as List? ?? const [])
          .whereType<Map>()
          .map((raw) => IconModel.fromJson({
                'id': raw['id'],
                'link': raw['link'],
                'data': raw['svg'],
              }))
          .toList(growable: false);

  static Future<Map<String, dynamic>> _content() async =>
      await ClientSyncRuntime.readPublic(ClientSyncComponent.contentCatalog) ??
      {};

  static Future<List<InformationModel>> information() async =>
      ((await _content())['information'] as List? ?? const [])
          .whereType<Map>()
          .map((raw) => InformationModel.fromJson({
                'id': raw['id'],
                'title': raw['title'],
                'description': raw['description'],
                'order': raw['order'],
                'type': raw['type'],
                'data': raw['data'],
                'is_hidden': false,
                'aggregate_version': raw['aggregateVersion'],
              }))
          .toList(growable: false);

  static Future<List<NewsModel>> news() async => _newsWithMarkers();

  static Future<List<NewsModel>> _newsWithMarkers() async {
    final content = await _content();
    final live =
        await ClientSyncRuntime.readPublic(ClientSyncComponent.livePublic);
    final marker =
        await ClientSyncRuntime.readPrivate(ClientSyncComponent.privateNews);
    return projectNews(content: content, live: live, marker: marker);
  }

  @visibleForTesting
  static List<NewsModel> projectNews({
    required Map<String, dynamic> content,
    Map<String, dynamic>? live,
    Object? marker,
  }) {
    final viewsByNewsId = <int, int>{
      for (final item
          in ((live?['newsViews'] as List?) ?? const []).whereType<Map>())
        if (item['newsId'] case final num newsId)
          newsId.toInt(): (item['views'] as num?)?.toInt() ?? 0,
    };
    final lastRead = marker is List && marker.isNotEmpty
        ? ((marker.first as Map)['newsId'] as num?)?.toInt() ?? 0
        : 0;
    return ((content['news'] as List?) ?? const []).whereType<Map>().map((raw) {
      final item = NewsModel.fromJson({
        'id': raw['id'],
        'message': raw['message'],
        'created_at': raw['createdAt'],
        'views': viewsByNewsId[(raw['id'] as num).toInt()] ?? 0,
        'aggregate_version': raw['aggregateVersion'],
      });
      item.isRead = item.id <= lastRead;
      return item;
    }).toList()
      ..sort((a, b) => b.id.compareTo(a.id));
  }

  static Future<int> unreadNewsCount() async =>
      (await news()).where((item) => !item.isRead).length;

  static Future<EventFeedbackModel?> feedback(int eventId) async {
    final raw = await ClientSyncRuntime.readPrivate(
      ClientSyncComponent.privateFeedback,
    );
    if (raw is! List) return null;
    for (final item in raw.whereType<Map>()) {
      if ((item['eventId'] as num?)?.toInt() == eventId) {
        return EventFeedbackModel.fromJson({
          'event': eventId,
          'rating': item['rating'],
          'note': item['note'],
          'updated_at': item['updatedAt'],
        });
      }
    }
    return null;
  }

  static Future<SpeakersBundle> speakers() async {
    final content = await _content();
    final program = await ClientSyncRuntime.readPublic(
            ClientSyncComponent.programCatalog) ??
        {};
    return SpeakersBundle.fromJson({
      'speakers': [
        for (final raw in (content['speakers'] as List? ?? const []))
          if (raw is Map)
            {...raw, 'aggregate_version': raw['aggregateVersion']},
      ],
      'speaker_topics': [
        for (final raw in (content['topics'] as List? ?? const []))
          if (raw is Map)
            {...raw, 'aggregate_version': raw['aggregateVersion']},
      ],
      'speaker_topic_links': [
        for (final link in (content['topicLinks'] as List? ?? const []))
          {'speaker': link['speakerId'], 'topic': link['topicId']},
      ],
      'event_speakers': [
        for (final link in (program['eventSpeakers'] as List? ?? const []))
          {'event': link['eventId'], 'speaker': link['speakerId']},
      ],
    });
  }

  static Future<List<CleaningPlaceStatus>> cleaningStatus() async {
    final live =
        await ClientSyncRuntime.readPublic(ClientSyncComponent.livePublic);
    final placesById = {for (final place in await places()) place.id: place};
    return ((live?['cleaning'] as List?) ?? const [])
        .whereType<Map>()
        .map((raw) => CleaningPlaceStatus.fromJson({
              'place': raw['placeId'],
              'title': placesById[(raw['placeId'] as num).toInt()]?.title ?? '',
              'status': raw['status'],
            }))
        .toList(growable: false);
  }

  static Future<UserInfoModel?> userInfo() async {
    final profile =
        await ClientSyncRuntime.readPrivate(ClientSyncComponent.privateProfile);
    if (profile is! Map || profile['user'] is! Map) return null;
    final user = (profile['user'] as Map).cast<String, dynamic>();
    return UserInfoModel.fromJson({
      'id': user['id'],
      'email_readonly': user['email'],
      'name': user['name'],
      'surname': user['surname'],
      'sex': user['sex'],
      'phone': user['phone'],
      'birth_date': user['birthDate'],
      'occasionUser': profile['occasion'],
    });
  }

  static Future<List<UserGroupInfoModel>> groups() async {
    final profile =
        await ClientSyncRuntime.readPrivate(ClientSyncComponent.privateProfile);
    if (profile is! Map) return const [];
    return ((profile['groups'] as List?) ?? const [])
        .whereType<Map>()
        .map((raw) {
      return UserGroupInfoModel.fromJson({
        'id': raw['id'],
        'title': raw['title'],
        'description': raw['description'],
        'type': raw['type'],
        'data': raw['data'],
        'place': raw['place'],
        'placeData': raw['placeData'],
        'is_admin': raw['isAdmin'],
        'participants': [
          for (final participant
              in ((raw['participants'] as List?) ?? const []).whereType<Map>())
            {
              'is_admin': participant['isAdmin'],
              'user_info': {
                'id': participant['userId'],
                'name': participant['name'],
                'surname': participant['surname'],
              },
            },
        ],
      });
    }).toList(growable: false);
  }

  static Future<List<CompanionModel>> companions() async {
    final profile =
        await ClientSyncRuntime.readPrivate(ClientSyncComponent.privateProfile);
    if (profile is! Map) return const [];
    return ((profile['companions'] as List?) ?? const [])
        .whereType<Map>()
        .map((raw) => CompanionModel.fromJson(raw.cast<String, dynamic>()))
        .toList(growable: false);
  }

  static Future<List<ActivityModel>> activities() async {
    final raw = await ClientSyncRuntime.readPrivate(
        ClientSyncComponent.privateActivity);
    if (raw is! Map) return const [];
    final data = raw.cast<String, dynamic>();
    final activities = ActivityDataHelper.parseActivities(data);
    final assignments = ActivityDataHelper.parseActivityAssignments(data);
    final events = ActivityDataHelper.parseEvents(data);
    final places = ActivityDataHelper.parsePlaces(data);
    final eventById = {
      for (final event in events)
        if (event.id != null) event.id!: event
    };
    final placeById = {
      for (final place in places)
        if (place.id != null) place.id!: place
    };
    final eventIdsByAssignment = <String, List<int>>{};
    for (final item in (data['assignment_events'] as List?) ?? const []) {
      if (item is! Map) continue;
      final assignment = item['assignment_id']?.toString();
      final event = (item['event_id'] as num?)?.toInt();
      if (assignment != null && event != null) {
        eventIdsByAssignment.putIfAbsent(assignment, () => []).add(event);
      }
    }
    final placeIdsByAssignment = <String, List<int>>{};
    for (final item in (data['assignment_places'] as List?) ?? const []) {
      if (item is! Map) continue;
      final assignment = item['assignment_id']?.toString();
      final place = (item['place_id'] as num?)?.toInt();
      if (assignment != null && place != null) {
        placeIdsByAssignment.putIfAbsent(assignment, () => []).add(place);
      }
    }
    final assignmentsByActivity = <String, List<ActivityAssignmentModel>>{};
    for (final assignment in assignments) {
      assignment.events = (eventIdsByAssignment[assignment.id] ?? const [])
          .map((id) => eventById[id])
          .whereType<ActivityEventModel>()
          .toList(growable: false);
      assignment.places = (placeIdsByAssignment[assignment.id] ?? const [])
          .map((id) => placeById[id])
          .whereType<ActivityPlaceModel>()
          .toList(growable: false);
      final activityId = assignment.activityId;
      if (activityId != null) {
        assignmentsByActivity.putIfAbsent(activityId, () => []).add(assignment);
      }
    }
    for (final activity in activities) {
      activity.assignments = assignmentsByActivity[activity.id] ?? const [];
    }
    return activities;
  }

  static Future<UserInventoryBundle?> userInventory() async {
    final raw = await ClientSyncRuntime.readPrivate(
        ClientSyncComponent.privateInventory);
    return raw is Map
        ? UserInventoryBundle.fromJson(raw.cast<String, dynamic>())
        : null;
  }
}
