'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "2a1b1322ebc3c608fe4474311a18e46e",
"main.dart.js_162.part.js": "6561e935b77442c1dde5ac28bbacc809",
"main.dart.js_117.part.js": "c3b3ea49a392fb0d73542f3b89e6e0fc",
"main.dart.js_244.part.js": "4899f42e1af1a5abef37d92b8dc1be1b",
"main.dart.js_83.part.js": "34f82584e32ef6e980ab7c7b2a49d950",
"main.dart.js_254.part.js": "5f9ebb2811bfb3eb874c0597f08f7e55",
"main.dart.js_176.part.js": "cef93272fe96c9ffb7b23c445dea9322",
"main.dart.js_96.part.js": "e60221dae7291fe1d7d74c87db9e0183",
"main.dart.js_245.part.js": "ce6329372eea2fbc9bca0cd4974979fb",
"main.dart.js_87.part.js": "384c9d85910db6d399ceb502d84baaf8",
"main.dart.js_251.part.js": "86c01d2cbf5a18326ecf37d1318ea491",
"main.dart.js_126.part.js": "f7646fa0804a32c15f8008e594e5d034",
"main.dart.js_129.part.js": "5c6f39d088a0047247563ef16f3f6201",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "98636a13e4f4cff612a4e185d808381d",
"main.dart.js_218.part.js": "f9be965dcea43d3d950a0a0e2526c833",
"main.dart.js_172.part.js": "5525d8451f0ac8719336af083c4f062a",
"main.dart.js_142.part.js": "1f5470d9d66e51d01727ddd4220e72be",
"main.dart.js_40.part.js": "c27f48e9351213496b3994cc35f0eff6",
"main.dart.js_48.part.js": "275152a6ed7e013bdf30ac6447559a77",
"main.dart.js_209.part.js": "2cf073746d88d4704f5c656fbfbbad6b",
"main.dart.js_115.part.js": "bbddcf439187d9dfed2c2930dc084265",
"main.dart.js_10.part.js": "71e72fd4e30c2c4561dfe56929ac300a",
"main.dart.js_84.part.js": "304915a29643f880fe8b8f1e3073eb51",
"main.dart.js_122.part.js": "804296d4b1fed277fc866edefb31986e",
"main.dart.js_103.part.js": "f015b490ab48fa976f916834998eb60a",
"main.dart.js_153.part.js": "d90c3b3e195a1ce81629ff610b7b5f57",
"main.dart.js_41.part.js": "22c817d78ffbc445fe62ce32cb68d519",
"main.dart.js_89.part.js": "4e796ba40e88bbaf72522c2267b4c566",
"main.dart.js_146.part.js": "8415d570166e5d0340e5520d18fded08",
"main.dart.js_37.part.js": "f4eda7d4a642a2dd92cedc5ee00d9f94",
"main.dart.js_132.part.js": "f2df7bb907215a375b26fb01a8202a1e",
"main.dart.js_165.part.js": "72cba047934421e9f868611ba240e5ea",
"main.dart.js_127.part.js": "45028fc67f5866b582bf8ce6ba516972",
"main.dart.js_161.part.js": "20f37efe53c3b14ee66ffb7fd336c173",
"main.dart.js_175.part.js": "83b986a9083c795cfe0952b36deabdfc",
"main.dart.js_239.part.js": "8f8fc2a588cfc7a4bde10eaf34b3970a",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "10dae4989883d736add5d33e43df4851",
"main.dart.js_216.part.js": "fa46d91078245d1e9e781760ee8f6309",
"main.dart.js_64.part.js": "ff712268b2db5b4653835d86d053a36c",
"main.dart.js_169.part.js": "3cbbc2643e7d3776eb9d082dd53b169c",
"main.dart.js_13.part.js": "d68ad724e5f2d2c6fb662e403da24cb4",
"main.dart.js_246.part.js": "0fa36a6419256cae60b7d5be326bb6c8",
"main.dart.js_174.part.js": "4854ffaf5873c8b32e0d350cfec117fc",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "291bc232b27963a0d624dee325b06daa",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "bb90b9d2ee522ba12b25ec95476d5ce2",
"main.dart.js_119.part.js": "4d775688d484c0bbc5dbcc6d87cdeb41",
"main.dart.js_18.part.js": "2b38494a0de6d7d892d81323d68c6341",
"main.dart.js_35.part.js": "b75f80ecbdbbcc43a6f2f305bd030b3e",
"main.dart.js_200.part.js": "1faf38dad8d9b1f932c659e6528e5625",
"main.dart.js_73.part.js": "587fc2401010c158c7163ea2e12508fa",
"main.dart.js_77.part.js": "c5b49871591d413456a12a72de75fe16",
"main.dart.js_67.part.js": "67cbc5abab7ebea17e84ff5d528e065d",
"main.dart.js_208.part.js": "397e9b8691f7cf16306a256191ef2469",
"main.dart.js_82.part.js": "86a8077b72aa0189b1250bf012fcd76e",
"main.dart.js_173.part.js": "188dd1ef163e641b4a4deea8d3cdc3ea",
"main.dart.js_62.part.js": "7757460cb1b518679c3819256e487545",
"main.dart.js_207.part.js": "9bea4f575b8d24904a99857ea1311ecd",
"main.dart.js": "2700e9335c58bd2aaebb9888e1b3b7c1",
"main.dart.js_222.part.js": "914cb7df3aa6bf87af58261f768da29f",
"main.dart.js_124.part.js": "9518cc86316ed3ac7faaea780177cfca",
"main.dart.js_50.part.js": "822b5e90dd56c332e098f8282ad6a2d9",
"main.dart.js_97.part.js": "cbf17d77821b13ccda25c8fbd11515a5",
"main.dart.js_192.part.js": "5f44a9fd866508b49cf8a20491ace7f3",
"main.dart.js_91.part.js": "562c6210b0c7bb97fffc88db4350108b",
"main.dart.js_145.part.js": "97a6ecacdb77c7bb7954afff37b072dd",
"main.dart.js_57.part.js": "1ff15946233d878607d73fb3ab9513c6",
"main.dart.js_190.part.js": "22ba25392ae64f477a7c4d3460428dd5",
"main.dart.js_104.part.js": "78697dbec0aa3793e2bbd5d92636be5f",
"main.dart.js_201.part.js": "4451dc6c478a209bf6685098cb6df449",
"main.dart.js_196.part.js": "3ce2693b2c29e0209e4af2641c906e08",
"main.dart.js_181.part.js": "a8bb40aca40216c92b35b07dd632355a",
"main.dart.js_108.part.js": "3e02b09858992624228b131112a6e32a",
"main.dart.js_158.part.js": "cbf16a5d1e41db4c288d011c54d5f921",
"main.dart.js_33.part.js": "8f6455438879ddc7b3368aba60903230",
"main.dart.js_217.part.js": "3359a988a2fe6e806aa6cd4a4d7e3771",
"main.dart.js_34.part.js": "10f8921e2f2b82ee4ecc808262a38ad1",
"main.dart.js_210.part.js": "25b6f1fb9201aedd13d0f6b61edf352b",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "f1db0f6ac0593132dcf99ac4b8518eeb",
"main.dart.js_88.part.js": "4291529eeedc1b4e396e736bad1c252b",
"main.dart.js_167.part.js": "49145597e05e598162aae0a56e20c65a",
"main.dart.js_203.part.js": "71e01ebb0f24963cf4147f1d5b1085d2",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "7f4a72a075992ecc11dc0425301bf807",
"main.dart.js_7.part.js": "3e0b0dd291de97b531445c743f659e60",
"main.dart.js_140.part.js": "47ba6dd27e6cf928aa1e64f4479423b1",
"main.dart.js_228.part.js": "fb7e083042c60933d1c5b5f0694dea10",
"main.dart.js_170.part.js": "cf4d50cbacf1fd7ef6960fa3477e3ba6",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "423d654c30b1124b1131311124500a3d",
"main.dart.js_27.part.js": "78b9dd0317ea8585a636d2f1917f5a26",
"main.dart.js_219.part.js": "06be242f46d71ef3f6ac23edd7033151",
"main.dart.js_116.part.js": "79639f26e2d2d6e3a1a53b5ee232abe4",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "d2dbd2e9e288632bf6ff73dbf8926d11",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "b351921f5458855cfdbdef3cb5c82bee",
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
"assets/assets/translations/uk.json": "a88b1c3a097d91249edda40144c5cd3e",
"assets/assets/translations/pl.json": "8a2b467bcc5301150f4ac72290d1bbd0",
"assets/assets/translations/sk.json": "9416fa3e4a44d4a4450ac6dee89df82b",
"assets/assets/translations/en.json": "7c180b167bd195ca8e204928f418cec6",
"assets/assets/translations/cs.json": "a67d234f5f9f037cfde9ba6323312bce",
"assets/assets/translations/de.json": "c0bb019cf7b419dc53884e3a5ef3e6d5",
"assets/assets/images/map/card.svg": "77d6cd4a052dbdaad1c5da8a5e3f1375",
"assets/assets/images/map/atm.svg": "693a9abb7145add2961453afa3f0ac4c",
"assets/assets/images/map/grass.svg": "fe32d32a171a6e76a8a7088644b07e21",
"assets/assets/images/map/cross.svg": "aaecd193906a34ea7845c2feef628607",
"assets/assets/images/map/tools.svg": "5f6bbbef105b3d381322da02d6beef43",
"assets/assets/images/map/food.svg": "41a9921e7a33d4ed62eb7fb0b8f176e7",
"assets/assets/images/map/ball.svg": "061bde98a15c0f2f3818195d9cce8a5f",
"assets/assets/images/map/beer.svg": "3884ec5eef24a8634310eaa4b35d8b45",
"assets/assets/images/map/info.svg": "be79865eee723da1a799860658dc439c",
"assets/assets/images/map/bed.svg": "c930d46ac91a70932bd61e2e17033744",
"assets/assets/images/map/speaker.svg": "92bad3443727dc5acf679cd5e8582db1",
"assets/assets/images/map/church.svg": "d2840a23cbad788040bf5a41a9e88dbe",
"assets/assets/images/map/cart.svg": "fb6d41303c00806c8e3f59b20351670d",
"assets/assets/images/map/conversation.svg": "5f53e729612a0e78a09e7d3c0fd53fd6",
"assets/assets/images/map/coffee.svg": "75c95a698eb7162db5342b082d751edf",
"assets/assets/images/map/wine.svg": "d2c55fa3b4051c39d87edee9a280a50e",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/NOTICES": "aa859f023e8e5aa082620769053a47ca",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "49ca0a656725c4f34199825df6a21ff0",
"assets/AssetManifest.bin.json": "c15f1bd0233f6802b344183f28ce1589",
"main.dart.js_220.part.js": "747cac25d4aceb6fc4a4590d44f5b629",
"main.dart.js_25.part.js": "3776b6e7fc9ef80939b825db5c4d7cc4",
"main.dart.js_141.part.js": "ab4c8364b8bdbfc07bb2d38963b3764b",
"main.dart.js_249.part.js": "948ff5da47a67e30e2bb7cfa2399bd59",
"main.dart.js_123.part.js": "cdce375d352435ceca6214125b4c522c",
"main.dart.js_241.part.js": "e8ad15c18645612222a571e895fa8021",
"main.dart.js_8.part.js": "2a30a4be2b2bdd501a75a0b3f8a55635",
"main.dart.js_198.part.js": "97fcf1b73751cf4ed9a266fa39539156",
"main.dart.js_81.part.js": "8e0f81b08b14da3be2330407e02bca72",
"main.dart.js_205.part.js": "af4fdb89eb5ee541894f771e7f23afb2",
"main.dart.js_113.part.js": "1506c537f50d29272d3dad677f01871e",
"main.dart.js_9.part.js": "6077dbe48ebe146e6e0205073db77177",
"main.dart.js_99.part.js": "6d4113467f96965b7a79a1e82675ffb6",
"main.dart.js_22.part.js": "ca7872a79da240f08a5b7626e3af266d",
"main.dart.js_242.part.js": "407125fabc7693be18237632b05e85f7",
"main.dart.js_86.part.js": "5216131939474c898b448ff36442819c",
"index.html": "b0b5c17520ec181e9127dbf5276b8876",
"/": "b0b5c17520ec181e9127dbf5276b8876",
"main.dart.js_98.part.js": "d79365fcb84766cc28218619eb47c120",
"main.dart.js_74.part.js": "4cfdba706b18419200c091ba0b0290a4",
"main.dart.js_235.part.js": "237937e07fc1786a8725840e48db19af",
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
"main.dart.js_118.part.js": "17f28158f19ccb97315d098b2addfdb8",
"main.dart.js_26.part.js": "f80a5b84bf91a117d30f9f1f2c1b472d",
"main.dart.js_240.part.js": "c8d4ab422c6653801e2fef56ec43a213",
"main.dart.js_20.part.js": "9ece036e4c4bb12b16091ec352e39f75",
"main.dart.js_189.part.js": "b9e1e1eb1f8a2363af097920af8351e9",
"main.dart.js_51.part.js": "c5ab7258389f9e78d9585155ef7b75a4",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "86af6e7f50e81ec6d995246bd568ec42",
"main.dart.js_1.part.js": "7e09788eb19f8d5acdef2fe0f6d5030a",
"main.dart.js_160.part.js": "d2cb669865c32e61b291a31ed4b1ab66",
"main.dart.js_120.part.js": "3138db18278825157534e4d2161f166f",
"main.dart.js_63.part.js": "af5d83ba5a718d87818ef67e32627795",
"main.dart.js_211.part.js": "89d7293394affe43967b3a540f699a84",
"main.dart.js_45.part.js": "e759dccab7abd58817cdd95e1e0b204a",
"main.dart.js_12.part.js": "d9137adde25b9f3a0037fc0ca2db90a3",
"main.dart.js_221.part.js": "8ca1420305e0b0f0660dc5d619cb87a7",
"main.dart.js_28.part.js": "d142c531c554baf40f3d5ee059f52905",
"main.dart.js_135.part.js": "83d63fd6eefe94c0898572b1c7b6899d",
"main.dart.js_6.part.js": "da4cf5b9a1ddd9ba30eb423f7c3388ab",
"main.dart.js_256.part.js": "d4681a3c5ade10be51678c20f3b16574",
"main.dart.js_237.part.js": "a5734e864b0b621549e807c509d8d903",
"main.dart.js_138.part.js": "3e899b3393bc4f3314b4cd591684e851",
"main.dart.js_193.part.js": "32ac95052ed9a85c3c50c5f8b3a376ba",
"main.dart.js_17.part.js": "85017848ba0e39e2f79f3a28e838535f",
"main.dart.js_105.part.js": "f5570f54e95880111818ad2c09046c3f",
"main.dart.js_231.part.js": "3a47ce7522b798c5f73dccadd1ee2b9b",
"main.dart.js_43.part.js": "5615ce808e50cd1a39c765b4bf05478e",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "5de5af7259aab69fb4cc798d08a090d4",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "a9fb9af22ae87baefbf28b3b1069870a",
"main.dart.js_15.part.js": "d3bd2f66e82adb0c5d211814a81ff9b5",
"main.dart.js_151.part.js": "4e155cd73fc87677521fe300c71bace1",
"main.dart.js_19.part.js": "fd5df868c817a6192ba3b2cc68bb43de",
"main.dart.js_255.part.js": "e60c9d21c5e553dcbdecdf916255e8ed",
"main.dart.js_186.part.js": "0af03565e732ea3a0ef7fbb2da43a753",
"main.dart.js_163.part.js": "ffd033d84aae55b45e2c2243e12f7f3d",
"main.dart.js_16.part.js": "068792bef108a7323fe959e35ae6216f",
"main.dart.js_250.part.js": "6c1a19bf77a433245293597a94a50f74",
"main.dart.js_52.part.js": "f720855047d454897255b8b41a124f8f",
"main.dart.js_199.part.js": "52b995c43e1861270bb8b0cce32dd499",
"main.dart.js_253.part.js": "190dffdee1283d5f933f52a547630b74",
"main.dart.js_130.part.js": "9feb042f6f4eaf1d85b5ca92b2c8e707",
"main.dart.js_238.part.js": "02007710d3fdcf604924ff9a49623321",
"main.dart.js_152.part.js": "2aeed5cc5b335f1670b006d32e81d0e3",
"main.dart.js_197.part.js": "7cdad5b55ee3e82766f4c7ae93f2c50d",
"main.dart.js_227.part.js": "f9520b3792e67cda029fe544be543524",
"main.dart.js_3.part.js": "236bfebcee9250792451732982f7d1d4",
"main.dart.js_68.part.js": "d6f26c99b420f47340f982fe1be86ecd",
"main.dart.js_38.part.js": "edb99f6c8f9480c3c927b601b9db4574",
"main.dart.js_225.part.js": "4597a2f6a45e30db46254006e45d4470",
"main.dart.js_248.part.js": "5d8c426eb6be2d249559c5cc654ea707",
"main.dart.js_133.part.js": "8e459efdd5ac68c652e08749d4fd0aee",
"main.dart.js_21.part.js": "2e6759b947527fd813e42114aa51993f",
"main.dart.js_188.part.js": "c5af60f7d957c3ecdc0a21d32819b1cc",
"main.dart.js_204.part.js": "9f49b6ba309fc40fa51203a97c4cdae1",
"main.dart.js_24.part.js": "388e643099fe824c28e4b39198f45251",
"main.dart.js_111.part.js": "5cbb7e6b3422c5c18e17c6dc2205cfa4",
"main.dart.js_85.part.js": "f2f76c9f567e7c0153d7ed9bcc769080",
"main.dart.js_243.part.js": "7724fca5834480b23d92a0f78aa88dda",
"main.dart.js_212.part.js": "67b07f68730312216353c21182369bbb",
"main.dart.js_114.part.js": "369eeaeb3f9476b1fffefdff151378e9",
"main.dart.js_39.part.js": "275982a5ad351a3e9a2e838c8e10a7d6",
"main.dart.js_185.part.js": "d5f0127588f39c2a65c2c11bcdefec4a",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "68857df8fe04c8d942cf398d213e7eaa",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "57981573d4f89fcf0372e37564e44e33",
"main.dart.js_195.part.js": "776171377a1bf13a3093af71df5af8ad",
"main.dart.js_44.part.js": "23a09891412894af225a9eb0219c13c0",
"main.dart.js_121.part.js": "a4d6773f8cf493f8e9acd47bf2e01755",
"main.dart.js_55.part.js": "ecb46afc02c62f16b2c380ce89d62edc",
"main.dart.js_112.part.js": "22c77a5cdb51321e825ed36e2ddafcf2",
"main.dart.js_139.part.js": "655ebaa0fbd2e4cb1f97044e45b7e2eb",
"main.dart.js_143.part.js": "8b84f03408e950beceeb7cf80a8eb7d0",
"main.dart.js_80.part.js": "eef88cf230f42ce0f07f24a875053f1c",
"main.dart.js_252.part.js": "0a46fce77241df97e9a730c9d86f92c8",
"main.dart.js_233.part.js": "9afa444b425afe2062f629c4cfa53779",
"main.dart.js_30.part.js": "6a9f2c01e4b00b69b6cb0a6a6ac50d88",
"main.dart.js_78.part.js": "e844fa854d30cff533f009728c473108",
"main.dart.js_136.part.js": "745c1b4370574f0cd3fc76f3309d4e40",
"main.dart.js_168.part.js": "488d7fd9cd9080c9cbb6c8ec4c614171",
"main.dart.js_159.part.js": "2b0e27e16585a39ce5f312d82cbd7d08",
"main.dart.js_47.part.js": "ae7977bde33b9be445c5fe757a778889",
"main.dart.js_95.part.js": "01631886e70ffb3de060beb28c84d6a4",
"main.dart.js_29.part.js": "d1ed7f4d1dbad2642f2af85429a91000",
"main.dart.js_61.part.js": "d177bb26368505ecc1223ecfe6b663fa",
"main.dart.js_236.part.js": "98bdb43e91fa5922529d6d2ae07c9a01",
"main.dart.js_58.part.js": "fa72b3ab1531205195c910d662923ec1",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "dcff864de9c04fd468e7051e89db8497",
"main.dart.js_54.part.js": "a3851603e52a7823835b96208edbf640",
"main.dart.js_79.part.js": "1bba0bbf97179b468681edb252a54562",
"main.dart.js_109.part.js": "263185182acbdebe5d8849d9309018bf",
"main.dart.js_92.part.js": "fa15d74007a818f6826a0b47a6f24ea9",
"main.dart.js_224.part.js": "bd5ac9fe1a78fe2a4f13d04d674d38be",
"main.dart.js_93.part.js": "618c87bfa4f47dfd6b70953c9223a264",
"main.dart.js_223.part.js": "f797d6b95fd06102ce367c53cc4de67a",
"main.dart.js_11.part.js": "1bef4ac74466235f52ef43c9a880e9c5",
"main.dart.js_125.part.js": "9df9d8d448450d488cf15ac961650209",
"main.dart.js_131.part.js": "f8e81b7b547fef6be667d9cdf4326f4d",
"main.dart.js_226.part.js": "fb74c27abec6f5b8d88ba0080f787c7f",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "486e36cb7254d49d801732f20f32de9a",
"main.dart.js_178.part.js": "f8620bf13b9e9ab121b20a2cbe279a48",
"main.dart.js_258.part.js": "98015dd8bcb3f90172f57f17ff8422b5",
"main.dart.js_70.part.js": "bc6b2d20158b5d92b389d62784f460fd",
"main.dart.js_187.part.js": "fbe087c2fd2cfa7150d64bbc95fa5035",
"version.json": "931143561f8c3501c71e062ebbae3b6e",
"flutter_bootstrap.js": "69894bd61076383052da069a75c21e6e",
"main.dart.js_191.part.js": "0034279f2b7f49ad415fdda44685bedc"};
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
