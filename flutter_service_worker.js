'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "10c6aef3855ed89f183022c05ebdc5db",
"main.dart.js_162.part.js": "d7ac337e2ad4dd3080ece4223f9c498e",
"main.dart.js_117.part.js": "e80e3c35474f423918c5e0dd89354d7e",
"main.dart.js_182.part.js": "ee815de1c685b0ee7f0869f0fa888791",
"main.dart.js_75.part.js": "5c2ecd6432de45479b4fb5734604398c",
"main.dart.js_244.part.js": "e6516f3fb9d1eccc2e2d75f03b7b39ff",
"main.dart.js_83.part.js": "db4a9cf4b17a23c0cdab596b1a458673",
"main.dart.js_254.part.js": "38fcf5e32ea10f061e2a34455f21aec5",
"main.dart.js_176.part.js": "e079b5d78ec275ef56f2cdfd366af5c1",
"main.dart.js_96.part.js": "b5a8ebc9b364f871b7e501fcf367feea",
"main.dart.js_245.part.js": "8f67f66754dfbe46ce7413778656f941",
"main.dart.js_87.part.js": "9f8cf017948feeb4667a3919e48c7d19",
"main.dart.js_126.part.js": "d65796dfecf829d9d09b1d1454c15411",
"main.dart.js_129.part.js": "a638017e232a0c325d93f541850109a3",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "073a24e930d06dde6a24c85cf31654df",
"main.dart.js_218.part.js": "20833878ccc61a53705788881442744c",
"main.dart.js_172.part.js": "dff4e4929ddca0ca24e64d26308a5783",
"main.dart.js_40.part.js": "d291c4f5875b682b1337ce64c2ff094b",
"main.dart.js_209.part.js": "d18bfbde1a4cc44927c37e2090fd5036",
"main.dart.js_115.part.js": "bfc5b1d722adb6011ce53503bee5656b",
"main.dart.js_10.part.js": "824bd3703283261bb3d05b80d8bbc81c",
"main.dart.js_84.part.js": "f537bee3e163af0f2fcdb7b142837c09",
"main.dart.js_122.part.js": "7068a5ed869340de08718f15bc25e9ee",
"main.dart.js_230.part.js": "8428aff32640f74279793e4ef2d2c885",
"main.dart.js_213.part.js": "b8ad2bedbdfd0f25bf9bf807d88978ad",
"main.dart.js_41.part.js": "78591fd1dc58399607a373af8fd11df6",
"main.dart.js_89.part.js": "8da5b724f3f2c89091ddb92a33b5b486",
"main.dart.js_71.part.js": "d989fd6203f243be517ad375fbd758eb",
"main.dart.js_146.part.js": "b0ad15c404fde87e7238cb2451c63aed",
"main.dart.js_37.part.js": "e0fbee61e3bd83100913f574eab59533",
"main.dart.js_132.part.js": "4eaf4f7c0c92b4bd35aafde7af58018f",
"main.dart.js_165.part.js": "0bbc213cffa346fdc508f6fec6908d1e",
"main.dart.js_127.part.js": "ab8b2288ed04fc1bb54b249c37ce2f78",
"main.dart.js_161.part.js": "5f59649df35cf63a23d154f1eeb106bb",
"main.dart.js_175.part.js": "1e29aaa7396b2b2e44386314b97dc92f",
"main.dart.js_239.part.js": "3cbc2bdecb652957c9491cf36272aabb",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "4cd87494b9c1713bfd7da8fb86ab3770",
"main.dart.js_64.part.js": "ea170816ae8272135f0790b6cc8e6a9a",
"main.dart.js_169.part.js": "4eb548870a31d4ad8103e5682db56aee",
"main.dart.js_13.part.js": "9e8a878a8d085f9ba2da45af57c32fcb",
"main.dart.js_246.part.js": "527c817121f7b0d46d279e4de03dfb07",
"main.dart.js_174.part.js": "e051237d38ecdcb7f16f54812847a4a0",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "85a6cdf6a87dc211139a0b724cc8f366",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "fd16b8223f54020038725acb6a842da7",
"main.dart.js_119.part.js": "9978913893fffa3d7dc90cfcec92c884",
"main.dart.js_18.part.js": "109624cfefac3fc9ef82e6561dfb8130",
"main.dart.js_35.part.js": "0d753692c4ac49a1f23e7e9aff41768e",
"main.dart.js_200.part.js": "f4d16ffe9c06155d5274d9db2afb60a2",
"main.dart.js_101.part.js": "20b25d53d75e1983e39f2256afa2ddf5",
"main.dart.js_77.part.js": "0cbb9c93219a679a1bd592a0fa5f66ca",
"main.dart.js_149.part.js": "be24df52d72a0d981dd900fb687ea3fe",
"main.dart.js_82.part.js": "0a0f2b22701a25e903de2d22298d1f62",
"main.dart.js_173.part.js": "1d4780c202a1aff6153fadc4159f8618",
"main.dart.js_106.part.js": "c57ae121e9a8ce4373b02dd833a01075",
"main.dart.js_62.part.js": "1fcbd5df4ce4493d8d1114eb1fcb6053",
"main.dart.js_259.part.js": "6ca073aac6c606178344d5d10abd6c73",
"main.dart.js_207.part.js": "1efda65b1257e881088a89d4c2aa61bb",
"main.dart.js": "dcdb5581ca646244352742765a6a7b75",
"main.dart.js_222.part.js": "5df66d91476a7854c8779437779da560",
"main.dart.js_232.part.js": "bf0ea31309d05c3842345e7a1db1e5db",
"main.dart.js_148.part.js": "9adde09c0f859986400dc333b1404f3d",
"main.dart.js_124.part.js": "bf526de82012ab48e766b9bac42b9f2c",
"main.dart.js_50.part.js": "a5753499f9392fa978e9ca12008c35ae",
"main.dart.js_97.part.js": "2bb968f16b4620c4bb13008e7b6b5afd",
"main.dart.js_192.part.js": "3ff9f4707eb374c2d5ab3dd7e65035de",
"main.dart.js_145.part.js": "b7dc2f45cd743a509bc8e017be06e986",
"main.dart.js_229.part.js": "030180a3c36a0af0fcf75b59442f0f64",
"main.dart.js_190.part.js": "30f06b0ddf2086cedd523987fac9fdf1",
"main.dart.js_201.part.js": "0bcfe4ebd4799b97d3b572b19a144aa9",
"main.dart.js_69.part.js": "9dab2e5593e5f16b6f22b1b728760e21",
"main.dart.js_196.part.js": "4861090f388baf61b09dbc97824af61b",
"main.dart.js_181.part.js": "35ba5c8d4209d8d22c1ba92cddcfad9a",
"main.dart.js_108.part.js": "b9da46a4aa0c1b947e57a7c109aa7e2e",
"main.dart.js_33.part.js": "69b13054e7d62c550f221e9872b3a884",
"main.dart.js_34.part.js": "25673ac345058e20e4233294fe00c8df",
"main.dart.js_210.part.js": "00fd0e2b0284a160a9decc6b905a4f15",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_88.part.js": "e16042a082fad31b04aff8b33f588347",
"main.dart.js_202.part.js": "bb5afdb83f5d28e358e9d8ecc41d62e6",
"main.dart.js_183.part.js": "030c9969077bd28c0a3528ab9f9b8ca8",
"main.dart.js_167.part.js": "04b5ea5dc13e5be1526645b9fc130874",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "632783b572eb29582cd06eb27b8aad8c",
"main.dart.js_247.part.js": "80f2b44ed12a4333b7267db0d4c98e79",
"main.dart.js_7.part.js": "499420a8c42a82bf1917971ab33f6e42",
"main.dart.js_140.part.js": "f6f6eda7f77685dab29e8f60aa3c31ca",
"main.dart.js_228.part.js": "2d5d4edf2e46b8208b368d28f5b7d14a",
"main.dart.js_170.part.js": "ce0cea6b60575aab4700df87a3c419d5",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_27.part.js": "3023744ee2d65309e6202528d176b818",
"main.dart.js_156.part.js": "607f81101a20ae02dc792521e5e74ce1",
"main.dart.js_219.part.js": "3d4cc9a726d308dbfc0b1f8462f6015f",
"main.dart.js_116.part.js": "1e4e89c6eae2e061187bfdf9caa04bd8",
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
"assets/assets/translations/uk.json": "95138cff23d3c797ef5f61f9c6ba89d8",
"assets/assets/translations/pl.json": "c7eb7e1e5e3c27c669d578873bfa225f",
"assets/assets/translations/sk.json": "82998b4415a26afe259b1205f0577b07",
"assets/assets/translations/en.json": "e59a5f4630b49471f95e67ed2db33805",
"assets/assets/translations/cs.json": "a3a16dda5c659a1d657d5d2b2f4a89a2",
"assets/assets/translations/de.json": "a913480350c9eba8b4895297094136f1",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "12b68972fab99dd9040ec7b25e770dda",
"main.dart.js_147.part.js": "940d8e310026b18cc23905390c7377b7",
"main.dart.js_220.part.js": "2d7fd6134fe775807c785f41327de2f5",
"main.dart.js_25.part.js": "8879e0b778e243ca06e83cddbe1eef4d",
"main.dart.js_249.part.js": "165b113792a984a41a3f8e8f010d7d77",
"main.dart.js_123.part.js": "65b1d8fb87c5c15535be8f7a01e431b1",
"main.dart.js_241.part.js": "bba8dd0d153a38027e131469ce0e640d",
"main.dart.js_8.part.js": "a472cba2beb203f086e4875c889fb993",
"main.dart.js_198.part.js": "70df1bd7f7e4a6501446f5206fd46636",
"main.dart.js_81.part.js": "146282e1412e7e542bf9c2798366685b",
"main.dart.js_205.part.js": "85b0fe177f724d953d1a5e57c0a34fc3",
"main.dart.js_113.part.js": "0dabae1940171361638d2d8091dc4c06",
"main.dart.js_9.part.js": "4b3b2cd4abc98a08ef52f9705bd985f7",
"main.dart.js_22.part.js": "dbeee7b1291e6b98e433891d9abcf149",
"main.dart.js_242.part.js": "ad5964959740291d887b352e89e852b7",
"main.dart.js_86.part.js": "7da510856bae2ce9522519633988a81c",
"index.html": "a82e5c8471b7ef2c0bd09bb7375b571c",
"/": "a82e5c8471b7ef2c0bd09bb7375b571c",
"main.dart.js_94.part.js": "f3d28064b2d60e2204e3dcf2345495e5",
"main.dart.js_98.part.js": "e8dd3bf47846cd4f3ff4888776fa47f0",
"main.dart.js_53.part.js": "b2ff2047856d7445fcf90fbcb5287995",
"main.dart.js_74.part.js": "474bbd783dbdfee062065f0329a3adae",
"main.dart.js_235.part.js": "c6c7a5414741ad63fae4b8722ad792df",
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
"main.dart.js_26.part.js": "afc7abbdb6ca3eba0a263f8866c537fe",
"main.dart.js_240.part.js": "7899041aebc5a48e31412c9035e3915b",
"main.dart.js_20.part.js": "5ecded1badf3fd432458026c92cd5724",
"main.dart.js_189.part.js": "e72b9a96315e2de0af51ff39c7b24c07",
"main.dart.js_214.part.js": "d28a549f081935193ace2ada328a26cc",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "7224d5b83b16b6b43ed97ca0055c8596",
"main.dart.js_1.part.js": "f046c4654f8c270fffc756fae46e78e8",
"main.dart.js_120.part.js": "70e321a20d156d5c97b8a12554b914e5",
"main.dart.js_63.part.js": "5015d9b23623d470f202124b03458385",
"main.dart.js_211.part.js": "54a14151286b1f1b1a278953513b5fff",
"main.dart.js_45.part.js": "59a24908a7458a5a0febfd058dd3072b",
"main.dart.js_12.part.js": "abea28eb9126124e44dd8ed80be0bc52",
"main.dart.js_221.part.js": "1ba6210423b660d32b5d0a47806cf7a9",
"main.dart.js_137.part.js": "501524104a47e295b3097e118f744a3b",
"main.dart.js_28.part.js": "6d5ac30e42c00ae7310c93201412e27c",
"main.dart.js_135.part.js": "c6351dcc9188be17b3ef23f2088a929a",
"main.dart.js_6.part.js": "79b965d8f38e7eeeaaf2026e72b4c19a",
"main.dart.js_256.part.js": "91a51980d671cef5022b9fa43bf14f79",
"main.dart.js_193.part.js": "46ade91c2ba931fb380b313b48835f3a",
"main.dart.js_17.part.js": "baa2c8007a67e98809ed1bd7443cadf2",
"main.dart.js_105.part.js": "79bd05aa7ef55e57fbeeb5c7787d688a",
"main.dart.js_206.part.js": "3c8afe79a40037ae3b67baf4b80b1490",
"main.dart.js_231.part.js": "d0d130b32a6a9c0ddf7ee1bdb49a4ddd",
"main.dart.js_43.part.js": "426a8136b57d0961108fc01b7b5e2f93",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "7f52324970824bb88c3bd566a7fdf28d",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "0ae427f6167ae4bdc53227854ef6e972",
"main.dart.js_15.part.js": "accb72a81ac69fc1e9a7c1824ff4e673",
"main.dart.js_19.part.js": "24c78ef44323497b5200def10f73c445",
"main.dart.js_255.part.js": "d282040510c4a25f084f4beba8527a1f",
"main.dart.js_186.part.js": "de30b936955258dcf06565d29c511164",
"main.dart.js_163.part.js": "2db4779e3c7be4872016ad68abae4392",
"main.dart.js_154.part.js": "cb6261716a2c8fa7d6eec40eb2930506",
"main.dart.js_257.part.js": "a424c4dd4bf95745efdf5ce7e895ff65",
"main.dart.js_16.part.js": "be4b5d701d4e8fdd36ea07d2e57476ee",
"main.dart.js_250.part.js": "a8aa8ccc180ed88d18e59830e23d1526",
"main.dart.js_52.part.js": "02adc766e6b30ef1ae986c5ae6a4dc61",
"main.dart.js_199.part.js": "05ab614a5c336d051c1e95e86a1fe1a6",
"main.dart.js_253.part.js": "487d6f117ad54c7af53582c394bba9bc",
"main.dart.js_130.part.js": "6f2326f0f85efd9d90f6102a656b5c79",
"main.dart.js_197.part.js": "516c463a7813ef8ca575be8a60c91ce6",
"main.dart.js_56.part.js": "7895f1b5dd1f1e6ab6306208ef9a9f29",
"main.dart.js_227.part.js": "014d2a1988cdcca337b50a223edc72d5",
"main.dart.js_3.part.js": "6ad00b46762e0b9eed576a30c2d31b1d",
"main.dart.js_68.part.js": "db50a4aef74e4f36ad5896959bc6913d",
"main.dart.js_38.part.js": "62dfe2d792d5f5fc89fb7591db3060b5",
"main.dart.js_225.part.js": "39bc5897648d52b4c28c270e3f1de7c4",
"main.dart.js_248.part.js": "a0bcf2ca84f217bb6f7cd6073d2a38d1",
"main.dart.js_133.part.js": "a318032da43f28c0dbcd878a3e2fdfcd",
"main.dart.js_21.part.js": "0efd522439497dce085aba6685069f84",
"main.dart.js_188.part.js": "a0a08cdb9162f3c9189fdf8937b1bf53",
"main.dart.js_204.part.js": "da303a157f68788f20560a0f408bfadf",
"main.dart.js_24.part.js": "8b100a42380336253c7a68c5c81d373b",
"main.dart.js_90.part.js": "072fc86979b53d21506279a12c4ed10e",
"main.dart.js_111.part.js": "84f780d87c1ffb79606c139d616829b8",
"main.dart.js_177.part.js": "3330542d0f912f7f90b1ece1e7d4dab2",
"main.dart.js_85.part.js": "dd8a5a806946d788a39da84f73012547",
"main.dart.js_243.part.js": "fe6f7c3ddb5e4a85fb672e68c9be3deb",
"main.dart.js_212.part.js": "70ea64f675fc0d89ff4b15bc9a0332e3",
"main.dart.js_114.part.js": "99d2256cebabcd708f79d36d9f37b33b",
"main.dart.js_39.part.js": "83bd5b348521c964affa1fc26ad19e0e",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "a031d8b3052ca0a8f07ff258cf7288a8",
"main.dart.js_171.part.js": "65cc6d34ed724dc99d4b4b91ae770076",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "d8667f2bef4b1da3b3ccc9f6ba3c782c",
"main.dart.js_195.part.js": "afd9a0c7e6fcb01733c88d32f267acc7",
"main.dart.js_44.part.js": "1898f1a90c9afce9edf72f02d51abab1",
"main.dart.js_121.part.js": "7ed36acae52a26670d2bc88801020626",
"main.dart.js_55.part.js": "8c8781ddbffb4040787cb75a990c6c9c",
"main.dart.js_112.part.js": "1da73ca6a2bd2af0212cd0c4feea0406",
"main.dart.js_139.part.js": "6c2b4aef4737fd4b575d070617df9ecc",
"main.dart.js_143.part.js": "6f2fe69a45596e76800c2527c093a416",
"main.dart.js_80.part.js": "dcad0742730d57bb6ad646209004a1e6",
"main.dart.js_252.part.js": "fc3d0e6c88992cac3d7ae355928e5493",
"main.dart.js_233.part.js": "be9459208b60ba81dbf3db9c2c733a46",
"main.dart.js_30.part.js": "2f58d972a73cbf39a7ff59759ac0496e",
"main.dart.js_78.part.js": "1da7f99ccfe7f5c1dfe861aaf13c8bf4",
"main.dart.js_136.part.js": "8e61797e41185a8898c0cd99382d7e84",
"main.dart.js_168.part.js": "2e0ac2df226517b0db6976f5bc5e08a5",
"main.dart.js_59.part.js": "f12f3143caef1d584e123bf6ac82d4b6",
"main.dart.js_47.part.js": "5df17fdb2fbdd467287b291935148dac",
"main.dart.js_107.part.js": "a4be101a7e676e6120c243865cb0a969",
"main.dart.js_29.part.js": "01b98874b0223dffa2a1ef79f234b084",
"main.dart.js_58.part.js": "a918a4599cc7afbf6d8730242e7d4fc2",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "94228312fb75e590b07dbc899cc50069",
"main.dart.js_79.part.js": "53aa41a9845d3eb90999e35b6cc2b5ac",
"main.dart.js_92.part.js": "7b3fa7bd19c0c7a9ecd83627e3192fd3",
"main.dart.js_224.part.js": "3d2c4ee95ac9fc09472107b58e59cc3a",
"main.dart.js_93.part.js": "2abe20bae042439a07c35349bdb01ff2",
"main.dart.js_11.part.js": "b084c1d3ee4d4f5a85ea7a4c454b24fd",
"main.dart.js_125.part.js": "f66106e7ba89b07b19fc8ecdc8b9b3cc",
"main.dart.js_131.part.js": "40dc31fca09e680a7c8cfcdf17555126",
"main.dart.js_226.part.js": "ff0d55c3d689e408726b4558236dafcc",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "f350c0d8253b9a8e1ce280a017986135",
"main.dart.js_178.part.js": "386d83fcf9b02c4a07ec18228cdaff0e",
"main.dart.js_187.part.js": "254becb4aec667567b4535bf91c592c1",
"version.json": "8f98e0a7dace1bc97834492a43964956",
"flutter_bootstrap.js": "abcbc9ab3b5d0b2e3968cc72ab3c5534",
"main.dart.js_191.part.js": "aa1969734502ea823ae8ccccf3665681"};
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
