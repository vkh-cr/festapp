'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "3ce14d703f0b923f18c8f6acfdf6772b",
"main.dart.js_117.part.js": "776eb4ed8577f4f23cddb3dda6509d84",
"main.dart.js_182.part.js": "52462e98c5e10e784b35b2f1e7a12d9f",
"main.dart.js_75.part.js": "4a44dfd344807a93ef06572be0493ad3",
"main.dart.js_83.part.js": "5bd2700beb429f5a95ff2638ef8ec8c3",
"main.dart.js_176.part.js": "75b844f2cb39db1b194945820481a4b4",
"main.dart.js_87.part.js": "c1ff84bb1f71383f7ea506a5d1d6994d",
"main.dart.js_126.part.js": "98ebb9dfe7981d994b25b7add0cf1e2d",
"main.dart.js_129.part.js": "524557440fe784c834a80d7ec54a26a1",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "c5d24ea192e3a962ea2f4a0f49d0d8a1",
"main.dart.js_218.part.js": "28ce422071dcc95513353364a5603d7e",
"main.dart.js_40.part.js": "f7cfc820fd0a1ae26c0e6b60bd23dffc",
"main.dart.js_48.part.js": "2b1d1532effd5cda2c8da752ec90b4e8",
"main.dart.js_209.part.js": "6d67c34ddf88d1bfa844ecf6af4cffcf",
"main.dart.js_115.part.js": "f1c7c411b7e79a2570431765eb24763f",
"main.dart.js_10.part.js": "bc0bdcaca8272ab68656b61a0dbce3fb",
"main.dart.js_66.part.js": "18deb98502db43fdf5000f4ec1099e43",
"main.dart.js_84.part.js": "8d519fbdf6f25ba494ffdc3832432a7d",
"main.dart.js_122.part.js": "9479caa2050fed135c0a3b818d758f0b",
"main.dart.js_230.part.js": "622fe83ac6eee59b1175ecbc11921d31",
"main.dart.js_213.part.js": "9c3e1548c152e76fdfeb9289a23745cb",
"main.dart.js_153.part.js": "b87160aed15c87b373e049d6eb080f0e",
"main.dart.js_41.part.js": "d3aec813cee4b85f6fd24cb2d09c1a43",
"main.dart.js_89.part.js": "58e73b5aeb805c1a64deef44d8e75f9c",
"main.dart.js_146.part.js": "9089346af0ebc86860266783e32b865a",
"main.dart.js_37.part.js": "6904a550c6ad431e5f046ffa239e6f95",
"main.dart.js_165.part.js": "bedb904773bef7923b1fa0dda046e9ab",
"main.dart.js_127.part.js": "20147fe0cf942a241f0b193396307cea",
"main.dart.js_161.part.js": "ef151bdc3d2b242d01b8856408391f4d",
"main.dart.js_239.part.js": "081bb23824877d9c8d3e1df35f4b66c6",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "78092e511ebcbfd75e1e9325dd214705",
"main.dart.js_216.part.js": "4f49ed2b821d0a1d8705ff2a9ba4f552",
"main.dart.js_64.part.js": "7dd6d324f6838c49d34c57878aa7f55c",
"main.dart.js_169.part.js": "47b8329315771b3d2db4e923da6cb2da",
"main.dart.js_174.part.js": "b00b701569caf0fd57b6da06e6619548",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "456129bd7e98cf0a52db5dc6fcab3d56",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "cfd73fc17875bb068265e8260ca37e6f",
"main.dart.js_119.part.js": "2e919ddb65b26a5bcb6879a090734c15",
"main.dart.js_18.part.js": "a6bcd5707d968ca6483be8c347672135",
"main.dart.js_35.part.js": "ff17d07c036e2f220768cdd5f2cc258f",
"main.dart.js_200.part.js": "2ecd4289f797efd9d81532dbcd425112",
"main.dart.js_73.part.js": "87f4870d0b1e22c274db4da7a25f162f",
"main.dart.js_101.part.js": "f03c61b48ff60866180272db3c6b009d",
"main.dart.js_77.part.js": "b2edfed360bc81f9452bf25ddcea7a54",
"main.dart.js_149.part.js": "98c7db643c7ade3493526c07c6156de3",
"main.dart.js_208.part.js": "1f0400fd7a7dc73870e68b816dd72825",
"main.dart.js_82.part.js": "d9378cd0ae1dd767b22f7e9d70170cd4",
"main.dart.js_173.part.js": "c0d30445c8ce9141ed3b2a9b95afd02a",
"main.dart.js_106.part.js": "bb857939040a14e59c8d56995f9100ba",
"main.dart.js_207.part.js": "215f3da3b7649490e0ccb4fe215e9624",
"main.dart.js": "dd1546a98503af3568a6a82529ec0819",
"main.dart.js_222.part.js": "a7b5a31f459588fa00b22a3b2dfb3d29",
"main.dart.js_232.part.js": "bf6f6ba078a7353ac7be34ab13e5e431",
"main.dart.js_124.part.js": "82af49859f4aede5e83adc13ed533604",
"main.dart.js_50.part.js": "bf4751e6c512072c85970f18c12b153d",
"main.dart.js_192.part.js": "10ad7a2dfbafdf6f4041b194c1f2dbde",
"main.dart.js_91.part.js": "43ec8e1d2a3bd01e34fe34ac62e35b6a",
"main.dart.js_145.part.js": "668e639897c039cd9070ae47f575105f",
"main.dart.js_229.part.js": "7e24f247318f3afcb5ffc97118e78f03",
"main.dart.js_57.part.js": "0961128e1e7f7974e65c6f78b1b39f47",
"main.dart.js_104.part.js": "c76ed167f931d7a6e008309985dd669b",
"main.dart.js_201.part.js": "2240997df028452823bbcba388983a93",
"main.dart.js_69.part.js": "0ccf035600c47a107103f56fdf77aeb7",
"main.dart.js_196.part.js": "d09475aab9eb155c3f344aaf5ac5d63a",
"main.dart.js_181.part.js": "5a2de72d851dad4ad5412b4e9942c481",
"main.dart.js_108.part.js": "43ecf6fd32e16fa8d2c27f5b8e92bb92",
"main.dart.js_158.part.js": "1b0121fd5909eef0d860ec672e8073c6",
"main.dart.js_33.part.js": "fcc94a57b590d6e62835fbe34d040284",
"main.dart.js_217.part.js": "bf9fc2c5c3f3ffd54904503d6d27d438",
"main.dart.js_34.part.js": "ccd5521b2a003f1408305e9a85676a85",
"main.dart.js_210.part.js": "ea44b14a4295dc0a81cdfc731f768f12",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "dddd7ebeac857b3fc2e959f9ea9ac12d",
"main.dart.js_88.part.js": "592f2f2be6e5368d5b7a834465106a80",
"main.dart.js_183.part.js": "a28baedac6b2ef04469e06aab4dcfc92",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_7.part.js": "a51fd92fa1bde81428994b55690d40a5",
"main.dart.js_140.part.js": "b08992f36eccb37d7ff3459e6dda8690",
"main.dart.js_228.part.js": "89207df250a01d0534881dc6f9479654",
"main.dart.js_170.part.js": "5612299c2ea209e983feb6758d2e652c",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "e61c7ea25739d2009a2c35ee8eb5fbf8",
"main.dart.js_27.part.js": "113cde1aa5e572699d36e1326d251497",
"main.dart.js_156.part.js": "4ee765d9891cf6a66ca1441463b0473c",
"main.dart.js_219.part.js": "8ddbc256a0c5cb88bd2d6edc0d6a5ee8",
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
"main.dart.js_155.part.js": "4bf5192b65fab2edad57ef901ae8e818",
"main.dart.js_60.part.js": "4f9128e79e0b4dfc97bd1690d4e6d431",
"main.dart.js_220.part.js": "3075eb5e9cb83aad366e1aff0a63eded",
"main.dart.js_25.part.js": "050c93b68aee1ae071a08e28f34b9650",
"main.dart.js_123.part.js": "bd8aeb961aeaa203b7aeab779a942cb9",
"main.dart.js_8.part.js": "d483314bbd3c92f17179e03da275ce26",
"main.dart.js_198.part.js": "363816dc9527553c1a37b09b94b4ad4e",
"main.dart.js_81.part.js": "27cbc81375c7bc1a9e61d311c518c39d",
"main.dart.js_205.part.js": "8d2bd6c0aa74f4acf1105cbedb75625d",
"main.dart.js_113.part.js": "9b748c46e0b46ac324ef48d88fb3f34c",
"main.dart.js_9.part.js": "6fc2ef0752d17f89a2141f9635e0cef0",
"main.dart.js_99.part.js": "a942a7040313fbc6601d5297e406533a",
"main.dart.js_22.part.js": "46442d19e37f8def1addf8f221759f06",
"main.dart.js_23.part.js": "dd266b9c85424e24321e689f33857112",
"index.html": "ccd5d301c6ded4ce36b54e0f9e33f218",
"/": "ccd5d301c6ded4ce36b54e0f9e33f218",
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
"main.dart.js_118.part.js": "7796c7ed6b0db21aef8fb0badc56d59b",
"main.dart.js_26.part.js": "69f7463e0f245f2be2c0d61822f14b01",
"main.dart.js_240.part.js": "2170eb587bc09cfca0919ef854f0f246",
"main.dart.js_214.part.js": "ed0264de4c699cec691d3a4611d911f3",
"main.dart.js_51.part.js": "7114ea0c25b3b9e3b0d00a04959f7b13",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "0e4ebe8743374d000257e08e0d8943b3",
"main.dart.js_72.part.js": "ae61bb73d9347122606a562b9fd0a198",
"main.dart.js_1.part.js": "1fd2d6edc79a981b3c91568e692be012",
"main.dart.js_160.part.js": "0d4f55bd9157e671aa9885c648a2f2c9",
"main.dart.js_120.part.js": "004af46496b757cf885867a900abede9",
"main.dart.js_63.part.js": "99a7201a8251c3adb63db05fa9b6960a",
"main.dart.js_211.part.js": "ee244cc3e496b8fd3be5ebb7276eee55",
"main.dart.js_12.part.js": "926a7ec007e4a209b6b5e2724d9a2f8f",
"main.dart.js_157.part.js": "b85e414094c21748a9559a92451718b7",
"main.dart.js_221.part.js": "71a97e30a58b7c9421ca71a8ee60673f",
"main.dart.js_137.part.js": "d4c650a0bf714f5ca91a64c0e2965f33",
"main.dart.js_28.part.js": "d97cc6e36775c45bf17c733c8b063282",
"main.dart.js_135.part.js": "f9d4ddd511eb6f9dba015a54e7057b4a",
"main.dart.js_6.part.js": "fa365a742bfee34e19a4e8f6d0ce7677",
"main.dart.js_138.part.js": "b725cadb137e204944151676c8f02dd1",
"main.dart.js_17.part.js": "fa07c53f68628ce9b3bd5ffb833a5246",
"main.dart.js_105.part.js": "5420dafd28b71cfef333b186ba187782",
"main.dart.js_206.part.js": "c647ac8881ea86aae809ec30f70869c1",
"main.dart.js_231.part.js": "541e3b7d484e7d38c5bc6ba4e06a0e2c",
"main.dart.js_43.part.js": "89d7ecaa11f800cb32c87b5cc7e5a672",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "36a60555b918269c795e7d839a485c7f",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "4af6065a0c909de40359b117feee103c",
"main.dart.js_15.part.js": "1d40deba2b7c3c5d3f01a7d708698e23",
"main.dart.js_151.part.js": "788793332b42251ac37177d12aa80a37",
"main.dart.js_19.part.js": "80e0f7b32434a1cb3c9a0edcc6faf8cb",
"main.dart.js_186.part.js": "07b03a64355ffd81c6192b6a2da82f71",
"main.dart.js_163.part.js": "6b8e14e460d048914eee003cf56f4fa4",
"main.dart.js_154.part.js": "e3f127c44cb0cdcf8c48530724cd1528",
"main.dart.js_16.part.js": "6887cf2d75d9b48d8697a2b752bcb0f4",
"main.dart.js_36.part.js": "76339ebf02f5e397c2972a14dd5a5ece",
"main.dart.js_199.part.js": "79c27a4de05450cc6a6e428fa1b8a987",
"main.dart.js_130.part.js": "0bf1020237002c096f7af00a91eb3b8c",
"main.dart.js_238.part.js": "a49e7fd892612eaf475caed6d4d64e89",
"main.dart.js_152.part.js": "7dedaabd437d3a4be092fb3d8d3572ea",
"main.dart.js_197.part.js": "03f969950bb1c74af8a2dbf36e5bf4e2",
"main.dart.js_227.part.js": "43b55e93f6276f1a6f42d3f59e83331b",
"main.dart.js_3.part.js": "650c85c3163cdfcd2d2052c8e80ed2da",
"main.dart.js_225.part.js": "7313477b526e9841c7cc3752bf757eb5",
"main.dart.js_133.part.js": "7e9307762aef5c9594a5a6229082b849",
"main.dart.js_21.part.js": "d0b5f6aa5e5f9c91221ae547f2b778db",
"main.dart.js_188.part.js": "01435f6d9d7419e4e4136a3631d15fdd",
"main.dart.js_204.part.js": "3647cf70a2bfeb49db79384d1788bccb",
"main.dart.js_24.part.js": "15aecd037f4d35d47677ea3ffc2481e0",
"main.dart.js_111.part.js": "7f8837e2e8a0ea4fd7f4976d9313d9a1",
"main.dart.js_177.part.js": "0c8693aeaffcdecefd58c665914a7e2f",
"main.dart.js_85.part.js": "c6e4fd01987eb750a6a44a35d7366b1b",
"main.dart.js_114.part.js": "839f8a8f5917f51397047a0fc03c8739",
"main.dart.js_39.part.js": "43a83a3028a8db2e10de3a436f517714",
"main.dart.js_185.part.js": "fe7ae19bb3242859c60f461a378dc2e3",
"main.dart.js_46.part.js": "57cb3d096e578195fd1f177246fee0e3",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "61d7e66df3cb77d18c9daa0bdce3e9ae",
"main.dart.js_171.part.js": "463a1c04bf7f15453619a035a9b61db4",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "2202e3320f2f44371529a5c39d844964",
"main.dart.js_134.part.js": "827d295f73362cc8a09354f1809f628a",
"main.dart.js_195.part.js": "d659eb438414978450ee4a6ffeac2e95",
"main.dart.js_44.part.js": "bbf61c56077605b46a7ae3e27af20a58",
"main.dart.js_121.part.js": "34865889190af3980ec0166c1210b1db",
"main.dart.js_215.part.js": "6faa8e94dd46307dfe395669b18c23e9",
"main.dart.js_112.part.js": "cbedc87ccfb9f692e4d2ac9762791ad3",
"main.dart.js_139.part.js": "c43b7bbf8808cacf4b701b38f6023fbf",
"main.dart.js_80.part.js": "43dbddc455b58aecdee35c7ccc22a6ce",
"main.dart.js_233.part.js": "38e67f55ff0d8b8c121a4d259f6df98f",
"main.dart.js_30.part.js": "b886a9dae481abb6640c113446017ffe",
"main.dart.js_78.part.js": "a5b6e6e3cbbdc7afe396fd140c04851d",
"main.dart.js_136.part.js": "f9618f2f5874d8b63772439a2b8673c9",
"main.dart.js_168.part.js": "abb87d2522a6e17bad571c25df23934a",
"main.dart.js_159.part.js": "0f3d99765df0e83ab19fc715df45211c",
"main.dart.js_59.part.js": "9171912fc21e66140239f4d7b4e3cec1",
"main.dart.js_47.part.js": "6b13a760b7341e8e5d8008aa20d800be",
"main.dart.js_95.part.js": "63cf6960eb742d9a34feeebb46b878e6",
"main.dart.js_107.part.js": "652151b87177b90ab7f34a7e95af5dd3",
"main.dart.js_194.part.js": "c6a596b59e8dd8d7aa039af9157a6d4c",
"main.dart.js_236.part.js": "d10f50b45b2dd2dc0016bbe702bf92cb",
"main.dart.js_58.part.js": "5080f8a233dbe82a69cfd47c9b48f7d9",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "c29d1c9ae2884387d98ed623a8e16721",
"main.dart.js_54.part.js": "900bcd7dccd701e0d7e695c20724536a",
"main.dart.js_79.part.js": "f84583f2aafa5d282a2eedf93694aa1a",
"main.dart.js_109.part.js": "d031a7b4d65115fa6afb90a409549981",
"main.dart.js_92.part.js": "e6435bc1ad7f66163531e6322f45812f",
"main.dart.js_224.part.js": "aef056e1a0870d3ba8b0a68bc41c8506",
"main.dart.js_93.part.js": "0774d6d2c7ef8ce409e544677883328c",
"main.dart.js_223.part.js": "9465dc8cf4b4a57247f1b5b7a92a6753",
"main.dart.js_11.part.js": "43cf6dffb25bd6c931906df880988383",
"main.dart.js_125.part.js": "e735a935aa702eccb650f3df94101347",
"main.dart.js_131.part.js": "435cb643288e71322e0da668794898c0",
"main.dart.js_226.part.js": "af834929b14519b632096722a33cd5ef",
"main.dart.js_14.part.js": "69feeaef779a43cf9589d8ecd722dc7b",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "aa44a0f15fbfd63917e6613ed3889f1f",
"main.dart.js_178.part.js": "5f41c82f05749459f58bc2eca964c7fa",
"main.dart.js_100.part.js": "e1f1ae11e58dc2e9085e40b3adb9edc9",
"main.dart.js_70.part.js": "ec4b59d8270836feae0f18ee169da960",
"main.dart.js_187.part.js": "6151ede692980f5265c4a5b1ea4646c9",
"version.json": "09c85e06c357d17b583791623dc1ff58",
"flutter_bootstrap.js": "38abada2d57fbc6f2fd3c40f0824239a",
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
