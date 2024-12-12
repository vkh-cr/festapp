'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "1d68a0b7198934adfc5d6817ff606c51",
"main.dart.js_162.part.js": "b821ac7a9e1d3dd3ea6fc8a4b27a416c",
"main.dart.js_182.part.js": "01c7a559fe7b9979d3e433934d8e5b77",
"main.dart.js_244.part.js": "7351c671860b3fac0768f609df460776",
"main.dart.js_289.part.js": "b0a4a3c02016902ebdc80bec863f7e31",
"main.dart.js_83.part.js": "94dbcdc0b8d5bce0e7bc8f5ecdf6dd58",
"main.dart.js_254.part.js": "7af18c60d33903591c3f72622ef9396b",
"main.dart.js_176.part.js": "aec83842ea77440dffd219d2a2782eba",
"main.dart.js_96.part.js": "a0697e78f7f98c4deb8b23cec729dcaf",
"main.dart.js_87.part.js": "8d7f7578bd13e6f0e15297c5a00eabb9",
"main.dart.js_285.part.js": "211bcc08419bb791bfe4f1277b163c90",
"main.dart.js_251.part.js": "c3c28cd89f029e1183897eb2d494ff7f",
"main.dart.js_126.part.js": "f290dff9b0e0861a7a8786fd043be193",
"main.dart.js_129.part.js": "93062cb3a54f06719564dc2357ed4ae8",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "cd589ea72a0f0356c848a75d7aafb9e7",
"main.dart.js_218.part.js": "06326d96e21a022853fe5deb899286e3",
"main.dart.js_142.part.js": "3284fa562f393f07a19cba66be628871",
"main.dart.js_40.part.js": "91e5b3731e9e32581650baf17e537109",
"main.dart.js_48.part.js": "00d329f2e51f75d7e69422b3de2191af",
"main.dart.js_209.part.js": "b17d28308efb4c4060364d8ce4ab91a5",
"main.dart.js_115.part.js": "0719f5003ded7f6129b7c6d6cb32d89b",
"main.dart.js_10.part.js": "aacf457aa6fda7b72d2eb390673ca9ca",
"main.dart.js_84.part.js": "bcff820ef9d8f6ea3b8f026969209961",
"main.dart.js_122.part.js": "a63607aeed03d1068c8cf07a6515b731",
"main.dart.js_103.part.js": "7c4035bed5553669b7b3eaaa6b3a719f",
"main.dart.js_230.part.js": "8ed6c78c2f48bba60beb3c5f8265cec5",
"main.dart.js_213.part.js": "e8a292078dd9eebd00515e1ff22d18e6",
"main.dart.js_153.part.js": "c23bfc85e6dbe3d70eb64a118acc7e15",
"main.dart.js_89.part.js": "179473d6cb60b413343562d38e524665",
"main.dart.js_146.part.js": "dc00082ee1c35a8097a2df9e315dfe80",
"main.dart.js_37.part.js": "6a60647d82469908cb13876350802ef9",
"main.dart.js_287.part.js": "88da76993c4522ac47c7abd35cd6a627",
"main.dart.js_283.part.js": "a7086d6fc49e6fdb26a09332029fd2b7",
"main.dart.js_132.part.js": "714bec3efea11828e9427d7786ed747c",
"main.dart.js_165.part.js": "02ac1c708a01cdef984cdbde8ae38934",
"main.dart.js_282.part.js": "a2684b714cdffcacbdeee07e855372be",
"main.dart.js_127.part.js": "9d23096df97273500734e7bf79108da4",
"main.dart.js_161.part.js": "045f8e0fe77246ad1acee8554ced0e51",
"main.dart.js_175.part.js": "53e9e45b54ef51845606c0c64d8941d6",
"main.dart.js_239.part.js": "59f32cb4ffb76a939a52b95058ee02f8",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_169.part.js": "b44337c6011858913eba13e34f77e78c",
"main.dart.js_13.part.js": "fd3a15bd8131667cce5490dddfa723f3",
"main.dart.js_246.part.js": "0e01705ad36d182030d56b9580ea4793",
"main.dart.js_174.part.js": "6959410acd8db71009c4ebbf74bfc59f",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "d1aec55582b49ae2c99d3dc4033629cc",
"main.dart.js_144.part.js": "674cf0e1dc3596e5de3234553c84d1af",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "93bddf4168c4f4126dfda53bc1c68e94",
"main.dart.js_265.part.js": "cdab660e44dafd0b63bd8f12a37e1276",
"main.dart.js_31.part.js": "3284a6fef4949c026cc0543929ade2f5",
"main.dart.js_294.part.js": "9015a27836795033ca99506c261ed2da",
"main.dart.js_18.part.js": "bd309708aeb3d8530658092cdef4e686",
"main.dart.js_35.part.js": "45929c8b103d1f4154bed6a4e568eb59",
"main.dart.js_200.part.js": "23fb1c1ba87204e60665934fce05c712",
"main.dart.js_101.part.js": "c07acd21a0eef309fcc00b466defe712",
"main.dart.js_77.part.js": "1ac38d37b6bc4fdd16a56dc9cdff2841",
"main.dart.js_149.part.js": "3d424c160844b09ad7cfbc91072e8510",
"main.dart.js_67.part.js": "3bfdfc7e2dcad46f87898c6e72737c6c",
"main.dart.js_82.part.js": "56a3887c2fb27eec5e0ad4d3808ac1c0",
"main.dart.js_173.part.js": "b2961cd780372122d868353a7d7c741d",
"main.dart.js_291.part.js": "d4227bb067e7c46daabf7be71d1befce",
"main.dart.js_106.part.js": "d37f33d8f91edd5e1f67a53eefb7749c",
"main.dart.js_273.part.js": "0cbb5007b03050c0cba83033fa9883d3",
"main.dart.js_62.part.js": "cfb525d3540c514c71ef3c12539c6b25",
"main.dart.js_259.part.js": "a9170448a6e408d7e8f51251fffc6382",
"main.dart.js_207.part.js": "e5f57fe0ea7a2d13d6a16cb0fcdd153c",
"main.dart.js": "e682bb7d2d8e904e8cc0fea7bdc6f350",
"main.dart.js_222.part.js": "67fe3f0c272f84f2297f60100930b5f0",
"main.dart.js_293.part.js": "183621dcedd0a5a3ba873e4938a091c4",
"main.dart.js_124.part.js": "33b1a75141408e64a959d3cbf99820a2",
"main.dart.js_50.part.js": "2d40c8bb4221c1837d2d6e17df41a26d",
"main.dart.js_97.part.js": "156e0001e523189af4ce4e61b2470aa7",
"main.dart.js_91.part.js": "9f1c024611ebb1042a812ec31634cbe2",
"main.dart.js_145.part.js": "7ccd67eb203dd30f7b1746aea43f8436",
"main.dart.js_57.part.js": "0b28041b17a4badfd7334f3502269765",
"main.dart.js_190.part.js": "27c79f892ba196c79897dbb21c40b4c3",
"main.dart.js_104.part.js": "c90e0bd57472fe695f4a81d3547f6f05",
"main.dart.js_201.part.js": "4ab90a67819cc066d7e326cca2be080a",
"main.dart.js_196.part.js": "a0a3849b7c3ea7d222382596c9f337b3",
"main.dart.js_181.part.js": "25f398102ea729ec1cd72320871bc4cf",
"main.dart.js_270.part.js": "b1e077a5aaf7fe7314d7f758eb09e311",
"main.dart.js_108.part.js": "89dffb2b5734608ed16049a147f16fa4",
"main.dart.js_33.part.js": "4cb4f0ae5c52908d4afdf71710e18449",
"main.dart.js_275.part.js": "7f318f23051e013c27dec06cd36cbd6a",
"main.dart.js_269.part.js": "c814df3989f19e31612178c91df2ac74",
"main.dart.js_217.part.js": "79d786754c935289fe178aec74de4d0d",
"main.dart.js_34.part.js": "deb05dc1516ca1a52998193fbeada9af",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "68750d046b9dea8a7e23d12feb0fa585",
"main.dart.js_88.part.js": "9542b95e7ca1c51c759cf35d5306f29f",
"main.dart.js_202.part.js": "f393fb700c7d5597337aa35f36d661d0",
"main.dart.js_183.part.js": "7f845eadd70eab6533bd8d63c024dfdd",
"main.dart.js_167.part.js": "8a52a8a93758c19dd644f2884071d4ff",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "482063c0477fd8fa7231010225c7db45",
"main.dart.js_247.part.js": "631222931fa1ef8e5e65fedc477b3042",
"main.dart.js_7.part.js": "2f6257a06d37d8f4547c05e68fefa806",
"main.dart.js_140.part.js": "6d3facdc90faeb159ac32d34fab40408",
"main.dart.js_228.part.js": "fdb1229a227f0523b570e453f05787df",
"main.dart.js_170.part.js": "fb370341072c9ca00eb922047d8271b6",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_27.part.js": "fd38168a64236f93c2b79240b812e7a5",
"main.dart.js_4.part.js": "c8805f2ff084ee4d321d010d76b5f7f0",
"main.dart.js_298.part.js": "78616e1037cbff90de3319205bfa15e8",
"main.dart.js_219.part.js": "112c51d5dff3259baae2bea54a2a13b7",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "39db6d4a83b81aae205c2c1e63ff128e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/assets/translations/uk.json": "d916db0051f2553fd629f5ff8ddfcfba",
"assets/assets/translations/pl.json": "ea43549dddb786fdb0bdffb63e7981ac",
"assets/assets/translations/sk.json": "5234ce81c749c1254b3707aeb84e9076",
"assets/assets/translations/en.json": "b646acbfad3ec7f672a3ee86b8a1b59c",
"assets/assets/translations/cs.json": "8ba837fa54eeaa81257e4f86c136abff",
"assets/assets/translations/de.json": "1851af4836c8764b0cf9f34f468ca91b",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "21092cee812eaca83f55eb5e54aecf0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "3a007a7590709c81889a1621b40365b4",
"main.dart.js_60.part.js": "f7a3ea9999a16ce91d0a82a1dbaa466c",
"main.dart.js_263.part.js": "5e45f0371dc78e890da3e22b8319ca53",
"main.dart.js_220.part.js": "c25cde850081973bf31c5a515b2b5af5",
"main.dart.js_25.part.js": "b342b0329fa00dc00ae619407d22042b",
"main.dart.js_288.part.js": "cae8c8afe0ac7749cdc694e5bc950131",
"main.dart.js_141.part.js": "adf0e90726b89eeac5bf566eabc701c4",
"main.dart.js_123.part.js": "e7d0f2b46024a0fc105fe24867f6dd45",
"main.dart.js_241.part.js": "6eaf8c095eaaa7147c40c4cb888ac5a0",
"main.dart.js_268.part.js": "79fb71fa4b6e7edd7fbaac031cee9e32",
"main.dart.js_8.part.js": "1001d6b2ce8ec253c220f551543be54b",
"main.dart.js_198.part.js": "bacc6052dfb062158e58726591677c43",
"main.dart.js_81.part.js": "2c819305592909326a1349e8511a03ed",
"main.dart.js_205.part.js": "bbad1fd41391e8aa391156554c370bdb",
"main.dart.js_113.part.js": "ed85f74e245bc337617f83cdfaefe8b6",
"main.dart.js_280.part.js": "dc63441ea0a7ef97976e80772a9b356b",
"main.dart.js_9.part.js": "51abf48d00b983602bf8bef4ad9340aa",
"main.dart.js_99.part.js": "133ece055f0930977b30399b43a283ee",
"main.dart.js_22.part.js": "d21bfb4a06785656d1011adff5c2594e",
"main.dart.js_272.part.js": "3f2cf2ac886755f7c0e345f041637172",
"main.dart.js_242.part.js": "ba594aaa38a16ebddfe962144b849077",
"main.dart.js_86.part.js": "7327f7cc3b78c598722998d1abb30928",
"main.dart.js_23.part.js": "09a43ddfb49efd99c2a357e566fca0bc",
"index.html": "8dc55667ce1da4fb71cc8eacc62b16a5",
"/": "8dc55667ce1da4fb71cc8eacc62b16a5",
"main.dart.js_94.part.js": "80251688beab4005f47457accf8b5af7",
"main.dart.js_98.part.js": "f7a4c733d4ad817ee04b6ebb1433e7e4",
"main.dart.js_53.part.js": "aede1a1823cfe2ce7f7ddcedc0da314f",
"main.dart.js_74.part.js": "97c1003c9b9b147dd00a29eec665490d",
"main.dart.js_235.part.js": "7b15539c8463a4ab84a6eb32486e5611",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"main.dart.js_286.part.js": "0fc1515674c9f088b5882d14fb6a9cb4",
"main.dart.js_118.part.js": "7505ce1699fa19564d716f621e913c7f",
"main.dart.js_262.part.js": "edaa5a172400b980fb19bd17b1026b4a",
"main.dart.js_26.part.js": "d93934cabb36adc5ab7fb967b2d86a37",
"main.dart.js_240.part.js": "bef1b45b53a6d65879a61125861c7e66",
"main.dart.js_20.part.js": "58eef7b2d954dc09e06a9073018a02b7",
"main.dart.js_189.part.js": "1e5c9f88d8935d95cb69ba4e168c89b4",
"main.dart.js_214.part.js": "bfacf416ed8e2919aa1c01226b2d18f5",
"main.dart.js_51.part.js": "ee60c397b792888bcb437dfc3b0074ef",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "8d9d5d48802b70b6c342f530e8d5cd14",
"main.dart.js_290.part.js": "def87e7fb3713d6b925c9b5fa0b256dd",
"main.dart.js_1.part.js": "24048a058f84edb647283786c0f51c6c",
"main.dart.js_120.part.js": "1161424a3b43dd4e4741252c373f73f9",
"main.dart.js_63.part.js": "431a4f8241db9b9709591a5abae2bd66",
"main.dart.js_261.part.js": "d52a58fd84dac554b952950442f7e359",
"main.dart.js_295.part.js": "df0a9ba4f4533ae09279b5e8036d24eb",
"main.dart.js_12.part.js": "8ffe9b05e667a303a178c483c4a1b8a0",
"main.dart.js_281.part.js": "60a42ec967f8c0775a8018dedbeb0f76",
"main.dart.js_221.part.js": "00bda49c3b616409cea9fcfd17264b51",
"main.dart.js_137.part.js": "9a1ec39f2d63ab88b2a9c8ef29343802",
"main.dart.js_276.part.js": "1decbf5e915d30337d105e67773b95ad",
"main.dart.js_28.part.js": "1fa4f35674a65a78703d28d35d554ffa",
"main.dart.js_135.part.js": "e4d825afd2ac4be0ffedf17db51adb49",
"main.dart.js_138.part.js": "0a4e92e323083878f9b7e50b0a376454",
"main.dart.js_17.part.js": "0a52bc4b43e6ea858f2ee0aabcba1fcd",
"main.dart.js_105.part.js": "e2bfbde474e10de9dac94ef4c64d69ce",
"main.dart.js_231.part.js": "9d8df17bd6a64d7b156a1ee4575dd9d2",
"main.dart.js_43.part.js": "f87cf0bba0672d4787201aaf80c9aaf5",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "44e2b4c85f1883e2e526bab6b828d8b4",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "0e375c1cffdde789ad76772c46ad85c5",
"main.dart.js_292.part.js": "220e819d941cc09d59d918aebf27169f",
"main.dart.js_15.part.js": "436d945cba75d85bed0ae65b215140c8",
"main.dart.js_151.part.js": "e039a5dcc4e07d96dc639a728b34e611",
"main.dart.js_19.part.js": "a2b67727fb8e2cadab684189ea2dac57",
"main.dart.js_284.part.js": "c36aaf1839838c1b094e14366a393a7b",
"main.dart.js_154.part.js": "11ebb2a16b08d6b2f28e1be6ac878cbb",
"main.dart.js_16.part.js": "c960dab98851e4229893e39cc78d8531",
"main.dart.js_250.part.js": "32da6b9db1e4cffa77a3d7551c0f5251",
"main.dart.js_36.part.js": "ba0a634281e6b1875275e56338aa7435",
"main.dart.js_300.part.js": "16e0bc06acba7b184263b941b1c93591",
"main.dart.js_253.part.js": "04234d861a390c722042296165cb0234",
"main.dart.js_130.part.js": "18d7e230bb7c8764f7e7263bb998521e",
"main.dart.js_152.part.js": "faf62ca31ae9fb839806024d2412f443",
"main.dart.js_32.part.js": "d81c2f4a991c68fdcdce40bd6c6bdaeb",
"main.dart.js_56.part.js": "c34962fd0e0d67d1993265925ba78385",
"main.dart.js_227.part.js": "61e1e6f1b5ac6563844ae88a9493c9ea",
"main.dart.js_3.part.js": "5c171e9a7cc8770b8477eb43289263a2",
"main.dart.js_68.part.js": "ef7b41b3437c084d52c61512fea72b93",
"main.dart.js_225.part.js": "3129f25acbb97961630e9e84e528b2dd",
"main.dart.js_248.part.js": "5068e05e4e8998bb6065d07dad5f7935",
"main.dart.js_133.part.js": "f6ab7b6b3fa0b9461a7cc546c12ee08d",
"main.dart.js_204.part.js": "05482d796b4a5cce553d2950e22e87a0",
"main.dart.js_24.part.js": "c910508601760e13d85abcb44e394e69",
"main.dart.js_90.part.js": "e7ccb28fb7e6afe2be4ddbe89ad3c442",
"main.dart.js_177.part.js": "f47f450ec0a3d7e201c6c7e4838ce5e1",
"main.dart.js_299.part.js": "54520006e7f50f14863161b5dbb78d83",
"main.dart.js_85.part.js": "28bba365241223fa63b2f6e97970f759",
"main.dart.js_243.part.js": "c5bd60924bf58fa651bfabfc1c5256ae",
"main.dart.js_260.part.js": "9f4e07cdd33988b98ebe47a7828546f4",
"main.dart.js_114.part.js": "29e558850ed442e74442d5ed9120c82a",
"main.dart.js_39.part.js": "4cc5fd36579288a7a9ebca7fc6b55864",
"main.dart.js_49.part.js": "d5bc6269bc50f137fdc0701712ef6fb9",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "df331087c88044e5c68c8c16db7bb542",
"main.dart.js_171.part.js": "039f3be67a06f03c38c6e5bde4bae252",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "985d206fbb733b96b637b5202e048972",
"main.dart.js_121.part.js": "d8e016603e44924f43590154ca5240de",
"main.dart.js_215.part.js": "5c8f43f30d2280e4326b925a63857c5e",
"main.dart.js_301.part.js": "7d6d82393405f72833d85a8b53e3fc4c",
"main.dart.js_112.part.js": "464d23a13ad18d88cbe02be1e855b50b",
"main.dart.js_139.part.js": "ab02197b595c00f41e4c7602e4d1e763",
"main.dart.js_143.part.js": "6f7811d3a6df687d452a43ca461ab06b",
"main.dart.js_80.part.js": "51e09f16ea565ee6401a88c4d9209840",
"main.dart.js_252.part.js": "8f464a5a62893de0abab67b061031c27",
"main.dart.js_279.part.js": "39f443d4cce9ae2b59f046eef92795b7",
"main.dart.js_30.part.js": "e307834e1dff0c3f0cfc1f2631ad3e89",
"main.dart.js_277.part.js": "4fc11303932f1945a6785758fa06a9c7",
"main.dart.js_136.part.js": "a483ed8c78281a0f9dd6c5ce28ef325a",
"main.dart.js_271.part.js": "82db82f1d3c17645a8c66e4b2b7d96cc",
"main.dart.js_59.part.js": "47fed894b8c50750f3baa94935237314",
"main.dart.js_47.part.js": "6f5cfc1f5a08de73675c1cfa043c4d58",
"main.dart.js_95.part.js": "b9b488e335c5ac4eb8f81e5d3134ec3e",
"main.dart.js_107.part.js": "347b75e8acb0aae4891e76d0ed19d970",
"main.dart.js_29.part.js": "e75fbc05681220a10864f5d10c0df4ce",
"main.dart.js_194.part.js": "e174f448c968c9939c30627849cf4f70",
"main.dart.js_236.part.js": "6741ce15856e36acf3b1b41e8c013030",
"main.dart.js_58.part.js": "2ea039d1f5144442da3ba61101b443d3",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "c57062bde0a91ec15afc76515cd793f2",
"main.dart.js_79.part.js": "57e1e96bc88a3875f8e7136118b53013",
"main.dart.js_109.part.js": "340c6047e58b56b24e8531f367f9894e",
"main.dart.js_92.part.js": "eb7547fd86e31d262207af5d620f49a3",
"main.dart.js_93.part.js": "a401a6a14b318853a6b9a67353da3a90",
"main.dart.js_223.part.js": "3d0217db884fa559e57aef86e62395e8",
"main.dart.js_11.part.js": "00356ff7f8715ad2e324135575a6b450",
"main.dart.js_125.part.js": "09669ef13bc285c2a4ad749cdbb7682c",
"main.dart.js_131.part.js": "77678f26be24e1517a61261ebce5a9b5",
"main.dart.js_226.part.js": "b205f575d3753e1266bf663cbadac6c9",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "f761fe69291ff9d46ab0f2eb827d312f",
"main.dart.js_178.part.js": "74ddaf74043a8325b9dbc85b76ea6237",
"main.dart.js_258.part.js": "8a0e2aa8ae5037cfa476df87881a37f5",
"main.dart.js_297.part.js": "cb0e901bbb38c177b1cb008d1fb794ea",
"main.dart.js_70.part.js": "6e80b98d9728e5ba7181cd3e7ba1429f",
"main.dart.js_187.part.js": "54a584bb9ff5086365dd368f7853f7d8",
"version.json": "3bd689998d350c4e5d0e45b5117f2cf7",
"flutter_bootstrap.js": "3ec143e68b439c83453f2947cc41cd9b",
"main.dart.js_191.part.js": "73c28c9d8da73ec76773e984473c5e0f"};
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
