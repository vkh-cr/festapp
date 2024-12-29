'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "bfa170dbd72799bb360c1c6332ee991a",
"main.dart.js_182.part.js": "62650489628365b85a89d212cc86e422",
"main.dart.js_244.part.js": "3f2d4f55377fbfc57781328039bd56c8",
"main.dart.js_289.part.js": "bb36ab1182c9a06b130de7d8d66ee021",
"main.dart.js_83.part.js": "75f8eeb8d24863383b7d465c980e66d7",
"main.dart.js_176.part.js": "01a2ad49f84d9ee92897ecf676a211d6",
"main.dart.js_96.part.js": "719986a2d6372340c0b71bae0f495088",
"main.dart.js_87.part.js": "71e3cbc98076de5c734697deae66490c",
"main.dart.js_285.part.js": "7d64828b846286d6bfdc854e4567b7fb",
"main.dart.js_251.part.js": "975f6601d88941a826fb1b3b3d624f6a",
"main.dart.js_126.part.js": "a2c8c406b1320e4a2c447d7194ebbc73",
"main.dart.js_129.part.js": "8d91d9600bf8783c3199c5aa5a28e1c5",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "3b0570b03337fbd009d57b56a02ba62a",
"main.dart.js_218.part.js": "754f977dd829beadc9802b4a1703f29f",
"main.dart.js_172.part.js": "8598d4fc6e575ff8b8b46912744871be",
"main.dart.js_40.part.js": "779fbb97d70de5d41469672ade8d30c6",
"main.dart.js_48.part.js": "e5926e69a058fc315609645f6745bb0b",
"main.dart.js_115.part.js": "444b3364006d3b87d7b189fc895a470d",
"main.dart.js_10.part.js": "849bfabc12a8dffa3a6ca2a712b021ff",
"main.dart.js_84.part.js": "b91164854b4bc548628640852c1d2407",
"main.dart.js_122.part.js": "e0c5737f6434c1c82939660802a710c3",
"main.dart.js_103.part.js": "9a41719303256e7125ca54df751f24c4",
"main.dart.js_230.part.js": "9e9cd8e26c66fc0cdc47e083a8a10ec1",
"main.dart.js_153.part.js": "342ca2c53b0049f838c09d876e9d91b8",
"main.dart.js_89.part.js": "66222a932b50141124ab81e7e7f1a5bd",
"main.dart.js_146.part.js": "2349e3e07ef0ab61770a2eb3dfd3ec40",
"main.dart.js_37.part.js": "8bc3ee9d42cb2fc49255ba42f06bc405",
"main.dart.js_287.part.js": "2aa11e2ed896728011152c66ed4d2910",
"main.dart.js_283.part.js": "7535f2fae5d2995d0ed89b0bb768811e",
"main.dart.js_132.part.js": "232635b2f0902f3b7d633fb190830f83",
"main.dart.js_282.part.js": "90806f9633723fd258057eb6bfd7165c",
"main.dart.js_127.part.js": "31735e0cc62319c43bdb541aab1e0952",
"main.dart.js_175.part.js": "d800ee4e79741f9f862c2b9c6fe5bd7b",
"main.dart.js_239.part.js": "7cab08ba0c644e3911406afb3edee1c0",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "e140a548a24571321291e7e5a131fc9d",
"main.dart.js_216.part.js": "72a12a873643375305e2565c480136a3",
"main.dart.js_169.part.js": "30ae24eaf310e5c0e942515767316b63",
"main.dart.js_13.part.js": "78671c2c3170e39cb5a0f35426b4e219",
"main.dart.js_174.part.js": "57d7412edc9f4c9d167b354d1177a68f",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "1c3b07dfca415a6cbb7b101efaf5996e",
"main.dart.js_144.part.js": "36611e12b841e8f08caec40a57940707",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_265.part.js": "284602d36e02a29c0a3d96e66a324cd8",
"main.dart.js_31.part.js": "019558ef66e2af3e941bbb7ba326e976",
"main.dart.js_294.part.js": "40c73c8c13f7a54c5559f32863046d04",
"main.dart.js_18.part.js": "c07167894588b014bbac3d00a2d0f416",
"main.dart.js_35.part.js": "e45ac993adb1a1060cb4bfc2759b8983",
"main.dart.js_101.part.js": "f51a17f5c89bc52e12e908e58018a448",
"main.dart.js_77.part.js": "5307d1af6d190afddfad91e0cdf06ca4",
"main.dart.js_149.part.js": "5967cec6e50e0010ea0dd54b1d893f8f",
"main.dart.js_67.part.js": "62931e9a99523e0ef0ccf001212b0797",
"main.dart.js_82.part.js": "67ed246599423aac514bae06d24e7b75",
"main.dart.js_173.part.js": "9a4302f7cbee97dac679461fd4569ce5",
"main.dart.js_291.part.js": "54420028363587d531b31420cd50eb7a",
"main.dart.js_106.part.js": "38a27ddb3a4414b39398265ad3d4b120",
"main.dart.js_273.part.js": "eb4fcfcc08b56ee54346407f78b26a16",
"main.dart.js_62.part.js": "8b70d520381379270610b15a766ad3b6",
"main.dart.js_259.part.js": "dc0877371be80abc05fb68cc9da44b97",
"main.dart.js_278.part.js": "f68d4ebc7f6379103732b8c96ba3dd92",
"main.dart.js": "87c346728bd882ca3cab4320f31e2502",
"main.dart.js_222.part.js": "f20a3c35c7e9df01d6567ab65cdff737",
"main.dart.js_232.part.js": "ddaf5b6f2aa5b2f7260585ae663e72cb",
"main.dart.js_148.part.js": "05a5c91e3bed3414ef87afbd6f7655f9",
"main.dart.js_293.part.js": "75d07d9f24b68a0bfb1deb6ff078fe69",
"main.dart.js_124.part.js": "a48dc6acdec9d7394dfcf6a2845afa22",
"main.dart.js_50.part.js": "b6ae83fc3b2ab086dd687da38f98f821",
"main.dart.js_97.part.js": "e1ede436978725b56b502300fbba420c",
"main.dart.js_91.part.js": "7fc4d62f71dfdcfdd1a91f7e0a6bc6b8",
"main.dart.js_145.part.js": "a8d031c5ad80017b291c9074f12e5219",
"main.dart.js_57.part.js": "1fc4783b5210fdc7fa579438378dc5d9",
"main.dart.js_104.part.js": "71242e7821da94ab89702e5ad0b13186",
"main.dart.js_201.part.js": "957940fca56974b5ce40a674eae041a2",
"main.dart.js_181.part.js": "2cf1f859c1dd22c4ce9444138961f53a",
"main.dart.js_270.part.js": "dfdef29e9255db84d81879c0ac72e033",
"main.dart.js_108.part.js": "310d94a8f575608984e8ddb0779b65fc",
"main.dart.js_158.part.js": "4d6d559bb102177550b4283d7675b77e",
"main.dart.js_33.part.js": "ecffb98a51961f54eee42a31c547ad38",
"main.dart.js_275.part.js": "2dd6b895d7677abb6d10dee4bd1aca1f",
"main.dart.js_269.part.js": "c963c4c27055f413dc8b4e3d6cc356eb",
"main.dart.js_34.part.js": "aded7168081c62238f4e8534e9170ae0",
"main.dart.js_210.part.js": "8e6babfa2025db2d93dea1fea9752b94",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "39eb17080b8620021dea4973cf9b8889",
"main.dart.js_88.part.js": "6ca4697921a145d71d2b3db8b1fc9f0b",
"main.dart.js_202.part.js": "a2f4fc9ee7ba7c063a49a905eb2b1dbe",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "e073292887a4c9e5fda2a2e56f68bfc8",
"main.dart.js_247.part.js": "2cb2ea3f80893ce7f6c524cadae46703",
"main.dart.js_7.part.js": "773a4078c4e5e6466fbceca9eea0030a",
"main.dart.js_140.part.js": "ddfe43292244fb9af5907bcb522c3650",
"main.dart.js_170.part.js": "befe5a8275df81dd8e02f322e31c75cc",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "efcd347fbb28f74a8e72080ecfa9e8ff",
"main.dart.js_27.part.js": "f6cfcf0581720749c394cf7b571a5fa6",
"main.dart.js_156.part.js": "eceeae63fba39b03b1febee3568be0bc",
"main.dart.js_4.part.js": "d64f2a473b6e9b105d4e78926b817502",
"main.dart.js_298.part.js": "cab211bc20c2a5b8102ba7d4413d0914",
"main.dart.js_219.part.js": "2fd7bbc38793cd8b4018d6cd6acc40f6",
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
"assets/NOTICES": "4d24ce412454bbf54d6c33db7e5ff36b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "ca45d7fc9303dd44efe5c758068ae352",
"main.dart.js_147.part.js": "1df173e04a799bc4876ba20867974d2c",
"main.dart.js_60.part.js": "3894ea421198c7f7f1be3d029dc33243",
"main.dart.js_263.part.js": "97d273faa923ed74a6ea6e22301de7f8",
"main.dart.js_220.part.js": "4d4c50dceb7454a8fe3b94be040ad173",
"main.dart.js_25.part.js": "d02b27f3771a958695b69dc2cb9496e8",
"main.dart.js_288.part.js": "14f225f4ad1dddc04c1a0205129bd14f",
"main.dart.js_141.part.js": "27d5d6d81291475dba6535f233af29c5",
"main.dart.js_249.part.js": "78659a9bab2019ecf8ad0fb195ee42dc",
"main.dart.js_123.part.js": "3a54cd1d8ff03a24f21042a342a826e7",
"main.dart.js_268.part.js": "9fa1764ee7389c0c6332697e30abc08a",
"main.dart.js_8.part.js": "4c1860d1cc4fe989987a5b22f6ce20be",
"main.dart.js_198.part.js": "badf90cd26687839e9e7cd7c4d54a526",
"main.dart.js_81.part.js": "ae611dac27acfc4691bae10f9e5dd1b4",
"main.dart.js_113.part.js": "5dfa60137587ce6b001a88d4f8526e23",
"main.dart.js_280.part.js": "ae8aa31b89c4cf291849930ee88b6cee",
"main.dart.js_9.part.js": "1505c5248f25e0adf2e242545794711d",
"main.dart.js_99.part.js": "8d69a2ba0294098044067844a9f0644d",
"main.dart.js_22.part.js": "886a1e286582e88b1fc1708fd0195e9a",
"main.dart.js_272.part.js": "f2b5e1e716cc5df9f8319b1b72ff0642",
"main.dart.js_242.part.js": "5065ff7a7d1b81ca9bcc07075acdd179",
"main.dart.js_86.part.js": "2d0bd004506ad02e95944ee7b615819a",
"main.dart.js_23.part.js": "a874515665bd2dcff0a765163959c798",
"index.html": "b579ed23a0df0c8c709bfaeae858aa0a",
"/": "b579ed23a0df0c8c709bfaeae858aa0a",
"main.dart.js_94.part.js": "e75632110e9b4789cc38a3664c5fdb30",
"main.dart.js_98.part.js": "dbd22cc448dc5abf15835e59ff69ad91",
"main.dart.js_53.part.js": "9adac9bf6b99aea9811b4fbcdc3c8000",
"main.dart.js_74.part.js": "d93be271321db9a0f1246c383f8d1c40",
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
"main.dart.js_286.part.js": "267ab20b83df6d0f607e309f1778f6f4",
"main.dart.js_118.part.js": "b93f9abf5b867fc170887a88ad8efdd5",
"main.dart.js_262.part.js": "0be15eaae9e611fc5e50739090965ee4",
"main.dart.js_26.part.js": "736426dd7406d59e4c4859dc17fa1cd5",
"main.dart.js_240.part.js": "b907a8b54b5ba144bc1ead5117fb7547",
"main.dart.js_20.part.js": "8b15b6f2d9db9490b88285c3465ae014",
"main.dart.js_214.part.js": "7877ed1b114ffdd4e4903df704cd3edf",
"main.dart.js_51.part.js": "35355c94aeabae0b435c222edefce9e9",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "6fed0468c8924fbf1ed03977377df894",
"main.dart.js_290.part.js": "95dbed43a96e8897e2e8330fa19cd23c",
"main.dart.js_1.part.js": "cbbd9859bdbd5dc92b6ae33bf8445461",
"main.dart.js_120.part.js": "b34c4f2f28d467124a5f253fdb9c1292",
"main.dart.js_63.part.js": "1cb7724a16a0a8bee0a189ff93ecd2b1",
"main.dart.js_211.part.js": "5cfd390e84e8c61d90e38f980dbbab40",
"main.dart.js_295.part.js": "89cdcbb479892986f4414445b85c937e",
"main.dart.js_12.part.js": "7643e668d76467431d0e0be9cee0f414",
"main.dart.js_157.part.js": "29ad830b0e3f4e7d87104ab8afb7687e",
"main.dart.js_281.part.js": "2753d2da46c3c6fb702b6635d804b4c8",
"main.dart.js_137.part.js": "11465bf4fac38f8b6b06d05b2d5e07f3",
"main.dart.js_276.part.js": "051b0b20c327805e969889b4c42e3df9",
"main.dart.js_28.part.js": "945cc11bac1c4e2b3690c050e9415cf5",
"main.dart.js_135.part.js": "237efc3aef0069d504748b8fc3f3c0b9",
"main.dart.js_256.part.js": "b8d5add86f821d3776f34e101e6e6011",
"main.dart.js_237.part.js": "95e6cf459d186e99e3934bbe5f695164",
"main.dart.js_138.part.js": "f64c2b777d1cca998ad56dbc03a7c907",
"main.dart.js_193.part.js": "e05fbe75ca3c76de610475463e5ea0b9",
"main.dart.js_17.part.js": "cbbafb3cef5927ba1ab562266a6e4343",
"main.dart.js_105.part.js": "78501caae2a1a1db667fdb9abc8bd5ee",
"main.dart.js_206.part.js": "858ad04cb7e1839614be1c4afe83f765",
"main.dart.js_231.part.js": "249422b39de7c5c530ed8906dacb285c",
"main.dart.js_43.part.js": "1b776cde630e6b59bf06092c49170a3c",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "ec192fcbd9387cecc4957615ad53e184",
"main.dart.js_292.part.js": "8348f68370bb96767b522ee12e29a8f4",
"main.dart.js_15.part.js": "99a36183530a4d67420c26735d43d5d3",
"main.dart.js_19.part.js": "eeda6d5d932423e40e345212cb4011f8",
"main.dart.js_284.part.js": "29026dff89219a4f4e971e817c28956e",
"main.dart.js_255.part.js": "a7a5698d394560dbc987cfb0113478fb",
"main.dart.js_186.part.js": "942619942a898d15add18c2b4d477bb8",
"main.dart.js_163.part.js": "7f60aca9cb9bcd6bd60de445ba20c84d",
"main.dart.js_154.part.js": "3d060d563c723a81f8478a222faf59dd",
"main.dart.js_257.part.js": "554a57575bdb67c41648233c496647d0",
"main.dart.js_16.part.js": "d9bbb5e94fa210273a091c98d4e88090",
"main.dart.js_250.part.js": "d487ff0369da750da8ac472558d44a63",
"main.dart.js_36.part.js": "51797c9a1495459261c5789ac109cfe7",
"main.dart.js_199.part.js": "5838442040034ef8d4cbc4864034d05b",
"main.dart.js_130.part.js": "120a9435c592ec1016d807926979027b",
"main.dart.js_238.part.js": "330c8a1608b7895b1954be6d5d585c3f",
"main.dart.js_152.part.js": "eeba86820dd4e0938cd867e5c1abbb97",
"main.dart.js_32.part.js": "90dd6a55bcf7673ae71feecd916445b6",
"main.dart.js_197.part.js": "de125b3067eacafd9bcefe339a9c4d00",
"main.dart.js_56.part.js": "2f7c279a5047c7f521fe755a7c1e114b",
"main.dart.js_227.part.js": "2df228badd9db575eed22b3e30b86755",
"main.dart.js_3.part.js": "a9b6a268968526092a26485f710530e4",
"main.dart.js_68.part.js": "5f2a7264ecdbcd77c82258569c7eab8c",
"main.dart.js_248.part.js": "fe303c803aab87c5f3a76f6e1516d9da",
"main.dart.js_133.part.js": "6c8b5c422a5f5bd4d7fb0212ec119e18",
"main.dart.js_188.part.js": "d76835dfd816f09935a6fb4f955bfeb8",
"main.dart.js_204.part.js": "86e5fbce0c204d63a78045b4abdcf316",
"main.dart.js_24.part.js": "a82f86a1cd390ea5c0233cd24306b9aa",
"main.dart.js_90.part.js": "f6e2b182c3bdf41b50d37ec26af7ab7f",
"main.dart.js_177.part.js": "42a73270a6029130b3454fc7fbd925f8",
"main.dart.js_299.part.js": "df449c0892283c96d4cf16f3e33e4879",
"main.dart.js_85.part.js": "36cbd17b4d95f33e757381051a6bf4cb",
"main.dart.js_243.part.js": "3338c864fc90be2d37cd9882cd5fde69",
"main.dart.js_212.part.js": "bbf533b06078c48de60430b028328438",
"main.dart.js_260.part.js": "f44e4fb3d1d439f6c04a4a388afe3197",
"main.dart.js_114.part.js": "bc8708041d94cfcf12e2d7d4db56fbf3",
"main.dart.js_39.part.js": "40f3315b5de26629e51676e35a5e9226",
"main.dart.js_49.part.js": "67d74591d8db2543e9f093764ac73973",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "3753dc5c090eb4a092f4e5ff9f5fb93b",
"main.dart.js_195.part.js": "e5c9e7ef46360b49b3aefa91873a92cd",
"main.dart.js_121.part.js": "16f8e2c5f2c04a7db3ae17a0019c6a74",
"main.dart.js_215.part.js": "4716ce29b0c58a16cafdbe7ca67cff31",
"main.dart.js_112.part.js": "9819fabd13757401390cdeb86ba1d5a4",
"main.dart.js_143.part.js": "e3748d0a2b4c8f04c52e31ce242dbffd",
"main.dart.js_80.part.js": "4e18c46f8b539d71b86a2881458244fb",
"main.dart.js_279.part.js": "cfee122fe93be5f7a835949b31a78cce",
"main.dart.js_30.part.js": "a758656eec181ace9929c2a18cccc590",
"main.dart.js_267.part.js": "d180687f02f6f49b8d23db70076a99ce",
"main.dart.js_277.part.js": "0b3f197e187f350622c2b4d6f3c34f28",
"main.dart.js_136.part.js": "3c98a77e8c9e247d4c928290b2055605",
"main.dart.js_168.part.js": "8640fd47ce17c69d2978d231eadad736",
"main.dart.js_271.part.js": "610c6e27e3aa90cc2836925e791ad9e2",
"main.dart.js_59.part.js": "a0fe46a6b236df0e6cd408da3c402377",
"main.dart.js_47.part.js": "4b6e36a10d35c4a7065352cba1d06ec3",
"main.dart.js_95.part.js": "04951917eb36adf2102d224d99f791de",
"main.dart.js_107.part.js": "2f4f55f0570262a725b771004c3f679f",
"main.dart.js_29.part.js": "bd16dc5fa44bec50948438db598f2919",
"main.dart.js_236.part.js": "825a46706f0aa4196f930f79e7399379",
"main.dart.js_58.part.js": "9893cc287cbc9ca98b40b18a1d5b01fd",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "a79376a5a3d2b312fb38779e6a564b3b",
"main.dart.js_79.part.js": "3b430d1af71b85ab47a36473dc98a344",
"main.dart.js_109.part.js": "d3f1f0d2734e7d104ef756194398b175",
"main.dart.js_92.part.js": "0bb16a500f8512ecb5fe90192ba0c75d",
"main.dart.js_224.part.js": "34e27cf393b2b2d8e54d7bca9e783d4c",
"main.dart.js_93.part.js": "bd22427c5a26585f5197d31d7697f230",
"main.dart.js_223.part.js": "7b58a007567df1ae5b534c8856851394",
"main.dart.js_11.part.js": "5d1d37f20ed761818b2470eba5b27886",
"main.dart.js_125.part.js": "f08bc68d1d45ed980786c6bf5aef5d1a",
"main.dart.js_131.part.js": "d8628ecaed010d734359b5b79999ac7b",
"main.dart.js_226.part.js": "05eb88d55286f76fb60294a5fd1223f3",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "7c74dce2013268502a555c9b8c85e31e",
"main.dart.js_178.part.js": "6a40eb20420397c093e5fb69fbff1953",
"main.dart.js_258.part.js": "776697922f8efff708a1ea5027c6864d",
"main.dart.js_297.part.js": "b4143b343e1117ef1c503435f824fae7",
"main.dart.js_70.part.js": "abc0cf8880f0286f2b9e075a3a2978e7",
"main.dart.js_187.part.js": "4e36661dd21c9e26d0a76d88d5237010",
"version.json": "1ef3f7ea073b19b518ea752aa8507607",
"flutter_bootstrap.js": "5f5d8e89580ef6549e03405bcb4724d8",
"main.dart.js_191.part.js": "072c23c60013330b00f1038adaa42198"};
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
