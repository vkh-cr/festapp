'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_348.part.js": "2fa14cc58f3278035c7fac3779fc2c1b",
"main.dart.js_157.part.js": "32ccfc112c97bb9ca60d9792615cc031",
"main.dart.js_329.part.js": "a955efed842a15ea00c9694db816e5ab",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"main.dart.js_126.part.js": "4e74a67750d32441171c8fc22364f9d8",
"main.dart.js_202.part.js": "a7371912de7148471d36fcea85ec0604",
"main.dart.js_271.part.js": "c2c7457e3f90e95cfb204a49a50eec7a",
"main.dart.js_58.part.js": "0ff80543ff86a7eea322d70604a165f5",
"main.dart.js_121.part.js": "20acfc67c9ef9e4c421d4320dd64b61e",
"main.dart.js_345.part.js": "c060d02d7d49bd93306e7e476c38c93e",
"main.dart.js_303.part.js": "1b65be808d6cd332a4ebdccc8f12b958",
"main.dart.js_114.part.js": "53ad17644771b707c6e1d2214850b13d",
"main.dart.js_9.part.js": "dcbccf0b42d99251d405b44e8c002ee2",
"main.dart.js_166.part.js": "80286b4442e6edb11c2b8c14489ff8e5",
"main.dart.js_170.part.js": "27ae00b07d3e0b59720a2969f107d1e6",
"main.dart.js_236.part.js": "816ee6edd8821354c5e38d8e6c484f9b",
"main.dart.js_36.part.js": "ab73f71007ebe7bc4b931109b711f5cb",
"main.dart.js_64.part.js": "6f234f376e07680ac852d9f0c5e6acc9",
"main.dart.js_229.part.js": "e7760d81b6897502bb0e9cd8b9119d91",
"main.dart.js_174.part.js": "040884303d4e9f3435e0b15f01997a3b",
"main.dart.js_307.part.js": "7a3014a8c231046201d24f4f6990efdb",
"main.dart.js_368.part.js": "8194a1391d3e65968b3c67f477d412cf",
"main.dart.js_156.part.js": "8ff77d3bb61298081ba7131c6b07425e",
"main.dart.js_176.part.js": "ae093f09c0fd4d834fccc5cf7752da83",
"main.dart.js_258.part.js": "8b842c2d9a5125fe5200c3719baa87fb",
"main.dart.js_98.part.js": "4041fc86c22e3ec86dff09f35b370c5b",
"main.dart.js_331.part.js": "326a4a228fd8ed64eaf26283cb0cd108",
"main.dart.js_254.part.js": "7b52bab9411e75d5e46300c33fca6ace",
"main.dart.js_346.part.js": "41dc9e600fae97e1de3b5754d93e3173",
"main.dart.js_247.part.js": "bfb2785869a785de338754f086947eda",
"main.dart.js_212.part.js": "0dd18aab841c764d440e72da72dc96b5",
"main.dart.js_120.part.js": "a4b5fda1fc20b90972892c29912d5aa0",
"main.dart.js_357.part.js": "7c2a69a4743f284a229366ac3fb87e9e",
"main.dart.js_82.part.js": "b7f8358e233063786b3b2cda61e7bc40",
"main.dart.js_62.part.js": "44d0101fb2b0af291c742cfd449843d0",
"main.dart.js_34.part.js": "27d365468ed396be76f72b9c2c8b536b",
"main.dart.js_30.part.js": "24ff75ee34240aac58fbf1f4027c8d62",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_291.part.js": "a190fe035392da5a8fe0945dbd87e414",
"index.html": "b7a48278d9c582a01c86b65c05b0e911",
"/": "b7a48278d9c582a01c86b65c05b0e911",
"main.dart.js_29.part.js": "a38f135355a3b835a2f65a5a14196568",
"main.dart.js_12.part.js": "56dabb6a987bdc2f7697c15e86097706",
"main.dart.js_69.part.js": "248e5b107b81b976d3fec6aff3cfa9f7",
"main.dart.js_79.part.js": "b5720ce22d17491fac847e272d82dc7c",
"main.dart.js_318.part.js": "7e78d08ff2352ff5a37a98b4d4cc86c5",
"main.dart.js_246.part.js": "57ebfe93e4e71ac99c38fb06c169ac76",
"main.dart.js_39.part.js": "08c807e2bc14bea93a0b9905272380e0",
"main.dart.js_164.part.js": "b79bacf41340b191be66caf06df11a75",
"main.dart.js_137.part.js": "13999c0bfd4b1c35e6d210b8f16a3254",
"main.dart.js_112.part.js": "b7889c1c89bd1a5dc0e00dda594106d9",
"main.dart.js_32.part.js": "ac20bc5320c048f7a9dd0b6d3d74f542",
"assets/NOTICES": "76d31bcceaadb251f2aa7862d72a8b58",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/uk.json": "06d8c6f66303ae3e257fa9a62fbf09d9",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/sk.json": "e20b4c2317f454bc552b2df9f86e40e5",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/assets/translations/cs.json": "6defeb4254654b4ab4a29622114c296f",
"assets/assets/translations/en.json": "a5b6fbf79a1fd60c273e53cfa0eb255e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/MaterialIcons-Regular.otf": "d9dfcc36d2553b8ee54770dff65fe77d",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"main.dart.js_95.part.js": "461fa63725aa829e522991c00fb0ce5a",
"main.dart.js_301.part.js": "61e185336ab215d4fe4ab666a9025ea8",
"main.dart.js_334.part.js": "d670ad542bfc764092532dbf7b901eb7",
"main.dart.js_203.part.js": "e67e1823cb010a45b7a2fbd7ce4097ae",
"main.dart.js_183.part.js": "0c75971a175c7ec523e96797030872aa",
"main.dart.js_132.part.js": "072fce4443ed72ad8648b5cfa1e7e317",
"main.dart.js_370.part.js": "dce5329b065b9b13e4b48015b2b8e269",
"main.dart.js_21.part.js": "66ea281d1dece1dde479aec919725d7f",
"main.dart.js_149.part.js": "5c8cd3422f6fa84a46f3ac7dc0293339",
"main.dart.js_214.part.js": "3e48299a754bf9878ed50fca7eb928bd",
"main.dart.js_55.part.js": "70b0252c52522d11842f1ad4a8903b0b",
"main.dart.js_155.part.js": "83a63fe5e6a00da966def93cfabf2d1d",
"main.dart.js_249.part.js": "28c30d37e1550c4450ea39dfc1379614",
"main.dart.js_135.part.js": "87bd6208209acc174e1b5129d4fd07a8",
"main.dart.js_123.part.js": "7349e2a82525e6fb6d80942a4d133975",
"main.dart.js_319.part.js": "49edbabbce34a3986c09372c1657228c",
"main.dart.js_147.part.js": "4f39694613be45f7745beec58babab2e",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_260.part.js": "94ae0468c4f9083926041d7f6cb200b4",
"main.dart.js_20.part.js": "8c11c9c24b12294484d1bad0d66af943",
"main.dart.js_67.part.js": "cea6a8f5fcfdbac21f14fdf7f7dbe4c1",
"main.dart.js_204.part.js": "7fa27ddbe2a20dc34495e132d3ea6a62",
"main.dart.js_144.part.js": "b8fc8b0044c6734c8cc14ab698460a8d",
"main.dart.js_133.part.js": "5712d29e849dfc7d9188994eb6ad6e5b",
"main.dart.js_304.part.js": "039825fe3eb5e8b889f28466b28e9ff6",
"main.dart.js_240.part.js": "07c775e192fc699a1eb3c96e2f76884a",
"version.json": "d766d97d33fb08856386e013cccb78ec",
"main.dart.js_285.part.js": "50676acf22bed59d293d3f71fd1b021e",
"main.dart.js_269.part.js": "7286e282dfc5afee860e79916b6595b4",
"main.dart.js_75.part.js": "4d74ff4222163a363691ff5fb4c61101",
"main.dart.js_263.part.js": "16d13225a01a5c2c0689e2caf5e8d6a6",
"main.dart.js_311.part.js": "54e1ba2855eb7894d16150ab354dfd44",
"main.dart.js_347.part.js": "6193129594608556d574518acf4761b3",
"main.dart.js_99.part.js": "b2636630262b11a7f76acf3fc4373287",
"main.dart.js_14.part.js": "52fd6d1cf468f27a948fed5d2f5f9f99",
"main.dart.js_233.part.js": "d9074cf0d53639b73ab4475b4c3e135d",
"main.dart.js_277.part.js": "931d0f5d88fc7e30fb69b7bb5d62a9c4",
"main.dart.js_53.part.js": "052bb480f3e2a25d1fec923595e28ad9",
"main.dart.js_273.part.js": "473cca0ed110c3e082ba9a5a85f892b8",
"main.dart.js_108.part.js": "ba26a6dd6b3047320e93a7f5464638be",
"main.dart.js_187.part.js": "b402080c4d7587f66cdfac264243f463",
"main.dart.js_325.part.js": "69323d52bad640ce0a508fa066a70f4a",
"main.dart.js_265.part.js": "4c853c5e8f9b0f4891640d8dcbd641c5",
"main.dart.js_193.part.js": "2170f40f371137bfc0eb2dfc23ed7802",
"main.dart.js_366.part.js": "36211db2de328bef4ada27ab7e00126b",
"main.dart.js_264.part.js": "67386b4dfb1ffd1a1a05cafc936061f0",
"main.dart.js_371.part.js": "cfeb0f66354f3cf013a97a96d6290578",
"main.dart.js_168.part.js": "0763d66ee17fee18f6b8d1302189077c",
"main.dart.js_215.part.js": "fe3555787f6c0669a2abaa0e9a207fe1",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_243.part.js": "141c8d4b494c95384be45f3097dec996",
"main.dart.js_294.part.js": "9696978c7ea0f959495c0b2f32f409ab",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_343.part.js": "2ef243c1ccc5d65fcd74de2b5e6f682e",
"main.dart.js_195.part.js": "d4b3d4bbaccb8edf2b229668f877c5c9",
"main.dart.js": "c5ff3310b4241597eb4c67bd079992d3",
"main.dart.js_65.part.js": "3d085caa52447791843582235d1b9007",
"main.dart.js_354.part.js": "315ad6cabd8374c5173cd0eb6d466cea",
"main.dart.js_208.part.js": "6422bdc2d2f2bb4772119edb624a9186",
"main.dart.js_177.part.js": "af91eaef8bdf83080a7064f73316f46a",
"main.dart.js_310.part.js": "161431d0348f06b49ed49a5a83ba4830",
"main.dart.js_324.part.js": "dde6bda9d485a81fd9f2e92cddfa5b9b",
"main.dart.js_2.part.js": "a6c055f3485a9fcea5a09b50ea6389b9",
"main.dart.js_278.part.js": "0fdc533f62591356dac36d0612b24dc5",
"main.dart.js_292.part.js": "2eaa93d27124e660ee4d2f0052592eaf",
"main.dart.js_244.part.js": "a8c4bc23894f95dbd7c34038524240fa",
"main.dart.js_47.part.js": "8b964139706f1b115cedccaf4be68ef7",
"main.dart.js_152.part.js": "4db6b07e13b30a5fd9fbb5de7590dddf",
"main.dart.js_159.part.js": "ae8ae1873e71882f799d02c564ec6635",
"main.dart.js_300.part.js": "8533e31d3d791022444ac85675ec1355",
"main.dart.js_158.part.js": "b85c88ad1585ecbfdc90fae6f8f21832",
"main.dart.js_205.part.js": "ca7cb6e65770d159c6f02cf934687511",
"main.dart.js_71.part.js": "0e741f0ff8112ff690c941017d85e5f4",
"main.dart.js_342.part.js": "908471e25af833d2c4fba2b2ecafa930",
"main.dart.js_340.part.js": "e50c235a29ee697eec9ec860a5084edd",
"main.dart.js_338.part.js": "926ea85b17779d4ff1436b9b871c855e",
"main.dart.js_116.part.js": "1ff03f8a5c0e40f51cf6e0a3127fb846",
"main.dart.js_165.part.js": "096d26ccef256bd47547cda4bb871c5f",
"main.dart.js_323.part.js": "0df25ff335958af056cad0a46247995a",
"main.dart.js_142.part.js": "c8fc1e39f320c8175717d5aef0e42275",
"main.dart.js_163.part.js": "21dd799894f19af53a2f889d345d7110",
"main.dart.js_313.part.js": "ac49eb935a2853fb45df4dc040227dae",
"main.dart.js_25.part.js": "dcbe78b481c8ae92ef319e780b25faa5",
"main.dart.js_17.part.js": "61bdc305d4f8fbe59665a47fe0b11f49",
"main.dart.js_61.part.js": "3682880d25241d725322dac3c9fe476d",
"main.dart.js_101.part.js": "ef02efe7c076fda7a77b08d72ca00472",
"main.dart.js_333.part.js": "41b33775bb116236adb1dec4ab76a6bd",
"main.dart.js_350.part.js": "d8007489f5c4b470bde308e81e66fc51",
"main.dart.js_302.part.js": "de7b6f87482accb097add4f5511ca9f0",
"main.dart.js_351.part.js": "708fc78f19a4899ae5713d62eacc947d",
"main.dart.js_349.part.js": "7da4cfaccfed5d36419a0abba7247351",
"main.dart.js_365.part.js": "cfbeca235d9c3c92ad5e05077c5234c6",
"main.dart.js_185.part.js": "e833b65d33182ba736a14fee9939c6da",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_306.part.js": "a6d1f8c59b1896dc7c85cdb822c07950",
"main.dart.js_139.part.js": "cbcba10be00aedecb9cc362f5ed83526",
"main.dart.js_56.part.js": "579765051f09ea477f36007abdcbe728",
"main.dart.js_23.part.js": "b1d215b09a813c45cd264c5aea5b0af0",
"main.dart.js_238.part.js": "ab68d73092e3dc5887a6bbe98f9b5594",
"main.dart.js_367.part.js": "c5bd2e862979945093684d2d2ec8c50f",
"main.dart.js_332.part.js": "35e5a4645d5d22dbd36cf55674d83c5f",
"main.dart.js_336.part.js": "44e798a98ff19e9786a99518c647ce3f",
"main.dart.js_122.part.js": "4f4b58736f17f52e52b4ff87d0bb040a",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_293.part.js": "eaaccb90c19cf3b0a8b2245210865adc",
"main.dart.js_88.part.js": "f02caa4f0b6d8b9ef407c80b9f82fbb8",
"main.dart.js_4.part.js": "1d3cfe94930c7a329c2df02066ee4df1",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_337.part.js": "84eb8b625ab83bb7de6e3b8a1087ceaf",
"main.dart.js_3.part.js": "e3312bae81359432fee34b7fcb768c54",
"main.dart.js_228.part.js": "efc7a5b3921e6571149a2f0d2880a5d1",
"main.dart.js_178.part.js": "2a8163b3d8d27a85da3d2fdbc08047ab",
"main.dart.js_175.part.js": "b87b3fa42bf2180b056781e96a80225e",
"main.dart.js_280.part.js": "cb3643c7c1e29f5d4831792dfd903393",
"main.dart.js_262.part.js": "358794cfb8b092ec680b8d868b4cbfa3",
"main.dart.js_96.part.js": "e7e2c3e80edcaa5dbf8430a0827c514e",
"main.dart.js_296.part.js": "8ce7ee9e653e7318b53465fd2da772c0",
"main.dart.js_308.part.js": "a857ad30e81d103805be802554cc2589",
"main.dart.js_89.part.js": "d2616b15a9dddd26de05900e44f99297",
"main.dart.js_245.part.js": "6e43c2406149c9c92f518cc02ca18b5e",
"main.dart.js_40.part.js": "c627232e2f55ab0dd6b9b0077e7e82b6",
"main.dart.js_107.part.js": "66542253f1d065658f9e113e2b931038",
"main.dart.js_225.part.js": "d064acad3a268ddab902210e5c253b4f",
"main.dart.js_321.part.js": "39109124ca1e02847903a5ef32fc904b",
"main.dart.js_358.part.js": "bcb43bfe21a215cff864a3946a11e46d",
"main.dart.js_76.part.js": "9aa531cab5209907eefe648768f7dbfa",
"main.dart.js_90.part.js": "09bef76e57f70bac6d42d751594895f1",
"main.dart.js_52.part.js": "28be45dd3403e997be4df5490d320da9",
"main.dart.js_146.part.js": "ac8c193407e5cdbde060504c8cd8baa3",
"main.dart.js_282.part.js": "ef3d601c8860daea69ce3bd112deb076",
"main.dart.js_237.part.js": "cde713995be8ed9a716cd895eaff8fdb",
"main.dart.js_28.part.js": "467f50f133ada03de123513e691e2e1d",
"main.dart.js_288.part.js": "db486d3a5804c13c421a12de4ef49845",
"main.dart.js_241.part.js": "7bc0a6debb6cac5968d98476fe79b8a6",
"main.dart.js_206.part.js": "2b60b5936dac2c57a595234e27b76c46",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_200.part.js": "644526d906d6f4a370e88b34d8579279",
"main.dart.js_344.part.js": "3005dc716413a26e430a2e22f6472b28",
"main.dart.js_196.part.js": "2f90d964d8971970ac391d4363ca90d6",
"main.dart.js_77.part.js": "e1ec24c3e8ea654995a16cbe83308874",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_287.part.js": "a21c3b130e7337b4366371e93d45776d",
"main.dart.js_182.part.js": "ad9ebfa7d4bf38acf171a76322b82c3c",
"main.dart.js_41.part.js": "356e53e9e50a7ef3dc0493f2f054cde0",
"main.dart.js_335.part.js": "4183f669b4525e7a3f77af73cd48130e",
"main.dart.js_13.part.js": "1c8207da910b446c90c4ec2a2422feef",
"main.dart.js_43.part.js": "e9f4953d355e791ac761626dcef0279b",
"main.dart.js_189.part.js": "c0da42b5a9c9e28becb377fb2ce33edd",
"main.dart.js_198.part.js": "3c57ccbc287a6950dcc6465f0be176e6",
"main.dart.js_59.part.js": "1307d8d9bfd75fb65976969b7696b925",
"main.dart.js_8.part.js": "f4ec47dddd6965c1249384bfe0c4d6b4",
"main.dart.js_286.part.js": "09577fe3ab80e6ba1037ca3a7fbc3238",
"main.dart.js_100.part.js": "cb42f4cbe34f4809a69d4396e2686c2d",
"main.dart.js_224.part.js": "11ea90a1299993db2624227830ef3ddd",
"main.dart.js_22.part.js": "05d2f3a04a05e4608a011415862eca0e",
"main.dart.js_355.part.js": "dcb8395ef969cb0d580cca7448d85716",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_257.part.js": "7ff8568a01d6ec0d6385dabcbec90cfe",
"main.dart.js_227.part.js": "d47ef5075aadcdefefccb9e060958e14",
"main.dart.js_154.part.js": "df52ac73d8921e15e382e409c3f677d1",
"main.dart.js_186.part.js": "d68daed524ca8e20974ae174cbf3317a",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_102.part.js": "4f4667b7f5abd3de61e6bfa6af242ee4",
"main.dart.js_68.part.js": "d4565d5c302b32082f5c7572bfd1bc0e",
"main.dart.js_211.part.js": "44b57bc2c321038af91f68cd54892467",
"main.dart.js_364.part.js": "e7a336516f253fb6b21fac46a18b148c",
"main.dart.js_356.part.js": "6fd645e9ec9830bd4126159f133a4539",
"main.dart.js_180.part.js": "6865b05e2a659eaa277d64e57883401e",
"main.dart.js_181.part.js": "c9b376fc6052874015223a32de58d8ac",
"main.dart.js_118.part.js": "f7a050bf99b32a5f3487af68fec9cd4f",
"main.dart.js_372.part.js": "32b92ed387bf081e7d3639de585f550a",
"main.dart.js_85.part.js": "ca8be6ebea264b34587ca059010026dc",
"main.dart.js_11.part.js": "c3eefce0d2c923db69674cc67fa57ef8",
"main.dart.js_92.part.js": "b771d4b013512c870b2db76dee1dc595",
"main.dart.js_274.part.js": "8e8421f098fc272679ac001c104a1ca3",
"main.dart.js_326.part.js": "b31b62f9c850c81371f81615c98314ac",
"main.dart.js_7.part.js": "e2eaf3a77a5df1b1f4944fd231843548",
"main.dart.js_194.part.js": "8a62e143e592bb945fcb0717ae43757e",
"main.dart.js_87.part.js": "30f06005dd6e5c92e9df3556dcb8d69c",
"main.dart.js_37.part.js": "63d5a416a693cc2c6bd15efe8db5a485",
"main.dart.js_151.part.js": "22cb83277bbfa32a878cf4c2689ada5c",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_54.part.js": "9a5391177148a3620d0070ee51d164fc",
"main.dart.js_295.part.js": "befcaf53e1e58bc6d3915613d055a44f",
"main.dart.js_199.part.js": "6fb4747a147b288ed8d5b9be0683759c",
"main.dart.js_275.part.js": "d352caccc35c7203b436c6e496364658",
"main.dart.js_207.part.js": "d69198fb6ba047804be86504ae34d1a1",
"main.dart.js_119.part.js": "5d1c7dc3b712e94c7ab4b2ec46b5e243",
"main.dart.js_284.part.js": "30be99fc0691dacfc1fc5697cce42f4c",
"main.dart.js_369.part.js": "ac70ebe47ce50e8b51281e97aece147b",
"main.dart.js_191.part.js": "1f5240c584ea524dff65afcd337e0ec2",
"main.dart.js_359.part.js": "d0ba0e3787a0a48b7490cd14ba2dd78e",
"main.dart.js_141.part.js": "8a17640b5e0fc43647acb7c1c8f90d92",
"main.dart.js_373.part.js": "2342ccb2fcc27a404c140df9751265c0",
"main.dart.js_94.part.js": "91eb01d51f3379900e63e649d9f11850",
"main.dart.js_97.part.js": "fe70940f569c054e1a2e12221ac34e6f",
"main.dart.js_222.part.js": "e50a46d03bebf1c17f7849bfcdbfc48e",
"main.dart.js_35.part.js": "f1b267970bb2e9f058fec85365940817",
"main.dart.js_217.part.js": "28c136d38f2d7ceae666b2b4d2a1e797",
"main.dart.js_109.part.js": "68ccf865587d00df2c387e966303371f",
"main.dart.js_145.part.js": "b52abc004c13e3f5b5d55d6d1baecde2",
"main.dart.js_27.part.js": "9087a35ac3f7dcf9472d62c26f438b49",
"main.dart.js_322.part.js": "6cde4044d61398a6769c59a9c7112471",
"main.dart.js_330.part.js": "fbdab6f0064e32482958c922a319e416",
"main.dart.js_148.part.js": "46cae61425eefce87682855a710fd9f9",
"main.dart.js_162.part.js": "faff2ca3d64f09ddb7001ec2a4b6651f",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_309.part.js": "f8e8a4a492dfc9ab685e4048625ecccc",
"main.dart.js_242.part.js": "f3d3be4c58fa58187676d944b1e22ba3",
"main.dart.js_80.part.js": "f6840b60b9e96b82a2dc15f5994f31e5",
"main.dart.js_18.part.js": "d36506a52bb90dbda99539170e794e4b",
"main.dart.js_361.part.js": "878d35814da3dfdf0d5ac076531fa098",
"main.dart.js_26.part.js": "e5925e8d709f70b7c041b9bac01eb059",
"main.dart.js_353.part.js": "aae959453e8083890968a984b1b84174",
"main.dart.js_51.part.js": "4d07ffe823ebc6914b1349207078af63",
"main.dart.js_250.part.js": "cbc7de5d904b75b2be1954775d7297e4",
"main.dart.js_188.part.js": "3b2b2575715a08a8f6c6287c9449b611",
"main.dart.js_230.part.js": "21afc5d3f33edc176f84a3dda638fcdd",
"main.dart.js_160.part.js": "6ffe9c97bd1b4b8ca6e53c390a8ea194",
"main.dart.js_105.part.js": "7e2351188af17ad48ab418be5b2a87ae",
"main.dart.js_63.part.js": "a4c568b1de2b4bc74a82a5dca1585448",
"main.dart.js_235.part.js": "c58d585ec76421c2930ed8b3ec0308cd",
"main.dart.js_106.part.js": "3b019c31ef53cff616e813d34e8cfed5",
"main.dart.js_272.part.js": "b58674408dd565039e2e1d4a55f90caf",
"main.dart.js_134.part.js": "964fdb99b0902b4b7ed124d38237b41c",
"main.dart.js_161.part.js": "e223e373110fc03b206d3dc8553dcfaf",
"main.dart.js_38.part.js": "4f5ffd9701ede3b5bdd6c713bd5ef875",
"main.dart.js_360.part.js": "ccfd0f4c8d332a1bac48ed5c5426a797",
"main.dart.js_219.part.js": "393fbe71b838da8dfc32a28ac846358a",
"main.dart.js_314.part.js": "8643c47a50256885afcc46e05e75bba5",
"main.dart.js_362.part.js": "f4d480d811c5089b99a7286ce2faf852",
"main.dart.js_259.part.js": "3205870e111a2240e39840b6a2e91ade",
"main.dart.js_86.part.js": "f72af70302f413136b1d483d4f9b433f",
"main.dart.js_104.part.js": "577204e3fe574a6ded7a5e2448c8f667",
"main.dart.js_31.part.js": "17f3dca856deedf59da700da87ccd9aa",
"main.dart.js_125.part.js": "13208e7e0f0d4cfd7cbcb9c54e8212cc",
"main.dart.js_19.part.js": "91daa028b1093272fede087dde29e6fa",
"main.dart.js_267.part.js": "905b5ed093f4310d119bc4ef9ec8ede2",
"main.dart.js_297.part.js": "80764b5aa57cff82b2a0c4d32126d245",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_316.part.js": "b3d853b565664fe9ad1a00f99de4d10d",
"main.dart.js_171.part.js": "b4ecbffa2b7fdeb8ed0d9075dc582f10",
"main.dart.js_363.part.js": "f04974d5df29086f92754be290b79664",
"main.dart.js_33.part.js": "8de504a49a2fdccd0daa1930ac9246f5",
"main.dart.js_201.part.js": "07aaf4ba172f7afc61b4277c10a57dd3",
"main.dart.js_117.part.js": "17b547388848907e7d40bde44cd6b172",
"main.dart.js_1.part.js": "1915fa509b51f48a201079b87d3fb449",
"main.dart.js_261.part.js": "26685410ecddda9b4226a63c023476e1",
"main.dart.js_44.part.js": "190a853225812fb247f0f70a5053d098",
"main.dart.js_328.part.js": "87b3d8cc66445a1b5afe68a6f2d49585",
"flutter_bootstrap.js": "7f46fde0ff71a2f438e29f8c4bb1d9f9",
"main.dart.js_15.part.js": "f42f1a9fece23b49719cc8eeee924dd3",
"main.dart.js_226.part.js": "2362c0bdc636a211c0e845428729b481",
"main.dart.js_91.part.js": "452c9972d57238d93f614512a66f20ed",
"main.dart.js_167.part.js": "4756b66cf10d61be6cab400a3cb4aec0",
"main.dart.js_317.part.js": "f3f9d5f9f27294416f36d77da20b0287"};
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
