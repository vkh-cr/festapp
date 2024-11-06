'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "d5b42d1c47e1aabe8e94465f626a423f",
"main.dart.js_117.part.js": "1fad7bf4589ce1c6569b6082ca678249",
"main.dart.js_182.part.js": "836b037fba5d7b35a956e10d784b32fa",
"main.dart.js_244.part.js": "7848c4a15315cbb770f12dac7f040dae",
"main.dart.js_83.part.js": "90651bd7d294a54750806b0d6b3d18dd",
"main.dart.js_254.part.js": "23e9b16bf42555bb783993534e56a225",
"main.dart.js_176.part.js": "e37ed0e4df514cd282883961d4afbfe1",
"main.dart.js_96.part.js": "4bdc8d20d4ebffe8702b24b8dd271d43",
"main.dart.js_245.part.js": "8be3bc9a9e724f21d5b1589280998548",
"main.dart.js_87.part.js": "afca3f4c3eb349800a21f1df2d7fa5d4",
"main.dart.js_251.part.js": "07c60436566c886201ce9173d651ddee",
"main.dart.js_126.part.js": "bdc4bd553c27afaa2f93e1da912f4692",
"main.dart.js_129.part.js": "d1c080565b3395262b930bf80e28a0f2",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "7e541548b88663abe924458218c81c9a",
"main.dart.js_172.part.js": "bebe5b03067bfdf93335e580f6b170d5",
"main.dart.js_40.part.js": "207fd78164e046f3eca258b93e1d8dd9",
"main.dart.js_209.part.js": "b59aa6e48523754dff8bbabecaaef7ef",
"main.dart.js_115.part.js": "65a09b269b38682f121328be3943ca8d",
"main.dart.js_10.part.js": "160435f8d2e1642472955291f56e15ce",
"main.dart.js_84.part.js": "ed1706ef85c3dbc99d4034e3e40a8d75",
"main.dart.js_122.part.js": "cd153f7596c7e19cb2e1514d82cc6386",
"main.dart.js_230.part.js": "4cb050cf938eda761142f87ca2acd24a",
"main.dart.js_213.part.js": "2bc143ab9d4e7ba10c11ae196f136659",
"main.dart.js_89.part.js": "a194deb7d3fb2fffc6a6fd0c9c900e7e",
"main.dart.js_146.part.js": "a91a5e83f9288a8d96803e0441a31908",
"main.dart.js_37.part.js": "4cbc5671795822b88d4c2f16df500752",
"main.dart.js_132.part.js": "ab0239ac432de172d94b3115ca392cc0",
"main.dart.js_165.part.js": "3ad44850da4db93378b873201624e9a2",
"main.dart.js_127.part.js": "85b290761bff838f906037a1d1517cc3",
"main.dart.js_161.part.js": "8d0b5915140fbba200437a88b20a5a7a",
"main.dart.js_175.part.js": "16480b7f437d3e4e8f03136ab6c5e196",
"main.dart.js_239.part.js": "a73dc29cc7da5d87bb0cffde3f0251b9",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "43cecd8745f2a02529801076161811f5",
"main.dart.js_64.part.js": "408ca73baffb59585a88ac42b3469fad",
"main.dart.js_169.part.js": "ba24e86fa08bdd246a41ec2d6b79439d",
"main.dart.js_246.part.js": "c323ae9e38825cb1d43f5a68dec8d7a6",
"main.dart.js_174.part.js": "a29dee587ac9cf4da8f142cc4522ae37",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "52fc53898ba4b41fa960e62298ae2f06",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_119.part.js": "ebdeb645c95a7dc2c192c4d3496a9635",
"main.dart.js_18.part.js": "1c66564305deb32c666de4aa4379b5f8",
"main.dart.js_200.part.js": "180cc7927200da3b9ab4af05d33d9be6",
"main.dart.js_73.part.js": "c3881e9652e0158b5e6146d8e7306d5e",
"main.dart.js_101.part.js": "80798ee3bb53e5933c3516e787d63b4e",
"main.dart.js_77.part.js": "45cb159fbc64255f6b52d58f34a166d0",
"main.dart.js_149.part.js": "59fcb187dd329f13474a6a4b68b1024a",
"main.dart.js_67.part.js": "353fc12cf7d2c53c9bdb66696da314e1",
"main.dart.js_208.part.js": "2e06d54a147944e5c19848d4c4401a92",
"main.dart.js_82.part.js": "ab831db28eef3aceeea929f23f85f53b",
"main.dart.js_173.part.js": "7deacf139012df3b2f15a49d6c136952",
"main.dart.js_106.part.js": "20d071c2d2b0967489ea92b90b9bec94",
"main.dart.js_62.part.js": "61300fdb90b58f1f2ffc8709a586a693",
"main.dart.js_207.part.js": "5b0420219a6328af2e9f7fd18c44cc3d",
"main.dart.js": "971b312885dc49e5c91d42b3af8e22fc",
"main.dart.js_222.part.js": "9515083d01ad6c71e606f302bd347630",
"main.dart.js_232.part.js": "1195e40aec2e025deb0748ce56734f93",
"main.dart.js_148.part.js": "28043dc67b4ceef0bf96fca01f609d60",
"main.dart.js_124.part.js": "1476c935350479534f542aeb985a0d90",
"main.dart.js_97.part.js": "dda8c2db1cf562f7d9c7760c11f5aadf",
"main.dart.js_192.part.js": "d8e926987e424afb7a73791d683cdb90",
"main.dart.js_91.part.js": "2c3b13eaffdba41f1e5b7925be09c244",
"main.dart.js_145.part.js": "a6e2654d10af8b43a5e45a73ff561c69",
"main.dart.js_229.part.js": "178ab48b06d066a2c345d78ccfeda3be",
"main.dart.js_57.part.js": "29e70d7d618f96e4adc9b8e0b68e74ff",
"main.dart.js_190.part.js": "99c812efc9ecbc73c9975478a4aefce4",
"main.dart.js_104.part.js": "6f0feddb7a87d657064a46e732fffcb8",
"main.dart.js_201.part.js": "8054afd6be953fa40aa0bd7a3bca7594",
"main.dart.js_181.part.js": "abd14726cad1872c57c0706af62704ee",
"main.dart.js_33.part.js": "866d666edcd576dca9ab92983e7eda54",
"main.dart.js_217.part.js": "ca805e932c31318d03a40a7c2693fc13",
"main.dart.js_34.part.js": "0ddc5205222cf952f6e1436f573254b1",
"main.dart.js_210.part.js": "0555e80296fa7e7b67a231bab4ec30ad",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "551f21f1070911168f6acee7a72319e9",
"main.dart.js_88.part.js": "d5bdba84f4335cf205b94128befff925",
"main.dart.js_202.part.js": "28e5628eee85a5bc1e79e06e70e7ae10",
"main.dart.js_183.part.js": "885d728346a9093a944c5a94b6e5d27c",
"main.dart.js_167.part.js": "8713d3682f157c537202f388eabd4cd9",
"main.dart.js_203.part.js": "96c060ab8563d459647baf3c34a4913d",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "5a6e5feb3a80891a30f3e4d60284f647",
"main.dart.js_7.part.js": "8dedda4646fa3b3cb07694fa6d493106",
"main.dart.js_140.part.js": "a6d8274f1b308f1b53eb5d81e44fc542",
"main.dart.js_228.part.js": "3ed36101c7914ef0906e75618022f596",
"main.dart.js_170.part.js": "79cb43c77ad4f650452f8f0a434e77fc",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "c6e4793899e5d9ebeb23f87efa67b870",
"main.dart.js_27.part.js": "bffaae0292167bcbd739052e515b6787",
"main.dart.js_156.part.js": "53bbdfb2a6c09297c2903a78f5805e2f",
"main.dart.js_219.part.js": "4a3ede06e4ea5c3ada3130b49b846260",
"main.dart.js_116.part.js": "695de2320a3e612f6a19329f73cc9eb9",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "8c61b87a3deb5559c4123dbc25f1d136",
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
"assets/assets/translations/uk.json": "1f36bc810aad089953ddc6c4faa5ed2a",
"assets/assets/translations/pl.json": "7cea7364ffc07eeba1ddc83ba7907075",
"assets/assets/translations/sk.json": "6393634bf09f92f853024c5c254fb363",
"assets/assets/translations/en.json": "9ad09f1e8306bd6a8829aa88cbbd0a23",
"assets/assets/translations/cs.json": "d723e5d3d56d7e60f2797af0e2a4327a",
"assets/assets/translations/de.json": "34beada0ffe82776957233bbaf5b2a14",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "193db35016e3492cde161cb498ba2444",
"main.dart.js_147.part.js": "c6601cba86a4b33c26106f9604b08c2f",
"main.dart.js_220.part.js": "77cd0d85f7a18fed085ab98caf24237f",
"main.dart.js_25.part.js": "3380610f5623b0c83c1dbee99febca52",
"main.dart.js_249.part.js": "4dbb0b968287fedb29eb378738532ab8",
"main.dart.js_123.part.js": "a961da7087a6a621d9ef9ad3aab5f119",
"main.dart.js_8.part.js": "f128985c4f620f3ef38042fdf6156982",
"main.dart.js_198.part.js": "8c48e526e492ee855c460d17215308e7",
"main.dart.js_81.part.js": "6eb18931065c421c131bc81ab3b55733",
"main.dart.js_113.part.js": "9acf852153fce37be9dc32836fdf1538",
"main.dart.js_9.part.js": "eb09a3f7e645cca052b01c591a55dc45",
"main.dart.js_242.part.js": "94790dca0b682d58b097767ba9b8a58b",
"main.dart.js_86.part.js": "0fd67837c6e86bf83164666bb098da24",
"main.dart.js_23.part.js": "50a482097feba1381e916f750fb7358b",
"index.html": "29bead060622042e9b5771c81f643bec",
"/": "29bead060622042e9b5771c81f643bec",
"main.dart.js_53.part.js": "a3c8ec52b4116c5e69f23a4a6bcc485b",
"main.dart.js_74.part.js": "a79497dc7888bc28e4db841d4acd49ca",
"main.dart.js_235.part.js": "807e2ac73ebb50fb6194c8056988c914",
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
"main.dart.js_118.part.js": "19bfc67ffbaac40a19a8257854aba849",
"main.dart.js_26.part.js": "ab7cbe8598d6178e3c4c891c01b20f0d",
"main.dart.js_20.part.js": "8cdaabb0bb9cd097494c34d85a80adf3",
"main.dart.js_189.part.js": "4dde0875f9e3fe31169047d401d954c3",
"main.dart.js_214.part.js": "5b365d054a7ce4e356a219489789674e",
"main.dart.js_51.part.js": "e69fd916715c9f2a49274d824d154444",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "cd3c8d00eef09e42e02fd0074604cb87",
"main.dart.js_1.part.js": "05d7339d7dcd857179ea472c25c013e7",
"main.dart.js_120.part.js": "5441ee910962e67995050b8935046216",
"main.dart.js_63.part.js": "df67efce1a7a34d2502aae6f38c1ab6b",
"main.dart.js_211.part.js": "70ef2aa0c0923c6c25721f5887afbb3d",
"main.dart.js_12.part.js": "958ac09cd554789b833df6ac5374f4aa",
"main.dart.js_221.part.js": "9b7091d2d2b18990402602b30d0c7c08",
"main.dart.js_137.part.js": "62bc9355afe61c18685e4e76936e4ff6",
"main.dart.js_28.part.js": "8dcf62214d45436656ea40bbda1e301c",
"main.dart.js_135.part.js": "c45488cf32c87cae4fdfb15f67304c6a",
"main.dart.js_6.part.js": "6f91da282fdd51eb8aa21a197aed7d29",
"main.dart.js_256.part.js": "5a19d434d32d616ec0c3f22e52824192",
"main.dart.js_193.part.js": "59fbe0047ca0e47e97932d1a44a05ee1",
"main.dart.js_17.part.js": "9ff00747a77336aaaf999a641e7163c9",
"main.dart.js_105.part.js": "0d7349c71407c55228bb0fdb0bc5234d",
"main.dart.js_231.part.js": "70f2f57c6aa7dfd5c6de8e0e3d9d5f1c",
"main.dart.js_43.part.js": "f35a53eba1ed54eb13860c635a253861",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "06c5c18753513d2a0a535859371d6d26",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "6e72e1eb3712e9169070e8931e5d3f7b",
"main.dart.js_15.part.js": "40395a73e5b470a00f4256477afd701d",
"main.dart.js_19.part.js": "607050336727edfcf5a793b2ae0706f4",
"main.dart.js_255.part.js": "7e01564b4ff66ed725887809ccde36ef",
"main.dart.js_186.part.js": "4848aeda4caa416da78e9101229a7336",
"main.dart.js_163.part.js": "01637f5bed008e4e49e42e113d853548",
"main.dart.js_154.part.js": "f318791544235377fac7689ac5cb5003",
"main.dart.js_42.part.js": "538b138371e3c42bf5dcb48ddaff203b",
"main.dart.js_16.part.js": "83e10175769c46a6381e58a12527fe66",
"main.dart.js_250.part.js": "d5cfa79fead2621b076982713eb7325a",
"main.dart.js_52.part.js": "c4acf990737ac7c942c5bf2b47b98f3b",
"main.dart.js_36.part.js": "fedafee8f60e6a87f968a4905cbecd4e",
"main.dart.js_199.part.js": "652b5576a945a0de2bb25e5a0bacd5c3",
"main.dart.js_253.part.js": "f0f1589a0c2053ac2b9f27af8478e276",
"main.dart.js_130.part.js": "40ff075dc6aaffb7fe9bed67ee44f7f2",
"main.dart.js_238.part.js": "71b88163c9c5b2be70535f59b6d77ae3",
"main.dart.js_32.part.js": "78f3e413af3c3244c1fc38d8db9a4e18",
"main.dart.js_197.part.js": "68d631a92220720dbef811515ff16ebf",
"main.dart.js_3.part.js": "9def9f0c5db8540d7853198e1f51cd13",
"main.dart.js_68.part.js": "121e77c6a8c17dc18f93a89e34b8ef28",
"main.dart.js_38.part.js": "50d2ceb88278ad54f4be1f47305d1727",
"main.dart.js_225.part.js": "884b25480acc7941a41d8944ea6fbf25",
"main.dart.js_248.part.js": "123dbeebebc991af0fce91ef05cf6ca6",
"main.dart.js_133.part.js": "ebc55c5cfe9356baf16de65d649f93f3",
"main.dart.js_21.part.js": "54856c91f8ecbd06c1f0d8cfe9dd2f69",
"main.dart.js_24.part.js": "d564a27f62e77b5014ddf5f2d04b74e2",
"main.dart.js_111.part.js": "12ab00e8c153e49fe9913ac6ecf0c214",
"main.dart.js_177.part.js": "fe9ba8f43acf3f1d50446985d84e11d8",
"main.dart.js_85.part.js": "ccdacf04076a4bfa234e48c644e36f7e",
"main.dart.js_243.part.js": "0cb227c92a268570c838ba6793f0de6a",
"main.dart.js_212.part.js": "cc1b7e407f28cb56d4e8148fa130d9ec",
"main.dart.js_114.part.js": "3e5ab874ac6d3efec00f1beb8f4f298c",
"main.dart.js_39.part.js": "153cddf9bd4b49b06e1ab83cdcf62c1e",
"main.dart.js_49.part.js": "7bfc34db067f026ce554c4ebd95abc77",
"main.dart.js_185.part.js": "5e9bc00bea3555ebbe1c55de785213a1",
"main.dart.js_46.part.js": "5bde89ceca7d069bffd886bd974e9f1b",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "a3aa215706e3472997bc653a41a9e6e9",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "70da085e3b5047d142ca35df61ec1f76",
"main.dart.js_134.part.js": "39c8d96b0e0e5660634f6c6836d4c489",
"main.dart.js_195.part.js": "c85143f4e78a5f9b91a0435b5f12cff8",
"main.dart.js_121.part.js": "3928fc68030c728964d9e0626aebd7d3",
"main.dart.js_55.part.js": "45b5cb7c2e9177f4538940d7c20772e3",
"main.dart.js_215.part.js": "beeda946b89bdaa3e81b862fd30bbbdc",
"main.dart.js_112.part.js": "f7f34549ffd9e1f127da81be625195a9",
"main.dart.js_139.part.js": "e9e649b79bcc14b108366d80d89abf86",
"main.dart.js_143.part.js": "f67ca17eb9c9db26e71a95b6989deb9c",
"main.dart.js_80.part.js": "5e8d5d38a21c664715b0f1887b6821db",
"main.dart.js_233.part.js": "e53603575a73bb1f67a8322d4ea88214",
"main.dart.js_30.part.js": "16362586c79d1dfeb371aae063038603",
"main.dart.js_78.part.js": "959a5f1f3effaf0ebcd5f9affce28715",
"main.dart.js_136.part.js": "ae3070de08ea988d7a0441df5e69025e",
"main.dart.js_168.part.js": "52d29612d061d932ced97c9f4b1ea781",
"main.dart.js_95.part.js": "3dca18b0040316460c90394d0d87242c",
"main.dart.js_107.part.js": "4b41979889969173ad7f9d18516d850f",
"main.dart.js_29.part.js": "db53009d01158eb7cf74b9d31fc4883c",
"main.dart.js_61.part.js": "c0656ea410798ce6b6a9778368b9c7dc",
"main.dart.js_236.part.js": "5c81705cec1b854e9ab01ddecaeaf283",
"main.dart.js_58.part.js": "52358db3ab8c2c28d513e8fed9e9c9a6",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "32066e056230f61afe9cbca97cc0bd24",
"main.dart.js_54.part.js": "dcfb0f4509fd827f60622f7082d91a5e",
"main.dart.js_79.part.js": "b014484a2c7dac82cff5ee58ed76b8e5",
"main.dart.js_92.part.js": "90ec98792effa7e3f260fac2c5ff7550",
"main.dart.js_93.part.js": "372bd2f7c6383ae81b53d2e29ac8a70c",
"main.dart.js_223.part.js": "a45bc94d08300c450b470d34c10fdf34",
"main.dart.js_11.part.js": "64df7a833056923ab4cb3d28109872fe",
"main.dart.js_125.part.js": "ce5139b34423a0a7931d3c8dc606457a",
"main.dart.js_131.part.js": "3e1e4b83663bba4673484c3990b5e985",
"main.dart.js_226.part.js": "6cd7cf84639523d4762a3081403755b9",
"main.dart.js_14.part.js": "d80294b492d95dc204563a0c1fd00f47",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "6ce2463b00738ddcb9bbdde6d6b7303b",
"main.dart.js_100.part.js": "168f86a6b200d9c0e6fa06666b9061db",
"main.dart.js_258.part.js": "4821e442f854b7853ae81e86c2c74e16",
"main.dart.js_70.part.js": "3d82d4f4a8a095061a1e790bbc5d68a2",
"version.json": "8eccc37b0c2b359fa2cd6be183ebf681",
"flutter_bootstrap.js": "b6f021242dfc25ef1ccc97cdafdaca6c",
"main.dart.js_191.part.js": "33ca9bcc00672a4f45b81becb576f056"};
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
