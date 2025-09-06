'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_86.part.js": "9041b3511c31525bb1185e9a9922b87b",
"main.dart.js_210.part.js": "bf537c2a9113538f4d2d2c66b66357fe",
"main.dart.js_132.part.js": "3fe6aad211cd5ad7b0e1d6d52e403728",
"main.dart.js_300.part.js": "3a14569eb353b594e4f03a9fc369f284",
"main.dart.js_56.part.js": "b9d721569a06da0ce1402d03160e3020",
"main.dart.js_51.part.js": "daadf8e989619fd3d9ecec3aa4ae964b",
"main.dart.js_271.part.js": "8375375c08f241fecafbe38655b698e7",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_228.part.js": "f016f75b223ac7527e60618af05fb950",
"main.dart.js_151.part.js": "9f93e0c62de70ce4b4f014f6f3dc6b26",
"main.dart.js_257.part.js": "c8ce4a1196b46df39c3478a78ff47005",
"main.dart.js_267.part.js": "34b090143ecc238d86759c1b9e4654a3",
"main.dart.js_59.part.js": "bbe0e67b7eed2c0035d54a7cf19344c7",
"main.dart.js_301.part.js": "feee16f0ab278c853ae074a70c8713b5",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"main.dart.js_33.part.js": "d558d1db67fdc404e31034871e0c687a",
"main.dart.js_290.part.js": "e506381d6ff8b4119305b640557e38b8",
"main.dart.js_233.part.js": "deaa680558599b6f3b6d81498d30bf91",
"main.dart.js_124.part.js": "a310e3a00303332c233f8fb5e4bd021e",
"main.dart.js_72.part.js": "3c735ccc962f2f2838c5723f23ce7379",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_80.part.js": "c969f79085df074db38e808271db6130",
"main.dart.js_70.part.js": "5d230ffcbc096808d581e8a8f8974a52",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_28.part.js": "894009df110c49c6e1751db18a6d4784",
"main.dart.js_168.part.js": "e954ff20cf37466b3dc71c4014e8f9d1",
"main.dart.js_34.part.js": "01a01dd78572683012c9a2f80111e23b",
"main.dart.js_104.part.js": "40a321e60e60bb5daf8d4b1c7a62aa26",
"main.dart.js_49.part.js": "044785c4cecbe268e5777cad29655cb8",
"main.dart.js_275.part.js": "c01d956fd346d53dc40b86ab67ef0e40",
"main.dart.js_159.part.js": "7a7a018fb5c3a87c69322caf30b436ca",
"main.dart.js_303.part.js": "e4a954084d3fb466c7d256dcfebbd633",
"main.dart.js_129.part.js": "0602f606823d08b2c298c4ac98a0ed73",
"main.dart.js_208.part.js": "87b6143e993008dae62034d534a98eca",
"main.dart.js_139.part.js": "832c6425d57b176106ba2b8a26d52fff",
"main.dart.js_265.part.js": "326d3fedc5cb5fb5084924a9b727cd1c",
"main.dart.js_45.part.js": "b0d5458bb6372186ebd9ca6e2eb6c9ae",
"main.dart.js_113.part.js": "96fa28001f6a6d8e47c124242eabc66f",
"main.dart.js_22.part.js": "6c704ebd131b22b0eaa80f5306037142",
"main.dart.js_171.part.js": "d1c07268dda76a37009e6ebc704616e5",
"main.dart.js_81.part.js": "879c8a2d0236b3236aab426709e4e115",
"main.dart.js_221.part.js": "087833e7f360b3367b2e56c1b1bfcdfd",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js_187.part.js": "f9fadf12664d2d6759a3055ddc8c83ec",
"main.dart.js_134.part.js": "1b22fef34f3ff71138281f0cfa8b9a3b",
"main.dart.js_237.part.js": "c0fd2c4f96dcd7f7c05a095381fea221",
"main.dart.js_108.part.js": "064a35ead92ba0a831770a0e25a0b1b9",
"main.dart.js_234.part.js": "6a5044fb31ebfb90f6d587d2ab5d30d6",
"main.dart.js_152.part.js": "5e603f93b3260075d1e355d791b4cdbc",
"main.dart.js_11.part.js": "b4dd093bb21d8c7d415491c737a0bf71",
"main.dart.js_263.part.js": "b192ba8e86db99890ae5391ca0e5488b",
"main.dart.js_279.part.js": "d40d5678e859abd72b6aa2edb51ea00f",
"main.dart.js_240.part.js": "fbcf34cd5d93c21d9f11cd42dbc8b815",
"main.dart.js_150.part.js": "471145abc3b7dde1f24a6998686ef998",
"main.dart.js_14.part.js": "ac2fa08aa197f9644580c731d66ea06f",
"main.dart.js_288.part.js": "8ac2a4a3cd661429b6e35ddc7719d147",
"main.dart.js_6.part.js": "83c7be1825d7ec6437342821080f1b2c",
"main.dart.js_282.part.js": "03493780f3878513db912f9f7275686c",
"main.dart.js_289.part.js": "04c1ef058aa8f2fa78292fa0c235b051",
"main.dart.js_137.part.js": "8ba789a8f987a10fb3df89a97fc7146a",
"main.dart.js_283.part.js": "f4427f2f8663f90d9e332ea6607e8a9a",
"main.dart.js_37.part.js": "f0122bcb520fe5249213398a5f7c39ac",
"main.dart.js_126.part.js": "4ed323dc5e5a13aaa289eb196b94dbe4",
"main.dart.js_302.part.js": "6f4f7be2e0475c2ab1f2c00a852f0ff0",
"main.dart.js_158.part.js": "3c4cbbd16d5f1dbd04566efdd6349c20",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_13.part.js": "dcfcc5506f4f992028ab1d82c087e4f5",
"main.dart.js_42.part.js": "59c707d8e85d54a4bcf9f5d09b8bda9e",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_144.part.js": "68aae29c7981ca36963776edd7082391",
"main.dart.js_26.part.js": "7f0eb5bbe40ff0894fe164b7e9e2ed93",
"main.dart.js_259.part.js": "5eab633a444497215c800c88db91e513",
"main.dart.js_48.part.js": "7fdb272bbd8a36c2af09cc36b048ec4f",
"main.dart.js_269.part.js": "1c71ac5245d6233996cfd613a5a54e2a",
"main.dart.js_57.part.js": "cd243123ea7e52634ea88ce4c39f49b4",
"main.dart.js_120.part.js": "8243689865de785d386b6a50226d64d0",
"main.dart.js_179.part.js": "85e5153de605b39183733d6e4eee40cd",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_229.part.js": "d0df42e117dd25f67643609aa5244680",
"main.dart.js_106.part.js": "70ccd832b65b2c2995ede74b64cc32e3",
"main.dart.js_238.part.js": "1af391aad0560252192ec4afe061399b",
"main.dart.js_182.part.js": "97d1c448d174e8256ff574f8708d2bc6",
"main.dart.js_162.part.js": "a591a749c31a6351d2cab8fbed954243",
"main.dart.js_78.part.js": "d616949bd4bb720f3a49be5d06244280",
"main.dart.js_305.part.js": "bdd561faecce65385791d398e751884a",
"main.dart.js_192.part.js": "6c60bc9a3fe465eb7348ecb78861fabb",
"main.dart.js_304.part.js": "21628d630f444d5163af9f41195cbf52",
"main.dart.js_143.part.js": "899c6717c99d32c0848684362c2a069b",
"main.dart.js_112.part.js": "407c1bdec1bfe1d98dc7879dd097937e",
"main.dart.js_293.part.js": "a67ef8cddc0b4db02955952f2aed8846",
"main.dart.js_131.part.js": "08e968821c7c7e5fbee2751859a0c96e",
"main.dart.js_62.part.js": "63e9712cbf3eb4eef714b009e12f6885",
"main.dart.js_54.part.js": "dc381184b051991c5b81002fb1c040e9",
"main.dart.js_220.part.js": "1e035eb59d1451e7632ed55e056cd5a0",
"main.dart.js_47.part.js": "93d76d2ab2ab6d5e9817af015899c58b",
"main.dart.js_107.part.js": "cce8cd2c5199faa4d892b3a2e0997055",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_200.part.js": "313b0db95d3f9a2df9bf8544eee65cbe",
"main.dart.js_161.part.js": "85f1518eca70100dc6c4810896541a10",
"main.dart.js_292.part.js": "9976a229ebca10d6506bda3b36dde19d",
"main.dart.js_164.part.js": "331e6203a1e390808c43a310892c710e",
"main.dart.js_253.part.js": "cb836f08dcbf6e4396dc7ae91bbcbd49",
"main.dart.js_117.part.js": "d21420c5d2a5c230424a43b957b68c4c",
"main.dart.js_254.part.js": "03702a8f945a9639f951efa46a2056af",
"main.dart.js_38.part.js": "a28590c860efa32d4fdc2a6c210d138f",
"main.dart.js_30.part.js": "516af436f38d7ab56f6be4922c85995b",
"main.dart.js_195.part.js": "15409fa2a9007b647e6661b54dd35faa",
"main.dart.js": "4fc06476679564626e3b575065dba6e5",
"main.dart.js_204.part.js": "728a5d02080bfc66f081c32bff52bd27",
"version.json": "4a3244b5952c24e006076e8089b2335b",
"main.dart.js_274.part.js": "667ffb16cffd84d60b9059d683093fa3",
"main.dart.js_246.part.js": "090dbd615a8a456f5f0db5c125c912c7",
"main.dart.js_97.part.js": "6b1c7508c1fb547888179fd564bfc666",
"main.dart.js_3.part.js": "d0f7fb67b1e62936c2d95416719c5cfa",
"main.dart.js_1.part.js": "8c9901b0146162e3a46a2d237efa5530",
"main.dart.js_36.part.js": "332392a2a9595bce48e53b0e0a6c5312",
"main.dart.js_76.part.js": "2af21ddeedb31f684afc458b20198c2d",
"main.dart.js_211.part.js": "18b2860039ef160ea1262edfc55a8bf6",
"main.dart.js_181.part.js": "14314fb9304e266bfc35d4adee43475b",
"main.dart.js_123.part.js": "0adf52a3045685143ab8be9db7d679ba",
"main.dart.js_46.part.js": "975849c83a5e1dc4b6a0e96ea4c5ba61",
"main.dart.js_298.part.js": "5e035e4b790a47354a860c92ba6afdce",
"main.dart.js_261.part.js": "632b586842052fe9168ce0a0817dacd8",
"main.dart.js_183.part.js": "b0d92dae7f284334a6338b1742b6e8db",
"main.dart.js_31.part.js": "0843ed8f7a85708c5d7b211bca3a4e2f",
"main.dart.js_109.part.js": "3a639c2d8ba0ccc590d6c88af5021e6f",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_235.part.js": "141e8e25a3ead9a2bc891db6855d066e",
"main.dart.js_294.part.js": "c67dffef80439a2b0a92256e17e1268a",
"main.dart.js_98.part.js": "7d45fd86b9f68500e3a34052ff33e613",
"main.dart.js_39.part.js": "d861907f4b25a1b9a27797f23691d354",
"main.dart.js_249.part.js": "280593f38099c8a1a32011dee598841f",
"main.dart.js_60.part.js": "e31a309990b43026fa4c0f46fba8f78f",
"main.dart.js_27.part.js": "09292feaf937294313bd024ee450e79a",
"main.dart.js_73.part.js": "22c672facd6afcffa49827da4a1fec9c",
"main.dart.js_169.part.js": "d248975f8bacdd18d2ddca6f77aa8362",
"main.dart.js_284.part.js": "4ab8884de48fd3f6e5ac10fc8cc5fd9c",
"main.dart.js_130.part.js": "2a11d83da8716c92b54d39280e0dde4f",
"main.dart.js_199.part.js": "dce18d0600e0373181827eb1fa74a873",
"assets/NOTICES": "e2336a1b57dbc4d153a2daa165cf4579",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "2df4d48df3346dabc8d9beee76e3ef9e",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/en.json": "276a1e8a4c5b7c5a8427ba06ea5147f2",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/cs.json": "907b7e6fd93d60fd1ca52c2b420553e2",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"main.dart.js_35.part.js": "aaa960ff516ec1a8a70b024d9ed0c592",
"main.dart.js_297.part.js": "67fb3893112561b418cf33986928e2a6",
"flutter_bootstrap.js": "ea5c9968884c0c28aee868cc6d078c10",
"main.dart.js_163.part.js": "2434f56415ed99296758c2f74848fb19",
"main.dart.js_69.part.js": "cec383689bc1e7a0de067ed11bc1fc0d",
"main.dart.js_85.part.js": "392f52437c4c0f19586d62465fdf3e7f",
"main.dart.js_242.part.js": "00062da78fa4128c50efae2f087a52e6",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_77.part.js": "f57b50949bc73da8c1e659fa0b0136ad",
"main.dart.js_172.part.js": "ae032675ecaa23892a5922bc19214d30",
"main.dart.js_94.part.js": "09f518d6aeb884bef67496e445b91298",
"main.dart.js_173.part.js": "768b9cd0b5e0c8c81323083f608b2ee2",
"main.dart.js_17.part.js": "48da478f4a140cbeffa363b141fb651e",
"main.dart.js_223.part.js": "fca5eb4f6837b64e971a53440fcdaf95",
"main.dart.js_277.part.js": "bb7c043a73dbcf9a9546638db12be68f",
"main.dart.js_214.part.js": "00338fe720d4ba386a15093dc2168fc7",
"main.dart.js_276.part.js": "7d682aad82850508eecb8d878e747626",
"main.dart.js_25.part.js": "49a091bba42acd29942a747905a96286",
"main.dart.js_166.part.js": "ca2bbdc1594256223918231e9c0492c6",
"main.dart.js_83.part.js": "b6241a18692ddd1562d03bf187490d99",
"main.dart.js_244.part.js": "fc9052f414793771cd1cee11210f9b96",
"main.dart.js_43.part.js": "62790a679b491289d84d03cb7f12fb20",
"main.dart.js_68.part.js": "c1727dcf1893319346e7d1bab98fec93",
"main.dart.js_264.part.js": "d5bf8fe47e3413e658a045c1fa811999",
"main.dart.js_191.part.js": "fbdd35204fe6b426b01c89d6e01fd62a",
"main.dart.js_180.part.js": "e556c980f672954e669ce8232cb2ea73",
"main.dart.js_8.part.js": "b061ee1d343a2e804e49240aadbb2b3f",
"main.dart.js_142.part.js": "0d89cf0a38b0b3da233f885252b27b0b",
"main.dart.js_219.part.js": "43d9f48855c6217ded926b18195637ef",
"main.dart.js_184.part.js": "9f9e26d4920e91436a107bcec7aa2683",
"main.dart.js_4.part.js": "9340f23fb242e3856f11f2dc912ff6c2",
"main.dart.js_7.part.js": "8ee1a0c416e1db8679a94e32ae6c104e",
"main.dart.js_71.part.js": "0959fd392a97d58d59cc8e2b971a4e8b",
"main.dart.js_286.part.js": "f5c34ce5b12cd7511e80ab3fb0f41087",
"main.dart.js_165.part.js": "4c82d8cb6c6776016109ff57b92d8671",
"main.dart.js_196.part.js": "dfb7590f6a94762a41f452318880d064",
"main.dart.js_197.part.js": "92e812d66d07b6e4013534405c6dcccc",
"main.dart.js_99.part.js": "d56f1698379aa4e712c6a9a1a463e069",
"main.dart.js_256.part.js": "ca02e321014dee1215568c1ae25a9d23",
"main.dart.js_193.part.js": "79e4a35ef9e7d4099eb6fa7bf9be35ab",
"main.dart.js_281.part.js": "ecd62ee472c7f6e55049adb4743a5b86",
"main.dart.js_15.part.js": "090a3e958db4dcceb292cd85f2ef8c14",
"main.dart.js_100.part.js": "c66a5453373affc699a5d73766428639",
"main.dart.js_268.part.js": "677db14aee5c36b5da042992d7798539",
"main.dart.js_291.part.js": "de9cbf7429d818da308514ec22f0a0d9",
"main.dart.js_177.part.js": "c55c4481d66593bfa88d9fa391699015",
"main.dart.js_255.part.js": "e25aa18da52091fc1a15f2ae903e4c83",
"main.dart.js_140.part.js": "6ef9fb8ba864888f168b20134e559252",
"main.dart.js_226.part.js": "890b05accea132824a7e75c81535cc9e",
"main.dart.js_93.part.js": "47b10fa86910033fc6a5f32712b5c272",
"main.dart.js_128.part.js": "94ae706763c6f67c597c045fef0dc77b",
"main.dart.js_250.part.js": "5c0bd4fcab8cfe83a0beb08eb27a4df2",
"main.dart.js_32.part.js": "934ec297ec7959adc62477adf0ce5317",
"main.dart.js_266.part.js": "80a9f485c11f98f57ad200c01e0d47bf",
"main.dart.js_157.part.js": "e05b8d44676ca26260d058c5c1649415",
"main.dart.js_239.part.js": "0b4712b5740cb7617502813ee44c5c91",
"main.dart.js_176.part.js": "4d2d6f7cda31fb713cca08851953f341",
"main.dart.js_278.part.js": "482a1f0b5f7615917d000e99c0c9d5f6",
"main.dart.js_241.part.js": "b04eae6283f83b71d04ff3c86e47a337",
"main.dart.js_82.part.js": "71f559e3f5559af59224fb2143d36025",
"main.dart.js_299.part.js": "1d7c079047edece0195d49d71852c70a",
"main.dart.js_16.part.js": "eca4a131623d5246b227343508adc358",
"main.dart.js_222.part.js": "2cb6677480fcd5c60b9c2aaab5edf274",
"main.dart.js_95.part.js": "3550ea49a8de442e6881a38a8f25064d",
"main.dart.js_24.part.js": "9120f3322e855924ed35f11a69df0319",
"main.dart.js_201.part.js": "c5ac97a1626398a4f9842785aef6adec",
"main.dart.js_251.part.js": "cee60cfdf24a30e680986b0093c2eba5",
"main.dart.js_118.part.js": "7d1b752ecb092b5aa66937a05921fbcd",
"main.dart.js_110.part.js": "3ea5002ddb0bee959233fcd867ee7c1c",
"main.dart.js_111.part.js": "cfee55ca52dabfb531f7ab7ec16c5a8a",
"main.dart.js_75.part.js": "0d234bb46cc932d0b22797c9da648e2b",
"main.dart.js_84.part.js": "7ff088e44d978afe0032662574305950",
"main.dart.js_20.part.js": "c28c380b2a4e74cafd6288e9d6811640",
"main.dart.js_155.part.js": "02bb9bcba29a2e694024f4ddaa48d91c",
"main.dart.js_153.part.js": "47ece3dd7e5b07af2c96797554859aff",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_40.part.js": "73d709d5de8b7affbe1e66de365f3200",
"main.dart.js_138.part.js": "bd04ca7f4a8a850e3531b9ea403c6496",
"main.dart.js_248.part.js": "01bf94f1fcf4d6c547a5ca87cabcaeee",
"main.dart.js_133.part.js": "94b556fc815c6674ad30566dabb23e98",
"main.dart.js_236.part.js": "60e2245d33881b8baa246282036b645c",
"main.dart.js_105.part.js": "59f091ebd5caa1c7ccd5367d4a2fff18",
"main.dart.js_245.part.js": "29d5847a47d9800dd581c0f36fad7ec3",
"main.dart.js_149.part.js": "355055fc7082a1d768bc16d37e048a89",
"main.dart.js_91.part.js": "325ae4255ead1c0e8c9fe4e2f0eb2f42",
"main.dart.js_88.part.js": "8dbdef7770b5dad4a44a4ad8b60176ed",
"main.dart.js_194.part.js": "880f4ce927e3b57e9abb5f0078ff19b4",
"main.dart.js_285.part.js": "3386215c6802dc2068c6585db5fba62e",
"main.dart.js_188.part.js": "bdd76bacef4438226576a2ecb8341bff",
"main.dart.js_170.part.js": "c5611b743844d5b48d8ebbfb088223fb",
"main.dart.js_227.part.js": "f1fc169033143ac2f030e035eccc440b",
"main.dart.js_122.part.js": "b1a1f853a6e88ec9af31dbaee73698a2",
"main.dart.js_207.part.js": "e2a9748da9e028f20f4193e4fa3f7e6b",
"main.dart.js_175.part.js": "4de842d73a6ec09effee0ecc5140c272",
"main.dart.js_92.part.js": "03f4ad741f81ec99073df73a1dae3fa8",
"main.dart.js_5.part.js": "5afec9fcf753fc0fbf9cc4bfb11a7286",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_146.part.js": "50378cb0bf0839eba80047e2c8a1da68",
"main.dart.js_258.part.js": "c562ac8822fe7d43824d01aaf11d2a09",
"main.dart.js_295.part.js": "c05d5eb8b652e1c7aac1d54f067552fd",
"main.dart.js_206.part.js": "d278d9fd008013e26ed551c09cc87e8b",
"main.dart.js_307.part.js": "4686dae88bca8040a9eeb423d5af8714",
"main.dart.js_103.part.js": "0b55f0ac0808abaa278a995bd257af70",
"main.dart.js_10.part.js": "ea8f7d85e84df357bcb7739205e76d12",
"main.dart.js_145.part.js": "f69610320989f0d1bd124b839aa1a053",
"main.dart.js_23.part.js": "b9b41c36d94efbeec44850a9f49e95ac",
"main.dart.js_41.part.js": "34bea71cbb5e776bbd197fd7ab141727",
"main.dart.js_203.part.js": "416f3e51066e42c74ef6f33383e853ee",
"index.html": "26fa7321221c48d7d008fd3f67e9fe17",
"/": "26fa7321221c48d7d008fd3f67e9fe17",
"main.dart.js_9.part.js": "478956087308e4177b0b0d771dd6697c",
"main.dart.js_55.part.js": "66afa94647ea519e599f2da6f61e923d",
"main.dart.js_230.part.js": "938c8e9bbd2a6651627bd181680582f8",
"main.dart.js_225.part.js": "4d6597314a7c6af064f11906f6f6a058",
"main.dart.js_306.part.js": "d88a625c0994821abcb02dcc0d409b17",
"main.dart.js_12.part.js": "d36cdb98b9c2c920f0fff12851f8af29",
"main.dart.js_29.part.js": "e3b1121b05b680047e3df1d6b0b4d1df",
"main.dart.js_178.part.js": "e35e304c37515f11efdc2c74d9facb34",
"main.dart.js_262.part.js": "16ff1aec1a7e45b1e043f93bf0edab25",
"main.dart.js_190.part.js": "69788cfb664b84a534f7d24c41e2ba7b",
"main.dart.js_67.part.js": "9f64fd29e24c31b933bf961c3034d203",
"main.dart.js_53.part.js": "db6f62c682665e7437277f55bb0d2633"};
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
