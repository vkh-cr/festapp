// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouterGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:auto_route/auto_route.dart' as _i25;
import 'package:flutter/foundation.dart' as _i27;
import 'package:flutter/material.dart' as _i26;
import 'package:fstapp/dataModels/PlaceModel.dart' as _i28;
import 'package:fstapp/pages/AdminDashboardPage.dart' deferred as _i1;
import 'package:fstapp/pages/AdministrationOccasion/AdminPage.dart'
    deferred as _i2;
import 'package:fstapp/pages/CheckPage.dart' deferred as _i3;
import 'package:fstapp/pages/EventEditPage.dart' deferred as _i4;
import 'package:fstapp/pages/EventPage.dart' deferred as _i5;
import 'package:fstapp/pages/ForgotPasswordPage.dart' deferred as _i6;
import 'package:fstapp/pages/GamePage.dart' deferred as _i7;
import 'package:fstapp/pages/HtmlEditorPage.dart' deferred as _i8;
import 'package:fstapp/pages/InfoPage.dart' deferred as _i9;
import 'package:fstapp/pages/InstallPage.dart' deferred as _i10;
import 'package:fstapp/pages/LoginPage.dart' deferred as _i11;
import 'package:fstapp/pages/MapPage.dart' deferred as _i12;
import 'package:fstapp/pages/MySchedulePage.dart' deferred as _i13;
import 'package:fstapp/pages/NewsFormPage.dart' deferred as _i14;
import 'package:fstapp/pages/NewsPage.dart' deferred as _i15;
import 'package:fstapp/pages/OccasionHomePage.dart' deferred as _i16;
import 'package:fstapp/pages/ScheduleNavigationScreen.dart' deferred as _i18;
import 'package:fstapp/pages/SchedulePage.dart' deferred as _i19;
import 'package:fstapp/pages/SettingsPage.dart' deferred as _i20;
import 'package:fstapp/pages/SignupPage.dart' deferred as _i21;
import 'package:fstapp/pages/SignupPasswordPage.dart' deferred as _i17;
import 'package:fstapp/pages/SongPage.dart' deferred as _i22;
import 'package:fstapp/pages/TimetablePage.dart' deferred as _i23;
import 'package:fstapp/pages/UserPage.dart' deferred as _i24;

/// generated route for
/// [_i1.AdminDashboardPage]
class AdminDashboardRoute extends _i25.PageRouteInfo<void> {
  const AdminDashboardRoute({List<_i25.PageRouteInfo>? children})
      : super(
          AdminDashboardRoute.name,
          initialChildren: children,
        );

  static const String name = 'AdminDashboardRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i1.loadLibrary,
        () => _i1.AdminDashboardPage(),
      );
    },
  );
}

/// generated route for
/// [_i2.AdminPage]
class AdminRoute extends _i25.PageRouteInfo<void> {
  const AdminRoute({List<_i25.PageRouteInfo>? children})
      : super(
          AdminRoute.name,
          initialChildren: children,
        );

  static const String name = 'AdminRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i2.loadLibrary,
        () => _i2.AdminPage(),
      );
    },
  );
}

/// generated route for
/// [_i3.CheckPage]
class CheckRoute extends _i25.PageRouteInfo<CheckRouteArgs> {
  CheckRoute({
    required int id,
    _i26.Key? key,
    List<_i25.PageRouteInfo>? children,
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

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<CheckRouteArgs>(
          orElse: () => CheckRouteArgs(id: pathParams.getInt('id')));
      return _i25.DeferredWidget(
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

  final _i26.Key? key;

  @override
  String toString() {
    return 'CheckRouteArgs{id: $id, key: $key}';
  }
}

/// generated route for
/// [_i4.EventEditPage]
class EventEditRoute extends _i25.PageRouteInfo<EventEditRouteArgs> {
  EventEditRoute({
    _i26.Key? key,
    int? id,
    List<_i25.PageRouteInfo>? children,
  }) : super(
          EventEditRoute.name,
          args: EventEditRouteArgs(
            key: key,
            id: id,
          ),
          rawPathParams: {'id': id},
          initialChildren: children,
        );

  static const String name = 'EventEditRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<EventEditRouteArgs>(
          orElse: () => EventEditRouteArgs(id: pathParams.optInt('id')));
      return _i25.DeferredWidget(
        _i4.loadLibrary,
        () => _i4.EventEditPage(
          key: args.key,
          id: args.id,
        ),
      );
    },
  );
}

class EventEditRouteArgs {
  const EventEditRouteArgs({
    this.key,
    this.id,
  });

  final _i26.Key? key;

  final int? id;

  @override
  String toString() {
    return 'EventEditRouteArgs{key: $key, id: $id}';
  }
}

/// generated route for
/// [_i5.EventPage]
class EventRoute extends _i25.PageRouteInfo<EventRouteArgs> {
  EventRoute({
    int? id,
    _i26.Key? key,
    List<_i25.PageRouteInfo>? children,
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

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<EventRouteArgs>(
          orElse: () => EventRouteArgs(id: pathParams.optInt('id')));
      return _i25.DeferredWidget(
        _i5.loadLibrary,
        () => _i5.EventPage(
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

  final _i26.Key? key;

  @override
  String toString() {
    return 'EventRouteArgs{id: $id, key: $key}';
  }
}

/// generated route for
/// [_i6.ForgotPasswordPage]
class ForgotPasswordRoute extends _i25.PageRouteInfo<void> {
  const ForgotPasswordRoute({List<_i25.PageRouteInfo>? children})
      : super(
          ForgotPasswordRoute.name,
          initialChildren: children,
        );

  static const String name = 'ForgotPasswordRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i6.loadLibrary,
        () => _i6.ForgotPasswordPage(),
      );
    },
  );
}

/// generated route for
/// [_i7.GamePage]
class GameRoute extends _i25.PageRouteInfo<GameRouteArgs> {
  GameRoute({
    _i26.Key? key,
    List<_i25.PageRouteInfo>? children,
  }) : super(
          GameRoute.name,
          args: GameRouteArgs(key: key),
          initialChildren: children,
        );

  static const String name = 'GameRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      final args =
          data.argsAs<GameRouteArgs>(orElse: () => const GameRouteArgs());
      return _i25.DeferredWidget(
        _i7.loadLibrary,
        () => _i7.GamePage(key: args.key),
      );
    },
  );
}

class GameRouteArgs {
  const GameRouteArgs({this.key});

  final _i26.Key? key;

  @override
  String toString() {
    return 'GameRouteArgs{key: $key}';
  }
}

/// generated route for
/// [_i8.HtmlEditorPage]
class HtmlEditorRoute extends _i25.PageRouteInfo<HtmlEditorRouteArgs> {
  HtmlEditorRoute({
    Map<String, dynamic>? content,
    _i26.Key? key,
    List<_i25.PageRouteInfo>? children,
  }) : super(
          HtmlEditorRoute.name,
          args: HtmlEditorRouteArgs(
            content: content,
            key: key,
          ),
          initialChildren: children,
        );

  static const String name = 'HtmlEditorRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      final args = data.argsAs<HtmlEditorRouteArgs>(
          orElse: () => const HtmlEditorRouteArgs());
      return _i25.DeferredWidget(
        _i8.loadLibrary,
        () => _i8.HtmlEditorPage(
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

  final _i26.Key? key;

  @override
  String toString() {
    return 'HtmlEditorRouteArgs{content: $content, key: $key}';
  }
}

/// generated route for
/// [_i9.InfoPage]
class InfoRoute extends _i25.PageRouteInfo<InfoRouteArgs> {
  InfoRoute({
    int? id,
    _i27.Key? key,
    List<_i25.PageRouteInfo>? children,
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

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<InfoRouteArgs>(
          orElse: () => InfoRouteArgs(id: pathParams.optInt('id')));
      return _i25.DeferredWidget(
        _i9.loadLibrary,
        () => _i9.InfoPage(
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

  final _i27.Key? key;

  @override
  String toString() {
    return 'InfoRouteArgs{id: $id, key: $key}';
  }
}

/// generated route for
/// [_i10.InstallPage]
class InstallRoute extends _i25.PageRouteInfo<void> {
  const InstallRoute({List<_i25.PageRouteInfo>? children})
      : super(
          InstallRoute.name,
          initialChildren: children,
        );

  static const String name = 'InstallRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i10.loadLibrary,
        () => _i10.InstallPage(),
      );
    },
  );
}

/// generated route for
/// [_i11.LoginPage]
class LoginRoute extends _i25.PageRouteInfo<void> {
  const LoginRoute({List<_i25.PageRouteInfo>? children})
      : super(
          LoginRoute.name,
          initialChildren: children,
        );

  static const String name = 'LoginRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i11.loadLibrary,
        () => _i11.LoginPage(),
      );
    },
  );
}

/// generated route for
/// [_i12.MapPage]
class MapRoute extends _i25.PageRouteInfo<MapRouteArgs> {
  MapRoute({
    int? id,
    _i28.PlaceModel? place,
    _i26.Key? key,
    List<_i25.PageRouteInfo>? children,
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

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      final pathParams = data.inheritedPathParams;
      final args = data.argsAs<MapRouteArgs>(
          orElse: () => MapRouteArgs(id: pathParams.optInt('id')));
      return _i25.DeferredWidget(
        _i12.loadLibrary,
        () => _i12.MapPage(
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

  final _i28.PlaceModel? place;

  final _i26.Key? key;

  @override
  String toString() {
    return 'MapRouteArgs{id: $id, place: $place, key: $key}';
  }
}

/// generated route for
/// [_i13.MySchedulePage]
class MyScheduleRoute extends _i25.PageRouteInfo<void> {
  const MyScheduleRoute({List<_i25.PageRouteInfo>? children})
      : super(
          MyScheduleRoute.name,
          initialChildren: children,
        );

  static const String name = 'MyScheduleRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i13.loadLibrary,
        () => _i13.MySchedulePage(),
      );
    },
  );
}

/// generated route for
/// [_i14.NewsFormPage]
class NewsFormRoute extends _i25.PageRouteInfo<void> {
  const NewsFormRoute({List<_i25.PageRouteInfo>? children})
      : super(
          NewsFormRoute.name,
          initialChildren: children,
        );

  static const String name = 'NewsFormRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i14.loadLibrary,
        () => _i14.NewsFormPage(),
      );
    },
  );
}

/// generated route for
/// [_i15.NewsPage]
class NewsRoute extends _i25.PageRouteInfo<void> {
  const NewsRoute({List<_i25.PageRouteInfo>? children})
      : super(
          NewsRoute.name,
          initialChildren: children,
        );

  static const String name = 'NewsRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i15.loadLibrary,
        () => _i15.NewsPage(),
      );
    },
  );
}

/// generated route for
/// [_i16.OccasionHomePage]
class OccasionHomeRoute extends _i25.PageRouteInfo<void> {
  const OccasionHomeRoute({List<_i25.PageRouteInfo>? children})
      : super(
          OccasionHomeRoute.name,
          initialChildren: children,
        );

  static const String name = 'OccasionHomeRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i16.loadLibrary,
        () => _i16.OccasionHomePage(),
      );
    },
  );
}

/// generated route for
/// [_i17.ResetPasswordPage]
class ResetPasswordRoute extends _i25.PageRouteInfo<void> {
  const ResetPasswordRoute({List<_i25.PageRouteInfo>? children})
      : super(
          ResetPasswordRoute.name,
          initialChildren: children,
        );

  static const String name = 'ResetPasswordRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i17.loadLibrary,
        () => _i17.ResetPasswordPage(),
      );
    },
  );
}

/// generated route for
/// [_i18.ScheduleNavigationPage]
class ScheduleNavigationRoute extends _i25.PageRouteInfo<void> {
  const ScheduleNavigationRoute({List<_i25.PageRouteInfo>? children})
      : super(
          ScheduleNavigationRoute.name,
          initialChildren: children,
        );

  static const String name = 'ScheduleNavigationRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i18.loadLibrary,
        () => _i18.ScheduleNavigationPage(),
      );
    },
  );
}

/// generated route for
/// [_i19.SchedulePage]
class ScheduleRoute extends _i25.PageRouteInfo<void> {
  const ScheduleRoute({List<_i25.PageRouteInfo>? children})
      : super(
          ScheduleRoute.name,
          initialChildren: children,
        );

  static const String name = 'ScheduleRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i19.loadLibrary,
        () => _i19.SchedulePage(),
      );
    },
  );
}

/// generated route for
/// [_i20.SettingsPage]
class SettingsRoute extends _i25.PageRouteInfo<void> {
  const SettingsRoute({List<_i25.PageRouteInfo>? children})
      : super(
          SettingsRoute.name,
          initialChildren: children,
        );

  static const String name = 'SettingsRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i20.loadLibrary,
        () => _i20.SettingsPage(),
      );
    },
  );
}

/// generated route for
/// [_i21.SignupPage]
class SignupRoute extends _i25.PageRouteInfo<void> {
  const SignupRoute({List<_i25.PageRouteInfo>? children})
      : super(
          SignupRoute.name,
          initialChildren: children,
        );

  static const String name = 'SignupRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i21.loadLibrary,
        () => _i21.SignupPage(),
      );
    },
  );
}

/// generated route for
/// [_i22.SongbookPage]
class SongbookRoute extends _i25.PageRouteInfo<SongbookRouteArgs> {
  SongbookRoute({
    _i26.Key? key,
    List<_i25.PageRouteInfo>? children,
  }) : super(
          SongbookRoute.name,
          args: SongbookRouteArgs(key: key),
          initialChildren: children,
        );

  static const String name = 'SongbookRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      final args = data.argsAs<SongbookRouteArgs>(
          orElse: () => const SongbookRouteArgs());
      return _i25.DeferredWidget(
        _i22.loadLibrary,
        () => _i22.SongbookPage(key: args.key),
      );
    },
  );
}

class SongbookRouteArgs {
  const SongbookRouteArgs({this.key});

  final _i26.Key? key;

  @override
  String toString() {
    return 'SongbookRouteArgs{key: $key}';
  }
}

/// generated route for
/// [_i23.TimetablePage]
class TimetableRoute extends _i25.PageRouteInfo<void> {
  const TimetableRoute({List<_i25.PageRouteInfo>? children})
      : super(
          TimetableRoute.name,
          initialChildren: children,
        );

  static const String name = 'TimetableRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i23.loadLibrary,
        () => _i23.TimetablePage(),
      );
    },
  );
}

/// generated route for
/// [_i24.UserPage]
class UserRoute extends _i25.PageRouteInfo<void> {
  const UserRoute({List<_i25.PageRouteInfo>? children})
      : super(
          UserRoute.name,
          initialChildren: children,
        );

  static const String name = 'UserRoute';

  static _i25.PageInfo page = _i25.PageInfo(
    name,
    builder: (data) {
      return _i25.DeferredWidget(
        _i24.loadLibrary,
        () => _i24.UserPage(),
      );
    },
  );
}
