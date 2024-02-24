class Tb {
  static NewsTb news = const NewsTb();
  static UserInfoTb user_info = const UserInfoTb();
  static UserInfoPublicTb user_info_public = const UserInfoPublicTb();
  static UserNewsViewsTb user_news_views = const UserNewsViewsTb();
  static UserNewsTb user_news = const UserNewsTb();
  static InformationTb information = const InformationTb();
  static EventsTb events = const EventsTb();
  static EventUserTb event_users = const EventUserTb();
  static EventGroupsTb event_groups = const EventGroupsTb();
  static ExclusiveGroupTb exclusive_groups = const ExclusiveGroupTb();
  static ExclusiveEventsTb exclusive_events = const ExclusiveEventsTb();
  static PlacesTb places = const PlacesTb();
}
class NewsTb{
  const NewsTb();
  String get table => "news";
  String get id => "id";
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
}
class UserInfoPublicTb{
  const UserInfoPublicTb();
  String get table => "user_info_public";
  String get name => "name";
  String get surname => "surname";
}
class UserNewsViewsTb{
  const UserNewsViewsTb();
  String get table => "user_news_views";
}
class InformationTb{
  const InformationTb();
  String get table => "information";
  String get id => "id";
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
}
class EventUserTb{
  const EventUserTb();
  String get table => "event_users";
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
  String get id => "event";
  String get title => "group";
}
class PlacesTb{
  const PlacesTb();
  String get table => "places";
  String get id => "id";
  String get created_at => "created_at";
  String get updated_at => "updated_at";
  String get is_hidden => "is_hidden";
  String get title => "title";
  String get description => "description";
  String get type => "type";
  String get coordinates => "coordinates";
}
