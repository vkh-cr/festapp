'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "38504a78bd642d3bfa93be2b984940eb",
"main.dart.js_117.part.js": "0262571e3c9cc0b203c89ff16877b194",
"main.dart.js_182.part.js": "635289db1320fce4892f7a4711b7b909",
"main.dart.js_75.part.js": "06750bf9f61dbd85e279f2e61847e3eb",
"main.dart.js_244.part.js": "0d3ac78f21668ebd8a125b0ae09ddc60",
"main.dart.js_83.part.js": "8250ee750f5dff4774125a80a571b362",
"main.dart.js_254.part.js": "e73617e2c9d667e00d8a5c7cfc790ec9",
"main.dart.js_176.part.js": "f2423f637949e18182a65e444ca9de6f",
"main.dart.js_96.part.js": "0ff150e75310bb2fc0da0069b5102dcb",
"main.dart.js_245.part.js": "b3f9c1b8d701469b4cb162db48d555c6",
"main.dart.js_87.part.js": "1e7886f6bb1339d1c3fca3f2475d319f",
"main.dart.js_251.part.js": "ecdfa7dec22e873aca19b242cdbeaef6",
"main.dart.js_126.part.js": "c919ba645cfe464628f38e7410407646",
"main.dart.js_129.part.js": "735b4c11b13d3fc16b6cda66a4df4183",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_142.part.js": "cc1bd474869cf432c23f0f84fc42e9f7",
"main.dart.js_40.part.js": "fa2b5bc258761ae0834c9dc617b80516",
"main.dart.js_209.part.js": "77ecdfd5d1320c198dfb4f7c9de0add3",
"main.dart.js_115.part.js": "896c5d8bb2b025f4be1ecb1feab1c543",
"main.dart.js_10.part.js": "c9c458d73dc645549edcdbbd14b09944",
"main.dart.js_84.part.js": "c7ab2fbb1596b65f2095a97150927d28",
"main.dart.js_122.part.js": "4f3a439d08183f0fe3fc7f6ea8fe0c93",
"main.dart.js_103.part.js": "d50014b2236e1333288c58c17a32dc58",
"main.dart.js_213.part.js": "5e7672048b49292ac8e661292954afa3",
"main.dart.js_153.part.js": "ef516010d5654d68955dcc20ae25b6f0",
"main.dart.js_41.part.js": "3f84a1d73b6ec4eeeded3a7a42b6636c",
"main.dart.js_89.part.js": "7160a19ee28b322a0a13467bbc07b327",
"main.dart.js_146.part.js": "2dd3916b7dbc0e5e63aa5b7d3f6db5b4",
"main.dart.js_132.part.js": "72615bf13753d676d2d76eca1d050ad1",
"main.dart.js_127.part.js": "5b0b679eb3ce3a541a2b22f6fb9622b0",
"main.dart.js_161.part.js": "f57fd2e76eb7edb8f79d6e4024bf917d",
"main.dart.js_175.part.js": "c975d511bf2e5f35fbf6c9809d1bc97f",
"main.dart.js_239.part.js": "cfe8e7f0297ffe36c040a866f104ba0f",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_64.part.js": "e74830981f33c97205f826ae4d4c5438",
"main.dart.js_169.part.js": "90d541cbf6b7ad8f35a5ac2880edab70",
"main.dart.js_13.part.js": "2edea36f2fd31feb115f0e116f5c19e6",
"main.dart.js_174.part.js": "f13b8533bcad6693a97c8dafa576a368",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "a81435e8e0b31a4d5c2ad9b03c51af9b",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "d8a862fd8a0fb80d07a035dac6bdc625",
"main.dart.js_31.part.js": "43364cd4d40abb4b75ae8cd5a11761c8",
"main.dart.js_119.part.js": "8ec2062f41766dc1579a1f259fc1c754",
"main.dart.js_18.part.js": "ae251f96acd479db962092828dc6d937",
"main.dart.js_35.part.js": "7370060c7c1567d1c0ff7b7be6fd2c00",
"main.dart.js_200.part.js": "7ef4e5060350dc9cc5160165e4777b91",
"main.dart.js_101.part.js": "6c9bed00fe8e3a5740aafb358e2fa2ee",
"main.dart.js_77.part.js": "d4b05d00169603525e3a4c39b20705cd",
"main.dart.js_149.part.js": "e0f592ad07a5a110f9669a7b3cb88d5c",
"main.dart.js_208.part.js": "d3122de1e4e47da2a525f9ab45301ffe",
"main.dart.js_82.part.js": "0486f4e03e2dce528f1ac5605cb97293",
"main.dart.js_173.part.js": "d4e71b7dc5a50e973abf7f78f9a54032",
"main.dart.js_106.part.js": "14d7da6e4bfa2fe4ea74a86900a19467",
"main.dart.js_273.part.js": "9a6877a05b6c6f3ace2442ff492d1d6b",
"main.dart.js_62.part.js": "4a9def1c6a84741cc7c48dd040815ad0",
"main.dart.js_259.part.js": "05a01322f534b6ac4f1ec47724f8d5ff",
"main.dart.js": "0017b4b8af7e2ef24302a87a3d84564a",
"main.dart.js_232.part.js": "551685d8472f06a109e4103d83c940db",
"main.dart.js_124.part.js": "c0f138fe86bcd45a211fd56da4ad9a01",
"main.dart.js_192.part.js": "942bfc7df368cd4824490c90cf7dbad6",
"main.dart.js_91.part.js": "748d185f44d2aebee974fff68df4b4aa",
"main.dart.js_145.part.js": "1ebbecb4a5fd3b90ba6cb67caa8bd66e",
"main.dart.js_190.part.js": "a6c36926507caaa8cf5407f16c73b911",
"main.dart.js_104.part.js": "d0b528146d8506fbec588d3ac4ff891f",
"main.dart.js_201.part.js": "e3ae074d3b4bfedb6d04a874568d683f",
"main.dart.js_69.part.js": "f735c5f5fbc36d9871ec1c38e1e70a01",
"main.dart.js_181.part.js": "d22f075d30aba6552ceb672b31d7eb7a",
"main.dart.js_270.part.js": "a1df953001e708803f776d486a39087b",
"main.dart.js_33.part.js": "9e29ba861f5c9642490d9f30b5ae32bb",
"main.dart.js_275.part.js": "06d27544c237ab21445126d5c3dd4dde",
"main.dart.js_269.part.js": "5fe6f49fe78c59047cfefbf569f1b246",
"main.dart.js_34.part.js": "e3c4076f418493eb4b4ad02c3f068caa",
"main.dart.js_210.part.js": "e3bdaba76775676ce3ebf72db4b19f2c",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "0d9fb1c002a6317fe2fb8aa56b54daee",
"main.dart.js_88.part.js": "542012a7e26e0a99d548dc988c2cf1c4",
"main.dart.js_202.part.js": "8dd414c61b469054db017d862745f1a2",
"main.dart.js_183.part.js": "06a315d555cd90663e8334e0a273e3ae",
"main.dart.js_203.part.js": "f56d0f6a66a2aa689a85ac1b92087eec",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "69f5ec27935e5a2332f5f0dcb50cc187",
"main.dart.js_247.part.js": "050ea6d031d71c64b9425ecb61007368",
"main.dart.js_7.part.js": "e1f5b4317f175b2422d64cb51e4b8271",
"main.dart.js_140.part.js": "daf85b1cf3470699f43eb119467bde10",
"main.dart.js_228.part.js": "053f63750f887fea749abcedb209f18f",
"main.dart.js_170.part.js": "bb2f57686f0ff1ce4abbdec30f59884b",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "0e83b8cd763cafb29b275f085923df0f",
"main.dart.js_27.part.js": "da6e8338173c11b230e6db90a82b7746",
"main.dart.js_156.part.js": "b85dfe01efcc245da5323bac3868e563",
"main.dart.js_4.part.js": "c94985ce4b62730c2792e7b3756ad4cf",
"main.dart.js_219.part.js": "953386f1c907752339e0f25c3580bdff",
"main.dart.js_116.part.js": "4109fb06e41861b4285dc8c49fad62ea",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "e5aa34b29ee528ec717720fb7f7670c1",
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
"assets/assets/translations/uk.json": "67e04f12cf070334a918cc4351b6c76d",
"assets/assets/translations/pl.json": "5218a3d8cc099c15b1592d7d40806f76",
"assets/assets/translations/sk.json": "b99f065cf337c99d01822e0f68227585",
"assets/assets/translations/en.json": "845bf3143b5a9dbe3008e26d51f59d1b",
"assets/assets/translations/cs.json": "c4f103aabcdaac5deac665b98785b668",
"assets/assets/translations/de.json": "f66515c907a5d65211c5fa8c59fc0bf5",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "1c05a2406c5e9413ac359770e0672088",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "b3ed5136807f1235d7b86e74b4b38296",
"main.dart.js_263.part.js": "de99d2ac0d59457bd7c0639361201a36",
"main.dart.js_220.part.js": "9d466d90a13c580aa0180026a350305e",
"main.dart.js_25.part.js": "f49779c1bfeb958ec10e4ce2ac3acdf4",
"main.dart.js_141.part.js": "60a47a1e14319f49529ba82c79033c4a",
"main.dart.js_249.part.js": "29cffcb51155a545a036f1fcbc10406e",
"main.dart.js_123.part.js": "d834225a2fca7b1efeae0cec3a4dfacd",
"main.dart.js_241.part.js": "b0064d9ad7511b085c74b68bb1c9c73c",
"main.dart.js_268.part.js": "2d6e785679d0ddedeff17bb81871733a",
"main.dart.js_8.part.js": "107ed4bc802307ccbadb3bea9b099848",
"main.dart.js_198.part.js": "eb765eda3d73fb64481348a9c3c25481",
"main.dart.js_81.part.js": "5cdab9864d1edc1544aa9603b360c790",
"main.dart.js_205.part.js": "d5e51b306f1fe30eab36d5cc6516c32a",
"main.dart.js_9.part.js": "9dac8330ebed25c560b0cd445e02feef",
"main.dart.js_99.part.js": "c1fe26ab0ac89a1b6a2544f8ac8a9900",
"main.dart.js_22.part.js": "e8ed2a0659aff4cb011d5fa44be45022",
"main.dart.js_272.part.js": "b22c53733e8b21d78b8277f8e1487f50",
"main.dart.js_242.part.js": "540174c8786ea3bed716bc4fba5c326f",
"main.dart.js_86.part.js": "44c814c4b5295b602b8b1c2ce3678885",
"index.html": "ebc92d54bad19e6676801bf34539317f",
"/": "ebc92d54bad19e6676801bf34539317f",
"main.dart.js_98.part.js": "b48c3cb2b5b11dc678e87540b30e6e88",
"main.dart.js_53.part.js": "5439e59cc70e04f8e4c36142215f0801",
"main.dart.js_235.part.js": "ac9b247eb3a24cde3e4de6a69f3f97f4",
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
"main.dart.js_118.part.js": "9e54fb26d9a6ed00c01cf4120a89fa6e",
"main.dart.js_262.part.js": "d29d45451d2d3560bd1564a06716b7bd",
"main.dart.js_26.part.js": "fda94e07be07f0441cec9a6f117e910e",
"main.dart.js_240.part.js": "b0e7a0949b0a0846585ec3765b3ddb9e",
"main.dart.js_20.part.js": "f9e8b85b75e8747b76c4b715c1204121",
"main.dart.js_189.part.js": "28ba707f6a5877e3ae5dde8f35353aa9",
"main.dart.js_214.part.js": "befef870470bbacf3bbfbb3e3287d442",
"main.dart.js_51.part.js": "b0475aa54690381af0925a5bdf85b6bd",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "3150dbc9613729dbf6ab4785b49d2fff",
"main.dart.js_72.part.js": "605e4e370b596e0231410e6abd3587b2",
"main.dart.js_1.part.js": "9143e65f46bb980e8dc4480696c390cb",
"main.dart.js_120.part.js": "54e8310521f5f7edb1ba6cc1bab2a28e",
"main.dart.js_63.part.js": "88288cc8aa09763d1a26ec0bd4d3487f",
"main.dart.js_211.part.js": "dff8253c40b3e5c991102052e83ab384",
"main.dart.js_261.part.js": "a6163fe9dc90e2152fdd84c6e5677607",
"main.dart.js_12.part.js": "5c501add064b6cf8a25e1e4781529f98",
"main.dart.js_221.part.js": "936a63bc6165686b27e128e5ef3e1b00",
"main.dart.js_137.part.js": "f6f310b6ded2e2663e64195d1383fdc8",
"main.dart.js_276.part.js": "9a05a7c334ef45121e6660c4ab03b105",
"main.dart.js_28.part.js": "5f702bb3dc34624a8952f56511aa2584",
"main.dart.js_135.part.js": "5908e90d4a065a1fd6d8ae43ae3f7d45",
"main.dart.js_256.part.js": "1240ebaaed23fcfb7b748c1e5e14a2cd",
"main.dart.js_237.part.js": "ca89d5e60cac78209ad2418b4cda0d79",
"main.dart.js_138.part.js": "19edaf30a4b0b9de2c1292aaa84b1e42",
"main.dart.js_193.part.js": "840c3bcc729c17a8cf7dd17e35fad2d7",
"main.dart.js_17.part.js": "11187a93fc139deafe28a0b235e9553a",
"main.dart.js_105.part.js": "9450378611741e9c786af78299669e00",
"main.dart.js_206.part.js": "d926cb8eb67811286f7df680254eb3d1",
"main.dart.js_231.part.js": "a63f65216dc368e377accf46477b1c04",
"main.dart.js_43.part.js": "ba8dd4dc2b9f65c037aa7f5b292f8462",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "de5dd0b7ecf8136da4bdfe0a1acb47fc",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "2de446e22277d49ddf90b66ca966bc4f",
"main.dart.js_15.part.js": "fd3b162be77dc60bde77e17c4f6bd266",
"main.dart.js_151.part.js": "44147f2ded54fc75cc94a35428a496a0",
"main.dart.js_19.part.js": "64f6f2ae7d21ff2f1e423f8c893d9d6d",
"main.dart.js_255.part.js": "6144523a0f90aa87b1282ee280227fbb",
"main.dart.js_186.part.js": "b4fa20ebac01b31952902779ec8b25bd",
"main.dart.js_163.part.js": "864d9007c4a92aafcd6b67181c8cf9a6",
"main.dart.js_154.part.js": "464c135212cdc040a6271634f6cffcfd",
"main.dart.js_16.part.js": "eee1f33e7aa26616ef22c4cc4aba7268",
"main.dart.js_250.part.js": "d76825ea54b0dca1e5e71b5ece063920",
"main.dart.js_52.part.js": "e2ba57d1fa96938c9063d3a951f8b7d0",
"main.dart.js_36.part.js": "3a21b96418b398ad1233dbf711359b64",
"main.dart.js_199.part.js": "bd0e03d1a2f411e7d71bbd605cdd5aa9",
"main.dart.js_253.part.js": "ba5bf9dd5e588c732a0444e652fffe7a",
"main.dart.js_130.part.js": "55745bcad658870db22d2890ce8371ca",
"main.dart.js_238.part.js": "9f576f0961729fa2cd0dbaa7d9ecab7e",
"main.dart.js_152.part.js": "1f138f3316f1335fd923ab3616ceaca4",
"main.dart.js_32.part.js": "5ed93b8b20592ef1e17d04d574d68351",
"main.dart.js_56.part.js": "89a0577b0fd84c4d51284c46ae6afd8f",
"main.dart.js_227.part.js": "bba15b974c391531bf674093d7e8a359",
"main.dart.js_3.part.js": "ae9a89ddf9f2723ced783d6405693a04",
"main.dart.js_38.part.js": "fdfedb334dcd8891aff5ea4e7989b289",
"main.dart.js_248.part.js": "2eac27c6062ee7b194c7b92e24698243",
"main.dart.js_133.part.js": "0005f718fac7c6da570f8e4b456e56b7",
"main.dart.js_21.part.js": "bc4b5ff63f0e5e0e476d4ccb33c41fcd",
"main.dart.js_188.part.js": "dc17c7cd1abe7b21a65ebc2629b5fd31",
"main.dart.js_24.part.js": "14f4b304565de34ba30b1a73ddf70d7e",
"main.dart.js_90.part.js": "84212bfcaaa2c870907527741a22b5fa",
"main.dart.js_111.part.js": "570a6f20cf1926cf0e3fc85252ff4908",
"main.dart.js_177.part.js": "22f5a191f7155c0ba01b49382d4b0090",
"main.dart.js_85.part.js": "64a55c5d1801df1a78d5911056d838b5",
"main.dart.js_212.part.js": "33eb1a55dc3d6c9f8e46f8178f4797b5",
"main.dart.js_260.part.js": "8088704577f5bfb3f17c486925a0547c",
"main.dart.js_39.part.js": "c19396296f3163df19954d4d4ba7b7fc",
"main.dart.js_185.part.js": "91413af3fcfce5f37d715cb6a00a7ef3",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "bf9bfa8d20d7a99d0ee8fab2537a73c7",
"main.dart.js_171.part.js": "a8bfd578201ea107cdd35f70fe709663",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "8642fd14deebaa5470b95e7c77106340",
"main.dart.js_195.part.js": "dbfc0577927bd6232070c4fcda11fe6e",
"main.dart.js_44.part.js": "1d851c441ed30315ec0463a4d5742bf2",
"main.dart.js_121.part.js": "a741965443d19a6ffc12ae7d52462a23",
"main.dart.js_55.part.js": "f8eaf2b8d568b241816382de2cbff02f",
"main.dart.js_215.part.js": "b0fc2746f48dfe7919c9921b60547c2d",
"main.dart.js_112.part.js": "823fbe875805d0040b04bad346575274",
"main.dart.js_139.part.js": "54be1ee2259aafbc87718dea64cfb341",
"main.dart.js_143.part.js": "01c34d1f888921f1b8c3eec69a3a2b7d",
"main.dart.js_80.part.js": "381cdf05ea5b99cfbebe56645cf0f533",
"main.dart.js_252.part.js": "1fde4db523f1f31f5c2e6e208a6d67ce",
"main.dart.js_279.part.js": "c60ff8dbb7b8d4f72dde7fed4fa0093e",
"main.dart.js_30.part.js": "ffc5b1d97ce1fd1e5ccdf977ed671f07",
"main.dart.js_267.part.js": "c25fb97a667da84eca34c8f197ab85d1",
"main.dart.js_277.part.js": "74bf3f328616265f4736de454b62ef6b",
"main.dart.js_136.part.js": "787b4bfca33d46005d88fc1d048d85ac",
"main.dart.js_168.part.js": "c554aec85e6c3cbc7fcfdcc4b0b81c06",
"main.dart.js_271.part.js": "3a01ef365999d15a762ef9221996b445",
"main.dart.js_59.part.js": "defc7c63f554edfc533df3e53d1e0434",
"main.dart.js_47.part.js": "2d2c7ca0416f0b99e46e4f6f975068da",
"main.dart.js_95.part.js": "f6a0b4e0ec70d9ce80ba1e8f320b1790",
"main.dart.js_29.part.js": "a6a84bad180efcddd1435291522cf516",
"main.dart.js_194.part.js": "75db7e6b9555b1af35146a4adbf64600",
"main.dart.js_58.part.js": "282684a3d760c0ceed31eb6004366cc9",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "ef2d93ab283eef7da1f3fb2e24557351",
"main.dart.js_54.part.js": "e64d65a84338fd8e97f99baf5cbbca90",
"main.dart.js_79.part.js": "8eca9473a001924ae4b03670dbaaee6d",
"main.dart.js_109.part.js": "425ececa2d536be672341e3f45d745a1",
"main.dart.js_92.part.js": "20bc7dfa6d285e04b498433dc9ec69ac",
"main.dart.js_224.part.js": "67c1beb94ea6d43a3ef7d7f211b3f737",
"main.dart.js_223.part.js": "57971df750ca529cddf97309730de868",
"main.dart.js_11.part.js": "008bf470ae04f32cd2b17ba35066314d",
"main.dart.js_125.part.js": "87eb728c73d73e7896f773c1f884897b",
"main.dart.js_131.part.js": "6b6d347edefbfc87eed6899d5b7311ba",
"main.dart.js_226.part.js": "3b7758ed00938ef8b6ecd4f8dfa3b4fe",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "d8dc89e5bb688609511a562ce3fc2ee3",
"main.dart.js_178.part.js": "2e3f4083e5bf14fd0778d6000875521e",
"main.dart.js_100.part.js": "7cb62347475e35c65207966ea927f5ae",
"main.dart.js_258.part.js": "c666c92ed33247cf87c4c7a313c6ab9f",
"main.dart.js_70.part.js": "d83a703ad10a5faf481aa95fcbfeaffe",
"version.json": "70faf377c45367993ff64eda25924431",
"flutter_bootstrap.js": "25040a3afe024f5107f2d2fac80a45cf",
"main.dart.js_191.part.js": "abb59ee00442d68d9f011065942ef789"};
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
