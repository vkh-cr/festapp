'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_290.part.js": "e1999f521ff5fa75c380fe0d32dcdcac",
"main.dart.js_81.part.js": "cd44b2f819f47bdab6efee9c134fc3b4",
"main.dart.js_190.part.js": "e6d29a7776d4d5dbe47a3e1ca4fb737c",
"main.dart.js_154.part.js": "2a4ca30860c945c0833dee2965c732a5",
"main.dart.js_87.part.js": "3ff9b50d76f7384192271f97e2c07bc9",
"main.dart.js_159.part.js": "eefcbc0b7721089e0ded65a1c75daf62",
"main.dart.js_36.part.js": "c617f818eb96140d1104d10b0a406e55",
"main.dart.js_299.part.js": "9fcfc95a67b5de04ff1ac4cb0c68d557",
"main.dart.js_199.part.js": "3f77b34e55b89fe23d20c22502063532",
"main.dart.js_138.part.js": "e1c0150110247f0850492405f6ca9f07",
"main.dart.js_122.part.js": "155d33e72c1f271865fe7d069edbf1b6",
"main.dart.js_25.part.js": "519a891b173de86de8d5ec2a0f825952",
"main.dart.js_251.part.js": "088c88633aa9ae0909ca61b8a6b11d61",
"main.dart.js_206.part.js": "bc56531734dd56a8414c071a45ebb061",
"main.dart.js_249.part.js": "f0d6af75db6221ffab3be16183f2be96",
"main.dart.js_14.part.js": "a6804fb852256b8f0a15ea707f4376e4",
"main.dart.js_255.part.js": "64e1ff8a8cd5d1b0e93a20c717669646",
"main.dart.js_178.part.js": "2732129d74155d4a5e47f7f965192661",
"main.dart.js_256.part.js": "623ce7d2a18fb92bcb59436224b3259e",
"main.dart.js_197.part.js": "1828940ac484cbef1726103eb0f80c61",
"main.dart.js_134.part.js": "4486cb4edbd4a5d0f14786f7fc715660",
"main.dart.js_46.part.js": "8c321835752afae58c517ffe1264afd8",
"main.dart.js_274.part.js": "3651bfb8da52e629589fd8e19ff6acf4",
"main.dart.js_72.part.js": "f5b68edf686160b1a8a320ce0e3e98ed",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_207.part.js": "851bac1ab4efb10fc6c43b82c8c42db2",
"main.dart.js_38.part.js": "c5e4b8c159a37923fe3059fddd932941",
"main.dart.js_205.part.js": "b0facba551c22fa50ded5943d7c8b846",
"main.dart.js_276.part.js": "363ba188ee4252f2ce64cbdfce1720b1",
"main.dart.js_6.part.js": "20c4098825059c6b340390439d953a87",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"main.dart.js_169.part.js": "7e5cab20bc4650ea0f2ace06b625166c",
"main.dart.js_132.part.js": "c53af0b9030b8f102a9c0e8ca8608255",
"main.dart.js_146.part.js": "930fe5aa72cedca8ab1eed333fb318ed",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_57.part.js": "76a17b85a4fe5d6c55c9533b15ea927c",
"main.dart.js_60.part.js": "9beae4aec8f844be94b770bbc537f229",
"main.dart.js_264.part.js": "b0e712a29e065007a57932c02934530f",
"main.dart.js_285.part.js": "5687aa0073d3fcd7b80b89a34b437dab",
"main.dart.js_92.part.js": "73ca74a0f4ce6abe7b190ee181eaece4",
"main.dart.js_307.part.js": "431a832b63c0cf0ba046c7ba811c2522",
"main.dart.js_85.part.js": "db30d4952c05e787dc6d538e570f4da5",
"main.dart.js_200.part.js": "849b5d9c5cef684e75f526d91db3b54e",
"main.dart.js_1.part.js": "3820461a6cff9009c3ecd75d67df6d58",
"main.dart.js_121.part.js": "f20a5f4365eed131ac90667cde939a20",
"main.dart.js_39.part.js": "b1d0c87a186000943380cf2ae8a03826",
"main.dart.js_8.part.js": "de7cb4a9a853adb3d23d15f090bcd0e4",
"main.dart.js_95.part.js": "37e574230cf32fa004d0454c21a5fa92",
"main.dart.js_139.part.js": "0e70aeef210f06286e73af3ce70391e7",
"main.dart.js_140.part.js": "b793f5e26a20abc9ee99a635dc190719",
"main.dart.js_93.part.js": "5a8892e2ead93ddcc5ac7acdd9d08224",
"main.dart.js_275.part.js": "60faefa6041d39fef14ef62c8e1dcb71",
"main.dart.js_180.part.js": "3cfdfff4b6f45ccdade935217a9910f3",
"main.dart.js_179.part.js": "adf4dd67c76c0414301d3095109c070e",
"main.dart.js_182.part.js": "75044c5afc128bb574ae86921141a3ff",
"main.dart.js_144.part.js": "1604fd67b22e19e738ac487256ad7172",
"main.dart.js_13.part.js": "ee7c4725c1ca26277ee537bf95625d33",
"main.dart.js_48.part.js": "9ae192a73db91e7994ac27d6ebbe9ea6",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_94.part.js": "c2d14d574504c36c986ac2faee23d9f1",
"main.dart.js_231.part.js": "a75a6cf99ccde6632c2e2c394722fd98",
"main.dart.js_300.part.js": "46c34a2808226ce7ad43ea1e09fc829d",
"main.dart.js_68.part.js": "2db23acecdbba6fbc896883b2b4da873",
"main.dart.js_269.part.js": "181cc94d43e5e2660b6da85762ffe811",
"main.dart.js_298.part.js": "1a63a636af62a405d4eec3daa85e85d8",
"main.dart.js_43.part.js": "f417ef004af3bce898e308d3c15b62d4",
"main.dart.js_59.part.js": "0bd195a1bb62a799219fc4c4211cb3a1",
"main.dart.js_28.part.js": "0586fdf78e0a40d1a52bdba63db8f765",
"main.dart.js_303.part.js": "f2b35015f6423a63c20f174aa663a496",
"main.dart.js_270.part.js": "a80165b03cc5cafb294f03d110331fd1",
"main.dart.js_286.part.js": "9968036c363e7c074c050aed002426d7",
"main.dart.js_166.part.js": "d06a7bc4f490c559b3887c09859fc2a6",
"main.dart.js_35.part.js": "eb9b1848a25f7a83fe31cadc887984d1",
"main.dart.js_118.part.js": "67f2bfff42cb1cfa63fa7bb0b6c46b69",
"main.dart.js_75.part.js": "9c010d221a89bcfa2d143bc865486db0",
"main.dart.js_11.part.js": "80638bbb1d8d06ebc2f203fc1592a820",
"main.dart.js_123.part.js": "8331ac9cf2fbd204d3abafef466df010",
"main.dart.js_37.part.js": "118b9adc62a8301a8ab71f174f5ed7a9",
"main.dart.js_235.part.js": "0abe64bd2217fd8e8174cce92042a926",
"main.dart.js_240.part.js": "24de5f00538f08566ddee1beaf1fb5a8",
"main.dart.js_168.part.js": "02633b6212e7c05ea80b170a6c0e2417",
"main.dart.js_112.part.js": "ad0e30a603786b55f79ddf32ba0ee07b",
"main.dart.js_26.part.js": "fd49ec5c400402a4fa8a7c288b9b3869",
"main.dart.js_110.part.js": "571d0467fb94a92557f31578a3c6e3b2",
"main.dart.js_30.part.js": "681a9291694049b67fe363de86ba0ad2",
"main.dart.js_242.part.js": "bb61c831ab588b5b3ce925890ed48015",
"main.dart.js_283.part.js": "f886a3ea6d6e4b5e6331ec68328338c2",
"main.dart.js_293.part.js": "5419d7ba70578ce1be8741c6c8fef83e",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_164.part.js": "ec637cf34b0e700794650f1d8f8ac6bd",
"main.dart.js_126.part.js": "bcc0b017de0fc7d09d3b0919f248028f",
"main.dart.js_3.part.js": "919b40d5e736276fc8517dd726b02aa9",
"main.dart.js_80.part.js": "d5ef8874f8c85cfc2262109fb5be686f",
"main.dart.js_113.part.js": "d73cc8f631cb4ba657947caf68cb56d8",
"main.dart.js_277.part.js": "0403b59f39743b03fa9a09ccd3f62fa8",
"main.dart.js_103.part.js": "49a3363b75c650182104482d9316f34e",
"main.dart.js_241.part.js": "dbf5ea3a5d0ad94e8c43da6049424045",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_188.part.js": "10275e8761ad8c1e3ed55376b6058d01",
"main.dart.js_32.part.js": "d632b7c12593516cc0bb398fbec66f5a",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_4.part.js": "2ee6df8cc3ca347c5c1f76194d2e24fb",
"main.dart.js_53.part.js": "41a6a59de947f6c7ac8a1f1f6b88bab4",
"main.dart.js_234.part.js": "a5e92ed40986a280b26b0c9796f95733",
"main.dart.js_223.part.js": "dde8dc2ad412f91c04515330dc88507b",
"main.dart.js_213.part.js": "7c85a77a044285ad476b558a08a30e6c",
"main.dart.js_15.part.js": "57515c1fa0e22169f81752fad646fd5e",
"main.dart.js_105.part.js": "a63bc175969ba1105e67db8292e8f06c",
"main.dart.js_107.part.js": "d1ed0677cbd678e0a0e89992c2edf274",
"main.dart.js_248.part.js": "74a67b417d6c84376db0b475bb33ee0f",
"main.dart.js_45.part.js": "a0ac1b371fa64ae5b45572b3425defbe",
"main.dart.js_160.part.js": "e0f7d875775c2b6251cb53ab61f349b7",
"main.dart.js_289.part.js": "45cc41f791cd467e5cf9f755ad986b8c",
"main.dart.js_96.part.js": "27b1d2b0fc19ebdc5e716d748ad5cb50",
"main.dart.js_147.part.js": "a8f42e7ec048438391154f61dc05670d",
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
"assets/assets/translations/en.json": "3068a4e10deddd38085384e262a06ec9",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/uk.json": "1794b65021c354763a0a830b83ee3fb1",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/cs.json": "7768802d09805d74c7094a102cc5084d",
"assets/NOTICES": "4bd2930db146c4653bc584bd9d65b728",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js_175.part.js": "1fadd6dd9a9b3b72284cdd79ca1d3082",
"main.dart.js_145.part.js": "399205b95a231c0226cb416019c8956e",
"main.dart.js_210.part.js": "5f83f4ae120c28d376d1f4f0b30a39fe",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_84.part.js": "1c7dbd49b049de75b3e5cad7e720fd79",
"main.dart.js_82.part.js": "0fa8f17105df470613c3feb4251a4033",
"main.dart.js_31.part.js": "2f71c2256bab1bca8c5908d01824c345",
"main.dart.js_115.part.js": "1206d8d0a778adbf47247644ff032498",
"main.dart.js_189.part.js": "58f013c0d7077e964e0374b2686e75f0",
"main.dart.js_204.part.js": "34721d350f58fdd3d20e8e600c654cb8",
"main.dart.js_79.part.js": "a6aaf7bbb0cd271c541d1568bbb58c13",
"main.dart.js_268.part.js": "4ff802ac58466443366d50afbe5d7e7a",
"main.dart.js_301.part.js": "fda63d8eca01c0987d471b8b7ce6b3f7",
"main.dart.js_297.part.js": "f29048fd8dfc3d41ec1335ca5b915d14",
"main.dart.js_192.part.js": "e29fcef0de92f92a1bbc024783ec9527",
"main.dart.js_215.part.js": "73bb2d6ea17d992aeef6941fedf3f295",
"main.dart.js_195.part.js": "f38f4819b1d893b7ed670a395ac6370f",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_304.part.js": "96b36b1165c386a0815ba219eb1a44d2",
"main.dart.js_226.part.js": "ed1be3906893f4e912b9c9fa4ffb5d47",
"main.dart.js_208.part.js": "3333b1bb287dd0623850741fa4c5543d",
"main.dart.js_54.part.js": "fa4084327de01861a6ce5429891da856",
"main.dart.js_106.part.js": "947c5520112d10ded6ac0dda81a9ca86",
"main.dart.js_152.part.js": "f75223e7d9a54177f9043676f77eacfe",
"main.dart.js_272.part.js": "403124fc00c7c672ad2bbcfcd96109f0",
"main.dart.js_302.part.js": "4242f972902b7cfbfb139fb2f356cb71",
"main.dart.js_181.part.js": "15a4d1ad16365edb139329956e91c954",
"main.dart.js_51.part.js": "720d093c75f4259e993ad289861fefdb",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_237.part.js": "1d4c15cb47f8a7fcbd2a5211d7b0e912",
"main.dart.js_173.part.js": "cc62a873105c120d687f68cb33ee5ed6",
"main.dart.js_170.part.js": "22179014e6d05441d8f7e55605028777",
"main.dart.js_282.part.js": "13dfd9455da53867dc92c8535b740209",
"main.dart.js_34.part.js": "7a69db2f18a2338bed37add59743508a",
"main.dart.js_24.part.js": "36af9c8a7eceeacd8ca59bf5cd3576c0",
"main.dart.js_128.part.js": "3c245cf84ecf4bc6b982e64915b4b8e9",
"main.dart.js_18.part.js": "65cc87e6c5312a4eb32ef4dc7359f1df",
"main.dart.js_2.part.js": "2762ad3976810cfff656cb1322cfed15",
"main.dart.js_69.part.js": "4e2fc3815785f05aaf4d30dcc8fd49b0",
"main.dart.js_70.part.js": "57cf02b7800198e18c3ece517ca88ed8",
"main.dart.js_229.part.js": "89522b885bed42cf9ae6c6af94da7ea6",
"main.dart.js_27.part.js": "da3f11ee610d9fd3102284cd9c1ef87f",
"main.dart.js_238.part.js": "a2fa5772ef590756e9a2af91a11ca825",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "a33e038696d7afb768958e5618259341",
"main.dart.js_253.part.js": "0119cf7895c0f538dd837b3563f05add",
"main.dart.js_244.part.js": "9f57ed57ad4fe5e7de882442c48aa6ab",
"main.dart.js_137.part.js": "2e4bfce4f2d4ec025d1823bed2e1488d",
"main.dart.js_99.part.js": "cce1c49f25cdb04940c6bc119e385f57",
"main.dart.js_66.part.js": "9c54a3c884c7b6a7399b9d59bb30d6d1",
"main.dart.js_10.part.js": "c0e325b5cf40cee9e3836c20eab17097",
"main.dart.js_56.part.js": "2629ae4885ee6cd0d1e8532746bface5",
"main.dart.js_183.part.js": "3bd38449a5136d66fcea66abd5dac76c",
"main.dart.js_129.part.js": "2205edc0f87f2b445ecfec6d93708920",
"main.dart.js_5.part.js": "716c878089636990ee548a6815fadf5c",
"main.dart.js_76.part.js": "ef40ab97d7d1b5c7f40f6997b1b45ed7",
"main.dart.js_265.part.js": "72a66d9a964c117924bb76d2eea52a38",
"main.dart.js_7.part.js": "79e7ae9cd608f94dd75cc783b751bb8a",
"main.dart.js_16.part.js": "0daaa75d3e2176786096840427186354",
"main.dart.js_236.part.js": "e84aac2d8f65e3c588eb17a9ddf502f7",
"main.dart.js_133.part.js": "56dbb47b306951a45d749e892e31e3c5",
"main.dart.js_259.part.js": "8d936b6732b6f8462e1509f6b301fd5c",
"main.dart.js_90.part.js": "ecd40b0a64e6d6078b03ebe4fe3ef944",
"main.dart.js_260.part.js": "64990a0dab06198c5d4d18c873a3d84c",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_157.part.js": "f5e1fe2ca41ab8c962f1e213f9b38f93",
"version.json": "32a5f0a774f7410bc05b3c6779420573",
"main.dart.js_153.part.js": "9f579808d6bc4fad16da8625ddb44c36",
"flutter_bootstrap.js": "2420ca9042bcafc66f7a50e90c80cd16",
"main.dart.js_176.part.js": "566db56d295726fa7d89ddb2c1f0a8de",
"main.dart.js_245.part.js": "06d10e4c0b7d9ac633d8e716952eb16f",
"main.dart.js_306.part.js": "3c19286aa490cf8809364e709c58327c",
"main.dart.js_209.part.js": "d60527b4c065e63a52a2bed0cf1ff9b8",
"main.dart.js_33.part.js": "c3eb01a1ab0290a8c849dced1e54b0c6",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_9.part.js": "3a2b039341470f16e4e46db15800bcdd",
"main.dart.js_155.part.js": "ecc0f6b76d122fab9c228980a8fd5c6f",
"main.dart.js_239.part.js": "9e46713cd9cb655313eef7cec440db8d",
"main.dart.js_284.part.js": "426e4fc245522c63c3809fa9505948ad",
"main.dart.js_214.part.js": "cd6d3239c433428ba70df3f40024141a",
"main.dart.js_42.part.js": "c398e3f72c1e87e22202cbeda2c1c427",
"main.dart.js_291.part.js": "f8d9b194657091cd36478f7d148d371e",
"main.dart.js_228.part.js": "28483ab56d7a4608f2d87313e14fdeb5",
"main.dart.js_98.part.js": "37abc59bce3abf796e292a93223c2495",
"main.dart.js_258.part.js": "8c3c4b11dd34432d785a838f11c15c6f",
"main.dart.js_163.part.js": "13aff02f130bcdd9e8e384014b7164da",
"main.dart.js_287.part.js": "2fd4a8eebcd37b0b70fd15419f4e4525",
"main.dart.js_161.part.js": "dc8f27359b355e24d6458c5483247871",
"main.dart.js_49.part.js": "970d7e2294b194e5751a1aab7df3cb78",
"main.dart.js_22.part.js": "95a25f48dc748c175d546521c530ee05",
"main.dart.js_308.part.js": "343ddd28bc195360c6cb0d591bfd3ba4",
"main.dart.js_131.part.js": "988798e0f52ca43fa336b9453da5a2f6",
"main.dart.js_12.part.js": "1506cd61df17e61f31a4c17afabfe786",
"main.dart.js_62.part.js": "55fce1c1322c6047705cc4f9d0f08299",
"main.dart.js_91.part.js": "f70d445926f17e25ffdd4c02c34fa937",
"main.dart.js_232.part.js": "d5c280af63c39d305a6ca44b44662dee",
"main.dart.js_104.part.js": "717805701d3fce2f4505ca1ccf67f886",
"main.dart.js_71.part.js": "83ff1a61804598e1b7f22ac544e782a6",
"main.dart.js_296.part.js": "c16296f50a8b5144dd21f413fa83936f",
"main.dart.js_278.part.js": "f7bfbd8f4a062452b3f63803abc7e2b9",
"main.dart.js_109.part.js": "0abb8e30d434664db03d5cbe20f93a48",
"main.dart.js_143.part.js": "fa8a090aa3c7ecd90b4a949cc1c709e0",
"main.dart.js_222.part.js": "b5029450d401e949e0555a3890e674d6",
"main.dart.js_67.part.js": "37b16ebdc185f13c6ab2ff5968343a3d",
"main.dart.js_117.part.js": "8d5516418484e26c3ce655ced3661909",
"main.dart.js_292.part.js": "892617f77057baeb41a02793c4b2d308",
"main.dart.js_108.part.js": "6cc22473b0f10f8fa9dc682122cfc184",
"main.dart.js_295.part.js": "6eeae5958618b704b5a0b25f1839c4a1",
"main.dart.js_221.part.js": "cb5b2718c3b3e443df6fa086edd1f047",
"main.dart.js_47.part.js": "403d8f9709bb210e8b350ed04eb8a53c",
"main.dart.js_142.part.js": "6b4674a48511cad2023427dafbef3f1e",
"main.dart.js_288.part.js": "f65f8619b4a03eae2cdc6234c5031fab",
"main.dart.js_55.part.js": "864db213da043d7d27c3b422e0a7bb47",
"main.dart.js": "61bf8c93f7f902753bf7ba216ea35379",
"main.dart.js_227.part.js": "ba9b462627963d0f359fd454dffbfad7",
"main.dart.js_280.part.js": "a4392b45ce81089d81819ef9640d2898",
"main.dart.js_202.part.js": "cff71eba98f1560cc3a3fe26ddadad8d",
"main.dart.js_266.part.js": "03f45f62f72ae6636a618ad858d6d439",
"main.dart.js_261.part.js": "205cdc1a526dfb15b7132bec6d69fd8b",
"main.dart.js_130.part.js": "0ce325a39767f8fc7c2cc5c316b8119f",
"main.dart.js_41.part.js": "5f49e0dd7f752443841f0168e591bc1f",
"main.dart.js_29.part.js": "5f8f263fe0a09ab7a513ead3ece493ba",
"main.dart.js_254.part.js": "136b2b51d2ffa3a9f39e2f59886a7f87",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_271.part.js": "34dc30f45184b0244ca7a31c83a8fc0d",
"main.dart.js_151.part.js": "1eeddd54f718c2956b833bd245aeb1c7",
"main.dart.js_74.part.js": "fe3f7d8779e0913a47818922538ff248",
"main.dart.js_165.part.js": "d0bdbbff9405446c3d7d019839ee0b47",
"main.dart.js_263.part.js": "1acf6b7b54021786123f3f35a4412d13",
"main.dart.js_100.part.js": "d642024704b3414d2d1e403003ecef08",
"main.dart.js_184.part.js": "7e6f46d62e20871a5b0e1715b6a84799",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_281.part.js": "11f5a357bc7b7b3440eb6439c1bdea6e",
"main.dart.js_185.part.js": "299e33c699f2193cbe937ae234148980",
"main.dart.js_196.part.js": "d20f88428903bc36b62806067db89178",
"main.dart.js_250.part.js": "cd8c729566df643af02fbfdcd87585e9",
"main.dart.js_83.part.js": "beb6d1fe404baffe47d9a23daca9e883",
"main.dart.js_119.part.js": "90954a93e66f06f9ca37c0bffc4c8900",
"main.dart.js_225.part.js": "5171028be18b88a1a3a4d805de6a0271",
"main.dart.js_211.part.js": "e3c75c1873ebf77d1e23c78fee7b80be",
"main.dart.js_171.part.js": "1b453bad7984e8d5ae0d3a3c6de6f7dc",
"main.dart.js_162.part.js": "1bb0f0ab5ae3d03e3aa6f9ccf50f4956",
"main.dart.js_77.part.js": "56113649f95185bfc6758757fb06a506"};
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
