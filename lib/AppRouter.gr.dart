// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouterGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:auto_route/auto_route.dart' as _i21;
import 'package:flutter/foundation.dart' as _i23;
import 'package:flutter/material.dart' as _i22;
import 'package:fstapp/dataModels/PlaceModel.dart' as _i24;
import 'package:fstapp/pages/AdminDashboardPage.dart' deferred as _i1;
import 'package:fstapp/pages/AdministrationPage.dart' deferred as _i2;
import 'package:fstapp/pages/CheckPage.dart' deferred as _i3;
import 'package:fstapp/pages/EventPage.dart' deferred as _i4;
import 'package:fstapp/pages/ForgotPasswordPage.dart' deferred as _i5;
import 'package:fstapp/pages/HomePage.dart' deferred as _i6;
import 'package:fstapp/pages/HtmlEditorPage.dart' deferred as _i7;
import 'package:fstapp/pages/InfoPage.dart' deferred as _i8;
import 'package:fstapp/pages/InstallPage.dart' deferred as _i9;
import 'package:fstapp/pages/LoginPage.dart' deferred as _i10;
import 'package:fstapp/pages/MapPage.dart' deferred as _i11;
import 'package:fstapp/pages/MySchedulePage.dart' deferred as _i12;
import 'package:fstapp/pages/NewsFormPage.dart' deferred as _i13;
import 'package:fstapp/pages/NewsPage.dart' deferred as _i14;
import 'package:fstapp/pages/SettingsPage.dart' deferred as _i17;
import 'package:fstapp/pages/SignupPage.dart' deferred as _i18;
import 'package:fstapp/pages/SignupPasswordPage.dart' deferred as _i16;
import 'package:fstapp/pages/SongPage.dart' deferred as _i19;
import 'package:fstapp/pages/TimetablePage.dart' deferred as _i15;
import 'package:fstapp/pages/UserPage.dart' deferred as _i20;

/// generated route for
/// [_i1.AdminDashboardPage]
class AdminDashboardRoute extends _i21.PageRouteInfo<void> {
  const AdminDashboardRoute({List<_i21.PageRouteInfo>? children})
      : super(
          AdminDashboardRoute.name,
          initialChildren: children,
        );

  static const String name = 'AdminDashboardRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      return _i21.DeferredWidget(
        _i1.loadLibrary,
        () => _i1.AdminDashboardPage(),
      );
    },
  );
}

/// generated route for
/// [_i2.AdministrationPage]
class AdministrationRoute extends _i21.PageRouteInfo<void> {
  const AdministrationRoute({List<_i21.PageRouteInfo>? children})
      : super(
          AdministrationRoute.name,
          initialChildren: children,
        );

  static const String name = 'AdministrationRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      return _i21.DeferredWidget(
        _i2.loadLibrary,
        () => _i2.AdministrationPage(),
      );
    },
  );
}

/// generated route for
/// [_i3.CheckPage]
class CheckRoute extends _i21.PageRouteInfo<CheckRouteArgs> {
  CheckRoute({
    required int id,
    _i22.Key? key,
    List<_i21.PageRouteInfo>? children,
  }) : super(
          CheckRoute.name,
          args: CheckRouteArgs(
            id: id,
            key: key,
          ),
          rawPathParams: {'id': id},
          initialChildren: children,
        );

  static const String name = 'CheckRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<CheckRouteArgs>(
          orElse: () => CheckRouteArgs(id: pathParams.getInt('id')));
      return _i21.DeferredWidget(
        _i3.loadLibrary,
        () => _i3.CheckPage(
          id: args.id,
          key: args.key,
        ),
      );
    },
  );
}

class CheckRouteArgs {
  const CheckRouteArgs({
    required this.id,
    this.key,
  });

  final int id;

  final _i22.Key? key;

  @override
  String toString() {
    return 'CheckRouteArgs{id: $id, key: $key}';
  }
}

/// generated route for
/// [_i4.EventPage]
class EventRoute extends _i21.PageRouteInfo<EventRouteArgs> {
  EventRoute({
    int? id,
    _i22.Key? key,
    List<_i21.PageRouteInfo>? children,
  }) : super(
          EventRoute.name,
          args: EventRouteArgs(
            id: id,
            key: key,
          ),
          rawPathParams: {'id': id},
          initialChildren: children,
        );

  static const String name = 'EventRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<EventRouteArgs>(
          orElse: () => EventRouteArgs(id: pathParams.optInt('id')));
      return _i21.DeferredWidget(
        _i4.loadLibrary,
        () => _i4.EventPage(
          id: args.id,
          key: args.key,
        ),
      );
    },
  );
}

class EventRouteArgs {
  const EventRouteArgs({
    this.id,
    this.key,
  });

  final int? id;

  final _i22.Key? key;

  @override
  String toString() {
    return 'EventRouteArgs{id: $id, key: $key}';
  }
}

/// generated route for
/// [_i5.ForgotPasswordPage]
class ForgotPasswordRoute extends _i21.PageRouteInfo<void> {
  const ForgotPasswordRoute({List<_i21.PageRouteInfo>? children})
      : super(
          ForgotPasswordRoute.name,
          initialChildren: children,
        );

  static const String name = 'ForgotPasswordRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      return _i21.DeferredWidget(
        _i5.loadLibrary,
        () => _i5.ForgotPasswordPage(),
      );
    },
  );
}

/// generated route for
/// [_i6.HomePage]
class HomeRoute extends _i21.PageRouteInfo<void> {
  const HomeRoute({List<_i21.PageRouteInfo>? children})
      : super(
          HomeRoute.name,
          initialChildren: children,
        );

  static const String name = 'HomeRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      return _i21.DeferredWidget(
        _i6.loadLibrary,
        () => _i6.HomePage(),
      );
    },
  );
}

/// generated route for
/// [_i7.HtmlEditorPage]
class HtmlEditorRoute extends _i21.PageRouteInfo<HtmlEditorRouteArgs> {
  HtmlEditorRoute({
    Map<String, dynamic>? content,
    _i22.Key? key,
    List<_i21.PageRouteInfo>? children,
  }) : super(
          HtmlEditorRoute.name,
          args: HtmlEditorRouteArgs(
            content: content,
            key: key,
          ),
          initialChildren: children,
        );

  static const String name = 'HtmlEditorRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      final args = data.argsAs<HtmlEditorRouteArgs>(
          orElse: () => const HtmlEditorRouteArgs());
      return _i21.DeferredWidget(
        _i7.loadLibrary,
        () => _i7.HtmlEditorPage(
          content: args.content,
          key: args.key,
        ),
      );
    },
  );
}

class HtmlEditorRouteArgs {
  const HtmlEditorRouteArgs({
    this.content,
    this.key,
  });

  final Map<String, dynamic>? content;

  final _i22.Key? key;

  @override
  String toString() {
    return 'HtmlEditorRouteArgs{content: $content, key: $key}';
  }
}

/// generated route for
/// [_i8.InfoPage]
class InfoRoute extends _i21.PageRouteInfo<InfoRouteArgs> {
  InfoRoute({
    int? id,
    _i23.Key? key,
    List<_i21.PageRouteInfo>? children,
  }) : super(
          InfoRoute.name,
          args: InfoRouteArgs(
            id: id,
            key: key,
          ),
          rawPathParams: {'id': id},
          initialChildren: children,
        );

  static const String name = 'InfoRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<InfoRouteArgs>(
          orElse: () => InfoRouteArgs(id: pathParams.optInt('id')));
      return _i21.DeferredWidget(
        _i8.loadLibrary,
        () => _i8.InfoPage(
          id: args.id,
          key: args.key,
        ),
      );
    },
  );
}

class InfoRouteArgs {
  const InfoRouteArgs({
    this.id,
    this.key,
  });

  final int? id;

  final _i23.Key? key;

  @override
  String toString() {
    return 'InfoRouteArgs{id: $id, key: $key}';
  }
}

/// generated route for
/// [_i9.InstallPage]
class InstallRoute extends _i21.PageRouteInfo<void> {
  const InstallRoute({List<_i21.PageRouteInfo>? children})
      : super(
          InstallRoute.name,
          initialChildren: children,
        );

  static const String name = 'InstallRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      return _i21.DeferredWidget(
        _i9.loadLibrary,
        () => _i9.InstallPage(),
      );
    },
  );
}

/// generated route for
/// [_i10.LoginPage]
class LoginRoute extends _i21.PageRouteInfo<void> {
  const LoginRoute({List<_i21.PageRouteInfo>? children})
      : super(
          LoginRoute.name,
          initialChildren: children,
        );

  static const String name = 'LoginRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      return _i21.DeferredWidget(
        _i10.loadLibrary,
        () => _i10.LoginPage(),
      );
    },
  );
}

/// generated route for
/// [_i11.MapPage]
class MapRoute extends _i21.PageRouteInfo<MapRouteArgs> {
  MapRoute({
    int? id,
    _i24.PlaceModel? place,
    _i22.Key? key,
    List<_i21.PageRouteInfo>? children,
  }) : super(
          MapRoute.name,
          args: MapRouteArgs(
            id: id,
            place: place,
            key: key,
          ),
          rawPathParams: {'id': id},
          initialChildren: children,
        );

  static const String name = 'MapRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<MapRouteArgs>(
          orElse: () => MapRouteArgs(id: pathParams.optInt('id')));
      return _i21.DeferredWidget(
        _i11.loadLibrary,
        () => _i11.MapPage(
          id: args.id,
          place: args.place,
          key: args.key,
        ),
      );
    },
  );
}

class MapRouteArgs {
  const MapRouteArgs({
    this.id,
    this.place,
    this.key,
  });

  final int? id;

  final _i24.PlaceModel? place;

  final _i22.Key? key;

  @override
  String toString() {
    return 'MapRouteArgs{id: $id, place: $place, key: $key}';
  }
}

/// generated route for
/// [_i12.MySchedulePage]
class MyScheduleRoute extends _i21.PageRouteInfo<void> {
  const MyScheduleRoute({List<_i21.PageRouteInfo>? children})
      : super(
          MyScheduleRoute.name,
          initialChildren: children,
        );

  static const String name = 'MyScheduleRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      return _i21.DeferredWidget(
        _i12.loadLibrary,
        () => _i12.MySchedulePage(),
      );
    },
  );
}

/// generated route for
/// [_i13.NewsFormPage]
class NewsFormRoute extends _i21.PageRouteInfo<void> {
  const NewsFormRoute({List<_i21.PageRouteInfo>? children})
      : super(
          NewsFormRoute.name,
          initialChildren: children,
        );

  static const String name = 'NewsFormRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      return _i21.DeferredWidget(
        _i13.loadLibrary,
        () => _i13.NewsFormPage(),
      );
    },
  );
}

/// generated route for
/// [_i14.NewsPage]
class NewsRoute extends _i21.PageRouteInfo<void> {
  const NewsRoute({List<_i21.PageRouteInfo>? children})
      : super(
          NewsRoute.name,
          initialChildren: children,
        );

  static const String name = 'NewsRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      return _i21.DeferredWidget(
        _i14.loadLibrary,
        () => _i14.NewsPage(),
      );
    },
  );
}

/// generated route for
/// [_i15.ProgramViewPage]
class ProgramViewRoute extends _i21.PageRouteInfo<void> {
  const ProgramViewRoute({List<_i21.PageRouteInfo>? children})
      : super(
          ProgramViewRoute.name,
          initialChildren: children,
        );

  static const String name = 'ProgramViewRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      return _i21.DeferredWidget(
        _i15.loadLibrary,
        () => _i15.ProgramViewPage(),
      );
    },
  );
}

/// generated route for
/// [_i16.ResetPasswordPage]
class ResetPasswordRoute extends _i21.PageRouteInfo<void> {
  const ResetPasswordRoute({List<_i21.PageRouteInfo>? children})
      : super(
          ResetPasswordRoute.name,
          initialChildren: children,
        );

  static const String name = 'ResetPasswordRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      return _i21.DeferredWidget(
        _i16.loadLibrary,
        () => _i16.ResetPasswordPage(),
      );
    },
  );
}

/// generated route for
/// [_i17.SettingsPage]
class SettingsRoute extends _i21.PageRouteInfo<void> {
  const SettingsRoute({List<_i21.PageRouteInfo>? children})
      : super(
          SettingsRoute.name,
          initialChildren: children,
        );

  static const String name = 'SettingsRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      return _i21.DeferredWidget(
        _i17.loadLibrary,
        () => _i17.SettingsPage(),
      );
    },
  );
}

/// generated route for
/// [_i18.SignupPage]
class SignupRoute extends _i21.PageRouteInfo<void> {
  const SignupRoute({List<_i21.PageRouteInfo>? children})
      : super(
          SignupRoute.name,
          initialChildren: children,
        );

  static const String name = 'SignupRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      return _i21.DeferredWidget(
        _i18.loadLibrary,
        () => _i18.SignupPage(),
      );
    },
  );
}

/// generated route for
/// [_i19.SongPage]
class SongRoute extends _i21.PageRouteInfo<SongRouteArgs> {
  SongRoute({
    _i22.Key? key,
    List<_i21.PageRouteInfo>? children,
  }) : super(
          SongRoute.name,
          args: SongRouteArgs(key: key),
          initialChildren: children,
        );

  static const String name = 'SongRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      final args =
          data.argsAs<SongRouteArgs>(orElse: () => const SongRouteArgs());
      return _i21.DeferredWidget(
        _i19.loadLibrary,
        () => _i19.SongPage(key: args.key),
      );
    },
  );
}

class SongRouteArgs {
  const SongRouteArgs({this.key});

  final _i22.Key? key;

  @override
  String toString() {
    return 'SongRouteArgs{key: $key}';
  }
}

/// generated route for
/// [_i20.UserPage]
class UserRoute extends _i21.PageRouteInfo<void> {
  const UserRoute({List<_i21.PageRouteInfo>? children})
      : super(
          UserRoute.name,
          initialChildren: children,
        );

  static const String name = 'UserRoute';

  static _i21.PageInfo page = _i21.PageInfo(
    name,
    builder: (data) {
      return _i21.DeferredWidget(
        _i20.loadLibrary,
        () => _i20.UserPage(),
      );
    },
  );
}
