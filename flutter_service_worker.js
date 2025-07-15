'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_223.part.js": "1dafcad413d4b91420349868cd8734dc",
"main.dart.js_46.part.js": "bd0a1bec0437c5a7030256feeab09fe5",
"main.dart.js_134.part.js": "1503e9c8bfbd0053811b40f729154fad",
"main.dart.js_65.part.js": "9be5543edfc0c49adfc4469b270dd964",
"main.dart.js_131.part.js": "2979f9360b21f776d5133478d732277e",
"main.dart.js_304.part.js": "372c80f41f3fc3970455227b11236305",
"main.dart.js_39.part.js": "c7d41c4a2159d5ad9874674c539393e7",
"main.dart.js_273.part.js": "cd40461c783e51d28bdc14d8fd38592f",
"main.dart.js_115.part.js": "865910ec87cb22a988bcd9e587a70ba4",
"main.dart.js_81.part.js": "6b25a4a641abc67c5d93b03b174f00f5",
"main.dart.js_229.part.js": "ca03ee3f2221da6f9690a1f5facbc72d",
"main.dart.js_256.part.js": "3fbaca79ddf783d0e0e11a22290b7b01",
"main.dart.js_293.part.js": "07118335a89d6d604f64b9dd328b539e",
"main.dart.js_86.part.js": "516b51c31cf4bfad52b22ac9d1f90c98",
"main.dart.js_79.part.js": "3320d05178146e259fe8812961c60500",
"main.dart.js_222.part.js": "a26d19cd35b2108daa6831a1dec4562c",
"main.dart.js_166.part.js": "6f1b5816fc305728bb3c70bba3a9a87a",
"main.dart.js_182.part.js": "78aad5610c4e0ba181bca2848076130d",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/cs.json": "d784914406956782509e4a0c60c5f36e",
"assets/assets/translations/en.json": "fd22d13d381605a1db233ecb69873c08",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/MaterialIcons-Regular.otf": "51827c7433e91c0d7aaa5c027fc42934",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/NOTICES": "3c24853244fa9ceb9b71258d8c2c76d7",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"main.dart.js_211.part.js": "4d3b456d7c4275c095c9f8f021692fd0",
"main.dart.js_201.part.js": "33f4f0d0c73aa9653d5215d211664dc8",
"main.dart.js_129.part.js": "83595756e2fbab7269706308e93ed286",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_196.part.js": "e020ecfee9129341cf90c90bb0d4e9a0",
"main.dart.js_197.part.js": "22d0af5abc18aea17982159e1bdcbbba",
"main.dart.js_219.part.js": "ab2aeaf2a45708f65a3f83c063fd2e82",
"main.dart.js_117.part.js": "062352e42d00fb12cf82648a588b711b",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_13.part.js": "7fc64aaddac6f9a96ff78586306f3f60",
"main.dart.js_32.part.js": "ae9ff27b2cb1f4ee95152f093909e849",
"main.dart.js_295.part.js": "819f8f0b12c8b95c9f5b4502d8e5f263",
"main.dart.js_137.part.js": "99502c2903f8a50f856315df68a35940",
"main.dart.js_25.part.js": "1cd455ffdd1567e8c2f33a83c0827fba",
"main.dart.js_93.part.js": "a6dc3fcdbd8e2b8558705a79ff244760",
"main.dart.js_140.part.js": "ba25f980ec035c76ffb2e51c35e88b5f",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "64d5c12737b97eb02bce0d51a394920d",
"main.dart.js_3.part.js": "b2440d04d0f2a46884e64842c388a34b",
"main.dart.js_288.part.js": "fe3ae02e7705025ece04ff0c4cef8e7f",
"main.dart.js_68.part.js": "8128b7eda3216957b316812c8ab0b3e3",
"main.dart.js_302.part.js": "f4da3a9c35c939a9fdfc7c79ac56a3e7",
"main.dart.js_167.part.js": "b6f0ec14a06e6cc7425cb7f12d385569",
"main.dart.js_244.part.js": "0916594f27dab537372bf4829e48f628",
"main.dart.js_8.part.js": "d43dafc5a0d276b7f3bfb3e5964f5ef3",
"main.dart.js_84.part.js": "dbb463f534121b011f35dd8faf58bb8f",
"main.dart.js_144.part.js": "7ac43c6b9b465a72d6ce4d6c7ddc8137",
"main.dart.js_56.part.js": "123c35d87cae59c6f1c6f01fa2b3a717",
"main.dart.js_14.part.js": "69ea7cb0e87d515effd25d8b03a1ec9a",
"main.dart.js_175.part.js": "d908f78366ae644b4d8e107313d48fe9",
"main.dart.js_255.part.js": "dc440902ac53130c85d67c1e7ee54cba",
"version.json": "3a4130e373f6a8ca4aafba8289cf11ff",
"main.dart.js_300.part.js": "880f6d4dfe9d2cc1d50f73cff49c14c5",
"main.dart.js_95.part.js": "2b75295f826191f3f8ff92e356743d0e",
"main.dart.js_234.part.js": "8f965966f215d222670b0b6d465dd107",
"main.dart.js_163.part.js": "9c4c13cb9fe63aea04e98f63ee732388",
"main.dart.js_59.part.js": "687e26d6663cb4e5d97da6f2773ce247",
"main.dart.js_251.part.js": "f2e80b4065ccd1a2ad9d6c4e5de9e42a",
"main.dart.js_181.part.js": "9b4dcb9a1a6b6db7f1bb4647a47414c5",
"main.dart.js_241.part.js": "06757f212b65ee57b109d575e0aa7e20",
"main.dart.js_155.part.js": "fd7f19c2c65e22a7f572d7bd69fd0161",
"main.dart.js_298.part.js": "4a798b5714423a6f3775edcd79536c3f",
"main.dart.js_139.part.js": "16092790ad91030f36ae98c34644429b",
"main.dart.js_246.part.js": "e84f0a5d76dddf432c0366affb33aa9d",
"main.dart.js_199.part.js": "09282ab3ef28db1119b332628e47b7e8",
"main.dart.js_34.part.js": "020662725cee75316d15b1f8054b086a",
"main.dart.js_15.part.js": "f9e97fb860a55779ca3784810df1bd5c",
"main.dart.js_189.part.js": "17786bc2519afcf123f32c40fad8d41a",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_187.part.js": "b1c14ca2a289725ee566d698c7e05220",
"main.dart.js_270.part.js": "21cbaf34fcf3c82d9879383a450cf458",
"main.dart.js_259.part.js": "15f07310a9aaca5fb6a783dcce14b9f4",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_6.part.js": "2a97be380f3a6f79cb3ad431caa08651",
"main.dart.js_30.part.js": "16ab2fe70768e114c6979dd838c4be71",
"main.dart.js_16.part.js": "3ff7957336737cd1abc9e70e3bc3c3ef",
"main.dart.js_277.part.js": "a8a8d34b522768f6d1b2571f5c359ad2",
"main.dart.js_143.part.js": "3b19764d4dab0d16f406d49f2fcddb69",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_254.part.js": "011551f6a40ee879918f5e1db06267f1",
"main.dart.js_28.part.js": "f6104bdb86d436f56cc96378a9c44cc1",
"main.dart.js_289.part.js": "a67989977c3d00abe997e640ed6c5385",
"main.dart.js_279.part.js": "f53f96e4fdaff9a82e93cf6c94ffc38d",
"main.dart.js_174.part.js": "f30a9bd4984c13f22d30edc061225aa8",
"main.dart.js_105.part.js": "56a9342fb3f02f63b26a2e749741ea19",
"main.dart.js_83.part.js": "037a9ca4eb5d051f4a6fae08a24b3b58",
"main.dart.js_50.part.js": "23ccc3131af6a223c3fb800030109cbc",
"main.dart.js_92.part.js": "987d2f7ab9e6a476aa98fd8a8283cc35",
"main.dart.js_44.part.js": "b499e4d2a034a1d28431060074154602",
"main.dart.js_91.part.js": "3fb241e404eb39dc2f3c12979e2df2bb",
"main.dart.js_80.part.js": "dfe2596a8f2e5d1cd891fe4c519855e4",
"main.dart.js_75.part.js": "408dd4e8dcd70343242bc16e326062d6",
"main.dart.js_165.part.js": "a93d5a3af2eeb3210caef27c9971dfc8",
"main.dart.js_9.part.js": "229768878b0bd36f720b130df79afa8a",
"main.dart.js_305.part.js": "9800ffd61dcb5730cc9d53a97d156221",
"main.dart.js_235.part.js": "189da4cf80570fba821e80b3018f838b",
"main.dart.js_159.part.js": "638c51e318fe201de30de8452e301841",
"flutter_bootstrap.js": "a0ff7dbe7283dc3087aa166ad20fd99b",
"main.dart.js_101.part.js": "603fead344970414830ae20a781726db",
"main.dart.js_128.part.js": "d2cc2888382a65b25d780144d9e09847",
"main.dart.js_71.part.js": "fd4143801d7412ad25dcbeef2591d818",
"main.dart.js_203.part.js": "4057411ac64761713d97b2b126090141",
"main.dart.js_264.part.js": "ccc783ab2a13318b23ceeeb3ee240253",
"main.dart.js_114.part.js": "77b863d35a0ed83bee171f7e19a477a3",
"main.dart.js_194.part.js": "26c1e293135b722a5172a471c407b7ae",
"main.dart.js_267.part.js": "b779146a1ce87144682710b1cde91032",
"main.dart.js_206.part.js": "ffdcf094d14e4012585a0e5306755eb4",
"main.dart.js_291.part.js": "94cbb4b07f04b4a7107b116f786f10ab",
"main.dart.js_179.part.js": "35ded0c97bbf96034eb3baff89600160",
"main.dart.js_236.part.js": "18eaec8b67fa80d56ff330b6511791e6",
"main.dart.js_156.part.js": "b65165cf544c47e9d83f1091b5cf48c0",
"main.dart.js_37.part.js": "dc37339a0171fb126b469110f7367dd0",
"main.dart.js_208.part.js": "a0b3131b2075e58ccf84a2a6df354228",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"main.dart.js_142.part.js": "ef0f9e9ccf7eaed5ec63acc7be3052f9",
"main.dart.js_290.part.js": "41fcaedbe3b9c0aae2caff2551843cc5",
"main.dart.js_210.part.js": "3c9d0b4895179d9dbe0bb36b9bc3fc39",
"main.dart.js_294.part.js": "dfb60610bb19e2d395cff2b3353299c7",
"main.dart.js_173.part.js": "c673a2389b915793ee7d8d79d4f961e6",
"main.dart.js_58.part.js": "41a87bdde43c5c4fb6c8b59851838f09",
"main.dart.js_78.part.js": "37002e2950a43509f9bcde0e1a67d981",
"main.dart.js_27.part.js": "aa9a00c7f740ec1022bbe9cbc629249a",
"main.dart.js_7.part.js": "cd49c0bf36078bc04d1d4fb1a6b88b5c",
"main.dart.js_123.part.js": "62db0be5fdde773a92f4ecd262109fed",
"main.dart.js_161.part.js": "a4b35bf75fc60ede8a94de38ec246725",
"main.dart.js_149.part.js": "3bf571c251f151442e2d24b118ad1194",
"main.dart.js_108.part.js": "a6fbe6a967041150c1cb94881a1cc860",
"main.dart.js_45.part.js": "600f7a8688def1462e5a178aacf2510c",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_66.part.js": "9157bebc3788420d3a5a098b94147515",
"index.html": "bbde26569d18590851503db8150eba4e",
"/": "bbde26569d18590851503db8150eba4e",
"main.dart.js_299.part.js": "60307dd3e297ed0c27622e4ed4e9db15",
"main.dart.js_281.part.js": "b079ba6c18f864f2ccd8fd0b632fabee",
"main.dart.js_220.part.js": "f205382169230a96c958d5306b329292",
"main.dart.js_35.part.js": "601c79338129fd2b6f78da5c43fc7c2a",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_250.part.js": "b330837e785e4eef02cb219a9f89af00",
"main.dart.js_242.part.js": "c2ceb38555e2cb956477eb7d8bd106d3",
"main.dart.js_100.part.js": "fd03d0bdef7ae63333a00a649e5f5c3b",
"main.dart.js_301.part.js": "a228dd2c343bdaec7f30fe693e212f33",
"main.dart.js_74.part.js": "df9836639c6086c49a38489e2f679d9f",
"main.dart.js_10.part.js": "9f086cab577f22617c8a9e74c1783864",
"main.dart.js_109.part.js": "01940e7676272eaa0844ccf1c3ada4b8",
"main.dart.js_192.part.js": "365827de58fbf1c2e6d1e3e30c625a30",
"main.dart.js_148.part.js": "1e7dc29b3819867ccb7a1fbc8da8e122",
"main.dart.js_297.part.js": "75b43dce42516044f51f59cc485f2f62",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_185.part.js": "e71fca0a263e8004e87d0791a0e1fd90",
"main.dart.js_202.part.js": "93ead7442a56bece707ab1acf1e15069",
"main.dart.js_106.part.js": "cc6df6e0d8c06029288f6cf8bff59ba6",
"main.dart.js_135.part.js": "665350548b1fc675d5469178f0cd6491",
"main.dart.js_130.part.js": "a69a7833281560b5e95f5d837afbcaef",
"main.dart.js_103.part.js": "583427aaded0df744ab000aa1ef84973",
"main.dart.js_232.part.js": "7e253501d836b85cab0e2b2f5bb3b9bc",
"main.dart.js_160.part.js": "a22ed90bae2e2d162c3c6c3d99e3ef0b",
"main.dart.js_21.part.js": "8f55533d6dd6d78a03bbebc3dd6830ed",
"main.dart.js_212.part.js": "3667947b951fd38a586aa4ca32eae59f",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_231.part.js": "28decf092c8b82c387e3380bcc75ec70",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_162.part.js": "62ec0739c8fc4f4e02aa1a2ef4777958",
"main.dart.js_306.part.js": "9f2debca237206e3276db349af61670a",
"main.dart.js_104.part.js": "f44128eb5b01b60041d406ca0a1654a2",
"main.dart.js_286.part.js": "b469063e4d7bd3c08f568407c2962924",
"main.dart.js_275.part.js": "ed2d96c27865acee18b09245eabcb04c",
"main.dart.js_307.part.js": "0a5d397872ba59794734b0e799b12de4",
"main.dart.js_172.part.js": "381687c0e45499ffead145ab0df6bddd",
"main.dart.js_102.part.js": "79ead8057c15de45b3d7930a42605ef9",
"main.dart.js_48.part.js": "666d8f965053b047d526b831491a4e16",
"main.dart.js_292.part.js": "0b9bb4f1a358e90a53d3894a125d91ae",
"main.dart.js_120.part.js": "8ff90ce021f1413c506efe83b30f9ea9",
"main.dart.js_266.part.js": "09367c0f87df86c55c933bcb81434669",
"main.dart.js_12.part.js": "8ef69146dc290161e3a34060160b7eef",
"main.dart.js_180.part.js": "aeab8a5adfe5d5ad375eb20a3f95972e",
"main.dart.js_141.part.js": "1488b69db7959bbb716a213f886e472a",
"main.dart.js_53.part.js": "61236a6a0b5292cc56fbbfa70d3ee49c",
"main.dart.js_248.part.js": "ca3724951e837b2b0b597dfc4c450fe0",
"main.dart.js_67.part.js": "c9dc45ae4c696639b66bc5d612b01206",
"main.dart.js_263.part.js": "fee4abf957105af0fa3a083b7a4a329d",
"main.dart.js_178.part.js": "840cf798de866d37353165d13fa86ae2",
"main.dart.js_61.part.js": "44d340f36ca2059842c1ae6f635e6a37",
"main.dart.js_89.part.js": "85143d32b2b32d37b7cf28255637d3dd",
"main.dart.js_150.part.js": "15a9044741cb23162dfbe7d55fdb418a",
"main.dart.js_82.part.js": "81f9c1086195a3f1b392d305f29a4d0e",
"main.dart.js_186.part.js": "fdb7eb80bec83207b43c9d241a9095dd",
"main.dart.js_29.part.js": "db8cb8f2c1b56270995c68774ed86d66",
"main.dart.js_33.part.js": "5ae64557545fb82897f24f15505beba2",
"main.dart.js_252.part.js": "272d20c5a1e53a5399cd247353279670",
"main.dart.js_69.part.js": "431f3cdcad9d4065bca2a137af028a99",
"main.dart.js_18.part.js": "7bd93834328d11bf6def6151d084dd77",
"main.dart.js_272.part.js": "f5c09d02307899075b6f9b4558e76e3d",
"main.dart.js_204.part.js": "2370c1e4ba6aaf498d33aa2d2ebdc61e",
"main.dart.js_158.part.js": "9bef122cb07c646c27c367352d548ade",
"main.dart.js_11.part.js": "d40e05b16bea6036be2dad364ddd51ff",
"main.dart.js_38.part.js": "4a8897b5b46196bb7e540a2fc931e299",
"main.dart.js_52.part.js": "80c24ca52401a7c0ed2e0cfbb2ed2cec",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "d353f89be79158ab7e1e8f5fd389f1e9",
"main.dart.js_4.part.js": "ec06b895511cbde15bc84b7706adffc8",
"main.dart.js_169.part.js": "6bde736cecf265353fddb7cec40ebc37",
"main.dart.js_24.part.js": "fa435e88c38cc2d4b4a29247be2eeed5",
"main.dart.js_253.part.js": "fd06b57184a3374576ebc5add8f1748b",
"main.dart.js_226.part.js": "178aa304f3ba4af0fcc14ef418554753",
"main.dart.js_73.part.js": "e7825c78c06208e549d53fa5c8f5760a",
"main.dart.js_36.part.js": "b0b700ef1c54bb2dc724f9ecfae0de06",
"main.dart.js_107.part.js": "1b48643f77fc26c99fc4697fe3618d32",
"main.dart.js_284.part.js": "9d7307f650130281b9807d6afe98de72",
"main.dart.js_237.part.js": "ab6376b5f57dd140fda2ca6e42114d46",
"main.dart.js_127.part.js": "ed2db304f1f71d0c1f0d01d9f3b4f563",
"main.dart.js_136.part.js": "6bf293cc9397aa8747312aad7b4bd9e2",
"main.dart.js_5.part.js": "2c49487f6d64c42b7e9c23731ee7095b",
"main.dart.js_261.part.js": "65fceabcfbf25ff4a84f88bdcdedb5bd",
"main.dart.js_303.part.js": "0465be171c7859bd6adf339085dd2485",
"main.dart.js_282.part.js": "0aad6be0679ed12deb032505326276b8",
"main.dart.js_247.part.js": "859b7bc9115d80bd19b8ada71730e2a8",
"main.dart.js_151.part.js": "66112145f06b251b58850bee8081803d",
"main.dart.js_239.part.js": "597b8aab097a33a7dbf4db9139beb2b5",
"main.dart.js_1.part.js": "b871999b55cdf76c26c6d9396d4e2d83",
"main.dart.js_121.part.js": "c78ad5e5abea6d99677ec852a29c51db",
"main.dart.js_233.part.js": "ee8c347c05daa42265928281e008daf1",
"main.dart.js_258.part.js": "cdd5974983969780bcdfa349cf0f03b9",
"main.dart.js_23.part.js": "609132592b5d38b69031acf122a315ae",
"main.dart.js_285.part.js": "b6da4a47896c127df67d4da084a2c0c6",
"main.dart.js_193.part.js": "6aafcf36c34b65393532e3d60f1de2ba",
"main.dart.js_168.part.js": "64526b86fd4017a35e05c78bbeab297c",
"main.dart.js_271.part.js": "4169d561dc03ac71f9045e48046838f6",
"main.dart.js_54.part.js": "eba8030030f0b5702ad5aa1d4a073071",
"main.dart.js_225.part.js": "dd0bef12407970cc52d6d70171b876df",
"main.dart.js_70.part.js": "e48acb75dff750dab17b4bdef767e6f4",
"main.dart.js_96.part.js": "732b9358be02c9b13899e8be3eb41377",
"main.dart.js_47.part.js": "d7ca60d0540c756b65620485ad0a3f17",
"main.dart.js_97.part.js": "40251e567560ba9639bdc4c855eebb51",
"main.dart.js_147.part.js": "6f6243e6ebe99337cf3122973eb72145",
"main.dart.js_41.part.js": "6539eb9a6c874b67d4cf6aacf774b638",
"main.dart.js_265.part.js": "bca14942324feaf0088e96570d4a5c43",
"main.dart.js_26.part.js": "07954da6b2434919152de76ba69b33b6",
"main.dart.js_218.part.js": "63ef9e90cc2bbe3946e6ce903f1bce42",
"main.dart.js_177.part.js": "d11cbebe9417a23b3f4d4fd787f12201",
"main.dart.js_31.part.js": "166db2b1e2662c8e2ee1fb39d6aa6821",
"main.dart.js_119.part.js": "eabae48447fe307a24e6a706deabd393",
"main.dart.js_283.part.js": "5300ebd5e1d757640a0d76f142e33654",
"main.dart.js_153.part.js": "5bb9385e20c0a27ebbefbd64590566f8",
"main.dart.js_125.part.js": "9354a7a8c772df8204e9a57d81ceac38",
"main.dart.js_238.part.js": "93a07107d50298a4fc896734325370c4",
"main.dart.js_110.part.js": "af3b40b081bf2659aa1ea2c31f8585ec",
"main.dart.js_205.part.js": "06d3372b724a97ff17c7abbf06c04033",
"main.dart.js_262.part.js": "927a47022a792d1256f428f4827fc22d",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_276.part.js": "f2019c0fd4b80855f537f4f5ac5e13d4",
"main.dart.js_55.part.js": "98a9c73359d4082a1925cee7812f0ef7",
"main.dart.js_278.part.js": "ff18591965f930830ffd1fdf27e51182",
"main.dart.js": "2a57509aa49bbe4462291b155a57864b",
"main.dart.js_176.part.js": "70c8c431fc020769f1402f43b915b3c7",
"main.dart.js_207.part.js": "3588441bab5c81f8a86e176fa3ecb9c3",
"main.dart.js_257.part.js": "c4f46e928de56eeda1eea0006beb45a1",
"main.dart.js_170.part.js": "0a83c2a9649c3ba21a04fcf63e9c87a8",
"main.dart.js_126.part.js": "146dd0d68cee7977b6cd8e9074ecfdaf",
"main.dart.js_42.part.js": "878043b29ae85daeb7a4fd74eff6d1dd",
"main.dart.js_90.part.js": "dd348b8e4b23732fae2386cf63e77684",
"main.dart.js_224.part.js": "12d2c1fd6d78593cb56d04103a741150"};
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
