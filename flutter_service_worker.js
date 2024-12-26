'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "bfa170dbd72799bb360c1c6332ee991a",
"main.dart.js_182.part.js": "a520d5b7d7a75c463107f38b3fcd52bb",
"main.dart.js_244.part.js": "53d1b3b752ce301145a10c708227984b",
"main.dart.js_289.part.js": "61dab9ac2cd0cebb05709fdae78ce0dc",
"main.dart.js_83.part.js": "75f8eeb8d24863383b7d465c980e66d7",
"main.dart.js_176.part.js": "f977179a6a7928756b07b7d83f393933",
"main.dart.js_96.part.js": "719986a2d6372340c0b71bae0f495088",
"main.dart.js_87.part.js": "71e3cbc98076de5c734697deae66490c",
"main.dart.js_285.part.js": "9c0ca0cb7b74d3caff63ff132bd06a41",
"main.dart.js_251.part.js": "7cdcbee1d43a6803a9536fa46b0f4e09",
"main.dart.js_126.part.js": "d770323d7a51baaca2ff551bf9edf732",
"main.dart.js_129.part.js": "8d91d9600bf8783c3199c5aa5a28e1c5",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "91f7662ad60b8cd0158b1bcbcc039a07",
"main.dart.js_218.part.js": "42a5f126b825827e07619288f0c9c551",
"main.dart.js_172.part.js": "19fa9181a25239d1a0bf1ff7e0f52a06",
"main.dart.js_40.part.js": "ea4434f9bfbde698d6ecb482addc55ba",
"main.dart.js_48.part.js": "03501b72fa781fa68ec55fe401f46900",
"main.dart.js_115.part.js": "324661a69aeb4f16b8c1ae986fdba2b4",
"main.dart.js_10.part.js": "849bfabc12a8dffa3a6ca2a712b021ff",
"main.dart.js_84.part.js": "b91164854b4bc548628640852c1d2407",
"main.dart.js_122.part.js": "e0c5737f6434c1c82939660802a710c3",
"main.dart.js_103.part.js": "fa6935ab853ceb6a6a7803140a899cd6",
"main.dart.js_230.part.js": "70f7807aafb2b50c6b9a11c8b9ca721b",
"main.dart.js_153.part.js": "d65105c74c7e75c5a1486720278e1bf0",
"main.dart.js_89.part.js": "66222a932b50141124ab81e7e7f1a5bd",
"main.dart.js_146.part.js": "0948899f51ea11d9e809a6e2797bd64f",
"main.dart.js_37.part.js": "74f1e111bcfab16217dfb42c385a1a3e",
"main.dart.js_287.part.js": "81349b8a3c8f3e4eb5e34fc0a14a8c38",
"main.dart.js_283.part.js": "7535f2fae5d2995d0ed89b0bb768811e",
"main.dart.js_132.part.js": "232635b2f0902f3b7d633fb190830f83",
"main.dart.js_282.part.js": "ee225b5056d089fc8d4d9281ecc30b14",
"main.dart.js_127.part.js": "31735e0cc62319c43bdb541aab1e0952",
"main.dart.js_175.part.js": "d800ee4e79741f9f862c2b9c6fe5bd7b",
"main.dart.js_239.part.js": "e4121efadb7da5e2c0d6bf1dc7128557",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "e140a548a24571321291e7e5a131fc9d",
"main.dart.js_216.part.js": "05cdf820c6fd72c5b3a3832d15208214",
"main.dart.js_169.part.js": "141fe19ff51710cfa8fd3e65d3713c97",
"main.dart.js_13.part.js": "19d3c748540df213b83b9ece92c18d8d",
"main.dart.js_174.part.js": "a8e25431e028f768251d2fcb916f62ce",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "1c3b07dfca415a6cbb7b101efaf5996e",
"main.dart.js_144.part.js": "6ba18d16d1c3d5118d74afadf1ef246d",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "3158190ae2bd2813955138ed09cd6993",
"main.dart.js_265.part.js": "8394f6a70a8b05ca1f00881451329f01",
"main.dart.js_31.part.js": "019558ef66e2af3e941bbb7ba326e976",
"main.dart.js_294.part.js": "be77aaa336275a6806720e808a372370",
"main.dart.js_18.part.js": "f113979e111380a3c4c1906423650314",
"main.dart.js_35.part.js": "e45ac993adb1a1060cb4bfc2759b8983",
"main.dart.js_101.part.js": "962b5bf0ce8deb271bc4f639da726b46",
"main.dart.js_77.part.js": "5307d1af6d190afddfad91e0cdf06ca4",
"main.dart.js_149.part.js": "420436da8cb79216facca4961c3b63bc",
"main.dart.js_67.part.js": "cbc9f8e330b85a606cff2f22c00ab035",
"main.dart.js_82.part.js": "67ed246599423aac514bae06d24e7b75",
"main.dart.js_173.part.js": "9a4302f7cbee97dac679461fd4569ce5",
"main.dart.js_291.part.js": "9979747f16346853c7b795daa6e2f31f",
"main.dart.js_106.part.js": "38a27ddb3a4414b39398265ad3d4b120",
"main.dart.js_273.part.js": "35547fe0ef6eea91c2d7894067d657d3",
"main.dart.js_62.part.js": "bbcfde0dd1087940c83d0d4e51da05a1",
"main.dart.js_259.part.js": "dc0877371be80abc05fb68cc9da44b97",
"main.dart.js_278.part.js": "8b4be115f7bc9562e51c11158b0738f8",
"main.dart.js": "7ee0e2eb953d561e3c9771da86cdaf0c",
"main.dart.js_222.part.js": "f20a3c35c7e9df01d6567ab65cdff737",
"main.dart.js_232.part.js": "ddaf5b6f2aa5b2f7260585ae663e72cb",
"main.dart.js_148.part.js": "9283ee26a0f242882f5dca56d6b0ce9a",
"main.dart.js_293.part.js": "d7dbed460cbdf5c89e7f2ccfc52a65a5",
"main.dart.js_124.part.js": "caf3ff59c76872cfe171d973836fa461",
"main.dart.js_50.part.js": "b6ae83fc3b2ab086dd687da38f98f821",
"main.dart.js_97.part.js": "3f3db31334066552ddee7ee7039255f7",
"main.dart.js_91.part.js": "633b332a5ab629a8e49e502e58d2d863",
"main.dart.js_145.part.js": "d866bbac18da226e81e3b1c03b32b653",
"main.dart.js_57.part.js": "1fc4783b5210fdc7fa579438378dc5d9",
"main.dart.js_104.part.js": "7527e66eb66a4f37b0a8c6cf5d00065e",
"main.dart.js_201.part.js": "957940fca56974b5ce40a674eae041a2",
"main.dart.js_181.part.js": "8c9ec390c5594a58ca0fc9cc79c1753f",
"main.dart.js_270.part.js": "dfdef29e9255db84d81879c0ac72e033",
"main.dart.js_108.part.js": "310d94a8f575608984e8ddb0779b65fc",
"main.dart.js_158.part.js": "fa68796e82ee811addf5c2e0662d2089",
"main.dart.js_33.part.js": "ecffb98a51961f54eee42a31c547ad38",
"main.dart.js_269.part.js": "d64f38932e151a4432079fac83a8bd41",
"main.dart.js_34.part.js": "9f3fe01165a388bb347381de11715cf9",
"main.dart.js_210.part.js": "8e6babfa2025db2d93dea1fea9752b94",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "94fe9bd447ab6e609ab2523018b7d02b",
"main.dart.js_88.part.js": "faad15db9ca67690e52d3c746a5f4fa9",
"main.dart.js_202.part.js": "19490a51cf8654b44d017814764d8840",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "c0a7f3953c7c08800f6fd96fd51946dc",
"main.dart.js_247.part.js": "2cb2ea3f80893ce7f6c524cadae46703",
"main.dart.js_7.part.js": "0a1e958419ca34a67dcbbc4d1289a3ad",
"main.dart.js_140.part.js": "6adfd32d252e7621c08c54ba8b6eb164",
"main.dart.js_170.part.js": "befe5a8275df81dd8e02f322e31c75cc",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "1d72b69cd3fc749065090609b85c26c2",
"main.dart.js_27.part.js": "1ec8a5b1eabf16f0c2613662d16fa169",
"main.dart.js_156.part.js": "22ff19657f5acc10fb2b6fcc87800557",
"main.dart.js_4.part.js": "d64f2a473b6e9b105d4e78926b817502",
"main.dart.js_298.part.js": "6b3ab0a0cf4a17585953612da3dd84b0",
"main.dart.js_219.part.js": "47cced775098d1b2d1f931f84f100047",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "39db6d4a83b81aae205c2c1e63ff128e",
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
"assets/assets/translations/uk.json": "7f8e394226cd7667b3671a3e3cee5efc",
"assets/assets/translations/pl.json": "67e4fad90546fd73760a99e253b9bde0",
"assets/assets/translations/sk.json": "8bdc79873b5db8f71d80926134b4b237",
"assets/assets/translations/en.json": "7780a8365b8670f4ba358b1842c09ad7",
"assets/assets/translations/cs.json": "88a1e80dab71c40883b33b814fd87f5a",
"assets/assets/translations/de.json": "d8339af262142bd3b7583326d693f3e6",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "4d24ce412454bbf54d6c33db7e5ff36b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "ca45d7fc9303dd44efe5c758068ae352",
"main.dart.js_147.part.js": "1df173e04a799bc4876ba20867974d2c",
"main.dart.js_60.part.js": "f87965bf259d72b56456887a3203a1ca",
"main.dart.js_263.part.js": "97d273faa923ed74a6ea6e22301de7f8",
"main.dart.js_220.part.js": "4d4c50dceb7454a8fe3b94be040ad173",
"main.dart.js_25.part.js": "914144b541d9a53470e71dd684ba3743",
"main.dart.js_288.part.js": "59f2eac22855a16cba01b64238e97e16",
"main.dart.js_141.part.js": "27d5d6d81291475dba6535f233af29c5",
"main.dart.js_249.part.js": "5fd11e79daa3f40ed9410f18b9183d70",
"main.dart.js_123.part.js": "8c81a7d97a97d53a5ccee84f337eda0e",
"main.dart.js_268.part.js": "72659fa127df6bd6e4939833137359df",
"main.dart.js_8.part.js": "4c1860d1cc4fe989987a5b22f6ce20be",
"main.dart.js_198.part.js": "de9ca4d600ee03c3c82fd242b5828c45",
"main.dart.js_81.part.js": "ae611dac27acfc4691bae10f9e5dd1b4",
"main.dart.js_113.part.js": "ce9181fbde1196263862727888fd3483",
"main.dart.js_280.part.js": "c7c89f49c5c9ea91a779d33edef0e917",
"main.dart.js_9.part.js": "4d5d7e6ea2b9aa1a7d91efb3bb92d23e",
"main.dart.js_99.part.js": "8d69a2ba0294098044067844a9f0644d",
"main.dart.js_22.part.js": "d7811ac81f50d4227c1e5dd8cc064b19",
"main.dart.js_272.part.js": "87a4c9331f1dff37c5b5e2191a39609c",
"main.dart.js_242.part.js": "4b2c45a64c4bfbe203caa17345e33bf7",
"main.dart.js_86.part.js": "2d0bd004506ad02e95944ee7b615819a",
"main.dart.js_23.part.js": "38bd13f8cfc4c582de0acaca22f65b71",
"index.html": "613331f25da20af92d00f90006b47ca8",
"/": "613331f25da20af92d00f90006b47ca8",
"main.dart.js_94.part.js": "d42c90b7a55012a96cb9011b0d35c06a",
"main.dart.js_98.part.js": "1de251a58d6fa2221d756dd4f6b8d47d",
"main.dart.js_53.part.js": "9adac9bf6b99aea9811b4fbcdc3c8000",
"main.dart.js_74.part.js": "6cb6eb3ce22fb3d7b0c13982d577977f",
"main.dart.js_235.part.js": "1004024b4c80c35f9c3148334d5aa628",
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
"main.dart.js_286.part.js": "101db6ac562ddef5201ca06f4b167fe8",
"main.dart.js_118.part.js": "b93f9abf5b867fc170887a88ad8efdd5",
"main.dart.js_262.part.js": "e93d5f4504b2ebc8f35655547d4661c3",
"main.dart.js_26.part.js": "de266d65bb796f0b1067ff63f434fe1a",
"main.dart.js_240.part.js": "49099b8b895720d33f8b850102dc031e",
"main.dart.js_20.part.js": "9cee462c48cf5a8542e9b0f29432fb73",
"main.dart.js_214.part.js": "cc7c63b204b5cc73372f7fc0ac56b15d",
"main.dart.js_51.part.js": "d890e3aa8ee6f8aa02c2996f74e315ab",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "6fed0468c8924fbf1ed03977377df894",
"main.dart.js_290.part.js": "95dbed43a96e8897e2e8330fa19cd23c",
"main.dart.js_1.part.js": "8ab373199166ba9fedb6c5b334cac185",
"main.dart.js_120.part.js": "b34c4f2f28d467124a5f253fdb9c1292",
"main.dart.js_63.part.js": "b5b3f3c1c832f5550731ddd375f4fd08",
"main.dart.js_211.part.js": "49edf7b13b07f6cf3e8959b621df03ac",
"main.dart.js_295.part.js": "66bafeafdce02827ebc8c20b2ddbee02",
"main.dart.js_12.part.js": "7643e668d76467431d0e0be9cee0f414",
"main.dart.js_157.part.js": "36d182812ffc90382866e3ed4bb6f800",
"main.dart.js_281.part.js": "d7d205348399872ae7d623e082510198",
"main.dart.js_137.part.js": "0d3109629f4880181c2d2d73538a3fa3",
"main.dart.js_276.part.js": "aa379a906194fba9bb39661dc4c54cc0",
"main.dart.js_28.part.js": "6deffef91cfa7ceaa449e1eeb1fc8ecf",
"main.dart.js_135.part.js": "36748aaf8b4a35fbc2ddae25b7b74ab9",
"main.dart.js_256.part.js": "6578d157a7338b5a35bd56782e827557",
"main.dart.js_237.part.js": "f95e25ea391d721373a675a5d75d96c4",
"main.dart.js_138.part.js": "f64c2b777d1cca998ad56dbc03a7c907",
"main.dart.js_193.part.js": "c3b0ecbcf94482886b94394e2f679615",
"main.dart.js_17.part.js": "cbbafb3cef5927ba1ab562266a6e4343",
"main.dart.js_105.part.js": "28fbd3ef9425dba5ce6fffb24b821014",
"main.dart.js_206.part.js": "e0dfeed739bd50d9472f9714dfcb75cc",
"main.dart.js_231.part.js": "2db3e5cc56d2eb844fb92086ef2dc5aa",
"main.dart.js_43.part.js": "1b776cde630e6b59bf06092c49170a3c",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "3f5e196bfdf65fbbb37079b6c701e1a6",
"main.dart.js_292.part.js": "b73083e56213b2a9e73bab6e6780db0a",
"main.dart.js_15.part.js": "91c4109dc7bc1f15fa9e5c94a07a5c3c",
"main.dart.js_19.part.js": "d3843e20d6a26ce771f12642d4c6161f",
"main.dart.js_284.part.js": "307c802245416f4e81fbfa8bdb260822",
"main.dart.js_255.part.js": "b913199fcd0dec0d3b79830b249acbb5",
"main.dart.js_186.part.js": "4832b6ded393eee631ae14c22f7ef16e",
"main.dart.js_163.part.js": "7f60aca9cb9bcd6bd60de445ba20c84d",
"main.dart.js_154.part.js": "3f16a5f2984f9b87d45420a001371572",
"main.dart.js_257.part.js": "edb989c4cdcf92028164398215894943",
"main.dart.js_16.part.js": "519dccba7cbc63a122591151dcc206f2",
"main.dart.js_250.part.js": "d5d434fe8167bc59d8ed2c2f4b4c1d69",
"main.dart.js_36.part.js": "51797c9a1495459261c5789ac109cfe7",
"main.dart.js_199.part.js": "7f46a9b7b0d0b817558ff33fc0190db8",
"main.dart.js_130.part.js": "34eb0fae73fe1b560a72ce876d03425c",
"main.dart.js_238.part.js": "762e2fa191f3892b9c22ae0d669a1151",
"main.dart.js_152.part.js": "1ebbeb05685630f4f985605bc70cd651",
"main.dart.js_32.part.js": "260250cca6bfac0f4b09ef3946cce9c1",
"main.dart.js_197.part.js": "e1d19c56e40b8dd75ca9521c47464842",
"main.dart.js_56.part.js": "2f7c279a5047c7f521fe755a7c1e114b",
"main.dart.js_227.part.js": "2df228badd9db575eed22b3e30b86755",
"main.dart.js_3.part.js": "457531debc5839f0c43fc6b43c7e875f",
"main.dart.js_68.part.js": "57b3d897af3cb0840a6d5d88cff84c64",
"main.dart.js_248.part.js": "fe303c803aab87c5f3a76f6e1516d9da",
"main.dart.js_133.part.js": "6c8b5c422a5f5bd4d7fb0212ec119e18",
"main.dart.js_188.part.js": "62259244026bfc53eaf231a46452cc06",
"main.dart.js_204.part.js": "e10f33e3ff4d3a512403f8e38705b1fc",
"main.dart.js_24.part.js": "a5a0f7a86a47ce0903a0389c7b5732d8",
"main.dart.js_90.part.js": "145cc48ccffec5802b0ff79c37aa4d7d",
"main.dart.js_177.part.js": "42a73270a6029130b3454fc7fbd925f8",
"main.dart.js_299.part.js": "c748812fa63374a02e1b77f8c50a061d",
"main.dart.js_85.part.js": "36cbd17b4d95f33e757381051a6bf4cb",
"main.dart.js_243.part.js": "3338c864fc90be2d37cd9882cd5fde69",
"main.dart.js_212.part.js": "bbf533b06078c48de60430b028328438",
"main.dart.js_260.part.js": "eb06ea3d85e97b7c779a8f19646c1850",
"main.dart.js_114.part.js": "5cefc90f9f9596611223077d4e8480a1",
"main.dart.js_39.part.js": "3b467daa6fd93176b9553ddc0eb6a3d7",
"main.dart.js_49.part.js": "372fb5a23f1032fc7e34e08fe7df98e4",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "cf8a68e1694001b92e1dabc9d72857eb",
"main.dart.js_195.part.js": "e5c9e7ef46360b49b3aefa91873a92cd",
"main.dart.js_121.part.js": "16f8e2c5f2c04a7db3ae17a0019c6a74",
"main.dart.js_215.part.js": "7b9113c80ad8eec0c0703b759aedc4af",
"main.dart.js_112.part.js": "9819fabd13757401390cdeb86ba1d5a4",
"main.dart.js_143.part.js": "914d9dda7adf17d2e3a5444a66fe53b5",
"main.dart.js_80.part.js": "95cc3768b534645aa311e3c857cfcf9f",
"main.dart.js_279.part.js": "682394884444338613b91e77a1cdd607",
"main.dart.js_30.part.js": "a758656eec181ace9929c2a18cccc590",
"main.dart.js_267.part.js": "cacd7e7528414a7b6c69ad90c1c05bd3",
"main.dart.js_277.part.js": "a6565496c221495ff6a5b4c5f9bc6a57",
"main.dart.js_136.part.js": "ba9d20ded4706525a9ccb0d92b27e0d7",
"main.dart.js_168.part.js": "e21b6a44a71722a42b5aefa73fef5f05",
"main.dart.js_271.part.js": "3b6a6d80435cff2cf2fc34aad0f07e73",
"main.dart.js_59.part.js": "ecfa896f7af0f605e2217f6260dbb3bf",
"main.dart.js_47.part.js": "4b6e36a10d35c4a7065352cba1d06ec3",
"main.dart.js_95.part.js": "b113c202e18814384222b0ec1ef4e621",
"main.dart.js_107.part.js": "6f4d5ff53bf84b9ead68e10a1304e12a",
"main.dart.js_29.part.js": "bd16dc5fa44bec50948438db598f2919",
"main.dart.js_236.part.js": "825a46706f0aa4196f930f79e7399379",
"main.dart.js_58.part.js": "4b5d33cc736057705740d7c751d49950",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "a79376a5a3d2b312fb38779e6a564b3b",
"main.dart.js_79.part.js": "a55f2f8665f16dbeb96625c83464fbf1",
"main.dart.js_109.part.js": "2343aa60bbaa08f1d1cf496f8e0c2e72",
"main.dart.js_92.part.js": "9c5ef06bfc9138cf62908bddfa82f26a",
"main.dart.js_224.part.js": "159176de119d69b63d831120cbfaa037",
"main.dart.js_93.part.js": "48a8451e5a725d0d6128f8379d88c8b2",
"main.dart.js_223.part.js": "7b58a007567df1ae5b534c8856851394",
"main.dart.js_11.part.js": "cba96ad73173e9abc7c5aad41e8154e1",
"main.dart.js_125.part.js": "d7199cc591bfacf259fb3c9dcfc1884d",
"main.dart.js_131.part.js": "d8628ecaed010d734359b5b79999ac7b",
"main.dart.js_226.part.js": "50c48afad02e30a0312c7757c9233c6a",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "a93214de0e83b8ec424f8b4fff39f251",
"main.dart.js_178.part.js": "8d5ab7efb241aa1c31b5f756f96afb28",
"main.dart.js_258.part.js": "8f620ccf55a189a61b9513e60277bc38",
"main.dart.js_297.part.js": "dc5f4ebf96b8564d7c477b192051f9c9",
"main.dart.js_70.part.js": "abc0cf8880f0286f2b9e075a3a2978e7",
"main.dart.js_187.part.js": "4e36661dd21c9e26d0a76d88d5237010",
"version.json": "1ef3f7ea073b19b518ea752aa8507607",
"flutter_bootstrap.js": "0dc1c3a38b3c04d7def37ea4455fda0f",
"main.dart.js_191.part.js": "f8f5704572323972deb5c246a1c45e60"};
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
