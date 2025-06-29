'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_34.part.js": "b8822f2835b61c385cef10e7d005f365",
"main.dart.js_228.part.js": "69c710037c5970e93ffd2cf656b31176",
"main.dart.js_30.part.js": "c34548ef101c4aee976d390dcf933989",
"main.dart.js_201.part.js": "178f4d7b4f519e2494488960e7e49ffe",
"main.dart.js_127.part.js": "d0013499380f3e6eb9d456562501ecb7",
"main.dart.js_98.part.js": "53b7d392cfcc7321cf9464b112459744",
"main.dart.js_17.part.js": "c6a869894381401d8ccc3d0f3b00a9ef",
"main.dart.js_302.part.js": "aeaa667e90351f837037bd1d1ab05be2",
"main.dart.js_309.part.js": "2db1939bd0da227f022fa4401d82d288",
"main.dart.js_74.part.js": "c7e85859257f869816f6cd84affe155a",
"main.dart.js_50.part.js": "4e215fd78bac9666097e2cc36028c55a",
"main.dart.js_51.part.js": "cb9df7704a6acba4a58e59bfcc951577",
"main.dart.js_108.part.js": "cf135d65e35717563ee9177a5206d661",
"main.dart.js_44.part.js": "5d35fceddb704c7346678c9190b55381",
"main.dart.js_281.part.js": "89b0ee68d45f8bc2626536dfedc0c414",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"main.dart.js_47.part.js": "ad61af05c7b462df08550b99c209e422",
"main.dart.js_45.part.js": "fd645710a0f85a19c561d42ad4027563",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_61.part.js": "eb56f0d98668a757f0ddc88fd14e830b",
"main.dart.js_33.part.js": "c188dcd923b979d29163e0072532ac11",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_125.part.js": "2c1ff780e3ff9957b2afa5878f7b818e",
"main.dart.js_160.part.js": "69f011d4e7408347cacd404bc42a01e2",
"main.dart.js_143.part.js": "ed653a6415aa26400fdb41fe4a166205",
"main.dart.js_164.part.js": "d000cd52aa9a594fb48e2c971c6400f6",
"main.dart.js_295.part.js": "eb74f3bf576316c1dc18dbe50350620d",
"main.dart.js_114.part.js": "410ef8c99ed349757ed47bca1ee3a03f",
"main.dart.js_64.part.js": "5c494d86614fded1479089b7aa4a55cb",
"main.dart.js_138.part.js": "5eaa35cd8d87cc8b3a640de75f9476c7",
"main.dart.js_192.part.js": "ae6af6079f726d3e974fc2ed5fa717a1",
"main.dart.js_305.part.js": "a48517a9030cc786e35d26d228533906",
"main.dart.js_168.part.js": "6bac287279bdcedb6da959fc3f1726ee",
"main.dart.js_182.part.js": "83714ccc9d85ad4901f2c431ad351ac0",
"main.dart.js_132.part.js": "00e93a167ee964b9a922708977c62476",
"main.dart.js_242.part.js": "2fb17a2291db8330ad52181124966ee8",
"main.dart.js_82.part.js": "4337473eb91f1126e84b40d90a4e9401",
"main.dart.js_144.part.js": "7e744e4cc55489916248b4cfe67587fb",
"main.dart.js_243.part.js": "7964ec91233fbf3194e249f455eb5695",
"main.dart.js_175.part.js": "d58d6a4b26d88dcada267b75af10589e",
"main.dart.js_287.part.js": "8bac3aaf93c00651a0fc0d9ba4829e18",
"main.dart.js_194.part.js": "71edd6da756492a86a89baec5a7f4cfb",
"main.dart.js_278.part.js": "8d23ceb539dae49d211f2327ea2ce1a1",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_130.part.js": "2eaa7c5e1b3485d2ba2ca440694eea8f",
"main.dart.js_288.part.js": "962c4ef23e862b9520bdd68d5119280a",
"main.dart.js_53.part.js": "3ec183978cf88fcb0ffc0de41f9545a4",
"main.dart.js_217.part.js": "2d4ed767bbadea4caac3bf8822f459b4",
"main.dart.js_231.part.js": "29d24b0cdbdaaabdc50a6990e24125f7",
"main.dart.js_55.part.js": "a01839dc629db1667d0ec9093cb91c84",
"main.dart.js_32.part.js": "402a947d0b56cf2d4ffac9b6051016ff",
"main.dart.js_163.part.js": "30d617ee57be11a83cf614e056d7172e",
"main.dart.js_49.part.js": "7504c9ee617f62a33ad33738e8499c99",
"main.dart.js_129.part.js": "1dbfd03eddfc9881694285fa81840e12",
"main.dart.js_298.part.js": "3f2a6b24b34f9fe86e9f06151da90438",
"main.dart.js_77.part.js": "305c2b76f06d7c37fd8e6a80cfc8d7a2",
"main.dart.js_190.part.js": "93906978fd679acc0529c9ea93844a75",
"main.dart.js_259.part.js": "a16681d072b2d8a178f563068518f390",
"main.dart.js_307.part.js": "d3560a978c5ae3f4c945685842c06de7",
"main.dart.js_262.part.js": "7ceb4614b46a6deec7a26e44b4517189",
"main.dart.js_31.part.js": "484b99e93238da4bacd3cc19e0f99f90",
"main.dart.js_209.part.js": "8efc40f5ba9e2e071f20903a78af6988",
"main.dart.js_141.part.js": "afc0008948e79700ebb04ded7708ce34",
"main.dart.js_187.part.js": "8a57f8c32a4354bf0168b1f408b387e7",
"main.dart.js_100.part.js": "a5bfbcdb35e4bc4551b3ea495ee3fdc4",
"main.dart.js_252.part.js": "62e38fe448dff5bc739cb8df740fb7fa",
"main.dart.js_35.part.js": "f5570c3048a9bb723d3c571b92c070c2",
"main.dart.js_7.part.js": "ee3cbf2960849adb2a3926f1a7d125e4",
"main.dart.js_184.part.js": "1394cfb543f47f45cdcd38a0afad397d",
"main.dart.js_223.part.js": "f256e32fb5b3346cc2d0c79c22f404de",
"main.dart.js_227.part.js": "0b3c3b698a3441adc310bce3c0108bc9",
"main.dart.js_87.part.js": "233e68b995c0dd290c18410c2e11a9ee",
"main.dart.js_178.part.js": "4d4644496a8f0301621b82ee4fd60db7",
"main.dart.js_70.part.js": "539b969005f324a4fa6048c9aba4c7a7",
"main.dart.js_3.part.js": "1269ff35eae52a8f5e59ce9fde5d7829",
"main.dart.js_20.part.js": "cc00727d9b36492a4e7d28b1f57c3c8e",
"main.dart.js_172.part.js": "d41a7063b420b66d6f19744f4042c5ba",
"main.dart.js_13.part.js": "7264ea78b44e4a9fdee419081ef621a1",
"main.dart.js_38.part.js": "306fb44dc474e66abd7f8ffc374c4264",
"main.dart.js_299.part.js": "fa9b5cff95047e43344adb9583fb7081",
"main.dart.js_4.part.js": "fd07281e33485db0103cb1fd050167a7",
"main.dart.js_92.part.js": "df9c9a34706da600ea825a554019e926",
"main.dart.js_106.part.js": "ad8f89dee32605e50de884e839024a38",
"main.dart.js_279.part.js": "9c0c39963fa5f7a90a0bb15ab1b71e3b",
"main.dart.js_16.part.js": "62db0830289afc654a388d2d3a8cd02b",
"main.dart.js_199.part.js": "a287339186ab5d6dd61ec23120951ee6",
"main.dart.js_79.part.js": "dfea703c4da00f2f0ee8aa79280edcbc",
"main.dart.js_183.part.js": "cf40659a8d7bd3a948b3b11caffb8552",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_121.part.js": "82665a097e3c0e4cb71b428a6cf3ef09",
"main.dart.js_185.part.js": "09b46adb838916b1172bb05ff7cc3391",
"main.dart.js_286.part.js": "346c64117996ba7973d48dd5fd9ac06d",
"main.dart.js_40.part.js": "576b71f21af0fa4d6834c91a80a1cac0",
"main.dart.js_263.part.js": "3f4b909fbccb7e99a47288358c63f62f",
"main.dart.js_241.part.js": "182d2d105f1cc6ac10931ef60c4e11ca",
"main.dart.js_56.part.js": "213ce41d1f03f9b7d5ef9c77a9647bb5",
"main.dart.js_15.part.js": "60d2a074a397965d6256627ae41bd370",
"main.dart.js_107.part.js": "7024f4cfb9b222252eb2bc29fd8a5cd4",
"main.dart.js_89.part.js": "1bdd9061042cacc98c89a2b48e4795e3",
"main.dart.js_202.part.js": "0c631e95fe76cd2a467404e3b22aaa74",
"main.dart.js": "35cb38fcae22a13562bfa99f566f89ec",
"main.dart.js_253.part.js": "21414e61f0024e75dc7639c44b51394f",
"main.dart.js_296.part.js": "3f1cef25c25c39123a35238ad8d42066",
"main.dart.js_258.part.js": "11129e6af952b9c0fe03412b64430f06",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_225.part.js": "d03237ae933a5a7715658143d02d3774",
"main.dart.js_85.part.js": "fe87beb6b55489c743c38d771ec2642c",
"main.dart.js_271.part.js": "a2c431a3f36a21f2a2e6fb21fabaf1f6",
"main.dart.js_10.part.js": "0f1d431d91cbd1ccf095acbd86733339",
"main.dart.js_124.part.js": "d0f3c40678be1873b7e43fba2f4c5080",
"main.dart.js_11.part.js": "35fc856ad9b42aa94c3e27068a757854",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_73.part.js": "150e0577625b664281a70d66b5f43763",
"main.dart.js_260.part.js": "cc2819050b5dbe59ac716c5a66df39d0",
"main.dart.js_95.part.js": "53e5b93c1b774613c895f9ef883f651b",
"main.dart.js_215.part.js": "7c1c29f00cb85707305e88e3d855e578",
"main.dart.js_198.part.js": "2e52447099723f0c3f2ffee35ceddfec",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_101.part.js": "dc8fbae02c79123f07c5b3b75b6f367d",
"main.dart.js_96.part.js": "6456b5f6963328c8a95448e6ee417b43",
"main.dart.js_131.part.js": "63ac91e6d16e1d9c111a829772c78837",
"main.dart.js_118.part.js": "121b4cddf6b42f1a9bc8af420ec7fc8b",
"main.dart.js_94.part.js": "f27575faced9875ca4c5f45818348f75",
"main.dart.js_140.part.js": "acad00afb06957af88c19b571459b89c",
"main.dart.js_105.part.js": "662a36309bdc814c26df6c689ab7f458",
"main.dart.js_216.part.js": "36ac94d85c1f63bec5524e48beb53bda",
"main.dart.js_1.part.js": "aa000e34c36a5a27c3225db6fcfb6976",
"main.dart.js_133.part.js": "8d812dbc5c064049c8c8e9e631a4076c",
"main.dart.js_83.part.js": "da835c39136e28838e821e68e7acb5b2",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_110.part.js": "208c330d784d2c6407b9257c6f1cd83f",
"main.dart.js_213.part.js": "23abfa300071e508d32b712dad2a8d87",
"main.dart.js_238.part.js": "ddffdbafde5bb8ef58b101855fceacb9",
"main.dart.js_78.part.js": "d95b7e01525ac3ee8596911d43abe820",
"main.dart.js_308.part.js": "ebad4aee9af54d7b2944cb0602e507ef",
"main.dart.js_109.part.js": "9fb476814f5e82f613ff88f8729ebb39",
"main.dart.js_265.part.js": "d922450460288607d550e6e69a435718",
"main.dart.js_41.part.js": "7b0083b64ba1da003cc11d60f7a93687",
"main.dart.js_12.part.js": "0355e147de9c066d5ad4c305d1bb7f96",
"main.dart.js_303.part.js": "c37cd85fe3ff24774d7fca1d57876575",
"main.dart.js_76.part.js": "39e10f47e6f2c92494a1e4c0e51601f8",
"main.dart.js_239.part.js": "749a214ce6de76567513725cf4d5cca0",
"main.dart.js_251.part.js": "74f60bd7f2a83ce929e2a0c001261772",
"main.dart.js_158.part.js": "5c031c6bb0772f6acae6748fc8903554",
"main.dart.js_72.part.js": "2ec193a3a44b1329908d3e3e2fe53bb9",
"main.dart.js_68.part.js": "dc5a4815e693cb890b5003aea9263fda",
"main.dart.js_291.part.js": "d7af46b6372bccde79e2c354cc23b542",
"main.dart.js_62.part.js": "19311e3c004e1c50135e6d83c94beba7",
"main.dart.js_180.part.js": "f13bdad05cd58437286fa6166f4ad0a7",
"main.dart.js_240.part.js": "f02fa09c8484017968749f0aec3087e4",
"index.html": "bbde26569d18590851503db8150eba4e",
"/": "bbde26569d18590851503db8150eba4e",
"main.dart.js_266.part.js": "c016ac93ff5d3dccade995a01e77db6e",
"main.dart.js_134.part.js": "2f4494f4e94463058cb6fd3e63ecb8ad",
"main.dart.js_294.part.js": "ccc35000e431d3673cb7e397b157d442",
"main.dart.js_181.part.js": "1f4ab6adbab67ca41ab5b51fcef08887",
"main.dart.js_147.part.js": "58e534cf1df66bec965a948711b8012f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"assets/NOTICES": "4bd2930db146c4653bc584bd9d65b728",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/cs.json": "37e094085c4ea12fe9a1073e87c82698",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "a65e8481f26170acfe4d17bf5db08721",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/fonts/MaterialIcons-Regular.otf": "4309e6a0c1831e51db6b4b75eefcf381",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"main.dart.js_43.part.js": "4624c00062d51031431ba12d8baef816",
"main.dart.js_145.part.js": "ec83d4b942984ce4bab4001c93e3c8da",
"main.dart.js_29.part.js": "2625b2a72fc72f5824c4534c484fa296",
"main.dart.js_267.part.js": "b7016ac8e5c5ee8d040177ac9c03dad2",
"main.dart.js_170.part.js": "ec7b99d182bb11fd0faf441e266d5f8f",
"main.dart.js_197.part.js": "d517c34668251364baa61cbfec0fe60c",
"main.dart.js_280.part.js": "0b936a4354f657685607d141b8a5a71c",
"main.dart.js_97.part.js": "aae47a6be741faf2c6f0f33ce9570b6c",
"main.dart.js_269.part.js": "98b2cd1b42b2f144d3e08f56369ea41a",
"main.dart.js_111.part.js": "cd1ace8292588bdd5a6c9133d24ba7f8",
"main.dart.js_204.part.js": "c266aa1e631af4471a2566e10920f3a0",
"main.dart.js_211.part.js": "6d283abbd99b77a081a5ae97259865ec",
"main.dart.js_230.part.js": "5fb2c4681f0074fcec9391b64ce942fc",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_283.part.js": "895a9965c6166cd52ea43bc2f2d37d6c",
"main.dart.js_148.part.js": "480d261bfa17fb354d2f564a1c570fa5",
"main.dart.js_48.part.js": "bdf751453c7e66f1a936952e91a1f96d",
"main.dart.js_161.part.js": "76733693ee0daaa418bae2c711e6a9e5",
"main.dart.js_229.part.js": "9b04cdba65685ee8cbb243d38c903eca",
"main.dart.js_153.part.js": "c7a0193bb0153ec7680aa0deb1cf4550",
"main.dart.js_28.part.js": "467720043c4e82c8a4eaa6080f2f9fe2",
"main.dart.js_71.part.js": "875eb45271821edf45dd98a62f46ddb4",
"main.dart.js_119.part.js": "e4aef1552d8a3173f43d84d82ccd3a78",
"main.dart.js_234.part.js": "85ac681d7d9e086421a9f5de7815ac19",
"main.dart.js_42.part.js": "1adf72d223f9b96f1c37fe0e49bd0ab3",
"main.dart.js_166.part.js": "5bda94e9eac19e84310b7f39cb75cdda",
"main.dart.js_191.part.js": "da4c1800b1d5e62ed49f429a88cb465b",
"main.dart.js_58.part.js": "34c8d350881517ce748320bd0f614b11",
"main.dart.js_285.part.js": "5ec8a30c9ec2403850b39ee2cbff6385",
"main.dart.js_246.part.js": "cbc443b4f632e70d384f70a186c5c2cb",
"main.dart.js_59.part.js": "0d526a5b5df80b6c97fd7f060408b742",
"main.dart.js_277.part.js": "bf6e726530401cb763721428dae09485",
"main.dart.js_284.part.js": "ea506855eeb956a196ca890db92a8834",
"main.dart.js_102.part.js": "1ab865beb879e39dffba38cd5bb3c194",
"main.dart.js_5.part.js": "92c930458005450aca153293cb877c8d",
"main.dart.js_173.part.js": "1840625e9c5118073f1181556d4f9c51",
"main.dart.js_244.part.js": "48782db01082a8a0699cb58f066b957f",
"main.dart.js_293.part.js": "2f583ce2c69552e95c6c2d6af3924fd5",
"main.dart.js_300.part.js": "c63a48b6ae69dff47adbd5a3932ece28",
"main.dart.js_261.part.js": "823cdede28ee18119acd4793f04f064f",
"main.dart.js_236.part.js": "20491a5a273ef6a7692f279d0220b53c",
"main.dart.js_274.part.js": "848a7c3934e7627b80d63f51b3b6ea1c",
"main.dart.js_135.part.js": "1b08521b9cd9d960b1f2853b17375549",
"main.dart.js_6.part.js": "5af6fde3da2fea3ed770177246aa6ec3",
"main.dart.js_37.part.js": "9a2aea5f8070ad156fdc6f5fbe1865c7",
"main.dart.js_84.part.js": "b5b4fcb9a4129805bd76acad4c6cee04",
"main.dart.js_208.part.js": "5d3af8c953cd775e8205ab2091b9c1ec",
"main.dart.js_152.part.js": "2583a9ea437f052b06d1454189f498c3",
"main.dart.js_86.part.js": "8e372a1774080273695109a8ce2a4352",
"main.dart.js_255.part.js": "3d4d327ea60790a8d01692005d005644",
"main.dart.js_165.part.js": "0215fdcda193cd84d0fac2409340f521",
"main.dart.js_171.part.js": "e1c342c6b7bc0a886d4312ff343e0cc2",
"flutter_bootstrap.js": "4024eecc6ecce583c6528f45e30f1db3",
"main.dart.js_146.part.js": "65bb9e786a0faf8aa4147c1a9bb702e5",
"main.dart.js_210.part.js": "1be071575d3367a17a315187dc2b2bd2",
"main.dart.js_81.part.js": "a53b7469504c7982433408dced9d3c57",
"main.dart.js_156.part.js": "e0905c434a7c667d45eeba5dfe4e0a8a",
"main.dart.js_116.part.js": "35e3695efe942322ce5450d6561a72a2",
"main.dart.js_207.part.js": "862faa0d0ed980442004fcbaf93562b6",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_27.part.js": "1ad008d1dee86e591aa4c4a4370f00eb",
"main.dart.js_154.part.js": "f83a52f0845df5e8c0949b67a23202eb",
"main.dart.js_268.part.js": "ec9bf24d004c1e8c42c0a84609422a38",
"main.dart.js_112.part.js": "34d2c5b1c016138edd6dd8c6ff7dc0d8",
"main.dart.js_212.part.js": "81106693c4c2c43252a659c4e0f73188",
"main.dart.js_186.part.js": "8e23818c829aa7e1f2dd6e7b202cf38b",
"main.dart.js_26.part.js": "525a3e312fee32cf2354a921cf8492bf",
"main.dart.js_167.part.js": "584b90270f653bdd3debe3981566eb43",
"main.dart.js_123.part.js": "94c0f45a8848a07b375816c700ceb081",
"main.dart.js_36.part.js": "88a1b6bd6c7c83ed648b2c90c88d28a5",
"main.dart.js_224.part.js": "81ab3aa1f559f7dc65258fadc2cad615",
"main.dart.js_301.part.js": "d6799f7debc2bf46f7d2a08a0e465185",
"main.dart.js_24.part.js": "6aa33298f013c54dd5a2d3549d9960c7",
"main.dart.js_272.part.js": "4ad473b7d9d6e3f0acd0915876dc73d5",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_155.part.js": "b11c360df2aef982eb1c96cea2bda471",
"main.dart.js_57.part.js": "15025b73e18756d3ee77ebcaa9691d43",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_18.part.js": "1bc565e6372f35e93e67909248c04246",
"main.dart.js_292.part.js": "07c17c8ea5149d6f21325d9c3f3c46e4",
"version.json": "de032aed6c8511ea3c9f89fd63d62ced",
"main.dart.js_8.part.js": "854040e3024a804eb8e92148b0230aab",
"main.dart.js_247.part.js": "f9455d9f32db95ad99449b645000049a",
"main.dart.js_9.part.js": "0ffe2ed0e64fca833b342e49521dd824",
"main.dart.js_69.part.js": "5c43aa102f50f90c7a2684f0cd744ef2",
"main.dart.js_304.part.js": "f84bafaedfb63fac5428c75791740d72",
"main.dart.js_139.part.js": "42334059a477c51278d3dc4a07225c41",
"main.dart.js_176.part.js": "90e4a0bcd30763e36203e3084a5f216a",
"main.dart.js_275.part.js": "f66dfdf0e54e6d3e958368725d709793",
"main.dart.js_256.part.js": "58021a17638154124b6b227275d5630b",
"main.dart.js_237.part.js": "003565229abad7997b774ff901be1e99",
"main.dart.js_257.part.js": "2157410f0eff782ee590a9e5937aaad3",
"main.dart.js_93.part.js": "6e1045f9d21e2ade9d12522de42982e9",
"main.dart.js_179.part.js": "a06a714feca5230d88f9a90585c068a4",
"main.dart.js_14.part.js": "23f5b9abdc7d702c96e416bf6d058511",
"main.dart.js_206.part.js": "ff01efc773827a9148e44ab65a01e055",
"main.dart.js_113.part.js": "4c25c14c7551ed7271fef2dbf86dc5e8",
"main.dart.js_273.part.js": "5aa108ef0ed05db7f868548434748f3e",
"main.dart.js_39.part.js": "f6c9dbb632d184c354312e4a7582afbc",
"main.dart.js_306.part.js": "70d1b4d425cc752f07f96ba377a58e28",
"main.dart.js_250.part.js": "b19e64e24cd712a1dc3160656b141409",
"main.dart.js_290.part.js": "d6a5063504007816d6399e4b9d035893"};
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
