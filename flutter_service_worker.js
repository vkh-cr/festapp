'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_104.part.js": "c428d7e1aa7e7bbaea48bfe3921c8698",
"main.dart.js_113.part.js": "91449b10417a1f71fe928207635ca6ff",
"main.dart.js_37.part.js": "4c3da14acef55ffc4680ec8b28e7b505",
"main.dart.js_3.part.js": "e652d39a4521e1f93897a14e22211efa",
"main.dart.js_291.part.js": "40a63920c76f9d9fd42bf15fe7d503c7",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js_208.part.js": "077fa12ef22245aa3c48abadc31c323e",
"main.dart.js_207.part.js": "5bd29c27fe9af73538f2be25b39ac892",
"main.dart.js_135.part.js": "9caca7b2ae3e0c1a0b14baf79160bb79",
"main.dart.js_65.part.js": "9b3bf30254b224fc44992b2d02a9dedf",
"main.dart.js_282.part.js": "80280ef9a52822893b1c8c589fc9b1a5",
"main.dart.js_167.part.js": "a2ed50f15a6972fdc7f8bb75c92212ff",
"main.dart.js_271.part.js": "f56046cf651da607f46fa9793ce08ae2",
"main.dart.js_201.part.js": "aeeae3ec3a12df7cfdd551ab1d73f3f4",
"main.dart.js_88.part.js": "fefbed163f27b2107e420a91384d3d9c",
"main.dart.js_112.part.js": "e94e48c6b6087e5bc8f2ed2b7a9e71a7",
"main.dart.js_105.part.js": "a598a83f48d00c12fbf36babfdc06cc2",
"main.dart.js_259.part.js": "8b4c7fa4339ed65bca83e64b74df55a9",
"main.dart.js_148.part.js": "9e1aebc58c32cccc6a041d6c8b144cca",
"main.dart.js_243.part.js": "a262fea6749c2dd29fb72e910b785631",
"main.dart.js_76.part.js": "62b57498f7697faae2163f0f7e6826b0",
"main.dart.js_137.part.js": "f97485c7ec10e66dd8eb7932418a1219",
"main.dart.js_101.part.js": "a5f844494e7d5dafd5e6d76caacf83f3",
"main.dart.js_297.part.js": "6471ae55a8ad681b1fa4920f3541293f",
"main.dart.js_1.part.js": "e368a6cfbd5786d8dfdb8ca213205c85",
"main.dart.js_260.part.js": "8025653096d3267f0118814975f0d000",
"main.dart.js_173.part.js": "c1aca84534422239a13c0db0858e9d06",
"main.dart.js_92.part.js": "100ad7c53137a4fcee8e5d751eba7c14",
"main.dart.js_55.part.js": "b8364f917e532269e6cb0218e642c791",
"main.dart.js_87.part.js": "9a9520665567f9faedc9d467aeb32f31",
"main.dart.js_199.part.js": "9c2e83a27992ec24ddffd6f14179dcae",
"main.dart.js_63.part.js": "b146060c61352331d1790fa2402f7514",
"main.dart.js_27.part.js": "2cff13b1cedf106dc4f4d822d9a62630",
"main.dart.js_36.part.js": "befd0e5385b275ca99848497c5707811",
"main.dart.js_162.part.js": "8534a6b561a826f96bb28ee537d88814",
"main.dart.js_245.part.js": "1024c8af5b792db62679f0e5a99f0412",
"main.dart.js_124.part.js": "f7841917c15efdc17c1c239d67cfdde7",
"main.dart.js_250.part.js": "0a630f9e6bff328b18c1ef8646b4eaaf",
"main.dart.js_13.part.js": "6511a5e34c7d6d304dc318086bc25e51",
"main.dart.js_220.part.js": "c585fdff488c4565a6da9fed75c92d48",
"main.dart.js_77.part.js": "47c61b26a2638ed039a6a8cebc66c2ba",
"main.dart.js_106.part.js": "42f8a300d7c4ba102ec566724d703798",
"main.dart.js_14.part.js": "f04743e7aa059bf9853eeb530b669744",
"main.dart.js_39.part.js": "7ae1807167e72881519da78426d9ca20",
"main.dart.js_61.part.js": "b2582f7bc1e2f2b27222b1d4c8f8185f",
"main.dart.js_48.part.js": "1583402a83d9faac05b4727e849031cc",
"main.dart.js_19.part.js": "c56610968a08e98f25f31d6a7627e513",
"main.dart.js_132.part.js": "37bf7e87dca7c953c40c0f7a8639cef7",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_280.part.js": "05810bbc226d8497b4795eab0d2555d3",
"main.dart.js_274.part.js": "e2661742453d8ece7e95d88185d5f208",
"main.dart.js_73.part.js": "5131c5d8606c93896baaa1b1ab73c1b3",
"main.dart.js_30.part.js": "1c24d0a8febda1d334c89ce307a16a0e",
"main.dart.js_295.part.js": "1106fe23efa7e5d27e9b07d35905ec6d",
"main.dart.js_140.part.js": "9e6904d8caa4d0fd008e04dce974607a",
"main.dart.js_117.part.js": "a33b55fcfa459fa64aae3813033ecf57",
"main.dart.js_11.part.js": "b7dc1e30e29ca2bda5c31e669abd4fe9",
"main.dart.js_126.part.js": "88a73549dabcef928c0c044f829c6477",
"main.dart.js_169.part.js": "97ca7d02d540905a614bbb84f9c819fa",
"main.dart.js_100.part.js": "fd6304089cceb5531b23930d688a1d73",
"main.dart.js_266.part.js": "69e478fe5ccb0e85bb88383077dc11db",
"main.dart.js_184.part.js": "688649a4a0fae7f07e32f1651663a9f6",
"main.dart.js_234.part.js": "d5ce26dde18ddbae7264800dfc4f8065",
"main.dart.js_71.part.js": "6f85f2cd1698c36594c22ac9c50d22af",
"main.dart.js_161.part.js": "e45ece839a04fcba422854f1ef2cbe09",
"main.dart.js_42.part.js": "25a19f5be78b20ec17d1cce63e1c3757",
"main.dart.js_45.part.js": "dcdff168c900e028f380a412e178598a",
"index.html": "9b7b56f77fce5d7b7e15c9f9d34d09af",
"/": "9b7b56f77fce5d7b7e15c9f9d34d09af",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_251.part.js": "e1b81834d8213a2b4328a4bb625ac5b6",
"main.dart.js_35.part.js": "813618eecd57fc4af1d35f8b88be493f",
"main.dart.js_102.part.js": "1423dcd9a6e32fde2ae66b4c4b8a09f2",
"main.dart.js_79.part.js": "0d9fa36e0e9729ea4c7901155bdf43f9",
"main.dart.js_217.part.js": "61f6aef79d15d1d9d3da1d0384a1ac8b",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_119.part.js": "875cce61a658a8462c3aa835851d5806",
"main.dart.js_258.part.js": "b926690698e06dc8c05f8d3a7993d55d",
"main.dart.js_10.part.js": "e55f8023860af25366fc5c9b3a6af808",
"main.dart.js_168.part.js": "f76530175175df75aea4284a7799a293",
"main.dart.js_244.part.js": "bb462fd28dc1bd68db1256bc36fb4200",
"main.dart.js_98.part.js": "7117663407eb43d20608f67ddf5eaf82",
"main.dart.js_242.part.js": "edf9404501a5c7c31027138b2ecb1221",
"main.dart.js_78.part.js": "5cec1759da0b5819988d6d758d797986",
"main.dart.js_283.part.js": "1c913fa8b3f6cb6b8707be2ded7763e4",
"main.dart.js_75.part.js": "8aab5a5f451c1db5f1de05dc3d048cde",
"main.dart.js_294.part.js": "75ab3f3b2ab8f65e0902aa8e82e5cfd6",
"main.dart.js_177.part.js": "9cbf36ddcbaa4189edea9ca4c8408fe5",
"main.dart.js_134.part.js": "be154f5e986a55ea34e1f3a35cb6e894",
"main.dart.js_82.part.js": "1a6935aabd6779bd925e2c18b6a5854e",
"main.dart.js_149.part.js": "7f7577044fe529f98ec79a45481bc426",
"main.dart.js_261.part.js": "a360cf197c698bedc76842d9b157f537",
"main.dart.js_57.part.js": "716232697d1dd6de24524c6b9ea7fd56",
"main.dart.js_34.part.js": "1246af73232418167dac4d5fdf85522b",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_299.part.js": "7505fad48fbf9ba51601c55262e3c2b6",
"main.dart.js_138.part.js": "69b0e563defbe88bad297808914ed449",
"main.dart.js_263.part.js": "fe53fc30d01af8847a6deb098044543a",
"main.dart.js_179.part.js": "9f5fadf4ccb0e196e0ca5991734f7e36",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/translations/en.json": "7097108efba05047fb10743c04560504",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/cs.json": "f0b563ad42009f2e96ce8347c1e6128c",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/fonts/MaterialIcons-Regular.otf": "c2480b74a41efcaa1cbe3ae8b3785335",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/NOTICES": "85a58e7d48e3220f81eddc5c1a054819",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"main.dart.js_69.part.js": "7c1f5fa182fb44ddcfe000ae27805d79",
"main.dart.js_107.part.js": "17747bb7637c3fe5dc473ade4bd45a28",
"main.dart.js_190.part.js": "e1f11200b523bda715a39199e9ae4feb",
"main.dart.js_240.part.js": "8bbad405639750fa392eecd2f63c5dc5",
"main.dart.js_164.part.js": "87a1684765e5306bcd9ccffbf6bc9a60",
"main.dart.js_89.part.js": "8e817f3fc084e3989d29fc7bbaead61c",
"main.dart.js_160.part.js": "4fe4c5a7ac69ba76772881b9c63c291b",
"main.dart.js_44.part.js": "a16e647f337ed76c1ca9f7553b824987",
"main.dart.js_195.part.js": "f0c80b20683e92a1587d0483bdf7f71d",
"main.dart.js_32.part.js": "79122959b3731540f86fffcc8bf1ce2c",
"main.dart.js_31.part.js": "438ae4212a93a00f706f43838699c1dc",
"main.dart.js_247.part.js": "840e4e3761b349fd2d0b41a2a8f6870f",
"main.dart.js_5.part.js": "41df7a9b88be09e2bdfc42fa358e0220",
"main.dart.js_254.part.js": "138d6aac2a76d073df26bab076f16a45",
"main.dart.js_228.part.js": "17c130e36d976172adbd407697a8d33f",
"main.dart.js_292.part.js": "3f92fcb80587ac2d5a0a6d9b0a66cda6",
"main.dart.js_284.part.js": "0a1fd23c13b93c17f90be95a8f6f9d12",
"main.dart.js_16.part.js": "e4cf4cc843488242e91854a164f92659",
"main.dart.js_50.part.js": "476026707e44c1db80c599313108b63b",
"main.dart.js_296.part.js": "4befe624956bd9afcf5734be97c0bd62",
"main.dart.js_103.part.js": "33aea38fa8da6ec123a5babdeb7afdeb",
"main.dart.js_278.part.js": "469c41d0c697e2d7f06c7a5af54d33a2",
"main.dart.js_239.part.js": "2b6a828182933ca58ed8f43a3d69d7b4",
"main.dart.js_205.part.js": "f238b04e62ad4c05518dbd27fd1db223",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_188.part.js": "522b87a32f8f47f389ed48653ccf24d6",
"main.dart.js_152.part.js": "a2b5060b97c4ffbd4385f80977a3768a",
"main.dart.js_229.part.js": "c5349f36ce0a968d0f0a6d4f85ac9baf",
"main.dart.js_202.part.js": "675e05b74757e6911020bdad6b0dc1fa",
"main.dart.js_286.part.js": "73babd1ee8a8e1a3c76b13aa545e983f",
"main.dart.js_54.part.js": "e63ece4b606a07200b112e3a2eddc704",
"main.dart.js_232.part.js": "a2b5c13aeffaa37c1055f7d2854e965c",
"main.dart.js_52.part.js": "1c3c1c518677087f77967fa87f89358c",
"main.dart.js_198.part.js": "650dff8474d44408dffa246656f5b476",
"main.dart.js_196.part.js": "7718c3679ac8333f8515fc162d754514",
"main.dart.js_141.part.js": "4c1359ca48ce6f2b4d2150ccf89b6cdc",
"main.dart.js_192.part.js": "5f614d44e5783f6cb7543d909d1b416e",
"main.dart.js_287.part.js": "f122da2932d6a30a28f30cfd352fc1ce",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_7.part.js": "9f40cae020f136f0d4ff4bdcd946185c",
"main.dart.js_23.part.js": "a058e03a22dc170034ec65a2ebeff1f3",
"main.dart.js_154.part.js": "61db206a985134103aa09e91a7f1a063",
"main.dart.js_68.part.js": "682334ece0f66be4a87bac46384bebc5",
"main.dart.js_252.part.js": "2edae2d5b10b8f7de10f7c521a1a032e",
"main.dart.js_257.part.js": "ba113afa998db83d948b8fd9f09bdde1",
"main.dart.js_49.part.js": "8543097fecd04713dd5979dd45bd1c52",
"main.dart.js_142.part.js": "0ee34d04f8f5295193e9be79b2e640b9",
"main.dart.js_290.part.js": "f0473309b82f586c6cbeb19515de470c",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_43.part.js": "8d9fa817061ff47221cdb89504440bc4",
"main.dart.js_249.part.js": "a25597f6056c33661c442d90d1aab436",
"main.dart.js_97.part.js": "87c38d41256af58885c77b29b8aa082a",
"main.dart.js_269.part.js": "c6b16f3f5992eb9d5705c71d31bcdb5a",
"main.dart.js_267.part.js": "d2c65cc851e223370f455299faf5f843",
"main.dart.js_67.part.js": "aa369dac43ca981f0a79e997b71635d8",
"main.dart.js_8.part.js": "ac73dbcb31296c062c7f4ab04fb067ed",
"main.dart.js_21.part.js": "b067305dd46e9681a478ec0e83d2e8b7",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_123.part.js": "1f93b8ab3e9367659aa9d54fe4e2eb6a",
"main.dart.js_194.part.js": "4cbde51797ff4a397b26a993a0bfbf5a",
"main.dart.js_93.part.js": "fa789ada4a836185e613c4d7e841338a",
"main.dart.js_186.part.js": "dee5645d20da0a4814b785bd2d0ee887",
"main.dart.js_298.part.js": "07cd09fa68e24c88eaf08df833aad3c9",
"main.dart.js_66.part.js": "3329aa31a489561f717362990459778e",
"main.dart.js_64.part.js": "bdc764b4c1133f31cc35e5059a9fa8d4",
"main.dart.js_176.part.js": "c09f4599444b5bee6b56630fbe40129b",
"main.dart.js_285.part.js": "7285e350535d9c05df53a452cd91c5ae",
"main.dart.js_270.part.js": "f9218992b5df9d33de478dca25594e55",
"main.dart.js_70.part.js": "4d87a417957c93b0902943cdbd2a1d8b",
"main.dart.js_46.part.js": "38daed1f21bc53bb1235853ca835a70e",
"main.dart.js_40.part.js": "dc3a67570b1c0ebc2007ccbbda529d8c",
"main.dart.js_273.part.js": "d06e2331762d2e7cf2aa69f3bcbbd858",
"main.dart.js_22.part.js": "7b48a557c4e8ee488103513642241739",
"main.dart.js_191.part.js": "04f44b28a5e1e6e38957b06e1c200aa7",
"main.dart.js_158.part.js": "805655303110992bd7b8cfbe481cb8a5",
"main.dart.js_255.part.js": "6369453ebb5873df2ca5932dcc7a9069",
"main.dart.js_166.part.js": "56ffa511eabb6b918d05bc6c377e8eac",
"main.dart.js_235.part.js": "2f1e54fa76013eb3a1a105160ba5b10c",
"main.dart.js_268.part.js": "7e4be90d5a30a79929fe95a6eca5ae4b",
"main.dart.js_172.part.js": "054d909f7039ca644c96d3c444bd0581",
"main.dart.js_4.part.js": "9071c179e7cde5822f894da0ff75a5ee",
"main.dart.js_85.part.js": "312245125a2bdccee8aff5d0a228ad3f",
"main.dart.js_150.part.js": "4de514558b195770591023c550ee4300",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_128.part.js": "492c111a139751a99bccc227a69945a0",
"main.dart.js_183.part.js": "e9f8ce04425685e7861df5f1e17dcae8",
"main.dart.js_248.part.js": "926b0a4645fcde0807d820b2bc8b0589",
"main.dart.js_147.part.js": "02bb9bcba29a2e694024f4ddaa48d91c",
"main.dart.js_25.part.js": "72c4fc6851bf535a3cdfbc2795772b0c",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_90.part.js": "00e9bd56c65a64c500f1002f6da2adad",
"main.dart.js_275.part.js": "da553c22c7880ecc9b5b78ece83a7710",
"main.dart.js_174.part.js": "816e52a5cdfa2cfff5558230e56a8161",
"main.dart.js_281.part.js": "884dda0fe428580374a07154336a2db2",
"main.dart.js_175.part.js": "7ba9ea36822b335cce89e3f2af5b0935",
"main.dart.js_28.part.js": "a02d6a7c8165c9a1edabaa8750f59c01",
"main.dart.js_62.part.js": "652b300da6164659800f12f5e8e6e7a8",
"main.dart.js_206.part.js": "62d7e59cb22c7c4d84289108cd604a63",
"main.dart.js_29.part.js": "11fda293a12f0425e4f5b01393779281",
"main.dart.js_129.part.js": "3a2508800e0d7f479e189814373e4f77",
"main.dart.js_127.part.js": "53caed83b773ced0bd51b29ab40a4c42",
"main.dart.js_216.part.js": "b0182fe4fb00720ad959c1bbb2b30d90",
"main.dart.js_133.part.js": "2e5054c36d11c03a301eef9ee5a4759c",
"main.dart.js_165.part.js": "30548cffba10c793bd650bdd89255332",
"main.dart.js_24.part.js": "b5b4352237aa4a8802ac6dce22532669",
"main.dart.js_215.part.js": "957ba058cb005f9d184ffa0d849b8704",
"main.dart.js_253.part.js": "0a4416270cafaddbe6c3ab0eeaf36b9d",
"main.dart.js_145.part.js": "12be10410b45f522156fdc8359fe3df8",
"main.dart.js_227.part.js": "da6a7d8c34ecdd6393621f5cb96d817c",
"main.dart.js_171.part.js": "dd0167956b69715fefae1e3637ebe733",
"main.dart.js_218.part.js": "fa836b42e3ea64acce99210e4ef64613",
"main.dart.js_121.part.js": "ac5ff4afa23b852ef87be1544b603f7d",
"main.dart.js_230.part.js": "08f3164d1ac3f20c8891a04d1f43d8c9",
"main.dart.js_74.part.js": "0505ad25f57f52764399b3b353342a15",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_108.part.js": "df47b92bb3c554ff5d8abd97d5cc9f94",
"main.dart.js_203.part.js": "74d779d008faad9ba7f607f1651dbb28",
"main.dart.js_12.part.js": "ffcc3634b92aff4ff04c94e8b64287fc",
"main.dart.js_231.part.js": "ebffbb9f50839bf863ea206d0b19a650",
"main.dart.js_289.part.js": "eac04f68419ebb237c26a76e64242ab4",
"main.dart.js_139.part.js": "904653ff374655fbf05595ec67a14d42",
"main.dart.js_38.part.js": "340a5b86973b5fd0c319619d408fedc6",
"main.dart.js_193.part.js": "b06c2074191159e214e3e43d5c4a0ca5",
"flutter_bootstrap.js": "1149b1ceca559f60550e93242b164dfc",
"main.dart.js_15.part.js": "8acedb3677a742d1a9d3074890c57cf4",
"main.dart.js_9.part.js": "fd300b5dba845e2381fe8fc45b733eaa",
"main.dart.js_189.part.js": "11e931b6843d7e1476932c05fbb5da02",
"main.dart.js_26.part.js": "4b8153c00343fad68e46d9ecce6a9f2a",
"main.dart.js_125.part.js": "eaf47e3aa447495d14bb874b8c559952",
"main.dart.js_155.part.js": "a621fb347815eeb79033040889f72985",
"main.dart.js_276.part.js": "31581e11cfc0b9dda4495cb98e936527",
"main.dart.js_178.part.js": "737c7d57df216c69ed0ec4fd5831a2b4",
"version.json": "cde72e0a79c01dea64ccf33430231623",
"main.dart.js_293.part.js": "425946e94584ff9fa09024383ca90944",
"main.dart.js_222.part.js": "d34ed669d52d85075f281ea7945ae90f",
"main.dart.js_238.part.js": "6a7467b33b93893bd6ff17a6931194fc",
"main.dart.js_146.part.js": "2e16e81fa90c89de094ee85466101d01",
"main.dart.js_256.part.js": "b8c518696226d73e926194dfcd5453a7",
"main.dart.js_233.part.js": "682b4805d4eded37d60c3bd456c8e59a",
"main.dart.js_221.part.js": "3e26c0e19c318180e041a6a4d4b0ac59",
"main.dart.js_115.part.js": "6748bf28ad936ecb9b4d291222b9f1e8",
"main.dart.js_157.part.js": "e0c9102d427470a89e0e82b189fe613c",
"main.dart.js_187.part.js": "65db33142b8ebc8542da561a6b2c599b",
"main.dart.js": "09e30368961685673ce5527c9e04742f",
"main.dart.js_159.part.js": "ef47bb9269563376c671debe19ba2488",
"main.dart.js_51.part.js": "a7cebb71c2356deb914c2a959afd5ed9",
"main.dart.js_224.part.js": "104fd92233e5252468f6aa5ffd7bb25f",
"main.dart.js_6.part.js": "8c5483df7cd4250cc36092742f7fe56c",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_94.part.js": "b8bf87c25aca3492fad831b284525b70",
"main.dart.js_99.part.js": "7b0d63914e7dd140e3149610a1c10c7d",
"main.dart.js_223.part.js": "dcacab1291e355cde6422364a389ca7d",
"main.dart.js_17.part.js": "dcb930e46274d658ceac8c653930de36",
"main.dart.js_153.part.js": "200a78e4083e1f5383526c309432d09f",
"main.dart.js_86.part.js": "7edfc5cb5498a1e1ecedefd754fdb073",
"main.dart.js_33.part.js": "3a60b164efd409223df3e3e106412a56",
"main.dart.js_180.part.js": "ad01804ddcfc24d167eff55c71d2ac60",
"main.dart.js_236.part.js": "e729e8e1f625358ddcecf1f415252592",
"main.dart.js_277.part.js": "15931e841dabe52a5b008df3cde96dd2",
"main.dart.js_118.part.js": "2cc74b40b32561319af5256a16ade08f"};
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
