import 'dart:async';

import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter/foundation.dart';
import 'package:fstapp/app_config.dart';
import 'package:http/http.dart' as http;

/// Global connectivity state shared by the offline banner and the pre-write
/// checks.
///
/// "Offline" here means *effectively unable to reach the backend* — not merely a
/// missing network interface. It is the OR of two signals:
///   1. the OS reports no network interface (connectivity_plus), and
///   2. the backend is unreachable — recent requests failed with network /
///      timeout / connection errors (weak signal, server outage, flaky net).
///
/// Backend reachability is observed passively from the outcome of the requests
/// the app already makes (via HealthTrackingHttpClient) and, while unreachable,
/// confirmed to recover by a lightweight active health probe — so the banner
/// clears reliably and never sticks.
class ConnectivityService {
  /// True while the app should present the offline UX (banner, degraded reads).
  static final ValueNotifier<bool> isOfflineNotifier = ValueNotifier(false);

  // --- inputs to the derived offline state ---
  static bool _interfaceOffline = false; // from connectivity_plus
  static bool _backendUnreachable = false; // from observed request outcomes

  /// Consecutive network failures with no intervening success. The banner only
  /// flips on at [_failuresToTrip] so a single transient blip never flashes it.
  static int _consecutiveFailures = 0;
  static const int _failuresToTrip = 2;

  static StreamSubscription<List<ConnectivityResult>>? _subscription;
  static Timer? _probeTimer;
  static const Duration _probeInterval = Duration(seconds: 12);
  static const Duration _probeTimeout = Duration(seconds: 5);

  /// Public health endpoint that answers without auth; getting *any* response
  /// from it proves the backend is reachable again.
  static final Uri _healthUri =
      Uri.parse('${AppConfig.supabaseUrl}/auth/v1/health');

  /// Starts the connectivity listener and seeds the interface state. Idempotent.
  static Future<void> initialize() async {
    if (_subscription != null) return;
    _subscription = Connectivity().onConnectivityChanged.listen((result) {
      _interfaceOffline = result.contains(ConnectivityResult.none);
      // A connectivity change often means recovery — probe right away so the
      // banner clears fast once the backend answers again.
      if (!_interfaceOffline && _backendUnreachable) {
        _probeNow();
      }
      _recompute();
    });
    try {
      final current = await Connectivity().checkConnectivity();
      _interfaceOffline = current.contains(ConnectivityResult.none);
    } catch (_) {
      // Keep the online default when the platform check is unavailable.
    }
    _recompute();
  }

  /// A backend request completed (any HTTP status) → the server was reached, so
  /// the app is online. Clears the unreachable state immediately.
  static void reportSuccess() {
    _consecutiveFailures = 0;
    if (_backendUnreachable) {
      _backendUnreachable = false;
      _stopProbe();
      _recompute();
    }
  }

  /// A backend request failed with a network / timeout / connection error.
  /// After [_failuresToTrip] in a row, the backend is treated as unreachable.
  static void reportNetworkFailure() {
    _consecutiveFailures++;
    if (!_backendUnreachable && _consecutiveFailures >= _failuresToTrip) {
      _backendUnreachable = true;
      _startProbe();
      _recompute();
    }
  }

  /// One-shot check used right before a write. Refreshes the interface state and
  /// returns the derived offline value (interface down OR backend unreachable).
  static Future<bool> isOffline() async {
    try {
      final result = await Connectivity().checkConnectivity();
      _interfaceOffline = result.contains(ConnectivityResult.none);
      _recompute();
    } catch (_) {
      // Fall through to the last known derived state.
    }
    return isOfflineNotifier.value;
  }

  static void _recompute() {
    // ValueNotifier only notifies listeners when the value actually changes, so
    // the frequent reportSuccess() calls cause no spurious rebuilds.
    isOfflineNotifier.value = _interfaceOffline || _backendUnreachable;
  }

  static void _startProbe() {
    _probeTimer ??= Timer.periodic(_probeInterval, (_) => _probeNow());
  }

  static void _stopProbe() {
    _probeTimer?.cancel();
    _probeTimer = null;
  }

  /// Actively checks whether the backend is reachable again — covers the case
  /// where the user is idle on cached data and issues no requests. Uses a plain
  /// client so it never re-enters the health tracker. Any response (even an
  /// error status) proves the server answered, so it clears the offline state.
  static Future<void> _probeNow() async {
    if (_interfaceOffline) return; // pointless without a network interface
    final client = http.Client();
    try {
      await client.get(_healthUri).timeout(_probeTimeout);
      reportSuccess();
    } catch (_) {
      // Still unreachable; the periodic timer will try again.
    } finally {
      client.close();
    }
  }

  /// Resets all state (test seam). Cancels the probe timer so tests leave no
  /// pending timers.
  @visibleForTesting
  static void debugReset() {
    _stopProbe();
    _subscription?.cancel();
    _subscription = null;
    _interfaceOffline = false;
    _backendUnreachable = false;
    _consecutiveFailures = 0;
    isOfflineNotifier.value = false;
  }
}
