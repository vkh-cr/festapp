'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_348.part.js": "4931ea40a1ad1410b1ccf4b3955ff8dc",
"main.dart.js_157.part.js": "9f2caaf46e121c89e7201d0ce0766563",
"main.dart.js_283.part.js": "c5a69d1ff1210e460a20e42f11ba2c68",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"main.dart.js_126.part.js": "c8edffaabac39f6d25089434c3bcb135",
"main.dart.js_202.part.js": "c3f95dde0377b06f9dac392c5a8e7f4b",
"main.dart.js_271.part.js": "86dbf0d4bfe5ca4340b1ad3b040e71cb",
"main.dart.js_58.part.js": "2ceb2f5020a99ac9f1ffab84c153323f",
"main.dart.js_93.part.js": "7eb50b72c8fff362685be48cf5ac5c6d",
"main.dart.js_121.part.js": "ae828e64b4b0168bdd41b1d5d7646fbc",
"main.dart.js_345.part.js": "c00ee197ce2faa034b3a8b2ba7242fe8",
"main.dart.js_9.part.js": "8c4e6fe6999918e0209b06e9e15f78cc",
"main.dart.js_166.part.js": "bd6f0f99a496bc3112703418251ada68",
"main.dart.js_170.part.js": "19fd6749e1b83c4a31c3fbd7c2a057e9",
"main.dart.js_236.part.js": "c4fc2a024c933be1cdd15cc874745d0a",
"main.dart.js_36.part.js": "345d0193de5612c21351a4e24c7bf8c2",
"main.dart.js_64.part.js": "34045a92ef3a5244d92684524db871d0",
"main.dart.js_229.part.js": "bc9f2da74d572d602ce67394b71f4594",
"main.dart.js_174.part.js": "c12e082c75d77430ba6ff1ffb8ec56a3",
"main.dart.js_307.part.js": "cab3f5542af16067b3d60048c257d345",
"main.dart.js_368.part.js": "fbdbe2cc8c1754dec6c7d042c92ef754",
"main.dart.js_176.part.js": "311e5f7a370a3abde2f8fce752d95f9c",
"main.dart.js_258.part.js": "a43809952b938c30d8bb6ab668acabfc",
"main.dart.js_98.part.js": "8f6ddc71c8afd5ee351a895db59be6ef",
"main.dart.js_136.part.js": "f266d7864e56c9fdad175836738e1225",
"main.dart.js_331.part.js": "16e4958205ca60d3b775565f686d59d3",
"main.dart.js_254.part.js": "5143a3f90e414987884a7cbef577c293",
"main.dart.js_346.part.js": "a3e204bfbb00fe0afa2474f5e3c6ee53",
"main.dart.js_247.part.js": "f11ef3b4c00304b5623404b8f41cf8da",
"main.dart.js_212.part.js": "96f2063c7f6fbe5f3f0ba67289ef5f8f",
"main.dart.js_120.part.js": "e2177f50f6c044a6a5ce25da65514d6d",
"main.dart.js_357.part.js": "de81409ff071ec42c368b7eb747f01d0",
"main.dart.js_138.part.js": "4cab68c2149d8bc8bf1e993d809bf320",
"main.dart.js_184.part.js": "a6b0659997aa99f0827069a42a993878",
"main.dart.js_82.part.js": "84da308c303175cfd2cac94ecef12a82",
"main.dart.js_113.part.js": "7432ede1239990073b09eca27e87470e",
"main.dart.js_62.part.js": "f00a1c217257f4bb55b0d739d1810211",
"main.dart.js_34.part.js": "35058c939292fe3f03158671349926f9",
"main.dart.js_30.part.js": "ab9d9b8c62cc0873bea70547844e8c46",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_291.part.js": "1f313434bf19651450dfcf0d08a99ef0",
"index.html": "fed5a308f46b2d339c30c27b3e6ccb3c",
"/": "fed5a308f46b2d339c30c27b3e6ccb3c",
"main.dart.js_29.part.js": "577277a476a31aefd00c74f75e0107d4",
"main.dart.js_12.part.js": "e46b0b97efe8e7e45a1bd65f376528e5",
"main.dart.js_79.part.js": "6db20d16ad936435343ecefd8870e76d",
"main.dart.js_318.part.js": "2cc2199db49868b79b49bbac572bd837",
"main.dart.js_298.part.js": "3cc82cd751bc42551d4734f27973486e",
"main.dart.js_39.part.js": "d668f80cef757156883ca0a40f21a0d6",
"main.dart.js_70.part.js": "9592020fe04a585387f57c6c681ad916",
"main.dart.js_164.part.js": "003f110e20c01fd59fdedb6b0d3752c2",
"main.dart.js_137.part.js": "eb1cc0158c8c7951d753a0e468dbd9bf",
"main.dart.js_374.part.js": "089a9b0e967d1ed30dc71d5d0f313e86",
"main.dart.js_221.part.js": "d601778efe7d0986d91a0ec377426b1b",
"main.dart.js_112.part.js": "ebc2000acc3a270a67947cfb526a3489",
"main.dart.js_32.part.js": "49d4001ef24f10f252a9edf3868938a8",
"main.dart.js_190.part.js": "64f35f2e92fe55a60b66170c03a299dd",
"assets/NOTICES": "676824ae0f7212fa5a73ec0b0f4955b4",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/uk.json": "06d8c6f66303ae3e257fa9a62fbf09d9",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/sk.json": "e20b4c2317f454bc552b2df9f86e40e5",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/assets/translations/cs.json": "507ea274949e73e246a01b57c526f163",
"assets/assets/translations/en.json": "c15166c286f56fafde5522952eb2fb72",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/MaterialIcons-Regular.otf": "bc3f627db7eac94f4991a54e95d809e8",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"main.dart.js_95.part.js": "3f268cdf8ecaaad19c31236df753325f",
"main.dart.js_301.part.js": "9712ed0b3f2b37ea85c9ed2064fe7ac6",
"main.dart.js_334.part.js": "3c11bed04f5ba10f42ca6e06588eb115",
"main.dart.js_203.part.js": "a30af5698158947dd5498f1007bf856a",
"main.dart.js_183.part.js": "9bcca7d57716ae2bf0dfad791c15ff3a",
"main.dart.js_132.part.js": "f29fd25a9ad347d0b2e82bb3cdc0f2f2",
"main.dart.js_370.part.js": "e17d6dac700d9c5ef2123e3ef02dec6a",
"main.dart.js_21.part.js": "d3d229bf85a3e7df59e3c52c0a719094",
"main.dart.js_110.part.js": "0956e30f44ba971bc28d8dd3e75817d9",
"main.dart.js_149.part.js": "e1ca421d93c621bc57b11813e5524db2",
"main.dart.js_55.part.js": "5bfbbed927b0e34a91a20c3f1c0279a8",
"main.dart.js_155.part.js": "c54b940a60762c6961149ddabef02da9",
"main.dart.js_213.part.js": "33371785d947eaed68f360308c3a60f0",
"main.dart.js_249.part.js": "393a4937318de05174b1d81398eedd80",
"main.dart.js_135.part.js": "a32e329e4cc5e055f2c8712e75ba997c",
"main.dart.js_123.part.js": "fd3150bf1b60607e0b661a1b7db7fd78",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_115.part.js": "c72f26b044fa351bd2ccc06b8b2ff43b",
"main.dart.js_260.part.js": "88be3d96033b5eecb9b5620932a977e2",
"main.dart.js_20.part.js": "eb946bbc041be207382fa23d8f0db156",
"main.dart.js_67.part.js": "e8e87ffaf66819f3c303a9fd306e29b2",
"main.dart.js_144.part.js": "b82e0e29b599a98874b212dcf438bf0a",
"main.dart.js_304.part.js": "b2ae3d12575e8370aefe6fcc67b46c20",
"main.dart.js_240.part.js": "b611fc2c01d416923521dbfc2f23ceb4",
"version.json": "ddf3a33e22fd79382de18408e9a42539",
"main.dart.js_285.part.js": "8e4641cbfc349508f3bbbdd3c8d84b19",
"main.dart.js_269.part.js": "0f8ae9675bc4665105aade6d8b9bc7c2",
"main.dart.js_252.part.js": "5070907db063c70a9151023dd6cb660d",
"main.dart.js_75.part.js": "55e5147a4a531010ab23582c4a4c5368",
"main.dart.js_263.part.js": "a026efd9b4ea58be98cd3c28aba19bcb",
"main.dart.js_347.part.js": "de6545484684ce4b76611fd036c74cb1",
"main.dart.js_99.part.js": "5e79b7596335ef8c3d8207d65fc8ea91",
"main.dart.js_14.part.js": "ec6fac9064e4f70a9a18039b4145f5f5",
"main.dart.js_277.part.js": "0da722f40feb848ac5a81ef9ee09ef46",
"main.dart.js_53.part.js": "eb179a46c472bff99a640e6229a2437e",
"main.dart.js_273.part.js": "0d4f1af0a8fe58cba96b7811c70b0ec8",
"main.dart.js_108.part.js": "1071e3770c18ab4cf0f10e7a1c9e18b6",
"main.dart.js_187.part.js": "f710545f2ecd97a77d8fdfdbe9fc987e",
"main.dart.js_325.part.js": "e19d64f664cc5adf918c59a79c865df1",
"main.dart.js_265.part.js": "567892456896949f4d5ac880dd20cfea",
"main.dart.js_305.part.js": "b2a7d9642c6cd4d12d171ac89f5d26ee",
"main.dart.js_193.part.js": "4b03247803158029c022a1f455e7b587",
"main.dart.js_366.part.js": "d09dd553f1d8086a46f4a364af7d7e13",
"main.dart.js_264.part.js": "0781336e30d10061851d1674aeb05cf6",
"main.dart.js_371.part.js": "88565772bbccd28b994106db49ed39e1",
"main.dart.js_168.part.js": "d0583bc18acd429bb475fa2aeb2e3c30",
"main.dart.js_339.part.js": "3dc8a1fa055f532e399a35d584fb04f9",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_243.part.js": "0f4aeed1aa8d0c903f5fed0ece2524cc",
"main.dart.js_294.part.js": "7665c8891bb4fe61c3f83fbf84f757a2",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_343.part.js": "25629e64ec140c335a0ad064b206bcb8",
"main.dart.js_195.part.js": "b078b5079f99014db5c93aa22d43bcb7",
"main.dart.js": "5f305d3c34992e523c8eb907bae721b8",
"main.dart.js_375.part.js": "85d58b101d9f6e0a1fe5a8dbabbe4843",
"main.dart.js_65.part.js": "e7d5112f116a9e4e247e988fbc58f73d",
"main.dart.js_354.part.js": "4331ce4dfee2804eaf4d46fb60f7ce72",
"main.dart.js_177.part.js": "8bc7b4fd06722cef2a45a2e6435de7f1",
"main.dart.js_310.part.js": "7ac37c5bc07bf0293902b8b45734c58d",
"main.dart.js_324.part.js": "6e10ec33706e2c8023e8e0656aa12838",
"main.dart.js_2.part.js": "0ad6061a001feff59e51d45125623a70",
"main.dart.js_278.part.js": "52810e93053eb455d9f97596ede603b1",
"main.dart.js_24.part.js": "5a4c70459e67698178075b884362db40",
"main.dart.js_292.part.js": "6f6693690c3c6235a8a1bf89ac8534f5",
"main.dart.js_244.part.js": "24fb7d788845c7b402b6926d7a281d0d",
"main.dart.js_47.part.js": "ba2e23523404e0fe5e96b07b8c64c035",
"main.dart.js_152.part.js": "90607a7a2e5f62aba5293acee218d9c3",
"main.dart.js_159.part.js": "31cb129de2160c44f1d7ba80ac6c9a7a",
"main.dart.js_300.part.js": "aac990be8af38019d9d83d4df2d494a1",
"main.dart.js_158.part.js": "fda0ae0ba284ffe8becbef5be3b80db2",
"main.dart.js_71.part.js": "ca2c2b8b2b9cca841621760e1fd213fb",
"main.dart.js_342.part.js": "263c574ae0a2ecfcb9b13cca79ca22bb",
"main.dart.js_340.part.js": "e221561ceb20181a8a918f33a2087026",
"main.dart.js_338.part.js": "8b74b88209d98563dc369e87c883c59e",
"main.dart.js_116.part.js": "1a870dc590e32acec0c67ea46803feb5",
"main.dart.js_165.part.js": "fb807a3ba82b843267a129df2b1041ae",
"main.dart.js_323.part.js": "c73539a8c3e4792f149588a576c2362a",
"main.dart.js_142.part.js": "f6420f60c53147b452708cc6303e81b2",
"main.dart.js_313.part.js": "0351acf299fe5b2e0c1729c92b61b7a3",
"main.dart.js_25.part.js": "e274779cc508d1c37ecef3d25e5c990b",
"main.dart.js_17.part.js": "690d395160d9c15e3b66573895070da6",
"main.dart.js_312.part.js": "da9cd69f04dea4d8f0261c25b0f8e779",
"main.dart.js_61.part.js": "76c798ccaf5d3db96fa6dfa60627cd83",
"main.dart.js_101.part.js": "34e7538bf2c4fb7d8c6dc8400c41d623",
"main.dart.js_333.part.js": "daa00f673796fd1aed62cb39cd69f745",
"main.dart.js_127.part.js": "a1dd93fa8230964755cdc88463eb6a4d",
"main.dart.js_350.part.js": "e25d18e27b250eaab26a07a9fa014386",
"main.dart.js_302.part.js": "4a9e7871baa93b224a339f5eeb2ba22b",
"main.dart.js_351.part.js": "d213b4ce1943239b5e3504027c83cef1",
"main.dart.js_231.part.js": "fa265c4ace4d4cef0cd8482bf716eec8",
"main.dart.js_349.part.js": "ce4c29ceda9f26056a8dba179c50b584",
"main.dart.js_220.part.js": "9a265c0d90004ef57545585ecab10e10",
"main.dart.js_365.part.js": "87a85e335ae6bf90365816f6c9d9d858",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_306.part.js": "31bc5ec8584eba2f33341a14f3ee592a",
"main.dart.js_139.part.js": "b9db1cb460c18e00a8d568c5700be38a",
"main.dart.js_56.part.js": "fa04b6a485f0b794f364e3c20b825185",
"main.dart.js_238.part.js": "cf98bd2fd811f0bceb32c1a0fed39e9d",
"main.dart.js_367.part.js": "943f7d309aa73e647f8a8d24a40e27b9",
"main.dart.js_332.part.js": "e1a295f4c0645984767bc7e386469043",
"main.dart.js_336.part.js": "705f6d98c69e545c56c68ddb7e41fae6",
"main.dart.js_122.part.js": "d4a725801ca5f63331aafd90f99ec735",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_293.part.js": "392235a32c117c9c25f07562e555c951",
"main.dart.js_4.part.js": "fb21c6b72e8cb51fdb4905ff15d8589d",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_337.part.js": "5576232df4a9ecba9a1c3a061f85200b",
"main.dart.js_3.part.js": "57b97f7efe678d5d648de0549e968683",
"main.dart.js_228.part.js": "accb78e6828b3c6d35fa6e7740a044f3",
"main.dart.js_175.part.js": "e1e5bd0b8f2cb103400f4c801883fb0b",
"main.dart.js_280.part.js": "e3aed7a3838bde2202a29670464b43b2",
"main.dart.js_262.part.js": "f7678065acbe2f561977838a50915374",
"main.dart.js_96.part.js": "770dde8238c3e60c0fa24e250b8507b3",
"main.dart.js_308.part.js": "9c58f7e44067c4ea4bc29388ff18319f",
"main.dart.js_89.part.js": "d651f03048a2cbf748c3ef37675421eb",
"main.dart.js_245.part.js": "af142dfa3f1abdaa13ac4f6e43551200",
"main.dart.js_40.part.js": "ae316889dc8880031c6d5e32ca28dfa3",
"main.dart.js_107.part.js": "2a1265e583165b11bad90be3dcafbff4",
"main.dart.js_321.part.js": "35f8bdf4d87e7754b3b8037cd8f89726",
"main.dart.js_253.part.js": "fb6550786d67475128810a6d0c8cb136",
"main.dart.js_358.part.js": "01039faa1591564116daa207196c4dce",
"main.dart.js_76.part.js": "49ad5ba8df792c534c5a06d3b15c762f",
"main.dart.js_52.part.js": "24ffbfbc84f82459dfa6ad3583446fe6",
"main.dart.js_146.part.js": "4c7288a162d81c36cc1269156e067114",
"main.dart.js_255.part.js": "25252f6557683d881354d646abbc44da",
"main.dart.js_28.part.js": "dae9dd20c8d620a18463e8baf3a037a7",
"main.dart.js_241.part.js": "f841d8f545d7f4844dec9964e9043e7c",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_200.part.js": "3aa800eb351afe61a6fc513c4c494477",
"main.dart.js_196.part.js": "f740607485712ea6fd144ce4be4d3c41",
"main.dart.js_77.part.js": "0ef99db7efe853879dce6a452b590972",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_287.part.js": "b7f14f5a4f80e19bab1e10bc6d9600ba",
"main.dart.js_182.part.js": "2cf1226b454b797c25ab1bdcd303b83b",
"main.dart.js_41.part.js": "b822b507d47d21765b99062d3ac68d4f",
"main.dart.js_335.part.js": "88995233423aa2c356be3ade5322e9b2",
"main.dart.js_13.part.js": "1d718cfa9b87c059daf45bcf2ac33db4",
"main.dart.js_43.part.js": "ac43436b45f3519af5269f139ace9b92",
"main.dart.js_189.part.js": "f8790fa7fc71c82580f71cc06664a9b3",
"main.dart.js_198.part.js": "442d36e72959f9421d72012d3cb832ae",
"main.dart.js_59.part.js": "76fa6e0f4635d1e03479ef0372bfa10f",
"main.dart.js_8.part.js": "47568a7ae72263c243459f8e71c5ebe0",
"main.dart.js_286.part.js": "d6bc17b0b9ef9c89edaf463c0ed8c2e0",
"main.dart.js_111.part.js": "864de14ad53cf5fa46826f8b66534855",
"main.dart.js_100.part.js": "8f216e1519ae2d615d92ecd6265e1903",
"main.dart.js_224.part.js": "52ee0f020cf7efb57b14f4bea783bfa0",
"main.dart.js_22.part.js": "031608d32b29bef5164a685401f1166d",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_227.part.js": "f11c77dd82bfefc8fc352a7df1e96ae2",
"main.dart.js_172.part.js": "6de33d7632d51b26a6f7a6575cbb8254",
"main.dart.js_186.part.js": "ecc0c3340915fd4f1cc9510a6db3f728",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_102.part.js": "05a627996445af8ed2f27ff85787995d",
"main.dart.js_68.part.js": "12e0240b4d9b67ac672d24f8dfc324a8",
"main.dart.js_143.part.js": "5a76ae8b15744dd950c19f0668954d7a",
"main.dart.js_211.part.js": "87f602faed623f4c2f1e0edc57d16860",
"main.dart.js_364.part.js": "43c74bfd393a4bfa08b1350265cff26a",
"main.dart.js_356.part.js": "deaeb01605dfa7668841dad1c7366abf",
"main.dart.js_169.part.js": "d2260e68cb1b5ae088d653b1470a5bed",
"main.dart.js_180.part.js": "2240797f1aeaead7616398cc0305f4cb",
"main.dart.js_181.part.js": "f3065ead348e4818f20852d9bd841940",
"main.dart.js_16.part.js": "d66d426c7df0cbf52418e4ec26a0eaa7",
"main.dart.js_118.part.js": "36a1f3ce055939ce3517546b3035a647",
"main.dart.js_103.part.js": "1167506263bca3e6c6b7847ca7c3c6d6",
"main.dart.js_352.part.js": "9af346b833d41133fb5a14430be8f8f5",
"main.dart.js_372.part.js": "9e3f00ef8c06937b13cba10d868e6e7a",
"main.dart.js_11.part.js": "5b1ba743f6764dba0af90be9f9a67b7e",
"main.dart.js_92.part.js": "a8ccc871daf48560d316fc364191db08",
"main.dart.js_173.part.js": "0248c741ce7b0630e079ba3d5c80ac07",
"main.dart.js_274.part.js": "3b108dd3f15555376b7686dd4d153666",
"main.dart.js_326.part.js": "97a4f7ba296717af144acdfaaeec0b17",
"main.dart.js_7.part.js": "95f23452d75edefb5d9921c26de9ca64",
"main.dart.js_194.part.js": "535c3e0d479e8afe15778cdd674c2cf4",
"main.dart.js_87.part.js": "26b33774ae2f3086c9bce85e305f1efe",
"main.dart.js_37.part.js": "0429788d73b4d6d4c98bb04f967d7bd2",
"main.dart.js_151.part.js": "9edf3f41d587022e15b42090c12d68f0",
"main.dart.js_239.part.js": "d39483ca4073bffbe78603e11f47afe8",
"main.dart.js_153.part.js": "2212a46aaa0e098bdfef48eca2b2e2ca",
"main.dart.js_289.part.js": "7271fb3b0210cf5b98fb4401f0bb3410",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_54.part.js": "d8686f125a566740f15e5ec04e7922f5",
"main.dart.js_199.part.js": "b0951959a1aa3b8fc4615bb3686951ff",
"main.dart.js_150.part.js": "df530efd1a478de5f2f71979f96e9897",
"main.dart.js_275.part.js": "748f55503fd5de5591ce26112029ad4f",
"main.dart.js_207.part.js": "c10d8b82a2e56cc6f3daeb260df0436f",
"main.dart.js_119.part.js": "13842545802259327b7166d9b41a4349",
"main.dart.js_284.part.js": "3104847a70f45b80d641144709214e66",
"main.dart.js_369.part.js": "a0c7968171cd4f9c9537a17fa48f5fa4",
"main.dart.js_191.part.js": "39ffa4d8e99346755c0765d453451312",
"main.dart.js_131.part.js": "777f563bd31888967cea1991c64294d2",
"main.dart.js_359.part.js": "78fa091cb73c2e6538c799d0703c9445",
"main.dart.js_373.part.js": "2404def160b94f95804ea1a5e61461e4",
"main.dart.js_94.part.js": "bd77b9490752a28f61faeaf1fb9c1a2d",
"main.dart.js_290.part.js": "cceb61bd69368947549abec5d38d1ebb",
"main.dart.js_140.part.js": "81a275d1647d3c88815b2f408ad03034",
"main.dart.js_35.part.js": "bfcdbb6ffdcf0299f592faa117410d46",
"main.dart.js_109.part.js": "06bdb3eaf6eca74153482b6873a574bf",
"main.dart.js_145.part.js": "447dcb0320fb5bac7b6be44cb6e4f829",
"main.dart.js_27.part.js": "3d632d07352dd476786dc5676150ed56",
"main.dart.js_322.part.js": "b923e75ce02613c1d2309cebcdb1b47e",
"main.dart.js_330.part.js": "eff096802b87797239dc97dadfd84997",
"main.dart.js_148.part.js": "773fe09cca45e0ab1ef9b1a3746a223d",
"main.dart.js_162.part.js": "b5fa812b678610fb42cfd1703856febc",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_309.part.js": "0fc186f5e4af0e98940df4d3b7819ed5",
"main.dart.js_242.part.js": "54098e0154860d6f822fee0e9a010704",
"main.dart.js_80.part.js": "4f4b7ea757f2e1b68079a3ee7f0d5e6b",
"main.dart.js_18.part.js": "8e45afca369460839a93ccbd1f226697",
"main.dart.js_361.part.js": "c0173068a95d229282f61e4cc503efa7",
"main.dart.js_26.part.js": "61f849fd947f0cdf4f67d6c1241406e6",
"main.dart.js_353.part.js": "d8ad3e977adf9124870d4a036c2c1d10",
"main.dart.js_51.part.js": "8359f2d6dce93a8675507e03b2afca10",
"main.dart.js_230.part.js": "28714c0f4579cac9f89786e6e9055014",
"main.dart.js_160.part.js": "5d03c57122bfa53ff5baf11d254f026d",
"main.dart.js_128.part.js": "3d5edcd7c0e4bba7aff43019fee7008a",
"main.dart.js_105.part.js": "108d9c986217b42aace2dec966ca9d3b",
"main.dart.js_63.part.js": "76d68965724b98aa59a5403e7b4799d0",
"main.dart.js_235.part.js": "b06a05d262280376e6ea919550dedfa6",
"main.dart.js_106.part.js": "0db8dc849b2902b6eb7bcb511ef013eb",
"main.dart.js_272.part.js": "1ad03ef4ec9f3fecc59522f0538f1af4",
"main.dart.js_38.part.js": "0be73de340049c8d2c67057ab0ce0101",
"main.dart.js_360.part.js": "42311425ac88af8cdc987c9ea4095905",
"main.dart.js_248.part.js": "afbbd943079ae3d8c8f690932517e60e",
"main.dart.js_362.part.js": "de54ff65e61900ab3d7ef86300acc1b8",
"main.dart.js_259.part.js": "19d7fe7e397dfe1a08234c11d011ae53",
"main.dart.js_86.part.js": "424147c6b3ce24defa62b6863c9c1632",
"main.dart.js_104.part.js": "9a0dd1da934dce990b97b14ffe1f7818",
"main.dart.js_31.part.js": "acb93cdb0442a1d8623a6667a882359a",
"main.dart.js_125.part.js": "2baf6b07b72010fc2f10558e2b5b8253",
"main.dart.js_19.part.js": "4f2a0db05b4354c9ab9b5ebf83a4d13e",
"main.dart.js_267.part.js": "6fa2dbd0ad0c9b26bb724ffa2b2cfcd1",
"main.dart.js_297.part.js": "857cf280e8ed918e1be271a52d8de0cc",
"main.dart.js_376.part.js": "40c72c469c1e594de01d6397aa8de978",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_316.part.js": "9cac97f90c311adda55c2090eed0d9bc",
"main.dart.js_171.part.js": "8b0a76d04817266b89ce1ac010dbfdb4",
"main.dart.js_363.part.js": "bd0cf5249dda8be5a1a713de8b5bdcbe",
"main.dart.js_33.part.js": "0de14331a49ff46c0793621af98d9a03",
"main.dart.js_201.part.js": "56315d6a797badd675d7ea8b3640567f",
"main.dart.js_117.part.js": "aabddb4946ef2063c3815dad7ce2278e",
"main.dart.js_1.part.js": "a5dff6ae0f4fff13390bf5913774fa8c",
"main.dart.js_261.part.js": "a87784c79834f7a08c7583bc989e9376",
"main.dart.js_44.part.js": "f3b7a59dcf5e92d21824876439576f07",
"main.dart.js_328.part.js": "782e21e6fd5f6fc047d72630824b1925",
"flutter_bootstrap.js": "b3ce774c8a8ac1029149ea1e8288db21",
"main.dart.js_15.part.js": "0b8a758fe4deb883ac71fc4861989515",
"main.dart.js_226.part.js": "c0c228b97e5138d5c03dbafbf6f4c9b6",
"main.dart.js_91.part.js": "74c225ffbf71912bd195ba5c699049d4",
"main.dart.js_167.part.js": "f3298a0725a3f6840d25d07c7e05df20",
"main.dart.js_317.part.js": "bf9a4eee9f8ffaedffaa31e5b4f0df17"};
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
