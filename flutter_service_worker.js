'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_290.part.js": "29e6d7563a0cd55acfdf397f09b2197b",
"main.dart.js_81.part.js": "7d909f5bb1f930af442d7ac832612127",
"main.dart.js_190.part.js": "b8754356c8b21515ac121fe288beeab7",
"main.dart.js_154.part.js": "0361b76ad763fc67fc51258fc6d75ab8",
"main.dart.js_87.part.js": "ac3d45cfb92b7cdaff6aa7a706f22b3b",
"main.dart.js_159.part.js": "207b3dddc941a9d61a0a79bfba56feb6",
"main.dart.js_36.part.js": "46e787b48fdf9a1e7d27bffd1045cafc",
"main.dart.js_299.part.js": "8e872f61ecb1ee04ba594ca155491836",
"main.dart.js_199.part.js": "b96b9d0f79a3f5317073f8355ee69920",
"main.dart.js_138.part.js": "f8ce9d34029b9cee47e6f5096cd77471",
"main.dart.js_122.part.js": "693be6bbe7770fafd0d05f7230c0c6a2",
"main.dart.js_25.part.js": "f0cb31922a565f2e480f1125113bd7d1",
"main.dart.js_251.part.js": "0d2f51c08746b2663170c6577bb97727",
"main.dart.js_206.part.js": "9720f967068f768a55e7e143da49a292",
"main.dart.js_249.part.js": "dd8a724e58b523ece74c396e7acd43ff",
"main.dart.js_14.part.js": "fcf6b9a588aa12745f07d3355d4ecdfc",
"main.dart.js_255.part.js": "b0c0412ec9a86f5e6353666511160d93",
"main.dart.js_178.part.js": "acf9203a734dffd71daadf672d463e0d",
"main.dart.js_256.part.js": "f85ed5927ee3f617ac8613b1d3655ca0",
"main.dart.js_197.part.js": "4ef9e681838fdc6b72f9d97ed8e02224",
"main.dart.js_134.part.js": "99625a998b42ae2912a2f1ec137c3a9f",
"main.dart.js_46.part.js": "03d20a09454ef2a271ee8a7bd5ebe99e",
"main.dart.js_274.part.js": "124707c6daf9c298490ce8a3c8f2c620",
"main.dart.js_72.part.js": "f50a32d2c8a003670370fd7999259de9",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_207.part.js": "915125fbbd188451ee8a49711ae3ff2e",
"main.dart.js_38.part.js": "f89888c86ebec56b5e70d9141661a176",
"main.dart.js_205.part.js": "1766d100c5d0dde31615ec98001c1bc7",
"main.dart.js_276.part.js": "913580a04d3aec267642ce31eb272494",
"main.dart.js_6.part.js": "20ecccc3e81dfa3a15e6a420b9abddb8",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"main.dart.js_169.part.js": "049c1208a2a473655ada524a89438ac8",
"main.dart.js_132.part.js": "82a8477e8b115df0b82c2e9570e615f3",
"main.dart.js_146.part.js": "ea3738dc0f64fedcfdb6dd9695a315bf",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_57.part.js": "0f71c8e37658f463d9aa072375a095b6",
"main.dart.js_60.part.js": "8a96b0c847d62eac4775594b5c3f07c7",
"main.dart.js_264.part.js": "9fca96382aa3df76434c5065c366994a",
"main.dart.js_285.part.js": "60e0bfded4065aa0a9101f97cb90e386",
"main.dart.js_92.part.js": "d3a92e58d386676948b66b0dcf4ada62",
"main.dart.js_307.part.js": "48c30e7a154fc1494453978772ca2e79",
"main.dart.js_85.part.js": "db30d4952c05e787dc6d538e570f4da5",
"main.dart.js_200.part.js": "2a0ef009e6849537b0d077e8d2db4986",
"main.dart.js_1.part.js": "f673a1693892c542872a90b9d38bbe23",
"main.dart.js_121.part.js": "7f372ff93d06034b1ff4938c6a8e207f",
"main.dart.js_39.part.js": "de4c179e742cce104b1eef2c88bd93ff",
"main.dart.js_8.part.js": "e7d871495dc55a971e15810a78d0df7a",
"main.dart.js_95.part.js": "e21e93460fe8e30d1dde520b56f7ccd4",
"main.dart.js_139.part.js": "15d702c29d834c8bc12a1afa9fe08e49",
"main.dart.js_140.part.js": "6b39020b9e6c37498eef9ba5d657b09d",
"main.dart.js_93.part.js": "485c6d226bb0458a81d63fe5bc96803f",
"main.dart.js_275.part.js": "8ea3efc94d26930094948ae3bd33b52b",
"main.dart.js_180.part.js": "9f38fefa4967161ed9c078828671ea1b",
"main.dart.js_179.part.js": "d327a1543909a5e1e19617514c2e41bd",
"main.dart.js_182.part.js": "1364d6a3f3021b31c4afccdd7e8d24e8",
"main.dart.js_144.part.js": "7536c699775a5d331b18ed5fb4385976",
"main.dart.js_13.part.js": "adecac372077eb786abea16cd68c8fd6",
"main.dart.js_48.part.js": "9721f10ed95536b036de1d5d90b8982f",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_94.part.js": "210779f208025bf4d28eb580de6a2fc0",
"main.dart.js_231.part.js": "569edb621ce70ddd70f45eadd8d45ac3",
"main.dart.js_300.part.js": "f7b017299c4beed93b9222716af1c9b6",
"main.dart.js_68.part.js": "03b2057013305eb75b38047a9c1ea4c0",
"main.dart.js_269.part.js": "a7dc6d334d4b1602e218d38dc86db0ba",
"main.dart.js_298.part.js": "8c56c2e1691146e9542e399d7cbf7fcc",
"main.dart.js_43.part.js": "90770f7c84f5136ed9c006f2a3498afb",
"main.dart.js_59.part.js": "8d020599ce761058233883c02be3299f",
"main.dart.js_28.part.js": "0586fdf78e0a40d1a52bdba63db8f765",
"main.dart.js_303.part.js": "156a9b7cef1576edb385f6266fcd4288",
"main.dart.js_270.part.js": "bb45036ce9eef77a5101cf8a46aacc3d",
"main.dart.js_286.part.js": "b7568e09cd5a8f98c1772c02688ad670",
"main.dart.js_166.part.js": "bc56db94ca81a4f1be4fbdb4ed0ba34c",
"main.dart.js_35.part.js": "d15dffb51cf9ee3ce6c148597d7e5358",
"main.dart.js_118.part.js": "2321b14538e66b8fa02ef2187ab04929",
"main.dart.js_75.part.js": "80ebd991fbcf527e5d70bcb8f32eb9ae",
"main.dart.js_11.part.js": "0d5705baa976dde75963f48001100f30",
"main.dart.js_123.part.js": "064274da38aa87257431580c4d0a302c",
"main.dart.js_37.part.js": "e133681fdfe6253d1233abe9fda9b4a7",
"main.dart.js_235.part.js": "f4a6500a49cbb679fbf6b6b05063f452",
"main.dart.js_240.part.js": "24de5f00538f08566ddee1beaf1fb5a8",
"main.dart.js_168.part.js": "541bc8c14e22bc4fe4652916b1785ca3",
"main.dart.js_112.part.js": "3fafcd2b027d28939436167cb707d001",
"main.dart.js_26.part.js": "e4dbd94c33b10533c58a605eb918cbe8",
"main.dart.js_110.part.js": "571d0467fb94a92557f31578a3c6e3b2",
"main.dart.js_30.part.js": "ae6261fe93c32826cbf4be8a0887135e",
"main.dart.js_242.part.js": "f9b9195d2e5a48a192908ccb9c020f1e",
"main.dart.js_283.part.js": "6d2ab7f6bdecdc865e42bfdee60cd627",
"main.dart.js_293.part.js": "1621dd5013354ce3e789c6e6f22ba4ed",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_164.part.js": "c4d39135e026021d96d199a98e265523",
"main.dart.js_126.part.js": "ea5eb209879785b979420ace9b5bc40c",
"main.dart.js_3.part.js": "b1f512aad0a9802bd2d8f6cf33110412",
"main.dart.js_80.part.js": "dcd76c6b53aad51aa96970e97575eb8b",
"main.dart.js_113.part.js": "3e8f4a33c250008c7578a9def6cdee6e",
"main.dart.js_277.part.js": "33a24bdbb879cf0564ff11b6bb32874b",
"main.dart.js_103.part.js": "1b925ee8d734bf36dfe6c850a77af07f",
"main.dart.js_241.part.js": "dbf5ea3a5d0ad94e8c43da6049424045",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_188.part.js": "bd1b6b0dc4de53942f8e4b570407e6d8",
"main.dart.js_32.part.js": "6056390013184d0eb3806521570e22ee",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_4.part.js": "2bc86dde68ee5b45d7183621775a9f0f",
"main.dart.js_53.part.js": "3d2772ce447898f7eb6ea504ded5d948",
"main.dart.js_234.part.js": "1735f6fa2668c22d22bd9c1c26db5296",
"main.dart.js_223.part.js": "985cdfd361722cb776f800f76372348e",
"main.dart.js_213.part.js": "f17b6a8d206a36bd9f528d318fa40652",
"main.dart.js_15.part.js": "a294f1e3320e62ec760129508d7089af",
"main.dart.js_105.part.js": "a63bc175969ba1105e67db8292e8f06c",
"main.dart.js_107.part.js": "46ad814cc94f8e2082c477c0707ac606",
"main.dart.js_248.part.js": "6d03352a313b3622f33a5e532a6a29c5",
"main.dart.js_45.part.js": "d3c353541cdd9d37be464375e41134ed",
"main.dart.js_160.part.js": "747183b23d651b61a4d6e2dd61319049",
"main.dart.js_289.part.js": "208a9879ce299026088da2487c5bab0d",
"main.dart.js_96.part.js": "1eca13f1de732a6720a1c5313fd1b226",
"main.dart.js_147.part.js": "76bb4ba7c8bcde0079d08a406a85b518",
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
"assets/fonts/MaterialIcons-Regular.otf": "09aabd43a0a237a0a0e639a583da17d5",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "da253b6b26fe5bafb1a94a31d5a7151c",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/uk.json": "1794b65021c354763a0a830b83ee3fb1",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/cs.json": "c695f364ef2ca231078bdeff4c69bbbb",
"assets/NOTICES": "4bd2930db146c4653bc584bd9d65b728",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js_175.part.js": "883d0518d2158d293570df505c12af10",
"main.dart.js_145.part.js": "4470e4a3c0c870be4b1007f9058bbb2a",
"main.dart.js_210.part.js": "df4c3e6389b782961ec018021aa70642",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_84.part.js": "fdcec0008882118dba8236329b638f12",
"main.dart.js_82.part.js": "0fa8f17105df470613c3feb4251a4033",
"main.dart.js_31.part.js": "2f71c2256bab1bca8c5908d01824c345",
"main.dart.js_115.part.js": "c5f8ab0f42ad7218e890ff506ecdc2eb",
"main.dart.js_189.part.js": "b5aba9373bdd06ff775ed5055ec635cc",
"main.dart.js_204.part.js": "fc9b81f66228078ff154859cd37c6255",
"main.dart.js_79.part.js": "c12951cbac1590396335b8361f86aed3",
"main.dart.js_268.part.js": "656c395fc76c67e56bc50570ffd13afb",
"main.dart.js_301.part.js": "c5de498c26e493e6cd5d4657255173ba",
"main.dart.js_297.part.js": "ad7a384c1ae7488429c1aa90897a5009",
"main.dart.js_192.part.js": "b2134a293799e46aa67725a3b18976b1",
"main.dart.js_215.part.js": "3bafe34841cf856e85da45a5da379fb7",
"main.dart.js_195.part.js": "b1304fb20f83041465b3d620467680b9",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_304.part.js": "c33bb5f16f984336dd1b789c7f8e8a52",
"main.dart.js_226.part.js": "8579946dbf1c3074641ac115a78c5466",
"main.dart.js_208.part.js": "6488939be001e3ed789cf65116bd6b30",
"main.dart.js_54.part.js": "b5c88f0d1e360d896b14c9ed8c158b71",
"main.dart.js_106.part.js": "947c5520112d10ded6ac0dda81a9ca86",
"main.dart.js_152.part.js": "3a42362389ea1ed6603c57355811a49c",
"main.dart.js_272.part.js": "6ce12c07a6f5e3783b5c707722bcd3f9",
"main.dart.js_302.part.js": "73d5ce9e50abacea897ec6251b711e3d",
"main.dart.js_181.part.js": "056deab3e8a26c162a7ba44fdecf65cf",
"main.dart.js_51.part.js": "8a4f3fe0c1581a00bfb2c7d0ffe4d02b",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_237.part.js": "24fbc41f52c8256e59607d42076ae898",
"main.dart.js_173.part.js": "cc62a873105c120d687f68cb33ee5ed6",
"main.dart.js_170.part.js": "5aa45b20d35446273b1a3211c3aaf5b5",
"main.dart.js_282.part.js": "5e85bcbcfebd411e269c533dd851ea70",
"main.dart.js_34.part.js": "f23160e40ed1e574e7a1723c35b7cd33",
"main.dart.js_24.part.js": "c2d7b7a17bd72dccff137a2a42d23c7c",
"main.dart.js_128.part.js": "6a75409647a346bb177347621023b5aa",
"main.dart.js_18.part.js": "f13274cb5cfcc7fdea180276015d5189",
"main.dart.js_2.part.js": "c1533fe7797831366b7030355782d6d1",
"main.dart.js_69.part.js": "aceec75dd22b7bae14d62797f8a95451",
"main.dart.js_70.part.js": "8b849b2791afc413dc8a321fc711a083",
"main.dart.js_229.part.js": "7957f8256526c2d6b31637bbffa60ba5",
"main.dart.js_27.part.js": "15a2bb1e535d2ff7f95c8ce834f2372f",
"main.dart.js_238.part.js": "b3becdced6e227221e20c26592150876",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "15260bc23c5c1b559c62c063e08d76ba",
"main.dart.js_253.part.js": "3d66bd116552ef0191c9ad5eef8ba4eb",
"main.dart.js_244.part.js": "6aa2c311c95ab0942400572a37a8d3b0",
"main.dart.js_137.part.js": "9d525e173fd4b2a30720de78c29cae63",
"main.dart.js_99.part.js": "cc13b782b02b36e7f920bfc25241ea26",
"main.dart.js_66.part.js": "7725cf52652cd52229c91a071e3e6169",
"main.dart.js_10.part.js": "69d349e9bceeca6bfb910f9f4d57e68e",
"main.dart.js_56.part.js": "13906454118db7d5dca52a79ff9e261a",
"main.dart.js_183.part.js": "82284161492582a630dadaf45200ee84",
"main.dart.js_129.part.js": "6220a87440230726d3a1bbab905a0d27",
"main.dart.js_5.part.js": "1545eea25081f23b07bed5e5bb3d35f3",
"main.dart.js_76.part.js": "29386f9721cecd3c9a3ec7c936392828",
"main.dart.js_265.part.js": "6639bbd5cab64f5519492ef713ebbf54",
"main.dart.js_7.part.js": "da28374847fb8cbe4f57389a7172bcc9",
"main.dart.js_16.part.js": "121445d8a7a3e0c3df68868db492c8ff",
"main.dart.js_236.part.js": "15602286b3bae1a3e9514eb85625f173",
"main.dart.js_133.part.js": "880b4d217e7d304948e5b33d0a4024a3",
"main.dart.js_259.part.js": "1cec4ca41a3a89041d26cce406cb903d",
"main.dart.js_90.part.js": "6ee22129c313e29c92e3e7e0c4500bdb",
"main.dart.js_260.part.js": "c5953d4ad9215a40b2f06819167c17b8",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_157.part.js": "cbf27d7249ded02f22544668fc119521",
"version.json": "8596ec76e4c35c2cc2e1617811f9c755",
"main.dart.js_153.part.js": "20759e6ce0b448d85aead887b4060276",
"flutter_bootstrap.js": "810a77c7b7ea84412105fd8e5ad828e4",
"main.dart.js_176.part.js": "23e36d0cc51578d7c8435b5ba823b0b2",
"main.dart.js_245.part.js": "e2858bfac1dcbea043fc0f095e20b627",
"main.dart.js_306.part.js": "e510904659027523fb2d46cb4f6a824b",
"main.dart.js_209.part.js": "02f034c1cdf3602313c88fad931a218f",
"main.dart.js_33.part.js": "0222abb544752f69d812b2dc6870dcab",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_9.part.js": "ac5541e7cdc9f4fa4249be59f4116524",
"main.dart.js_155.part.js": "19d032e3a9b539a52d8736c13bf3fb28",
"main.dart.js_239.part.js": "00ff893d08a3cc181c859ab336667250",
"main.dart.js_284.part.js": "107f8157f07ce9011ca88bc703d31ad0",
"main.dart.js_214.part.js": "9c15128bafedaa64462368971f28166d",
"main.dart.js_42.part.js": "7791834f5e01ac84a7f6de3125164f38",
"main.dart.js_291.part.js": "c7d8fa774f7745b678b4d4b1274205a9",
"main.dart.js_228.part.js": "744ed83abbff652197918f30b1c5a3de",
"main.dart.js_98.part.js": "6f9d3b00a4e7b5e01839c6920a561838",
"main.dart.js_258.part.js": "2ba7bb5762d409a9394e69105ff4d845",
"main.dart.js_163.part.js": "0f7aee51e87cd965701ed457be81e400",
"main.dart.js_287.part.js": "5e7852cc0c3222fe3227da4f0f0e2c3c",
"main.dart.js_161.part.js": "7879a078af60b0f8b9ffde8fbe1ee9a2",
"main.dart.js_49.part.js": "452e893b32413edc5bb9683b5d585619",
"main.dart.js_22.part.js": "327741313878bebc20bb4a2171d620af",
"main.dart.js_308.part.js": "be0e56174ea1631cb6ab823599ce3f1b",
"main.dart.js_131.part.js": "0d33c5377855bba64d18a9bbf89ea25b",
"main.dart.js_12.part.js": "b8485da3565e0487a13f1a1f995a2646",
"main.dart.js_62.part.js": "1d02dee25cbf375587b439e1606aca20",
"main.dart.js_91.part.js": "2da93a91d5ffcc659ab837a73ef15961",
"main.dart.js_232.part.js": "8e98a7b31875f7a3e783a4b6a388a604",
"main.dart.js_104.part.js": "2177132a9e3250c6a9599cdf2918e8d7",
"main.dart.js_71.part.js": "72ff01d7c526d6c2584bb7d51b4ef500",
"main.dart.js_296.part.js": "042328ac005fb2506016c8f88bfa8a35",
"main.dart.js_278.part.js": "76c201edb0043d8f0ec0a9c3ef1b00d0",
"main.dart.js_109.part.js": "e364a3ac9cab95fd16ebf64966af6fc5",
"main.dart.js_143.part.js": "a4963bdea0e143a9a6ca7e35657a640b",
"main.dart.js_222.part.js": "ac4865c32ba7c912a58a66658bb306ae",
"main.dart.js_67.part.js": "3a9d6b2c8fdaf51062fa7713ae107713",
"main.dart.js_117.part.js": "45fae383d0cd7285912f4439842ee7b7",
"main.dart.js_292.part.js": "97b1087130fabe5d1d6ca2b7225bebf0",
"main.dart.js_108.part.js": "7f51aa371f70669d13af543508e2f43a",
"main.dart.js_295.part.js": "0ae7ad58d827c7a3e9cb3bad7f8230cb",
"main.dart.js_221.part.js": "eb5686fddd41392f6076cea8812552b6",
"main.dart.js_47.part.js": "ffb78dc7b2bd61b170e4fc622727f79c",
"main.dart.js_142.part.js": "6dc6d44b63f994c3cedab9fadb08ed5c",
"main.dart.js_288.part.js": "9949eb787e0e694ce1403e81c9e7fe48",
"main.dart.js_55.part.js": "f7e2f3b4580b2cc33169cab999b947aa",
"main.dart.js": "76d44506cfb8cce624c94cd6f924f1ef",
"main.dart.js_227.part.js": "7efcdba38761e415e27ef6c041d35ba0",
"main.dart.js_280.part.js": "7361a140986ef9683fe4df225c6408b2",
"main.dart.js_202.part.js": "8beb207781036c54d934f676e478d9f8",
"main.dart.js_266.part.js": "38cabde887d53bb225fb2fe02a2432e2",
"main.dart.js_261.part.js": "84400a17721c93e66a4d69acdd3463f0",
"main.dart.js_130.part.js": "f8519853d4895e38a66c664d84898f02",
"main.dart.js_41.part.js": "b59d1d7cf15bf703af463626d8d32511",
"main.dart.js_29.part.js": "f3d89be0d2f322aeb2ab753be1992327",
"main.dart.js_254.part.js": "51d0e6dc543f77d6cb9459f01f64b990",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_271.part.js": "1575928678a6cbd3e2a283522c477190",
"main.dart.js_151.part.js": "c3af3f1386b49731a22dced1ce8b5a2c",
"main.dart.js_74.part.js": "aa06d55229f479e0fcee374ca435ce08",
"main.dart.js_165.part.js": "809ddc33bc7f4d71c4ab196983cf4920",
"main.dart.js_263.part.js": "284b656e53342410396b6952bd6245a5",
"main.dart.js_100.part.js": "a2cc4f4472eda18523276eedaee8b788",
"main.dart.js_184.part.js": "251e0d4fa844c81b5323f7e42dcd0b8b",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_281.part.js": "cd0186227b09be601a8e3e89d59c56bd",
"main.dart.js_185.part.js": "1a6e27805c477f011d9ac96b91a94496",
"main.dart.js_196.part.js": "4e19185307e8badc7cfe264c8710a4fc",
"main.dart.js_250.part.js": "8b231868e603cf669161b601c8d5b785",
"main.dart.js_83.part.js": "f5c9cea21f2f5f4d3fa3e057eb7befe4",
"main.dart.js_119.part.js": "c02155722f5cd2947efcc8d910539163",
"main.dart.js_225.part.js": "4adbe652aa095b95027dab2aca491d71",
"main.dart.js_211.part.js": "317ae99714f820ddbbb60e42aeebd553",
"main.dart.js_171.part.js": "1bd6629f67d8b3999c4d285f6759e1c6",
"main.dart.js_162.part.js": "60d186ffea63f0706196ac5265598992",
"main.dart.js_77.part.js": "8f41884673fcdff3ff48a989f37e0d89"};
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
