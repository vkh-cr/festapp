'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_290.part.js": "9353fde57698a93e84e174e137a55d13",
"main.dart.js_81.part.js": "c1682aa2841d50a032db309438c7baf1",
"main.dart.js_177.part.js": "fb80a2fdfa00acfe7b455f4d22cbd562",
"main.dart.js_190.part.js": "2eeb76edc01ffe93c024ec50f2cb8d50",
"main.dart.js_247.part.js": "7eb634ba452c020fda3a732aad757974",
"main.dart.js_154.part.js": "609004fc11541328fd5f5034054a85a4",
"main.dart.js_87.part.js": "741156187cd2b20e8d72f2438170e261",
"main.dart.js_159.part.js": "615ead5fe71e530e04382e9421c2a476",
"main.dart.js_36.part.js": "76e9fb40738f395c702ad6ff83ae1776",
"main.dart.js_194.part.js": "331e9d9fc187a371fe9cf8398c1f0e20",
"main.dart.js_299.part.js": "65f734c9ef437ac5704df9bd07dc1813",
"main.dart.js_199.part.js": "79518378612b88753f5679dc3ec9faaa",
"main.dart.js_138.part.js": "d8b1141edb0e5a0241aef58d16c4c4f1",
"main.dart.js_122.part.js": "8a1a3710e99bbc8831857b7663c766c3",
"main.dart.js_25.part.js": "89216ec035d65ab49f90238e151fdc46",
"main.dart.js_251.part.js": "b3cedf3f653411d0d5272abf8a1715e6",
"main.dart.js_206.part.js": "535c8db3a34d75310779f3bfd688be06",
"main.dart.js_249.part.js": "af810ee84b1717d3a8193716a1acfc2e",
"main.dart.js_61.part.js": "2eaf6c1019eff4c0319737c865747434",
"main.dart.js_148.part.js": "83b0cf4f4c592768a0ce4bdf30a2a9ed",
"main.dart.js_14.part.js": "7c7bdd8a3c573debbed4d61a83cffa80",
"main.dart.js_64.part.js": "bcec86401eae67175a2a3b278d851cb6",
"main.dart.js_255.part.js": "8ab4d27bf0aa1f4a938795d7b8bcaffb",
"main.dart.js_178.part.js": "f339623fa02ebb1ac975e4ef727c0457",
"main.dart.js_246.part.js": "25af2386bf5ee51d5757d1bce49d1c07",
"main.dart.js_167.part.js": "b9fd689301c15f51b8f6d43fd49db3ba",
"main.dart.js_116.part.js": "9af13c492ca38d822408243dcfa1f9a8",
"main.dart.js_134.part.js": "2691d1fa5c15a6b73e2b986dcd353400",
"main.dart.js_274.part.js": "2294731717fdcdcb242b642434fbb36a",
"main.dart.js_72.part.js": "e813e47cbfd91a094c5ec0e0363afa09",
"main.dart.js_219.part.js": "94c40691fbb910b1e8f61f003a85f9ec",
"main.dart.js_125.part.js": "05527c8977344996ea73e0cb64322bd5",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_207.part.js": "f99f0ae0944e08abf533cc6a3e3ba748",
"main.dart.js_38.part.js": "0c6f6acad25844c323ff01488bb203d8",
"main.dart.js_318.part.js": "4e2929b91190562a9f2a395f2c7569b7",
"main.dart.js_316.part.js": "bca5edcd16c6194a7dbc434438e70459",
"main.dart.js_205.part.js": "e4dc2ac8580e698e2bcc4f9b75eb89d2",
"main.dart.js_276.part.js": "eba1ae92d0afd8997258a2fae6d0709d",
"main.dart.js_220.part.js": "250bc9d0c0a9e341c1a5bed439a489b1",
"main.dart.js_6.part.js": "aa99dd0557a8db4409a6a5df49ec25db",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"main.dart.js_169.part.js": "8a8060762dc59065bf65e9341ac8d181",
"main.dart.js_146.part.js": "b6b17b10e25fb764b1f95b2071db212d",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_57.part.js": "ad5733f6694d1290ba93fc2fdaf3ff10",
"main.dart.js_264.part.js": "67d10d9f777cdaac39bca94ee6cbc7e3",
"main.dart.js_285.part.js": "22eea3a61b1346ef3c368e331267b664",
"main.dart.js_314.part.js": "1885323d880256d45f408315e2ea1fcf",
"main.dart.js_307.part.js": "e47818811d4042f1fcc48b20b063cf7f",
"main.dart.js_85.part.js": "99fcbf830af07eb0ba9d91cdfd37f957",
"main.dart.js_200.part.js": "792e84bf87d4c8a678d4b98e53218ce4",
"main.dart.js_1.part.js": "b47bc85ac0784d2e1525d6779e5acedd",
"main.dart.js_191.part.js": "6c7bce2b84763cf27febb1d6dd7e22a3",
"main.dart.js_39.part.js": "8ade0c327959f365c5253ddccae832e5",
"main.dart.js_8.part.js": "2a7174735157abbc28fae48ec0eaed6b",
"main.dart.js_139.part.js": "b1794a9fadbc846109aaf691f6b9d3a8",
"main.dart.js_140.part.js": "738ed4f3b78464702883b609cfc6b0a2",
"main.dart.js_93.part.js": "c6303fc5d63aef63cdd99eca613ba33c",
"main.dart.js_275.part.js": "9456a059ee4d8ddd5ce1cf710e258271",
"main.dart.js_180.part.js": "492ccad68697c9910f1ffbbbc22f5f02",
"main.dart.js_179.part.js": "cac1816bf1724daacdb33e4e2715c1ff",
"main.dart.js_13.part.js": "c8734652f917bf051782b48e67819645",
"main.dart.js_48.part.js": "316fb2305a156fb56a9eb4a692c6f1b0",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_310.part.js": "f7298091bd7e938d2462d88fe77b27bf",
"main.dart.js_231.part.js": "24a75f7e8e7bb7309e30791769ae36e3",
"main.dart.js_300.part.js": "8a2677220b6d3a8e41a1678ca0f82280",
"main.dart.js_68.part.js": "3fb5996be01f7d4a49628dff966d5025",
"main.dart.js_269.part.js": "1aaa7c2cce2296c8a7abd4b8805979cc",
"main.dart.js_298.part.js": "0a7a3f60953cd3ee4fbf43bb913eef0d",
"main.dart.js_174.part.js": "e74507e4ef2a141d8c010fea444d5902",
"main.dart.js_43.part.js": "22653825e852e7a0babf65a81a0a2e5b",
"main.dart.js_59.part.js": "4a8f92d0c9f6dd3d9d10040d0a53c65c",
"main.dart.js_28.part.js": "225b17ee6f32050047a6e2ef242e3882",
"main.dart.js_303.part.js": "03bf654c3090c0e752187ca06b7b17b1",
"main.dart.js_270.part.js": "8bfb9538523cae850b94a2f4188831f0",
"main.dart.js_286.part.js": "6a5e101501b7b4d276e554363fac9084",
"main.dart.js_312.part.js": "dbdda8d80d0064908583e0917145d08c",
"main.dart.js_35.part.js": "c1a4ad0c17a685eebe85287e7115b60e",
"main.dart.js_75.part.js": "6da775c9a1ca256029979d9ea165b0ca",
"main.dart.js_11.part.js": "5e40e00cc9a1396d62738ca2da51a402",
"main.dart.js_123.part.js": "422c833f52c621da6de7cacb5796c5ca",
"main.dart.js_252.part.js": "90bded2c3db3cb78e391d6b9b1694877",
"main.dart.js_37.part.js": "a51d399509e13dd6a8433f9fc64d28e1",
"main.dart.js_235.part.js": "18b1905de1cfcae80d4e96f49cd25233",
"main.dart.js_168.part.js": "38599d16db13cdbf8b08e686711ce53a",
"main.dart.js_112.part.js": "3215b68cbe8836512dc464c05bef8191",
"main.dart.js_313.part.js": "590b2b15015dafc64ac1e742a0f99044",
"main.dart.js_26.part.js": "e758843fc5c19759f6f83208fb254e51",
"main.dart.js_30.part.js": "4ca43a112d78297fcc9b8be224e5a00a",
"main.dart.js_242.part.js": "d1485b07f27a736771ff0790494b3dad",
"main.dart.js_86.part.js": "54957681e1fa7efb3ed8753134027b6f",
"main.dart.js_283.part.js": "f8eefd73a6ab9c781a3351db394b94a6",
"main.dart.js_293.part.js": "5f224aaa44a90870191aa88cd0bd80f0",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_126.part.js": "261a6e61384ed0611cd0460171300016",
"main.dart.js_3.part.js": "02c5a40aba0567bbf51ed6497fff90a2",
"main.dart.js_80.part.js": "1c5449a8aad278e7f8e23ccd0b287b37",
"main.dart.js_113.part.js": "5b376ccb0fe9e0abba31ef35c7317ecb",
"main.dart.js_277.part.js": "6cad781342d56a8b0b4213b509099b17",
"main.dart.js_241.part.js": "df06be37d90319382097537f79a8318b",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_188.part.js": "fd95812d6c498972477134c8ca41268f",
"main.dart.js_32.part.js": "e74efdc525ddff0b620239b782a6b6d5",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_4.part.js": "33c15f5e2bd3b76996e0b2240da51276",
"main.dart.js_53.part.js": "bfd46c6c74f504ae30ba68ac75bd24aa",
"main.dart.js_78.part.js": "22cb9ac799a0b72c902c9c5962b0a5e9",
"main.dart.js_223.part.js": "e15c6c5efc9dc524b38c9b64e70fb378",
"main.dart.js_15.part.js": "27b2acfada5ed65fdd2940b690be2ac4",
"main.dart.js_105.part.js": "18d6767a049eafbe5766176809490861",
"main.dart.js_311.part.js": "98bfd0672218d666fccfc9a7f2f06662",
"main.dart.js_217.part.js": "0d07a048dc59753e2f68d332e0f45e52",
"main.dart.js_107.part.js": "139f3016618d71d390759f3ae6339d0b",
"main.dart.js_248.part.js": "6ba460cc0d4bf366d271bc68ed62e88b",
"main.dart.js_45.part.js": "41574d045b1551cf5a84c513a9839097",
"main.dart.js_160.part.js": "f039a4d22c55dbfe34e6b626f7e58249",
"main.dart.js_289.part.js": "1b88d6700aaa25775699afb2ccb4279d",
"main.dart.js_96.part.js": "4773bb1af2fac2deb91d2f1a8df0e931",
"main.dart.js_147.part.js": "52322673888107fb1666fd2cc0064e10",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "1b72a4dc7cbe53b2e1064c3a937b5730",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "f082dab5050cdf2973229cfe0b6c3d7d",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/uk.json": "1794b65021c354763a0a830b83ee3fb1",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/cs.json": "0b6c1e4404da068a9ced90478998bfc4",
"assets/NOTICES": "a7b8f578c50dfe948059051e6983e332",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js_145.part.js": "67c5eb51b9cc55ad2d3de30e0739d562",
"main.dart.js_210.part.js": "bcdfa1fc7ab288dc8c4dac2e2886239a",
"main.dart.js_141.part.js": "491d5c3f229ea80f877705bc539db943",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_172.part.js": "629cb06bb3ee418a9f9d53000d20bb6f",
"main.dart.js_84.part.js": "9939107870c6d6473494914480b55727",
"main.dart.js_82.part.js": "7e75321d46666f29ed4354d3044acbd6",
"main.dart.js_31.part.js": "72dd900b7db055afe10063b14ee52d5e",
"main.dart.js_115.part.js": "2892b7c160eddfa43d43f74f3611894c",
"main.dart.js_189.part.js": "2da7d4e044324f631607461eed0891ae",
"main.dart.js_268.part.js": "68c13fe0111ddc6cc3b325f3d90929c3",
"main.dart.js_301.part.js": "6e31ce7f7eccaace96377a50e83f60b4",
"main.dart.js_192.part.js": "a6c4848b99e3642a914b65c71c5dec9e",
"main.dart.js_198.part.js": "19dbfb6761202fc584f6a4611564525e",
"main.dart.js_215.part.js": "9756a10de2cd69a98614ad07d193055b",
"main.dart.js_193.part.js": "eb75f69df222afcfc6c43a66333dcb6d",
"main.dart.js_195.part.js": "3f2ea0b345b8a99072e92b1412f1724c",
"main.dart.js_120.part.js": "12074bcf287b9b53db7e98d1d39c59ce",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_106.part.js": "10168213c039d4e6c2fbbc30b1d76a80",
"main.dart.js_152.part.js": "38ba3b2612b8289dcc07f71ff8c06ad0",
"main.dart.js_302.part.js": "a5dd54e41eda04c4478a7aa1d27dac26",
"main.dart.js_181.part.js": "13ef0f83fd78661b9558f10785fd86ae",
"main.dart.js_51.part.js": "6b989daeb469802ea3f7d435e38c564a",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_237.part.js": "ed5e0f9714e8a9d82c381c64c69dfb31",
"main.dart.js_173.part.js": "65ad75d10e77fa909260a165427beaa6",
"main.dart.js_170.part.js": "996931a1d69fee2492be3b15e16671e8",
"main.dart.js_34.part.js": "84c6647e43d020c8fb10f368aa609b5f",
"main.dart.js_24.part.js": "073f90619d0481de259669d6200dfdaf",
"main.dart.js_18.part.js": "e86cf8c56128e8035ab31144016b3a78",
"main.dart.js_2.part.js": "b5830ea6f91ee567bdfc6e32a5efc0f9",
"main.dart.js_69.part.js": "07ad93843c0859b55ef0b7c9ab74120e",
"main.dart.js_70.part.js": "10c8d971b0d2a5645143fc2a111ed627",
"main.dart.js_88.part.js": "5bb0c1d52fb9129a04618b41973ed77e",
"main.dart.js_27.part.js": "abeb1ea41629b12fb6f6c6b0577ff55f",
"main.dart.js_238.part.js": "cb92e96585cd9efded6e2814fdb70df9",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "7562a7b75e30f6356cb8872a3bf516cc",
"main.dart.js_244.part.js": "6d1824b758d63f69291b8e0fe8726ce7",
"main.dart.js_137.part.js": "5c0beb57d17d501470d5770baffcac0e",
"main.dart.js_99.part.js": "40ef96655f3a116fe2d8b90c7dc05d83",
"main.dart.js_44.part.js": "d6f166b4eaaba331a619bd909b6adb6b",
"main.dart.js_114.part.js": "6ff83409aa2707b951e4a10e4413a120",
"main.dart.js_10.part.js": "70d415f67db0db6cc830ab85f278784c",
"main.dart.js_56.part.js": "88964a0e391ae0442568b8bb0bdbd5dd",
"main.dart.js_183.part.js": "a192f39bbfc7b7200e563bbb275f899b",
"main.dart.js_129.part.js": "fc3538024b31f7d7afa0474db09a28a7",
"main.dart.js_5.part.js": "1f99456afa94b4b87f77f790aeabb4fc",
"main.dart.js_76.part.js": "58beaa88e6d0419100c95d63bb69122e",
"main.dart.js_265.part.js": "8414e25bbdd9a2b5cbeedd093bde6f31",
"main.dart.js_7.part.js": "85924cc63d0ac727a8bb8bd1648b2510",
"main.dart.js_16.part.js": "0f3f6b010f51aa8ea6dd81d03513e0f4",
"main.dart.js_294.part.js": "b7f86e161795fdf47093994195767cc8",
"main.dart.js_236.part.js": "2f2e8dc6273d799f2574a7f0234b0532",
"main.dart.js_259.part.js": "bbed95858f80ca8c6af7c5a5628288c4",
"main.dart.js_90.part.js": "670ab43bd2f4e167abafdc1d738cea5f",
"main.dart.js_260.part.js": "6070e13e739cbb6214431f61ffd29947",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_317.part.js": "e93defff2a610dd1edb4344119f481b2",
"version.json": "ce222a816317ab370de74518f244cfd5",
"main.dart.js_153.part.js": "653f695cb9d167e3f80d14f6626b18d0",
"flutter_bootstrap.js": "a774a6c85e4200829b0a2f0845f80141",
"main.dart.js_176.part.js": "9bce60d38d74b960fff036403a5372db",
"main.dart.js_245.part.js": "aa09fcf7aae7780c94db87f715728dcf",
"main.dart.js_306.part.js": "2d47fa0efb7f39cdd36403781b8f12a0",
"main.dart.js_209.part.js": "e57de675bd6c6e191a59353fdd363e95",
"main.dart.js_224.part.js": "5b4530e0b69e5cefd002c0c78e32d4e0",
"main.dart.js_150.part.js": "0e0d45fd041cb23656f6f1397f3bf96b",
"main.dart.js_33.part.js": "f2bf7d128fba45d63da278e79669735d",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_9.part.js": "7c0b3fde43d68242b1dc65cd6bf6a8a3",
"main.dart.js_155.part.js": "62e62fa5bc6bac7e62bcfb58c84bb89f",
"main.dart.js_309.part.js": "e148f05364d4550a99f241a960126e2d",
"main.dart.js_239.part.js": "7ad2f0a9b58f732657d85cb2a18a3d39",
"main.dart.js_284.part.js": "8923f56cbb1154591c4891367ff65a83",
"main.dart.js_214.part.js": "cd7cff5d710f617b489b30f1837d08dc",
"main.dart.js_42.part.js": "1754a724b54f437c8d63e8c4e0ba30db",
"main.dart.js_111.part.js": "789c21637278b0debca8b65e866c8c28",
"main.dart.js_218.part.js": "26a3e799d2346f32f7d1ad284aa818a1",
"main.dart.js_127.part.js": "a577c8529fba01eb74e82dcedb5ae25f",
"main.dart.js_291.part.js": "bf835a732d05578e550097db2b47bcf8",
"main.dart.js_98.part.js": "677e67d9ec3abdfbf50334ebfab4db79",
"main.dart.js_258.part.js": "f70ac4dc1120c9a204f5f13fa449c449",
"main.dart.js_163.part.js": "b2779843417ace0eb4b50b8819c7cfde",
"main.dart.js_287.part.js": "e6a2698df1bd21b20f3b803544c7af61",
"main.dart.js_161.part.js": "076501932bd041ba8f05bda2caea7667",
"main.dart.js_49.part.js": "a5e05fe70cb6e86fc21ac75ca5e25584",
"main.dart.js_22.part.js": "d603858b6f7062f4ae9136ee66536cb6",
"main.dart.js_308.part.js": "8ec6b3dcf1ca0dd02c6c270bfb8f0c0a",
"main.dart.js_233.part.js": "71a9775eab0c87b00c12f6a6522c70e5",
"main.dart.js_212.part.js": "30d21ba322d3f8c59afdef8b2619f2ba",
"main.dart.js_136.part.js": "0d5f75d9997aad3e01b39398b8451c27",
"main.dart.js_131.part.js": "b24515bebf5c8a757536c3d81ef712cf",
"main.dart.js_279.part.js": "260082f2beaa4d59e077f5a5266edbef",
"main.dart.js_12.part.js": "310da284cbbce4d287e9dd337c7fbced",
"main.dart.js_62.part.js": "25e324b55feb49e391307cc300ee9c62",
"main.dart.js_91.part.js": "5d2a80efce63a674db20c3b1d7e3023c",
"main.dart.js_232.part.js": "baf32d73bfabc304c9bebd8d622850bd",
"main.dart.js_273.part.js": "7dd9421c914fbf99b1782cefdbf10860",
"main.dart.js_104.part.js": "b9bd7d33935988b5e9692a50f64f76f4",
"main.dart.js_71.part.js": "865588082004181908800302d47a1464",
"main.dart.js_296.part.js": "277528acf0542377a4da81053d4cf65c",
"main.dart.js_50.part.js": "1e36851803c50b179ecec5e39eb42a91",
"main.dart.js_97.part.js": "48b3d4426f12ffa73136c4e774c59725",
"main.dart.js_278.part.js": "7c6d369ee02b7771af3474156a6f04fe",
"main.dart.js_305.part.js": "9d09b2edf0170e84bb02b9746d600c7f",
"main.dart.js_89.part.js": "026a8496217c65f75e2755b4ba3d831e",
"main.dart.js_117.part.js": "23cec3b0ebf7ff644b869221fe4c99fe",
"main.dart.js_292.part.js": "730ff5932568e0b6b656d31f6b6296ac",
"main.dart.js_108.part.js": "4066f28d8282fa011a5061e8fc005ef4",
"main.dart.js_295.part.js": "6380cd2e569d3304bec3b3d24eb395b8",
"main.dart.js_221.part.js": "521a02e60caa85a86cd17ec8287a9dba",
"main.dart.js_47.part.js": "5da1d4ffff031c94ab71d7e425a3b0e0",
"main.dart.js_142.part.js": "e21ff7926cdf4eeda1b6aef0c23f5bb5",
"main.dart.js_55.part.js": "dc34e3ff8f6a9f22373392825cb5b022",
"main.dart.js": "758d124b1a492d7ad46eea3149f5c8f0",
"main.dart.js_280.part.js": "67aa685806323ada7942f3fde38d8bef",
"main.dart.js_202.part.js": "5b3c5d93425743ee3a58b072a3e41e0a",
"main.dart.js_266.part.js": "96a1143b100ee6d82b5597ae521ee88a",
"main.dart.js_261.part.js": "b298790c633bd7006634144dd240f572",
"main.dart.js_130.part.js": "257a1e16583329f0661cbf561f74c51b",
"main.dart.js_41.part.js": "d0b99d1e980955ca60d941ef73eca6b0",
"main.dart.js_29.part.js": "9585f40d29e8cdee8a8f52955806cd4b",
"main.dart.js_254.part.js": "f6c8285353d94319490544fd10ce135a",
"main.dart.js_58.part.js": "49f0b281069ceb086657c78174b5a927",
"main.dart.js_73.part.js": "34871b49c5633b2449c20e05a63ae2a6",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_186.part.js": "c45ea2be70d87ed204a608ff758cf487",
"main.dart.js_271.part.js": "a533b96ea7a2e655826e08499c017c02",
"main.dart.js_151.part.js": "14a4a48d26470cf638371e8df24a02b5",
"main.dart.js_74.part.js": "b29a5c2f5bf2d92ea4d110137ed2ef9c",
"main.dart.js_165.part.js": "6359c6e9a7011dc88c5e2dc6c7f6063d",
"main.dart.js_263.part.js": "4f3e2637566f9f5dc9fffccec604c96c",
"main.dart.js_100.part.js": "076072bd8852334fa14aac9ad3aa74bc",
"main.dart.js_101.part.js": "39cbb6634e3bb26cf8d8837ec3c6fc2b",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_281.part.js": "aec6010400a6c23f71f587f583f71d8b",
"main.dart.js_185.part.js": "54bf54d7fcaeb09eb69d569057e27c88",
"main.dart.js_250.part.js": "ac413b395c31e2f0a4b9f4f2d7e77365",
"main.dart.js_102.part.js": "198eeb35b6429251b8ffe7e84db2a6e4",
"main.dart.js_216.part.js": "6cb531dfbf4fd718f94e34d1467ed8eb",
"main.dart.js_119.part.js": "eff4c8518c53c6f6a4b37fe52d670d81",
"main.dart.js_225.part.js": "655bb8062da2087e872972d7c43e57fd",
"main.dart.js_171.part.js": "5487bfb052c7f655b50dfd066768b3ea",
"main.dart.js_162.part.js": "e92f98cbe903042805f8a3c89f2df526",
"main.dart.js_77.part.js": "3834039e2d40f23847f45bae0765a0a0"};
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
