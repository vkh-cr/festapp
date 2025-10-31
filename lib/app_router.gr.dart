// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouterGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:auto_route/auto_route.dart' as _i34;
import 'package:collection/collection.dart' as _i36;
import 'package:flutter/foundation.dart' as _i37;
import 'package:flutter/material.dart' as _i35;
import 'package:fstapp/components/forms/views/form_page.dart' deferred as _i6;
import 'package:fstapp/components/forms/views/forms_tab.dart' deferred as _i7;
import 'package:fstapp/components/forms/views/reservation_page.dart'
    deferred as _i20;
import 'package:fstapp/components/inventory/views/inventory_pools_tab.dart'
    deferred as _i13;
import 'package:fstapp/data_models/place_model.dart' as _i38;
import 'package:fstapp/pages/occasion/check_page.dart' deferred as _i2;
import 'package:fstapp/pages/occasion/event_edit_page.dart' deferred as _i3;
import 'package:fstapp/pages/occasion/event_page.dart' deferred as _i4;
import 'package:fstapp/pages/occasion/game_page.dart' deferred as _i8;
import 'package:fstapp/pages/occasion/info_page.dart' deferred as _i10;
import 'package:fstapp/pages/occasion/map_page.dart' deferred as _i15;
import 'package:fstapp/pages/occasion/my_schedule_page.dart' deferred as _i16;
import 'package:fstapp/pages/occasion/news_form_page.dart' deferred as _i17;
import 'package:fstapp/pages/occasion/news_page.dart' deferred as _i18;
import 'package:fstapp/pages/occasion/occasion_home_page.dart' deferred as _i19;
import 'package:fstapp/pages/occasion/scan_page.dart' deferred as _i22;
import 'package:fstapp/pages/occasion/schedule_basic_page.dart'
    deferred as _i23;
import 'package:fstapp/pages/occasion/schedule_navigation_screen.dart'
    deferred as _i24;
import 'package:fstapp/pages/occasion/schedule_page.dart' deferred as _i25;
import 'package:fstapp/pages/occasion/settings_page.dart' deferred as _i26;
import 'package:fstapp/pages/occasion/song_page.dart' deferred as _i28;
import 'package:fstapp/pages/occasion/timetable_page.dart' deferred as _i29;
import 'package:fstapp/pages/occasion/user_page.dart' deferred as _i32;
import 'package:fstapp/pages/occasion/user_stay_page.dart' deferred as _i33;
import 'package:fstapp/pages/occasionAdmin/admin_page.dart' deferred as _i1;
import 'package:fstapp/pages/unit/unit_admin_page.dart' deferred as _i30;
import 'package:fstapp/pages/unit/unit_page.dart' deferred as _i31;
import 'package:fstapp/pages/user/forgot_password_page.dart' deferred as _i5;
import 'package:fstapp/pages/user/login_page.dart' deferred as _i14;
import 'package:fstapp/pages/user/reset_password_page.dart' deferred as _i21;
import 'package:fstapp/pages/user/signup_page.dart' deferred as _i27;
import 'package:fstapp/pages/utility/html_editor_page.dart' deferred as _i9;
import 'package:fstapp/pages/utility/install_page.dart' deferred as _i11;
import 'package:fstapp/pages/utility/instance_install_page.dart'
    deferred as _i12;

/// generated route for
/// [_i1.AdminPage]
class AdminRoute extends _i34.PageRouteInfo<void> {
  const AdminRoute({List<_i34.PageRouteInfo>? children})
      : super(AdminRoute.name, initialChildren: children);

  static const String name = 'AdminRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(_i1.loadLibrary, () => _i1.AdminPage());
    },
  );
}

/// generated route for
/// [_i2.CheckPage]
class CheckRoute extends _i34.PageRouteInfo<CheckRouteArgs> {
  CheckRoute({
    required int id,
    _i35.Key? key,
    List<_i34.PageRouteInfo>? children,
  }) : super(
          CheckRoute.name,
          args: CheckRouteArgs(id: id, key: key),
          rawPathParams: {'id': id},
          initialChildren: children,
        );

  static const String name = 'CheckRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<CheckRouteArgs>(
        orElse: () => CheckRouteArgs(id: pathParams.getInt('id')),
      );
      return _i34.DeferredWidget(
        _i2.loadLibrary,
        () => _i2.CheckPage(id: args.id, key: args.key),
      );
    },
  );
}

class CheckRouteArgs {
  const CheckRouteArgs({required this.id, this.key});

  final int id;

  final _i35.Key? key;

  @override
  String toString() {
    return 'CheckRouteArgs{id: $id, key: $key}';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! CheckRouteArgs) return false;
    return id == other.id && key == other.key;
  }

  @override
  int get hashCode => id.hashCode ^ key.hashCode;
}

/// generated route for
/// [_i3.EventEditPage]
class EventEditRoute extends _i34.PageRouteInfo<EventEditRouteArgs> {
  EventEditRoute({_i35.Key? key, int? id, List<_i34.PageRouteInfo>? children})
      : super(
          EventEditRoute.name,
          args: EventEditRouteArgs(key: key, id: id),
          rawPathParams: {'id': id},
          initialChildren: children,
        );

  static const String name = 'EventEditRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<EventEditRouteArgs>(
        orElse: () => EventEditRouteArgs(id: pathParams.optInt('id')),
      );
      return _i34.DeferredWidget(
        _i3.loadLibrary,
        () => _i3.EventEditPage(key: args.key, id: args.id),
      );
    },
  );
}

class EventEditRouteArgs {
  const EventEditRouteArgs({this.key, this.id});

  final _i35.Key? key;

  final int? id;

  @override
  String toString() {
    return 'EventEditRouteArgs{key: $key, id: $id}';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! EventEditRouteArgs) return false;
    return key == other.key && id == other.id;
  }

  @override
  int get hashCode => key.hashCode ^ id.hashCode;
}

/// generated route for
/// [_i4.EventPage]
class EventRoute extends _i34.PageRouteInfo<EventRouteArgs> {
  EventRoute({int? id, _i35.Key? key, List<_i34.PageRouteInfo>? children})
      : super(
          EventRoute.name,
          args: EventRouteArgs(id: id, key: key),
          rawPathParams: {'id': id},
          initialChildren: children,
        );

  static const String name = 'EventRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<EventRouteArgs>(
        orElse: () => EventRouteArgs(id: pathParams.optInt('id')),
      );
      return _i34.DeferredWidget(
        _i4.loadLibrary,
        () => _i4.EventPage(id: args.id, key: args.key),
      );
    },
  );
}

class EventRouteArgs {
  const EventRouteArgs({this.id, this.key});

  final int? id;

  final _i35.Key? key;

  @override
  String toString() {
    return 'EventRouteArgs{id: $id, key: $key}';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! EventRouteArgs) return false;
    return id == other.id && key == other.key;
  }

  @override
  int get hashCode => id.hashCode ^ key.hashCode;
}

/// generated route for
/// [_i5.ForgotPasswordPage]
class ForgotPasswordRoute extends _i34.PageRouteInfo<void> {
  const ForgotPasswordRoute({List<_i34.PageRouteInfo>? children})
      : super(ForgotPasswordRoute.name, initialChildren: children);

  static const String name = 'ForgotPasswordRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(
        _i5.loadLibrary,
        () => _i5.ForgotPasswordPage(),
      );
    },
  );
}

/// generated route for
/// [_i6.FormPage]
class FormRoute extends _i34.PageRouteInfo<FormRouteArgs> {
  FormRoute({
    _i35.Key? key,
    String? formLink,
    List<_i34.PageRouteInfo>? children,
  }) : super(
          FormRoute.name,
          args: FormRouteArgs(key: key, formLink: formLink),
          rawPathParams: {'formLink': formLink},
          initialChildren: children,
        );

  static const String name = 'FormRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<FormRouteArgs>(
        orElse: () => FormRouteArgs(formLink: pathParams.optString('formLink')),
      );
      return _i34.DeferredWidget(
        _i6.loadLibrary,
        () => _i6.FormPage(key: args.key, formLink: args.formLink),
      );
    },
  );
}

class FormRouteArgs {
  const FormRouteArgs({this.key, this.formLink});

  final _i35.Key? key;

  final String? formLink;

  @override
  String toString() {
    return 'FormRouteArgs{key: $key, formLink: $formLink}';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! FormRouteArgs) return false;
    return key == other.key && formLink == other.formLink;
  }

  @override
  int get hashCode => key.hashCode ^ formLink.hashCode;
}

/// generated route for
/// [_i7.FormsTab]
class FormsTab extends _i34.PageRouteInfo<void> {
  const FormsTab({List<_i34.PageRouteInfo>? children})
      : super(FormsTab.name, initialChildren: children);

  static const String name = 'FormsTab';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(_i7.loadLibrary, () => _i7.FormsTab());
    },
  );
}

/// generated route for
/// [_i8.GamePage]
class GameRoute extends _i34.PageRouteInfo<void> {
  const GameRoute({List<_i34.PageRouteInfo>? children})
      : super(GameRoute.name, initialChildren: children);

  static const String name = 'GameRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(_i8.loadLibrary, () => _i8.GamePage());
    },
  );
}

/// generated route for
/// [_i9.HtmlEditorPage]
class HtmlEditorRoute extends _i34.PageRouteInfo<HtmlEditorRouteArgs> {
  HtmlEditorRoute({
    Map<String, dynamic>? content,
    int? occasionId,
    _i35.Key? key,
    List<_i34.PageRouteInfo>? children,
  }) : super(
          HtmlEditorRoute.name,
          args: HtmlEditorRouteArgs(
            content: content,
            occasionId: occasionId,
            key: key,
          ),
          initialChildren: children,
        );

  static const String name = 'HtmlEditorRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      final args = data.argsAs<HtmlEditorRouteArgs>(
        orElse: () => const HtmlEditorRouteArgs(),
      );
      return _i34.DeferredWidget(
        _i9.loadLibrary,
        () => _i9.HtmlEditorPage(
          content: args.content,
          occasionId: args.occasionId,
          key: args.key,
        ),
      );
    },
  );
}

class HtmlEditorRouteArgs {
  const HtmlEditorRouteArgs({this.content, this.occasionId, this.key});

  final Map<String, dynamic>? content;

  final int? occasionId;

  final _i35.Key? key;

  @override
  String toString() {
    return 'HtmlEditorRouteArgs{content: $content, occasionId: $occasionId, key: $key}';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! HtmlEditorRouteArgs) return false;
    return const _i36.MapEquality().equals(content, other.content) &&
        occasionId == other.occasionId &&
        key == other.key;
  }

  @override
  int get hashCode =>
      const _i36.MapEquality().hash(content) ^
      occasionId.hashCode ^
      key.hashCode;
}

/// generated route for
/// [_i10.InfoPage]
class InfoRoute extends _i34.PageRouteInfo<InfoRouteArgs> {
  InfoRoute({int? id, _i37.Key? key, List<_i34.PageRouteInfo>? children})
      : super(
          InfoRoute.name,
          args: InfoRouteArgs(id: id, key: key),
          rawPathParams: {'id': id},
          initialChildren: children,
        );

  static const String name = 'InfoRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<InfoRouteArgs>(
        orElse: () => InfoRouteArgs(id: pathParams.optInt('id')),
      );
      return _i34.DeferredWidget(
        _i10.loadLibrary,
        () => _i10.InfoPage(id: args.id, key: args.key),
      );
    },
  );
}

class InfoRouteArgs {
  const InfoRouteArgs({this.id, this.key});

  final int? id;

  final _i37.Key? key;

  @override
  String toString() {
    return 'InfoRouteArgs{id: $id, key: $key}';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! InfoRouteArgs) return false;
    return id == other.id && key == other.key;
  }

  @override
  int get hashCode => id.hashCode ^ key.hashCode;
}

/// generated route for
/// [_i11.InstallPage]
class InstallRoute extends _i34.PageRouteInfo<void> {
  const InstallRoute({List<_i34.PageRouteInfo>? children})
      : super(InstallRoute.name, initialChildren: children);

  static const String name = 'InstallRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(_i11.loadLibrary, () => _i11.InstallPage());
    },
  );
}

/// generated route for
/// [_i12.InstanceInstallPage]
class InstanceInstallRoute extends _i34.PageRouteInfo<void> {
  const InstanceInstallRoute({List<_i34.PageRouteInfo>? children})
      : super(InstanceInstallRoute.name, initialChildren: children);

  static const String name = 'InstanceInstallRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(
        _i12.loadLibrary,
        () => _i12.InstanceInstallPage(),
      );
    },
  );
}

/// generated route for
/// [_i13.InventoryPoolsTab]
class InventoryPoolsTab extends _i34.PageRouteInfo<void> {
  const InventoryPoolsTab({List<_i34.PageRouteInfo>? children})
      : super(InventoryPoolsTab.name, initialChildren: children);

  static const String name = 'InventoryPoolsTab';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(
        _i13.loadLibrary,
        () => _i13.InventoryPoolsTab(),
      );
    },
  );
}

/// generated route for
/// [_i14.LoginPage]
class LoginRoute extends _i34.PageRouteInfo<void> {
  const LoginRoute({List<_i34.PageRouteInfo>? children})
      : super(LoginRoute.name, initialChildren: children);

  static const String name = 'LoginRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(_i14.loadLibrary, () => _i14.LoginPage());
    },
  );
}

/// generated route for
/// [_i15.MapPage]
class MapRoute extends _i34.PageRouteInfo<MapRouteArgs> {
  MapRoute({
    int? id,
    _i38.PlaceModel? place,
    _i37.Key? key,
    List<_i34.PageRouteInfo>? children,
  }) : super(
          MapRoute.name,
          args: MapRouteArgs(id: id, place: place, key: key),
          rawPathParams: {'id': id},
          initialChildren: children,
        );

  static const String name = 'MapRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<MapRouteArgs>(
        orElse: () => MapRouteArgs(id: pathParams.optInt('id')),
      );
      return _i34.DeferredWidget(
        _i15.loadLibrary,
        () => _i15.MapPage(id: args.id, place: args.place, key: args.key),
      );
    },
  );
}

class MapRouteArgs {
  const MapRouteArgs({this.id, this.place, this.key});

  final int? id;

  final _i38.PlaceModel? place;

  final _i37.Key? key;

  @override
  String toString() {
    return 'MapRouteArgs{id: $id, place: $place, key: $key}';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! MapRouteArgs) return false;
    return id == other.id && place == other.place && key == other.key;
  }

  @override
  int get hashCode => id.hashCode ^ place.hashCode ^ key.hashCode;
}

/// generated route for
/// [_i16.MySchedulePage]
class MyScheduleRoute extends _i34.PageRouteInfo<void> {
  const MyScheduleRoute({List<_i34.PageRouteInfo>? children})
      : super(MyScheduleRoute.name, initialChildren: children);

  static const String name = 'MyScheduleRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(_i16.loadLibrary, () => _i16.MySchedulePage());
    },
  );
}

/// generated route for
/// [_i17.NewsFormPage]
class NewsFormRoute extends _i34.PageRouteInfo<void> {
  const NewsFormRoute({List<_i34.PageRouteInfo>? children})
      : super(NewsFormRoute.name, initialChildren: children);

  static const String name = 'NewsFormRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(_i17.loadLibrary, () => _i17.NewsFormPage());
    },
  );
}

/// generated route for
/// [_i18.NewsPage]
class NewsRoute extends _i34.PageRouteInfo<NewsRouteArgs> {
  NewsRoute({
    _i35.Key? key,
    _i35.VoidCallback? onSetAsRead,
    List<_i34.PageRouteInfo>? children,
  }) : super(
          NewsRoute.name,
          args: NewsRouteArgs(key: key, onSetAsRead: onSetAsRead),
          initialChildren: children,
        );

  static const String name = 'NewsRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      final args = data.argsAs<NewsRouteArgs>(
        orElse: () => const NewsRouteArgs(),
      );
      return _i34.DeferredWidget(
        _i18.loadLibrary,
        () => _i18.NewsPage(key: args.key, onSetAsRead: args.onSetAsRead),
      );
    },
  );
}

class NewsRouteArgs {
  const NewsRouteArgs({this.key, this.onSetAsRead});

  final _i35.Key? key;

  final _i35.VoidCallback? onSetAsRead;

  @override
  String toString() {
    return 'NewsRouteArgs{key: $key, onSetAsRead: $onSetAsRead}';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! NewsRouteArgs) return false;
    return key == other.key && onSetAsRead == other.onSetAsRead;
  }

  @override
  int get hashCode => key.hashCode ^ onSetAsRead.hashCode;
}

/// generated route for
/// [_i19.OccasionHomePage]
class OccasionHomeRoute extends _i34.PageRouteInfo<void> {
  const OccasionHomeRoute({List<_i34.PageRouteInfo>? children})
      : super(OccasionHomeRoute.name, initialChildren: children);

  static const String name = 'OccasionHomeRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(
        _i19.loadLibrary,
        () => _i19.OccasionHomePage(),
      );
    },
  );
}

/// generated route for
/// [_i20.ReservationsPage]
class ReservationsRoute extends _i34.PageRouteInfo<ReservationsRouteArgs> {
  ReservationsRoute({_i35.Key? key, List<_i34.PageRouteInfo>? children})
      : super(
          ReservationsRoute.name,
          args: ReservationsRouteArgs(key: key),
          initialChildren: children,
        );

  static const String name = 'ReservationsRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      final args = data.argsAs<ReservationsRouteArgs>(
        orElse: () => const ReservationsRouteArgs(),
      );
      return _i34.DeferredWidget(
        _i20.loadLibrary,
        () => _i20.ReservationsPage(key: args.key),
      );
    },
  );
}

class ReservationsRouteArgs {
  const ReservationsRouteArgs({this.key});

  final _i35.Key? key;

  @override
  String toString() {
    return 'ReservationsRouteArgs{key: $key}';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! ReservationsRouteArgs) return false;
    return key == other.key;
  }

  @override
  int get hashCode => key.hashCode;
}

/// generated route for
/// [_i21.ResetPasswordPage]
class ResetPasswordRoute extends _i34.PageRouteInfo<void> {
  const ResetPasswordRoute({List<_i34.PageRouteInfo>? children})
      : super(ResetPasswordRoute.name, initialChildren: children);

  static const String name = 'ResetPasswordRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(
        _i21.loadLibrary,
        () => _i21.ResetPasswordPage(),
      );
    },
  );
}

/// generated route for
/// [_i22.ScanPage]
class ScanRoute extends _i34.PageRouteInfo<ScanRouteArgs> {
  ScanRoute({
    String? scanCode,
    _i37.Key? key,
    List<_i34.PageRouteInfo>? children,
  }) : super(
          ScanRoute.name,
          args: ScanRouteArgs(scanCode: scanCode, key: key),
          rawPathParams: {'scanCode': scanCode},
          initialChildren: children,
        );

  static const String name = 'ScanRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<ScanRouteArgs>(
        orElse: () => ScanRouteArgs(scanCode: pathParams.optString('scanCode')),
      );
      return _i34.DeferredWidget(
        _i22.loadLibrary,
        () => _i22.ScanPage(scanCode: args.scanCode, key: args.key),
      );
    },
  );
}

class ScanRouteArgs {
  const ScanRouteArgs({this.scanCode, this.key});

  final String? scanCode;

  final _i37.Key? key;

  @override
  String toString() {
    return 'ScanRouteArgs{scanCode: $scanCode, key: $key}';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! ScanRouteArgs) return false;
    return scanCode == other.scanCode && key == other.key;
  }

  @override
  int get hashCode => scanCode.hashCode ^ key.hashCode;
}

/// generated route for
/// [_i23.ScheduleBasicPage]
class ScheduleBasicRoute extends _i34.PageRouteInfo<void> {
  const ScheduleBasicRoute({List<_i34.PageRouteInfo>? children})
      : super(ScheduleBasicRoute.name, initialChildren: children);

  static const String name = 'ScheduleBasicRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(
        _i23.loadLibrary,
        () => _i23.ScheduleBasicPage(),
      );
    },
  );
}

/// generated route for
/// [_i24.ScheduleNavigationPage]
class ScheduleNavigationRoute extends _i34.PageRouteInfo<void> {
  const ScheduleNavigationRoute({List<_i34.PageRouteInfo>? children})
      : super(ScheduleNavigationRoute.name, initialChildren: children);

  static const String name = 'ScheduleNavigationRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(
        _i24.loadLibrary,
        () => _i24.ScheduleNavigationPage(),
      );
    },
  );
}

/// generated route for
/// [_i25.SchedulePage]
class ScheduleRoute extends _i34.PageRouteInfo<void> {
  const ScheduleRoute({List<_i34.PageRouteInfo>? children})
      : super(ScheduleRoute.name, initialChildren: children);

  static const String name = 'ScheduleRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(_i25.loadLibrary, () => _i25.SchedulePage());
    },
  );
}

/// generated route for
/// [_i26.SettingsPage]
class SettingsRoute extends _i34.PageRouteInfo<void> {
  const SettingsRoute({List<_i34.PageRouteInfo>? children})
      : super(SettingsRoute.name, initialChildren: children);

  static const String name = 'SettingsRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(_i26.loadLibrary, () => _i26.SettingsPage());
    },
  );
}

/// generated route for
/// [_i27.SignupPage]
class SignupRoute extends _i34.PageRouteInfo<void> {
  const SignupRoute({List<_i34.PageRouteInfo>? children})
      : super(SignupRoute.name, initialChildren: children);

  static const String name = 'SignupRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(_i27.loadLibrary, () => _i27.SignupPage());
    },
  );
}

/// generated route for
/// [_i28.SongbookPage]
class SongbookRoute extends _i34.PageRouteInfo<void> {
  const SongbookRoute({List<_i34.PageRouteInfo>? children})
      : super(SongbookRoute.name, initialChildren: children);

  static const String name = 'SongbookRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(_i28.loadLibrary, () => _i28.SongbookPage());
    },
  );
}

/// generated route for
/// [_i29.TimetablePage]
class TimetableRoute extends _i34.PageRouteInfo<void> {
  const TimetableRoute({List<_i34.PageRouteInfo>? children})
      : super(TimetableRoute.name, initialChildren: children);

  static const String name = 'TimetableRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(_i29.loadLibrary, () => _i29.TimetablePage());
    },
  );
}

/// generated route for
/// [_i30.UnitAdminPage]
class UnitAdminRoute extends _i34.PageRouteInfo<UnitAdminRouteArgs> {
  UnitAdminRoute({
    required int? id,
    _i35.Key? key,
    List<_i34.PageRouteInfo>? children,
  }) : super(
          UnitAdminRoute.name,
          args: UnitAdminRouteArgs(id: id, key: key),
          rawPathParams: {'id': id},
          initialChildren: children,
        );

  static const String name = 'UnitAdminRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<UnitAdminRouteArgs>(
        orElse: () => UnitAdminRouteArgs(id: pathParams.optInt('id')),
      );
      return _i34.DeferredWidget(
        _i30.loadLibrary,
        () => _i30.UnitAdminPage(id: args.id, key: args.key),
      );
    },
  );
}

class UnitAdminRouteArgs {
  const UnitAdminRouteArgs({required this.id, this.key});

  final int? id;

  final _i35.Key? key;

  @override
  String toString() {
    return 'UnitAdminRouteArgs{id: $id, key: $key}';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! UnitAdminRouteArgs) return false;
    return id == other.id && key == other.key;
  }

  @override
  int get hashCode => id.hashCode ^ key.hashCode;
}

/// generated route for
/// [_i31.UnitPage]
class UnitRoute extends _i34.PageRouteInfo<UnitRouteArgs> {
  UnitRoute({int? id, _i35.Key? key, List<_i34.PageRouteInfo>? children})
      : super(
          UnitRoute.name,
          args: UnitRouteArgs(id: id, key: key),
          rawPathParams: {'id': id},
          initialChildren: children,
        );

  static const String name = 'UnitRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<UnitRouteArgs>(
        orElse: () => UnitRouteArgs(id: pathParams.optInt('id')),
      );
      return _i34.DeferredWidget(
        _i31.loadLibrary,
        () => _i31.UnitPage(id: args.id, key: args.key),
      );
    },
  );
}

class UnitRouteArgs {
  const UnitRouteArgs({this.id, this.key});

  final int? id;

  final _i35.Key? key;

  @override
  String toString() {
    return 'UnitRouteArgs{id: $id, key: $key}';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! UnitRouteArgs) return false;
    return id == other.id && key == other.key;
  }

  @override
  int get hashCode => id.hashCode ^ key.hashCode;
}

/// generated route for
/// [_i32.UserPage]
class UserRoute extends _i34.PageRouteInfo<void> {
  const UserRoute({List<_i34.PageRouteInfo>? children})
      : super(UserRoute.name, initialChildren: children);

  static const String name = 'UserRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(_i32.loadLibrary, () => _i32.UserPage());
    },
  );
}

/// generated route for
/// [_i33.UserStayPage]
class UserStayRoute extends _i34.PageRouteInfo<void> {
  const UserStayRoute({List<_i34.PageRouteInfo>? children})
      : super(UserStayRoute.name, initialChildren: children);

  static const String name = 'UserStayRoute';

  static _i34.PageInfo page = _i34.PageInfo(
    name,
    builder: (data) {
      return _i34.DeferredWidget(_i33.loadLibrary, () => _i33.UserStayPage());
    },
  );
}
