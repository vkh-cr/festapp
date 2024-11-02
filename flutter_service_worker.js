'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "10c6aef3855ed89f183022c05ebdc5db",
"main.dart.js_162.part.js": "126e87c74c2a0f99f8c6b4e2b3e057dc",
"main.dart.js_117.part.js": "0d281fe7315660dc6b165807733fed25",
"main.dart.js_182.part.js": "ee815de1c685b0ee7f0869f0fa888791",
"main.dart.js_75.part.js": "53aa94b9b31d6ef795080376e52e4cb8",
"main.dart.js_244.part.js": "e6516f3fb9d1eccc2e2d75f03b7b39ff",
"main.dart.js_83.part.js": "7c9885d3f722e3ab4782e2a5e0447860",
"main.dart.js_254.part.js": "5e2a2d7451e818193523ff3704849acb",
"main.dart.js_176.part.js": "1d94121eb31d889b6b4123354532cd09",
"main.dart.js_96.part.js": "80cef7cd7174282b9b0a4b03c6c4ab58",
"main.dart.js_245.part.js": "6331871b8cb9b834bdad42a6f8049888",
"main.dart.js_87.part.js": "179a8dadd5f63641a78ee1d6a0fd296c",
"main.dart.js_126.part.js": "2662b061ed26134ca45ee7f72a5ba066",
"main.dart.js_129.part.js": "d377df3d8b8e6f53c1fc62be665620d6",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "4f5d937143ed6843f4bcd8a6f7c08a17",
"main.dart.js_218.part.js": "20833878ccc61a53705788881442744c",
"main.dart.js_172.part.js": "dff4e4929ddca0ca24e64d26308a5783",
"main.dart.js_40.part.js": "d291c4f5875b682b1337ce64c2ff094b",
"main.dart.js_209.part.js": "14134428df4f49d4c424ece201c4f6d6",
"main.dart.js_115.part.js": "643924f16eb753bd1ce58da610614633",
"main.dart.js_10.part.js": "f4e7f75cf3020442589fb5bc3109bc77",
"main.dart.js_84.part.js": "29107ccf5800ff91f4a2aa478f7b5f2e",
"main.dart.js_122.part.js": "7068a5ed869340de08718f15bc25e9ee",
"main.dart.js_230.part.js": "9dafe390c34e76bf11992c7b648b3df4",
"main.dart.js_213.part.js": "b8ad2bedbdfd0f25bf9bf807d88978ad",
"main.dart.js_41.part.js": "78591fd1dc58399607a373af8fd11df6",
"main.dart.js_89.part.js": "cb5d0fb428e805881b743bbb92cf3379",
"main.dart.js_71.part.js": "d989fd6203f243be517ad375fbd758eb",
"main.dart.js_146.part.js": "a233df129bd24dcd1f63d774f8c7e515",
"main.dart.js_37.part.js": "d1a311f5e9d4167d3ce38ebc8e1715fc",
"main.dart.js_132.part.js": "4eaf4f7c0c92b4bd35aafde7af58018f",
"main.dart.js_165.part.js": "0bbc213cffa346fdc508f6fec6908d1e",
"main.dart.js_127.part.js": "dd8a125c775f44cd65aabf5d2ba36cb3",
"main.dart.js_161.part.js": "265a530b2dcdeaed3f64879ec98a4e80",
"main.dart.js_175.part.js": "413e63d8c6e2738d4c13fd2592c8286d",
"main.dart.js_239.part.js": "e9eab48f7ee92992e91f941e32e22d7e",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "a34c0823691ef28d521e491dc57e616f",
"main.dart.js_64.part.js": "5d69b077570a9444d9fa2ba39498caed",
"main.dart.js_169.part.js": "b89aa81b76cf0143603ccea9e1179866",
"main.dart.js_13.part.js": "3addd450cde08823ed2e33236e22add1",
"main.dart.js_246.part.js": "2c5862379b3f3cbae3756f65230fd005",
"main.dart.js_174.part.js": "2d98d90c664660fb2842cd706d5f44f9",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "5380c271399f3bc110398c581fe66d37",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "fd16b8223f54020038725acb6a842da7",
"main.dart.js_119.part.js": "7e66dd92602aa2e2418d153a4d3adbd1",
"main.dart.js_18.part.js": "d8a1b45c22c79243b3cd991c4d8290a4",
"main.dart.js_35.part.js": "e873b2f93c026df8928f728e0fa9ca2a",
"main.dart.js_200.part.js": "4e29fd59d25ebbff373e22792381cce7",
"main.dart.js_101.part.js": "26ebc3e4e28ff0f88cb796b183b20db8",
"main.dart.js_77.part.js": "0cbb9c93219a679a1bd592a0fa5f66ca",
"main.dart.js_149.part.js": "be24df52d72a0d981dd900fb687ea3fe",
"main.dart.js_82.part.js": "a49e2e1940d38fa4c854bd85f8c7b077",
"main.dart.js_173.part.js": "8e0cf54b250d33c6636462f8a856030d",
"main.dart.js_106.part.js": "ea00efea529bd905f0eb5f52bfa71e46",
"main.dart.js_62.part.js": "1fcbd5df4ce4493d8d1114eb1fcb6053",
"main.dart.js_259.part.js": "19c38b675a70cea5056711fa1c03ab79",
"main.dart.js_207.part.js": "9fed881087dabc21dba502814ad0ba3a",
"main.dart.js": "c80816453c7ae1d2332868defb077842",
"main.dart.js_222.part.js": "42f7c913bba48a4c5714d8be01d52500",
"main.dart.js_232.part.js": "91986f3676af2c0713c603a18c8693e7",
"main.dart.js_148.part.js": "138bf5189d7d5fab458b325d6534fe00",
"main.dart.js_124.part.js": "bf526de82012ab48e766b9bac42b9f2c",
"main.dart.js_50.part.js": "3df1c7dede3c182a24bc543e07224c4b",
"main.dart.js_97.part.js": "869e6dd8abd07eca676bb43a278697d1",
"main.dart.js_192.part.js": "ef15836f599fe96c32697a5f6a5c1ea8",
"main.dart.js_145.part.js": "c733019834a8b9a80719c794d338c446",
"main.dart.js_229.part.js": "df6382b33b4ab4560eb128bf8022b260",
"main.dart.js_190.part.js": "a3800a1a9a44ca6d28a1187465c54df1",
"main.dart.js_201.part.js": "c7e1775cf0d0f591e92c4f225eb62fc1",
"main.dart.js_69.part.js": "0bc747fdf1060867f0f4b30cfadec471",
"main.dart.js_196.part.js": "4f0a0748d95dd56018ae0389d7817ca6",
"main.dart.js_181.part.js": "dd0a0cdb842f3673802f05de33efe4af",
"main.dart.js_108.part.js": "809c796f99da520fca16480cdd40d601",
"main.dart.js_33.part.js": "69b13054e7d62c550f221e9872b3a884",
"main.dart.js_34.part.js": "7c37e1113857a77b21ce3b327105ab7e",
"main.dart.js_210.part.js": "5f1cf20bbfa0637d212ee2af620b93b7",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_88.part.js": "78f94d47aaa58c588c367bb44be0a86f",
"main.dart.js_202.part.js": "e3f9619c9a306c3b6eab303c6aff8690",
"main.dart.js_183.part.js": "436476e907f74d7824e52b79c8799ee7",
"main.dart.js_167.part.js": "758a1cab603136a3b8b3138ef4b61187",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "ef40cb0f4e9df336b320044ee96c6371",
"main.dart.js_247.part.js": "b49a62f388f91a61cefbf8b9a90da6ec",
"main.dart.js_7.part.js": "114f35f9cd7e04aa6894abe5c1c08b15",
"main.dart.js_140.part.js": "12e754b89150944a5db98f0b8d914df7",
"main.dart.js_228.part.js": "2d5d4edf2e46b8208b368d28f5b7d14a",
"main.dart.js_170.part.js": "ce0cea6b60575aab4700df87a3c419d5",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_27.part.js": "e773b8e0372589ef9544509b85ccea23",
"main.dart.js_156.part.js": "607f81101a20ae02dc792521e5e74ce1",
"main.dart.js_219.part.js": "b99ba7d59928491047380aaf99689424",
"main.dart.js_116.part.js": "bdca2735bf59013aef1c8474e08f61ab",
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
"main.dart.js_147.part.js": "89a99966393d13812352046f0813efbc",
"main.dart.js_220.part.js": "85a68c90ecdd5fa0876ade09d817514a",
"main.dart.js_25.part.js": "2ab2dcede7f199cee6dacbaf2116bf10",
"main.dart.js_249.part.js": "278ca0ed19aa3bff30f577727b41ead8",
"main.dart.js_123.part.js": "65b1d8fb87c5c15535be8f7a01e431b1",
"main.dart.js_241.part.js": "e956a2c81af762e5252d771463c744eb",
"main.dart.js_8.part.js": "e6e9c102488bde2dcd3191d51075a96c",
"main.dart.js_198.part.js": "bfb1a08a057e96a676de42e8bd8610c6",
"main.dart.js_81.part.js": "5dc19957b6a476c9b131190284227b4e",
"main.dart.js_205.part.js": "f91c7d9c040820dba680fe40ad31377b",
"main.dart.js_113.part.js": "0dabae1940171361638d2d8091dc4c06",
"main.dart.js_9.part.js": "279446b08652d22be42828f34207b098",
"main.dart.js_22.part.js": "4de1a4404d57490ca467d001bb0c0461",
"main.dart.js_242.part.js": "84f145114aec7790d3466f9c38c79e1b",
"main.dart.js_86.part.js": "66a079a6ea8a4b1ac317731696e312ba",
"index.html": "afd2c6f27b7bc0c4b0b9e5626252dfc7",
"/": "afd2c6f27b7bc0c4b0b9e5626252dfc7",
"main.dart.js_94.part.js": "3b515578fa1818f33892dc3d0d2cc33a",
"main.dart.js_98.part.js": "e8dd3bf47846cd4f3ff4888776fa47f0",
"main.dart.js_53.part.js": "d00a920800a434fc0f7698f024e885a7",
"main.dart.js_74.part.js": "057629282247e1d9d7bc2fd94cc68b4f",
"main.dart.js_235.part.js": "24d1e7c8d69f7715296fbd53fc73451e",
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
"main.dart.js_26.part.js": "5429cc17b227de85f36caca071f0ade8",
"main.dart.js_240.part.js": "402be667501646f57faeb789877d0ca7",
"main.dart.js_20.part.js": "4983a5e8f7985943e85af7b7a605fd39",
"main.dart.js_189.part.js": "e49e5fbbea15245c91985a59de25b371",
"main.dart.js_214.part.js": "b28368d61ea35ce7cd61a94a5d59d701",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "3eccc1ea9c877555748f0b8c6be150a3",
"main.dart.js_1.part.js": "2c700fbcacdf2225284bd6cb69f97aad",
"main.dart.js_120.part.js": "60d9e1a6e8b952c885ee8ad2944de708",
"main.dart.js_63.part.js": "5015d9b23623d470f202124b03458385",
"main.dart.js_211.part.js": "14f7fc14a39698ce9e053c5559456985",
"main.dart.js_45.part.js": "616559d0fcf413560c46cf2811804788",
"main.dart.js_12.part.js": "abea28eb9126124e44dd8ed80be0bc52",
"main.dart.js_221.part.js": "007c4982ede74082d9a67132e29dd1c5",
"main.dart.js_137.part.js": "293e4915d2da9032b6c8668014d5f88b",
"main.dart.js_28.part.js": "9f8dbf1612d9dec8605dc2f819f1ba26",
"main.dart.js_135.part.js": "d92ffda12f0ff51e1f1d97c72d3cf339",
"main.dart.js_6.part.js": "96fb116616e8e07daf5f7248dd7629e5",
"main.dart.js_256.part.js": "edae6af2d0b4bca8514ca2bcecdd3ac1",
"main.dart.js_193.part.js": "b0bcd9561582651b2d686f29ff93fe81",
"main.dart.js_17.part.js": "692eec8c69011eeee3e458032a2a351c",
"main.dart.js_105.part.js": "79bd05aa7ef55e57fbeeb5c7787d688a",
"main.dart.js_206.part.js": "09873af44f1750ceba7d2d9c82785d4c",
"main.dart.js_231.part.js": "4281d5ba7ffc2243c4877f8c5183f978",
"main.dart.js_43.part.js": "dea422082453e2ba84ba6f094931836f",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "afd37727bf330100ca855f9e73411c79",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "552ed4932fec2c6d1e25c35a9a7726a1",
"main.dart.js_15.part.js": "71dc45375025d5f6f2fc91a2fb713bc8",
"main.dart.js_19.part.js": "3809bd54a2ef3dd1ac5e7764ecced869",
"main.dart.js_255.part.js": "7e6c47bf550bd1e8da92ebd23f9f1c3c",
"main.dart.js_186.part.js": "de30b936955258dcf06565d29c511164",
"main.dart.js_163.part.js": "486aadeaac96c8168b6b1084a14fcb46",
"main.dart.js_154.part.js": "cb6261716a2c8fa7d6eec40eb2930506",
"main.dart.js_257.part.js": "489a0093c8cd6e4bad197c4a2335e7d5",
"main.dart.js_16.part.js": "72871e53a0c9e0d707e07a1d2a3b44b9",
"main.dart.js_250.part.js": "df0353f1a0a3e6c5686b64584b62cf48",
"main.dart.js_52.part.js": "c98e260e5d9165c717bd252525d05ba4",
"main.dart.js_199.part.js": "9425c7449f4de391ce64074c5eebeb55",
"main.dart.js_253.part.js": "4b95599db7404b4e8c9160dfbe661f95",
"main.dart.js_130.part.js": "86a0b047a19eafce6e535da7fac0a888",
"main.dart.js_197.part.js": "7e6aa8ad6565c435337f86d3b0fd8d3f",
"main.dart.js_56.part.js": "7895f1b5dd1f1e6ab6306208ef9a9f29",
"main.dart.js_227.part.js": "2108c5371931041d7e7cb75250c49edb",
"main.dart.js_3.part.js": "43248991f005b3cc1701b3dc3e097ca4",
"main.dart.js_68.part.js": "0fc1645961d4583593cbf1544089d039",
"main.dart.js_38.part.js": "62dfe2d792d5f5fc89fb7591db3060b5",
"main.dart.js_225.part.js": "39a9f4f546778873d9b8630f42f1c51b",
"main.dart.js_248.part.js": "a0bcf2ca84f217bb6f7cd6073d2a38d1",
"main.dart.js_133.part.js": "13636c606d0d965edb6e90d790e41cce",
"main.dart.js_21.part.js": "73e40b6462b7bc3b56f2d75630cdf031",
"main.dart.js_188.part.js": "a0a08cdb9162f3c9189fdf8937b1bf53",
"main.dart.js_204.part.js": "9d85abddb47d09dd95a75bdde7c44241",
"main.dart.js_24.part.js": "b74ef725819086f5662d9be5b78802df",
"main.dart.js_90.part.js": "d5b4e64a790fc43dec5a086a0933a473",
"main.dart.js_111.part.js": "84f780d87c1ffb79606c139d616829b8",
"main.dart.js_177.part.js": "22dddf3746d82dc710f935cc0911e142",
"main.dart.js_85.part.js": "6ee2c48230bbe36da3149242c8c5b354",
"main.dart.js_243.part.js": "f56849685688f431ce96aaf2b85b8b6c",
"main.dart.js_212.part.js": "70ea64f675fc0d89ff4b15bc9a0332e3",
"main.dart.js_114.part.js": "4730caf45c7c1af445a9dd62e7056849",
"main.dart.js_39.part.js": "83bd5b348521c964affa1fc26ad19e0e",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "83a34da3c0328c078471666f609566a5",
"main.dart.js_171.part.js": "8cb43574d4fa0656b81eed7d6f7d8821",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "347bce85f2deba192fc3e215322cfc5e",
"main.dart.js_195.part.js": "afd9a0c7e6fcb01733c88d32f267acc7",
"main.dart.js_44.part.js": "2e0551b7b0afbe477c956403fca8bd91",
"main.dart.js_121.part.js": "7ed36acae52a26670d2bc88801020626",
"main.dart.js_55.part.js": "8c8781ddbffb4040787cb75a990c6c9c",
"main.dart.js_112.part.js": "1da73ca6a2bd2af0212cd0c4feea0406",
"main.dart.js_139.part.js": "9d00e92637ce7a9c17825e43d6a8ae63",
"main.dart.js_143.part.js": "16bef3ef479beedfb6255510747cb133",
"main.dart.js_80.part.js": "d1914e3723d2499741eff592aec08e08",
"main.dart.js_252.part.js": "d04068829121b1a6c6af33fdf30e3701",
"main.dart.js_233.part.js": "997f772ab505b396cc450ccfe84c4c24",
"main.dart.js_30.part.js": "d8d25340b935b76c5ad3277bbf2e26cb",
"main.dart.js_78.part.js": "1da7f99ccfe7f5c1dfe861aaf13c8bf4",
"main.dart.js_136.part.js": "f5e087ade659ea067592e5de047a48a6",
"main.dart.js_168.part.js": "2e0ac2df226517b0db6976f5bc5e08a5",
"main.dart.js_59.part.js": "f12f3143caef1d584e123bf6ac82d4b6",
"main.dart.js_47.part.js": "f96f1cb45d499daeb6c53825f13148eb",
"main.dart.js_107.part.js": "4b2b76e80160e3328c81aae9c5c01ca4",
"main.dart.js_29.part.js": "01b98874b0223dffa2a1ef79f234b084",
"main.dart.js_58.part.js": "a918a4599cc7afbf6d8730242e7d4fc2",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "5a36ea00e7c061819c50dbf57e657d7a",
"main.dart.js_79.part.js": "53aa41a9845d3eb90999e35b6cc2b5ac",
"main.dart.js_92.part.js": "31d54744cb88b24c006d871c446aca25",
"main.dart.js_224.part.js": "fa47d672f2013d50b3fb3ef2dbf40346",
"main.dart.js_93.part.js": "18fe7c0669977f9f0fb51657840079c4",
"main.dart.js_11.part.js": "042fc673962ff2667377b922d983bda3",
"main.dart.js_125.part.js": "f66106e7ba89b07b19fc8ecdc8b9b3cc",
"main.dart.js_131.part.js": "3c0a3bd4db73469711fac86b88b1d906",
"main.dart.js_226.part.js": "01f82591ab1f092656bf1b7652186689",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "7a673b099b5f7c7fa9a7eb8d4beb0114",
"main.dart.js_178.part.js": "9b8877d56027a3a0cde59a2957603e9e",
"main.dart.js_187.part.js": "c148aa42b6353bb3311f0859c44eeda8",
"version.json": "d20805875a1de26e18ff8a1193edc851",
"flutter_bootstrap.js": "73eb35653482794f9cad262ca7c60603",
"main.dart.js_191.part.js": "1214a0864fecf027510b56e32fd38b32"};
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
