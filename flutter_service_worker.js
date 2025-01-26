'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_114.part.js": "5cefa97c4646eb18859d89a230635e1d",
"main.dart.js_181.part.js": "66cf27f617ec5250362f94c9b4534eef",
"main.dart.js_278.part.js": "2f4b4c1bcf6779454bfd7b851a48801e",
"main.dart.js_317.part.js": "296e16ea9fc70401cb5d7d39ac893708",
"main.dart.js_189.part.js": "648583e20ece5ca5b21473cbfbc8b900",
"main.dart.js_140.part.js": "85463d68e73132dbfee8649d4cd58924",
"main.dart.js_112.part.js": "4507e5675bb8b6fc473c0acde6262c37",
"main.dart.js_318.part.js": "0734f99a5f5ed26dc5e787f35ad3197b",
"main.dart.js_33.part.js": "fecd70877c4285f61943d499a36c869c",
"main.dart.js_152.part.js": "ee0a528152dbac874b4304463d60717c",
"main.dart.js_272.part.js": "c8af81cc9e0bf97230a482a941f9415c",
"main.dart.js_199.part.js": "88e2a2f88f8315276e8dbf06103d286f",
"main.dart.js_156.part.js": "e6f608fb124e86736ff88799758c04db",
"main.dart.js_213.part.js": "8f2bad84c2258c76834fb5679f949b12",
"main.dart.js_225.part.js": "edd604b230fc640f99a78c32e76ac3f8",
"main.dart.js_239.part.js": "cc41e686247baa090945a962942a65f9",
"main.dart.js_80.part.js": "2a81d19fd06c37e0cb5bbb86ef3b7403",
"main.dart.js_266.part.js": "0a2bb83c3f61446cc70c98771c1c70fb",
"main.dart.js_270.part.js": "0a3384203027175880d2b053b572599d",
"main.dart.js_132.part.js": "f0a09972871e0b0c41e2f5e4184d911c",
"main.dart.js_50.part.js": "4e102452861a9e530db3f7bea5fb3bd2",
"main.dart.js_70.part.js": "177b1854b0fedb43956691cb37606081",
"main.dart.js_139.part.js": "27a569551e43cffc56084e378583ec4f",
"main.dart.js_206.part.js": "cdb659daeea18fb73255b97cc44073f0",
"main.dart.js_86.part.js": "245a1e6c13867d699e96f078f87b6780",
"main.dart.js_311.part.js": "66c4f6103ae33de6d35c4c2c9288eb89",
"main.dart.js_119.part.js": "f0a8e947e8b6d2445301ad128b6d46f8",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_237.part.js": "3589760009726b9e32b1180a8f4ec0e5",
"main.dart.js_198.part.js": "1394a0201d13ba55266068fae7b70782",
"main.dart.js_258.part.js": "443f77d48c3887db5b19d7f95ac7cc5f",
"main.dart.js_188.part.js": "980712e6c28022a939590d4f2e83cc2e",
"main.dart.js_263.part.js": "391dde047bd236e5c84288317d6c34f5",
"main.dart.js_310.part.js": "cc3bad30310b00554906118cbbc42df1",
"main.dart.js_299.part.js": "a9953be2afafa5179faceebf923c31e3",
"main.dart.js_238.part.js": "7fc59eaeb5b5e7de768e4c26a0d4114d",
"main.dart.js_151.part.js": "939d4b09ea4714ae5e74edeefb0fc1fa",
"main.dart.js_304.part.js": "4c1650cd73edbaad23d79cf03a813051",
"main.dart.js_167.part.js": "5980b778543889e8a49ab4511cf1d855",
"main.dart.js_93.part.js": "6978c6518a88f8dbf1a1e018ae855720",
"main.dart.js_230.part.js": "2f2c08adc74ed6692aa35234dc805fe7",
"main.dart.js_212.part.js": "858b75b9bc867e93f46f143196bb8ec8",
"main.dart.js_261.part.js": "7edf2716d7a2da5b51a8adff955f30ff",
"main.dart.js_241.part.js": "a4bc0c3dfd666a623ca7c14359a041ee",
"main.dart.js_13.part.js": "cc50a1f951185919f3dc18d449986488",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_302.part.js": "922bf2f4ee74df7c1c0bd1159d011b18",
"main.dart.js_243.part.js": "1293c3988f961dd7e37acccd4a65b89e",
"main.dart.js_287.part.js": "cceadb1ba278830a5d2af5238a0fcfdb",
"main.dart.js_254.part.js": "463a5734b685990b170382b1fdf4ef78",
"main.dart.js_166.part.js": "b9458000efc012aac8aba618155e56ad",
"main.dart.js_87.part.js": "33d1353ee450e0e071d853d9a38d5c58",
"main.dart.js_172.part.js": "5e0d8a2674344310094904148a4a9d39",
"main.dart.js_216.part.js": "9868854b12a185dd8f14c33599193f5f",
"main.dart.js_305.part.js": "7e8be5a22128f894ebb17f7ff1be9805",
"main.dart.js_35.part.js": "52158eee8205e5aa91795a22d0658f2b",
"main.dart.js_111.part.js": "425552db353532e2ea64509d56945558",
"main.dart.js_288.part.js": "df4a0c47260aead318b7d6f510b9fa6f",
"main.dart.js_253.part.js": "a9a724e7a493bb78f484ba95ad671336",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_120.part.js": "449bbed657c1f04783eb3672c5b78806",
"main.dart.js_208.part.js": "45972841532eeba422d22141e7171e27",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"main.dart.js_246.part.js": "962ab709196e8f8bb69b4ffb831cec84",
"main.dart.js_284.part.js": "c5d5e6a515c7d51e41c292f9b282a52d",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_265.part.js": "c321827193521a81539d18ddf49a5a9f",
"main.dart.js_187.part.js": "a232053497642d5d84f22d5661a8beef",
"main.dart.js_162.part.js": "6d9e8926317321631c3fa087d600a5bf",
"main.dart.js_217.part.js": "bbd03747d86bae7758bdd0a824b075a5",
"main.dart.js_36.part.js": "4c3f32c8590fe2e5dc20e6a5db63cf39",
"main.dart.js_314.part.js": "803bdfca2672386fbc7ed65933fc73d1",
"main.dart.js_88.part.js": "143f842913ab1f1dd3e7fb4e93d92c74",
"main.dart.js_7.part.js": "bf872c04d5880a8e0803971e94ff41e8",
"main.dart.js_69.part.js": "ac96827e6b60b7000862a9c1c20453e6",
"main.dart.js_49.part.js": "8c967f9248a370647e9955764371f864",
"main.dart.js_40.part.js": "4de54645d0db8cc6bce965347fabefd5",
"main.dart.js_250.part.js": "795e62070c04ea95450d69d1db039918",
"main.dart.js_32.part.js": "8a4ba89f3d4a114d1fe96caf9136d0d9",
"main.dart.js_203.part.js": "613228482c7c83bf8b6ad0ee82446003",
"main.dart.js_100.part.js": "4dbf286388d17601e28eb126f5536bf8",
"main.dart.js_10.part.js": "4590b08837880b6f8d6b9ff13afc806f",
"main.dart.js_109.part.js": "e3f55edc8e19a97412d822e667895f3d",
"main.dart.js_267.part.js": "0c4ac79d5c7d04373062e5c1d5a55aa0",
"main.dart.js_248.part.js": "158eff6ae381caf3e1ed3b15e8cfbf10",
"main.dart.js_262.part.js": "563254a71fe3af676c5d6405e5e51047",
"main.dart.js_102.part.js": "6f2e1401721dc2f34b4c3e3fa8caa3ee",
"main.dart.js_82.part.js": "08e24d5828fdf7a9e865125a3dd31390",
"main.dart.js_312.part.js": "e364770af6bf8034231d24dc58082e47",
"main.dart.js_222.part.js": "4629458cb94f5b43207ef05e8a2d4b6e",
"main.dart.js_130.part.js": "c8e596ed29bb65bfa2efccb3e6e435d8",
"main.dart.js_255.part.js": "530f8d8d9b7c09feabcc86585cacdc19",
"main.dart.js_57.part.js": "321f6a81e114c362cd0ba9676f8deeaa",
"main.dart.js_18.part.js": "3d7e48361e7a9cb3aa86b733becfb7c3",
"main.dart.js_31.part.js": "b552539c925d8848428e4ed3ab2ac30d",
"main.dart.js_59.part.js": "fad3fcca29f2aee6c030e7197c95bc45",
"main.dart.js_15.part.js": "64f5a031dcb7e3d866b3e7994be35def",
"main.dart.js_12.part.js": "595b1966ab4eef149d2a66894b54ddeb",
"main.dart.js_72.part.js": "490a52277b4eb05bf965a6868486c56f",
"main.dart.js_4.part.js": "e58a06c8721228e337430887ad0ffb6f",
"main.dart.js_62.part.js": "b4d938c266b3a37b2115ec1b06b68bc5",
"main.dart.js_103.part.js": "a9a9d466a90fc0b2dcea00e9d4437803",
"main.dart.js_60.part.js": "d6b9c2e7503052481f3f21dbcc7f7759",
"main.dart.js_247.part.js": "f5e63514eb7a28d9cbebbc37519083f9",
"main.dart.js_79.part.js": "36bdb7652b896bb35e1b602ffea22726",
"main.dart.js_292.part.js": "c161ec4c7a3ad343be45d279ac9fe0cb",
"main.dart.js_286.part.js": "4f77b3539b8ae24acbc544c89521deb1",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_28.part.js": "d2721a066443f8d9f1192749df4e3fc3",
"main.dart.js_99.part.js": "9b1586cfa1b5d05bbd94c22877ebcce4",
"main.dart.js_19.part.js": "af284ca7b8797ef117243cec4763c8fa",
"main.dart.js_38.part.js": "72da51370eb711fbfaa7cec613525245",
"main.dart.js_20.part.js": "926db2184495eb7cdc98c7cc6caba3d4",
"main.dart.js_142.part.js": "a764de545bcb90f83d12343eeffe0f89",
"main.dart.js_135.part.js": "27f6f70fa0003bf38ff779aff6eb851c",
"main.dart.js_193.part.js": "bef2a35a891b8fe4064638e2f2fded04",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_276.part.js": "edb0b9c2c050cfae8f98b8c77b69442a",
"main.dart.js_294.part.js": "5b2cca70e30b7ac839b3bac091150a57",
"main.dart.js_133.part.js": "25c13c4313924ebda31d4289a4608b62",
"main.dart.js_227.part.js": "f40f4168d79c25c6e77102eaf880c198",
"main.dart.js_165.part.js": "71810a6431c3364411895ab6bf9585ca",
"main.dart.js_117.part.js": "6fafab2c58847065152633d34ae28d01",
"main.dart.js_92.part.js": "d5c467b69ab5fbda905b0699077ec4cc",
"main.dart.js_17.part.js": "a39f2eebed8891f7e9eb4a41c68b1db2",
"main.dart.js_27.part.js": "a43aa21aabb942638817b8a7af9bf7aa",
"main.dart.js_186.part.js": "1aa0142947fd9d191c24db6a88a5bf5c",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_8.part.js": "e515922088c3a0d72d53e5743a83733b",
"main.dart.js_129.part.js": "e7c066fc23fe0de1786562d786dad078",
"main.dart.js_218.part.js": "48d36fab0ea9ea4464c63a01b51418fd",
"main.dart.js_52.part.js": "d9bfa2755b80ba2a4139a7a46d89e2af",
"main.dart.js_147.part.js": "429203bd48263e73e5cf87a91196386d",
"main.dart.js_128.part.js": "844e0c920373393b0af500ca6c4a26a1",
"main.dart.js_9.part.js": "cd38c476a384af0f6c924e92a19ca6ed",
"main.dart.js_158.part.js": "59ab8459e596586befed75db42bc87a5",
"main.dart.js_291.part.js": "1a12424b2d73ee059c60f380e1aef46f",
"main.dart.js_269.part.js": "0a8e2e2ee13915bfe77a483eb595a007",
"main.dart.js_85.part.js": "cc64a672a17652f5206e7b6fbbbdb30f",
"main.dart.js_154.part.js": "fcc838e3a5f621092eaa93af95a440c4",
"main.dart.js_145.part.js": "42b2481638b48ae5246e8d7220fcb70b",
"main.dart.js_29.part.js": "505ffbd6779f14b88f7c8d8e4ede3044",
"main.dart.js_184.part.js": "6fa71a39d1908434999f61b4c32c3b8a",
"main.dart.js_319.part.js": "4562ef9ebfbb619c67fd98c6d2333487",
"main.dart.js_138.part.js": "e6fb8170589868a6e8b985aa01d9d171",
"main.dart.js_123.part.js": "be30fef5a02c845161067162e4f5b604",
"main.dart.js_190.part.js": "9fbb0b66453e6d81b10c48fc1b75027b",
"main.dart.js_308.part.js": "20a00085b3a04c03a45ef3e02e4ed8d0",
"main.dart.js_61.part.js": "a6128f53f7c9965b5d710ff9abc98a96",
"main.dart.js_65.part.js": "ce787ab93abb2740696380b5ddbb6c9b",
"main.dart.js_96.part.js": "c59deef7f904fc6e62689187469e670c",
"main.dart.js_26.part.js": "c092f0a6dfc23628280a6ad16d9a189c",
"main.dart.js_146.part.js": "99908cecaad41bfde16ad90ac1cb824d",
"version.json": "1ef3f7ea073b19b518ea752aa8507607",
"main.dart.js_303.part.js": "1ded86fa1ff179374bc2ae32875c6cf5",
"flutter_bootstrap.js": "13a767a269ac988b36b8e06c55eea3f9",
"main.dart.js_235.part.js": "771b800dc05c877175994ca499edd258",
"main.dart.js_149.part.js": "2d9d151435c12fe643b467e7a4bea7b9",
"main.dart.js_98.part.js": "f7d02fd1e06f173ee8c26b07805f8397",
"main.dart.js_207.part.js": "67a4fd0ce3eb76ca6b53334e08c48fca",
"main.dart.js_48.part.js": "d18526b6e49c471b348933e29d3e1f7e",
"main.dart.js_127.part.js": "dd90949240678067ae81c17d389b2994",
"main.dart.js_164.part.js": "303397ed14bffd46d0798ceb6baac784",
"main.dart.js_134.part.js": "d56ffc88eda66ff63fd1f4b484eb007f",
"main.dart.js_118.part.js": "7af38765bbb97cd62b3cc8164d0bcb68",
"main.dart.js_163.part.js": "ae5e374c3607d887b6ac3133e50a1c5b",
"main.dart.js_155.part.js": "90cba61badc5af5177c56e8bab800c07",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_144.part.js": "a21132f41da09f8560d5f34c2003df34",
"main.dart.js_301.part.js": "66d4e909fd5a97824e45292b83c407a4",
"main.dart.js_3.part.js": "b96a0cddfd499a908e14291a76f95808",
"main.dart.js_195.part.js": "00de6daa9891651cf0516a55d04c8635",
"main.dart.js_260.part.js": "f665d1855308c66a318d0676fb7f8f77",
"main.dart.js_259.part.js": "cbdb39595e6b732f3cd782a3b57f065b",
"main.dart.js_223.part.js": "0f96f26c23aae32f1c7630d02344521a",
"main.dart.js_25.part.js": "5ecdae4a1acb4bd5b34acee7c1750ab1",
"main.dart.js_16.part.js": "f032261f3cfeb2ac365db3dc892ab136",
"main.dart.js_315.part.js": "a58fc2bc0ca0cccd9e691e613d8c4dbd",
"main.dart.js_64.part.js": "6acc3c641d6c9dfcc0d8921d473c50bc",
"main.dart.js_295.part.js": "3a4a9eeb1b73b3cf42dd14917ef89e8d",
"main.dart.js_24.part.js": "43e6488d97beeb00b7d4c734ce0051e6",
"main.dart.js_279.part.js": "d933f2129be0177f3e7c247a7bacf5e3",
"main.dart.js_104.part.js": "d738ec1a636ee590bc0df71f77a294b7",
"main.dart.js_316.part.js": "e476557239ef91a144e31fec2e630850",
"main.dart.js_91.part.js": "7d9394c51358e1da6dcc8d71795aca0d",
"main.dart.js_174.part.js": "f8ecfc488bcff89dc00f9a12ce77423e",
"main.dart.js_290.part.js": "8d332189ab9fe146059d688459a2cdcb",
"main.dart.js_306.part.js": "2acef739f31c317c9d9896b37c455206",
"main.dart.js_97.part.js": "2dafb2c660372f8c952283150724e83e",
"main.dart.js_179.part.js": "402fe75c4bf98ea53369576c8b7cfce9",
"main.dart.js_228.part.js": "78d5326e379ef1f0f964983935e33ab1",
"main.dart.js_211.part.js": "fa4bb8a8c42bb518eee48f4395236b9a",
"main.dart.js_224.part.js": "198a93c0dbf3281d9e4e53e91b7ef972",
"main.dart.js_84.part.js": "7a7f96810ab0fefcc01187e13b64ba1e",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_245.part.js": "d1cc0c1ab43eb81ebf53a873d8b70180",
"main.dart.js_168.part.js": "141d4fc58524160ff2ce200753cb6cfb",
"main.dart.js_34.part.js": "92968ac36f0e80b4f546eda3bbe06cd4",
"main.dart.js_289.part.js": "a7d52600fa4433b65e5a6a5465e242f7",
"main.dart.js_106.part.js": "a819629f9401d32c94eacf0d6a2c1784",
"main.dart.js_44.part.js": "260fafa3f8de3d5f617b6d281c891895",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_280.part.js": "456d81bc5cc757fabbdbc7e811fe53ab",
"main.dart.js_244.part.js": "2bcc72ffb365825d7ff85ee038a332fc",
"main.dart.js_11.part.js": "184abb63589f641ea0793ac027f2bcd6",
"main.dart.js_300.part.js": "ed39316c4eb4c60b4bfc6f402d05ceb3",
"main.dart.js_101.part.js": "17a25e9e4a553a9cc9004e56844573f7",
"main.dart.js_113.part.js": "091faaeb5176780df7020f40baabe8e9",
"main.dart.js_89.part.js": "15cd7e63d9f65a7ca15d2f405b778801",
"main.dart.js_41.part.js": "1852b63dad876a77e4c04b77656182fc",
"main.dart.js_137.part.js": "e152eaea73d8ac26541c66542673dbac",
"main.dart.js_108.part.js": "e8981cc6f741d02d830e5abd2aecc773",
"main.dart.js_73.part.js": "17db9c431622573d6d3c398f1d4940dd",
"main.dart.js": "110c7714ea6978399cd970f93651f7bc",
"main.dart.js_277.part.js": "27ae12c88fa6b295469edf57182551d1",
"main.dart.js_298.part.js": "72e9ed1ea90fc4cc24d6aa41649570b3",
"main.dart.js_2.part.js": "19f929f95c167b3dc3d5de10099b9e81",
"main.dart.js_94.part.js": "4e09401ba824a51bbb5b1c5890747318",
"main.dart.js_273.part.js": "b07b1a695468d265b49fbcef4d0cfe6d",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_37.part.js": "8c57f296cd3437190f060582c3784911",
"main.dart.js_136.part.js": "1c34231bc62d0ec2e1717a4424614d63",
"main.dart.js_234.part.js": "b274c1d61f8d8aad4ca4d14563b2099c",
"main.dart.js_51.part.js": "0ec9786c5815a13ffa6788d03188be46",
"main.dart.js_110.part.js": "5de4d510890a913a6d5656fe313377cc",
"main.dart.js_161.part.js": "9ba8a0130f3f2cbc9bb52ab06f4fee33",
"main.dart.js_143.part.js": "10fc6a55dab0d6927da899e5c157187e",
"main.dart.js_23.part.js": "7d2ac43edf19bd434bd98b2df08b0939",
"main.dart.js_90.part.js": "c4a72712a360c71612b4aaf1c6a1cc2c",
"main.dart.js_173.part.js": "ebdf86b5d8659b6943019e5dc3b2a19c",
"main.dart.js_107.part.js": "4f44420aad92323bccd68fb4b9a7ab2a",
"main.dart.js_215.part.js": "fec3995ea3186d105122bb0348dc226f",
"main.dart.js_191.part.js": "d97f83353564a849e6990e768aa15553",
"main.dart.js_281.part.js": "6c6c508b31d4dd5e88e86639fe7af3ec",
"main.dart.js_180.part.js": "0a859f1fb6769b36eae5e74e6ac984df",
"main.dart.js_95.part.js": "8caf0a9de0e2f6049b98682d57c27718",
"main.dart.js_30.part.js": "19b73e4ae116e9c44aef4a60fafdc9f7",
"main.dart.js_309.part.js": "cc73e9d9153b5f3aa4c46034781cc325",
"main.dart.js_313.part.js": "16d18e2258534c1e8c1a8307a6159f37",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_204.part.js": "01140f291b11ff91c1f124e8482bee59",
"index.html": "6f5b61b994fc81ee9e280f34457ecd96",
"/": "6f5b61b994fc81ee9e280f34457ecd96",
"main.dart.js_271.part.js": "827f46e589d83fbe7c14469c63a09268",
"main.dart.js_58.part.js": "534cc797f35908c2b89edff8d8fb3071",
"main.dart.js_75.part.js": "4c0b73d7de6b5c0585f2e086b7bde813",
"main.dart.js_200.part.js": "0d709caa15d3412f41bf53a39c0b9b10",
"main.dart.js_1.part.js": "4f5ee1ec3fef1c7d1c89a1758b97353e",
"main.dart.js_197.part.js": "c27fdc7bce87ed4cd0476bbaf8204f22",
"main.dart.js_131.part.js": "2ca95c1e9ea671ae81edfab337b0eafd",
"main.dart.js_307.part.js": "599b8b405bf685fdc8a745a16206d2b3",
"main.dart.js_283.part.js": "80af817791d04ba62c931c5ced792a8f",
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
"assets/assets/translations/cs.json": "37c896528a5ffaa823d544f034797f5d",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"main.dart.js_157.part.js": "4383abcf3e713b758947d01e737ae801",
"main.dart.js_185.part.js": "12f980dc217d890569f88d1300e82003",
"main.dart.js_21.part.js": "0fa0664f93a66b1e384e552238975f3e",
"main.dart.js_177.part.js": "0d8d04e2f7e8ea349da3a986a55c235d",
"main.dart.js_297.part.js": "58414a83eeb7ba523644824f7f512254",
"main.dart.js_54.part.js": "842e8d577b66d482fc577f6ffeee4a88",
"main.dart.js_148.part.js": "41cb47a71814cd25cfeffdd4f33cba66",
"main.dart.js_293.part.js": "1b2824afc4b71ea5b4c6397bb7fcf6fc",
"main.dart.js_192.part.js": "e216c6bdbcc977becab4fc3b088e8f6f",
"main.dart.js_220.part.js": "f9ae40ecd5a3bf1fe20d30d2b3982514",
"main.dart.js_242.part.js": "39beb74efbe3aaef53d223f4bfafee8b",
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
"main.dart.js_55.part.js": "8b2b968cb6f4daf5cd9b2d2bb6643179"};
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
