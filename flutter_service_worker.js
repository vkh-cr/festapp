'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_8.part.js": "8d4467d13a21632f51bf79b76740dba0",
"main.dart.js_180.part.js": "69818e36977f911ace355c37521c49bb",
"main.dart.js_73.part.js": "4d8c2344145963473747b81aab648271",
"main.dart.js_196.part.js": "8ee49b48e5cbf90c9ec385c7e434cf9a",
"main.dart.js_188.part.js": "20b5efac91113ccd95c4680a000908e7",
"main.dart.js_75.part.js": "ef1bf7f8695e833e12c05df9adf96621",
"main.dart.js_22.part.js": "5d47472732821320a96ea3b0203b68f2",
"main.dart.js_133.part.js": "d7aeaa42f531115a291931d6a2ff7285",
"main.dart.js_39.part.js": "44e062065e5238ddb4d2349d5d080138",
"main.dart.js_119.part.js": "54c86f9d04b8e7e76cf4435a60dd0ed7",
"main.dart.js_91.part.js": "0bc30fd44d6951d16a2267428c72e903",
"main.dart.js_232.part.js": "0086fd6e1be8f2f38eeb3ec9c2a972ba",
"main.dart.js_125.part.js": "d37476e062680dcd660b30d166ca1cae",
"main.dart.js_182.part.js": "2da044d95842693e5b73c446a5293dc6",
"main.dart.js_11.part.js": "ee1ab2098dc7f6fd02016023efc2575e",
"main.dart.js_137.part.js": "02f6dbd44de04ecf95194cb1adf778f2",
"main.dart.js_174.part.js": "5d71efc4bcdc007c80028dbde838e344",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_195.part.js": "e6041bbe2e3776d3473a5a6836738dcf",
"main.dart.js_33.part.js": "744311baace482878ccb5786311f651b",
"main.dart.js_162.part.js": "9489bfdd7fdbda1a9f947a65248b0db0",
"main.dart.js_197.part.js": "4990ef922084045768b502413e705c85",
"main.dart.js_151.part.js": "058195fbd90f5aacc0472fd4b6fb3a8c",
"main.dart.js_205.part.js": "fef3114fd375a797cf46ffde3eb4cef3",
"main.dart.js_99.part.js": "015f49fbcb4c886f4f60ef8293774c62",
"main.dart.js_12.part.js": "7e8b148184aa2c0f5c2d9f4a0e837b39",
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
"main.dart.js_57.part.js": "828de524434477462719880d5b89d8aa",
"main.dart.js_185.part.js": "493b7ce9e84cc023acb28ac0e0724e42",
"main.dart.js_184.part.js": "ff26edc24bb13b84187de9e4371cf599",
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
"main.dart.js_175.part.js": "bbff6f5ae3f2abcd0616cd46b8f8ef09",
"main.dart.js": "916152bf032cc9cc5c4b8625b9dbde2f",
"main.dart.js_92.part.js": "47d4ac943d42561656e1260a0165be25",
"main.dart.js_157.part.js": "f2fcd5e35e7ac98e7f8416a19104080a",
"main.dart.js_14.part.js": "9ac388098728c1a5b7756d8266409db3",
"main.dart.js_187.part.js": "55bb7daa53601842a94d2849ef99a4b0",
"main.dart.js_26.part.js": "69d25ab2cf103197e6d81e2843cb3353",
"main.dart.js_58.part.js": "21cfc73cd767518c9c1d8e0e2015beae",
"main.dart.js_193.part.js": "aa65f93b6a362446889ade7ae8d376a0",
"main.dart.js_221.part.js": "c2c06a5aac7c97282f2838f0ea3a5734",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_134.part.js": "9e51c6af70c70433546e4389f9ac2a87",
"main.dart.js_144.part.js": "d1eab8ba5e7454542a0a206cc7e46225",
"main.dart.js_186.part.js": "7e7dddb3869d2b83eeb6828fcdc2739e",
"main.dart.js_130.part.js": "834b21996cddd331647fbc74f0269d25",
"main.dart.js_219.part.js": "dffac0497ea5116b6765119da927e76a",
"main.dart.js_27.part.js": "0641af58efe4d3b344fe3987d12103d0",
"main.dart.js_139.part.js": "b89abbd3e204f44957800f920049e2af",
"main.dart.js_178.part.js": "901352ac467aa6fdc0763cbd17468f7b",
"main.dart.js_161.part.js": "110d5a40393e5538e75b0d1e35c38103",
"main.dart.js_93.part.js": "b338945e28ae535a572628b5a35ac98f",
"main.dart.js_3.part.js": "a137b8b3b9a426b16f63b29ec4ef78d8",
"main.dart.js_210.part.js": "e4ff11e343ab1a4b8d790b98dd1f67a5",
"main.dart.js_104.part.js": "6f7e77e69240a3a2f6d99bc972ef2787",
"main.dart.js_79.part.js": "d4d84e884aa35c24134a73715a1f87d9",
"main.dart.js_30.part.js": "74debf9f08e89712af047dbd9c43f540",
"main.dart.js_112.part.js": "1ebd0cb3db5cb37bb896b235a5d8ab4e",
"main.dart.js_198.part.js": "395d1b410ffadc82f9f6dbe0b2dd4d96",
"main.dart.js_128.part.js": "357650696e49b826edbd0dd5eb92eed2",
"main.dart.js_113.part.js": "c53c218deac1b6289b1673497526dae6",
"main.dart.js_181.part.js": "768ded7f6120ebb6884329788657a2ab",
"main.dart.js_241.part.js": "5391e8b49309a92ac1374bce1886c240",
"main.dart.js_206.part.js": "53c544d0fc740bdfd2512d599771acf9",
"main.dart.js_37.part.js": "737ffd5ab484b822687f0baefc530f73",
"main.dart.js_153.part.js": "f39785100f254d589ab8b78db1bd7102",
"main.dart.js_163.part.js": "a638dc156993301f2beb1419cf912c0a",
"main.dart.js_94.part.js": "059774f22062b4438bf031a713eef10f",
"main.dart.js_114.part.js": "4f07f9b691ac0ef8e8c8ad022acd4664",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_107.part.js": "e7fe5d67cfb98418f2407aaf33e6aa87",
"main.dart.js_101.part.js": "b13bc2cc93358bf4f88cd6a7b73560ae",
"main.dart.js_61.part.js": "c13fb0fadae640ac22c4dd69d657e9cd",
"main.dart.js_230.part.js": "0edc3fc5e88b6b2f8827b879df3dfac8",
"main.dart.js_44.part.js": "c4b7f4340ff177c9394497582fd6e8fa",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_223.part.js": "0487d65eac5c0fd21bc6f3c1ab079140",
"main.dart.js_62.part.js": "d368053b786a8743e6fd747b38cf3df3",
"main.dart.js_15.part.js": "c56b02532c8919c71955de986268a471",
"main.dart.js_229.part.js": "55fcc8d1d5b6f82442fb04bdd606cd0c",
"main.dart.js_36.part.js": "e7b40779e68956af4e1ca8e5197f6607",
"main.dart.js_76.part.js": "e623f3320aefc0d199c54a6e9da7fcdd",
"main.dart.js_135.part.js": "52226b2ee8389f727d362311025e4a6e",
"main.dart.js_226.part.js": "142bf0d94642da07ea6dbfc21ef87376",
"main.dart.js_40.part.js": "78c956d0ac2b1107abc626ff412dd218",
"main.dart.js_21.part.js": "dd6ab54cf8b31f12d7ef12af256d408e",
"main.dart.js_80.part.js": "04423a54eec30ceee5f4a263b6d7d6cc",
"main.dart.js_131.part.js": "3b9d0885a733b2e2d0bea47f10b5207d",
"main.dart.js_215.part.js": "41be6158305bc533f9248147e47d8c31",
"main.dart.js_171.part.js": "14887337c2519939320c2552664632bf",
"main.dart.js_179.part.js": "3624313d2fba8beb7d74cbe25bca1b50",
"main.dart.js_31.part.js": "90266d279a624e84f2b07844386bae26",
"main.dart.js_78.part.js": "e2996a54e52a7bfa92435f767693319e",
"main.dart.js_106.part.js": "16baefb009fbad29a60eeb86cd942cfd",
"main.dart.js_74.part.js": "78cdabb9303ad27e79fffd787ebcdd70",
"main.dart.js_53.part.js": "058c65894e6302f1c14fd6504a6e9805",
"flutter_bootstrap.js": "c5cbf9811c773d0d3f8ed01f43708ded",
"main.dart.js_211.part.js": "74d9f793db7c187361876f2c53a9db04",
"main.dart.js_108.part.js": "ad3d5eec5a09c011a49e979ce91584e4",
"main.dart.js_1.part.js": "b83fd3b347adef83946966d7a434f73a",
"main.dart.js_183.part.js": "8897b2ea8a31c42cf789346f328c52b0",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_111.part.js": "a39e75a850344c983de56387bdd12595",
"main.dart.js_89.part.js": "b3cc33438ee5ca47a2169a4ed9a8b238",
"main.dart.js_156.part.js": "94db2ed7dcde7c814871888b2c6148b9",
"main.dart.js_25.part.js": "8b090913e57d059df426914ffa29c4c9",
"main.dart.js_48.part.js": "7295274875d17caf2c63dcc61dacc03c",
"main.dart.js_160.part.js": "3588e07011a084d9f073bb97e90003b7",
"main.dart.js_233.part.js": "cbf761d41e044065148cd52104789e81",
"main.dart.js_110.part.js": "d78d3b6c9f21c9eec9c4b394316757b1",
"main.dart.js_138.part.js": "92b41bababd987391ff8971134078464",
"main.dart.js_51.part.js": "cd8bd720ad122a3120e048545cc87215",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_228.part.js": "d1cb24482d150bb7f230f3ab01bdd85f",
"main.dart.js_10.part.js": "9930eb2992e2bc37eb758a864af17802",
"main.dart.js_159.part.js": "55692e9146687736bd32984f34c77f21",
"main.dart.js_214.part.js": "dc0c4efb8109fe732687809b69bfbd7f",
"main.dart.js_237.part.js": "7655351ae85823edd2813c87d2d67b09",
"main.dart.js_87.part.js": "0cb8d1c063fb7f56dfaf391980107ec3",
"main.dart.js_218.part.js": "65963fe193f94c3a4f4492f0385d915d",
"main.dart.js_172.part.js": "ab39f08afe1f2746587cfc3518d89d8a",
"main.dart.js_23.part.js": "9edd05032c08930155204c23c0199c39",
"main.dart.js_72.part.js": "ccc7d7ee6752dfbc2feb88d8a9cdf158",
"main.dart.js_77.part.js": "908262b11646ea2a50913c84e5de3e50",
"main.dart.js_189.part.js": "96124677c6cc72e6349ec73f87f0cb76",
"main.dart.js_69.part.js": "f27bcd82b91479df99107795c4f54b4c",
"main.dart.js_35.part.js": "282ed3b78288f52770f1d18a0d201ccf",
"main.dart.js_136.part.js": "cea0e658ec42203352669979dd2a92dc",
"main.dart.js_222.part.js": "62f2c193c0cc4961da266d72d08ac250",
"main.dart.js_59.part.js": "301c022ee5f441beacabe32e2834c95c",
"main.dart.js_95.part.js": "99a5d03933f0c8374437d3bbbe5a54e3",
"main.dart.js_84.part.js": "fbf60070c9652988347248116f6a95d2",
"main.dart.js_115.part.js": "fbe6d615da48d63e999ef68a1f81de8e",
"main.dart.js_227.part.js": "eb97af0f87dfc148f2a7ee2f9f7f68d4",
"main.dart.js_88.part.js": "da182c11ce25a0e37c91edef3ea6d3af",
"main.dart.js_220.part.js": "a06446c73e3424b1fb8de6afa73e4a5e",
"main.dart.js_100.part.js": "b2fdc921a8eba69600fbab38763d6e7a",
"main.dart.js_149.part.js": "ef73bd9f2a93458ead805fe2604530fa",
"main.dart.js_200.part.js": "e2d05994fec9896fa0b659113900dc9d",
"main.dart.js_167.part.js": "bb8bd331dfd8545e9a353eb06f3e2272",
"main.dart.js_6.part.js": "29a39f1292ef289ec6e1b46dcc5da698",
"main.dart.js_109.part.js": "8bc77b567c20523d9890da536af9d475",
"main.dart.js_120.part.js": "468d4baa9468735831085ff726e33d30",
"main.dart.js_127.part.js": "637711911df738082511770f28b2cf9c",
"main.dart.js_64.part.js": "46d85d18bc255085947aef4f56ac4df9",
"main.dart.js_217.part.js": "e44899c845c0515007c52c84fdf75942",
"main.dart.js_121.part.js": "c9214858cdc46c597ae73598a336ab00",
"main.dart.js_166.part.js": "a86d1152eec3643ddd5b60ac8175d77f",
"main.dart.js_239.part.js": "171a3853f7eceaf4dfb6da8efa709ec7",
"main.dart.js_7.part.js": "85efaeec8cc74fb7299190421380a32a",
"main.dart.js_118.part.js": "ea17a966eb078ef5b65a966d039744a3",
"main.dart.js_170.part.js": "17062bda80275a6cd1fe610ecbfb1b89",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_208.part.js": "2affb57e8fa9685ea3242a9e55b524dc",
"main.dart.js_83.part.js": "d17ab137cccd7084cf598594b96ad524",
"main.dart.js_209.part.js": "c05ac3067f60ebf2ab476cc53f0f0860",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_28.part.js": "d33755dfd6ec5ab886abb03784fd9501",
"main.dart.js_81.part.js": "9b827b33ed4037dc243fd1dcc83ca8bc",
"main.dart.js_124.part.js": "3f6b0dbc9905912f714e3d50c2df7131",
"main.dart.js_158.part.js": "a8b27bd3e1734820bdf1eb383ec822c8",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_169.part.js": "cb26ffc4b33e9c3fecfa881a155ccc32",
"main.dart.js_17.part.js": "76590e51efa6f435fa219b9b24700c53",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_201.part.js": "df0fb008dcb239b4d324a40f7c20e022",
"main.dart.js_236.part.js": "24034f2bfbd46558cc8e72fccd86220a",
"main.dart.js_50.part.js": "7c6f275f015990f326c226d1f2328dcd",
"main.dart.js_41.part.js": "2544cc7b3f9d1595c1702bd6f9dc19d9",
"index.html": "5139691bbd2bad27c942662b2ca566c0",
"/": "5139691bbd2bad27c942662b2ca566c0",
"main.dart.js_82.part.js": "d1d9b309aa2559d639470f969436efea",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_155.part.js": "1ba6de1a2f245375dcb0842518d689ca",
"main.dart.js_146.part.js": "afc6c32bbd0a87d8338d193aed2b8ffe",
"version.json": "09c85e06c357d17b583791623dc1ff58",
"main.dart.js_164.part.js": "07cc25cfd99c29035f815c3e44e8a47d",
"main.dart.js_177.part.js": "85b7b74d75c9adff0b8d2fdb233568e0",
"main.dart.js_43.part.js": "c975d097e30a38150e48509863011915",
"main.dart.js_34.part.js": "1267eb5ab59477a28d809a49d6c56b4d",
"main.dart.js_202.part.js": "ce71d09ae1580fd2654e8ee52efdcd19",
"main.dart.js_117.part.js": "9394f8c0288c447024ef987b0623414e",
"main.dart.js_235.part.js": "81d24645520221fbb672001a12f09c33",
"main.dart.js_145.part.js": "00fd7a75d5a996e44ba53fd2ee1bf88a",
"main.dart.js_105.part.js": "ec32bc2654cf4d1b073265ada71526bf",
"main.dart.js_165.part.js": "22eea7e610c855040d15449d10617b1b",
"main.dart.js_240.part.js": "8d51575401c43d08f1ec5aeb2a8f51e9",
"main.dart.js_98.part.js": "7d087b810284ac8d69d3e725bd5955ac",
"main.dart.js_2.part.js": "b32c7ce4882ffb95961654e9d52e26d5",
"main.dart.js_116.part.js": "98610347554c592e7a3fbfdff7bdbe6a",
"main.dart.js_212.part.js": "278f9a0e8a938971d2aedeb3e66fffb4",
"main.dart.js_234.part.js": "28b19709105319867a7c0f0cbddcb5cf",
"main.dart.js_224.part.js": "70909292097cb1f0ca6d6db82fb37d46",
"main.dart.js_129.part.js": "74e24f4bde22792e4e3f527323f20460",
"main.dart.js_152.part.js": "877fbe9849309b0068bd61e8eafbf846",
"main.dart.js_199.part.js": "f0e262cb7e997d8f4fd725a24cd6c8e0",
"main.dart.js_126.part.js": "be36da64d338353b5eabb491fc52bfb1",
"main.dart.js_24.part.js": "726199d7c4d9ac351b8b9e7df7a6ddd5",
"main.dart.js_54.part.js": "8fce5b0bb17c719dcfdd11c2c215ea4b",
"main.dart.js_60.part.js": "7b5433634468bc5d011d38490cb5dc5d",
"main.dart.js_231.part.js": "1683aadd7ed5ae2b9df9ad24e0b98351",
"main.dart.js_122.part.js": "55bac5982bd869a2fc9045c66efd8313",
"main.dart.js_150.part.js": "87d279e7efba552bb9fb58a29f3393e0",
"main.dart.js_16.part.js": "068f0bd85b192551891525dddca80720",
"main.dart.js_154.part.js": "3be2a1ce4c4981ec1d1d893ef02d588c",
"main.dart.js_140.part.js": "88eda59208da80f35a283c13b383b09f",
"main.dart.js_207.part.js": "d2e376583e8d45ef4ac18d9cc3f34d09",
"main.dart.js_123.part.js": "cb2f6e3792f54e118c59414197360c2b",
"main.dart.js_47.part.js": "018e226c7355da43f6308c8171faef03",
"main.dart.js_85.part.js": "2ba2e1c1eda49402d47735c0c8e7dd31",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_216.part.js": "75f0547d5947273da4c8b370b6d3be64",
"main.dart.js_192.part.js": "503b93ea99b06b8dcb1b14a12334681e",
"main.dart.js_46.part.js": "83e47ba992c94791f83a1d9f01f37eba",
"main.dart.js_225.part.js": "ebfc082f426964d3c205689e9cdfce52",
"main.dart.js_19.part.js": "ffe580863a78fee6b2c14969d04304df",
"main.dart.js_18.part.js": "bb643aa26935023bcde0f7289c93c563",
"main.dart.js_67.part.js": "88d5c007a2030c6aa2e03ceb99f7ee9b",
"main.dart.js_9.part.js": "76587862564bd9374031135f917b2c0d",
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
