'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_348.part.js": "e58751c649af401373965c8fd0a511fb",
"main.dart.js_157.part.js": "dc762469008a3c54aab07ce1b29862bb",
"main.dart.js_329.part.js": "aca4fb6c27ae720a3021d815791427b0",
"main.dart.js_283.part.js": "a3a1d78bc0026ef48eed380426716291",
"main.dart.js_266.part.js": "9f41411cea0fa16234da9e27964d3280",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"main.dart.js_126.part.js": "e60a65de537a72487ebcb6228b50a260",
"main.dart.js_202.part.js": "1b48dc19e5455c96c1b91efa550aa17c",
"main.dart.js_271.part.js": "cf08e1d528d6054eccc2d38be4fb8fce",
"main.dart.js_58.part.js": "2b6e3b0d31c2c2215fa342bfab124c83",
"main.dart.js_121.part.js": "c77e405d535947da8817d0ecaf17a373",
"main.dart.js_345.part.js": "cf80f7053ffb9099cc4a3ab81650ccf5",
"main.dart.js_303.part.js": "0b6846672690deebc68ae3c128db9d0a",
"main.dart.js_114.part.js": "34f604010fbd1722d0e1a721a256cf6c",
"main.dart.js_9.part.js": "697c2d7cebe0af3572ff0deaaf5a27b7",
"main.dart.js_166.part.js": "79ebb7ab2a559832602dd6e6809db505",
"main.dart.js_170.part.js": "0c68a21b948b6a091ff41a25834be829",
"main.dart.js_236.part.js": "5db99c8dbb70ee3d5f58b95135643742",
"main.dart.js_36.part.js": "cc7c14ff5b485287c5cd2e82f3a0a3a8",
"main.dart.js_64.part.js": "d02f6c7a1248a14b2d74fc87d66c2349",
"main.dart.js_229.part.js": "24e6301e3131895b030e4b1203c226a9",
"main.dart.js_174.part.js": "49be5f91c8f31a49c7bc78886a714501",
"main.dart.js_307.part.js": "bfe818ed0da781a544558061f939fde7",
"main.dart.js_368.part.js": "488dbd18c31e1b4ed5bd330d13942581",
"main.dart.js_156.part.js": "de87145a5bdf230bc6aab02a1a8c31d7",
"main.dart.js_176.part.js": "17a473dc7634ff62c66c21077163bca5",
"main.dart.js_258.part.js": "a25bb8a73598f4d1e5aed4e492c5589d",
"main.dart.js_98.part.js": "574e96c78a6ebd30035d2990db667f2d",
"main.dart.js_299.part.js": "05b42ca560e66de95d32eb93b4834841",
"main.dart.js_331.part.js": "35046c3962cc125b5263b79d5ac7f766",
"main.dart.js_254.part.js": "f0f9b45cfd0033b8d69824dc8bec8072",
"main.dart.js_346.part.js": "26a0d0571fb1c0745ae1e27264da21a9",
"main.dart.js_247.part.js": "245fb81dd39fd384d6194090311ab4da",
"main.dart.js_212.part.js": "39c44fe8548ae1bf9e762236c1254fcc",
"main.dart.js_120.part.js": "8534be0dbdf0047d3540401f0cf41f4e",
"main.dart.js_357.part.js": "11a4acbd8b6d761478ac4c94262469fb",
"main.dart.js_327.part.js": "a10e8152dfcbcb85656c5f6ed70186ec",
"main.dart.js_82.part.js": "5de30d153dc33a2b9dc0a6119a461bc8",
"main.dart.js_62.part.js": "f778a39739e35435efa9771d30185a89",
"main.dart.js_34.part.js": "e63de992e305a68c0bf8119e73c8e65d",
"main.dart.js_30.part.js": "30292078d2fe86dd6cd3052223338b5b",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_291.part.js": "5a8103fc84e7dbb6215abc4ce12642b5",
"index.html": "afd6271447e01e2a7ac803ca13f62331",
"/": "afd6271447e01e2a7ac803ca13f62331",
"main.dart.js_29.part.js": "e74a5f0081f51767767f6bc1e9d94dd1",
"main.dart.js_12.part.js": "8792b5ee22a6c78897942e7ab9d3ed5a",
"main.dart.js_69.part.js": "b7b51ae1f25d56b14edbec80ecc5cfd8",
"main.dart.js_79.part.js": "8952f0faaed00139e8b47e61a55c485c",
"main.dart.js_315.part.js": "6dc2e0bc48f6b4f8e647de38bf899c49",
"main.dart.js_246.part.js": "93a9068b51bf4f56555def407f0b600d",
"main.dart.js_298.part.js": "d38164a9268bce3ce7347dd686652744",
"main.dart.js_39.part.js": "84d737080ca66b2c0f64650a857fff77",
"main.dart.js_164.part.js": "899899494c25728e40c8b390d61e3275",
"main.dart.js_137.part.js": "da9c1bf71213da7e6521b30b61b7ada3",
"main.dart.js_112.part.js": "5158a3e8aa97c3fa1a7c8bfe3a172a26",
"main.dart.js_32.part.js": "ea65506d4de37b95616f73437859b1cf",
"assets/NOTICES": "c32231ff1ecfde7f99bf03674e519eac",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/uk.json": "06d8c6f66303ae3e257fa9a62fbf09d9",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/sk.json": "e20b4c2317f454bc552b2df9f86e40e5",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/assets/translations/cs.json": "6defeb4254654b4ab4a29622114c296f",
"assets/assets/translations/en.json": "a5b6fbf79a1fd60c273e53cfa0eb255e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/MaterialIcons-Regular.otf": "88452f83ed1976df4fe17afeca6c08ef",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"main.dart.js_95.part.js": "3d3732b4372b0825b049f7e6c978f636",
"main.dart.js_301.part.js": "077c590ffd7665b66c80b8f625aecfcf",
"main.dart.js_334.part.js": "96d932a5be2adc27da55d1516f6aaa90",
"main.dart.js_203.part.js": "d8948805f8d522ebf460d152bd4e679c",
"main.dart.js_183.part.js": "4aa0aec55e88723f56678ea9753a085d",
"main.dart.js_132.part.js": "8aeca24b6ea9f1632875bbf11855ac95",
"main.dart.js_370.part.js": "66042b1f5bd4f2564e8cc9e0fa9a6b2e",
"main.dart.js_21.part.js": "2d8927a912fd6d8168ad83bc2f32d686",
"main.dart.js_149.part.js": "d387a85ecd465eeeb1b750dfdf3c784e",
"main.dart.js_214.part.js": "a8c2f1a49de72245e6a017678bdd4a5c",
"main.dart.js_55.part.js": "d3322537e28355f9e6b4601dc7475711",
"main.dart.js_155.part.js": "aa60eb841722957cd3dc598cf8df6627",
"main.dart.js_249.part.js": "aeadceff5dc8a837d214fc4ab0f6686d",
"main.dart.js_135.part.js": "1522766ebc341783e5600dbf83ff0794",
"main.dart.js_123.part.js": "616832431781f6d354d0c9a255893d7f",
"main.dart.js_276.part.js": "37a8343b75ffad5e9895c03324d546e2",
"main.dart.js_319.part.js": "e25dde0196e3efd9cbd19c31986dafd7",
"main.dart.js_147.part.js": "4473caedd70d44bd95571956e2eeaf2a",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_260.part.js": "463b962cf26647709a90af4389ac1853",
"main.dart.js_20.part.js": "7531208627ca195f6c0204d0e37078fa",
"main.dart.js_67.part.js": "5aca411b1b89556ab9638143e6581bfa",
"main.dart.js_204.part.js": "6a7c1e38f42a4ac91d341a3c022aff84",
"main.dart.js_144.part.js": "aa071e67ba3e5e2e40f6b796f525d5d9",
"main.dart.js_133.part.js": "ffe03fff051899b8c30ab3f65f8c523e",
"main.dart.js_304.part.js": "a1078fc5ac40aca9f5a74d006c88d55a",
"main.dart.js_240.part.js": "5381cded8bf92e5bfccbb1a8c45c4031",
"version.json": "2994d3d9806ea2214383c3a7b2397d09",
"main.dart.js_285.part.js": "c60c9fc518c63808382fe3c40b93b2a7",
"main.dart.js_75.part.js": "49b4922588bde7dc687f85f0a8ec88f1",
"main.dart.js_263.part.js": "f8614f248c7aa09b35f0a2ff4293f230",
"main.dart.js_311.part.js": "7b352b68dcd3929123d3a782b4a0ceed",
"main.dart.js_347.part.js": "19338fe658067a46091396620fe54b84",
"main.dart.js_99.part.js": "1dea36bf924ba77b886b3432c2f494ab",
"main.dart.js_14.part.js": "6f0933261da73f559e3607f68c1e917c",
"main.dart.js_233.part.js": "e98a45e7a8c2d2b43dcc1fb29b667db0",
"main.dart.js_277.part.js": "ced78223dd47caa97714804395bc8d82",
"main.dart.js_53.part.js": "bd5a3b6608fa393112f2a72d133fc7a8",
"main.dart.js_273.part.js": "265a5bc926bb70f344b899eb780ea72c",
"main.dart.js_108.part.js": "c816ab395fdc751f42282ecca3c9ae14",
"main.dart.js_187.part.js": "49765363522480e407043c248479a273",
"main.dart.js_305.part.js": "f9d28b0f1305a7a9d145bdec0ad26e40",
"main.dart.js_193.part.js": "029f36073f4fb5b04f741a0aa6d5c8e6",
"main.dart.js_366.part.js": "16e2fa1f736470ffe2a1b06c063b0ab1",
"main.dart.js_264.part.js": "acb39476717de768f0ceedebe0e80b1f",
"main.dart.js_371.part.js": "01f3ed66b838432b92ee19455febd39b",
"main.dart.js_168.part.js": "1a97f6aa5bb5492ab2a44a72aef7df3c",
"main.dart.js_341.part.js": "b5df2556bba346b65d4cdfa3fb33c2d7",
"main.dart.js_339.part.js": "25ca96822aa71505511fca519d67a2d1",
"main.dart.js_215.part.js": "437a93c824fd7a38da264ff85eb4f492",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_279.part.js": "09d11dee6a79c33073cb2378821a8f6c",
"main.dart.js_243.part.js": "a60d36ef78872b56da4ff5b6939cdf9c",
"main.dart.js_294.part.js": "5ac3aa670997a7cea235140b4a591f81",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_343.part.js": "7e622bc4535c526ab993041ebe7f5de7",
"main.dart.js_195.part.js": "ba35f5df540eb7d617bb9824ff881a62",
"main.dart.js": "cfbc031197506722b9a9764f1f6a27e2",
"main.dart.js_65.part.js": "7bc31ba882c89e7dbae949d5666ee68b",
"main.dart.js_354.part.js": "4a390f5169b95bca51bd6c3679fb537f",
"main.dart.js_208.part.js": "2245448d2c501c49022f5d03a371224d",
"main.dart.js_177.part.js": "92cb9c5cfeb646db575b816e22876b79",
"main.dart.js_310.part.js": "8783f6c3a1868b4ba4f0a8baa895647f",
"main.dart.js_324.part.js": "b5c6a009f23272d2bd6842e349fbb436",
"main.dart.js_2.part.js": "6ce3ddbbfe779c9487b6634bd73934cf",
"main.dart.js_292.part.js": "08b91b0dc7af4dd4ec3d8bd73258a621",
"main.dart.js_244.part.js": "65e4e1a741554ee6ef00b0a0f22b3b87",
"main.dart.js_47.part.js": "98941a2a87c761de67664d1164765ba4",
"main.dart.js_152.part.js": "8c14d282e29af1a5a127f9dc7bdfee1e",
"main.dart.js_159.part.js": "c5a841eb59118abb0d260d9a4b3b7345",
"main.dart.js_300.part.js": "4b2628a5ae0fed407243d04bcc2aefe1",
"main.dart.js_158.part.js": "94cf5dcfa059176ddc2c4009a5c19a70",
"main.dart.js_205.part.js": "2a392d0ff8bef1a2f3bd95c7fc3627c4",
"main.dart.js_71.part.js": "ca04eef8e62e490f76942624c2ac090c",
"main.dart.js_342.part.js": "48eb8bebd530592fac0f251004e49318",
"main.dart.js_338.part.js": "77d3779c3f4e456146a2758269b140e5",
"main.dart.js_116.part.js": "421c908e8178f68466db98a4aad8be06",
"main.dart.js_165.part.js": "b48bcc72e802f3ca34c4d0a5046183a9",
"main.dart.js_323.part.js": "12e8aadeec50d4361aa41c659d73561a",
"main.dart.js_142.part.js": "fa15771efe6386a2f2b83cf3a52f566b",
"main.dart.js_163.part.js": "4d66bf7e0ebe9dc13d6f5fb4879a84c3",
"main.dart.js_25.part.js": "9a60fb3ce5ebf67d8258a01da399df97",
"main.dart.js_17.part.js": "92b98186454027eaf20effae91e23a29",
"main.dart.js_312.part.js": "162cbcae3651a083688fe469442a20ae",
"main.dart.js_61.part.js": "d41a076135b93e9b9edf44194a27293f",
"main.dart.js_101.part.js": "4e3833a90994b5601927124717cb37ab",
"main.dart.js_333.part.js": "21ad3d9bc1a86c8848b56abad57dfdf8",
"main.dart.js_350.part.js": "20c5b5d8bc158be388cd83b8594345de",
"main.dart.js_349.part.js": "26d22157e08a317c4726445e21abb841",
"main.dart.js_365.part.js": "3d9acfc30c9010db604a620b6a0dfa30",
"main.dart.js_185.part.js": "3d9d7574be06c30c3de647f23b6f5996",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_306.part.js": "c0e3b430a6f1732e2400f03d62a2e867",
"main.dart.js_139.part.js": "12002bce85df3b862ab1484c8a3bfef5",
"main.dart.js_56.part.js": "3c296d55aaf155d7acbc38b2df8e9b32",
"main.dart.js_23.part.js": "02a83b574cfb63f2f672109c826f25ee",
"main.dart.js_238.part.js": "7e8ed6aa99c91dbfb36322baba59cf96",
"main.dart.js_367.part.js": "ab5adaf955e10ba9da4223e0a8df94ca",
"main.dart.js_332.part.js": "b0bae0ef506290d26f29678d0e861585",
"main.dart.js_336.part.js": "59a10de3fd77461192c8cf298c182914",
"main.dart.js_122.part.js": "442d3b3286abed6732553931770caf53",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_293.part.js": "2f129d9dd781d9ef89a856c19ba589cc",
"main.dart.js_88.part.js": "5e0895d6356226acf68d5cae29ed60ba",
"main.dart.js_4.part.js": "79999559ce400ac43b61228e5f103ba3",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_3.part.js": "76d2d13025143a9a6c6c470b3687e93c",
"main.dart.js_228.part.js": "378e9379bf272dd20ce08c561715ac60",
"main.dart.js_178.part.js": "c8007d0f786f37a0dedd3877ad7b39ca",
"main.dart.js_175.part.js": "522de5183ce1babef27a000958530c31",
"main.dart.js_262.part.js": "cca72fc02c9e84c75668086074ed81c2",
"main.dart.js_96.part.js": "66d4c845763e8f939aa9ae34e1d375ae",
"main.dart.js_308.part.js": "ba11ebb7c9be19cb0220ba50bf2671c1",
"main.dart.js_89.part.js": "8f8715fdaf2df26a9ca5868635f87db7",
"main.dart.js_245.part.js": "4e627afe4faea6e5b44128400c61b94b",
"main.dart.js_40.part.js": "6d025581da4ee359443bb9d4100c073d",
"main.dart.js_107.part.js": "aaeced5f62357258fb577879c7fa4d25",
"main.dart.js_225.part.js": "0f9e10f307d9e5d86a8e9d39057ee39b",
"main.dart.js_321.part.js": "18136c19926c3583ef1b4e0f1e5fcbb0",
"main.dart.js_358.part.js": "45c56bcad35e7db238b7dc80ff606ff2",
"main.dart.js_76.part.js": "6784009fff13a329d476075b8db847c5",
"main.dart.js_90.part.js": "ec169ef2e5eaf3c29217d35451e95a9d",
"main.dart.js_52.part.js": "92968ea9f98fcc2102399420fde47406",
"main.dart.js_146.part.js": "27065bf5caba8d55f9d406a91534440b",
"main.dart.js_282.part.js": "d0304edcdc48e52e46b3218cc043bbfc",
"main.dart.js_237.part.js": "e9d40e97942ef2179991aa3b42f4d7e4",
"main.dart.js_28.part.js": "444dbcab7baec5beea1e639619456fa1",
"main.dart.js_241.part.js": "11b4987da03f3872ff09bed51bfe7765",
"main.dart.js_206.part.js": "85126a9ffafabb8d477962428c3a608b",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_200.part.js": "4fb0bd981cde5f08a9e12f30818c3f2b",
"main.dart.js_344.part.js": "35f31cf689bb0146de8a56b118923b5d",
"main.dart.js_196.part.js": "6c1aa1f53c3ae189cd677a26e905643c",
"main.dart.js_77.part.js": "4ee9a147fac1d4004742b39aa147bbf6",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_182.part.js": "5502a7072abcb8b8f1f5a7a5221f89ff",
"main.dart.js_41.part.js": "732726417c158d337049f39fd3b5fb16",
"main.dart.js_335.part.js": "96c3d5e9a411ff0d68b5e9090baa4c2e",
"main.dart.js_13.part.js": "f4c90353e96b225f727a52bae797f682",
"main.dart.js_43.part.js": "c3838e29cf4df545e59f2c6c86150b8f",
"main.dart.js_189.part.js": "cad99df84ce636a271498dd0b153294e",
"main.dart.js_198.part.js": "ba73f2b2a306493aa58d883c16f54e6e",
"main.dart.js_59.part.js": "dbda04a5e53b0afb355b123e8fe0d264",
"main.dart.js_8.part.js": "7be10d4bdb4b1aa631fa0dad1e8d4b55",
"main.dart.js_286.part.js": "a831c0ba43260b836edea7a63e16b0e7",
"main.dart.js_100.part.js": "3205a3cf9d98340709c28a62eade38de",
"main.dart.js_224.part.js": "f776a9296416ad8409b6b17e4110b66a",
"main.dart.js_22.part.js": "2a4a99d95da2fd6ceb3ac6c3fb9f86e6",
"main.dart.js_355.part.js": "4cc24e0300ca030fa86c3b7dcefebc3c",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_257.part.js": "054ece3ea4d996e8b8fff1bec18a4ebe",
"main.dart.js_227.part.js": "5609af3fa92c202f80fc14396dc46349",
"main.dart.js_154.part.js": "8bfd99e38a134494b29a310d1364baaa",
"main.dart.js_186.part.js": "448364c8a0c008bd25e71d9437e8c4e0",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_102.part.js": "a850a48a1f94c83acdf93ba1fcdd2f8b",
"main.dart.js_68.part.js": "88fc6859373764b65d8ed54d8d443278",
"main.dart.js_211.part.js": "53ccc0514215b4a6ee734b7cfc770d72",
"main.dart.js_364.part.js": "144ac4c3497ba6bbd182e48cd65ef8df",
"main.dart.js_356.part.js": "5f453baad4b8b6145ee4ee1a2f0cc0b1",
"main.dart.js_180.part.js": "592f4ff1613b02a0a98ec809e857facb",
"main.dart.js_181.part.js": "51a469d3fb5efdd75a237041b8069f62",
"main.dart.js_118.part.js": "07405e655fa40aa782a4a7c1151041e1",
"main.dart.js_270.part.js": "b52a34f5fed47aea51b30da899fc8b31",
"main.dart.js_352.part.js": "666778181df4a78b98c8df0415a107a4",
"main.dart.js_372.part.js": "2d1605ce04d3c04ae03c0362c4e2c497",
"main.dart.js_85.part.js": "887d0ba17a6b611041b8f4a306e151fa",
"main.dart.js_11.part.js": "b272b48f3dd67e856e56492d24a17e20",
"main.dart.js_92.part.js": "8e507af122e117b8bf197648ade0f06d",
"main.dart.js_274.part.js": "2ed99add0a8f1966d6afdf386f6228ba",
"main.dart.js_326.part.js": "216b527114c8272a39e64faff1ed42ea",
"main.dart.js_7.part.js": "c91d3324491eae291108087fe32b57ab",
"main.dart.js_194.part.js": "407bb3a76741c91b53e633e596dd11c3",
"main.dart.js_87.part.js": "8d825975550c2ff34691a1efbd61ea42",
"main.dart.js_37.part.js": "452c9662294b96680fec78fde9c11bf8",
"main.dart.js_151.part.js": "c5b697a2ee35b8880378992f9394e7c6",
"main.dart.js_320.part.js": "99791d9c06ddc9fca3267e06fbf7a085",
"main.dart.js_289.part.js": "48d991374ae660422fbbd86430567aa0",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_54.part.js": "a769a34adbca59eccfff2f014d69f559",
"main.dart.js_199.part.js": "41d18e154ecefa443a904e085550d868",
"main.dart.js_207.part.js": "8db4038fb89b3aeda83a17cc1de34c2c",
"main.dart.js_119.part.js": "978d9f16124eb7796ab974bb756f4284",
"main.dart.js_284.part.js": "993e5a34cf4f011ce7235fcde02a2583",
"main.dart.js_369.part.js": "7dea5a7f6914c66d3bfa83e12ece1a32",
"main.dart.js_191.part.js": "535d88ce5a0691995710ea4c4d4f0113",
"main.dart.js_359.part.js": "6b9dbcea8620472b72379286dc98e34c",
"main.dart.js_141.part.js": "27923ea46bbd312ab301d7d8e457d61d",
"main.dart.js_94.part.js": "53af8df0e2a95e9ca0028d9cbe6e8002",
"main.dart.js_290.part.js": "5d9b32308d1a2faf5b8dbc8df709c236",
"main.dart.js_97.part.js": "3f3dbd11351014481172a6a181ce8c79",
"main.dart.js_222.part.js": "966c7ee892d32d183d995107b9811bb3",
"main.dart.js_35.part.js": "d61833315e5cb3b6ce53a1a0c727daf7",
"main.dart.js_217.part.js": "f9f763d7d3d9a8759beccf6e01df9ef3",
"main.dart.js_109.part.js": "81d88cb9f09c8f8fb3ba3b8771823481",
"main.dart.js_145.part.js": "ce1c6c9c21f5924977f0cc33e1747b4f",
"main.dart.js_27.part.js": "ed25692c7afa2589cb037c08e2da3e9b",
"main.dart.js_322.part.js": "a04c10d227d8a4e14d347c432e25ca49",
"main.dart.js_330.part.js": "30cf11616a7159c23693638c2f2651cb",
"main.dart.js_148.part.js": "10d9fe0acce6a23ca78b43ed9fb397d5",
"main.dart.js_268.part.js": "98d07aa7c5166a8971e5345e282198cd",
"main.dart.js_162.part.js": "330bd458f0cee09969dcf270e2df1f89",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_242.part.js": "384828aec6b83c106345062beae79b66",
"main.dart.js_80.part.js": "3aaf4e3adaad978a7b7c54f760c7c5da",
"main.dart.js_18.part.js": "2192fbdbc39151db4651d49b66596616",
"main.dart.js_361.part.js": "bdf2db30d70d4d45db124940f0b05e0d",
"main.dart.js_26.part.js": "7ef517f63321fd3bc4147ecf3dd05893",
"main.dart.js_353.part.js": "dcc3d4800e3d9d0957263b31d0bb6c5a",
"main.dart.js_51.part.js": "65ee3586f44744459de1afb4ee9a21d3",
"main.dart.js_250.part.js": "c6481ef06fe7ee2348743b82485f09f0",
"main.dart.js_188.part.js": "e1c25bb0b66b0fa67b6bff0421ed4f9b",
"main.dart.js_230.part.js": "97ecfb082c2dd0688c89a3254ee6cb76",
"main.dart.js_160.part.js": "474a5c26227656fbc6159c23cbabbcda",
"main.dart.js_105.part.js": "0c6d252b8f52f04ca2983ca6f348dc0c",
"main.dart.js_63.part.js": "592cde13987fcef214afcb3ee9f73490",
"main.dart.js_235.part.js": "6683f18e92330d51534752c6d67debab",
"main.dart.js_106.part.js": "fbdb7719386f846fa2a31da1731708c0",
"main.dart.js_272.part.js": "e87320ae61515d115ed27c427d739bc4",
"main.dart.js_134.part.js": "9c6a7f412dc708a19cacf061e498754d",
"main.dart.js_161.part.js": "7bfb421bfb708264cda1b558beecb1f9",
"main.dart.js_38.part.js": "61ffef0429bcf9647ed435383c8aba1b",
"main.dart.js_360.part.js": "611a061de0d23c678840ac94f0aadc47",
"main.dart.js_219.part.js": "3fad93a281a8c92dc230c3745525bba5",
"main.dart.js_314.part.js": "4d0567ca2bf912be67b71e3bac47671c",
"main.dart.js_362.part.js": "17c7764bd637c394f7706a34a5289726",
"main.dart.js_259.part.js": "d120ea2f7ce8f23db31bce9d0379daea",
"main.dart.js_86.part.js": "4e3f1ff5c7575515acd65e5978ea27e5",
"main.dart.js_104.part.js": "651cc781a40b66a41089aa020a2f55cf",
"main.dart.js_31.part.js": "003307fe7ab22a9dc1b603a6bc21ff58",
"main.dart.js_125.part.js": "50a433e41a50ff9bbee24e722b7cc6e9",
"main.dart.js_19.part.js": "8f94da701afaae2829be55b110abdf3b",
"main.dart.js_297.part.js": "a93fa9823735a39d85f83f40095bbf07",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_316.part.js": "ead63eac5a3a83b0e30383b52835d9ba",
"main.dart.js_171.part.js": "8935849648ec40de0fc82fa103080b82",
"main.dart.js_363.part.js": "599f3662da34fcb44ceb1ed6c7a55913",
"main.dart.js_33.part.js": "982a0ac1b993af6aaadfe8174691a933",
"main.dart.js_201.part.js": "4f1fee05cf47a06db81eb496765afa79",
"main.dart.js_117.part.js": "181c92351ba7199e423915a4f38f73f9",
"main.dart.js_1.part.js": "c853baaa5fcfe52f9b4291c8cd9d7e8e",
"main.dart.js_261.part.js": "d39c6a144693eb017cb44938842b8433",
"main.dart.js_44.part.js": "d0f1091ba77878b4472c4cc108587e86",
"main.dart.js_328.part.js": "6f2e0596cac0e564fde7011ef9bab20a",
"flutter_bootstrap.js": "474242fc67f92896ff2daceafc4814a5",
"main.dart.js_15.part.js": "dff2ad8533936a2192ff9464ef16999a",
"main.dart.js_226.part.js": "b8873b1388642685d3048bc35594f0a8",
"main.dart.js_91.part.js": "88cff4247def3f75b8602afad32aa6b7",
"main.dart.js_167.part.js": "844ae60db9d6cdb4f8ce09c10110d1dc",
"main.dart.js_317.part.js": "463a80e2bc1c39654c12aebc5dd591b3"};
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
