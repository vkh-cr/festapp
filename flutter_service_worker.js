'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "f4d812eafdf1a6a1a5fbc57dc14fd15b",
"main.dart.js_117.part.js": "7224a953cc617d45eecd6b78a15ee331",
"main.dart.js_182.part.js": "c3685429492bfafe5fc0cc14f108e910",
"main.dart.js_75.part.js": "1b1835d39fa4948d42ed7cfa9ef20db9",
"main.dart.js_244.part.js": "6d526db570e4355f44c4c7936621febe",
"main.dart.js_83.part.js": "ef48dfec4d89dff62880422e97eb989c",
"main.dart.js_254.part.js": "3656eae3d0b3b456adf81936ffc641f0",
"main.dart.js_176.part.js": "671afe8955bef9829e5d11e5e22afde1",
"main.dart.js_96.part.js": "3170b35be2309cbccc0a56b7e8260ba6",
"main.dart.js_245.part.js": "6f3821a34c87915acf2fa0609d482eb6",
"main.dart.js_87.part.js": "7e161cc3556fab7de5d89f12bb557a06",
"main.dart.js_251.part.js": "1714993dae8cd8b0995d284627cfa8a4",
"main.dart.js_126.part.js": "e3a52bcf41edbca5fee3e2627ecaa7cb",
"main.dart.js_129.part.js": "320cb238fae842f64b7303854ab80d6b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "c1cc0b1fa64275efdab898efdbb67808",
"main.dart.js_172.part.js": "b4aa7beebc10631ab7f7d7785807f18b",
"main.dart.js_40.part.js": "18de1721bfc076b24540ec81ac7a009d",
"main.dart.js_209.part.js": "69249e4e349b4a8d552be3597979f540",
"main.dart.js_115.part.js": "24af25a666f7ebb63f7ca722a02c415b",
"main.dart.js_10.part.js": "9292ea78ed6e5b0a51811a74c2a4b6df",
"main.dart.js_84.part.js": "85f85f49479e85547c0dddd9407a83bb",
"main.dart.js_122.part.js": "9ce9548608857f03dfd39727ed9d1ff4",
"main.dart.js_230.part.js": "c239113c4e95f822cd33622a3062a5f7",
"main.dart.js_213.part.js": "419ea4863901b06c505e3256b25a99ec",
"main.dart.js_41.part.js": "2f6f3952f2b4b0296f411c747cf1f403",
"main.dart.js_89.part.js": "feaea73726f22649f75be61727ded9cd",
"main.dart.js_71.part.js": "664b9c1447c2433ee1e4272a62542c3e",
"main.dart.js_146.part.js": "d29258060d20399670823c694656f484",
"main.dart.js_37.part.js": "ea096e3e6fdfa196bd6df182e3de0df2",
"main.dart.js_132.part.js": "18c68e39233057954c89d4f3f6623a15",
"main.dart.js_165.part.js": "a325e279cc45e1f3141bf18a99d480ec",
"main.dart.js_127.part.js": "0bbb9e2d1b7283c9d910777e3c4e701a",
"main.dart.js_175.part.js": "cd4ba1831c24492f3dd4d18b190c3737",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "d68e290632694c7e91ab324ce81362c3",
"main.dart.js_216.part.js": "fd74ce85ede732352cb9d1f1b996ecc7",
"main.dart.js_64.part.js": "1d7095c3f21b13efdcce2eb9d466857e",
"main.dart.js_169.part.js": "eaa780ec368aebc192f770eb4c019326",
"main.dart.js_13.part.js": "3b194b433d9c2466752ef81acf82bbfb",
"main.dart.js_246.part.js": "d4764e13a427b37e0597009d8ee0f783",
"main.dart.js_174.part.js": "cbba6901c81e47f6c0b5f8a47e27b8c9",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "4d2a42f1f9aec0bf6f8dfcdd9546d958",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "87002fb7dd578cf54fb7e55115b09239",
"main.dart.js_119.part.js": "aef43b7dcffb6649d7c0ff0969a02506",
"main.dart.js_18.part.js": "a810bf6d3742119070e31a34856a4274",
"main.dart.js_35.part.js": "f44eed6736988ffd87e469a6f5b9941d",
"main.dart.js_200.part.js": "03e46b21f1b083ec3337fef941a0e033",
"main.dart.js_101.part.js": "82adcb051ad335903cf76a47b7902b89",
"main.dart.js_77.part.js": "4c747556e8e941cc6929947d8438dd96",
"main.dart.js_149.part.js": "281fdc311244b9428da67ff2ac9a077b",
"main.dart.js_82.part.js": "ee8e5d428fa409e08aa3da574af18b4e",
"main.dart.js_173.part.js": "23b4e0bf3415d3db427392d10d208078",
"main.dart.js_106.part.js": "55a3a4610ace1503408d03eeb594e258",
"main.dart.js_62.part.js": "b1df5a22bc78995574d6ca0e8e969264",
"main.dart.js_259.part.js": "3da622958032fa317a62717c50af8e5e",
"main.dart.js": "3bb812ce0c2f16967320a04688def766",
"main.dart.js_222.part.js": "ddd9274da83f27acf634475a2811067b",
"main.dart.js_232.part.js": "4f397d966ad9c12ccae6c54f02f3104b",
"main.dart.js_148.part.js": "4e6618d8b0ef3be600f364c133821c43",
"main.dart.js_124.part.js": "22cb77b16e22f1916f47106c9dc67cde",
"main.dart.js_50.part.js": "f1d905bcf060fe5f59554976725abeba",
"main.dart.js_97.part.js": "7cace4886baef2921afe25ea49b3c2e9",
"main.dart.js_192.part.js": "9137abbd9c65e26ed8a6df3637fd6576",
"main.dart.js_145.part.js": "40483e3cafe8411be5bf602e6f2a75ff",
"main.dart.js_57.part.js": "8acf985896b811e824d37fa3c7897e91",
"main.dart.js_190.part.js": "f12e3da438e358845ad612dc9f86f063",
"main.dart.js_104.part.js": "962ded67125d0b511b57eebb4688cb4b",
"main.dart.js_201.part.js": "6faa95b72e3e56930eee2d3a963a4a89",
"main.dart.js_69.part.js": "ea013ebf2ca973e242474b6c89a3c385",
"main.dart.js_181.part.js": "966525a7654376f2bc66ff80dcc5b7a6",
"main.dart.js_33.part.js": "fc2746328dab1e9a388807706c806cab",
"main.dart.js_217.part.js": "d8c3a03c9bd405c03f423a2faa953534",
"main.dart.js_34.part.js": "b1f72c02ffba1fbeb00c6ab4856175e8",
"main.dart.js_210.part.js": "887f60bd71c1a3994a7c5ebd81d72ede",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_88.part.js": "8631035f6314cc023b420332e6a9bf92",
"main.dart.js_202.part.js": "05e7a22745a7c51bd772e49299cdbe0b",
"main.dart.js_183.part.js": "532c433b7525a06ee7c7afdd6300427b",
"main.dart.js_167.part.js": "dbed832c920b9ac04293291946206686",
"main.dart.js_203.part.js": "1e8ac58b59819a18b49e4e187c4c3c4f",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "a86d39853b5257a6a038f0485a2a298c",
"main.dart.js_7.part.js": "27ce9e366e3a42e4146ae58b9bb302c1",
"main.dart.js_140.part.js": "7472f339f24f85c9d90d872d32ec5bd1",
"main.dart.js_228.part.js": "3b5307d3789dedcb4cc0ab6721d32250",
"main.dart.js_170.part.js": "44524a8bfb42cbfac34b409a09d1e792",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "fe5526633ce0c038b0bb1597a1138467",
"main.dart.js_27.part.js": "01444275d1e6f5a1ba4a838bcc27a2a6",
"main.dart.js_156.part.js": "3b75e80fe9c28a1c25b35268afeba44e",
"main.dart.js_4.part.js": "7899ff366690e9a958f5a920dd0684a8",
"main.dart.js_219.part.js": "38a364d4f22abf23c2cea0389f44daaf",
"main.dart.js_116.part.js": "2b53ed98bcfc50ee8dfac31f02925f8c",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "8c61b87a3deb5559c4123dbc25f1d136",
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
"assets/assets/translations/uk.json": "8c279d4790eeea05f92658b77521a514",
"assets/assets/translations/pl.json": "8c70468ba11c01e8da90fd0b42dd0099",
"assets/assets/translations/sk.json": "4b63c9250c52d719d04d42a559340991",
"assets/assets/translations/en.json": "8097bf9fd647a636c863626f226523c6",
"assets/assets/translations/cs.json": "ab32dc5e1a9e1de4b302123ad16c96c4",
"assets/assets/translations/de.json": "29361a9c2f83d4f16f63f24d28cd21cd",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "972be2ccb94ac0031acb11220f3f7a8f",
"main.dart.js_147.part.js": "fe8ef960027812cce479809822e1bda9",
"main.dart.js_220.part.js": "9f3ba3f80868a89d6a30b04094e1f036",
"main.dart.js_25.part.js": "be2fd1dd3645faeef5e664f25696cd39",
"main.dart.js_249.part.js": "1d9e7cddffb3ec2358e82a97b80a7660",
"main.dart.js_123.part.js": "918ffa0fa1fe0c9fa641dba666537712",
"main.dart.js_241.part.js": "ef41aa81b3b66e35d8d7d37d63aa7d7b",
"main.dart.js_8.part.js": "0880764567dd2a74b79b8fbae4d40092",
"main.dart.js_198.part.js": "d7cc0b46f7a38efe379e4916492f29a4",
"main.dart.js_81.part.js": "54b9ac81844cfe497943a8d647ad6549",
"main.dart.js_205.part.js": "e71065fe61c3e255a8ec369c6a58584c",
"main.dart.js_113.part.js": "9013d829ee52894a693d98f947b2273e",
"main.dart.js_9.part.js": "e4a0cd44e7f59f8c388c1f2381009ba1",
"main.dart.js_22.part.js": "c0f2ba93e90a15326bb309446445cb0d",
"main.dart.js_86.part.js": "18610a5462021d6b6403e649cb998020",
"index.html": "a0b6066d12110cdfb1f722b1c3ca4c58",
"/": "a0b6066d12110cdfb1f722b1c3ca4c58",
"main.dart.js_94.part.js": "600e0341442a0d20c7e45ee3c4a87295",
"main.dart.js_98.part.js": "c68416fb7634520c296914e5b0b9ac25",
"main.dart.js_53.part.js": "1ba62249d69727fc5684c934170f3b43",
"main.dart.js_74.part.js": "7a8cba45fb005cdbe602f1304743d023",
"main.dart.js_235.part.js": "76b9c51607384b5a5bd2f647fa0fb3af",
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
"main.dart.js_118.part.js": "72d41ca534e755e66571572c71dc81cc",
"main.dart.js_26.part.js": "97a5b2a490a8082cc8fbbde290b5ba25",
"main.dart.js_240.part.js": "65e8f49bc9bff6181adc6ebc0dc2422a",
"main.dart.js_20.part.js": "0f098bb712010bbe92fd98a6a2d38349",
"main.dart.js_214.part.js": "a7196ef214a2d0944c178708f57b2df8",
"main.dart.js_51.part.js": "42508b6d11b8c4163224a0065a551eeb",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "98a57d4a3fd2250ed91855ea4fbe495a",
"main.dart.js_1.part.js": "9cced5b6393cf06a7eab9e3f14414640",
"main.dart.js_120.part.js": "70a1d15d25e2969c7ee2fa576dcb67fd",
"main.dart.js_63.part.js": "eb70b4d63e0ffe2d58a1abd67985d48d",
"main.dart.js_211.part.js": "e87c47b9d72bc3f6de18a537ec8f7b30",
"main.dart.js_261.part.js": "0d5bdd0a44de767ae14ddca4523b734c",
"main.dart.js_12.part.js": "049910802e1fc9809b6f9e41f6bffc10",
"main.dart.js_157.part.js": "e12b17b0d492dcc43a5ed0420277bb13",
"main.dart.js_221.part.js": "9bb1ef7fb977fee3729d7fcb7a6bfec0",
"main.dart.js_137.part.js": "937cec6c8be944ca6515a5c7dd5b5eab",
"main.dart.js_28.part.js": "1c8161c6831be5e459695309a3e4ad14",
"main.dart.js_135.part.js": "fe964a2e8ce498bfbee225af2b4d2b25",
"main.dart.js_256.part.js": "9715a5200efdcd43345add7529376553",
"main.dart.js_237.part.js": "c9631a03b9309d555162c1f4a93f3add",
"main.dart.js_193.part.js": "fac7082b01c6a2c5d7257a21b8ce4f0a",
"main.dart.js_17.part.js": "4017ec97d3fe371d011dee6879fcba96",
"main.dart.js_105.part.js": "87b6e37f7c79b635df5ebbd0741fb5d6",
"main.dart.js_231.part.js": "79d47d801cb6aed5528ae865dfb9151c",
"main.dart.js_43.part.js": "0810a0b4430d586d6e4077d6dd5c27fb",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "fe9381aa08415cc0f2dccefcc60fa905",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "a7a24a4972e946097a11fc9446b0cc52",
"main.dart.js_15.part.js": "e044ae2afd5016f3d0c40f564e16db63",
"main.dart.js_19.part.js": "983430851c88c70208f853bc37da91f1",
"main.dart.js_186.part.js": "482a92f243286e7a220cccebeb1a069f",
"main.dart.js_163.part.js": "6d09620d176568355bbc175ee403b055",
"main.dart.js_257.part.js": "65bf1cb7e8f5b88e63ea309f5ec7494e",
"main.dart.js_16.part.js": "eb25b7c9fcb739afc5bb123acb26b6be",
"main.dart.js_250.part.js": "5c4d229c31d875b16ee786106dd89a82",
"main.dart.js_52.part.js": "c52db14b47675cb53caab29819bf35a1",
"main.dart.js_253.part.js": "1a3a3e9df2b0255c10bfb621186e7e82",
"main.dart.js_130.part.js": "0f8ff62b9bb31d963794e9639dcaa627",
"main.dart.js_238.part.js": "5984a7e809a1f3fbe5716e14e52b6452",
"main.dart.js_32.part.js": "943e06d92f29ea63037d6392e1da1e73",
"main.dart.js_197.part.js": "4382b969edf208d0547f07272b76a6f7",
"main.dart.js_227.part.js": "ca072d41835b44dfa7df790e0c927757",
"main.dart.js_3.part.js": "f4943c71bf601b7d97e9cc3a7e6bf15e",
"main.dart.js_68.part.js": "c9b477081a388e407e3f387eedcb3065",
"main.dart.js_38.part.js": "ea937a642d2d47f824d32a1197819af0",
"main.dart.js_225.part.js": "03de0c7f5c55622a8387c0735e9b5971",
"main.dart.js_248.part.js": "3ffcce9d622fbd120017850623e0d1dc",
"main.dart.js_133.part.js": "98d18cdacefd273e2fef158865ed60bc",
"main.dart.js_21.part.js": "4dc483451657ddf0fe88caaa5a5bc802",
"main.dart.js_204.part.js": "a9929c489a471e6ef35d357991c20485",
"main.dart.js_24.part.js": "351061f76c681dadc7d212df2d7e1ffa",
"main.dart.js_90.part.js": "144ebbfda9038660129dabac2a40fb9c",
"main.dart.js_111.part.js": "68b4f3d2c0ea2c5958b45b7494b6db4a",
"main.dart.js_177.part.js": "1704d3b52211fff3004380d719f9d4da",
"main.dart.js_85.part.js": "8b9fd6299e6dbf46541d2ba627453286",
"main.dart.js_212.part.js": "bb7e0f22ed2ee4e1a6bef73b50d71c7a",
"main.dart.js_114.part.js": "80d661fde49b6f64da3cc70a857d2032",
"main.dart.js_39.part.js": "34ca57a351eda7caea316754dd8c66e6",
"main.dart.js_185.part.js": "01fba95399188e1d18076e1b04514240",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "bf1417c40fe4d1c83c3732da84a2f33f",
"main.dart.js_171.part.js": "fa9b9ad8ce3f7abe00a320e3dfa67287",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "0619a42b0f989af2fbf5a036dffe4864",
"main.dart.js_195.part.js": "a5a9f34b320647557a9b849318f1c024",
"main.dart.js_44.part.js": "271d88b6d2ceab7d370e23b8c7047446",
"main.dart.js_121.part.js": "292383fa24934a48f87c5970990f4bea",
"main.dart.js_55.part.js": "5b61aba040f6de438f6bca0130bc3168",
"main.dart.js_215.part.js": "7988b7585abbb342af40d21a8e1155fb",
"main.dart.js_112.part.js": "f1618a538ca90a5dff967a1f63adb7d2",
"main.dart.js_139.part.js": "9fb0f65a8a46651ec4e7e4dafb3f5fdd",
"main.dart.js_143.part.js": "1ac4fbb04a8439c5540a86401fd39146",
"main.dart.js_80.part.js": "9793497a56d865c3b00cde09a3905d53",
"main.dart.js_252.part.js": "b20b6ecfd0a15d90545a3e6864e0e0ad",
"main.dart.js_233.part.js": "88f635858d055abaeb7bd8fbe972d2a5",
"main.dart.js_30.part.js": "0d9fbf1cce70ae726453f6ba84b69a0f",
"main.dart.js_78.part.js": "2562877d17b0ebf795a36f01d4d02554",
"main.dart.js_136.part.js": "04cc9b24d2ef5cb3fae76188f1cb76e2",
"main.dart.js_168.part.js": "bac4513599bf34fe6961fd1e5b695cd9",
"main.dart.js_47.part.js": "6c3f4a05dacd8d7cd04d157e289dd4c6",
"main.dart.js_107.part.js": "3bcbe8892f4083e66a8587988d5da0cb",
"main.dart.js_29.part.js": "7a9dbe05c60e2659b587eb63bed6783e",
"main.dart.js_194.part.js": "971a567508bb96e308ba01905d8e1883",
"main.dart.js_61.part.js": "5ba7f78b82acaf619b1f45d3e184fa0d",
"main.dart.js_236.part.js": "476a77321791222413f7a38a948cc483",
"main.dart.js_58.part.js": "f26f4a6458f6dec017026c9f9bda2627",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "7457d20b66b9f48c99dd8e105531d600",
"main.dart.js_54.part.js": "694e84396b1a4a8db491a06bf3b68bd9",
"main.dart.js_79.part.js": "136df7b0ff949f69f93273986e5391c3",
"main.dart.js_92.part.js": "b6a43b960eec23b230af161ab72d4a6d",
"main.dart.js_224.part.js": "eddd0e6f2c9a668297b195df97fd7990",
"main.dart.js_93.part.js": "98797647d4c126e7d5598059b7bd3543",
"main.dart.js_223.part.js": "c8090cc3c13b17e10c60f9d5bd18619b",
"main.dart.js_11.part.js": "d3a4b237d8ed80beb732e36bf64ea69a",
"main.dart.js_125.part.js": "37333859349797efa4c6f8c2bbf54a98",
"main.dart.js_131.part.js": "3301f47e6c0306fa32724c721b7b8381",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "3862ed8cf729d83cf143a45e22393f27",
"main.dart.js_178.part.js": "6703f07e70a85d84ba93ac9905613eb2",
"main.dart.js_100.part.js": "2c87f65d6f3a3bd84df8328c889e9b3a",
"main.dart.js_258.part.js": "bb03291bd40078a1c3276852374980ff",
"main.dart.js_187.part.js": "2ab878411aec4f6f215cd8a1be7f5f4f",
"version.json": "be3e5ab30d765a9d63bc51c90c5c97bd",
"flutter_bootstrap.js": "4b14afa0258c6e46049b6d6d10389e3d",
"main.dart.js_191.part.js": "83f79f785e9e928ff5eeb22e38b11739"};
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
