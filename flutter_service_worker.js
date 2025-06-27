'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_34.part.js": "beaa90bcc9fcf46d57fa6626a5018463",
"main.dart.js_228.part.js": "ac8175bcdb2e1b73db4ea3012788b6a2",
"main.dart.js_30.part.js": "59dc06e0e27942861e42b101a0dd83e4",
"main.dart.js_201.part.js": "e8e81d075a82df43f512bd9e06e1d0e1",
"main.dart.js_289.part.js": "0b73fe915cbe50c48caaea6c7c81c516",
"main.dart.js_127.part.js": "a22a346a735de369e0edd9f74a702a15",
"main.dart.js_98.part.js": "1b027b56301fb3dc542f8c80568759b9",
"main.dart.js_17.part.js": "2f380da41d244f0d7839e97cff345d5a",
"main.dart.js_302.part.js": "fb3a5c66d21f2e217e8ae7e207b64fec",
"main.dart.js_74.part.js": "29e81ade10ec232834c8022ab1dc2cd4",
"main.dart.js_50.part.js": "7dfadeedc073759573a2984b04e41648",
"main.dart.js_51.part.js": "37d58c1305528492a6f5666aaaabf01a",
"main.dart.js_108.part.js": "2c34a9e38eccb956caa5d647b8bc89a5",
"main.dart.js_44.part.js": "e3de06d778f69324b0d06a0e8e3afc7b",
"main.dart.js_281.part.js": "9b1bae75124d51851a17d10e2fd1582f",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"main.dart.js_47.part.js": "18c42d76cb2d3d6cc26860bf1bea96f4",
"main.dart.js_45.part.js": "cb6a1946a0f5f01e5498ae98d62a71ad",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_61.part.js": "299aa9f9c8d167714408013fc1eec386",
"main.dart.js_33.part.js": "03127d544bbd567a7088b9f9a0293e60",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_125.part.js": "6f1712b1419f1baa1888e8b1ec8763e4",
"main.dart.js_160.part.js": "94c903936a76f51fe3df291f7169a026",
"main.dart.js_143.part.js": "51ea8eb773e7f02b3869b0b580000646",
"main.dart.js_164.part.js": "5e1408684b910b546aafa1d441caa912",
"main.dart.js_114.part.js": "b8d55722ca16a4d1e21aa4c1a4737b96",
"main.dart.js_64.part.js": "fa90e37865b455f17ea67120e9530bef",
"main.dart.js_138.part.js": "f4b639452bf0b2ca774f00220bbc8c0d",
"main.dart.js_305.part.js": "d82f07ae2e490180cb37993893aa64ca",
"main.dart.js_182.part.js": "6f4b040467ae0c36bbcdf4d778f5eaba",
"main.dart.js_132.part.js": "2c4d662dbf512a142a2880ca4493eb08",
"main.dart.js_242.part.js": "b3286ef53531f196e52868f3652b28e7",
"main.dart.js_82.part.js": "018242561d67c3a723346343511f0010",
"main.dart.js_144.part.js": "3e14c791877f3390c643d558533896c7",
"main.dart.js_243.part.js": "d80f4ca48173e7c43b2cdd73e495d02e",
"main.dart.js_162.part.js": "010297de9ad3561311cebbe96888423c",
"main.dart.js_278.part.js": "c0bf3800621daba7b173659f73955070",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_130.part.js": "03e988def383e3ae447147025f4e450a",
"main.dart.js_288.part.js": "791513352753178b58b2bc23b8b5cc1d",
"main.dart.js_53.part.js": "64533b7af713a1e9d066cd22c23e2c95",
"main.dart.js_55.part.js": "7ea211eb1e0e5cd94f00fb3defca4e55",
"main.dart.js_32.part.js": "60d37b5903936c374757ad7c427f2102",
"main.dart.js_163.part.js": "7fb06615e8fdedf8ee21ea15dd6261d0",
"main.dart.js_49.part.js": "4e6ef517754245ae3e4d6b1890fb6176",
"main.dart.js_214.part.js": "f5cf98d64582fb80df5d21e8bffba278",
"main.dart.js_129.part.js": "07582ed1bd90fd0ba4b7dec81aeb071c",
"main.dart.js_298.part.js": "5fa2a7b6702ae2960362b56913e98533",
"main.dart.js_77.part.js": "4df147f99df7e86bc5ce74985a103b48",
"main.dart.js_190.part.js": "59fd4be7f7b015bcac60b7202ba97f8d",
"main.dart.js_259.part.js": "2ba40ed71969c8e30b3505f74a50d453",
"main.dart.js_307.part.js": "b56ca68822e4b9a4f35764c1e488fc65",
"main.dart.js_262.part.js": "4eca605e9d583649a32aca5c8d591d87",
"main.dart.js_31.part.js": "a0a4c165b25431c11623909b44b5f222",
"main.dart.js_209.part.js": "18ee75b09322dc148224c76b1ad014c4",
"main.dart.js_141.part.js": "eb0344f482e84708be300e697f9a2661",
"main.dart.js_100.part.js": "889f44069d4581d3409134ef47441190",
"main.dart.js_252.part.js": "c2b365c2546c1ea74f1fc702410f677b",
"main.dart.js_35.part.js": "e2e3b8fa8cee7bf05df11281c378fabb",
"main.dart.js_177.part.js": "fbcbbdcfda70fb135f288f058625e2bc",
"main.dart.js_7.part.js": "f4efddafd5435b69ff9c6cef00bc2c29",
"main.dart.js_184.part.js": "dd18a9d82ea5ef423397e1664ca81ebb",
"main.dart.js_223.part.js": "d95b13d45b499c8375c7bf9d08529bf3",
"main.dart.js_227.part.js": "e270634a7dda4c83f66fdf3de0430729",
"main.dart.js_87.part.js": "a32c016304be3fe17fca9af78c67716b",
"main.dart.js_70.part.js": "27e83fddc83d912989422ddc9a71e246",
"main.dart.js_3.part.js": "f08e0a4b825bfbc40740b8a0fbf7a805",
"main.dart.js_20.part.js": "b2abf9ab33e47c881f99debc9522995d",
"main.dart.js_172.part.js": "d0b05ba3dce7472ea064c2513c6468cd",
"main.dart.js_226.part.js": "daf80714845ba8ae2d60aa6668e61da5",
"main.dart.js_13.part.js": "12df35ffb82efb9189336492875d978b",
"main.dart.js_38.part.js": "8a229ee85e56d9aa6397f5b0ca9da43e",
"main.dart.js_205.part.js": "0d3253d35955f163d82733ade22949c2",
"main.dart.js_254.part.js": "1a39fde3aef53e51b2630e3c4d292e67",
"main.dart.js_270.part.js": "d6ab4b51e03ad736630b93c16d78322b",
"main.dart.js_299.part.js": "b602639aea3b54dfc9a1c0f6692aa220",
"main.dart.js_4.part.js": "344e3c696909252e168fd6f4d7259e58",
"main.dart.js_92.part.js": "bbacb1f7fc4216be37ac967baee69285",
"main.dart.js_106.part.js": "0af5d2063c421fea38c3c652e227a3d2",
"main.dart.js_279.part.js": "95abeaf74688d5ae74223c6a47059b15",
"main.dart.js_16.part.js": "22609e1a521ef9de088553e4f6dfe5df",
"main.dart.js_79.part.js": "89f23da77e22bc92aa13dd9e211e750f",
"main.dart.js_183.part.js": "ead781ff006628702c0b8fe7d65cc966",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_121.part.js": "9b31abff7d89acbc871c8100b7cf3dd8",
"main.dart.js_185.part.js": "c24c6487c1691c4efcd5ac5d65d24519",
"main.dart.js_286.part.js": "a9cbf327382ba8b1d77b7380879b616a",
"main.dart.js_40.part.js": "b607bb9dd02503510506f9feb6fc7079",
"main.dart.js_282.part.js": "e20ba04173dc488a0bb89965c4f4d355",
"main.dart.js_241.part.js": "1f3f033f366fa001dea57583fa67c462",
"main.dart.js_56.part.js": "3d30f92750a8aba819a38f8544679e87",
"main.dart.js_15.part.js": "3738f533dd9ffc1e61508032e0981b71",
"main.dart.js_107.part.js": "2c7f9eafe1f69846aa0df2d57b3d8d12",
"main.dart.js_89.part.js": "16c5705bc5175a9e6373c5eac6a0da3b",
"main.dart.js_249.part.js": "1a26e23ff54db4749bf07071b2ade766",
"main.dart.js": "9f0742d264e4046d33ba37ba72c062d0",
"main.dart.js_296.part.js": "edd3d5f1cae9bcbe68d0548a54f8db90",
"main.dart.js_258.part.js": "8170039230c9fe49fb2f5aebda94d385",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_85.part.js": "ef6385a2441ae439192abb7cf6cd02f0",
"main.dart.js_271.part.js": "02b8238a5f5e4551bc2afd9f68c05150",
"main.dart.js_10.part.js": "a3dc4a3ee68f1228797e85f6f55dc9b5",
"main.dart.js_124.part.js": "7f1091bd3d0aac5ae805eef305d83244",
"main.dart.js_11.part.js": "08ef2a0cfb812ac10efed5ce404435e3",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_73.part.js": "795d5d7f86577f7ad1d064ba70cf5198",
"main.dart.js_260.part.js": "bede94e69abdf5c4c693e444e5bfbfc4",
"main.dart.js_95.part.js": "f743a2b6751f09eeab6e9f73bd6108dd",
"main.dart.js_215.part.js": "d4968f1105815200ed8241a15d9c0408",
"main.dart.js_198.part.js": "2de15cfe50c4dbc1128c3b843b29f05f",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_101.part.js": "6cc1235a39e52acb9382447d61df0dd0",
"main.dart.js_96.part.js": "aea2c062c12aa2de06f0009e4192898f",
"main.dart.js_131.part.js": "7644d1dadb2a4b62fdcaeef49b15a2be",
"main.dart.js_118.part.js": "c32396ae6e83509a260266a9f0d7360d",
"main.dart.js_94.part.js": "0889e690473005d795a6b6e2a8f03a9a",
"main.dart.js_140.part.js": "89d1aff6b72ec952b6a69b271e52aa93",
"main.dart.js_105.part.js": "e3eb09fbddd9b2b62a2a91bf98b3a070",
"main.dart.js_216.part.js": "ab50097b7850833a22d8037161cd450c",
"main.dart.js_1.part.js": "59f9f5986677f1be3f18b39f08fe2035",
"main.dart.js_133.part.js": "8902c33d6b43b0d806638dd9a7b292ed",
"main.dart.js_83.part.js": "2bf5f6bcd428944ee0692fe357c01bc0",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_196.part.js": "eff0b8f0d2a7f355a3a97ecea7e781ef",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_110.part.js": "6687d71314f5cf5662daefb9816a6b82",
"main.dart.js_276.part.js": "4b7feeef5bd5e3d757373ce334db8ef4",
"main.dart.js_264.part.js": "9492c0dc0c98296ae6cd33ac465cff41",
"main.dart.js_238.part.js": "abc928948cc5c62a2e0be25fc08b89a6",
"main.dart.js_78.part.js": "fbf750122500a64d3ef57968064f3d5b",
"main.dart.js_109.part.js": "477f00f1bd82e2c5dcc4257c7dce03b3",
"main.dart.js_265.part.js": "00983f61b015441597c27af9fff79ee8",
"main.dart.js_193.part.js": "eb8a93bc35182d91da0732186627b932",
"main.dart.js_41.part.js": "cbf03a76c6c461ee50328dc5f3cc0cf5",
"main.dart.js_12.part.js": "d6fda20a4507863d6052da7386a49521",
"main.dart.js_303.part.js": "202aa3de6ce6e7f6eaa87485945569e7",
"main.dart.js_76.part.js": "a17003bf9d0ec8f66e16e546104d9710",
"main.dart.js_222.part.js": "4dcdd838ec52d819e8bd2914ce845f5e",
"main.dart.js_239.part.js": "1f96b12c48f4560326708a5d81651daa",
"main.dart.js_251.part.js": "cccc51528021afd5a34e2a91183ff071",
"main.dart.js_158.part.js": "e83a8bf0db74418edd951f034893638f",
"main.dart.js_72.part.js": "18eb4607dece399035b72c6ddde81cd7",
"main.dart.js_68.part.js": "3cd4d1af752c4f81b5677dbdfdd40f3b",
"main.dart.js_291.part.js": "b2b11868f9a0cae87eb252db2a242c9b",
"main.dart.js_62.part.js": "6cc74f4d9fc735b0a8cbda4a8593e835",
"main.dart.js_180.part.js": "ab1a1cedf2139f7b7afac8e73f11851e",
"main.dart.js_240.part.js": "c627fc9f22df2ccb6400c4fead43854a",
"index.html": "bbde26569d18590851503db8150eba4e",
"/": "bbde26569d18590851503db8150eba4e",
"main.dart.js_266.part.js": "61cb5292ff51068ae2692adcd93d3ee6",
"main.dart.js_297.part.js": "583410f3c11bcc66519dbfffd119ef96",
"main.dart.js_134.part.js": "50734325d553790a1a19fb42f703fbe6",
"main.dart.js_294.part.js": "1a20dc3a49fe6e2500b4885b1c99d3d3",
"main.dart.js_181.part.js": "2376ab730c2bb7df2760fce72444a45f",
"main.dart.js_147.part.js": "f72e209a3fe7b831c55e4fa5537faed2",
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
"assets/assets/translations/cs.json": "bdbe809ab45a2a218fdc21df4393c853",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "89f3b995f789f69cad6544828133b032",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/fonts/MaterialIcons-Regular.otf": "3849aec6b21571aa35af383d7bc223a7",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"main.dart.js_43.part.js": "29fb4b10edb0c0c5f336595563e5b86b",
"main.dart.js_145.part.js": "35290c29d5f7a4bcf99ebf298825d644",
"main.dart.js_169.part.js": "162474537a5e3599f10b3c640843831b",
"main.dart.js_29.part.js": "8c948a50aee9091d1b30a479c5df17aa",
"main.dart.js_267.part.js": "b2364d0a0a39a8771488489c0ac6a643",
"main.dart.js_200.part.js": "c4317e144867900d73adce20ef240d65",
"main.dart.js_170.part.js": "3c083847c1863eaf87840d4ede283c96",
"main.dart.js_197.part.js": "c38645f7dcd862a1e14594983bed694d",
"main.dart.js_97.part.js": "f6abdd45849ef57d7e366b2eda6d8cf4",
"main.dart.js_111.part.js": "6763785dd226edd54990b85e070066d8",
"main.dart.js_211.part.js": "5a681068357c39af14eeb29b04287680",
"main.dart.js_230.part.js": "7a0be02960660efa8f0ed57f1cad9403",
"main.dart.js_245.part.js": "8a45674d14558691e25eba4f267bb9b8",
"main.dart.js_189.part.js": "a6426785c4c5438e4556edc7934daae3",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_283.part.js": "ef98af8ca1d587bda6a766b5eb29098e",
"main.dart.js_148.part.js": "65bf6d6a954d33d9720e8232b3bb2a17",
"main.dart.js_48.part.js": "b38f7992fdfa123a2b72f9463f202e5b",
"main.dart.js_161.part.js": "6f24ec9f71e430dfdc1c799c70c3e9d2",
"main.dart.js_229.part.js": "4ca7494edd8181fb837e86a7dfdfe624",
"main.dart.js_153.part.js": "bcd316d2f97c9ec0315a0d935b5a56b6",
"main.dart.js_28.part.js": "430700a81c1fce1b81689a4630168fb8",
"main.dart.js_71.part.js": "ecaf7abe3a36be35341c73e1f21441c2",
"main.dart.js_119.part.js": "9d286d4b50e912f7a8db501153d3346a",
"main.dart.js_42.part.js": "1e3e6191cffaa20b3233fbb580d503ce",
"main.dart.js_166.part.js": "5058edd9e961a206c35aa6f9f77a8e48",
"main.dart.js_191.part.js": "261e61108468df70566c816491e17634",
"main.dart.js_58.part.js": "9450b21d07a49c829e9775708fb05282",
"main.dart.js_285.part.js": "336e076c533fc28b474bfa5f8e8ac8c2",
"main.dart.js_246.part.js": "ee49927d0d72db023372879d871e9210",
"main.dart.js_59.part.js": "e0247a954804d3340cb6faa2bc28dd0a",
"main.dart.js_277.part.js": "9b3fb4a4a3a50324061b4bb90a1b9ccf",
"main.dart.js_284.part.js": "b6551aa88433531e020003bab3952089",
"main.dart.js_102.part.js": "a6a0ade7beb56748dd2855682535892c",
"main.dart.js_5.part.js": "bf7512cb370e3e8e87c0d92604924a1a",
"main.dart.js_293.part.js": "0004fbb2abcae5449a6ea66e1276d9b2",
"main.dart.js_300.part.js": "c8c735f12162301f32294ab4004f49e1",
"main.dart.js_233.part.js": "4c7a63ac9e610ce3ad046d049c468b5e",
"main.dart.js_261.part.js": "2ee1bde5d9cd8d0f1dd76cd752963ea0",
"main.dart.js_236.part.js": "fc8e6f8e142ce1b1c62ea5eae4b690c1",
"main.dart.js_135.part.js": "48a72fab02747a006cdde9ad3a4b49a0",
"main.dart.js_6.part.js": "3cb927691d178b179447fae244a028a3",
"main.dart.js_37.part.js": "0d5f0979a77e02012cad41108c7e7b95",
"main.dart.js_84.part.js": "86072f666272eba452a40f1680ad044c",
"main.dart.js_208.part.js": "a0fcba279ebb956751653a00cba5e1f1",
"main.dart.js_152.part.js": "cf76997e23619d0ef83f8f85a85e2807",
"main.dart.js_86.part.js": "ad586c824dd036d70e9f0abf17c5cfd4",
"main.dart.js_255.part.js": "07579f4fd8e80cdcb468545735cf92bf",
"main.dart.js_165.part.js": "a794e3ca3d063327ba838bf488a75569",
"main.dart.js_171.part.js": "3d29e5d5eb2f73d81fdbed340e1a0a9a",
"flutter_bootstrap.js": "8e01cf9e17b997e388b9b005c6671a22",
"main.dart.js_146.part.js": "c60bf5a1480f53751f09e06781440cab",
"main.dart.js_210.part.js": "056a3c502c8a8802e2252c1160e51b5f",
"main.dart.js_81.part.js": "b9c313bc02a482eab249891fd09220e9",
"main.dart.js_156.part.js": "2ef1da0149a317478f186179e3dda564",
"main.dart.js_174.part.js": "a7a2db57801dd62d4f24caed80ce308a",
"main.dart.js_116.part.js": "6341b057b4975d66c50235e7f5492452",
"main.dart.js_207.part.js": "b5e5501f30df88ce4159ea424449259d",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_27.part.js": "8da22acf024d693bb5deb3280da1ead0",
"main.dart.js_154.part.js": "66c90eaba951a9d578ff78001537953f",
"main.dart.js_268.part.js": "03201ef64540889e97052a6f3f5f3ec4",
"main.dart.js_112.part.js": "d936bc3484f1f5b69a684f5becb38230",
"main.dart.js_212.part.js": "81d9a0978803487456012f7eff255319",
"main.dart.js_186.part.js": "e34df11df5ee53cdac66c4cbc52ff0ec",
"main.dart.js_26.part.js": "497bc6bacfef80e821fa40358331ae99",
"main.dart.js_167.part.js": "e185be4e10304c4ebc184ec6b11f1610",
"main.dart.js_123.part.js": "61200fca440efba91804a1b4b9ed7242",
"main.dart.js_36.part.js": "78d9d9d00344a9f3da9d914865a05666",
"main.dart.js_224.part.js": "6fa18592dd33f6fa45dbb2487f7257ce",
"main.dart.js_301.part.js": "90c7a9faaf006516c75649c06febe1b5",
"main.dart.js_24.part.js": "cb385860ba78d956e865348fbd5a5b7e",
"main.dart.js_272.part.js": "fec3e391ceae7e9919cd5385cdee09d0",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_155.part.js": "4d520446833df3112f15ccc423dfb03e",
"main.dart.js_57.part.js": "2550d80e9a8d0fd0defa27eaca6cd47d",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_18.part.js": "071315377352dbdec04552781cf6d857",
"main.dart.js_292.part.js": "55a052e3bdb8f7e5cf50ce67ca4c30f6",
"version.json": "0c086cc9a8241c8bae02d6bbfae77ffa",
"main.dart.js_8.part.js": "f4973515a0c8bf1d9943b168c616402e",
"main.dart.js_9.part.js": "6ed98712892685c45955cadc3cca3368",
"main.dart.js_69.part.js": "32805b5f8751f68cc9e2310594114d19",
"main.dart.js_304.part.js": "2d356454159a0b0025ba5a335dafef3f",
"main.dart.js_139.part.js": "4106b22fc324fff78aac601dae16f2f9",
"main.dart.js_176.part.js": "25f9ff46226cab882e36b99188416f86",
"main.dart.js_275.part.js": "3de00c2e698556bf41790ce244444fc0",
"main.dart.js_256.part.js": "9859ea202dcbbe8d1cc482d8c59ec452",
"main.dart.js_237.part.js": "a39ccf07ded35f79e83ae6299adc258a",
"main.dart.js_257.part.js": "64248ac2e013f3e70818a1b6257c93ee",
"main.dart.js_93.part.js": "34cc24d3ca8a90c300628f5103b06607",
"main.dart.js_203.part.js": "eeef9ed48a4d28212d3982403d04905d",
"main.dart.js_179.part.js": "fdc5802d7fe70b49e58473d8bb6a4c76",
"main.dart.js_14.part.js": "41ec1e1f328d36d364013f662cbc29b4",
"main.dart.js_206.part.js": "fc4ed0a935ba8be11e9df8a72f457bd8",
"main.dart.js_113.part.js": "784c96bfca88e47e389991f1308553a1",
"main.dart.js_235.part.js": "9557c3f682f24400cf188599c356c87f",
"main.dart.js_273.part.js": "fadbcd4ad3166520beecbfdbc4301fb8",
"main.dart.js_39.part.js": "941668a5e8716c98a400ae73c1cc62e2",
"main.dart.js_306.part.js": "66123bbc270da3cccd78e0e04e1b6400",
"main.dart.js_250.part.js": "15ad9382a03b2510a6f38e951c66f51d",
"main.dart.js_290.part.js": "d20197c540930cef2bf3fd36252ddcbc"};
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
