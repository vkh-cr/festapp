'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "1ec3bfb26dd013f925e40734068b380a",
"main.dart.js_117.part.js": "776eb4ed8577f4f23cddb3dda6509d84",
"main.dart.js_182.part.js": "1c9f613d4c607df90ec06197a1631e15",
"main.dart.js_75.part.js": "93b45dc5713afca2023839dd0880413f",
"main.dart.js_83.part.js": "1f823737bc46cd14f3bd5d6353bce5dd",
"main.dart.js_176.part.js": "3d907095335ebb4e6ba4e660ed2d1c17",
"main.dart.js_87.part.js": "c1ff84bb1f71383f7ea506a5d1d6994d",
"main.dart.js_126.part.js": "d7e00c8df49a30f24acafb94fb352141",
"main.dart.js_129.part.js": "00a35f0facefe27163f7c98633c3146b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "5145ddfd35f6b5d1cea8b8f3a4e77c1e",
"main.dart.js_218.part.js": "28ce422071dcc95513353364a5603d7e",
"main.dart.js_40.part.js": "6b664a39795d98956cbd9424564ffd89",
"main.dart.js_48.part.js": "2b1d1532effd5cda2c8da752ec90b4e8",
"main.dart.js_209.part.js": "6d67c34ddf88d1bfa844ecf6af4cffcf",
"main.dart.js_115.part.js": "f1c7c411b7e79a2570431765eb24763f",
"main.dart.js_10.part.js": "73104d1b174d310e157b1ceeee6feee2",
"main.dart.js_66.part.js": "18deb98502db43fdf5000f4ec1099e43",
"main.dart.js_84.part.js": "75ddfd2ac2a6652a12c7bb6326e52d64",
"main.dart.js_122.part.js": "27092ac89d009e3974a14c3d661cf001",
"main.dart.js_230.part.js": "6bf0a94cae8e27c07209e1dbb4e97329",
"main.dart.js_213.part.js": "9c3e1548c152e76fdfeb9289a23745cb",
"main.dart.js_153.part.js": "b87160aed15c87b373e049d6eb080f0e",
"main.dart.js_41.part.js": "d3aec813cee4b85f6fd24cb2d09c1a43",
"main.dart.js_89.part.js": "aa8414a3eb856df38d602b3224ff3e81",
"main.dart.js_146.part.js": "9089346af0ebc86860266783e32b865a",
"main.dart.js_37.part.js": "6904a550c6ad431e5f046ffa239e6f95",
"main.dart.js_165.part.js": "a891bb389e7e2c1cb2864e8d971f1c37",
"main.dart.js_127.part.js": "20147fe0cf942a241f0b193396307cea",
"main.dart.js_161.part.js": "ef151bdc3d2b242d01b8856408391f4d",
"main.dart.js_239.part.js": "fb2c5e529a719019882d63094f21fa31",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "a5e1ccddff8bc59d6e6c5fce6124afa0",
"main.dart.js_216.part.js": "4f49ed2b821d0a1d8705ff2a9ba4f552",
"main.dart.js_64.part.js": "acc8380e2d6e86c90a54545e15da08e8",
"main.dart.js_169.part.js": "cdd61ee10b791ae42f2633fc18253489",
"main.dart.js_174.part.js": "b00b701569caf0fd57b6da06e6619548",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "456129bd7e98cf0a52db5dc6fcab3d56",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "cfd73fc17875bb068265e8260ca37e6f",
"main.dart.js_119.part.js": "7ada064b95fcd8ca141551f0cf72c3f6",
"main.dart.js_18.part.js": "d1cbbf197d599e8f0cc7c7bd9edc7b8b",
"main.dart.js_35.part.js": "ff17d07c036e2f220768cdd5f2cc258f",
"main.dart.js_200.part.js": "2ecd4289f797efd9d81532dbcd425112",
"main.dart.js_73.part.js": "87f4870d0b1e22c274db4da7a25f162f",
"main.dart.js_101.part.js": "003786954c7fd96a137fa529a3822068",
"main.dart.js_77.part.js": "cb9492ebdb5e4ff794e074356d2d0bf3",
"main.dart.js_149.part.js": "a4a3b62a7b73037db31892007190e8a2",
"main.dart.js_208.part.js": "1f0400fd7a7dc73870e68b816dd72825",
"main.dart.js_82.part.js": "d9378cd0ae1dd767b22f7e9d70170cd4",
"main.dart.js_173.part.js": "0dc6537a1a082b15dba379cee8324bf0",
"main.dart.js_106.part.js": "5c263cd22015621f4b7c143158df6d02",
"main.dart.js_207.part.js": "e6cd3793918e09812ae01fff65d379bd",
"main.dart.js": "e38146a9e36ca3efa4d6e4225bf3944e",
"main.dart.js_222.part.js": "6b79ca8af05b4f23ae5e47b78f3719d3",
"main.dart.js_232.part.js": "b5d45cc01f4398129413a4c70bf7a4d7",
"main.dart.js_124.part.js": "82af49859f4aede5e83adc13ed533604",
"main.dart.js_50.part.js": "bf4751e6c512072c85970f18c12b153d",
"main.dart.js_192.part.js": "e76f8312b8820ce39419ee18b9200afc",
"main.dart.js_91.part.js": "c612d477d14a69e36dde11ded2d8a85d",
"main.dart.js_145.part.js": "668e639897c039cd9070ae47f575105f",
"main.dart.js_229.part.js": "6cea5ca32ea12bbc54c3ca1b099fa006",
"main.dart.js_57.part.js": "0961128e1e7f7974e65c6f78b1b39f47",
"main.dart.js_104.part.js": "c76ed167f931d7a6e008309985dd669b",
"main.dart.js_201.part.js": "0159bfc89156d45b6ba08866d5f11c24",
"main.dart.js_69.part.js": "0ccf035600c47a107103f56fdf77aeb7",
"main.dart.js_196.part.js": "d09475aab9eb155c3f344aaf5ac5d63a",
"main.dart.js_181.part.js": "2b117ee0638cfe919e7b23d25406f88a",
"main.dart.js_108.part.js": "c371243805c1926fd4dd0be6e001a2b4",
"main.dart.js_158.part.js": "1b0121fd5909eef0d860ec672e8073c6",
"main.dart.js_33.part.js": "fcc94a57b590d6e62835fbe34d040284",
"main.dart.js_217.part.js": "27b8f907786dd31a9036c6f08b962326",
"main.dart.js_34.part.js": "ccd5521b2a003f1408305e9a85676a85",
"main.dart.js_210.part.js": "540fe547b6fc5867974054a11885c0fe",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "b5d8253afc3371a4d2f3fb7f0652da52",
"main.dart.js_88.part.js": "cba683cd01bb6eb486ec329e662eae1b",
"main.dart.js_183.part.js": "7047f0c8f1fed777c54721e061c7ac1f",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_7.part.js": "a51fd92fa1bde81428994b55690d40a5",
"main.dart.js_140.part.js": "63b356cf0b7722d7d29b7f30efb3a43a",
"main.dart.js_228.part.js": "9a6b927d32cb48a2b0c6038ee07655a0",
"main.dart.js_170.part.js": "b0950bcc82e231c5a1da1d5dd10c5b8b",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "ca24fcc46e6c6b1cf34f1d452f8a50c4",
"main.dart.js_27.part.js": "71d2b84b7cb63705a70a18a3acd74e79",
"main.dart.js_156.part.js": "4ee765d9891cf6a66ca1441463b0473c",
"main.dart.js_219.part.js": "d89a3cc4cfe0ccee66a99150bf188d5d",
"main.dart.js_116.part.js": "a53da275373099e0752e456a8cd0dea8",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "d2dbd2e9e288632bf6ff73dbf8926d11",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "9d5719bf0852806c1dd70d4a1a97dc51",
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
"assets/assets/images/map/card.svg": "77d6cd4a052dbdaad1c5da8a5e3f1375",
"assets/assets/images/map/atm.svg": "693a9abb7145add2961453afa3f0ac4c",
"assets/assets/images/map/grass.svg": "fe32d32a171a6e76a8a7088644b07e21",
"assets/assets/images/map/cross.svg": "aaecd193906a34ea7845c2feef628607",
"assets/assets/images/map/tools.svg": "5f6bbbef105b3d381322da02d6beef43",
"assets/assets/images/map/food.svg": "41a9921e7a33d4ed62eb7fb0b8f176e7",
"assets/assets/images/map/ball.svg": "061bde98a15c0f2f3818195d9cce8a5f",
"assets/assets/images/map/beer.svg": "3884ec5eef24a8634310eaa4b35d8b45",
"assets/assets/images/map/info.svg": "be79865eee723da1a799860658dc439c",
"assets/assets/images/map/bed.svg": "c930d46ac91a70932bd61e2e17033744",
"assets/assets/images/map/speaker.svg": "92bad3443727dc5acf679cd5e8582db1",
"assets/assets/images/map/church.svg": "d2840a23cbad788040bf5a41a9e88dbe",
"assets/assets/images/map/cart.svg": "fb6d41303c00806c8e3f59b20351670d",
"assets/assets/images/map/conversation.svg": "5f53e729612a0e78a09e7d3c0fd53fd6",
"assets/assets/images/map/coffee.svg": "75c95a698eb7162db5342b082d751edf",
"assets/assets/images/map/wine.svg": "d2c55fa3b4051c39d87edee9a280a50e",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/NOTICES": "aa859f023e8e5aa082620769053a47ca",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "49ca0a656725c4f34199825df6a21ff0",
"assets/AssetManifest.bin.json": "c15f1bd0233f6802b344183f28ce1589",
"main.dart.js_155.part.js": "1d480a525e7585ab9ec5e6e16c47e1eb",
"main.dart.js_60.part.js": "7f338030e2f5a41e07db968fe838cc96",
"main.dart.js_220.part.js": "c0e7a1056b8bd86a0dfb4608cb350990",
"main.dart.js_25.part.js": "864a33b8ca18cbff38b77232c333513f",
"main.dart.js_123.part.js": "7cb50ae5b6eedf7640c9de2091463e1b",
"main.dart.js_8.part.js": "1be179b22d0d6dc6d96e6f8294eade8e",
"main.dart.js_198.part.js": "5c4dc8308682dc259965a7581dc4ed2e",
"main.dart.js_81.part.js": "51727ecce4a75285f7bb3f5ff5a1d544",
"main.dart.js_205.part.js": "b329d8adf46327fb8cb2e23a87e145f3",
"main.dart.js_113.part.js": "9b748c46e0b46ac324ef48d88fb3f34c",
"main.dart.js_9.part.js": "6fc2ef0752d17f89a2141f9635e0cef0",
"main.dart.js_99.part.js": "dcd62410c050fce9a80176d8eda67c45",
"main.dart.js_22.part.js": "46442d19e37f8def1addf8f221759f06",
"main.dart.js_23.part.js": "8116be1e62c5eb1d3bce4ed3ce9889e2",
"index.html": "b97c381c02aaf7cc5cbc185e10134578",
"/": "b97c381c02aaf7cc5cbc185e10134578",
"main.dart.js_94.part.js": "2f149ed060ac6a45dcbcaf8f4a664361",
"main.dart.js_98.part.js": "c0a1e649798e3d3657301dad9b937fd9",
"main.dart.js_53.part.js": "34d0c7c06f925b17b2898ebe8dbc2532",
"main.dart.js_74.part.js": "b8751f2b89901d05a7dd2fd852ff6256",
"main.dart.js_235.part.js": "37465c66ee73e043bd8d8a58572f68b9",
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
"main.dart.js_118.part.js": "a8bd7ee474ab2390c09e22a7ee85a3a6",
"main.dart.js_26.part.js": "69f7463e0f245f2be2c0d61822f14b01",
"main.dart.js_240.part.js": "7d167fe607b77a28533ab6fca397bd14",
"main.dart.js_214.part.js": "a316ad7fa241e2c257ad6912320a4686",
"main.dart.js_51.part.js": "7114ea0c25b3b9e3b0d00a04959f7b13",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "d2f7f53048b4717828485078bf52cd52",
"main.dart.js_72.part.js": "ae61bb73d9347122606a562b9fd0a198",
"main.dart.js_1.part.js": "314a749ad8175a07c66237964956ce81",
"main.dart.js_160.part.js": "0d4f55bd9157e671aa9885c648a2f2c9",
"main.dart.js_120.part.js": "94fd29fa8e20426aaf96b25017f521b0",
"main.dart.js_63.part.js": "ff6206dc07eb97f7465874f7b3d55279",
"main.dart.js_211.part.js": "ee244cc3e496b8fd3be5ebb7276eee55",
"main.dart.js_12.part.js": "3e7a7057a4f40f24c1d73b74768bd498",
"main.dart.js_157.part.js": "2643a86a302803a3db409aee3f850cf2",
"main.dart.js_221.part.js": "81d412b37ffc73a79029a4b6c0f87f26",
"main.dart.js_137.part.js": "d4c650a0bf714f5ca91a64c0e2965f33",
"main.dart.js_28.part.js": "d97cc6e36775c45bf17c733c8b063282",
"main.dart.js_135.part.js": "0e1c92268a0a2243d44ce41cfff04f47",
"main.dart.js_6.part.js": "abae510fde4b734a52fd0befb37f6d94",
"main.dart.js_138.part.js": "ba55f238c672a484451153b69c84c1e1",
"main.dart.js_17.part.js": "f76d9078718d08b060af54def048fddc",
"main.dart.js_105.part.js": "5420dafd28b71cfef333b186ba187782",
"main.dart.js_206.part.js": "c647ac8881ea86aae809ec30f70869c1",
"main.dart.js_231.part.js": "d7ac3bdae7e9b2e41ed32a06bba75e0b",
"main.dart.js_43.part.js": "89d7ecaa11f800cb32c87b5cc7e5a672",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "36a60555b918269c795e7d839a485c7f",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "d49386ab53a04dd98f0748c7523cc0e0",
"main.dart.js_15.part.js": "f482ac5f980721c63a6ffcb8b05191e0",
"main.dart.js_151.part.js": "2ebac1cc31cde071b05efd3ab350c02d",
"main.dart.js_19.part.js": "7a7985427f901d0fa4b7fd6ca7146177",
"main.dart.js_186.part.js": "3bea880ba28f602a3da95107a263046f",
"main.dart.js_163.part.js": "db6f72827f549704ed0f08830c690ea6",
"main.dart.js_154.part.js": "97fc87f53f545093ba25fa81c9b68dbc",
"main.dart.js_16.part.js": "e6a73ca29f537d03dff3444ab1274d2f",
"main.dart.js_36.part.js": "76339ebf02f5e397c2972a14dd5a5ece",
"main.dart.js_199.part.js": "23259bf9678052156219e549e6b44535",
"main.dart.js_130.part.js": "9579d4187ec646ff91ca9d1b0eac5fda",
"main.dart.js_238.part.js": "ab58edc8ab599733d12276e62e078a1a",
"main.dart.js_152.part.js": "7dedaabd437d3a4be092fb3d8d3572ea",
"main.dart.js_197.part.js": "71ac8eaf4decaa82f35a2073f5ba829b",
"main.dart.js_227.part.js": "59f3000f1544bc671df3a00867dcb3cb",
"main.dart.js_3.part.js": "3b9b1d6f7559f7b35d20deb06504d647",
"main.dart.js_225.part.js": "5599b2a05670132f374071363bd1730e",
"main.dart.js_133.part.js": "cea5bfb5e3cbd5b63a8eb4bad3139087",
"main.dart.js_21.part.js": "77115b53024eb3eb3a99048504c09f55",
"main.dart.js_188.part.js": "01435f6d9d7419e4e4136a3631d15fdd",
"main.dart.js_204.part.js": "b5fbdd4cf358ac5f44f44201fac9590e",
"main.dart.js_24.part.js": "777cf7a17701c17599a8d1309b83646c",
"main.dart.js_111.part.js": "86fa960f02b4bd7191dafb8ebcec1d6d",
"main.dart.js_177.part.js": "0c8693aeaffcdecefd58c665914a7e2f",
"main.dart.js_85.part.js": "c6e4fd01987eb750a6a44a35d7366b1b",
"main.dart.js_114.part.js": "839f8a8f5917f51397047a0fc03c8739",
"main.dart.js_39.part.js": "edac09e351f08f89fe95fc2bc0e8433c",
"main.dart.js_185.part.js": "2e1dba10c7c098772fd35ea42c4f37b7",
"main.dart.js_46.part.js": "292e45a353bdb202ff2022756e05f219",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "61d7e66df3cb77d18c9daa0bdce3e9ae",
"main.dart.js_171.part.js": "861ac6cb33e89cea3068bd2289d8e8b5",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "2202e3320f2f44371529a5c39d844964",
"main.dart.js_134.part.js": "98f978a89cf79884f5e008ef76e134d0",
"main.dart.js_195.part.js": "db02b4e3f43652890ea1a2fad6c81232",
"main.dart.js_44.part.js": "bbf61c56077605b46a7ae3e27af20a58",
"main.dart.js_121.part.js": "4f54cebcd9a91a78cec4608c54b1287b",
"main.dart.js_215.part.js": "419a896e8e9cccadaa226911e314566c",
"main.dart.js_112.part.js": "b9b6f4d65f5c24a7a139ded3559f3c51",
"main.dart.js_139.part.js": "a48f381d575ce1293b9fc122a7bdce96",
"main.dart.js_80.part.js": "b1fbf37d9561b78d759f94457905a218",
"main.dart.js_233.part.js": "88ecd1f3aa5ecc37b832b942fa32cc88",
"main.dart.js_30.part.js": "b886a9dae481abb6640c113446017ffe",
"main.dart.js_78.part.js": "00135377940e9bb697a9c90d98c267c0",
"main.dart.js_136.part.js": "bafaa9de519633efcef4ff7406f8bb07",
"main.dart.js_168.part.js": "128c2b67a4006dc5a4406c0b73709fdf",
"main.dart.js_159.part.js": "66b57d61477692de3e3c6203f3a6dda3",
"main.dart.js_59.part.js": "d81143879de1572fad267d592f8e1738",
"main.dart.js_47.part.js": "6b13a760b7341e8e5d8008aa20d800be",
"main.dart.js_95.part.js": "63cf6960eb742d9a34feeebb46b878e6",
"main.dart.js_107.part.js": "329d0422c370c25b459e43fec2bfbe72",
"main.dart.js_194.part.js": "c6a596b59e8dd8d7aa039af9157a6d4c",
"main.dart.js_236.part.js": "08239519e4dd8f5207f70c72cde60499",
"main.dart.js_58.part.js": "5080f8a233dbe82a69cfd47c9b48f7d9",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "c29d1c9ae2884387d98ed623a8e16721",
"main.dart.js_54.part.js": "900bcd7dccd701e0d7e695c20724536a",
"main.dart.js_79.part.js": "d991a8972e0f56468ac05bddf1706f90",
"main.dart.js_109.part.js": "d031a7b4d65115fa6afb90a409549981",
"main.dart.js_92.part.js": "2ff540f0c101f54dbdf857f6f499c3c6",
"main.dart.js_224.part.js": "aef056e1a0870d3ba8b0a68bc41c8506",
"main.dart.js_93.part.js": "0774d6d2c7ef8ce409e544677883328c",
"main.dart.js_223.part.js": "08a026c9e52c34344c85ab04b7d55840",
"main.dart.js_11.part.js": "43cf6dffb25bd6c931906df880988383",
"main.dart.js_125.part.js": "e735a935aa702eccb650f3df94101347",
"main.dart.js_131.part.js": "8bfbd8a2aab0bc56e91a2bf4fbf02ee9",
"main.dart.js_226.part.js": "af834929b14519b632096722a33cd5ef",
"main.dart.js_14.part.js": "febbaf3cec18762bda19096176b061eb",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "aa44a0f15fbfd63917e6613ed3889f1f",
"main.dart.js_178.part.js": "5f41c82f05749459f58bc2eca964c7fa",
"main.dart.js_100.part.js": "81b241b13ccf89420b5b674fd8ad65c1",
"main.dart.js_70.part.js": "ec4b59d8270836feae0f18ee169da960",
"main.dart.js_187.part.js": "6151ede692980f5265c4a5b1ea4646c9",
"version.json": "09c85e06c357d17b583791623dc1ff58",
"flutter_bootstrap.js": "736d3884d9654e9b3d53bff38341afa6",
"main.dart.js_191.part.js": "b2f18a593be84ca2c00e1fbeda2ae078"};
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
