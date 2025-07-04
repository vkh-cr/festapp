'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_34.part.js": "d74f9257aab65dccc942a152fc465d23",
"main.dart.js_228.part.js": "e024e07eb4056ce1a722f18bb34b3069",
"main.dart.js_30.part.js": "8ad66146f6414709c8cecbdc8e4067a8",
"main.dart.js_201.part.js": "b76a39a55dd409c3122ebfb4f9ff2727",
"main.dart.js_289.part.js": "9303bd76a3e942f39ecb21042a136aa1",
"main.dart.js_98.part.js": "6c8bb029249bde56dbc60e365fe8b9c7",
"main.dart.js_17.part.js": "a71f45227b7df268aaa5c647e08eb0d1",
"main.dart.js_302.part.js": "6f7555cb3f10cd7f707e2150869c790b",
"main.dart.js_74.part.js": "991455a8c35a3c1f580af445786e80c4",
"main.dart.js_50.part.js": "ae0113b1e5cd85ce5cd194447879330d",
"main.dart.js_51.part.js": "f892405d68eb4f8a28a00eebe5c350f5",
"main.dart.js_108.part.js": "9584f591f4cbdbfff2828fab5608f3e1",
"main.dart.js_44.part.js": "5e31be2697ad265244ecb90ded164453",
"main.dart.js_281.part.js": "8f743f4fc0774ec515f1c65389f83782",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"main.dart.js_47.part.js": "4ffb46186fa42685521a97daf16f0b9b",
"main.dart.js_45.part.js": "d42bfdd39240781dd778a220067bdee1",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_61.part.js": "51c2c019b635ecc38b46a5368129b667",
"main.dart.js_104.part.js": "903b8314378847b22df4c2057ddb0b47",
"main.dart.js_33.part.js": "01bf06696821a0cd211da5ed6187319d",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_143.part.js": "53b1dd92f729237163d06b0efb903e68",
"main.dart.js_164.part.js": "15244dda76925bce3166663f39896a45",
"main.dart.js_295.part.js": "fa15376e058d73ec7c706bfe447c65b3",
"main.dart.js_64.part.js": "467cd05903c352edf25eccad08c2fe96",
"main.dart.js_138.part.js": "c4f6791836804eec169e3e3974e1b582",
"main.dart.js_305.part.js": "05187a511c975117c22bb5783d40fd69",
"main.dart.js_168.part.js": "6281f3dfa15a178fcfcf1048cf77cf9d",
"main.dart.js_182.part.js": "5c84586d4bcb4fa69631d01e9afe0c6e",
"main.dart.js_132.part.js": "bcad0a9741027b8e5ef44ff968b83f8a",
"main.dart.js_82.part.js": "f6c9c30eed135659f9296dd01526fa0e",
"main.dart.js_144.part.js": "3ad86d149cb1a720166015d64e05cbf2",
"main.dart.js_243.part.js": "eefd8d159da3fd4f0938655a0b26e238",
"main.dart.js_175.part.js": "17cd252edb1f57a9d0db222a3b848087",
"main.dart.js_287.part.js": "1f3ac2763c10abeefaf61e9ad382449a",
"main.dart.js_162.part.js": "4ca97a3f5fbddec0d52fbb926005efb1",
"main.dart.js_194.part.js": "3566e533a25aebfada3edd2c3ddff195",
"main.dart.js_278.part.js": "c6a9bc98b1f1fed1307fea96aee27bb2",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_130.part.js": "7cc990936dc2caa1b86a8f9f09615e4b",
"main.dart.js_288.part.js": "a226aabbfcdd9f67408cf6d422aff677",
"main.dart.js_53.part.js": "7f5ac14c927d29e9c0c04336ffc730af",
"main.dart.js_231.part.js": "cc6c3d713da1c97dffb8b56cdbb29af3",
"main.dart.js_55.part.js": "eef21f5b3de3eb0d44de6b65acbb68de",
"main.dart.js_32.part.js": "c75df412f39c4b48ac561a6047963e9a",
"main.dart.js_163.part.js": "04096e31686d473080b92e959b5f9ae9",
"main.dart.js_49.part.js": "72ef4a24503a291ab48ae429605419ed",
"main.dart.js_214.part.js": "419878bbc23c84c4907ca9888a4e02d6",
"main.dart.js_129.part.js": "a2c6babc1ac562a62dbab8f16e93edff",
"main.dart.js_298.part.js": "f2b8179ebfc4cef0efa69ef0167fb2b4",
"main.dart.js_159.part.js": "22031d0001c1454a820d726586f193f7",
"main.dart.js_77.part.js": "64e7f04ab10b70ea526713cb8009bd03",
"main.dart.js_259.part.js": "7b8e94e20db3e798b342efd79998204f",
"main.dart.js_262.part.js": "8ee1bf849521dda7a38b6ad4d3a4b8d2",
"main.dart.js_31.part.js": "c0bb2468184091e927774f72585e0fc7",
"main.dart.js_209.part.js": "092a0931376c199b5ff421f711d179c1",
"main.dart.js_187.part.js": "01126db95b96b607e25907574dc18abd",
"main.dart.js_100.part.js": "2ae1792d4100998d15843584f00174bf",
"main.dart.js_252.part.js": "25113783ade63bd31ed86d313e3d98c8",
"main.dart.js_35.part.js": "7ef834f69ab0ddcbcc3be4277c2f1c3e",
"main.dart.js_177.part.js": "021e2c90ea72224262050a34e736a039",
"main.dart.js_7.part.js": "8d4fe687c59ccf6e7c3b11309e6df032",
"main.dart.js_184.part.js": "d647e67acb4d153901754b73b701991a",
"main.dart.js_227.part.js": "bb2a9c0ad588bdbd2a9934e5a8e3f969",
"main.dart.js_87.part.js": "db494be72d101cde164c4f814d0ee41d",
"main.dart.js_178.part.js": "ebc5a482ddc648bb99afdb9ca977941a",
"main.dart.js_70.part.js": "e4a05b37ea657373932742de40cdce92",
"main.dart.js_3.part.js": "eeaa3135301a1e6ffe0c984b78d6fd57",
"main.dart.js_20.part.js": "7bb899175f309c6fc1efcea2a867df49",
"main.dart.js_172.part.js": "245edc13ebf514fc906ec36df5c62f33",
"main.dart.js_226.part.js": "adf03220f54a5f974ba542dc96acfa6d",
"main.dart.js_126.part.js": "3888212f6e9a8ce8e5e7aa931a8e6345",
"main.dart.js_13.part.js": "d0e07ae696075979db07183b8dc80773",
"main.dart.js_38.part.js": "900256f9a32505f15b8815c2506f1295",
"main.dart.js_205.part.js": "a2fc7fd23211275918c21af70c77df05",
"main.dart.js_254.part.js": "553f3f797464081a066ef492d7140cee",
"main.dart.js_270.part.js": "563874981ef3939e66b25e4ac0077f99",
"main.dart.js_299.part.js": "aa73a6058c9dc0e9f9f72f36658fd956",
"main.dart.js_4.part.js": "f034ba87a092b7525c9e0630c546289e",
"main.dart.js_92.part.js": "dce06efebbc809a4a92a558545891fb5",
"main.dart.js_106.part.js": "cd6e3ba4f094a4adb59223f1cf56ac50",
"main.dart.js_16.part.js": "859fdaf639f8dbf0fa2ad4265ef386bc",
"main.dart.js_199.part.js": "fa23e920a7ab2411c5daad052110b6f6",
"main.dart.js_79.part.js": "e65136afed0d6bb1e4933e4cbce49610",
"main.dart.js_183.part.js": "b06f948e264b81f51b84f98e82ecacc1",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_248.part.js": "2b0b8c7ffaab73e3abd79c0e407155a7",
"main.dart.js_40.part.js": "dc6721ddbef424199abbe386d78dbe5c",
"main.dart.js_263.part.js": "d715ceee2ec6482ac6f6055d47463d98",
"main.dart.js_282.part.js": "a98b5d3320d500cf77403740b25b4a3b",
"main.dart.js_241.part.js": "536ca38afac93cc32f90dc3dbbf7301d",
"main.dart.js_56.part.js": "9742ca9e89ce5417f684e8e259fd37b4",
"main.dart.js_15.part.js": "70420faca9ca791fe5f5a9a0b944aec2",
"main.dart.js_107.part.js": "392fb86a475fa5e89089217446165923",
"main.dart.js_89.part.js": "6ae32f0f4bc82ff9dfaf65d53bad1799",
"main.dart.js_249.part.js": "2ba08835cada77c3d212ab4f42435925",
"main.dart.js": "7a06351233c69bd4d87f15ca41dede7c",
"main.dart.js_253.part.js": "b01ff0885a066eb7512e855182b054c0",
"main.dart.js_296.part.js": "304f8950bad30196453c8053d845a4c8",
"main.dart.js_258.part.js": "2b6410fdc840e31d42c50a273cd8d96c",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_225.part.js": "66ede41aaf351d0e2c728fc3ba526f50",
"main.dart.js_85.part.js": "708828793bd80d3883b7f465d972e65a",
"main.dart.js_271.part.js": "f775d2400aaef43ce0cd74c3d57c62dd",
"main.dart.js_10.part.js": "fb9840e7cd4659526849c2bbf9b31a4e",
"main.dart.js_124.part.js": "5f1c7aa694096d71ad66b992e273d8f1",
"main.dart.js_11.part.js": "1f3659738c576da44b81e3b46fa4bd03",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_73.part.js": "81c3924813fc0945b4205f0c615db170",
"main.dart.js_260.part.js": "7b2378517cef3918525fdb8aaf89752e",
"main.dart.js_95.part.js": "69d9ad0a416688092ef9df20f701c066",
"main.dart.js_198.part.js": "7e583c126f4a2287d732639383a7bbbc",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_101.part.js": "f0437698f08b3a9da8f746193d4de77d",
"main.dart.js_96.part.js": "b504938c78b1842dc248132bbca71919",
"main.dart.js_131.part.js": "1dafa53e5afb36a968d070821fe78a90",
"main.dart.js_118.part.js": "8220087901324452a5e5521b286f365f",
"main.dart.js_94.part.js": "7702f9f3eb5bdf9dbf570fb69545ef1f",
"main.dart.js_140.part.js": "68a1dec6e4f43e2b9d2d984b8df9cc7f",
"main.dart.js_105.part.js": "cb25d431f1d4e776bd44d23d53a27650",
"main.dart.js_1.part.js": "c0df3db2c131ea874a196e81b42ff3b4",
"main.dart.js_133.part.js": "faa3e5e6ba910870a4583a8dd99dda48",
"main.dart.js_195.part.js": "3ad4822e9093bcbf3d5a28cd525407ab",
"main.dart.js_83.part.js": "da0a645d1416107157a4565de2c3d8c0",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_196.part.js": "547a308e0170b3ad677c85082bb4e2e9",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_110.part.js": "137239e9da0bbc0b8618003f4752351b",
"main.dart.js_276.part.js": "26d34b1c5f7ee9f9ea464eecc5cd3801",
"main.dart.js_264.part.js": "769cce620e387ca4d2c05ca0ff6a7e4e",
"main.dart.js_213.part.js": "2ac8af2524f02209fac91fed7e1f6a88",
"main.dart.js_238.part.js": "80fb5b9033a454ce8ef56ce1776c36c7",
"main.dart.js_78.part.js": "f7d5a45309864ce39c9d01f2a629ca28",
"main.dart.js_109.part.js": "625c44e2f161607ed257ca2849d51c03",
"main.dart.js_265.part.js": "643c1bb39b9fb41094eb4295fe8993ac",
"main.dart.js_41.part.js": "18a53275a3a238a81080b52e8e0b0239",
"main.dart.js_122.part.js": "543a3cb42734d2c4cbf343a1bab5e76a",
"main.dart.js_12.part.js": "e75bfdcaa336f69efe69e25e1aef41ed",
"main.dart.js_303.part.js": "b674608c19b4d34c77b6ce05005aaf95",
"main.dart.js_76.part.js": "52be6402cc64ae5dcc66f51769c9f359",
"main.dart.js_222.part.js": "186e2c108a626f45e4f01cff52ae2737",
"main.dart.js_239.part.js": "bdbc1864bc02e496487a785f77238525",
"main.dart.js_158.part.js": "662799f4aac1a70cd5d2df7da8d857f7",
"main.dart.js_72.part.js": "a0ed4bae1b5d9d0790410c16f5b692d0",
"main.dart.js_68.part.js": "776f25a36204787ed8a2fa2de4b66adf",
"main.dart.js_291.part.js": "760b648a74cb573ecaef7908f4e80741",
"main.dart.js_220.part.js": "2b5de512696e6a7e9fec05ac46992443",
"main.dart.js_62.part.js": "f5365bbd208d4ffcbf6745e55d4d97c0",
"main.dart.js_180.part.js": "efc07083001c2dfe8cb6944d36053d91",
"main.dart.js_240.part.js": "d186d04420609d77f4a8f20fef7bbdde",
"index.html": "bbde26569d18590851503db8150eba4e",
"/": "bbde26569d18590851503db8150eba4e",
"main.dart.js_266.part.js": "f3c6f00b50b6d7d55d7d69b32cb0b843",
"main.dart.js_297.part.js": "d98f283a242197386e41b14898d1bcdb",
"main.dart.js_134.part.js": "26750fefe36603638dad523982edc9ab",
"main.dart.js_181.part.js": "e1b20dbef48cf5693ff31e0fb7e5ac14",
"main.dart.js_147.part.js": "d698663c14537371ffb84c497b2ed77f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"assets/NOTICES": "3c24853244fa9ceb9b71258d8c2c76d7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/cs.json": "5112a077a243d52048de80dc1621aca5",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "6d351ec6f90966c33247002ea80b32f4",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/fonts/MaterialIcons-Regular.otf": "0428b0b1ec0e6c1c8bfd31e6474896ea",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"main.dart.js_43.part.js": "6ee25bd2179ea7ef5f425a0274e0f5d7",
"main.dart.js_145.part.js": "16f94333678fbda62c2cb74e73a71538",
"main.dart.js_169.part.js": "6a2096d57babb45c22506bad4886e1a1",
"main.dart.js_29.part.js": "5851167fff0bf824f69b3d8cff2596a2",
"main.dart.js_267.part.js": "ef2d223fafa94fd53d5fe0bc38c59c9c",
"main.dart.js_170.part.js": "167e3c715377a64769f1e11463195f1e",
"main.dart.js_280.part.js": "1fcd10a2adff999184584432b08a0d32",
"main.dart.js_97.part.js": "fc04c19124c1d52f9a52a91af289a5f2",
"main.dart.js_269.part.js": "a73a1ed2aa891a2d543d3e15967431b2",
"main.dart.js_111.part.js": "dd1069eb0b5200ec6d2a0ec17c5e2bb9",
"main.dart.js_204.part.js": "e13c7a55b43f3981955b1dec59fda7f9",
"main.dart.js_117.part.js": "3ae847740f3ffd81f737f3b46bfacff5",
"main.dart.js_189.part.js": "9536c99deb47ff95195ce0e55671a1d5",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_283.part.js": "7ca1080f24128ce7c531eec12dd65fce",
"main.dart.js_188.part.js": "db39ef4a483b54f74ef4c689e9455a98",
"main.dart.js_48.part.js": "341a966533ee81e6b3496969909d96cf",
"main.dart.js_161.part.js": "070ce036deb90316cf80e74ded96800c",
"main.dart.js_153.part.js": "6e1ac026b983c575eacc7107c2e247db",
"main.dart.js_28.part.js": "6543c3c11687490f856da1d2b19801c1",
"main.dart.js_71.part.js": "f280172ba6410461c0e4f8fed3e63cd7",
"main.dart.js_234.part.js": "b9d0be51c8c2a81d8aea79818c4348ac",
"main.dart.js_42.part.js": "417a1b8857d8dc2223da5eb424dafd6a",
"main.dart.js_166.part.js": "5c346ea45eee740f1d49ae4b52e0acd3",
"main.dart.js_191.part.js": "451141fac2ddd3af77ca9db74a2f6546",
"main.dart.js_58.part.js": "6c6f72110db3f1a12d74c06bc5d6aa73",
"main.dart.js_285.part.js": "f8f2ffc35c3d54c3abec6a47a4a28e40",
"main.dart.js_59.part.js": "5bf45d2a01030c374561aeee51b4c35e",
"main.dart.js_277.part.js": "b5950571c4a4214a4a3e8e91bda8615a",
"main.dart.js_284.part.js": "5f5d83dfd03f120aa889393fb80db5a0",
"main.dart.js_142.part.js": "2ff1aaf0d484dbbbb7d36baaf6c4d5af",
"main.dart.js_5.part.js": "4aed1c669e8f6f2f7c759c06b5c4b148",
"main.dart.js_173.part.js": "c0f50e1aa52c1aa763c75867df9da9ec",
"main.dart.js_128.part.js": "31f6624a28667037c826e56e33e38084",
"main.dart.js_244.part.js": "b2c85aa748c184a71f1c1482eac53ca5",
"main.dart.js_293.part.js": "ba28c3e51e03c8e3848adcf2d0103829",
"main.dart.js_300.part.js": "6c4cf02597e5f6df505a7cc697d38503",
"main.dart.js_233.part.js": "0aaeae040a05c7b117676e454dbd5155",
"main.dart.js_236.part.js": "73171c367681a94d25c3ba0bc50fadbb",
"main.dart.js_274.part.js": "54b78b2d257840c7f0bcde54a4de2200",
"main.dart.js_6.part.js": "9e177f72a3cac122e3536f6b1b2f88f7",
"main.dart.js_37.part.js": "04df28a197a0b94818f58bf008812d4f",
"main.dart.js_84.part.js": "677cd8916e3d85b8ed91f3a4cbfe5096",
"main.dart.js_115.part.js": "8af29f9a7afc450b629cbf04dd076bad",
"main.dart.js_151.part.js": "4a8b071957d6e7bf037ef2e88b80eac4",
"main.dart.js_208.part.js": "074c381880f54b25a6f50c8c70ac96e8",
"main.dart.js_120.part.js": "8f41b5102b18375decbfd971d91e441b",
"main.dart.js_152.part.js": "60b9cb023ead060aa598e910dfe277cd",
"main.dart.js_86.part.js": "da30137e99a738ea9bc6c82fe7a67c81",
"main.dart.js_255.part.js": "c75b4f3993cbe25ac70816a8dd27884a",
"main.dart.js_150.part.js": "bdb76824c38f0aa6a070c5912297b186",
"main.dart.js_165.part.js": "c360a137ba1c1efcf8b565fb161bb051",
"main.dart.js_171.part.js": "0c318b64aa18bf56877746fcbada2401",
"flutter_bootstrap.js": "0841d3e42bd182a646ceb4150ad8842d",
"main.dart.js_146.part.js": "8d83702a619673fe83e1107441f161e1",
"main.dart.js_210.part.js": "d5c16ea196b2d07f3a84d55479330653",
"main.dart.js_81.part.js": "d4a0b958f8d586f361561018ca940867",
"main.dart.js_156.part.js": "b749cf1cd6dee8e4a5f146a33668695c",
"main.dart.js_207.part.js": "6ac1d688bceea1e11c2386e4a89ea2f0",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_27.part.js": "35077a407fc7843e4b4ebd1e76664cd8",
"main.dart.js_154.part.js": "c0081c750bd0c2ea985e6285b8af2b90",
"main.dart.js_112.part.js": "fcb5819ea00d4b86bb1b3b883c740616",
"main.dart.js_212.part.js": "e7949953fa6911bacf6fc41c13bcd528",
"main.dart.js_221.part.js": "f6753b7af2e7b61a80dc0f9353c21411",
"main.dart.js_26.part.js": "0521b572b8528ca196ee19697ab1e4ad",
"main.dart.js_123.part.js": "d65280359d1cdec53fd7bd254b75dfae",
"main.dart.js_137.part.js": "1685b8fca87fd70060320c90810941a7",
"main.dart.js_36.part.js": "ddaeccec17f4a9e7549175bb21dc2dbf",
"main.dart.js_224.part.js": "bfbd07b9be6bde201f5effffffa187ad",
"main.dart.js_301.part.js": "45c0add790a100e7464e521f3bfbb94e",
"main.dart.js_24.part.js": "2cea39f25a9739d762ae5f66a3c73a6a",
"main.dart.js_272.part.js": "91447e5217e7185c2a79a8dbf7113970",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_57.part.js": "91b7bdb8490f1a1624feee52cf0bf10e",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_18.part.js": "9feff9f08e136064e26bfb34295b1642",
"main.dart.js_292.part.js": "1eb8d791330716586a4838255af5627a",
"version.json": "2dddf8f7bc798e53d8e8f8db1dc8b5b4",
"main.dart.js_8.part.js": "c4918e85c0316e149315a0ac7bd7d603",
"main.dart.js_247.part.js": "d95506749e0ed368f841f9b9eda9abc2",
"main.dart.js_9.part.js": "14b7bf87f2658d2ba03d7c2e411e4ca2",
"main.dart.js_69.part.js": "1a4861fb1689e0c7c0ee67de2506ce7d",
"main.dart.js_304.part.js": "a9e48967d6e5500ce2b504058988f6d8",
"main.dart.js_139.part.js": "03a2159c2a753192d3cc1afaa81583ca",
"main.dart.js_176.part.js": "0eaec225a5e1e99e1846352e0cc0e220",
"main.dart.js_275.part.js": "3eed61f9cc7159616f07012f1d7de105",
"main.dart.js_256.part.js": "48f6e30b70a5e98482afd2ccbdaf2ecd",
"main.dart.js_237.part.js": "29eff4aa5bd7eb518349524ea56ceb01",
"main.dart.js_257.part.js": "63124db49418f982a1ddde9679b8bbf7",
"main.dart.js_93.part.js": "6f8bf486b80c5745368e2594c6f0db12",
"main.dart.js_203.part.js": "e4b8cab6f798e184174543067f3f197d",
"main.dart.js_179.part.js": "52439b3cdf36a9efc2ba696d4e4d003d",
"main.dart.js_14.part.js": "3e3d5f25f224d821b9701679c891b6e9",
"main.dart.js_206.part.js": "03d402e77815c05a0db81a927061b7b6",
"main.dart.js_113.part.js": "9c018fc3475eac3e6bd8aa9e6009b476",
"main.dart.js_235.part.js": "f158102fc79a62ee2eed4f6012bae070",
"main.dart.js_39.part.js": "61240d2dbfa547142ecb0a3fdb4fa8de",
"main.dart.js_306.part.js": "2a553962648fd0f23107c25d4ab8546d",
"main.dart.js_250.part.js": "62d4a1d3151c1334bdedb30a5332ef6a",
"main.dart.js_290.part.js": "be9823c7f453e8b6cce118c5765282c3"};
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
