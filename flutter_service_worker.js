'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_235.part.js": "d7d25eaac366db0408476239d7539dee",
"main.dart.js_145.part.js": "6363345bef2a9924a996edcb2decb230",
"main.dart.js_302.part.js": "27977fce2b51b5bf44419d588e64f7d7",
"main.dart.js_77.part.js": "b8fd19428d91890184790e64db06f0af",
"main.dart.js_26.part.js": "d6136abb933a018d7a1a895fe21db89e",
"main.dart.js_160.part.js": "62b40ecc1fe8222071f614a4cefa4d6f",
"main.dart.js_4.part.js": "6d2945f59392943c69896810b916001e",
"main.dart.js_11.part.js": "d25243246319545862735d9a1b7afb5e",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_230.part.js": "ed8834dd649563f6c6073e57fa05ce42",
"main.dart.js_151.part.js": "a038ce82d1756a64ce3fd5af9316bfd1",
"main.dart.js_304.part.js": "91482c96ca803ee4f9800aa18902c25c",
"main.dart.js_8.part.js": "e168ac0d4a11dbafc1062d4aceecf4e9",
"main.dart.js_167.part.js": "242390d7475d17df48d598fd3741381c",
"main.dart.js_73.part.js": "1f6cdcef024f111b711551d8285c5ec7",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_274.part.js": "4298f63399bdce9d0c545718f424008d",
"main.dart.js_87.part.js": "826e8862aab21ba1747be198caf05239",
"main.dart.js_14.part.js": "200388e93c53534f92508757648e5af7",
"main.dart.js_182.part.js": "9f18ad88393c68d2351a5fe77679aa88",
"main.dart.js_286.part.js": "34528c7f20428ab10d2a7583b3b2acc4",
"main.dart.js_62.part.js": "7a86f5daebf0352225f1d1ddcd2c61dc",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_68.part.js": "5f155664354b9b484b3db57e9956a92b",
"main.dart.js_320.part.js": "d621ebc504d266e478680d3368e02c8e",
"main.dart.js_186.part.js": "532c782f9bfc50ad045069a108bf6dbd",
"main.dart.js_71.part.js": "25d0f1734630d387552898b8986041c3",
"main.dart.js_156.part.js": "dc95e9dd73d6d13b1d52d4eac8de5999",
"main.dart.js_263.part.js": "4a37a668c957f3cd2db977f8a5fd654f",
"main.dart.js_47.part.js": "0a38cf6748891aa72f0f24137c060d6c",
"main.dart.js_250.part.js": "4c87f06accf5d2811c07e0c11f9bbb8c",
"main.dart.js_117.part.js": "773179f83171771c7e282dd1c35a2351",
"main.dart.js_195.part.js": "681f3ccc8b2f054f6ce705fd3cbf7a15",
"main.dart.js_178.part.js": "2fdecddc880eee335b83eb108ec927c6",
"main.dart.js_52.part.js": "bd78e6025c13974ecb5be01973a193ea",
"main.dart.js_133.part.js": "32d79df9e80dfda51956c4f27e4ff79b",
"main.dart.js_148.part.js": "14a58abf8f90c1015a438c473f34f1fb",
"main.dart.js_227.part.js": "d512bc33c36d4235ed68f3cea57eaaa5",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_203.part.js": "340202eddf0d1779cccb3eede3aff5e0",
"main.dart.js_232.part.js": "00e54d07118b3a3169c7c94c6d6d88db",
"main.dart.js_3.part.js": "fead13a93d9c12101b2c245677fcc22d",
"main.dart.js_135.part.js": "3f8180a346a64abebf5a36b95d05aa14",
"main.dart.js_309.part.js": "f9f48d901da53a15ea0cfcf8a7c0e07a",
"main.dart.js_243.part.js": "e471f372fd0f1eb4f13c71e7dc22820d",
"main.dart.js_257.part.js": "4dfa861809dec659a285d687871fd109",
"main.dart.js_159.part.js": "cd9fb69f1def31dc41b08e32190d20f4",
"main.dart.js_248.part.js": "b73ded8a59622b1b6a5e351f4f0a7283",
"main.dart.js_275.part.js": "ce842c43489e83da2841bd0d36aabead",
"main.dart.js_24.part.js": "b2b05133afacc09e8adf3717d616ad95",
"main.dart.js_110.part.js": "fc19ea0b45dd92e858aae0e4bf6d46d3",
"main.dart.js_33.part.js": "1ccc020833bb11a78657dec75e405666",
"main.dart.js_137.part.js": "39494c7cd92752d4c0af176a2cc87382",
"main.dart.js_296.part.js": "c7fd7a37b8e8a00d06ab57a389c73349",
"main.dart.js_226.part.js": "3a7d6616cc6ef9f550d6308ee268ba7d",
"main.dart.js_25.part.js": "821634d6e88895ed0c6229f873d640cb",
"main.dart.js_44.part.js": "fb86e2e1e04ab243fa530f34ecae4e6b",
"main.dart.js_190.part.js": "bfb3c7fe4cf811f427af8bd010d916f9",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_39.part.js": "a8321c4ddb5cc914c6f07674ebb4946f",
"main.dart.js_64.part.js": "5fb3cc6499ec775fbdaf4e1077f262a4",
"main.dart.js_118.part.js": "ff577ae4d90b5cddb52bdfb8e08297d8",
"main.dart.js_152.part.js": "e0911e898af347821bc0e167b87b22c9",
"main.dart.js_187.part.js": "75d2199bcb70a82598a4bfca925d560f",
"main.dart.js_255.part.js": "1e9c6f547a11e8d634f77570631e92b5",
"main.dart.js_32.part.js": "812330d3251ae3d275af69602cbd44d4",
"main.dart.js_60.part.js": "de399960caac55d58ea9dcac8d9189b7",
"main.dart.js_61.part.js": "81c3fee126827a2dd44deb6455ff8acd",
"main.dart.js_175.part.js": "5869ef8c538e19cbe6cd926ade457824",
"main.dart.js_181.part.js": "2205aa28dcc408910c3751610fbba889",
"main.dart.js_319.part.js": "349cde9cacbda72cbfc2742fea79e3cc",
"main.dart.js_183.part.js": "4966f665b916c7a976a7d67f5026189a",
"main.dart.js_143.part.js": "a5311aa8a49f5f534b27a86d7065ce9b",
"main.dart.js_212.part.js": "b27bb1992449bdb55feddfbe2697cd32",
"main.dart.js_111.part.js": "d062cb1d986b78746567360bef6c1a92",
"main.dart.js_144.part.js": "a06e12015cb89ffda496c980352c82c0",
"main.dart.js_267.part.js": "ea13139ca288ee99fd245e8d4e509031",
"main.dart.js_223.part.js": "445dbd04d3b66de885264246380365f8",
"main.dart.js_69.part.js": "cae5dd0f02263f4b14af5cd42e34c980",
"main.dart.js_165.part.js": "3083b623465056f96734f981636e5ed9",
"main.dart.js_189.part.js": "0dfe224d61d58e6b5a5552b57e043c03",
"main.dart.js_242.part.js": "cd744d0786ba6bc396ba6b9dcddcdf9d",
"main.dart.js_63.part.js": "4572c6a8e9273a461c176748d5838fd2",
"main.dart.js_198.part.js": "245b11755997df8d1e53e505bb6c9ca4",
"main.dart.js_1.part.js": "738ffa947432c5eecb904b15e8b6d24d",
"main.dart.js_28.part.js": "f84b519b307146558f1ee69256ef34cc",
"main.dart.js_251.part.js": "ea676b8c33c69e61e4e7a5a54c64d0b8",
"main.dart.js_252.part.js": "83873a564e65193c9acfd18b7bfefed9",
"main.dart.js_81.part.js": "e533d7ba365646cafd33a6da543139ed",
"main.dart.js_213.part.js": "99e6546d53de1edfea0f0b2925376e0f",
"main.dart.js_16.part.js": "cbe1cccb7f6c337d1b3f2575164a78fb",
"main.dart.js_269.part.js": "f47f8071b250944112c9cfe4d3e61251",
"main.dart.js_23.part.js": "ddb0762eba25ff4af68cda73e831c484",
"main.dart.js_210.part.js": "89b423dd9e5a6e8606b53332cd3f106b",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_294.part.js": "598f5a1ffaf04a32ee17c0bbf236caa0",
"main.dart.js_66.part.js": "bbd32995788c3696d104aec627b45a42",
"main.dart.js_305.part.js": "9748e6b9082268ceba88f16d21e0a989",
"main.dart.js_76.part.js": "9ec3cefb30ddf582584d339893d0c05f",
"main.dart.js_124.part.js": "458fffc7766b0faf9fd84214491f1bfa",
"main.dart.js_88.part.js": "e89063461d82625e18b6df33f3190fd5",
"main.dart.js_322.part.js": "ae29c1d121062d7f199e149fc24bf9a3",
"main.dart.js_310.part.js": "b63bc0e92b2122cb42880d7d4085725e",
"main.dart.js_92.part.js": "3d46e386903840e6a742cf64e5768cac",
"main.dart.js_112.part.js": "35603bb118ad556436d3ca059fbb15eb",
"main.dart.js_177.part.js": "669da1be755bddcf1697cc4db6e5d843",
"main.dart.js_158.part.js": "359e6678afca0b0a61b7a22607ef98b6",
"main.dart.js_220.part.js": "d8d64d33cc1e64aca6a6fa5f2f3bdfe7",
"main.dart.js_78.part.js": "8babebbb9ed5cc0f52e78962f287c213",
"main.dart.js_218.part.js": "a326b271a66ac2d397514328c7f34c6d",
"main.dart.js_48.part.js": "4e4f01412191cb8922cb4c437b92b22b",
"main.dart.js_204.part.js": "dc8ce4d48907ed68e970609c26ab21b5",
"main.dart.js_35.part.js": "19156a8c5dc95a2c25625e950985b1fc",
"main.dart.js_216.part.js": "107fafc2383ba08db9a8874c7a752fe8",
"main.dart.js_287.part.js": "791f602c1c8f4888b699c43feacc37e9",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "7171ee257c0c922b99014fe6271991ab",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/cs.json": "4540a5a746e1b7dc2bc65904f6bd5137",
"assets/assets/translations/en.json": "9134fa6623309ca3038ef101e8b43f04",
"assets/assets/translations/uk.json": "0da50d429fb403ef58025e516926be1a",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/assets/translations/sk.json": "e20b4c2317f454bc552b2df9f86e40e5",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "83702ed7b950907257df85acd61eb6df",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/NOTICES": "a7b8f578c50dfe948059051e6983e332",
"main.dart.js_318.part.js": "644e0efa2b07fdc3daf316ce676cb317",
"main.dart.js_15.part.js": "9097ab799122c7940d2f9f8b8d4ab526",
"main.dart.js_284.part.js": "e687059722e085bf9080a4c5c1140b52",
"main.dart.js_121.part.js": "1c8582d0fa82b448da9e2e93fc2e74e3",
"main.dart.js_325.part.js": "508d5268c2b6ab5c56b85b8fa475cfd0",
"main.dart.js_328.part.js": "ff0c2e7d150b4f711eb2a8df3408d215",
"main.dart.js_17.part.js": "bfc2bf54b539efad1d7418d93ceed364",
"main.dart.js_197.part.js": "af80871d3e692aede4f8557fae23c9d2",
"main.dart.js_79.part.js": "a7ee49facc480b9a89f3ac415b96bc57",
"main.dart.js": "7c3522c1a89d8e32f0be9951b64efaea",
"main.dart.js_36.part.js": "4acf6446a7dd6f1421f5e8682ecea5fb",
"main.dart.js_142.part.js": "fa8bd05b76db6984cf0c99dfa196ad1d",
"main.dart.js_42.part.js": "c8134e24e37b1e8a8b96ff90ed78cb7c",
"main.dart.js_311.part.js": "69b9f2e4de7bb7f4356b5f9e82715832",
"main.dart.js_200.part.js": "eee707c19f41f986e3698085be336747",
"main.dart.js_209.part.js": "f3ecae2f6c57c7b04b6d438f8652651c",
"main.dart.js_94.part.js": "122dc710c3ad3887ff4c593e0ea497e4",
"main.dart.js_38.part.js": "98f87963296be2529bce1859d4fbaf02",
"main.dart.js_323.part.js": "13fbb4d01b343490fd9a52d73f560a37",
"main.dart.js_254.part.js": "fc07fbcc1694e403703d179dc8f70460",
"main.dart.js_146.part.js": "12445dbb2c2d92fd47dce433226a10b6",
"main.dart.js_29.part.js": "01bf4a58fc46e5ef6bb55362ac841a2b",
"main.dart.js_74.part.js": "9cadb3d394ea19e5ff8966e6275c9369",
"main.dart.js_108.part.js": "fa9e3197cd5e23b0c2c746708e8e3320",
"main.dart.js_109.part.js": "9223897645c93d61d7694bd969fe7f95",
"main.dart.js_185.part.js": "8ac1ef8d6f21e241ecb57a084e7672a5",
"main.dart.js_93.part.js": "dd52b6a93fae79ac6b2642120e18f544",
"main.dart.js_225.part.js": "98f7e513b75987df9f27531c50029efc",
"main.dart.js_97.part.js": "a931d62e8c8576f41106edf3e78424bf",
"main.dart.js_122.part.js": "66129ba5e256c5b5a564ab01e211e162",
"main.dart.js_273.part.js": "9dfe969da58cc960fa02d4febbabf8e3",
"main.dart.js_258.part.js": "8019fee6b899206738a715874572f457",
"main.dart.js_316.part.js": "f458176d22341e935fc65e2098afb868",
"main.dart.js_67.part.js": "68cb1d1c7dfea1c7d63e2835f7fa4267",
"main.dart.js_268.part.js": "651cfbca6ba00828a817297b4701c12c",
"version.json": "a4ad7ee3bd12b930690c51230835fba9",
"main.dart.js_300.part.js": "256ef0c42d279822843729fd1698ceac",
"main.dart.js_7.part.js": "b447aa7ae596bfcdb27dcc62d9dec884",
"main.dart.js_131.part.js": "775cc2d893aa9b3c59d066e097f0b747",
"main.dart.js_295.part.js": "52109c3b7b813415e704e08a2477b38f",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"main.dart.js_55.part.js": "8a1cf3e8d7664e667cf25b0bcb81984e",
"main.dart.js_256.part.js": "50ed6b9e5ca86bf3ccfd7eb483e6517c",
"main.dart.js_281.part.js": "cd7dca608a0951bc5eae58238e830a9b",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_179.part.js": "1235955a9d6d5ffe13164e815c7a4119",
"main.dart.js_282.part.js": "ef5d816671fb5656fb1b7b54e73d56ec",
"main.dart.js_176.part.js": "6346c3ffebbdd255345f02b4b1e7cfa8",
"main.dart.js_313.part.js": "c0e677292242a434f128d775e3403323",
"main.dart.js_314.part.js": "d461b35588bc18553072c2ab33f9ffd2",
"main.dart.js_299.part.js": "1ac570ac8f49fd8cd1737b345c8be724",
"main.dart.js_119.part.js": "ef4ead8b4d191749c8e4c11d7e81ba56",
"main.dart.js_303.part.js": "5129482ab29e023fb1501381cadb4c96",
"main.dart.js_236.part.js": "6e0066907135a5df6ca7c7c8e4cc014a",
"main.dart.js_105.part.js": "cf1adfb588cc328da5dd223f2d8d690e",
"main.dart.js_208.part.js": "f5389c43599b53aefd26728d82b11d2b",
"main.dart.js_283.part.js": "35852facaa24bfe556720bf261339ae6",
"main.dart.js_123.part.js": "e329daf722e5a41c75d2ec513ca223bf",
"main.dart.js_171.part.js": "399a168cf63edbc45d80d2c17b33088c",
"main.dart.js_85.part.js": "958ad71f473fbe7b276b02a7147e4218",
"main.dart.js_13.part.js": "83b01953deb6fae12092a8464dc37b62",
"main.dart.js_113.part.js": "98acdf99a8daeb28dad7a246983f9e02",
"main.dart.js_279.part.js": "7a88c15bb60dfe0b8043b286520e74e2",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_168.part.js": "3ea144a95d6f238ab8958477b3c7f54d",
"main.dart.js_12.part.js": "818a2372c95b64fd3fc3355cbe107c61",
"main.dart.js_98.part.js": "f8f0bca1391a1a9c109645730b84a04f",
"main.dart.js_173.part.js": "9a245590bdce5396f1d256ffd976bc74",
"main.dart.js_249.part.js": "b3720ebc7794587f158e4ed8079ebda3",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_5.part.js": "53288a45ebc72628217a8d12555947ab",
"main.dart.js_293.part.js": "e249c7e55bb5db275fa1d02a115beee5",
"main.dart.js_53.part.js": "493ebbb5106ecf8e135bf06f699969b9",
"main.dart.js_329.part.js": "15fcd8f738bd552680710a364cd82d26",
"main.dart.js_31.part.js": "9a024a82e1f9154f4a8d3ba7a403017f",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_202.part.js": "caf12b9842283c066f91479bf21175b7",
"main.dart.js_285.part.js": "d89a9dc8fe7e86fc5da99425c4f1813c",
"main.dart.js_297.part.js": "c9ff9bb6d1be582bb8961744922bb36e",
"main.dart.js_278.part.js": "b190a159d3a5704760322641b9f903f4",
"main.dart.js_154.part.js": "da38a7e6dfc364f46cf55275142e11f0",
"main.dart.js_307.part.js": "47ef792a5715bda7d981cb7493f743f7",
"main.dart.js_2.part.js": "707f01012fd99092502ed53444cad9db",
"main.dart.js_229.part.js": "5211fa2900722f3d8da105c2f4b6959e",
"main.dart.js_132.part.js": "6c817fe60cbf99660f5377dc4c626c8d",
"main.dart.js_270.part.js": "d739a8e6c95052e5eb35509488eaaba7",
"main.dart.js_288.part.js": "a18e3275a1cb06ece544fc68ec03cf60",
"main.dart.js_89.part.js": "874736498aeeaa243b17aa10033397c6",
"main.dart.js_321.part.js": "f1a9f28d264801633910c35f250b51a2",
"main.dart.js_289.part.js": "f8e41fe537b4e424cff9913efc51b7f5",
"main.dart.js_82.part.js": "ef67e4aaccef92f9df90ae34692ea9d4",
"main.dart.js_194.part.js": "a559ed0bcdeb6512e291bcb35ee38a76",
"main.dart.js_231.part.js": "2f8bc4ae122eebec1fcd70adde5b6155",
"main.dart.js_199.part.js": "7285e75edb1a848dd23ec6e6fcf112df",
"main.dart.js_40.part.js": "094495deb82b142ad1677d9d06a2463f",
"main.dart.js_327.part.js": "69f5558f76a187bcca8ee471e5baa116",
"main.dart.js_166.part.js": "4396e2b59f62e632c29eb6660b3fd4c2",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_317.part.js": "c2192bd9bfd303c2077265d8591cf3d0",
"main.dart.js_65.part.js": "f232f102a8265dfa3a32d67675d6b1c2",
"main.dart.js_161.part.js": "4617b586d3fef184ee52c31cae828c87",
"main.dart.js_126.part.js": "1312dcbea2fd748fef62828a321ad9e5",
"main.dart.js_306.part.js": "9fd31467ddb2bf056fc07a43a7053946",
"main.dart.js_59.part.js": "6e73296347317554e1a320d9d71f4686",
"main.dart.js_83.part.js": "0c4ad576124f5dedf4e95cf9a72fc079",
"main.dart.js_228.part.js": "296c194ef6ee0a611e02beff16edeaae",
"main.dart.js_277.part.js": "97bc4c144255f877e3da0cbb752b5c8d",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"flutter_bootstrap.js": "f4a1b34f0b51af06c5b689074fef2bd3",
"main.dart.js_174.part.js": "0323224b255970b86eeb8e7e57f5a140",
"main.dart.js_192.part.js": "ce1436ef0ec5577ec0dd5d1f0d0ac103",
"main.dart.js_37.part.js": "50dc678a3c5b94e4c743b7cb4b00c97b",
"main.dart.js_221.part.js": "365931b8b25e90cff02d0973ff3d6373",
"main.dart.js_19.part.js": "4e400ae82b6d932cacccf3c6c862a00c",
"main.dart.js_324.part.js": "a325bbec6e3d745b27ac35cbba0a7a70",
"main.dart.js_247.part.js": "b86ac2d8c031956d4a9f72595e6eef54",
"main.dart.js_10.part.js": "ab5eeb7aa2d17313bb7344880e8c39c8",
"main.dart.js_180.part.js": "ffc487521219045c07fdd96b4976bde9",
"main.dart.js_234.part.js": "e2789d8405c9d4f14d82c2a711ff7c3d",
"main.dart.js_80.part.js": "f2869374ed969ba29361821a3dd9ada1",
"main.dart.js_246.part.js": "7201c4bf713f61a3a06c8c5926b95d3c",
"main.dart.js_103.part.js": "b12826e221d3d58222df60d2f7eff4e9",
"main.dart.js_147.part.js": "d3143f42ca55897dcf8750eb59ba27f3",
"main.dart.js_157.part.js": "83cd13e698316203e9d8d78495af4654",
"main.dart.js_291.part.js": "65a750aae091ca667d69d459ce585669",
"main.dart.js_153.part.js": "e6b4b21dd3026b03d2c362d2af663a41",
"main.dart.js_91.part.js": "fc8f722db5cf34f2f352918c75ada764",
"main.dart.js_201.part.js": "b3b21d703cfa8dd0dbff140ac3fbfeb9",
"main.dart.js_260.part.js": "a7a25ca50f23eaca1fe6500681cf5a36",
"main.dart.js_312.part.js": "7216a37d2893e1c7c26352880af935e6",
"main.dart.js_301.part.js": "f682a5044917258bfad22783a53ef375",
"main.dart.js_244.part.js": "bde9d80567aa529d51370da8e516d7da",
"main.dart.js_86.part.js": "a005ebd7b4df087b75101abc97618809",
"main.dart.js_90.part.js": "9f07a97325c34bc000d4b01d7172c573",
"main.dart.js_127.part.js": "fc72047f1c8c037d3d3e44697502f8d2",
"main.dart.js_169.part.js": "be338d8ed5904533d0d8a0706948aa1d",
"main.dart.js_6.part.js": "c336db64a592cb6546831ba73c21ef12",
"main.dart.js_290.part.js": "d0d75cc2cdf5973f82c660b498fa833d",
"main.dart.js_264.part.js": "17419bbb4c8f2f1bbdf826aa6fd9bc22",
"main.dart.js_116.part.js": "f37bf1e91b622bfd9e3f1ff4176bb17b",
"main.dart.js_217.part.js": "d222a6ee6344a3aeddd831e721234469",
"main.dart.js_136.part.js": "851796b2bcccfb8ee61111a3ec48d4f0",
"index.html": "ab2fbdd21fe9043364f6151816d44f12",
"/": "ab2fbdd21fe9043364f6151816d44f12",
"main.dart.js_9.part.js": "3a2777a810dde1acafdbc26d321a4903",
"main.dart.js_205.part.js": "513e08a44fa26303429455b0b1717986",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_259.part.js": "4071ddd93d22e8a4bd18f2071aa6b501",
"main.dart.js_272.part.js": "e23016d2e0b9d15a122ae91c8a034928",
"main.dart.js_30.part.js": "ece4f772242f2b09925bccd234ec4298",
"main.dart.js_104.part.js": "4228a4fcaa48186e8f64655c9014d7b3",
"main.dart.js_188.part.js": "7e54e7d46d2bca617f2a216af19728b6",
"main.dart.js_49.part.js": "544ec29efbbad390bd8f79dff4aef4c5",
"main.dart.js_50.part.js": "d76c18832eb87a0338c3a795a09b5079",
"main.dart.js_27.part.js": "89a9ec2588ff1db14e24d37ff84f48e5",
"main.dart.js_130.part.js": "000dd60e4817722787b1bcfb3920ac03",
"main.dart.js_75.part.js": "96b24aff18ce0b377b8d323695a716e2",
"main.dart.js_261.part.js": "fe7468f0a42abb49cf6834b02128e326",
"main.dart.js_107.part.js": "463c408cebc92810d20b1ccfd9006b53",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_140.part.js": "ab1546a9c9183f248d2f7490a52a06bf"};
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
