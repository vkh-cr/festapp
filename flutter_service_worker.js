'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "3edba600d20008cac2f35191b83c8229",
"main.dart.js_117.part.js": "cbd20fb25d18d7a8c30b1653d0209962",
"main.dart.js_182.part.js": "4050dbde245d477a5b29ffc9c866bbe2",
"main.dart.js_75.part.js": "f0f936482cdd76fc71b5b24006a09770",
"main.dart.js_244.part.js": "b211106baa7010cd1c3211293c5b8412",
"main.dart.js_83.part.js": "e9efab7d2b2e171f91ff26ec04089fc0",
"main.dart.js_254.part.js": "086fc879470e4ab690fada920aaa026a",
"main.dart.js_176.part.js": "71462e1736038df18a431b19cc2c7646",
"main.dart.js_96.part.js": "9f1db647470138b93b810518cc819737",
"main.dart.js_245.part.js": "45e83cd6fa1d21cfd025419e868da857",
"main.dart.js_87.part.js": "448c0e6a60cc8fcc1bd11f40b55f0b8e",
"main.dart.js_126.part.js": "778e9f55e45c295a24a03171a97a476b",
"main.dart.js_129.part.js": "9e988ac1c57b202ec15a2b1b8507f9ac",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "eee0ceedabc6f6f7c48ac0800de34e5d",
"main.dart.js_172.part.js": "0073ce04149f2ad56e252377b2f86826",
"main.dart.js_142.part.js": "36062b2d34a6740d90a9b87f83e8193f",
"main.dart.js_40.part.js": "b1e8148b9d86edad954ae4fa40e65eff",
"main.dart.js_209.part.js": "81e0c521b65671b78077bf2cb6d92e11",
"main.dart.js_115.part.js": "b90b476e3fe72132b18f8cb5f98880a6",
"main.dart.js_10.part.js": "b67d4fd1a86404fb799893ac44337320",
"main.dart.js_84.part.js": "9a7878993a004fd457223e8cfff8cc41",
"main.dart.js_122.part.js": "32da31644eee6f4dab4ce184b376d9cd",
"main.dart.js_103.part.js": "c0de91ca0d52e8810efd3368127d37f8",
"main.dart.js_153.part.js": "e221d2f7dfb03c43690aefb57946276f",
"main.dart.js_89.part.js": "f2545b45316fd882626c802470d8e79b",
"main.dart.js_71.part.js": "3d3b647272414cf777a5ca6a111cc83c",
"main.dart.js_146.part.js": "4c578fbcc8b4792168b2b12c0826b894",
"main.dart.js_37.part.js": "1ba1d8769e3943e60c4e650cf46ed2c9",
"main.dart.js_132.part.js": "99e2cee15749a5e820a61c96bd75cd46",
"main.dart.js_165.part.js": "0b5ec5a1de2bfe356fa7dca2ad990c2e",
"main.dart.js_127.part.js": "54d6514399b9fc8af71364c981a5160b",
"main.dart.js_175.part.js": "70727296d551015eb4cea8032e950242",
"main.dart.js_239.part.js": "af3717533240ad930d9cd8de5a8ceb6e",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_216.part.js": "468850610cf4bdd48c4b5b4d94539e1c",
"main.dart.js_64.part.js": "20bfa168e9b62f853ddeb18d55d2cfe5",
"main.dart.js_13.part.js": "580378e3d081b67eab95f7f151cee5b2",
"main.dart.js_246.part.js": "8ee30ad77b7ea2b62a4d0aaadeb45fe6",
"main.dart.js_174.part.js": "556f884738ee516d8b602a6b9a354a85",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "432d5427e09eabcb6c075b43d8456286",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_265.part.js": "ab792ba211b5ec367f2b049d8208922a",
"main.dart.js_31.part.js": "7f7bab98fae6a51742454f3e1bded2c6",
"main.dart.js_119.part.js": "b067d12d4487285bc82c0762ae4b9c69",
"main.dart.js_18.part.js": "d4168a74b9c37e819ce58691d631b817",
"main.dart.js_35.part.js": "76984043a37ef11f447ccb60f7944c6a",
"main.dart.js_200.part.js": "b145ee1acaf49f05bc1fd7983c21036b",
"main.dart.js_101.part.js": "f436f84c23bf9cc27e6a224ac48634f0",
"main.dart.js_77.part.js": "1793ce4bb5b07bec2ccfcdeb9da05046",
"main.dart.js_149.part.js": "9f7cfc4fca73bb869d476279c2b92075",
"main.dart.js_208.part.js": "d137fc49bb14c1e612cbbd8c1a1239c5",
"main.dart.js_82.part.js": "e34d9af55d7b3c3c760a946fc4e02eab",
"main.dart.js_173.part.js": "b8a8360accec83d5a9bea6b698ce2c43",
"main.dart.js_106.part.js": "92df4ce05715a37daac88eb4eacd6595",
"main.dart.js_273.part.js": "ddac41d03956f077493ed010728d3f5f",
"main.dart.js_62.part.js": "4814cae98a4917ad1339d278d8525841",
"main.dart.js_259.part.js": "30104ed7577480d6b183a1579ad29517",
"main.dart.js_207.part.js": "9c491da43bbdb79d9518f4bc5f8e73b2",
"main.dart.js": "e4e7eca360f77879449a7877ee0e103c",
"main.dart.js_222.part.js": "763ff57294371aeef96c8c748cbe1bf6",
"main.dart.js_232.part.js": "336eef447d8871fc2cfe71323564eefa",
"main.dart.js_148.part.js": "fd8c42bf0ca28509a2ef2e29e48ebff2",
"main.dart.js_124.part.js": "f6ad28ea5e0be648c459369108a6a52a",
"main.dart.js_50.part.js": "35d494d7e7751f8ad40af01f6a2dd305",
"main.dart.js_97.part.js": "d9c648456cec19a730c5de3932de46c7",
"main.dart.js_192.part.js": "ff011ef48e93a2cdc5bf8e61674769cf",
"main.dart.js_229.part.js": "3730a5ec41b0decefd7449594e697e59",
"main.dart.js_57.part.js": "8a21e1b5058dab9f431c17a5f6eeed13",
"main.dart.js_190.part.js": "c7d19e0cd2494c9f6f3ba44fed7b43dd",
"main.dart.js_69.part.js": "8a51f4420e2e2133d36ad73914dac7f2",
"main.dart.js_196.part.js": "b1843260bc210b8c64809d0b91d65ed4",
"main.dart.js_181.part.js": "2891c982a64d07ecd58f5349b72051f8",
"main.dart.js_270.part.js": "59f925f5d227aea4930bc95017f187d7",
"main.dart.js_108.part.js": "ec320ce95f96d553705868b04b26e1e7",
"main.dart.js_158.part.js": "03d4ae12a995d4a61d36b87865a75f98",
"main.dart.js_33.part.js": "9a4ba5051ff636741167af8d296a87bd",
"main.dart.js_269.part.js": "465fa9a5d5872aa735dc7827eefc04ba",
"main.dart.js_217.part.js": "eca5dc593f2dec2b228424ae0f0e5535",
"main.dart.js_34.part.js": "815699730a182b2c650a7bd398d81f16",
"main.dart.js_210.part.js": "f94ac3c9995287fadf0d5e2f99018d7a",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "59d4e4d1b0cc3f8f5a82e2223495dfc6",
"main.dart.js_88.part.js": "8098e8aaa8bfdefecd0158e766ab51a6",
"main.dart.js_202.part.js": "e729f210b01bf09d1ec3a1e50971a4b8",
"main.dart.js_183.part.js": "61f12b0b9065de949394dd54d27561bc",
"main.dart.js_167.part.js": "1ffb46cba048fdd11aecceaca77787d8",
"main.dart.js_203.part.js": "d896ed904ea535fc00810a422f909ec4",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "4fbe2d1b092d9ba7b8bbd03fce15b9fe",
"main.dart.js_7.part.js": "22e63df528eae98d3c780b9cdc9f689d",
"main.dart.js_140.part.js": "3e3d94e3ae875a319d7ba9093c801a78",
"main.dart.js_228.part.js": "c97190d1a4ebfa2cc2f07faf193fd1ed",
"main.dart.js_170.part.js": "c7f6b639e6ceeaf61684e1fe6805f663",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_27.part.js": "b1507ff94cb2499dd81e4d578ee63fec",
"main.dart.js_4.part.js": "5719451f85e01008fbe68be631832d78",
"main.dart.js_219.part.js": "0bf79e61b0ebd8be9cf9e063fe78f308",
"main.dart.js_116.part.js": "e207778b5136df52f9ea317ae4c55711",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "bc2432f25ccfb8559f04a89fbcfb8111",
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
"assets/assets/translations/uk.json": "67fbc85deae30cc26390e918c971dd49",
"assets/assets/translations/pl.json": "f84dc40aea972114fef98f6fc35143a4",
"assets/assets/translations/sk.json": "c2c131f5507e847372aeb69134eaaa65",
"assets/assets/translations/en.json": "ec13d454108f9bd8ccf2c34bbb4eddad",
"assets/assets/translations/cs.json": "63c7e5595d94b0d7714ab997994967c6",
"assets/assets/translations/de.json": "f2a6e3524e9d3ad4f376dae7ee70ba12",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "1c05a2406c5e9413ac359770e0672088",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_147.part.js": "15c5db7f796e165c341f470de0c04651",
"main.dart.js_263.part.js": "8447d1296f4651539d36c0af41ef4313",
"main.dart.js_220.part.js": "51dd05f5ca8db28b7e93caeb6917f861",
"main.dart.js_25.part.js": "9178ae1cbad546be7455fb303b14cbb7",
"main.dart.js_249.part.js": "28b5234194fa5f2096d81172d96e9baa",
"main.dart.js_123.part.js": "151157e9fec89e4d13a1d04bd574f58a",
"main.dart.js_241.part.js": "a1d40b03ab05d74ac66ffed14b4b5b83",
"main.dart.js_268.part.js": "b41dfea0d233a372f894bfd1072aab8d",
"main.dart.js_8.part.js": "d7d17fc3baa7cbf1e1abc01f9f2a424a",
"main.dart.js_198.part.js": "3e93dc22046888e9907be7ddeb4e7ac4",
"main.dart.js_81.part.js": "4f6e3151a10d3793088fb5b80e6393ca",
"main.dart.js_205.part.js": "665766e2dc6333c1ffa8b06d733d9169",
"main.dart.js_113.part.js": "8e47cac1336924642febd792c1001efe",
"main.dart.js_9.part.js": "765c9028671d87ed0af99e3311428303",
"main.dart.js_99.part.js": "749f7c4d21f2fb88a431f47c44faa34f",
"main.dart.js_22.part.js": "f2a48c1cc8c03cca9fd83de96df372e7",
"main.dart.js_242.part.js": "1a8590d22e5eee6b2deaab51e0403c0b",
"main.dart.js_86.part.js": "03dadaec35f57c2756dd986132a7169f",
"index.html": "c842ede8ba767ea34c70988eb78642e2",
"/": "c842ede8ba767ea34c70988eb78642e2",
"main.dart.js_94.part.js": "949c7dc802c995dd9986aaea62647da4",
"main.dart.js_98.part.js": "ad5d9573a200722277eeb02b91c62d5d",
"main.dart.js_53.part.js": "788fc80480c5c9b8358a9b449c1eb3f7",
"main.dart.js_74.part.js": "e648797fc44ed7400286990da98af10d",
"main.dart.js_235.part.js": "6308cae8a7b70ecca7fa33becac5a915",
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
"main.dart.js_118.part.js": "973d8b7eafa0f20f7ebe2c51342878de",
"main.dart.js_262.part.js": "9a98e9c8f271ecbe93d77bf3262ae0a8",
"main.dart.js_26.part.js": "e0d4fc5e6bcfab49006099789976ff15",
"main.dart.js_20.part.js": "bc496828d2a9800ff21aef3cb8088891",
"main.dart.js_189.part.js": "b650415b3a5c711bc7156b84aa688a5e",
"main.dart.js_51.part.js": "fa8db5706a687af6fd389c0da9d2a31c",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "0c0df0bb2ed232b2427775678af78637",
"main.dart.js_1.part.js": "4b41ffd4405f3bea8d9c541c8b208e08",
"main.dart.js_160.part.js": "a533e06415ac4da1c2a8a4d754fc9c80",
"main.dart.js_120.part.js": "58359820e5323b5e64492a2e46bf508b",
"main.dart.js_63.part.js": "0b5d8d8ec8252c9773245beef9f9f0d9",
"main.dart.js_211.part.js": "89f16d1954072a2e4c3b1f2006546336",
"main.dart.js_261.part.js": "75ff0aa2b74911453e33e6985a0eaed9",
"main.dart.js_12.part.js": "39ca6be8b16c596c2983496f14fb71fd",
"main.dart.js_221.part.js": "f0bd987fbf9960fc6a7b7c45362520f9",
"main.dart.js_137.part.js": "818168cf7c628b2ca1d3f2d7b2366da0",
"main.dart.js_28.part.js": "3c99e24b1a6e42c2045d8ebdd3a0d9ad",
"main.dart.js_135.part.js": "8ef05f16a10d2f49af3745d6630ea784",
"main.dart.js_138.part.js": "8c528a54beb7e76e924da61aebe6e707",
"main.dart.js_17.part.js": "91c82462c941d2a04aea1e1bf3e2ca5b",
"main.dart.js_206.part.js": "240bce258c093921ad6894fd0cdd7b69",
"main.dart.js_231.part.js": "95d66d8b340ac135aaad6f1a1a9979f7",
"main.dart.js_43.part.js": "cf915fde45cb1e31e9936446ffd4800c",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "5cebbf0f3e68695f061cf8ae7e6d9e2a",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "0bd8568bac97910f75f12798d4f326f2",
"main.dart.js_15.part.js": "4b67ffff6e81ae7020db43e59f84ccde",
"main.dart.js_151.part.js": "6514ec1a61b0606eb3c847f46ad13d13",
"main.dart.js_19.part.js": "792c2bbb5449b33ed349184d90376bf0",
"main.dart.js_186.part.js": "6b5893b76123075d05998b458104424e",
"main.dart.js_257.part.js": "40899326cf1259330c0404e629e8b222",
"main.dart.js_42.part.js": "e9c38330cc695bd69554d4c9bddb6142",
"main.dart.js_16.part.js": "1638e22ab1eaa1ba764e2980a0170731",
"main.dart.js_250.part.js": "249844cb0ebe47f8bf8bd5bc0b121d89",
"main.dart.js_52.part.js": "b565800097d40de9194b11425ae0d37a",
"main.dart.js_199.part.js": "f720c3d815993be3ca0ff9ed43f21de9",
"main.dart.js_253.part.js": "2a1d812e243ab4e6b4498932b292ad72",
"main.dart.js_130.part.js": "b6789a6aa64bc140b51622d8afb99b5c",
"main.dart.js_238.part.js": "0d49267078774735b146bbe3e65ffae7",
"main.dart.js_152.part.js": "1191c17bc524b8a742fcb9e16ce805b9",
"main.dart.js_32.part.js": "8333a237052e04104ee7188debfd1483",
"main.dart.js_197.part.js": "66867e3f8b22f1fd1c18c7e2d690b732",
"main.dart.js_3.part.js": "8a8d3030d31fd2e5ef56263c8754ee22",
"main.dart.js_68.part.js": "259430ac8056f04d6193af63f645c434",
"main.dart.js_38.part.js": "7e691c8594cb82996831f0068cab5ee2",
"main.dart.js_225.part.js": "7b35c29dc9499f377794f432a139427f",
"main.dart.js_248.part.js": "1c1b8e3c2bf3edfe5c9171cda0d5e4f1",
"main.dart.js_133.part.js": "f6e5445916277511b7bc3601c56f53d7",
"main.dart.js_21.part.js": "878d37ec09824cc4d1682925dfc78ea7",
"main.dart.js_188.part.js": "77cabe69c4891e8ab6c404767c265eda",
"main.dart.js_24.part.js": "0373834f1beda9c9965caa7203825619",
"main.dart.js_90.part.js": "75091ec5973c8be6601f3ea1ac5c9f70",
"main.dart.js_177.part.js": "40b6ff7ef8bd8a9e60348877aa2aef47",
"main.dart.js_85.part.js": "da558fc4f6ffeb6f7c4c014d73fb61e2",
"main.dart.js_243.part.js": "f01acaa248714a67953c872319885303",
"main.dart.js_260.part.js": "17cc7ec3b8f0c0eeba5fe64fa123482d",
"main.dart.js_114.part.js": "53fbba3fbed4f184c8798c4126cd7cc1",
"main.dart.js_39.part.js": "ff0358d9284e4dc10d1ff84f0fd370be",
"main.dart.js_185.part.js": "af4f728c8489be91107d222b7366f0d9",
"main.dart.js_46.part.js": "21994cc4a320ea81f020839bff5b3cbc",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "a50fac3aa168c17914a96742fd3d8e19",
"main.dart.js_171.part.js": "56d82ceec9f5cd6764aff9e79157f018",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "9d97414e3b05ac637a7679f907630ee8",
"main.dart.js_195.part.js": "729da79e18128338f4fb4c70b822ecfe",
"main.dart.js_121.part.js": "dfb24ca98c4e8318e6dade18d2c0ee8e",
"main.dart.js_55.part.js": "9553372032d7d931fc36c4bf6293f0fb",
"main.dart.js_215.part.js": "ab9dd1b05fa830d297802c04e6ac3fe5",
"main.dart.js_112.part.js": "7629bcf7e80a92ce0b7b64ed9f4590c9",
"main.dart.js_139.part.js": "07f8db96a8a672f3f1e6621257c92e7d",
"main.dart.js_143.part.js": "ffb6f625f452af4d4050180072bd8a8c",
"main.dart.js_80.part.js": "7723f9f13e1c3ce37e1208f34477d2ce",
"main.dart.js_252.part.js": "75f6979aa2ce00ab05a071f62cc876ae",
"main.dart.js_233.part.js": "307e2aa6630c5fba60bd53d2949a78be",
"main.dart.js_30.part.js": "c7dd2b183ee8fb5980bf39f96518cee4",
"main.dart.js_267.part.js": "4c79e3b5e3a0608cd1b5e0b25ec02f29",
"main.dart.js_78.part.js": "6d4ed0d7147ededca7cc8fd057da52e0",
"main.dart.js_136.part.js": "5d000018a6aac0716c785f17200a3e50",
"main.dart.js_168.part.js": "ca551e7052d3db96c73ce7938c5b10e7",
"main.dart.js_271.part.js": "9231607577ad6b04a611add3247432ba",
"main.dart.js_159.part.js": "1cf1886ef155f5debfc70e053a382764",
"main.dart.js_107.part.js": "734421b535e83a774c75e2762e994101",
"main.dart.js_29.part.js": "5097bbb59b84b501aa93fd14e744eed5",
"main.dart.js_61.part.js": "ae0668c414a3422752150384f4fb125a",
"main.dart.js_236.part.js": "3bdff0b645452d622692a835cb50d44b",
"main.dart.js_58.part.js": "c91f296e2da72f64d67e7e0e7e3c8b30",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "eeb436462606d4cf8ad720d5f7725cb1",
"main.dart.js_79.part.js": "88759e2c36cc9d0dd1cd0671eca2a64e",
"main.dart.js_109.part.js": "1fb205bce1740fcceb1be1aed89d020b",
"main.dart.js_224.part.js": "d00a77705e8d1cd318487df18b46f186",
"main.dart.js_93.part.js": "9302b764cd471366af19d8a023d21e08",
"main.dart.js_11.part.js": "854882883791b7c309670ea92192e97d",
"main.dart.js_125.part.js": "71446d7d23edc5ff29d98804ffb10d48",
"main.dart.js_131.part.js": "101442e0ec041119c0daf9079865ff87",
"main.dart.js_226.part.js": "2e54d43c64a7b6ba39a1459944823573",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "4bb886939fec59a5ac0a6748122e62c7",
"main.dart.js_178.part.js": "ac9e9df44541924f677621b4e95c8234",
"main.dart.js_258.part.js": "6b104cc75f59485d672c2c0abe089d13",
"main.dart.js_187.part.js": "0dff24f2cc125d8d17a7123e201a9467",
"version.json": "7e3bcc946586777099c31c9be6ac1258",
"main.dart.js_264.part.js": "60358643e8fa14a3900ada4db4078de2",
"flutter_bootstrap.js": "cf00917b9d1d341470e4c9a9ea86d337",
"main.dart.js_191.part.js": "48072ab5b3125c58bf3f4032f96e61f8"};
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
