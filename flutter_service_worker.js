'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_290.part.js": "6979e51674d5344a0a0744ab8998216b",
"main.dart.js_81.part.js": "428408e49cb2b317cffb6be0782910ed",
"main.dart.js_177.part.js": "222e485be9b98b2ee2140811a792207a",
"main.dart.js_190.part.js": "fb9802f203cc49ea99e04e2a2c4cbc44",
"main.dart.js_247.part.js": "9470286e1244c1511399d510a6eabb24",
"main.dart.js_154.part.js": "02f76baa1e24c1d4408fae808ec16c6e",
"main.dart.js_87.part.js": "966ceb0b89b78a1b5d28d1392cd57e33",
"main.dart.js_159.part.js": "85ca52543ef310f9e4f7d25114a017e7",
"main.dart.js_36.part.js": "56acdecba6495a93921b9cf9e4f3ea08",
"main.dart.js_194.part.js": "9f2186af5e754c8897a2ca7bac30dfbf",
"main.dart.js_299.part.js": "48f6b7ef3a4fd00a8e4044138b3dd66f",
"main.dart.js_199.part.js": "63a59ddf4b1c1738d222ebd15d747609",
"main.dart.js_138.part.js": "1f57b6482e11b4a77bb738d0af7d73f0",
"main.dart.js_122.part.js": "dfc090d121414677587eaca9986a1616",
"main.dart.js_25.part.js": "3e3bb54593b4e9b4fe923bec9c6d47da",
"main.dart.js_251.part.js": "aedc8019fe4944de460fc3e72e61a7cc",
"main.dart.js_206.part.js": "acc49d0b9ad79e030ae9ca1411613979",
"main.dart.js_249.part.js": "7aa6e87df751b3c7e3e8da7397b4fc1b",
"main.dart.js_61.part.js": "2eaf6c1019eff4c0319737c865747434",
"main.dart.js_148.part.js": "950e5f6a175fea7182003f4cac02c452",
"main.dart.js_14.part.js": "cd33460131035425140dafe67d780ca5",
"main.dart.js_64.part.js": "e31576652822e467e62c9eef61347515",
"main.dart.js_255.part.js": "9f0d3c7bec88aa476c7559991e644850",
"main.dart.js_178.part.js": "bf1f2b263aa71fe3f335df2a96fe68e3",
"main.dart.js_246.part.js": "300b5fa3069fd7ac4e79b3c61c586d3d",
"main.dart.js_167.part.js": "b9fd689301c15f51b8f6d43fd49db3ba",
"main.dart.js_116.part.js": "70f4593f6925705b4da8a2064d33bca8",
"main.dart.js_134.part.js": "2691d1fa5c15a6b73e2b986dcd353400",
"main.dart.js_274.part.js": "5fe3315897b9f9e3d9c1a7c635c04bcb",
"main.dart.js_72.part.js": "43ae839cb4879d1f8e99558fb2de4b7b",
"main.dart.js_219.part.js": "eb25397415149490d69ddf809092a4fd",
"main.dart.js_125.part.js": "411f60efbf21138b2b91afd18dd1f7e5",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_207.part.js": "de80ad0b625d4916e385b1641e47ecd4",
"main.dart.js_38.part.js": "0c6f6acad25844c323ff01488bb203d8",
"main.dart.js_318.part.js": "9b137286544d20f3bb689538bbaece3c",
"main.dart.js_316.part.js": "2dd910313c89401d72b52b38a37cf020",
"main.dart.js_205.part.js": "43ca2279b4bc9d2e0afa4ec2450585f4",
"main.dart.js_276.part.js": "797913620143f4faa26e07cae939748c",
"main.dart.js_220.part.js": "5c2172f82c4d47b5048f93f4d2cb8f47",
"main.dart.js_6.part.js": "e5680964244a171526327bd7d4dfeb86",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"main.dart.js_169.part.js": "e7d93798a84d1f374c01a2ef421c0196",
"main.dart.js_146.part.js": "0bce104b7303ba070b4fde3fc8bf49a5",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_57.part.js": "dea789fdba6506c292244390f3a0e300",
"main.dart.js_264.part.js": "8c5b9dedd59669d0222509dd1b725be5",
"main.dart.js_285.part.js": "145320c5cb736f03da7246e5f3026f60",
"main.dart.js_314.part.js": "8884e5f5e46ac32755380af7b69f371a",
"main.dart.js_307.part.js": "b9edc90875cdad44db1aa1603a7552a2",
"main.dart.js_85.part.js": "99fcbf830af07eb0ba9d91cdfd37f957",
"main.dart.js_200.part.js": "fde9f023bc558ba1a19284ddde9f212d",
"main.dart.js_1.part.js": "ff5485002905470158beec0c035f1914",
"main.dart.js_191.part.js": "6f4ea14fc9e7135185c7c7702c7c0e7e",
"main.dart.js_39.part.js": "dbeb9470914f1250e25643ba9500fb40",
"main.dart.js_8.part.js": "be44b95d918c3700d05fa47d941a6abc",
"main.dart.js_139.part.js": "308f5619f530b0525223eb95f46c2488",
"main.dart.js_140.part.js": "1728e053c4f48b5ba3c468cf8e5ebc46",
"main.dart.js_93.part.js": "aa1229480038f3e7a9edb4eafd9ffc56",
"main.dart.js_275.part.js": "087ba69c389cc4ac579599f729921075",
"main.dart.js_180.part.js": "492ccad68697c9910f1ffbbbc22f5f02",
"main.dart.js_179.part.js": "cac1816bf1724daacdb33e4e2715c1ff",
"main.dart.js_13.part.js": "8a1ea32876c45c810dd254e0020cf9ce",
"main.dart.js_48.part.js": "113c79408c1868aeabbd5501f446b241",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_310.part.js": "50bdcf923b62d64b58a8a1e96969cf81",
"main.dart.js_231.part.js": "f44dcd7d7bff40cbdf280bbe9a9238b6",
"main.dart.js_300.part.js": "f9aa22f14f50bc8936913bedd86c49fa",
"main.dart.js_68.part.js": "3fb5996be01f7d4a49628dff966d5025",
"main.dart.js_269.part.js": "109e51cb1067ca51e878cba900426056",
"main.dart.js_298.part.js": "d41dcce9149719bed91939f1d8084881",
"main.dart.js_174.part.js": "7a67939e47ca0ea6ecb84de805788c49",
"main.dart.js_43.part.js": "7bc96a960557881285f6c272ef8e5a38",
"main.dart.js_59.part.js": "d8248e01e4272253bac6a9262f06bdf8",
"main.dart.js_28.part.js": "225b17ee6f32050047a6e2ef242e3882",
"main.dart.js_303.part.js": "b750396a7017f95f42f00bcf77c3d83b",
"main.dart.js_270.part.js": "8bfb9538523cae850b94a2f4188831f0",
"main.dart.js_286.part.js": "d94a53a87582e87009c65d28c70df57b",
"main.dart.js_312.part.js": "b1efb8fe145512e5dcb4e77c965f5635",
"main.dart.js_35.part.js": "a7907dd8f388a8e0ffbe5e0db4f7825c",
"main.dart.js_75.part.js": "d8278bce87397f7529231503ca91dc8e",
"main.dart.js_11.part.js": "5e40e00cc9a1396d62738ca2da51a402",
"main.dart.js_123.part.js": "8d75d423bf1eeb2feff4487d5dad3d21",
"main.dart.js_252.part.js": "3b2403bba061afb24c4beda18b887f7e",
"main.dart.js_37.part.js": "7634d7dc9e55fc85aa8382f68531ae67",
"main.dart.js_235.part.js": "4ac78dbdb4e31c0fb114bfc5180131aa",
"main.dart.js_168.part.js": "546c0f515090365e70d21f6de5297a48",
"main.dart.js_112.part.js": "78bc74591cb6524453cbd53e611e5c89",
"main.dart.js_313.part.js": "b10a96fac20474a4c19d0994d29b95b3",
"main.dart.js_26.part.js": "5efe301c9268f4f06e795734516ea855",
"main.dart.js_30.part.js": "4ca43a112d78297fcc9b8be224e5a00a",
"main.dart.js_242.part.js": "23d0189d4c628d1dba93ac0e39ff55bd",
"main.dart.js_86.part.js": "80f0845741da7cf312a3989aeb742742",
"main.dart.js_283.part.js": "f8eefd73a6ab9c781a3351db394b94a6",
"main.dart.js_293.part.js": "4f1e5670ae392dd3f7c6949a1c64f182",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_126.part.js": "82e36154502e827cbe60cbc12f44f78b",
"main.dart.js_3.part.js": "0c5df4ac1cee98f300fee366dac9c560",
"main.dart.js_80.part.js": "911d93564f9bb0684a74a126b29834ee",
"main.dart.js_113.part.js": "3182faf621205686bf010ca84ca2f783",
"main.dart.js_277.part.js": "e473944e26eb1ecfd8cb8368cf870b1e",
"main.dart.js_241.part.js": "8d1db591bcffab553576b3c86094f3bd",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_188.part.js": "ec0c7bf6e7d6959eafe6c06ae274d3ab",
"main.dart.js_32.part.js": "d39d61882a398fc4213b83c26272e480",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_4.part.js": "a765cf9d32c92c15aa99a7582fba785e",
"main.dart.js_53.part.js": "bfd46c6c74f504ae30ba68ac75bd24aa",
"main.dart.js_78.part.js": "91bd4e59bb2adb4f9a36a6768233bdef",
"main.dart.js_223.part.js": "1a0444e44b3d9eaefd6674c5cdddcf29",
"main.dart.js_15.part.js": "44f8a7d8a6aa043e48b6b5abdb65e0e6",
"main.dart.js_105.part.js": "e7b56ada8d5dfff436968c7c74cdc4ca",
"main.dart.js_311.part.js": "9fea8c7f768c2a9010b9657f4fd5c403",
"main.dart.js_217.part.js": "aec78bb848dd2972ef0c39c1c12680b0",
"main.dart.js_107.part.js": "a5b93c831bc2d17f8f006e610e9e1f26",
"main.dart.js_248.part.js": "8407bc9cab6fb7f6dc11650e86c8eeb1",
"main.dart.js_45.part.js": "88447560833f8571be2f8ae5d2a79d16",
"main.dart.js_160.part.js": "b79dbbb9ffc62e81b4ba163719f335f5",
"main.dart.js_289.part.js": "9149d743d6cc493c9e81f8c35bc01f4f",
"main.dart.js_96.part.js": "f0f7d4ffd9a4f9d76f60d7c8b209a6ae",
"main.dart.js_147.part.js": "9a4f0a558bcd3a87fd5c216134efadee",
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
"assets/assets/translations/en.json": "f082dab5050cdf2973229cfe0b6c3d7d",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/uk.json": "1794b65021c354763a0a830b83ee3fb1",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/cs.json": "0b6c1e4404da068a9ced90478998bfc4",
"assets/NOTICES": "a7b8f578c50dfe948059051e6983e332",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js_145.part.js": "e94c8b5e468e23e663aa80b49dd134a3",
"main.dart.js_210.part.js": "0c474dc4b56a3d5aa31121d768169e08",
"main.dart.js_141.part.js": "12ecf85c188d9bbb95d6822c9f8bcff4",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_172.part.js": "629cb06bb3ee418a9f9d53000d20bb6f",
"main.dart.js_84.part.js": "882dd51a7e89ac15eb290b22f61def60",
"main.dart.js_82.part.js": "b38a087c1f6cf97328502b704d328917",
"main.dart.js_31.part.js": "a6ed865cac04150e81e9270be0f8b379",
"main.dart.js_115.part.js": "2892b7c160eddfa43d43f74f3611894c",
"main.dart.js_189.part.js": "2d539043946e9b4eb9d1f5afeee993ae",
"main.dart.js_268.part.js": "db2b29cf6dc10c2e91a251c42a408d3d",
"main.dart.js_301.part.js": "133e8b92727c070befa71bdc1fe82609",
"main.dart.js_192.part.js": "d1e867ec99749e3d117d6e624b93f65c",
"main.dart.js_198.part.js": "10c15ab942bbf53e83827a8c3e6438e2",
"main.dart.js_215.part.js": "a92d1db6b286331050a1e4d15b588bfd",
"main.dart.js_193.part.js": "bb96b9e7db84cb7f9470c13e47e3365c",
"main.dart.js_195.part.js": "e08c820d69a97c7e1d3bb429b003eb4e",
"main.dart.js_120.part.js": "2ea079cbba6e1bd40a711311a25b7423",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_106.part.js": "c3b4fb3edea43b3002d33a35e4d60518",
"main.dart.js_152.part.js": "1a682ea348b5db2faa82ec8dd675eade",
"main.dart.js_302.part.js": "754b0bd7bc0de490245b9751eb943328",
"main.dart.js_181.part.js": "db474fd7c14656c56fd2d282304aaff5",
"main.dart.js_51.part.js": "56de29ea48c6eee4ae31494c555949e9",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_237.part.js": "72918ad06bc0c3854915ecf28cf778e4",
"main.dart.js_173.part.js": "65ad75d10e77fa909260a165427beaa6",
"main.dart.js_170.part.js": "c2482fbacf1719b69d24a97bd3813070",
"main.dart.js_34.part.js": "f156ec8bb68d34c3bb0bfebd93b1b934",
"main.dart.js_24.part.js": "756eb691a1f9a25cdd5c29d60caa890a",
"main.dart.js_18.part.js": "0efdf293d7b3982b5394e61b91679c44",
"main.dart.js_2.part.js": "feaf5accb0c273fd051d9cf4bd3e0351",
"main.dart.js_69.part.js": "2f536e802f8ca414cb786f2bdc9332e3",
"main.dart.js_70.part.js": "37957bd24f87c4c5ea77ee0364d3c3d6",
"main.dart.js_88.part.js": "5bb0c1d52fb9129a04618b41973ed77e",
"main.dart.js_27.part.js": "d8995d3fbb207cc319538848eb68d115",
"main.dart.js_238.part.js": "70bd43d56a99a8eeaffe0f72480ee636",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "f1c202b6c0ea2f0acc892eac839a8f34",
"main.dart.js_244.part.js": "ec0315f97cc6cb144b9c74d8f2223cab",
"main.dart.js_137.part.js": "3a97138762e46ac4a8ac121d638ea171",
"main.dart.js_99.part.js": "0afe0be7d5b72353507ee6e67e56b68a",
"main.dart.js_44.part.js": "33254e39660fa0d4d675aa0c73573c66",
"main.dart.js_114.part.js": "1472a4ebbc20bb707cb25eedf352c06d",
"main.dart.js_10.part.js": "92fd1001bd18aec33d7709b76d78da8c",
"main.dart.js_56.part.js": "88964a0e391ae0442568b8bb0bdbd5dd",
"main.dart.js_183.part.js": "2008609a15c239c0b18874c6fcf8c0a6",
"main.dart.js_129.part.js": "f40ba5df9955c08038d329f136b946aa",
"main.dart.js_5.part.js": "5bc4690d80e01c309ec46f0345b03113",
"main.dart.js_76.part.js": "58beaa88e6d0419100c95d63bb69122e",
"main.dart.js_265.part.js": "5ea86f23100d958694141600abba86ef",
"main.dart.js_7.part.js": "7ce5df6bb76ce64458681e61eada286b",
"main.dart.js_16.part.js": "8e32f555ac34e958e9a7832bda349275",
"main.dart.js_294.part.js": "aff0668f2f9ab896cfd3cbe09fd172e7",
"main.dart.js_236.part.js": "e5c087588170ffa6614fffc8a0c035c9",
"main.dart.js_259.part.js": "4aeaeb469cd1669ca79b364b04f75989",
"main.dart.js_90.part.js": "670ab43bd2f4e167abafdc1d738cea5f",
"main.dart.js_260.part.js": "dedacfc15735243283eca4405d8bdcdf",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_317.part.js": "2dcc59634a4e16f5efe9d8e4a3871e77",
"version.json": "ce222a816317ab370de74518f244cfd5",
"main.dart.js_153.part.js": "ed43a3c495a76f60d2595937ada54366",
"flutter_bootstrap.js": "e517bd8a4675eb4a938e75cd12a7585d",
"main.dart.js_176.part.js": "5a9ca327c23eccb3302cb62d183ec5af",
"main.dart.js_245.part.js": "24328ace049fbe29194eadbdbf3a6e70",
"main.dart.js_306.part.js": "7903afa92ccdb314a87343282d2d7566",
"main.dart.js_209.part.js": "8b5d4fc604004af31e7e7e5f6e40ac1c",
"main.dart.js_224.part.js": "a30453b585b0eeb53822c69e83bfc86c",
"main.dart.js_150.part.js": "66ea4bd40f5f8f2ecacb8e7986fdb3cb",
"main.dart.js_33.part.js": "b2e44985861421347154a68b00ab8677",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_9.part.js": "4ecbb44888ea85101ff767d24bf72ba4",
"main.dart.js_155.part.js": "44b7899cbdd57e25f87de0a7a7f50ae3",
"main.dart.js_309.part.js": "b559f6d7be657fda3bd212d6daffa72f",
"main.dart.js_239.part.js": "a78555b72a2ea07dd00f2cada494a573",
"main.dart.js_284.part.js": "a0792d30e790a8add736a6b51b9fbc4d",
"main.dart.js_214.part.js": "e42923785b6116fdab44ed38ab23ab09",
"main.dart.js_42.part.js": "3beadb06ba8fc81eec47fc1779e94ee2",
"main.dart.js_111.part.js": "fe6f88fa7527f01e4f8293f39905f055",
"main.dart.js_218.part.js": "5349f16f32153474a775b972b4208cd5",
"main.dart.js_127.part.js": "d66501d887038a6fc0d5116732712214",
"main.dart.js_291.part.js": "637ac2c49683f6b5e79c53201349c844",
"main.dart.js_98.part.js": "a473392c604341a2c6119e42e28d124e",
"main.dart.js_258.part.js": "74f334c25b4c939a5661e3faf5a34ed3",
"main.dart.js_163.part.js": "fbc129ea018be4d23367def234d9024e",
"main.dart.js_287.part.js": "69c9d3772ecebac4421cf490907555b9",
"main.dart.js_161.part.js": "ba50fa0b077530c63bbe6ebe6ee68e4f",
"main.dart.js_49.part.js": "b29d0fd79a032150c035451afe3a6a46",
"main.dart.js_22.part.js": "b85cc30e16f4ddcb0393fb8da0ed241c",
"main.dart.js_308.part.js": "eee798abd5bd56031d0c2f6db47f50a8",
"main.dart.js_233.part.js": "17cd32e46187d51549a747c0b0e53cca",
"main.dart.js_212.part.js": "81b6adebc856b4d69d10b6525727df7c",
"main.dart.js_136.part.js": "da7d701f33f48a2a934f9d8bac9351a2",
"main.dart.js_131.part.js": "f67b6a3ed9d1b9ab6328cab1d32d6cea",
"main.dart.js_279.part.js": "b906c60baf149d6ae6d0308277bd6317",
"main.dart.js_12.part.js": "01f2756a433ffa41e4e55b45342b40c1",
"main.dart.js_62.part.js": "3cc7d922d7d3f26cc50a7eb064acae6d",
"main.dart.js_91.part.js": "5d2a80efce63a674db20c3b1d7e3023c",
"main.dart.js_232.part.js": "d2ae67b34ef3fa29f88f1ffa1de13747",
"main.dart.js_273.part.js": "74d02698345a1b2ae67b1e3ab2df3bae",
"main.dart.js_104.part.js": "8c401635a930200700e1651a4b93b3d4",
"main.dart.js_71.part.js": "3eda6276e503dd7889300eefcfd2c4b3",
"main.dart.js_296.part.js": "12f0d89b02ed0996102bb2c390d34c50",
"main.dart.js_50.part.js": "0c3d0742bbccb603226878abfecf08a2",
"main.dart.js_97.part.js": "bd787827713f6d98c0f74e4564f0cc67",
"main.dart.js_278.part.js": "495090c596f68ac778c9f64206b71e63",
"main.dart.js_305.part.js": "959c5e89b441e73ba57e45bec2195df9",
"main.dart.js_89.part.js": "026a8496217c65f75e2755b4ba3d831e",
"main.dart.js_117.part.js": "426c6c3267350b890e5a6d471192a9cb",
"main.dart.js_292.part.js": "d3b6cf689b650c0afee508afcc2db17e",
"main.dart.js_108.part.js": "e6faeeabf4eabb245da8f3d49842c383",
"main.dart.js_295.part.js": "c061e152f90bdc14b339f58e94220f65",
"main.dart.js_221.part.js": "6be234fbb45cefed666b686d8005fbde",
"main.dart.js_47.part.js": "460258bcfcc452507025869fde1f89ed",
"main.dart.js_142.part.js": "b75f3e741d3d3a3594253fdbaed93b76",
"main.dart.js_55.part.js": "6f191a72ca79c1307b57027a4649ab58",
"main.dart.js": "3450f3a6d90187c15a2c31782faeb084",
"main.dart.js_280.part.js": "426630020cdb38645d7683282966ff7e",
"main.dart.js_202.part.js": "b5f49c8e2fb5d37e88582eea43cfc755",
"main.dart.js_266.part.js": "10528ddbeb0b6afc5666c8e21f5d01b5",
"main.dart.js_261.part.js": "0f8b178e871abae4b3e2432f2464503a",
"main.dart.js_130.part.js": "3a730ba1c146e81e43364989a0b87ac0",
"main.dart.js_41.part.js": "1c5bb2b5be0f65b40390fea75209ee20",
"main.dart.js_29.part.js": "a46752977b10be87c90f93300a0a9f96",
"main.dart.js_254.part.js": "d593e5c03914885662920ab8f30e5f07",
"main.dart.js_58.part.js": "a17603972c9317dd456d99d0dffb12a0",
"main.dart.js_73.part.js": "2b1e3d7142f776ef1b5d3e6033246466",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_186.part.js": "20b213b5619048c917eea41ac32c43d7",
"main.dart.js_271.part.js": "b2730102921605cf9ecd04cde79fb269",
"main.dart.js_151.part.js": "36515dd47d7df8b96e060e4811bf2e46",
"main.dart.js_74.part.js": "eb5397f7b7e5ee0e67fc242d1f420550",
"main.dart.js_165.part.js": "6359c6e9a7011dc88c5e2dc6c7f6063d",
"main.dart.js_263.part.js": "3a7b50d65486ea58d9899a29fbabc46b",
"main.dart.js_100.part.js": "076072bd8852334fa14aac9ad3aa74bc",
"main.dart.js_101.part.js": "c2ec7491e64c9371d66444a768fa037f",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_281.part.js": "26a407e28af8952b28bd875e2eea6289",
"main.dart.js_185.part.js": "9c59e4d7fc2edaa64d13dcd4f037f6e0",
"main.dart.js_250.part.js": "7d1456b3e4ab2c19204c5df5d1c52cd4",
"main.dart.js_102.part.js": "f0298a8bd65d6a3085df8e572fbf1a5f",
"main.dart.js_216.part.js": "d1757f48b4b702a351a385a2c3baf807",
"main.dart.js_119.part.js": "bd8552735bc2d5875e98ce6a6a1a3b33",
"main.dart.js_225.part.js": "763107a5866e4a69ed5c7c2fa34c71ed",
"main.dart.js_171.part.js": "1a90f9537c1d92eb882bd3a7d2565f7c",
"main.dart.js_162.part.js": "b2f8c09861b76dcdde2766e10c7d48e7",
"main.dart.js_77.part.js": "b3e0117f130d1844448a1019c0cbd0c8"};
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
