'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_34.part.js": "6c12fd30b19220bba3bb0a1d630ee103",
"main.dart.js_228.part.js": "e97ae2f2c78de5f5bfd3ae126ef82350",
"main.dart.js_30.part.js": "c34548ef101c4aee976d390dcf933989",
"main.dart.js_289.part.js": "c9d531e2e2e08fcee26d7c140583712e",
"main.dart.js_98.part.js": "68b61739149a86e4a259745d5d32f297",
"main.dart.js_17.part.js": "57e15eb68948f2b5ad97799c774b368a",
"main.dart.js_302.part.js": "04af96c95f9a32ba39538d5e8f174624",
"main.dart.js_74.part.js": "6304c9b248f4e0698d42f9dd5d60712d",
"main.dart.js_50.part.js": "d3ccfdbd95c11c1c51da01550c874def",
"main.dart.js_51.part.js": "25848d2471729684cb323426622e133f",
"main.dart.js_108.part.js": "0207bbd6db523d130827aab6c6822646",
"main.dart.js_44.part.js": "81ae175b53f0d6f58eba91890b43e7a9",
"main.dart.js_281.part.js": "c5def5c0d9196eaf5ed183a9f60a5db2",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"main.dart.js_47.part.js": "c5bed8776e12582f8171002f28eddec9",
"main.dart.js_45.part.js": "52bca51a4c4dcc194423e764747d580e",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_61.part.js": "f60e75fc372b88a65f28859497dafadc",
"main.dart.js_104.part.js": "fb7151940cf6587e1cb5014f8ead0ddf",
"main.dart.js_33.part.js": "532b75d5eab7524b43dd272a17315ad7",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_143.part.js": "633b6e6b8f72a7e797a435a8e9f9b972",
"main.dart.js_164.part.js": "ba4cee77ed73d311b6f0c6451c424d8a",
"main.dart.js_64.part.js": "720487fb382cb2e8c6f0db8177b92a87",
"main.dart.js_138.part.js": "e8f2fe5a4fba4980eb6dd7727a88ec99",
"main.dart.js_192.part.js": "5dbb12d896c36b88deb6947f25a3177a",
"main.dart.js_305.part.js": "c440164d553af235d98ad7863c71171f",
"main.dart.js_168.part.js": "7acc43e0b2dc5f11f900819a09889053",
"main.dart.js_182.part.js": "e091b18a80096a2b52e018012a51b2c7",
"main.dart.js_132.part.js": "2d228e3c43d097540283936fa952b8c5",
"main.dart.js_242.part.js": "e8a34dd39446dedc3293b5efc52f63cd",
"main.dart.js_82.part.js": "18a9875f33400b8d844bcd84b29e7918",
"main.dart.js_144.part.js": "0b6d07b00a114a6e98c2c38954f9c64c",
"main.dart.js_162.part.js": "fe61d699604cadd85ea231447a474d92",
"main.dart.js_278.part.js": "6f7c14b9cbdb80602fedb32f6ee3499d",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_130.part.js": "2b8e2b6bfb0b02cb4f06d389d3b20cb5",
"main.dart.js_288.part.js": "e666ca454484c4c0f23bccdeea629a44",
"main.dart.js_53.part.js": "a70002a1ab1412dff90042036aa46711",
"main.dart.js_55.part.js": "38d7a394cfe9f2ecdd0c89a17b2abea4",
"main.dart.js_32.part.js": "ae48b3a6cb5fde2e65449f8ffce8e6c7",
"main.dart.js_163.part.js": "519f7ded9b0b1f055bcf06014dd1b562",
"main.dart.js_49.part.js": "9cc4d674b21412889babf837ea0eabd4",
"main.dart.js_214.part.js": "7f9b85f64fdac8ab2ba1762d0fcbe618",
"main.dart.js_129.part.js": "c804008a2e898b494ea47bb83abbdb54",
"main.dart.js_298.part.js": "d6fca36f0a074b1dde3a630b3cb1d8e5",
"main.dart.js_159.part.js": "b7c381f5b2c0c5a2cc05ff3a4bc576a1",
"main.dart.js_77.part.js": "7eab19d297d01f1f015ab177aeac2c55",
"main.dart.js_190.part.js": "6bc7fc6963a9aab03014ac5e154819b9",
"main.dart.js_259.part.js": "913db49dfc2af83df162dde0d0b1e7fb",
"main.dart.js_307.part.js": "c3bcd315b7523b9c6cf4f4f3a112d968",
"main.dart.js_31.part.js": "6b4debd7d8760af5feef5361b9e37140",
"main.dart.js_209.part.js": "93a4443587ccf8f48e61de774b9f0d29",
"main.dart.js_100.part.js": "4062b2d29633f7bc09d4b323711429ca",
"main.dart.js_35.part.js": "a6b17cd3c40e48a9f9a2539b5f0bc7cf",
"main.dart.js_177.part.js": "1a30ff4d245b6e665c7f984d98f0f35d",
"main.dart.js_7.part.js": "52876641b78b31248f0156e278c2ac71",
"main.dart.js_184.part.js": "9a54890a900f1885a92a1d6b5a42b7d1",
"main.dart.js_223.part.js": "381fc7fdc7cb580d4e380bb046c7d326",
"main.dart.js_227.part.js": "e279db5fa77bf091dc4e36ba3e8c8d1a",
"main.dart.js_87.part.js": "652bdae878256beb72f7ac11cebfc4a5",
"main.dart.js_178.part.js": "217ac1a6de2124543de6b41039ec6a57",
"main.dart.js_70.part.js": "b5c52e3abbec090f6a0b4790f70c476c",
"main.dart.js_3.part.js": "4e7b9741b9af4bb79face8002d158daa",
"main.dart.js_20.part.js": "b0426470f97ff3a982a6daba5adca42d",
"main.dart.js_226.part.js": "fa3196c2499e7064dd81398128c60386",
"main.dart.js_126.part.js": "32e380966bb208a3e3721f8d60769aad",
"main.dart.js_13.part.js": "a63e22b90e2cb1da8a2602808525dfac",
"main.dart.js_38.part.js": "806e92f73fb8531bf0b32e2b725f8c9e",
"main.dart.js_205.part.js": "46be7810f186435e4aa495a325b99c4e",
"main.dart.js_254.part.js": "32d7b458af8025f948ec4e564d75c95c",
"main.dart.js_270.part.js": "f42d71ced94b1bae9fc470b4d8ac04a3",
"main.dart.js_299.part.js": "ae73e3134fd6a7749dec1f3ba703c465",
"main.dart.js_4.part.js": "c68500b088a7a364cc65e56bae879c63",
"main.dart.js_92.part.js": "bc4623bec59282d05d25ae35cd81bd65",
"main.dart.js_106.part.js": "3df905a73fca49c7b394c662ba614f0c",
"main.dart.js_279.part.js": "bdcdb32b46cda37b9301d44607e19668",
"main.dart.js_16.part.js": "c6d6d7ee12d55bdd36fd88e8ca2cae4e",
"main.dart.js_199.part.js": "a7440da58c07bcc1fff99d7f23033bae",
"main.dart.js_79.part.js": "5bb66a34181deef51dc3ec119aa19afa",
"main.dart.js_183.part.js": "3faddbaa351fa00d83f90848e26e2a8b",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_185.part.js": "746f529cd2c723954294648e49d83817",
"main.dart.js_248.part.js": "41427ad301e6f014f4d81bf6d555b89e",
"main.dart.js_286.part.js": "c6b9720cad06d5b36cb28c7a51ff7bf5",
"main.dart.js_40.part.js": "6b8c9948bea69096cf554a1e77f6d4d7",
"main.dart.js_263.part.js": "12de8e49575c6727d9f5c82f961223a6",
"main.dart.js_282.part.js": "287f7aa0e9bd3e0ea70324f1f1a17355",
"main.dart.js_241.part.js": "b6c2523baacf5847988d5162d9267616",
"main.dart.js_56.part.js": "22ed217c3eb55f6ee9048c193d1fb5d8",
"main.dart.js_15.part.js": "02c3f1507ea04ae027a560c81de85398",
"main.dart.js_107.part.js": "3e01138a8333d50cf95d371a353c6fb1",
"main.dart.js_89.part.js": "961185d1c7ddbbce1c9a948d35ee6c41",
"main.dart.js_249.part.js": "749aab8eb17436aaea6c6299465dfba1",
"main.dart.js_202.part.js": "e48adbbdcb4e0ca0767a7f3be78f0b79",
"main.dart.js": "4c47acbef45d75891320def4296bc73c",
"main.dart.js_253.part.js": "5d2740bc7b27952652f257deb20ca44f",
"main.dart.js_296.part.js": "0b3300dece29af7f3187db8ec9bb9208",
"main.dart.js_258.part.js": "d776279a6d796b47a2cc01022db62dbc",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_225.part.js": "1a2804949cd20672ed0c31ffbe719e4d",
"main.dart.js_85.part.js": "00a2ec5887b6449d2ed1ac9bccf247a2",
"main.dart.js_271.part.js": "892a580bd2134ba9369d24ebac03a956",
"main.dart.js_10.part.js": "a7ee7dc4d7712c5aa474834825352af2",
"main.dart.js_124.part.js": "d2bb629587142a0cb9d495ff14bcb5ed",
"main.dart.js_11.part.js": "b2bf98f48ca6ab6887c0a1e10966c821",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_73.part.js": "f5ce628d06bb080de635a97728237e2a",
"main.dart.js_260.part.js": "ab8f5d4e7033d5e69a0b1c3c71d5f0ea",
"main.dart.js_95.part.js": "003e8686f39696e927a61c14d64b3ed3",
"main.dart.js_215.part.js": "11ad01b1240ad6dbd47c8b1a7c1ba660",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_101.part.js": "ae433e24e60ec1fd67125467ca5f1906",
"main.dart.js_96.part.js": "5351fde3f2f814273c81cdec8074d9b4",
"main.dart.js_131.part.js": "234916be434109e097d7c7605cd0bcdc",
"main.dart.js_118.part.js": "eadf89f1a6b37d6c3150391862c5336c",
"main.dart.js_94.part.js": "64ef5969184baa798ef42582af4bba42",
"main.dart.js_140.part.js": "679dbe2f541a4854038c00ebb10a4fee",
"main.dart.js_105.part.js": "7b1781b85b6a9c470c03a04f56b2df52",
"main.dart.js_1.part.js": "c5f120cf9f9ec3c5ab33f4e41cd32d30",
"main.dart.js_133.part.js": "670c3e4cc6d34c4ba98165163eac79a7",
"main.dart.js_195.part.js": "ce692f523be5e2ee92ddf5b7c4931e3e",
"main.dart.js_83.part.js": "a8d7469ce02d5c4b63eae4dc783e27b7",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_196.part.js": "9f536027badf9837ac65ec7a2a71486b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_110.part.js": "3db4b31c200e6968e82fdb29e54195fb",
"main.dart.js_276.part.js": "10ce5319b9a16bfeae3c66ab4f17c16e",
"main.dart.js_264.part.js": "076bf565c225c90223e2e34a9d2819e2",
"main.dart.js_213.part.js": "369f0c5b0ccd9c44d9b1fe53ad5c6f02",
"main.dart.js_238.part.js": "810568a776fe856cf205a3d043c1c793",
"main.dart.js_78.part.js": "49925835808dd99917ee96819f769ba6",
"main.dart.js_109.part.js": "14ee87e02764fe5fdd9b8e9169b75008",
"main.dart.js_265.part.js": "7de529fb39d4510fcb8a5447405b30d5",
"main.dart.js_41.part.js": "7e4b6cf81bac28537da0ecb2e5333908",
"main.dart.js_122.part.js": "6c97a6bbedd31714a00a0b46424ac250",
"main.dart.js_12.part.js": "bde18e3ad0bcbf44a4d42f22e170605b",
"main.dart.js_303.part.js": "c00cc5b5faed35077b48fe9cf0877794",
"main.dart.js_76.part.js": "525a2050cbd412ba54346fad9cc1d019",
"main.dart.js_222.part.js": "9d6a73e0586ac405bae13c3464996d8a",
"main.dart.js_239.part.js": "066aa91f2748e0c1625b7390bc57ad98",
"main.dart.js_251.part.js": "90039a10fd34c7fb01a26f3f9ef24857",
"main.dart.js_158.part.js": "ab2e8089c8d0a57b7f98d54873cb7255",
"main.dart.js_72.part.js": "4be55d9bc2f46ce947d5b8232bbd5e23",
"main.dart.js_68.part.js": "d440bbcb05d59296ef5c605315a2d960",
"main.dart.js_291.part.js": "1fbc12e28a5339daec52ce304770bde2",
"main.dart.js_62.part.js": "a6ea0ba9124d08da9f3af649f42fd679",
"main.dart.js_180.part.js": "066e8ec7941e8da3ff82bb48553542a6",
"main.dart.js_240.part.js": "9063fd08cc622b94d6d1e49f41aeccf0",
"index.html": "bbde26569d18590851503db8150eba4e",
"/": "bbde26569d18590851503db8150eba4e",
"main.dart.js_266.part.js": "3b7441ca0d3dd39cc5471c3be7605e2b",
"main.dart.js_297.part.js": "5aa887948d84594dfec96171053784ba",
"main.dart.js_134.part.js": "4f8ab51cd06450e7f9385e521ee25804",
"main.dart.js_294.part.js": "6560b3beda25a6a9211d1160974bebfe",
"main.dart.js_181.part.js": "168b453780c4c0af558aedda93197189",
"main.dart.js_147.part.js": "8d7bf961aff3a73eaf90a471b7452db9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"assets/NOTICES": "3c24853244fa9ceb9b71258d8c2c76d7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/cs.json": "e560e0277bc89f3a9fbc334e23991cbe",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "a42cc364af0bb8b230965ede6b40546d",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/fonts/MaterialIcons-Regular.otf": "0099ba7151938b61f716533690a43c83",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"main.dart.js_43.part.js": "e53dca663076e8717d828803c95ae61d",
"main.dart.js_145.part.js": "b2aad9f3ee5b6d036e49c5d0fface375",
"main.dart.js_169.part.js": "231b4f699f14b8340138863143c98233",
"main.dart.js_29.part.js": "29bff1c5a7aa104b7ccf13e80a931921",
"main.dart.js_267.part.js": "e3a75919faca9301c8301b84b47f1920",
"main.dart.js_200.part.js": "5e4864331275644e054e05b8acd69a17",
"main.dart.js_170.part.js": "ca8b315c858c318d4cf20785f10faee5",
"main.dart.js_197.part.js": "7c111b868c99c78d1e4765f4d223ef15",
"main.dart.js_97.part.js": "701d4af6bd3e70fac6a6955f021b6a0e",
"main.dart.js_111.part.js": "753c58e9daeab2dd338f749dfc271572",
"main.dart.js_204.part.js": "ad90a529e00e0a4b6a54f315885cf0dd",
"main.dart.js_232.part.js": "826970b43602ac32947c27442b2d4f3b",
"main.dart.js_211.part.js": "a2728fef526aaa62b1e15108dcf40ab5",
"main.dart.js_117.part.js": "1e78ef9bab877adec44e93a8e72a4472",
"main.dart.js_245.part.js": "af1317607b8b683ecdefb36ec9192054",
"main.dart.js_189.part.js": "2fc55e9bfc2a670c47c11790f60d6b55",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_283.part.js": "cfefb7a785e9d02c3ec40fb8049e6c77",
"main.dart.js_188.part.js": "a77a1476e13d086d46628bfb00ca084b",
"main.dart.js_48.part.js": "47533e4ee20270dfb5c2a003321b5456",
"main.dart.js_161.part.js": "afcd9e50850ac9d58a2f02b8ab59d790",
"main.dart.js_229.part.js": "905628bbf6168c300a452855dbef5bf5",
"main.dart.js_153.part.js": "7d050611c6e891265b5a85d2854c100e",
"main.dart.js_28.part.js": "f0994d717378823cfc24580db917aab2",
"main.dart.js_71.part.js": "9034cfad328badb5dc990d9403527ad0",
"main.dart.js_234.part.js": "332e5241109aca14f5a64e665c7fd51a",
"main.dart.js_42.part.js": "ec6dfb5654f0d7f70f13ce5e8eb91b7f",
"main.dart.js_166.part.js": "02ad57b02a78454940db5d16d39cc7cf",
"main.dart.js_58.part.js": "8e763c01a1073a6734634ce30f41006e",
"main.dart.js_285.part.js": "4865bdecabcdd94fcc14273b177d3a76",
"main.dart.js_59.part.js": "5321121161b055d384b86f752cf1cc14",
"main.dart.js_277.part.js": "dab1dca8ede36e7512e428cd09e102a1",
"main.dart.js_284.part.js": "825ddc6bcf3aacb16dfecc247323d370",
"main.dart.js_142.part.js": "1f59fe6277c214d79e6393446d1e5fec",
"main.dart.js_5.part.js": "d33a607fd190fe012db05cdf79e3a522",
"main.dart.js_173.part.js": "b0af4da3e58d02e76d4a46417228143a",
"main.dart.js_128.part.js": "a2acdc9adf76cac5349440d8a75981b8",
"main.dart.js_244.part.js": "3e5d22b2df39f01647535e43ad78d573",
"main.dart.js_293.part.js": "a17cc5bccb136e141ca1fdd8bf00d4d2",
"main.dart.js_300.part.js": "11d8b0c4c0501b5870682483a1e04f55",
"main.dart.js_261.part.js": "ab8266aabd1affcfa437843529b54d00",
"main.dart.js_236.part.js": "74a13c6968966782389774afe310fb84",
"main.dart.js_6.part.js": "e3c66e1da546aa57aaf65050944c5057",
"main.dart.js_37.part.js": "692837e6d29447b4ea8436fd8140724b",
"main.dart.js_84.part.js": "8b1b184fa051ade55cae8be175e4cfd7",
"main.dart.js_115.part.js": "b5f4efbd3f687d9bdbbf1dec4f189667",
"main.dart.js_151.part.js": "9aab7f83d9409c163e449ae7ed6f811c",
"main.dart.js_208.part.js": "1ca0eb010310818fcd8f15841f4792e3",
"main.dart.js_120.part.js": "7cd7e96ab186aa84b90d10312c9694c4",
"main.dart.js_152.part.js": "4618ec623ee62f3a800727132d7f9078",
"main.dart.js_86.part.js": "ea99acccb32a5be3a4e2721a64853183",
"main.dart.js_255.part.js": "349f00fa30106f528202b25f3ec3af1c",
"main.dart.js_150.part.js": "f76b44e80f43c89d64c61cb8e2edd155",
"main.dart.js_165.part.js": "c70dea3dcf66cf3271b29abd79178495",
"main.dart.js_171.part.js": "ba1127f9d11295dc9f273ee087a1d2f5",
"flutter_bootstrap.js": "df577deb7756984acd67b522a1746807",
"main.dart.js_146.part.js": "385401391205c569d1891d251dbedd6a",
"main.dart.js_210.part.js": "bdf14f41b70ff8204cb84bfb82e2d3ed",
"main.dart.js_81.part.js": "69e98902388344aca7760765b7c14c1b",
"main.dart.js_156.part.js": "5dedd6964908eba4566e2b17f418e90a",
"main.dart.js_174.part.js": "374de39f27f0881745eff0d6191c3c8d",
"main.dart.js_207.part.js": "88e748dba84a3341c4a2f614f6dbe3cc",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_27.part.js": "b2d2a11fa37c6ac6f85c41737214acf2",
"main.dart.js_154.part.js": "3b0df08e588cfeaca1e758712084bfa2",
"main.dart.js_268.part.js": "ccd3c601345a9ef440ca470e96a060f8",
"main.dart.js_112.part.js": "ba2e7472bfdf5839a658491c0c7e9cd7",
"main.dart.js_221.part.js": "c70ec69fccc92f580e5155eced8af071",
"main.dart.js_26.part.js": "9523f6005c819ee5ced546cdb1030124",
"main.dart.js_123.part.js": "d69b34b0cde842be0f1e0146dbc70275",
"main.dart.js_137.part.js": "7fedfa59abb54fc9fdc253aa20f6c273",
"main.dart.js_36.part.js": "41cb70097fc8d951a172c5e5690cd897",
"main.dart.js_301.part.js": "566d577f13ce29a5d2d4214ab6a8e7bf",
"main.dart.js_24.part.js": "64bae8095cf03fe04c800baff336e632",
"main.dart.js_272.part.js": "43031a6c71c899ff6fa2ebaef62cf05b",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_57.part.js": "4834cb197200a60fca0ed7a42e71e9a5",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_18.part.js": "f6cc353c3f2b0dadf0007a04f0a9be89",
"main.dart.js_292.part.js": "7917af5fbca6cdb316bb7a5e306ac712",
"version.json": "ba38b7df8925dfe8828b8b9e5e2bcc11",
"main.dart.js_8.part.js": "96b0793e99aa7ccd5bc37dde81fa975d",
"main.dart.js_9.part.js": "a937f5b3be6e8e70be6e5c3a5519fec1",
"main.dart.js_69.part.js": "033557dd438c3919f3fff1c37319a637",
"main.dart.js_304.part.js": "d830999e131a7e41898641ebff1b8f3c",
"main.dart.js_139.part.js": "7d44263f8b6015215e086a3ec9033cfe",
"main.dart.js_176.part.js": "72722277f290736545cc03ce1b3e6b48",
"main.dart.js_275.part.js": "bdf9a81f6f8359a9940b78c9beefc230",
"main.dart.js_256.part.js": "1c8ce7ab13e4449f243a4201853ba210",
"main.dart.js_237.part.js": "96acbd20d3713e477e6e2d6f0124f78f",
"main.dart.js_257.part.js": "cf1fe7b05c3533540e9b774362edc956",
"main.dart.js_93.part.js": "62a0f887426f7be96277e57626eecca3",
"main.dart.js_179.part.js": "4b7cf5f630d7ed5860bb01da1ddbe09a",
"main.dart.js_14.part.js": "852520761fd28d71ce93f2688cd48c69",
"main.dart.js_206.part.js": "16483cf86b306bde12be4bc5c72d120b",
"main.dart.js_113.part.js": "ea513bf0e343d045fe715b98a438d61f",
"main.dart.js_235.part.js": "34eb8c5dc087114e637b3e758c218c27",
"main.dart.js_273.part.js": "5a3808c5588edf61807cfbdc60e11c65",
"main.dart.js_39.part.js": "dc1b02d1b121fdee536b7bbfb56c9d8f",
"main.dart.js_306.part.js": "f147d85cc8ac5d75cf9228d326612996",
"main.dart.js_250.part.js": "f0dfff7d77f8c10723d643f6692d097a",
"main.dart.js_290.part.js": "7e564eb378e24a11211aa399af403489"};
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
