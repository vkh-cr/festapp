'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_8.part.js": "1ff94399eb781ec3984ed5e4b028d751",
"main.dart.js_180.part.js": "aff0e7f2716b8b7538a770f6c07f5925",
"main.dart.js_73.part.js": "b112bc5704e0b6e0781459ada1444573",
"main.dart.js_196.part.js": "13bd6e58048b8eb28e3b65b84e2a31d3",
"main.dart.js_188.part.js": "20b5efac91113ccd95c4680a000908e7",
"main.dart.js_75.part.js": "4228db6d570a706b1c069201eecdb907",
"main.dart.js_22.part.js": "4799fab97bf36a94d6e72c18ca9247a7",
"main.dart.js_133.part.js": "f859e1775ce5e733091767a6ff0f8792",
"main.dart.js_39.part.js": "37396e36ffba7e728de841d58b5c1a18",
"main.dart.js_119.part.js": "bb368e80ad6f51ab1a71fae07f365736",
"main.dart.js_91.part.js": "4a24865adda1ef4486c3755829440432",
"main.dart.js_232.part.js": "11f0cda932f0f9798aaf3f462b0161bd",
"main.dart.js_125.part.js": "f7b9ace1ce0f9f55f03465a62acd0e1a",
"main.dart.js_182.part.js": "3ddaa3182e1cfe079dc5ce3a796f8d81",
"main.dart.js_11.part.js": "e42ad8133bb46502123c1cd5449446e1",
"main.dart.js_137.part.js": "52e4c258fc8cc8fbbbd606411f4fa6bd",
"main.dart.js_174.part.js": "ac7e991b9d6e8e4beabb44d197523d1d",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_195.part.js": "e6041bbe2e3776d3473a5a6836738dcf",
"main.dart.js_33.part.js": "e54531d2f44bb2b9308d2792824a9669",
"main.dart.js_162.part.js": "822093e3f01c03aecb3814bfd2161587",
"main.dart.js_197.part.js": "e16c7606563fd781cbd8f4e6188c356f",
"main.dart.js_151.part.js": "d4e01858555015bb991d1cdef8fc0d45",
"main.dart.js_205.part.js": "f5949fc924e32f512b984fa6ed007d18",
"main.dart.js_99.part.js": "398602a495b913c403115621c60f782c",
"main.dart.js_12.part.js": "488e8d8cd005ba30b275c4a5ddf95259",
"assets/AssetManifest.json": "49ca0a656725c4f34199825df6a21ff0",
"assets/assets/translations/sk.json": "9416fa3e4a44d4a4450ac6dee89df82b",
"assets/assets/translations/cs.json": "a67d234f5f9f037cfde9ba6323312bce",
"assets/assets/translations/de.json": "c0bb019cf7b419dc53884e3a5ef3e6d5",
"assets/assets/translations/uk.json": "a88b1c3a097d91249edda40144c5cd3e",
"assets/assets/translations/en.json": "7c180b167bd195ca8e204928f418cec6",
"assets/assets/translations/pl.json": "8a2b467bcc5301150f4ac72290d1bbd0",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/images/map/speaker.svg": "92bad3443727dc5acf679cd5e8582db1",
"assets/assets/images/map/beer.svg": "3884ec5eef24a8634310eaa4b35d8b45",
"assets/assets/images/map/bed.svg": "c930d46ac91a70932bd61e2e17033744",
"assets/assets/images/map/ball.svg": "061bde98a15c0f2f3818195d9cce8a5f",
"assets/assets/images/map/cart.svg": "fb6d41303c00806c8e3f59b20351670d",
"assets/assets/images/map/conversation.svg": "5f53e729612a0e78a09e7d3c0fd53fd6",
"assets/assets/images/map/tools.svg": "5f6bbbef105b3d381322da02d6beef43",
"assets/assets/images/map/coffee.svg": "75c95a698eb7162db5342b082d751edf",
"assets/assets/images/map/info.svg": "be79865eee723da1a799860658dc439c",
"assets/assets/images/map/food.svg": "41a9921e7a33d4ed62eb7fb0b8f176e7",
"assets/assets/images/map/cross.svg": "aaecd193906a34ea7845c2feef628607",
"assets/assets/images/map/wine.svg": "d2c55fa3b4051c39d87edee9a280a50e",
"assets/assets/images/map/church.svg": "d2840a23cbad788040bf5a41a9e88dbe",
"assets/assets/images/map/atm.svg": "693a9abb7145add2961453afa3f0ac4c",
"assets/assets/images/map/grass.svg": "fe32d32a171a6e76a8a7088644b07e21",
"assets/assets/images/map/card.svg": "77d6cd4a052dbdaad1c5da8a5e3f1375",
"assets/AssetManifest.bin.json": "c15f1bd0233f6802b344183f28ce1589",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d2dbd2e9e288632bf6ff73dbf8926d11",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/NOTICES": "89008d755321188d61810318c449304a",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/MaterialIcons-Regular.otf": "9d5719bf0852806c1dd70d4a1a97dc51",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"main.dart.js_57.part.js": "b9a89f14d3ddf45b42e78962e289a1ee",
"main.dart.js_185.part.js": "5cae83b2f3526c7a42594e12e3cbcc61",
"main.dart.js_184.part.js": "1451caecd8f6201c1568fc6b9295b813",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"main.dart.js_175.part.js": "c94103f95d0defbb1cd784f8e07ce3a2",
"main.dart.js": "3aa20697b6a347ed887c0b494fb20f23",
"main.dart.js_92.part.js": "b5505c090e02b85eadf967df7ff8bdf4",
"main.dart.js_157.part.js": "f2fcd5e35e7ac98e7f8416a19104080a",
"main.dart.js_14.part.js": "122948aa6a8ac79bcc7b36b4a1010231",
"main.dart.js_187.part.js": "326a89169be6da02a54818221c7f47fc",
"main.dart.js_26.part.js": "cc488d91ff2f293fbbf3a05680eb13b9",
"main.dart.js_58.part.js": "81cb7cfc43a47b4db529b96cff07cd96",
"main.dart.js_193.part.js": "b665ac513178c460ab3735927dd07a56",
"main.dart.js_221.part.js": "e79366b02b406fefb23c0ac79ec95b2f",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_134.part.js": "2a2fdbf3b8a896e9866911d33ecbca1d",
"main.dart.js_144.part.js": "f8d18daaecbc60128b7cb9779d5ff8d0",
"main.dart.js_186.part.js": "45019968d9d0e1f65e93edc21d0d2ceb",
"main.dart.js_130.part.js": "87e7b26aad8e624fb0fc838e049fcfb9",
"main.dart.js_219.part.js": "fe807b9201f693d86b9461e58527c7c7",
"main.dart.js_27.part.js": "0cc0e2eba9dc056c178e7481dc1ab419",
"main.dart.js_139.part.js": "e596af1b846644478da21d17359c4cd9",
"main.dart.js_178.part.js": "c308d11b0f5bbbce8a0f8741f56be485",
"main.dart.js_161.part.js": "110d5a40393e5538e75b0d1e35c38103",
"main.dart.js_93.part.js": "b338945e28ae535a572628b5a35ac98f",
"main.dart.js_3.part.js": "4943e8332713d19ce5d4ecbd769e4a7e",
"main.dart.js_210.part.js": "99d4dcd18305978e494d0038bd63614f",
"main.dart.js_104.part.js": "dd18e8355298c9e39db68e8920c04c21",
"main.dart.js_79.part.js": "6fe9b47c2914c04479b1d562560a2aa1",
"main.dart.js_30.part.js": "c816b6bf24f801ffaebaeecbfd5eccd5",
"main.dart.js_112.part.js": "b25a1b5194baddcbbd96e8113bd7ec43",
"main.dart.js_198.part.js": "3aed32b933b01d7eaa3fc66cccb82626",
"main.dart.js_128.part.js": "5a4260ca487e529c94216b122c0e7215",
"main.dart.js_113.part.js": "c2897db384e9f8ec78a3801a4a520860",
"main.dart.js_181.part.js": "768ded7f6120ebb6884329788657a2ab",
"main.dart.js_241.part.js": "a1e187c5ada3cc8cf8af5d4e09df3fd1",
"main.dart.js_206.part.js": "ae1f1c6ad5fca17662b5234fbe491c78",
"main.dart.js_37.part.js": "e027279e921b40a8a8961ebe501596c3",
"main.dart.js_153.part.js": "fee50771d4ab926a8893b411cb85851f",
"main.dart.js_163.part.js": "c4e330fe41a117972732a1616d010b3b",
"main.dart.js_94.part.js": "bb8e69c33e26d69faacfbf94f77292d3",
"main.dart.js_114.part.js": "d7ca47dab73fa1588d64bf88701f2d3e",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_107.part.js": "500a0e498f5b1c6a0c4201b99138353e",
"main.dart.js_101.part.js": "2f87b7c3ecd553a88dcfad3420f67436",
"main.dart.js_61.part.js": "0524f2084168acc5b76b9ea55276a24b",
"main.dart.js_230.part.js": "7d117a6cf1f8797692cb5c67b3a4fa12",
"main.dart.js_44.part.js": "affe55ec785975160a59c140cedd1ff6",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_223.part.js": "668ccf0a940d3b5a2c3790387144253b",
"main.dart.js_62.part.js": "414d031bb18bcc42664aafeee37cc2be",
"main.dart.js_15.part.js": "d621c56e38be967d229dbe7fe3ce2f3b",
"main.dart.js_229.part.js": "e767a91a274f82d8f1be4ee73487dafc",
"main.dart.js_36.part.js": "00d0be6277e73053f5b4b795dbfd7f8d",
"main.dart.js_76.part.js": "6203eb7c146b19bed7d22fa7c13e9d08",
"main.dart.js_135.part.js": "dd331e8c49aa196d5b58ce9a42bfbcfc",
"main.dart.js_226.part.js": "be6fbc8fb0ce5205625b49aa3492e7af",
"main.dart.js_40.part.js": "a539ca6713697e3c723f5459aa85b2c7",
"main.dart.js_21.part.js": "875b4d87c1f4df3d69ad107552a59037",
"main.dart.js_80.part.js": "eea0c5d1535affc5c292f29239a55cf0",
"main.dart.js_131.part.js": "99d9c0cdd2a609f56be9adf9853dece0",
"main.dart.js_215.part.js": "a9193b238186349163784353fdf3690c",
"main.dart.js_171.part.js": "9becfcb6e191582db35fc99c59bb4dcb",
"main.dart.js_179.part.js": "7a31bf9a9c9474b634e31ac75c8417bb",
"main.dart.js_31.part.js": "ef79653bb69085c485ae9af1c2b62a34",
"main.dart.js_78.part.js": "bd10ed2de01e85e2d6423e2853e525fa",
"main.dart.js_106.part.js": "0392a673d1c61a92ca3feddc847bd2de",
"main.dart.js_74.part.js": "78cdabb9303ad27e79fffd787ebcdd70",
"main.dart.js_53.part.js": "058c65894e6302f1c14fd6504a6e9805",
"flutter_bootstrap.js": "824c0a92f97bbfe536b89a82e9367986",
"main.dart.js_211.part.js": "7674f3f1aed538986ad3345e20e4c6cb",
"main.dart.js_108.part.js": "c3811ef8233f5aae21704a6fe309b209",
"main.dart.js_1.part.js": "eebb7d7115fdaaab25b9b47dc5869953",
"main.dart.js_183.part.js": "96c01e02daf47fef2b843c8f8c31a027",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_111.part.js": "4bc6b45a8bf2ef99925f9382ff4e83c9",
"main.dart.js_89.part.js": "761b66c1d4f6ca092a1c905448889349",
"main.dart.js_156.part.js": "e2cb4e30d3288af5263aea40005c1cbf",
"main.dart.js_25.part.js": "9d699a63100ccd536a4a814e4acb1068",
"main.dart.js_48.part.js": "bdd894f5046d0d5eebf3e8f800dbec9e",
"main.dart.js_160.part.js": "b7fc7824b68b8ef637d4d1dfe487dc36",
"main.dart.js_233.part.js": "1e0839a592f5e5418e86ac2f3c13b6af",
"main.dart.js_110.part.js": "80fed48a93c18885d502a27b00950f6d",
"main.dart.js_138.part.js": "11d59a04c654fd60bb47acadd5a739b9",
"main.dart.js_51.part.js": "a899fe40400d40aea33c7a1e58d03ec1",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_228.part.js": "1e21ea9bf2c19db9dc8bd4e163661fea",
"main.dart.js_10.part.js": "4b8524de8f30d55c7e29df6806c481d3",
"main.dart.js_159.part.js": "55692e9146687736bd32984f34c77f21",
"main.dart.js_214.part.js": "9cab2e18e4f786fb76902d5cbcc85fa6",
"main.dart.js_237.part.js": "3e291603623410df16d09da108a0775b",
"main.dart.js_87.part.js": "0cb8d1c063fb7f56dfaf391980107ec3",
"main.dart.js_218.part.js": "15f34b0bb98f24633bc064f53cbda589",
"main.dart.js_172.part.js": "26109799833aa4c0ef3dd187a450d76d",
"main.dart.js_23.part.js": "5e9a604b187dc924fda0d0197eb33bb0",
"main.dart.js_72.part.js": "ccc7d7ee6752dfbc2feb88d8a9cdf158",
"main.dart.js_77.part.js": "c99e793cdc5e59ad6a301e38c2e5fd54",
"main.dart.js_189.part.js": "c73536dc56a33afcab0c03e4c7eab942",
"main.dart.js_69.part.js": "97d2d16c8ef9b6365d3290b6f91e77b1",
"main.dart.js_35.part.js": "3fd343c461b4f26fb2373faf588deb08",
"main.dart.js_136.part.js": "b8ac2f587af3fedea49bcac4835d4191",
"main.dart.js_222.part.js": "c48d13a98f77023b1eb628e082acbb17",
"main.dart.js_59.part.js": "9dd73860ef665d1a98d30a324881891f",
"main.dart.js_95.part.js": "99a5d03933f0c8374437d3bbbe5a54e3",
"main.dart.js_84.part.js": "088267b6f10e3007520bb1bb3767fc2c",
"main.dart.js_115.part.js": "fbe6d615da48d63e999ef68a1f81de8e",
"main.dart.js_227.part.js": "eb97af0f87dfc148f2a7ee2f9f7f68d4",
"main.dart.js_88.part.js": "bc0807c33325fd16dc7d2fa61d0d9e35",
"main.dart.js_220.part.js": "cb89d1709c01a40e5f6c60219ebd3692",
"main.dart.js_100.part.js": "37f1af315f531e0b1b6a90eb8a3a99e6",
"main.dart.js_149.part.js": "a4855ba4f9e3ba650370e14da66fb5f9",
"main.dart.js_200.part.js": "7d41c8e8dcc29e9401979ed3f361ea3e",
"main.dart.js_167.part.js": "e0c490be801fc4096c2100bed1eaedf8",
"main.dart.js_6.part.js": "c292ff370a5de47922ab8aada4bf696d",
"main.dart.js_109.part.js": "8db63ddd58f99699224ffa41524f43d9",
"main.dart.js_120.part.js": "17e7dc937efd2515b302949dafad430a",
"main.dart.js_127.part.js": "cad081fc8b7c7840c08c6c12e6944f41",
"main.dart.js_64.part.js": "46d85d18bc255085947aef4f56ac4df9",
"main.dart.js_217.part.js": "995c7191224dc1cbe4fefec55aa4de9d",
"main.dart.js_121.part.js": "26562121ee1e541625ceb01e1d2267fe",
"main.dart.js_166.part.js": "0ccc0b9adfcbe789c2f53631c97bdf1a",
"main.dart.js_239.part.js": "f7ba526375b4378b300af58f0a1afdb7",
"main.dart.js_7.part.js": "67b8c5d7c863e6109d9696754aa7191d",
"main.dart.js_118.part.js": "a6d1147b6f3e32c114921d0f9d32f0f4",
"main.dart.js_170.part.js": "c97d4b220c44373b7ec17c6760aa9947",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_208.part.js": "f27127369514f45ad8690a8e851658af",
"main.dart.js_83.part.js": "2822e74e6af26b76a7d3d0d123483c41",
"main.dart.js_209.part.js": "c05ac3067f60ebf2ab476cc53f0f0860",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_28.part.js": "d33755dfd6ec5ab886abb03784fd9501",
"main.dart.js_81.part.js": "28a394ebbc387db20a357868ce55c516",
"main.dart.js_124.part.js": "3f6b0dbc9905912f714e3d50c2df7131",
"main.dart.js_158.part.js": "fd0f9d70989285165d02f71e69e70d26",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_169.part.js": "1c6c453a5ecb1ef8a79f544bd73c4541",
"main.dart.js_17.part.js": "cfa8b57950dd3ad4e2c28d4905745ad6",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_201.part.js": "a2c0b7c0b5e160fbbed311e3831481e3",
"main.dart.js_236.part.js": "24034f2bfbd46558cc8e72fccd86220a",
"main.dart.js_50.part.js": "7c6f275f015990f326c226d1f2328dcd",
"main.dart.js_41.part.js": "d5d1785c84e0854b520ac45cc657696c",
"index.html": "3331faf755bf0c35d68d246ffa7a8ce0",
"/": "3331faf755bf0c35d68d246ffa7a8ce0",
"main.dart.js_82.part.js": "8f5b763cba45cf0744ed387db53db0a0",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_155.part.js": "67bc2ce8326ecfe67fda3feb8a4951fb",
"main.dart.js_146.part.js": "afc6c32bbd0a87d8338d193aed2b8ffe",
"version.json": "09c85e06c357d17b583791623dc1ff58",
"main.dart.js_164.part.js": "93aa19cf362409381996cc672dd8a0f7",
"main.dart.js_177.part.js": "92f752180a2b0cca4e064c950be25c38",
"main.dart.js_43.part.js": "c975d097e30a38150e48509863011915",
"main.dart.js_34.part.js": "1267eb5ab59477a28d809a49d6c56b4d",
"main.dart.js_202.part.js": "a1185f52026c862ed284b32a62dda952",
"main.dart.js_117.part.js": "9394f8c0288c447024ef987b0623414e",
"main.dart.js_235.part.js": "151131ad3b592e55fcce1d59fbc49f33",
"main.dart.js_145.part.js": "00fd7a75d5a996e44ba53fd2ee1bf88a",
"main.dart.js_105.part.js": "019867839f873c7e88547a55a964795f",
"main.dart.js_165.part.js": "01c6efb1992ff38b911278298db0ddca",
"main.dart.js_240.part.js": "9506cae58b5aa0bdabf71c295d1f0d1c",
"main.dart.js_98.part.js": "dd257c7976f99db34f3e41f64929263f",
"main.dart.js_2.part.js": "38f74b4cd18de1f1454e4018ba41cb73",
"main.dart.js_116.part.js": "98610347554c592e7a3fbfdff7bdbe6a",
"main.dart.js_212.part.js": "375b66b58afe1785c32164ae74acb0ef",
"main.dart.js_234.part.js": "e5c617a721861bfa5dc9a2840923d1aa",
"main.dart.js_224.part.js": "3ba7f265034d1cd5cafee0c9a0af86cd",
"main.dart.js_129.part.js": "c1e7b8ad7f99f2c644a18bc259efefe4",
"main.dart.js_152.part.js": "fbf41b24bc1fa7bae1b22ec559905d88",
"main.dart.js_199.part.js": "e6c3acb0b539892e0c304cd20755436c",
"main.dart.js_126.part.js": "a4e408375a699a99086543d4f5aa4abf",
"main.dart.js_24.part.js": "965846544a2fab69299bc4be466f3c00",
"main.dart.js_54.part.js": "3ced632b76cba97a933be1421ebc649b",
"main.dart.js_60.part.js": "285d8549534c4eb0445deb432a287645",
"main.dart.js_231.part.js": "2b100a53061dec31ca7d1942f5624b82",
"main.dart.js_122.part.js": "04fb3ebd429c754f4ec0359c6713d791",
"main.dart.js_150.part.js": "668e3649d1399d721efde0cec81d5e0b",
"main.dart.js_16.part.js": "0c471e7f6ed1f7867e8c61918de2480d",
"main.dart.js_154.part.js": "9c507407235dd0ebeaba8a4b345cfe09",
"main.dart.js_140.part.js": "82d9ee1a77a92237b50794a31eecd0ef",
"main.dart.js_207.part.js": "41ce18a716cb3e8be2d6311784cf27ac",
"main.dart.js_123.part.js": "b1e54849f54dea5ee44a8711adf22512",
"main.dart.js_47.part.js": "7220d28d0f10d1890803db0f3d928ee9",
"main.dart.js_85.part.js": "82d21f9a69f269b21882e7853c97ae6f",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_216.part.js": "d8209aebe57acf57cc6dd05a03ee9899",
"main.dart.js_192.part.js": "32fac493fd89201282648a3d4a195638",
"main.dart.js_46.part.js": "154b904257ce5565851b6a3a848d5695",
"main.dart.js_225.part.js": "3370ab9c78bdc6f0377d3ac21eb660f8",
"main.dart.js_19.part.js": "77d0f5333ad1e06b60863ae14f839453",
"main.dart.js_18.part.js": "60449e063e5a0af7774aec4ec2a3409f",
"main.dart.js_67.part.js": "3bde7537f6200e278a35ec12a89e8860",
"main.dart.js_9.part.js": "ed441076df983fb5ca21f17fd46a6108",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7"};
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
