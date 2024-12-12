'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "a8c80f215c37c4e0468195e2676be53e",
"main.dart.js_182.part.js": "8c56b849abfe301ca77f391f77f0ffe6",
"main.dart.js_244.part.js": "092e08a1f81b7468c956fb79c999a69b",
"main.dart.js_289.part.js": "340f48ca9c4ca0cee0ab8658403b85e2",
"main.dart.js_83.part.js": "3e10ada8336cb2ca5562aae0ca98bf63",
"main.dart.js_176.part.js": "8ffafba2dff9cf155a83e89a262d2804",
"main.dart.js_96.part.js": "2bd3f592010f772da7c5b55dd9b49ed4",
"main.dart.js_87.part.js": "71e3cbc98076de5c734697deae66490c",
"main.dart.js_285.part.js": "1ed247d9b54e5341ae77c0d4e6e18635",
"main.dart.js_251.part.js": "d90a6b770068a9ab652e19dfae1ff204",
"main.dart.js_126.part.js": "f8a67aaa6f8899a70666bbc59b0d74d3",
"main.dart.js_129.part.js": "8d91d9600bf8783c3199c5aa5a28e1c5",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "5d077f8c914565dd79aa5615234a0521",
"main.dart.js_218.part.js": "42a5f126b825827e07619288f0c9c551",
"main.dart.js_172.part.js": "22ef46ca22f4a8bd0cc95e4155ad8e91",
"main.dart.js_40.part.js": "689c1cd74cf7fb63fb044843dc737f05",
"main.dart.js_48.part.js": "20d902191cef489393fd93eae731ccea",
"main.dart.js_115.part.js": "63c2b6f5b848e97c76b5a3c9929fdda0",
"main.dart.js_10.part.js": "deeaff70a96516a04848d4e57e8d5702",
"main.dart.js_84.part.js": "339d18dc337ec7b3e873caa4416d9b29",
"main.dart.js_122.part.js": "e0c5737f6434c1c82939660802a710c3",
"main.dart.js_103.part.js": "1a9e6575791d7207c583bc46081e1682",
"main.dart.js_230.part.js": "1d9338d1c76c5532043565ece4141a93",
"main.dart.js_153.part.js": "b7a55aaa68b6f4499f09f9e9ca172f40",
"main.dart.js_89.part.js": "2446f4b28a9b808a08a13a64fcd6b93d",
"main.dart.js_146.part.js": "1fc685cefe4e87d02aed085f739caef4",
"main.dart.js_37.part.js": "74f1e111bcfab16217dfb42c385a1a3e",
"main.dart.js_287.part.js": "f590fd6f5a33aaa3f4b347a459fc115f",
"main.dart.js_283.part.js": "37d392f6e6df680de55a443967c02734",
"main.dart.js_132.part.js": "232635b2f0902f3b7d633fb190830f83",
"main.dart.js_282.part.js": "c6a75f605e731b0430ccf298c79244b9",
"main.dart.js_127.part.js": "8eac3d00977ebcbd14066827bf7ffef4",
"main.dart.js_175.part.js": "aeb4b75dcef206992b59a9db9e5e917d",
"main.dart.js_239.part.js": "8a6bb0c371b4c22904f794e57f893d23",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "e140a548a24571321291e7e5a131fc9d",
"main.dart.js_216.part.js": "2978f7445bd15d990c9ef5375c021e07",
"main.dart.js_169.part.js": "e468865abe8f43e73dd725cf58d81b9b",
"main.dart.js_13.part.js": "4b05deb94f3b66060ed6518532b80c59",
"main.dart.js_174.part.js": "56c851b170f53a0f6ee3fea8e669ae01",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "229b8829bcec91bf972ada874fdd74a3",
"main.dart.js_144.part.js": "953dfd374a47e8aaa9507c53e89046e4",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "71bc94bac09662185ed10645f16c9255",
"main.dart.js_265.part.js": "5a7c9a2aa19da5d7f3ac786421cf52eb",
"main.dart.js_31.part.js": "019558ef66e2af3e941bbb7ba326e976",
"main.dart.js_294.part.js": "3b3c2870be45d5567510198a114208ff",
"main.dart.js_18.part.js": "68c59663df4ebfbfd633e9ba2beaf8f3",
"main.dart.js_35.part.js": "e45ac993adb1a1060cb4bfc2759b8983",
"main.dart.js_101.part.js": "ba6a6c06c3e7aa742c12b9c15b2257a1",
"main.dart.js_77.part.js": "5307d1af6d190afddfad91e0cdf06ca4",
"main.dart.js_149.part.js": "685e503f6e432327997a782eec7efbe7",
"main.dart.js_67.part.js": "c4a8cdda50c03822844c861154b49fe9",
"main.dart.js_82.part.js": "67ed246599423aac514bae06d24e7b75",
"main.dart.js_173.part.js": "54f83502cc3667d59154b3c1af5c04c6",
"main.dart.js_291.part.js": "edb9f2d7b800b61571cab897299f7243",
"main.dart.js_106.part.js": "38a27ddb3a4414b39398265ad3d4b120",
"main.dart.js_273.part.js": "077fe904197851bf475d3edb82aa0644",
"main.dart.js_62.part.js": "0b12bb844b6885912bcbb6057f9d6601",
"main.dart.js_259.part.js": "0854184539f2919c69a107a5aad8029b",
"main.dart.js_278.part.js": "6e389ef56a9b76207fb996f8854e99f8",
"main.dart.js": "45c9aed6d9adc71a8b7de55441e5c374",
"main.dart.js_222.part.js": "f20a3c35c7e9df01d6567ab65cdff737",
"main.dart.js_232.part.js": "391fc78f8bd74f712de2a709c57812ee",
"main.dart.js_148.part.js": "cd74a1e29158e8cff22a59fdf0c0987c",
"main.dart.js_293.part.js": "5bbab74ac6dfd4f94b57f7943e5e70a8",
"main.dart.js_124.part.js": "47ba5a7526838482247f2b82399da28a",
"main.dart.js_50.part.js": "990a5a97b1ebba1bb4e8f2c38a0e6b33",
"main.dart.js_97.part.js": "1a6ad8a544ed73817ebae1efee6c40f9",
"main.dart.js_91.part.js": "97c1da7b5e43e2c31fe0925695972342",
"main.dart.js_145.part.js": "72582b0c57766c10606d798edad6ad2f",
"main.dart.js_57.part.js": "1fc4783b5210fdc7fa579438378dc5d9",
"main.dart.js_104.part.js": "21baa9cdf3c353a604657908b6766e5d",
"main.dart.js_201.part.js": "b75699f6a30cc664675b950df8f186c8",
"main.dart.js_181.part.js": "6ca350fe1dc6d418182d61bf4d12a701",
"main.dart.js_270.part.js": "78abe89aa28bc1bc411d957b0f4c2b10",
"main.dart.js_108.part.js": "cf14cab4732d3b8c53de893666086eff",
"main.dart.js_158.part.js": "aa414b00a9feb226aaaadd932ac19611",
"main.dart.js_33.part.js": "5126aea37e1cd689088de40fe52651b5",
"main.dart.js_269.part.js": "4ac18ef1e8d0947bcf3a19e73a05cd04",
"main.dart.js_34.part.js": "f62ccbf4951692f3b575954c502aef7b",
"main.dart.js_210.part.js": "8a160375d4eaa8217dda4f161b1b5b22",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "4df426566aee42fe5c95d4fbd5d3835b",
"main.dart.js_88.part.js": "313cfe01bf9548d8b2c880aa6a01e608",
"main.dart.js_202.part.js": "5320ecc19d47d965cf4536dddae4adb9",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "bb7b3cc6d129fb2a02a8db3ae2980b03",
"main.dart.js_247.part.js": "7988abfc6c2bab8c05d6d9a6050f41eb",
"main.dart.js_7.part.js": "a3ef14a742f52aefa4a6176b8bbd141b",
"main.dart.js_140.part.js": "69efddb50220c61ee4158da4804f40e0",
"main.dart.js_170.part.js": "befe5a8275df81dd8e02f322e31c75cc",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "b69a47b59f4e1d1ac35989b15f687611",
"main.dart.js_27.part.js": "b9e733c7142d5e263d845e8b68e12a53",
"main.dart.js_156.part.js": "5fdf7d23d1c65bb42fdb5f01f077e9c6",
"main.dart.js_4.part.js": "d64f2a473b6e9b105d4e78926b817502",
"main.dart.js_298.part.js": "d9bcb3f99dfaea71fc7f5713a1b42db4",
"main.dart.js_219.part.js": "b35b976d48b6a1467925c09de58cc65e",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "39db6d4a83b81aae205c2c1e63ff128e",
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
"assets/assets/translations/uk.json": "7f8e394226cd7667b3671a3e3cee5efc",
"assets/assets/translations/pl.json": "67e4fad90546fd73760a99e253b9bde0",
"assets/assets/translations/sk.json": "8bdc79873b5db8f71d80926134b4b237",
"assets/assets/translations/en.json": "7780a8365b8670f4ba358b1842c09ad7",
"assets/assets/translations/cs.json": "88a1e80dab71c40883b33b814fd87f5a",
"assets/assets/translations/de.json": "d8339af262142bd3b7583326d693f3e6",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "21092cee812eaca83f55eb5e54aecf0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "8ec227ed2450b36e64bc733d1efd6fc3",
"main.dart.js_147.part.js": "f5df094b40e76703ae7a678c3735dc43",
"main.dart.js_60.part.js": "08ae4ea0dba8946a4c51b5a963f6f64e",
"main.dart.js_263.part.js": "172e9cfaefc586b4deecfcf392ad70b4",
"main.dart.js_220.part.js": "4d4c50dceb7454a8fe3b94be040ad173",
"main.dart.js_25.part.js": "44c4fa77b6e341913b2f51ae27821a4a",
"main.dart.js_288.part.js": "abfcdaddd9393593685c975cb04e6810",
"main.dart.js_141.part.js": "ba3b714a102af0b9ddb32575bc2384aa",
"main.dart.js_249.part.js": "71f75a182200f1c2eec402335e65bdab",
"main.dart.js_123.part.js": "5cdacd6aea3121a8ae30edc0e19d63a9",
"main.dart.js_268.part.js": "98151cf99f967fe80102f7451e4d950d",
"main.dart.js_8.part.js": "c876788ada4888ee6b60e0ce21f8ad62",
"main.dart.js_198.part.js": "e1a41a0c51878d2e14d8d31e00714ac3",
"main.dart.js_81.part.js": "ae611dac27acfc4691bae10f9e5dd1b4",
"main.dart.js_113.part.js": "a7816a66203fd2f258d0cda64e6e3f3e",
"main.dart.js_280.part.js": "fdc0d1eac76df2bac1f60429dc7660cf",
"main.dart.js_9.part.js": "41aacc6e03be8f8ffddafe45ffeb54b6",
"main.dart.js_99.part.js": "8d69a2ba0294098044067844a9f0644d",
"main.dart.js_22.part.js": "dd1baf2b89f9a0463d4a99325488ec3b",
"main.dart.js_272.part.js": "caff6e78b1b6abf06f8ec8822f590190",
"main.dart.js_242.part.js": "e8d4a811b7f9290201b5b22819bb4999",
"main.dart.js_86.part.js": "f0189053fddf62d54388caeec472489f",
"main.dart.js_23.part.js": "9694449fe90525a8f51dd59765c9908d",
"index.html": "06c628b06c50640193bf063fd929dcef",
"/": "06c628b06c50640193bf063fd929dcef",
"main.dart.js_94.part.js": "37bd74c3b2ce829cf61df5a7b7aa56c5",
"main.dart.js_98.part.js": "c1cb2b0001ce6fbee2f63ead656534ba",
"main.dart.js_53.part.js": "9adac9bf6b99aea9811b4fbcdc3c8000",
"main.dart.js_74.part.js": "82c78ddcdddc4ab01312ef51b3709bc0",
"main.dart.js_235.part.js": "c8051ace4eb80ec3e048e2ede7e14940",
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
"main.dart.js_286.part.js": "d3afe9f5eb2734e3c00bebb0c4cb8b07",
"main.dart.js_118.part.js": "b93f9abf5b867fc170887a88ad8efdd5",
"main.dart.js_262.part.js": "c81a6ef176d1a87112fedfdf9e2bddd8",
"main.dart.js_26.part.js": "2c2b37abd930d6f0b58b61accef7447b",
"main.dart.js_240.part.js": "8975822130f0f3e8fe2d2e669573364d",
"main.dart.js_20.part.js": "cdbd6a59183992449fdd4d5c94afc070",
"main.dart.js_214.part.js": "6c86a7624c36135314d893208fecfcd6",
"main.dart.js_51.part.js": "6e560b1b7a411286426b950699208214",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "eb999d84ccfc526a3d190dcb6699ccf3",
"main.dart.js_290.part.js": "f1758faff18ac6579b525111d1e2f9e9",
"main.dart.js_1.part.js": "77e8f7e2988326be253197974ee3acd2",
"main.dart.js_120.part.js": "b34c4f2f28d467124a5f253fdb9c1292",
"main.dart.js_63.part.js": "7162e217f6953b109dc99c509fd9635f",
"main.dart.js_211.part.js": "4976763cf0aa179bb98332dd0978a1c7",
"main.dart.js_295.part.js": "cf156b47180ccfb65547f0a5925dd6e3",
"main.dart.js_12.part.js": "fc778cd312a2ee39619a2114104066b7",
"main.dart.js_157.part.js": "8dba90f40b63f4edf6d653b9697a6917",
"main.dart.js_281.part.js": "2753d2da46c3c6fb702b6635d804b4c8",
"main.dart.js_137.part.js": "5619acdff3c4330772ec706d85f9fc28",
"main.dart.js_276.part.js": "7b5a3bd033d5f6558e0855fbd46b2db9",
"main.dart.js_28.part.js": "811109e8f3a96a7b5038e503bf3a4be2",
"main.dart.js_135.part.js": "7d9af07229a8573230fd313a446c24c1",
"main.dart.js_256.part.js": "c5d4353f090390f7ceb00f5edb0f90aa",
"main.dart.js_237.part.js": "4a6f5425b7234ba221c2d9a2bfd0637e",
"main.dart.js_193.part.js": "cd00794c6b62bf4fb09a45d51b29ed59",
"main.dart.js_17.part.js": "cafb6aa881d560d46e2891791ae0ada7",
"main.dart.js_105.part.js": "548246c9a65afb2d38e087e75f2d4189",
"main.dart.js_206.part.js": "e3fad5c5458ee1f6206a24eb83d43006",
"main.dart.js_231.part.js": "8d9bcf8fb034d232e80baca776ac4481",
"main.dart.js_43.part.js": "a317d6221b05a25748256ca68097507d",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "e06e2f3345c17aafc45f0480640e55df",
"main.dart.js_292.part.js": "2912f3cb68d3e124e5b68bf5da8d9885",
"main.dart.js_15.part.js": "60ca77963c0286974917c557a0b8a304",
"main.dart.js_19.part.js": "0e0275743d2f8e02f1f2ee8204e5f3d5",
"main.dart.js_284.part.js": "a13210317fd156a64bd7b90f8d352b3e",
"main.dart.js_255.part.js": "48c1f84a8cfd7f8aab30eed004c1178c",
"main.dart.js_186.part.js": "942619942a898d15add18c2b4d477bb8",
"main.dart.js_163.part.js": "7f60aca9cb9bcd6bd60de445ba20c84d",
"main.dart.js_154.part.js": "ca05e7b90879b0b87f46bdc2e47e41a7",
"main.dart.js_257.part.js": "5666475a237fadce1ae9f4626bd0f1a8",
"main.dart.js_16.part.js": "0850a3d58d0c3d006565af173d5e9270",
"main.dart.js_250.part.js": "7380977b4240cd6a028c182f07c22767",
"main.dart.js_36.part.js": "2f1774a7cce9ffa9507a4328b4f45ab1",
"main.dart.js_199.part.js": "d040d19c416c87cded725ed60b124984",
"main.dart.js_130.part.js": "b5423eea381da6b42ae60ca00c406ed2",
"main.dart.js_238.part.js": "cebb61f2b3ac6ca55484e536e2b52a92",
"main.dart.js_152.part.js": "a36930508a0c9fb4a38122b0635a2a8a",
"main.dart.js_32.part.js": "59cf605a805e3439a89a50d8cd69fa16",
"main.dart.js_197.part.js": "f5b7bc7143fd6e136a02566bb8b8d972",
"main.dart.js_56.part.js": "2f7c279a5047c7f521fe755a7c1e114b",
"main.dart.js_227.part.js": "2df228badd9db575eed22b3e30b86755",
"main.dart.js_3.part.js": "f9643bf1fbde3971dc76c29d7fb662d5",
"main.dart.js_68.part.js": "3f88f699845dfbe2f8580d7bdfd1b1e0",
"main.dart.js_248.part.js": "fe303c803aab87c5f3a76f6e1516d9da",
"main.dart.js_133.part.js": "25aba6f01d584fb4509bf9fbb2b2abd9",
"main.dart.js_188.part.js": "c8b615ec2614976fb66abfecdb81691e",
"main.dart.js_204.part.js": "2d2212bc8297f32f14ba48fb3644e42d",
"main.dart.js_24.part.js": "a414c88504863f3cd5d81e669d8a33ed",
"main.dart.js_90.part.js": "8e5113210a02b9601c8766ee5a1e2c03",
"main.dart.js_177.part.js": "4ea5e5099196b14706e57b492271721f",
"main.dart.js_299.part.js": "5daf6790e90bdb11d78844a874192f02",
"main.dart.js_85.part.js": "a66433ef33b0863612970459ea9f00ef",
"main.dart.js_243.part.js": "86a2d192d2edf952010674ae4dd61b1e",
"main.dart.js_212.part.js": "23a9e93f09ef8c8a5266680cc06d86e1",
"main.dart.js_260.part.js": "8e801e24db4b7f4618e2c58076ac3102",
"main.dart.js_114.part.js": "30bd20e11b3443a429e0b75b963788c2",
"main.dart.js_39.part.js": "d8ac9601ed937abd2f94cc2282cc71cb",
"main.dart.js_49.part.js": "3dfc587151f63076afcbcaec097e725b",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "5c905037432ccce55e96bc83b1393c9f",
"main.dart.js_195.part.js": "543496a911cffb97c6f89924e695531d",
"main.dart.js_121.part.js": "16f8e2c5f2c04a7db3ae17a0019c6a74",
"main.dart.js_215.part.js": "c619798b4af8b9fa42862a059feb44d8",
"main.dart.js_112.part.js": "4c47ef434bd04efbbab7cc46c86acf57",
"main.dart.js_139.part.js": "744085f971b64624448a54e0787f6e71",
"main.dart.js_143.part.js": "fb744645f98d7b68612477bfdf2b3f09",
"main.dart.js_80.part.js": "08ded08ce8f8e50afd714457211c1c7b",
"main.dart.js_279.part.js": "65c2c6f53a86a4110f48ae152e972f34",
"main.dart.js_30.part.js": "5d9e08a9989c92d6206a533145b3f870",
"main.dart.js_267.part.js": "d3c9f604abc2755e9a9d389983302b10",
"main.dart.js_277.part.js": "edf39d25993a3ec96fa66b77bb7ca6a9",
"main.dart.js_136.part.js": "45b59ccb05419910b1b3ddc30084a2ba",
"main.dart.js_168.part.js": "f129cfb44d914c02d62ef96dd42e9621",
"main.dart.js_271.part.js": "54ea0298e8384a377dd2dbc0efa8b147",
"main.dart.js_59.part.js": "8d86ff85121e60fc2f25c3ce4922d842",
"main.dart.js_47.part.js": "0f48a856d865b2faf623f7a6e2fe4a9b",
"main.dart.js_95.part.js": "e2fc19adc8075b216e0683ec9d4217ef",
"main.dart.js_107.part.js": "691ece58d8df3f0c471b9c90e461a832",
"main.dart.js_29.part.js": "bd16dc5fa44bec50948438db598f2919",
"main.dart.js_236.part.js": "825a46706f0aa4196f930f79e7399379",
"main.dart.js_58.part.js": "f6e8cfddf0bc90df5dabf4b5b890edc4",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "43d5675a3d51357b17df7c378ff553fd",
"main.dart.js_79.part.js": "56680643485a4e9213fea0dac597cf4a",
"main.dart.js_109.part.js": "695f069075a59c2b3e258956fa014652",
"main.dart.js_92.part.js": "5e7558d8eee9f11862aad81ae625094f",
"main.dart.js_224.part.js": "159176de119d69b63d831120cbfaa037",
"main.dart.js_93.part.js": "b87da9e15770ba50ed6ef73fa8dcc6ac",
"main.dart.js_223.part.js": "b252ef14c97975b0d2f74c70553c38be",
"main.dart.js_11.part.js": "0fafbd735c1372bf3b70ff90cac2c9fd",
"main.dart.js_125.part.js": "44eedef8b93fd9a8a7bea73df9f89471",
"main.dart.js_131.part.js": "d8628ecaed010d734359b5b79999ac7b",
"main.dart.js_226.part.js": "50c48afad02e30a0312c7757c9233c6a",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "6fa2e029963bcb590f7593c82f3cee77",
"main.dart.js_178.part.js": "6beb99b464179ad391af4081301464a2",
"main.dart.js_258.part.js": "65a30a1f15a91be5abbabf683d915bd3",
"main.dart.js_297.part.js": "70e101717ac52ad937870230a4b39c27",
"main.dart.js_70.part.js": "bff0fca9c165d7aee5490da0741599a5",
"main.dart.js_187.part.js": "4e36661dd21c9e26d0a76d88d5237010",
"version.json": "3bd689998d350c4e5d0e45b5117f2cf7",
"flutter_bootstrap.js": "6d91aa89e94ff7e9a648c92c9c6fa2ed",
"main.dart.js_191.part.js": "4d7e09ed3d7ee5308bc339bee527f7f2"};
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
