'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_104.part.js": "75cd913bd868f9ce090b1cbf8578e12e",
"main.dart.js_113.part.js": "80eb0c27eb3196937296bd648a28067a",
"main.dart.js_37.part.js": "eef3d734f8d5bdcc0da093b33bbc0461",
"main.dart.js_3.part.js": "f7148683426a5a908f9cc555d49418ff",
"main.dart.js_291.part.js": "3ac841acb358f07a0d9690a855ce73bf",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"main.dart.js_208.part.js": "52becdfd74ecfa3e063b11fb717932d5",
"main.dart.js_207.part.js": "1400d0f098bbafe5f282dfd1fbf3c2a7",
"main.dart.js_185.part.js": "797025b8dab6ae95b4108171482e5fd5",
"main.dart.js_135.part.js": "9f3c4feb95488394f2cffc7a09088f04",
"main.dart.js_65.part.js": "d2a30d2a14203e0f1c215790560d0491",
"main.dart.js_308.part.js": "a95b2ad0d2486b539ebd32f64f9e0d71",
"main.dart.js_167.part.js": "31557e5adf29ddda1ea240e8985038e5",
"main.dart.js_271.part.js": "33e1dafbf0a8b61a67c09ac6befb30e3",
"main.dart.js_201.part.js": "7b5c9276ecc7bf475475ef5768e06265",
"main.dart.js_88.part.js": "46bbbeafb6e56e3815f1ce7f4010459c",
"main.dart.js_105.part.js": "94f9a80dd30fa5a03632615755460f45",
"main.dart.js_259.part.js": "84b68cb90aa7470a3250953827e2cd0a",
"main.dart.js_148.part.js": "1b2ad45aed2b80d922a7f49986c3d11e",
"main.dart.js_120.part.js": "e651b8118706e87f6818f76c8973a7a8",
"main.dart.js_243.part.js": "1a387364342841ceb1b8017ba4508546",
"main.dart.js_76.part.js": "7003ed03ad2e40240cfafceb4fcbf4f7",
"main.dart.js_137.part.js": "4b45096f420573bb71379a443e1090b8",
"main.dart.js_101.part.js": "e3a6bbb2338c41f34e34db9d6f8efe72",
"main.dart.js_297.part.js": "26556c97ec313795f0d475141a9f9101",
"main.dart.js_1.part.js": "aadcf9b6a1c0b8746bed1b1de02319cd",
"main.dart.js_260.part.js": "a2fdf2a282c7474d55757101f87bf717",
"main.dart.js_92.part.js": "94fcbb128ccd4bb3881db70bedbc40f4",
"main.dart.js_55.part.js": "d018091c04eba203e0780cf363881704",
"main.dart.js_87.part.js": "d599ba431ddf04a1984021d50016978f",
"main.dart.js_199.part.js": "7f3cde0727c628fc2943abbe425d0927",
"main.dart.js_63.part.js": "4813f89cd5df8e578626da6e1bde7049",
"main.dart.js_27.part.js": "b520ecf77e79b4b29f8127d8a90c79d4",
"main.dart.js_36.part.js": "905a52cd577be6a6f19702a48cc7807e",
"main.dart.js_245.part.js": "7f756beeae76ab54552d4fa6985e06c8",
"main.dart.js_250.part.js": "e05fab756a32c0290a0a3a277b35db17",
"main.dart.js_13.part.js": "0af0d82f0d0ad2ef144760019c2384b5",
"main.dart.js_136.part.js": "251ef0e14dc3ee0f6c4c625165db648a",
"main.dart.js_220.part.js": "9851d9849836a21350562f7553cb1d45",
"main.dart.js_77.part.js": "06d8531d8b88fbfa96e35f2a8d41659d",
"main.dart.js_106.part.js": "017ac8b89f4c9ffff971efddddd6c4d2",
"main.dart.js_14.part.js": "94ec19b70184464a0b33131ab97981e5",
"main.dart.js_39.part.js": "f3c1f19feb2a985b1d75f679a5ad62b0",
"main.dart.js_61.part.js": "9358776728319bd9f7aec6971b0b367d",
"main.dart.js_48.part.js": "aa1e197642cfe83742dee60fca77f762",
"main.dart.js_19.part.js": "9f9d5d834babc0ab017cd7d218aba26a",
"main.dart.js_132.part.js": "f33eb15c0aa4df55a8b2b168f71bb28a",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_280.part.js": "9c2a3c6af0064b96e261fbbe258a2129",
"main.dart.js_73.part.js": "b25fee4863bea276c955fc34ce2d24b2",
"main.dart.js_214.part.js": "329cc42a4113580d5503cb013e3d374c",
"main.dart.js_30.part.js": "48f50f13c902dbda8db27875dcf86c9e",
"main.dart.js_295.part.js": "45246080bf77770996eab175b3d454d5",
"main.dart.js_140.part.js": "433340e9081613d54d1ab0e7c0c0a0cc",
"main.dart.js_117.part.js": "3acaf495e8542f27947a87e73a68b47e",
"main.dart.js_11.part.js": "5ad4b0191582cd8fcd29eef9643f72fe",
"main.dart.js_126.part.js": "83af28b0ac9c0076321346a9260d66ee",
"main.dart.js_169.part.js": "09e9a2b5c26272c84fb932b2d6c9b733",
"main.dart.js_100.part.js": "f85e5b72bea9d051e5c405e3388463a7",
"main.dart.js_211.part.js": "f5891bff43d8535cb6807f2c75f6ab79",
"main.dart.js_266.part.js": "1959355ddfdd7dc3903112055c9aec4a",
"main.dart.js_130.part.js": "069c9ab01cb34bd549b7b699ddd92246",
"main.dart.js_156.part.js": "2f9d1945fef29a86d1e84e8b66e26830",
"main.dart.js_184.part.js": "bb51e239354695642292974dbba119df",
"main.dart.js_71.part.js": "8dff4f6366ccf10c6ce956759e85deea",
"main.dart.js_42.part.js": "2e085bdb85093d07b5f480cf81a42261",
"main.dart.js_45.part.js": "4122a25419b22e976637e9501b05c155",
"index.html": "568015effca8bedea2b917fa944b018f",
"/": "568015effca8bedea2b917fa944b018f",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_251.part.js": "19be971ffbfd2453df724510e685f0cd",
"main.dart.js_35.part.js": "8cb1c7fa5896ef45eb5886a83fc8398d",
"main.dart.js_102.part.js": "cdd8903e67622b3d2b20828aaa6fde6a",
"main.dart.js_302.part.js": "b00f7204e0720e2f104b0ff2a1f3e064",
"main.dart.js_79.part.js": "dd88ac6c92a9e5e67fb9d9e10fbd8932",
"main.dart.js_217.part.js": "b869ec491678c2d42faf66bb8fecfb78",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_241.part.js": "6780ae1fa392b96b26df60a00e4fef2c",
"main.dart.js_305.part.js": "4fa701c6af0ace4a7d52df4630ffb558",
"main.dart.js_258.part.js": "7b82a9d0e46d4e0b9d832fb65ccaae14",
"main.dart.js_10.part.js": "b761688d018e065fee274c7cab5c577f",
"main.dart.js_168.part.js": "78618978f03725bab5cd9adcb77559d7",
"main.dart.js_244.part.js": "181ba7acef0fc7320fc77d1cb82f3f92",
"main.dart.js_98.part.js": "22da92c66e03dd4f10074a85e561b7b8",
"main.dart.js_242.part.js": "c8834edcd1e20b728fdbbba73bbaf70c",
"main.dart.js_151.part.js": "3a8cf9db2f56984663921a959fd3fd2a",
"main.dart.js_78.part.js": "37147dd9799e1e5cae6546975957dd4e",
"main.dart.js_283.part.js": "9b61cb85e4bdf6e4ab90523d6258fabc",
"main.dart.js_75.part.js": "a904902a1f9f401f7dbd2a7fa9592dfc",
"main.dart.js_122.part.js": "35b4402e4866f227e71242ddff34b369",
"main.dart.js_294.part.js": "b265a4c5c29e74df85d3f309a12f3d71",
"main.dart.js_177.part.js": "d6f2a0f230da092ab1e2d3d7f9f7cc08",
"main.dart.js_265.part.js": "9b581f29b63a99c63934e43a6113f43d",
"main.dart.js_300.part.js": "7ccdcdade89702eb4fe1766029fd97d9",
"main.dart.js_149.part.js": "cdc2e07381444945000244f12c8c4f32",
"main.dart.js_261.part.js": "d9a936133dcf148b44196b2561a8c3d1",
"main.dart.js_57.part.js": "3926820df5de5ec1d2e80cd2919bea1f",
"main.dart.js_114.part.js": "d02ba43ab747c67163787ea233e60ed0",
"main.dart.js_34.part.js": "71c0580d19ce710dc4a563c240060b57",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_262.part.js": "eb38ef54eb3a4328f16c2ea990e89367",
"main.dart.js_138.part.js": "72d197b39db145e945ea94c77bca5010",
"main.dart.js_263.part.js": "5b1c7535e5e212a329920aed32cac7af",
"main.dart.js_301.part.js": "983affd6a4df148a6f76c958468a573c",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/translations/en.json": "a388a81fa3350c12d219e6e27201729f",
"assets/assets/translations/uk.json": "2c47c07e477e41bd60b4d3a1ed68f522",
"assets/assets/translations/de.json": "e0ddac5bd3ec3cbd16695dff2027494e",
"assets/assets/translations/pl.json": "24082b33bb473455d844eeb9d5352f38",
"assets/assets/translations/cs.json": "3a892f6aafb2809c90e9f46d9c8cd5df",
"assets/assets/translations/sk.json": "9e70dc0dcb59dfff98ca64901e22634b",
"assets/fonts/MaterialIcons-Regular.otf": "44e90776260f53f7d7f4ee01853352d9",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/NOTICES": "287fa50f6c2d36ef49ef3d9555ea3686",
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
"main.dart.js_69.part.js": "2cb4dee0aee059aef64861d3bd66c4ee",
"main.dart.js_107.part.js": "60277fc5130f1ba90e3a2c018337d1f5",
"main.dart.js_190.part.js": "cb75326e7f6e854273bcbc35b679c33e",
"main.dart.js_240.part.js": "efab4afc1f7a706ef6f45a08c9c8c7c4",
"main.dart.js_164.part.js": "f8fc024b043759226c8f1f9b6d42adaa",
"main.dart.js_89.part.js": "ef2d83d5c2878761dee4ab94fb73f9cd",
"main.dart.js_160.part.js": "ab13d3e69eade7675e53e5ae2698b551",
"main.dart.js_181.part.js": "c3c35075cbc1d0826fcff7e916d07f08",
"main.dart.js_72.part.js": "00f8f96fa2ba18000fca0986a4390a10",
"main.dart.js_44.part.js": "456f6f063ccb376f8a1b609c3357899c",
"main.dart.js_195.part.js": "ac6518adaa0c37bacfe8f8a58dccbbfe",
"main.dart.js_32.part.js": "8e7a3c3ae41ef4305dbb3e81c707f150",
"main.dart.js_31.part.js": "0fc91c9c0b92344993f6e7c2cccc573e",
"main.dart.js_247.part.js": "7a49e73944c232ebf0dc8368466de6c8",
"main.dart.js_5.part.js": "dd3fb8f9f522855d2e68a29bf81ffc67",
"main.dart.js_292.part.js": "f655e176ea56e98df027afc76f6a5d5e",
"main.dart.js_284.part.js": "7b38ee40eb5692a1e5063fb07e53910e",
"main.dart.js_16.part.js": "f33f4903a7ecbe6db38923cc66b1c5e9",
"main.dart.js_50.part.js": "6bd43b7de948ae500ba79724c197217c",
"main.dart.js_296.part.js": "87ada48ec4fc78bf5165bab820c1fac7",
"main.dart.js_103.part.js": "1b780a19a714882d11e49f73b736a735",
"main.dart.js_209.part.js": "7f997d8368616d7d445a394e4731ff34",
"main.dart.js_278.part.js": "5af0a951125ccacb17d460380200d80d",
"main.dart.js_239.part.js": "874c0bd70b7d1d7deae562400f572a98",
"main.dart.js_205.part.js": "51c53e932968c15ef52ae5495a674b66",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_188.part.js": "c8f29988d148f64ca434bccfd5dff91f",
"main.dart.js_144.part.js": "44714b1966a9db4dc6582c4bc7f56e20",
"main.dart.js_202.part.js": "577dea532a9dd324bd2febe79460bf3d",
"main.dart.js_286.part.js": "f683ea1272ff741a5fe20ce2d52840da",
"main.dart.js_54.part.js": "2aa50b5522221f2791b88eb80be6ac7b",
"main.dart.js_232.part.js": "457b01e0d010aa7c427698ebab6aaa9f",
"main.dart.js_52.part.js": "7d30b1b5ce4d3e88ebbad61e0d321aad",
"main.dart.js_198.part.js": "4f8fd2793d6f2395aa275b281f56d633",
"main.dart.js_196.part.js": "24473bad445150857d29fca313f1e9c2",
"main.dart.js_303.part.js": "d66d11be15fc5b7c8b50bc50961d685b",
"main.dart.js_141.part.js": "1291f51633ee1a2634b539d467563526",
"main.dart.js_192.part.js": "1b90fdca13e5cd0ec25aa8d471388954",
"main.dart.js_287.part.js": "6d914a7727e11fac4e3cf92fc5af8c80",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_7.part.js": "b57f5551e0374acea529d326358cab5b",
"main.dart.js_23.part.js": "de558162b8f8a93745ffd0b93af9deb3",
"main.dart.js_68.part.js": "a5de0d3916fe8d3b556f57cbc50b9b6d",
"main.dart.js_252.part.js": "2eaeec1848dcce49924a9d1840bc75a7",
"main.dart.js_237.part.js": "fda39e73e9f2975be3424f5d0159d73f",
"main.dart.js_257.part.js": "e579a8ece14594cf88e5992c9c686d0e",
"main.dart.js_49.part.js": "dcdf18c6164367c92ec9360086ae66b9",
"main.dart.js_142.part.js": "c20ffd903e511d5ef505fa82996aaa42",
"main.dart.js_212.part.js": "e0c5711c0046b7d5665cfbb82f2941d1",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_213.part.js": "d68b203622c443e7e420cfbd67519905",
"main.dart.js_43.part.js": "3c12cbea8766b0021e41bd0bc4e5a647",
"main.dart.js_249.part.js": "776680002a2ec0ff0aba29b4f606503b",
"main.dart.js_131.part.js": "ed77b3bcc7b7084278c46c56c44004ef",
"main.dart.js_97.part.js": "5fae2be8f032f33298544bbfa12bd4d4",
"main.dart.js_269.part.js": "246a0056d22ba113b95248aaedbe1f9c",
"main.dart.js_267.part.js": "384725842c60626a0043ef60f6e4f30a",
"main.dart.js_67.part.js": "edeecac371775ff07ffb7bf2c69e95d4",
"main.dart.js_8.part.js": "47da84425bac9a0add66afb37c1f75d9",
"main.dart.js_21.part.js": "de4d53429d0776748462b19ff72b7c15",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_309.part.js": "a8f9511a041433e07d3a558aae1a2e47",
"main.dart.js_93.part.js": "451cc3aa25eb34fb424fa28b834f58eb",
"main.dart.js_186.part.js": "e7a491540683ccd5f6ca50707cbe856c",
"main.dart.js_298.part.js": "0b6429f2c830f85a6ee9209d944ebd19",
"main.dart.js_66.part.js": "dc4b76966737c042399a8ee91121e2d9",
"main.dart.js_64.part.js": "efbfee371dd1fff0aa3b7b1bd4d0f457",
"main.dart.js_176.part.js": "8d147e87552340d2c93962db36e26238",
"main.dart.js_285.part.js": "c06025feeac1e19e5c1ef5a28bf1c13b",
"main.dart.js_70.part.js": "d482fb803204bec0be78e9367902ec92",
"main.dart.js_46.part.js": "cce150037f6c6a025c73d7a80c2f61dc",
"main.dart.js_40.part.js": "91145408a77d0668a3e0f650b8b792af",
"main.dart.js_22.part.js": "21d7195b5efd069b4d25f765efaf1c23",
"main.dart.js_191.part.js": "bb673f7409f840a09d15a4d3565200c6",
"main.dart.js_163.part.js": "3ee794cfb06fc1fd52beb2e9bed139e4",
"main.dart.js_158.part.js": "c950a1eaf98a798f17ef78ae41bc7c15",
"main.dart.js_255.part.js": "fbd0b65dd75ac840828add7db0c30bbb",
"main.dart.js_235.part.js": "0de9615705fb6eb44d52360d2b840d82",
"main.dart.js_268.part.js": "5f7b982dd62bb7fbc5ff38d4c04bc3df",
"main.dart.js_197.part.js": "4d59921f04be3b52b18494602e8517a9",
"main.dart.js_172.part.js": "22b4231c81d9229eea4c82620a0ae543",
"main.dart.js_4.part.js": "f31a56c8c662c25521a4b7324709fc3b",
"main.dart.js_85.part.js": "cebffae86938af1ba63258ecd6cec517",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_128.part.js": "d13c6a8815afe5e1ceca5c4d0d0d217d",
"main.dart.js_248.part.js": "b63625291b699e7494fba411abf31b19",
"main.dart.js_25.part.js": "51644c667c7f34ad5f125920939ba470",
"main.dart.js_200.part.js": "44123d22770e50a900ec28f14741c766",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_90.part.js": "49df6b43357f07db9f161d9d3767bf1c",
"main.dart.js_275.part.js": "746d5946cbb6e2ff6a7261aed0a526df",
"main.dart.js_281.part.js": "4f1e7a8bddea1a3e47c9965ed701a814",
"main.dart.js_175.part.js": "df8ce5d2d579b61237c7448bbf791d61",
"main.dart.js_28.part.js": "d7608ad754d51be05e474d155e654a98",
"main.dart.js_288.part.js": "918cafa9a18b50bdd1e9aeb28d789f52",
"main.dart.js_62.part.js": "45d48a4d5f3944a540614b913cb4e561",
"main.dart.js_206.part.js": "760a70da4c1762d9bf8e87dc8b2ebaca",
"main.dart.js_29.part.js": "0992887c1aa5258e4e3e98d200a50553",
"main.dart.js_307.part.js": "d1f208655496a307e47a89e9b55e1925",
"main.dart.js_129.part.js": "2165a85bca4f878b69a52d9ffa8e47f8",
"main.dart.js_279.part.js": "29006d8ab349d61fd320535ba48a8420",
"main.dart.js_127.part.js": "35e2082f1364390283e49a8c7bcc1301",
"main.dart.js_216.part.js": "b2d48b91202af518d85141e2ed64a5ac",
"main.dart.js_133.part.js": "613ce79860b47b1f772be91872d2610a",
"main.dart.js_165.part.js": "0cb0354f9e716e09a1cc267de4cbb1bc",
"main.dart.js_24.part.js": "9b16a947b854662b9a31a3829c33ec02",
"main.dart.js_215.part.js": "1716e3f7600f71eec9dc488a9572260d",
"main.dart.js_145.part.js": "3f133b4a1295da05b755bba52abd2b05",
"main.dart.js_171.part.js": "7b18f4b28565b4be6f9290e9062bbf4c",
"main.dart.js_121.part.js": "85a9f11f6f0dc8409f3b33f7e7815159",
"main.dart.js_230.part.js": "d30189c2655f8cbe76381657fdb87dd2",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_108.part.js": "2da1024f3a8de2e30da9444d6c47e9fb",
"main.dart.js_203.part.js": "45ec820106913a1c6e6e8f0edd8b3185",
"main.dart.js_12.part.js": "4c5b6803c77c8f5b03254bacd7f2e3fb",
"main.dart.js_231.part.js": "1466ff73456c867c43218bcf34930b64",
"main.dart.js_289.part.js": "0c29d13cc2aa0497198c4b9fb17e7db7",
"main.dart.js_139.part.js": "32e2f2f9aba0af92152f83a5ee8022fb",
"main.dart.js_38.part.js": "53db42d3de63def056eef6c66b134958",
"main.dart.js_83.part.js": "142980007e693162e3045cee055565e9",
"main.dart.js_193.part.js": "ad43fd6ad43d30fd45eaf2a8e3ffebb7",
"main.dart.js_170.part.js": "d3df0b9e22efc8f4f83947d18a9e2a9f",
"main.dart.js_219.part.js": "8856beb64d6558fb252131d88824117e",
"flutter_bootstrap.js": "5f1b79bd59768210bf9cb8671679e301",
"main.dart.js_143.part.js": "60aaacd58ffe0dff8fb2c7f5522363b6",
"main.dart.js_15.part.js": "dcae08e91f34910812632978cb685035",
"main.dart.js_9.part.js": "672c6476ce936177daa978722638253a",
"main.dart.js_189.part.js": "8ad39d8b1252a0b1c79e6d15b462f9e1",
"main.dart.js_26.part.js": "078c5ef56ee30b82a1ee35026f38c13a",
"main.dart.js_125.part.js": "146d2d3e5e1869fec78a2446f4c406aa",
"main.dart.js_304.part.js": "e4df214da112269152d244f49c4f456e",
"main.dart.js_264.part.js": "decfeb44b60c4f7b4eef82bfab137f8f",
"main.dart.js_306.part.js": "dfdc36a177f8269d1efa9922683e0d58",
"main.dart.js_155.part.js": "a430cee7c4d61d9e99229f8f85a9bd48",
"main.dart.js_276.part.js": "90aad4fd9a2392b952f4c57ce3dcccb6",
"main.dart.js_178.part.js": "858e0dfb24df3861953b63d5a6bab8db",
"version.json": "e2e449532356ef5296f722e32879e52e",
"main.dart.js_293.part.js": "e830bb5c97a821eb1d155867b2907c99",
"main.dart.js_310.part.js": "6894249ee83dccad386eb8cb0d2e1230",
"main.dart.js_222.part.js": "051b67f14d9c97a5140df90d438c18a0",
"main.dart.js_238.part.js": "549a330af56d232e3c200a9b98ddd2a6",
"main.dart.js_146.part.js": "99f51dcf8043a3fdbb92e5df13342c62",
"main.dart.js_256.part.js": "3481be838784ff24099470a19c01de50",
"main.dart.js_221.part.js": "fd2d1c444eebd55d0c880ce869ffa7a2",
"main.dart.js_157.part.js": "495fac041da10f226f2aaa31bef0b527",
"main.dart.js": "3af145224989b7343605747abd485a5e",
"main.dart.js_159.part.js": "0b4016ee359a3930731cc58d6e1db74a",
"main.dart.js_51.part.js": "a866b28c88e619e251d080832bbe576f",
"main.dart.js_182.part.js": "0a40b3bf58d15b657600cbb98d65a21d",
"main.dart.js_6.part.js": "a2640f821c634434861c645fe6147807",
"main.dart.js_204.part.js": "7e15323f33016743f9efec403f6cb3c7",
"main.dart.js_272.part.js": "c6e6ce2a757eb0967696dcdb1a46fa3e",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_116.part.js": "5ed9e75ef02c9b5f39248bb1beab10ab",
"main.dart.js_94.part.js": "010b6d17ca13e348f7206e7812940833",
"main.dart.js_99.part.js": "6110659bdf2df41c9c55bbfb6169b9a7",
"main.dart.js_223.part.js": "33d7a7580549626ba871c1d282693deb",
"main.dart.js_17.part.js": "d9b67b5e2256ce24cc3f738048ed734e",
"main.dart.js_153.part.js": "8a0caf3dfd1b3f36dbb0740254b00aa0",
"main.dart.js_86.part.js": "a2c671e2d8e7b98423c662f6ca95c188",
"main.dart.js_33.part.js": "2314f37a1e9a80bbbe2c77fb3d189b50",
"main.dart.js_80.part.js": "dde55c75b3ac3a84807dcfaad083a8a2",
"main.dart.js_180.part.js": "80f0522e3224391d708a835d776663cb",
"main.dart.js_236.part.js": "697e59b2c51e11e04fadb4fd49f16426",
"main.dart.js_277.part.js": "bb5b2cdd2201f979d737248382f0541a",
"main.dart.js_118.part.js": "f73f5f0c07dc3707166d5278e937c9f6"};
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
