'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_34.part.js": "d74f9257aab65dccc942a152fc465d23",
"main.dart.js_228.part.js": "a17f2c38b6a58001f1d15871406d1e18",
"main.dart.js_30.part.js": "8ad66146f6414709c8cecbdc8e4067a8",
"main.dart.js_201.part.js": "bba9e138f55d764cc783588c05e2f2f6",
"main.dart.js_289.part.js": "0cf864bcceff2c20a8640511224dd480",
"main.dart.js_98.part.js": "6c8bb029249bde56dbc60e365fe8b9c7",
"main.dart.js_17.part.js": "461a6d4bf3f3874a026ee052d5559bb8",
"main.dart.js_302.part.js": "6f7555cb3f10cd7f707e2150869c790b",
"main.dart.js_74.part.js": "46fe01aa87f6b17562bedcbc2a39b4a7",
"main.dart.js_50.part.js": "ae0113b1e5cd85ce5cd194447879330d",
"main.dart.js_51.part.js": "9454c279c50a0c617ce07dc484c1eb83",
"main.dart.js_108.part.js": "9584f591f4cbdbfff2828fab5608f3e1",
"main.dart.js_44.part.js": "87969556d86962efae6d9d593778d504",
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
"main.dart.js_47.part.js": "c4afc0d1c52c25a41cbbfac583a1b4e1",
"main.dart.js_45.part.js": "d42bfdd39240781dd778a220067bdee1",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_61.part.js": "51c2c019b635ecc38b46a5368129b667",
"main.dart.js_104.part.js": "903b8314378847b22df4c2057ddb0b47",
"main.dart.js_33.part.js": "01bf06696821a0cd211da5ed6187319d",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_143.part.js": "a801c96f8a099a4127a1e60d678b376e",
"main.dart.js_164.part.js": "15244dda76925bce3166663f39896a45",
"main.dart.js_295.part.js": "af23a766421fa43084e70fa7b6f1d623",
"main.dart.js_64.part.js": "467cd05903c352edf25eccad08c2fe96",
"main.dart.js_138.part.js": "7c8c5b43247e26dbdaa7a12180fd0a65",
"main.dart.js_305.part.js": "187aaf3804b672ad45f79de9243427b2",
"main.dart.js_168.part.js": "d2b0b41b044cc3b1c0133f25059fea11",
"main.dart.js_182.part.js": "5c84586d4bcb4fa69631d01e9afe0c6e",
"main.dart.js_132.part.js": "bcad0a9741027b8e5ef44ff968b83f8a",
"main.dart.js_82.part.js": "f6c9c30eed135659f9296dd01526fa0e",
"main.dart.js_144.part.js": "c218cacb9c15c093c66576829c052cca",
"main.dart.js_243.part.js": "395fe3258be505971554be0599534768",
"main.dart.js_175.part.js": "9fd0c9703271b2d95efa597889ff3613",
"main.dart.js_287.part.js": "78d183fa9abc4fbb80fd1f49e015a8b7",
"main.dart.js_162.part.js": "63ff0b849a0ce763f529e74ca6223ed4",
"main.dart.js_194.part.js": "ab3b5bde206a21fd1d9bf034c8f69574",
"main.dart.js_278.part.js": "d59eb9f6cc7623276f53254fcef86434",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_130.part.js": "7cc990936dc2caa1b86a8f9f09615e4b",
"main.dart.js_288.part.js": "7ed98ff0cdb7153e4d29f1d0487272c0",
"main.dart.js_53.part.js": "999b005a1d8901f9b5936dd3b68ceff4",
"main.dart.js_231.part.js": "cc6c3d713da1c97dffb8b56cdbb29af3",
"main.dart.js_55.part.js": "9a625056dbb37fbd4d4d4de315ad3d8e",
"main.dart.js_32.part.js": "c75df412f39c4b48ac561a6047963e9a",
"main.dart.js_163.part.js": "809b5494bdf049477d00d673cbb6880d",
"main.dart.js_49.part.js": "7c2c0d83c9254e081849b677ceba9fdd",
"main.dart.js_214.part.js": "fdad393119725dfc5641383c5b95edaa",
"main.dart.js_129.part.js": "d7323d37e744c78c5b0f1e7416b379ca",
"main.dart.js_298.part.js": "f2b8179ebfc4cef0efa69ef0167fb2b4",
"main.dart.js_159.part.js": "22031d0001c1454a820d726586f193f7",
"main.dart.js_77.part.js": "2877ec7c976c1acb3aec32e4b0f82278",
"main.dart.js_259.part.js": "73771c95ce7c0efc7e13b51eb6dc8d92",
"main.dart.js_262.part.js": "8ee1bf849521dda7a38b6ad4d3a4b8d2",
"main.dart.js_31.part.js": "c0bb2468184091e927774f72585e0fc7",
"main.dart.js_209.part.js": "092a0931376c199b5ff421f711d179c1",
"main.dart.js_187.part.js": "aff6908ebfc338f49233ff71dbbb6857",
"main.dart.js_100.part.js": "436ff68430c4f3c52959827ee9c002ae",
"main.dart.js_252.part.js": "eb610baacbd247a515d35a9c9fc076f9",
"main.dart.js_35.part.js": "4370b2ad13aa591fdcb8b5fb92c20420",
"main.dart.js_177.part.js": "d46037a4a7f6ac2fb4c2c68510b7edc0",
"main.dart.js_7.part.js": "3d3870cde0cb9e278098d2c5d6e071ee",
"main.dart.js_184.part.js": "8b50fa41edec92d91ca9bcf09a65caaf",
"main.dart.js_227.part.js": "84c0df961523a0e1866625ad8d0cf574",
"main.dart.js_87.part.js": "db494be72d101cde164c4f814d0ee41d",
"main.dart.js_178.part.js": "ebc5a482ddc648bb99afdb9ca977941a",
"main.dart.js_70.part.js": "6afa13bd3e56d52dfda71844c3a3c1de",
"main.dart.js_3.part.js": "f10bc2fb4c58dad5b0f6c51dd822f02b",
"main.dart.js_20.part.js": "c66a2a494afd8c9903d03a995b423d66",
"main.dart.js_172.part.js": "245edc13ebf514fc906ec36df5c62f33",
"main.dart.js_226.part.js": "66c555d6023a8fda3ec4afa84e604de3",
"main.dart.js_126.part.js": "3888212f6e9a8ce8e5e7aa931a8e6345",
"main.dart.js_13.part.js": "fb8e720d20f3b725dde3e120bc80331d",
"main.dart.js_38.part.js": "900256f9a32505f15b8815c2506f1295",
"main.dart.js_205.part.js": "3c9ece803e14c5948f4ea62f1340b3da",
"main.dart.js_254.part.js": "38596035eaab8d7328448909c873c915",
"main.dart.js_270.part.js": "563874981ef3939e66b25e4ac0077f99",
"main.dart.js_299.part.js": "92bb35ff204db045068a70e77d07d566",
"main.dart.js_4.part.js": "46f323882ea1b3073db4a8284b0ebfda",
"main.dart.js_92.part.js": "ff02879fb7318b1f9c0f9d7b2435b4bd",
"main.dart.js_106.part.js": "cd6e3ba4f094a4adb59223f1cf56ac50",
"main.dart.js_16.part.js": "f63b828a40bdc3504b1dc3de0aa48907",
"main.dart.js_199.part.js": "fa23e920a7ab2411c5daad052110b6f6",
"main.dart.js_79.part.js": "dd28316ad2b68d824463cf18492c9e34",
"main.dart.js_183.part.js": "b06f948e264b81f51b84f98e82ecacc1",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_248.part.js": "6937e2092964a9ec00ed788b79548d57",
"main.dart.js_40.part.js": "984ed332d5a66346e3f0df08f5a6d2dc",
"main.dart.js_263.part.js": "0a4db0078a1ac14c8c62d5e344260d06",
"main.dart.js_282.part.js": "6827003b92769fb4825635d816600b12",
"main.dart.js_241.part.js": "536ca38afac93cc32f90dc3dbbf7301d",
"main.dart.js_56.part.js": "9742ca9e89ce5417f684e8e259fd37b4",
"main.dart.js_15.part.js": "96d147a4af92fd2452540aecda72422b",
"main.dart.js_107.part.js": "392fb86a475fa5e89089217446165923",
"main.dart.js_89.part.js": "7e2ece3521d55a0b1258bc494367efa1",
"main.dart.js_249.part.js": "c03ac6ae488d055e57d2e6f82025cf4b",
"main.dart.js": "cb0f0330a6402505605f8c83760a4248",
"main.dart.js_253.part.js": "7eb75c357fff05c3b334d6bc5c604fba",
"main.dart.js_296.part.js": "d39c39776e16d1cab3ac84b71fe85d9c",
"main.dart.js_258.part.js": "67d16a28d1f45e0608b1bdf15ad3ab49",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_225.part.js": "8020676a98460e2eb70ee1f438da1f51",
"main.dart.js_85.part.js": "708828793bd80d3883b7f465d972e65a",
"main.dart.js_271.part.js": "9105c6b4515e62786c2eb158add61519",
"main.dart.js_10.part.js": "dbdbdbda6e872f0f7715f1f52f81b0ad",
"main.dart.js_124.part.js": "04587b71ac82525ded62fde18502908f",
"main.dart.js_11.part.js": "60f968890acb80a95b6ddc7039af00e9",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_73.part.js": "2a3e87b90334e405d656514220cc4a6b",
"main.dart.js_260.part.js": "5bd0d719605d616b6c850f0a2f6ed73e",
"main.dart.js_95.part.js": "3bf5839388bd0e6d3bc4976ddf42ff21",
"main.dart.js_198.part.js": "54b222fd4f9f1ea96f87909b1abea6d3",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_101.part.js": "ba7b78bccc45e4087ce5df283d4164c0",
"main.dart.js_96.part.js": "b504938c78b1842dc248132bbca71919",
"main.dart.js_131.part.js": "1dafa53e5afb36a968d070821fe78a90",
"main.dart.js_118.part.js": "6bbf13f04e36661f05fd434a8ab788b4",
"main.dart.js_94.part.js": "3bcc643519fa4d7acfa357efa7991576",
"main.dart.js_140.part.js": "68a1dec6e4f43e2b9d2d984b8df9cc7f",
"main.dart.js_105.part.js": "cb25d431f1d4e776bd44d23d53a27650",
"main.dart.js_1.part.js": "b84e3bfc81cb31cde2e925526b1f757a",
"main.dart.js_133.part.js": "fc01f0aafdc1f4dd4284146796ab662a",
"main.dart.js_195.part.js": "a55b43aaece00a7d443305aaf9913ec8",
"main.dart.js_83.part.js": "ddc38d655e485b083c03b71f9169e04a",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_196.part.js": "547a308e0170b3ad677c85082bb4e2e9",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_110.part.js": "137239e9da0bbc0b8618003f4752351b",
"main.dart.js_276.part.js": "f455adef9560b94137b67a5892b4a663",
"main.dart.js_264.part.js": "769cce620e387ca4d2c05ca0ff6a7e4e",
"main.dart.js_213.part.js": "41eb0250d727a67538a6113a15a6ba10",
"main.dart.js_238.part.js": "80fb5b9033a454ce8ef56ce1776c36c7",
"main.dart.js_78.part.js": "0bfa5fa1a43aaf6875a23e41776713b3",
"main.dart.js_109.part.js": "625c44e2f161607ed257ca2849d51c03",
"main.dart.js_265.part.js": "643c1bb39b9fb41094eb4295fe8993ac",
"main.dart.js_41.part.js": "00b939f36314f5e743abb8befa646528",
"main.dart.js_122.part.js": "34096b2765438df79320a5bdfd2df6f8",
"main.dart.js_12.part.js": "89a8ba891a03af348c7b3169ddc560a5",
"main.dart.js_303.part.js": "b62d0291ede21aa2c6f9ab9b1c8c5e26",
"main.dart.js_76.part.js": "157b965dd1b557086784adeef0fe97c4",
"main.dart.js_222.part.js": "186e2c108a626f45e4f01cff52ae2737",
"main.dart.js_239.part.js": "bdbc1864bc02e496487a785f77238525",
"main.dart.js_158.part.js": "7e9a31f9c9168d18d971e31f22576092",
"main.dart.js_72.part.js": "a0ed4bae1b5d9d0790410c16f5b692d0",
"main.dart.js_68.part.js": "9ced4c183bc8a5f848d82e31ce4d34b7",
"main.dart.js_291.part.js": "76b187b402007461071d8e13bda61d82",
"main.dart.js_220.part.js": "2b5de512696e6a7e9fec05ac46992443",
"main.dart.js_62.part.js": "f5365bbd208d4ffcbf6745e55d4d97c0",
"main.dart.js_180.part.js": "a89fe6401abb7be425d333d05645d130",
"main.dart.js_240.part.js": "d186d04420609d77f4a8f20fef7bbdde",
"index.html": "bbde26569d18590851503db8150eba4e",
"/": "bbde26569d18590851503db8150eba4e",
"main.dart.js_266.part.js": "7d849235a793081f7fc04dd490dc8246",
"main.dart.js_297.part.js": "8f806a5c0c6fc1ae42b105b97a9f5a5a",
"main.dart.js_134.part.js": "962e3e9f27ca2d25bcd761bf58d744a1",
"main.dart.js_181.part.js": "14c5908ccfb6301107a9a301f7c0dab5",
"main.dart.js_147.part.js": "20a3729241330749d80ebe78bce1c12a",
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
"main.dart.js_43.part.js": "388ff9cb14b7b3408708bcae3eeeffe7",
"main.dart.js_145.part.js": "7f1d730ce3d88ce302c53aabe171bfbf",
"main.dart.js_169.part.js": "6a2096d57babb45c22506bad4886e1a1",
"main.dart.js_29.part.js": "5851167fff0bf824f69b3d8cff2596a2",
"main.dart.js_267.part.js": "ef2d223fafa94fd53d5fe0bc38c59c9c",
"main.dart.js_170.part.js": "167e3c715377a64769f1e11463195f1e",
"main.dart.js_280.part.js": "54fc8e7a0322b8c12f5cc69ed2d8b597",
"main.dart.js_97.part.js": "fc04c19124c1d52f9a52a91af289a5f2",
"main.dart.js_269.part.js": "a73a1ed2aa891a2d543d3e15967431b2",
"main.dart.js_111.part.js": "dd1069eb0b5200ec6d2a0ec17c5e2bb9",
"main.dart.js_204.part.js": "32552083392d93d0a7ce8c861cd0260d",
"main.dart.js_117.part.js": "3ae847740f3ffd81f737f3b46bfacff5",
"main.dart.js_189.part.js": "e77a0ac7647234ec3a8b89cb36ac3663",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_283.part.js": "6a2f34e8211d502386d55ea051c570ec",
"main.dart.js_188.part.js": "f845b1780b129abcccdfeb064a2d03ed",
"main.dart.js_48.part.js": "be13f382209bfdc7294f79ad40363a15",
"main.dart.js_161.part.js": "90d728e1ec936f4a35248c6ab86c6248",
"main.dart.js_153.part.js": "226db16c60d5d20a99d5d1a7cab19750",
"main.dart.js_28.part.js": "6543c3c11687490f856da1d2b19801c1",
"main.dart.js_71.part.js": "9905da3432f19a99d2614889eb60ca43",
"main.dart.js_234.part.js": "b9d0be51c8c2a81d8aea79818c4348ac",
"main.dart.js_42.part.js": "a9bd6e106c1c1f046e3005d82e2dbb6e",
"main.dart.js_166.part.js": "5c346ea45eee740f1d49ae4b52e0acd3",
"main.dart.js_191.part.js": "0225658ae6b312ce98ef6b60ac5df44f",
"main.dart.js_58.part.js": "a8067370d3e9924cf0e21010874772e5",
"main.dart.js_285.part.js": "aa71c7c0a4f7f01c84bc4ae818b5a211",
"main.dart.js_59.part.js": "376abea75f2f817e6e98c248c53fe615",
"main.dart.js_277.part.js": "fef050d3bcd521cb14d04dc73d446681",
"main.dart.js_284.part.js": "aa5bbfc0cda61fbd2355dd10826c0d0d",
"main.dart.js_142.part.js": "40e1599c929a024e07ac11a0b141f17d",
"main.dart.js_5.part.js": "974f0f0a79255609d31f5d4f96e59478",
"main.dart.js_173.part.js": "c0f50e1aa52c1aa763c75867df9da9ec",
"main.dart.js_128.part.js": "35a455e23dd4043c8e67c3457ddb2610",
"main.dart.js_244.part.js": "fe6d05c2ca9721392e2e69656591a8bd",
"main.dart.js_293.part.js": "ba28c3e51e03c8e3848adcf2d0103829",
"main.dart.js_300.part.js": "e8f48b62e789899fa491117d8dd94824",
"main.dart.js_233.part.js": "c050289a5171f1fccd53218e1dc92025",
"main.dart.js_236.part.js": "2e071ba8c4b5fa56eaf883588a114b1d",
"main.dart.js_274.part.js": "2e8b2a5aa4847126bb6afcd4a646537f",
"main.dart.js_6.part.js": "5c205f3676452ac10aab882d7fcc5f00",
"main.dart.js_37.part.js": "04df28a197a0b94818f58bf008812d4f",
"main.dart.js_84.part.js": "677cd8916e3d85b8ed91f3a4cbfe5096",
"main.dart.js_115.part.js": "a8398355f0e21518866e8db15a346eb2",
"main.dart.js_151.part.js": "14c02ab7ef10f18100ef0fe6fc9fc426",
"main.dart.js_208.part.js": "074c381880f54b25a6f50c8c70ac96e8",
"main.dart.js_120.part.js": "37262afbb185df3e5616287d0dc76fda",
"main.dart.js_152.part.js": "30ac410a8adebfc9c0bfb4fc5c848480",
"main.dart.js_86.part.js": "da30137e99a738ea9bc6c82fe7a67c81",
"main.dart.js_255.part.js": "9ddcf8a2b5bfc0ef134e04049ac0a106",
"main.dart.js_150.part.js": "a628caf106414ca1b53bef490ab8ed7e",
"main.dart.js_165.part.js": "c360a137ba1c1efcf8b565fb161bb051",
"main.dart.js_171.part.js": "0c318b64aa18bf56877746fcbada2401",
"flutter_bootstrap.js": "1fa7bb5d7d48fa1706e5a574371910a5",
"main.dart.js_146.part.js": "30f60d0870d7a81a07f14615251f38af",
"main.dart.js_210.part.js": "8974336aa5ac9a346788f6aa7436a0a9",
"main.dart.js_81.part.js": "d4a0b958f8d586f361561018ca940867",
"main.dart.js_156.part.js": "b749cf1cd6dee8e4a5f146a33668695c",
"main.dart.js_207.part.js": "b463a5dc81fc3a61672f61615e79261e",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_27.part.js": "de31cfda3972a2d62a9b51bfcd54005e",
"main.dart.js_154.part.js": "3c48304407640f22d375cd7d5c888c0f",
"main.dart.js_112.part.js": "8bb731858adef79b35bbc54a6fd45f6b",
"main.dart.js_212.part.js": "1566038704829a26244de5a6d822f962",
"main.dart.js_221.part.js": "f6753b7af2e7b61a80dc0f9353c21411",
"main.dart.js_26.part.js": "b118eca97d6b05e5d8d1dccab337f1cc",
"main.dart.js_123.part.js": "f622c9f261f9f8b2ad2ee417a419549d",
"main.dart.js_137.part.js": "bec801933e4f2671cd057c22b5d64440",
"main.dart.js_36.part.js": "067c1e022c7bf30dcfe3c9b89d942a99",
"main.dart.js_224.part.js": "3f380304b397a7d58c75871f484c5b9b",
"main.dart.js_301.part.js": "35cb39b6a8ea5b89dcd7ba2a0c4cdd54",
"main.dart.js_24.part.js": "07260021c3b48341845132eba0637528",
"main.dart.js_272.part.js": "9eb26661ae0663b3fed363911c456124",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_57.part.js": "a296fe59ab523ff5448b29f027b61524",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_18.part.js": "9365ac439cb511f11741cd4bcd2ad5f8",
"main.dart.js_292.part.js": "05420be88653fad5eb5cf54c5a1465e6",
"version.json": "206da8a20a251388179df75edb4c278f",
"main.dart.js_8.part.js": "af4aabee62f67fe2ab038f0d6ca98f91",
"main.dart.js_247.part.js": "d95506749e0ed368f841f9b9eda9abc2",
"main.dart.js_9.part.js": "fe242a5473f4792539eb78e1f1fa73e5",
"main.dart.js_69.part.js": "3848b58825d77417a0b3354285762c0c",
"main.dart.js_304.part.js": "25b2f5f03d0ed7c1e41cd4267440fb6d",
"main.dart.js_139.part.js": "03a2159c2a753192d3cc1afaa81583ca",
"main.dart.js_176.part.js": "e4d29ba17f11fbebec009ddf44f8d797",
"main.dart.js_275.part.js": "3eed61f9cc7159616f07012f1d7de105",
"main.dart.js_256.part.js": "48f6e30b70a5e98482afd2ccbdaf2ecd",
"main.dart.js_237.part.js": "8d6b76632bea7e0958e2b508ed27d2f9",
"main.dart.js_257.part.js": "63124db49418f982a1ddde9679b8bbf7",
"main.dart.js_93.part.js": "96e7b672103cd429956ae30aca78f905",
"main.dart.js_203.part.js": "c221f7ffa85624b71937c43bcb4f34c4",
"main.dart.js_179.part.js": "52439b3cdf36a9efc2ba696d4e4d003d",
"main.dart.js_14.part.js": "3faec4e82050f6e0185b91d97aa4f1d1",
"main.dart.js_206.part.js": "dfc173d93a1fc20d6e882dd407370239",
"main.dart.js_113.part.js": "cc4ee4042052c9a4db8ea1b93c55e5c6",
"main.dart.js_235.part.js": "b82fcdb23dc0dac38fd646c138ac36d4",
"main.dart.js_39.part.js": "0d300ed672e7ff1985b2dc767603a8fa",
"main.dart.js_306.part.js": "ec8d39b7147e9f08ac51f1020c2b7d70",
"main.dart.js_250.part.js": "cf9c1334a0c66d099b61ec3527e0e0b1",
"main.dart.js_290.part.js": "92cdca29ee4d40faaef168f0557566a5"};
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
