'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_34.part.js": "3a85c353399f2205a56bcc896abe2bd1",
"main.dart.js_30.part.js": "0de212b5feea4226c4fcf5cf5f391bd0",
"main.dart.js_90.part.js": "047d207507917be4c5db66cb089da71b",
"main.dart.js_201.part.js": "192ceea557989fc547e8cebf0eacdd6a",
"main.dart.js_289.part.js": "2c3f35c7ad788c6a11ee934041f6d51d",
"main.dart.js_127.part.js": "74c0feb1e86e34c290cd031c16188c56",
"main.dart.js_302.part.js": "d58e45b45b91640f1ac6c96580265f42",
"main.dart.js_74.part.js": "db28fd36470dbee1d161c539c97c8047",
"main.dart.js_66.part.js": "30ae1db2e74563719155f678039d2020",
"main.dart.js_51.part.js": "2a0f0ebc4eb2f1f3b19de97e464f00f6",
"main.dart.js_22.part.js": "931aef1e2b95d24a76f3242f3a706e60",
"main.dart.js_108.part.js": "1cd9187b660a987f8f58b4bcb23eaac4",
"main.dart.js_281.part.js": "a647f094e29af1f37d7c4f991003d732",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"main.dart.js_47.part.js": "4ff62cc4b473ca51931ff8369d3c9498",
"main.dart.js_45.part.js": "752dfafcfc09f5671468b5c1a1d7b092",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_104.part.js": "ad291e4fc3d1a7dede91fb73847f199f",
"main.dart.js_33.part.js": "7a9250eacc02639710d9f1c2689f72d1",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_125.part.js": "af09bcd8bc9d571de879961e24c18240",
"main.dart.js_160.part.js": "0f3202237af3c018614942b10b508721",
"main.dart.js_143.part.js": "06d66442a6b5c2c1867d60c7b38c370f",
"main.dart.js_164.part.js": "efe00bae3a459c0da3a1d8f76e5c5657",
"main.dart.js_295.part.js": "8edd6431510ce4f4ae764da129c17803",
"main.dart.js_114.part.js": "031f721665f3517072f91413b4eb37b0",
"main.dart.js_138.part.js": "b00be11a38a4ca758976fffc4c1a25cb",
"main.dart.js_192.part.js": "cc3ac2199980e7cd4498bc129e3017df",
"main.dart.js_168.part.js": "d4121e677f5df16ea41c2010303fa7ba",
"main.dart.js_82.part.js": "5a1cd9b03b0a43c20ecdae38f0ff70a9",
"main.dart.js_243.part.js": "98f4b1ffe336c8797b8f3df333a8988a",
"main.dart.js_175.part.js": "e890a5e15ae636bf31eca881968c7bf1",
"main.dart.js_287.part.js": "924581ba3e45b7b287f1379d33209a46",
"main.dart.js_162.part.js": "0501124cbd40e9127b6fb523a7f30e65",
"main.dart.js_194.part.js": "0af7a868d8e15c319f4de2eb374cf0e5",
"main.dart.js_218.part.js": "f3d50b9bcded33ebfec48da3a701bf7c",
"main.dart.js_278.part.js": "868b04e08336971372760f5481fe9549",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_130.part.js": "6d58ae6aa24e381477e8ab799253b3ff",
"main.dart.js_288.part.js": "ddd0d915d45d4995130fbed347a6ca2a",
"main.dart.js_53.part.js": "0668fe47803268857a7f043d4fbcbafa",
"main.dart.js_217.part.js": "7843d158ff4413da3a61aa8946f42672",
"main.dart.js_231.part.js": "ded296359864a16c1a947c9033498b40",
"main.dart.js_55.part.js": "5287dbfca7beb8e3582e23a37e6dfe89",
"main.dart.js_32.part.js": "cc05d063e6196b6be4134cf19e501db2",
"main.dart.js_49.part.js": "583f5821bd9f0d5ae7a3a58497600abb",
"main.dart.js_129.part.js": "54873b3732fdfba53d36504974bf839a",
"main.dart.js_298.part.js": "c5c668e8a95d640b96364459312c66b3",
"main.dart.js_159.part.js": "566acc86595afe57d107bde706dd9891",
"main.dart.js_77.part.js": "fa07245c0e41f7d053f6e8222a8acf84",
"main.dart.js_190.part.js": "e24ea12ccdfcdd264f73f8129b8825b0",
"main.dart.js_259.part.js": "eaeedfb376b166509e6d293f0036410f",
"main.dart.js_262.part.js": "e23f476c084b8811afdbb6c0f76a7780",
"main.dart.js_31.part.js": "bb32a96bdb24baa63524375d6d3f7ebc",
"main.dart.js_209.part.js": "e6888fb89f086dca029b8b35d2a9b544",
"main.dart.js_141.part.js": "396b082aef5a3c7014b856617937518c",
"main.dart.js_187.part.js": "1a4e516220a16e0c6b89a8d476e92464",
"main.dart.js_100.part.js": "acd819ac5058305582879865f937ae16",
"main.dart.js_80.part.js": "c6da10274f83304e6e4542933ab9629b",
"main.dart.js_252.part.js": "0d68e6617ac5112fb6d5dd8ddba9959b",
"main.dart.js_35.part.js": "bdac5741358002862d99d2b40ddf6bff",
"main.dart.js_177.part.js": "abcb0c856a3067a278d13411d1eec52a",
"main.dart.js_7.part.js": "e694d5687867f10250ef840528ca9842",
"main.dart.js_184.part.js": "17b1b27a27e812be90bbd25534e68adb",
"main.dart.js_223.part.js": "725e27ecb56989d53719a7c95b9934d0",
"main.dart.js_103.part.js": "052b7543fa2ecd1443116ff8f67817ad",
"main.dart.js_227.part.js": "b799cdb857b4d46f339814010543f759",
"main.dart.js_87.part.js": "61bb4c9f417d58b1d636e5ea978459f2",
"main.dart.js_178.part.js": "1308e96824c786feabb8c56e736e0f8b",
"main.dart.js_70.part.js": "614d0f028fb08622a574b240f1ec21e7",
"main.dart.js_3.part.js": "0613517ba748bf020d5f4c936d592242",
"main.dart.js_172.part.js": "76feb0ff0f6861162821a9178291574a",
"main.dart.js_46.part.js": "57c7ca0609f443079f981e072be617d8",
"main.dart.js_126.part.js": "c634448e5f33d51641d4c0b727eaa010",
"main.dart.js_13.part.js": "3315e3b1157f9ca28b9ac59b7fc20359",
"main.dart.js_38.part.js": "9fb991f9f0dd8badc3349181d0b31378",
"main.dart.js_205.part.js": "1c3f02efb054df338efed4b3fed05338",
"main.dart.js_254.part.js": "8b9da284ce22453e321d22d7092b6677",
"main.dart.js_270.part.js": "63b57ba00b08a702a27b762dbcbfba12",
"main.dart.js_299.part.js": "f4726bcbeb6fa98e7a6387668f40e30e",
"main.dart.js_4.part.js": "0cf7a1eacd6d99dddbb001cf196f7dc4",
"main.dart.js_92.part.js": "f35553e2f31905b3c5d50daaaa8ed9db",
"main.dart.js_106.part.js": "099d4d07cb0c750547eff4acdeb384fc",
"main.dart.js_279.part.js": "7eaaa2d3756ffe21563624bbbb344301",
"main.dart.js_91.part.js": "6ef28348b32bafaad25ac24866da0ff6",
"main.dart.js_16.part.js": "e4da9327311c5db347f22c37bd7e8616",
"main.dart.js_199.part.js": "d45340890cb3d4b0a20da89f5ff3ed53",
"main.dart.js_79.part.js": "199d2017712c64248376d29b4f34b54b",
"main.dart.js_183.part.js": "b5e2ee1860f019d706c11ffc18415dec",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_185.part.js": "ad21427ecd36d6f41997d46713851ad6",
"main.dart.js_248.part.js": "0eedec764acec7129ce775fa29580f17",
"main.dart.js_286.part.js": "5952121204e36dd8b97d1951dea5390f",
"main.dart.js_40.part.js": "3f56cf25ad95881b9ec120c5cbcf6b96",
"main.dart.js_263.part.js": "94774fb67b9f8c8388d71553ce684818",
"main.dart.js_56.part.js": "7dcf8843689f99b426be9d0a3f4170f3",
"main.dart.js_15.part.js": "0ea7792c3bc8a4a322bdf20e4ab1892d",
"main.dart.js_107.part.js": "c8d29e8c2862c3eaa04880fdf48c2a0f",
"main.dart.js_25.part.js": "ed41a048239ad4fd7e406b882ee17ae5",
"main.dart.js_249.part.js": "3125808ceed86f3a9717bbae017e4f53",
"main.dart.js_202.part.js": "129d87f5fd169e7f6a53abc82f81f8ef",
"main.dart.js": "fd030645c87e6fa19e42d6ead0e4130d",
"main.dart.js_253.part.js": "e344104ce8b11be4f0af78a15cc6db26",
"main.dart.js_296.part.js": "7fef4bbbb2bdcc281ec7a75b4628a924",
"main.dart.js_60.part.js": "5d94c85f919cec55714435028c1487c2",
"main.dart.js_258.part.js": "85b50c4e63ad9d6006b0e68e10900968",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_85.part.js": "175ef7f305875da239cbac4431c56034",
"main.dart.js_271.part.js": "8b83d399f412ef6be696683ace8b8ced",
"main.dart.js_10.part.js": "0ed10a61413430ea0e473b4c9876d1b2",
"main.dart.js_124.part.js": "66151a324d4cb8b6e9b68cd9eac5d2ce",
"main.dart.js_11.part.js": "8ff7af319333e21567d5b63c1001b628",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_260.part.js": "53d01b748398116d2d24f44ea507a8d5",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_101.part.js": "5c3ed61a72a60548f87c09df0049ef18",
"main.dart.js_96.part.js": "59844e7eb869130efd4149cbb48d5c01",
"main.dart.js_118.part.js": "c7f3a7a624cb2ee41b849224c9dcc132",
"main.dart.js_94.part.js": "c9ecbd23c1723366c3fb47cf12facb19",
"main.dart.js_140.part.js": "e04093c2031741c2e59681afcedcbb7d",
"main.dart.js_105.part.js": "95c7929150ab6c6911bb859fe5e9e6fb",
"main.dart.js_216.part.js": "db62cdade3ac09e3171438dfeac840bc",
"main.dart.js_1.part.js": "345eaefd197bf3cdf47af6d0e934fdb4",
"main.dart.js_133.part.js": "34fce55380d309e19f2b3f29892fab68",
"main.dart.js_195.part.js": "f2aa4ca11b1437e276fb16e0658dbd62",
"main.dart.js_83.part.js": "f5fa162e945b0aa21bb4594f88848fcd",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_276.part.js": "10c0005873a54bce96a1c9d7064299e0",
"main.dart.js_264.part.js": "977513aa300b08ccdfa85d4d7c68ab54",
"main.dart.js_67.part.js": "8384555ae0a0e30e572eb591fadde9a3",
"main.dart.js_109.part.js": "473c4d47454c1563fc0c57e287f01e1e",
"main.dart.js_41.part.js": "5df986884fb6c04eb9d7016ddba3092f",
"main.dart.js_122.part.js": "9ba6c2ef0fa0775dfa7ecb49e258434e",
"main.dart.js_12.part.js": "5703125dff1dae8de647199fa94b4444",
"main.dart.js_76.part.js": "ad73e515c3ec19b0560bbfac12308017",
"main.dart.js_222.part.js": "91f151e1f2e309e67cc66e335866e3ca",
"main.dart.js_239.part.js": "1fbc049cc776c0d1aff40d3bdd7dbe7f",
"main.dart.js_251.part.js": "1b55735ad7f99b94f6553fab18c56054",
"main.dart.js_158.part.js": "67cd2071ca2bc9fd0243560019dc20f9",
"main.dart.js_72.part.js": "649c0b34637ac652871a1b41214768b5",
"main.dart.js_68.part.js": "3d4051e7cfc7881acfc55b87bffa5d4d",
"main.dart.js_291.part.js": "afd8381405b9ff714432b09c6a03f215",
"main.dart.js_220.part.js": "127ea11a18dccba0bfb0c84a083a86f8",
"main.dart.js_62.part.js": "05ab014093f1d52f52bd62c2681b8232",
"main.dart.js_180.part.js": "726f57b1922d7f31f6cdc2b671952a1d",
"main.dart.js_240.part.js": "efc102de6f6b0fcad5c4f5ac3616958e",
"index.html": "bbde26569d18590851503db8150eba4e",
"/": "bbde26569d18590851503db8150eba4e",
"main.dart.js_266.part.js": "a1c7f8fd757379794e68c901bbf5ef2e",
"main.dart.js_297.part.js": "6dbbaac622868aad2762a5bfe6f88a21",
"main.dart.js_134.part.js": "69178b312f8c18e032d0111bd31a312b",
"main.dart.js_294.part.js": "71cbed3be5751c6dc1f108a65828015b",
"main.dart.js_147.part.js": "96ce0957bc7d8f75e5035904d37301ca",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"assets/NOTICES": "3c24853244fa9ceb9b71258d8c2c76d7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/cs.json": "b79b75baf95c2e1a914e1122bca5f15c",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "80cf6373518adb09402bb64e014c2657",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/fonts/MaterialIcons-Regular.otf": "fc1d386d434115c97b99f1c7078ec9eb",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"main.dart.js_43.part.js": "f436cbf2c04be982abc060b8b2859292",
"main.dart.js_169.part.js": "80b6fe9abbb53fb867baa2e08f1bb51c",
"main.dart.js_29.part.js": "28b2ad3bccc9f5e20508f7833477ba28",
"main.dart.js_267.part.js": "3ccf64869f6516f29688d16ac1522823",
"main.dart.js_200.part.js": "1e68450d9602a0e8a64c8026a6794ce2",
"main.dart.js_197.part.js": "7604c9da287d6d764fc1adbec65f05f1",
"main.dart.js_280.part.js": "793435375d3876f49ef2147e5f7f9b11",
"main.dart.js_97.part.js": "4012930fd7240cafbfd8c9199500f6b4",
"main.dart.js_111.part.js": "b306862e8806219eb86a6503224b5b2a",
"main.dart.js_204.part.js": "b3ccc092f035ac359cd20c77ee24ac46",
"main.dart.js_232.part.js": "0b4f744c4de116b2897ee564cd0719e6",
"main.dart.js_230.part.js": "049c6804171f4c04a1355add7929878d",
"main.dart.js_245.part.js": "9abd5902b23c9ddcf703f7b608f154d7",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_283.part.js": "ebb45c71c75264462cdd5b3b74d99ec3",
"main.dart.js_148.part.js": "c759277dc20068eeea6a7543782c5d81",
"main.dart.js_48.part.js": "ada30205918991ec6f2ef6b5d67be674",
"main.dart.js_161.part.js": "994af8cd4cd2eb3a2db8b606ac36b174",
"main.dart.js_229.part.js": "a9066c3eaa2f83551207efd1513e398d",
"main.dart.js_28.part.js": "a6e3158586cfdc47d06d7d6628080819",
"main.dart.js_71.part.js": "a84b2007ea012f16b4b3b62fa4efa5c4",
"main.dart.js_119.part.js": "cc7847e460ba4f9b3704100fb8a3e0dc",
"main.dart.js_234.part.js": "af5f346cf6896b8e0289241bcf90adff",
"main.dart.js_42.part.js": "86fe1ca82bd081bbfd720eeb8eb750ed",
"main.dart.js_166.part.js": "900f7ee66e4919b30ceb342d08c015f1",
"main.dart.js_191.part.js": "2cce00a9ab5b572e610456b75087f196",
"main.dart.js_285.part.js": "1b0651c952b376c523f0d01fa1aa0479",
"main.dart.js_246.part.js": "6b6d9bf87e7c2533aa23c31da35e5849",
"main.dart.js_59.part.js": "44d133ee527242256c723ab761daabcd",
"main.dart.js_277.part.js": "b6e818f75d2f0cca48e0fa2732fb663c",
"main.dart.js_284.part.js": "e798f90ba9b84a8af867a4928e10ef9c",
"main.dart.js_142.part.js": "dcfabe861a289d39a88626da290eb811",
"main.dart.js_102.part.js": "1990edf1915eef5d1c03be63c08b3600",
"main.dart.js_5.part.js": "f55c186fc3e055519d33876dfd9df801",
"main.dart.js_173.part.js": "9afab7e4cc73ce64b022f5c25a1773ca",
"main.dart.js_128.part.js": "c17801e94c5ddffd81b579bc0fc638c4",
"main.dart.js_244.part.js": "5a9250633c98ad1c39b84c280f8abaca",
"main.dart.js_293.part.js": "e826ba55112601f76fc7186ea838f6d7",
"main.dart.js_300.part.js": "b522f0031559c93e08884925f144ecd7",
"main.dart.js_233.part.js": "a48cda225c79206112d96b9a858e2a18",
"main.dart.js_261.part.js": "b0822bdb29c1c16ea54540f608f6a51d",
"main.dart.js_236.part.js": "109894359a1542fc93c1a38648378301",
"main.dart.js_274.part.js": "4d02e277fb1fc96170ee129a249e3bf9",
"main.dart.js_157.part.js": "f1899d05903af34bc37370a246d3c548",
"main.dart.js_135.part.js": "4aae475314de504f514d49fb98bc3eae",
"main.dart.js_6.part.js": "33d2c7e9c3e17ac27bc26491a5c10ed8",
"main.dart.js_37.part.js": "e411e216306d8cdd786752afcc808a17",
"main.dart.js_84.part.js": "f2c903e3224cc6f086e52dfb955be0a0",
"main.dart.js_208.part.js": "1d95b4a64c03fcbd567945a9bf86a1f9",
"main.dart.js_120.part.js": "fc05bdccb7f2bc113ea91001506beb9a",
"main.dart.js_152.part.js": "b28f18726f6dbb7b259f6b5932a0bfd4",
"main.dart.js_255.part.js": "719c22c0f411f05c5b1e156ca593c4ef",
"main.dart.js_150.part.js": "1513ba606d77fde329b3bde0b886cdd7",
"main.dart.js_165.part.js": "870c6df611c236e6528e1564d2e09a67",
"main.dart.js_171.part.js": "1c9ea45bb636d177018db84f64dac5f5",
"flutter_bootstrap.js": "aa77feeb47b9dbe870175224072908a9",
"main.dart.js_146.part.js": "2e572a1ceec0ec6bb8ac9f38993bd179",
"main.dart.js_210.part.js": "397b647179c4e6d0ffa9e86c202629f3",
"main.dart.js_81.part.js": "760ca1b6ccfc5a9821118bf808bb8ea6",
"main.dart.js_174.part.js": "4d059f4bfd68806efcc1bb28b411ebcd",
"main.dart.js_116.part.js": "2c8198be5d3af6fb6c6671d22853a293",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_27.part.js": "d463c941126e6952657e4727a3e29cca",
"main.dart.js_154.part.js": "4c2e7b2ad397d1ede66a70c493d1cc20",
"main.dart.js_268.part.js": "c5e0bc8ae61d386431b6e044c263a68f",
"main.dart.js_75.part.js": "f0337538d084533d95c5388a2bb9f46d",
"main.dart.js_149.part.js": "8d67537c6a6de7b710d9fcf5e9cd24d3",
"main.dart.js_221.part.js": "0471fa099458d69c0d216fba5b3c23b9",
"main.dart.js_26.part.js": "3d2e07ee347355e034c332baa7720805",
"main.dart.js_167.part.js": "86efccf8a5af653448f6b51cc1ad1e0a",
"main.dart.js_36.part.js": "035ea1c7660bf5be27a830758eed2657",
"main.dart.js_224.part.js": "7ec8db64b302346086b605099a084609",
"main.dart.js_301.part.js": "aaf6447226a5f118e42f4c2f0dd12730",
"main.dart.js_24.part.js": "f6c8f290234a370e0723371705b85ddd",
"main.dart.js_272.part.js": "0ce62c602323af146e7b497b520636b7",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_155.part.js": "28c785073f8886a3940b93bd93a6d4e3",
"main.dart.js_57.part.js": "2293c36d2b58da7df05e0592c67c161a",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_18.part.js": "f70910d6e8020f4c1e1bae585cf3bfc1",
"main.dart.js_292.part.js": "e8c098f24f2a028b2ba653f4d9f526e8",
"version.json": "c11cac1a296e5f713dd243c16f79f454",
"main.dart.js_8.part.js": "0fc9398e776a57244b4b53923ee26b02",
"main.dart.js_9.part.js": "3ea03e61cb689f867ba043992cb5f6a1",
"main.dart.js_69.part.js": "b7c338bb1a3380afbf1256a77f9b52bf",
"main.dart.js_139.part.js": "c3441ebf5ea39f75554e9f0ea27b83d9",
"main.dart.js_176.part.js": "5f115337b23a4710227fb3055908c27f",
"main.dart.js_136.part.js": "8a08ddcdb50b42dd2628d10723e1dfe9",
"main.dart.js_256.part.js": "7936dd1d0583907feb124debeb072ab6",
"main.dart.js_237.part.js": "1e7fa61df85376535faf0aeb848c3631",
"main.dart.js_54.part.js": "e0b172af03b1930847609d4d9900ddb8",
"main.dart.js_93.part.js": "2d81f208e4ce2ff3d2e7fc7991825ca5",
"main.dart.js_203.part.js": "e65848528c1730032a8f8ff89aaa5c28",
"main.dart.js_179.part.js": "58ab80f2a7d848a4731800459ad49516",
"main.dart.js_14.part.js": "409b8e242c48a0ecd34c9e5218be1e6c",
"main.dart.js_206.part.js": "8d44da333b7edbca5a4854eb5bcb0af8",
"main.dart.js_113.part.js": "422c2b929048f0f4cb8d390cb16c0fe7",
"main.dart.js_235.part.js": "afb9a222645fa4a18a8f6f162cfb26c8",
"main.dart.js_273.part.js": "20c8110ae02c089f279386095ceac558",
"main.dart.js_39.part.js": "af5ada81bbe1d7d6bf618ebaaf15a3aa",
"main.dart.js_250.part.js": "65ec42657a37349f55f3909b7402dff8"};
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
