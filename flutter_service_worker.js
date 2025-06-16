'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_34.part.js": "bc9cc267fc12fa82c640a299aa8f3cb5",
"main.dart.js_228.part.js": "81b7d1632e66b8967d0add66a8ddb6fc",
"main.dart.js_30.part.js": "e9deff7e9a05c9550a4cdab5d753d1ab",
"main.dart.js_90.part.js": "bec3dfa589b18eeed284e2ffe4b2921a",
"main.dart.js_289.part.js": "842526b1c88b7e8fb34f98e8e6697d83",
"main.dart.js_98.part.js": "a8ec62f6c0f86eed0b87a444d614a67c",
"main.dart.js_302.part.js": "597f23732a95ddb9eda2ccf5ebcd13d1",
"main.dart.js_74.part.js": "f85b540f54fe2bc227cc843859ff83a7",
"main.dart.js_66.part.js": "fe569d9bcf4199c0e0d0cc4bb02820dd",
"main.dart.js_51.part.js": "9bbad7628134a53754735bb890368374",
"main.dart.js_22.part.js": "83a075b03605cfcbb77a4051366d40fc",
"main.dart.js_108.part.js": "ce6d12722ad6ed7a6884d13b54e59b06",
"main.dart.js_281.part.js": "cbec2ae8f8be67ed4160fc377413bbd1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"main.dart.js_47.part.js": "52a515500a183c2340c3b669e2c3c232",
"main.dart.js_45.part.js": "412061b78e7d2be4d38efe6a79e019d4",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_104.part.js": "35aaa109115135bfe86705a8a76a26a6",
"main.dart.js_33.part.js": "4cc508af7be08e36952afb0f37960be4",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_160.part.js": "b28120847d6b8d8930f09a3574e80214",
"main.dart.js_143.part.js": "19b34f8d29f23f269730bfa869272f80",
"main.dart.js_164.part.js": "323dec377012c0dc4d5be791678b925b",
"main.dart.js_295.part.js": "13d607ff0519ea4428d5fc53ac5792cb",
"main.dart.js_138.part.js": "4c8c3bca7b179192f1f0bc5541d4f4f4",
"main.dart.js_192.part.js": "3c95e4055de7ccb39b462eb316d13962",
"main.dart.js_305.part.js": "9a7321c2c9720c911cfd629287b4e493",
"main.dart.js_168.part.js": "fbd710ad3e7ccf286cc691a136bc802c",
"main.dart.js_182.part.js": "210634581a624ec060d20343492d0f1e",
"main.dart.js_132.part.js": "3c969bdb61c03be455a456594094c01a",
"main.dart.js_242.part.js": "fcaeb485b4736a83f22441865b782370",
"main.dart.js_82.part.js": "d78d1c307f71346d9d0cfce4a2af9fc6",
"main.dart.js_144.part.js": "8fef836a3c2df4eb4a066296f0e06a37",
"main.dart.js_175.part.js": "2cf2ae1586baf97ce7e3a3670dbbc479",
"main.dart.js_287.part.js": "b0bd3d4e67c60d90a504ce9259e11c15",
"main.dart.js_162.part.js": "9dd0161067cf3845652526a9b4f13359",
"main.dart.js_278.part.js": "a463999fdca3ac52e0e00c58303aa493",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_130.part.js": "6e19f012a76684aa7b187286d7ec356e",
"main.dart.js_53.part.js": "73952dfcfdd707969cbe6516158f12f8",
"main.dart.js_231.part.js": "81c44bf462b0620cb5dd9ab26c3bf039",
"main.dart.js_55.part.js": "c8cc6615055a1098be4954979e8003b4",
"main.dart.js_32.part.js": "8c2f81e655ea017eb42fe3d85c325502",
"main.dart.js_163.part.js": "1126babc1d7b08efbcc0e6f62a9117f8",
"main.dart.js_49.part.js": "13d2ab4c6143ae9d7933ef1953a5350c",
"main.dart.js_214.part.js": "288d1580b11f6cc5a71603b1731677ea",
"main.dart.js_129.part.js": "a770a16f1f1d2fd5b290d9e37736084c",
"main.dart.js_298.part.js": "577e49eed5c026e0ef1074c065928f7f",
"main.dart.js_159.part.js": "8baed0acbd33172875295edc2b39a359",
"main.dart.js_77.part.js": "ef69dcce9ed8a323d34a1975bc9b78fe",
"main.dart.js_190.part.js": "f990f013073b57a3e8688e157b011526",
"main.dart.js_259.part.js": "18f54a8730302eed1f303a9785f23c19",
"main.dart.js_307.part.js": "cb6457555c9bcc58155e13adfcac6b72",
"main.dart.js_31.part.js": "01302525eead956ac5229d7171f62361",
"main.dart.js_209.part.js": "2853c94dbb84f1ce0279c5f8dd89ecb6",
"main.dart.js_100.part.js": "57096bf253820879d910b6ceccb57b3a",
"main.dart.js_80.part.js": "797188ced9a85492395d729d2d4a93b7",
"main.dart.js_35.part.js": "32f447fd79542386e20cae787a3f6541",
"main.dart.js_7.part.js": "79f4f22412554886a43552fd55f45c2b",
"main.dart.js_184.part.js": "f16bdcad49ef94599e731477aa5bee5b",
"main.dart.js_223.part.js": "19c13ee16915ae4ec07e4e3004ef134c",
"main.dart.js_103.part.js": "da4eb12966871d192db7d55bca8a4741",
"main.dart.js_227.part.js": "09abb23d340f7903e3b88433972b8f19",
"main.dart.js_87.part.js": "76fbd6caac6a23a3b99b8082bf282651",
"main.dart.js_178.part.js": "0c18037fee198dc6836db6640bb3edb3",
"main.dart.js_70.part.js": "8713dd34d53b5c344507a89e315b381c",
"main.dart.js_3.part.js": "1f30bfc0f31c4a673e66fc2e0dfe42b0",
"main.dart.js_46.part.js": "6e33f413b00aaea1180780e408f729ff",
"main.dart.js_226.part.js": "a4b0bfbc31649c2691df96ced5791a61",
"main.dart.js_126.part.js": "d7a8cfd981c4d365dd554249bfa7fb10",
"main.dart.js_13.part.js": "348cfc28fc63a04cb4f356671c733e48",
"main.dart.js_38.part.js": "9f9ca0bbcb5921d1137147401659d403",
"main.dart.js_205.part.js": "b70aec69b73c722fc559e3ad1e9e420c",
"main.dart.js_99.part.js": "5e50323a602291d34773ee385dceb37d",
"main.dart.js_254.part.js": "f39856d8ebc16dbcc0d53c9ce43d5988",
"main.dart.js_270.part.js": "3abcfc6b69672081e6d65aa071fe03dc",
"main.dart.js_299.part.js": "a4a4519c8af1f4ad776ce2b4a4a2183b",
"main.dart.js_4.part.js": "8fd8e2406c6c329dfb0c75aeab4a60af",
"main.dart.js_92.part.js": "2b92d23c1d715326cde204b9c241e2f0",
"main.dart.js_106.part.js": "5c0d3fc5f5993e4da1ad05319df5f8d5",
"main.dart.js_91.part.js": "71b44d1f9c946ea381def90596e13203",
"main.dart.js_16.part.js": "d44374fc9f7de381938e60c217ad283c",
"main.dart.js_199.part.js": "165d08e7e78ac15c1b2fb10f775ce29c",
"main.dart.js_79.part.js": "9552e25b929334130becb479a2f26419",
"main.dart.js_183.part.js": "8d1e1efc3e07c539e0f254e28b1634db",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_121.part.js": "9bff901352ebce46b6a58e2ab8cdfa4b",
"main.dart.js_185.part.js": "6aec69e47af82be6eaf09b9301f855fb",
"main.dart.js_248.part.js": "41439c842b12f2799b20571adfd9bb86",
"main.dart.js_40.part.js": "1bd00326b108fc31d14432be0581ff10",
"main.dart.js_263.part.js": "62a386759cf115ca62e113b6c0c5bcd9",
"main.dart.js_282.part.js": "ea87bfb366c2d7ec4ccfe4e5f0204396",
"main.dart.js_241.part.js": "044bfd6711432a8d68283919f205904c",
"main.dart.js_56.part.js": "8f9b0f42cf5e3f5a59950ac1169a35c3",
"main.dart.js_15.part.js": "cef50692e1457dbc95fed665d1e19f72",
"main.dart.js_107.part.js": "feb5e435c20ab6d3eeed6ea48ee1147d",
"main.dart.js_25.part.js": "e5047bbf2ae1d5fa6f5a769deaba387b",
"main.dart.js_249.part.js": "9b5e5aadb99ee9d9af60912bceb36e23",
"main.dart.js_202.part.js": "029684f4558c6dd69034381646edf015",
"main.dart.js": "c526a36928e74d8bcf7e578658870c3a",
"main.dart.js_253.part.js": "25d37547eaf38da913a78ea8d4c49f52",
"main.dart.js_60.part.js": "a587cda693d8465aad0142479148aebe",
"main.dart.js_258.part.js": "75179faf267d61dbb9f1709cbf8695a1",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_225.part.js": "2985cd7f28ab9e41fe6d47e45841c765",
"main.dart.js_85.part.js": "7e6bfef1bb7e0451d5d34e33b1617ffc",
"main.dart.js_271.part.js": "cd12c09af59520b65a9d26f4eba29fbd",
"main.dart.js_10.part.js": "90b8c82ae63819c3ab1a9bc879007e85",
"main.dart.js_11.part.js": "8cf46780af02cb94245ae1cf6b354d75",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_260.part.js": "1ea2a223ec22a16d37896d2e89293742",
"main.dart.js_95.part.js": "a428e56895642d59885e803932ad03f4",
"main.dart.js_215.part.js": "68cb3bbdc5e5037334798326d3af3ea3",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_96.part.js": "41e80fdf066f73ed075d17e3004b42ec",
"main.dart.js_131.part.js": "15b84ec0d054e626f828d768523800c3",
"main.dart.js_118.part.js": "8c14b0792b6cbac855c1e5909969933b",
"main.dart.js_94.part.js": "7c5afb3fef49106dfbf064f2c8d4fd9e",
"main.dart.js_140.part.js": "0e3949d677d78af6c92f14e3160ae6e8",
"main.dart.js_105.part.js": "63f9e868a27bc99aa15ede4be7b6dc29",
"main.dart.js_1.part.js": "41cc6723b4c74bd98745106caab6a13e",
"main.dart.js_133.part.js": "25f9ae56f609fc2dab2dada568bf91ce",
"main.dart.js_195.part.js": "bd790c1589d03c6a97ee217324a5cb8b",
"main.dart.js_83.part.js": "281722f6eece7dd1c30a22c907d72bc6",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_196.part.js": "16d983ded1e0ced32fbdd73fe710fbf7",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_110.part.js": "0293a84ca6ea1d7adf8be54992cbbd89",
"main.dart.js_276.part.js": "89710dc4e3b99aae8dc3b3d2cb45ce2a",
"main.dart.js_264.part.js": "ad7219a36871b4cd390c38d826826b5e",
"main.dart.js_67.part.js": "a0d3156747019fe33e7e4da7023b7055",
"main.dart.js_213.part.js": "693a36d0f08492c953797c1560a0f529",
"main.dart.js_238.part.js": "5beff228b3ec0536fec34636647501b0",
"main.dart.js_308.part.js": "3cde97d9763e38aa16986620887c7b65",
"main.dart.js_109.part.js": "9e43c756cfe98569382b9ec318181f27",
"main.dart.js_265.part.js": "35f7f4f2d85ace60dcb5924909761069",
"main.dart.js_41.part.js": "cbc04085714d2f1823fd47febdbc641d",
"main.dart.js_122.part.js": "4fc3abc66409ddbceb2896af3b981591",
"main.dart.js_12.part.js": "c8c2aa27457c0199c9f67f6339d9d982",
"main.dart.js_303.part.js": "f9585eefa30f3f780cbc05cf8a3f391d",
"main.dart.js_76.part.js": "e659cb9a46dd3865e85ffc9085cbf01c",
"main.dart.js_222.part.js": "35fb5911e90dfe55cea3a43c23c87035",
"main.dart.js_239.part.js": "090f06eb724d73e3c03865bd27a9eb54",
"main.dart.js_251.part.js": "d3813e7089d82a76b2b5ec85c1930104",
"main.dart.js_72.part.js": "a8002a636a27d087edafea39f837871a",
"main.dart.js_68.part.js": "fa18f1e7ee25ac839a1a74e97d35735f",
"main.dart.js_291.part.js": "6f582de356b41c0f3b694de80a0c54f2",
"main.dart.js_62.part.js": "f7bc69f6351e8db04fef1f52a9228286",
"main.dart.js_180.part.js": "3a5b304843d90738be3e9497231c7d51",
"main.dart.js_240.part.js": "56e170b89754e07e4cd8f5319c4a1550",
"index.html": "39a019a5d16bd3b358aa9b0bb507e869",
"/": "39a019a5d16bd3b358aa9b0bb507e869",
"main.dart.js_266.part.js": "d669a145c3578eeeb636c0199fc10005",
"main.dart.js_297.part.js": "fcc51fd21565c8729507338306c92eba",
"main.dart.js_134.part.js": "b776785ceba0ccfdf1b33c7e026bdfc3",
"main.dart.js_294.part.js": "9b3aa9a1b03c8c75daf3aa6dd01c7596",
"main.dart.js_181.part.js": "0c413c1ed06e985815f0d18c9389d7a5",
"main.dart.js_147.part.js": "c6a1020b0b3a88865208432e7babdd77",
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
"assets/assets/translations/cs.json": "814cc32c2e928afdb9d2b5937d6adedb",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "5bd4027852122bf6df692d3b0a4db99b",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/fonts/MaterialIcons-Regular.otf": "3849aec6b21571aa35af383d7bc223a7",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"main.dart.js_43.part.js": "6c9de58370c92e00d493f988b6343ad4",
"main.dart.js_145.part.js": "698fa1abd439adffd937469122d86839",
"main.dart.js_169.part.js": "858a421db9993529a5292ff5571565b7",
"main.dart.js_29.part.js": "42340fd954ed74a49e14ea5eefb67195",
"main.dart.js_267.part.js": "fcbc22ebf7d90c5802ae5b2cbe0db96e",
"main.dart.js_200.part.js": "76232f2dfe5caaea7a760de179fe8780",
"main.dart.js_170.part.js": "ba47f2180a03e66260b4cd758b3e3cc7",
"main.dart.js_197.part.js": "c38a9c85de2d7627dbacae16d7e9bc15",
"main.dart.js_280.part.js": "d7095b6bdfef4384c41467b460885035",
"main.dart.js_269.part.js": "ea3cd990129a158d32d61a95980d00fa",
"main.dart.js_204.part.js": "371f189b1c6f7be9c4b168a4c2bc125a",
"main.dart.js_232.part.js": "11acfc76e4fd8a64f9eef56d321fde7a",
"main.dart.js_211.part.js": "a75aae1c476c863c0f9373a5b4523500",
"main.dart.js_117.part.js": "50fe6bd129da4988aeab347ee414dbca",
"main.dart.js_245.part.js": "90a26343588285b57e88c0c082d3e383",
"main.dart.js_189.part.js": "c5a7e35ef082ccec664d2b29a276534b",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_283.part.js": "3a65cff2be9e8a7cb212f516810614eb",
"main.dart.js_188.part.js": "eef5e4459cf85003f8553468086100a7",
"main.dart.js_48.part.js": "0823e879688ee608c48b0311d27ddd87",
"main.dart.js_161.part.js": "90b511b1d8b2f1ec3bdc6b966a7945a0",
"main.dart.js_229.part.js": "981d66599550aa43681bf0686139ec83",
"main.dart.js_153.part.js": "65c83fcb753927b48a48fa4023ba211f",
"main.dart.js_28.part.js": "8f19c49cba349248c68767fdd7720629",
"main.dart.js_71.part.js": "7d0d1a5d7e01a59063dbe390d6b882d8",
"main.dart.js_119.part.js": "bfd13a761755557f82cc955bf3986600",
"main.dart.js_234.part.js": "88a809b2c6287908a904b250f547049e",
"main.dart.js_42.part.js": "033ad771a5b8fb9b9e6d52d5d09efc40",
"main.dart.js_166.part.js": "50325f6caee01ba3bb4278c8a15c67ac",
"main.dart.js_285.part.js": "0ab9dd17ee2c447eb26c044ba76d891c",
"main.dart.js_59.part.js": "fbc029825e489720969f61e384674157",
"main.dart.js_277.part.js": "6fb05da82224f6fb6f6cd806ff13aa8c",
"main.dart.js_284.part.js": "2450dfe3bc079479abcc94d1c31f73b9",
"main.dart.js_142.part.js": "4bab5a67ea3ddb74b9e723975b245c63",
"main.dart.js_5.part.js": "10a4bfa38b6ed9767b68c14fc1f2168f",
"main.dart.js_173.part.js": "a51b96355ff35a6e7a95e610abcb0056",
"main.dart.js_128.part.js": "04e1c6f6182d86b3b14d798a9ed2c8be",
"main.dart.js_244.part.js": "088f8787e179ed042830604e3178c5e5",
"main.dart.js_293.part.js": "10a1b47d6a1847ac2ce3e440f3d5430d",
"main.dart.js_300.part.js": "2834adc4d63cba40f879e43f0f46298d",
"main.dart.js_261.part.js": "d3246d116368a6c8e96fca47832aa2d9",
"main.dart.js_236.part.js": "5ed2f36c9464b87b3d6d29aa83eb3c9f",
"main.dart.js_274.part.js": "bc824068a25ef7e6a26d6b3351217b4f",
"main.dart.js_157.part.js": "0fc0059c0629b9b58eaa9b3f5567d126",
"main.dart.js_6.part.js": "43c69150ee3d2bbc2bbd56778f869ac8",
"main.dart.js_37.part.js": "f52b29ad43db51bc330d452c3067f9f5",
"main.dart.js_84.part.js": "87461a1c747c1e22558b0c89755d0f16",
"main.dart.js_115.part.js": "7cad84f89f2082e1cffae73d670f8baf",
"main.dart.js_151.part.js": "3d59f8d4c693ca8be170d1a5e651002f",
"main.dart.js_208.part.js": "30bde643f497f4029e197337b2656812",
"main.dart.js_152.part.js": "743041652e364deeb994412c86e6f1ab",
"main.dart.js_255.part.js": "d3e6b51288297727339d9f248e48de52",
"main.dart.js_165.part.js": "0d1743233e7c333992045b8a7d2d27d2",
"main.dart.js_171.part.js": "0c6e4dbce53326b7efd6f8f77c04208d",
"flutter_bootstrap.js": "56a894673051e2c91793ac62eeca10e4",
"main.dart.js_146.part.js": "d632a192d4a03ebbb80e4823ba6aee5f",
"main.dart.js_210.part.js": "1bcf35b721a3c30b7b94b37cb3a6b6eb",
"main.dart.js_81.part.js": "147b54ad59ef5c773adeeb639d79be22",
"main.dart.js_2.part.js": "de13aac123a42b402693ac1b0af3de1e",
"main.dart.js_207.part.js": "75959ce8f9b4bc7d646d9c70b0b0e036",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_27.part.js": "b6a288ce0c8ed1553f3745f1071da695",
"main.dart.js_154.part.js": "e1d6414c90ba3e6cd1410382778a1c7d",
"main.dart.js_75.part.js": "51180ceea006bf32d110ef76eee881f5",
"main.dart.js_112.part.js": "63599527fda17486ceaa8e772463cf13",
"main.dart.js_221.part.js": "47026c7162ff234b11aa644fb4cee9a9",
"main.dart.js_26.part.js": "3644ac03885de37f3325aa438a156944",
"main.dart.js_123.part.js": "8f8fb9c40ad41f3592524e73a76d030c",
"main.dart.js_137.part.js": "5ca14300b83682270c127c4f379115a0",
"main.dart.js_36.part.js": "72e04ab1439a7990dea21e9d31ada236",
"main.dart.js_301.part.js": "68db315d964c8e5c338dca30971f7b48",
"main.dart.js_24.part.js": "c97907e15e407a8f141eb5fea4246420",
"main.dart.js_272.part.js": "5ad201e787dff3d360e580887ae37cb7",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_155.part.js": "11b80eb9599201b1184efb82566b7d0c",
"main.dart.js_57.part.js": "4e0c7e595b7a5f08a0f95d25946da4b4",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_18.part.js": "c67fd79017e3239bf4206d7748005133",
"main.dart.js_292.part.js": "c1772183d729a7f7af65c397b74a6c09",
"version.json": "d5e4785e3de03273798a9bd8a9adc52d",
"main.dart.js_8.part.js": "eff7c66ade96da6ac31223782d99512b",
"main.dart.js_9.part.js": "e690544dead12d5f1a1ac5448b95ff5b",
"main.dart.js_69.part.js": "5ec43113c2b94513e1090a11f464e80b",
"main.dart.js_304.part.js": "a5eb63265ec3cf51ad7772baad9ffee8",
"main.dart.js_139.part.js": "84aa07c82c048ca617c635d4f41ca147",
"main.dart.js_176.part.js": "85bcb2e4577bc92ede04fdec8c04ffa8",
"main.dart.js_275.part.js": "d3b48c05ff150f2d6d4fc10a30bd0e26",
"main.dart.js_256.part.js": "4a0c5073095542e6463dc8756ed44021",
"main.dart.js_237.part.js": "1f6c1ad4f739d684264b4b73ba40aa16",
"main.dart.js_257.part.js": "16d2f64f923bcf27ce20af9704b07931",
"main.dart.js_54.part.js": "8f241645154d0bcafe51ac8b6738f180",
"main.dart.js_93.part.js": "7530404cb112f8b1555d3f0c774b5adb",
"main.dart.js_179.part.js": "5fce02c1865469c05b0e0fe97423f15d",
"main.dart.js_14.part.js": "3ee72af10da29f364bd58b8f614aca73",
"main.dart.js_206.part.js": "8b9b57074c3cb1f058c7b8263e737baa",
"main.dart.js_113.part.js": "712de16542827f496ae72774c428cf13",
"main.dart.js_235.part.js": "b75993948e3c2766c57d8c3592b23c2f",
"main.dart.js_39.part.js": "5109954869a024757e9ccb206ef89ae5",
"main.dart.js_306.part.js": "422f67568c34fbdf745f6bba687e6bbb",
"main.dart.js_250.part.js": "2939d05815db90c5b8e5416c7bddacc4",
"main.dart.js_290.part.js": "85c5c2b66b489a7c65804c7e49e4b31d"};
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
