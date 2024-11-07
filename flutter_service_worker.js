'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "f2cb7ae137b4db2b0ccb5d7bd2731270",
"main.dart.js_117.part.js": "1fad7bf4589ce1c6569b6082ca678249",
"main.dart.js_182.part.js": "2d1cce1574ebb94e1364f81f42f7d0b4",
"main.dart.js_244.part.js": "c1726a9ea01fb568743eb81bc8d47950",
"main.dart.js_83.part.js": "0de495f7efbafb941b282873aacbf161",
"main.dart.js_254.part.js": "4569a68dcf18bde45e112f0a969cc50a",
"main.dart.js_176.part.js": "c54eaa01ee0ba8e7be99645fa1458f2e",
"main.dart.js_96.part.js": "78b01c5d63d044a3869ef87a28ecc8ab",
"main.dart.js_245.part.js": "9d3aa2c3ecd45a04e751e40977037d65",
"main.dart.js_87.part.js": "cc7a12259bf6025da965a17af43f37ac",
"main.dart.js_251.part.js": "6fafbe61f8d6741b0f6ce910db776dd6",
"main.dart.js_126.part.js": "e9da5fe314849e97e0fb014f7a1e506c",
"main.dart.js_129.part.js": "26378d1a9ea44816fe2a867d02a3e56a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "79dab9d1a2c646c0e7676116de6f77e6",
"main.dart.js_172.part.js": "bebe5b03067bfdf93335e580f6b170d5",
"main.dart.js_40.part.js": "207fd78164e046f3eca258b93e1d8dd9",
"main.dart.js_209.part.js": "f2d1f5e90ceb709d220568f3eb0f1edb",
"main.dart.js_115.part.js": "7c8a10d1b41fcb39b7cf11dca7870d57",
"main.dart.js_10.part.js": "2d1cf189c8efc581faf8d652a4d3f8dd",
"main.dart.js_84.part.js": "1d5f9013a2d2cf00f18a524be77e830e",
"main.dart.js_122.part.js": "cd153f7596c7e19cb2e1514d82cc6386",
"main.dart.js_230.part.js": "5500c6d48395bb564424698cefe55370",
"main.dart.js_213.part.js": "2bc143ab9d4e7ba10c11ae196f136659",
"main.dart.js_89.part.js": "a194deb7d3fb2fffc6a6fd0c9c900e7e",
"main.dart.js_146.part.js": "a91a5e83f9288a8d96803e0441a31908",
"main.dart.js_37.part.js": "4cbc5671795822b88d4c2f16df500752",
"main.dart.js_132.part.js": "ab0239ac432de172d94b3115ca392cc0",
"main.dart.js_165.part.js": "3ad44850da4db93378b873201624e9a2",
"main.dart.js_127.part.js": "95f3ae221f0f4f90973f1abda251a5a6",
"main.dart.js_161.part.js": "6e20f0a9c8a8b84c01a0f2211b359679",
"main.dart.js_175.part.js": "2d76780b21ac4eeb53b1d5ffe0cf3f3e",
"main.dart.js_239.part.js": "765f3f118521186bb15a51318dd1aff2",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "73a34224a46a2ac084ae52400da5003e",
"main.dart.js_64.part.js": "bff2efff568808b2095bf36b9f8b1576",
"main.dart.js_169.part.js": "ba24e86fa08bdd246a41ec2d6b79439d",
"main.dart.js_246.part.js": "25a038b367d00f5f4b56ac56308cf93e",
"main.dart.js_174.part.js": "33b158bd455240b946b1635a852528a6",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "4d821656bc04e5207094ec5bc627d62f",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_119.part.js": "dd79ec2179bbb9838c689bca61e6cab3",
"main.dart.js_18.part.js": "1c66564305deb32c666de4aa4379b5f8",
"main.dart.js_200.part.js": "180cc7927200da3b9ab4af05d33d9be6",
"main.dart.js_73.part.js": "c3881e9652e0158b5e6146d8e7306d5e",
"main.dart.js_101.part.js": "80798ee3bb53e5933c3516e787d63b4e",
"main.dart.js_77.part.js": "45cb159fbc64255f6b52d58f34a166d0",
"main.dart.js_149.part.js": "8efa63e7fa4ec1d2f1f8a185b97ab8c3",
"main.dart.js_67.part.js": "edd77f893369832257cc4d4af01d712e",
"main.dart.js_208.part.js": "a38010083f82ae672ae60e9ee69fd86b",
"main.dart.js_82.part.js": "be66e67e9d6c4d93d740a41e467d09b1",
"main.dart.js_173.part.js": "88c1a9a8f740902d31b5b40e6756b13b",
"main.dart.js_106.part.js": "041cff68ec11f4b51e0976edc789f05b",
"main.dart.js_62.part.js": "61300fdb90b58f1f2ffc8709a586a693",
"main.dart.js_207.part.js": "5b0420219a6328af2e9f7fd18c44cc3d",
"main.dart.js": "e4784d39b6554907e29c2b6c51230292",
"main.dart.js_222.part.js": "4205e77798dcd14312bb10aa93711212",
"main.dart.js_232.part.js": "05284d9b95b65af24b0ee9d3aaef9c1f",
"main.dart.js_148.part.js": "ef1d313cbfb188aa87f76d8bbb169d53",
"main.dart.js_124.part.js": "1476c935350479534f542aeb985a0d90",
"main.dart.js_97.part.js": "dda8c2db1cf562f7d9c7760c11f5aadf",
"main.dart.js_192.part.js": "3e9ff6f899b9aca75c6acb3a9aaf0014",
"main.dart.js_91.part.js": "a19d7d87e1f7a4dc17f33315743559d0",
"main.dart.js_145.part.js": "7e81e150ad8ed2ca89f26c832d99976d",
"main.dart.js_229.part.js": "178ab48b06d066a2c345d78ccfeda3be",
"main.dart.js_57.part.js": "29e70d7d618f96e4adc9b8e0b68e74ff",
"main.dart.js_190.part.js": "99c812efc9ecbc73c9975478a4aefce4",
"main.dart.js_104.part.js": "6f0feddb7a87d657064a46e732fffcb8",
"main.dart.js_201.part.js": "8054afd6be953fa40aa0bd7a3bca7594",
"main.dart.js_181.part.js": "5517ab8959fd98502d2dd3bfa0478a4e",
"main.dart.js_33.part.js": "8eef0a94b00e0307109abcce092fbb69",
"main.dart.js_217.part.js": "0ad5afacd753b0cd7583ad35846821cd",
"main.dart.js_34.part.js": "0ddc5205222cf952f6e1436f573254b1",
"main.dart.js_210.part.js": "cb7551e5bd8ac7ea437500399e984479",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "35774495e5c8b3167ecf9b26d9428cb2",
"main.dart.js_88.part.js": "a94e704c640d2ec22de5983fa50c0a60",
"main.dart.js_202.part.js": "02abd886c566a16bc019fbe87bba8f1d",
"main.dart.js_183.part.js": "2863a9571fc12f5bc1d7549b98aa2643",
"main.dart.js_167.part.js": "8713d3682f157c537202f388eabd4cd9",
"main.dart.js_203.part.js": "96c060ab8563d459647baf3c34a4913d",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "5a6e5feb3a80891a30f3e4d60284f647",
"main.dart.js_7.part.js": "8dedda4646fa3b3cb07694fa6d493106",
"main.dart.js_140.part.js": "d3b4195b2ed2d073634d4c841cf45301",
"main.dart.js_228.part.js": "98b186c22b71e15dcb424dada87a00b3",
"main.dart.js_170.part.js": "df0b7b4f6069e09087d0ce4ce894bf9d",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "14856c81ef52f88ba6aea58691ed4579",
"main.dart.js_27.part.js": "98e34459263f523dcd25033bfda8f451",
"main.dart.js_156.part.js": "53bbdfb2a6c09297c2903a78f5805e2f",
"main.dart.js_219.part.js": "6f3647f094f5f60ae0d8a761cc2bc092",
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
"main.dart.js_147.part.js": "0e61ff95c8372dd3ba596adaed58833d",
"main.dart.js_220.part.js": "081a8e52da996cf52e32ddcbae0d5647",
"main.dart.js_25.part.js": "2918af526555a74f725d10f77ef0766d",
"main.dart.js_249.part.js": "e23902fa1662af4b23db4a6e1e684f0e",
"main.dart.js_123.part.js": "a961da7087a6a621d9ef9ad3aab5f119",
"main.dart.js_8.part.js": "f128985c4f620f3ef38042fdf6156982",
"main.dart.js_198.part.js": "8929d1872c59aaecc91f8a0d8481578d",
"main.dart.js_81.part.js": "088cf6332b8b37de2a69228427be3904",
"main.dart.js_113.part.js": "98437331eea5865d5be829e87dc8ec93",
"main.dart.js_9.part.js": "24d6e605902e70796252a06ec1b1587f",
"main.dart.js_242.part.js": "8d45ccc81f4809bc1b9f0195855ada91",
"main.dart.js_86.part.js": "0fd67837c6e86bf83164666bb098da24",
"main.dart.js_23.part.js": "ee4d2b736d0e8c617d2f633089bb4db8",
"index.html": "2359b65e8c129346fee356645aa1584d",
"/": "2359b65e8c129346fee356645aa1584d",
"main.dart.js_53.part.js": "a3c8ec52b4116c5e69f23a4a6bcc485b",
"main.dart.js_74.part.js": "bc7896daad90ddabb54c2719fabe5083",
"main.dart.js_235.part.js": "7a2d64c218dd27d691ef17da15a336ae",
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
"main.dart.js_118.part.js": "bbe44ebf68df360e2068cd5937c97ffe",
"main.dart.js_26.part.js": "580fc998081dbbb4a88502e9dc1f1fed",
"main.dart.js_20.part.js": "ded46bc9aac786d7b75dd43280c46da9",
"main.dart.js_189.part.js": "8bbff8c265f744edd7a4fd0e85bffc3f",
"main.dart.js_214.part.js": "788089de6d396b287e29a256e6b3bed1",
"main.dart.js_51.part.js": "f47a482d87fb588db6ca9df05ddba141",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "14af0793f162b18cce281d6e946a096e",
"main.dart.js_1.part.js": "a5b8b4bed461cffe564f99b0e0ca49cd",
"main.dart.js_120.part.js": "5441ee910962e67995050b8935046216",
"main.dart.js_63.part.js": "2df3c61c39a0893ea5516984b4116669",
"main.dart.js_211.part.js": "70ef2aa0c0923c6c25721f5887afbb3d",
"main.dart.js_12.part.js": "fc5c947ce6f7f7caf7ac74338fc3c431",
"main.dart.js_221.part.js": "9b7091d2d2b18990402602b30d0c7c08",
"main.dart.js_137.part.js": "781aeed59417f6af1312e92943c6779d",
"main.dart.js_28.part.js": "8dcf62214d45436656ea40bbda1e301c",
"main.dart.js_135.part.js": "c45488cf32c87cae4fdfb15f67304c6a",
"main.dart.js_6.part.js": "e288a5460f7a6c9946131338c3157f2a",
"main.dart.js_256.part.js": "11e844712fe92159d49193ea58b18860",
"main.dart.js_193.part.js": "ef47a504e99f9c045d035140218804e9",
"main.dart.js_17.part.js": "74f9b261101d0a9c958fc6ba003eac73",
"main.dart.js_105.part.js": "ca41fd77c742808faa8ca1aa6921bba9",
"main.dart.js_231.part.js": "0b5522a3b8fbb36ced1e9b8069a8136d",
"main.dart.js_43.part.js": "1b793269b3e0cef3dd890730d328f905",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "a15f4fff21af57030833e399efcf8667",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "477c6ea88b82fcaf6a3f22d26cc1f926",
"main.dart.js_15.part.js": "e5eadade74fef3269de5ce58c29fc799",
"main.dart.js_19.part.js": "dfff93e8b31ca886a24805db4ce5e573",
"main.dart.js_255.part.js": "338adf0cb3c18bd952bfe3c19679d5b9",
"main.dart.js_186.part.js": "4848aeda4caa416da78e9101229a7336",
"main.dart.js_163.part.js": "01637f5bed008e4e49e42e113d853548",
"main.dart.js_154.part.js": "f318791544235377fac7689ac5cb5003",
"main.dart.js_42.part.js": "1148d48e14f7c1472c66d36477bcc102",
"main.dart.js_16.part.js": "e86c31a26773b38e29726bfa1e385fe3",
"main.dart.js_250.part.js": "d5cfa79fead2621b076982713eb7325a",
"main.dart.js_52.part.js": "8b9ee8ab96fceac584fbac05e466c11e",
"main.dart.js_36.part.js": "f0e92f63cca982e38f10327333a04720",
"main.dart.js_199.part.js": "652b5576a945a0de2bb25e5a0bacd5c3",
"main.dart.js_253.part.js": "e0bcaee0b5aa9874125858e2ee9b9e08",
"main.dart.js_130.part.js": "90ffc0e0a442cf79f8c533d746a7290e",
"main.dart.js_238.part.js": "c8ae214de5204c98f66c687402990d97",
"main.dart.js_32.part.js": "78f3e413af3c3244c1fc38d8db9a4e18",
"main.dart.js_197.part.js": "b70bf9fd6ac24aed61ec6415ceac4bed",
"main.dart.js_3.part.js": "1607c6103d3717ba95968f794b34478f",
"main.dart.js_68.part.js": "43d9cbd54a5155800860d5bc79fefde9",
"main.dart.js_38.part.js": "50d2ceb88278ad54f4be1f47305d1727",
"main.dart.js_225.part.js": "95b4fb0553a88d7fa737b048dc4958e0",
"main.dart.js_248.part.js": "8491988fa11dcadfe59246f164f5c7c8",
"main.dart.js_133.part.js": "a2d4f59b147b236dad1d5dfe54009f06",
"main.dart.js_21.part.js": "114cce8530b3f0b44f339c4c0852ac44",
"main.dart.js_24.part.js": "d564a27f62e77b5014ddf5f2d04b74e2",
"main.dart.js_111.part.js": "12ab00e8c153e49fe9913ac6ecf0c214",
"main.dart.js_177.part.js": "e329ef06e165fd56ee96dcb6860ee238",
"main.dart.js_85.part.js": "89b6718690fefd782932d8ccf527ddfc",
"main.dart.js_243.part.js": "0cb227c92a268570c838ba6793f0de6a",
"main.dart.js_212.part.js": "cc1b7e407f28cb56d4e8148fa130d9ec",
"main.dart.js_114.part.js": "a01ea618a5dd43d070a9a90c00be1fb5",
"main.dart.js_39.part.js": "153cddf9bd4b49b06e1ab83cdcf62c1e",
"main.dart.js_49.part.js": "7bfc34db067f026ce554c4ebd95abc77",
"main.dart.js_185.part.js": "6593d83d485ff3690a3a94f1daac3fb5",
"main.dart.js_46.part.js": "5bde89ceca7d069bffd886bd974e9f1b",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "a3aa215706e3472997bc653a41a9e6e9",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "70da085e3b5047d142ca35df61ec1f76",
"main.dart.js_134.part.js": "39f641cc20b14d95244718f7bcb67ca6",
"main.dart.js_195.part.js": "c85143f4e78a5f9b91a0435b5f12cff8",
"main.dart.js_121.part.js": "3928fc68030c728964d9e0626aebd7d3",
"main.dart.js_55.part.js": "45b5cb7c2e9177f4538940d7c20772e3",
"main.dart.js_215.part.js": "18e922d17962e87138f0fb7cfd477af0",
"main.dart.js_112.part.js": "f7f34549ffd9e1f127da81be625195a9",
"main.dart.js_139.part.js": "1673fe1078c8750abc44e1792e32167d",
"main.dart.js_143.part.js": "f0542b1323b00f86b7f997322dabe8e7",
"main.dart.js_80.part.js": "5e8d5d38a21c664715b0f1887b6821db",
"main.dart.js_233.part.js": "3486c27fbf4350cc7acea159330f358b",
"main.dart.js_30.part.js": "16362586c79d1dfeb371aae063038603",
"main.dart.js_78.part.js": "959a5f1f3effaf0ebcd5f9affce28715",
"main.dart.js_136.part.js": "f1cd54e929250c6e7aee68f53229ec47",
"main.dart.js_168.part.js": "2ca2b6e0070b69b757e65c82376dea78",
"main.dart.js_95.part.js": "643401263e1621109e9bf8ce07935392",
"main.dart.js_107.part.js": "1955f569c92bcb1dd1afb7254a08f393",
"main.dart.js_29.part.js": "db53009d01158eb7cf74b9d31fc4883c",
"main.dart.js_61.part.js": "c0656ea410798ce6b6a9778368b9c7dc",
"main.dart.js_236.part.js": "2ecffbd42d985f9da35776af62f03841",
"main.dart.js_58.part.js": "52358db3ab8c2c28d513e8fed9e9c9a6",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "32066e056230f61afe9cbca97cc0bd24",
"main.dart.js_54.part.js": "dcfb0f4509fd827f60622f7082d91a5e",
"main.dart.js_79.part.js": "4d76d21c6182d19d3974aef4ff115f6f",
"main.dart.js_92.part.js": "2679cf83076271bdc1cf966a3d9e2f03",
"main.dart.js_93.part.js": "fe4d4f74103c0157a6652ee046fc9f7d",
"main.dart.js_223.part.js": "a45bc94d08300c450b470d34c10fdf34",
"main.dart.js_11.part.js": "64df7a833056923ab4cb3d28109872fe",
"main.dart.js_125.part.js": "1373636856881944188d39c3ab1e451d",
"main.dart.js_131.part.js": "ae0e69fcc886ff27c4cbf23dffdd3db6",
"main.dart.js_226.part.js": "6cd7cf84639523d4762a3081403755b9",
"main.dart.js_14.part.js": "694bc4db07c9b04084f29f58181604a4",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "84c64e262a9c9e274740399447606bad",
"main.dart.js_100.part.js": "168f86a6b200d9c0e6fa06666b9061db",
"main.dart.js_258.part.js": "32cf6c3f7b8d7d85dc7803cbdc06feb6",
"main.dart.js_70.part.js": "3d82d4f4a8a095061a1e790bbc5d68a2",
"version.json": "8eccc37b0c2b359fa2cd6be183ebf681",
"flutter_bootstrap.js": "4213db50330bb12ae30b421a3269b666",
"main.dart.js_191.part.js": "58190f239084044d654aefde2fe55e6e"};
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
