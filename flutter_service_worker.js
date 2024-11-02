'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "10c6aef3855ed89f183022c05ebdc5db",
"main.dart.js_162.part.js": "bb89631d484e336e396b210bba7c14fe",
"main.dart.js_117.part.js": "0d281fe7315660dc6b165807733fed25",
"main.dart.js_182.part.js": "ee815de1c685b0ee7f0869f0fa888791",
"main.dart.js_75.part.js": "53aa94b9b31d6ef795080376e52e4cb8",
"main.dart.js_244.part.js": "e6516f3fb9d1eccc2e2d75f03b7b39ff",
"main.dart.js_83.part.js": "ea7de10c406d473f8af111e61aab7580",
"main.dart.js_254.part.js": "5f3c9be2b1913eab03ed41b768d866f1",
"main.dart.js_176.part.js": "2cc563982565332a09b114450c37d756",
"main.dart.js_96.part.js": "4bd90dad448539d8e89d1a00145d38ef",
"main.dart.js_245.part.js": "c7f9fe986102e473fcf69df82974fe02",
"main.dart.js_87.part.js": "179a8dadd5f63641a78ee1d6a0fd296c",
"main.dart.js_126.part.js": "78028889dc2ace88f3556b39646cb04c",
"main.dart.js_129.part.js": "0340b8d71e00ab4cfdfe7876219a4d78",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "6e7c2111b7e62bce1688e8e96fe12219",
"main.dart.js_218.part.js": "20833878ccc61a53705788881442744c",
"main.dart.js_172.part.js": "dff4e4929ddca0ca24e64d26308a5783",
"main.dart.js_40.part.js": "d291c4f5875b682b1337ce64c2ff094b",
"main.dart.js_209.part.js": "e9006b9ec8741fd95e34db8cf5f699b8",
"main.dart.js_115.part.js": "4583e806fed1b027ab2654516e4ac46e",
"main.dart.js_10.part.js": "b551eeff6b8f496ca1d5e4bf08dff27e",
"main.dart.js_84.part.js": "2e8a7de8c1afa8d521d0ac2424e13e7a",
"main.dart.js_122.part.js": "7068a5ed869340de08718f15bc25e9ee",
"main.dart.js_230.part.js": "1fbbb0e9e674487cb58275247d37c535",
"main.dart.js_213.part.js": "b8ad2bedbdfd0f25bf9bf807d88978ad",
"main.dart.js_41.part.js": "78591fd1dc58399607a373af8fd11df6",
"main.dart.js_89.part.js": "d87e8a784d3d24402b8b7049451b789d",
"main.dart.js_71.part.js": "d989fd6203f243be517ad375fbd758eb",
"main.dart.js_146.part.js": "b0ad15c404fde87e7238cb2451c63aed",
"main.dart.js_37.part.js": "05822e9766176d9a7380ffbec4fa9de4",
"main.dart.js_132.part.js": "4eaf4f7c0c92b4bd35aafde7af58018f",
"main.dart.js_165.part.js": "0bbc213cffa346fdc508f6fec6908d1e",
"main.dart.js_127.part.js": "cfc0db516fa67a28012aad9c83de54bf",
"main.dart.js_161.part.js": "ef9ebe98fadcd2d86163c6559871b065",
"main.dart.js_175.part.js": "e8f33967fd20a1c3070a9dd89d23499b",
"main.dart.js_239.part.js": "888940cdee655167d48c516545b54b85",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "8f987024c4931781321a986dca07b24d",
"main.dart.js_64.part.js": "f687042987df107a0d95cba56ad15af0",
"main.dart.js_169.part.js": "7533523ff6750ee8da66b56aa30fff1a",
"main.dart.js_13.part.js": "52330c534254d23b223956d4ebe93677",
"main.dart.js_246.part.js": "f07749f6f7e3c8ddf9fe495da1f48972",
"main.dart.js_174.part.js": "21c709eb64a0a3f56d0aafcb33afb80d",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "b46909911c2b10830f336fd88788f298",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "fd16b8223f54020038725acb6a842da7",
"main.dart.js_119.part.js": "ebfe65ac3b6125b78f0c34498fa78cdd",
"main.dart.js_18.part.js": "8b77deb022f99cccc35f5393bee3b816",
"main.dart.js_35.part.js": "e873b2f93c026df8928f728e0fa9ca2a",
"main.dart.js_200.part.js": "bcfe25593d70bd7f6158e1ca93258bb6",
"main.dart.js_101.part.js": "20b25d53d75e1983e39f2256afa2ddf5",
"main.dart.js_77.part.js": "0cbb9c93219a679a1bd592a0fa5f66ca",
"main.dart.js_149.part.js": "be24df52d72a0d981dd900fb687ea3fe",
"main.dart.js_82.part.js": "daec5c7b51882ea36a8f3caf9f0642bc",
"main.dart.js_173.part.js": "1d4780c202a1aff6153fadc4159f8618",
"main.dart.js_106.part.js": "947647f18d1e18867a82a0b8a3dcffe8",
"main.dart.js_62.part.js": "1fcbd5df4ce4493d8d1114eb1fcb6053",
"main.dart.js_259.part.js": "04560c37f36ba500fdde1bf56bb7a675",
"main.dart.js_207.part.js": "96076d856d1b0955ca80e130a230eae3",
"main.dart.js": "7968ca4e7276c7b114f2509c775850d5",
"main.dart.js_222.part.js": "b3aebf660bfb17a51dce9f369976e2c5",
"main.dart.js_232.part.js": "73d481892e84a923c196a54f6f47834f",
"main.dart.js_148.part.js": "138bf5189d7d5fab458b325d6534fe00",
"main.dart.js_124.part.js": "bf526de82012ab48e766b9bac42b9f2c",
"main.dart.js_50.part.js": "c59177fa94cfefb2e1ba5f8b236525ed",
"main.dart.js_97.part.js": "c5b1f08457dd63e82acd3c93db8e5cb4",
"main.dart.js_192.part.js": "9f12a4296ada8bda492f0f27251829a0",
"main.dart.js_145.part.js": "97cd8cb4f7db0a1ad77ac1cb94bdbcc2",
"main.dart.js_229.part.js": "0c1f2382709554ac954e045b0264a63c",
"main.dart.js_190.part.js": "a3800a1a9a44ca6d28a1187465c54df1",
"main.dart.js_201.part.js": "c7e1775cf0d0f591e92c4f225eb62fc1",
"main.dart.js_69.part.js": "568c3f667e87e5387302aa19fd9d8d5f",
"main.dart.js_196.part.js": "b88ae8936fa0841b329284563291b072",
"main.dart.js_181.part.js": "dd0a0cdb842f3673802f05de33efe4af",
"main.dart.js_108.part.js": "809c796f99da520fca16480cdd40d601",
"main.dart.js_33.part.js": "69b13054e7d62c550f221e9872b3a884",
"main.dart.js_34.part.js": "f91fb6a83d2e3c7f7560cd8101609fd6",
"main.dart.js_210.part.js": "e824398f7df46c9d663e041e80c11ae7",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_88.part.js": "474c4e0c91a090988f94ddc6e3a7de53",
"main.dart.js_202.part.js": "bb5afdb83f5d28e358e9d8ecc41d62e6",
"main.dart.js_183.part.js": "76b1cda100f9f7f77c71236c523a2e11",
"main.dart.js_167.part.js": "758a1cab603136a3b8b3138ef4b61187",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "3c2ada110a8e24b007398b79dc4df220",
"main.dart.js_247.part.js": "ed23be7f6dfc54515e8bf583c99d9e36",
"main.dart.js_7.part.js": "446de85f24eead609118837534d2195b",
"main.dart.js_140.part.js": "103c62d6eaeb61209c60477cb947f51d",
"main.dart.js_228.part.js": "2d5d4edf2e46b8208b368d28f5b7d14a",
"main.dart.js_170.part.js": "ce0cea6b60575aab4700df87a3c419d5",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_27.part.js": "18ca07b177dbf23ad533f52120c637bb",
"main.dart.js_156.part.js": "607f81101a20ae02dc792521e5e74ce1",
"main.dart.js_219.part.js": "886426c71a95c540cd283668a0c957cf",
"main.dart.js_116.part.js": "67a556528d1d4ccaba7b66ab26f311d2",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "e1ca1f3b197870cbce40d01a90ab738e",
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
"assets/assets/translations/uk.json": "bfcb7a6ccfa1e551397f6a64151d2029",
"assets/assets/translations/pl.json": "9db332fe1a177d9c70e712ca72310dfd",
"assets/assets/translations/sk.json": "8fd1739c4932835dc08c46bd6e173ce2",
"assets/assets/translations/en.json": "a98b264981398795308e804352722981",
"assets/assets/translations/cs.json": "673435f05124fd7c137cd77b67dee348",
"assets/assets/translations/de.json": "11d793b675aecd44573ae9e9979e07fa",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "12b68972fab99dd9040ec7b25e770dda",
"main.dart.js_147.part.js": "f5864a2abef52cb2d8dd87943b980f3a",
"main.dart.js_220.part.js": "f975f88c2537ebe51fec31ed616cb36a",
"main.dart.js_25.part.js": "af2c18b5cefae9519f7311923d95f7ce",
"main.dart.js_249.part.js": "278ca0ed19aa3bff30f577727b41ead8",
"main.dart.js_123.part.js": "65b1d8fb87c5c15535be8f7a01e431b1",
"main.dart.js_241.part.js": "1f0e4d9d5adb5defe05f87d5dea0b8d4",
"main.dart.js_8.part.js": "0a2d2f695f21cff423508a2035d438d5",
"main.dart.js_198.part.js": "bfb1a08a057e96a676de42e8bd8610c6",
"main.dart.js_81.part.js": "42390597e45e1e09a01385e6751e1331",
"main.dart.js_205.part.js": "28d5ae2e0ba635d37087c8e3c43011f2",
"main.dart.js_113.part.js": "0dabae1940171361638d2d8091dc4c06",
"main.dart.js_9.part.js": "f9bfa0da0a8b726266ba030011d5f4e6",
"main.dart.js_22.part.js": "a40c0340b19af1747bb756ae074a466a",
"main.dart.js_242.part.js": "e4ccd30b94d39d73ca1abff97041903f",
"main.dart.js_86.part.js": "fe9f19f03de16754ef3cf9f1dc1873c6",
"index.html": "63604f155ce2f3381ddf571935807604",
"/": "63604f155ce2f3381ddf571935807604",
"main.dart.js_94.part.js": "3b515578fa1818f33892dc3d0d2cc33a",
"main.dart.js_98.part.js": "e8dd3bf47846cd4f3ff4888776fa47f0",
"main.dart.js_53.part.js": "b2ff2047856d7445fcf90fbcb5287995",
"main.dart.js_74.part.js": "474bbd783dbdfee062065f0329a3adae",
"main.dart.js_235.part.js": "be58cb163642d1965d39621906243df5",
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
"main.dart.js_118.part.js": "a9727abb4dd637c09afb1d50b5521a08",
"main.dart.js_26.part.js": "69c411d5ff80e2ee9e1b9dce1c91699f",
"main.dart.js_240.part.js": "1347efbf0cba52bac8c9876a1103754e",
"main.dart.js_20.part.js": "3943bf676e4f51197de2ccd00b2d00bc",
"main.dart.js_189.part.js": "4157bd95a9324cbd6a89206282d451e7",
"main.dart.js_214.part.js": "7217385d71d2f937a7b50047f340b8eb",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "8bd272057635437f917250423d53ac29",
"main.dart.js_1.part.js": "5ed683247f889afa59900a9596d0df78",
"main.dart.js_120.part.js": "2f359711494c1d0f97efc417a3f2d407",
"main.dart.js_63.part.js": "5015d9b23623d470f202124b03458385",
"main.dart.js_211.part.js": "61bf493e2214fbbf61faf13b6137f203",
"main.dart.js_45.part.js": "59a24908a7458a5a0febfd058dd3072b",
"main.dart.js_12.part.js": "abea28eb9126124e44dd8ed80be0bc52",
"main.dart.js_221.part.js": "007c4982ede74082d9a67132e29dd1c5",
"main.dart.js_137.part.js": "8fb26a1645be0c1fa0679f4bf62088a2",
"main.dart.js_28.part.js": "9f8dbf1612d9dec8605dc2f819f1ba26",
"main.dart.js_135.part.js": "c6351dcc9188be17b3ef23f2088a929a",
"main.dart.js_6.part.js": "96fb116616e8e07daf5f7248dd7629e5",
"main.dart.js_256.part.js": "edae6af2d0b4bca8514ca2bcecdd3ac1",
"main.dart.js_193.part.js": "b0bcd9561582651b2d686f29ff93fe81",
"main.dart.js_17.part.js": "2ded320621f53d7071e6d13aa623173a",
"main.dart.js_105.part.js": "79bd05aa7ef55e57fbeeb5c7787d688a",
"main.dart.js_206.part.js": "68d3e3708ad8174b850c5c4d8a308b7e",
"main.dart.js_231.part.js": "4281d5ba7ffc2243c4877f8c5183f978",
"main.dart.js_43.part.js": "98b66575e3076e730cf039f9fe9f6b23",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "4a947fd7e9da0a00be159281921d6e19",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "4bdbd9f724d86df551f06e7d7a3cbc4a",
"main.dart.js_15.part.js": "d7974c2a4b094671d2b4be3e828b921b",
"main.dart.js_19.part.js": "3809bd54a2ef3dd1ac5e7764ecced869",
"main.dart.js_255.part.js": "fe1d808f9cb0245d53a3cd8c402bafad",
"main.dart.js_186.part.js": "de30b936955258dcf06565d29c511164",
"main.dart.js_163.part.js": "2db4779e3c7be4872016ad68abae4392",
"main.dart.js_154.part.js": "cb6261716a2c8fa7d6eec40eb2930506",
"main.dart.js_257.part.js": "dd21955db4d4a3caaf041c5db2fa65eb",
"main.dart.js_16.part.js": "17c0ab257e979dee1d900e2256106e61",
"main.dart.js_250.part.js": "689cce6efbb8c6714bd0da6b7b9f2f6c",
"main.dart.js_52.part.js": "ab374e7dc675df92b7073a393951b176",
"main.dart.js_199.part.js": "134b0390367bd7884ff62b7a59e10213",
"main.dart.js_253.part.js": "4b95599db7404b4e8c9160dfbe661f95",
"main.dart.js_130.part.js": "6a951784f6521344418261c02d1fdd7a",
"main.dart.js_197.part.js": "305211f84a24723e397b3149772386d7",
"main.dart.js_56.part.js": "7895f1b5dd1f1e6ab6306208ef9a9f29",
"main.dart.js_227.part.js": "90f55296f2f868fcf4606ce4367fb9a3",
"main.dart.js_3.part.js": "5271839060fdb1e610a7a2e068560786",
"main.dart.js_68.part.js": "49a1ca871d854746367884db96f12661",
"main.dart.js_38.part.js": "62dfe2d792d5f5fc89fb7591db3060b5",
"main.dart.js_225.part.js": "9aa0139b62fc799d798ae62a664b1d32",
"main.dart.js_248.part.js": "a0bcf2ca84f217bb6f7cd6073d2a38d1",
"main.dart.js_133.part.js": "667b22b82a1049f7a0354e03a1e64524",
"main.dart.js_21.part.js": "f42fd1621e76b5c4415411de9249a5df",
"main.dart.js_188.part.js": "a0a08cdb9162f3c9189fdf8937b1bf53",
"main.dart.js_204.part.js": "9d85abddb47d09dd95a75bdde7c44241",
"main.dart.js_24.part.js": "4ac045b48b165ae0ba2e56235342c321",
"main.dart.js_90.part.js": "d5b4e64a790fc43dec5a086a0933a473",
"main.dart.js_111.part.js": "84f780d87c1ffb79606c139d616829b8",
"main.dart.js_177.part.js": "d296d1d51dd9e110549b2155890e6110",
"main.dart.js_85.part.js": "a06f6b2dd3d066a7124481ef61bfc49f",
"main.dart.js_243.part.js": "f56849685688f431ce96aaf2b85b8b6c",
"main.dart.js_212.part.js": "70ea64f675fc0d89ff4b15bc9a0332e3",
"main.dart.js_114.part.js": "2eb65519027c35a6c8f25366625fff87",
"main.dart.js_39.part.js": "83bd5b348521c964affa1fc26ad19e0e",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "df50ef396c9ee580c80eeeba5f369974",
"main.dart.js_171.part.js": "a746094e86fe910d4b7414176c128819",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "816ecb5d4ec01fd8f777711978c5253a",
"main.dart.js_195.part.js": "afd9a0c7e6fcb01733c88d32f267acc7",
"main.dart.js_44.part.js": "2e0551b7b0afbe477c956403fca8bd91",
"main.dart.js_121.part.js": "7ed36acae52a26670d2bc88801020626",
"main.dart.js_55.part.js": "8c8781ddbffb4040787cb75a990c6c9c",
"main.dart.js_112.part.js": "1da73ca6a2bd2af0212cd0c4feea0406",
"main.dart.js_139.part.js": "c59efe5aa93a49999bb855502f85f5b0",
"main.dart.js_143.part.js": "16bef3ef479beedfb6255510747cb133",
"main.dart.js_80.part.js": "64310e4210593ed163db8d5a4d4dab08",
"main.dart.js_252.part.js": "cd3a43c897b7e0ac04acd2a747c7c470",
"main.dart.js_233.part.js": "329cbcbc41a6dbad4f05d39b3bcfb65a",
"main.dart.js_30.part.js": "8b14f7703e71e0ca084a78947d0548c5",
"main.dart.js_78.part.js": "1da7f99ccfe7f5c1dfe861aaf13c8bf4",
"main.dart.js_136.part.js": "f4a39883f1a23499339561c3623eb969",
"main.dart.js_168.part.js": "2e0ac2df226517b0db6976f5bc5e08a5",
"main.dart.js_59.part.js": "f12f3143caef1d584e123bf6ac82d4b6",
"main.dart.js_47.part.js": "f96f1cb45d499daeb6c53825f13148eb",
"main.dart.js_107.part.js": "5f2febbc20564237be3777c9568aa356",
"main.dart.js_29.part.js": "01b98874b0223dffa2a1ef79f234b084",
"main.dart.js_58.part.js": "a918a4599cc7afbf6d8730242e7d4fc2",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "94228312fb75e590b07dbc899cc50069",
"main.dart.js_79.part.js": "53aa41a9845d3eb90999e35b6cc2b5ac",
"main.dart.js_92.part.js": "e4ef4dec5ee541be3d181f5b489fe7a9",
"main.dart.js_224.part.js": "f66c459ec8b060dcd982a84126643e7f",
"main.dart.js_93.part.js": "bad1508893b2bdb947d0c84dd0e866bf",
"main.dart.js_11.part.js": "f32f8f1f6eb4baa67f2a278de47ff559",
"main.dart.js_125.part.js": "f66106e7ba89b07b19fc8ecdc8b9b3cc",
"main.dart.js_131.part.js": "54ff40dddb450869ace50761b090f581",
"main.dart.js_226.part.js": "01f82591ab1f092656bf1b7652186689",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "7a673b099b5f7c7fa9a7eb8d4beb0114",
"main.dart.js_178.part.js": "2bf901376592886b91b03b15dadffc3b",
"main.dart.js_187.part.js": "65097c3253861aaef33ed5f2f520c949",
"version.json": "d20805875a1de26e18ff8a1193edc851",
"flutter_bootstrap.js": "5a1445b6c5bc877a32d2842802bf8c24",
"main.dart.js_191.part.js": "ced161eae2fb9584dc67fba018574c73"};
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
