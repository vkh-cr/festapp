'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_34.part.js": "47a0825a270e70fef2e0dd81447ade8f",
"main.dart.js_228.part.js": "412cbec594d9e1da61cbe652360ad7ae",
"main.dart.js_30.part.js": "c34548ef101c4aee976d390dcf933989",
"main.dart.js_201.part.js": "cd1fa3e545af5ec6d1d36c4721da5c54",
"main.dart.js_127.part.js": "e17625750c40be7fe54b91f323b3b5bd",
"main.dart.js_98.part.js": "7c275577ae32b67dc4c1e21919f2c1c9",
"main.dart.js_17.part.js": "e5b188f8c3e99600553bf9092253ce31",
"main.dart.js_302.part.js": "d664b813b5c8f2573a1dc02b259a2390",
"main.dart.js_309.part.js": "36e3405b0b3959522aad378dd6ff85a3",
"main.dart.js_74.part.js": "174a8ced8bb0713a7497a2fcba7549b3",
"main.dart.js_50.part.js": "4e215fd78bac9666097e2cc36028c55a",
"main.dart.js_51.part.js": "657d6574fe7ff7d69413fcc599dfedeb",
"main.dart.js_108.part.js": "cf135d65e35717563ee9177a5206d661",
"main.dart.js_44.part.js": "28aeda68018bf2186c2e33be4bec2550",
"main.dart.js_281.part.js": "d784fc844c8d11224586e6ca4b754943",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"main.dart.js_47.part.js": "4397c303e33ec923db7ea5ecdeeb2b5e",
"main.dart.js_45.part.js": "fd645710a0f85a19c561d42ad4027563",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_61.part.js": "eb56f0d98668a757f0ddc88fd14e830b",
"main.dart.js_33.part.js": "5ab5db69dd566e22651c2166ef741dc2",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_125.part.js": "2c1ff780e3ff9957b2afa5878f7b818e",
"main.dart.js_160.part.js": "7399d8273d96e3f9cf43f683e7652cc3",
"main.dart.js_143.part.js": "e02b60b4d0631170c02373d84817c85b",
"main.dart.js_164.part.js": "f045d9e9f13c26d0175ffbe54e3b8fe9",
"main.dart.js_295.part.js": "5c0b47d6d6123d4cc605be86c0af0556",
"main.dart.js_114.part.js": "bd8fc8fb7b928fa6860439794f45c683",
"main.dart.js_64.part.js": "20267bf3ab1675dc121040be41b80094",
"main.dart.js_138.part.js": "396caadcd8836e55dd6c401fd9e3bc47",
"main.dart.js_192.part.js": "ff52b1e66537582deab05486bb397b3d",
"main.dart.js_305.part.js": "a48517a9030cc786e35d26d228533906",
"main.dart.js_168.part.js": "310c9a5956db543e90f111a14cc4b5ac",
"main.dart.js_182.part.js": "ebebeab8544627c337e436d0f0eeb4a4",
"main.dart.js_132.part.js": "00e93a167ee964b9a922708977c62476",
"main.dart.js_242.part.js": "2fb17a2291db8330ad52181124966ee8",
"main.dart.js_82.part.js": "a922508f5c9301ce0e3636b329a15ba0",
"main.dart.js_144.part.js": "ed3c0a531b26a0cd19cabe4714cb9984",
"main.dart.js_243.part.js": "4923da5481bdb531746704bf8fa35d36",
"main.dart.js_175.part.js": "3c5deac24dddfd4bfd977114192801ef",
"main.dart.js_287.part.js": "575d6064bd656d3a6855708d5d676a82",
"main.dart.js_194.part.js": "035feeb1c30e99c80a6dbbff61048fb8",
"main.dart.js_278.part.js": "948537f6dcfd677c6b32dbae2ed604df",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_130.part.js": "d803f2c5e9f979d301bce65a7809f08d",
"main.dart.js_288.part.js": "4379d248c142a67c1251831edf333c64",
"main.dart.js_53.part.js": "3c51e4c7be231f86a180687ed12e98bb",
"main.dart.js_217.part.js": "e07d66f3b5e88cd4f854e56241eda70f",
"main.dart.js_231.part.js": "4b259c546094bf00cdedad2d4ea95e4f",
"main.dart.js_55.part.js": "433a1b1e7968ad04ca8b715497f16213",
"main.dart.js_32.part.js": "7e9d525d572e524568c81d53fa9765ab",
"main.dart.js_163.part.js": "d46f8437c694800e479d7b55b12f0691",
"main.dart.js_49.part.js": "0454eba9a5b2c02728e0b0a5df0f8bd8",
"main.dart.js_129.part.js": "a362d817f61a0a26a437d07fc9550845",
"main.dart.js_298.part.js": "5fcac63484f9dcc992ebd9ebf61d49ef",
"main.dart.js_77.part.js": "bc9931aecea5d59a103f860fa6ed9520",
"main.dart.js_190.part.js": "53000972d2d747873655152ab77c1cd9",
"main.dart.js_259.part.js": "9e107af0e6e66ab9b21b5c479770d8ef",
"main.dart.js_307.part.js": "f83a290a76f842ec402e06cf7c90952b",
"main.dart.js_262.part.js": "0953d08b7cd979db0bbcb1fe157c2366",
"main.dart.js_31.part.js": "484b99e93238da4bacd3cc19e0f99f90",
"main.dart.js_209.part.js": "d63c3d90fb21cad1713a1f9e3fb2c721",
"main.dart.js_141.part.js": "dc2f3afef7fe455f4a3cb629bfabd1c8",
"main.dart.js_187.part.js": "6414c6de8f4f3ccafeb239e2fe6a7fca",
"main.dart.js_100.part.js": "a5bfbcdb35e4bc4551b3ea495ee3fdc4",
"main.dart.js_252.part.js": "ddd49036af720b37e331f3ba906ddb2a",
"main.dart.js_35.part.js": "df046e958de113777dc92e00d6139278",
"main.dart.js_177.part.js": "2c73bbe1b0c77ae6e4d92cb37179d5df",
"main.dart.js_7.part.js": "ff65cc60e275ff1a11d5bdf64aac85ed",
"main.dart.js_184.part.js": "6798f66c002a8666be1e73988b8787c7",
"main.dart.js_223.part.js": "24d6881b73881ec8eeb81bded987fff3",
"main.dart.js_227.part.js": "0f5d73f67ae924e4b88ed8785021bc8d",
"main.dart.js_87.part.js": "233e68b995c0dd290c18410c2e11a9ee",
"main.dart.js_178.part.js": "b0da1f33cd66f1acce900083403190eb",
"main.dart.js_70.part.js": "b950708dd3d8c8f1377031c9361cd74b",
"main.dart.js_3.part.js": "e5d90442e2333531dc2617b0ea554b50",
"main.dart.js_20.part.js": "c3bac88fe66eae2f010036251c0ad370",
"main.dart.js_172.part.js": "18e2b2c2529d2bbf79c176b025eb0268",
"main.dart.js_13.part.js": "7264ea78b44e4a9fdee419081ef621a1",
"main.dart.js_38.part.js": "48776ed9c427a5ae3c7df156b1f16dc1",
"main.dart.js_299.part.js": "027299d6f5202d60f263824d4b4e5159",
"main.dart.js_4.part.js": "871accca5f48b1377f946345997ecba9",
"main.dart.js_92.part.js": "a082e55b8f8495dec43aa630e90578d1",
"main.dart.js_106.part.js": "ad8f89dee32605e50de884e839024a38",
"main.dart.js_279.part.js": "0e2550d101faad27a9c804f484a6658d",
"main.dart.js_16.part.js": "8086357c6e87d04889a7519020d4db2b",
"main.dart.js_199.part.js": "939e0dcf26b624f7756e7aa9a5bde8fa",
"main.dart.js_79.part.js": "dfea703c4da00f2f0ee8aa79280edcbc",
"main.dart.js_183.part.js": "9de174d7d861eb82ce2403ecae50cd12",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_121.part.js": "7681997a4d896f71a1173aaabb5c0ac6",
"main.dart.js_185.part.js": "d482bf3a3f9009b5e1903f16d6987cbf",
"main.dart.js_286.part.js": "ce479497b04f04b04e029b1f3ff24ff6",
"main.dart.js_40.part.js": "9b7d6c6abb0df3257dc6e77fb9a99b1d",
"main.dart.js_263.part.js": "30f1bab114fd51d39f9894601814de35",
"main.dart.js_241.part.js": "39d36fea14007d584482a40165cb125d",
"main.dart.js_56.part.js": "213ce41d1f03f9b7d5ef9c77a9647bb5",
"main.dart.js_15.part.js": "60d2a074a397965d6256627ae41bd370",
"main.dart.js_107.part.js": "755f1027e348917738666792e09dece9",
"main.dart.js_89.part.js": "aef88784a41a6ae1c59009027faae622",
"main.dart.js_202.part.js": "2a9cecc799a587bf55a60850b3b72a69",
"main.dart.js": "240e103bb58eb8b03dc5bbd996a9ec1e",
"main.dart.js_253.part.js": "49ed9b1adcbbffeccadb2dd7532adb2e",
"main.dart.js_296.part.js": "3f1cef25c25c39123a35238ad8d42066",
"main.dart.js_258.part.js": "03742c762d36110854c37b0b79d3aa92",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_225.part.js": "d15064b0d05f0aafd35280c00b842dc9",
"main.dart.js_85.part.js": "fe87beb6b55489c743c38d771ec2642c",
"main.dart.js_271.part.js": "a2c431a3f36a21f2a2e6fb21fabaf1f6",
"main.dart.js_10.part.js": "b3328c3932a655ec348c44e2a7795600",
"main.dart.js_124.part.js": "19682c6192fa999735579a3889be589a",
"main.dart.js_11.part.js": "58a6e8eb10748b3f031b9b29d7df420e",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_73.part.js": "ab8906ce79fffe4187f4e32f44e06536",
"main.dart.js_260.part.js": "c9f45966531433ae975d2f393bf780ea",
"main.dart.js_95.part.js": "0e83a9d638397e52f334248bb081f6ef",
"main.dart.js_215.part.js": "b1efbc9681519dfd89bf4df544ba0f5b",
"main.dart.js_198.part.js": "b99490d203561931c2085672078b0a76",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_101.part.js": "1ad1c8947afe4d97b4efd373c541d8e8",
"main.dart.js_96.part.js": "6456b5f6963328c8a95448e6ee417b43",
"main.dart.js_131.part.js": "f29b5d2bcf0df57fb54e2515b5eaabff",
"main.dart.js_118.part.js": "9f7368beb96170ab26e93d64c7d64c07",
"main.dart.js_94.part.js": "57c4eda5184959471da47d38adfb9091",
"main.dart.js_140.part.js": "7889cfd2cf2e95029842c19fe9f3e794",
"main.dart.js_105.part.js": "2eb2e9df65d31ea4104545614d50eca5",
"main.dart.js_216.part.js": "b406bef371e10ba4216e2504aa57550a",
"main.dart.js_1.part.js": "484a2ca9ad9416f4015bd2064e28b509",
"main.dart.js_133.part.js": "4bccbe9f2584e367b594ddc8bb1e2470",
"main.dart.js_83.part.js": "b568212d08ad978a89ebc962b7256028",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_110.part.js": "208c330d784d2c6407b9257c6f1cd83f",
"main.dart.js_213.part.js": "868bbef88b64f63384ed17a3dd79fcc0",
"main.dart.js_238.part.js": "4c3153639c88484143cbdf032b824354",
"main.dart.js_78.part.js": "12a4159332b88d86629081a866ca17a4",
"main.dart.js_308.part.js": "3b3afdbfd51d9b83f610ff2d69976f64",
"main.dart.js_109.part.js": "9fb476814f5e82f613ff88f8729ebb39",
"main.dart.js_265.part.js": "fff36fb09b8e25715f3e61544cad954a",
"main.dart.js_41.part.js": "feb5b12c9f8053284709fbd00e12b52b",
"main.dart.js_12.part.js": "308025889fb3805b8e9c947e9f18fbb3",
"main.dart.js_303.part.js": "15e906ade655af978745a512f4f212bf",
"main.dart.js_76.part.js": "39e10f47e6f2c92494a1e4c0e51601f8",
"main.dart.js_239.part.js": "7d7861845b61f4995d410921a8a65df4",
"main.dart.js_251.part.js": "645cf45654fe5962004f0bcaa57ec0f2",
"main.dart.js_158.part.js": "4d1fb3f38e7f373bf47b7ec7332cdfb0",
"main.dart.js_72.part.js": "54ed791e87fec8ee6a25fb44c685b3f4",
"main.dart.js_68.part.js": "1451bdfc911074c828289f9efa2d78c3",
"main.dart.js_291.part.js": "e4a7fcb45df1ed9908f692c9e588e8fc",
"main.dart.js_62.part.js": "74e3bea2b516eb5c71dfc46cbab804e0",
"main.dart.js_180.part.js": "fe678de2043a91fd41206cd6de49f69b",
"main.dart.js_240.part.js": "ea5f401a54866d3015a5e5a019566173",
"index.html": "bbde26569d18590851503db8150eba4e",
"/": "bbde26569d18590851503db8150eba4e",
"main.dart.js_266.part.js": "6d1ccbe493dccaa4f719a8d81a8a53e8",
"main.dart.js_134.part.js": "8628d4576e685f55f33d3af6652a456d",
"main.dart.js_294.part.js": "9e92cf0aec7807668be26f11c7e67e93",
"main.dart.js_181.part.js": "abf600c8f91169e96c7661ff822cba5b",
"main.dart.js_147.part.js": "b6ac802d3cd7a1a5b82dad8b98403428",
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
"assets/NOTICES": "4bd2930db146c4653bc584bd9d65b728",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/cs.json": "37e094085c4ea12fe9a1073e87c82698",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "a65e8481f26170acfe4d17bf5db08721",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/fonts/MaterialIcons-Regular.otf": "4309e6a0c1831e51db6b4b75eefcf381",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"main.dart.js_43.part.js": "8e06e7b774506f2eca77f3d1c504d422",
"main.dart.js_145.part.js": "7374c39c35c864c3bfb388e9e55f6066",
"main.dart.js_29.part.js": "79ab389c6b2fd27b29b2c1b9298c5fcc",
"main.dart.js_267.part.js": "35f8970c1c4581e17423d5b9e00d356b",
"main.dart.js_170.part.js": "6ff55b27be9462a2dbc30fae7c257590",
"main.dart.js_197.part.js": "55f44f4df8b97131c09281a8a1af16a9",
"main.dart.js_280.part.js": "c6e9e577cf4be7db0ed62a021da67787",
"main.dart.js_97.part.js": "701d4af6bd3e70fac6a6955f021b6a0e",
"main.dart.js_269.part.js": "9b3a9cc6b7471c682d2ec65429af7481",
"main.dart.js_111.part.js": "5a8a1da6d0d09b5bc0b9a44ed6ed129a",
"main.dart.js_204.part.js": "55137ea4bec98a050a3e6fe9c324a569",
"main.dart.js_211.part.js": "6d283abbd99b77a081a5ae97259865ec",
"main.dart.js_230.part.js": "fd8d61d89f64fa9fea981736b6e0b824",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_283.part.js": "326211cf231132d02c03df8a025ed0af",
"main.dart.js_148.part.js": "4b74201aa09cba6067c3e506308f0b3a",
"main.dart.js_48.part.js": "0d4f543557a8cc886d96e2f48f6e03d1",
"main.dart.js_161.part.js": "ed6aa45b6205853756b87097ad96fb3d",
"main.dart.js_229.part.js": "444fb47221782ccd60fb8b7a1c590755",
"main.dart.js_153.part.js": "c7a0193bb0153ec7680aa0deb1cf4550",
"main.dart.js_28.part.js": "467720043c4e82c8a4eaa6080f2f9fe2",
"main.dart.js_71.part.js": "f5e9d078a04eca04c23651c9ffc46d72",
"main.dart.js_119.part.js": "e3ad915efbbfac7c60daecf736cf29ed",
"main.dart.js_234.part.js": "85ac681d7d9e086421a9f5de7815ac19",
"main.dart.js_42.part.js": "3162f92ac57b3b063490b4557f916886",
"main.dart.js_166.part.js": "5bda94e9eac19e84310b7f39cb75cdda",
"main.dart.js_191.part.js": "34668c6d58e5f6d9e008b17d46fa39d2",
"main.dart.js_58.part.js": "abd2480fc44e0aefedfd20fe15998c1b",
"main.dart.js_285.part.js": "32da1180d85aeee757d9c505bd700916",
"main.dart.js_246.part.js": "cbc443b4f632e70d384f70a186c5c2cb",
"main.dart.js_59.part.js": "c093e237d17ea420cf17e72a8e41af5d",
"main.dart.js_277.part.js": "ddfc01c659f46b75ab07239d257c5501",
"main.dart.js_284.part.js": "ea506855eeb956a196ca890db92a8834",
"main.dart.js_102.part.js": "89b3cc72d56eb564f5819a79499e8141",
"main.dart.js_5.part.js": "8078cec551928a3a4c8db3c209514907",
"main.dart.js_173.part.js": "1187d5c59585d4ec22f6fa086f345f13",
"main.dart.js_244.part.js": "4cdcfcadd8419f96074fa53f0cdb0302",
"main.dart.js_293.part.js": "67295ada278680d0da26b6f24ab6ff0c",
"main.dart.js_300.part.js": "b8a3fc0ffeea22e620d8b112b466672b",
"main.dart.js_261.part.js": "14a857637e1fe80d3bbd8a913f199e92",
"main.dart.js_236.part.js": "b56bd5f076a76599b1b3190c5caad6e1",
"main.dart.js_274.part.js": "7046c05cb624134fa8b36fb3425e33b6",
"main.dart.js_135.part.js": "6844bbc72488569fc5ec05b89b0da532",
"main.dart.js_6.part.js": "061cfed75f9cb0a8ab39ac0574396dc4",
"main.dart.js_37.part.js": "cfcfe775575616a4f2a4ed5382c9a683",
"main.dart.js_84.part.js": "e8451accdf463605c148ffd694e50489",
"main.dart.js_208.part.js": "5e24ec07f0fc8fbe17511941c2fd6017",
"main.dart.js_152.part.js": "1c065cef9d1901f129a0a9ec01111227",
"main.dart.js_86.part.js": "8e372a1774080273695109a8ce2a4352",
"main.dart.js_255.part.js": "a01b766842193abab2b76f03f76b93da",
"main.dart.js_165.part.js": "e51143df10b080cbd5a5133b04396739",
"main.dart.js_171.part.js": "0ca549fff4a1b211d2ad62b348863d34",
"flutter_bootstrap.js": "89c7cbc48c217039897de579e045efe3",
"main.dart.js_146.part.js": "20b5b737e22b3a869bc452d6f568623e",
"main.dart.js_210.part.js": "fbab30eb0c67bd69893864784e887fae",
"main.dart.js_81.part.js": "73ec456296a0c83ba0878f42ff28d34e",
"main.dart.js_156.part.js": "b234b4a3afe03d5d3dcbe0e702e5204d",
"main.dart.js_116.part.js": "d3710a5a1395593bb1257b6467e6c2b7",
"main.dart.js_207.part.js": "27d6b43e3c9961db7219018fee9397fb",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_27.part.js": "e9c3d3ad3770304466b2becbc18073e0",
"main.dart.js_154.part.js": "445f80f4e181e235894392afbf5ae701",
"main.dart.js_268.part.js": "11f9574651af667b6baebb792f4bf4d7",
"main.dart.js_112.part.js": "34d2c5b1c016138edd6dd8c6ff7dc0d8",
"main.dart.js_212.part.js": "a5a9e0b8e12b0998b2630d1d2dd2a1a1",
"main.dart.js_186.part.js": "0b868496a922c9a95f96d40ced2285c7",
"main.dart.js_26.part.js": "64907f0a8444958c0c12c5c93f34f9ac",
"main.dart.js_167.part.js": "584b90270f653bdd3debe3981566eb43",
"main.dart.js_123.part.js": "f315f2bf498dbe623e5295c16e403527",
"main.dart.js_36.part.js": "6d09aca06e98911bef6d7cfa4bf91d83",
"main.dart.js_224.part.js": "fa0ef38a97762851635f7a3d3ac0333a",
"main.dart.js_301.part.js": "d61fc41d2cce4b63507f13109ffea74e",
"main.dart.js_24.part.js": "c2ae49535a9700a27f266d256de29741",
"main.dart.js_272.part.js": "eae7440f21310eedb96c869cb84ef723",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_155.part.js": "63c8f7247f3b910187f5825a7ef05cda",
"main.dart.js_57.part.js": "92ed27a1c94757bd72410472545f8fb2",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_18.part.js": "6a9a377723e386067a93425633c233e9",
"main.dart.js_292.part.js": "0c21e2da39795a1fc219008841e118ff",
"version.json": "fe7b08b46190ae445997db0bc2711e3e",
"main.dart.js_8.part.js": "70dd56df58bc5649abd8a6a8656d2233",
"main.dart.js_247.part.js": "3b68fb4234200dd95cc3ef4cd9362734",
"main.dart.js_9.part.js": "d49db1f373cd7e15a67585e927876306",
"main.dart.js_69.part.js": "faf74588df323e4198c0e16ee849c0ff",
"main.dart.js_304.part.js": "f3f17eb02b452e7d2d7e0c35a0b9b2cb",
"main.dart.js_139.part.js": "c916d944db6f69663eac28f98e9cef75",
"main.dart.js_275.part.js": "705db6cd90b281211fa2cdf57dbc9291",
"main.dart.js_256.part.js": "3c2a26cb824087044ae73d6c23516a0f",
"main.dart.js_237.part.js": "7071d3471de612f8ecb322873c99299b",
"main.dart.js_257.part.js": "4b33f98db80a854f64593b444e6c37f1",
"main.dart.js_93.part.js": "0c848a452188389dd1dd3675147dd2c8",
"main.dart.js_179.part.js": "dc5d7b879928a2c8dd97f423bf44b560",
"main.dart.js_14.part.js": "09d49e2910943797ad8f5b3c83e0eeee",
"main.dart.js_206.part.js": "542e98cda3c08208d6f5236777a87cb9",
"main.dart.js_113.part.js": "aa94ff4f4429dd6651777ae54308e544",
"main.dart.js_273.part.js": "d789f7d83ae166116159858387b630cb",
"main.dart.js_39.part.js": "382df7ccb5d6b00d405e20c4a4469c8e",
"main.dart.js_306.part.js": "f46fb23baba9fed355d159862c3e1eb4",
"main.dart.js_250.part.js": "58e6f85247693f0fda250bd28f9b3a95",
"main.dart.js_290.part.js": "59648064e49a52e3faf552aa73b70eb4"};
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
