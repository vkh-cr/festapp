'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "f556b2236e5c6fe9e94bd6b846b42029",
"main.dart.js_117.part.js": "eeb80668ffe0a691a0c9553487261820",
"main.dart.js_182.part.js": "a45bfb9c69e0a003c89ccec5296b829b",
"main.dart.js_244.part.js": "93587ea0362a2ef41c5ac7eef78369ce",
"main.dart.js_83.part.js": "f28075777db44cc4663db2b30d96d215",
"main.dart.js_254.part.js": "1ab5e8a89762f9c7dba24571965f2f42",
"main.dart.js_176.part.js": "c8891ea5cf81748e995af42b35e71079",
"main.dart.js_96.part.js": "3a6fcb61363e194c41b77cf0e2fe8af7",
"main.dart.js_245.part.js": "2d00091e9ba2e19a6ef1176e185385d5",
"main.dart.js_87.part.js": "f8cb1e1a8f93223d84de9fb29bfd384b",
"main.dart.js_251.part.js": "a1f310c3fa221d8b37a075201ccfd0aa",
"main.dart.js_126.part.js": "e8e537804f7ec01e18c3b4f9ac0633f9",
"main.dart.js_129.part.js": "74c327e2995863312becec0aeb84343f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "e6c9ade7349062d9d863d5ebf3302518",
"main.dart.js_172.part.js": "9cb1b0a4bfa416c5bec6a96ce058b090",
"main.dart.js_40.part.js": "207fd78164e046f3eca258b93e1d8dd9",
"main.dart.js_209.part.js": "fdc5377a0ba496b1e588861f3cc12165",
"main.dart.js_115.part.js": "802b9ff6b0517e5196c3464dcd15ed64",
"main.dart.js_10.part.js": "d3d7d061839d198c52c2d1f1fa05aa99",
"main.dart.js_84.part.js": "eaa1ff3cecc8543c4206f2c9abb3e07b",
"main.dart.js_122.part.js": "cd153f7596c7e19cb2e1514d82cc6386",
"main.dart.js_230.part.js": "b94d2cace3cc1e51d57e4042c1f49bf9",
"main.dart.js_213.part.js": "c013a9515a334ae311c64010e9536b79",
"main.dart.js_89.part.js": "a65598a3e20f14870b5d12c8f1e0ccc5",
"main.dart.js_146.part.js": "a91a5e83f9288a8d96803e0441a31908",
"main.dart.js_37.part.js": "4cbc5671795822b88d4c2f16df500752",
"main.dart.js_132.part.js": "ab0239ac432de172d94b3115ca392cc0",
"main.dart.js_165.part.js": "3ad44850da4db93378b873201624e9a2",
"main.dart.js_127.part.js": "177327782558787566b99cbde8ecd52e",
"main.dart.js_161.part.js": "1b3834581888c98f38dc20e7a5947594",
"main.dart.js_175.part.js": "76ff25f7478f17fbef7ef14c8dba7a99",
"main.dart.js_239.part.js": "c65b9d4d6bdf040b31d9db341b83f01f",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "480bad0dd161b49f7805a798c99e8264",
"main.dart.js_64.part.js": "899c900cf5daaa48ffa1e49fa95f5160",
"main.dart.js_169.part.js": "938a110e90d376c869b88078d9db916d",
"main.dart.js_246.part.js": "1d9312acd476d470f75bcf91e280e588",
"main.dart.js_174.part.js": "79e58c10b026942903fc431b67bafbb1",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "ad279cf7326372151060dd1afa6abe83",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_119.part.js": "2a295558f81e31939974e52eea2f228b",
"main.dart.js_18.part.js": "cb76c1018a1ba14c28855121d0779f96",
"main.dart.js_200.part.js": "180cc7927200da3b9ab4af05d33d9be6",
"main.dart.js_73.part.js": "74c0c8a7d5c9271a53fd9f8ec91abdc1",
"main.dart.js_101.part.js": "80798ee3bb53e5933c3516e787d63b4e",
"main.dart.js_77.part.js": "12ae6e0a2ae93900c4804dfbcdd42d2f",
"main.dart.js_149.part.js": "b0eaa9bef36a983c75be3f2f6c688ced",
"main.dart.js_67.part.js": "629d43dce0de32469d29182e048a12df",
"main.dart.js_208.part.js": "254afc6a92d7646bbd67c92784d8f701",
"main.dart.js_82.part.js": "2d9e3b2fbaad6cef69319df932e974e8",
"main.dart.js_173.part.js": "89a1155e049971ea618c24c05b3f7026",
"main.dart.js_106.part.js": "714422aa7f433d1dda3309b7888ddc70",
"main.dart.js_62.part.js": "b6998494d52eeab88b670262dc6ed144",
"main.dart.js_207.part.js": "de281a74ee6d7b3fe05fb25eecf84416",
"main.dart.js": "081ce493a211a60b6f1ff08ba1c4e3c3",
"main.dart.js_222.part.js": "f7efa044cbcf958868684742bcf4c5f3",
"main.dart.js_232.part.js": "0bde0cbcb8076f7a220d54cf2c8bd4fb",
"main.dart.js_148.part.js": "8c71a45d187bcc4d74f104d70905e0c5",
"main.dart.js_124.part.js": "edacf38dcf1ac29978aa2baaa182bc00",
"main.dart.js_97.part.js": "dda8c2db1cf562f7d9c7760c11f5aadf",
"main.dart.js_192.part.js": "50e02ed27f3d59ec2908219991c7d6db",
"main.dart.js_91.part.js": "37d3d68d0cb3a6685d1686678d287705",
"main.dart.js_145.part.js": "329b4d28822822ead74721b976b40ee3",
"main.dart.js_229.part.js": "2a60bada3767017b2b57f1307f45db73",
"main.dart.js_57.part.js": "29e70d7d618f96e4adc9b8e0b68e74ff",
"main.dart.js_190.part.js": "99c812efc9ecbc73c9975478a4aefce4",
"main.dart.js_104.part.js": "d7545b122b7e3b7a03e22d4861033382",
"main.dart.js_201.part.js": "4c22322352b695ffe340656fb7ca797c",
"main.dart.js_181.part.js": "ae783e4932b0df9e3adff58a111bc284",
"main.dart.js_33.part.js": "e462f3cc2fe4b852c4bad979f727bce2",
"main.dart.js_217.part.js": "e1f82cd6320da0681812d1535eb60b77",
"main.dart.js_34.part.js": "7e7b88a8eb9d4e0aa1909617358535ec",
"main.dart.js_210.part.js": "813f8fb0610091966facae5f3089e8d2",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "ab043fad374e8a6f0af9c77ef3f6f001",
"main.dart.js_88.part.js": "c9b2eae360d71d5e8224bffcb8c82590",
"main.dart.js_202.part.js": "7f67eef794784fdea1133ea66e5a1614",
"main.dart.js_183.part.js": "eebf17dd3d85199b80c322bb1086dd48",
"main.dart.js_167.part.js": "8713d3682f157c537202f388eabd4cd9",
"main.dart.js_203.part.js": "96c060ab8563d459647baf3c34a4913d",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "7e999ac2b452c0aaed8027b91d4f1284",
"main.dart.js_7.part.js": "6bdb50923bfbfe4f6f085f602e44041d",
"main.dart.js_140.part.js": "6c81fb171e7b97ba53ccf65573a84154",
"main.dart.js_228.part.js": "432fbfcef83c93780886b84f51c15a1b",
"main.dart.js_170.part.js": "ce0dbdcf80dec57a6b03b116011b526b",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "d1b4f02f61d46b9a42e4ff17a80812c4",
"main.dart.js_27.part.js": "6ad816b44f88690beb446cdecffbc787",
"main.dart.js_156.part.js": "53bbdfb2a6c09297c2903a78f5805e2f",
"main.dart.js_219.part.js": "a3811ba974a183d4019548c40d856507",
"main.dart.js_116.part.js": "88374a7124c0c30e32bc5796b47e801f",
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
"main.dart.js_147.part.js": "ae9ab97b45ac16f8c49bf5fd20d3741c",
"main.dart.js_220.part.js": "568b01b135f19d8d13bd26051e97ac2c",
"main.dart.js_25.part.js": "15f557a501e3a72f5e374a0fac4fc255",
"main.dart.js_249.part.js": "4c95e81d8b308092986804e37e460649",
"main.dart.js_123.part.js": "a961da7087a6a621d9ef9ad3aab5f119",
"main.dart.js_8.part.js": "ac505804d486a47f348507537abfca46",
"main.dart.js_198.part.js": "11384e84f66e569b83ee0d212a98a281",
"main.dart.js_81.part.js": "2d2d6b89c0e1cd89035f41a71e988821",
"main.dart.js_113.part.js": "e52a745cf6172e5f44bd7de89f1d0bc9",
"main.dart.js_9.part.js": "1becb443c3a4958cbe6b2825ff6832b4",
"main.dart.js_242.part.js": "dfe9e9b0c97eb0ec3ab6789823a2fd3a",
"main.dart.js_86.part.js": "6467fc228d59e278bf7586ec11d28e72",
"main.dart.js_23.part.js": "49713e1c7db3432fb5070ade4de29ea8",
"index.html": "a6ac9485b47da97586f28952f4007577",
"/": "a6ac9485b47da97586f28952f4007577",
"main.dart.js_53.part.js": "cd73d0f5466fe3aa49ce3c48b1040731",
"main.dart.js_74.part.js": "f629252e96fb7f67546540a17bf2eb0e",
"main.dart.js_235.part.js": "e1b891dae03aed1908ecbbe39c09da56",
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
"main.dart.js_26.part.js": "2d17583ae5952570cb1cb4831a790bb4",
"main.dart.js_20.part.js": "234748d66ff744d82e0ba206efca6c82",
"main.dart.js_189.part.js": "861317466936497938345b336c41fbe3",
"main.dart.js_214.part.js": "089cdd720f35881d5963076443af284e",
"main.dart.js_51.part.js": "cec33f87af3601a45f9cd95f5b7eddac",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "912c50d49edad85e7bdf449ec5bdc90b",
"main.dart.js_1.part.js": "3d38ce5751487000607dc6d07d7fa06e",
"main.dart.js_120.part.js": "965a74f4bed24a4f5284e96105aae9a1",
"main.dart.js_63.part.js": "fbd6f914d0fa51bd5a8d2dfbb28ee42e",
"main.dart.js_211.part.js": "3c0aae43f12ce820a8eead9d7233a19d",
"main.dart.js_12.part.js": "717ad8c8f92cf89f471266ae1a93288a",
"main.dart.js_221.part.js": "9f0e81025d119c144a80850f13cd53cc",
"main.dart.js_137.part.js": "abcecc1da1500860e0485ccf0cc9dbd1",
"main.dart.js_28.part.js": "8dcf62214d45436656ea40bbda1e301c",
"main.dart.js_135.part.js": "c45488cf32c87cae4fdfb15f67304c6a",
"main.dart.js_6.part.js": "44233a8467672840e90b7cadc34e96ef",
"main.dart.js_256.part.js": "073677234ce837d7a1fd068253c0eaf2",
"main.dart.js_193.part.js": "d3ae9377aad08f26f9fb31e834c15588",
"main.dart.js_17.part.js": "6429685c199e486e9023728cd8b0294e",
"main.dart.js_105.part.js": "9d1e8f115a67ff793f7753473fcd8185",
"main.dart.js_231.part.js": "3911e35e6ac4951ef1182784dcdadcf0",
"main.dart.js_43.part.js": "f6f4c31c4578207ecdfe71212bc3379f",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "8e319903f353bfaa334994b72d85d1f3",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "3b97b6f4cdd0d8a65f967d55429c68c4",
"main.dart.js_15.part.js": "a4b43aa1d3c114681b7c4bd85015e50f",
"main.dart.js_19.part.js": "d2c0c3321e7587a37fea8850108aa3b6",
"main.dart.js_255.part.js": "20fef8c8dcb8e2a998beb39a07dc05b0",
"main.dart.js_186.part.js": "66bc6d5288e020460e1a71041a097b97",
"main.dart.js_163.part.js": "b20cba8b899d8dc528b4671b55a7ad41",
"main.dart.js_154.part.js": "ddcb4f6cbf77467828d69934d6932301",
"main.dart.js_42.part.js": "bf71d4cd81796a6db36fc4e4a0cae699",
"main.dart.js_16.part.js": "fd1a9a53ea3e568ee11dd6a2c229f056",
"main.dart.js_250.part.js": "d439c330527bbd39a2f56d4137bbb4ad",
"main.dart.js_52.part.js": "05faf8581f0c46dcd90a1e3b7f9e3a56",
"main.dart.js_36.part.js": "fd189be39f4c6a51face2b2f6b6d0d9e",
"main.dart.js_199.part.js": "fddc97fd34d9a1ccf7192d756f7ffbfc",
"main.dart.js_253.part.js": "6cf17976356b14ee27ce9494bec6a1d8",
"main.dart.js_130.part.js": "a9eb1a8b29f28787cef59cf0875380b3",
"main.dart.js_238.part.js": "55ccda26f9e648a2a6872b604f21ae85",
"main.dart.js_32.part.js": "dd4a5fcdf4869004eec021e4037a1b69",
"main.dart.js_197.part.js": "6435a1ffe5158596984dbac84336da5e",
"main.dart.js_3.part.js": "2555e8ac8467b902829c28969b01ca22",
"main.dart.js_68.part.js": "ee545b5093e6ea889f6a4d3f648c643f",
"main.dart.js_38.part.js": "50d2ceb88278ad54f4be1f47305d1727",
"main.dart.js_225.part.js": "1e705e4140186c3bd8308f81ad2133cc",
"main.dart.js_248.part.js": "e9a6acafdcb888791f5f9863ad62de1f",
"main.dart.js_133.part.js": "b58faab3aaf87d596cf0072f1e54c748",
"main.dart.js_21.part.js": "b264035c3c9e585f789f73cabf24062e",
"main.dart.js_24.part.js": "53c135a1fa480ba189edda7dd1ff9cef",
"main.dart.js_111.part.js": "12ab00e8c153e49fe9913ac6ecf0c214",
"main.dart.js_177.part.js": "2517d1b7e493c1c4a5d1609a9148dd87",
"main.dart.js_85.part.js": "353c68409c7aad8faa38ab4e68651b45",
"main.dart.js_243.part.js": "5922c4cf711226da7e808c887bb2e51c",
"main.dart.js_212.part.js": "476a95c21240e78640614146a6f8c682",
"main.dart.js_114.part.js": "89679e0243976f5db1709af3840fcfd1",
"main.dart.js_39.part.js": "153cddf9bd4b49b06e1ab83cdcf62c1e",
"main.dart.js_49.part.js": "12e263a7215702c3dd3035ad0c3dfcb4",
"main.dart.js_185.part.js": "d76efef8f2bcf68bdc53b16f382c93b8",
"main.dart.js_46.part.js": "c453f0f47459d9bfdb1168d0ba3abcfc",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "a3aa215706e3472997bc653a41a9e6e9",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "b1876ac09031e9d2859f3d1c6711401f",
"main.dart.js_134.part.js": "8e8b13743b10cb7f2a84ff4976bb0d88",
"main.dart.js_195.part.js": "c85143f4e78a5f9b91a0435b5f12cff8",
"main.dart.js_121.part.js": "18a764de035e25ba9543bb37f92d4909",
"main.dart.js_55.part.js": "45b5cb7c2e9177f4538940d7c20772e3",
"main.dart.js_215.part.js": "adf20d939ecc4d30cefd1d9c704d5d70",
"main.dart.js_112.part.js": "f7f34549ffd9e1f127da81be625195a9",
"main.dart.js_139.part.js": "48b8ef97d7ca7d8c129611e3d4816377",
"main.dart.js_143.part.js": "a64a8bf2b0c4857afc736ca492467a7d",
"main.dart.js_80.part.js": "f50cb4fa766e171cf29003d22a1e9be8",
"main.dart.js_233.part.js": "1a1901aa6a74a8a9b1a76074dcbc79c9",
"main.dart.js_30.part.js": "16362586c79d1dfeb371aae063038603",
"main.dart.js_78.part.js": "959a5f1f3effaf0ebcd5f9affce28715",
"main.dart.js_136.part.js": "a7106b46c0deb57458db7e20cbf43ef2",
"main.dart.js_168.part.js": "961f280682fcc6c9e921809ad5b90843",
"main.dart.js_95.part.js": "45f3c0d2cce79600b424f4f03631da0f",
"main.dart.js_107.part.js": "0caeb0b14dddb74ddcb2ef0947691191",
"main.dart.js_29.part.js": "53f1e5542fcac9d7f0c3274e8443cb4a",
"main.dart.js_61.part.js": "c0656ea410798ce6b6a9778368b9c7dc",
"main.dart.js_236.part.js": "1dbd1be8bfa731b7e65edadca85a3eea",
"main.dart.js_58.part.js": "e2a2d631745fa740bcd7e87d7dd9fda9",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "32066e056230f61afe9cbca97cc0bd24",
"main.dart.js_54.part.js": "4fbf9c88963cbdc6398382267a4182b1",
"main.dart.js_79.part.js": "75653d67066bd96dc512b253bcc7aa68",
"main.dart.js_92.part.js": "f59d127e0ff00461115ae1a86c7a5a08",
"main.dart.js_93.part.js": "10fd47f2800cd459af29bce7d8bd3a7d",
"main.dart.js_223.part.js": "d1041b707cac3d36551b8dca1ea558e3",
"main.dart.js_11.part.js": "e8785de970278b7e1ad57cbd95c2ffa5",
"main.dart.js_125.part.js": "94abc4ac8aefe75a9a69d75525b68d1b",
"main.dart.js_131.part.js": "3261d7b8e56e8493c22ae7ca037287cd",
"main.dart.js_226.part.js": "afba1996ce3b4baed0eeb1caa3945c91",
"main.dart.js_14.part.js": "0f95210604a134a958465d709a4b8ec8",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "70b6c06da79575c8498fbafb9dd96e0f",
"main.dart.js_100.part.js": "f1bb92c62444cddc25cfb77698827b78",
"main.dart.js_258.part.js": "8998a3b813efe70bd74cc3db956e527b",
"main.dart.js_70.part.js": "d489e0f28e7088baa143b29a9985281d",
"version.json": "8eccc37b0c2b359fa2cd6be183ebf681",
"flutter_bootstrap.js": "6268d12400a9602d59aec570f9d9e9bb",
"main.dart.js_191.part.js": "affae24b860deda1f08f29edbcd93a84"};
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
