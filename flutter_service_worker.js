'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "10c6aef3855ed89f183022c05ebdc5db",
"main.dart.js_162.part.js": "7807fbc49f8f16a884a10a3b507cde8b",
"main.dart.js_117.part.js": "9d0f401ab5fe4bf3fef8006d5d6335b1",
"main.dart.js_182.part.js": "ee815de1c685b0ee7f0869f0fa888791",
"main.dart.js_75.part.js": "53aa94b9b31d6ef795080376e52e4cb8",
"main.dart.js_244.part.js": "e6516f3fb9d1eccc2e2d75f03b7b39ff",
"main.dart.js_83.part.js": "6a52e27c8637ef5d47c54204aacdc50f",
"main.dart.js_254.part.js": "b0de6a08935424c5eda922bd430792e1",
"main.dart.js_176.part.js": "572516ce0b4db98784f337ae09fdf793",
"main.dart.js_96.part.js": "8edfcac34c914892c8d29463f7122788",
"main.dart.js_245.part.js": "367477938f21871e49a22db0778959de",
"main.dart.js_87.part.js": "9f8cf017948feeb4667a3919e48c7d19",
"main.dart.js_126.part.js": "92d08123f016ef986f12ecf81bc1d20e",
"main.dart.js_129.part.js": "6ceb9554fe69f9f7c3acc7651c19de67",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "6384a71cd9592a98bfe7861279edd4dd",
"main.dart.js_218.part.js": "20833878ccc61a53705788881442744c",
"main.dart.js_172.part.js": "dff4e4929ddca0ca24e64d26308a5783",
"main.dart.js_40.part.js": "d291c4f5875b682b1337ce64c2ff094b",
"main.dart.js_209.part.js": "e9006b9ec8741fd95e34db8cf5f699b8",
"main.dart.js_115.part.js": "b4703ef18e454f1bb2dc3e02b2a2b462",
"main.dart.js_10.part.js": "9e0b458efff1635291836abe58e0622f",
"main.dart.js_84.part.js": "96bb0843f7a41b9d7cbf2c5951447c41",
"main.dart.js_122.part.js": "7068a5ed869340de08718f15bc25e9ee",
"main.dart.js_230.part.js": "e6ac094809fbab47739652058ec20947",
"main.dart.js_213.part.js": "b8ad2bedbdfd0f25bf9bf807d88978ad",
"main.dart.js_41.part.js": "78591fd1dc58399607a373af8fd11df6",
"main.dart.js_89.part.js": "4a660d94c317aaebb7065917dc68695a",
"main.dart.js_71.part.js": "d989fd6203f243be517ad375fbd758eb",
"main.dart.js_146.part.js": "b0ad15c404fde87e7238cb2451c63aed",
"main.dart.js_37.part.js": "e0fbee61e3bd83100913f574eab59533",
"main.dart.js_132.part.js": "4eaf4f7c0c92b4bd35aafde7af58018f",
"main.dart.js_165.part.js": "0bbc213cffa346fdc508f6fec6908d1e",
"main.dart.js_127.part.js": "da7b8eb702c770382851a961e71a8fab",
"main.dart.js_161.part.js": "c573bcb7d9121b5ddfc49defdfc78518",
"main.dart.js_175.part.js": "f5d6f168c4697e4fc66fb40bd561ba2b",
"main.dart.js_239.part.js": "83f8c7e4ab794fbfe2e743cf72297f2b",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "8debfa11cffdf900e531230fedfbffe6",
"main.dart.js_64.part.js": "2d9b258e5c0a5df7363247877ddbd0d0",
"main.dart.js_169.part.js": "e36a5cb3458948c15dfd9ec083b26ade",
"main.dart.js_13.part.js": "aa597fe6ea37e5e0131d16c3b4034000",
"main.dart.js_246.part.js": "7a779a448e8de7ff3b6bc549a4ea5dbc",
"main.dart.js_174.part.js": "c03dea9f4f73b0610ea392e30d5309b3",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "8d25928d26dc5a35a8f9631a5cad16b4",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "fd16b8223f54020038725acb6a842da7",
"main.dart.js_119.part.js": "b0e450e4e306ab300f9d840bf5ae48fb",
"main.dart.js_18.part.js": "48139d97242cdcfeb0c3b49d8a8b26ca",
"main.dart.js_35.part.js": "0d753692c4ac49a1f23e7e9aff41768e",
"main.dart.js_200.part.js": "c0872f347e6c7ddd9cec007f9a0b65c4",
"main.dart.js_101.part.js": "20b25d53d75e1983e39f2256afa2ddf5",
"main.dart.js_77.part.js": "0cbb9c93219a679a1bd592a0fa5f66ca",
"main.dart.js_149.part.js": "be24df52d72a0d981dd900fb687ea3fe",
"main.dart.js_82.part.js": "25485c2c2c0d41afeeed7e015d777030",
"main.dart.js_173.part.js": "1d4780c202a1aff6153fadc4159f8618",
"main.dart.js_106.part.js": "074be2df1eeab1c11b517dc12e036942",
"main.dart.js_62.part.js": "1fcbd5df4ce4493d8d1114eb1fcb6053",
"main.dart.js_259.part.js": "a785f09b15b46d52b70f2dcb370c02e2",
"main.dart.js_207.part.js": "6b55539e47ea34d3dd5f212e65a71b90",
"main.dart.js": "63d4de285e213ccd1be106c4f7f32cfb",
"main.dart.js_222.part.js": "bf4158abb8a468d6b2147815b2dd8158",
"main.dart.js_232.part.js": "8f0b4c466ffe28d3dc3c40037c73eea3",
"main.dart.js_148.part.js": "5d88ec31d4c33b6f426d9943850ea9b7",
"main.dart.js_124.part.js": "bf526de82012ab48e766b9bac42b9f2c",
"main.dart.js_50.part.js": "a5753499f9392fa978e9ca12008c35ae",
"main.dart.js_97.part.js": "8a08a9c74337f8cd8317eef808b38e56",
"main.dart.js_192.part.js": "9f12a4296ada8bda492f0f27251829a0",
"main.dart.js_145.part.js": "2d301714aa806fb9b953276b07a296d5",
"main.dart.js_229.part.js": "268f646b1b3605a9b1fb4b90485f51e3",
"main.dart.js_190.part.js": "679ec8c01253e5f63a26d1c66805ae22",
"main.dart.js_201.part.js": "387d56365fe9b87653bd782f5b05b697",
"main.dart.js_69.part.js": "f476bc702d7dc622f927be8227ddab3e",
"main.dart.js_196.part.js": "4caa267245ffdc18da3e4a97861b7f69",
"main.dart.js_181.part.js": "de6e0bf3508b54a47c96acc056cd253d",
"main.dart.js_108.part.js": "ff3578d4e7ed80e7373d46f70e3f704e",
"main.dart.js_33.part.js": "69b13054e7d62c550f221e9872b3a884",
"main.dart.js_34.part.js": "2c7e01914369a21cf9f0901287354b5a",
"main.dart.js_210.part.js": "ed0a1546bfb82884d81e41dca0b2a0bd",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_88.part.js": "a31c7d71d292183fe90581648416eb7c",
"main.dart.js_202.part.js": "bb5afdb83f5d28e358e9d8ecc41d62e6",
"main.dart.js_183.part.js": "3a9fa4f354f66c5af89413798e96a768",
"main.dart.js_167.part.js": "ce106da53853393e7773ca6655ad78c3",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "e34aafbc1d6fae3fd9f29cb1dc9378d5",
"main.dart.js_247.part.js": "a6349ff11e8dfd99e7a169f44c31ac0d",
"main.dart.js_7.part.js": "446de85f24eead609118837534d2195b",
"main.dart.js_140.part.js": "5f46f19cedac9c97cad869d3b39524e7",
"main.dart.js_228.part.js": "2d5d4edf2e46b8208b368d28f5b7d14a",
"main.dart.js_170.part.js": "ce0cea6b60575aab4700df87a3c419d5",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_27.part.js": "02cdc749938eca37c1e02cf7a394cfbf",
"main.dart.js_156.part.js": "607f81101a20ae02dc792521e5e74ce1",
"main.dart.js_219.part.js": "8a165f341acfe027d186ad1b6bb0b3d5",
"main.dart.js_116.part.js": "6e47600982e94dfd44e521bbfe5f0e4e",
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
"assets/assets/translations/uk.json": "bfcb7a6ccfa1e551397f6a64151d2029",
"assets/assets/translations/pl.json": "9db332fe1a177d9c70e712ca72310dfd",
"assets/assets/translations/sk.json": "8fd1739c4932835dc08c46bd6e173ce2",
"assets/assets/translations/en.json": "a98b264981398795308e804352722981",
"assets/assets/translations/cs.json": "673435f05124fd7c137cd77b67dee348",
"assets/assets/translations/de.json": "11d793b675aecd44573ae9e9979e07fa",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "12b68972fab99dd9040ec7b25e770dda",
"main.dart.js_147.part.js": "7bcad1f0d224abdf1898f908eb37dc1e",
"main.dart.js_220.part.js": "d0563c001ab99bc811019dcbf85ac4b5",
"main.dart.js_25.part.js": "42bc84cb7c7d78eb8cbb7818b8394115",
"main.dart.js_249.part.js": "6c5caf6e8ea762a71391b74b2704b141",
"main.dart.js_123.part.js": "65b1d8fb87c5c15535be8f7a01e431b1",
"main.dart.js_241.part.js": "eb7d3d2427c5de18c8248520e9debe3e",
"main.dart.js_8.part.js": "0a2d2f695f21cff423508a2035d438d5",
"main.dart.js_198.part.js": "293c60797c408503280c9ce399703082",
"main.dart.js_81.part.js": "42390597e45e1e09a01385e6751e1331",
"main.dart.js_205.part.js": "28206f506a842642c97f35a277824456",
"main.dart.js_113.part.js": "0dabae1940171361638d2d8091dc4c06",
"main.dart.js_9.part.js": "4b3b2cd4abc98a08ef52f9705bd985f7",
"main.dart.js_22.part.js": "d655576567f34224b9272aa3881a8a4f",
"main.dart.js_242.part.js": "ab3d919473112c8b367343f666875d0f",
"main.dart.js_86.part.js": "9f10c507f0dde59bc148e87f1eeca85a",
"index.html": "c03b2dbb4c79f4bb7a26b4d0820f2773",
"/": "c03b2dbb4c79f4bb7a26b4d0820f2773",
"main.dart.js_94.part.js": "0bf4c0108cc8761bbb6a7328a14f832d",
"main.dart.js_98.part.js": "e8dd3bf47846cd4f3ff4888776fa47f0",
"main.dart.js_53.part.js": "b2ff2047856d7445fcf90fbcb5287995",
"main.dart.js_74.part.js": "474bbd783dbdfee062065f0329a3adae",
"main.dart.js_235.part.js": "0a13f926bef522ae3376b7f91e4b43ef",
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
"main.dart.js_118.part.js": "a9727abb4dd637c09afb1d50b5521a08",
"main.dart.js_26.part.js": "54e4f45404cb680949bad64a667f46bb",
"main.dart.js_240.part.js": "4b0e40537047a714c80f3c0811b48ad7",
"main.dart.js_20.part.js": "94661ef7b6586353404690ee0aab5652",
"main.dart.js_189.part.js": "4157bd95a9324cbd6a89206282d451e7",
"main.dart.js_214.part.js": "758634681ac6d71a125f8850482ff611",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "95ca17e2ff467efbb8e0fed8c1a8c983",
"main.dart.js_1.part.js": "b5f96605eec19196e8a8efd4290d256d",
"main.dart.js_120.part.js": "ac4159e07ffd07155b125ff0511222ac",
"main.dart.js_63.part.js": "5015d9b23623d470f202124b03458385",
"main.dart.js_211.part.js": "de3ba33657ac996999d0d91188caede8",
"main.dart.js_45.part.js": "59a24908a7458a5a0febfd058dd3072b",
"main.dart.js_12.part.js": "abea28eb9126124e44dd8ed80be0bc52",
"main.dart.js_221.part.js": "007c4982ede74082d9a67132e29dd1c5",
"main.dart.js_137.part.js": "4b875429bb8ef0d46cc5459238daaf59",
"main.dart.js_28.part.js": "1446f41d213fa76a84969219c5f64922",
"main.dart.js_135.part.js": "c6351dcc9188be17b3ef23f2088a929a",
"main.dart.js_6.part.js": "88fe155779640355df047af015dfd10e",
"main.dart.js_256.part.js": "0cf570b385d2c5178e3eb907e71a88d0",
"main.dart.js_193.part.js": "46ade91c2ba931fb380b313b48835f3a",
"main.dart.js_17.part.js": "b3d4ee083e440b83b5b2c25f6bc3304c",
"main.dart.js_105.part.js": "79bd05aa7ef55e57fbeeb5c7787d688a",
"main.dart.js_206.part.js": "9a43b28c67b8ad944962701d8985aac3",
"main.dart.js_231.part.js": "4281d5ba7ffc2243c4877f8c5183f978",
"main.dart.js_43.part.js": "913fc0980a1a00e09d880a516b8ad502",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "aed86d77b9f0e33f109742475de4da39",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "763dc26b74b2145e5703291726404ea0",
"main.dart.js_15.part.js": "7fea2ac48a33710cc568d52ca0cb05df",
"main.dart.js_19.part.js": "3809bd54a2ef3dd1ac5e7764ecced869",
"main.dart.js_255.part.js": "27dccb6186325d16312c801d153a106d",
"main.dart.js_186.part.js": "de30b936955258dcf06565d29c511164",
"main.dart.js_163.part.js": "2db4779e3c7be4872016ad68abae4392",
"main.dart.js_154.part.js": "cb6261716a2c8fa7d6eec40eb2930506",
"main.dart.js_257.part.js": "012b375f0ae6d10cc8d944b19dc493dd",
"main.dart.js_16.part.js": "957bfbcf95550534337238c85c84938a",
"main.dart.js_250.part.js": "e39665073678f9a8804ebe90d8137bd0",
"main.dart.js_52.part.js": "91be884b70b26e5691450069af13f3a7",
"main.dart.js_199.part.js": "43de002df0f1d9845d1956704c04532d",
"main.dart.js_253.part.js": "9e6a52d3c8b950a061ab549dc2277ec2",
"main.dart.js_130.part.js": "92b147f1d3c6993b1e4c0e36eaaeeb75",
"main.dart.js_197.part.js": "aa45e3db2caaefdc39d1e534d2f20712",
"main.dart.js_56.part.js": "7895f1b5dd1f1e6ab6306208ef9a9f29",
"main.dart.js_227.part.js": "7f6911b218f0f0b655d75034454b2c9d",
"main.dart.js_3.part.js": "ea53af9edc016c4c4a177409ca6d8bc8",
"main.dart.js_68.part.js": "d11220c09643ca464e5e728872651f3c",
"main.dart.js_38.part.js": "62dfe2d792d5f5fc89fb7591db3060b5",
"main.dart.js_225.part.js": "27c7b4ab15c11627b1a871fd41cfbbba",
"main.dart.js_248.part.js": "a0bcf2ca84f217bb6f7cd6073d2a38d1",
"main.dart.js_133.part.js": "bbf543b110ae00fd842f726e14795849",
"main.dart.js_21.part.js": "724c8fe8e44c660915ca362f75f8e473",
"main.dart.js_188.part.js": "a0a08cdb9162f3c9189fdf8937b1bf53",
"main.dart.js_204.part.js": "68360e5d10b3035dab9568e7ee90ffbc",
"main.dart.js_24.part.js": "9b2f82af9673b86b03d60a3327b51f68",
"main.dart.js_90.part.js": "072fc86979b53d21506279a12c4ed10e",
"main.dart.js_111.part.js": "84f780d87c1ffb79606c139d616829b8",
"main.dart.js_177.part.js": "b9b62a146da224fabffc8626ff3514ba",
"main.dart.js_85.part.js": "5d01557a273c70630e7418b428ec3bef",
"main.dart.js_243.part.js": "d5336952df95ffd93aa2569371134a7e",
"main.dart.js_212.part.js": "70ea64f675fc0d89ff4b15bc9a0332e3",
"main.dart.js_114.part.js": "611345995933d9dac77c58e7c52b73ee",
"main.dart.js_39.part.js": "83bd5b348521c964affa1fc26ad19e0e",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "b7f21070c8651d0f493833b5d565319e",
"main.dart.js_171.part.js": "dc027a29a25ae36e64ddd7acc566c0ed",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "60eb7f07e7cf5f9154d1428cef0141f7",
"main.dart.js_195.part.js": "afd9a0c7e6fcb01733c88d32f267acc7",
"main.dart.js_44.part.js": "0d267e934e2e30ebb7bf3737959a8ba8",
"main.dart.js_121.part.js": "7ed36acae52a26670d2bc88801020626",
"main.dart.js_55.part.js": "8c8781ddbffb4040787cb75a990c6c9c",
"main.dart.js_112.part.js": "1da73ca6a2bd2af0212cd0c4feea0406",
"main.dart.js_139.part.js": "07d79785085cd019cc658aef253846d2",
"main.dart.js_143.part.js": "17376ef6f34fbb96d2faac5f42b91862",
"main.dart.js_80.part.js": "789f6cc0e93b9361e03e86646970781b",
"main.dart.js_252.part.js": "dbf35169676b820cd865f37329ec3c1a",
"main.dart.js_233.part.js": "329cbcbc41a6dbad4f05d39b3bcfb65a",
"main.dart.js_30.part.js": "012995a199e9b657d0447c5ed1a17b63",
"main.dart.js_78.part.js": "1da7f99ccfe7f5c1dfe861aaf13c8bf4",
"main.dart.js_136.part.js": "7af560ba303fc3a401ec16987c6880c5",
"main.dart.js_168.part.js": "2e0ac2df226517b0db6976f5bc5e08a5",
"main.dart.js_59.part.js": "f12f3143caef1d584e123bf6ac82d4b6",
"main.dart.js_47.part.js": "d9b2cce2a1b7ebe52423da5d98ee3a5c",
"main.dart.js_107.part.js": "37a03255e146e446ca6dfdb27084ca45",
"main.dart.js_29.part.js": "01b98874b0223dffa2a1ef79f234b084",
"main.dart.js_58.part.js": "a918a4599cc7afbf6d8730242e7d4fc2",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "94228312fb75e590b07dbc899cc50069",
"main.dart.js_79.part.js": "53aa41a9845d3eb90999e35b6cc2b5ac",
"main.dart.js_92.part.js": "345a4635a19ee36c36f4314f0bd2dfa1",
"main.dart.js_224.part.js": "53580865221d782349ec98e3b3604292",
"main.dart.js_93.part.js": "038fda75a05f243e3e375f63e32d26fb",
"main.dart.js_11.part.js": "5d39efd1cece7298ad911d4a8a6cd237",
"main.dart.js_125.part.js": "f66106e7ba89b07b19fc8ecdc8b9b3cc",
"main.dart.js_131.part.js": "47f86df9fd732b6c6a97fe4dbdb9c679",
"main.dart.js_226.part.js": "01f82591ab1f092656bf1b7652186689",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "ac305882ac072e63f1d2d8db1a2bbe6d",
"main.dart.js_178.part.js": "13142c4736e48ca594e55e88f9c0fb2c",
"main.dart.js_187.part.js": "6789aed6e6ac6c531cb24502eb6d9c93",
"version.json": "db536d48b355574b4d8ba0d887813924",
"flutter_bootstrap.js": "737fe19b32863fa1620f0a622b81eaf4",
"main.dart.js_191.part.js": "1cd084d75704036957e9a5a43fa44188"};
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
