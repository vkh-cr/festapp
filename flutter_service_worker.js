'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "b8e53d2cd26dbd3a84e89c2c0f59b24a",
"main.dart.js_162.part.js": "e42cbca548c01c7ad62156085df46db6",
"main.dart.js_117.part.js": "fc9f83409bb2aa7373e5d6b3b9bf9c1a",
"main.dart.js_182.part.js": "d6f2300e4bf9fe48b9de8bf05300dabc",
"main.dart.js_244.part.js": "bfc67bf923125e0720b5af2d05157df3",
"main.dart.js_289.part.js": "27b548858b437fe2eebe17cc062c0a04",
"main.dart.js_83.part.js": "1eeb569a0089de1c964b55aec523303b",
"main.dart.js_254.part.js": "7a6992d6e09000f7d3dc2b8354f78247",
"main.dart.js_96.part.js": "3cf0060fdda0e34e5684a81fa795f5f0",
"main.dart.js_87.part.js": "481257f30dea0ff5db6bd6d9c011af46",
"main.dart.js_285.part.js": "5ed35319f4334dfad30c537ddf2a899d",
"main.dart.js_251.part.js": "a910ee08c62ff112deeefc86165e261d",
"main.dart.js_126.part.js": "08e781dd3b5a133bb3ca638f57bf1bc6",
"main.dart.js_129.part.js": "d149bd35119ab9201dc6f07dbfa7816b",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"main.dart.js_218.part.js": "76220323f01de4da9a1d61182840699d",
"main.dart.js_142.part.js": "351da390b99f70f8232abb588fbc3d60",
"main.dart.js_40.part.js": "72b4ff1db3b13dde4e49e548912e2e7a",
"main.dart.js_48.part.js": "6520daead361c0c1c40321a4a809662c",
"main.dart.js_115.part.js": "02d5a371d765f405976a1dba9fe4f6e9",
"main.dart.js_10.part.js": "d05803b5f1057ed4ad39b59f1ca9d3d2",
"main.dart.js_84.part.js": "234debdba587d9d24b0a78eceaf00a0d",
"main.dart.js_230.part.js": "8054a3c51c06aecfa02f41381e2bb06e",
"main.dart.js_153.part.js": "5c7c969d481ee185c27a3fce31890453",
"main.dart.js_89.part.js": "c4497c27cb737e45922a1c2017b9bfa1",
"main.dart.js_71.part.js": "3eb30b89f2f4162ad3b1a97a0d7d9f51",
"main.dart.js_146.part.js": "ea9b89e65d9fa65642ddc15c2cf4cea0",
"main.dart.js_37.part.js": "be964fab361245113e4644bd15a3cc7a",
"main.dart.js_287.part.js": "77eccd8ea864164b249837981d6e6663",
"main.dart.js_283.part.js": "65a8005868fbe3a427f2ba6227f8acf5",
"main.dart.js_132.part.js": "e29f651edd3cc08f13447b0f0fff0446",
"main.dart.js_282.part.js": "494bc8075b002a42981d6824788bc9b7",
"main.dart.js_127.part.js": "0d09d59d25552e81945b731d2bba368c",
"main.dart.js_161.part.js": "aabcc6d59f0a9d2885a3496a6af31b15",
"main.dart.js_175.part.js": "77a42bee38d21b1c71e3abf11ba87899",
"main.dart.js_239.part.js": "430206fac6180094b738a2fd160fce1d",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "c86a6ca0073420a24ad5cc0755bd2d60",
"main.dart.js_216.part.js": "cd2ddf2e58450c7389613328ac52f8ee",
"main.dart.js_169.part.js": "b4567727c34f2a2458d76860612dea50",
"main.dart.js_13.part.js": "15978c08434d94105f97ba5a95503407",
"main.dart.js_246.part.js": "5b7f2824eacca4c243caefd14bc1ba73",
"main.dart.js_174.part.js": "54b2c75cd8ad275f6447bc30864f9330",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_266.part.js": "9cbb16c23ddef29ea6e89e45db8c6f4c",
"main.dart.js_144.part.js": "634cd6d1fdeb077aac47cc2d9c7951de",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_274.part.js": "36a8435bd0e32555e3f2867c8b582e47",
"main.dart.js_265.part.js": "aa74de5f6d1a3bb6a2171053d088e060",
"main.dart.js_31.part.js": "fc178d6438d79075160d86c3715a21a1",
"main.dart.js_294.part.js": "fa2607fad3836703739a5686d552c18a",
"main.dart.js_18.part.js": "34fd2004c346b633d5cc134c36e6b87d",
"main.dart.js_35.part.js": "33c5749e9408f13ee705805623758c9a",
"main.dart.js_200.part.js": "49dd983bae00a97855ba3cc5a18a7b13",
"main.dart.js_73.part.js": "ac2f3df836ab18da3caa79046b38acc9",
"main.dart.js_101.part.js": "4e6902e2d5535b0e6aa1a1349b58d94d",
"main.dart.js_77.part.js": "aa876688cca0a5df2805bfbeb318cb59",
"main.dart.js_149.part.js": "60e666c656e48becdc5a40273a1c62be",
"main.dart.js_67.part.js": "8623eb8ac08cb0577189cf292fc9b53a",
"main.dart.js_208.part.js": "568979af3d14319339cb4328f1a7d247",
"main.dart.js_82.part.js": "28bf19d45516072e8fc376642d7deb37",
"main.dart.js_173.part.js": "9c696c45bd8742c76dea3baea1fc3bb5",
"main.dart.js_291.part.js": "e1e6954fe7962918d7b489f6c959ce90",
"main.dart.js_106.part.js": "780cddfb8731cc49ca5aabef5f190798",
"main.dart.js_273.part.js": "9e5caba864388e47f260cd0948b29708",
"main.dart.js_62.part.js": "68841b527e87acf069e49f9e6f87a6b9",
"main.dart.js_259.part.js": "090a902ca6b8959c2005b2b5633ee01a",
"main.dart.js_278.part.js": "a4845d895fbc2fa2eb161794f66c0e92",
"main.dart.js": "5db306f0298d5623add9506ec11bd391",
"main.dart.js_222.part.js": "d29a945ac8f412ab38ef80b501e46d86",
"main.dart.js_148.part.js": "5a9ccc48829ba570e6b33b77814fa9cf",
"main.dart.js_293.part.js": "693a4ce689d1620dc60f7a546fcf5426",
"main.dart.js_50.part.js": "02ccb6a77a6929792c879d7be3bada33",
"main.dart.js_97.part.js": "ac810e3126b3ddcfd1e2c552f27f1d3f",
"main.dart.js_91.part.js": "5c333835cf353573497df6f44312eba2",
"main.dart.js_145.part.js": "cdad65ac3c8d93d3c262b472d3e95aa3",
"main.dart.js_57.part.js": "e569273c9f4782a39b4b04a40741312d",
"main.dart.js_190.part.js": "f6b1cf2feb62dc05b47deea3e47df6c2",
"main.dart.js_104.part.js": "07076c2b0a4a6e7575ca184ffa8c73bc",
"main.dart.js_201.part.js": "5f247be58e9437975315eefd818b53f3",
"main.dart.js_196.part.js": "fd131c20f501025ce4871e9d6f3bdb44",
"main.dart.js_181.part.js": "a9ce784d3712f3daf71e92bdb2947d5b",
"main.dart.js_270.part.js": "8dd529fe8aec1d9f3e3a3250810c5768",
"main.dart.js_108.part.js": "33f09146f0451cf4d38d26b9238bf7ba",
"main.dart.js_158.part.js": "fc90b2c8b0cb9d27f979ae9359da864e",
"main.dart.js_33.part.js": "6b576915307ff1e08043d4fe4e74bd9d",
"main.dart.js_275.part.js": "9303d0d1642e7df3b402f7a6c356ec3c",
"main.dart.js_269.part.js": "62fd74f8444b1f3c85ecea076934e7d0",
"main.dart.js_34.part.js": "cc97d083715ccd5276b26b7269f048cb",
"main.dart.js_210.part.js": "5f397484cc8533cad9e0306c3d5b8151",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "68702af89a78b69ea3e3c01a0a8e0f05",
"main.dart.js_88.part.js": "c0fa86253703fdba9a4e73e7e173a873",
"main.dart.js_202.part.js": "40b15701c3871ca4640241976fc8c7a3",
"main.dart.js_183.part.js": "012a3a52757fe78bbdf4bcae122d7973",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_296.part.js": "8b9c87e1719ed9e9b8d1454e61ea3870",
"main.dart.js_247.part.js": "e85104b04d1ff1cd9f8079f67a258f8a",
"main.dart.js_7.part.js": "8f3d97b8ef2b10c7ec985f880c07d2fc",
"main.dart.js_140.part.js": "c1f6e10b7d6c271a16724adbae038951",
"main.dart.js_228.part.js": "4d6e5ef0cec6107c9aaeca1b1336c7a4",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "2a3259bb7302732ac19d8998fcb7c571",
"main.dart.js_27.part.js": "c49ab638a923a5e0b1b38a5c6f26c5c2",
"main.dart.js_4.part.js": "68d6416b83e2adb4423b77405843a6cf",
"main.dart.js_298.part.js": "0f3579d2dff4c6122306aa54cc3d2809",
"main.dart.js_219.part.js": "334a3ce14a96a9676366b6533a264ca4",
"main.dart.js_116.part.js": "1d1cb3921e491e97f7230619f7834b96",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "79e42b373a4de6d075068941e713a5b1",
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
"assets/assets/translations/en.json": "1ccff8129532a24150d5279ba350364e",
"assets/assets/translations/cs.json": "dd7c080078ba42cf8c30941bfc8ff2de",
"assets/assets/translations/de.json": "d8339af262142bd3b7583326d693f3e6",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/NOTICES": "9c3b9cbaaf54fceb905b5fbd59c8688b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"main.dart.js_155.part.js": "c5163f346ace46a25ae00a582392f81b",
"main.dart.js_60.part.js": "59d6009299d8c50fb52bdeb31e52eb1d",
"main.dart.js_263.part.js": "8dad292b706a7e40b45df816774affd7",
"main.dart.js_220.part.js": "668b9809e5c34e042fa406d36cd602e9",
"main.dart.js_25.part.js": "25b0b2de456a9286e37524bacfc21545",
"main.dart.js_288.part.js": "e0710b463ff91272e012fb4f16ac594b",
"main.dart.js_141.part.js": "aa3dbd4827be38968bfb84c9a76e4b08",
"main.dart.js_241.part.js": "87078c19ef101f2b44acae130994cb12",
"main.dart.js_268.part.js": "bb32f148c0734bd83fb67217117af378",
"main.dart.js_8.part.js": "0749e2f71e6219ffcb28276809ac1067",
"main.dart.js_198.part.js": "de57e064b35bb57b4ea4381b35da9aca",
"main.dart.js_280.part.js": "07080cb860778a5f2aee83c13a96335a",
"main.dart.js_9.part.js": "5b08f6fa35e654b4bccb608a999cc60e",
"main.dart.js_99.part.js": "9a6f71079fa6de62fc290310cd40ac95",
"main.dart.js_22.part.js": "ea316496f9cab378a104650080826ddd",
"main.dart.js_272.part.js": "975d34328143381969a16df89ce03740",
"main.dart.js_242.part.js": "5529d42b126b00cfe6781f0381da668d",
"main.dart.js_86.part.js": "3fa36f80bb2000f11061c134aefe0b1e",
"main.dart.js_23.part.js": "6010f3206ea80f91f665f215e8b90a9d",
"index.html": "2ebc9b782ee4c0bc9226124b059b2ad6",
"/": "2ebc9b782ee4c0bc9226124b059b2ad6",
"main.dart.js_94.part.js": "65988d0c5718883f12168116a00013b2",
"main.dart.js_98.part.js": "b135bf8541f1de6eb5b9384d7c0d6210",
"main.dart.js_53.part.js": "e071719d57d23a58206ae202a3b22764",
"main.dart.js_235.part.js": "000f64f4da02abbffa1f2025b251cf19",
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
"main.dart.js_286.part.js": "7065fd19c30b9232aa9dbfa531556c62",
"main.dart.js_118.part.js": "b7ab038d57bd2bf73c883c4dfd8677cf",
"main.dart.js_262.part.js": "b82a7b871de50cba8bc9b245cad365a8",
"main.dart.js_26.part.js": "4a25587b6d2b5cf407d8767792df0da8",
"main.dart.js_240.part.js": "160271218141fee164987935c571ee41",
"main.dart.js_20.part.js": "34125bd82f5d8fec24a654d0713a72ab",
"main.dart.js_189.part.js": "e1eef5014aadc69cf8a39267a153632e",
"main.dart.js_214.part.js": "902baa37fbfa1d1ce0a4c6e5c184fd52",
"main.dart.js_51.part.js": "6972acfbc3e2850d0c424058c93b60e7",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "b7a34f9c5f3edfd519de2d03019ae114",
"main.dart.js_290.part.js": "644ce9d7f7ca6f6bd9f7a68599624479",
"main.dart.js_1.part.js": "e74a3972e4711ea41e51d03c0aa1718b",
"main.dart.js_160.part.js": "1921b577fa6234f81a6a1e00dda34d9e",
"main.dart.js_63.part.js": "f6fee73afc0a9eaeda6179dc67361d9d",
"main.dart.js_261.part.js": "0106e62f9f670d50835a6a19620c3f8f",
"main.dart.js_295.part.js": "b4febb79638be79d008c1ceb021f77b4",
"main.dart.js_12.part.js": "4286463a1f6031eff305922065345f2e",
"main.dart.js_281.part.js": "c85052740a8e0ceda61da15e5c0b9fb6",
"main.dart.js_137.part.js": "2e57708d3ae2f0960866d62c28b07d7b",
"main.dart.js_276.part.js": "350f360bc9ecefe9a5d699ed82410878",
"main.dart.js_28.part.js": "81fb090823b59e229f1d612b89e034f3",
"main.dart.js_135.part.js": "f9d579b67d4ca898ecdee4f599efcf4c",
"main.dart.js_138.part.js": "4ce635e29849f964c28ae537d1cc8ee7",
"main.dart.js_17.part.js": "9e1d087b397874b1488194057f87d767",
"main.dart.js_105.part.js": "c38b25c1a28cf64a01c6dcb34cda11ba",
"main.dart.js_206.part.js": "3df77ad5c1815f577ac83b58766f4671",
"main.dart.js_231.part.js": "1f3c610a5cac127d3859e30cd22c8895",
"main.dart.js_43.part.js": "ea8e6f4c2ada1a58a16f2068c80e16a1",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "c2d307f823b4849536373f63ca0339b4",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "35acbad12565c2971ba374ee1fb12d3e",
"main.dart.js_292.part.js": "ed5d343b45e2da2ed01e285f9cd37af7",
"main.dart.js_15.part.js": "667e3da5aaf3e314e98aee199cfb23ee",
"main.dart.js_151.part.js": "fceb074a2f45e04f563cbba14a790342",
"main.dart.js_19.part.js": "1e5985a3defbb37d7ddc95ab1e87a805",
"main.dart.js_284.part.js": "5b161c6850f07013407da4be2a477c23",
"main.dart.js_255.part.js": "2394386351d978f5a8e649ac3922d6a3",
"main.dart.js_163.part.js": "7f85978710b065c3dcdc25dd33d78081",
"main.dart.js_154.part.js": "aa5fcdf46dc6d845e7d2fae4b200d031",
"main.dart.js_16.part.js": "0240fbd7a1f3647db58128082ad81a15",
"main.dart.js_36.part.js": "241c51e1569b8509cf6b234858d36a6e",
"main.dart.js_300.part.js": "ed5cbc210ab58e753f001d138b4b27ea",
"main.dart.js_253.part.js": "bf80264f04a3363014dfc3fc264eef8d",
"main.dart.js_130.part.js": "8f4e520da5f60042971464c99a89374e",
"main.dart.js_152.part.js": "bb16c08f949e1955a6d08b4ca96419eb",
"main.dart.js_32.part.js": "bb3eaa80b52cbda21718d0b584240449",
"main.dart.js_56.part.js": "4fcf83558b42ca753ecc5e3b36b81698",
"main.dart.js_227.part.js": "bfd012676e46ea45b09f16a1d0cae450",
"main.dart.js_3.part.js": "4bf6a88fd5a16f6ea4a6471d24338650",
"main.dart.js_68.part.js": "50e846538c2fe0f6bde99349f80f6fd1",
"main.dart.js_248.part.js": "55ade99b34807fe6b131a18ba8598fa3",
"main.dart.js_133.part.js": "400de6c345bf0b174861c854c4fd2ed8",
"main.dart.js_204.part.js": "8b62d2a44ac8d8f93a9eca4b0a317f27",
"main.dart.js_24.part.js": "57bd52c02f3bd0f22aa0e68d28ee2a8f",
"main.dart.js_90.part.js": "b5b4b27396356cfc8c2608d980b56525",
"main.dart.js_111.part.js": "2ef8c0f66ee037854a792653618852d9",
"main.dart.js_177.part.js": "ac5355c08926db694264040380ffaa0a",
"main.dart.js_299.part.js": "d41da9237619d762873bd517b4bec1b3",
"main.dart.js_85.part.js": "0a0fbaf1d8e0791397e9d599f135d3d4",
"main.dart.js_243.part.js": "dc6f4d895d3dba69da61825a3edfc12b",
"main.dart.js_260.part.js": "5866706a13fe4c243fe26067443800bd",
"main.dart.js_39.part.js": "29be8b3148dbd916426a2dc9674379ce",
"main.dart.js_49.part.js": "92c5f4c98ec3f5a74b42481a7cf89096",
"main.dart.js_185.part.js": "5a50c993518e7d6a5d550dd9d1b91b4d",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_171.part.js": "8dd5cbf954831285904083eb91f6b184",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "70772259eba060f25a8de0fc9aa07c25",
"main.dart.js_121.part.js": "3719db877af85b50990eed71007dc170",
"main.dart.js_215.part.js": "c8f910e395377ee2b86fac4d248eaecf",
"main.dart.js_301.part.js": "3a601dd3a2799ef378a99c3b106a25fc",
"main.dart.js_112.part.js": "5cc9683d1d701eab888eefbdf877c944",
"main.dart.js_139.part.js": "34e5829003753f96e6a66cf8509cbca1",
"main.dart.js_143.part.js": "16afdfa2fd49c9697d37c22c82af467a",
"main.dart.js_80.part.js": "c10c9522225f58197a3ac450cc7bac03",
"main.dart.js_252.part.js": "0d2edfa27308bc55c8724d9d8400f439",
"main.dart.js_279.part.js": "edb6bc1c0173ddc26bcb134e30d621eb",
"main.dart.js_30.part.js": "e7439f9333c6a00c74c1cb429f56662c",
"main.dart.js_136.part.js": "e4e019a591529a5b90a92a47b023ca10",
"main.dart.js_168.part.js": "c7a75b68d9c3ba85393d6a8a79fcfdac",
"main.dart.js_271.part.js": "4112aa780e304174caaca0a58f9ee6ec",
"main.dart.js_159.part.js": "961914520b0995b6d8cda68b85e3bdfe",
"main.dart.js_59.part.js": "90550e463f935e1eeaee09b12cc9778a",
"main.dart.js_47.part.js": "f249732a5542e3c727981f416d357b12",
"main.dart.js_95.part.js": "3c7d60bc4a7048ae09eb7fafa2cbdb09",
"main.dart.js_107.part.js": "035f19d75941a45f4050d448f41084f8",
"main.dart.js_29.part.js": "1b18da568e7f3181cddb8bc33d9aed56",
"main.dart.js_194.part.js": "924f137cb7b5e4cf182a97b5dd460a95",
"main.dart.js_236.part.js": "b276eb73cc2b922d5508213b1731a915",
"main.dart.js_58.part.js": "795e245456760bd9fab300dbff7cbd1d",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_110.part.js": "1e6c123d023d5b82bc6a18c6d32ba4c4",
"main.dart.js_54.part.js": "a0442adca1fe25a54dbb31fff84ed42f",
"main.dart.js_109.part.js": "08bdcc48e46ede97b8fb736c425690c3",
"main.dart.js_92.part.js": "9d108880247df2ddec79f6e10310d7aa",
"main.dart.js_224.part.js": "ebd3434d7057bba5c4cecd8311c3a974",
"main.dart.js_93.part.js": "6a273f2eed5b1ecb96ba907054ce5f20",
"main.dart.js_223.part.js": "59ef1b95f752ee61375daf561f01a787",
"main.dart.js_11.part.js": "a128ef94ec977cfa523f8b759731f2cf",
"main.dart.js_125.part.js": "992ed818568ffc59fbee46fde4c5a3ad",
"main.dart.js_131.part.js": "93f41df35178ef1eceb1ec00bfcb8810",
"main.dart.js_226.part.js": "98ceeac792f243abe56f46dcc526dcde",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_180.part.js": "8d7462e2c1cab75e25c93d77b6262e5d",
"main.dart.js_178.part.js": "8e031c9561acae4eef032b40fe5e126d",
"main.dart.js_100.part.js": "f6eeadfa3cedc454e9002a252c9b2acc",
"main.dart.js_258.part.js": "d921c97e51299fb30f4f3154b68522e7",
"main.dart.js_297.part.js": "5d0559a1efc847c9c50fa5a449f2cc80",
"main.dart.js_70.part.js": "5be5749bce49a3c24a01e8e45d7edab4",
"main.dart.js_187.part.js": "495afd1264572a9c4aa8a5f3d73202c4",
"version.json": "1ef3f7ea073b19b518ea752aa8507607",
"flutter_bootstrap.js": "12541ed6c6cbe4fa04e4e4ae3d95749e",
"main.dart.js_191.part.js": "73b0101861a16e9918d134952dd9100e"};
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
