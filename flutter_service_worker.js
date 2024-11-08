'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "b8e66d4889f7ed645047e830e716b273",
"main.dart.js_117.part.js": "53781bf7d497699f8219080f597959cd",
"main.dart.js_182.part.js": "15972d97d9a2a56d8ebca2c48020f342",
"main.dart.js_75.part.js": "6e48bc325383bf78eb0198f08f46e71a",
"main.dart.js_244.part.js": "8e819f5d1b7a0c76457991526c5fe987",
"main.dart.js_83.part.js": "d1ee2bdfe095a4f3d7718f0f3d307a58",
"main.dart.js_254.part.js": "907455ee2a013def9b6104608f38aa6d",
"main.dart.js_176.part.js": "8c90f36c54de93ce06e9773bc9928058",
"main.dart.js_96.part.js": "0c5d06aae72d4155c18fe8d2b62d9157",
"main.dart.js_245.part.js": "6406f3e546c292001fd855987644ba08",
"main.dart.js_87.part.js": "ac446621d124384cd57f0b63711fa178",
"main.dart.js_251.part.js": "7b633bd5fc93040a55e20df669ad5c62",
"main.dart.js_126.part.js": "3d4271560002994957d62ecc51bb0592",
"main.dart.js_129.part.js": "a95b081517f475f1304d002b1d1b1230",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "8332817ec44d16e7ca7f17718f744c69",
"main.dart.js_172.part.js": "c3715ff0a863efbd4cf2fb880d56fde8",
"main.dart.js_40.part.js": "cd94c61fce71b850b2158349be002ba3",
"main.dart.js_209.part.js": "51ff7a43c4a6f1d888c27281d2d273c1",
"main.dart.js_115.part.js": "0a2cdb8aa0ecbb18cbe83c73ebff3e76",
"main.dart.js_10.part.js": "a16f45ac649dec566367fb4c2deab968",
"main.dart.js_84.part.js": "0ea61c7d7b247c01e707b21d84cedbc2",
"main.dart.js_122.part.js": "6367f9efb8fa494a8a521c0c6cb5360f",
"main.dart.js_230.part.js": "2f52d2eafa08ff8d1fcd91013b8bd06e",
"main.dart.js_213.part.js": "a921b4f74d54f295da3fc5554e1ac247",
"main.dart.js_41.part.js": "de2838a39420e40d84ea8997bed42ed6",
"main.dart.js_89.part.js": "13aa23c7055debd213b7bc77c7ba9f33",
"main.dart.js_71.part.js": "e4cc4d607a770964e3d63164ffb1c296",
"main.dart.js_146.part.js": "0c4cff925e12e59708294e3ae5a09a57",
"main.dart.js_37.part.js": "24f0ee6ccb91bf4fa0087785abbaccdf",
"main.dart.js_132.part.js": "a273ac2047d5e04134b6975cb7499d72",
"main.dart.js_165.part.js": "ccd05da19b6eb382fa1905ea0bf2b6e7",
"main.dart.js_127.part.js": "aa760bc61f6749a92b85069b03dcbf14",
"main.dart.js_175.part.js": "0f7c885e9f1c1f456088b0eec2c089f6",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "8faa7ea7280f0454e3e0d872a7927630",
"main.dart.js_216.part.js": "3640674b7f754fb9e821c58e830d6585",
"main.dart.js_64.part.js": "0e2741a0bb947562f323b1d5e0d5fa6b",
"main.dart.js_169.part.js": "5610e0770afc323793c787338dc10a34",
"main.dart.js_13.part.js": "b6d32d2ce5d2abc4db26cbe7ae55da95",
"main.dart.js_246.part.js": "36f6a9b063a662b29a271b50abc84a56",
"main.dart.js_174.part.js": "f7f14ea7e83a857ad23cf0b22def67c5",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "7e5eb7cc652d034e7b5c15a9ed1d0747",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "cab83fc47e47e324b706ddebb6852754",
"main.dart.js_119.part.js": "7e7bc283888c48b0dd6766f7d3273e1f",
"main.dart.js_18.part.js": "109a4b35e9bbe77f0be332152698ab7d",
"main.dart.js_35.part.js": "59e7301ae1bb5cd430d876151854d77d",
"main.dart.js_200.part.js": "d73089d565cb95f4b4906f6f20a04148",
"main.dart.js_101.part.js": "c51be10d388d887d37db0e4d69045f83",
"main.dart.js_77.part.js": "7e1d2c0295c5e3344658ebaa007a140d",
"main.dart.js_149.part.js": "24fddefdc328cb51140d1610ee22f620",
"main.dart.js_82.part.js": "fad449fedd8b73655fc8958ad13dfebb",
"main.dart.js_173.part.js": "a064fac77b27e5ab521a38f919b7d635",
"main.dart.js_106.part.js": "25cb35288555930a9f9be95968c9c92b",
"main.dart.js_62.part.js": "5bfd729c78764da228704099abb4e812",
"main.dart.js_259.part.js": "d15ad73720d04859365cbd257bb30377",
"main.dart.js": "224815743cf5d6a866f8f803a1555acc",
"main.dart.js_222.part.js": "b344b2e3f752f98c35be3fff04ae6966",
"main.dart.js_232.part.js": "58f9d86a98e197192e6279b5b229511e",
"main.dart.js_148.part.js": "d7d280c6614aff1107e4320dd9d3d6f7",
"main.dart.js_124.part.js": "4238af8ff18f0cb28cafa25b0e27dbe7",
"main.dart.js_50.part.js": "f149849cfea74f3144539e1e761fbe1e",
"main.dart.js_97.part.js": "5967303341f7b1aa062641f336cb768b",
"main.dart.js_192.part.js": "80346fd39c231421ca7d6d17e0f1613f",
"main.dart.js_145.part.js": "db8373d419d5ef3448841814f091d084",
"main.dart.js_201.part.js": "718d0ed37cd1bafbaf1b104598cd2bef",
"main.dart.js_69.part.js": "64b27cdc51666f561ae60289f13838d3",
"main.dart.js_181.part.js": "9c14486bfcbad58d57245daaae0a01f5",
"main.dart.js_108.part.js": "465006556f036d36d132c6a867560eee",
"main.dart.js_158.part.js": "b7edc0054749476696e93de47667e8b0",
"main.dart.js_33.part.js": "7ff809e3df173af2fd3445d47ea232fc",
"main.dart.js_217.part.js": "5e2c39b8bdb9d2e543c4a876b0536be8",
"main.dart.js_34.part.js": "881619170969a2f1d754044a86e56af2",
"main.dart.js_210.part.js": "451e575a0d9949207f32e1a09a085036",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "4b086ecf95d1feec6d5cfe1c5d405dc9",
"main.dart.js_88.part.js": "9d308e066ae45718af26f4ce3405ac09",
"main.dart.js_202.part.js": "ef5a91b4c105e65450323072413cf24e",
"main.dart.js_183.part.js": "4f9af67377ae0fc618ea0d040fbe0c8a",
"main.dart.js_167.part.js": "937fac4c27bce0c281e893afdd3ca466",
"main.dart.js_203.part.js": "f3f740250bcce50af6f01f1f0aaf733b",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "7ac416876d3cc107f25bf718d025eb95",
"main.dart.js_247.part.js": "b6567b103026f75b566f061a704956b9",
"main.dart.js_7.part.js": "75b6b1f6c647563c4e23acb97bdc4eff",
"main.dart.js_140.part.js": "699973ac05cedb6af5273a4f549f5cd4",
"main.dart.js_228.part.js": "91338640bca6938436405ecdea48478f",
"main.dart.js_170.part.js": "94a68b5d1f2fc82a54f0f264ffb4152d",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "10270e2228f5ce94fe5432f9a2a9499c",
"main.dart.js_27.part.js": "f6f52e350050a1ce2353a2efbb4796de",
"main.dart.js_156.part.js": "7de31e0da5a7bbd2fe964b32cb2024f6",
"main.dart.js_4.part.js": "2b34dd2f4671a7c7de4b0ef3720b6980",
"main.dart.js_219.part.js": "0de88fc05b36368637c78b5603fcda72",
"main.dart.js_116.part.js": "493c0378afa40a4c725bd749fc2df40a",
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
"main.dart.js_147.part.js": "3c6426a58ab4d3fa29bf4cf5b44657b7",
"main.dart.js_25.part.js": "6866e99420e24aaa26d7558859d75f4e",
"main.dart.js_141.part.js": "8efa12102748dc4e5606a53ffc309356",
"main.dart.js_249.part.js": "3eb88f875e66c3e87cd5fdb96b22cbc4",
"main.dart.js_123.part.js": "4ad249c49c39cbbc74bd021226c9f827",
"main.dart.js_241.part.js": "71b3a8268e036dc6f631ff216bb434dd",
"main.dart.js_8.part.js": "ba3aa7fb88832a04147d2ab90207f6cc",
"main.dart.js_198.part.js": "4dd16d5771e2afccf40d5abaf2b8aff9",
"main.dart.js_81.part.js": "ce02327fbc30dee34c695bdc2e63a6fb",
"main.dart.js_205.part.js": "5eeab242bd30ff98338dfa7d8ff3e1a0",
"main.dart.js_113.part.js": "bccf3912f3be987838c5e08045398491",
"main.dart.js_9.part.js": "cc74c715cc32041526d2178a01bfe2e5",
"main.dart.js_22.part.js": "9e8bd2cccdba5588e323e810a58c999f",
"main.dart.js_86.part.js": "166542530de2fe87bdeb8bab33109f53",
"index.html": "4e2c07db768558bd09c322fe097727a8",
"/": "4e2c07db768558bd09c322fe097727a8",
"main.dart.js_94.part.js": "bb8ecf3d7913e385b77815328e7858ea",
"main.dart.js_98.part.js": "1f8119ee3a1546c5e4ae0570077ceb36",
"main.dart.js_53.part.js": "d951dc4abcc36ef856c056fbd011a931",
"main.dart.js_74.part.js": "cbcbe711257c41586b60acce82431681",
"main.dart.js_235.part.js": "2f663f9f3f51e41fb3d9d1c3a1df7afb",
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
"main.dart.js_118.part.js": "523c18a956534f93bab2367f8a2bf300",
"main.dart.js_26.part.js": "3c79148df1bf7b39734bed44bca9e617",
"main.dart.js_240.part.js": "f107f889b28847c0f33124f94a47b8ef",
"main.dart.js_20.part.js": "1064667c68e7c001f892c01d5923c0cb",
"main.dart.js_214.part.js": "d9fe5b543102e28fbc05de5ba67e33e5",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "2cbd1ea93ea66579e518c7df4565dcc0",
"main.dart.js_1.part.js": "f957d67b637fc92521093014ff93d524",
"main.dart.js_120.part.js": "9a536e6f9d70c57fc276de910ba137f6",
"main.dart.js_63.part.js": "a7dbd2a77a97d376911c623c1206a724",
"main.dart.js_211.part.js": "4014754b0dafc087492d30a2daea46a4",
"main.dart.js_261.part.js": "4b76938824dd56fab0f679b43ccc6612",
"main.dart.js_12.part.js": "4e302f4279d641b3b24aac16c92232f3",
"main.dart.js_157.part.js": "7032645a22768cd5c15bcb9d00b5c9fd",
"main.dart.js_221.part.js": "1c163fad59c51d6bec9bbdfda301fcd6",
"main.dart.js_137.part.js": "3c580649a9e44e551ac9ec1b716c1efd",
"main.dart.js_28.part.js": "8168c3c6f69529e980f54ad48aa9e18c",
"main.dart.js_135.part.js": "229b14aa9d1f5f397a9bef8789f89818",
"main.dart.js_256.part.js": "879804b7ea3fd279888a2068973b2a2d",
"main.dart.js_237.part.js": "3d823926e1f50daed5e2320bdf5a3235",
"main.dart.js_138.part.js": "69671723e2713186ce020adb18f74bf3",
"main.dart.js_193.part.js": "89873c1f8e3086d50f7334526e72176f",
"main.dart.js_17.part.js": "91943c8ed02928227e4c7d09305f24ab",
"main.dart.js_105.part.js": "ff5c58de4674cdad0ba6642869cac25a",
"main.dart.js_231.part.js": "05313b53b5baeb8f2c2e9f9fe406d932",
"main.dart.js_43.part.js": "7536396e687e1069f6d0816df87ac8d2",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "00a9894c81e459e34a3b8c71258cf774",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "dc0621b3653dd212bf057a7ec99e3a5d",
"main.dart.js_15.part.js": "ebb771ee19550a91bb45488030639c25",
"main.dart.js_151.part.js": "af10040c4e9e8ed60b648746ff1e7740",
"main.dart.js_19.part.js": "7342a3907aee1599563806a5b35c41b5",
"main.dart.js_186.part.js": "b0b65ab13490f338e4255d4fa5679c09",
"main.dart.js_163.part.js": "62a24bd43ee0f8bd621016cb4fee135b",
"main.dart.js_257.part.js": "4032b47defa563a0ade259dffeac8cef",
"main.dart.js_16.part.js": "087c9c805dac2d3e73f3e00f86ad18dc",
"main.dart.js_250.part.js": "67a66b2b88cbb18cd4574c8d1d774b7b",
"main.dart.js_52.part.js": "35ed334eec03961032f10276daa2a1b0",
"main.dart.js_253.part.js": "762ec742523392c9417c285329028eeb",
"main.dart.js_130.part.js": "0761fd98ed6f2d37867c71a0d796c40b",
"main.dart.js_238.part.js": "9a484e2fe2d254ad55661f82a3584e2a",
"main.dart.js_32.part.js": "b8176e417535e5b02cb17ac3c47bd923",
"main.dart.js_197.part.js": "1b52ee34b179c2738da632524d701bd9",
"main.dart.js_56.part.js": "9320eeae8759c1511f4b150d3e271638",
"main.dart.js_227.part.js": "dcf71ab9739ceeb170f1edc50a1a6f0b",
"main.dart.js_3.part.js": "906534269ee2ec3ecada963e4fd40c1e",
"main.dart.js_68.part.js": "c7887c149800faae9876c1e02214f4f9",
"main.dart.js_38.part.js": "2d7ddf5d34a9b874b5b5011f0d468711",
"main.dart.js_225.part.js": "3d3f95a10053814bbd8d16c269ddf2e5",
"main.dart.js_248.part.js": "7ec9a9670b4126bcf0c03b8304924989",
"main.dart.js_133.part.js": "d806416d016424172ee654f9a8f2cfe1",
"main.dart.js_21.part.js": "1c5ca779b063396a56a968b69226ce26",
"main.dart.js_188.part.js": "acf12d832190023370d23b2390d68642",
"main.dart.js_204.part.js": "142e6ae2420cc0010d581af2c7b280c7",
"main.dart.js_24.part.js": "d7c71fd94da392ca87d271bfc3363b08",
"main.dart.js_90.part.js": "7b177b8f71cb5d5c419f1c2d56279a57",
"main.dart.js_111.part.js": "948849f991b0d13ec19699f2fba333b2",
"main.dart.js_177.part.js": "cf21fbf32f78540d2d65bc2eebb54a37",
"main.dart.js_85.part.js": "d925353eaf5f67c31cd8af8d7b92970f",
"main.dart.js_212.part.js": "3cfa93791d387a53ec2d7ff71c95b309",
"main.dart.js_114.part.js": "792d2ee0db173b2005a505831c8b7fa4",
"main.dart.js_39.part.js": "092e2320731bc401c42be4864339f7a4",
"main.dart.js_185.part.js": "ba4fa111aa51ab4aab413398be6dc78d",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "4e89c9612d6f5f7749f96449734cce53",
"main.dart.js_171.part.js": "5749c78d47f95e8a0e6da9efbfdbdf4e",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "fcff698c30924c68a892f55a6e6c0e65",
"main.dart.js_195.part.js": "64b85e2d0ed3ec36567d2ca1199a37b4",
"main.dart.js_44.part.js": "4621fd414064e2b57c06ae18465f44d0",
"main.dart.js_121.part.js": "1b2b434c32a9e1fe63654e605f9ca5a5",
"main.dart.js_55.part.js": "d374daaf29bcf87b4e6e56beabf98b57",
"main.dart.js_215.part.js": "06c96a5edfe39e4e31023cbf965fb316",
"main.dart.js_112.part.js": "2d335b5a6d15d97692960a25c122500d",
"main.dart.js_80.part.js": "d2b384584f3796dee85125cb092ced14",
"main.dart.js_252.part.js": "040900ae2523f1eca2afb9417b1d2344",
"main.dart.js_233.part.js": "34739360e75839a60253a178736d4402",
"main.dart.js_30.part.js": "b594fb950877ed51b93ee34e7f240a04",
"main.dart.js_78.part.js": "e7a2887885d37dd32a4a0ccf9b8e6607",
"main.dart.js_136.part.js": "4e6d6d95624ac0b2713219c7c497455e",
"main.dart.js_168.part.js": "3e6ee73cac11cfa7f844e3adc319d26d",
"main.dart.js_59.part.js": "ecc3470459d6b9f27e47dde190362279",
"main.dart.js_47.part.js": "ed475bedbda7cd925c6dbe37fd8062c9",
"main.dart.js_107.part.js": "4fa51cd5a8d5d1d722f529419d7ee1cc",
"main.dart.js_29.part.js": "fc873a64e2b3fdcc70e2dac30db67238",
"main.dart.js_194.part.js": "e52acc6296fffd2246e9d56c9a7d3ab4",
"main.dart.js_236.part.js": "f05bcc17b2b198708a2f0cc233a82afb",
"main.dart.js_58.part.js": "4683aaea4db5f907e49e852c0f9848d3",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "88ad356ce988133314cf1a10b4c2619a",
"main.dart.js_79.part.js": "969689df8121640644da8ff5dac102ba",
"main.dart.js_92.part.js": "2322f5800a5a7ca9cf332d79f9df70e2",
"main.dart.js_224.part.js": "b14d8ceb246c101e749fdaff5ecb098b",
"main.dart.js_93.part.js": "2e5bb14cc830e3d18e40ccfcb21811f0",
"main.dart.js_223.part.js": "7c8ceaf6881e096b7ec3a9655e6f992a",
"main.dart.js_11.part.js": "12eb98af814daf398ce2334e5c86f0be",
"main.dart.js_125.part.js": "d3616b603bfa5bd3e9ecc113f8d09291",
"main.dart.js_131.part.js": "f0a4e76be1b1962cf9bf4aee7da6c389",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_178.part.js": "720d9fdf82b79362000914f675d39375",
"main.dart.js_258.part.js": "a60c633c0307d3039669350b31dc6c70",
"main.dart.js_187.part.js": "362d8ca8ad4c99b949a313d1e53a3f12",
"version.json": "9357b545630e4d2b39b94aa92031b363",
"flutter_bootstrap.js": "be613ca8a66e71b3c3d65f74065072ba",
"main.dart.js_191.part.js": "7ae9ed6dbad14aa71344ab5f7ce79c02"};
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
