'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "8fa87902ae1ff78086e6df87c1ab60a8",
"main.dart.js_117.part.js": "e87097cb814490234607d87a4a14a077",
"main.dart.js_182.part.js": "0a534b0a573691941834cd7eb15ce1d2",
"main.dart.js_244.part.js": "9ebda81317df65d44705fe4bb48a2d24",
"main.dart.js_83.part.js": "590e00f393c3f5616a08d2cce076e4ff",
"main.dart.js_254.part.js": "291c7bc48ed773c454d51612b9dff9c6",
"main.dart.js_176.part.js": "867de7ba264d793e4263acaf6313d337",
"main.dart.js_96.part.js": "c9ce8cd250dc74a591f3fd754c06ee42",
"main.dart.js_245.part.js": "fe858fabd40bbabe92956ee6a74eaac3",
"main.dart.js_87.part.js": "8d3db0ef8b84be6eddd2895fd7d0eb91",
"main.dart.js_126.part.js": "557b31959d3ced084c3de41067f3d0a7",
"main.dart.js_129.part.js": "0531c45c9a869838d6a8dae58b6c541f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "87f255c292f307b08bee906be9e63cf3",
"main.dart.js_218.part.js": "705770dc79a32421a6a256d949f4d2e4",
"main.dart.js_172.part.js": "1d139510bfb9b25768b21c8fde0b0345",
"main.dart.js_142.part.js": "fb0df7909bd37f4bc3ccb8a0a6f9c608",
"main.dart.js_40.part.js": "c50970b685ddbcc4c1e274f7637bae93",
"main.dart.js_209.part.js": "6a044756b93f339fe52c0ed04215848b",
"main.dart.js_115.part.js": "d36fd32fc1de14ea2ca6afece6d5fee7",
"main.dart.js_10.part.js": "cead3f8bcf64c8a43bcab7743caee29b",
"main.dart.js_84.part.js": "b7153d412b6f6300d4073948083f4475",
"main.dart.js_122.part.js": "032b9f313bca2dd39a6abd7017b95fe4",
"main.dart.js_103.part.js": "7a4d451a57e33d52ab598ff39567c880",
"main.dart.js_230.part.js": "7625cac02f54c5f70e6a97d3c69888e4",
"main.dart.js_213.part.js": "228796edc4f853e1a1083be3aa7ed48d",
"main.dart.js_41.part.js": "92a9e642756d951d8c70d7cdb798f1a8",
"main.dart.js_89.part.js": "5fdabfe216430002a1b5ad34f292cc6f",
"main.dart.js_146.part.js": "7dfd9c9a3d05ea6da2615d79603d1563",
"main.dart.js_37.part.js": "6612fe102619c1c105be4b1bc4f4cd6b",
"main.dart.js_132.part.js": "f95b3a59fded8083c34f37628a3e7fd4",
"main.dart.js_165.part.js": "b612f056661a219e522eab3c300c023e",
"main.dart.js_127.part.js": "7e942338d8fb9680170056e495e0417f",
"main.dart.js_161.part.js": "43fd748d8a7d194813f55715b03ddaec",
"main.dart.js_175.part.js": "f43506d8e16c1fdf2ed37059be363db8",
"main.dart.js_239.part.js": "ea2176a58faad4df7b6f6fbe1a4dd129",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "a2ed1680bb47e71b7f85649295ee12ae",
"main.dart.js_64.part.js": "0ff90dfa181ddbf27e9c2827f99effa5",
"main.dart.js_169.part.js": "2fd267b5873d87a12f39b266f2cfc8f6",
"main.dart.js_13.part.js": "d438f142e422a265f56d5ffc85e81b27",
"main.dart.js_246.part.js": "819c80c5c8c73495d2c760591f25edae",
"main.dart.js_174.part.js": "ca324a6c6406e6bdf78152b1016ac3d4",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "362aef1adac7468f54ee8903912591ae",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "990966848c6eed146e4a5218c83235bf",
"main.dart.js_119.part.js": "351b8512411d52fca3512870f850bae6",
"main.dart.js_18.part.js": "7667ccc58269bc9a78d72ee725c70d62",
"main.dart.js_35.part.js": "c4d7f36ecff4b7f636ac4ee8c5fdc245",
"main.dart.js_200.part.js": "567debcabbeb74266a79059cb976869c",
"main.dart.js_73.part.js": "8e1f63edc7cb1a661f0a9582748321b4",
"main.dart.js_77.part.js": "2b71dbab86acad0cccbe5c5fff3999e4",
"main.dart.js_149.part.js": "eb2a75a099a26064ebd2b07490624065",
"main.dart.js_67.part.js": "191d92fa0658fe24820b972805b6155e",
"main.dart.js_208.part.js": "c5db83f81c3476f20246ae1d297cf337",
"main.dart.js_82.part.js": "f9964ab3e5832fd3edd3d892809fe272",
"main.dart.js_173.part.js": "79bb73617321727f788e0e8b2df1e040",
"main.dart.js_106.part.js": "35ae48e0e1e979684538f4e7623d98c6",
"main.dart.js_62.part.js": "237d470826cb5e52833ba125eb7bc339",
"main.dart.js_259.part.js": "4c2a89005fb35ebbadbd6b8391822f18",
"main.dart.js": "3dc76fc7a0c54d71338817d15bd71c98",
"main.dart.js_232.part.js": "dc67bf13636efee0720b3bb6ee88299b",
"main.dart.js_148.part.js": "31f9f29f745e0e09063552bbbab82a18",
"main.dart.js_124.part.js": "9d82f5ee7bd32065cc29305dd4f26ac7",
"main.dart.js_97.part.js": "f794f9e4b2bb508fea02714fd8cb5287",
"main.dart.js_192.part.js": "b3a2dde02f790e522fd8243c1bfada4b",
"main.dart.js_91.part.js": "156b972ec5aeeb5a2171d3fe7342592e",
"main.dart.js_145.part.js": "d7df41912b08153c5ff19e47a1329d0a",
"main.dart.js_229.part.js": "80590ac9ad1bf73c6d11bc490b465d62",
"main.dart.js_57.part.js": "a5c159f571d5296e71bed1421616bcf8",
"main.dart.js_190.part.js": "fcb208ff0bf9c0bd64d199bc9cc5de16",
"main.dart.js_104.part.js": "f4306110ef6079721a59a044a3dc1e2d",
"main.dart.js_201.part.js": "28abda1b7beab635edb175f360aea273",
"main.dart.js_196.part.js": "11b3b9216f1f9dfffb62afbdcece8aa9",
"main.dart.js_181.part.js": "35f1efaceb6307139329f11f3e340392",
"main.dart.js_33.part.js": "470d6e63b87d9259e9dd5056aadc42e7",
"main.dart.js_217.part.js": "0d3c2597aff37a2c7be6e6d2aa534de1",
"main.dart.js_34.part.js": "2eac4015755924e435af0bc15499f48e",
"main.dart.js_210.part.js": "c3795844ccf42bc18e72100d847d1bdc",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "f428a09c8c18c9729aa7821ceaae820b",
"main.dart.js_88.part.js": "e1fe1cfe3af59c9ddb5d302842f1733d",
"main.dart.js_202.part.js": "b0361ac1158003290b32465a1b2486f8",
"main.dart.js_167.part.js": "e25bfc4ed157883360cc35537666c7d5",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "15295d6e1eafcbd61e2ddc4c93a6e4d0",
"main.dart.js_7.part.js": "97e7b3804c598751a8eeb49ecfb6b0f6",
"main.dart.js_228.part.js": "c05cf64d521078d227b53d3dbee4909a",
"main.dart.js_170.part.js": "0e6ee9411e82444a6a6679f4fb6ea0a7",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_27.part.js": "0293b0e8ad4f353116d586734ee2ced6",
"main.dart.js_219.part.js": "fbe939ff593e4d2886387ae8cdca2fc3",
"main.dart.js_116.part.js": "24a98449aa597ebaee9fe952c7b0d4f9",
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
"assets/assets/translations/uk.json": "a88b1c3a097d91249edda40144c5cd3e",
"assets/assets/translations/pl.json": "8a2b467bcc5301150f4ac72290d1bbd0",
"assets/assets/translations/sk.json": "9416fa3e4a44d4a4450ac6dee89df82b",
"assets/assets/translations/en.json": "7c180b167bd195ca8e204928f418cec6",
"assets/assets/translations/cs.json": "a67d234f5f9f037cfde9ba6323312bce",
"assets/assets/translations/de.json": "c0bb019cf7b419dc53884e3a5ef3e6d5",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "df6c9a4131dc56bad8e7c7b78e76eee4",
"main.dart.js_147.part.js": "becdb5e9aa2791984a57aa45c8a1bfc1",
"main.dart.js_220.part.js": "cc96dbe941d38a84c4d17cf4b1dcbaa3",
"main.dart.js_25.part.js": "14fdcd89238b6ea079f37ee1099de2a5",
"main.dart.js_249.part.js": "996e1d6aaaa90965163ee0111cc99e16",
"main.dart.js_123.part.js": "e9a7ecd6a04058a82c67461aa4ac523d",
"main.dart.js_241.part.js": "8e82ca9670d8552b8d6ec710bb4a7d41",
"main.dart.js_8.part.js": "de2b23b364ff99e219ac4214a915ad16",
"main.dart.js_198.part.js": "d509afeae42713ddcea0e872f2f64daf",
"main.dart.js_81.part.js": "ce527b8e69d23d557243d7b7c28d3fd0",
"main.dart.js_205.part.js": "861643a8c81e51faed555bfea255e714",
"main.dart.js_113.part.js": "efec25eef612b9369e4d2379c908dde6",
"main.dart.js_9.part.js": "18c53e6d179ed0cf2b8efae74f3fef5e",
"main.dart.js_99.part.js": "9c139f5f288ecdeeb3ffce3905604147",
"main.dart.js_22.part.js": "3affde9e07d9c292429db80540d3eef9",
"main.dart.js_242.part.js": "8ae55e32076efeae2c2e58037a16c683",
"main.dart.js_86.part.js": "1bac282dd1ef8caf29714dd5f7f2540c",
"index.html": "5b736e6ca94d9949bdb7eff18a2154ac",
"/": "5b736e6ca94d9949bdb7eff18a2154ac",
"main.dart.js_53.part.js": "36b803a000fc2a476bd232f3e179a918",
"main.dart.js_74.part.js": "5c28b5becd94c107d9b0891d0c24e743",
"main.dart.js_235.part.js": "1c8664faba6fa143dddcc451422324bb",
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
"main.dart.js_118.part.js": "904d0417472637dbe55390a86664ce6f",
"main.dart.js_26.part.js": "b9dca5c58b15a7cc613cd06e0f842bb3",
"main.dart.js_240.part.js": "d5d6f5c251744899ddc6eb5fd50bdb43",
"main.dart.js_20.part.js": "7b7cededb4f2bb3c1a10372e02293dd1",
"main.dart.js_189.part.js": "8b4b3280dcc18350ec42f11966ffe293",
"main.dart.js_51.part.js": "28f60e37cf0dc455545fa3b35fd20cf7",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "c42e8507651fd62eb97f527f8b3f19ab",
"main.dart.js_1.part.js": "1f88e75c7446889a517ea056a1e9efbc",
"main.dart.js_160.part.js": "371ef3095b22108126d020afe15ba5f6",
"main.dart.js_120.part.js": "b5e8ed55269db3d12351d809e225b073",
"main.dart.js_63.part.js": "bc0d1a1b982fab88fd5630e54f957269",
"main.dart.js_211.part.js": "4a1644ce7031094f1f55b7a0bb6fb337",
"main.dart.js_45.part.js": "b16e0249a1d70862ace7f9da9ddcf88d",
"main.dart.js_12.part.js": "861b9023d399356fee816c49c6b6459b",
"main.dart.js_221.part.js": "e285d3c1002db967828ce2bb6f39452d",
"main.dart.js_28.part.js": "1bf873cadbbf22ae65318ecb4dcac962",
"main.dart.js_135.part.js": "9d414a2e0346fb85cbc69ed7d16de2e6",
"main.dart.js_6.part.js": "7e701bd55179da6c856c4c4057130654",
"main.dart.js_256.part.js": "8b84dd69814262a6473c1234bc6eeee5",
"main.dart.js_138.part.js": "ae565d4ed5963d223790b302bae98eff",
"main.dart.js_193.part.js": "2c935fd2a66f07f339b318aa21ecab8e",
"main.dart.js_17.part.js": "2c0a33f5f2fa58f0563eb4a56d8d195b",
"main.dart.js_105.part.js": "f7dadee9150635b87aeef399f8383b14",
"main.dart.js_206.part.js": "44e49ef76b3a40b70553239090432aeb",
"main.dart.js_231.part.js": "68e282fbe4ee1f920a1aaf5fea835ee5",
"main.dart.js_43.part.js": "834c33bea96e2562c21f2f911cd334c9",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "3339999cc1b3abae77d893835d09b8fa",
"main.dart.js_15.part.js": "09412451f12dff95ad25f02fc0ad07db",
"main.dart.js_19.part.js": "05f056a05f5c2a942b88438c9af2a777",
"main.dart.js_255.part.js": "1807055aeaaf4d06d3146819e6e530ab",
"main.dart.js_186.part.js": "9db4c8c34d41f1a5d39298d79a1d823d",
"main.dart.js_163.part.js": "6f2354e114bc5f512da9f0c01bd16547",
"main.dart.js_154.part.js": "8e50740e4daf2ec090176cb5b3babeb4",
"main.dart.js_257.part.js": "b7527f249b5c195ad0665edac736d3e3",
"main.dart.js_16.part.js": "87ddbd3e3c9e706ec9e2d29a0c838748",
"main.dart.js_250.part.js": "6b545703fb5b6569c26bf1986a07f7b7",
"main.dart.js_52.part.js": "e3e6f447466eb510eaee4a57621c5953",
"main.dart.js_199.part.js": "a3430b798f02f91eefa767c4e69f22bb",
"main.dart.js_253.part.js": "7202fc41b778e0906aad05f1b19c305b",
"main.dart.js_130.part.js": "f3565f660a1117290500d5bc1225b60c",
"main.dart.js_238.part.js": "dc6803def29c0915ff67af342997640b",
"main.dart.js_197.part.js": "dae7bf7419ee022b9a458a779d496f72",
"main.dart.js_227.part.js": "ed699d8e3fb29c2e89099bd27bc89987",
"main.dart.js_3.part.js": "d84749a22b28c5509bf66e93a7083a16",
"main.dart.js_68.part.js": "47c4b53f0560aee87cb3a709118db24e",
"main.dart.js_38.part.js": "49321b84c8cad5466f7997d93a68fb96",
"main.dart.js_225.part.js": "34727b802e2db605cac8e15bbb20511a",
"main.dart.js_248.part.js": "d104c0014aa7941983a016a070a98c57",
"main.dart.js_133.part.js": "4998adddf329d03052f62246d2d99201",
"main.dart.js_21.part.js": "b6f2cad2399250b8fef573767e215a5e",
"main.dart.js_188.part.js": "9d5bc909c2eb2b4a58bf1fa34312af2c",
"main.dart.js_204.part.js": "136b6321c6bd6468eb0732ed43b48528",
"main.dart.js_24.part.js": "f6b22da21be6f91b5bfe6a81da0b6540",
"main.dart.js_111.part.js": "996571722d7e1065e3b53b7d948ec2ee",
"main.dart.js_177.part.js": "10f6f01467c37d375fce8bdf02d88c69",
"main.dart.js_85.part.js": "d5a39ef13f81cc1bad696064e15f4b84",
"main.dart.js_243.part.js": "c3be4db2498a6e6800f6483af1d0c1bb",
"main.dart.js_212.part.js": "9d929112e73f0a4ee7413f55ab83ea25",
"main.dart.js_114.part.js": "1537167c4839d6d161d43260775dd382",
"main.dart.js_39.part.js": "08138e5eaf1cacb4d41c91d1c166eea9",
"main.dart.js_49.part.js": "dd08250648d764032fa744c5c88cf3ce",
"main.dart.js_185.part.js": "3ca8e55077d347756a443acfc2efc02f",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "105e06bf627ee33587b202360ab47388",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "ea0622e11867bcc644ffcab903b82d65",
"main.dart.js_134.part.js": "5dfd2216cfcb80c90a0dc3dce62f33bd",
"main.dart.js_195.part.js": "8520c0822c0bc07dbe116a9ea2a4425a",
"main.dart.js_44.part.js": "865bd9fbe75618648ed7f9a8f4cbb364",
"main.dart.js_121.part.js": "eb69dc97041749b5cd512f2a6014f7e3",
"main.dart.js_55.part.js": "73fce663c33b445c1b0f650c9622b2e5",
"main.dart.js_112.part.js": "965d1e4f3db690c875e6f0c67e550eea",
"main.dart.js_139.part.js": "84e4b46c325a2a98fe9d18256497d095",
"main.dart.js_143.part.js": "c2dd29bdd8d5b7eeea6c396b8a4f27ce",
"main.dart.js_80.part.js": "3b31da43f5c792c33cb386731bc42abd",
"main.dart.js_252.part.js": "30426957a12f19e1fd29bd53cd7a4e10",
"main.dart.js_233.part.js": "5a91bf5abfa24675fad2fd3b6cdad312",
"main.dart.js_30.part.js": "a4183038790e318014af265a1cd78270",
"main.dart.js_78.part.js": "0f6e5a699e51d401cd7c5c88dd6eca77",
"main.dart.js_136.part.js": "c41b0e166a004856afe6bc859608b256",
"main.dart.js_168.part.js": "5e01bbcf89c30ab99c6c39104d0dc5f9",
"main.dart.js_47.part.js": "520d40ac2221f8b1d935472e4f3165ee",
"main.dart.js_95.part.js": "5cbe2345b13414a88302f6d96e20a043",
"main.dart.js_29.part.js": "163f74c3ec78a8d9cc612d4dc09d068e",
"main.dart.js_61.part.js": "8ce587875d75cfde2909577b8caf210b",
"main.dart.js_58.part.js": "a54efda6011370c3e5af11f33b109737",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "fcd5079ee0ab38f87a226ef87bb06db3",
"main.dart.js_54.part.js": "5ad06235293710295c50116301f44622",
"main.dart.js_79.part.js": "1d728b61d999edb3180873a9af9993e2",
"main.dart.js_109.part.js": "ba8b91ae29bc16c18f4d96a693578cd0",
"main.dart.js_92.part.js": "c9375351cb06340404068960dff4e01b",
"main.dart.js_224.part.js": "3ab00139df5222f14842825e6cfce29d",
"main.dart.js_93.part.js": "7d73781935a63380500c99ab0d686c40",
"main.dart.js_223.part.js": "86d6311ff064d621821f124e8cc4e1bf",
"main.dart.js_11.part.js": "024972d36234cb851f36278959c051ef",
"main.dart.js_125.part.js": "59088b691798e52909faf35e43a711bd",
"main.dart.js_131.part.js": "ad46182b0a3a0104ee9eec39e008d8bc",
"main.dart.js_226.part.js": "d34b3c0b416b4f641655f54f883e6788",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "5a762bb350aafda73b4289693e9ecd72",
"main.dart.js_100.part.js": "9eb8cb9a6be3ba701b9b3dd29ea456c4",
"main.dart.js_70.part.js": "5b8a44d071b2a5c675fee86c49b454aa",
"main.dart.js_187.part.js": "c477a97d9d387f9a3011b56104fd0de2",
"version.json": "931143561f8c3501c71e062ebbae3b6e",
"flutter_bootstrap.js": "fe66adf4ce62d5a8a1e6e82e3498c688",
"main.dart.js_191.part.js": "a0eca570918f054b799389ccda340fb6"};
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
