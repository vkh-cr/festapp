'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_290.part.js": "ca0c17da7af5e9d916070087cdbfd7ed",
"main.dart.js_81.part.js": "fffa91cc6dd5b434c45607c9348daf40",
"main.dart.js_177.part.js": "ae8d200d706f5dfefb7abdcb4304ead5",
"main.dart.js_190.part.js": "bd82c3007e4b544a65cc1533419e46bb",
"main.dart.js_247.part.js": "81a3331cf97f269769ed927745030d67",
"main.dart.js_154.part.js": "692b91ba6286bd63f31132ac16c30c5c",
"main.dart.js_135.part.js": "83601e5f32bfd93dacd86353e72c18c6",
"main.dart.js_87.part.js": "fb3d11523b974c006524f410322d32b2",
"main.dart.js_159.part.js": "da7e049c06a15e106e68b5186da1dd2e",
"main.dart.js_36.part.js": "acc75a35d33132648d7d91d2f8c93ec7",
"main.dart.js_194.part.js": "3a7f396de8d72fc3b9d73048be9443b2",
"main.dart.js_299.part.js": "e528c7e8d9297c36749ec4c3b5d0db30",
"main.dart.js_199.part.js": "01a8e42ecfd286b07f0f8010e67ee8e7",
"main.dart.js_138.part.js": "4e14e356a022de17b845bc3057fff20c",
"main.dart.js_122.part.js": "e72a645786df78d8ede24c14eb555831",
"main.dart.js_25.part.js": "3ba19d80de30911c696d0306a05525de",
"main.dart.js_251.part.js": "0b7b088b739280391e440dc46b799085",
"main.dart.js_206.part.js": "77a6c96b2ad77f01677ee4b9e0bd066c",
"main.dart.js_249.part.js": "4cc9ba38f8a1b02162ee5ec30dc4d341",
"main.dart.js_61.part.js": "971db3a232fe1289eb03908996ae5a28",
"main.dart.js_14.part.js": "ebf210170a1fefcd354e860bd3448b45",
"main.dart.js_64.part.js": "fe0f36b1235bc92e2850d2046b6200e9",
"main.dart.js_178.part.js": "d78b4dd35e28260406cdc29e2371458b",
"main.dart.js_246.part.js": "b522b1851c3bebbaaf3ca3497237530d",
"main.dart.js_167.part.js": "77aa55c8e780cd964b2196d16e880c10",
"main.dart.js_197.part.js": "bca13e4e1ad6c4ebb3142d19de3b71a4",
"main.dart.js_116.part.js": "4cc0f87b211c53c30c57a00e16d4d1f2",
"main.dart.js_274.part.js": "db08e051f31b8c09a35750f2f3e8794f",
"main.dart.js_72.part.js": "99e3a4e8cb89e32ff664c96a821b77c9",
"main.dart.js_219.part.js": "2e9f151bb30dd26ff362479227d881ac",
"main.dart.js_125.part.js": "aa12f7088400eb6226f4b42bf26c9e61",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_38.part.js": "07c84899cb806ec55cbd7a720ba245c1",
"main.dart.js_316.part.js": "13da1f98d0ce224d27c6a16d4047fad0",
"main.dart.js_205.part.js": "6a00c51df703ebad06286917daf35a25",
"main.dart.js_220.part.js": "375b1b42134ffe8cbd4663fc57c2a667",
"main.dart.js_6.part.js": "68e213e2a3ca6478dcb195d9ce61cd45",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"main.dart.js_169.part.js": "ee3fe6a2f3d081dd958ec2ce3fd63e78",
"main.dart.js_146.part.js": "a359de4d77612d41aa33d19c25a4bb44",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_57.part.js": "8e2af9ef450fb4f01111cef2ed8fa489",
"main.dart.js_264.part.js": "6e5af4bd7ccabb23d1315fd5cdb891ef",
"main.dart.js_285.part.js": "feb14f8e707cb34d4c8561113d97a993",
"main.dart.js_262.part.js": "da095fdcd13a26595bd1fe7790e4d6e0",
"main.dart.js_307.part.js": "f71633084157a374ca5c238356aa8d2c",
"main.dart.js_85.part.js": "06359c4f4852af71c49ca7f38582f50e",
"main.dart.js_1.part.js": "f96fc10a57349bdfe85e9b1ff4795c55",
"main.dart.js_243.part.js": "429933be43880af8bc6bdccf48dc705e",
"main.dart.js_191.part.js": "756ce1bcbf47dc5ab98e977fc85ffa1f",
"main.dart.js_39.part.js": "57aab0e69e2940e7cab36cc9bd335330",
"main.dart.js_8.part.js": "021e9925f78a797b2eb546839fb7c195",
"main.dart.js_139.part.js": "11d2375697891b81dbc1aaaef2ef7038",
"main.dart.js_140.part.js": "fb808f1e4a8f194c7d531aa843dfd4e2",
"main.dart.js_93.part.js": "9ffc9fa8ee815fc19a0bb50f7d83f6b2",
"main.dart.js_275.part.js": "5208d446dd7ead1aca4a3d65ead0da5a",
"main.dart.js_180.part.js": "28ce882818dca21b3f62e0ac6803a9f2",
"main.dart.js_179.part.js": "f5b5a174bb5b01ddba7242aa63de9745",
"main.dart.js_182.part.js": "e541617ae254c84539118651e559b934",
"main.dart.js_144.part.js": "3413de84ca9aeaa7fa94b3995bcaab1b",
"main.dart.js_13.part.js": "a8ad5545119e6999113d4829a4d75162",
"main.dart.js_48.part.js": "729109f97b8670b3700c36fb4d66eb6a",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_310.part.js": "4a7555d0c7eb05331dbb34a0eab20dee",
"main.dart.js_231.part.js": "a70cb23dbe66d7c52fcf2bbd87879473",
"main.dart.js_300.part.js": "79a6e5d163775924556a57e0c7dc9511",
"main.dart.js_68.part.js": "3fb5996be01f7d4a49628dff966d5025",
"main.dart.js_269.part.js": "f6668d7b07432dbcf0eb01e734e2f2fe",
"main.dart.js_298.part.js": "97fa9c8e9b8aed0c2ffbc46c2f8d4ef6",
"main.dart.js_43.part.js": "92fd9b96cb25c1506b687b8de643ac0a",
"main.dart.js_59.part.js": "cf88443bfddd31801f88470b4d29bc67",
"main.dart.js_28.part.js": "225b17ee6f32050047a6e2ef242e3882",
"main.dart.js_270.part.js": "dae48821d09f3eafcae83c0fdf491952",
"main.dart.js_286.part.js": "d040558edd956abe8793b023be4f728f",
"main.dart.js_312.part.js": "ff9b1a3c30d6a3f5919d843b590844b1",
"main.dart.js_166.part.js": "ce809d79568ca7643fc613dcb0bbb7d3",
"main.dart.js_35.part.js": "4d41ca848c4d6652ec3bc7e16f2dcf48",
"main.dart.js_75.part.js": "f242a8b57cd6e2b086730b95240fa545",
"main.dart.js_149.part.js": "038f0f1ba967aa326a00ac3d3257c22e",
"main.dart.js_11.part.js": "f5626183a145ef7cce774a758bd231ea",
"main.dart.js_37.part.js": "81968bded9c609609b6ccbe8107c097e",
"main.dart.js_235.part.js": "46fab803c471fe56d51b2e7f15b156fa",
"main.dart.js_240.part.js": "c9a1fd7a8fc2e07e514503bf37cdfff7",
"main.dart.js_168.part.js": "e05cad3944e1576e1ec718c62300becd",
"main.dart.js_112.part.js": "6bed2180d7b89975a19e3b50a803ea2d",
"main.dart.js_313.part.js": "95f1c87cb50ef19ed12d92b9f4fa1c3c",
"main.dart.js_26.part.js": "16d383b61ff525029ee3ee123e54a78b",
"main.dart.js_110.part.js": "7756709d24002920e125529705a43e59",
"main.dart.js_30.part.js": "78fa0e9dcb52e621f1b392ffaaed3cf7",
"main.dart.js_86.part.js": "9bcc8451b94589ce0c0ee07da4f910ce",
"main.dart.js_283.part.js": "2275e04eb2b8dbe07bab7fb18fe7d4ce",
"main.dart.js_293.part.js": "ed806dac4e22972c446ca92f72306485",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_164.part.js": "144365b680addb08b29624c9a7265b3d",
"main.dart.js_126.part.js": "fd89fd74d8b076afb611d05a6db89869",
"main.dart.js_3.part.js": "7b841850a771ee6f22a0749aad459279",
"main.dart.js_80.part.js": "268ab3fc6c60ce343fabe64021dd8c96",
"main.dart.js_113.part.js": "f218fb27037f8bb6df8e5540e105900f",
"main.dart.js_277.part.js": "f859ab26fd06e00f400e03b9a2b79bef",
"main.dart.js_103.part.js": "86a244be853a13fffd73506c5e7a95d5",
"main.dart.js_124.part.js": "8498595bdbf0881ce43d2af400c47fb2",
"main.dart.js_241.part.js": "3356fc348f50b5dc7f6156045471aa07",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_188.part.js": "45107250e83dabccd7d9de05d99e206d",
"main.dart.js_32.part.js": "1a16988c1f3bba103e9af64974026c39",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_4.part.js": "6c5a76c3f59b0b5b4816915cd1504b8f",
"main.dart.js_53.part.js": "a46d4f3506dbc413931f3fa38c3ad9bc",
"main.dart.js_78.part.js": "11b514acb84529cb2e97b0707d8728f4",
"main.dart.js_234.part.js": "49b4d10d19f0074bd6daa99e83b5b716",
"main.dart.js_223.part.js": "280c4452d9f8d2d3d0d5019530e75cbc",
"main.dart.js_213.part.js": "c7555184bac7fd1cce2809097f260d33",
"main.dart.js_15.part.js": "fa15f39d430633a73210e441fd87ecd5",
"main.dart.js_105.part.js": "1abcfdeebe08356d64b4dbf604d3590c",
"main.dart.js_311.part.js": "8666af7169e86ad51cef5467fa69274d",
"main.dart.js_217.part.js": "b76c7751e82c0663171595fbcfd97973",
"main.dart.js_107.part.js": "5483e38a6a2514f73f8f250c8d540172",
"main.dart.js_248.part.js": "e7843d6f70f135b5b4603eb12a1a3a35",
"main.dart.js_45.part.js": "d0d2288add76fe30f473b7365a20287c",
"main.dart.js_160.part.js": "67aea72c89996e005f82a1ad8b77bd0a",
"main.dart.js_289.part.js": "96789058bae9a41f99f5d2f1e31d1c1f",
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
"main.dart.js_175.part.js": "8dcdf9131ca4afce0ad215f324a58116",
"main.dart.js_145.part.js": "6d2af8fe01cbc055d99357f13ebff27e",
"main.dart.js_141.part.js": "d535534f2aeb380e386972c72d0337a7",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_172.part.js": "eda0f4ae6625b45cbba4995cc6054759",
"main.dart.js_84.part.js": "2ff62521fcc910064c0012f9750cfe4f",
"main.dart.js_82.part.js": "19df6ac900d7c51f9f147acec82702b8",
"main.dart.js_31.part.js": "f5529676c3968b507325886f6dd0fea9",
"main.dart.js_115.part.js": "782938763cf1b61698b1be5b75f4ef16",
"main.dart.js_189.part.js": "1ce68af5eaba94613c6d4fd0581b9c69",
"main.dart.js_204.part.js": "827cb0a83defeeed976f4ef8386a9c36",
"main.dart.js_268.part.js": "72e37bdc31b455e7f4abcee35e3a723b",
"main.dart.js_301.part.js": "881394ed46a21b843009b837988f4b34",
"main.dart.js_201.part.js": "fa5f8ce7dd0c6f9da66c402f7f23368f",
"main.dart.js_297.part.js": "52b479f47c9bd02c8937d46983f1dcba",
"main.dart.js_192.part.js": "b72eea20f10cea89c648cf302ae11fda",
"main.dart.js_198.part.js": "dcf535cf8d6634d86e7ed6219c26064c",
"main.dart.js_215.part.js": "5c5058e98086027411958e51077b871c",
"main.dart.js_193.part.js": "902a5968e9aee2bf5c9c686475c70c8e",
"main.dart.js_120.part.js": "275c9d4d3789749707eef47c5557c1e0",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_304.part.js": "bd31f61add31f13d6f25ad1585575efa",
"main.dart.js_208.part.js": "d8192845b4f616c12ec5869b9ce36324",
"main.dart.js_106.part.js": "bc51082a1d875d5a4b4459d6807310f0",
"main.dart.js_152.part.js": "19cda76c7ff634de5624ca4fda6779e4",
"main.dart.js_272.part.js": "fbc82e9d43be99f5c42b0c40eba30168",
"main.dart.js_302.part.js": "58a9e1b66bc3701f0462e2a208476e62",
"main.dart.js_51.part.js": "6df84c48decf7cb4d205c4c8b51f790b",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_237.part.js": "fa025f061871a5c3c365f42359922866",
"main.dart.js_173.part.js": "be66c7aed6d19a3a6d926042ce187c9e",
"main.dart.js_170.part.js": "da5ffabab56de32b29e4b2a0fcaa2514",
"main.dart.js_34.part.js": "1acf9e222215a81ff7eb4e87caa33ab9",
"main.dart.js_24.part.js": "cceb0a891793c9ad63c403fb7fca5614",
"main.dart.js_128.part.js": "6e4e0526b1d5346262fbcf667202be46",
"main.dart.js_18.part.js": "a544efc92835907a485245495b241869",
"main.dart.js_2.part.js": "e32df0f2dfde92cd88de5566eb4020eb",
"main.dart.js_69.part.js": "35cf1f980c1a13c686c6e8bff75d9887",
"main.dart.js_70.part.js": "d65c65da30aebf3b5ab11fb8a0f93df9",
"main.dart.js_88.part.js": "c7f6d2c891581d3aacaaccbb4d011e17",
"main.dart.js_27.part.js": "fde40983030b6bcf9c00e3280dc35809",
"main.dart.js_230.part.js": "c0eb510f5d0f71435ffa4700b52d1884",
"main.dart.js_238.part.js": "b14c2cbfdc9cc4f2ef57946f716ebd47",
"main.dart.js_158.part.js": "54a4081e8d8e7da6e78c58f4b50c579f",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "16a0f5ee6a56cd8ee77dbc09c2534760",
"main.dart.js_253.part.js": "55c8ee735c07b673aa014f4b64223fbe",
"main.dart.js_244.part.js": "6c9924abb6440c1315d360c37bf3d7b5",
"main.dart.js_137.part.js": "fd1efdef48ac0b755062fa3abf624d22",
"main.dart.js_99.part.js": "095376b36094b99daf1bf479342bd6a1",
"main.dart.js_44.part.js": "455bcbbe3dba33451a24f401b48d8d04",
"main.dart.js_114.part.js": "503cba8fb508b8949128c5f884c1b3d5",
"main.dart.js_10.part.js": "1218a81d8c2c0c15b97cc4ca0ff1fffa",
"main.dart.js_267.part.js": "17d408a18234b37b37f8ce71aff7a74d",
"main.dart.js_56.part.js": "f999283bed5ddb8faa2fa4f489c60ccc",
"main.dart.js_129.part.js": "dc7010b74e82e372f34f7c0e2885bde3",
"main.dart.js_5.part.js": "cbc463efe06b6c71d08bbfd1bd95f0dd",
"main.dart.js_76.part.js": "6c018dec21e99d5add2955d6cef00de4",
"main.dart.js_265.part.js": "83418f49d64aae5d14be60b156529e75",
"main.dart.js_7.part.js": "b7ca9ae60ae92d6f28a2ba3a247e51a6",
"main.dart.js_16.part.js": "128ce628b15bac90c431e7dc4ea13008",
"main.dart.js_294.part.js": "768dccfe8e57e8eef36952ad8cf6bdee",
"main.dart.js_236.part.js": "8e7ec70b17c0aa74203a6dc87ed5680b",
"main.dart.js_133.part.js": "c94e5b341b8bc994d4c3e0ecddbd2f27",
"main.dart.js_259.part.js": "4904edb856bee5f89a5a0703cfbda2e2",
"main.dart.js_90.part.js": "35547e851c13fd967a81c6312c33fbb3",
"main.dart.js_260.part.js": "b6610eacbec6207e4ebcd76348230e96",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_317.part.js": "dde6ceaf894a62ea048e4f63a375a65f",
"version.json": "ddc038368ea25f064bd5b18afc065808",
"main.dart.js_153.part.js": "cfb2127bed851c5975573ff2d989a6bf",
"flutter_bootstrap.js": "c6ea8b41bd4a9348edf2f8dcc2dd9eb6",
"main.dart.js_176.part.js": "672e8e6121d69f284a021b60db035739",
"main.dart.js_245.part.js": "a4424cf6f815ca5bcb2063bf75281bd3",
"main.dart.js_306.part.js": "c1996c7a540755ff54871c5d27b68d30",
"main.dart.js_209.part.js": "58adb38db36c44d2ea95f3bc95454c00",
"main.dart.js_224.part.js": "e21d31ec77feb17e96bb243efd4dd3a3",
"main.dart.js_150.part.js": "8bd81a6c70fefcd894402793e0a4d631",
"main.dart.js_33.part.js": "680c7279ba2370c15044231e34e8611d",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_315.part.js": "370d7f3a05c45887c48e090529feaedc",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_9.part.js": "f89a8343f7504cec209d88095970635a",
"main.dart.js_309.part.js": "c40ebb072a3097b24fc8503aa8a4f79a",
"main.dart.js_284.part.js": "9b899e28255923f70dccc431d610d820",
"main.dart.js_214.part.js": "8ef1522bf4bc43ff7f167ee646adb2df",
"main.dart.js_42.part.js": "ef0aa0b626c58aea2ba4bd0bbb958f5a",
"main.dart.js_111.part.js": "60f498906e3431aace28038431a3d48b",
"main.dart.js_218.part.js": "308ba9e82b917dc1458c391e4ba8b6e9",
"main.dart.js_291.part.js": "3b17a77b53fd9274c81c36ca5d8d9003",
"main.dart.js_98.part.js": "d3037edeb650429456ac9d96ec9ca571",
"main.dart.js_258.part.js": "1808461d13c22598658c890bb02701c2",
"main.dart.js_287.part.js": "f454e825b14121d00436a5554056f68c",
"main.dart.js_161.part.js": "71f014aa1cb7ed8fc06f5a3b1bbbeae6",
"main.dart.js_49.part.js": "048a426371d52571899d376d333a920a",
"main.dart.js_22.part.js": "165d9f85c8bb534fb88690c0d233a122",
"main.dart.js_308.part.js": "10d8cb135260e669d1a602fc813274de",
"main.dart.js_136.part.js": "9c9e60a8980a904f63d00baf698dc917",
"main.dart.js_279.part.js": "568fcd5b3fd887ec0c708b9c8a51c5c5",
"main.dart.js_12.part.js": "1f1889321678de4b8b05228815bd57cf",
"main.dart.js_187.part.js": "08d881fee5531e20850e9e779994cf8f",
"main.dart.js_62.part.js": "3ba9f02889da368028dac34ef6953ba8",
"main.dart.js_91.part.js": "5d2a80efce63a674db20c3b1d7e3023c",
"main.dart.js_232.part.js": "0f4bc35c50bb77b34af5d5cc40762a19",
"main.dart.js_273.part.js": "f908cf3e22b5d736c65ebb6f58918c39",
"main.dart.js_104.part.js": "272fa053bb8003196065d81a8620ebae",
"main.dart.js_71.part.js": "7441541bc33375a99c5d9a6e4f22e649",
"main.dart.js_296.part.js": "8d683bebe4acbb2dbfdb194e303efcac",
"main.dart.js_50.part.js": "b8bc6afe784ca58fcec41cff4997d46d",
"main.dart.js_97.part.js": "461f1ddc17b0ac111813a4b5075aff0a",
"main.dart.js_278.part.js": "fd18d23e8689421fc0e13092d20e6ee8",
"main.dart.js_222.part.js": "e38a0240310fa554bffd98eeaafa7402",
"main.dart.js_305.part.js": "ced3239ef34ae040a1c0f93b12ddae45",
"main.dart.js_89.part.js": "9a88f469268614dcf627b92ca48568f2",
"main.dart.js_117.part.js": "0dcc28c63a6d5338f35c2dab19e8327b",
"main.dart.js_292.part.js": "60f7cef97d4d6b7697b7dbb47344c114",
"main.dart.js_295.part.js": "7199dbd6993d494b4595080506a306ae",
"main.dart.js_47.part.js": "acf3ca76a481519f474daa4e0b6e7d23",
"main.dart.js_257.part.js": "a0d795b163d2fb0cfffd0c0b030d9544",
"main.dart.js_55.part.js": "f11b93558e9ca2ea367b7e9ba28e9c18",
"main.dart.js": "4b911dfb8cf68c554f4f7d27a79be6e2",
"main.dart.js_280.part.js": "8cf4e7659c53c2987795d5704a443cb9",
"main.dart.js_130.part.js": "1c15e70e9b2fdf0cec34fb82bca98cfc",
"main.dart.js_41.part.js": "2ebc81255109222f1e60451144d77a05",
"main.dart.js_29.part.js": "5ceeeb8aa48b9cdaf3332bf620c1f012",
"main.dart.js_254.part.js": "eee24f0d32d1143ffb191afca94f7bff",
"main.dart.js_58.part.js": "212485d502172631b3937dda8f6f361b",
"main.dart.js_73.part.js": "fa224550dc4458a28c418afac1d0f998",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_151.part.js": "b6e00f5e1fe752b11bec7e2066f388ee",
"main.dart.js_74.part.js": "f8ac3374dd00916a4f618b5232240c06",
"main.dart.js_263.part.js": "c32ee2ae2f81a6a59ed7c394d54a9c63",
"main.dart.js_100.part.js": "8a9308955532bed0dda709a429eeaf57",
"main.dart.js_184.part.js": "947a3f4ff46add127c8b0262e9feb030",
"main.dart.js_101.part.js": "95ace1b17756d32c31011982e2304c36",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_281.part.js": "88989dea339a6235c51df39af4e22eb9",
"main.dart.js_185.part.js": "012905ee66b17b2b87a0e32daf24c369",
"main.dart.js_250.part.js": "1c556c7d0dd7c7e0aa717fcc351d6a45",
"main.dart.js_216.part.js": "e167a244b3132477ff7c0458aae6e233",
"main.dart.js_119.part.js": "670e3e1c761fa896136389a56a59a856",
"main.dart.js_211.part.js": "033bbe9d76ba5d0b1e4ec0c74f9e7887",
"main.dart.js_171.part.js": "a051d1a17ee0da02de4fef1e548a2161",
"main.dart.js_162.part.js": "40cec7a6610989cb6e948e8c66379413",
"main.dart.js_77.part.js": "1107f9ede01e4add13159d7be66e1137"};
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
