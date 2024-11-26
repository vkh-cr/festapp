'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "a3c6f473059d7382c0dc5f18901cfa37",
"main.dart.js_162.part.js": "8d5d798cfbbf96f0b7714cda3cc88f4a",
"main.dart.js_117.part.js": "de7e1c2ec98ae5fbf0a362efe8f94308",
"main.dart.js_244.part.js": "54c9f915d90483aabe5db53910602755",
"main.dart.js_83.part.js": "28a963cc87631a19492db57c14a48d1e",
"main.dart.js_254.part.js": "7b239b25ea9174172594f4c1aaae4fe3",
"main.dart.js_176.part.js": "b014decf06f8300f60e84db75648b637",
"main.dart.js_96.part.js": "248c7c63b7ce02b4f505cdb237708634",
"main.dart.js_245.part.js": "dfb65304c2a66b7ee1fb0486433f645b",
"main.dart.js_87.part.js": "43887d1505dfeedc8caf9e1e109ef7bd",
"main.dart.js_285.part.js": "b999cf0c530f7b7e4061fe6bbe6a6e2b",
"main.dart.js_251.part.js": "52e39377d6bb99380d153069472f871c",
"main.dart.js_126.part.js": "8a7ffac703cfaa91bc0a7c0cddc76053",
"main.dart.js_129.part.js": "e05af3b1fff8e6ab99c140592303f74c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_218.part.js": "7c2a36d14aceeefecf65b88aa280af8d",
"main.dart.js_172.part.js": "db8f1e0e14a4474d436533a722ee0962",
"main.dart.js_40.part.js": "7c4fd4d9752261e8dc005fc8dade039f",
"main.dart.js_48.part.js": "17b39bf9cc625f2d33d7c47a51df1066",
"main.dart.js_209.part.js": "6e70f410fa390848cb34805f9b57ea8e",
"main.dart.js_115.part.js": "5889deea1360d55d471bdc4d434f172d",
"main.dart.js_10.part.js": "6f350736544046d61ff94c87c0d7d0c9",
"main.dart.js_66.part.js": "144fa979030f94acba1a2a940014d667",
"main.dart.js_84.part.js": "d681be9f3562e0163e73d25ebe1f7a2c",
"main.dart.js_122.part.js": "d58d6188fd8f546a0e7d9349116c4324",
"main.dart.js_103.part.js": "2372fd0067153b26a880a263321bc784",
"main.dart.js_213.part.js": "c0d5b2bb1c7523f28a8d9dedce65c7e1",
"main.dart.js_89.part.js": "2868b69b74e57fd161227f57b3ef158f",
"main.dart.js_146.part.js": "4c7adc59c01f7dea3620aa41856401ad",
"main.dart.js_287.part.js": "9c007863a627b1bb8936809eb8cc531a",
"main.dart.js_283.part.js": "2fb4a117ab9eb546cc22a8aa86565a87",
"main.dart.js_132.part.js": "ae1d0947d058f9849a1c1dcadb40fcd2",
"main.dart.js_165.part.js": "12755c00a25c0baa9a74714a04b1a83c",
"main.dart.js_282.part.js": "cd3680a73ba3ca4ce8e3c4b80b4554ca",
"main.dart.js_127.part.js": "d7163e97c80fcec3d861e0a7e1d4e9af",
"main.dart.js_161.part.js": "915f2cb41a63f02ebe32552ff1751476",
"main.dart.js_175.part.js": "2bc49450a1def903450e5e0f4b91f094",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "e9429d02906aa225d6237ca69c9ac253",
"main.dart.js_169.part.js": "e64b05d3dab68677fa15a528ee9141b0",
"main.dart.js_13.part.js": "c28404cf715fd2f7d7e481c3ca92599e",
"main.dart.js_246.part.js": "2f7a39224c9c1486d62b1ffbc7fe7dfa",
"main.dart.js_174.part.js": "218935057b5009877081f100c3a0b052",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "d600cbb28fdacca69cb73263778e291f",
"main.dart.js_144.part.js": "1ef74a0f45114adb3e2d60cc72cb094c",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "4a30bde00068b4bedd847daf6fded55b",
"main.dart.js_265.part.js": "61c9c21630c9442742d21dadd97ff75a",
"main.dart.js_31.part.js": "6d0b871d12bcac54e5044ebee31a24c8",
"main.dart.js_119.part.js": "52fdb0a119341578f6adf0cea4882ae3",
"main.dart.js_18.part.js": "e3d9bc8b1c2d0ab77f53933992718d04",
"main.dart.js_35.part.js": "832a86c84d9a753ac6dd1407e3c95886",
"main.dart.js_200.part.js": "f5b787811dbc3563a777e2a4d8dbdfe1",
"main.dart.js_101.part.js": "ec92d408671c763367cad65aea86f0ce",
"main.dart.js_77.part.js": "d3b1e440a03ee8806d17e34ce811eb00",
"main.dart.js_149.part.js": "eeb8fa61496198e0e19a7ab399290a14",
"main.dart.js_67.part.js": "a1b6b1f52f410023f73667f36c23bf1e",
"main.dart.js_208.part.js": "d70badce9f4cdd63fdd1dc20c583a8f5",
"main.dart.js_82.part.js": "73b3f4fe11b2c02001028ede40c22e1e",
"main.dart.js_173.part.js": "9f978903935ebfe25ac46c183cd33f35",
"main.dart.js_106.part.js": "eadbbf931a7f506b2c2e466ad1f376bf",
"main.dart.js_273.part.js": "6e4adbfee0b415872710b3bcb5c6cb9e",
"main.dart.js_259.part.js": "57b5f7431ee5857aaa7f778bb3554f3d",
"main.dart.js_278.part.js": "68c0ff75804ab3dd415f28529241ec6c",
"main.dart.js": "9deea43a9968aface1d35cd6db5ccb64",
"main.dart.js_222.part.js": "56a199c46f1b970a4b014c8ffa6599a1",
"main.dart.js_232.part.js": "f52948f7cca6e5821c9da5be8adf87ba",
"main.dart.js_148.part.js": "3c81dc1b53d577fe2d022e300f73ca29",
"main.dart.js_124.part.js": "30c4b120cce958fe464d11ac2db438f1",
"main.dart.js_50.part.js": "c5e3c7ab85ca6f5ddf8226530c2baa60",
"main.dart.js_97.part.js": "061b88dcffd3f151eb39e42cb80c4b8f",
"main.dart.js_192.part.js": "92c5224369d2e4359a5bc95427acefe2",
"main.dart.js_91.part.js": "8d59068534b63372de96ea76eb86a794",
"main.dart.js_145.part.js": "e6ac047718d72dd72e4e3ecd273cf0c8",
"main.dart.js_190.part.js": "460b9a74715ed363d0fca101e9314906",
"main.dart.js_201.part.js": "ff6a8070d8b924465021b826e2de6cd0",
"main.dart.js_69.part.js": "fe22669adbeaf9f45470c60412e3adbf",
"main.dart.js_181.part.js": "4eff060d48d5f13cbef8b61665acbcd7",
"main.dart.js_270.part.js": "cadbf9eb9091a2da65fe6f017cd682c5",
"main.dart.js_108.part.js": "0c6a3d9f6ca8e06eeb308f4b239df86e",
"main.dart.js_158.part.js": "065d3d98f8cc515e6c2fcf0e1f3fe2bc",
"main.dart.js_33.part.js": "5ca915742ad19a7b8bec6fd85852337e",
"main.dart.js_275.part.js": "a8fad714490bed5340d847e3fbf09b22",
"main.dart.js_269.part.js": "395bb0de8427bc8539d3def794a424dd",
"main.dart.js_34.part.js": "e27ad89895c7bd8c174db0e41e4a0a20",
"main.dart.js_210.part.js": "5fe144416659a518a5d5e1dcec4d52d7",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "abb49701894cbd0185feaa56262849d2",
"main.dart.js_88.part.js": "cf39a38da89ec174a0ea2cec2fea990a",
"main.dart.js_202.part.js": "1a746279cae7029ce848203f5820e09f",
"main.dart.js_167.part.js": "48b4b862bee5056a96b064a6655da34e",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_7.part.js": "af75b77e55e93e9b0de5bcd6037c7dbd",
"main.dart.js_140.part.js": "14e5869c07b8028f7f041ab38677269b",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_27.part.js": "72c08e605cd539dd78833354f9ab779b",
"main.dart.js_4.part.js": "7611c9ce93e7008221030ed38acef56f",
"main.dart.js_219.part.js": "72b8b01926568da4b5b85991a5ce91f9",
"main.dart.js_116.part.js": "6cb4c13432b0f1c8a76d2b6c8a0c0b16",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "44ab09b518491f54af4e333750710a45",
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
"assets/assets/translations/uk.json": "d916db0051f2553fd629f5ff8ddfcfba",
"assets/assets/translations/pl.json": "ea43549dddb786fdb0bdffb63e7981ac",
"assets/assets/translations/sk.json": "5234ce81c749c1254b3707aeb84e9076",
"assets/assets/translations/en.json": "839054cee0fdb783176662fe2bf495f7",
"assets/assets/translations/cs.json": "d6772d952a5420c3ac67acc8622bafe6",
"assets/assets/translations/de.json": "1851af4836c8764b0cf9f34f468ca91b",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "21092cee812eaca83f55eb5e54aecf0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_147.part.js": "3e06c4fc7fded05764055ccd6c63815c",
"main.dart.js_60.part.js": "96a9ed5a4ee25af9bfd210bdef13ea03",
"main.dart.js_263.part.js": "ad8094299e3e7e93c4adfeba2cb10b9a",
"main.dart.js_220.part.js": "e7903eb088b0d5202ffc18a9f6bed75b",
"main.dart.js_25.part.js": "1ebfcd32d49d1376abcee6d5fbb8d91c",
"main.dart.js_249.part.js": "dda605193c4068f58421411c651214aa",
"main.dart.js_123.part.js": "fdeb083ac71f5fa9cfb9c42b7e1f5355",
"main.dart.js_241.part.js": "b5c01a55653d0a15d0c331be7dce1891",
"main.dart.js_8.part.js": "ef2ba2cb254d49e4d44b84e78af057ee",
"main.dart.js_198.part.js": "59f847e42f157697ea6f3898681f30e4",
"main.dart.js_81.part.js": "ae5165f9c430b2da3b44fba13c905088",
"main.dart.js_205.part.js": "f12b464eac1d9753ae4e40e5c889beef",
"main.dart.js_280.part.js": "b4433d42a60bb09a2b117e5226435dd8",
"main.dart.js_9.part.js": "a14ebb0359e6e97736ebe595b3f622a5",
"main.dart.js_22.part.js": "dc97d68cd8bdfe6fc228ef73fdd270b6",
"main.dart.js_272.part.js": "da38dee336b7e75e73f90eb351795139",
"main.dart.js_242.part.js": "748b28afd6cd6faa4985307e4484e302",
"main.dart.js_86.part.js": "5b45c2c9f75615ae6e303893b945136d",
"main.dart.js_23.part.js": "162d14e480c47899afe3dff2fdc30ee6",
"index.html": "1f89ca9710428eba3999ae71f7aab565",
"/": "1f89ca9710428eba3999ae71f7aab565",
"main.dart.js_94.part.js": "66d18ffbd20415a5509fa25cd1fded5c",
"main.dart.js_98.part.js": "3646a71254397260e5391f612233752f",
"main.dart.js_53.part.js": "1004acb80b790f58ba2354629156652e",
"main.dart.js_74.part.js": "7836f2e94587a37355c3ff05b9b6a5ae",
"main.dart.js_235.part.js": "7ea6106d223da7d02f983174780d0af7",
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
"main.dart.js_286.part.js": "d2bf91d4a14f1320ae967cf798178215",
"main.dart.js_118.part.js": "c7b71cd7f5dd2f6ccae6f87a3caa36f8",
"main.dart.js_262.part.js": "6330c4428c88f468a395cbd5591662ea",
"main.dart.js_26.part.js": "924065179ea762299e0459e5c685913b",
"main.dart.js_240.part.js": "e11ee494cf30d054b618e73f580acded",
"main.dart.js_20.part.js": "34dcd1102b7f41786083ee4d21c2d919",
"main.dart.js_189.part.js": "3ad5a25d4462e2cada80f3de7d8ab98e",
"main.dart.js_214.part.js": "af27e0266ef9351c1566c815520ba418",
"main.dart.js_51.part.js": "b9eb7ae36a6b6a27ab1186d76852e0da",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "a53a6d1c27379e40fcd57d4777755bd9",
"main.dart.js_72.part.js": "1804a84d4c6bfa8cc71769ebed78cf7f",
"main.dart.js_1.part.js": "e750141e93945baddff0cc6af4574d9a",
"main.dart.js_120.part.js": "fa1eac7b63472e20c94fc16f432d7a8a",
"main.dart.js_63.part.js": "ce97a0e26abfdc86d1d6f93d11c95663",
"main.dart.js_211.part.js": "09d6008c36ee82d72b91d1e405819282",
"main.dart.js_12.part.js": "8a16673e3b373b9c49ed7ae9b23e6d80",
"main.dart.js_157.part.js": "43017d5b93af51a5b1b8e5fb1b371ede",
"main.dart.js_281.part.js": "a992c0aaec64c93f19a8bb1202bf6b6f",
"main.dart.js_137.part.js": "49d14ad370a965c4eff0975eb4ccd4bd",
"main.dart.js_276.part.js": "b3bcbafd233f957e876fefebee4bdb6c",
"main.dart.js_28.part.js": "c6256d44962943aeb5cc451d2b55a50f",
"main.dart.js_135.part.js": "71f02a6e7ea8822b643bc6f5585cf740",
"main.dart.js_256.part.js": "56002bf9fc1ef853026ec66082e6598b",
"main.dart.js_237.part.js": "b161eaa9d832c8c61af77f5371d6934e",
"main.dart.js_138.part.js": "5a457d4f683a7d999d5efd2c90abfeb1",
"main.dart.js_193.part.js": "e5277c942f8e6885f71a812fe476517c",
"main.dart.js_17.part.js": "35190c250d5d4b12a3282525c6b99d5f",
"main.dart.js_206.part.js": "d45ac5ff3611c3c40836d9f51b8abba6",
"main.dart.js_231.part.js": "1b9c906b903a6a792ad5666e9a0fb426",
"main.dart.js_43.part.js": "4c16cf2c849097388bd8e36442226bc0",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "fcbe5afeeeb68127fa1eb3ea70b1bdb2",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "41a3f034959a660268d92a6892ad7591",
"main.dart.js_15.part.js": "0cc64d68ccdd9d7003fe106070647abd",
"main.dart.js_151.part.js": "ad387f0b78e46c6d73815267093f3799",
"main.dart.js_19.part.js": "fd032e5afa21204e81fc1a17f77f8a37",
"main.dart.js_284.part.js": "9c9e4dd695c7d1f7ff751f44b54d9b30",
"main.dart.js_255.part.js": "d30ceb642048b8c3c279538f537b4f94",
"main.dart.js_186.part.js": "1091bb65a4c4f50ec1f8ad4717cdabcc",
"main.dart.js_163.part.js": "2c3ee380d4f735c93babdbd50725ed39",
"main.dart.js_257.part.js": "c0b220565f684ffe6d7a9f97a6237692",
"main.dart.js_16.part.js": "07768afa3676e858b02f4cb987641817",
"main.dart.js_52.part.js": "ddeedc1460ce70ca70f14ecc52998bf0",
"main.dart.js_36.part.js": "6391284897460577fb466901dc1dd997",
"main.dart.js_199.part.js": "c977b450e0124d4d6481c6b49834d119",
"main.dart.js_253.part.js": "376ccbfe3396b9388523144b5f4395c2",
"main.dart.js_130.part.js": "dccf1f941bfaacd12415a0cd8cd107d1",
"main.dart.js_238.part.js": "785dc1a5ad085e5607265671d15703a6",
"main.dart.js_32.part.js": "9b23d948d3c314a01739c7a3cfb7db7d",
"main.dart.js_197.part.js": "d51523ecfeec201cfe44ab5d0aa474b9",
"main.dart.js_56.part.js": "3df110a93fbbba843bd05abad88a1def",
"main.dart.js_227.part.js": "2f817ff97219055fa1bb2415ec36df7f",
"main.dart.js_3.part.js": "4773e03670750cae33787f4024b62edd",
"main.dart.js_225.part.js": "67e2e3f5e02e01152f84b19b5e8924e6",
"main.dart.js_248.part.js": "97577d1e116aa19e4c5e5a7f02fed49b",
"main.dart.js_133.part.js": "0df3dc4c4be9627f7093d42f59940e90",
"main.dart.js_188.part.js": "13ed96c9a1255fb69291cacf35467094",
"main.dart.js_204.part.js": "db5f4294fb73a01f7b7a2fe33a160b5e",
"main.dart.js_24.part.js": "7954729298583ae9819b035c60b84c6e",
"main.dart.js_177.part.js": "0ca93e79a68c9f0c0b0d1e41e223eee2",
"main.dart.js_85.part.js": "dbff297e2bcd2c811cc2d8a212762ab2",
"main.dart.js_243.part.js": "006751137ad19ced3ddfd6deb58d34ff",
"main.dart.js_212.part.js": "9500fd8e8a13816112fd9741ea67cb48",
"main.dart.js_260.part.js": "1d5e8d882844a39f434d08089acc1804",
"main.dart.js_114.part.js": "e2400881ef52ae532e56a118d00a94fd",
"main.dart.js_39.part.js": "0a9bd17353e8385704c9ed73c3507934",
"main.dart.js_49.part.js": "7075ff26f3a96075614f70f5b25c5d77",
"main.dart.js_185.part.js": "af7e36e1483040bbee9dc715cc8efd2a",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "f5eb3a17f29c1334cdcce7861fe6097d",
"main.dart.js_171.part.js": "d9684f45475ba978a009eef83b866419",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "3127512d45da8028babc0e57c788f026",
"main.dart.js_134.part.js": "bc4f0f9d520d3643f486f95e0776b3fc",
"main.dart.js_121.part.js": "979bafe18c10fc181226c25024e8d32f",
"main.dart.js_55.part.js": "95979096bdecad62e40c1abec354b3a3",
"main.dart.js_112.part.js": "8313d5caaee414fd5db0ba908edf05fd",
"main.dart.js_139.part.js": "62360c0e935ada40e19d1fd45be7ecff",
"main.dart.js_80.part.js": "1cb5f34bd97daca080fbd82fad35f904",
"main.dart.js_252.part.js": "85e648c3caf5964ecde49bd85e76b474",
"main.dart.js_279.part.js": "27f24532416c473d7da2273462f65414",
"main.dart.js_30.part.js": "9ca9eacf90200f7967089c463c6c2475",
"main.dart.js_277.part.js": "8e91e5d0199bcf0775d3b9cada3eac08",
"main.dart.js_78.part.js": "08e0179530a15683b488acd1a12d9d24",
"main.dart.js_136.part.js": "8aea062842b9f9ae080611116f31bf10",
"main.dart.js_168.part.js": "5f69143e94a7b2921efedf5a101048c6",
"main.dart.js_59.part.js": "ff6bfdc39afc3fb3a65211d4097a2b71",
"main.dart.js_47.part.js": "19fddad43758aaf389d6e17e592ba321",
"main.dart.js_95.part.js": "ce4c05c285e07e9cd44ec58c5bc430ce",
"main.dart.js_107.part.js": "051b7341a95ae210f9960a9b9abfcf43",
"main.dart.js_29.part.js": "2ee33452fd850c3036cfe783e4c7bc1c",
"main.dart.js_61.part.js": "5f613247ca0935e9fd6706aab213c130",
"main.dart.js_58.part.js": "ff90602c14ff6e034bd2ff7719e6f6b1",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_79.part.js": "9df47057a11aec00f495d6c4dfd0698f",
"main.dart.js_109.part.js": "3270f91d3be458eb3b8cbffa49645e67",
"main.dart.js_92.part.js": "72b760e0f40954c3b58ee0792bba1f27",
"main.dart.js_223.part.js": "88c446e05b49071712d6c7f9050ab71d",
"main.dart.js_11.part.js": "8701367b5dd20a12341bcf7fd3e0a8ee",
"main.dart.js_125.part.js": "9e9e2f3445a6c982453263d7622707a8",
"main.dart.js_131.part.js": "c89142e82bf67108832a9f8b9f1440be",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "910a01fa899457c6e48b2b846001743a",
"main.dart.js_178.part.js": "88f5001dd76868d4a1a61bcd461b210a",
"main.dart.js_100.part.js": "6efd3e3889229d115d874629c2ea5be1",
"main.dart.js_258.part.js": "c43989d83ef113bdb1e5b8eb45a961ee",
"main.dart.js_187.part.js": "d9cd372902289337e69ca111c79f6807",
"version.json": "2d79e9579c98e3ee087cad47e6baaf07",
"main.dart.js_264.part.js": "2f09746739815f05652ba5fc7212589a",
"flutter_bootstrap.js": "9589dc333cf5e9f08cddb3df932da289",
"main.dart.js_191.part.js": "f5dba2204a20020e21e9c8177d93597f"};
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
