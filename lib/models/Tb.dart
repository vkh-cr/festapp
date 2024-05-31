class Tb {
  static OccasionsTb occasions = const OccasionsTb();
  static OccasionUsersTb occasion_users = const OccasionUsersTb();
  static NewsTb news = const NewsTb();
  static UserInfoTb user_info = const UserInfoTb();
  static UserInfoPublicTb user_info_public = const UserInfoPublicTb();
  static UserNewsViewsTb user_news_views = const UserNewsViewsTb();
  static UserNewsTb user_news = const UserNewsTb();
  static InformationTb information = const InformationTb();
  static EventsTb events = const EventsTb();
  static EventUserTb event_users = const EventUserTb();
  static EventUsersSavedTb event_users_saved = const EventUsersSavedTb();
  static EventGroupsTb event_groups = const EventGroupsTb();
  static ExclusiveGroupTb exclusive_groups = const ExclusiveGroupTb();
  static ExclusiveEventsTb exclusive_events = const ExclusiveEventsTb();
  static PlacesTb places = const PlacesTb();
  static UserGroupsTb user_groups = const UserGroupsTb();
  static UserGroupInfoTb user_group_info = const UserGroupInfoTb();
  static NotificationRecordsTb notification_records = const NotificationRecordsTb();
  static LogNotificationsTb log_notifications = const LogNotificationsTb();
  static AccommodationPlacesTb accommodation_places = const AccommodationPlacesTb();
  static GlobalSettingsTb global_settings = const GlobalSettingsTb();
  static EventRolesTb event_roles = const EventRolesTb();
  static RoleInfoTb role_info = const RoleInfoTb();
  static UserCompanionsTb user_companions = const UserCompanionsTb();
}
class OccasionsTb{
  const OccasionsTb();
  String get table => "occasions";
  String get id => "id";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get is_hidden => "is_hidden";
  String get start_time => "start_time";
  String get end_time => "end_time";
  String get is_open => "is_open";
  String get link => "link";
  String get title => "title";
  String get data => "data";
  String get data_defaultMapZoom => "defaultMapZoom";
  String get data_defaultMapLocation => "defaultMapLocation";
  String get data_events_registration_start => "events_registration_start";
  String get data_max_companions => "max_companions";
}
class OccasionUsersTb{
  const OccasionUsersTb();
  String get table => "occasion_users";
  String get occasion => "occasion";
  String get created_at => "created_at";
  String get user => "user";
  String get is_editor => "is_editor";
  String get is_manager => "is_manager";
  String get is_approved => "is_approved";
  String get is_approver => "is_approver";
  String get role => "role";
  String get data => "data";
  String get data_email => "email";
  String get data_name => "name";
  String get data_surname => "surname";
  String get data_sex => "sex";
  String get data_phone => "phone";
  String get data_accommodation => "accommodation";
  String get data_birthDate => "birthDate";
  String get data_isInvited => "is_invited";
}
class NewsTb{
  const NewsTb();
  String get table => "news";
  String get id => "id";
  String get occasion => "occasion";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get created_by => "created_by";
  String get message => "message";
}
class UserNewsTb{
  const UserNewsTb();
  String get table => "user_news";
  String get created_at => "created_at";
  String get news_id => "news_id";
  String get user => "user";
  String get message => "message";
}
class UserInfoTb{
  const UserInfoTb();
  String get table => "user_info";
  String get id => "id";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get email_readonly => "email_readonly";
  String get name => "name";
  String get surname => "surname";
  String get sex => "sex";
  String get accommodation => "accommodation";
  String get phone => "phone";
  String get role => "role";
  String get birth_date => "birth_date";
  String get is_editor_readonly => "is_editor_readonly";
  String get is_admin_readonly => "is_admin_readonly";
  String get data => "data";
}
class UserInfoPublicTb{
  const UserInfoPublicTb();
  String get table => "user_info_public";
  String get id => "id";
  String get name => "name";
  String get surname => "surname";
  String get sex => "sex";
}
class UserNewsViewsTb{
  const UserNewsViewsTb();
  String get table => "user_news_views";
}
class RoleInfoTb{
  const RoleInfoTb();
  String get table => "role_info";
  String get id => "id";
  String get title => "title";
  String get occasion => "occasion";
}
class EventRolesTb{
  const EventRolesTb();
  String get table => "event_roles";
  String get event => "event";
  String get role => "role";
}
class InformationTb{
  const InformationTb();
  String get table => "information";
  String get id => "id";
  String get occasion => "occasion";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get is_hidden => "is_hidden";
  String get title => "title";
  String get type => "type";
  String get description => "description";
  String get order => "order";
}
class EventsTb{
  const EventsTb();
  String get table => "events";
  String get id => "id";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get is_hidden => "is_hidden";
  String get title => "title";
  String get start_time => "start_time";
  String get end_time => "end_time";
  String get max_participants => "max_participants";
  String get description => "description";
  String get place => "place";
  String get split_for_men_women => "split_for_men_women";
  String get is_group_event => "is_group_event";
  String get type => "type";
}
class EventUserTb{
  const EventUserTb();
  String get table => "event_users";
  String get created_at => "created_at";
  String get event => "event";
  String get user => "user";
}
class EventUsersSavedTb{
  const EventUsersSavedTb();
  String get table => "event_users_saved";
  String get created_at => "created_at";
  String get event => "event";
  String get user => "user";
}
class EventGroupsTb{
  const EventGroupsTb();
  String get table => "event_groups";
  String get event_parent => "event_parent";
  String get event_child => "event_child";
}
class ExclusiveGroupTb{
  const ExclusiveGroupTb();
  String get table => "exclusive_groups";
  String get id => "id";
  String get title => "title";
}
class ExclusiveEventsTb{
  const ExclusiveEventsTb();
  String get table => "exclusive_events";
  String get event => "event";
  String get group => "group";
}
class PlacesTb{
  const PlacesTb();
  String get table => "places";
  String get id => "id";
  String get occasion => "occasion";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get is_hidden => "is_hidden";
  String get title => "title";
  String get description => "description";
  String get type => "type";
  String get coordinates => "coordinates";
  String get order => "order";
}
class UserGroupInfoTb{
  const UserGroupInfoTb();
  String get table => "user_group_info";
  String get id => "id";
  String get occasion => "occasion";
  String get title => "title";
  String get leader => "leader";
  String get place => "place";
  String get description => "description";
}
class UserGroupsTb{
  const UserGroupsTb();
  String get table => "user_groups";
  String get user => "user";
  String get group => "group";
}
//todo delete
class NotificationRecordsTb{
  const NotificationRecordsTb();
  String get table => "notification_records";
  String get id => "id";
  String get created_at => "created_at";
  String get user_id => "user_id";
  String get heading => "heading";
  String get content => "content";
}
class LogNotificationsTb{
  const LogNotificationsTb();
  String get table => "log_notifications";
  String get id => "id";
  String get occasion => "occasion";
  String get created_at => "created_at";
  String get user_id => "user_id";
  String get heading => "heading";
  String get content => "content";
  String get to => "to";
}
//todo migrate and delete
class AccommodationPlacesTb{
  const AccommodationPlacesTb();
  String get table => "accommodation_places";
  String get place => "place";
  String get accommodation_type => "accommodation_type";
}
//todo delete
class GlobalSettingsTb{
  const GlobalSettingsTb();
  String get table => "global_settings";
  String get id => "id";
  String get json => "json";
}
class UserCompanionsTb{
  const UserCompanionsTb();
  String get table => "user_companions";
  String get user => "user";
  String get companion => "companion";
}
