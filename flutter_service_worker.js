'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_34.part.js": "ca3b168e5479b45f298c4ea19fa8e1e0",
"main.dart.js_228.part.js": "d01800d7532751e0f3da1cd3d617b7b1",
"main.dart.js_30.part.js": "b520747b104a3d54cc3514bdb4b21cbf",
"main.dart.js_90.part.js": "96adc9c30a289a60decaff762ad76ec8",
"main.dart.js_289.part.js": "85c905c1a896b9fdac016fb286924d68",
"main.dart.js_98.part.js": "c9b315f44d5bb01b4402eca10cfb3cce",
"main.dart.js_302.part.js": "e2fd94374ef8a5a7132eb8b65ae5be1d",
"main.dart.js_74.part.js": "81e8410a1b661dc51d9e7665e2a391bd",
"main.dart.js_66.part.js": "078cc9279e6d64fc9afa60cec9084d5e",
"main.dart.js_51.part.js": "846bb4050ae39a8ee6ac887e19287681",
"main.dart.js_22.part.js": "dadda3ffeeb98c125042079e8aa6e61a",
"main.dart.js_108.part.js": "736c09d9b23f93915dc102d57ac85895",
"main.dart.js_281.part.js": "961cadb1400d4775eb42e37e7237d739",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"main.dart.js_47.part.js": "b3b330c77ae448b300fd98a0a95e2245",
"main.dart.js_45.part.js": "9b6c7648e2a90cd7241fafb7cc0896db",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_104.part.js": "2bd54c9d42af6fbe747df89e40e1ecd6",
"main.dart.js_33.part.js": "ee9fffa354035af2e69c8de6b01d089d",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_160.part.js": "ab272d51a71ef3136e20a2946aec2e03",
"main.dart.js_143.part.js": "b33ad8fc00095a6254eef1577e96a079",
"main.dart.js_164.part.js": "7d816ff8ef683f5a84c7b264cc738442",
"main.dart.js_295.part.js": "d90266a69ba265910ae24e239356e5e1",
"main.dart.js_138.part.js": "3699c9ce2acff9c8f4af1498f73215d0",
"main.dart.js_192.part.js": "01cc24df30e88b7f8a1d0da0d4e3d325",
"main.dart.js_305.part.js": "6158351a675609e29a2b9778ffa0a342",
"main.dart.js_168.part.js": "8b8c7e9fd1ca1463c06b73861c7408ee",
"main.dart.js_182.part.js": "439fd542ff018f9ae332fd2819ed8a7b",
"main.dart.js_132.part.js": "590bc4d71b8c678ce7e766031746fbe2",
"main.dart.js_242.part.js": "5f63d3a301049233e301ba8a38a7c4a0",
"main.dart.js_82.part.js": "411b66db9da3c1c50e9e6858800d6157",
"main.dart.js_144.part.js": "0788b651c35f5a0b1d13d8ebf68dd6d0",
"main.dart.js_175.part.js": "e7e9ab03b76786158e796a892bb0c0e5",
"main.dart.js_287.part.js": "de41a95a1bd64856dca85d90e999415f",
"main.dart.js_162.part.js": "dd4684e251a6ec89343f50f6b2766f95",
"main.dart.js_278.part.js": "43119e5fb4041c1dc705fea53c3a15cb",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_130.part.js": "2558fa9c5ebdff380a27367b69dceecc",
"main.dart.js_53.part.js": "45d6cc3a40e1ee468763491d8f8f1ca8",
"main.dart.js_231.part.js": "0eb52c2a9521b33a657151f44170949b",
"main.dart.js_55.part.js": "ecd43f01ddce9c5b0001e55d0093399c",
"main.dart.js_32.part.js": "613b2d0a9ce33e587f3283b388ef2fc8",
"main.dart.js_163.part.js": "cc46222099d7e6ce876338f6a1896da9",
"main.dart.js_49.part.js": "2e80354f42efa0d180a85a72e9e5dfe6",
"main.dart.js_214.part.js": "2b0421064f7f9ada36da6047c54ef4c3",
"main.dart.js_129.part.js": "af1e4020159b17aea1058bbd0b67194f",
"main.dart.js_298.part.js": "2aa156a73f6ec05f681daa786e18106d",
"main.dart.js_159.part.js": "5cc07aa64f3a116b290c5d9348a57bef",
"main.dart.js_77.part.js": "25d667ac765e2080b64079989191e3ea",
"main.dart.js_190.part.js": "6f07dd882e7335a8b8c226c2e82b7f17",
"main.dart.js_259.part.js": "41612190a28c9142d60a4392313e6220",
"main.dart.js_307.part.js": "c476b028be826fc9eaa1ca5d8d4a261a",
"main.dart.js_31.part.js": "9dcea9a25a2c946c670a1c3e8e0d7d3a",
"main.dart.js_209.part.js": "e13ffbb352f093fdf19e8987b02a064a",
"main.dart.js_100.part.js": "b2783e5590200327d43456655aa3f26a",
"main.dart.js_80.part.js": "057483d60f9682b67b3a4aa1847fd840",
"main.dart.js_35.part.js": "94fea82f660813994fb22df61848c5d8",
"main.dart.js_7.part.js": "98060722bb978d7a884d898823a124e5",
"main.dart.js_184.part.js": "0161618fad7bd718a3196643c754aa7b",
"main.dart.js_223.part.js": "49be2b8d0309db90b6d3124731eaad77",
"main.dart.js_103.part.js": "728affedd6e2c5553ca5e8d18dfd5e47",
"main.dart.js_227.part.js": "a5cac0b7cafd10a60626357e41fcbe59",
"main.dart.js_87.part.js": "4f7f8c62052b8a0a555869feef3c9a3b",
"main.dart.js_178.part.js": "770b30710cf5b015a5e5c99977549f01",
"main.dart.js_70.part.js": "c664b3591d87cd239a9ae873d5a80e96",
"main.dart.js_3.part.js": "c7773d56c2952cb4f0476ffbc0867fcf",
"main.dart.js_46.part.js": "fde9069df5117fb14a8b215d82fe6f2a",
"main.dart.js_226.part.js": "e8be7e73cae3f2a6e87f277abb8291fa",
"main.dart.js_126.part.js": "1f9c299007433e7a6d47d0ef92a67ccd",
"main.dart.js_13.part.js": "28e53a56befeb7defd8e967d37a70376",
"main.dart.js_38.part.js": "27c445222b6f36a1db9bac81ba78f486",
"main.dart.js_205.part.js": "c131309cafab439a45feb86ba77e3652",
"main.dart.js_99.part.js": "dc2d2e94353e94b78179b4a94dc7a01a",
"main.dart.js_254.part.js": "41b9a2551fad1e378d7c5e5c13a5aaba",
"main.dart.js_270.part.js": "8b367d90176ad6de243a0576a9e43e35",
"main.dart.js_299.part.js": "37fa9b55aa59f9199654e88ea43b2d14",
"main.dart.js_4.part.js": "3aed362a78329e8df2ca5e43c717ef23",
"main.dart.js_92.part.js": "30781a2c712b2414c92fd92a9de75f74",
"main.dart.js_106.part.js": "3685bde38c2a62a475496aa97237ef5d",
"main.dart.js_91.part.js": "eda2c017f91277962caf2a8e2bdc5ee2",
"main.dart.js_16.part.js": "e8dbf173aa43db7593401c86cb44bcd5",
"main.dart.js_199.part.js": "a183cccc0ce2d9902f33e7da8a0112bd",
"main.dart.js_79.part.js": "860f64db210326aefb55f289b6c14321",
"main.dart.js_183.part.js": "e34f7123eb3a587689b8d753efe1b996",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_121.part.js": "5bc2d6e6b21c74439f0a568275fe99b7",
"main.dart.js_185.part.js": "9d07d05546b83a4f754d111e4feecb61",
"main.dart.js_248.part.js": "bfedd7d4fa9b3045e9a29abe8f179be5",
"main.dart.js_40.part.js": "f509ca06b25a9fe2479d13aac5f78a20",
"main.dart.js_263.part.js": "b1f88176212c3a6ff243c8f061b329cf",
"main.dart.js_282.part.js": "e83deb023b881785d628d06c237511c3",
"main.dart.js_241.part.js": "9971a6c1771fc62860698db9d93993f8",
"main.dart.js_56.part.js": "a1d0f766b13d508f4413edabc0560f54",
"main.dart.js_15.part.js": "35eb78bc964af7ba61492731aca48463",
"main.dart.js_107.part.js": "feb5e435c20ab6d3eeed6ea48ee1147d",
"main.dart.js_25.part.js": "04e27fa5521e9dcc63a59f406ae3286e",
"main.dart.js_249.part.js": "a426f6c1252028b51413279e4fd8c40a",
"main.dart.js_202.part.js": "bff49a075b9e44ba3dd2ac549af57a3a",
"main.dart.js": "362bb4aebea127305143b4e5bc5547d2",
"main.dart.js_253.part.js": "5ecbdd69afbbef2bed23bbd9c19e1774",
"main.dart.js_60.part.js": "c4b38af16bfcb9334c9a87811bb4ccaa",
"main.dart.js_258.part.js": "d9878861c39b1c521610a58c47c7f59e",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_225.part.js": "b9edc072332c182eec6c12ddc5a200ea",
"main.dart.js_85.part.js": "7e6bfef1bb7e0451d5d34e33b1617ffc",
"main.dart.js_271.part.js": "62d4485ab7d0f70c5c3380b5ea520883",
"main.dart.js_10.part.js": "d7365c6569ab9fda8f7bcc932f9293c7",
"main.dart.js_11.part.js": "e7abccb0e34b7da4af450c0fb5f21bd7",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_260.part.js": "832a0287358bf422dbb3037d816162b7",
"main.dart.js_95.part.js": "20de5213e263dece60ba9af594bd5985",
"main.dart.js_215.part.js": "19da1391a6d33b9e7be0518ea73ab647",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_96.part.js": "e85c84a13e3bdca69b2a40c07b15e0bc",
"main.dart.js_131.part.js": "8c61f82e007af1b75d15eb5132bf48ec",
"main.dart.js_118.part.js": "4db84c939f5cfb1206173748adce9972",
"main.dart.js_94.part.js": "7c5afb3fef49106dfbf064f2c8d4fd9e",
"main.dart.js_140.part.js": "a44ecbee56c591643678c9b51a16f86e",
"main.dart.js_105.part.js": "832d0d07a320799f3438cea1b4ab78af",
"main.dart.js_1.part.js": "a6a9a7ded869c410a512ecfca83f5b45",
"main.dart.js_133.part.js": "146f1ad3c28c41e16fbabecec70c7238",
"main.dart.js_195.part.js": "bf640db1c17ebd249554fb2253120170",
"main.dart.js_83.part.js": "105b960c6bcd74db84bf373271bac5d4",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_196.part.js": "bb75a066de3923309550a228c18d57aa",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_110.part.js": "921031133dd9fc2aa7b6435fa6af907a",
"main.dart.js_276.part.js": "b2715bccdf10d14cfb604e2aec827470",
"main.dart.js_264.part.js": "0a10ef54524fef11199fb128fe78a641",
"main.dart.js_67.part.js": "b8b7eaa9379cc368b91c3bd1b508f65a",
"main.dart.js_213.part.js": "ba50601dac55ac2b9dc913c971794a91",
"main.dart.js_238.part.js": "15707e52216997189b0a502630f4a2ea",
"main.dart.js_308.part.js": "6b3ee77e53de73bea7ebc442d1b6da2c",
"main.dart.js_109.part.js": "07ffbcbe330b1237446b363c69875d48",
"main.dart.js_265.part.js": "f7a31c486903a260ab43f4eebbc3859e",
"main.dart.js_41.part.js": "8e3d4f696b87a62e54b302ef1fa65e9e",
"main.dart.js_122.part.js": "0c1837706b9f01cd5da10808c3148918",
"main.dart.js_12.part.js": "0a1041bf34cb4a80faf2c0e76a6473ad",
"main.dart.js_303.part.js": "82fabde8d2ceba35ef8571f38f1139ad",
"main.dart.js_76.part.js": "6e34b96e47bc395188c7591fc882f3cb",
"main.dart.js_222.part.js": "e787924e5364c1956166476cfda35a9d",
"main.dart.js_239.part.js": "0dce69f849882d3a1bb697a73206bff4",
"main.dart.js_251.part.js": "797fa9304b25a6a2d2a48f23c9243a36",
"main.dart.js_72.part.js": "2d1881981db39060c8cdb2ce4d5c2199",
"main.dart.js_68.part.js": "10de58eb5523f489a1a2a9564aee853a",
"main.dart.js_291.part.js": "1c9c07eac85a15e894664d0090066edb",
"main.dart.js_62.part.js": "3d81090f9eba09f595d6fc34ada231bc",
"main.dart.js_180.part.js": "fcd466b1e7e516dd5be31b11d94b9bde",
"main.dart.js_240.part.js": "ac16931635b0df27118c644464962e19",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_266.part.js": "2ae81fc23f394a95d449a57b2f06731d",
"main.dart.js_297.part.js": "716d6abdeb40cef9b655d2452bbf19bf",
"main.dart.js_134.part.js": "c634692076d2f1816f4ee2c6916886d5",
"main.dart.js_294.part.js": "6371777cf2c1243572c599c419eda0bf",
"main.dart.js_181.part.js": "7b8d444e8d32e608da397fffd1a5b89e",
"main.dart.js_147.part.js": "9f5526e07e843ac6f738a29bfc1e0806",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/AssetManifest.bin": "72b43ddc80259e1c53d6d6202b5164ca",
"assets/NOTICES": "4bd2930db146c4653bc584bd9d65b728",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/cs.json": "a10529e77b6048fdcd06f8331004ac7f",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "8f4061f0a8e1205e846cdd80c9aeff99",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/fonts/MaterialIcons-Regular.otf": "3849aec6b21571aa35af383d7bc223a7",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"main.dart.js_43.part.js": "7b4c17bd43d9cc571748de4200c3b4db",
"main.dart.js_145.part.js": "2b378ad8bf16bb451c29b8838245125b",
"main.dart.js_169.part.js": "a635759710b919babdcd936318c57654",
"main.dart.js_29.part.js": "18851f982b06a596041476b43ae8b1b4",
"main.dart.js_267.part.js": "1442f58fbf5d539f0e2a0d558e8f241a",
"main.dart.js_200.part.js": "d4888c79e9de137559d7b71c18f87ef3",
"main.dart.js_170.part.js": "b4b18a074dd9d7db18b857e327d13f9d",
"main.dart.js_197.part.js": "c212026e3db5c459de0017498fc0f9ce",
"main.dart.js_280.part.js": "31801eae6eaf92e694f32c491bdfca5d",
"main.dart.js_269.part.js": "7e6afaec03fe9c982bbc3eb88786a27a",
"main.dart.js_204.part.js": "6dd408de3b03b8be9f5af7f5d11282f5",
"main.dart.js_232.part.js": "1d3953eee543ec1bf5eff84edf208f37",
"main.dart.js_211.part.js": "e7f2e53b615ef65fa11ddbaed45a622e",
"main.dart.js_117.part.js": "9f4b1933877bb51e44903b14a41659f9",
"main.dart.js_245.part.js": "d0643ceb32678ce2964d9028910dee40",
"main.dart.js_189.part.js": "1271112a5e87ba4ee25dae0ef555039e",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_283.part.js": "6a394b2e00b7c16823cc73e94310c486",
"main.dart.js_188.part.js": "a10a78a97be169bab4cb8fc3d45342aa",
"main.dart.js_48.part.js": "40113becb4310ae535df0114b48c1b21",
"main.dart.js_161.part.js": "492ce549e514238548f6ea7136bbdd0e",
"main.dart.js_229.part.js": "3a2cafbefcff08bc78c6383083f7ba9e",
"main.dart.js_153.part.js": "ec9c50a4cbbff54962612b60c90c7e4c",
"main.dart.js_28.part.js": "8f19c49cba349248c68767fdd7720629",
"main.dart.js_71.part.js": "65771114354c1a6a44265b9df911003e",
"main.dart.js_119.part.js": "ec5f84b04fb6a6ab810d06d337efd25d",
"main.dart.js_234.part.js": "511d95c13087007c90f6c063b1969d21",
"main.dart.js_42.part.js": "81fb9e5a5ddc1f1ca811e244e485c389",
"main.dart.js_166.part.js": "10627bb80e90540a5c976434406bb6b2",
"main.dart.js_285.part.js": "9944cec396cfc352b7c30cff4ef703aa",
"main.dart.js_59.part.js": "b6c03244a216990d9e386eaf472fa309",
"main.dart.js_277.part.js": "87b3262691a8e3de5453770afce01e7f",
"main.dart.js_284.part.js": "431c164bb5d6484fa8ebb219cb84dafc",
"main.dart.js_142.part.js": "2482e7895a38ecfa48d196ad402bd027",
"main.dart.js_5.part.js": "36c5b356f873d43863fa4e3bf283f829",
"main.dart.js_173.part.js": "8b60cb851f6c961c6a439460922c8226",
"main.dart.js_128.part.js": "1dca7a034e217a28f069bec66c856c22",
"main.dart.js_244.part.js": "29b52c0458c0195a5e57aebdbb68bb08",
"main.dart.js_293.part.js": "587a27287a38263b275761ddf879c879",
"main.dart.js_300.part.js": "66b4dae15db4c1b00170005d698d8a7b",
"main.dart.js_261.part.js": "490646c44151dfcc5fad23f28ae36ce6",
"main.dart.js_236.part.js": "bb7a9741faba58a756b7252021b4ea42",
"main.dart.js_274.part.js": "17a766659a71cb9a4a19d5b24191b3e5",
"main.dart.js_157.part.js": "0fc0059c0629b9b58eaa9b3f5567d126",
"main.dart.js_6.part.js": "d4bcc12dd56e8c7c3e1cd1e1587e9b93",
"main.dart.js_37.part.js": "72a7b05eae33d519578380c6596a45da",
"main.dart.js_84.part.js": "87461a1c747c1e22558b0c89755d0f16",
"main.dart.js_115.part.js": "dfba0ee5a5d29006e33a036d5988a2f1",
"main.dart.js_151.part.js": "f0fb0b95858835516fcf81522c823dc2",
"main.dart.js_208.part.js": "9830617640b2fefc428457a993f19703",
"main.dart.js_152.part.js": "63fa748253c0606e2dfee5ce51930f96",
"main.dart.js_255.part.js": "d56a6f70e9c894a8a525a69011d32119",
"main.dart.js_165.part.js": "06144a481caaf35ea86acb65c2f2dead",
"main.dart.js_171.part.js": "85255f3e696c585797f788d50775e785",
"flutter_bootstrap.js": "0f1f97db8d09a9cfa06c518ee83f3de0",
"main.dart.js_146.part.js": "674761b38af05fb68df8e519b4c59a65",
"main.dart.js_210.part.js": "85853af4c46f75a5e3d67682a6a42cd3",
"main.dart.js_81.part.js": "2a080fe6c1d32949893d62662d200701",
"main.dart.js_2.part.js": "e40646a14e3e252370bd0eb35a07eafa",
"main.dart.js_207.part.js": "c3a78bbb37f49bafb2387ecc5553c4be",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_27.part.js": "cbad3ab25f3bb1895ebc5d27151a7f4f",
"main.dart.js_154.part.js": "c63444aeb9dcf365b95ae9da4e3bf8ca",
"main.dart.js_75.part.js": "61d63df8b5e476ed0e45a45696590b59",
"main.dart.js_112.part.js": "6b0ac10c27b86a735b6ce5a5bb373c8b",
"main.dart.js_221.part.js": "fd8a592af152457286db6af2853f9f8b",
"main.dart.js_26.part.js": "3644ac03885de37f3325aa438a156944",
"main.dart.js_123.part.js": "2559bdef0c9a602a9c725a3c7f80d41a",
"main.dart.js_137.part.js": "19fa28668dd883dd01658080f2a25709",
"main.dart.js_36.part.js": "6b73349e4415a4f3681de83cc926e4d9",
"main.dart.js_301.part.js": "adf63876c7372f9c0a770195e51c3139",
"main.dart.js_24.part.js": "d662f13f1b9b7fadaa46597d23968d45",
"main.dart.js_272.part.js": "882a46fa77cbe65bcda61753e7785bf0",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_155.part.js": "0c5de98f6906cf9350f95570fb538de3",
"main.dart.js_57.part.js": "744c8fdd8cf0ca37830db404d4f9e808",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_18.part.js": "96c704bc66a9f888049b9f2ae52d2454",
"main.dart.js_292.part.js": "b585f182af3b2009472b3c1d5402ceba",
"version.json": "2b8d8d8762bfca0a73bef503b1b0a459",
"main.dart.js_8.part.js": "9366e807f7744e5295e7fee49b399f24",
"main.dart.js_9.part.js": "4d78d66a948cc506e69ddc7a2c1fbc5d",
"main.dart.js_69.part.js": "f455984a3a4be27bbe780b445c7b782e",
"main.dart.js_304.part.js": "be74a7ea45a29d44d5d6e90c05cb38e1",
"main.dart.js_139.part.js": "9ae2310928c0913a004be98f855c8072",
"main.dart.js_176.part.js": "5b2000ed7ba9f4ec7f5f74fbb97951bd",
"main.dart.js_275.part.js": "eef758cde6bdf4779026c661b8886753",
"main.dart.js_256.part.js": "b31f27e923d302739294c1daf7b72d99",
"main.dart.js_237.part.js": "2d816c40d73baeb040114edb46a76edb",
"main.dart.js_257.part.js": "f7b6346727b89bfe32ff3a19507f791b",
"main.dart.js_54.part.js": "0c0bc37496f5d3f1e52ba56a191ff47c",
"main.dart.js_93.part.js": "81291cbd1c943891e39bdf805739a217",
"main.dart.js_179.part.js": "813f83cbb00e8b8de8f100b0606c42ff",
"main.dart.js_14.part.js": "dbc498fe77e917a3d872b9efd208b524",
"main.dart.js_206.part.js": "3b826f62fdad2c71236c91f6833e1444",
"main.dart.js_113.part.js": "4cb93f781b95f09e991604868692bc21",
"main.dart.js_235.part.js": "c5017fdd2a3f4de748f8dec391f6c5e8",
"main.dart.js_39.part.js": "004363162f94294d772857abcb502c48",
"main.dart.js_306.part.js": "89a76e8b7f7b023b816a47fe5a89ddb2",
"main.dart.js_250.part.js": "6bba26373533d3bb2b265f1b3dfa7f44",
"main.dart.js_290.part.js": "552ff22ececff83ee965883e3c9c0055"};
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
