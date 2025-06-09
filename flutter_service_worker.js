'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_290.part.js": "a809c244606b34e48ed9d44ec2218690",
"main.dart.js_81.part.js": "ec33390ec3d88e0a37b0e60db2c2717e",
"main.dart.js_190.part.js": "21b029e4fb71c53f19b6f69ab937ceb0",
"main.dart.js_154.part.js": "2cfb76441d8f809b15d65d191f52f64a",
"main.dart.js_87.part.js": "67248a6803f304cbe7c19a012e434c86",
"main.dart.js_159.part.js": "66f8d88f609ede1e084e5a276939d4a1",
"main.dart.js_36.part.js": "d71d82ba2813d4a6cc2cd1a610bec9a7",
"main.dart.js_299.part.js": "ac818d04d86e80cd07de955a03e82f41",
"main.dart.js_199.part.js": "524d2a6d961e92bcd58ed8b56b9d3f3b",
"main.dart.js_138.part.js": "97b70100f64969fbd66a097094123cfd",
"main.dart.js_122.part.js": "7f7c856ce7ddf67f77c557490e1aafa3",
"main.dart.js_25.part.js": "5ea94e2667a54adf749572785588d513",
"main.dart.js_251.part.js": "5df3deb17a001448bb55f3e24cbfa7d7",
"main.dart.js_206.part.js": "a50feaca41986dbdc5f7157e93043259",
"main.dart.js_249.part.js": "b7e10829893d847c1b98549bbe640f43",
"main.dart.js_14.part.js": "80531ab576ba289129e1fd2e2305287b",
"main.dart.js_255.part.js": "c613221c94744b19ef985a183ec8b288",
"main.dart.js_178.part.js": "93d8927c2f3cd0eea982217d6b330a25",
"main.dart.js_256.part.js": "09e6f33e0aa5e8c8c4a208d632963401",
"main.dart.js_197.part.js": "b51b44c0eaa31ee535a08466507dafe3",
"main.dart.js_134.part.js": "e28110c3f09af9fabdf8c8d60e50d584",
"main.dart.js_46.part.js": "2b0e4eb05312447fe749fb0e3dc9a8b7",
"main.dart.js_274.part.js": "decc41cbab4fe633be67bc235a1cd2d9",
"main.dart.js_72.part.js": "8facab1a982dd3bd84ef30eaac35380b",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_207.part.js": "8f7978777179682482d3b9a38bb80b86",
"main.dart.js_38.part.js": "dbf7d9c2130d569eb0eb0b81459ff5de",
"main.dart.js_205.part.js": "02abe6cc95b3dcbb0b23db434bd71d07",
"main.dart.js_276.part.js": "a9f6a969a6e9cf006a68c1f3bba6cd75",
"main.dart.js_6.part.js": "81a19c6c3ae98646a4151fc1c6a18b6e",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"main.dart.js_169.part.js": "72db2932f2e4a776f889e37d365ad90a",
"main.dart.js_132.part.js": "c72a60c8f741ee3803bb31a2d127addf",
"main.dart.js_146.part.js": "f35cec29c682799be6fc9be221547f44",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_57.part.js": "a0edcc89a9b706e705c8637e171fc079",
"main.dart.js_60.part.js": "22f343f809315f732835fe8c48a8f84c",
"main.dart.js_264.part.js": "a7503f4b7815479db62ffc390e72c1fb",
"main.dart.js_285.part.js": "0f92012b7394dab88aeb21d2cd82e292",
"main.dart.js_92.part.js": "4f484e4d877425323ef4660c9bf3f591",
"main.dart.js_307.part.js": "3effc887aa15ed57fbbc0d0ac70a9afa",
"main.dart.js_85.part.js": "ca7d75aa549b4192ec2f170c9bd85c94",
"main.dart.js_200.part.js": "040728d6d93d994ce00907ec4309139d",
"main.dart.js_1.part.js": "18ac3b3d96198b2edce40a70df4b3096",
"main.dart.js_121.part.js": "131f0cedfba6bcfc48886aa56671eb41",
"main.dart.js_39.part.js": "39dde0b22bc9beb7e49c8c6110f88cf4",
"main.dart.js_8.part.js": "3cec39a08ebf16b016f115c1f58d0671",
"main.dart.js_95.part.js": "2c7d34a8ee0cd28a56c37f56d56f146b",
"main.dart.js_139.part.js": "3989b59e784aeb184bb666a5611064ed",
"main.dart.js_140.part.js": "e846102b3ea0d6472b54ab77a5931d5d",
"main.dart.js_93.part.js": "dc9de7b18aaadae8894bfd08f81b7ab3",
"main.dart.js_275.part.js": "28582549338a6163d3eb21a64d58e342",
"main.dart.js_180.part.js": "e80764700cdbec1993e161abb153a328",
"main.dart.js_179.part.js": "03cf7498d651c19331d44b1e5fe29c02",
"main.dart.js_182.part.js": "84c99190ce48c20aa09f7e5133365347",
"main.dart.js_144.part.js": "5d7fe407571e109e3fe4212ea38d559f",
"main.dart.js_13.part.js": "f3809aced1bc110548853bba47431250",
"main.dart.js_48.part.js": "40113becb4310ae535df0114b48c1b21",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_94.part.js": "210779f208025bf4d28eb580de6a2fc0",
"main.dart.js_231.part.js": "7de6b5c94bcd4c83b1c139c74c9dc26f",
"main.dart.js_300.part.js": "d60e799f2bc7befb5b22b0ad09bad829",
"main.dart.js_68.part.js": "f724fdbd62b2bef870bce9c13200791a",
"main.dart.js_269.part.js": "817e50d95283fa10d3fa73eca4e8ce78",
"main.dart.js_298.part.js": "a2806b17c7d924fc8e66ff390155762b",
"main.dart.js_43.part.js": "86d7e49cdd61e3fc8fbea564a45ac5e7",
"main.dart.js_59.part.js": "67f7e52221ccd3375c0bd7bc6e2f849e",
"main.dart.js_28.part.js": "0586fdf78e0a40d1a52bdba63db8f765",
"main.dart.js_303.part.js": "4e3b17385cd86f686fd50f314b987f08",
"main.dart.js_270.part.js": "2a3885b6e97ecb722de213dbce1f873a",
"main.dart.js_286.part.js": "60b5c4eeae3d3aaba1bd2542365624a3",
"main.dart.js_166.part.js": "ecf780ab4dcb1496b2de2d1b73f2e1bb",
"main.dart.js_35.part.js": "6f7f18d521813a4da86be3287a8ec71e",
"main.dart.js_118.part.js": "dd26625552e2caac44c3387e2fb2027d",
"main.dart.js_75.part.js": "bf6cec19648ede5cc103f93ddc6f464d",
"main.dart.js_11.part.js": "07d535edeaaa74a52a049945a5ef3a67",
"main.dart.js_123.part.js": "5f012d9ed6327136eb47131a667f16b1",
"main.dart.js_37.part.js": "2bb36e14205e9bdbcb94dd439cedf892",
"main.dart.js_235.part.js": "3c6bef6580275c7954182406fc5796b1",
"main.dart.js_240.part.js": "81932a1044e7ab8adb26fb7f86d32517",
"main.dart.js_168.part.js": "f626d70c8c14b93a964ce3e2112aeb36",
"main.dart.js_112.part.js": "3b76957b2ed9e23d5adda547a44b6e3e",
"main.dart.js_26.part.js": "fd49ec5c400402a4fa8a7c288b9b3869",
"main.dart.js_110.part.js": "571d0467fb94a92557f31578a3c6e3b2",
"main.dart.js_30.part.js": "4dac2610e3685318d74c5074375b128f",
"main.dart.js_242.part.js": "04405935aa0d7c0610798325ac7dd431",
"main.dart.js_283.part.js": "3f38ae44d8c4cee7f7f5d8a728861d29",
"main.dart.js_293.part.js": "d15514ea786b88fc440c7b1257041e6b",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_164.part.js": "9ab5329aeb5f3d9c1b52d4ef57b18c1c",
"main.dart.js_126.part.js": "2d1560527e28e1361c8ad6c2f4f7e413",
"main.dart.js_3.part.js": "c8887a740afea5670c26a224086a7970",
"main.dart.js_80.part.js": "14675a995ac0ad5b07e9d63764331a75",
"main.dart.js_113.part.js": "2d24745c4d14847255bf731744e6cd8e",
"main.dart.js_277.part.js": "b7c66a101b3084d71af2d68e6910d77e",
"main.dart.js_103.part.js": "a5c41c7dc110d88802372d9456ab6412",
"main.dart.js_241.part.js": "47eeeeca1122684c0f21a07d28bf2a1b",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_188.part.js": "c377bb82137aeaa14b2e5a6fe1d67684",
"main.dart.js_32.part.js": "f1c8d21cf1decef48314bb79c702cdca",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_4.part.js": "02d1d17c4596875cdc867c7ce2b1be45",
"main.dart.js_53.part.js": "984e1917e138946df757821423afab0d",
"main.dart.js_234.part.js": "5f9add5369249ca6022e97d6926ea323",
"main.dart.js_223.part.js": "da274d935aad85bad3f2849465a79f7d",
"main.dart.js_213.part.js": "85611ee73eede345befff760794a094d",
"main.dart.js_15.part.js": "70790233ed20ef9d99b1b22b5bb2106d",
"main.dart.js_105.part.js": "b44050fb8ab31d773eb914612b2994a0",
"main.dart.js_107.part.js": "46ad814cc94f8e2082c477c0707ac606",
"main.dart.js_248.part.js": "95eb04c0de46d6efff5f21473a72f46c",
"main.dart.js_45.part.js": "a0053c447480c0a09434c1cab5e69e17",
"main.dart.js_160.part.js": "c6577653a392eacc155443e99f44d4cf",
"main.dart.js_289.part.js": "6dd143c4366e87e93184008a2603c3a2",
"main.dart.js_96.part.js": "7092e998ab1799368c77ca2f914e6162",
"main.dart.js_147.part.js": "bcb4e6d56ee3c325395df35135f68b11",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "087744f1f2dc291a567e01d75e573c81",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "42ac634848b97e70707952b47db4bc3b",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/uk.json": "1794b65021c354763a0a830b83ee3fb1",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/cs.json": "0a09f16d4ba3b9952c2a512a37c59f02",
"assets/NOTICES": "4bd2930db146c4653bc584bd9d65b728",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js_175.part.js": "9310339d2ce0e2120f9975c844549104",
"main.dart.js_145.part.js": "fe6bb83c0aae331cc10808cb131daed1",
"main.dart.js_210.part.js": "def9cbc8e6895b2a7b9eb8059244257c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_84.part.js": "e86f7dfe0cac441356a37b6c716f7174",
"main.dart.js_82.part.js": "d3efb693c7226efc46a9552402248d00",
"main.dart.js_31.part.js": "2f71c2256bab1bca8c5908d01824c345",
"main.dart.js_115.part.js": "34d89887bfe129a26f884586597a7797",
"main.dart.js_189.part.js": "9a2f5b8c807a149131c24e8b3f7d8cea",
"main.dart.js_204.part.js": "7cec3efc1d810efcac109c5ae7176d98",
"main.dart.js_79.part.js": "431a9b6d40f8b8f85cf3f49eda7d8054",
"main.dart.js_301.part.js": "4f10d6be4e68738a4763895fb97f1a99",
"main.dart.js_297.part.js": "058b238cdd368ee72c431b8396b9dc5a",
"main.dart.js_192.part.js": "bd5a0cfac5ddc563e1aeadda25e67095",
"main.dart.js_215.part.js": "140641fabee4c8647244c02a97301842",
"main.dart.js_195.part.js": "fa9b1e2572d3473fdb142f53fe894ccb",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_304.part.js": "47cd31063fefe735d3620a18e9461fbf",
"main.dart.js_226.part.js": "554239beda317af0a71e57e6f099f4a1",
"main.dart.js_208.part.js": "2f8993f1016b4aea1c09681cee55b954",
"main.dart.js_54.part.js": "ecc638ca657672c1ec2458274571aaa5",
"main.dart.js_106.part.js": "71c083c587d88497826d73a3f7c76928",
"main.dart.js_152.part.js": "4c34f1da41e1058dc0b1d4fc5b60103f",
"main.dart.js_272.part.js": "9d64948d348bf8d0aa9d9cc701d9e492",
"main.dart.js_302.part.js": "d727092afec08933f092446e09eceede",
"main.dart.js_181.part.js": "ef7d6369a4fdbfadc7d8277358368113",
"main.dart.js_51.part.js": "98a2fabf78df96d94bf8668ad7a51764",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_237.part.js": "89f54b01b75dc602717eaf648216914f",
"main.dart.js_173.part.js": "cc62a873105c120d687f68cb33ee5ed6",
"main.dart.js_170.part.js": "3a7911ddc71570ea03f083cdb29d6a74",
"main.dart.js_282.part.js": "e9a8d1b6e1b39e85954e1e0cc255fd68",
"main.dart.js_34.part.js": "c2bc7c539454257ad0ec5fbce3d86c7e",
"main.dart.js_24.part.js": "7ac4fbd6321e2f4fa5b367ada1c9a74a",
"main.dart.js_128.part.js": "a39c969067e3bd31c44f04c7b2c91b97",
"main.dart.js_18.part.js": "8f1ecc6d1f2242014f91f96078a2d1c8",
"main.dart.js_2.part.js": "234d442e89b15e5f117c8bc97d828af9",
"main.dart.js_69.part.js": "f4de1847c3f2407d61a5c01db87819a5",
"main.dart.js_70.part.js": "672baf30e7b7dfe032ea043fde3195d4",
"main.dart.js_229.part.js": "b692f6489e9adf855e3fe67c098c7cb0",
"main.dart.js_27.part.js": "a65ea3e13a7d1452902115ce0fc6e73f",
"main.dart.js_238.part.js": "8c18e7bea945c1231a6e78d90d5ff256",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "280a54f8fd86bb6c286df95d356ab07f",
"main.dart.js_253.part.js": "f04dc3a4a02aad5f3b6c3411d83a5e87",
"main.dart.js_244.part.js": "764d2c2fddde6be941b18540b14b97bf",
"main.dart.js_137.part.js": "75558770be434136c79e913a8a9ffe5b",
"main.dart.js_99.part.js": "4c111defa3d154285ea6d912513fa28a",
"main.dart.js_66.part.js": "4ce58530baeacff7c2f5eaac60dcf1c2",
"main.dart.js_10.part.js": "91353c98679a76a2de5bbc86ce19fe8c",
"main.dart.js_267.part.js": "e9e4cdd570eca7f3d68b04a8e5b64def",
"main.dart.js_56.part.js": "2ee59ec01041440d8a88359501bafb57",
"main.dart.js_183.part.js": "1f95a3ec267b9f0e0c2aff9eacb68f56",
"main.dart.js_129.part.js": "6d916ac65cb6cd9103cc96f3096be4ab",
"main.dart.js_5.part.js": "29c86bccb910420bc9e414f7419c3635",
"main.dart.js_76.part.js": "7202388137848eebdffa0aa04c4f8228",
"main.dart.js_265.part.js": "749e954bb7418ffd738bd9cab819087b",
"main.dart.js_7.part.js": "e04c5293a3e9f829ebe1b5b735acb381",
"main.dart.js_16.part.js": "36cdb41c4b9109c5ee459c4f0f550755",
"main.dart.js_236.part.js": "c8f7e03901d15b499ff464b4539d6d57",
"main.dart.js_133.part.js": "095d51035dd5971e75aa9cc0231cb373",
"main.dart.js_259.part.js": "e712989e6d56b681f13359da306c1deb",
"main.dart.js_90.part.js": "ee7787553574e28cdbb984814a27f89d",
"main.dart.js_260.part.js": "ff4ff0d5f6a8e3816ca6c8c9a20581fb",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_157.part.js": "479cd34c465abc39952a2436ebee3090",
"version.json": "2b8d8d8762bfca0a73bef503b1b0a459",
"main.dart.js_153.part.js": "4e50d45a888ac8ffda0d741b71522679",
"flutter_bootstrap.js": "a45c5f23db00deddec76eec0d2652e96",
"main.dart.js_176.part.js": "f10adb77ae8053a49aa397b651ab80a3",
"main.dart.js_245.part.js": "3a0c79a5ce4673f6d7a78985ba94b617",
"main.dart.js_306.part.js": "4a4e324150208eca8472b0f1d462841a",
"main.dart.js_209.part.js": "389043321c9f13a82e1a5490165e50f0",
"main.dart.js_33.part.js": "46da9940ec3f65ab0b1c033c40b6cf9d",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_9.part.js": "b91effd0d3b486ba6b951e83f2d39093",
"main.dart.js_155.part.js": "9f80ecce8cf6975a2c325949c2975407",
"main.dart.js_239.part.js": "b64d7c578fa16f9626fdd253300fe367",
"main.dart.js_284.part.js": "2b9a1da6c6eedba934f5b6a2fc205433",
"main.dart.js_214.part.js": "aff62d0be5d092e2e329d9dee36d625b",
"main.dart.js_42.part.js": "b870ba9a210c565dcd0cc4af3559813c",
"main.dart.js_291.part.js": "177fcedcd18bd687fbb6386ee4c0ddb3",
"main.dart.js_228.part.js": "6367012b91a98d2f5e66bcaa7df2dafd",
"main.dart.js_98.part.js": "6f9d3b00a4e7b5e01839c6920a561838",
"main.dart.js_258.part.js": "02d2315985302e3a917bb82bc3ab2b02",
"main.dart.js_163.part.js": "74fd380da76c62f42b07893982951c60",
"main.dart.js_287.part.js": "2ebefa017759efcba5b9fda7b326da7b",
"main.dart.js_161.part.js": "4dfcfebb5f09c03db1025b50eae5b6ad",
"main.dart.js_49.part.js": "4259c0bbdf9f7dd8997ff2e9b13baa39",
"main.dart.js_22.part.js": "3ba6d8346cb8595f0c091558df4c9c50",
"main.dart.js_308.part.js": "ccec3a69f324b0c8c10770161efd8c69",
"main.dart.js_131.part.js": "c24e2e9779276060b6687ede81b2fa20",
"main.dart.js_12.part.js": "565c67ae7aa1cd2a16722b4a46da2eec",
"main.dart.js_62.part.js": "e0b7e965919031a9fc1a0e27a636ce1d",
"main.dart.js_91.part.js": "14f03eabe97ffe926f10b13c939d2ec0",
"main.dart.js_232.part.js": "9f364fec0d6e5b47bf516f2077391e67",
"main.dart.js_104.part.js": "2177132a9e3250c6a9599cdf2918e8d7",
"main.dart.js_71.part.js": "2d3a6cffe5e991a062b594d71c069bee",
"main.dart.js_296.part.js": "f6a19501a210a32ae3c0a0ca60376ffb",
"main.dart.js_278.part.js": "540fc0b71ceee041d971a649fae3fed0",
"main.dart.js_109.part.js": "778be12ad96f5a33c66d487877f86724",
"main.dart.js_143.part.js": "93cba9af883e9e43b8198afc453f3f37",
"main.dart.js_222.part.js": "9a04bed170bef96b8ba9afa7f9029c2c",
"main.dart.js_67.part.js": "fb5c56aeebd94d2ade17547a0c2f7e1a",
"main.dart.js_117.part.js": "50fe6bd129da4988aeab347ee414dbca",
"main.dart.js_292.part.js": "a27f64f30a4c546027ca420e3ae439c5",
"main.dart.js_108.part.js": "a6cf6b24eefee695066c454c0c106f77",
"main.dart.js_295.part.js": "377a72e14cb2f7cae5f3542edc5f6566",
"main.dart.js_221.part.js": "3d1081ebf6a292510b57b67bd455bd3d",
"main.dart.js_47.part.js": "dc037c640316c4c5e15fd7eb64788338",
"main.dart.js_142.part.js": "0060af66d5dd2f6e8507ed1e7a0d58b9",
"main.dart.js_288.part.js": "ffac17fbc585a036a0b808c1ec6c8188",
"main.dart.js_55.part.js": "a7882afa5fb185988731f0d9cb6c65d3",
"main.dart.js": "b6bf1cfde410693f4e6f8eb86eb320ea",
"main.dart.js_227.part.js": "1bc8cf26485f0896fd27a227d5f396d4",
"main.dart.js_280.part.js": "0bed32d15bac481b2dbc1df3a1f1689f",
"main.dart.js_202.part.js": "f65c9a502faa90159fee926d76c2b4b2",
"main.dart.js_266.part.js": "1b9d82c1d726029c4c05c836971d5b22",
"main.dart.js_261.part.js": "a02d3ee8fbca3409c569577030886372",
"main.dart.js_130.part.js": "f19081bb8cb7fcbdbfb95cf87402358a",
"main.dart.js_41.part.js": "313d6ae6b10ecadd21dedb1b1aa58cf5",
"main.dart.js_29.part.js": "2d4f52d0660a6a83876c6a6e7adad2ee",
"main.dart.js_254.part.js": "9ac236f64b8b6f238b9c83f416111444",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_271.part.js": "ecc580e501239d5b9a09810b02815414",
"main.dart.js_151.part.js": "a7f0ad2e86cdb9569cd161b542ef69ff",
"main.dart.js_74.part.js": "b53be2e57738ad544d1f3495c01104b5",
"main.dart.js_165.part.js": "809ddc33bc7f4d71c4ab196983cf4920",
"main.dart.js_263.part.js": "feee63906ad1b88069f6f7ad355ad4d6",
"main.dart.js_100.part.js": "e319b390c886c440903b7e55f95d469d",
"main.dart.js_184.part.js": "f16bdcad49ef94599e731477aa5bee5b",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_281.part.js": "7f46c878dea659d1a4d2cba6dce613bb",
"main.dart.js_185.part.js": "58e26bbf2f0afc500359609b2301f30f",
"main.dart.js_196.part.js": "f1b40d4abdf4aced8f66199962f24a77",
"main.dart.js_250.part.js": "06527eec8ff162741222e72eec8bba8e",
"main.dart.js_83.part.js": "6bc69af240f90a8311108978d29dbadc",
"main.dart.js_119.part.js": "6c03d05e26cfaa9938d196a3da7e7d33",
"main.dart.js_225.part.js": "14b77375eff1c7e011b93fc638bffd7c",
"main.dart.js_211.part.js": "53dd4f639a6c5b0f61e464e7d89e6fda",
"main.dart.js_171.part.js": "aa46004feda2f323dbfefeb3ed1e1ac5",
"main.dart.js_162.part.js": "d7405e714b12c92590dcc281e160a060",
"main.dart.js_77.part.js": "340911ffbf9be54f90092854c483899d"};
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
