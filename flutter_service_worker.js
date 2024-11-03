'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "9788d3c479648e19c52ca50c297debdf",
"main.dart.js_162.part.js": "5bd251a5d6a1ef0fa796f7d4f2eb988a",
"main.dart.js_117.part.js": "c13803904fb06a4ae23a552ff7562d79",
"main.dart.js_182.part.js": "9f3ba521458a9b4ae1dbedb9d9c69420",
"main.dart.js_75.part.js": "2f608b121c3a60bbfbad7092e5467457",
"main.dart.js_244.part.js": "b926aaad375a042a4794bb26d13c909a",
"main.dart.js_83.part.js": "245fe8d0c6bef6af4e409d5a11391746",
"main.dart.js_254.part.js": "f64ad926d6163c4d567f4f4fc99cf226",
"main.dart.js_176.part.js": "669dd8c79dd1b7052805b83e5a099ad4",
"main.dart.js_96.part.js": "44826246b4c0099da6626a247635ea78",
"main.dart.js_245.part.js": "461db051daf2abda4d160652b2d2da23",
"main.dart.js_87.part.js": "1c4fbf17e9e1f50a803b022a26c53466",
"main.dart.js_126.part.js": "2450db20c9d9c3331ada7779101cbbf6",
"main.dart.js_129.part.js": "4ece5d6e35b38c1dcdf936ff93d51558",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "de3068a5ad1c8d4faca324ba25ce3892",
"main.dart.js_218.part.js": "8597779b429fb86358a10bc698f468e1",
"main.dart.js_172.part.js": "bbc47baffebf42788eb9ce3e09c85067",
"main.dart.js_40.part.js": "cd94c61fce71b850b2158349be002ba3",
"main.dart.js_209.part.js": "e8772a11e035dea8740bb4c26772e033",
"main.dart.js_115.part.js": "291faef7cdfcf7a8d151569ee082ad6b",
"main.dart.js_10.part.js": "dd21c7294daabfffb3fde312fda66226",
"main.dart.js_84.part.js": "5c2500300b58030d0a53fc390af9e633",
"main.dart.js_122.part.js": "b14f7643e0f9704104ec6abf02bca898",
"main.dart.js_230.part.js": "6b69d2c88cfd548ef203e79f57eda41c",
"main.dart.js_213.part.js": "ed496401a4935588d1d59bee52cb7e42",
"main.dart.js_41.part.js": "29e0c8a628c95ff301e1b6b7a0ed7a0c",
"main.dart.js_89.part.js": "e8ab2e68ba3aef6a5eeab73291163d48",
"main.dart.js_71.part.js": "4e3244a1c25be8d2aea51b954211c4dc",
"main.dart.js_146.part.js": "00e95e2f67a18320f73cb2e108fe3f07",
"main.dart.js_37.part.js": "f308f40422ab34e85965b8257c9fd541",
"main.dart.js_132.part.js": "0fa75d1dd83eaf5c82378171ed9696f1",
"main.dart.js_165.part.js": "c3034c885dca88751f33051dfc634937",
"main.dart.js_127.part.js": "a77deb66998de6862ff8dfdb49176ff6",
"main.dart.js_161.part.js": "be86c5972e62890e4e3de2efb71e6de2",
"main.dart.js_175.part.js": "bc168e557c4b29db13bad4cba58e47e2",
"main.dart.js_239.part.js": "caa5f600844a0326caec4343733e83cd",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "e393a4600339441faf0a7fc575df7d7e",
"main.dart.js_64.part.js": "44a2ab9b4f344a2273ef57032134e0de",
"main.dart.js_169.part.js": "8149f82f7c734ce0353091cc47cb6410",
"main.dart.js_13.part.js": "b4a4521ed493b8f3f68c176753678e9b",
"main.dart.js_246.part.js": "8ea201112edf27903797bba1cd67bb3d",
"main.dart.js_174.part.js": "2cadca6cab1f3057a03eac5101b3a7ed",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "0cd5d2010bbfeeb565a90b13f6984449",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "1cb37cc0720e2403e73322c1f49da7b2",
"main.dart.js_119.part.js": "78746858a98132b69bda8e3c26f20a2b",
"main.dart.js_18.part.js": "f64377c5a9acffb5e377e8e6f080a30e",
"main.dart.js_35.part.js": "35288f3816f4a33b7254f3ab60089ba1",
"main.dart.js_200.part.js": "6868c5e8f7acdee917e1b5139305a05e",
"main.dart.js_101.part.js": "5c4af91aad9cc5c51ec4560e85f9adb0",
"main.dart.js_77.part.js": "7960d583391a4067af4097f2941a63ce",
"main.dart.js_149.part.js": "2b71faac580cea8119ac46e3aa70a033",
"main.dart.js_82.part.js": "700587a55ff9cd378f6e575a028f7224",
"main.dart.js_173.part.js": "a0be817aa66b8fa7d2d8bf2a4d2267b2",
"main.dart.js_106.part.js": "253ce3ff5fac7b3836f176125d1fef11",
"main.dart.js_62.part.js": "b62db40bb8264fc3104456fcd74b827f",
"main.dart.js_259.part.js": "02f249a3f64b07d6bf64daf9c8cc9292",
"main.dart.js_207.part.js": "c0b059a7cbdb3c949bc94c2423ee57c6",
"main.dart.js": "5f3726351508c831d210435312e7f8ad",
"main.dart.js_222.part.js": "47ca7d3cb127acf12c32697c0febf972",
"main.dart.js_232.part.js": "bc3c2abef05a71f2bb7ef245f11c89a2",
"main.dart.js_148.part.js": "e3eabc13863f7b2d19d3617c4783a3dc",
"main.dart.js_124.part.js": "78dc23605ba755b6a07bf7cd437f3b8e",
"main.dart.js_50.part.js": "d7c1ecf8e934cd59595d09ada1aec336",
"main.dart.js_97.part.js": "a68fffd0dee5f357ed6ee8ff4f208806",
"main.dart.js_192.part.js": "a96eac214e2ba9d832ec2ef48020da58",
"main.dart.js_145.part.js": "0485f2a375dd7ae2e6e7ec3a5bcf24ee",
"main.dart.js_229.part.js": "17e7f8d10baf399365e2d7270c827b11",
"main.dart.js_190.part.js": "072db3508cffd345ef3c2a580a22172f",
"main.dart.js_201.part.js": "ca387131bec2bab2b55877d6fdf8b706",
"main.dart.js_69.part.js": "d0ec1d95cfaa0bae02992fbd2c70f068",
"main.dart.js_196.part.js": "851384d0454e0033f565a1ee0b249a60",
"main.dart.js_181.part.js": "65cf5130c5099e68aa75843f17a2fec2",
"main.dart.js_108.part.js": "0958498a7d3e7ffdeea4d64f22d8f6f0",
"main.dart.js_33.part.js": "2fb47b9312470433565c6de71e055c72",
"main.dart.js_34.part.js": "e67d9e63bbeb638de46403812ccb5273",
"main.dart.js_210.part.js": "f8dac1f2d03aeea66ce5dad4446c0d2a",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_88.part.js": "356c2d533054ce16dd622df4044599fe",
"main.dart.js_202.part.js": "e7a8ee6878a0f335c6354c6ea3415395",
"main.dart.js_183.part.js": "fa105665d0ade215aa503e42ca0f2c00",
"main.dart.js_167.part.js": "d9af2c43fbe63313c326ee55b947b095",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "269f0bee36fb75d4726ece0ee49fcf6d",
"main.dart.js_247.part.js": "ee5fffa5f60d287ec382f2ee2173fb13",
"main.dart.js_7.part.js": "075e88d0a5c10e18d91df3543fffa59b",
"main.dart.js_140.part.js": "d600a3c0ee4603e0e552acfd7e8c594f",
"main.dart.js_228.part.js": "5da41e2e76200e2969c20e72689ce32d",
"main.dart.js_170.part.js": "bfef2d216da7a6da7fd1c47a1e1502fd",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_27.part.js": "7268c1a70480bfc4d29bd4dc80147a22",
"main.dart.js_156.part.js": "d38ac199098fe67640e85574e31f213a",
"main.dart.js_219.part.js": "4ed585ca9e78fac452a00857a5100e3f",
"main.dart.js_116.part.js": "e08a19ac0d91b93a1777dc87f649f4bd",
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
"main.dart.js_147.part.js": "2cbaacb198bf500a43430ac8f7d97027",
"main.dart.js_220.part.js": "59e272f4332b0365777c48201bfc9cfc",
"main.dart.js_25.part.js": "c3bb86a4f5c9aa16bef90b36300c80c4",
"main.dart.js_249.part.js": "8a4e8bf3b262a4120bcc8df57724df26",
"main.dart.js_123.part.js": "b95a68307fb8709269afb13f64618f78",
"main.dart.js_241.part.js": "6f1a432f90a8e3702dfe250b900b7644",
"main.dart.js_8.part.js": "50b81e899876f5cd9304cdb939a18c08",
"main.dart.js_198.part.js": "ca651368acd36d0840c329fe07c5a9c6",
"main.dart.js_81.part.js": "e9b7eaada20ccd95833a7cec9b7c2d63",
"main.dart.js_205.part.js": "76f7d6a892b834f4d9fda74f5afb6564",
"main.dart.js_113.part.js": "e7427ffc9b6e6f4bbbd7957bff2e9beb",
"main.dart.js_9.part.js": "44b7d6f6111abddf01e583df52620843",
"main.dart.js_22.part.js": "432e6884497a37df3a037806f6bc2e3c",
"main.dart.js_242.part.js": "869341c98368670b8eea79675b1ec248",
"main.dart.js_86.part.js": "0fdef1c42279a1f59502788fad178e5b",
"index.html": "59d76322cbf947d01b391011a39db43c",
"/": "59d76322cbf947d01b391011a39db43c",
"main.dart.js_94.part.js": "c5d3deb96ea9fd87001d60d5f270ac2b",
"main.dart.js_98.part.js": "267d7b52e7f0bfaae803747f54dd88f1",
"main.dart.js_53.part.js": "7a3606b056eccd961e40d73d89dcc9fa",
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
"main.dart.js_26.part.js": "15199637c0e6ad092a79ae6b192ce57e",
"main.dart.js_240.part.js": "a75d5fc1d50c83f86f7c23266038c50a",
"main.dart.js_20.part.js": "e4a01c417ad89bd71ba8d1ea94789c73",
"main.dart.js_189.part.js": "e5ad30d70c016efb26cded26081b9e2e",
"main.dart.js_214.part.js": "45ea50d7a76f70c7d09a8d619f3208aa",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "eb0290192b572a345a97614000c8bc9f",
"main.dart.js_1.part.js": "b3b1e9d6ae33b0fb4e44f1e82b93e627",
"main.dart.js_120.part.js": "cca1884a8f7dfde72b537b10e57aa6fd",
"main.dart.js_63.part.js": "fa2c86e4c28e884003f158afee0c8db4",
"main.dart.js_211.part.js": "6ee4d2143376edf7f6f774a14beb2899",
"main.dart.js_45.part.js": "2a5e89209b0e8c30482f81f0f8e19dac",
"main.dart.js_12.part.js": "bcd6f476d3fa475b9c22c14f30f6e307",
"main.dart.js_221.part.js": "1d295ae36f249c08a75344c8ea384d48",
"main.dart.js_137.part.js": "7b74fff9831ef052e82f0654cb2785d8",
"main.dart.js_28.part.js": "f97a42be0a676549089cb13230299d6d",
"main.dart.js_135.part.js": "9dd9306d4f1d224c09c905c8f2616f78",
"main.dart.js_6.part.js": "6056241c535da312bea342b93659196e",
"main.dart.js_256.part.js": "7b2a17125292e58ac789bd99207461c1",
"main.dart.js_17.part.js": "e7a467e0f2ef443de0119d0b69468906",
"main.dart.js_105.part.js": "f9958206475a2b542b1eea49483a4605",
"main.dart.js_206.part.js": "6aaeae5fac95dd78e455c2d8248ab74e",
"main.dart.js_231.part.js": "0ff33c8d240205852436546a9b8e007a",
"main.dart.js_43.part.js": "64dbc96ae70a7c67e0a4568daba2fb9e",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "bed8bf1a934762b6a3f7e47a78a4df83",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "7d68dd962b28eaa6c48269c2c472cfd1",
"main.dart.js_15.part.js": "7ab964af15a17188e67d2091d1fa3243",
"main.dart.js_19.part.js": "f83f228f79d344a6e34f63e01d3d3c9e",
"main.dart.js_255.part.js": "533fd4a1b6ae9a13d1fcede4ced9aecb",
"main.dart.js_186.part.js": "10f5852d36c0848ca287002632bef7f1",
"main.dart.js_163.part.js": "336712dffc62ff1f4968e14dd6c5207e",
"main.dart.js_154.part.js": "467ee0e15a13e83ed1a1b73114cd8376",
"main.dart.js_257.part.js": "70d2e07d4e90dc3f534b438ffc446f4d",
"main.dart.js_16.part.js": "16ff392af2bbbc52299c58db2dc8c8dc",
"main.dart.js_250.part.js": "1c4856fc0ff6f5257c888769e48e2603",
"main.dart.js_52.part.js": "f7cb8a642872cb2ef9745500c77cb622",
"main.dart.js_199.part.js": "96a9f0ef04fb9a5fdc9a3bae26ae1481",
"main.dart.js_253.part.js": "7eaf058d6c5b062091c3763e9225c1e7",
"main.dart.js_130.part.js": "ce8b5b019715a6c6a6dec8640bdc0f0b",
"main.dart.js_197.part.js": "41ce67b9f0780366c4cc74ccde3f06fd",
"main.dart.js_56.part.js": "5d2b005090972158afc5a148b297956e",
"main.dart.js_3.part.js": "25ea5c78509f216ce9f9bf3c2212103a",
"main.dart.js_68.part.js": "e5a3965c16fdab5896734960352febf6",
"main.dart.js_38.part.js": "37c63a8af9a222298c0c07d6af5cf0c1",
"main.dart.js_225.part.js": "ab6a3626e087f7e88b80a6fa05d10530",
"main.dart.js_248.part.js": "8721418d44e6a91f06b037c9fb03acd3",
"main.dart.js_133.part.js": "741ab4077ad3a440ac56543eec96da77",
"main.dart.js_21.part.js": "bd830f73c2686a120adac96bc69d70c3",
"main.dart.js_188.part.js": "9cfded5dbe0ced0fe4cc1ef2e5e0046d",
"main.dart.js_204.part.js": "737656d800225a2989fd27dd4c6b52a1",
"main.dart.js_24.part.js": "2eca78a017c9c1b6ab529d4c8591a736",
"main.dart.js_90.part.js": "0c413e16a968ca4960cded0a19e4900a",
"main.dart.js_111.part.js": "6ba07653b3ee56c2a942791b87ee04c3",
"main.dart.js_177.part.js": "28fe489a03798c97a776c440a2f37397",
"main.dart.js_85.part.js": "454f6540169aca94be06873a08ecf49d",
"main.dart.js_243.part.js": "ee84c92c84366262afc0ebe3ceaf9845",
"main.dart.js_212.part.js": "d1e151285fd6e4d533b124ddd6aee952",
"main.dart.js_114.part.js": "68867265406c890fb1e0107f150b64ba",
"main.dart.js_39.part.js": "1af10abb7ac8dde2413ac2264ab27d6d",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "a34484debab1ac0b296ee1ded47b6fd3",
"main.dart.js_171.part.js": "96de0fc9413589e3404f662945c032fb",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "9dde2b507408869423b1a3b7510dd6c1",
"main.dart.js_44.part.js": "f0070f5ac4bd461ef48049c4c14241d5",
"main.dart.js_121.part.js": "50afc83f3a681f10c79c4f847a3c36db",
"main.dart.js_55.part.js": "28d35c4f128002b855f1d8b5706ded6b",
"main.dart.js_112.part.js": "99f67211d514132cd1b1185929064f79",
"main.dart.js_139.part.js": "323ee21ec2a3d97ca6471cfe3ad0a832",
"main.dart.js_143.part.js": "ff4df63d868979f2ff91181f76585a9a",
"main.dart.js_80.part.js": "190e56dddad4321d37def64fcf1ddfcb",
"main.dart.js_252.part.js": "d08be2398d985c0cec2b81cc07b40f1c",
"main.dart.js_233.part.js": "f3aa60a8b94feb3201da0b42e9d6a21b",
"main.dart.js_30.part.js": "2847be5ef3f6f2af4df38f9baecc86e4",
"main.dart.js_78.part.js": "7b6535183c16b1bf549d05951959fccd",
"main.dart.js_136.part.js": "535472d509d468f4de825351f55cfd75",
"main.dart.js_168.part.js": "2e0ac2df226517b0db6976f5bc5e08a5",
"main.dart.js_59.part.js": "dd36d063ef0e297d46b284a31fde1dcb",
"main.dart.js_47.part.js": "9ffe8e9ac2d151b44fab7ad13484fd9e",
"main.dart.js_107.part.js": "ae70dfaee81a2dfa7a3e1542a2e0d03e",
"main.dart.js_29.part.js": "b6b018ade9c00f66265a0bbbeb859c6b",
"main.dart.js_194.part.js": "4c27bbbfd699e34868caa32b36b82c63",
"main.dart.js_58.part.js": "ba72951a930c6f446dac06e27bdac939",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "9fc05f4c19a1875064c629e15ed14467",
"main.dart.js_79.part.js": "4eeca0b7014e67db7e978489e798d33b",
"main.dart.js_92.part.js": "363f21ab2936d90416d96e19efd32240",
"main.dart.js_224.part.js": "a0e30ef072c06de33711bde126ac7a5a",
"main.dart.js_93.part.js": "3f2050805239c2f371569499ff73c4b5",
"main.dart.js_223.part.js": "2a8cdb1fcee94dc3026595dc38cead72",
"main.dart.js_11.part.js": "26a6942a6a7dca80c465cca987c7900e",
"main.dart.js_125.part.js": "f202c0770b7be96f33136751449fa125",
"main.dart.js_131.part.js": "96565b3794068f09a69b27de2ffac7c0",
"main.dart.js_226.part.js": "c557c0463d73c2daf04cc402b25813f6",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "80675de3d6e548dca58e2fe88db525c9",
"main.dart.js_178.part.js": "ff136f66b29e2ecbc25351c31ae0fb0c",
"main.dart.js_187.part.js": "3e0d98be81f539562a039ca25a2a1e0e",
"version.json": "8f98e0a7dace1bc97834492a43964956",
"flutter_bootstrap.js": "f1bcdcf6c52c6b7303beb512bfea6dea",
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
