'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "e3aee951b1927137d127bb35c231c7b6",
"main.dart.js_162.part.js": "8fa87902ae1ff78086e6df87c1ab60a8",
"main.dart.js_117.part.js": "a6ea9e077aaf46ef01d12619760f9f6f",
"main.dart.js_182.part.js": "a5b07cc7cd2c213fbb15b08e6eeb7f4d",
"main.dart.js_244.part.js": "80fe315e1ab6e308edeb8e0ab73e36f3",
"main.dart.js_83.part.js": "561a995e03ad6faa4c9c07aea78f2506",
"main.dart.js_254.part.js": "c20566c67fb5202099fe5d9cb0e1f9e3",
"main.dart.js_176.part.js": "867de7ba264d793e4263acaf6313d337",
"main.dart.js_96.part.js": "20d5ea5ad09ff7608b877e6403daaf83",
"main.dart.js_245.part.js": "88a2fb80d07ef114c6463ee35ea4bc11",
"main.dart.js_87.part.js": "2906d82195958fe2d72d4f3c087c9a87",
"main.dart.js_126.part.js": "9d2ace1e0c5a8534de6621c0cd2cf95c",
"main.dart.js_129.part.js": "540c277a8dd70f0715bc6a1594d9fbd2",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "87f255c292f307b08bee906be9e63cf3",
"main.dart.js_218.part.js": "eaf2c5c0a1800ce45fe4166325b024af",
"main.dart.js_172.part.js": "1d139510bfb9b25768b21c8fde0b0345",
"main.dart.js_142.part.js": "fb0df7909bd37f4bc3ccb8a0a6f9c608",
"main.dart.js_40.part.js": "c50970b685ddbcc4c1e274f7637bae93",
"main.dart.js_209.part.js": "d1d4ea4ea0e62e39d746e221143b042f",
"main.dart.js_115.part.js": "aeae5942ca2c20559544d05bf56dd9c1",
"main.dart.js_10.part.js": "cead3f8bcf64c8a43bcab7743caee29b",
"main.dart.js_84.part.js": "b7153d412b6f6300d4073948083f4475",
"main.dart.js_122.part.js": "dc15706603436b2e2a6cf385439bfce4",
"main.dart.js_103.part.js": "c69bdf9602a006546fd605c9e37078be",
"main.dart.js_230.part.js": "f038ad5dd50f17ff9a36ddd268362d59",
"main.dart.js_213.part.js": "e4e09ff71eb9a120634a44540208633b",
"main.dart.js_41.part.js": "3fe283de9a833569462d7135eaf268d5",
"main.dart.js_89.part.js": "5fdabfe216430002a1b5ad34f292cc6f",
"main.dart.js_146.part.js": "31783efa5097d78c3c966ff410552f6a",
"main.dart.js_37.part.js": "6612fe102619c1c105be4b1bc4f4cd6b",
"main.dart.js_132.part.js": "4b7ab2412d599e5350bd896c0d2c3a5a",
"main.dart.js_165.part.js": "b612f056661a219e522eab3c300c023e",
"main.dart.js_127.part.js": "d622127c06fb2b6477ea5474219cf69c",
"main.dart.js_161.part.js": "69c7327a5f5dfba73c607ff559a244e5",
"main.dart.js_175.part.js": "f43506d8e16c1fdf2ed37059be363db8",
"main.dart.js_239.part.js": "129916638434a9e116f43988b1aae823",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "a2ed1680bb47e71b7f85649295ee12ae",
"main.dart.js_64.part.js": "c87ad86595af1205237c51882c489d0e",
"main.dart.js_169.part.js": "5e83fda87870b8ce8692f1b55b6dd457",
"main.dart.js_13.part.js": "c3d3a1bda196465b08c175c2c3f5aaae",
"main.dart.js_246.part.js": "f25bb40ba19de5d3c37b716af64a2bc1",
"main.dart.js_174.part.js": "8d19e99145ac863413b249eaf0fa47a9",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "3b710b836f9664194bc684db744506a5",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "990966848c6eed146e4a5218c83235bf",
"main.dart.js_119.part.js": "ed2dcdf43c607c9b61203c83f8af45fd",
"main.dart.js_18.part.js": "f0547100acc612b8759e5bd07c607c19",
"main.dart.js_35.part.js": "c4d7f36ecff4b7f636ac4ee8c5fdc245",
"main.dart.js_200.part.js": "567debcabbeb74266a79059cb976869c",
"main.dart.js_73.part.js": "8e1f63edc7cb1a661f0a9582748321b4",
"main.dart.js_77.part.js": "e6531b2c7bdafd5dacdec01fed614ad8",
"main.dart.js_149.part.js": "03add47e8b75dc7c88771e5d43862514",
"main.dart.js_67.part.js": "9a5e06384731cff748f7a78fe72da9b5",
"main.dart.js_208.part.js": "c5db83f81c3476f20246ae1d297cf337",
"main.dart.js_82.part.js": "262e091bc4f0ad89d905508c7feaf7ad",
"main.dart.js_173.part.js": "fa580ae0c514c1f116dcd6f73ca1d9cc",
"main.dart.js_62.part.js": "237d470826cb5e52833ba125eb7bc339",
"main.dart.js_259.part.js": "010a51df17792ec24a0ba8f9ae4f71ad",
"main.dart.js": "cf4d662e60836afeecfc29afb99b4cc3",
"main.dart.js_232.part.js": "dc67bf13636efee0720b3bb6ee88299b",
"main.dart.js_148.part.js": "31f9f29f745e0e09063552bbbab82a18",
"main.dart.js_124.part.js": "0885a1c7d4deff7da19264141cdfd3cf",
"main.dart.js_97.part.js": "f794f9e4b2bb508fea02714fd8cb5287",
"main.dart.js_192.part.js": "b3a2dde02f790e522fd8243c1bfada4b",
"main.dart.js_91.part.js": "25d872a1e91b0e6fd781f2cee0489ec3",
"main.dart.js_145.part.js": "d7df41912b08153c5ff19e47a1329d0a",
"main.dart.js_229.part.js": "80590ac9ad1bf73c6d11bc490b465d62",
"main.dart.js_57.part.js": "a5c159f571d5296e71bed1421616bcf8",
"main.dart.js_190.part.js": "fcb208ff0bf9c0bd64d199bc9cc5de16",
"main.dart.js_104.part.js": "8cae6daef125fcf8b8bf5e5d82ded369",
"main.dart.js_201.part.js": "28abda1b7beab635edb175f360aea273",
"main.dart.js_196.part.js": "11b3b9216f1f9dfffb62afbdcece8aa9",
"main.dart.js_181.part.js": "35f1efaceb6307139329f11f3e340392",
"main.dart.js_108.part.js": "9869dc8fba6661950f7d804d145d2b22",
"main.dart.js_33.part.js": "470d6e63b87d9259e9dd5056aadc42e7",
"main.dart.js_217.part.js": "0d3c2597aff37a2c7be6e6d2aa534de1",
"main.dart.js_34.part.js": "2eac4015755924e435af0bc15499f48e",
"main.dart.js_210.part.js": "e4292d48e91d8d651b4c8f1d93965438",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "f428a09c8c18c9729aa7821ceaae820b",
"main.dart.js_88.part.js": "ec54ad0e420048b60bdda6585d1c0660",
"main.dart.js_202.part.js": "dfb722c9b20c2fbac45e4c6760289d86",
"main.dart.js_167.part.js": "e25bfc4ed157883360cc35537666c7d5",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "15295d6e1eafcbd61e2ddc4c93a6e4d0",
"main.dart.js_7.part.js": "97e7b3804c598751a8eeb49ecfb6b0f6",
"main.dart.js_228.part.js": "c05cf64d521078d227b53d3dbee4909a",
"main.dart.js_170.part.js": "1b08346fe14defda903ee396ce72cc6f",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_27.part.js": "9bcfd89c28a2d508f303ddb478db51a0",
"main.dart.js_219.part.js": "4228db41247e52b370eeea900206b7f6",
"main.dart.js_116.part.js": "992834542efabe468e0ed9889c4e6595",
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
"main.dart.js_123.part.js": "623ae3e1f5d64f7eba4772b5c23cdd35",
"main.dart.js_241.part.js": "8e82ca9670d8552b8d6ec710bb4a7d41",
"main.dart.js_8.part.js": "de2b23b364ff99e219ac4214a915ad16",
"main.dart.js_198.part.js": "d509afeae42713ddcea0e872f2f64daf",
"main.dart.js_81.part.js": "d72cd07114eb63aa01c3bb988454011b",
"main.dart.js_205.part.js": "c980188b41f288fed344e35be24c7f8b",
"main.dart.js_113.part.js": "830b7ab3fd696c5d6c801baa6b58c91b",
"main.dart.js_9.part.js": "18c53e6d179ed0cf2b8efae74f3fef5e",
"main.dart.js_99.part.js": "297d8702dadfa20a1667173cf96321f1",
"main.dart.js_22.part.js": "ef776df52e8eba967e80a7aa05fd26f8",
"main.dart.js_242.part.js": "8ae55e32076efeae2c2e58037a16c683",
"main.dart.js_86.part.js": "1bac282dd1ef8caf29714dd5f7f2540c",
"index.html": "44fbf7b8ba75bd677127887ddbf909b3",
"/": "44fbf7b8ba75bd677127887ddbf909b3",
"main.dart.js_98.part.js": "61a04e7a0ad0870feb3d6100b9a0f9b8",
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
"main.dart.js_118.part.js": "908f4b1b075f2fae278de3944f91e063",
"main.dart.js_26.part.js": "82c3c818b31c3ff9112ba586f499b562",
"main.dart.js_240.part.js": "d5d6f5c251744899ddc6eb5fd50bdb43",
"main.dart.js_20.part.js": "7514ebae2c57f6f96b5f07931009b694",
"main.dart.js_189.part.js": "8b4b3280dcc18350ec42f11966ffe293",
"main.dart.js_51.part.js": "e33672477f3e02d2d5ca7d3cee3820ab",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "c0c62c1ca8d8e285627c75c1dcfc7b8f",
"main.dart.js_1.part.js": "af40f432580a46ef0e6bd21c985c6470",
"main.dart.js_160.part.js": "371ef3095b22108126d020afe15ba5f6",
"main.dart.js_120.part.js": "30338ff09a814230a11067b35faafd6e",
"main.dart.js_63.part.js": "b2e2cb7c1c735312e20d8aedca7ff790",
"main.dart.js_211.part.js": "923ee163af905301531ca3b26c6533ab",
"main.dart.js_45.part.js": "96b795ec5202fbcc3026d23a1d2b02b9",
"main.dart.js_12.part.js": "861b9023d399356fee816c49c6b6459b",
"main.dart.js_221.part.js": "e285d3c1002db967828ce2bb6f39452d",
"main.dart.js_28.part.js": "1bf873cadbbf22ae65318ecb4dcac962",
"main.dart.js_135.part.js": "3c6990536e3d27d7a9beb197eea348ff",
"main.dart.js_6.part.js": "7e701bd55179da6c856c4c4057130654",
"main.dart.js_256.part.js": "8b84dd69814262a6473c1234bc6eeee5",
"main.dart.js_138.part.js": "e8910d5789b64f4ff8b5b4fc5333fdf8",
"main.dart.js_193.part.js": "2c935fd2a66f07f339b318aa21ecab8e",
"main.dart.js_17.part.js": "210386f046113f14f5657629547f9778",
"main.dart.js_105.part.js": "e9dba733550bae47614129f241ac6f03",
"main.dart.js_206.part.js": "44e49ef76b3a40b70553239090432aeb",
"main.dart.js_231.part.js": "68e282fbe4ee1f920a1aaf5fea835ee5",
"main.dart.js_43.part.js": "cd0fe37af6df6e9f4d9cb488d12db886",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "3339999cc1b3abae77d893835d09b8fa",
"main.dart.js_15.part.js": "d61b368a0e224cda1c0837f4211c991f",
"main.dart.js_19.part.js": "05f056a05f5c2a942b88438c9af2a777",
"main.dart.js_255.part.js": "85e5e9aae83ca60420b2617f13b7d02b",
"main.dart.js_186.part.js": "9db4c8c34d41f1a5d39298d79a1d823d",
"main.dart.js_163.part.js": "3ac68afa692b6664c994f6fa1b747970",
"main.dart.js_154.part.js": "dd256ed3780204b0f0babcbdad6a7878",
"main.dart.js_257.part.js": "e610e3b79efbdc2edd777c02036cff40",
"main.dart.js_16.part.js": "87ddbd3e3c9e706ec9e2d29a0c838748",
"main.dart.js_250.part.js": "b1c1ba494309a00281a2cac04a6926e2",
"main.dart.js_52.part.js": "e3e6f447466eb510eaee4a57621c5953",
"main.dart.js_199.part.js": "a3430b798f02f91eefa767c4e69f22bb",
"main.dart.js_253.part.js": "7202fc41b778e0906aad05f1b19c305b",
"main.dart.js_130.part.js": "7bffc85878fb8c38610bb8971f76e17a",
"main.dart.js_238.part.js": "dc6803def29c0915ff67af342997640b",
"main.dart.js_197.part.js": "ff4cd5a3198df0be851e2789d0da2fc4",
"main.dart.js_227.part.js": "b17f7babbcc22802b3afd74f82b681b3",
"main.dart.js_3.part.js": "4d18720c11c6bb339d0da9f50e81e4db",
"main.dart.js_68.part.js": "cb89f2b3c314a23f4097c463c0a5ec8a",
"main.dart.js_38.part.js": "63635bfd00659f5a643682c393f9a668",
"main.dart.js_225.part.js": "cfc0ff164cffbd2f6fde337970a3fd65",
"main.dart.js_248.part.js": "d104c0014aa7941983a016a070a98c57",
"main.dart.js_133.part.js": "00cec48e8adb8cbd0d94eef51fca51d5",
"main.dart.js_21.part.js": "f700dbda00b31b9b5bb0835b8845d874",
"main.dart.js_188.part.js": "1be402b884db6dd0adc597c0cc0039fb",
"main.dart.js_204.part.js": "ae323c552ab78458bf57ac25131f355e",
"main.dart.js_24.part.js": "490e7468724ac1360fbbb4302f0b32b3",
"main.dart.js_111.part.js": "a132a42b37918b30efffbf1c7291b983",
"main.dart.js_177.part.js": "4e2f1c08f680f8ce829e1f656d62139f",
"main.dart.js_85.part.js": "012e77d3c64f98e2fba3909533f6f5f6",
"main.dart.js_243.part.js": "c3be4db2498a6e6800f6483af1d0c1bb",
"main.dart.js_212.part.js": "c1cf818e251c15352760b7b6237433da",
"main.dart.js_114.part.js": "e7aab60874e4d74f225b975809401b70",
"main.dart.js_39.part.js": "08138e5eaf1cacb4d41c91d1c166eea9",
"main.dart.js_49.part.js": "dd08250648d764032fa744c5c88cf3ce",
"main.dart.js_185.part.js": "3ca8e55077d347756a443acfc2efc02f",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "105e06bf627ee33587b202360ab47388",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "2a39583ba879e86bad7f37e8ae75f451",
"main.dart.js_134.part.js": "a2a4849e4e49513f9ab9412ecc1eb1f7",
"main.dart.js_195.part.js": "8520c0822c0bc07dbe116a9ea2a4425a",
"main.dart.js_44.part.js": "8bb040fa91ac101317494cdae70cd925",
"main.dart.js_121.part.js": "f8fb3bfae055d65a49d3cf6344e5cb66",
"main.dart.js_55.part.js": "73fce663c33b445c1b0f650c9622b2e5",
"main.dart.js_112.part.js": "bf0b17b738d78956f4226dbf6331bb48",
"main.dart.js_139.part.js": "84e4b46c325a2a98fe9d18256497d095",
"main.dart.js_143.part.js": "c7ef40e4846f9b38b5e8e9916bc3935c",
"main.dart.js_80.part.js": "3b31da43f5c792c33cb386731bc42abd",
"main.dart.js_252.part.js": "7e93faac07658ea39610d4e0700aae29",
"main.dart.js_233.part.js": "080875197e7af81d24abcc52fa868629",
"main.dart.js_30.part.js": "a4183038790e318014af265a1cd78270",
"main.dart.js_78.part.js": "0f6e5a699e51d401cd7c5c88dd6eca77",
"main.dart.js_168.part.js": "6906b3c87239fb2aa5db6e82a7b563d5",
"main.dart.js_47.part.js": "ffad0ca515091e23a4fdb6c18a2b7943",
"main.dart.js_95.part.js": "5cbe2345b13414a88302f6d96e20a043",
"main.dart.js_29.part.js": "163f74c3ec78a8d9cc612d4dc09d068e",
"main.dart.js_61.part.js": "c19dc63aa2f52bfdae6acab825eac313",
"main.dart.js_58.part.js": "bd49b8c3822be074d016ef7b8e19db8a",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "ee5cc5a6a1decfacea13274c363208e6",
"main.dart.js_54.part.js": "5ad06235293710295c50116301f44622",
"main.dart.js_79.part.js": "c3bd73d0a435dec1665121c187e4c97c",
"main.dart.js_109.part.js": "93e9a33be6a06fbe4eff95286e81f898",
"main.dart.js_92.part.js": "45be86cc19e2470d1c6d446bce59134c",
"main.dart.js_224.part.js": "3ab00139df5222f14842825e6cfce29d",
"main.dart.js_93.part.js": "31353efb18eb472d92c176b37a22b6fa",
"main.dart.js_223.part.js": "c9d3d2f35f9319b7d6d423c3e255d3db",
"main.dart.js_11.part.js": "024972d36234cb851f36278959c051ef",
"main.dart.js_125.part.js": "bbd1d7f0667f003da734d2a4499f218e",
"main.dart.js_131.part.js": "65df0bc36afdbe1376de36e7b4d1e84e",
"main.dart.js_226.part.js": "4029d2676bd62d17cd62369ccffca496",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "5a762bb350aafda73b4289693e9ecd72",
"main.dart.js_70.part.js": "656ba38b8ef8a9aef0cdfa6f7182be5c",
"main.dart.js_187.part.js": "c477a97d9d387f9a3011b56104fd0de2",
"version.json": "931143561f8c3501c71e062ebbae3b6e",
"flutter_bootstrap.js": "528c9392a70ac66382a47bd7bcdfabf5",
"main.dart.js_191.part.js": "a6f696b5b62f646f256b6da261a8f428"};
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
