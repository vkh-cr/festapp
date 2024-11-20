'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "a4a59743f4c9c00537f4849cd1629ebe",
"main.dart.js_75.part.js": "4c9d19f453d8d24caad931e4f1997e01",
"main.dart.js_289.part.js": "41c9c192bda396594e4523965b336e04",
"main.dart.js_83.part.js": "dfe8bd35f6e74d6334011cbecdc24463",
"main.dart.js_254.part.js": "bb9ae2d8411d7318ac45942c8585e348",
"main.dart.js_176.part.js": "bc97651e94ec6db3b348d6286ad5fb6e",
"main.dart.js_96.part.js": "8d32d21bd5cbf8994e92fbde0e5c5d24",
"main.dart.js_245.part.js": "987ff40ed4d104fccbfec6c57aaf65d6",
"main.dart.js_87.part.js": "e2369ae28f8a772b5e14a590a0c481e3",
"main.dart.js_251.part.js": "2c4c75062e75ea5337f20e77be6b1f8a",
"main.dart.js_126.part.js": "56db1962a0458c38c3132411689afa11",
"main.dart.js_129.part.js": "24a58bfe2b766c67912fedf85b5042cc",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "5bb7208273755c9b21c90a6e3785f911",
"main.dart.js_172.part.js": "497c75c10e7698102d228bbf1c814d74",
"main.dart.js_142.part.js": "f0306a76d040af64f0fa70d23f9bc406",
"main.dart.js_209.part.js": "42debebeaa8f749c90c106be146406b2",
"main.dart.js_10.part.js": "18f838d2212fa7f9a32981a07da17b6a",
"main.dart.js_66.part.js": "c7b70078f56391b1fb5d99ff1fc9413e",
"main.dart.js_84.part.js": "6182b844cd6932a1d53017673c032eec",
"main.dart.js_122.part.js": "28754ad51208020298cfe147dbe05f1c",
"main.dart.js_230.part.js": "6dd7bc7f9afd5dbadecb2277e067bedd",
"main.dart.js_213.part.js": "065354d31a6ed2e096def92db004fa1a",
"main.dart.js_153.part.js": "25240b5c6840e0f06c72eca706e45fb0",
"main.dart.js_89.part.js": "0d89e5827b34a449c2d8bb11a2cf3dc3",
"main.dart.js_146.part.js": "cce23f63abe6ef0cb230d60db225e74d",
"main.dart.js_37.part.js": "3c3505f5f7d8189af179a1a8d66dd83e",
"main.dart.js_287.part.js": "2cd6511a087d8af54ac38f2fe525c131",
"main.dart.js_283.part.js": "033bf0fdc24f5c8e7efd8792f1fada96",
"main.dart.js_132.part.js": "663eb9145bf39cdde6732bcf88177913",
"main.dart.js_165.part.js": "31a3db083cb8c3637c30f2adf84e9cc7",
"main.dart.js_127.part.js": "555637805e169549bdd3c3a655360546",
"main.dart.js_175.part.js": "c34cfacc470e7ccd4525ca1e91282914",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_216.part.js": "43411bc9ca67e93a6189c3a31cc4d0b1",
"main.dart.js_64.part.js": "22e4854c021678b968dd758000b48663",
"main.dart.js_13.part.js": "1e7220c7d7ed4de1c9d76f7f8b342cfe",
"main.dart.js_246.part.js": "4f91ae1b0624baf7e1281e914eef5807",
"main.dart.js_174.part.js": "a0e99082e11f19cf40a4a76056bf26cc",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "998aa066c8473d9e8318c6a34290bc51",
"main.dart.js_144.part.js": "7413bc3a0fa5d45ffda0e079f19a702e",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "7eaeb7d94e6391627a6c22b93e35a207",
"main.dart.js_265.part.js": "1cb3259dd2aac05f6f1d5371edf08bad",
"main.dart.js_31.part.js": "bf425bf44a7fd562be93d0f8b2619245",
"main.dart.js_119.part.js": "c2d2317dc32e97a3fa80304e9031476c",
"main.dart.js_294.part.js": "14c8791ba3ed8fcb86e722a33db79189",
"main.dart.js_18.part.js": "973e8b87e64121327d1f16b544212efb",
"main.dart.js_35.part.js": "1eabf6f583ee423ffc7f7493834787ae",
"main.dart.js_200.part.js": "5e89578c90df5843e1dcd0342da585de",
"main.dart.js_101.part.js": "889bafc7eaddbd68afeda3971d789c76",
"main.dart.js_77.part.js": "c1dd5dbe2850c1c70cddc29267c1b810",
"main.dart.js_208.part.js": "f593274dd1929fb7e080820e1c6a9da3",
"main.dart.js_82.part.js": "0c40bb163ccbc8ceb1113fe867c4faf4",
"main.dart.js_173.part.js": "2829bcc95468fb6e20fdb5b2aa5cac14",
"main.dart.js_291.part.js": "a285740c5e666f475e6378cce4a4e691",
"main.dart.js_106.part.js": "b7a72f62b3b69157a449f7ce7903424b",
"main.dart.js_273.part.js": "100a3d78c17acc97a8e99598cd4393b4",
"main.dart.js_62.part.js": "097f20b5225b54aa0c982509459c7061",
"main.dart.js_259.part.js": "ba0d2c6415b69212e9913e0ab696ee4f",
"main.dart.js": "f46bbd128ea6fc37c102ace61bc91855",
"main.dart.js_222.part.js": "0f696c14c87593ecc3a2d6f89ea91d20",
"main.dart.js_293.part.js": "7f7c5787524f77521497aa8051dd5bb0",
"main.dart.js_124.part.js": "e6cc3652da89488adfb283533fb02055",
"main.dart.js_50.part.js": "a996fbd318958bb5dea374d6c8e111da",
"main.dart.js_192.part.js": "30ec162230c1412b8c0f24413f49d6b4",
"main.dart.js_91.part.js": "011ae86ccbc67382b5db2ccb103c9d2e",
"main.dart.js_145.part.js": "5db8126d1e17e3cdc13563613965dda3",
"main.dart.js_229.part.js": "f30e8b557290e8993fb4f486069966f3",
"main.dart.js_190.part.js": "9d25b75e8c665b1439397750892060b9",
"main.dart.js_104.part.js": "6f9a671b8c01333cb7d0cc46aa7d23d7",
"main.dart.js_201.part.js": "988801a12703eb1ecedc70bb9d55841c",
"main.dart.js_69.part.js": "3fe41c0a506619005077efbf31682987",
"main.dart.js_196.part.js": "a0530cabf321ecc2e030cbe26c6f9d0c",
"main.dart.js_181.part.js": "b7b162f778f325345a8ffec349034028",
"main.dart.js_270.part.js": "ce0a73aa693c2f7e3d8765c2d2537ee0",
"main.dart.js_158.part.js": "f1149818af41c8ecefe78ed6cb1804e5",
"main.dart.js_33.part.js": "a4e0c9dcbe09c9e36c8fc35a01f37826",
"main.dart.js_275.part.js": "adf6e0abdc119341a96eeac4308a2718",
"main.dart.js_269.part.js": "0a24df611665d16350079874b3f85974",
"main.dart.js_217.part.js": "062eb195b5067cddcb543b32d4ec6ba1",
"main.dart.js_34.part.js": "37de8422f13ac44a78246712ee0a6700",
"main.dart.js_210.part.js": "424e624346298a98d3b8920e3600846a",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "76648cfdd024ec34559aa1c19ef6d1ac",
"main.dart.js_88.part.js": "43692026607a40850e884a635744d0fe",
"main.dart.js_202.part.js": "6418b0f18eebdddaebb9950e5bdc21d7",
"main.dart.js_183.part.js": "1de3134d660e6175e563402f681c0be1",
"main.dart.js_167.part.js": "c19028e5d2dfafc0869019fedaf943da",
"main.dart.js_203.part.js": "16de6e7558290e8bc46f1115d4c7796d",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "95026be580f9dd7553cc5b7b103b98a3",
"main.dart.js_7.part.js": "55759eac305ab9fd00564c2d8a0db4a6",
"main.dart.js_140.part.js": "7c0c8d7f8392ff2a495cf6f0e8d278d0",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "36e7eebdffe263b859bbcc6e0e24c7c2",
"main.dart.js_27.part.js": "3d6a2157ca1c8e06374c95377e488e14",
"main.dart.js_156.part.js": "a254af0432c0aa377548b8648fb85b66",
"main.dart.js_4.part.js": "8d69b6840f26f9e32749c9a111ef0782",
"main.dart.js_298.part.js": "afeec444a2574ddc97efb31d4aa45de3",
"main.dart.js_219.part.js": "8041b17621c545cfd5127bd9453f7fd9",
"main.dart.js_116.part.js": "7239fea42a46f286635cb9527b61d46e",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "e5aa34b29ee528ec717720fb7f7670c1",
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
"assets/assets/translations/uk.json": "27083f4da05ed2ca3119358d74630294",
"assets/assets/translations/pl.json": "d98e4a6cd052a1f51b89295c3980dcfe",
"assets/assets/translations/sk.json": "5d9045e8abdacd35e0901ca66de1217f",
"assets/assets/translations/en.json": "2aab980ff9e297c9ba44714c57eba517",
"assets/assets/translations/cs.json": "e048c90857627c920b628da573b5a92c",
"assets/assets/translations/de.json": "eefb4d320c0c3aa4134bdf457a020a58",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "21092cee812eaca83f55eb5e54aecf0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "3e4a2dc0715e65ac739926c38170230b",
"main.dart.js_263.part.js": "156b5030986f970e9d5230f32b302e33",
"main.dart.js_220.part.js": "aeccc075167b6a48e5c263be84777850",
"main.dart.js_25.part.js": "a54dbab0176b9fddeb03d0cac2100579",
"main.dart.js_288.part.js": "04123a01636a05b8817f27aa0b144c31",
"main.dart.js_141.part.js": "8183129f68528e614c1d4de8329d21e7",
"main.dart.js_249.part.js": "dd849e0a0a80f3c6aa8d8b01d801e4f6",
"main.dart.js_123.part.js": "9be7c5d1d82d23f38eadc679be2752da",
"main.dart.js_268.part.js": "3b5e9cec215e37a503f903b753052c93",
"main.dart.js_8.part.js": "7355f9ffba43ec51e168ae5f9c10dbc7",
"main.dart.js_198.part.js": "113ee75e24ea13595629df3c5852995d",
"main.dart.js_81.part.js": "4b98536e00d1f393b323ade9718698bb",
"main.dart.js_113.part.js": "948051485e5c8ab276ec381b2d29d776",
"main.dart.js_280.part.js": "3811a101e6360de23ca577ec0a750cb3",
"main.dart.js_9.part.js": "fff7cd252842e6c8c1082c9e019355f1",
"main.dart.js_99.part.js": "0ca5d3cd07a9a75d0e7dc038c1e1cb78",
"main.dart.js_242.part.js": "adc20ef28f50b0fe2eaa3d3997182bed",
"main.dart.js_86.part.js": "42bfc13646366ac90ef5e20fe3a22905",
"main.dart.js_23.part.js": "5381683ac401c74ce43f0bbbb33ac5ba",
"index.html": "e2f68afac1cc918b2ab6b2705bc2e6b7",
"/": "e2f68afac1cc918b2ab6b2705bc2e6b7",
"main.dart.js_98.part.js": "c9523975f0876e0a9201a7f02b33fe79",
"main.dart.js_53.part.js": "48091c582846e8936d74a3d1031b95f5",
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
"main.dart.js_286.part.js": "a69c27bd4eac253d0d28d5ec699735d0",
"main.dart.js_118.part.js": "b83791f70893d8d7f68c215b6098981e",
"main.dart.js_262.part.js": "4211e596581633ebc86782dd52c14bcc",
"main.dart.js_26.part.js": "b1b9576a2390e97f5abc3d2962362716",
"main.dart.js_20.part.js": "7010225f7fd690fba77bacacb43fa8b6",
"main.dart.js_189.part.js": "5c67bd715033b0c0836755600189ab2d",
"main.dart.js_51.part.js": "244c876dbc99e4f34550094ba141b3c0",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "ca3db059f47dd72b6ad0b4bceb8d7e02",
"main.dart.js_290.part.js": "5ef0c5171f0d187388a71775cdcab2f0",
"main.dart.js_72.part.js": "8a524789af56544f1ce30aaa0e23f695",
"main.dart.js_1.part.js": "9aa4d16ea05397d9dba719b93c3a76ef",
"main.dart.js_120.part.js": "52abeda5e4eeb2c197ec6c0efc68657e",
"main.dart.js_63.part.js": "cfe9694c05b6bcd506abea123ed5547e",
"main.dart.js_211.part.js": "d51810326fc27a6b45147b0b4d7ac4c8",
"main.dart.js_295.part.js": "4c7e54e7295bdef2c1d053b678781636",
"main.dart.js_12.part.js": "8d8b25e4d9a2d2920c06a5b7fb9e2358",
"main.dart.js_157.part.js": "f5ca617e850061d8b67c5a4c8b1863ca",
"main.dart.js_281.part.js": "446f299c3938acadb1f00f277ba841b3",
"main.dart.js_221.part.js": "3fe92fcc2a46ca15fb07a4fd10f54460",
"main.dart.js_137.part.js": "9977c8795b859887e34a11c584fc0897",
"main.dart.js_276.part.js": "d625f76ab049b91f6a0bd9882cd6dc05",
"main.dart.js_28.part.js": "03c0c23ef1d2c4cda8f764020d9d19d8",
"main.dart.js_135.part.js": "dece920ea63750b310c863acb171b4eb",
"main.dart.js_256.part.js": "9c37f304b92f461030024a228083fd33",
"main.dart.js_138.part.js": "573f642eab7c256f248a5b5646306aaf",
"main.dart.js_193.part.js": "01bcb2242066df183fe47ffb69255c42",
"main.dart.js_17.part.js": "79246a52965abd09f1d4008f803d6120",
"main.dart.js_105.part.js": "bf744215ae56f1c8ee6fada10c4e0a96",
"main.dart.js_231.part.js": "f4992ed2e7989783e1e0dd94aab4c5d4",
"main.dart.js_43.part.js": "20fbcaafb7efcb8283a98b1365cb04b4",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "3ed73137aebbaed35270b4d7a86daf5c",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "d3a7d6aec3f94fcd6cbc5224a849f105",
"main.dart.js_292.part.js": "941ad23c2ce93da9c103b2639077fca5",
"main.dart.js_15.part.js": "02b7980785dd4501c26506e1f192b04b",
"main.dart.js_151.part.js": "1431731f55e6183c618b1fbd3d37700a",
"main.dart.js_19.part.js": "68e9e8de563220a735f242ae8217486c",
"main.dart.js_284.part.js": "006d0f790e32c560709a3822af1fbb06",
"main.dart.js_255.part.js": "bc4f7157141afe18fae385dfb3a3c82a",
"main.dart.js_186.part.js": "1d0f57489635dea4baf7d4a84a4d91f9",
"main.dart.js_154.part.js": "23a1b084a497a23cf63162f04775dbff",
"main.dart.js_257.part.js": "0fd38816270bd1db0f863d0a94b61d96",
"main.dart.js_42.part.js": "64f8fae0e4c98432bcff9724d7e26d49",
"main.dart.js_16.part.js": "97fb4e7c77b743cc0b87b879c7a85e1d",
"main.dart.js_250.part.js": "6e25dd95dc407fe62272ef42390839b8",
"main.dart.js_52.part.js": "b44484e9b158d3c31f2ff1296c6d63bf",
"main.dart.js_36.part.js": "0b8602ff24fd32996b0d53b9f5cff4f9",
"main.dart.js_199.part.js": "a5d881389095f33d159ab9fea30fb950",
"main.dart.js_253.part.js": "4e2c7947808613c44da179877689ca3d",
"main.dart.js_130.part.js": "49c05bf60b64fe8621f0c0ae0da33921",
"main.dart.js_238.part.js": "2c4402950e627fa8a9333b8bf332977a",
"main.dart.js_152.part.js": "573ed042461c56ceb96b3656c9aab0e0",
"main.dart.js_32.part.js": "a45d314603799b173ac8b52b4ecf0f51",
"main.dart.js_197.part.js": "40efd9ffe0aed3cf0744b0cc48374abf",
"main.dart.js_56.part.js": "72b82c3232b7eda8558060b99d4839d1",
"main.dart.js_3.part.js": "c55328ba62d6f4727ea7730768239722",
"main.dart.js_38.part.js": "189570e61dc478e0b947aef1c456aefb",
"main.dart.js_225.part.js": "70fb57a871d499884bfc1c05edc3993b",
"main.dart.js_248.part.js": "9c009151f8c1aa46716473168d8e6dc1",
"main.dart.js_133.part.js": "a0958130254090e95055798e414aedd0",
"main.dart.js_21.part.js": "45901221fb1b087b13f128800244db72",
"main.dart.js_188.part.js": "5a16c529a188680b46627e21ac7dcd43",
"main.dart.js_204.part.js": "70d6dc55271e19f106845e07d54a7ff8",
"main.dart.js_24.part.js": "7414f8513ab14155b3fa41d0b0627ecd",
"main.dart.js_90.part.js": "5a411cd7aded061870603b3da54ccf25",
"main.dart.js_111.part.js": "2f36523b353b49ea868bb93be77e3dc3",
"main.dart.js_177.part.js": "bc0822c091726db11a6f1d1a8eee7706",
"main.dart.js_299.part.js": "b0caeb0f747ba50c4dbdb4d7de08bfc7",
"main.dart.js_85.part.js": "ebf55693d28267468b4a411258975a26",
"main.dart.js_243.part.js": "35d85a2cc7f0d75e5ef5762d5c4e453b",
"main.dart.js_212.part.js": "699e0dc8aef920626ca33a2583e5dfd6",
"main.dart.js_260.part.js": "a894741c85b42231ed803eb6cabb0dcf",
"main.dart.js_39.part.js": "5c7222a36fd5811c0d26cbd86e569b0f",
"main.dart.js_185.part.js": "57146d3100f27d2bcac26d77f3935c7b",
"main.dart.js_46.part.js": "1c3e2e1a6db6961b0b7092777f0b855d",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "afa247458447090dc6ea7be30697f6d1",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "c39d1bc463e1f2c307814f1bc51ede5c",
"main.dart.js_121.part.js": "5e458ac04f90cf28723ad2197e5ab12e",
"main.dart.js_55.part.js": "92295978d2f48a0a3817ad6097095719",
"main.dart.js_215.part.js": "1ad8a89072dc11c5b4b2757e900f00a8",
"main.dart.js_112.part.js": "7a7a65c1d6681981fd6d4da6680d2697",
"main.dart.js_139.part.js": "8d20a28a5dc602383bf4b980a168adb6",
"main.dart.js_143.part.js": "193ca01050fb997ffb0651cb65bc5107",
"main.dart.js_80.part.js": "31474693184da17e57f70f909f65ea4e",
"main.dart.js_252.part.js": "695a54cc8db0a414441cdcfa5c1f402a",
"main.dart.js_233.part.js": "cf9ee684a72b499aa8f6b1f190167a5a",
"main.dart.js_30.part.js": "efe90ba1c231d783c2b0d70f22d05b68",
"main.dart.js_267.part.js": "39c7df3a4841fc4c840490c9fad4d30d",
"main.dart.js_277.part.js": "9b13ffc4bed0e9f97d050295fc025cc1",
"main.dart.js_136.part.js": "a443c23ba2c308a493ae2f89cfb30866",
"main.dart.js_271.part.js": "40d43f49f7f8a1df540d372a0c455b47",
"main.dart.js_159.part.js": "31a77b2027a19303e787f2e17ab1a437",
"main.dart.js_59.part.js": "df2c1ec0512e5f84cf4ba21420f15b09",
"main.dart.js_95.part.js": "6e8cb4383a3035bb2bc188012fc0baa5",
"main.dart.js_107.part.js": "953e70287368a2094fe404d4165aa508",
"main.dart.js_29.part.js": "460d802e2ec118c45bda9efe5729c99a",
"main.dart.js_61.part.js": "82609046c29e81a30951c6890631af2c",
"main.dart.js_236.part.js": "191016fef2e3cec1e30535d12f07fdf8",
"main.dart.js_58.part.js": "91c25c2d03d7929fd2af6a3fdd844409",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "058456383ee2170f76a56289fc140c87",
"main.dart.js_54.part.js": "ee3b4a4bbcd912e9f4527d31f1389faf",
"main.dart.js_79.part.js": "1970cc98ebd25e881b21be0e1f8c06d7",
"main.dart.js_92.part.js": "f7b5c574e393ee43f08ad71c65f9b268",
"main.dart.js_224.part.js": "338e06e7e1a065a3028548155d8047e3",
"main.dart.js_223.part.js": "2b3f5b6270525c486fe2b1a61c271758",
"main.dart.js_11.part.js": "a7d6c42718a4c6edeb9e5c648372987b",
"main.dart.js_131.part.js": "76239aaeaf18c4d8a4e008ece53d4d28",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "aac0ca3bf023583d14ab5706b667b43c",
"main.dart.js_100.part.js": "471061b1b0ff396a9ea3bdd82d9027ea",
"main.dart.js_297.part.js": "ed36b8035ebecec0cafc56e63d040e23",
"main.dart.js_70.part.js": "4edb64b53d8c81f3f905e58810d0079b",
"main.dart.js_187.part.js": "e5cf8a03a8595bfcbb7f689b3d7b7ac2",
"version.json": "c65b27966822a6adacf3dc48c8404c81",
"main.dart.js_264.part.js": "283e5b10b1b6a260dfe2be54aabe0da5",
"flutter_bootstrap.js": "a685a729a5b7670f7d12e205876f9876",
"main.dart.js_191.part.js": "7152abe624f5d0471709381a3c93be21"};
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
