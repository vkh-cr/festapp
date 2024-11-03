'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "9788d3c479648e19c52ca50c297debdf",
"main.dart.js_162.part.js": "5bd251a5d6a1ef0fa796f7d4f2eb988a",
"main.dart.js_117.part.js": "c13803904fb06a4ae23a552ff7562d79",
"main.dart.js_182.part.js": "9f3ba521458a9b4ae1dbedb9d9c69420",
"main.dart.js_75.part.js": "71d6045a32aaa04bf6ab9fb593f93cbd",
"main.dart.js_244.part.js": "b926aaad375a042a4794bb26d13c909a",
"main.dart.js_83.part.js": "86e52d2b5ef828118e75ca7f162509a7",
"main.dart.js_254.part.js": "21f0ff192bbac1bf1189009a6ec3a925",
"main.dart.js_176.part.js": "669dd8c79dd1b7052805b83e5a099ad4",
"main.dart.js_96.part.js": "99215068ed8961220bd2d9f295616d8a",
"main.dart.js_245.part.js": "0236838b528bcfc447ddde4b7c4de6f0",
"main.dart.js_87.part.js": "1c4fbf17e9e1f50a803b022a26c53466",
"main.dart.js_126.part.js": "435bbb918afd72db928f1fc64cc29c46",
"main.dart.js_129.part.js": "caac869ec4ef1acc3c611fea2d72b478",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "de3068a5ad1c8d4faca324ba25ce3892",
"main.dart.js_218.part.js": "8597779b429fb86358a10bc698f468e1",
"main.dart.js_172.part.js": "bbc47baffebf42788eb9ce3e09c85067",
"main.dart.js_40.part.js": "cd94c61fce71b850b2158349be002ba3",
"main.dart.js_209.part.js": "4fe7cf177c0444603dd1c37f6c3390b7",
"main.dart.js_115.part.js": "d7205003a94150ed06349cd2a3ad6e1f",
"main.dart.js_10.part.js": "dee0defbe36ee3f630c4dd74193174d1",
"main.dart.js_84.part.js": "17265d4221021f53be213deed860bb65",
"main.dart.js_122.part.js": "b14f7643e0f9704104ec6abf02bca898",
"main.dart.js_230.part.js": "206cff5cf4b2d22c9ef52ee801919505",
"main.dart.js_213.part.js": "ed496401a4935588d1d59bee52cb7e42",
"main.dart.js_41.part.js": "29e0c8a628c95ff301e1b6b7a0ed7a0c",
"main.dart.js_89.part.js": "5daeccba96d781d1c2a86c3a654e5880",
"main.dart.js_71.part.js": "4e3244a1c25be8d2aea51b954211c4dc",
"main.dart.js_146.part.js": "a91a5e83f9288a8d96803e0441a31908",
"main.dart.js_37.part.js": "f308f40422ab34e85965b8257c9fd541",
"main.dart.js_132.part.js": "0fa75d1dd83eaf5c82378171ed9696f1",
"main.dart.js_165.part.js": "c3034c885dca88751f33051dfc634937",
"main.dart.js_127.part.js": "e5f9b610623e1eb6ff629c28bf8c382d",
"main.dart.js_161.part.js": "be86c5972e62890e4e3de2efb71e6de2",
"main.dart.js_175.part.js": "2313aa8e12393c9597253700f1eb47d8",
"main.dart.js_239.part.js": "aef262f6e8f004f0a3abb6451352f618",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "19244fe3df1f645a300cae8bde65e321",
"main.dart.js_64.part.js": "c4cc3e2537b0930b9611ef4ffef18b2e",
"main.dart.js_169.part.js": "20464db9a019d4122e050429767e9bb0",
"main.dart.js_13.part.js": "e73f61fa3125e2de2e3c7602d83313d5",
"main.dart.js_246.part.js": "bbed0172bbabd426fb8e6f3f7fb5b0f5",
"main.dart.js_174.part.js": "b04ede2468e694cf08e429df8d689b71",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "1899bd965e4b567cf2a2fb068446c369",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "1cb37cc0720e2403e73322c1f49da7b2",
"main.dart.js_119.part.js": "9bdbcc58d2d310600d0a162f8e4c6f6b",
"main.dart.js_18.part.js": "ade2f7e02e0a6db5afa20b582b24861b",
"main.dart.js_35.part.js": "35288f3816f4a33b7254f3ab60089ba1",
"main.dart.js_200.part.js": "6868c5e8f7acdee917e1b5139305a05e",
"main.dart.js_101.part.js": "5c4af91aad9cc5c51ec4560e85f9adb0",
"main.dart.js_77.part.js": "7960d583391a4067af4097f2941a63ce",
"main.dart.js_149.part.js": "2b71faac580cea8119ac46e3aa70a033",
"main.dart.js_82.part.js": "acb6410a145b8085128c64c327bc522b",
"main.dart.js_173.part.js": "a0be817aa66b8fa7d2d8bf2a4d2267b2",
"main.dart.js_106.part.js": "22acd45fe12b2a0b962c03f1832539e5",
"main.dart.js_62.part.js": "b62db40bb8264fc3104456fcd74b827f",
"main.dart.js_259.part.js": "f12c5397a6d10d15afe5b6c2f45704b1",
"main.dart.js_207.part.js": "c0b059a7cbdb3c949bc94c2423ee57c6",
"main.dart.js": "f3dc267b06376dd266534d48dba074e4",
"main.dart.js_222.part.js": "bcb4ff86232b61176eea63113b9718ec",
"main.dart.js_232.part.js": "bc3c2abef05a71f2bb7ef245f11c89a2",
"main.dart.js_148.part.js": "e3eabc13863f7b2d19d3617c4783a3dc",
"main.dart.js_124.part.js": "78dc23605ba755b6a07bf7cd437f3b8e",
"main.dart.js_50.part.js": "d7c1ecf8e934cd59595d09ada1aec336",
"main.dart.js_97.part.js": "fe7c168887b47f92fc4b99e3fa66749e",
"main.dart.js_192.part.js": "5458893215fffd005d18199e3299e656",
"main.dart.js_145.part.js": "d4f04a663a8d0fda5cb0b7b6db48e395",
"main.dart.js_229.part.js": "ad4471bb3156d8a1c2696c5ce0715a96",
"main.dart.js_190.part.js": "7d3d0434a48f1d8a50a08fe45deb3fa0",
"main.dart.js_201.part.js": "ca387131bec2bab2b55877d6fdf8b706",
"main.dart.js_69.part.js": "c15ee3ebee9915472dde5ebbdf54d57d",
"main.dart.js_196.part.js": "aecb7ad5b66f6720b4e0fc9c663845dc",
"main.dart.js_181.part.js": "65cf5130c5099e68aa75843f17a2fec2",
"main.dart.js_108.part.js": "00ae5c65a5f8a98a4a6c17b91c53ebfb",
"main.dart.js_33.part.js": "c21a6981a0d786a24d11ed8acec90792",
"main.dart.js_34.part.js": "e67d9e63bbeb638de46403812ccb5273",
"main.dart.js_210.part.js": "18afbc2670dbfb05b178ff1b85d926c4",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_88.part.js": "3d27e02ec5b35561a28278b0ce0e61f8",
"main.dart.js_202.part.js": "e7a8ee6878a0f335c6354c6ea3415395",
"main.dart.js_183.part.js": "28abe158e0ed8977ac98e70fce477fb1",
"main.dart.js_167.part.js": "d9af2c43fbe63313c326ee55b947b095",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "0f297708a16e993c827bf21439149347",
"main.dart.js_247.part.js": "ee5fffa5f60d287ec382f2ee2173fb13",
"main.dart.js_7.part.js": "075e88d0a5c10e18d91df3543fffa59b",
"main.dart.js_140.part.js": "6af8a689e88d54d1a032869909e1436f",
"main.dart.js_228.part.js": "fe2c53af69ada96a92abc256d2515789",
"main.dart.js_170.part.js": "bfef2d216da7a6da7fd1c47a1e1502fd",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_27.part.js": "047915810d600e77bb2577e7999b1a5e",
"main.dart.js_156.part.js": "d38ac199098fe67640e85574e31f213a",
"main.dart.js_219.part.js": "146b300661610e1a29abf3e7abcf9b41",
"main.dart.js_116.part.js": "ba0556e51c5dd7f1fe4cf0b773982637",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "715688e66f7d9b1c7bf7fc98fb098109",
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
"assets/assets/translations/uk.json": "a3cad5db97fc6d585e9f764b8bbc711b",
"assets/assets/translations/pl.json": "3d9cb02a2a08e0ef563faa96aee6e9dc",
"assets/assets/translations/sk.json": "5b7d00499dbbedba40e1ddd068d7039c",
"assets/assets/translations/en.json": "dd8b9ab898ef114b692358031dc9162c",
"assets/assets/translations/cs.json": "f2e95fc144569bd7245f72c8e097a9a9",
"assets/assets/translations/de.json": "0eeb3c896354f4be91e7c9a40db4e229",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "4b25c042c1a09cf6aeb1bc94fb4df3f3",
"main.dart.js_147.part.js": "b7807648fe5c1500795247238090cbda",
"main.dart.js_220.part.js": "ef8518152b14c2b30a5134d2fb9dad69",
"main.dart.js_25.part.js": "c3bb86a4f5c9aa16bef90b36300c80c4",
"main.dart.js_249.part.js": "2ad367e61fa60e74ea0465dd4661cddb",
"main.dart.js_123.part.js": "b95a68307fb8709269afb13f64618f78",
"main.dart.js_241.part.js": "6f1a432f90a8e3702dfe250b900b7644",
"main.dart.js_8.part.js": "50b81e899876f5cd9304cdb939a18c08",
"main.dart.js_198.part.js": "ca651368acd36d0840c329fe07c5a9c6",
"main.dart.js_81.part.js": "e9b7eaada20ccd95833a7cec9b7c2d63",
"main.dart.js_205.part.js": "32c89d9e346073ebb8106fc61385fe4c",
"main.dart.js_113.part.js": "e7427ffc9b6e6f4bbbd7957bff2e9beb",
"main.dart.js_9.part.js": "44b7d6f6111abddf01e583df52620843",
"main.dart.js_22.part.js": "757604a831f5b0112f1a0a8f21c17387",
"main.dart.js_242.part.js": "869341c98368670b8eea79675b1ec248",
"main.dart.js_86.part.js": "bb562d5d5f232dca0214f6adb3091bbf",
"index.html": "e38008ca7d2415cc1b5d92831d6cf8f6",
"/": "e38008ca7d2415cc1b5d92831d6cf8f6",
"main.dart.js_94.part.js": "bd5281d685323fd618675996c990d81c",
"main.dart.js_98.part.js": "267d7b52e7f0bfaae803747f54dd88f1",
"main.dart.js_53.part.js": "6b4c1fb690b6a6cd7b07f75f250bfd65",
"main.dart.js_74.part.js": "ed1d5ec6dab9ee65be8f5cd32ffcb9f3",
"main.dart.js_235.part.js": "0ced4b6e76cb2f93214ae26f8642bf25",
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
"main.dart.js_118.part.js": "e4c24e4ab90ca9ed7cd8dbc90e12bd45",
"main.dart.js_26.part.js": "77e425edc21e3d5baf0bcd02aa61c027",
"main.dart.js_240.part.js": "329c5d91e4584a10399edfd92cc9abe1",
"main.dart.js_20.part.js": "3cbd4abb8dadd0b7b02ac3765aeb0e77",
"main.dart.js_189.part.js": "e5ad30d70c016efb26cded26081b9e2e",
"main.dart.js_214.part.js": "d140298a2e2ae248fa91d4698ae82a84",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "46dc128f9e3a6bdf9524a608ff1b0c02",
"main.dart.js_1.part.js": "e4668694be52e1fb1312cff967a78e33",
"main.dart.js_120.part.js": "cca1884a8f7dfde72b537b10e57aa6fd",
"main.dart.js_63.part.js": "fa2c86e4c28e884003f158afee0c8db4",
"main.dart.js_211.part.js": "dffeb587f0592d46d96ce49862577aab",
"main.dart.js_45.part.js": "2a5e89209b0e8c30482f81f0f8e19dac",
"main.dart.js_12.part.js": "bcd6f476d3fa475b9c22c14f30f6e307",
"main.dart.js_221.part.js": "73f4412818fd6458ab3d19ad708bc1ae",
"main.dart.js_137.part.js": "5d4f8c5dec9a337773fb953d77238f1a",
"main.dart.js_28.part.js": "40da93635e2692ea21a32ba3fe8dbfe9",
"main.dart.js_135.part.js": "6f21b6fccc59d071631c1c022a159fdf",
"main.dart.js_6.part.js": "6056241c535da312bea342b93659196e",
"main.dart.js_256.part.js": "7b2a17125292e58ac789bd99207461c1",
"main.dart.js_17.part.js": "e7a467e0f2ef443de0119d0b69468906",
"main.dart.js_105.part.js": "f9958206475a2b542b1eea49483a4605",
"main.dart.js_206.part.js": "c0612848d1445557f6d5307afbb9a28b",
"main.dart.js_231.part.js": "9e378eb10ca201a0dd2ab384d31796e5",
"main.dart.js_43.part.js": "f244b67e8b3718eab8c25a4991257293",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "72da8485b45c000d2305eb4ea8e32264",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "3a7dccc9fd8fd9d80be5458f431b8e7a",
"main.dart.js_15.part.js": "e9f0b3fdfdf6cedc6ed812b39bdcbef9",
"main.dart.js_19.part.js": "f83f228f79d344a6e34f63e01d3d3c9e",
"main.dart.js_255.part.js": "256976258034d27d02181515ff411811",
"main.dart.js_186.part.js": "10f5852d36c0848ca287002632bef7f1",
"main.dart.js_163.part.js": "336712dffc62ff1f4968e14dd6c5207e",
"main.dart.js_154.part.js": "467ee0e15a13e83ed1a1b73114cd8376",
"main.dart.js_257.part.js": "edf1d3fdb2490ce0c691af90be8b1263",
"main.dart.js_16.part.js": "16ff392af2bbbc52299c58db2dc8c8dc",
"main.dart.js_250.part.js": "3aa0cd76dde9c7638d4872fa7de02af8",
"main.dart.js_52.part.js": "8733ac8ac25bb888289a00b88ca09300",
"main.dart.js_199.part.js": "446d195a4c384edf3e11f73848784134",
"main.dart.js_253.part.js": "7eaf058d6c5b062091c3763e9225c1e7",
"main.dart.js_130.part.js": "5fddebf4cf27deb089127a5ceea46a2e",
"main.dart.js_197.part.js": "6bd81c261b485f196cfc811e2144e022",
"main.dart.js_56.part.js": "5d2b005090972158afc5a148b297956e",
"main.dart.js_3.part.js": "1c792d34b8c1c78d635968c986ce0cd0",
"main.dart.js_68.part.js": "2631b8ccb5e260dd572107575f5e406f",
"main.dart.js_38.part.js": "37c63a8af9a222298c0c07d6af5cf0c1",
"main.dart.js_225.part.js": "240c9d8c5e2947199690c81a3da42662",
"main.dart.js_248.part.js": "8721418d44e6a91f06b037c9fb03acd3",
"main.dart.js_133.part.js": "741ab4077ad3a440ac56543eec96da77",
"main.dart.js_21.part.js": "7825ff653de478b55ad34afb23648207",
"main.dart.js_188.part.js": "9cfded5dbe0ced0fe4cc1ef2e5e0046d",
"main.dart.js_204.part.js": "737656d800225a2989fd27dd4c6b52a1",
"main.dart.js_24.part.js": "3ba79c81146d540490bf3954fc32ce42",
"main.dart.js_90.part.js": "0c413e16a968ca4960cded0a19e4900a",
"main.dart.js_111.part.js": "6ba07653b3ee56c2a942791b87ee04c3",
"main.dart.js_177.part.js": "28fe489a03798c97a776c440a2f37397",
"main.dart.js_85.part.js": "3e2621d5fd847dd5a3f52d5649b2bb48",
"main.dart.js_243.part.js": "af12a46fc778df5ddfee37a239d85c2f",
"main.dart.js_212.part.js": "d1e151285fd6e4d533b124ddd6aee952",
"main.dart.js_114.part.js": "7f2c0d3329038bef99a3957aa764b028",
"main.dart.js_39.part.js": "1af10abb7ac8dde2413ac2264ab27d6d",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "9ad62e403dca59a0387e86d2b1da7580",
"main.dart.js_171.part.js": "92527fe7fc81e4e74ef6ce7533c42770",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "df1832d1fdfc43826b2a498ea113f797",
"main.dart.js_44.part.js": "f0070f5ac4bd461ef48049c4c14241d5",
"main.dart.js_121.part.js": "50afc83f3a681f10c79c4f847a3c36db",
"main.dart.js_55.part.js": "28d35c4f128002b855f1d8b5706ded6b",
"main.dart.js_112.part.js": "99f67211d514132cd1b1185929064f79",
"main.dart.js_139.part.js": "396b78b1e980cf43af805fde835c36ef",
"main.dart.js_143.part.js": "ff4df63d868979f2ff91181f76585a9a",
"main.dart.js_80.part.js": "46cfe3a66391575d4a0654ac5564d74b",
"main.dart.js_252.part.js": "d08be2398d985c0cec2b81cc07b40f1c",
"main.dart.js_233.part.js": "c7418de0dfbb457334a197e03d17bd0c",
"main.dart.js_30.part.js": "910914ac6b07d6e283cb99c4975fec2b",
"main.dart.js_78.part.js": "7b6535183c16b1bf549d05951959fccd",
"main.dart.js_136.part.js": "6458029324469cbf0ad413c646e957b3",
"main.dart.js_168.part.js": "2e0ac2df226517b0db6976f5bc5e08a5",
"main.dart.js_59.part.js": "dd36d063ef0e297d46b284a31fde1dcb",
"main.dart.js_47.part.js": "d146a81a1f294a46ca68d2c8e4a80d56",
"main.dart.js_107.part.js": "11461c926675928ff881a45dc2562c76",
"main.dart.js_29.part.js": "b6b018ade9c00f66265a0bbbeb859c6b",
"main.dart.js_194.part.js": "4c27bbbfd699e34868caa32b36b82c63",
"main.dart.js_58.part.js": "ba72951a930c6f446dac06e27bdac939",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "9fc05f4c19a1875064c629e15ed14467",
"main.dart.js_79.part.js": "4eeca0b7014e67db7e978489e798d33b",
"main.dart.js_92.part.js": "0fee08bcc3a981fdb38aeb467be2372a",
"main.dart.js_224.part.js": "a0e30ef072c06de33711bde126ac7a5a",
"main.dart.js_93.part.js": "d269bd6a71be0ca1933714e8b4d344ab",
"main.dart.js_223.part.js": "2f78c82ff3821b6ee91d0e360ef70105",
"main.dart.js_11.part.js": "391fd183aaea1bc8db78bc18b5c25e0a",
"main.dart.js_125.part.js": "f202c0770b7be96f33136751449fa125",
"main.dart.js_131.part.js": "dabbf6ea209d24c4d04dfb31dfdb7a5c",
"main.dart.js_226.part.js": "c557c0463d73c2daf04cc402b25813f6",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "80675de3d6e548dca58e2fe88db525c9",
"main.dart.js_178.part.js": "ff136f66b29e2ecbc25351c31ae0fb0c",
"main.dart.js_187.part.js": "3e0d98be81f539562a039ca25a2a1e0e",
"version.json": "fa6367b4891d38344c332789ba3ecfaa",
"flutter_bootstrap.js": "2182b270b9ce84160f1899920cd24326",
"main.dart.js_191.part.js": "eb152384bedda9a97fcdd7a636696de5"};
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
