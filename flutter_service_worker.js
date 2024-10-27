'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "0f0a4d2c484bf78a22bdb8f8c38c5bcd",
"main.dart.js_117.part.js": "776eb4ed8577f4f23cddb3dda6509d84",
"main.dart.js_182.part.js": "a51b323f695356b30f35c6d632e66f98",
"main.dart.js_75.part.js": "3671f8d9644a65df2b3840630eaed7e4",
"main.dart.js_83.part.js": "d381e54ff9fa7156df564dec6028e090",
"main.dart.js_176.part.js": "e7d4ca151e43e29e560707947c6fc70b",
"main.dart.js_87.part.js": "c1ff84bb1f71383f7ea506a5d1d6994d",
"main.dart.js_126.part.js": "878de0e5479a4bc1a0455d9deb1c0345",
"main.dart.js_129.part.js": "57fc9cb679e6f3f988e79fc1e6efa370",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "4b94ca6ad49e554e8c1c1ce763f30624",
"main.dart.js_218.part.js": "28ce422071dcc95513353364a5603d7e",
"main.dart.js_40.part.js": "cd132118ba55cf0a8905ef01046546f3",
"main.dart.js_48.part.js": "2b1d1532effd5cda2c8da752ec90b4e8",
"main.dart.js_209.part.js": "6d67c34ddf88d1bfa844ecf6af4cffcf",
"main.dart.js_115.part.js": "f1c7c411b7e79a2570431765eb24763f",
"main.dart.js_10.part.js": "8e37d4d2236a904dc361ec598190e4ef",
"main.dart.js_66.part.js": "18deb98502db43fdf5000f4ec1099e43",
"main.dart.js_84.part.js": "768d117da858a46b05fe952018e523c8",
"main.dart.js_122.part.js": "c228d343ec9eaaae148088085c5671f0",
"main.dart.js_230.part.js": "3bba676142a5dc8b645014d9c75bcfcf",
"main.dart.js_213.part.js": "9c3e1548c152e76fdfeb9289a23745cb",
"main.dart.js_153.part.js": "b87160aed15c87b373e049d6eb080f0e",
"main.dart.js_41.part.js": "d3aec813cee4b85f6fd24cb2d09c1a43",
"main.dart.js_89.part.js": "0b9d68f9d405429c6ed7f716db42f0df",
"main.dart.js_146.part.js": "9089346af0ebc86860266783e32b865a",
"main.dart.js_37.part.js": "6904a550c6ad431e5f046ffa239e6f95",
"main.dart.js_165.part.js": "0ba5cc36f472d0f3ece96c7ca5b87b7a",
"main.dart.js_127.part.js": "20147fe0cf942a241f0b193396307cea",
"main.dart.js_161.part.js": "ef151bdc3d2b242d01b8856408391f4d",
"main.dart.js_239.part.js": "918d56197313b016b158481ba40edb54",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "b5267df4579524f0b40775215526bbd2",
"main.dart.js_216.part.js": "4f49ed2b821d0a1d8705ff2a9ba4f552",
"main.dart.js_64.part.js": "2f4c50930e6b652fb35dfa0ddb71c6ff",
"main.dart.js_169.part.js": "00be1aa9a5e26ca1ca70634173f0c966",
"main.dart.js_174.part.js": "59149e6b5d4cef9da575ae301731d280",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "456129bd7e98cf0a52db5dc6fcab3d56",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "cfd73fc17875bb068265e8260ca37e6f",
"main.dart.js_119.part.js": "414bbc3345d965635ae672b5b7efb19a",
"main.dart.js_18.part.js": "fa95b5bc2a67d9c6f36d3bbba6e69fa9",
"main.dart.js_35.part.js": "ff17d07c036e2f220768cdd5f2cc258f",
"main.dart.js_200.part.js": "e7b344cf7d5a292f322c4c38788fe5a0",
"main.dart.js_73.part.js": "87f4870d0b1e22c274db4da7a25f162f",
"main.dart.js_101.part.js": "b43848c3d45cad760fbb66f86e5e842c",
"main.dart.js_77.part.js": "8f7d64808412c9b63c55a1d2e864498b",
"main.dart.js_149.part.js": "33c2f3e892877702111ad32d67f515af",
"main.dart.js_208.part.js": "1f0400fd7a7dc73870e68b816dd72825",
"main.dart.js_82.part.js": "d9378cd0ae1dd767b22f7e9d70170cd4",
"main.dart.js_173.part.js": "2a2a1db63b3706e5f5ef7a174a658d35",
"main.dart.js_106.part.js": "f9cbb0cf24b304e5be3dbdbfcf9678bf",
"main.dart.js_207.part.js": "21861039d097cfa6ce6f344cf40b9e0e",
"main.dart.js": "28239bc4cbdefe744a8069c740b3d701",
"main.dart.js_222.part.js": "e8cad8936b193d893b5c550ca98dc73d",
"main.dart.js_232.part.js": "e033b203a1818748f9185b10bcf993ec",
"main.dart.js_124.part.js": "82af49859f4aede5e83adc13ed533604",
"main.dart.js_50.part.js": "bf4751e6c512072c85970f18c12b153d",
"main.dart.js_192.part.js": "273f83d8ba7b73eeb61932645a43b40f",
"main.dart.js_91.part.js": "1ebbc9a8d9bcb0dbc74d44b90d656b8b",
"main.dart.js_145.part.js": "668e639897c039cd9070ae47f575105f",
"main.dart.js_229.part.js": "e3f75b82d3578e3641e1a044aca9bf76",
"main.dart.js_57.part.js": "0961128e1e7f7974e65c6f78b1b39f47",
"main.dart.js_104.part.js": "c76ed167f931d7a6e008309985dd669b",
"main.dart.js_201.part.js": "0159bfc89156d45b6ba08866d5f11c24",
"main.dart.js_69.part.js": "0ccf035600c47a107103f56fdf77aeb7",
"main.dart.js_196.part.js": "d09475aab9eb155c3f344aaf5ac5d63a",
"main.dart.js_181.part.js": "96f60a3e12a53bd35a74aa2f76be1f7a",
"main.dart.js_108.part.js": "04be5d99d39e98d9759a82112a684bf5",
"main.dart.js_158.part.js": "1b0121fd5909eef0d860ec672e8073c6",
"main.dart.js_33.part.js": "2e2cff8d6100d71f20c0b97611c9e5c8",
"main.dart.js_217.part.js": "5ec13ac723419087943b77f43adbd7f9",
"main.dart.js_34.part.js": "ccd5521b2a003f1408305e9a85676a85",
"main.dart.js_210.part.js": "c237a97a7182e48b2e217ffd96325241",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "be2caf3dc33808a44b47aa8471393210",
"main.dart.js_88.part.js": "cdd7b94eaa8a92db37682d69897d5455",
"main.dart.js_183.part.js": "d4adde4eb8c70b87d58ba43ceebf2395",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_7.part.js": "a51fd92fa1bde81428994b55690d40a5",
"main.dart.js_140.part.js": "9e449908bbc47016388e0c3732e0aac0",
"main.dart.js_228.part.js": "57d4cb6cfa075fd132a09759d115aff5",
"main.dart.js_170.part.js": "7b5f16ee476bae2ed965aa35b62cc2c6",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "8948a97634b570eef9ffcab3dd202b16",
"main.dart.js_27.part.js": "71d2b84b7cb63705a70a18a3acd74e79",
"main.dart.js_156.part.js": "4ee765d9891cf6a66ca1441463b0473c",
"main.dart.js_219.part.js": "b699b96abef467d7b4af7ff71bf9b138",
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
"main.dart.js_60.part.js": "24a2d00b166ecd09b29e9fd805b19e66",
"main.dart.js_220.part.js": "c9a74ec6d760065d1dd1b21f72a1d48d",
"main.dart.js_25.part.js": "31891751b39e68a98e041d1274731a3e",
"main.dart.js_123.part.js": "e1e8040746511f0c57e33fceadd83d57",
"main.dart.js_8.part.js": "f049e94e76ae808c7bcaa15baa1afc20",
"main.dart.js_198.part.js": "c3b29786c374549d2f2a53ce9934d3f8",
"main.dart.js_81.part.js": "152f0c7a29f334c2ca98c59fc6958ad7",
"main.dart.js_205.part.js": "525c8d9b17c522b1f3f8d51ac6ed6509",
"main.dart.js_113.part.js": "9b748c46e0b46ac324ef48d88fb3f34c",
"main.dart.js_9.part.js": "7ee9347500861b945a2a74096407ed78",
"main.dart.js_99.part.js": "4f3f676c43207550de94c44d774c3fdd",
"main.dart.js_22.part.js": "6d53333e170130f91cc6e5ba99072f0d",
"main.dart.js_23.part.js": "c9beeca19d9ad0f146aa0ab4fae28071",
"index.html": "55f31e1cbd56b010f77068a027357fc5",
"/": "55f31e1cbd56b010f77068a027357fc5",
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
"main.dart.js_118.part.js": "baea4ad322bf9f2b9f2fc066979025c8",
"main.dart.js_26.part.js": "69f7463e0f245f2be2c0d61822f14b01",
"main.dart.js_240.part.js": "6cac0b1084ca2baf900fc561f0980216",
"main.dart.js_214.part.js": "cebc7a42769cb97b2b82300a58a2418b",
"main.dart.js_51.part.js": "7114ea0c25b3b9e3b0d00a04959f7b13",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "30ad94e14555cddc99ff4a58a7321dca",
"main.dart.js_72.part.js": "ae61bb73d9347122606a562b9fd0a198",
"main.dart.js_1.part.js": "e2b866f07aadd3d70b9255a256543258",
"main.dart.js_160.part.js": "0d4f55bd9157e671aa9885c648a2f2c9",
"main.dart.js_120.part.js": "5db37d2643e901e754874d6f2c093904",
"main.dart.js_63.part.js": "eca033654bb792a23a8a13c87205e671",
"main.dart.js_211.part.js": "ee244cc3e496b8fd3be5ebb7276eee55",
"main.dart.js_12.part.js": "e9e65541686170e9babe693a9f050dc5",
"main.dart.js_157.part.js": "365911ad1fd8803863bcbeb71129abcb",
"main.dart.js_221.part.js": "bfe7e492d0e0722ef5505373335d66ef",
"main.dart.js_137.part.js": "d4c650a0bf714f5ca91a64c0e2965f33",
"main.dart.js_28.part.js": "d97cc6e36775c45bf17c733c8b063282",
"main.dart.js_135.part.js": "74b92ea73dd4240cd5d46a041b4816c6",
"main.dart.js_6.part.js": "87d1773792e3d04451c817d27f2e497b",
"main.dart.js_138.part.js": "e3ad35a0029a5a0073b5e3249f730faa",
"main.dart.js_17.part.js": "9f270613a1e7f6f153e1891b4596f110",
"main.dart.js_105.part.js": "5420dafd28b71cfef333b186ba187782",
"main.dart.js_206.part.js": "c647ac8881ea86aae809ec30f70869c1",
"main.dart.js_231.part.js": "df36b4a9ed414e35b967253d277f6daa",
"main.dart.js_43.part.js": "89d7ecaa11f800cb32c87b5cc7e5a672",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "36a60555b918269c795e7d839a485c7f",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "0940f2f67b4ffb84f944ded217cb002e",
"main.dart.js_15.part.js": "b8b72bb297729d7f5e5ddc995edc8795",
"main.dart.js_151.part.js": "2a16a872241816ee7fe9b293356a6be2",
"main.dart.js_19.part.js": "c44aeb3e2f6c58e3d53b6125840d28cd",
"main.dart.js_186.part.js": "867e090e807a7dd52089afd9882ad47f",
"main.dart.js_163.part.js": "ac7ab1c99e884725d66a5a1c56b0e389",
"main.dart.js_154.part.js": "2ca9e53da13cc6b17557bba253f21769",
"main.dart.js_16.part.js": "20354fb679390caf09e0e14f0400d004",
"main.dart.js_36.part.js": "76339ebf02f5e397c2972a14dd5a5ece",
"main.dart.js_199.part.js": "46c27890661dd36f6b50d687f530e9ea",
"main.dart.js_130.part.js": "1eb327cd5f6e74e754595ce511ed5479",
"main.dart.js_238.part.js": "244725fc1eac88c92c1fbdd71e54c2cf",
"main.dart.js_152.part.js": "7dedaabd437d3a4be092fb3d8d3572ea",
"main.dart.js_197.part.js": "71ac8eaf4decaa82f35a2073f5ba829b",
"main.dart.js_227.part.js": "c13d28af1360dd9b2b85fb3b85404d1f",
"main.dart.js_3.part.js": "28e7776e37a6c8bc348a8ef002fb5b2c",
"main.dart.js_225.part.js": "2b39213726231ca9e98188b3a30a92fd",
"main.dart.js_133.part.js": "8d3f98ccb87d3d664eb2b158e1c0dd1b",
"main.dart.js_21.part.js": "e32e6a6a612c43666c75356e282db78d",
"main.dart.js_188.part.js": "01435f6d9d7419e4e4136a3631d15fdd",
"main.dart.js_204.part.js": "4bb148c62d916907df770dfa888f3306",
"main.dart.js_24.part.js": "748e2e10372ca286e949111f7a426b50",
"main.dart.js_111.part.js": "83a32c0a7b3298d4499a272ca166c4b7",
"main.dart.js_177.part.js": "0c8693aeaffcdecefd58c665914a7e2f",
"main.dart.js_85.part.js": "c6e4fd01987eb750a6a44a35d7366b1b",
"main.dart.js_114.part.js": "839f8a8f5917f51397047a0fc03c8739",
"main.dart.js_39.part.js": "f1a68beb337eac9e7db9daf95654b963",
"main.dart.js_185.part.js": "9a57a1a5089ba9d57270f4e43189d50d",
"main.dart.js_46.part.js": "8dd7ebed008fa17220b22b1e7670dbf9",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "61d7e66df3cb77d18c9daa0bdce3e9ae",
"main.dart.js_171.part.js": "05a28ee18b93515bfa399071637fb4cb",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "2202e3320f2f44371529a5c39d844964",
"main.dart.js_134.part.js": "999202f9c27b5ce1492d5e4773f0bd0d",
"main.dart.js_195.part.js": "b761749f6c7872e0e0998be347fe3385",
"main.dart.js_44.part.js": "582ac2ed43cefd1aae657d0396d21d01",
"main.dart.js_121.part.js": "21e65ff43209c3c23ba5142679a57689",
"main.dart.js_215.part.js": "85910daf90505676b128bc87c3a409db",
"main.dart.js_112.part.js": "c7f9ff806013ea211e4b2bd792a2fc9e",
"main.dart.js_139.part.js": "596833d396fd779b8dc679f7f59e1685",
"main.dart.js_80.part.js": "838fc2e9bb05c94fdadbd4367d39adae",
"main.dart.js_233.part.js": "1b543ec35d92f8f4b32274f2159d2f2f",
"main.dart.js_30.part.js": "b886a9dae481abb6640c113446017ffe",
"main.dart.js_78.part.js": "bb653f6f0d035e21402dd17b4ec6a8ed",
"main.dart.js_136.part.js": "b94a532ca4b0279c68c99c5d1ddf618e",
"main.dart.js_168.part.js": "e06949160d78687dd81c45768df3f0f4",
"main.dart.js_159.part.js": "260ca3f6c4b55c1b32240d8823600dc2",
"main.dart.js_59.part.js": "68d30995ea1af9721377a9129a40bb1f",
"main.dart.js_47.part.js": "ee66e5ffa4d4d0c5f147831bd9f0e7cf",
"main.dart.js_95.part.js": "63cf6960eb742d9a34feeebb46b878e6",
"main.dart.js_107.part.js": "34c37592f2bac89d5ab0d99173d9903d",
"main.dart.js_194.part.js": "c6a596b59e8dd8d7aa039af9157a6d4c",
"main.dart.js_236.part.js": "3d4abc7f52415dfef8d44440705a6189",
"main.dart.js_58.part.js": "5080f8a233dbe82a69cfd47c9b48f7d9",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "c29d1c9ae2884387d98ed623a8e16721",
"main.dart.js_54.part.js": "900bcd7dccd701e0d7e695c20724536a",
"main.dart.js_79.part.js": "22b3d6afe07f7753d1f5a62ef3be6287",
"main.dart.js_109.part.js": "d031a7b4d65115fa6afb90a409549981",
"main.dart.js_92.part.js": "efa1d76f9975e65350def3032ca8b24b",
"main.dart.js_224.part.js": "aef056e1a0870d3ba8b0a68bc41c8506",
"main.dart.js_93.part.js": "0774d6d2c7ef8ce409e544677883328c",
"main.dart.js_223.part.js": "277256ee65fa35f2106b9ec4ce565d36",
"main.dart.js_11.part.js": "43cf6dffb25bd6c931906df880988383",
"main.dart.js_125.part.js": "e735a935aa702eccb650f3df94101347",
"main.dart.js_131.part.js": "9815d9edfa4a2d17d3bfd56d8919b475",
"main.dart.js_226.part.js": "af834929b14519b632096722a33cd5ef",
"main.dart.js_14.part.js": "1dedc004c38cb11240962437f886fabe",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "aa44a0f15fbfd63917e6613ed3889f1f",
"main.dart.js_178.part.js": "5f41c82f05749459f58bc2eca964c7fa",
"main.dart.js_100.part.js": "af36e27dcdcd806d2fc9a113eb766ba7",
"main.dart.js_70.part.js": "ec4b59d8270836feae0f18ee169da960",
"main.dart.js_187.part.js": "6151ede692980f5265c4a5b1ea4646c9",
"version.json": "b42db690aac29984a2443e81f6ff47de",
"flutter_bootstrap.js": "6f3462c9818896b2994493788edf80cf",
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
