'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_227.part.js": "e4c81991bf568ce15c5f6642af2e8a3d",
"main.dart.js_282.part.js": "b27da6b302b3e504e1904e88bef471d3",
"main.dart.js_44.part.js": "af40b9da6b250cc1424d018ac7c57ada",
"main.dart.js_222.part.js": "532a9b179e9223a5e56db77123dfde55",
"main.dart.js_355.part.js": "4c9b8dac8aed405ba9f33dc3ddcf9ea5",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_54.part.js": "0f1e9ddebe42d4d0905fc0717913cebc",
"main.dart.js_219.part.js": "06a8746a794480fcd5e969b3b0549bc0",
"main.dart.js_346.part.js": "cf1cd8bc451ffd99dd117b5b0749b02e",
"main.dart.js_304.part.js": "2bc8b227110e5cff9f1845b32d1b157e",
"main.dart.js_280.part.js": "e69a815f186ee73596dbf8a7affd52fa",
"main.dart.js_314.part.js": "219ce712902c8948a66f4c4c91bdd1ad",
"main.dart.js_95.part.js": "d002623b60adcdfa3dd0df2261789419",
"main.dart.js_35.part.js": "a45d93a9fe2e02e48b0e896bcb3fcb95",
"main.dart.js_125.part.js": "5b9f24caeaa31c8ef27ecc253d7fc14c",
"main.dart.js_297.part.js": "d11e4919a936d29743bc6d65cf2dc7ab",
"main.dart.js_161.part.js": "1a0b9deb7341c145f622daab6ec9f65b",
"main.dart.js_104.part.js": "4e72a1d06ceb8e55d5894a8980e9924c",
"main.dart.js_296.part.js": "fa36f4ce9fb3c01b1beb84194462ba69",
"main.dart.js_133.part.js": "34d906dd357fbe8c72d6c62dc7f5addf",
"main.dart.js_320.part.js": "ed74f386be06086259c08f0e372d9f71",
"main.dart.js_149.part.js": "87bf7579bb2cdd871880006a8d7f65c6",
"main.dart.js_8.part.js": "d3015057538c46872642b9ec7362296f",
"main.dart.js_194.part.js": "4ac628341d9718b29919308c6be5d310",
"main.dart.js_273.part.js": "0682e4761fd4cc5f503f759b51a82a53",
"main.dart.js_11.part.js": "a6b725a0a9fb74c504892570ef07df91",
"main.dart.js_108.part.js": "d3c363dfe98350f8f80cf20d09cf61ca",
"main.dart.js_77.part.js": "b20bae0fe4cc515dacef62d602eafdf2",
"main.dart.js_250.part.js": "f9f6acb07e9fc3096448a5ae9dc2490d",
"main.dart.js_225.part.js": "a30b6d9d429a941aaeb045f17207597e",
"main.dart.js_146.part.js": "ca4bdace0d0296628093ee01b180b325",
"main.dart.js_342.part.js": "7d2bfd71e27fba68c7a26b49c4735653",
"main.dart.js_38.part.js": "6890d85d4e81a6dd528549b20d1e8dad",
"main.dart.js_288.part.js": "70445cf523bfa2f907fc240b670b40bb",
"main.dart.js_359.part.js": "0dbeb08dfc6a354d033a95a2c9c37018",
"main.dart.js_113.part.js": "d268fe864eed8cef88e114bcb8bbefa0",
"main.dart.js_211.part.js": "aed9701a8beabbe66e4f8dc6ff5fd42c",
"main.dart.js_201.part.js": "c13a7a7ac9356568bc0ca92f43579c1d",
"main.dart.js_358.part.js": "9f2960af5208d1631767b54d17b7f74b",
"main.dart.js_147.part.js": "19a741e322eb5668b0770f16970630f6",
"main.dart.js_135.part.js": "572d2bea32542569a8fe40bce87705a9",
"main.dart.js_114.part.js": "8e187ce40a78a1ecd9fdccadf7fffde7",
"main.dart.js_298.part.js": "ca71a83d08c3c5ef383531e2df7915fb",
"main.dart.js_329.part.js": "3273c486457806788cc5de14672ebcf8",
"main.dart.js_327.part.js": "4541e568dc7d8a1d69a7812bded823f1",
"main.dart.js_165.part.js": "4dec412cbb0074940db49b2ac05c0d3f",
"main.dart.js_7.part.js": "255b32c0f1d61cf62f66c0add72b6cb2",
"main.dart.js_64.part.js": "a1fa2e5bf33883ffa7eefeacaed762aa",
"main.dart.js_302.part.js": "a40d4f2ff451de28598e7aa1e4ed0699",
"main.dart.js_56.part.js": "a3bb855d2b42b97950931154aac9a266",
"main.dart.js_226.part.js": "e17146ee5ed49f48c1d2ed8c1ccdbce4",
"main.dart.js_102.part.js": "b50e11dcdf0b90420a245ccc2124c9cc",
"main.dart.js_254.part.js": "5c56f3ebcd5aed8975b89897446b3130",
"main.dart.js_65.part.js": "546e0cfe76f09137ff80a8f72c34518b",
"main.dart.js_317.part.js": "5b6c47a28ddb199adc46d293556c5fc0",
"main.dart.js_319.part.js": "d2e07caa04d48468e7cf758e86d97518",
"main.dart.js_68.part.js": "bf713db406c120ec988c9cc4d31692c1",
"main.dart.js_75.part.js": "6b975c8a59fb54f39a2a388d2d7940e4",
"main.dart.js_52.part.js": "c633a5c391ca5b4081898e1c524eb14b",
"main.dart.js_334.part.js": "938c8224250f201554050707d21da32f",
"main.dart.js_136.part.js": "df7eead9e99c01a50b87cdca80ee4675",
"main.dart.js_264.part.js": "d6612f5f37a17801852d572235c69df2",
"flutter_bootstrap.js": "7636c7c7d235a099b35420c3b771aef2",
"main.dart.js_318.part.js": "520765092a04cab8566e4f905325489c",
"main.dart.js_294.part.js": "af7486c1c4d8150d5cccb6403d5b15c2",
"main.dart.js_190.part.js": "cc601d5340e2a1df9398828db83b1298",
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
"main.dart.js_308.part.js": "f16389b9c68346c6121c573866024171",
"main.dart.js_361.part.js": "e78aa50d63003dc0dc7f08b1579740c0",
"main.dart.js_100.part.js": "ce4c11155d2d9b0e2dc6aa5530206afc",
"main.dart.js_353.part.js": "465e2b377a1a32dcc11c5b73a69cda54",
"main.dart.js_121.part.js": "78ced6a08ba0e98422f27899b5c95547",
"main.dart.js_36.part.js": "268de94081c1f72301ac27366d288ec8",
"main.dart.js_170.part.js": "c20a3b193f216928122bcfae531882ef",
"main.dart.js_154.part.js": "13fbef574a0efb0e6a60f2dde05439cc",
"main.dart.js_290.part.js": "7ce3ef44b906aa0c955dd5be15723fab",
"main.dart.js_20.part.js": "b8a6d8180b34e802394af816281bdef6",
"main.dart.js_141.part.js": "4da9a26b9182b052721fe869fdce2b77",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_180.part.js": "8391e3b456104549370f9f6015418ad7",
"main.dart.js": "7fe99bdbf85bfe6d7d8aaadccb7dae25",
"main.dart.js_80.part.js": "9d5a31299409cc80f07e692796fa633d",
"main.dart.js_239.part.js": "4500b963cac0111f645b7fcf82676e2e",
"main.dart.js_31.part.js": "ec888d189486269850c167c111fe2f7f",
"main.dart.js_167.part.js": "a3cba4172482c4618e42fab60efaeadd",
"main.dart.js_328.part.js": "1f36a9dd019cec0f5218ca91f2e8f346",
"main.dart.js_37.part.js": "9d3d5050242bf4d6d5f70166b306140f",
"main.dart.js_9.part.js": "a4798bb86b6b22df9d850d6b5bac0b55",
"main.dart.js_118.part.js": "96d16e491c790003863b98d27b5cc646",
"main.dart.js_332.part.js": "5f0c7a7620e14813e6a20ec82e264305",
"main.dart.js_224.part.js": "97009942b873802aae14eeb464dd2043",
"main.dart.js_150.part.js": "1b73d87bf8dd8f72cb95b1cd40906e1a",
"main.dart.js_326.part.js": "77db90f761453bfe2809052c27d9bf4b",
"main.dart.js_309.part.js": "7dc368080b59da57074143f0ac233f6e",
"main.dart.js_67.part.js": "e324872628ca7471aa2b2ea3b4fc0865",
"main.dart.js_300.part.js": "44074a61608a0c5ad491e81af536a488",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_3.part.js": "32243b93072be4fa880440f438716802",
"main.dart.js_105.part.js": "be11bd32ce48eb7e1b87a174b1d80fe2",
"main.dart.js_350.part.js": "a05a5e4374536ff685bc8951afaf0dc5",
"main.dart.js_271.part.js": "8e6e2330489004020954b86b0a02c68a",
"main.dart.js_71.part.js": "4ee5d148a39b73b49ce0a6f2e5086c6a",
"main.dart.js_59.part.js": "1b957a60800234d1f12c2da79a802eae",
"main.dart.js_142.part.js": "be6c550fa35d4e6731d9b1c0f2009310",
"main.dart.js_251.part.js": "1ea5572aa639345a1bae0725e7b03f8d",
"main.dart.js_243.part.js": "0a4a58e2d268e42c3ea1671a79df03ee",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_99.part.js": "ab677789c9d9328c6c953d2b5549dd95",
"main.dart.js_34.part.js": "5c65db607a6584d2e453ff0c16bb09e9",
"main.dart.js_286.part.js": "109f2c80520011e84fbbed2c03ad1615",
"main.dart.js_344.part.js": "415ed8e4956ae59957eb952f259fbe0e",
"main.dart.js_181.part.js": "2555e24eeb48cad145ae683b82852d50",
"main.dart.js_173.part.js": "caf7f6b080436a28eaa87b468c1701c2",
"main.dart.js_28.part.js": "96af7abd478c1b6eb64c1bc548a74a66",
"main.dart.js_338.part.js": "791db49c68b9d3d1cce59132801479f5",
"main.dart.js_163.part.js": "5a6a4b5ecb55ecc760b349a554ad4a31",
"main.dart.js_369.part.js": "4a66c5f5b6855eff7291ab93460be443",
"main.dart.js_17.part.js": "fbc6bb15daea6c513f421197771cdcd8",
"main.dart.js_343.part.js": "e546de26af2cf5762e6e24efb5fdda5e",
"main.dart.js_21.part.js": "7b50a4f6917a03f2120f559c8a558bb8",
"main.dart.js_283.part.js": "8ac5555807238a9a27fd7409cf1cbf24",
"version.json": "ddf3a33e22fd79382de18408e9a42539",
"main.dart.js_152.part.js": "55cd2072c020031ab786d553506eca90",
"main.dart.js_365.part.js": "801ab19d366d728c238c4b2873061332",
"main.dart.js_169.part.js": "55c003402ad174c1f85e71e4a7da2ee3",
"main.dart.js_198.part.js": "ca119e41eddb8d2149fd3a9fad90abfb",
"main.dart.js_228.part.js": "f1a81eba4e18f0159322b3f5276719b1",
"main.dart.js_116.part.js": "ae3041b57e55e80172d86ae1f3a3a2c1",
"main.dart.js_109.part.js": "9f37360d524381847a9c02e760701212",
"main.dart.js_92.part.js": "fbcc5cdc03a97441c50eebc505323c49",
"main.dart.js_126.part.js": "1495a7a80f80fde8fd16ca7539737266",
"main.dart.js_305.part.js": "2eeb60b8a4608eef25a20d8c60ea6b9f",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_182.part.js": "6a50885dcbcc123cb06991e59271e5b2",
"main.dart.js_26.part.js": "e65c0e1b52176a70a803c2769527db2a",
"main.dart.js_124.part.js": "9ba2c4d70774878a487840f2452b89e9",
"main.dart.js_306.part.js": "96865490620a8aa44defa2276189a60f",
"main.dart.js_364.part.js": "59154c49a91dfad29de20fbdc9a74289",
"main.dart.js_98.part.js": "10052c27ec18bc5adcc20097260957fc",
"main.dart.js_18.part.js": "b31a0fe793966bb6c3c33d2a39e1d2cb",
"main.dart.js_41.part.js": "672196c707d35c1a0eb9f470cb66724f",
"main.dart.js_210.part.js": "0e84b6877390b854283c4b5ad5408d13",
"main.dart.js_303.part.js": "3bb282fb31e6dfdefe34c445c35d013b",
"main.dart.js_371.part.js": "594c831f159f8f3e9b9e2e4fea076986",
"main.dart.js_285.part.js": "944f3d0f739e5c8a0220d97e4910366e",
"main.dart.js_63.part.js": "3401ea4c461f1c09c6189eb0bfda1f62",
"main.dart.js_110.part.js": "905fe232bb0759722b9b58e0990488b0",
"main.dart.js_237.part.js": "09a2219ae18d5805d4779cdcab731658",
"main.dart.js_106.part.js": "daa98f343df145800c227758d2e21516",
"main.dart.js_200.part.js": "97457881392045ca34e2f43736bff2d1",
"main.dart.js_174.part.js": "2608353fa653993042a4d9c267e00e31",
"main.dart.js_335.part.js": "7f8bd8edae1daf45a6b73b781afddff9",
"main.dart.js_238.part.js": "0e3aa043e3fc66bce6afcbb071a08d85",
"main.dart.js_339.part.js": "5cf49f0711dac30c456b1f279f8b4f2d",
"main.dart.js_159.part.js": "a5bdd4b1b573cac068da1d532512f1f3",
"main.dart.js_123.part.js": "b8fb3822646f1aaf6f02561929511ddc",
"main.dart.js_249.part.js": "59b79147875dee35b3ec2df865faa976",
"main.dart.js_157.part.js": "dc298d92220588f05ae3b3390720e305",
"main.dart.js_148.part.js": "b274a65a74de5b1e562651d84afc66ea",
"main.dart.js_166.part.js": "00d837771f572d57bdeb5ca5c4a7ef82",
"main.dart.js_321.part.js": "39318a6ee2bcef748ef6717b0b618778",
"main.dart.js_345.part.js": "4b661e1d4b06436e58c8e31bee875c45",
"main.dart.js_177.part.js": "3eefd874812e887f936f36e08f025562",
"main.dart.js_10.part.js": "5b455e3e10ed9834281cf5d3427e23b6",
"main.dart.js_276.part.js": "868f7c11a99b9f1f8b533a1505a968db",
"main.dart.js_2.part.js": "4db81b5f91d65869393769d3375a8b45",
"main.dart.js_51.part.js": "149ea5b1004a1a3be59b900fbcc2c1ed",
"main.dart.js_255.part.js": "b13fedd234c9a7a73e91d0150f36a52e",
"main.dart.js_120.part.js": "3b39928429cfb273f7d90c94035347db",
"main.dart.js_258.part.js": "7dc2d019aabb63fb8b61fdff305820b4",
"main.dart.js_349.part.js": "86aee5cc7dcbccf08d6afc8e20bc6f09",
"main.dart.js_32.part.js": "41cdf3687a0ddcb53131fbf2bf354ae4",
"main.dart.js_372.part.js": "24a2ce44fdc21709b3a5750d262ea291",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_244.part.js": "9c5a59d92431339629e03f3e0a11f7cf",
"main.dart.js_322.part.js": "789761aafaa8dcae8d82abef5e23d855",
"main.dart.js_82.part.js": "9942768135c5b04608e0bc4dd1ffd2c4",
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
"assets/assets/translations/cs.json": "cfaccc97820c93b84adeed8dc2e226d6",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/uk.json": "06d8c6f66303ae3e257fa9a62fbf09d9",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/assets/translations/en.json": "b39f0a8c02c77a3e313c9f05b4f2b5e3",
"assets/NOTICES": "676824ae0f7212fa5a73ec0b0f4955b4",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "e45cbe0855ac019173bba2a429558e77",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_235.part.js": "1e6977035f22c4bf2153eea383b677ac",
"main.dart.js_260.part.js": "fbb9517b6f352324edd6322c07eeffe5",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_79.part.js": "bcfab6d25139a2ff06c890d6e0c64821",
"main.dart.js_289.part.js": "78734418c3a1acc5b7ade215c166067b",
"main.dart.js_192.part.js": "6858a4eb255fc50b17c311d26bc7dc9b",
"main.dart.js_185.part.js": "5ba854ddde6d48b9f9b9542ea9f739d8",
"main.dart.js_354.part.js": "f3dd8a72083b55562b26fdea4c6c8362",
"main.dart.js_248.part.js": "a8383f594120a6e25522009a104c3232",
"main.dart.js_15.part.js": "37314c5d621abefcde91d15bad4faa4f",
"main.dart.js_274.part.js": "63fa29b64170ed246cadedd43cd1491b",
"main.dart.js_97.part.js": "67fb94c004a079ddbce8b1632891e043",
"main.dart.js_356.part.js": "e292f5cae6e4ee636ce971705fb07860",
"main.dart.js_259.part.js": "a8fee39484d021d4277e410eadd0019b",
"main.dart.js_119.part.js": "53a8f307714d3917746658cc373ed01e",
"main.dart.js_40.part.js": "cf6a5a7adbc079606ef667c43813bd9b",
"main.dart.js_14.part.js": "0974e3c4bd90bebab8bc8a1b7b9d9301",
"main.dart.js_89.part.js": "4a9d6d46e56f00e2a28e941e987ccaac",
"main.dart.js_29.part.js": "f3511b2bbf20f1507324dfd3c4f5445c",
"main.dart.js_193.part.js": "6fa8eabd5030cc640492f1b0068d233d",
"main.dart.js_324.part.js": "0bd3b902edb405a8f98cd470055dfdf8",
"main.dart.js_12.part.js": "7f6ec096303b01c3808fcdf1efb6b192",
"main.dart.js_360.part.js": "8b269bd8a3e2f29af3d4c65d80e2e816",
"index.html": "66cd92dfdfe7aa95040f6c2f15a55a05",
"/": "66cd92dfdfe7aa95040f6c2f15a55a05",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_178.part.js": "354fed3547b6f109d0899b6bd264ad17",
"main.dart.js_347.part.js": "7ea83c19052689f59cc5c5732626820e",
"main.dart.js_33.part.js": "780b06cdef609c9563f05e01f82fd72b",
"main.dart.js_270.part.js": "bd0a055199c5bb2d63f014cc911842bc",
"main.dart.js_19.part.js": "296ce29ad086b9ecaff32c86eef6e3db",
"main.dart.js_188.part.js": "cf03f5d97dd140a87f21e2c2fb7e273c",
"main.dart.js_107.part.js": "fd7069e30f30762b7e8cacc5dd71fd2b",
"main.dart.js_312.part.js": "bcc80b01d687c2297afffdad6227b810",
"main.dart.js_91.part.js": "418e66961faefbe6ca5b075be0616659",
"main.dart.js_245.part.js": "a05ab34f8abcc3b8730add39bbf70268",
"main.dart.js_13.part.js": "37c3116a3c6abf9ad551b123c524c7bf",
"main.dart.js_130.part.js": "aaa715df1534b12dbf5ac881399df8ca",
"main.dart.js_94.part.js": "95f53ec2be947762bc3773bda214ec1a",
"main.dart.js_164.part.js": "d3b5ecd22172365af67e888be519b187",
"main.dart.js_267.part.js": "cc7535606666b427077361dee67fd4a4",
"main.dart.js_86.part.js": "8c07d3d994203953009fa13d18072be4",
"main.dart.js_171.part.js": "729638a58af85554391778070d04415c",
"main.dart.js_162.part.js": "d2ae094884aaba7dc4a90658c03cf3a5",
"main.dart.js_53.part.js": "7181465bd9393fefc5828e1b6a047009",
"main.dart.js_366.part.js": "ad6c18c82509aa88a9cbe1091f665fc3",
"main.dart.js_218.part.js": "176da5dc922b251d1b7bae188e974a79",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_293.part.js": "0be7218cc7400f35a95974b0d4ed0e70",
"main.dart.js_236.part.js": "e21daf2a4b4f5f97f3b3a89864123e4a",
"main.dart.js_265.part.js": "5c626ef602cca79e46514afed372e568",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_76.part.js": "a9e81ea6674df3fb40b3a425eca1b872",
"main.dart.js_234.part.js": "fec22cd36fc13ed5e4360e94109cef74",
"main.dart.js_58.part.js": "806aff3c9f4ea33b1dcda1ee99dc6160",
"main.dart.js_143.part.js": "43891b22b15fb5f40931324614789a3f",
"main.dart.js_279.part.js": "9f3912155865370fae042683ea79cccb",
"main.dart.js_156.part.js": "90591b8b1fadd7d907477492b3134d49",
"main.dart.js_232.part.js": "07ebb023e80730f22b94cbbbb4d26324",
"main.dart.js_30.part.js": "d2bcf51f9da386fb9259bf06d259aad9",
"main.dart.js_140.part.js": "5f45df3d775d9c4280666088a403e80d",
"main.dart.js_138.part.js": "f5383c863d2b8e2c59ddb4262d676473",
"main.dart.js_269.part.js": "af43200f47455095c9cc8128e383209e",
"main.dart.js_27.part.js": "e87e870b9bad2132bca13e561c1975a3",
"main.dart.js_24.part.js": "ea4b057835aaa8eed82191e1efdaa888",
"main.dart.js_129.part.js": "aa2f0f4b6a8daa112bd7845d9fd38440",
"main.dart.js_336.part.js": "f6d6452419c3224c317abad20156be0b",
"main.dart.js_155.part.js": "53ff68e16c40abd90c5ff8760cff991a",
"main.dart.js_134.part.js": "9f87c9ae93b16584680015d20d5e7559",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_240.part.js": "a8bc4bc41a445e68558fb7b45c91e544",
"main.dart.js_362.part.js": "cd120961636cb63c14b43250d49aea2e",
"main.dart.js_23.part.js": "55121350e2709357833aa51bb0e1ce4f",
"main.dart.js_47.part.js": "882d48ca817196b27f6a65d578f50578",
"main.dart.js_87.part.js": "3ec8baa6e47de9a389b57cb5358f0e6b",
"main.dart.js_301.part.js": "5daa86680dab0da300bc0a528d4867d6",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_330.part.js": "6b7a4df49f76a08e3dd0ff5e2f7d5dd3",
"main.dart.js_179.part.js": "12ab4d70da8e964a0277da74c4d08706",
"main.dart.js_55.part.js": "916145cc1f6649df285d12d7d87932dd",
"main.dart.js_93.part.js": "354c18cb14aca7aae02d8ff057e50fc7",
"main.dart.js_25.part.js": "4fa3519dae12899a5c931caf527b5e2d",
"main.dart.js_206.part.js": "f4448ef45c594f1a53ecf1bc6260e1ef",
"main.dart.js_331.part.js": "5a597724a62c3987e54a8d3b9a96813b",
"main.dart.js_333.part.js": "4ecd2dc6b83dc486ecc273262470dfb2",
"main.dart.js_263.part.js": "4eff7f1cd38124f3cccd7c03edaafd31",
"main.dart.js_287.part.js": "f110d58f5ac749cf0fc20930f5a883e6",
"main.dart.js_115.part.js": "ba10f3373ea3b79566a57637003d089c",
"main.dart.js_111.part.js": "4854597d674df95e2eaec7674fdb8d5b",
"main.dart.js_137.part.js": "8f6b97af71565851e6484cdc35fbc33b",
"main.dart.js_199.part.js": "513901f2f56fbc237489d3c27b07cd50",
"main.dart.js_172.part.js": "75742938ad641d22b7ea4c171358754d",
"main.dart.js_183.part.js": "81aaf4667d514b0f0e5382b96e0c57b5",
"main.dart.js_256.part.js": "3ebd3536bf535c3a9568823aa4c78c15",
"main.dart.js_168.part.js": "a15e1998dcadef7937672add9d73ad71",
"main.dart.js_117.part.js": "4457852daca5683304ddee10e70616a7",
"main.dart.js_101.part.js": "0c416c4174d4904d15b576e47cbb0ac4",
"main.dart.js_189.part.js": "3206866485e23dd8123c229fdfeeb060",
"main.dart.js_197.part.js": "26b9fdec61f5f5196ab0e0bbb7e1d6f4",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_352.part.js": "4e5a7685e744ffaad1b8a5530ff4e241",
"main.dart.js_348.part.js": "90a372f863d6f8b0e29ff7be34e483bd",
"main.dart.js_103.part.js": "0e79d16853f43d5aeebbf7d897310bb9",
"main.dart.js_62.part.js": "4ce1bf43786be69093506fdbac2912e6",
"main.dart.js_43.part.js": "03ee58b3f51739e30f0280e4c258a99e",
"main.dart.js_202.part.js": "e983576e3b6a45c66ae62c7301b9ea87",
"main.dart.js_281.part.js": "a745ba78538fd3df5d8fa96a584fe15d",
"main.dart.js_61.part.js": "3d8d2bf27c6243f36cd0978b13223db1",
"main.dart.js_261.part.js": "be8141af7a2421510222500abd41f94a",
"main.dart.js_1.part.js": "0c7fd615fa973d04a7701f9d86473eb4",
"main.dart.js_195.part.js": "48765c7ed146c73e15d47492ee3f5df2",
"main.dart.js_186.part.js": "cda8fa32c8a55074761423bacdbf369c",
"main.dart.js_268.part.js": "9e644030b47621ed5b15b57555661acf",
"main.dart.js_4.part.js": "330439401b24bc8092b4404941e54c41",
"main.dart.js_266.part.js": "37c58f23e50169556678544ef910dc85",
"main.dart.js_357.part.js": "baa1011b426b9b1dd4ab1dab7a58bb72",
"main.dart.js_313.part.js": "14b940611c24a2184a984737dd5d8aac",
"main.dart.js_16.part.js": "00a8f3b5606fe55f71f2ab234b28df03",
"main.dart.js_370.part.js": "b6be0320da245ce4886bd699fc2397b1",
"main.dart.js_341.part.js": "271de640d8f7f7df146c8516a12867f1",
"main.dart.js_39.part.js": "4b37e5c7e63841ecb139906475762139",
"main.dart.js_144.part.js": "ca1b94cd8e13cc63bd7a1b4974d777cd",
"main.dart.js_363.part.js": "373bd48c3bf0173db868497a6f94ba90",
"main.dart.js_231.part.js": "85395db5eea71fe3dda511c1584d28cf",
"main.dart.js_367.part.js": "c43314cefc2508a413acd413dde99c99",
"main.dart.js_368.part.js": "03b7e7bcd057c40c92cb8978f74fa661",
"main.dart.js_70.part.js": "f8ea8d56141bdfed81b585566a3aaad5",
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
