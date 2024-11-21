'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "86716fe43349e99ede76f840c494a002",
"main.dart.js_75.part.js": "7fdac76d22417846c9f60f2bf2bcd4dd",
"main.dart.js_289.part.js": "7d5de3ecb02a134711cb641b6f28dc20",
"main.dart.js_83.part.js": "7f8945f0276ba24c8be77577b71e63d2",
"main.dart.js_254.part.js": "9bd7d41a62577209276a0eb39b5970cf",
"main.dart.js_176.part.js": "31cfedd1a091530cd006356f7a592602",
"main.dart.js_96.part.js": "2badc57e42572a280ac111dece186e2a",
"main.dart.js_245.part.js": "260296ef4235a3de0d9ce093dec6a279",
"main.dart.js_87.part.js": "f277a84a199253640ae96c206e710908",
"main.dart.js_251.part.js": "44a3a1563b710a3121120d188f7ea6b7",
"main.dart.js_126.part.js": "bd54647e4d812dc8a1da9684333a7ca0",
"main.dart.js_129.part.js": "6f8b2747a42570830e942b770837dda3",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "c90ff8f333e7d4e8e845e9b7282c7209",
"main.dart.js_172.part.js": "afd78bfa6bbbc8b56a77bc91faa55eaf",
"main.dart.js_142.part.js": "70486b6efcefde0f45c5732800e22867",
"main.dart.js_209.part.js": "dd694fdca4ad93cc3ff08d1df596fbbf",
"main.dart.js_10.part.js": "497bf11dbb443720426adbc9033e53d5",
"main.dart.js_66.part.js": "0cc043a9609f2913cde1f258a0924423",
"main.dart.js_84.part.js": "894574cbc020506fa4d7322c86a6408e",
"main.dart.js_122.part.js": "efd4f5fcee4c88534fba380de8c29a72",
"main.dart.js_230.part.js": "8631a08a2e9dc62fea92589fd02a2b24",
"main.dart.js_213.part.js": "8066078559fdd58be57350c9f74aee20",
"main.dart.js_153.part.js": "4e089efd2ee2306ed38326b6908e5084",
"main.dart.js_89.part.js": "8cbd878fe038324b9b785773ab53ff1c",
"main.dart.js_146.part.js": "def60bce7ffd155c52b51051e6ec981d",
"main.dart.js_37.part.js": "dca547df3da52f61cacdce1cf8e28424",
"main.dart.js_287.part.js": "2c8f46df69f8104a63b1ea3f426e2403",
"main.dart.js_283.part.js": "7a323a4c01cba4e103ee2e53d68a6d47",
"main.dart.js_132.part.js": "3090f53c500cab57f7444064fe57f415",
"main.dart.js_165.part.js": "78d017f0c3f46ab818141f819a5ae188",
"main.dart.js_127.part.js": "db63b29afb4efbfd555d5c64314c8569",
"main.dart.js_175.part.js": "cdacde2033f9f496323d8af0e0728015",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_216.part.js": "cc5cdd721cb58cec7cfb6efd80ca1c2a",
"main.dart.js_64.part.js": "566a287b177a7c2942ac1471e22e0af4",
"main.dart.js_13.part.js": "bfc1711fc926074cc53ba39d140c87f5",
"main.dart.js_246.part.js": "eadc7ee17f69221f9fa2417737272695",
"main.dart.js_174.part.js": "3b0a5a2e821e4260cf872861a132f0aa",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "eaf2d2580d4d109430a9e39f11d6572b",
"main.dart.js_144.part.js": "93d2df3670c40da0d97f168e7fcbf684",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "b224342d9a461dea471a0de37712d412",
"main.dart.js_265.part.js": "322a2945098987548d9445049fedf1bb",
"main.dart.js_31.part.js": "21d9d798e8edadc11fddb4b2b11fe578",
"main.dart.js_119.part.js": "165f0e57b6785e205d3482e72fa3a5d4",
"main.dart.js_294.part.js": "c8255d55378a661f197cb5a614ce28e5",
"main.dart.js_18.part.js": "584083a0784732bf10ad177c315ce541",
"main.dart.js_35.part.js": "4b53a26218eaa133d83f627cdb50f2ba",
"main.dart.js_200.part.js": "afa0b821099ba30c0dc5a05b28ce0b58",
"main.dart.js_101.part.js": "f29f8e3e89259fd17b28d9e6520390d1",
"main.dart.js_77.part.js": "368f254d9410554bba878cfb7c170e86",
"main.dart.js_208.part.js": "34cdf081410a4aa2c3b9388de7e6832d",
"main.dart.js_82.part.js": "9c1f5e58b0cf8a49d4a9824f58e18ae3",
"main.dart.js_173.part.js": "33a21e2fa33ee8f26a8c3618f3dba23a",
"main.dart.js_291.part.js": "e7fc9d28043bf5c9c460ded53006020e",
"main.dart.js_106.part.js": "fe07cf1758826efe78c27d1f2bfe7e56",
"main.dart.js_273.part.js": "9550a09e3e7172184973d87aca81e64c",
"main.dart.js_62.part.js": "4246b7b50028d5fa1a7a988ee7c359fc",
"main.dart.js_259.part.js": "b9bca6be9cf43773b117b871b4847766",
"main.dart.js": "77e089fba20509d99326358fee0113b2",
"main.dart.js_222.part.js": "d6481b81103011a7d87d29c9b79f1e41",
"main.dart.js_293.part.js": "25e2d93c55f6b86597a85ad1b2965d59",
"main.dart.js_124.part.js": "775b4aca29fdeb0a5ebc3f0fce7123e9",
"main.dart.js_50.part.js": "a731a0a5b7dbc0187b139e3ce2afb334",
"main.dart.js_192.part.js": "ef66f92ccb807f75da2c75b5e1311208",
"main.dart.js_91.part.js": "ed040b2b6fd5d41e0b1de7a854a10edf",
"main.dart.js_145.part.js": "8ea9d5d39869ea8003d5457cc3f1a006",
"main.dart.js_229.part.js": "d2e16daa931670390ecde3f01777e2d1",
"main.dart.js_190.part.js": "cf94de1de6904cda27aa0f80b98f7a4b",
"main.dart.js_104.part.js": "d7af00f17b56e7ab427a2171625ba493",
"main.dart.js_201.part.js": "e08f71793c5638e1cff8ba58d08ef4ee",
"main.dart.js_69.part.js": "695e98c27a4e98d9a43c8e34b8d830c5",
"main.dart.js_196.part.js": "e311f474364546e4faba3746a84d9d5d",
"main.dart.js_181.part.js": "179fafa9be3e6474ed05d0810e2d2528",
"main.dart.js_270.part.js": "13170b5ffa24efd26a3c721ed7bdb9c1",
"main.dart.js_158.part.js": "9c55784089747cb94753b0b18094d5b8",
"main.dart.js_33.part.js": "ec7a8f2b35526634e8ac6164b6d51b59",
"main.dart.js_275.part.js": "f1e17a18dd36415d49d3a2bd85d628bd",
"main.dart.js_269.part.js": "92b03c685ae32d1c91fddb9da9953acd",
"main.dart.js_217.part.js": "88606e3a533724a93166c6e06afa19a0",
"main.dart.js_34.part.js": "adb391ef2ab847cac8ea0f1cde6df633",
"main.dart.js_210.part.js": "8de65b9b99f86d9582125b518505ca4f",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "56b5ba12416cc6443b8debb8fb442888",
"main.dart.js_88.part.js": "e6a64b751a6827fdc01c78f808e6f680",
"main.dart.js_202.part.js": "c4d57b979017ee16588422025269346a",
"main.dart.js_183.part.js": "ee1aa363c822140e6c330f535083f9bd",
"main.dart.js_167.part.js": "77b1321690a0c3c977ffa3bc25edd80f",
"main.dart.js_203.part.js": "f93a0d1f6c5e5a4651a6381d57785b5e",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "bafcaf6f95c71567efde4d5d89f15218",
"main.dart.js_7.part.js": "016765541f05507355cbb114a39abc3d",
"main.dart.js_140.part.js": "d1b13404c78ee32e1f170c15d5a0edc6",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "c64c05ed9eaa4c1f403eac765889c3d3",
"main.dart.js_27.part.js": "3300c6df34ab29e3b4f9330c5085330c",
"main.dart.js_156.part.js": "ee84c4a9dc3c5298d928ea66d09d3e35",
"main.dart.js_4.part.js": "d1571a6667ca02ef6accf74c1d285281",
"main.dart.js_298.part.js": "e7a86e97c61da142d8da09fa416399fd",
"main.dart.js_219.part.js": "140d34fb8470371f30379cb50919dbd4",
"main.dart.js_116.part.js": "768fae5728162027ca5190faea1b26d1",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "4772e046a247f39a843ac9bbc893e582",
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
"assets/assets/translations/uk.json": "5c6f91b5506200c26ad51e5350765c6c",
"assets/assets/translations/pl.json": "271b55ce0c52c9830bf390887e5966b5",
"assets/assets/translations/sk.json": "319d036846a90d0dd0b0d1fc3f1cf8fd",
"assets/assets/translations/en.json": "cd55cd652cbc775f1e0f2c4d420d34f1",
"assets/assets/translations/cs.json": "d51954e17c01bdc68e0d936ac0fec133",
"assets/assets/translations/de.json": "8fac98a7bb87e3ef69fe52580167ad64",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "21092cee812eaca83f55eb5e54aecf0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "2139fa34620b736cb8fc9bf64bea90c8",
"main.dart.js_263.part.js": "886a403f46cabfe579bd1d89be87490e",
"main.dart.js_220.part.js": "88f2a8a990a3e468fad2cb76e05bfd46",
"main.dart.js_25.part.js": "d47e1cc61428946e75b6a6a6587448cb",
"main.dart.js_288.part.js": "6061c623a0ab55bff3c99e854e86a086",
"main.dart.js_141.part.js": "afb75417d00ab216dc499128009be9d6",
"main.dart.js_249.part.js": "c1137cf932376a0be7db75bdaeac9653",
"main.dart.js_123.part.js": "1f66799b29d1c4b6a0b813c47e5594a8",
"main.dart.js_268.part.js": "bfa603fb835b411ad9688a58f7d1fb4a",
"main.dart.js_8.part.js": "6bd4bf194543a68c46f9294de75855c9",
"main.dart.js_198.part.js": "4a3267316a14f4720434c1d79253f751",
"main.dart.js_81.part.js": "94f203ba03d6ae91aacaf71a030f5e1a",
"main.dart.js_113.part.js": "10fae8f153d84edf7a36611fc991eb85",
"main.dart.js_280.part.js": "49b6ed136df816e43cfbbdba2be732ff",
"main.dart.js_9.part.js": "7677b52ae814ee3bb35a832a91fbfc45",
"main.dart.js_99.part.js": "faf88a9d3f5597b256e2f87efbf7b53d",
"main.dart.js_242.part.js": "3062edc0a9d8db78152abb61c1ba980c",
"main.dart.js_86.part.js": "3263e8e5f518186e631ca64886af6c60",
"main.dart.js_23.part.js": "863c440f5538b58c9211e139d5aa9a63",
"index.html": "7bfc0ad421558b9d19efad6d7381e58d",
"/": "7bfc0ad421558b9d19efad6d7381e58d",
"main.dart.js_98.part.js": "79213064ba1cace021e506f9412dc57f",
"main.dart.js_53.part.js": "b1ebec44e40c8e86b8f646fdc4fc5c46",
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
"main.dart.js_286.part.js": "1106decc9e201552bea247bcfa4833b1",
"main.dart.js_118.part.js": "1d5223496aa6e1b0acb71072db2361df",
"main.dart.js_262.part.js": "4b80c68aca6a07a43bb27e6d5275fa24",
"main.dart.js_26.part.js": "5cacaeb3adf8c1ddc0a4c24d867e38a9",
"main.dart.js_20.part.js": "4487ce26dbd65146cd00e0389e40507f",
"main.dart.js_189.part.js": "6231e6f5938f9140f50b205b23f731ac",
"main.dart.js_51.part.js": "e5cb6aa3d377a5ce8966ba11c55307b7",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "265a75874860f23ca270fc1cdf02aa44",
"main.dart.js_290.part.js": "07585bc06d149cc878ce216911b42d34",
"main.dart.js_72.part.js": "a7770e61aa1c8eeeacfc1cb0e3dbbf08",
"main.dart.js_1.part.js": "0c0f1b711b3ee111fc4055d6a97bbc6f",
"main.dart.js_120.part.js": "42b7efaf5d116c7d01029684cde14b77",
"main.dart.js_63.part.js": "8b6483728097e53f1461806c2a3ffa71",
"main.dart.js_211.part.js": "8d0bdf88f139e22259e5d7f6c2942801",
"main.dart.js_295.part.js": "c9aea85b4967f368eaf5e2ff537bfca7",
"main.dart.js_12.part.js": "4c1ba22e3c76774e2f0eec4746539793",
"main.dart.js_157.part.js": "4267e4acc05f6106451044fcc6bf41a3",
"main.dart.js_281.part.js": "565ed12ce5673f37a313d42cc6bbc449",
"main.dart.js_221.part.js": "2252f6daa495599b2032c38c92aba685",
"main.dart.js_137.part.js": "f4268bdfefdfbfdc97b6d8c545c03972",
"main.dart.js_276.part.js": "f6a49fe9840d84cfc6f967483495c689",
"main.dart.js_28.part.js": "6f8f5fb3515668579042c8fa9b477782",
"main.dart.js_135.part.js": "b37369d4d1f153c024c10d91164de152",
"main.dart.js_256.part.js": "43cd3c779443c19656d76d2daf60f2fb",
"main.dart.js_138.part.js": "e84152ce60625885c77ce6fede4b34ee",
"main.dart.js_193.part.js": "8e5d34ee7ab4168b0a38d297a59ac7ab",
"main.dart.js_17.part.js": "ad0dc6f591fe851668ac390fa270cb0b",
"main.dart.js_105.part.js": "7a4db441fdcd412c0b8d4baca16a2e92",
"main.dart.js_231.part.js": "35e9e97f33caa1416726f43030256bd3",
"main.dart.js_43.part.js": "28ccaa25d9dd2efb8aab7a6eedaa28cd",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "2d4361a7966763cf46b233678f667568",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "cd425b1da52207ecd6d67564a6f4ed7f",
"main.dart.js_292.part.js": "d0a86d319222a97c347357d24e98ef19",
"main.dart.js_15.part.js": "1ce7f730bf8c464c5e90bc25bf682179",
"main.dart.js_151.part.js": "04cbff7649d3fac6db53280c45de9eee",
"main.dart.js_19.part.js": "b22067e7dc2b07fb674fdcdc2050858c",
"main.dart.js_284.part.js": "bd9df7bf15ff102fce78cd99bca4fb28",
"main.dart.js_255.part.js": "c22b578398898dca811e2027f848b4c2",
"main.dart.js_186.part.js": "9ac72e37296566d7b460f0e308405462",
"main.dart.js_154.part.js": "2892ed0eeb268958619c75a5f373a100",
"main.dart.js_257.part.js": "e9f401b5f8da67a715431e4fc94929d5",
"main.dart.js_42.part.js": "dc48a9f7a4b794dd42f9f394cf0f5007",
"main.dart.js_16.part.js": "a28acf3d676d7d1ba615bc98d0c5416b",
"main.dart.js_52.part.js": "55cea78cd80d3d19e88ab8b2c14662db",
"main.dart.js_36.part.js": "507fc2470546ea26b1005e620829133e",
"main.dart.js_199.part.js": "7b078776ab062c3feb9a3e3d8661d8dd",
"main.dart.js_253.part.js": "4c4bbb4cabc2ba9a2c36d0840ddf0ddb",
"main.dart.js_130.part.js": "8fcabbddb93575f9abf84fe4e0e02c32",
"main.dart.js_238.part.js": "4407c2f3d5b5c13570b915b2de21506f",
"main.dart.js_152.part.js": "fd3ff884b9c4f5bbc300173e08783255",
"main.dart.js_32.part.js": "8b208a7a1d35a0cfd31b8e17811cdcc9",
"main.dart.js_197.part.js": "86b1df114dc7d9431c911a3fce40763e",
"main.dart.js_56.part.js": "41b63e76004f7a52bb6897d5c6e9dded",
"main.dart.js_3.part.js": "baa18cf1d26f62781528a51333688d07",
"main.dart.js_38.part.js": "f40b424bee2b25820c39e396deaebee7",
"main.dart.js_225.part.js": "7bfbd3b2b5428eee67abb1842237f1c6",
"main.dart.js_248.part.js": "dc6a2b8a4d1d6a87d2746001b9542389",
"main.dart.js_133.part.js": "b928bdd3e627f462b5f16f5725c89b59",
"main.dart.js_21.part.js": "46b3f47163ef0d7283eea9b50f801303",
"main.dart.js_188.part.js": "3c686bfa25a4e2e89e6a601fcc531cbc",
"main.dart.js_204.part.js": "0789df82740cfa0a36b810229ee41159",
"main.dart.js_24.part.js": "e7781a9aa3a4a58ceecd23f770a5771d",
"main.dart.js_90.part.js": "10203b21d7b4d053ddfbeca34ec2b2c6",
"main.dart.js_111.part.js": "e6013be0c87bbc96f087fb123d1f8b27",
"main.dart.js_177.part.js": "4d77b28fdccf0801211a8fd11affeb38",
"main.dart.js_299.part.js": "9ae713b582db8eb21b0f11af003f0c5f",
"main.dart.js_85.part.js": "4e56aca59c465d74c850445080b47b76",
"main.dart.js_243.part.js": "43c132dddeb5e77092dd635ffe2e4b82",
"main.dart.js_212.part.js": "bcb61667de9241b25858acd6ff9d1996",
"main.dart.js_260.part.js": "bc96db760a9a5427b6435cb4c8657791",
"main.dart.js_39.part.js": "e717ab4074a173d0cfe2eb9f9c322c7c",
"main.dart.js_185.part.js": "be3702e25f08729784eee850928916f5",
"main.dart.js_46.part.js": "885b598b143a5c8ca7a0963628b906c2",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "cd1fa31459eefa166484d9173392f749",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "7e64b351cfaed550cbd7054890e44867",
"main.dart.js_121.part.js": "2789b8d902c084f68448a5aefbaca028",
"main.dart.js_55.part.js": "56d958f07c2a7aea9bd1a6639f9983e2",
"main.dart.js_215.part.js": "adcdf28fa0d52bcb5f4a0a3d90eb9f9a",
"main.dart.js_112.part.js": "cce9f7040b521cb86274b8ed39d601bd",
"main.dart.js_139.part.js": "db28c7e38c8f7fb617c5aeb85cba38c2",
"main.dart.js_143.part.js": "0a4f558b2d93dbabcf5cbc6c10abb00e",
"main.dart.js_80.part.js": "e9b74b799c745798a575f42b67783678",
"main.dart.js_252.part.js": "51f0b13d3c6b731d3f9ea418a38d3e72",
"main.dart.js_233.part.js": "277e00167038a11b1c9e6b3a810b9f0a",
"main.dart.js_30.part.js": "c2899f00945faed611acebf9a3eb742d",
"main.dart.js_267.part.js": "c9163cd3194025b72ddae818320b9c2e",
"main.dart.js_277.part.js": "7c048ccc93553acd846c998e746da3c4",
"main.dart.js_136.part.js": "98bc1fa714068a1777a5d69ed52fa9e6",
"main.dart.js_271.part.js": "179da99f77e53e861b1f9243e80dd8ca",
"main.dart.js_159.part.js": "8f7eb6fc4576456e83d1e5439f83ba91",
"main.dart.js_59.part.js": "cc3969fb7928210614d52ab83b31116a",
"main.dart.js_95.part.js": "e751fe2b5e61ebb56b2f381b9d5bdbb0",
"main.dart.js_107.part.js": "d29cabf5345d76f9b206272255e453b1",
"main.dart.js_29.part.js": "a822d56cdc566386d70be877a9459df3",
"main.dart.js_61.part.js": "059fc0f93f5fcf6304facf72055d67c7",
"main.dart.js_236.part.js": "23b78b5bc2ac4ef4c6fee3f7682f3607",
"main.dart.js_58.part.js": "095edd37dd6bb38010a7e2566b63913a",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "290e61cb1d90110f658255e7256ca9c6",
"main.dart.js_54.part.js": "bf7c0507112753acd6526ada3e679997",
"main.dart.js_79.part.js": "a0479d3660a4bf07c72e7250e2f588b6",
"main.dart.js_92.part.js": "be56b1b89943cf1a11716cee7d08beb1",
"main.dart.js_224.part.js": "a99ff95acce1c911cf83ecc1699243a1",
"main.dart.js_223.part.js": "84ba62c6232ff6823e30f746b144aca9",
"main.dart.js_11.part.js": "254a9566841fc26d7e2c6471e5450c41",
"main.dart.js_131.part.js": "44aa0d10083a9bda001aa3d3deb0d489",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "145daf3b539bce3e163a8bed34b43c55",
"main.dart.js_100.part.js": "499c7a1114cf6c061e7a3844b6fa9472",
"main.dart.js_297.part.js": "702222563ec70871ce9ddf0f4841fb33",
"main.dart.js_70.part.js": "84491e3b61bdbb9cc59881f3e375c80b",
"main.dart.js_187.part.js": "8c1474447600b665558f8264780befef",
"version.json": "13e25a1bf53b1e0617e6c3115bbf029e",
"main.dart.js_264.part.js": "9bae8df75515817c95c4daacb73c5a75",
"flutter_bootstrap.js": "1f8ad5fbe7760500fbcde2762f03369b",
"main.dart.js_191.part.js": "996c7103d265dd026c8470c7649c340f"};
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
