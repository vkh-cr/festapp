'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_290.part.js": "ca0c17da7af5e9d916070087cdbfd7ed",
"main.dart.js_81.part.js": "544f9988599ef994cde4bee2668cb53c",
"main.dart.js_177.part.js": "ae8d200d706f5dfefb7abdcb4304ead5",
"main.dart.js_190.part.js": "2850a643953dd94b9cb51a495e172d98",
"main.dart.js_247.part.js": "6b7b98b64625985dfb45bb8a94837824",
"main.dart.js_154.part.js": "53bfb6cb13294f754df1bd362fb28c81",
"main.dart.js_135.part.js": "d49f3e4885a7f5bef7dfb122b3b3a2dd",
"main.dart.js_87.part.js": "fb3d11523b974c006524f410322d32b2",
"main.dart.js_159.part.js": "fae07fd01c644b683d2e47a8641fe0a8",
"main.dart.js_36.part.js": "acc75a35d33132648d7d91d2f8c93ec7",
"main.dart.js_194.part.js": "0ae6fc4e62cbd8009c98acfade7534f8",
"main.dart.js_299.part.js": "b22ee7ffefa10656ae6707b58aa1cb58",
"main.dart.js_199.part.js": "9324cbf0f4e1c353e91cb3e2a1b6bd8d",
"main.dart.js_138.part.js": "4e14e356a022de17b845bc3057fff20c",
"main.dart.js_122.part.js": "554ad49926d6d3aefad2eb7932e38d43",
"main.dart.js_25.part.js": "9493228ebb951b5d9a533fa75eb7a57f",
"main.dart.js_251.part.js": "0b7b088b739280391e440dc46b799085",
"main.dart.js_206.part.js": "ff9ab8d1da8d4d7ee233dd297c044c6b",
"main.dart.js_249.part.js": "4cc9ba38f8a1b02162ee5ec30dc4d341",
"main.dart.js_61.part.js": "2eaf6c1019eff4c0319737c865747434",
"main.dart.js_14.part.js": "549d5189cf7d6a71b6d13503a437f2f7",
"main.dart.js_64.part.js": "fe0f36b1235bc92e2850d2046b6200e9",
"main.dart.js_178.part.js": "d78b4dd35e28260406cdc29e2371458b",
"main.dart.js_246.part.js": "c57662efa7f4c5703c233ec89ddff393",
"main.dart.js_167.part.js": "77aa55c8e780cd964b2196d16e880c10",
"main.dart.js_197.part.js": "f7bd85f5059211d4ac32e06629c166bf",
"main.dart.js_116.part.js": "4cc0f87b211c53c30c57a00e16d4d1f2",
"main.dart.js_274.part.js": "7988eca789a31d22764489a735f9a477",
"main.dart.js_72.part.js": "1053375911300251b5ade3a40ede545e",
"main.dart.js_219.part.js": "2314edb28d9104a25373343fd8a00218",
"main.dart.js_125.part.js": "2c7de996d18b56b174a4681f8a4e6c17",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_38.part.js": "07c84899cb806ec55cbd7a720ba245c1",
"main.dart.js_316.part.js": "99191bbc7990c67dfb8ac27b1e373f12",
"main.dart.js_205.part.js": "0cc8e89b16c03b8427d9faadf95664b4",
"main.dart.js_220.part.js": "7e72c02fb7fa1c8aeed32e4166144255",
"main.dart.js_6.part.js": "dd97da7711c885baaffb839d36f94f4e",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"main.dart.js_169.part.js": "8a9f27b22b25ecf1038427e0129b993f",
"main.dart.js_146.part.js": "62638696fe8f989813cdf09792fe2a46",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_57.part.js": "4b7b89be8ab576d9fb6ba891c9a8f4e7",
"main.dart.js_264.part.js": "52f35b49e174210b48c401722202cb9a",
"main.dart.js_285.part.js": "f09c8551587c2c424074e705ed364588",
"main.dart.js_262.part.js": "b3270b06b4b481a01203bfda0957a3cb",
"main.dart.js_307.part.js": "f5e9bd0107631bf7047cdeba9945d739",
"main.dart.js_85.part.js": "06359c4f4852af71c49ca7f38582f50e",
"main.dart.js_1.part.js": "a2fc3f315dc31327eb01e40e3b9e640d",
"main.dart.js_243.part.js": "daf6f55a42a05fd873269a12268c250d",
"main.dart.js_191.part.js": "756ce1bcbf47dc5ab98e977fc85ffa1f",
"main.dart.js_39.part.js": "8cccf84fdbc63fb9801fb214af84ee50",
"main.dart.js_8.part.js": "31dd2f4b95a99f5625279d8bba36c5f8",
"main.dart.js_139.part.js": "1e1705767a0a31846e8aec92cfde304c",
"main.dart.js_140.part.js": "0f35fd1783c6e0a5a89b3651f57555ec",
"main.dart.js_93.part.js": "192102fb2e91b05cf6ee51597395d3ee",
"main.dart.js_275.part.js": "fd183f13da5517c80af5fc527a2a4010",
"main.dart.js_180.part.js": "28ce882818dca21b3f62e0ac6803a9f2",
"main.dart.js_179.part.js": "f5b5a174bb5b01ddba7242aa63de9745",
"main.dart.js_182.part.js": "e541617ae254c84539118651e559b934",
"main.dart.js_144.part.js": "910150dfffd7a31503864663c3ed76dd",
"main.dart.js_13.part.js": "bb94db47db4cd943e3f0117fd00e9e72",
"main.dart.js_48.part.js": "a4b2647eaad4ae1380b8e35fe1ec7014",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_310.part.js": "26e8643af3d5e73566ed3122c4b31eac",
"main.dart.js_231.part.js": "a70cb23dbe66d7c52fcf2bbd87879473",
"main.dart.js_300.part.js": "41737e522e945917c4dfabc9020f4655",
"main.dart.js_68.part.js": "3fb5996be01f7d4a49628dff966d5025",
"main.dart.js_269.part.js": "7f3986ef062b906a958e77543098fd08",
"main.dart.js_298.part.js": "cfe8a4a9b1af7af19e50579030c0ab1a",
"main.dart.js_43.part.js": "dad633f1c6d5f22d882c25c107d996ae",
"main.dart.js_59.part.js": "ea6d0e2fad7a5b205958dd044a2c5d56",
"main.dart.js_28.part.js": "225b17ee6f32050047a6e2ef242e3882",
"main.dart.js_270.part.js": "dae48821d09f3eafcae83c0fdf491952",
"main.dart.js_286.part.js": "4de1fc18353f897fbfa14476f32291df",
"main.dart.js_312.part.js": "ff9b1a3c30d6a3f5919d843b590844b1",
"main.dart.js_166.part.js": "20de67a041846841b3d6640f0abddc23",
"main.dart.js_35.part.js": "fd8eb7e77e90e065ea32a27cd9ad7010",
"main.dart.js_75.part.js": "f242a8b57cd6e2b086730b95240fa545",
"main.dart.js_149.part.js": "394ad64fce46d980077c82c75443d470",
"main.dart.js_11.part.js": "f5626183a145ef7cce774a758bd231ea",
"main.dart.js_37.part.js": "de61786fdd00d010ef09946e262cc167",
"main.dart.js_235.part.js": "1a35e96de11a3175f0a6d0059eeb45c4",
"main.dart.js_240.part.js": "38cb4f158c3fd1e1cc0b7309e4a50f23",
"main.dart.js_168.part.js": "31d79d627ceeb8a5ab90232c9dba943a",
"main.dart.js_112.part.js": "6bed2180d7b89975a19e3b50a803ea2d",
"main.dart.js_313.part.js": "6c0cf651197d4337a7db3e5ab78b4b50",
"main.dart.js_26.part.js": "0ea2050fc7ea71bd091498773d00a060",
"main.dart.js_110.part.js": "2d534d6f26181efd518e6aaf2f96fd05",
"main.dart.js_30.part.js": "78fa0e9dcb52e621f1b392ffaaed3cf7",
"main.dart.js_86.part.js": "d8f46e8872a9a4003a003b6a359244c7",
"main.dart.js_283.part.js": "2207d7a968a2b80e3b7ffb8c0458246c",
"main.dart.js_293.part.js": "1e7fe5428e1135a8f9089d3bab59ce4d",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_164.part.js": "144365b680addb08b29624c9a7265b3d",
"main.dart.js_126.part.js": "586bf14fc8778efcf1036c4709f8817e",
"main.dart.js_3.part.js": "cf7713e7b1ab46522ef27b033056fd9c",
"main.dart.js_80.part.js": "144e0e0ea9303888d1db3cad2ce45aa0",
"main.dart.js_113.part.js": "f218fb27037f8bb6df8e5540e105900f",
"main.dart.js_277.part.js": "5b6edf83f4963b115a799b7d519295ad",
"main.dart.js_103.part.js": "53a169a6b0410c81bd2396db7cd4ec20",
"main.dart.js_124.part.js": "8af2471c597ecfabdd5588d38e4de780",
"main.dart.js_241.part.js": "3356fc348f50b5dc7f6156045471aa07",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_188.part.js": "45107250e83dabccd7d9de05d99e206d",
"main.dart.js_32.part.js": "1a16988c1f3bba103e9af64974026c39",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_4.part.js": "6416dd51de9e00086da2faa6899bcf76",
"main.dart.js_53.part.js": "a3a1632b3c708dea84b5fa254c8cb492",
"main.dart.js_78.part.js": "4a067bceda3a7df78990f7e78c3de22d",
"main.dart.js_234.part.js": "bfb424124bf880bd30a2b20d4628505e",
"main.dart.js_223.part.js": "d5651288005c9bea37c6cba753077abf",
"main.dart.js_213.part.js": "f7b28d2cd76b79a4f42462d852d69d5c",
"main.dart.js_15.part.js": "6805aa50833d710027feafc79e9119bb",
"main.dart.js_105.part.js": "1abcfdeebe08356d64b4dbf604d3590c",
"main.dart.js_311.part.js": "2e1b65728ec3ed5b3b0d7967985e606b",
"main.dart.js_217.part.js": "fc6f5f15d97b80ddb80dfdb2a400a280",
"main.dart.js_107.part.js": "194c634532ac480635183000f3e5035d",
"main.dart.js_248.part.js": "e7843d6f70f135b5b4603eb12a1a3a35",
"main.dart.js_45.part.js": "d0d2288add76fe30f473b7365a20287c",
"main.dart.js_160.part.js": "d01b901c96287e1baa64245930348061",
"main.dart.js_289.part.js": "dab89d55d083ed5667d4bc2c8b95f9ce",
"main.dart.js_96.part.js": "05d061fc0ea79b23613a80afc5c0a730",
"main.dart.js_147.part.js": "83dfb0a537bd5fcaac21c104313ea8d7",
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
"assets/NOTICES": "4bd2930db146c4653bc584bd9d65b728",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js_175.part.js": "59030435b23fe4ec5d0c3571031ad06e",
"main.dart.js_145.part.js": "276f2c33830b63cf01538c0fdb6ba95f",
"main.dart.js_141.part.js": "5070fcbeb6b370b1b1ca311c3a91682a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_172.part.js": "eda0f4ae6625b45cbba4995cc6054759",
"main.dart.js_84.part.js": "2ff62521fcc910064c0012f9750cfe4f",
"main.dart.js_82.part.js": "29dab15dbbc58a08326f57b38d1b483e",
"main.dart.js_31.part.js": "f5529676c3968b507325886f6dd0fea9",
"main.dart.js_115.part.js": "782938763cf1b61698b1be5b75f4ef16",
"main.dart.js_189.part.js": "8109f9a75b46dc3e94a533ab26ebf69d",
"main.dart.js_204.part.js": "9898f7c66393808e17bccbea872e8c9e",
"main.dart.js_268.part.js": "f0a2ccf99b59c3d97834e6e4fbecbf59",
"main.dart.js_301.part.js": "886956c4289028ff5534b33f83a26f30",
"main.dart.js_201.part.js": "d5718a8018cbee78262e09b44ef2a3e3",
"main.dart.js_297.part.js": "263a2f08f27436867c8193a2ce957d5c",
"main.dart.js_192.part.js": "b72eea20f10cea89c648cf302ae11fda",
"main.dart.js_198.part.js": "87b15fc15a4f3a0f22ff817c409cee0e",
"main.dart.js_215.part.js": "aff14504fcbba9fc110830a47b9751db",
"main.dart.js_193.part.js": "4f71dc3cdc6c866ff6fe3448c8afcca8",
"main.dart.js_120.part.js": "67e0e0d4dbd49a1bfa3b800539dead43",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_304.part.js": "fe0420595084acead87c169ac5887130",
"main.dart.js_208.part.js": "43d1613ba094b7847f2f5490136570e8",
"main.dart.js_106.part.js": "ef469c07c78a4ccf15ee28b787b6cf07",
"main.dart.js_152.part.js": "5aff4fccf6ecf5bad0b337ab1b970bfa",
"main.dart.js_272.part.js": "b00cf30f9d9869d3cd171d040af1f0c3",
"main.dart.js_302.part.js": "58a9e1b66bc3701f0462e2a208476e62",
"main.dart.js_51.part.js": "8b076c3a849c3ed5f43a1279c987cf0e",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_237.part.js": "c1d6ffb929b919a7366ea89026256bd3",
"main.dart.js_173.part.js": "be66c7aed6d19a3a6d926042ce187c9e",
"main.dart.js_170.part.js": "0860bd9e0e861650f8e7c659f7407277",
"main.dart.js_34.part.js": "1acf9e222215a81ff7eb4e87caa33ab9",
"main.dart.js_24.part.js": "257d93cf77f0e926da5a93efde44ec3a",
"main.dart.js_128.part.js": "6d657d292942d9133306727c7c95cb06",
"main.dart.js_18.part.js": "e31c9b156c3375911edcdb28c7ed18fe",
"main.dart.js_2.part.js": "e4827768ac142106ee09dbe16b80fd01",
"main.dart.js_69.part.js": "2dde4acff72cd81becd8c44d39b7a906",
"main.dart.js_70.part.js": "a41932e909f18a394eb5888eaf5fae7d",
"main.dart.js_88.part.js": "c7f6d2c891581d3aacaaccbb4d011e17",
"main.dart.js_27.part.js": "066f55de292ea9da6f81d07a52751197",
"main.dart.js_230.part.js": "c0eb510f5d0f71435ffa4700b52d1884",
"main.dart.js_238.part.js": "b14c2cbfdc9cc4f2ef57946f716ebd47",
"main.dart.js_158.part.js": "ec5d0fa3613ab2170722238c38cbeb04",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "689760f9e344565a78fcfd0695f89874",
"main.dart.js_253.part.js": "25ac7ec87db8d5214421dc7da3c125eb",
"main.dart.js_244.part.js": "c4d425986a0c75c6a2e766fa4d000207",
"main.dart.js_137.part.js": "fd1efdef48ac0b755062fa3abf624d22",
"main.dart.js_99.part.js": "c71f8d0e6aa10bf20438bc8b396d28b6",
"main.dart.js_44.part.js": "0904e234fa0f78bdad05fc1a76118978",
"main.dart.js_114.part.js": "1be69258440f8fa8249d38543cdd9008",
"main.dart.js_10.part.js": "0d0198739ff0f7366803798b2fab8862",
"main.dart.js_267.part.js": "17d408a18234b37b37f8ce71aff7a74d",
"main.dart.js_56.part.js": "88964a0e391ae0442568b8bb0bdbd5dd",
"main.dart.js_129.part.js": "0c36f75f0296a974e82fe18c02c2c845",
"main.dart.js_5.part.js": "f8ca3381c5365edfd009ff3194dca279",
"main.dart.js_76.part.js": "cc59ad4cd26fe3c349aba3f1c5d48a85",
"main.dart.js_265.part.js": "2396125cfd06ac3d845b1e7aa4a7d2d5",
"main.dart.js_7.part.js": "77fdf4d0cbf74f0f8b82b413e2668305",
"main.dart.js_16.part.js": "054cb50069dd9f6c7928c7f2e1c11209",
"main.dart.js_294.part.js": "e970c1d3b8efa0e53b6dd4c408c3b1ff",
"main.dart.js_236.part.js": "6bf0a3d82b6d62bb5c2bbdb885dda59b",
"main.dart.js_133.part.js": "947a2e26311c2a0605dde61fcd0c9912",
"main.dart.js_259.part.js": "65d4adbdac7af30d575917ad1a786ff2",
"main.dart.js_90.part.js": "4fd1e8fdf21f6c91a0f9ee8035741106",
"main.dart.js_260.part.js": "4ad067d4ff69d9a9ff6d1b0d620c5841",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_317.part.js": "e533c421562a7068221d9ee398839ba6",
"version.json": "ddc038368ea25f064bd5b18afc065808",
"main.dart.js_153.part.js": "13ece10830135eb488ed147af1ea1d01",
"flutter_bootstrap.js": "0db9429d4d8603a6406d33ba6bbb6087",
"main.dart.js_176.part.js": "ed676a630f299e3c4e85374ada2432ed",
"main.dart.js_245.part.js": "39fd9eef2c50c2ab1a0c9f6be04a6c5c",
"main.dart.js_306.part.js": "e502178af903a4b9b3d68619fcdd0fb1",
"main.dart.js_209.part.js": "58adb38db36c44d2ea95f3bc95454c00",
"main.dart.js_224.part.js": "2415ac936ac3f807c47f9c86b80e1762",
"main.dart.js_150.part.js": "9423d49fe3f6ff57b217d342d099ee01",
"main.dart.js_33.part.js": "680c7279ba2370c15044231e34e8611d",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_315.part.js": "ea6843b169e6804e5d657db5540b9e2c",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_9.part.js": "78dd40c62500ebc86b28354f619a909e",
"main.dart.js_309.part.js": "25bdc6385621c4b78fe2ad8bdfca2f47",
"main.dart.js_284.part.js": "8f81409e471f685f3da40881bf91a5dc",
"main.dart.js_214.part.js": "8a509159f7fc7979e96c4b5f6f866386",
"main.dart.js_42.part.js": "eac311e952161dbf8879c80fb0fb2419",
"main.dart.js_111.part.js": "60f498906e3431aace28038431a3d48b",
"main.dart.js_218.part.js": "308ba9e82b917dc1458c391e4ba8b6e9",
"main.dart.js_291.part.js": "2765e55b180ee47b105b90bd94dd7a18",
"main.dart.js_98.part.js": "aec2316bff48e47a4b005177498d2a81",
"main.dart.js_258.part.js": "9d395603d0d61475f79263061043ed98",
"main.dart.js_287.part.js": "e8295c1ae64f4f1cbf2ca4eef49940c1",
"main.dart.js_161.part.js": "3bfd64dfae6e922fdf7b3c9cd976aea3",
"main.dart.js_49.part.js": "936fead7bc8558368565eb60eac70acb",
"main.dart.js_22.part.js": "165d9f85c8bb534fb88690c0d233a122",
"main.dart.js_308.part.js": "10d8cb135260e669d1a602fc813274de",
"main.dart.js_136.part.js": "03a480e3ce24b3e0f8428bdb28e02f26",
"main.dart.js_279.part.js": "3eeb0f6e4c92c260bc54375f5a95190a",
"main.dart.js_12.part.js": "632c0deba82feb8280ded569ec3bc83c",
"main.dart.js_187.part.js": "08d881fee5531e20850e9e779994cf8f",
"main.dart.js_62.part.js": "945f8c94cd9b554e54cb2de2a719eb94",
"main.dart.js_91.part.js": "5d2a80efce63a674db20c3b1d7e3023c",
"main.dart.js_232.part.js": "90add6f4f80fda74d473d62ac94a0eec",
"main.dart.js_273.part.js": "f908cf3e22b5d736c65ebb6f58918c39",
"main.dart.js_104.part.js": "1b2ce533a5380bc83b3281f349415c12",
"main.dart.js_71.part.js": "f64fb8d52dcfdb72489a17e670a46641",
"main.dart.js_296.part.js": "0074675131fd26c984f61d2d10c4138d",
"main.dart.js_50.part.js": "b8bc6afe784ca58fcec41cff4997d46d",
"main.dart.js_97.part.js": "04419592b94eefd909f3e194f3058a68",
"main.dart.js_278.part.js": "cb6c7c162a095e9d11d6640e527e7a96",
"main.dart.js_222.part.js": "7baa5dc83f08daf58fc29301cf1c89e3",
"main.dart.js_305.part.js": "5f643386c785d3cd3c338adbb893d572",
"main.dart.js_89.part.js": "9a88f469268614dcf627b92ca48568f2",
"main.dart.js_117.part.js": "0dcc28c63a6d5338f35c2dab19e8327b",
"main.dart.js_292.part.js": "ef9b4aa7e0f81873e32b57ad5a43c319",
"main.dart.js_295.part.js": "0294bd0f8dd1202c783b5a96ee7badd0",
"main.dart.js_47.part.js": "a4635423b86453c0623b91dfedd2a317",
"main.dart.js_257.part.js": "c3e440420c8a85005dd6bb2360501744",
"main.dart.js_55.part.js": "708077e7f08947cd382e43451287265c",
"main.dart.js": "a10f2fff4532fbf41823e34255e6b0bd",
"main.dart.js_280.part.js": "8cf4e7659c53c2987795d5704a443cb9",
"main.dart.js_130.part.js": "d035b26ad652e7557146d6544c176fb3",
"main.dart.js_41.part.js": "71c929a6097f7f508adccd7236f818d6",
"main.dart.js_29.part.js": "5ceeeb8aa48b9cdaf3332bf620c1f012",
"main.dart.js_254.part.js": "b99223c42ad7a26326413605064142c6",
"main.dart.js_58.part.js": "0bb5b98048fef5f697569228f7324894",
"main.dart.js_73.part.js": "a9578d4208bf069cc80c171912d3d861",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_151.part.js": "1ee53e7221785c7f5795e466f8d20f30",
"main.dart.js_74.part.js": "f8ac3374dd00916a4f618b5232240c06",
"main.dart.js_263.part.js": "ef18ce7ada5074f28452df592be3cf71",
"main.dart.js_100.part.js": "da9563f7e96d68e65c9bc2b08ec3be55",
"main.dart.js_184.part.js": "72994df1efc2458315fafb4703312c03",
"main.dart.js_101.part.js": "95ace1b17756d32c31011982e2304c36",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_281.part.js": "653348de48ee86838a462c6504a67f35",
"main.dart.js_185.part.js": "06dbdaac486d509a2ce863f9e1925a11",
"main.dart.js_250.part.js": "1c556c7d0dd7c7e0aa717fcc351d6a45",
"main.dart.js_216.part.js": "7b9139f6028306710811db9027cc67c3",
"main.dart.js_119.part.js": "3fdd3380c614e0f37e4c8c08eff2fb54",
"main.dart.js_211.part.js": "83097b505c51a93f478d225783344a6b",
"main.dart.js_171.part.js": "7aedabbfbcdca54e2bfcefe61bd03091",
"main.dart.js_162.part.js": "481a4828d7de25fc36ee522113590b94",
"main.dart.js_77.part.js": "7a164e01050e9560d94103b52b8daa19"};
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
