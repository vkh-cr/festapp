'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_290.part.js": "8707ddd6a25581d4d5cfce306fb001e1",
"main.dart.js_81.part.js": "762757e92fa356d015e76549cc2d9217",
"main.dart.js_177.part.js": "748fa733001df4d2855ad877a4cb6623",
"main.dart.js_247.part.js": "0093e96a51fc49aa42df2f516c0ce515",
"main.dart.js_154.part.js": "7ef468cfc8b32a088cc4e967099bf6dd",
"main.dart.js_135.part.js": "099c981e4f6213d53f21d02fa6f9deca",
"main.dart.js_87.part.js": "42609fd537230b3047af3fb24d1bdfc6",
"main.dart.js_36.part.js": "b5b83f2ae43564b9a47a871c54968507",
"main.dart.js_194.part.js": "c44cad93dacb0eec9e72b70d8058ac7c",
"main.dart.js_322.part.js": "96c06af5324b2be2d032cfdedaeaac94",
"main.dart.js_299.part.js": "8ff8df4c1e24335915405042e0c9f6a0",
"main.dart.js_138.part.js": "5807cbdae89e6b421ecdb2198288f3e8",
"main.dart.js_122.part.js": "a09dcda9e2fd038a6d7095e36ee22ee1",
"main.dart.js_25.part.js": "405e7086a573ee592945495ddcc6764d",
"main.dart.js_251.part.js": "f438fe04ab440c9ead85ec8e12a58e09",
"main.dart.js_206.part.js": "a10693c09e5b5cb6f62db5c8ddb2ca80",
"main.dart.js_61.part.js": "999cb1490d842b58afc967fec48bbc6b",
"main.dart.js_14.part.js": "5e3147965a3db9bf6c8f437b51b2293a",
"main.dart.js_255.part.js": "f7254a6a3b71f9788aaa47e431cc2944",
"main.dart.js_178.part.js": "69388bbf8a4aa23a591fe0462797db5d",
"main.dart.js_246.part.js": "55c63e9e2512c07ae5a162c0ecb99649",
"main.dart.js_167.part.js": "3075905b4764208461c3e475a7fc97a3",
"main.dart.js_256.part.js": "f71e182788ec1498a584ec35816ca230",
"main.dart.js_116.part.js": "ee90b082981cc89b23f9c346eb83a251",
"main.dart.js_46.part.js": "2d3d49a51cd185566fd122db3dae2ef9",
"main.dart.js_274.part.js": "012a439fa353af95fa22526926bda5d8",
"main.dart.js_72.part.js": "0cdd49585ad626793116bf78849a142b",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_207.part.js": "d898bf9e6552586fca5efa8ce8e07c44",
"main.dart.js_38.part.js": "93d5b8879981fa00e24e7f5a2f2e75f9",
"main.dart.js_316.part.js": "1dcb8de9a318e3d0239dd4f37fef0dc4",
"main.dart.js_205.part.js": "cbd73ed7d4246aca5ffb5b6f84747101",
"main.dart.js_17.part.js": "f056fe2ea93dfde00754ff6ad6075b32",
"main.dart.js_220.part.js": "4b4ae84f3a0281ace6b579c628038ae8",
"main.dart.js_6.part.js": "9da55ba78deabf64a2bd7046e05e0e1c",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"main.dart.js_169.part.js": "25894ff5fac87bd507e8a7b043554813",
"main.dart.js_132.part.js": "f690ee0e5b6a9f998796922fc5cf44c6",
"main.dart.js_331.part.js": "3615887a0a80a5cbcce049180a6c6a3b",
"main.dart.js_146.part.js": "7bfdd83b60989dae26da46ade95c4c5e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_57.part.js": "95a6627aa22a2bf6c9891f29ab42e128",
"main.dart.js_60.part.js": "a075cea97a85180f03619c1e01a4ff18",
"main.dart.js_264.part.js": "ea96acf1c54206d44674e4724d4f9024",
"main.dart.js_285.part.js": "98253ac82297c95d5bc93041e5d8d5cc",
"main.dart.js_92.part.js": "ad0b5654e8c723a77b5c1bd961a936ec",
"main.dart.js_314.part.js": "fe3f4fde5f1024bcefd7786f968620d3",
"main.dart.js_262.part.js": "c52b0dd683cc9b97521d17064aa648bd",
"main.dart.js_307.part.js": "fc3ca7e0727ec9b0dd90e77bab84b741",
"main.dart.js_85.part.js": "09fdb1ebfa8fdbcbef88e53f100ec2c9",
"main.dart.js_200.part.js": "f58486b34c53d7124d7c19c3714e3ace",
"main.dart.js_1.part.js": "3e4585b731067a6c018aae5cab99ad20",
"main.dart.js_121.part.js": "7fc3afb780a2cd7f887ca4cb588541af",
"main.dart.js_191.part.js": "cb75f507e184206ac70f6a13e8c90581",
"main.dart.js_39.part.js": "e325f31b35c1e1539909badef253be64",
"main.dart.js_8.part.js": "f13b4f57249b93a6a26659d785965fc3",
"main.dart.js_95.part.js": "562894919de43df09372f0ef75552c3a",
"main.dart.js_139.part.js": "38ca5a931b8b13f4ae1cd241d42f7e32",
"main.dart.js_140.part.js": "770c1d6f5b824ebb174ff2ebb32889ac",
"main.dart.js_93.part.js": "d19097d11964a80223f60a4bfe4c0621",
"main.dart.js_275.part.js": "55a54433c28dd1a261fbcde464f713ce",
"main.dart.js_180.part.js": "1779ae73f0f10cb83195ae3362bd1fc4",
"main.dart.js_182.part.js": "4f975d001c997f9f21175a68c6ca48b6",
"main.dart.js_144.part.js": "04c447831e3f4a7eec4e4a8cdd41a711",
"main.dart.js_13.part.js": "9c0068eced0ad181ccc79e2c209a94e9",
"main.dart.js_48.part.js": "0f99daa0046106ffdefc85048e009492",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_94.part.js": "8621bf7032fd38fd79940a9c82d726bb",
"main.dart.js_310.part.js": "aecf97095ea394cfd2780268f3f0eb5c",
"main.dart.js_231.part.js": "97db1ab694b020118e9ae087b7f988d2",
"main.dart.js_300.part.js": "ea4d2866525cb42c3123f2cb43e786e9",
"main.dart.js_68.part.js": "16d7ff67fe7d0607d92f320cd926db32",
"main.dart.js_269.part.js": "a4c838c2ff3337592dc0a36976b29136",
"main.dart.js_298.part.js": "21324cca079e48d0190a31a0d63ae748",
"main.dart.js_330.part.js": "f5dec3d47c4c24fb6c3414af78b3dd33",
"main.dart.js_174.part.js": "218bdc6795fa40e37c70514fa4d419b7",
"main.dart.js_43.part.js": "adf24f6fcadab8081a0978ec664fbbcf",
"main.dart.js_28.part.js": "eaff8bd2df1255846c1201c5499e16e6",
"main.dart.js_303.part.js": "b37f630cb6ade23c7c86dafba6fc818f",
"main.dart.js_312.part.js": "7f545aeb7bfd2a6c13b8a70f02c28ada",
"main.dart.js_166.part.js": "6b31b6f1091e9faf81313b996237ec88",
"main.dart.js_35.part.js": "43475984ec28aa6d6997152041caf719",
"main.dart.js_118.part.js": "f0a6ad769c7d648cece7fcaeaf606ef1",
"main.dart.js_75.part.js": "9e5717f0109462ec18bb1f551e15064b",
"main.dart.js_149.part.js": "5253d0b585dae559dde71591bc9ec919",
"main.dart.js_11.part.js": "abae692abcc645296ad7a25fec56c35c",
"main.dart.js_123.part.js": "e766e86c680d71acc59a4ac88e2d6a58",
"main.dart.js_252.part.js": "6994177e8071a27ee9a4dd3f8cd3f64b",
"main.dart.js_37.part.js": "3864b2f4bc15441d525384601ff4214f",
"main.dart.js_235.part.js": "a435bdd26fc28fedf44de0c4d7aeb53e",
"main.dart.js_240.part.js": "e80f7dd4a4f3e7b4fc6b345ca4c5b893",
"main.dart.js_168.part.js": "caedac81def10c739b0aa554dcfaf7eb",
"main.dart.js_313.part.js": "4bcb927710e484f2493ac7b805fcf438",
"main.dart.js_26.part.js": "709e57642605711bb4d8b6ead024bd5e",
"main.dart.js_30.part.js": "9799d1e44c42513fcea6224095b20943",
"main.dart.js_283.part.js": "f72881a7f11a89e4aac287bb35f1207c",
"main.dart.js_293.part.js": "0c379a268e2f93c19f3c321c036a7c4c",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_3.part.js": "c3eed1be7c9e6c28065884ffb2a714cb",
"main.dart.js_80.part.js": "d8d8a7f6b11b411fb68deb491ff514c5",
"main.dart.js_277.part.js": "03a98301cae6951536ac64b99b4ea0e1",
"main.dart.js_103.part.js": "0bd0aea0daa324b874c1924312f90199",
"main.dart.js_124.part.js": "8479aca3ebfe86084ab0a684dfeabb5f",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_188.part.js": "feff6ea31eeeccb4dd9a06e175c3edc0",
"main.dart.js_32.part.js": "de1cc3e572d47d00bcfa998cd5398b02",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_52.part.js": "4741b521047081c3ac0835e743adad23",
"main.dart.js_4.part.js": "f62e98dc46bce3fdcfa1275de9b8dae4",
"main.dart.js_53.part.js": "e525fd150aa166af3ff84e707b6a6166",
"main.dart.js_78.part.js": "af8658026c8490624f12db18815a6196",
"main.dart.js_234.part.js": "1d23cf658f708f4e40a9ac0d3e32d582",
"main.dart.js_213.part.js": "563544c3cf9a174dde535c8740cc5c08",
"main.dart.js_15.part.js": "bb35d306471ba24940195267c30628f4",
"main.dart.js_105.part.js": "38c55d5428a44b08852d7cf989ff42e0",
"main.dart.js_217.part.js": "a39a4f0b4d17da65d2655ee79ec2658e",
"main.dart.js_248.part.js": "20ed19d49a8441b6f1f5ee6985996d44",
"main.dart.js_45.part.js": "1d21e133251c7d8dd8851b029480bfda",
"main.dart.js_160.part.js": "0315849c21aaed4be0e25bddb945094f",
"main.dart.js_289.part.js": "b29ed4e9ab74cab55289799177702a32",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "1b72a4dc7cbe53b2e1064c3a937b5730",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "f082dab5050cdf2973229cfe0b6c3d7d",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/uk.json": "1794b65021c354763a0a830b83ee3fb1",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/cs.json": "0b6c1e4404da068a9ced90478998bfc4",
"assets/NOTICES": "a7b8f578c50dfe948059051e6983e332",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js_175.part.js": "c73e9f7f4293a2d3007d1b5a02b51a1f",
"main.dart.js_145.part.js": "e0b0fed5e578688ab516676903fd3d4d",
"main.dart.js_210.part.js": "15209047d2853bfef73be41b3144e7b7",
"main.dart.js_141.part.js": "d30219a4c5cc0924d6ea21d967da8194",
"main.dart.js_23.part.js": "11d1eda60de7d2bf43fd84b0e78e0f99",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_325.part.js": "8101bcdfbee312ad03bb760f4db9eae7",
"main.dart.js_82.part.js": "09af42a791f01fc77895a0de3f493a9f",
"main.dart.js_31.part.js": "a69d133e0a9d2ce017ce23e0a4824d5c",
"main.dart.js_115.part.js": "53c946b1d31422ac33aad0eab2b25431",
"main.dart.js_189.part.js": "abc5389093f5ce201e84b910ae65d5fc",
"main.dart.js_204.part.js": "a3f896763084a6d52260e0d535de6c8c",
"main.dart.js_79.part.js": "b8d9bf7b90c137502e7e73752373bbd2",
"main.dart.js_268.part.js": "0af580ad5b14cffa9a48501a52214259",
"main.dart.js_301.part.js": "794da2e2c48dae07121e990ff1a89645",
"main.dart.js_201.part.js": "12946bb646737f78dbb94dccda6fb31c",
"main.dart.js_297.part.js": "c1816ea3d9458c2918cb5b8e4113c47a",
"main.dart.js_192.part.js": "1740136a3614b1b17839738cd0c37082",
"main.dart.js_327.part.js": "23ed934bb7d6df5bf46efc231920e481",
"main.dart.js_198.part.js": "fcc7173ee39e95d2d348fa414e98eb56",
"main.dart.js_215.part.js": "0e8a72289a0c920ad802ed28872dd542",
"main.dart.js_193.part.js": "63cf18d463d304da3ecc6541e661e76c",
"main.dart.js_195.part.js": "96e8a38daf93d652c4345b4e120108af",
"main.dart.js_120.part.js": "f22fa7c1eb9931f3fb375a1628432e60",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_304.part.js": "6cb5bbef344206aa94eafe30d8216ea0",
"main.dart.js_208.part.js": "2d9954ccd930cb1f30b6c1f51ddbdb68",
"main.dart.js_323.part.js": "87674be82e0241aff7ca85d9749a3400",
"main.dart.js_152.part.js": "7726f9e427bbf1bb2fc7d60051fc06e6",
"main.dart.js_272.part.js": "8c776278c354ca19fe5227b0da871d56",
"main.dart.js_51.part.js": "657d49dbec705c00eb1ba621c2c201bd",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_319.part.js": "6ad082be8234eb62c073cee558f81abc",
"main.dart.js_170.part.js": "2568f1034c9cc8f624cd251008715650",
"main.dart.js_282.part.js": "207baa6f7051018159be15c280537532",
"main.dart.js_34.part.js": "fc2c23cac6dd1c2595aaad5089fef51d",
"main.dart.js_63.part.js": "0a763ef5b11518c97a7387705f9dc524",
"main.dart.js_128.part.js": "ca1ce5be1e033f5b08803313ba7229fb",
"main.dart.js_2.part.js": "b9ea43a3180896ea05b5001e035c70ca",
"main.dart.js_229.part.js": "5133383f3d0c1d5120d1b72f3ba9a8fd",
"main.dart.js_88.part.js": "c799e6bcf4ba2c5f335324e1e3d5c35c",
"main.dart.js_27.part.js": "d23f88b31771bd68a61e889449e07532",
"main.dart.js_230.part.js": "2f90784fc7930faed2d34ece0bafa932",
"main.dart.js_238.part.js": "5799783dedc05e18f8311468f0fad04b",
"main.dart.js_324.part.js": "b8ab7d9bff3e4e57ea5a0fc8e12d69e2",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "306f7c149e502d9eaab7ba24957d8953",
"main.dart.js_332.part.js": "e968f6416e6e85292d1663af50738c1d",
"main.dart.js_253.part.js": "5aa6c0b40c423a67ddfe68030d8118f3",
"main.dart.js_99.part.js": "b3beb5a61d7ca2852fcf4e1688902f25",
"main.dart.js_156.part.js": "3ca577d81d8ad35681d5d22d14541621",
"main.dart.js_66.part.js": "7783babde33851dfd6506f0450298e5a",
"main.dart.js_44.part.js": "4daf69860f819db23c03e86f01eb5a59",
"main.dart.js_114.part.js": "f501113e79f5e5e54f4e9487ba02726f",
"main.dart.js_10.part.js": "8ef6f3e0751d83c73cf4e9d715858ede",
"main.dart.js_183.part.js": "3267a112952436a4713925f1f2046f96",
"main.dart.js_129.part.js": "bec057a7dc6f22a662ad52210a4ec305",
"main.dart.js_5.part.js": "f7889e40b23e46449a031c91720c9aa8",
"main.dart.js_76.part.js": "fbcac8855e78cc95f4e727ebf48767c3",
"main.dart.js_265.part.js": "5fa58aead79016cfee5b4ee2e6d9a1d1",
"main.dart.js_7.part.js": "6589dccd8f8c7e24afcb71b66452a8ed",
"main.dart.js_16.part.js": "6807abb9c7da496b979975389e58a226",
"main.dart.js_294.part.js": "7e15ca458fb4aedddf7888bbf9ff0e30",
"main.dart.js_236.part.js": "f8e0dec33c506cfdc09c42b045c26a99",
"main.dart.js_133.part.js": "f2ff1f6d0a7ea45b1760974a42fe5ba5",
"main.dart.js_259.part.js": "db037952d09faf25bdf5cad9f6603278",
"main.dart.js_90.part.js": "895aa83d1835e2b4ae7fc8530c4d2aad",
"main.dart.js_260.part.js": "97a6901321b5b562ea852de93cdb9aaf",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_157.part.js": "bd7d586ff16b740ee0a600fa9927acf8",
"main.dart.js_317.part.js": "75014fc82429621eff2683092c5ed96f",
"version.json": "904f1e24cba7b4e8affa348f0e188ea0",
"main.dart.js_153.part.js": "0b264ae049e3bcb3a522e21a37157503",
"flutter_bootstrap.js": "798f052a0381dde2358c30359acda6f2",
"main.dart.js_176.part.js": "085f711ae4dd3168e2dd31fced448abd",
"main.dart.js_306.part.js": "920da80d22aa55d30f04ab3437341a45",
"main.dart.js_209.part.js": "204a3dcebd3d3e3ded51bc1225ad9dd1",
"main.dart.js_65.part.js": "d582723803e8ca88406038ad741ade89",
"main.dart.js_326.part.js": "9a75bfb62ae9ba925bc5f05b194fdce3",
"main.dart.js_224.part.js": "cf50215030242a9413ee917016522a83",
"main.dart.js_33.part.js": "c648c6defdaf39cf5d8e2a977c8305af",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_315.part.js": "e0616fc42df77fbe53a47acb37579099",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_9.part.js": "2aa9d06c5fe73750af759dd004ea5b06",
"main.dart.js_155.part.js": "b9c09f5977731415d49196b32f5c2a2d",
"main.dart.js_309.part.js": "bedbff04fafc1a1ae77b9e9f95ca3af8",
"main.dart.js_239.part.js": "5e8bc8c2678cdd1d78ab211517e90444",
"main.dart.js_284.part.js": "d620b2418a0ce60f92c19dd585cbd92c",
"main.dart.js_214.part.js": "2e293a464ac9231b2be4dc4ba784be7c",
"main.dart.js_42.part.js": "4f2e2798b1f070f664c7e20fb1a976d5",
"main.dart.js_127.part.js": "1ab6bfebbd268a07df9f460a56fc4b4d",
"main.dart.js_320.part.js": "da046896eb29de37b528b01f10991028",
"main.dart.js_291.part.js": "edd8e961f45cd8cb15092dfcae292602",
"main.dart.js_98.part.js": "e2e3188689699367e68752e3345b8916",
"main.dart.js_258.part.js": "af415964d3e5f965a7020aa92c7b6fdc",
"main.dart.js_163.part.js": "7aa9763b2c673e4683a77dd590f59d15",
"main.dart.js_287.part.js": "46d65394c2da5c8d9a0d982de1391692",
"main.dart.js_161.part.js": "cfb6d641ddce0d4d83a989a225afd043",
"main.dart.js_49.part.js": "9a1cdfba10f8b0968c003f1f8e7e52f4",
"main.dart.js_308.part.js": "2af44b616caba8cee4c174784626305d",
"main.dart.js_233.part.js": "c810f6701fe225b46845b12d45c18b0d",
"main.dart.js_136.part.js": "e396d3216e199de45a74fba801cd3278",
"main.dart.js_279.part.js": "e51f2435fc8afaccc74ffebe44789e34",
"main.dart.js_12.part.js": "f2b814a9a29f4246571cbc103423c36d",
"main.dart.js_187.part.js": "bcde344c81681ab4483889915b00e46b",
"main.dart.js_62.part.js": "33a75ecb04a7888577e0bc7295e250e6",
"main.dart.js_91.part.js": "0cee334844c7a169c1516b35a7c7fc82",
"main.dart.js_232.part.js": "fa5d58c7d10ab17ea1ec9803e7f4ea5a",
"main.dart.js_273.part.js": "a80df853d21e90873d7dbc8edb61664b",
"main.dart.js_104.part.js": "6fdd8dd7feeac58a2fa375587201d9ed",
"main.dart.js_50.part.js": "9e920a247fd9519520a674177d7a73c7",
"main.dart.js_97.part.js": "bfebae31850a5eacb027d663ea405b19",
"main.dart.js_278.part.js": "398c68449bcf55011bfa9a9346765659",
"main.dart.js_109.part.js": "51863c89462c870384b38a312b58e232",
"main.dart.js_222.part.js": "bf46575045760a6f28ff10d47e3281f1",
"main.dart.js_305.part.js": "f450c6faabc6506b838fe20ea178c6e4",
"main.dart.js_89.part.js": "6bc3f69e11d6a6fe801763d21966db1a",
"main.dart.js_292.part.js": "5529412f3ea2783249852117b1b6dee2",
"main.dart.js_108.part.js": "be3feb67f761f07f71ff6eb3378bfcf1",
"main.dart.js_295.part.js": "616990bbdc0c87d010bf55e4abc9c9e4",
"main.dart.js_221.part.js": "c4a2667733a6e11b3e83c971e5a88e3a",
"main.dart.js_142.part.js": "698e951f7f8b14a773f3be107390d063",
"main.dart.js_288.part.js": "bc5452772ec05c52eaae9ebcd3e90316",
"main.dart.js_19.part.js": "daf193bac36dfd9a5d693ff7bda02b1e",
"main.dart.js_55.part.js": "a81bb33e6aff8e86fea970dec14dc3c4",
"main.dart.js": "68b22257b51c3ecab381cb0355713891",
"main.dart.js_227.part.js": "57c7cc4baad91d8a71825db3e4bbf291",
"main.dart.js_280.part.js": "cd5517a8c54c719b629d1fb44590346d",
"main.dart.js_266.part.js": "042723eb8dd275b5a51382b5ed481a11",
"main.dart.js_261.part.js": "24968ce91227d5f63f84b81c467bb7de",
"main.dart.js_130.part.js": "908025a0a22d8ba6ce74df316500bf1a",
"main.dart.js_41.part.js": "4386185f618524f4326ed9f77377a75e",
"main.dart.js_203.part.js": "63575fe8acad49d0b604dcc62dc64e85",
"main.dart.js_29.part.js": "49fb66f3986f9759ac9db8c57c84e4a0",
"main.dart.js_254.part.js": "59dfea39a4d27707b675e22a9a6f4730",
"main.dart.js_321.part.js": "1881921053ea2f106ec3bf805a1bbadb",
"main.dart.js_73.part.js": "c557c47dc0f3ae70f9962a81813cd256",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_186.part.js": "6107bd0682c96d868c3be7972b112fff",
"main.dart.js_151.part.js": "37b4b2e88dd176ca075707d312580c35",
"main.dart.js_74.part.js": "c48110b8d69f96b6f219472b25551359",
"main.dart.js_165.part.js": "9949cef514b74f8158e57b1587be1300",
"main.dart.js_263.part.js": "0404afe4334840376fe3a67bbd8e1182",
"main.dart.js_100.part.js": "6bbba2a01a2a9b2cbb262a22dc688a5c",
"main.dart.js_184.part.js": "e706543f15f3f5cb5e7d84f28d57f326",
"main.dart.js_101.part.js": "2f77acef2b10f59075533ecfe6183ead",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_185.part.js": "70d9654cddb52b33e4eeb261eda0622d",
"main.dart.js_196.part.js": "eed5f3c83d13a9bcf9051f7e5f2f12d1",
"main.dart.js_250.part.js": "297b73b098d260dd1c046a1c7957b21e",
"main.dart.js_83.part.js": "f2620bf4b3fcf976b4a5d581d69564e2",
"main.dart.js_102.part.js": "7b6356e91798daae2bb2bca2df4a87bf",
"main.dart.js_119.part.js": "5ffe36aa1aa05a23cbf0343c6401a45e",
"main.dart.js_225.part.js": "9163c168b945a98cec70811fe599630b",
"main.dart.js_162.part.js": "7d5f5dc7be724b70f122ad7df9ec24c4",
"main.dart.js_328.part.js": "93b15cc72032076dfc89c4414f371a59",
"main.dart.js_77.part.js": "72896b8a792e7fc0be5af1becb5c391c"};
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
