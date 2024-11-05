'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "956c2fa8c3cc8a56736863888e611f7d",
"main.dart.js_117.part.js": "d0f39fb708e73c318f19d1766cacf441",
"main.dart.js_182.part.js": "f4b0b58abc6965e4100ecb0ab53a1a9d",
"main.dart.js_244.part.js": "9a29150bbe0d3e3647a413b302c533a2",
"main.dart.js_83.part.js": "ff78a08ffd60221eca29d4f33d4ec8dc",
"main.dart.js_254.part.js": "026254c914bf9bf942fd937d431846e7",
"main.dart.js_176.part.js": "a9755222d5df4f63c43ad8fa13356c4a",
"main.dart.js_96.part.js": "c944b6df7d7271f030a659ce53b4f4c6",
"main.dart.js_245.part.js": "cef5625d329413524d0ca7b3a7752b96",
"main.dart.js_87.part.js": "34e087e5142c025dd82e47c19776ff9e",
"main.dart.js_251.part.js": "9e8b53c8843c1f941814d7af07a44d9b",
"main.dart.js_126.part.js": "fa2258d8c01deb3d7d675cc6183f9ba0",
"main.dart.js_129.part.js": "f47400b962be4282cabf43e49683f30d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "ddbd69a698729467d54b536c33ca6eae",
"main.dart.js_172.part.js": "642582175ab8313604ba8bdf7ddf9794",
"main.dart.js_40.part.js": "207fd78164e046f3eca258b93e1d8dd9",
"main.dart.js_209.part.js": "3af987f4f9382620b19afda3c6641aa7",
"main.dart.js_115.part.js": "6ed190ab93e1ad00eff4652b9cb662d3",
"main.dart.js_10.part.js": "a2a2fd4445c34e270a605d1ba2786010",
"main.dart.js_84.part.js": "9e1acd5a1e8c72ce320669c14cbdb93f",
"main.dart.js_122.part.js": "cd153f7596c7e19cb2e1514d82cc6386",
"main.dart.js_230.part.js": "159afe8b4fe3306a7faf93d247c5c360",
"main.dart.js_213.part.js": "c013a9515a334ae311c64010e9536b79",
"main.dart.js_89.part.js": "a65598a3e20f14870b5d12c8f1e0ccc5",
"main.dart.js_146.part.js": "a91a5e83f9288a8d96803e0441a31908",
"main.dart.js_37.part.js": "4cbc5671795822b88d4c2f16df500752",
"main.dart.js_132.part.js": "ab0239ac432de172d94b3115ca392cc0",
"main.dart.js_165.part.js": "3ad44850da4db93378b873201624e9a2",
"main.dart.js_127.part.js": "693a7d2aefe409d1f52ced018f5136da",
"main.dart.js_161.part.js": "563024a06062e92f9dc6de9c0bb93eff",
"main.dart.js_175.part.js": "e87e2ceb956f26048437a4033a85e522",
"main.dart.js_239.part.js": "ee520fdf30ee881a41a584326b819438",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "a8dba0b5022de8d9e2b6babf48656b79",
"main.dart.js_64.part.js": "9804531b955b5234f675333a88aee930",
"main.dart.js_169.part.js": "938a110e90d376c869b88078d9db916d",
"main.dart.js_246.part.js": "16c55f04c039b4c2dab8125175e8534b",
"main.dart.js_174.part.js": "46154092b25c24d597df0fd1df1ad0d5",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "3465102b42331460f36e732d55a97448",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_119.part.js": "dfb1bd24fa744cd3180dc3ffa0b0eb61",
"main.dart.js_18.part.js": "882d860f0343bd4e866f15d8e408aa66",
"main.dart.js_200.part.js": "180cc7927200da3b9ab4af05d33d9be6",
"main.dart.js_73.part.js": "74c0c8a7d5c9271a53fd9f8ec91abdc1",
"main.dart.js_101.part.js": "80798ee3bb53e5933c3516e787d63b4e",
"main.dart.js_77.part.js": "12ae6e0a2ae93900c4804dfbcdd42d2f",
"main.dart.js_149.part.js": "d10e135a5d545a65c1e8e8e437c07175",
"main.dart.js_67.part.js": "5730ad1c3cb0c459eff97e84d0895c5e",
"main.dart.js_208.part.js": "004559b626ce2a2f5df701d9397878ef",
"main.dart.js_82.part.js": "b95220b4c3a71ffa772889d6578fd64f",
"main.dart.js_173.part.js": "bb48249dc8adb31ff150c1885945d994",
"main.dart.js_106.part.js": "4e24bcc0d41d5fadd8faca0f1ec6a4ad",
"main.dart.js_62.part.js": "b6998494d52eeab88b670262dc6ed144",
"main.dart.js_207.part.js": "de281a74ee6d7b3fe05fb25eecf84416",
"main.dart.js": "e9521c88c2b6b1c06126df03341c26fa",
"main.dart.js_222.part.js": "f7efa044cbcf958868684742bcf4c5f3",
"main.dart.js_232.part.js": "6ad7912823044dffbdf6c98d3ba741b8",
"main.dart.js_148.part.js": "b67b9af0c3203a3be3e29e194481d976",
"main.dart.js_124.part.js": "edacf38dcf1ac29978aa2baaa182bc00",
"main.dart.js_97.part.js": "dda8c2db1cf562f7d9c7760c11f5aadf",
"main.dart.js_192.part.js": "5523a48fc78f07f9748204ea64399ab5",
"main.dart.js_91.part.js": "37d3d68d0cb3a6685d1686678d287705",
"main.dart.js_145.part.js": "c700aca9c8775015668d752bff1c66f5",
"main.dart.js_229.part.js": "2a60bada3767017b2b57f1307f45db73",
"main.dart.js_57.part.js": "29e70d7d618f96e4adc9b8e0b68e74ff",
"main.dart.js_190.part.js": "99c812efc9ecbc73c9975478a4aefce4",
"main.dart.js_104.part.js": "6f0feddb7a87d657064a46e732fffcb8",
"main.dart.js_201.part.js": "4c22322352b695ffe340656fb7ca797c",
"main.dart.js_181.part.js": "165b5b5325ba4e811a6627b8fba95d9a",
"main.dart.js_33.part.js": "3c228275982d981d4cc96ba90b2358fd",
"main.dart.js_217.part.js": "6461fd69f70a7cc3fbc5f7696a7593ad",
"main.dart.js_34.part.js": "7e7b88a8eb9d4e0aa1909617358535ec",
"main.dart.js_210.part.js": "7e24d650327f744c9e3333a702a001f5",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "6d6c9f6557f37013e72df2b60c389846",
"main.dart.js_88.part.js": "1d36d33db32093738f36794fb8443c07",
"main.dart.js_202.part.js": "4a2de73200161054466e88477c01fca2",
"main.dart.js_183.part.js": "d1219fbdfc836009569f3cb24e13bcf5",
"main.dart.js_167.part.js": "8713d3682f157c537202f388eabd4cd9",
"main.dart.js_203.part.js": "96c060ab8563d459647baf3c34a4913d",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "7e999ac2b452c0aaed8027b91d4f1284",
"main.dart.js_7.part.js": "6bdb50923bfbfe4f6f085f602e44041d",
"main.dart.js_140.part.js": "6c81fb171e7b97ba53ccf65573a84154",
"main.dart.js_228.part.js": "90380397d7eb404430a5fdae747dd473",
"main.dart.js_170.part.js": "ba7ef879e72f848d4c13f1ceb57b85cb",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "4791f770425569bea71f74a5725344dd",
"main.dart.js_27.part.js": "48b991f10ba5f7285b02a116857bdc25",
"main.dart.js_156.part.js": "53bbdfb2a6c09297c2903a78f5805e2f",
"main.dart.js_219.part.js": "fe96dc1dc95be7ad647040054435f943",
"main.dart.js_116.part.js": "afd84a6aa35f308713beee0c8a9ccbda",
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
"assets/assets/translations/uk.json": "a3cad5db97fc6d585e9f764b8bbc711b",
"assets/assets/translations/pl.json": "3d9cb02a2a08e0ef563faa96aee6e9dc",
"assets/assets/translations/sk.json": "5b7d00499dbbedba40e1ddd068d7039c",
"assets/assets/translations/en.json": "9ad09f1e8306bd6a8829aa88cbbd0a23",
"assets/assets/translations/cs.json": "f2e95fc144569bd7245f72c8e097a9a9",
"assets/assets/translations/de.json": "0eeb3c896354f4be91e7c9a40db4e229",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "193db35016e3492cde161cb498ba2444",
"main.dart.js_147.part.js": "64c0c99e0d5d99508b01905b70a026aa",
"main.dart.js_220.part.js": "821c2676c0bc84c0c3289ef3f18ad97d",
"main.dart.js_25.part.js": "cc7aa5b990a647b28b8b7a9bd337cd5a",
"main.dart.js_249.part.js": "9b13e24f48c9e2c9b7fc199db6b1482f",
"main.dart.js_123.part.js": "a961da7087a6a621d9ef9ad3aab5f119",
"main.dart.js_8.part.js": "ac505804d486a47f348507537abfca46",
"main.dart.js_198.part.js": "1c5200cc46c4fbe99bdea2f8126a7276",
"main.dart.js_81.part.js": "4798e83c2a91e71cad5a214df3562c9a",
"main.dart.js_113.part.js": "7c0f0d27e3508209c0cb9a12e8b810d2",
"main.dart.js_9.part.js": "1becb443c3a4958cbe6b2825ff6832b4",
"main.dart.js_242.part.js": "ed231afb60c0d6eb678b86acbecc909b",
"main.dart.js_86.part.js": "6467fc228d59e278bf7586ec11d28e72",
"main.dart.js_23.part.js": "914576b30488c53b6c969e0beca3c1c3",
"index.html": "4389e5648ea2d79f267f69ddb4caf5b1",
"/": "4389e5648ea2d79f267f69ddb4caf5b1",
"main.dart.js_53.part.js": "cd73d0f5466fe3aa49ce3c48b1040731",
"main.dart.js_74.part.js": "78f8eeec927e0e81e12afaf076f5a160",
"main.dart.js_235.part.js": "6145d0bd6b2f51154e058d05a6c27875",
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
"main.dart.js_118.part.js": "e3d120556638e7c64108db685f1dd2dd",
"main.dart.js_26.part.js": "61d32aa8e6c21dddcc04d5c495edf4b0",
"main.dart.js_20.part.js": "96f71b61c5b8325be979cddf4a3ba1c0",
"main.dart.js_189.part.js": "489771d182cef9bba123c483e68079b5",
"main.dart.js_214.part.js": "784c00875b7e15a276edc18907b81a8b",
"main.dart.js_51.part.js": "c1982556095d185705c67df62845a8b3",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "7985ce5b4e31151c385ece988a4274a2",
"main.dart.js_1.part.js": "b84660c4339777e946df946d83ac23d1",
"main.dart.js_120.part.js": "965a74f4bed24a4f5284e96105aae9a1",
"main.dart.js_63.part.js": "a87b298c33c657cfb2d3cbe791a4b0bf",
"main.dart.js_211.part.js": "14d6407db8de78e9e79f7e9bfff5c054",
"main.dart.js_12.part.js": "41c32a6817af62517b6561c72e37d671",
"main.dart.js_221.part.js": "600edbbddd5c4ff28aa81ff6ef0d385f",
"main.dart.js_137.part.js": "52f67105e0c34d8d15f5cd472e0b8060",
"main.dart.js_28.part.js": "8dcf62214d45436656ea40bbda1e301c",
"main.dart.js_135.part.js": "c45488cf32c87cae4fdfb15f67304c6a",
"main.dart.js_6.part.js": "352e7a116d335124eb65acde3103e2ea",
"main.dart.js_256.part.js": "2deeaba4ed2805e1abf607ddd74612f5",
"main.dart.js_193.part.js": "278b6b1ca3f1f74795d7a3854f6ea98b",
"main.dart.js_17.part.js": "859f7f2a372d0b675751f6fb5ecdcb17",
"main.dart.js_105.part.js": "1ef78b4bae02d63d297dd12bb5bd03b2",
"main.dart.js_231.part.js": "e49d214994dc17a73afc91ca5d4347d3",
"main.dart.js_43.part.js": "3346126e622877537b52437ba76477a0",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "147ea0f9f336cd2f98ac5aadb7881c19",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "5c2d587df6f3257bc1c7c947a65883c1",
"main.dart.js_15.part.js": "0609159fe8a53e39c130519b57dc3bbc",
"main.dart.js_19.part.js": "59cff0dabf3ee918c60f9637f7e44458",
"main.dart.js_255.part.js": "1365d12f6dd67b61eeb27497eb3ecd60",
"main.dart.js_186.part.js": "adc09cbf9e634f18effd587ca52817f0",
"main.dart.js_163.part.js": "b20cba8b899d8dc528b4671b55a7ad41",
"main.dart.js_154.part.js": "ddcb4f6cbf77467828d69934d6932301",
"main.dart.js_42.part.js": "37e85cbd7b8b500dd4e8e328a8e71d04",
"main.dart.js_16.part.js": "cd19200dcadcaab29d487d4cc0c010d8",
"main.dart.js_250.part.js": "530c127087929e12995f844682ef83be",
"main.dart.js_52.part.js": "05faf8581f0c46dcd90a1e3b7f9e3a56",
"main.dart.js_36.part.js": "fd189be39f4c6a51face2b2f6b6d0d9e",
"main.dart.js_199.part.js": "fddc97fd34d9a1ccf7192d756f7ffbfc",
"main.dart.js_253.part.js": "2d5621dd4731f7e7a2862b1300e3fd7f",
"main.dart.js_130.part.js": "a9eb1a8b29f28787cef59cf0875380b3",
"main.dart.js_238.part.js": "f8968cc26230b848604fba413b916763",
"main.dart.js_32.part.js": "dd4a5fcdf4869004eec021e4037a1b69",
"main.dart.js_197.part.js": "f73d73c47634715c58849a72271236fd",
"main.dart.js_3.part.js": "a544e4fcf170a1260c205c533e03fcac",
"main.dart.js_68.part.js": "d54c183b77b4405860e03d59403c3489",
"main.dart.js_38.part.js": "50d2ceb88278ad54f4be1f47305d1727",
"main.dart.js_225.part.js": "983ade5ef36eaa00cc079d85d382337c",
"main.dart.js_248.part.js": "bd0dfa292bc9b4c05d01414c2e12d0f5",
"main.dart.js_133.part.js": "2756dda3f765d9ef6e8bf9f2d2a658fc",
"main.dart.js_21.part.js": "4acaf3fc02e86cf6b50afb805a9f92a2",
"main.dart.js_24.part.js": "53c135a1fa480ba189edda7dd1ff9cef",
"main.dart.js_111.part.js": "12ab00e8c153e49fe9913ac6ecf0c214",
"main.dart.js_177.part.js": "2e22669cc014b752eb704727d51d6b59",
"main.dart.js_85.part.js": "353c68409c7aad8faa38ab4e68651b45",
"main.dart.js_243.part.js": "5922c4cf711226da7e808c887bb2e51c",
"main.dart.js_212.part.js": "476a95c21240e78640614146a6f8c682",
"main.dart.js_114.part.js": "67bbe63ad9cfb63ee2df2708a91426c3",
"main.dart.js_39.part.js": "153cddf9bd4b49b06e1ab83cdcf62c1e",
"main.dart.js_49.part.js": "12e263a7215702c3dd3035ad0c3dfcb4",
"main.dart.js_185.part.js": "c65e90290a32e67d69231bfcfc123d2f",
"main.dart.js_46.part.js": "c453f0f47459d9bfdb1168d0ba3abcfc",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "a3aa215706e3472997bc653a41a9e6e9",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "b1876ac09031e9d2859f3d1c6711401f",
"main.dart.js_134.part.js": "2dc23233a97d36cadfab2549e87d4114",
"main.dart.js_195.part.js": "c85143f4e78a5f9b91a0435b5f12cff8",
"main.dart.js_121.part.js": "18a764de035e25ba9543bb37f92d4909",
"main.dart.js_55.part.js": "45b5cb7c2e9177f4538940d7c20772e3",
"main.dart.js_215.part.js": "f1c53a0ac94f4e7ecd3d4a031ccf2d22",
"main.dart.js_112.part.js": "f7f34549ffd9e1f127da81be625195a9",
"main.dart.js_139.part.js": "c1e9d6a210d2f6985eca3d0cbdcbddcd",
"main.dart.js_143.part.js": "a64a8bf2b0c4857afc736ca492467a7d",
"main.dart.js_80.part.js": "f50cb4fa766e171cf29003d22a1e9be8",
"main.dart.js_233.part.js": "816bbfd08a8544aae05ea50629527413",
"main.dart.js_30.part.js": "16362586c79d1dfeb371aae063038603",
"main.dart.js_78.part.js": "959a5f1f3effaf0ebcd5f9affce28715",
"main.dart.js_136.part.js": "a3a8fef72cf9c50fa41bb2fa8e6e4172",
"main.dart.js_168.part.js": "554e0f0181a9a5224cf6f16ccafd6012",
"main.dart.js_95.part.js": "928638dac40c4b45211ac09b628a924f",
"main.dart.js_107.part.js": "9320467bb9436bdd1ea2c4ef2a7212b2",
"main.dart.js_29.part.js": "25e13cba31a4032011405c0c3ef672a1",
"main.dart.js_61.part.js": "c0656ea410798ce6b6a9778368b9c7dc",
"main.dart.js_236.part.js": "1dbd1be8bfa731b7e65edadca85a3eea",
"main.dart.js_58.part.js": "52358db3ab8c2c28d513e8fed9e9c9a6",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "32066e056230f61afe9cbca97cc0bd24",
"main.dart.js_54.part.js": "9d41256d56a651336b53185fc8bbe107",
"main.dart.js_79.part.js": "19a75267ebe8809c19f5cfb012dc58b8",
"main.dart.js_92.part.js": "4ce249b1b5962ade24dd59db07663e3d",
"main.dart.js_93.part.js": "e8c5bc74cd15e49998932581c30a5d0d",
"main.dart.js_223.part.js": "5756e7567cdce76092d28b8a92efef13",
"main.dart.js_11.part.js": "e8785de970278b7e1ad57cbd95c2ffa5",
"main.dart.js_125.part.js": "04de2e2f530b1d93e01e2aa237d6ce81",
"main.dart.js_131.part.js": "9afec952ea403e4cabcdc2a75feeb46c",
"main.dart.js_226.part.js": "afba1996ce3b4baed0eeb1caa3945c91",
"main.dart.js_14.part.js": "05a8d28a53be312f35550e5001918499",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "3054715754dadfb55b664c349f8d0fc8",
"main.dart.js_100.part.js": "168f86a6b200d9c0e6fa06666b9061db",
"main.dart.js_258.part.js": "47e0b08dac7c54164d02359349c9c414",
"main.dart.js_70.part.js": "3d82d4f4a8a095061a1e790bbc5d68a2",
"version.json": "8eccc37b0c2b359fa2cd6be183ebf681",
"flutter_bootstrap.js": "923aa2fa8e4b865efb79fa918e4e630b",
"main.dart.js_191.part.js": "017527a37f12426b2b379856f1171f86"};
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
