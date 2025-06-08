'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_290.part.js": "c8165da0d9cf09bd465494f3ce923377",
"main.dart.js_81.part.js": "2249eee3d5f46b2ed1dca5d5ae84c0ba",
"main.dart.js_190.part.js": "426312ed50a4f8aa05a9968353fc0985",
"main.dart.js_154.part.js": "1a02ab0333c56679d90b82476e3c4599",
"main.dart.js_87.part.js": "24a97e37aa4877338214f6c559a2846c",
"main.dart.js_159.part.js": "bd7dd07f6924569f4609a826abc2684b",
"main.dart.js_36.part.js": "46e787b48fdf9a1e7d27bffd1045cafc",
"main.dart.js_299.part.js": "f0a7595a0c0010192fd11637afb307ae",
"main.dart.js_199.part.js": "a4ba14a60ef64097ab49dcb561dc6724",
"main.dart.js_138.part.js": "632e951ee15a34d1b11a77b0de39ddac",
"main.dart.js_122.part.js": "6f46a01ca6968b8d85e8f69de031d1bc",
"main.dart.js_25.part.js": "d3f607fa76fc8983a12a0bf2eedd8f9f",
"main.dart.js_251.part.js": "750c5a6e3a1ad975528406a33b16b5c1",
"main.dart.js_206.part.js": "6234dc2a9152cba7465cb5fada734972",
"main.dart.js_249.part.js": "2277d43101636bb9e9503388d3738d7c",
"main.dart.js_14.part.js": "b8f273855b724f96b47d5bd6a77acce1",
"main.dart.js_255.part.js": "be1c8d20a84afb91ecf6f46a69e9bc1e",
"main.dart.js_178.part.js": "83a74affb29e69e33a700c43899778c8",
"main.dart.js_256.part.js": "0e20a16b500ff415cc2f1bfe664d1f7f",
"main.dart.js_197.part.js": "8b8e267fb450fd477b8aa2aecce03685",
"main.dart.js_134.part.js": "63c33ff1b77a05c37b4fb7afb3c0c614",
"main.dart.js_46.part.js": "325c943045b7178e7ad7ee7f97263168",
"main.dart.js_274.part.js": "3ad70063b739f0b5f0cd109792b65a87",
"main.dart.js_72.part.js": "61e7448b5c7c5554b3cc1bd1e1bc9d98",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_207.part.js": "29e2f64ad4f4f53e547344703ccdf5a8",
"main.dart.js_38.part.js": "48cdfed73c1bcd9cc8f428e11b27d812",
"main.dart.js_205.part.js": "d09d4c5bf00eb0fba18519d113222a4f",
"main.dart.js_276.part.js": "7194d04efa791cf86919b3552a2e9294",
"main.dart.js_6.part.js": "42ecc889656d3409b7e94e399a0d0518",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"main.dart.js_169.part.js": "6036b2422cf69372dba7d5596bfcedb9",
"main.dart.js_132.part.js": "7889e3d7a9076dc9fa648fff22d56c1a",
"main.dart.js_146.part.js": "34c7b1ddd225d939171d963b898b9658",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_57.part.js": "620e072f2d4333b16d1258e97cb14c41",
"main.dart.js_60.part.js": "7d9e79eee4cd2f2e1df617f087cd769c",
"main.dart.js_264.part.js": "be520d1c3b067cd7f881f657a001df92",
"main.dart.js_285.part.js": "289f5ae512fea40b2126d1db2869003a",
"main.dart.js_92.part.js": "d70ee917393f6f867a68a8785faec244",
"main.dart.js_307.part.js": "9977384b361be7f96e4913152c5997d1",
"main.dart.js_85.part.js": "db30d4952c05e787dc6d538e570f4da5",
"main.dart.js_200.part.js": "0eb1fbe60e9a451acf7e0acbc213ed48",
"main.dart.js_1.part.js": "3691b937f6ecf06ffcbead3f72eb40c6",
"main.dart.js_121.part.js": "53915579820fdf1b400cff67d0f268d3",
"main.dart.js_39.part.js": "4f7bc492d25857f86c20d095fc947925",
"main.dart.js_8.part.js": "b7e4195bdc31b8e38b9b7ff9ad99d2d8",
"main.dart.js_95.part.js": "27c09f77e2bdd4c19e9592a6cdb2fd43",
"main.dart.js_139.part.js": "e20f6575c8cbe80f6d3d0be671ab1a93",
"main.dart.js_140.part.js": "9937ab274a4a734c55b8709ab35ce058",
"main.dart.js_93.part.js": "d4e831653bd297ee6949de80d3ac4451",
"main.dart.js_275.part.js": "1d93a07c11416c93acb5f387b7ea5406",
"main.dart.js_180.part.js": "654202bc96aeb7a43436ac36eb6edb51",
"main.dart.js_179.part.js": "be55bd2a03876b13cef957d835351862",
"main.dart.js_182.part.js": "1364d6a3f3021b31c4afccdd7e8d24e8",
"main.dart.js_144.part.js": "9aa44656b854004815d1a0bff0385fae",
"main.dart.js_13.part.js": "35b02a6dc7409f8abefeb5a063456c96",
"main.dart.js_48.part.js": "9721f10ed95536b036de1d5d90b8982f",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_94.part.js": "210779f208025bf4d28eb580de6a2fc0",
"main.dart.js_231.part.js": "61efc87621cc805b8f87b2c7a2d4076a",
"main.dart.js_300.part.js": "f3832a629d276353954e6b33fd1643ba",
"main.dart.js_68.part.js": "1a330b306bdc2a909cf6a7580ee1de05",
"main.dart.js_269.part.js": "0807ccdaba8a3eddbd76fdfa2c24cd67",
"main.dart.js_298.part.js": "8916c982591692c63da3220d49138a79",
"main.dart.js_43.part.js": "e4cd3317f5939516e7aa40ca70bf2c66",
"main.dart.js_59.part.js": "b3de185d99d9ed6f7b1c99291cde0595",
"main.dart.js_28.part.js": "0586fdf78e0a40d1a52bdba63db8f765",
"main.dart.js_303.part.js": "15e38a292e41f907277db1604e92aabe",
"main.dart.js_270.part.js": "d3abfb4af22579b26985e0e91a5744db",
"main.dart.js_286.part.js": "66cc47efb8cb022aab2cc7a82799364c",
"main.dart.js_166.part.js": "bc56db94ca81a4f1be4fbdb4ed0ba34c",
"main.dart.js_35.part.js": "0b29e8f016b0c56ff7be86a7283eeff2",
"main.dart.js_118.part.js": "2c9582bcddeec794bc0f40d9a8078647",
"main.dart.js_75.part.js": "fd33d7e6c02aab7ac5ebc2d8cda3abba",
"main.dart.js_11.part.js": "2f2e0e5895f505d53c4ff7f0367b4142",
"main.dart.js_123.part.js": "9ad92f931814680500ee7f5f98c26d90",
"main.dart.js_37.part.js": "5fc98ab7679b5d68d23571be7b67e5f0",
"main.dart.js_235.part.js": "52d04fb727df17626845697baf7ed5c4",
"main.dart.js_240.part.js": "eed692351bf3a2489295a1ea2cdc57ba",
"main.dart.js_168.part.js": "25187ec1e266d5db9996a31664bb23f4",
"main.dart.js_112.part.js": "ce3533ed850a5b46a93e7278b509bfc9",
"main.dart.js_26.part.js": "fd49ec5c400402a4fa8a7c288b9b3869",
"main.dart.js_110.part.js": "571d0467fb94a92557f31578a3c6e3b2",
"main.dart.js_30.part.js": "ae6261fe93c32826cbf4be8a0887135e",
"main.dart.js_242.part.js": "9d76d91abc83ca64c1a5c1af9fdd3315",
"main.dart.js_283.part.js": "01d98ac9ae31060ffbb94461f701881e",
"main.dart.js_293.part.js": "d046587af54a1aca13bd0156d8c1b620",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_164.part.js": "c4d39135e026021d96d199a98e265523",
"main.dart.js_126.part.js": "311c5dc22e323a5ee13243e665fc3a01",
"main.dart.js_3.part.js": "351be0fdcb9ad400f7b3bf76c7474d30",
"main.dart.js_80.part.js": "aa6df882e6fddf047e94fb7a2375af91",
"main.dart.js_113.part.js": "e5be68232790841e95e4b1c679e9546b",
"main.dart.js_277.part.js": "dd01246a808a1ec2994ebb4135aa6677",
"main.dart.js_103.part.js": "6e4e9892d513b676f59412a564385f61",
"main.dart.js_241.part.js": "dbf5ea3a5d0ad94e8c43da6049424045",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_188.part.js": "68c7000dbdfb9957e6ac203d4d675286",
"main.dart.js_32.part.js": "8579b297920ff4c6bc2ee4a96e9e1ff5",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_4.part.js": "dc237089c163425e92f52e81333d09ec",
"main.dart.js_53.part.js": "8e10d25c291005722bce837c0e0998e4",
"main.dart.js_234.part.js": "1c197d9f69d9a62c5517167c6cb0d46b",
"main.dart.js_223.part.js": "2fad36cfe4a51cd3f84093f34e3e5ac5",
"main.dart.js_213.part.js": "a039f99d24e3d4c9893c69c4e59879d7",
"main.dart.js_15.part.js": "7f5877ca3ca08773a51e81709e628128",
"main.dart.js_105.part.js": "a63bc175969ba1105e67db8292e8f06c",
"main.dart.js_107.part.js": "46ad814cc94f8e2082c477c0707ac606",
"main.dart.js_248.part.js": "bfefbf024cdcca6deae2a4f12a3ecb6c",
"main.dart.js_45.part.js": "d6f270bf3c73f1a72552f52d2171f83e",
"main.dart.js_160.part.js": "364bb0e3121af1f4d9ac41871c24420b",
"main.dart.js_289.part.js": "30c531760f42c0f0b74f0cec43210974",
"main.dart.js_96.part.js": "1eca13f1de732a6720a1c5313fd1b226",
"main.dart.js_147.part.js": "e88d4ee72962b4fea999e628a42a6303",
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
"assets/fonts/MaterialIcons-Regular.otf": "6b8a832ddb851f9334d032247aada779",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "c2c3240911918fdebf133583427dbd52",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/uk.json": "1794b65021c354763a0a830b83ee3fb1",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/cs.json": "9bb68fded4235c2067d33359c46b3284",
"assets/NOTICES": "4bd2930db146c4653bc584bd9d65b728",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js_175.part.js": "5d5028729f7c001c8676e568bfc2adcd",
"main.dart.js_145.part.js": "e1602a0c5be1b2da01c41149a7a1df24",
"main.dart.js_210.part.js": "e8328dfb4c42868b8d7d5fc85cdfd3ab",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_84.part.js": "e86f7dfe0cac441356a37b6c716f7174",
"main.dart.js_82.part.js": "0fa8f17105df470613c3feb4251a4033",
"main.dart.js_31.part.js": "2f71c2256bab1bca8c5908d01824c345",
"main.dart.js_115.part.js": "fdc159059b0ab5daf1f306653430caf6",
"main.dart.js_189.part.js": "0e860e30debc8858f2f6d2d4f2316e3b",
"main.dart.js_204.part.js": "ab12b8e8d295eac61979368e9e027e7b",
"main.dart.js_79.part.js": "8ac9acf2bff723f6edc374e2d4b7a7dd",
"main.dart.js_268.part.js": "07cdc315ec3ddb5b8ef98c7bbb874fd5",
"main.dart.js_301.part.js": "f7145367c698e964e1432277f919ceaf",
"main.dart.js_297.part.js": "091cd1cea0d3f447464c3a14c25be39e",
"main.dart.js_192.part.js": "07db424f9745eb2a38958fa6a9241aa4",
"main.dart.js_215.part.js": "2f529c900e06f237e72cb145cb6927d8",
"main.dart.js_195.part.js": "8eb4b990d89709a75bb4679c28cbcb78",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_304.part.js": "790f02c3cc608146ac139ba4c514e1b5",
"main.dart.js_226.part.js": "c8d702f2243fa7803ebb538330cd47d1",
"main.dart.js_208.part.js": "e9f06354a4223380c4218f669ac487a5",
"main.dart.js_54.part.js": "826822d4ef114080503100b69b8e59b7",
"main.dart.js_106.part.js": "4b26f702a799bb48f9133222d2e8a780",
"main.dart.js_152.part.js": "c29b93c7b66846762831b7890614ad64",
"main.dart.js_272.part.js": "6134a410f3a4b89822232b3db0c4e42c",
"main.dart.js_302.part.js": "8ce292d215f7f21f4856e2e265ca3e36",
"main.dart.js_181.part.js": "4ec7e4d9ed88710ad200a57f13d3942e",
"main.dart.js_51.part.js": "8825f703fafa5d033951f582afb064cd",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_237.part.js": "9c01955c9cc0d73a6258fd4f4d3feaff",
"main.dart.js_173.part.js": "cc62a873105c120d687f68cb33ee5ed6",
"main.dart.js_170.part.js": "645df4a655a9f947cd956616653204c6",
"main.dart.js_282.part.js": "081b263a8f9d0602e27c28c8d397acb4",
"main.dart.js_34.part.js": "882ec09a9f35181b2b717194acebf09f",
"main.dart.js_24.part.js": "3e914af10c0fcefaf008769322062d56",
"main.dart.js_128.part.js": "438c9f45ec4f5fc94a235b3a00289cad",
"main.dart.js_18.part.js": "9cfd68f0aef19a738de75716e0838bac",
"main.dart.js_2.part.js": "f947540c82cea30e881eb35b91ca8398",
"main.dart.js_69.part.js": "4f62f9992eba77cb616c19b069086b59",
"main.dart.js_70.part.js": "8b849b2791afc413dc8a321fc711a083",
"main.dart.js_229.part.js": "16af6fca3734ab1dcacc2244a00d8a20",
"main.dart.js_27.part.js": "80408cb4aaed2dda6d59df63ef9697ed",
"main.dart.js_238.part.js": "a06a5d3e11351f597a33d7de0d4d91e3",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "9bd559b78605460c551e0d150c720240",
"main.dart.js_253.part.js": "3e69cd7023619d1ff6e90de31fb83a63",
"main.dart.js_244.part.js": "b532b7df04e60c70406f7ebe89ed4405",
"main.dart.js_137.part.js": "bda8145b46eb36d8728496c9eb061f46",
"main.dart.js_99.part.js": "ecff8b86c3c12d3d1b76248e28ef10d7",
"main.dart.js_66.part.js": "bde635c9d99e36e0e30ccde30f71a7f8",
"main.dart.js_10.part.js": "ddec1709bc4afbb47e17dc46313a1628",
"main.dart.js_56.part.js": "0e3b71e0599c8d558d9bdd56ab5aff70",
"main.dart.js_183.part.js": "9fdddd7eaa25bc4c43cfc14b0e107578",
"main.dart.js_129.part.js": "c2943144c1cc04dce69edc6a989ef442",
"main.dart.js_5.part.js": "9394a1290f41d9ec04a1087d28660637",
"main.dart.js_76.part.js": "9cf57e7219418ff2c4cc467dcb3a1f3b",
"main.dart.js_265.part.js": "a18703e7dccf9055193aba6970d4d633",
"main.dart.js_7.part.js": "cbaa0c23f70aa64ebb74855e1c906580",
"main.dart.js_16.part.js": "781805a267fa08c817e7d92e56fd71f5",
"main.dart.js_236.part.js": "4f86381b31c6283c978f20174f5f7e60",
"main.dart.js_133.part.js": "8f5f03d0efeb02935ff3286d203587ec",
"main.dart.js_259.part.js": "b5af32c6f56570fa99eb83a227eb44ba",
"main.dart.js_90.part.js": "6907f34e0c83b2b255a8b2298c85ce68",
"main.dart.js_260.part.js": "4b3237b9e17a4e0e0421cb0f281bdc90",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_157.part.js": "cbf27d7249ded02f22544668fc119521",
"version.json": "35984f07eeeb48590008f033c2222820",
"main.dart.js_153.part.js": "ead36d781722fec78fe40ba4e865deaa",
"flutter_bootstrap.js": "8dd07744ebc567c5ad5001eb68d7629d",
"main.dart.js_176.part.js": "94bf35f6d873b09642277cbc29c7b049",
"main.dart.js_245.part.js": "ac502efb06fc96ca5ee0ddcb7b2b6c33",
"main.dart.js_306.part.js": "9480e21e48b10bcef08cc8c73b2e6cf6",
"main.dart.js_209.part.js": "02f034c1cdf3602313c88fad931a218f",
"main.dart.js_33.part.js": "b51bb43debfb0d43d44b46df37fc2c2b",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_9.part.js": "c4d522190037eb2b0cdc69da1911389f",
"main.dart.js_155.part.js": "6e20915d50bf000bc25836c91cb6213d",
"main.dart.js_239.part.js": "8cb45deaa3ebcd0e2498c9e2ffd6535c",
"main.dart.js_284.part.js": "f07b97037ba137a332b204f961d51f4c",
"main.dart.js_214.part.js": "79ed59018b88ea7a73c656402d76ec07",
"main.dart.js_42.part.js": "e9714101a4b5bbd882dc99f188f087f5",
"main.dart.js_291.part.js": "1f59cc543a0e0cedf5eac1d39ae9a786",
"main.dart.js_228.part.js": "34d410273854274fa7edaaed018ae646",
"main.dart.js_98.part.js": "6f9d3b00a4e7b5e01839c6920a561838",
"main.dart.js_258.part.js": "81de677e8e941ec7e3699d8666195ef2",
"main.dart.js_163.part.js": "6e4a7e230a83f7d9e6559d539c703703",
"main.dart.js_287.part.js": "2de2a5f82d5467f29f87dd1cb48e0f56",
"main.dart.js_161.part.js": "e6083e9e82cb326c7abbb536a108bf93",
"main.dart.js_49.part.js": "d1596c8a6c094e6409eada332520cae7",
"main.dart.js_22.part.js": "2c572585f712e9b55c25cd57c4d95a42",
"main.dart.js_308.part.js": "404123a1d6126b8839a5c602af0e4758",
"main.dart.js_131.part.js": "1a8d982f592c9bb5f15f4a80e2014d42",
"main.dart.js_12.part.js": "9f131ea813817db6b5ab9b025a3f79af",
"main.dart.js_62.part.js": "1d02dee25cbf375587b439e1606aca20",
"main.dart.js_91.part.js": "b7498b27acb2a18177746aa5c30d65fc",
"main.dart.js_232.part.js": "ce93ca17a94a37dc91d3c21a470f318d",
"main.dart.js_104.part.js": "2177132a9e3250c6a9599cdf2918e8d7",
"main.dart.js_71.part.js": "a9f58293ea618242cc4d2fa0489d60dc",
"main.dart.js_296.part.js": "9a74dd770d6173f45e0c36b7c3373863",
"main.dart.js_278.part.js": "22a516588887ab645cfb876b7b28a59c",
"main.dart.js_109.part.js": "ffb724cd8c3253aa990263d64a671af4",
"main.dart.js_143.part.js": "c82cfaece77eb8c2b0c4a7d8ea001730",
"main.dart.js_222.part.js": "c4a2ada0b39950678a1b40e247aac9ef",
"main.dart.js_67.part.js": "392a15dea5e5669c0f107aabafce27b9",
"main.dart.js_117.part.js": "ecaab244d91ba4992b5f7b79cf7328b9",
"main.dart.js_292.part.js": "3b4e29478bbc576dd5b7ab47dcfb5cd7",
"main.dart.js_108.part.js": "32fad07b699bdf00b958bb70942236e6",
"main.dart.js_295.part.js": "6b7872badfb269483143fa435ab96c82",
"main.dart.js_221.part.js": "6bc017cadcabaadbd655d03c57b580f5",
"main.dart.js_47.part.js": "a946b93fd548dd5473c4c05ebac89c0b",
"main.dart.js_142.part.js": "5b3f72202426c1c5e7b84491406679a1",
"main.dart.js_288.part.js": "31348e4c2b3188c9766d793d3b5a1a03",
"main.dart.js_55.part.js": "970f341541b1e0936814c6398229a95f",
"main.dart.js": "84bc4c6a023ef30cfbe582d193a01122",
"main.dart.js_227.part.js": "098a826684ea3f3c056edf13c205b5ca",
"main.dart.js_280.part.js": "8b10132b88a58b9f492cab56af5e1256",
"main.dart.js_202.part.js": "67b59abb16713f6ad1c5bf3ba87070cd",
"main.dart.js_266.part.js": "2853042be05dc0c1f0cce7711cce902a",
"main.dart.js_261.part.js": "773877222d4d9d49597fc311ed30ef75",
"main.dart.js_130.part.js": "2829f5c42209639848af6cb8c43c9f0a",
"main.dart.js_41.part.js": "50f2dfd178ed2dfb8077df6cee787115",
"main.dart.js_29.part.js": "5c8b6339d5cfc2b9e4aa3d30f9876506",
"main.dart.js_254.part.js": "84193ab7cbaa6bf6d8a6e13cd63d7bc1",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_271.part.js": "ee7ac49d1744f81534d5803159cc4834",
"main.dart.js_151.part.js": "d8ce2fefb86c80cb6693eed46275338f",
"main.dart.js_74.part.js": "25985ade5b27a7a5497e82aba9be5451",
"main.dart.js_165.part.js": "809ddc33bc7f4d71c4ab196983cf4920",
"main.dart.js_263.part.js": "3b3eeb07058af5f098a5e3603d037542",
"main.dart.js_100.part.js": "305d20d96cafdaf58c20318217a68148",
"main.dart.js_184.part.js": "6738269c295a7c867fae38de830d8cb7",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_281.part.js": "1c72c955aabe8a5e46ff9312f1243ab0",
"main.dart.js_185.part.js": "4cdfbe637d06a44c81dd4197a49e1821",
"main.dart.js_196.part.js": "8b7324be14a502efb99e472f286b3d73",
"main.dart.js_250.part.js": "f9f50d6b8435ddbb1817297b63bffbb7",
"main.dart.js_83.part.js": "f5c9cea21f2f5f4d3fa3e057eb7befe4",
"main.dart.js_119.part.js": "2d3747cf03cdc9e87d25b9f77e378a8b",
"main.dart.js_225.part.js": "dfc1d26ea43a4c409258ba703308cddc",
"main.dart.js_211.part.js": "709d76543d468e44ec9ea56c5d9487b9",
"main.dart.js_171.part.js": "51fa8b74610708871bf000f20337f46b",
"main.dart.js_162.part.js": "961860b6432da354038867c22fd82bd7",
"main.dart.js_77.part.js": "8371d42e73ce381347ef39d47e521450"};
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
