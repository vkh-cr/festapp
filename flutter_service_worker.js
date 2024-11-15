'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "38504a78bd642d3bfa93be2b984940eb",
"main.dart.js_117.part.js": "0262571e3c9cc0b203c89ff16877b194",
"main.dart.js_182.part.js": "36fa85c82f20d9a81aa99cb5d3cb3c3b",
"main.dart.js_75.part.js": "06750bf9f61dbd85e279f2e61847e3eb",
"main.dart.js_244.part.js": "486fd96fd2cbe42ed1cd167def25ca35",
"main.dart.js_83.part.js": "8250ee750f5dff4774125a80a571b362",
"main.dart.js_254.part.js": "e14a1b036ba38ffc29c72f5e446ef2cb",
"main.dart.js_176.part.js": "f2423f637949e18182a65e444ca9de6f",
"main.dart.js_96.part.js": "309a1026300fe0fd203170dd9fa0fb18",
"main.dart.js_245.part.js": "b3f9c1b8d701469b4cb162db48d555c6",
"main.dart.js_87.part.js": "31202a53816f64999f83e84928ad5ac0",
"main.dart.js_251.part.js": "d85ad714a74f602350b2ec231bca25e9",
"main.dart.js_126.part.js": "c919ba645cfe464628f38e7410407646",
"main.dart.js_129.part.js": "735b4c11b13d3fc16b6cda66a4df4183",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_142.part.js": "d806f916c6eb0c08b1c665fa06c9f41d",
"main.dart.js_40.part.js": "fa2b5bc258761ae0834c9dc617b80516",
"main.dart.js_209.part.js": "77ecdfd5d1320c198dfb4f7c9de0add3",
"main.dart.js_115.part.js": "896c5d8bb2b025f4be1ecb1feab1c543",
"main.dart.js_10.part.js": "c9c458d73dc645549edcdbbd14b09944",
"main.dart.js_84.part.js": "58411b7cbf9d2b353b4a80dc8cbcf0d1",
"main.dart.js_122.part.js": "4f3a439d08183f0fe3fc7f6ea8fe0c93",
"main.dart.js_103.part.js": "616ce893aa1f41c496a11d83d146af38",
"main.dart.js_213.part.js": "7ae61244ca8a7bfaf4ae8b8290f1bd68",
"main.dart.js_153.part.js": "a23e5a70dbb78265055e8be9e31c7fd2",
"main.dart.js_41.part.js": "3f84a1d73b6ec4eeeded3a7a42b6636c",
"main.dart.js_89.part.js": "7160a19ee28b322a0a13467bbc07b327",
"main.dart.js_146.part.js": "81c6312e758bfa6f0859a3f8def7db7e",
"main.dart.js_132.part.js": "1135c8e993c32386d9b59bc2539c2001",
"main.dart.js_127.part.js": "5b0b679eb3ce3a541a2b22f6fb9622b0",
"main.dart.js_161.part.js": "f57fd2e76eb7edb8f79d6e4024bf917d",
"main.dart.js_175.part.js": "c975d511bf2e5f35fbf6c9809d1bc97f",
"main.dart.js_239.part.js": "880f86cadbf3aa3bc3df419de3c2132d",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_64.part.js": "49283a7298dd2603a6f00fba66f515e7",
"main.dart.js_169.part.js": "3794bbe739bc5690dfae4311759d6e58",
"main.dart.js_13.part.js": "2cde121c15acae65a77be91f6f205b93",
"main.dart.js_174.part.js": "8b00820145536152e5faddd267e0746a",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "2c37543ec28fd27ff4a29461a830e183",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "d8a862fd8a0fb80d07a035dac6bdc625",
"main.dart.js_31.part.js": "43364cd4d40abb4b75ae8cd5a11761c8",
"main.dart.js_119.part.js": "e2a00498fb16fce60b51f8941d8b8c83",
"main.dart.js_18.part.js": "ae251f96acd479db962092828dc6d937",
"main.dart.js_35.part.js": "7370060c7c1567d1c0ff7b7be6fd2c00",
"main.dart.js_200.part.js": "eea6e210ea6ee7ab3406d759950d3318",
"main.dart.js_101.part.js": "6c9bed00fe8e3a5740aafb358e2fa2ee",
"main.dart.js_77.part.js": "d4b05d00169603525e3a4c39b20705cd",
"main.dart.js_149.part.js": "7eda5d7b1c9411ceda5c4bcd0e579448",
"main.dart.js_208.part.js": "d3122de1e4e47da2a525f9ab45301ffe",
"main.dart.js_82.part.js": "cdfd785ca681a2128e8a6303bf1fc587",
"main.dart.js_173.part.js": "d4e71b7dc5a50e973abf7f78f9a54032",
"main.dart.js_106.part.js": "14d7da6e4bfa2fe4ea74a86900a19467",
"main.dart.js_273.part.js": "1fe2f3a3309eb9bfbe9a9583c94d2465",
"main.dart.js_62.part.js": "4a9def1c6a84741cc7c48dd040815ad0",
"main.dart.js_259.part.js": "48974a02114a4e923f63f057bc0452ce",
"main.dart.js": "c9052e652f3bc0a77c4cd2ed676d41d7",
"main.dart.js_232.part.js": "de728a1b8ae4c5cc967a5b14cb2c189c",
"main.dart.js_124.part.js": "c0f138fe86bcd45a211fd56da4ad9a01",
"main.dart.js_192.part.js": "b889097ed6a3b8c27365b84bb90ca0f5",
"main.dart.js_91.part.js": "2f80fad94d1cade8e0e6cde6cd6a79cb",
"main.dart.js_145.part.js": "876409373b58b23b95add3a9d8b96c44",
"main.dart.js_190.part.js": "06d912fa0ffad9f6d65d1af25189d262",
"main.dart.js_104.part.js": "d0b528146d8506fbec588d3ac4ff891f",
"main.dart.js_201.part.js": "1f79cc7c55ab27033061dcab8503d02b",
"main.dart.js_69.part.js": "f0d30fa4836742b114397babdb0b0214",
"main.dart.js_181.part.js": "d22f075d30aba6552ceb672b31d7eb7a",
"main.dart.js_270.part.js": "594f77d310afd5bb75e0593c7eef8138",
"main.dart.js_33.part.js": "9e29ba861f5c9642490d9f30b5ae32bb",
"main.dart.js_275.part.js": "06d27544c237ab21445126d5c3dd4dde",
"main.dart.js_269.part.js": "0cf78780d73b03aa7b3272b3fc0727d4",
"main.dart.js_34.part.js": "e8c29c883163fb3920e930660e40aa84",
"main.dart.js_210.part.js": "e3bdaba76775676ce3ebf72db4b19f2c",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "5014a1c3087ee02f65e4e9705ab9cddb",
"main.dart.js_88.part.js": "5a5b25ee81a63404e40a16ae9d5ca5d0",
"main.dart.js_202.part.js": "f2926138578c7affbd396d1f63f90113",
"main.dart.js_183.part.js": "a90d1de1c3302481f1952c4172407c4f",
"main.dart.js_203.part.js": "f56d0f6a66a2aa689a85ac1b92087eec",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "b87b53d1bf7f4dddfd88efbe42b13f62",
"main.dart.js_247.part.js": "637f0b78d1c1d247cf640c207f656ae7",
"main.dart.js_7.part.js": "e1f5b4317f175b2422d64cb51e4b8271",
"main.dart.js_140.part.js": "22f6d8ac296c21cfb478520a8e2d6846",
"main.dart.js_228.part.js": "af3399442d51f74bba6ab6a458edcee9",
"main.dart.js_170.part.js": "eef6da223930ab20d879330d8928dd85",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "54fe3f06096d0db2a4d7b149894a4234",
"main.dart.js_27.part.js": "753f951502ca66749cbbab7eaf9cfbb7",
"main.dart.js_156.part.js": "1dc6f84fb4d66baff129dcd2f19a4155",
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
"main.dart.js_155.part.js": "f23c7f42aa08cd477ce2faf40574636b",
"main.dart.js_263.part.js": "de99d2ac0d59457bd7c0639361201a36",
"main.dart.js_220.part.js": "9c666d38aeb215a1f57858a07705788c",
"main.dart.js_25.part.js": "40360930730d30bafe67c3d40f5c8161",
"main.dart.js_141.part.js": "cb65133cb80a1e97c00fa538ed5da0a8",
"main.dart.js_249.part.js": "a6d9495904048c3948bf149523cd1dae",
"main.dart.js_123.part.js": "9182617d085dc2b327430b2abf3c9e25",
"main.dart.js_241.part.js": "cdb19bd17007a949245d825a514f0848",
"main.dart.js_268.part.js": "2d6e785679d0ddedeff17bb81871733a",
"main.dart.js_8.part.js": "107ed4bc802307ccbadb3bea9b099848",
"main.dart.js_198.part.js": "eb765eda3d73fb64481348a9c3c25481",
"main.dart.js_81.part.js": "5cdab9864d1edc1544aa9603b360c790",
"main.dart.js_205.part.js": "d5e51b306f1fe30eab36d5cc6516c32a",
"main.dart.js_9.part.js": "9dac8330ebed25c560b0cd445e02feef",
"main.dart.js_99.part.js": "97a52bef79df07970bf9f359173ae18c",
"main.dart.js_22.part.js": "df25aa777732a2889501ce0154fda9ed",
"main.dart.js_272.part.js": "b22c53733e8b21d78b8277f8e1487f50",
"main.dart.js_242.part.js": "540174c8786ea3bed716bc4fba5c326f",
"main.dart.js_86.part.js": "24f430e7e8f759edc20d046370a6ca57",
"index.html": "57a28fc302027267f8e349668120a2ee",
"/": "57a28fc302027267f8e349668120a2ee",
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
"main.dart.js_118.part.js": "78cb86db261d21b19dbc6d543329f128",
"main.dart.js_262.part.js": "4ffffba186215f7f2c36418294b79b48",
"main.dart.js_26.part.js": "d5ff3298d3441bb8e2a2f5f562622160",
"main.dart.js_240.part.js": "b0e7a0949b0a0846585ec3765b3ddb9e",
"main.dart.js_20.part.js": "72bc90de5f094eb1efd4480f98489a28",
"main.dart.js_189.part.js": "28ba707f6a5877e3ae5dde8f35353aa9",
"main.dart.js_214.part.js": "befef870470bbacf3bbfbb3e3287d442",
"main.dart.js_51.part.js": "b0475aa54690381af0925a5bdf85b6bd",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "3150dbc9613729dbf6ab4785b49d2fff",
"main.dart.js_72.part.js": "605e4e370b596e0231410e6abd3587b2",
"main.dart.js_1.part.js": "54193b18b0197aa8f10f5ac6f7477ba2",
"main.dart.js_120.part.js": "c8f4ba921b4861ade8942fb6208ba06d",
"main.dart.js_63.part.js": "88288cc8aa09763d1a26ec0bd4d3487f",
"main.dart.js_211.part.js": "98b7b6ec6c9bf3bca324566f3d1e5ee1",
"main.dart.js_261.part.js": "92c8c31b6faeceb6fa3754845b09ca4e",
"main.dart.js_12.part.js": "5c501add064b6cf8a25e1e4781529f98",
"main.dart.js_221.part.js": "f6d05aee6aa852428d26b87fb448f7fb",
"main.dart.js_137.part.js": "31920dca278237009be4161eb10672e2",
"main.dart.js_276.part.js": "bfebc243413a9755f6dda50cf2a51f22",
"main.dart.js_28.part.js": "4057f652e032b23bf77c5affcb578f7b",
"main.dart.js_135.part.js": "e1f51d2e8def97d9a395badc521e58b8",
"main.dart.js_256.part.js": "1240ebaaed23fcfb7b748c1e5e14a2cd",
"main.dart.js_237.part.js": "226e0da15938af26718e9a9380415001",
"main.dart.js_138.part.js": "19edaf30a4b0b9de2c1292aaa84b1e42",
"main.dart.js_193.part.js": "678fb08e72cb9084525a7c7e7ac7907d",
"main.dart.js_17.part.js": "4de33ee58279ab69080769d7b76f4ef3",
"main.dart.js_105.part.js": "9450378611741e9c786af78299669e00",
"main.dart.js_206.part.js": "2ebe4853e381d14c30be910d0551708a",
"main.dart.js_231.part.js": "a63f65216dc368e377accf46477b1c04",
"main.dart.js_43.part.js": "2efd5175034898e0232ec1d55756eb82",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "15c134eed96ea2f9105b3b99ae3b07bb",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "dd9789eec79629cab5eddd66de40e142",
"main.dart.js_15.part.js": "a1f9a20df64a5f8c5d9b3c250295e9e3",
"main.dart.js_151.part.js": "840e58270477e9ddb9c6c7418da3ab27",
"main.dart.js_19.part.js": "64f6f2ae7d21ff2f1e423f8c893d9d6d",
"main.dart.js_255.part.js": "48ea9880c188a803c54e2d6be5e034e8",
"main.dart.js_186.part.js": "9ce7fde1d6f7377bdc795bda6a1e5d82",
"main.dart.js_163.part.js": "864d9007c4a92aafcd6b67181c8cf9a6",
"main.dart.js_154.part.js": "464c135212cdc040a6271634f6cffcfd",
"main.dart.js_16.part.js": "b1d44f4ae6ef23e5fae6812627aed60c",
"main.dart.js_250.part.js": "b3141c56e1bab6843ff8de1024da21ac",
"main.dart.js_52.part.js": "3dadd2ca540fc2e1d5c2ff4c53a0ad3a",
"main.dart.js_36.part.js": "3a21b96418b398ad1233dbf711359b64",
"main.dart.js_199.part.js": "bd0e03d1a2f411e7d71bbd605cdd5aa9",
"main.dart.js_253.part.js": "ba5bf9dd5e588c732a0444e652fffe7a",
"main.dart.js_130.part.js": "55745bcad658870db22d2890ce8371ca",
"main.dart.js_238.part.js": "c8ae532d499a7550dd51dbad86f07b44",
"main.dart.js_152.part.js": "1f138f3316f1335fd923ab3616ceaca4",
"main.dart.js_32.part.js": "5ed93b8b20592ef1e17d04d574d68351",
"main.dart.js_56.part.js": "89a0577b0fd84c4d51284c46ae6afd8f",
"main.dart.js_227.part.js": "bba15b974c391531bf674093d7e8a359",
"main.dart.js_3.part.js": "f86cfa5cf931e1be249a3e9ec9c4686b",
"main.dart.js_38.part.js": "fdfedb334dcd8891aff5ea4e7989b289",
"main.dart.js_248.part.js": "2eac27c6062ee7b194c7b92e24698243",
"main.dart.js_133.part.js": "0005f718fac7c6da570f8e4b456e56b7",
"main.dart.js_21.part.js": "bc4b5ff63f0e5e0e476d4ccb33c41fcd",
"main.dart.js_188.part.js": "1cc3a2d22542cc6aacf122516ddf91b7",
"main.dart.js_24.part.js": "48d6437a5091576eb6e56439a1d91dda",
"main.dart.js_90.part.js": "84212bfcaaa2c870907527741a22b5fa",
"main.dart.js_111.part.js": "a79ea4819b51a17d5795de17a10d1697",
"main.dart.js_177.part.js": "22f5a191f7155c0ba01b49382d4b0090",
"main.dart.js_85.part.js": "ba260354db32217b2a96647be13d1e25",
"main.dart.js_212.part.js": "33eb1a55dc3d6c9f8e46f8178f4797b5",
"main.dart.js_260.part.js": "8088704577f5bfb3f17c486925a0547c",
"main.dart.js_39.part.js": "c19396296f3163df19954d4d4ba7b7fc",
"main.dart.js_185.part.js": "91413af3fcfce5f37d715cb6a00a7ef3",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "e226bd1fb61489ea5f8b1998ec073653",
"main.dart.js_171.part.js": "a8bfd578201ea107cdd35f70fe709663",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "d97436427d81ee4bb3be673c5a5dea01",
"main.dart.js_195.part.js": "dbfc0577927bd6232070c4fcda11fe6e",
"main.dart.js_44.part.js": "4eca7cc33979f0b96638b6772963afb3",
"main.dart.js_121.part.js": "a741965443d19a6ffc12ae7d52462a23",
"main.dart.js_55.part.js": "f8eaf2b8d568b241816382de2cbff02f",
"main.dart.js_215.part.js": "b0fc2746f48dfe7919c9921b60547c2d",
"main.dart.js_112.part.js": "823fbe875805d0040b04bad346575274",
"main.dart.js_139.part.js": "54be1ee2259aafbc87718dea64cfb341",
"main.dart.js_143.part.js": "707dcd6c454de8149316c6dcdfe1e96d",
"main.dart.js_80.part.js": "381cdf05ea5b99cfbebe56645cf0f533",
"main.dart.js_252.part.js": "1fde4db523f1f31f5c2e6e208a6d67ce",
"main.dart.js_279.part.js": "baacd9a4f5acaae9c22e8f1778718aff",
"main.dart.js_30.part.js": "c1e202b520c3a06b4cff278afb119f7e",
"main.dart.js_267.part.js": "cb9b0894470ca582543693d46aa7fcb3",
"main.dart.js_277.part.js": "7f7113eac22ff43b3201e04d040da081",
"main.dart.js_136.part.js": "27085ec25e93833cf323e71b0c7f8c59",
"main.dart.js_168.part.js": "c554aec85e6c3cbc7fcfdcc4b0b81c06",
"main.dart.js_271.part.js": "3a01ef365999d15a762ef9221996b445",
"main.dart.js_59.part.js": "defc7c63f554edfc533df3e53d1e0434",
"main.dart.js_47.part.js": "304ca0177110d2b2a855d4b4df474bd9",
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
"main.dart.js_223.part.js": "d6a266372371bd4a7c625fb6595584ed",
"main.dart.js_11.part.js": "6228fd374b272118b89d0989f73f8c6e",
"main.dart.js_125.part.js": "87eb728c73d73e7896f773c1f884897b",
"main.dart.js_131.part.js": "0c9f45f3faaae7836a37c7f3baab5a06",
"main.dart.js_226.part.js": "3b7758ed00938ef8b6ecd4f8dfa3b4fe",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "d8dc89e5bb688609511a562ce3fc2ee3",
"main.dart.js_178.part.js": "2e3f4083e5bf14fd0778d6000875521e",
"main.dart.js_100.part.js": "0205891a1beb244ef35f83834548572d",
"main.dart.js_258.part.js": "7099ccb3b5dcecde2e1aa5f575367a5c",
"main.dart.js_70.part.js": "e3d5f021d9ddf5a27ee9f0a2802f6996",
"version.json": "70faf377c45367993ff64eda25924431",
"flutter_bootstrap.js": "cebb90af2174cad4bbdf6eac891aa2a1",
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
