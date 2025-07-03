'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_34.part.js": "6c12fd30b19220bba3bb0a1d630ee103",
"main.dart.js_228.part.js": "e97ae2f2c78de5f5bfd3ae126ef82350",
"main.dart.js_30.part.js": "c34548ef101c4aee976d390dcf933989",
"main.dart.js_289.part.js": "438ed48a928ea8bcbd3b4a25cf3a5ffa",
"main.dart.js_98.part.js": "68b61739149a86e4a259745d5d32f297",
"main.dart.js_17.part.js": "d3223ee16d9d0dbea97c26d7f0a04d2c",
"main.dart.js_302.part.js": "aee854df2499392764219fa5a2e7dee0",
"main.dart.js_74.part.js": "28398ca3a46e947926f636f0da55a587",
"main.dart.js_50.part.js": "d3ccfdbd95c11c1c51da01550c874def",
"main.dart.js_51.part.js": "25848d2471729684cb323426622e133f",
"main.dart.js_108.part.js": "0207bbd6db523d130827aab6c6822646",
"main.dart.js_44.part.js": "59618d8104b3fcd60ec0d2000fb1a92b",
"main.dart.js_281.part.js": "647ce8d5d9b64841ea2579e0e8548a59",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"main.dart.js_47.part.js": "e5ad126b5442f4b21ad230f3805f8530",
"main.dart.js_45.part.js": "52bca51a4c4dcc194423e764747d580e",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_61.part.js": "f60e75fc372b88a65f28859497dafadc",
"main.dart.js_104.part.js": "fb7151940cf6587e1cb5014f8ead0ddf",
"main.dart.js_33.part.js": "532b75d5eab7524b43dd272a17315ad7",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_143.part.js": "d0cad0bbbc4d4bca1ff9a82bda01aeef",
"main.dart.js_164.part.js": "ba4cee77ed73d311b6f0c6451c424d8a",
"main.dart.js_64.part.js": "720487fb382cb2e8c6f0db8177b92a87",
"main.dart.js_138.part.js": "b4c878b2f363592496b90145f3c37b76",
"main.dart.js_192.part.js": "389e2424cc56a4b4a2446daebbd7344d",
"main.dart.js_305.part.js": "e44a27e1f09380f31b6558bbb68b8178",
"main.dart.js_168.part.js": "6590c2c914b0aaa6b73f19b87198cf39",
"main.dart.js_182.part.js": "4965c390845133524ec322ff8cec7d4f",
"main.dart.js_132.part.js": "2d228e3c43d097540283936fa952b8c5",
"main.dart.js_242.part.js": "e8a34dd39446dedc3293b5efc52f63cd",
"main.dart.js_82.part.js": "18a9875f33400b8d844bcd84b29e7918",
"main.dart.js_144.part.js": "e5fd87818b9521d956b96a0b7a4d2e6f",
"main.dart.js_162.part.js": "fe61d699604cadd85ea231447a474d92",
"main.dart.js_278.part.js": "a0decb2ff23440e010e9e543f43c0af4",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_130.part.js": "2b8e2b6bfb0b02cb4f06d389d3b20cb5",
"main.dart.js_288.part.js": "e666ca454484c4c0f23bccdeea629a44",
"main.dart.js_53.part.js": "8ed022296592d8866506b5a834931ea8",
"main.dart.js_55.part.js": "73fc9d59accca0d58262633411c7a1ca",
"main.dart.js_32.part.js": "ae48b3a6cb5fde2e65449f8ffce8e6c7",
"main.dart.js_163.part.js": "ffa024d65ed5c9d957e82506fc37af53",
"main.dart.js_49.part.js": "5196caca416c75d035c64d236f79fadf",
"main.dart.js_214.part.js": "381ff1aa9551789a1c279e319476feac",
"main.dart.js_129.part.js": "d63b8024d16a0db7af64f72147026d65",
"main.dart.js_298.part.js": "1be7047ff3672ee06e0bf20737188f82",
"main.dart.js_159.part.js": "b7c381f5b2c0c5a2cc05ff3a4bc576a1",
"main.dart.js_77.part.js": "d293c462dcdaf541ce122b32a505afd6",
"main.dart.js_190.part.js": "6bc7fc6963a9aab03014ac5e154819b9",
"main.dart.js_259.part.js": "a3a0f99bad526c769b7bf79e5fbdc83e",
"main.dart.js_307.part.js": "e1b2578fefe0e4ed775e457c144f5fa3",
"main.dart.js_31.part.js": "6b4debd7d8760af5feef5361b9e37140",
"main.dart.js_209.part.js": "93a4443587ccf8f48e61de774b9f0d29",
"main.dart.js_100.part.js": "7277404b5bb4d96dd56ded2894bc6f82",
"main.dart.js_35.part.js": "739db3a4026618f97b6a93cd6d3c6987",
"main.dart.js_177.part.js": "1f54329abe3c2dee89ef701ba4eab918",
"main.dart.js_7.part.js": "0ab17c6b0bb126c518ce974583ff9dbc",
"main.dart.js_184.part.js": "9a54890a900f1885a92a1d6b5a42b7d1",
"main.dart.js_223.part.js": "381fc7fdc7cb580d4e380bb046c7d326",
"main.dart.js_227.part.js": "fa6cb50a1d42b2fe2f10a4df38a94f66",
"main.dart.js_87.part.js": "652bdae878256beb72f7ac11cebfc4a5",
"main.dart.js_178.part.js": "217ac1a6de2124543de6b41039ec6a57",
"main.dart.js_70.part.js": "dfd42375f2d618c60e40df1f71bb6b96",
"main.dart.js_3.part.js": "be880ae858f85cec000283bed302ca48",
"main.dart.js_20.part.js": "cca3461d8d29190f8ef8cc44467f478a",
"main.dart.js_226.part.js": "4b46882c140d282a4edda2ddf3838466",
"main.dart.js_126.part.js": "e472effa9e3c880a259cbd54d95a339e",
"main.dart.js_13.part.js": "a63e22b90e2cb1da8a2602808525dfac",
"main.dart.js_38.part.js": "b3659624ec46d9475a922c8b3df74c52",
"main.dart.js_205.part.js": "c3abbca08f104d33134cbdc9fac1ad00",
"main.dart.js_254.part.js": "94c3e1035f71bfc7021da1d32190e50e",
"main.dart.js_270.part.js": "f42d71ced94b1bae9fc470b4d8ac04a3",
"main.dart.js_299.part.js": "ae73e3134fd6a7749dec1f3ba703c465",
"main.dart.js_4.part.js": "315f0d17f363841fb3d0fe08c52b8d9a",
"main.dart.js_92.part.js": "74d2598bd653b99f1ffe63a839c018bf",
"main.dart.js_106.part.js": "3df905a73fca49c7b394c662ba614f0c",
"main.dart.js_279.part.js": "bdcdb32b46cda37b9301d44607e19668",
"main.dart.js_16.part.js": "58f4a38dd51411f8fd5ba6814fcfb1e7",
"main.dart.js_199.part.js": "e6d4df2ff7768edd440abb96bc55b42d",
"main.dart.js_79.part.js": "5bb66a34181deef51dc3ec119aa19afa",
"main.dart.js_183.part.js": "3faddbaa351fa00d83f90848e26e2a8b",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_185.part.js": "338a277c61e62ecefd0b3fc3edc05784",
"main.dart.js_248.part.js": "41427ad301e6f014f4d81bf6d555b89e",
"main.dart.js_286.part.js": "b7b5270e1f31efca925fe47af81bbf31",
"main.dart.js_40.part.js": "7b352d4eb8cde0afca379f33a73004cf",
"main.dart.js_263.part.js": "12de8e49575c6727d9f5c82f961223a6",
"main.dart.js_282.part.js": "287f7aa0e9bd3e0ea70324f1f1a17355",
"main.dart.js_241.part.js": "b6c2523baacf5847988d5162d9267616",
"main.dart.js_56.part.js": "22ed217c3eb55f6ee9048c193d1fb5d8",
"main.dart.js_15.part.js": "30fc4e4c74dbb2ae04957a3405ec2556",
"main.dart.js_107.part.js": "3e01138a8333d50cf95d371a353c6fb1",
"main.dart.js_89.part.js": "910782940a1e5b6623d07ef512393412",
"main.dart.js_249.part.js": "e7b2468b08ec118ec27376d43cf4728d",
"main.dart.js_202.part.js": "c07d8002d2813b493dd0023dcd2327ae",
"main.dart.js": "3c532b098073e02a1f75566daf920a0a",
"main.dart.js_253.part.js": "34d6a6f041662238c0b20a5a83425983",
"main.dart.js_296.part.js": "1ef089af59c8e60bca8472340ab3be3b",
"main.dart.js_258.part.js": "d776279a6d796b47a2cc01022db62dbc",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_225.part.js": "8fe9030a7f680e1aa0b73ffdf4d2c7da",
"main.dart.js_85.part.js": "00a2ec5887b6449d2ed1ac9bccf247a2",
"main.dart.js_271.part.js": "892a580bd2134ba9369d24ebac03a956",
"main.dart.js_10.part.js": "2f36d3b10163bf718736d6cfb31db9b9",
"main.dart.js_124.part.js": "d2bb629587142a0cb9d495ff14bcb5ed",
"main.dart.js_11.part.js": "4308e5feac8ec6574e63bc329eb742e9",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_73.part.js": "2de7e31bafebdb0c2b6abe5ab9feafcc",
"main.dart.js_260.part.js": "de06af5e89476aec72c1e08e32c2524e",
"main.dart.js_95.part.js": "368842a0735dc3061a4d4629faf3030c",
"main.dart.js_215.part.js": "6273abeb47d5a462e858485a91e9ca26",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_101.part.js": "32c4773d12751c867db50da59f867b2a",
"main.dart.js_96.part.js": "5351fde3f2f814273c81cdec8074d9b4",
"main.dart.js_131.part.js": "234916be434109e097d7c7605cd0bcdc",
"main.dart.js_118.part.js": "4640d054f1707db851c1adb4e649ee68",
"main.dart.js_94.part.js": "16e5a0307ba6733ef703a3d1dcab6eb7",
"main.dart.js_140.part.js": "679dbe2f541a4854038c00ebb10a4fee",
"main.dart.js_105.part.js": "7b1781b85b6a9c470c03a04f56b2df52",
"main.dart.js_1.part.js": "23a93be9a5675d235ae95f6cd544d1dc",
"main.dart.js_133.part.js": "a747b8d5fe700a46cd58a01adfb30b58",
"main.dart.js_195.part.js": "d7058958aeef092a5adb4f8e9cdbdc05",
"main.dart.js_83.part.js": "3215d995d551ae46b07846ea860ac474",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_196.part.js": "9f536027badf9837ac65ec7a2a71486b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_110.part.js": "3db4b31c200e6968e82fdb29e54195fb",
"main.dart.js_276.part.js": "10ce5319b9a16bfeae3c66ab4f17c16e",
"main.dart.js_264.part.js": "5aafb1c24b20008c6d3c77071a569f7a",
"main.dart.js_213.part.js": "1071e416ae9c23af6765ab32a7d47616",
"main.dart.js_238.part.js": "88d7d0f5d93d54a8559e96c66d4c084d",
"main.dart.js_78.part.js": "149df43e918193ba289f9682d5261fcc",
"main.dart.js_109.part.js": "14ee87e02764fe5fdd9b8e9169b75008",
"main.dart.js_265.part.js": "7de529fb39d4510fcb8a5447405b30d5",
"main.dart.js_41.part.js": "72589327631149b0e81b5fd1df1cc9de",
"main.dart.js_122.part.js": "ad57543f1926739b5988d378164983f1",
"main.dart.js_12.part.js": "bde18e3ad0bcbf44a4d42f22e170605b",
"main.dart.js_303.part.js": "c00cc5b5faed35077b48fe9cf0877794",
"main.dart.js_76.part.js": "525a2050cbd412ba54346fad9cc1d019",
"main.dart.js_222.part.js": "9d6a73e0586ac405bae13c3464996d8a",
"main.dart.js_239.part.js": "066aa91f2748e0c1625b7390bc57ad98",
"main.dart.js_251.part.js": "90039a10fd34c7fb01a26f3f9ef24857",
"main.dart.js_158.part.js": "e56eb1bcc61d7bb1e7c5cb5316e6286c",
"main.dart.js_72.part.js": "4be55d9bc2f46ce947d5b8232bbd5e23",
"main.dart.js_68.part.js": "48bf110f39ec51ea280713cad4f0d979",
"main.dart.js_291.part.js": "cc0cd7d40ed2672f938adf31e53d31f4",
"main.dart.js_62.part.js": "a6ea0ba9124d08da9f3af649f42fd679",
"main.dart.js_180.part.js": "066e8ec7941e8da3ff82bb48553542a6",
"main.dart.js_240.part.js": "9063fd08cc622b94d6d1e49f41aeccf0",
"index.html": "bbde26569d18590851503db8150eba4e",
"/": "bbde26569d18590851503db8150eba4e",
"main.dart.js_266.part.js": "3b7441ca0d3dd39cc5471c3be7605e2b",
"main.dart.js_297.part.js": "44f0858eb2017cf508381d39963b8576",
"main.dart.js_134.part.js": "6642ff164510478d52ea844249927a09",
"main.dart.js_294.part.js": "6560b3beda25a6a9211d1160974bebfe",
"main.dart.js_181.part.js": "e8a52689c6e0242ab03863a12fc84f37",
"main.dart.js_147.part.js": "833c1d002083261efd30d80749dac416",
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
"assets/assets/translations/cs.json": "c675e871dfa96c491992b8363891dc93",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "e2b0bbc00e765251f8464de95a1e3cbf",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/fonts/MaterialIcons-Regular.otf": "0099ba7151938b61f716533690a43c83",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"main.dart.js_43.part.js": "01aaeffc6ea0574f0b7b7bde2fbf5cee",
"main.dart.js_145.part.js": "70481067fd28423dc7c0f91d364a07a2",
"main.dart.js_169.part.js": "231b4f699f14b8340138863143c98233",
"main.dart.js_29.part.js": "29bff1c5a7aa104b7ccf13e80a931921",
"main.dart.js_267.part.js": "d3c87c3385a17c362c4f6481c30698ea",
"main.dart.js_200.part.js": "5e4864331275644e054e05b8acd69a17",
"main.dart.js_170.part.js": "ca8b315c858c318d4cf20785f10faee5",
"main.dart.js_197.part.js": "7c111b868c99c78d1e4765f4d223ef15",
"main.dart.js_97.part.js": "701d4af6bd3e70fac6a6955f021b6a0e",
"main.dart.js_111.part.js": "753c58e9daeab2dd338f749dfc271572",
"main.dart.js_204.part.js": "65d468e30bc70f06ec8d1e6b0b8c5ff0",
"main.dart.js_232.part.js": "826970b43602ac32947c27442b2d4f3b",
"main.dart.js_211.part.js": "140cebeaefde324fbf928a4d130f905c",
"main.dart.js_117.part.js": "1e78ef9bab877adec44e93a8e72a4472",
"main.dart.js_245.part.js": "b2c5fb08fe51bc6074c4a656b365b21f",
"main.dart.js_189.part.js": "54bf5f87b78d660cd18165e0f5935815",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_283.part.js": "91d0d9d4e683f648dbaf891d0b0932ee",
"main.dart.js_188.part.js": "248041edde466d74df334875fc0d25d1",
"main.dart.js_48.part.js": "47533e4ee20270dfb5c2a003321b5456",
"main.dart.js_161.part.js": "64d1e2281148142d7143ac2306481edc",
"main.dart.js_229.part.js": "905628bbf6168c300a452855dbef5bf5",
"main.dart.js_153.part.js": "7d050611c6e891265b5a85d2854c100e",
"main.dart.js_28.part.js": "f0994d717378823cfc24580db917aab2",
"main.dart.js_71.part.js": "c48607e137f47c6bc2769fe72d9daaca",
"main.dart.js_234.part.js": "13c495b1f4f24686264699ab1013531f",
"main.dart.js_42.part.js": "ec6dfb5654f0d7f70f13ce5e8eb91b7f",
"main.dart.js_166.part.js": "02ad57b02a78454940db5d16d39cc7cf",
"main.dart.js_58.part.js": "702e16cc09fa9cd5468e066597d97c12",
"main.dart.js_285.part.js": "f5143c13cfa99a98eae8ce179287b97b",
"main.dart.js_59.part.js": "5f436550c85c9a7a7b6b40ca70b6358b",
"main.dart.js_277.part.js": "9fcd9a3fee8a8a296b3290de71918c16",
"main.dart.js_284.part.js": "0ad9f1f3550e1a4a0dcf1f0ddf644d92",
"main.dart.js_142.part.js": "ef21df34cc0469431d5bca63ab550c36",
"main.dart.js_5.part.js": "95865954e210d9d5f226c8abbf4c4b4a",
"main.dart.js_173.part.js": "b0af4da3e58d02e76d4a46417228143a",
"main.dart.js_128.part.js": "a2acdc9adf76cac5349440d8a75981b8",
"main.dart.js_244.part.js": "3e5d22b2df39f01647535e43ad78d573",
"main.dart.js_293.part.js": "47cd00e9b7934e3af18c37e090f4070e",
"main.dart.js_300.part.js": "44e7835a6913e19334c2b9cf594899c6",
"main.dart.js_261.part.js": "9c5b5af4e392dd21f1e8258681219ab8",
"main.dart.js_236.part.js": "1bcfdd6f743e53dde07bbe0065a39615",
"main.dart.js_6.part.js": "e3c66e1da546aa57aaf65050944c5057",
"main.dart.js_37.part.js": "692837e6d29447b4ea8436fd8140724b",
"main.dart.js_84.part.js": "8b1b184fa051ade55cae8be175e4cfd7",
"main.dart.js_115.part.js": "e8a8825afca4dab3051bc1f27394f5e7",
"main.dart.js_151.part.js": "9aab7f83d9409c163e449ae7ed6f811c",
"main.dart.js_208.part.js": "8d459e8d92ab37a50913b861b8250bc5",
"main.dart.js_120.part.js": "4a3b846633cfcd14ef88dd216990d226",
"main.dart.js_152.part.js": "4618ec623ee62f3a800727132d7f9078",
"main.dart.js_86.part.js": "ea99acccb32a5be3a4e2721a64853183",
"main.dart.js_255.part.js": "349f00fa30106f528202b25f3ec3af1c",
"main.dart.js_150.part.js": "03dad50eb168c038903a716c4dda9083",
"main.dart.js_165.part.js": "c70dea3dcf66cf3271b29abd79178495",
"main.dart.js_171.part.js": "ba1127f9d11295dc9f273ee087a1d2f5",
"flutter_bootstrap.js": "5b1a54560ad4a1ccf0a7b84febd60403",
"main.dart.js_146.part.js": "e4cff6e87caa8a26dcca1d60144ad090",
"main.dart.js_210.part.js": "bdf14f41b70ff8204cb84bfb82e2d3ed",
"main.dart.js_81.part.js": "69e98902388344aca7760765b7c14c1b",
"main.dart.js_156.part.js": "5dedd6964908eba4566e2b17f418e90a",
"main.dart.js_174.part.js": "374de39f27f0881745eff0d6191c3c8d",
"main.dart.js_207.part.js": "391d5ab822e0be81d50f058fb79aa8a4",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_27.part.js": "e8775743fd2ccb88b191281f2c54d1f9",
"main.dart.js_154.part.js": "9352078a2acbe96028fe0b68427b249d",
"main.dart.js_268.part.js": "ccd3c601345a9ef440ca470e96a060f8",
"main.dart.js_112.part.js": "7c7020e39b6955e6cf2744ded710b26b",
"main.dart.js_221.part.js": "c70ec69fccc92f580e5155eced8af071",
"main.dart.js_26.part.js": "8b676e6649f889d91091f097883eb62f",
"main.dart.js_123.part.js": "9577fd8c72bcdf79414dc161043023b8",
"main.dart.js_137.part.js": "6a0205c7e2769716a2990fdadc6b8073",
"main.dart.js_36.part.js": "2aa84a7e2343b1b19f518e184787917b",
"main.dart.js_301.part.js": "d9c1da4490ddf03f40c7469d284bbee2",
"main.dart.js_24.part.js": "64bae8095cf03fe04c800baff336e632",
"main.dart.js_272.part.js": "6c1ead81017cf91c4f8f4c52a2614b6f",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_57.part.js": "76cb375e8d808f2b684384982e992986",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_18.part.js": "d88cc133d022e2beba7e8b9b81048827",
"main.dart.js_292.part.js": "0660b4b4bcd648deb223e31e12fcfd74",
"version.json": "799d95a3c37c76a53d28080fd0ed376e",
"main.dart.js_8.part.js": "1d2598fca5cd0455d3be81f002c4a5c7",
"main.dart.js_9.part.js": "ac2352ddc514cb52f1842d4bd83574e4",
"main.dart.js_69.part.js": "65e21225da8122ab2c790ac5fe73425c",
"main.dart.js_304.part.js": "cab66437ac92f3fa44e3aace897fbd83",
"main.dart.js_139.part.js": "7d44263f8b6015215e086a3ec9033cfe",
"main.dart.js_176.part.js": "b4fa04faefb9a4d259928f079595f5eb",
"main.dart.js_275.part.js": "42679d17c7c629faea51ff394d845224",
"main.dart.js_256.part.js": "23a2662b2da7c2b5b4ea8f5fd03fa39a",
"main.dart.js_237.part.js": "b6002138b839b5707694873c921674f8",
"main.dart.js_257.part.js": "cf1fe7b05c3533540e9b774362edc956",
"main.dart.js_93.part.js": "62a0f887426f7be96277e57626eecca3",
"main.dart.js_179.part.js": "4b7cf5f630d7ed5860bb01da1ddbe09a",
"main.dart.js_14.part.js": "9b1f0aee18027289c2d4fc45a95d0f49",
"main.dart.js_206.part.js": "d47b35c1c54641569ecb293af942549d",
"main.dart.js_113.part.js": "ec91b98cb1d4f4b345ede4a48298626e",
"main.dart.js_235.part.js": "34eb8c5dc087114e637b3e758c218c27",
"main.dart.js_273.part.js": "04b6222f7672d5a4bbbaebb1339785ac",
"main.dart.js_39.part.js": "dd2134e703789283af6774546acc23a8",
"main.dart.js_306.part.js": "92d5fecea655a3d164705c2773a69a11",
"main.dart.js_250.part.js": "5abe6f63a0313fde0d1acf3b30c1c01a",
"main.dart.js_290.part.js": "50be9f8d8616944d7c3d29d81867bd8a"};
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
