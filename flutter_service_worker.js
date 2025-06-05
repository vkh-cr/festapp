'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_290.part.js": "b8acd6b7d0a1a03c651b2f097f0f6672",
"main.dart.js_81.part.js": "9fad0daca4d10158dfc44c11a9069209",
"main.dart.js_190.part.js": "8c357d7487ca93b044ece7825f5e73b2",
"main.dart.js_154.part.js": "e6b0adf01e0d3162066bfad3e20e689e",
"main.dart.js_87.part.js": "3c8390ab0ebafb3b713dcd55050483d5",
"main.dart.js_159.part.js": "6b2ad4d0cf0cdd8ad5606a5145deccd3",
"main.dart.js_36.part.js": "c617f818eb96140d1104d10b0a406e55",
"main.dart.js_299.part.js": "310a75a27ffb3dd0daa565ec82f4c051",
"main.dart.js_199.part.js": "217da0ec40875252acd72b53adfe7b0d",
"main.dart.js_138.part.js": "5d466a73a68cb92f006987e2efb51f5f",
"main.dart.js_122.part.js": "2d64c37f82d989dda52dcb9c1528bef2",
"main.dart.js_25.part.js": "47691fe01c9f83cc54c9b0288b14741d",
"main.dart.js_251.part.js": "bb3c7ab83c4bb20c9277c18b29e0551b",
"main.dart.js_206.part.js": "02e78ed7a85482925e55d50f810b53bc",
"main.dart.js_249.part.js": "c66fd87e11830aece6e261d0a41369a0",
"main.dart.js_14.part.js": "8cacd64c1f6fd7fd7a4ede49f6bc9bc6",
"main.dart.js_255.part.js": "1794a78420655480abf0c0954d5e6390",
"main.dart.js_178.part.js": "dea2054f0789bbe5a710b77fae929c1a",
"main.dart.js_256.part.js": "15d28f9d7b3c777d7bb3a8644e3c4635",
"main.dart.js_197.part.js": "f9738423022d9838b134efef0c4beb70",
"main.dart.js_134.part.js": "133c871a120fd18918207984acb20257",
"main.dart.js_46.part.js": "6715fcd4cb81539d35b4b24e2e47bf50",
"main.dart.js_274.part.js": "2e96a359a3b98842af4e5ca61c842c1f",
"main.dart.js_72.part.js": "d6092e0ae7f64ae74344eec59f391ce0",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_207.part.js": "b64ef8e24b0ad891b6efd909543f67c3",
"main.dart.js_38.part.js": "f9ae4a67cd8e0c9ca92a5e94115a0e6d",
"main.dart.js_205.part.js": "ffa4e28158f50e1794b9ea6bdb71c727",
"main.dart.js_276.part.js": "8e680c01c66c8ab5d5303743cf6758fe",
"main.dart.js_6.part.js": "a789a067d0de09bbb14aa19779ce413d",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"main.dart.js_169.part.js": "e94c8617a4356667f750d7357af96097",
"main.dart.js_132.part.js": "226136df3d63ef83bad060b93a13e37b",
"main.dart.js_146.part.js": "936dd6b87b1efdcd867b36bbcd1a4d93",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_57.part.js": "d6f23dd91f7acfd3659d6556d1f7c7e8",
"main.dart.js_60.part.js": "1efac6e9b64b6e3a28c21af8e4333b12",
"main.dart.js_264.part.js": "df71c4d6023a426ceedaa60b3707ec66",
"main.dart.js_285.part.js": "b8240fae433e64034228d5816a776ef8",
"main.dart.js_92.part.js": "6163d0e78726a7f8c3890449053a70e8",
"main.dart.js_307.part.js": "1b77e1b1567d7d041dc39c2014202b53",
"main.dart.js_85.part.js": "db30d4952c05e787dc6d538e570f4da5",
"main.dart.js_200.part.js": "d6179cfc3435e4102aff991ba50add34",
"main.dart.js_1.part.js": "eb4054e7c74b5b3ca21f308af79cb4dd",
"main.dart.js_121.part.js": "eb3fdb87e0297444151df0f0807139e6",
"main.dart.js_39.part.js": "7423814150080271616dd8419ce381c1",
"main.dart.js_8.part.js": "a56854254691b33c926a624dc614cefa",
"main.dart.js_95.part.js": "3cdaf2987d289ed9e2a3ffbca09e8fe9",
"main.dart.js_139.part.js": "e674cb0c459c304b02e36ea14b2d9c16",
"main.dart.js_140.part.js": "6b39020b9e6c37498eef9ba5d657b09d",
"main.dart.js_93.part.js": "bfd9f741866a90d385cf207b0b928576",
"main.dart.js_275.part.js": "49985c5f70783987ca0675bc6ffd56e5",
"main.dart.js_180.part.js": "41c6848f40bf4ccd0d4a43634832dc92",
"main.dart.js_179.part.js": "3d6522264dbd53601e28692d117b76fa",
"main.dart.js_182.part.js": "905e58e429d4ba8fa289dc0eadcca3fc",
"main.dart.js_144.part.js": "917b84881ac7db3e84bcf1edd60f1a27",
"main.dart.js_13.part.js": "0a4891ffc2d52f5e54162793f8a2e4e0",
"main.dart.js_48.part.js": "9acaab849f9c632bbd3ab499f3f4a201",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_94.part.js": "c2d14d574504c36c986ac2faee23d9f1",
"main.dart.js_231.part.js": "57468ebc491106dac8e9995dcebdd706",
"main.dart.js_300.part.js": "97642c7d930594a0c157107904e1a10f",
"main.dart.js_68.part.js": "1a7a4114d26e86daed4937c7a8da1942",
"main.dart.js_269.part.js": "1dbc762e4d0b5819ab736a3472fea114",
"main.dart.js_298.part.js": "fa4cd5de2adb15d27fe852d899aed524",
"main.dart.js_43.part.js": "8be4d1e8622668661f97205b04bdb210",
"main.dart.js_59.part.js": "0bd195a1bb62a799219fc4c4211cb3a1",
"main.dart.js_28.part.js": "0586fdf78e0a40d1a52bdba63db8f765",
"main.dart.js_303.part.js": "d356703a4545ebb6842d690c22d96117",
"main.dart.js_270.part.js": "da74e0dac3cbd5606a0bb3988490ca06",
"main.dart.js_286.part.js": "b665e963f9752854343a4bae35b3fbb2",
"main.dart.js_166.part.js": "be7ed7810ec7733d28415787b5e939de",
"main.dart.js_35.part.js": "8570db133b9b888f29948d41bf495860",
"main.dart.js_118.part.js": "31dba66e7511711f27107b41482e26c1",
"main.dart.js_75.part.js": "c08d934b8765aa3cfb27e6b69bd31665",
"main.dart.js_11.part.js": "1b26e78b25f1b6f4125ec3b05672a9ed",
"main.dart.js_123.part.js": "6c80e45a7451ede274a6f7f25df8bd5c",
"main.dart.js_37.part.js": "def81057279752ff22cf2344b44b61b0",
"main.dart.js_235.part.js": "03b68048a7e6eb94eec43e71bab55f4e",
"main.dart.js_240.part.js": "eed692351bf3a2489295a1ea2cdc57ba",
"main.dart.js_168.part.js": "d931aace4b2ca9940ea85b2ab1e4f049",
"main.dart.js_112.part.js": "a1fc34bfb2e91bcdc81d60b0b0d48c67",
"main.dart.js_26.part.js": "fd49ec5c400402a4fa8a7c288b9b3869",
"main.dart.js_110.part.js": "571d0467fb94a92557f31578a3c6e3b2",
"main.dart.js_30.part.js": "e4c561815cb4e224525d935239b7d2c5",
"main.dart.js_242.part.js": "39d5eb17e342ed1208dd3631a102e0c5",
"main.dart.js_283.part.js": "5cf26962240678bf5a8a6a1b995d3339",
"main.dart.js_293.part.js": "4275b9cc0de860b1bb7c915d175f8aeb",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_164.part.js": "d37591f01e62ba0eb18ec9211ae359b7",
"main.dart.js_126.part.js": "0949f89597f047db86fbb26bf796dccc",
"main.dart.js_3.part.js": "7d5dee1dbecf1313b3957804b689448e",
"main.dart.js_80.part.js": "27c234b9c791e7f8e5777ba6a0d49a98",
"main.dart.js_113.part.js": "c8efaccf55a62a1fbedcb55efaab271f",
"main.dart.js_277.part.js": "e5f84ffc176d14d78852686693024d27",
"main.dart.js_103.part.js": "49a3363b75c650182104482d9316f34e",
"main.dart.js_241.part.js": "dbf5ea3a5d0ad94e8c43da6049424045",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_188.part.js": "44798bb3db003a4bb92db66655082b9e",
"main.dart.js_32.part.js": "6056390013184d0eb3806521570e22ee",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_4.part.js": "c29a32743fcf41d99ecd48f9413be383",
"main.dart.js_53.part.js": "74c129dbf097057f454a447f218c68b8",
"main.dart.js_234.part.js": "c8e70481d6d0c59058cb97d30d1ee4d5",
"main.dart.js_223.part.js": "f4bbb24437429bece4c39dfab8980090",
"main.dart.js_213.part.js": "63ccb6aa76f207b924d8ef7c2edebb49",
"main.dart.js_15.part.js": "a5928260149a0348cbff11d86bc4c849",
"main.dart.js_105.part.js": "a63bc175969ba1105e67db8292e8f06c",
"main.dart.js_107.part.js": "d1ed0677cbd678e0a0e89992c2edf274",
"main.dart.js_248.part.js": "c0dbb15854361373ea8a5eab6d12bf97",
"main.dart.js_45.part.js": "bb2422c7a2be6ade7903a31eebc22895",
"main.dart.js_160.part.js": "d3cfab784f0dd6bf56863f09b6143baa",
"main.dart.js_289.part.js": "cee711894e3b24cad90dd841a0f89130",
"main.dart.js_96.part.js": "1b680b602a350c0931e8c99db73442a6",
"main.dart.js_147.part.js": "40203b347cbeae5768b4f1cc586530fa",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "1b72a4dc7cbe53b2e1064c3a937b5730",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "3068a4e10deddd38085384e262a06ec9",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/uk.json": "1794b65021c354763a0a830b83ee3fb1",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/cs.json": "7768802d09805d74c7094a102cc5084d",
"assets/NOTICES": "4bd2930db146c4653bc584bd9d65b728",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js_175.part.js": "d573a55c59f9d1692b1f64965afea34e",
"main.dart.js_145.part.js": "56bfe27bdc324343f57923557e3d9e15",
"main.dart.js_210.part.js": "67480cae24f7eb2a2383d00d872f0c0a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_84.part.js": "1c7dbd49b049de75b3e5cad7e720fd79",
"main.dart.js_82.part.js": "0fa8f17105df470613c3feb4251a4033",
"main.dart.js_31.part.js": "2f71c2256bab1bca8c5908d01824c345",
"main.dart.js_115.part.js": "b21a2831e12e84b2fdb15228680dcc50",
"main.dart.js_189.part.js": "8521511b58a1ba3e0743b16dbaa99261",
"main.dart.js_204.part.js": "440c5976c2ed65c32a2374367dc454f1",
"main.dart.js_79.part.js": "b0e0f2c2b89c79a417479c1fcbe0d61d",
"main.dart.js_268.part.js": "778ce64973e30135a55e82bae45443dc",
"main.dart.js_301.part.js": "753d7addf3b11f3b2e464a176a813907",
"main.dart.js_297.part.js": "f2102b27de86d0693766acd07c8b8eb2",
"main.dart.js_192.part.js": "c5d2a4de1b871b2f78187856fd1072d6",
"main.dart.js_215.part.js": "a2d24e387ab85931c0dc3ebf4d0becd3",
"main.dart.js_195.part.js": "506ab229bc10e2d171f180cd57b4a0d6",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_304.part.js": "150e84894f99cf5e6a28e04fe55c7237",
"main.dart.js_226.part.js": "ebecce4e986295273c1644c70f201297",
"main.dart.js_208.part.js": "9f7fa094f6095c0be4234cd5e9be6192",
"main.dart.js_54.part.js": "2741a477002352b91f1eaa6c9439e19d",
"main.dart.js_106.part.js": "4b26f702a799bb48f9133222d2e8a780",
"main.dart.js_152.part.js": "f4e6237899e71e37b55209aa60bd94f8",
"main.dart.js_272.part.js": "2e445cd972543bb08bc0038bcf5bb2f8",
"main.dart.js_302.part.js": "57614ef5fcdcaf5bb58e8812172fc18c",
"main.dart.js_181.part.js": "3900cd7a388ca6fac18cb00ec5b602fa",
"main.dart.js_51.part.js": "df20209c4e4c2baf0ebaa90ae8df2238",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_237.part.js": "d83d6b63dfe6098b0571e77d467a2265",
"main.dart.js_173.part.js": "cc62a873105c120d687f68cb33ee5ed6",
"main.dart.js_170.part.js": "566884d1ac7c19b56df861d5fd946223",
"main.dart.js_282.part.js": "5746de90de2c5bd123427dc52da0ff51",
"main.dart.js_34.part.js": "8565441f689a209482bcbdccb26fe558",
"main.dart.js_24.part.js": "6d4ba58bc0a2ba6c0232479f49a6d494",
"main.dart.js_128.part.js": "7185ba25205683f4f5c62feec61a480e",
"main.dart.js_18.part.js": "e8bf7ed48dd7549549d866a1bd040cde",
"main.dart.js_2.part.js": "7e6dd187310f2bbb0f44287e25b2b0af",
"main.dart.js_69.part.js": "d9310112ada588e761af400efce37dd6",
"main.dart.js_70.part.js": "ffa1e22dfa3fa377c5a1ff4bc667cc74",
"main.dart.js_229.part.js": "044f09dfc138326f06565a97a1df1a87",
"main.dart.js_27.part.js": "1cc9ab1bf23d2840c1a108f12aa74ca1",
"main.dart.js_238.part.js": "a46713b34d85e5fd6781d03a5ccb22af",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "d36283b61728b0fbce4d69a7540362b0",
"main.dart.js_253.part.js": "8f9966aa94932fb425161b59b3047fde",
"main.dart.js_244.part.js": "9f57ed57ad4fe5e7de882442c48aa6ab",
"main.dart.js_137.part.js": "833d6d51c2aae797c38cb43aa0e36373",
"main.dart.js_99.part.js": "8ecd39eb22454e4b9f28e99ee9977c8a",
"main.dart.js_66.part.js": "d49da54db92b79048982554ab23ac531",
"main.dart.js_10.part.js": "f847ca5e0b1927ae4cb00b2fcee26542",
"main.dart.js_56.part.js": "ce939c371797abd16c75b11fc18fbd48",
"main.dart.js_183.part.js": "6bbf796fa237e0c4c5750b5699d080e2",
"main.dart.js_129.part.js": "bf789b4fe65f41b3f6e5216e10786f15",
"main.dart.js_5.part.js": "0cb57cef0fd0b42e8d3ab7e72af168a7",
"main.dart.js_76.part.js": "8730ad6c7c78489648bcb2b4841bc02e",
"main.dart.js_265.part.js": "6639bbd5cab64f5519492ef713ebbf54",
"main.dart.js_7.part.js": "272fca71c9ea5fbf75982488c042977f",
"main.dart.js_16.part.js": "55a0997c060b957ce33e118214c3b9d9",
"main.dart.js_236.part.js": "6743e1ce0a9bbd3809b953470d554529",
"main.dart.js_133.part.js": "3a41762f67df6dd0ab4fc8e649a9f499",
"main.dart.js_259.part.js": "7ec0fd2da7e93569e4bce315260dba52",
"main.dart.js_90.part.js": "ed11a054dffbb3c67435ec4368bda30e",
"main.dart.js_260.part.js": "7004e8acaacda8e84edef4bdf64deeca",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_157.part.js": "f5e1fe2ca41ab8c962f1e213f9b38f93",
"version.json": "eeb3afb8fcfed0be64f1de1892919936",
"main.dart.js_153.part.js": "ccc1c3d6f1830c800a6470e89580eee6",
"flutter_bootstrap.js": "4c27b70bedc934a29686bf01584cf206",
"main.dart.js_176.part.js": "97c54fa0a62d65eb7e48c2e9a09a54e9",
"main.dart.js_245.part.js": "57cd87fca59805ce040fe49db771963e",
"main.dart.js_306.part.js": "8e2efb16dbdcd59859882755113127eb",
"main.dart.js_209.part.js": "acc88ef45918cfcd8561333108a90d47",
"main.dart.js_33.part.js": "0e8de253f052d6ca7c5a4936f65cadbe",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_9.part.js": "05c618e6127330df4dc4fe5c4dea26ab",
"main.dart.js_155.part.js": "772843ce4f6403f8c2a5308eb8f33b43",
"main.dart.js_239.part.js": "00ff893d08a3cc181c859ab336667250",
"main.dart.js_284.part.js": "f2a233a26943353b29fc038a3c5595f3",
"main.dart.js_214.part.js": "21b53f3d19a89d9f43279fc36df1da41",
"main.dart.js_42.part.js": "c841bb6b63917a43d60ffe666433308f",
"main.dart.js_291.part.js": "ce7f545a8a2871878767f71062d5bdef",
"main.dart.js_228.part.js": "1515794a45b054a18a8a413a1b965c89",
"main.dart.js_98.part.js": "37abc59bce3abf796e292a93223c2495",
"main.dart.js_258.part.js": "c5b7181d0aaf219482e7bbe51df286f5",
"main.dart.js_163.part.js": "7324340bc4cb45218a1d9aa47e002641",
"main.dart.js_287.part.js": "a2d80e13b9e6b3c919500d7a972b5ebc",
"main.dart.js_161.part.js": "d139e65e9fd55c2212f37db34efc5b50",
"main.dart.js_49.part.js": "86401b5103670317246747490ff71102",
"main.dart.js_22.part.js": "95a25f48dc748c175d546521c530ee05",
"main.dart.js_308.part.js": "9fef71c35a856f035f91b9bd648f44d0",
"main.dart.js_131.part.js": "3d658945410be0e258c363d4aa1ac9a9",
"main.dart.js_12.part.js": "4640a820046db3b841088046100ae4f8",
"main.dart.js_62.part.js": "ea0a82b22e60a5249ec4ba8e81b4ad16",
"main.dart.js_91.part.js": "567273a28bdbabac59b6b7d0368a8245",
"main.dart.js_232.part.js": "d13ef88ece202c21725d5fa8ec90fa3c",
"main.dart.js_104.part.js": "717805701d3fce2f4505ca1ccf67f886",
"main.dart.js_71.part.js": "1ab472dfa4e25cc473b12b3d1e81637b",
"main.dart.js_296.part.js": "ee177c9ae346a29d384479f39fc5191d",
"main.dart.js_278.part.js": "e3d7d8973493f7ac157c4bcaf3fd7335",
"main.dart.js_109.part.js": "e364a3ac9cab95fd16ebf64966af6fc5",
"main.dart.js_143.part.js": "2907510e3e6eeaa70cd2dd5d5921b902",
"main.dart.js_222.part.js": "4c95ccf02a275e7de1f0b2b17995c4dd",
"main.dart.js_67.part.js": "9a75981c2017f3bb6dad5710c6748f43",
"main.dart.js_117.part.js": "bd59a0981e23458c2a73490e86fe8126",
"main.dart.js_292.part.js": "c5c7e65bac43a3c65e67d429372ac222",
"main.dart.js_108.part.js": "ce24ba91ed05032fa21c653dab32bd84",
"main.dart.js_295.part.js": "982df0eabf3dfdbfbf3b5c4df1c97458",
"main.dart.js_221.part.js": "eb5686fddd41392f6076cea8812552b6",
"main.dart.js_47.part.js": "d09843da727a4908bd44bb23503f865d",
"main.dart.js_142.part.js": "142aa38136d9c1a9676d846cdc8466cc",
"main.dart.js_288.part.js": "fadbaf1d4e778dc9b773c44d97069305",
"main.dart.js_55.part.js": "7a73bb4937bd96921e473dd5405925f1",
"main.dart.js": "645f8026410e8d18d73f5bdfa8ea03a1",
"main.dart.js_227.part.js": "20206fa45f2eb296b8d8d40d37837785",
"main.dart.js_280.part.js": "ba86ea1e30402e5ac370024dd39f1ef4",
"main.dart.js_202.part.js": "b403ee09b759b91694ca18661979957f",
"main.dart.js_266.part.js": "fb37149cb54cf4419205d51c37b05ac5",
"main.dart.js_261.part.js": "1e4b60f3f4f1fc3ce0fc331ab9443c69",
"main.dart.js_130.part.js": "957cf56df2cdc1235f63bd1b01b81bf4",
"main.dart.js_41.part.js": "528ec2921eefc1e51404e50e4af847e7",
"main.dart.js_29.part.js": "10e00e2c5d3d75c63fe2fce23eec9806",
"main.dart.js_254.part.js": "2a88260fa8bd2ce9ea41cf5a3711e1b8",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_271.part.js": "8ee88e81a0d751c283592811ae2f2ee3",
"main.dart.js_151.part.js": "996713df2a76a11240a57503c652e2b0",
"main.dart.js_74.part.js": "82ac0c8c68419bb6c2c7b10c4863a836",
"main.dart.js_165.part.js": "2059256e4b022f6152d9c4cb4a1c15e0",
"main.dart.js_263.part.js": "284b656e53342410396b6952bd6245a5",
"main.dart.js_100.part.js": "0d1e1b7f2be8eb8c65a905b2156e06b5",
"main.dart.js_184.part.js": "400ed149589dbdad665fb0eaab05fbac",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_281.part.js": "3ea3dd8ba92f8c70936b2111fb6b5e08",
"main.dart.js_185.part.js": "10aaca8bf9b8794fce5cc3fe0b3027ad",
"main.dart.js_196.part.js": "483be9483af677973972a84705bbcea0",
"main.dart.js_250.part.js": "7cc1e375f884f432c7f1a2012facb2ca",
"main.dart.js_83.part.js": "a76541550d3921c6d9c22e8fa6f00f57",
"main.dart.js_119.part.js": "6a1f479835dd2f7985ceb82b37fbb703",
"main.dart.js_225.part.js": "0b24d98589cfc5ea5bcc52640607d2dd",
"main.dart.js_211.part.js": "2462b1f5a4b92be8edee0c17cf46ef33",
"main.dart.js_171.part.js": "051d0461a8bbd609622d5117c5761fe4",
"main.dart.js_162.part.js": "1112b45143b4b300c1c507ab0b1409c0",
"main.dart.js_77.part.js": "85184b99dab82bb23f449eacc20e6fcd"};
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
