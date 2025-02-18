'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_282.part.js": "804fc8a69cfe0fe39820d9708a669439",
"main.dart.js_214.part.js": "61c706531a7c55a4011a5b313d1d622c",
"main.dart.js_44.part.js": "b61b03c1341d7a1ef2e866bf54cc83be",
"main.dart.js_262.part.js": "cb9acd7a3ac2744542077aad75a5fdee",
"main.dart.js_222.part.js": "55f5743996cd7af503e6d2a956887f3a",
"main.dart.js_355.part.js": "e2fa93985da72b1a61d60fb9ebbac365",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_54.part.js": "d60db9c20df81477698d98b18f4b330f",
"main.dart.js_219.part.js": "5ccddac6f3e5a89921840884756300c2",
"main.dart.js_346.part.js": "78a0ae61e1d3e6309985d758ce4f94ad",
"main.dart.js_280.part.js": "0d114c5231e00580fe23415789896e89",
"main.dart.js_314.part.js": "99d11387c15d0db0b38cd24d9db46395",
"main.dart.js_95.part.js": "6486c0720361455e12873058e0fce7b8",
"main.dart.js_35.part.js": "1585c1c71d90ee5b74060779f8c55782",
"main.dart.js_125.part.js": "d37198ae0265066441dd90ba962742ba",
"main.dart.js_297.part.js": "2fe1d53ff11fd98564b6314d93b142e1",
"main.dart.js_161.part.js": "c91f1d1e4cce6d1c1da2b08ad9c79577",
"main.dart.js_104.part.js": "3ed18ca249d00b9843381f78c3eb07ec",
"main.dart.js_296.part.js": "227b89599ffcbb7fac62e44579a71560",
"main.dart.js_325.part.js": "c1e2f38ad262efa2744fb3ea55377e5e",
"main.dart.js_149.part.js": "c36297a3e4505e414ebc7764af0ce9e3",
"main.dart.js_204.part.js": "1e1247029eaabf42c370b13e78b5ea07",
"main.dart.js_8.part.js": "dca72686cec8828460ef15e91c2f3e85",
"main.dart.js_194.part.js": "a7389c3b422a1650266eb0c79f34f609",
"main.dart.js_11.part.js": "fbd1ce71a57d5d7460079babce7a8cda",
"main.dart.js_108.part.js": "c64d52cc44d635015f5ed652439d3039",
"main.dart.js_77.part.js": "dfaef295ecd29f9e3824b8d5870c0733",
"main.dart.js_246.part.js": "b3b7e5167357775682c272cfb1b21661",
"main.dart.js_225.part.js": "6b6fa7fe1becfda6e9d6dddc71bb99d9",
"main.dart.js_146.part.js": "c351f652c2ec2c93a86a7892182cc64d",
"main.dart.js_342.part.js": "9eaebedd50be8d6e44cf2dd10fc5bf2b",
"main.dart.js_38.part.js": "c15a96be2a04242b89c0063d85c8c705",
"main.dart.js_233.part.js": "1cb2695e8c4b1f46e2291fd6999b31f1",
"main.dart.js_359.part.js": "3472f25fbc7b1e623ef88f6386834d84",
"main.dart.js_88.part.js": "e92756477cfc8d06967f97a82fd62057",
"main.dart.js_201.part.js": "89b33a2597a862ac7a0aa00cc547c426",
"main.dart.js_358.part.js": "609ad69fd1aef893c9bf0836ffdfa218",
"main.dart.js_135.part.js": "12841d0b246ac8b61935831119de843d",
"main.dart.js_114.part.js": "58b7224e9ee82fdedbf526fbb52f4e68",
"main.dart.js_298.part.js": "79245d6363ebd08b99188771a35def8b",
"main.dart.js_327.part.js": "d70d506a3c2aa5c0d73e8daa6b9256c2",
"main.dart.js_165.part.js": "19191e19ad08a4304ea3c01dbe205106",
"main.dart.js_7.part.js": "5eac40f5272275c1fb7ad4135670013a",
"main.dart.js_64.part.js": "0e23ccc9717360f2a76aa8f96f107266",
"main.dart.js_302.part.js": "941f47cd6c2fd8af8d61a22d27f9670d",
"main.dart.js_56.part.js": "72c7b1876241b2dca6bf928e120f414c",
"main.dart.js_226.part.js": "c870afe6e41c085bff5a2e9e4b4b79e3",
"main.dart.js_102.part.js": "b284eed213e5d76f30af244094e945c9",
"main.dart.js_254.part.js": "9b448de68aed874cbe17486a636e9aec",
"main.dart.js_65.part.js": "13fe78d7ec926e9a4b77825bcd1e17b7",
"main.dart.js_317.part.js": "acdc79857e1fbd68547c88fc9d218c4a",
"main.dart.js_191.part.js": "db5e4ecc93c4c732cbd8a8769d906811",
"main.dart.js_299.part.js": "10600a08dec7006d0f60887eb6c065df",
"main.dart.js_319.part.js": "9f0ecd59c161e099191a0bd29b6ea2a5",
"main.dart.js_68.part.js": "6eb3dd3db4436fad33abadcf7254894b",
"main.dart.js_52.part.js": "a2ca25c501a34b5b92647ecd9f25a404",
"main.dart.js_334.part.js": "8012a977d6ab0488f76b3df076a76b02",
"main.dart.js_136.part.js": "96a2d0abdd220acd67ef31331cd2583c",
"main.dart.js_316.part.js": "246fd63a1d8526ae192a84f1fabefa6e",
"main.dart.js_264.part.js": "048328e7bc0ec976bd0a027ab38e681d",
"flutter_bootstrap.js": "326686a8254ddf50a55bcee5e4335f3f",
"main.dart.js_318.part.js": "fd9b53a092ec71141f1cacfde3c438fe",
"main.dart.js_294.part.js": "df5d1e13a29d44bc3a8f1a8de9107a92",
"main.dart.js_190.part.js": "a7d0ea3a2a1fc8ab9dc394ca84e9aed2",
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
"main.dart.js_257.part.js": "23a38b70b6a32535cdfec578ad480999",
"main.dart.js_247.part.js": "3f7bdfde5923f483111d7b64f7365e2c",
"main.dart.js_361.part.js": "6cf849f1fe964351a046945433a6861e",
"main.dart.js_277.part.js": "b9ea4202af6e115ed7b4475a8f811bea",
"main.dart.js_100.part.js": "b09e1495c69c373324393dfa2a709561",
"main.dart.js_353.part.js": "1bd5a85403708044c70f20ece38a1872",
"main.dart.js_121.part.js": "41039f547fe61e5c2024f3ded5b5ed48",
"main.dart.js_36.part.js": "e1352d1c0f59818a777b4927489556c6",
"main.dart.js_170.part.js": "f7e8c892824acd53422bdf042da50c4b",
"main.dart.js_154.part.js": "d204a3a9e5ccc073a725ec559654abc8",
"main.dart.js_290.part.js": "91007faf21f12d0f80758e57120cf9fe",
"main.dart.js_20.part.js": "2a635590b864f7aff1132baaede1b39d",
"main.dart.js_141.part.js": "de9cc4be788facd7cdc311cc08c1de44",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_180.part.js": "d90d0626f037be1a72302530dfafca9d",
"main.dart.js": "08633a1a7ce07e77cf700e746b9442ea",
"main.dart.js_80.part.js": "a2c0899a93947ec72b5ba73b298e777b",
"main.dart.js_31.part.js": "4b6b1dc72434e8299e16a6863f448034",
"main.dart.js_167.part.js": "7423a24df6a17a9cd6565ae6a42114bf",
"main.dart.js_328.part.js": "a08985791a17e2a1f5da76a5afaa55ce",
"main.dart.js_37.part.js": "47f2961c7ca49c3af4fc93c5c4f67cca",
"main.dart.js_9.part.js": "81ea3c795d1bea8c4bd8b3ff996e1ac8",
"main.dart.js_221.part.js": "80725f3caff7ffe55c685482fd34543d",
"main.dart.js_118.part.js": "8b49dbd0adc1592273d273e13aac808a",
"main.dart.js_332.part.js": "2cb8b035f8a6f9ec631a110a6a6d1288",
"main.dart.js_224.part.js": "1833d548f6dc8eb65c6d91be49ea913a",
"main.dart.js_150.part.js": "c0c38761b473952c0a3404f48f2a43e1",
"main.dart.js_326.part.js": "d2b1093441aa9bce2b12b1315aa715d3",
"main.dart.js_309.part.js": "9b5745fbd45826dd087ea50e133b6268",
"main.dart.js_67.part.js": "1665b1c576add931ea684f09d8781265",
"main.dart.js_300.part.js": "fc5307344b1803354f98a6b949a7f239",
"main.dart.js_196.part.js": "b0add74bd9e3a9aa366e45fee6aed25d",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_3.part.js": "2e4b37686cb8e622744578b8a5f65e4b",
"main.dart.js_105.part.js": "c61af64171a1cd4335e2e8bbf61264fb",
"main.dart.js_252.part.js": "cc859f952b4f06822b1875104f864128",
"main.dart.js_271.part.js": "3b0d206bfceea6e777b988882dc89122",
"main.dart.js_71.part.js": "d3b24e922432b3e6f221ac4d58d1dec9",
"main.dart.js_59.part.js": "c6535d908dd0d79e00fed27047374aba",
"main.dart.js_203.part.js": "f614d1c96bafeb2a747475f05f15f6aa",
"main.dart.js_142.part.js": "a8a331b4fbe39eb3cdf5be224f7d9479",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_99.part.js": "1ebeb3779e5be5b1c11f28394971c27c",
"main.dart.js_34.part.js": "8cfd5f42191180addec99c01622cd732",
"main.dart.js_286.part.js": "5d255ac4091d3c3a910cd3a868cf6ba4",
"main.dart.js_344.part.js": "ecb904cd712cab23e2a6361b3b57a385",
"main.dart.js_181.part.js": "ddb7ebb752d5cb3fc76de3c9fce3f0df",
"main.dart.js_173.part.js": "b2a2cac17d5626d182791c26c5ed3a95",
"main.dart.js_28.part.js": "36e612d502bb62edd1f61dbfbdbb64f5",
"main.dart.js_338.part.js": "67169a4d3f975e794817267f634d9fd8",
"main.dart.js_163.part.js": "cbd16c9899f4d64acd2d18dac0bfd6da",
"main.dart.js_369.part.js": "6bdd6f4274bd08311ebca1dbae4fff72",
"main.dart.js_17.part.js": "3afc2604db7b937da234d7f4c7b905fd",
"main.dart.js_343.part.js": "8c6621d63c54fa2efc1bf15b6e8ee27d",
"main.dart.js_21.part.js": "5ea2d5a76d26184243f7b14e786481ad",
"main.dart.js_283.part.js": "e09b85ee7fff0dd8d24029c083797324",
"version.json": "208e26bbc40ca6e324d0d710c3bbc392",
"main.dart.js_152.part.js": "da55c9b9e170ee6274d679a8fd678a5b",
"main.dart.js_365.part.js": "e4627b64747947ed0f4870810a274b24",
"main.dart.js_81.part.js": "4ad648dba5a44ad68a79f80ec8c7cf8d",
"main.dart.js_169.part.js": "3a1984805603e86ea791ff25afc4a002",
"main.dart.js_228.part.js": "17117087072959b4038a007e7ba59b22",
"main.dart.js_116.part.js": "612bf45a055919bc7cf231ba8ac78b36",
"main.dart.js_109.part.js": "44c6c62e047636a33828701c1bc61bf8",
"main.dart.js_92.part.js": "4bd42f0e81845f643df5ecd5dda9522a",
"main.dart.js_126.part.js": "1707c712413b065be700ed14b263edce",
"main.dart.js_305.part.js": "013f55cb157a51dfb48595c1fe4828b8",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_182.part.js": "a09e127289dc7b47380e5a4474f41a61",
"main.dart.js_26.part.js": "eb1aff0f258d01fa208049bea4e725b8",
"main.dart.js_124.part.js": "dc8f3cd79bf67c293980ecacb2b81482",
"main.dart.js_122.part.js": "26738538a0062c018b5e4612f036e270",
"main.dart.js_306.part.js": "8c7307b811d2895de7535fa58c1a289f",
"main.dart.js_364.part.js": "bdab031664578ad0e4e8649826fe9f60",
"main.dart.js_98.part.js": "a48a43643e911638f73eb6fe2b1fb3be",
"main.dart.js_18.part.js": "83b1ff29485190901ceca7112f795640",
"main.dart.js_187.part.js": "e3bfa5d365aeda8d54563b707087c2b2",
"main.dart.js_41.part.js": "9bf12c5831a3b3c8f6e7fec48a333648",
"main.dart.js_205.part.js": "c607cedda6692998afcd8b4b6f4641b8",
"main.dart.js_371.part.js": "40cc721990ad34fbbbc12608b9ec2eff",
"main.dart.js_285.part.js": "d8646b00eb5409522b99d7cf1174eb8a",
"main.dart.js_63.part.js": "8f417dc32a6d0d60e73ffafe658ddb98",
"main.dart.js_110.part.js": "b00b10663beb93a013f3c2cc2dd07a89",
"main.dart.js_237.part.js": "0ce5b6c632a5f9e5357b3063fc1a8d16",
"main.dart.js_106.part.js": "732a7b0845418c532a929d702c4c2c14",
"main.dart.js_200.part.js": "2301c3d097350f53b25d2df4d4cc86e3",
"main.dart.js_174.part.js": "e3a3d2ba3b2d5f6950839081440ac76d",
"main.dart.js_335.part.js": "ee8bb2960979402464a6ef6808f66fcb",
"main.dart.js_159.part.js": "a8b39e5e89e687398df1f764d0f3ecd4",
"main.dart.js_249.part.js": "66e35062e922e1fc615dec2d5349a7f5",
"main.dart.js_157.part.js": "2c8a745d89b43935eb46ba4c9f821caa",
"main.dart.js_148.part.js": "e60e7ba26a3bf7b0218efa593b707277",
"main.dart.js_166.part.js": "406c265d863ae429280c7e6ef6ad8180",
"main.dart.js_321.part.js": "ff941fe93527a0b600611892c9ec62f1",
"main.dart.js_345.part.js": "0786c2ce73346ebd7fbcc35fdf698894",
"main.dart.js_10.part.js": "9c81a1ec2c491c048d6d415178e027a8",
"main.dart.js_276.part.js": "cd264b4d1220d46eb3f35baa65486608",
"main.dart.js_2.part.js": "a687ea51d96d101c8cc3bb5351543576",
"main.dart.js_51.part.js": "915ddccfdbc84ede2848fd94749afaa8",
"main.dart.js_120.part.js": "cebd4fe55fbdd35aa2fd84fcb2237456",
"main.dart.js_258.part.js": "a5a2749d079c92c7c1d3e66f6ffb763d",
"main.dart.js_349.part.js": "b35d6594c9e244bb98faf171893f8ad9",
"main.dart.js_32.part.js": "46792fcb5c30d0ac2142b885a44db227",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_230.part.js": "2568bbfde33d836f02b6532d71bad63f",
"main.dart.js_322.part.js": "7a77fb4d68adcfa7f07cb811e63cdfc7",
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
"assets/assets/translations/cs.json": "2aab37791c66a24f064ca71f0dbda403",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/uk.json": "06d8c6f66303ae3e257fa9a62fbf09d9",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/assets/translations/en.json": "0f50bfe806546609d63aa38fb911cce5",
"assets/NOTICES": "676824ae0f7212fa5a73ec0b0f4955b4",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "2b61d7964d1989ee9e94d1830294d837",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_235.part.js": "2accb89adae50df10d1caec8dc1ed3e0",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_127.part.js": "cbf296da19b7fe0476dd2c60afaf8350",
"main.dart.js_289.part.js": "ed2c0ba3339f6c753596a32233b4443f",
"main.dart.js_185.part.js": "4987bfbd88658ab3ab6902893c910836",
"main.dart.js_354.part.js": "767bfa2018240b15a3ff202b85cb97fc",
"main.dart.js_248.part.js": "4f6c0614c9ec793da45528ca5e820b94",
"main.dart.js_15.part.js": "d8273040174a6416910635c6836f8689",
"main.dart.js_274.part.js": "446682cf15b934f79d43bd4979c3107b",
"main.dart.js_356.part.js": "67ddf8752082cecd4815798cc88817ad",
"main.dart.js_259.part.js": "d91269192128bf8da4609bccb5c49cf2",
"main.dart.js_278.part.js": "dc3cc5ccff6c4cd2718f230a1234e76d",
"main.dart.js_119.part.js": "e64e85e72ef01273f76ad64b2e36e907",
"main.dart.js_90.part.js": "896996e19c97459f592f264d1510a19d",
"main.dart.js_40.part.js": "39706707e583db60b3b30ebfc9151d89",
"main.dart.js_14.part.js": "624b41d5ee13e9d1e2c3c7d7a743e27f",
"main.dart.js_29.part.js": "fdacd5e0b4cc1307765bf89b42253aa3",
"main.dart.js_193.part.js": "97021ac6e1da2e10febed75a7282cb95",
"main.dart.js_324.part.js": "569ec564b860a80ae1eaefc12af86c63",
"main.dart.js_12.part.js": "bb8e05226d6944aaca112d0b86dcee48",
"main.dart.js_360.part.js": "fedad42a0455241105c0a483bcd301fd",
"index.html": "bdb60e364fc2a6d0dee136b895c5b632",
"/": "bdb60e364fc2a6d0dee136b895c5b632",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_310.part.js": "f219f9adb4c9082f8874143ccb7f0c46",
"main.dart.js_347.part.js": "ed1a8ca3cefa727d5f0fa5d575579f78",
"main.dart.js_33.part.js": "9699663578a6d762aca0dabe5e6164e6",
"main.dart.js_340.part.js": "87492a86addd1df396a0302d155c2906",
"main.dart.js_19.part.js": "65192c6f0d7d46b0574bc148e6fb95a4",
"main.dart.js_96.part.js": "8aeab3e29b4440632dabf13120aa7000",
"main.dart.js_188.part.js": "0bc99663089dc07fa991953090153512",
"main.dart.js_107.part.js": "b595b0d98e914a1e111834a15c6f9045",
"main.dart.js_245.part.js": "54edfa7c6158a0fdfb0738f09575b8ac",
"main.dart.js_220.part.js": "c8693fea16e91a943e8055bf799a5006",
"main.dart.js_13.part.js": "32f50360ef2d5d304fe9aaf71c775eab",
"main.dart.js_130.part.js": "866064776fe15cedd25a56911bbbb227",
"main.dart.js_94.part.js": "4ada4847910e778a3b89c8c6e2a85740",
"main.dart.js_164.part.js": "879698663b186d3279b76c3ba4acb096",
"main.dart.js_184.part.js": "07a136527f9f0642397b322c3c14ae7b",
"main.dart.js_171.part.js": "cfea16d8c119a572fe6b2b87f4a4a729",
"main.dart.js_337.part.js": "e52412766842556e7625cc5c082fcb0c",
"main.dart.js_73.part.js": "c9d4db14793f4bffc9dbba7dc6aae499",
"main.dart.js_53.part.js": "a25b6b8b8bb89067eba9a25e38f27fe5",
"main.dart.js_366.part.js": "aaebaf9d2298f49074b516b74ee6c13a",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_293.part.js": "7fbab6103ad9de270c9fc8ce25fb8a90",
"main.dart.js_236.part.js": "79f912ee5e91976dba9cd0a8434c164b",
"main.dart.js_265.part.js": "aa459095aa693a5dc0ddd3ad593266e0",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_76.part.js": "a0cd9d100da0ebbc1c5a194691d851ef",
"main.dart.js_234.part.js": "7d6be883157e608cacdb6472438f54a1",
"main.dart.js_175.part.js": "c4392e91f6f4277273512afc832bb06a",
"main.dart.js_58.part.js": "3476dde04c2141689f955eef49db26b8",
"main.dart.js_143.part.js": "0cc4a3843511415052e51ad145d63fcf",
"main.dart.js_223.part.js": "539955acd780ab8dfd616393985799ae",
"main.dart.js_156.part.js": "eeb26ccb45fd570fe1b61f4cdbdd7830",
"main.dart.js_83.part.js": "99d932a37d1205a9701be95a231919a5",
"main.dart.js_253.part.js": "af9bd630d50641d2b0f65843462e1e87",
"main.dart.js_30.part.js": "c30fb2229e842ef09a7bbfd5c8d6425e",
"main.dart.js_138.part.js": "fe6429160aeb2e88d4b6d04b4b0aaead",
"main.dart.js_209.part.js": "54e1aad23e858d20c93452bb01699666",
"main.dart.js_269.part.js": "3d8e959d0ce2e45700c9e7935deff5d3",
"main.dart.js_27.part.js": "94b9053b17692111cf28d411340c3d17",
"main.dart.js_24.part.js": "1055b8b1e19ae6db3debba5269299b3d",
"main.dart.js_112.part.js": "624813d5ebab9f7bb69d7e2711e13baf",
"main.dart.js_275.part.js": "986a0cde43b31bb2a72e40fed608a030",
"main.dart.js_134.part.js": "5c510672251bdd2c06ae4e420b2f1f75",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_240.part.js": "b19b19e8d7335f2457f01b4d460d33d8",
"main.dart.js_362.part.js": "6171189d251e2a4a5dad8fc45b3ba1ed",
"main.dart.js_23.part.js": "5cbee6fb06be6d7daa0dcfb5dbc5e7dc",
"main.dart.js_47.part.js": "892f2469f28b168741bf6e69befbd6ac",
"main.dart.js_87.part.js": "ab0fd5338fb70f530f1ab5064ffafbca",
"main.dart.js_301.part.js": "5a51f7550841cb66af980bb90d7d5996",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_330.part.js": "16e70c1b3dd33466710022882572ac76",
"main.dart.js_179.part.js": "4ac51d4959f2f29e4c03b4887307d24d",
"main.dart.js_55.part.js": "597f4e265b0ecf5426ee10da47403953",
"main.dart.js_93.part.js": "8e57a08383b8797cd20a9f741e6a4433",
"main.dart.js_25.part.js": "85fba8a71339b2b765ab3eee04101ecb",
"main.dart.js_351.part.js": "2214ad39121330ade4118eab73cc4f97",
"main.dart.js_331.part.js": "a3acbefbecb42a47de73efd1eb453029",
"main.dart.js_333.part.js": "044591670d94a5940d9ecc9c4d91cf4e",
"main.dart.js_263.part.js": "f56423241adf0c9871a9090794bcac2c",
"main.dart.js_115.part.js": "19662b984fbf49797437ae43ead5b4be",
"main.dart.js_241.part.js": "c71809ba2cad5a4559a9892b03994a45",
"main.dart.js_158.part.js": "de85139a37475ea68b0abf58b6e3362c",
"main.dart.js_111.part.js": "81e208c023163127150e70a9e6f320bf",
"main.dart.js_137.part.js": "db5132f65d3ab91e45a0a4650029ffec",
"main.dart.js_199.part.js": "f33939f801800dc28685880d35653ffb",
"main.dart.js_172.part.js": "ff580f2231c00e7b1869f6c59cfa0e80",
"main.dart.js_78.part.js": "c8b7bcdfe5b672242f2da9eb218f33b2",
"main.dart.js_183.part.js": "89f8f5680c5428b7e729ba2fd1f31b01",
"main.dart.js_311.part.js": "382f3717b938ab85068196ac4d62204e",
"main.dart.js_256.part.js": "aca98ad996b50949b738bfbaa881cb18",
"main.dart.js_145.part.js": "0d637481528f5171c7b23f75915effcf",
"main.dart.js_168.part.js": "90d42e4a5c29708417f02917bef7aa83",
"main.dart.js_117.part.js": "f07b67e35d1a018ac7e0accf3ddc2266",
"main.dart.js_101.part.js": "43bbe44093a3499ade9a83d043392bb3",
"main.dart.js_131.part.js": "35f08df0f78f59d004ddcf4653d266bb",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_139.part.js": "192ae3fcaf6361d7ae3a8e8f1b4a9619",
"main.dart.js_352.part.js": "8886c914e0e40c8b091ee4b14978f077",
"main.dart.js_348.part.js": "380a06b62995cce7cccfd55f543d8651",
"main.dart.js_103.part.js": "2fa5148ef964c511317cab12be5097cf",
"main.dart.js_62.part.js": "9dc425e1739fd6093284506d1dee6235",
"main.dart.js_315.part.js": "5944d5d5cbe742a89bc2dd306b5c3cd7",
"main.dart.js_176.part.js": "5bc5dac2bd12fd59ec2c0e9add910027",
"main.dart.js_43.part.js": "08018c4fd8ba76fe17d44d7c3140f8b1",
"main.dart.js_202.part.js": "b4facda21b95b2461b2e2db70620c9bd",
"main.dart.js_151.part.js": "12dcd52c9d60e34d911d3d2f9242ec49",
"main.dart.js_281.part.js": "05ec913dbf1ac27eb543f498ed73b3e1",
"main.dart.js_61.part.js": "1be3be75663a09c0008d45b0b67d602c",
"main.dart.js_261.part.js": "21b1a2406d91af8f6d75185fd5fcdcb1",
"main.dart.js_1.part.js": "c3d889548ab1db08346c39bb76b6900d",
"main.dart.js_268.part.js": "f43d6a69d40cc8c25114f01324508763",
"main.dart.js_4.part.js": "731cfc726cc6263bd4be7b799319ac5d",
"main.dart.js_266.part.js": "71b24f5297d06c3d4254697628534605",
"main.dart.js_357.part.js": "057f822faaa17152ad1f819a1c99753e",
"main.dart.js_16.part.js": "c63f85ac2884a21e5ea65fdc5ab743cc",
"main.dart.js_242.part.js": "f8972210c31c0c8a38b63302aa5ab150",
"main.dart.js_370.part.js": "9a88c4cf5a007f14a9aa5974c7a131ce",
"main.dart.js_341.part.js": "02798c1bf292a0171b994252d557b5b3",
"main.dart.js_39.part.js": "1c050d247250af893f90d5597e752ce1",
"main.dart.js_292.part.js": "8bd82b86de8986b06b264c6c27cf7000",
"main.dart.js_144.part.js": "2074281e727fd4d4a36db32e4fc08efa",
"main.dart.js_363.part.js": "4b416ee7591e79c28cdaf9c52573aa9c",
"main.dart.js_231.part.js": "16b993e791e995a5ec282066eaafaeea",
"main.dart.js_367.part.js": "91b3171e880ab42e5e0aa6c8ba213c9f",
"main.dart.js_368.part.js": "598d69d6e2d79176d20af71d00cdc137",
"main.dart.js_70.part.js": "96b3822df0cc37ead06b7a30fcbd970d",
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
