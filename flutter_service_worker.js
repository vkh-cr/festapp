'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "2a9a7d6d36fbc48b405332abf20741ef",
"main.dart.js_162.part.js": "18e314f2b89910b8bd52606a6a735af9",
"main.dart.js_117.part.js": "862810526e7d1939265bc4f2d8e94593",
"main.dart.js_182.part.js": "e855a0b9e7bf5d76321cca6b8f6b5a06",
"main.dart.js_244.part.js": "535831096371857edf7900e58cf77852",
"main.dart.js_289.part.js": "4388f0c9aac537fbd8c8ff7ee6532285",
"main.dart.js_83.part.js": "c1a47b82fc10a1852075a77b314a4f05",
"main.dart.js_254.part.js": "8eb0f1ff57915e29895b9601a0e0b45e",
"main.dart.js_96.part.js": "aa9161dc4026b81c4e15f73e28fb4f67",
"main.dart.js_87.part.js": "2d840ccc60465658eb58d479aad7e2f3",
"main.dart.js_285.part.js": "e6b3235f415024239a33be852b09600e",
"main.dart.js_251.part.js": "264828000507d565fb492e69e05b156d",
"main.dart.js_126.part.js": "4e49f3772ad4e202025f3dfe3d822480",
"main.dart.js_129.part.js": "f5f336764ba9b2cd298f0277accaead2",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"main.dart.js_218.part.js": "17e3956de0ac0001cf0044f8b219ee83",
"main.dart.js_142.part.js": "e140c41fddcf5b4c0b4956ec93549ad8",
"main.dart.js_40.part.js": "8ace7b40a3cf815f6b3d7e11e33cdd7d",
"main.dart.js_48.part.js": "d2cdcafafc38cd7fda175b8ff9ef030d",
"main.dart.js_115.part.js": "08810d7b43182f1db65c99df447870d0",
"main.dart.js_10.part.js": "103a18f3896365eee26605893580a628",
"main.dart.js_84.part.js": "1e8f191d48551b0b8c00bbbe809e0b59",
"main.dart.js_230.part.js": "de89fa036958bcc07977c78d42dcbc7a",
"main.dart.js_153.part.js": "2069e8cb81d21080415c7380bfa54619",
"main.dart.js_89.part.js": "aa22973ed3b26da3b3b0404e040ffc66",
"main.dart.js_71.part.js": "4247e27e52055b66c7f5228595b53c28",
"main.dart.js_146.part.js": "0fb3f78807ec51c8545ab1c0f434d1e5",
"main.dart.js_37.part.js": "13027178858c3a9261f3301fc329e05b",
"main.dart.js_287.part.js": "5d681429f269fc181b22aec09182eb41",
"main.dart.js_283.part.js": "c02ef23e9a37a320ee156f52a2d385a7",
"main.dart.js_132.part.js": "f3363742b3d4ccd0bd4ccb6000232828",
"main.dart.js_282.part.js": "0bd5b304558fdefe55b7c28f277ad64f",
"main.dart.js_127.part.js": "de8cb47028e479399be10408586a66de",
"main.dart.js_161.part.js": "e6c94b327912e1de55d3cfe7d4a7e9fe",
"main.dart.js_175.part.js": "76b66f3b2fd7b75a6e8a9cceb952fd2b",
"main.dart.js_239.part.js": "f3f3384bdaa41961ae0382ae4534ac8c",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "9206ae29ce5f7ec5ec15b2ecbed280f5",
"main.dart.js_216.part.js": "fbd0f26ed1e2020c83a98f6a243b82d4",
"main.dart.js_169.part.js": "8fe4aad709f5ba9ca0d12768bf799506",
"main.dart.js_13.part.js": "1cfec82675e170d6f20a6eaba031a6fe",
"main.dart.js_246.part.js": "a8d5c64f1adabe0f5fcb5f98a222be9f",
"main.dart.js_174.part.js": "5a99894abc289e86131afdde0340742e",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "66e04f174e63338b2534c03559781c97",
"main.dart.js_144.part.js": "c5f79906c6f3e5e7cac0e82b6c5abc70",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "37bf35048f26a0102a4a0f38c7e69599",
"main.dart.js_265.part.js": "db1cca2641692e3484b02d65178ef27b",
"main.dart.js_31.part.js": "fe7dab9e4569b1a9a7ef6f186f5f85c2",
"main.dart.js_294.part.js": "882e8b3fe5e4cb7306adaf1f514b5a41",
"main.dart.js_18.part.js": "1fde5c2e20cd29e0c5f2281dc0932ddc",
"main.dart.js_35.part.js": "33c5749e9408f13ee705805623758c9a",
"main.dart.js_200.part.js": "3bd73bae536c962ba4ad103403ed656d",
"main.dart.js_73.part.js": "441cf5b255971d83328f007a2ad9901e",
"main.dart.js_101.part.js": "a9ff0137e149c2b9a898b458ab7ad5aa",
"main.dart.js_77.part.js": "37cdb919ea0edbccb95c47851a8b5bbe",
"main.dart.js_149.part.js": "bace5647ae16a4629fc60c19f8073fb5",
"main.dart.js_67.part.js": "04ac014a863c6e4112533af5d252d062",
"main.dart.js_208.part.js": "659e929409418eeafe6370ddcf2c24d5",
"main.dart.js_82.part.js": "444dd585c1ab6c78a5c0ff9dc7737844",
"main.dart.js_173.part.js": "bf3e97fbf6b96559d3063f0d750b10e3",
"main.dart.js_291.part.js": "cf68b34a4c78691b50cc430513d7dee9",
"main.dart.js_106.part.js": "2ea7da9ec80d2d42be399286c22828c6",
"main.dart.js_273.part.js": "1f1af37db7bad8ae276b5cbd8f0caea0",
"main.dart.js_62.part.js": "e88d64373e450ca7502f6e2d0f290124",
"main.dart.js_259.part.js": "180f2f09198d12aec023c6837e2e8323",
"main.dart.js_278.part.js": "5823c95d70cba4ecf6094dc4309242ad",
"main.dart.js": "988bcb1a566ca86a0b4dde5929b260c1",
"main.dart.js_222.part.js": "b84b93c562f7c150f65c8cb2f6621fa0",
"main.dart.js_148.part.js": "ec126d9658feb031b1be6e986093a054",
"main.dart.js_293.part.js": "e6afffcd29533fb178bfa82545f40704",
"main.dart.js_50.part.js": "4e23c390170709add019650a28977eb6",
"main.dart.js_97.part.js": "abf7631412fc04a36296426e3d09c8f4",
"main.dart.js_91.part.js": "116465895d0314e96d88d140ec6cf2b8",
"main.dart.js_145.part.js": "d365fb3e5cb62d873a6242a9e13fb62f",
"main.dart.js_57.part.js": "e569273c9f4782a39b4b04a40741312d",
"main.dart.js_190.part.js": "fc00b0dbf7768636cf123c1152107cd4",
"main.dart.js_104.part.js": "5b2d4e5a087f6b7875d3a04a335d2bfb",
"main.dart.js_201.part.js": "7aafa48ae9ce2c1093847fee418a356f",
"main.dart.js_196.part.js": "d98f2345c312145d6b853942a1a6ffcd",
"main.dart.js_181.part.js": "3d5324af72eca58967574e888d0bcb21",
"main.dart.js_270.part.js": "6aafb9e393712d946f9c6a3adb6411f4",
"main.dart.js_108.part.js": "1f68883c9321e6e159d2c6b06217fef2",
"main.dart.js_158.part.js": "89bc8d19ed845896d833f2a260f566c8",
"main.dart.js_33.part.js": "20499f928e384728d7671b69f313be3c",
"main.dart.js_275.part.js": "1c815fc298f87794bfe13720e5b69a6b",
"main.dart.js_269.part.js": "710cb09dc072b7671286228240c8fed3",
"main.dart.js_34.part.js": "c0dfd825faa314a1773cbf78d31a932e",
"main.dart.js_210.part.js": "41bb4e3566ad46c0c5c62b461ae04918",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "5d431bac32790562c63605fc644d1e16",
"main.dart.js_88.part.js": "5a763dffd91339e70a4812c9c603f6b1",
"main.dart.js_202.part.js": "227480cf835dba2676786492f3a6adfc",
"main.dart.js_183.part.js": "4a3d80f47b6db0bd9fff732ed3f4fd02",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "f3b984d679fc121559d7ba8ae7264992",
"main.dart.js_247.part.js": "e5f1bd262b38c5c057f2363fe8d05667",
"main.dart.js_7.part.js": "c91d4ad36f3b699c2fe70b3d93075fc0",
"main.dart.js_140.part.js": "aededa33a1459f2582a3cce5a4406217",
"main.dart.js_228.part.js": "b893bb9022b9eb1b709fa102e3fb51f5",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "d5f9ef9531b806fab7d57cf3e5e3184d",
"main.dart.js_27.part.js": "74953c24784f8adb31e33200848d3387",
"main.dart.js_4.part.js": "a27fccb2b3ec981c8b2c44c094235fc3",
"main.dart.js_298.part.js": "a4c728f153e1e9afbe8d8dc2b8cf7834",
"main.dart.js_219.part.js": "d7e379ecec8ae431986cf2eb892b1c3f",
"main.dart.js_116.part.js": "434d26977f9d155fa5daf7cfe12d3803",
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
"assets/assets/translations/en.json": "9fa2cf86c3a43ee9892b1718ff3259c4",
"assets/assets/translations/cs.json": "184994cec3e40667d794c38b53a738c1",
"assets/assets/translations/de.json": "d8339af262142bd3b7583326d693f3e6",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "9c3b9cbaaf54fceb905b5fbd59c8688b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "ef795f72debe2614373e7ae8e770daff",
"main.dart.js_60.part.js": "7c68a12b20d09fcce88948a84b0363da",
"main.dart.js_263.part.js": "8ade75b1a46e401b23206f3007146d85",
"main.dart.js_220.part.js": "cd02db73c17b401b3788f1875d0d0d2c",
"main.dart.js_25.part.js": "2dc27c0f054e8d94bf1ba79dd7eddb69",
"main.dart.js_288.part.js": "e8cfcccf51660364878b121987d34f23",
"main.dart.js_141.part.js": "ce0c2ef542243729d99b6efa45d45a84",
"main.dart.js_241.part.js": "cd8a5d12dae25b365e78ae23972316dc",
"main.dart.js_268.part.js": "1e22acfadc53cadcf48dbe7a7ed444cb",
"main.dart.js_8.part.js": "ca6de7b688c5ebec46e75c8e5aa421ce",
"main.dart.js_198.part.js": "bc69591df55b0e30873c671447800eed",
"main.dart.js_280.part.js": "65f4373f179bfe49ef3ae746a45952ad",
"main.dart.js_9.part.js": "fb19669293968a1a69d77df8508abfaa",
"main.dart.js_99.part.js": "5519428f2e3f097aaa1c563de7685c4d",
"main.dart.js_22.part.js": "e7ea7917dbcd71ae35c32dc642d9b2ba",
"main.dart.js_272.part.js": "49dd12f7aa9e6d5aefaf1e70b8f05f26",
"main.dart.js_242.part.js": "aa6844770f9a0673dfbe666dd5517ee3",
"main.dart.js_86.part.js": "67f873f690b98616b2d396ea585385aa",
"main.dart.js_23.part.js": "3febaa6dd2a99cba3c180dc8f19cb434",
"index.html": "066dc303b8f2a0471b6f98156e038f01",
"/": "066dc303b8f2a0471b6f98156e038f01",
"main.dart.js_94.part.js": "63a03be338129b63f782b0e33a8874b2",
"main.dart.js_98.part.js": "11dc6bac2b8f0a79d834813f9e3e789d",
"main.dart.js_53.part.js": "88051b12e6010ab7da523712482df82d",
"main.dart.js_235.part.js": "84cf32255c61619a8ce30247d700fc97",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"main.dart.js_286.part.js": "42d50ff8dfb03fe6c750b529b76324d2",
"main.dart.js_118.part.js": "f93c9d535b6e57c92f68f292d0a775dc",
"main.dart.js_262.part.js": "16bae2e148c84f632616961c0d85280f",
"main.dart.js_26.part.js": "c7fbe5d1bc39d57a73ba8967435a6871",
"main.dart.js_240.part.js": "1473a918f84ebf46c10878e4c44adc09",
"main.dart.js_20.part.js": "d9882b1243187499367df7fb566b7ead",
"main.dart.js_189.part.js": "b6f704c4c1a634363c95d05a51a7dc33",
"main.dart.js_214.part.js": "378cddcf86b85807361987010a8a4e17",
"main.dart.js_51.part.js": "e85535f014eef6610e1f8d8ff82a8a57",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "bf8c7236df0433ee40a8ea75aee068a9",
"main.dart.js_290.part.js": "18fcdd12f3a252826e1f4b7b19859b1a",
"main.dart.js_1.part.js": "6b623ff726f2d665ed7ddcce24e0c165",
"main.dart.js_160.part.js": "f185e77433f2154e2abfd8b3b7339729",
"main.dart.js_63.part.js": "b8fc2b6d610e89641aa11ff30b1feffc",
"main.dart.js_261.part.js": "26635363167fa63a815902691b0452ae",
"main.dart.js_295.part.js": "24ef8cee7eae3718fdf5cd0dc936333b",
"main.dart.js_12.part.js": "07817d773380c45ce8a9af543345cfdd",
"main.dart.js_281.part.js": "c61baee675a5d36379aeefa4c8577483",
"main.dart.js_137.part.js": "2e57708d3ae2f0960866d62c28b07d7b",
"main.dart.js_276.part.js": "586866527b4ddc1b9bb47b73e3c8fc3c",
"main.dart.js_28.part.js": "02387e75b5922da4215ec05e0fef517c",
"main.dart.js_135.part.js": "a3c1c42e90e432fee9a7a5f53365c7cd",
"main.dart.js_138.part.js": "4ce635e29849f964c28ae537d1cc8ee7",
"main.dart.js_17.part.js": "89ee8d6bcca36b0033b569ff2a219b3d",
"main.dart.js_105.part.js": "d12b161e83d33308d0feb9038c554ec9",
"main.dart.js_206.part.js": "bbb5c2a7922192d6ac19601e7561463c",
"main.dart.js_231.part.js": "2529ddd6d6af7b49285c9f07218c56a6",
"main.dart.js_43.part.js": "b1ed41be7e25b8ee43aa2f7b5be62a98",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "46eec6e6286395019192f03435988f30",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "721ec5f91083fbaed6f2d57eff379a14",
"main.dart.js_292.part.js": "1c736dfc0679f789a95f6e5fb3cf93df",
"main.dart.js_15.part.js": "5932ee5bf5fa3b27bf720c5433780d28",
"main.dart.js_151.part.js": "84dec7d240efdf4860b836f920c3c5ca",
"main.dart.js_19.part.js": "24d0c06ae99de4fc6db04962b3edf792",
"main.dart.js_284.part.js": "7eb5e51ac74a48f7bf751e846dfebcac",
"main.dart.js_255.part.js": "161745c929c4b2ff86a28b8121f9af88",
"main.dart.js_163.part.js": "137048711bdd748824f5a8c3c71a56ee",
"main.dart.js_154.part.js": "eeffe23aa234f9b8c4ebcead9219ad6c",
"main.dart.js_16.part.js": "d452f7c03df2b303bcdbf5bc9314a3a7",
"main.dart.js_36.part.js": "7ea5f358069a5c27e3c837097f8eeeda",
"main.dart.js_300.part.js": "c553cfc616c8d4a6a7557e6f0532ba78",
"main.dart.js_253.part.js": "bca763c013d37c6eb3f6ae725fe97894",
"main.dart.js_130.part.js": "53677d5328f4beb18946ea693dce82a9",
"main.dart.js_152.part.js": "b620b18f69f01e7262afc0de571d7e68",
"main.dart.js_32.part.js": "78b3bca7c3f6fa5cf29633a977c610a7",
"main.dart.js_56.part.js": "3bb056fd6f9d8bf15d82193cbc96fca6",
"main.dart.js_227.part.js": "4398b35ee236fedabbd0be0c59591d39",
"main.dart.js_3.part.js": "a9babbf42dd5d9af505dde9fccf19837",
"main.dart.js_68.part.js": "b9425c88c7525aeeada5cfad074864a9",
"main.dart.js_248.part.js": "eb71a7c60a91c1511d94936e6896457e",
"main.dart.js_133.part.js": "d678e5a8829f2fdbb7cd60d56e2a95ed",
"main.dart.js_204.part.js": "672eacba5379fd16f5cbdb6b527de0dd",
"main.dart.js_24.part.js": "26d3ba8e3e735ceb55503bdb8355a212",
"main.dart.js_90.part.js": "b3dd2ac226b58fe4c57f58279928b974",
"main.dart.js_111.part.js": "02f3266234325b65d212ba62db131908",
"main.dart.js_177.part.js": "5eaf635a25808f1cd5d0f24d4d3020d1",
"main.dart.js_299.part.js": "0abe89388c0e340b517b3d87a2f2edbb",
"main.dart.js_85.part.js": "b6f7672bf1e51e64ec0d9c877e08066d",
"main.dart.js_243.part.js": "fbf58e0e86a5b1482b6046131989347e",
"main.dart.js_260.part.js": "e817bb02b09551b8d0ab8f1064f5999a",
"main.dart.js_39.part.js": "d4b5272a0cfa9f5dbc0f9617788fc6ac",
"main.dart.js_49.part.js": "2033e8443d5ec9c35544d28bad3cb838",
"main.dart.js_185.part.js": "48a7fc5614379a7361290781c36ce525",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "b62d62ea10cd6daecdaf755b11fddbe8",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "996da2c63aa0f0efa3a8c93b81e0f6a0",
"main.dart.js_121.part.js": "4204f838b255723ee9930e0f126e7588",
"main.dart.js_215.part.js": "c81e7f1ee2c42f8b327c5594dec09536",
"main.dart.js_301.part.js": "cae19ef062290f0608128dafdd218949",
"main.dart.js_112.part.js": "301545d7fcc9b5971fcd3551570e3ac1",
"main.dart.js_139.part.js": "b1d6480217dc7c7872e08f172bbf0770",
"main.dart.js_143.part.js": "72381fef6199ef458b3f460f59052005",
"main.dart.js_80.part.js": "c10c9522225f58197a3ac450cc7bac03",
"main.dart.js_252.part.js": "d123441dad937621094ad0aa5df53d92",
"main.dart.js_279.part.js": "25da6cbab6ca6ed2b77e0f5ab4751b4a",
"main.dart.js_30.part.js": "bbac1ba22d4240ece65d180025e7baec",
"main.dart.js_136.part.js": "d19e9944e80c9eae3cd113903c487a5b",
"main.dart.js_168.part.js": "fdddd5fa5c17e0a5f752654678f0c5c4",
"main.dart.js_271.part.js": "f5a2a5cf767319984c475bfa479356d0",
"main.dart.js_159.part.js": "84547f88f13b8d2a9da6835e7856230b",
"main.dart.js_59.part.js": "79c410a62f4bdda1fcbf84313167b6a6",
"main.dart.js_47.part.js": "f3911e9c4085cdd80391fb94790abb65",
"main.dart.js_95.part.js": "c87d58045181a61c837c16f4d13e3c8e",
"main.dart.js_107.part.js": "22170d6c418246efbef7162b17b7bd46",
"main.dart.js_29.part.js": "dce19aa91d4253165d99029967389caf",
"main.dart.js_194.part.js": "d1e5c6388b3c844b0b780e636b5cdccd",
"main.dart.js_236.part.js": "a2c477e1a4120198a7ab1f9df63832b3",
"main.dart.js_58.part.js": "4c059bc83f7f635bde1e5ad7c50548db",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "27f226aa9da372512f84d552fc42a789",
"main.dart.js_54.part.js": "10bc71c36b6eed5db95a30d8a0a3d1c7",
"main.dart.js_109.part.js": "f3e44fd64ff90f99babd2f57cefedcc4",
"main.dart.js_92.part.js": "d5ff94b8b6b8716c2841cadb42324350",
"main.dart.js_224.part.js": "e344462a953fe861c473592a5f8bee01",
"main.dart.js_93.part.js": "b0062db6e9807c06dc164eb9b9f039dc",
"main.dart.js_223.part.js": "a7941990cd0169084fe374257998022d",
"main.dart.js_11.part.js": "8bce0d0163608e6345ffaab62ab2364d",
"main.dart.js_125.part.js": "80778e0d6ab7d05f958b6cc282b0eff5",
"main.dart.js_131.part.js": "e4cb2ef163cbe1e0aa1459d034028ab7",
"main.dart.js_226.part.js": "0f9c78e92d20cbea967a9a6943ccec3f",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "652e60bf47f9f2c405cfc8c9bdbb731f",
"main.dart.js_178.part.js": "9b7b3390ecf0ff4aa6aa05bddaa72ba5",
"main.dart.js_100.part.js": "1b7f525a95d2678d676c22dcee768c37",
"main.dart.js_258.part.js": "a104d8a262e4f66c8c0f10c6a1bf2170",
"main.dart.js_297.part.js": "2fba724592f5b3564570b4fdfc411316",
"main.dart.js_70.part.js": "28a859c3596faf264cb5f56afa728550",
"main.dart.js_187.part.js": "5bd4ed1e3913a042c5f6e3a174e5f41a",
"version.json": "1ef3f7ea073b19b518ea752aa8507607",
"flutter_bootstrap.js": "abbff5d5ac472d1f329e26d27437bb30",
"main.dart.js_191.part.js": "3733bb7b1a6ff40cc9f6c1c74c21e876"};
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
