'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_235.part.js": "35a6fd2568e729ab59fe91eb25859b2b",
"main.dart.js_145.part.js": "ef666e25bc671198b3f7e8ea54fcb154",
"main.dart.js_262.part.js": "c38e015594dbbdff661166dd6668fa0c",
"main.dart.js_302.part.js": "0e871fb3263092027f57683702d3b54d",
"main.dart.js_77.part.js": "b6cac45f8e75353f534e918821980c3e",
"main.dart.js_26.part.js": "f3e3efe10f0f54081c6f66c4b0926705",
"main.dart.js_160.part.js": "a49a749b8ada4c195f90a297a613aff7",
"main.dart.js_4.part.js": "b329c77c01f625822614d2b444649a10",
"main.dart.js_11.part.js": "c81d07d8f5aafe941fd7f41e40229693",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_230.part.js": "b4763ed17347d29cf821b3f1797fba63",
"main.dart.js_304.part.js": "b93c4f0743baefcb76da40d0179bf6cd",
"main.dart.js_276.part.js": "40b7948ac080e182269d11019c82c6c8",
"main.dart.js_128.part.js": "3631c180558584940f1ff79e0c944142",
"main.dart.js_8.part.js": "1fb2d45ad791b9e484dd06b6c84716b1",
"main.dart.js_167.part.js": "2736d75eaeab3d877957403ab66ca497",
"main.dart.js_73.part.js": "0e78f2aea91e12c495614277590a808f",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_274.part.js": "aafd4efbf7242f3a6d2670a904bf99c9",
"main.dart.js_87.part.js": "30239b0f2ee732446cd8eee6c8eeac13",
"main.dart.js_292.part.js": "f865e1f35869f0349cdf634feac9dd37",
"main.dart.js_14.part.js": "48b11aaaa0026821e4206ebac6d86142",
"main.dart.js_182.part.js": "7cd801d643a9bd23eb3dea6eb88aba34",
"main.dart.js_286.part.js": "8165ddfcf8baf0fb777ed2736931893f",
"main.dart.js_62.part.js": "c6313028a0ebf8f5c2ea7ca8709c28c7",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_68.part.js": "fc05ea2544d2744ab6218a6f5ef703eb",
"main.dart.js_320.part.js": "c514c473fc20ae15010e9a3a0024a74a",
"main.dart.js_186.part.js": "8ce91dc11870fa0ef0dca7c39a599fb2",
"main.dart.js_172.part.js": "3e473106bb900e113ac9792b1e2421f6",
"main.dart.js_71.part.js": "7c4cd19887e9b59971347619617f0067",
"main.dart.js_47.part.js": "ddf474f1ea0f91eb6bddba263ef4d73e",
"main.dart.js_250.part.js": "0b12b2a8e01954b5fcdfe902b147326b",
"main.dart.js_120.part.js": "ea0a82c9fd5f88b7368d9df5d7803c48",
"main.dart.js_117.part.js": "3047f517b9b4fae59e3954f213259aee",
"main.dart.js_195.part.js": "47404dbcc2d1ce8cf9360753ced17112",
"main.dart.js_178.part.js": "cd678afb0a8432a16149c662358131ce",
"main.dart.js_52.part.js": "f188848bc26746271c59cf42d8a298ce",
"main.dart.js_133.part.js": "d52e2d4215bb4e190c928aa5ea2039df",
"main.dart.js_148.part.js": "061b463a5d3d8bba637afae6c87418e3",
"main.dart.js_227.part.js": "99ad9e8b5be6ea20ec7f7b092a75c536",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_265.part.js": "8ee78c98f4336e9d3c9e853b94b9b9d5",
"main.dart.js_203.part.js": "76232e55f7491e2a5b60faa1490fd4d9",
"main.dart.js_232.part.js": "8a5d9c4d30bb6ad1257a51e96e9b88bb",
"main.dart.js_3.part.js": "c949d3bd7c8d7d5b86c38225fdc79caa",
"main.dart.js_243.part.js": "abe9b16261fd3cce98ed29489c7c690e",
"main.dart.js_257.part.js": "152c19bc1331709f3fea8d3f8f43a390",
"main.dart.js_159.part.js": "262e3bc8896195d9ce4693c0faf7d162",
"main.dart.js_248.part.js": "d3e41c90b04fedf66300dc0cf0da6b32",
"main.dart.js_275.part.js": "59214894afbcc642faebf2579d2c43a6",
"main.dart.js_24.part.js": "276229cb79eff2890b3fb26d5b99ef2c",
"main.dart.js_110.part.js": "3a3f7ae5bbebcba41870c25b0d7f126f",
"main.dart.js_33.part.js": "c5dd3344d761cdf550a4a12721eaa695",
"main.dart.js_137.part.js": "80e99bdbc3a35d71a72550eb59eb6df7",
"main.dart.js_296.part.js": "c645df58af50daae612e4f83702c476d",
"main.dart.js_226.part.js": "cfa5f857f5bb1ea70a087ca8a63e299e",
"main.dart.js_25.part.js": "9d6aed839644c629258196a000956331",
"main.dart.js_44.part.js": "b18637fdbfaf7619405de302b8410d82",
"main.dart.js_184.part.js": "851743acf6b2f57615d4e37544a45c7c",
"main.dart.js_170.part.js": "d954231558d465e3a60f0d8e9cd825fc",
"main.dart.js_190.part.js": "b0123ad8111461ba7b55fc165329dc1b",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_39.part.js": "46f80f5563034f1d4aaa6e97a1c9164a",
"main.dart.js_64.part.js": "3f82f77adaa407e69278cf72a711bf82",
"main.dart.js_118.part.js": "d13f6c5a02dfc5f0d5fba301afbe5655",
"main.dart.js_152.part.js": "b2b8ff2d47ff7a31f4cdefb71677f417",
"main.dart.js_187.part.js": "0faabbb141a21490cff1039586ec5285",
"main.dart.js_255.part.js": "5d3b815edc0a87bed1575198f635193f",
"main.dart.js_32.part.js": "9ce98b771f867272c0f1a1bc28a10811",
"main.dart.js_114.part.js": "104b023c3dba12223abaecaa78d0df37",
"main.dart.js_60.part.js": "a0128ac9c9925ea654a59c0a7a234289",
"main.dart.js_61.part.js": "6db6dac81933ea02d30f8b367a9a5dfd",
"main.dart.js_175.part.js": "b18f6098cd87cc3182d7919f10aa330e",
"main.dart.js_181.part.js": "b430ddf710e93de112041ed8096bca5a",
"main.dart.js_319.part.js": "f1cf16437925a30947dfaf203fafcc07",
"main.dart.js_183.part.js": "a549e6dfbb3bd30fe702f59f9a8cc93b",
"main.dart.js_143.part.js": "9b3dc33f5a635e08137309bee2d7d68f",
"main.dart.js_149.part.js": "d6a5f949eb3dceb5626a00b33d250526",
"main.dart.js_111.part.js": "a0261aadfd97c0cca904f6ba2da178d8",
"main.dart.js_144.part.js": "611442865f9c33cf40e5fd09a9b194d1",
"main.dart.js_271.part.js": "956cff096a2dc8d12ef7052d81fa0c5a",
"main.dart.js_223.part.js": "fe46875e026b497d11722cab573a8717",
"main.dart.js_134.part.js": "2cd43d4d0c5f6333f8a917a46f7c6ed1",
"main.dart.js_69.part.js": "f37c7a4a46e152c2ffcbc593d6b5887f",
"main.dart.js_189.part.js": "3ffe02c26515aec03947ca2b1ba0b752",
"main.dart.js_63.part.js": "b2d738f11305b45161bf5de31c36d3d3",
"main.dart.js_198.part.js": "538b692b7e54926bf89b400064e61a25",
"main.dart.js_1.part.js": "2f1134b749211bb21aeac5afe38b1697",
"main.dart.js_28.part.js": "b109428ee4d4518e502178e403697043",
"main.dart.js_251.part.js": "ae2bd2bbe961afab6abbc817575efcc9",
"main.dart.js_252.part.js": "94f9e2e3b1295035e5f33d804b028e8c",
"main.dart.js_81.part.js": "3bf12c691242119452d599fc99fa0a3a",
"main.dart.js_213.part.js": "e1d59a60c4730d0be4ca1af9f18403d2",
"main.dart.js_16.part.js": "5e7baa2da812766306053fc68c73e15f",
"main.dart.js_269.part.js": "a2fbd6785366b4f22de6c3ef43b6de5c",
"main.dart.js_210.part.js": "a2566943c53aee667da36ca21efd2052",
"main.dart.js_155.part.js": "93ba8d337d1d0d11a0b60b3b753009fc",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_294.part.js": "752e13cdf1f05e98eeb301a95b25c10b",
"main.dart.js_66.part.js": "5497ceb06b3b9b5edb025ed04f0279bb",
"main.dart.js_305.part.js": "5dd24102b56c7d4d9da5731175a1c113",
"main.dart.js_76.part.js": "aecb0e8b2eb337d95e1f47854eeb39be",
"main.dart.js_124.part.js": "69bddadef16b5c14e7e272398fdd99e3",
"main.dart.js_88.part.js": "58f0e717c0e6cb8acccb4268059c6625",
"main.dart.js_322.part.js": "adf1053cd95cbb441974d4cbf235d5e2",
"main.dart.js_84.part.js": "987200ee2596452a6935288a12709152",
"main.dart.js_310.part.js": "c8563ffc3a22d79faf1b5c7a8fa58b9e",
"main.dart.js_92.part.js": "270eb36cc2a255265663ab7b27e16e61",
"main.dart.js_112.part.js": "ef76a9a6daf64daf49b692a0adbbce5d",
"main.dart.js_177.part.js": "4ba4c4adc2b62cfae544e80557dd4afe",
"main.dart.js_158.part.js": "d25f75f4d38f71e3585b8915f2fd384e",
"main.dart.js_253.part.js": "4cc20d341567422a71f9cdfaf1c7080b",
"main.dart.js_78.part.js": "1c10633a6ad9632feec2f9ef7fe5b640",
"main.dart.js_218.part.js": "de554415b13ecbbf65a166e448d7c175",
"main.dart.js_48.part.js": "c0ddd2f5c9dc52ef9c5b544d17b0c0be",
"main.dart.js_204.part.js": "6565e6b745bd7182b8bc6ad4fd6e476d",
"main.dart.js_35.part.js": "9f76def6736aad8364b1f3a93d3f5917",
"main.dart.js_287.part.js": "c046f3243e0fdf94b2fb1e0f8fcab064",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "42405e36573abb62781889fde0f89e69",
"assets/AssetManifest.bin.json": "13d6455bb0c64dcc373f0f3c36d2a89c",
"assets/AssetManifest.bin": "d5e7a6737aca705ca60264ba4457058e",
"assets/AssetManifest.json": "6e696d5b5ed21128ad3b2a505e774b2c",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/cs.json": "8f592b78dc8c55fd898c13d24a60d904",
"assets/assets/translations/en.json": "b2164788e8ff3c97713e8bfb17bd2ba7",
"assets/assets/translations/uk.json": "0da50d429fb403ef58025e516926be1a",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/assets/translations/sk.json": "e20b4c2317f454bc552b2df9f86e40e5",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "83702ed7b950907257df85acd61eb6df",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/NOTICES": "8ceb9d2637bb1d04442a787331601763",
"main.dart.js_95.part.js": "ff8ea682d742d2caa3245d58500412d5",
"main.dart.js_318.part.js": "63bd88f0047e4f631daf31774321caa3",
"main.dart.js_15.part.js": "9f4a396417c8599216ccb2f3264bd80a",
"main.dart.js_284.part.js": "d6682729f27b085029258788f0edb355",
"main.dart.js_214.part.js": "373d7b888bbd50cdbba14992976ce430",
"main.dart.js_325.part.js": "984de67b73bdf8057c2ef3da15d2ea01",
"main.dart.js_328.part.js": "465574eaf136a54d1464b3227ba14687",
"main.dart.js_17.part.js": "baeb2ce020007ba7a5396ac85b17727b",
"main.dart.js_79.part.js": "80b244c51aa6046a195a393fc90e6d3f",
"main.dart.js_162.part.js": "3db3e58d4a4127c1859a39d59ad1bf61",
"main.dart.js": "5665d417073c42ec4b42fc52da843830",
"main.dart.js_36.part.js": "19e01963366ff897ff6d12e7118461fd",
"main.dart.js_196.part.js": "56e2b6877ee758abc9038eaf3be43479",
"main.dart.js_42.part.js": "23ae7752af0c61590f7e076f785e639a",
"main.dart.js_311.part.js": "ba02b88e116e68e26b72d14de24a4c5d",
"main.dart.js_200.part.js": "146a6590479009aa3f8be213c97c848a",
"main.dart.js_209.part.js": "d4e955137a531e4c0312db5c3a6d4aeb",
"main.dart.js_94.part.js": "a1155abbebced90fdf9f3dbf6dfc3db6",
"main.dart.js_38.part.js": "e314102dbf0fa29763b60a6e46fec158",
"main.dart.js_323.part.js": "7037526f166838a76d7efb7b2e1c73fe",
"main.dart.js_146.part.js": "a7fce5d2585044a7121252e8b6dfcbd4",
"main.dart.js_29.part.js": "4044633b181570e143df61aff6a02dd2",
"main.dart.js_74.part.js": "81aecccee4e2b108920d67326c25d030",
"main.dart.js_108.part.js": "e38202a07d01818f8bffc6c4de7feba8",
"main.dart.js_109.part.js": "84a19c33c227e1b836864ae7873175ea",
"main.dart.js_93.part.js": "8dc90ad7eca0f4b123a3ba276255590e",
"main.dart.js_315.part.js": "95b409bd9b600b6af137703ca9eb9ce2",
"main.dart.js_225.part.js": "ae95e87562c27504cbb747434625119f",
"main.dart.js_122.part.js": "33c9aa53854c2341716773adb25f4ce0",
"main.dart.js_273.part.js": "7e99b0caa4df069c34c56b9e3cdad522",
"main.dart.js_258.part.js": "f32e4f7aa85591de4c031f1cf84dd620",
"main.dart.js_67.part.js": "be3e9349e51edb291eed5e1dcde8f87a",
"main.dart.js_268.part.js": "ea23779db6c3c4b8afb236e69725e6a5",
"version.json": "d8ba43e264a0f1a769ec8bd8b797d661",
"main.dart.js_300.part.js": "51a373d9e8d3486ad79ac6b0ff88c83d",
"main.dart.js_7.part.js": "30d61b6366c74ff234b2b07f13029d4d",
"main.dart.js_99.part.js": "0a76cba82b654929669a32aa4cd47996",
"main.dart.js_131.part.js": "de0bbc08cf019d63b5cea1a6a4cf232d",
"main.dart.js_295.part.js": "018b19ca5a3e087db3ae3c397a08ce9a",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"main.dart.js_55.part.js": "e20f3fb3c198bb6a8d96cdd432246dfd",
"main.dart.js_256.part.js": "d8dad7ce3f0f4c16d100b59a270f5a64",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_179.part.js": "383d4a156ad75680e99443c36c884a08",
"main.dart.js_282.part.js": "c9023d6b1531d1ae7c321e740c034c1e",
"main.dart.js_176.part.js": "d8568c2e9aa9580202b908b9d2df8f95",
"main.dart.js_313.part.js": "2964f33c06600ce7649a2a20ed30b3b6",
"main.dart.js_314.part.js": "e877ac310866f458eabe7f06fc21c1ba",
"main.dart.js_119.part.js": "8d3ff5242313c3961aeae233395e8fb6",
"main.dart.js_308.part.js": "82f311b83ebfeaed6c3fab9ee6b4f24b",
"main.dart.js_303.part.js": "0bb208737607906e6355322d6f719c1f",
"main.dart.js_236.part.js": "3ffc044ce1e5b1ddf915a4933592ae6b",
"main.dart.js_105.part.js": "9f7683b06bc08e2c8c5eb9fd093defcb",
"main.dart.js_20.part.js": "ff5d9b0917e3dbdad998b23c852be7a6",
"main.dart.js_283.part.js": "1c9edd7b82cf559a4f4b8a009c19c2da",
"main.dart.js_123.part.js": "165c40640d881046695401f41469e249",
"main.dart.js_13.part.js": "45ef3eb08f5dc86cfbf9bc1f0f0f2780",
"main.dart.js_113.part.js": "7eec5a61a4b48b3366098f3ebc03f8bc",
"main.dart.js_279.part.js": "02a7e87da4fce7ecf4463bb3b1cabc88",
"main.dart.js_298.part.js": "5b63f684c8ab514d3b627b6beafcddd8",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_138.part.js": "8ef83bd859edb0910b86ac00efe5c9e0",
"main.dart.js_191.part.js": "2d5c9cc2f05c8078c4c979711382ed2a",
"main.dart.js_168.part.js": "50344a388dd4df1b58dd48e90beea8ec",
"main.dart.js_12.part.js": "2e5c9f954c52761d37af9746435d281d",
"main.dart.js_98.part.js": "2eb38fcb1cb122a7e06f1d6f4ae98618",
"main.dart.js_249.part.js": "3c37ff20017dfdf15de0eaae918745cf",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_5.part.js": "dadbfd1aa4f0e36262cb233e931a2c36",
"main.dart.js_53.part.js": "5e9fe9c7beb9403c8c099a2b31220e46",
"main.dart.js_329.part.js": "95903b321bd7045ccc4cae42cc1ce116",
"main.dart.js_233.part.js": "b0479cd70c382ce688eea5bc774da783",
"main.dart.js_31.part.js": "4c347e42e2088858dbdabaed431da177",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_202.part.js": "6d071e3018f7b30918ccdec9788b615d",
"main.dart.js_106.part.js": "b30a088e752908909d5da809d47cdfa5",
"main.dart.js_285.part.js": "cad65cbed218b99b6a16c9668627c6c6",
"main.dart.js_297.part.js": "d343e0a6dd3de116bc46a9c09d20a676",
"main.dart.js_278.part.js": "ead66eb4b5e2383f21bb340a34f42408",
"main.dart.js_154.part.js": "1333a9eeac7715ef4818cb8c99cf77ed",
"main.dart.js_307.part.js": "4238877468c48c76b64f8ecd9f2c1b16",
"main.dart.js_2.part.js": "49869586ff216f353720715414513c48",
"main.dart.js_229.part.js": "f11e739c32c85da588a743281ba5ecc9",
"main.dart.js_193.part.js": "da543e40b79d94cd6385a3122e56a2a8",
"main.dart.js_132.part.js": "c6d2941cfddd9ea5049529a634719884",
"main.dart.js_330.part.js": "43f87ad033c24d13ddec07ff38633b84",
"main.dart.js_270.part.js": "f83742055c0d9f55b8cdeb46d6833745",
"main.dart.js_280.part.js": "1781fe41944afe1f42555dd1f7f216f6",
"main.dart.js_288.part.js": "4d1c3c192fbfdfa07d0e34bf2a157168",
"main.dart.js_89.part.js": "66e765c3c7989e337edabd1796164887",
"main.dart.js_321.part.js": "944c03b747e118646707e37cf4ce3e1a",
"main.dart.js_289.part.js": "0b30d8c298c6ae8084180abf0d3d358c",
"main.dart.js_82.part.js": "5407dc6a86f3c6c1cf868308a1ddda7e",
"main.dart.js_231.part.js": "2a3d49b7659f832d8b751e0554bfa8c1",
"main.dart.js_199.part.js": "af2c32db5d540b3b55c87561d4eaccd2",
"main.dart.js_326.part.js": "2778fc38e263200589924c835fcd237f",
"main.dart.js_211.part.js": "f1e05e637c8de191c4e510f9935b036f",
"main.dart.js_40.part.js": "278b5833bc46937f0616acf0f7f304d5",
"main.dart.js_166.part.js": "7bb81e322e90ab5f3854d160f1f06a5f",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_206.part.js": "384e5d73a5abb587933b0adffe805cd9",
"main.dart.js_141.part.js": "238165a5982636c307d3cda8f389543a",
"main.dart.js_317.part.js": "746250f719b87907a3a91c09b9fe5413",
"main.dart.js_65.part.js": "bba1590399256d8bc8fca7905036b351",
"main.dart.js_161.part.js": "336fa5b1d407de926eeb2ea8832de5b9",
"main.dart.js_306.part.js": "fb9316ddc8e34829feeb7b73cac66233",
"main.dart.js_59.part.js": "a1d767a64d5f774b3f5fea43b4255807",
"main.dart.js_237.part.js": "0bb2c262d750d9e8ad945716d28de7e5",
"main.dart.js_83.part.js": "73f9a4b917871a0e4e457e29111a04e3",
"main.dart.js_228.part.js": "b0138d4f55c8e2745e2ea7307a4113bc",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"flutter_bootstrap.js": "47381c06440f3d7713c26e056ae0205d",
"main.dart.js_174.part.js": "92643ecdd49b7ea4afd6dc6b13da8b0b",
"main.dart.js_37.part.js": "7aaf7c9747eecaa0dc7d1348050dc083",
"main.dart.js_221.part.js": "d23162e1fd71da4ef9bf18360824d837",
"main.dart.js_324.part.js": "f78165f515b01f88aee77797fb0b0165",
"main.dart.js_247.part.js": "11353170123fec93bb5e3ce4a279201c",
"main.dart.js_10.part.js": "904ec6d0ba37aac07d4e7075d9e4acdb",
"main.dart.js_180.part.js": "133a1b8d49e70f71317068cde467d52c",
"main.dart.js_80.part.js": "8cc1b91e961e2141b9244b6c68a55331",
"main.dart.js_147.part.js": "5e2163a1b79c0105495121b8ac723b1d",
"main.dart.js_157.part.js": "993914faaec4654c6d649adaee6cfa32",
"main.dart.js_291.part.js": "0fb1d62251e04396b866dd02f6e03c8f",
"main.dart.js_153.part.js": "0468ca05bcee29107ad3c8c500e2b5ee",
"main.dart.js_91.part.js": "60cd2a64b8096f63b9807f8f2f60bf55",
"main.dart.js_201.part.js": "78cc4c51bd82b59f7b5bedbff7090e25",
"main.dart.js_18.part.js": "b83e9162fe79b4975ac1c49993b41607",
"main.dart.js_260.part.js": "3ccc020bcc0256bec9e2bb168af49e2a",
"main.dart.js_312.part.js": "5296cace0c57a78919db29064302a5e9",
"main.dart.js_301.part.js": "b2d2401547427435982111c482cf9814",
"main.dart.js_244.part.js": "1532c0ab5bdeecb673275ccf902a8a2a",
"main.dart.js_86.part.js": "0aa22f6074126a067af72c215d378d37",
"main.dart.js_125.part.js": "1721009ff26bc7bd7ae3056e609213de",
"main.dart.js_90.part.js": "bda6f5279ddd573ebd1f38e758dde4d7",
"main.dart.js_127.part.js": "2c2fdac26a6d4fc71c04a8eaa4510dcf",
"main.dart.js_169.part.js": "72ec16b77b78eeca83bfbeae937d4d60",
"main.dart.js_6.part.js": "ca21f45fd4be5a60b1d189eb2b67b77c",
"main.dart.js_290.part.js": "de33590362da3c3a90ccf35d89330aa8",
"main.dart.js_264.part.js": "c500def1659df7487b31bf8dd972b1d5",
"main.dart.js_217.part.js": "6119924a45b8cf6ac79d14e847515b97",
"main.dart.js_136.part.js": "5791e055d8bc6fc0d4f811afc3289d1d",
"index.html": "ab2fbdd21fe9043364f6151816d44f12",
"/": "ab2fbdd21fe9043364f6151816d44f12",
"main.dart.js_9.part.js": "e608d72cdf73d37d8ed62ad58b3fabc3",
"main.dart.js_219.part.js": "77a22f04fcaf224606775f1f661c86bb",
"main.dart.js_205.part.js": "ca47756f9faf729b374d762e5a513e95",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_259.part.js": "60dc12afc07ad0b56719db108645c1ba",
"main.dart.js_30.part.js": "2263d1e49660af437fc35383e965fce8",
"main.dart.js_104.part.js": "35ffb03e4b40ac2808e2529d08733fe1",
"main.dart.js_188.part.js": "03ec109160e5fa938de535917c535909",
"main.dart.js_49.part.js": "4ebb8c87bee017eb84b988dffab46298",
"main.dart.js_50.part.js": "7ba964552b100e15a440492e0b96366f",
"main.dart.js_27.part.js": "fcd3d313b2caa5e6809663cd4c961698",
"main.dart.js_75.part.js": "b393de90ee3603f7d6ced338283cc57b",
"main.dart.js_245.part.js": "c7784bdca728111b5dcafd819a558722",
"main.dart.js_261.part.js": "582d7d9eca5402831f06ba232af57375",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6"};
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
