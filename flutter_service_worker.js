'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "6eb3c650fdab65bc2437e75cac8966f9",
"main.dart.js_117.part.js": "26416e693ee2e2876a28e5c0e71d60f4",
"main.dart.js_182.part.js": "7c339ddcfdf59e3783001646a01bb959",
"main.dart.js_289.part.js": "743185a89c946ee576f8740fef6a5be9",
"main.dart.js_83.part.js": "a26115a4fb18c3a0dbabf1fc80d2a975",
"main.dart.js_254.part.js": "c4996addbf95a08893ee359ef4745297",
"main.dart.js_176.part.js": "c38ff0231f61f8b7d642b016aa06dd82",
"main.dart.js_245.part.js": "73d61f4de5729fd1f63eb870e8b65d62",
"main.dart.js_87.part.js": "5e8f706dd0a77e660eb8fb5f3f136e4c",
"main.dart.js_285.part.js": "4555eb8a225d9c73cf4cb6cc27e888be",
"main.dart.js_251.part.js": "c2924a9fdafefca3c2dbdc9778fbc765",
"main.dart.js_126.part.js": "ff96ff58c92073b44ab5905539bfc2e1",
"main.dart.js_129.part.js": "2a8c56124b98f00a9a8e8277fe9d9610",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_218.part.js": "afd4b949574024315d6e5d97bfd0a856",
"main.dart.js_172.part.js": "96290a390b2910ba0de83caee1b14e40",
"main.dart.js_142.part.js": "9e5ed1a210ac5dd927aea267cc643d1d",
"main.dart.js_209.part.js": "ad71016fb6f012ea97e61bd68d2aef77",
"main.dart.js_10.part.js": "28358704d66c6295331f72294c0c3c7b",
"main.dart.js_84.part.js": "7b2f21d0b0b854ca408094388ad435e9",
"main.dart.js_122.part.js": "f7cebffd0cfb7e7fc39e7614132fc436",
"main.dart.js_103.part.js": "9dee36595cafc60e9089b6c1802cb9e9",
"main.dart.js_230.part.js": "d528b76cd2481f98911926a1b2d1f186",
"main.dart.js_213.part.js": "7659ef4c262b4f77ee23b0be214148b2",
"main.dart.js_153.part.js": "aa3929d8c20ba676db4aa8b331afa0d8",
"main.dart.js_41.part.js": "e23a894b43d15c52733a9d111f85c78a",
"main.dart.js_89.part.js": "0163f174312a73d7c5dc63744c722d4d",
"main.dart.js_71.part.js": "b05b3f2edfb780dc2261b3dfdd86d8ff",
"main.dart.js_37.part.js": "947e78c024f4cde53014f58ddcfeea23",
"main.dart.js_287.part.js": "1d65843d3cfc328e96264bc70f6968e3",
"main.dart.js_283.part.js": "5f27b7fa82e4a65c1b04dcd7f424f946",
"main.dart.js_132.part.js": "be322eabb8fef86c6d8466b0732734d0",
"main.dart.js_127.part.js": "c67d4c51851de2733db9aadbcdbdb304",
"main.dart.js_175.part.js": "cb0752992366bf78474fab06db2a062a",
"main.dart.js_239.part.js": "a1c3a5a9ce718da9312fad8890ecf832",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "ed68d7b5ba8ae31ba79d6c6741e39eee",
"main.dart.js_216.part.js": "e542f0c18ebb149d93ed1cdd790ebc3f",
"main.dart.js_169.part.js": "16d2ca07deb2da7c49406f1a3323346c",
"main.dart.js_13.part.js": "d6c5d6f481c0ec9dab7f076020336c0b",
"main.dart.js_246.part.js": "ceacdf3782728ae9fb42870be372d1cf",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "0bc462115b826b50325f82db18e1e9e5",
"main.dart.js_144.part.js": "f1d126e5ec7c0dc3063b8f785480d0e7",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "64440e2a6907fab8040c4efe6f9095cd",
"main.dart.js_265.part.js": "088bf551f50f469291fc369f535656f1",
"main.dart.js_31.part.js": "0a65b69f318a4c66df42195645ce1e2e",
"main.dart.js_119.part.js": "350cb795df441be7e37574646412db10",
"main.dart.js_294.part.js": "626846cf6f7a3857be6997f35c46b0b2",
"main.dart.js_18.part.js": "c4e8953df403e17714c34793aafb4564",
"main.dart.js_35.part.js": "2fbd15ab772bdf8523887f8d4421ac21",
"main.dart.js_200.part.js": "e3450e28a60f299c0cc1cfd11c255d7e",
"main.dart.js_101.part.js": "7a9d8dc4d9d9f7ca45712d2b892ea17b",
"main.dart.js_149.part.js": "30439469d9c7f359b1574a9c111a25f5",
"main.dart.js_208.part.js": "67c98e2a512a21a6796a80e76a596dd7",
"main.dart.js_82.part.js": "da9e6dafc54b41d441b4c162d6ca3762",
"main.dart.js_291.part.js": "ae59ed3612ec811130bcb74fd3bf9b29",
"main.dart.js_106.part.js": "67b9c059e0e5589b87d8132e93976300",
"main.dart.js_273.part.js": "b6b65dfd2edb6be2517d9a7df393995c",
"main.dart.js_62.part.js": "6a5c007839a99cc7df93ae6671298258",
"main.dart.js_259.part.js": "75a1fd632f4da10a78683b05b4a68ad4",
"main.dart.js_207.part.js": "da6206add6249812d7d90835a206dbe2",
"main.dart.js_278.part.js": "d26cbaff596650c4d2e7182d8579d500",
"main.dart.js": "5bb77c6eec9ce5d47e40f0c8dc9fd9ac",
"main.dart.js_222.part.js": "04d6968dfeff9e39326ed0df6b136d2f",
"main.dart.js_148.part.js": "e0a0fe9d863f8ecfa7da099fac1ce1ef",
"main.dart.js_293.part.js": "47f72529001976a23693d283e12a6e3e",
"main.dart.js_124.part.js": "3553ba0a8cd68a0aa436f51edda2bcfc",
"main.dart.js_50.part.js": "f3268e13bc46a36d4cccc5f071e26420",
"main.dart.js_97.part.js": "044b547686d37c85b6dc44a2fa28a59d",
"main.dart.js_192.part.js": "7ba7debf6f64f8299c5130d07f4003ed",
"main.dart.js_91.part.js": "3b93b6cfaed763c591dbc9ac464bdfc1",
"main.dart.js_145.part.js": "cedd36d0c9b587bd67f5176688894451",
"main.dart.js_57.part.js": "4aee189de13e16453390e4cc5adccd60",
"main.dart.js_190.part.js": "3fb81bc0f04e447437542623045b8416",
"main.dart.js_104.part.js": "b3a833825d4ac1fdcca0b8a17cdd3be4",
"main.dart.js_69.part.js": "98750531b8c0f5bb14773d20888b91a4",
"main.dart.js_196.part.js": "fb2341ec0592245fa06f4622a3bc6efb",
"main.dart.js_181.part.js": "6c94c86a41e105c9f3e491747cce12c0",
"main.dart.js_270.part.js": "d71751f5e96b383a08a23af87ae38f59",
"main.dart.js_33.part.js": "bd2a29ef3dd7169f6384d358c127cfd4",
"main.dart.js_217.part.js": "c08700545eab88908340d542c67a06ef",
"main.dart.js_34.part.js": "a0130f778d06ee96a83b85fac381e220",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_88.part.js": "e27fc7c79dcf81d9db69bb0a701c11c4",
"main.dart.js_183.part.js": "860fc72b5261a8566337dd597661ff8e",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "fe13ec0ebf2cf2add7674c95d8924130",
"main.dart.js_247.part.js": "5b7973bc7ae29bd6d5bfb960ddb16f4e",
"main.dart.js_7.part.js": "1d470885e91615df1b968eee6cc4d03f",
"main.dart.js_140.part.js": "8b78fd304d2e275f8863e6c5f63e39f6",
"main.dart.js_228.part.js": "af80e8b521a70c31b21bd99b4e632ee4",
"main.dart.js_170.part.js": "798449496bf7572e9cef2f3e0de01446",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "a60652a511daf6406d625f85b5ca4a0f",
"main.dart.js_27.part.js": "4da042a783a76555fa23abfed138ac66",
"main.dart.js_156.part.js": "046e5076ff3ef869399996d73d77a404",
"main.dart.js_4.part.js": "2822e051c84c126c54668f4781cb9cd3",
"main.dart.js_219.part.js": "632cce1404b002478915d53ca80d7cb9",
"main.dart.js_116.part.js": "b3474129b6983895d6f6bb6d368d0d50",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "e5aa34b29ee528ec717720fb7f7670c1",
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
"assets/assets/translations/uk.json": "ff0b2f440e47de55ebb4caccc7abf87a",
"assets/assets/translations/pl.json": "967735dda95b03e108958a8e456904f0",
"assets/assets/translations/sk.json": "9369eb2d37e60e6e61889f7967886be4",
"assets/assets/translations/en.json": "1ca3281169172b22438055c16d21e4a0",
"assets/assets/translations/cs.json": "30feea1e716f2641e9efb63ee66f0f9f",
"assets/assets/translations/de.json": "77aa8845ac93929fb838e327b1155611",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "1c05a2406c5e9413ac359770e0672088",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "11c5a5836fef9735f4a7025f10e1ff3d",
"main.dart.js_60.part.js": "f4816b76804bcfb57eb9cd0f1ddd6bff",
"main.dart.js_263.part.js": "a09b62e25d624133abf23de0786edf17",
"main.dart.js_220.part.js": "f2e311951623c7ef0cd3b566f7b921d5",
"main.dart.js_25.part.js": "698e77923f108ae965476e97cb597e47",
"main.dart.js_288.part.js": "a58b90f1c4025f22341289f99552abb8",
"main.dart.js_141.part.js": "256312b11019ea55228f69eb9a0fcf0d",
"main.dart.js_249.part.js": "cab6af98d9ecc07427db5868b2a9af76",
"main.dart.js_123.part.js": "852894b742049b71fcd18343af57878b",
"main.dart.js_268.part.js": "b6a9acfd282975805275360e60a8e662",
"main.dart.js_8.part.js": "0cf757e4ac607acaba6397faea8e9f87",
"main.dart.js_198.part.js": "ffb06424e86a2b2d5e62aafd430ddd81",
"main.dart.js_81.part.js": "2cdc47cab2f4659e55e50b8b73260462",
"main.dart.js_205.part.js": "8ed33685b4e9c02f6a7f6f8f9c027371",
"main.dart.js_280.part.js": "3acf4b84106fbdc6b2e5153b18b85c60",
"main.dart.js_9.part.js": "61ce72d64620622b431f7cde13b32825",
"main.dart.js_99.part.js": "db4afe2419ffd0eeba115e5748578bd2",
"main.dart.js_272.part.js": "453558aceae9517d129cd76bb98d89a6",
"main.dart.js_242.part.js": "c235d78fceedadf9a5dcf5de883fdd87",
"main.dart.js_86.part.js": "05f4e67ee65e5ea44018c72e23678b78",
"main.dart.js_23.part.js": "496080244b4ec0f79bbbcd2255cc7465",
"index.html": "9f2ba21558875a956b07fc37064fb39a",
"/": "9f2ba21558875a956b07fc37064fb39a",
"main.dart.js_94.part.js": "535d794143f9c729a65098765d34be9d",
"main.dart.js_98.part.js": "bad0ac815b34cd7c9c35b087eb3a9cb1",
"main.dart.js_53.part.js": "85a061a55334cfdd4c49df0e676f8849",
"main.dart.js_74.part.js": "803f8571f1d17b0cfade0dbb93fda3c0",
"main.dart.js_235.part.js": "80783ab6cca29320afce9324309f5043",
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
"main.dart.js_286.part.js": "02e3a05db5e02c5a31546c49341d7308",
"main.dart.js_118.part.js": "1afd9ad62940156eef0dfdd4ee90948f",
"main.dart.js_262.part.js": "1f7e92294f2d09063e8e5d030a72310c",
"main.dart.js_26.part.js": "560aa6afe6e4b81363ec752a51dedd66",
"main.dart.js_240.part.js": "0bc9d7432894460ed0c29a6fed18cae7",
"main.dart.js_20.part.js": "6a8cde6800a7168571f90c620cb3b53b",
"main.dart.js_189.part.js": "027c811077a6ec67c6364739357ffe44",
"main.dart.js_51.part.js": "463852a118d6d865ffc8f8dd2556c10d",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "30eacc8b5dcd93153580d2dd0a66fddb",
"main.dart.js_290.part.js": "5fef1616885a4d984a845d1c3ca0b5e9",
"main.dart.js_1.part.js": "f7ea73da43ff171175d42acc9b972599",
"main.dart.js_120.part.js": "4ed12e0088de4abbd519e35ca41c24f5",
"main.dart.js_63.part.js": "d672c97a8d068a59621a38dfac6d9ca2",
"main.dart.js_211.part.js": "a05417c3c378b47cebe2da281a34c604",
"main.dart.js_45.part.js": "cc82a9d44dcdf53b7824d7bd6c7573cf",
"main.dart.js_261.part.js": "458872d871972cc37d87573b6120dea0",
"main.dart.js_295.part.js": "bb109c092507d1443b72955cc13ad5ba",
"main.dart.js_12.part.js": "ddbb6811233bebad775a5d17d88f7ff9",
"main.dart.js_281.part.js": "bb2ceb2f388e7ef317d719f0134e826f",
"main.dart.js_221.part.js": "cb984aa325ef6d919ab94b376f864657",
"main.dart.js_137.part.js": "2d6bd63efd9b6182965df4e4bbef5f7b",
"main.dart.js_28.part.js": "30e7f1cb70dd7cd6b782eeeb33b1ca08",
"main.dart.js_135.part.js": "f3bb99dc9aec3e66b87ad0b092a06db7",
"main.dart.js_256.part.js": "18e60d0b5838905a72d65eade0ee8c18",
"main.dart.js_138.part.js": "18a2e1802dacb65ace3578a31e33832e",
"main.dart.js_193.part.js": "951b058d7a22aaf825f73c258d2ad718",
"main.dart.js_17.part.js": "aed42a878b6d76880581f03335802ab6",
"main.dart.js_105.part.js": "0409d4ca9c0800829d4b70b8a9a23304",
"main.dart.js_206.part.js": "18a29fe3464bb78bd6a60f5cd89c8fd1",
"main.dart.js_231.part.js": "cb70500f291c9c95837d70d46ca2ec77",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "6be21449db5c4bfcb97bf2e8bb938da1",
"main.dart.js_292.part.js": "d09daf8c69d485dd1f2a3f71c75978e1",
"main.dart.js_15.part.js": "17dcf180773c75a67145f34af06a235e",
"main.dart.js_151.part.js": "9831c8ac79c1087b0aec0656ac1a94fc",
"main.dart.js_19.part.js": "721e58ca21e53a25c6177594d1bcef97",
"main.dart.js_284.part.js": "cadd5dad4bf8716cb39cb3b2b4e934fd",
"main.dart.js_186.part.js": "a0dd6aa74aeb210816e29b070f5d3a97",
"main.dart.js_163.part.js": "8733c2617949af87a8fdaa1fed12a5c3",
"main.dart.js_154.part.js": "2175ddfad9152e316927f48ee41c6d0d",
"main.dart.js_257.part.js": "a64df9bf783fbfa38a4d14f69cf3dd70",
"main.dart.js_42.part.js": "e76f0bc8612074721a5c4c2a9e593777",
"main.dart.js_16.part.js": "ac7fac3e06df3c6d1081230fa6b517a4",
"main.dart.js_250.part.js": "e481cd0b267c08b10fcc383ecaf54825",
"main.dart.js_52.part.js": "00b40febffa6f6fda43a637aa40f746e",
"main.dart.js_36.part.js": "3ba34d333bcff953b72667aad02c2d74",
"main.dart.js_199.part.js": "c408f0df9d0f5fdc31716062688f8a08",
"main.dart.js_253.part.js": "52c1a5cafe92177310538fd6ca7414e8",
"main.dart.js_130.part.js": "2f4ba1b9895d39fcd2bd9e19f019ae09",
"main.dart.js_152.part.js": "b088faf8554fd9d27e583308e34e171a",
"main.dart.js_32.part.js": "92ce66f0975f125440bb46cec553591f",
"main.dart.js_197.part.js": "9e8e62aa6a8884f6db0a42ad89f3d100",
"main.dart.js_56.part.js": "da577a93dbed60a29fb1f1265818197e",
"main.dart.js_227.part.js": "c0204a911be6d10a0b9396694dc1dd35",
"main.dart.js_3.part.js": "bef8b8c50f7f943e02e99eb636861e21",
"main.dart.js_68.part.js": "9db38e6d10dd0af2b33f93ca8438ff07",
"main.dart.js_38.part.js": "e7a3e2b1e662c1acab5c05a603d7e073",
"main.dart.js_248.part.js": "9c9d4012cc29b2c6a34b193e68219f9d",
"main.dart.js_133.part.js": "bad6181a3620caac4dd0238ff383ac30",
"main.dart.js_21.part.js": "d5b0251cee80e65cec547ea66ee87457",
"main.dart.js_188.part.js": "a1de3dfc29da4eaa6c2abc6d92f51ecc",
"main.dart.js_204.part.js": "59379d84cb131e4b7ba7cd1b4b2c8257",
"main.dart.js_24.part.js": "fe8b159b3136d7de049d9990b9606e06",
"main.dart.js_90.part.js": "6d2f9e10734985d905aac6d8eb5b01d6",
"main.dart.js_111.part.js": "0eb8347e435cb29c520390cda06cf7e4",
"main.dart.js_177.part.js": "837ffcec948d74be6179e2dc1d0eb493",
"main.dart.js_85.part.js": "af1fc2b8d8238b3d2d8ec8c39ad6d933",
"main.dart.js_243.part.js": "561be364899247447e34e1f8f19e00e5",
"main.dart.js_212.part.js": "729f4f3e4dc9237f885504606fa3adce",
"main.dart.js_260.part.js": "4b2e55f55bd1dbe66733a109cf1a6688",
"main.dart.js_39.part.js": "540811254c169c5d4f4ecc4b5a344b63",
"main.dart.js_49.part.js": "66abb26f5f0783dd042761de443083e4",
"main.dart.js_185.part.js": "3619a69f9602a57f096443cef11a7fa1",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "c89c99017723067726bd24b29c615cab",
"main.dart.js_171.part.js": "e21bd860ee29032e06fc1a3154a62a6c",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "9ff7b3250d8e9c36fd377f07027b3c97",
"main.dart.js_134.part.js": "6c8c7ccaf7ce33ea4b27430e1dfedd68",
"main.dart.js_195.part.js": "b0f720af4d779282f5c411f008536797",
"main.dart.js_121.part.js": "69c76f33319200d93dd165cd16a64cdc",
"main.dart.js_215.part.js": "ffebad4e6766384e00efd6fdc7564898",
"main.dart.js_112.part.js": "70b3f7328c78de73187ce7968d5b0ec6",
"main.dart.js_139.part.js": "f5abd2e7e8210b24b0802e644a8a632c",
"main.dart.js_80.part.js": "a78593d7920ea505b3e39900348922a6",
"main.dart.js_252.part.js": "c6591e8e0939bbe2d6a4ea7357561848",
"main.dart.js_233.part.js": "6a996aa5c9ef44ec32e8d1ddd94785cc",
"main.dart.js_30.part.js": "02fafe00c9a5efe0da36ac82525820b7",
"main.dart.js_267.part.js": "93d5ea9f6fa364c03061ef6535467afa",
"main.dart.js_277.part.js": "46fa14bd31a065896fd79d778e1a7fec",
"main.dart.js_78.part.js": "54d509ec5d883ac889d6c8751b9f3f23",
"main.dart.js_136.part.js": "33f59cce7fbadcad306e2e2689beb942",
"main.dart.js_271.part.js": "889dc2ee13ea19804aebed8bea941b05",
"main.dart.js_95.part.js": "e9081d7ef14a5017aaf18cc18bbb79a8",
"main.dart.js_29.part.js": "a2ba941e238ab0dda593b42f9e85e723",
"main.dart.js_194.part.js": "b41d72b147c382a0b8a3b15ff06225fd",
"main.dart.js_61.part.js": "299bc8d193fd04508b15e077b6c40e62",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "42dbf27dc6c450bbbc54197a946333fc",
"main.dart.js_54.part.js": "d5dc020ab5f4a7ff9c1762fa4f27f56e",
"main.dart.js_79.part.js": "010931f9fc46d1f445ddc2bf43150060",
"main.dart.js_109.part.js": "97ca3a89391a97a8362c7514dba16b50",
"main.dart.js_11.part.js": "6b37f0bac09d5d4f2132d7b35b8c6789",
"main.dart.js_125.part.js": "5d4d76e05de8dffa0bc47a60454b25bc",
"main.dart.js_131.part.js": "7f28a08353f35ea3fff23af0c715509c",
"main.dart.js_226.part.js": "f63f910784c2b5c2e578cc1c1f5e8314",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "286bb014e1a410a23b73a46ef67c0f9f",
"main.dart.js_178.part.js": "761201281c83e9cb0be59ce79320e992",
"main.dart.js_100.part.js": "e24d0019cc2814cab508fce484fffb22",
"main.dart.js_187.part.js": "81188c9eabf55db8415ff25013b73b41",
"version.json": "91ad90032d66215ff90bb16cfcd0be7e",
"main.dart.js_264.part.js": "f570474eb0d6f731c233a484d326434b",
"flutter_bootstrap.js": "65fa0627561cae285425a46eae4297f0"};
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
