'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_34.part.js": "67ce4ceee64692d83387bb830da1080e",
"main.dart.js_228.part.js": "8c4a05b48b663574978899f51f9df768",
"main.dart.js_30.part.js": "9010d3236ad96dc0477e0d388d27217c",
"main.dart.js_201.part.js": "ca37c452495ee934120f30ce9f8188f1",
"main.dart.js_289.part.js": "af1399397f9db6dcbfe16c74f0974a97",
"main.dart.js_98.part.js": "2eb0a91c6582157899a2d5a93bd99907",
"main.dart.js_17.part.js": "0fd4dbc72d5ba3b6b2cf2136a874c7bf",
"main.dart.js_302.part.js": "1385ef2981da5b675f2749df8b709aa7",
"main.dart.js_74.part.js": "6ec77c378189fd0c911ec4e488217d28",
"main.dart.js_50.part.js": "d4e4812c4cf2119a01535203eb949b6e",
"main.dart.js_51.part.js": "37dd43f108dac6aa51563a519e26c932",
"main.dart.js_108.part.js": "e26e8ff8ef5d8b2db416e2156f499454",
"main.dart.js_44.part.js": "eb7769f65c1cef6548547814da6cc686",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"main.dart.js_47.part.js": "08b31982ce53bbbdac869297622e7f78",
"main.dart.js_45.part.js": "cbc9598f97fef9909d82543500bdb31d",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_61.part.js": "7e57b47ff229b79544eeb91395bce72d",
"main.dart.js_33.part.js": "ff57cb46588a9aa04d90adec8b206444",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_125.part.js": "dced481143c9982ff8e8817e355d46d4",
"main.dart.js_164.part.js": "ce7bc645810451581eb94a3b81817663",
"main.dart.js_295.part.js": "13d607ff0519ea4428d5fc53ac5792cb",
"main.dart.js_114.part.js": "3f7c3803549543e96327f14fbe887621",
"main.dart.js_64.part.js": "792741c6e56dfb309d0aa4f99c1a7c93",
"main.dart.js_192.part.js": "dd16a61e83d3650133b32845557f3086",
"main.dart.js_305.part.js": "71da0544b0bcfc90b7d679c04b96cba9",
"main.dart.js_168.part.js": "ec886865568ea901c02681b4d4b68341",
"main.dart.js_182.part.js": "7dfb172c6184fe25e96e24fcf81c4862",
"main.dart.js_132.part.js": "1ed2aa95bacf8d43194425eeb0845d31",
"main.dart.js_242.part.js": "25a31a50978655410f138a02b3ea8fe8",
"main.dart.js_82.part.js": "9ae653b8cde6172702a84aa180310e4f",
"main.dart.js_144.part.js": "4b64fd2a5b4e00670e028224402db89e",
"main.dart.js_243.part.js": "b849b5e2a7eef8532632f3270dc49540",
"main.dart.js_175.part.js": "03f7edd17df1a8d536a3854d8664184a",
"main.dart.js_287.part.js": "7ee1f3707344df069d819188b6da969c",
"main.dart.js_162.part.js": "949115f576465041cd048d1e95ab665f",
"main.dart.js_194.part.js": "36b07707c486a02992ad62e652e65705",
"main.dart.js_278.part.js": "ba3e434e860403107d9c991a224eb713",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_130.part.js": "cca7fec0295c16265294bf902585c18b",
"main.dart.js_53.part.js": "30f8d7e9e36f1311871e2a142802a909",
"main.dart.js_217.part.js": "be4a69cb13f77376f4e63cb1f50c44a2",
"main.dart.js_231.part.js": "9f3ab83e5b079cf3b057bf7513ee57bd",
"main.dart.js_55.part.js": "d909cdddde5c85fe3d20aab7253fbfab",
"main.dart.js_32.part.js": "f59a11dbe5b662a5c34ce6b574e48cd9",
"main.dart.js_163.part.js": "04450069714ac619a5bdca05880855e8",
"main.dart.js_49.part.js": "dac12f08319b0ba70ce4812d0fe05fd8",
"main.dart.js_298.part.js": "5c95a376c850d567b7256e5c9a78beb3",
"main.dart.js_159.part.js": "f3f152944f6a99f5bdc977606d077bf8",
"main.dart.js_77.part.js": "d1e9ed5be512f79610e7804f6de62d51",
"main.dart.js_190.part.js": "e365876121892d669152d65ff92a4c33",
"main.dart.js_259.part.js": "cafc2730960b1447a88e71e436631425",
"main.dart.js_307.part.js": "de672dbda3b3772633f29a0e749d91cc",
"main.dart.js_262.part.js": "39c09c35d8dc8e5243f2291b1aa28c49",
"main.dart.js_31.part.js": "03c475354a8a8a0381abef82d5657754",
"main.dart.js_209.part.js": "485b5a88f1ae3fbb8753551abb1e3315",
"main.dart.js_141.part.js": "f4e361383a5d63bf2446022b5a15bb49",
"main.dart.js_187.part.js": "241d5a4e405997b1b1cefe0b6b7a3b27",
"main.dart.js_100.part.js": "0eb2c4edf893cb8f58d74f80fcabf346",
"main.dart.js_252.part.js": "be3800b77b329005cfcff9963bda640c",
"main.dart.js_35.part.js": "36af7b66851e33fd7006cdbaf17baca5",
"main.dart.js_177.part.js": "0e6740afc056a1161c9333b71108d32f",
"main.dart.js_7.part.js": "bb557185d4def813679b465592a4b9c8",
"main.dart.js_184.part.js": "4b865517c7bd7c115c670de9501305da",
"main.dart.js_223.part.js": "419c873f09179b37d6022f7c5a72188c",
"main.dart.js_227.part.js": "b976e0bdbe70ee92c44885ba2e3d52de",
"main.dart.js_87.part.js": "8baa10db5137d82c2e68396fe3de7718",
"main.dart.js_178.part.js": "8bbee84ab68ccb82629107baf771c6fe",
"main.dart.js_70.part.js": "bdf4e11bc9356f1bdd678340d740bace",
"main.dart.js_3.part.js": "9859843ee0e365b160ff1c5f3d45ec51",
"main.dart.js_20.part.js": "1bc283d505f4c7c09f07fda6d2558abd",
"main.dart.js_172.part.js": "03094d9027f3948abab385912da97f8e",
"main.dart.js_13.part.js": "bd18b598084e916b787963c04eae605e",
"main.dart.js_38.part.js": "aff4c773338498dfa978c728ec5ae789",
"main.dart.js_299.part.js": "75316c34fcdfc4407d38e51558bcfa7b",
"main.dart.js_4.part.js": "5cda08c2e42d6f72a785598bcfab351c",
"main.dart.js_92.part.js": "bd2f5a3584b37c1c5254795a3fe1215b",
"main.dart.js_106.part.js": "0e5abd2fb968c8fbf7d7b2ee8df2100d",
"main.dart.js_279.part.js": "702261a49124841fcc6d051313fb3d8b",
"main.dart.js_16.part.js": "6ff9e17da36814759b78836cfe1ddb47",
"main.dart.js_199.part.js": "81c575c3bf00bd7682d9afbd9699f8d7",
"main.dart.js_79.part.js": "182c3ddb7e2b81aa379d5a9133d7cc7e",
"main.dart.js_183.part.js": "dc0dd074f971149cc50baa13a51efc13",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_121.part.js": "d9645cfdfb9a3964abc72a913cbb7920",
"main.dart.js_185.part.js": "2fd29938c9afca6e36809e7a42c70afb",
"main.dart.js_286.part.js": "4da11a68ffe460efa7baea474bb7ca9f",
"main.dart.js_40.part.js": "a5564129ffdb2f7746692c72d9a90d86",
"main.dart.js_263.part.js": "69dfc8065be68527aec9285714c3bf8b",
"main.dart.js_282.part.js": "7d5a57732c7f3cd9c11ea7b073d875bf",
"main.dart.js_241.part.js": "93564b3581f40d38df4eacef8978331a",
"main.dart.js_56.part.js": "ae3907fd7b52cf831ce1d1396d21d705",
"main.dart.js_15.part.js": "e2a6e6037ae296c6eecec53246ae1b78",
"main.dart.js_107.part.js": "bf40489b2479c9918addcc6c42d37354",
"main.dart.js_89.part.js": "028cb59331b4f243e2e965eecb571533",
"main.dart.js_202.part.js": "f9507edb908cab0eb66ca6a74283cb85",
"main.dart.js": "25a6b37e4f53c3a26e3967cdcdf0a432",
"main.dart.js_253.part.js": "9936fea087650bc21b3a0a6d2259e142",
"main.dart.js_258.part.js": "8f2c4abeb088099ba26d399764404219",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_225.part.js": "7a73ec465c08a356811fdde7f4908447",
"main.dart.js_85.part.js": "01db8ae80fa9d2208369bb4e55aa51a8",
"main.dart.js_271.part.js": "d228cb4c2c9fc714a2d35e03c8bc05b4",
"main.dart.js_10.part.js": "ddccba26e4e300152e1c7714d6e241fb",
"main.dart.js_124.part.js": "2f9bd37212e34904fdf4553f3e0bf75e",
"main.dart.js_11.part.js": "ee72c93aceb3da24f23af1f5a62dde5c",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_73.part.js": "6fb81c7cd4542cf6a9b8b194ce6c474b",
"main.dart.js_260.part.js": "9846756b103b37eb248a34525a28a4a0",
"main.dart.js_95.part.js": "a60e1b9b807b6ae755581617bb8f8f3a",
"main.dart.js_215.part.js": "507e46cac02a2d4ebe572137c8d1e5f0",
"main.dart.js_198.part.js": "b591a1a2243d671c47c1a5e6c04562e0",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_101.part.js": "9f54a9000e07fd6c1e4179b269ec9f46",
"main.dart.js_96.part.js": "4eac728bdf5ac4da6192729eb06c69f7",
"main.dart.js_131.part.js": "ab01114686052a5cc93fd7f7c9d9023c",
"main.dart.js_118.part.js": "e5268b79a04806c52641e805669f3f3a",
"main.dart.js_94.part.js": "da9ed9d97eb87f30a3d1f5115b1041f3",
"main.dart.js_140.part.js": "c501a59212270719f3575f86d6b8983e",
"main.dart.js_105.part.js": "0a4754a66ea9be51416ec7672b9edf32",
"main.dart.js_216.part.js": "72839a40eebf813910176b946db40d5b",
"main.dart.js_1.part.js": "1ecbd23bbfb69d335247cb49a308158d",
"main.dart.js_133.part.js": "5ae870a9bc90839532e2b69b465f5fae",
"main.dart.js_83.part.js": "0eeaad15478ba911ff575da63cf2a421",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_110.part.js": "e78162194a1b43bd8851a078dda724d8",
"main.dart.js_276.part.js": "87f35ba36e3a952b27f6b646bb18d093",
"main.dart.js_213.part.js": "ae61a781b7c6db4772aefaff95b18b79",
"main.dart.js_238.part.js": "1710a632a15135389c86b2f907701ca9",
"main.dart.js_78.part.js": "ecf5fd1d3865e5d647455ef1fb9a0579",
"main.dart.js_308.part.js": "22a5b41a64a4d1e9888abe648ce23bd1",
"main.dart.js_109.part.js": "019bb669dfb89944cee7cfbf5d106f09",
"main.dart.js_265.part.js": "2987f6024869744d8d06ca3cafe51460",
"main.dart.js_41.part.js": "efa5b5ecc3ee3c42b60ca7f55e60ab2c",
"main.dart.js_12.part.js": "51b7b23be8461ed71c884cd774665396",
"main.dart.js_303.part.js": "be5165d1999be9476994ff82a65bb8c1",
"main.dart.js_76.part.js": "aaf140daf8ae5bf003bd5787e6206ea9",
"main.dart.js_239.part.js": "49179a1f6aa3bb8bb172b1d31bc4e6e8",
"main.dart.js_251.part.js": "52d2c0d29529b8a4714c2524f6231198",
"main.dart.js_72.part.js": "52ff25203867e8c3b93027b2830c52bb",
"main.dart.js_68.part.js": "93a6ee04d1642974102c7500b1f7a8cd",
"main.dart.js_291.part.js": "a32c0676efbdcae9c0e5de013fbc8e6c",
"main.dart.js_62.part.js": "5c8fd183f012bfec69d3fc116beb8e7a",
"main.dart.js_180.part.js": "f7641deac46ecffc3808c2d0ca49a03b",
"main.dart.js_240.part.js": "8991ed893ec8586993a0b5bd908b8ea3",
"index.html": "39a019a5d16bd3b358aa9b0bb507e869",
"/": "39a019a5d16bd3b358aa9b0bb507e869",
"main.dart.js_266.part.js": "691b5be1186b04f44e85301f7677f259",
"main.dart.js_297.part.js": "e9726c2c3bcbc3fb9a374c8efd3b8341",
"main.dart.js_134.part.js": "200c32097c595a98f6679f50cc59de8c",
"main.dart.js_294.part.js": "6e45aa7fb40b2f91605a5065d9d12672",
"main.dart.js_181.part.js": "62afb64e45e2b12c92ff007129bb10c5",
"main.dart.js_147.part.js": "21e00c207de208c5c355c1c9bdd60b08",
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
"assets/assets/translations/cs.json": "dfeca0ec0ed4500838aee7e421d57408",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "cd487b5e8462e2b4db0ff9c6a0042c03",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/fonts/MaterialIcons-Regular.otf": "3849aec6b21571aa35af383d7bc223a7",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"main.dart.js_43.part.js": "e3ae85c92ec8d8320fdff42d3fb86418",
"main.dart.js_145.part.js": "f5f291969d444b221cfbe6f70ba3b219",
"main.dart.js_29.part.js": "335c72deb057d481cbd55d2af10ec414",
"main.dart.js_267.part.js": "03cbca8b2903fce5ae2cbe3f3651a2fa",
"main.dart.js_170.part.js": "562040e96c96882427e5767015b3db09",
"main.dart.js_197.part.js": "a114f44c901051adc89b86fcc6aa56f8",
"main.dart.js_280.part.js": "73b1b636d7031a18bd05457dcb5980c5",
"main.dart.js_97.part.js": "99267ca8e58878ccdfa7d777bcd97f7b",
"main.dart.js_269.part.js": "e90d2063388e4b46a2a53810e63389fb",
"main.dart.js_111.part.js": "267e4f6ed12b38d7f32dbf4e61e7c066",
"main.dart.js_204.part.js": "e4fe87257b31f4978778433c10b3e1b4",
"main.dart.js_211.part.js": "bf4473a331add1da267b9086455e75fb",
"main.dart.js_230.part.js": "f8f7cda50e3fa5b5f55ad40cf5f799be",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_283.part.js": "0950b4f6fefd8ff43993b1110b15eaa3",
"main.dart.js_148.part.js": "741085e069dc744927f658e13719137a",
"main.dart.js_48.part.js": "ffa7e0e9eb2801b7d60d0fdfb5e338c2",
"main.dart.js_161.part.js": "a8951eddf03fa0da67e453b9eb53ebfc",
"main.dart.js_229.part.js": "bd6193655736f0e16797afe208ce8e49",
"main.dart.js_153.part.js": "059ca2837fbe7698958bf2a242f70f38",
"main.dart.js_28.part.js": "b31b5d9eab33da8f5494e49896b04e4d",
"main.dart.js_71.part.js": "cb6520dc8414b7496a087360479f4771",
"main.dart.js_119.part.js": "bcdb6df34beae267ed80176bdabb2168",
"main.dart.js_234.part.js": "aced2f393f32cdd54675eef87d00fcdc",
"main.dart.js_42.part.js": "489b11b97db921108c31cbd695471505",
"main.dart.js_166.part.js": "05bb1c5fcf87ef2bac17a9f30b80b832",
"main.dart.js_191.part.js": "a274c1b0abe68d24062ed3d53d851f2c",
"main.dart.js_58.part.js": "34110b0357d132636dc7128a0496f32b",
"main.dart.js_285.part.js": "8909ab8bedbfba364d0f0396782eb130",
"main.dart.js_246.part.js": "29c5a23a1f077aa1ffb08c38abfa510c",
"main.dart.js_59.part.js": "6f0ea3da283210fb3c4e84c330a95127",
"main.dart.js_277.part.js": "3f8472dbb23a42c238c4779b67b03a10",
"main.dart.js_284.part.js": "1ce9f7998d27a89e0fd6985be2e30caf",
"main.dart.js_142.part.js": "29928c5224fa4e4fd5dca944e1b6d171",
"main.dart.js_102.part.js": "d5784904751fe323ce4e7407a6d26cd3",
"main.dart.js_5.part.js": "e8e4ec24e2c460f2a098d972e53643e5",
"main.dart.js_173.part.js": "cc9c88397a230f32351e41e541f88add",
"main.dart.js_128.part.js": "6b9b4b3681e83e2ff0512048b00f2f45",
"main.dart.js_244.part.js": "4517375a0abf4a7c7a591fc11964cbfa",
"main.dart.js_293.part.js": "ebccd217fc9ab4ba682c4dd6098f4b52",
"main.dart.js_300.part.js": "90b9d0af893c869ee10d3d3425951136",
"main.dart.js_233.part.js": "2e947f0fa2e519ec495559f1a38c245a",
"main.dart.js_261.part.js": "13d743daea0c63bbf5256edcd9b65f2f",
"main.dart.js_236.part.js": "4d27a313ded03b3cdb5beae132c6d004",
"main.dart.js_274.part.js": "d21aab81508872af7ed7cd99c89dab95",
"main.dart.js_157.part.js": "aeb78fca592886501fffa4ce5f953b2b",
"main.dart.js_135.part.js": "b9364ba1f8128a29d030749561dec0e0",
"main.dart.js_6.part.js": "12215a2e7751201badbbaab23aea5b60",
"main.dart.js_37.part.js": "c322fe18534bac1e83317bcd0f73d0d6",
"main.dart.js_84.part.js": "9af3dd4b0b01c765cdb26b8f358a9f4f",
"main.dart.js_208.part.js": "104401f96c9d064eda903adb2106dd97",
"main.dart.js_86.part.js": "a09f82128e3ee31bec872099d07fdbd3",
"main.dart.js_255.part.js": "b730f05b5475e80480cfd910101485f5",
"main.dart.js_165.part.js": "5b6df0e4afbf0b55dd792f008fdf0605",
"main.dart.js_171.part.js": "93b849e068a5ad54512ad86f537c9e6e",
"flutter_bootstrap.js": "935c9d51f719439e62605403ab1d4edf",
"main.dart.js_146.part.js": "17e80e59e4e4b00f44410ca970bdf6d9",
"main.dart.js_210.part.js": "c7d96971a537f02be5a0d0adc15ced2e",
"main.dart.js_81.part.js": "21470a82199281c03353dcf5b48970b0",
"main.dart.js_156.part.js": "cf8b502129c35b16fc0a5cee8c48b52a",
"main.dart.js_116.part.js": "415286bf1ab98f07fde4c9e0515875c3",
"main.dart.js_207.part.js": "e77e216e437afa44c5e156fe528656d5",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_27.part.js": "621853eb1b10ccbcb6c9719fce67817d",
"main.dart.js_154.part.js": "b30d13d15c9cc08d57ca80ddb967b252",
"main.dart.js_268.part.js": "4a7d28b5381a6dc346a97ec2b1ea2be9",
"main.dart.js_149.part.js": "a41c8843b26624a0792a7162e7fb9a8c",
"main.dart.js_112.part.js": "6c4b360e1014d0c3d32e74f54d366378",
"main.dart.js_212.part.js": "5b3a58998e04ea054bdff2fcebf75e69",
"main.dart.js_186.part.js": "4763277c4991e4a432b3e1bda112fb6b",
"main.dart.js_26.part.js": "386bd310af2b7fb4c4e994bad27afd81",
"main.dart.js_167.part.js": "b3b051e25723dad4286d892af1ecbbe1",
"main.dart.js_123.part.js": "2758159ac7da651bf16d94feca4676e8",
"main.dart.js_36.part.js": "f89b13affec68a8073f104d404852235",
"main.dart.js_224.part.js": "37d3630916b20527d4a42bcb9d682c3a",
"main.dart.js_301.part.js": "7195b9fed9ea422a03af0e761f8a9eb7",
"main.dart.js_24.part.js": "30d406f52159f7779b0772714659fedc",
"main.dart.js_272.part.js": "fb22a8755e139599051a3d78192a288e",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_155.part.js": "77dd3508d87b19fbc5905f2fec0d4ae4",
"main.dart.js_57.part.js": "3b5f4013c70d9dd714f99b3db19eeccd",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_18.part.js": "db97082a0425a7e59b445708d268f98b",
"main.dart.js_292.part.js": "89940507eefd71410224fb26648b27dc",
"version.json": "b01eef7d83aa1d12e40ae5983cba1a73",
"main.dart.js_8.part.js": "bb2a6ae3f12aa86f7673f32f95426226",
"main.dart.js_247.part.js": "6dfeb9f287f0b6a0476ffba2c2076afb",
"main.dart.js_9.part.js": "8b7f9b16b7dd067ab96ab99a48464d1b",
"main.dart.js_69.part.js": "df96267a4ab9f7654022ed82d3aaaa8b",
"main.dart.js_304.part.js": "a5eb63265ec3cf51ad7772baad9ffee8",
"main.dart.js_139.part.js": "40b47637a76af442c7e7fadfb2820629",
"main.dart.js_136.part.js": "f437e1228939d56e540ea21d88ae20be",
"main.dart.js_256.part.js": "b0143b0fa0334c7df5001dc047f49e37",
"main.dart.js_237.part.js": "116c013e7b802145cb59153da2937a10",
"main.dart.js_257.part.js": "0dfdf91cbfae8ad31abc8a4a2da06433",
"main.dart.js_93.part.js": "75710c7cb91e3ab3163a0244b6a09c41",
"main.dart.js_14.part.js": "3f4532d389abd38aa0a9f4eede1de1cb",
"main.dart.js_206.part.js": "bc29b85e4f5f03ef4698dc5a62dcf4a0",
"main.dart.js_113.part.js": "7ac9f50ac52af94b91d4d6be1ee16ec9",
"main.dart.js_273.part.js": "3c872ab68a7064011754d555415a8197",
"main.dart.js_39.part.js": "0b52d85c004b1d7be5372720ff905d21",
"main.dart.js_306.part.js": "b55124492b70bd01b8a6c1f90a9659e0",
"main.dart.js_250.part.js": "c98ca8156673fcc80ed50102c434a666",
"main.dart.js_290.part.js": "3d85c346226ad2f9d0fabc16c7a4a6c1"};
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
