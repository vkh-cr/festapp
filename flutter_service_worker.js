'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "7235479461c5a727f530e4e29890c22e",
"main.dart.js_117.part.js": "8d76322b5f3da37aebed3a244ea2e8d6",
"main.dart.js_182.part.js": "c803ce18427a33bc64c0381ea77cf3fd",
"main.dart.js_75.part.js": "63b83923fb14cbe29edcb39a583e7279",
"main.dart.js_289.part.js": "786e9cec3707e0a8504dc63c09c9e9a2",
"main.dart.js_83.part.js": "741eea115c80ad4d55b4e1cbceb990c2",
"main.dart.js_254.part.js": "ce5d12b34480fc6df9db5c42d76f61c5",
"main.dart.js_96.part.js": "fee2316675eb7420597028f2de465e74",
"main.dart.js_245.part.js": "acf1b6512d54997d540f6456c5c46897",
"main.dart.js_87.part.js": "2961ac2afde9e64ec15ab2d3c653955a",
"main.dart.js_285.part.js": "a6ecc40621f7efe2dd191b1ad76aba78",
"main.dart.js_251.part.js": "db953d49cef0f371e1c76b74e6813d56",
"main.dart.js_126.part.js": "168e60a11c2c6f8a86038f7c2b85c690",
"main.dart.js_129.part.js": "f8e1b00189e9d1e5961ed4d94b975351",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_218.part.js": "146c8536b5bafe061dd3e1fcec8a5b6c",
"main.dart.js_172.part.js": "961a3329a591adad67791c42fd55f7fc",
"main.dart.js_142.part.js": "704445a283b618ae40edc0f88795cd1a",
"main.dart.js_209.part.js": "55951b10804bc1410f3d68a12bfeea07",
"main.dart.js_10.part.js": "344f275753acc1e366e90e9f268d7f77",
"main.dart.js_84.part.js": "341dc2253bdeab25ff48675853d08a90",
"main.dart.js_122.part.js": "3320ef5355dca9f4b77a1400c71eef64",
"main.dart.js_103.part.js": "60bbbe5d1628833d49da1c8520896ae0",
"main.dart.js_230.part.js": "71cb417a17035c14ae17b4abca443b0a",
"main.dart.js_213.part.js": "0ac042d97862443529bc326a959edb55",
"main.dart.js_153.part.js": "789a6f34291ad024ec2e9601a089a752",
"main.dart.js_41.part.js": "917790d8d961ca87a488584360fd98f9",
"main.dart.js_89.part.js": "d26ce763e635002b7270898a0a17f9cc",
"main.dart.js_37.part.js": "748e6d74df0f30ddf20f3813589a9a51",
"main.dart.js_287.part.js": "23992825b5446f8d3353e65c092964b2",
"main.dart.js_283.part.js": "a7864c7e3fdb59f6f596f6454dcaa4d7",
"main.dart.js_132.part.js": "80b5744d2d605674e5cb32e3618a6e13",
"main.dart.js_165.part.js": "149ccb87068ad376a262f24f7aa3f36e",
"main.dart.js_282.part.js": "540ab31d8f420b0e829f26b87967b8e6",
"main.dart.js_127.part.js": "3597bffb387bad5d4fa2fc292341ebfc",
"main.dart.js_175.part.js": "8fd86f8c92fd217c7f312edbdde1f4df",
"main.dart.js_239.part.js": "d6947714315686a2f8a1cc9aa408c683",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "1ebf2dde9748c39ed1f81c5bb15edff2",
"main.dart.js_216.part.js": "d579161764af8e0c074b471090b30ea5",
"main.dart.js_64.part.js": "4c5366c51a155c5701ed0c4974a304fe",
"main.dart.js_13.part.js": "c4117c75f41b595ab9478f3b3d7c820a",
"main.dart.js_246.part.js": "d6d73e971d42d9b10dbdc6ac80529242",
"main.dart.js_174.part.js": "fc28d833cc84189f88ee27302095b3c9",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "2ac921ed9a37e43faf020e72cd630437",
"main.dart.js_144.part.js": "bcc1896ef020ef91f439d4dbd609c2f3",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "ffcffeb795255ce506ad4fc99581ee96",
"main.dart.js_265.part.js": "2fd3e34f9428cb826726e49df0ad0100",
"main.dart.js_31.part.js": "0beed5ac4901b152545eddaa49e64d7e",
"main.dart.js_119.part.js": "cfbf76d8ebcbf43a8ce3d943e6b5cba0",
"main.dart.js_294.part.js": "677938bd6ea195825d500acca1ab4389",
"main.dart.js_18.part.js": "93123275ef936a25ce8981fa02809946",
"main.dart.js_35.part.js": "b1f346818e707f189a79eb28467589a2",
"main.dart.js_200.part.js": "699fdb3bf06b68e0d4b85d8eb5c7a6ac",
"main.dart.js_73.part.js": "8eb18dac2d503ed934394f2898f6ffe6",
"main.dart.js_77.part.js": "08b1419f4537fb34ff1b8eba2e2194a3",
"main.dart.js_149.part.js": "f4cf8a2c68a76159e6dcedaa74a8041c",
"main.dart.js_67.part.js": "7cdb033197b6f993449017d9e5c1c6b5",
"main.dart.js_208.part.js": "284019c4b8b21f21a1b0e6de0291740f",
"main.dart.js_82.part.js": "c5dd2934a0dbe89747c2d6ef8849f63f",
"main.dart.js_173.part.js": "2743a9b5d2428a0474d8e9d0ac37a7ae",
"main.dart.js_291.part.js": "3841e6f27b513f8ab6c067f55e443249",
"main.dart.js_273.part.js": "ce4c4229c3b03d90baf9a1f4d7307d30",
"main.dart.js_62.part.js": "7de037f29f31b687e71b36394a97d61f",
"main.dart.js_259.part.js": "8aa0e04514aeaac465ca7d96aad80d32",
"main.dart.js_207.part.js": "8a7822e2e54be1718aa5ab13bb1392d2",
"main.dart.js_278.part.js": "3ec923619d1f5ebf0e024cd8cac2b107",
"main.dart.js": "ec990442b12d389d77c1ac36aeda689a",
"main.dart.js_222.part.js": "7154338e2489e698fac1d8c9a1e873c1",
"main.dart.js_148.part.js": "d438ce8d6f89d3795bc9b532048b52a2",
"main.dart.js_293.part.js": "6f39b11acb80fe5f1ddb49f4648db998",
"main.dart.js_124.part.js": "cbaaec4fdc6057ea236f36d8c22fcd0d",
"main.dart.js_50.part.js": "968081eb05f4a90a295beb5b92404294",
"main.dart.js_97.part.js": "c2bf2399e07292dfb40650116644e3f7",
"main.dart.js_57.part.js": "012febc1b10e84c77eae3d53fa64364b",
"main.dart.js_190.part.js": "2607a7809f1362da55333a06d534c0d7",
"main.dart.js_104.part.js": "239d89545fdba4dc05d7356e1b9b0abb",
"main.dart.js_201.part.js": "da604df91df3c79ffed794ffe4b88aab",
"main.dart.js_196.part.js": "17bfa2c69a38818c71fdb4c822c8da67",
"main.dart.js_181.part.js": "04db1a2b0e451fedcd222dcb0fb52682",
"main.dart.js_270.part.js": "6529a104e4d967025b692539b5fad769",
"main.dart.js_108.part.js": "969fabfdff15bbad772ced2406261693",
"main.dart.js_33.part.js": "3677918cf3a80f8fd65cd55f6cf1fcef",
"main.dart.js_217.part.js": "bf995165c892afffaa7a12bcf99c2c84",
"main.dart.js_34.part.js": "a8124a1c38301f9d66941dc7156e0bf4",
"main.dart.js_210.part.js": "0213e6852f9c5be1e2d2847c093b05bc",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "0fd913d491639809d2cd4360891b037c",
"main.dart.js_88.part.js": "4011821a52556df7c85658dedab9b796",
"main.dart.js_183.part.js": "85262f52127fd6ddc17a3d85e2019f2a",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "6f1f0d026cd521099e01f44b3a351f1f",
"main.dart.js_7.part.js": "da4c3b22f90db0c9b04d228d68964750",
"main.dart.js_140.part.js": "f61b778119bffd15b7713b4643aef57f",
"main.dart.js_228.part.js": "70b714c71744d3c50bcb14c879f51f58",
"main.dart.js_170.part.js": "e11045756a1445056db497e9ab8f8b89",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "4eef7d15b314b2672839d29d5be020ba",
"main.dart.js_27.part.js": "f3aa9883f9007d4aab8a193aae5540bd",
"main.dart.js_156.part.js": "6d75a9fbe7b23b35dc1226111d812338",
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
"assets/assets/translations/uk.json": "f02b23469814d8fd650101e77bd965a9",
"assets/assets/translations/pl.json": "b6af45f0151705e312b299dc17cdc228",
"assets/assets/translations/sk.json": "8dbbceb0e8dad985e22bc5b3a8c3f07f",
"assets/assets/translations/en.json": "2bb3479244b8f75df250945a7e8ecc4a",
"assets/assets/translations/cs.json": "49dc8cc0fcefde66cff77a43b0f490c0",
"assets/assets/translations/de.json": "b0fee6b924388e948fdfbcdce4b9abd8",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "21092cee812eaca83f55eb5e54aecf0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "3f897fec1a5f190d9c0bf71d8a0f58ec",
"main.dart.js_60.part.js": "ddfd7b330fdfdf8d7f9649a1e5fafa7f",
"main.dart.js_263.part.js": "5a68b74c6638801a2b4ac9ca9a3e7d83",
"main.dart.js_220.part.js": "b9f52cdf2b602781160271e983f108ea",
"main.dart.js_25.part.js": "049860f32f7f9a87ac60beb65d75b980",
"main.dart.js_288.part.js": "dc8413fa7257da4cc48f200ff525d37d",
"main.dart.js_141.part.js": "82b96437e36d10e902be3a2afb31316c",
"main.dart.js_249.part.js": "f860bec6db131aeb08679c03fb0d0de9",
"main.dart.js_268.part.js": "a4dc6cfc39269901e24cfe4472301679",
"main.dart.js_8.part.js": "01680cd35e458079168b80dd6d34475e",
"main.dart.js_198.part.js": "e72185a7f69d027935873e659b0d2d19",
"main.dart.js_81.part.js": "ddaf6c47eaec4f138ef1e251c7cf6ace",
"main.dart.js_205.part.js": "fabf7a46248feace17495abc1590832f",
"main.dart.js_280.part.js": "412b7c896ebfd30051a04724fed702f4",
"main.dart.js_9.part.js": "30689cb0d0a8110797180aa564058bcb",
"main.dart.js_99.part.js": "7ccaaee83f9ece6b8f0ccb7583046e67",
"main.dart.js_272.part.js": "9c90c78d5bb101b7e72afedfeeda97cb",
"main.dart.js_242.part.js": "b6e58737396d6e2f7e64856c0551cdd2",
"main.dart.js_86.part.js": "004e6ca29838024515c8ea36242edbf0",
"main.dart.js_23.part.js": "74756a687a3f11f0a06d493002436642",
"index.html": "4be37b0273d779a2cd72b0b4121be9de",
"/": "4be37b0273d779a2cd72b0b4121be9de",
"main.dart.js_94.part.js": "9ef250f57eeb2e556dec6f2d25d7e7b9",
"main.dart.js_98.part.js": "da3260424f9643f98cfea3bc5b3db28e",
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
"main.dart.js_286.part.js": "4331eea8aaa3a8896d437443bf763e97",
"main.dart.js_118.part.js": "1b75944a617e5878183f25388f8a854d",
"main.dart.js_262.part.js": "7296f78f10f55e81317def04a293b1ed",
"main.dart.js_26.part.js": "eef97b1554e021f034a6917f23bea3b5",
"main.dart.js_240.part.js": "050583a8f813255a537603487e8e6458",
"main.dart.js_20.part.js": "c00c68270b492d176455059c67dc2d40",
"main.dart.js_189.part.js": "12238fa904840b6c70e5ca1bb8c20878",
"main.dart.js_214.part.js": "87e165df3702c59f25ed3f988c54e8b3",
"main.dart.js_51.part.js": "4104c2c85b7da960edcb8dbeda3b556c",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "f8d2a6305da737e997bf12c64ca15f46",
"main.dart.js_290.part.js": "211bbc723e0a9d8bcc4651ad2bdb8087",
"main.dart.js_1.part.js": "7dbddff4da0c5590a8fe785c586ac173",
"main.dart.js_120.part.js": "8f5183a8f7e3ad4fefc7740dd7c39e13",
"main.dart.js_45.part.js": "59442489da9ece6f8bdd8699fad3d9e5",
"main.dart.js_261.part.js": "a34718fffaec83da98df19a72b0d8c2c",
"main.dart.js_295.part.js": "8a7d883ea61754026578ec8e36f49134",
"main.dart.js_12.part.js": "e9ddf6c79c3c215fbbad80099895fcde",
"main.dart.js_157.part.js": "d03b3af77e208d54161ee923bde8dbd8",
"main.dart.js_221.part.js": "09a78b9b92f04ffba3beb1d53fa08c19",
"main.dart.js_137.part.js": "d8156288eb0f442d5e689e9206134cda",
"main.dart.js_28.part.js": "4736047ead985aac84f24453872c5ac3",
"main.dart.js_135.part.js": "b5cefb686b7b47a42c8ac556b1e1bbc7",
"main.dart.js_256.part.js": "79a86bf265ea540881caedda4527e7d7",
"main.dart.js_138.part.js": "384d68be7de413e9b5ec2950945a1d11",
"main.dart.js_193.part.js": "cadba402dbcc1ae9dd17431e935b0d8c",
"main.dart.js_17.part.js": "f744be6fda067f9fcdce86d976eb72ab",
"main.dart.js_105.part.js": "b320fcda6e6d0e5b3a2af4675360cedc",
"main.dart.js_206.part.js": "aa642895c008d2ad231b806ec5a8dc52",
"main.dart.js_231.part.js": "5198bf0663b85282ba25944c322899ff",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "19f3b5bc16bccff87eec03c299b2ecda",
"main.dart.js_292.part.js": "b2b5dcf9b87b257a0dd2c8385260778d",
"main.dart.js_15.part.js": "187c6fe68cef966e34c3b66154f6d149",
"main.dart.js_151.part.js": "804e88058f3581929d5a1c3b5e33a975",
"main.dart.js_19.part.js": "5188efa1aed739320f2efa75775bdd3d",
"main.dart.js_284.part.js": "08bae963632ad7a3369f6e77aa225592",
"main.dart.js_186.part.js": "7ff7afecd831ef4ff113cad03b6b3a28",
"main.dart.js_163.part.js": "9024db13e4b0c03af6e7c1de04f04dc3",
"main.dart.js_154.part.js": "0a923df65a4af95ba1adc9527cafabea",
"main.dart.js_257.part.js": "d39302a3a616745b8fe837010cee35f5",
"main.dart.js_42.part.js": "45538211f5c650a8e68bf72839ba73ad",
"main.dart.js_16.part.js": "2c42f0a39e11007e7ea54c9b56e60617",
"main.dart.js_250.part.js": "373ec06c5c9530ce7bb513133ec2777a",
"main.dart.js_52.part.js": "7287d2b5f9e1a7dc434ffc2fe9842892",
"main.dart.js_36.part.js": "33bff16b6200ca64add73ca455e637a4",
"main.dart.js_199.part.js": "04376426e968466a6d64c5627fec46ac",
"main.dart.js_253.part.js": "0933f4c3c33693c535c64ebd58db22e5",
"main.dart.js_130.part.js": "64ae3b3a8b81d7ce1da7c75c98e87aee",
"main.dart.js_152.part.js": "ac411faba7224faa8ae8bf821ba05861",
"main.dart.js_32.part.js": "d82c8fa04bdf3bbfca89c6c1a6b990a5",
"main.dart.js_197.part.js": "4f47119efb62babd91737feabd38e7b5",
"main.dart.js_56.part.js": "2e3c01d2b51586a581af2df16430d2b2",
"main.dart.js_227.part.js": "80239ad11a8e2d97ccb55dcdf4f39fd6",
"main.dart.js_3.part.js": "f81ad1faad5b65506b38461fed5da02c",
"main.dart.js_68.part.js": "3ee558a5c03e4c3816fe033b3fc71ff5",
"main.dart.js_38.part.js": "732cb849beb10fa53d5d796565c064eb",
"main.dart.js_248.part.js": "8b64269b2c6882950e5ab287b6f2f841",
"main.dart.js_133.part.js": "1f29fd7dee8f540ac54373f323365df2",
"main.dart.js_21.part.js": "579f4d203af53eecfd94f124c9e0c8ef",
"main.dart.js_188.part.js": "a86e49f746388ad4a86a5a8fbaf808b3",
"main.dart.js_24.part.js": "124420e3b8acd5b42fd352f93ca84b75",
"main.dart.js_90.part.js": "f498559eec99e47dd2eaa3764ebee24a",
"main.dart.js_111.part.js": "92f53a73a30f09ffeee435554de11798",
"main.dart.js_177.part.js": "1d2fdecf2ecb46cc12714bf47e08749c",
"main.dart.js_85.part.js": "1090149121e24fd5b063d18069073be2",
"main.dart.js_243.part.js": "a708e83bc488a1b47563669b17c871e4",
"main.dart.js_212.part.js": "3436c501acd0572b1b9a16c729854a08",
"main.dart.js_260.part.js": "e46069443005c63d7ce11cde4f3e01c2",
"main.dart.js_114.part.js": "423d96513f3ad809becd0c396a2a4cb8",
"main.dart.js_39.part.js": "4f35355ff9dbb931a7d4b00d2a1b9a64",
"main.dart.js_49.part.js": "2fc4e54ebea5d5cb2481b1d53f87788f",
"main.dart.js_185.part.js": "332a1b3c617bc3fd7ad7c15fe61a1845",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "c78a493bf9a7219d4616db958e2f670d",
"main.dart.js_171.part.js": "1aa19e59e8ff0caffc6b7b67af1b7d94",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "08e9f880056c04c774a525274fd8ecdf",
"main.dart.js_195.part.js": "f08c82f0275ff3fc0afc80f9d00ca64e",
"main.dart.js_121.part.js": "ea9b13b1870b7023105e647170f47f4e",
"main.dart.js_139.part.js": "969d0ca933ce8ffde2f16bb872eb64a3",
"main.dart.js_143.part.js": "a16f20186859b62bf0154d0e9cd4a8c3",
"main.dart.js_80.part.js": "ac33d54daf9251d196789135ae828a71",
"main.dart.js_252.part.js": "2955aedf9725082a51d23090c35985f1",
"main.dart.js_233.part.js": "edf05c0ce6e338f27687af60c25ee723",
"main.dart.js_30.part.js": "f184cfdebb687b611f8f62e0df1bacc7",
"main.dart.js_267.part.js": "c04bde2e4d0c3864fb8c560a4842c71b",
"main.dart.js_277.part.js": "2fd1a996142734845985ff9e0b5d2570",
"main.dart.js_78.part.js": "ba6c1d91ca8f89d6df1d206bdcc01d89",
"main.dart.js_136.part.js": "968977c9cdeec8c2673d31597a1658c9",
"main.dart.js_271.part.js": "9541c6d241e1c7634dd4fc7b21da9ecc",
"main.dart.js_59.part.js": "fc9d5988933e19ee483ebc55f9f3f716",
"main.dart.js_29.part.js": "2409e773aa2000473914c7dfc1a5d96c",
"main.dart.js_194.part.js": "a36102b95863d8fe675a2a1ba6c25f9f",
"main.dart.js_61.part.js": "614577a9e1d4d5afeb9e8ee942cebf1d",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "f1c4c18f5143b52624672fd95ff1682c",
"main.dart.js_54.part.js": "a77d78714df7f5d546c8d15848c68b42",
"main.dart.js_79.part.js": "c76896c80296fd924df2b3d9431ca2fe",
"main.dart.js_109.part.js": "0df5d48ef555f4d2aa9b4419f8dffca3",
"main.dart.js_93.part.js": "7dbeb1f9f2f36d4b26ca9091ea9a6b57",
"main.dart.js_11.part.js": "7b1219cfab4937389e3b2c35c134d477",
"main.dart.js_125.part.js": "1a269899a67981ab864a68406d02d345",
"main.dart.js_131.part.js": "f737aafa58755c8c2267f823b1d86228",
"main.dart.js_226.part.js": "448dab33e914daafaed2db1cd8a28032",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_178.part.js": "c723049ac4363d399f224475b6c59178",
"main.dart.js_100.part.js": "b20d5f736f7d638fe25e305c366a6ec9",
"main.dart.js_70.part.js": "c6b12b00e0979a04a1b9aa4abff459bd",
"main.dart.js_187.part.js": "b735f353fc39512216f109b7ce16ea16",
"version.json": "38740d36ce5dd8136ecf6fdd6dd84737",
"main.dart.js_264.part.js": "87d29a3e8b9468357801e03f7a0e9e7a",
"flutter_bootstrap.js": "70785c6e665a5202a69afa07b85ac0d1",
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
