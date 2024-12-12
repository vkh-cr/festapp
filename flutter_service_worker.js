'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "1d68a0b7198934adfc5d6817ff606c51",
"main.dart.js_162.part.js": "b821ac7a9e1d3dd3ea6fc8a4b27a416c",
"main.dart.js_182.part.js": "9c2ef01f236db80f766b7c4cccfceb3f",
"main.dart.js_244.part.js": "7cbbfb61166c51293f6e50dabbe3c619",
"main.dart.js_289.part.js": "51e8e47038ecf1c4ac43d3fd24239e1f",
"main.dart.js_83.part.js": "1ffffd8ee8010529aae3516d30fea85e",
"main.dart.js_254.part.js": "7af18c60d33903591c3f72622ef9396b",
"main.dart.js_176.part.js": "841c0f6d9c3e101cda28adf73505e7e2",
"main.dart.js_96.part.js": "a0697e78f7f98c4deb8b23cec729dcaf",
"main.dart.js_87.part.js": "8d7f7578bd13e6f0e15297c5a00eabb9",
"main.dart.js_285.part.js": "e9d2e540766926ae19ecc0898f86b3b4",
"main.dart.js_251.part.js": "c3c28cd89f029e1183897eb2d494ff7f",
"main.dart.js_126.part.js": "4dd7f813afa6974a8d2f5b8ed7783bdd",
"main.dart.js_129.part.js": "93062cb3a54f06719564dc2357ed4ae8",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "22384ffa3ac28368efa24ee779fdc8bb",
"main.dart.js_218.part.js": "e4e2896cffdcf2d303654250bb5088b3",
"main.dart.js_142.part.js": "94670135ef0b74f2860056efebe56cfe",
"main.dart.js_40.part.js": "340be3a0dd164f554f1822d839e27aa4",
"main.dart.js_48.part.js": "671ac23e9472f8220bcde4a368869635",
"main.dart.js_209.part.js": "d6c3312f5a993b54730ea603bf57bc49",
"main.dart.js_115.part.js": "899c80256d9ab92816ead338ae0ffd2f",
"main.dart.js_10.part.js": "aacf457aa6fda7b72d2eb390673ca9ca",
"main.dart.js_84.part.js": "bcff820ef9d8f6ea3b8f026969209961",
"main.dart.js_122.part.js": "a63607aeed03d1068c8cf07a6515b731",
"main.dart.js_103.part.js": "7d2946c1d4be500cf1dd70dc2d5a4e1a",
"main.dart.js_230.part.js": "8ed6c78c2f48bba60beb3c5f8265cec5",
"main.dart.js_213.part.js": "76eab59d2c2a33969f5174f11b88f790",
"main.dart.js_153.part.js": "2c20610e6e415f8b8f4dbf17f2933c1c",
"main.dart.js_89.part.js": "f3e873787a941e26c449a168403c0679",
"main.dart.js_146.part.js": "3e073e8522ce9b377d3266fd8e65e2a6",
"main.dart.js_37.part.js": "6a60647d82469908cb13876350802ef9",
"main.dart.js_287.part.js": "1d0c5ff18635f24db4b94627a652619e",
"main.dart.js_283.part.js": "9406e0f213323ca5370cedfecfdae249",
"main.dart.js_132.part.js": "714bec3efea11828e9427d7786ed747c",
"main.dart.js_165.part.js": "5751495a2c2ade9129f4fcde3ffbcacd",
"main.dart.js_282.part.js": "6bf12d6664cb168077285101373881ce",
"main.dart.js_127.part.js": "9d23096df97273500734e7bf79108da4",
"main.dart.js_161.part.js": "045f8e0fe77246ad1acee8554ced0e51",
"main.dart.js_175.part.js": "7231893228d756692a3e51d6a53920bb",
"main.dart.js_239.part.js": "0a75f3488223634a3b9b997d9813c6c3",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_169.part.js": "8588c56522a60ac12684822b4d666221",
"main.dart.js_13.part.js": "158fec05b1f8a0aaf724f104f3f0c5fe",
"main.dart.js_246.part.js": "8e226564b269e88b919b643f61408419",
"main.dart.js_174.part.js": "6959410acd8db71009c4ebbf74bfc59f",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "46277a575c40ca014461b3f7233580dd",
"main.dart.js_144.part.js": "b12f1732d26e9282d3548b4490a3fe5a",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "fdcc6a76b6e32e5e37fce5a9c7da0be6",
"main.dart.js_265.part.js": "2dc1a0719564db4c8de298c8edfc558f",
"main.dart.js_31.part.js": "3284a6fef4949c026cc0543929ade2f5",
"main.dart.js_294.part.js": "b4106399067cd78e010827d92397d5ec",
"main.dart.js_18.part.js": "2db6cdf5fd05b04e16e7c40d2aeea70c",
"main.dart.js_35.part.js": "45929c8b103d1f4154bed6a4e568eb59",
"main.dart.js_200.part.js": "0cf02e8e7b3921f2c3b539c14c09073b",
"main.dart.js_101.part.js": "e9d2ec1b8b22db5253f6a732dcbb923b",
"main.dart.js_77.part.js": "1ac38d37b6bc4fdd16a56dc9cdff2841",
"main.dart.js_149.part.js": "387f448315341d844b2b6938cc609f06",
"main.dart.js_67.part.js": "7c060e668af9d761e7eb7562cbabec5a",
"main.dart.js_82.part.js": "56a3887c2fb27eec5e0ad4d3808ac1c0",
"main.dart.js_173.part.js": "6a9a6a11e38ad186322282e645a3d127",
"main.dart.js_291.part.js": "855b0d5cc73d0f28e8fbef87650e48a5",
"main.dart.js_106.part.js": "d37f33d8f91edd5e1f67a53eefb7749c",
"main.dart.js_273.part.js": "6f278f18f5800be510118952f216e924",
"main.dart.js_62.part.js": "2e5361bf98e6f41dcca773fa580d08cd",
"main.dart.js_259.part.js": "bae87dfd219693d09866d31b2ab59696",
"main.dart.js_207.part.js": "37918326b7fb5ac2f7722d6971ddcd2f",
"main.dart.js": "7bd7522e5e8cb86ead51ee8a1cb6dcc5",
"main.dart.js_222.part.js": "6a01ae43d6334a9d96ebe008508afe9e",
"main.dart.js_293.part.js": "04a6bb29771e17ef1d111bc7a007e5eb",
"main.dart.js_124.part.js": "d1cdd7e646dee3348c7de735e6285492",
"main.dart.js_50.part.js": "2d40c8bb4221c1837d2d6e17df41a26d",
"main.dart.js_97.part.js": "8c7e41933514c8c7e17172185986849a",
"main.dart.js_91.part.js": "718febb8d6e4dcd6f6e4063a5bec4781",
"main.dart.js_145.part.js": "3774f392d70beeca02f50ec20381d699",
"main.dart.js_57.part.js": "0b28041b17a4badfd7334f3502269765",
"main.dart.js_190.part.js": "27c79f892ba196c79897dbb21c40b4c3",
"main.dart.js_104.part.js": "c53cd544908bd1169227037c1f05fcd0",
"main.dart.js_201.part.js": "f3251c858ce346bd72eb35533abe6d15",
"main.dart.js_196.part.js": "61592bfbcfce84b54d036ccb2309a780",
"main.dart.js_181.part.js": "27ee1b05f2facc8f119c1b84104344a0",
"main.dart.js_270.part.js": "7c9c63d2b884592548964bb993433b5e",
"main.dart.js_108.part.js": "89dffb2b5734608ed16049a147f16fa4",
"main.dart.js_33.part.js": "c47cb22fc35a0b364b12e829ebfa98d2",
"main.dart.js_275.part.js": "1c7fe9f6c356a2b05d1968f97e8d049a",
"main.dart.js_269.part.js": "3f98adaa645ca7ea55534540eff36e68",
"main.dart.js_217.part.js": "7faa8323f672f4fe35ae38d585a199d9",
"main.dart.js_34.part.js": "281ece75a82473be4a23e558c193cbaa",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "f6d58c191bf5794802d872843c91998f",
"main.dart.js_88.part.js": "7deafe105dcc64fe4b00d067027e58a5",
"main.dart.js_202.part.js": "30f9b4610e4ce8166e4e31bb21061c22",
"main.dart.js_183.part.js": "b89bb54708a6ccd256e261c40b03bb19",
"main.dart.js_167.part.js": "b266e4babfd61c858c0e5acbae528a07",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "2589d131e030d2bb925146f0bfd90d48",
"main.dart.js_247.part.js": "631222931fa1ef8e5e65fedc477b3042",
"main.dart.js_7.part.js": "133c86f79498ceaeeeadb4d673eb9280",
"main.dart.js_140.part.js": "e5ade2c5802b904e411697060f5f2940",
"main.dart.js_228.part.js": "584e52c50aa9109d82ab49a00d9a42bb",
"main.dart.js_170.part.js": "43375d3c8e66b281f2f5965ce6357adb",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_27.part.js": "dadfbdf452545f026f3e7634f31553c2",
"main.dart.js_4.part.js": "c8805f2ff084ee4d321d010d76b5f7f0",
"main.dart.js_298.part.js": "1f534e77d998525d673a2b652e70e581",
"main.dart.js_219.part.js": "5afecae5c1c91cff10966dd3a3d65cd8",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "39db6d4a83b81aae205c2c1e63ff128e",
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
"assets/assets/translations/uk.json": "d916db0051f2553fd629f5ff8ddfcfba",
"assets/assets/translations/pl.json": "ea43549dddb786fdb0bdffb63e7981ac",
"assets/assets/translations/sk.json": "5234ce81c749c1254b3707aeb84e9076",
"assets/assets/translations/en.json": "b646acbfad3ec7f672a3ee86b8a1b59c",
"assets/assets/translations/cs.json": "8ba837fa54eeaa81257e4f86c136abff",
"assets/assets/translations/de.json": "1851af4836c8764b0cf9f34f468ca91b",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "21092cee812eaca83f55eb5e54aecf0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "2bbbc87b7e91c016232074d9d59010d5",
"main.dart.js_60.part.js": "bb4fed1bf421098e97fb1548893eb86f",
"main.dart.js_263.part.js": "5e45f0371dc78e890da3e22b8319ca53",
"main.dart.js_220.part.js": "69adf7aa2cc5bfcf081306db1523365d",
"main.dart.js_25.part.js": "a6ff6796523b43bfeaa5dfe77456b2ed",
"main.dart.js_288.part.js": "a441536fbc93a755c5722aa1fd2955b4",
"main.dart.js_141.part.js": "adf0e90726b89eeac5bf566eabc701c4",
"main.dart.js_123.part.js": "0a54e1a2f434a3ea3953f2d97bf7b3d4",
"main.dart.js_241.part.js": "a9eedd07abe5800a38db3694acb9ab9b",
"main.dart.js_268.part.js": "404da4bfc3ef673394aa54ff7d3c425f",
"main.dart.js_8.part.js": "064812d3fdc848d06ae5229b36734a0b",
"main.dart.js_198.part.js": "bacc6052dfb062158e58726591677c43",
"main.dart.js_81.part.js": "2c819305592909326a1349e8511a03ed",
"main.dart.js_205.part.js": "ccffd77660fea9c974bef31fb1f3da12",
"main.dart.js_113.part.js": "32fc643312595abca8d6da323091be4f",
"main.dart.js_280.part.js": "4489a060a299f9afbe443299f2d99edf",
"main.dart.js_9.part.js": "8227930b0ed96a588aeb5c3beb81e274",
"main.dart.js_99.part.js": "133ece055f0930977b30399b43a283ee",
"main.dart.js_22.part.js": "1fdeb3129a431b142f970772063c54b6",
"main.dart.js_272.part.js": "c3d06c58394c42d85d7c39a4a17a3bcd",
"main.dart.js_242.part.js": "95e8407f37269090d6e7f70b8b8408d9",
"main.dart.js_86.part.js": "f7eb323036b43596e0fc40b52fec8bb3",
"main.dart.js_23.part.js": "450ceb03aba8a6e00379c0133f2624db",
"index.html": "5cb19bcbb2290db2821fefe5571b2a91",
"/": "5cb19bcbb2290db2821fefe5571b2a91",
"main.dart.js_94.part.js": "5d4f04c491ab8a8fdf855d49d04196fb",
"main.dart.js_98.part.js": "db8db271536c147e8cba2f36cb52f52d",
"main.dart.js_53.part.js": "aede1a1823cfe2ce7f7ddcedc0da314f",
"main.dart.js_74.part.js": "97c1003c9b9b147dd00a29eec665490d",
"main.dart.js_235.part.js": "4d1d33b38825b7975ed5caae091da9a2",
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
"main.dart.js_286.part.js": "c0f2825fa21421ddd32eb14d939ba40a",
"main.dart.js_118.part.js": "7505ce1699fa19564d716f621e913c7f",
"main.dart.js_262.part.js": "7768419fc2734d3cd7e2bfaf7e99fc33",
"main.dart.js_26.part.js": "d89474c485f03fe48a970f74c721e6dc",
"main.dart.js_240.part.js": "bef1b45b53a6d65879a61125861c7e66",
"main.dart.js_20.part.js": "26b3af87b4b1af93b30b85e0dfa44e38",
"main.dart.js_189.part.js": "146899ba42c93dc4514821f95b2f5195",
"main.dart.js_214.part.js": "5d4161517917d51053ec79f952300d71",
"main.dart.js_51.part.js": "ee60c397b792888bcb437dfc3b0074ef",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "0a00c988731f439568264905f2d3587b",
"main.dart.js_290.part.js": "cef2f063c63d98515397152585366798",
"main.dart.js_1.part.js": "b1f04f6aadaecabcb0d02ee6273c1ce4",
"main.dart.js_120.part.js": "1161424a3b43dd4e4741252c373f73f9",
"main.dart.js_63.part.js": "d476a0030432433776e8f2cc7b12331b",
"main.dart.js_261.part.js": "a1ba98a790a916e6933962e1d438b3d9",
"main.dart.js_295.part.js": "b70fc239e875b70341c44d1a54df022a",
"main.dart.js_12.part.js": "8ffe9b05e667a303a178c483c4a1b8a0",
"main.dart.js_281.part.js": "d5802de56d4b802eb55968e80c128a8b",
"main.dart.js_221.part.js": "00bda49c3b616409cea9fcfd17264b51",
"main.dart.js_137.part.js": "49741995a3177f59af3a0de1d740f51b",
"main.dart.js_276.part.js": "73136af413cb087f84853128387049a0",
"main.dart.js_28.part.js": "17657072841831340c2bbe61e5211d6a",
"main.dart.js_135.part.js": "14ad9c90fbeb67c526facb01a8b0de52",
"main.dart.js_138.part.js": "de30cf2a3650478d36feb5d968cfeae2",
"main.dart.js_17.part.js": "0a52bc4b43e6ea858f2ee0aabcba1fcd",
"main.dart.js_105.part.js": "dd7bf1782b0d8b44de3f1c3184724fcd",
"main.dart.js_231.part.js": "9d8df17bd6a64d7b156a1ee4575dd9d2",
"main.dart.js_43.part.js": "e92619b9c84a1629b8633df9b2cc653d",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "f35c3a868b4ee6faa1c514e03dd25b6c",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "ef6c808978bef3b7e8aea4da3c64f24c",
"main.dart.js_292.part.js": "88743de546ff004ef1d11015d84c7086",
"main.dart.js_15.part.js": "ffeb71deddffbda53ec2d04874e10a6f",
"main.dart.js_151.part.js": "bf391b6b35c9c9e81e51aca1892f3392",
"main.dart.js_19.part.js": "02907ac585853b27ce30297a2aca6b7c",
"main.dart.js_284.part.js": "146019d7027fe457d6ec0d43a43f4ffa",
"main.dart.js_154.part.js": "5378434b6a69247840f72dcce6287e9d",
"main.dart.js_16.part.js": "4c6c18ab39c4023a133e452e42642c03",
"main.dart.js_250.part.js": "ad270bec8508b03647fd10e4d7d81122",
"main.dart.js_36.part.js": "ba0a634281e6b1875275e56338aa7435",
"main.dart.js_300.part.js": "d80668143e9f020cd8c62db89002280d",
"main.dart.js_253.part.js": "05042f26b216252db409fd8346b6a862",
"main.dart.js_130.part.js": "dccb47192e2b2091c6dd9ce4be794c9a",
"main.dart.js_152.part.js": "faf62ca31ae9fb839806024d2412f443",
"main.dart.js_32.part.js": "c56fcf6b066119d2d4978b6c542b25f2",
"main.dart.js_56.part.js": "c34962fd0e0d67d1993265925ba78385",
"main.dart.js_227.part.js": "61e1e6f1b5ac6563844ae88a9493c9ea",
"main.dart.js_3.part.js": "1fb3217aabd9a88f0f25fc983f39693f",
"main.dart.js_68.part.js": "fc226869e81ae443d4f3aa0ebdfb23a9",
"main.dart.js_225.part.js": "3129f25acbb97961630e9e84e528b2dd",
"main.dart.js_248.part.js": "c37b7d0bc1d4db4f1203e1c8be85f288",
"main.dart.js_133.part.js": "fc0c870bca72d0c932781ab2c8f833b6",
"main.dart.js_204.part.js": "9b4fe28e44f742a8aecf1da4d9a20dbd",
"main.dart.js_24.part.js": "b573221dd6ea8192bbfdea494036c445",
"main.dart.js_90.part.js": "559fe2bc7d6c4461a2c90ef65f855b71",
"main.dart.js_177.part.js": "35e0beabc96ae75d1c2cba824b0acd84",
"main.dart.js_299.part.js": "54520006e7f50f14863161b5dbb78d83",
"main.dart.js_85.part.js": "190cbb281810d43c3010b1b76736d0da",
"main.dart.js_243.part.js": "4824d91ee84a2b17538faf84f58859a8",
"main.dart.js_260.part.js": "5b40329a493193348b61911b9b8b4b75",
"main.dart.js_114.part.js": "7e7893b9ce9e4aa2340be80bd3f764ca",
"main.dart.js_39.part.js": "4805308b055afd1e2822434377668e18",
"main.dart.js_49.part.js": "d5bc6269bc50f137fdc0701712ef6fb9",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "e0ab78a976d59894028a6b268a090afb",
"main.dart.js_171.part.js": "039f3be67a06f03c38c6e5bde4bae252",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "2bd90c96f41e8a410629aa1324b542f7",
"main.dart.js_121.part.js": "d8e016603e44924f43590154ca5240de",
"main.dart.js_215.part.js": "0aa2876dddae40798d47a75e47cd3790",
"main.dart.js_301.part.js": "de92113317906ba3bbe25ad0adeed70b",
"main.dart.js_112.part.js": "464d23a13ad18d88cbe02be1e855b50b",
"main.dart.js_139.part.js": "a7a6b6d10fd689a8ee663a656b693653",
"main.dart.js_143.part.js": "6f7811d3a6df687d452a43ca461ab06b",
"main.dart.js_80.part.js": "5022d1183f158f8d37ff00c854af40ff",
"main.dart.js_252.part.js": "291c508fd85133a88865328cead60ec2",
"main.dart.js_279.part.js": "370dede86841daca265e10e826b5ee54",
"main.dart.js_30.part.js": "e307834e1dff0c3f0cfc1f2631ad3e89",
"main.dart.js_277.part.js": "02c511a07057b0ea47464ee02e5fa308",
"main.dart.js_136.part.js": "43e4bc0b9528fa4e99b671897457202a",
"main.dart.js_271.part.js": "58c1fbc4d67c0db40a93317fe04a2d37",
"main.dart.js_59.part.js": "f259671e89151f777ff6982fd2cd51a5",
"main.dart.js_47.part.js": "f351c8acbec12e89ed8360ab52ea4a1a",
"main.dart.js_95.part.js": "2f118f669a354238752a7c93651db032",
"main.dart.js_107.part.js": "8b3dbd77c816fea694bfc82f69cd024a",
"main.dart.js_29.part.js": "e75fbc05681220a10864f5d10c0df4ce",
"main.dart.js_194.part.js": "b196feaf81e41b33b14fec8303ffacce",
"main.dart.js_236.part.js": "403f96d9437dc0c2d9e3ca83f940f397",
"main.dart.js_58.part.js": "d73298b879ed1ee15c1b5d85080ffcf4",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "c57062bde0a91ec15afc76515cd793f2",
"main.dart.js_79.part.js": "4b4116443a2fc7e8fa064a881374941e",
"main.dart.js_109.part.js": "5410683940d9d02b4ab8da848c56110c",
"main.dart.js_92.part.js": "3cd17b42213daca9a6dee2f1327e7f53",
"main.dart.js_93.part.js": "8fb09c42f00eb52258fa48082fcc0bc1",
"main.dart.js_223.part.js": "3d0217db884fa559e57aef86e62395e8",
"main.dart.js_11.part.js": "353c0a8e8980f740530f28dbb58e07c6",
"main.dart.js_125.part.js": "2b19b6232aa8866e8f9e4c1104bab4ab",
"main.dart.js_131.part.js": "77678f26be24e1517a61261ebce5a9b5",
"main.dart.js_226.part.js": "0101703e679a4c2d92bbcad697c1b684",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "debe0fa7a9c527794012afcb10e7facd",
"main.dart.js_178.part.js": "59a4a181abd900b6e4dadfdbc550dfa4",
"main.dart.js_258.part.js": "f03b0086b422fea1b6dc85c91fc02366",
"main.dart.js_297.part.js": "283571d01f6e0886dae6fd2669572c11",
"main.dart.js_70.part.js": "6e80b98d9728e5ba7181cd3e7ba1429f",
"main.dart.js_187.part.js": "cce2e67a9b2c6ee90b587aae472b84af",
"version.json": "3bd689998d350c4e5d0e45b5117f2cf7",
"flutter_bootstrap.js": "2f14d73f108dbdd615b4d3991e9218b0",
"main.dart.js_191.part.js": "133e53437d8162bc0252db99d22cdcb0"};
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
