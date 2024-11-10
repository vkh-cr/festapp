'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "bbf2d076b0ae2ca34f7c5913c91db013",
"main.dart.js_117.part.js": "7224a953cc617d45eecd6b78a15ee331",
"main.dart.js_182.part.js": "305b8e649b7c16c2b32805cb2f425d3c",
"main.dart.js_75.part.js": "5a0a0a23da3496b072662c33666c5374",
"main.dart.js_244.part.js": "6d526db570e4355f44c4c7936621febe",
"main.dart.js_83.part.js": "72f11c4ebe681d059c2d7a9cb78224be",
"main.dart.js_254.part.js": "9ecceb6af1ee94119275603f605e88e7",
"main.dart.js_176.part.js": "5b2bfb08825856dd4c40f02ba6f05563",
"main.dart.js_96.part.js": "d314bec435be732a2195db54a722f5dd",
"main.dart.js_245.part.js": "ea8555f3ebd009ee2bb56dcb32b178ed",
"main.dart.js_87.part.js": "7e161cc3556fab7de5d89f12bb557a06",
"main.dart.js_251.part.js": "3dc1a5b62e8a52f9921913b047b78959",
"main.dart.js_126.part.js": "49912d5c92ccfad228249e6d00f02d0d",
"main.dart.js_129.part.js": "e2f2c5009b505ff5c094eb1ef0e4af3f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "c1cc0b1fa64275efdab898efdbb67808",
"main.dart.js_172.part.js": "b4aa7beebc10631ab7f7d7785807f18b",
"main.dart.js_40.part.js": "18de1721bfc076b24540ec81ac7a009d",
"main.dart.js_209.part.js": "69249e4e349b4a8d552be3597979f540",
"main.dart.js_115.part.js": "ecc1e3ac8220ab2304ca8b0f99aa736e",
"main.dart.js_10.part.js": "9292ea78ed6e5b0a51811a74c2a4b6df",
"main.dart.js_84.part.js": "508511d3f096e184c944be6887d51eb8",
"main.dart.js_122.part.js": "9ce9548608857f03dfd39727ed9d1ff4",
"main.dart.js_230.part.js": "217b04bcbc3f42898fac31f260bb6363",
"main.dart.js_213.part.js": "419ea4863901b06c505e3256b25a99ec",
"main.dart.js_41.part.js": "2f6f3952f2b4b0296f411c747cf1f403",
"main.dart.js_89.part.js": "9d45a3b3136fcc2712f7b4e8f0468a54",
"main.dart.js_71.part.js": "664b9c1447c2433ee1e4272a62542c3e",
"main.dart.js_146.part.js": "d29258060d20399670823c694656f484",
"main.dart.js_37.part.js": "bdc108ec8da416ea9c2b6d7975029c0b",
"main.dart.js_132.part.js": "18c68e39233057954c89d4f3f6623a15",
"main.dart.js_165.part.js": "05f75f19e738b952cd1d8abe7c55f235",
"main.dart.js_127.part.js": "0e396e42b0880669458e598cdd9d1478",
"main.dart.js_175.part.js": "26d771dde2c97ec7e49f5107d6f1584c",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "d68e290632694c7e91ab324ce81362c3",
"main.dart.js_216.part.js": "d586e7d04e20e0c8fe0b2f884fe4e1bc",
"main.dart.js_64.part.js": "a11064e02c1126f3a203d01c8cf28534",
"main.dart.js_169.part.js": "046d512b139af84f12a294fd2c2ccb24",
"main.dart.js_13.part.js": "2adde3f10acfa702dc789be84109399b",
"main.dart.js_246.part.js": "d4764e13a427b37e0597009d8ee0f783",
"main.dart.js_174.part.js": "0511b8ea43ddb4f75f5fe7e197e5e30f",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "ec9dee77f81a33086058118d1621fc8d",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "87002fb7dd578cf54fb7e55115b09239",
"main.dart.js_119.part.js": "4381c2309d982f93ddac1f8036962f4f",
"main.dart.js_18.part.js": "5dee4597a572abdcd11743cdacfba847",
"main.dart.js_35.part.js": "f44eed6736988ffd87e469a6f5b9941d",
"main.dart.js_200.part.js": "bbf766737dea47e649f3f01b04ae2b63",
"main.dart.js_101.part.js": "82adcb051ad335903cf76a47b7902b89",
"main.dart.js_77.part.js": "4c747556e8e941cc6929947d8438dd96",
"main.dart.js_149.part.js": "bf44b61e5eabca4908155b6807dc3d0f",
"main.dart.js_82.part.js": "4b6a84b58b15debd8a3228aae1d71d39",
"main.dart.js_173.part.js": "23b4e0bf3415d3db427392d10d208078",
"main.dart.js_106.part.js": "da67a82227359fc30c93fe30c004370c",
"main.dart.js_62.part.js": "b1df5a22bc78995574d6ca0e8e969264",
"main.dart.js_259.part.js": "ba967c08b4781e54e66c2b714f1402d4",
"main.dart.js": "5751757397b6420cbbaf22a533e8b035",
"main.dart.js_222.part.js": "407b11c8f3fdcf69124ba56b1a14e8f1",
"main.dart.js_232.part.js": "5e96aebf75796f26b6902458ba83e38b",
"main.dart.js_148.part.js": "60e8ad33440bec4edcbf9e98dec9a28f",
"main.dart.js_124.part.js": "22cb77b16e22f1916f47106c9dc67cde",
"main.dart.js_50.part.js": "f1d905bcf060fe5f59554976725abeba",
"main.dart.js_97.part.js": "ae10682140551d3dce2d3383c574c210",
"main.dart.js_192.part.js": "db638974056a761e13f9e2922e6d295f",
"main.dart.js_145.part.js": "6308400ff587b6491cd7b5c0b66d66a9",
"main.dart.js_57.part.js": "8acf985896b811e824d37fa3c7897e91",
"main.dart.js_190.part.js": "57fd27e4ed9138ce6fd786f8f3cd9374",
"main.dart.js_104.part.js": "962ded67125d0b511b57eebb4688cb4b",
"main.dart.js_201.part.js": "6faa95b72e3e56930eee2d3a963a4a89",
"main.dart.js_69.part.js": "21a3c49b3d091e007d84ab94b94ead84",
"main.dart.js_181.part.js": "c0b123eeea840348769180471a5bffb8",
"main.dart.js_33.part.js": "d47c3fe9178a6aa720aa5409683cf0c1",
"main.dart.js_217.part.js": "d91f346e9326604739c8b340278b2fb1",
"main.dart.js_34.part.js": "b1f72c02ffba1fbeb00c6ab4856175e8",
"main.dart.js_210.part.js": "a37a30c900a070bef9d0f7b50c3d3f3f",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_88.part.js": "f4ed5d1aa44d4524fcaac48b243ba5b7",
"main.dart.js_202.part.js": "05e7a22745a7c51bd772e49299cdbe0b",
"main.dart.js_183.part.js": "de7937445f24183fcdabdf8bc0c9258c",
"main.dart.js_167.part.js": "a94f524f18899ca3f128e1c5df93257d",
"main.dart.js_203.part.js": "1e8ac58b59819a18b49e4e187c4c3c4f",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "2220e7fd346d1c1e37c035f7cc7cb926",
"main.dart.js_7.part.js": "6963de04727245de7821b9d1aca4119a",
"main.dart.js_140.part.js": "5ed20480463f881bb84efc4347d0307d",
"main.dart.js_228.part.js": "3b5307d3789dedcb4cc0ab6721d32250",
"main.dart.js_170.part.js": "44524a8bfb42cbfac34b409a09d1e792",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "10bde14bb5450d9ee3ee6b462070d9df",
"main.dart.js_27.part.js": "b34ea662230a5bae1d9079b4c3571d79",
"main.dart.js_156.part.js": "3b75e80fe9c28a1c25b35268afeba44e",
"main.dart.js_4.part.js": "7899ff366690e9a958f5a920dd0684a8",
"main.dart.js_219.part.js": "9e15d394537ba8a9ff7e99261efaa007",
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
"assets/assets/translations/uk.json": "0f8641327aa078014ca80dade92bfee7",
"assets/assets/translations/pl.json": "e2c97a7acaa724c5f144d2dd4d009709",
"assets/assets/translations/sk.json": "7987f281f28ef0ac17dea5b52757c34c",
"assets/assets/translations/en.json": "6cff3acdef21b0ad8a166eb542e6bbb7",
"assets/assets/translations/cs.json": "71b4bd567cee50b08cccb8aaf845623e",
"assets/assets/translations/de.json": "3cea89327bca72420419671208d59251",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "972be2ccb94ac0031acb11220f3f7a8f",
"main.dart.js_147.part.js": "faad579a9f3c0cce51694a65b4da56f0",
"main.dart.js_220.part.js": "9f3ba3f80868a89d6a30b04094e1f036",
"main.dart.js_25.part.js": "be2fd1dd3645faeef5e664f25696cd39",
"main.dart.js_249.part.js": "c2a06bc7b4c623bfd7a1fa79fdb48932",
"main.dart.js_123.part.js": "918ffa0fa1fe0c9fa641dba666537712",
"main.dart.js_241.part.js": "075d0e6c2ee6a6d1b4d1f284532c138c",
"main.dart.js_8.part.js": "a34f67ae796006ecbf59159c102a38c0",
"main.dart.js_198.part.js": "21bdc67e2e73d4cdd44b5fcf1a1fd0db",
"main.dart.js_81.part.js": "54b9ac81844cfe497943a8d647ad6549",
"main.dart.js_205.part.js": "e71065fe61c3e255a8ec369c6a58584c",
"main.dart.js_113.part.js": "861915c97adf238705cda9c04052c616",
"main.dart.js_9.part.js": "e4a0cd44e7f59f8c388c1f2381009ba1",
"main.dart.js_22.part.js": "a9457cca37265dd48741d94bbd0a0a9a",
"main.dart.js_86.part.js": "191361f843665e898f1a140fc09097ff",
"index.html": "e046467a9df2770efbc77a3226fe5620",
"/": "e046467a9df2770efbc77a3226fe5620",
"main.dart.js_94.part.js": "425f3a7e4cda1198691474b777fda783",
"main.dart.js_98.part.js": "c68416fb7634520c296914e5b0b9ac25",
"main.dart.js_53.part.js": "2e708ae376cf07815405cf3465654df1",
"main.dart.js_74.part.js": "7a8cba45fb005cdbe602f1304743d023",
"main.dart.js_235.part.js": "6809cac761cf5eb3bae1fba9a317c652",
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
"main.dart.js_118.part.js": "7df6db7c52873da4cf84d559164cf0c7",
"main.dart.js_26.part.js": "3dd3fc5ab76d7ff9aae1dc6762a27f1f",
"main.dart.js_240.part.js": "5f95578cf147621277a7d0dc0fdc2f62",
"main.dart.js_20.part.js": "7962d81a961236db639d6aaced56ddaf",
"main.dart.js_214.part.js": "a7196ef214a2d0944c178708f57b2df8",
"main.dart.js_51.part.js": "a69b76b642accad96a9ebf2f769f5855",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "b87ea1e55c2ac75b871b4669bb985a5f",
"main.dart.js_1.part.js": "0483d7654c72d89970ceaa78952bafac",
"main.dart.js_120.part.js": "70a1d15d25e2969c7ee2fa576dcb67fd",
"main.dart.js_63.part.js": "254a74ba98bdd348fc0e5550329da9fb",
"main.dart.js_211.part.js": "acdaddceebc4a35a7e9425d7fcc6617f",
"main.dart.js_261.part.js": "f1f2638fd0713a275fd1f3367f4b9fb9",
"main.dart.js_12.part.js": "b28450232e168b7848b7c25840d8e832",
"main.dart.js_157.part.js": "e12b17b0d492dcc43a5ed0420277bb13",
"main.dart.js_221.part.js": "c7d53b29eca33f1b11d53238b5dacc19",
"main.dart.js_137.part.js": "193a6dd313f9a282e600bdec8a8b52c0",
"main.dart.js_28.part.js": "572da74c59891b9c56ff2317c34ee6c1",
"main.dart.js_135.part.js": "fe964a2e8ce498bfbee225af2b4d2b25",
"main.dart.js_256.part.js": "92b9e302d648fd70a628a1322c5d6f01",
"main.dart.js_237.part.js": "a09f4798a51e0006d32352a53f1b2c07",
"main.dart.js_193.part.js": "bc9fef5d2542ae081d6ff4c77d804d2d",
"main.dart.js_17.part.js": "d5d9cda86513219adb2d3f160d00918e",
"main.dart.js_105.part.js": "94a03d6831e22853d064f250b81bbbb1",
"main.dart.js_231.part.js": "79d47d801cb6aed5528ae865dfb9151c",
"main.dart.js_43.part.js": "5259c61ec86fbc63d7500fdb956e11b1",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "f17ba6dc3ab0b36cb8765a454b940782",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "f37c6238d3ca64dc3e725b7e3627dff3",
"main.dart.js_15.part.js": "85553cf1cc46296908034026da7f155d",
"main.dart.js_19.part.js": "983430851c88c70208f853bc37da91f1",
"main.dart.js_186.part.js": "b4f9e010e5b6c0b5502f19e97626b9f1",
"main.dart.js_163.part.js": "0ff8f57764dcac21056ac04c42349d96",
"main.dart.js_257.part.js": "e20a2239d461b90ec2a3f44396e1f521",
"main.dart.js_16.part.js": "5065c440e35906eaf12c62cd39439e4b",
"main.dart.js_250.part.js": "5c4d229c31d875b16ee786106dd89a82",
"main.dart.js_52.part.js": "c52db14b47675cb53caab29819bf35a1",
"main.dart.js_253.part.js": "1a3a3e9df2b0255c10bfb621186e7e82",
"main.dart.js_130.part.js": "2f1a9a9dc45dbcbda8df279c7650eb77",
"main.dart.js_238.part.js": "d5866fa5a35632f4546fe505b1d0e3fe",
"main.dart.js_32.part.js": "943e06d92f29ea63037d6392e1da1e73",
"main.dart.js_197.part.js": "4382b969edf208d0547f07272b76a6f7",
"main.dart.js_227.part.js": "d3e31d7c544115c990f19ea7a53c1206",
"main.dart.js_3.part.js": "793f530287a243d7ecc27ee56ccf0a1f",
"main.dart.js_68.part.js": "00c0934f6d9ea04a148ff002b9ec676c",
"main.dart.js_38.part.js": "ea937a642d2d47f824d32a1197819af0",
"main.dart.js_225.part.js": "03de0c7f5c55622a8387c0735e9b5971",
"main.dart.js_248.part.js": "d378e443d79e8669ca857bebf228ecfe",
"main.dart.js_133.part.js": "faef67d3f8842d87b7a7b979bb0fad13",
"main.dart.js_21.part.js": "bd5ac3dbdd798a49a190c2b051e4ae32",
"main.dart.js_204.part.js": "96082c85af117ef03f225502878df492",
"main.dart.js_24.part.js": "0310d07b35ec27fe35446af33e0931e3",
"main.dart.js_90.part.js": "144ebbfda9038660129dabac2a40fb9c",
"main.dart.js_111.part.js": "68b4f3d2c0ea2c5958b45b7494b6db4a",
"main.dart.js_177.part.js": "8d3c7a952e2908f943a41895da8eb115",
"main.dart.js_85.part.js": "bfa86b9da2b39c0227f0fb8788bd294d",
"main.dart.js_212.part.js": "5f356d329b561369c29a24490da2814c",
"main.dart.js_114.part.js": "9fbed3ab06c388982710a653da530b0b",
"main.dart.js_39.part.js": "34ca57a351eda7caea316754dd8c66e6",
"main.dart.js_185.part.js": "364a2580b781da0e68c8a2d3e436ebdf",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "8ee6d075b912c6b1e2aafbce1152ab7d",
"main.dart.js_171.part.js": "b8ce651ce57e149731932c898d038a97",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "32f8e4006326415341f1d611db4d1b89",
"main.dart.js_195.part.js": "298804ae275a3532575f6b600ad9d2bf",
"main.dart.js_44.part.js": "ca38cee0a29bb6b449418bf2fc0ac3ae",
"main.dart.js_121.part.js": "292383fa24934a48f87c5970990f4bea",
"main.dart.js_55.part.js": "5b61aba040f6de438f6bca0130bc3168",
"main.dart.js_215.part.js": "7988b7585abbb342af40d21a8e1155fb",
"main.dart.js_112.part.js": "f1618a538ca90a5dff967a1f63adb7d2",
"main.dart.js_139.part.js": "e538ace21dc341c7ad64d637098c9c07",
"main.dart.js_143.part.js": "1ac4fbb04a8439c5540a86401fd39146",
"main.dart.js_80.part.js": "42ee058a7113953036e0dff8a73de604",
"main.dart.js_252.part.js": "b64ce41105df0fc288ea8162003572c1",
"main.dart.js_233.part.js": "def5422f42dad2eb3bc3116abf877c3f",
"main.dart.js_30.part.js": "33434db992e43342b9160e15fee18315",
"main.dart.js_78.part.js": "2562877d17b0ebf795a36f01d4d02554",
"main.dart.js_136.part.js": "7ffe86c19a837c90addbe515614f61e3",
"main.dart.js_168.part.js": "bac4513599bf34fe6961fd1e5b695cd9",
"main.dart.js_47.part.js": "6c3f4a05dacd8d7cd04d157e289dd4c6",
"main.dart.js_107.part.js": "994f00666f75d2419227a330cd759d57",
"main.dart.js_29.part.js": "7a9dbe05c60e2659b587eb63bed6783e",
"main.dart.js_194.part.js": "194292bc5104e525b3e5d10b7b28d909",
"main.dart.js_61.part.js": "5ba7f78b82acaf619b1f45d3e184fa0d",
"main.dart.js_236.part.js": "9e10c65168a7087023567e19e772ee23",
"main.dart.js_58.part.js": "f26f4a6458f6dec017026c9f9bda2627",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "7457d20b66b9f48c99dd8e105531d600",
"main.dart.js_54.part.js": "694e84396b1a4a8db491a06bf3b68bd9",
"main.dart.js_79.part.js": "136df7b0ff949f69f93273986e5391c3",
"main.dart.js_92.part.js": "d0ea5522400b3a44394e4d943e9a8eaf",
"main.dart.js_224.part.js": "eddd0e6f2c9a668297b195df97fd7990",
"main.dart.js_93.part.js": "3cc2005e3d13f76c088e48d30a35000b",
"main.dart.js_223.part.js": "c8090cc3c13b17e10c60f9d5bd18619b",
"main.dart.js_11.part.js": "bf015e3c32a09f83ed6d53fe5585c509",
"main.dart.js_125.part.js": "9abeb895328d73905f3ec8d3c09fb04b",
"main.dart.js_131.part.js": "a060212bcb1dbec09057472076a53e75",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "ee9aab60ce3a5dd576af5ebe7fe4186d",
"main.dart.js_178.part.js": "c467655b6e749b09cc82bb24fd8840a2",
"main.dart.js_100.part.js": "2c87f65d6f3a3bd84df8328c889e9b3a",
"main.dart.js_258.part.js": "3acf048b8c21fab2f8c7a1de6c8c5b78",
"main.dart.js_187.part.js": "2ab878411aec4f6f215cd8a1be7f5f4f",
"version.json": "be3e5ab30d765a9d63bc51c90c5c97bd",
"flutter_bootstrap.js": "2be1695dc044fff77aed503db71ddb41",
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
