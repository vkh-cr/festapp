'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "86716fe43349e99ede76f840c494a002",
"main.dart.js_75.part.js": "7fdac76d22417846c9f60f2bf2bcd4dd",
"main.dart.js_244.part.js": "bd35bdd1bcd032552c18492f935b102a",
"main.dart.js_289.part.js": "d29af8f50f026e2b2ff01a06c7cad4bb",
"main.dart.js_83.part.js": "5024b62f333ccad91f5dc31009e1a8d9",
"main.dart.js_254.part.js": "5c72dda48bcfebc8134228826f9d0f2f",
"main.dart.js_176.part.js": "ddb0777de3e32cabd18ae5ebb3d76ddc",
"main.dart.js_96.part.js": "350a56748f6248f0c90adfedca5eff66",
"main.dart.js_87.part.js": "66ca315c1a14987cd3992cedcaf791be",
"main.dart.js_285.part.js": "c07d30f27d9b970b3197655cdb329c2c",
"main.dart.js_126.part.js": "f8a2c54dee59b9383ec533c840be45a1",
"main.dart.js_129.part.js": "004504d26610937c115b939f7eae7cea",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "c90ff8f333e7d4e8e845e9b7282c7209",
"main.dart.js_218.part.js": "28f98eb7cfdf6c288147bd602ce0db85",
"main.dart.js_172.part.js": "5736a6a026ff81a2f91a54fc97ac42f0",
"main.dart.js_142.part.js": "bd47f6a6c357047467417600d0dff5c2",
"main.dart.js_209.part.js": "50f8a50c092badbe18133521df5f2c6e",
"main.dart.js_10.part.js": "a1b14cd79938e682ac18a2c54b8afbf9",
"main.dart.js_66.part.js": "8c372836f5e50b8dc5293911d1bbb3eb",
"main.dart.js_84.part.js": "61a62d469da2a20dc04b53fc57ea2b13",
"main.dart.js_122.part.js": "66915b38b20c61236833137f119f88c0",
"main.dart.js_230.part.js": "ef25e7991b89a04086e7d3c089c0b8e1",
"main.dart.js_213.part.js": "2833fbbf13229e106725205f4e48d6d8",
"main.dart.js_153.part.js": "3d865b84b29d4589e9fcdec7c9e75e59",
"main.dart.js_89.part.js": "58fb9e219a4fa69378497084a0b78012",
"main.dart.js_146.part.js": "c56f0d646ce3db9992465308d718a842",
"main.dart.js_37.part.js": "d5d2bab00fb09871347369e082f4589e",
"main.dart.js_287.part.js": "ed83496acd69e785f3b1ec9c410fb67f",
"main.dart.js_132.part.js": "17e4dd8332f8dcaaab7311240c9071cf",
"main.dart.js_165.part.js": "78d017f0c3f46ab818141f819a5ae188",
"main.dart.js_282.part.js": "5712699ad1d4f0f0d325f392d15d4e9d",
"main.dart.js_127.part.js": "db63b29afb4efbfd555d5c64314c8569",
"main.dart.js_175.part.js": "ad5562a3d513bb7a0d91dbdb94229c01",
"main.dart.js_239.part.js": "bf0f82b2dc9b1a58e0f1b2b92a02c1f0",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_216.part.js": "8c897d2c0e7bd7400451ff2152079771",
"main.dart.js_64.part.js": "aa35494674402ddefa5662d7dc33396d",
"main.dart.js_13.part.js": "c8f8fa1c7ddfadebc36480f1927e7070",
"main.dart.js_246.part.js": "4aa57d59cb7d5abf3d5316ad9a79328c",
"main.dart.js_174.part.js": "9ea31d11ba0f1fa8ecbd9cd9cb80f9b2",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "b7c38198e5330140d2b396098d26e6b2",
"main.dart.js_144.part.js": "4c68bb0a04c470edd0a502c975cd7cba",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "986421207ccb06d38336af8c2f919a71",
"main.dart.js_265.part.js": "516b8cc8f3baacf356243f49ecbb49af",
"main.dart.js_31.part.js": "21d9d798e8edadc11fddb4b2b11fe578",
"main.dart.js_119.part.js": "459a6e5c94bf73aec371daac9169e749",
"main.dart.js_294.part.js": "53245961f2564f9d059fda8c5b5ed6d0",
"main.dart.js_18.part.js": "584083a0784732bf10ad177c315ce541",
"main.dart.js_35.part.js": "4b53a26218eaa133d83f627cdb50f2ba",
"main.dart.js_200.part.js": "2136cff651b0af01a952898d5023e984",
"main.dart.js_101.part.js": "9302e6f2d3b3da08823e36efecc5304b",
"main.dart.js_77.part.js": "7f66f5ec9a2176506a70abf9a8188b76",
"main.dart.js_82.part.js": "06520a9f934988da223d4adeff9058ea",
"main.dart.js_173.part.js": "a8d38ec206b0e0af09166fb60dacb2e0",
"main.dart.js_291.part.js": "2a21d1da1bf6ae1b0adbe99ba5a28e31",
"main.dart.js_106.part.js": "fe07cf1758826efe78c27d1f2bfe7e56",
"main.dart.js_62.part.js": "d198f42e5d4f3f0260af1031601c4bb6",
"main.dart.js_278.part.js": "686c853c2c7293c9d29503c2beefba02",
"main.dart.js": "91e58444be7caf6a53be8dc09533dbdf",
"main.dart.js_222.part.js": "a40248619676d3d7bb39b1d7ae300438",
"main.dart.js_232.part.js": "d9d92a82dbba170e66c50da0661b3a59",
"main.dart.js_293.part.js": "5cac86471309b7c2b423cd550072df24",
"main.dart.js_124.part.js": "b21b4f5d94d99743636a0b92c80c505e",
"main.dart.js_50.part.js": "779e795bac6ba206f7fac3b04c1fc4ff",
"main.dart.js_192.part.js": "16c203fd6ff3f7a27f99773702b586ad",
"main.dart.js_91.part.js": "0e20a8e8b4dba0348c2fe7be96289f64",
"main.dart.js_145.part.js": "a8805eee7244c47acb9e7544c3eea936",
"main.dart.js_190.part.js": "ae34e68e22d63dd21cc129b7082a731d",
"main.dart.js_104.part.js": "488e8a5894af318616aeeceb24c4809b",
"main.dart.js_201.part.js": "e75dbdcdf7fee002919b0285a92b1171",
"main.dart.js_69.part.js": "a602784e9930f494c3e15372ecb30872",
"main.dart.js_181.part.js": "1615dbe5e816b0a62f82fd95f6c09470",
"main.dart.js_270.part.js": "5e312ae4a911b3d042c2ee5146e6c94f",
"main.dart.js_158.part.js": "fd931901d32d9947a9f0a78432169fc9",
"main.dart.js_33.part.js": "7d366ecafeb3f55ac29c32a829c52de8",
"main.dart.js_275.part.js": "961c311370a99da4567ab40ec8c9e0b1",
"main.dart.js_269.part.js": "79c19765a25fb075b52e4308908491a6",
"main.dart.js_217.part.js": "d4bb9436d94d26553b5032722a8f8f31",
"main.dart.js_34.part.js": "fd519d6813376b3333e48087007eb565",
"main.dart.js_210.part.js": "278f7b508512935df40199cb7720ea13",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "2bea01eb7aad2579dc9d86314bd6984e",
"main.dart.js_88.part.js": "4df8e09702ce78c8cbbd0eacc67b7a7d",
"main.dart.js_202.part.js": "9d7440095ce67317830f090700ee83be",
"main.dart.js_183.part.js": "ee1aa363c822140e6c330f535083f9bd",
"main.dart.js_167.part.js": "77b1321690a0c3c977ffa3bc25edd80f",
"main.dart.js_203.part.js": "c6f8f69e2533b7ce6fc3f00c5f65bc88",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "25795d50b060be0bf5d80eabc0737960",
"main.dart.js_247.part.js": "d3e84875936b848f87842b2be2c9195d",
"main.dart.js_7.part.js": "5500a5e788bfa7a9a6d9873a641be1c3",
"main.dart.js_140.part.js": "b2303fbbb6404953b4b29f22c09b2307",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "d2c014871ed40832cd24b137ff5adef8",
"main.dart.js_27.part.js": "a619fad4e6d1ee1631d96085fb70651e",
"main.dart.js_156.part.js": "79e0b87f99b7e6e5124ac051380cd72b",
"main.dart.js_4.part.js": "d1571a6667ca02ef6accf74c1d285281",
"main.dart.js_298.part.js": "94886afb856533f903792909108617b2",
"main.dart.js_116.part.js": "b35eb9ce65ba256350553d00555a3f4c",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "44ab09b518491f54af4e333750710a45",
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
"assets/assets/translations/uk.json": "d916db0051f2553fd629f5ff8ddfcfba",
"assets/assets/translations/pl.json": "ea43549dddb786fdb0bdffb63e7981ac",
"assets/assets/translations/sk.json": "5234ce81c749c1254b3707aeb84e9076",
"assets/assets/translations/en.json": "839054cee0fdb783176662fe2bf495f7",
"assets/assets/translations/cs.json": "d6772d952a5420c3ac67acc8622bafe6",
"assets/assets/translations/de.json": "1851af4836c8764b0cf9f34f468ca91b",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "98b72f58e758ebfe55349cc2a8b75fcf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "54ebea326e33f2ab46bf46dc0d8e76b5",
"main.dart.js_263.part.js": "5b25ed60a5b12446bbcf525f01b0dd90",
"main.dart.js_220.part.js": "9e03c298790391c94de53a234c0a2496",
"main.dart.js_25.part.js": "5b328b24eedd33221c8a224cca7ad708",
"main.dart.js_288.part.js": "1e5f92fd218af4af566e489393bd6c87",
"main.dart.js_141.part.js": "85ddd0c78b9c6b534cc8152bcc8714bf",
"main.dart.js_249.part.js": "d75f54b5a600e7e8a67e4043998e2645",
"main.dart.js_123.part.js": "d27397b22220da2f4d953a47ed21d11a",
"main.dart.js_268.part.js": "7491f8d3826b7761bdcc45533c02ca85",
"main.dart.js_8.part.js": "9e89276d372997522dfbfd757a662383",
"main.dart.js_198.part.js": "3c50ae7a0d82089ffc8b1728fdb2236f",
"main.dart.js_81.part.js": "94f203ba03d6ae91aacaf71a030f5e1a",
"main.dart.js_205.part.js": "246894aeb0a1631ade2a2cebe101a6d8",
"main.dart.js_113.part.js": "f57fedcab2cb74ab6942990b259edf28",
"main.dart.js_9.part.js": "15f4a39ee27765b5ddf4954090be96eb",
"main.dart.js_99.part.js": "09c35ca36eca53b8246c144f2a6ddc7b",
"main.dart.js_272.part.js": "60d11782125450d5d46897b4fc7294dd",
"main.dart.js_86.part.js": "26fdb049e7909a0c7fcf5c4e352e33fb",
"main.dart.js_23.part.js": "cdf9120a2fe80641a55ee99087c357d7",
"index.html": "f61a499e3b4b5ce567df0acb480e6a31",
"/": "f61a499e3b4b5ce567df0acb480e6a31",
"main.dart.js_98.part.js": "ed6ed704be2f08f5de7cef59a9fd83e9",
"main.dart.js_53.part.js": "9850d68b0639c9f78dd9dec8706bc3b5",
"main.dart.js_235.part.js": "98027cdf25235e0e1358583584f8417c",
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
"main.dart.js_118.part.js": "1d5223496aa6e1b0acb71072db2361df",
"main.dart.js_26.part.js": "a5b3a6b1e085de648704f6006f9ffe59",
"main.dart.js_20.part.js": "85fcfc152df7b87afff8cf70921cc5bf",
"main.dart.js_189.part.js": "a5068699197d3d7162a45dfae5126dbd",
"main.dart.js_214.part.js": "1be520f401685dcfc4f5f15d1a03b98d",
"main.dart.js_51.part.js": "a23bc1887f7d01913b4585d5afed6927",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "265a75874860f23ca270fc1cdf02aa44",
"main.dart.js_290.part.js": "4b1fae11d742778b9c811fadb083daee",
"main.dart.js_72.part.js": "a7770e61aa1c8eeeacfc1cb0e3dbbf08",
"main.dart.js_1.part.js": "9259a41d2c921202abdaf8ce95f5720c",
"main.dart.js_120.part.js": "42b7efaf5d116c7d01029684cde14b77",
"main.dart.js_63.part.js": "52642403f4e4788b6a0f5a38ebb34ae0",
"main.dart.js_211.part.js": "d8588f211c36af796976c3dc2a8e5099",
"main.dart.js_261.part.js": "0d9435348e0814917909ffa0577cab46",
"main.dart.js_295.part.js": "a1d44329f88fefc2d5ee8574f86e4b81",
"main.dart.js_12.part.js": "7bafe2c129e885fe1b486a98ab8a974f",
"main.dart.js_157.part.js": "9f3842a9888f81d6595fe7fda2a1bb28",
"main.dart.js_281.part.js": "4d47e4fdf7d4061233377473427401ec",
"main.dart.js_221.part.js": "1be460ac38720506f177cd475a7885de",
"main.dart.js_137.part.js": "24af69a1861a4733dbf6fe25d2b5568b",
"main.dart.js_276.part.js": "2471a790472962353f3aa511a496486b",
"main.dart.js_28.part.js": "1bba038d2c814103550c6981c52f782c",
"main.dart.js_135.part.js": "c0228a869337967f8fe038a66e02cfc5",
"main.dart.js_256.part.js": "c822999988ca8d33e937b684a360a2d4",
"main.dart.js_237.part.js": "c727b034c31e63edf53359ffe2446c3b",
"main.dart.js_138.part.js": "51e375e9cab7dced23b5aa08773fdb0e",
"main.dart.js_193.part.js": "c082728d66ff6c95530f1ee4d6d03e6f",
"main.dart.js_17.part.js": "4bb6f914c644391ac85d394818d12be3",
"main.dart.js_105.part.js": "b510d5215b51dbb1e52a89f31fb84f05",
"main.dart.js_231.part.js": "65b94f7c0e0206fb76ffecfc6a7eb4d6",
"main.dart.js_43.part.js": "9d338249486e55f6bc878801b2e79ba0",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "298d1621d14ad71f8b1587027af59a47",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "c37caf90e1535369bce53cc0a64225ad",
"main.dart.js_292.part.js": "146aa64d341c090fe78d86e394883f75",
"main.dart.js_15.part.js": "e1f123342e0297e16fced4a9bd12842b",
"main.dart.js_151.part.js": "c37ae7e5421bc4db47ac09f072db2fd4",
"main.dart.js_19.part.js": "18888803453edb92cd8242a4b55c4a81",
"main.dart.js_284.part.js": "2cd1d28f7b28104fbb50cc71b3abb063",
"main.dart.js_255.part.js": "6017b63367d88964a1fc243acfffdc57",
"main.dart.js_186.part.js": "94317695b204a9a25d9fa9ebf5f750b5",
"main.dart.js_154.part.js": "015090f3188839c1362f4b9f7ae2dab9",
"main.dart.js_257.part.js": "b5a4c7262a34b7bdcb2390a73b94b663",
"main.dart.js_42.part.js": "d71a70c3e9e4c7ce8f82313379752ca3",
"main.dart.js_16.part.js": "97b3412618f9abce3514cdf92ec083a2",
"main.dart.js_250.part.js": "1840e4759b1171b2ee70cb2a24745ae0",
"main.dart.js_52.part.js": "55cea78cd80d3d19e88ab8b2c14662db",
"main.dart.js_36.part.js": "f5182340daff298618022c9212f6006e",
"main.dart.js_300.part.js": "71f7e4d45cee3a86cc27dc2a9db8cd13",
"main.dart.js_199.part.js": "99e7c24e5d091512ad79fb4c43e04e27",
"main.dart.js_253.part.js": "2b5d9d8694d750cdef57cfb77ed4250a",
"main.dart.js_130.part.js": "f040d4930b431de933c26401a306207c",
"main.dart.js_152.part.js": "0cf70a602ef6e18f2579b6c3af8f308b",
"main.dart.js_32.part.js": "ec7603806c27ab1285a268e8cb0c9b5c",
"main.dart.js_197.part.js": "4706fb9168accf52ed25cf5997e72b18",
"main.dart.js_56.part.js": "ceaca379e1c95a9a263c4b00e67a6b5e",
"main.dart.js_3.part.js": "5762440db154034e4f3d4a00d0498deb",
"main.dart.js_38.part.js": "f40b424bee2b25820c39e396deaebee7",
"main.dart.js_225.part.js": "b957d7aa6d7e8b9463cf00d6303eccf4",
"main.dart.js_133.part.js": "b928bdd3e627f462b5f16f5725c89b59",
"main.dart.js_21.part.js": "10a99275509a5bbc86a336e440b28644",
"main.dart.js_188.part.js": "5a0cee4313c99a96c660fc582206f053",
"main.dart.js_204.part.js": "4f048a88a806c77b920a08058f142ef3",
"main.dart.js_24.part.js": "1d5681d38f4e4239c67a73c957c980e5",
"main.dart.js_90.part.js": "7b23035d1ef1f1c1a7b0270734ebec27",
"main.dart.js_111.part.js": "bf6ef8800fbf45477f19f4c64c77b76d",
"main.dart.js_177.part.js": "bd66ed1d5c7f2c0b11dbd503ca42b290",
"main.dart.js_299.part.js": "d7c8104fbe9e3fc67ffc1600cd2f8da3",
"main.dart.js_85.part.js": "c5f43d0a2530404626c8669d0622f27f",
"main.dart.js_243.part.js": "fc473a68259e792e820ace28bb0f1537",
"main.dart.js_212.part.js": "040e29d7bd77bbe3ba3ff56959d4013f",
"main.dart.js_260.part.js": "9871a9b085bbb815ee82112328a410ce",
"main.dart.js_39.part.js": "41f2490dc327e0f248fcbdf2d66eca16",
"main.dart.js_185.part.js": "be3702e25f08729784eee850928916f5",
"main.dart.js_46.part.js": "a498a4507d1c0b16b0511e3f5d3784f7",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "b904e40f4c9fd739f5667a24e103ad43",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "12291288967ad98b3e6df43cf342fb1a",
"main.dart.js_121.part.js": "e67f6b725b7e7f765d5dc2e14b5c7cf3",
"main.dart.js_55.part.js": "56d958f07c2a7aea9bd1a6639f9983e2",
"main.dart.js_112.part.js": "eab92a6206ab9fc0669a9da271324691",
"main.dart.js_139.part.js": "c94d3551e653f6f7f9c38939bb9c5298",
"main.dart.js_143.part.js": "d51887801e379d937c3606ce4f55d20d",
"main.dart.js_80.part.js": "e9b74b799c745798a575f42b67783678",
"main.dart.js_252.part.js": "88d3cc994fcf67c12562d5359776e550",
"main.dart.js_30.part.js": "750a0640b35b3deb5c5d80f238f6427e",
"main.dart.js_267.part.js": "0e7e95cb6bf2e0cd2a00a2e14184bbaf",
"main.dart.js_277.part.js": "34eaaa1536119f26c15d0e8a24d5c5f3",
"main.dart.js_136.part.js": "e5c4f8e7db0c24571419a4dfac69b45b",
"main.dart.js_271.part.js": "0846304c8b03098b9b14acc219fcf52e",
"main.dart.js_159.part.js": "72eec6ee7177ebee0e0d86e09546f818",
"main.dart.js_59.part.js": "3ed6010f1b48554b5d3049101215e4a4",
"main.dart.js_95.part.js": "db2ebd08fc1346d6fc598f14f201a29b",
"main.dart.js_107.part.js": "28b215b1668816f9dd569ec5a8aeb6ea",
"main.dart.js_29.part.js": "a822d56cdc566386d70be877a9459df3",
"main.dart.js_61.part.js": "c8791a1c05b2bac34c91f42d09d08d88",
"main.dart.js_58.part.js": "095edd37dd6bb38010a7e2566b63913a",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "290e61cb1d90110f658255e7256ca9c6",
"main.dart.js_54.part.js": "da9836deb53b5c0e1b8d20b185b73945",
"main.dart.js_79.part.js": "a0479d3660a4bf07c72e7250e2f588b6",
"main.dart.js_92.part.js": "e123f6f95b1cebac3774f86481c9ff42",
"main.dart.js_224.part.js": "f5e79f9006a8973fdd40e96657438bdf",
"main.dart.js_223.part.js": "5318cb218c6d62f9c260311a661c6374",
"main.dart.js_11.part.js": "a73059d0b936cfa7efd0cb9787f04917",
"main.dart.js_131.part.js": "b6635d659f109108821b5b28c0ecae68",
"main.dart.js_226.part.js": "44080465326bf3a659488ed603f0157a",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "6ad21b0a0ad703591e6d755d1deb6a5c",
"main.dart.js_100.part.js": "7fe25b2289148e1464c306cdb30e14ab",
"main.dart.js_258.part.js": "fc030b08a4b2a67bdc6435babce0aa38",
"main.dart.js_297.part.js": "8bfda20a8da8e297eefd248f9a8d643d",
"main.dart.js_70.part.js": "4fb072e9c43af07874bd984d092cffaa",
"main.dart.js_187.part.js": "8c1474447600b665558f8264780befef",
"version.json": "13e25a1bf53b1e0617e6c3115bbf029e",
"main.dart.js_264.part.js": "d912fc26419f185a420968ba56712a10",
"flutter_bootstrap.js": "7b050c1463d5df8087113b6507edfe2c",
"main.dart.js_191.part.js": "64e80a514d585746d4def387d1e8ba37"};
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
