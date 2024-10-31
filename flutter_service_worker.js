'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "d06df2c050fd542982484e65c3743267",
"main.dart.js_162.part.js": "dd8aff69de64234ba418c9073fbbde39",
"main.dart.js_117.part.js": "db5105a5e1acb9b944eba66801c98a04",
"main.dart.js_75.part.js": "8cb789bd5a467441908edfeb815be996",
"main.dart.js_244.part.js": "199e016a5b04f1da5b50d0d66a784919",
"main.dart.js_83.part.js": "a619d39b5142b13092b43c6519c9fb24",
"main.dart.js_254.part.js": "8a2a71812cccd0bf362a5c940a428833",
"main.dart.js_96.part.js": "73833368a3a73e7ba76016c2cb43de82",
"main.dart.js_245.part.js": "acb324b5f85ae82074d7d7f95af88062",
"main.dart.js_87.part.js": "cb7327c4cbb645e94f53b1169c275b29",
"main.dart.js_251.part.js": "82841562c06e36f7b4ec12bdc4ec4d99",
"main.dart.js_126.part.js": "272cfb549e9e9c384d703690cde7a5b1",
"main.dart.js_129.part.js": "be2bd5fad9b9768f3363da24b326d660",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "700b15dc3318e7996820c727f8689b27",
"main.dart.js_218.part.js": "c42c29b92b0bab91507a9bee0243105b",
"main.dart.js_172.part.js": "f36120aa624b670c61248c2a2d6df6f1",
"main.dart.js_142.part.js": "34427f2373f20c8f2a1e3ad0a8f8b9c9",
"main.dart.js_40.part.js": "12923a1bbccf63efc78c589070790d11",
"main.dart.js_48.part.js": "275152a6ed7e013bdf30ac6447559a77",
"main.dart.js_209.part.js": "6a3825f76e6b793059bfdb995c85315b",
"main.dart.js_115.part.js": "458ca9738a5873d482714d39c75b2cab",
"main.dart.js_10.part.js": "1ce2c6dead1ae7e62eaf3f603b94c37c",
"main.dart.js_66.part.js": "039db70e10ff28e34b69534c0419890f",
"main.dart.js_84.part.js": "6ccfd75d6a0636dbb9ad0b78ecaac647",
"main.dart.js_122.part.js": "c5721d3de7512b32acfbccabc17d6fa1",
"main.dart.js_103.part.js": "d82cd17aadff2c9becdf0f1337dc5f2d",
"main.dart.js_230.part.js": "b1d4027902ef8a9f758b773565844df0",
"main.dart.js_153.part.js": "88e1c9acf72951f5029a2d5a875fea78",
"main.dart.js_41.part.js": "18d33fa9e75b7478bb89aafc3860d812",
"main.dart.js_146.part.js": "bd9176affc4dd74422b81adec578b462",
"main.dart.js_37.part.js": "4ea5804eee6a56aa46d5f9d7d440a6a6",
"main.dart.js_132.part.js": "3c59aa1f664d2f2fe55050e810ae0cc0",
"main.dart.js_165.part.js": "78399288afeed010583fbc3e28e88828",
"main.dart.js_127.part.js": "90696847138e4647ca0148dcb5bb9a3e",
"main.dart.js_161.part.js": "441ebcac38e3b8b81237b3d7d9e6ea96",
"main.dart.js_175.part.js": "41a1bfde62a6c9adbc5107eb5cf81b92",
"main.dart.js_239.part.js": "36952906b46d8105da113f77a1d6ad9e",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "362a2506019186af76f73b264f328f69",
"main.dart.js_216.part.js": "8d1e4dd1b7c71d34629ff0fe96da39db",
"main.dart.js_169.part.js": "8a0d7e07eb1a30beba8321d9011d9b40",
"main.dart.js_13.part.js": "1f3fe786066f6798eda1fb14268a1bfe",
"main.dart.js_246.part.js": "4423ea5ca3a61b6a465e7d198f38e6e4",
"main.dart.js_174.part.js": "91468af5fa9a064b5118db92a90fd36b",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "2b135840764859eee24a51b2eabbe0fc",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "626f249e18dd867af18456f2c0c3d4c7",
"main.dart.js_119.part.js": "bcec965e544cf599cc963dc840e3e955",
"main.dart.js_18.part.js": "95b3c300ea01793b4f436d912b2a4369",
"main.dart.js_35.part.js": "121c8cd22b9b208020b2f624f0479123",
"main.dart.js_200.part.js": "8d5c641796dedd02fef0c063f0c746ea",
"main.dart.js_73.part.js": "ad7d4ce0ca2e86d88c014a03837946ba",
"main.dart.js_101.part.js": "b8a2f8317e9c295185c9c85ce4a950c8",
"main.dart.js_77.part.js": "9cbbd36fc703b11e56dbbbdd2fe81d6c",
"main.dart.js_67.part.js": "03fe8faf127d9e6488638d74dc7b33b2",
"main.dart.js_208.part.js": "3241227e13869df8799de6f021899c3b",
"main.dart.js_82.part.js": "6a9658704bc8487a7bac0c5b840384bb",
"main.dart.js_173.part.js": "ec2b06b99c99672d3c8beff403c4e6df",
"main.dart.js_62.part.js": "cc7ea7c71973c06e3684a2d6cb7a12d6",
"main.dart.js_207.part.js": "10b42c5afa07a07df8c5fed16633a26c",
"main.dart.js": "f8bcaa8b7f066a6ad96896d5ae859802",
"main.dart.js_222.part.js": "b5fe1c16a4ba0d1eeef366ce8818707f",
"main.dart.js_232.part.js": "cbda94d8a2db26724bc51a5d7ce0b7df",
"main.dart.js_124.part.js": "b26cdb225477fae2395c29fda4204d3b",
"main.dart.js_50.part.js": "bf534053eb30ad40a28b4ce2c0b5de15",
"main.dart.js_97.part.js": "326be4a2769189fb893edd6931efbecf",
"main.dart.js_91.part.js": "c5c0f72f35b186d18c83041ee50c8422",
"main.dart.js_145.part.js": "d01e7c036c731459c87bbdfa91bd8d1a",
"main.dart.js_229.part.js": "4762ee518b129a32c6977dd33831ff2e",
"main.dart.js_57.part.js": "f71ad482493c97ef480d8d966f337d6f",
"main.dart.js_190.part.js": "862af0d7f7c45cd12c293c18f163aa11",
"main.dart.js_104.part.js": "b74285cfa9482a20f1c0b60d6d3c7b00",
"main.dart.js_69.part.js": "433fbf8342084a19ea3d530919177f71",
"main.dart.js_196.part.js": "2d8e47a63a0f5cb816559bb37fd1ee06",
"main.dart.js_108.part.js": "3eb81a6bdc0868783e7f5dbe5328763b",
"main.dart.js_158.part.js": "c96d718af881d4184f59251fc9ca8ff9",
"main.dart.js_33.part.js": "6a24113f46cd05dc71ffb85e7385ae79",
"main.dart.js_217.part.js": "233efb5e95aa2c4c0c187d6be82e6f81",
"main.dart.js_34.part.js": "19a844ffc417077e5d98d0815f138a50",
"main.dart.js_210.part.js": "940c2a27fe806cbb829a45e994539eca",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "4002f4c9f18ed1a550dfb34f902f20b4",
"main.dart.js_88.part.js": "f9ee8b54b66c394972e642e24977ab7a",
"main.dart.js_202.part.js": "fe09c2081204dbe436f26c1d035569bf",
"main.dart.js_183.part.js": "71eaddca544db6b1c938d96ac1948b16",
"main.dart.js_167.part.js": "2e78c434e7c7f156ff2bd7b87a5a124f",
"main.dart.js_203.part.js": "9157f2ef9c81fcc3753bff0dd8914706",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "d93b3988212b2929e0980bca05971d1a",
"main.dart.js_7.part.js": "498b90dd3e2a34a3014def26ffcf2e5e",
"main.dart.js_140.part.js": "60f322efd521d3c4ddc31cc1fb588dbc",
"main.dart.js_228.part.js": "bd687bc50d723fc24c27b39fbeb5c6e2",
"main.dart.js_170.part.js": "f75016aab270af56239ba6f648aa51d2",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "d8c400c702c2821221dc892ed66d5c25",
"main.dart.js_27.part.js": "b7fe576a1c3b6c137eb6242a37d2f8aa",
"main.dart.js_219.part.js": "53819260710340513634e00d6bb0795f",
"main.dart.js_116.part.js": "d587ee4f0d31689782a1601462116ba6",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "6d5e12bc5fd1fc57b3ea71227f516642",
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
"assets/NOTICES": "aa859f023e8e5aa082620769053a47ca",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "134dd5e8b4b793fe72a27795a5ba175c",
"assets/AssetManifest.bin.json": "e03198692d1181d267f55fa0f38ba200",
"main.dart.js_60.part.js": "07ff2b063767c9f502b6322d5a0c4d52",
"main.dart.js_25.part.js": "6b45ffeeb6f678d018bc068503de1637",
"main.dart.js_141.part.js": "b0a4b3d12ae7f54383e00bff34313130",
"main.dart.js_249.part.js": "d0f84aeb8104e7f9c27854fc9953869a",
"main.dart.js_123.part.js": "343a1b880f376166df6208957e0508b0",
"main.dart.js_241.part.js": "d49eafaa454615a6194fad05c6b0a1c4",
"main.dart.js_8.part.js": "85a68812b6297da9da71658a41ed3405",
"main.dart.js_198.part.js": "c8682b1f81fea2935dc5a3e36a223f2b",
"main.dart.js_81.part.js": "9fc8050595f0840253d0b22ea05a03f6",
"main.dart.js_113.part.js": "6b4b62376bd0ffd229fb09f1e23a08c2",
"main.dart.js_9.part.js": "e986e28e3a5ccedf0ab0efece966cd1c",
"main.dart.js_22.part.js": "25d82c3c64ee940fa81078122ecfca19",
"main.dart.js_242.part.js": "436a17d668b2305154f57da55608f17d",
"main.dart.js_86.part.js": "670d181170922195a9b2b16ecf2993fd",
"index.html": "346ddeabb1fe0b820dda0d63f33a5b7e",
"/": "346ddeabb1fe0b820dda0d63f33a5b7e",
"main.dart.js_94.part.js": "1291cea751903f0d173bb4201b43d45c",
"main.dart.js_98.part.js": "9e949c0cb3e235c3c01ed467ff8fd721",
"main.dart.js_53.part.js": "48cb54f129559cd09686b0c78037ab5e",
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
"main.dart.js_26.part.js": "de99378a54277e526024e3264a780400",
"main.dart.js_240.part.js": "9e032eefc5935ce231a27acbc5502dd9",
"main.dart.js_20.part.js": "51850848c152dd8978d92d9b4eee2aa7",
"main.dart.js_189.part.js": "3a8c37431cc27f5e3bd063e93e96c363",
"main.dart.js_51.part.js": "14a9cbeea371ce1166a247fadd7914c3",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "48d278e3a907add4848521f4ca0d4c11",
"main.dart.js_72.part.js": "060341a6e4c881900362aee67ba19ce2",
"main.dart.js_1.part.js": "0793ebaa92e13a46744ebf562e8e4102",
"main.dart.js_160.part.js": "d6103a02e8bd7d1d2e38435b273b535c",
"main.dart.js_120.part.js": "1d86fd13c183441f6aaa31795bf0ea81",
"main.dart.js_63.part.js": "549ba27edfa57b96097fca21891f87af",
"main.dart.js_211.part.js": "d1e0c0e536f7ac1b2f0a320c068fc6a7",
"main.dart.js_45.part.js": "9f438037f37be1b082756fbeac77f7eb",
"main.dart.js_12.part.js": "014729241c1c7e78c24389a7045b8fad",
"main.dart.js_221.part.js": "8f007f576ba99be98a26f9e41bbc7922",
"main.dart.js_28.part.js": "bef570b24e253b0a3a82c7e5271aa3f3",
"main.dart.js_135.part.js": "dc7dee15022994098bbed251043a9554",
"main.dart.js_6.part.js": "4226a0f5f6ad95f6d8ca57dcdf8793c1",
"main.dart.js_237.part.js": "e978fc44db9a667d488d5cbf86a78c5c",
"main.dart.js_138.part.js": "34b943c5fce5c6fa779654ebd8224ac7",
"main.dart.js_193.part.js": "fccb87838cf250d57500f026c586b938",
"main.dart.js_17.part.js": "245b0603676818fc0f4d7883b0c486d6",
"main.dart.js_206.part.js": "0bd8e0981a65b18ed15286115762987f",
"main.dart.js_231.part.js": "9eb4e3741170088ec95f21fd2beb8b42",
"main.dart.js_43.part.js": "3b6adb123a8483998d6f5c06d6a23e0c",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "73f331de66645d9fb8b378a2672d05d4",
"main.dart.js_15.part.js": "53865a4332fe179f74c4f4df47c594f9",
"main.dart.js_151.part.js": "9abc7a30a8562c6cce987e53aea7c5cb",
"main.dart.js_19.part.js": "82cf40228cdafa10886d31bf5646ca01",
"main.dart.js_255.part.js": "3dfc90d7a8d67d5da5399880d63dbc32",
"main.dart.js_186.part.js": "a2ac6c9e2b44f35feadb7118b51dc98d",
"main.dart.js_163.part.js": "dcf8ffe2e15b2250091c0cc606081f24",
"main.dart.js_257.part.js": "c904f3d94367dcdb34bdcae0b359e726",
"main.dart.js_16.part.js": "ccd99d9bcf723b73d54fdd2845cfb764",
"main.dart.js_250.part.js": "0c1343a537767bc349cc16d299fb7fc1",
"main.dart.js_52.part.js": "eaf8599a7af29b4d59515b6e4a1f32fc",
"main.dart.js_199.part.js": "1888ac7a79cf0b7108bd8222f722ef55",
"main.dart.js_253.part.js": "7a69d1518e90f17576e10367b7ec38d7",
"main.dart.js_130.part.js": "aa78b28ebffff5044bf6d6f62b9b8fe9",
"main.dart.js_238.part.js": "3fcd325aaf5309fe75443f94931691f9",
"main.dart.js_152.part.js": "271135a739f241a8132b6757d6d0c7d0",
"main.dart.js_197.part.js": "f8dd8e70c7f56efbc2dddb4846204dd2",
"main.dart.js_56.part.js": "d569340e8ae7ac2e1cfeef4e90cee039",
"main.dart.js_227.part.js": "9a927f5100e7e860f8498056f5d54d63",
"main.dart.js_3.part.js": "f1bfaa55143f5e210b2b423d57ad17e4",
"main.dart.js_38.part.js": "8d36c6ecdf2c8a5191776ed8e9bc1482",
"main.dart.js_225.part.js": "fea52cceefcd0cc09da0766bad659d0d",
"main.dart.js_248.part.js": "23ba6252b79fc01bb1075adbfcbc3876",
"main.dart.js_133.part.js": "7d6332618367c76178bc24077dab95a8",
"main.dart.js_21.part.js": "c82a6f2b2e74f7aa26361b098a20862e",
"main.dart.js_188.part.js": "206eecc562d95e3620b389af63781bd6",
"main.dart.js_204.part.js": "bdf219d70eeb64457d909ac8ad1d3f82",
"main.dart.js_24.part.js": "47781636a846749cdfe5142b5b7e93cb",
"main.dart.js_90.part.js": "8a687436d22cb94b2aa03403beba7593",
"main.dart.js_111.part.js": "99650f56db37143c285cd7d914cc4397",
"main.dart.js_177.part.js": "cd5ba925e901db7d9f12bc6ada6edd43",
"main.dart.js_85.part.js": "93f0a49a166aa6b27a2f584b74ab55ea",
"main.dart.js_243.part.js": "8cd07ffad3f11c5b2f29d8929b31f00a",
"main.dart.js_114.part.js": "bc3eebfc9f97c2d725ffc38fcc31f499",
"main.dart.js_39.part.js": "d13106c37fc5905ee0c7a343fb66fa38",
"main.dart.js_185.part.js": "fb917bc229ff1c3e68b60dfc82ce0680",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "e431c836193bb0635734dc1015fc2437",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "c2ef761522f9dd4dbe3583461bf30c6b",
"main.dart.js_195.part.js": "aa2769da9f52bcd2fab28eaaca8b96d6",
"main.dart.js_44.part.js": "4f89d835dedd9e030a5aa417cccb1e24",
"main.dart.js_121.part.js": "47c57f02134f2b1049484b3bc669e80b",
"main.dart.js_215.part.js": "f37e5880b670123f45a69e7d387a4b07",
"main.dart.js_112.part.js": "5cbd6d144e7d1d73ca0715032961d420",
"main.dart.js_139.part.js": "7df4257e8b655c26fbae9b2b4e5f14d0",
"main.dart.js_143.part.js": "4e85af8bda9f24b7939c9b502fa0e8de",
"main.dart.js_80.part.js": "c89dd624567fa6d545d9ac6261f48d6c",
"main.dart.js_252.part.js": "d56bd4ed168c8f08b0aaca94594d0560",
"main.dart.js_30.part.js": "9b48477b962a307b30e14af37ec2e707",
"main.dart.js_78.part.js": "b18ea55214b5f3048ee23a4099845945",
"main.dart.js_136.part.js": "ad5c69bb83ea21858323f33a5fa5ca5f",
"main.dart.js_168.part.js": "a8b00b736fe0283719df3b12483b1c7f",
"main.dart.js_159.part.js": "46ea990b3d2c39ec4f171d72e986bfed",
"main.dart.js_47.part.js": "98259833e0727ad0f0b88f3444e05377",
"main.dart.js_95.part.js": "7839550cbab1c86bee793b58a9fce199",
"main.dart.js_107.part.js": "227709e3d5a42225f6031ac9b05c3207",
"main.dart.js_29.part.js": "a2d472c504ecd7b06253f75840225a2a",
"main.dart.js_194.part.js": "51c1626a23c3fc9c2d600af029b39b92",
"main.dart.js_61.part.js": "aac6ad02402a3395ab1cbb7bbe1f30cd",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "e0cfa52a52b1bf69b5232444cc5793f4",
"main.dart.js_54.part.js": "a25dae75344837bdff0158ab75fcb086",
"main.dart.js_79.part.js": "dd6f1495d036441829be6f166a32af45",
"main.dart.js_109.part.js": "697c8632bed8802bc67faa6ed4f76ba2",
"main.dart.js_92.part.js": "6e7a62dfdfedf53b487316f1c4060212",
"main.dart.js_224.part.js": "f322de063fe98540d12a8a992661bfc5",
"main.dart.js_223.part.js": "a4f5ebe424403082daa1848e373d13cb",
"main.dart.js_11.part.js": "a856ea0456d82dff5ed44244cfe9d8d1",
"main.dart.js_125.part.js": "1d74ebc38c6257acb21d4b820bb3bb66",
"main.dart.js_131.part.js": "7ebb2a745c80f9dabb2329bb5e6322db",
"main.dart.js_226.part.js": "6b98a6a31fa372a7a2bc256d1a5de8d4",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "4322c43a475d9697e369f3a5febfec55",
"main.dart.js_178.part.js": "4e9486ac0ce483d38ed8b82f93f8d1ea",
"main.dart.js_187.part.js": "1f8767672fc1b5b82c02f11b333d1191",
"version.json": "931143561f8c3501c71e062ebbae3b6e",
"flutter_bootstrap.js": "7ed9c7ff99d493553c8c381ebecddfc4"};
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
