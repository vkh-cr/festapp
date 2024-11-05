'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "8a0376696797578d1306cf3135df4b0c",
"main.dart.js_117.part.js": "35c07fedd95302a55b058c99616d2781",
"main.dart.js_182.part.js": "9672f781eb221f20f9852167ff4b0954",
"main.dart.js_244.part.js": "d1294c8fb9e4ac4202105d2493146d82",
"main.dart.js_83.part.js": "61b6e9d3acd966fd911ec95a3fc66903",
"main.dart.js_254.part.js": "9eee54c749b2415da7cf30fc2832f452",
"main.dart.js_176.part.js": "6cf022fbfe866c3e2cb554d6020d7f26",
"main.dart.js_96.part.js": "345b09e861f4621e567c0162b32e453c",
"main.dart.js_245.part.js": "5c420ddb09e3e59f7aa7268a3e97081c",
"main.dart.js_87.part.js": "d6b4bfc130be291ee23fad26931a361b",
"main.dart.js_126.part.js": "8b119742d867e30e2128a1de5d1395ce",
"main.dart.js_129.part.js": "77dc412cc97fdd8450aa0a401c377735",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "d4f2f27363d61779b239b1541b095aea",
"main.dart.js_218.part.js": "36f1e14864dc518445a9d25522b41289",
"main.dart.js_172.part.js": "fcfc40d63a4babfc1f6711fd7ffea523",
"main.dart.js_40.part.js": "5940d744724c52fbb6cce23b19993638",
"main.dart.js_209.part.js": "632f1767aa0d56fda0954a7e3d0e48db",
"main.dart.js_115.part.js": "3dd7d533cbdd8d7c7689203c09325f6f",
"main.dart.js_10.part.js": "52b79a3e37c05b5507ba24ac95908a68",
"main.dart.js_84.part.js": "c7b660d5d2a65d0c722e31a27c87f9b5",
"main.dart.js_122.part.js": "cd153f7596c7e19cb2e1514d82cc6386",
"main.dart.js_230.part.js": "19dc999a2a800b5040d5469b8da9973d",
"main.dart.js_213.part.js": "71a39555a0695b61f9fd8f8b50f3f47a",
"main.dart.js_153.part.js": "8c536bed3286cacd47da88ae2db988f1",
"main.dart.js_89.part.js": "a65598a3e20f14870b5d12c8f1e0ccc5",
"main.dart.js_146.part.js": "a91a5e83f9288a8d96803e0441a31908",
"main.dart.js_37.part.js": "4cbc5671795822b88d4c2f16df500752",
"main.dart.js_132.part.js": "ab0239ac432de172d94b3115ca392cc0",
"main.dart.js_165.part.js": "d8cb3693b5addb7b4c9d9d593a0fbf28",
"main.dart.js_127.part.js": "bce7fea393e0eb8dc23c4cade1195e03",
"main.dart.js_161.part.js": "d65febf08fbf18e0309f8ee5c4d70921",
"main.dart.js_175.part.js": "ae5d0dd6ca967967e20dcc7251027a63",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "f5b55933fed9a4925ed1f6f9270a983c",
"main.dart.js_216.part.js": "36a46ad5158e90c2db997b3717cd1b02",
"main.dart.js_64.part.js": "bad06fab6ceadff966d870b2911da37e",
"main.dart.js_169.part.js": "6e62acfc4b530fa0cc310b9a385a7775",
"main.dart.js_246.part.js": "0829e9a2c4d321b8e7a2296330bbfef3",
"main.dart.js_174.part.js": "45b578eee0dd3e09f51a62eceb9c60e2",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "ad279cf7326372151060dd1afa6abe83",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_119.part.js": "2a295558f81e31939974e52eea2f228b",
"main.dart.js_18.part.js": "cb76c1018a1ba14c28855121d0779f96",
"main.dart.js_200.part.js": "985046dc9ad2c2bb3a3d38720e25a6aa",
"main.dart.js_73.part.js": "74c0c8a7d5c9271a53fd9f8ec91abdc1",
"main.dart.js_101.part.js": "80798ee3bb53e5933c3516e787d63b4e",
"main.dart.js_77.part.js": "12ae6e0a2ae93900c4804dfbcdd42d2f",
"main.dart.js_149.part.js": "5ef2c39599d88f1d55875b95074408eb",
"main.dart.js_67.part.js": "ad66f34562c8d08ab8e18276a8789d58",
"main.dart.js_208.part.js": "68c4acca86bd42cbdb4d7aa5d1290182",
"main.dart.js_82.part.js": "e80058f968470897d8da4e02a95775e2",
"main.dart.js_173.part.js": "d34fe4a77df66979ef4bc33f18fdd635",
"main.dart.js_106.part.js": "e89a6708850c569e66c5b87a1010392a",
"main.dart.js_62.part.js": "b6998494d52eeab88b670262dc6ed144",
"main.dart.js_207.part.js": "2cfcf40cb679f4775ebcba718e049fe9",
"main.dart.js": "86acdb4686a4ef20d14032382ef27377",
"main.dart.js_222.part.js": "af3836a3e5256eb78580b4119b0964e5",
"main.dart.js_232.part.js": "23a93fe9352c1d19939296e4580b7519",
"main.dart.js_148.part.js": "8c71a45d187bcc4d74f104d70905e0c5",
"main.dart.js_124.part.js": "edacf38dcf1ac29978aa2baaa182bc00",
"main.dart.js_97.part.js": "dda8c2db1cf562f7d9c7760c11f5aadf",
"main.dart.js_192.part.js": "2d7b039637c621a1e6ed0bb609f0bb68",
"main.dart.js_91.part.js": "37d3d68d0cb3a6685d1686678d287705",
"main.dart.js_145.part.js": "1ad7fdfcb60dbb6ef5af078190e8335b",
"main.dart.js_229.part.js": "ece0a83e162a0176777ce9f7e091ab52",
"main.dart.js_57.part.js": "29e70d7d618f96e4adc9b8e0b68e74ff",
"main.dart.js_190.part.js": "1e9a7dbd26bae8f7b48e9d046f2e4680",
"main.dart.js_104.part.js": "d7545b122b7e3b7a03e22d4861033382",
"main.dart.js_201.part.js": "a338eb829e9847b227d59c8474c6ff57",
"main.dart.js_196.part.js": "3a604d1813c7fd0c5bee7eb93b248084",
"main.dart.js_181.part.js": "253ebe54a90d73af854aeab92de011fe",
"main.dart.js_33.part.js": "c183103dbea78892eef4d73f9d25e8b3",
"main.dart.js_34.part.js": "7e7b88a8eb9d4e0aa1909617358535ec",
"main.dart.js_210.part.js": "d3a41c1dccf73701832e74687b78996a",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "67cc086a1c5537ff8837f51e515b07c5",
"main.dart.js_88.part.js": "bda25713230a104c00606103371d7dc4",
"main.dart.js_202.part.js": "6e80678a8152452c9f9fbd355e708189",
"main.dart.js_183.part.js": "8bb8b38f2875d9902dda070aeef67e8f",
"main.dart.js_167.part.js": "84fac6d35d1c721f2a7383d4657570ee",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "53bcd2ec73a1e1a5518055f596b9634f",
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
"main.dart.js_147.part.js": "f024a8d2347c90173fde79f563ccc836",
"main.dart.js_220.part.js": "c559548413e22ee41631a909d1b408e7",
"main.dart.js_25.part.js": "ad83044c7ef4ac87cf7ed421b1c234ed",
"main.dart.js_249.part.js": "febf14d4277558acfc0f52726be8c157",
"main.dart.js_123.part.js": "a961da7087a6a621d9ef9ad3aab5f119",
"main.dart.js_241.part.js": "2f1e1277dbfc7ca73de7f7fad611a939",
"main.dart.js_8.part.js": "ac505804d486a47f348507537abfca46",
"main.dart.js_198.part.js": "ef1ce5296e96a9a7c2fd6e572d82e5de",
"main.dart.js_81.part.js": "cb6a987b3001e2ce3bdaf5b445842ca2",
"main.dart.js_113.part.js": "8916be6bf4fb0ba25b06ac143b1b4780",
"main.dart.js_9.part.js": "1becb443c3a4958cbe6b2825ff6832b4",
"main.dart.js_242.part.js": "a133793ff9db501f664132cfa106c16d",
"main.dart.js_86.part.js": "24bbff341a2b07017d2a2f808fc8eca7",
"main.dart.js_23.part.js": "49713e1c7db3432fb5070ade4de29ea8",
"index.html": "2a36ad9b8041a3ce54ecaeea01288dfe",
"/": "2a36ad9b8041a3ce54ecaeea01288dfe",
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
"main.dart.js_26.part.js": "dd166c4c8351910ac9a369d3f1576ccb",
"main.dart.js_20.part.js": "f5186356655569577ac440b473faadc8",
"main.dart.js_189.part.js": "5140d06a018f2a3283da9d9b562e9280",
"main.dart.js_214.part.js": "477dea739bba3c7bcd32a18bde3377e7",
"main.dart.js_51.part.js": "21f35c20f0530610e0a0da78d441f924",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "bae2f319a610a048a72b2c0f41d5a8c5",
"main.dart.js_1.part.js": "8c145e9bdb6a1721bcfa67209e49778f",
"main.dart.js_160.part.js": "3769382e45adc8d5d315d9e3915d6cf5",
"main.dart.js_120.part.js": "965a74f4bed24a4f5284e96105aae9a1",
"main.dart.js_63.part.js": "74ee6b171e2bd862613196e6a4498dae",
"main.dart.js_211.part.js": "285b6970a898d3cce24675b013e1e3f8",
"main.dart.js_12.part.js": "6e1d81049ff1081c4332c91a7effe778",
"main.dart.js_221.part.js": "4af7ecb580ee8b4018c428f9e541602f",
"main.dart.js_137.part.js": "d302823dc5c6d962fac1929ed7726b36",
"main.dart.js_28.part.js": "8dcf62214d45436656ea40bbda1e301c",
"main.dart.js_135.part.js": "c45488cf32c87cae4fdfb15f67304c6a",
"main.dart.js_6.part.js": "2792cdb588180f8643158bed184faf3c",
"main.dart.js_237.part.js": "a8000b35c1c3fbacf9619522ad20c367",
"main.dart.js_17.part.js": "6429685c199e486e9023728cd8b0294e",
"main.dart.js_105.part.js": "98ce75956f9e763fb4269eaa208fc42e",
"main.dart.js_206.part.js": "1e9232c3db289b38aa25baccdfed619e",
"main.dart.js_231.part.js": "dbe08609fae95dd4159334d1b8c4db8e",
"main.dart.js_43.part.js": "10a63cf71aa115373993df8b127396a6",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "48ad7312d1fa8636f72c67aa55b60910",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "0ab1f309cadd2ecf2b3b0583a0487306",
"main.dart.js_15.part.js": "a4b43aa1d3c114681b7c4bd85015e50f",
"main.dart.js_19.part.js": "98f634100853e72c4022c4a9e0471b84",
"main.dart.js_255.part.js": "3544c02a23c253e73ac0af38a89444d4",
"main.dart.js_163.part.js": "6b33dd347ac3457a159afc5c8537b316",
"main.dart.js_154.part.js": "ddcb4f6cbf77467828d69934d6932301",
"main.dart.js_257.part.js": "84ff9791d4c6d5b8209397157e9989f7",
"main.dart.js_42.part.js": "f375dd39d96dd80d8b2ae496cdfb0efc",
"main.dart.js_16.part.js": "fd1a9a53ea3e568ee11dd6a2c229f056",
"main.dart.js_250.part.js": "44082ece21c472b199cadb9f783daa5a",
"main.dart.js_52.part.js": "05faf8581f0c46dcd90a1e3b7f9e3a56",
"main.dart.js_36.part.js": "fd189be39f4c6a51face2b2f6b6d0d9e",
"main.dart.js_199.part.js": "147bbbe876853edfa5a280f49852f8e4",
"main.dart.js_253.part.js": "3dbcae2e03606ac4ee34b4f36351eef7",
"main.dart.js_130.part.js": "7725e193ea55f092244b51608714bb62",
"main.dart.js_238.part.js": "d027f6ca54d75d0d33d0ae7b1d90327d",
"main.dart.js_32.part.js": "dd4a5fcdf4869004eec021e4037a1b69",
"main.dart.js_197.part.js": "c45aae20adcba8e60fefd7f684e31da3",
"main.dart.js_227.part.js": "f6a8dae41aef2cafd0ce4622e3825f0a",
"main.dart.js_3.part.js": "9add7326777f19d6cdbfc547967a6814",
"main.dart.js_68.part.js": "ee545b5093e6ea889f6a4d3f648c643f",
"main.dart.js_38.part.js": "50d2ceb88278ad54f4be1f47305d1727",
"main.dart.js_225.part.js": "59a169ea90a5419411dee56f729a18bb",
"main.dart.js_248.part.js": "7200e596d71c851b1be5c1dc0fea37f9",
"main.dart.js_133.part.js": "174f20de647ac3d3ec17ceddc2e09757",
"main.dart.js_21.part.js": "c93542ec636f39a16fbfd00d14df07fc",
"main.dart.js_188.part.js": "21496a3d4143fac9b52d337c4ad420dd",
"main.dart.js_24.part.js": "53c135a1fa480ba189edda7dd1ff9cef",
"main.dart.js_111.part.js": "12ab00e8c153e49fe9913ac6ecf0c214",
"main.dart.js_85.part.js": "fc1779fa315eb2b29e71739649936c79",
"main.dart.js_243.part.js": "0b2728ff474a12b06fcb7e61ba8dae23",
"main.dart.js_212.part.js": "715fe85eb6382ebb485f46d60016c460",
"main.dart.js_114.part.js": "57d8bd163c06abe1c6c35984dfd39199",
"main.dart.js_39.part.js": "153cddf9bd4b49b06e1ab83cdcf62c1e",
"main.dart.js_49.part.js": "12e263a7215702c3dd3035ad0c3dfcb4",
"main.dart.js_185.part.js": "d26111101b8581443a572d893f7571e1",
"main.dart.js_46.part.js": "c453f0f47459d9bfdb1168d0ba3abcfc",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "7754f97f33a5f126e00e028b022ab8e5",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "b1876ac09031e9d2859f3d1c6711401f",
"main.dart.js_134.part.js": "78cf04ced590cde63b70c8bfced4ae31",
"main.dart.js_121.part.js": "5f26b1f00c9e32a3b0676927f017e740",
"main.dart.js_55.part.js": "45b5cb7c2e9177f4538940d7c20772e3",
"main.dart.js_112.part.js": "f7f34549ffd9e1f127da81be625195a9",
"main.dart.js_139.part.js": "6def0ee746b8d0e3387bfd37493bf152",
"main.dart.js_143.part.js": "a64a8bf2b0c4857afc736ca492467a7d",
"main.dart.js_80.part.js": "f50cb4fa766e171cf29003d22a1e9be8",
"main.dart.js_252.part.js": "4898b7129d23e84b83e23c505f3b1e20",
"main.dart.js_233.part.js": "bc0a3e96f845de1eb103581f763073c6",
"main.dart.js_30.part.js": "16362586c79d1dfeb371aae063038603",
"main.dart.js_78.part.js": "959a5f1f3effaf0ebcd5f9affce28715",
"main.dart.js_136.part.js": "95f11da8b8042ce69710c1cb0714f2f5",
"main.dart.js_168.part.js": "10e9f55349cc7d6ef9195b1d94e4fda0",
"main.dart.js_95.part.js": "c1291df27ce9266018837ed936e3c753",
"main.dart.js_107.part.js": "d4b3fc4687fa17ff30841b4c05185cf1",
"main.dart.js_29.part.js": "2866d28440ee206d0c56fc95dbf26c1d",
"main.dart.js_194.part.js": "5894a9e77e80061284c94fa8a3cd93f5",
"main.dart.js_61.part.js": "c0656ea410798ce6b6a9778368b9c7dc",
"main.dart.js_58.part.js": "e2a2d631745fa740bcd7e87d7dd9fda9",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "32066e056230f61afe9cbca97cc0bd24",
"main.dart.js_54.part.js": "4fbf9c88963cbdc6398382267a4182b1",
"main.dart.js_79.part.js": "f3f625fb12bbde67e30017d58adfea4e",
"main.dart.js_92.part.js": "53e7ca25c9982aa2dd54a9daf5e8069b",
"main.dart.js_224.part.js": "facc0ab71be670f44811a6e4ab7392e7",
"main.dart.js_93.part.js": "03c30db4c420fdb3a598cd31fa1434a6",
"main.dart.js_11.part.js": "e8785de970278b7e1ad57cbd95c2ffa5",
"main.dart.js_125.part.js": "5834579853087e71162ef8dac83d241c",
"main.dart.js_131.part.js": "3261d7b8e56e8493c22ae7ca037287cd",
"main.dart.js_14.part.js": "dc0af8ddacf30dd4b4ccf7a89cb5dfeb",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "155d35f9429ed57e19a1ac5cc922fe70",
"main.dart.js_178.part.js": "e3c9210f3690f8b54d7b0d4ac7930589",
"main.dart.js_100.part.js": "052b04a70a08030670bb9bcedac71a47",
"main.dart.js_70.part.js": "d489e0f28e7088baa143b29a9985281d",
"version.json": "fa6367b4891d38344c332789ba3ecfaa",
"flutter_bootstrap.js": "b9359d37f2636664fbdcfdb0e3f7c691",
"main.dart.js_191.part.js": "e0586d77393ef6ffe3b6d52b5d14dd25"};
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
