'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "7b16c2a85141546bc5e65ba91e44cdd8",
"main.dart.js_117.part.js": "875f7e3dd2c89a1dd99acd2e05a0e2e1",
"main.dart.js_182.part.js": "836b037fba5d7b35a956e10d784b32fa",
"main.dart.js_244.part.js": "981dc6d380b6425a996d5fd3fcfd3c24",
"main.dart.js_83.part.js": "aa22df9e50dc4fe1689a6aeb805af5f6",
"main.dart.js_254.part.js": "6c7f463b39b82fe90913bec036400a24",
"main.dart.js_176.part.js": "2d6b7a1e06e76e56256f0a10cb8e9d49",
"main.dart.js_96.part.js": "6afb52defa757640917ad3296a209662",
"main.dart.js_245.part.js": "6615a343a1372bc02441e19363d6c4b7",
"main.dart.js_87.part.js": "fbd7c9a6ea0c1edd04e034d1362f4db1",
"main.dart.js_251.part.js": "83b89ec35b9eea5fa64f07a6d22efddd",
"main.dart.js_126.part.js": "607f7a2678a3441a57d2e49c0eb20406",
"main.dart.js_129.part.js": "b4d690425bee81cd8d0fd8e6125f74ec",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "d997a9af1578991932dd49272fc3c2c0",
"main.dart.js_172.part.js": "bebe5b03067bfdf93335e580f6b170d5",
"main.dart.js_40.part.js": "207fd78164e046f3eca258b93e1d8dd9",
"main.dart.js_209.part.js": "2acb20a11efb5609a68132d220e40365",
"main.dart.js_115.part.js": "7872045ede7e9f4013abd0336158f92f",
"main.dart.js_10.part.js": "32fe57d441eb780f3114b49b04641ada",
"main.dart.js_84.part.js": "6bffa907bc3ca1fc9ff207cf70111891",
"main.dart.js_122.part.js": "cd153f7596c7e19cb2e1514d82cc6386",
"main.dart.js_230.part.js": "4e99ea2e20d26fadff56dbce7d1a01c5",
"main.dart.js_213.part.js": "2bc143ab9d4e7ba10c11ae196f136659",
"main.dart.js_89.part.js": "a194deb7d3fb2fffc6a6fd0c9c900e7e",
"main.dart.js_146.part.js": "a91a5e83f9288a8d96803e0441a31908",
"main.dart.js_37.part.js": "4cbc5671795822b88d4c2f16df500752",
"main.dart.js_132.part.js": "ab0239ac432de172d94b3115ca392cc0",
"main.dart.js_165.part.js": "3ad44850da4db93378b873201624e9a2",
"main.dart.js_127.part.js": "fd201d3ce4417c91044d493c4d1e938d",
"main.dart.js_161.part.js": "bc7e4c4cb1c66bb0f8d1fa7306d938c4",
"main.dart.js_175.part.js": "c921cb907113b77ec9859deb43ad62f0",
"main.dart.js_239.part.js": "a73dc29cc7da5d87bb0cffde3f0251b9",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "51b13c9836c192cf1606713402afb046",
"main.dart.js_64.part.js": "194ed7d0ae8f6c39f49fdfb7a5e02beb",
"main.dart.js_169.part.js": "ba24e86fa08bdd246a41ec2d6b79439d",
"main.dart.js_246.part.js": "2ae22558fdedf03ce032ac40e3a3cad8",
"main.dart.js_174.part.js": "735fe27c6931ca79ffe3eef40a2afc07",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "d25238700ca92a67b9d774df2c344a21",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_119.part.js": "292798cacb213d73b45bf15123a53975",
"main.dart.js_18.part.js": "1c66564305deb32c666de4aa4379b5f8",
"main.dart.js_200.part.js": "180cc7927200da3b9ab4af05d33d9be6",
"main.dart.js_73.part.js": "c3881e9652e0158b5e6146d8e7306d5e",
"main.dart.js_101.part.js": "80798ee3bb53e5933c3516e787d63b4e",
"main.dart.js_77.part.js": "9d04b717e44e697c70efbf472941967f",
"main.dart.js_149.part.js": "3d20b755517445058e27307391853975",
"main.dart.js_67.part.js": "08bca010e606cfb2903a58ab2f46016b",
"main.dart.js_208.part.js": "81bf193686be95673695937c009edd2f",
"main.dart.js_82.part.js": "df4f828ec6daedb3231b5cff694a7744",
"main.dart.js_173.part.js": "cb716c070247389fe5f6f30febb70864",
"main.dart.js_106.part.js": "e4dd425c6898ab53258c03ae840874db",
"main.dart.js_62.part.js": "cab65865ad5a0bbe6ce4bf36bfd8b261",
"main.dart.js_207.part.js": "5b0420219a6328af2e9f7fd18c44cc3d",
"main.dart.js": "93f6c7fdbf94585d81d193947730dd26",
"main.dart.js_222.part.js": "4439c45994383eca59e70d3e20b92147",
"main.dart.js_232.part.js": "cedfcee5d2fd0a3fe26c84eea8c496fa",
"main.dart.js_148.part.js": "28043dc67b4ceef0bf96fca01f609d60",
"main.dart.js_124.part.js": "1476c935350479534f542aeb985a0d90",
"main.dart.js_97.part.js": "dda8c2db1cf562f7d9c7760c11f5aadf",
"main.dart.js_192.part.js": "a851bd759f8b94c7ad1b0ad03c7d983f",
"main.dart.js_91.part.js": "3b1128b300d7f37394b4028e47005744",
"main.dart.js_145.part.js": "a259eb78cea0c5e2b34e33e1ca4206db",
"main.dart.js_229.part.js": "178ab48b06d066a2c345d78ccfeda3be",
"main.dart.js_57.part.js": "29e70d7d618f96e4adc9b8e0b68e74ff",
"main.dart.js_190.part.js": "99c812efc9ecbc73c9975478a4aefce4",
"main.dart.js_104.part.js": "6f0feddb7a87d657064a46e732fffcb8",
"main.dart.js_201.part.js": "d340ec302686a0975e2a2b37ea6cf8e2",
"main.dart.js_181.part.js": "819bfae2058cd397b2a510e53683f119",
"main.dart.js_33.part.js": "866d666edcd576dca9ab92983e7eda54",
"main.dart.js_217.part.js": "33bd45ebdec416b117449707ba726789",
"main.dart.js_34.part.js": "0ddc5205222cf952f6e1436f573254b1",
"main.dart.js_210.part.js": "a20c136023843835df37be588d961d95",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "73f295681b6d18f3e31e0bc5c717eda7",
"main.dart.js_88.part.js": "ad857d592f5054cc96b8e9fa82fea20c",
"main.dart.js_202.part.js": "384e56113a657836aed1d61f64c1e7e6",
"main.dart.js_183.part.js": "2ad5f313e8a7d30de03cbe99e0cbe4b7",
"main.dart.js_167.part.js": "8713d3682f157c537202f388eabd4cd9",
"main.dart.js_203.part.js": "96c060ab8563d459647baf3c34a4913d",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "5a6e5feb3a80891a30f3e4d60284f647",
"main.dart.js_7.part.js": "8dedda4646fa3b3cb07694fa6d493106",
"main.dart.js_140.part.js": "6af6a536405b80cb62fb3f6ceca27b46",
"main.dart.js_228.part.js": "22cd2d7eba151445af57376f195fab8e",
"main.dart.js_170.part.js": "79f174351182288f72b88e32a82530de",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "ccf4ca650f2f00869a66f0cdf1eaa3ec",
"main.dart.js_27.part.js": "bffaae0292167bcbd739052e515b6787",
"main.dart.js_156.part.js": "53bbdfb2a6c09297c2903a78f5805e2f",
"main.dart.js_219.part.js": "de284140eb53e40398621647eeea3681",
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
"main.dart.js_147.part.js": "d43498a8395a60299545ea044e51d35b",
"main.dart.js_220.part.js": "d0b448f7da3e768e57fa93cb3c38d423",
"main.dart.js_25.part.js": "2db5f8258cefb210ea858bcfc4183eae",
"main.dart.js_249.part.js": "d6e34b1c38149bcee81c7258bcbaab27",
"main.dart.js_123.part.js": "a961da7087a6a621d9ef9ad3aab5f119",
"main.dart.js_8.part.js": "f559529aaa0131356239c6219ec8f768",
"main.dart.js_198.part.js": "fe0dacf291528397ea04b933a8869c05",
"main.dart.js_81.part.js": "4f6cba1682fceee317e22b9c3bb61f2d",
"main.dart.js_113.part.js": "ad51d41bc3397df28b84353a923c58c2",
"main.dart.js_9.part.js": "6b743f066493e1f58622ccd3b49e228e",
"main.dart.js_242.part.js": "6daa5707a7e0931612928e308d32581b",
"main.dart.js_86.part.js": "0fd67837c6e86bf83164666bb098da24",
"main.dart.js_23.part.js": "f7946934519250e67ce43c13835609bd",
"index.html": "d6bb6da39d409f91a1f9bb593ae013c5",
"/": "d6bb6da39d409f91a1f9bb593ae013c5",
"main.dart.js_53.part.js": "8350a8277a7a25ee5217c91b9e957f3c",
"main.dart.js_74.part.js": "4d8ea4b69a39653e4a6511f663a91f33",
"main.dart.js_235.part.js": "3dd3ecc6f7e8898096f7a4692b72f7d0",
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
"main.dart.js_118.part.js": "d3cdd2a37c699a53ffff8dc877449441",
"main.dart.js_26.part.js": "fad6f7387dac8611430716d29cd655f2",
"main.dart.js_20.part.js": "b80f3a3d3181283dfef9aed7ae2f10a2",
"main.dart.js_189.part.js": "eaf1d296aac9f9311f77481a8dc8adea",
"main.dart.js_214.part.js": "dd54608c3adf6eb00bd9ce546765e5fd",
"main.dart.js_51.part.js": "96a069a0a4f64c01fb52fd4ca3ba57d5",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "a771a4a49aa6f8d70f745bccec40ccbe",
"main.dart.js_1.part.js": "5fe845dbb509fed925565a0eb88b46df",
"main.dart.js_120.part.js": "bf6f7e44452020a2d45cab5b644dce9b",
"main.dart.js_63.part.js": "fdbd413c0537fe3115c1e5387b5d51d6",
"main.dart.js_211.part.js": "70ef2aa0c0923c6c25721f5887afbb3d",
"main.dart.js_12.part.js": "e4c0b010207e3f148168814891d73783",
"main.dart.js_221.part.js": "c03a1bc22acc09d8c238fc20f50fe033",
"main.dart.js_137.part.js": "48b90be83f7911acb499a19b3cce0186",
"main.dart.js_28.part.js": "27e541bfdaa2927c9bd6af2795647040",
"main.dart.js_135.part.js": "c45488cf32c87cae4fdfb15f67304c6a",
"main.dart.js_6.part.js": "6f91da282fdd51eb8aa21a197aed7d29",
"main.dart.js_256.part.js": "382bb654017196e6d77e557c09d2eead",
"main.dart.js_193.part.js": "bb634ec458025cd57e55e5b7f9b35242",
"main.dart.js_17.part.js": "08b489b43485532c725b519e498b3f8b",
"main.dart.js_105.part.js": "dd32fb8014210048a3cefd27904d7bbc",
"main.dart.js_231.part.js": "227343c7b633a6302bd64dfb97496700",
"main.dart.js_43.part.js": "f35a53eba1ed54eb13860c635a253861",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "d96a7f68148bccd7b0567b7531c00e24",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "42b9fa3af4f9a4994ae259218f8a3e55",
"main.dart.js_15.part.js": "32fb350809a1b7780708200e40cc1460",
"main.dart.js_19.part.js": "973cec3a0de4a2f7d117f9fa3c145d3f",
"main.dart.js_255.part.js": "c43e792636e2e2e49a6152ccac5eafab",
"main.dart.js_186.part.js": "4848aeda4caa416da78e9101229a7336",
"main.dart.js_163.part.js": "cab91c5624f6ed07ec7f85a9eaf14da7",
"main.dart.js_154.part.js": "f318791544235377fac7689ac5cb5003",
"main.dart.js_42.part.js": "80790b2ac616e00a9721fd88aee57a58",
"main.dart.js_16.part.js": "2f572cb825e19636c2011b94af62ffdf",
"main.dart.js_250.part.js": "d5cfa79fead2621b076982713eb7325a",
"main.dart.js_52.part.js": "0617cb83fac3254bd800e4657118c871",
"main.dart.js_36.part.js": "caf05e8b4b02830ebc983b65269b58d5",
"main.dart.js_199.part.js": "652b5576a945a0de2bb25e5a0bacd5c3",
"main.dart.js_253.part.js": "f0f1589a0c2053ac2b9f27af8478e276",
"main.dart.js_130.part.js": "ea8b9abf99a001f08877244f25037338",
"main.dart.js_238.part.js": "3f9db1b44654879c7fbf66c852a3c835",
"main.dart.js_32.part.js": "78f3e413af3c3244c1fc38d8db9a4e18",
"main.dart.js_197.part.js": "6842bb3a0e75a8df066b10343afe1057",
"main.dart.js_3.part.js": "458b6d9d66aee45aab398cbb37fe5e9b",
"main.dart.js_68.part.js": "8f2cd80958372a89849d9f4c28c497ac",
"main.dart.js_38.part.js": "50d2ceb88278ad54f4be1f47305d1727",
"main.dart.js_225.part.js": "52c0332c9c544ae848f6a2ea04d39a98",
"main.dart.js_248.part.js": "bf4732d7ae0af0603672f2bc0f58a88b",
"main.dart.js_133.part.js": "06c00e03273e5c9ff14834960dba5f3f",
"main.dart.js_21.part.js": "fd85dd839c88718cb02773c652399687",
"main.dart.js_24.part.js": "d564a27f62e77b5014ddf5f2d04b74e2",
"main.dart.js_111.part.js": "12ab00e8c153e49fe9913ac6ecf0c214",
"main.dart.js_177.part.js": "80bdcb442cef74bd13a65d7afac02698",
"main.dart.js_85.part.js": "e6a429b8242364f49522d7f5a8472bde",
"main.dart.js_243.part.js": "0cb227c92a268570c838ba6793f0de6a",
"main.dart.js_212.part.js": "8f63b140c4b141e25974fb7437cc11db",
"main.dart.js_114.part.js": "b736f3e2cfcc67c620fb2392b0302652",
"main.dart.js_39.part.js": "153cddf9bd4b49b06e1ab83cdcf62c1e",
"main.dart.js_49.part.js": "7bfc34db067f026ce554c4ebd95abc77",
"main.dart.js_185.part.js": "401fdd15563afd206c24a9296bf01a17",
"main.dart.js_46.part.js": "2f4f8cf4a39ff161561b3df435254ffd",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "a3aa215706e3472997bc653a41a9e6e9",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "70da085e3b5047d142ca35df61ec1f76",
"main.dart.js_134.part.js": "209ca3b6ad5af58f24c4433eb2d95815",
"main.dart.js_195.part.js": "c85143f4e78a5f9b91a0435b5f12cff8",
"main.dart.js_121.part.js": "bd9d012058c1b03e85d67770d454a38f",
"main.dart.js_55.part.js": "45b5cb7c2e9177f4538940d7c20772e3",
"main.dart.js_215.part.js": "beeda946b89bdaa3e81b862fd30bbbdc",
"main.dart.js_112.part.js": "f7f34549ffd9e1f127da81be625195a9",
"main.dart.js_139.part.js": "71ff374d0e3cb091ad30f46a6dd67d9d",
"main.dart.js_143.part.js": "f67ca17eb9c9db26e71a95b6989deb9c",
"main.dart.js_80.part.js": "d95b2ef046106ddce50e9d560ad80c6c",
"main.dart.js_233.part.js": "5f81dd985cd473a020566355670cb59f",
"main.dart.js_30.part.js": "16362586c79d1dfeb371aae063038603",
"main.dart.js_78.part.js": "959a5f1f3effaf0ebcd5f9affce28715",
"main.dart.js_136.part.js": "4f804e3f7929a22abe6f7fcb5e7b4e55",
"main.dart.js_168.part.js": "5f932fd22d4c935eee86488a8fd7f149",
"main.dart.js_95.part.js": "4fa29525d2ea17a7fabdbcde4c139147",
"main.dart.js_107.part.js": "4b41979889969173ad7f9d18516d850f",
"main.dart.js_29.part.js": "10d2f18abc14d5d9255b9d6af9c5b98b",
"main.dart.js_61.part.js": "c0656ea410798ce6b6a9778368b9c7dc",
"main.dart.js_236.part.js": "d0967920ec91ba50ded3d106e51a4169",
"main.dart.js_58.part.js": "52358db3ab8c2c28d513e8fed9e9c9a6",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "32066e056230f61afe9cbca97cc0bd24",
"main.dart.js_54.part.js": "dcfb0f4509fd827f60622f7082d91a5e",
"main.dart.js_79.part.js": "fa7e5ce5f72c67531682e724db920896",
"main.dart.js_92.part.js": "db9aea5d54c5e4047fe56d0653268268",
"main.dart.js_93.part.js": "72931e765197c9d26b2473129f7de9f6",
"main.dart.js_223.part.js": "018810b7a91b13d30f51be489911735f",
"main.dart.js_11.part.js": "48ba9a26de8dc489a0f5a63ffa890558",
"main.dart.js_125.part.js": "5e2139ad02e29e2352492031fe4dfba0",
"main.dart.js_131.part.js": "0ac348347343081933bfc0054e51540e",
"main.dart.js_226.part.js": "6cd7cf84639523d4762a3081403755b9",
"main.dart.js_14.part.js": "626e5011c2a628b87e11c8c2511650fe",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "b33a4fb5c2ba37c47c6a5e21ad24c5a4",
"main.dart.js_100.part.js": "168f86a6b200d9c0e6fa06666b9061db",
"main.dart.js_258.part.js": "72d70f3fb41d6554d6a56dac4fab4d01",
"main.dart.js_70.part.js": "3d82d4f4a8a095061a1e790bbc5d68a2",
"version.json": "8eccc37b0c2b359fa2cd6be183ebf681",
"flutter_bootstrap.js": "404ca40e1092587078157125bfdf6ca5",
"main.dart.js_191.part.js": "7dc91bdaf46c5bec345dc2baf638656b"};
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
