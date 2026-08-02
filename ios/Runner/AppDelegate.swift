import Flutter
import MapLibre
import UIKit

@main
@objc class AppDelegate: FlutterAppDelegate, FlutterImplicitEngineDelegate {
  private var mapLibrePerformanceChannel: FlutterMethodChannel?

  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  func didInitializeImplicitFlutterEngine(_ engineBridge: FlutterImplicitEngineBridge) {
    GeneratedPluginRegistrant.register(with: engineBridge.pluginRegistry)
    let performanceChannel = FlutterMethodChannel(
      name: "festapp/maplibre_performance",
      binaryMessenger: engineBridge.applicationRegistrar.messenger()
    )
    mapLibrePerformanceChannel = performanceChannel
    performanceChannel.setMethodCallHandler { call, result in
      guard call.method == "setPreferredFramesPerSecond" else {
        result(FlutterMethodNotImplemented)
        return
      }
      guard
        let arguments = call.arguments as? [String: Any],
        let framesPerSecond = arguments["framesPerSecond"] as? Int,
        framesPerSecond > 0
      else {
        result(
          FlutterError(
            code: "invalid_frame_rate",
            message: "A positive framesPerSecond value is required.",
            details: nil
          )
        )
        return
      }

      let mapViews = UIApplication.shared.connectedScenes
        .compactMap { $0 as? UIWindowScene }
        .flatMap(\.windows)
        .flatMap { Self.mapLibreViews(in: $0) }
      guard !mapViews.isEmpty else {
        result(
          FlutterError(
            code: "map_view_unavailable",
            message: "No active MapLibre view was found.",
            details: nil
          )
        )
        return
      }

      let preferredRate = MLNMapViewPreferredFramesPerSecond(
        rawValue: framesPerSecond
      )
      mapViews.forEach { $0.preferredFramesPerSecond = preferredRate }
      result(mapViews.count)
    }
  }

  private static func mapLibreViews(in view: UIView) -> [MLNMapView] {
    let current = (view as? MLNMapView).map { [$0] } ?? []
    return current + view.subviews.flatMap { mapLibreViews(in: $0) }
  }
}
