'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_102.part.js": "a7e46f2bd483f5b29cb63bb5c4155e3a",
"main.dart.js_117.part.js": "f91d86e23c8e4347d54b84a4e5fdf1ff",
"main.dart.js_182.part.js": "9ba949057423a4ef36fb35833fda8dc3",
"main.dart.js_75.part.js": "af817bf66b58a21e907099f3cadcbdae",
"main.dart.js_83.part.js": "c18db96ddf05c3af5631e354068c7225",
"main.dart.js_254.part.js": "f505586f40193fae4cb91d5cb59062b8",
"main.dart.js_176.part.js": "2bf8201cd59f324d5ca827f3f3402269",
"main.dart.js_96.part.js": "78909c9a6c7a87ab2019e18a394f066d",
"main.dart.js_245.part.js": "9bb5f20dd0f018af14e642caa664aa22",
"main.dart.js_87.part.js": "eb26ddaf6b93a8020802d752f6929ca5",
"main.dart.js_251.part.js": "866d827eddcd0092454787b753e1335e",
"main.dart.js_126.part.js": "7f00c2cf3c1450dd61990948abf44418",
"main.dart.js_129.part.js": "1517dce20609034eddb07f6d2a1e1aab",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_166.part.js": "797a60d87a2bf367be078eb9f1a1e44b",
"main.dart.js_218.part.js": "4d0f92ff97aead9e533843351929353e",
"main.dart.js_172.part.js": "4fe7828966f442b52954a6a3f1b43ca5",
"main.dart.js_40.part.js": "cac36c9269a96bb1ef7dda5b1e67e822",
"main.dart.js_115.part.js": "dc6e376aa13f3a9e5b5764a747caf79a",
"main.dart.js_10.part.js": "c97664bea63a309da95eacf815b7789d",
"main.dart.js_84.part.js": "70dd843869ccc77a38eb7242dce270c7",
"main.dart.js_122.part.js": "2e6a86dd733d0f3b1c401865c595aa30",
"main.dart.js_213.part.js": "e8f4f57b56b12ae9edcf5bbf1cfc1c3a",
"main.dart.js_41.part.js": "51e22b05a0c35d020ad9ec3051fb213e",
"main.dart.js_89.part.js": "ef659896df44ec6fe30f925ff50e0c85",
"main.dart.js_71.part.js": "5180ae00a85cd240fd02b8c65f42118c",
"main.dart.js_146.part.js": "24988a49327b88294d56a1caf6c164f6",
"main.dart.js_37.part.js": "d0da87cabc3d12d7f2bbaa045b2ffa50",
"main.dart.js_132.part.js": "ea063ecdb718db5b7e42c1f892d56e51",
"main.dart.js_165.part.js": "b68986acb049251841cb4c35721a49e5",
"main.dart.js_127.part.js": "3f6213e9683dd557a893d0ab3e05a3ab",
"main.dart.js_175.part.js": "96335c92459f75ba8d8a00fd67ec195c",
"main.dart.js_239.part.js": "fda8e859be83a66cbe9c75b487ceeed0",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_164.part.js": "30bea1076f6961d281d3098f6cc9363e",
"main.dart.js_216.part.js": "ddd192495cf7bf861614afd0c1619dcb",
"main.dart.js_64.part.js": "900022088911e114cfd7e422b307e45e",
"main.dart.js_169.part.js": "b790fe6a235ef1fefaf89d6f19d13577",
"main.dart.js_13.part.js": "fa955a15b5491caf9ba804173585d554",
"main.dart.js_246.part.js": "5db38070055972017e6b78045405e975",
"main.dart.js_174.part.js": "fe085dbe250c55c7d9a4d7d3497253f4",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_144.part.js": "1bb67d1584764813d5c2983cb77a67a2",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_31.part.js": "7ba9f65b4300cab4bcb56f01536196c8",
"main.dart.js_119.part.js": "a8c0b827731e18bc54f891995b63fb52",
"main.dart.js_18.part.js": "a8b12c1806ec873f089157be2434aa5f",
"main.dart.js_35.part.js": "9f6ae12f71960769013c205d34c81ac5",
"main.dart.js_101.part.js": "71d84af5f58567f8f7f173435192501f",
"main.dart.js_77.part.js": "796a70ee1e16bfb3594558aee37f393b",
"main.dart.js_149.part.js": "75f485cd8de3375bd590a0437836750e",
"main.dart.js_82.part.js": "4897f835d0e961c192e024d117e8fcd4",
"main.dart.js_173.part.js": "ad95ab48038efa746949c755ff79db60",
"main.dart.js_106.part.js": "39dbcf2cb867b6d86de1852516232a4b",
"main.dart.js_62.part.js": "a17df3964f3fa3d459d470ccd7fefb59",
"main.dart.js_259.part.js": "68d96d830db5f45c519546648f07020b",
"main.dart.js": "abe688b75e3966365584823d18088b00",
"main.dart.js_222.part.js": "cc0b36a6bc6cb4a1f563c94790245b1b",
"main.dart.js_232.part.js": "5bb399c936765208e3defae44c613e06",
"main.dart.js_148.part.js": "a3d358a2f5fda716955c72a5623421e4",
"main.dart.js_124.part.js": "b70323613e197620ccfb70ea6378aa40",
"main.dart.js_50.part.js": "8b0209ca06096584f92fd0ca8df19614",
"main.dart.js_97.part.js": "c7d2abcf3eab855d1c70d62886e97c85",
"main.dart.js_192.part.js": "4aab9657ac936d76066d1b70b16904e5",
"main.dart.js_145.part.js": "9c4eefe40618596d378181f8b2d9d792",
"main.dart.js_229.part.js": "6d45e58d94150bcafdc2fce98f488710",
"main.dart.js_201.part.js": "545210dd2ff7a3f0f912b1eaa77e0a38",
"main.dart.js_69.part.js": "d3e6e8d0b4544b00ae9feed9660b0dda",
"main.dart.js_196.part.js": "9e4ac592212e61f4ea7b2e87dd9b4d7e",
"main.dart.js_181.part.js": "42ac2cf21e57eaac04bab203e5b9e6c2",
"main.dart.js_108.part.js": "299fddf5e7fdae112c54b952aff52941",
"main.dart.js_158.part.js": "7df2cd491cb6c66023b1202febb8b317",
"main.dart.js_33.part.js": "dca784600e03a5c5124f762da27b287b",
"main.dart.js_217.part.js": "6f67809de49ed80fa7dd344e0e1c368a",
"main.dart.js_34.part.js": "bcdafa520118c7ed01ba8f3826631f87",
"main.dart.js_210.part.js": "a6fbcc5729902131ca282755d8ace279",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_179.part.js": "5b9fec8b66789181bd4b53f35b8eb54c",
"main.dart.js_88.part.js": "3fac7a78b11a52fb6686835b61d04971",
"main.dart.js_202.part.js": "e9ca28467b07d160cdc7f3fd99348db6",
"main.dart.js_183.part.js": "03e07ed19231dd379c3a91d05fd7359a",
"main.dart.js_167.part.js": "2dcf13e1762d3e89d15dd1970c92dd0b",
"main.dart.js_203.part.js": "aa02670728008011e2b56af945de2545",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_65.part.js": "2ddc13a53d11221207ccfa273049beca",
"main.dart.js_247.part.js": "b98ebbfe141de7b18bfc860b09fd30f1",
"main.dart.js_7.part.js": "dc37a0b3d31556393538cc5de3e9f52a",
"main.dart.js_140.part.js": "04aacd13b75c2647e3e6aa055521f637",
"main.dart.js_228.part.js": "5f911427d25ecd794b0622a4b3b29b95",
"main.dart.js_170.part.js": "f8950cda5097560f019d9f0365dc7656",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_184.part.js": "76e9b9d890464af2a04a943011ebab41",
"main.dart.js_27.part.js": "18b51b024f2d081134d1c0231e5d91bd",
"main.dart.js_156.part.js": "aeaa27a51834618b08b4e71c748283ee",
"main.dart.js_4.part.js": "3793f8a2aded3f9a203eac838ad33e4f",
"main.dart.js_116.part.js": "3f99a7b91b97b5730b2d21f7047baadc",
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
"main.dart.js_147.part.js": "c82826a9256ed5733cb73dbb5cd7d97f",
"main.dart.js_220.part.js": "0d03edabd0b0725bbd96e46a55f771e1",
"main.dart.js_25.part.js": "f3850b2fc316f0b605a4b75f1c9eaf06",
"main.dart.js_141.part.js": "212e6b3d5dc51a799eb0bb4eb8984d6b",
"main.dart.js_249.part.js": "1aa8e6e589f675af882822dcce5e5834",
"main.dart.js_123.part.js": "5d5a42b4e0e164b9213a279a859a4fd9",
"main.dart.js_241.part.js": "ce7d1ba2ec7bf4a131701ffb596cd555",
"main.dart.js_8.part.js": "ee428e562b7c445610fe0afd1ba7d13d",
"main.dart.js_198.part.js": "7cf0fcb35825f01791586897acbfcd74",
"main.dart.js_81.part.js": "1713235bd1e2daa54d26cf27cb31fc87",
"main.dart.js_205.part.js": "066937b42735f6fa44e149faa42b9e0e",
"main.dart.js_113.part.js": "5d0d0b572cb718444b05c70e9cbb3f37",
"main.dart.js_9.part.js": "ce34e5388be97b47648d66166688bdcf",
"main.dart.js_22.part.js": "45e9f553f73bae8eb626ef3006b0734c",
"main.dart.js_242.part.js": "1e60bb1bea79c2714a2ad0e53d314a25",
"main.dart.js_86.part.js": "698218551168b59c32976ff95646490d",
"index.html": "06470e8a94deb914729577919db2dc65",
"/": "06470e8a94deb914729577919db2dc65",
"main.dart.js_94.part.js": "7463ae1f56331233e10309d4abfd54b6",
"main.dart.js_98.part.js": "14f86ba8c5cde10ba94981bce979b978",
"main.dart.js_53.part.js": "9ef4ba4937c18d59065f9db201e0111f",
"main.dart.js_74.part.js": "b68bb7616d96a222a56dcab898df332a",
"main.dart.js_235.part.js": "cce0b8afdf01a61351aa8f403a9a3cfe",
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
"main.dart.js_118.part.js": "134e5ca23fba57638171c1f3d3062bb4",
"main.dart.js_262.part.js": "009e423eabe07771e878c77ffbed1c9e",
"main.dart.js_26.part.js": "80ae1eb49ed9bf761afe0bb0a0d27902",
"main.dart.js_20.part.js": "06cd6df767ff8dfe926ffa9d8e8c4df3",
"main.dart.js_214.part.js": "7ed86d175873d47c512d5ce4cc56da29",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_128.part.js": "6d791588ec6438c6e9389bbf6da1afdf",
"main.dart.js_1.part.js": "29f015495d0889e1f0bcde049eab43b0",
"main.dart.js_120.part.js": "f29a24343c889afb5546876ee707dd4a",
"main.dart.js_63.part.js": "7f952532960d92208b2fbcc347e358d8",
"main.dart.js_211.part.js": "bb4924cca46fd2c19676a6012ad68c8c",
"main.dart.js_12.part.js": "8ad89bdb2f48b669e2ee339b9179cbe0",
"main.dart.js_157.part.js": "71d751d60d688a71930b0cd88d0ed90e",
"main.dart.js_137.part.js": "df0cc85109bb7853eb98eda449015626",
"main.dart.js_28.part.js": "2c877918a794cdb131a2eec7d0ad5725",
"main.dart.js_135.part.js": "effc4d7dc08caaac278ec5a0b9d431df",
"main.dart.js_237.part.js": "dc86447b3c9f049c71c7ec02e08b28b4",
"main.dart.js_138.part.js": "d4ca766fddb977e0d4ae03c8bc5861f3",
"main.dart.js_193.part.js": "b28cd61677a922573437c76ee9c2ea87",
"main.dart.js_17.part.js": "4fc3061ddcae31c141e076743ecfe70c",
"main.dart.js_105.part.js": "043620b0ba87e93d286b16c980475186",
"main.dart.js_206.part.js": "916ba7a66d5153df282e9303c790bb40",
"main.dart.js_231.part.js": "37c997894431cd2de279c5edb76643f8",
"main.dart.js_43.part.js": "ddb0c870f4adf7ab6d8bf09e76b29f68",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_234.part.js": "2777003fadbd5bfc2dd39ed1920ff1db",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_2.part.js": "2820f8b4ecaabfaa1a4f85496e83b70b",
"main.dart.js_15.part.js": "fd55fecce4343fe04209d12cdd2b944d",
"main.dart.js_151.part.js": "88f0e18ae7d6806a22251374ee5e4be5",
"main.dart.js_19.part.js": "01568972fecb18f3f68834f570f7a02a",
"main.dart.js_255.part.js": "da706ebb1189573ce0678eac9bdffeb9",
"main.dart.js_186.part.js": "c787d09eb87bc2e0a1f2a4827f9bb6c1",
"main.dart.js_163.part.js": "08e1cf647d0945622194fa3e6170903e",
"main.dart.js_257.part.js": "25e3cdb289f38b82ddb4ec28647d77cc",
"main.dart.js_16.part.js": "88f4b2e3afe362f417f7cfae4b2518e8",
"main.dart.js_250.part.js": "195b6ac49038915af881125c21cdc034",
"main.dart.js_52.part.js": "6d31abd0484ea98ffc758f8a023fd790",
"main.dart.js_199.part.js": "671864b40066c3a3a03eeb574c68d402",
"main.dart.js_253.part.js": "52e68708b755b53d8b8d96198612b062",
"main.dart.js_130.part.js": "bce3635b3b0d2bb093c1ec4e8c119501",
"main.dart.js_238.part.js": "acc090e7e41f5153bf1a77b3e9a1eb4e",
"main.dart.js_32.part.js": "9e1eee05a48f85f8c65145be64cd0dff",
"main.dart.js_56.part.js": "0d05986e64d9594caf334b8d8d25c95d",
"main.dart.js_3.part.js": "b24c151ce54a2b738ecc14b8cb16e89f",
"main.dart.js_68.part.js": "018ab0957f64b5707a8cec59b3971887",
"main.dart.js_38.part.js": "ee0de492399d8d214b7b1caf3999ba9f",
"main.dart.js_225.part.js": "e3470c2a43e2ebc2bea70bf444aa6ac0",
"main.dart.js_248.part.js": "0cc5ccc6c4e4fb624d2a1c68fbb8677c",
"main.dart.js_133.part.js": "c718e24b0640d898c1f3b72a7a02e1c4",
"main.dart.js_21.part.js": "6401fa86ba9e736e8ca688e3ce03863a",
"main.dart.js_188.part.js": "162902d0cacdaf9a0e6e8635b7af380b",
"main.dart.js_204.part.js": "9de861564a90ec1ce72ea24402d3380d",
"main.dart.js_24.part.js": "cc844579ff8dd6f3d3085dde38e8711a",
"main.dart.js_90.part.js": "ef3dd35a0696730f9a0014fbbc22c679",
"main.dart.js_111.part.js": "a06589cecea0a68b2134103e04795b58",
"main.dart.js_177.part.js": "60d42eb92a6576488c6a11569bb66a5d",
"main.dart.js_85.part.js": "9044770c125e37fb2f47359264a454ea",
"main.dart.js_212.part.js": "fc3d8134bc7cc1d18238539f4780413a",
"main.dart.js_260.part.js": "03eed2d61bbeb0e46fb70aa92e38e7c5",
"main.dart.js_114.part.js": "6f5dc88c3a49fd45ce5777469db42b79",
"main.dart.js_39.part.js": "8c59108b61b3970230a1d16d84bbc67b",
"main.dart.js_185.part.js": "460710869ac93f641f0dc8ac60fb44ae",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_150.part.js": "968eb1912a87063f500e8118e8cb84dc",
"main.dart.js_171.part.js": "152ed59d7450156f32e4802ed8f8f968",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_134.part.js": "d7eee7f8a50696341481d975715ec545",
"main.dart.js_195.part.js": "06991f4f203ed24d8d496d76134faffd",
"main.dart.js_44.part.js": "3245ec86fb6c00f34eb2aa2e3f2bbf1f",
"main.dart.js_121.part.js": "4111023b2bc3149afc7b33dd6b9f7f19",
"main.dart.js_55.part.js": "26969fca0063c0bd9f10802952078e7b",
"main.dart.js_215.part.js": "6b35cda44e774f46e8b1fea823b12aeb",
"main.dart.js_112.part.js": "7a9960a42380053a6dcdb40d57bc291f",
"main.dart.js_80.part.js": "b4be3f9252538d34709e74d5a72c738a",
"main.dart.js_252.part.js": "4aa25f61619900ecd7ba30a01a04269d",
"main.dart.js_233.part.js": "8d7c6fd543a250549512962c4131880f",
"main.dart.js_30.part.js": "24b592cb10b56d7c1b641069ad5f8f49",
"main.dart.js_78.part.js": "afda415a858118162a4a243f3225da4f",
"main.dart.js_136.part.js": "2e2a3e588026f112733ce0d632b0fc61",
"main.dart.js_168.part.js": "6210bb9a707ed6245383bc88567a1834",
"main.dart.js_59.part.js": "135e129f0115fb285efe5a5f528337d4",
"main.dart.js_47.part.js": "285d2764a3d4aade6a7d71fcd04e68b4",
"main.dart.js_107.part.js": "84d1a1a1986853079b8107c6b2598708",
"main.dart.js_29.part.js": "21f2b9692c89fd2c77f84134dda7f7a6",
"main.dart.js_194.part.js": "a549f09761c12718fa36aca986eb5817",
"main.dart.js_236.part.js": "59848ef44531013a3cf736504b74da99",
"main.dart.js_58.part.js": "e3348c9b5290a4d59326f6e8c99fa26f",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_54.part.js": "13189aa5d12db8274c0e244a3d91f1af",
"main.dart.js_79.part.js": "e3a033cd4bf08b9639a597d4234295c2",
"main.dart.js_92.part.js": "1c791cdde01ee6e673d6f3f44710f200",
"main.dart.js_224.part.js": "7db16bf100c98a03d8c585bbb929a8f5",
"main.dart.js_93.part.js": "a8aa71053f6cc99f3d5898d348f5cefb",
"main.dart.js_223.part.js": "3c57d34609debca007b550bd60eba450",
"main.dart.js_11.part.js": "89acd61627bcdba37ba43767f21d9025",
"main.dart.js_125.part.js": "07042e3d4e2bce9154899a69b9b59466",
"main.dart.js_131.part.js": "56c17006b70a03a794a3a492f6529384",
"main.dart.js_226.part.js": "f1524aec61ccabd553b912d2e8061134",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_178.part.js": "ef70338c845ec7cd29e6af8ce62221d6",
"main.dart.js_258.part.js": "75885d32e5f17c4e676fa108afacea59",
"main.dart.js_187.part.js": "7f4e42f2ac574d957d0f1828ad2c372c",
"version.json": "9b00d791ef6e96c359dcd10ebf77827c",
"flutter_bootstrap.js": "c1a1a3496fa19c6ff96d892849549571",
"main.dart.js_191.part.js": "3bdafab34644f03888c1ab06fab87e5a"};
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
