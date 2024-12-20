'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "bfa170dbd72799bb360c1c6332ee991a",
"main.dart.js_182.part.js": "7b003391b021c222f41c10e48f01e65f",
"main.dart.js_244.part.js": "509f85bb3d9690c690678311ef9da716",
"main.dart.js_289.part.js": "42fcc07de041dd7d28384f526d5b071d",
"main.dart.js_83.part.js": "75f8eeb8d24863383b7d465c980e66d7",
"main.dart.js_176.part.js": "0b04558d010173600c560eab5261d475",
"main.dart.js_96.part.js": "b77190fb942482640c5d9ec95e197588",
"main.dart.js_87.part.js": "71e3cbc98076de5c734697deae66490c",
"main.dart.js_285.part.js": "9c0ca0cb7b74d3caff63ff132bd06a41",
"main.dart.js_251.part.js": "7cdcbee1d43a6803a9536fa46b0f4e09",
"main.dart.js_126.part.js": "f2fe180994294303841f696bba26b728",
"main.dart.js_129.part.js": "8d91d9600bf8783c3199c5aa5a28e1c5",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "2e1fe3365030e43d197a788c169c9c29",
"main.dart.js_218.part.js": "42a5f126b825827e07619288f0c9c551",
"main.dart.js_172.part.js": "73918e721bd3815c39d53f188549e896",
"main.dart.js_40.part.js": "eaeb120faa752ea730ea60800ced8ae8",
"main.dart.js_48.part.js": "995ac7ceb4ddbfefad7343646580ba20",
"main.dart.js_115.part.js": "78c96a69d1762eb0d9095a81e01fe506",
"main.dart.js_10.part.js": "849bfabc12a8dffa3a6ca2a712b021ff",
"main.dart.js_84.part.js": "339d18dc337ec7b3e873caa4416d9b29",
"main.dart.js_122.part.js": "e0c5737f6434c1c82939660802a710c3",
"main.dart.js_103.part.js": "fd0b89c07643c7ed4c8ba0bc5488f346",
"main.dart.js_230.part.js": "bf73338122c04ef64acb4ceb1d66a7e6",
"main.dart.js_153.part.js": "fb2a1927ac60b4730656ece00700a17e",
"main.dart.js_89.part.js": "ee8c532f52cc4b15c5b8609de78ed22b",
"main.dart.js_146.part.js": "9bb4b813957214a19384ffa44fa63faa",
"main.dart.js_37.part.js": "74f1e111bcfab16217dfb42c385a1a3e",
"main.dart.js_287.part.js": "666bd7a90c0c9996c7593becdb93849a",
"main.dart.js_283.part.js": "b23ad0b6fee7fbd7ea6476caa647093d",
"main.dart.js_132.part.js": "232635b2f0902f3b7d633fb190830f83",
"main.dart.js_282.part.js": "060997d0418b9e11925c1999e3e13fee",
"main.dart.js_127.part.js": "31735e0cc62319c43bdb541aab1e0952",
"main.dart.js_175.part.js": "d800ee4e79741f9f862c2b9c6fe5bd7b",
"main.dart.js_239.part.js": "4d51b2a30b6589e02ffbccb2a51e7875",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "e140a548a24571321291e7e5a131fc9d",
"main.dart.js_216.part.js": "02d2eb7e2c155c67523cfe4850bc1e65",
"main.dart.js_169.part.js": "5933a411a084a1e4497c20f320bbb642",
"main.dart.js_13.part.js": "8647c21e99b1cbf8caeb61a060f6eeb5",
"main.dart.js_174.part.js": "6159ac577266ea2b794b0c1d098540c0",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "1c3b07dfca415a6cbb7b101efaf5996e",
"main.dart.js_144.part.js": "dbd442ce2430101d8aa34089267efcbd",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "3158190ae2bd2813955138ed09cd6993",
"main.dart.js_265.part.js": "2d60da2405512397f9a4f135214f748b",
"main.dart.js_31.part.js": "019558ef66e2af3e941bbb7ba326e976",
"main.dart.js_294.part.js": "5517e4a92bc5df0f131f7b79583b4370",
"main.dart.js_18.part.js": "087de8154919ae09782c5de3c26185a7",
"main.dart.js_35.part.js": "e45ac993adb1a1060cb4bfc2759b8983",
"main.dart.js_101.part.js": "9a1cc500f8729d9cb528e09c00ef5a12",
"main.dart.js_77.part.js": "5307d1af6d190afddfad91e0cdf06ca4",
"main.dart.js_149.part.js": "615d02dc883d85ea4c9a4f6c216c1dcd",
"main.dart.js_67.part.js": "6b26efd0c0da41fda726cb7d2915648e",
"main.dart.js_82.part.js": "67ed246599423aac514bae06d24e7b75",
"main.dart.js_173.part.js": "9a4302f7cbee97dac679461fd4569ce5",
"main.dart.js_291.part.js": "406724b6458b96260fa04ecc8c324342",
"main.dart.js_106.part.js": "38a27ddb3a4414b39398265ad3d4b120",
"main.dart.js_273.part.js": "29f5561d214d13704877c319166b9eab",
"main.dart.js_62.part.js": "f9534e2eb355dfe95b7a9ff5b7db6a33",
"main.dart.js_259.part.js": "afa0b8aac4731b65803c7664aa667bfd",
"main.dart.js_278.part.js": "c903e2ca4b30c50201b8e42a937a6b91",
"main.dart.js": "6668b1b28bd2395b5cba6c76f681cbc9",
"main.dart.js_222.part.js": "f20a3c35c7e9df01d6567ab65cdff737",
"main.dart.js_232.part.js": "2257a339037a860cd60d2f121ad139b5",
"main.dart.js_148.part.js": "05a5c91e3bed3414ef87afbd6f7655f9",
"main.dart.js_293.part.js": "8ccfea02ee62fa77e1d2fea7c62f185a",
"main.dart.js_124.part.js": "c3a1407749c350a7476e2142aa693244",
"main.dart.js_50.part.js": "e49662d49b5406957965be398ce95ef9",
"main.dart.js_97.part.js": "4f28c5b1c8f8ccf35b2e8591394e2274",
"main.dart.js_91.part.js": "bd038887638a59d0a0d77c34ca4d71de",
"main.dart.js_145.part.js": "25b764d3b8d9ee4cec72dd463dd811b7",
"main.dart.js_57.part.js": "1fc4783b5210fdc7fa579438378dc5d9",
"main.dart.js_104.part.js": "a227ce623b6e9de1b0df147a9429b0c0",
"main.dart.js_201.part.js": "df5395e996d7a108c664dc07181f928d",
"main.dart.js_181.part.js": "da95586637f0e01ab6f2c37a4b2fcc8d",
"main.dart.js_270.part.js": "90a5f3c79126aa74b5922372411b0ed3",
"main.dart.js_108.part.js": "fb9c92ae87c465bbb81a82f456169e02",
"main.dart.js_158.part.js": "e257de08e150406ec8b3b472db09bbdf",
"main.dart.js_33.part.js": "ecffb98a51961f54eee42a31c547ad38",
"main.dart.js_269.part.js": "a9ff621acdcb4aec7daefd637020b30b",
"main.dart.js_34.part.js": "9523e0cd59fcac8b9a468dad9dd8f355",
"main.dart.js_210.part.js": "0320c7af8ce47787d99d0c9fd0e34b42",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "98c3a35e1b5e56ee590933f704bd1ba9",
"main.dart.js_88.part.js": "9ffd816f6dc5edee16c21a4578c8fb5b",
"main.dart.js_202.part.js": "26f0970cbc5062cb036118da82e7dcaf",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "8462826b96bc958acc8124f47a12486e",
"main.dart.js_247.part.js": "2cb2ea3f80893ce7f6c524cadae46703",
"main.dart.js_7.part.js": "6b6971fb4e7fdbd3d0a8fc8ddfc60665",
"main.dart.js_140.part.js": "3871f722dc2366d365524b20cea68743",
"main.dart.js_170.part.js": "befe5a8275df81dd8e02f322e31c75cc",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "65e62651146c935c1fbdec3436cebcde",
"main.dart.js_27.part.js": "9a9a38a880a574ad2a39ba8c3b662914",
"main.dart.js_156.part.js": "bcab053d466b6f930563649da7cd2471",
"main.dart.js_4.part.js": "d64f2a473b6e9b105d4e78926b817502",
"main.dart.js_298.part.js": "d9c32fe0f171cbb04ed7ce7ed0343934",
"main.dart.js_219.part.js": "bd060781630ba888bd6ce42c7fc257fe",
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
"assets/assets/translations/uk.json": "7f8e394226cd7667b3671a3e3cee5efc",
"assets/assets/translations/pl.json": "67e4fad90546fd73760a99e253b9bde0",
"assets/assets/translations/sk.json": "8bdc79873b5db8f71d80926134b4b237",
"assets/assets/translations/en.json": "7780a8365b8670f4ba358b1842c09ad7",
"assets/assets/translations/cs.json": "88a1e80dab71c40883b33b814fd87f5a",
"assets/assets/translations/de.json": "d8339af262142bd3b7583326d693f3e6",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "4d24ce412454bbf54d6c33db7e5ff36b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "ca45d7fc9303dd44efe5c758068ae352",
"main.dart.js_147.part.js": "1df173e04a799bc4876ba20867974d2c",
"main.dart.js_60.part.js": "1e706da05d5f380343ebe39bd3920316",
"main.dart.js_263.part.js": "b10bd7f4bc26dcc913a992ee148eeb12",
"main.dart.js_220.part.js": "4d4c50dceb7454a8fe3b94be040ad173",
"main.dart.js_25.part.js": "81f0ecd92f29106759408f314b7d6a48",
"main.dart.js_288.part.js": "02d46f84ae605acf1e54d06e1682cf0a",
"main.dart.js_141.part.js": "27d5d6d81291475dba6535f233af29c5",
"main.dart.js_249.part.js": "23ec7ecf39cd931e94d7f9961a27312b",
"main.dart.js_123.part.js": "de6f724b5ca9632f2069972df282620c",
"main.dart.js_268.part.js": "8acf06d2aec0bcb8f05af8b152980031",
"main.dart.js_8.part.js": "3005022c74845df211a20967394bf49b",
"main.dart.js_198.part.js": "a8e230c0b70abcd045e681af3bd64ca6",
"main.dart.js_81.part.js": "ae611dac27acfc4691bae10f9e5dd1b4",
"main.dart.js_113.part.js": "44bcc927f6a863ad3f7cf762561528ec",
"main.dart.js_280.part.js": "2672f3992d164636164d8a364dac6412",
"main.dart.js_9.part.js": "8bcee692eeb1681f35ce433badeef477",
"main.dart.js_99.part.js": "8d69a2ba0294098044067844a9f0644d",
"main.dart.js_22.part.js": "d13fec74e2bee89bc346975728d729c9",
"main.dart.js_272.part.js": "0d93dfac2b3c4c179cb164641dca3ec4",
"main.dart.js_242.part.js": "e9febff0b28d67c1eab229525a4775f2",
"main.dart.js_86.part.js": "2d0bd004506ad02e95944ee7b615819a",
"main.dart.js_23.part.js": "f89ccc5f9fc9782f1bc1693d0bb6ed2b",
"index.html": "09140d484eabe2ae9362020927a8a2a8",
"/": "09140d484eabe2ae9362020927a8a2a8",
"main.dart.js_94.part.js": "6a850c90ec00400ff58d86deca15c441",
"main.dart.js_98.part.js": "3e01483dd0c572e17038457807cab9a2",
"main.dart.js_53.part.js": "9adac9bf6b99aea9811b4fbcdc3c8000",
"main.dart.js_74.part.js": "142e03ef4d229c301a8ce6d375c4348b",
"main.dart.js_235.part.js": "9246c7372aa19a441885f3ac5a2674af",
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
"main.dart.js_286.part.js": "8c97840e891ff0007e34d156f7b51a30",
"main.dart.js_118.part.js": "b93f9abf5b867fc170887a88ad8efdd5",
"main.dart.js_262.part.js": "185a181cbdb221150a5187614bb1926d",
"main.dart.js_26.part.js": "3f8503d5ff1e80f5cd1a362ae29a0de2",
"main.dart.js_240.part.js": "56d32dc5a4e70633cb19858aea3f0d45",
"main.dart.js_20.part.js": "b2e712c037947c19e1c04ff9bfaab67e",
"main.dart.js_214.part.js": "ff7e68e1dd40025e898988b5f3e01979",
"main.dart.js_51.part.js": "d890e3aa8ee6f8aa02c2996f74e315ab",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "6fed0468c8924fbf1ed03977377df894",
"main.dart.js_290.part.js": "b72d469dfff63820f852398bf4442c89",
"main.dart.js_1.part.js": "47c8cc2d385c18c6c690c0ef0bb0140c",
"main.dart.js_120.part.js": "b34c4f2f28d467124a5f253fdb9c1292",
"main.dart.js_63.part.js": "6a1c225b7278d081e88f2dad0e32dc1c",
"main.dart.js_211.part.js": "0cb4ae67df2158eb75c2dcfbd84e9fb5",
"main.dart.js_295.part.js": "2d258a1b3e48148a5677e6b0a40bf0cb",
"main.dart.js_12.part.js": "089459b39ec4205b0c80c9864bc97aea",
"main.dart.js_157.part.js": "29ad830b0e3f4e7d87104ab8afb7687e",
"main.dart.js_281.part.js": "72e878373614ade4f4da1eb85ca32175",
"main.dart.js_137.part.js": "5619acdff3c4330772ec706d85f9fc28",
"main.dart.js_276.part.js": "52a9ab58d1403d73943a38d0fb1c74d3",
"main.dart.js_28.part.js": "15076c4776b8cfdc8a6af2954dbbd707",
"main.dart.js_135.part.js": "b136d3c227c573f3bf0fd72c2f0afc14",
"main.dart.js_256.part.js": "d32da62ca361c06dba5f93cf6d40da7d",
"main.dart.js_237.part.js": "37b4acb2628805e12bcf0c4aaa9a1013",
"main.dart.js_193.part.js": "2aae4562ff980f487fa7c880165b12ee",
"main.dart.js_17.part.js": "28d3168a3dff2abd670fdce9c1e39875",
"main.dart.js_105.part.js": "633e0133296df85d84c17e9caffedf70",
"main.dart.js_206.part.js": "f7bd345b15820437fdbc4042aa874f19",
"main.dart.js_231.part.js": "aef60edd8ab6361489ae0c14ea2003e3",
"main.dart.js_43.part.js": "1b776cde630e6b59bf06092c49170a3c",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "e2bfcb4d3f119660da3828f1877bc0de",
"main.dart.js_292.part.js": "0954981191cfc3c2e3dd6498e3ece1b4",
"main.dart.js_15.part.js": "bd790ba7af7db73e5bc1f4bd6c694471",
"main.dart.js_19.part.js": "07b34d0be2b5609befec60ec6447884a",
"main.dart.js_284.part.js": "cee7a60468d5eb9e712de2c35baa2283",
"main.dart.js_255.part.js": "78792ea8c49c7c24c8eaa18f580f8702",
"main.dart.js_186.part.js": "d377a863041deef8ad02918a3933ee97",
"main.dart.js_163.part.js": "7f60aca9cb9bcd6bd60de445ba20c84d",
"main.dart.js_154.part.js": "d1341749dc004235c93a3d0e35537e25",
"main.dart.js_257.part.js": "ee151dacec46923f3f4fa0f6a9acf141",
"main.dart.js_16.part.js": "2fe5db72e21cc356b6775de527461f1d",
"main.dart.js_250.part.js": "939a457ce15b49dafbcc06d323a7b90f",
"main.dart.js_36.part.js": "51797c9a1495459261c5789ac109cfe7",
"main.dart.js_199.part.js": "70e80c5a44293f105d2886e4c49e66bd",
"main.dart.js_130.part.js": "a9444ed666038388e987bee08e26afae",
"main.dart.js_238.part.js": "54432b57880d69141ceff3ddae310300",
"main.dart.js_152.part.js": "1ebbeb05685630f4f985605bc70cd651",
"main.dart.js_32.part.js": "6a6208aede00debed63b475b5d7cb89d",
"main.dart.js_197.part.js": "7619576c89e066e421426fda7aafd6ea",
"main.dart.js_56.part.js": "2f7c279a5047c7f521fe755a7c1e114b",
"main.dart.js_227.part.js": "2df228badd9db575eed22b3e30b86755",
"main.dart.js_3.part.js": "9f35e4be63d5482483501d581ada79eb",
"main.dart.js_68.part.js": "a16d3c37ab7aadbf5983e4739633a2ce",
"main.dart.js_248.part.js": "fe303c803aab87c5f3a76f6e1516d9da",
"main.dart.js_133.part.js": "6c8b5c422a5f5bd4d7fb0212ec119e18",
"main.dart.js_188.part.js": "fc4a3842cba6dd41b8621f2c7310ce94",
"main.dart.js_204.part.js": "a8464a7e8a4b7361cb0119c6f8a7fbf3",
"main.dart.js_24.part.js": "c450c09118f4a8e4ae297ba920e2d33a",
"main.dart.js_90.part.js": "92f1d3408c264dfd2e828b95cfe78b11",
"main.dart.js_177.part.js": "9f7c8eceb06b7c0c40ab325832563a53",
"main.dart.js_299.part.js": "fe4b472daf180258ed02c511209ecddc",
"main.dart.js_85.part.js": "36cbd17b4d95f33e757381051a6bf4cb",
"main.dart.js_243.part.js": "8aa9e683be2805ad750da72578407f22",
"main.dart.js_212.part.js": "bbf533b06078c48de60430b028328438",
"main.dart.js_260.part.js": "eb06ea3d85e97b7c779a8f19646c1850",
"main.dart.js_114.part.js": "845634b596aba6b0c4c400e990b33646",
"main.dart.js_39.part.js": "f042cf9181701aecabde0ef135f0a862",
"main.dart.js_49.part.js": "372fb5a23f1032fc7e34e08fe7df98e4",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "24886708b2a9e1724d4422e8866f6c7c",
"main.dart.js_195.part.js": "e5c9e7ef46360b49b3aefa91873a92cd",
"main.dart.js_121.part.js": "16f8e2c5f2c04a7db3ae17a0019c6a74",
"main.dart.js_215.part.js": "2ccfe828e344a5edca3f7691b93a7e65",
"main.dart.js_112.part.js": "9819fabd13757401390cdeb86ba1d5a4",
"main.dart.js_139.part.js": "0d17aa20b4d9fbdd6ba28d86d297aae1",
"main.dart.js_143.part.js": "2dadba3ca24ad93166b8e6dacf8a34e9",
"main.dart.js_80.part.js": "d55a21e27a7b2b4b721861c91caae9df",
"main.dart.js_279.part.js": "94b4c7233b26b88d0aac4cfda46fcf33",
"main.dart.js_30.part.js": "a758656eec181ace9929c2a18cccc590",
"main.dart.js_267.part.js": "018207d3e3ed9c48126d63a0636c6bba",
"main.dart.js_277.part.js": "787e732d4b12956cf39ff49fa7ed03eb",
"main.dart.js_136.part.js": "d0886b4372ba08a94df289099e04a724",
"main.dart.js_168.part.js": "28fa0a23d5d6a14616895dd98d7a2f3f",
"main.dart.js_271.part.js": "085984d0889b6c845710ff97d5a8bad5",
"main.dart.js_59.part.js": "a3f2cf8185e490c1171d3484826d83ca",
"main.dart.js_47.part.js": "0f48a856d865b2faf623f7a6e2fe4a9b",
"main.dart.js_95.part.js": "21059bd01acbe8b4716ca789d772e52f",
"main.dart.js_107.part.js": "12d92382f2e3a0293ce9e8418c3c487f",
"main.dart.js_29.part.js": "bd16dc5fa44bec50948438db598f2919",
"main.dart.js_236.part.js": "825a46706f0aa4196f930f79e7399379",
"main.dart.js_58.part.js": "00888824726fd40bf6890f7aab78f8ce",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "a79376a5a3d2b312fb38779e6a564b3b",
"main.dart.js_79.part.js": "abddde8f4bc3e96610579f40cb69f650",
"main.dart.js_109.part.js": "4d713e5ba49d24e99b72f23783a297ce",
"main.dart.js_92.part.js": "685dd27180fc780072ff76dcbe9b1130",
"main.dart.js_224.part.js": "159176de119d69b63d831120cbfaa037",
"main.dart.js_93.part.js": "2e3a41f75c58c4c8e69b174bb69aa357",
"main.dart.js_223.part.js": "7b58a007567df1ae5b534c8856851394",
"main.dart.js_11.part.js": "aaff320dd7846e73a7bfbffb3b0884d8",
"main.dart.js_125.part.js": "46dc5589292870431929efa29cbb0769",
"main.dart.js_131.part.js": "d8628ecaed010d734359b5b79999ac7b",
"main.dart.js_226.part.js": "50c48afad02e30a0312c7757c9233c6a",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "d583d1752c80085a3c0f2977f51905e3",
"main.dart.js_178.part.js": "ac0a70bd8bb47d3f332868dfa94e9413",
"main.dart.js_258.part.js": "8f620ccf55a189a61b9513e60277bc38",
"main.dart.js_297.part.js": "dc5f4ebf96b8564d7c477b192051f9c9",
"main.dart.js_70.part.js": "abc0cf8880f0286f2b9e075a3a2978e7",
"main.dart.js_187.part.js": "4e36661dd21c9e26d0a76d88d5237010",
"version.json": "3bd689998d350c4e5d0e45b5117f2cf7",
"flutter_bootstrap.js": "07490ef54ccc3ec85ff86bacd52d9d18",
"main.dart.js_191.part.js": "aef2ec7368cc4c3676d26f50e73ab3e3"};
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
