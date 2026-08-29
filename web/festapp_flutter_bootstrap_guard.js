(function initFestappFlutterBootstrapGuard() {
  const dispatchRecordPrefix = '___dart_dispatch_record';

  function nativePrototypeCandidates() {
    const candidates = new Set();
    for (const name of Object.getOwnPropertyNames(window)) {
      let value;
      try {
        value = Object.getOwnPropertyDescriptor(window, name)?.value;
      } catch (_) {
        continue;
      }
      if (typeof value !== 'function' || !value.prototype) continue;
      candidates.add(value.prototype);
    }
    return candidates;
  }

  function clearStaleDartDispatchRecords() {
    let removedDispatchRecords = 0;
    let blockedDispatchRecords = 0;

    for (const prototype of nativePrototypeCandidates()) {
      for (const property of Object.getOwnPropertyNames(prototype)) {
        if (!property.startsWith(dispatchRecordPrefix)) continue;
        const descriptor = Object.getOwnPropertyDescriptor(prototype, property);
        if (!descriptor?.configurable) {
          blockedDispatchRecords += 1;
          continue;
        }
        if (delete prototype[property]) removedDispatchRecords += 1;
      }
    }

    if (blockedDispatchRecords > 0) {
      throw new Error(
        `Festapp cannot clear ${blockedDispatchRecords} stale Dart runtime marker(s)`,
      );
    }
    return { removedDispatchRecords };
  }

  window.prepareFestappFlutterBootstrap = function prepareFestappFlutterBootstrap() {
    if (window.__FESTAPP_FLUTTER_BOOTSTRAP_STARTED__ === true) {
      throw new Error('Festapp Flutter bootstrap already started in this document');
    }
    const result = clearStaleDartDispatchRecords();
    window.__FESTAPP_FLUTTER_BOOTSTRAP_STARTED__ = true;
    return result;
  };
})();
