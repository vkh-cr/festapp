'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_104.part.js": "734bda711df661a3cf6d997fe0fd1a35",
"main.dart.js_113.part.js": "78f552cb22d2175f6651accb0f85af51",
"main.dart.js_37.part.js": "6902e50ad6a503a52097b7428ce29840",
"main.dart.js_3.part.js": "eb57aaa7a8cdc7f96a342bb3b7cfdda6",
"main.dart.js_291.part.js": "30619b2303c789cb7fa2506a5ed24fb1",
"site.webmanifest": "68f54bdc321df4be45aae846e9f367d2",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"main.dart.js_208.part.js": "c9c23364f4df5af13d04b927b43e57eb",
"main.dart.js_207.part.js": "2e2a1858ff4296f90552041646198909",
"main.dart.js_185.part.js": "42db71ae7fda12f75f1015d5ed895e7f",
"main.dart.js_135.part.js": "5a4178954fe7c7334f587204ebf12201",
"main.dart.js_65.part.js": "524d71b792b699c6057ad6604cd1d1be",
"main.dart.js_308.part.js": "234df438e86be2833a01b008b251de52",
"main.dart.js_167.part.js": "8ae626c5363856a237e31feb14e7a757",
"main.dart.js_271.part.js": "2e1533a2a5f9e4faff0fc69cbdbf447a",
"main.dart.js_201.part.js": "8d6ad3738217abfef350f92fd1aee504",
"main.dart.js_112.part.js": "e0dc48c17782f646e9efbcb07f5378e2",
"main.dart.js_105.part.js": "dba29f7ea57581aa9fb99d101441f5cb",
"main.dart.js_148.part.js": "affa052fb6b40f82cf879d0842bda519",
"main.dart.js_137.part.js": "8506cab4dc710e39a6ee30a1a6f3226c",
"main.dart.js_101.part.js": "7d6b9c9eeb9fa556ace433a83b635882",
"main.dart.js_297.part.js": "93344914d1a12f6ea91d2ba1606a5938",
"main.dart.js_1.part.js": "8c949c68bfa0ccb78233e7643ac9577a",
"main.dart.js_173.part.js": "667566128d53057e689c5e1a665bd7ac",
"main.dart.js_92.part.js": "cf6751ffbce8e50bc172c436566a7b8c",
"main.dart.js_55.part.js": "350f96eb6a8c4e0755e054e808bf760e",
"main.dart.js_87.part.js": "bd2912d04642b4a464072675f71751b0",
"main.dart.js_63.part.js": "91e1e1b81a0c2e08b40590663133f339",
"main.dart.js_27.part.js": "e5902eb0b84377f5478be51ec94844eb",
"main.dart.js_36.part.js": "1186b8f9ce38e8658e2477268e2a6574",
"main.dart.js_245.part.js": "34d26cefd67adecf5859dbc33db933ae",
"main.dart.js_13.part.js": "81725bdc85fcd4fc183cd24220359a55",
"main.dart.js_136.part.js": "2367c7e433c1e33987c0a6e82bf70167",
"main.dart.js_311.part.js": "db631ba7c18a8e6eee74c91f59a2f196",
"main.dart.js_220.part.js": "58b4e3172e9a8f49a29239dd3433e22a",
"main.dart.js_77.part.js": "2644b164a81e9b56c6fe4a9a703a4588",
"main.dart.js_106.part.js": "be4e1be7a602954eb53267140307c5e6",
"main.dart.js_14.part.js": "57f36ce4f9c65a0f643d6d333520e776",
"main.dart.js_39.part.js": "7a9ab5fc5c26220ad375ab9579371c79",
"main.dart.js_48.part.js": "67ae3b0ad4f144368873fdd78f5557a6",
"main.dart.js_19.part.js": "dbe20ac9dcdf2c421bfa5a366defacb8",
"main.dart.js_132.part.js": "63183fd617a4ebf920532010f07bfecd",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_280.part.js": "0a1ad7639357768ab21a44d1d0f9064d",
"main.dart.js_274.part.js": "5761fa881d3aab5faaded08a654e9d73",
"main.dart.js_318.part.js": "782531a05604a5b6d6be9bf9c392f1c0",
"main.dart.js_73.part.js": "b7a018a6fc98331d14e07831b770d77e",
"main.dart.js_214.part.js": "39f686db337701ec0521e9495eda0810",
"main.dart.js_81.part.js": "5ba6f6e6ee98720c357c3be2e4c3daad",
"main.dart.js_30.part.js": "d01a1e3856affeb519db37adcb98735f",
"main.dart.js_295.part.js": "07fee4303e8990c920d078ba0c926211",
"main.dart.js_140.part.js": "8bcec9d68dae415dee2aec7fcf3000a7",
"main.dart.js_11.part.js": "e883846ab085a8770dbf37b61e7b7e1a",
"main.dart.js_126.part.js": "aea8465bc9f72a9c9b19874e6a47d55a",
"main.dart.js_169.part.js": "ffbc6429f06d076e60a51a7144e09b65",
"main.dart.js_58.part.js": "4cc1b0f3ce99255be2ec6c33fce47671",
"main.dart.js_130.part.js": "22d5164514d5f9d19b722480756011e3",
"main.dart.js_156.part.js": "8210b7bbd41eabae3b7f84b9b39edd2a",
"main.dart.js_184.part.js": "c5b262ec0695fda49fda8bc3a4d857ca",
"main.dart.js_234.part.js": "00d0b745c9bbb12b066e9b91b20e1bdd",
"main.dart.js_316.part.js": "ba38ed5d15f64ad6ddb0b578536d7933",
"main.dart.js_71.part.js": "c4030d6552521c1aaae9530164b939e4",
"main.dart.js_161.part.js": "5b3348a1cb5e81e20edc641998a20deb",
"main.dart.js_42.part.js": "646fd6fe1d4f9e3cf641114fa7ba9688",
"main.dart.js_45.part.js": "d252ebe135e9cffab795f2ff48ebbaa4",
"main.dart.js_246.part.js": "1ce0796f3cf1bbd74fd6d0346e241c88",
"index.html": "69d5f2d9dc7d594aef1e9f519024015b",
"/": "69d5f2d9dc7d594aef1e9f519024015b",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_35.part.js": "722b8e45b3396d47c30b7fd72e464164",
"main.dart.js_302.part.js": "ec005dd5e551a074762a9367f076c902",
"main.dart.js_79.part.js": "e338d4225e9b34b0505753620668b1ab",
"main.dart.js_217.part.js": "1d0370772af0dc9a210861d6f2e38062",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_241.part.js": "a2c45cfc56ee86b566e5183b3ed76de3",
"main.dart.js_95.part.js": "05a48276ee8ae90e86fd7315124c36c6",
"main.dart.js_119.part.js": "28adc1cd93444c12f0d714f2a5182b83",
"main.dart.js_327.part.js": "6464d4cd7e7c253b984040f985cf21be",
"main.dart.js_10.part.js": "bf9d6de372476ae21781020753d02c3f",
"main.dart.js_168.part.js": "8fe0b01e89325b59fd3367d447471bfc",
"main.dart.js_244.part.js": "1f437ceceda87c4871b688e53172785f",
"main.dart.js_98.part.js": "b20035dde326951a8354447aa105b66b",
"main.dart.js_41.part.js": "20ac4c365132eb47f384cd127a133523",
"main.dart.js_242.part.js": "4b86a8e8860a2fecf032dbf58691d53f",
"main.dart.js_151.part.js": "b9f67def4a259c580bccfe70021af629",
"main.dart.js_96.part.js": "946cd316b62c625cc54c2ea98bc3c1b4",
"main.dart.js_78.part.js": "f733cecbb275a7479689d25037a4816d",
"main.dart.js_75.part.js": "c948b0ad2149cac7224903d84c819293",
"main.dart.js_122.part.js": "f348506d6f23ebd703af5029af1e4163",
"main.dart.js_294.part.js": "0493078e26926971c531f5a3b6d4b46c",
"main.dart.js_177.part.js": "3fed7dee37bacd3e53096aa907dd3ffa",
"main.dart.js_134.part.js": "ed64b90305465181ee0cde3fc72f0085",
"main.dart.js_82.part.js": "1fd1881cda039843443fe94912dff585",
"main.dart.js_149.part.js": "805d11ff94c786509b1dd783a2758516",
"main.dart.js_261.part.js": "a5fa2eb141ead5ce0476712b8916adc7",
"main.dart.js_34.part.js": "fe85cbd2d11ae7f6f1b5561d1e6dbf5b",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_262.part.js": "e5b39ada9a3069b2cf7f280bd3efdc24",
"main.dart.js_299.part.js": "34ea67a91e5bad92b9b1f945a08c83cc",
"main.dart.js_138.part.js": "61b69f25723eb941da0c5de751edb41c",
"main.dart.js_322.part.js": "ee8c681ae3b4a495da62e780e033e4e7",
"main.dart.js_179.part.js": "c3b63e0a805e1d44ea76f60f7ef9a8bb",
"main.dart.js_330.part.js": "c25c571a7e3e496a191c13542dd1a981",
"main.dart.js_301.part.js": "926a930f926cdc37835be68a8e65ba53",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/translations/en.json": "fc18827fd7c1b35adb60680e9013d80b",
"assets/assets/translations/uk.json": "2c47c07e477e41bd60b4d3a1ed68f522",
"assets/assets/translations/de.json": "e0ddac5bd3ec3cbd16695dff2027494e",
"assets/assets/translations/pl.json": "24082b33bb473455d844eeb9d5352f38",
"assets/assets/translations/cs.json": "418d94d17fcd1d49c8168a16008b1b34",
"assets/assets/translations/sk.json": "9e70dc0dcb59dfff98ca64901e22634b",
"assets/fonts/MaterialIcons-Regular.otf": "de1bf1ceee2d9389f57cf71acd63d769",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/NOTICES": "b2f8037611cbaa951acc69cf6d07739a",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/FontManifest.json": "a930eec321fff21b08272317d91d885b",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"main.dart.js_53.part.js": "1f04a4185fdb0bf666d5c65d1f8b6923",
"main.dart.js_47.part.js": "70e864b4124cd76dc55ebb9b14576bb1",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"main.dart.js_69.part.js": "00f9d6f11325411e24b7ba0240831cae",
"main.dart.js_107.part.js": "d8a020afb700309acddfaf02969e0571",
"main.dart.js_89.part.js": "2be3bb859889ed505449b3cd489cdb93",
"main.dart.js_334.part.js": "c88c25d9c92eea9542733126bfdd1670",
"main.dart.js_160.part.js": "cded9e59a4754d69f4c421f8f05bc20c",
"main.dart.js_181.part.js": "c3cda5b55c36d5c72b71e47774f5c9a8",
"main.dart.js_56.part.js": "91b7c1ff70d2a98383dcaaa70f1113c9",
"main.dart.js_72.part.js": "12e50561c4d85aee7f7b5011394ba7bd",
"main.dart.js_44.part.js": "09804e2387a83aa6ecdc581dba64d3af",
"main.dart.js_195.part.js": "c0e323c1916f3c477a0bc0caba927591",
"main.dart.js_32.part.js": "c6c128c6457c3c08c211dde3f6c01faa",
"main.dart.js_320.part.js": "e194184fcb1f76d9c2c48a762c271c61",
"main.dart.js_31.part.js": "a30aa4257e51ab29025a079853458d3b",
"main.dart.js_5.part.js": "964103e7ad9619a1aadddcf4aa9e3e67",
"main.dart.js_254.part.js": "8fc14fa76fe2713f80fe375cf45a4ec7",
"main.dart.js_228.part.js": "3a4e04d04bb5cbceebba236f802c6d3b",
"main.dart.js_292.part.js": "928a823e5ea5e656e69d7081691bcc93",
"main.dart.js_16.part.js": "c071b78c3272ff1f9a5720808bfef0f3",
"main.dart.js_50.part.js": "e160b08b22d267d627cf3fcaafae8a48",
"main.dart.js_296.part.js": "ced3df1cbd945e11b3d97c81c3f0e93a",
"main.dart.js_103.part.js": "0d97f2e58c5095e05e7b8905b668ce6a",
"main.dart.js_209.part.js": "9259dfdd317c3e223720ce545bcf3d6d",
"main.dart.js_278.part.js": "ebbde29b48263f2ad9f47380c8a8ceae",
"main.dart.js_239.part.js": "38f9ed3690af39e6d393714bd2a62f87",
"main.dart.js_205.part.js": "2440ca1b446ad89050bc090c2d010a6f",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_144.part.js": "92ee34838d9acc21082c4b5f063393be",
"main.dart.js_202.part.js": "e396fcb23ca2190ae94c5250ef55fe62",
"main.dart.js_286.part.js": "a77092f5e10dea35a027dccf65873c10",
"main.dart.js_232.part.js": "02bb35af85fef46b0370700d66de0295",
"main.dart.js_336.part.js": "ba0105e5dfd72b65f75cc2d4b4121201",
"main.dart.js_52.part.js": "071c0205948061af1edd9fec94fe1315",
"main.dart.js_333.part.js": "9b1e1176f808fdeafc1708c4aa3f22d0",
"main.dart.js_198.part.js": "79af5457c5b4e979b7baecf134bc6766",
"main.dart.js_196.part.js": "058d7ce80c901380b91b8a3cf99928b8",
"main.dart.js_303.part.js": "9b3aa0a06691c0d0b94da4e0bdb2e350",
"main.dart.js_141.part.js": "d3572b5a8c96890a376760c616a51d7e",
"main.dart.js_192.part.js": "5fc06d6b5a8a23328c5d15b78126a86e",
"main.dart.js_287.part.js": "d80009695a62a4acdbe5af9453f4b2bf",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_7.part.js": "e7f5396de659c9e127ebaa3f11ee7722",
"main.dart.js_331.part.js": "d8bc1be818d152596fd3746476a6bb07",
"main.dart.js_23.part.js": "63f30eccec2cb3740c7269a87428da05",
"main.dart.js_154.part.js": "58fa7560aa737d5d16027b1eba2d1aaa",
"main.dart.js_68.part.js": "15869bc05f8c91bd6ca07080108fb6eb",
"main.dart.js_252.part.js": "5410d405afa451860ca99304de182ee5",
"main.dart.js_237.part.js": "2325b5c7e1e143b41841d80f08a1a5a3",
"main.dart.js_142.part.js": "ade7a28f532c5110f55f33e59cf72525",
"main.dart.js_290.part.js": "58b76e6f6ad2cb6251d1caf3f6ca1d08",
"main.dart.js_212.part.js": "673fed1f2747a77de66e336a76e0f470",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_213.part.js": "7ab04d284c0cfa1997d0fa96eb2792de",
"main.dart.js_249.part.js": "86d053ed3d7b6036c52fd11e5bf21316",
"main.dart.js_131.part.js": "33eff20579157b1baf1a282e7a8d5881",
"main.dart.js_97.part.js": "011e92598bc4bcd128d279d35230c655",
"main.dart.js_269.part.js": "c2567e9068936de0f984beae574fd0e2",
"main.dart.js_67.part.js": "5cbe5ccaf6bad0bba684cccf226a5e62",
"main.dart.js_313.part.js": "aa4eb6b2c570cdc4ad8c7bd1d220768f",
"main.dart.js_8.part.js": "474420141d32dbbf9acf00e94e2c862c",
"main.dart.js_21.part.js": "96f01e6924a93d62caf158ae3bcd606f",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_123.part.js": "95e31f85fc36ed422b8c6b8103c9612e",
"main.dart.js_93.part.js": "17a9a8084029c73ec3847b17bfbc7c8b",
"main.dart.js_186.part.js": "f5c8fca599ef6f6f366acadfab08e0f7",
"main.dart.js_312.part.js": "f33b431f2bd18e4155061fa848291dff",
"main.dart.js_325.part.js": "955bb2115c99ae71ab7e7123fd432c4f",
"main.dart.js_298.part.js": "8ac58e2512b5f95e723c2f65f9fa247e",
"main.dart.js_66.part.js": "38044077a1bfb1e8d74b01d2637f821a",
"main.dart.js_64.part.js": "9f6ffb13ec7b1933210f54bb18d183b8",
"main.dart.js_176.part.js": "00e7cef1384dc6deada4d7cc9768ffb7",
"main.dart.js_270.part.js": "c69cc21dae7ce942f947e0e6ee1eb0fa",
"main.dart.js_321.part.js": "deccbd913183348ccaad488e06cb9724",
"main.dart.js_70.part.js": "70210422cd3c4ee5321a7f15433d1411",
"main.dart.js_46.part.js": "c2d3e71edfeb08beff16b148dd51939b",
"main.dart.js_40.part.js": "dd4c1e70acc00803e94f0db84e25b05f",
"main.dart.js_273.part.js": "9c02be926e476991799d09d9bcd8095a",
"main.dart.js_163.part.js": "be36b3e4e48d49089d9424b8fda7bc46",
"main.dart.js_158.part.js": "8ddc7ff6a87245925f81adc214b7d6d8",
"main.dart.js_255.part.js": "986ce16c22528ad36e3a617c53a0e3b8",
"main.dart.js_235.part.js": "b278894838154900ff45794f8da45238",
"main.dart.js_268.part.js": "ed9aa801fff6ea221b135176b1ae9906",
"main.dart.js_172.part.js": "1679b51d83540b1a928c26a51aa9f12e",
"main.dart.js_84.part.js": "6203c150bab8fe956b5934837b198eee",
"main.dart.js_4.part.js": "46826de2cc731a0191c7bd166b4f3977",
"main.dart.js_150.part.js": "b730c03b2ad9342b2c161cb916a109a6",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_183.part.js": "1a3bae12f7c66588882a233ed854db6f",
"main.dart.js_248.part.js": "ab83f3c72f98c7fcb052e61e0c197d44",
"main.dart.js_109.part.js": "036be7dce0495225c7bbaaac46612951",
"main.dart.js_147.part.js": "eaf4e53250c354880af1f02645b4b053",
"main.dart.js_25.part.js": "5ee9021cf8ccfac4f4a1fcdc74ebb046",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_275.part.js": "aadea0a0030bc6735615e257c27e693b",
"main.dart.js_281.part.js": "224942480f617759707dc868c2e8031c",
"main.dart.js_332.part.js": "01d7f5893fc1d01e3c42516090c75a26",
"main.dart.js_28.part.js": "a0d80526becfdad4c185464aa435e900",
"main.dart.js_288.part.js": "372346ae1e98a326f861cf8a4eebd368",
"main.dart.js_314.part.js": "cf76427dc994943250b4174e454e0293",
"main.dart.js_62.part.js": "1c183398355f4ba6c53b2252740aa5ea",
"main.dart.js_206.part.js": "ae39c049b12d8aff9065fd7b5ba6d6dd",
"main.dart.js_29.part.js": "64a46ddf25dbf6d122a1f30c8da18e1a",
"main.dart.js_307.part.js": "a746239dd4bca688b05a904552e6f763",
"main.dart.js_279.part.js": "c2fab1c115e06d7aa611886ac6fb2f23",
"main.dart.js_127.part.js": "027e8082eb1f3f557ace0dad25fdc770",
"main.dart.js_216.part.js": "79add14f4153f562418d98151ae1a203",
"main.dart.js_319.part.js": "3afa4cadb6476aeb27edb3853c6f92ba",
"main.dart.js_133.part.js": "658a42c5cd1c474414786e38ef3371db",
"main.dart.js_165.part.js": "5a8fddf0b64399920f3f59d124c7b9a8",
"main.dart.js_215.part.js": "07d90948fee762086c7bd29d52551746",
"main.dart.js_253.part.js": "bea08edd4daabbaec516cb34b7233a92",
"main.dart.js_323.part.js": "9df1ef3ba657ff1ceac660f619954c91",
"main.dart.js_335.part.js": "7f50c289041068163dc1329311f30261",
"main.dart.js_227.part.js": "14a427d47cf970d6ec90c33f9a524284",
"main.dart.js_171.part.js": "ae8f18f6045b00a5735ebaa7b17e2e50",
"main.dart.js_218.part.js": "da3a33543dfdfc4f5f8d58588f696cdd",
"main.dart.js_121.part.js": "01e1f4119897e77c7995755d3bc94d99",
"main.dart.js_324.part.js": "8cea4c9f002af9051651e1fc8af0f3df",
"main.dart.js_74.part.js": "a6b08404deb4c6ebaac5452ea44652c3",
"main.dart.js_328.part.js": "08aade6d3be80de724a8676c6a130f2c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_108.part.js": "930e218ff31450622c31793c2dd1e20d",
"main.dart.js_203.part.js": "c99e62ab42e7eb85abd17f67ecd5a98a",
"main.dart.js_12.part.js": "daa45d1f87e467afeb49ca80dec96ea9",
"main.dart.js_231.part.js": "c8b286e89ee980ea03368b218527ef6a",
"main.dart.js_289.part.js": "e5f4a5f65003be2a541b3db372aaeef8",
"main.dart.js_38.part.js": "e3b5e2dbb1a835ce07b440ba68cb24f5",
"main.dart.js_83.part.js": "d51060dfc4cfe9541aec807268acedaa",
"main.dart.js_111.part.js": "7e7e0e5827e9821b8371ebe259800574",
"main.dart.js_170.part.js": "aa749581e0d3f3600eec171ebc4f50aa",
"main.dart.js_337.part.js": "52df9d5a31335f1438bdc05354d9d48e",
"main.dart.js_219.part.js": "e325270f2c30f0b4ba3bec942e07c97c",
"flutter_bootstrap.js": "53d52c4b726bd120f505eb0a2f11a353",
"main.dart.js_143.part.js": "ee5e6380dc42bb3feff92e6f062cf610",
"main.dart.js_15.part.js": "27880054dfc893ce1aaf96406895b627",
"main.dart.js_9.part.js": "d59fe972287ce34b10302dc4b1fb0b1c",
"main.dart.js_189.part.js": "ba114b0eed42a15d1f3cc1b3175e7c85",
"main.dart.js_26.part.js": "3cc471895fcf2036b8a8cc4298fb21d7",
"main.dart.js_315.part.js": "ae3ac71c213efdf09fddcbaa64d10097",
"main.dart.js_125.part.js": "1b9c7bd16a10b6c48d443818df044665",
"main.dart.js_304.part.js": "1c0359a6ea800cf9a0d645bc9c22d43c",
"main.dart.js_264.part.js": "4e0ef5c8240362d10779a2f4eb8b56c5",
"main.dart.js_306.part.js": "ba8c98d2bee4733963726933e54e695b",
"main.dart.js_155.part.js": "765b46acc01bc14d66faab58e8b11e5d",
"main.dart.js_178.part.js": "94eb6534773337a6574f5e4b48441830",
"version.json": "085bdd1ab07b8da2d243f38391dc9df5",
"main.dart.js_225.part.js": "4e0798e04e24e013ed1227b3644033ea",
"main.dart.js_293.part.js": "85dedfb48d11f15898df3eb6b51cb221",
"main.dart.js_310.part.js": "0b56293e2c93cfc7a3d32b60ea45ee63",
"main.dart.js_222.part.js": "aaceb524f8936ed60364f85f97a66856",
"main.dart.js_238.part.js": "0089dcb90bb591c6b5e753aa22867708",
"main.dart.js_146.part.js": "975398a13622b8b99038e7e90f7eb852",
"main.dart.js_221.part.js": "cb6cecbdde51e7a54c3696c08e434ed7",
"main.dart.js_157.part.js": "c97d373d78837e55b2c991bcdd7b08f4",
"main.dart.js_329.part.js": "52fcf59acd3b899a84f7c1de8c93c08c",
"main.dart.js_187.part.js": "2968e57aff7cfeed2bf9afe370293037",
"main.dart.js": "42def9ecd8a65fa67bb734a8be953fed",
"main.dart.js_51.part.js": "b7def0b0f436324003eb6ecf186a9609",
"main.dart.js_182.part.js": "bf442b458581b09f02eada4b2e3cfd51",
"main.dart.js_224.part.js": "dddb16a0487a08bf502c852aa65a30bc",
"main.dart.js_6.part.js": "12880e3ba62639c5849ef1f32c78fc99",
"main.dart.js_272.part.js": "47b5f4001174e5d3cf8b0fc550d796f8",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_110.part.js": "b2afa39c92990d36d08cb8eb2c7274c7",
"main.dart.js_94.part.js": "310623062e4dc914040f2ffd4003972a",
"main.dart.js_99.part.js": "9a511ddd3f70c8176f32b8d5294fe72d",
"main.dart.js_223.part.js": "381ad1b719b19a7fde13171ff9685fb3",
"main.dart.js_33.part.js": "eac23df20e6c7d4b3f0b2f3199e680fa",
"main.dart.js_226.part.js": "3f04882677ab9e43c5cc5fbb055c37e8",
"main.dart.js_80.part.js": "4ad1e5ba52abe4889fa7eaf9289152cd",
"main.dart.js_236.part.js": "f7e739f9891bb22690335d2538fb4eeb",
"main.dart.js_277.part.js": "dd020663b16a6f85773b9bca32655837",
"main.dart.js_118.part.js": "e1aa06f8b461b3e651ed6d4c0e01598e"};
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
