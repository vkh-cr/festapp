'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_114.part.js": "0d14789b400ea38e309ab9328615de5e",
"main.dart.js_181.part.js": "66cf27f617ec5250362f94c9b4534eef",
"main.dart.js_296.part.js": "4e2f21cd9122a0bb817a348c6ccd769e",
"main.dart.js_278.part.js": "2a1356981638736079afa91709e8b441",
"main.dart.js_317.part.js": "4bca30253ce7dec0734afd333a28124c",
"main.dart.js_189.part.js": "864f15b552715f84a88c657bf50264af",
"main.dart.js_140.part.js": "85463d68e73132dbfee8649d4cd58924",
"main.dart.js_112.part.js": "da6ef2d8fc053a1908d4384dca6c6325",
"main.dart.js_318.part.js": "63b9e38b559b3c8c6b6cb487808f8de0",
"main.dart.js_33.part.js": "6bafcba531f7cc87fdbb77018e19fc6a",
"main.dart.js_152.part.js": "cc7463c1720db150f9d46e2a57cffb5a",
"main.dart.js_272.part.js": "ca742f24288ea6953aef0ec615d262f4",
"main.dart.js_199.part.js": "3b2ab4fbe2c39efa6427716374f30036",
"main.dart.js_156.part.js": "e6f608fb124e86736ff88799758c04db",
"main.dart.js_213.part.js": "8decdec9bcd25b83232d512463526137",
"main.dart.js_225.part.js": "044d19e310c9633673d336040f74ae42",
"main.dart.js_239.part.js": "3e467211150e4d4665ddab3a1cb8d650",
"main.dart.js_80.part.js": "17e508b409c35a96daa3c8914ae39fd0",
"main.dart.js_266.part.js": "0a2bb83c3f61446cc70c98771c1c70fb",
"main.dart.js_270.part.js": "0a3384203027175880d2b053b572599d",
"main.dart.js_132.part.js": "e50abcb6811071dcba598fd47600fe4c",
"main.dart.js_50.part.js": "0e4538e4ba301372241ec8c967303126",
"main.dart.js_70.part.js": "d921a59f799ad114fde2c1d2a7595138",
"main.dart.js_139.part.js": "27a569551e43cffc56084e378583ec4f",
"main.dart.js_206.part.js": "d4ce2c164b6651a23a9ca6fb72ca0903",
"main.dart.js_86.part.js": "245a1e6c13867d699e96f078f87b6780",
"main.dart.js_311.part.js": "aad79e77273f02a6c0b9eff47b353264",
"main.dart.js_119.part.js": "662585c6b5521de2db501825f15ba756",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_237.part.js": "3e6adc917c24805cf62b55b76e827e72",
"main.dart.js_198.part.js": "1394a0201d13ba55266068fae7b70782",
"main.dart.js_258.part.js": "b4e230fe41970d85896cee265b63810c",
"main.dart.js_188.part.js": "980712e6c28022a939590d4f2e83cc2e",
"main.dart.js_263.part.js": "2439477b79545b963b03e5e6734453ce",
"main.dart.js_310.part.js": "a683819f7961a23a76be3fb0c49198dd",
"main.dart.js_299.part.js": "4c28376eb1d1b90e32f6a4648d22fdb6",
"main.dart.js_238.part.js": "005b7fe2c4c78f6fc0c28d9c4be2f571",
"main.dart.js_151.part.js": "e8ca3a57e732155ff5f21b37b1034930",
"main.dart.js_304.part.js": "23c81220ac7a11cad25e204d71b786ea",
"main.dart.js_167.part.js": "5980b778543889e8a49ab4511cf1d855",
"main.dart.js_93.part.js": "64d1dab50536896be851b476aa11403a",
"main.dart.js_230.part.js": "4e0980d6e7526f1ffad6e7728e7d505b",
"main.dart.js_212.part.js": "2d0d2edc93bf1d6ae712b5ead14683d5",
"main.dart.js_261.part.js": "470e76ab439d4ffa3f6fd1aadc9e7147",
"main.dart.js_241.part.js": "2829240e4f71ee1a62fc38e107fb3b80",
"main.dart.js_13.part.js": "f8141bd11f0a4b666534900422414bde",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_302.part.js": "9e33a50817f09dfa62018ef3c3ed618f",
"main.dart.js_243.part.js": "6a28d335dbb1261d733788f8b7ba97f7",
"main.dart.js_287.part.js": "cceadb1ba278830a5d2af5238a0fcfdb",
"main.dart.js_254.part.js": "df7a5257bfc77e4f1eeac3f7d6506323",
"main.dart.js_166.part.js": "9f6115772f730c99d1b830e7db5b100e",
"main.dart.js_87.part.js": "33d1353ee450e0e071d853d9a38d5c58",
"main.dart.js_172.part.js": "5e0d8a2674344310094904148a4a9d39",
"main.dart.js_216.part.js": "f347386ea9f877512fabdd987c7418cf",
"main.dart.js_305.part.js": "7a41f05f254c5498317d0c4f8efd4ae0",
"main.dart.js_35.part.js": "4e54938da17b90ca54a558709cd293af",
"main.dart.js_111.part.js": "425552db353532e2ea64509d56945558",
"main.dart.js_288.part.js": "f40fc1a150661784e4b989496c7bae6a",
"main.dart.js_253.part.js": "99bcc16981ab766059d60b583af693ad",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_120.part.js": "034c28a50845a6fae00dbfe4858c2523",
"main.dart.js_208.part.js": "45972841532eeba422d22141e7171e27",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"main.dart.js_246.part.js": "962ab709196e8f8bb69b4ffb831cec84",
"main.dart.js_284.part.js": "72ef08dcf90bb827da46c343c2d4ec5f",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_265.part.js": "81c121dce61a7b13d8599e7bf4c41b27",
"main.dart.js_187.part.js": "294fe10139f7cbec1ec786238516c5fc",
"main.dart.js_162.part.js": "8fead09050d5bbd0c70841acae1115ad",
"main.dart.js_217.part.js": "3f46f64f50d90a3b4cd615836810c3cb",
"main.dart.js_36.part.js": "4c3f32c8590fe2e5dc20e6a5db63cf39",
"main.dart.js_314.part.js": "5291d0ab11d5e869b32362407651a4be",
"main.dart.js_88.part.js": "143f842913ab1f1dd3e7fb4e93d92c74",
"main.dart.js_7.part.js": "96dab706f669366fb0b9608f875d6ea3",
"main.dart.js_69.part.js": "46f6d5860e4ca4d0c208cefefef607da",
"main.dart.js_49.part.js": "3b1004b702c2d95fe21a2c18c15e327a",
"main.dart.js_40.part.js": "152a3ab6c6ea973dc1b13f42b0d9c32a",
"main.dart.js_141.part.js": "17a8e134df9414c3745145a379398bb0",
"main.dart.js_250.part.js": "795e62070c04ea95450d69d1db039918",
"main.dart.js_32.part.js": "8a4ba89f3d4a114d1fe96caf9136d0d9",
"main.dart.js_203.part.js": "2fb1011ea18b0f6219632bae4b96dbe5",
"main.dart.js_100.part.js": "cec2f0ff2a461147999fe1f54049efe1",
"main.dart.js_10.part.js": "0dff0e294b23bc634a3bfc9ffd0168a3",
"main.dart.js_109.part.js": "38edd1135b412c90fc518bb089b9f789",
"main.dart.js_267.part.js": "c4a01583e6c8dfc13ce9fe81b3f44587",
"main.dart.js_248.part.js": "8719427c76ff0d2b4218798f881b6dc2",
"main.dart.js_262.part.js": "5b3ae22dc22828224a22975e0f5e43fc",
"main.dart.js_102.part.js": "04f44fd2398e2a67dcaada18791f162d",
"main.dart.js_82.part.js": "08e24d5828fdf7a9e865125a3dd31390",
"main.dart.js_312.part.js": "afc2c9a106c80f6f30f31bf4385f9869",
"main.dart.js_222.part.js": "66692ad3ca5d9244c9868821ce2e2cbc",
"main.dart.js_130.part.js": "9d5a3b0ad2a707091dbacda75ced5455",
"main.dart.js_255.part.js": "530f8d8d9b7c09feabcc86585cacdc19",
"main.dart.js_57.part.js": "321f6a81e114c362cd0ba9676f8deeaa",
"main.dart.js_18.part.js": "3d7e48361e7a9cb3aa86b733becfb7c3",
"main.dart.js_31.part.js": "b552539c925d8848428e4ed3ab2ac30d",
"main.dart.js_59.part.js": "43d1f3f768cc211d3392286bb019b67e",
"main.dart.js_15.part.js": "c261f11cdca58151de092eb69e0b7760",
"main.dart.js_12.part.js": "45d8f42d1a7a2ca26402597ebd990b5a",
"main.dart.js_72.part.js": "a2de1ffb40ee6bc6a539885268a71dd3",
"main.dart.js_4.part.js": "4a9d0f785cc8d98ef9d275090cee8845",
"main.dart.js_62.part.js": "ad95e24a695d803c3d4c5f262c657338",
"main.dart.js_103.part.js": "e36f3dafb9093f0e19e2d533dc61ffea",
"main.dart.js_60.part.js": "570718ee925d10add0b708bbf84e9dd4",
"main.dart.js_247.part.js": "f5e63514eb7a28d9cbebbc37519083f9",
"main.dart.js_79.part.js": "75d24e9501717dc17aa15b3cdf095daf",
"main.dart.js_292.part.js": "3c8a7c4844bf0c2e01003a6e3d6cb12c",
"main.dart.js_286.part.js": "b934463c1c844fb4787fdbed9bdfe130",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_28.part.js": "abf8fd405e82ad72d6a2743b6b9b0932",
"main.dart.js_99.part.js": "4badbe017b141be40d581479861d0daa",
"main.dart.js_19.part.js": "e48897a592deb2126ab84173663d8a9c",
"main.dart.js_38.part.js": "94e71fbb83cdfae229e9883bcb143932",
"main.dart.js_20.part.js": "5ebfa8d4aec607f38c70255dfec9e005",
"main.dart.js_135.part.js": "27f6f70fa0003bf38ff779aff6eb851c",
"main.dart.js_193.part.js": "0ea78f918deeeeca863cf5ef49ebe957",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_276.part.js": "4c62a4f2301bf16bbc24d119a2dd38b2",
"main.dart.js_294.part.js": "bc86ab8f39920735785b1f22e1bf669f",
"main.dart.js_133.part.js": "23409d45d75896dba4ffa6b5baccf979",
"main.dart.js_227.part.js": "ef8f8e2228dfdebfbcbc9caf0cbcba37",
"main.dart.js_165.part.js": "cd487744ebfc606473e953b8bd35f07c",
"main.dart.js_117.part.js": "6fafab2c58847065152633d34ae28d01",
"main.dart.js_92.part.js": "d5c467b69ab5fbda905b0699077ec4cc",
"main.dart.js_17.part.js": "a39f2eebed8891f7e9eb4a41c68b1db2",
"main.dart.js_27.part.js": "33776d7647fc899d96e01fecea582e5a",
"main.dart.js_186.part.js": "1aa0142947fd9d191c24db6a88a5bf5c",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_8.part.js": "f575bded6011385c7f75e07b87aecc0d",
"main.dart.js_129.part.js": "e7c066fc23fe0de1786562d786dad078",
"main.dart.js_218.part.js": "52f2d2991a7b5c6d3dfe54658432a77e",
"main.dart.js_52.part.js": "18801b2570f45e0d9dfaa80645b574e7",
"main.dart.js_147.part.js": "429203bd48263e73e5cf87a91196386d",
"main.dart.js_128.part.js": "6c06f0c607f804362f7fbcd10b9de048",
"main.dart.js_9.part.js": "1b2d1f4b00999498b7b29ac90fb7db84",
"main.dart.js_158.part.js": "eee574e3ce4830dd10fddec4463a1ed2",
"main.dart.js_291.part.js": "a4986b595c87a67df79bf6e675f7089f",
"main.dart.js_269.part.js": "0a8e2e2ee13915bfe77a483eb595a007",
"main.dart.js_85.part.js": "d958ad06dff1e21d5fc6bd75ec20bfe9",
"main.dart.js_154.part.js": "65eb00f4ce15b362e52384fb5b29a9a2",
"main.dart.js_145.part.js": "e8876f255472b668578237a96996f2c5",
"main.dart.js_29.part.js": "ad2e9816ae675f0a106fb0c658a8dd25",
"main.dart.js_184.part.js": "f2506a6d180f24571fdfe635b96d7a34",
"main.dart.js_319.part.js": "0fc43dc99799e1fa1ed8fed0c9094053",
"main.dart.js_138.part.js": "32f96e2b152f1436ca8165fa4410fdaa",
"main.dart.js_123.part.js": "be30fef5a02c845161067162e4f5b604",
"main.dart.js_190.part.js": "9fbb0b66453e6d81b10c48fc1b75027b",
"main.dart.js_308.part.js": "ae8a6e5216eb3316a4b9f6c37c615b0d",
"main.dart.js_61.part.js": "0b52d0baaab2b38fb9800b29391e943d",
"main.dart.js_65.part.js": "90886bb23ca1388cf93fdeb106f57a54",
"main.dart.js_96.part.js": "af51776253cc2c6854565ba3325d3cbb",
"main.dart.js_26.part.js": "90b1672e5f3141bcf4edfe45466678fe",
"main.dart.js_146.part.js": "15ebf1de3c9df734184482dab6081b1f",
"version.json": "1ef3f7ea073b19b518ea752aa8507607",
"main.dart.js_303.part.js": "0909293adab09efbeb9bc5cecf2e6888",
"flutter_bootstrap.js": "b4129608d14a61fba5c790f29ea64436",
"main.dart.js_235.part.js": "771b800dc05c877175994ca499edd258",
"main.dart.js_149.part.js": "2d9d151435c12fe643b467e7a4bea7b9",
"main.dart.js_98.part.js": "b1e69cbc2db74896f2c447c11035c297",
"main.dart.js_207.part.js": "67a4fd0ce3eb76ca6b53334e08c48fca",
"main.dart.js_48.part.js": "53d64902b26f8ae8ce8783d998120afc",
"main.dart.js_127.part.js": "dd90949240678067ae81c17d389b2994",
"main.dart.js_164.part.js": "303397ed14bffd46d0798ceb6baac784",
"main.dart.js_134.part.js": "2cb48c8ff8d6a98a783bfa3396a8b0d2",
"main.dart.js_118.part.js": "731914a8741a61b10d549736867d22b9",
"main.dart.js_163.part.js": "ab83709c6414fc8b14cf19c5018e602f",
"main.dart.js_155.part.js": "9aaa22a2fd06e8a463d671e78ade2a77",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_144.part.js": "72141ec501a1f007d23d8b7d6a23cba0",
"main.dart.js_301.part.js": "4ba5f49a6475d4e6930e8d55b3f2ce8d",
"main.dart.js_3.part.js": "a924791eb32908ae568157fd965bdbaa",
"main.dart.js_195.part.js": "99017caa80bef59cf3c93b5d112d7b88",
"main.dart.js_260.part.js": "1995b3edc548963474b094fef96b37f0",
"main.dart.js_259.part.js": "cbdb39595e6b732f3cd782a3b57f065b",
"main.dart.js_223.part.js": "1f64c88ae0d97dc5049dcb275c8c6d7b",
"main.dart.js_25.part.js": "8c84f4fb1510a28085517eb04c6b176e",
"main.dart.js_16.part.js": "ee3b7c22d91af119429400d6cc899fb7",
"main.dart.js_315.part.js": "6263f2ec6e233c640c4f97463fb34a0f",
"main.dart.js_64.part.js": "d9d07f08d9c0ce11577fc24d3318016d",
"main.dart.js_24.part.js": "8dceb77fa22a8039689eafe7cd5d1809",
"main.dart.js_279.part.js": "9c4b5b11201bafd102f148d7b0f040a3",
"main.dart.js_104.part.js": "d738ec1a636ee590bc0df71f77a294b7",
"main.dart.js_316.part.js": "a888ddcc0c15e4a68f49543fe2dff183",
"main.dart.js_91.part.js": "7d9394c51358e1da6dcc8d71795aca0d",
"main.dart.js_174.part.js": "f8ecfc488bcff89dc00f9a12ce77423e",
"main.dart.js_290.part.js": "056120019c02d2bc2ad3e7cb4693b177",
"main.dart.js_306.part.js": "5a127c1e2af63f0412503d9109fc0151",
"main.dart.js_97.part.js": "049dad29c973b49042eeee9082d94a18",
"main.dart.js_179.part.js": "9c15bb53906c312db40d00813b392f48",
"main.dart.js_228.part.js": "06d6ac515be66e8a5aa0c23b58750814",
"main.dart.js_211.part.js": "300ea9b18511d5b8c7d037b1af25dcf8",
"main.dart.js_224.part.js": "ac6bfbdf9fba9481b8b94a0d470c0ac3",
"main.dart.js_84.part.js": "4ecb9eac54fbb36d4f98392d1717456c",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_245.part.js": "ea25b2c1205c2729b2142ef5351250fd",
"main.dart.js_168.part.js": "9efd4749d705be7937d946e0be56625a",
"main.dart.js_34.part.js": "92968ac36f0e80b4f546eda3bbe06cd4",
"main.dart.js_289.part.js": "2ae327dea934ae47c8dea99fcd74deaf",
"main.dart.js_106.part.js": "944e1d06f820562333c43535a55e0c6a",
"main.dart.js_44.part.js": "c35f92a31243eb9ddafd5f1db17a942d",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_280.part.js": "d36e7d305992a0bf329a4a40b75ae3fb",
"main.dart.js_244.part.js": "2bcc72ffb365825d7ff85ee038a332fc",
"main.dart.js_11.part.js": "b30df68902116d06bf9cea949b118fc0",
"main.dart.js_300.part.js": "cd5f498f915d70a8543b491820dc17a2",
"main.dart.js_101.part.js": "7cd8abfee47b5bc723c6762cd29b7711",
"main.dart.js_113.part.js": "9eda665f29a7b08983efb7f67cc9302d",
"main.dart.js_89.part.js": "15cd7e63d9f65a7ca15d2f405b778801",
"main.dart.js_41.part.js": "3475c16b70545a8f23d63cda3af683d1",
"main.dart.js_137.part.js": "e152eaea73d8ac26541c66542673dbac",
"main.dart.js_108.part.js": "1285b75b88f28dba6f3d2325ff1a907a",
"main.dart.js_73.part.js": "38e4c161059d50c4c0ee6d9fb2b2b552",
"main.dart.js": "deac1d8efb34d22c6b8e4db1ee1b1169",
"main.dart.js_277.part.js": "ce14c142bf75b5b8789e4babce3b66eb",
"main.dart.js_298.part.js": "6fc7e07ade0e1de2f18b0b41491295ef",
"main.dart.js_2.part.js": "78e258f5ee28494f06dc7ea56d371726",
"main.dart.js_94.part.js": "a3643c209c9c6640e5ed5a2e1d1d77f8",
"main.dart.js_273.part.js": "194065e653ba1513ef51dfa75b9ffca8",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_37.part.js": "6ffe1def1ad5128d74b06cec4494b38e",
"main.dart.js_136.part.js": "af0e4d039444034b89796eb49e986927",
"main.dart.js_234.part.js": "5d272a7a0b2030a9c4159a993ed40796",
"main.dart.js_51.part.js": "86721de94b480cd27d79278acaa4a552",
"main.dart.js_110.part.js": "6302022456d0d7c32da9757d9964523f",
"main.dart.js_161.part.js": "9d271fd48e8e1f816f58d0e309d315bf",
"main.dart.js_143.part.js": "bb065f4c3cf5e82d34c67123a0b9d407",
"main.dart.js_23.part.js": "644d824b40fcaa6992f22a9c36c90b43",
"main.dart.js_90.part.js": "c4a72712a360c71612b4aaf1c6a1cc2c",
"main.dart.js_173.part.js": "ebdf86b5d8659b6943019e5dc3b2a19c",
"main.dart.js_107.part.js": "9efb24543e39a4cceb5f3993a320cc18",
"main.dart.js_215.part.js": "e04ce47c17b8edef6371ad3918344705",
"main.dart.js_191.part.js": "94f9b55d9d97bf9fbc61c51969193f03",
"main.dart.js_281.part.js": "042625f95296abfec8c8d6906bbbc699",
"main.dart.js_180.part.js": "3c49bd4c44f1a7c36eb3eaf5c35d8487",
"main.dart.js_95.part.js": "1c3801d9bf79ec0da2e2090174f5de84",
"main.dart.js_30.part.js": "f2d77aaf3d43dc3f4b63615e2c9533d3",
"main.dart.js_309.part.js": "1295d04f5aaa1599b7c108e45af99b7f",
"main.dart.js_313.part.js": "4b37d792638d89469f59e4906f906cf9",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_204.part.js": "154a19d7935ffac8ada1d2120e6e8181",
"index.html": "e10cea3a34337428a55e39ce32f12b67",
"/": "e10cea3a34337428a55e39ce32f12b67",
"main.dart.js_271.part.js": "b194a3c68998bff82048735465ab192f",
"main.dart.js_58.part.js": "534cc797f35908c2b89edff8d8fb3071",
"main.dart.js_75.part.js": "1b7dbc56c18c2bbf384962cb9546363b",
"main.dart.js_200.part.js": "c75c2143837f44fdf70ee209dba6c0d1",
"main.dart.js_1.part.js": "935c6e422c0d5f591d1e6762584703bf",
"main.dart.js_197.part.js": "14ef5bee740290682ff51e7141984778",
"main.dart.js_131.part.js": "c877e50670b731015e2e3e4a1a1d827f",
"main.dart.js_307.part.js": "74e8267e0faf0029ea86f500a3206850",
"main.dart.js_283.part.js": "81d34bb431e25af618ad2a7bfab72154",
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
"main.dart.js_157.part.js": "eaa7a18e0837557fd5fc3f356bbf9987",
"main.dart.js_185.part.js": "d64ff7ba39f194d387223eb3066a43e4",
"main.dart.js_21.part.js": "8956801616ead452f38f6a86ea805df4",
"main.dart.js_177.part.js": "247db646e6e10a6ba412a5b518263dac",
"main.dart.js_297.part.js": "0be894afff5902ddd3818b795aa12b36",
"main.dart.js_54.part.js": "842e8d577b66d482fc577f6ffeee4a88",
"main.dart.js_148.part.js": "4be8d0004ae24e5c4307bd35b11c2cda",
"main.dart.js_293.part.js": "9b59c3978416b4259d5dfefedf3924f0",
"main.dart.js_192.part.js": "91f275a0b9af679d44e7dc21093dcfd5",
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
