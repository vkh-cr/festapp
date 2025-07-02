'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_34.part.js": "0c453112bb59224430fadd0ab333235d",
"main.dart.js_228.part.js": "66333ef6de1ea6e9eae8201282a0d2b9",
"main.dart.js_30.part.js": "3f282b91b055f1ffaa506a5ddcd69d39",
"main.dart.js_201.part.js": "898c1a05a2d77370fff342e7fe3538f3",
"main.dart.js_289.part.js": "79e817c2de7711fde55f3b125712d481",
"main.dart.js_127.part.js": "483bd8e3fec633dbe5faa963d0ab4ef4",
"main.dart.js_98.part.js": "76981f42908dbfa2ff45000edf500e83",
"main.dart.js_17.part.js": "e9798fe1008cac176aaffeb09d64852e",
"main.dart.js_302.part.js": "332b8f6807f0f197930900260030027f",
"main.dart.js_74.part.js": "8523097a331e6c1de3c4bc4631cb1dbc",
"main.dart.js_50.part.js": "4e215fd78bac9666097e2cc36028c55a",
"main.dart.js_51.part.js": "75a51092b636619b6b999bbb369d286d",
"main.dart.js_108.part.js": "cf135d65e35717563ee9177a5206d661",
"main.dart.js_44.part.js": "16ef3a314540956ed4ba4a0fca4d8731",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"main.dart.js_47.part.js": "6324e53f2ee66dadfc8b9c3a46ac3208",
"main.dart.js_45.part.js": "5042881d6ee634b545133fab77cb7ec3",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_61.part.js": "547ec2147ca6d77d6fe743775f8ec195",
"main.dart.js_33.part.js": "0d4a5e615e68cb0919c8f957a2d304a1",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_125.part.js": "a9c26a0a4a707e4d6a8276cb5b6149a5",
"main.dart.js_160.part.js": "ea478c7d49d9a159f0d6ba762aff760f",
"main.dart.js_143.part.js": "754845599cb11ced445d2e7c81061ccb",
"main.dart.js_164.part.js": "d3182f541a46394f6c828b77f54c6e3d",
"main.dart.js_295.part.js": "5c128e4c9bfec02e25c3c81a1dd22f15",
"main.dart.js_114.part.js": "f2bfef025c01779435a11609d1161211",
"main.dart.js_64.part.js": "20267bf3ab1675dc121040be41b80094",
"main.dart.js_138.part.js": "dd44201627b8638cd2bd3d6be7b8c38e",
"main.dart.js_305.part.js": "e781446737a167d3451e3b19f9155be2",
"main.dart.js_182.part.js": "1726af255b68f3e0158741ec94e45420",
"main.dart.js_132.part.js": "54614d9d69ba5bef8b3d3b27812dc7c0",
"main.dart.js_242.part.js": "8d78a6a24073fede44673e1d1808a065",
"main.dart.js_82.part.js": "8678fbe77619e5c6a989ba3cdcc183bc",
"main.dart.js_144.part.js": "32d20b500b2e718d4f3e721d5f86178f",
"main.dart.js_243.part.js": "2ce3da9ae98222a2bc8ca649f993e8eb",
"main.dart.js_175.part.js": "53e7694306c6800254cca160ca1f4518",
"main.dart.js_287.part.js": "6337e6b2848ce8603fffd6916ea6c2ff",
"main.dart.js_162.part.js": "10d5c20c1a0ffd4cb84680671d6026fd",
"main.dart.js_278.part.js": "35422702ce05992d4fcf241c03eb5863",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_130.part.js": "5999ac94cad7291f0685a397e9888c0c",
"main.dart.js_53.part.js": "c7f1d1ff74231e9a37287340fcb3eb18",
"main.dart.js_55.part.js": "f39e55e3a2ebce5c0956b5edc0db3f56",
"main.dart.js_32.part.js": "b6f4ca3fe2dc78140115d0d4125b56f5",
"main.dart.js_163.part.js": "da1d933558df8141f7f749dd13745ac2",
"main.dart.js_49.part.js": "fba395c5d0aa96a70922cd7add195bbf",
"main.dart.js_214.part.js": "6f86a0ac23bb58cbaa7c458677d1be98",
"main.dart.js_129.part.js": "9c7c04054d932dc6fc5b5534c41de4e4",
"main.dart.js_298.part.js": "991a2b2f2212ea795c091e65fc7d93c3",
"main.dart.js_159.part.js": "33be1bea3261e133160b465318857b90",
"main.dart.js_77.part.js": "4eb54407d7d1ad547ed73c112052b620",
"main.dart.js_190.part.js": "cf1de3e051182d9a934c96b8b374af44",
"main.dart.js_259.part.js": "c90f7d05fc9460309b98a2f705720cf1",
"main.dart.js_307.part.js": "09a998f5a9684342361a840532ca30b5",
"main.dart.js_262.part.js": "2d44fe40a71d13e99d0d2fd459d3f26a",
"main.dart.js_31.part.js": "1cd221da504a7aefad93fad61aab54e9",
"main.dart.js_209.part.js": "00ea5988ef223de2eb6713c2a26bd6a0",
"main.dart.js_141.part.js": "f484dcaec511ee422be2f827351ed66e",
"main.dart.js_100.part.js": "a5bfbcdb35e4bc4551b3ea495ee3fdc4",
"main.dart.js_252.part.js": "ea9fad63230b11fbf89eb0e3c8d63ac0",
"main.dart.js_35.part.js": "35e86c7cf2e6218beafee4541109a6d4",
"main.dart.js_177.part.js": "554452759af7dbc975bee76eb9b036e1",
"main.dart.js_7.part.js": "b7ae6cd726381cd0254880ab51ff7f0e",
"main.dart.js_184.part.js": "6b3f1be42dfdddd164049d08f989c019",
"main.dart.js_223.part.js": "1b21686c85b3c5000b24599da766fb0b",
"main.dart.js_227.part.js": "3b75a18e3c5f7cc1195e627299eb6b76",
"main.dart.js_87.part.js": "233e68b995c0dd290c18410c2e11a9ee",
"main.dart.js_178.part.js": "e5d8f8d64836b77f882978784510f172",
"main.dart.js_70.part.js": "b254633bd833e56414e9553632d4f45d",
"main.dart.js_3.part.js": "855859a6632c0f331611856ca3d19eaf",
"main.dart.js_20.part.js": "df4343c203fa5935a2526c72e771b260",
"main.dart.js_172.part.js": "d83c00f6d4ddd786b54292e622cdacc8",
"main.dart.js_226.part.js": "717a61a68479718ac07c4b5abbafd704",
"main.dart.js_13.part.js": "61060be7b1f335a5c76f7742cc1aee0b",
"main.dart.js_38.part.js": "f3fb590a5e07f2c928b4995deb85af9a",
"main.dart.js_205.part.js": "914faaa712af502dc2ad290fb924beaf",
"main.dart.js_254.part.js": "016c5c209daef94392ae6e3759f6cc18",
"main.dart.js_299.part.js": "d92a13cd0d0777a7b58c75d3bcffc5f6",
"main.dart.js_4.part.js": "0dbddd422b1c5a40d3f8bc0bbaaeb929",
"main.dart.js_92.part.js": "315dd6374e6ab2fd24a0658d8e5bf5cc",
"main.dart.js_106.part.js": "ad8f89dee32605e50de884e839024a38",
"main.dart.js_279.part.js": "bdf81bc7b60acefc38423f81b2cb5a40",
"main.dart.js_16.part.js": "8a85f5ccf5f44489d9eaf4385d34ff40",
"main.dart.js_79.part.js": "ef52a6169bdcd12b4c9dffa6d89e5fd0",
"main.dart.js_183.part.js": "c9c0dc5252da1a2b992d66a9c5f40719",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_121.part.js": "2a28fd0c939913557cdc1fa060ca6fc9",
"main.dart.js_185.part.js": "bb34c8fadb982aa60261fe4814126f78",
"main.dart.js_286.part.js": "5748f99b1c3ba7f71a73bb85e50a3de1",
"main.dart.js_40.part.js": "fa8461cd2674f8d6d3a7445425ed3d31",
"main.dart.js_282.part.js": "ad0f34d74e97344378bab665808958f2",
"main.dart.js_241.part.js": "044ba215a457f54798cb0da63ec84aae",
"main.dart.js_56.part.js": "43f3d2548eccde54cee80d6c7fec4d3b",
"main.dart.js_15.part.js": "30fc4e4c74dbb2ae04957a3405ec2556",
"main.dart.js_107.part.js": "18e30f8162f09e8a608d42834f862839",
"main.dart.js_89.part.js": "8b36c964cee64dc9c3e78505af0b877a",
"main.dart.js_249.part.js": "8e109ed62c9521ef8afb78afb1ed5d28",
"main.dart.js": "6079c65b2dadc4a19e0d064e86b0d0c8",
"main.dart.js_258.part.js": "f43ec37ccb3f677eed56b3257dfe2572",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_85.part.js": "a4a32f5b69b7fd584e9f7c7ac46c5bf7",
"main.dart.js_271.part.js": "106f4e6ad1754bd430c618149ede5521",
"main.dart.js_10.part.js": "60f5e5418366a5d568d88753b6928014",
"main.dart.js_124.part.js": "07e48dda293c4e75e25febfbd1fcd001",
"main.dart.js_11.part.js": "0c7269966242b6e36a9df1dd7642564f",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_73.part.js": "49926bac089675f95c83c95580298375",
"main.dart.js_260.part.js": "b53a6a0a7dd1b8d6ecba900f286b5dfb",
"main.dart.js_95.part.js": "46301605d91975fde6138613d934f107",
"main.dart.js_215.part.js": "139f26405d2770da6d0663e7e0117c8d",
"main.dart.js_198.part.js": "86314c7ef2ba7deefbc78c48ed94295f",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_101.part.js": "d26dab93bb9ded9285d826d9e1c92884",
"main.dart.js_96.part.js": "5351fde3f2f814273c81cdec8074d9b4",
"main.dart.js_131.part.js": "2f37ab9269001bdffb75aadab7827a78",
"main.dart.js_118.part.js": "d014927617d3cf79e1f635bd809be65c",
"main.dart.js_94.part.js": "39747d40633fb79e31fb8bc604844403",
"main.dart.js_140.part.js": "7e3d71d4450053a5254f5596c638ba3f",
"main.dart.js_105.part.js": "2eb2e9df65d31ea4104545614d50eca5",
"main.dart.js_216.part.js": "765a78ed2200656e5f20b75b55d98bdd",
"main.dart.js_1.part.js": "b52762dc8f2e1c1266d640c1a37a3187",
"main.dart.js_133.part.js": "4bccbe9f2584e367b594ddc8bb1e2470",
"main.dart.js_83.part.js": "61fdc479bf7688a612dca89e01df446a",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_196.part.js": "901fbc07921eb17a401bf6c64f440043",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_110.part.js": "2e7d60ed13322e9499917d94a21f4fc8",
"main.dart.js_276.part.js": "8d9c30acd48422a263f9607007b05f59",
"main.dart.js_264.part.js": "a59459f1d63d40af58c0052a60171430",
"main.dart.js_238.part.js": "9e82950e2fc90e700ea4e233266663e1",
"main.dart.js_78.part.js": "970c07896f7b387083994a0d9cf4647f",
"main.dart.js_308.part.js": "e36930f6e15bfbb415dce9a1effc9efb",
"main.dart.js_109.part.js": "9fb476814f5e82f613ff88f8729ebb39",
"main.dart.js_265.part.js": "cfc8c4b023735ca5ec9480e3862cba7a",
"main.dart.js_193.part.js": "4f8e453bca5ba61ece92e1a4e16e9d71",
"main.dart.js_41.part.js": "176fa49c7369a50e21a1bbd56d99d51c",
"main.dart.js_12.part.js": "4be92ed63724ad910ffee7fd2a717e6c",
"main.dart.js_303.part.js": "5f77ead39ad1aed24aadeab390ebe939",
"main.dart.js_76.part.js": "636471e532c9a1b38ba162a79db1db2e",
"main.dart.js_222.part.js": "8cabe683ef255e9636a8f693362b32f5",
"main.dart.js_239.part.js": "42f7970ddedf5808e7bc9fee608f0aeb",
"main.dart.js_251.part.js": "fbb0b954356ef65754b812f504f4c6db",
"main.dart.js_72.part.js": "eb27d0ccc26d1c1048379a4f7b1cca4a",
"main.dart.js_68.part.js": "97dd767caf64deabf6c4cedd980b51f5",
"main.dart.js_291.part.js": "d6040f5c0c6a5b1ff09d9d59ab851dce",
"main.dart.js_62.part.js": "b0d90d96ebf84ef2e299455f03186a25",
"main.dart.js_180.part.js": "877019e1240affc3a9186b3933b52836",
"main.dart.js_240.part.js": "27aec1484849d2a536631795c0f5302a",
"index.html": "bbde26569d18590851503db8150eba4e",
"/": "bbde26569d18590851503db8150eba4e",
"main.dart.js_266.part.js": "8f1fb5df3af77ca14f1967d4cd5c6d7b",
"main.dart.js_297.part.js": "6503d9719cff8b7315f240c18eb86f0e",
"main.dart.js_134.part.js": "8d49729ca55e9055a934e5ee341ead92",
"main.dart.js_294.part.js": "e577fe6237db3b91c1d4a399871f4312",
"main.dart.js_181.part.js": "0848b6031375e636d394c77c558ba676",
"main.dart.js_147.part.js": "427d5db7ffc44bb8dbbcb762eb1241b1",
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
"assets/assets/translations/cs.json": "a1ec8072c7c4e174c48467223083dd4f",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "9ddea3639b12a742ab8ab28773507b11",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/fonts/MaterialIcons-Regular.otf": "0099ba7151938b61f716533690a43c83",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"main.dart.js_43.part.js": "868ad2249401cbad0bf4b4aa830bd6f6",
"main.dart.js_145.part.js": "fd7a12368cf50571ecc999d549001c3e",
"main.dart.js_169.part.js": "c84efef5d6a9915ed05560ba19056031",
"main.dart.js_29.part.js": "9b3db4982d253e72e27933e8959ede33",
"main.dart.js_267.part.js": "2fcbbf10ec938ba44cf0ab0eb4fcd01a",
"main.dart.js_200.part.js": "be018c3d087bfbb819eda53ae7de2487",
"main.dart.js_170.part.js": "43d53be9dd284567d15eec493c76e8bc",
"main.dart.js_197.part.js": "8cdfd2149c64030e6548ce3fc8ec396f",
"main.dart.js_280.part.js": "f20329ab814f1256b6b306add365e408",
"main.dart.js_97.part.js": "701d4af6bd3e70fac6a6955f021b6a0e",
"main.dart.js_269.part.js": "526660df7bd999d0183568d4e44c1e33",
"main.dart.js_111.part.js": "e6afc170b00ff888f24034aba8f75730",
"main.dart.js_211.part.js": "4a0971a15d637d7a6deb51a88ca542e0",
"main.dart.js_230.part.js": "e3c76b0f570efe2d258930bc1d0dabb6",
"main.dart.js_245.part.js": "81b2866d4ac2d653b397686457b9c4df",
"main.dart.js_189.part.js": "17728835b3db27381914ea1ac48fa6cf",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_283.part.js": "7fd56583fb92de9e5bb4d543bc7d0846",
"main.dart.js_148.part.js": "bda23ed3c033d94e2bf420d7c33f4424",
"main.dart.js_48.part.js": "db75f8da533d106f4470aebfdc73b478",
"main.dart.js_229.part.js": "03834243a13eae9e598347d19c2ea727",
"main.dart.js_153.part.js": "548518527a890c79b5570dc6a4b57bad",
"main.dart.js_28.part.js": "0e2310656ed20f85dddef93bc4cfda17",
"main.dart.js_71.part.js": "1ba0cd933c6c44ed20ccf3c367f22196",
"main.dart.js_119.part.js": "e878f20ae04915fd837af6c7ca82c50a",
"main.dart.js_42.part.js": "03f54445978e85b585772ff78ff8facf",
"main.dart.js_166.part.js": "96454893c2817948776faadefee0d898",
"main.dart.js_191.part.js": "e106bbdbfa64d29ea50c787256dd8914",
"main.dart.js_58.part.js": "e9bafcfa93bf7059660d2d77e0d5ef2e",
"main.dart.js_285.part.js": "37f135db6c1ee71b761d9b827cf1983a",
"main.dart.js_246.part.js": "dab4069d6be3a338aec837fe88978e9b",
"main.dart.js_59.part.js": "673a09585ba650acf0b2e15d25c16246",
"main.dart.js_277.part.js": "e9efda095357958aea000d09510fd5af",
"main.dart.js_284.part.js": "0b7cb9136f2a1992639c7c99d9a2ea72",
"main.dart.js_102.part.js": "189b4b86b60c2cd9e307e647f66c8809",
"main.dart.js_5.part.js": "e12cf42c93eb2f5ff74107bd7b4e0396",
"main.dart.js_293.part.js": "e8567d94c5e3997ccaed2b8155f8a46d",
"main.dart.js_300.part.js": "e946e3bc717c85da319214ae9d7a9df4",
"main.dart.js_233.part.js": "5482ed4af3689200425d17a0ba4036d4",
"main.dart.js_261.part.js": "2d46bb11b4e9fd1046d6a1776a6a3bfa",
"main.dart.js_236.part.js": "82cb2c00b6998ad7dcab9a344f050288",
"main.dart.js_274.part.js": "ac8ff81f70d9c4f4dd09997bd8489af3",
"main.dart.js_157.part.js": "6fe4ab57de3c48e024afa5f708281148",
"main.dart.js_135.part.js": "8f2bcd1c1291923bc3d8df0cdd45b441",
"main.dart.js_6.part.js": "2ff979d40ce7fc8b96d5859466daf80c",
"main.dart.js_37.part.js": "40127885a6edaacb07df78e509a1ad0b",
"main.dart.js_84.part.js": "8b1b184fa051ade55cae8be175e4cfd7",
"main.dart.js_151.part.js": "4b0db7e118de4ea0a0be12d47d2a4060",
"main.dart.js_208.part.js": "ab79834716ef3b1330453f66e717fc07",
"main.dart.js_152.part.js": "a659d3b0bac9d69cc1787cae77bb1ac6",
"main.dart.js_86.part.js": "74063051c353af58a1b31e3c31efb7cb",
"main.dart.js_255.part.js": "c7d4423a224aedf89aba67abdea9e031",
"main.dart.js_165.part.js": "de7cf13c4ff855d5b7958e2e7b8cf4a3",
"main.dart.js_171.part.js": "82c9081395058aea1db14f04d6add011",
"flutter_bootstrap.js": "6e50b9b08a943a651da305bdca05f6c5",
"main.dart.js_146.part.js": "20cc56305c236a8a94978ec3d13db95b",
"main.dart.js_210.part.js": "cd422880cb5f6d10f253fe8677d36b78",
"main.dart.js_81.part.js": "c1aedf24326b180e5f783afd346083eb",
"main.dart.js_174.part.js": "1bee707a54e30bb2eee660529056751c",
"main.dart.js_116.part.js": "e18517d7e0f699d5f58358486d807277",
"main.dart.js_207.part.js": "73ce069f5a17977a16ebb415127d402a",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_27.part.js": "4cf830822b6ee05213123423625b9e4c",
"main.dart.js_154.part.js": "d4d1df93673a2d53e4f670edc7552031",
"main.dart.js_268.part.js": "bb2f9ee0b42b42bab33eed7b6634f0f5",
"main.dart.js_112.part.js": "02690e2975c28b63121184f25064af75",
"main.dart.js_212.part.js": "02e14764c37c1726bb21a01aa8783b2b",
"main.dart.js_186.part.js": "9d6b3931949a31359f1724077b44c19c",
"main.dart.js_26.part.js": "062c4a7d9d74adfa53a942c8191263bd",
"main.dart.js_167.part.js": "0d0c367265f8c95431b344f1ac0758cc",
"main.dart.js_123.part.js": "1e38feadead1ff343fa287759cb5f15b",
"main.dart.js_36.part.js": "0d2e912eaf1c2afb2eac370c4ce43fcb",
"main.dart.js_224.part.js": "5f7924ead7387a55e2e86f200a93e959",
"main.dart.js_301.part.js": "c356f749869f91a56d87445cd98a8da5",
"main.dart.js_24.part.js": "74dd788f988cdbaf4dd8a5a867e19736",
"main.dart.js_272.part.js": "08bc315efc1fa3e39ad7e360bb57f5c8",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_155.part.js": "2fc518e550195184ab285e90b499bf16",
"main.dart.js_57.part.js": "12339dedeb9b4107cfb14f0ec506f61d",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_18.part.js": "08bb02b7bf88375d1dcbe0989c7ca287",
"main.dart.js_292.part.js": "2b03584552baad812fe1297263c76b08",
"version.json": "b25cc111603334e8b6e3d2285c926ffa",
"main.dart.js_8.part.js": "9275606aaec27aa05d573d2f60f2ac74",
"main.dart.js_9.part.js": "3eb35d4308e0af23a01e5ee33f05cfac",
"main.dart.js_69.part.js": "e3fe03d8666e6498d8ebbf774e7b81ae",
"main.dart.js_304.part.js": "40f582b44235cf6f54a0537a9c9dcf44",
"main.dart.js_139.part.js": "cf1b7ba81ef8094a3a2de186318b52e2",
"main.dart.js_256.part.js": "9cfc961abbb34dc6cdff70d0846ba42a",
"main.dart.js_237.part.js": "8afe50aa0052a78535eb9aeeda789628",
"main.dart.js_257.part.js": "ae97367b3aba13854c60289c8f4ff91f",
"main.dart.js_93.part.js": "1b73594b6b8564d11f53accc0a94dcd2",
"main.dart.js_203.part.js": "cf5eebef88de8be59523d3c5ffd3f9c1",
"main.dart.js_179.part.js": "a6bcb7a3b102f83999c363c520b7616d",
"main.dart.js_14.part.js": "4d8eff41f83f9bdee91948c31e859e2e",
"main.dart.js_206.part.js": "1c9e546d2c2216bdf19e5f33d2af21a8",
"main.dart.js_113.part.js": "83b8b09fe706a39fc9d47db95931f2a3",
"main.dart.js_235.part.js": "6977d37f95d6c31b9d3f0b574a137145",
"main.dart.js_273.part.js": "e72e6030cc2e099f9e836547cd1a1692",
"main.dart.js_39.part.js": "f9deb5f9dd8bef3ef9b34abe47c18a18",
"main.dart.js_306.part.js": "5dfcd23416c3a77bba74ec5e1e008787",
"main.dart.js_250.part.js": "4dda37658c997a6f67f8421d5496ec56",
"main.dart.js_290.part.js": "1dddd9766495f3ceb5c62d69ae93e096"};
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
