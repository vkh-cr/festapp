'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_348.part.js": "f7b9dd2d9c6477e08adb9420aff9e04e",
"main.dart.js_157.part.js": "344a8e8f596cc57f1a2aa408e5a4c07e",
"main.dart.js_329.part.js": "f35277d6f613d5b1fc5300ac6e0b0e27",
"main.dart.js_283.part.js": "daafab252105b9196e66e6c22543ac4d",
"main.dart.js_266.part.js": "ae68ec856fd6a64ed753334fce05a398",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"main.dart.js_202.part.js": "383dd3a411d2686e657e0782c717f853",
"main.dart.js_210.part.js": "149e01a6d425ea27d4479075cf706229",
"main.dart.js_58.part.js": "0ff80543ff86a7eea322d70604a165f5",
"main.dart.js_121.part.js": "c137a47ee3c9e63cd08fcde71ae8d112",
"main.dart.js_114.part.js": "8f58947a7a6abb42b251a6dd2c97bc8a",
"main.dart.js_9.part.js": "dcbccf0b42d99251d405b44e8c002ee2",
"main.dart.js_166.part.js": "bea3c19b73e4a224b37c06860cfe60bd",
"main.dart.js_170.part.js": "57600be54d669c1a7b33addf5728384d",
"main.dart.js_236.part.js": "22aeb9841e8bb677df99ae1f02c29d3a",
"main.dart.js_36.part.js": "abcf1088449a3868f3de68939b196ee6",
"main.dart.js_64.part.js": "69a4458b1d99f59100265d3253a74838",
"main.dart.js_229.part.js": "78c29dc56deb55604f4eda7cd2806dee",
"main.dart.js_174.part.js": "d2cef4fdbd9690bf0b901da699067f46",
"main.dart.js_307.part.js": "aad0fdb2f0c208226c0e7548bd28c4f7",
"main.dart.js_368.part.js": "e573d6c43ffda2c8f0ab42d7a6dc7fd5",
"main.dart.js_258.part.js": "477c3bbea9ee2a4657971eccbf77ee6f",
"main.dart.js_98.part.js": "ebb4c351057e8879cffe1ab859b237de",
"main.dart.js_299.part.js": "4f6bd18a00d4e831cd7d7ecb9cfb46ae",
"main.dart.js_380.part.js": "5ba48ac46a3726e64cf5489ab56115a3",
"main.dart.js_136.part.js": "9e607cce4c7f9be39f0fcfb6f9704b10",
"main.dart.js_331.part.js": "c6e7c7cb212210c645e5f8277b77993b",
"main.dart.js_346.part.js": "542b57f5e79a8ee56ad32cadb6fdd63d",
"main.dart.js_247.part.js": "924512cb70415279bcb11f19e8f5db67",
"main.dart.js_120.part.js": "9dc5dc78528fc57caf8e6718eb71b90b",
"main.dart.js_357.part.js": "d55dc21b22c62f5532558427ad7918a6",
"main.dart.js_138.part.js": "80afe1983e4ffbc65bd1e501c1e03428",
"main.dart.js_184.part.js": "41ddfce4da92d6079cbbcf59a8c0ccde",
"main.dart.js_327.part.js": "21a7b9f5ab0dbea97d2ee7e42187c56b",
"main.dart.js_82.part.js": "04b50d1f9c3bd328850679888dd51332",
"main.dart.js_62.part.js": "0123e5188808b6e5916291473eeca030",
"main.dart.js_34.part.js": "33664021cb99d56abba47384179ccaa5",
"main.dart.js_30.part.js": "3ea5c5bef7ce5a536ce57f095f0bab1b",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_291.part.js": "53ba3ce674a19b42fec28f1fc873b91b",
"index.html": "09af2f051b588fe495b535039e147c9b",
"/": "09af2f051b588fe495b535039e147c9b",
"main.dart.js_29.part.js": "daadb62902236869b34611cc7db699fd",
"main.dart.js_12.part.js": "0f3e55f9bf872d2eb79f1e722a11faf4",
"main.dart.js_69.part.js": "877f78b87d118543d2bdb715d104f03e",
"main.dart.js_79.part.js": "4a11f522cf26241aeb976488db878e8e",
"main.dart.js_318.part.js": "219efd497f96676755c4eb9d5c6cb791",
"main.dart.js_315.part.js": "78fb22913ffe41d5fceb5edff624a0ec",
"main.dart.js_246.part.js": "8cb9550a3d2c8f37db0a8b47f9c33f25",
"main.dart.js_298.part.js": "198692716c5197938d27e8104e932bec",
"main.dart.js_39.part.js": "2b8934e85df7a0f42dd7cfafe3189a94",
"main.dart.js_164.part.js": "28c7a2cd544d8d6501608c481037aee5",
"main.dart.js_124.part.js": "3f53c430db7344eff4e4a33ec5443eeb",
"main.dart.js_137.part.js": "60fe37a986417303c24b6254d13f2ae5",
"main.dart.js_374.part.js": "6fdc98bc7fb02dfe5fc6b9fb8704090c",
"main.dart.js_32.part.js": "ac20bc5320c048f7a9dd0b6d3d74f542",
"main.dart.js_190.part.js": "524dca7742bb7275e485186573bd0e4e",
"assets/NOTICES": "ac55588958503949d00c66bcc5e83e92",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/uk.json": "06d8c6f66303ae3e257fa9a62fbf09d9",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/sk.json": "e20b4c2317f454bc552b2df9f86e40e5",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/assets/translations/cs.json": "6fe8d23950f2eefc0ebfc59eb759a6c1",
"assets/assets/translations/en.json": "a1ee6981fc003d4ee9c3ba43579bc03f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/MaterialIcons-Regular.otf": "d9dfcc36d2553b8ee54770dff65fe77d",
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
"main.dart.js_95.part.js": "ef6d4912ad20a5102a3270f1eb1b4cc7",
"main.dart.js_301.part.js": "a9c72c157a637a0d9101519a46ab021c",
"main.dart.js_334.part.js": "0ae4ff14a1d2c925a5cc33ac0e732da6",
"main.dart.js_203.part.js": "577c7b80488a588df3d50942e2e7caf8",
"main.dart.js_183.part.js": "5ce33f5cc1108f443b6641c3515c3533",
"main.dart.js_370.part.js": "160fe9522b67c778f987fc00a5deb8f9",
"main.dart.js_21.part.js": "7efb311ff86944834a1df2bb763190ea",
"main.dart.js_110.part.js": "8278754561e60c1f3ae73e6047bbdba0",
"main.dart.js_149.part.js": "048db7016ebb4f2783e465b40b2f3bad",
"main.dart.js_214.part.js": "e34fe496df69050b040fc49be75b6105",
"main.dart.js_55.part.js": "eeb6b28597a09529a112691011a2c4a3",
"main.dart.js_155.part.js": "b318bb296b6a1cbcd6829088c404969d",
"main.dart.js_249.part.js": "1cead05ba7803811cb8ba255961ddf4d",
"main.dart.js_377.part.js": "047039010cbaf9063284eadf2594d437",
"main.dart.js_135.part.js": "4b0a400e9d4798f5c4a276370344e6f3",
"main.dart.js_123.part.js": "a1cb40336946c38275cfef3baab8ca6e",
"main.dart.js_276.part.js": "d8d636f2618c66419f05045dc99a5f04",
"main.dart.js_319.part.js": "2a901d6de6db46ae7a692107e0358e2e",
"main.dart.js_147.part.js": "47f97bbc5528e28b200ca3882a2c07c9",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_20.part.js": "8715ca0c90f6a32f26a4f6c8ef162270",
"main.dart.js_67.part.js": "25af1cd6ee3d2d0bc7eaf65f25377a2d",
"main.dart.js_204.part.js": "dd4d20269eaa00ffeee541d1037ac1e3",
"main.dart.js_144.part.js": "eb665f8f52b206b03963e37539040b4f",
"main.dart.js_240.part.js": "790cce40bb6e9ce65523647984ab5960",
"version.json": "d766d97d33fb08856386e013cccb78ec",
"main.dart.js_285.part.js": "09a3bf1202a0f3ae0908fd1b578c1ef5",
"main.dart.js_269.part.js": "978dc2d4519440f198393177bb7b4f9f",
"main.dart.js_252.part.js": "999f596eec5b19f07a99b48d213808e7",
"main.dart.js_75.part.js": "de59a241a4f338be309c9e5975c54bab",
"main.dart.js_263.part.js": "d5041afe9bde68d913a3df0f00d41086",
"main.dart.js_311.part.js": "c184ee4eb198c901f32dad6eb9fb31f8",
"main.dart.js_99.part.js": "ee493c083764518eb69cd132ff36c814",
"main.dart.js_14.part.js": "9d16e7609de026df071d81008fcb1c4f",
"main.dart.js_233.part.js": "2cc7d319ffa31a8cb584e345e7e0437c",
"main.dart.js_232.part.js": "78a5e4373edb2a2fdce6baac7af10ce4",
"main.dart.js_277.part.js": "6dd0b77f0fe9d51cf2915ad5c0039b18",
"main.dart.js_53.part.js": "63b919290b27263e9be019882f6bc89b",
"main.dart.js_108.part.js": "e76bf5aa74ebb0e1e68216decafecce7",
"main.dart.js_265.part.js": "7eb8d4d4aae7da4e0fac82efe40d5051",
"main.dart.js_305.part.js": "a344a6124181ac9087c1aadab955aef5",
"main.dart.js_366.part.js": "8270e9be50e13f4afe156a38363ab808",
"main.dart.js_264.part.js": "d33947867d610124334680adc4f2ef87",
"main.dart.js_371.part.js": "089eb0199137bd5700c825e349de5a3b",
"main.dart.js_168.part.js": "c987cddc9944a1596b7d707be23bae6e",
"main.dart.js_341.part.js": "6244a4ed7347b8363148f10d4789a7e4",
"main.dart.js_339.part.js": "2e5c72f3aba42e0ced236f9701c59283",
"main.dart.js_215.part.js": "6d1de925e9b0fa1cc28bb58abab0f9e4",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_279.part.js": "7e245e98dfd41b7e287cfb4e965a01bc",
"main.dart.js_243.part.js": "6e209859d87d81b2392b118ace2ecc36",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_209.part.js": "6b9cf052c48fa549b8887ae0427bc1c4",
"main.dart.js_343.part.js": "27926eae9838128f698946f2b74a9dea",
"main.dart.js": "2f77c36619c387bbde197939fc2fd662",
"main.dart.js_375.part.js": "a2efae7c67859415142e9fbbb5a87a35",
"main.dart.js_65.part.js": "f1f3c8347e4c04ddab6f5a86b36ad450",
"main.dart.js_354.part.js": "924fae33bbef750a3fbd5744077b992c",
"main.dart.js_208.part.js": "c9c93a24e38a4f312383c539460c11d3",
"main.dart.js_177.part.js": "0bca3a5023ea32c35c5e17f9f1c0ffea",
"main.dart.js_324.part.js": "2f0a4d6ddb2132c27896eede93912a85",
"main.dart.js_2.part.js": "c02b830f11e273a2b77fc4977bba6526",
"main.dart.js_278.part.js": "75c1c65b685aaa5fe8a5da95e43c9a2a",
"main.dart.js_292.part.js": "a01a71449817564c5cb8ed85760c9eb3",
"main.dart.js_244.part.js": "8af579ea596e2d8b61d3f138b3649f44",
"main.dart.js_47.part.js": "a0759eb8cff4d8983cc91f8eff51e58a",
"main.dart.js_152.part.js": "3b43ac3a99d59cf177ccf5c3f1d6f8ad",
"main.dart.js_159.part.js": "4d4926831ddf024804e8063cff3135fc",
"main.dart.js_300.part.js": "e8d0c84386f9f663e52ce65cf9b26402",
"main.dart.js_158.part.js": "994563aaa65fbd5ed14a5869a2edc42b",
"main.dart.js_205.part.js": "7b0194d5663b3c602e0a651048a6baba",
"main.dart.js_71.part.js": "edfbca1aa87cac068cf08a8b32758fbf",
"main.dart.js_342.part.js": "6befb52077a45dfcc0cd0b607f54afd9",
"main.dart.js_340.part.js": "ed29ecafcbdcb51ad821658085256de0",
"main.dart.js_338.part.js": "4355f14009bb1a10b9e0bd2c6ed7658b",
"main.dart.js_116.part.js": "648369af86ee3156731dc573c946fb63",
"main.dart.js_165.part.js": "db0239c5d96a0ae17169214789f719cc",
"main.dart.js_323.part.js": "edc46e5f4f4d961dc71bad4cbf9d8b4b",
"main.dart.js_142.part.js": "adbdb7ec6bfc523a338b2b3661c4f9a1",
"main.dart.js_163.part.js": "090b1817005fc556c3c8121e7e9d4722",
"main.dart.js_313.part.js": "9b12a037646eb4b99e55a335a1bc9f83",
"main.dart.js_25.part.js": "9d03bf768e01119355e4ad491ca9537f",
"main.dart.js_17.part.js": "fd87de7e4a573685ba54a3acf4643345",
"main.dart.js_312.part.js": "f2e04252474bba31b67af89c83f6f933",
"main.dart.js_61.part.js": "337d7cb96828e2dad22cf526829e15a7",
"main.dart.js_101.part.js": "576a9385eddd9eaf73638b2120cf9819",
"main.dart.js_333.part.js": "ed7b94cbf9a03dbb43680169c7dc2e0a",
"main.dart.js_127.part.js": "4c3365405d91bb70f760df71e16cc5a9",
"main.dart.js_350.part.js": "1fc0361020f8e5bcca5f56c72b8a1183",
"main.dart.js_302.part.js": "cd9d96b1deb028e34e73dedee367fd34",
"main.dart.js_197.part.js": "ebe20441ed0b3d3a979e19d1560965b2",
"main.dart.js_351.part.js": "e944a1a9cc26ef602972e13602c8db2a",
"main.dart.js_231.part.js": "d7b6d43e2ae53ec35b61441d7bf56335",
"main.dart.js_349.part.js": "8eb59a1ec264954baa49c91e1936f737",
"main.dart.js_220.part.js": "785d1e1fd741e456dc84f8ca9b7c9d33",
"main.dart.js_365.part.js": "f2af906d42f0a3cd67ddbe76a5479eeb",
"main.dart.js_185.part.js": "5ed899d4d7e7ed340691e8b6dd365526",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_306.part.js": "6163ab7f5eac1e78a010c0fe68e679a3",
"main.dart.js_56.part.js": "27cc2a4c9b6823c243efdbbb3f7d031b",
"main.dart.js_23.part.js": "f98df81b8bafe02d9efa82c8be7e9ea8",
"main.dart.js_238.part.js": "1fa037db491c8ff1501061f36e5c4da0",
"main.dart.js_367.part.js": "4f25f14bf033a163937414c55cdfea0b",
"main.dart.js_122.part.js": "cf84187667cd17d2cd52f299202725fb",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_293.part.js": "9fd2a88a027a4952962a900007ee444d",
"main.dart.js_88.part.js": "1db1d0190b0491d9706dd3f3d57f827f",
"main.dart.js_4.part.js": "baf44c29b2499d4f716e1652d69e3947",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_337.part.js": "e848cecf3bafceaa3109ab006d1592b5",
"main.dart.js_3.part.js": "4c439b575bc83048aa219ff4499cfe9d",
"main.dart.js_228.part.js": "449a14c864533d07204780949f70d8d8",
"main.dart.js_178.part.js": "0c8d68bddd66c3e652e91904c04d589c",
"main.dart.js_280.part.js": "fd9bc44d8ce72be1744bad53d4b11232",
"main.dart.js_262.part.js": "16e046e6bf06d4e1c7833912ed951d90",
"main.dart.js_96.part.js": "1be1055bec45de728bd6cc2f66b67fad",
"main.dart.js_296.part.js": "00680d187dd338a299f8ca9b2a17e7da",
"main.dart.js_308.part.js": "ed7e75719546e6cb411b0fe20e3a4726",
"main.dart.js_89.part.js": "613a805a7aefb6a25b05e7601c0dccb2",
"main.dart.js_245.part.js": "2a4c1b7c62fee368fc3f4ab3d90db042",
"main.dart.js_40.part.js": "3e94147b0e80e0d7ed2960da97557a68",
"main.dart.js_378.part.js": "eaddd2705bd25d4930fd7bda4592fd5e",
"main.dart.js_107.part.js": "0804c9ad7b78f49924cf2ccdcd201508",
"main.dart.js_321.part.js": "33551136fa8f6b706c61b7e0d675d09e",
"main.dart.js_253.part.js": "f56b1510540462783ad0030ab8b922ed",
"main.dart.js_179.part.js": "0d842b644d3872f33f71a2a77b75549c",
"main.dart.js_76.part.js": "bc7e2994d477118d323de97b5e2ce809",
"main.dart.js_90.part.js": "751e715e8fdaa2e3a01535b3f92e5ace",
"main.dart.js_52.part.js": "008dc910b59bff78c6b6b29b84cd3e77",
"main.dart.js_282.part.js": "c5e78acf314ec2b3da24f8425ed0bdec",
"main.dart.js_28.part.js": "fb77209bf7ddaf377f94d5c471dd83dc",
"main.dart.js_241.part.js": "d8e60b1e362861691fbc88fd067cccc8",
"main.dart.js_206.part.js": "39592a781c97a920c30eb50d87ce210a",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_344.part.js": "5944bf20b9790c7375d33022745608ab",
"main.dart.js_196.part.js": "f0e75aef65ea5c5c08c9475715c0ddb8",
"main.dart.js_77.part.js": "4cc9f9208503e4f8e1a7b2174b157ec9",
"main.dart.js_379.part.js": "bcdee18490560a939b9d9acd3b0f8292",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_287.part.js": "dac3e5bb8028dd25f7348062c9b7d046",
"main.dart.js_41.part.js": "8098c4cfbbb6972530584daebd542ed0",
"main.dart.js_335.part.js": "69fe4c4363f409fff34fa354700b0be8",
"main.dart.js_13.part.js": "21f78147ed8b16c62840553f1ddadbb2",
"main.dart.js_43.part.js": "e2e5545175ad76e3fa6aed1f76a33c13",
"main.dart.js_189.part.js": "7c30c5b8938d240f7145ba64eca49332",
"main.dart.js_198.part.js": "f9a3ab3c98ecd1a14a1c289377f94ddd",
"main.dart.js_59.part.js": "35c64266454b94db6437af8265bd737c",
"main.dart.js_8.part.js": "d290413cdaed6564e1b0ec2fc07c4663",
"main.dart.js_100.part.js": "3e25f53e6c527fd4259d02121b56c77b",
"main.dart.js_22.part.js": "7f20d69f54763a3b490b01f53df25700",
"main.dart.js_355.part.js": "f2a630742860448cef3db87cdeb93748",
"main.dart.js_192.part.js": "3bd5addcd38cda14e1bbb20a02374c45",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_227.part.js": "aa26acf66b70d9addd914b0d44d7c956",
"main.dart.js_154.part.js": "060c60c8e6a32a1742d5d9c53a02fb90",
"main.dart.js_186.part.js": "c1a390406ba3b001d08d7957ed719e23",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_102.part.js": "78b0c6560e1dfcc7f18ca83415f7a736",
"main.dart.js_68.part.js": "c5bf7d23969e215277e87ced53c75859",
"main.dart.js_211.part.js": "da4b6b04a8f1d90e9578e50b72bbb03c",
"main.dart.js_364.part.js": "9936a2dcc45d3608b46bdac5f1c8300c",
"main.dart.js_356.part.js": "47347d97be0536d2c18bf61251b9055d",
"main.dart.js_169.part.js": "6ca9a6e6eec5455165df3ab50f9769de",
"main.dart.js_180.part.js": "aee1c40137c636cd36807c877b948ba3",
"main.dart.js_181.part.js": "0403134a99fc1a2c4200c17fefeba671",
"main.dart.js_118.part.js": "6bb0f74d64a9f4784e44c6cb365b665a",
"main.dart.js_270.part.js": "a5cd8e97a1d19e80cad7ca1141f704e2",
"main.dart.js_103.part.js": "8191243370ea5dc24ee4a4f5eee984d3",
"main.dart.js_352.part.js": "77092202ab696f4897d2a29448410829",
"main.dart.js_372.part.js": "fa10ac33a910d44a7060a18e0fd48c8e",
"main.dart.js_85.part.js": "94a5b3f21ede800c16fdcb7bb2edf4bc",
"main.dart.js_11.part.js": "5ab62c2aa58ea0644413401473b66176",
"main.dart.js_92.part.js": "cb1ddb030f445613f9070d0ddb4ad96d",
"main.dart.js_173.part.js": "01df626257d342e986cbdca69e6af662",
"main.dart.js_274.part.js": "41923cf5cf5a76d204b0c1896a5c124e",
"main.dart.js_326.part.js": "c56092a12f6fbe48da33db1ba1bd32f2",
"main.dart.js_7.part.js": "0873136174e4c81c63e0cc08cb54f073",
"main.dart.js_194.part.js": "cb3ac7c4c591ac8321411f880aa8252d",
"main.dart.js_87.part.js": "aef4dffd4f548c987406c6775547c7ed",
"main.dart.js_37.part.js": "1e00e2a56b385153c8572e4585fcd553",
"main.dart.js_151.part.js": "bae4ee755f1bb0e342597c27f4a3fa90",
"main.dart.js_239.part.js": "21da934a36198bd9780613cd5ad31398",
"main.dart.js_289.part.js": "9c13cd70c31609ff1875b3b4338973ae",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_54.part.js": "e8d32f4d1f87dff7fa6876e618b5426e",
"main.dart.js_199.part.js": "ac2b969bd457826f265be863983225ba",
"main.dart.js_150.part.js": "51c0cc71a8e42c5c3f4d6236d8865aea",
"main.dart.js_207.part.js": "30bcecc8c583d3b96baa0301eadc36b6",
"main.dart.js_119.part.js": "caf306117a4b7428e350d75d97cad884",
"main.dart.js_369.part.js": "9818a521a47c14513804427002895e87",
"main.dart.js_191.part.js": "9d2ddbd63396c1ddacad6ca7ebb4c094",
"main.dart.js_131.part.js": "d5f700697997e34d26b6f04682af2ba9",
"main.dart.js_359.part.js": "4ead65d60206e6e59e99ddf13179e993",
"main.dart.js_373.part.js": "60d48a44660151cec0fc0b91ebd75d5c",
"main.dart.js_290.part.js": "128f00deaab6f9c7b60977396cdea340",
"main.dart.js_97.part.js": "98a55b18d27faa92e06450777b64f8dd",
"main.dart.js_222.part.js": "d540ba4e8bd670102bc657d29b2c7ced",
"main.dart.js_218.part.js": "638c7ac5de7ee378c92ad854bbea21c9",
"main.dart.js_140.part.js": "19375af682867ee2c80f0cb209e354f9",
"main.dart.js_35.part.js": "ccded820da2d4ba6572bb2e2f8dde5da",
"main.dart.js_217.part.js": "5b3f28ddbfc80cb5becc95a8440aa568",
"main.dart.js_109.part.js": "018426dfe8bf25f8e89e353b84a559e3",
"main.dart.js_145.part.js": "4d7e80635439b72e59585d1e75649e76",
"main.dart.js_27.part.js": "7a0dd067c54f881af2b1c90e95c441cf",
"main.dart.js_322.part.js": "2d1972b06ad5e4cddfebc22b1f4c477e",
"main.dart.js_330.part.js": "69b4291c4fed44091b4c6caca2d83d54",
"main.dart.js_148.part.js": "dd639f26246ee9373283f292364c8d5c",
"main.dart.js_268.part.js": "aa2bc560397c2c0c52b86c198461c44f",
"main.dart.js_162.part.js": "761d09c23a09c5bf9e635ef03e3f5053",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_309.part.js": "f1e0769ec231a8ee69c20de56f993a03",
"main.dart.js_80.part.js": "6d9d02358cdae0f2b2075bcda826bdb3",
"main.dart.js_18.part.js": "6690e2b9d9840ffe3ede994f03ab4be7",
"main.dart.js_361.part.js": "d18a03887132e2d888d671ca80d8b900",
"main.dart.js_26.part.js": "ff980172da2ea555db15b05af8f3772a",
"main.dart.js_353.part.js": "fef2683b2c69242972ec6fcab2c32bac",
"main.dart.js_51.part.js": "8d720be1b72215be935d3f7bdf0980c4",
"main.dart.js_250.part.js": "314b59d7f11e166d12c932ae0145c57e",
"main.dart.js_188.part.js": "5e92818d1f7dee620e175cf60efa71c8",
"main.dart.js_230.part.js": "d05669d1c4cb4f124a4785f1cd8bd4b6",
"main.dart.js_160.part.js": "f8d3d64c0ec1ccc314e241be2c86a1fd",
"main.dart.js_105.part.js": "093083c2cfa231a525f6b21450318b07",
"main.dart.js_63.part.js": "461497170f3e15e04bb0560560a7a923",
"main.dart.js_106.part.js": "2fa5dcf4cd7e4f5486df94aaf91e69dc",
"main.dart.js_272.part.js": "e59e3562941226d1f1e52bb0dcbfd42a",
"main.dart.js_161.part.js": "b5bfa03d2cb08d2a7a67fa99d542f7a5",
"main.dart.js_38.part.js": "54ef44c8811110c339eaa7cbb528a765",
"main.dart.js_360.part.js": "95a97181f0ea82a2a33527a8f6488bb2",
"main.dart.js_248.part.js": "b947676a8c52e3ca96a28cdcb543c226",
"main.dart.js_314.part.js": "d0877ce383e7f95329825202809d3682",
"main.dart.js_362.part.js": "f52c43bd0dc5a5c4a19760bacfbe6053",
"main.dart.js_259.part.js": "4233d7d366b74ff2696b0a5dc79fc3aa",
"main.dart.js_86.part.js": "67912fc510a72c24c30acfe1623f4fe4",
"main.dart.js_31.part.js": "065e501ffcceeb4af3ce19deedc8a3dd",
"main.dart.js_125.part.js": "2f1797e3bf05805471f09f5421b1d83d",
"main.dart.js_19.part.js": "db431ee3f7d833c3183904e7d8a8c59d",
"main.dart.js_267.part.js": "a1c933593f8f5c8efd66ed573e3bd715",
"main.dart.js_297.part.js": "d1eccfb4b59cf615f5bc2abba98415a8",
"main.dart.js_376.part.js": "cdc5ead41c9662ab0b275344c77ee8a3",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_316.part.js": "64b043068f97df95b1eff9aa27867abd",
"main.dart.js_171.part.js": "0675a421b4bee1719f5a6f9b3cd18569",
"main.dart.js_363.part.js": "efef98de589ce89bdb188940bad99a1b",
"main.dart.js_33.part.js": "0fc5c41c5e268d0a67366896239a73c7",
"main.dart.js_201.part.js": "f65b5d46c47f305a50f3b933dcade681",
"main.dart.js_1.part.js": "157c2d758a7c488940b481fbf4bd9642",
"main.dart.js_44.part.js": "5a9046c5e6a9bf63fd5640674e72b3ca",
"main.dart.js_328.part.js": "b4c68e64fafbb310b69f6966dc24d02b",
"flutter_bootstrap.js": "4a39d253bab841b1870b85b8ea3b26d6",
"main.dart.js_15.part.js": "a48efb96b55a2c1fc273fc4f455d281d",
"main.dart.js_226.part.js": "78d8b6e2cb021d9499263bcc68c1ab53",
"main.dart.js_91.part.js": "1d258f008e4f247717ccd0b9a79b6597",
"main.dart.js_167.part.js": "7d036d00335bf79a5e63f5f7518bb138"};
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
