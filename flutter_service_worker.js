'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "a73a3e9e176d54c037b5f81f459dd4fe",
"main.dart.js_117.part.js": "776eb4ed8577f4f23cddb3dda6509d84",
"main.dart.js_182.part.js": "18a8418b8e005fcc6d28dfbfeda5d524",
"main.dart.js_75.part.js": "354e55bbc0b70aba6296e07b5fefb1d0",
"main.dart.js_83.part.js": "d381e54ff9fa7156df564dec6028e090",
"main.dart.js_176.part.js": "7fa4b1eb9ba931524b02e38dff4832b6",
"main.dart.js_87.part.js": "c1ff84bb1f71383f7ea506a5d1d6994d",
"main.dart.js_126.part.js": "80bdd0928b87daa1d1c5e7b8c7240308",
"main.dart.js_129.part.js": "c1adde23d39f34b5bafed5c7eff20d8c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "6f42997d8126b4efc1ee6271e0fd15ef",
"main.dart.js_218.part.js": "ed7565f03d10e8a8b0ec8d6bdd892cfe",
"main.dart.js_40.part.js": "cd132118ba55cf0a8905ef01046546f3",
"main.dart.js_48.part.js": "2b1d1532effd5cda2c8da752ec90b4e8",
"main.dart.js_209.part.js": "6d67c34ddf88d1bfa844ecf6af4cffcf",
"main.dart.js_115.part.js": "f1c7c411b7e79a2570431765eb24763f",
"main.dart.js_10.part.js": "c407617d6ad1b46b9aa6d536de122475",
"main.dart.js_66.part.js": "18deb98502db43fdf5000f4ec1099e43",
"main.dart.js_84.part.js": "2311a7c1fab8d6d11d26b01ff846ebcc",
"main.dart.js_122.part.js": "15dc6f1333c3ee08b81dd303bf733886",
"main.dart.js_230.part.js": "a4e96d35f688016afbcd4704739f990e",
"main.dart.js_213.part.js": "9c3e1548c152e76fdfeb9289a23745cb",
"main.dart.js_153.part.js": "b87160aed15c87b373e049d6eb080f0e",
"main.dart.js_41.part.js": "d3aec813cee4b85f6fd24cb2d09c1a43",
"main.dart.js_89.part.js": "5b19a3c3c65d29c6e49b7b7922a092d7",
"main.dart.js_146.part.js": "9089346af0ebc86860266783e32b865a",
"main.dart.js_37.part.js": "6904a550c6ad431e5f046ffa239e6f95",
"main.dart.js_165.part.js": "8791904de42027839520bfb486a645df",
"main.dart.js_127.part.js": "20147fe0cf942a241f0b193396307cea",
"main.dart.js_161.part.js": "ef151bdc3d2b242d01b8856408391f4d",
"main.dart.js_239.part.js": "48b7c14db235653971a5efa3df85c040",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "0a31384fb95c64ede06edad6a0265ba1",
"main.dart.js_216.part.js": "4f49ed2b821d0a1d8705ff2a9ba4f552",
"main.dart.js_64.part.js": "2f4c50930e6b652fb35dfa0ddb71c6ff",
"main.dart.js_169.part.js": "5386b6a3385a907d0225f7cec9e10993",
"main.dart.js_174.part.js": "02241f1cbc16311d7e9eef9ac47ecb97",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "456129bd7e98cf0a52db5dc6fcab3d56",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "cfd73fc17875bb068265e8260ca37e6f",
"main.dart.js_119.part.js": "78e1bb65d6fd98fcf1ecdc2610356bda",
"main.dart.js_18.part.js": "0103783ed3a8527b5e77fe79eff0722d",
"main.dart.js_35.part.js": "ff17d07c036e2f220768cdd5f2cc258f",
"main.dart.js_200.part.js": "43bfc64d5b2da94407657fd47802981e",
"main.dart.js_73.part.js": "87f4870d0b1e22c274db4da7a25f162f",
"main.dart.js_101.part.js": "42947c0a944103dd592edbc7f2f8f424",
"main.dart.js_77.part.js": "c36de4505466209b72b3d98ec80e67fc",
"main.dart.js_149.part.js": "681acfcb39e35096fd06e74f5161f316",
"main.dart.js_208.part.js": "1f0400fd7a7dc73870e68b816dd72825",
"main.dart.js_82.part.js": "a3a21e7f399ea68732ef95fc76978cc1",
"main.dart.js_173.part.js": "28b724ac352afb4b4ff4e025e54425f0",
"main.dart.js_106.part.js": "71155a3e549f33f61601d0ea08c95fe9",
"main.dart.js_207.part.js": "21861039d097cfa6ce6f344cf40b9e0e",
"main.dart.js": "a0a4fec14c34c77b0182d0eb8a093a62",
"main.dart.js_222.part.js": "4cb1dc1879cb957960b9c4029a0cd2b1",
"main.dart.js_232.part.js": "6ab79eecdcac6ae06ecbb4d4b881382c",
"main.dart.js_124.part.js": "82af49859f4aede5e83adc13ed533604",
"main.dart.js_50.part.js": "bf4751e6c512072c85970f18c12b153d",
"main.dart.js_192.part.js": "fc9c4905f34ccdf6ec7472a943877d65",
"main.dart.js_91.part.js": "5fc52f32136b75a8476ff0e36d866cb3",
"main.dart.js_145.part.js": "668e639897c039cd9070ae47f575105f",
"main.dart.js_229.part.js": "e3f75b82d3578e3641e1a044aca9bf76",
"main.dart.js_57.part.js": "0961128e1e7f7974e65c6f78b1b39f47",
"main.dart.js_104.part.js": "c76ed167f931d7a6e008309985dd669b",
"main.dart.js_201.part.js": "0159bfc89156d45b6ba08866d5f11c24",
"main.dart.js_69.part.js": "0ccf035600c47a107103f56fdf77aeb7",
"main.dart.js_196.part.js": "d09475aab9eb155c3f344aaf5ac5d63a",
"main.dart.js_181.part.js": "96f60a3e12a53bd35a74aa2f76be1f7a",
"main.dart.js_108.part.js": "242611469cc2b51a4cb584ead13bd353",
"main.dart.js_158.part.js": "1b0121fd5909eef0d860ec672e8073c6",
"main.dart.js_33.part.js": "dc1be027ec6d215ebef2942c422bf211",
"main.dart.js_217.part.js": "5ec13ac723419087943b77f43adbd7f9",
"main.dart.js_34.part.js": "ccd5521b2a003f1408305e9a85676a85",
"main.dart.js_210.part.js": "6eae534806786cad120fc90d672600dc",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "3f8ca865b5ab8d7ebe94cf1cd3c1d0ab",
"main.dart.js_88.part.js": "cdd7b94eaa8a92db37682d69897d5455",
"main.dart.js_183.part.js": "51a306defe998d695ac2955a7b87b399",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_7.part.js": "ab2f41a661c247d24d1e8857d7971f77",
"main.dart.js_140.part.js": "9e449908bbc47016388e0c3732e0aac0",
"main.dart.js_228.part.js": "87dd305dbc98ec765fcbce9160d79716",
"main.dart.js_170.part.js": "ccff6e99c0b10239c51198158a1e966f",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "0cd2388ec2baebfe6e4b5d6bbd01b34d",
"main.dart.js_27.part.js": "71d2b84b7cb63705a70a18a3acd74e79",
"main.dart.js_156.part.js": "4ee765d9891cf6a66ca1441463b0473c",
"main.dart.js_219.part.js": "a93c81237a32278b8f9fbae5056dbb94",
"main.dart.js_116.part.js": "a53da275373099e0752e456a8cd0dea8",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "d2dbd2e9e288632bf6ff73dbf8926d11",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "9d5719bf0852806c1dd70d4a1a97dc51",
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
"assets/assets/translations/uk.json": "a88b1c3a097d91249edda40144c5cd3e",
"assets/assets/translations/pl.json": "8a2b467bcc5301150f4ac72290d1bbd0",
"assets/assets/translations/sk.json": "9416fa3e4a44d4a4450ac6dee89df82b",
"assets/assets/translations/en.json": "7c180b167bd195ca8e204928f418cec6",
"assets/assets/translations/cs.json": "a67d234f5f9f037cfde9ba6323312bce",
"assets/assets/translations/de.json": "c0bb019cf7b419dc53884e3a5ef3e6d5",
"assets/assets/images/map/card.svg": "77d6cd4a052dbdaad1c5da8a5e3f1375",
"assets/assets/images/map/atm.svg": "693a9abb7145add2961453afa3f0ac4c",
"assets/assets/images/map/grass.svg": "fe32d32a171a6e76a8a7088644b07e21",
"assets/assets/images/map/cross.svg": "aaecd193906a34ea7845c2feef628607",
"assets/assets/images/map/tools.svg": "5f6bbbef105b3d381322da02d6beef43",
"assets/assets/images/map/food.svg": "41a9921e7a33d4ed62eb7fb0b8f176e7",
"assets/assets/images/map/ball.svg": "061bde98a15c0f2f3818195d9cce8a5f",
"assets/assets/images/map/beer.svg": "3884ec5eef24a8634310eaa4b35d8b45",
"assets/assets/images/map/info.svg": "be79865eee723da1a799860658dc439c",
"assets/assets/images/map/bed.svg": "c930d46ac91a70932bd61e2e17033744",
"assets/assets/images/map/speaker.svg": "92bad3443727dc5acf679cd5e8582db1",
"assets/assets/images/map/church.svg": "d2840a23cbad788040bf5a41a9e88dbe",
"assets/assets/images/map/cart.svg": "fb6d41303c00806c8e3f59b20351670d",
"assets/assets/images/map/conversation.svg": "5f53e729612a0e78a09e7d3c0fd53fd6",
"assets/assets/images/map/coffee.svg": "75c95a698eb7162db5342b082d751edf",
"assets/assets/images/map/wine.svg": "d2c55fa3b4051c39d87edee9a280a50e",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/NOTICES": "aa859f023e8e5aa082620769053a47ca",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "49ca0a656725c4f34199825df6a21ff0",
"assets/AssetManifest.bin.json": "c15f1bd0233f6802b344183f28ce1589",
"main.dart.js_155.part.js": "c439fb3fd413bd757eb57572a8147647",
"main.dart.js_60.part.js": "05a70d2d593e91fbed998be1c4c0ec48",
"main.dart.js_220.part.js": "bef98f0012edc76fe41ce58a226287ff",
"main.dart.js_25.part.js": "a9953d7b81e19d1684919a8acb547cdd",
"main.dart.js_123.part.js": "62e89120815259ee8e0846df33e276f1",
"main.dart.js_8.part.js": "199e752d1e209c3d049e2df2a6cfb840",
"main.dart.js_198.part.js": "21e9c3677167c36835faf428f50e45fb",
"main.dart.js_81.part.js": "ff3cfb4d37f701af2137cd91b355a61f",
"main.dart.js_205.part.js": "a986ef843b7c1249906b9d460edf4de0",
"main.dart.js_113.part.js": "9b748c46e0b46ac324ef48d88fb3f34c",
"main.dart.js_9.part.js": "7ee9347500861b945a2a74096407ed78",
"main.dart.js_99.part.js": "e2319e5e68e20bb25439a7c9040640e3",
"main.dart.js_22.part.js": "b8abb450904c29c0dcb04424bec4bff9",
"main.dart.js_23.part.js": "8fa5ea7afa2ff640f8788f2b3d544413",
"index.html": "f8a92a917a3b45cedff1f13d5c97a73f",
"/": "f8a92a917a3b45cedff1f13d5c97a73f",
"main.dart.js_94.part.js": "2f149ed060ac6a45dcbcaf8f4a664361",
"main.dart.js_98.part.js": "c0a1e649798e3d3657301dad9b937fd9",
"main.dart.js_53.part.js": "34d0c7c06f925b17b2898ebe8dbc2532",
"main.dart.js_74.part.js": "b8751f2b89901d05a7dd2fd852ff6256",
"main.dart.js_235.part.js": "37465c66ee73e043bd8d8a58572f68b9",
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
"main.dart.js_118.part.js": "e2f02616686e90accbd484d98401a862",
"main.dart.js_26.part.js": "69f7463e0f245f2be2c0d61822f14b01",
"main.dart.js_240.part.js": "131ee8bf736e8d469c1ebe61b7e195e6",
"main.dart.js_214.part.js": "50091111565f7ffc2bb8b87a6ac240fc",
"main.dart.js_51.part.js": "7114ea0c25b3b9e3b0d00a04959f7b13",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "1a409d2cc5605e8eb23dc02e577d79c3",
"main.dart.js_72.part.js": "ae61bb73d9347122606a562b9fd0a198",
"main.dart.js_1.part.js": "fd6be32650aefdb3b9d573fd820b2d40",
"main.dart.js_160.part.js": "0d4f55bd9157e671aa9885c648a2f2c9",
"main.dart.js_120.part.js": "705dcaca503871faf1d9528aa8fd07b4",
"main.dart.js_63.part.js": "d7a4bd2a02bb8e0d52a5fdbf54481720",
"main.dart.js_211.part.js": "ee244cc3e496b8fd3be5ebb7276eee55",
"main.dart.js_12.part.js": "5079a0f05cfde5276ca37631413cc2d9",
"main.dart.js_157.part.js": "8f2fd96f03bbd3b7c7c5a6ad1ebdd8c5",
"main.dart.js_221.part.js": "bfe7e492d0e0722ef5505373335d66ef",
"main.dart.js_137.part.js": "d4c650a0bf714f5ca91a64c0e2965f33",
"main.dart.js_28.part.js": "d97cc6e36775c45bf17c733c8b063282",
"main.dart.js_135.part.js": "fda193b1925aadee9b65510aa70710aa",
"main.dart.js_6.part.js": "df7be87cc58e2d5a293502b7d606d1f3",
"main.dart.js_138.part.js": "be772de628707dd6631745eec270edef",
"main.dart.js_17.part.js": "772905089f91b8fb668242bfd617290d",
"main.dart.js_105.part.js": "5420dafd28b71cfef333b186ba187782",
"main.dart.js_206.part.js": "c647ac8881ea86aae809ec30f70869c1",
"main.dart.js_231.part.js": "94813eef40b889b6d6505279b323d2bb",
"main.dart.js_43.part.js": "89d7ecaa11f800cb32c87b5cc7e5a672",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "36a60555b918269c795e7d839a485c7f",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "a48b7db57a5d943b6cd8546f0057a400",
"main.dart.js_15.part.js": "89a5aa649ce1eba42516daf33a6cc567",
"main.dart.js_151.part.js": "6b53a2314c66e67079709cf22086d535",
"main.dart.js_19.part.js": "64a36c18df9f6680e5c026cad9afa0da",
"main.dart.js_186.part.js": "867e090e807a7dd52089afd9882ad47f",
"main.dart.js_163.part.js": "008113f42c6c5c129e2998a2324ab0a4",
"main.dart.js_154.part.js": "75dd43e7d98eb16f6992c6a525a9f485",
"main.dart.js_16.part.js": "c04e4fa16298e99c67be8cb9c5bb9294",
"main.dart.js_36.part.js": "76339ebf02f5e397c2972a14dd5a5ece",
"main.dart.js_199.part.js": "d24f6a9c2bba5cd9b7be10ecf8f535a6",
"main.dart.js_130.part.js": "07062f981bf0cd05e4c5b1ccf0010bf9",
"main.dart.js_238.part.js": "244725fc1eac88c92c1fbdd71e54c2cf",
"main.dart.js_152.part.js": "7dedaabd437d3a4be092fb3d8d3572ea",
"main.dart.js_197.part.js": "71ac8eaf4decaa82f35a2073f5ba829b",
"main.dart.js_227.part.js": "c5a2a336e95898d792468b300863d42c",
"main.dart.js_3.part.js": "a9bcab28fe09f0460a5c8363f427ecc3",
"main.dart.js_225.part.js": "f9bc8955fbd5aed2529f04d0eaf271c6",
"main.dart.js_133.part.js": "0be757bb0b270d052a97eaf96d5d9da8",
"main.dart.js_21.part.js": "e7e9244dc2d58d83074ba8bb3cd73e5a",
"main.dart.js_188.part.js": "01435f6d9d7419e4e4136a3631d15fdd",
"main.dart.js_204.part.js": "cb230bb6d29efd7accf71597efee0652",
"main.dart.js_24.part.js": "19c5738dcc3a1685d1d28edeb0bc6c9d",
"main.dart.js_111.part.js": "b30a170958fa21059e0a335186614cd6",
"main.dart.js_177.part.js": "0c8693aeaffcdecefd58c665914a7e2f",
"main.dart.js_85.part.js": "c6e4fd01987eb750a6a44a35d7366b1b",
"main.dart.js_114.part.js": "839f8a8f5917f51397047a0fc03c8739",
"main.dart.js_39.part.js": "4fdb7b927e1f8dab1f82ea84f5dda45d",
"main.dart.js_185.part.js": "3524c44e993b40c6f0701487a49d4e1f",
"main.dart.js_46.part.js": "236a36eeeea9a95de4c969ee40c657d6",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "61d7e66df3cb77d18c9daa0bdce3e9ae",
"main.dart.js_171.part.js": "05a28ee18b93515bfa399071637fb4cb",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "f0392b6345e8361ecdbc2c481bd90c64",
"main.dart.js_134.part.js": "82133c36d82f0c13e2c9d7b2adaba378",
"main.dart.js_195.part.js": "b761749f6c7872e0e0998be347fe3385",
"main.dart.js_44.part.js": "582ac2ed43cefd1aae657d0396d21d01",
"main.dart.js_121.part.js": "d1b0b37a1ec32d7a793df1690753e929",
"main.dart.js_215.part.js": "f62a0c730b1a6644e3883cbce699966a",
"main.dart.js_112.part.js": "c7078982122d6eeb5a3f4c1c86866260",
"main.dart.js_139.part.js": "d4048caf3276cd6423fc76581179ea5c",
"main.dart.js_80.part.js": "51a38e09f58527f1eff7e4bd665c42e5",
"main.dart.js_233.part.js": "1b543ec35d92f8f4b32274f2159d2f2f",
"main.dart.js_30.part.js": "b886a9dae481abb6640c113446017ffe",
"main.dart.js_78.part.js": "0001414cfcbc4f9dd95aaeb1b92cf1fd",
"main.dart.js_136.part.js": "e3d8c8e40c3886c665c727d3c6d9ce43",
"main.dart.js_168.part.js": "ec4865655920647ddf2b24acc0d2bf0b",
"main.dart.js_159.part.js": "a807263d8e01697976155f3b020dbb6d",
"main.dart.js_59.part.js": "c24276f793cb314ea033b0a1e8b2cd4d",
"main.dart.js_47.part.js": "ee66e5ffa4d4d0c5f147831bd9f0e7cf",
"main.dart.js_95.part.js": "63cf6960eb742d9a34feeebb46b878e6",
"main.dart.js_107.part.js": "af6a2304fcb209df351cd0b2b144dcc5",
"main.dart.js_194.part.js": "c6a596b59e8dd8d7aa039af9157a6d4c",
"main.dart.js_236.part.js": "e5ad2e30216c7517a1bc338aa007c287",
"main.dart.js_58.part.js": "5080f8a233dbe82a69cfd47c9b48f7d9",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "c29d1c9ae2884387d98ed623a8e16721",
"main.dart.js_54.part.js": "900bcd7dccd701e0d7e695c20724536a",
"main.dart.js_79.part.js": "2e05b59f80481dece8a422585e778c8e",
"main.dart.js_109.part.js": "d031a7b4d65115fa6afb90a409549981",
"main.dart.js_92.part.js": "d18b66d49c9cf6cd40fa28fce017f494",
"main.dart.js_224.part.js": "aef056e1a0870d3ba8b0a68bc41c8506",
"main.dart.js_93.part.js": "0774d6d2c7ef8ce409e544677883328c",
"main.dart.js_223.part.js": "93349294029c9777c84e8df8a0e66a63",
"main.dart.js_11.part.js": "43cf6dffb25bd6c931906df880988383",
"main.dart.js_125.part.js": "e735a935aa702eccb650f3df94101347",
"main.dart.js_131.part.js": "1ce3b240c55110b9f61a3d528f0a0508",
"main.dart.js_226.part.js": "af834929b14519b632096722a33cd5ef",
"main.dart.js_14.part.js": "e00dccdcc905c53a9c7cbba830deb32f",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "aa44a0f15fbfd63917e6613ed3889f1f",
"main.dart.js_178.part.js": "5f41c82f05749459f58bc2eca964c7fa",
"main.dart.js_100.part.js": "380169704438f4928bf238d4be278fe4",
"main.dart.js_70.part.js": "ec4b59d8270836feae0f18ee169da960",
"main.dart.js_187.part.js": "6151ede692980f5265c4a5b1ea4646c9",
"version.json": "b42db690aac29984a2443e81f6ff47de",
"flutter_bootstrap.js": "2f5d79e31ff8e26ffb391f3ca698bc3a",
"main.dart.js_191.part.js": "b2f18a593be84ca2c00e1fbeda2ae078"};
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
