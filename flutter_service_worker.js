'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_227.part.js": "a3dfd9abea7302b29ac90b7e77a8cbcf",
"main.dart.js_214.part.js": "2e42af9934358e9e94c4119fa7386153",
"main.dart.js_44.part.js": "6a58a013479538c6fd45311b4c4e2b17",
"main.dart.js_262.part.js": "fe0d09560c5f022242a88f17a44d700e",
"main.dart.js_222.part.js": "db52621cc436ddb9d4a560fdc496d551",
"main.dart.js_355.part.js": "ffd59a3120216e56e64877b63d131418",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_54.part.js": "be56c1dabc8615123d48b67d499fc5fc",
"main.dart.js_219.part.js": "fcab65550749b0b12394f80c3c74c70b",
"main.dart.js_346.part.js": "12d99bdcfa3dcf91f2014eac1caeb9bb",
"main.dart.js_304.part.js": "073ecf5e07d41066601cf377ac06c795",
"main.dart.js_280.part.js": "3a6dcd73c3eb406cc7af2084395c1b6d",
"main.dart.js_314.part.js": "95919847fe5cb353faafc688d17b77bd",
"main.dart.js_95.part.js": "9be4c62c35423d8c0bfd8eefcd660c6f",
"main.dart.js_35.part.js": "520b530c72a4c5c3cc8d9180d7cc2eef",
"main.dart.js_125.part.js": "a64c132c62740a7356affacdfd6adbd4",
"main.dart.js_297.part.js": "0464fbf4e55f76179c9d28225216a1ba",
"main.dart.js_104.part.js": "951cabbe647054e90e47d64f1e1b9cb8",
"main.dart.js_296.part.js": "cfa037fc5c20664d3bcd404571d5a97d",
"main.dart.js_133.part.js": "33519d2cf75cbdd72cd16cf07b49dba5",
"main.dart.js_325.part.js": "e10a2e6100a124bf30bbc7633b822d97",
"main.dart.js_320.part.js": "87d439a4d193b49dbed05aefa53ccc3e",
"main.dart.js_149.part.js": "9c577b4dd294833e7486c7e557e3a9ea",
"main.dart.js_204.part.js": "67fbaf39149a32f272c965c491ef2fa0",
"main.dart.js_8.part.js": "4fa26aec8f33c991c0590c9231a2ddc2",
"main.dart.js_273.part.js": "5452d4a4f97291e5b2aebc5c9861a2bc",
"main.dart.js_11.part.js": "1e022563021aa44f6f871dc6c885a2bb",
"main.dart.js_208.part.js": "ada32b6f768cea978cdf63c4853f3f4b",
"main.dart.js_108.part.js": "4d89d8d8e4e0b4461f65f63f42a41385",
"main.dart.js_77.part.js": "8609877ecbb46f3ff756e934204d0a17",
"main.dart.js_246.part.js": "d98448d021d9fed507f703a4e56911eb",
"main.dart.js_225.part.js": "82bc3814496234a25e08bb0341667f60",
"main.dart.js_342.part.js": "5e6edddb568825b143f55b9298bd2a58",
"main.dart.js_38.part.js": "6890d85d4e81a6dd528549b20d1e8dad",
"main.dart.js_295.part.js": "821ba5a8fd55a0a973d28ef7002b1081",
"main.dart.js_233.part.js": "1ed0ecee0672916d88b53890975e05c1",
"main.dart.js_288.part.js": "c1ec3bc2a34e730781ee2a1a51e17c7c",
"main.dart.js_359.part.js": "c53265f3ef21217be3ec70b66bf1d010",
"main.dart.js_113.part.js": "e6f12916b5d596302a29e5618b3b4dc6",
"main.dart.js_201.part.js": "514aa3863f909ed434baca0561cf6c59",
"main.dart.js_358.part.js": "4dde78a0871fe8eddd47dade130410fc",
"main.dart.js_147.part.js": "b9a87118c7a2aca9bc1285b0943d3cf8",
"main.dart.js_135.part.js": "1581e24463a4fecc931d32a4d4c973fc",
"main.dart.js_114.part.js": "c67c46d2c433b2c1c29485cd7536c33b",
"main.dart.js_298.part.js": "f132981a6c8941ae0ade3593cb328c3f",
"main.dart.js_329.part.js": "905545fde398828664581f2eea94bef2",
"main.dart.js_165.part.js": "9b2f0e2d4f6c94685cd62b6d1c3c0a97",
"main.dart.js_153.part.js": "4465132b28abe84c4cd1899a216631d0",
"main.dart.js_7.part.js": "6e870c93b660094912fc91307f787745",
"main.dart.js_64.part.js": "d026c937f83c1ead6e0c3df748e3c163",
"main.dart.js_56.part.js": "3d130102f0e786139a2024c29acfc91c",
"main.dart.js_102.part.js": "efe3e9a01bd58ad8841ff4444fedbfa2",
"main.dart.js_65.part.js": "2694e7455ddea17a85c4c2853a7fdef3",
"main.dart.js_317.part.js": "ebc33d891b8045db25a6a2291965678c",
"main.dart.js_299.part.js": "0b673aa0010631c0c15dab36a252ddcc",
"main.dart.js_319.part.js": "e784a795d93dbe820f01f3d4a112b55f",
"main.dart.js_68.part.js": "93406b4d285d86d85978c89d7f7c2fcb",
"main.dart.js_75.part.js": "35a8325baf23b3987e1e00409d5ec04b",
"main.dart.js_52.part.js": "a670325bc55381ddd2f3f811c5ad32af",
"main.dart.js_136.part.js": "ea97b3b6165cbd5e3beac5ecb265831a",
"main.dart.js_316.part.js": "f9ee992b61f337151a678699b8a48386",
"main.dart.js_264.part.js": "43336bb84cc8879c88bc9715dcb4093c",
"flutter_bootstrap.js": "0a94cc020c33d97e33ba74fa5b3443d0",
"main.dart.js_294.part.js": "00df4832a88ee3cd3cc0b97cb10aec75",
"main.dart.js_190.part.js": "68a8f9753d57a67daa361a80dc8d6b5d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"main.dart.js_257.part.js": "89941eee961bbe832dacc3436e21adb4",
"main.dart.js_308.part.js": "2bd048396419e20d9cb05e9d102fa270",
"main.dart.js_247.part.js": "385b4cc2e2c90989d1d539c35258f329",
"main.dart.js_361.part.js": "4a715e244bec8a5c22796d0ad196cd2e",
"main.dart.js_100.part.js": "ee5cdbd030fd27c1debfd25250a4357c",
"main.dart.js_353.part.js": "f1354365ac68df7213dcdc257dc08b22",
"main.dart.js_121.part.js": "5ebdbc00c673fbfb4d4ef3b40db6132e",
"main.dart.js_36.part.js": "ecb41c669afbd542848b8ebf827e22e6",
"main.dart.js_170.part.js": "f3b15737a5253f8b68da34cadb60d94f",
"main.dart.js_290.part.js": "1258bfefcdf692767b40cf322d0eaeb2",
"main.dart.js_20.part.js": "02d636efc17d463c4d7f69c99ab9f904",
"main.dart.js_141.part.js": "281687a7c25a70a4380d79b9822c87bf",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_180.part.js": "52d78b47eb5221cc6db3e7dff0778172",
"main.dart.js": "48c16d19952ac2bb1a7e5ba1821aadcb",
"main.dart.js_80.part.js": "d996ed574e09f00936fec4f1061b2f62",
"main.dart.js_239.part.js": "b3b686ed1aebf0f8353e94d8df1cf5e3",
"main.dart.js_31.part.js": "36da4c3a37ac7e93eb4103b8000b11d2",
"main.dart.js_167.part.js": "926d00cdbc5b22d984de4026d5f540ce",
"main.dart.js_328.part.js": "49bb3d0a59df9860407fe77c86cb85fb",
"main.dart.js_37.part.js": "9085292995b4e2202e23eb59e9d56ba2",
"main.dart.js_9.part.js": "49647ba165e3660e049971ec40a01374",
"main.dart.js_221.part.js": "bb144687dd58df0ac38178b739c2aebf",
"main.dart.js_118.part.js": "189452c1bd07abd962e245b2c50a86f4",
"main.dart.js_332.part.js": "9869265e0caed5b6759c286da95083f6",
"main.dart.js_224.part.js": "5b1dbffd32f5bf3d767cd942f4f36219",
"main.dart.js_150.part.js": "b2aabe0df80a07ae0767565486296c5c",
"main.dart.js_326.part.js": "e49c828bed6ca1d902f999e61488fd95",
"main.dart.js_309.part.js": "6c5793ec3c49129d086729b9598fcae1",
"main.dart.js_67.part.js": "f357f99015b12692b1dd8ccccee9939b",
"main.dart.js_300.part.js": "2db5e632027e1c77d85d23b293a1abc1",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_3.part.js": "e1b980b70078bcf39bd4fc937e88b6ae",
"main.dart.js_105.part.js": "bdfa63e5f1473318e99626a00bd78390",
"main.dart.js_252.part.js": "e7fc6484a134ee16410f0cebd2df5a5f",
"main.dart.js_350.part.js": "0fa150f5cda7aeb500fdc9875d2848ce",
"main.dart.js_71.part.js": "06334417ffe6300e4d2f82a727f7869f",
"main.dart.js_59.part.js": "97cf9e3614c8fc561e2c2950cc853d7b",
"main.dart.js_203.part.js": "ef9845b9cd45f176d719a8a4834499bb",
"main.dart.js_142.part.js": "9646926365898c08370287afff4ced4b",
"main.dart.js_251.part.js": "48baaaad9404d7bcf6503a4476e657bb",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_99.part.js": "a9665c3d88381e49065ac630915a7b44",
"main.dart.js_34.part.js": "d9fd024beddc9df07d16731c581ed96a",
"main.dart.js_344.part.js": "eb67f9f6d0d78b218a651ebcadf74c22",
"main.dart.js_181.part.js": "3b22e194d76d1a680b647d3f44b59bfd",
"main.dart.js_173.part.js": "0830028dcf4780c1efdc6b1d9a2d7748",
"main.dart.js_28.part.js": "4a735101d1aebd39a3ef41bdb06607c2",
"main.dart.js_338.part.js": "e7a951c67ee9dcc54b72b8e035e44c0f",
"main.dart.js_163.part.js": "db632f1deafe369f3e5f321272921aca",
"main.dart.js_369.part.js": "c049c6bbaf4507d8871c90a03f61c948",
"main.dart.js_17.part.js": "264788694cf39f0f4ab300727c9dbae7",
"main.dart.js_343.part.js": "be6a9f78856082c81ff68d5bb17b8b69",
"main.dart.js_21.part.js": "977512312516b76907c561d7de599e3c",
"main.dart.js_283.part.js": "4b46f3dded368f539adfc4e863d4f0b3",
"version.json": "208e26bbc40ca6e324d0d710c3bbc392",
"main.dart.js_365.part.js": "20692de58c9f5188e7497c0221ecf647",
"main.dart.js_291.part.js": "5fe77f9558e6f4dc4cffd1ab05ad029a",
"main.dart.js_307.part.js": "4e9ffa3987fafd94b4c471581fe025c3",
"main.dart.js_169.part.js": "459d4d04f4e04f386b0557b972bfd2e5",
"main.dart.js_198.part.js": "eacbb23712ef2ee974594860cb9b3f34",
"main.dart.js_116.part.js": "ff20ce89102dbeb2b1dde3c52acb82b6",
"main.dart.js_109.part.js": "1852be9a6de22d3dc20861e99fcf8a52",
"main.dart.js_92.part.js": "9f359ce61cea16012efac3450e2e05f9",
"main.dart.js_126.part.js": "d3c2dfc53d3a2b4e9224d71991d44901",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_182.part.js": "eccb468ee743f75ecd6ac7df4fd82ec7",
"main.dart.js_26.part.js": "fe60a7d273faf79f897ebc20c1f25f84",
"main.dart.js_124.part.js": "c2047b11408657b3e69c9b137e956076",
"main.dart.js_364.part.js": "207f4dd9c88d223dba0eda75dbdc20fc",
"main.dart.js_98.part.js": "95e62109005bdb9185e90b823196c705",
"main.dart.js_18.part.js": "fdf55884ffa3e9a4bab87700f3fa539b",
"main.dart.js_187.part.js": "5c7294fa88afeea642f23b99707f2f75",
"main.dart.js_41.part.js": "24b603064b8a220a4e46290c0f573588",
"main.dart.js_272.part.js": "018520cfda2bb80e63b1a43158a2a19c",
"main.dart.js_303.part.js": "2b47fc89fb09bfe99d3f9a44111db766",
"main.dart.js_63.part.js": "0e42ff70196d550a5d61fec61aa229fe",
"main.dart.js_110.part.js": "f4a6da4fbf5f3a1f37dd27f5d6f6a6eb",
"main.dart.js_106.part.js": "1965e7a4b4e1742ec9e5f460b4f7c012",
"main.dart.js_200.part.js": "7fd0fcd0653257b36f2011ae868eeaff",
"main.dart.js_174.part.js": "e657485373c55081d3c0c699a0419a13",
"main.dart.js_335.part.js": "b356e7b7ac0a0d43369d38af805d171f",
"main.dart.js_339.part.js": "f8604bee582dea6010c3345ac2e9f2fd",
"main.dart.js_123.part.js": "263dee2699fd9d4682c7199c64d19f5c",
"main.dart.js_157.part.js": "686627ffdf74be33b28ba74f400bae39",
"main.dart.js_148.part.js": "094e1c5b98b659f71230c0aeb67da20f",
"main.dart.js_166.part.js": "513f961e3c687c9507254a05cce4c21a",
"main.dart.js_229.part.js": "37e4d548a1b5ccfd951a3bad500a5b1e",
"main.dart.js_345.part.js": "cc2eaa2aa47008ba98ffa2e9de3685cc",
"main.dart.js_10.part.js": "fe8c4e57755c1fb2a57a6a2ca166a2c2",
"main.dart.js_276.part.js": "ddef382c92e4a1d0c67b38845dd5c87f",
"main.dart.js_2.part.js": "0154d7d99dd5c3a44e6632e2061720a4",
"main.dart.js_51.part.js": "4318377f5f8c3e942ea23dbcb7150865",
"main.dart.js_255.part.js": "481b5363c2b376b497796f611ea88c68",
"main.dart.js_120.part.js": "8110e735eaeac122fb086e70a4bbeec9",
"main.dart.js_258.part.js": "bcbbd062e53e52550b90b20d94871ea4",
"main.dart.js_349.part.js": "2ad46affc8cbeb6f9df59ba48be333be",
"main.dart.js_32.part.js": "e145a91a372165dba0db38f4cedbcb15",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_244.part.js": "08e589f0aff5d53104f7245a7b465867",
"main.dart.js_230.part.js": "51b1bf3bd2a6098713ff7375c0bd13a6",
"main.dart.js_322.part.js": "f3b58f2db697b908bb7582025bb646ce",
"main.dart.js_82.part.js": "917d501b7685417882c10eb1b4d70519",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/translations/sk.json": "e20b4c2317f454bc552b2df9f86e40e5",
"assets/assets/translations/cs.json": "1307e107b7a74cceaa3c0b437d185d59",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/uk.json": "06d8c6f66303ae3e257fa9a62fbf09d9",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/assets/translations/en.json": "ada61229f2ad6109d5a82452d431d5d4",
"assets/NOTICES": "676824ae0f7212fa5a73ec0b0f4955b4",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "76d209b942102ccc30f3bac14a7e2a4b",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_235.part.js": "9d5d2c0f988a8655aa48665d4fdb8463",
"main.dart.js_260.part.js": "a2fbe39c90d5abb2ef1e71180be7a8f1",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_79.part.js": "72cc54eaf00218678d740f27e0868248",
"main.dart.js_192.part.js": "9176937cc2709a9b8aaf78a503d917d7",
"main.dart.js_354.part.js": "d10e252cf80512992fcc4f019646712c",
"main.dart.js_248.part.js": "288f09611f8351ebba94433534cbcfb6",
"main.dart.js_15.part.js": "9a2bd6b6071790e6c47b90be48db2e6d",
"main.dart.js_274.part.js": "5baca76bb8a2b16233908d162c30b8a2",
"main.dart.js_97.part.js": "ebd6bcc8af8da46ff6d8f0e29fe34c24",
"main.dart.js_356.part.js": "7edf99dfed32cbcff57f935a34945da5",
"main.dart.js_278.part.js": "d7ed0e37021f3ccd9b1b98b17b6bd5a3",
"main.dart.js_119.part.js": "ec07d6aaeebd209cfa19f2ec398616e4",
"main.dart.js_40.part.js": "1524dea9f84aff8f8bc9c5045e7359cb",
"main.dart.js_14.part.js": "30a90a5e6f791569891a5cd35c4e25cb",
"main.dart.js_89.part.js": "ce7d151880c600012fce6f688aff2107",
"main.dart.js_29.part.js": "e665b8b4199864a91b383d11bbf185ff",
"main.dart.js_193.part.js": "03fe9bd6c0f4a71fa3ef597194e6879e",
"main.dart.js_324.part.js": "595fe5b710362c28dd7a90d4d496b4b9",
"main.dart.js_12.part.js": "72dfb58a3ed4a559ee2ea98d9a6dd977",
"main.dart.js_360.part.js": "1feef61aca8035ca7ae64031d8ec1ee8",
"index.html": "254a2929ea4dba1836255aabb517caf7",
"/": "254a2929ea4dba1836255aabb517caf7",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_178.part.js": "afae9051b41bcb20a8a5c44a92fb3491",
"main.dart.js_347.part.js": "2b24aa9c4a3bb6c2ef33d6b8256af785",
"main.dart.js_33.part.js": "d49b0935b5aa684aad9d198ff017c5be",
"main.dart.js_340.part.js": "0122b56071f4ae07df09f3daf0f6b04b",
"main.dart.js_19.part.js": "88676ca0784662eb975645ddcb16bdc6",
"main.dart.js_107.part.js": "9f694d6981907dbda04b691ec1109a4e",
"main.dart.js_312.part.js": "402e1e9e2fcf29eb1b1d7c79134b56b9",
"main.dart.js_91.part.js": "a47264ceb8f73f0114e33fbc817aa628",
"main.dart.js_245.part.js": "194012de47ead3caec7f73965ce6ffb3",
"main.dart.js_220.part.js": "fc1c2d7f3dbf2eab5a1f9f0a9ea1abe1",
"main.dart.js_13.part.js": "a5a14c6e694d56513d0781fef474f15f",
"main.dart.js_130.part.js": "9884bba476612b3684efd76c3cbf3a45",
"main.dart.js_94.part.js": "36d21ae1151227f826e0408aa159b1c8",
"main.dart.js_164.part.js": "d3525f28e54e64cdb219405eaa5aa773",
"main.dart.js_267.part.js": "7a4ea45779bc1d8d83bfc30520ac7f4f",
"main.dart.js_184.part.js": "f00f3c568f66e549e21eb52a9a2b6481",
"main.dart.js_86.part.js": "af5ad12964801fea9a92d5442aa8126c",
"main.dart.js_171.part.js": "c7f852f2b9dc6ba1e94bdc84ef9f0d69",
"main.dart.js_162.part.js": "75b82586f111b0793ba43dc57cb3e924",
"main.dart.js_284.part.js": "ebb7731a4a44e579ef2b32738ce3cf7b",
"main.dart.js_53.part.js": "70d7029e0583fafba7649514efecfecd",
"main.dart.js_366.part.js": "087811c8e8728513e2c4be93e10c9d94",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_160.part.js": "132bb77027beb536124611d54fdca17c",
"main.dart.js_236.part.js": "bf3bca1ea4367de407f8fc90a118a0d9",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_76.part.js": "867b09c6f5dba511a37b28902d796e2e",
"main.dart.js_234.part.js": "86d65d49ec5577cc74d2dde7db7f4005",
"main.dart.js_175.part.js": "8f6dd869f1d1f5158e9dfd4277dc1a09",
"main.dart.js_58.part.js": "18e8c6193ba1b31a7fd31793bdb6fd49",
"main.dart.js_143.part.js": "2a2f4efdd7f1c30042cdd03724e9161e",
"main.dart.js_279.part.js": "60b710cf257cf75b6b75fa546581e497",
"main.dart.js_223.part.js": "4c26141ec6700ee1affccab1732737aa",
"main.dart.js_156.part.js": "39dab5445df947b27f61e00c962ba54d",
"main.dart.js_253.part.js": "001e454dcf2ffc35ab56cb87aa3493d8",
"main.dart.js_232.part.js": "ceec1408ea8fba07e76b4aa05e3dac81",
"main.dart.js_30.part.js": "17fd6ee50f598e12be2487a63965a648",
"main.dart.js_140.part.js": "20b18115055bce1535d11c8688e78507",
"main.dart.js_138.part.js": "7261af0d6bb278c67aff26010210d20f",
"main.dart.js_269.part.js": "c78823c3147a4286168fb878caf015e6",
"main.dart.js_27.part.js": "8996f66c5e5d6f7701896841c77d8599",
"main.dart.js_24.part.js": "67fe062984bfaf617ff726103c6db347",
"main.dart.js_129.part.js": "7931b68945bbe61916f20f03c3eb6c4c",
"main.dart.js_336.part.js": "2251fe7e3272d612ad4270bbf63a64fa",
"main.dart.js_275.part.js": "9c1925ccfb713f6aeb5e2b3dab6656fe",
"main.dart.js_155.part.js": "19d02d032915aab337ab3f391a141403",
"main.dart.js_323.part.js": "ce02925990c6b73cfeb1ae46f01d62c0",
"main.dart.js_134.part.js": "a6b03f9405b0c9e3ebfee7a89ef018cd",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_240.part.js": "1e11a3c7c482d0cef7723e54ff432b73",
"main.dart.js_213.part.js": "66c558c6787fe4e278961f85f7daeecd",
"main.dart.js_362.part.js": "bc0b70e038e1834c1407ae6aa9dde005",
"main.dart.js_23.part.js": "f4bd4e1cd9b3ea0e260bffd98e5def2f",
"main.dart.js_47.part.js": "7e3ddee7c38058c5d8a7fb52177a6fb2",
"main.dart.js_87.part.js": "f94cec8781ad891ae055b07598637009",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_330.part.js": "91de636e3c55c8ac2c7ff1b6e86475bf",
"main.dart.js_179.part.js": "4a3bfbba2481ea33275eef227949e6a6",
"main.dart.js_55.part.js": "81e0e0fd27f55c4eb756306c9a3f41f3",
"main.dart.js_93.part.js": "49043359607f4183239e6e8898799ef3",
"main.dart.js_25.part.js": "46e95956c72893f44b0f842ec0e59195",
"main.dart.js_351.part.js": "6688854e3e01946733c894e6cdd1c64a",
"main.dart.js_331.part.js": "bee05a83b44666b07432dfbf712b1d12",
"main.dart.js_333.part.js": "90af60d638ed3a66acc90dc0c150a417",
"main.dart.js_263.part.js": "87087b2d074050baaa004c702a661602",
"main.dart.js_287.part.js": "bbc388551d31f601fffe8144f17dca3a",
"main.dart.js_115.part.js": "0af1b73942035ec5df2b2b5dd0f13efd",
"main.dart.js_241.part.js": "0591246cccab553156ba2fdbedd351c4",
"main.dart.js_158.part.js": "cf4f79e8a0524d8620b47a3679dff223",
"main.dart.js_111.part.js": "ca83f4b868db27e8d665267022468107",
"main.dart.js_137.part.js": "00e26487de789640b7926192a6297a49",
"main.dart.js_199.part.js": "e7346660438dbdd7865eac5887de9303",
"main.dart.js_172.part.js": "571717db294fcd060cc20337abcfbf31",
"main.dart.js_183.part.js": "669b71987fc1e908d03c8fffa7a8ad3a",
"main.dart.js_256.part.js": "06eebff637a56446551fd4f0ae2920e4",
"main.dart.js_145.part.js": "58123cdf21efd682744a86e0ff7639c3",
"main.dart.js_168.part.js": "426f79bea4820bec91f8fab1448b2ef2",
"main.dart.js_117.part.js": "9c07b1e0a6d92d02da83426f80dc5ef2",
"main.dart.js_101.part.js": "d32c5f4b62c6cd0e73b18a1d70d95f7c",
"main.dart.js_189.part.js": "c4974eb9120aef933c53a0fdab9d9643",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_352.part.js": "aab0ccff39bd8a0762648c61f6cb865f",
"main.dart.js_103.part.js": "3d6cb13722c920eaac102724aa08b39e",
"main.dart.js_62.part.js": "e488761e0ebdcd3ce7c2fa53757ab34e",
"main.dart.js_315.part.js": "8d7485a8d4b40761c9496ec5a070f3a8",
"main.dart.js_43.part.js": "2fe26030ccf92f0eca6ea4300ebd33f6",
"main.dart.js_202.part.js": "39f332899147535224e6b2b366e16486",
"main.dart.js_151.part.js": "fe77e7920fad43649819c88f162ed9e3",
"main.dart.js_281.part.js": "157cf405ea7a9c392a8d290cbf80af77",
"main.dart.js_61.part.js": "3d8d2bf27c6243f36cd0978b13223db1",
"main.dart.js_261.part.js": "45a0991490acf99f905a1fd384109346",
"main.dart.js_1.part.js": "191b8785883f32c53db75ec04365a7de",
"main.dart.js_195.part.js": "28e1b2bddc5d88a0ae02e00ba5b42fde",
"main.dart.js_186.part.js": "317530871ea4b5a6327dea02d2d296b6",
"main.dart.js_4.part.js": "141577b4677d819744edd52b05b147f1",
"main.dart.js_266.part.js": "ef2f621f9d6ce504fae61f117352e93c",
"main.dart.js_357.part.js": "aaf66a9fe85afa52c4e220123b34cfe2",
"main.dart.js_313.part.js": "6b0a6d6b2f2695e6eb138b05cfdbb346",
"main.dart.js_16.part.js": "1852ba00c83c81eb37176728d891710f",
"main.dart.js_341.part.js": "919d24dcc97f997cefc684bec31b7f12",
"main.dart.js_39.part.js": "132377ce89ec395f4d3a1c5251ff465b",
"main.dart.js_292.part.js": "80d4e0c8e2f4e69fd6b928104f562f7d",
"main.dart.js_144.part.js": "67db5b5b8b347547bfc03aa1db3ea954",
"main.dart.js_363.part.js": "5a1f90411f23c5ea99d5eefbb2083546",
"main.dart.js_367.part.js": "e19723dec2aeb718467b3052e3f273fe",
"main.dart.js_368.part.js": "9cb230d8c83319470ba44d2e75827758",
"main.dart.js_70.part.js": "b9dae4fe4953ae69657b5f4249fab1d0",
"flutter.js": "76f08d47ff9f5715220992f993002504"};
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
