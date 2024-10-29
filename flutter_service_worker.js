'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "2a1b1322ebc3c608fe4474311a18e46e",
"main.dart.js_162.part.js": "18d725d6f4bce4b97273ed09f9a2a258",
"main.dart.js_117.part.js": "c3b3ea49a392fb0d73542f3b89e6e0fc",
"main.dart.js_244.part.js": "56798f3798e7172196de3db33023edd2",
"main.dart.js_83.part.js": "c5a11b764085ea9769dd6366c82824b3",
"main.dart.js_254.part.js": "fa66f04dbba29e9b0094790079f9ba25",
"main.dart.js_96.part.js": "2e954a059d4eb0cff25509c8989dc6e8",
"main.dart.js_245.part.js": "5ca94c160766e6ce441e252df3ceeffe",
"main.dart.js_87.part.js": "04749c99ffafa817aa26edacdfc11c62",
"main.dart.js_251.part.js": "49f9e2baace432a04d2d027358b74f34",
"main.dart.js_126.part.js": "c6857f446099b0f7050753e347eb2d89",
"main.dart.js_129.part.js": "cfd2f5c9875ff8d0c827990798e03c24",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "2846bf0a319da39107c233f9f98c6c4f",
"main.dart.js_218.part.js": "0afa6d984af5f6a34398a1f38bb941c5",
"main.dart.js_172.part.js": "d5c266612cb3c70c224a9b51ad9d25ee",
"main.dart.js_142.part.js": "1f5470d9d66e51d01727ddd4220e72be",
"main.dart.js_40.part.js": "72f6888faecfe46a99c01e9408bf415a",
"main.dart.js_48.part.js": "275152a6ed7e013bdf30ac6447559a77",
"main.dart.js_209.part.js": "ee9155d284f4c410f726e49377f52177",
"main.dart.js_115.part.js": "bbddcf439187d9dfed2c2930dc084265",
"main.dart.js_10.part.js": "a0182245127799be9820d1b462b1a5f7",
"main.dart.js_84.part.js": "a820df737225b9c174883845439fb4de",
"main.dart.js_122.part.js": "e2a53f9edce10a5ffe28034e99836cec",
"main.dart.js_103.part.js": "a073899009e3724d2be013e504b4832e",
"main.dart.js_230.part.js": "cca2ff81f281be6d945a3a2890b54b9e",
"main.dart.js_41.part.js": "045de494d2fa65c3767d3fe5b4111d3c",
"main.dart.js_89.part.js": "4e796ba40e88bbaf72522c2267b4c566",
"main.dart.js_146.part.js": "35e266b026e434b97657ccb3cae60c7d",
"main.dart.js_37.part.js": "d36ec6c7951682655a05b86c02cc99dc",
"main.dart.js_132.part.js": "bdc0bff3dd663d9acc855a46c6508383",
"main.dart.js_165.part.js": "fb2de547fa3dec335b46497fa940ada9",
"main.dart.js_127.part.js": "3d45326b4856aa76880c770f8d9a4b35",
"main.dart.js_161.part.js": "68ffb4f33f5abb6e92e44f68b3dcb99f",
"main.dart.js_175.part.js": "a5cd8ea952f9f3b48fac88d387be611c",
"main.dart.js_239.part.js": "e4417f6abdeaa703d66771dc638806a0",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "fef31129871f8726c587be0f0e99fe36",
"main.dart.js_216.part.js": "8d760aa8ae303f5a5ae3dd7f1e90874f",
"main.dart.js_64.part.js": "710a63153df1f3b3ff32e2458c8f8273",
"main.dart.js_169.part.js": "6486b45e1323aa5f0c5dc79136f3e6d0",
"main.dart.js_13.part.js": "caf3ede8d0685f0da1f3eb89baf1a509",
"main.dart.js_246.part.js": "da7899992cd3157fecc078ce62144bab",
"main.dart.js_174.part.js": "3696741ae871f31189e6d76c5fa23ba2",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "291bc232b27963a0d624dee325b06daa",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "07b773b6bd91b21297dbf0eef8351aba",
"main.dart.js_119.part.js": "fa4081830e3f1aea169e6612260d38d9",
"main.dart.js_18.part.js": "2b38494a0de6d7d892d81323d68c6341",
"main.dart.js_35.part.js": "b75f80ecbdbbcc43a6f2f305bd030b3e",
"main.dart.js_200.part.js": "8e25b3ea9de3e89911810350b97adf92",
"main.dart.js_73.part.js": "587fc2401010c158c7163ea2e12508fa",
"main.dart.js_77.part.js": "c5b49871591d413456a12a72de75fe16",
"main.dart.js_67.part.js": "9532ba1a3f061e48b8e4f159a0b7e370",
"main.dart.js_208.part.js": "77530f2690a8ebbb11a877469f106510",
"main.dart.js_82.part.js": "2136a4be84b3629dfe039e27bfb2bb9a",
"main.dart.js_173.part.js": "34928ea31a257f52222986f38e32093a",
"main.dart.js_62.part.js": "7757460cb1b518679c3819256e487545",
"main.dart.js_207.part.js": "d22c86a3dc52105037274283ba686484",
"main.dart.js": "0d37d54f902067a6ea374fc8340f9e1b",
"main.dart.js_222.part.js": "2f3d5bb9299f46db145822d102de31d6",
"main.dart.js_232.part.js": "7710a74aa703eeb18bb951312d66e807",
"main.dart.js_124.part.js": "c15329b527cea4249ca7e70b12e398d7",
"main.dart.js_50.part.js": "82453bc4a540dc38e0c272df5f664eeb",
"main.dart.js_97.part.js": "8a5acf6dff7a1121638c058fa45aaf0f",
"main.dart.js_192.part.js": "d7576d60b90e71cf42f0720b80b6feab",
"main.dart.js_91.part.js": "562c6210b0c7bb97fffc88db4350108b",
"main.dart.js_145.part.js": "97a6ecacdb77c7bb7954afff37b072dd",
"main.dart.js_57.part.js": "bc7087e7532802b2e981b17f6ec30320",
"main.dart.js_190.part.js": "65a085db50ca6a5823abd8a9e07bd8ca",
"main.dart.js_104.part.js": "2292fc06cabbcdb6a136e00acff496d9",
"main.dart.js_196.part.js": "b51fadec8e643f50ee642ffaf5d56652",
"main.dart.js_108.part.js": "3e02b09858992624228b131112a6e32a",
"main.dart.js_158.part.js": "60ab9405b85f780145f1025c8f95a53b",
"main.dart.js_33.part.js": "8f6455438879ddc7b3368aba60903230",
"main.dart.js_217.part.js": "87168f2cc630c9951f8225837a5b3fbe",
"main.dart.js_34.part.js": "4ae37680ec03f629b08435992fb93fcf",
"main.dart.js_210.part.js": "32838695bdee8a45eff5a584ff4ebed4",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "2dd66383ccbb80518bc5ac554a5b6949",
"main.dart.js_88.part.js": "792addcaef869ceb088bd9dd04394e2b",
"main.dart.js_202.part.js": "a1125650f5a241273b7bcafdde461975",
"main.dart.js_183.part.js": "f04b33d3a9af01895c8303058f5f602d",
"main.dart.js_167.part.js": "9b704482124e9a6a887de65486dcbb6d",
"main.dart.js_203.part.js": "19374aaf5993a3d2d3f7606977208abf",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "8fe3f5a167ec1cb5fe40607da0cb5ab7",
"main.dart.js_7.part.js": "65a9b7ae6699f6c5ca3e9f9c4196409d",
"main.dart.js_140.part.js": "981967f9d859e95cfc52ebbe859f8412",
"main.dart.js_170.part.js": "c7ad59b0c7499b69c3eb6595b7cbdb61",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "4ea702b2aebd122f38874acd3e26af2e",
"main.dart.js_27.part.js": "978ed1b480e61e71ba6a7032943446b4",
"main.dart.js_219.part.js": "d27df7bdc3a8f3dd68dc85e11fed07d5",
"main.dart.js_116.part.js": "79639f26e2d2d6e3a1a53b5ee232abe4",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "d2dbd2e9e288632bf6ff73dbf8926d11",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "b351921f5458855cfdbdef3cb5c82bee",
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
"main.dart.js_220.part.js": "825e978578021cd2ad837efd64970830",
"main.dart.js_25.part.js": "a0d198d8301cc8d239dd21e44416d67a",
"main.dart.js_141.part.js": "7d5cf43a90eb2f3b928460b323551965",
"main.dart.js_249.part.js": "5717483ceb3684ccab18b2bd13857e7f",
"main.dart.js_123.part.js": "c216e8032bf7842eb6c114a0cc50c1d9",
"main.dart.js_241.part.js": "a93ecefb48ecd070f726f24eb5082d2b",
"main.dart.js_8.part.js": "2a30a4be2b2bdd501a75a0b3f8a55635",
"main.dart.js_198.part.js": "bec06f06cdd1092e78c32907a21d27e0",
"main.dart.js_81.part.js": "14775cda1413a200e5a85993b14099e4",
"main.dart.js_113.part.js": "30263d4aebbe7681e3e60b5d04fd3c61",
"main.dart.js_9.part.js": "4e589e05e7c82c50db71434b54e68e83",
"main.dart.js_99.part.js": "6d4113467f96965b7a79a1e82675ffb6",
"main.dart.js_22.part.js": "4a3facc21e3783fe21c69d9c85087a68",
"main.dart.js_242.part.js": "9ee1e9838cfbcee88a50bb091ce87ed3",
"main.dart.js_86.part.js": "5216131939474c898b448ff36442819c",
"index.html": "ccc0ec038c026a0e90ef1b4d43b6738a",
"/": "ccc0ec038c026a0e90ef1b4d43b6738a",
"main.dart.js_98.part.js": "d418016f10dc2693d6ce01dbf11a587e",
"main.dart.js_74.part.js": "4cfdba706b18419200c091ba0b0290a4",
"main.dart.js_235.part.js": "628c80146ee136f7a28fdc8f3cc20a72",
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
"main.dart.js_118.part.js": "823e2827cfc3ab5a99a117c60ff3e710",
"main.dart.js_26.part.js": "d0ae841ca3af88e53d1f0ee071d7baa1",
"main.dart.js_240.part.js": "6f38961a0f9047cf8fef0928780a2b11",
"main.dart.js_20.part.js": "76528bca6d48b877480c5f12f60dd788",
"main.dart.js_189.part.js": "97e26de591a4e6a14a7dfc98e241a785",
"main.dart.js_51.part.js": "c5ab7258389f9e78d9585155ef7b75a4",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "86af6e7f50e81ec6d995246bd568ec42",
"main.dart.js_1.part.js": "546baa92c158a84e08320b1a1d88a3fd",
"main.dart.js_160.part.js": "c48b74dac599df82d4506906c40edef4",
"main.dart.js_120.part.js": "3138db18278825157534e4d2161f166f",
"main.dart.js_63.part.js": "f7c178d780147c914708107ba80b1668",
"main.dart.js_211.part.js": "36a10ebb732d00b9d6f7e0f3465eea04",
"main.dart.js_45.part.js": "e759dccab7abd58817cdd95e1e0b204a",
"main.dart.js_12.part.js": "493e762494eabff274aea093e2f46b52",
"main.dart.js_157.part.js": "ab30285df4837b1c2d722592f91fa002",
"main.dart.js_221.part.js": "0e8f2d36f699d5e0788ab46e0de7e8d1",
"main.dart.js_28.part.js": "b6c21460fa066dd3b5142d3423b1f351",
"main.dart.js_135.part.js": "5ce9dc764e061f705e6c8153f8203b81",
"main.dart.js_6.part.js": "da4cf5b9a1ddd9ba30eb423f7c3388ab",
"main.dart.js_237.part.js": "3eb15771d034da790396c1ca2191d7a1",
"main.dart.js_138.part.js": "24d1d7f2daae636a53b2655b1e84d737",
"main.dart.js_17.part.js": "78f76cf4c1fce360f551a643a920f562",
"main.dart.js_105.part.js": "b8bd998e26a86fa9047c790f353ca8e7",
"main.dart.js_206.part.js": "0bd8e0981a65b18ed15286115762987f",
"main.dart.js_43.part.js": "0500fe4ad53124574093e951fac1a6b8",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "8d14494e52e193d3be872cec9d18931d",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "16e7dee21e6953f2c569d3f8f6e64e17",
"main.dart.js_15.part.js": "0b021da35e1811eeba729a827ee762be",
"main.dart.js_151.part.js": "4e155cd73fc87677521fe300c71bace1",
"main.dart.js_19.part.js": "fd5df868c817a6192ba3b2cc68bb43de",
"main.dart.js_255.part.js": "d8084e1d8d71cbb8aba1c81f57c8f2ea",
"main.dart.js_186.part.js": "ca74c4baa6917e3cee7e6a04a0f15110",
"main.dart.js_163.part.js": "3874cf4895b4e5b9745e15dc5b25a58f",
"main.dart.js_257.part.js": "04be1860d26c4468a3d778b1338a4045",
"main.dart.js_16.part.js": "9fed89a8757ba7a4c3fce04fc34b9ed5",
"main.dart.js_250.part.js": "224068ca4f4111354272d6d8a2bcb915",
"main.dart.js_52.part.js": "7d59a360273c09c7081e3d956f823054",
"main.dart.js_199.part.js": "3b9d9077e7aca909bbcf41fff4b4f818",
"main.dart.js_253.part.js": "f2f7c7161e729129533eb979162d5953",
"main.dart.js_130.part.js": "e85f2b285cd1df67c1a146488b1faa4b",
"main.dart.js_238.part.js": "cf0e93f33dbaccc9966b8052c9a6a426",
"main.dart.js_152.part.js": "e06e5e644bb05c53570988ca81c4003f",
"main.dart.js_197.part.js": "a1fb2878c813896260edb90e30f9b758",
"main.dart.js_227.part.js": "bb75db83174ccb251c4ace84a885e081",
"main.dart.js_3.part.js": "23d04ebed7e04bae17e7a0b214e5c661",
"main.dart.js_68.part.js": "9693d32821f7fa776067b56f5712cbff",
"main.dart.js_38.part.js": "edb99f6c8f9480c3c927b601b9db4574",
"main.dart.js_225.part.js": "62d052fe46000865a32fe4f0f42e16b2",
"main.dart.js_248.part.js": "58b40131cc0ba152a2193289b0a5c26f",
"main.dart.js_133.part.js": "7dc14d043bfa47e7664c6a5f18700939",
"main.dart.js_21.part.js": "958f6d1c775031fc1ebaf9957089acd4",
"main.dart.js_188.part.js": "023372606d88f63a76527b357c16e79d",
"main.dart.js_204.part.js": "81d4ff9b95e22207d34926fea0084634",
"main.dart.js_24.part.js": "ec7a5ca30037697ef68ffd6c79787626",
"main.dart.js_111.part.js": "639e301ea9a3411ce3f1e6b55d806e3f",
"main.dart.js_177.part.js": "e09525d34e2df0f9cbdcb28bc2ecc08e",
"main.dart.js_85.part.js": "f2f76c9f567e7c0153d7ed9bcc769080",
"main.dart.js_243.part.js": "18ef749ecaf8ef907a756ff782864729",
"main.dart.js_114.part.js": "d93fddc69431a8c91c24b017a5ca1f5c",
"main.dart.js_39.part.js": "275982a5ad351a3e9a2e838c8e10a7d6",
"main.dart.js_185.part.js": "5667935af097ba5a4e80826431f82023",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "4b10bb9fddd6041d08066dd6405cc6a0",
"main.dart.js_171.part.js": "88eb1ddaec0171531dbf2dee472413c2",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "94ef3d9d54e32c4b5ded68b151ec6a31",
"main.dart.js_195.part.js": "5f9d72a136115306349db77774b40e1e",
"main.dart.js_44.part.js": "fef2b93a4779a0cbc22321453da238a3",
"main.dart.js_121.part.js": "a4d6773f8cf493f8e9acd47bf2e01755",
"main.dart.js_55.part.js": "ecb46afc02c62f16b2c380ce89d62edc",
"main.dart.js_215.part.js": "9f6b1c66af3e1056d8ea5718c45d662c",
"main.dart.js_112.part.js": "c8e7e0547fb01a1ae110cc2f00fa8b05",
"main.dart.js_139.part.js": "655ebaa0fbd2e4cb1f97044e45b7e2eb",
"main.dart.js_143.part.js": "87f9212105733f904be663d39741ee47",
"main.dart.js_80.part.js": "6c604c5824abe336a8c1dd6c3b603f5c",
"main.dart.js_252.part.js": "0e70f91b493bb3593d51cb475fe66609",
"main.dart.js_233.part.js": "d7a7d77e9cc8c2bbc414fa8f2b347615",
"main.dart.js_30.part.js": "02cdc651d87014015fc3177f7d14eb00",
"main.dart.js_78.part.js": "e844fa854d30cff533f009728c473108",
"main.dart.js_136.part.js": "25a05fd86cf2a22c377e327f33bde1c0",
"main.dart.js_168.part.js": "d17a430c0810e5638cc2799b0e5563fd",
"main.dart.js_159.part.js": "c2443a7cfe33f2316b3b639fca2c3bf9",
"main.dart.js_47.part.js": "14603c50354c7e33f068148aa5cc6667",
"main.dart.js_95.part.js": "c3b6a24a7aa22aa513fb41d8fa54fc68",
"main.dart.js_29.part.js": "d1ed7f4d1dbad2642f2af85429a91000",
"main.dart.js_194.part.js": "2af8bc619e4430c4c77b17aff0a54d94",
"main.dart.js_61.part.js": "d177bb26368505ecc1223ecfe6b663fa",
"main.dart.js_236.part.js": "28aa1f9155011fdbcb990c74a3a01649",
"main.dart.js_58.part.js": "fa72b3ab1531205195c910d662923ec1",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "72c606b355719304cc8a593390ba24b3",
"main.dart.js_54.part.js": "a3851603e52a7823835b96208edbf640",
"main.dart.js_79.part.js": "241bbcbbdcd0402fc0e589f81ed1018e",
"main.dart.js_109.part.js": "022cdff95b48044da44fdd24d21be438",
"main.dart.js_92.part.js": "fa15d74007a818f6826a0b47a6f24ea9",
"main.dart.js_224.part.js": "80a62445af92d797d31b1981192877a2",
"main.dart.js_93.part.js": "618c87bfa4f47dfd6b70953c9223a264",
"main.dart.js_223.part.js": "f4b867ae44c1d5ad71eabca426189580",
"main.dart.js_11.part.js": "1bef4ac74466235f52ef43c9a880e9c5",
"main.dart.js_125.part.js": "4afb1e3150549d87eea4fd7bfd3f27f7",
"main.dart.js_131.part.js": "f8e81b7b547fef6be667d9cdf4326f4d",
"main.dart.js_226.part.js": "8afbcb9ba8676210f6690171acf8a1f3",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "a3609081f34f078d6809825dd0295f29",
"main.dart.js_178.part.js": "fd006f1f065cd0c792a38a71db1c612c",
"main.dart.js_70.part.js": "bc6b2d20158b5d92b389d62784f460fd",
"main.dart.js_187.part.js": "e9d702beb6952f27fd691e556ed00922",
"version.json": "b42db690aac29984a2443e81f6ff47de",
"flutter_bootstrap.js": "5fc384df399234f38fe9c1b955f14cad",
"main.dart.js_191.part.js": "d653390f4392dbab31b01fbe368b5fdd"};
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
