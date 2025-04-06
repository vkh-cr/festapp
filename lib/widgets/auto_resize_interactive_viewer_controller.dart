class AutoResizeInteractiveViewerController {
  int? layoutWidth;
  int? layoutHeight;

  Function()? _fitContent;

  void attachFitContent(Function()? fitContent) {
    _fitContent = fitContent;
  }

  void fitContent() {
    _fitContent?.call();
  }
}