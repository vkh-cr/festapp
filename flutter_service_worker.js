'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "30cd0bc6a2d32c0af734610b5e867d83",
"main.dart.js_117.part.js": "7224a953cc617d45eecd6b78a15ee331",
"main.dart.js_182.part.js": "7b241793133304d0e77f32e62ddc85da",
"main.dart.js_75.part.js": "37f5f04c88eca38ad12773c5f3409969",
"main.dart.js_244.part.js": "6d526db570e4355f44c4c7936621febe",
"main.dart.js_83.part.js": "2ef7ec6102dd4f6760f869b836da5b2a",
"main.dart.js_254.part.js": "eaf906ae04f8375a283bd8147fe7ce35",
"main.dart.js_176.part.js": "a2824a13f05c2e4d2e3da9bea4bfdb4d",
"main.dart.js_96.part.js": "c9a604231718879e35df7aab27fcc2ca",
"main.dart.js_245.part.js": "9bf0ecd47e2730b1269ef35534d6d96f",
"main.dart.js_87.part.js": "7e161cc3556fab7de5d89f12bb557a06",
"main.dart.js_251.part.js": "99420ae19e34ab80067f3edeeef07cc4",
"main.dart.js_126.part.js": "0e6b243138495270779deae639ae60a1",
"main.dart.js_129.part.js": "fcdeb8eab87577bc87f9491095304596",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "c1cc0b1fa64275efdab898efdbb67808",
"main.dart.js_172.part.js": "b4aa7beebc10631ab7f7d7785807f18b",
"main.dart.js_40.part.js": "18de1721bfc076b24540ec81ac7a009d",
"main.dart.js_209.part.js": "69249e4e349b4a8d552be3597979f540",
"main.dart.js_115.part.js": "7c7d38a90b1978c1f5b5d49b12bb6df9",
"main.dart.js_10.part.js": "09df077e17733ada181d93d680f0009a",
"main.dart.js_84.part.js": "729c01f8a6ad0411e95edcef55e4e871",
"main.dart.js_122.part.js": "9ce9548608857f03dfd39727ed9d1ff4",
"main.dart.js_230.part.js": "8c8a73797d7fed9e401ef81508467b21",
"main.dart.js_213.part.js": "419ea4863901b06c505e3256b25a99ec",
"main.dart.js_41.part.js": "2f6f3952f2b4b0296f411c747cf1f403",
"main.dart.js_89.part.js": "a340d28480aa5d7cb6d575af44651ecb",
"main.dart.js_71.part.js": "664b9c1447c2433ee1e4272a62542c3e",
"main.dart.js_146.part.js": "d29258060d20399670823c694656f484",
"main.dart.js_37.part.js": "ea096e3e6fdfa196bd6df182e3de0df2",
"main.dart.js_132.part.js": "18c68e39233057954c89d4f3f6623a15",
"main.dart.js_165.part.js": "f05fbeb91a089040a93eab2d5f79d896",
"main.dart.js_127.part.js": "362eafb7983e233664b4c1d1b5432965",
"main.dart.js_175.part.js": "e8830a5b9f110bb5d26fc8f3b9dc2fea",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "d68e290632694c7e91ab324ce81362c3",
"main.dart.js_216.part.js": "fed8ece7c0ca32b6c318bf2d526f8295",
"main.dart.js_64.part.js": "eaf137b9f7ffde152f90bf073d944383",
"main.dart.js_169.part.js": "25ee6479cf2036ff370c745c4bed1242",
"main.dart.js_13.part.js": "6dc948cb2ac425379b6335841a18fc14",
"main.dart.js_246.part.js": "d4764e13a427b37e0597009d8ee0f783",
"main.dart.js_174.part.js": "91dfae3b3a62e9c518b01346886ac5f1",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "f6726c34cb9ad0eee0a088f11896a0b3",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "87002fb7dd578cf54fb7e55115b09239",
"main.dart.js_119.part.js": "b6d69c83e2656f35328a08cc12bee39e",
"main.dart.js_18.part.js": "2b4a4561bdeebe6a0b7deaed46fb1b6b",
"main.dart.js_35.part.js": "f44eed6736988ffd87e469a6f5b9941d",
"main.dart.js_200.part.js": "fdfa06fe5f35b1cb972762617d643749",
"main.dart.js_101.part.js": "82adcb051ad335903cf76a47b7902b89",
"main.dart.js_77.part.js": "4c747556e8e941cc6929947d8438dd96",
"main.dart.js_149.part.js": "ad5bcf074af2c3eb3b08db5befa4f45b",
"main.dart.js_82.part.js": "3c5ebc45b36f0314ce7440767a45bc8c",
"main.dart.js_173.part.js": "23b4e0bf3415d3db427392d10d208078",
"main.dart.js_106.part.js": "27d3c4b47f82bbfcadf1ffa938f3ca28",
"main.dart.js_62.part.js": "b1df5a22bc78995574d6ca0e8e969264",
"main.dart.js_259.part.js": "367136f9c00884a30860460e618bbb73",
"main.dart.js": "5d6ca418191afbc30fc220a5eac970b9",
"main.dart.js_222.part.js": "621b83fa7bc79fd4df109ccda0963ef3",
"main.dart.js_232.part.js": "b7d9ffb5a39aed29ee78b735faf25247",
"main.dart.js_148.part.js": "b2c8beacc2367cd22dabf466e12b00a9",
"main.dart.js_124.part.js": "22cb77b16e22f1916f47106c9dc67cde",
"main.dart.js_50.part.js": "1d10aac253a73353aa73800d89c29a50",
"main.dart.js_97.part.js": "9f57ed1978acc7d1c195b78b56490787",
"main.dart.js_192.part.js": "4bf1ea720a1d7c4b901deeabc68f801c",
"main.dart.js_145.part.js": "1861beb3ed5d29657542e53b9a32a5e5",
"main.dart.js_57.part.js": "8acf985896b811e824d37fa3c7897e91",
"main.dart.js_190.part.js": "c7c0fd44604449206904bde908635040",
"main.dart.js_104.part.js": "962ded67125d0b511b57eebb4688cb4b",
"main.dart.js_201.part.js": "6faa95b72e3e56930eee2d3a963a4a89",
"main.dart.js_69.part.js": "8c91fdbd559e86a2d1f02a3a1a03967b",
"main.dart.js_181.part.js": "94ebb90c4cd16d17d011d7064a179127",
"main.dart.js_33.part.js": "cb3770cc566cde8237e908bb526f8d21",
"main.dart.js_217.part.js": "fcb3e9a1ae0cc532e87787eeff8e7feb",
"main.dart.js_34.part.js": "b1f72c02ffba1fbeb00c6ab4856175e8",
"main.dart.js_210.part.js": "54e81d9fed3d182a220dcc3eba7538f2",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_88.part.js": "a91caacb6116606d682afd3786bb02e1",
"main.dart.js_202.part.js": "05e7a22745a7c51bd772e49299cdbe0b",
"main.dart.js_183.part.js": "d8b54da9815acd74f1e988900c1234ac",
"main.dart.js_167.part.js": "8093904728158d0d12770fd238744aea",
"main.dart.js_203.part.js": "1e8ac58b59819a18b49e4e187c4c3c4f",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "2196fba4cbf089c50690b4879ff601b0",
"main.dart.js_7.part.js": "7842ef0f4b1700c333f196a36bbed40d",
"main.dart.js_140.part.js": "4ec6511bde8edf0064607ac7615ffcfa",
"main.dart.js_228.part.js": "3b5307d3789dedcb4cc0ab6721d32250",
"main.dart.js_170.part.js": "44524a8bfb42cbfac34b409a09d1e792",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "b629aa13de0f3b068573f418b21b541f",
"main.dart.js_27.part.js": "f390d8b55bb265248a2c3a2fe261dc7e",
"main.dart.js_156.part.js": "3b75e80fe9c28a1c25b35268afeba44e",
"main.dart.js_4.part.js": "7899ff366690e9a958f5a920dd0684a8",
"main.dart.js_219.part.js": "7d97fafb77f41c353d672ae80c391b65",
"main.dart.js_116.part.js": "2b53ed98bcfc50ee8dfac31f02925f8c",
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
"assets/assets/translations/uk.json": "8c279d4790eeea05f92658b77521a514",
"assets/assets/translations/pl.json": "8c70468ba11c01e8da90fd0b42dd0099",
"assets/assets/translations/sk.json": "4b63c9250c52d719d04d42a559340991",
"assets/assets/translations/en.json": "8097bf9fd647a636c863626f226523c6",
"assets/assets/translations/cs.json": "ab32dc5e1a9e1de4b302123ad16c96c4",
"assets/assets/translations/de.json": "29361a9c2f83d4f16f63f24d28cd21cd",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "972be2ccb94ac0031acb11220f3f7a8f",
"main.dart.js_147.part.js": "24f432ab7f70509d2d6d77db68afcd88",
"main.dart.js_220.part.js": "5703900e570866d8d14fa573ffd866c2",
"main.dart.js_25.part.js": "be2fd1dd3645faeef5e664f25696cd39",
"main.dart.js_249.part.js": "c570bbfe4b3ba7ddfef9da726cbe81cf",
"main.dart.js_123.part.js": "918ffa0fa1fe0c9fa641dba666537712",
"main.dart.js_241.part.js": "1d7d5e97b8ce945c2055bfc94dc8f38d",
"main.dart.js_8.part.js": "0880764567dd2a74b79b8fbae4d40092",
"main.dart.js_198.part.js": "495c7ab47f54ae4cc0da9ce7ff540b70",
"main.dart.js_81.part.js": "54b9ac81844cfe497943a8d647ad6549",
"main.dart.js_205.part.js": "e71065fe61c3e255a8ec369c6a58584c",
"main.dart.js_113.part.js": "7da9f7535cc2babd8f18dd16e191d370",
"main.dart.js_9.part.js": "e4a0cd44e7f59f8c388c1f2381009ba1",
"main.dart.js_22.part.js": "541de6cfafec8c3db3f9c41abe42bebd",
"main.dart.js_86.part.js": "104497d7f207ddf3f7b0e8cd67680b2c",
"index.html": "b8be9b54c35b6df54cc1a2ada7b7300c",
"/": "b8be9b54c35b6df54cc1a2ada7b7300c",
"main.dart.js_94.part.js": "48c8626f51c7fb906a973f4e40f5fb3d",
"main.dart.js_98.part.js": "c68416fb7634520c296914e5b0b9ac25",
"main.dart.js_53.part.js": "1ba62249d69727fc5684c934170f3b43",
"main.dart.js_74.part.js": "7a8cba45fb005cdbe602f1304743d023",
"main.dart.js_235.part.js": "e71906f7e312cfff07581f3613c10d31",
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
"main.dart.js_118.part.js": "6022a81b68abf1d7fa562f911e80d145",
"main.dart.js_26.part.js": "ef48bce765c50fba9dec80d70fd9c9a4",
"main.dart.js_240.part.js": "ca30819efa5e0dc1385831fa144064d1",
"main.dart.js_20.part.js": "59e38a660c7fcb6547da7ad83d9c1357",
"main.dart.js_214.part.js": "a7196ef214a2d0944c178708f57b2df8",
"main.dart.js_51.part.js": "3773e9b3d24ddd3b49fde94e196ccd76",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "83ed39fa601c744689dc583d41a7f519",
"main.dart.js_1.part.js": "9d424e78337ba167f1672ea7fd45c843",
"main.dart.js_120.part.js": "70a1d15d25e2969c7ee2fa576dcb67fd",
"main.dart.js_63.part.js": "8d7820965e2cbb7cbcbfe5178c86512b",
"main.dart.js_211.part.js": "fba5d1a4e96d03ba2c8069c4a0cc7f38",
"main.dart.js_261.part.js": "1b90c6964856b3ac52d843fa60296973",
"main.dart.js_12.part.js": "049910802e1fc9809b6f9e41f6bffc10",
"main.dart.js_157.part.js": "e12b17b0d492dcc43a5ed0420277bb13",
"main.dart.js_221.part.js": "97eea26fe4d3e14198d4e464e1c04828",
"main.dart.js_137.part.js": "3b25c0705c4d36bed4b9072f9c43caa4",
"main.dart.js_28.part.js": "d0d79e4bce546b731f7c0cb84d4c1e18",
"main.dart.js_135.part.js": "fe964a2e8ce498bfbee225af2b4d2b25",
"main.dart.js_256.part.js": "563205e856dcc86087e6df453e4365e5",
"main.dart.js_237.part.js": "dc52abf12b59ee4dce1142f94f65f68b",
"main.dart.js_193.part.js": "5611b7155d923e72fe9cfe4a79844692",
"main.dart.js_17.part.js": "4e80e2aacbcd1342ff71dad58a448bbc",
"main.dart.js_105.part.js": "1aa913db9015d91669e69ee9ed5c4ab8",
"main.dart.js_231.part.js": "79d47d801cb6aed5528ae865dfb9151c",
"main.dart.js_43.part.js": "f875be527a23083d14188d092ed98d6b",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "7f8f8edb2b4a1b2fcb6de14f9d71a308",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "3da77174dbf6767f792844025861f029",
"main.dart.js_15.part.js": "b0d27f5026dc1c299e660050d34105be",
"main.dart.js_19.part.js": "983430851c88c70208f853bc37da91f1",
"main.dart.js_186.part.js": "008f911e2c20bb24f403c5427b04cc99",
"main.dart.js_163.part.js": "271dfb0515e1c63de8a47fe8b20ff6bb",
"main.dart.js_257.part.js": "e0fdde952b9a43b67ce64a4a7591a084",
"main.dart.js_16.part.js": "47cbd3459d5ffaf1bc506f49b891e788",
"main.dart.js_250.part.js": "5c4d229c31d875b16ee786106dd89a82",
"main.dart.js_52.part.js": "bb8cc7d018af4ca00e20c58faaf1f66e",
"main.dart.js_253.part.js": "1a3a3e9df2b0255c10bfb621186e7e82",
"main.dart.js_130.part.js": "23e0bce06312eaa0f6b141416cfa0c05",
"main.dart.js_238.part.js": "5984a7e809a1f3fbe5716e14e52b6452",
"main.dart.js_32.part.js": "943e06d92f29ea63037d6392e1da1e73",
"main.dart.js_197.part.js": "4382b969edf208d0547f07272b76a6f7",
"main.dart.js_227.part.js": "37285ca537edded484e29f72852f5252",
"main.dart.js_3.part.js": "1549a5cebe8d6b7b187bad7c8bb19c5a",
"main.dart.js_68.part.js": "d76494ac85630bbb049ce5d7da50f3ea",
"main.dart.js_38.part.js": "ea937a642d2d47f824d32a1197819af0",
"main.dart.js_225.part.js": "03de0c7f5c55622a8387c0735e9b5971",
"main.dart.js_248.part.js": "220b31a58e7baeb715ef3bfcf0c19abe",
"main.dart.js_133.part.js": "7028fb6a0f49c4da248264a4777ecf70",
"main.dart.js_21.part.js": "519c1b980565e21903fd6e5ae698204d",
"main.dart.js_204.part.js": "59f2f7d48a648c166a59c20089e9382c",
"main.dart.js_24.part.js": "e75e10c6fe9e595e834173efb01ed1d5",
"main.dart.js_90.part.js": "144ebbfda9038660129dabac2a40fb9c",
"main.dart.js_111.part.js": "68b4f3d2c0ea2c5958b45b7494b6db4a",
"main.dart.js_177.part.js": "dfd2a2893373f196196b5c2fc794358b",
"main.dart.js_85.part.js": "8c8c4782f907b94d86292143f3c406fe",
"main.dart.js_212.part.js": "ef59e2574c3a7d8bd202262bd6723af4",
"main.dart.js_114.part.js": "bcb34cbf9ad176026ea53328d1758c4c",
"main.dart.js_39.part.js": "34ca57a351eda7caea316754dd8c66e6",
"main.dart.js_185.part.js": "3d411a9049d3ef44306c5139bf16a59c",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "f94afb6d951aa16190eb053d2402b36e",
"main.dart.js_171.part.js": "49a151515f52ba6f0c61aab553c7c9c5",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "851a4f3cbc33c8f1dbaf5104fca190f1",
"main.dart.js_195.part.js": "3ae182a2caf11e7f913ddbfd14828457",
"main.dart.js_44.part.js": "4664f3df7a1843448dad8642a45bbc54",
"main.dart.js_121.part.js": "292383fa24934a48f87c5970990f4bea",
"main.dart.js_55.part.js": "5b61aba040f6de438f6bca0130bc3168",
"main.dart.js_215.part.js": "7988b7585abbb342af40d21a8e1155fb",
"main.dart.js_112.part.js": "f1618a538ca90a5dff967a1f63adb7d2",
"main.dart.js_139.part.js": "0680815a3c7ca76fe19e29fc015135df",
"main.dart.js_143.part.js": "1ac4fbb04a8439c5540a86401fd39146",
"main.dart.js_80.part.js": "61caa978c2643fb4c2a884de2b14a75d",
"main.dart.js_252.part.js": "62e8cb5d63f87c5ed367ba1369c6f948",
"main.dart.js_233.part.js": "afad17e5de149469632b0131d63b83de",
"main.dart.js_30.part.js": "2d9e0064d39cef0c91d2836238f02fbc",
"main.dart.js_78.part.js": "2562877d17b0ebf795a36f01d4d02554",
"main.dart.js_136.part.js": "69c414f64981e9b3a4df39b1c561eda5",
"main.dart.js_168.part.js": "bac4513599bf34fe6961fd1e5b695cd9",
"main.dart.js_47.part.js": "6c3f4a05dacd8d7cd04d157e289dd4c6",
"main.dart.js_107.part.js": "4849f0993e1c68a0998fd02b4913771c",
"main.dart.js_29.part.js": "7a9dbe05c60e2659b587eb63bed6783e",
"main.dart.js_194.part.js": "971a567508bb96e308ba01905d8e1883",
"main.dart.js_61.part.js": "5ba7f78b82acaf619b1f45d3e184fa0d",
"main.dart.js_236.part.js": "d4595764e57d5d88b46fe792332a4b75",
"main.dart.js_58.part.js": "f26f4a6458f6dec017026c9f9bda2627",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "7457d20b66b9f48c99dd8e105531d600",
"main.dart.js_54.part.js": "694e84396b1a4a8db491a06bf3b68bd9",
"main.dart.js_79.part.js": "136df7b0ff949f69f93273986e5391c3",
"main.dart.js_92.part.js": "ef585bbe85976d9229e7f469f0839a89",
"main.dart.js_224.part.js": "eddd0e6f2c9a668297b195df97fd7990",
"main.dart.js_93.part.js": "5603a1223687020916889ac06c2cafe0",
"main.dart.js_223.part.js": "c8090cc3c13b17e10c60f9d5bd18619b",
"main.dart.js_11.part.js": "277e0ff05b56d8d1d5dc32f202b5159c",
"main.dart.js_125.part.js": "ab32f8a7c2c4ebf4b0706fd8cacf1b00",
"main.dart.js_131.part.js": "40b6cd160a717135244dbe174039eba3",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "54deda3dafd7d8eba19507ed18352e36",
"main.dart.js_178.part.js": "7566eb3fc679eb60489f7a9b22ee6f43",
"main.dart.js_100.part.js": "2c87f65d6f3a3bd84df8328c889e9b3a",
"main.dart.js_258.part.js": "46214fb7c8617d71547a0ee66a4ec030",
"main.dart.js_187.part.js": "2ab878411aec4f6f215cd8a1be7f5f4f",
"version.json": "be3e5ab30d765a9d63bc51c90c5c97bd",
"flutter_bootstrap.js": "803118b990e01d9eec56c35cea37ea6b",
"main.dart.js_191.part.js": "83f79f785e9e928ff5eeb22e38b11739"};
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
