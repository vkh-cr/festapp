'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "2db2e035a282f2eeee6897c0e451e5e4",
"main.dart.js_117.part.js": "875f7e3dd2c89a1dd99acd2e05a0e2e1",
"main.dart.js_182.part.js": "836b037fba5d7b35a956e10d784b32fa",
"main.dart.js_244.part.js": "c34b1a10296fbbf4404683b21df1aa1c",
"main.dart.js_83.part.js": "89556852cd8171aad44ddf827c48b0ee",
"main.dart.js_254.part.js": "70b611fee4660d48f5014e7bb3c7ae9d",
"main.dart.js_176.part.js": "e37ed0e4df514cd282883961d4afbfe1",
"main.dart.js_96.part.js": "4943e90e8ccdbec48302cec97ecae60e",
"main.dart.js_245.part.js": "77ef9f24f2b7af1c8683f880157aff9d",
"main.dart.js_87.part.js": "8b5be11ed21be4f62e59b8589b26b7ee",
"main.dart.js_251.part.js": "cbc9ee2242c4bfdf8da46d26b1f11d0c",
"main.dart.js_126.part.js": "b775ed0007a42cd404b62492849a7f2f",
"main.dart.js_129.part.js": "66ffc92df84ab1fc9452d9997a27d908",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "d997a9af1578991932dd49272fc3c2c0",
"main.dart.js_172.part.js": "bebe5b03067bfdf93335e580f6b170d5",
"main.dart.js_40.part.js": "207fd78164e046f3eca258b93e1d8dd9",
"main.dart.js_209.part.js": "e323a89507e3420ab0e560edb99630bb",
"main.dart.js_115.part.js": "dab1de05d521cb382ec76d60718f8518",
"main.dart.js_10.part.js": "ae790dbc8a31e8c156c59365bc8dac3f",
"main.dart.js_84.part.js": "dcb2f14cbf6826ca1c3b22efa2f31a9e",
"main.dart.js_122.part.js": "cd153f7596c7e19cb2e1514d82cc6386",
"main.dart.js_230.part.js": "5ecfb67497f2ca419497569f134632e7",
"main.dart.js_213.part.js": "2bc143ab9d4e7ba10c11ae196f136659",
"main.dart.js_89.part.js": "a194deb7d3fb2fffc6a6fd0c9c900e7e",
"main.dart.js_146.part.js": "a91a5e83f9288a8d96803e0441a31908",
"main.dart.js_37.part.js": "4cbc5671795822b88d4c2f16df500752",
"main.dart.js_132.part.js": "ab0239ac432de172d94b3115ca392cc0",
"main.dart.js_165.part.js": "3ad44850da4db93378b873201624e9a2",
"main.dart.js_127.part.js": "fe7055d3cdddef460d1abb3888892307",
"main.dart.js_161.part.js": "8d0b5915140fbba200437a88b20a5a7a",
"main.dart.js_175.part.js": "f3f5a0faa55ef5545e9edec6ce1225c0",
"main.dart.js_239.part.js": "a73dc29cc7da5d87bb0cffde3f0251b9",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "fdd290b180bed4cead79690a7ca3eb65",
"main.dart.js_64.part.js": "e6b1cb0ec0c47769a787539a4436200c",
"main.dart.js_169.part.js": "ba24e86fa08bdd246a41ec2d6b79439d",
"main.dart.js_246.part.js": "2ae22558fdedf03ce032ac40e3a3cad8",
"main.dart.js_174.part.js": "f664ed6c356aac5cd4c1175aaa7658a7",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "501fcf03af45c3812d52aeab5348d8f8",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_119.part.js": "ebdeb645c95a7dc2c192c4d3496a9635",
"main.dart.js_18.part.js": "1c66564305deb32c666de4aa4379b5f8",
"main.dart.js_200.part.js": "180cc7927200da3b9ab4af05d33d9be6",
"main.dart.js_73.part.js": "c3881e9652e0158b5e6146d8e7306d5e",
"main.dart.js_101.part.js": "80798ee3bb53e5933c3516e787d63b4e",
"main.dart.js_77.part.js": "9d04b717e44e697c70efbf472941967f",
"main.dart.js_149.part.js": "3d20b755517445058e27307391853975",
"main.dart.js_67.part.js": "5b8a777b2e054ef6280491ba925e6e5c",
"main.dart.js_208.part.js": "1ff9a8ceb2595ca098db6417f660b213",
"main.dart.js_82.part.js": "c284252e1cb2a9c694b76f93d7d6eaa8",
"main.dart.js_173.part.js": "6a26bc86c6cea3b020ee774d07432af0",
"main.dart.js_106.part.js": "20d071c2d2b0967489ea92b90b9bec94",
"main.dart.js_62.part.js": "61300fdb90b58f1f2ffc8709a586a693",
"main.dart.js_207.part.js": "5b0420219a6328af2e9f7fd18c44cc3d",
"main.dart.js": "697d6c12f1749c57423ca8dfe8171b4b",
"main.dart.js_222.part.js": "26f1e26fcb0eb29e2fe3e770cadbe4aa",
"main.dart.js_232.part.js": "26cf178f3e14b432163e7e814fd74a9f",
"main.dart.js_148.part.js": "28043dc67b4ceef0bf96fca01f609d60",
"main.dart.js_124.part.js": "1476c935350479534f542aeb985a0d90",
"main.dart.js_97.part.js": "dda8c2db1cf562f7d9c7760c11f5aadf",
"main.dart.js_192.part.js": "7b82077866c0483e37f1d12e520d9e4f",
"main.dart.js_91.part.js": "9df5a7431ebb8c8b9255e8491d246a3d",
"main.dart.js_145.part.js": "69fdd6265341d9f011b9fdc6d1488493",
"main.dart.js_229.part.js": "178ab48b06d066a2c345d78ccfeda3be",
"main.dart.js_57.part.js": "29e70d7d618f96e4adc9b8e0b68e74ff",
"main.dart.js_190.part.js": "99c812efc9ecbc73c9975478a4aefce4",
"main.dart.js_104.part.js": "6f0feddb7a87d657064a46e732fffcb8",
"main.dart.js_201.part.js": "8054afd6be953fa40aa0bd7a3bca7594",
"main.dart.js_181.part.js": "0c6c824ef45fbcf9adca294c58e113d1",
"main.dart.js_33.part.js": "866d666edcd576dca9ab92983e7eda54",
"main.dart.js_217.part.js": "dc249d8c7e0aa3284d794a0a8fe01925",
"main.dart.js_34.part.js": "0ddc5205222cf952f6e1436f573254b1",
"main.dart.js_210.part.js": "64a7ed72aaa330623a4b9af044f3b6ee",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "73f295681b6d18f3e31e0bc5c717eda7",
"main.dart.js_88.part.js": "e648676165f4961cb15587202bf73ee1",
"main.dart.js_202.part.js": "c400d5e5923d141a015d619915cea190",
"main.dart.js_183.part.js": "1e71d27ca7ab9bebffc86c1d18d5d534",
"main.dart.js_167.part.js": "8713d3682f157c537202f388eabd4cd9",
"main.dart.js_203.part.js": "96c060ab8563d459647baf3c34a4913d",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "5a6e5feb3a80891a30f3e4d60284f647",
"main.dart.js_7.part.js": "8dedda4646fa3b3cb07694fa6d493106",
"main.dart.js_140.part.js": "50def5cd2014da3f8e8657f8954e3f0f",
"main.dart.js_228.part.js": "9926594528b1acbbd6994ad36c00e935",
"main.dart.js_170.part.js": "43e30ff3831315a06678f16220112e26",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "c6e4793899e5d9ebeb23f87efa67b870",
"main.dart.js_27.part.js": "bffaae0292167bcbd739052e515b6787",
"main.dart.js_156.part.js": "53bbdfb2a6c09297c2903a78f5805e2f",
"main.dart.js_219.part.js": "f22780385972b5131ea816ffef9af7c9",
"main.dart.js_116.part.js": "695de2320a3e612f6a19329f73cc9eb9",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "8c61b87a3deb5559c4123dbc25f1d136",
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
"assets/assets/translations/uk.json": "1f36bc810aad089953ddc6c4faa5ed2a",
"assets/assets/translations/pl.json": "7cea7364ffc07eeba1ddc83ba7907075",
"assets/assets/translations/sk.json": "6393634bf09f92f853024c5c254fb363",
"assets/assets/translations/en.json": "9ad09f1e8306bd6a8829aa88cbbd0a23",
"assets/assets/translations/cs.json": "d723e5d3d56d7e60f2797af0e2a4327a",
"assets/assets/translations/de.json": "34beada0ffe82776957233bbaf5b2a14",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "193db35016e3492cde161cb498ba2444",
"main.dart.js_147.part.js": "2cd5d62f48f536a7d4a3a8fd2999bbb5",
"main.dart.js_220.part.js": "77b618a50c6eb868827994fc8a906195",
"main.dart.js_25.part.js": "806fd57a550d89fbf63ca854d6c873fe",
"main.dart.js_249.part.js": "4dbb0b968287fedb29eb378738532ab8",
"main.dart.js_123.part.js": "a961da7087a6a621d9ef9ad3aab5f119",
"main.dart.js_8.part.js": "f559529aaa0131356239c6219ec8f768",
"main.dart.js_198.part.js": "1aba05e864b2b03c05e5b53b5b7b5d15",
"main.dart.js_81.part.js": "be189a9f068814900a7799273ca32355",
"main.dart.js_113.part.js": "08846bd3f5a3a4684234a6c0181b97c0",
"main.dart.js_9.part.js": "eb09a3f7e645cca052b01c591a55dc45",
"main.dart.js_242.part.js": "102ccaa5599923beea6f35cdfcc71ffd",
"main.dart.js_86.part.js": "0fd67837c6e86bf83164666bb098da24",
"main.dart.js_23.part.js": "e66007c6cbe59c3512cfd1a25d6d8c04",
"index.html": "23ad3edad526556bafd85bab999e213a",
"/": "23ad3edad526556bafd85bab999e213a",
"main.dart.js_53.part.js": "64a37c048778eaf4707e9e1b273b6ed8",
"main.dart.js_74.part.js": "4d8ea4b69a39653e4a6511f663a91f33",
"main.dart.js_235.part.js": "47e8758d7ba5e96e19a85bb3781ea831",
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
"main.dart.js_118.part.js": "19bfc67ffbaac40a19a8257854aba849",
"main.dart.js_26.part.js": "26ec7b5c005ce506cc664abf1e60057e",
"main.dart.js_20.part.js": "66bd7d559a589bca973c062d7b10ce52",
"main.dart.js_189.part.js": "eaf1d296aac9f9311f77481a8dc8adea",
"main.dart.js_214.part.js": "e93b85439f7f146107d7f3ec80f56738",
"main.dart.js_51.part.js": "2085d2bd45470c7c6f34159cb1c19758",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "e3cc3918e83cb8cc0cd2c608ba2f7c94",
"main.dart.js_1.part.js": "5784bfcf7fb337f5960de25521c09d53",
"main.dart.js_120.part.js": "bf6f7e44452020a2d45cab5b644dce9b",
"main.dart.js_63.part.js": "771b523c879e697e243e39b85f612aaa",
"main.dart.js_211.part.js": "70ef2aa0c0923c6c25721f5887afbb3d",
"main.dart.js_12.part.js": "b219f42437a82414dc1c5cbfc32859bd",
"main.dart.js_221.part.js": "c03a1bc22acc09d8c238fc20f50fe033",
"main.dart.js_137.part.js": "313fe37c4797a7747dd8f23680856ab6",
"main.dart.js_28.part.js": "27e541bfdaa2927c9bd6af2795647040",
"main.dart.js_135.part.js": "c45488cf32c87cae4fdfb15f67304c6a",
"main.dart.js_6.part.js": "6f91da282fdd51eb8aa21a197aed7d29",
"main.dart.js_256.part.js": "abcb1bfae018166f781b8726942a5914",
"main.dart.js_193.part.js": "28877c3104e831276c635c19df8813fa",
"main.dart.js_17.part.js": "c3f115656ba62fb612c1dc2375251088",
"main.dart.js_105.part.js": "358f90ac6f825a2d4803c6ab0b01a668",
"main.dart.js_231.part.js": "bf701c9473998f6f1d70e47d95e89a02",
"main.dart.js_43.part.js": "f35a53eba1ed54eb13860c635a253861",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "d96a7f68148bccd7b0567b7531c00e24",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "d518f563f8b134d9bb226bd95c7212e1",
"main.dart.js_15.part.js": "3d1bd2cf897807300bf360fc2c87c001",
"main.dart.js_19.part.js": "9f37e30f2c468185662e2d9929b9b09a",
"main.dart.js_255.part.js": "3ce199b04c0c335a672e8db88fbc2acb",
"main.dart.js_186.part.js": "4848aeda4caa416da78e9101229a7336",
"main.dart.js_163.part.js": "e5b6cb954ec3e1b19ff699bf83943368",
"main.dart.js_154.part.js": "f318791544235377fac7689ac5cb5003",
"main.dart.js_42.part.js": "80790b2ac616e00a9721fd88aee57a58",
"main.dart.js_16.part.js": "9a9d652bf787b23f8be51ebb211baada",
"main.dart.js_250.part.js": "d5cfa79fead2621b076982713eb7325a",
"main.dart.js_52.part.js": "c4acf990737ac7c942c5bf2b47b98f3b",
"main.dart.js_36.part.js": "fedafee8f60e6a87f968a4905cbecd4e",
"main.dart.js_199.part.js": "652b5576a945a0de2bb25e5a0bacd5c3",
"main.dart.js_253.part.js": "f0f1589a0c2053ac2b9f27af8478e276",
"main.dart.js_130.part.js": "9f3bc384f11f270c238e565c6485ef5e",
"main.dart.js_238.part.js": "9480099dc4b2018c3569c3dd0ef56f0d",
"main.dart.js_32.part.js": "78f3e413af3c3244c1fc38d8db9a4e18",
"main.dart.js_197.part.js": "110567b1e30393f86b9565e3d8b06f24",
"main.dart.js_3.part.js": "6175cadfcca313571ddd94a4670de4e0",
"main.dart.js_68.part.js": "8f0efaa4c0f2492a72c0cc40af513791",
"main.dart.js_38.part.js": "50d2ceb88278ad54f4be1f47305d1727",
"main.dart.js_225.part.js": "5ee18e38f1396dc602cfd9f8d748a8a8",
"main.dart.js_248.part.js": "ea923ce2859ac931397150626e349fca",
"main.dart.js_133.part.js": "e88cc935736fa2e451860df0eb215d10",
"main.dart.js_21.part.js": "ddf8b26be86d64da2320dcf81627b064",
"main.dart.js_24.part.js": "d564a27f62e77b5014ddf5f2d04b74e2",
"main.dart.js_111.part.js": "12ab00e8c153e49fe9913ac6ecf0c214",
"main.dart.js_177.part.js": "fe9ba8f43acf3f1d50446985d84e11d8",
"main.dart.js_85.part.js": "1310318f210e370690df7c704fbb8795",
"main.dart.js_243.part.js": "0cb227c92a268570c838ba6793f0de6a",
"main.dart.js_212.part.js": "afa5bcd78cd7114791ba474fc07b226f",
"main.dart.js_114.part.js": "c70bd663f72fc835f84b40796de3d1d7",
"main.dart.js_39.part.js": "153cddf9bd4b49b06e1ab83cdcf62c1e",
"main.dart.js_49.part.js": "7bfc34db067f026ce554c4ebd95abc77",
"main.dart.js_185.part.js": "5e9bc00bea3555ebbe1c55de785213a1",
"main.dart.js_46.part.js": "ad865b81b0c8f24b8112690aa04167d9",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "a3aa215706e3472997bc653a41a9e6e9",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "70da085e3b5047d142ca35df61ec1f76",
"main.dart.js_134.part.js": "6f49888d5633b3f08ba5d8edb783c8d0",
"main.dart.js_195.part.js": "c85143f4e78a5f9b91a0435b5f12cff8",
"main.dart.js_121.part.js": "3928fc68030c728964d9e0626aebd7d3",
"main.dart.js_55.part.js": "45b5cb7c2e9177f4538940d7c20772e3",
"main.dart.js_215.part.js": "beeda946b89bdaa3e81b862fd30bbbdc",
"main.dart.js_112.part.js": "f7f34549ffd9e1f127da81be625195a9",
"main.dart.js_139.part.js": "7b9361e5741c961d76aad30b9ef213a5",
"main.dart.js_143.part.js": "f67ca17eb9c9db26e71a95b6989deb9c",
"main.dart.js_80.part.js": "5e8d5d38a21c664715b0f1887b6821db",
"main.dart.js_233.part.js": "5f81dd985cd473a020566355670cb59f",
"main.dart.js_30.part.js": "16362586c79d1dfeb371aae063038603",
"main.dart.js_78.part.js": "959a5f1f3effaf0ebcd5f9affce28715",
"main.dart.js_136.part.js": "1c7593cbf3ceed11b0e446ca801b0458",
"main.dart.js_168.part.js": "b7711d88763cab0d009e1bdba033aedb",
"main.dart.js_95.part.js": "3dca18b0040316460c90394d0d87242c",
"main.dart.js_107.part.js": "4b41979889969173ad7f9d18516d850f",
"main.dart.js_29.part.js": "db53009d01158eb7cf74b9d31fc4883c",
"main.dart.js_61.part.js": "c0656ea410798ce6b6a9778368b9c7dc",
"main.dart.js_236.part.js": "d0967920ec91ba50ded3d106e51a4169",
"main.dart.js_58.part.js": "52358db3ab8c2c28d513e8fed9e9c9a6",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "32066e056230f61afe9cbca97cc0bd24",
"main.dart.js_54.part.js": "dcfb0f4509fd827f60622f7082d91a5e",
"main.dart.js_79.part.js": "4b86831ce997d687153981024dbbcce7",
"main.dart.js_92.part.js": "05ecb66b707fd37d0b7c2fdba52f9e92",
"main.dart.js_93.part.js": "72931e765197c9d26b2473129f7de9f6",
"main.dart.js_223.part.js": "018810b7a91b13d30f51be489911735f",
"main.dart.js_11.part.js": "64df7a833056923ab4cb3d28109872fe",
"main.dart.js_125.part.js": "68fd9de07a7e81a93fcbbf403ecb0ad1",
"main.dart.js_131.part.js": "daf0e80b78eb6e76480ec314e8d653fe",
"main.dart.js_226.part.js": "6cd7cf84639523d4762a3081403755b9",
"main.dart.js_14.part.js": "bcaf0730b6c60281a30607fc4613e73d",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "b33a4fb5c2ba37c47c6a5e21ad24c5a4",
"main.dart.js_100.part.js": "168f86a6b200d9c0e6fa06666b9061db",
"main.dart.js_258.part.js": "ee53b308425545a0b8a8bad4b3dce50c",
"main.dart.js_70.part.js": "3d82d4f4a8a095061a1e790bbc5d68a2",
"version.json": "8eccc37b0c2b359fa2cd6be183ebf681",
"flutter_bootstrap.js": "dff1ea7a1c4910ee2cfacbad46ec0584",
"main.dart.js_191.part.js": "932186d6168c68c1f0e25fd652c0b019"};
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
