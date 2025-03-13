'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_348.part.js": "81a3c96d4af68ccb465a9e66ca203b35",
"main.dart.js_157.part.js": "dc762469008a3c54aab07ce1b29862bb",
"main.dart.js_329.part.js": "334d51c7e7ea7a50a7385998cbfd14d6",
"main.dart.js_283.part.js": "9cbcc6a7742df485e543a683f7b391fa",
"main.dart.js_266.part.js": "400714fd73c55828c01f826482722b62",
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
"main.dart.js_126.part.js": "5928f87616f47075101e32d06f3507ea",
"main.dart.js_202.part.js": "6d3603bc55db84fc37d990dbf3c0961a",
"main.dart.js_271.part.js": "1d1d96f4a812d5f8cb4b87727fd2d78f",
"main.dart.js_58.part.js": "2b6e3b0d31c2c2215fa342bfab124c83",
"main.dart.js_121.part.js": "9e327edcefeb68aa7eaacd03fdbf75f2",
"main.dart.js_345.part.js": "f2af73355fe687369760ffa63592bae1",
"main.dart.js_303.part.js": "67ab3934652709275073892c0b1f6fb5",
"main.dart.js_114.part.js": "34f604010fbd1722d0e1a721a256cf6c",
"main.dart.js_9.part.js": "2a01da58f3e6f736d0561410b5a7df05",
"main.dart.js_166.part.js": "15dd011f78abb8a60eb4cde3cd331ff7",
"main.dart.js_170.part.js": "0c68a21b948b6a091ff41a25834be829",
"main.dart.js_236.part.js": "5db99c8dbb70ee3d5f58b95135643742",
"main.dart.js_36.part.js": "00d556a782f358c333e6925c1b87f472",
"main.dart.js_64.part.js": "a0c82f971b6cbbcbec746b37122d40b1",
"main.dart.js_229.part.js": "3e36a34477bf8f7c244e291da2d62f98",
"main.dart.js_174.part.js": "e032264e616f850ebc062c9944224a29",
"main.dart.js_307.part.js": "12eb671c2aa7e2508d2751390d8689c7",
"main.dart.js_368.part.js": "971245a5ae07385b5005d031f1f4dfbe",
"main.dart.js_156.part.js": "de87145a5bdf230bc6aab02a1a8c31d7",
"main.dart.js_176.part.js": "17a473dc7634ff62c66c21077163bca5",
"main.dart.js_258.part.js": "a25bb8a73598f4d1e5aed4e492c5589d",
"main.dart.js_98.part.js": "1656e76701cadba42875563a5aa3b8aa",
"main.dart.js_299.part.js": "e1ce721924b7faf9122c14228a46923b",
"main.dart.js_331.part.js": "c5ecf9fdd22477978188c5cc1ab45316",
"main.dart.js_254.part.js": "f0f9b45cfd0033b8d69824dc8bec8072",
"main.dart.js_346.part.js": "2ec770aa883df2e470b511083d4a2891",
"main.dart.js_247.part.js": "e56f44c942d3f2369b266b4ac70dc99b",
"main.dart.js_212.part.js": "b3f58a193d08ba348d737e58564d5fab",
"main.dart.js_120.part.js": "8534be0dbdf0047d3540401f0cf41f4e",
"main.dart.js_357.part.js": "3fd264ac0fc83d8d7acf26954069aa61",
"main.dart.js_327.part.js": "90af2401c33ec14a0dc6a87b7e75781c",
"main.dart.js_82.part.js": "e75155a4f64d5f02d45adcba356ddf5f",
"main.dart.js_62.part.js": "f778a39739e35435efa9771d30185a89",
"main.dart.js_34.part.js": "22a1dd88c276c1f3d8814b0ebe6f5c26",
"main.dart.js_30.part.js": "12a2ae9dc85122ca7f5996a07b6cd2ab",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_291.part.js": "55efe5296b72f751e76d8e87eda55a89",
"index.html": "9916151736e86357ab5cc831c9befd47",
"/": "9916151736e86357ab5cc831c9befd47",
"main.dart.js_29.part.js": "eac9c3134478c67fa6fef87e4550dd5a",
"main.dart.js_12.part.js": "a56d8cacf43bd7ebe68f3af1f0f4ace3",
"main.dart.js_69.part.js": "ebc5ed27fb66de4963fafc8557071cc9",
"main.dart.js_79.part.js": "be7b4dd71efac927fde7d71090ed6050",
"main.dart.js_315.part.js": "5f8bae60a108a0388ecd800e803de6c6",
"main.dart.js_246.part.js": "d3cdd1da4da558c78661825ed16b0c1b",
"main.dart.js_298.part.js": "5e263174efd77408733f2bb0a2b39a3a",
"main.dart.js_39.part.js": "84d737080ca66b2c0f64650a857fff77",
"main.dart.js_164.part.js": "c81b904aaf38e11338694a8f923ef6a9",
"main.dart.js_137.part.js": "19787f878b5b6e6a87e62c014cbc55b1",
"main.dart.js_112.part.js": "04252a78c43f5063ff871b7cfadbc9ac",
"main.dart.js_32.part.js": "ea65506d4de37b95616f73437859b1cf",
"assets/NOTICES": "336c1e95663897f9bbe245dcc1ee3820",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/uk.json": "06d8c6f66303ae3e257fa9a62fbf09d9",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/sk.json": "e20b4c2317f454bc552b2df9f86e40e5",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/assets/translations/cs.json": "36e76ac37b55b43170376fd84bb7e67b",
"assets/assets/translations/en.json": "8db4b001781436574e12e487815949ab",
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
"main.dart.js_95.part.js": "c67de9590357d46c8958145f50e29657",
"main.dart.js_334.part.js": "e3902d7d9ba62f129010d326ddd5f9e6",
"main.dart.js_203.part.js": "b8b33f6b5f45ae1725746390c8131e62",
"main.dart.js_183.part.js": "b5aad0624a3ef4e7a7566b439a3896f3",
"main.dart.js_132.part.js": "81ba87f456c2a3d0eb98c8a228aac072",
"main.dart.js_370.part.js": "66042b1f5bd4f2564e8cc9e0fa9a6b2e",
"main.dart.js_21.part.js": "7c21c68aa84b37a4237cab41ba781b21",
"main.dart.js_149.part.js": "d387a85ecd465eeeb1b750dfdf3c784e",
"main.dart.js_214.part.js": "2bde7076abf71da3465a95b73a4d720b",
"main.dart.js_55.part.js": "d3322537e28355f9e6b4601dc7475711",
"main.dart.js_155.part.js": "aa60eb841722957cd3dc598cf8df6627",
"main.dart.js_249.part.js": "0f70fbc0c083dd29da455a0508854b5c",
"main.dart.js_135.part.js": "1522766ebc341783e5600dbf83ff0794",
"main.dart.js_123.part.js": "616832431781f6d354d0c9a255893d7f",
"main.dart.js_276.part.js": "37a8343b75ffad5e9895c03324d546e2",
"main.dart.js_319.part.js": "ea060bff79333f922af6f97ee7c8a8f8",
"main.dart.js_147.part.js": "1457d0e85221c5b6edea6e0a0b153a79",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_260.part.js": "f3279a0abae19798eae3268f78bfbaa8",
"main.dart.js_20.part.js": "93efb4d1443f3cc830109100d2dd00cf",
"main.dart.js_67.part.js": "c661b9827483ba84cd70f6fef508c092",
"main.dart.js_204.part.js": "6a7c1e38f42a4ac91d341a3c022aff84",
"main.dart.js_144.part.js": "7a1a857ab1053a201ae91348fd74d5ec",
"main.dart.js_133.part.js": "ffe03fff051899b8c30ab3f65f8c523e",
"main.dart.js_304.part.js": "a51788d6b092282d164861cc3a4efc12",
"main.dart.js_240.part.js": "c2d3dec378fd594616b7d97356344046",
"version.json": "69e7a2a80be537dde4794e4d7b2315c7",
"main.dart.js_285.part.js": "28f3050a9ee4989f34cc594a185ed665",
"main.dart.js_75.part.js": "ec31cd943154d20d7da9ff872e2a8a1e",
"main.dart.js_263.part.js": "ecc8dc6a3e6b0fafad713d3629213163",
"main.dart.js_311.part.js": "1fe7006f0e2d323961a4532e75621910",
"main.dart.js_347.part.js": "56a6842a85610a137aeb0e7ca6449a49",
"main.dart.js_99.part.js": "ddda7c2132dd561953eaf5e8f88bc3fd",
"main.dart.js_14.part.js": "5a0752a8bf0ca6ebdcf463c9e35bbec2",
"main.dart.js_233.part.js": "cc0d03447a8f957dc8b79b6c447d0baf",
"main.dart.js_277.part.js": "11c6131c3f4a749e5ceb07483b5a8f0b",
"main.dart.js_53.part.js": "43d3ed259dc6946b2c063c0cd73e3713",
"main.dart.js_273.part.js": "cb215986276f67ed9ab62cb23886f3e5",
"main.dart.js_108.part.js": "27599c9e4e2d9f93ea49b1c4b537cc71",
"main.dart.js_187.part.js": "3c137e251c70705ee8bc44795eae1aa3",
"main.dart.js_305.part.js": "828a8cf739c240824842ad0fc21a356b",
"main.dart.js_193.part.js": "53dc2da705a2caf812bd13d5cd9edd41",
"main.dart.js_366.part.js": "f09d47e6f92118158028b5bba52e8318",
"main.dart.js_264.part.js": "1def24bede6c8a56c84bd1b65606c473",
"main.dart.js_371.part.js": "df047dabfa7f328e71f98abbaa2a3088",
"main.dart.js_168.part.js": "1a97f6aa5bb5492ab2a44a72aef7df3c",
"main.dart.js_341.part.js": "578172bc74f48f6cf9eff4a58f0ed988",
"main.dart.js_339.part.js": "3a0061f9bcc7690d49711d494a65f0df",
"main.dart.js_215.part.js": "16c3d705bb40359a4d9244c57421b8ad",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_279.part.js": "f0d9ea700b56e1fb98e56bd7f73fc5ee",
"main.dart.js_243.part.js": "240019f0ed6c2b0af2874add15ba286b",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_343.part.js": "a443a301f4022ee9fe10ac24550f0e79",
"main.dart.js_195.part.js": "fe5453e8aa25fafcfd9fc6fa4b7d9513",
"main.dart.js": "c48650f22d1e93c7f1a83f9cf8e2be51",
"main.dart.js_65.part.js": "13477e535757f0551e06bac6e138420b",
"main.dart.js_354.part.js": "5962d6448282afb23740654e0674a4b4",
"main.dart.js_208.part.js": "24c5f8483d10037bcf75ed0a636d377c",
"main.dart.js_177.part.js": "92cb9c5cfeb646db575b816e22876b79",
"main.dart.js_310.part.js": "3577fc8a151b16d01bcad51ea335f728",
"main.dart.js_324.part.js": "aac9dbf4ee1ce0e904c7cff44d1b4de3",
"main.dart.js_2.part.js": "8a4a359c9edfb315d30f7c140e04d3e4",
"main.dart.js_292.part.js": "867e1556c8d96bea4e02fcaa117e8359",
"main.dart.js_244.part.js": "a9e65774ca92f83c54e02493b9cfa2af",
"main.dart.js_47.part.js": "5c57f9ce0393d146128752c6a4c46d85",
"main.dart.js_152.part.js": "b81a746d209a6e6db7b3c284e6380eeb",
"main.dart.js_159.part.js": "c5a841eb59118abb0d260d9a4b3b7345",
"main.dart.js_300.part.js": "10eb85a905105d00509a8a916d965826",
"main.dart.js_158.part.js": "94cf5dcfa059176ddc2c4009a5c19a70",
"main.dart.js_205.part.js": "2a392d0ff8bef1a2f3bd95c7fc3627c4",
"main.dart.js_71.part.js": "022f5d5ab29ee4df326c0229f2529c12",
"main.dart.js_342.part.js": "48eb8bebd530592fac0f251004e49318",
"main.dart.js_338.part.js": "bf27b4500b8b9f0982b02f66dae942f1",
"main.dart.js_116.part.js": "8f637cff1de75449a5f0a544b2aadebb",
"main.dart.js_165.part.js": "d4849ebdff0a7851928ff8a4c7265421",
"main.dart.js_323.part.js": "fffe5bfd43a7a97c483b257b4aea0482",
"main.dart.js_142.part.js": "2c74660b8fc6d74ce1f7e6231bed5f52",
"main.dart.js_163.part.js": "cbb4119137f8953d413fc189298e704c",
"main.dart.js_313.part.js": "e9a0daf88714b6e1888c5b62d79b4da1",
"main.dart.js_25.part.js": "8409b2cb2983ac71c1558305a9e7a12c",
"main.dart.js_17.part.js": "ff0ab4398445260af32556caaf9a33a4",
"main.dart.js_61.part.js": "65e705aaf67ce865b08ee3fd1f41df02",
"main.dart.js_101.part.js": "1cfee39d1c48807ade95d2dc8417c406",
"main.dart.js_333.part.js": "82d10ca777d1558bd44b2b8718174b93",
"main.dart.js_350.part.js": "d15cca89da159ddf00af0cee3e4078c4",
"main.dart.js_302.part.js": "bd6c5a72db63ca5f4267ce2ccb7fcaa2",
"main.dart.js_349.part.js": "e1a386b04bc67f5df22674d8c9992ef9",
"main.dart.js_365.part.js": "8beb84b347d153c7a225c472ad87b431",
"main.dart.js_185.part.js": "f94f63c66e8b7ed8de3a41775bdfa56d",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_306.part.js": "df5b7d753f0c1533ca1914488937c464",
"main.dart.js_139.part.js": "ef73c7976153e5ac21617ba7b43db638",
"main.dart.js_56.part.js": "2c00663c318d01ed60a4dd9c1bfb7ece",
"main.dart.js_23.part.js": "af68025e4105d4212168b9213a732c76",
"main.dart.js_238.part.js": "de1a676fdb89308e5de003d9de236340",
"main.dart.js_367.part.js": "c38b7c14926d9b1fd128c58aa59f453b",
"main.dart.js_332.part.js": "38a9d8bac1c9055c039dde1097bc77dd",
"main.dart.js_336.part.js": "35dd13c6a2fb6840e82fb79983b3dcbe",
"main.dart.js_122.part.js": "442d3b3286abed6732553931770caf53",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_293.part.js": "ab57f00138e05e97a1f78d55dba17c51",
"main.dart.js_88.part.js": "78e35ed1b70d4b0b105a501c6be81791",
"main.dart.js_4.part.js": "59b9071b307585308bd278d27de96bec",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_3.part.js": "57b6d8714f3f3a3bcf15aecd63dac4c9",
"main.dart.js_228.part.js": "b94e8abe3b9a6a9a047b49508cf20b87",
"main.dart.js_178.part.js": "c8007d0f786f37a0dedd3877ad7b39ca",
"main.dart.js_175.part.js": "522de5183ce1babef27a000958530c31",
"main.dart.js_262.part.js": "093759d451c044cd8a92b28999c5543c",
"main.dart.js_96.part.js": "aa0e219c79dc4c8f63e9bbecbd74fa7e",
"main.dart.js_296.part.js": "78f6eadbe947a773e9457f1bdbeef0eb",
"main.dart.js_89.part.js": "e975693e915c892417b557a723d91bfe",
"main.dart.js_245.part.js": "4e627afe4faea6e5b44128400c61b94b",
"main.dart.js_40.part.js": "6d025581da4ee359443bb9d4100c073d",
"main.dart.js_107.part.js": "aaeced5f62357258fb577879c7fa4d25",
"main.dart.js_225.part.js": "0d0a1d0e8c053c2db646015fd94cd008",
"main.dart.js_321.part.js": "8597edb07a636d8868734bc5b5a0ecf7",
"main.dart.js_358.part.js": "d848209980412403c47e92cd4519d503",
"main.dart.js_76.part.js": "db25b08dcf03c58dad1c200a26ab4e06",
"main.dart.js_90.part.js": "0bbe312c1778b0047f25183d0b32df11",
"main.dart.js_52.part.js": "4e8ad23c106063e2bc73c163bd24d2b8",
"main.dart.js_146.part.js": "023afc5791ee16723ec25c48bd3267c7",
"main.dart.js_282.part.js": "b5dc7c6533b1b332bc754c7db7921cd5",
"main.dart.js_237.part.js": "6a174f5089cab89a4f106a22bc2db46a",
"main.dart.js_28.part.js": "1762bae24081a4c433bfa1c18493f574",
"main.dart.js_288.part.js": "c6d3b5336ed165c56fcd53741f917f0b",
"main.dart.js_241.part.js": "6579bce460a741613393650aea77f2ee",
"main.dart.js_206.part.js": "85126a9ffafabb8d477962428c3a608b",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_200.part.js": "4fb0bd981cde5f08a9e12f30818c3f2b",
"main.dart.js_344.part.js": "e20e2acde7ec75bbc5ddda5321977816",
"main.dart.js_196.part.js": "ae54d146f07c41d7e75edbc18c91d634",
"main.dart.js_77.part.js": "2dfb920013131ddf86892991c7e80f94",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_182.part.js": "5502a7072abcb8b8f1f5a7a5221f89ff",
"main.dart.js_41.part.js": "1fe9fc8155c7298ef81507e4276c9872",
"main.dart.js_335.part.js": "42bf2b1cefd5933bcdfc0fdbd44a0e10",
"main.dart.js_13.part.js": "df6235d49c2aca4a9614aca8006bb1ff",
"main.dart.js_43.part.js": "025c39e9f5e0a96318248ccab1bdd3c6",
"main.dart.js_189.part.js": "cad99df84ce636a271498dd0b153294e",
"main.dart.js_198.part.js": "cc9885da8ebaf86378c0a05abcefd8c7",
"main.dart.js_59.part.js": "dbda04a5e53b0afb355b123e8fe0d264",
"main.dart.js_8.part.js": "95a69e8d6f81e2bc03886916de8ccae8",
"main.dart.js_286.part.js": "a831c0ba43260b836edea7a63e16b0e7",
"main.dart.js_100.part.js": "5dc319d769f2708e0782ffd6451c71db",
"main.dart.js_224.part.js": "692069c99e25b2ad7b3078df3b8731e6",
"main.dart.js_22.part.js": "067528c79a2a232a27ae569307eef3ee",
"main.dart.js_355.part.js": "f293a25aec6393432213657d7e8dd807",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_257.part.js": "054ece3ea4d996e8b8fff1bec18a4ebe",
"main.dart.js_227.part.js": "146fbda6dc811a8ff033b1ceef6b078e",
"main.dart.js_154.part.js": "71fc4e4b7d68bdb37dd1014a3101b626",
"main.dart.js_186.part.js": "998b248224e7cf866534dbbd8debec20",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_102.part.js": "955272734335c4a73ef932a030d2a966",
"main.dart.js_68.part.js": "0842b56b89c0c702dad21aff8e62e4a7",
"main.dart.js_211.part.js": "0ad60d931ac11d60255851305f1f9b56",
"main.dart.js_364.part.js": "0ee8bd26af7a9f72a277265440fde31c",
"main.dart.js_356.part.js": "8acb496761c063c9a00509a925193919",
"main.dart.js_180.part.js": "805efe572f0a5012c8d9dcf74ef919c6",
"main.dart.js_181.part.js": "d172cf5c9ac1f70304d021676786f318",
"main.dart.js_118.part.js": "372113262c410ef34f16eb1e8246789b",
"main.dart.js_270.part.js": "0de6bdd0eca91c814c94188b9d88508b",
"main.dart.js_352.part.js": "fc2bfe539a261ae7710a1f133e970955",
"main.dart.js_372.part.js": "99952a19d20d627a2db5e277481f7646",
"main.dart.js_85.part.js": "300ea193942762a7f161cebd1737b5da",
"main.dart.js_11.part.js": "89e0224f5500bf4731ca4a16bc694d9b",
"main.dart.js_92.part.js": "8eed64e7a575260a0c6ace73a59f1a02",
"main.dart.js_274.part.js": "0eceb81b7b8ac6a22f4d2f5eb2841e0a",
"main.dart.js_326.part.js": "eedf22a7008f9646f0f5a1a431cfcc82",
"main.dart.js_7.part.js": "b6b5cf1351acb652430fdaea530418db",
"main.dart.js_194.part.js": "ff520885cffd44c9f30f4357a9ce79a9",
"main.dart.js_87.part.js": "ac0a2ccd8cac5543ec4c61c530c72fcb",
"main.dart.js_37.part.js": "0bdc362e301aeba5c3b0be9a359c89bd",
"main.dart.js_151.part.js": "a5a11f7e49e5e9f09b7abb425d82379f",
"main.dart.js_320.part.js": "99791d9c06ddc9fca3267e06fbf7a085",
"main.dart.js_289.part.js": "2d1fb32f0c21f993f00b0c11932cfbc3",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_54.part.js": "07966374e90aa7be424a390ed25c0b94",
"main.dart.js_199.part.js": "41d18e154ecefa443a904e085550d868",
"main.dart.js_207.part.js": "d3071d64ba4e147ec5c99ead6c44b963",
"main.dart.js_119.part.js": "b42e117ff9ec07900a616a610704745e",
"main.dart.js_284.part.js": "8d2fcd150069023a328287b83a400787",
"main.dart.js_369.part.js": "d11525c08f3145961415f0b1c9318ddc",
"main.dart.js_191.part.js": "535d88ce5a0691995710ea4c4d4f0113",
"main.dart.js_359.part.js": "60e8c4eb23aabe8dcb670fc462695164",
"main.dart.js_141.part.js": "2a5cce29925a69ff00d61f9fbbb8f426",
"main.dart.js_94.part.js": "c74f96b734981915540001e360421d8f",
"main.dart.js_290.part.js": "524cebb00e8188bbc402aec81957f7e7",
"main.dart.js_97.part.js": "012cf2e9108897aadba44ddccb499ff8",
"main.dart.js_222.part.js": "a2b414af41e3e36ab3ecee6a9b3ab1f9",
"main.dart.js_35.part.js": "7b15d4b3e260051f4e11bc626188475b",
"main.dart.js_217.part.js": "8b145a6b069c8b5b83fdbde2451c383a",
"main.dart.js_109.part.js": "acac083b90b2fcf7d8a3c78576f7b3d1",
"main.dart.js_145.part.js": "6c8a567582a2054efb3b220c0996ac08",
"main.dart.js_27.part.js": "f406f6c4cc5937aa05397330f8f6433c",
"main.dart.js_322.part.js": "6c259a040b3a3b8eb650f68fec6a865d",
"main.dart.js_330.part.js": "30cf11616a7159c23693638c2f2651cb",
"main.dart.js_148.part.js": "1a43bfcef13882ca5b53d01bdb4da8cb",
"main.dart.js_268.part.js": "98d07aa7c5166a8971e5345e282198cd",
"main.dart.js_162.part.js": "beb4f3c1d7a28772c04894e0c055d6dd",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_309.part.js": "f683da342999cd4047a4b648c3232d61",
"main.dart.js_242.part.js": "cc5fdb7937db836910a5df156139a5f3",
"main.dart.js_80.part.js": "02c802277cacd623497a11bb22697e22",
"main.dart.js_18.part.js": "e42e4a370b9f6218f02048dbd64ccb62",
"main.dart.js_361.part.js": "e544913e0e347bf41f02417b1f026521",
"main.dart.js_26.part.js": "0b70a6c7bcb4223587faf3ffae069686",
"main.dart.js_353.part.js": "8f1956507799b31a574098c50df5f4f5",
"main.dart.js_51.part.js": "572505a1b43f4edb780c6426f491dd81",
"main.dart.js_250.part.js": "c6481ef06fe7ee2348743b82485f09f0",
"main.dart.js_188.part.js": "e1c25bb0b66b0fa67b6bff0421ed4f9b",
"main.dart.js_230.part.js": "97ecfb082c2dd0688c89a3254ee6cb76",
"main.dart.js_160.part.js": "450cc2ab83adff4de68316592dcec135",
"main.dart.js_105.part.js": "2b834a0ca8d061c6dc63d475e99e721b",
"main.dart.js_63.part.js": "bd5e348bebc4d9b8cfbf700b183a7a77",
"main.dart.js_235.part.js": "6683f18e92330d51534752c6d67debab",
"main.dart.js_106.part.js": "6bf7f4305c1e522073525745e82edfcc",
"main.dart.js_272.part.js": "8230117e06fe4e1c4436b7b82893860e",
"main.dart.js_134.part.js": "9c6a7f412dc708a19cacf061e498754d",
"main.dart.js_161.part.js": "9d1711a4c22c7e3704608fddc90b15de",
"main.dart.js_38.part.js": "8e7ffe4c2ff09204c3d6b5f62340e943",
"main.dart.js_360.part.js": "027c91a2c249e3b3106b3f5ccefb26c6",
"main.dart.js_219.part.js": "e34271095fbb5f7eee80dca73aadae4b",
"main.dart.js_314.part.js": "25d372224bac3efd6289830986ec7c3f",
"main.dart.js_362.part.js": "30dc9e009740309c28b05643c915a153",
"main.dart.js_259.part.js": "f173bbbe48158c185c8cf9d745c053bd",
"main.dart.js_86.part.js": "dbb8011b0cfaafce00d5cb104021c983",
"main.dart.js_104.part.js": "93e9665d618f12aceae5fd796ccb8eda",
"main.dart.js_31.part.js": "4cffe58e6269e3af8333df2d1588fe88",
"main.dart.js_125.part.js": "4e1cc8f62df93c15e3628a5d2ceb7b37",
"main.dart.js_19.part.js": "4396a6fc4781c4d8c988bcb86ab5e19f",
"main.dart.js_297.part.js": "f10e0e55365edb8ced6d330b4293660e",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_316.part.js": "1d57026e75852a52d06c838abbe36991",
"main.dart.js_171.part.js": "8935849648ec40de0fc82fa103080b82",
"main.dart.js_363.part.js": "5cdfaee2750c64d11fa3d0e93375f543",
"main.dart.js_33.part.js": "982a0ac1b993af6aaadfe8174691a933",
"main.dart.js_201.part.js": "1822c44820cd43961b910e243c769b50",
"main.dart.js_117.part.js": "181c92351ba7199e423915a4f38f73f9",
"main.dart.js_1.part.js": "c97b0df38b280c0975b284fd2fed820b",
"main.dart.js_261.part.js": "1bfcf92f86ec67a156dda25c762aa5cc",
"main.dart.js_44.part.js": "bdf7bc36652191cf0c349f2e12db1eb4",
"main.dart.js_328.part.js": "f04858b811d6bb9c0bfcbf0b115e82ee",
"flutter_bootstrap.js": "dd9badf023fd54f55a90d2b74ada9308",
"main.dart.js_15.part.js": "6e154776f373691b5f7d7808c3c39fce",
"main.dart.js_226.part.js": "531a608d956c89b1ca7607fdc959d43c",
"main.dart.js_91.part.js": "32136ed44749768894f3e09ee4f3d227",
"main.dart.js_167.part.js": "acc40b5cacc61ad927d9a3260093c545"};
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
