'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "8a0376696797578d1306cf3135df4b0c",
"main.dart.js_117.part.js": "35c07fedd95302a55b058c99616d2781",
"main.dart.js_182.part.js": "aee91c4bbc9bdc386e9df4a50bf7584f",
"main.dart.js_244.part.js": "148e68c59c4c63df254579ec4b8e5775",
"main.dart.js_83.part.js": "61b6e9d3acd966fd911ec95a3fc66903",
"main.dart.js_254.part.js": "9eee54c749b2415da7cf30fc2832f452",
"main.dart.js_176.part.js": "6cf022fbfe866c3e2cb554d6020d7f26",
"main.dart.js_96.part.js": "4c8be5e2e26a45f3f9ace1f201ae16e0",
"main.dart.js_245.part.js": "5c420ddb09e3e59f7aa7268a3e97081c",
"main.dart.js_87.part.js": "f8cb1e1a8f93223d84de9fb29bfd384b",
"main.dart.js_126.part.js": "d2d28da599aaec262e1ab7ddba58dabd",
"main.dart.js_129.part.js": "d4445e333dfac1f7ba2482023c6ee230",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "d4f2f27363d61779b239b1541b095aea",
"main.dart.js_218.part.js": "36f1e14864dc518445a9d25522b41289",
"main.dart.js_172.part.js": "39b3ac7e3bf4810251e1086bb3fecb38",
"main.dart.js_40.part.js": "5940d744724c52fbb6cce23b19993638",
"main.dart.js_209.part.js": "1790289b5ace82b9d7b2ba85ef15a852",
"main.dart.js_115.part.js": "802b9ff6b0517e5196c3464dcd15ed64",
"main.dart.js_10.part.js": "0bcf042df3c2b9cdc42985d086b6efa7",
"main.dart.js_84.part.js": "84cdabfc71cf2d1e2470bae2f1171b49",
"main.dart.js_122.part.js": "cd153f7596c7e19cb2e1514d82cc6386",
"main.dart.js_230.part.js": "5be367bd88c89774cfe227e96cb971bf",
"main.dart.js_213.part.js": "71a39555a0695b61f9fd8f8b50f3f47a",
"main.dart.js_153.part.js": "8c536bed3286cacd47da88ae2db988f1",
"main.dart.js_89.part.js": "a65598a3e20f14870b5d12c8f1e0ccc5",
"main.dart.js_146.part.js": "a91a5e83f9288a8d96803e0441a31908",
"main.dart.js_37.part.js": "4cbc5671795822b88d4c2f16df500752",
"main.dart.js_132.part.js": "ab0239ac432de172d94b3115ca392cc0",
"main.dart.js_165.part.js": "d8cb3693b5addb7b4c9d9d593a0fbf28",
"main.dart.js_127.part.js": "6e48ed39ae293ab7738547bd7aa02d01",
"main.dart.js_161.part.js": "bbf4f8fc22271485a5c45a31e17e4e4c",
"main.dart.js_175.part.js": "ae5d0dd6ca967967e20dcc7251027a63",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "f5b55933fed9a4925ed1f6f9270a983c",
"main.dart.js_216.part.js": "36a46ad5158e90c2db997b3717cd1b02",
"main.dart.js_64.part.js": "bee5df2d22843647a717fe576d192ad7",
"main.dart.js_169.part.js": "6e62acfc4b530fa0cc310b9a385a7775",
"main.dart.js_246.part.js": "0829e9a2c4d321b8e7a2296330bbfef3",
"main.dart.js_174.part.js": "fee498a21b44ac99231aafdd3b8b8ec2",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "ad279cf7326372151060dd1afa6abe83",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_119.part.js": "2a295558f81e31939974e52eea2f228b",
"main.dart.js_18.part.js": "cb76c1018a1ba14c28855121d0779f96",
"main.dart.js_200.part.js": "985046dc9ad2c2bb3a3d38720e25a6aa",
"main.dart.js_73.part.js": "74c0c8a7d5c9271a53fd9f8ec91abdc1",
"main.dart.js_101.part.js": "80798ee3bb53e5933c3516e787d63b4e",
"main.dart.js_77.part.js": "12ae6e0a2ae93900c4804dfbcdd42d2f",
"main.dart.js_149.part.js": "b0eaa9bef36a983c75be3f2f6c688ced",
"main.dart.js_67.part.js": "8638d051277a2376b2ac4da95be72a61",
"main.dart.js_208.part.js": "1f4901a7a7a5f4edbdeb67dce0e1a45f",
"main.dart.js_82.part.js": "501678b8940481c1c2e631ffd7eca60d",
"main.dart.js_173.part.js": "d34fe4a77df66979ef4bc33f18fdd635",
"main.dart.js_106.part.js": "4b860e6140e1ab7cad0f2327ba96283c",
"main.dart.js_62.part.js": "b6998494d52eeab88b670262dc6ed144",
"main.dart.js_207.part.js": "332e536804c7b2de7b5c7899c20983c3",
"main.dart.js": "1a62653b19ba7d5f4e9a0639eaf80351",
"main.dart.js_222.part.js": "af3836a3e5256eb78580b4119b0964e5",
"main.dart.js_232.part.js": "23a93fe9352c1d19939296e4580b7519",
"main.dart.js_148.part.js": "8c71a45d187bcc4d74f104d70905e0c5",
"main.dart.js_124.part.js": "edacf38dcf1ac29978aa2baaa182bc00",
"main.dart.js_97.part.js": "dda8c2db1cf562f7d9c7760c11f5aadf",
"main.dart.js_192.part.js": "2d7b039637c621a1e6ed0bb609f0bb68",
"main.dart.js_91.part.js": "37d3d68d0cb3a6685d1686678d287705",
"main.dart.js_145.part.js": "32cfa493e8edb01389eb5af97688345f",
"main.dart.js_229.part.js": "0b11637f71c344905dea7b9248ce5069",
"main.dart.js_57.part.js": "29e70d7d618f96e4adc9b8e0b68e74ff",
"main.dart.js_190.part.js": "09d0a01d77a7df44f5840a05003db23a",
"main.dart.js_104.part.js": "d7545b122b7e3b7a03e22d4861033382",
"main.dart.js_201.part.js": "97716dc3c3623650f10e5ea250ce01ae",
"main.dart.js_196.part.js": "847852e03924632e30665d34329cdf85",
"main.dart.js_181.part.js": "4ce817a83ef526632bb3066a752cfccc",
"main.dart.js_33.part.js": "eae1cb220804868505698dd463fbd2bb",
"main.dart.js_34.part.js": "7e7b88a8eb9d4e0aa1909617358535ec",
"main.dart.js_210.part.js": "d3a41c1dccf73701832e74687b78996a",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "2b820c4bdae3d2f9f3ba80a00c907ac6",
"main.dart.js_88.part.js": "7d98a1348d44d0efdefdcd74817dd3ac",
"main.dart.js_202.part.js": "6e80678a8152452c9f9fbd355e708189",
"main.dart.js_183.part.js": "8bb8b38f2875d9902dda070aeef67e8f",
"main.dart.js_167.part.js": "9e58182216bf43077b62c886308bcd22",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "38cfb2716fd035ec3f9aa8949f2799fa",
"main.dart.js_7.part.js": "6bdb50923bfbfe4f6f085f602e44041d",
"main.dart.js_140.part.js": "6c81fb171e7b97ba53ccf65573a84154",
"main.dart.js_228.part.js": "08c82e89da97637cc1b208e59eec806c",
"main.dart.js_170.part.js": "cd8b9a5655a916041b079ccb590be84f",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "c7de77d2461473607549cb7aa75caf8f",
"main.dart.js_27.part.js": "6ad816b44f88690beb446cdecffbc787",
"main.dart.js_219.part.js": "7d5c0e5ac9ea8f85822f7ad00b003a40",
"main.dart.js_116.part.js": "6b5feefa51761ed9248432f45dc4d403",
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
"assets/assets/translations/uk.json": "a3cad5db97fc6d585e9f764b8bbc711b",
"assets/assets/translations/pl.json": "3d9cb02a2a08e0ef563faa96aee6e9dc",
"assets/assets/translations/sk.json": "5b7d00499dbbedba40e1ddd068d7039c",
"assets/assets/translations/en.json": "9ad09f1e8306bd6a8829aa88cbbd0a23",
"assets/assets/translations/cs.json": "f2e95fc144569bd7245f72c8e097a9a9",
"assets/assets/translations/de.json": "0eeb3c896354f4be91e7c9a40db4e229",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "193db35016e3492cde161cb498ba2444",
"main.dart.js_147.part.js": "8a4895b4336c2c3554bdae6756da58cf",
"main.dart.js_220.part.js": "c559548413e22ee41631a909d1b408e7",
"main.dart.js_25.part.js": "ad83044c7ef4ac87cf7ed421b1c234ed",
"main.dart.js_249.part.js": "febf14d4277558acfc0f52726be8c157",
"main.dart.js_123.part.js": "a961da7087a6a621d9ef9ad3aab5f119",
"main.dart.js_241.part.js": "fabc0f510707b776778bd7891ff752bb",
"main.dart.js_8.part.js": "ac505804d486a47f348507537abfca46",
"main.dart.js_198.part.js": "ef1ce5296e96a9a7c2fd6e572d82e5de",
"main.dart.js_81.part.js": "036723444696ba0b005d6d01faa29e1c",
"main.dart.js_113.part.js": "3db2627c8e6f5076f2c68617014c9b2b",
"main.dart.js_9.part.js": "1becb443c3a4958cbe6b2825ff6832b4",
"main.dart.js_242.part.js": "a133793ff9db501f664132cfa106c16d",
"main.dart.js_86.part.js": "24bbff341a2b07017d2a2f808fc8eca7",
"main.dart.js_23.part.js": "49713e1c7db3432fb5070ade4de29ea8",
"index.html": "993204948135c193b5ade39c4cb39a44",
"/": "993204948135c193b5ade39c4cb39a44",
"main.dart.js_53.part.js": "cd73d0f5466fe3aa49ce3c48b1040731",
"main.dart.js_74.part.js": "f629252e96fb7f67546540a17bf2eb0e",
"main.dart.js_235.part.js": "1cc9f73e1e9eae885b7dbb8255f5b228",
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
"main.dart.js_118.part.js": "706bb9f5a855d13ee9d3e345f9b5ef28",
"main.dart.js_26.part.js": "26b38d766a6ef7ca89511c3ab6609858",
"main.dart.js_20.part.js": "adc97e776f1176b4da5853016658a090",
"main.dart.js_189.part.js": "5140d06a018f2a3283da9d9b562e9280",
"main.dart.js_214.part.js": "e1dc1be820fe0a76b1e5a150fe26740e",
"main.dart.js_51.part.js": "6cdb967fddc4f2a85b2d0e2d9f800b0c",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "4bc06f16e7a3b71a7057b5ad01c53c72",
"main.dart.js_1.part.js": "8c145e9bdb6a1721bcfa67209e49778f",
"main.dart.js_160.part.js": "816ec4cc2401d819afeb844185589be0",
"main.dart.js_120.part.js": "965a74f4bed24a4f5284e96105aae9a1",
"main.dart.js_63.part.js": "ae8c82bf2ec5be5a97af91fd0e5c169c",
"main.dart.js_211.part.js": "285b6970a898d3cce24675b013e1e3f8",
"main.dart.js_12.part.js": "c778b370052edc9085965b0207681929",
"main.dart.js_221.part.js": "4af7ecb580ee8b4018c428f9e541602f",
"main.dart.js_137.part.js": "4b817659b9fb8370b0b7db83bd187bf8",
"main.dart.js_28.part.js": "8dcf62214d45436656ea40bbda1e301c",
"main.dart.js_135.part.js": "c45488cf32c87cae4fdfb15f67304c6a",
"main.dart.js_6.part.js": "44233a8467672840e90b7cadc34e96ef",
"main.dart.js_237.part.js": "05594ce02095bf2a2939115f0fedf8f3",
"main.dart.js_17.part.js": "6429685c199e486e9023728cd8b0294e",
"main.dart.js_105.part.js": "7d75f3f7ccf3f7b8896fd5b5b7cb5905",
"main.dart.js_206.part.js": "1e9232c3db289b38aa25baccdfed619e",
"main.dart.js_231.part.js": "92600a9448135d59add98b923dc75f79",
"main.dart.js_43.part.js": "04ccb138f88df689ff30981e57065cc0",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "a85c713beaff7d62bb3813f6cea1272e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "0ab1f309cadd2ecf2b3b0583a0487306",
"main.dart.js_15.part.js": "a4b43aa1d3c114681b7c4bd85015e50f",
"main.dart.js_19.part.js": "0e3ec129eb3cfa4e12300784e51bf6d9",
"main.dart.js_255.part.js": "9390deff150938a3061f480a85e20adc",
"main.dart.js_163.part.js": "6b33dd347ac3457a159afc5c8537b316",
"main.dart.js_154.part.js": "ddcb4f6cbf77467828d69934d6932301",
"main.dart.js_257.part.js": "2ed119f86d9aca6b733be1bde0b7badf",
"main.dart.js_42.part.js": "3526c116f0d498380cd0cb51a119f237",
"main.dart.js_16.part.js": "fd1a9a53ea3e568ee11dd6a2c229f056",
"main.dart.js_250.part.js": "003386c32894bdf4a9521030cfd42eb5",
"main.dart.js_52.part.js": "05faf8581f0c46dcd90a1e3b7f9e3a56",
"main.dart.js_36.part.js": "fd189be39f4c6a51face2b2f6b6d0d9e",
"main.dart.js_199.part.js": "147bbbe876853edfa5a280f49852f8e4",
"main.dart.js_253.part.js": "3dbcae2e03606ac4ee34b4f36351eef7",
"main.dart.js_130.part.js": "7725e193ea55f092244b51608714bb62",
"main.dart.js_238.part.js": "0ba12f1c95548c8e9554d1e29e911c9c",
"main.dart.js_32.part.js": "dd4a5fcdf4869004eec021e4037a1b69",
"main.dart.js_197.part.js": "d86e842dfe521582f1e144db9c2dcd45",
"main.dart.js_227.part.js": "f6a8dae41aef2cafd0ce4622e3825f0a",
"main.dart.js_3.part.js": "7d68a39c404887202d560650ddf041e9",
"main.dart.js_68.part.js": "ee545b5093e6ea889f6a4d3f648c643f",
"main.dart.js_38.part.js": "50d2ceb88278ad54f4be1f47305d1727",
"main.dart.js_225.part.js": "59a169ea90a5419411dee56f729a18bb",
"main.dart.js_248.part.js": "7200e596d71c851b1be5c1dc0fea37f9",
"main.dart.js_133.part.js": "b58faab3aaf87d596cf0072f1e54c748",
"main.dart.js_21.part.js": "7ed1cc8ac7a62e849c91bf0ea72ddb65",
"main.dart.js_188.part.js": "6e5e2622b53797adb03537d20b3e8c5a",
"main.dart.js_24.part.js": "53c135a1fa480ba189edda7dd1ff9cef",
"main.dart.js_111.part.js": "12ab00e8c153e49fe9913ac6ecf0c214",
"main.dart.js_85.part.js": "fc1779fa315eb2b29e71739649936c79",
"main.dart.js_243.part.js": "4fbd99241122d4a2ef55c1447c594ec1",
"main.dart.js_212.part.js": "715fe85eb6382ebb485f46d60016c460",
"main.dart.js_114.part.js": "23198bb09c6df69e8a0d95aaa0296139",
"main.dart.js_39.part.js": "153cddf9bd4b49b06e1ab83cdcf62c1e",
"main.dart.js_49.part.js": "12e263a7215702c3dd3035ad0c3dfcb4",
"main.dart.js_185.part.js": "d26111101b8581443a572d893f7571e1",
"main.dart.js_46.part.js": "c453f0f47459d9bfdb1168d0ba3abcfc",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "7754f97f33a5f126e00e028b022ab8e5",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "b1876ac09031e9d2859f3d1c6711401f",
"main.dart.js_134.part.js": "246c080870220bee8aaf29beafeb8f55",
"main.dart.js_121.part.js": "5f26b1f00c9e32a3b0676927f017e740",
"main.dart.js_55.part.js": "45b5cb7c2e9177f4538940d7c20772e3",
"main.dart.js_112.part.js": "f7f34549ffd9e1f127da81be625195a9",
"main.dart.js_139.part.js": "328d0600d7de0136d53035fc6b7ff0ff",
"main.dart.js_143.part.js": "a64a8bf2b0c4857afc736ca492467a7d",
"main.dart.js_80.part.js": "f50cb4fa766e171cf29003d22a1e9be8",
"main.dart.js_252.part.js": "4898b7129d23e84b83e23c505f3b1e20",
"main.dart.js_233.part.js": "bc0a3e96f845de1eb103581f763073c6",
"main.dart.js_30.part.js": "16362586c79d1dfeb371aae063038603",
"main.dart.js_78.part.js": "959a5f1f3effaf0ebcd5f9affce28715",
"main.dart.js_136.part.js": "333b06b384bc0e6f4463ccc845043156",
"main.dart.js_168.part.js": "10e9f55349cc7d6ef9195b1d94e4fda0",
"main.dart.js_95.part.js": "ffa10839a84a5b40db49a2683bc57dfa",
"main.dart.js_107.part.js": "60534a11ffd88553a68f98b829668089",
"main.dart.js_29.part.js": "2866d28440ee206d0c56fc95dbf26c1d",
"main.dart.js_194.part.js": "5894a9e77e80061284c94fa8a3cd93f5",
"main.dart.js_61.part.js": "c0656ea410798ce6b6a9778368b9c7dc",
"main.dart.js_58.part.js": "e2a2d631745fa740bcd7e87d7dd9fda9",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "32066e056230f61afe9cbca97cc0bd24",
"main.dart.js_54.part.js": "4fbf9c88963cbdc6398382267a4182b1",
"main.dart.js_79.part.js": "9ec96d13cd2b38d1bfde04867b177f23",
"main.dart.js_92.part.js": "f59d127e0ff00461115ae1a86c7a5a08",
"main.dart.js_224.part.js": "facc0ab71be670f44811a6e4ab7392e7",
"main.dart.js_93.part.js": "10fd47f2800cd459af29bce7d8bd3a7d",
"main.dart.js_11.part.js": "e8785de970278b7e1ad57cbd95c2ffa5",
"main.dart.js_125.part.js": "c28101ff932387b52649e9e3b7518a21",
"main.dart.js_131.part.js": "3261d7b8e56e8493c22ae7ca037287cd",
"main.dart.js_14.part.js": "6dcb3fe8b149b1b42b0144df7d209f7a",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "a508a26af2f8b8d3407005445646c9c9",
"main.dart.js_178.part.js": "ef8472d8d7aa6278d79aeb3f341ba142",
"main.dart.js_100.part.js": "052b04a70a08030670bb9bcedac71a47",
"main.dart.js_70.part.js": "d489e0f28e7088baa143b29a9985281d",
"version.json": "fa6367b4891d38344c332789ba3ecfaa",
"flutter_bootstrap.js": "0d56fdf0677aa07b681d344cafc88a4a",
"main.dart.js_191.part.js": "6d976cd29b9c8692b061960f40bf063a"};
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
