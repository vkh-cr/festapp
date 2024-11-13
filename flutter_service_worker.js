'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "3edba600d20008cac2f35191b83c8229",
"main.dart.js_117.part.js": "2b73cc5fa05d9e6486a01ecedb6a3c6f",
"main.dart.js_182.part.js": "4050dbde245d477a5b29ffc9c866bbe2",
"main.dart.js_75.part.js": "d59e2768e44326c74fd38a3ef7e31628",
"main.dart.js_244.part.js": "55349e41a7cf9127f370de82e8852318",
"main.dart.js_83.part.js": "aacf98e3f38bdec726688c5fefb340c9",
"main.dart.js_176.part.js": "729ea7d299c402f283f3459a64a3e159",
"main.dart.js_96.part.js": "75fdf76257dfc6dae5ab53bb3aff6c9a",
"main.dart.js_245.part.js": "e7be2a737e1eee838a9554148a4c3117",
"main.dart.js_87.part.js": "448c0e6a60cc8fcc1bd11f40b55f0b8e",
"main.dart.js_251.part.js": "295aac257fcc21cf924e0cbeffad663c",
"main.dart.js_126.part.js": "778e9f55e45c295a24a03171a97a476b",
"main.dart.js_129.part.js": "e25c0885653c164634cdceca09c7d463",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "13340717a4e0797a58dac277f67401a6",
"main.dart.js_172.part.js": "0073ce04149f2ad56e252377b2f86826",
"main.dart.js_142.part.js": "708e7e678a6899b4b2a9302871ede0e6",
"main.dart.js_40.part.js": "b1e8148b9d86edad954ae4fa40e65eff",
"main.dart.js_209.part.js": "b333d311bffbe1447da051c2bed55082",
"main.dart.js_115.part.js": "30221ff817bb47ff7e71f1b5be1c26cc",
"main.dart.js_10.part.js": "ad8df6531eae0319c5ae96288f58a9b2",
"main.dart.js_84.part.js": "bebceed1e761b0c614e6f883c05cfec0",
"main.dart.js_122.part.js": "2e5ab020fe0ed3bb13082904caa510aa",
"main.dart.js_103.part.js": "e20966ce9667389a547e5b38f7bdd5c6",
"main.dart.js_230.part.js": "913adf112b2539d21101f1014e072fc1",
"main.dart.js_153.part.js": "727cfa75ff30460991e16395b40ffc1f",
"main.dart.js_89.part.js": "48a02a5be256e23468be22805c3998ef",
"main.dart.js_71.part.js": "3d3b647272414cf777a5ca6a111cc83c",
"main.dart.js_146.part.js": "4c578fbcc8b4792168b2b12c0826b894",
"main.dart.js_37.part.js": "6a1b758e926917f651cbd6e586cbc35c",
"main.dart.js_132.part.js": "ad39e401c5f053b16589fd67b097a21e",
"main.dart.js_165.part.js": "e8f5c58d180c8f50cfa7b4561192bf96",
"main.dart.js_127.part.js": "54d6514399b9fc8af71364c981a5160b",
"main.dart.js_175.part.js": "70727296d551015eb4cea8032e950242",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_216.part.js": "9f2c81ce257518156ce2753324725c8b",
"main.dart.js_64.part.js": "3617c744efb348079411d868b9a81641",
"main.dart.js_13.part.js": "fc20ca15b1d165a915d0bcd12ca6d25f",
"main.dart.js_246.part.js": "affc64555b74d179422387ac8b650686",
"main.dart.js_174.part.js": "8066690afaa4cadb0e4085d2bfcbadbf",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "25e817e5d21bab6b6fea21c62f4909ea",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_265.part.js": "1aff7e3d30085e6a08f520db178b45b0",
"main.dart.js_31.part.js": "7f7bab98fae6a51742454f3e1bded2c6",
"main.dart.js_119.part.js": "b067d12d4487285bc82c0762ae4b9c69",
"main.dart.js_18.part.js": "32cdb0d12be7fb6ca10c591013eaa777",
"main.dart.js_35.part.js": "76984043a37ef11f447ccb60f7944c6a",
"main.dart.js_200.part.js": "b145ee1acaf49f05bc1fd7983c21036b",
"main.dart.js_101.part.js": "dc3a72405be170d59feb89c84eb987a3",
"main.dart.js_77.part.js": "1793ce4bb5b07bec2ccfcdeb9da05046",
"main.dart.js_149.part.js": "9f7cfc4fca73bb869d476279c2b92075",
"main.dart.js_208.part.js": "c089ccdb93cdd3a95716faee608552c6",
"main.dart.js_82.part.js": "db59c120102811885f71c61fcde450d7",
"main.dart.js_173.part.js": "b8a8360accec83d5a9bea6b698ce2c43",
"main.dart.js_106.part.js": "92df4ce05715a37daac88eb4eacd6595",
"main.dart.js_273.part.js": "dd141560f623f074b3f5233c675c85e5",
"main.dart.js_62.part.js": "4814cae98a4917ad1339d278d8525841",
"main.dart.js_259.part.js": "37af20d411c28fca53a5165085b74c0f",
"main.dart.js_207.part.js": "9c491da43bbdb79d9518f4bc5f8e73b2",
"main.dart.js": "4bbd74af9b8a43a0641af3fd167d05b8",
"main.dart.js_222.part.js": "c477e052d94e03e47f231a3658da122c",
"main.dart.js_232.part.js": "aeb9cb48a282df3da826c9fad15e1eac",
"main.dart.js_148.part.js": "e1529e28c55f89ce2c3b2bc1356d8dd0",
"main.dart.js_124.part.js": "f6ad28ea5e0be648c459369108a6a52a",
"main.dart.js_50.part.js": "569411960b28c4e6b7276e029e1fea74",
"main.dart.js_97.part.js": "65dc4378afa42bf5c15d53cdc9310b23",
"main.dart.js_192.part.js": "ff011ef48e93a2cdc5bf8e61674769cf",
"main.dart.js_229.part.js": "58fe0d26c86678313021e39306229361",
"main.dart.js_57.part.js": "3da83d68e6429c69d87a410401dfa058",
"main.dart.js_190.part.js": "479e6e15ba7d119aac811c2ab99f7100",
"main.dart.js_69.part.js": "d2a03fefba5f27150f635eb1f267ad97",
"main.dart.js_196.part.js": "b1843260bc210b8c64809d0b91d65ed4",
"main.dart.js_181.part.js": "de28041e2f1c5c92c95d39f3e9a08036",
"main.dart.js_270.part.js": "4f6f83280885eb5989ef80f95122e076",
"main.dart.js_108.part.js": "b206fe8c02f0c08147de3b294bf76e7e",
"main.dart.js_158.part.js": "03d4ae12a995d4a61d36b87865a75f98",
"main.dart.js_33.part.js": "b29d37f51c71f2eb87c1f1481c861d9b",
"main.dart.js_269.part.js": "60695ad78f052dbe14396cdc9f7451b0",
"main.dart.js_217.part.js": "a0d344d5fba19df5c0fd34f6f025c05e",
"main.dart.js_34.part.js": "815699730a182b2c650a7bd398d81f16",
"main.dart.js_210.part.js": "f94ac3c9995287fadf0d5e2f99018d7a",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "502901a94e6429b80ec58faef2a8e390",
"main.dart.js_88.part.js": "a4ed0867d1f2b6f59a854eb12771ac2b",
"main.dart.js_202.part.js": "64503c8d8e81182321fc69d99b8a45d4",
"main.dart.js_183.part.js": "ba84f24a90841158613a3390995ff6c3",
"main.dart.js_167.part.js": "3ed5c8ee78054231c4a2b2594c4249ad",
"main.dart.js_203.part.js": "9c0e3da90a98c3127766269aa0a0aaf1",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "9f57c40fcc0d8c9872c12b12dada4fc2",
"main.dart.js_7.part.js": "e09370f7dc747806e4333e873ced0543",
"main.dart.js_140.part.js": "6c35e2620d90efe65e30beea62a36cee",
"main.dart.js_228.part.js": "b6ed246df836e8685aceef93589c8a9c",
"main.dart.js_170.part.js": "339bd7cadf089dbc4715bae1a3adbbb6",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_27.part.js": "2791a94a2a4a73b9db3401ecf1ae026c",
"main.dart.js_4.part.js": "5719451f85e01008fbe68be631832d78",
"main.dart.js_219.part.js": "d3cd253cd12c3ffcd89b546931dc1695",
"main.dart.js_116.part.js": "2dba86ecd350405aaf2b056c09a0ae43",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "bc2432f25ccfb8559f04a89fbcfb8111",
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
"assets/assets/translations/uk.json": "67fbc85deae30cc26390e918c971dd49",
"assets/assets/translations/pl.json": "f84dc40aea972114fef98f6fc35143a4",
"assets/assets/translations/sk.json": "c2c131f5507e847372aeb69134eaaa65",
"assets/assets/translations/en.json": "ec13d454108f9bd8ccf2c34bbb4eddad",
"assets/assets/translations/cs.json": "63c7e5595d94b0d7714ab997994967c6",
"assets/assets/translations/de.json": "f2a6e3524e9d3ad4f376dae7ee70ba12",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "1c05a2406c5e9413ac359770e0672088",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_147.part.js": "9003b752ec9c781e8ead10037d8e166c",
"main.dart.js_263.part.js": "c2edf3e60f7d975f933a0033d152505b",
"main.dart.js_220.part.js": "6adee4e87f97f67018f7724ee05205dd",
"main.dart.js_25.part.js": "9a93646a1829bd64f93bc703a30d7e17",
"main.dart.js_249.part.js": "495d1e9c086ab07788bb64bee7cea02d",
"main.dart.js_123.part.js": "151157e9fec89e4d13a1d04bd574f58a",
"main.dart.js_241.part.js": "befb319c78419faae50f8c1b94474bc6",
"main.dart.js_268.part.js": "b41dfea0d233a372f894bfd1072aab8d",
"main.dart.js_8.part.js": "1e07cab8d4436a4695209655f28320a1",
"main.dart.js_198.part.js": "8d9a22cef2a4a0f2a2432903da1c4f17",
"main.dart.js_81.part.js": "1c7cd4f0750cd78d7b99297f4cf2699b",
"main.dart.js_205.part.js": "fd88b1ad1327e2bc061f1475d6adf8bf",
"main.dart.js_113.part.js": "8e47cac1336924642febd792c1001efe",
"main.dart.js_9.part.js": "583381eb106c699a1d42a68bfa95fa9e",
"main.dart.js_99.part.js": "749f7c4d21f2fb88a431f47c44faa34f",
"main.dart.js_22.part.js": "112bc63bb4d6046dd9e24979af01a7a1",
"main.dart.js_242.part.js": "ffe07d063b251cd12b72d2d0004aaec4",
"main.dart.js_86.part.js": "ad387dd141eb106c370194ecaff36202",
"index.html": "9e37566428af0b909db44d91a4f4f50c",
"/": "9e37566428af0b909db44d91a4f4f50c",
"main.dart.js_94.part.js": "949c7dc802c995dd9986aaea62647da4",
"main.dart.js_98.part.js": "131a90dea7e8cfffc28969570d273cb8",
"main.dart.js_53.part.js": "cb5f7270541bcd9c7694a4e165acd0ec",
"main.dart.js_74.part.js": "e648797fc44ed7400286990da98af10d",
"main.dart.js_235.part.js": "6c6266e0101aa4371abbc3f35cfbae54",
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
"main.dart.js_118.part.js": "973d8b7eafa0f20f7ebe2c51342878de",
"main.dart.js_262.part.js": "0b9845932e2d21e5f622c78b700f5ab6",
"main.dart.js_26.part.js": "e0db37bff9f9a0a9e75159a4fe7dd546",
"main.dart.js_240.part.js": "18fc8372205400abdd559293bd00f690",
"main.dart.js_20.part.js": "f510618943866164b5d996a0685b2eb3",
"main.dart.js_189.part.js": "37a23ddee64e97212feaa5db81b83e67",
"main.dart.js_51.part.js": "cf1159a1c8df41f2dd6c687f222f8523",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "b2176107aea53a4654099926be84d12e",
"main.dart.js_1.part.js": "cad237e1360bc9ca78d50dae80e75197",
"main.dart.js_160.part.js": "a533e06415ac4da1c2a8a4d754fc9c80",
"main.dart.js_120.part.js": "58359820e5323b5e64492a2e46bf508b",
"main.dart.js_63.part.js": "9192dc5e97d09540f4363410800ff54f",
"main.dart.js_211.part.js": "89f16d1954072a2e4c3b1f2006546336",
"main.dart.js_261.part.js": "5da1d401c7ec8bedd5dae848a6945725",
"main.dart.js_12.part.js": "5072f38d2dfd7b67db07baf4da478c04",
"main.dart.js_221.part.js": "a3655c74fb96552ffec662451ca579b7",
"main.dart.js_137.part.js": "a36b18de59b01d00ae0e9bc289f3ee2c",
"main.dart.js_28.part.js": "fc070cbe44b3775da4962a4746eda042",
"main.dart.js_135.part.js": "8ef05f16a10d2f49af3745d6630ea784",
"main.dart.js_256.part.js": "3535d7a01bd66da0c825707f1ae5cdf7",
"main.dart.js_237.part.js": "3987c02f55620bf7cd7c8ebe7ff951be",
"main.dart.js_138.part.js": "3ef37baf4b31787fd269705813a49874",
"main.dart.js_17.part.js": "0fd17fd972eac9cd5066bb8b27434d67",
"main.dart.js_206.part.js": "240bce258c093921ad6894fd0cdd7b69",
"main.dart.js_231.part.js": "dfc70d79a3ef6db06d64a42249eac7a7",
"main.dart.js_43.part.js": "fdeee54a92cfb84ae956b844f836f2f0",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "6cfacb747d0e750abfab1df6539ae5e0",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "11c0dc3653ea969ee1ec8335ff350f83",
"main.dart.js_15.part.js": "8587c165cdf4b6f2ac3ed511eca57b32",
"main.dart.js_151.part.js": "6514ec1a61b0606eb3c847f46ad13d13",
"main.dart.js_19.part.js": "b0efbd6874f60f04ec138b0e994c4330",
"main.dart.js_186.part.js": "6b5893b76123075d05998b458104424e",
"main.dart.js_257.part.js": "459e624d2152625183f0bc98f1cd2723",
"main.dart.js_42.part.js": "00777fac0150d0f52d96718fd3f1502e",
"main.dart.js_16.part.js": "69c2c8fd11312cde85e6667850fb8ece",
"main.dart.js_52.part.js": "11694025e1cb00ef63e49970934cc751",
"main.dart.js_199.part.js": "506016b3626b0a5ee650e644fcba8305",
"main.dart.js_253.part.js": "449e5285239fa328fc1758644bcb21db",
"main.dart.js_130.part.js": "b3a9acd943da186a465be9e666357425",
"main.dart.js_238.part.js": "609580883517ae07c563c68c9c15e695",
"main.dart.js_152.part.js": "8a57941059105602a5597e0ddf73c6d3",
"main.dart.js_32.part.js": "8333a237052e04104ee7188debfd1483",
"main.dart.js_197.part.js": "4b18f5c59a22381d0984c5d8ba7aea72",
"main.dart.js_3.part.js": "152204162f4296a19d049676a2d55f44",
"main.dart.js_68.part.js": "ae6cdefd2c5ab2e11e914a6e0a69c945",
"main.dart.js_38.part.js": "7e691c8594cb82996831f0068cab5ee2",
"main.dart.js_225.part.js": "282d56bb16d2ea155353d12508dab2c9",
"main.dart.js_248.part.js": "110d4d530a0b0787e401b6f8738456ed",
"main.dart.js_133.part.js": "3392496575c0f17719f5eb5ba5139252",
"main.dart.js_21.part.js": "91a370581ab8f3d62e406fd2ef462fc1",
"main.dart.js_188.part.js": "77cabe69c4891e8ab6c404767c265eda",
"main.dart.js_24.part.js": "f8dcd1a6f9cae69737291cc247374c8a",
"main.dart.js_90.part.js": "75091ec5973c8be6601f3ea1ac5c9f70",
"main.dart.js_177.part.js": "40b6ff7ef8bd8a9e60348877aa2aef47",
"main.dart.js_85.part.js": "8fd61466f743b88e7500398fef94aaaf",
"main.dart.js_243.part.js": "19d9b2544b2148157d09ab025bf2792c",
"main.dart.js_260.part.js": "c199df5c6d33dea12e82eae2fae9662e",
"main.dart.js_114.part.js": "53fbba3fbed4f184c8798c4126cd7cc1",
"main.dart.js_39.part.js": "ff0358d9284e4dc10d1ff84f0fd370be",
"main.dart.js_185.part.js": "af4f728c8489be91107d222b7366f0d9",
"main.dart.js_46.part.js": "3bdc9808aa6cca60196f9f1c28556b14",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "f8cc1fceea0d4d8b5ffd37c079115024",
"main.dart.js_171.part.js": "66ed3424c7c3ea7d280a5f31c767294f",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "2fadf9dfec1444213d13f0eac8aed499",
"main.dart.js_195.part.js": "729da79e18128338f4fb4c70b822ecfe",
"main.dart.js_121.part.js": "5568182965cb2b468f33f8641dd4c803",
"main.dart.js_55.part.js": "9553372032d7d931fc36c4bf6293f0fb",
"main.dart.js_215.part.js": "a3b7c9ea3c0c8cdf2734d9f354845a78",
"main.dart.js_112.part.js": "7629bcf7e80a92ce0b7b64ed9f4590c9",
"main.dart.js_139.part.js": "f5f3a9117963bb0e63008fcf328953e8",
"main.dart.js_143.part.js": "32630d3acbcaade48be866599932c5e4",
"main.dart.js_80.part.js": "89d67e890647e42d8fba99c2bcd96ff0",
"main.dart.js_252.part.js": "b8f260fc747dc9f7e69f66d0ba5f7cc1",
"main.dart.js_233.part.js": "ab497049a3df25d8df012dff8c60de25",
"main.dart.js_30.part.js": "4ef015f1f08eb215c2cec3878816a372",
"main.dart.js_78.part.js": "6d4ed0d7147ededca7cc8fd057da52e0",
"main.dart.js_136.part.js": "5d000018a6aac0716c785f17200a3e50",
"main.dart.js_168.part.js": "beabb9d30dd60d2147f44c1ea6063ccc",
"main.dart.js_271.part.js": "b0c160f24488b7b5e5af7741bb6f83fb",
"main.dart.js_159.part.js": "1cf1886ef155f5debfc70e053a382764",
"main.dart.js_107.part.js": "75d4a8fcab53a5821e2ee9007d5012ab",
"main.dart.js_29.part.js": "5097bbb59b84b501aa93fd14e744eed5",
"main.dart.js_61.part.js": "ae0668c414a3422752150384f4fb125a",
"main.dart.js_58.part.js": "c91f296e2da72f64d67e7e0e7e3c8b30",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "8a9fe1a5456e8dffb641dc98705c5065",
"main.dart.js_79.part.js": "88759e2c36cc9d0dd1cd0671eca2a64e",
"main.dart.js_109.part.js": "acb635af4a4f4ecee80949a406dd1b77",
"main.dart.js_224.part.js": "23d1abbe5948333de45134a5c925de0f",
"main.dart.js_93.part.js": "1e9a0fbfdbd747c02ab12b526afc7288",
"main.dart.js_11.part.js": "60804109283dcd55d747b30f0d875bab",
"main.dart.js_125.part.js": "71446d7d23edc5ff29d98804ffb10d48",
"main.dart.js_131.part.js": "c03a0a95044bb87d8daabbc7501d8210",
"main.dart.js_226.part.js": "5f504d874be1e6c22f48b9b1e66b3dc2",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "bf4548fa8c44a37ea6f50f7e7bc19b1d",
"main.dart.js_178.part.js": "ac9e9df44541924f677621b4e95c8234",
"main.dart.js_258.part.js": "a5cb5b547c3b8c43b9c44d540bf13636",
"main.dart.js_187.part.js": "d10df5438d171de9937e20bf91c7d371",
"version.json": "7e3bcc946586777099c31c9be6ac1258",
"main.dart.js_264.part.js": "38ba3151427f2d06a4f050dff5cdaae0",
"flutter_bootstrap.js": "9f323f8f5a91ee4955ad4b4365346483",
"main.dart.js_191.part.js": "48072ab5b3125c58bf3f4032f96e61f8"};
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
