
// Compiles a dart2wasm-generated main module from `source` which can then
// instantiatable via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm modules from `bytes` which is then
// instantiatable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export async function instantiate(modulePromise, importObjectPromise) {
  var moduleOrCompiledApp = await modulePromise;
  if (!(moduleOrCompiledApp instanceof CompiledApp)) {
    moduleOrCompiledApp = new CompiledApp(moduleOrCompiledApp);
  }
  const instantiatedApp = await moduleOrCompiledApp.instantiate(await importObjectPromise);
  return instantiatedApp.instantiatedModule;
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export const invoke = (moduleInstance, ...args) => {
  moduleInstance.exports.$invokeMain(args);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredWasm` is a JS function that takes a module name matching a
  //   wasm file produced by the dart2wasm compiler and returns the bytes to
  //   load the module. These bytes can be in either a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  async instantiate(additionalImports, {loadDeferredWasm} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + js;
    }

    // Converts a Dart List to a JS array. Any Dart objects will be converted, but
    // this will be cheap for JSValues.
    function arrayFromDartList(constructor, list) {
      const exports = dartInstance.exports;
      const read = exports.$listRead;
      const length = exports.$listLength(list);
      const array = new constructor(length);
      for (let i = 0; i < length; i++) {
        array[i] = read(list, i);
      }
      return array;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {

      _1: (x0,x1,x2) => x0.set(x1,x2),
      _2: (x0,x1,x2) => x0.set(x1,x2),
      _3: (x0,x1) => x0.transferFromImageBitmap(x1),
      _4: x0 => x0.arrayBuffer(),
      _5: (x0,x1) => x0.transferFromImageBitmap(x1),
      _6: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._6(f,arguments.length,x0) }),
      _7: x0 => new window.FinalizationRegistry(x0),
      _8: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      _9: (x0,x1) => x0.unregister(x1),
      _10: (x0,x1,x2) => x0.slice(x1,x2),
      _11: (x0,x1) => x0.decode(x1),
      _12: (x0,x1) => x0.segment(x1),
      _13: () => new TextDecoder(),
      _14: x0 => x0.buffer,
      _15: x0 => x0.wasmMemory,
      _16: () => globalThis.window._flutter_skwasmInstance,
      _17: x0 => x0.rasterStartMilliseconds,
      _18: x0 => x0.rasterEndMilliseconds,
      _19: x0 => x0.imageBitmaps,
      _192: x0 => x0.select(),
      _193: (x0,x1) => x0.append(x1),
      _194: x0 => x0.remove(),
      _197: x0 => x0.unlock(),
      _202: x0 => x0.getReader(),
      _211: x0 => new MutationObserver(x0),
      _220: (x0,x1) => new OffscreenCanvas(x0,x1),
      _222: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _223: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _226: x0 => new ResizeObserver(x0),
      _229: (x0,x1) => new Intl.Segmenter(x0,x1),
      _230: x0 => x0.next(),
      _231: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      _308: x0 => x0.close(),
      _309: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
      _310: x0 => new window.ImageDecoder(x0),
      _311: x0 => x0.close(),
      _312: x0 => ({frameIndex: x0}),
      _313: (x0,x1) => x0.decode(x1),
      _316: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._316(f,arguments.length,x0) }),
      _317: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._317(f,arguments.length,x0) }),
      _318: (x0,x1) => ({addView: x0,removeView: x1}),
      _319: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._319(f,arguments.length,x0) }),
      _320: f => finalizeWrapper(f, function() { return dartInstance.exports._320(f,arguments.length) }),
      _321: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      _322: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._322(f,arguments.length,x0) }),
      _323: x0 => ({runApp: x0}),
      _324: x0 => new Uint8Array(x0),
      _326: x0 => x0.preventDefault(),
      _327: x0 => x0.stopPropagation(),
      _328: (x0,x1) => x0.addListener(x1),
      _329: (x0,x1) => x0.removeListener(x1),
      _330: (x0,x1) => x0.prepend(x1),
      _331: x0 => x0.remove(),
      _332: x0 => x0.disconnect(),
      _333: (x0,x1) => x0.addListener(x1),
      _334: (x0,x1) => x0.removeListener(x1),
      _335: x0 => x0.blur(),
      _336: (x0,x1) => x0.append(x1),
      _337: x0 => x0.remove(),
      _338: x0 => x0.stopPropagation(),
      _342: x0 => x0.preventDefault(),
      _343: (x0,x1) => x0.append(x1),
      _344: x0 => x0.remove(),
      _345: x0 => x0.preventDefault(),
      _350: (x0,x1) => x0.removeChild(x1),
      _351: (x0,x1) => x0.appendChild(x1),
      _352: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _353: (x0,x1) => x0.appendChild(x1),
      _354: (x0,x1) => x0.transferFromImageBitmap(x1),
      _355: (x0,x1) => x0.appendChild(x1),
      _356: (x0,x1) => x0.append(x1),
      _357: (x0,x1) => x0.append(x1),
      _358: (x0,x1) => x0.append(x1),
      _359: x0 => x0.remove(),
      _360: x0 => x0.remove(),
      _361: x0 => x0.remove(),
      _362: (x0,x1) => x0.appendChild(x1),
      _363: (x0,x1) => x0.appendChild(x1),
      _364: x0 => x0.remove(),
      _365: (x0,x1) => x0.append(x1),
      _366: (x0,x1) => x0.append(x1),
      _367: x0 => x0.remove(),
      _368: (x0,x1) => x0.append(x1),
      _369: (x0,x1) => x0.append(x1),
      _370: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _371: (x0,x1) => x0.append(x1),
      _372: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _373: x0 => x0.remove(),
      _374: (x0,x1) => x0.append(x1),
      _375: x0 => x0.remove(),
      _376: (x0,x1) => x0.append(x1),
      _377: x0 => x0.remove(),
      _378: x0 => x0.remove(),
      _379: x0 => x0.getBoundingClientRect(),
      _380: x0 => x0.remove(),
      _393: (x0,x1) => x0.append(x1),
      _394: x0 => x0.remove(),
      _395: (x0,x1) => x0.append(x1),
      _396: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _397: x0 => x0.preventDefault(),
      _398: x0 => x0.preventDefault(),
      _399: x0 => x0.preventDefault(),
      _400: x0 => x0.preventDefault(),
      _401: (x0,x1) => x0.observe(x1),
      _402: x0 => x0.disconnect(),
      _403: (x0,x1) => x0.appendChild(x1),
      _404: (x0,x1) => x0.appendChild(x1),
      _405: (x0,x1) => x0.appendChild(x1),
      _406: (x0,x1) => x0.append(x1),
      _407: x0 => x0.remove(),
      _408: (x0,x1) => x0.append(x1),
      _409: (x0,x1) => x0.append(x1),
      _410: (x0,x1) => x0.appendChild(x1),
      _411: (x0,x1) => x0.append(x1),
      _412: x0 => x0.remove(),
      _413: (x0,x1) => x0.append(x1),
      _414: x0 => x0.remove(),
      _418: (x0,x1) => x0.appendChild(x1),
      _419: x0 => x0.remove(),
      _978: () => globalThis.window.flutterConfiguration,
      _979: x0 => x0.assetBase,
      _984: x0 => x0.debugShowSemanticsNodes,
      _985: x0 => x0.hostElement,
      _986: x0 => x0.multiViewEnabled,
      _987: x0 => x0.nonce,
      _989: x0 => x0.fontFallbackBaseUrl,
      _995: x0 => x0.console,
      _996: x0 => x0.devicePixelRatio,
      _997: x0 => x0.document,
      _998: x0 => x0.history,
      _999: x0 => x0.innerHeight,
      _1000: x0 => x0.innerWidth,
      _1001: x0 => x0.location,
      _1002: x0 => x0.navigator,
      _1003: x0 => x0.visualViewport,
      _1004: x0 => x0.performance,
      _1007: (x0,x1) => x0.dispatchEvent(x1),
      _1008: (x0,x1) => x0.matchMedia(x1),
      _1010: (x0,x1) => x0.getComputedStyle(x1),
      _1011: x0 => x0.screen,
      _1012: (x0,x1) => x0.requestAnimationFrame(x1),
      _1013: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1013(f,arguments.length,x0) }),
      _1018: (x0,x1) => x0.warn(x1),
      _1020: (x0,x1) => x0.debug(x1),
      _1021: () => globalThis.window,
      _1022: () => globalThis.Intl,
      _1023: () => globalThis.Symbol,
      _1026: x0 => x0.clipboard,
      _1027: x0 => x0.maxTouchPoints,
      _1028: x0 => x0.vendor,
      _1029: x0 => x0.language,
      _1030: x0 => x0.platform,
      _1031: x0 => x0.userAgent,
      _1032: x0 => x0.languages,
      _1033: x0 => x0.documentElement,
      _1034: (x0,x1) => x0.querySelector(x1),
      _1038: (x0,x1) => x0.createElement(x1),
      _1039: (x0,x1) => x0.execCommand(x1),
      _1042: (x0,x1) => x0.createTextNode(x1),
      _1043: (x0,x1) => x0.createEvent(x1),
      _1047: x0 => x0.head,
      _1048: x0 => x0.body,
      _1049: (x0,x1) => x0.title = x1,
      _1052: x0 => x0.activeElement,
      _1054: x0 => x0.visibilityState,
      _1056: x0 => x0.hasFocus(),
      _1057: () => globalThis.document,
      _1058: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1059: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1062: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1062(f,arguments.length,x0) }),
      _1063: x0 => x0.target,
      _1065: x0 => x0.timeStamp,
      _1066: x0 => x0.type,
      _1068: x0 => x0.preventDefault(),
      _1070: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      _1077: x0 => x0.firstChild,
      _1082: x0 => x0.parentElement,
      _1084: x0 => x0.parentNode,
      _1088: (x0,x1) => x0.removeChild(x1),
      _1089: (x0,x1) => x0.removeChild(x1),
      _1090: x0 => x0.isConnected,
      _1091: (x0,x1) => x0.textContent = x1,
      _1095: (x0,x1) => x0.contains(x1),
      _1101: x0 => x0.firstElementChild,
      _1103: x0 => x0.nextElementSibling,
      _1104: x0 => x0.clientHeight,
      _1105: x0 => x0.clientWidth,
      _1106: x0 => x0.offsetHeight,
      _1107: x0 => x0.offsetWidth,
      _1108: x0 => x0.id,
      _1109: (x0,x1) => x0.id = x1,
      _1112: (x0,x1) => x0.spellcheck = x1,
      _1113: x0 => x0.tagName,
      _1114: x0 => x0.style,
      _1115: (x0,x1) => x0.append(x1),
      _1117: (x0,x1) => x0.getAttribute(x1),
      _1118: x0 => x0.getBoundingClientRect(),
      _1121: (x0,x1) => x0.closest(x1),
      _1124: (x0,x1) => x0.querySelectorAll(x1),
      _1126: x0 => x0.remove(),
      _1127: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _1128: (x0,x1) => x0.removeAttribute(x1),
      _1129: (x0,x1) => x0.tabIndex = x1,
      _1132: (x0,x1) => x0.focus(x1),
      _1133: x0 => x0.scrollTop,
      _1134: (x0,x1) => x0.scrollTop = x1,
      _1135: x0 => x0.scrollLeft,
      _1136: (x0,x1) => x0.scrollLeft = x1,
      _1137: x0 => x0.classList,
      _1138: (x0,x1) => x0.className = x1,
      _1144: (x0,x1) => x0.getElementsByClassName(x1),
      _1146: x0 => x0.click(),
      _1147: (x0,x1) => x0.hasAttribute(x1),
      _1150: (x0,x1) => x0.attachShadow(x1),
      _1155: (x0,x1) => x0.getPropertyValue(x1),
      _1157: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      _1159: (x0,x1) => x0.removeProperty(x1),
      _1161: x0 => x0.offsetLeft,
      _1162: x0 => x0.offsetTop,
      _1163: x0 => x0.offsetParent,
      _1165: (x0,x1) => x0.name = x1,
      _1166: x0 => x0.content,
      _1167: (x0,x1) => x0.content = x1,
      _1185: (x0,x1) => x0.nonce = x1,
      _1191: x0 => x0.now(),
      _1193: (x0,x1) => x0.width = x1,
      _1195: (x0,x1) => x0.height = x1,
      _1199: (x0,x1) => x0.getContext(x1),
      _1270: x0 => x0.width,
      _1271: x0 => x0.height,
      _1275: (x0,x1) => x0.fetch(x1),
      _1276: x0 => x0.status,
      _1277: x0 => x0.headers,
      _1278: x0 => x0.body,
      _1279: x0 => x0.arrayBuffer(),
      _1282: (x0,x1) => x0.get(x1),
      _1285: x0 => x0.read(),
      _1286: x0 => x0.value,
      _1287: x0 => x0.done,
      _1289: x0 => x0.name,
      _1290: x0 => x0.x,
      _1291: x0 => x0.y,
      _1294: x0 => x0.top,
      _1295: x0 => x0.right,
      _1296: x0 => x0.bottom,
      _1297: x0 => x0.left,
      _1306: x0 => x0.height,
      _1307: x0 => x0.width,
      _1308: (x0,x1) => x0.value = x1,
      _1310: (x0,x1) => x0.placeholder = x1,
      _1311: (x0,x1) => x0.name = x1,
      _1312: x0 => x0.selectionDirection,
      _1313: x0 => x0.selectionStart,
      _1314: x0 => x0.selectionEnd,
      _1317: x0 => x0.value,
      _1319: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1322: x0 => x0.readText(),
      _1323: (x0,x1) => x0.writeText(x1),
      _1324: x0 => x0.altKey,
      _1325: x0 => x0.code,
      _1326: x0 => x0.ctrlKey,
      _1327: x0 => x0.key,
      _1328: x0 => x0.keyCode,
      _1329: x0 => x0.location,
      _1330: x0 => x0.metaKey,
      _1331: x0 => x0.repeat,
      _1332: x0 => x0.shiftKey,
      _1333: x0 => x0.isComposing,
      _1334: (x0,x1) => x0.getModifierState(x1),
      _1336: x0 => x0.state,
      _1337: (x0,x1) => x0.go(x1),
      _1339: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      _1341: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      _1342: x0 => x0.pathname,
      _1343: x0 => x0.search,
      _1344: x0 => x0.hash,
      _1348: x0 => x0.state,
      _1356: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1356(f,arguments.length,x0,x1) }),
      _1358: (x0,x1,x2) => x0.observe(x1,x2),
      _1361: x0 => x0.attributeName,
      _1362: x0 => x0.type,
      _1363: x0 => x0.matches,
      _1366: x0 => x0.matches,
      _1368: x0 => x0.relatedTarget,
      _1369: x0 => x0.clientX,
      _1370: x0 => x0.clientY,
      _1371: x0 => x0.offsetX,
      _1372: x0 => x0.offsetY,
      _1375: x0 => x0.button,
      _1376: x0 => x0.buttons,
      _1377: x0 => x0.ctrlKey,
      _1378: (x0,x1) => x0.getModifierState(x1),
      _1381: x0 => x0.pointerId,
      _1382: x0 => x0.pointerType,
      _1383: x0 => x0.pressure,
      _1384: x0 => x0.tiltX,
      _1385: x0 => x0.tiltY,
      _1386: x0 => x0.getCoalescedEvents(),
      _1388: x0 => x0.deltaX,
      _1389: x0 => x0.deltaY,
      _1390: x0 => x0.wheelDeltaX,
      _1391: x0 => x0.wheelDeltaY,
      _1392: x0 => x0.deltaMode,
      _1398: x0 => x0.changedTouches,
      _1400: x0 => x0.clientX,
      _1401: x0 => x0.clientY,
      _1403: x0 => x0.data,
      _1406: (x0,x1) => x0.disabled = x1,
      _1407: (x0,x1) => x0.type = x1,
      _1408: (x0,x1) => x0.max = x1,
      _1409: (x0,x1) => x0.min = x1,
      _1410: (x0,x1) => x0.value = x1,
      _1411: x0 => x0.value,
      _1412: x0 => x0.disabled,
      _1413: (x0,x1) => x0.disabled = x1,
      _1414: (x0,x1) => x0.placeholder = x1,
      _1415: (x0,x1) => x0.name = x1,
      _1416: (x0,x1) => x0.autocomplete = x1,
      _1417: x0 => x0.selectionDirection,
      _1418: x0 => x0.selectionStart,
      _1419: x0 => x0.selectionEnd,
      _1423: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1428: (x0,x1) => x0.add(x1),
      _1432: (x0,x1) => x0.noValidate = x1,
      _1433: (x0,x1) => x0.method = x1,
      _1434: (x0,x1) => x0.action = x1,
      _1440: (x0,x1) => x0.getContext(x1),
      _1442: x0 => x0.convertToBlob(),
      _1459: x0 => x0.orientation,
      _1460: x0 => x0.width,
      _1461: x0 => x0.height,
      _1462: (x0,x1) => x0.lock(x1),
      _1478: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1478(f,arguments.length,x0,x1) }),
      _1489: x0 => x0.length,
      _1491: (x0,x1) => x0.item(x1),
      _1492: x0 => x0.length,
      _1493: (x0,x1) => x0.item(x1),
      _1494: x0 => x0.iterator,
      _1495: x0 => x0.Segmenter,
      _1496: x0 => x0.v8BreakIterator,
      _1499: x0 => x0.done,
      _1500: x0 => x0.value,
      _1501: x0 => x0.index,
      _1505: (x0,x1) => x0.adoptText(x1),
      _1506: x0 => x0.first(),
      _1507: x0 => x0.next(),
      _1508: x0 => x0.current(),
      _1522: x0 => x0.hostElement,
      _1523: x0 => x0.viewConstraints,
      _1525: x0 => x0.maxHeight,
      _1526: x0 => x0.maxWidth,
      _1527: x0 => x0.minHeight,
      _1528: x0 => x0.minWidth,
      _1529: x0 => x0.loader,
      _1530: () => globalThis._flutter,
      _1531: (x0,x1) => x0.didCreateEngineInitializer(x1),
      _1532: (x0,x1,x2) => x0.call(x1,x2),
      _1533: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1533(f,arguments.length,x0,x1) }),
      _1534: x0 => new Promise(x0),
      _1537: x0 => x0.length,
      _1540: x0 => x0.tracks,
      _1544: x0 => x0.image,
      _1551: x0 => x0.displayWidth,
      _1552: x0 => x0.displayHeight,
      _1553: x0 => x0.duration,
      _1556: x0 => x0.ready,
      _1557: x0 => x0.selectedTrack,
      _1558: x0 => x0.repetitionCount,
      _1559: x0 => x0.frameCount,
      _1604: f => finalizeWrapper(f, function(x0,x1,x2) { return dartInstance.exports._1604(f,arguments.length,x0,x1,x2) }),
      _1605: (x0,x1) => x0.append(x1),
      _1606: (x0,x1) => x0.append(x1),
      _1611: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _1612: (x0,x1) => x0.removeAttribute(x1),
      _1613: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _1615: (x0,x1) => x0.getResponseHeader(x1),
      _1638: (x0,x1) => x0.item(x1),
      _1640: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _1641: (x0,x1) => x0.removeAttribute(x1),
      _1642: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _1644: x0 => x0.remove(),
      _1645: (x0,x1) => x0.csp = x1,
      _1646: x0 => x0.csp,
      _1647: (x0,x1) => x0.getCookieExpirationDate(x1),
      _1648: x0 => x0.decode(),
      _1649: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1650: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      _1651: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1651(f,arguments.length,x0) }),
      _1652: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1653: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1653(f,arguments.length,x0) }),
      _1654: x0 => x0.send(),
      _1655: () => new XMLHttpRequest(),
      _1656: (x0,x1) => x0.createElement(x1),
      _1657: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1657(f,arguments.length,x0) }),
      _1658: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1658(f,arguments.length,x0) }),
      _1659: (x0,x1) => x0.append(x1),
      _1660: x0 => x0.getVideoTracks(),
      _1661: x0 => x0.getSupportedConstraints(),
      _1662: x0 => ({video: x0}),
      _1663: x0 => ({facingMode: x0}),
      _1664: (x0,x1) => x0.getUserMedia(x1),
      _1665: (x0,x1) => x0.querySelector(x1),
      _1666: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1666(f,arguments.length,x0) }),
      _1667: (x0,x1) => x0.removeChild(x1),
      _1668: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1668(f,arguments.length,x0) }),
      _1669: (x0,x1) => x0.appendChild(x1),
      _1670: () => new Map(),
      _1671: (x0,x1,x2) => x0.set(x1,x2),
      _1672: (x0,x1,x2,x3) => x0.call(x1,x2,x3),
      _1673: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1673(f,arguments.length,x0,x1) }),
      _1674: (x0,x1) => x0.call(x1),
      _1675: (x0,x1) => new ZXing.BrowserMultiFormatReader(x0,x1),
      _1677: x0 => x0.play(),
      _1678: x0 => x0.createRange(),
      _1679: (x0,x1) => x0.selectNode(x1),
      _1680: x0 => x0.getSelection(),
      _1681: x0 => x0.removeAllRanges(),
      _1682: (x0,x1) => x0.addRange(x1),
      _1683: (x0,x1) => x0.add(x1),
      _1684: (x0,x1) => x0.append(x1),
      _1685: (x0,x1,x2) => x0.insertRule(x1,x2),
      _1686: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1686(f,arguments.length,x0) }),
      _1687: (x0,x1) => x0.createElement(x1),
      _1688: x0 => x0.back(),
      _1694: x0 => x0.load(),
      _1695: x0 => x0.play(),
      _1696: x0 => x0.pause(),
      _1699: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1702: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _1704: (x0,x1) => x0.removeAttribute(x1),
      _1705: x0 => x0.load(),
      _1706: (x0,x1) => x0.start(x1),
      _1707: (x0,x1) => x0.end(x1),
      _1710: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1711: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
      _1725: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1726: x0 => x0.createReader(),
      _1727: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1727(f,arguments.length,x0) }),
      _1728: (x0,x1) => x0.readEntries(x1),
      _1729: () => new Blob(),
      _1730: (x0,x1,x2,x3) => x0.slice(x1,x2,x3),
      _1731: x0 => globalThis.URL.createObjectURL(x0),
      _1732: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1732(f,arguments.length,x0) }),
      _1733: (x0,x1) => x0.file(x1),
      _1734: x0 => globalThis.URL.createObjectURL(x0),
      _1735: x0 => x0.preventDefault(),
      _1736: x0 => x0.webkitGetAsEntry(),
      _1737: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1737(f,arguments.length,x0) }),
      _1738: x0 => x0.preventDefault(),
      _1739: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1739(f,arguments.length,x0) }),
      _1740: x0 => x0.preventDefault(),
      _1741: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1741(f,arguments.length,x0) }),
      _1742: x0 => x0.preventDefault(),
      _1743: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1743(f,arguments.length,x0) }),
      _1745: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1745(f,arguments.length,x0) }),
      _1746: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1746(f,arguments.length,x0) }),
      _1747: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1747(f,arguments.length,x0) }),
      _1748: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1748(f,arguments.length,x0) }),
      _1749: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1749(f,arguments.length,x0) }),
      _1750: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1750(f,arguments.length,x0) }),
      _1751: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1751(f,arguments.length,x0) }),
      _1752: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1752(f,arguments.length,x0) }),
      _1753: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1753(f,arguments.length,x0) }),
      _1754: x0 => x0.load(),
      _1755: (x0,x1) => x0.setSinkId(x1),
      _1756: (x0,x1) => x0.removeAttribute(x1),
      _1757: x0 => x0.load(),
      _1758: (x0,x1) => x0.end(x1),
      _1760: x0 => x0.play(),
      _1761: x0 => x0.pause(),
      _1764: (x0,x1) => x0.query(x1),
      _1765: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1765(f,arguments.length,x0) }),
      _1766: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1766(f,arguments.length,x0) }),
      _1767: (x0,x1,x2) => ({enableHighAccuracy: x0,timeout: x1,maximumAge: x2}),
      _1768: (x0,x1,x2,x3) => x0.getCurrentPosition(x1,x2,x3),
      _1769: (x0,x1) => x0.clearWatch(x1),
      _1770: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1770(f,arguments.length,x0) }),
      _1771: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1771(f,arguments.length,x0) }),
      _1772: (x0,x1,x2,x3) => x0.watchPosition(x1,x2,x3),
      _1773: (x0,x1) => x0.getItem(x1),
      _1774: (x0,x1) => x0.removeItem(x1),
      _1775: (x0,x1,x2) => x0.setItem(x1,x2),
      _1779: (x0,x1) => x0.querySelector(x1),
      _1780: (x0,x1) => x0.querySelector(x1),
      _1781: (x0,x1) => x0.item(x1),
      _1784: () => new FileReader(),
      _1785: (x0,x1) => x0.readAsArrayBuffer(x1),
      _1786: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1786(f,arguments.length,x0) }),
      _1787: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1787(f,arguments.length,x0) }),
      _1788: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1788(f,arguments.length,x0) }),
      _1789: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1789(f,arguments.length,x0) }),
      _1790: (x0,x1) => x0.removeChild(x1),
      _1791: x0 => x0.click(),
      _1792: (x0,x1) => x0.removeChild(x1),
      _1796: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _1797: (x0,x1) => x0.querySelector(x1),
      _1798: (x0,x1) => x0.append(x1),
      _1799: (x0,x1) => x0.querySelector(x1),
      _1800: (x0,x1) => x0.querySelector(x1),
      _1801: x0 => x0.remove(),
      _1802: (x0,x1) => x0.append(x1),
      _1803: (x0,x1) => x0.querySelector(x1),
      _1804: (x0,x1) => x0.getAttribute(x1),
      _1805: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _1806: (x0,x1) => x0.removeItem(x1),
      _1811: (x0,x1,x2,x3,x4,x5,x6,x7) => x0.unwrapKey(x1,x2,x3,x4,x5,x6,x7),
      _1812: (x0,x1,x2,x3,x4,x5) => x0.importKey(x1,x2,x3,x4,x5),
      _1813: (x0,x1,x2,x3) => x0.generateKey(x1,x2,x3),
      _1814: (x0,x1,x2,x3,x4) => x0.wrapKey(x1,x2,x3,x4),
      _1815: (x0,x1,x2) => x0.exportKey(x1,x2),
      _1816: (x0,x1,x2,x3,x4,x5) => x0.importKey(x1,x2,x3,x4,x5),
      _1817: (x0,x1) => x0.getRandomValues(x1),
      _1818: (x0,x1,x2,x3) => x0.encrypt(x1,x2,x3),
      _1819: (x0,x1,x2,x3) => x0.decrypt(x1,x2,x3),
      _1820: x0 => ({type: x0}),
      _1821: (x0,x1) => new Blob(x0,x1),
      _1822: x0 => globalThis.URL.createObjectURL(x0),
      _1823: x0 => x0.click(),
      _1824: x0 => x0.remove(),
      _1825: x0 => x0.barcodeFormat,
      _1826: x0 => x0.text,
      _1827: x0 => x0.rawBytes,
      _1828: x0 => x0.resultPoints,
      _1830: () => globalThis.getLaunchMode(),
      _1831: () => globalThis.promptInstall(),
      _1832: f => finalizeWrapper(f, function() { return dartInstance.exports._1832(f,arguments.length) }),
      _1833: f => finalizeWrapper(f, function() { return dartInstance.exports._1833(f,arguments.length) }),
      _1834: f => finalizeWrapper(f, function() { return dartInstance.exports._1834(f,arguments.length) }),
      _1835: f => finalizeWrapper(f, function() { return dartInstance.exports._1835(f,arguments.length) }),
      _1836: f => finalizeWrapper(f, function() { return dartInstance.exports._1836(f,arguments.length) }),
      _1837: x0 => globalThis.appLaunchedAsPWA = x0,
      _1838: x0 => globalThis.appLaunchedAsTWA = x0,
      _1839: x0 => globalThis.hasPrompt = x0,
      _1841: x0 => globalThis.appInstalled = x0,
      _1842: x0 => globalThis.appLaunchedInBrowser = x0,
      _1854: () => new Array(),
      _1855: x0 => new Array(x0),
      _1857: x0 => x0.length,
      _1859: (x0,x1) => x0[x1],
      _1860: (x0,x1,x2) => x0[x1] = x2,
      _1861: x0 => new Promise(x0),
      _1863: (x0,x1,x2) => new DataView(x0,x1,x2),
      _1865: x0 => new Int8Array(x0),
      _1866: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      _1867: x0 => new Uint8Array(x0),
      _1871: x0 => new Int16Array(x0),
      _1873: x0 => new Uint16Array(x0),
      _1875: x0 => new Int32Array(x0),
      _1877: x0 => new Uint32Array(x0),
      _1879: x0 => new Float32Array(x0),
      _1881: x0 => new Float64Array(x0),
      _1882: (o, t) => typeof o === t,
      _1883: (o, c) => o instanceof c,
      _1886: (o,s,v) => o[s] = v,
      _1887: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1887(f,arguments.length,x0) }),
      _1888: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1888(f,arguments.length,x0) }),
      _1889: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1889(f,arguments.length,x0,x1) }),
      _1891: (o, a) => o + a,
      _1911: () => Symbol("jsBoxedDartObjectProperty"),
      _1912: (decoder, codeUnits) => decoder.decode(codeUnits),
      _1913: () => new TextDecoder("utf-8", {fatal: true}),
      _1914: () => new TextDecoder("utf-8", {fatal: false}),
      _1915: x0 => new WeakRef(x0),
      _1916: x0 => x0.deref(),
      _1922: Date.now,
      _1924: s => new Date(s * 1000).getTimezoneOffset() * 60,
      _1925: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      _1926: () => {
        let stackString = new Error().stack.toString();
        let frames = stackString.split('\n');
        let drop = 2;
        if (frames[0] === 'Error') {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      _1927: () => typeof dartUseDateNowForTicks !== "undefined",
      _1928: () => 1000 * performance.now(),
      _1929: () => Date.now(),
      _1930: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      _1931: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      _1932: () => new WeakMap(),
      _1933: (map, o) => map.get(o),
      _1934: (map, o, v) => map.set(o, v),
      _1935: () => globalThis.WeakRef,
      _1946: s => JSON.stringify(s),
      _1947: s => printToConsole(s),
      _1948: a => a.join(''),
      _1949: (o, a, b) => o.replace(a, b),
      _1950: (o, p, r) => o.split(p).join(r),
      _1951: (s, t) => s.split(t),
      _1952: s => s.toLowerCase(),
      _1953: s => s.toUpperCase(),
      _1954: s => s.trim(),
      _1955: s => s.trimLeft(),
      _1956: s => s.trimRight(),
      _1957: (s, n) => s.repeat(n),
      _1958: (s, p, i) => s.indexOf(p, i),
      _1959: (s, p, i) => s.lastIndexOf(p, i),
      _1960: (s) => s.replace(/\$/g, "$$$$"),
      _1961: Object.is,
      _1962: s => s.toUpperCase(),
      _1963: s => s.toLowerCase(),
      _1964: (a, i) => a.push(i),
      _1965: (a, i) => a.splice(i, 1)[0],
      _1966: (a, i, v) => a.splice(i, 0, v),
      _1967: (a, l) => a.length = l,
      _1968: a => a.pop(),
      _1969: (a, i) => a.splice(i, 1),
      _1971: (a, s) => a.join(s),
      _1972: (a, s, e) => a.slice(s, e),
      _1974: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _1975: a => a.length,
      _1976: (a, l) => a.length = l,
      _1977: (a, i) => a[i],
      _1978: (a, i, v) => a[i] = v,
      _1980: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      _1981: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _1982: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _1983: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _1984: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _1985: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _1986: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _1987: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _1989: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      _1990: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _1991: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _1992: (t, s) => t.set(s),
      _1993: l => new DataView(new ArrayBuffer(l)),
      _1994: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _1995: o => o.byteLength,
      _1996: o => o.buffer,
      _1997: o => o.byteOffset,
      _1998: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _1999: (b, o) => new DataView(b, o),
      _2000: (b, o, l) => new DataView(b, o, l),
      _2001: Function.prototype.call.bind(DataView.prototype.getUint8),
      _2002: Function.prototype.call.bind(DataView.prototype.setUint8),
      _2003: Function.prototype.call.bind(DataView.prototype.getInt8),
      _2004: Function.prototype.call.bind(DataView.prototype.setInt8),
      _2005: Function.prototype.call.bind(DataView.prototype.getUint16),
      _2006: Function.prototype.call.bind(DataView.prototype.setUint16),
      _2007: Function.prototype.call.bind(DataView.prototype.getInt16),
      _2008: Function.prototype.call.bind(DataView.prototype.setInt16),
      _2009: Function.prototype.call.bind(DataView.prototype.getUint32),
      _2010: Function.prototype.call.bind(DataView.prototype.setUint32),
      _2011: Function.prototype.call.bind(DataView.prototype.getInt32),
      _2012: Function.prototype.call.bind(DataView.prototype.setInt32),
      _2015: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      _2016: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      _2017: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _2018: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _2019: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _2020: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _2022: () => globalThis.performance,
      _2023: () => globalThis.JSON,
      _2024: x0 => x0.measure,
      _2025: x0 => x0.mark,
      _2026: x0 => x0.clearMeasures,
      _2027: x0 => x0.clearMarks,
      _2028: (x0,x1,x2,x3) => x0.measure(x1,x2,x3),
      _2029: (x0,x1,x2) => x0.mark(x1,x2),
      _2030: x0 => x0.clearMeasures(),
      _2031: x0 => x0.clearMarks(),
      _2032: (x0,x1) => x0.parse(x1),
      _2033: () => new XMLHttpRequest(),
      _2034: (x0,x1,x2) => x0.open(x1,x2),
      _2035: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      _2036: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      _2037: x0 => x0.abort(),
      _2038: x0 => x0.abort(),
      _2039: x0 => x0.abort(),
      _2040: x0 => x0.abort(),
      _2041: (x0,x1) => x0.send(x1),
      _2042: x0 => x0.send(),
      _2044: x0 => x0.getAllResponseHeaders(),
      _2045: (o, t) => o instanceof t,
      _2047: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2047(f,arguments.length,x0) }),
      _2048: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2048(f,arguments.length,x0) }),
      _2049: o => Object.keys(o),
      _2050: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      _2051: (handle) => clearTimeout(handle),
      _2052: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      _2053: (handle) => clearInterval(handle),
      _2054: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      _2055: () => Date.now(),
      _2061: x0 => x0.continue(),
      _2063: x0 => x0.delete(),
      _2066: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2066(f,arguments.length,x0) }),
      _2067: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2067(f,arguments.length,x0) }),
      _2078: (x0,x1) => x0.getKey(x1),
      _2084: x0 => x0.openCursor(),
      _2087: (x0,x1) => ({unique: x0,multiEntry: x1}),
      _2088: (x0,x1,x2,x3) => x0.createIndex(x1,x2,x3),
      _2090: (x0,x1) => x0.add(x1),
      _2092: (x0,x1) => x0.get(x1),
      _2094: (x0,x1) => x0.put(x1),
      _2095: (x0,x1,x2) => x0.put(x1,x2),
      _2096: (x0,x1) => x0.delete(x1),
      _2097: (x0,x1) => x0.index(x1),
      _2098: x0 => x0.openCursor(),
      _2099: (x0,x1) => x0.openCursor(x1),
      _2105: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2105(f,arguments.length,x0) }),
      _2106: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2106(f,arguments.length,x0) }),
      _2107: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2107(f,arguments.length,x0) }),
      _2108: (x0,x1) => x0.objectStore(x1),
      _2110: (x0,x1) => ({keyPath: x0,autoIncrement: x1}),
      _2111: (x0,x1,x2) => x0.createObjectStore(x1,x2),
      _2112: (x0,x1,x2) => x0.transaction(x1,x2),
      _2113: x0 => x0.close(),
      _2116: (x0,x1,x2) => x0.open(x1,x2),
      _2117: (x0,x1) => x0.open(x1),
      _2119: x0 => x0.close(),
      _2120: (x0,x1) => x0.deleteDatabase(x1),
      _2123: (x0,x1,x2) => x0.setItem(x1,x2),
      _2124: (x0,x1) => x0.removeItem(x1),
      _2125: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2125(f,arguments.length,x0) }),
      _2127: (x0,x1) => globalThis.IDBKeyRange.lowerBound(x0,x1),
      _2128: (x0,x1) => globalThis.IDBKeyRange.upperBound(x0,x1),
      _2135: (x0,x1) => x0.item(x1),
      _2137: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2137(f,arguments.length,x0) }),
      _2138: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2138(f,arguments.length,x0) }),
      _2139: (x0,x1) => new WebSocket(x0,x1),
      _2142: (x0,x1,x2) => x0.close(x1,x2),
      _2143: (x0,x1) => x0.close(x1),
      _2144: x0 => x0.close(),
      _2145: (x0,x1) => x0.send(x1),
      _2281: (x0,x1,x2,x3,x4,x5) => ({method: x0,headers: x1,body: x2,credentials: x3,redirect: x4,signal: x5}),
      _2282: (x0,x1,x2) => x0.fetch(x1,x2),
      _2283: (x0,x1) => x0.get(x1),
      _2284: f => finalizeWrapper(f, function(x0,x1,x2) { return dartInstance.exports._2284(f,arguments.length,x0,x1,x2) }),
      _2285: (x0,x1) => x0.forEach(x1),
      _2286: x0 => x0.abort(),
      _2287: () => new AbortController(),
      _2288: x0 => x0.getReader(),
      _2289: x0 => x0.read(),
      _2290: x0 => x0.cancel(),
      _2292: x0 => new BroadcastChannel(x0),
      _2293: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2293(f,arguments.length,x0) }),
      _2294: (x0,x1) => x0.postMessage(x1),
      _2295: x0 => x0.close(),
      _2298: () => new XMLHttpRequest(),
      _2299: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _2300: () => new FileReader(),
      _2301: (x0,x1) => x0.readAsArrayBuffer(x1),
      _2304: () => new XMLHttpRequest(),
      _2306: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      _2309: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2309(f,arguments.length,x0) }),
      _2310: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2310(f,arguments.length,x0) }),
      _2324: x0 => x0.attachStreamToVideo,
      _2326: x0 => x0.decodeContinuously,
      _2330: x0 => x0.reset,
      _2332: x0 => x0.stopContinuousDecode,
      _2334: x0 => x0.stream,
      _2335: x0 => x0.videoElement,
      _2371: () => globalThis.window.flutter_inappwebview,
      _2377: (x0,x1) => x0.nativeCommunication = x1,
      _2378: (x0,x1) => x0.getItem(x1),
      _2379: (x0,x1) => x0.getItem(x1),
      _2380: (x0,x1) => x0.removeItem(x1),
      _2381: (x0,x1,x2) => x0.setItem(x1,x2),
      _2382: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2382(f,arguments.length,x0) }),
      _2383: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2383(f,arguments.length,x0) }),
      _2384: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2384(f,arguments.length,x0) }),
      _2385: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2385(f,arguments.length,x0) }),
      _2386: (x0,x1,x2) => x0.open(x1,x2),
      _2387: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      _2388: (x0,x1) => x0.appendChild(x1),
      _2389: (x0,x1) => x0.item(x1),
      _2390: (x0,x1) => x0.key(x1),
      _2392: x0 => x0.facingMode,
      _2393: x0 => x0.getVideoTracks(),
      _2394: x0 => x0.getSettings(),
      _2395: (x0,x1) => ({width: x0,height: x1}),
      _2396: (x0,x1,x2) => ({width: x0,height: x1,facingMode: x2}),
      _2409: (x0,x1) => x0.getItem(x1),
      _2410: (x0,x1,x2) => x0.setItem(x1,x2),
      _2412: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      _2413: (x0,x1) => x0.exec(x1),
      _2414: (x0,x1) => x0.test(x1),
      _2415: (x0,x1) => x0.exec(x1),
      _2416: (x0,x1) => x0.exec(x1),
      _2417: x0 => x0.pop(),
      _2419: o => o === undefined,
      _2438: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      _2440: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      _2441: o => o instanceof RegExp,
      _2442: (l, r) => l === r,
      _2443: o => o,
      _2444: o => o,
      _2445: o => o,
      _2446: b => !!b,
      _2447: o => o.length,
      _2450: (o, i) => o[i],
      _2451: f => f.dartFunction,
      _2452: l => arrayFromDartList(Int8Array, l),
      _2453: l => arrayFromDartList(Uint8Array, l),
      _2454: l => arrayFromDartList(Uint8ClampedArray, l),
      _2455: l => arrayFromDartList(Int16Array, l),
      _2456: l => arrayFromDartList(Uint16Array, l),
      _2457: l => arrayFromDartList(Int32Array, l),
      _2458: l => arrayFromDartList(Uint32Array, l),
      _2459: l => arrayFromDartList(Float32Array, l),
      _2460: l => arrayFromDartList(Float64Array, l),
      _2461: x0 => new ArrayBuffer(x0),
      _2462: (data, length) => {
        const getValue = dartInstance.exports.$byteDataGetUint8;
        const view = new DataView(new ArrayBuffer(length));
        for (let i = 0; i < length; i++) {
          view.setUint8(i, getValue(data, i));
        }
        return view;
      },
      _2463: l => arrayFromDartList(Array, l),
      _2464: () => ({}),
      _2465: () => [],
      _2466: l => new Array(l),
      _2467: () => globalThis,
      _2468: (constructor, args) => {
        const factoryFunction = constructor.bind.apply(
            constructor, [null, ...args]);
        return new factoryFunction();
      },
      _2469: (o, p) => p in o,
      _2470: (o, p) => o[p],
      _2471: (o, p, v) => o[p] = v,
      _2472: (o, m, a) => o[m].apply(o, a),
      _2474: o => String(o),
      _2475: (p, s, f) => p.then(s, f),
      _2476: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        return 17;
      },
      _2477: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2478: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2479: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2480: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI16ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2481: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2482: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2483: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2484: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2485: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _2486: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _2487: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      _2490: x0 => x0.index,
      _2491: x0 => x0.groups,
      _2493: (x0,x1) => x0.exec(x1),
      _2495: x0 => x0.flags,
      _2496: x0 => x0.multiline,
      _2497: x0 => x0.ignoreCase,
      _2498: x0 => x0.unicode,
      _2499: x0 => x0.dotAll,
      _2500: (x0,x1) => x0.lastIndex = x1,
      _2501: (o, p) => p in o,
      _2502: (o, p) => o[p],
      _2503: (o, p, v) => o[p] = v,
      _2505: x0 => globalThis.Object.keys(x0),
      _2506: x0 => new Date(x0),
      _2508: x0 => x0.getTime(),
      _2509: x0 => x0.length,
      _2510: x0 => x0.message,
      _2511: x0 => x0.name,
      _2529: x0 => x0.random(),
      _2530: x0 => x0.random(),
      _2531: (x0,x1) => x0.getRandomValues(x1),
      _2532: () => globalThis.crypto,
      _2534: () => globalThis.Math,
      _2536: Function.prototype.call.bind(Number.prototype.toString),
      _2537: (d, digits) => d.toFixed(digits),
      _2541: () => globalThis.document,
      _2542: () => globalThis.window,
      _2547: (x0,x1) => x0.height = x1,
      _2549: (x0,x1) => x0.width = x1,
      _2553: x0 => x0.head,
      _2556: x0 => x0.classList,
      _2561: (x0,x1) => x0.innerText = x1,
      _2562: x0 => x0.style,
      _2564: x0 => x0.sheet,
      _2565: x0 => x0.src,
      _2566: (x0,x1) => x0.src = x1,
      _2567: x0 => x0.naturalWidth,
      _2568: x0 => x0.naturalHeight,
      _2576: x0 => x0.offsetX,
      _2577: x0 => x0.offsetY,
      _2578: x0 => x0.button,
      _2593: x0 => x0.status,
      _2594: (x0,x1) => x0.responseType = x1,
      _2596: x0 => x0.response,
      _2597: x0 => x0.x,
      _2598: x0 => x0.y,
      _2646: x0 => x0.readyState,
      _2648: (x0,x1) => x0.timeout = x1,
      _2650: (x0,x1) => x0.withCredentials = x1,
      _2651: x0 => x0.upload,
      _2652: x0 => x0.responseURL,
      _2653: x0 => x0.status,
      _2654: x0 => x0.statusText,
      _2656: (x0,x1) => x0.responseType = x1,
      _2657: x0 => x0.response,
      _2658: x0 => x0.responseText,
      _2671: x0 => x0.loaded,
      _2672: x0 => x0.total,
      _2697: x0 => x0.length,
      _2708: (x0,x1) => x0.lang = x1,
      _2721: (x0,x1) => x0.draggable = x1,
      _2737: x0 => x0.style,
      _2796: (x0,x1) => x0.onerror = x1,
      _2812: (x0,x1) => x0.onload = x1,
      _2836: (x0,x1) => x0.onpause = x1,
      _2838: (x0,x1) => x0.onplay = x1,
      _2952: (x0,x1) => x0.href = x1,
      _3096: (x0,x1) => x0.download = x1,
      _3121: (x0,x1) => x0.href = x1,
      _3214: x0 => x0.src,
      _3215: (x0,x1) => x0.src = x1,
      _3218: x0 => x0.name,
      _3219: (x0,x1) => x0.name = x1,
      _3220: x0 => x0.sandbox,
      _3221: x0 => x0.allow,
      _3222: (x0,x1) => x0.allow = x1,
      _3223: x0 => x0.allowFullscreen,
      _3224: (x0,x1) => x0.allowFullscreen = x1,
      _3229: x0 => x0.referrerPolicy,
      _3230: (x0,x1) => x0.referrerPolicy = x1,
      _3310: x0 => x0.videoWidth,
      _3311: x0 => x0.videoHeight,
      _3315: (x0,x1) => x0.playsInline = x1,
      _3344: x0 => x0.error,
      _3345: x0 => x0.src,
      _3346: (x0,x1) => x0.src = x1,
      _3354: (x0,x1) => x0.preload = x1,
      _3355: x0 => x0.buffered,
      _3358: x0 => x0.currentTime,
      _3359: (x0,x1) => x0.currentTime = x1,
      _3360: x0 => x0.duration,
      _3361: x0 => x0.paused,
      _3365: (x0,x1) => x0.playbackRate = x1,
      _3372: (x0,x1) => x0.autoplay = x1,
      _3374: (x0,x1) => x0.loop = x1,
      _3376: (x0,x1) => x0.controls = x1,
      _3378: (x0,x1) => x0.volume = x1,
      _3380: (x0,x1) => x0.muted = x1,
      _3395: x0 => x0.code,
      _3396: x0 => x0.message,
      _3472: x0 => x0.length,
      _3669: (x0,x1) => x0.accept = x1,
      _3683: x0 => x0.files,
      _3709: (x0,x1) => x0.multiple = x1,
      _3727: (x0,x1) => x0.type = x1,
      _3981: x0 => x0.src,
      _3982: (x0,x1) => x0.src = x1,
      _3984: (x0,x1) => x0.type = x1,
      _3988: (x0,x1) => x0.async = x1,
      _3990: (x0,x1) => x0.defer = x1,
      _3992: (x0,x1) => x0.crossOrigin = x1,
      _4002: (x0,x1) => x0.charset = x1,
      _4451: x0 => x0.items,
      _4454: (x0,x1) => x0[x1],
      _4458: x0 => x0.length,
      _4465: x0 => x0.dataTransfer,
      _4469: () => globalThis.window,
      _4511: x0 => x0.document,
      _4514: x0 => x0.location,
      _4515: x0 => x0.history,
      _4533: x0 => x0.navigator,
      _4604: (x0,x1) => x0.ondragenter = x1,
      _4606: (x0,x1) => x0.ondragleave = x1,
      _4608: (x0,x1) => x0.ondragover = x1,
      _4612: (x0,x1) => x0.ondrop = x1,
      _4778: (x0,x1) => x0.onstorage = x1,
      _4790: x0 => x0.indexedDB,
      _4791: x0 => x0.crypto,
      _4796: x0 => x0.sessionStorage,
      _4797: x0 => x0.localStorage,
      _4805: x0 => x0.href,
      _4828: x0 => x0.length,
      _4904: x0 => x0.geolocation,
      _4907: x0 => x0.mediaDevices,
      _4909: x0 => x0.permissions,
      _4923: x0 => x0.userAgent,
      _4924: x0 => x0.vendor,
      _4974: x0 => x0.data,
      _5027: (x0,x1) => x0.onmessage = x1,
      _5143: x0 => x0.length,
      _5146: x0 => x0.key,
      _5148: x0 => x0.newValue,
      _5365: x0 => x0.readyState,
      _5378: (x0,x1) => x0.binaryType = x1,
      _5381: x0 => x0.code,
      _5382: x0 => x0.reason,
      _7125: x0 => x0.type,
      _7126: x0 => x0.target,
      _7168: x0 => x0.signal,
      _7181: x0 => x0.length,
      _7230: x0 => x0.baseURI,
      _7236: x0 => x0.firstChild,
      _7247: () => globalThis.document,
      _7340: x0 => x0.body,
      _7342: x0 => x0.head,
      _7690: x0 => x0.id,
      _7691: (x0,x1) => x0.id = x1,
      _7714: x0 => x0.innerHTML,
      _7715: (x0,x1) => x0.innerHTML = x1,
      _7718: x0 => x0.children,
      _7935: x0 => x0.length,
      _8038: x0 => x0.clientX,
      _8039: x0 => x0.clientY,
      _9072: x0 => x0.value,
      _9074: x0 => x0.done,
      _9251: x0 => x0.size,
      _9252: x0 => x0.type,
      _9259: x0 => x0.name,
      _9260: x0 => x0.lastModified,
      _9266: x0 => x0.length,
      _9277: x0 => x0.result,
      _9785: x0 => x0.url,
      _9787: x0 => x0.status,
      _9789: x0 => x0.statusText,
      _9790: x0 => x0.headers,
      _9791: x0 => x0.body,
      _10190: x0 => x0.state,
      _10609: x0 => x0.label,
      _10631: x0 => x0.facingMode,
      _10845: x0 => x0.width,
      _10847: x0 => x0.height,
      _10853: x0 => x0.facingMode,
      _11263: x0 => x0.result,
      _11264: x0 => x0.error,
      _11269: (x0,x1) => x0.onsuccess = x1,
      _11271: (x0,x1) => x0.onerror = x1,
      _11277: x0 => x0.oldVersion,
      _11295: x0 => x0.name,
      _11297: x0 => x0.objectStoreNames,
      _11320: x0 => x0.name,
      _11322: x0 => x0.keyPath,
      _11325: x0 => x0.autoIncrement,
      _11332: x0 => x0.name,
      _11335: x0 => x0.keyPath,
      _11336: x0 => x0.multiEntry,
      _11337: x0 => x0.unique,
      _11351: x0 => x0.key,
      _11352: x0 => x0.primaryKey,
      _11354: x0 => x0.value,
      _11362: x0 => x0.error,
      _11364: (x0,x1) => x0.onabort = x1,
      _11366: (x0,x1) => x0.oncomplete = x1,
      _11368: (x0,x1) => x0.onerror = x1,
      _11496: x0 => x0.coords,
      _11497: x0 => x0.timestamp,
      _11499: x0 => x0.accuracy,
      _11500: x0 => x0.latitude,
      _11501: x0 => x0.longitude,
      _11502: x0 => x0.altitude,
      _11503: x0 => x0.altitudeAccuracy,
      _11504: x0 => x0.heading,
      _11505: x0 => x0.speed,
      _11506: x0 => x0.code,
      _11507: x0 => x0.message,
      _11922: (x0,x1) => x0.border = x1,
      _12200: (x0,x1) => x0.display = x1,
      _12364: (x0,x1) => x0.height = x1,
      _12558: (x0,x1) => x0.objectFit = x1,
      _12688: (x0,x1) => x0.pointerEvents = x1,
      _12986: (x0,x1) => x0.transform = x1,
      _12990: (x0,x1) => x0.transformOrigin = x1,
      _13054: (x0,x1) => x0.width = x1,
      _13431: x0 => x0.name,
      _13432: x0 => x0.message,
      _13437: x0 => x0.subtle,
      _14126: x0 => x0.isDirectory,
      _14127: x0 => x0.name,
      _14128: x0 => x0.fullPath,
      _14188: () => globalThis.window.flutterCanvasKit,
      _14189: () => globalThis.window._flutter_skwasmInstance,
      _14190: x0 => x0.message,

    };

    const baseImports = {
      dart2wasm: dart2wasm,


      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
    };

    const deferredLibraryHelper = {
      "loadModule": async (moduleName) => {
        if (!loadDeferredWasm) {
          throw "No implementation of loadDeferredWasm provided.";
        }
        const source = await Promise.resolve(loadDeferredWasm(moduleName));
        const module = await ((source instanceof Response)
            ? WebAssembly.compileStreaming(source, this.builtins)
            : WebAssembly.compile(source, this.builtins));
        return await WebAssembly.instantiate(module, {
          ...baseImports,
          ...additionalImports,
          "wasm:js-string": jsStringPolyfill,
          "module0": dartInstance.exports,
        });
      },
    };

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      "deferredLibraryHelper": deferredLibraryHelper,
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}

