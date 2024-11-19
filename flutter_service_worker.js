'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "f0f3868f51eb72161cb7f7d042516860",
"main.dart.js_117.part.js": "8d76322b5f3da37aebed3a244ea2e8d6",
"main.dart.js_182.part.js": "3ee69c2f8cb2c348906a0b4125fb05a4",
"main.dart.js_75.part.js": "19da8cae6cb5982f5e9877fdc3ffe3f8",
"main.dart.js_289.part.js": "235175d9a928ca5fee5aebbda7002362",
"main.dart.js_83.part.js": "464bd202f10ca83099d806461e6b5689",
"main.dart.js_254.part.js": "ce5d12b34480fc6df9db5c42d76f61c5",
"main.dart.js_96.part.js": "fee2316675eb7420597028f2de465e74",
"main.dart.js_245.part.js": "acf1b6512d54997d540f6456c5c46897",
"main.dart.js_87.part.js": "2961ac2afde9e64ec15ab2d3c653955a",
"main.dart.js_285.part.js": "a6ecc40621f7efe2dd191b1ad76aba78",
"main.dart.js_251.part.js": "db953d49cef0f371e1c76b74e6813d56",
"main.dart.js_126.part.js": "168e60a11c2c6f8a86038f7c2b85c690",
"main.dart.js_129.part.js": "f8e1b00189e9d1e5961ed4d94b975351",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_218.part.js": "a85943c0c81ce390058ce1bc61ff2ba4",
"main.dart.js_172.part.js": "307972b9a235d06e11f0c8ec32cfaab7",
"main.dart.js_142.part.js": "6709c0bc688fc5dc70078ab7889d4585",
"main.dart.js_209.part.js": "55951b10804bc1410f3d68a12bfeea07",
"main.dart.js_10.part.js": "344f275753acc1e366e90e9f268d7f77",
"main.dart.js_84.part.js": "737131e7675199f4971466e58b447872",
"main.dart.js_122.part.js": "54c35344c9008732dc6601ae069376f5",
"main.dart.js_103.part.js": "60bbbe5d1628833d49da1c8520896ae0",
"main.dart.js_230.part.js": "8bc577fe7bb5eb1e401dedac937c67d1",
"main.dart.js_213.part.js": "0ac042d97862443529bc326a959edb55",
"main.dart.js_153.part.js": "79f0523169986be0b028322da862ab51",
"main.dart.js_41.part.js": "d810d54e68e6cbe4d325b5b8cad7535b",
"main.dart.js_89.part.js": "8c51cd7a772b1097eca5255c6532cccd",
"main.dart.js_37.part.js": "748e6d74df0f30ddf20f3813589a9a51",
"main.dart.js_287.part.js": "910b3d25a886823f8d71f601df5f43d4",
"main.dart.js_283.part.js": "7848a9996a9b3c83178a3d32e2733812",
"main.dart.js_132.part.js": "19afbdf5640f19be5b9e81a118bd9d74",
"main.dart.js_165.part.js": "149ccb87068ad376a262f24f7aa3f36e",
"main.dart.js_282.part.js": "121269ed517d88ce49808c5de0be582f",
"main.dart.js_127.part.js": "3597bffb387bad5d4fa2fc292341ebfc",
"main.dart.js_175.part.js": "91ba066fa35197581c788eb13cd3fecd",
"main.dart.js_239.part.js": "d6947714315686a2f8a1cc9aa408c683",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "1ebf2dde9748c39ed1f81c5bb15edff2",
"main.dart.js_216.part.js": "d579161764af8e0c074b471090b30ea5",
"main.dart.js_64.part.js": "4c5366c51a155c5701ed0c4974a304fe",
"main.dart.js_13.part.js": "8e75facd89b39c4b50fe04ee977413ea",
"main.dart.js_246.part.js": "35b17c5f35d07255d6eb261fdf87080d",
"main.dart.js_174.part.js": "fc28d833cc84189f88ee27302095b3c9",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "327b5c75a00f8138095756db19179da8",
"main.dart.js_144.part.js": "c548661c05b3e9c1c3d37d406c4e5d67",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "0f1404bceaf0066c42f182fffbf0b046",
"main.dart.js_265.part.js": "2fd3e34f9428cb826726e49df0ad0100",
"main.dart.js_31.part.js": "0beed5ac4901b152545eddaa49e64d7e",
"main.dart.js_119.part.js": "d1cb04e68b4acc143cf23f4ba4db14f7",
"main.dart.js_294.part.js": "e8bbf676f6019df312293835b0cc6e8e",
"main.dart.js_18.part.js": "93123275ef936a25ce8981fa02809946",
"main.dart.js_35.part.js": "b1f346818e707f189a79eb28467589a2",
"main.dart.js_200.part.js": "699fdb3bf06b68e0d4b85d8eb5c7a6ac",
"main.dart.js_73.part.js": "8eb18dac2d503ed934394f2898f6ffe6",
"main.dart.js_77.part.js": "08b1419f4537fb34ff1b8eba2e2194a3",
"main.dart.js_149.part.js": "ed80c53b3f67a3778f96989bcb0c7a0f",
"main.dart.js_67.part.js": "40a8769026b5108d955230aebbc81646",
"main.dart.js_208.part.js": "633c497728805849b797185193bac12b",
"main.dart.js_82.part.js": "8767469fe2d788970266f1dcbd03c50a",
"main.dart.js_173.part.js": "2743a9b5d2428a0474d8e9d0ac37a7ae",
"main.dart.js_291.part.js": "3841e6f27b513f8ab6c067f55e443249",
"main.dart.js_273.part.js": "ce4c4229c3b03d90baf9a1f4d7307d30",
"main.dart.js_62.part.js": "eeef9349052f88b7cd17fe79084c0382",
"main.dart.js_259.part.js": "7b69774e2fb072f3d57f53b209ed728f",
"main.dart.js_207.part.js": "d88919d239f470c861c0c5ba1275d62c",
"main.dart.js_278.part.js": "3ec923619d1f5ebf0e024cd8cac2b107",
"main.dart.js": "1cab9c6860c79263ed01139097d03675",
"main.dart.js_222.part.js": "7154338e2489e698fac1d8c9a1e873c1",
"main.dart.js_148.part.js": "d438ce8d6f89d3795bc9b532048b52a2",
"main.dart.js_293.part.js": "368e2c51f0b1b32de58836084dd71320",
"main.dart.js_124.part.js": "cbaaec4fdc6057ea236f36d8c22fcd0d",
"main.dart.js_50.part.js": "9eabcd605d622e1548282550752e95ae",
"main.dart.js_97.part.js": "5034b9a1b050050a7e96d38251a7bfcc",
"main.dart.js_57.part.js": "5f0eecb054bc604b9ca3133c998a5181",
"main.dart.js_190.part.js": "2607a7809f1362da55333a06d534c0d7",
"main.dart.js_104.part.js": "239d89545fdba4dc05d7356e1b9b0abb",
"main.dart.js_201.part.js": "da604df91df3c79ffed794ffe4b88aab",
"main.dart.js_196.part.js": "76effa6b4f25d378c9a08a310348df28",
"main.dart.js_181.part.js": "04db1a2b0e451fedcd222dcb0fb52682",
"main.dart.js_270.part.js": "e86ca645838ece15dc121a269fc220ad",
"main.dart.js_108.part.js": "969fabfdff15bbad772ced2406261693",
"main.dart.js_33.part.js": "9af9ade1b0be7745d9bdc4ce3ab04a5c",
"main.dart.js_217.part.js": "bf995165c892afffaa7a12bcf99c2c84",
"main.dart.js_34.part.js": "a8124a1c38301f9d66941dc7156e0bf4",
"main.dart.js_210.part.js": "0213e6852f9c5be1e2d2847c093b05bc",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "0fd913d491639809d2cd4360891b037c",
"main.dart.js_88.part.js": "a966a6943f0ec3626060be4447fcdd23",
"main.dart.js_183.part.js": "85262f52127fd6ddc17a3d85e2019f2a",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "6f1f0d026cd521099e01f44b3a351f1f",
"main.dart.js_7.part.js": "da4c3b22f90db0c9b04d228d68964750",
"main.dart.js_140.part.js": "f61b778119bffd15b7713b4643aef57f",
"main.dart.js_228.part.js": "d8633632b74d290ea4470eb682a2eaa4",
"main.dart.js_170.part.js": "f839b2aaa091a2ea44473b7bc70f2de9",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "6bb4b9aec6fbec6eff1770d8725b211f",
"main.dart.js_27.part.js": "693ba4368286075403a4a652c351698d",
"main.dart.js_156.part.js": "187b710a147061e4946d5d62cdc45070",
"main.dart.js_4.part.js": "7640877c96a33acad08905a87effa046",
"main.dart.js_219.part.js": "3cebbdbf6c7629ec5bedd7f4fb10484e",
"main.dart.js_116.part.js": "90552f357da343311c0247d7d6a63ab2",
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
"assets/assets/translations/uk.json": "b0885650d5aa0989d6d4b5f423871096",
"assets/assets/translations/pl.json": "0e67b8111b202f3dbb13cb38f58cdc39",
"assets/assets/translations/sk.json": "2f27c6227ccc74f4d22567ac38c95143",
"assets/assets/translations/en.json": "ea202e1c3fc48234e83c59a320bf4ae7",
"assets/assets/translations/cs.json": "36aa63bda909064ed280a4b74a687513",
"assets/assets/translations/de.json": "c7c6906e8eb5a527ef9bb5d9043bd795",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "21092cee812eaca83f55eb5e54aecf0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "3f897fec1a5f190d9c0bf71d8a0f58ec",
"main.dart.js_60.part.js": "ddfd7b330fdfdf8d7f9649a1e5fafa7f",
"main.dart.js_263.part.js": "4b742d9d8ca5e935bf65c310003f9842",
"main.dart.js_220.part.js": "e00e7bf63e3496c79568ac5efb28423e",
"main.dart.js_25.part.js": "049860f32f7f9a87ac60beb65d75b980",
"main.dart.js_288.part.js": "885b7b4df600157f92821f193e42a2a3",
"main.dart.js_141.part.js": "3ff2937e7998c11c17340c2c813377f0",
"main.dart.js_249.part.js": "f860bec6db131aeb08679c03fb0d0de9",
"main.dart.js_268.part.js": "a4dc6cfc39269901e24cfe4472301679",
"main.dart.js_8.part.js": "01680cd35e458079168b80dd6d34475e",
"main.dart.js_198.part.js": "199fc49e665f62b2c92233617e647b04",
"main.dart.js_81.part.js": "ddaf6c47eaec4f138ef1e251c7cf6ace",
"main.dart.js_205.part.js": "39d7004719cf7b68e450e13e09339ac0",
"main.dart.js_280.part.js": "d3d86eca3263dc4016b0053f62441d41",
"main.dart.js_9.part.js": "1fca2707e1c8c35a8d3bbe759e3e3c11",
"main.dart.js_99.part.js": "2c6f574ef7d435015eaeb54c99a92a37",
"main.dart.js_272.part.js": "9c90c78d5bb101b7e72afedfeeda97cb",
"main.dart.js_242.part.js": "c55cd35367ffca7be51fc080936711ca",
"main.dart.js_86.part.js": "004e6ca29838024515c8ea36242edbf0",
"main.dart.js_23.part.js": "d1bf2cfa86e46b15d99613152b900ffd",
"index.html": "1b6aec5df7f4fc596d0a2c03e2e61438",
"/": "1b6aec5df7f4fc596d0a2c03e2e61438",
"main.dart.js_94.part.js": "9ef250f57eeb2e556dec6f2d25d7e7b9",
"main.dart.js_98.part.js": "f06cb58a150ce39edc3b0911872b17f6",
"main.dart.js_53.part.js": "26e87725cd0831ae12aabbb728d39a80",
"main.dart.js_235.part.js": "e44d621819405db975e280d73eb0b3f0",
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
"main.dart.js_286.part.js": "640ffbb2f7dcf8d5cb2fe81b0b0caabe",
"main.dart.js_118.part.js": "1b75944a617e5878183f25388f8a854d",
"main.dart.js_262.part.js": "5b801517b93c0c6093cc070041ad2949",
"main.dart.js_26.part.js": "aab4d948c7b318b77ab6197618341f9d",
"main.dart.js_240.part.js": "050583a8f813255a537603487e8e6458",
"main.dart.js_20.part.js": "bedf97e32e3d58b44cbe28558af39560",
"main.dart.js_189.part.js": "b09993fe4954b2dd1838b7ae97ec707b",
"main.dart.js_214.part.js": "6464e59f73e6d65f1db5a3490319ad16",
"main.dart.js_51.part.js": "4104c2c85b7da960edcb8dbeda3b556c",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "f8d2a6305da737e997bf12c64ca15f46",
"main.dart.js_290.part.js": "4c7be365e7563f683d3115bbe45db0e6",
"main.dart.js_1.part.js": "9171fdb33a0857d637414e74e148eb93",
"main.dart.js_120.part.js": "eacffaa2580f43021e1ef4cd51694a9b",
"main.dart.js_45.part.js": "59442489da9ece6f8bdd8699fad3d9e5",
"main.dart.js_261.part.js": "14d1a139eca117b69d37aae9ab069f76",
"main.dart.js_295.part.js": "ca0064a07b0cffaafb7ac7562ab26ddf",
"main.dart.js_12.part.js": "e9ddf6c79c3c215fbbad80099895fcde",
"main.dart.js_157.part.js": "c0457130d66841be56e7c0a44460d8f2",
"main.dart.js_221.part.js": "09a78b9b92f04ffba3beb1d53fa08c19",
"main.dart.js_137.part.js": "d8156288eb0f442d5e689e9206134cda",
"main.dart.js_28.part.js": "af77a866413662a2ada28db60a4c516b",
"main.dart.js_135.part.js": "72f0abd1dd52f0563f52cfe80194fc43",
"main.dart.js_256.part.js": "fa3e6f69b79dbcb0a7b5b6764418737c",
"main.dart.js_138.part.js": "bd4ee67a58340a5fe84d7589c3534ae0",
"main.dart.js_193.part.js": "4510c5e9bcb94b03813b820a23dbed3a",
"main.dart.js_17.part.js": "405a31ffec629423d2a69018c59eb3de",
"main.dart.js_105.part.js": "51129330ad35aa0bef597d27ba22f0a2",
"main.dart.js_206.part.js": "aa642895c008d2ad231b806ec5a8dc52",
"main.dart.js_231.part.js": "5198bf0663b85282ba25944c322899ff",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "19f3b5bc16bccff87eec03c299b2ecda",
"main.dart.js_292.part.js": "b2b5dcf9b87b257a0dd2c8385260778d",
"main.dart.js_15.part.js": "d5a4108ae2eccaff721b5f4edb476b31",
"main.dart.js_151.part.js": "40cb73d9a336b0d971e3e8328eae9d61",
"main.dart.js_19.part.js": "4d8b016fc64623e9fd0ee0d97739f981",
"main.dart.js_284.part.js": "08bae963632ad7a3369f6e77aa225592",
"main.dart.js_186.part.js": "7ff7afecd831ef4ff113cad03b6b3a28",
"main.dart.js_163.part.js": "9024db13e4b0c03af6e7c1de04f04dc3",
"main.dart.js_154.part.js": "0a923df65a4af95ba1adc9527cafabea",
"main.dart.js_257.part.js": "d39302a3a616745b8fe837010cee35f5",
"main.dart.js_42.part.js": "f60ca7cd32dd70e34922120a261276de",
"main.dart.js_16.part.js": "2c42f0a39e11007e7ea54c9b56e60617",
"main.dart.js_250.part.js": "0e61aaf33dda6557abb39847bcfcba90",
"main.dart.js_52.part.js": "7287d2b5f9e1a7dc434ffc2fe9842892",
"main.dart.js_36.part.js": "355f41e4efc83f0d22f96e03f04e4ae1",
"main.dart.js_199.part.js": "04376426e968466a6d64c5627fec46ac",
"main.dart.js_253.part.js": "0933f4c3c33693c535c64ebd58db22e5",
"main.dart.js_130.part.js": "64ae3b3a8b81d7ce1da7c75c98e87aee",
"main.dart.js_152.part.js": "ac411faba7224faa8ae8bf821ba05861",
"main.dart.js_32.part.js": "d82c8fa04bdf3bbfca89c6c1a6b990a5",
"main.dart.js_197.part.js": "26988e09b71b6a42c2958ded599bf8c7",
"main.dart.js_56.part.js": "2e3c01d2b51586a581af2df16430d2b2",
"main.dart.js_227.part.js": "d34cd59552d2022dff2eebac6a5716a2",
"main.dart.js_3.part.js": "ca0ae9840f14e28cc402a25c9d271ea7",
"main.dart.js_68.part.js": "f2c4dfb53c07041bf73ff7aa5a58a02c",
"main.dart.js_38.part.js": "732cb849beb10fa53d5d796565c064eb",
"main.dart.js_248.part.js": "8b64269b2c6882950e5ab287b6f2f841",
"main.dart.js_133.part.js": "612d8fc3126bdee8cfbfe3fb40fc86d3",
"main.dart.js_21.part.js": "6c6de0efd2985f5b9d244d206deda653",
"main.dart.js_188.part.js": "9d875c078bb384ee3b42346b8d1d09bb",
"main.dart.js_24.part.js": "124420e3b8acd5b42fd352f93ca84b75",
"main.dart.js_90.part.js": "f498559eec99e47dd2eaa3764ebee24a",
"main.dart.js_111.part.js": "7b690e9d51de3d9f1bfbc92490b816a8",
"main.dart.js_177.part.js": "1d2fdecf2ecb46cc12714bf47e08749c",
"main.dart.js_85.part.js": "0298a1d642b55cd4d6613287e76f4dbb",
"main.dart.js_243.part.js": "bf9dc5a9b2344dc263f0b76c736358ac",
"main.dart.js_212.part.js": "84304bd31b81dc594599d450e6eb6059",
"main.dart.js_260.part.js": "e46069443005c63d7ce11cde4f3e01c2",
"main.dart.js_114.part.js": "423d96513f3ad809becd0c396a2a4cb8",
"main.dart.js_39.part.js": "4f35355ff9dbb931a7d4b00d2a1b9a64",
"main.dart.js_49.part.js": "2fc4e54ebea5d5cb2481b1d53f87788f",
"main.dart.js_185.part.js": "332a1b3c617bc3fd7ad7c15fe61a1845",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "49d9e6049dc74290e3e4011c06407c85",
"main.dart.js_171.part.js": "556017816059237784287b2cdc5d65d4",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "9c9845563cea581a02ec09534025d8ef",
"main.dart.js_195.part.js": "f08c82f0275ff3fc0afc80f9d00ca64e",
"main.dart.js_121.part.js": "3042bac0258a0fc7abfd6a1cf9e52ec2",
"main.dart.js_139.part.js": "4fa4fde1c350de83ec5b19fbc6679a11",
"main.dart.js_143.part.js": "a16f20186859b62bf0154d0e9cd4a8c3",
"main.dart.js_80.part.js": "a66a8f44bd38aeae67d3017d1cf0dc04",
"main.dart.js_252.part.js": "a6aa1152143439e45203f249930827fe",
"main.dart.js_233.part.js": "edf05c0ce6e338f27687af60c25ee723",
"main.dart.js_30.part.js": "7a24252507cef124fe4c8ec042276b3d",
"main.dart.js_267.part.js": "912d2cbc6c50024db8891d4037e0da2e",
"main.dart.js_277.part.js": "ee776045397dcc78e4faba98ec1e5397",
"main.dart.js_78.part.js": "ba6c1d91ca8f89d6df1d206bdcc01d89",
"main.dart.js_136.part.js": "f05d8086d001780facb36cd10068a593",
"main.dart.js_271.part.js": "3f518929a415012f417fa5d413056b7f",
"main.dart.js_59.part.js": "fc9d5988933e19ee483ebc55f9f3f716",
"main.dart.js_29.part.js": "2409e773aa2000473914c7dfc1a5d96c",
"main.dart.js_194.part.js": "2ea072fd56297ddbdca4bf62540c898a",
"main.dart.js_61.part.js": "09e82bb2bec5f8b634aec310bd58f541",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "f1c4c18f5143b52624672fd95ff1682c",
"main.dart.js_54.part.js": "a77d78714df7f5d546c8d15848c68b42",
"main.dart.js_79.part.js": "c76896c80296fd924df2b3d9431ca2fe",
"main.dart.js_109.part.js": "a1b005f7c111f6bd0cef0d2cb3ccb4f3",
"main.dart.js_93.part.js": "2cdb17cbd1dbc5a84328fd0a23d014e3",
"main.dart.js_11.part.js": "d32a8e3e83338590048a3df01d91e89e",
"main.dart.js_125.part.js": "1a269899a67981ab864a68406d02d345",
"main.dart.js_131.part.js": "f737aafa58755c8c2267f823b1d86228",
"main.dart.js_226.part.js": "448dab33e914daafaed2db1cd8a28032",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_178.part.js": "c723049ac4363d399f224475b6c59178",
"main.dart.js_100.part.js": "b20d5f736f7d638fe25e305c366a6ec9",
"main.dart.js_70.part.js": "c6b12b00e0979a04a1b9aa4abff459bd",
"main.dart.js_187.part.js": "3565729dfe0faed05fec741e200dcecf",
"version.json": "38740d36ce5dd8136ecf6fdd6dd84737",
"main.dart.js_264.part.js": "87d29a3e8b9468357801e03f7a0e9e7a",
"flutter_bootstrap.js": "391d61312c9c83e200c678e03ba48922",
"main.dart.js_191.part.js": "9fbdd7b13a37fa97e6a4067e4ccd1cf1"};
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
