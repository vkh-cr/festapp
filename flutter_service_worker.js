'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "2f46e5296a23ae648f2a15c47cfbc6f6",
"main.dart.js_117.part.js": "f4ca84791574ee20cb1c0ca0e38f38ab",
"main.dart.js_182.part.js": "417089ead2769d652d4df03a50732a9a",
"main.dart.js_75.part.js": "f0c409ef9f3ffb8010085ff8330f3a10",
"main.dart.js_244.part.js": "976c1ba223bcede91ff616c3552ab26c",
"main.dart.js_83.part.js": "f9714eb538d5b9e0efe3c99d0597c3a6",
"main.dart.js_176.part.js": "26b965edd1677ed019e02b3f4c04ce69",
"main.dart.js_96.part.js": "039c5e40a1aec3537a19ffa6a9678714",
"main.dart.js_245.part.js": "283290223dd19b6e324c254395123766",
"main.dart.js_87.part.js": "50b230fe79a6a033a3a504a7031786fb",
"main.dart.js_251.part.js": "8737dbcd371433056e25e3bb081e63f1",
"main.dart.js_126.part.js": "74e62f2e1b104de718f5a5bde05ddea9",
"main.dart.js_129.part.js": "e8e4add1800d3f0ce3ad6d8d0253e8a1",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "2cb47c5fefe2f6de9be30401fada63a7",
"main.dart.js_172.part.js": "3b93e6734c93463cd196739c7321d6ec",
"main.dart.js_40.part.js": "ee8791dd11ccf8dba4d6236e2c3b598d",
"main.dart.js_209.part.js": "0e7a53d2649ec723bc4e9fc8a3376aeb",
"main.dart.js_115.part.js": "72a376ba6c17e97f99b0af8cf9a467ee",
"main.dart.js_10.part.js": "304a289f97df903b400ddcc2935393f5",
"main.dart.js_84.part.js": "521e8af91071136d7111912c7673554a",
"main.dart.js_122.part.js": "7371a9aee7dc9177ddcb06a5d72bfa17",
"main.dart.js_230.part.js": "7d913c14a0eb46899e726d32986bf1ea",
"main.dart.js_213.part.js": "1b0f99c608306c0a7376b2ba44ef4dd9",
"main.dart.js_41.part.js": "924c7595aa546c1a2d68205c91aa0add",
"main.dart.js_89.part.js": "3bf8743f017196594af6af1b390fd3c8",
"main.dart.js_71.part.js": "b87d7eb7d0f0b431f66f1cb7fe12bfa6",
"main.dart.js_146.part.js": "96d68bb034920c506c4adbee9e984bde",
"main.dart.js_37.part.js": "8a591334e84bb80cbe64ea74c434ed95",
"main.dart.js_132.part.js": "457f28cae62cc69734db4e3a35a4dc38",
"main.dart.js_165.part.js": "e6650ac8f603faf46986995356a447c1",
"main.dart.js_127.part.js": "6c4fe3d76e674fa2043a946b89d8f7dd",
"main.dart.js_161.part.js": "d799f37b8ab57b61298d1501d8d23cd6",
"main.dart.js_175.part.js": "64d6a973aa6cee63d5259a6b2a6a1768",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "7a5e6c971084e7f892d2ea744f9ed80b",
"main.dart.js_216.part.js": "30a114c31f4795590ee073a1704effb0",
"main.dart.js_64.part.js": "327277c08319ae268b59b89dc7204ced",
"main.dart.js_169.part.js": "76325706734a0ff4d40489c4a32b4b9a",
"main.dart.js_13.part.js": "d1c05faea95b59cb079daa00cf1d3439",
"main.dart.js_246.part.js": "f9a0a6b9b99777a07dffd949f23a74ef",
"main.dart.js_174.part.js": "eb0287f7d021abbb06176bce87eccb76",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "6ec31f9134ee4fcef2e11d6df8acc6e7",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "2171e44c47f3bcaf58b585c98ed5f487",
"main.dart.js_119.part.js": "770edf9f16adb2d59a57fa975dfdd63a",
"main.dart.js_18.part.js": "ecf52846346203fdd46ac49685fa58da",
"main.dart.js_35.part.js": "c39ae3b3c40639e91c7507d93d751fd1",
"main.dart.js_200.part.js": "22c75e21041e6f9e4dace67cc93e67e7",
"main.dart.js_101.part.js": "e26af5b076acb2196385038f56a6761b",
"main.dart.js_77.part.js": "64eb88db0fc186e3518b2e207c01bdba",
"main.dart.js_149.part.js": "278b86151929cad69f48771698146e47",
"main.dart.js_208.part.js": "611f5efa69716d1321f54368d8f03549",
"main.dart.js_82.part.js": "4fcd1d9003a75ac4cf716904ecadf3a1",
"main.dart.js_173.part.js": "4b9cbad5078a24908fb4dff862e1505d",
"main.dart.js_106.part.js": "3df77a1a2ea14054ebdff3c9b05b55f0",
"main.dart.js_62.part.js": "399c9687fcf2767174872ae3bed13554",
"main.dart.js_259.part.js": "c57385426d544ab3450b6fae4ccff799",
"main.dart.js_207.part.js": "a6fe546e1a6d1112fbfba3e7b4344bd3",
"main.dart.js": "18dd6c3897ea82052371d419c4b414b0",
"main.dart.js_222.part.js": "41cf8b1ba37eb8958365bb8b01937dd0",
"main.dart.js_232.part.js": "7ff690c4ff3f2c35b43cf87fc9dcbde4",
"main.dart.js_148.part.js": "c6348aaaebe74859c6912ef4ac3f3e27",
"main.dart.js_124.part.js": "380202cabc1eed67e690ff16e5289d4d",
"main.dart.js_50.part.js": "cf19d94d52230a702b2f86907c2a8218",
"main.dart.js_97.part.js": "d7c11b36172d8f1ec0634ca48326cf31",
"main.dart.js_192.part.js": "7d2fc0f5f52bcc50aeb490018841fe4b",
"main.dart.js_145.part.js": "13b66987a67c5e22a39459a124b6d13e",
"main.dart.js_229.part.js": "ce5688182f02f03fcdd47772d0e63469",
"main.dart.js_190.part.js": "0b6893e7ecdb363bb6e7acd58361ad24",
"main.dart.js_104.part.js": "f45c67353b2254df9bd1da44147abb28",
"main.dart.js_201.part.js": "bc9e9060df27d64bfdf0c04a94a3834b",
"main.dart.js_69.part.js": "de434a2d85ef0b5dcdc8f964934820db",
"main.dart.js_181.part.js": "eb264f2a666ac417f8909bf9bbf93b62",
"main.dart.js_33.part.js": "413940682e888a89cca378222eb6e29d",
"main.dart.js_34.part.js": "a41a13964e5a28ec7fd52ef6f99a63cd",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "a2defb05897f5ecbf15ca8285df39460",
"main.dart.js_88.part.js": "ab7dd38cc6a14aac5a8e9ff044839f6c",
"main.dart.js_202.part.js": "951d4d48128ebdf5ef09066d38e6b147",
"main.dart.js_183.part.js": "fcd30b9b56d03dcdf9b98b71f4e839dd",
"main.dart.js_167.part.js": "840cfc0bda3542f97447430571d85920",
"main.dart.js_203.part.js": "4c5429fe1b5c7d6199bfa6f3a0d44651",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "13b7459ee805f1025be2877c9d153e09",
"main.dart.js_247.part.js": "1d1a15d3457cbe2479314f2d59be2553",
"main.dart.js_7.part.js": "3ce47156c2118b71d066b035f8327dcc",
"main.dart.js_140.part.js": "4d07bbab201751f09cff23c5d7e5e866",
"main.dart.js_228.part.js": "d7b308d1eae5332bdf7d1dcd9b94b333",
"main.dart.js_170.part.js": "311e96171724067303053ee7ceb32feb",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "ab7933613c4546e903fa3a702862c9f1",
"main.dart.js_27.part.js": "9f3156a22accc0894a63471dc68f7eb0",
"main.dart.js_156.part.js": "40a79e4c3ba4aa686f1dadc7709de803",
"main.dart.js_116.part.js": "204469a3b8811997e367d1847210032c",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "e1ca1f3b197870cbce40d01a90ab738e",
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
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "44cee567cfe93c57bdd68866f508b057",
"main.dart.js_147.part.js": "5ba11c4448afef8aa993fbb7a5c9f032",
"main.dart.js_220.part.js": "e3118f8c5446282c2600db9a3fed564e",
"main.dart.js_25.part.js": "76b5acfa1ac8e1c93f40f1ab8a6a766f",
"main.dart.js_249.part.js": "c460c8f3af3d7b6da5f080927c1afd5c",
"main.dart.js_123.part.js": "fba0f6a83a8d1d84a25954cefd409e79",
"main.dart.js_241.part.js": "49b51034098a10dd3a749ad9972c2405",
"main.dart.js_8.part.js": "0d836f117b610987bca153bbfb1fc069",
"main.dart.js_198.part.js": "4fa423fe7bc7c4cad9438f1f8eaf75b8",
"main.dart.js_81.part.js": "6061979b296ce058581718e43eebf9a5",
"main.dart.js_113.part.js": "037ba7f2740623939ed71c9fa33da068",
"main.dart.js_9.part.js": "14410f5079f3e2ef8a55c5e29892209f",
"main.dart.js_22.part.js": "8742385f4c1512e5d24b76821e6673a7",
"main.dart.js_242.part.js": "24c0b2104d3d473e819488ef254ab363",
"main.dart.js_86.part.js": "0d40d5ed2ae4c8430856ef55c3348ec1",
"index.html": "1b1e91740452ea894965709d6b90ab98",
"/": "1b1e91740452ea894965709d6b90ab98",
"main.dart.js_94.part.js": "d02813f4d8aacf0bbb82f578d42c26c5",
"main.dart.js_98.part.js": "b1dc098fe681daa161a0a980439d0417",
"main.dart.js_53.part.js": "be37f2cf3581479a08c826d827fe000c",
"main.dart.js_74.part.js": "11a462e9dc01740b71aa0b0f6b6721dc",
"main.dart.js_235.part.js": "97dcd2ce5d01d6238432ec2643fcfbee",
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
"main.dart.js_118.part.js": "d8b825d8566feea02099ee93d250126c",
"main.dart.js_262.part.js": "44da01f926ae39de8031e3e65b440fe4",
"main.dart.js_26.part.js": "3a055d84e64e969f495510412193fac5",
"main.dart.js_20.part.js": "a90f513ed99d1a48c81315772cbb0bf3",
"main.dart.js_189.part.js": "d99d204354f3464dcd0cf32ab78a2f2d",
"main.dart.js_214.part.js": "f0a4bedf87f6d416be04d905bfca4a42",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "0d66c6fc6496c22a6aa709b527a31e16",
"main.dart.js_1.part.js": "01bf06cc0542e7e22818854e525c1bdf",
"main.dart.js_120.part.js": "92d1e3f0b4ee26aa93d94f7432fc5497",
"main.dart.js_63.part.js": "a05fcc3de4415125cb7003bc13307098",
"main.dart.js_211.part.js": "55916d69fc7716a23a1a5d2529fc2b39",
"main.dart.js_45.part.js": "86fa2b3472d8e02019920f41a46819cc",
"main.dart.js_12.part.js": "29ca559b966bf74aa6d30bf87cbf2658",
"main.dart.js_221.part.js": "ce776cbae32a098b14a024c58b6c3df7",
"main.dart.js_137.part.js": "b2060474a2a10a076d0c2c93c67d6b7c",
"main.dart.js_28.part.js": "ead10201c64e86fb320fe42075dfb2cb",
"main.dart.js_135.part.js": "5f346601d5a099eec27c8a2edb2e05e3",
"main.dart.js_6.part.js": "12d1b95e3d448077f6cabe36c06e2077",
"main.dart.js_256.part.js": "09b6c91c149b4921c778a1e7a9cf2464",
"main.dart.js_193.part.js": "d5dd9b9bd3f17f3caff131f9644038a6",
"main.dart.js_17.part.js": "f53f1b99d61398e2d3c6fc42a5564059",
"main.dart.js_105.part.js": "bdd5770d4517a0211c197ba056cac63a",
"main.dart.js_206.part.js": "ea8780e0fe1e12ded20f429fcfd93c77",
"main.dart.js_231.part.js": "46769532aa0550006e7a3bdc573d6624",
"main.dart.js_43.part.js": "c8698ad2ede4ba2368a96c8d359800ba",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "973077a95ea59c404aed9c8e375c25f3",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "74aa03fddcdd89ddf9f3ab3ffba72ab1",
"main.dart.js_15.part.js": "b4f6d23916a69a74a8e634204de2def0",
"main.dart.js_19.part.js": "d98076347e5c1c958038873c4b3ca9f6",
"main.dart.js_255.part.js": "9ccad842e1dc3faa7fdaa459e2c1afd5",
"main.dart.js_163.part.js": "4dbfac02c8b777f745549f2b1e855d2a",
"main.dart.js_257.part.js": "bf91a1dd96a7f397b5fb276fad11ff8d",
"main.dart.js_16.part.js": "9ec7d14cd231ffc0ce4c38feeadd6b75",
"main.dart.js_250.part.js": "794dd08cbe15280db4afd4be484cb2a1",
"main.dart.js_52.part.js": "e13b6992066e2d46c3a5c5aa7a82579a",
"main.dart.js_199.part.js": "333eed3d3c8efd72a5823dd1ba65eb99",
"main.dart.js_253.part.js": "c1949603fdf71fb66b50aa8708031efa",
"main.dart.js_130.part.js": "a87cc69de6a73cb0330eeb491332fbb4",
"main.dart.js_238.part.js": "211a3034f8bd34ae5f9dab056c364ee3",
"main.dart.js_197.part.js": "2d8cb98335d5034dcdc4b866412a6110",
"main.dart.js_56.part.js": "6956a978e4a0602db13291392ca16fc3",
"main.dart.js_227.part.js": "0ea54d0bcb7bf533c9e0b62221e36fc2",
"main.dart.js_3.part.js": "e98bb28cc52c1b627f319c605453f9de",
"main.dart.js_68.part.js": "4f33e34445d8f04092f8e6f879a4f76e",
"main.dart.js_38.part.js": "f1a7f0fb617952e120ea29808a5e591f",
"main.dart.js_248.part.js": "106fc8fd64d30336799cc09dd7ceb399",
"main.dart.js_133.part.js": "077953fe6779b6ce2ac3b23fe1a1e965",
"main.dart.js_21.part.js": "266a5c6d12d0822c423d9f0f6aea7aea",
"main.dart.js_188.part.js": "fd0a359718fdd40dec02f05cbc607d49",
"main.dart.js_204.part.js": "02b6fdaa0edf9cec57577dcbb67f21ed",
"main.dart.js_24.part.js": "f07a1039b47518ba22f9b6ea1db5502a",
"main.dart.js_90.part.js": "0a7b96b06a9b105738cd17747c5bc87f",
"main.dart.js_111.part.js": "48091c273344cafe3fb1f369a28c5874",
"main.dart.js_177.part.js": "4584d12e9c74ecc892717827ff140196",
"main.dart.js_85.part.js": "6cf6816a54ba72976a4ba2aabedff7f2",
"main.dart.js_243.part.js": "a18fc5455be9afc32080bacd3b2fd261",
"main.dart.js_212.part.js": "1f9e655e212e0748dcd77b010aee0860",
"main.dart.js_260.part.js": "6a2220e1bb8f325e7f7299236dee53f3",
"main.dart.js_114.part.js": "477f847018b06d960f431858c8336fb4",
"main.dart.js_39.part.js": "243c4a3ca644f422090f892da3b6ce21",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "c01d90f6f7023294796d4f39a0904c30",
"main.dart.js_171.part.js": "4c31266460063f9309c98083d579802a",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "5e5a3e82211161acb34bce8731e219b6",
"main.dart.js_195.part.js": "e901793e184e3a68b2f35d2be21bbd55",
"main.dart.js_44.part.js": "d7411929255c52d8cc7f4d12f43ce049",
"main.dart.js_121.part.js": "ed39c21e3b2f72e077e9f7073830ba5d",
"main.dart.js_55.part.js": "221bc356f2861ecc747c609e7d4a1180",
"main.dart.js_215.part.js": "bfc12823d1331c7300089c8ed45b2774",
"main.dart.js_112.part.js": "578687e6708db1ce2e2533ff41a56198",
"main.dart.js_139.part.js": "1aa8bc52f55dd5ff8e3eee58b2f4c86d",
"main.dart.js_143.part.js": "1018ec231298cf932c8ec774418744a7",
"main.dart.js_80.part.js": "9514688884bd46ac413c05999d65283f",
"main.dart.js_252.part.js": "ce403284ecaf00f3a0e425d071b6bdb5",
"main.dart.js_233.part.js": "93961c504f461e219ce3023d2a5f1eb2",
"main.dart.js_30.part.js": "b99a8fc2d0a212a36725e762a9ea95fb",
"main.dart.js_78.part.js": "02f7449f782cc5ae8862b0796444b4ec",
"main.dart.js_136.part.js": "670988840723855b697b6d7166e0ac0f",
"main.dart.js_59.part.js": "569cc12010b172fcd9e2e596a66e3e21",
"main.dart.js_47.part.js": "20132ed06704cee79be2319fe20c4f61",
"main.dart.js_107.part.js": "5644ab4fa81263a395ed5e57fcad0b22",
"main.dart.js_29.part.js": "4c7b9377e28f30b012537eaaa796812a",
"main.dart.js_194.part.js": "47ebce21cc595e4af74e2dcd03296e97",
"main.dart.js_236.part.js": "8a324df5c26beb7355f83085fbfa02e0",
"main.dart.js_58.part.js": "204631a8b247d694002ea0944d2c2333",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "9bc89dfed3adcbdee790757ad0a7197e",
"main.dart.js_54.part.js": "0113951e4d4a1119cc985b0af6ce47be",
"main.dart.js_79.part.js": "155ea25f2d4bf1a05d3c83a5d55619b7",
"main.dart.js_92.part.js": "5215eda11d9299fafc66d8bdfae7beb3",
"main.dart.js_224.part.js": "326ba99a6c973965f5024184062fdac0",
"main.dart.js_93.part.js": "07e49567cca7cef287c857f26ee2c65a",
"main.dart.js_223.part.js": "81a8df8c60b0b9770b4f7931974d757e",
"main.dart.js_11.part.js": "bfacbbdbefedeacc08b3f0ca5e6e5465",
"main.dart.js_125.part.js": "91110c82e06926b100b9c658f301b466",
"main.dart.js_131.part.js": "934f667667753251ecfe43cc5bd31830",
"main.dart.js_226.part.js": "3408fbb74906328f6ac751ecf0d80c03",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_178.part.js": "5e2876f8f0746887127cf057f7b6b7c7",
"main.dart.js_100.part.js": "e892651ec50ad017a79fea7d0ed9d738",
"main.dart.js_258.part.js": "49338d2c8548f76fbc9917d9ed3936fd",
"main.dart.js_187.part.js": "6d6f90c40e8a0931200230e48124cc3d",
"version.json": "931143561f8c3501c71e062ebbae3b6e",
"flutter_bootstrap.js": "a9d051200d4095de9246ebd6be68ae18",
"main.dart.js_191.part.js": "84581eb104053389618a7bc0e7cda27f"};
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
