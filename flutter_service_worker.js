'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_290.part.js": "24f61367cc1f0f3bc817c71ef5002c91",
"main.dart.js_81.part.js": "35be956281d8330f6d2a8a8e0a04ded1",
"main.dart.js_177.part.js": "47680067afe6430092b38040edf5d9e8",
"main.dart.js_190.part.js": "2a0c15ca8dc8460bac81f9de2a0706a0",
"main.dart.js_247.part.js": "5956f444b6a84f1016e7d892c173099c",
"main.dart.js_154.part.js": "707d71307bf8868c987edb48df43b361",
"main.dart.js_87.part.js": "671e3ed2cd24dd9e7e76f7d2fc3391a4",
"main.dart.js_159.part.js": "bb69bedfdd463df28c24bd1c4439682b",
"main.dart.js_36.part.js": "3447a38bd98875f19f3ffefda0f8d635",
"main.dart.js_194.part.js": "e7cdc5b3027659254aba8c7f872f99be",
"main.dart.js_299.part.js": "ff936842ee541cc70f4ec0e3f30a6ad7",
"main.dart.js_199.part.js": "0eff64ef3b4c73474152459a5fa98462",
"main.dart.js_138.part.js": "b39bb79a7618041e471556e532632339",
"main.dart.js_122.part.js": "34a5d4cb031fced347fb92bb8ac8b46e",
"main.dart.js_25.part.js": "f6d81077a6d7621c726057ffd040007c",
"main.dart.js_251.part.js": "c60511d86960a8a3c9101da1cbcaafd3",
"main.dart.js_206.part.js": "674f096398e29660362797cb898af01e",
"main.dart.js_249.part.js": "71fe3a8a33f453e1536bb778d9f320ac",
"main.dart.js_61.part.js": "45069c1375458505617acb02b1cc3817",
"main.dart.js_148.part.js": "67ce0ebf1ee3545e70d33a3a7dc9ec06",
"main.dart.js_14.part.js": "b0086d9b8a15aa6a64f05602b3bf794c",
"main.dart.js_64.part.js": "fe0f36b1235bc92e2850d2046b6200e9",
"main.dart.js_255.part.js": "387bd560dde8049752d1d270c173b5ed",
"main.dart.js_178.part.js": "f339623fa02ebb1ac975e4ef727c0457",
"main.dart.js_246.part.js": "b4349b809413316ca7eb7fa076731c45",
"main.dart.js_167.part.js": "77e0eef37976001964e7e03563625fe7",
"main.dart.js_116.part.js": "9af13c492ca38d822408243dcfa1f9a8",
"main.dart.js_134.part.js": "19c02ff142427dfdba3c5fe7ae265040",
"main.dart.js_274.part.js": "7b6abf9c05fe928ab5a6acfb2044c993",
"main.dart.js_72.part.js": "5d6584a1c60dac4a91c1e98cb837588f",
"main.dart.js_219.part.js": "f35c2e1071b5ec3aa7970fb2c20f9ef3",
"main.dart.js_125.part.js": "ced0ba1b39570ff3c21f4d5d27ff2758",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_207.part.js": "02dc0f1c7dd029dce557b280807abecc",
"main.dart.js_38.part.js": "0c6f6acad25844c323ff01488bb203d8",
"main.dart.js_318.part.js": "0d3aaa2b873e67e72b57125380ca0158",
"main.dart.js_316.part.js": "bbf26fb7261f3f5b6ae6753da62d9d9c",
"main.dart.js_205.part.js": "d2bda0c1e8f52ea2d3aa58ace949be36",
"main.dart.js_276.part.js": "21232842ba7ded287be33d94bc4251d8",
"main.dart.js_220.part.js": "9441a62e20e0a91cc94ac945fc8c1e7c",
"main.dart.js_6.part.js": "34b4334dcaff7b67d16dfe85a904e1b5",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"main.dart.js_169.part.js": "cf7782e1401bda73879e54ec46831ba6",
"main.dart.js_146.part.js": "523c64d20dbbf7b255a92188124a26ac",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_57.part.js": "bc12d774a95a20aa52e3a465498ac7d3",
"main.dart.js_264.part.js": "2c6a3c46e843181d011f0c841ae90a2b",
"main.dart.js_285.part.js": "ed94152a761cf4003ef72ec0e6eb4919",
"main.dart.js_314.part.js": "1aa0d59658c401d94d55360353a7433e",
"main.dart.js_307.part.js": "9d529058b95484582ee7cf55f7f07226",
"main.dart.js_85.part.js": "d222cc2d1a5d01ac14834a45d3b1bf29",
"main.dart.js_200.part.js": "c97cbbc0fa5b4b78f7f79a2368e7fb2e",
"main.dart.js_1.part.js": "9a185f0046643d8a524040f33a1a7bbe",
"main.dart.js_191.part.js": "f0a9916d80ad6c5c06be22eeaa7b2f2f",
"main.dart.js_39.part.js": "d0fad1f21a38e0d7ef39338779daddcf",
"main.dart.js_8.part.js": "01a44b41fe32cc444ed1527f30bade30",
"main.dart.js_139.part.js": "b1794a9fadbc846109aaf691f6b9d3a8",
"main.dart.js_140.part.js": "67c35627151f5b6d40db8aa70ddb58f5",
"main.dart.js_93.part.js": "b9e53cc78f8a22475b833c5876c48a4b",
"main.dart.js_275.part.js": "b268d9a408b545b65d94200a5052d7c2",
"main.dart.js_180.part.js": "492ccad68697c9910f1ffbbbc22f5f02",
"main.dart.js_179.part.js": "cac1816bf1724daacdb33e4e2715c1ff",
"main.dart.js_13.part.js": "c5366570697a61c7f177fc906d74bad4",
"main.dart.js_48.part.js": "db8f5202fa2da9ded41aa8ee56c0d1b5",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_310.part.js": "202c36ca3ace9b0a7d026cb7fc411195",
"main.dart.js_231.part.js": "24a75f7e8e7bb7309e30791769ae36e3",
"main.dart.js_300.part.js": "94e0b6981514b0ba2cdf4be618384f40",
"main.dart.js_68.part.js": "3fb5996be01f7d4a49628dff966d5025",
"main.dart.js_269.part.js": "8ebb3f19a456723c538e942b586261ce",
"main.dart.js_298.part.js": "c86fb8d5a7d1dd424fcf57e6d4cb509e",
"main.dart.js_174.part.js": "0008add441488a8a9a2a4a6da67b5f7a",
"main.dart.js_43.part.js": "c140de591f07e3b37d7db8441f5d239c",
"main.dart.js_59.part.js": "7d5b55df14d69260c34cfa32316dc06e",
"main.dart.js_28.part.js": "225b17ee6f32050047a6e2ef242e3882",
"main.dart.js_303.part.js": "03bf654c3090c0e752187ca06b7b17b1",
"main.dart.js_270.part.js": "5c9101a97ede89a194ef806a724608c6",
"main.dart.js_286.part.js": "889209a4eade6f3aab4d9c09270d0078",
"main.dart.js_312.part.js": "a764b4dc901bb08006084e5846a55f58",
"main.dart.js_35.part.js": "8f63102b6e4de502da9ae28c30fa95a7",
"main.dart.js_75.part.js": "2c34a00904b973e77ef4175e347ac27b",
"main.dart.js_11.part.js": "5e40e00cc9a1396d62738ca2da51a402",
"main.dart.js_123.part.js": "5a2ad8b58f250403086f23bff47b07da",
"main.dart.js_252.part.js": "b280ec447d20040aa6107b31c2ccac33",
"main.dart.js_37.part.js": "f729e41246cddb844e72c9d766b2a5ee",
"main.dart.js_235.part.js": "2704dc2f629b0e1024f62e23db058bcc",
"main.dart.js_168.part.js": "9eb4c8efe204a9c55c3f54cfcc1ba124",
"main.dart.js_112.part.js": "65a26f1f406a07ad6aaec15e511ad5f6",
"main.dart.js_313.part.js": "e45e3a7ee39ef443bb4c2dba40a0ea72",
"main.dart.js_26.part.js": "849e7e1d630d14a2bd100af6b5abaaec",
"main.dart.js_30.part.js": "4ca43a112d78297fcc9b8be224e5a00a",
"main.dart.js_242.part.js": "d1485b07f27a736771ff0790494b3dad",
"main.dart.js_86.part.js": "ee15b904359356b93068206d30e43c54",
"main.dart.js_293.part.js": "230b97f6139349559504e88ad2892892",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_126.part.js": "89248744df6d115b999f089cea437061",
"main.dart.js_3.part.js": "ad2cfe7c34382b42da0fc91646fb230a",
"main.dart.js_80.part.js": "ed303df99532a4d2ab0140d6b5454fb6",
"main.dart.js_113.part.js": "3c990ecec327c910c4b4c088b6967440",
"main.dart.js_241.part.js": "4944aece9f6ea35bedbe700cbb35cb40",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_188.part.js": "fd95812d6c498972477134c8ca41268f",
"main.dart.js_32.part.js": "2b08f67bef9f5424f5d80e8db579ae5e",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_4.part.js": "06cbd6bf95e0af8c58f6cbd73dd37f59",
"main.dart.js_53.part.js": "48865fc5338b0e890dd5a9939cea6541",
"main.dart.js_78.part.js": "1f4d9c75b69eb4936acb5d8eb3ef347e",
"main.dart.js_223.part.js": "60e4cbc800819d6474b9bc6fcfcb9c42",
"main.dart.js_15.part.js": "0d9062c03cdd3a028db5a1f6dfde0fd0",
"main.dart.js_105.part.js": "445314d65e343f69257af25df2e022b8",
"main.dart.js_311.part.js": "f9d8f558495d921be06a385427b046ac",
"main.dart.js_217.part.js": "a4ec0f3419e8481d2a2f7b9a5cca993f",
"main.dart.js_107.part.js": "8af64b6bfe4b3434558a970897ba2ecb",
"main.dart.js_248.part.js": "54a2192b28e0d5b73570a5193a530914",
"main.dart.js_45.part.js": "41574d045b1551cf5a84c513a9839097",
"main.dart.js_160.part.js": "bf1981b2691630b65d2cacdf4e51b402",
"main.dart.js_96.part.js": "79ebfb6e679ddbb11f576068cb553ec6",
"main.dart.js_147.part.js": "b54348ae3b123adc5d7ebbc0b6c07523",
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
"assets/fonts/MaterialIcons-Regular.otf": "1b72a4dc7cbe53b2e1064c3a937b5730",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "f082dab5050cdf2973229cfe0b6c3d7d",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/uk.json": "1794b65021c354763a0a830b83ee3fb1",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/cs.json": "0b6c1e4404da068a9ced90478998bfc4",
"assets/NOTICES": "4bd2930db146c4653bc584bd9d65b728",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js_145.part.js": "50a2aa7bdc0769bfd4bad97c8827a105",
"main.dart.js_210.part.js": "1e1fcb4285c4f55b98c6fc490960d6ec",
"main.dart.js_141.part.js": "7f36fc933a59e1c7519dc602ad73ac74",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_172.part.js": "c2e95e28bb037ceba0a314b2f6357827",
"main.dart.js_84.part.js": "b8080dc0a4aa46398994cbfb78d31806",
"main.dart.js_82.part.js": "49945c8da80c089ed9f99b90f3d1c502",
"main.dart.js_31.part.js": "f5529676c3968b507325886f6dd0fea9",
"main.dart.js_115.part.js": "34bf78ec74d4a137ebb7f844ae9d6148",
"main.dart.js_189.part.js": "2da7d4e044324f631607461eed0891ae",
"main.dart.js_268.part.js": "9699bc3458faa981d45bccd102a9cdb6",
"main.dart.js_301.part.js": "cfc3484f65e0025b14f66bf89fc745c9",
"main.dart.js_297.part.js": "8ecfbdba82883175a8c6206560e8b9de",
"main.dart.js_192.part.js": "4b615d92be8d9c2bc3aedd66d22ed200",
"main.dart.js_198.part.js": "230ae722ee028c31a75e79f448409745",
"main.dart.js_215.part.js": "1543633d2b07cf716d53641fac5f663c",
"main.dart.js_193.part.js": "f1f11f4abf34b4df76112ee1f76d8a6d",
"main.dart.js_195.part.js": "788b1574364ea8c12dbbad8b88d57592",
"main.dart.js_120.part.js": "772952863c20ab0968e209c39472ab91",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_106.part.js": "220b9fcde1bd0f3fae041b36123f0837",
"main.dart.js_152.part.js": "1279eece1744a2a4b453df5f43d71215",
"main.dart.js_302.part.js": "550c3a324eb328be5a3ab35a16c55480",
"main.dart.js_181.part.js": "13ef0f83fd78661b9558f10785fd86ae",
"main.dart.js_51.part.js": "bad444eb45502d08cbf2f138c1fafac8",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_237.part.js": "089acecf7d2840a9533255e6e41ab33c",
"main.dart.js_173.part.js": "65ad75d10e77fa909260a165427beaa6",
"main.dart.js_170.part.js": "53a0a0072ea4c270ec61e33ef5f838a0",
"main.dart.js_282.part.js": "a76ae800f3fa0daec3d61c74138e09c4",
"main.dart.js_34.part.js": "1acf9e222215a81ff7eb4e87caa33ab9",
"main.dart.js_24.part.js": "8afe2254b9ba54addf7db29980453291",
"main.dart.js_18.part.js": "2ee5109b5ad9b202de6a493cd394400b",
"main.dart.js_2.part.js": "af4044c85a56559595574a0343381e6f",
"main.dart.js_69.part.js": "ca45e63ffce59c85dc44049be430375e",
"main.dart.js_70.part.js": "35c73d94c1bcca93bb6a7d978ce942b6",
"main.dart.js_88.part.js": "5bb0c1d52fb9129a04618b41973ed77e",
"main.dart.js_27.part.js": "a28993f4a51167fe000d0ebc961ec89b",
"main.dart.js_238.part.js": "6a59048816af80b543d41ff25bd201a5",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "e13d999d042d5726da6d292c880ded2f",
"main.dart.js_244.part.js": "94244acd13cf85c751910d465fa0fdaf",
"main.dart.js_137.part.js": "c33a3c4b932164aa18ec6982bfbdd163",
"main.dart.js_99.part.js": "0d1e8f966f0c54791b27640a1c19d9d0",
"main.dart.js_44.part.js": "a0cccd2b5988f7305553376d51669b3c",
"main.dart.js_114.part.js": "48417f5d1eb609539b648606b2d1f284",
"main.dart.js_10.part.js": "edbca880b6755dc154f84cd41c282f1a",
"main.dart.js_56.part.js": "b42bfb3157961c2ecad8647a3701fdbd",
"main.dart.js_183.part.js": "271bdde627e3c410fcf1dbc0bc89bbbe",
"main.dart.js_129.part.js": "b202ab2abaf9a5cdc95d7fb3613cf5c1",
"main.dart.js_5.part.js": "d75ea9fa17f6d0d5eb2d216a4db2d399",
"main.dart.js_76.part.js": "be0faaa7216006d5ff65adcf3bfefad4",
"main.dart.js_265.part.js": "6caac09079f006b5bb792aeb7e92996e",
"main.dart.js_7.part.js": "066ee4398a635c0c02f2423e6b8b1a60",
"main.dart.js_16.part.js": "fe4c5e5d58edc70a8bcceebe1566cb8c",
"main.dart.js_294.part.js": "52397744e63d519df8ad71d76810201c",
"main.dart.js_236.part.js": "8d01fea2df8c968b371fb170907c27df",
"main.dart.js_259.part.js": "843e21717d20030dd713c7c9ecf52e77",
"main.dart.js_90.part.js": "7c4d48211f562248d37ddba6764758f3",
"main.dart.js_260.part.js": "133eac59ebdbedd039f4eebf014331ac",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_317.part.js": "69c0c30f4cf831f99c29af20eb5a5f84",
"version.json": "ce222a816317ab370de74518f244cfd5",
"main.dart.js_153.part.js": "72ca6e6588378a9bf17f0c7bd3b76509",
"flutter_bootstrap.js": "56249a4a521d9af615b13f106e4d6a78",
"main.dart.js_176.part.js": "574b7a9432d73e892118807c957717c9",
"main.dart.js_245.part.js": "70bd73a1a85c0911ca459e6ac715dd8d",
"main.dart.js_306.part.js": "22d2a9282d9272d79c84216c135f0ca1",
"main.dart.js_209.part.js": "29c1ba4237deb1991a1808fbbe2c535b",
"main.dart.js_224.part.js": "16663a6d1c954d069833d1255e36c93e",
"main.dart.js_150.part.js": "b21d9fa6749bca646505a3671f67cc62",
"main.dart.js_33.part.js": "680c7279ba2370c15044231e34e8611d",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_9.part.js": "c8fd9f78ced2964ebbbbcd1f34ae4a04",
"main.dart.js_155.part.js": "8a42c82bc19d6a99fe5dd0b2f9424a73",
"main.dart.js_309.part.js": "81e26ae2335d023a3c4fcd8da8d23f5c",
"main.dart.js_239.part.js": "0044f673d68698ea4e95b928491b8990",
"main.dart.js_284.part.js": "f22a5715b0bd2296e9148bf6398c49b6",
"main.dart.js_214.part.js": "a5a470a2bf77a58a62496d59b811cb27",
"main.dart.js_42.part.js": "f770673c6c9de315edcb19970dcb27d1",
"main.dart.js_111.part.js": "625d1d37d4d380424f56a0107952bb68",
"main.dart.js_218.part.js": "0a84ffb6d23ded2954c559f938f1fc25",
"main.dart.js_127.part.js": "2eaa5197bdb8d941488a7aa4b3f95ef9",
"main.dart.js_291.part.js": "015f5435e8eb0b92d024529dd5ec6ff9",
"main.dart.js_98.part.js": "9820675f0cf92c402d8a0b89f43e25d5",
"main.dart.js_258.part.js": "52f1b2ed38bfd04efb39e7bdd647f18f",
"main.dart.js_163.part.js": "eaabf2e4c773fee57fed42dd2f1b41e3",
"main.dart.js_287.part.js": "40471ce71f1b8b69f6db401b79cf9754",
"main.dart.js_161.part.js": "4c744a180346167b13a727a8d6cb6817",
"main.dart.js_49.part.js": "4480e0b639d2b23286a0a6c74739fe5d",
"main.dart.js_22.part.js": "b85cc30e16f4ddcb0393fb8da0ed241c",
"main.dart.js_308.part.js": "27bdc3ed9bbae5289725da078404a89f",
"main.dart.js_233.part.js": "aec74af1643281e51de60ba624957318",
"main.dart.js_212.part.js": "9308a5df6f9e35065ae4fe2339e7855c",
"main.dart.js_136.part.js": "edce77c8eed1edc2a738d4fe68768fe4",
"main.dart.js_131.part.js": "4916d382b3721eedd4d2250f78580344",
"main.dart.js_279.part.js": "2c1b92277ddc7f592d587e1a0e109df6",
"main.dart.js_12.part.js": "dd08a62dac80e4e9ad025dff0a6ad3ec",
"main.dart.js_62.part.js": "a6dbd85c085e948f71d8e29c51c3c74a",
"main.dart.js_91.part.js": "5d2a80efce63a674db20c3b1d7e3023c",
"main.dart.js_232.part.js": "7a820a2d05a79f23c665b53a38a2a986",
"main.dart.js_273.part.js": "958ee1f13117c64a4e91a8bfb6df144a",
"main.dart.js_104.part.js": "fbbde95f332c60361ac8c5ce7276e5ee",
"main.dart.js_71.part.js": "ede37ea3da9b8b5764eb319adad10a0d",
"main.dart.js_296.part.js": "2a9ea58ef2135cd6d59db8b0155c146a",
"main.dart.js_50.part.js": "ae7b096df294fd6c8c4da864effb675a",
"main.dart.js_97.part.js": "48b3d4426f12ffa73136c4e774c59725",
"main.dart.js_278.part.js": "46581dbe759fc30632e72022dc083307",
"main.dart.js_305.part.js": "aaf65c2a0770f80e19c70bce4fbc2150",
"main.dart.js_89.part.js": "026a8496217c65f75e2755b4ba3d831e",
"main.dart.js_117.part.js": "0dcc28c63a6d5338f35c2dab19e8327b",
"main.dart.js_292.part.js": "9e74fb78b1757b08777b9418607571c0",
"main.dart.js_108.part.js": "d12413e55faa2f9c7d7be9c431cc2268",
"main.dart.js_295.part.js": "eab4265c279d2b5f283efb8030710a6d",
"main.dart.js_221.part.js": "53449be1f2953be02718f56e81a69656",
"main.dart.js_47.part.js": "07e04b95eb0451ea10d77e2e25fc3b58",
"main.dart.js_142.part.js": "f7e4132ddfecdadecde26b2ba0859a43",
"main.dart.js_288.part.js": "56ebd1f1479570e1f2b8e23288f0bc68",
"main.dart.js_55.part.js": "0943e333a2d4859c955a220864ae85e2",
"main.dart.js": "aa4f8994e87fdfd2b632c05477e7d868",
"main.dart.js_280.part.js": "be15decdd3feb76236b1e7e2af0dc24d",
"main.dart.js_202.part.js": "da482719ab710d7479c97c781999125f",
"main.dart.js_266.part.js": "85d7acbb11f0ea04281edc7cc3ed530a",
"main.dart.js_261.part.js": "40b68ce4a8665b03215a1de841e2acae",
"main.dart.js_130.part.js": "2a74da9acc6ed708d30340e59e594446",
"main.dart.js_41.part.js": "8df0a47fbb5f12cee1f5c44b99fca47c",
"main.dart.js_29.part.js": "9585f40d29e8cdee8a8f52955806cd4b",
"main.dart.js_254.part.js": "9389206714c8394b78df83df73f974cd",
"main.dart.js_58.part.js": "b3112a3c23d0450a0831263d12d1cef4",
"main.dart.js_73.part.js": "802d9fc26dbd09a16bb08a1f7b943347",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_186.part.js": "1f54064791dcaab824d11886d176d0d1",
"main.dart.js_271.part.js": "a533b96ea7a2e655826e08499c017c02",
"main.dart.js_151.part.js": "bdb48a47b1d375255b88b8f6dc16f91a",
"main.dart.js_74.part.js": "0e169ce8a00b05a6d8f2e005b87ac443",
"main.dart.js_165.part.js": "6359c6e9a7011dc88c5e2dc6c7f6063d",
"main.dart.js_263.part.js": "9b3de7d361b0a8f92f9eb708d2a74bc2",
"main.dart.js_100.part.js": "b90bb81202aae7a0f0c7e805eeeba29d",
"main.dart.js_101.part.js": "d8cb46e45d2cb99b993e749985fba297",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_281.part.js": "60c9adb386ec0891a9cc47ab791fb101",
"main.dart.js_185.part.js": "49c8523157e0d3a4f724b80d1e0a902a",
"main.dart.js_250.part.js": "89d1bafd332818090a18946efb1d071d",
"main.dart.js_102.part.js": "bdc4102d26ef1ced6e99f7fa44fb04ae",
"main.dart.js_216.part.js": "fc2d865344483c4656140c3940b03d88",
"main.dart.js_119.part.js": "d3ee5579af2ced7f2705ac0fef476716",
"main.dart.js_225.part.js": "e5b9127295d06dd1a39e6b0686a95cad",
"main.dart.js_171.part.js": "8b47452c95b579ef1fc1278719dbfc67",
"main.dart.js_162.part.js": "339fc3fec4614b848e969b5d0e750ec7",
"main.dart.js_77.part.js": "afa52d3a1e135679887fa79f41796c88"};
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
