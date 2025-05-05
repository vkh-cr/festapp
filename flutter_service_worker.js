'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_106.part.js": "f66e783a4105fc0b4f18aac6c34c77c6",
"main.dart.js_111.part.js": "0ff40f28ee57def7d032540b7f00703f",
"main.dart.js_250.part.js": "ee3bc47f49e68ece10d8dbd0308f085c",
"main.dart.js_333.part.js": "827e2a7c8ef75f97b0ca54484154e63e",
"main.dart.js_362.part.js": "b19eb64faaa3696c87baae76f0ea4dee",
"main.dart.js_160.part.js": "2b92a803e8d014d38020bb61ec5f82a9",
"main.dart.js_34.part.js": "7e678d4f2f1a52cf5bcdb1dfa84ef113",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_356.part.js": "26d72e3e846288b07081f564e354988e",
"main.dart.js_88.part.js": "f7e850260d1e864de282b3694145a44d",
"main.dart.js_291.part.js": "4b1fbd979899b912eccf2674d052684a",
"main.dart.js_101.part.js": "5e11b19827f4b94bd030e1227a289a07",
"main.dart.js_315.part.js": "6d511e72dd7e059eebe5f7cea59f13a0",
"main.dart.js_129.part.js": "5fbc42ccf3043c32004b7422e0ba346a",
"main.dart.js_156.part.js": "41c87b2a944f99f26c433441bc6581cb",
"main.dart.js_190.part.js": "291815c16d87d70979df312f4021af56",
"main.dart.js_32.part.js": "bd3c4bd255d23c306e2afac91e93d64b",
"main.dart.js_24.part.js": "e22580f633204924e89c78bb46dca111",
"main.dart.js_244.part.js": "8d3b3fd1d547f00789e435935e64e6ee",
"main.dart.js_363.part.js": "fe4845e935791e205072a207e8dd7c70",
"index.html": "112e953a762c8a0183ab83b7a3ab3d8d",
"/": "112e953a762c8a0183ab83b7a3ab3d8d",
"main.dart.js_102.part.js": "9de12d7c40c6ef9877125de51b3118fc",
"main.dart.js_72.part.js": "77fc9717632d3874e58ccb33dc19fd3a",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_296.part.js": "6a608ec9f742a741de9f167c30696b8c",
"main.dart.js_366.part.js": "a3277aea564fc4685309bd250ceef9a7",
"main.dart.js_94.part.js": "45aa168db0b802aa51889f5f59b9a363",
"main.dart.js_237.part.js": "2a091928b4d4f783672ca14c7f374897",
"main.dart.js_236.part.js": "5b9026015e54dbb2755dabe7ac338ea6",
"main.dart.js_49.part.js": "69eb6a354f8453a4366752f1647be335",
"main.dart.js_128.part.js": "1646b7e2f0237ec422cc07a4c1a13f21",
"main.dart.js_29.part.js": "38fa14669f8c48c8133940ae6e096980",
"main.dart.js_373.part.js": "d5fc1bba53f82ae8564786a46690c4a2",
"main.dart.js_87.part.js": "bb5096906b7ebc049b903f1449af0edb",
"main.dart.js_324.part.js": "db6b25388145b6595cb86ed875dc6972",
"main.dart.js_353.part.js": "6019b312944da255729f5fde1e026494",
"main.dart.js_350.part.js": "68bd9f711ef353c68ef583e37b8957bb",
"main.dart.js_371.part.js": "7d406b8bdde415a287cfe14f7008df3e",
"main.dart.js_195.part.js": "ae07804a3609615690c2f99eeeeaa9c9",
"main.dart.js_295.part.js": "2c26dae5039eb1d5d814b644a9ae8668",
"main.dart.js_263.part.js": "440e56420b60a2b52c41be528c7d69c4",
"main.dart.js_165.part.js": "a278d5058a4544f12fa53db98625f43e",
"main.dart.js_18.part.js": "e8d9ed5842fd8d335cb46a6e7a64d869",
"main.dart.js_187.part.js": "c638baa32e2fe16c2d73e4f31bb517b5",
"main.dart.js_370.part.js": "278fed309328e68297f5da7ef1152fc5",
"main.dart.js_163.part.js": "8f6e15b8921006f1abe19d68770974c2",
"main.dart.js_266.part.js": "3f06939a7d50a5b19c3f557b33741393",
"main.dart.js_27.part.js": "179023169b448bebb21fd186b49c36fc",
"main.dart.js_221.part.js": "c7434d529391af8979c58a24e4d4c0b7",
"main.dart.js_304.part.js": "3fbed19bb4ed193063ae8acd19a5ceb5",
"main.dart.js_310.part.js": "c5704be544bc1db96c97ae76ab80fb4d",
"main.dart.js_283.part.js": "9cec49eff1312073eca5cac8f1dd885f",
"main.dart.js_113.part.js": "1c608c0a9792bc397b82e4f45e1d3b9a",
"main.dart.js_208.part.js": "7d7f3cf2b897390cde32deb7f71b4ca7",
"main.dart.js_157.part.js": "9e8911932e35bb800ebc25bf54620439",
"main.dart.js_1.part.js": "984f0e92d519e85b8596aaf6198ec4e6",
"main.dart.js_276.part.js": "2e7dea56b685204689ad2e3d6bec69b5",
"main.dart.js_7.part.js": "ae6624f600eb7463d30bc32a0a06d339",
"main.dart.js_143.part.js": "2f3aeafc3f8e872784d73d3699760f4a",
"main.dart.js_47.part.js": "03899c42608f3666943199cae798789c",
"main.dart.js_19.part.js": "30a7739364a457d464f403d3ccca8e94",
"main.dart.js_2.part.js": "a311615487134069ff6f215cc842e227",
"main.dart.js_335.part.js": "37aa9effe948d0b2e56c31a0f1afd3b3",
"main.dart.js_90.part.js": "d44b61d99a21c68d7636d41f59b9e851",
"main.dart.js_152.part.js": "420e44e28f446d50560f35042d8c8a67",
"main.dart.js_219.part.js": "3e775e81bc9bb1ae23b3581960e87960",
"main.dart.js_271.part.js": "a99227f1029b208588973cbf0c282a44",
"main.dart.js_170.part.js": "021c2b8a7713d7084fbfb9b65f87bc9a",
"main.dart.js_243.part.js": "e17b82f2c5375a7a0eca553a4af1cf81",
"main.dart.js_199.part.js": "e7383619644f3dd2efa33e925e532a80",
"main.dart.js_342.part.js": "d3f03d381d8c3a6782752080b88ca7d5",
"main.dart.js_60.part.js": "efacf7ab469226dc6274127ce0349a7a",
"main.dart.js_63.part.js": "9de4b7f07464036904f355fd521f7290",
"main.dart.js_191.part.js": "4a455995ff1b8885044667021f629229",
"main.dart.js_177.part.js": "067ec5500b9812e49e3e1c5092b29102",
"main.dart.js_235.part.js": "c0686f83492f352cfcaefabb0f27c3aa",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_96.part.js": "90f9ccf15541fbcf84b81a6d94cc5719",
"main.dart.js_144.part.js": "96ac647f2976b5193c235c0d58d95ea0",
"main.dart.js_185.part.js": "3768ac55fa73d8258a7361657908fc80",
"main.dart.js_246.part.js": "140b5cf1eab7df6deb895a3f93aee73b",
"main.dart.js_264.part.js": "b3e489c3f862e0c1f04911faed2f7cd9",
"main.dart.js_118.part.js": "e085572d73047dde79312d8523540770",
"main.dart.js_103.part.js": "31c7e007d1bdb18c5b45c7c7d3e81309",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_327.part.js": "9eb691ad21c4d7dd6897aed814ef0580",
"main.dart.js_338.part.js": "31a9f3cd77a2ab4ff8c69fc5cd71b071",
"main.dart.js_147.part.js": "7f3b4d2f520e36892a2fce67c6817917",
"main.dart.js_239.part.js": "76a85b63f18091a7127b9dfbf00dae16",
"main.dart.js_290.part.js": "b2a63917cf6d56face95b01533228249",
"main.dart.js_289.part.js": "6fd38477b29f148c67232298e0c2170e",
"main.dart.js_17.part.js": "5152e1083d655ca6250124f912651b61",
"main.dart.js_265.part.js": "2f8100f05969477e8a729ddc82d1c41e",
"main.dart.js": "8124b512270f35fcd6082acfa93512d6",
"main.dart.js_197.part.js": "27774e3fc0f646e2b34a04b862c9119a",
"main.dart.js_352.part.js": "999fe74308a85c4109b7b03afd6de0d1",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_234.part.js": "b4430acadcadce074d3380d3412dee45",
"main.dart.js_340.part.js": "82b77948d6c852c30fbd646a32c9552f",
"main.dart.js_175.part.js": "f2db2820b28a697ac5587f4de9c0a4cb",
"main.dart.js_201.part.js": "623fd562930b72daee03612b850a84e5",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_305.part.js": "9b167ceb0ac58c3df7a6e0131f3273f1",
"main.dart.js_183.part.js": "22f4389cc9e606c0b1fee1d9bb0fcf64",
"main.dart.js_25.part.js": "0dbc7bf1b88e45c0b63e85376561509e",
"main.dart.js_142.part.js": "39b6ab02272039ebb7d0cc3368c1fbb0",
"main.dart.js_110.part.js": "469782f4cb28294bbd0d5669e49b8a29",
"main.dart.js_215.part.js": "27295613f47a64aaf228c309b00cbd92",
"main.dart.js_121.part.js": "59d6250c925b1e9bec22662694a5024d",
"main.dart.js_109.part.js": "71cb7d380f31bb0fef6b6c5f9174da7e",
"main.dart.js_159.part.js": "60e754d41b54c4c4ccec1d4bf366be71",
"main.dart.js_249.part.js": "105ef14baf08a379765bd7bf58732e76",
"main.dart.js_261.part.js": "d1af0a1a52f6f7614450033348fa9443",
"main.dart.js_115.part.js": "70e837b6ae26a7dfe52be6b8b035d2fd",
"main.dart.js_328.part.js": "ed6e5517f65c6be65e750c6e9e828db6",
"main.dart.js_78.part.js": "1ae7367f336241309872c1c435acb471",
"main.dart.js_141.part.js": "dac15ca88196768c4dc3d9735a83e21d",
"main.dart.js_127.part.js": "b4b0a737d550b51b02faec05c3663e54",
"main.dart.js_278.part.js": "f4f1228ab515c5f7c4caf2bb6818b217",
"main.dart.js_224.part.js": "614e87254b14d2abb0b0b80f7ff13d55",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"main.dart.js_225.part.js": "678d19085845374f55068d94ff5c7ee8",
"main.dart.js_33.part.js": "d5cb761e4f4aa87698b1ddda11cb43d0",
"main.dart.js_174.part.js": "794e33fa27906cdab98c24c5d3187ef2",
"main.dart.js_367.part.js": "49563d4c227f2a50446b25b5f5cf9fdf",
"main.dart.js_203.part.js": "8b98284684111702cfd723a7773a0aa5",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_182.part.js": "954700898d1d30bdb922eb55880deb94",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_13.part.js": "a56afd73c170e4aeb4f185af100025f7",
"main.dart.js_241.part.js": "608ecd5ab4fad4f990bcb6ba684513bf",
"main.dart.js_368.part.js": "c9cdf0a47675c4a26ae5f8d40d22f824",
"main.dart.js_348.part.js": "441c34fd04d18967258b0f9139414b63",
"main.dart.js_355.part.js": "7c4e67ae2c6a0c63d2a81bc77879a465",
"main.dart.js_202.part.js": "ad4a6376301370c13461db9b6833c1b2",
"main.dart.js_51.part.js": "a380828e2b2727b9a41942fc85de9b04",
"main.dart.js_155.part.js": "fb87a1d8890b69961b6fe6797df9e8ad",
"main.dart.js_200.part.js": "8c978823c86d67853b5745039bc02493",
"main.dart.js_171.part.js": "75155962835b2690deeba27ee03a8251",
"main.dart.js_43.part.js": "124d17240cfae40eea451e8be394df44",
"main.dart.js_358.part.js": "3afdfaa56429a17888cb2ecbe3c4a927",
"main.dart.js_198.part.js": "ec97cbfca620ee967b63cb030ac227f9",
"main.dart.js_317.part.js": "f639441c7dac1ffa44bd19e509e91ae1",
"main.dart.js_334.part.js": "b882e52a7c3ab7b084839d1673459e55",
"main.dart.js_369.part.js": "e2fcd18be91d69f090a599840480956f",
"main.dart.js_326.part.js": "e47f6044df9850576ef2da261ba4bba2",
"main.dart.js_35.part.js": "cddba2717a5892c17c78917f8f1a769c",
"main.dart.js_376.part.js": "de870c97e507986f84cd2a00541415f4",
"main.dart.js_40.part.js": "bf7bafb21f6fb747f4321ffcb233c386",
"main.dart.js_297.part.js": "fad812762fd3b3bd2c15e49a56f5173a",
"main.dart.js_281.part.js": "c7523fd53c9f914bb09e5f4b842eaf03",
"main.dart.js_176.part.js": "df9ca65390a0e35894800caab3e30e2e",
"main.dart.js_228.part.js": "e23fd2de3be1aea736add5d8173c3d5a",
"main.dart.js_149.part.js": "2ef8faabe9a3454a57f32e1b601cb11e",
"main.dart.js_284.part.js": "a061b097836f67182d33671a697b8620",
"main.dart.js_14.part.js": "c72c31ba319352148d057fe86e41ba39",
"main.dart.js_21.part.js": "065fd31419d03250706f62d057b08a37",
"main.dart.js_298.part.js": "4709395cc47ddb4a571b453919e9070c",
"main.dart.js_20.part.js": "b3564165a7298a7cf6328ef8a67ee731",
"main.dart.js_344.part.js": "6090784927ea45cebeaf23667b3d32b9",
"main.dart.js_59.part.js": "389bd01cf5d99954216071bb8fe05327",
"main.dart.js_339.part.js": "7e2b43d0bfffafb1e95fb1cb6267e7f4",
"main.dart.js_136.part.js": "f74613368ed660ab8d1e643c0f48fdfd",
"main.dart.js_220.part.js": "a3ceba02717f2d75890f24e4c94544d6",
"main.dart.js_270.part.js": "cc3f3a1deded3d88158c8b1eaea8733a",
"main.dart.js_178.part.js": "5c33a30d531a50895db028d600162884",
"main.dart.js_172.part.js": "cfdbe9392ac905b1566ee90de293a3d4",
"main.dart.js_331.part.js": "8ef836b58ffff2fc20d6774c82f874f0",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"flutter_bootstrap.js": "f98dbac7632319b55a4391b9f782f8a2",
"main.dart.js_232.part.js": "b553826cc8445126847555221700a8da",
"main.dart.js_10.part.js": "3cfa9ba1d69dbb1fe773a2a907c183eb",
"main.dart.js_58.part.js": "dc37a7c7ada787bbdf42d1e2d6e6b00c",
"main.dart.js_31.part.js": "ddabe89948663f0cf711de253897b7ab",
"main.dart.js_61.part.js": "e35dbf1fa2c73998c288deefa43ed251",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_280.part.js": "798d51687d0f4df9bb283fdba080f5bb",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_277.part.js": "ce0ad66b0a9589a00dc78b043b5b9eda",
"main.dart.js_238.part.js": "7bb06800f732b3a35a0cde5eb64a1173",
"main.dart.js_37.part.js": "8e8ec2b1c3427e6e6f05c2cf6584c9fd",
"main.dart.js_245.part.js": "8162dc607ca902df070dd9deed6307e7",
"main.dart.js_64.part.js": "84ceee9452658756d1983965e2990d70",
"main.dart.js_81.part.js": "749e4d75442da63b34a1820c9eb56983",
"main.dart.js_93.part.js": "974aedbd696a368ad06468d974254818",
"main.dart.js_286.part.js": "31870c0052eeee080ef4241c88070928",
"main.dart.js_351.part.js": "bba3336b9b50778f2a6c5a38d361d809",
"main.dart.js_262.part.js": "a13600f212851e6f6d5eb376c6690b42",
"main.dart.js_161.part.js": "fee72ba5b8654914b8a406ea954718ba",
"main.dart.js_169.part.js": "352020e2d5e8fc86ecc141c057cc19cc",
"main.dart.js_196.part.js": "bdaab87dca626aa9f20b751293dffa5f",
"main.dart.js_95.part.js": "e986f54f5d8eecd9802eee0d4ef6706c",
"main.dart.js_16.part.js": "ff3f124c3583d81a164de7f0768fe213",
"main.dart.js_99.part.js": "8efdda64529b8d3cab7592a1181d0dae",
"main.dart.js_184.part.js": "d73f1aef04246ccaeb0233e76f46d4f8",
"main.dart.js_365.part.js": "d6e7f5aa6e9386fc07be300e40029765",
"main.dart.js_6.part.js": "8bb653ab7320f8cfaa3e723a88ca305e",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_76.part.js": "736c2ba3429c88ba1bb2f954709311b8",
"main.dart.js_349.part.js": "f83b364bb8dcf8ddd92861cdefe9b9c1",
"main.dart.js_255.part.js": "9007e6ec72439cc63cf269b944dfb165",
"main.dart.js_357.part.js": "b95c557d8e021b12e8477b4715e18c19",
"main.dart.js_346.part.js": "c640a39d9e44d40ae81e4f4af8de673a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_11.part.js": "a317df137499e1295f9fe78c632a839d",
"main.dart.js_274.part.js": "96714702428b02593c19bd1acdf935c6",
"main.dart.js_132.part.js": "933d30afe69a39ae6bfa70808c9b8968",
"main.dart.js_117.part.js": "258e0123c0dc5049c47048a1b64b3f10",
"main.dart.js_181.part.js": "865a0023b5f4d3f18fcb4fd80a03f198",
"main.dart.js_189.part.js": "ce973a8d1041c1b4e928cdb091927233",
"main.dart.js_67.part.js": "bda6a93f4aeea6a5d9503d45cbbd38fa",
"main.dart.js_91.part.js": "8d0f5984d1e46e7f81cae297e58ff25c",
"main.dart.js_150.part.js": "796c7ca7f9a67b7ee77d6470f2afd569",
"main.dart.js_82.part.js": "6ee9ae7700a28f4e88e23f02cb972c87",
"main.dart.js_100.part.js": "32022f178747c5339b457ac2eba94b31",
"main.dart.js_194.part.js": "fe5d95719ab2edfb4b2a568bb3b0d6dd",
"main.dart.js_251.part.js": "b1a5e056e5735e0ce76d6cd46a4349a9",
"main.dart.js_309.part.js": "e8e23ff331e2ca8ddd0f4cd04546b66a",
"main.dart.js_52.part.js": "de7b4b63abc6aa9ce837d45a6cdd3f7f",
"main.dart.js_227.part.js": "eb96ca169fb551e2b04b4284f68e1e9d",
"main.dart.js_180.part.js": "83bb85c26b6041b128090467c86e4b17",
"main.dart.js_151.part.js": "8cab90070eb02428e90df053ca800af6",
"main.dart.js_204.part.js": "88c93b0f358a432a044dcc1c3d28a6ba",
"main.dart.js_323.part.js": "5531f2c19c23f81147d3298425e3ba1e",
"main.dart.js_267.part.js": "973045c110a42686e67e3570bda684d7",
"main.dart.js_55.part.js": "35fff01807d762292ce9a92732ffc90b",
"main.dart.js_330.part.js": "0a7ba409eb3b3f14b7203ea6c3f53571",
"main.dart.js_153.part.js": "5f8fc0cc5fe72ddfc26382603a15fb99",
"main.dart.js_242.part.js": "36541d8cc7358d9d8663f25821123cb2",
"main.dart.js_85.part.js": "357af2b6af49ff0352a4f36c7ed85087",
"main.dart.js_57.part.js": "01958926af5ac047a45450e75ab31ad6",
"main.dart.js_22.part.js": "264cdf98883a2bdd10ceb3b226de8570",
"main.dart.js_375.part.js": "48900d4e4b99e731bb08d4294414c24d",
"main.dart.js_223.part.js": "6abca493de51b3a65513f3662e33906b",
"main.dart.js_140.part.js": "6b74273c9e457b7496f3b3781fafc7cb",
"main.dart.js_229.part.js": "7a250ba23b0d700a65f28a395cc109db",
"main.dart.js_192.part.js": "630f0c41b596b40743c12bb8a2dfa78e",
"main.dart.js_73.part.js": "a673c723ddab50250e83d265a88c2657",
"main.dart.js_130.part.js": "ca72d018dac6f419ef337db0e153415d",
"main.dart.js_134.part.js": "fbd86c1572bc8314570be28741b966a3",
"main.dart.js_247.part.js": "d595da03b5d162a12df626cd65861053",
"main.dart.js_112.part.js": "a4bdabc2704a3280633f6a9388d170ea",
"main.dart.js_83.part.js": "8b040c69982209bf55f1f7fabe813782",
"main.dart.js_312.part.js": "a3f9a8f9a39fb0e38844f1b0addcf1e5",
"main.dart.js_39.part.js": "9fd0f38ed2384fb16f5d806c3339a7a8",
"main.dart.js_374.part.js": "38899b8d8a3ca2538eec8b4b8ae54809",
"main.dart.js_292.part.js": "d7b096777e49d780af2c4d55e484aea3",
"main.dart.js_48.part.js": "cbc4b5828ed8db9db0e429102f0e7e15",
"main.dart.js_303.part.js": "03793ffc015d5f0472a66e18476e0e14",
"main.dart.js_364.part.js": "82370a380ffe56b383e74310dc5408cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/MaterialIcons-Regular.otf": "3d67bf79fae206304aa9889281f5a665",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/AssetManifest.bin": "d5e7a6737aca705ca60264ba4457058e",
"assets/AssetManifest.bin.json": "13d6455bb0c64dcc373f0f3c36d2a89c",
"assets/NOTICES": "0f07beb40a76ab03370355c0527cc8bb",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/translations/en.json": "dd3e52bdf86013979d59fb21acd827ad",
"assets/assets/translations/sk.json": "e20b4c2317f454bc552b2df9f86e40e5",
"assets/assets/translations/uk.json": "0da50d429fb403ef58025e516926be1a",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/cs.json": "654e94edf70854dc5fd98a409710f518",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "6e696d5b5ed21128ad3b2a505e774b2c",
"version.json": "9c9d534ab5cd82fd46d7bff169351c50",
"main.dart.js_209.part.js": "a4d88eb838b000f5f750d1ff7e53ddaa",
"main.dart.js_275.part.js": "a5924ddd3bfa706e2c2f8537b0163c1c",
"main.dart.js_137.part.js": "c8ec7f8f80a85b3f591920be765c7fb9",
"main.dart.js_319.part.js": "e132c57c8a72e0d0fdbe47a4b17f31e2",
"main.dart.js_313.part.js": "d58912722e46ffb281e2991b334ede04",
"main.dart.js_299.part.js": "b5437b7226f76a7e96d1f26b2a44d1cb",
"main.dart.js_337.part.js": "0cc488e55606ce655904dc1d55d709a2",
"main.dart.js_314.part.js": "d75428a5c7fd7f03a2fb948420e2bb9b",
"main.dart.js_336.part.js": "264a3fc6263e56fe7c9f1ab3de1a1199",
"main.dart.js_26.part.js": "62c8a3aec1ab42f8ac4ed9595dfe9779",
"main.dart.js_256.part.js": "321206d2c598a660d52f4345f2a610e2",
"main.dart.js_372.part.js": "da75c468097f932034740d97c483dad2",
"main.dart.js_329.part.js": "5569ee468b914ff4c518e65c20f69a72",
"main.dart.js_260.part.js": "7bb6292bac03f95e68fbeea7ff0d4675",
"main.dart.js_257.part.js": "9f7243cb7a350c51ff9a512b6df46155",
"main.dart.js_345.part.js": "c659b5852a302a7e07723b48091ca46b",
"main.dart.js_347.part.js": "d22e17fa82362caeb8d930b560d54348",
"main.dart.js_207.part.js": "5f46509b446396c5927f60e41472ea17",
"main.dart.js_92.part.js": "183b23374415a28084e79d4bd46b77d2",
"main.dart.js_84.part.js": "0687631e3703c13ce14ae71093e856ac",
"main.dart.js_361.part.js": "51285d9b739eda109625b55a2e72aaf9",
"main.dart.js_288.part.js": "8ec0e54eab4d28fbdd01e4d03121a512",
"main.dart.js_65.part.js": "7a0a14158247d18588c85aed31f2d009",
"main.dart.js_12.part.js": "05fa5d661a19b8cd71a2befd7d72cd88",
"main.dart.js_28.part.js": "7d49b3c16d22cf41f42005317abb6be9",
"main.dart.js_322.part.js": "ee0910eb84e881d3108634e8de18cefc",
"main.dart.js_213.part.js": "062d9f35cead8fecdb1f1949f9b7a432",
"main.dart.js_162.part.js": "89cb21221a460202c1c89b03c2d7b0ed",
"main.dart.js_3.part.js": "aace635c2949808b14544243576ccca3",
"main.dart.js_139.part.js": "d7295d515ca97d788940d8381a5b81fd",
"main.dart.js_321.part.js": "952d8e75358503cf444d1ca7e4b4b17a",
"main.dart.js_269.part.js": "3e2807551f9752ad13e9d6b8a45bf084",
"main.dart.js_302.part.js": "f1acb0fa3b2d0004789260f06c7a6c51",
"main.dart.js_146.part.js": "20c20c89ebb03c5c6eb8bfaf10ede741",
"main.dart.js_75.part.js": "71ba14af1d8596bc4fbffc4282c42851",
"main.dart.js_8.part.js": "54d9d2ff6b5e7fb313be91f69853b43d",
"main.dart.js_166.part.js": "aa3b4b0a04755d953cafca76663e678d",
"main.dart.js_359.part.js": "99a22f5fff931619dbeb98ce94a4bcac",
"main.dart.js_23.part.js": "2ddd54c9f83e2061301924a458e421ad",
"main.dart.js_360.part.js": "f33121a30f35057a043b1423edaa1e60",
"main.dart.js_306.part.js": "0edee1770d4cf614dece812bc7b66ed6",
"main.dart.js_114.part.js": "85bcd22270cc2ece5efb24b817366ac5",
"main.dart.js_36.part.js": "c91217a2f50f19a6028522c594436412",
"main.dart.js_86.part.js": "99d3eb24227d0b7a346fadba57fe2a23",
"main.dart.js_300.part.js": "297ef10116ba65a5a6e711e5e60f804e",
"main.dart.js_222.part.js": "dde086917b604ba5ea223a6957f63db2",
"main.dart.js_154.part.js": "2aeef08db5bcccf95f9fe55aebf28561",
"main.dart.js_311.part.js": "3b51d68e1e6b8d908e27b651a6c5ed57",
"main.dart.js_318.part.js": "44f64cf9761ad1f5c58c37f7055194ee",
"main.dart.js_211.part.js": "3621536547eb009c96fdd817b92bc22e",
"main.dart.js_158.part.js": "a70d6c1085c2b1ba2e634fc9b7733686",
"main.dart.js_98.part.js": "e07e0780679e7bd921cd08f053775299",
"main.dart.js_30.part.js": "75c4331a7a2441e14f9144bc91941800",
"main.dart.js_107.part.js": "76f0cff1f4326cd3008c9c34dde39604",
"main.dart.js_50.part.js": "b19d1ec957fddde9f49b80697b16ccff",
"main.dart.js_71.part.js": "c54c61b9ebd3f06f3993b383e80dcc70",
"main.dart.js_54.part.js": "78360f3c44c60865d5e141844fc3b7a4",
"main.dart.js_294.part.js": "2f9b31bf728755cecf984a7d818403d9"};
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
