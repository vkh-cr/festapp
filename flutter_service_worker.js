'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "7d5683106c0a5b366da3b2eb0ed67a1c",
"main.dart.js_162.part.js": "dd8aff69de64234ba418c9073fbbde39",
"main.dart.js_117.part.js": "64616efbfb5cd8b8fc4a9165d7f5f5ee",
"main.dart.js_75.part.js": "2416312108721df270226d4687caf179",
"main.dart.js_244.part.js": "35325be4a319f9928f892de5ab5eebf4",
"main.dart.js_83.part.js": "5fbac913fddb104fbe5ce1a7d90d4bda",
"main.dart.js_254.part.js": "8a2a71812cccd0bf362a5c940a428833",
"main.dart.js_96.part.js": "73833368a3a73e7ba76016c2cb43de82",
"main.dart.js_245.part.js": "ad77cc6dd7b388e2f09d3f8cc84633ec",
"main.dart.js_87.part.js": "1b6676ee7ee681437648c9118d311774",
"main.dart.js_251.part.js": "d0a5b6e95d00ab0ef6ed7fa0b765c51a",
"main.dart.js_126.part.js": "2b313cc023bc8b620026541533d35982",
"main.dart.js_129.part.js": "3f715c6c1b9640f8f3566e6429d60cac",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "dcb1c5118f4b19c68c1eb23a4d9781da",
"main.dart.js_218.part.js": "c42c29b92b0bab91507a9bee0243105b",
"main.dart.js_172.part.js": "aa8d4c102eb84775be60af1d61d4f2ca",
"main.dart.js_142.part.js": "34427f2373f20c8f2a1e3ad0a8f8b9c9",
"main.dart.js_40.part.js": "12923a1bbccf63efc78c589070790d11",
"main.dart.js_48.part.js": "275152a6ed7e013bdf30ac6447559a77",
"main.dart.js_209.part.js": "c63b5b88a15dc064397271261be313be",
"main.dart.js_115.part.js": "f13e616bc2178b94b0a79702cb33a5a9",
"main.dart.js_10.part.js": "0c0b9a905f3e7c0ad0205daf5021826d",
"main.dart.js_66.part.js": "86d4dfd2853c4f7eb055ed890ec6bd99",
"main.dart.js_84.part.js": "6ccfd75d6a0636dbb9ad0b78ecaac647",
"main.dart.js_122.part.js": "1ab709ef799bb1f4fea0b99b8c32a0d8",
"main.dart.js_103.part.js": "dca43b486f23ed131a6bdcdc7e616a89",
"main.dart.js_230.part.js": "b1d4027902ef8a9f758b773565844df0",
"main.dart.js_153.part.js": "88e1c9acf72951f5029a2d5a875fea78",
"main.dart.js_41.part.js": "18d33fa9e75b7478bb89aafc3860d812",
"main.dart.js_146.part.js": "34ff21e754307f4ebf933ac85a5a38be",
"main.dart.js_37.part.js": "f9ca6ad021ab50fb983213e1c2cc2098",
"main.dart.js_132.part.js": "cf41f9aa68486145d2ed4a5531af0a50",
"main.dart.js_165.part.js": "40fe0a309595d62853622408a28be460",
"main.dart.js_127.part.js": "90696847138e4647ca0148dcb5bb9a3e",
"main.dart.js_161.part.js": "0e510bb9d0caa637a1b90c9e46237d05",
"main.dart.js_175.part.js": "837da0de9fd0bdc887d8572f38536b69",
"main.dart.js_239.part.js": "8881932d95ac05d9c3860b7128a96b05",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "362a2506019186af76f73b264f328f69",
"main.dart.js_216.part.js": "11d60b4d577e2cfa22276bcfc8178ab0",
"main.dart.js_169.part.js": "8a0d7e07eb1a30beba8321d9011d9b40",
"main.dart.js_13.part.js": "927b0405742d575cbe974bfbd99771ce",
"main.dart.js_246.part.js": "caf9f0bc9ca7698b8f8e5e6c3d8923d1",
"main.dart.js_174.part.js": "d6367a89d8bfe7e14242a8b05b25aba3",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "4b4b6c37c0c93de29d7ad1940dfb6fd5",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "626f249e18dd867af18456f2c0c3d4c7",
"main.dart.js_119.part.js": "bcec965e544cf599cc963dc840e3e955",
"main.dart.js_18.part.js": "95b3c300ea01793b4f436d912b2a4369",
"main.dart.js_35.part.js": "121c8cd22b9b208020b2f624f0479123",
"main.dart.js_200.part.js": "9b17624f73fae4ae0a9e8f5eaab5ef27",
"main.dart.js_73.part.js": "ad7d4ce0ca2e86d88c014a03837946ba",
"main.dart.js_101.part.js": "ccd63d7c9e9ccf9b6a6da4f747aecb16",
"main.dart.js_77.part.js": "9cbbd36fc703b11e56dbbbdd2fe81d6c",
"main.dart.js_67.part.js": "374cb13e56d23e8c0eb5a45836fd0394",
"main.dart.js_208.part.js": "2a62638ca7edd86bfbc56c1eb1ffc527",
"main.dart.js_82.part.js": "b4ca624f005dfee22fa756a76f7bac70",
"main.dart.js_173.part.js": "9705da9561988731371c4f84f1547bb0",
"main.dart.js_62.part.js": "1e35a2bb9ed13751914104e34d9b01b4",
"main.dart.js_207.part.js": "9f6436475b51042b7ca87cb8e44c3c8f",
"main.dart.js": "9293f3a70841466ae454351120c2d149",
"main.dart.js_222.part.js": "608aee8d26ae8544cbefc51ff7c93eee",
"main.dart.js_232.part.js": "1a700ad795fe8918638c29d20b1738bb",
"main.dart.js_124.part.js": "7128df2f32ceb120fed3412fd0fe9a3d",
"main.dart.js_50.part.js": "43bec7e2aec0ecadf6c7df2230cc96c6",
"main.dart.js_97.part.js": "c5b455fe2d4a1a86406054f05fa2e11c",
"main.dart.js_91.part.js": "cd4d75c8683227397acd79da0d1e5607",
"main.dart.js_145.part.js": "d01e7c036c731459c87bbdfa91bd8d1a",
"main.dart.js_229.part.js": "4762ee518b129a32c6977dd33831ff2e",
"main.dart.js_57.part.js": "86f42fbb76137739de5c11a6e5c0a7cc",
"main.dart.js_190.part.js": "0bd00f602209b95d90716114698045eb",
"main.dart.js_104.part.js": "76f43d2903a53312db2c2b628a8e1e7c",
"main.dart.js_69.part.js": "7fa14264e0d90e54d8ab562a3b77d491",
"main.dart.js_196.part.js": "1c2e595c7a6c7246046fabb7b4d70ea6",
"main.dart.js_108.part.js": "3eb81a6bdc0868783e7f5dbe5328763b",
"main.dart.js_158.part.js": "6c19d3ce161552d0454e0ee2261cc664",
"main.dart.js_33.part.js": "6a24113f46cd05dc71ffb85e7385ae79",
"main.dart.js_217.part.js": "730e4f9ff59058be0af324306c5de4e5",
"main.dart.js_34.part.js": "34e3ec6d3a5f36d34260b19a91401de7",
"main.dart.js_210.part.js": "940c2a27fe806cbb829a45e994539eca",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "4002f4c9f18ed1a550dfb34f902f20b4",
"main.dart.js_88.part.js": "f9ee8b54b66c394972e642e24977ab7a",
"main.dart.js_202.part.js": "da564f6bf50e7ab239b9bc04d0680211",
"main.dart.js_183.part.js": "71eaddca544db6b1c938d96ac1948b16",
"main.dart.js_167.part.js": "59c5e53b533b9fff0ec8d197fcc611a1",
"main.dart.js_203.part.js": "d31907ddbbb057ce27eeaf0c3f29e214",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "487a94dd85873168367bd7b5bcb36416",
"main.dart.js_7.part.js": "498b90dd3e2a34a3014def26ffcf2e5e",
"main.dart.js_140.part.js": "22afa252779b8d33442b98831394f2e0",
"main.dart.js_228.part.js": "b55c5dd6dd26b73383091c1e96e15e5d",
"main.dart.js_170.part.js": "f75016aab270af56239ba6f648aa51d2",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "d8c400c702c2821221dc892ed66d5c25",
"main.dart.js_27.part.js": "5c531c48e9f1b8cad21c24de02a5b158",
"main.dart.js_219.part.js": "0e3ca98512e7442714659f419040086b",
"main.dart.js_116.part.js": "d587ee4f0d31689782a1601462116ba6",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "b351921f5458855cfdbdef3cb5c82bee",
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
"assets/assets/translations/uk.json": "a88b1c3a097d91249edda40144c5cd3e",
"assets/assets/translations/pl.json": "8a2b467bcc5301150f4ac72290d1bbd0",
"assets/assets/translations/sk.json": "9416fa3e4a44d4a4450ac6dee89df82b",
"assets/assets/translations/en.json": "7c180b167bd195ca8e204928f418cec6",
"assets/assets/translations/cs.json": "a67d234f5f9f037cfde9ba6323312bce",
"assets/assets/translations/de.json": "c0bb019cf7b419dc53884e3a5ef3e6d5",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "aa859f023e8e5aa082620769053a47ca",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_60.part.js": "b3bc6b0056de4d126b114e7444f004ad",
"main.dart.js_25.part.js": "6b45ffeeb6f678d018bc068503de1637",
"main.dart.js_141.part.js": "af11731f06c5a8321d3f737f7249c232",
"main.dart.js_249.part.js": "783ee1620dba0ade143166e208e2c160",
"main.dart.js_123.part.js": "88afcdeb0ef2c100d444a8e0ce74fbcd",
"main.dart.js_241.part.js": "a80acab5f77c5c593f852465a556a334",
"main.dart.js_8.part.js": "85a68812b6297da9da71658a41ed3405",
"main.dart.js_198.part.js": "169c44b48533dfcfefbb7d6e107874cb",
"main.dart.js_81.part.js": "d8463e1d6ac8ea62b5d0e30faea767e1",
"main.dart.js_113.part.js": "6b4b62376bd0ffd229fb09f1e23a08c2",
"main.dart.js_9.part.js": "e986e28e3a5ccedf0ab0efece966cd1c",
"main.dart.js_22.part.js": "821365d36f3676d477c6bf117272107e",
"main.dart.js_242.part.js": "436a17d668b2305154f57da55608f17d",
"main.dart.js_86.part.js": "0f1c0ef8bedf18fa0613a5cf110319f7",
"index.html": "93de97259e97cba6e9368cb94fe9e3f7",
"/": "93de97259e97cba6e9368cb94fe9e3f7",
"main.dart.js_94.part.js": "0ed97d4583dbc99c299efe8ba8409762",
"main.dart.js_98.part.js": "9e949c0cb3e235c3c01ed467ff8fd721",
"main.dart.js_53.part.js": "5a7df0c7f5d838b5f0547de9c5fbf9a0",
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
"main.dart.js_118.part.js": "c41d16b3a9377ce37831eeb6b17a363d",
"main.dart.js_26.part.js": "64afb56c1d78dfa657464605367ec52d",
"main.dart.js_240.part.js": "9e032eefc5935ce231a27acbc5502dd9",
"main.dart.js_20.part.js": "f95a28cd1cc2b5c84c75f0bb6524f457",
"main.dart.js_189.part.js": "3a8c37431cc27f5e3bd063e93e96c363",
"main.dart.js_51.part.js": "14a9cbeea371ce1166a247fadd7914c3",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "48d278e3a907add4848521f4ca0d4c11",
"main.dart.js_72.part.js": "1178a7a9fd80a6d8c3c0dfafd3c2d42e",
"main.dart.js_1.part.js": "ebff53178b54e675daf82b01af57d504",
"main.dart.js_160.part.js": "d6103a02e8bd7d1d2e38435b273b535c",
"main.dart.js_120.part.js": "1d86fd13c183441f6aaa31795bf0ea81",
"main.dart.js_63.part.js": "34ce16f229b75ece00da449bf09ee355",
"main.dart.js_211.part.js": "da00dc80b354b7a7682d321d24f29861",
"main.dart.js_45.part.js": "92b6b79d34fd5f82a97fb001bdceeca8",
"main.dart.js_12.part.js": "014729241c1c7e78c24389a7045b8fad",
"main.dart.js_221.part.js": "080e8b931b589b2d460dafec91670bd3",
"main.dart.js_28.part.js": "bef570b24e253b0a3a82c7e5271aa3f3",
"main.dart.js_135.part.js": "9706c38069484aab24da81d5b236484e",
"main.dart.js_6.part.js": "8152262c51dcb91922b837b1bccc0b8a",
"main.dart.js_237.part.js": "bda43753e3f561ab66ee59f94c2fa8fe",
"main.dart.js_138.part.js": "fd8910a0396dd188c5f253a5b78d6dba",
"main.dart.js_193.part.js": "fccb87838cf250d57500f026c586b938",
"main.dart.js_17.part.js": "5815576814bfad2be9618b7f4862194a",
"main.dart.js_206.part.js": "0bd8e0981a65b18ed15286115762987f",
"main.dart.js_231.part.js": "8d969c5ce6394f58aa075f8c8343d28b",
"main.dart.js_43.part.js": "eaac374764dc9b44d84d0394e3e9dd19",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "4295d2646ac63b0ea10c2f280bd1b0d4",
"main.dart.js_15.part.js": "7ba0b7d71c4e074d0adfe3399d718c68",
"main.dart.js_151.part.js": "338b5b1dd8c5e1d850b47bc504acf8e1",
"main.dart.js_19.part.js": "93145bde1d46f6830f4718ff8bce2bd0",
"main.dart.js_255.part.js": "9a2de01da92400e0021c054b5c88facf",
"main.dart.js_186.part.js": "a2ac6c9e2b44f35feadb7118b51dc98d",
"main.dart.js_163.part.js": "655a25579727c26ceafe46495deedacc",
"main.dart.js_257.part.js": "7f496d1552790bc9d67c912fe37cb1fb",
"main.dart.js_16.part.js": "ccd99d9bcf723b73d54fdd2845cfb764",
"main.dart.js_250.part.js": "0c1343a537767bc349cc16d299fb7fc1",
"main.dart.js_52.part.js": "eaf8599a7af29b4d59515b6e4a1f32fc",
"main.dart.js_199.part.js": "1888ac7a79cf0b7108bd8222f722ef55",
"main.dart.js_253.part.js": "ca8c69071c5b6a411cad7301699fc86e",
"main.dart.js_130.part.js": "79d4fea60969c4ee599e6dc4f6046950",
"main.dart.js_238.part.js": "4852cdac6e8c162345d3ce973d474f8f",
"main.dart.js_152.part.js": "271135a739f241a8132b6757d6d0c7d0",
"main.dart.js_197.part.js": "c6318df1de5b01b00dea73393b402f9b",
"main.dart.js_56.part.js": "d569340e8ae7ac2e1cfeef4e90cee039",
"main.dart.js_227.part.js": "9a927f5100e7e860f8498056f5d54d63",
"main.dart.js_3.part.js": "1039ca2084046c6dd5b51585a25c0972",
"main.dart.js_38.part.js": "8d36c6ecdf2c8a5191776ed8e9bc1482",
"main.dart.js_225.part.js": "fea52cceefcd0cc09da0766bad659d0d",
"main.dart.js_248.part.js": "e8d6f870092c5216fa9a47c396baab9f",
"main.dart.js_133.part.js": "aa80c56120097d4d1c012231f85f50bf",
"main.dart.js_21.part.js": "f881a0baacc9a1fdc4a329dc545b50a6",
"main.dart.js_188.part.js": "def8f1f94cc5ab1b8cc42df9a1c29201",
"main.dart.js_204.part.js": "bdf219d70eeb64457d909ac8ad1d3f82",
"main.dart.js_24.part.js": "5c6389d4bace8609ad77ffc0fe11ce72",
"main.dart.js_90.part.js": "8a687436d22cb94b2aa03403beba7593",
"main.dart.js_111.part.js": "806177fdccf1508a1c1cb764c8f8ec6e",
"main.dart.js_177.part.js": "255dd33a016ca55fbaea096b0835dcb2",
"main.dart.js_85.part.js": "93f0a49a166aa6b27a2f584b74ab55ea",
"main.dart.js_243.part.js": "733d36e61d58866afa2b7098b897ae35",
"main.dart.js_114.part.js": "bc3eebfc9f97c2d725ffc38fcc31f499",
"main.dart.js_39.part.js": "d13106c37fc5905ee0c7a343fb66fa38",
"main.dart.js_185.part.js": "71aece50e129c640a0fa567dea0c01d7",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "6723472450ad6ded2a5d1798c28d2f41",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "b33cb2fc6abe68cb037474fa3d83efd0",
"main.dart.js_195.part.js": "e852b3cfc1587c845561c80d3d8b3485",
"main.dart.js_44.part.js": "e38ee9edf43a24a4c28ec726fde2c800",
"main.dart.js_121.part.js": "161583d49f44abb00f3a656ff409550b",
"main.dart.js_215.part.js": "c3245fc09d8c57aed3e723f7f8817219",
"main.dart.js_112.part.js": "5972e9ee02838ecd595d93dd5de35190",
"main.dart.js_139.part.js": "7df4257e8b655c26fbae9b2b4e5f14d0",
"main.dart.js_143.part.js": "9a799f72d9203da7d14e292c14c47241",
"main.dart.js_80.part.js": "88cf4a9eabb4c2b91e30eb36289a9546",
"main.dart.js_252.part.js": "66ea0d03728d92bcc410a252b2b69f96",
"main.dart.js_30.part.js": "9b48477b962a307b30e14af37ec2e707",
"main.dart.js_78.part.js": "46caa16ff11d894e8386f6cbc95338e8",
"main.dart.js_136.part.js": "ad5c69bb83ea21858323f33a5fa5ca5f",
"main.dart.js_168.part.js": "beedee71cbd5ccc3cf454febd1e82365",
"main.dart.js_159.part.js": "00460ee1f8eaec41f234c393afc38145",
"main.dart.js_47.part.js": "98259833e0727ad0f0b88f3444e05377",
"main.dart.js_95.part.js": "8681975aa2d8384a737a8d6599983608",
"main.dart.js_107.part.js": "227709e3d5a42225f6031ac9b05c3207",
"main.dart.js_29.part.js": "a2d472c504ecd7b06253f75840225a2a",
"main.dart.js_194.part.js": "6d489794afe3f23e68c1a3d0eaaeed0f",
"main.dart.js_61.part.js": "aac6ad02402a3395ab1cbb7bbe1f30cd",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "5c63f4a730913dce943bd83ce37498ad",
"main.dart.js_54.part.js": "a25dae75344837bdff0158ab75fcb086",
"main.dart.js_79.part.js": "dd6f1495d036441829be6f166a32af45",
"main.dart.js_109.part.js": "697c8632bed8802bc67faa6ed4f76ba2",
"main.dart.js_92.part.js": "2583bae5aec6af9f828d7c3dc175266c",
"main.dart.js_224.part.js": "776d78f9caadd8d2af6c9b19e81b9e8e",
"main.dart.js_223.part.js": "025e9c8dbed0411cf578bb5de4bddb30",
"main.dart.js_11.part.js": "5e4f9d6f104e5d71ca3ce4d00fc39acb",
"main.dart.js_125.part.js": "c363d7f55e11476fd4af37cc3b878421",
"main.dart.js_131.part.js": "7ebb2a745c80f9dabb2329bb5e6322db",
"main.dart.js_226.part.js": "7973bc20bf78aef581c7c53c9cdeb3d0",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "2eba8e1c3361681935786a48900cd31a",
"main.dart.js_178.part.js": "c53c91cec99970cd0eda16b74a7bbd9b",
"main.dart.js_187.part.js": "253f842383396a951e1210705e3e7a5c",
"version.json": "931143561f8c3501c71e062ebbae3b6e",
"flutter_bootstrap.js": "783aebb05b12ce3460e42fcd2360b5fd"};
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
