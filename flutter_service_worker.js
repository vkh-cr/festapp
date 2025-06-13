'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_34.part.js": "e9c42145638c01f478f9d04644bc1c53",
"main.dart.js_228.part.js": "a5d6b1bc706d5f27dab4f8a156735805",
"main.dart.js_30.part.js": "e9deff7e9a05c9550a4cdab5d753d1ab",
"main.dart.js_90.part.js": "774f446f23fc7dd057dc946e46771ba1",
"main.dart.js_289.part.js": "049a917a6f32b161dc01cced5d02d3ff",
"main.dart.js_98.part.js": "ca6e3775972601dd4392b015df6c1b14",
"main.dart.js_302.part.js": "45c97168c5635043c7974819851d0374",
"main.dart.js_74.part.js": "fe6fc9a899222c119b3a923124323ea9",
"main.dart.js_66.part.js": "02d6fbed91e4e5449e3dd8c5853889ce",
"main.dart.js_51.part.js": "cce3bc39d9ff3516fec779ee1ac0910f",
"main.dart.js_22.part.js": "918d4b65121e2464cb25df053910a441",
"main.dart.js_108.part.js": "ce6d12722ad6ed7a6884d13b54e59b06",
"main.dart.js_281.part.js": "cbec2ae8f8be67ed4160fc377413bbd1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"main.dart.js_47.part.js": "8242314338899a1cf07abfa82ce85883",
"main.dart.js_45.part.js": "1b6a67c0e46cae9a96b7067cf95b5652",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_104.part.js": "7955d842b00444350f23c6c930f21de1",
"main.dart.js_33.part.js": "ffac089be75f3a4bd32cbcd728768716",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_160.part.js": "f4f6963b7050b666cc55ed1497526ec6",
"main.dart.js_143.part.js": "67763d8067805b56dfb2587de074925d",
"main.dart.js_164.part.js": "323dec377012c0dc4d5be791678b925b",
"main.dart.js_295.part.js": "13d607ff0519ea4428d5fc53ac5792cb",
"main.dart.js_138.part.js": "94d107cd3468836def96deab690474a5",
"main.dart.js_192.part.js": "47311deaed11fcc32b94b18291a34cfd",
"main.dart.js_305.part.js": "3563adace7a7621a62c2c124c1302ed9",
"main.dart.js_168.part.js": "c22edf1c1479aa7e41d7aa7904798be1",
"main.dart.js_182.part.js": "210634581a624ec060d20343492d0f1e",
"main.dart.js_132.part.js": "c72a60c8f741ee3803bb31a2d127addf",
"main.dart.js_242.part.js": "fcaeb485b4736a83f22441865b782370",
"main.dart.js_82.part.js": "d78d1c307f71346d9d0cfce4a2af9fc6",
"main.dart.js_144.part.js": "b3e28d8c91de2cfa9dfd2f653ac4d7fa",
"main.dart.js_175.part.js": "f7721d6f678d008b825b5d9989da428e",
"main.dart.js_287.part.js": "8080299064326faf2807fe4e2d1aa8ed",
"main.dart.js_162.part.js": "aec77d9f1ba0b240059483f8abb64c28",
"main.dart.js_278.part.js": "a67a1a78bce6cceeaf7e977fe5b51807",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_130.part.js": "6e19f012a76684aa7b187286d7ec356e",
"main.dart.js_53.part.js": "c87c1aedbacaca40abafa7dff8a88d2c",
"main.dart.js_231.part.js": "d5b3029a999fc2b7ca3754ac0b9ddba1",
"main.dart.js_55.part.js": "fb794937ea61d315e2523465a7671720",
"main.dart.js_32.part.js": "8c2f81e655ea017eb42fe3d85c325502",
"main.dart.js_163.part.js": "c93509588a56e36befc5fc6b5091b480",
"main.dart.js_49.part.js": "564a1e64066bf8379e042f596f263d09",
"main.dart.js_214.part.js": "017dc86e6d914240a9f2489237c3fcab",
"main.dart.js_129.part.js": "b1cabf0908d4c26152676206ed7c8443",
"main.dart.js_298.part.js": "2bcde143986c0535349764daf6744050",
"main.dart.js_159.part.js": "496326a6e857173cb2aca92760a94285",
"main.dart.js_77.part.js": "c8c63a476c3d1606493c85d0e766584b",
"main.dart.js_190.part.js": "dd4ff60cce4c5eb7cc56041a949794c0",
"main.dart.js_259.part.js": "83ccdbf3f6760c3be1eafedb5550afe3",
"main.dart.js_307.part.js": "3a1c0be90be59254048d514af9ce63b9",
"main.dart.js_31.part.js": "01302525eead956ac5229d7171f62361",
"main.dart.js_209.part.js": "9b92fb4d5ee8e57d2bc0ee1c5302bb68",
"main.dart.js_100.part.js": "c9073c0076140351d9512902643432e0",
"main.dart.js_80.part.js": "43ab8f20b3461161dee87eaee097feeb",
"main.dart.js_35.part.js": "72d6c174e7dca1f02d4c51c7d7b4c743",
"main.dart.js_7.part.js": "6a52c9165713e8f71f95562515076b10",
"main.dart.js_184.part.js": "5ef0020baf8ca0e547a642013c41eb6b",
"main.dart.js_223.part.js": "485fe70e0609f2e39652fc669e7af4f6",
"main.dart.js_103.part.js": "19155bdf33962b847790aa1de3a3fa30",
"main.dart.js_227.part.js": "a6b9f23f0d21714910d5c329ab75ab8d",
"main.dart.js_87.part.js": "860b65de505288c55d75f9619b734a72",
"main.dart.js_178.part.js": "0c18037fee198dc6836db6640bb3edb3",
"main.dart.js_70.part.js": "3ad191c5449586c4fe0504153e9d4823",
"main.dart.js_3.part.js": "b54a34d00fea4a9896748aa468522289",
"main.dart.js_46.part.js": "e69fb40cdb184e7dfa3ae8a717addeb8",
"main.dart.js_226.part.js": "fb5f9016ad3dd7e3c3586ccf617b3055",
"main.dart.js_126.part.js": "b8319a264e50d34578aa15c17bb430c0",
"main.dart.js_13.part.js": "adaabe00f698d4a33531068fdd4f5ee4",
"main.dart.js_38.part.js": "e442cae8153f588e534266e07026eb1e",
"main.dart.js_205.part.js": "99b6579d5afb8a98fc8213693acf4fc3",
"main.dart.js_99.part.js": "8c9c1a2b5495840305e25455f80460eb",
"main.dart.js_254.part.js": "91f305e472e9f8e361e8dc2b3452d192",
"main.dart.js_270.part.js": "917ac258b76c472fe14660bd20839589",
"main.dart.js_299.part.js": "ddb709253724a24f6698f7895728e19b",
"main.dart.js_4.part.js": "da9ce6146fadf814e67bc776f4ccb81b",
"main.dart.js_92.part.js": "6028f071baf42d28cba94994fd70b2da",
"main.dart.js_106.part.js": "5c0d3fc5f5993e4da1ad05319df5f8d5",
"main.dart.js_91.part.js": "59dcf4f7e07cbba876910f128c78350c",
"main.dart.js_16.part.js": "3ea940593c7fdf107484aab82f42592a",
"main.dart.js_199.part.js": "8bd513d4050096756c7ed14f519851c3",
"main.dart.js_79.part.js": "4a6efe67cf916a69199a3d69f8bae207",
"main.dart.js_183.part.js": "8d1e1efc3e07c539e0f254e28b1634db",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_121.part.js": "10d5e6872acb784fe54bbfeddd6dcf14",
"main.dart.js_185.part.js": "cc6b8fa0f05987c8980c091fd13ed635",
"main.dart.js_248.part.js": "59b9ba246710badee6bcba37cdff8499",
"main.dart.js_40.part.js": "0c5262841c7399dae4b1e6fff08284c6",
"main.dart.js_263.part.js": "62a386759cf115ca62e113b6c0c5bcd9",
"main.dart.js_282.part.js": "004713f1906a799e9c4796eb3f04ee07",
"main.dart.js_241.part.js": "044bfd6711432a8d68283919f205904c",
"main.dart.js_56.part.js": "3c5a0d0f2309f47270a7509ebdcbbc5f",
"main.dart.js_15.part.js": "50d76467f475c67bad59825e23f9461d",
"main.dart.js_107.part.js": "feb5e435c20ab6d3eeed6ea48ee1147d",
"main.dart.js_25.part.js": "2a684cf0a2938d294c01cedc6e6cfc03",
"main.dart.js_249.part.js": "0fe1dfe420b466ead850fee628ff3677",
"main.dart.js_202.part.js": "7adb75a3b7ccbef354a4f34f6d728cfc",
"main.dart.js": "90c787672db036a93b1bc6357448b151",
"main.dart.js_253.part.js": "b0d234675a61dabb9c7dfe5648d09a31",
"main.dart.js_60.part.js": "2775261745df8e4354f70f3d13a08da6",
"main.dart.js_258.part.js": "7e20833d9f34bd2363116886c4f72cb7",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_225.part.js": "a49e7cdbb11e75f0a05c3998caccdc0b",
"main.dart.js_85.part.js": "7e6bfef1bb7e0451d5d34e33b1617ffc",
"main.dart.js_271.part.js": "2db077e31335a1910b69d9b837646ac3",
"main.dart.js_10.part.js": "9fef7981d8bca50cee5ee845b5043c5b",
"main.dart.js_11.part.js": "ba5a8e783b0b8058072034d9e7b09b10",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_260.part.js": "fb11ac1b4aefef8d652960123c3747bb",
"main.dart.js_95.part.js": "d24827e93238b914a0c09e4690d0c498",
"main.dart.js_215.part.js": "767c0c5456d0bee17b00b209bd9a4937",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_96.part.js": "41e80fdf066f73ed075d17e3004b42ec",
"main.dart.js_131.part.js": "15b84ec0d054e626f828d768523800c3",
"main.dart.js_118.part.js": "cd2b55df663ea75bf17455a631ec2f90",
"main.dart.js_94.part.js": "7c5afb3fef49106dfbf064f2c8d4fd9e",
"main.dart.js_140.part.js": "0e3949d677d78af6c92f14e3160ae6e8",
"main.dart.js_105.part.js": "63f9e868a27bc99aa15ede4be7b6dc29",
"main.dart.js_1.part.js": "99eb88c5d9b6d98bd656e2ccea86196a",
"main.dart.js_133.part.js": "8bed9a64a661ad7280c47c237471d9f4",
"main.dart.js_195.part.js": "e96f9bd8476811afb7a1b4d017abae09",
"main.dart.js_83.part.js": "567f57e1071026310075faab69d362e6",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_196.part.js": "461947c05582f7fdae742e303bf68510",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_110.part.js": "0293a84ca6ea1d7adf8be54992cbbd89",
"main.dart.js_276.part.js": "ade94450aa0366852c4e4efc858416d9",
"main.dart.js_264.part.js": "8cf27f43175517dca7b3493a3de703f8",
"main.dart.js_67.part.js": "9450e7f222ae7cca67c9b5604ff5e456",
"main.dart.js_213.part.js": "5a76d2ab9f1514eeedb487c56dc3b126",
"main.dart.js_238.part.js": "185b7201f421f779cb596c5fa7bef7c8",
"main.dart.js_308.part.js": "4a5a49c8691fd255e3faf195a9c70339",
"main.dart.js_109.part.js": "9e43c756cfe98569382b9ec318181f27",
"main.dart.js_265.part.js": "35f7f4f2d85ace60dcb5924909761069",
"main.dart.js_41.part.js": "abec00406ac0e1bca4a1b76f09cb1bc7",
"main.dart.js_122.part.js": "5d163ff4d98967dc185ae4d1b9087eab",
"main.dart.js_12.part.js": "f24ee1ebdef71a8fa30ec6fd6f91b166",
"main.dart.js_303.part.js": "05a139680def83fb5825de3d40771f4f",
"main.dart.js_76.part.js": "fff5f8a85186fc6435cad74cd4546501",
"main.dart.js_222.part.js": "35fb5911e90dfe55cea3a43c23c87035",
"main.dart.js_239.part.js": "090f06eb724d73e3c03865bd27a9eb54",
"main.dart.js_251.part.js": "32e7ba99c1d105270b43ef9189fcd82d",
"main.dart.js_72.part.js": "23f2b89e58b9baeabef947dd7a9e59be",
"main.dart.js_68.part.js": "ab1b9ff5bb2c0beac5798e384d2a9be9",
"main.dart.js_291.part.js": "2c1588b7629567ae01411f3bf1774d60",
"main.dart.js_62.part.js": "53f9e0a98413f1b9718aca80ee9ee043",
"main.dart.js_180.part.js": "685a5b5bf26b8c6ba9361100a3e7b55d",
"main.dart.js_240.part.js": "97a7915cbe653b9c210e17df97c33042",
"index.html": "39a019a5d16bd3b358aa9b0bb507e869",
"/": "39a019a5d16bd3b358aa9b0bb507e869",
"main.dart.js_266.part.js": "7d232e048876f48731f3cbdfabad4ce0",
"main.dart.js_297.part.js": "bf199aa8372b5f9c3dde75900429cbc7",
"main.dart.js_134.part.js": "a6c1e8b6cebc0004b8d9628a1527c80c",
"main.dart.js_294.part.js": "554dd50668f8b66d736519ddd1555a11",
"main.dart.js_181.part.js": "f0a7a86b88d70ca1aff234e33798ac9c",
"main.dart.js_147.part.js": "5f4f703b7cc649ad2db9946521d03cc1",
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
"assets/NOTICES": "4bd2930db146c4653bc584bd9d65b728",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/cs.json": "797b113786d74df75ee6f385c83137f5",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "3756fe7cfa170b9d27aaa8ac2f1db972",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/fonts/MaterialIcons-Regular.otf": "3849aec6b21571aa35af383d7bc223a7",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"main.dart.js_43.part.js": "6c9de58370c92e00d493f988b6343ad4",
"main.dart.js_145.part.js": "3c6dfdf40e049d1297672309f2ad11cd",
"main.dart.js_169.part.js": "858a421db9993529a5292ff5571565b7",
"main.dart.js_29.part.js": "d7c276960aa2ac611e4ee9fd2f3bb2cd",
"main.dart.js_267.part.js": "94996d3ed490d797d52f51fbd69bc7d5",
"main.dart.js_200.part.js": "08fb38b49c206261e767f1a4e95247b7",
"main.dart.js_170.part.js": "ba47f2180a03e66260b4cd758b3e3cc7",
"main.dart.js_197.part.js": "ba5e376c67e3243ed6f11733ff77070a",
"main.dart.js_280.part.js": "7815925e6efc589eba53857474a9c295",
"main.dart.js_269.part.js": "638462b7ae3a37fbe51fe28ff80a0420",
"main.dart.js_204.part.js": "2eef29dcd72eebcb716981fd91755b0f",
"main.dart.js_232.part.js": "11acfc76e4fd8a64f9eef56d321fde7a",
"main.dart.js_211.part.js": "88f842a1e0b00cf66c9601e23d76d83a",
"main.dart.js_117.part.js": "9c52bb10ef1797f4f24d84e3cfe67037",
"main.dart.js_245.part.js": "2f8fdeef72ecf06337a0bc1a4353f477",
"main.dart.js_189.part.js": "7221378f172e7a0ce9440b1e0477595c",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_283.part.js": "6df4eac9dca5a7597d91cf642e40ae08",
"main.dart.js_188.part.js": "30f1c7cfce69142c43c98cf8afffdacd",
"main.dart.js_48.part.js": "0823e879688ee608c48b0311d27ddd87",
"main.dart.js_161.part.js": "038bace0c446757d8af176c11adc07ca",
"main.dart.js_229.part.js": "b308e38a1eb8d63f6559c65b6759bb58",
"main.dart.js_153.part.js": "889a18b284336e474d29f187cdaf1dfd",
"main.dart.js_28.part.js": "8f19c49cba349248c68767fdd7720629",
"main.dart.js_71.part.js": "e16e75604b40f9b5f6a6a36b58f97e8d",
"main.dart.js_119.part.js": "06c9b7da5ffd357b7efa7cb31c76d099",
"main.dart.js_234.part.js": "ebc2d1bc776d5da909a00bd177d1c900",
"main.dart.js_42.part.js": "70ba37c2ace672a2fd3cbae1ce2ed95a",
"main.dart.js_166.part.js": "4334901e55c3a6bf1cb91d494fe4de91",
"main.dart.js_285.part.js": "028eccf9efe6e857fbe71e11e8d21cc7",
"main.dart.js_59.part.js": "b6c03244a216990d9e386eaf472fa309",
"main.dart.js_277.part.js": "6ddfbb2f5d296ef76d30f9188923363f",
"main.dart.js_284.part.js": "be93cf52a1d97bf0bb6c05d286116041",
"main.dart.js_142.part.js": "ab9a510e009cd7d8887ce4e77a0c2de9",
"main.dart.js_5.part.js": "6fe9f2f14717536238c9033c9fcc2b2f",
"main.dart.js_173.part.js": "a51b96355ff35a6e7a95e610abcb0056",
"main.dart.js_128.part.js": "830b3e8ee88bcfe3df6e246215097a86",
"main.dart.js_244.part.js": "3c45d27ef9e6b46e1c3c33643de04e6e",
"main.dart.js_293.part.js": "938bea26542d562dcc60dc19181f908e",
"main.dart.js_300.part.js": "c07a86054e77377e502d0661acdd29c1",
"main.dart.js_261.part.js": "4d691dd17acb928602de6f20cdf9dbff",
"main.dart.js_236.part.js": "64a635a4874827fc2e4b029f193034b0",
"main.dart.js_274.part.js": "e6d8aa09329840db472f53e9f3a4712f",
"main.dart.js_157.part.js": "0fc0059c0629b9b58eaa9b3f5567d126",
"main.dart.js_6.part.js": "b05028c046406a0bd26334b4eb9adcff",
"main.dart.js_37.part.js": "6d6ec37674fde9bdea1be7345bf3fb0b",
"main.dart.js_84.part.js": "87461a1c747c1e22558b0c89755d0f16",
"main.dart.js_115.part.js": "f4714784f369e313df22774ab670a80e",
"main.dart.js_151.part.js": "bfd2e4180695269a2c960d118c85ac39",
"main.dart.js_208.part.js": "72c68438b862760e3a1732b168233719",
"main.dart.js_152.part.js": "deb6d4c2451a83658aba7ffa68c88410",
"main.dart.js_255.part.js": "3eb0911ae2bbedde8b7376d2835e185a",
"main.dart.js_165.part.js": "0d1743233e7c333992045b8a7d2d27d2",
"main.dart.js_171.part.js": "0c6e4dbce53326b7efd6f8f77c04208d",
"flutter_bootstrap.js": "823b0eaf3952396e38c1163d04f77a3a",
"main.dart.js_146.part.js": "f2b3580b1a9d63dc1111da7bec470913",
"main.dart.js_210.part.js": "355968805f8ef4c8132addbe7bdd2aa4",
"main.dart.js_81.part.js": "28262a9af15a24d2dedd3fde579f1887",
"main.dart.js_2.part.js": "946445c5a444e5be777533ccd8acd500",
"main.dart.js_207.part.js": "1d0ea43d339a4205e8ee48d5239cfee4",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_27.part.js": "b6a288ce0c8ed1553f3745f1071da695",
"main.dart.js_154.part.js": "704aa296abf9c9a1c2e5e66895690fe4",
"main.dart.js_75.part.js": "c1d2f92c7c5269f956cadad7710bc017",
"main.dart.js_112.part.js": "2dae7038ca8c0e2dd9495c954624871e",
"main.dart.js_221.part.js": "47026c7162ff234b11aa644fb4cee9a9",
"main.dart.js_26.part.js": "3644ac03885de37f3325aa438a156944",
"main.dart.js_123.part.js": "16d9416ebf8e155f18c9d58f73189551",
"main.dart.js_137.part.js": "3812f41ffb2255a0d2a05ec66a00a696",
"main.dart.js_36.part.js": "b3aea61fecb54e1a1232a152512b66fd",
"main.dart.js_301.part.js": "596ca990d170b2676c17e4f8272688fe",
"main.dart.js_24.part.js": "cd6665bd5d797fe9823b48d90cc14c3c",
"main.dart.js_272.part.js": "d986d72e9763ad6fe7bb834ba14b66d8",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_155.part.js": "f2e0f29567b31cfe9b10f71bb415ea5f",
"main.dart.js_57.part.js": "2688ce4bfd2302e546096ef63bf2dc21",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_18.part.js": "00b7be142e5ef7468cfa646b8aece8f2",
"main.dart.js_292.part.js": "374b1cfc0807b54d220aa5079fc0918d",
"version.json": "133aca532ff15dd4640a85471cced787",
"main.dart.js_8.part.js": "e8a83b89e527ed66535a824793290ea4",
"main.dart.js_9.part.js": "c9e88a4681f92d0c4bf6d5fbb7f010e3",
"main.dart.js_69.part.js": "ac8062b7c4914c4f508fd8c808fc0287",
"main.dart.js_304.part.js": "a5eb63265ec3cf51ad7772baad9ffee8",
"main.dart.js_139.part.js": "343c2e4b8c98ba0f1f7ccfc66fc45445",
"main.dart.js_176.part.js": "388648b821bde9f2506e3d673d3d73db",
"main.dart.js_275.part.js": "335f4670c559f529a2530448b626908a",
"main.dart.js_256.part.js": "37b4340f88577e9f589b762b1fca7f28",
"main.dart.js_237.part.js": "42cfeec862c6b5502d4fe5065380bcf4",
"main.dart.js_257.part.js": "845bf5d4a182abca6e65cdfd3729ef08",
"main.dart.js_54.part.js": "0c0bc37496f5d3f1e52ba56a191ff47c",
"main.dart.js_93.part.js": "354957bfe7ea46aa6ded69fc2a90d681",
"main.dart.js_179.part.js": "7f68aab294479746af916e28a7ac3e00",
"main.dart.js_14.part.js": "c04c3d6e3eb22897b1a71562f8dd62a6",
"main.dart.js_206.part.js": "41c06ede17018340c4f8deb74437961b",
"main.dart.js_113.part.js": "d132f53ee23b3a05ba673d9c33c151bf",
"main.dart.js_235.part.js": "b75993948e3c2766c57d8c3592b23c2f",
"main.dart.js_39.part.js": "39ab44226bcd19484245570598c829d3",
"main.dart.js_306.part.js": "7f7ae7dd2db68833a32fb1bab47fc393",
"main.dart.js_250.part.js": "d9b374ccaf201403b4f6355e1ad33fff",
"main.dart.js_290.part.js": "e128b7fef62198b72df92f9ed48a7a91"};
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
