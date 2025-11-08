'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_104.part.js": "9a6287920fe1b49672c49121fcb16784",
"main.dart.js_113.part.js": "9806e02701683078df1d5e77a28cd189",
"main.dart.js_37.part.js": "9d5a5cab59852fbfd96f7bffe86709cf",
"main.dart.js_3.part.js": "156ad3fd246b8473e6869f6e98181299",
"main.dart.js_291.part.js": "57dedefc280ac56fdf9413f269fb01cc",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js_208.part.js": "f85047fffb09d64b81bf127f42b22e7d",
"main.dart.js_185.part.js": "3729b73156c5d5781101390ea4276a20",
"main.dart.js_135.part.js": "7b5966f77ef705cbd84f013cb361b063",
"main.dart.js_65.part.js": "cbfe16a00b4492692c058b19efd67598",
"main.dart.js_282.part.js": "23238d5927e07acd333d46b4a9795664",
"main.dart.js_167.part.js": "d4bf533e9a8ec2f7b9b538e0fe92b4f0",
"main.dart.js_271.part.js": "4aa1cd66b766d3e45979dae80fefcb95",
"main.dart.js_201.part.js": "dedf6d878a7d4e25a6b977035c274f86",
"main.dart.js_88.part.js": "f308625ca0bc531cca21ccf2c0a2f315",
"main.dart.js_112.part.js": "3096d452dbdc6607a9c9a1370ef7bcd6",
"main.dart.js_105.part.js": "40376577f3793e9d09ec18f5a7efb699",
"main.dart.js_259.part.js": "0fdd2383919e207b565339315ba31152",
"main.dart.js_148.part.js": "8a10aa7b0abe34a68edf9f352f5e0a57",
"main.dart.js_76.part.js": "e9411591f66c4567a8de9b26d34c66c0",
"main.dart.js_101.part.js": "590e995b7cf5ea668b630b12a2ff45b0",
"main.dart.js_297.part.js": "1a08be6d9ba2ad057d83c800005ec869",
"main.dart.js_1.part.js": "1039847db38558ba7f2a0064e26bceb4",
"main.dart.js_260.part.js": "ad273dc0f92cca1118683dc9f00d9e34",
"main.dart.js_173.part.js": "727bf061a3fff1288665b8a5c8821250",
"main.dart.js_92.part.js": "84c52a7c6904ef28d3356766b7b8c9c6",
"main.dart.js_55.part.js": "580b9c6b45bcc288a5f1c27fcbf15bec",
"main.dart.js_87.part.js": "ec4b04e7134c18791293c7676c813d6f",
"main.dart.js_199.part.js": "5a498a0bc21e241b5c49dcbbec0bda4a",
"main.dart.js_63.part.js": "554ae666f4491c5f17a1bcaae5888e85",
"main.dart.js_27.part.js": "797c4f1fa60632b4aa3e1a2faac1206e",
"main.dart.js_36.part.js": "1762d491e5ba8a4720b82c59a7e33683",
"main.dart.js_162.part.js": "75460c306903d10eb3ce5936a0c46372",
"main.dart.js_245.part.js": "e870cb3ca9b39837a62443d57b2f75bb",
"main.dart.js_124.part.js": "ccc4d5511f9e68c2c99409b15f580c63",
"main.dart.js_250.part.js": "ec964d2d0aeebb2e0eb2d7007a700ce4",
"main.dart.js_13.part.js": "394eac9e6246eb72da65e940320f14c4",
"main.dart.js_136.part.js": "ac2adddcd3e586adbbe49d3123bba7a3",
"main.dart.js_220.part.js": "fb32b6faf1fdc7bc5e706638089b72d3",
"main.dart.js_77.part.js": "8b74b8deffec51fa78ce82b34f80b6fb",
"main.dart.js_106.part.js": "ba1bfa83810f73194ea8243a2bda589a",
"main.dart.js_14.part.js": "7563b7011b91d21e9e3898fe98e28e3e",
"main.dart.js_39.part.js": "bd7882a6d3e10923b3c030c92c47a3ef",
"main.dart.js_61.part.js": "c16be9cacdde3b67f726db8dd8fa689a",
"main.dart.js_48.part.js": "21b88fdac611deaeda4d7a2d1fca2b33",
"main.dart.js_19.part.js": "e5d394192d35dd1606c550ad3131f88c",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_280.part.js": "41e94da1f793a3582d0d0b59cd33b0f7",
"main.dart.js_274.part.js": "8ce5956e7f8fa7f0ae0ef7bca61f15b5",
"main.dart.js_73.part.js": "b71ddc2522cbec0ab9f624c2cedaf87e",
"main.dart.js_30.part.js": "27fe23d2a0eebf6be457ea3a84244a03",
"main.dart.js_295.part.js": "5e6af3c7047f679a3599a1c9f23dd17c",
"main.dart.js_140.part.js": "dc523d6def94d6f78bbb8d6115aca256",
"main.dart.js_117.part.js": "c53f1aa40482da8a23790582a998ccc9",
"main.dart.js_11.part.js": "0bf4af4bafe09ed55dc4c0798521c094",
"main.dart.js_126.part.js": "c971a78bdb4d2243e54a1b3cf224c29a",
"main.dart.js_169.part.js": "0c9cff1f636393a880f8bf750d5ea849",
"main.dart.js_100.part.js": "b503f375baf25223569d107c5e9b7838",
"main.dart.js_211.part.js": "19f6e551822e84a71451d3f29a294b5a",
"main.dart.js_266.part.js": "cbbee5bff3e717576e92b42391e7a41c",
"main.dart.js_130.part.js": "0a7493a4ffbb1c18212439eebe482900",
"main.dart.js_156.part.js": "d2d21d1605967549a3659bf29856a877",
"main.dart.js_184.part.js": "9bf308e9d3b58a9184025564f2de9a0e",
"main.dart.js_234.part.js": "e9481745c2fb972dfc1691c05f015eba",
"main.dart.js_71.part.js": "286b35f48a60b3f7ab17242d189de4f1",
"main.dart.js_161.part.js": "17f4a890771dcde08c2584f709c18afe",
"main.dart.js_42.part.js": "ff4c624dfcc214344e3493e3e0c7cdc0",
"main.dart.js_45.part.js": "c0479534f83eed879b47fc1723a72e72",
"main.dart.js_246.part.js": "9d3405c92759bb9fbe80e32f32333d6c",
"index.html": "b09523b0cdf47d486a3bb3deccc0c0da",
"/": "b09523b0cdf47d486a3bb3deccc0c0da",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_251.part.js": "025912d56c7ac08d7f381696d6f21eca",
"main.dart.js_35.part.js": "9d90c685c9f5d5c4868ee66e3e84cd13",
"main.dart.js_102.part.js": "8da376fc7f7531773167807770c4b72a",
"main.dart.js_302.part.js": "346f6da95f10932268268f95efd1b1f7",
"main.dart.js_79.part.js": "32c971a2ca5b2cd668b020e62fe29f1c",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_241.part.js": "c6f6fa3be438096b472ba95f3b41d72c",
"main.dart.js_119.part.js": "38e006859aaf8ae069be393f98be5599",
"main.dart.js_258.part.js": "879019eeed3a3e04c78b79aeb05baf2d",
"main.dart.js_10.part.js": "b8d62c6a9008d26d05f206b20db2a073",
"main.dart.js_168.part.js": "f2f8a5a147b2c4fc3630aa9d10d74070",
"main.dart.js_244.part.js": "bee7f6e991a7e237f1920a0289f90726",
"main.dart.js_98.part.js": "8fe2803d48e4662f53c20a5aa87c8806",
"main.dart.js_242.part.js": "de46c5d655ddc6a74caf643650dc7468",
"main.dart.js_151.part.js": "5143e1667fb3b930efd367bb60258f93",
"main.dart.js_78.part.js": "c24bded0763c79b6f1fac8024e9fa061",
"main.dart.js_75.part.js": "89c78bca1ebf5bb5e2415c01828e6806",
"main.dart.js_122.part.js": "e1c0b5d5a96798446fddf9ba77936a98",
"main.dart.js_294.part.js": "fb0e548ee053ff485935cf94f7a6f125",
"main.dart.js_177.part.js": "5d8e0c9c3364085f9fd752346467509a",
"main.dart.js_134.part.js": "206ae782de8ca32b98828810edec6f59",
"main.dart.js_82.part.js": "c61db6a7f166bac3b9f0d99a41661d86",
"main.dart.js_300.part.js": "ca563fade13d6a909e0afc7f1d0682d2",
"main.dart.js_149.part.js": "4208eb08e4d06da1d951275b54b9c6f9",
"main.dart.js_261.part.js": "2375f4e17d48408f0a9b1d69a52c6374",
"main.dart.js_57.part.js": "775e70de3977b7bd21108bbe495358e8",
"main.dart.js_34.part.js": "c7f838f17ecab6b87085e123ae1096d2",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_262.part.js": "3d1ab62a102797dc25da4d50891660ab",
"main.dart.js_299.part.js": "47f47bedc9eb168aa9c62dc1b3fc49b2",
"main.dart.js_138.part.js": "555e3acf2b96f9c6135f19d38550be26",
"main.dart.js_263.part.js": "abc1e1c9002a382317ecf1f2b2c4cebc",
"main.dart.js_179.part.js": "f9eb2a04487eae623fb27d480e6c8bee",
"main.dart.js_301.part.js": "fd8e9a8fa4b47a8f35b32b6742809b16",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/translations/en.json": "3fb8d123171eeb071463186729fb2277",
"assets/assets/translations/uk.json": "7d2211d69832c8cd5dae9fed4240aa08",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/cs.json": "8bb0c269bee869991bc790bd015a3837",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/fonts/MaterialIcons-Regular.otf": "f9d6aa3eb8b067b51892e2b41d8f601e",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/NOTICES": "86d14c7d78d2346e4afd89e5d6848786",
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
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"main.dart.js_210.part.js": "8b522ae3572fbb51b94ff5ee08da565a",
"main.dart.js_69.part.js": "d3313b22a5f3395bb8a7e576ac4998d1",
"main.dart.js_107.part.js": "ccf0bba43e7e21b6177cd1c0a774424b",
"main.dart.js_190.part.js": "93b927054b8c7e80be8b4924c5c9ddd7",
"main.dart.js_240.part.js": "ae7e4832e27fcd342dd2d291cd15437b",
"main.dart.js_89.part.js": "858f5d8f8ebee1fada8c1c7ce6601586",
"main.dart.js_160.part.js": "10833c7ddc5585a35b606c4782103b49",
"main.dart.js_181.part.js": "31a89c4d203ac77da404a898725000f4",
"main.dart.js_44.part.js": "60f943b734f261775497ab6cb9be6e9e",
"main.dart.js_195.part.js": "009b14c0f8562b6ab38d319631bdf491",
"main.dart.js_32.part.js": "8986efb01947d7be4e4b16f5e2c0c3d9",
"main.dart.js_31.part.js": "b3a471c796733eb825e76d15b6388d63",
"main.dart.js_247.part.js": "37d033d7ca2e82a3372c8efe463623a4",
"main.dart.js_5.part.js": "fe2f53afe6c90fa978fed9554e377b69",
"main.dart.js_254.part.js": "e5e092b3e56df69b86d17c32cf3b21b3",
"main.dart.js_284.part.js": "b4fc3fb8d0c770b01eab38ccf347acbd",
"main.dart.js_16.part.js": "8663376c523eb7c845724bc5321078f9",
"main.dart.js_50.part.js": "0adf374f6254314386a4fe57328f52bd",
"main.dart.js_296.part.js": "271df3d1bbfd100a2fa812493a99fb61",
"main.dart.js_103.part.js": "b0d5b2eb11babb700d1716b9d3045bb0",
"main.dart.js_209.part.js": "5a9031200b22e05377514bcf1ce1ac41",
"main.dart.js_278.part.js": "e7ea5b2e470b222c35d69010db34b2bd",
"main.dart.js_205.part.js": "15e091c463e5c7a122c10c7f85024144",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_229.part.js": "4bac0d54be4cdac190362b2c97ba98cc",
"main.dart.js_286.part.js": "4e9a9fdf5101188243a26ace961e248c",
"main.dart.js_54.part.js": "3c58c42575de18e19af45f9a17557384",
"main.dart.js_232.part.js": "1b9b246d13e53057cd363f2bf077b029",
"main.dart.js_52.part.js": "aa5fbf23a09e95a124ea49857f1bb8ff",
"main.dart.js_198.part.js": "1c355c113762fdc8d51e3266fd1f1fa2",
"main.dart.js_196.part.js": "e6aeb72fea707215d1d57f3f6eda778a",
"main.dart.js_303.part.js": "da59b2dee799d77da3baab637437ce22",
"main.dart.js_141.part.js": "30bc46a7e2048184632560d7a6d59e2f",
"main.dart.js_192.part.js": "b9cd67876e30c62ba452af6cd2cc8b42",
"main.dart.js_287.part.js": "b3970ea1d2ba5ae9c2e8664a8a7d13c1",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_7.part.js": "d014797cc18acc5aa1d7af7c16f34b1f",
"main.dart.js_23.part.js": "fb6b0c62f6be5e115dd01514eb323871",
"main.dart.js_154.part.js": "e33d6393753e7b95df249b0f4f5502d6",
"main.dart.js_68.part.js": "e0a05a00aaac12d28403f0fa162eb636",
"main.dart.js_252.part.js": "cd9ec5a2c48d198bf03c10ad1ee7f56d",
"main.dart.js_237.part.js": "70669612df68cd93b96aa8f5366afbfa",
"main.dart.js_257.part.js": "0d1fe33f283643882c419181ddfd9a3f",
"main.dart.js_49.part.js": "e1c5699377d85c4562e74d2a76fe9645",
"main.dart.js_142.part.js": "1f1347511e99bd2b7c9af07524f9d419",
"main.dart.js_290.part.js": "4b1c4d60ae06692e4177e18aa88bb33e",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_43.part.js": "0e9ec269f73b531ecec6fb87080b26a8",
"main.dart.js_97.part.js": "9c4753bedaa13b269bae82cf4f648445",
"main.dart.js_269.part.js": "0ddd064384e5f64295684d39cd90f25f",
"main.dart.js_67.part.js": "321fdf089f9bf301267b2bfa1da53622",
"main.dart.js_8.part.js": "44231bdcc3789eb36fa4730cc881e107",
"main.dart.js_21.part.js": "8a9b430ee01d63b2a801e2b8ca8ea2de",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_194.part.js": "4c7b3c5c1d44333fbfdcd04619447453",
"main.dart.js_93.part.js": "135effdd3ca5083ee7a2d63fd8b5c675",
"main.dart.js_186.part.js": "ca4577820fa108449faae45d3aa49171",
"main.dart.js_298.part.js": "59806c12290148c92b9f63a2c1fa4324",
"main.dart.js_66.part.js": "4bde1b330356238609a81ab53a936890",
"main.dart.js_64.part.js": "728fbeba8b9145c384b1a84ee3e92909",
"main.dart.js_176.part.js": "3ac91ff5b1c4e2ec524a3ecca1d8fe91",
"main.dart.js_285.part.js": "4cfab0ce8209b003b4ba500efbfe87ec",
"main.dart.js_270.part.js": "03024d225ff82c4af90940549dcfe510",
"main.dart.js_70.part.js": "e564f1ece9ed75477d9b86d8a1a45ba1",
"main.dart.js_46.part.js": "a1b495980b886765e59e97b2a4561a9a",
"main.dart.js_40.part.js": "40fdb2dc32df3af678c26816af5c17eb",
"main.dart.js_273.part.js": "1ebca0c9683239d67153faf242155c4a",
"main.dart.js_22.part.js": "d07cee3545c56f8d8a2a27e9b03baf2c",
"main.dart.js_191.part.js": "27ac708607fafacc9a33c2e7ea234c17",
"main.dart.js_163.part.js": "f51883437239ce79fced04bece26567a",
"main.dart.js_158.part.js": "b09183a32e19808c98ffea13881ddd7c",
"main.dart.js_255.part.js": "b9f729f3f97d784dca72aa4feddef4b3",
"main.dart.js_166.part.js": "ac0ac52d150c5d0abcd4153c68004586",
"main.dart.js_235.part.js": "0b1f0e6d76a9ef0f246309fe2e399182",
"main.dart.js_197.part.js": "038dcd0b2ac7f731cb170116e635631e",
"main.dart.js_172.part.js": "bc7dd9d5f9c8322244ee7eecdb23275b",
"main.dart.js_4.part.js": "8539e1158cb16ddfa9768d15660f3634",
"main.dart.js_85.part.js": "fcca8ef0c66a07f09473e40c561eb1f6",
"main.dart.js_150.part.js": "199fdfb2cdd3257b2b533758577ec7a8",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_128.part.js": "4c0032dc663494404259b9a0fa49fcca",
"main.dart.js_147.part.js": "a01327d9d69d59100b538a9419453fde",
"main.dart.js_25.part.js": "3eb00bc34d67f75b8349c8b6df618485",
"main.dart.js_200.part.js": "25c4445a3c1c8e478386cab55804bce1",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_90.part.js": "b30545b1ba45572c2920ba773e09f6f2",
"main.dart.js_275.part.js": "7142bf28b230b9d304e001f1011c7b24",
"main.dart.js_174.part.js": "26223dc162573d38a5be77cb56cd9ddb",
"main.dart.js_281.part.js": "19d07f19f4b92c7d6af7dc4d4e04aff4",
"main.dart.js_175.part.js": "6481435f1454cee586e2ca0b4c457d66",
"main.dart.js_28.part.js": "5ac3d576a04eb284809f7de9799ab9fc",
"main.dart.js_288.part.js": "8744d5c31e3e3a8d6fa2d111fa315022",
"main.dart.js_62.part.js": "8da52923bd574d5139a890c8f896abaa",
"main.dart.js_206.part.js": "9154e3cf39389d7c618aaed89b43ba0b",
"main.dart.js_29.part.js": "2e42da38bd57a1716a521db0d9c57939",
"main.dart.js_129.part.js": "3aac09cbc14dfd4a73bdce6f3c23634a",
"main.dart.js_279.part.js": "42df7df7117de25f902fdfd05d589fcc",
"main.dart.js_127.part.js": "1833cd492fe20e83fff35c8a19fce499",
"main.dart.js_133.part.js": "9be5c5bfaa642928774bdc1db808584b",
"main.dart.js_165.part.js": "d3c2a51bbf8ca0751de85b50fc6ff93d",
"main.dart.js_24.part.js": "3e18b8e23f7d74408321adebd2e8b53b",
"main.dart.js_253.part.js": "82387ebe22fccd6c1397b59964a4a4d7",
"main.dart.js_227.part.js": "ea5f281cd1546a6723b9f7443f30f54e",
"main.dart.js_218.part.js": "fce225428c7d26bc277188983daaeeed",
"main.dart.js_230.part.js": "3b1c7eb7bf8b8faba496aa2b7810e4bd",
"main.dart.js_74.part.js": "dcf4df89b241346c40de3a689901b2fa",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_108.part.js": "bb4ec8cf92d6b950ff90ec96dd4ee993",
"main.dart.js_203.part.js": "d1c7f1334bad116b61c3d26704a1fa28",
"main.dart.js_12.part.js": "393f5191f1662dcc6a64eec4c044e85a",
"main.dart.js_231.part.js": "419a8866f6f8af4604194f41a469a6d9",
"main.dart.js_289.part.js": "2621755f1365ed23dd288f9c4043a00f",
"main.dart.js_139.part.js": "2cad94597637d9c8f241e2db89b370dc",
"main.dart.js_38.part.js": "afce95bac3604c8c39bdf4014cf3633d",
"main.dart.js_193.part.js": "f028db8c4015ef8c869bcd3f2447f5c7",
"main.dart.js_170.part.js": "3e1dd47e656ba275532f0b7f2a8102a3",
"main.dart.js_219.part.js": "618b5d1c35ade10c8525603e4140dbf2",
"flutter_bootstrap.js": "82d4ea68dfd8ab4f3d1436f93d3567ec",
"main.dart.js_143.part.js": "3ef64caa6b4a4b80906534619064f6db",
"main.dart.js_15.part.js": "93b9d8b225567ba83e96a6e3e11f9f5e",
"main.dart.js_9.part.js": "fd0f969a0c7677c291b0814ac04279d7",
"main.dart.js_189.part.js": "74fdcda100f44085695ebfd0fe3ed1c9",
"main.dart.js_26.part.js": "950f313a2ba19f2dd0bc452087d11222",
"main.dart.js_125.part.js": "71020688e3cc9dd82f145fd5806e2b05",
"main.dart.js_264.part.js": "3a5212503bf004fa37d9588e19584bfe",
"main.dart.js_155.part.js": "8099d599d76c6b2c15b4bec83f615db3",
"main.dart.js_178.part.js": "f2b8e28cbfdb3c787bef364c409c519d",
"version.json": "4b6f0abd919a8d9f306c75a585fe67d4",
"main.dart.js_225.part.js": "5ca62b1ad53e67dc830e27cc9c329934",
"main.dart.js_293.part.js": "c4df4b629781880f2b95dad98b094067",
"main.dart.js_238.part.js": "b216357bce503d097d672c4470819fc4",
"main.dart.js_146.part.js": "ab5a79132503e44b6ef4234180ba76f9",
"main.dart.js_256.part.js": "e69dc87b60909554b49e55965252949c",
"main.dart.js_233.part.js": "b8c77d5ee304eb08c3a07c4ec112fce3",
"main.dart.js_221.part.js": "3e41857388cf4906f72d988852cb7396",
"main.dart.js_115.part.js": "bb2308fd533c502f5c8ba757b9bf96ab",
"main.dart.js_187.part.js": "63f9344204fb46a1b324fc5be206c1fc",
"main.dart.js": "893fe21b9ef0cd34f82c7298b6e94521",
"main.dart.js_159.part.js": "cf13ad8e6f75b0947850144c972836a8",
"main.dart.js_51.part.js": "bfb2ea1e9def3b8b4bd3d060e7f9a7f2",
"main.dart.js_224.part.js": "12add35b823e8da3c9bc0709450d390a",
"main.dart.js_6.part.js": "2250eeebca5e0a15452d2c7350b56e3f",
"main.dart.js_204.part.js": "d550ceb5fd0eeda8cbf8d2e4154bb79e",
"main.dart.js_272.part.js": "70b383f7eff09316167ae580af06f146",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_94.part.js": "71ec067456b57a26c493e004d615c926",
"main.dart.js_99.part.js": "aba2d47fa36b70c234f07e4b637a6827",
"main.dart.js_223.part.js": "156a5b803841cfd3940691bdc2e64c0a",
"main.dart.js_17.part.js": "b1429f765e0ffb1aa768e5723948ae7c",
"main.dart.js_153.part.js": "cca7b238776ba13f589109afcbe9061b",
"main.dart.js_86.part.js": "e5d8bac05fb3ffb137cf1b0af9a97983",
"main.dart.js_33.part.js": "33c62568cf7bc9a362b8f794098268d5",
"main.dart.js_226.part.js": "16efb415fa4357a83f1ab65307e205a0",
"main.dart.js_180.part.js": "72cc72a04a390b909101d343aa4a5c98",
"main.dart.js_236.part.js": "1b94c3787f51575053feae8f37411b85",
"main.dart.js_277.part.js": "c6a3a378e271591cc4cd857afd14a4db",
"main.dart.js_118.part.js": "94e05ead00421df02431ae31e01ee800"};
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
