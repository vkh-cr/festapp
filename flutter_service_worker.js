'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "86716fe43349e99ede76f840c494a002",
"main.dart.js_75.part.js": "7fdac76d22417846c9f60f2bf2bcd4dd",
"main.dart.js_289.part.js": "114a64de10f3655c02255c25aae6a725",
"main.dart.js_83.part.js": "5024b62f333ccad91f5dc31009e1a8d9",
"main.dart.js_254.part.js": "23e8b6d9d372766192abb49f14ec7d45",
"main.dart.js_176.part.js": "37b8a1a6f1bc8b83785ad75804c52712",
"main.dart.js_96.part.js": "350a56748f6248f0c90adfedca5eff66",
"main.dart.js_245.part.js": "bacd3dc145f49b5b654f1465cdc38f20",
"main.dart.js_87.part.js": "5c647069f26a946e8bc69a546bb4c505",
"main.dart.js_251.part.js": "44a3a1563b710a3121120d188f7ea6b7",
"main.dart.js_126.part.js": "4916f7725804afcd60d126498919f290",
"main.dart.js_129.part.js": "3b4a4eab4087a27ed6cfc668953ebf13",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "c90ff8f333e7d4e8e845e9b7282c7209",
"main.dart.js_172.part.js": "8ba772836eee5afe98b3f7e40b5ee24b",
"main.dart.js_142.part.js": "41d93105c5ddf4b2446b9c643327f63e",
"main.dart.js_209.part.js": "dd694fdca4ad93cc3ff08d1df596fbbf",
"main.dart.js_10.part.js": "da552b297eb3ae98a7aec0d77bcd38dc",
"main.dart.js_66.part.js": "e5ac4b9e95dd7a389101be972163fbad",
"main.dart.js_84.part.js": "1aed03213ebf229aa3cfd13be7875ae6",
"main.dart.js_122.part.js": "3a593e0d55913b687347f1ff3cdd1f3b",
"main.dart.js_230.part.js": "b47bbf4c9435d81a5cd85c976ac056a0",
"main.dart.js_213.part.js": "93819531aaa80fbba289d1700d9cbcc8",
"main.dart.js_153.part.js": "825abb6c2a359749ca7d1a4f857297a7",
"main.dart.js_89.part.js": "386aaca77f4a0900140c5c04273eeed4",
"main.dart.js_146.part.js": "f0d5338abc402a426421c6c92e55b0c4",
"main.dart.js_37.part.js": "d5d2bab00fb09871347369e082f4589e",
"main.dart.js_287.part.js": "9df4443eaa5e93912b1c6ab62a0c3d3d",
"main.dart.js_283.part.js": "65661121adf28c6892a6f45fa95e4fd3",
"main.dart.js_132.part.js": "17e4dd8332f8dcaaab7311240c9071cf",
"main.dart.js_165.part.js": "78d017f0c3f46ab818141f819a5ae188",
"main.dart.js_127.part.js": "db63b29afb4efbfd555d5c64314c8569",
"main.dart.js_175.part.js": "a930b3459720d896d45bc4b4e76b829d",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_216.part.js": "6d71d49cad649cf64b19f0963a97a7b8",
"main.dart.js_64.part.js": "0b3b3913150fdfae8e2acd491a6e299a",
"main.dart.js_13.part.js": "1bf6443189aab903731aa841267ef424",
"main.dart.js_246.part.js": "20f3558bba589c59d010d89d9f6e1d40",
"main.dart.js_174.part.js": "0823985d73a86bc39e5759faac99f3c0",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "65357ea61da212e2b8f060ba4305b462",
"main.dart.js_144.part.js": "c22c3b1d91eba9eb0ebf9d022fd0ba9c",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "544de179c18fc48735a6492b7b2edf15",
"main.dart.js_265.part.js": "151c65ce2165ae0924bbb33b4f58706f",
"main.dart.js_31.part.js": "21d9d798e8edadc11fddb4b2b11fe578",
"main.dart.js_119.part.js": "0c5c795d528ab0fbdf6459a5dc13f044",
"main.dart.js_294.part.js": "ab4e83cce9ac3979b5696d2cf921ac79",
"main.dart.js_18.part.js": "14a417788b6986862c419046d07ad976",
"main.dart.js_35.part.js": "4b53a26218eaa133d83f627cdb50f2ba",
"main.dart.js_200.part.js": "667a50a5d6317d5ef448b833453f35e2",
"main.dart.js_101.part.js": "a7d952a1d4c150ee997a40d1ef3e8630",
"main.dart.js_77.part.js": "c4245ddf26874c1482d2a29aa8e4ebf1",
"main.dart.js_208.part.js": "aaa711eb027c9bd8e2a910940ceece01",
"main.dart.js_82.part.js": "ba6190b65673b756a1876f82925530f9",
"main.dart.js_173.part.js": "3a6f8cf394de1582171afec4e3fd65a2",
"main.dart.js_291.part.js": "2a63db241a7c593d87654b6f2884e0db",
"main.dart.js_106.part.js": "fe07cf1758826efe78c27d1f2bfe7e56",
"main.dart.js_273.part.js": "a55138d6018b5718637b54f5b5db5a68",
"main.dart.js_62.part.js": "4246b7b50028d5fa1a7a988ee7c359fc",
"main.dart.js_259.part.js": "237ae5b7e9dd53b1d36d64cb3e314b4c",
"main.dart.js": "973a033292d3ebdb97717c74efa3925d",
"main.dart.js_222.part.js": "cb41b5257170629103701033391a9be0",
"main.dart.js_293.part.js": "9421071ec8e96059a8075aec4a5c7df5",
"main.dart.js_124.part.js": "a82872ed8e90447a4c274210af3c31e1",
"main.dart.js_50.part.js": "779e795bac6ba206f7fac3b04c1fc4ff",
"main.dart.js_192.part.js": "73ff864060c16bd85cf18f22818c8e8a",
"main.dart.js_91.part.js": "9c1f0f88d026e3d2b442346d4cfebd71",
"main.dart.js_145.part.js": "37d4977226a4b73b95e9b4448818ca9f",
"main.dart.js_229.part.js": "6cbac36e9fd07e8ae460f078432b2344",
"main.dart.js_190.part.js": "4c19fe8a3c32c391e4dcf69fd9773475",
"main.dart.js_104.part.js": "27ec1cf16cff7dac3fd1a8c1d74aaa17",
"main.dart.js_201.part.js": "36943ca4806c2c7fc6ce8db9d2251f55",
"main.dart.js_69.part.js": "862ad652d44f82136547959670254063",
"main.dart.js_196.part.js": "c11dc68bd01f5d7ee5009e4d0917dd99",
"main.dart.js_181.part.js": "179fafa9be3e6474ed05d0810e2d2528",
"main.dart.js_270.part.js": "6ab83176925c4f5e10bc06fa5b671a80",
"main.dart.js_158.part.js": "0eb534fb47d5d430a530dd2844c66388",
"main.dart.js_33.part.js": "96e7f891b42d998a86cd67d5519f5f93",
"main.dart.js_275.part.js": "51b973926dbc3ae826c77a303a1a3920",
"main.dart.js_269.part.js": "086c838274fbf537680fbcad3caedaa1",
"main.dart.js_217.part.js": "a93e1e23560ab4f39112746a5dbcdca2",
"main.dart.js_34.part.js": "adb391ef2ab847cac8ea0f1cde6df633",
"main.dart.js_210.part.js": "ee6d98c57c58e31ea940ca63e74f91a8",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "534994ef32fdbdee3843d6f10ac706ae",
"main.dart.js_88.part.js": "3764f9d40146c991e451be1224bbfdca",
"main.dart.js_202.part.js": "0bf9a7d4ef317d717a66bec32ced27be",
"main.dart.js_183.part.js": "ee1aa363c822140e6c330f535083f9bd",
"main.dart.js_167.part.js": "77b1321690a0c3c977ffa3bc25edd80f",
"main.dart.js_203.part.js": "09e3090baae98e646922dba9f8f9496a",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "07e1b48df64a921e693ad17ee7a89180",
"main.dart.js_7.part.js": "574524cf228e1f7630445c22d8fd9ae1",
"main.dart.js_140.part.js": "1b2befefd59aa6a105d233861e72a182",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "d07aa1267d61fa5fbbb234063d040bcf",
"main.dart.js_27.part.js": "2caa5ca4ba6ea0c06c6e76100addf08c",
"main.dart.js_156.part.js": "82a6fcf29ccd4aea315d02680bf7f870",
"main.dart.js_4.part.js": "d1571a6667ca02ef6accf74c1d285281",
"main.dart.js_298.part.js": "3ac563afb9af7390857dd97a7f74f262",
"main.dart.js_219.part.js": "140d34fb8470371f30379cb50919dbd4",
"main.dart.js_116.part.js": "768fae5728162027ca5190faea1b26d1",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "4772e046a247f39a843ac9bbc893e582",
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
"assets/assets/translations/uk.json": "19b8846c779dbaeee39ff41c7a8354e2",
"assets/assets/translations/pl.json": "32a2ed2c2132df5ab10b6c30a5f47f2e",
"assets/assets/translations/sk.json": "304f22107dbe593deda7ba90d0ee461a",
"assets/assets/translations/en.json": "51574523c9184dbc03bbf462bdf9cf6c",
"assets/assets/translations/cs.json": "39ae68de9a34c9be193a8bb2d9cc905e",
"assets/assets/translations/de.json": "7667312c8d90529faf848f6a5f569c4c",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "21092cee812eaca83f55eb5e54aecf0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "aa16fcf6d7a75b9febd3f4a011e57d99",
"main.dart.js_263.part.js": "48d0fd014a56d4e732f7d79e0f77825c",
"main.dart.js_220.part.js": "88f2a8a990a3e468fad2cb76e05bfd46",
"main.dart.js_25.part.js": "d6d159b9539e6c36e81563650b6a9d1d",
"main.dart.js_288.part.js": "6ab6a7279b5b3e5d11ea60aa205fc83b",
"main.dart.js_141.part.js": "4971404b3efc12873a5b19f4dbeee418",
"main.dart.js_249.part.js": "e0ed644ea32dfef91baa97686e50fc12",
"main.dart.js_123.part.js": "c35a0bf55029cd7dfcb51323a97fc9da",
"main.dart.js_268.part.js": "67171f970c779ae973e0e3c2bcb8db29",
"main.dart.js_8.part.js": "b7cb9fcbd1a7185b9afb360f3c6e5c76",
"main.dart.js_198.part.js": "4a3267316a14f4720434c1d79253f751",
"main.dart.js_81.part.js": "94f203ba03d6ae91aacaf71a030f5e1a",
"main.dart.js_113.part.js": "be654b1b1271751a0478ec29eb39060c",
"main.dart.js_280.part.js": "471c8cd995ea3aa6024ca376974e1be6",
"main.dart.js_9.part.js": "e646d172d6908215a1cb871fdd42350d",
"main.dart.js_99.part.js": "eed2ada2a40a255817037e1b9a13f7a1",
"main.dart.js_242.part.js": "750413931a23984e77d38ddba2493ca0",
"main.dart.js_86.part.js": "c6d130738982b5f0b80891e42d04b1ea",
"main.dart.js_23.part.js": "ca712828ffc3aae36bf9a8e1e4ce9c92",
"index.html": "947a51bbdb46d4680cf3fee9db29dddc",
"/": "947a51bbdb46d4680cf3fee9db29dddc",
"main.dart.js_98.part.js": "e27a27071e6972dd55671f19f4011d29",
"main.dart.js_53.part.js": "9850d68b0639c9f78dd9dec8706bc3b5",
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
"main.dart.js_286.part.js": "807af9e771bf57ba2d0c92ca2ff48661",
"main.dart.js_118.part.js": "1d5223496aa6e1b0acb71072db2361df",
"main.dart.js_262.part.js": "c6b45646a7049163f98033533972c678",
"main.dart.js_26.part.js": "151139ea7a3e7cc34c787dffb566752c",
"main.dart.js_20.part.js": "d1de58221f193e74fc0c624d0e6ff4a0",
"main.dart.js_189.part.js": "132956312ad456b75b51ae772a2e9e33",
"main.dart.js_51.part.js": "7d419419c32930b0cc355c9facf31c7d",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "265a75874860f23ca270fc1cdf02aa44",
"main.dart.js_290.part.js": "0791a9970ec799acaf91b558f456c091",
"main.dart.js_72.part.js": "a7770e61aa1c8eeeacfc1cb0e3dbbf08",
"main.dart.js_1.part.js": "71e9d3c300c37474ba50d60f7d49eaa0",
"main.dart.js_120.part.js": "42b7efaf5d116c7d01029684cde14b77",
"main.dart.js_63.part.js": "16e9c707ea9ac4651b58bbb836279589",
"main.dart.js_211.part.js": "4ae8377adfb7d1fc089f2da1fba10877",
"main.dart.js_295.part.js": "2962bf5d020ee4012f3aa08bb2bbe02c",
"main.dart.js_12.part.js": "1c488080a884508cd6cb2e22720a908e",
"main.dart.js_157.part.js": "4267e4acc05f6106451044fcc6bf41a3",
"main.dart.js_281.part.js": "78a689a3b1baf37ada827c977962fa89",
"main.dart.js_221.part.js": "2656d9dc6c1988a86a5443e930218d5d",
"main.dart.js_137.part.js": "d0bba521911c22b4e31d94bec1ff59ed",
"main.dart.js_276.part.js": "14003df7f9adab77f1c7e629729f2c36",
"main.dart.js_28.part.js": "b816f21a2836e4f462bf4c0959d9d9f3",
"main.dart.js_135.part.js": "59d86301d7ccbcc5a5fb62cfad5226ef",
"main.dart.js_256.part.js": "e4f899b21733b7cb0891178cd8a7e8aa",
"main.dart.js_138.part.js": "a3f0c17e7354d51a2a8653e7d391bc01",
"main.dart.js_193.part.js": "dd5729d2fa3f3f41ff14a0ca53b467df",
"main.dart.js_17.part.js": "03fce4133ee1b475178c65fbec0aaefe",
"main.dart.js_105.part.js": "7a4db441fdcd412c0b8d4baca16a2e92",
"main.dart.js_231.part.js": "a22b6bc902ccab0e9ec736f39798105c",
"main.dart.js_43.part.js": "91580d2dcfbafddf525af7eb918f1fbf",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "841ba60f7617922647241db0b0c543aa",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "04659786f53bf486127e2f4a2f0342ba",
"main.dart.js_292.part.js": "dd5c00ee79e00d5f8ca27a29bb9d6f95",
"main.dart.js_15.part.js": "00de228470c235175c8aef370cfac7a9",
"main.dart.js_151.part.js": "4cf54311da91bda434b7c3c5b0cb80a6",
"main.dart.js_19.part.js": "d9ba4a427484ee068b5b81674d2fb43b",
"main.dart.js_284.part.js": "bd9df7bf15ff102fce78cd99bca4fb28",
"main.dart.js_255.part.js": "15412ab47ebb7c3279ba889baadb48ba",
"main.dart.js_186.part.js": "5a633348d4b6e49fe8e841fbe1fd72eb",
"main.dart.js_154.part.js": "454fa0480e42b2561625583909baffb3",
"main.dart.js_257.part.js": "6ccefceb069058ea5455ce0ff1d776f9",
"main.dart.js_42.part.js": "81f7cfdca48141350a007e5b644f407a",
"main.dart.js_16.part.js": "b2f123deda5c1b8b756e57cd336f41d3",
"main.dart.js_52.part.js": "59dcf6c7a7f39333a0e1723ce87ef97a",
"main.dart.js_36.part.js": "a638fd49adff8dd3b8df5e35b38ba96c",
"main.dart.js_199.part.js": "d12843f3e7629ae550db2b029a372b89",
"main.dart.js_253.part.js": "1d11eb97a2d5b002b9a12947735948b9",
"main.dart.js_130.part.js": "f040d4930b431de933c26401a306207c",
"main.dart.js_238.part.js": "75a965454de17cf3e515ab81a2a4e495",
"main.dart.js_152.part.js": "2879a7c236c148bd4ed91dca0ed61cbc",
"main.dart.js_32.part.js": "8b208a7a1d35a0cfd31b8e17811cdcc9",
"main.dart.js_197.part.js": "9150e3f2374d75318d14bf9652c384fc",
"main.dart.js_56.part.js": "ceaca379e1c95a9a263c4b00e67a6b5e",
"main.dart.js_3.part.js": "370aeb16a583313189989c83a4cca905",
"main.dart.js_38.part.js": "f40b424bee2b25820c39e396deaebee7",
"main.dart.js_225.part.js": "d004599a0338f9066b38a95905dd4195",
"main.dart.js_248.part.js": "2b826fcaf27f13aef0792d175c683639",
"main.dart.js_133.part.js": "b928bdd3e627f462b5f16f5725c89b59",
"main.dart.js_21.part.js": "f4714ed155e9ff3e6cfd10757b182824",
"main.dart.js_188.part.js": "174e731a277202ed4e252a7b95aa5ab0",
"main.dart.js_204.part.js": "fd3d83e08bdb0df7a6d49693bda12189",
"main.dart.js_24.part.js": "4640e4e37887f7d76e755496b4d445c1",
"main.dart.js_90.part.js": "ef9c1623e6bd6d7f88083825699809b2",
"main.dart.js_111.part.js": "b65bfb19395b81f7b51017d5eee631a7",
"main.dart.js_177.part.js": "6375a3df4d77609b562f160d8b0a44f0",
"main.dart.js_299.part.js": "aefcc79d8f686171715b5407733372fb",
"main.dart.js_85.part.js": "030db31e54773d12c3305b445a761d5c",
"main.dart.js_243.part.js": "43c132dddeb5e77092dd635ffe2e4b82",
"main.dart.js_212.part.js": "11a6d17c4e9f438c97e408868fbda201",
"main.dart.js_260.part.js": "64c16acce138d65315a3f88dceca1087",
"main.dart.js_39.part.js": "e717ab4074a173d0cfe2eb9f9c322c7c",
"main.dart.js_185.part.js": "be3702e25f08729784eee850928916f5",
"main.dart.js_46.part.js": "a498a4507d1c0b16b0511e3f5d3784f7",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "ccada0f05d677a565d5b6c54ef5c3fbc",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "3d343f4db26a569c5688633f41d957cf",
"main.dart.js_121.part.js": "76790b1c3e0a9980642184d68a53cbb6",
"main.dart.js_55.part.js": "56d958f07c2a7aea9bd1a6639f9983e2",
"main.dart.js_215.part.js": "7facf9f944d89c27e7243b7a914aab13",
"main.dart.js_112.part.js": "fc74242dabadad9fa2678b7a319cfecd",
"main.dart.js_139.part.js": "0672e557d70ac752507b4afbfbd93100",
"main.dart.js_143.part.js": "e14850eaf59efe462d5795eabbb8d1fa",
"main.dart.js_80.part.js": "e9b74b799c745798a575f42b67783678",
"main.dart.js_252.part.js": "51f0b13d3c6b731d3f9ea418a38d3e72",
"main.dart.js_233.part.js": "d3c1d43fe4ae6633ac0e7ac72cbe0831",
"main.dart.js_30.part.js": "452bd1d3eb8d821a99d7a09dd1da923b",
"main.dart.js_267.part.js": "95da61fc7e72be45c2203bb88dc00700",
"main.dart.js_277.part.js": "18b727499abff4b17692a28d06a864a1",
"main.dart.js_136.part.js": "490df09be247e1258ae972d6012136f4",
"main.dart.js_271.part.js": "179da99f77e53e861b1f9243e80dd8ca",
"main.dart.js_159.part.js": "7faa55c7119a69919981d4701d1af6d9",
"main.dart.js_59.part.js": "3ed6010f1b48554b5d3049101215e4a4",
"main.dart.js_95.part.js": "b0b02c6dc68586fdb96b666c391a16f4",
"main.dart.js_107.part.js": "8b44d7babcfdc065427991a75d0949d3",
"main.dart.js_29.part.js": "a4a253ad074fa26105817141da50c74d",
"main.dart.js_61.part.js": "c8791a1c05b2bac34c91f42d09d08d88",
"main.dart.js_236.part.js": "1d41f179eb7e44277a8c36cf934bd60e",
"main.dart.js_58.part.js": "095edd37dd6bb38010a7e2566b63913a",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "290e61cb1d90110f658255e7256ca9c6",
"main.dart.js_54.part.js": "1d3df629bcfdfa3de11834922be65d80",
"main.dart.js_79.part.js": "a0479d3660a4bf07c72e7250e2f588b6",
"main.dart.js_92.part.js": "be56b1b89943cf1a11716cee7d08beb1",
"main.dart.js_224.part.js": "a99ff95acce1c911cf83ecc1699243a1",
"main.dart.js_223.part.js": "e916c1d14f655c787d9a5bbc31f30380",
"main.dart.js_11.part.js": "d7f79ad64e18a3b1be37398be3a8add4",
"main.dart.js_131.part.js": "b6635d659f109108821b5b28c0ecae68",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "a922e6835580bf50acbd2474bdb2a616",
"main.dart.js_100.part.js": "54c4b17e70979ff362b8fe1c2b04cf8e",
"main.dart.js_297.part.js": "f3dde99c4790836e29662908e75c2d9e",
"main.dart.js_70.part.js": "30645be49efd85f91c25c4fd969bbc38",
"main.dart.js_187.part.js": "8c1474447600b665558f8264780befef",
"version.json": "13e25a1bf53b1e0617e6c3115bbf029e",
"main.dart.js_264.part.js": "221f504cad7ab768c97ca11ffd668dea",
"flutter_bootstrap.js": "d2b2d54adaa2a9368b7c86c9cf3e688d",
"main.dart.js_191.part.js": "0652c06a8436ef20425d480835ace050"};
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
