'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "d2dc634d6a000655503a3da284e2fdd5",
"main.dart.js_117.part.js": "8b0af2ba6d0c02b24fc29d694f94b45c",
"main.dart.js_182.part.js": "417089ead2769d652d4df03a50732a9a",
"main.dart.js_75.part.js": "f0c409ef9f3ffb8010085ff8330f3a10",
"main.dart.js_244.part.js": "976c1ba223bcede91ff616c3552ab26c",
"main.dart.js_83.part.js": "2ff9713a6193017764e2b3b861537846",
"main.dart.js_176.part.js": "e334a3ea8f73547e886a1dcbb3214975",
"main.dart.js_96.part.js": "357070433da8975b6c38b8c02e843936",
"main.dart.js_245.part.js": "283290223dd19b6e324c254395123766",
"main.dart.js_87.part.js": "2de30ee98b5ea3c42fddd528bab7e608",
"main.dart.js_251.part.js": "b67a539efc7bda31f8b441ed625fc1e6",
"main.dart.js_126.part.js": "920b3cb23cf80011630cda2e69b6d1d8",
"main.dart.js_129.part.js": "1d857a4d382d609a056cec0834a0ccd3",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "2cb47c5fefe2f6de9be30401fada63a7",
"main.dart.js_172.part.js": "baf95886d02431ad03a7730e8d8e56ce",
"main.dart.js_142.part.js": "43d3183d647be0f29c886b89f92d1ee4",
"main.dart.js_40.part.js": "d618a10c1b41699edede8dd770bd2be5",
"main.dart.js_209.part.js": "0e7a53d2649ec723bc4e9fc8a3376aeb",
"main.dart.js_115.part.js": "9166fdbbdfaa544744f04bc43f92a765",
"main.dart.js_10.part.js": "1b7e35d66f2b79d84fe54f3a04ed3620",
"main.dart.js_84.part.js": "89d45a7bc6553eb27adb3b2e42cf06cc",
"main.dart.js_122.part.js": "d3c6a0225bcdcfd228982b9fc4b192da",
"main.dart.js_230.part.js": "63e5262a9beafea709a7e08f03bf486f",
"main.dart.js_213.part.js": "fa724c8ca8dd9dee4c7fc27f80d7191a",
"main.dart.js_41.part.js": "11e1c442818c5b31dcb03f308ba35822",
"main.dart.js_89.part.js": "32bec5b22fa66eb3bdda1b8303884051",
"main.dart.js_71.part.js": "b87d7eb7d0f0b431f66f1cb7fe12bfa6",
"main.dart.js_146.part.js": "9bcf07daa583ecbdd23a9d3b1476cc5f",
"main.dart.js_37.part.js": "2cfb06df3625cac4b95abe0ba4020810",
"main.dart.js_132.part.js": "0a7f454dc11eee28e9d3e5e93448a636",
"main.dart.js_165.part.js": "e6650ac8f603faf46986995356a447c1",
"main.dart.js_127.part.js": "5c7269d526e8714f186d776410d153a1",
"main.dart.js_161.part.js": "d799f37b8ab57b61298d1501d8d23cd6",
"main.dart.js_175.part.js": "ab7b4ce70692ec25234959be7abb9ddd",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "2e5f209423599657f9526f1271569dbc",
"main.dart.js_216.part.js": "049ea93c1bec7e6fb98593e297539a30",
"main.dart.js_64.part.js": "16f5b3c85b83410388437d4eb2e1c140",
"main.dart.js_169.part.js": "384d026409c0c28e748abfc1face2a56",
"main.dart.js_13.part.js": "c2c33c2312121080c67468581b66f91c",
"main.dart.js_246.part.js": "a89d11a321883062f251dfd5b6f2d95d",
"main.dart.js_174.part.js": "7a7c8f0171a038c8e07b8f660169679b",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "0b757aa972dd82460aa3a24b5fbf61f5",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "bffbb8e0f78f662aca1ebe6e9615afee",
"main.dart.js_119.part.js": "33cdd4bfc31feaaa096bf663522c0c62",
"main.dart.js_18.part.js": "2c693eb91e4e360347098e3a905278da",
"main.dart.js_35.part.js": "c39ae3b3c40639e91c7507d93d751fd1",
"main.dart.js_200.part.js": "22c75e21041e6f9e4dace67cc93e67e7",
"main.dart.js_101.part.js": "e26af5b076acb2196385038f56a6761b",
"main.dart.js_77.part.js": "cb9d70579bac87a4ef33fb0eb3ce3ad4",
"main.dart.js_149.part.js": "d6fae2ae513416ac1e5d2166e9fdee49",
"main.dart.js_208.part.js": "36e63eaade7b556bb4760e640b38a914",
"main.dart.js_82.part.js": "9baaff683f76fa7978228b5a00b8460f",
"main.dart.js_173.part.js": "b25fcecfe41a6e5d1e6134efc52b1237",
"main.dart.js_106.part.js": "3df77a1a2ea14054ebdff3c9b05b55f0",
"main.dart.js_62.part.js": "399c9687fcf2767174872ae3bed13554",
"main.dart.js_259.part.js": "c57385426d544ab3450b6fae4ccff799",
"main.dart.js_207.part.js": "efef50762223bbec9cd3fcf4e80eaa67",
"main.dart.js": "4d64a858f93eebc959f1a68fd391941d",
"main.dart.js_222.part.js": "b93e1a001e2f46235638fba8e2be9566",
"main.dart.js_232.part.js": "7ff690c4ff3f2c35b43cf87fc9dcbde4",
"main.dart.js_148.part.js": "8f9f0d363bfc502e8a72098c709722cb",
"main.dart.js_124.part.js": "f4e0926606b2ceb47999e7498b76e267",
"main.dart.js_50.part.js": "cf19d94d52230a702b2f86907c2a8218",
"main.dart.js_97.part.js": "25696b7f1da598c5a31d713a9716a2ed",
"main.dart.js_192.part.js": "7d2fc0f5f52bcc50aeb490018841fe4b",
"main.dart.js_145.part.js": "1ce65c9542370e2087da81fbfadf8a93",
"main.dart.js_229.part.js": "67cad73bcecd5859f6c436d01a3f9711",
"main.dart.js_190.part.js": "8c39e327ddf54ada90cdf560acea290b",
"main.dart.js_104.part.js": "f45c67353b2254df9bd1da44147abb28",
"main.dart.js_201.part.js": "bc9e9060df27d64bfdf0c04a94a3834b",
"main.dart.js_69.part.js": "e7df39e0b78fa9355cf6140d5e3096e0",
"main.dart.js_181.part.js": "eb264f2a666ac417f8909bf9bbf93b62",
"main.dart.js_33.part.js": "413940682e888a89cca378222eb6e29d",
"main.dart.js_34.part.js": "a41a13964e5a28ec7fd52ef6f99a63cd",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "f05098f60413a7f4eeeba4979ade3f01",
"main.dart.js_88.part.js": "0725335486e21d5dc04818549b45370a",
"main.dart.js_202.part.js": "951d4d48128ebdf5ef09066d38e6b147",
"main.dart.js_183.part.js": "fcd30b9b56d03dcdf9b98b71f4e839dd",
"main.dart.js_167.part.js": "840cfc0bda3542f97447430571d85920",
"main.dart.js_203.part.js": "4c5429fe1b5c7d6199bfa6f3a0d44651",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "7941f7fdd6142bca60d2dcaad72a48f9",
"main.dart.js_247.part.js": "eb9e8287f51b03f68812fe37b43ff7e3",
"main.dart.js_7.part.js": "3ce47156c2118b71d066b035f8327dcc",
"main.dart.js_228.part.js": "cc28e1fe19f7a342f1d5dd61ff487e8f",
"main.dart.js_170.part.js": "7ccb4671210bd746d41a1dd080988f8b",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "3687eb7c65fe566b2e9713f2ec9ed2cb",
"main.dart.js_27.part.js": "ff55f011468f148efe9b1a6fa86aa2be",
"main.dart.js_156.part.js": "84bf4745d73d513b64c60eb23df0edb1",
"main.dart.js_116.part.js": "1ee28ed861b3410438194e4c6534a935",
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
"assets/assets/translations/uk.json": "bfcb7a6ccfa1e551397f6a64151d2029",
"assets/assets/translations/pl.json": "9db332fe1a177d9c70e712ca72310dfd",
"assets/assets/translations/sk.json": "8fd1739c4932835dc08c46bd6e173ce2",
"assets/assets/translations/en.json": "a98b264981398795308e804352722981",
"assets/assets/translations/cs.json": "673435f05124fd7c137cd77b67dee348",
"assets/assets/translations/de.json": "11d793b675aecd44573ae9e9979e07fa",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "4df8481df7f84b4072cffd97e8cbf0a1",
"main.dart.js_147.part.js": "7e085494dc5a5f576c852c05ae6b7991",
"main.dart.js_220.part.js": "6124fef8e6344c6242d5edf73bd16fc2",
"main.dart.js_25.part.js": "f4102c04d9fa4812c73972f09cca0c44",
"main.dart.js_249.part.js": "15745bdf0073b312953c7cb965c935e5",
"main.dart.js_123.part.js": "101ac63a7c1b05b899ea7d305fb14ca4",
"main.dart.js_241.part.js": "7376a4523e4e22c6fd30edffd19566f8",
"main.dart.js_8.part.js": "0d836f117b610987bca153bbfb1fc069",
"main.dart.js_198.part.js": "4fa423fe7bc7c4cad9438f1f8eaf75b8",
"main.dart.js_81.part.js": "6061979b296ce058581718e43eebf9a5",
"main.dart.js_113.part.js": "e8022275c447c5d97f498f8e8f064028",
"main.dart.js_9.part.js": "14410f5079f3e2ef8a55c5e29892209f",
"main.dart.js_22.part.js": "09ce904ef3bf6f13937048ee250d72a5",
"main.dart.js_242.part.js": "91fbebe0d7037dc5f7c89deae2ad7170",
"main.dart.js_86.part.js": "f1cb1314b09d8dec62ec4ff7d1916fac",
"index.html": "41a2874b903fdc4f83774d2cbcac02dd",
"/": "41a2874b903fdc4f83774d2cbcac02dd",
"main.dart.js_94.part.js": "d02813f4d8aacf0bbb82f578d42c26c5",
"main.dart.js_98.part.js": "e0062175763b6c5cc907c8c35dfb429a",
"main.dart.js_53.part.js": "be37f2cf3581479a08c826d827fe000c",
"main.dart.js_74.part.js": "a383ecc95bff32d99318677509b9ff6d",
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
"main.dart.js_118.part.js": "63cadfd9bc3042dc1a141ebafb5764cb",
"main.dart.js_262.part.js": "73569aee0b53ffb1881e94156d9f4fdb",
"main.dart.js_26.part.js": "7192b4df977f179dbbb07c7490b05b7a",
"main.dart.js_20.part.js": "ab902b33a24b892107ce4640075f91bf",
"main.dart.js_189.part.js": "d99d204354f3464dcd0cf32ab78a2f2d",
"main.dart.js_214.part.js": "1539b7e3cfd6cc96dd1490a5d83d8a51",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "769b3e96eeb23f0bb092416ffadcfe7d",
"main.dart.js_1.part.js": "2fbc50829de0edcd37c9f07a227f1a81",
"main.dart.js_120.part.js": "af70d4dc8a3027208aa5bc8d39965685",
"main.dart.js_63.part.js": "a05fcc3de4415125cb7003bc13307098",
"main.dart.js_211.part.js": "e347cd90ba4488029a52cd5273275cbb",
"main.dart.js_45.part.js": "86fa2b3472d8e02019920f41a46819cc",
"main.dart.js_12.part.js": "29ca559b966bf74aa6d30bf87cbf2658",
"main.dart.js_221.part.js": "c295f8375b96e95564012088a1c983df",
"main.dart.js_28.part.js": "382b12ee89362db08088544602fa8238",
"main.dart.js_135.part.js": "217fecc172f9d26fbd44770c71673746",
"main.dart.js_6.part.js": "28f714ac245da5a6380d8b50f22a1ef5",
"main.dart.js_256.part.js": "09b6c91c149b4921c778a1e7a9cf2464",
"main.dart.js_138.part.js": "616a82b8916d686a52ab0e1bfb37017c",
"main.dart.js_193.part.js": "ae4c88baa28eb000e9a8c01cfd49088b",
"main.dart.js_17.part.js": "35bea8f30503cef84d976c3fa45c98c3",
"main.dart.js_105.part.js": "bdd5770d4517a0211c197ba056cac63a",
"main.dart.js_206.part.js": "ea8780e0fe1e12ded20f429fcfd93c77",
"main.dart.js_231.part.js": "2d61588c9fa8bb442a774d5bf48344cf",
"main.dart.js_43.part.js": "79a8621a04c44b43e916bb354fcdc8d4",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "973077a95ea59c404aed9c8e375c25f3",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "5ab151ffa718daa30bc606c22e1e9eb9",
"main.dart.js_15.part.js": "4b630ad4440c6e98663761d209ec1c47",
"main.dart.js_19.part.js": "d98076347e5c1c958038873c4b3ca9f6",
"main.dart.js_255.part.js": "15e3ee9a171724d5aa4e4091c0579f36",
"main.dart.js_163.part.js": "dcd1325e997d87fd299e8cbac51aacec",
"main.dart.js_154.part.js": "70720c38e8405243c716383397315f93",
"main.dart.js_257.part.js": "506dc6f082deb8f728f5bf9c1afbf879",
"main.dart.js_16.part.js": "9ec7d14cd231ffc0ce4c38feeadd6b75",
"main.dart.js_250.part.js": "20d4c0522c9134ce1190a37fff094434",
"main.dart.js_52.part.js": "135d6037233b4fe466a225cc006475c0",
"main.dart.js_199.part.js": "7c4ba306a2cb46b7c875f206a94d7893",
"main.dart.js_253.part.js": "e42f2ced4c2762ecb744817fe86f87e8",
"main.dart.js_130.part.js": "397b490afcc3871deac6e7382012b154",
"main.dart.js_238.part.js": "211a3034f8bd34ae5f9dab056c364ee3",
"main.dart.js_197.part.js": "9f59b1f449fa4751005dbc7f74608be8",
"main.dart.js_56.part.js": "6956a978e4a0602db13291392ca16fc3",
"main.dart.js_227.part.js": "0b1d442b0de47028a66266ef83eba9ff",
"main.dart.js_3.part.js": "ad6b75ffaefd067505f8e6c168e54388",
"main.dart.js_68.part.js": "87c755bbb5eddf8b359e438df21893dd",
"main.dart.js_38.part.js": "f1a7f0fb617952e120ea29808a5e591f",
"main.dart.js_248.part.js": "f8ca1fd2efdec6db7d5753be9d4ab7b3",
"main.dart.js_133.part.js": "8746865ba6cb136ba7c350db764c6a7d",
"main.dart.js_21.part.js": "ea5dd0acd43990c08b5cce95ee495597",
"main.dart.js_188.part.js": "fd0a359718fdd40dec02f05cbc607d49",
"main.dart.js_204.part.js": "b36bfb9df0b16f264496b25093e8f8ca",
"main.dart.js_24.part.js": "821548067f8d603ef557f026222b5da5",
"main.dart.js_90.part.js": "0a7b96b06a9b105738cd17747c5bc87f",
"main.dart.js_111.part.js": "48091c273344cafe3fb1f369a28c5874",
"main.dart.js_177.part.js": "8250d5bd69782e10d504644b17c5a0ae",
"main.dart.js_85.part.js": "71688c122f137410e1a486f9dcab451c",
"main.dart.js_243.part.js": "a18fc5455be9afc32080bacd3b2fd261",
"main.dart.js_212.part.js": "e8760ac4a6300c230e5239967b79ec0d",
"main.dart.js_260.part.js": "c8a7c622a4fb183b510b321a0ca48a54",
"main.dart.js_114.part.js": "5de28876f83137ff2d07ff849c2d6deb",
"main.dart.js_39.part.js": "243c4a3ca644f422090f892da3b6ce21",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "4c31266460063f9309c98083d579802a",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "be154a98b8abe4d8436dd014aac5472b",
"main.dart.js_195.part.js": "4c425ef39e2feab13456851e6e7e21ca",
"main.dart.js_44.part.js": "192afdf30ff850039d2ca431ff802a90",
"main.dart.js_121.part.js": "81da0ff907ee1fc4caea85d8c8e0bc9e",
"main.dart.js_55.part.js": "1315392b6592b027926ddb18faa44c43",
"main.dart.js_215.part.js": "bfc12823d1331c7300089c8ed45b2774",
"main.dart.js_112.part.js": "b13abff7528161a0baf028af87402533",
"main.dart.js_139.part.js": "921ee7d5636df85bfe7f52830ceac25b",
"main.dart.js_143.part.js": "652782df242a841ccd5205170f4cb5ec",
"main.dart.js_80.part.js": "7f097b9e632cb22c8899a5cc049aa034",
"main.dart.js_252.part.js": "ce403284ecaf00f3a0e425d071b6bdb5",
"main.dart.js_233.part.js": "8952e85a06d6a708cd8d2f758f9941c9",
"main.dart.js_30.part.js": "721ef99df73ce0263466571b22e2b903",
"main.dart.js_78.part.js": "02f7449f782cc5ae8862b0796444b4ec",
"main.dart.js_136.part.js": "a3c157dff2808eccc6fbb95ec1ebc60b",
"main.dart.js_59.part.js": "569cc12010b172fcd9e2e596a66e3e21",
"main.dart.js_47.part.js": "6dd97d0c6e7b74dca02b287c83860640",
"main.dart.js_107.part.js": "d9c2aea78eebbf4b81602168f5b286cb",
"main.dart.js_29.part.js": "4c7b9377e28f30b012537eaaa796812a",
"main.dart.js_194.part.js": "47ebce21cc595e4af74e2dcd03296e97",
"main.dart.js_236.part.js": "25d2fc75074c2bb676cceb8720036723",
"main.dart.js_58.part.js": "035de0f6173108402f71cb9adbc5680f",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "9bc89dfed3adcbdee790757ad0a7197e",
"main.dart.js_54.part.js": "0113951e4d4a1119cc985b0af6ce47be",
"main.dart.js_79.part.js": "155ea25f2d4bf1a05d3c83a5d55619b7",
"main.dart.js_92.part.js": "7fd73240707603d91f611d319d27d9ef",
"main.dart.js_224.part.js": "8ab07244989adc4850a31830dfc929c2",
"main.dart.js_93.part.js": "994a77187f5fde2bd2649ef9f0f46358",
"main.dart.js_223.part.js": "0e47ddd98696b063bf22cce719bcdaef",
"main.dart.js_11.part.js": "549bd58ff2a2ce67aa5cc5992f69ee53",
"main.dart.js_125.part.js": "2063c41a5735fd62265538051779cdac",
"main.dart.js_131.part.js": "e92964d6ef6421442f29fd7d10302aef",
"main.dart.js_226.part.js": "8864ff336709dfe71a7c94309d4902bc",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_178.part.js": "5e2876f8f0746887127cf057f7b6b7c7",
"main.dart.js_100.part.js": "5b647cee9cb97fc4361d3109cbd3366e",
"main.dart.js_258.part.js": "725bcb444846467e6baf90ca6e18e4e3",
"main.dart.js_187.part.js": "5b4a8f0da183fbd965401bc6abc06df0",
"version.json": "d20805875a1de26e18ff8a1193edc851",
"flutter_bootstrap.js": "039349c304f9bf238dcc92d849d18e10",
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
