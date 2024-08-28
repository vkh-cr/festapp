'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_151.part.js": "8d0570afa83642e4dcb709249bbdd3d5",
"main.dart.js_164.part.js": "7e06d0aded66e49d2a3162e26d5ee80a",
"main.dart.js_180.part.js": "067904bf12c80af64c9ac1c5ecfb3afe",
"main.dart.js_237.part.js": "589a4928f3276f1af1468e1f1c37b317",
"main.dart.js_72.part.js": "c1a73e7e0e69a454733c9439da7bf85f",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_207.part.js": "dbc0b991101957f789906c363aad9a37",
"main.dart.js_125.part.js": "7851a84465eac30458dc3465b461c1bb",
"main.dart.js_186.part.js": "d9b9e21a01f0f6783f539de0dfad004a",
"main.dart.js_85.part.js": "ce215bb1e887588cc0cf3f3743e69e42",
"main.dart.js_121.part.js": "156d669ba96b0fa57c893cf6f750abd8",
"main.dart.js_50.part.js": "595af302837fdad971a8c25d099a1438",
"main.dart.js_44.part.js": "7af74c30e241bf9f0e635ed97a82640e",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_79.part.js": "14a32a9487e282115201acf88bf0b3b2",
"main.dart.js_222.part.js": "3a90b285885ed4922a449fda3c0383c0",
"main.dart.js_188.part.js": "5f0c0de488777dfd5f8f7d2fff630d90",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_155.part.js": "150760657075284a63b4d30e839b427d",
"main.dart.js_18.part.js": "f556f5b3512bbd11daa5c2557bdca0a0",
"main.dart.js_27.part.js": "6bed6769cc78ae78bd78c10d90dadcdf",
"main.dart.js_198.part.js": "267bbd3a6433ba370910227797f8ba1c",
"main.dart.js_232.part.js": "02b1f0aa6fc3fdc6a92080a1eefe4ad3",
"main.dart.js_153.part.js": "48f32daee7a21e1f3b8ff142d31de827",
"main.dart.js_192.part.js": "1ec75e68df1add47c6a44d6985ba6f01",
"main.dart.js_223.part.js": "dd35a6393afff9a2bc25b5d7008807d7",
"main.dart.js_211.part.js": "12a135a3250a328097e6890c2d788252",
"main.dart.js_39.part.js": "49d2d2e38b515d732b258a977fd33c62",
"main.dart.js_2.part.js": "f37a74e28e3e0455160f365eaeb2b3e9",
"main.dart.js_35.part.js": "3fd343c461b4f26fb2373faf588deb08",
"main.dart.js_28.part.js": "d33755dfd6ec5ab886abb03784fd9501",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin.json": "c15f1bd0233f6802b344183f28ce1589",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/images/map/speaker.svg": "92bad3443727dc5acf679cd5e8582db1",
"assets/assets/images/map/conversation.svg": "5f53e729612a0e78a09e7d3c0fd53fd6",
"assets/assets/images/map/cart.svg": "fb6d41303c00806c8e3f59b20351670d",
"assets/assets/images/map/info.svg": "be79865eee723da1a799860658dc439c",
"assets/assets/images/map/tools.svg": "5f6bbbef105b3d381322da02d6beef43",
"assets/assets/images/map/church.svg": "d2840a23cbad788040bf5a41a9e88dbe",
"assets/assets/images/map/atm.svg": "693a9abb7145add2961453afa3f0ac4c",
"assets/assets/images/map/cross.svg": "aaecd193906a34ea7845c2feef628607",
"assets/assets/images/map/card.svg": "77d6cd4a052dbdaad1c5da8a5e3f1375",
"assets/assets/images/map/bed.svg": "c930d46ac91a70932bd61e2e17033744",
"assets/assets/images/map/ball.svg": "061bde98a15c0f2f3818195d9cce8a5f",
"assets/assets/images/map/food.svg": "41a9921e7a33d4ed62eb7fb0b8f176e7",
"assets/assets/images/map/grass.svg": "fe32d32a171a6e76a8a7088644b07e21",
"assets/assets/images/map/wine.svg": "d2c55fa3b4051c39d87edee9a280a50e",
"assets/assets/images/map/beer.svg": "3884ec5eef24a8634310eaa4b35d8b45",
"assets/assets/images/map/coffee.svg": "75c95a698eb7162db5342b082d751edf",
"assets/assets/translations/en.json": "80b5dc6bab9e633a9b33c47a0abed969",
"assets/assets/translations/cs.json": "dc5cfcf65d0e4be1bb7924f316164157",
"assets/assets/translations/pl.json": "1d220a9b17596875505a5fd021ad1c3c",
"assets/assets/translations/sk.json": "64814f65c54ab9ba86b57592ef877162",
"assets/assets/translations/de.json": "d3053e4e05a39c407e2288e193e269a5",
"assets/assets/translations/uk.json": "04175f07f45b2d43d5e2cc67d9bdf4ff",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/MaterialIcons-Regular.otf": "08925ad431516ed34fd0f893f51a050a",
"assets/AssetManifest.bin": "d2dbd2e9e288632bf6ff73dbf8926d11",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/AssetManifest.json": "49ca0a656725c4f34199825df6a21ff0",
"assets/NOTICES": "89008d755321188d61810318c449304a",
"main.dart.js_219.part.js": "ef6870446b68974637853884b1549348",
"main.dart.js_181.part.js": "768ded7f6120ebb6884329788657a2ab",
"main.dart.js_131.part.js": "d678bf0cd68eea01c3a3641db206c42b",
"main.dart.js_43.part.js": "529094b0e295455b0642f1c811d59bd3",
"main.dart.js_206.part.js": "7ca916dc551169085ac7b2825d0ff103",
"main.dart.js_104.part.js": "da2ff4ca11b49506c119018d255f0236",
"main.dart.js_107.part.js": "de75dd7faff57fc9887bd7b4459efc72",
"main.dart.js_78.part.js": "6992896d5264a8874917f39d15968acb",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_209.part.js": "8a40195305f688accfe7c6ae2bc1c2a9",
"main.dart.js_101.part.js": "ade0ab77137db26c86b445befd7e9567",
"main.dart.js_160.part.js": "bb01f6e26af4ed739d2afd2b37a8b0bf",
"main.dart.js_170.part.js": "10bfc07a30842ae4f4c380ccc17a11cf",
"main.dart.js_54.part.js": "38b6273e5e74070eb5ff05c331b0b6aa",
"main.dart.js_120.part.js": "dc431ad5d1c38e1793ef847fb8b9cfb4",
"main.dart.js_201.part.js": "dbaebebe75f6bbc3f909cd8f8ebb0d6e",
"main.dart.js_57.part.js": "ad9699488f37ba71e517a83afd581d2b",
"index.html": "6d4d97548f969973e31e356823b65c32",
"/": "6d4d97548f969973e31e356823b65c32",
"main.dart.js": "d69475ef2548d19691739434130f7fc9",
"main.dart.js_224.part.js": "1e9837b4b5f9c3ee3264505f6fdf6603",
"main.dart.js_159.part.js": "67ef0a9f6f7713d0fe9f1d430ccaed90",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_217.part.js": "bd74efb8fb6588c21c072c8b042c5128",
"main.dart.js_174.part.js": "c02112faba452b0c274150cc869f744b",
"main.dart.js_234.part.js": "5930925fec305d62f2d037a9fcf9a5f4",
"version.json": "09c85e06c357d17b583791623dc1ff58",
"main.dart.js_152.part.js": "b981b907399d685746764e6a68bf0697",
"main.dart.js_226.part.js": "5f3ffcae02a8b7bc00eb46e61a88a002",
"main.dart.js_139.part.js": "e64069ae3c0181b19ec8667732acd345",
"main.dart.js_233.part.js": "2a281f0625e4e30d58f9a650882d9bee",
"main.dart.js_119.part.js": "a5a20d98a8a1cc651b2cfd58319cec33",
"main.dart.js_19.part.js": "f9f8744519390db185b84c4a3ef7f493",
"main.dart.js_133.part.js": "86ecddf59d052d5ade112b0d596addbd",
"main.dart.js_218.part.js": "059c49ba36b66f38b0a8eb658045b08d",
"main.dart.js_145.part.js": "98e4db029e166c2ed3be2031cdf7f8a7",
"main.dart.js_80.part.js": "87d31f99ae94f6727b08d0feda68a530",
"main.dart.js_116.part.js": "c45e8cbb15868c68236a24335f2b2eda",
"main.dart.js_46.part.js": "96db8c72b7550df16ebb0ab5c05d7050",
"main.dart.js_24.part.js": "8a826bc3860d464f0fb0a87ec53b6eb9",
"main.dart.js_172.part.js": "92c6a7dd14c1f0d923a8155fd251b7b5",
"main.dart.js_126.part.js": "200308f4fb07047ce62156b5ce6edd09",
"main.dart.js_225.part.js": "dfc405391b20c8c7192b9e61e7419303",
"main.dart.js_149.part.js": "e18eb05fb7a4c145d89a60fd36699d95",
"main.dart.js_214.part.js": "b389726138764a003d7f60385772c2f9",
"main.dart.js_69.part.js": "92ba13c1e721e93577cd8c79fa0837b3",
"main.dart.js_210.part.js": "d632eb91b6e89fab1e14ccb62048d207",
"main.dart.js_47.part.js": "8f6839fbe28ed892703293efe1db1a36",
"main.dart.js_162.part.js": "d5384dc0d0118f58dde77a82426ccfbb",
"main.dart.js_236.part.js": "ad1b66590536c641ea7e09a66f77b5ef",
"main.dart.js_127.part.js": "cad081fc8b7c7840c08c6c12e6944f41",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_156.part.js": "e2cb4e30d3288af5263aea40005c1cbf",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_91.part.js": "ad37a890a5b41f94467fb4e969fbcc06",
"main.dart.js_216.part.js": "e425e0779a0c8d2297590884ed2916cb",
"main.dart.js_208.part.js": "2dae9609f77d3606124b04a4d07e4f02",
"main.dart.js_179.part.js": "871ff1d17beaedf5867573f4887a6da6",
"main.dart.js_230.part.js": "318de6bc7ead34af3739e089a635626d",
"main.dart.js_89.part.js": "0227838cb68c8a47a82ea735fc9d58e1",
"main.dart.js_140.part.js": "9756f62060050355c8846b7445295674",
"main.dart.js_11.part.js": "ee6a63bf80903b92e6f49f1d0328f3de",
"main.dart.js_95.part.js": "99a5d03933f0c8374437d3bbbe5a54e3",
"main.dart.js_154.part.js": "38a49e1da98abe2b8ca735668af0356b",
"main.dart.js_134.part.js": "503c467275b56607f243562c8fd5b84c",
"main.dart.js_117.part.js": "7ad25b0fac9a0b00c1584c0129701db0",
"main.dart.js_106.part.js": "aefc69d6a2db3657fc8256fe325c8ea7",
"main.dart.js_37.part.js": "b5770dbf77e15e837db6b1f89b57459a",
"main.dart.js_31.part.js": "cf79b7b820f083a11fe7894fd2f1b6b9",
"main.dart.js_178.part.js": "d51dcab60211f0f420189f4bc19ffc6c",
"main.dart.js_41.part.js": "ed54409382eb25b149f99ab59813516e",
"main.dart.js_185.part.js": "b0477b9fc1e359ba0d08e0bc3a9c05f8",
"main.dart.js_93.part.js": "b338945e28ae535a572628b5a35ac98f",
"main.dart.js_138.part.js": "7685f560835838b575046b638c5f7439",
"main.dart.js_83.part.js": "77c4f13e615130d4948c3da7d0e305ab",
"main.dart.js_202.part.js": "72522049c09870f8b4b9dacdee732bb7",
"main.dart.js_137.part.js": "59eb7691f0d135839a93fe24c043e54c",
"main.dart.js_183.part.js": "d9676f0d50f52a828bf126811657bd89",
"main.dart.js_220.part.js": "61b9f5137b9a09f913e2715655b62e6b",
"main.dart.js_158.part.js": "f2263e5c7ab5f46062d7f648db1fc2b4",
"flutter_bootstrap.js": "2bb1a6cf7dd87fc380ed2debbdacddcd",
"main.dart.js_215.part.js": "abeec03aa303f0b23a8ed0918fd786af",
"main.dart.js_227.part.js": "10995d170399ac3fc20d5f151c8b4ead",
"main.dart.js_108.part.js": "7181b66a281c9d45e48858c5ea11bcc4",
"main.dart.js_26.part.js": "66378636caf24838ed6957a6598e0e85",
"main.dart.js_144.part.js": "f8d18daaecbc60128b7cb9779d5ff8d0",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_167.part.js": "a67d3a29cf388d18bc24a9fce42d79e6",
"main.dart.js_200.part.js": "3fbccba8252069dab280a08eedbffb03",
"main.dart.js_15.part.js": "0b1d6008e23f65aa50c8fe6913749173",
"main.dart.js_118.part.js": "a62c3cbe5029ddf21449f81f0a47228f",
"main.dart.js_229.part.js": "4ea95aebb1c367f68678e59f742717cb",
"main.dart.js_21.part.js": "328089b40f588fc2f67741e932b53bbd",
"main.dart.js_166.part.js": "a2ac300aa68d28f54e20fdcf6c62216b",
"main.dart.js_177.part.js": "00e0aa9416eb21c784471c2448081879",
"main.dart.js_98.part.js": "20002b08cee27f9f14f6a037728d153c",
"main.dart.js_75.part.js": "4fe018499629241fca5e1dd4548b2544",
"main.dart.js_62.part.js": "5211602b74e41b1ec570c0b305aa75bd",
"main.dart.js_1.part.js": "4c7fdff3833f011537c7b997eb6628c6",
"main.dart.js_73.part.js": "4fae0f5ae72266b15572b1f7f9e329b2",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_128.part.js": "5bef66b99c9e78092cce7f0db75ab2ed",
"main.dart.js_193.part.js": "9a754e6c1a857a2598766e3821d6f3d6",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_165.part.js": "fd677a46421c46fe84ccd47227830c5b",
"main.dart.js_196.part.js": "9a6c4fc9b638afb9b10be4030aad6020",
"main.dart.js_110.part.js": "451523035c7d5b730b1dea73d15c6162",
"main.dart.js_87.part.js": "0cb8d1c063fb7f56dfaf391980107ec3",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_195.part.js": "e6041bbe2e3776d3473a5a6836738dcf",
"main.dart.js_239.part.js": "43e0b727542f3ae2ca5f58842df4b3ed",
"main.dart.js_205.part.js": "0cdc0ff4d83018174f3ef8bef025dc2c",
"main.dart.js_115.part.js": "fe673794132fd3b19d3302566b8e7ea6",
"main.dart.js_113.part.js": "e47279693ed174d45b9b9051d5055698",
"main.dart.js_33.part.js": "99f41f5886bb2ddd722f7f5b2e1e18ee",
"main.dart.js_100.part.js": "c6c075e59a8b319a7a3aeec20a5d1fd7",
"main.dart.js_36.part.js": "855d8f0ce0e8eeca84e6a2c63ff65d84",
"main.dart.js_58.part.js": "172535762671f22d5a6bae13c5f70d0d",
"main.dart.js_122.part.js": "afc1083ae5beea656e681aa879e1866d",
"main.dart.js_6.part.js": "e96b8c4074e89b7fe05ae96f572b98d4",
"main.dart.js_171.part.js": "eddad861fc4fd1d057055f62a7900f0d",
"main.dart.js_48.part.js": "72cd504a4def41294d720b8c067bfb36",
"main.dart.js_163.part.js": "7f0af713bb4629a32b8f4f3823ebb17e",
"main.dart.js_130.part.js": "d25834daab9a958d0cf75c23dad50e9a",
"main.dart.js_228.part.js": "d8ff941fed70cc5fc7313a16b458a8a8",
"main.dart.js_187.part.js": "0b412c4407e3d60ae0546d251c22e6d6",
"main.dart.js_84.part.js": "20d939c575bc32012eeb75e8a607dbe9",
"main.dart.js_105.part.js": "0a3702f8324ffafeb25fb1bdbfe30993",
"main.dart.js_169.part.js": "772fc1fd00fb7d298d2a765a37dbeaef",
"main.dart.js_231.part.js": "a0e43ffd9ee844b0aea6dddf83e55739",
"main.dart.js_7.part.js": "ad10c05f1babc750d06fa0b566a067a0",
"main.dart.js_212.part.js": "dcd988d2565fe20c0dcc6db1c022e7d2",
"main.dart.js_114.part.js": "2e65bfca93145712c08104cf66b72d0c",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_82.part.js": "16bd8cc71cde9def4a3760b5246d36e1",
"main.dart.js_92.part.js": "88014c8f336e99c848c51ffbda6f960f",
"main.dart.js_221.part.js": "1d6a10644741b6df02459527b49ba128",
"main.dart.js_59.part.js": "72c724d548dfc793743be2452170ec6f",
"main.dart.js_51.part.js": "78653d8626128124af80bbbc1869cd81",
"main.dart.js_129.part.js": "987c2c0afcb88b515fcd0aa220a78559",
"main.dart.js_99.part.js": "9b220ba0262cdfda51b1f1349609730d",
"main.dart.js_112.part.js": "ff1f11fb5d4f24245a43e1a072d21107",
"main.dart.js_10.part.js": "29b45c5503090df855401f3cb81fab1b",
"main.dart.js_157.part.js": "f2fcd5e35e7ac98e7f8416a19104080a",
"main.dart.js_81.part.js": "255d077525d7a47eae1c4bf2a97bb536",
"main.dart.js_34.part.js": "86e1e1a829d8e1ebc6b1f609892a42ac",
"main.dart.js_22.part.js": "e6cbacf485c07639abc3c5caa8748584",
"main.dart.js_23.part.js": "e433fa34ccf1f34b76eef52346f4e733",
"main.dart.js_67.part.js": "3bde7537f6200e278a35ec12a89e8860",
"main.dart.js_17.part.js": "70cb5ecf3e948f07f18077ef20e41fcc",
"main.dart.js_77.part.js": "9ea9e31068d7f19312a091806a1eb6ce",
"main.dart.js_8.part.js": "eec0b1d7f5633eb5b9ae6d47c3ffea14",
"main.dart.js_88.part.js": "07ee85c1dfb6642049e526c6f5380eb5",
"main.dart.js_146.part.js": "afc6c32bbd0a87d8338d193aed2b8ffe",
"main.dart.js_161.part.js": "110d5a40393e5538e75b0d1e35c38103",
"main.dart.js_109.part.js": "c871f4d450368cbf18d196812b7514b8",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"main.dart.js_94.part.js": "4b0f5daf88b0b367d09cf4f8c3b9866f",
"main.dart.js_12.part.js": "da612f36bc2c86ddf53ca202eb919a14",
"main.dart.js_74.part.js": "5f0e33286828e2452fb239de911a1ba1",
"main.dart.js_25.part.js": "2e93b74ea860bd350e32e402aa7f99e9",
"main.dart.js_197.part.js": "e16c7606563fd781cbd8f4e6188c356f",
"main.dart.js_111.part.js": "d51d7b46ef520474118516a706ec3f59",
"main.dart.js_61.part.js": "f81e1e7bca1ea42e98ee987a374af389",
"main.dart.js_53.part.js": "058c65894e6302f1c14fd6504a6e9805",
"main.dart.js_30.part.js": "c816b6bf24f801ffaebaeecbfd5eccd5",
"main.dart.js_60.part.js": "3589f53fcf790d49ff8bd5c1a4051671",
"main.dart.js_14.part.js": "085a1e9f5e4a176f17d5dfb3a40028b9",
"main.dart.js_235.part.js": "cfa0578cc846947b20f8ab04837c4918",
"main.dart.js_76.part.js": "90af59dbb2867cd4997e2ebdaf258cfc",
"main.dart.js_40.part.js": "3868b8deef570ef165f129fef095042b",
"main.dart.js_182.part.js": "1c329d8820f4cda8e4be8397d7226eb3",
"main.dart.js_241.part.js": "e9fc8010b26eb641c377b6d46791d677",
"main.dart.js_16.part.js": "ec0f63958327852cf072f0381a74232a",
"main.dart.js_184.part.js": "cc240e3af68b83ae54b20703186254f6",
"main.dart.js_136.part.js": "bbeb9a115528da640cbf4d557a8f9acb",
"main.dart.js_150.part.js": "72f48e75314c650f7a979c0cdfc7d3f4",
"main.dart.js_9.part.js": "98d49d7c5726c3f1651e315fc7de1b80",
"main.dart.js_3.part.js": "654479700576bbae1e3d4d3b81f14182",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_124.part.js": "03236a123a09c53911fb47a06ce5c9e8",
"main.dart.js_64.part.js": "443d70434589489c09c2f9733ce7438e",
"main.dart.js_123.part.js": "b1eab0e8bc3a40687a0322b3ea1764f3",
"main.dart.js_199.part.js": "907408a4288f69cb704397eb37a90ab8",
"main.dart.js_175.part.js": "17d455437d7a809cda241a5677cc2a52",
"main.dart.js_135.part.js": "7d3dafa3001016ca1eaef6f983e42516",
"main.dart.js_189.part.js": "8de0834d11fac959fa108b783a7a5dbb",
"main.dart.js_240.part.js": "7ea9eee1b0c2a4918a14d04af9d91606"};
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
