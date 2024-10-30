'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "53f0a32c4aaa5f261ce2b20b84783fde",
"main.dart.js_162.part.js": "c0ea52e1b8871e29e288a2a6d1c3afd4",
"main.dart.js_117.part.js": "0e09483701925474f38b66fb42fa00a1",
"main.dart.js_244.part.js": "794e38b9deafdf1d48d6a15510474118",
"main.dart.js_83.part.js": "9281d3f81804a0213b4f5cd10de666d0",
"main.dart.js_254.part.js": "08f26de486d5d1858db9adc365aece8c",
"main.dart.js_176.part.js": "84d0b6e400023a59616d60e8b1895383",
"main.dart.js_96.part.js": "8dc45e5d8c88d963b790bd1ed2d801ae",
"main.dart.js_245.part.js": "e90369fe73208831fae605a870c05f32",
"main.dart.js_87.part.js": "0f2a9a864d7c962280fc9079aa021db7",
"main.dart.js_251.part.js": "af3bb12ec7c487906d58d7302ce7bb82",
"main.dart.js_126.part.js": "ca10067b0da3db1e9d0cb3e4edd779cc",
"main.dart.js_129.part.js": "f9b35739334b888cb83a829a665a5685",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "b0c508833e80972efcc8a42cde299fc3",
"main.dart.js_218.part.js": "47f3124aab0cf2a714e8667244ca2034",
"main.dart.js_172.part.js": "1b14a308dc308f762fcf0431ced157bb",
"main.dart.js_142.part.js": "8508d729db6a03eaae9b23937f3b1a3e",
"main.dart.js_40.part.js": "d580590adca21de90f6382298b5c8902",
"main.dart.js_48.part.js": "275152a6ed7e013bdf30ac6447559a77",
"main.dart.js_209.part.js": "167d8b0b24908b90a8b8972844976a59",
"main.dart.js_115.part.js": "b50b3c800f5292a2aed2ef8d3b8f8c4c",
"main.dart.js_10.part.js": "82fa567fd8dc8f5bb5d45a071053bc6e",
"main.dart.js_84.part.js": "6288ea7bd7b88ebd78cd94be49aa3ee3",
"main.dart.js_122.part.js": "8055db4eaa25771d123c980ebcea4879",
"main.dart.js_103.part.js": "b33a63270444772ac0e65cb859b7ae8a",
"main.dart.js_153.part.js": "22f43aa83cc18082f8e9228d55254e78",
"main.dart.js_41.part.js": "116ed9e44844ca3e8689e82b3cf5c89c",
"main.dart.js_89.part.js": "774bbc2fb7fb883947e2c405f7cb0225",
"main.dart.js_146.part.js": "6483d8b58332c6a9d46281bba7cc4187",
"main.dart.js_37.part.js": "e98b759b8ad9f35241931bf8fa013a62",
"main.dart.js_132.part.js": "9d5cca0015d91b49b3f7c89f77fc69fc",
"main.dart.js_165.part.js": "4547df345ec71cccf1ae59e98fb9e515",
"main.dart.js_127.part.js": "0d358d3abdca2244170353dc0451d237",
"main.dart.js_161.part.js": "daf0dbb2dd8d1a141039577b14c7969d",
"main.dart.js_175.part.js": "d53a5f2f2011a1946f0433147b903ba7",
"main.dart.js_239.part.js": "41d0335a89c3b5903c8d627d4ea010e2",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "10dae4989883d736add5d33e43df4851",
"main.dart.js_216.part.js": "013ce07c2daad4501ca8560361adedc8",
"main.dart.js_64.part.js": "bd888b1c731883be465f9fcf1775240e",
"main.dart.js_169.part.js": "8ab9f490b2c00b40ad49540e5b70bb43",
"main.dart.js_13.part.js": "5e53f1884915a12ecae59d204dc0a28c",
"main.dart.js_246.part.js": "6ee45c663dfe03377b34f8169e270e41",
"main.dart.js_174.part.js": "65809ba39c34d77a15f0201d762ad1eb",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "89059f420f99b32bf38d85b79ba87d95",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "dbbe1f721b14ede7eff9b7078f5fd33f",
"main.dart.js_119.part.js": "ade7755b49fd3615fcc20a1bc1d22f85",
"main.dart.js_18.part.js": "6bf0f3d270df0a42d175da5fc22d456f",
"main.dart.js_35.part.js": "03596b09be30468e52d150d3d33e96bc",
"main.dart.js_200.part.js": "0a918cdf9c60723d8846bb17ae22535e",
"main.dart.js_73.part.js": "ad22b60f739a4392e918898470e043d0",
"main.dart.js_77.part.js": "acbe316eb20a2c6b35f9123287d1c5a1",
"main.dart.js_67.part.js": "8d04eb9b361365c04ca34a98c8f15cc2",
"main.dart.js_208.part.js": "2f7f3bf24a4b1e331c2273035201537a",
"main.dart.js_82.part.js": "9ce585c39d0950f591f9cf9ab4a1ac99",
"main.dart.js_173.part.js": "30283cc5516ea34ab0dc852899335af5",
"main.dart.js_62.part.js": "a8b94f2eef2a1c3df9be5941054909bb",
"main.dart.js_207.part.js": "9bea4f575b8d24904a99857ea1311ecd",
"main.dart.js": "1a8679d2495775f85c75d7afea6c6bc1",
"main.dart.js_222.part.js": "2dff318bbf36bc5a280cb364ba9a89c1",
"main.dart.js_124.part.js": "087c9c804f11d8ba1e891c29e9294164",
"main.dart.js_50.part.js": "5df6b1a71a44d263f32e80c0e5b4cfb4",
"main.dart.js_97.part.js": "fc053b591e56c59ffb1c3ef29bf354cd",
"main.dart.js_192.part.js": "1e6748dbfc2b6a2938251a08f5958b94",
"main.dart.js_91.part.js": "ad68e129d260a01e2e2cc9b5e0f0dd9f",
"main.dart.js_145.part.js": "084638542eccc73322b1eaed973ebf00",
"main.dart.js_57.part.js": "342b8cbe53e6eaafaf0924ffabe4f2b5",
"main.dart.js_190.part.js": "22ba25392ae64f477a7c4d3460428dd5",
"main.dart.js_104.part.js": "fcbad1cd8912dd6cead30e1d5e51740c",
"main.dart.js_201.part.js": "abfed595b9b144fa9faa74d6f892c044",
"main.dart.js_196.part.js": "1c839915866ce30eff952f2c976feecb",
"main.dart.js_181.part.js": "d8f5defc3a3bc4323069d486c3396275",
"main.dart.js_108.part.js": "2e5c5a2a67749498daf184e20e0756be",
"main.dart.js_158.part.js": "f088fed4f5f3d8b1e40099c606df61ea",
"main.dart.js_33.part.js": "752f42fcebd0a0b0003f491308f034a7",
"main.dart.js_217.part.js": "1f87561025334176ebda68295a88116c",
"main.dart.js_34.part.js": "965b585d6f02a8e5d0c6788f23fd3779",
"main.dart.js_210.part.js": "debfc27628a1f4841e1713551980c549",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "068a3e7886e132059cb736898341a22d",
"main.dart.js_88.part.js": "f78d7be2f969a32a72c0cded5faa872e",
"main.dart.js_167.part.js": "a33c20bef5b08d8763a2233136767559",
"main.dart.js_203.part.js": "f1c48d55f93c315205a293c1e7a81f98",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "568f79cd677efe477a581ae3f42be2ec",
"main.dart.js_7.part.js": "49f6b8fdbde206391ab8fdff77f763c0",
"main.dart.js_140.part.js": "0abe3fbee1165afc4bdc8e9ecf52cc4d",
"main.dart.js_228.part.js": "ba0c915622b66ff1f05197541f528c7c",
"main.dart.js_170.part.js": "9eec39c7aac7a3d829bfc0ef6fa1df86",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "b1ab539134487a56b5f59877096a7885",
"main.dart.js_27.part.js": "d06ea69821e7ce6b0a07c29718ea1e47",
"main.dart.js_219.part.js": "6af984b78739cc815bde841ee65a3a82",
"main.dart.js_116.part.js": "00b7333abf3d48c100b1609da570daeb",
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
"main.dart.js_220.part.js": "1465be4db4f7082bd1b0df5f1c8f8e1b",
"main.dart.js_25.part.js": "198477aab2301a5f53d3c089c19257fe",
"main.dart.js_141.part.js": "e81fa1029abec91f10cf2cc53815ba6b",
"main.dart.js_249.part.js": "8d7a34b7744433bfe1a6b21000c62fac",
"main.dart.js_123.part.js": "c1692952b608a162348037c8affa3603",
"main.dart.js_241.part.js": "cce738e7dcd88d74c297b0213ca573c4",
"main.dart.js_8.part.js": "d9306b289027b846e36c4a19ab73b3b2",
"main.dart.js_198.part.js": "5bb39ef1c6ad87e164771708f4e919ed",
"main.dart.js_81.part.js": "79b57c36b149e8326c2824a626ef641e",
"main.dart.js_205.part.js": "c8ec8f844a310c2140df04ae71e37136",
"main.dart.js_113.part.js": "08793d6104ea4f4593fbce0bedfbd4dc",
"main.dart.js_9.part.js": "53b340f8dd503350ab4d72d1eb697ea1",
"main.dart.js_99.part.js": "3726517db2100e77473f20f8e7b3ff4c",
"main.dart.js_22.part.js": "f7900da1f1b818987a46af64c17ed72d",
"main.dart.js_242.part.js": "772ed79d44297da5d55c94d8252a7c95",
"main.dart.js_86.part.js": "5a68ccd047de41d4c34f1518c2949c1a",
"index.html": "1d76a111a80017bce06af4487deb1480",
"/": "1d76a111a80017bce06af4487deb1480",
"main.dart.js_98.part.js": "9dad13517ba5424ce09a8e7b1245fec3",
"main.dart.js_74.part.js": "4cfdba706b18419200c091ba0b0290a4",
"main.dart.js_235.part.js": "535715895f2754a5081ae4905e8265b3",
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
"main.dart.js_118.part.js": "ee0f4aa79ca6e67268ee5cdf75c71220",
"main.dart.js_26.part.js": "a68e65bf62869c3ee842869a3a78404e",
"main.dart.js_240.part.js": "56e61e827874f3af4772378a3c63962f",
"main.dart.js_20.part.js": "d0fdb6fddfd673a5362d47445afccc2a",
"main.dart.js_189.part.js": "b9e1e1eb1f8a2363af097920af8351e9",
"main.dart.js_51.part.js": "f0e9558d5cfc584d0dc4477bbabdf89f",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "0595664018e53c1035d151b6e626dab8",
"main.dart.js_1.part.js": "2e3c8d027fc51ec36a2939e52fe7ec84",
"main.dart.js_160.part.js": "f17792bbb82650aa92529fc65caa548c",
"main.dart.js_120.part.js": "24dbb37f716dad375f49a93d1dc6181a",
"main.dart.js_63.part.js": "9b3470f8b1058a8dbfda244a9c33f536",
"main.dart.js_211.part.js": "5cce470ddc55e940f09d9a487f845f0b",
"main.dart.js_45.part.js": "7926bc1b6d4948f1fb00107f372f2722",
"main.dart.js_12.part.js": "7288cce1f571ac54ae18e48e7e4ca39a",
"main.dart.js_28.part.js": "f0d964313d0430f9bd368584033eb832",
"main.dart.js_135.part.js": "0adf646fe159426fa1bba5da5b6dc709",
"main.dart.js_6.part.js": "5ff0ba9b76f27073f1983b70922bbde6",
"main.dart.js_256.part.js": "71ed37fee1c77a52030a59057a6264db",
"main.dart.js_237.part.js": "5e0421b3a7670eae4a04c661605147a6",
"main.dart.js_138.part.js": "316a9628416d896ebe56a97f16300705",
"main.dart.js_193.part.js": "06f48da96e25cade65113ab5fa518de7",
"main.dart.js_17.part.js": "eac536b91f2bd28e779df602abbba9cc",
"main.dart.js_105.part.js": "69a42b55160a9ecdcf11cfd71ee3e4b5",
"main.dart.js_231.part.js": "b2dff6d6aa5e181bbaceac3d38d5d1b9",
"main.dart.js_43.part.js": "c3891033725f369ce97ce3056d319df3",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "ceb7891c7f8c0a804737569aa98686b6",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "e305030e439042c00a4031d61a643983",
"main.dart.js_15.part.js": "2006f48591ea818e1d774a81f4add76d",
"main.dart.js_151.part.js": "f8092068edbb17fa43d5aa530dc6e127",
"main.dart.js_19.part.js": "e0ac58f015ee5f283dedbc5833037e64",
"main.dart.js_255.part.js": "6e769170d807ecc1caedd00834f7bb13",
"main.dart.js_186.part.js": "3742dd615e64810d22cf87f1b03bdc85",
"main.dart.js_163.part.js": "4a4abdc096f5e15e154ad6f6ac16e0cb",
"main.dart.js_16.part.js": "8df0c28ac1168a2d37f5e35c88605596",
"main.dart.js_250.part.js": "c9f4bcfeddd9dffc8f4d5c40c89a77d5",
"main.dart.js_52.part.js": "ba9c3b4a68a9b1f921dfd794bceb8666",
"main.dart.js_199.part.js": "a60e86b06f64076eb414d3893a6bd61b",
"main.dart.js_253.part.js": "0ca0ed15f9489c4b7f325b23dac8f16f",
"main.dart.js_130.part.js": "b623e4a1bac48eb19ff54ecfc7f5f578",
"main.dart.js_238.part.js": "fc412e51467a24c593a0ff5a74e882c1",
"main.dart.js_152.part.js": "b82da3238812dff8a29e52c06f46d737",
"main.dart.js_197.part.js": "7cdad5b55ee3e82766f4c7ae93f2c50d",
"main.dart.js_227.part.js": "fff5c9ceffdaf2d931988923715f1a72",
"main.dart.js_3.part.js": "c091f1876cfaf4147bd6fbae74113ff3",
"main.dart.js_68.part.js": "8b434f7bdf2a8a171b29e8ca55856408",
"main.dart.js_38.part.js": "8d36c6ecdf2c8a5191776ed8e9bc1482",
"main.dart.js_225.part.js": "d4e67845bfb842858427004f6be534e9",
"main.dart.js_248.part.js": "f5bb842f02c33db0a4d86434c02ebffc",
"main.dart.js_133.part.js": "096739ac6bc07379e4256f2fee108705",
"main.dart.js_21.part.js": "73eed768fbb935414d9d69a3f3506576",
"main.dart.js_188.part.js": "3838856647f2eea3c625be5f1bff8a10",
"main.dart.js_204.part.js": "0fcf74ee278906151ddd59e54ef8ffc5",
"main.dart.js_24.part.js": "d74e6d338685bb04db47cf0865bc88dc",
"main.dart.js_111.part.js": "0756bfa21b733c0aeb0f7f393cdabaf3",
"main.dart.js_85.part.js": "0ede2b874df455fb5590dfddedfc4e3e",
"main.dart.js_243.part.js": "2d1e9fa9638500af66237c0c1c260ff0",
"main.dart.js_212.part.js": "42710b56574ef5a39cf7ce354158ed6b",
"main.dart.js_114.part.js": "8f4abe3016f6bb40a5152eff3d59a547",
"main.dart.js_39.part.js": "d22e59dab54b0f23c5605f3508b4a8ef",
"main.dart.js_185.part.js": "11bd8533f330883e2452a838952e1707",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "0e132b2e6dd743b465b0e1cc6255bf33",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "4cbee4ca4745e3a02487b6c02a3a9467",
"main.dart.js_195.part.js": "50934fa00ffb90f2acf9b51a0cb42e0c",
"main.dart.js_44.part.js": "f0aaf62400e108754ffe17a2f2d2d030",
"main.dart.js_121.part.js": "8d15c640d8bf43392ba3c9bad8d1f272",
"main.dart.js_55.part.js": "f6e55b590d3685bdf5b40cfddde7b0b3",
"main.dart.js_112.part.js": "6f37734a61ea77ca5f5d28fc315689d0",
"main.dart.js_139.part.js": "09a7afde58a4b7e8af785b132ff91af2",
"main.dart.js_143.part.js": "9e0ff23e4b8d2d3f248bad47cd1a72fc",
"main.dart.js_80.part.js": "eef88cf230f42ce0f07f24a875053f1c",
"main.dart.js_252.part.js": "0a46fce77241df97e9a730c9d86f92c8",
"main.dart.js_233.part.js": "e2631a7eea06f18103b6253747e04232",
"main.dart.js_30.part.js": "c3894b7bce648c7d3d5c900982cd53a0",
"main.dart.js_78.part.js": "c8d2e41f1fac71c17d73cbf73f07ce3e",
"main.dart.js_136.part.js": "9b4d6b931064c021636f398c69c7ef9d",
"main.dart.js_168.part.js": "0f8bf042c061954f963fad18baf6872f",
"main.dart.js_159.part.js": "1b2e18d0644d9f2af38f5a7ccb7f8a69",
"main.dart.js_47.part.js": "87ac50738ddf0b18cfa8b179456c3bed",
"main.dart.js_95.part.js": "67b3a9364bea0851a8732d5f95e7a914",
"main.dart.js_29.part.js": "a2d472c504ecd7b06253f75840225a2a",
"main.dart.js_61.part.js": "de83874093e8a98a879ab6cc7cd7f8c9",
"main.dart.js_236.part.js": "90695c1e7b2db4ee8ace3217feaea53b",
"main.dart.js_58.part.js": "18e15d78e1ba8767c4a3d1e8bbb301a0",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "4a117721e23d803412c319a155572985",
"main.dart.js_54.part.js": "ec88866442fb814bb599ac01f10801ae",
"main.dart.js_79.part.js": "ba026cb0a7e1d206fdc1b8e6470f3ddf",
"main.dart.js_109.part.js": "2e7d00427ffd10cd5b79e88e2c90357c",
"main.dart.js_92.part.js": "fd34cec9788bd4126669fe7660dcf085",
"main.dart.js_224.part.js": "11c5ad59b4ef5c3ba6d86308f1a33fa7",
"main.dart.js_93.part.js": "e995aed19b2807143eb84e15314e8b48",
"main.dart.js_223.part.js": "18686b8eae0ec35ae7b4e348f6c9fc17",
"main.dart.js_11.part.js": "1bef4ac74466235f52ef43c9a880e9c5",
"main.dart.js_125.part.js": "0af8b9ab7f870246cb3ac8e1ad3dc889",
"main.dart.js_131.part.js": "ca4b2d702e4eb7817a0d9596066eb6ba",
"main.dart.js_226.part.js": "32c6a087b2bc630f2235b3f6466a0bed",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "bade5bd293acf1888bc6e4b6486d6bc7",
"main.dart.js_178.part.js": "65edb717f18a26f741f17aa7a0e8c439",
"main.dart.js_258.part.js": "8a432badf1c218ef3f39fa280302d263",
"main.dart.js_70.part.js": "873d0e0b06e9215b8de573bb8988576a",
"main.dart.js_187.part.js": "613e3beb8e5b9651742c1ccb098aa258",
"version.json": "931143561f8c3501c71e062ebbae3b6e",
"flutter_bootstrap.js": "dd38ed14e11e9fbb1cc9c2375e361c0d",
"main.dart.js_191.part.js": "986d8791a14ab3472e5719210ab15f18"};
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
