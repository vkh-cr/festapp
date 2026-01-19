'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_104.part.js": "734bda711df661a3cf6d997fe0fd1a35",
"main.dart.js_113.part.js": "e5d830db2d0086482f349d63abc5b16e",
"main.dart.js_37.part.js": "f9b2f0e74a74a52e198d6e5ce035f3d1",
"main.dart.js_3.part.js": "dd3612811a977baf572c0a6bb97a3ceb",
"main.dart.js_291.part.js": "a1a0bbadf61086cc6ce81606228c4244",
"site.webmanifest": "68f54bdc321df4be45aae846e9f367d2",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"main.dart.js_208.part.js": "c9c23364f4df5af13d04b927b43e57eb",
"main.dart.js_207.part.js": "2e2a1858ff4296f90552041646198909",
"main.dart.js_185.part.js": "3aa93fd0df9a9064a50212b970d4e212",
"main.dart.js_135.part.js": "2d08537be5f1230de4d6ed78035e645b",
"main.dart.js_65.part.js": "f01e87513a9204bec256959b2403f884",
"main.dart.js_308.part.js": "96c372cf729728df66ed7dc217a3699a",
"main.dart.js_167.part.js": "8ae626c5363856a237e31feb14e7a757",
"main.dart.js_271.part.js": "0e70d55c5bd40e61b6d1e7c6e20bff7c",
"main.dart.js_201.part.js": "1c64cde1330597c1d6308d09a503c34b",
"main.dart.js_112.part.js": "f931e781b1e4fbd45e2ffbeba311a240",
"main.dart.js_105.part.js": "dba29f7ea57581aa9fb99d101441f5cb",
"main.dart.js_148.part.js": "fca59b0df485f2cfcecb283175ca666c",
"main.dart.js_137.part.js": "8506cab4dc710e39a6ee30a1a6f3226c",
"main.dart.js_101.part.js": "7d6b9c9eeb9fa556ace433a83b635882",
"main.dart.js_297.part.js": "4681fa3d4970f6dfba4e0bf854e6b68e",
"main.dart.js_1.part.js": "5a9b53cc17b9bfebe0cb223d4383fc7f",
"main.dart.js_173.part.js": "6df484b4ec08996cddc18d38718c04d6",
"main.dart.js_92.part.js": "cf6751ffbce8e50bc172c436566a7b8c",
"main.dart.js_55.part.js": "350f96eb6a8c4e0755e054e808bf760e",
"main.dart.js_87.part.js": "da689c962be13ec266a15a9448197d0d",
"main.dart.js_63.part.js": "4230b66b5738b1858d2c4ee016ece2ca",
"main.dart.js_27.part.js": "e5902eb0b84377f5478be51ec94844eb",
"main.dart.js_36.part.js": "5e8e37f8f896e2383dcc18f0af399a5a",
"main.dart.js_245.part.js": "0e91d3747494ce0fa642514b0fabfd65",
"main.dart.js_13.part.js": "b41a0d8676627b0d20f66f2baf161ed7",
"main.dart.js_136.part.js": "5d9d32a3fd75ebde0a25ffbdc331aae5",
"main.dart.js_311.part.js": "ecf2ca933771191138565d0c44ef6a50",
"main.dart.js_220.part.js": "6bb893c9f732e619e8d2e15f59db4967",
"main.dart.js_77.part.js": "2644b164a81e9b56c6fe4a9a703a4588",
"main.dart.js_106.part.js": "be4e1be7a602954eb53267140307c5e6",
"main.dart.js_14.part.js": "9fec4af3c5da27b14aeb89fe525c7bf1",
"main.dart.js_39.part.js": "b3d4ef82054c4c0a005fc9dc75da70c0",
"main.dart.js_48.part.js": "4a871cb445c077f668a63e9a7bcb0f9f",
"main.dart.js_19.part.js": "d1d160bc1aae2978a2fd78f717542a71",
"main.dart.js_132.part.js": "63183fd617a4ebf920532010f07bfecd",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_280.part.js": "3f269d937fb6c9c42e2dca94b448d5fe",
"main.dart.js_274.part.js": "adc3ce2f9c3d0086cefd16fac0685b53",
"main.dart.js_318.part.js": "a9420a36b92a6c10e364042278a0a575",
"main.dart.js_73.part.js": "bb3d2681e2004b7bb1b46bdb565c96fd",
"main.dart.js_214.part.js": "d97c7d482eb2676c2c340abbf1e3a92b",
"main.dart.js_81.part.js": "5ba6f6e6ee98720c357c3be2e4c3daad",
"main.dart.js_30.part.js": "d01a1e3856affeb519db37adcb98735f",
"main.dart.js_295.part.js": "209a97126e5507bdc15ca7ff6b63b8b1",
"main.dart.js_140.part.js": "8bcec9d68dae415dee2aec7fcf3000a7",
"main.dart.js_11.part.js": "53596244003978749eb9693886b56ee3",
"main.dart.js_126.part.js": "852e58c122884db40940e7c25576195a",
"main.dart.js_169.part.js": "ffbc6429f06d076e60a51a7144e09b65",
"main.dart.js_58.part.js": "4cc1b0f3ce99255be2ec6c33fce47671",
"main.dart.js_130.part.js": "72bd52c8f6e2e1c8c0b87f2502a41155",
"main.dart.js_156.part.js": "8210b7bbd41eabae3b7f84b9b39edd2a",
"main.dart.js_184.part.js": "1e2ed5ca2bb93d9d861c625b858ccc53",
"main.dart.js_234.part.js": "00d0b745c9bbb12b066e9b91b20e1bdd",
"main.dart.js_316.part.js": "f9906ad4df5d7d444eda5777cf302ea4",
"main.dart.js_71.part.js": "c4030d6552521c1aaae9530164b939e4",
"main.dart.js_161.part.js": "e97316282ab18b686601d7ada3cd47d2",
"main.dart.js_42.part.js": "bb2b8d44232d5c120d45becdec6acc96",
"main.dart.js_45.part.js": "d252ebe135e9cffab795f2ff48ebbaa4",
"main.dart.js_246.part.js": "3e8040a527fea89ad179dbe2ddc3859e",
"index.html": "69d5f2d9dc7d594aef1e9f519024015b",
"/": "69d5f2d9dc7d594aef1e9f519024015b",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_35.part.js": "d986c26151ecd713dd4a1d9e0f5c7cb1",
"main.dart.js_302.part.js": "ec005dd5e551a074762a9367f076c902",
"main.dart.js_79.part.js": "e338d4225e9b34b0505753620668b1ab",
"main.dart.js_217.part.js": "1d0370772af0dc9a210861d6f2e38062",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_241.part.js": "a2c45cfc56ee86b566e5183b3ed76de3",
"main.dart.js_95.part.js": "05a48276ee8ae90e86fd7315124c36c6",
"main.dart.js_119.part.js": "e80fa3a3e83e9fd75ce13330bf5e5f43",
"main.dart.js_327.part.js": "e9858308f74b4c0c0544f7ca0b0f8a6d",
"main.dart.js_10.part.js": "d415c6348a4dc1a2b7818f3a60db7154",
"main.dart.js_168.part.js": "e0d7a51d5c26af085afa288245774182",
"main.dart.js_244.part.js": "1f437ceceda87c4871b688e53172785f",
"main.dart.js_98.part.js": "b3894b25a53e7bb76cbfb88faea890fa",
"main.dart.js_41.part.js": "532ffe8bd2f82c7a5064511a24360d4f",
"main.dart.js_242.part.js": "4b86a8e8860a2fecf032dbf58691d53f",
"main.dart.js_151.part.js": "94f448e3e65ffba1f5fe24d4aeb0289d",
"main.dart.js_96.part.js": "946cd316b62c625cc54c2ea98bc3c1b4",
"main.dart.js_78.part.js": "f733cecbb275a7479689d25037a4816d",
"main.dart.js_75.part.js": "c948b0ad2149cac7224903d84c819293",
"main.dart.js_122.part.js": "e88fb1a8abe80b88f5bf8cbbe4e75fde",
"main.dart.js_294.part.js": "eef30f15c84315ab7d90f0feeccea327",
"main.dart.js_177.part.js": "0b1904c0162cf86b42b8860b2eca6051",
"main.dart.js_134.part.js": "002d9e14545e273e1d0a18f2cb558ab1",
"main.dart.js_82.part.js": "1fd1881cda039843443fe94912dff585",
"main.dart.js_149.part.js": "805d11ff94c786509b1dd783a2758516",
"main.dart.js_261.part.js": "a5fa2eb141ead5ce0476712b8916adc7",
"main.dart.js_34.part.js": "fe85cbd2d11ae7f6f1b5561d1e6dbf5b",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_262.part.js": "59116fb7e5d3f63225a1dab9ec02c337",
"main.dart.js_299.part.js": "34ea67a91e5bad92b9b1f945a08c83cc",
"main.dart.js_138.part.js": "61b69f25723eb941da0c5de751edb41c",
"main.dart.js_322.part.js": "7e52e73d420837ee5dddc4250942984f",
"main.dart.js_179.part.js": "07429c070790e45566997468cb98c8f0",
"main.dart.js_330.part.js": "11422160c24df5e6c7a20e654e8323a5",
"main.dart.js_301.part.js": "926a930f926cdc37835be68a8e65ba53",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/translations/en.json": "fc18827fd7c1b35adb60680e9013d80b",
"assets/assets/translations/uk.json": "2c47c07e477e41bd60b4d3a1ed68f522",
"assets/assets/translations/de.json": "e0ddac5bd3ec3cbd16695dff2027494e",
"assets/assets/translations/pl.json": "24082b33bb473455d844eeb9d5352f38",
"assets/assets/translations/cs.json": "418d94d17fcd1d49c8168a16008b1b34",
"assets/assets/translations/sk.json": "9e70dc0dcb59dfff98ca64901e22634b",
"assets/fonts/MaterialIcons-Regular.otf": "de1bf1ceee2d9389f57cf71acd63d769",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/NOTICES": "4740421ce23457203d137d0d81115dcd",
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
"assets/FontManifest.json": "a930eec321fff21b08272317d91d885b",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"main.dart.js_53.part.js": "24f46737ce45fb4d8809c1903d3b5814",
"main.dart.js_47.part.js": "70e864b4124cd76dc55ebb9b14576bb1",
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
"main.dart.js_69.part.js": "f5207268d727d3f16cad696243a9694a",
"main.dart.js_107.part.js": "d8a020afb700309acddfaf02969e0571",
"main.dart.js_89.part.js": "13f3d8e9eaed6ed87cca749f985009e7",
"main.dart.js_334.part.js": "db1791247b5a3de69a283500c31ff734",
"main.dart.js_160.part.js": "3fd191f3cdce8ada490a473c50459c9e",
"main.dart.js_181.part.js": "d845194678c6f05510ff82cabdfdb1f0",
"main.dart.js_56.part.js": "0c0143b17b9f5347ccf0ef14005faaa2",
"main.dart.js_72.part.js": "8db74dc9eb656f244e3216ea3cc9c4a4",
"main.dart.js_44.part.js": "a269fc55ae48388ad5642f7cc17da949",
"main.dart.js_195.part.js": "c0e323c1916f3c477a0bc0caba927591",
"main.dart.js_32.part.js": "957aea391610f634b4291ef0ef3c48e6",
"main.dart.js_320.part.js": "59d53872eb8ddbb0919d7bafb1f31168",
"main.dart.js_31.part.js": "2b53ab7d1793c4ea9ce346986158182c",
"main.dart.js_5.part.js": "cdac04e6eb9fb9ecd527e937d0a33e9d",
"main.dart.js_254.part.js": "bad5f06809e8d5a6734f22e713b96a21",
"main.dart.js_228.part.js": "42f85e18f9115f86ad64986d2b4db95b",
"main.dart.js_292.part.js": "928a823e5ea5e656e69d7081691bcc93",
"main.dart.js_16.part.js": "45669b92eb7fba1b69d67071f7d97575",
"main.dart.js_50.part.js": "41f4851f1cafbb8596f9f8062aacb96f",
"main.dart.js_296.part.js": "5c89362d3735382b5acef6e5a04fce21",
"main.dart.js_103.part.js": "0d97f2e58c5095e05e7b8905b668ce6a",
"main.dart.js_209.part.js": "9259dfdd317c3e223720ce545bcf3d6d",
"main.dart.js_278.part.js": "ebbde29b48263f2ad9f47380c8a8ceae",
"main.dart.js_239.part.js": "38f9ed3690af39e6d393714bd2a62f87",
"main.dart.js_205.part.js": "87540eaf7c676614ebf700366f498c19",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_144.part.js": "92ee34838d9acc21082c4b5f063393be",
"main.dart.js_202.part.js": "3c8fc7d4d81d7262917b4b303af76764",
"main.dart.js_286.part.js": "9982774f2cd062d5a9cebcd2f854ba6b",
"main.dart.js_232.part.js": "f34d4277f50f89c14d9fe2e13ed88e64",
"main.dart.js_336.part.js": "fcc56858731aa6b595e32fe2b3984245",
"main.dart.js_52.part.js": "35b71320faf40e5c584e4a3034bae0ad",
"main.dart.js_333.part.js": "9b1e1176f808fdeafc1708c4aa3f22d0",
"main.dart.js_198.part.js": "125153dbc0dc57a9b5f97b286a5d73af",
"main.dart.js_196.part.js": "058d7ce80c901380b91b8a3cf99928b8",
"main.dart.js_303.part.js": "9b3aa0a06691c0d0b94da4e0bdb2e350",
"main.dart.js_141.part.js": "d3572b5a8c96890a376760c616a51d7e",
"main.dart.js_192.part.js": "832c6f67dd0e539aeb7cc915b0ee6485",
"main.dart.js_287.part.js": "fa88765a12e3ace614ba8bd7a462ab71",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_7.part.js": "e5d660a93a7b22eb657af1e84e0e7874",
"main.dart.js_331.part.js": "6d616097f5b5c5533a0b430ed232bcdf",
"main.dart.js_23.part.js": "7011738a9714937fa48d5d4f2949d4dd",
"main.dart.js_154.part.js": "58fa7560aa737d5d16027b1eba2d1aaa",
"main.dart.js_68.part.js": "d2aab234ddfb5d3b21d13aa8f4df8e4c",
"main.dart.js_252.part.js": "69baf7d1d177c2cf4bc37761e4b81926",
"main.dart.js_237.part.js": "2325b5c7e1e143b41841d80f08a1a5a3",
"main.dart.js_142.part.js": "1eedf88cfa3665d6a02f5b2e3368c45b",
"main.dart.js_290.part.js": "58b76e6f6ad2cb6251d1caf3f6ca1d08",
"main.dart.js_212.part.js": "0f5e9d09af603745a40b21838a3c4308",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_213.part.js": "4c1315541b70192698de22e5872e000e",
"main.dart.js_249.part.js": "000555b8c50c28ba7be09410390acd91",
"main.dart.js_131.part.js": "33eff20579157b1baf1a282e7a8d5881",
"main.dart.js_97.part.js": "011e92598bc4bcd128d279d35230c655",
"main.dart.js_269.part.js": "c2567e9068936de0f984beae574fd0e2",
"main.dart.js_67.part.js": "79a12ea2c02ac89a81960029a6cc5864",
"main.dart.js_313.part.js": "c905f9d0041b8e4340e3e2ef4a16b5a7",
"main.dart.js_8.part.js": "df0e9d31a5faf6ba0881ab0a0b081d94",
"main.dart.js_21.part.js": "bc8aea8b3cd460145cbb7f50b97c3bc9",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_123.part.js": "945a99e23a9d1a415044a3b6d6329cb2",
"main.dart.js_93.part.js": "17a9a8084029c73ec3847b17bfbc7c8b",
"main.dart.js_186.part.js": "5ba70cf975f756f28fd30611a3239e35",
"main.dart.js_312.part.js": "f33b431f2bd18e4155061fa848291dff",
"main.dart.js_325.part.js": "955bb2115c99ae71ab7e7123fd432c4f",
"main.dart.js_298.part.js": "8ac58e2512b5f95e723c2f65f9fa247e",
"main.dart.js_66.part.js": "d9ced68e760fa2c7a5974ccea02d9a02",
"main.dart.js_64.part.js": "aa261538263f39241b33e4118fb71b78",
"main.dart.js_176.part.js": "00e7cef1384dc6deada4d7cc9768ffb7",
"main.dart.js_270.part.js": "481de0a4a8c0293c16cb50ba07c434c5",
"main.dart.js_321.part.js": "b8dbdf629eee840ac2e79b58ed20ea5a",
"main.dart.js_70.part.js": "2526097e71c141d680abc7c28b1de00d",
"main.dart.js_46.part.js": "a5e3985e8ea9677ce17c7569e9fc88d2",
"main.dart.js_40.part.js": "5efbc13ec12f0f2c30aaef6216e67a8a",
"main.dart.js_273.part.js": "07d4d87440da20e4f888534c9034eb04",
"main.dart.js_163.part.js": "bfc3b07122912e9ebdaec7f3d58d5eb7",
"main.dart.js_158.part.js": "cfb81f99692847ff53928fb864359c35",
"main.dart.js_255.part.js": "e6c07197ee944edcc8503b34c18896e4",
"main.dart.js_235.part.js": "b278894838154900ff45794f8da45238",
"main.dart.js_268.part.js": "8b0bcd285559ea54026a909feea92769",
"main.dart.js_172.part.js": "d7222a38c5e769011415f3640328dba8",
"main.dart.js_84.part.js": "6203c150bab8fe956b5934837b198eee",
"main.dart.js_4.part.js": "00085596d804d767f1585ad5d35ca967",
"main.dart.js_150.part.js": "2883dd9fdc2e9e34ddbd37d37d5d8ec5",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_183.part.js": "9dcb5bad3922e682d077d63cd4fccb2d",
"main.dart.js_248.part.js": "ab83f3c72f98c7fcb052e61e0c197d44",
"main.dart.js_109.part.js": "036be7dce0495225c7bbaaac46612951",
"main.dart.js_147.part.js": "9da77dfa19c8866c87c49e1920f4178b",
"main.dart.js_25.part.js": "5ee9021cf8ccfac4f4a1fcdc74ebb046",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_275.part.js": "aadea0a0030bc6735615e257c27e693b",
"main.dart.js_281.part.js": "46552a2bcbbbb1fd234442ec65f09c4b",
"main.dart.js_332.part.js": "2fee0e5cd2f2a44b0137b6cb1e33770a",
"main.dart.js_28.part.js": "a0d80526becfdad4c185464aa435e900",
"main.dart.js_288.part.js": "d4bb97e9d0d097b22c16e86dfb46df82",
"main.dart.js_314.part.js": "ead3652c37864b3bf0d3b0e47461f6d2",
"main.dart.js_62.part.js": "1c183398355f4ba6c53b2252740aa5ea",
"main.dart.js_206.part.js": "8b31ac3185725594e1f871bfb36dd2ab",
"main.dart.js_29.part.js": "64a46ddf25dbf6d122a1f30c8da18e1a",
"main.dart.js_307.part.js": "e55b068a2e8daf40ca15c2976e17cbf8",
"main.dart.js_279.part.js": "aa363ad583872348950937242d11d33f",
"main.dart.js_127.part.js": "f79995836d6e9aebf1c957d73ed504ae",
"main.dart.js_216.part.js": "79add14f4153f562418d98151ae1a203",
"main.dart.js_319.part.js": "bdc47111549f7bf15e348287d477149c",
"main.dart.js_133.part.js": "a5d5a54fed8a0887772829ccbb6bfbc8",
"main.dart.js_165.part.js": "5a8fddf0b64399920f3f59d124c7b9a8",
"main.dart.js_215.part.js": "06f5d07af2b12244c4adeec1001d4eff",
"main.dart.js_253.part.js": "bea08edd4daabbaec516cb34b7233a92",
"main.dart.js_323.part.js": "6117a3949a358d5cb9b0839523c7f4d5",
"main.dart.js_335.part.js": "b50470c4e6a95cae24ac72d3407220d5",
"main.dart.js_227.part.js": "ddde4c58844eb20cd90c2f65d9c33cd8",
"main.dart.js_171.part.js": "ae8f18f6045b00a5735ebaa7b17e2e50",
"main.dart.js_218.part.js": "da3a33543dfdfc4f5f8d58588f696cdd",
"main.dart.js_121.part.js": "d1454069e5e74fe501be16d0b6169d69",
"main.dart.js_324.part.js": "fee6906b70d349586e6fd9d69d25e169",
"main.dart.js_74.part.js": "7161bd0ad82b5d1dae4d2a2cd4616f9e",
"main.dart.js_328.part.js": "085ccedcb576098c0d970a43dcc55a6b",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_108.part.js": "930e218ff31450622c31793c2dd1e20d",
"main.dart.js_203.part.js": "c99e62ab42e7eb85abd17f67ecd5a98a",
"main.dart.js_12.part.js": "b5c646ed865b849d6fd81a3b39d93a7b",
"main.dart.js_231.part.js": "8a8100cd0427d123af95b6639576910f",
"main.dart.js_289.part.js": "18b8e0fe3b84b6db637af67a9fc55a35",
"main.dart.js_38.part.js": "b3ce542cd9a20cc7e21d6732a9d687e2",
"main.dart.js_83.part.js": "d51060dfc4cfe9541aec807268acedaa",
"main.dart.js_111.part.js": "7e7e0e5827e9821b8371ebe259800574",
"main.dart.js_170.part.js": "aa749581e0d3f3600eec171ebc4f50aa",
"main.dart.js_337.part.js": "0df161ad44ca75a6a6b77a5dd128c9c2",
"main.dart.js_219.part.js": "e325270f2c30f0b4ba3bec942e07c97c",
"flutter_bootstrap.js": "dd7ae9f99ac98f2581be5c06ba93e815",
"main.dart.js_143.part.js": "ee5e6380dc42bb3feff92e6f062cf610",
"main.dart.js_15.part.js": "c6fc0a246f6ead8f0292dad8e9ea9d81",
"main.dart.js_9.part.js": "17c3d40e3ad2d69d16136066ef972c80",
"main.dart.js_189.part.js": "a5a99758eba4f74bbf09cf178833016f",
"main.dart.js_26.part.js": "3cc471895fcf2036b8a8cc4298fb21d7",
"main.dart.js_315.part.js": "a52f9fb7a982af616d1236a86c30cec1",
"main.dart.js_125.part.js": "735177ccd6a747b2b1c4a5022d65d748",
"main.dart.js_304.part.js": "4ba03d9387d2bdfb4bceb81d95ebe341",
"main.dart.js_264.part.js": "4e0ef5c8240362d10779a2f4eb8b56c5",
"main.dart.js_306.part.js": "466e467e4912bd0ae3bf44f45cf8a1e8",
"main.dart.js_155.part.js": "765b46acc01bc14d66faab58e8b11e5d",
"main.dart.js_178.part.js": "94eb6534773337a6574f5e4b48441830",
"version.json": "085bdd1ab07b8da2d243f38391dc9df5",
"main.dart.js_225.part.js": "4e0798e04e24e013ed1227b3644033ea",
"main.dart.js_293.part.js": "175afc5e9693e9ed0670eed6a879d71c",
"main.dart.js_310.part.js": "7df5d2f0b9e891274b1c908566455363",
"main.dart.js_222.part.js": "c3963edb305f14444ac9caec3e2806ab",
"main.dart.js_238.part.js": "0089dcb90bb591c6b5e753aa22867708",
"main.dart.js_146.part.js": "b85b3d822e2d426c601523a4ac54c12f",
"main.dart.js_221.part.js": "f57025b76c98e1311937315b29ad90af",
"main.dart.js_157.part.js": "c97d373d78837e55b2c991bcdd7b08f4",
"main.dart.js_329.part.js": "7d5fc881a8f7d6d36dddac0761f340ec",
"main.dart.js_187.part.js": "e1cf0e6a34b4aa0a40621040df141322",
"main.dart.js": "af548812fbba2a89a49418438f61e492",
"main.dart.js_51.part.js": "89d201d3b714b2df7a1555ddf3cfad81",
"main.dart.js_182.part.js": "0c5707a9890255702a5cd4b3b8d5bda5",
"main.dart.js_224.part.js": "cdb1ffa6eec20a2a898cfb5d951820df",
"main.dart.js_6.part.js": "80c2160a9f188d70012945d94b4c3ace",
"main.dart.js_272.part.js": "3aac5fbaf6dd0ae49f4647dfba72eb52",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_110.part.js": "b2afa39c92990d36d08cb8eb2c7274c7",
"main.dart.js_94.part.js": "310623062e4dc914040f2ffd4003972a",
"main.dart.js_99.part.js": "1ac70c5bdbb973407ec3c87853111e4b",
"main.dart.js_223.part.js": "59a469a72eb9a43591ed3c4b23e92bdf",
"main.dart.js_33.part.js": "43d9059adb94c37a81167cc852142687",
"main.dart.js_226.part.js": "f787dec56439e969e814ff67c8961edc",
"main.dart.js_80.part.js": "e83f695a6d576e7e5d6f329da3ffe57c",
"main.dart.js_236.part.js": "205a85f025d70bfd9596b117fd8dcca9",
"main.dart.js_277.part.js": "dd020663b16a6f85773b9bca32655837",
"main.dart.js_118.part.js": "f133345c6b9e82a894b39ebd1293c222"};
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
