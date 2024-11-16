'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "2e53fe999cf71614559fc6dd9132c35a",
"main.dart.js_162.part.js": "51864e62743ff69338e2b1fde27e6dff",
"main.dart.js_117.part.js": "0009fe9550efb693af74ff4cbe182d7f",
"main.dart.js_182.part.js": "cf5cd8a263fb6c2a1ad43f6000454785",
"main.dart.js_75.part.js": "05183e38fe96151044c3cd080c0055a5",
"main.dart.js_244.part.js": "ec6e65ae00804f55837dc6c8c385f96b",
"main.dart.js_289.part.js": "61f64f3f0d7850f9537ff1a837f87226",
"main.dart.js_83.part.js": "9d4c75d04ccb453eb413eba2fb102b92",
"main.dart.js_254.part.js": "c590ba06653be3fc49c957b28b4b9076",
"main.dart.js_176.part.js": "811a038cb624d95f7778605ca3bba197",
"main.dart.js_96.part.js": "cc42c6a1b9493c1e6a0c6c5aaa916b6d",
"main.dart.js_87.part.js": "04ed4d8f1e54bd7f2dc2583ab8b3a42a",
"main.dart.js_285.part.js": "e5c154ba501806803b582c2a1634c656",
"main.dart.js_251.part.js": "2210bd3dc1283f548fb4709f10de1848",
"main.dart.js_126.part.js": "e2414e0576a6cc3f7e8bb0de00e993c3",
"main.dart.js_129.part.js": "6ed05561e32078625c4450c8fcde3734",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_218.part.js": "e34f99c928bc7e25d5bdc45495765ac7",
"main.dart.js_172.part.js": "eebdfd5cbb620d1830215a2ad3dba15c",
"main.dart.js_142.part.js": "9c49d31c8dd6ace8e537838d42c281a5",
"main.dart.js_40.part.js": "4386626ea480967019a5a8d642ffea4f",
"main.dart.js_48.part.js": "a69a81a17791e15af48cf77a994892d0",
"main.dart.js_209.part.js": "28b84e7532ca952d2a3d4391798882ab",
"main.dart.js_115.part.js": "c7526aa523740acf2e477d90ef427aa0",
"main.dart.js_10.part.js": "026aec2e8aa4d0c3974695fea42ca599",
"main.dart.js_84.part.js": "960628d8d6e71c03cfdb9321b4757100",
"main.dart.js_122.part.js": "2dd614b11c9b475f00a0f630e79ceffc",
"main.dart.js_103.part.js": "ffd840b9ca9209295073541ffbaf1c24",
"main.dart.js_230.part.js": "1318d7f097c22f92d5c34c93706ab1da",
"main.dart.js_213.part.js": "dcae2d4b9c1cb64955e9c56658767f1f",
"main.dart.js_153.part.js": "41bb823353e0e7de851d2d6c6a19e65f",
"main.dart.js_41.part.js": "692b7b68ff64da056c1ca1489f92f040",
"main.dart.js_89.part.js": "733ef86f0ec526723878d702e567544f",
"main.dart.js_37.part.js": "422bd2b2e528c1d98326f85f1afbb24b",
"main.dart.js_287.part.js": "07d50b6403128f1925190f1a2d67e170",
"main.dart.js_132.part.js": "97fa3d602c9f44a246ffc1c43ec7ca0c",
"main.dart.js_282.part.js": "0325214db9e2226e5f11962b3d481425",
"main.dart.js_127.part.js": "2589d538b1e56e21c8b4ccf3ca262f0c",
"main.dart.js_175.part.js": "a2a3d3abc5949ab240d03bfeb77913dd",
"main.dart.js_239.part.js": "6bfca8a30bfd063a7ab2bce89b1de68d",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "3861d4328af17698e8b173cf5789fa40",
"main.dart.js_216.part.js": "6726ea4dd806e70d3810322f6b58fd97",
"main.dart.js_64.part.js": "ff4d0284486db4caaa7475595c3321ea",
"main.dart.js_169.part.js": "3fe52e50dde9c2253e4d65d3f73505fc",
"main.dart.js_13.part.js": "8049c4b6d4ba8ffdd54316ecbc1bac1f",
"main.dart.js_246.part.js": "5dfb48931f143f1d5b4ff540aeca7632",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "10802179d2ecd6aff5a70ad9462334e2",
"main.dart.js_144.part.js": "c699e0c1e224fc3a1dfe711d42be7d97",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "637e5012d0f3cb6ee6859f9d2b2c5def",
"main.dart.js_265.part.js": "544ffc6c5274bf0fdaf5f6963bf02253",
"main.dart.js_31.part.js": "b310804863942b727c6f1345dc872aa1",
"main.dart.js_119.part.js": "b173be6b6d88a45739599982b61a0312",
"main.dart.js_294.part.js": "2e64d853778e29cde788f8f110c0ecac",
"main.dart.js_18.part.js": "8f586b12df9333c92d6444af58c40c85",
"main.dart.js_35.part.js": "4c8afbd2ae2f6473869e873878f9bf5b",
"main.dart.js_200.part.js": "f9b672f2783836682f2f7c06d89fe770",
"main.dart.js_73.part.js": "0b1c730be3f818dd487e89a19db05cad",
"main.dart.js_77.part.js": "1a60ef8a147767717b7789a9389d1f38",
"main.dart.js_149.part.js": "184e375fdadc98078de34b417b4c0ef9",
"main.dart.js_67.part.js": "8414cef77fc086cd3fd45a09340b656a",
"main.dart.js_208.part.js": "d3380fd2bd9e9a7ae2b6a9e7fe680936",
"main.dart.js_82.part.js": "4d0457c5d003377d02cda11fb10d1452",
"main.dart.js_291.part.js": "b81bf8f81846e5f8d67eb6ccfa25ad06",
"main.dart.js_273.part.js": "59e1e2037e6294ae73291612b09118ef",
"main.dart.js_62.part.js": "129ccbea7e02de4ebbfc085841aea468",
"main.dart.js_207.part.js": "26567885cc5451590f0237ee521e82e8",
"main.dart.js_278.part.js": "a65969c94e77285c00b1c21dcb60f519",
"main.dart.js": "701fc3d3767d14400f5bb4e8e6c4f1cf",
"main.dart.js_222.part.js": "7cf7caa6f8717653a93c40a115b3b804",
"main.dart.js_148.part.js": "cb4aabb2a8d4025f388075a6b3dd8520",
"main.dart.js_293.part.js": "0b68110d3536bd3ef3ee5d807f1dd49a",
"main.dart.js_124.part.js": "b7ae40df05b328d5a209f637d926a477",
"main.dart.js_50.part.js": "87dd601c6238c3f5e190d8d9bc99f1bd",
"main.dart.js_97.part.js": "60d835b217c6d4413519000901dbe753",
"main.dart.js_192.part.js": "e63549b559555d6f8753099233bed2af",
"main.dart.js_145.part.js": "c263a2bfcb79c7cbdf0cda6e27c87433",
"main.dart.js_190.part.js": "01c6584f7210cdb291d3033df6e3c8a6",
"main.dart.js_104.part.js": "2fc139e85863f5ba9c34114b1b82093e",
"main.dart.js_196.part.js": "6e80bff6d085b46c90d78d483fe7ca54",
"main.dart.js_181.part.js": "5f684ee462901cf1028b8bab32504788",
"main.dart.js_108.part.js": "918ee9eb978e23075a25b9ce3b45f2fb",
"main.dart.js_33.part.js": "f62445715ea313d5d7b61daa676c86e3",
"main.dart.js_275.part.js": "31ae81b6c31df0adb8cddf9d9ec2f845",
"main.dart.js_269.part.js": "e82ca85e726423234d7bed3445cbf9c5",
"main.dart.js_217.part.js": "0e75c67b3d29e024ce1b8102e8845a8d",
"main.dart.js_34.part.js": "5d3d0a31443e132f997127242750e285",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_88.part.js": "c9634549f623f87ed58c21c010de0423",
"main.dart.js_183.part.js": "dd6be0a03c85754258a4f3ce846831bd",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "4bdb16ce8cf4620a1a705feae3e7813b",
"main.dart.js_247.part.js": "0e190ce45157491d5e29f53f759498b9",
"main.dart.js_7.part.js": "586a288c1a1da5fb9101b61a6090e7a1",
"main.dart.js_140.part.js": "41e539327210369db769d638fe1c2b12",
"main.dart.js_228.part.js": "9d66a8c2657fe1a9ef0fb537e80c2576",
"main.dart.js_170.part.js": "e9b62055eda50dd61b4e5e46767bcc32",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "2808f3ca79e16522e69ba517b5586112",
"main.dart.js_27.part.js": "7dbb92a8c6e466d3e335e9512cc705a0",
"main.dart.js_156.part.js": "5c6df8b10e7d59fd4927cacd9e8df0c3",
"main.dart.js_4.part.js": "e14a8411d5091e7e34a71fc011b902fa",
"main.dart.js_219.part.js": "4fca515e472d5ac3c2a88636550ca10e",
"main.dart.js_116.part.js": "7b9cf9c4bb5f3439040568fd27e9d7d2",
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
"assets/assets/translations/uk.json": "ff0b2f440e47de55ebb4caccc7abf87a",
"assets/assets/translations/pl.json": "967735dda95b03e108958a8e456904f0",
"assets/assets/translations/sk.json": "9369eb2d37e60e6e61889f7967886be4",
"assets/assets/translations/en.json": "1ca3281169172b22438055c16d21e4a0",
"assets/assets/translations/cs.json": "30feea1e716f2641e9efb63ee66f0f9f",
"assets/assets/translations/de.json": "77aa8845ac93929fb838e327b1155611",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "1c05a2406c5e9413ac359770e0672088",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "8e681cab385abdbd08570f57015f34e0",
"main.dart.js_60.part.js": "bf5ccb8c4af89aaeb70299745ee3e528",
"main.dart.js_263.part.js": "40eed766cbe3185a6a525fbb28cd84f2",
"main.dart.js_220.part.js": "02dd150535e79a0289c4e2d91c638281",
"main.dart.js_25.part.js": "23b44d48dac87cf791ece2a49c00983a",
"main.dart.js_288.part.js": "9c3be4e7cbbac7bb7f9dd5450990440f",
"main.dart.js_141.part.js": "89be80539587e4372b769db25e322477",
"main.dart.js_249.part.js": "84c859e0d1aa34517869cd3f2fa135ca",
"main.dart.js_123.part.js": "cfdefb8adfd8cba2a78a499fae359ef7",
"main.dart.js_268.part.js": "4ed968cc43d451532598eada181d60de",
"main.dart.js_8.part.js": "f84d1347bb310f065c495cc9be6618b2",
"main.dart.js_198.part.js": "502474ea40bbd104fa88780ade5a1e0c",
"main.dart.js_81.part.js": "dce7d0e226a947024218a163300cd693",
"main.dart.js_205.part.js": "5107544ace538a643bb0cdfb0412e351",
"main.dart.js_9.part.js": "af36667be928eb50b5a27b7f68e8bba2",
"main.dart.js_99.part.js": "b316583da244300a47746ca11bc69977",
"main.dart.js_272.part.js": "6c7397d91d6be3561fe60df8536f20de",
"main.dart.js_242.part.js": "7df5c7a26bb7cb6ef875ba439485a7c1",
"main.dart.js_86.part.js": "5d41142d764aaf60ec4f98b85f903b7c",
"main.dart.js_23.part.js": "0d86c7ff1695f6412a173cf37aced2b8",
"index.html": "a9f0c27ec77e63316a6ff3cc6dadfc96",
"/": "a9f0c27ec77e63316a6ff3cc6dadfc96",
"main.dart.js_94.part.js": "1d379b4818ee08334989d19835d956a7",
"main.dart.js_98.part.js": "b199a66c34663727f5506c3b34618723",
"main.dart.js_53.part.js": "dfd9ad71bd211d57d8fec7f0c4b44bec",
"main.dart.js_235.part.js": "eea50ab70a43227f9efbbcad8a39753d",
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
"main.dart.js_286.part.js": "0f9ee8fe7104ca17aef226a622fb5d81",
"main.dart.js_118.part.js": "d8e9c8ba231e668dc8fa2d3f3546669d",
"main.dart.js_262.part.js": "8d58789feef372b7e077492b855ad4cb",
"main.dart.js_26.part.js": "380e39f92fcbbcd211d70b270354d2a9",
"main.dart.js_240.part.js": "2252c060a1dbd77232eb62d1dd8177d5",
"main.dart.js_20.part.js": "5be2df8294de5be7d1248cd020e647ed",
"main.dart.js_189.part.js": "d5ebb7efe1e42330829f91c75433b87e",
"main.dart.js_51.part.js": "f5e9849135582278c864779166e38a87",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "3ea5bdc94796c1adb039cde19dffc217",
"main.dart.js_290.part.js": "93a6ecc32ec4255f5fd5c55965194f1e",
"main.dart.js_1.part.js": "ade9f96aa52ef522b18ad2d5f4adcd91",
"main.dart.js_120.part.js": "dc088282d6c32a3f5a54801abcf155b3",
"main.dart.js_211.part.js": "fbb97cd8f70d3336bbb22024055c31d0",
"main.dart.js_261.part.js": "9684fa50c72157687800fa60267acf27",
"main.dart.js_295.part.js": "490f8d82d8a59f6a6149428d4b82450a",
"main.dart.js_12.part.js": "14575f38dde8a2f4926dc5bc37dfcacd",
"main.dart.js_281.part.js": "aefda80af3b51bb996631ad008601574",
"main.dart.js_221.part.js": "76a5669a9a1bd4e10b82282ff8062c32",
"main.dart.js_137.part.js": "41e7980925f494a335a4f11233ed8c2b",
"main.dart.js_28.part.js": "7e8ad1f2078460da1796229f6b297c29",
"main.dart.js_135.part.js": "e7997db444c34b0b886faaaca30190cc",
"main.dart.js_138.part.js": "4a580ac82e418dfba1458bcfec9f1457",
"main.dart.js_193.part.js": "f9db7703e6ef6ab25aa0d73654c04036",
"main.dart.js_17.part.js": "710c9ffc628b766c2cf6c8627ada4888",
"main.dart.js_105.part.js": "4fc839c4671e2879669afd23c95a8b24",
"main.dart.js_206.part.js": "ff31b938ad3a2cd2680b8d10240f06e5",
"main.dart.js_231.part.js": "11ef401c3848d33fcd82985d398e1795",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "430c177ef7f4082804ec9aee5395bf79",
"main.dart.js_292.part.js": "940689f70a1153cd84adf0c236ab88db",
"main.dart.js_15.part.js": "8000e2bc8d2af8aeb56627d4fcb5db58",
"main.dart.js_151.part.js": "e7ace5fd472b45398c3e64d053fb838e",
"main.dart.js_19.part.js": "9120826acafdd765f0d041011e2439be",
"main.dart.js_284.part.js": "ee6923f668c8de2459eb470493c6e0ae",
"main.dart.js_255.part.js": "975176ddce3f40e6bd7dbc6f974be750",
"main.dart.js_186.part.js": "d8e6acbb277ca377872b17b3bd7375fb",
"main.dart.js_163.part.js": "d0e28985c7ad41077390314f54bc4cb0",
"main.dart.js_154.part.js": "2f49a24101c11895b5d78d1d765497ec",
"main.dart.js_257.part.js": "eaa24f0d3d17191456f1218d2da82f90",
"main.dart.js_16.part.js": "0f66bde775c12a8d9d26fa9bcf71bbe8",
"main.dart.js_250.part.js": "b7f4d9c939e11f431b8e1b7e46d6bf29",
"main.dart.js_52.part.js": "fb9cc658550e71a5b433735ee2ccf19f",
"main.dart.js_36.part.js": "d1ecfd4ccd3a2353722d416cd66710ca",
"main.dart.js_199.part.js": "70adc9528a5fe606a5ec5df0c3d9940b",
"main.dart.js_253.part.js": "f5e9613b49f47a7a367f3c985200aa73",
"main.dart.js_130.part.js": "442c91a702e7bf00bc85f62d26dea2b0",
"main.dart.js_152.part.js": "ce2c7effc5e527566462d26f09abb386",
"main.dart.js_32.part.js": "d0d78c99c0817a93615185d109ffc113",
"main.dart.js_197.part.js": "0a216179e12572f3729257e6b821b891",
"main.dart.js_56.part.js": "60c21a07e36d9c53e34c72f0d20d953d",
"main.dart.js_227.part.js": "240e6c40ae5cd7f865b646f28712f702",
"main.dart.js_3.part.js": "a19ca55b054761e3c6ea85d5b9055179",
"main.dart.js_68.part.js": "f20f37b7b777723c914cbe5cfebf5f63",
"main.dart.js_38.part.js": "c0656845f232020a2f40dc47352f84a4",
"main.dart.js_248.part.js": "f7ecf4041f53f3e6ec7e510c845b836c",
"main.dart.js_133.part.js": "01054ffeb1f6f4573cd93cbae65741cc",
"main.dart.js_21.part.js": "99c3950517535ffc610335a1b13251ce",
"main.dart.js_188.part.js": "7b284d2e0d25cd95e69131b66e3e1071",
"main.dart.js_204.part.js": "b85437d03c3fec52123a8b2e7d4a547b",
"main.dart.js_24.part.js": "6427a6ee692101d080d848a2f3cfdba0",
"main.dart.js_90.part.js": "5a5dc5adb756b9bf08451d369e97cf5e",
"main.dart.js_111.part.js": "e30003d1540261a6a07cae60cab98632",
"main.dart.js_177.part.js": "d80ccbda044f5583c1370d0f6f3f3453",
"main.dart.js_85.part.js": "7d06b97064ed654ea78a899a196c55ef",
"main.dart.js_212.part.js": "c497249afaef4605a840b2fe516bd2eb",
"main.dart.js_260.part.js": "ca6a62b0662563971711f19bc797b38a",
"main.dart.js_49.part.js": "b84fb53f99e0aa42404d1575d2af540a",
"main.dart.js_185.part.js": "6d6cccc405a66d09d2267894225bf0c1",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "2f527628a39428929b2536b61eb00fdb",
"main.dart.js_171.part.js": "75de8d66bccad604f29f8871dbb1ed3e",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "24386baf97a1001056c9a833a77e1972",
"main.dart.js_195.part.js": "b755cfb5bb068f2ed29feee811565209",
"main.dart.js_44.part.js": "3aae575c1cc19cfd4f0033c80f05dfa7",
"main.dart.js_121.part.js": "6d785f669280477f61642dc44eabea4b",
"main.dart.js_55.part.js": "427dedeb449d9b17302cf94a972ba0a5",
"main.dart.js_215.part.js": "98ac05c9847777a4a05685ec3cdf416f",
"main.dart.js_139.part.js": "42cdb92adddea5ca5ff796870ff216c6",
"main.dart.js_80.part.js": "a73564d1de53a5fba78091aa567f400e",
"main.dart.js_252.part.js": "9e97f7917e70259e3af96b5306fd96a3",
"main.dart.js_233.part.js": "b36bfd75b09e6ff6f8424512b41d2129",
"main.dart.js_279.part.js": "612bbad77f3e1d382679dd07896dc2b9",
"main.dart.js_30.part.js": "b86e6222d9e28764a58b957a161c5897",
"main.dart.js_267.part.js": "275fcd22aae0de5b9813346fcf872986",
"main.dart.js_78.part.js": "db86ea921db4316c9b60d725486a8102",
"main.dart.js_136.part.js": "8507cf59962be52e438619cdd78a8378",
"main.dart.js_271.part.js": "4ec6b7e0c1e5a36a8d2e85e807dbb97b",
"main.dart.js_59.part.js": "fc9d5988933e19ee483ebc55f9f3f716",
"main.dart.js_29.part.js": "58b5ed8efdcbe71fc8ecb63a00b2f525",
"main.dart.js_194.part.js": "b98d4bafce8433a3f05251d056246052",
"main.dart.js_61.part.js": "abe72d0dd9dc36d323cd9a5631c0b820",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "1910950e5f33450a618aad59d17220f9",
"main.dart.js_79.part.js": "8f36277cd7241754610a92c0d7329c30",
"main.dart.js_109.part.js": "33f3345de9650bd39d1e87612dd7388f",
"main.dart.js_93.part.js": "ceb86619ca9f0e44656fdc367769819a",
"main.dart.js_11.part.js": "65ea43f02aeaf59aa8856790e7da136f",
"main.dart.js_125.part.js": "e8e4e280bc75a78aaa57b83f0680e5e8",
"main.dart.js_131.part.js": "255271eba5d4856bf43ee220810f8253",
"main.dart.js_226.part.js": "01044d54079212d3b4b2e7d8e01af517",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "2c4712bdede97f4bbcfc1877733a50f4",
"main.dart.js_178.part.js": "d9afbebc27294961f8de91e6e09be96c",
"main.dart.js_100.part.js": "9fdb1c3ba705eefe68cef0ac4d1429e3",
"main.dart.js_258.part.js": "00913611dd654829991f134ee18cc846",
"main.dart.js_70.part.js": "3456e77f1c54360799f9c47decbc9233",
"main.dart.js_187.part.js": "e545b555810d55c5d6a9c90f33fd6845",
"version.json": "67f982d4aa3b341c7c600e00536dcbf3",
"main.dart.js_264.part.js": "a57d23a5353dd16eb8e1a9ef25af276e",
"flutter_bootstrap.js": "cf71bedb811690aea9f1546a429243f6"};
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
