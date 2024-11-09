'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "e7c8ae3ad16628e8b06c5e1263b156dc",
"main.dart.js_117.part.js": "e264ef844f727b78d0ed2d22de560a56",
"main.dart.js_182.part.js": "ebca5f3802439132f021d931008ef361",
"main.dart.js_75.part.js": "3ad3c2fe8e6f1cbd52302f4ac24e5524",
"main.dart.js_83.part.js": "95564cbae2ec44659cef0b58419e0f6d",
"main.dart.js_254.part.js": "057374664031a7de944fa2861d20c989",
"main.dart.js_176.part.js": "b6310a04ba84f3f15a914ae834777d62",
"main.dart.js_96.part.js": "fbe6f16746f6ad9aa8e80482372b7ed5",
"main.dart.js_245.part.js": "e119673de110df40ff1a9779477eecd0",
"main.dart.js_87.part.js": "36b0f96a98fe681d6e1026ed4fda7617",
"main.dart.js_251.part.js": "4b5ff3ae2b645ca77f42aa136f0ff9ef",
"main.dart.js_126.part.js": "f5178d7bacf84afc13ad4f43e6fe0545",
"main.dart.js_129.part.js": "bd43dfac92571fe9aedcabd87daf9653",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "f62203901c3f683e01c9a13547221260",
"main.dart.js_218.part.js": "d3d5d7233ca975c2a2302d130d3caa44",
"main.dart.js_172.part.js": "ac2c065cd1bfdaa678a9acf775451dfc",
"main.dart.js_40.part.js": "11ac6763105f37e0cd371c6d2cc30aa3",
"main.dart.js_115.part.js": "fd76e666211771fb13868d88cb741df0",
"main.dart.js_10.part.js": "9ac8960e6d2e5f526e0c563da7e9edee",
"main.dart.js_84.part.js": "ab882a04a574585f016fb4f5fa93384b",
"main.dart.js_122.part.js": "922d0424450e62a345f225e387f6f6e5",
"main.dart.js_213.part.js": "b4cda3f424c470d663be998d29316c3f",
"main.dart.js_41.part.js": "92657fbb227f71d528e4ba8923d78ffd",
"main.dart.js_89.part.js": "e38a37d3d16d01c1d95547f2f63a1f3f",
"main.dart.js_71.part.js": "dd040a89e248070fbdf18332e0823978",
"main.dart.js_146.part.js": "0dd6b6e53051b9c164c0287d1ea60d08",
"main.dart.js_37.part.js": "429e73b907604157f6d4a862788d7175",
"main.dart.js_132.part.js": "a8488f673914e78bd842dd6342d37857",
"main.dart.js_165.part.js": "37484b6f5e9f7b648bc9337fe13adde6",
"main.dart.js_127.part.js": "6c1ce55bc0eb932e622bc77106edbc3d",
"main.dart.js_175.part.js": "b0299d929d6e0de0cff320f94f855dd2",
"main.dart.js_239.part.js": "2796210448df5576e63844cc9c22e58d",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "e3ce0ba3dae57c623e924add13b6a30d",
"main.dart.js_216.part.js": "fd562a4fa4cd7ce5e55b8045889c9c61",
"main.dart.js_64.part.js": "e3c8b2e56f531c8988771f4b490082d9",
"main.dart.js_169.part.js": "04d9215b7d2d4372b6eff0060d0340f5",
"main.dart.js_13.part.js": "5c37481dc4aeeafaf5c3fff1153f0fe8",
"main.dart.js_246.part.js": "ee580e7239f49669d0b9aa6832aa8772",
"main.dart.js_174.part.js": "9a794fa5cb93ae251d6c1ee06aec29ee",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "922397310a96677e2bbbdeebde3068da",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "7ba9f65b4300cab4bcb56f01536196c8",
"main.dart.js_119.part.js": "7ed3d4f17c95cddbbefc36d3a4c9854c",
"main.dart.js_18.part.js": "81de2d2824b3dd99aec0b49fe5d9ed3d",
"main.dart.js_35.part.js": "6784958d19d246e1100ff9aa8bae7c25",
"main.dart.js_101.part.js": "88bcc95ee9413507cf4523995995fa7d",
"main.dart.js_77.part.js": "042fc4d5de602b5e2a0d9326281a6f1d",
"main.dart.js_149.part.js": "8479f0028ad300433b1189efe67a71b9",
"main.dart.js_82.part.js": "fb3ae5703285c39afeb8ae9c81c59cc5",
"main.dart.js_173.part.js": "3b11783ce61c99cf1880760b74039b92",
"main.dart.js_106.part.js": "d1020f392a9df8aa70438891d288fa23",
"main.dart.js_62.part.js": "7e71cfcc5226a4a1d33ea3f1e172a1df",
"main.dart.js_259.part.js": "f39fd4e37d29e4e3a158d4e6a9ee22bf",
"main.dart.js": "a1b1d16055cb13ac0714a967a5c52b25",
"main.dart.js_222.part.js": "6f95b21960304965fc6b81234bdf4d60",
"main.dart.js_232.part.js": "5bb399c936765208e3defae44c613e06",
"main.dart.js_148.part.js": "4e5a76a7d45d196e885cf041c8f2834f",
"main.dart.js_124.part.js": "b70323613e197620ccfb70ea6378aa40",
"main.dart.js_50.part.js": "61c359c24f2188e0b22ff3ef07d18726",
"main.dart.js_97.part.js": "5c4f84e07f121e3f0fbc37ba6332f548",
"main.dart.js_192.part.js": "e54441e9f430bc5ab97b561039bf3dbd",
"main.dart.js_145.part.js": "97eea5171e8db644e1d5d46a5d9c9083",
"main.dart.js_229.part.js": "8552cadb91bf2f3f873c006ac02aaf86",
"main.dart.js_201.part.js": "434d27ef622022b0f65bf336c2131163",
"main.dart.js_69.part.js": "a09fb8153c19a2ca3257db9d22ce6231",
"main.dart.js_196.part.js": "cca8fad75bcf7752760cc79cc1f668a7",
"main.dart.js_181.part.js": "a5311b777742ddabad4068ce110e84c3",
"main.dart.js_108.part.js": "b0bb9b9063bca1f356489de4208798f1",
"main.dart.js_158.part.js": "e1859a633c14f1132ec0e3bd57f785b9",
"main.dart.js_33.part.js": "bfcb93d94c3965cf33df6c60a429a54c",
"main.dart.js_217.part.js": "4d666a3dd2cb3ebab35b210599acf252",
"main.dart.js_34.part.js": "fb69595ad4075ec0901e2dbe320632fc",
"main.dart.js_210.part.js": "12aa3d9c71d285907fb3537bf9de8056",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "c41b7cf22fdd8500d75275dcc4b845e8",
"main.dart.js_88.part.js": "6b579a6d1a5ed1682bce601c1544df34",
"main.dart.js_202.part.js": "33e347336995e49b4477446068d58517",
"main.dart.js_183.part.js": "da2bcc7e7813bc38c57de3a163fdeac8",
"main.dart.js_167.part.js": "e0cb20932c337d5191fbbce26871c5dc",
"main.dart.js_203.part.js": "7b0fd14101a17e823ad6d9ebddeeaa15",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "0c3077fe71c6b6d16b718aceb35b8914",
"main.dart.js_247.part.js": "d95c88a9ace070c095541063f7ebaa4a",
"main.dart.js_7.part.js": "c511fbb5c401a463b1887c94aec9315a",
"main.dart.js_140.part.js": "994b4f4235bdce13e2721087f657264c",
"main.dart.js_228.part.js": "ee4176ad6ad15e2175e57a588a333ea5",
"main.dart.js_170.part.js": "58f950f3c64cdc2df2aec07d76d8c840",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "871a9738d489e47eedcbbea5ac0526b8",
"main.dart.js_27.part.js": "7031fc589f0429b5bbd13bff4192b576",
"main.dart.js_156.part.js": "e7886695adeb36d07e8ea39e224b3503",
"main.dart.js_4.part.js": "5c1d38371eea2f423fa78d28d1c468b9",
"main.dart.js_116.part.js": "e23f2ba4438b17b709c6300e59b49eb7",
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
"main.dart.js_147.part.js": "222d51f64cb08f3ac71aa4ecf7a210eb",
"main.dart.js_220.part.js": "32d3611ccf8a2768ee2c4d22385f1bdb",
"main.dart.js_25.part.js": "c6712738276323749442f5fc4254a108",
"main.dart.js_141.part.js": "df6052051c859f3abd55470a161e29d9",
"main.dart.js_249.part.js": "8a19209e091da340627a2ef4359f7430",
"main.dart.js_123.part.js": "5d5a42b4e0e164b9213a279a859a4fd9",
"main.dart.js_241.part.js": "5831804beeefbe2ec7bca3157e30ffcf",
"main.dart.js_8.part.js": "e663ff475726f64088b2c7a13136178d",
"main.dart.js_198.part.js": "91f7bfd8c519a841497c306416d9c448",
"main.dart.js_81.part.js": "abc6fb0360284d2d742933e487faa879",
"main.dart.js_205.part.js": "6acf3d9727b510d91485b23fee3d0bce",
"main.dart.js_113.part.js": "940f6c748b3d12224c13414a6e0c6305",
"main.dart.js_9.part.js": "94b881aef58f9796b7bb969dc4ef0bc4",
"main.dart.js_22.part.js": "0e6e9f0ef04a249eac35c793eb573b2d",
"main.dart.js_242.part.js": "5b78b77bcab8798b44e5a7c708105e77",
"main.dart.js_86.part.js": "ea9599a07a03bbcd84fdfad0c21cd6ee",
"index.html": "fb9bf57c6346f804736a88f1aafc7338",
"/": "fb9bf57c6346f804736a88f1aafc7338",
"main.dart.js_94.part.js": "cd1e2c260f00f7dec9f5c70d24922e4b",
"main.dart.js_98.part.js": "ce40e61a2fee79c6bef83363c735e3c7",
"main.dart.js_53.part.js": "ea0b750ea54812b726377dad858cfd3b",
"main.dart.js_74.part.js": "b68bb7616d96a222a56dcab898df332a",
"main.dart.js_235.part.js": "46092840c4dd37e5ecfd91ab98937959",
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
"main.dart.js_118.part.js": "20619765e59f39d7cad482752c83176f",
"main.dart.js_262.part.js": "ed573f21c4aecb82ee6372e2166daa24",
"main.dart.js_26.part.js": "a2250f233ccd284f216e956d91e40386",
"main.dart.js_20.part.js": "39f71754d4e61ea2bfec1de502cf6205",
"main.dart.js_214.part.js": "8590b1f83713153e9b1544d559f9112e",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "b14d36ff91d6b674b1e1efbcc115f257",
"main.dart.js_1.part.js": "2ae92c89fdd306d796229f7962e5418a",
"main.dart.js_120.part.js": "9fb908573b65e70758c47b4d04879c35",
"main.dart.js_63.part.js": "7f952532960d92208b2fbcc347e358d8",
"main.dart.js_211.part.js": "1638c0d46832902543f84317051ed74e",
"main.dart.js_12.part.js": "42761d9d5f95d464736a2ab23e98ae52",
"main.dart.js_157.part.js": "e1850502513b9068d2633c85a4365d00",
"main.dart.js_137.part.js": "f64a80315e985351b7cac44d3e963c1b",
"main.dart.js_28.part.js": "3c2a5df050aa5fc71479fe692fc8bfdf",
"main.dart.js_135.part.js": "68bc6b8d3a7bb7746aef60c87616b825",
"main.dart.js_237.part.js": "e0bfb0fa3358dda31ad6df36e458cb06",
"main.dart.js_138.part.js": "811c4c557b7ec5a43b8ac98387dbd9df",
"main.dart.js_193.part.js": "d5d608c2b50705d40b029ccf96a02aa6",
"main.dart.js_17.part.js": "a14680181c966f9bf9fea9e27b01ddda",
"main.dart.js_105.part.js": "4aed1982948ea8b1ad286c8829c1b727",
"main.dart.js_206.part.js": "916ba7a66d5153df282e9303c790bb40",
"main.dart.js_231.part.js": "8303cef377ba7165e52a8f7e0cecb2e5",
"main.dart.js_43.part.js": "31792942f366def53353602b89a3f31e",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "0e3a58ab9866ede72631996356270cea",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "0ea5eb84a455a96c84122cb3a016a651",
"main.dart.js_15.part.js": "df1a449acd5f7b68e1ba0cf42eb3c442",
"main.dart.js_151.part.js": "ef986f79e4d1b5b38f77b578478f2cdc",
"main.dart.js_19.part.js": "e85cc3844dafdf769b130b3cf0924af0",
"main.dart.js_255.part.js": "1740efa4a0ddb8c054767879a5a4fb22",
"main.dart.js_186.part.js": "2dca6f673ceda07ef15d74ca8cf39d86",
"main.dart.js_163.part.js": "13bfcb5c27d7c915b4b852afe1f0c980",
"main.dart.js_257.part.js": "30b40b18f185ccd627d8c1e85c95b958",
"main.dart.js_16.part.js": "ae3ef37a3e352554bd387e15e750feca",
"main.dart.js_250.part.js": "7b9e0db90d50a8d8a6dc9b61a36e4682",
"main.dart.js_52.part.js": "a45422539c3e538bed834691e6775b46",
"main.dart.js_199.part.js": "f0227ee243a13916907bca528c184516",
"main.dart.js_253.part.js": "d587e9ce417a92d48505b47e25b5b009",
"main.dart.js_130.part.js": "7f843e3a47a89a95399746ba96fe3b54",
"main.dart.js_238.part.js": "c0da00688d4ecd1e9d9afc0dc16876a4",
"main.dart.js_32.part.js": "6616f2ec1b76f39898c187d6ba36c960",
"main.dart.js_56.part.js": "23dfdc038bba6b7834ab4e339367bb22",
"main.dart.js_3.part.js": "5f638561a1d9cd1b26d253fff9d15497",
"main.dart.js_68.part.js": "fa796771f47e76c7869d04ae91ec5ca1",
"main.dart.js_38.part.js": "ee0de492399d8d214b7b1caf3999ba9f",
"main.dart.js_225.part.js": "54d0db85d488d7e49ae1d3261f0f3feb",
"main.dart.js_248.part.js": "f382f09dbabd727c2caf05e2cece838c",
"main.dart.js_133.part.js": "d5fc7192d9c49b81a3b124b277be6dab",
"main.dart.js_21.part.js": "174061e54670a98a92d74b173c6230a4",
"main.dart.js_188.part.js": "4a732dd9e9302a61a9e0a75013c1c17a",
"main.dart.js_204.part.js": "78b7329c6a2cedd53d454bd993c9d468",
"main.dart.js_24.part.js": "3f09e3c7fde13d0ffaaa9fde2313bf75",
"main.dart.js_90.part.js": "36ecc2e9b54612a8cbea16b02e24fe8c",
"main.dart.js_111.part.js": "751b532e3e39adf9ea7fd3cc4e75f109",
"main.dart.js_177.part.js": "e60f743e98a71da1be978652fd79be0c",
"main.dart.js_85.part.js": "79ee2def838966c59a019f02717c4cb7",
"main.dart.js_212.part.js": "2692692a5bacba07116a923f6686c70d",
"main.dart.js_260.part.js": "34b74e692337c9e0f14e6a251e12581d",
"main.dart.js_114.part.js": "eb20de4a667798f1397f7794fb7f7596",
"main.dart.js_39.part.js": "8c59108b61b3970230a1d16d84bbc67b",
"main.dart.js_185.part.js": "b2b0aa71b2197324e3fbe62178bb9f49",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "38a7d2eacba92d87d40db79d52b6282b",
"main.dart.js_171.part.js": "a46f0f99d477d577ebabc66c84860dc5",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "bed2df621cb57da4fa825cb0df345005",
"main.dart.js_195.part.js": "0f12901656577adf535b667ce7a124fc",
"main.dart.js_44.part.js": "66a4521434eac3c3afdafe133d61bad5",
"main.dart.js_121.part.js": "1ea38356946368d2cf8ba821ffafa201",
"main.dart.js_55.part.js": "d48ae6fbae9b0902a33835004cc51c71",
"main.dart.js_215.part.js": "a5840c920a6a1495a375a8d79a6bf1ed",
"main.dart.js_112.part.js": "996f265ba505c26e53dfa93d10161c46",
"main.dart.js_80.part.js": "22e61c3df2064b337a04cecfa086cab1",
"main.dart.js_252.part.js": "953f0842fa422872d643a9d80e9bd08e",
"main.dart.js_233.part.js": "39e2aef6ceb47ca8d7b8694b779e2b65",
"main.dart.js_30.part.js": "83f2423cc18783cd9a7b021c7b89716a",
"main.dart.js_78.part.js": "819b550ed50bdd664e5aac12f98f24b6",
"main.dart.js_136.part.js": "ec97a1c45c1e4948e1a4922344b9f8b1",
"main.dart.js_168.part.js": "660e56c853c04f84ed0f59e7baf4d1da",
"main.dart.js_59.part.js": "1017f117abc21f42081b645333b95357",
"main.dart.js_47.part.js": "aa8703638b4b854d8d694748a1a0d34d",
"main.dart.js_107.part.js": "22187b962131fd04468b99dfccdd670d",
"main.dart.js_29.part.js": "f88050503379485c3eecb4b24a137de6",
"main.dart.js_194.part.js": "a61bbb79be36f978580e415b9440489d",
"main.dart.js_236.part.js": "bfe35f257182e7bf7f15febc15fb354e",
"main.dart.js_58.part.js": "e3348c9b5290a4d59326f6e8c99fa26f",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "8d92a5bc47be049cd427bdb8d18f6422",
"main.dart.js_79.part.js": "d55aac435fb93d7ac5805ed8f752f9c4",
"main.dart.js_92.part.js": "de46765d29b32730053412416c542bb2",
"main.dart.js_224.part.js": "33dee6bd39571b95d4fdb3a44af45c9e",
"main.dart.js_93.part.js": "177322f549bc288082f31d7bf948cd35",
"main.dart.js_223.part.js": "ead54d0c5c6836fc53458f1038a94525",
"main.dart.js_11.part.js": "4fa6ed8df41a8c7acd2fef6d10285184",
"main.dart.js_125.part.js": "5da0c1d80b3eeced0fef06d884be827c",
"main.dart.js_131.part.js": "daf881acc8bb512cad80b79e7188a2ae",
"main.dart.js_226.part.js": "68d5f4e57f0842308977eab34eb830fd",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_178.part.js": "b5eb69d354867665591b12099759eb3d",
"main.dart.js_258.part.js": "0ffdcd555d043fd716ea3198c3820568",
"main.dart.js_187.part.js": "c5f1ec66e64bbdf453416db7a7defd33",
"version.json": "9b00d791ef6e96c359dcd10ebf77827c",
"flutter_bootstrap.js": "50ffda344ecf292ca814d32120cbf884",
"main.dart.js_191.part.js": "03f0c18ecdd7715bd3fb6786d9025c9e"};
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
