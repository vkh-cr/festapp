'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "a8c80f215c37c4e0468195e2676be53e",
"main.dart.js_182.part.js": "fb78d495b068f3ae80fee170955e4055",
"main.dart.js_244.part.js": "ac159cb6991ef1af5cec8fdfbd7c12b1",
"main.dart.js_289.part.js": "340f48ca9c4ca0cee0ab8658403b85e2",
"main.dart.js_83.part.js": "3e10ada8336cb2ca5562aae0ca98bf63",
"main.dart.js_176.part.js": "7545d93d7db884a2cc6eb0adf35613a2",
"main.dart.js_96.part.js": "348f86aad7962bd1d48a8c0e30563a04",
"main.dart.js_87.part.js": "71e3cbc98076de5c734697deae66490c",
"main.dart.js_285.part.js": "1ed247d9b54e5341ae77c0d4e6e18635",
"main.dart.js_251.part.js": "d90a6b770068a9ab652e19dfae1ff204",
"main.dart.js_126.part.js": "f8a67aaa6f8899a70666bbc59b0d74d3",
"main.dart.js_129.part.js": "8d91d9600bf8783c3199c5aa5a28e1c5",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "97b72c7869a4e799a69df2bd558a34b6",
"main.dart.js_218.part.js": "42a5f126b825827e07619288f0c9c551",
"main.dart.js_172.part.js": "636e823b0e4bae176041fb498c62ac69",
"main.dart.js_40.part.js": "87206a93c67336a0a1673b4a67d65763",
"main.dart.js_48.part.js": "c6468ac826c1af3f43e2d485e81657e8",
"main.dart.js_115.part.js": "0673cb7bf96f55aa023f212121fb618a",
"main.dart.js_10.part.js": "deeaff70a96516a04848d4e57e8d5702",
"main.dart.js_84.part.js": "339d18dc337ec7b3e873caa4416d9b29",
"main.dart.js_122.part.js": "e0c5737f6434c1c82939660802a710c3",
"main.dart.js_103.part.js": "b46f5ea7b2cb39ee4273b745afa1df70",
"main.dart.js_230.part.js": "7227f9fcdb001c7e129453fc816c14bf",
"main.dart.js_153.part.js": "d128f9e1b561af83bd6031b4e45b813c",
"main.dart.js_89.part.js": "2446f4b28a9b808a08a13a64fcd6b93d",
"main.dart.js_146.part.js": "9af6959c1a086b36bc96b32fdff8ba5e",
"main.dart.js_37.part.js": "74f1e111bcfab16217dfb42c385a1a3e",
"main.dart.js_287.part.js": "666bd7a90c0c9996c7593becdb93849a",
"main.dart.js_283.part.js": "37d392f6e6df680de55a443967c02734",
"main.dart.js_132.part.js": "232635b2f0902f3b7d633fb190830f83",
"main.dart.js_282.part.js": "0e500c02849c62ee3742dd06bb2b35aa",
"main.dart.js_127.part.js": "8eac3d00977ebcbd14066827bf7ffef4",
"main.dart.js_175.part.js": "aeb4b75dcef206992b59a9db9e5e917d",
"main.dart.js_239.part.js": "21876016631ad67eb0143634caab1115",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "e140a548a24571321291e7e5a131fc9d",
"main.dart.js_216.part.js": "02d2eb7e2c155c67523cfe4850bc1e65",
"main.dart.js_169.part.js": "cb277536f200694ab9ca4d8cc7bd99e7",
"main.dart.js_13.part.js": "c2edc66f1d5944425c421a615f6a9b8e",
"main.dart.js_174.part.js": "7e07444a76b169758e2335b2f14f2dbc",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "229b8829bcec91bf972ada874fdd74a3",
"main.dart.js_144.part.js": "6f15e93cc79c2dcd0c9fc0fa04d691ea",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "71bc94bac09662185ed10645f16c9255",
"main.dart.js_265.part.js": "5fd4b77deb559bb94614d3fd6b50daf7",
"main.dart.js_31.part.js": "019558ef66e2af3e941bbb7ba326e976",
"main.dart.js_294.part.js": "6dddd5d7a0d86eb91593186c12ef78fb",
"main.dart.js_18.part.js": "7c0df033324748de6d0f153e9cc8d49e",
"main.dart.js_35.part.js": "e45ac993adb1a1060cb4bfc2759b8983",
"main.dart.js_101.part.js": "acc82d2fe209b9f29f2c5cd028b54b49",
"main.dart.js_77.part.js": "5307d1af6d190afddfad91e0cdf06ca4",
"main.dart.js_149.part.js": "eca53f34ad097125fdcd78f0972acacf",
"main.dart.js_67.part.js": "bdf8558844e5a63c65e621d66fbfb08d",
"main.dart.js_82.part.js": "67ed246599423aac514bae06d24e7b75",
"main.dart.js_173.part.js": "54f83502cc3667d59154b3c1af5c04c6",
"main.dart.js_291.part.js": "fb403a2ffe9bcb77c327942a4e33de7e",
"main.dart.js_106.part.js": "38a27ddb3a4414b39398265ad3d4b120",
"main.dart.js_273.part.js": "077fe904197851bf475d3edb82aa0644",
"main.dart.js_62.part.js": "f7ee0c37bdaec9c07ad188fcc907cdbb",
"main.dart.js_259.part.js": "0854184539f2919c69a107a5aad8029b",
"main.dart.js_278.part.js": "adf5059c26138e26d9d22e66d7eb6038",
"main.dart.js": "4314a1733e81aa67303a4499c952f3af",
"main.dart.js_222.part.js": "f20a3c35c7e9df01d6567ab65cdff737",
"main.dart.js_232.part.js": "391fc78f8bd74f712de2a709c57812ee",
"main.dart.js_148.part.js": "351dbe8eadb5db4c837499eab2d199d5",
"main.dart.js_293.part.js": "a1815f32534cb51886e65abdaa32c6b0",
"main.dart.js_124.part.js": "f85b7720e1ff19e6c3486bcf276a625f",
"main.dart.js_50.part.js": "990a5a97b1ebba1bb4e8f2c38a0e6b33",
"main.dart.js_97.part.js": "6a91c01e2e82fd3c35ac0786ca7ac73a",
"main.dart.js_91.part.js": "79a4387bf7724dfa4465bb4d78f04971",
"main.dart.js_145.part.js": "fe13fc541a4e6a8c1178b59128a90c16",
"main.dart.js_57.part.js": "1fc4783b5210fdc7fa579438378dc5d9",
"main.dart.js_104.part.js": "82b23266fb16f96ec50da5a13ea3996f",
"main.dart.js_201.part.js": "b75699f6a30cc664675b950df8f186c8",
"main.dart.js_181.part.js": "0b5e12e00729c7770525931798d6b3a3",
"main.dart.js_270.part.js": "78abe89aa28bc1bc411d957b0f4c2b10",
"main.dart.js_108.part.js": "cf14cab4732d3b8c53de893666086eff",
"main.dart.js_158.part.js": "e4e4aab259733d7ae465f15c43d60faa",
"main.dart.js_33.part.js": "5126aea37e1cd689088de40fe52651b5",
"main.dart.js_269.part.js": "3f88b058d0ed8527e80b1f8eeb3d6077",
"main.dart.js_34.part.js": "f62ccbf4951692f3b575954c502aef7b",
"main.dart.js_210.part.js": "8a160375d4eaa8217dda4f161b1b5b22",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "e4b0f8adddad89bc0739eeb8edc58cd6",
"main.dart.js_88.part.js": "64df00466ef0494d18a20a73e2cf20cb",
"main.dart.js_202.part.js": "48a1f6dd4a56162ff3fd835bc0ea8daf",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "8462826b96bc958acc8124f47a12486e",
"main.dart.js_247.part.js": "7988abfc6c2bab8c05d6d9a6050f41eb",
"main.dart.js_7.part.js": "0a1e958419ca34a67dcbbc4d1289a3ad",
"main.dart.js_140.part.js": "e9b5528a71871c6d939a07d4c08e36ec",
"main.dart.js_170.part.js": "befe5a8275df81dd8e02f322e31c75cc",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "a403df0d0ede4c89d47655795856b9fb",
"main.dart.js_27.part.js": "9fb7148d5a9d9d6be626dae3b6a39af7",
"main.dart.js_156.part.js": "b30a1ccae81b3a2d1395c791f4285ed3",
"main.dart.js_4.part.js": "d64f2a473b6e9b105d4e78926b817502",
"main.dart.js_298.part.js": "3428f4328cad8061be998329432fd539",
"main.dart.js_219.part.js": "543eef2b89c7d93f5fbb6988116691ac",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "39db6d4a83b81aae205c2c1e63ff128e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/assets/translations/uk.json": "7f8e394226cd7667b3671a3e3cee5efc",
"assets/assets/translations/pl.json": "67e4fad90546fd73760a99e253b9bde0",
"assets/assets/translations/sk.json": "8bdc79873b5db8f71d80926134b4b237",
"assets/assets/translations/en.json": "7780a8365b8670f4ba358b1842c09ad7",
"assets/assets/translations/cs.json": "88a1e80dab71c40883b33b814fd87f5a",
"assets/assets/translations/de.json": "d8339af262142bd3b7583326d693f3e6",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "21092cee812eaca83f55eb5e54aecf0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "8ec227ed2450b36e64bc733d1efd6fc3",
"main.dart.js_147.part.js": "f5df094b40e76703ae7a678c3735dc43",
"main.dart.js_60.part.js": "de99a2448068a8ae6d65cc04c8adc5fc",
"main.dart.js_263.part.js": "172e9cfaefc586b4deecfcf392ad70b4",
"main.dart.js_220.part.js": "4d4c50dceb7454a8fe3b94be040ad173",
"main.dart.js_25.part.js": "04feb6b187c9f56f586d10bd49b8c7cf",
"main.dart.js_288.part.js": "d2abc11cc69f7803a22924c6aa4be7f5",
"main.dart.js_141.part.js": "ba3b714a102af0b9ddb32575bc2384aa",
"main.dart.js_249.part.js": "2162bb26734c637c1c9dfc17f5fb9509",
"main.dart.js_123.part.js": "61b7325967ffe3375edd68cfb656b659",
"main.dart.js_268.part.js": "1fe4d9db583ff489f35692fbfa58ebae",
"main.dart.js_8.part.js": "c876788ada4888ee6b60e0ce21f8ad62",
"main.dart.js_198.part.js": "d154c84b0353abe3a5684195ecaac5e5",
"main.dart.js_81.part.js": "ae611dac27acfc4691bae10f9e5dd1b4",
"main.dart.js_113.part.js": "5f2ef1e2afcdbc8b05f78ff24b0b4c82",
"main.dart.js_280.part.js": "9228e9cfffda5611f0e3299b59108d83",
"main.dart.js_9.part.js": "7dc183b34b78d79faa39e6747ec80a90",
"main.dart.js_99.part.js": "8d69a2ba0294098044067844a9f0644d",
"main.dart.js_22.part.js": "ec855cd91c3626e617ce94f64cead2ce",
"main.dart.js_272.part.js": "2475650ff5982daa6fd203e5a8069d19",
"main.dart.js_242.part.js": "a92045699e2be205891674f872d856c4",
"main.dart.js_86.part.js": "f0189053fddf62d54388caeec472489f",
"main.dart.js_23.part.js": "dbe7f2aad15cbd8bb66711eb42c31710",
"index.html": "f52a79d64c577db2fc1884b0000d170d",
"/": "f52a79d64c577db2fc1884b0000d170d",
"main.dart.js_94.part.js": "995ea370985942472da3c2bba13679c7",
"main.dart.js_98.part.js": "f9272b78c71c9e79fdb69bb8d7e62b78",
"main.dart.js_53.part.js": "9adac9bf6b99aea9811b4fbcdc3c8000",
"main.dart.js_74.part.js": "82c78ddcdddc4ab01312ef51b3709bc0",
"main.dart.js_235.part.js": "9246c7372aa19a441885f3ac5a2674af",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"main.dart.js_286.part.js": "aef6d6c571c694669e2256b2f1bb790e",
"main.dart.js_118.part.js": "b93f9abf5b867fc170887a88ad8efdd5",
"main.dart.js_262.part.js": "591dca3ca513e9e836f55814a9c33345",
"main.dart.js_26.part.js": "2b130b41d83228a248cfd259e31e9846",
"main.dart.js_240.part.js": "778f2307fd145217acd2901456275d0f",
"main.dart.js_20.part.js": "2ae97969cbc3a1a63e587035862f9c7b",
"main.dart.js_214.part.js": "2b9c6003b8825bafe79dc3c7cd036a12",
"main.dart.js_51.part.js": "6e560b1b7a411286426b950699208214",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "eb999d84ccfc526a3d190dcb6699ccf3",
"main.dart.js_290.part.js": "f1758faff18ac6579b525111d1e2f9e9",
"main.dart.js_1.part.js": "07a798cbd9646b65911772cdde7e44dc",
"main.dart.js_120.part.js": "b34c4f2f28d467124a5f253fdb9c1292",
"main.dart.js_63.part.js": "f0c9adbd4670f4ea23db15d6c95f274f",
"main.dart.js_211.part.js": "68656aa12480a7a0fcef4c1f8dde1563",
"main.dart.js_295.part.js": "a47190a23ca390bbccb9f1318133bb04",
"main.dart.js_12.part.js": "fc778cd312a2ee39619a2114104066b7",
"main.dart.js_157.part.js": "c70329390f65b0f2d05b1c525b13f3d5",
"main.dart.js_281.part.js": "72e878373614ade4f4da1eb85ca32175",
"main.dart.js_137.part.js": "5619acdff3c4330772ec706d85f9fc28",
"main.dart.js_276.part.js": "88389f8643246ffd10ee1b385673b01e",
"main.dart.js_28.part.js": "908138e1f8093c27dc4e89b7f2b053d0",
"main.dart.js_135.part.js": "ca47531e780e1dfcb2be75efca168278",
"main.dart.js_256.part.js": "18c814b947a58a4c9b199aca28e23085",
"main.dart.js_237.part.js": "a3ce98b1b4db598f183e8cc158ff806a",
"main.dart.js_193.part.js": "7edac9cb2b4cfd9831761bd31a2ef68a",
"main.dart.js_17.part.js": "20f460cebac7f32f970882f3cf279359",
"main.dart.js_105.part.js": "8161bf0136f4a301ae35e8958ee5a6ed",
"main.dart.js_206.part.js": "a2482f91ba3118fe2e134daf80c69f86",
"main.dart.js_231.part.js": "aef60edd8ab6361489ae0c14ea2003e3",
"main.dart.js_43.part.js": "a317d6221b05a25748256ca68097507d",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "76e1ca576da5e934a880639c62b84b55",
"main.dart.js_292.part.js": "4af3b92b5a07549608271594af28c710",
"main.dart.js_15.part.js": "2bc072a2169ef1cbd809e4183651d3f8",
"main.dart.js_19.part.js": "bb4278ae7965f267d3c4704218fdb1b4",
"main.dart.js_284.part.js": "aff8743de41781fa4107a5977c254966",
"main.dart.js_255.part.js": "d247a2737052bb9c4505d24fbe39c377",
"main.dart.js_186.part.js": "c0f8db9d595b59d3db0d2d530740e18a",
"main.dart.js_163.part.js": "7f60aca9cb9bcd6bd60de445ba20c84d",
"main.dart.js_154.part.js": "4bef506ae0426aabb1e0496ded1ca055",
"main.dart.js_257.part.js": "6c9c3eabdaf898008ee779a5247bf32b",
"main.dart.js_16.part.js": "320f35c2885531523bda2126fddd0ff0",
"main.dart.js_250.part.js": "69f48eecd2be894f5fe64e22d9650048",
"main.dart.js_36.part.js": "2f1774a7cce9ffa9507a4328b4f45ab1",
"main.dart.js_199.part.js": "ff71cdb25bf88d1d9978a6d4828a53c7",
"main.dart.js_130.part.js": "b5423eea381da6b42ae60ca00c406ed2",
"main.dart.js_238.part.js": "f4b7d7769a56db1b6a517d19d4e2a57b",
"main.dart.js_152.part.js": "a36930508a0c9fb4a38122b0635a2a8a",
"main.dart.js_32.part.js": "19ad348e255ceb4fe0b84874e3e14a86",
"main.dart.js_197.part.js": "d9c09a6fede5a7f40dbdd2bec4c9205c",
"main.dart.js_56.part.js": "2f7c279a5047c7f521fe755a7c1e114b",
"main.dart.js_227.part.js": "2df228badd9db575eed22b3e30b86755",
"main.dart.js_3.part.js": "a5b76d9ff4f701f401c2bf406134a244",
"main.dart.js_68.part.js": "834cbf4e4c104de48c6ad12d97fa5454",
"main.dart.js_248.part.js": "fe303c803aab87c5f3a76f6e1516d9da",
"main.dart.js_133.part.js": "25aba6f01d584fb4509bf9fbb2b2abd9",
"main.dart.js_188.part.js": "342c6780bdd0fb33f4d6d8c6c3d0e5f7",
"main.dart.js_204.part.js": "2d2212bc8297f32f14ba48fb3644e42d",
"main.dart.js_24.part.js": "a414c88504863f3cd5d81e669d8a33ed",
"main.dart.js_90.part.js": "c1694788685c3b86eeda1672357a4f69",
"main.dart.js_177.part.js": "4ea5e5099196b14706e57b492271721f",
"main.dart.js_299.part.js": "33bf6066a29598b5e1fd88ef81bec4b9",
"main.dart.js_85.part.js": "a66433ef33b0863612970459ea9f00ef",
"main.dart.js_243.part.js": "130b6e93cba77b0865d35103b370a8ea",
"main.dart.js_212.part.js": "23a9e93f09ef8c8a5266680cc06d86e1",
"main.dart.js_260.part.js": "8e801e24db4b7f4618e2c58076ac3102",
"main.dart.js_114.part.js": "33aecbafc182356e7bcac23bf78456ef",
"main.dart.js_39.part.js": "7ce644c112cf24149b835dd2ea884233",
"main.dart.js_49.part.js": "3dfc587151f63076afcbcaec097e725b",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "37d4daa7f3adedc36105990d5f2695a4",
"main.dart.js_195.part.js": "543496a911cffb97c6f89924e695531d",
"main.dart.js_121.part.js": "16f8e2c5f2c04a7db3ae17a0019c6a74",
"main.dart.js_215.part.js": "6cf88b7fef61ea44a34d644eca6f9c4b",
"main.dart.js_112.part.js": "4c47ef434bd04efbbab7cc46c86acf57",
"main.dart.js_139.part.js": "47e7e91562c910002121d52891462776",
"main.dart.js_143.part.js": "f19f4b6275084dc9d383d5be126a9cd8",
"main.dart.js_80.part.js": "b5fdbcfb56c24661115c07cc02a2695a",
"main.dart.js_279.part.js": "65b7254024b96484faecdc89c902a031",
"main.dart.js_30.part.js": "5d9e08a9989c92d6206a533145b3f870",
"main.dart.js_267.part.js": "82b21951d44dd3cddbba6dfdc83bb04b",
"main.dart.js_277.part.js": "cc8b872dbba05f3ea1cd24f645bf53bb",
"main.dart.js_136.part.js": "eee4b895d64c9ab0405a8b952d1529b6",
"main.dart.js_168.part.js": "f129cfb44d914c02d62ef96dd42e9621",
"main.dart.js_271.part.js": "9f29b7178aa5c9f3b4112811525ce8a5",
"main.dart.js_59.part.js": "e710ada96bc4064fa9ffac6d4427cb17",
"main.dart.js_47.part.js": "0f48a856d865b2faf623f7a6e2fe4a9b",
"main.dart.js_95.part.js": "e2fc19adc8075b216e0683ec9d4217ef",
"main.dart.js_107.part.js": "12c6fae7b9931a9a29bc59e7d6db59c3",
"main.dart.js_29.part.js": "bd16dc5fa44bec50948438db598f2919",
"main.dart.js_236.part.js": "825a46706f0aa4196f930f79e7399379",
"main.dart.js_58.part.js": "89916d41769506c21b9bdf8c98de8b66",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "43d5675a3d51357b17df7c378ff553fd",
"main.dart.js_79.part.js": "41462853878b16fdabfa9d2a5a4c9a33",
"main.dart.js_109.part.js": "695f069075a59c2b3e258956fa014652",
"main.dart.js_92.part.js": "8e5a3fb5cd01da150a27179ce474235a",
"main.dart.js_224.part.js": "159176de119d69b63d831120cbfaa037",
"main.dart.js_93.part.js": "35e1e52ed9583e5ae326ae034be02ed1",
"main.dart.js_223.part.js": "b252ef14c97975b0d2f74c70553c38be",
"main.dart.js_11.part.js": "00e2a54bbe962dcaa4681b12ae332adf",
"main.dart.js_125.part.js": "2daa41419337e2c69dcd8da35c850df9",
"main.dart.js_131.part.js": "d8628ecaed010d734359b5b79999ac7b",
"main.dart.js_226.part.js": "50c48afad02e30a0312c7757c9233c6a",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "b9a8deb181dabac4817bbea78061f197",
"main.dart.js_178.part.js": "00429afc30c6300aab295554e280d56d",
"main.dart.js_258.part.js": "65a30a1f15a91be5abbabf683d915bd3",
"main.dart.js_297.part.js": "70e101717ac52ad937870230a4b39c27",
"main.dart.js_70.part.js": "bff0fca9c165d7aee5490da0741599a5",
"main.dart.js_187.part.js": "4e36661dd21c9e26d0a76d88d5237010",
"version.json": "3bd689998d350c4e5d0e45b5117f2cf7",
"flutter_bootstrap.js": "12aee0368f7cc0d1f9164713e41306b1",
"main.dart.js_191.part.js": "c216963c7e0f89134f9643979d1bb719"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
