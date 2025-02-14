'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_227.part.js": "64d8058c289223331618dd237a1b8169",
"main.dart.js_282.part.js": "03b428ebc11bb78d0bcfa2d4a70ecfce",
"main.dart.js_214.part.js": "a5e7237726d6d386dbf442ab597dbfb1",
"main.dart.js_262.part.js": "0ccd74048ed8a4bdf39b109e335d9cb5",
"main.dart.js_222.part.js": "0630b48a1f7f94dc4c77d833e61136ee",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_346.part.js": "717bac5da19e3811137a7b3d65b4f878",
"main.dart.js_304.part.js": "2a227f5c81d6931b96d64949f36b15ec",
"main.dart.js_280.part.js": "b677ae8e0e1ed5ab9e44ce78b709b2c0",
"main.dart.js_314.part.js": "a50eee961db224f13621d3dd85f1d262",
"main.dart.js_95.part.js": "40dff23e4f1e8292f709c236487d7bc7",
"main.dart.js_35.part.js": "02703ac0265cf17948444af36884a377",
"main.dart.js_297.part.js": "58cdcb9f857b5087bbc383d5467fad9b",
"main.dart.js_161.part.js": "efcd439888395d6394aa31ec33bdca0f",
"main.dart.js_104.part.js": "a853dd7fc0f02a708aab44af5c7865fa",
"main.dart.js_296.part.js": "f1ff1124759bf3048fb4bd40dc420f6f",
"main.dart.js_133.part.js": "8b1dad709e0a8f2a7ff53d1eea9fc4f5",
"main.dart.js_325.part.js": "ec292da850631821cdb7ebd094ea41f3",
"main.dart.js_149.part.js": "8888263841017566f620e84c9e05abc5",
"main.dart.js_204.part.js": "21dbb7cb9dccbb23666119bc4881b30f",
"main.dart.js_8.part.js": "6c25ce771e7946d81279a32e1ba919e8",
"main.dart.js_273.part.js": "c918d1b9593b23e4530aeb0a8294c767",
"main.dart.js_11.part.js": "67d749688b175319b4666e8ad4ed6bde",
"main.dart.js_108.part.js": "38da6a318d0ffadbcfe02ef4b3622651",
"main.dart.js_77.part.js": "d0e07fe7f9329c68498d75b874a424f0",
"main.dart.js_250.part.js": "4ca00e39a316c6407888ab783d816c05",
"main.dart.js_225.part.js": "eceedf0346e006abca101c695eba23f0",
"main.dart.js_146.part.js": "4b1be9c3541a332fe8d517c3780a8106",
"main.dart.js_342.part.js": "7971bca0b260168a1be9cd0fd14638f6",
"main.dart.js_38.part.js": "70cac5af32ddad1391b2a77d4c8d17f5",
"main.dart.js_233.part.js": "ca4ecd734c64e3d9ed6202904a9a4a41",
"main.dart.js_288.part.js": "b65daa358dd6719d1dc93927325390a8",
"main.dart.js_113.part.js": "34badf13aebb6ecf2549fb15cbd8c96e",
"main.dart.js_211.part.js": "63f13721ccdd9e3790f2059ec7b14c8b",
"main.dart.js_201.part.js": "1437f27fdfa85b651cbe80aa92ffb747",
"main.dart.js_50.part.js": "dd98255831fb3381b7a5593a8162a258",
"main.dart.js_132.part.js": "ef2ab14f39d0242ff12e7cd7e0f63f96",
"main.dart.js_135.part.js": "6de567ecd8394595e14e5c61054978b3",
"main.dart.js_114.part.js": "ada8d5e4507b6d8fc81a79ed72ec5165",
"main.dart.js_298.part.js": "2060f2fd642a1e4a84c945206655aaed",
"main.dart.js_329.part.js": "815356aa75d2d48d5b95d47e3e81d5f5",
"main.dart.js_327.part.js": "06a2d584a1938db71e16a4fec5c6704c",
"main.dart.js_153.part.js": "31c7224ba6113865cfd02aa3bf1f6e40",
"main.dart.js_7.part.js": "75ff18874fbe6126c4a918b4ce313ba4",
"main.dart.js_64.part.js": "5a75651c3ebd0836e635aaf8d8568675",
"main.dart.js_56.part.js": "d36c267df8bc418ce403a7cb29d58076",
"main.dart.js_226.part.js": "6b3e34bb465cb18952d0ad3b6c2ade77",
"main.dart.js_102.part.js": "45c4b30b2b83cdfed43cc3970b518c1f",
"main.dart.js_45.part.js": "58792ed510cfb7717c045f0f30df484c",
"main.dart.js_254.part.js": "7b1308030753397418f22c260c3168ce",
"main.dart.js_65.part.js": "999fe9730ce3f93666189fdc69f7661f",
"main.dart.js_191.part.js": "904d9cbe017e6fa2286e7471fe5897ff",
"main.dart.js_299.part.js": "7bd9c65c3e1432c8a948bcb140ffc539",
"main.dart.js_319.part.js": "0cbae8dbdff3ce8946ad3daf71ca716c",
"main.dart.js_68.part.js": "e5157c1d306237c9a0cda6d990495434",
"main.dart.js_75.part.js": "2033a8e383679d2542dbd3ffbfb478ba",
"main.dart.js_52.part.js": "3fd3c5d3dfee3eb9c555eaf4c7bf26cb",
"main.dart.js_334.part.js": "a922fb243fd9675418f71dfd71a95828",
"main.dart.js_136.part.js": "601d2c8b866286425c1cf0fa249d05bf",
"main.dart.js_316.part.js": "b4ac0a076b2ac391fd799a6e21d6bc7d",
"main.dart.js_264.part.js": "c89b462c930c45be268f8407b1ce0e90",
"flutter_bootstrap.js": "d5a0da226bd9e638c2e8d4830e27075f",
"main.dart.js_318.part.js": "8e5683f5c2010b3de56e939588d24d79",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"main.dart.js_257.part.js": "e917609128c1cbe4a89e302f61a915b4",
"main.dart.js_308.part.js": "d36be8e7681c3bc3678d16364759356b",
"main.dart.js_247.part.js": "1880ac3302ff14ef0cfb9c410326913b",
"main.dart.js_277.part.js": "0fc9fce4b0902f2d9fbf9de5a8a0112e",
"main.dart.js_100.part.js": "00a32e823bf0cf9d6c33fd85565d2c83",
"main.dart.js_121.part.js": "b07e068800e50fe3481d707e9b8b8fb8",
"main.dart.js_36.part.js": "b252b748bfe2546b0ef40a602bb6a67a",
"main.dart.js_170.part.js": "b26c03d9ae0472ee16d964c4f6d5da4e",
"main.dart.js_154.part.js": "f56d1db3ed936091fc72b25fad621439",
"main.dart.js_20.part.js": "26a9292c4c843c07a897f2cf4f7b22e1",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_180.part.js": "afe504a076a3a606aded7d1e34f02da4",
"main.dart.js": "3fc94dc8365fd56456d39edf32e5bbcb",
"main.dart.js_80.part.js": "e5720f704e903a7cacab78b4968c5072",
"main.dart.js_239.part.js": "28582e8e890f296c63835f2262dd1cb8",
"main.dart.js_31.part.js": "6e20a1568a67b177c69b9b5c8ad72f12",
"main.dart.js_167.part.js": "71ae4aed42911ba412a040da27e2e90c",
"main.dart.js_328.part.js": "40923c5864b34a7a14a9dfd68c874751",
"main.dart.js_37.part.js": "1e0dcc616dec2e5515dc05ef79df5c9c",
"main.dart.js_9.part.js": "7cd43933350a8d236c7088a13731a5fb",
"main.dart.js_221.part.js": "e3c7752514aeafcfa0be4565f99bea0f",
"main.dart.js_118.part.js": "cb5d567f480df7bbdd2a6c2ae17fd258",
"main.dart.js_332.part.js": "c12f60345334da56901f6813c621dbc2",
"main.dart.js_224.part.js": "e1460d8063046867625f37782bcf9a35",
"main.dart.js_326.part.js": "3a773f9297abf82842f82d09c4f05254",
"main.dart.js_309.part.js": "49e8e0ec1e4859952d86bf504967b54b",
"main.dart.js_67.part.js": "4f890bffa85d2ef2c131eb42bf2d916f",
"main.dart.js_300.part.js": "516ff43ff6b9aa7e8ae110ff2457a719",
"main.dart.js_196.part.js": "b5b169884543d875a712036fa38952d6",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_3.part.js": "1e6ca9a934919fd5a79988321ec30a19",
"main.dart.js_105.part.js": "2807c995b2641422ffe7aeab7a0a9d04",
"main.dart.js_350.part.js": "94a78616163b7b2524785fd50093e4ae",
"main.dart.js_271.part.js": "ba23476ed9ac46a87dc8b59bcb5f4a32",
"main.dart.js_59.part.js": "6b4e81b25f19128ae3f08cdb66fe45e4",
"main.dart.js_203.part.js": "29e29a9db7e736a26d849984062f1b46",
"main.dart.js_142.part.js": "4532c76dd1c23a3beb8afbc96dd5ef9d",
"main.dart.js_251.part.js": "c377989f1f8f7b61c302cca622e8718d",
"main.dart.js_85.part.js": "b737903608ff39caa35de27d1133e269",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_99.part.js": "fca6bd4141aaec3b74a1f6b7d95840fe",
"main.dart.js_34.part.js": "ffa4b4b78037046b46c8fd8f15e71552",
"main.dart.js_344.part.js": "30a5d635e797e53096de36f9e91930dd",
"main.dart.js_181.part.js": "5e85b7bd9970b9b2003382b9667cbf96",
"main.dart.js_28.part.js": "8186495f08e9f777d0cc2f8d0dad944c",
"main.dart.js_338.part.js": "1237bc5d1895c572a1eea632adc6b77a",
"main.dart.js_163.part.js": "9fd40b83603a2b4658f7d5810fb4b70d",
"main.dart.js_17.part.js": "6cfa9abcb624a29d570bd0ed2101e6fd",
"main.dart.js_343.part.js": "17c515c81dedf3429722daa051079a71",
"main.dart.js_283.part.js": "59f043c12730a28448e0e64c26c45e9b",
"version.json": "208e26bbc40ca6e324d0d710c3bbc392",
"main.dart.js_152.part.js": "14d6496d4948611290982d926970d73c",
"main.dart.js_49.part.js": "d3158288e7cf2c04870956a3b9835dc9",
"main.dart.js_291.part.js": "fc545e77568e3c9919eb7304e03dbbe0",
"main.dart.js_212.part.js": "877442a366fba40a79b973d7d497440a",
"main.dart.js_307.part.js": "5e0456b17f1d3c6d908bdf036beac09d",
"main.dart.js_198.part.js": "15e94a273f7b94a4e77d1c47f668b2c8",
"main.dart.js_228.part.js": "d5fb6a25145119307e06adfd2d87c01b",
"main.dart.js_116.part.js": "e54fa485cfb98665937ff269e2dd1b91",
"main.dart.js_60.part.js": "4993ab984e5677f9263325d7d96242b2",
"main.dart.js_92.part.js": "467f6146d2476af501cb9d05bf7377b4",
"main.dart.js_126.part.js": "053511ba83d72fb7ccedd82ced228384",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_26.part.js": "eb8f924c2a947349c4d0aa82267c8e9b",
"main.dart.js_122.part.js": "46fa953f8cfe9e0f4558b713084ed635",
"main.dart.js_306.part.js": "374fbbe1424a21fd18115cbc82633510",
"main.dart.js_98.part.js": "33667f61af7b676fe3c43ce9de794e33",
"main.dart.js_18.part.js": "9c941f2259368427a17a032c3e494255",
"main.dart.js_187.part.js": "ea7b53fac4d8e229f84f0ce4fce09d6b",
"main.dart.js_41.part.js": "50cfcd4c52b96fcbdf457f2152fb5886",
"main.dart.js_205.part.js": "607d5db1570b508404060fe7a58ea889",
"main.dart.js_303.part.js": "f01d68ac3563da1979ac6addf9c99abe",
"main.dart.js_110.part.js": "77162ef5b1d10fca8be7b4aad15d37df",
"main.dart.js_237.part.js": "1a113a674b705cfa05dd1daa4913a4eb",
"main.dart.js_106.part.js": "811178a0914b04975be4434734918ab8",
"main.dart.js_200.part.js": "05b20f06a4436b976993799c6ef9cbce",
"main.dart.js_174.part.js": "3cd56e14d88f597d48efba506847afb8",
"main.dart.js_335.part.js": "731690df0635f6231858be91be6e1049",
"main.dart.js_238.part.js": "6b1151bb7b0330939e30ab04b0d220a0",
"main.dart.js_339.part.js": "43f4e050d042efe0a6ffdddfecfc4c55",
"main.dart.js_123.part.js": "4d6d9e103ffbf075edccb03694099445",
"main.dart.js_249.part.js": "f40f654c53988b80756f39c0c75b0a5c",
"main.dart.js_74.part.js": "510ee2805d84dda939437194ae70e002",
"main.dart.js_157.part.js": "ad1ff66859ae8ece83b9da549608f439",
"main.dart.js_148.part.js": "6a134bd542ab36ea82a09b1b95c285c4",
"main.dart.js_166.part.js": "e6752e49a7bd6491222300130ddab1da",
"main.dart.js_229.part.js": "5ca1ea50985b8c1ee1fd3ba9d6d09395",
"main.dart.js_321.part.js": "bdcc55700770730f9b47ab80d443768d",
"main.dart.js_345.part.js": "9620c481026f6b6687fdb8fe4ce248ce",
"main.dart.js_177.part.js": "f11fdab887fdd6cd194525a13ff45344",
"main.dart.js_10.part.js": "4f961bb47d5b61aa5102553b61434f46",
"main.dart.js_2.part.js": "e60a5ad31d5006194c618fb790ca59b1",
"main.dart.js_51.part.js": "04c51ec9d9beaa00a8efb8ff0b3a69e7",
"main.dart.js_255.part.js": "66da9d1b1b04fe87980e95c6b7521358",
"main.dart.js_120.part.js": "d708f016ef2b024084cefddb5b3b2a8f",
"main.dart.js_349.part.js": "5b6f115ff739b52554770558c6c09d66",
"main.dart.js_32.part.js": "9d9f257f9550a1d4ad95f49e8019677f",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_244.part.js": "51bd90ae09ddea7ff0e6c92d1eb1be36",
"main.dart.js_322.part.js": "086ae73618eb0b2c9817b471fc7fa465",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/translations/sk.json": "e20b4c2317f454bc552b2df9f86e40e5",
"assets/assets/translations/cs.json": "c6791e8124c8fccb0c4c37f93de11b4f",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/uk.json": "06d8c6f66303ae3e257fa9a62fbf09d9",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/assets/translations/en.json": "c326075fec233964a8252da1ad1e4f95",
"assets/NOTICES": "676824ae0f7212fa5a73ec0b0f4955b4",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "502dc7bb5e0212e522015cf0e55cfc36",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_260.part.js": "5114f1dc1a4356f26b2eeb6be03fb2f5",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_127.part.js": "3991eddfe47329d153353658d7171b38",
"main.dart.js_185.part.js": "c6900cae569a02e8fc4235ac3f88fba4",
"main.dart.js_15.part.js": "0919c247d40634817628b9874a5d8204",
"main.dart.js_274.part.js": "12cd3de2b2f6f9cf02075d37eab7637d",
"main.dart.js_97.part.js": "7dd0a18918556589ee1f6a356ab176cd",
"main.dart.js_259.part.js": "b75b6da4c5165328c4e583d1f7cae7e2",
"main.dart.js_278.part.js": "41a6491239a62c7e3e2a8a3f55629c03",
"main.dart.js_90.part.js": "e5db67e61cda85e0f2ee1454bbdd5ca7",
"main.dart.js_14.part.js": "0efaf2d8e4dc4f055a40f351ed6f7fe6",
"main.dart.js_89.part.js": "cdccc8b5209452638245127d695ebde8",
"main.dart.js_29.part.js": "1b993a10eed06875229fbbdb7ce7e593",
"main.dart.js_324.part.js": "ab2ccd8cbbc6b3c7936a1d48f49112bd",
"main.dart.js_12.part.js": "67a1ec7bd8f0e22b0fc189034a4db1eb",
"index.html": "e76b7e9eb33a913369eb94fb31be667e",
"/": "e76b7e9eb33a913369eb94fb31be667e",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_178.part.js": "ad4f13cfcbf6ad028262ddb7c2a890e6",
"main.dart.js_347.part.js": "6ab8274efc69382b57d25820690a863a",
"main.dart.js_33.part.js": "8691ccd0a6ad2b0bb1a44025ab66eaff",
"main.dart.js_340.part.js": "354bc133acce0295243d6711aacd39b9",
"main.dart.js_270.part.js": "93320de659b47b079a0a4f0ccd5f8e0d",
"main.dart.js_19.part.js": "6b6aee926f8b8162444873c9e584c8fa",
"main.dart.js_96.part.js": "02fbd3618783400e4a2f0082f8cfaec6",
"main.dart.js_107.part.js": "70076f4e97bb22d0f4d41f5a583bdc92",
"main.dart.js_312.part.js": "85cc09e1d09d20ef9e3314d2a8fe0ec6",
"main.dart.js_91.part.js": "7079f685c698b5bcc6967eb3edba0493",
"main.dart.js_245.part.js": "95800a3d0cb9909ce59571626c4d347e",
"main.dart.js_220.part.js": "6f717a4a92cb2312bfbb107bca8c5352",
"main.dart.js_13.part.js": "912376f2db987233a61d13dbe17e2c99",
"main.dart.js_130.part.js": "4682fb481c370cadc8e5018375bd8073",
"main.dart.js_94.part.js": "93c83bede8bd131a3f0ef142c175486e",
"main.dart.js_164.part.js": "5f2bf4d8d3e37fe55a1af601c95f35ee",
"main.dart.js_171.part.js": "18f44323f04692e39af45876ddd49c74",
"main.dart.js_337.part.js": "56ec4ffcc88282c40a987f87958db091",
"main.dart.js_73.part.js": "5b261a2581527d92a632238579fa3eb6",
"main.dart.js_284.part.js": "7f6596c516ef82357595563c3198d90c",
"main.dart.js_53.part.js": "8624871b221b452620d9e51f07f88e9c",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_293.part.js": "3c919fefbd35aa3b145a162daf7d0a45",
"main.dart.js_160.part.js": "ed709d0c08990af930e03408c48cdcc8",
"main.dart.js_236.part.js": "14dc7e4b16095843b8a28b05eae34b48",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_234.part.js": "2478cb83bfc4851cf2927b82a67a8f98",
"main.dart.js_175.part.js": "632969abd3f507ffc8b52930807bcb29",
"main.dart.js_58.part.js": "2fdf2479a355a77b89a71099199506a2",
"main.dart.js_143.part.js": "4ca14901986aff6f5cbf58adc4d28671",
"main.dart.js_279.part.js": "f2e4878560c41637d236795fd5e2a951",
"main.dart.js_156.part.js": "9fbe2fcaaa52227b01b2932c9e3ed20a",
"main.dart.js_253.part.js": "6c9b8711a53ff753cbd13f295ea0fb6e",
"main.dart.js_232.part.js": "01e04ea00b71cb5fc126d954d7382a50",
"main.dart.js_30.part.js": "dd678850cd5e381f60d90f19744f43ef",
"main.dart.js_140.part.js": "bf26fb4e434e774ca22e0606318ffc57",
"main.dart.js_138.part.js": "c167434ea660a1532319816892494f17",
"main.dart.js_209.part.js": "3f2ef26b400bce961fb1fab0f1a65d1d",
"main.dart.js_27.part.js": "330efa466a1ad90158f266394927f17f",
"main.dart.js_24.part.js": "19d4afd4ad1675e247c58003af1ff27e",
"main.dart.js_42.part.js": "88183943ed8c1d6f7bac7c138fbe023f",
"main.dart.js_112.part.js": "55083de81559fa05717b18a0d9748efe",
"main.dart.js_336.part.js": "0472e3cb51a0ebcc9515b647426ea509",
"main.dart.js_275.part.js": "b95c84068a812044d0ee791d9aded3fa",
"main.dart.js_155.part.js": "b0d333bf632f62eab20da39d2f8e319e",
"main.dart.js_323.part.js": "2974cf6189c8d4e60c94e907682a3e8e",
"main.dart.js_134.part.js": "965c9ccbc72ce7ed472a31f46c2733ad",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_240.part.js": "58ba364c234b4a81f3b91712ec7f0e1a",
"main.dart.js_23.part.js": "698c7d7cbd27b8f7728cf41bd57e0643",
"main.dart.js_87.part.js": "be00f525ea6ebc6cd9e06334d026355c",
"main.dart.js_301.part.js": "c3b9a5899597aafa4c0dcf6307c50701",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_330.part.js": "60d68a28e5a26bdbcc8e33820bd9d99f",
"main.dart.js_179.part.js": "bfba9341c31781adb3ab2b6fff004375",
"main.dart.js_55.part.js": "a38670765f242273b1fd17f8b3f6b595",
"main.dart.js_84.part.js": "d1a4f5fbe54e063e93235249fa3111fd",
"main.dart.js_25.part.js": "4fc4726357a3f6e0311a8999d319729a",
"main.dart.js_351.part.js": "780372712bb9ba4bb5595ccb9a86b686",
"main.dart.js_333.part.js": "59649adf2981b80ab68d8efc1acda55a",
"main.dart.js_287.part.js": "1c8d6113431083b259d310abc7a6bf87",
"main.dart.js_115.part.js": "5dc2d031f42eac4e5266b31f4cf73bcd",
"main.dart.js_241.part.js": "212ad123187afec466ed00c09cc21e5e",
"main.dart.js_158.part.js": "0a3d265193da7c87827753d4fa7e9e94",
"main.dart.js_111.part.js": "29589552484fb9db7022e806d55858a8",
"main.dart.js_137.part.js": "28b971bf35e2d9f6adbf52dd5fa7021d",
"main.dart.js_199.part.js": "19106e7f45e4761d79a0cb19192adb5c",
"main.dart.js_215.part.js": "2bcb7e3a8e2d1d6e58444635a30de4c4",
"main.dart.js_78.part.js": "433a893092ce5b4e23cf79b740b91ce1",
"main.dart.js_311.part.js": "fd6af96bb0ac576fd3c6df19834f5b28",
"main.dart.js_256.part.js": "5d0a47cd83ff53aed007ec5731c9dd6b",
"main.dart.js_145.part.js": "1473aeb81fdb58352df6815126668580",
"main.dart.js_168.part.js": "44dfd9087acfbe51b2449ef6f6dc54b6",
"main.dart.js_117.part.js": "3efc13b84350a602ab2a689279fb48ca",
"main.dart.js_101.part.js": "a662dcfb294a56a452e4aca0da71110b",
"main.dart.js_131.part.js": "e3d9a8e735a59a0a07037753bbeb99b2",
"main.dart.js_216.part.js": "715c741e2b779e127bc3e98dadb11567",
"main.dart.js_197.part.js": "bde09ec62e784d2147abe18573891c07",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_139.part.js": "a617c97182d221758db4bf2109712c46",
"main.dart.js_352.part.js": "add47ffa13c3d19ea05c719afb64f353",
"main.dart.js_22.part.js": "f83877cfaeec2cb02bdce2a3d0097b46",
"main.dart.js_348.part.js": "7c7c053d43c994482f045f4e99a4ec79",
"main.dart.js_103.part.js": "3d203bf851995c077541466ed256dffb",
"main.dart.js_62.part.js": "a90973f689f629c8a1cf85d778b21226",
"main.dart.js_315.part.js": "49dab48b666fb9924a2ad353356c3b80",
"main.dart.js_176.part.js": "7af766cfce69115e2269b3c5e4e53e49",
"main.dart.js_202.part.js": "37b612e75eb79938ec2b26c0f03edfbf",
"main.dart.js_281.part.js": "cd41b4ebe01ac907b09ba2a416c8f471",
"main.dart.js_61.part.js": "9930685ffdd6afcef2182b6fb6762fce",
"main.dart.js_261.part.js": "70b91398df9f0f2070c902b1b4ff5780",
"main.dart.js_1.part.js": "1aed01178e3aadcd0aa8d080b40c2a17",
"main.dart.js_186.part.js": "868b49f9394bad92d87bedf28f655ff1",
"main.dart.js_4.part.js": "ad298d7d56deb9c78761b25904846718",
"main.dart.js_266.part.js": "9bcab5ed24850ddafd6567d641c01180",
"main.dart.js_217.part.js": "77ecc162e9b37411695fe0abf0928c94",
"main.dart.js_313.part.js": "5a3dc95b4c3b02d5b4616855bce46a67",
"main.dart.js_16.part.js": "5100cbdf2ecb7ada677f0c26f0a3d5f6",
"main.dart.js_242.part.js": "7a1d9449116ab4e7e91bd6e57ae70d7a",
"main.dart.js_66.part.js": "dc727ab7520c18d38aae8ba32e1119ad",
"main.dart.js_341.part.js": "c059ba1b49250a20c51b626cc546b3c8",
"main.dart.js_39.part.js": "e75e29767e8f317f89a8196613f38d34",
"main.dart.js_292.part.js": "643c3a03fb7b5abddef8d2731b245b59",
"main.dart.js_144.part.js": "0cfec78a49d9d402192e16c6a75236dd",
"main.dart.js_231.part.js": "a38504fc0d566ecefd7f7466626099df",
"main.dart.js_70.part.js": "6cff0bf02328c8e5816fb442013b49a8",
"flutter.js": "76f08d47ff9f5715220992f993002504"};
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
