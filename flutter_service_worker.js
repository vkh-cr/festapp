'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_114.part.js": "2703e5a2a0e9d6ea260c44b2918af6f2",
"main.dart.js_181.part.js": "42bc148002499775fb4ff674bc5e0d1c",
"main.dart.js_296.part.js": "49d8ddb4d4f3c4c95a354476b4a43a95",
"main.dart.js_278.part.js": "d6f684868153e11f362b4078f6e3b9be",
"main.dart.js_189.part.js": "7908ff7de9e8922693256413c3cf2eb9",
"main.dart.js_140.part.js": "0468f1024c867c1a6a050bc6f740222f",
"main.dart.js_112.part.js": "081aa3a2475c0e862a23ba61fffae3fe",
"main.dart.js_33.part.js": "46fa913d346482c0e86f308321063c4d",
"main.dart.js_152.part.js": "23bea50d4f3eb2ed0f2455dd8f8bdf7a",
"main.dart.js_272.part.js": "6cdedcd0aef7d9ad46a0f771a61c2e2e",
"main.dart.js_199.part.js": "6c9d7ff9a47f41daf5fa0b43a946073f",
"main.dart.js_239.part.js": "406da0951d9365be98ef0d5f7de61128",
"main.dart.js_266.part.js": "9a452745df4d1784cd32656597cb26f6",
"main.dart.js_132.part.js": "5d64d5c7db7954074c6af32b638a94fc",
"main.dart.js_139.part.js": "dd30380defbdc0b02a4edb668c5ebb37",
"main.dart.js_206.part.js": "0c9ef3a21d264e7e951a14cc9681e38b",
"main.dart.js_63.part.js": "ce0e60a68a6ce525aa822fa610b9544e",
"main.dart.js_86.part.js": "8964c5c8d637c115b6862d4a44036896",
"main.dart.js_311.part.js": "78e250143a67ee750ee1b48dda546237",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_237.part.js": "a055c351f70cbac2d47a4b0c245dfebb",
"main.dart.js_198.part.js": "a0c93486f6f1c41212fafacbb8b1b01c",
"main.dart.js_268.part.js": "16292c9d5ae1b9420d44a09036518ee2",
"main.dart.js_257.part.js": "e6bc7cd6834b10e968de4262620978e8",
"main.dart.js_188.part.js": "b0c8c85867611a30d4585c5e5336c31f",
"main.dart.js_310.part.js": "c7bbab24e9e6834d34e6d7e842500f0b",
"main.dart.js_299.part.js": "4ae4f156ab91219b37881d554f42d8f0",
"main.dart.js_238.part.js": "7c0d744cfd8bf925141abfdf80033d14",
"main.dart.js_151.part.js": "ff308f3764f3e018abe809707e464102",
"main.dart.js_304.part.js": "08c044a0f67d0b079b34bc2309232e25",
"main.dart.js_167.part.js": "6d8c025006a87f4f18af7dcffe551df9",
"main.dart.js_93.part.js": "5c9019da011949019fcbce8dda24d114",
"main.dart.js_68.part.js": "debceab45e785cdb802757f2ab0c5ba2",
"main.dart.js_212.part.js": "8dbbc365c92217cdece81d4f51d29362",
"main.dart.js_261.part.js": "603bc1f010cd76ad213ad3766d218fe1",
"main.dart.js_241.part.js": "14e897a8f8bbf4a9483c1dcd7cad3117",
"main.dart.js_249.part.js": "c779645339c007cb7881265dc39aa2f0",
"main.dart.js_13.part.js": "f69c61d40d79ba131053e1396516a593",
"main.dart.js_105.part.js": "24954958dab1d09aeada8d3199a18507",
"main.dart.js_178.part.js": "9b04935729edec245fe85b7b00c4366d",
"main.dart.js_66.part.js": "e4641b5ec04d03b21dab03a35a8d1b2c",
"main.dart.js_159.part.js": "c39bb9c7cec6c8412a788cbdefc2a1f2",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_302.part.js": "a3bab732c8937109367c32129785685f",
"main.dart.js_243.part.js": "666478c657d6d9bc4581e8b5b0d46558",
"main.dart.js_287.part.js": "64014a2c2daca1982b54ab99a874bfbf",
"main.dart.js_254.part.js": "f86f8cbd23fea2e3a1302524204f57ee",
"main.dart.js_166.part.js": "5a047240ce41c464ca280d0017e92261",
"main.dart.js_53.part.js": "54d2e2d783472776048692423cef9ce5",
"main.dart.js_209.part.js": "726cafe6c0b9685107bedec5a0118c0d",
"main.dart.js_216.part.js": "dc0360110e42a65826cae2c5caaaefc3",
"main.dart.js_305.part.js": "219387df351fbf7de98ca38b39cff5d9",
"main.dart.js_35.part.js": "b55efaa849103bcfda71d8fbe7ad054f",
"main.dart.js_111.part.js": "3856b9c3fe6c758f15286578d7934317",
"main.dart.js_288.part.js": "cb566f7a136fbafeb6b468957e7b9303",
"main.dart.js_160.part.js": "fd8c20047c8273de2a9d6b82d6020cc0",
"main.dart.js_253.part.js": "856d52ee2c97cff68496dcf43bd65a2b",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_202.part.js": "45c2d9401320c00847488329a4ffd4ef",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"main.dart.js_284.part.js": "478a4d513498eb1a49300021ecb18972",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_122.part.js": "a997f430fd1485012b4ff872497a6abb",
"main.dart.js_265.part.js": "68f78fff0c0b0f27597987bc96afae44",
"main.dart.js_187.part.js": "2cba80557467bca6d2c4a203c9f35b20",
"main.dart.js_217.part.js": "99f90629fd5ec4a6755a6332e91dd8d7",
"main.dart.js_36.part.js": "5bb5b175dc68561903d8c652d83befb2",
"main.dart.js_314.part.js": "d74da15664d8c43228cd0cd4fa51a76a",
"main.dart.js_88.part.js": "816d3a0fbe935e009a7aa6ce0638807d",
"main.dart.js_7.part.js": "5ec70790d7733818657fc76a88e6aba4",
"main.dart.js_40.part.js": "80fbf601ab510d1b1d3cfde151cba5d4",
"main.dart.js_141.part.js": "bc3a500617379b5bb480349b8dd696e4",
"main.dart.js_214.part.js": "a0aa58fea4aab8f30f8ba0bf48b7dd9a",
"main.dart.js_32.part.js": "7039c5d2c74d48c338be6dc5e788e062",
"main.dart.js_182.part.js": "2e8fb788956ee2b99db4b7e1526c7dbb",
"main.dart.js_203.part.js": "15fc1a5881215998888271b1443be95e",
"main.dart.js_100.part.js": "d901f0d4adb36af123641c30085d1ede",
"main.dart.js_10.part.js": "020ef0de79806c89872685b93a933732",
"main.dart.js_233.part.js": "abdc2a9c9e273c72e68c1f4f209e4626",
"main.dart.js_267.part.js": "cc5048fd4c846aecb387b43c4f1bb689",
"main.dart.js_248.part.js": "f8d4cd0ae940a486dad6742ed0cc00e2",
"main.dart.js_102.part.js": "e6fd68373c36b264eda9c35b862f6bd5",
"main.dart.js_116.part.js": "3ac6963e34acdeb8dcba0154a2e546dd",
"main.dart.js_312.part.js": "9b5d1f93b0d235a91d98fea80d763fed",
"main.dart.js_255.part.js": "e2c343b3dfabc4c2226d7b6e73113045",
"main.dart.js_18.part.js": "6a471ca7efabbdf9b7358711d82498ee",
"main.dart.js_31.part.js": "03443ffde134abf6a0044ac187717795",
"main.dart.js_59.part.js": "0fd70fb811ff356b9e8ddfe73cb93ba8",
"main.dart.js_15.part.js": "e1875ed23ed055562b1fd5d99537d585",
"main.dart.js_12.part.js": "245ad8164b503bae560e424959b55edf",
"main.dart.js_72.part.js": "07352d18a83df1c88b5be6bebe34b9d5",
"main.dart.js_4.part.js": "bd976efa192ba0250e14582a1d9e583a",
"main.dart.js_62.part.js": "9013d462b09245b0be91b753b2688591",
"main.dart.js_103.part.js": "32077c0775dbc919a4babe581021cf1c",
"main.dart.js_247.part.js": "624a6e8aa6c03f394e103f96f4d53f04",
"main.dart.js_79.part.js": "33f005dbad7cc2af97da0212f6f4aa61",
"main.dart.js_292.part.js": "eba19f40093103cf7156e9380f1fb461",
"main.dart.js_286.part.js": "f9813590bbe8bb105102ef9c25d0ac29",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_28.part.js": "acb54033d9c713fab7dd63ca39f9d92b",
"main.dart.js_99.part.js": "0295a167a0451dbf7b499ecdc128cb5d",
"main.dart.js_275.part.js": "7628a5ee6860a4e86b51603d3f6a915b",
"main.dart.js_19.part.js": "2c163adcc3d18508b5472d52ef7c2189",
"main.dart.js_282.part.js": "b2eb355c8d2e7ce0df5bf9c5fbc5dcfa",
"main.dart.js_38.part.js": "1777c12c82b6ff6bf71e0df532a68cb0",
"main.dart.js_20.part.js": "793ecaaa85c70b6c7f23a64ce4098043",
"main.dart.js_142.part.js": "c457edf34557db8d8d305962fa452fed",
"main.dart.js_135.part.js": "dedceca11c7e7d17deb0b2c0591db330",
"main.dart.js_193.part.js": "16e3a8d7d863765e4076f5ad93d8db74",
"main.dart.js_124.part.js": "12bb32f9b8265dd12190a15ea2072bfc",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_276.part.js": "bfbd466261e9c9ca2c3e644316388cb9",
"main.dart.js_115.part.js": "4cb81053f31d814f0d84fe7b4d9377d4",
"main.dart.js_294.part.js": "7a486cc4967a90c7aafc6d851eb8cf00",
"main.dart.js_133.part.js": "ff371870bb72300931caf421f1d29bb9",
"main.dart.js_227.part.js": "1db3614a4faa107a037fb7a352c51165",
"main.dart.js_165.part.js": "1d3034329cbfed96076f22b4c8d7d809",
"main.dart.js_117.part.js": "893860547f234ab512800362d65d893f",
"main.dart.js_92.part.js": "046468db023e00b5e5ce5e742b22361b",
"main.dart.js_17.part.js": "da7801a39cff8b79b27a619c780850b1",
"main.dart.js_27.part.js": "443e8f0cfd55856c0792f13719ac7c77",
"main.dart.js_150.part.js": "d0a8a8be3da9960bcc38aeaa9d42c070",
"main.dart.js_169.part.js": "bfa7f22ae27e746326148fed4d417479",
"main.dart.js_186.part.js": "d0a7558300f4dbed32ee760dca7431e0",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_8.part.js": "171becd8ee76edac584a37ed570905c4",
"main.dart.js_52.part.js": "5c4b4cab8f543ad1f19ae14555a7a9a5",
"main.dart.js_147.part.js": "ca49383ad29ae1c0994261d4b92fdbea",
"main.dart.js_9.part.js": "51d08d599ec0f7d95b2414564650962f",
"main.dart.js_158.part.js": "1c9eb1fbcfe1436d15821fae5b2c3d02",
"main.dart.js_121.part.js": "43db5dcc6f8eb27fd4a2d7dd8644ba7d",
"main.dart.js_291.part.js": "a966b895031c832eee97c8eef473fe5c",
"main.dart.js_154.part.js": "8a73ebbdb5e674a01eacfcf2dc0b8526",
"main.dart.js_145.part.js": "58557b842ad44977faaaae4018b655c1",
"main.dart.js_29.part.js": "83efc24ffade7b63509edfa70edd4cdc",
"main.dart.js_39.part.js": "eb7f0bba55585361b86aa626721fbbbd",
"main.dart.js_138.part.js": "1cea5d81b159ba0fef911fb8d8d0ed14",
"main.dart.js_123.part.js": "35164a11631e7037a00bd0a073794a26",
"main.dart.js_190.part.js": "24b1a6d35ca2f8a9b4c4285f4e702814",
"main.dart.js_236.part.js": "18f489a9eea3564a52ce17e91aa92444",
"main.dart.js_308.part.js": "bc3cdca542b22a70c2432cd522a4d066",
"main.dart.js_61.part.js": "ed717e930acf6a0daaf2b4f69dc6d21e",
"main.dart.js_65.part.js": "f903fc67ee0466c3afb94177eda7618e",
"main.dart.js_96.part.js": "5a15958bed4f937c2be75c178d71785f",
"main.dart.js_26.part.js": "de124d1c01c7b66c09f8e95f91660fbc",
"main.dart.js_146.part.js": "4fdf45840320de3aa54f79a47ae4ed5a",
"version.json": "1ef3f7ea073b19b518ea752aa8507607",
"main.dart.js_303.part.js": "e5cb5cbbf26fa1a5043c6ca49b06a485",
"flutter_bootstrap.js": "44f187ec6c7d1333626630334dcb83fb",
"main.dart.js_235.part.js": "0be6f22d67a3c346985e2cb3b2504960",
"main.dart.js_149.part.js": "62363a5b783cf1f143dae6d5330a8f65",
"main.dart.js_98.part.js": "1f6f4b20b40db41f21436c3dab4a1bbc",
"main.dart.js_48.part.js": "2649c1fed2c1e032f90dfb5815992844",
"main.dart.js_194.part.js": "0890ce33310b88ef9b14bf0da2ae0e4c",
"main.dart.js_264.part.js": "504759c232a2ce3ec4c851e523dd2c15",
"main.dart.js_127.part.js": "b941b2fb182edaa8512b8f98f111925f",
"main.dart.js_210.part.js": "7d8c75e389dcacb8193de46267c223e8",
"main.dart.js_164.part.js": "d1c0e11f8b9083380195489c67b9e9c3",
"main.dart.js_134.part.js": "d318a9877e90e0c86fb6f77d4ff0346b",
"main.dart.js_118.part.js": "cbe7754f2f38aff5eddf6dfd0bc4b51e",
"main.dart.js_256.part.js": "683b722fda10563ad8e9dd5cbe3702aa",
"main.dart.js_155.part.js": "55ba2be6c5a3b377ae2e5092faf70dfc",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_144.part.js": "eda4487ba7b5246d0b85a71e179f7106",
"main.dart.js_301.part.js": "6773d02cee95d31a148f46c099123259",
"main.dart.js_3.part.js": "a165de6751ed8358b6408b9f987365b6",
"main.dart.js_260.part.js": "33bc7e000e660f5293bcbaae684cf150",
"main.dart.js_259.part.js": "06c15016698a8c20153a565bdf8205d8",
"main.dart.js_223.part.js": "11a14a1b0b2d0cc86ad04c2b49496df1",
"main.dart.js_285.part.js": "ee5ac9434a6672ab1394e5cc8204034c",
"main.dart.js_25.part.js": "8fa35c24017c43e4ac414fd8269f4b06",
"main.dart.js_16.part.js": "c52291ebd3640854e38f9f3c328ef630",
"main.dart.js_229.part.js": "beee792eeb1eb9be1d85a7ada6a9b8df",
"main.dart.js_64.part.js": "7045b5412983942646190a1dcf51f967",
"main.dart.js_295.part.js": "4ba2c8e8e8feefc4388749d36b15448e",
"main.dart.js_24.part.js": "a4da886e20ae7ec83e016614e021412e",
"main.dart.js_279.part.js": "07b5573ab8a9cf0f9395bcd2fa44ec27",
"main.dart.js_104.part.js": "4d5f42fa50a89440b81809772db0acfa",
"main.dart.js_201.part.js": "3285bc9fbd940bd982f9066cfeee20ee",
"main.dart.js_91.part.js": "02797fc88ed390a5e092841604cbc43a",
"main.dart.js_174.part.js": "5d58f6c648cf28bbc5ecedf3b7206260",
"main.dart.js_306.part.js": "7507b40689a21d562224e6293bbf90fa",
"main.dart.js_97.part.js": "ae160f7cd152d9220bc13aaa66537fb3",
"main.dart.js_170.part.js": "fe0a0721e3b0673ec196b00e4e203272",
"main.dart.js_228.part.js": "b66ae30b5c6c5b6245177c418b2f9624",
"main.dart.js_74.part.js": "4dc04620f348d1bba55ed61b2b99a24f",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_168.part.js": "7a2bfdc15c94e62093638f32edb64047",
"main.dart.js_274.part.js": "2ef7d7f56afdc34ce485d05968a431b3",
"main.dart.js_289.part.js": "b55409c83d017683e1ce0432a6386e4f",
"main.dart.js_106.part.js": "1b0fcafddf6b83942bcb610555b7faad",
"main.dart.js_56.part.js": "f2b420bf97ae8ba000615a248bed269d",
"main.dart.js_42.part.js": "0a8f52ae0effebd2db46b69fb3479745",
"main.dart.js_44.part.js": "6c6a60234e542b02102e548bb640134f",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_244.part.js": "fb67fd3fbfdd7c9db7d9b769e3640589",
"main.dart.js_11.part.js": "c2b2006832ae0697e2f635449bfad341",
"main.dart.js_300.part.js": "c823003f500045fb37c6911f2a90b55f",
"main.dart.js_101.part.js": "d04a683a0ce682b8786d7e1349234bc1",
"main.dart.js_113.part.js": "c6ae8f5472702f2b0e1846e155cfebf6",
"main.dart.js_89.part.js": "77fe07d000071830ecb21035991d6bbb",
"main.dart.js_45.part.js": "50dc9121d4ce0cda2bef07041e0ba616",
"main.dart.js_41.part.js": "059c4b8b8a5d31f2b5d2aa01976aaea4",
"main.dart.js_231.part.js": "369e279907e9e26fb5f458cbb02081e4",
"main.dart.js_137.part.js": "8869cfd342882a2662ed8ba94068613a",
"main.dart.js_108.part.js": "e97222e1b5a17fe64fedacd429c4a1d9",
"main.dart.js_73.part.js": "26698c6c1d69f24ecc5a48f9280b8f02",
"main.dart.js_219.part.js": "6856d0770f5300808d19ade97578419a",
"main.dart.js": "ffe07d549b28d1c554ac3a5ac96dbb55",
"main.dart.js_83.part.js": "114d316e402cd49ba884471e5ebe87a3",
"main.dart.js_77.part.js": "d454148bdbf76fdeb58f5972370a0d9c",
"main.dart.js_298.part.js": "703fcfee7caf18ec641c2b8d10b6f95e",
"main.dart.js_2.part.js": "5f91e3f1ed444f46b7760082f6e83c30",
"main.dart.js_94.part.js": "7f1ca2d47d3039d748da12ed9e525e4c",
"main.dart.js_273.part.js": "956b1a9916407f964525912c3bf293f2",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_37.part.js": "8029550797f8ab3c31a0cfb98d19e3d0",
"main.dart.js_252.part.js": "b3ea761dae995a82d5f51a32c74945d0",
"main.dart.js_136.part.js": "9509f1958a2cd62e08b18852a66f5d82",
"main.dart.js_110.part.js": "14f02d436655e794bc47702c22b8e74b",
"main.dart.js_161.part.js": "2fe468ca6b94c7b89dd9d5f8db0768da",
"main.dart.js_232.part.js": "2ec8c0090e6c3fdc604a7e2e52713b1c",
"main.dart.js_143.part.js": "1e9009fbe383083fcbbc2b098269f3d6",
"main.dart.js_23.part.js": "912a73b5e5be13ce3f2d01975c13d71c",
"main.dart.js_90.part.js": "edf512540255f0b99a39e46206c5482d",
"main.dart.js_107.part.js": "ca6096c0a2ae103abcc07cc74deef179",
"main.dart.js_215.part.js": "01226163dbd86cf0dd91f692226fa749",
"main.dart.js_191.part.js": "077bfc00d06cf433efa2c73c38e45621",
"main.dart.js_175.part.js": "7bdf32ce15c38567a1ae73ba1ca746f5",
"main.dart.js_281.part.js": "254d0531ecb11db946406475ada842ec",
"main.dart.js_180.part.js": "afd4787f1360f08b43f0959fc3523952",
"main.dart.js_95.part.js": "9fdb8af65498a9a7a59fbc20aabc66cf",
"main.dart.js_30.part.js": "de4aa9b38ebca85d7b521479ed333dd4",
"main.dart.js_309.part.js": "895c01f6b36681d45c05d4ee1908b086",
"main.dart.js_313.part.js": "96f760b7306ec48376c1d0eb8571551b",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"index.html": "711311aa2349f3292ac0d22a8e95302f",
"/": "711311aa2349f3292ac0d22a8e95302f",
"main.dart.js_271.part.js": "c8207f8d995c4c07fb192408ecdce433",
"main.dart.js_58.part.js": "3fb897a7d94f31358d5842079a63f27d",
"main.dart.js_200.part.js": "38f5bd6caa47b0284728ce7e545b6ab2",
"main.dart.js_1.part.js": "bc1824a5b26aca50d97c52beef5517a1",
"main.dart.js_131.part.js": "f78808deb9ef55fe10d866afe3bea6fb",
"main.dart.js_307.part.js": "b18bf5c61df5df5a018e6da84a781878",
"main.dart.js_283.part.js": "b40a9fe088e257050116a9c74eb237cb",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "1e382be952a290c295152d9c00aeda81",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"assets/NOTICES": "9c3b9cbaaf54fceb905b5fbd59c8688b",
"assets/assets/translations/de.json": "d8339af262142bd3b7583326d693f3e6",
"assets/assets/translations/uk.json": "7f8e394226cd7667b3671a3e3cee5efc",
"assets/assets/translations/en.json": "07ca88821e51c5affeec1b28292fe623",
"assets/assets/translations/sk.json": "8bdc79873b5db8f71d80926134b4b237",
"assets/assets/translations/pl.json": "67e4fad90546fd73760a99e253b9bde0",
"assets/assets/translations/cs.json": "1db4e6fb3294e8871905a2ae90ad39d9",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"main.dart.js_157.part.js": "6d46fd046d396e3f77843410180d3bd2",
"main.dart.js_185.part.js": "fcf949f1d938fdd8e82332bc43f92031",
"main.dart.js_21.part.js": "24c76984eff9e5c715e75917a32b009b",
"main.dart.js_221.part.js": "ceb240e9ac93a0259115dadc99018bd1",
"main.dart.js_297.part.js": "7716208822154d7b5c133161c42cf3b8",
"main.dart.js_196.part.js": "0891772b7cec6d75a40bc92eca4c1a73",
"main.dart.js_76.part.js": "f75148af7a0d7948f716b23a793e1b92",
"main.dart.js_54.part.js": "eabb496a0fa4154135a4b990778c389e",
"main.dart.js_148.part.js": "c532a41d7269fb57f2654b1f603ee951",
"main.dart.js_293.part.js": "a4b9cfa8768f28192d2d472b131e3eb3",
"main.dart.js_192.part.js": "ad4d06db73efa457b692c219bf3897fb",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"main.dart.js_55.part.js": "363367aff8ec97538a2ba4cd0cf27406",
"main.dart.js_240.part.js": "6f482f05ee19c5dca37a3271522e2999"};
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
