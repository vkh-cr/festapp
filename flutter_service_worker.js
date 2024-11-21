'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "86716fe43349e99ede76f840c494a002",
"main.dart.js_75.part.js": "7fdac76d22417846c9f60f2bf2bcd4dd",
"main.dart.js_289.part.js": "82afa78ccb7cac69eb72931f4b77d0e7",
"main.dart.js_83.part.js": "ac7bc454877520b41049f3f9ed5e56e7",
"main.dart.js_254.part.js": "9af9258d4f9fbff59b310b0a19293e53",
"main.dart.js_176.part.js": "31cfedd1a091530cd006356f7a592602",
"main.dart.js_96.part.js": "05877275c70cdcd607fcc550c09e03ed",
"main.dart.js_245.part.js": "c40538a17866f32caddca12f3a3667ef",
"main.dart.js_87.part.js": "5ba97858b1c3077958b735e1f739346d",
"main.dart.js_251.part.js": "44a3a1563b710a3121120d188f7ea6b7",
"main.dart.js_126.part.js": "bd54647e4d812dc8a1da9684333a7ca0",
"main.dart.js_129.part.js": "0f3f82d4cf3d61b99c8dbfb4768a9193",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "c90ff8f333e7d4e8e845e9b7282c7209",
"main.dart.js_172.part.js": "5dad05c65066db312d4b14fa2e072cc7",
"main.dart.js_142.part.js": "70486b6efcefde0f45c5732800e22867",
"main.dart.js_209.part.js": "dd694fdca4ad93cc3ff08d1df596fbbf",
"main.dart.js_10.part.js": "497bf11dbb443720426adbc9033e53d5",
"main.dart.js_66.part.js": "02dfb843e7e6f18f2ec8c37b7bcc9ca2",
"main.dart.js_84.part.js": "2b9a08efa5e5ac32da3649d1c1b97190",
"main.dart.js_122.part.js": "898df19e66811d32d9fa7198f1fab54b",
"main.dart.js_230.part.js": "818ab9a2a1c4d17d2cff8734c780ce64",
"main.dart.js_213.part.js": "634065db433b9508da66bfa2eb5266d3",
"main.dart.js_153.part.js": "12af760f540ff0b49efe8f5593d22100",
"main.dart.js_89.part.js": "8cbd878fe038324b9b785773ab53ff1c",
"main.dart.js_146.part.js": "ff4967ffe9ac385ff1823059cc5588e2",
"main.dart.js_37.part.js": "dca547df3da52f61cacdce1cf8e28424",
"main.dart.js_287.part.js": "c62a0cfedf4fc3f50858a32897b94b45",
"main.dart.js_283.part.js": "3a6af7e7f17335cf6f364de852627489",
"main.dart.js_132.part.js": "3090f53c500cab57f7444064fe57f415",
"main.dart.js_165.part.js": "78d017f0c3f46ab818141f819a5ae188",
"main.dart.js_127.part.js": "db63b29afb4efbfd555d5c64314c8569",
"main.dart.js_175.part.js": "cdacde2033f9f496323d8af0e0728015",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_216.part.js": "cc5cdd721cb58cec7cfb6efd80ca1c2a",
"main.dart.js_64.part.js": "85099b003c5929bbe3a23140e2906500",
"main.dart.js_13.part.js": "5acff1e19b78d56d7ad3a5fbe7708c26",
"main.dart.js_246.part.js": "5a9f40a2a5037b43fa9431e973c86c3a",
"main.dart.js_174.part.js": "eb05660a67f7e95e2a3f8c9153388a95",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "24ec6022dd3a68a5d4e8a17712733bf8",
"main.dart.js_144.part.js": "07165d35e7b6aae33381d7faaf6fe7a6",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "4480adc7070fa5dc9f8e5420559feac0",
"main.dart.js_265.part.js": "774a56968f6abe25f3839f4d72eb1ad2",
"main.dart.js_31.part.js": "21d9d798e8edadc11fddb4b2b11fe578",
"main.dart.js_119.part.js": "165f0e57b6785e205d3482e72fa3a5d4",
"main.dart.js_294.part.js": "c63ed31ecfeb69401b7b0e8115cd02c3",
"main.dart.js_18.part.js": "584083a0784732bf10ad177c315ce541",
"main.dart.js_35.part.js": "4b53a26218eaa133d83f627cdb50f2ba",
"main.dart.js_200.part.js": "b292ac1ce092c2a60bce3680039ed7b8",
"main.dart.js_101.part.js": "9f88fc0fdd6011eb2398d7327fcfaf3e",
"main.dart.js_77.part.js": "afb1e2154f0fdd381a95985887424b14",
"main.dart.js_208.part.js": "ce1fe48f6ca5c2bee016acbc2b58d656",
"main.dart.js_82.part.js": "7b8519a016288b7c34125ccfa0ed746a",
"main.dart.js_173.part.js": "32ac9df444c9ae9bdaa31e74e962346f",
"main.dart.js_291.part.js": "5ede40ca5d71faddfd9e4c485d920b87",
"main.dart.js_106.part.js": "fe07cf1758826efe78c27d1f2bfe7e56",
"main.dart.js_273.part.js": "ee197e8afd59ae889247bdd8192321ec",
"main.dart.js_62.part.js": "4246b7b50028d5fa1a7a988ee7c359fc",
"main.dart.js_259.part.js": "e6c7b2e284c6e99e2c6841fcf3db974a",
"main.dart.js": "0664a5bf8e865eb9e3e6858cddf381d6",
"main.dart.js_222.part.js": "e5d073e9f8a5f05f536a601b952a9f73",
"main.dart.js_293.part.js": "04e52954783f0ae2ab79af1a022f4c45",
"main.dart.js_124.part.js": "8893cfa22394be567bc33569599d5fbe",
"main.dart.js_50.part.js": "779e795bac6ba206f7fac3b04c1fc4ff",
"main.dart.js_192.part.js": "a35cad5e6e826004f0513edefa33dbf5",
"main.dart.js_91.part.js": "4de720a6a3c93619fb150a00f6518776",
"main.dart.js_145.part.js": "8cb061a0efb498334255f60012207fe1",
"main.dart.js_229.part.js": "d2e16daa931670390ecde3f01777e2d1",
"main.dart.js_190.part.js": "74ad734df5b743d1a16752c18da3ef90",
"main.dart.js_104.part.js": "ef20660c8858c66fc726cc51101bd67f",
"main.dart.js_201.part.js": "32f9967ffdd35f3530dc196644ae3967",
"main.dart.js_69.part.js": "51052aba273f15402c53063e3841358c",
"main.dart.js_196.part.js": "195aef01768d7c70e0e911300357efd3",
"main.dart.js_181.part.js": "179fafa9be3e6474ed05d0810e2d2528",
"main.dart.js_270.part.js": "e660d17ce6d00f5ea34020ed1ff48188",
"main.dart.js_158.part.js": "fd245b18ae782e10f8a08c43c1a44602",
"main.dart.js_33.part.js": "bf8d809b3f1c23d03e120db9a54a677b",
"main.dart.js_275.part.js": "e8bd7651f84d2016c60301976ca8e130",
"main.dart.js_269.part.js": "f46fb7562f9534806b969a91eb76dbed",
"main.dart.js_217.part.js": "8ebfb35a11b6120a76eda5a9cfa658d9",
"main.dart.js_34.part.js": "adb391ef2ab847cac8ea0f1cde6df633",
"main.dart.js_210.part.js": "513a33707e08ace2f2969f1ea2b6ea13",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "0030821f8b4dfff4fd3c0c75b7b9fc34",
"main.dart.js_88.part.js": "3101b7e36bca21d5bb35b32d26d81bd8",
"main.dart.js_202.part.js": "3ae5af3a032627b4b18e3fa0e2a98676",
"main.dart.js_183.part.js": "ee1aa363c822140e6c330f535083f9bd",
"main.dart.js_167.part.js": "77b1321690a0c3c977ffa3bc25edd80f",
"main.dart.js_203.part.js": "3d45511489ba72ed604eb48a115723a0",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "bafcaf6f95c71567efde4d5d89f15218",
"main.dart.js_7.part.js": "76618273bf3d3e81f963daeaa12c21da",
"main.dart.js_140.part.js": "cad31c386338f490577f834a07edcfeb",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "ec93244d6206e109fb8221387249bfd2",
"main.dart.js_27.part.js": "ec837cb5aa96cda1ec0a00eb97d60630",
"main.dart.js_156.part.js": "5b7db94dcd864efa792f89f86e613e39",
"main.dart.js_4.part.js": "d1571a6667ca02ef6accf74c1d285281",
"main.dart.js_298.part.js": "c12f491f7b157886e3f0303829ec3122",
"main.dart.js_219.part.js": "140d34fb8470371f30379cb50919dbd4",
"main.dart.js_116.part.js": "b35eb9ce65ba256350553d00555a3f4c",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "4772e046a247f39a843ac9bbc893e582",
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
"assets/assets/translations/uk.json": "5c6f91b5506200c26ad51e5350765c6c",
"assets/assets/translations/pl.json": "271b55ce0c52c9830bf390887e5966b5",
"assets/assets/translations/sk.json": "319d036846a90d0dd0b0d1fc3f1cf8fd",
"assets/assets/translations/en.json": "cd55cd652cbc775f1e0f2c4d420d34f1",
"assets/assets/translations/cs.json": "d51954e17c01bdc68e0d936ac0fec133",
"assets/assets/translations/de.json": "8fac98a7bb87e3ef69fe52580167ad64",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "21092cee812eaca83f55eb5e54aecf0f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "f90657c6bddb731e672ededdb4892d8f",
"main.dart.js_263.part.js": "886a403f46cabfe579bd1d89be87490e",
"main.dart.js_220.part.js": "88f2a8a990a3e468fad2cb76e05bfd46",
"main.dart.js_25.part.js": "441b8cf861289eb6989470464e8d3782",
"main.dart.js_288.part.js": "da394cb9c8ebade1fb65a2e53b282fb0",
"main.dart.js_141.part.js": "a1321ab9121f001e60feb5478d4a7762",
"main.dart.js_249.part.js": "26dd0b1c3f37c6f39f82136022bece6f",
"main.dart.js_123.part.js": "2160c120da94c145610974a805bbd17b",
"main.dart.js_268.part.js": "a1db77535581b7ea54ad100e7f284aa8",
"main.dart.js_8.part.js": "198f95b722494f75d6541f3a61aa16bf",
"main.dart.js_198.part.js": "4a3267316a14f4720434c1d79253f751",
"main.dart.js_81.part.js": "94f203ba03d6ae91aacaf71a030f5e1a",
"main.dart.js_113.part.js": "558a26d52d866e8318efdffa34685d52",
"main.dart.js_280.part.js": "4bfefb797ff570c745232b8ed4ea1843",
"main.dart.js_9.part.js": "6cbb271042fa366941a72a5229414fa1",
"main.dart.js_99.part.js": "8c8c98066703d884c7a05ba581dab4b0",
"main.dart.js_242.part.js": "835854dbba1e6418adcb0ad0d8d6ab8f",
"main.dart.js_86.part.js": "0f18d0be80185b9af78bc2df6e84c8bc",
"main.dart.js_23.part.js": "c12b790ec8d68b1945842a3d6d83640b",
"index.html": "0efb25c5b6b934ca380bdc1967a66aad",
"/": "0efb25c5b6b934ca380bdc1967a66aad",
"main.dart.js_98.part.js": "79213064ba1cace021e506f9412dc57f",
"main.dart.js_53.part.js": "b1ebec44e40c8e86b8f646fdc4fc5c46",
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
"main.dart.js_286.part.js": "9051386e2c3c45e88c8834b3bece2e3a",
"main.dart.js_118.part.js": "1d5223496aa6e1b0acb71072db2361df",
"main.dart.js_262.part.js": "f26acbda36ed1bb912f2c1eed2cfa816",
"main.dart.js_26.part.js": "1bb794d31f0003696cc5dca58efe249d",
"main.dart.js_20.part.js": "e5326335d39df7cfde899d1f0a156a2e",
"main.dart.js_189.part.js": "0d73e5964ab0dec469225cee0ff591d3",
"main.dart.js_51.part.js": "cbdf9d61cca22537e1cc9eb411f8fde6",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "265a75874860f23ca270fc1cdf02aa44",
"main.dart.js_290.part.js": "d61833bb0394f96bed2050c421fe6e8b",
"main.dart.js_72.part.js": "a7770e61aa1c8eeeacfc1cb0e3dbbf08",
"main.dart.js_1.part.js": "94329d72253e3950e12e13d7a56bfc81",
"main.dart.js_120.part.js": "42b7efaf5d116c7d01029684cde14b77",
"main.dart.js_63.part.js": "01a281b26e7e80a525c94cb99caba517",
"main.dart.js_211.part.js": "c6bcdb6466d7e2c13cf2803d7615b495",
"main.dart.js_295.part.js": "ae37a626010dca76fbf6c1b504001488",
"main.dart.js_12.part.js": "4c1ba22e3c76774e2f0eec4746539793",
"main.dart.js_157.part.js": "4267e4acc05f6106451044fcc6bf41a3",
"main.dart.js_281.part.js": "4e2feb74f65212a2fcbc3a34496082a2",
"main.dart.js_221.part.js": "941d3ea18a6faa445195d1ab61fd3a01",
"main.dart.js_137.part.js": "2f0a34f57e7499192d96763abcab55c1",
"main.dart.js_276.part.js": "74fd533ac1397ca2a88ef59ba0a0f127",
"main.dart.js_28.part.js": "97cfe10a6b82370263c7915cb1a74345",
"main.dart.js_135.part.js": "02cd880edc3fee672a3a26dc1fe4eed0",
"main.dart.js_256.part.js": "43cd3c779443c19656d76d2daf60f2fb",
"main.dart.js_138.part.js": "553be745327cab842a9eeb108057d0da",
"main.dart.js_193.part.js": "f6b530f2dc67e801dab8006604cb8070",
"main.dart.js_17.part.js": "1aa096c66d0bc2903ca9c4ac00707c82",
"main.dart.js_105.part.js": "866296c189f454321fa274614af48e8f",
"main.dart.js_231.part.js": "2c154b6d7e4be6c78309fb91f594cf77",
"main.dart.js_43.part.js": "a500e6c053acf7b66930e5ac579005fb",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "2d4361a7966763cf46b233678f667568",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "d5820574ef8d41eeac267ffcf2b9cfef",
"main.dart.js_292.part.js": "8c2d11460fb308038d87a7b86e1a840d",
"main.dart.js_15.part.js": "b5d97a79f1756a1309b7bf7a5b972ede",
"main.dart.js_151.part.js": "b7e562114254ea80b31e304e99f1f778",
"main.dart.js_19.part.js": "621182e50589ed97650973756f39afd9",
"main.dart.js_284.part.js": "bd9df7bf15ff102fce78cd99bca4fb28",
"main.dart.js_255.part.js": "9e13ae4b123c4b0fd5836f7f0211c607",
"main.dart.js_186.part.js": "fb1a6c59202d0c4758ad7f9ca1cac5c2",
"main.dart.js_154.part.js": "2892ed0eeb268958619c75a5f373a100",
"main.dart.js_257.part.js": "206614a6f7e3473d65a401996866490f",
"main.dart.js_42.part.js": "1588281216aec3f352d1b74c260d50bb",
"main.dart.js_16.part.js": "09ef49ed4561b5a62183048f46641787",
"main.dart.js_52.part.js": "55cea78cd80d3d19e88ab8b2c14662db",
"main.dart.js_36.part.js": "507fc2470546ea26b1005e620829133e",
"main.dart.js_199.part.js": "f7e7c4d4211f4bcb3b0d42cfb8690ded",
"main.dart.js_253.part.js": "66d6d128d89d6e810c41d7571c9dce0a",
"main.dart.js_130.part.js": "8fcabbddb93575f9abf84fe4e0e02c32",
"main.dart.js_238.part.js": "fed045b0fb4504927d4dbc0b4027aa36",
"main.dart.js_152.part.js": "badf63128529686a4fb2f30501622563",
"main.dart.js_32.part.js": "8b208a7a1d35a0cfd31b8e17811cdcc9",
"main.dart.js_197.part.js": "c2848ec4d01cee6a8a1ea6a1dae97dd7",
"main.dart.js_56.part.js": "41b63e76004f7a52bb6897d5c6e9dded",
"main.dart.js_3.part.js": "2aaeec730785e0c374488f6dabc49189",
"main.dart.js_38.part.js": "f40b424bee2b25820c39e396deaebee7",
"main.dart.js_225.part.js": "7bfbd3b2b5428eee67abb1842237f1c6",
"main.dart.js_248.part.js": "dc6a2b8a4d1d6a87d2746001b9542389",
"main.dart.js_133.part.js": "b928bdd3e627f462b5f16f5725c89b59",
"main.dart.js_21.part.js": "b9092a6f77c81c7d92f3358b1dc0f45b",
"main.dart.js_188.part.js": "6e16d58262944276b583e94bef4d684a",
"main.dart.js_204.part.js": "c7617729ed5a3b1348a329e6c6626a45",
"main.dart.js_24.part.js": "764893441cdd7197a41288541582f97e",
"main.dart.js_90.part.js": "59ddee6620d54d3921f8621d99c57b37",
"main.dart.js_111.part.js": "dc4151f103d2f147216a637a2cd8b3be",
"main.dart.js_177.part.js": "3a9338b6fc1880ce08f45163dc2e89fa",
"main.dart.js_299.part.js": "0775f84ab761e8c0c1fdd769ca3b9ab2",
"main.dart.js_85.part.js": "70814849b2108520ffd0c04ca947a32c",
"main.dart.js_243.part.js": "43c132dddeb5e77092dd635ffe2e4b82",
"main.dart.js_212.part.js": "d25583229f870a7d0f6e976e3ad1644c",
"main.dart.js_260.part.js": "503c6ca3abe00791287e32811648e43b",
"main.dart.js_39.part.js": "e717ab4074a173d0cfe2eb9f9c322c7c",
"main.dart.js_185.part.js": "be3702e25f08729784eee850928916f5",
"main.dart.js_46.part.js": "08742341f071c879ec07ca8ba42bb0a4",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "cd1fa31459eefa166484d9173392f749",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "92602ac6e99a1f2d9420d9016337fd95",
"main.dart.js_121.part.js": "0dc4611b9f986e1c00f8f101628d0bba",
"main.dart.js_55.part.js": "56d958f07c2a7aea9bd1a6639f9983e2",
"main.dart.js_215.part.js": "95b8aa2141d6184b8d765f575762e428",
"main.dart.js_112.part.js": "147afc86af0f66c5b009333e33befc68",
"main.dart.js_139.part.js": "66d9fb9257da4029cd6ac67bf3767127",
"main.dart.js_143.part.js": "f9218c07e1946362fa1ee9bd689b1047",
"main.dart.js_80.part.js": "e9b74b799c745798a575f42b67783678",
"main.dart.js_252.part.js": "51f0b13d3c6b731d3f9ea418a38d3e72",
"main.dart.js_233.part.js": "e7980485a6a37d0587fc7d5dd52a802c",
"main.dart.js_30.part.js": "0d5f0e18b1a7595de86907b83af7490e",
"main.dart.js_267.part.js": "c9163cd3194025b72ddae818320b9c2e",
"main.dart.js_277.part.js": "187f3a7b934533afee2c5814645bac8e",
"main.dart.js_136.part.js": "5b84bbacbc7e42e9cfcdcc0e5f5f266a",
"main.dart.js_271.part.js": "179da99f77e53e861b1f9243e80dd8ca",
"main.dart.js_159.part.js": "70ca38f714270a35196f602c0d1cdb3b",
"main.dart.js_59.part.js": "cc3969fb7928210614d52ab83b31116a",
"main.dart.js_95.part.js": "472c04b6ecfb9404140510a6568d05fe",
"main.dart.js_107.part.js": "188470ed4ee8fc9915261c8c78e9dd63",
"main.dart.js_29.part.js": "a822d56cdc566386d70be877a9459df3",
"main.dart.js_61.part.js": "059fc0f93f5fcf6304facf72055d67c7",
"main.dart.js_236.part.js": "f46293f295acd457ab7bee30d28051af",
"main.dart.js_58.part.js": "095edd37dd6bb38010a7e2566b63913a",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "290e61cb1d90110f658255e7256ca9c6",
"main.dart.js_54.part.js": "78c2671e2a48a1e9302de9f5f6da04c8",
"main.dart.js_79.part.js": "a0479d3660a4bf07c72e7250e2f588b6",
"main.dart.js_92.part.js": "be56b1b89943cf1a11716cee7d08beb1",
"main.dart.js_224.part.js": "a99ff95acce1c911cf83ecc1699243a1",
"main.dart.js_223.part.js": "02f1b98fc2ea6e94ce6c1debc5851ddb",
"main.dart.js_11.part.js": "0c71f14888efb5ad1148e4d83a7b11a3",
"main.dart.js_131.part.js": "44aa0d10083a9bda001aa3d3deb0d489",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "308b81feb0a52f261e106a0657e618fe",
"main.dart.js_100.part.js": "7a39bcf90b9afb570df22c8ed9b13534",
"main.dart.js_297.part.js": "5d85e12013df290078d38213472d4888",
"main.dart.js_70.part.js": "aa1a7ebff17fddf2ef94e0033607ddca",
"main.dart.js_187.part.js": "8c1474447600b665558f8264780befef",
"version.json": "13e25a1bf53b1e0617e6c3115bbf029e",
"main.dart.js_264.part.js": "dce03d580ac910aa0487debbeeacc8bb",
"flutter_bootstrap.js": "b519d71b429f0e6b23dacf51ddf34e3f",
"main.dart.js_191.part.js": "d087f8b4a91387491be635f4792ee0b7"};
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
