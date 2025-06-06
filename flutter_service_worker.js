'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_290.part.js": "115341ae9bebda3609e711adaf9b8df8",
"main.dart.js_81.part.js": "d0d01231b4011e401a00206e5bf5d7d8",
"main.dart.js_190.part.js": "8c357d7487ca93b044ece7825f5e73b2",
"main.dart.js_154.part.js": "f4c347e82ca1a7edecee2e774e3e15e3",
"main.dart.js_87.part.js": "08c582e60aa97580a483fef979a73470",
"main.dart.js_159.part.js": "f0443e8790e374a84ac42b2c8ed2b07f",
"main.dart.js_36.part.js": "c617f818eb96140d1104d10b0a406e55",
"main.dart.js_299.part.js": "0e89e5973f91fe4c7443bd7b8e4834a6",
"main.dart.js_199.part.js": "46acede00f23547f5cba1f47403eec11",
"main.dart.js_138.part.js": "09cae20c577fdd9345a68af11d7a2926",
"main.dart.js_122.part.js": "d0d51a189ca8077fd1bbc78d51a5bff2",
"main.dart.js_25.part.js": "a1916fad1c437186e42084acde3046ca",
"main.dart.js_251.part.js": "bb3c7ab83c4bb20c9277c18b29e0551b",
"main.dart.js_206.part.js": "17848265c276b2d1b938a78380d0b325",
"main.dart.js_249.part.js": "a7b8900b2700b0b334d747d3d753d3f5",
"main.dart.js_14.part.js": "0609e6a1603b53addc2bf6c8305a338b",
"main.dart.js_255.part.js": "1794a78420655480abf0c0954d5e6390",
"main.dart.js_178.part.js": "dea2054f0789bbe5a710b77fae929c1a",
"main.dart.js_256.part.js": "28b77ccebc182e3834a6cfbe250412a4",
"main.dart.js_197.part.js": "61ac6e7cc376264ce4ce4e9d4ae5f69c",
"main.dart.js_134.part.js": "245e348f0683ef81c04796c872a5a691",
"main.dart.js_46.part.js": "6715fcd4cb81539d35b4b24e2e47bf50",
"main.dart.js_274.part.js": "3b208d8f13a7edc5e8f4eb0972c1d56d",
"main.dart.js_72.part.js": "cd556f0a0e315c98a3b83f46752bd6ab",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_207.part.js": "c8f6bafed0eccee227d1b136de1a0ce0",
"main.dart.js_38.part.js": "5b3cda1ba1e7689439a8fd88243d4f99",
"main.dart.js_205.part.js": "f6db1c524f25cc5964dbae091d9a963b",
"main.dart.js_276.part.js": "fd3af366437d8cbeee9c36728edb6be6",
"main.dart.js_6.part.js": "c2591531ff5c709758e59d4b64f8efef",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"main.dart.js_169.part.js": "e94c8617a4356667f750d7357af96097",
"main.dart.js_132.part.js": "226136df3d63ef83bad060b93a13e37b",
"main.dart.js_146.part.js": "34b9419981360f42d02f1c06162289b6",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_57.part.js": "308ac5efd2d75b70621778d0ce6f7405",
"main.dart.js_60.part.js": "1efac6e9b64b6e3a28c21af8e4333b12",
"main.dart.js_264.part.js": "436282d2b21e36dca65b9c5ae2e4a8a1",
"main.dart.js_285.part.js": "1ae96a00b48f76b8ba7418b0014cd8fb",
"main.dart.js_92.part.js": "ec28a0794a005ff0bc046ee189e2ffa7",
"main.dart.js_307.part.js": "267e49363c065438b5e595256b6811b9",
"main.dart.js_85.part.js": "db30d4952c05e787dc6d538e570f4da5",
"main.dart.js_200.part.js": "bcca79922751b8fb8886e8303aa5e111",
"main.dart.js_1.part.js": "d6683d599d5c5fb1cf74eadba91aa83a",
"main.dart.js_121.part.js": "85bab59830859326edcd204197948259",
"main.dart.js_39.part.js": "b96f22e9d1c2dd11693c3b83f63a7c9f",
"main.dart.js_8.part.js": "28a4ee94a464cbbf1d900fe424c84b88",
"main.dart.js_95.part.js": "3cdaf2987d289ed9e2a3ffbca09e8fe9",
"main.dart.js_139.part.js": "e674cb0c459c304b02e36ea14b2d9c16",
"main.dart.js_140.part.js": "6b39020b9e6c37498eef9ba5d657b09d",
"main.dart.js_93.part.js": "bfd9f741866a90d385cf207b0b928576",
"main.dart.js_275.part.js": "49985c5f70783987ca0675bc6ffd56e5",
"main.dart.js_180.part.js": "9953c3c39fc4cefd170a6118016e3897",
"main.dart.js_179.part.js": "3d6522264dbd53601e28692d117b76fa",
"main.dart.js_182.part.js": "905e58e429d4ba8fa289dc0eadcca3fc",
"main.dart.js_144.part.js": "2ec31d32261e43848dd53a9f63ef6596",
"main.dart.js_13.part.js": "0a4891ffc2d52f5e54162793f8a2e4e0",
"main.dart.js_48.part.js": "9ae192a73db91e7994ac27d6ebbe9ea6",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_94.part.js": "c2d14d574504c36c986ac2faee23d9f1",
"main.dart.js_231.part.js": "cb8547ce6eaf384f38de1f5f4467a9c9",
"main.dart.js_300.part.js": "e05ee05e80c3be909f271b3e3a40bf54",
"main.dart.js_68.part.js": "0b69382190405372b1c1ce3ae29b31fb",
"main.dart.js_269.part.js": "712ad9d88c1b3cb9da33b0f2d2ee8610",
"main.dart.js_298.part.js": "b6d54055a114952177337c32b96324fe",
"main.dart.js_43.part.js": "8be4d1e8622668661f97205b04bdb210",
"main.dart.js_59.part.js": "0bd195a1bb62a799219fc4c4211cb3a1",
"main.dart.js_28.part.js": "0586fdf78e0a40d1a52bdba63db8f765",
"main.dart.js_303.part.js": "d356703a4545ebb6842d690c22d96117",
"main.dart.js_270.part.js": "278a3ce67b397d4d9760702a14aae38b",
"main.dart.js_286.part.js": "aeb901416b02802ae3911ba475cdd60e",
"main.dart.js_166.part.js": "be7ed7810ec7733d28415787b5e939de",
"main.dart.js_35.part.js": "8570db133b9b888f29948d41bf495860",
"main.dart.js_118.part.js": "f8771ecd0a93dacd750ed1346c1a962b",
"main.dart.js_75.part.js": "8496606523acc42f11d48c37c8659645",
"main.dart.js_11.part.js": "1b26e78b25f1b6f4125ec3b05672a9ed",
"main.dart.js_123.part.js": "6c80e45a7451ede274a6f7f25df8bd5c",
"main.dart.js_37.part.js": "09d9742c3e2786c173db2b3479dfa705",
"main.dart.js_235.part.js": "03b68048a7e6eb94eec43e71bab55f4e",
"main.dart.js_240.part.js": "eed692351bf3a2489295a1ea2cdc57ba",
"main.dart.js_168.part.js": "b86665f8a6b4d3bd74bc7d73c08bd0a4",
"main.dart.js_112.part.js": "d4e38769f6ca7ced0304bfc0e577deea",
"main.dart.js_26.part.js": "fd49ec5c400402a4fa8a7c288b9b3869",
"main.dart.js_110.part.js": "571d0467fb94a92557f31578a3c6e3b2",
"main.dart.js_30.part.js": "2dbec9caa08034dd99efb027c0f39f24",
"main.dart.js_242.part.js": "39d5eb17e342ed1208dd3631a102e0c5",
"main.dart.js_283.part.js": "1f1b0961f68fb8e84432439b479b9b6a",
"main.dart.js_293.part.js": "4275b9cc0de860b1bb7c915d175f8aeb",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_164.part.js": "d37591f01e62ba0eb18ec9211ae359b7",
"main.dart.js_126.part.js": "0949f89597f047db86fbb26bf796dccc",
"main.dart.js_3.part.js": "cba59434fd7ec7daba4f4b1d4671e8df",
"main.dart.js_80.part.js": "27c234b9c791e7f8e5777ba6a0d49a98",
"main.dart.js_113.part.js": "b77ea4a8e5997b7355b1d2872deb76b6",
"main.dart.js_277.part.js": "1d7a7db5f69c6b80db136f52a5106e95",
"main.dart.js_103.part.js": "128abbc84f843a5931bd1ec1e5f36e1d",
"main.dart.js_241.part.js": "47eeeeca1122684c0f21a07d28bf2a1b",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_188.part.js": "b0f5873f60b1c47b1b8d852575d26ad4",
"main.dart.js_32.part.js": "6056390013184d0eb3806521570e22ee",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_4.part.js": "7fcb40705f5a526b4350b221119989ee",
"main.dart.js_53.part.js": "dc7848a2b85e81bd047a315febd649a8",
"main.dart.js_234.part.js": "eb4d187c781b83fcac002f29fd3f054c",
"main.dart.js_223.part.js": "f4bbb24437429bece4c39dfab8980090",
"main.dart.js_213.part.js": "d45b2356d1c30f78f1c6133e66e1ba9f",
"main.dart.js_15.part.js": "a82e25f70ae93e5ca57c19adb48d05ab",
"main.dart.js_105.part.js": "b44050fb8ab31d773eb914612b2994a0",
"main.dart.js_107.part.js": "d1ed0677cbd678e0a0e89992c2edf274",
"main.dart.js_248.part.js": "c0dbb15854361373ea8a5eab6d12bf97",
"main.dart.js_45.part.js": "690db4efba56c207c28b610a15b8cfc8",
"main.dart.js_160.part.js": "d3cfab784f0dd6bf56863f09b6143baa",
"main.dart.js_289.part.js": "1509d91f5a733e20e0f78512db03e76d",
"main.dart.js_96.part.js": "a4b55364b5612ed8668e1f926ca34e11",
"main.dart.js_147.part.js": "40203b347cbeae5768b4f1cc586530fa",
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
"main.dart.js_175.part.js": "83016de8cac1cbe72a1d2baa69040b06",
"main.dart.js_145.part.js": "8842ae12e39ab0fb7b410b8c63397488",
"main.dart.js_210.part.js": "cd7970d1c9a8192a3d0137e2917852d0",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_84.part.js": "1c7dbd49b049de75b3e5cad7e720fd79",
"main.dart.js_82.part.js": "d3efb693c7226efc46a9552402248d00",
"main.dart.js_31.part.js": "b067729fc539d7225a840709a6264022",
"main.dart.js_115.part.js": "b72382dd4052895d6e567068ef2867ea",
"main.dart.js_189.part.js": "71bb86bf601218c7c9093b3116c3a451",
"main.dart.js_204.part.js": "440c5976c2ed65c32a2374367dc454f1",
"main.dart.js_79.part.js": "b0e0f2c2b89c79a417479c1fcbe0d61d",
"main.dart.js_268.part.js": "778ce64973e30135a55e82bae45443dc",
"main.dart.js_301.part.js": "c181fd1c7ebe00e2c9fe408d2161b11e",
"main.dart.js_297.part.js": "43a584af00c07a5beb07d73274a1509e",
"main.dart.js_192.part.js": "fafa9d059bc9d5ec9e680f565f7e0c2e",
"main.dart.js_215.part.js": "10aae71a2ae88dcb5f97cb15b4eb8218",
"main.dart.js_195.part.js": "367e34b4f87ef13a508e3672d0ad5eca",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_304.part.js": "ce7407c7be03683b5954162ca1a14b2a",
"main.dart.js_226.part.js": "7d1304eea7400b740b56d380b27ac02f",
"main.dart.js_208.part.js": "0e85a5a88b062a971c79818ff9201e23",
"main.dart.js_54.part.js": "2741a477002352b91f1eaa6c9439e19d",
"main.dart.js_106.part.js": "4b26f702a799bb48f9133222d2e8a780",
"main.dart.js_152.part.js": "f4e6237899e71e37b55209aa60bd94f8",
"main.dart.js_272.part.js": "78f3770853fb80c0fd1f1a4c0e144b91",
"main.dart.js_302.part.js": "f4ca0efd4419e76d8b011f2c50f09be8",
"main.dart.js_181.part.js": "a191311074292dba5f0a5fe4dd8e30ee",
"main.dart.js_51.part.js": "7018e09ba42b86e685d7cbf0e36e6c05",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_237.part.js": "e85769dd9650e53ee1ea36ce7a799887",
"main.dart.js_173.part.js": "4a24fe726ed98c376c0ab57702914add",
"main.dart.js_170.part.js": "566884d1ac7c19b56df861d5fd946223",
"main.dart.js_282.part.js": "d133b5afa78343732f4b7bb853fbe12b",
"main.dart.js_34.part.js": "eab24552b8eec2259362d727a86cd0f4",
"main.dart.js_24.part.js": "7626277784cfd2b3ef5560c47a4c36d6",
"main.dart.js_128.part.js": "7185ba25205683f4f5c62feec61a480e",
"main.dart.js_18.part.js": "bf4c16271c5ad044932e6f165cd326d4",
"main.dart.js_2.part.js": "eee154892118565c9ea4c956af108a76",
"main.dart.js_69.part.js": "98e054719ec423586e2d72ea72cd1115",
"main.dart.js_70.part.js": "ffa1e22dfa3fa377c5a1ff4bc667cc74",
"main.dart.js_229.part.js": "c0bf176823364f4b6d1fb17102e6db3f",
"main.dart.js_27.part.js": "9adac25ef90fb357d0a4f0602c940349",
"main.dart.js_238.part.js": "0032bb2e57398b849c7f5faa1611e97b",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "d36283b61728b0fbce4d69a7540362b0",
"main.dart.js_253.part.js": "417bb1b917ef3dd713bda629bba7e1c8",
"main.dart.js_244.part.js": "9f57ed57ad4fe5e7de882442c48aa6ab",
"main.dart.js_137.part.js": "bdcbd1dba3f75bbc30f7f32f212a41ab",
"main.dart.js_99.part.js": "7ad4dd93f87175805456969d0f4b35de",
"main.dart.js_66.part.js": "b4c2d86a5db47f75f699b3a46b7148b8",
"main.dart.js_10.part.js": "f847ca5e0b1927ae4cb00b2fcee26542",
"main.dart.js_56.part.js": "ce939c371797abd16c75b11fc18fbd48",
"main.dart.js_183.part.js": "ea0db060dc8c9ded3528ae4091b1381d",
"main.dart.js_129.part.js": "d468019cbd4233231484cad8d31c514b",
"main.dart.js_5.part.js": "e2682fa8efe4a6bebc3e47214ad9f37c",
"main.dart.js_76.part.js": "56c9587b1cf232266c118523bd0abdcd",
"main.dart.js_265.part.js": "6639bbd5cab64f5519492ef713ebbf54",
"main.dart.js_7.part.js": "03eb5dc2861f0a3f2ea5f1639d4ff251",
"main.dart.js_16.part.js": "55a0997c060b957ce33e118214c3b9d9",
"main.dart.js_236.part.js": "c7ddceea7875cbd879e8f762cad9b6ac",
"main.dart.js_133.part.js": "eabe0cb6dc3d8e395ca63960ec81a623",
"main.dart.js_259.part.js": "8070607f4eadc8d7611bdef4052b6f77",
"main.dart.js_90.part.js": "3cd5a79fbd8cbe53e6e6919dc099892e",
"main.dart.js_260.part.js": "e019ef444e0f3e721fda8bed28513851",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_157.part.js": "f5e1fe2ca41ab8c962f1e213f9b38f93",
"version.json": "32a5f0a774f7410bc05b3c6779420573",
"main.dart.js_153.part.js": "ccc1c3d6f1830c800a6470e89580eee6",
"flutter_bootstrap.js": "fcf0c25d74052c75c75ca0f3fb681a7f",
"main.dart.js_176.part.js": "35bf5cf5612b3b77c3b65618188fb48b",
"main.dart.js_245.part.js": "8895701fe842600342d9bbddfa9a20fe",
"main.dart.js_306.part.js": "3b7f6c46fce1bc70fb48619e43ef49af",
"main.dart.js_209.part.js": "d60527b4c065e63a52a2bed0cf1ff9b8",
"main.dart.js_33.part.js": "0d8c0f612c7a164555014bf76bd9a052",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_9.part.js": "c63e8fccf3d002d5520fc2b30d8c7c63",
"main.dart.js_155.part.js": "efe7d43dbc9a46f3d41465e5bc4cd9fd",
"main.dart.js_239.part.js": "00ff893d08a3cc181c859ab336667250",
"main.dart.js_284.part.js": "7bb13a6c7daa9374f500384eef20df97",
"main.dart.js_214.part.js": "a8efa5d720e27410e26bdbbeeff14cf9",
"main.dart.js_42.part.js": "a0e0fe39ca6ee3779ddba260b7b56756",
"main.dart.js_291.part.js": "b3ad2370ee6ec4767ea471fced8304d2",
"main.dart.js_228.part.js": "1515794a45b054a18a8a413a1b965c89",
"main.dart.js_98.part.js": "37abc59bce3abf796e292a93223c2495",
"main.dart.js_258.part.js": "c5b7181d0aaf219482e7bbe51df286f5",
"main.dart.js_163.part.js": "0bc5888b1521e57ae68275453308c75c",
"main.dart.js_287.part.js": "a2d80e13b9e6b3c919500d7a972b5ebc",
"main.dart.js_161.part.js": "dc8b8e2a1da242c4d5c8face3578eb83",
"main.dart.js_49.part.js": "86401b5103670317246747490ff71102",
"main.dart.js_22.part.js": "95a25f48dc748c175d546521c530ee05",
"main.dart.js_308.part.js": "6768ac6ead8efb078eeabc13e6cad42a",
"main.dart.js_131.part.js": "3d658945410be0e258c363d4aa1ac9a9",
"main.dart.js_12.part.js": "32364f587ede2e1a713b54c4abb4bad3",
"main.dart.js_62.part.js": "ea0a82b22e60a5249ec4ba8e81b4ad16",
"main.dart.js_91.part.js": "567273a28bdbabac59b6b7d0368a8245",
"main.dart.js_232.part.js": "d13ef88ece202c21725d5fa8ec90fa3c",
"main.dart.js_104.part.js": "717805701d3fce2f4505ca1ccf67f886",
"main.dart.js_71.part.js": "b175857da47ef519411a14923424f49f",
"main.dart.js_296.part.js": "e0abedc0cc3b493d2f61a531139af834",
"main.dart.js_278.part.js": "08364a80e2d65cec6156c2816d3520c7",
"main.dart.js_109.part.js": "e364a3ac9cab95fd16ebf64966af6fc5",
"main.dart.js_143.part.js": "d4c0a2c1279ed2730173ca583033017b",
"main.dart.js_222.part.js": "4c95ccf02a275e7de1f0b2b17995c4dd",
"main.dart.js_67.part.js": "563d3dc95d44a9139b768a31673e5409",
"main.dart.js_117.part.js": "bd59a0981e23458c2a73490e86fe8126",
"main.dart.js_292.part.js": "9716f35e351f798b9afa80e1bca82804",
"main.dart.js_108.part.js": "ce24ba91ed05032fa21c653dab32bd84",
"main.dart.js_295.part.js": "a1841c1d64741507450ebb82a6cd1e76",
"main.dart.js_221.part.js": "eb5686fddd41392f6076cea8812552b6",
"main.dart.js_47.part.js": "3faff3ce772dd4382de292dc0da5882a",
"main.dart.js_142.part.js": "b84c9dbe481e546190127ce3c573890b",
"main.dart.js_288.part.js": "99c557c8916e2a498a55b9b8e8979e76",
"main.dart.js_55.part.js": "bfc7b745c641b89afcac19012e722fe4",
"main.dart.js": "a80a0e63d136ee4ef657241879330d32",
"main.dart.js_227.part.js": "947c55673a548a9938caa4bf697f89c1",
"main.dart.js_280.part.js": "d766e433c7b151f728291b57ee4c0d97",
"main.dart.js_202.part.js": "ef11151230cccc84974d114ce56d5a09",
"main.dart.js_266.part.js": "fb37149cb54cf4419205d51c37b05ac5",
"main.dart.js_261.part.js": "2681515bc74f9d631362b41cca84c280",
"main.dart.js_130.part.js": "957cf56df2cdc1235f63bd1b01b81bf4",
"main.dart.js_41.part.js": "5aaff138ad14bd1274dab2b9af8f3ac2",
"main.dart.js_29.part.js": "10e00e2c5d3d75c63fe2fce23eec9806",
"main.dart.js_254.part.js": "da60019d2af7eed1fa9af8fee7a746c7",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_271.part.js": "8ee88e81a0d751c283592811ae2f2ee3",
"main.dart.js_151.part.js": "5d063435877292fdd4882d14e3ef87aa",
"main.dart.js_74.part.js": "82ac0c8c68419bb6c2c7b10c4863a836",
"main.dart.js_165.part.js": "2059256e4b022f6152d9c4cb4a1c15e0",
"main.dart.js_263.part.js": "284b656e53342410396b6952bd6245a5",
"main.dart.js_100.part.js": "ef63c553c9be907c7333fd28ec5175ea",
"main.dart.js_184.part.js": "400ed149589dbdad665fb0eaab05fbac",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_281.part.js": "3ea3dd8ba92f8c70936b2111fb6b5e08",
"main.dart.js_185.part.js": "874c88bc9892db7d30c3ce247827e373",
"main.dart.js_196.part.js": "6fb449cb7b26c736028bab995617ef67",
"main.dart.js_250.part.js": "9a56bce288bc117e803d43f3cb7f97ab",
"main.dart.js_83.part.js": "12d6c61a3de0c489dfb51b8de6648754",
"main.dart.js_119.part.js": "0bf29924f51e3e57d8c39522e9065067",
"main.dart.js_225.part.js": "eea668dbf67721c728043add1f42ef08",
"main.dart.js_211.part.js": "f69a6f9d3fb0523a3d684f648de3fbf8",
"main.dart.js_171.part.js": "051d0461a8bbd609622d5117c5761fe4",
"main.dart.js_162.part.js": "1112b45143b4b300c1c507ab0b1409c0",
"main.dart.js_77.part.js": "85184b99dab82bb23f449eacc20e6fcd"};
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
