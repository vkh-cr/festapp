'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_104.part.js": "b2947f3b4ed9ac9f0ef5000285df0934",
"main.dart.js_113.part.js": "dd55c12e87d14119b9e43d860ebabcc5",
"main.dart.js_37.part.js": "09dcd1a55d084e8bb9b31a7fedbde522",
"main.dart.js_3.part.js": "fd230558b006fcdc377fb30af4042a7c",
"main.dart.js_291.part.js": "31febb969234911002727ee4ee6d5570",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"main.dart.js_208.part.js": "2a94e62101f7a44ec1a13c2b2758ce48",
"main.dart.js_207.part.js": "a36dbfaeea45a0aaa826971a9ad706c1",
"main.dart.js_185.part.js": "a2e999cb244c6dba9f48120d9bfa204d",
"main.dart.js_135.part.js": "a2623db5fc2b160370c06a2b7e124ac2",
"main.dart.js_65.part.js": "f4d8e83420f3832b7ad4a16d120d7610",
"main.dart.js_282.part.js": "6ab69f61706f4da4fe19f487bbc30987",
"main.dart.js_308.part.js": "65011790aae70acec20bf50d30e52bc7",
"main.dart.js_167.part.js": "02beef11cc817f64c04748e6484e276d",
"main.dart.js_20.part.js": "1afd76e78e536869ff821de3064d0651",
"main.dart.js_201.part.js": "2708a8d40ae5abd10dad47fda19c2640",
"main.dart.js_112.part.js": "8231e0c3fdb3777fd328d0b16172ea60",
"main.dart.js_105.part.js": "ca9f6f8797ef03770620efe546b76f84",
"main.dart.js_259.part.js": "e2e98c7c4c072dbd1a7301cee7fafedb",
"main.dart.js_148.part.js": "2d592c77f5067b69a6b614497d095be5",
"main.dart.js_317.part.js": "18aacbc484763e65588e666495d0d4d3",
"main.dart.js_243.part.js": "13e5fa0adedf50e30d54024936b2ac29",
"main.dart.js_137.part.js": "2a7141296de22a543b70c001e88cfc2e",
"main.dart.js_297.part.js": "715c0369a21c17ba3ac577b05e92ad91",
"main.dart.js_1.part.js": "e519e08a059a0c6a4f492d3526002288",
"main.dart.js_260.part.js": "1bd4172a0077858744c2001e7dac5379",
"main.dart.js_92.part.js": "f7a827c24510e7c6ab631d4a8338092c",
"main.dart.js_55.part.js": "dcccd2b350f1e98c0ec9c7956271e14d",
"main.dart.js_87.part.js": "dedb1b3e46338169ded1e3f4e4157eb1",
"main.dart.js_63.part.js": "a458f9d0c23b03bbe2974039bc154f4a",
"main.dart.js_27.part.js": "9a2889e51d2b07af4e9b52c5b4a5ada4",
"main.dart.js_36.part.js": "c9b06c6ec8a50c2a4a2078ab400c0307",
"main.dart.js_250.part.js": "5119099b8dfa90031c4c7e0cf9e80f2f",
"main.dart.js_13.part.js": "cb36ac92e63805cc67485d54b3162226",
"main.dart.js_136.part.js": "4737f14d520dc1426b2e29fd2f3e0540",
"main.dart.js_311.part.js": "a18da5fffdbb2f48bfc48c469b6afa8d",
"main.dart.js_220.part.js": "f085550a7f341ddf7f33c996ee7cff07",
"main.dart.js_77.part.js": "b6a1c1e967d378a3823cb291222bbc98",
"main.dart.js_106.part.js": "daa3196cf559a1042ac16103921541a9",
"main.dart.js_14.part.js": "04575ac0434c66cacea9d6473c6fa29f",
"main.dart.js_39.part.js": "c0d10e62ee3362fd79a6e2e8f984ad81",
"main.dart.js_19.part.js": "9f8d41d7d9ea3dea44e4158834833b33",
"main.dart.js_132.part.js": "3a1b42f42c853f4a63356dc43174ece8",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_280.part.js": "3e18b570bbcdbac6fae421fca4a0b813",
"main.dart.js_274.part.js": "e8cdf141a84e9da5a7f20e25ddcccbcf",
"main.dart.js_318.part.js": "6ef6eed377e86ac45441615956a9cc43",
"main.dart.js_73.part.js": "17e62c0f64a49137884af771c29a989d",
"main.dart.js_214.part.js": "9efdf80c234602cd9f7bd7f23a368664",
"main.dart.js_81.part.js": "89d236bb7943f32143d652bdc489f5d1",
"main.dart.js_30.part.js": "976ee8f3dacc39c1a2c49d4bb1a92027",
"main.dart.js_295.part.js": "6291dbc0be2d8f7e6615b63d00d93a10",
"main.dart.js_140.part.js": "ebc3b5bc0a1da837037f9c6324a594f5",
"main.dart.js_11.part.js": "367beaf4d250faf69845281e5a53378b",
"main.dart.js_126.part.js": "c9b29a448600ad8c8f657d16ff061514",
"main.dart.js_169.part.js": "586f3affdded1a7ad618057f29516028",
"main.dart.js_100.part.js": "6cc7e2df2b62c64f79343f1377ef57b2",
"main.dart.js_58.part.js": "b7e5007c0a8060ed61644b2c84853943",
"main.dart.js_211.part.js": "83b9451f4de0a2ece09b817cf3696895",
"main.dart.js_266.part.js": "f65b1bfc4df6038d39ae8881d78bf0d6",
"main.dart.js_130.part.js": "53da4a180bff67483659b4be60e8cfe8",
"main.dart.js_156.part.js": "fc932feda596643893aeef2bc7917bdc",
"main.dart.js_184.part.js": "e9871875c9511aaf69a65b48112b2222",
"main.dart.js_234.part.js": "5b6ec6192c5d35399e870fb7fbba96fd",
"main.dart.js_316.part.js": "a5c82df6001224337b9bcf93edc5ef4a",
"main.dart.js_71.part.js": "4bbc71e5798e6ba40302554b4427fca8",
"main.dart.js_161.part.js": "2a141e9ee6ce777134e4124ae0a2de14",
"main.dart.js_42.part.js": "62b754133640c19d982f4538e6af394c",
"main.dart.js_45.part.js": "5e3fac5404cb309c25316e7576ca590a",
"index.html": "fbbfabe0e0edc252a9638a84a62dced3",
"/": "fbbfabe0e0edc252a9638a84a62dced3",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_35.part.js": "7dc01eef9d21af3512f0cca21642a772",
"main.dart.js_302.part.js": "fb50ae5524280cc6c5cf9a2d6262f40b",
"main.dart.js_79.part.js": "80579e9dccb52867dfbadc27cbd601cd",
"main.dart.js_217.part.js": "1e92daee6de6c40f0bb1629a32e5ce36",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_241.part.js": "682584aed3d5ea2baf7f4fd1f147c4b8",
"main.dart.js_95.part.js": "668b0714e9937a2edf0e9a9a25999f7b",
"main.dart.js_119.part.js": "f1848b1d2fe9ce481212adbe762559a4",
"main.dart.js_327.part.js": "079367df96a188186ac38de5275287d9",
"main.dart.js_305.part.js": "79384e2b9c4b1219aed3ad453b2f49bc",
"main.dart.js_258.part.js": "b34003eb463a57a7a5e2af329e56d965",
"main.dart.js_10.part.js": "5d940b8f9d73b2d1aa93968ea6175cb0",
"main.dart.js_168.part.js": "19cfae596a3aed2b2c8c890a065d81b1",
"main.dart.js_98.part.js": "4c4b7b412bbbe69d074957a34931ad00",
"main.dart.js_242.part.js": "338ee4bbbea861b2c6569f761e7fe6cb",
"main.dart.js_151.part.js": "2cb0de1a58e150055fcd053cc678ba3d",
"main.dart.js_96.part.js": "eaba6775a253c9d9ece93e1ba6d61d26",
"main.dart.js_78.part.js": "5313e5cead072dae92119ba82ba4e157",
"main.dart.js_283.part.js": "aa76f7b30623ec87364e7fb4768eb317",
"main.dart.js_75.part.js": "9d580fef6e6f911b202d3f48863dd189",
"main.dart.js_122.part.js": "7b61547c789feec17a12b80461e2d288",
"main.dart.js_294.part.js": "57f43a4d74e0d16c0d09249567525779",
"main.dart.js_177.part.js": "fce4f27160b39067c8f2a169c5ccf67f",
"main.dart.js_265.part.js": "b520d0ada61d2ab30fc819f175d4731e",
"main.dart.js_134.part.js": "5872d7d18676e08ddf28b7ace5033ac0",
"main.dart.js_82.part.js": "d619abd4f825fa892427f4a534e81bfc",
"main.dart.js_300.part.js": "22961ab87e63f252385ac3ad46af3fe0",
"main.dart.js_149.part.js": "b9514be4d9108abe9f450bbbd45d262d",
"main.dart.js_261.part.js": "8694b65602e2d1a84a5f3cd323dcac42",
"main.dart.js_34.part.js": "6f2f1e2856fbd905b6f9da995064a545",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_299.part.js": "46326fc01af284ad8336f14b0c6fbd54",
"main.dart.js_322.part.js": "f7e4821205b913a77f91e309c7728fb1",
"main.dart.js_263.part.js": "ea01a887227e28c8710c738ed89f908a",
"main.dart.js_301.part.js": "328ead7841fb21396233030de6f67b0b",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/translations/en.json": "f6a156455c641a50dd0316835a5cfe6e",
"assets/assets/translations/uk.json": "2c47c07e477e41bd60b4d3a1ed68f522",
"assets/assets/translations/de.json": "e0ddac5bd3ec3cbd16695dff2027494e",
"assets/assets/translations/pl.json": "24082b33bb473455d844eeb9d5352f38",
"assets/assets/translations/cs.json": "479eb0d0313a48de3ccd136f0251b065",
"assets/assets/translations/sk.json": "9e70dc0dcb59dfff98ca64901e22634b",
"assets/fonts/MaterialIcons-Regular.otf": "d9f3b500549b0f78f256ee781411db2d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/NOTICES": "5c139c10094a2fcf4a5d5a74e91c2dfe",
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
"main.dart.js_53.part.js": "f854d11759dbc188e027b23bf33c4f0e",
"main.dart.js_47.part.js": "a6c2a6f807e8f87a0ebb4916bad20d66",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"main.dart.js_210.part.js": "204bb9b4168f8528c93ee2913b0d1f6f",
"main.dart.js_69.part.js": "864c19695485cba41425c9ac526a31a1",
"main.dart.js_107.part.js": "779f46f899269c1c5f5a6cd2f4f6979d",
"main.dart.js_190.part.js": "c2e1997ce8c11bb5f6fbf259d7e96f58",
"main.dart.js_160.part.js": "3fbe7452223f441b87fca6bdce8581df",
"main.dart.js_181.part.js": "a14fffcb234d6cea1ea100017f68a8cb",
"main.dart.js_56.part.js": "7e8dbc8e62f34a12f1de841d698c9105",
"main.dart.js_72.part.js": "57769300ade82d1acc5912b24939821e",
"main.dart.js_44.part.js": "2448c6967d7f938bc2f134dc2168710c",
"main.dart.js_195.part.js": "676e7ee8a1c909f2428fabf17cb5fc4e",
"main.dart.js_32.part.js": "7b038ee283cd2c9431c1c1d7552844b3",
"main.dart.js_320.part.js": "4ebc6f54a122c87ccc6da7e8a8e615a9",
"main.dart.js_91.part.js": "37a4943b9f5d59f855e28302ea77cd01",
"main.dart.js_31.part.js": "ad266c78683f2e7486f42c471d3f4f8b",
"main.dart.js_5.part.js": "0ba96ad0bfaa0d9d103fd69faf03b718",
"main.dart.js_228.part.js": "ebece56f7e22f5f807ad71c46c2eb905",
"main.dart.js_292.part.js": "d297580da001dfa0269b76f42aa0cd9d",
"main.dart.js_284.part.js": "c19ecd64c731701205d77dac0ce6b593",
"main.dart.js_16.part.js": "dc2816f2d406f298a4de5eec254134ea",
"main.dart.js_50.part.js": "c5ebbfce3c30f70392deb1b42ebd99dc",
"main.dart.js_296.part.js": "22cf8ba19d03d86b216c63eed8262e00",
"main.dart.js_103.part.js": "d9de29f9645939023a06f30375f8e74f",
"main.dart.js_278.part.js": "a1e485390384fa19ff4fdee887b76019",
"main.dart.js_239.part.js": "3221ee485055a294230f7bc294707e40",
"main.dart.js_205.part.js": "f566186335f2c6b8cc0d04e6288ebbf0",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_144.part.js": "a88964f72cc81f7eef4dd40a2e2decf3",
"main.dart.js_152.part.js": "027e7392bc3e8d99f2a8fef5d3e5a4f1",
"main.dart.js_202.part.js": "6d69a3b65037813c8414961299f7e60a",
"main.dart.js_286.part.js": "9b3e258a23e7d92bfd0656bc40b190db",
"main.dart.js_232.part.js": "3c9632af437a122d5d62679f97bf52ce",
"main.dart.js_52.part.js": "966de3bf8acf1eba31101d65a6e0a46c",
"main.dart.js_303.part.js": "e9c87213bd5ca51f7928e57a4718b364",
"main.dart.js_141.part.js": "fd6f10144c72c30244d3ee74b8ae723a",
"main.dart.js_192.part.js": "94ef01e1f13e3dead423f8d8b0e80bfb",
"main.dart.js_287.part.js": "f6e28a460c06151a605ea0bc631700c9",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_7.part.js": "2f39c8c23c186a250e4109f840a4f850",
"main.dart.js_23.part.js": "2f6fcc60256db4843b37a319d10feded",
"main.dart.js_68.part.js": "3bc255da082a3a20f9543f49e0192f41",
"main.dart.js_252.part.js": "330513228e951c49cd51c7a35d1bd006",
"main.dart.js_237.part.js": "1d21d9185f30078cade0a2ed2d0c167e",
"main.dart.js_257.part.js": "191ae07223a7fcab5889a1a170252185",
"main.dart.js_49.part.js": "dd7544f48de553bf8082bebe13e8b7dd",
"main.dart.js_142.part.js": "d58cd3278c63390ddf392fbac5c5ef09",
"main.dart.js_290.part.js": "9b56a063a668dc9c3c589471f362d2b2",
"main.dart.js_212.part.js": "cf94cb9cb14d6971b0f633a3d6a15354",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_213.part.js": "73947501e00f58a2346765e7ab8c06cc",
"main.dart.js_249.part.js": "9cead43369df9d4ed896beb0040f8527",
"main.dart.js_131.part.js": "de93f90bee5b70a2bd46664c78724165",
"main.dart.js_97.part.js": "e335c65a1d04e57cf5fdf23be7d56ab1",
"main.dart.js_269.part.js": "1f7a4235a6e1710b4085b9cf0937ec20",
"main.dart.js_267.part.js": "b1027ba73899ece047b0293bb033b4aa",
"main.dart.js_67.part.js": "e3c4963a92b75c9d5d7dbda4440146ae",
"main.dart.js_313.part.js": "66fb8764826fae1c9bded103de5a9f63",
"main.dart.js_8.part.js": "453deb2372c72e111ada0f64ab5c2751",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_123.part.js": "7b332d6c6e65028936382bbe7966bcad",
"main.dart.js_309.part.js": "9bb530e5ab9e3bcce535f08a90ba08fc",
"main.dart.js_194.part.js": "7d031edfe4cce37ea3a0e8b7cbcdc13e",
"main.dart.js_93.part.js": "63cfcea2b3ba315f6becd55dde672694",
"main.dart.js_186.part.js": "ac1831df5eadb4a3e9741b267c62b5da",
"main.dart.js_312.part.js": "ffe8f6deea21d79c71bfdbdf5d0e847f",
"main.dart.js_325.part.js": "a19c9353a0c8abc237e503e238893b17",
"main.dart.js_66.part.js": "69740bfb042d5c8944669f9802438cfe",
"main.dart.js_64.part.js": "98a3853eaa42ed67eb070de808b626dc",
"main.dart.js_176.part.js": "515d937dd0230c88cd5ffa5c88ea7019",
"main.dart.js_285.part.js": "61da5770222c08bee960d68ecb96dd21",
"main.dart.js_321.part.js": "54799bd9752ad68bcf0ee7b7ad1c863e",
"main.dart.js_70.part.js": "0c79d63ce8ea8b360962860ca39ea9ab",
"main.dart.js_46.part.js": "eaa33e4e3fa682d7abde0e78117ab49e",
"main.dart.js_40.part.js": "d85f085898980046feeadab3eb324e45",
"main.dart.js_22.part.js": "0e19978a3f8acd15cdd0a8dd7f63b062",
"main.dart.js_191.part.js": "aec7a11d6ab08c2c35c7f216476bb7bf",
"main.dart.js_163.part.js": "8df39a6ba201b7666aa54d10a84e26c3",
"main.dart.js_158.part.js": "ddd757598e07f67f2a402e15374566fc",
"main.dart.js_255.part.js": "d31ae341f5b5a8c7c72cf5df9f574c29",
"main.dart.js_235.part.js": "3c510a65801bf7660c7d6809cf239c47",
"main.dart.js_268.part.js": "75863a55a28594fffa80396f870ad537",
"main.dart.js_197.part.js": "b4c7c38cfd5609bd88a70651b969fce4",
"main.dart.js_172.part.js": "b1f7805f2b7f1525be90878cfcdc8669",
"main.dart.js_4.part.js": "ec320038cfcffdafd7c748491027a642",
"main.dart.js_85.part.js": "828a7c64917125d67fc290d80a653127",
"main.dart.js_150.part.js": "385c74e6e1c4dffa9b54409f79ca9fe6",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_183.part.js": "efaccfeacee0edab40a852056cecbba2",
"main.dart.js_109.part.js": "469cd48814c68a71a7d596d41c36a37c",
"main.dart.js_147.part.js": "6892e187d2b8bd9b808f63da7b2504ad",
"main.dart.js_25.part.js": "f44098f4647235334c33ba659751465c",
"main.dart.js_200.part.js": "ccfe925b590c9b620ce4cfc6b5e9cad5",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_275.part.js": "6aae79a29a35f164a7331dc4172544bf",
"main.dart.js_281.part.js": "3f4e6147372e4eb4597ce339ada60b5f",
"main.dart.js_175.part.js": "3f686fda4dc815260bfa2cb88f900e3e",
"main.dart.js_28.part.js": "bb68ae32cfe08241e98c3e21f9df4fa4",
"main.dart.js_288.part.js": "001e5a6f1fb0ccf81d35e7ed0775dd90",
"main.dart.js_314.part.js": "6b12391c518162c30e23fb64268df641",
"main.dart.js_62.part.js": "a645eaba142422156c8599299abcc80a",
"main.dart.js_206.part.js": "7b00bc4c4e4ed7a0df370d228e0c9387",
"main.dart.js_29.part.js": "a78dc8e2e895c49ddf884a2bf95a8dd5",
"main.dart.js_307.part.js": "e859b06a54bd8695d9c8c738e1d5edac",
"main.dart.js_129.part.js": "edaa61866174fb88de51908bec6f8b70",
"main.dart.js_279.part.js": "89b9be9b66345eab23b82378ee7df8fa",
"main.dart.js_216.part.js": "138fb827ddb062742a9d5ef0a7ef8525",
"main.dart.js_319.part.js": "6cdb5368553a5c7f153f37eec015f8db",
"main.dart.js_133.part.js": "c87c3135da9cbcc902bb6bff92892a5a",
"main.dart.js_165.part.js": "099b26abbdccaa5b0923612bc7f6d149",
"main.dart.js_24.part.js": "9498b5f2b918a37b08dee26092c880f7",
"main.dart.js_215.part.js": "dcebf13b3c8f7db58091243555639e41",
"main.dart.js_323.part.js": "d41cc8451de03e998002adcb81be024f",
"main.dart.js_227.part.js": "5599054760a9a560d09b8fa8bda17e97",
"main.dart.js_171.part.js": "ed520ef1e6296d7d94e1be86436b52a4",
"main.dart.js_218.part.js": "e8e45697a624ca257426cecc39cce1d5",
"main.dart.js_121.part.js": "77110be3c993025e36c266f7fdbbfd8a",
"main.dart.js_230.part.js": "acffc2eb15dbaa235fbb7181a0be3b3a",
"main.dart.js_324.part.js": "15901657e2261ade2ac9e2f31de33ae0",
"main.dart.js_74.part.js": "8cb9c22945c9f34910ff1acc3ff9569e",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_108.part.js": "9dd8a00efba0633d89c9205da85c235a",
"main.dart.js_12.part.js": "032b8f9881346c9155aa8d2992d804ec",
"main.dart.js_231.part.js": "a6be6e663d2fa7e2d9e7f4587cc47856",
"main.dart.js_139.part.js": "82947460973f1c26b9779f72481952b0",
"main.dart.js_38.part.js": "e5ddc96782cb2c75adec6fd8b6ac1eed",
"main.dart.js_111.part.js": "9e7c5f7a97ad2e2201b4736453bd4105",
"main.dart.js_170.part.js": "ed6919576e67b567da8f46a8d75267b3",
"main.dart.js_219.part.js": "e6b2e40198218cac12c0795e28fc0899",
"flutter_bootstrap.js": "97787e6e5046f128d395d808d4d925bf",
"main.dart.js_143.part.js": "4ea9dc76a957c90d0bb7bacc612666b7",
"main.dart.js_15.part.js": "4c863a06e22588fcc20d6f7d5b3f5649",
"main.dart.js_9.part.js": "812f77df8dc8073af057116c9aef8e2c",
"main.dart.js_189.part.js": "65bde02ecab6bde0085e3757f390fe70",
"main.dart.js_26.part.js": "6bbcd60027efc7ffd44366dd1c902e23",
"main.dart.js_125.part.js": "e770fbe1ab77e6b36d6d22e52c1c2972",
"main.dart.js_304.part.js": "4ab75780d6c6165606b251f8f04eff12",
"main.dart.js_155.part.js": "2374401179f90070d700f85c59500083",
"main.dart.js_276.part.js": "e7f7b05b198e89677dd4d15e8be5c309",
"main.dart.js_178.part.js": "a8635df415f2bbaeba8f39aefe40897f",
"version.json": "a9054ea6d86c6510aa8141a7e8a8b929",
"main.dart.js_293.part.js": "3a6fdefbafa1da605ca2c985a11c945c",
"main.dart.js_310.part.js": "0f589fbf05c733db121ff33aaa309342",
"main.dart.js_222.part.js": "41edae483afa36a21552d8c9c07c2577",
"main.dart.js_238.part.js": "724d5167a1953ef28c9e315d89d0fc47",
"main.dart.js_146.part.js": "0e28e023c26bc03d59024e5e3a48e97a",
"main.dart.js_256.part.js": "1ed0f8e5f536a28f679be2deb2ed0fcb",
"main.dart.js_233.part.js": "07c4b366c0246066f71a49ec3301606f",
"main.dart.js_221.part.js": "407b0fa0e4b427a263b0ed5ac5a0c32f",
"main.dart.js_157.part.js": "826cf03f61ea4d84a25f726ea5759f0e",
"main.dart.js_326.part.js": "9cf421190a3a5bd13f2442df43986fb4",
"main.dart.js": "27d096e6da54c2cdd176059a224ee60c",
"main.dart.js_51.part.js": "5baf68ccd9852e6b4aa12ddcfc04a595",
"main.dart.js_182.part.js": "5464bcd2bd90c0ba7945766396fdfc2f",
"main.dart.js_224.part.js": "3449fcf77edf60938fa66eeff7288d64",
"main.dart.js_6.part.js": "a5a8b0994fa02abe984195ed71be4fcf",
"main.dart.js_204.part.js": "0aaffc067974f894dbf10d0d3aeb6775",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_110.part.js": "8ae65fedd702563da6cf08196542bb88",
"main.dart.js_94.part.js": "7a3ddf4d0f5650df4d3dd22fa7d20027",
"main.dart.js_223.part.js": "5c15beef99bfa669abcaa3597851f976",
"main.dart.js_33.part.js": "6db4a417f431200728907f9e8c2f61ad",
"main.dart.js_80.part.js": "4b5d95b80eb7d16dbc9d3b71daa18478",
"main.dart.js_180.part.js": "d954b504337697f371f1c99861bc623f",
"main.dart.js_236.part.js": "dbdb05d65065ddff48d0b99527c03040",
"main.dart.js_277.part.js": "7b9c92085e2ea9f8cf302f81eb38ec9b",
"main.dart.js_118.part.js": "9919e599d304a35786aece2749ea3706"};
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
