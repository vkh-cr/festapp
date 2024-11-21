'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "86716fe43349e99ede76f840c494a002",
"main.dart.js_75.part.js": "7fdac76d22417846c9f60f2bf2bcd4dd",
"main.dart.js_289.part.js": "c5851ba74c18fdcf7cb3033833f4c717",
"main.dart.js_83.part.js": "e49026d58a3eb0c80924e79dad452212",
"main.dart.js_254.part.js": "e24ebdc943abdc25083504f412da0715",
"main.dart.js_176.part.js": "eb8efc3fdbe9a25f328799fc85d51535",
"main.dart.js_96.part.js": "ac961cb0734be189312d5c1320464814",
"main.dart.js_245.part.js": "24236d21c383f5c52041204229e1fd1c",
"main.dart.js_87.part.js": "acda911d801059b4e0c4e3529cdc31b8",
"main.dart.js_251.part.js": "44a3a1563b710a3121120d188f7ea6b7",
"main.dart.js_126.part.js": "934a1f8616c7246b51ee72cd916b47eb",
"main.dart.js_129.part.js": "f93b7bcbd5329dbaa95250fdb5ed83bd",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "c90ff8f333e7d4e8e845e9b7282c7209",
"main.dart.js_172.part.js": "647e16b265652e373742c3f02f9bb6fa",
"main.dart.js_142.part.js": "439eec6f68d3ac0294366ec810c7b346",
"main.dart.js_209.part.js": "dd694fdca4ad93cc3ff08d1df596fbbf",
"main.dart.js_10.part.js": "161572f03b5ccfbadb3569bf8b985834",
"main.dart.js_66.part.js": "2189421d912a7d5e6ab5ef8b682fa8c9",
"main.dart.js_84.part.js": "93d162d4e56448aa1cb2aaed15f0eb4c",
"main.dart.js_122.part.js": "75c093974f59575fa00db2e5cadd310a",
"main.dart.js_230.part.js": "a7671a42e224a4cd78407762c4333ca2",
"main.dart.js_213.part.js": "cbdf7630b4863e9027dd6e63d7047280",
"main.dart.js_153.part.js": "91c594bbb6fa44d0a97c8792bf2837a9",
"main.dart.js_89.part.js": "5bdcabf67d057de3feaf9ecb8bb1914c",
"main.dart.js_146.part.js": "6817bd8848d9088727cb362480838977",
"main.dart.js_37.part.js": "17d94415c81ce6cff1e07b470e98f1d0",
"main.dart.js_287.part.js": "1fcc66ebcec4b78b652d57c755a97166",
"main.dart.js_283.part.js": "aee502d6ff7415ad073a16bd9e0f8274",
"main.dart.js_132.part.js": "5144992221b51c17f4fd47d36076640f",
"main.dart.js_165.part.js": "78d017f0c3f46ab818141f819a5ae188",
"main.dart.js_127.part.js": "db63b29afb4efbfd555d5c64314c8569",
"main.dart.js_175.part.js": "1837f8429c4aa0ecf7a8ef0a2d90b339",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_216.part.js": "40d9217dd5b236675f22ef575eed14a9",
"main.dart.js_64.part.js": "a762c17671c54a1c5a11f2c26b312c06",
"main.dart.js_13.part.js": "8ce384398878419145f38e9d8798881e",
"main.dart.js_246.part.js": "6f776021cadb2f6823c10e4efd7abc61",
"main.dart.js_174.part.js": "ebe1b51c449f99170f77cb0cb5fdb222",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "faffa96b7e01a3ca2cced76860cfb27e",
"main.dart.js_144.part.js": "0fca998af8a9329dd409432f425f72dc",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "7ee87818c58e3adb5337537de69bbf6b",
"main.dart.js_265.part.js": "8882bb85b5a72601451852febf48c0b6",
"main.dart.js_31.part.js": "21d9d798e8edadc11fddb4b2b11fe578",
"main.dart.js_119.part.js": "4b5a55b8a3502737c9011f62370c88d4",
"main.dart.js_294.part.js": "232444de4bff4029c7610ebc802883d4",
"main.dart.js_18.part.js": "b1a6a67b233d90e4d2fb34c3346e15ac",
"main.dart.js_35.part.js": "4b53a26218eaa133d83f627cdb50f2ba",
"main.dart.js_200.part.js": "366ead91593dbc8ea9107ce956baa8bf",
"main.dart.js_101.part.js": "44fe7b8d35cd56cb5b7cad75c4460205",
"main.dart.js_77.part.js": "a750335a5878ab949783d7aed0f12e9f",
"main.dart.js_208.part.js": "6385b88585ff809c5c2fa968f6470503",
"main.dart.js_82.part.js": "61a0b19bb79d477fc806b8b115950eb3",
"main.dart.js_173.part.js": "b2d46074f54d524ff460db62246da893",
"main.dart.js_291.part.js": "eb6be5a0d5e79cb555e847ca17dbe8ee",
"main.dart.js_106.part.js": "fe07cf1758826efe78c27d1f2bfe7e56",
"main.dart.js_273.part.js": "a7159654989fe07c3db080cea1426712",
"main.dart.js_62.part.js": "518c830a15de2fe789158a8a7e5363af",
"main.dart.js_259.part.js": "351890033431113ac78d68c8d1ed7936",
"main.dart.js": "a4414590751700687762db0c4adf1e92",
"main.dart.js_222.part.js": "316b9baeb100f48928f5dc5f2f71653c",
"main.dart.js_293.part.js": "e8dd0fdf0f23bb818b923acec3747476",
"main.dart.js_124.part.js": "edc8aecc8438350a49fc7d8d38c3eb55",
"main.dart.js_50.part.js": "71f48ed09b1c0b719a24bae8ccfcde6d",
"main.dart.js_192.part.js": "87ba19591ee94c6e0a24abc7c21165d5",
"main.dart.js_91.part.js": "e73f62378be637875492cd2ef3a4c0ce",
"main.dart.js_145.part.js": "e3b5b1695509b49740e70eb6e9aac0fb",
"main.dart.js_229.part.js": "d2e16daa931670390ecde3f01777e2d1",
"main.dart.js_190.part.js": "807c29a2f741b02ee4450ed901e4a2e9",
"main.dart.js_104.part.js": "f7b45ef10cf8ee1ee7329975f74fb49a",
"main.dart.js_201.part.js": "7ae6534592426ad8bfc411906d4d8378",
"main.dart.js_69.part.js": "4930429f5dd87acfd2d67caa9e3cbefd",
"main.dart.js_196.part.js": "9c643578cb407b5c873bd32db1cd33e6",
"main.dart.js_181.part.js": "179fafa9be3e6474ed05d0810e2d2528",
"main.dart.js_270.part.js": "2138e50d5bdbd1382216b94404a2ffc6",
"main.dart.js_158.part.js": "714dea2b373065d433fd5d8a733a2a46",
"main.dart.js_33.part.js": "789752934bdd5dd8888d3da895168a95",
"main.dart.js_275.part.js": "eae104d4e4d839d7b78ad8ac9f0538f7",
"main.dart.js_269.part.js": "522cf8cbcd143cee610a4bb53ba8c103",
"main.dart.js_217.part.js": "c072965376b478f5729ee6de93dc16a2",
"main.dart.js_34.part.js": "adb391ef2ab847cac8ea0f1cde6df633",
"main.dart.js_210.part.js": "a98727060ddb8be492363ea19c1ee7b4",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "e1f9893053ed8f1c88bf25613ccfdfa7",
"main.dart.js_88.part.js": "02b93dbde4288c048319568b431f4cdd",
"main.dart.js_202.part.js": "d1de0d0a47ae31cd4ef8fce4b4d07bea",
"main.dart.js_183.part.js": "ee1aa363c822140e6c330f535083f9bd",
"main.dart.js_167.part.js": "77b1321690a0c3c977ffa3bc25edd80f",
"main.dart.js_203.part.js": "6c7ec3d2161948f66fde5e8931e8c571",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "bafcaf6f95c71567efde4d5d89f15218",
"main.dart.js_7.part.js": "f57e7d5385a81a9a758949f9f0aeb6ec",
"main.dart.js_140.part.js": "c0a350e5dfc0bd4b9ff5c484c66c2765",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "ccb7cd7b8b749fbcff8a6f92ac406273",
"main.dart.js_27.part.js": "418773de843f2c2d4dd3c45ad9801b2e",
"main.dart.js_156.part.js": "dec0cf423fb87702c688bb41cd358ce8",
"main.dart.js_4.part.js": "d1571a6667ca02ef6accf74c1d285281",
"main.dart.js_298.part.js": "8e5e5296aa1e05041d9ccd85e37c3095",
"main.dart.js_219.part.js": "140d34fb8470371f30379cb50919dbd4",
"main.dart.js_116.part.js": "768fae5728162027ca5190faea1b26d1",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "4772e046a247f39a843ac9bbc893e582",
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
"assets/assets/translations/uk.json": "5c6f91b5506200c26ad51e5350765c6c",
"assets/assets/translations/pl.json": "271b55ce0c52c9830bf390887e5966b5",
"assets/assets/translations/sk.json": "319d036846a90d0dd0b0d1fc3f1cf8fd",
"assets/assets/translations/en.json": "cd55cd652cbc775f1e0f2c4d420d34f1",
"assets/assets/translations/cs.json": "d51954e17c01bdc68e0d936ac0fec133",
"assets/assets/translations/de.json": "8fac98a7bb87e3ef69fe52580167ad64",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "21092cee812eaca83f55eb5e54aecf0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "4602484a51e705943cfc7fbce1d52d2e",
"main.dart.js_263.part.js": "09bb968380352d505d1467aa35ef6f6c",
"main.dart.js_220.part.js": "88f2a8a990a3e468fad2cb76e05bfd46",
"main.dart.js_25.part.js": "adbdb01d5b27c59eeba636b30961a216",
"main.dart.js_288.part.js": "6949bf37295c841ef5fc3cf405c1f6ac",
"main.dart.js_141.part.js": "f925dc277e8eca33cd58aba99149af07",
"main.dart.js_249.part.js": "87973f37231b7f17f22d40b50d906dce",
"main.dart.js_123.part.js": "ef9be8a8fc1e0e3fefe923f97f12649a",
"main.dart.js_268.part.js": "9c8fe02e390e5b40aaf71f55bc0a4e34",
"main.dart.js_8.part.js": "65a702dd05d49b039d5bb2e2a3ca00b6",
"main.dart.js_198.part.js": "4a3267316a14f4720434c1d79253f751",
"main.dart.js_81.part.js": "94f203ba03d6ae91aacaf71a030f5e1a",
"main.dart.js_113.part.js": "927a69fe754a7297ab9ef0a9bd3fbddb",
"main.dart.js_280.part.js": "3204f875772880252edc863ba62e50ae",
"main.dart.js_9.part.js": "7e5c053e9723b0f9f7042ed130d0f343",
"main.dart.js_99.part.js": "d0e5de7d76bf223346b47865a7227847",
"main.dart.js_242.part.js": "508d1b57f123e47bbcff4f71e82cbe30",
"main.dart.js_86.part.js": "12a60b9f642807352d03ea8f5e0254a8",
"main.dart.js_23.part.js": "433fd065c82257c9e7bdb981dda3eb59",
"index.html": "9012901f0aea1934eb722acab55628ee",
"/": "9012901f0aea1934eb722acab55628ee",
"main.dart.js_98.part.js": "4d62f7816bd7b122917e6abf8c099dba",
"main.dart.js_53.part.js": "b1ebec44e40c8e86b8f646fdc4fc5c46",
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
"main.dart.js_286.part.js": "b30732f89dfa61184e31c65bcfcb58bf",
"main.dart.js_118.part.js": "1d5223496aa6e1b0acb71072db2361df",
"main.dart.js_262.part.js": "e8cc2c4bc5027f358ac6c57fa30d6732",
"main.dart.js_26.part.js": "7dd6fd3e6f93d7ef6086b99fd7dcf238",
"main.dart.js_20.part.js": "e7cdfbfebb86f3bcde275617c4c68f8e",
"main.dart.js_189.part.js": "4310866d5ea53fa18376a20d1cbb1976",
"main.dart.js_51.part.js": "0cde192dde44b820b310bf09c5303aaa",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "265a75874860f23ca270fc1cdf02aa44",
"main.dart.js_290.part.js": "404c8244a0d40e774e774a69131105e9",
"main.dart.js_72.part.js": "a7770e61aa1c8eeeacfc1cb0e3dbbf08",
"main.dart.js_1.part.js": "310c0477a4b1edb2cf8d611f7e6af45f",
"main.dart.js_120.part.js": "42b7efaf5d116c7d01029684cde14b77",
"main.dart.js_63.part.js": "989afef566cc828f1c331427273816b1",
"main.dart.js_211.part.js": "f3a3e32e3a0ee481772cda6b0a32b1e2",
"main.dart.js_295.part.js": "5d5e81ff2c28657754455a365ba3e783",
"main.dart.js_12.part.js": "144c7e4e49433c12fbcbe324ca7309ea",
"main.dart.js_157.part.js": "5abf820e76446c8ccc0bc0d56446583a",
"main.dart.js_281.part.js": "1d1745de82540fa42ef9457514e13768",
"main.dart.js_221.part.js": "c1f31f3af87da929d49a52a850334298",
"main.dart.js_137.part.js": "5d67b60dd3586350e24f9909ce8f9410",
"main.dart.js_276.part.js": "bc09273d426c8450745118711bc22758",
"main.dart.js_28.part.js": "457fd77d33c8333c5078f2ba0d7dbbe9",
"main.dart.js_135.part.js": "fb16bade284684f36226d032a72b8864",
"main.dart.js_256.part.js": "aca1d48bf5cf1e178be60d61ea6d8c4a",
"main.dart.js_138.part.js": "01270c10841ca1657c18f34dbab7904c",
"main.dart.js_193.part.js": "2fe15cdf29c1bc41b83ab6c42ace25ea",
"main.dart.js_17.part.js": "b2df27e2fbcbc5bd6cef0a2072d9c2d0",
"main.dart.js_105.part.js": "7a4db441fdcd412c0b8d4baca16a2e92",
"main.dart.js_231.part.js": "d9c02d0223f7f9473cf45dca7139526b",
"main.dart.js_43.part.js": "d00f1393b3150725c8644b25779b42ac",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "939b23723de1f68b4be13590709fa1ee",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "2def36fc422d5f3191c0a6480123c1ae",
"main.dart.js_292.part.js": "9577a8701e53c22f8a16757102c3f746",
"main.dart.js_15.part.js": "588a8f758838f3be6ce79620e990d919",
"main.dart.js_151.part.js": "f904f2933f58c4cf18f06594ee8f0bad",
"main.dart.js_19.part.js": "8b2b2fa8aca6d22294fb33699124314f",
"main.dart.js_284.part.js": "13f95fc6e86aad0ea087bff38ae655a5",
"main.dart.js_255.part.js": "d7d310429fb5a476f6d4844d67569ce4",
"main.dart.js_186.part.js": "8183887ee265300b39f97cdee26cd04c",
"main.dart.js_154.part.js": "ce0fb8cf266a965442190ec96b82dfcb",
"main.dart.js_257.part.js": "ab3e7b859e04ef85fc700cdf91be50ee",
"main.dart.js_42.part.js": "102f2daae0620264a629e306930e44d7",
"main.dart.js_16.part.js": "e2b1d0052bc08273f913b2177b6fcccb",
"main.dart.js_52.part.js": "2c1fcf6fc5bf5f0e5dc2234dc32743c2",
"main.dart.js_36.part.js": "392ac20624f3b69bec5fd6c8f8591704",
"main.dart.js_199.part.js": "97c05ee892e5339aab64670592e58feb",
"main.dart.js_253.part.js": "1cd863eed702f9df31eb4e174695c590",
"main.dart.js_130.part.js": "4c8e010f109ded88f5dbd6d58595e489",
"main.dart.js_238.part.js": "f6384acba750d262dd1f8b032552c16c",
"main.dart.js_152.part.js": "27db869c68f8273dad737018b4e12c58",
"main.dart.js_32.part.js": "8b208a7a1d35a0cfd31b8e17811cdcc9",
"main.dart.js_197.part.js": "ea836b376ea4307c470ec619e359d08c",
"main.dart.js_56.part.js": "41b63e76004f7a52bb6897d5c6e9dded",
"main.dart.js_3.part.js": "ff376a506b3c2a6d811be3e4d89d6873",
"main.dart.js_38.part.js": "f40b424bee2b25820c39e396deaebee7",
"main.dart.js_225.part.js": "921e4cabd508e0d76970cbc8772530f9",
"main.dart.js_248.part.js": "dc6a2b8a4d1d6a87d2746001b9542389",
"main.dart.js_133.part.js": "b928bdd3e627f462b5f16f5725c89b59",
"main.dart.js_21.part.js": "e46d0614f32b1f12ebe4b7e0a261a835",
"main.dart.js_188.part.js": "5a868aae93cb018026265b976405e36d",
"main.dart.js_204.part.js": "138531c57b0f24f64b98e3ca86c9667d",
"main.dart.js_24.part.js": "f14c8bb9b0ad7d5a2982bd315dbe068b",
"main.dart.js_90.part.js": "bc13359bdcec6e83de85cddf5c648d8c",
"main.dart.js_111.part.js": "a3c672111e0c5242969bae007f1a89d0",
"main.dart.js_177.part.js": "ddf8c0dd30a4f6425aa3398f72cc6422",
"main.dart.js_299.part.js": "29980750d7100464ea592ace3fc96988",
"main.dart.js_85.part.js": "731fb68d0ed59c7e173d338921375470",
"main.dart.js_243.part.js": "43c132dddeb5e77092dd635ffe2e4b82",
"main.dart.js_212.part.js": "cd968cd355e385f292b9a231ca4bf2f7",
"main.dart.js_260.part.js": "76a67a457e72b8d095f1df58e3bf80a8",
"main.dart.js_39.part.js": "e717ab4074a173d0cfe2eb9f9c322c7c",
"main.dart.js_185.part.js": "be3702e25f08729784eee850928916f5",
"main.dart.js_46.part.js": "02121037e3b2f6289526a8576f2c8c30",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "d646016cad4cdb7c364526b71b2297d3",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "f5a61e47cd5fb05201694e9a7eab8829",
"main.dart.js_121.part.js": "0b95f9ff89a67571fc4193073cbe0d23",
"main.dart.js_55.part.js": "56d958f07c2a7aea9bd1a6639f9983e2",
"main.dart.js_215.part.js": "74e9c545c8e70f97d4b1d4f77bb1ea65",
"main.dart.js_112.part.js": "40c82791e56c5097b4613176f362e072",
"main.dart.js_139.part.js": "1f68abb8b409aaa91424104d194c5439",
"main.dart.js_143.part.js": "e8e762acbbbf13890fb5a9bf96a0b088",
"main.dart.js_80.part.js": "e9b74b799c745798a575f42b67783678",
"main.dart.js_252.part.js": "51f0b13d3c6b731d3f9ea418a38d3e72",
"main.dart.js_233.part.js": "e5b266f3fe616b8d027d83a5a82eae72",
"main.dart.js_30.part.js": "02d24257561a5fe573246c56df478b7e",
"main.dart.js_267.part.js": "5c6b0daf326dc79f575ae7f337a72a66",
"main.dart.js_277.part.js": "7482c722cd750c34e27d5c12ddefdc3c",
"main.dart.js_136.part.js": "e24ead07897a89b11ad72ac5ecf44286",
"main.dart.js_271.part.js": "179da99f77e53e861b1f9243e80dd8ca",
"main.dart.js_159.part.js": "ecb3ecc84b1a353f3e6c2a65347c588b",
"main.dart.js_59.part.js": "fef6fe0c80fc518cc618a794d4138542",
"main.dart.js_95.part.js": "6c1b78df296b0f87d34d7935d13e5255",
"main.dart.js_107.part.js": "45a73b346e6cfc16cecee48c42ddc10d",
"main.dart.js_29.part.js": "a822d56cdc566386d70be877a9459df3",
"main.dart.js_61.part.js": "25cc7a6beecbde143d758aab005d41ab",
"main.dart.js_236.part.js": "b1827f3186db5816d9ccf19754ffa324",
"main.dart.js_58.part.js": "095edd37dd6bb38010a7e2566b63913a",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "290e61cb1d90110f658255e7256ca9c6",
"main.dart.js_54.part.js": "0153906ce136801e78943de69cc93491",
"main.dart.js_79.part.js": "a0479d3660a4bf07c72e7250e2f588b6",
"main.dart.js_92.part.js": "be56b1b89943cf1a11716cee7d08beb1",
"main.dart.js_224.part.js": "a99ff95acce1c911cf83ecc1699243a1",
"main.dart.js_223.part.js": "8d7efbc663ccbb066edc1c1b0bf75bb7",
"main.dart.js_11.part.js": "1b47c7abb04b2ffaeabfc7992c2d743c",
"main.dart.js_131.part.js": "d22f62988ce1d4b9881d79f4fb804142",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "ebc49b48f5bf69328fd2c4cfb2c5c675",
"main.dart.js_100.part.js": "ffbac60fb937413c58ac708454f984bf",
"main.dart.js_297.part.js": "90147eecc10287768646e237db9d743e",
"main.dart.js_70.part.js": "af7a1a4f061c81d5a65b21fcc59a0eea",
"main.dart.js_187.part.js": "8c1474447600b665558f8264780befef",
"version.json": "13e25a1bf53b1e0617e6c3115bbf029e",
"main.dart.js_264.part.js": "7733bd22cf1b1530d032f50b1efc3f55",
"flutter_bootstrap.js": "4a67404b0fb3e733503e241e2c8ef5b6",
"main.dart.js_191.part.js": "dc44b72d4eb53219e8a071383acb047e"};
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
