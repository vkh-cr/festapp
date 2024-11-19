'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "a80906373ef2ad8df79c917ad8e09bef",
"main.dart.js_162.part.js": "4bd2362b452cf336199e200ab188aa9f",
"main.dart.js_117.part.js": "5c039ccdaf40e5057e45aa2fec22fc38",
"main.dart.js_182.part.js": "f1e7141d18bd471ff61355292bb8b2f8",
"main.dart.js_75.part.js": "af552b1dfb24f7e4ede7636e8747e678",
"main.dart.js_244.part.js": "6a036368c0a37b298931b5ed5c0cf3d4",
"main.dart.js_289.part.js": "932793aceb3c5e1bf56bbb2cfb9a9f62",
"main.dart.js_83.part.js": "e16cc7376e37dbbf6c30d7f44849f66a",
"main.dart.js_176.part.js": "99247fe3af8a404d08727f9ba9bb4a52",
"main.dart.js_96.part.js": "d14fa2a062eab820226e29f2d33c6ed9",
"main.dart.js_245.part.js": "7c0e65d0e328d7fe8a51b4e7848c3a49",
"main.dart.js_87.part.js": "72d0742686f8035eddebeddad4cfadf1",
"main.dart.js_285.part.js": "d3b4acb6217cefee24da51b300ff406e",
"main.dart.js_251.part.js": "9354a9fa33186221a3517b6adb3e55ec",
"main.dart.js_126.part.js": "9b4de0f24e763c84aa75ccbb4791b53c",
"main.dart.js_129.part.js": "d9681ea91167256a182277a5bcd62d28",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_218.part.js": "19ed8d68bd5624232791cb16e35b4eff",
"main.dart.js_115.part.js": "265f5c4bda25d9f9ec6c51ca7058a759",
"main.dart.js_10.part.js": "99ead3f5fe26dee59f2eb3346d286e79",
"main.dart.js_84.part.js": "6daed1af39318163221d05fdefd6b317",
"main.dart.js_122.part.js": "6f15d93e4a78125f1587e5a2f4047af7",
"main.dart.js_103.part.js": "eed7e3afd332fab2de23fb027b337fe0",
"main.dart.js_230.part.js": "f9ad6219295d953c70ebc956d2b390ac",
"main.dart.js_153.part.js": "934934b3acc5c538c3270706af6f5885",
"main.dart.js_41.part.js": "5fa02ef76154892d7bd4acb611f40402",
"main.dart.js_89.part.js": "11063f4fc672c0997b18a68350c06376",
"main.dart.js_37.part.js": "947e78c024f4cde53014f58ddcfeea23",
"main.dart.js_287.part.js": "991f683cbff5bf87d2839b0ec9ad2363",
"main.dart.js_283.part.js": "2d03b8ec944375320eee953d1631bd58",
"main.dart.js_132.part.js": "d136afa1280623b5c17c8aec38afbc68",
"main.dart.js_282.part.js": "b58db215b631df24913f165c8a6c82e9",
"main.dart.js_127.part.js": "930565cd1b1df812c4d42fadc4891893",
"main.dart.js_161.part.js": "746e0f609c23376f3e9bc6672a5b6350",
"main.dart.js_175.part.js": "42d164ca1c768336205c42b1511c806a",
"main.dart.js_239.part.js": "246b0532474d0885df169286c772811d",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_216.part.js": "ff42e69ba12cabd26ffd08b22de5db44",
"main.dart.js_64.part.js": "fc6906720419af8768c4715ae08ac9ed",
"main.dart.js_169.part.js": "2ec42972a3a1ea54baeba09b26afad14",
"main.dart.js_13.part.js": "cc3334e6b8dc4a3f1d115d0c27482421",
"main.dart.js_246.part.js": "8b040d4a2c1742ebb0721ee558c57085",
"main.dart.js_174.part.js": "1f43c4e7e9dc7fdccb7eb89c3c471dbb",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "e8a444a52794661732b7b116783d0ff5",
"main.dart.js_144.part.js": "bf19c279b52d0a86d9f7978efe14703e",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_265.part.js": "4559543d9b9835b354a1c5ac69070bf5",
"main.dart.js_31.part.js": "0a65b69f318a4c66df42195645ce1e2e",
"main.dart.js_119.part.js": "8fbe449560b198bc907cdf85f92ee8a8",
"main.dart.js_294.part.js": "4cb83f19697f38fce7511f2f190dd2a3",
"main.dart.js_18.part.js": "142cd24acf7e5c9f65e45fdc7014a07a",
"main.dart.js_35.part.js": "87bee30b05561919ce3b425c421523a1",
"main.dart.js_73.part.js": "7f88ad8019da87eb90e31a48a18d8df3",
"main.dart.js_77.part.js": "41a5b66c3e106e46d3627e8bc3a176da",
"main.dart.js_149.part.js": "61750c6eaf95eaa27a93acfef6992efa",
"main.dart.js_67.part.js": "35e47a158f5f10adf34ae62b97902a8d",
"main.dart.js_208.part.js": "9006f2b2947d7b292bf0ae947b1fc381",
"main.dart.js_82.part.js": "6c648c2000fdef2a27dfb266a8dfdd0f",
"main.dart.js_291.part.js": "0d9af0142d731220d38ed5501f29d914",
"main.dart.js_273.part.js": "4f25c0cb23242ee71b54d45bb694d67b",
"main.dart.js_62.part.js": "84047d85c1714da22940991c0fc49988",
"main.dart.js_259.part.js": "8ee424833d3278ec5ed9366a3de51e0a",
"main.dart.js_207.part.js": "bca47ee5ed20b561440f785be2d44bb1",
"main.dart.js": "f52271964fdf15981f8a2362150979f7",
"main.dart.js_232.part.js": "9f0d3c3457f0a7e27b35a382ea3d61a0",
"main.dart.js_148.part.js": "abf16930836561c0707c5482c077ffab",
"main.dart.js_293.part.js": "f10d5a5ce30a30f6126b71412ac2e604",
"main.dart.js_124.part.js": "156b5e0b34cc66da5c995c6a80335b97",
"main.dart.js_50.part.js": "155177a1b7154a40c5fa73dcfed1ff8f",
"main.dart.js_97.part.js": "c78ee3015128aa5dff83ca3f1a3bc6e9",
"main.dart.js_192.part.js": "7ad0fcc438c70ef85ffbba23534eb37e",
"main.dart.js_229.part.js": "cddb6485cdf91e25f55d4e70bc0b7875",
"main.dart.js_57.part.js": "4aee189de13e16453390e4cc5adccd60",
"main.dart.js_104.part.js": "239d89545fdba4dc05d7356e1b9b0abb",
"main.dart.js_196.part.js": "1fea99983338ea41222005ea90ddf874",
"main.dart.js_181.part.js": "0553ab654586ce2fd2443cae2a61599b",
"main.dart.js_270.part.js": "929276b77c8ef822170d0ed83cec86b8",
"main.dart.js_108.part.js": "4a5e3a153b33b1d54ab6a981c0f6b830",
"main.dart.js_33.part.js": "9e8d0dc092e341db80474c8fb1f56f1c",
"main.dart.js_269.part.js": "7174a9a69b5c17b296ed845e69f1c35d",
"main.dart.js_217.part.js": "6b03041a3a8ddee3bb359b1c8d98f879",
"main.dart.js_34.part.js": "00657162aec013fa71233a508abe3a04",
"main.dart.js_210.part.js": "d54925dfcf9e13935314006ad646ca4c",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "4bcfb901edfb25ba10c2f86e095b18f5",
"main.dart.js_88.part.js": "9d7b11594c0c785b1c972ffbc0898ec2",
"main.dart.js_183.part.js": "0c09885f73af90169af6198be241f7ad",
"main.dart.js_203.part.js": "7a6bc1d40789c55e7205e9b4127a6352",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "70a6ad98cb64d30c180ba217c6958024",
"main.dart.js_7.part.js": "fbfa9d5194817aa296b46b58fc05acdc",
"main.dart.js_140.part.js": "8920ec79feedcef864add23d9c529335",
"main.dart.js_170.part.js": "d47f8cba0a5028abb2d828c920447969",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "e8f89d79d43dd0aabe283e1ca6ab83d6",
"main.dart.js_27.part.js": "8e47d3386739932215c2921b9ba5da40",
"main.dart.js_4.part.js": "a8adbc5d34c6fc12bfdf93e82e916406",
"main.dart.js_219.part.js": "a1fcc96e7ae6536d01506f943cf9fc95",
"main.dart.js_116.part.js": "fb2fdbee05068f3f8d68cfe11e010e84",
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
"assets/assets/translations/uk.json": "9f571567599d4635bc9994e4dc8489d5",
"assets/assets/translations/pl.json": "5bfff1059367a88e43e61eaeceb87d98",
"assets/assets/translations/sk.json": "8d338c5f24d88313df62b0efb38cb222",
"assets/assets/translations/en.json": "808426db5d9e6f858bf54b2bf9e5524a",
"assets/assets/translations/cs.json": "b980376aa8a3b6bf353cefd2bf1f3fb0",
"assets/assets/translations/de.json": "53ac4851c5d131848e855d72c027d2fc",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "21092cee812eaca83f55eb5e54aecf0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "571467986d73b080ea456cb619099ded",
"main.dart.js_147.part.js": "70c58c7eb53773cf0be7dd219da40e7a",
"main.dart.js_60.part.js": "cf00ce52f90d6b5ee7dc1998c4bc9d8c",
"main.dart.js_263.part.js": "3d193db63ef158ce215545b1f9c66f79",
"main.dart.js_220.part.js": "95a7bab01bc58413b3701fda03acea15",
"main.dart.js_25.part.js": "d143acd7be2dd99f916da2ed83bafc48",
"main.dart.js_288.part.js": "6905a6adb30b0969a2a53d5960bf1a74",
"main.dart.js_141.part.js": "221b441308e8a0b98c2f9fc5126c8c94",
"main.dart.js_249.part.js": "d772162dc6f66945c23e6884b7350095",
"main.dart.js_123.part.js": "4f7deff9783afeed1b81eca511001107",
"main.dart.js_241.part.js": "8b4633f1790b5323f1d90ae2b6e7e996",
"main.dart.js_8.part.js": "a2450ab55f74b662aa08ca7a5cb57c7b",
"main.dart.js_198.part.js": "62d7d857f0ed2ca384b7416c4e687d86",
"main.dart.js_81.part.js": "73be0e99ec67131804cf7346931a652c",
"main.dart.js_205.part.js": "fe4e2afd06f02c94b85bf9578e2e842d",
"main.dart.js_9.part.js": "c28b63431bccde0ade2307e082538c88",
"main.dart.js_99.part.js": "eea8dfa47887a39eb8c820ef7437a8b7",
"main.dart.js_272.part.js": "995f640fe544b1362836e1304a9c0ca0",
"main.dart.js_242.part.js": "2c50195a21496394d026f655f6acd1f1",
"main.dart.js_86.part.js": "168a61ffd3c741f872cb39f10abe877a",
"main.dart.js_23.part.js": "ebb645f3e0786b43f8bf32f0fd1d6a95",
"index.html": "0fd1b4b4c5b08ff05cdfd70254b07f72",
"/": "0fd1b4b4c5b08ff05cdfd70254b07f72",
"main.dart.js_94.part.js": "78beed284e19c415ecb81a9ccd67c96d",
"main.dart.js_98.part.js": "3951916f4f2cc8a9661e0af0cbfbf191",
"main.dart.js_53.part.js": "85a061a55334cfdd4c49df0e676f8849",
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
"main.dart.js_286.part.js": "9c4ce445830ada823b220af711859447",
"main.dart.js_118.part.js": "fd9aa091627b8da2246b2d40069eaf5d",
"main.dart.js_262.part.js": "eb79cfc06cc9bd3b69de703ef195765e",
"main.dart.js_26.part.js": "26da2be90c33487560f647ab97ed9a70",
"main.dart.js_20.part.js": "63a3ebd8492180d9582feab9bc410d12",
"main.dart.js_189.part.js": "252def0813f420f4b4c1c31cdf7d3f0c",
"main.dart.js_214.part.js": "359c6974759c92d7da988aa47c487ed8",
"main.dart.js_51.part.js": "d8603df42018cdf7ed8564ef147312e0",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "2f76f1806e011d28d6994b0c05b019ad",
"main.dart.js_290.part.js": "edd29debcd737037b878489c5b8a77c3",
"main.dart.js_1.part.js": "cf7b177e995fff7aaa5de21ec47ebc1d",
"main.dart.js_120.part.js": "2b76ed83e8cf9eb0f987be6b032532cb",
"main.dart.js_211.part.js": "24810816146c1814198a1dba2ad3b891",
"main.dart.js_45.part.js": "20e4f65520abc30076c7649b54dfee4f",
"main.dart.js_261.part.js": "f9d936c9b473937fd5b39bb5158ae1a2",
"main.dart.js_12.part.js": "3fde8a19eb0835420f774002a68c7817",
"main.dart.js_281.part.js": "97f1454b56f7683673cb881f51472b85",
"main.dart.js_221.part.js": "3c7373c6cb1b634168377264b29ba1f9",
"main.dart.js_137.part.js": "e4a76263fcbf1f5666d01f0f8ea6bfdc",
"main.dart.js_276.part.js": "c09a827a4fcd0fedf722ecb950f2f19c",
"main.dart.js_28.part.js": "d365eb313ed849329d7e04c1b34817fe",
"main.dart.js_135.part.js": "10137184a169f6876870f4fadeac7459",
"main.dart.js_256.part.js": "6ea201699e98bce8f60471bc4b5b4d1d",
"main.dart.js_138.part.js": "70dd7c9201acd53141064c2df7aebdc8",
"main.dart.js_193.part.js": "5f986a290953d365b4dfd6bc674d1fe7",
"main.dart.js_17.part.js": "04eccf4cfd846d4cf99fc4e78a33cc6c",
"main.dart.js_105.part.js": "9a848c926f5200fbb4f9274f93f810a3",
"main.dart.js_206.part.js": "55e37d2382286761391060629a2e04d2",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "058e9aa940e3d5635db95f0248c180ff",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "18ee8ac4d407681977c7f9de4573ab29",
"main.dart.js_292.part.js": "77e7ac05cd58d44d38ffa7e061ab79a8",
"main.dart.js_15.part.js": "dde7b1b36ac3ba72a5d5aefeaba333bf",
"main.dart.js_151.part.js": "eb844ae8b43ac46876224c375a689464",
"main.dart.js_19.part.js": "211e6ce9f72a8cf5aea2a21777255fa7",
"main.dart.js_284.part.js": "bd88e0257e975d5009cdec3363d0d3d5",
"main.dart.js_255.part.js": "d9c062ee27008645245e178e1aa3311e",
"main.dart.js_186.part.js": "91e309d22d9b50bcec8e415027ee15dc",
"main.dart.js_163.part.js": "3adc03b721cab200ab311ac7cafa048c",
"main.dart.js_154.part.js": "b681c2f92bdb6496805abf373dfba5b2",
"main.dart.js_42.part.js": "461d90f4d4b2639bed7c273333d2d61e",
"main.dart.js_16.part.js": "a4aad998908d394649b2a23e306a0f29",
"main.dart.js_250.part.js": "6db0d8900c3a55ed4f063920955a2365",
"main.dart.js_52.part.js": "303d86d7437c581391725979d3627b63",
"main.dart.js_36.part.js": "6ed2e55d6453390c1898a38d8f4660b9",
"main.dart.js_199.part.js": "11ac23009a5186356607bf52be3fae0e",
"main.dart.js_253.part.js": "c1a3757650865f6a65b2663f15502444",
"main.dart.js_130.part.js": "6efd240b0e2ca1d0164f7094b6a7827d",
"main.dart.js_238.part.js": "3bdb7735f4263bc6975a0e7ec8d6b06b",
"main.dart.js_152.part.js": "5fb6cfe11407685d447cc7bf182fc060",
"main.dart.js_32.part.js": "92ce66f0975f125440bb46cec553591f",
"main.dart.js_197.part.js": "1d168a188a63e3f076660750e751dcfc",
"main.dart.js_56.part.js": "da577a93dbed60a29fb1f1265818197e",
"main.dart.js_227.part.js": "38fa3aaa2ff97efb28db0af1dbc9f402",
"main.dart.js_3.part.js": "c8e1f21cb635d3bace6aec8903bd082c",
"main.dart.js_68.part.js": "ac21614823efc4804fe78060dd76118c",
"main.dart.js_38.part.js": "e7a3e2b1e662c1acab5c05a603d7e073",
"main.dart.js_225.part.js": "cbd086f9b368d1e3503491a86fe96128",
"main.dart.js_248.part.js": "91a5525c2610ee1de54a9de0067e8375",
"main.dart.js_133.part.js": "574c720befac7a23af4d5b0c6bf500b6",
"main.dart.js_21.part.js": "ae0cacc198dbde12dc40d3db999d04bc",
"main.dart.js_188.part.js": "56dd95fc389b1a39b4a8fc4a4523985a",
"main.dart.js_204.part.js": "8076b54c80d167614177e66ea1b41a47",
"main.dart.js_24.part.js": "ca8dc932b12cc3c298e06f576b3a285d",
"main.dart.js_90.part.js": "727eed6b62b73de3fff5943c6fa663ec",
"main.dart.js_111.part.js": "e4803bab5222810caf08ac319d47ce99",
"main.dart.js_177.part.js": "f26ef5624c4cbaf12399d6920a7cc527",
"main.dart.js_85.part.js": "31cde78df39dcd2ccc052d308b2191bc",
"main.dart.js_212.part.js": "5da4870c3bf59da16a3f92cd58086b48",
"main.dart.js_260.part.js": "b03c6af1c615070f7b2a81e1a976902e",
"main.dart.js_39.part.js": "540811254c169c5d4f4ecc4b5a344b63",
"main.dart.js_49.part.js": "0a9d40c14c4f426fe8ab3613d68b39b6",
"main.dart.js_185.part.js": "9161f2b696e9fd3ab91d3880147c0b4e",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "5bf965a4656b5638abac39e167db190f",
"main.dart.js_171.part.js": "2b7c961b1a5fb353482327a86f8d26d6",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "637c0d208d2820d4a725ecf857e10ae4",
"main.dart.js_195.part.js": "2d6c91ce3bfd2ed6bb9bb8fda2d58c4f",
"main.dart.js_121.part.js": "4b083cfff14f558db7b3726b4ebf5014",
"main.dart.js_215.part.js": "1a58afe69297a01f31266c04e505bf94",
"main.dart.js_139.part.js": "5ac444d8c41b50da274ba12373066b85",
"main.dart.js_143.part.js": "e76ada2113968c10d8aacd6cb74be908",
"main.dart.js_80.part.js": "27f00c6873257ba01a92f801cae9a1c1",
"main.dart.js_252.part.js": "5e5e72ff76fcd0815b219c835f75a57e",
"main.dart.js_279.part.js": "fd6a7096c9e202d676bbaa7c8f8d18a6",
"main.dart.js_30.part.js": "d947a2b534ade7278a06f83f3767e1e4",
"main.dart.js_267.part.js": "46ff4fbffd24c854b9d9a725e030e998",
"main.dart.js_277.part.js": "43da2b74188f9d74863944288563d832",
"main.dart.js_78.part.js": "6f0c71dee445bfd0f6b11cf13e494c41",
"main.dart.js_136.part.js": "679f4c992a6168c2cb03e87b920bc29d",
"main.dart.js_168.part.js": "ed6e28b5f0f2f67fc1bfda8e08c9e238",
"main.dart.js_271.part.js": "c37febf2835c47049c5d7ba2052c9324",
"main.dart.js_59.part.js": "ba7cd49a995edf57166fa1602cf2593c",
"main.dart.js_29.part.js": "fbc562f92a081ff43fff29bac9bb2f24",
"main.dart.js_194.part.js": "39b198b298cea19329819fe2bc7c45bb",
"main.dart.js_61.part.js": "1e659ef30c43cd3e477ad89686a4b612",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "ef635e94ff9c10c3a61b3f4d34091fdd",
"main.dart.js_54.part.js": "db982f7d4917d8d6f88e413f36278a05",
"main.dart.js_79.part.js": "56522c7a285e0fc5624ce7b8be4a1094",
"main.dart.js_109.part.js": "d583a6aca8b0218db2c18cbf0af445f6",
"main.dart.js_93.part.js": "70b239a7cb0e7d816b6b9448f3f731d1",
"main.dart.js_11.part.js": "1d1a744dc4c5bb6e0bb1881285f99960",
"main.dart.js_125.part.js": "c7d6defc85c3f0719552b2c357966c30",
"main.dart.js_131.part.js": "4057d7c9efe669b882878cc0e20f2c37",
"main.dart.js_226.part.js": "c79124e201d9b80e543e6be3ff88ddbf",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "e6fd53f7bc1f1c877f57fb2fd18896d6",
"main.dart.js_100.part.js": "dbd8fea44745da9b53520fb4738667e8",
"main.dart.js_258.part.js": "b47d4b99bd4ccd40b13bec785e0562f5",
"main.dart.js_70.part.js": "c6b12b00e0979a04a1b9aa4abff459bd",
"main.dart.js_187.part.js": "97af413ee966d4251ef8931d27a360fa",
"version.json": "38740d36ce5dd8136ecf6fdd6dd84737",
"main.dart.js_264.part.js": "888591beb93d480f1c465af5aa49ee4a",
"flutter_bootstrap.js": "54736c1bc044cf58a91ac2c7bb859c87",
"main.dart.js_191.part.js": "62cac9ef1c3397405a066f33e6663c28"};
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
