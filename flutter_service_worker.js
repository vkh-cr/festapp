'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "2cbcc1d705bdd482e252dd352acaca67",
"main.dart.js_162.part.js": "20b770c56bae30987e07881d121237af",
"main.dart.js_117.part.js": "857f29b1b8457f56e22a81e971cf9092",
"main.dart.js_182.part.js": "54f183dcd32a5c9411ad0593d6344319",
"main.dart.js_75.part.js": "3057cf5a06921d867e918ec4ade1ac64",
"main.dart.js_244.part.js": "0ae38af9f19298101aaf150e86efc692",
"main.dart.js_83.part.js": "25c0e2ff2c3499a550fdddf81887b77e",
"main.dart.js_254.part.js": "97f40645544813b0cc1a10c1e16b34fc",
"main.dart.js_176.part.js": "f466ec4aa3554a888b090143ab3890d5",
"main.dart.js_96.part.js": "bd319e5f5b9bc7627d9441f3637d5913",
"main.dart.js_245.part.js": "3ae1d493799f07a67e6984992e58d9af",
"main.dart.js_87.part.js": "2470182b508eaa8ad9b3acd96570a0b9",
"main.dart.js_126.part.js": "9f5e74cacbf71fa0a4c112f271031a20",
"main.dart.js_129.part.js": "b5fcbd80af57c2ce712bb959a3c1d0a7",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "17f3bdf64d606ef72fb98ee27f4ba6f2",
"main.dart.js_218.part.js": "eed50459b6645a0b76dc020153bf7eaf",
"main.dart.js_172.part.js": "bc24924b9a222a86ca5d480c83f51396",
"main.dart.js_40.part.js": "7443de9bae7715010864df965974bc33",
"main.dart.js_209.part.js": "f859a2871901562fda58816d09f98d62",
"main.dart.js_115.part.js": "b45131f1375472d1fb01d01f7228f52b",
"main.dart.js_10.part.js": "d1cb9d61a2c1f1c2fbd104f2ff543579",
"main.dart.js_84.part.js": "fccb1552d1b92c27975c751d170a1924",
"main.dart.js_122.part.js": "b7ef66594a559f22cb0457356caec10b",
"main.dart.js_230.part.js": "d2dee474307afb40d44e32f93206ab24",
"main.dart.js_213.part.js": "a4e65e75ac3184fbddeb106237ded80b",
"main.dart.js_41.part.js": "2f7bae367a4ff0f3b709876254eb757b",
"main.dart.js_89.part.js": "439855013faab906e0cbde8fa8d8b827",
"main.dart.js_71.part.js": "8d6b52194a057db9b8a3793b935eadf6",
"main.dart.js_146.part.js": "fdee0b44186c204817cbfa9146dc5166",
"main.dart.js_37.part.js": "eea8276e24fea64e13aad9398debeac5",
"main.dart.js_132.part.js": "0633ea5c740f04bc440f0ed29db21b96",
"main.dart.js_165.part.js": "53ebceeebb93f5df46e7788d15a37fa0",
"main.dart.js_127.part.js": "f583f14757de795943c83d8054995c34",
"main.dart.js_161.part.js": "6a6cfc485d49126e0a4add9d42df56fb",
"main.dart.js_175.part.js": "7559bd836862d8e0423d962eec0c90a0",
"main.dart.js_239.part.js": "6817935e62f2e594c4ae6c056dcfacba",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "c8c1e23b9fc7ec2f956e986bacbcfff0",
"main.dart.js_64.part.js": "15e565f49a32b71b69d7a9477b0125ba",
"main.dart.js_169.part.js": "8fd0de1f61ed3058832dc8cdc9d0824c",
"main.dart.js_13.part.js": "4080443c66dd243941cc09159dcdbd25",
"main.dart.js_246.part.js": "4e04fe4048751f18cdfb69dd47aa5728",
"main.dart.js_174.part.js": "6f00745d6d8154f1917e08d1b05904cc",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "3ee661a65f8c60413e420ee54ab4ad78",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "916ee587501411c6f6b35f880cff9166",
"main.dart.js_119.part.js": "af19096cb73223bc3392f820cc98cbb4",
"main.dart.js_18.part.js": "e0d4a27d084a722f2903a3cac90adfaf",
"main.dart.js_35.part.js": "b23e71d36e4442e4dda0bf74e0ece460",
"main.dart.js_200.part.js": "cfc5e2a408ed6a9c6601340153bb0a09",
"main.dart.js_101.part.js": "8c15232bfda3f5071ee2437f318b3a55",
"main.dart.js_77.part.js": "eeef1b961061972483fcc3dba9750a31",
"main.dart.js_149.part.js": "4aa6c04194c3bd0547dc2c201fbcb0ca",
"main.dart.js_82.part.js": "fc1191a47072dbf997873840733a05cc",
"main.dart.js_173.part.js": "4af69722b262c167970c84c3b09f3af9",
"main.dart.js_106.part.js": "45d12e616845b378de914b106424ab1f",
"main.dart.js_62.part.js": "b4135e2263fda27f1f6ca1ecb3400b27",
"main.dart.js_259.part.js": "3b6a0ae2dcd0eddd3e9adce7b4734b24",
"main.dart.js_207.part.js": "30e3b374b3a31399333bb5b0e0fd92c6",
"main.dart.js": "d5fcb82b4073dd2cfae9aae6beb1699c",
"main.dart.js_222.part.js": "22b2a4f8354ec05b35023855806975bd",
"main.dart.js_232.part.js": "df0f331910619c83fd9b9e4e851286d6",
"main.dart.js_148.part.js": "c8d1234c46cc5c6a80a2e0cb81d14d6d",
"main.dart.js_124.part.js": "5bd3e6ae4c69233a6d240b2b590fab29",
"main.dart.js_50.part.js": "d44d221e980c64b98c4096ce28d2e679",
"main.dart.js_97.part.js": "c93962e3129c90c319027162d4e6feab",
"main.dart.js_192.part.js": "557063664f8950b0fe610bda7586e1cc",
"main.dart.js_145.part.js": "d2b94f91a6b639eee0b4711011d01902",
"main.dart.js_229.part.js": "5286005a904bc16787730e98daa4dd03",
"main.dart.js_190.part.js": "76b21219637a25029b86f72f65dbd91e",
"main.dart.js_201.part.js": "e84e5c814c5c5ce1e869b20513722e7b",
"main.dart.js_69.part.js": "46008379ed8eb305892e5fb14354cc96",
"main.dart.js_196.part.js": "26f8a62f4c56e9e05562a921ca872da4",
"main.dart.js_181.part.js": "224a963a96e498e8495e54f6a7988b95",
"main.dart.js_108.part.js": "474e215c1d36747b779efa40c07e3eaa",
"main.dart.js_33.part.js": "7c3f17429f387570e687ab0a583b44eb",
"main.dart.js_34.part.js": "4bfe542ca02b28a9307174774c07df01",
"main.dart.js_210.part.js": "f120d64d89b0bad6ba6641f426df1d40",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_88.part.js": "d50d5c7cbc874958fa7c40ae31d9e56f",
"main.dart.js_202.part.js": "d231c5ffc53e19a17c5d63cd297b843f",
"main.dart.js_183.part.js": "a6514ac770312be7bf763f3c21525de8",
"main.dart.js_167.part.js": "d8ccda418fa061d6ac7f031e44964949",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "79074f683d7f189b0c5c3b3073ea60c3",
"main.dart.js_247.part.js": "53160a505ced5f3b7afaa681df15c8a7",
"main.dart.js_7.part.js": "cf4ba8d821c18fe3d420de2cdb095531",
"main.dart.js_140.part.js": "bb7b6f22bff50544daab320bc697fba6",
"main.dart.js_228.part.js": "03e15486d3925b7ccc1e248607ef0355",
"main.dart.js_170.part.js": "f89dd01dc0d3191949e0470bcdf80837",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_27.part.js": "ce721533e5fe94a19980ed282e96c9d9",
"main.dart.js_156.part.js": "5af956b991e396a66c61722dbbff77c3",
"main.dart.js_219.part.js": "f0594b5295b1168338d62313a4a42fe5",
"main.dart.js_116.part.js": "df03b1d5ed9da31413134176622685fa",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "e1ca1f3b197870cbce40d01a90ab738e",
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
"assets/assets/translations/uk.json": "baca6295b98334b3dfb2283850708f72",
"assets/assets/translations/pl.json": "21bcb4f632648f1195e7f9aac74cd782",
"assets/assets/translations/sk.json": "bad003d5b00feede09fe457595188c6e",
"assets/assets/translations/en.json": "88d93cb3f698fb2d704983670fce4758",
"assets/assets/translations/cs.json": "eb51cc39dd23b1a94a93073e49797140",
"assets/assets/translations/de.json": "8a6906124c5c99276485f9b2aa73dfae",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "e9c49423e736aaf677b58b6ed63bb84c",
"main.dart.js_147.part.js": "69566c796dc895cb963bf1d59c2b1ae0",
"main.dart.js_220.part.js": "5af56819ad93b6d489b20e2d2414e87b",
"main.dart.js_25.part.js": "6fd8d54c01599bb65cf9d9b7f5fb4b2b",
"main.dart.js_249.part.js": "0aa8061fe5cfc138e1cb933277f96529",
"main.dart.js_123.part.js": "d2261a96ce44df678255acf1758f35a5",
"main.dart.js_241.part.js": "99fbf5d3161387b9e701c4a1ebb7be0f",
"main.dart.js_8.part.js": "b594b69a72575ba9cd577ad456b459a1",
"main.dart.js_198.part.js": "07c1eefb38e3958edd4fb0a77ec0603c",
"main.dart.js_81.part.js": "9d9ecfc2ad9c7212268886d737e89cc2",
"main.dart.js_205.part.js": "7f99910b3b6367b6d8a9ff74e60f0a67",
"main.dart.js_113.part.js": "f211b4baf48d8c4ca5b4f9c8f0c21388",
"main.dart.js_9.part.js": "5c287e6d14a0be6474401e5ecbc15bf7",
"main.dart.js_22.part.js": "05fc59e20ea185198e86112ce047bd61",
"main.dart.js_242.part.js": "708bd93d921cddabeaa34b5b209cbc2e",
"main.dart.js_86.part.js": "ff9e2f075b86761d7a272f87e5042d46",
"index.html": "df9dcd46029f13f56f4f676a78db3cda",
"/": "df9dcd46029f13f56f4f676a78db3cda",
"main.dart.js_94.part.js": "06aae9354bf72e5bcd23c05521617bb6",
"main.dart.js_98.part.js": "5f675f966518b97f3c2f51d59fab289b",
"main.dart.js_53.part.js": "c1844d9a55dfd16405440415af960a89",
"main.dart.js_74.part.js": "ed1d5ec6dab9ee65be8f5cd32ffcb9f3",
"main.dart.js_235.part.js": "c0c29f6dcaca5537eabecacc465a4445",
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
"main.dart.js_118.part.js": "8a5f3428c5af4af8c61436cf0472e131",
"main.dart.js_26.part.js": "73c7bfc114728fd441ac69b39a9a3e7d",
"main.dart.js_240.part.js": "3aced711cb32de3077d16977137b2316",
"main.dart.js_20.part.js": "4e71de57488d23c01635030ca878bfea",
"main.dart.js_189.part.js": "87078e56a205f6b0ed3dc9262bb7dc89",
"main.dart.js_214.part.js": "1f398e0ea33d4e5679f735c8c944f7bf",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "c06cf835ebc95a3213f6ded2fe22b402",
"main.dart.js_1.part.js": "be3003779fb49f8afc89c8163ddc6d34",
"main.dart.js_120.part.js": "2d9a1fb788f21889b365027d279a46dc",
"main.dart.js_63.part.js": "52fdb037ff0a5ffadc2d9bc7e873dc75",
"main.dart.js_211.part.js": "c60b80d06c2bb999207a8619d48a8026",
"main.dart.js_45.part.js": "f369b19ddb7e606969679d9d265f8a9c",
"main.dart.js_12.part.js": "2f63cf58dd50bb34db2c9f9730c42656",
"main.dart.js_221.part.js": "1f002d9b35ed2e7ecbb0eface8f644ef",
"main.dart.js_137.part.js": "b22611fba941356aa98037818eb2a044",
"main.dart.js_28.part.js": "37479b57b1e70bf79c0e36dfdc8b3d2e",
"main.dart.js_135.part.js": "99f172c86d06f3cd6cd7e4ff6620dfb4",
"main.dart.js_6.part.js": "4d6bf72ecd0c693c8e1f12412995d3e7",
"main.dart.js_256.part.js": "dcb0cf9852ab51ada8353e242e7c433c",
"main.dart.js_17.part.js": "401bd7d4ca161b2c6df80a8715be6ddd",
"main.dart.js_105.part.js": "846ac9df5c2f2cc7657ae3f5a68a5e1f",
"main.dart.js_206.part.js": "00e004abac4e3f3677deea4aec384352",
"main.dart.js_231.part.js": "64475f13a4b2e7e40510dbf0165b95ad",
"main.dart.js_43.part.js": "105ff1ebcdff1a12f63decc0e86893a6",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "a81342012d07657cc2b4741ac09dcf8b",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "ef5b795a22edcce69d58bf0807e9d1b6",
"main.dart.js_15.part.js": "d97947a0df76f8a5636e9d424365fa16",
"main.dart.js_19.part.js": "5ba9c46616c0ad58b99ad76ee0218afb",
"main.dart.js_255.part.js": "9995f10023dc392baa03d6d553e39ec9",
"main.dart.js_186.part.js": "a69300f7fd0c08b200b7056591c61208",
"main.dart.js_163.part.js": "564864bd04478f10d03a46cb658fe989",
"main.dart.js_154.part.js": "f8bb0d2f5f9c23f84c9ffaea73532c8a",
"main.dart.js_257.part.js": "7a72686a74292b8c48c469d824f850ba",
"main.dart.js_16.part.js": "9083999a474b94145805d54e98901950",
"main.dart.js_250.part.js": "8bf0500e772bb049d0b53a91e7e959aa",
"main.dart.js_52.part.js": "a846b334a89f3235110d9bf11c1d2ed8",
"main.dart.js_199.part.js": "ced8e1c4cfd7ee6187b83f702bf76394",
"main.dart.js_253.part.js": "07114e35f74b27a2f42acc172a481758",
"main.dart.js_130.part.js": "fe18e99cf05b971297fc857989a9bc23",
"main.dart.js_197.part.js": "5cc9c7cbc4db9cbe3114269a407ad167",
"main.dart.js_56.part.js": "f6b8e595d34ffd8ad1a2722adb8294b4",
"main.dart.js_3.part.js": "fcac19524c9cb854cad1dc03b1f53f6c",
"main.dart.js_68.part.js": "0bf1c4a60babff3db967c672ada5a093",
"main.dart.js_38.part.js": "625becd49256de8908fc51518db733cf",
"main.dart.js_225.part.js": "e4482775e944b8140cbf6a3a833c7f57",
"main.dart.js_248.part.js": "80af80b437611f50f5bf015bd3396f92",
"main.dart.js_133.part.js": "83598c0963c75ba459f831756df315d1",
"main.dart.js_21.part.js": "432dde6bd4fd181de1b46a5014324b6a",
"main.dart.js_188.part.js": "df7624880221c53316818097a588a2fd",
"main.dart.js_204.part.js": "ef424eff21c2f8eb0d59f303436530b0",
"main.dart.js_24.part.js": "65bdeb05c1b6438c98f0c68e3f1f348f",
"main.dart.js_90.part.js": "3f224c8af41a52a879cd5b3f8040bce4",
"main.dart.js_111.part.js": "4255137f4c6af63fa1a9af6e1b22c9f7",
"main.dart.js_177.part.js": "03f604b47aa68b35ad25d9f66651f90f",
"main.dart.js_85.part.js": "4ab934ee39db9455984dc3641a3d3e4a",
"main.dart.js_243.part.js": "64cd6e2f762e8a9fef94a3588b6502e5",
"main.dart.js_212.part.js": "bd0e283f8808b6ed6215b48e21f72310",
"main.dart.js_114.part.js": "4f897aa1aabb14bdd5da5ba837e9a574",
"main.dart.js_39.part.js": "92a722bcde8f78fef50efb74518e3ef3",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "24d45d8331b6cc15df1bd46822e9c610",
"main.dart.js_171.part.js": "9762d3e5e5342fbdf53c745309e01f40",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "a27792b335f8ead003f876e423b19177",
"main.dart.js_44.part.js": "48f1a8d8c0dd1d66519bc642f9832f6d",
"main.dart.js_121.part.js": "31310e684280b07de8a80906b4305486",
"main.dart.js_55.part.js": "38b194ed04b272a1675767747f123e90",
"main.dart.js_112.part.js": "e9b11814c3aa8c8c35a4d705cd7235aa",
"main.dart.js_139.part.js": "9faac60d5c9752e6f2193b9da849bce4",
"main.dart.js_143.part.js": "a65e2dc5a4aa6b66eb145440204dd54d",
"main.dart.js_80.part.js": "7110e8473a005e87d2c7d0ced1587a80",
"main.dart.js_252.part.js": "1b5c28b857c3a3298a4c4a2c77a4f038",
"main.dart.js_233.part.js": "1eed78920eff905bbfc936078d86b22f",
"main.dart.js_30.part.js": "ee2534ed303f9cfdf16e41cc80e538ab",
"main.dart.js_78.part.js": "e2f79fd5fdb78e79f9c15d6b78ccc3de",
"main.dart.js_136.part.js": "e183c4b3bc731fc5a7dbf0e9184f85f9",
"main.dart.js_168.part.js": "a0aebc1de88c0571104cf3c9ce911684",
"main.dart.js_59.part.js": "9920c755c3e28ef77c5a4dfa5df3fef4",
"main.dart.js_47.part.js": "02a945a12b5ed83866ce5df26de03f3b",
"main.dart.js_107.part.js": "3c6e60b55068facf17b3406edcb48a5b",
"main.dart.js_29.part.js": "25cb004c80a6a1fb1cf68965b8130a0c",
"main.dart.js_194.part.js": "3fd0c853f55f7034bc391c5ecd44f41b",
"main.dart.js_58.part.js": "e7e54889f89745c605a345ca2790bd7d",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "cdb1bd44048f4b1f9100a74b7bfab203",
"main.dart.js_79.part.js": "980d600c58b4fc0cb194167ed02ab182",
"main.dart.js_92.part.js": "67731bdfaa6c297c47588a9177dbcc17",
"main.dart.js_224.part.js": "20d9c092619f7c14fd65784abae7de9d",
"main.dart.js_93.part.js": "26aae3ef9189ff6be6e4045a6c139081",
"main.dart.js_223.part.js": "2406d2271d32f3a782c2d8730d397c5e",
"main.dart.js_11.part.js": "f5b0276f2f3873ef03851dd8f3c13edc",
"main.dart.js_125.part.js": "fe577e805104da337f5559e5e9fe1367",
"main.dart.js_131.part.js": "e1d8e7287f0b93cd4a7d34eade78a2bd",
"main.dart.js_226.part.js": "e50377063f9cc3b9ba563a216feb20ee",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "ae3100ea8f7515eabe8183643f8d926b",
"main.dart.js_178.part.js": "9a4aa719292a6ff05c354d696c6eab5f",
"main.dart.js_187.part.js": "94c93b3830ff6e61f72f292877ddb65c",
"version.json": "8f98e0a7dace1bc97834492a43964956",
"flutter_bootstrap.js": "e251c4e1cbdf0a7cdcd233b692df74d1",
"main.dart.js_191.part.js": "0c6242d1d35bdd5fbc14e473dcc88be3"};
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
