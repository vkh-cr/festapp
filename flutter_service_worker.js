'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_162.part.js": "36ef0ce1f5566ec98ef62cc02140cd63",
"main.dart.js_117.part.js": "d0f39fb708e73c318f19d1766cacf441",
"main.dart.js_182.part.js": "fe6909e6c10e22a979535b14b1517165",
"main.dart.js_244.part.js": "6e8e08728026b99fd4f3bf329d9d6c68",
"main.dart.js_83.part.js": "b276f4d6b97d80f870037989437c4233",
"main.dart.js_254.part.js": "55232396cdb7f4c1b1a9ce0b778a075a",
"main.dart.js_176.part.js": "9ccb68f14dcd39532b51e464a33ae0eb",
"main.dart.js_96.part.js": "ebc66d9acd497d968a2a0a39f8d3df48",
"main.dart.js_245.part.js": "6f4093a46c3cbf25f28982cf67752601",
"main.dart.js_87.part.js": "0b13885c5b5915e89f0a92fd120b90a6",
"main.dart.js_251.part.js": "0a512eae6da10b6c5366635a19d7b49c",
"main.dart.js_126.part.js": "748112139eb669135e2248084a4f7429",
"main.dart.js_129.part.js": "b2e312e219c0e9079bcff9732d97563a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "6a796ebd02df3d51bccb5edcdc1928e0",
"main.dart.js_172.part.js": "642582175ab8313604ba8bdf7ddf9794",
"main.dart.js_40.part.js": "207fd78164e046f3eca258b93e1d8dd9",
"main.dart.js_209.part.js": "6a00b48b41cd295275392542141a5474",
"main.dart.js_115.part.js": "e9b5065317af51265ce85336def96562",
"main.dart.js_10.part.js": "5fa8e34d5d710c64317adf2af69565b6",
"main.dart.js_84.part.js": "7e1b1f9deac53aa0f22d70271418fc12",
"main.dart.js_122.part.js": "cd153f7596c7e19cb2e1514d82cc6386",
"main.dart.js_230.part.js": "679d8691decf58e73f8a1487d679ab9c",
"main.dart.js_213.part.js": "2bc143ab9d4e7ba10c11ae196f136659",
"main.dart.js_89.part.js": "a65598a3e20f14870b5d12c8f1e0ccc5",
"main.dart.js_146.part.js": "a91a5e83f9288a8d96803e0441a31908",
"main.dart.js_37.part.js": "4cbc5671795822b88d4c2f16df500752",
"main.dart.js_132.part.js": "ab0239ac432de172d94b3115ca392cc0",
"main.dart.js_165.part.js": "3ad44850da4db93378b873201624e9a2",
"main.dart.js_127.part.js": "d0591f0f9955d66100d3a7d71798598e",
"main.dart.js_161.part.js": "dc55dad00c1768e8ebd38dde355e4f2f",
"main.dart.js_175.part.js": "a496b1ef673009619cf64b2f113e6585",
"main.dart.js_239.part.js": "0e122fba38df6090aaea91e5281f31f9",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "512224b7d1108c50295935d907f783ac",
"main.dart.js_64.part.js": "704e990e8788a63422f70c785830a113",
"main.dart.js_169.part.js": "938a110e90d376c869b88078d9db916d",
"main.dart.js_246.part.js": "b585821beb65afefcf46ffee2d5fbc76",
"main.dart.js_174.part.js": "f247ee3e152766d306d1974833bdb4a4",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "626606b93e0e0a3aa72d82ed3561b979",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_119.part.js": "109bec4f3fb16617a7da67575315dc5d",
"main.dart.js_18.part.js": "882d860f0343bd4e866f15d8e408aa66",
"main.dart.js_200.part.js": "180cc7927200da3b9ab4af05d33d9be6",
"main.dart.js_73.part.js": "c3881e9652e0158b5e6146d8e7306d5e",
"main.dart.js_101.part.js": "80798ee3bb53e5933c3516e787d63b4e",
"main.dart.js_77.part.js": "12ae6e0a2ae93900c4804dfbcdd42d2f",
"main.dart.js_149.part.js": "e9cfca1c81076bafe53bc410c8754d86",
"main.dart.js_67.part.js": "d8d8dc4c4dbf16b72461d539dc2a2316",
"main.dart.js_208.part.js": "65682ebe8b43b1c8e32aef6d8834bd79",
"main.dart.js_82.part.js": "b2a361cc5df5963c9c8610dae14a22b7",
"main.dart.js_173.part.js": "683fa20234a7280d589ff32cc85d527e",
"main.dart.js_106.part.js": "dcd525a2c2e88adf7921a7ae161e6304",
"main.dart.js_62.part.js": "b6998494d52eeab88b670262dc6ed144",
"main.dart.js_207.part.js": "5b0420219a6328af2e9f7fd18c44cc3d",
"main.dart.js": "fd8215c41d958d3ecb365db00d8df973",
"main.dart.js_222.part.js": "c6ab984b7951771a81a73a83b6c8b9bd",
"main.dart.js_232.part.js": "e32dd06280b1b37ff3e101b9942dd908",
"main.dart.js_148.part.js": "be3eb50144f290b63e159b76f9203b9a",
"main.dart.js_124.part.js": "edacf38dcf1ac29978aa2baaa182bc00",
"main.dart.js_97.part.js": "dda8c2db1cf562f7d9c7760c11f5aadf",
"main.dart.js_192.part.js": "d948ccc149eccacfb41c23c639003c18",
"main.dart.js_91.part.js": "c532f820fe0807439855fcea23837426",
"main.dart.js_145.part.js": "e80b9fd91f56302af49abe1b9a6e8220",
"main.dart.js_229.part.js": "178ab48b06d066a2c345d78ccfeda3be",
"main.dart.js_57.part.js": "29e70d7d618f96e4adc9b8e0b68e74ff",
"main.dart.js_190.part.js": "99c812efc9ecbc73c9975478a4aefce4",
"main.dart.js_104.part.js": "6f0feddb7a87d657064a46e732fffcb8",
"main.dart.js_201.part.js": "604c4db370be9010346e24fc4d142fcf",
"main.dart.js_181.part.js": "54005fc11a9110257272b3abb3dea7b8",
"main.dart.js_33.part.js": "c088d55c3ee8a271da12abae8c1c0dd1",
"main.dart.js_217.part.js": "d5fdb9290496f27cae11e9b3c196c415",
"main.dart.js_34.part.js": "7e7b88a8eb9d4e0aa1909617358535ec",
"main.dart.js_210.part.js": "2c3d5d2c3ab65c6c75f63bd3a7d2214d",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "e25f05f8e7811c712bacf6790f54d534",
"main.dart.js_88.part.js": "dda7932a5ebf1c7cb1905ad15e9bbcae",
"main.dart.js_202.part.js": "bb56d1a14c7fb464c3aa85025b427fc1",
"main.dart.js_183.part.js": "df9a9d02508a46bd7eab17d0f8a9129c",
"main.dart.js_167.part.js": "8713d3682f157c537202f388eabd4cd9",
"main.dart.js_203.part.js": "96c060ab8563d459647baf3c34a4913d",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_247.part.js": "7e999ac2b452c0aaed8027b91d4f1284",
"main.dart.js_7.part.js": "5e26d983e22333e9e38f91fc0b42a0f7",
"main.dart.js_140.part.js": "066f45b10142dda9c76964ee0f289be4",
"main.dart.js_228.part.js": "4b190f4ff17990141476946cd4923c1e",
"main.dart.js_170.part.js": "17db5a34b255c7221586921f445dcb11",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "125d553b28e98c859bc78ab46b18c580",
"main.dart.js_27.part.js": "de58e9639463e2c14585be4e44b5e9bb",
"main.dart.js_156.part.js": "53bbdfb2a6c09297c2903a78f5805e2f",
"main.dart.js_219.part.js": "8d482665f022d82a7b2328da7a5ae532",
"main.dart.js_116.part.js": "afd84a6aa35f308713beee0c8a9ccbda",
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
"assets/assets/translations/uk.json": "1f36bc810aad089953ddc6c4faa5ed2a",
"assets/assets/translations/pl.json": "7cea7364ffc07eeba1ddc83ba7907075",
"assets/assets/translations/sk.json": "6393634bf09f92f853024c5c254fb363",
"assets/assets/translations/en.json": "9ad09f1e8306bd6a8829aa88cbbd0a23",
"assets/assets/translations/cs.json": "d723e5d3d56d7e60f2797af0e2a4327a",
"assets/assets/translations/de.json": "34beada0ffe82776957233bbaf5b2a14",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "f11c02f0a20fe8473fb281c679638ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "193db35016e3492cde161cb498ba2444",
"main.dart.js_147.part.js": "32b22edbbb633415ad976473d223f643",
"main.dart.js_220.part.js": "1522a70f573d7f8e7dc7bf781bf96195",
"main.dart.js_25.part.js": "a8e59bf3729e045645193ec11408b242",
"main.dart.js_249.part.js": "148ee9d4136ec2654a6bd22ecf5538b2",
"main.dart.js_123.part.js": "a961da7087a6a621d9ef9ad3aab5f119",
"main.dart.js_8.part.js": "61b91a085d84c2f2e453ea75962667c6",
"main.dart.js_198.part.js": "9aee20f23c52fe1c66adbfe0e1c05826",
"main.dart.js_81.part.js": "476c572dc371c10b959f8d94f14264b4",
"main.dart.js_113.part.js": "cd9702f8d4ea80ebc3b0a95d9235289c",
"main.dart.js_9.part.js": "0624842119fa1f5ad769a34604b46955",
"main.dart.js_242.part.js": "9b7a8dd061bc47b7f27212d275efe760",
"main.dart.js_86.part.js": "4a7a5b2ca07be623d6a01471aec617d9",
"main.dart.js_23.part.js": "0b0a592041b44e977e79b18ba1578255",
"index.html": "a2d0c361f1a63ea60105eaff76c40947",
"/": "a2d0c361f1a63ea60105eaff76c40947",
"main.dart.js_53.part.js": "369dc488db6f0716f03fcf8b9fbf9b83",
"main.dart.js_74.part.js": "26f726a6712cc01b58310fb993b2ecfb",
"main.dart.js_235.part.js": "19f6fedcd71256575c96db2fd5b0325f",
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
"main.dart.js_118.part.js": "6507e3d138084b3a1776e843475fbfef",
"main.dart.js_26.part.js": "e6d185c5af849b2d2061d9b0575e8941",
"main.dart.js_20.part.js": "65940740c9e0cc53884543ea328a795e",
"main.dart.js_189.part.js": "b7f5177456a39e71e54380ba68b32bd4",
"main.dart.js_214.part.js": "d1d01db368c38940a04ea5d818d8b875",
"main.dart.js_51.part.js": "eea55a585ffc2af6d4e08137a6869d0d",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "5fe4bbf1d22c9edcbb9450635252d5b3",
"main.dart.js_1.part.js": "4772a885a3895925dfcc57a8d9d01ec0",
"main.dart.js_120.part.js": "965a74f4bed24a4f5284e96105aae9a1",
"main.dart.js_63.part.js": "320d9f6d28f0098bf6eec9f468070ed0",
"main.dart.js_211.part.js": "14d6407db8de78e9e79f7e9bfff5c054",
"main.dart.js_12.part.js": "7e2ae0a2c70dcd2f1cc73ae6ac8541a6",
"main.dart.js_221.part.js": "9c5d8ac98e092d720abb306d2e8bed7b",
"main.dart.js_137.part.js": "0ae738499facfc86da980bf9f017d948",
"main.dart.js_28.part.js": "8dcf62214d45436656ea40bbda1e301c",
"main.dart.js_135.part.js": "c45488cf32c87cae4fdfb15f67304c6a",
"main.dart.js_6.part.js": "23767be64514585a569b0883b0cf2edc",
"main.dart.js_256.part.js": "ef8c26ca5f774496384f94abbc56460c",
"main.dart.js_193.part.js": "0418824b84ab09e93495f8fbfaf205fd",
"main.dart.js_17.part.js": "09ed5dd5824adb2eca262882e9d225c6",
"main.dart.js_105.part.js": "1b4a430f62475efe2ed1c3189e696386",
"main.dart.js_231.part.js": "6501d4c1d24d8a6e7261a1c0f0e05af1",
"main.dart.js_43.part.js": "ae9ff97e08b8553d24002c5cf26cd5a7",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "252e2814740cfc46e7022be8edf3b6d1",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "c704c38f179ec31df97248af2796bc58",
"main.dart.js_15.part.js": "b05a5183f25fdb7f13e3cd8edaf8fc70",
"main.dart.js_19.part.js": "e1452872a0e7bb9674761e9ed0de2d02",
"main.dart.js_255.part.js": "66bea8670ce2cf8ea1d28129bdcec32b",
"main.dart.js_186.part.js": "adc09cbf9e634f18effd587ca52817f0",
"main.dart.js_163.part.js": "1c06d311e479bc898ed38e830e1811f8",
"main.dart.js_154.part.js": "ddcb4f6cbf77467828d69934d6932301",
"main.dart.js_42.part.js": "91fd445ea34ba5852da9c308bf46734b",
"main.dart.js_16.part.js": "5558127bd92169adf7ed353c638eaaf5",
"main.dart.js_250.part.js": "d5cfa79fead2621b076982713eb7325a",
"main.dart.js_52.part.js": "0e6b41e1640ac9c04fc914dce00bb305",
"main.dart.js_36.part.js": "033b5e38f02616a8bfed5b6e2ff7bd79",
"main.dart.js_199.part.js": "fddc97fd34d9a1ccf7192d756f7ffbfc",
"main.dart.js_253.part.js": "7a0a1b64fb6d190b2b71ee7886f605ba",
"main.dart.js_130.part.js": "ad475629aee83ed4b3922b053bafff1d",
"main.dart.js_238.part.js": "bf8c45ce1fd55c36d54ce55097efcc40",
"main.dart.js_32.part.js": "f5b3853b341ed7126cbc26b19fe33af1",
"main.dart.js_197.part.js": "a69d08ccbd43a533295228f5a63b58f3",
"main.dart.js_3.part.js": "591366cf20a8fb54dc53e4cefe547f54",
"main.dart.js_68.part.js": "ae73fca01512b8a8fd3c6298a154d5f1",
"main.dart.js_38.part.js": "50d2ceb88278ad54f4be1f47305d1727",
"main.dart.js_225.part.js": "8fab1bb1c7b9a3d74e0c99fbae9bc3c0",
"main.dart.js_248.part.js": "77abd77c232fe8bbf44b411133e6cca0",
"main.dart.js_133.part.js": "ed5d29b24e801d06d888e41c12821066",
"main.dart.js_21.part.js": "01bc3c7c756c6a85e168c95d96eeb0bd",
"main.dart.js_24.part.js": "186c77333d8abd5e99751cc815e42605",
"main.dart.js_111.part.js": "12ab00e8c153e49fe9913ac6ecf0c214",
"main.dart.js_177.part.js": "6c2e2ed4b1262d06865fe05ce51f0434",
"main.dart.js_85.part.js": "ac9f2d78cb4669281575a99c29c97ace",
"main.dart.js_243.part.js": "5922c4cf711226da7e808c887bb2e51c",
"main.dart.js_212.part.js": "fcde4061df5e0a19f970dbe12b8865c6",
"main.dart.js_114.part.js": "41426afa6b06f25ee414abfb88b3b542",
"main.dart.js_39.part.js": "153cddf9bd4b49b06e1ab83cdcf62c1e",
"main.dart.js_49.part.js": "b81c0d6306dec9d8ad42ffb40d9b59d9",
"main.dart.js_185.part.js": "731dbb2e55b44ccab8c96d980f503c8d",
"main.dart.js_46.part.js": "d0790874292e08a6753a22c279e28050",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "a3aa215706e3472997bc653a41a9e6e9",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_76.part.js": "b1876ac09031e9d2859f3d1c6711401f",
"main.dart.js_134.part.js": "c6c0b4fe9bc6566297218560a660c086",
"main.dart.js_195.part.js": "c85143f4e78a5f9b91a0435b5f12cff8",
"main.dart.js_121.part.js": "18a764de035e25ba9543bb37f92d4909",
"main.dart.js_55.part.js": "45b5cb7c2e9177f4538940d7c20772e3",
"main.dart.js_215.part.js": "999cbbc687421e689da13a0070de63eb",
"main.dart.js_112.part.js": "f7f34549ffd9e1f127da81be625195a9",
"main.dart.js_139.part.js": "7bdcb566c6215e17a2455e15df5a55ad",
"main.dart.js_143.part.js": "8eb2ce323434874aab575320c88d9a19",
"main.dart.js_80.part.js": "39d81773c993d26f84d894c2574acabb",
"main.dart.js_233.part.js": "c2e015551845ed7a56ca63b04cfc59ff",
"main.dart.js_30.part.js": "16362586c79d1dfeb371aae063038603",
"main.dart.js_78.part.js": "959a5f1f3effaf0ebcd5f9affce28715",
"main.dart.js_136.part.js": "90100cce4979a9d981a3608870b16c92",
"main.dart.js_168.part.js": "937a1352bf1320b41bf0affe1cfe10bf",
"main.dart.js_95.part.js": "c1d2e7bb2a149e80295407805f4196b5",
"main.dart.js_107.part.js": "a2a632700e4019ffe8ea93b1567a3984",
"main.dart.js_29.part.js": "39d2462fe041be4bad5741f2db6f89fe",
"main.dart.js_61.part.js": "c0656ea410798ce6b6a9778368b9c7dc",
"main.dart.js_236.part.js": "06e72cf1fa5b8cb3d5ece84e953ad3ca",
"main.dart.js_58.part.js": "52358db3ab8c2c28d513e8fed9e9c9a6",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "32066e056230f61afe9cbca97cc0bd24",
"main.dart.js_54.part.js": "dcfb0f4509fd827f60622f7082d91a5e",
"main.dart.js_79.part.js": "5f8d61074a832b3020848ab804440bca",
"main.dart.js_92.part.js": "0f861e8ec74f7c4a79b7acc377e74a24",
"main.dart.js_93.part.js": "d87bd2768e58f26c4c57ae2922c4a46a",
"main.dart.js_223.part.js": "c8b46428d817babb77f1aa6b264c7733",
"main.dart.js_11.part.js": "d25d4f4b17ddcc252e6bbbe15098a429",
"main.dart.js_125.part.js": "cc50bad228e70d2dfbfe8bba93e5d5e1",
"main.dart.js_131.part.js": "cb6b5ff9a696c8bd836caaed2994aa45",
"main.dart.js_226.part.js": "05f138a7b9835991533c4922552a9c18",
"main.dart.js_14.part.js": "961a0230db75ffd29c65f54590e14a2a",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "5c9cc3b2ea5a209c5a200349c0184e64",
"main.dart.js_100.part.js": "168f86a6b200d9c0e6fa06666b9061db",
"main.dart.js_258.part.js": "e0f7b8b56653e0e69950019e271a3931",
"main.dart.js_70.part.js": "3d82d4f4a8a095061a1e790bbc5d68a2",
"version.json": "8eccc37b0c2b359fa2cd6be183ebf681",
"flutter_bootstrap.js": "42ad8ac5a5ba8b22e7bdd58149f5c196",
"main.dart.js_191.part.js": "06e112807478b4eb243fa7433493025f"};
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
