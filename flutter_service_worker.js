'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "87dbc2235f165cc742374494324a0a88",
"main.dart.js_162.part.js": "8c6400e882fc51d71df048542c55486b",
"main.dart.js_117.part.js": "67d08eef1a44d81afff8f7270ec3a0ba",
"main.dart.js_182.part.js": "f399a9ffea259127e5b4356d3818161f",
"main.dart.js_75.part.js": "18643ed8d74af28f647e6d8999933d70",
"main.dart.js_244.part.js": "d961b4b5117dd5ebac00f496941bccfc",
"main.dart.js_289.part.js": "50522360591e113d8ae27487e5239da4",
"main.dart.js_83.part.js": "2a468d8d455e198bde23c9cdaaf235b2",
"main.dart.js_176.part.js": "ead9cc887aa43cf866857920da0a70e0",
"main.dart.js_96.part.js": "2df4c2980e947c31e9562e233c8bb611",
"main.dart.js_245.part.js": "fdb144dfff280089a2a693ed078a3bbe",
"main.dart.js_87.part.js": "47769e454a0db293fd865be6bb6f729b",
"main.dart.js_285.part.js": "a47d975607c3ac16394773d4ad3cc4aa",
"main.dart.js_251.part.js": "2c9f8bf5a8eeac690932ed90479a0e23",
"main.dart.js_126.part.js": "45b89ce050b9acbd2ab150a27ea58a06",
"main.dart.js_129.part.js": "fbc053578ab88a431452587dd9b4d3ad",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_218.part.js": "79d2b4b1c1a1ad86fc101ece7c82dc42",
"main.dart.js_40.part.js": "bc4c54c2bffc0fddc9727e66d7d6587f",
"main.dart.js_48.part.js": "a63cf0629c74777e6b207dfd5c22d5b8",
"main.dart.js_115.part.js": "628adb268b74e5daf2b2d12f65fccb47",
"main.dart.js_10.part.js": "4acb3f3570f716684d04d1d67c3e42ab",
"main.dart.js_84.part.js": "37a66777949b546daae9938ff12e5caa",
"main.dart.js_122.part.js": "acafda2bb6b5fe2220e62831c87a26b9",
"main.dart.js_103.part.js": "2b9f9f65b6de76076b65ba1cd9068715",
"main.dart.js_230.part.js": "4a2ce7bf1ce8b36a01be331eda3be0b2",
"main.dart.js_153.part.js": "2efa1f39e70d406e93ad879376606ef2",
"main.dart.js_41.part.js": "640c221401972162cddd42210c96923b",
"main.dart.js_89.part.js": "971a84d079aa7ff7851e622b3b4a1929",
"main.dart.js_37.part.js": "4ca6e225897367fcb48de6ec94bf5a6e",
"main.dart.js_287.part.js": "3b86f9993fea8cf8d47299175e007009",
"main.dart.js_283.part.js": "c03df2ccb26ee9c37072eb0a09f54965",
"main.dart.js_132.part.js": "fc32b166ec4cec1f9acd0603eb11b2b9",
"main.dart.js_282.part.js": "395734d30b3afc0924efd27fa43826e9",
"main.dart.js_127.part.js": "6c27b3ce4a683e5b6aed5fc1adcecdb0",
"main.dart.js_161.part.js": "49828fd24936c8851edeb8b7a475b9f3",
"main.dart.js_175.part.js": "21a888c932b871e6f6bed5b3e54d0b1c",
"main.dart.js_239.part.js": "fda7a4328d3c650a38b3662b9606997b",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_216.part.js": "6f228700c7dfe3649f752366f49fe978",
"main.dart.js_64.part.js": "f9460eaa4903c0d7da4e9ec72ec238eb",
"main.dart.js_169.part.js": "10bdb6364b8e4b92d8ab2e02761bb8d4",
"main.dart.js_13.part.js": "feba3f8dd51b42daeacfe749a71841cb",
"main.dart.js_246.part.js": "5593a46efa56543ad4b020f4ddaac9cf",
"main.dart.js_174.part.js": "e07a7c057e14e5c5977aaaa8537c4f08",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "0c82c1cba3eac4755ebb168a2e38b304",
"main.dart.js_144.part.js": "900dbc290da1faf063c91eafdb5bc6d5",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_265.part.js": "759e1c8941e7ef1b163b48a3704ac552",
"main.dart.js_31.part.js": "83c8ecbeb02ddf875ff2ef9847780b83",
"main.dart.js_119.part.js": "a1598a47ec4843bd13ebc7e819bb511c",
"main.dart.js_294.part.js": "671840f5155a238842ea9276ec0aaf93",
"main.dart.js_18.part.js": "d1725b0b206f9a175d2fd94a1f41b372",
"main.dart.js_35.part.js": "69f8c2aaebf1166e4699521be5a859ab",
"main.dart.js_73.part.js": "a416dcd11321e880d1445d079d4139ae",
"main.dart.js_77.part.js": "d1cc8a50cc770611314b71c635270a8b",
"main.dart.js_149.part.js": "9bc62f7462fb6ce87ccc78ce52597a2f",
"main.dart.js_67.part.js": "552ad32bfdbb58a6331d8d2dd6c5e48f",
"main.dart.js_208.part.js": "77031b29030fc6a9977b92abd4a5afb5",
"main.dart.js_82.part.js": "833e7847563701c7503372aa10701687",
"main.dart.js_291.part.js": "dcd2c048a9dabda2d6059086a5c6d851",
"main.dart.js_273.part.js": "b553f0394c5e49e3ab2aed5e81a5d29b",
"main.dart.js_62.part.js": "ecc5a999637eebb9cd135bb61e06d8cb",
"main.dart.js_259.part.js": "e8eb11e4e003bbfcee35062173a9b945",
"main.dart.js_207.part.js": "f4effc1d8f32150d51f61b2fc63a867f",
"main.dart.js": "71dadbc553e4e9fd48724692077ed104",
"main.dart.js_232.part.js": "52c66712c9d62806ab7bfc5b6c32027e",
"main.dart.js_148.part.js": "df1d97fcc4abf34c3d664bf7135f05a8",
"main.dart.js_293.part.js": "dad73479286318f6403ca6cfbb425d12",
"main.dart.js_124.part.js": "96623d4d0305cad911b472b6bcdd151e",
"main.dart.js_50.part.js": "bb700e3b7526fe4a76584b96ca8d0d09",
"main.dart.js_97.part.js": "2ae16bfa1f363a9bd62cb32842141368",
"main.dart.js_192.part.js": "f10f66f6ad0ca800734af75f00cb14bc",
"main.dart.js_229.part.js": "8bfb6ef10bb896016dd344e2952c7fba",
"main.dart.js_104.part.js": "285e2a9c25c67fc0601350154eb8b702",
"main.dart.js_196.part.js": "5c7845cfb72037678e5c2366bf7439b1",
"main.dart.js_181.part.js": "786e8f6150a27ff29821e1bffbc0b1c2",
"main.dart.js_270.part.js": "7ad8f5ee9ddc2c1314e1274ab001552b",
"main.dart.js_108.part.js": "969fabfdff15bbad772ced2406261693",
"main.dart.js_33.part.js": "f565db7dbcd3cb87819d1f66cc9cb9a0",
"main.dart.js_269.part.js": "2182565b35c8d3308986ad532bb4814b",
"main.dart.js_217.part.js": "313367bd81f0ed84137acbc98ed0b609",
"main.dart.js_34.part.js": "470b40f7249f5d1eeb9bffb50152946e",
"main.dart.js_210.part.js": "f304bb55343832ccd9ca0c229163a11e",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "3e8bea97fc3172426fd761784b48cd4a",
"main.dart.js_88.part.js": "3c277b9e5a3b03bff89069e9ebb3dc3d",
"main.dart.js_183.part.js": "20de486719770b56d07d848a7bc649d5",
"main.dart.js_203.part.js": "88288d7b0f9ce8709dded3bd2de7ac12",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "de490b1a6d18244a56896b5dc4b2d0f2",
"main.dart.js_7.part.js": "e095d437dc0aaac246a5ad73eb06152e",
"main.dart.js_140.part.js": "e2e256d024dad652dbb6d7a97eabf922",
"main.dart.js_170.part.js": "7689bf22d0211f6b2127a23759500e33",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "508eef2bce1da7ef10e2ab5c8f312f65",
"main.dart.js_27.part.js": "4b4f873bb97a529975f8f88d171a1af6",
"main.dart.js_4.part.js": "c483716e9d0c03918787f33a30ee3c7c",
"main.dart.js_219.part.js": "7802b6ff8a325edec2f7934fefae73ed",
"main.dart.js_116.part.js": "aa074ebbeff09c377b9109cd5eebc66a",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "e5aa34b29ee528ec717720fb7f7670c1",
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
"assets/assets/translations/uk.json": "ff0b2f440e47de55ebb4caccc7abf87a",
"assets/assets/translations/pl.json": "967735dda95b03e108958a8e456904f0",
"assets/assets/translations/sk.json": "9369eb2d37e60e6e61889f7967886be4",
"assets/assets/translations/en.json": "1ca3281169172b22438055c16d21e4a0",
"assets/assets/translations/cs.json": "30feea1e716f2641e9efb63ee66f0f9f",
"assets/assets/translations/de.json": "77aa8845ac93929fb838e327b1155611",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "1c05a2406c5e9413ac359770e0672088",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "0ff1183787b1a4c1c4fd5e920a4a6cb2",
"main.dart.js_147.part.js": "3288f0e12472144a02935acc3dea574a",
"main.dart.js_60.part.js": "98d74c261e91896ddecb44d000c0cfb9",
"main.dart.js_263.part.js": "0b9747d42725da02477819c21aadd217",
"main.dart.js_220.part.js": "f0c08934e1ef97aacf78c0fd1bea0ad9",
"main.dart.js_25.part.js": "c05ff9029b1c27389779ccd332698a0b",
"main.dart.js_288.part.js": "62a64bf5d148fd227e163228946d9531",
"main.dart.js_141.part.js": "6bbf73f8df76d210a0f9dcf8cb85957d",
"main.dart.js_249.part.js": "25860ba3663b284900b5f509d93479da",
"main.dart.js_123.part.js": "d8819ee85e6f258688811d8e45e68907",
"main.dart.js_241.part.js": "aa815d5d38f7c71495bc8c68cce8898a",
"main.dart.js_8.part.js": "861b0fcfd4fe79542670d9ce394f3ae9",
"main.dart.js_198.part.js": "57643227a8316a9da4d392e8ea86d36f",
"main.dart.js_81.part.js": "dce7d0e226a947024218a163300cd693",
"main.dart.js_205.part.js": "c9878e250d44ebc10f3938700f7cadf2",
"main.dart.js_280.part.js": "0842e1b96711e56df9460991800c3973",
"main.dart.js_9.part.js": "4dcf198d2247b0d5a0c61bf6e952da35",
"main.dart.js_99.part.js": "ccd2dfd47aa5509d22242291361da287",
"main.dart.js_272.part.js": "82474d831a940b9c06287d0b1bc1c06c",
"main.dart.js_242.part.js": "db5fcf89c6ba8e78370a9a1273077b39",
"main.dart.js_86.part.js": "a43f45c010c1ece5cac4bb0cb3f0f9ef",
"main.dart.js_23.part.js": "2449cedf344c4e286be72197a29a11da",
"index.html": "e6dd98c0bcf62904dabd752c9e76a17d",
"/": "e6dd98c0bcf62904dabd752c9e76a17d",
"main.dart.js_94.part.js": "3da065e87ea20425f8552ca911e10b0b",
"main.dart.js_98.part.js": "fbdbc1c484ffd1efbfc33bd856849ba6",
"main.dart.js_53.part.js": "e21c116e347803e9044cf8905d9542a5",
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
"main.dart.js_286.part.js": "0541e81d27cc8dac70b7edf0e104419b",
"main.dart.js_118.part.js": "6968c9069cca0bca6070cbd495ae6e5c",
"main.dart.js_262.part.js": "375c48563b37ac068b83ccd2bb136bdf",
"main.dart.js_26.part.js": "a0ae858869dbdd7891626ddce7e6bfb8",
"main.dart.js_20.part.js": "fa09f5b5da6a06af45f690758162e44a",
"main.dart.js_189.part.js": "ab6f8a93915593b5064a1f8b1d3ace33",
"main.dart.js_214.part.js": "05bdc420da506a83250db6f0f832a6fc",
"main.dart.js_51.part.js": "3eacb391b44bf92db11387a2a49a4589",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "0d6d37dd60c8d33100e22b5cedcfba00",
"main.dart.js_290.part.js": "8fa3f397e495447ebc0b31df256f0bd5",
"main.dart.js_1.part.js": "41b3e7017a22864d6df08e56ad9f6e59",
"main.dart.js_120.part.js": "9df2f0cdcdc3692d3503f77151fb4f56",
"main.dart.js_211.part.js": "8257ed679ca0bb0845aa0eac561cc7bd",
"main.dart.js_261.part.js": "eebbb6259d598faebbf1611e20ef6a93",
"main.dart.js_12.part.js": "b58c896b5e39adef2a69e1aab65a7dbe",
"main.dart.js_221.part.js": "5b06bbc46a5c9a360f5b6ae97bb5cd0b",
"main.dart.js_137.part.js": "b55b876359fc3eed5343761451beeebc",
"main.dart.js_276.part.js": "01ee1ce73f022c3ccc9b8db98bb214ae",
"main.dart.js_28.part.js": "a162d4a4c60a3784b0088a5a0c936874",
"main.dart.js_135.part.js": "900821865cda06825a5572b3ade122aa",
"main.dart.js_256.part.js": "dea201660812439b963a25b5c41e75a8",
"main.dart.js_138.part.js": "43b60196120850cd6fe115d73460f0ce",
"main.dart.js_193.part.js": "92a1693f1617dbe7e0031043e8ffd3cf",
"main.dart.js_17.part.js": "93ddcd78ed9310ec19b81c7dd12fd789",
"main.dart.js_105.part.js": "4cac40540b860583587d2f379b9002b3",
"main.dart.js_206.part.js": "a3082500a41c8f03dde4d5fbd6e05327",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "2aa4046d1506759b448212e23d421fc4",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "847a090c47e1ca1263d41d0a6bfd31df",
"main.dart.js_292.part.js": "bdd92af9882293980b725bc680fa8b48",
"main.dart.js_15.part.js": "fa1ac4f921e12188bb381778f4e731b3",
"main.dart.js_151.part.js": "85e77ceef2d59be506a38756b555c0de",
"main.dart.js_19.part.js": "473f8fd2e31cd168813ba48632291822",
"main.dart.js_284.part.js": "fb2e9df734653ab435fc45dda84f75bd",
"main.dart.js_255.part.js": "5db767f3fd395284ddf555fe8a7b50e9",
"main.dart.js_186.part.js": "f1b515e6055906169681598f39b752de",
"main.dart.js_163.part.js": "1cdccc6bc9dec88127c41a58a7ce15e2",
"main.dart.js_154.part.js": "5f5d18358a36ba878b21ead259d6d9b1",
"main.dart.js_16.part.js": "2598443af1c1dae1f0d41e368929207d",
"main.dart.js_250.part.js": "a2c95ee34f343104c956780f63d30b82",
"main.dart.js_52.part.js": "8bdd3c4f2748dafd5936f4994c3e3c0c",
"main.dart.js_36.part.js": "373c0994836d5118f74173540ece4965",
"main.dart.js_199.part.js": "691f4e756e85f6ab8ae873831ca38406",
"main.dart.js_253.part.js": "7251ee74c6594b12b72b2f82e0da8933",
"main.dart.js_130.part.js": "874bec95906579f9ad283cea714f5740",
"main.dart.js_238.part.js": "78c8c93c212cf0f6d6e65160d4af5cc7",
"main.dart.js_152.part.js": "37d3ecb0a85a088bc87f294f7d680799",
"main.dart.js_32.part.js": "0ad828f235e786b98c978117d9c77ef1",
"main.dart.js_197.part.js": "776457fc26cbfd5f6259164ebbcf7184",
"main.dart.js_56.part.js": "3a996891885c1f55570b1b616de9beca",
"main.dart.js_227.part.js": "d37e42fbca6cf874db92aef5d550f166",
"main.dart.js_3.part.js": "bf32a5f2907a25fb7094e2a07cc1ce3f",
"main.dart.js_68.part.js": "0a686b18ef4f51cc8a5efb75ebb25c3b",
"main.dart.js_38.part.js": "92731a4e89bf060650269506139509c0",
"main.dart.js_225.part.js": "fe87dc1c063ee9354172fb9d2dec9ba0",
"main.dart.js_248.part.js": "fb538be4aca4b70ec80e04b75db9add8",
"main.dart.js_133.part.js": "4e559bde62fb2b4800886ea459628eb3",
"main.dart.js_21.part.js": "2f7777826173150973fdbc02f67160d4",
"main.dart.js_188.part.js": "77e6a824adadee3ef9742fde59af6d08",
"main.dart.js_204.part.js": "29e02f12a60f17af04df2bd391e41a6f",
"main.dart.js_24.part.js": "7476d719349e484c08733b8a150c6eea",
"main.dart.js_90.part.js": "1777e56fe77f0414c33047425edeb5ae",
"main.dart.js_111.part.js": "b8c7daec4770e82c29b48edec773436e",
"main.dart.js_177.part.js": "d0fdbdeeac9518e56d5ebaff548edbcb",
"main.dart.js_85.part.js": "1fb4753b1ac65535a5afba1ff59a2b7f",
"main.dart.js_212.part.js": "07ca79da0f8cc46221e8e6e862bb09a2",
"main.dart.js_260.part.js": "72217aea2928f2c2cb9df1d199846069",
"main.dart.js_49.part.js": "9ee0ee89b159647ded842c1dc47f38f8",
"main.dart.js_185.part.js": "747703b5c12ddf568b90f7bbc5fb6333",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "64845af93825442bda75bad620f95f67",
"main.dart.js_171.part.js": "df7d3fbad2d61ad6bdc68fb3bbf1c3a3",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "7f8abc0f9aec69d18364d1da9705e1d9",
"main.dart.js_195.part.js": "dc499c0c83ee3250989fb033bdfa3229",
"main.dart.js_44.part.js": "cf0f1f1d83e6eae5ad3ff340c2d2aed6",
"main.dart.js_121.part.js": "c4fc38533f9d662ab4e9e1cbc396b5ce",
"main.dart.js_55.part.js": "17795163c261c4c23d132187b4960f46",
"main.dart.js_215.part.js": "7d66c0b15532799b4da815146df179e3",
"main.dart.js_139.part.js": "27af328764151f7e4ed294b9687db543",
"main.dart.js_143.part.js": "ffd4dfbfbdb82f13677655f817b3072f",
"main.dart.js_80.part.js": "44195ea2a6f6bca7aa1cb5fe8b42670b",
"main.dart.js_252.part.js": "1086b6edb10011843aa8a001ed47b0db",
"main.dart.js_279.part.js": "fea26ca7af7107a538b1b3bb8e4100d7",
"main.dart.js_30.part.js": "5aa6f0f2e393006deed15b219ae433e5",
"main.dart.js_267.part.js": "eaba934ac91b9142e2ba7c5a9ba56f1f",
"main.dart.js_277.part.js": "5110d32ec8b8bd0226c599dc973e3e17",
"main.dart.js_78.part.js": "fd1d5bc8361135a055d7fba92e84e572",
"main.dart.js_136.part.js": "9a25a71eaeebe3e568eb25856dc90dea",
"main.dart.js_168.part.js": "9a3c33fc2e225b99a994009c353c96c5",
"main.dart.js_271.part.js": "5765914f25db3ba995c1fbec6c46840d",
"main.dart.js_59.part.js": "d98c647286d8fcc98864121b1b891e5c",
"main.dart.js_29.part.js": "732488b5cd10446976b1737d1c58201b",
"main.dart.js_194.part.js": "532e5e448657b40ceee4813a3fda8ddb",
"main.dart.js_61.part.js": "edea3802a71d48c3eeeeedb8db3d9587",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "e3abf01d0cbd93eaa891c2fdb22bae00",
"main.dart.js_79.part.js": "8adacb5abbbe2360d0abd0eb1af2474b",
"main.dart.js_109.part.js": "27531a5113892b4323dea34707c47235",
"main.dart.js_93.part.js": "0be28001ee29e777264610e61b92399a",
"main.dart.js_11.part.js": "b56c275e8f8f90ee93941ef7a4f550a3",
"main.dart.js_125.part.js": "08cb3b8a7f05fbc154f010f183a4497f",
"main.dart.js_131.part.js": "c41d2dc677f816ac2d6d8e71ba6547c1",
"main.dart.js_226.part.js": "6e21f6c9e4984be93bf2d9c09e5d2b59",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "20a9711f5a2db7c10ae604888bc6da41",
"main.dart.js_100.part.js": "252059bc5df555d3fc051872f3c42a97",
"main.dart.js_258.part.js": "6ef2e26e1c162571faa9f2868bfc512c",
"main.dart.js_70.part.js": "e47bd947cc3de6e74eca2d5b9a215001",
"main.dart.js_187.part.js": "ffe379e0ec76fae9f19527854f38da5e",
"version.json": "91ad90032d66215ff90bb16cfcd0be7e",
"main.dart.js_264.part.js": "0f334eb3f167b614fabf2256f8f451e2",
"flutter_bootstrap.js": "14b9f00194c73872185b2c6ee9334203",
"main.dart.js_191.part.js": "ace8b4a2264379c03a0e20f768fc3fa1"};
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
