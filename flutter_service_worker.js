'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "86716fe43349e99ede76f840c494a002",
"main.dart.js_75.part.js": "7fdac76d22417846c9f60f2bf2bcd4dd",
"main.dart.js_289.part.js": "84075be2a721331b9bfbdeda8befaa8e",
"main.dart.js_83.part.js": "a32a823ceddac655ecc8773d73816d90",
"main.dart.js_254.part.js": "4e05b77ec0ad1b96705308fbda63ef63",
"main.dart.js_176.part.js": "02208b256026677277333a9d8bffee5c",
"main.dart.js_96.part.js": "2420bbc21c788d82928ff950c95a1823",
"main.dart.js_245.part.js": "2b563bb7a8566e24b659f3f6ea2d03ab",
"main.dart.js_87.part.js": "b7441ec1e2a5f21206ee8eeee46a7898",
"main.dart.js_251.part.js": "1996fa80681959926b445704a2ea4c87",
"main.dart.js_126.part.js": "11be743faffdcf59fb607fc5c186cf0b",
"main.dart.js_129.part.js": "d1eaaf1c41cea1692d211aabc2f30b43",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "c90ff8f333e7d4e8e845e9b7282c7209",
"main.dart.js_172.part.js": "9a7b2351f886ba1485497fa67bb63833",
"main.dart.js_142.part.js": "04409544b34c4e3dba195cad9a437b4f",
"main.dart.js_209.part.js": "dd694fdca4ad93cc3ff08d1df596fbbf",
"main.dart.js_10.part.js": "a470cf9e34ba99e4d49da94900bc06ff",
"main.dart.js_66.part.js": "8c02ecb35160cc0cb8524b3b07f433ec",
"main.dart.js_84.part.js": "2522679b888ecf4bf6e3be741b65acb0",
"main.dart.js_122.part.js": "9a0642ee14c0a89045749ac58e8b5507",
"main.dart.js_230.part.js": "8b355cef5f118ff9043cf3bef2b83682",
"main.dart.js_213.part.js": "4380a749cd8c7f46f33b8290a73b044e",
"main.dart.js_153.part.js": "f7819579d78f80a5f7fb9ddf8e6adc6e",
"main.dart.js_89.part.js": "e08dbc2622498c3e99173e1b9e6c0740",
"main.dart.js_146.part.js": "5087a58a60064910d33c79fca6c07462",
"main.dart.js_37.part.js": "17d94415c81ce6cff1e07b470e98f1d0",
"main.dart.js_287.part.js": "1b61ceed66199ee7faba84610bb980f4",
"main.dart.js_283.part.js": "b645750e217cfc5905035ba85d1b9d29",
"main.dart.js_132.part.js": "5144992221b51c17f4fd47d36076640f",
"main.dart.js_165.part.js": "78d017f0c3f46ab818141f819a5ae188",
"main.dart.js_127.part.js": "6d5efdc7919f3d025662ba471abff9ab",
"main.dart.js_175.part.js": "81cff2494c0b5f73a0138d1c3eeb1386",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_216.part.js": "f65998c69c15fdc5c61cf4521f77490b",
"main.dart.js_64.part.js": "c3ba42e08998dcfe1d61252c059e2ded",
"main.dart.js_13.part.js": "1f924bfeb4f6c67a61ecc294a7013da2",
"main.dart.js_246.part.js": "f3b138c6a9349a480300dfc7e0bf8ea5",
"main.dart.js_174.part.js": "1b8dd22daf566dd737f43fc3c8284afb",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "e0398066722880c8ee36b72399674345",
"main.dart.js_144.part.js": "11af988687ec30c380d67f79fbfdcefc",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "e5be8e6180028ff68dbd30cf51883b10",
"main.dart.js_265.part.js": "b71aa093a3c48cd2daa8c8f0867d2e85",
"main.dart.js_31.part.js": "21d9d798e8edadc11fddb4b2b11fe578",
"main.dart.js_119.part.js": "4b5a55b8a3502737c9011f62370c88d4",
"main.dart.js_294.part.js": "b4836c6b534f0c7d2135067196f74700",
"main.dart.js_18.part.js": "cd3b4f8dd501f0f16edb1630605c41c7",
"main.dart.js_35.part.js": "4b53a26218eaa133d83f627cdb50f2ba",
"main.dart.js_200.part.js": "6514bd56d939d254970a01c25e8bbf3f",
"main.dart.js_101.part.js": "1dd57923ef21f9543149dc25d7e4cf7c",
"main.dart.js_77.part.js": "c5e1df9deb3055b6e21a837d643ce7dd",
"main.dart.js_208.part.js": "65609f401583357150f20e4e428ac765",
"main.dart.js_82.part.js": "0d0c2aedf43c02a24e4985907ada7d4f",
"main.dart.js_173.part.js": "42cd011072ce536aee59b14e3f99606d",
"main.dart.js_291.part.js": "ab02c6f8eb1bc60473e0acd3e172f676",
"main.dart.js_106.part.js": "fe07cf1758826efe78c27d1f2bfe7e56",
"main.dart.js_273.part.js": "a2ae911d5c24eebe47d3dc5422d36536",
"main.dart.js_62.part.js": "4246b7b50028d5fa1a7a988ee7c359fc",
"main.dart.js_259.part.js": "36cd6288bb4943e0abe8380eddbd7422",
"main.dart.js": "6428328de9813e2dc63dec6fe6b545ea",
"main.dart.js_222.part.js": "3cc13dbbc6c687e271ad2ef8a11e5a6a",
"main.dart.js_293.part.js": "b42ae67f2e236ff47cc9856201e67352",
"main.dart.js_124.part.js": "1e1c26780613b9fbfce3d864ee6cf433",
"main.dart.js_50.part.js": "1a99b803c30ba0b4caa7415ca4fbd53b",
"main.dart.js_192.part.js": "8044f970185e038750fb34435ab34b13",
"main.dart.js_91.part.js": "25cab63f1a6ee14db59d7c14e5b4d552",
"main.dart.js_145.part.js": "db9a429cec9807cc2da359fedf0a2ae7",
"main.dart.js_229.part.js": "d2e16daa931670390ecde3f01777e2d1",
"main.dart.js_190.part.js": "824bf7311dd65d367361b258de3df3bf",
"main.dart.js_104.part.js": "fa9c30f467d5adaca9186f3a258de326",
"main.dart.js_201.part.js": "ab8d9bdc1b383882f545a0a30532bbea",
"main.dart.js_69.part.js": "49c7b0e9901b15298b9f4ca21af25b91",
"main.dart.js_196.part.js": "52a72a8cf09d88fa89eae4e81de3cf1f",
"main.dart.js_181.part.js": "179fafa9be3e6474ed05d0810e2d2528",
"main.dart.js_270.part.js": "537bac1e5bda6a74523b4107fa762c03",
"main.dart.js_158.part.js": "1063edc0bf97e854bc65832f7d2fb371",
"main.dart.js_33.part.js": "1fa942717da2582062eb072e741b0869",
"main.dart.js_275.part.js": "6bb0fa32a494ee0b841e5f569c26bea2",
"main.dart.js_269.part.js": "cd3c6525b7e4c2a3346f2cb05035f35f",
"main.dart.js_217.part.js": "1fa7bee2c75faf889ec290ba871fe966",
"main.dart.js_34.part.js": "adb391ef2ab847cac8ea0f1cde6df633",
"main.dart.js_210.part.js": "5f097162fe067aaeb14b0e034d13c783",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "17ce059ab2297bf56ecb1efc82385db9",
"main.dart.js_88.part.js": "028c81d0f1b79756cace10dc113e71b5",
"main.dart.js_202.part.js": "8e856bfb665a3c400add6188662e9845",
"main.dart.js_183.part.js": "ee1aa363c822140e6c330f535083f9bd",
"main.dart.js_167.part.js": "77b1321690a0c3c977ffa3bc25edd80f",
"main.dart.js_203.part.js": "b0eeda9c564b38b40b41240ceae358f3",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "bafcaf6f95c71567efde4d5d89f15218",
"main.dart.js_7.part.js": "61cdd825f93c9f0b02aac42ddfe1c459",
"main.dart.js_140.part.js": "67eb00818c714b7a2a3f5db843db768f",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "b774d73ab50e8b772cebcd5fe767db06",
"main.dart.js_27.part.js": "e1b48423de6f15ba60d291a3698ac822",
"main.dart.js_156.part.js": "cf42491730cec0d33e70923284e47a2f",
"main.dart.js_4.part.js": "d1571a6667ca02ef6accf74c1d285281",
"main.dart.js_298.part.js": "68e101517c30d84a780f501609500e9c",
"main.dart.js_219.part.js": "140d34fb8470371f30379cb50919dbd4",
"main.dart.js_116.part.js": "768fae5728162027ca5190faea1b26d1",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "3ec7b5b3ffac436fa002ab6ec0e5587a",
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
"assets/assets/translations/uk.json": "5c6f91b5506200c26ad51e5350765c6c",
"assets/assets/translations/pl.json": "271b55ce0c52c9830bf390887e5966b5",
"assets/assets/translations/sk.json": "319d036846a90d0dd0b0d1fc3f1cf8fd",
"assets/assets/translations/en.json": "cd55cd652cbc775f1e0f2c4d420d34f1",
"assets/assets/translations/cs.json": "d51954e17c01bdc68e0d936ac0fec133",
"assets/assets/translations/de.json": "8fac98a7bb87e3ef69fe52580167ad64",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "21092cee812eaca83f55eb5e54aecf0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "4f17086b64b187ecd658131caff56b82",
"main.dart.js_263.part.js": "886a403f46cabfe579bd1d89be87490e",
"main.dart.js_220.part.js": "88f2a8a990a3e468fad2cb76e05bfd46",
"main.dart.js_25.part.js": "0a1df1c218fc652261eab1548aec8456",
"main.dart.js_288.part.js": "e7d2ccbe93708593304f115bed9ea38a",
"main.dart.js_141.part.js": "fd9526e7a855b2a555953f5fb3c3905b",
"main.dart.js_249.part.js": "f223d7327f419d0f341658450b8e5e72",
"main.dart.js_123.part.js": "c27d59c685e1f8b9c7289f5592663c44",
"main.dart.js_268.part.js": "073b6b655032d88e31a9ed171c822d95",
"main.dart.js_8.part.js": "c30b850afd425960634ed3d5c9a5c258",
"main.dart.js_198.part.js": "4a3267316a14f4720434c1d79253f751",
"main.dart.js_81.part.js": "94f203ba03d6ae91aacaf71a030f5e1a",
"main.dart.js_113.part.js": "76385898bde61b2f5472e0b5e8ff090a",
"main.dart.js_280.part.js": "5f8bc0a3bbf7c7569e8f42801f450123",
"main.dart.js_9.part.js": "9793842206176a18d92c573172b8a45c",
"main.dart.js_99.part.js": "7be33aab1cc8e24c8157ed9a02ae88a4",
"main.dart.js_242.part.js": "02933c90ce4fcc3176e26c2964989f0e",
"main.dart.js_86.part.js": "0c68c752a829eeeb6355e18525277fc8",
"main.dart.js_23.part.js": "958ba8f267b3ec56bd23240424d724e0",
"index.html": "1a719f66d3bb254807330ef58151cd2b",
"/": "1a719f66d3bb254807330ef58151cd2b",
"main.dart.js_98.part.js": "155938c1ffdfebbc1067dc949f3aab58",
"main.dart.js_53.part.js": "e0367cb739f2061a5777be9f0b009d96",
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
"main.dart.js_286.part.js": "8cab0ee20bed89c632d1b5da404f313a",
"main.dart.js_118.part.js": "1d5223496aa6e1b0acb71072db2361df",
"main.dart.js_262.part.js": "82c580966609ec6aad34a7eac6d9de00",
"main.dart.js_26.part.js": "efaf25e87b4613912ce009aa74a46002",
"main.dart.js_20.part.js": "6cd22bc34af236c1b6f7a4263e8f971c",
"main.dart.js_189.part.js": "9e054c5809e36b32d9d67994b9f23555",
"main.dart.js_51.part.js": "4f0512bc51268ef4305a8de4346e49da",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "265a75874860f23ca270fc1cdf02aa44",
"main.dart.js_290.part.js": "3274311cbb68c44b6403f0f74b806a95",
"main.dart.js_72.part.js": "a7770e61aa1c8eeeacfc1cb0e3dbbf08",
"main.dart.js_1.part.js": "7b14072d8a5f1c4c00f8e393950414da",
"main.dart.js_120.part.js": "42b7efaf5d116c7d01029684cde14b77",
"main.dart.js_63.part.js": "359b7ae2a6e6ab3b9cc1332f0d68ad75",
"main.dart.js_211.part.js": "de5794e1c46c4bf720bccace5707b8f4",
"main.dart.js_295.part.js": "beaa3ad5063f03c503dfb6c8ccd8904f",
"main.dart.js_12.part.js": "5bba9d8927fdf00f2613e6690d726b05",
"main.dart.js_157.part.js": "4267e4acc05f6106451044fcc6bf41a3",
"main.dart.js_281.part.js": "31c2facf7951d596e818ac873c60add7",
"main.dart.js_221.part.js": "0ed851882aa8049a04490565c62a92b3",
"main.dart.js_137.part.js": "ecd5615456ec252e036e5c0a7d2ed0a4",
"main.dart.js_276.part.js": "b8789838f9dca332920c61a297cd8c68",
"main.dart.js_28.part.js": "452408c4885be620c158e3aa3e81233f",
"main.dart.js_135.part.js": "f4bb90657bb79066e701ba7620a301b9",
"main.dart.js_256.part.js": "dc952baebacd3323fb5dc6198bb63cc8",
"main.dart.js_138.part.js": "00f8b1b3546db4b986155a1bcb5fd5fd",
"main.dart.js_193.part.js": "943ca0c625ae8ab3881d7a39bb92090f",
"main.dart.js_17.part.js": "520a2e5797bb0211b650a94be42f0e7d",
"main.dart.js_105.part.js": "7a4db441fdcd412c0b8d4baca16a2e92",
"main.dart.js_231.part.js": "23908403b0a62053f71d3452c582282b",
"main.dart.js_43.part.js": "f0b31c4175df7a65c74b83f9c97c188d",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "3795a5a4f724ac2cf844a89b885bac3f",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "188f8e82859560e2aac4ab0ab621a7f4",
"main.dart.js_292.part.js": "14acbaf20ed1adf3c04cb6c9a81c0f75",
"main.dart.js_15.part.js": "3e8593d0374af36b5068b57f4329aceb",
"main.dart.js_151.part.js": "5bf39ff7f022fd11081043641c31243f",
"main.dart.js_19.part.js": "42fec4d6d1d1c3a903186cdb9af9734f",
"main.dart.js_284.part.js": "dc7a423a28b1a93dc038a9749a634a0b",
"main.dart.js_255.part.js": "3b9047e77a4e527c7a0285a58d0170e8",
"main.dart.js_186.part.js": "487cd8793f7b193d4a6fdc754fc0ef07",
"main.dart.js_154.part.js": "f4a853dfb3b58073d2645d918f8390f9",
"main.dart.js_257.part.js": "310d93a4ef01b6865f018b75f1497978",
"main.dart.js_42.part.js": "3e7529becd584df5481d8d3f9f1dd4d8",
"main.dart.js_16.part.js": "433ee8c6f47e7de1abad255540a48a46",
"main.dart.js_52.part.js": "ae2a4a33512f54459baa601737142c72",
"main.dart.js_36.part.js": "ee6e3a855edb3e1d66524bee6d505499",
"main.dart.js_199.part.js": "0f0bb3453e0a7d947b99e08781df9dcf",
"main.dart.js_253.part.js": "4048e34719f225a5493f6b1bd9a368ad",
"main.dart.js_130.part.js": "4c8e010f109ded88f5dbd6d58595e489",
"main.dart.js_238.part.js": "c22f113997b733e94bd4fb87a654e843",
"main.dart.js_152.part.js": "d5cd509518157bb6dd0aa05e97132a9b",
"main.dart.js_32.part.js": "8b208a7a1d35a0cfd31b8e17811cdcc9",
"main.dart.js_197.part.js": "e5679c14828c20d0233f6cffa4d97381",
"main.dart.js_56.part.js": "41b63e76004f7a52bb6897d5c6e9dded",
"main.dart.js_3.part.js": "45822356ea658ca2414f07c6fd28cce8",
"main.dart.js_38.part.js": "f40b424bee2b25820c39e396deaebee7",
"main.dart.js_225.part.js": "921e4cabd508e0d76970cbc8772530f9",
"main.dart.js_248.part.js": "dc6a2b8a4d1d6a87d2746001b9542389",
"main.dart.js_133.part.js": "b928bdd3e627f462b5f16f5725c89b59",
"main.dart.js_21.part.js": "89f7bc8815926181d61330b600102497",
"main.dart.js_188.part.js": "3ec1630bb5eea902ceb681c68158d49f",
"main.dart.js_204.part.js": "ff5fc3108c6b250bf185c01ac1011b9d",
"main.dart.js_24.part.js": "7558f4db46da57e290874d5113bcf076",
"main.dart.js_90.part.js": "5b4f347a8ba5eadf41c37da5c5cebfd4",
"main.dart.js_111.part.js": "e09dd85c7ca993b29736fcbd9a2076c6",
"main.dart.js_177.part.js": "66b36007e347d60267676771ecd7bb7a",
"main.dart.js_299.part.js": "2715d484774184aa273265a7478b8eee",
"main.dart.js_85.part.js": "5a74daf29e34be3fb6dd569dad1947da",
"main.dart.js_243.part.js": "43c132dddeb5e77092dd635ffe2e4b82",
"main.dart.js_212.part.js": "45e2ce0f8298d7e01b9bf8e522d95924",
"main.dart.js_260.part.js": "8d72b38b430c523866bddcd0f22eb67d",
"main.dart.js_39.part.js": "e717ab4074a173d0cfe2eb9f9c322c7c",
"main.dart.js_185.part.js": "be3702e25f08729784eee850928916f5",
"main.dart.js_46.part.js": "3ed9c2ef6741e30d039b197951047aa2",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "1f03c08f831f754e44be1bd3cb2b4fc1",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "6b8f827311e8f26885aa8765bac0f242",
"main.dart.js_121.part.js": "2cc61c62368ec8e6086c1ef98ae82332",
"main.dart.js_55.part.js": "56d958f07c2a7aea9bd1a6639f9983e2",
"main.dart.js_215.part.js": "f4bfeef8bcfcb3b29609f5bc38546a0d",
"main.dart.js_112.part.js": "91aa24387ba95bbeee6cb8f971dbb1e8",
"main.dart.js_139.part.js": "d0529abe3f6b3ecb026177ecb13c8286",
"main.dart.js_143.part.js": "586e454fd7446c16846bd332a03c9b0f",
"main.dart.js_80.part.js": "e9b74b799c745798a575f42b67783678",
"main.dart.js_252.part.js": "51f0b13d3c6b731d3f9ea418a38d3e72",
"main.dart.js_233.part.js": "ba51a37add11ea25c240f88f6d9c3a04",
"main.dart.js_30.part.js": "b3bd0e7e487bcd9698dd79b4a2745c8f",
"main.dart.js_267.part.js": "d4603832d41a2050ddc742c64013326f",
"main.dart.js_277.part.js": "403048a48d1aa41782936734a8c4d593",
"main.dart.js_136.part.js": "091ce29faecf125cf7bb36cf0f693638",
"main.dart.js_271.part.js": "179da99f77e53e861b1f9243e80dd8ca",
"main.dart.js_159.part.js": "d2f45851da8ed2400638430e22308b35",
"main.dart.js_59.part.js": "fef6fe0c80fc518cc618a794d4138542",
"main.dart.js_95.part.js": "3d7a7250ceb63578b36dd59f357e82fd",
"main.dart.js_107.part.js": "365a9712072acb39c5a55a260e32ad5c",
"main.dart.js_29.part.js": "e2687f92f54120090c713997e709a0eb",
"main.dart.js_61.part.js": "25cc7a6beecbde143d758aab005d41ab",
"main.dart.js_236.part.js": "620d47e3c15fd4030c2d12a04dee5c6d",
"main.dart.js_58.part.js": "095edd37dd6bb38010a7e2566b63913a",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "290e61cb1d90110f658255e7256ca9c6",
"main.dart.js_54.part.js": "ecb830f08a209377b2160af7edf9f748",
"main.dart.js_79.part.js": "a0479d3660a4bf07c72e7250e2f588b6",
"main.dart.js_92.part.js": "be56b1b89943cf1a11716cee7d08beb1",
"main.dart.js_224.part.js": "a99ff95acce1c911cf83ecc1699243a1",
"main.dart.js_223.part.js": "79f7d734db96d3a21b48c8cc9753135f",
"main.dart.js_11.part.js": "c0e39395e5ba43d5fa61bf35bbf3fc53",
"main.dart.js_131.part.js": "d22f62988ce1d4b9881d79f4fb804142",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "dc286b94a75e6594b94df42ef456f15a",
"main.dart.js_100.part.js": "b55f2ed7a62682cec40bee00356dd6b0",
"main.dart.js_297.part.js": "1f508de524f214615533944fa96937c1",
"main.dart.js_70.part.js": "e9d5919be451bd26781125b9efe702d3",
"main.dart.js_187.part.js": "8c1474447600b665558f8264780befef",
"version.json": "c65b27966822a6adacf3dc48c8404c81",
"main.dart.js_264.part.js": "dbeac152d197b8fe8ac56ec28288a220",
"flutter_bootstrap.js": "a585d1d5368ca55ec60f5d6fa0e4a71c",
"main.dart.js_191.part.js": "1e2218e12b012c00e2392d583cba9cdb"};
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
