'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_348.part.js": "e0e4688675e34bab7aa7e8d8d5db8702",
"main.dart.js_157.part.js": "ebd53ae704c4aafc8c8395aaed1e42c7",
"main.dart.js_329.part.js": "ad038ba43c22aa0dcd88ab34a5a73d91",
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
"main.dart.js_126.part.js": "ddcc53cf0419f9fe872f7e8beb8499e1",
"main.dart.js_202.part.js": "bb36e674f89d4b8493780d16548964ff",
"main.dart.js_271.part.js": "ddd9c1d854aef2b9c32490841472e7c9",
"main.dart.js_58.part.js": "2b6e3b0d31c2c2215fa342bfab124c83",
"main.dart.js_121.part.js": "de427d885d1bd6380036e83b2c2c4535",
"main.dart.js_345.part.js": "7c6d854413ad673020ed3a1ebf0f88ec",
"main.dart.js_303.part.js": "e3cf4d61e288dc23fb65bde292f557a6",
"main.dart.js_114.part.js": "58b67e4fb6cf7151ff42e479ef085b18",
"main.dart.js_9.part.js": "70cdc876d514dcefcdbe595366e193c3",
"main.dart.js_166.part.js": "63f2f5366c6465bac1d01f7f4acbea6f",
"main.dart.js_170.part.js": "a9f5420d73d0b7b4fab43c5c9851d538",
"main.dart.js_236.part.js": "53efc387203dea9f446c7d7815347a2a",
"main.dart.js_36.part.js": "9f8ea75f376b5e93b7dceb71e0895615",
"main.dart.js_64.part.js": "cc03de98af479e66fd0f7cb5bb0f019b",
"main.dart.js_229.part.js": "25f4a96742e833ff88908e0c78f9881d",
"main.dart.js_174.part.js": "49be5f91c8f31a49c7bc78886a714501",
"main.dart.js_307.part.js": "a2e0e1d703ed3cd4d674c3479bf79e16",
"main.dart.js_368.part.js": "43472ffe65dd3ec89789aa121bf4769f",
"main.dart.js_156.part.js": "de87145a5bdf230bc6aab02a1a8c31d7",
"main.dart.js_176.part.js": "17a473dc7634ff62c66c21077163bca5",
"main.dart.js_258.part.js": "db2fe9bb5bcceb9c442d1683259fadd0",
"main.dart.js_98.part.js": "db18487c085a38bb9f964e4dfd1ae673",
"main.dart.js_254.part.js": "4e4f8cb94cb545e44208457cc0ab9f20",
"main.dart.js_346.part.js": "91ba51ce3c1e2ac7d9bf269b4e71957b",
"main.dart.js_247.part.js": "5e47e3a4e55d3c82f9b0480b77f89dbb",
"main.dart.js_212.part.js": "66ed314c7942d62fd0a5df49a1f89cce",
"main.dart.js_120.part.js": "81b7183de27969311b1c4105d6feedf2",
"main.dart.js_357.part.js": "a52bb68c6e8d31a39e4dbff03d02befb",
"main.dart.js_82.part.js": "228a659efbb1b484c9bc190915c91626",
"main.dart.js_62.part.js": "7d406c9abab18c97c8ef414bb238cfc8",
"main.dart.js_34.part.js": "8287639fd6dea74e92f22d5990d9e07b",
"main.dart.js_30.part.js": "4acfce331bcb1dba56d5e450b50e75a4",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_291.part.js": "0d02b0a37b6cc5f71bf286255ae9fb84",
"index.html": "1ba090a6413511bdc7d2d838156dc1d4",
"/": "1ba090a6413511bdc7d2d838156dc1d4",
"main.dart.js_29.part.js": "4fd9e3433365f3a90d5924dd38e6721c",
"main.dart.js_12.part.js": "b0977641a66a75dc831d393a2dc56a15",
"main.dart.js_69.part.js": "e9d406035bb4db6964e8b62b74142d8b",
"main.dart.js_79.part.js": "f78db2a6204e333c7d9cd6457693d4e6",
"main.dart.js_318.part.js": "ef7dd07717fdeeef665c50cf69c05382",
"main.dart.js_246.part.js": "e177a76fdaf5df9ccdd75cb14d60781f",
"main.dart.js_39.part.js": "8539625f9a190e3d40ec6dbf4bfd668b",
"main.dart.js_164.part.js": "47a4a7fb6901e2311e9b5038396cd13d",
"main.dart.js_137.part.js": "1e85157036883e2cd653911700609691",
"main.dart.js_374.part.js": "960924d732c51bebbc94d127441ff84b",
"main.dart.js_112.part.js": "ca7bd578f14c7b207be7f7f5acc059e1",
"main.dart.js_32.part.js": "ea65506d4de37b95616f73437859b1cf",
"assets/NOTICES": "76d31bcceaadb251f2aa7862d72a8b58",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/uk.json": "06d8c6f66303ae3e257fa9a62fbf09d9",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/sk.json": "e20b4c2317f454bc552b2df9f86e40e5",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/assets/translations/cs.json": "bb77e9216bed8bfec5a6d884c626bda3",
"assets/assets/translations/en.json": "4c730cbbb1bcdf2e143df23b1833e442",
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
"main.dart.js_95.part.js": "4cce934687069b9fd6ad5a475b6a2dee",
"main.dart.js_301.part.js": "8c1c3aed6818c77c9627ba7fdc81d475",
"main.dart.js_334.part.js": "78ae08e08e9d763783d6594e5c5a23fb",
"main.dart.js_203.part.js": "7ca936a85a80dc11a4014b2584e87c15",
"main.dart.js_183.part.js": "c4e9bfe4d789d8ef5bbfc657a96f5347",
"main.dart.js_132.part.js": "a91305296324e7803eb70297e658e9dc",
"main.dart.js_370.part.js": "f36ecab705472c8e53dcfa4169ac9977",
"main.dart.js_21.part.js": "9e16bc18de8d65efd155df7d5d59796c",
"main.dart.js_149.part.js": "26e989bbc6b24859110a5d6af4f6a546",
"main.dart.js_214.part.js": "cb9dad400b2d966e8bea067681d2c4d0",
"main.dart.js_55.part.js": "686ee576eb8b2b03f50596d328756931",
"main.dart.js_155.part.js": "aa60eb841722957cd3dc598cf8df6627",
"main.dart.js_249.part.js": "2682415cecb8ab456305eb36a492fe48",
"main.dart.js_135.part.js": "1522766ebc341783e5600dbf83ff0794",
"main.dart.js_123.part.js": "0e6c0ecc43e607d2c909d8b98df9f865",
"main.dart.js_319.part.js": "9f6aedeed524abd830a8c8c19a0ef0a1",
"main.dart.js_147.part.js": "8bf14332c8adec18233c991289507633",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_260.part.js": "383caa658e5de7f09cb3ef6b3d7739df",
"main.dart.js_20.part.js": "c002b54d7a37819dd68c6ef643d724e2",
"main.dart.js_67.part.js": "ca8f03e2ca1e4bc9914ad6b60568687d",
"main.dart.js_204.part.js": "6a7c1e38f42a4ac91d341a3c022aff84",
"main.dart.js_144.part.js": "2abbc3342b2a6fd96515d009b04d7fa0",
"main.dart.js_133.part.js": "ffe03fff051899b8c30ab3f65f8c523e",
"main.dart.js_304.part.js": "ec94e2491843d00037b88993b8368659",
"main.dart.js_240.part.js": "76547da73fadaa2f8b81089ffe74aeec",
"version.json": "d766d97d33fb08856386e013cccb78ec",
"main.dart.js_285.part.js": "ffdf78a4d6b8de803462431c95b92f49",
"main.dart.js_269.part.js": "02bdde06b6129a266d022b781f95dca0",
"main.dart.js_75.part.js": "1cd20b4a6ee3bdec2deeb8c8ac032c6b",
"main.dart.js_263.part.js": "7e8bde89532a114ca81d3534e12a7a8e",
"main.dart.js_311.part.js": "c9b2b6275b0d0b554e46ae3b06276307",
"main.dart.js_347.part.js": "fb2b3f8579c509a1792a591439329e0c",
"main.dart.js_99.part.js": "9bf2d87eb104eb58f302e969b9292904",
"main.dart.js_14.part.js": "3797711fea1309bd19c5aeb10b2e7e23",
"main.dart.js_233.part.js": "4765efdfcbc2955ffebddd066cd5a967",
"main.dart.js_277.part.js": "69c7139c2b8a2803c67223c608902a70",
"main.dart.js_53.part.js": "9fdc40cc9dc0b4ad072359b1e0d12abb",
"main.dart.js_273.part.js": "36f0c7afcd44a0a57a052419b07a7731",
"main.dart.js_108.part.js": "371310afe3c1a3497c20d8f80fda3bd6",
"main.dart.js_187.part.js": "b86368561d0da664739b342103bcaa69",
"main.dart.js_325.part.js": "0d7a3b33573dab1dbdde9000f5077995",
"main.dart.js_265.part.js": "016cccb5c1bfad5352fafadc10fc050b",
"main.dart.js_193.part.js": "421ffba0492ab10a5bb3a9bffb1e5a12",
"main.dart.js_366.part.js": "8fe02bae45224f4ec1309d56619545c7",
"main.dart.js_264.part.js": "a0eb557b78020737573675ef842e417f",
"main.dart.js_371.part.js": "960a43a59b35b4d4ef6a1a982e45a014",
"main.dart.js_168.part.js": "e6a04523d161da95dddf5af66479b0db",
"main.dart.js_341.part.js": "c711d27bfb641423e88bbf40eb4f9a94",
"main.dart.js_339.part.js": "b55b27173f472727f083399656e5adb6",
"main.dart.js_215.part.js": "3e892ff55268539f98044f53b37b52f2",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_243.part.js": "4896abec7fd40dd3970434f5dd8b44d2",
"main.dart.js_294.part.js": "5ba6d3319dae61867685028dce0070cf",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_343.part.js": "fb616c6ab831bf27b04e1229bab3ce09",
"main.dart.js_195.part.js": "6088eb7fb02378f5f1c755a565a3b312",
"main.dart.js": "eb02e1d224a9d0b376ac9eef52cb8a91",
"main.dart.js_65.part.js": "e0bbc686d4e5a9bc29760b66fffd9825",
"main.dart.js_354.part.js": "ecf731c4ab2f3856ad4e60e6c91a317d",
"main.dart.js_208.part.js": "d196ab44aa9b16858e7becc7c43b0f00",
"main.dart.js_177.part.js": "92cb9c5cfeb646db575b816e22876b79",
"main.dart.js_310.part.js": "cac0d1138a18854f140540884ee811fd",
"main.dart.js_324.part.js": "3d3e8f2e2882ba9f62a18cd099172014",
"main.dart.js_2.part.js": "c2dd5b69d5d00c7fb0dfae260da07bb0",
"main.dart.js_278.part.js": "113f9229ab371a53689a785c87c44a8d",
"main.dart.js_292.part.js": "c1f5f5cf37d99f867203479067a38299",
"main.dart.js_244.part.js": "739a8f9e807e547c2049368c3951018e",
"main.dart.js_47.part.js": "7a4b26ab05ce38836765f887fd7c4422",
"main.dart.js_152.part.js": "b4213e611d8483553cff8486668f50ed",
"main.dart.js_159.part.js": "52b886974a1fb36fe180bce7eae42963",
"main.dart.js_300.part.js": "85eea49bf6038910395401798e748257",
"main.dart.js_158.part.js": "9f74a8721f19715a8076dc1d5462f134",
"main.dart.js_205.part.js": "82dd1f1f829427c842ae4d82d6b727fb",
"main.dart.js_71.part.js": "1e68c7b6fe512657b0eae7d86ed56793",
"main.dart.js_338.part.js": "26b54e33dff41d825208a7557140f246",
"main.dart.js_116.part.js": "540ce1ddf5e109bdb9da135b5210abbb",
"main.dart.js_165.part.js": "b48bcc72e802f3ca34c4d0a5046183a9",
"main.dart.js_323.part.js": "6e4cda7d1fbb94867c952d505099a5fd",
"main.dart.js_142.part.js": "6697a363966b8adaa1bdc11a15067f65",
"main.dart.js_163.part.js": "c42b355148c3b7b76314a3619821bd23",
"main.dart.js_313.part.js": "750d8a4770661ce179de71d36e19df06",
"main.dart.js_25.part.js": "5fdf3ea7aae6bb0ce9cab189d4581f9c",
"main.dart.js_17.part.js": "4d91382dfd51b432c11f47bcf6f6ded5",
"main.dart.js_61.part.js": "842e64fb39dd6c102a6201ed852b3ebd",
"main.dart.js_101.part.js": "eab2c4a00ef516c2d0ba13f6beb1b8cc",
"main.dart.js_333.part.js": "11d4a466eb5d9095f0727062f6754399",
"main.dart.js_350.part.js": "e30b73713af967ba7ceaa1056d9f983c",
"main.dart.js_302.part.js": "092e6aa183acb2513f288589604dfda5",
"main.dart.js_351.part.js": "ffee013802019ab699d5630f000bd865",
"main.dart.js_349.part.js": "2293c979f6233aa8f801f90cc2992d62",
"main.dart.js_365.part.js": "cabdfd0c8bf4417d0ce7741009646717",
"main.dart.js_185.part.js": "0997cabc88c9c7cfcb9f7fe4549a84b7",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_306.part.js": "bb8e5ef849952736c119c1c731fff2fb",
"main.dart.js_139.part.js": "2f9c147e986b498696a01c257d03b236",
"main.dart.js_56.part.js": "2c00663c318d01ed60a4dd9c1bfb7ece",
"main.dart.js_23.part.js": "abf6ef9ae7259a48988b6f46e6dfc393",
"main.dart.js_238.part.js": "5f4b75ef46dc24dfd3fdeaf562052e68",
"main.dart.js_367.part.js": "1f6611fed3a051b924ae386e725347b0",
"main.dart.js_332.part.js": "f457a813707070c637fe505f0575149f",
"main.dart.js_336.part.js": "7bd1605a25a536cba6880c4d22aff6f9",
"main.dart.js_122.part.js": "fc748d4d40a0b05eda1ea00f16c1d9a1",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_293.part.js": "ce1c8b113ba2f232133a17a10c8e8963",
"main.dart.js_88.part.js": "491a11061b920ae06a150a8f3ae2e941",
"main.dart.js_4.part.js": "59b9071b307585308bd278d27de96bec",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_337.part.js": "40ea8513ccd309837d74feaa0bc54486",
"main.dart.js_3.part.js": "f1095844806fc6f8087609bc1aada611",
"main.dart.js_228.part.js": "8c00eb909dceef255ab2ae6f9103b5dc",
"main.dart.js_178.part.js": "3059ec988bb4fe89b972adab6e829c07",
"main.dart.js_175.part.js": "522de5183ce1babef27a000958530c31",
"main.dart.js_280.part.js": "1daa56191a4a02b6c40127ff31ead0b2",
"main.dart.js_262.part.js": "7acc02a2a6c973ae607b1caa73c599c8",
"main.dart.js_96.part.js": "d660b3424b5e17eefcd105cb8cd85016",
"main.dart.js_296.part.js": "03ec7da61ec9827d62e036f51a499062",
"main.dart.js_308.part.js": "44d1db7a6170a8020ccbd69c6aa0fc8e",
"main.dart.js_89.part.js": "69ddf971ad2192692a1eaf0cdc5498ac",
"main.dart.js_245.part.js": "00a5fd1fd34fc146a73c1b6ee1c76b7c",
"main.dart.js_40.part.js": "1157613104a3626a156ca4696fa9fa39",
"main.dart.js_107.part.js": "7867e304fd1ae34e2bcb05afb5c10f63",
"main.dart.js_225.part.js": "1d2ee597be41cce7e80c663f4a7ffea2",
"main.dart.js_321.part.js": "521b37fee5bd60d5f500d2938b85b7c6",
"main.dart.js_358.part.js": "9cfd971fd0451fdf636153ebf747f6be",
"main.dart.js_76.part.js": "ef85d6b16227dc0b4b461d7656bc2607",
"main.dart.js_90.part.js": "5ca3dfefa12c6e53a095da5a954aa3b7",
"main.dart.js_52.part.js": "887788333ab91114a52e9ab035096006",
"main.dart.js_146.part.js": "ccc9f25ad5104fb97b86da465d2f98c7",
"main.dart.js_282.part.js": "08ba51f7d2fecc6767f621334963d62d",
"main.dart.js_237.part.js": "22263e8f7451f06ae87ad62da71a7465",
"main.dart.js_28.part.js": "81b9097ae2f5392044d5ef8fe29ae98a",
"main.dart.js_288.part.js": "684b6f0d29e333aeaf4a0f1ce917a2cc",
"main.dart.js_241.part.js": "c2cc5d11b18f63bfc0367a3787ff3b20",
"main.dart.js_206.part.js": "c07e3ea32bfd3790dbba104c412d3d26",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_200.part.js": "38a6505712a903fa84f31c6a207640bb",
"main.dart.js_344.part.js": "7d86c1767a1104d800a38029703a7eb6",
"main.dart.js_196.part.js": "15a7b5ca4ff06adf59b0ccdafec27ac5",
"main.dart.js_77.part.js": "de3ae7681cab689a0a16db09d926b89c",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_287.part.js": "79f847a6e24b446f293152085b38fe98",
"main.dart.js_182.part.js": "8deea68b17559fc6631404d52f37d910",
"main.dart.js_41.part.js": "732726417c158d337049f39fd3b5fb16",
"main.dart.js_335.part.js": "85620ae28a413b26f5a9548f08b01059",
"main.dart.js_13.part.js": "28710f4db80745afc4d2f0e7bb55256a",
"main.dart.js_43.part.js": "87447749ee4b77b3b100867b1ef2f76a",
"main.dart.js_189.part.js": "5bb21422f2c592b50475982eb6a9d658",
"main.dart.js_198.part.js": "240cd297df4714ec5748d25961eeb4f6",
"main.dart.js_59.part.js": "b3b894c09eb7d7d17ee1d2f9ff1fca64",
"main.dart.js_8.part.js": "eb7611168e1be2c927599692224c7fec",
"main.dart.js_286.part.js": "7ceea8931495a3d66659c988ca3d9451",
"main.dart.js_100.part.js": "2a8e1e44afa0946513e43945fb01f342",
"main.dart.js_224.part.js": "226ad070b62f4d09b7b24250dd06499c",
"main.dart.js_22.part.js": "5684a2a3f5b7803dba423a7936af4b67",
"main.dart.js_355.part.js": "7b73cb2139972691fb12f26b2d0841b3",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_257.part.js": "c8242b03dd443f52c3993768ba5df567",
"main.dart.js_227.part.js": "e48ac711751900839ac72c59245cac40",
"main.dart.js_154.part.js": "32864809f2bd476a2a8a232d2fe77437",
"main.dart.js_186.part.js": "99b6f271ff9425ecb1d9f4ea0cc99d84",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_102.part.js": "21516412e6130993752b05bc7f0d137d",
"main.dart.js_68.part.js": "d70e3a21c17e16ee73586aea218c2db4",
"main.dart.js_211.part.js": "64037cea6c0cc0ecb4ad3ad8a78ddaea",
"main.dart.js_364.part.js": "ec4daa3b88d4d60cdf340fa9e5027c6e",
"main.dart.js_356.part.js": "ddc7178f3635c3bff51543f99b1dc8a5",
"main.dart.js_180.part.js": "6218fe8b61dcd1b7f591219cb0911dbe",
"main.dart.js_181.part.js": "490b4c96d0f13b904b1266e5e99db145",
"main.dart.js_118.part.js": "2bf06ccb9dab93026a7c43a862c55226",
"main.dart.js_352.part.js": "4a0656c691d21b631f0f0d4fcf488c3a",
"main.dart.js_372.part.js": "0594f16ba898b285f353586813eb632b",
"main.dart.js_85.part.js": "b7812dc44e070ec9f3c7ef8e121fed16",
"main.dart.js_11.part.js": "d7edd983920b5cfa8a4f4db610e78e4d",
"main.dart.js_92.part.js": "34bcd0f8fc255637d85033c31bc47be1",
"main.dart.js_274.part.js": "3d5652903232bcb6876ce51f43883e3c",
"main.dart.js_326.part.js": "6a7a6d258fea4ad58ca032563697976d",
"main.dart.js_7.part.js": "43f65861468cab50595d4ddadd7b7f56",
"main.dart.js_194.part.js": "1d3c978a7cbf704b852e367e2180d9f2",
"main.dart.js_87.part.js": "df492bcd75bc4b32160bf347abfab52e",
"main.dart.js_37.part.js": "a27408fe1e68459e5725c2d8a81ce6ea",
"main.dart.js_151.part.js": "3b2bfafd8762b935aeae56c93f8bb20f",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_54.part.js": "1e69068c18863736a4588bb2f04dbba9",
"main.dart.js_295.part.js": "fe648b69d51c1322c051e44ec4f5c31e",
"main.dart.js_199.part.js": "1617120a98314058efed9c3ff3276fe4",
"main.dart.js_275.part.js": "daea018feeb4bd804549e6f0bc221868",
"main.dart.js_207.part.js": "d3071d64ba4e147ec5c99ead6c44b963",
"main.dart.js_119.part.js": "cbf2c0c99219297fa9f13198cca7c722",
"main.dart.js_284.part.js": "bc966b7519d579c2307ade9f140a5d0a",
"main.dart.js_369.part.js": "e1de501a3a057b931ea7232474ddc816",
"main.dart.js_191.part.js": "aef44b5bd4c51252aef234decf578031",
"main.dart.js_359.part.js": "476d2164161dc99f9d21c8a6ffc09f9b",
"main.dart.js_141.part.js": "bdb4cdf06a9f1b59f2737410d4a6fe9d",
"main.dart.js_373.part.js": "352965020145087173dfe63e1e3aa599",
"main.dart.js_94.part.js": "3a4fead45f0b695180a5f2e92c980dc7",
"main.dart.js_97.part.js": "4d3f542bf8e1e5e3fdc4f47f9dd8dd4f",
"main.dart.js_222.part.js": "bb6569ef1a829b7fe01ca1ce3448e3a9",
"main.dart.js_35.part.js": "fa15e9908f156989cd7b806440642589",
"main.dart.js_217.part.js": "15055cca0f493f948ea912f46dcde4da",
"main.dart.js_109.part.js": "07a095e202fbbb54fb3ce3f5df179d94",
"main.dart.js_145.part.js": "94951a6642fcc656a4e4387333e78567",
"main.dart.js_27.part.js": "5932e591a1305dcd2cdba4082176c622",
"main.dart.js_322.part.js": "7a4ee9f2482c15221944aa15b4df83c6",
"main.dart.js_330.part.js": "1bb560590506bc18fe385947674f708b",
"main.dart.js_148.part.js": "10d9fe0acce6a23ca78b43ed9fb397d5",
"main.dart.js_162.part.js": "3d8a06acc6a8550205ccd6b855e2f91d",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_309.part.js": "3322e70cdac9e95b0df2e4c298c1dc0d",
"main.dart.js_242.part.js": "a849c6c1ff7724721a22861d4251adf9",
"main.dart.js_80.part.js": "f6114f49af34c7ac83804af32223c301",
"main.dart.js_18.part.js": "06734423fbdc3e29b5da34c299430cd1",
"main.dart.js_361.part.js": "636747c147ff9062ddd76ba67a9d3c4e",
"main.dart.js_26.part.js": "e61c698e8f68f7082611d317cfbf7d57",
"main.dart.js_51.part.js": "eef9ba92646f30669a80067d035a48d3",
"main.dart.js_250.part.js": "d1028d6cf7464d4da8543c7d1a90ad41",
"main.dart.js_188.part.js": "3d7954a19a810f93adf024bc8f622d9f",
"main.dart.js_230.part.js": "b84a51a3edfa013dbe34d762345876fa",
"main.dart.js_160.part.js": "e380ce93168a7ce72883f427e82352a3",
"main.dart.js_105.part.js": "fe1ef680deb67d524750af0123ebd9e8",
"main.dart.js_63.part.js": "928a6c1cc7b963f67cb3cc4ddd38ff7d",
"main.dart.js_235.part.js": "9587fb13eba4a6dc9841947e6bf1112a",
"main.dart.js_106.part.js": "3efefaac82d2e6f19586170c66f57f67",
"main.dart.js_272.part.js": "6b19c13f725846c908a456cd9a35d5ca",
"main.dart.js_134.part.js": "9c6a7f412dc708a19cacf061e498754d",
"main.dart.js_161.part.js": "24818ff2d98ece649cc799f5a236ce91",
"main.dart.js_38.part.js": "f9b6c50aa3c844d9b06bfd2e9ce29d78",
"main.dart.js_360.part.js": "140555af7a4aedd7899013207ece743a",
"main.dart.js_219.part.js": "bc8a9fd067161fe81a652b2db796e1d2",
"main.dart.js_314.part.js": "6c2a4eb9ad6431bbe5e3739721592458",
"main.dart.js_362.part.js": "f8e63b836f978702e40b260eda4374ee",
"main.dart.js_259.part.js": "67d13664c9d74e27d958f8e498cf1da2",
"main.dart.js_86.part.js": "74f9c5525627f7db4ea737dee907229f",
"main.dart.js_104.part.js": "2323c76d6b27bee0c03be6f69bb34e4c",
"main.dart.js_31.part.js": "9db8c0a8ca88dcc7ec112d4aff30a1a7",
"main.dart.js_125.part.js": "9985d68d42aee4b50bf7645b3200ef1e",
"main.dart.js_19.part.js": "53657c433d53c6f63b059b03509e4fd0",
"main.dart.js_267.part.js": "cd4fe0cb5a1ba5799dd84d2d35fd15a9",
"main.dart.js_297.part.js": "7cf78844710b4e227793f99d98e54628",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_316.part.js": "868a7c53f4aca4fdb89913cad5423aba",
"main.dart.js_171.part.js": "7791f51601619300619a45aac30fecb8",
"main.dart.js_363.part.js": "9f42adc48312b120af9e9e1ae7c92bc2",
"main.dart.js_33.part.js": "982a0ac1b993af6aaadfe8174691a933",
"main.dart.js_201.part.js": "c87ecb6f586ee337f73d38b4b73b147a",
"main.dart.js_117.part.js": "fe8326023aa4c81c5bf187d1122af21a",
"main.dart.js_1.part.js": "792b460db2f3ccf97a8e76044043d771",
"main.dart.js_261.part.js": "421487bf41abdd0bdd33f3274aa96302",
"main.dart.js_44.part.js": "d58ab7a1e3ba7e2b911c53609b79a4af",
"main.dart.js_328.part.js": "f263e942378de0de58fc3df63fd9f4fd",
"flutter_bootstrap.js": "73450f52256420de7bad15528b663bfd",
"main.dart.js_15.part.js": "9d5911f85d537f5bbe712ac9a24be6b6",
"main.dart.js_226.part.js": "d07f209dd95389316fe1692f8422fdbe",
"main.dart.js_91.part.js": "46a34951d110d566dfb938c2a1f7ea31",
"main.dart.js_167.part.js": "ccea0decddec639b8c3267e25cfd8d40",
"main.dart.js_317.part.js": "bae197cede4783db3ca7d4312ceba4d2"};
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
