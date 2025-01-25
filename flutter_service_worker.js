'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_114.part.js": "2bf6d966453e77fd7f60612766d46bee",
"main.dart.js_181.part.js": "66cf27f617ec5250362f94c9b4534eef",
"main.dart.js_296.part.js": "b99a34490075d3f4aad9fce698ae27d0",
"main.dart.js_278.part.js": "fe98049b280b910c9870d80c758817bc",
"main.dart.js_317.part.js": "4bca30253ce7dec0734afd333a28124c",
"main.dart.js_189.part.js": "6074def69446555a5f15981123994031",
"main.dart.js_140.part.js": "85463d68e73132dbfee8649d4cd58924",
"main.dart.js_112.part.js": "21bb7a4bf92231a761376dad0ee2bffe",
"main.dart.js_318.part.js": "7e7db559cdb7fac4c4041f3e8a53a736",
"main.dart.js_33.part.js": "e3ca520e746a9ef49195793920df6847",
"main.dart.js_152.part.js": "00b576704923667ac46ff0e6168feee4",
"main.dart.js_272.part.js": "eccb1aabd90d9dd71a54435685c3ca58",
"main.dart.js_199.part.js": "c65633cb1fe60da6becd5f259ae2dd86",
"main.dart.js_156.part.js": "e6f608fb124e86736ff88799758c04db",
"main.dart.js_213.part.js": "f7d90b1eb6f2763da9b8b015c8b3caed",
"main.dart.js_225.part.js": "edd604b230fc640f99a78c32e76ac3f8",
"main.dart.js_239.part.js": "e26b4c08b9b159a341c72da04bc5e770",
"main.dart.js_80.part.js": "2a81d19fd06c37e0cb5bbb86ef3b7403",
"main.dart.js_266.part.js": "0a2bb83c3f61446cc70c98771c1c70fb",
"main.dart.js_270.part.js": "0a3384203027175880d2b053b572599d",
"main.dart.js_132.part.js": "58dad21f43f4e1a57a31ac1ac39a6042",
"main.dart.js_50.part.js": "40f9368fb450d50883c849e40733438f",
"main.dart.js_70.part.js": "0317969495992bdad49f2b1952e59eb6",
"main.dart.js_139.part.js": "27a569551e43cffc56084e378583ec4f",
"main.dart.js_206.part.js": "2ca377e0b2709f9ae4fefcaa48b1cda6",
"main.dart.js_86.part.js": "245a1e6c13867d699e96f078f87b6780",
"main.dart.js_311.part.js": "f998240824d9c61c3f424c64784c06d1",
"main.dart.js_119.part.js": "14d9b9871e6cf1948672c9416d345092",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_237.part.js": "6ea93551deb115d895cf7c99dcd42fb4",
"main.dart.js_198.part.js": "1394a0201d13ba55266068fae7b70782",
"main.dart.js_258.part.js": "443f77d48c3887db5b19d7f95ac7cc5f",
"main.dart.js_188.part.js": "980712e6c28022a939590d4f2e83cc2e",
"main.dart.js_263.part.js": "082bec45cec8071f1cfe3a88b46e2712",
"main.dart.js_310.part.js": "0270664dfbcf1fc47fb1bc6123eef21d",
"main.dart.js_299.part.js": "a9953be2afafa5179faceebf923c31e3",
"main.dart.js_238.part.js": "00f3a98b0fe2710dd54f6a19fb23fcad",
"main.dart.js_151.part.js": "7e0db5d05f303906b04eceb444f1a053",
"main.dart.js_304.part.js": "3692aa3e5fdb11c11b2694c2b6063a6c",
"main.dart.js_167.part.js": "5980b778543889e8a49ab4511cf1d855",
"main.dart.js_93.part.js": "e2f9eabdb342b21e6caeb0c40a54cbe0",
"main.dart.js_230.part.js": "5e0f668679b1264564379cdd974adc45",
"main.dart.js_212.part.js": "e8293acc7de7cfee63a2ee97a2519184",
"main.dart.js_261.part.js": "fd8b4283bdb272929076b555d5d4362b",
"main.dart.js_241.part.js": "470a1cb039948ea06e44dff47ccf2daa",
"main.dart.js_13.part.js": "c4a151f4aaedcf8b33afc535ad3b6e96",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_302.part.js": "50364272075f9098c112058acfb5aa1f",
"main.dart.js_243.part.js": "78592f078ff753d4d8b01c0091e7fc94",
"main.dart.js_287.part.js": "cceadb1ba278830a5d2af5238a0fcfdb",
"main.dart.js_254.part.js": "463a5734b685990b170382b1fdf4ef78",
"main.dart.js_166.part.js": "b9458000efc012aac8aba618155e56ad",
"main.dart.js_87.part.js": "33d1353ee450e0e071d853d9a38d5c58",
"main.dart.js_172.part.js": "5e0d8a2674344310094904148a4a9d39",
"main.dart.js_216.part.js": "c8bcdff9486dae0e85debf2145095e9e",
"main.dart.js_305.part.js": "7e8be5a22128f894ebb17f7ff1be9805",
"main.dart.js_35.part.js": "203eac8b71612913fc47bfe4af214647",
"main.dart.js_111.part.js": "425552db353532e2ea64509d56945558",
"main.dart.js_288.part.js": "1b327fdc0ad9d81f3c19986617c2bf32",
"main.dart.js_253.part.js": "1a7a25cbc934065854079418c34f7685",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_120.part.js": "8d9ba89d45f35a00ec5ad8a2098700ac",
"main.dart.js_208.part.js": "45972841532eeba422d22141e7171e27",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"main.dart.js_246.part.js": "962ab709196e8f8bb69b4ffb831cec84",
"main.dart.js_284.part.js": "72ef08dcf90bb827da46c343c2d4ec5f",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_265.part.js": "c60852e85767921cd2c5d9c48de92fef",
"main.dart.js_187.part.js": "3cbc216ae0a8d607c90f95ae68a9393d",
"main.dart.js_162.part.js": "5338fb987c314be599fd251d21894ec4",
"main.dart.js_217.part.js": "26daeebd1ffd36c3ae5962e21eaa2cb0",
"main.dart.js_36.part.js": "4c3f32c8590fe2e5dc20e6a5db63cf39",
"main.dart.js_314.part.js": "63e1529ff64723e42b3982bb20da1a7c",
"main.dart.js_88.part.js": "143f842913ab1f1dd3e7fb4e93d92c74",
"main.dart.js_7.part.js": "bf872c04d5880a8e0803971e94ff41e8",
"main.dart.js_69.part.js": "49f9b7f4ea37be7e835bf82e51f52216",
"main.dart.js_49.part.js": "c0f77bc72ca91588f765faf89212eb68",
"main.dart.js_40.part.js": "65d21e65d1fe950d3c6fc5f4042e81e7",
"main.dart.js_141.part.js": "17a8e134df9414c3745145a379398bb0",
"main.dart.js_250.part.js": "795e62070c04ea95450d69d1db039918",
"main.dart.js_32.part.js": "8a4ba89f3d4a114d1fe96caf9136d0d9",
"main.dart.js_203.part.js": "15a32821858da25b21782b3ecae44560",
"main.dart.js_100.part.js": "010288a813deda032e2df832a8cbda1e",
"main.dart.js_10.part.js": "0dff0e294b23bc634a3bfc9ffd0168a3",
"main.dart.js_109.part.js": "08bea2ef27dd07c3b7bc467809c38137",
"main.dart.js_267.part.js": "6315263faaebabee84ff764099f99cec",
"main.dart.js_248.part.js": "8719427c76ff0d2b4218798f881b6dc2",
"main.dart.js_262.part.js": "cad618aec5a2fa64e282583c17546507",
"main.dart.js_102.part.js": "897e358b703c96971c3c13ea12fdfaf3",
"main.dart.js_82.part.js": "08e24d5828fdf7a9e865125a3dd31390",
"main.dart.js_312.part.js": "683f34659d390e936d12b2c9fd264cd5",
"main.dart.js_222.part.js": "32f04d1f64c1713e1de0510ecc3f1575",
"main.dart.js_130.part.js": "9d5a3b0ad2a707091dbacda75ced5455",
"main.dart.js_255.part.js": "530f8d8d9b7c09feabcc86585cacdc19",
"main.dart.js_57.part.js": "321f6a81e114c362cd0ba9676f8deeaa",
"main.dart.js_18.part.js": "3d7e48361e7a9cb3aa86b733becfb7c3",
"main.dart.js_31.part.js": "b552539c925d8848428e4ed3ab2ac30d",
"main.dart.js_59.part.js": "0e5a99e5c4c933548eaa1735f6aceccb",
"main.dart.js_15.part.js": "bf50b45baf4907a1d84c3d5a698b6fb9",
"main.dart.js_12.part.js": "1b14f5cace2a2021d80c791cb5504734",
"main.dart.js_72.part.js": "dd7a090cbd00dac3fbe97de3c6bcddd0",
"main.dart.js_4.part.js": "80606fc7aec54bd3dbe3eb3ff7298592",
"main.dart.js_62.part.js": "4dacdd08efb4dbd925b265a69d2702e6",
"main.dart.js_103.part.js": "cbf2bf62bfbb791349111e719cb9ce80",
"main.dart.js_60.part.js": "b6718534b3df1699f95943d4d4a9f594",
"main.dart.js_247.part.js": "f5e63514eb7a28d9cbebbc37519083f9",
"main.dart.js_79.part.js": "36bdb7652b896bb35e1b602ffea22726",
"main.dart.js_292.part.js": "76ca84d952e436f86919f82b3a9ec335",
"main.dart.js_286.part.js": "91782d0c4c6b5ad8588193c00c8cb488",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_28.part.js": "a39512639abbb237d7118141326a629f",
"main.dart.js_99.part.js": "fae0bd40c93849f4ad42b1be84f27e89",
"main.dart.js_19.part.js": "90f836c00f99463abd234d8dd098a077",
"main.dart.js_38.part.js": "94e71fbb83cdfae229e9883bcb143932",
"main.dart.js_20.part.js": "a25d0a6f71930cd437198a7be8f10bc5",
"main.dart.js_135.part.js": "27f6f70fa0003bf38ff779aff6eb851c",
"main.dart.js_193.part.js": "77e1482340061a5d98823deb8f3ff530",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_276.part.js": "7d7070bec137bbe379a99d94fdb5cc3a",
"main.dart.js_294.part.js": "b63aa01aa8f0c28ceceb13c1b4a0af3e",
"main.dart.js_133.part.js": "9343ab76a93198c3395fb6ffca6b3907",
"main.dart.js_227.part.js": "ea625c716b1225ac2720978300a99345",
"main.dart.js_165.part.js": "dcaec3bac78c9988d0393e5687a04f5b",
"main.dart.js_117.part.js": "6fafab2c58847065152633d34ae28d01",
"main.dart.js_92.part.js": "d5c467b69ab5fbda905b0699077ec4cc",
"main.dart.js_17.part.js": "a39f2eebed8891f7e9eb4a41c68b1db2",
"main.dart.js_27.part.js": "7917e8656f523b9e17af26b00952122d",
"main.dart.js_186.part.js": "1aa0142947fd9d191c24db6a88a5bf5c",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_8.part.js": "f575bded6011385c7f75e07b87aecc0d",
"main.dart.js_129.part.js": "e7c066fc23fe0de1786562d786dad078",
"main.dart.js_218.part.js": "48d36fab0ea9ea4464c63a01b51418fd",
"main.dart.js_52.part.js": "18801b2570f45e0d9dfaa80645b574e7",
"main.dart.js_147.part.js": "429203bd48263e73e5cf87a91196386d",
"main.dart.js_128.part.js": "6c06f0c607f804362f7fbcd10b9de048",
"main.dart.js_9.part.js": "85783efd655bb6cddad46578e15774c6",
"main.dart.js_158.part.js": "682dd58f36f19ea6bac9ed788bf8b2a9",
"main.dart.js_291.part.js": "1e16f2e039cd3180aa4535e46399a6d6",
"main.dart.js_269.part.js": "0a8e2e2ee13915bfe77a483eb595a007",
"main.dart.js_85.part.js": "2905bd62e3f2e3eb770b94425add8980",
"main.dart.js_154.part.js": "cd29cd1007049fe41eea960179e13adb",
"main.dart.js_145.part.js": "35ad65cb7440bfeee142949f12514785",
"main.dart.js_29.part.js": "e60409a31d8229480960004f11cd6419",
"main.dart.js_184.part.js": "f2506a6d180f24571fdfe635b96d7a34",
"main.dart.js_319.part.js": "0a0354c6d7745727dc3fb75145add850",
"main.dart.js_138.part.js": "cd88a17270f5b7702761e66a3b2a4c4e",
"main.dart.js_123.part.js": "be30fef5a02c845161067162e4f5b604",
"main.dart.js_190.part.js": "9fbb0b66453e6d81b10c48fc1b75027b",
"main.dart.js_308.part.js": "99be0a6344b5bfa16ea928a544a33d7d",
"main.dart.js_61.part.js": "de7cd9827fe90e6a9dd6960b89acc700",
"main.dart.js_65.part.js": "be6c01bf260eef7618173aca5c7eb72b",
"main.dart.js_96.part.js": "8564a19e100a1cf32fa095e274f6370b",
"main.dart.js_26.part.js": "dad18433e9b1ea66476355f4e634bfe3",
"main.dart.js_146.part.js": "30135d0811c4bd8db6ad0d1fbf3f7d7b",
"version.json": "1ef3f7ea073b19b518ea752aa8507607",
"main.dart.js_303.part.js": "1431ffbe99ee60839e1d53b6cdf342c3",
"flutter_bootstrap.js": "255ce91edb832e2c1e8c00772bb3d3a7",
"main.dart.js_235.part.js": "771b800dc05c877175994ca499edd258",
"main.dart.js_149.part.js": "2d9d151435c12fe643b467e7a4bea7b9",
"main.dart.js_98.part.js": "f97e96d35e55e5203421c8f5c8cd9990",
"main.dart.js_207.part.js": "67a4fd0ce3eb76ca6b53334e08c48fca",
"main.dart.js_48.part.js": "9e78f5d7da2021ce3a2dcee6d44656a2",
"main.dart.js_127.part.js": "dd90949240678067ae81c17d389b2994",
"main.dart.js_164.part.js": "303397ed14bffd46d0798ceb6baac784",
"main.dart.js_134.part.js": "63f731e6bc650dea7b65f0d59fab9713",
"main.dart.js_118.part.js": "738fc220498d2ddd07750230d773f6c6",
"main.dart.js_163.part.js": "2e488795123ead1824a614eba463603b",
"main.dart.js_155.part.js": "2bb293ffa89ec31c8f6f7f51f1836318",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_144.part.js": "fb4e9dcc79e1e10011f0f844275f58db",
"main.dart.js_301.part.js": "d98062df76d825e06baec0411879bd5f",
"main.dart.js_3.part.js": "f5c1db447015e45cf4f7ba701efb9d4c",
"main.dart.js_195.part.js": "0db70f24252579b92ace617cccfd3795",
"main.dart.js_260.part.js": "08650aed1fb6b28ea8ce0ed4676aa6c5",
"main.dart.js_259.part.js": "cbdb39595e6b732f3cd782a3b57f065b",
"main.dart.js_223.part.js": "edb16dbb9e52cfb079f33fa8e3805eda",
"main.dart.js_25.part.js": "504d81f2197a06ff68e0e7b948e1f360",
"main.dart.js_16.part.js": "e4eb003aba3e318940ec87690abb0e7c",
"main.dart.js_315.part.js": "b1801fc0b51de2fe5d784de06fd88478",
"main.dart.js_64.part.js": "2b699bddb8017bbc0a6b2da5352cb293",
"main.dart.js_24.part.js": "7565472cc5c8b6a1968dec08afe47a96",
"main.dart.js_279.part.js": "e09dd09942ddc697d5b383719df5cf11",
"main.dart.js_104.part.js": "d738ec1a636ee590bc0df71f77a294b7",
"main.dart.js_316.part.js": "ad37bd3cea2c43cbbfe15d49e46b206f",
"main.dart.js_91.part.js": "7d9394c51358e1da6dcc8d71795aca0d",
"main.dart.js_174.part.js": "f8ecfc488bcff89dc00f9a12ce77423e",
"main.dart.js_290.part.js": "dc6fe0f378af3319c2c8068a5fac5252",
"main.dart.js_306.part.js": "ab11a2eef4af40d7b744cbf99293252f",
"main.dart.js_97.part.js": "ce6fead68ba413f29493e744a936fc49",
"main.dart.js_179.part.js": "cd05ab4d692a7215b6c38bf70553142c",
"main.dart.js_228.part.js": "a0f1a896a0ee2f8cfb4b7e2eb8900a8b",
"main.dart.js_211.part.js": "abc5438746ca8bc25bd0940ddf068c3f",
"main.dart.js_224.part.js": "9b9ee43640ecd739bf63d5b8c438ce38",
"main.dart.js_84.part.js": "7a7f96810ab0fefcc01187e13b64ba1e",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_245.part.js": "372ab83168e915ce6e30ded3ac0a234a",
"main.dart.js_168.part.js": "c29422de52dcaf9049c7658f5ed6f615",
"main.dart.js_34.part.js": "92968ac36f0e80b4f546eda3bbe06cd4",
"main.dart.js_289.part.js": "87b6001c6248d076209ef0b27c8dea44",
"main.dart.js_106.part.js": "ef820b41756369198966f0ff34ed175a",
"main.dart.js_44.part.js": "05d0c907556ba5d4316a4719396a096b",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_280.part.js": "b7661aff89bc981c6bca238e47119799",
"main.dart.js_244.part.js": "2bcc72ffb365825d7ff85ee038a332fc",
"main.dart.js_11.part.js": "4840bea5ccae6e36c6e538f4ea21ba89",
"main.dart.js_300.part.js": "85ffae48e8fd6a65e757707793d48ab9",
"main.dart.js_101.part.js": "17a25e9e4a553a9cc9004e56844573f7",
"main.dart.js_113.part.js": "9eda665f29a7b08983efb7f67cc9302d",
"main.dart.js_89.part.js": "15cd7e63d9f65a7ca15d2f405b778801",
"main.dart.js_41.part.js": "a96ccf32a2425bc7dce1e0d4c347c0c3",
"main.dart.js_137.part.js": "e152eaea73d8ac26541c66542673dbac",
"main.dart.js_108.part.js": "4bddf17ff125c39f8ff17d18ed7bd174",
"main.dart.js_73.part.js": "de3a4ffd1fb35d07e7448765e9bb2b03",
"main.dart.js": "94c52efc548572d462ffd1e725f6c0c9",
"main.dart.js_277.part.js": "060c6a82d1aac91db2f7458eab221e6a",
"main.dart.js_298.part.js": "55f576c0a619e049169b49a7664e0aaa",
"main.dart.js_2.part.js": "d24af9af75ef9f4b2c717b78d314d4e8",
"main.dart.js_94.part.js": "f41ba758aa5cce1efdfb1aa3761e3f3d",
"main.dart.js_273.part.js": "194065e653ba1513ef51dfa75b9ffca8",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_37.part.js": "6ffe1def1ad5128d74b06cec4494b38e",
"main.dart.js_136.part.js": "1c34231bc62d0ec2e1717a4424614d63",
"main.dart.js_234.part.js": "cc306d3b1faa9bcd07f50aac3e94d674",
"main.dart.js_51.part.js": "86721de94b480cd27d79278acaa4a552",
"main.dart.js_110.part.js": "4a6fc589329e4fc008a0bd7195e86200",
"main.dart.js_161.part.js": "9d271fd48e8e1f816f58d0e309d315bf",
"main.dart.js_143.part.js": "e1013e348169805379f873400d53a235",
"main.dart.js_23.part.js": "cbe3fb40312f090bc59eb8543d41b494",
"main.dart.js_90.part.js": "c4a72712a360c71612b4aaf1c6a1cc2c",
"main.dart.js_173.part.js": "ebdf86b5d8659b6943019e5dc3b2a19c",
"main.dart.js_107.part.js": "4038a8e9c9777b35c01b2a70eb5c7413",
"main.dart.js_215.part.js": "e04ce47c17b8edef6371ad3918344705",
"main.dart.js_191.part.js": "645e47fef229a02839b8bfa6cd50fee3",
"main.dart.js_281.part.js": "6c6c508b31d4dd5e88e86639fe7af3ec",
"main.dart.js_180.part.js": "b16cc3c14119d7b9a8ce2502947f2692",
"main.dart.js_95.part.js": "069ed5f52ca9f35dd14f190f15d8ba03",
"main.dart.js_30.part.js": "19b73e4ae116e9c44aef4a60fafdc9f7",
"main.dart.js_309.part.js": "f9d1287323c584ce2fb9314be3707d42",
"main.dart.js_313.part.js": "5a038f5b966ad7bfd7d48e154cb347eb",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_204.part.js": "154a19d7935ffac8ada1d2120e6e8181",
"index.html": "0c854ba1fccf3010924f13d5b13363a4",
"/": "0c854ba1fccf3010924f13d5b13363a4",
"main.dart.js_271.part.js": "c129b41ed1f4469c52575e26410b37f5",
"main.dart.js_58.part.js": "534cc797f35908c2b89edff8d8fb3071",
"main.dart.js_75.part.js": "1b7dbc56c18c2bbf384962cb9546363b",
"main.dart.js_200.part.js": "d96b7df952ac2b30e02a703f1d6b471f",
"main.dart.js_1.part.js": "115b1069a8cc4d4af79c2301c2adb3f0",
"main.dart.js_197.part.js": "c27fdc7bce87ed4cd0476bbaf8204f22",
"main.dart.js_131.part.js": "0811d2b01530e4f2d412ab2c5e4e89eb",
"main.dart.js_307.part.js": "599b8b405bf685fdc8a745a16206d2b3",
"main.dart.js_283.part.js": "7e7a41daf5d95c1e06772fc2b5457169",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "8734943a3ff7fd877a4f44cb14ea2113",
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
"assets/assets/translations/en.json": "d83a61f3931bf7db4632e085487f2978",
"assets/assets/translations/sk.json": "8bdc79873b5db8f71d80926134b4b237",
"assets/assets/translations/pl.json": "67e4fad90546fd73760a99e253b9bde0",
"assets/assets/translations/cs.json": "75ed53731ff8322f9b37f26310fc71dc",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"main.dart.js_157.part.js": "1cb066a89e9d5009732df8c533ba8059",
"main.dart.js_185.part.js": "e47506e13c316b9f9840abb68619a8ba",
"main.dart.js_21.part.js": "140b89d1c39c7c02c70e172fa5720a5e",
"main.dart.js_177.part.js": "e8e7a383ae127c83d3959eb2f2e448fb",
"main.dart.js_297.part.js": "0be894afff5902ddd3818b795aa12b36",
"main.dart.js_54.part.js": "842e8d577b66d482fc577f6ffeee4a88",
"main.dart.js_148.part.js": "01fb32af534190a4ae47d6025f515f81",
"main.dart.js_293.part.js": "2d7ebda967cd2be7966572746a1462da",
"main.dart.js_192.part.js": "87e20e6e533e23d27a05a9aa1d4ebbce",
"main.dart.js_220.part.js": "f9ae40ecd5a3bf1fe20d30d2b3982514",
"main.dart.js_242.part.js": "4e9c67d598562b9dd2cf0e26e40afca8",
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
"main.dart.js_55.part.js": "3d8b45b74a86c8875c7518702170ec33"};
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
