class NewsRefreshCoordinator {
  Future<void>? _activeLoad;
  bool _refreshPending = false;

  Future<void> run(Future<void> Function() load) {
    final activeLoad = _activeLoad;
    if (activeLoad != null) {
      _refreshPending = true;
      return activeLoad;
    }

    late final Future<void> nextLoad;
    nextLoad = _drain(load).whenComplete(() {
      if (identical(_activeLoad, nextLoad)) _activeLoad = null;
    });
    _activeLoad = nextLoad;
    return nextLoad;
  }

  Future<void> _drain(Future<void> Function() load) async {
    do {
      _refreshPending = false;
      await load();
    } while (_refreshPending);
  }
}
