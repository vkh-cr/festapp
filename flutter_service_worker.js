'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_290.part.js": "8c849bfbbc45d2054ec45ab9b0ecaaef",
"main.dart.js_81.part.js": "a8944cc421f3acb3418c7ef22d0169e6",
"main.dart.js_190.part.js": "8c357d7487ca93b044ece7825f5e73b2",
"main.dart.js_154.part.js": "3241f3fa640074d334bac58890dbe0cd",
"main.dart.js_87.part.js": "2b7ffe49bb5fe8fd5ea3e4f922ba6462",
"main.dart.js_159.part.js": "8f2f1a9160557145799ab38f7a89da15",
"main.dart.js_36.part.js": "c1bf3f9253d5e26fb46bb616825337dc",
"main.dart.js_299.part.js": "310a75a27ffb3dd0daa565ec82f4c051",
"main.dart.js_199.part.js": "790c5ea3391891181eb8c39b7ad39200",
"main.dart.js_138.part.js": "a98d41bc6c5591f61913ae1675f3317c",
"main.dart.js_122.part.js": "bcf3706bb552895ed09566a8aaaf6b76",
"main.dart.js_25.part.js": "bcf103dccb796e12832ce6e19aebef92",
"main.dart.js_251.part.js": "fa7bacce2a1470b4ce5e0377e57e419b",
"main.dart.js_206.part.js": "5b7b5ee87579241fd7bb692ab4da83ed",
"main.dart.js_249.part.js": "5beb2e51ad59bced83f0d11d23ab7743",
"main.dart.js_14.part.js": "f902e6be37d10a34d31658dec4c9f846",
"main.dart.js_255.part.js": "f5a063822f14d343b3ee77f6199c1ef9",
"main.dart.js_178.part.js": "dea2054f0789bbe5a710b77fae929c1a",
"main.dart.js_256.part.js": "6e09a200a924885add0bd1ce056c86bc",
"main.dart.js_197.part.js": "0d91097394147179674544fff38913c5",
"main.dart.js_134.part.js": "f0c8443c51f09c67807176b90a2c3304",
"main.dart.js_46.part.js": "6715fcd4cb81539d35b4b24e2e47bf50",
"main.dart.js_274.part.js": "e043d182ee827a50f5c802cbd5977cec",
"main.dart.js_72.part.js": "90225b86574983e48b17fb38934d90b5",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_207.part.js": "9585662244c2be205ab29b0db1036bad",
"main.dart.js_38.part.js": "ee8b84c4741b1ab327024813546ab2a4",
"main.dart.js_205.part.js": "2131a927cf7c813c0158f2d996a7da30",
"main.dart.js_276.part.js": "6a30d4a543981c2876b5cddce5eae1f8",
"main.dart.js_6.part.js": "7f65fa05832f8e82edc998eccc70139f",
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
"main.dart.js_132.part.js": "7889e3d7a9076dc9fa648fff22d56c1a",
"main.dart.js_146.part.js": "15f756caa48ba7563d7e14c2f3af6c79",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_57.part.js": "efd00545de32da722361b3dfdb40add3",
"main.dart.js_60.part.js": "2ba991ef9d02523412eb535a942e330f",
"main.dart.js_264.part.js": "3015aca594d2e79911218ea306e78256",
"main.dart.js_285.part.js": "1e415c90abc4a48a4d353d922a2a98f3",
"main.dart.js_92.part.js": "cf7308fd181142f3643c4c330de6a8af",
"main.dart.js_307.part.js": "b58d855ee56febb2b7e00dbeac309167",
"main.dart.js_85.part.js": "db30d4952c05e787dc6d538e570f4da5",
"main.dart.js_200.part.js": "d6179cfc3435e4102aff991ba50add34",
"main.dart.js_1.part.js": "d6f7211a955b2410666ba568b3a0e152",
"main.dart.js_121.part.js": "a886e9819c70160fa81a525dc8ca2fe0",
"main.dart.js_39.part.js": "f24f6f0c84dcb89f0f350ea26b603094",
"main.dart.js_8.part.js": "b083e4ce49780adc9ba87e6bb4724f45",
"main.dart.js_95.part.js": "27c09f77e2bdd4c19e9592a6cdb2fd43",
"main.dart.js_139.part.js": "d309a99368109447be2651d5ab688189",
"main.dart.js_140.part.js": "232968f6c24e046f180ffc0513a6fccc",
"main.dart.js_93.part.js": "067d28fde99967b88a786e37b4ae8983",
"main.dart.js_275.part.js": "1d93a07c11416c93acb5f387b7ea5406",
"main.dart.js_180.part.js": "4192a2b9aa051ab9ca84a6a0090fe518",
"main.dart.js_179.part.js": "3d6522264dbd53601e28692d117b76fa",
"main.dart.js_182.part.js": "905e58e429d4ba8fa289dc0eadcca3fc",
"main.dart.js_144.part.js": "3579a9eb82a88a6c396438975d0fd9eb",
"main.dart.js_13.part.js": "3443b86e815c6d91f899107580f9668d",
"main.dart.js_48.part.js": "9acaab849f9c632bbd3ab499f3f4a201",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_94.part.js": "210779f208025bf4d28eb580de6a2fc0",
"main.dart.js_231.part.js": "86f6010c38a0ddac86ddfab1298b72aa",
"main.dart.js_300.part.js": "d0ff0f632aa0a5d509c1bd0744d3f887",
"main.dart.js_68.part.js": "58a597d97adaa24431c996a42247edcc",
"main.dart.js_269.part.js": "1b71398425c4ad5973543ecfeced1a88",
"main.dart.js_298.part.js": "78f9a28a58f0f8ba23c12653603daeda",
"main.dart.js_43.part.js": "8be4d1e8622668661f97205b04bdb210",
"main.dart.js_59.part.js": "e4d9166ce0b41f2e239af11634a8e24f",
"main.dart.js_28.part.js": "0586fdf78e0a40d1a52bdba63db8f765",
"main.dart.js_303.part.js": "763f8137276155f6cd48d23648578e7b",
"main.dart.js_270.part.js": "446f6f2a591dba2ab7f21f7fda1dbbfd",
"main.dart.js_286.part.js": "adcd1c5ba949f1808679bc372ecd10d8",
"main.dart.js_166.part.js": "be7ed7810ec7733d28415787b5e939de",
"main.dart.js_35.part.js": "12ed125844fbe54ca2d9010f1accc331",
"main.dart.js_118.part.js": "d8bb850e670bc65a63c5a3d79d98743e",
"main.dart.js_75.part.js": "ace8800808e85f452c2ade3b072d4390",
"main.dart.js_11.part.js": "1b26e78b25f1b6f4125ec3b05672a9ed",
"main.dart.js_123.part.js": "f80c6d14e72751643dff46eea6eb0ec7",
"main.dart.js_37.part.js": "93fdf265104c14dae40ec84f0eb224a8",
"main.dart.js_235.part.js": "f4a6500a49cbb679fbf6b6b05063f452",
"main.dart.js_240.part.js": "eed692351bf3a2489295a1ea2cdc57ba",
"main.dart.js_168.part.js": "0231a91e3f630a688aabe4051a36eace",
"main.dart.js_112.part.js": "8a669536b2f53bba32c984b1e1799199",
"main.dart.js_26.part.js": "fd49ec5c400402a4fa8a7c288b9b3869",
"main.dart.js_110.part.js": "571d0467fb94a92557f31578a3c6e3b2",
"main.dart.js_30.part.js": "e4c561815cb4e224525d935239b7d2c5",
"main.dart.js_242.part.js": "39d5eb17e342ed1208dd3631a102e0c5",
"main.dart.js_283.part.js": "8dee684ed9d919d57f3bb07eaff8607d",
"main.dart.js_293.part.js": "4275b9cc0de860b1bb7c915d175f8aeb",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_164.part.js": "72691db3f90b08dd91654a5c023be37a",
"main.dart.js_126.part.js": "65bfd9717a781a068fd5427581622f83",
"main.dart.js_3.part.js": "1a34394909c8de874f2ffe730bf063f9",
"main.dart.js_80.part.js": "27c234b9c791e7f8e5777ba6a0d49a98",
"main.dart.js_113.part.js": "ba6e08cb47d521329a399aba4571b557",
"main.dart.js_277.part.js": "a39d28f7ed6b9a17989de426b679db5c",
"main.dart.js_103.part.js": "90b38328d983dc8ca9a5f35562efbe0c",
"main.dart.js_241.part.js": "dbf5ea3a5d0ad94e8c43da6049424045",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_188.part.js": "528c48b7e649ae253de3de69336c663f",
"main.dart.js_32.part.js": "40483686f9f93e81ddf5ffc10b17ac4c",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_4.part.js": "ec693432e2d8ca1a401a9056f5511bee",
"main.dart.js_53.part.js": "acd39ffdb38aabe6787a9592604c0da1",
"main.dart.js_234.part.js": "6c7ec743e71739ac414c201212fa9cfa",
"main.dart.js_223.part.js": "2fad36cfe4a51cd3f84093f34e3e5ac5",
"main.dart.js_213.part.js": "e7186bb40d61927122b643e908dc3648",
"main.dart.js_15.part.js": "835cb478eb491aad4a2ccb1689b136ef",
"main.dart.js_105.part.js": "a63bc175969ba1105e67db8292e8f06c",
"main.dart.js_107.part.js": "46ad814cc94f8e2082c477c0707ac606",
"main.dart.js_248.part.js": "bfe549fe3228cd1610cc8808db15b05c",
"main.dart.js_45.part.js": "1e141fb1158c43cbbe8d09bcbdad4687",
"main.dart.js_160.part.js": "d3cfab784f0dd6bf56863f09b6143baa",
"main.dart.js_289.part.js": "7b2bee5b2df2649cd0856d99741899fe",
"main.dart.js_96.part.js": "1b680b602a350c0931e8c99db73442a6",
"main.dart.js_147.part.js": "7575500c89b9e86a44adb66e0ee4d2b5",
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
"main.dart.js_175.part.js": "600be641ab52b3fe0630839a3c1ac04d",
"main.dart.js_145.part.js": "35510c9dd1f45ad0f9ba1c710f4c0e98",
"main.dart.js_210.part.js": "4674c120b13e483822da83462ab70fe1",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_84.part.js": "1c7dbd49b049de75b3e5cad7e720fd79",
"main.dart.js_82.part.js": "0fa8f17105df470613c3feb4251a4033",
"main.dart.js_31.part.js": "2f71c2256bab1bca8c5908d01824c345",
"main.dart.js_115.part.js": "58e6a73f3d5358582faf0903d363a0bb",
"main.dart.js_189.part.js": "a33a55d14c63e53290c022b1d3f9529b",
"main.dart.js_204.part.js": "d9fc0a334351b477bccb882b4e524e72",
"main.dart.js_79.part.js": "b0e0f2c2b89c79a417479c1fcbe0d61d",
"main.dart.js_268.part.js": "07cdc315ec3ddb5b8ef98c7bbb874fd5",
"main.dart.js_301.part.js": "c1599336f32d19db400efce5e13b9eb5",
"main.dart.js_297.part.js": "9283d02ae1be642640b0f8f445b59a0a",
"main.dart.js_192.part.js": "6da7e96de82872655d11a567a63fb094",
"main.dart.js_215.part.js": "a9f3a3d721d8e0a61d7378ef383e6d3e",
"main.dart.js_195.part.js": "0022351a4d484a0a9b8615ab2297cbd8",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_304.part.js": "8e40d2084e8120b1582b87de3c0db35c",
"main.dart.js_226.part.js": "8dcd9db108a0c784cbf7b31bd2c56923",
"main.dart.js_208.part.js": "93092f56b0f1bbc4f4e01cebccf4244b",
"main.dart.js_54.part.js": "5c2bee5ee6306a64c62b0a60fd7d647a",
"main.dart.js_106.part.js": "4b26f702a799bb48f9133222d2e8a780",
"main.dart.js_152.part.js": "53d8c5f9c3e684f559c462cca9c93c4a",
"main.dart.js_272.part.js": "8e14fe665709436f7054a3fbbbc30d59",
"main.dart.js_302.part.js": "b43fcdf95fb15531749d0c5e8b04e196",
"main.dart.js_181.part.js": "2490abfdb98231862f12db191b14276f",
"main.dart.js_51.part.js": "067c0303ce1fe0d23251e7f8c449b143",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_237.part.js": "b3570bccc55440390c972cbf3ca0d688",
"main.dart.js_173.part.js": "cc62a873105c120d687f68cb33ee5ed6",
"main.dart.js_170.part.js": "566884d1ac7c19b56df861d5fd946223",
"main.dart.js_282.part.js": "699914a9edbfc36e3bf706eb89881a31",
"main.dart.js_34.part.js": "ff0e35e5821e6a70002b3115b31acdcb",
"main.dart.js_24.part.js": "b64a13821350d75887e32eb0a003317c",
"main.dart.js_128.part.js": "979e4ee123d3ae280edbee4843d952d1",
"main.dart.js_18.part.js": "42420db6e39c24e5fa5cb6fdb61f9e88",
"main.dart.js_2.part.js": "f327e6d92231f06016618943a81bdd52",
"main.dart.js_69.part.js": "d0e28af608c17db6c23332505c1d9ece",
"main.dart.js_70.part.js": "3e0a8ef376cc7e42a05fa75d268934c2",
"main.dart.js_229.part.js": "2926c604c41f61ece91f7dbc7382c9d7",
"main.dart.js_27.part.js": "1cc9ab1bf23d2840c1a108f12aa74ca1",
"main.dart.js_238.part.js": "e9f0c879ed88347b2b4337700da45ca3",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "29ba6e7160f252942246ffef164911b1",
"main.dart.js_253.part.js": "830e2b3e537b987c8528847368709836",
"main.dart.js_244.part.js": "0fa9bf5d6e4cdd4cb29f5879dd15a5e8",
"main.dart.js_137.part.js": "30e0425ed7b215c5d33506877f88d5e5",
"main.dart.js_99.part.js": "a9e8e448f54365bcb50c2503c0b1d77c",
"main.dart.js_66.part.js": "069fe09308b66f95cb0ef592f9b0f18e",
"main.dart.js_10.part.js": "0f4c5526f63df5654710858a64dfb9c1",
"main.dart.js_56.part.js": "03e9354d89b15f8e996cbae096a2bb81",
"main.dart.js_183.part.js": "6bbf796fa237e0c4c5750b5699d080e2",
"main.dart.js_129.part.js": "8fa0b24292092de9bab51cea5782d24c",
"main.dart.js_5.part.js": "2c34246e1d7852c6a7ffe4f306dbfdce",
"main.dart.js_76.part.js": "0f5688de5d4f12c5ea0d22d9633dab30",
"main.dart.js_265.part.js": "58cd674eba80253540a7b7ae8f96627a",
"main.dart.js_7.part.js": "dc3463716a6d0c47b842e1295ce1980c",
"main.dart.js_16.part.js": "09618a9fb3cffe01acfd5a25954ac056",
"main.dart.js_236.part.js": "547e4da6c3e97cf44be58c1ae90843c2",
"main.dart.js_133.part.js": "528d6f9900c6ac22e0d70c6b8ce26a28",
"main.dart.js_259.part.js": "9a13b848e2fb52900b91393cf040a844",
"main.dart.js_90.part.js": "62c7fae36eed814412649f119ab18366",
"main.dart.js_260.part.js": "349f5b919824f571565ac72294241b31",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_157.part.js": "f5e1fe2ca41ab8c962f1e213f9b38f93",
"version.json": "eeb3afb8fcfed0be64f1de1892919936",
"main.dart.js_153.part.js": "5589882f64ecf5b71a0bd4148597550e",
"flutter_bootstrap.js": "5baa90ed29fac9e11a6d0837d34ecee1",
"main.dart.js_176.part.js": "6f69f3827b7869a21c691bf1d0b94677",
"main.dart.js_245.part.js": "7fce4f38cfc2d7cd85b2591eac9ba8e4",
"main.dart.js_306.part.js": "cca870114cd309a3c8fafe30f185787b",
"main.dart.js_209.part.js": "acc88ef45918cfcd8561333108a90d47",
"main.dart.js_33.part.js": "5f671cbf89047cc6c5b14068cfab63bf",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_9.part.js": "b132b88bf719af5e6ac35c80b3360c6b",
"main.dart.js_155.part.js": "94c039fc1ea5f20a1639862fc73ea086",
"main.dart.js_239.part.js": "be45e9ffef71ddd8d91b020c7fd9cc81",
"main.dart.js_284.part.js": "cabc701449299a970efdc492b610aa23",
"main.dart.js_214.part.js": "a939cd56fcbdef94f68227c6546f33c2",
"main.dart.js_42.part.js": "3b252cba8dfa37848491930bc4c0af8b",
"main.dart.js_291.part.js": "46be9e1abdebe6cb83deb7259ce78bda",
"main.dart.js_228.part.js": "4ecf9061322d70428dc59f712a24fa9e",
"main.dart.js_98.part.js": "6f9d3b00a4e7b5e01839c6920a561838",
"main.dart.js_258.part.js": "c5b7181d0aaf219482e7bbe51df286f5",
"main.dart.js_163.part.js": "c4ae6d4382f9d756bf5470c322247797",
"main.dart.js_287.part.js": "0f7b60716bac77774e3eadd03e0dae69",
"main.dart.js_161.part.js": "3a06eb5755020d49ed569f7071f21361",
"main.dart.js_49.part.js": "d1a80795f86f17a3132873e60d17cf99",
"main.dart.js_22.part.js": "8a77a86debdfce6313cfda549155469c",
"main.dart.js_308.part.js": "825cdafa2a5dd8873a08d7429061cfa4",
"main.dart.js_131.part.js": "3d658945410be0e258c363d4aa1ac9a9",
"main.dart.js_12.part.js": "44282dce1d06f4c19a672230a0241d89",
"main.dart.js_62.part.js": "b013ca64405cba7f59c118ca82b7d4ab",
"main.dart.js_91.part.js": "f70d445926f17e25ffdd4c02c34fa937",
"main.dart.js_232.part.js": "d13ef88ece202c21725d5fa8ec90fa3c",
"main.dart.js_104.part.js": "717805701d3fce2f4505ca1ccf67f886",
"main.dart.js_71.part.js": "dd2f337d732cb86954e74ea80c664bc0",
"main.dart.js_296.part.js": "d56a5e771ac1e1957a0c8ceaeb1d5cbf",
"main.dart.js_278.part.js": "4db7ced6f6316adddb5d842f7f273fcc",
"main.dart.js_109.part.js": "e364a3ac9cab95fd16ebf64966af6fc5",
"main.dart.js_143.part.js": "f5d6de7d5b9a0c22e2730b8acdbdee3a",
"main.dart.js_222.part.js": "4c95ccf02a275e7de1f0b2b17995c4dd",
"main.dart.js_67.part.js": "51252dbb17a6b26f631bf153a2c504a9",
"main.dart.js_117.part.js": "ecaab244d91ba4992b5f7b79cf7328b9",
"main.dart.js_292.part.js": "6ee55fbb136847a01dac970a7cda98df",
"main.dart.js_108.part.js": "ce24ba91ed05032fa21c653dab32bd84",
"main.dart.js_295.part.js": "967245acbe8bef5ed903309804645ff8",
"main.dart.js_221.part.js": "eb5686fddd41392f6076cea8812552b6",
"main.dart.js_47.part.js": "bbd73dd09bf6e38444a205bf98c7d670",
"main.dart.js_142.part.js": "3b854720de95c604a808ff89560c5f3e",
"main.dart.js_288.part.js": "2a778edba4422c6a787a9470d298613b",
"main.dart.js_55.part.js": "db7e4fee40bc4121830fb1577fa67790",
"main.dart.js": "407b4560d15cd3527935c1a67ffbc707",
"main.dart.js_227.part.js": "a7caa03063f3aad8a2928b0b982f6bd5",
"main.dart.js_280.part.js": "bcf3fbfcd09afbbd0fc2892ba5761cc3",
"main.dart.js_202.part.js": "3c55cf3391420622d1f1481310ad1135",
"main.dart.js_266.part.js": "9d7e11ed120d793ab9e78e897090e291",
"main.dart.js_261.part.js": "8c6500945ae75db2c94efdb5d70a356a",
"main.dart.js_130.part.js": "957cf56df2cdc1235f63bd1b01b81bf4",
"main.dart.js_41.part.js": "a3e8987b3f78bab770d5a9d7a3ae315b",
"main.dart.js_29.part.js": "10e00e2c5d3d75c63fe2fce23eec9806",
"main.dart.js_254.part.js": "8cb0e6db0c2c5699601ef7c0e7351ca8",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_271.part.js": "8ee88e81a0d751c283592811ae2f2ee3",
"main.dart.js_151.part.js": "78f0fd11556e94a7b545866a9c5a98df",
"main.dart.js_74.part.js": "d4cef53b5fa81983516333c671350aaa",
"main.dart.js_165.part.js": "2059256e4b022f6152d9c4cb4a1c15e0",
"main.dart.js_263.part.js": "284b656e53342410396b6952bd6245a5",
"main.dart.js_100.part.js": "47ea8f5d9d95d599853bdbac31aec8b5",
"main.dart.js_184.part.js": "6738269c295a7c867fae38de830d8cb7",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_281.part.js": "3ea3dd8ba92f8c70936b2111fb6b5e08",
"main.dart.js_185.part.js": "a702ad13643cae398b39ae6a28ee6fce",
"main.dart.js_196.part.js": "9a9e2c0b4733d54659b35175c79a00cd",
"main.dart.js_250.part.js": "0f7735f0bbe2e1a23da8b0628733385d",
"main.dart.js_83.part.js": "a76541550d3921c6d9c22e8fa6f00f57",
"main.dart.js_119.part.js": "291160af53fc5035406d8351838e0f99",
"main.dart.js_225.part.js": "a859373488784c1d333d92f69a3f753b",
"main.dart.js_211.part.js": "cfeffafa25096ea1b70d2b4ae261b1fb",
"main.dart.js_171.part.js": "051d0461a8bbd609622d5117c5761fe4",
"main.dart.js_162.part.js": "49130c7ac7cbd18bb37b6c9f9e5225bc",
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
