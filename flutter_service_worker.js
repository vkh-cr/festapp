'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_104.part.js": "d857f8ad40318cb3918054590fe7291a",
"main.dart.js_37.part.js": "7f81c46794fd29d5baa34f93ccc9d5d8",
"main.dart.js_3.part.js": "341f48a1961d1ab8f24a8160969f1667",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"main.dart.js_208.part.js": "5546f2ffcf5179dc6f197d30f637f93b",
"main.dart.js_207.part.js": "70c75abd4faced767c4b35c246741b93",
"main.dart.js_185.part.js": "deed601614dacfadc58c72dadc6153fd",
"main.dart.js_65.part.js": "27c9702ba982608bb5485d5b29721f0c",
"main.dart.js_282.part.js": "c3c49dddef88debfff07fa2f47b9b7c8",
"main.dart.js_308.part.js": "f8db0a7ac1674a8d7292b617181cbcd1",
"main.dart.js_167.part.js": "c685d8d4ce1d0423d112052722434d72",
"main.dart.js_88.part.js": "13da3477d3272e049b02e4721a4edf14",
"main.dart.js_105.part.js": "a054453b5b763cd55f93c5c22a8fcfdb",
"main.dart.js_259.part.js": "33a77159baafbd056cbfb18688dae5c8",
"main.dart.js_148.part.js": "1bd463a601edfc78416482bfe998010b",
"main.dart.js_243.part.js": "926f5851cda620d559a6cd15bcb3a231",
"main.dart.js_76.part.js": "309f30e4f6678c6369312a0cffebcaa8",
"main.dart.js_137.part.js": "9b35a1566727e66bd50b322aea208676",
"main.dart.js_101.part.js": "b81ae623b6a99dbe4c807caafd5727ae",
"main.dart.js_297.part.js": "091b342235e3a7bca9d9dfe4399ac333",
"main.dart.js_1.part.js": "c31d15dd636e2950d43d9f8bb94a8d50",
"main.dart.js_260.part.js": "ccaa2b4f0462584f23a333faefdcc70b",
"main.dart.js_173.part.js": "7946b139321cc536d01262dcfe69bc31",
"main.dart.js_92.part.js": "390741f05e8dea608c6e975e778e6adf",
"main.dart.js_55.part.js": "8d6f9d50df4159e1f7265b586768c8de",
"main.dart.js_87.part.js": "7dbe45f6d65bc53cc1c93b7b93f60ad8",
"main.dart.js_199.part.js": "a88e81f1930de243a4a6a246058b1d52",
"main.dart.js_63.part.js": "9820d13b3575ce807e7249013698b093",
"main.dart.js_27.part.js": "233bbc897bfceac8524c9558439c801c",
"main.dart.js_36.part.js": "72e080f8139c3c43a84dddeca3661379",
"main.dart.js_245.part.js": "21c347f90f57735902d3e0aefc84e943",
"main.dart.js_250.part.js": "1858197bcef028814c1eadc12f13e76b",
"main.dart.js_13.part.js": "ccd09a16122840c3558e80da692df74b",
"main.dart.js_136.part.js": "b6997132a398fdf0c1baf3f0063de175",
"main.dart.js_311.part.js": "1a7ca7b15906b4db07aad2226aa3df2f",
"main.dart.js_220.part.js": "a6b0f15eb1f35eb5bf887a0c16a31b4d",
"main.dart.js_77.part.js": "14acf84b70f27ded0abd4a6be01bca9b",
"main.dart.js_106.part.js": "b25abf7308dc2c3c433096895d688146",
"main.dart.js_14.part.js": "98e478f6e99c3467b9dd5c45c5d7c7c3",
"main.dart.js_39.part.js": "f92f1d5e1276c85488c4e3aa355eaef1",
"main.dart.js_61.part.js": "c41ecf089356dff347798b3f41a02ecf",
"main.dart.js_48.part.js": "b4212bb4c102d5e070af7f0d1b1ccf52",
"main.dart.js_19.part.js": "dd98acec3fefed79ccfad2ba1535c9ac",
"main.dart.js_132.part.js": "df7b2a6cfa912a462bc43cb0f9eaf97f",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_280.part.js": "4dbc006470e9fee16379392bc79b9729",
"main.dart.js_73.part.js": "cbeb184650d9a26204b72879a33351d7",
"main.dart.js_30.part.js": "6c56377878c296fa121200363c9ea85d",
"main.dart.js_295.part.js": "5ac35722c51151544bbefa33adcf45bf",
"main.dart.js_140.part.js": "537c6e12689f5e2bccab41ca906fc7f9",
"main.dart.js_117.part.js": "652d61ccaece66ae38d73bb3ab9604fd",
"main.dart.js_11.part.js": "70118e14ab94d9a1413aa50ea8f57201",
"main.dart.js_126.part.js": "f9e937138c31ee2738131a616683e6c2",
"main.dart.js_100.part.js": "cb35341ba17b3f224b115722e67770e6",
"main.dart.js_211.part.js": "dae1c38dc757304b22af925e0806cd23",
"main.dart.js_266.part.js": "892117de3b01e6001d128acba2953983",
"main.dart.js_130.part.js": "4f534ea392e7e259a53eb4cfa775a278",
"main.dart.js_156.part.js": "13f1ac35c8a8297308c100bddaa83560",
"main.dart.js_184.part.js": "cb2bf28285a904dc282bb9c0bb268985",
"main.dart.js_234.part.js": "4787bb8e1c5092294dfca877a031805f",
"main.dart.js_71.part.js": "aa6339788f9315f11025204577637fb2",
"main.dart.js_161.part.js": "4f32944a495531b1fe52564cb657510d",
"main.dart.js_42.part.js": "4a5557cfdccd3b674e11c601718cf883",
"main.dart.js_45.part.js": "2357f52b4c5aaaca02819cdcc3a5bbf8",
"main.dart.js_246.part.js": "37d168ba08866e5e9ee77fbdc4d26c0d",
"index.html": "6bc34404adf03a33f145435bda008f64",
"/": "6bc34404adf03a33f145435bda008f64",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_251.part.js": "272ed0134b665ebe11941045260c0546",
"main.dart.js_35.part.js": "6eba4ad8ab35a9e5ed179f4f9db3077b",
"main.dart.js_102.part.js": "2edb2d52b7b46aa585029db91219b8e9",
"main.dart.js_302.part.js": "7378a5b76f0c136fbf438a64371038de",
"main.dart.js_79.part.js": "f5cdd2462af041e1cc7d6c11b2ff1607",
"main.dart.js_217.part.js": "ab30d47abb03f40a58384baa6b7ab290",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_241.part.js": "c25783b70cb68a0eb89fbdcf42e70115",
"main.dart.js_95.part.js": "343f20f87e510cd23fe8c0ec15f010b9",
"main.dart.js_119.part.js": "67749a453dc9e51e970afd43f7ab151f",
"main.dart.js_305.part.js": "012a9f0b6afe88eb499b879caff471c6",
"main.dart.js_258.part.js": "8504bb68620ce68cf514fdec99a29bc7",
"main.dart.js_10.part.js": "ddb5c603030dda4d14c6289c1d2f92e1",
"main.dart.js_168.part.js": "f920c3dfd13ecf1e562cdd354dbcdf45",
"main.dart.js_244.part.js": "0735ff84b591649d5fe165e8079638eb",
"main.dart.js_98.part.js": "07133a14d6450c32f9d91c038698e3c7",
"main.dart.js_242.part.js": "3b8f6b971e5bcc8dd41de6ce684f75c6",
"main.dart.js_151.part.js": "1e53088008d2b499a9fc17a15acee450",
"main.dart.js_78.part.js": "4d8ae7429eb9422a418fed3b40b51e9b",
"main.dart.js_75.part.js": "a0ce367e479b693014a7bebe08332113",
"main.dart.js_122.part.js": "57971027992499c3f09b899010c387ab",
"main.dart.js_294.part.js": "588c7f881de774426c7ac11b643d3211",
"main.dart.js_177.part.js": "23beff8bfcaf72538f0212929d80749a",
"main.dart.js_265.part.js": "49e34661f3a533a8510c6226cdfb9333",
"main.dart.js_134.part.js": "6230c1e409d3f9d73d1faebe2ba5aae6",
"main.dart.js_149.part.js": "154a66342d527d83e7313bac7b2760b4",
"main.dart.js_261.part.js": "b7b8fd401c8405d1c8583ce92ef64335",
"main.dart.js_57.part.js": "9da73b6043ff7005183fabff88b549be",
"main.dart.js_114.part.js": "b16065529c5c4c678fff439c9d5c1d5d",
"main.dart.js_34.part.js": "c7733522f51dfa23224e227fa439e161",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_262.part.js": "878a1b98644d36e6ba8987ea5fc66fae",
"main.dart.js_299.part.js": "ec935a935dc84b936565e0f06f78ae5b",
"main.dart.js_138.part.js": "eec5335310c8489b85bfbd952ea30778",
"main.dart.js_263.part.js": "597d65eca92c807a040c8425a1fdcbf0",
"main.dart.js_179.part.js": "5161c144919af8de89cafb9b04da603a",
"main.dart.js_301.part.js": "fcbdcbf95d81b6019290880e7e762873",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/translations/en.json": "c4413e47e7b484f1d349a56f01c9403a",
"assets/assets/translations/uk.json": "2c47c07e477e41bd60b4d3a1ed68f522",
"assets/assets/translations/de.json": "e0ddac5bd3ec3cbd16695dff2027494e",
"assets/assets/translations/pl.json": "24082b33bb473455d844eeb9d5352f38",
"assets/assets/translations/cs.json": "5196331ff573491bd745f51eee0e9c65",
"assets/assets/translations/sk.json": "9e70dc0dcb59dfff98ca64901e22634b",
"assets/fonts/MaterialIcons-Regular.otf": "f690bae0f7a42901a902b7a09f4569c0",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/NOTICES": "71ec56543e96b56203a878347fd810e8",
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
"main.dart.js_210.part.js": "e701cc3705dc30b71d263096d9b5399c",
"main.dart.js_69.part.js": "6272f8247f878b93f3a5251eb7c14634",
"main.dart.js_107.part.js": "f1b73f4f4c7ee2b7f3396af4404e19e3",
"main.dart.js_190.part.js": "a2f9716202175f092a15423602b954d4",
"main.dart.js_240.part.js": "c8bb6f0928e371786726a17e8b932626",
"main.dart.js_164.part.js": "e23398dd1604ce20244ed2b09bed4c36",
"main.dart.js_89.part.js": "985a8948dfabd0a5541d2863a49ef28e",
"main.dart.js_72.part.js": "a2f20024b16a5d6d3b140eebf2bf5bb7",
"main.dart.js_44.part.js": "1f172ae4b3a71a76a5db665fd572ca82",
"main.dart.js_32.part.js": "5709b9ba232a3aabda43297569320fdc",
"main.dart.js_31.part.js": "2ad079c863039b2e95d6b54a5a3d9c94",
"main.dart.js_247.part.js": "2d5b1c411cf530a4a83f105344802c2c",
"main.dart.js_5.part.js": "275114f1390f93da5d8793665c566b79",
"main.dart.js_254.part.js": "16da147ad9dcab55918e874640980ade",
"main.dart.js_292.part.js": "6435b0b42df487892bb2ec62f9e8be52",
"main.dart.js_284.part.js": "ef57155f048af9aec9b44e44ff083c7a",
"main.dart.js_16.part.js": "70b1ab36da1be4a9137d5091bb6e3400",
"main.dart.js_50.part.js": "911f692c09f777ec6d775d354254a3f1",
"main.dart.js_296.part.js": "78a420bef7225753c01a2656dc195e23",
"main.dart.js_103.part.js": "cdd8903e67622b3d2b20828aaa6fde6a",
"main.dart.js_209.part.js": "c249dde37817464257fa93ac43282913",
"main.dart.js_278.part.js": "0926e651bd71059bd924f21f667e5432",
"main.dart.js_239.part.js": "9d98c6915eb2ad533d0790d2f3c27d55",
"main.dart.js_205.part.js": "8997102cb1611a3167c7c1b1d8c630b1",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_188.part.js": "c5db85d5355a7a0e973654c80c0c3e94",
"main.dart.js_144.part.js": "6a33f7a1f56e5db05cc066b85480ebf9",
"main.dart.js_152.part.js": "6adb2cce55aea134472c456aa74202cb",
"main.dart.js_202.part.js": "0543d434118be22d959eed0bedff66f2",
"main.dart.js_286.part.js": "55fcb10b76e60d4b3e7d651e660b01d7",
"main.dart.js_54.part.js": "a395d6496a15af6a4bbe4d56d7035e7d",
"main.dart.js_52.part.js": "6eafc7e22905988283e63fdeaa185114",
"main.dart.js_198.part.js": "a431edfd05b2e825d4eca73b015652a7",
"main.dart.js_196.part.js": "b5a9c785e5c0d86c7b669df4e54fbf75",
"main.dart.js_303.part.js": "e6da703c7adc671a27c5d8cc559397d5",
"main.dart.js_141.part.js": "ee4eee396985d781cbeef0dea432f9d7",
"main.dart.js_192.part.js": "51b7e5c948e64b96dacbe9ae1061f647",
"main.dart.js_287.part.js": "2ef64c68e75cb99fc6b65ee4a096f5d9",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_7.part.js": "6b4f5b7617cabe33b6eb97acf22952fd",
"main.dart.js_23.part.js": "fbc2566f83390628db9748ac6b74b2ef",
"main.dart.js_154.part.js": "7d3a6044ed3bed87d0d9f7ce9926e9cf",
"main.dart.js_68.part.js": "9284234b644f18eecf2ba72299fe2bac",
"main.dart.js_252.part.js": "81d08a10c85cc8dfa06a442cf6255a77",
"main.dart.js_257.part.js": "5ce24b230dc80930f0b6575e3b241cc4",
"main.dart.js_49.part.js": "dcdf18c6164367c92ec9360086ae66b9",
"main.dart.js_290.part.js": "242aea2a6daa10e00305440b435621c3",
"main.dart.js_212.part.js": "ae5b103ecd034036dfc383d6d9134cbe",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_213.part.js": "a11b045a41d15edac7daec5a819aeb86",
"main.dart.js_43.part.js": "aa534120d0a2220f3e62fe270ce197d8",
"main.dart.js_249.part.js": "a702ad50be4e2058b1f93cf2924e91ef",
"main.dart.js_131.part.js": "c346b454e3d0eac3b7ac7dc1781e28fd",
"main.dart.js_269.part.js": "debad7a3a39398f75d071da667969e17",
"main.dart.js_267.part.js": "4e315c31bc6ae624dbb941df1b6244e3",
"main.dart.js_67.part.js": "55b3b045462e3f74876d369a767de39b",
"main.dart.js_8.part.js": "9d1e72dfa62d7f7d7e05e8ee0f23f51a",
"main.dart.js_21.part.js": "5a012139cc8ea682b714459aa63448db",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_123.part.js": "1ce4720061bb1a37b4cfb698bc20bb63",
"main.dart.js_309.part.js": "39ad82982276e196bfb56f5094bb6ebb",
"main.dart.js_194.part.js": "e1c6aeb362d78fc86e87c9c1662ff1d9",
"main.dart.js_93.part.js": "e5a9d3e86f4859fe556031c320b31d94",
"main.dart.js_186.part.js": "1c48b59fc94d07c4693de22b19b426e1",
"main.dart.js_298.part.js": "918d2a849f0da9b688112c23a442deb8",
"main.dart.js_66.part.js": "b060f9ac820431d7cc21955e54c3ec93",
"main.dart.js_64.part.js": "770b7663a00dd7b0a367e3289d9ccc70",
"main.dart.js_176.part.js": "17e7546f6a3cc96f1e4711ee1a9ff9ba",
"main.dart.js_285.part.js": "74faa4123189720523147eac5f780653",
"main.dart.js_270.part.js": "0d4c5a3cea5b0118840f9c533f602533",
"main.dart.js_70.part.js": "10c415bcfe1064ea257a8db5bfbaf597",
"main.dart.js_46.part.js": "ae931225dfc7dc9f204355ca80c55c53",
"main.dart.js_40.part.js": "3686a1abb9973ef2ea96ab005fa27f5d",
"main.dart.js_273.part.js": "3a7a1879ca5b02ee6d50835693260cae",
"main.dart.js_22.part.js": "21d7195b5efd069b4d25f765efaf1c23",
"main.dart.js_163.part.js": "b1cad92fa4c6f6b59c0fc2d2a129026a",
"main.dart.js_166.part.js": "08040f43015286cef51707dde25ea755",
"main.dart.js_235.part.js": "7d84a06ce72b10157a1740f1c9fa62d2",
"main.dart.js_268.part.js": "1eb4e5db4206c7a7af50dec0274d10ce",
"main.dart.js_197.part.js": "a88d89624021553dc4109f8792f4dd62",
"main.dart.js_172.part.js": "ae1b4ed20142b40b66587fffa4185bd6",
"main.dart.js_4.part.js": "b17477822e338322a5c785d6f9665b5e",
"main.dart.js_85.part.js": "384c1bcb56665a88d6287786d7c22317",
"main.dart.js_150.part.js": "5c6bf5a3bcc4f09d55350007c6c6af1f",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_128.part.js": "992075d278f405952845f8fcf5728e9d",
"main.dart.js_183.part.js": "6778687dd8ccb45f7078db1c4e11da99",
"main.dart.js_109.part.js": "fa131f618708cebee9e8a84744425690",
"main.dart.js_147.part.js": "e20de400ae343f192aaa478edfc8b8a3",
"main.dart.js_25.part.js": "51644c667c7f34ad5f125920939ba470",
"main.dart.js_200.part.js": "1a54c89da8d6b62a8f7d048d13b2f3d7",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_90.part.js": "9ecf3ecf6198ac12298c882de87dbaee",
"main.dart.js_281.part.js": "136cf5399ae0d2e4ee358b31fcb0240e",
"main.dart.js_175.part.js": "70a33d9e593db571863d1218177798eb",
"main.dart.js_28.part.js": "0a804f3c5ceb8adef298e92cf6aa5b35",
"main.dart.js_288.part.js": "983afc06df0530cb1121875dc983c0a0",
"main.dart.js_62.part.js": "f256c10fd71f7b3359600d67f639e278",
"main.dart.js_206.part.js": "3fa301645971002efbfaaa5c938ee3b9",
"main.dart.js_29.part.js": "7b5b2371ac2729805df38406e563eea7",
"main.dart.js_307.part.js": "5d0fb017a9a6b56636e436e2b41947d4",
"main.dart.js_129.part.js": "91d1a88365456451faa7a3579d091c1a",
"main.dart.js_279.part.js": "cc87c08a8d8426aa0f6cc000ec04c8dd",
"main.dart.js_127.part.js": "812f03361f02bfd26f5c9854e534250f",
"main.dart.js_216.part.js": "3ce8f28e6fbf690dff62bf7a1fff0c1b",
"main.dart.js_133.part.js": "c0d139ba2aee3e00fed91e12f56c90b4",
"main.dart.js_165.part.js": "7a4d61950bc2de7bd79b21fc2e6b5c74",
"main.dart.js_24.part.js": "5ac486181ee4a7225952b9155df04675",
"main.dart.js_215.part.js": "5a779075569b8a32340046630aab9b14",
"main.dart.js_253.part.js": "e8939432e6b0604ecf3b5ef558d63c4b",
"main.dart.js_145.part.js": "66e2da74e791b4a7dc7c838a1e336545",
"main.dart.js_227.part.js": "8958cc39babee9bf0f411af0717f932c",
"main.dart.js_171.part.js": "4e262211f42e632c3e9411ab702196ca",
"main.dart.js_218.part.js": "926da1c277ed48c50f3e2d5432bb4100",
"main.dart.js_121.part.js": "5517e2b688f6a105b2c1e374dd07d152",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_108.part.js": "582c97c56113485a2c31aef34ad09266",
"main.dart.js_203.part.js": "f378a8dc6644f08e1cdddcc406a8edc0",
"main.dart.js_12.part.js": "c2f8d7058ca4690fdd51d67211743833",
"main.dart.js_289.part.js": "e47a9dfa62d300bea01bb2161ff488d4",
"main.dart.js_139.part.js": "1eca6f6e6a947636c5b8caac2b26a3e9",
"main.dart.js_38.part.js": "fb3b904c73a762a927244d4cb245148e",
"main.dart.js_83.part.js": "bff88f1fe8d8100b355548306a71ca4b",
"main.dart.js_193.part.js": "f1e6158deaa42a072d24e52e1f7fb1af",
"main.dart.js_219.part.js": "a346c3e219d517f4e9e27876fc0e35d2",
"flutter_bootstrap.js": "b3841239b83b7e4d280bedc8e68acc12",
"main.dart.js_143.part.js": "b21a422ea70dbacf7606aef9b5672ff9",
"main.dart.js_15.part.js": "a10ec5be9fb42bf3d0efc3aef1814696",
"main.dart.js_9.part.js": "2c06ddc95ff3de92f14ecd17bcc5355c",
"main.dart.js_189.part.js": "a1c8ca833d09d589b99f9dccfc930615",
"main.dart.js_26.part.js": "820921a34468a01a552fd5fd6cfc68ae",
"main.dart.js_304.part.js": "a2e4e150d9afe14f8eebbfc86b9c39bf",
"main.dart.js_264.part.js": "bd0fc3e05c5ca64e43e51dc00fbe99c1",
"main.dart.js_306.part.js": "9b891bb5cc972d3ecdc758b42ee76d92",
"main.dart.js_276.part.js": "f9b43c175615d2e7beed4200c2588000",
"main.dart.js_178.part.js": "d751e34621e3574812ea31354c222a54",
"version.json": "f13f29c583e95af49ec215aa517e55c4",
"main.dart.js_225.part.js": "5bbf1fb4d06a9b78cad7a196402a3393",
"main.dart.js_293.part.js": "17ac704652ac7d03cc4dcadfdb6a450d",
"main.dart.js_310.part.js": "a41c8fc385aff812df080dbefa65aa74",
"main.dart.js_146.part.js": "ec1973503ad8ff9320ff04116eeab99b",
"main.dart.js_256.part.js": "4e52bfb067ac7c7d10f4c44c29bf3da7",
"main.dart.js_221.part.js": "59f379a245139dbc6e4aa55b44a48f0b",
"main.dart.js_115.part.js": "34eeae6cfdbd287c84310e47ed86734e",
"main.dart.js_157.part.js": "9cc7f434b7807caa79b1e40fc720ea1e",
"main.dart.js": "b913ce840fce10c532f64af4a249755f",
"main.dart.js_159.part.js": "68d1e4d851569094c3c2897e8aac688c",
"main.dart.js_51.part.js": "0eae7bb3555b63918b9824a52f0fbcfc",
"main.dart.js_224.part.js": "e67b54ab322b7e13c10b90999975db08",
"main.dart.js_6.part.js": "d90041e2dc7a62bf72a2a49e497b9fa6",
"main.dart.js_204.part.js": "a8668b2d666da549363add0d134fddb3",
"main.dart.js_272.part.js": "5365de8cbc988a74f6fb3dfca8d9ea18",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_94.part.js": "2c04e2e3191e24ba46362a1213866f32",
"main.dart.js_99.part.js": "7f472a495e3353d26e98f94216cd7974",
"main.dart.js_223.part.js": "0cc64af8d1b99f34c3d6f8723c7d9d15",
"main.dart.js_17.part.js": "7bdd4afafd8059e1f918db04b39285ad",
"main.dart.js_153.part.js": "9bfbab21daafadde69421aa125bfe2b5",
"main.dart.js_86.part.js": "575d2b6bf415e84f00d67ef7f781d67a",
"main.dart.js_33.part.js": "9261cb52df7209ff9ca2e4e7ec0d47c5",
"main.dart.js_226.part.js": "d74062b755c0a1f5527f7d7a8c162f2e",
"main.dart.js_80.part.js": "ede549785d95ded4ff997d03fe760ace",
"main.dart.js_180.part.js": "5b854d063641fa111b30f603322b62dc",
"main.dart.js_236.part.js": "34b41d7bceb1e0d4d8fe8e1d41b43bad",
"main.dart.js_277.part.js": "907d84265c6d2b7abddb0cf892329a04",
"main.dart.js_118.part.js": "2cff3c11ec846b2c823633623bda1506"};
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
