// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouterGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:auto_route/auto_route.dart' as _i29;
import 'package:flutter/foundation.dart' as _i31;
import 'package:flutter/material.dart' as _i30;
import 'package:fstapp/dataModels/PlaceModel.dart' as _i32;
import 'package:fstapp/pages/form/FormEditPage.dart' deferred as _i6;
import 'package:fstapp/pages/form/FormPage.dart' deferred as _i7;
import 'package:fstapp/pages/occasion/CheckPage.dart' deferred as _i2;
import 'package:fstapp/pages/occasion/EventEditPage.dart' deferred as _i3;
import 'package:fstapp/pages/occasion/EventPage.dart' deferred as _i4;
import 'package:fstapp/pages/occasion/GamePage.dart' deferred as _i8;
import 'package:fstapp/pages/occasion/InfoPage.dart' deferred as _i10;
import 'package:fstapp/pages/occasion/InstallPage.dart' deferred as _i11;
import 'package:fstapp/pages/occasion/MapPage.dart' deferred as _i13;
import 'package:fstapp/pages/occasion/MySchedulePage.dart' deferred as _i14;
import 'package:fstapp/pages/occasion/NewsFormPage.dart' deferred as _i15;
import 'package:fstapp/pages/occasion/NewsPage.dart' deferred as _i16;
import 'package:fstapp/pages/occasion/OccasionHomePage.dart' deferred as _i17;
import 'package:fstapp/pages/occasion/ScanPage.dart' deferred as _i19;
import 'package:fstapp/pages/occasion/ScheduleNavigationScreen.dart'
    deferred as _i20;
import 'package:fstapp/pages/occasion/SchedulePage.dart' deferred as _i21;
import 'package:fstapp/pages/occasion/SettingsPage.dart' deferred as _i22;
import 'package:fstapp/pages/occasion/SongPage.dart' deferred as _i24;
import 'package:fstapp/pages/occasion/TimetablePage.dart' deferred as _i25;
import 'package:fstapp/pages/occasion/UserPage.dart' deferred as _i28;
import 'package:fstapp/pages/occasionAdmin/AdminPage.dart' deferred as _i1;
import 'package:fstapp/pages/unit/UnitAdminPage.dart' deferred as _i26;
import 'package:fstapp/pages/unit/UnitPage.dart' deferred as _i27;
import 'package:fstapp/pages/user/ForgotPasswordPage.dart' deferred as _i5;
import 'package:fstapp/pages/user/LoginPage.dart' deferred as _i12;
import 'package:fstapp/pages/user/SignupPage.dart' deferred as _i23;
import 'package:fstapp/pages/user/SignupPasswordPage.dart' deferred as _i18;
import 'package:fstapp/pages/utility/HtmlEditorPage.dart' deferred as _i9;

/// generated route for
/// [_i1.AdminPage]
class AdminRoute extends _i29.PageRouteInfo<void> {
  const AdminRoute({List<_i29.PageRouteInfo>? children})
    : super(AdminRoute.name, initialChildren: children);

  static const String name = 'AdminRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      return _i29.DeferredWidget(_i1.loadLibrary, () => _i1.AdminPage());
    },
  );
}

/// generated route for
/// [_i2.CheckPage]
class CheckRoute extends _i29.PageRouteInfo<CheckRouteArgs> {
  CheckRoute({
    required int id,
    _i30.Key? key,
    List<_i29.PageRouteInfo>? children,
  }) : super(
         CheckRoute.name,
         args: CheckRouteArgs(id: id, key: key),
         rawPathParams: {'id': id},
         initialChildren: children,
       );

  static const String name = 'CheckRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<CheckRouteArgs>(
        orElse: () => CheckRouteArgs(id: pathParams.getInt('id')),
      );
      return _i29.DeferredWidget(
        _i2.loadLibrary,
        () => _i2.CheckPage(id: args.id, key: args.key),
      );
    },
  );
}

class CheckRouteArgs {
  const CheckRouteArgs({required this.id, this.key});

  final int id;

  final _i30.Key? key;

  @override
  String toString() {
    return 'CheckRouteArgs{id: $id, key: $key}';
  }
}

/// generated route for
/// [_i3.EventEditPage]
class EventEditRoute extends _i29.PageRouteInfo<EventEditRouteArgs> {
  EventEditRoute({_i30.Key? key, int? id, List<_i29.PageRouteInfo>? children})
    : super(
        EventEditRoute.name,
        args: EventEditRouteArgs(key: key, id: id),
        rawPathParams: {'id': id},
        initialChildren: children,
      );

  static const String name = 'EventEditRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<EventEditRouteArgs>(
        orElse: () => EventEditRouteArgs(id: pathParams.optInt('id')),
      );
      return _i29.DeferredWidget(
        _i3.loadLibrary,
        () => _i3.EventEditPage(key: args.key, id: args.id),
      );
    },
  );
}

class EventEditRouteArgs {
  const EventEditRouteArgs({this.key, this.id});

  final _i30.Key? key;

  final int? id;

  @override
  String toString() {
    return 'EventEditRouteArgs{key: $key, id: $id}';
  }
}

/// generated route for
/// [_i4.EventPage]
class EventRoute extends _i29.PageRouteInfo<EventRouteArgs> {
  EventRoute({int? id, _i30.Key? key, List<_i29.PageRouteInfo>? children})
    : super(
        EventRoute.name,
        args: EventRouteArgs(id: id, key: key),
        rawPathParams: {'id': id},
        initialChildren: children,
      );

  static const String name = 'EventRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<EventRouteArgs>(
        orElse: () => EventRouteArgs(id: pathParams.optInt('id')),
      );
      return _i29.DeferredWidget(
        _i4.loadLibrary,
        () => _i4.EventPage(id: args.id, key: args.key),
      );
    },
  );
}

class EventRouteArgs {
  const EventRouteArgs({this.id, this.key});

  final int? id;

  final _i30.Key? key;

  @override
  String toString() {
    return 'EventRouteArgs{id: $id, key: $key}';
  }
}

/// generated route for
/// [_i5.ForgotPasswordPage]
class ForgotPasswordRoute extends _i29.PageRouteInfo<void> {
  const ForgotPasswordRoute({List<_i29.PageRouteInfo>? children})
    : super(ForgotPasswordRoute.name, initialChildren: children);

  static const String name = 'ForgotPasswordRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      return _i29.DeferredWidget(
        _i5.loadLibrary,
        () => _i5.ForgotPasswordPage(),
      );
    },
  );
}

/// generated route for
/// [_i6.FormEditPage]
class FormEditRoute extends _i29.PageRouteInfo<FormEditRouteArgs> {
  FormEditRoute({
    _i30.Key? key,
    String? formLink,
    List<_i29.PageRouteInfo>? children,
  }) : super(
         FormEditRoute.name,
         args: FormEditRouteArgs(key: key, formLink: formLink),
         rawPathParams: {'formLink': formLink},
         initialChildren: children,
       );

  static const String name = 'FormEditRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<FormEditRouteArgs>(
        orElse:
            () => FormEditRouteArgs(formLink: pathParams.optString('formLink')),
      );
      return _i29.DeferredWidget(
        _i6.loadLibrary,
        () => _i6.FormEditPage(key: args.key, formLink: args.formLink),
      );
    },
  );
}

class FormEditRouteArgs {
  const FormEditRouteArgs({this.key, this.formLink});

  final _i30.Key? key;

  final String? formLink;

  @override
  String toString() {
    return 'FormEditRouteArgs{key: $key, formLink: $formLink}';
  }
}

/// generated route for
/// [_i7.FormPage]
class FormRoute extends _i29.PageRouteInfo<FormRouteArgs> {
  FormRoute({
    _i30.Key? key,
    String? formLink,
    List<_i29.PageRouteInfo>? children,
  }) : super(
         FormRoute.name,
         args: FormRouteArgs(key: key, formLink: formLink),
         rawPathParams: {'formLink': formLink},
         initialChildren: children,
       );

  static const String name = 'FormRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<FormRouteArgs>(
        orElse: () => FormRouteArgs(formLink: pathParams.optString('formLink')),
      );
      return _i29.DeferredWidget(
        _i7.loadLibrary,
        () => _i7.FormPage(key: args.key, formLink: args.formLink),
      );
    },
  );
}

class FormRouteArgs {
  const FormRouteArgs({this.key, this.formLink});

  final _i30.Key? key;

  final String? formLink;

  @override
  String toString() {
    return 'FormRouteArgs{key: $key, formLink: $formLink}';
  }
}

/// generated route for
/// [_i8.GamePage]
class GameRoute extends _i29.PageRouteInfo<GameRouteArgs> {
  GameRoute({_i30.Key? key, List<_i29.PageRouteInfo>? children})
    : super(
        GameRoute.name,
        args: GameRouteArgs(key: key),
        initialChildren: children,
      );

  static const String name = 'GameRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      final args = data.argsAs<GameRouteArgs>(
        orElse: () => const GameRouteArgs(),
      );
      return _i29.DeferredWidget(
        _i8.loadLibrary,
        () => _i8.GamePage(key: args.key),
      );
    },
  );
}

class GameRouteArgs {
  const GameRouteArgs({this.key});

  final _i30.Key? key;

  @override
  String toString() {
    return 'GameRouteArgs{key: $key}';
  }
}

/// generated route for
/// [_i9.HtmlEditorPage]
class HtmlEditorRoute extends _i29.PageRouteInfo<HtmlEditorRouteArgs> {
  HtmlEditorRoute({
    Map<String, dynamic>? content,
    _i30.Key? key,
    List<_i29.PageRouteInfo>? children,
  }) : super(
         HtmlEditorRoute.name,
         args: HtmlEditorRouteArgs(content: content, key: key),
         initialChildren: children,
       );

  static const String name = 'HtmlEditorRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      final args = data.argsAs<HtmlEditorRouteArgs>(
        orElse: () => const HtmlEditorRouteArgs(),
      );
      return _i29.DeferredWidget(
        _i9.loadLibrary,
        () => _i9.HtmlEditorPage(content: args.content, key: args.key),
      );
    },
  );
}

class HtmlEditorRouteArgs {
  const HtmlEditorRouteArgs({this.content, this.key});

  final Map<String, dynamic>? content;

  final _i30.Key? key;

  @override
  String toString() {
    return 'HtmlEditorRouteArgs{content: $content, key: $key}';
  }
}

/// generated route for
/// [_i10.InfoPage]
class InfoRoute extends _i29.PageRouteInfo<InfoRouteArgs> {
  InfoRoute({int? id, _i31.Key? key, List<_i29.PageRouteInfo>? children})
    : super(
        InfoRoute.name,
        args: InfoRouteArgs(id: id, key: key),
        rawPathParams: {'id': id},
        initialChildren: children,
      );

  static const String name = 'InfoRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<InfoRouteArgs>(
        orElse: () => InfoRouteArgs(id: pathParams.optInt('id')),
      );
      return _i29.DeferredWidget(
        _i10.loadLibrary,
        () => _i10.InfoPage(id: args.id, key: args.key),
      );
    },
  );
}

class InfoRouteArgs {
  const InfoRouteArgs({this.id, this.key});

  final int? id;

  final _i31.Key? key;

  @override
  String toString() {
    return 'InfoRouteArgs{id: $id, key: $key}';
  }
}

/// generated route for
/// [_i11.InstallPage]
class InstallRoute extends _i29.PageRouteInfo<void> {
  const InstallRoute({List<_i29.PageRouteInfo>? children})
    : super(InstallRoute.name, initialChildren: children);

  static const String name = 'InstallRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      return _i29.DeferredWidget(_i11.loadLibrary, () => _i11.InstallPage());
    },
  );
}

/// generated route for
/// [_i12.LoginPage]
class LoginRoute extends _i29.PageRouteInfo<void> {
  const LoginRoute({List<_i29.PageRouteInfo>? children})
    : super(LoginRoute.name, initialChildren: children);

  static const String name = 'LoginRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      return _i29.DeferredWidget(_i12.loadLibrary, () => _i12.LoginPage());
    },
  );
}

/// generated route for
/// [_i13.MapPage]
class MapRoute extends _i29.PageRouteInfo<MapRouteArgs> {
  MapRoute({
    int? id,
    _i32.PlaceModel? place,
    _i30.Key? key,
    List<_i29.PageRouteInfo>? children,
  }) : super(
         MapRoute.name,
         args: MapRouteArgs(id: id, place: place, key: key),
         rawPathParams: {'id': id},
         initialChildren: children,
       );

  static const String name = 'MapRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<MapRouteArgs>(
        orElse: () => MapRouteArgs(id: pathParams.optInt('id')),
      );
      return _i29.DeferredWidget(
        _i13.loadLibrary,
        () => _i13.MapPage(id: args.id, place: args.place, key: args.key),
      );
    },
  );
}

class MapRouteArgs {
  const MapRouteArgs({this.id, this.place, this.key});

  final int? id;

  final _i32.PlaceModel? place;

  final _i30.Key? key;

  @override
  String toString() {
    return 'MapRouteArgs{id: $id, place: $place, key: $key}';
  }
}

/// generated route for
/// [_i14.MySchedulePage]
class MyScheduleRoute extends _i29.PageRouteInfo<void> {
  const MyScheduleRoute({List<_i29.PageRouteInfo>? children})
    : super(MyScheduleRoute.name, initialChildren: children);

  static const String name = 'MyScheduleRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      return _i29.DeferredWidget(_i14.loadLibrary, () => _i14.MySchedulePage());
    },
  );
}

/// generated route for
/// [_i15.NewsFormPage]
class NewsFormRoute extends _i29.PageRouteInfo<void> {
  const NewsFormRoute({List<_i29.PageRouteInfo>? children})
    : super(NewsFormRoute.name, initialChildren: children);

  static const String name = 'NewsFormRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      return _i29.DeferredWidget(_i15.loadLibrary, () => _i15.NewsFormPage());
    },
  );
}

/// generated route for
/// [_i16.NewsPage]
class NewsRoute extends _i29.PageRouteInfo<NewsRouteArgs> {
  NewsRoute({
    _i30.Key? key,
    _i30.VoidCallback? onSetAsRead,
    List<_i29.PageRouteInfo>? children,
  }) : super(
         NewsRoute.name,
         args: NewsRouteArgs(key: key, onSetAsRead: onSetAsRead),
         initialChildren: children,
       );

  static const String name = 'NewsRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      final args = data.argsAs<NewsRouteArgs>(
        orElse: () => const NewsRouteArgs(),
      );
      return _i29.DeferredWidget(
        _i16.loadLibrary,
        () => _i16.NewsPage(key: args.key, onSetAsRead: args.onSetAsRead),
      );
    },
  );
}

class NewsRouteArgs {
  const NewsRouteArgs({this.key, this.onSetAsRead});

  final _i30.Key? key;

  final _i30.VoidCallback? onSetAsRead;

  @override
  String toString() {
    return 'NewsRouteArgs{key: $key, onSetAsRead: $onSetAsRead}';
  }
}

/// generated route for
/// [_i17.OccasionHomePage]
class OccasionHomeRoute extends _i29.PageRouteInfo<void> {
  const OccasionHomeRoute({List<_i29.PageRouteInfo>? children})
    : super(OccasionHomeRoute.name, initialChildren: children);

  static const String name = 'OccasionHomeRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      return _i29.DeferredWidget(
        _i17.loadLibrary,
        () => _i17.OccasionHomePage(),
      );
    },
  );
}

/// generated route for
/// [_i18.ResetPasswordPage]
class ResetPasswordRoute extends _i29.PageRouteInfo<void> {
  const ResetPasswordRoute({List<_i29.PageRouteInfo>? children})
    : super(ResetPasswordRoute.name, initialChildren: children);

  static const String name = 'ResetPasswordRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      return _i29.DeferredWidget(
        _i18.loadLibrary,
        () => _i18.ResetPasswordPage(),
      );
    },
  );
}

/// generated route for
/// [_i19.ScanPage]
class ScanRoute extends _i29.PageRouteInfo<ScanRouteArgs> {
  ScanRoute({
    String? scanCode,
    _i31.Key? key,
    List<_i29.PageRouteInfo>? children,
  }) : super(
         ScanRoute.name,
         args: ScanRouteArgs(scanCode: scanCode, key: key),
         rawPathParams: {'scanCode': scanCode},
         initialChildren: children,
       );

  static const String name = 'ScanRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<ScanRouteArgs>(
        orElse: () => ScanRouteArgs(scanCode: pathParams.optString('scanCode')),
      );
      return _i29.DeferredWidget(
        _i19.loadLibrary,
        () => _i19.ScanPage(scanCode: args.scanCode, key: args.key),
      );
    },
  );
}

class ScanRouteArgs {
  const ScanRouteArgs({this.scanCode, this.key});

  final String? scanCode;

  final _i31.Key? key;

  @override
  String toString() {
    return 'ScanRouteArgs{scanCode: $scanCode, key: $key}';
  }
}

/// generated route for
/// [_i20.ScheduleNavigationPage]
class ScheduleNavigationRoute extends _i29.PageRouteInfo<void> {
  const ScheduleNavigationRoute({List<_i29.PageRouteInfo>? children})
    : super(ScheduleNavigationRoute.name, initialChildren: children);

  static const String name = 'ScheduleNavigationRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      return _i29.DeferredWidget(
        _i20.loadLibrary,
        () => _i20.ScheduleNavigationPage(),
      );
    },
  );
}

/// generated route for
/// [_i21.SchedulePage]
class ScheduleRoute extends _i29.PageRouteInfo<void> {
  const ScheduleRoute({List<_i29.PageRouteInfo>? children})
    : super(ScheduleRoute.name, initialChildren: children);

  static const String name = 'ScheduleRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      return _i29.DeferredWidget(_i21.loadLibrary, () => _i21.SchedulePage());
    },
  );
}

/// generated route for
/// [_i22.SettingsPage]
class SettingsRoute extends _i29.PageRouteInfo<void> {
  const SettingsRoute({List<_i29.PageRouteInfo>? children})
    : super(SettingsRoute.name, initialChildren: children);

  static const String name = 'SettingsRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      return _i29.DeferredWidget(_i22.loadLibrary, () => _i22.SettingsPage());
    },
  );
}

/// generated route for
/// [_i23.SignupPage]
class SignupRoute extends _i29.PageRouteInfo<void> {
  const SignupRoute({List<_i29.PageRouteInfo>? children})
    : super(SignupRoute.name, initialChildren: children);

  static const String name = 'SignupRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      return _i29.DeferredWidget(_i23.loadLibrary, () => _i23.SignupPage());
    },
  );
}

/// generated route for
/// [_i24.SongbookPage]
class SongbookRoute extends _i29.PageRouteInfo<SongbookRouteArgs> {
  SongbookRoute({_i30.Key? key, List<_i29.PageRouteInfo>? children})
    : super(
        SongbookRoute.name,
        args: SongbookRouteArgs(key: key),
        initialChildren: children,
      );

  static const String name = 'SongbookRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      final args = data.argsAs<SongbookRouteArgs>(
        orElse: () => const SongbookRouteArgs(),
      );
      return _i29.DeferredWidget(
        _i24.loadLibrary,
        () => _i24.SongbookPage(key: args.key),
      );
    },
  );
}

class SongbookRouteArgs {
  const SongbookRouteArgs({this.key});

  final _i30.Key? key;

  @override
  String toString() {
    return 'SongbookRouteArgs{key: $key}';
  }
}

/// generated route for
/// [_i25.TimetablePage]
class TimetableRoute extends _i29.PageRouteInfo<void> {
  const TimetableRoute({List<_i29.PageRouteInfo>? children})
    : super(TimetableRoute.name, initialChildren: children);

  static const String name = 'TimetableRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      return _i29.DeferredWidget(_i25.loadLibrary, () => _i25.TimetablePage());
    },
  );
}

/// generated route for
/// [_i26.UnitAdminPage]
class UnitAdminRoute extends _i29.PageRouteInfo<UnitAdminRouteArgs> {
  UnitAdminRoute({
    required int? id,
    _i30.Key? key,
    List<_i29.PageRouteInfo>? children,
  }) : super(
         UnitAdminRoute.name,
         args: UnitAdminRouteArgs(id: id, key: key),
         rawPathParams: {'id': id},
         initialChildren: children,
       );

  static const String name = 'UnitAdminRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<UnitAdminRouteArgs>(
        orElse: () => UnitAdminRouteArgs(id: pathParams.optInt('id')),
      );
      return _i29.DeferredWidget(
        _i26.loadLibrary,
        () => _i26.UnitAdminPage(id: args.id, key: args.key),
      );
    },
  );
}

class UnitAdminRouteArgs {
  const UnitAdminRouteArgs({required this.id, this.key});

  final int? id;

  final _i30.Key? key;

  @override
  String toString() {
    return 'UnitAdminRouteArgs{id: $id, key: $key}';
  }
}

/// generated route for
/// [_i27.UnitPage]
class UnitRoute extends _i29.PageRouteInfo<UnitRouteArgs> {
  UnitRoute({
    required int id,
    _i30.Key? key,
    List<_i29.PageRouteInfo>? children,
  }) : super(
         UnitRoute.name,
         args: UnitRouteArgs(id: id, key: key),
         rawPathParams: {'id': id},
         initialChildren: children,
       );

  static const String name = 'UnitRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<UnitRouteArgs>(
        orElse: () => UnitRouteArgs(id: pathParams.getInt('id')),
      );
      return _i29.DeferredWidget(
        _i27.loadLibrary,
        () => _i27.UnitPage(id: args.id, key: args.key),
      );
    },
  );
}

class UnitRouteArgs {
  const UnitRouteArgs({required this.id, this.key});

  final int id;

  final _i30.Key? key;

  @override
  String toString() {
    return 'UnitRouteArgs{id: $id, key: $key}';
  }
}

/// generated route for
/// [_i28.UserPage]
class UserRoute extends _i29.PageRouteInfo<void> {
  const UserRoute({List<_i29.PageRouteInfo>? children})
    : super(UserRoute.name, initialChildren: children);

  static const String name = 'UserRoute';

  static _i29.PageInfo page = _i29.PageInfo(
    name,
    builder: (data) {
      return _i29.DeferredWidget(_i28.loadLibrary, () => _i28.UserPage());
    },
  );
}
