import 'package:collection/collection.dart';
import 'package:fstapp/components/groups/group_participant_model.dart';
import 'package:fstapp/components/groups/group_commands.dart';
import 'package:fstapp/components/information/information_model.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:fstapp/components/groups/user_group_info_model.dart';
import 'package:fstapp/components/map/db_places.dart';
import 'package:fstapp/components/map/place_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services/client_sync/client_sync_runtime.dart';
import 'package:fstapp/data_services/client_sync/client_sync_projection.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbGroups {
  static final _supabase = Supabase.instance.client;
  static final GroupCommands _commands = SupabaseGroupCommands(_supabase);
  static const editorGroupsKey = 'groups';
  static const editorGameDefinitionsKey = 'game_definitions';
  static const editorPlacesKey = 'places';

  static Future<List<UserGroupInfoModel>> getGroupsWithPlaces() async {
    var data = await _supabase
        .from(Tb.user_group_info.table)
        .select("${Tb.user_group_info.title}, ${Tb.places.table}(*)");
    return List<UserGroupInfoModel>.from(
        data.map((x) => UserGroupInfoModel.fromJson(x)));
  }

  static Future<UserGroupsEditorData> getUserGroupsEditorData(
      [String? type]) async {
    final response = await _supabase.rpc(
      ClientSyncRuntime.isV1Selected
          ? 'get_user_groups_editor_bundle_v1'
          : 'get_all_user_groups',
      params: {
        ClientSyncRuntime.isV1Selected ? 'p_occasion' : 'p_occasion_id':
            RightsService.currentOccasionId()!,
        'p_type': type,
      },
    );

    return parseUserGroupsEditorData(response, type);
  }

  static UserGroupsEditorData parseUserGroupsEditorData(dynamic response,
      [String? type]) {
    final List<dynamic> groupData = response[editorGroupsKey];
    final Map<String, dynamic>? gameDefsData =
        response[editorGameDefinitionsKey];

    var toReturn = List<UserGroupInfoModel>.from(
        groupData.map((x) => UserGroupInfoModel.fromJson(x)));

    if (type == InformationModel.gameType && gameDefsData != null) {
      Map<int, String> dict = gameDefsData
          .map((key, value) => MapEntry(int.parse(key), value as String));

      for (var u in toReturn) {
        u.checkpointTitlesDict = dict;
      }
    }

    toReturn.sort((a, b) {
      return Utilities.naturalCompare(a.title, b.title);
    });

    final places = List<PlaceModel>.from(
      (response[editorPlacesKey] ?? const [])
          .map((x) => PlaceModel.fromJson(x)),
    );
    places.sort((a, b) =>
        (a.title ?? '').toLowerCase().compareTo((b.title ?? '').toLowerCase()));

    return UserGroupsEditorData(groups: toReturn, places: places);
  }

  static Future<List<UserGroupInfoModel>> getAllUserGroupInfo(
          [String? type]) async =>
      (await getUserGroupsEditorData(type)).groups;

  static Future<UserGroupInfoModel?> getUserGroupInfo(int id) async {
    final response = await _supabase.rpc(
      'get_user_group_info_with_users',
      params: {
        'p_group_id': id,
      },
    );

    return UserGroupInfoModel.fromJson(response);
  }

  /// Canonical payload for persisting the editable group fields.
  ///
  /// A custom place must be saved before this is called so its generated ID
  /// can cross the persistence boundary just like an existing catalog place.
  static Map<String, dynamic> buildUserGroupUpsert(
    UserGroupInfoModel model,
  ) {
    return {
      Tb.user_group_info.title: model.title,
      if (model.type != null) Tb.user_group_info.type: model.type,
      if (model.description != null)
        Tb.user_group_info.description: model.description,
      Tb.user_group_info.place: model.place?.id,
    };
  }

  static Future<void> updateUserGroupInfo(UserGroupInfoModel model) async {
    if (!(RightsService.isEditor() || (model.isAdmin ?? false))) {
      throw Exception("Must be leader or admin to change the group.");
    }

    if (ClientSyncRuntime.isV1Selected) {
      final result =
          await _commands.save(RightsService.currentOccasionId()!, model);
      if (result.status == GroupCommandStatus.conflict) {
        throw StateError('Group was changed by another editor');
      }
      if (result.status == GroupCommandStatus.rejected ||
          result.group == null) {
        throw StateError('Group save was rejected');
      }
      model
        ..aggregateVersion = result.version
        ..persistedPlaceId = result.group!.place?.id
        ..persistedPlaceWasPrivate =
            result.group!.place?.isPrivateGroupLocation ?? false
        ..shouldSavePlace = false;
      return;
    }

    final previousPrivatePlaceId =
        model.persistedPlaceWasPrivate ? model.persistedPlaceId : null;
    if (model.place != null) {
      if (model.place!.id == null || model.shouldSavePlace) {
        model.place =
            await DbPlaces.updateLegacyPrivateGroupPlace(model.place!);
      }
    }
    final upsertObj = buildUserGroupUpsert(model);
    dynamic eventData;
    if (model.id != null) {
      eventData = await _supabase
          .from(Tb.user_group_info.table)
          .update(upsertObj)
          .eq(Tb.user_group_info.id, model.id!)
          .select()
          .single();
    } else {
      upsertObj.addAll(
          {Tb.user_group_info.occasion: RightsService.currentOccasionId()!});
      eventData = await _supabase
          .from(Tb.user_group_info.table)
          .insert(upsertObj)
          .select()
          .single();
    }

    var updated = UserGroupInfoModel.fromJson(eventData);
    await updateUserGroupParticipants(updated, model.participants!);

    final assignedPlaceId = model.place?.id;
    if (previousPrivatePlaceId != null &&
        previousPrivatePlaceId != assignedPlaceId) {
      await DbPlaces.deleteLegacyPrivateGroupPlace(
        PlaceModel(id: previousPrivatePlaceId),
      );
    }
    model.persistedPlaceId = assignedPlaceId;
    model.persistedPlaceWasPrivate =
        model.place?.isPrivateGroupLocation ?? false;
    model.shouldSavePlace = false;
  }

  static Future<void> updateUserGroupParticipants(
      UserGroupInfoModel group, Set<GroupParticipantModel> participants) async {
    await _supabase
        .from(Tb.user_groups.table)
        .delete()
        .eq(Tb.user_groups.group, group.id!);

    for (var p in participants) {
      await _supabase.from(Tb.user_groups.table).insert({
        Tb.user_groups.group: group.id,
        Tb.user_groups.user: p.userInfo!.id,
        Tb.user_groups.is_admin: p.isAdmin ?? false
      });
    }
  }

  /// Atomically makes the CSV group column authoritative for imported users.
  /// The RPC replaces standard-group membership and leaves typed groups alone.
  static Future<void> replaceImportedUserGroups(
      Map<String, String?> groupTitleByUserId) async {
    if (!RightsService.isEditor()) {
      throw Exception("Must be editor to import groups.");
    }

    if (ClientSyncRuntime.isV1Selected) {
      final result = await _commands.replaceAssignments(
        RightsService.currentOccasionId()!,
        groupTitleByUserId,
      );
      if (result.status == GroupCommandStatus.rejected) {
        throw StateError('Group assignment import was rejected');
      }
      if (result.status == GroupCommandStatus.conflict) {
        throw StateError('Group assignment import conflicted');
      }
      return;
    }

    await _supabase.rpc('import_user_group_assignments', params: {
      'p_occasion_id': RightsService.currentOccasionId()!,
      'p_assignments': groupTitleByUserId.entries
          .map((entry) => {
                'user_id': entry.key,
                'group_title': entry.value,
              })
          .toList(),
    });
  }

  static Future<void> deleteUserGroupInfo(UserGroupInfoModel model) async {
    if (ClientSyncRuntime.isV1Selected) {
      final result =
          await _commands.delete(RightsService.currentOccasionId()!, model);
      if (result.status == GroupCommandStatus.conflict) {
        throw StateError('Group was changed by another editor');
      }
      if (result.status == GroupCommandStatus.rejected) {
        throw StateError('Group delete was rejected');
      }
      return;
    }
    await _supabase
        .from(Tb.user_groups.table)
        .delete()
        .eq(Tb.user_groups.group, model.id!);
    await _supabase
        .from(Tb.user_group_info.table)
        .delete()
        .eq(Tb.user_group_info.id, model.id!);

    if (model.place?.isPrivateGroupLocation ?? false) {
      await DbPlaces.deleteLegacyPrivateGroupPlace(model.place!);
    }
  }

  static Future<List<int>> getCorrectlyGuessedCheckpoints() async {
    if (ClientSyncRuntime.isV1Selected) {
      final groups = await ClientSyncProjection.groups();
      final gameGroup = groups.firstWhereOrNull(
        (group) => group.type == InformationModel.gameType,
      );
      return List<int>.from(
        (gameGroup?.data?['game'] as List? ?? const [])
            .map((entry) => (entry as Map)['check_point'])
            .whereType<num>()
            .map((value) => value.toInt()),
      );
    }
    var response = await _supabase.rpc('game_get_correctly_guessed_checkpoints',
        params: {'oc': RightsService.currentOccasionId()});
    if (response == null || response["code"] != 200) {
      return [];
    }
    List<int> checkPoints =
        List<int>.from(response["data"].map((entry) => entry['check_point']));

    return checkPoints;
  }

  static Future<Set<UserGroupInfoModel>> getUserGroups() async {
    if (ClientSyncRuntime.isV1Selected) {
      return (await ClientSyncProjection.groups()).toSet();
    }
    final response = await _supabase.rpc('get_user_groups',
        params: {'p_occasion_id': RightsService.currentOccasionId()!});
    return Set.from(response.values.map((groupJson) =>
        UserGroupInfoModel.fromJson(groupJson as Map<String, dynamic>)));
  }
}

class UserGroupsEditorData {
  final List<UserGroupInfoModel> groups;
  final List<PlaceModel> places;

  const UserGroupsEditorData({
    required this.groups,
    required this.places,
  });
}
