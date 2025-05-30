'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_290.part.js": "a77d65db90b877171c9f5af0d618717d",
"main.dart.js_81.part.js": "992183d75be493e495610e097738cc14",
"main.dart.js_177.part.js": "81950fce67aba01aeb772803ffc70a08",
"main.dart.js_190.part.js": "91ede65b2ffd11199ae25954348eb6f9",
"main.dart.js_154.part.js": "fd46ee81c212ebb9196c00ddf99ecafe",
"main.dart.js_87.part.js": "0dbff1ac4ef9041491ce216c84b293cc",
"main.dart.js_335.part.js": "fca996fe7498a2fd0e52c329eff49f94",
"main.dart.js_159.part.js": "f48ea1faa07ebf7cd1c758a96449eaaa",
"main.dart.js_36.part.js": "9d1d5bb53e9282fcb6af44f06e0db543",
"main.dart.js_194.part.js": "6a2e2e648b655122668d525da5aca3d1",
"main.dart.js_322.part.js": "77420304031d663fba616b6d39154e3f",
"main.dart.js_299.part.js": "0ed128293dcdc5ef7d173c455b6a1e60",
"main.dart.js_199.part.js": "1bb40fe62aa2e949c4826503c3fe79c1",
"main.dart.js_122.part.js": "d5117fb9ec63819f69b9ab9cd80f50e6",
"main.dart.js_25.part.js": "f0be1f802d946e657b5869c2d08f6aff",
"main.dart.js_251.part.js": "751ddba6da709c31345236e221ac060a",
"main.dart.js_206.part.js": "72720837cab84f00af828c1aabd6bbb9",
"main.dart.js_249.part.js": "378dd647b69bae1b14e608fc2112cc68",
"main.dart.js_61.part.js": "813142d37b623bd279b4f6bbb2f8bd1d",
"main.dart.js_148.part.js": "9e1ad8cac419dfc1cf7eff0e6d38138c",
"main.dart.js_14.part.js": "e03e6c6a1546b97c6230f6d47b4dd4d0",
"main.dart.js_255.part.js": "f2fba1b059add43461345ae62d9dbf45",
"main.dart.js_178.part.js": "aa78c948ea6c3036d796e5ce392b697f",
"main.dart.js_167.part.js": "fd4a0e81a0d1a5031b12cbfb8fb62fec",
"main.dart.js_256.part.js": "f5be3f0deba53e0388feae6b0dd957f9",
"main.dart.js_197.part.js": "79778444700d35b4dda7a83e319ec017",
"main.dart.js_116.part.js": "1b8a98817eae1a26cb154ab78dcc6717",
"main.dart.js_134.part.js": "5990862bfb46bd3fc683ccbb3a9462ef",
"main.dart.js_46.part.js": "1514b0b23695220b2b77078175ca6452",
"main.dart.js_72.part.js": "07f03ee4ee25e14bd9ba733e4bd250e1",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_207.part.js": "f0856a272b7d0a64a1f8b2465057ce71",
"main.dart.js_38.part.js": "61a58cf8ceb31d5d0915f989c53bd70e",
"main.dart.js_318.part.js": "e8d4400658f8d4e5b484c255396e0f8b",
"main.dart.js_316.part.js": "8a321187bfcfff7fba0b4c081cd5e2b0",
"main.dart.js_17.part.js": "ba01cde2a63a0397b2266dcd909016b8",
"main.dart.js_276.part.js": "604f4f8afe2d2b93ab03dbed1352f9d3",
"main.dart.js_220.part.js": "bfa53361e4c6acd9e9a7a39f28fadd3d",
"main.dart.js_6.part.js": "5ddbfde9618084b9fc3cab251be155fb",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"main.dart.js_169.part.js": "8ce03d33118cf3f391844f09ef41e0a9",
"main.dart.js_132.part.js": "6dd1f21e72b99ae380368651ffe2a6ce",
"main.dart.js_331.part.js": "c2e4eb6857ba3d9723134fce1673702a",
"main.dart.js_146.part.js": "f4c910b918a7d3db82ed493a75dba5eb",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_57.part.js": "cab0e5a008baf40ab299e2a0858361e2",
"main.dart.js_60.part.js": "d55ac7fbe675e8b4f9276e9c1d0e7f41",
"main.dart.js_264.part.js": "b02a939c108a42f4bc0037065899a8f6",
"main.dart.js_285.part.js": "38acbb249eebfdfbe1c7c834b9a097a6",
"main.dart.js_92.part.js": "c08cfadc955ee3b4cfd05cfeedc13ade",
"main.dart.js_262.part.js": "d348327bd8f0a3b0b032e807f33867e0",
"main.dart.js_307.part.js": "d5e28a9a224b888f378dce6f3beaaa4f",
"main.dart.js_85.part.js": "a3a8f72823891177c54052991e217933",
"main.dart.js_1.part.js": "1ed06c4067e43dc6f56a48031a9a7260",
"main.dart.js_243.part.js": "f6b485fc1e29fb8ec4226933440874c6",
"main.dart.js_121.part.js": "f54fa09f2a31eba4bd2024f46b97666a",
"main.dart.js_191.part.js": "ed9abf530913a40beb0483dc386b8fdc",
"main.dart.js_39.part.js": "6962eb0caaa304c9b4debc18e0a76fab",
"main.dart.js_8.part.js": "b6b361ebb67dec8c8b543a1ee1bc76a7",
"main.dart.js_95.part.js": "db09a5135014fc91c7c1f4ec4e1ad7cc",
"main.dart.js_140.part.js": "ddb3dfb8759496350b96e43e4bb7421b",
"main.dart.js_93.part.js": "4f6af8335c58dc8190ff98ddb8d705aa",
"main.dart.js_275.part.js": "0272bb7b050a34741e463e4b4d0b2100",
"main.dart.js_180.part.js": "a1f580aa3853ec17885fe7e01b0a7b62",
"main.dart.js_179.part.js": "f42eb1d29ab8672b8a237149844b423b",
"main.dart.js_182.part.js": "fde9c837edcac00e1838fc7868355151",
"main.dart.js_144.part.js": "3c394a17af9671a322f45d13fe7f8382",
"main.dart.js_13.part.js": "72902b35d0edb5dd11c246444ba73000",
"main.dart.js_48.part.js": "d213348736e384a87f97f55f3533b8e9",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_94.part.js": "b38cb193158c205b01a7528aeaec64a0",
"main.dart.js_310.part.js": "191bc088281135895a5b0a7371e2e445",
"main.dart.js_300.part.js": "bdd426e665aee978f54179ec02672fb1",
"main.dart.js_68.part.js": "6c5689b6dc18d252a2200ec9a52614eb",
"main.dart.js_269.part.js": "cc1f185ac4ea82ea3ed6fecfd9f6584e",
"main.dart.js_330.part.js": "0923715463a1776a66cd4ba5de25d94f",
"main.dart.js_43.part.js": "eb7aec2816abd9fed5d036e4acd09ca9",
"main.dart.js_28.part.js": "8dc6749edabb3f8ebe75eb42aeb2eec5",
"main.dart.js_303.part.js": "5359565b78184c2107635dcfd0734727",
"main.dart.js_286.part.js": "3ace052c5b4ebeb43c8e9113e1b6e437",
"main.dart.js_312.part.js": "1209640961f52a9060f2cb2b7e9ae4b2",
"main.dart.js_35.part.js": "3bf799846030c092bfc0844d20d02253",
"main.dart.js_118.part.js": "0f33e3e11abcae8051fa1bf4d60423be",
"main.dart.js_75.part.js": "7eae9bf01797aa64d4f0fba61f2dd7cb",
"main.dart.js_11.part.js": "401697a098d6e3f9429f3c4d23e4ad26",
"main.dart.js_123.part.js": "33a3a4a177abf423edc2113612d33adb",
"main.dart.js_37.part.js": "a861049eb88ffcab65109bf3ede6d79c",
"main.dart.js_235.part.js": "7d8235cdb121ff44dc8d317b330caa59",
"main.dart.js_168.part.js": "cce5d3ec3ebd1b6a8627215ba78a7021",
"main.dart.js_313.part.js": "eb0324eae89a31127e9f49da72ae58fd",
"main.dart.js_26.part.js": "f94374b36152db54ba0d1bd493135e9d",
"main.dart.js_30.part.js": "1240d18c599d6c468bc057203c52e6e4",
"main.dart.js_242.part.js": "28092e99180ad554e60c59791470bbab",
"main.dart.js_283.part.js": "b3822fb5d8f759484178a173fd54e50a",
"main.dart.js_293.part.js": "514562ddc971586d06675da6c554e0ef",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_164.part.js": "85ee7bbb475db24a28914826130ac6f6",
"main.dart.js_3.part.js": "0bb85702e9d432b469b5467a326c3662",
"main.dart.js_80.part.js": "1d489d9e052d22872172eab28e9c4f8b",
"main.dart.js_277.part.js": "690c166b24c27c231c90864774a3b5db",
"main.dart.js_103.part.js": "b55392f76d0ea70755f96e459f478c18",
"main.dart.js_124.part.js": "0e30a4b842552d99f1a687e00ac0fd37",
"main.dart.js_241.part.js": "a9c4b73b93bcc9f3e20a5f6cd61fc40a",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_188.part.js": "2be4a8d50ecc110866d6801f6ba01af3",
"main.dart.js_32.part.js": "70f95bfc510630b1de13179e21c3127a",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_52.part.js": "9083d8d0773264df4e211900108ce1d0",
"main.dart.js_4.part.js": "e313379b2cea15d43b56cd775ee08c7c",
"main.dart.js_53.part.js": "ba10f61ef9a4898a0af764c47468b3d8",
"main.dart.js_78.part.js": "3b388a14e76841ec1eebcfa6df907a35",
"main.dart.js_234.part.js": "f995c6c5660c810178409d5f10bc9ac4",
"main.dart.js_223.part.js": "cc29a71fef65d5d44bb70e5cadfed395",
"main.dart.js_213.part.js": "d19295e1a344cdc80d4f108888b9ee4f",
"main.dart.js_15.part.js": "2a061650c21387ee505c1134b5069bf5",
"main.dart.js_105.part.js": "0782e02e4a6b7d48aa520eab283db47d",
"main.dart.js_311.part.js": "eefd2ccdab8d464e3a6090aa9a8b3e9b",
"main.dart.js_217.part.js": "3746a7ae40cccc521479682d9d5c6edd",
"main.dart.js_45.part.js": "aff192c0577f4e7963eee13979e18fe4",
"main.dart.js_289.part.js": "b47445a78e3fb2c89b50bcf7cb154da5",
"main.dart.js_147.part.js": "7ecc8fc415b1d7d4195f27e3efb54311",
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
"assets/fonts/MaterialIcons-Regular.otf": "1b72a4dc7cbe53b2e1064c3a937b5730",
"assets/AssetManifest.json": "8094b89cb5228355fa416eb2d36ad5d8",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/assets/translations/en.json": "2e7b5a2ad790159671c8aa294dee04f8",
"assets/assets/translations/sk.json": "e20b4c2317f454bc552b2df9f86e40e5",
"assets/assets/translations/uk.json": "0da50d429fb403ef58025e516926be1a",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/cs.json": "8e77261ff7d3c5aa6dd12cf2271ce8b2",
"assets/NOTICES": "a7b8f578c50dfe948059051e6983e332",
"assets/AssetManifest.bin.json": "e51d0444af48dbc5955517c9979a51ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js_210.part.js": "6f28007491640e8b009087453ada1c0b",
"main.dart.js_141.part.js": "43d11bb39dc6e4128a3db0f05bf77b8e",
"main.dart.js_23.part.js": "239c1ac993d016069f43b22ae92cc926",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_172.part.js": "031fed7f42522379f9ad5636d5b05724",
"main.dart.js_325.part.js": "da2e14ee7662e05c1c1b16ad0862b44d",
"main.dart.js_82.part.js": "9de313079be1cb695644385bc6ae81d6",
"main.dart.js_31.part.js": "f13e1489e0f7be852323377fad02977c",
"main.dart.js_115.part.js": "6971d9544324102d8162e1a946185c2d",
"main.dart.js_189.part.js": "4941ac149902fc241b06365e639f7872",
"main.dart.js_204.part.js": "7349d1d4ca570c9d68e40429f7ee0972",
"main.dart.js_79.part.js": "49f3e5a2408a11e1ab1153ea17535fe0",
"main.dart.js_268.part.js": "e48ab0d865aa6c87e1c7439bb2ed969b",
"main.dart.js_301.part.js": "332d780088c23156d88c178c0c420b90",
"main.dart.js_201.part.js": "04620d54d7982133ed3d65b092f034d3",
"main.dart.js_297.part.js": "7b9f51300d1f49dc2b26e61329ef2749",
"main.dart.js_192.part.js": "4efcb6a314292ee8665a3b8f0cfa6c5c",
"main.dart.js_327.part.js": "b6eee32012de105f4414eb421ab26ae1",
"main.dart.js_198.part.js": "c562d078df65ee5a33e9b110866009e8",
"main.dart.js_195.part.js": "5ef87bae4c86552843a3c9678b7a74b4",
"main.dart.js_120.part.js": "1601d7dd9fc4cd72bb47ce1d7426f541",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_208.part.js": "698bdecc1bbd910143c1dc2cad3b94e1",
"main.dart.js_323.part.js": "04147784b7dc9d5b5419da34de2b2252",
"main.dart.js_272.part.js": "fb653495041af3c122d16abbf7759743",
"main.dart.js_302.part.js": "d73666599900fb0749be8926634975a2",
"main.dart.js_51.part.js": "9bfa109b1958316d955b2dc060c98c2f",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_237.part.js": "74f9640ba29ad1916ec382304eb9420f",
"main.dart.js_319.part.js": "5b326bdb7f53ed8f7043ebb6fccb2100",
"main.dart.js_170.part.js": "7cfe02235ce5fd13d8807569ee4edcba",
"main.dart.js_282.part.js": "fa71f86480dda358f932995db112b96f",
"main.dart.js_34.part.js": "560215f83a136bf56ff2f46e76298b19",
"main.dart.js_63.part.js": "f87fa6c4643d90093766d61e0a592821",
"main.dart.js_128.part.js": "fa56b26a0c8043dd8aa18d80fdeff281",
"main.dart.js_2.part.js": "b9e6531c824a7c7c84e95c3163b34d5b",
"main.dart.js_88.part.js": "b86a1fe2e62aa800c2f9649e8b076ccc",
"main.dart.js_27.part.js": "aa7365b8bfadfca5d9ff8b96042f9c2b",
"main.dart.js_230.part.js": "57886280dd35e1084c2ffe3c8649c856",
"main.dart.js_333.part.js": "d4233dff3f78a917dc86c8879fd137d4",
"main.dart.js_238.part.js": "85827262b73b35f81cb81f4d8349aa96",
"main.dart.js_324.part.js": "b8b7d32495608f609d0df1d4dc220b99",
"main.dart.js_158.part.js": "8c4a417808860a7d2295db31703f322f",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_40.part.js": "8e8feb859aa1f653c68d42cf8074cc0e",
"main.dart.js_253.part.js": "6f73747e4ef815b26687661418ba3d22",
"main.dart.js_137.part.js": "1d1d91b01c8e61e54d57e00fd1dff5e3",
"main.dart.js_99.part.js": "91ccb230a5882061d075be11f2898ae8",
"main.dart.js_156.part.js": "cd574fbaafc19b4965f49bcaa50de18a",
"main.dart.js_66.part.js": "93a1f6a3768683cb6dc4fe42f7e1fc12",
"main.dart.js_44.part.js": "e9dbde2559b893514fca2d550f97fc22",
"main.dart.js_114.part.js": "b97522065319b6caeda3c2a3a71e1956",
"main.dart.js_10.part.js": "2258388e3980d316e4bfa329356056d2",
"main.dart.js_334.part.js": "7f06a956ed8bd84e61ad92eb0379225c",
"main.dart.js_267.part.js": "67aa7c77dc1807c842b803c73a8f6364",
"main.dart.js_129.part.js": "34bdaa9d5daa53ec5641ee989c13cdae",
"main.dart.js_5.part.js": "57b8195482e64a1fe66e755610125594",
"main.dart.js_76.part.js": "db9a7e4dfb693ae7276291764c52954e",
"main.dart.js_265.part.js": "70827a62ed5ea1b7a7d72c217dee5a13",
"main.dart.js_7.part.js": "bb62dca815d0df9712eacdd3f85f6b95",
"main.dart.js_16.part.js": "9a4739c353e2ea1241155653f150b6c5",
"main.dart.js_294.part.js": "335b1e42097e3d5612a2d7e10a14d4f4",
"main.dart.js_236.part.js": "ec259417ae0dbec191ddac29568ea260",
"main.dart.js_133.part.js": "c2d3de04f9743a8b114e7ad0e8883b59",
"main.dart.js_259.part.js": "0c14271894b326011a540351ba6d46a7",
"main.dart.js_90.part.js": "a51202d82da8d46d8b22d37f2585ed2f",
"index.html": "a048354fc04696a2c6b5df01006b6f78",
"/": "a048354fc04696a2c6b5df01006b6f78",
"main.dart.js_157.part.js": "e9408130340b518710c51274e6a893ab",
"main.dart.js_317.part.js": "41bf3b0e222b863935e551fe222eba3c",
"version.json": "47ff904b8841a4aa411b73a19e08f888",
"main.dart.js_153.part.js": "ee0c942916236db71723dec0a3643e74",
"flutter_bootstrap.js": "a824e5d35176eda201ce45a44a29cee7",
"main.dart.js_176.part.js": "189b0eccd88804b573d19cec8be71a71",
"main.dart.js_306.part.js": "f48cf0d5997d9bc688a5123a93a0bf00",
"main.dart.js_209.part.js": "9b90380592f59987d55e0e73e4eaed54",
"main.dart.js_65.part.js": "ed52db574ea5e051fb9f8406c35afe5f",
"main.dart.js_326.part.js": "cec639033d60830e203dcd1b403fe0f9",
"main.dart.js_224.part.js": "5fc1df94ea8f9f66def73c1f7316d6f4",
"main.dart.js_33.part.js": "2fcbe9cbc59adf8f77c0841419d360e9",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_315.part.js": "b28837f81e8fb2b29a2e443b5fb7d70c",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_9.part.js": "e6e7f364fb384f8661bdc1fe0b7de4da",
"main.dart.js_155.part.js": "fde8561a38c1f6b9ed56b9a13ed43195",
"main.dart.js_309.part.js": "df5d468ba63ca25b4bfb112f8558ca52",
"main.dart.js_239.part.js": "07e264e002289361c5c84364441eded9",
"main.dart.js_42.part.js": "277b0b7af4c0ee201b0728729b89f360",
"main.dart.js_218.part.js": "b8f7f2fddfac8c9f1d19e6064e5224dd",
"main.dart.js_127.part.js": "47484400e1f607f25c682dfb3c3cd0e1",
"main.dart.js_320.part.js": "c954b5da6869ac0dec36cfa78cd8f10c",
"main.dart.js_291.part.js": "46f2ed2657d093566e053e9631741afb",
"main.dart.js_228.part.js": "e0a7afb0719f243328587124d29e30be",
"main.dart.js_98.part.js": "3afbfd8990da42958089de3ead467409",
"main.dart.js_258.part.js": "5dfe0a0d8b44a657c93aed05dffc9076",
"main.dart.js_163.part.js": "60d9c094f94fbd74e0ab9325ff4cc6ed",
"main.dart.js_287.part.js": "e828bb696cd3cdf92681f3312260a242",
"main.dart.js_49.part.js": "45adba36e1d37d8c212eaf20ca17ae93",
"main.dart.js_308.part.js": "3ec3e6e24557c13714a1bdbfc18ceabc",
"main.dart.js_233.part.js": "2b89e842328147cc22d8a5c1d0368dec",
"main.dart.js_212.part.js": "62bf43765a9726c6f730276314297dbd",
"main.dart.js_136.part.js": "431580dd3f3db43416506ea5ccecfbfb",
"main.dart.js_12.part.js": "ea026985c87cfe46dcee9170600317f8",
"main.dart.js_187.part.js": "b14e673b98222fd090676de283734717",
"main.dart.js_62.part.js": "97da18f21c82f4d26b309b3a736331eb",
"main.dart.js_91.part.js": "db8a083ebcba41ae8dd9284c19da3604",
"main.dart.js_232.part.js": "02348cf56b713bfe43761148050b1869",
"main.dart.js_329.part.js": "504bc2a863c3d24df85750df138d0d47",
"main.dart.js_104.part.js": "40205a0f70298c4971245b5049cffb7b",
"main.dart.js_296.part.js": "7ffdbc11c563066fd7b43c71a3e5d500",
"main.dart.js_50.part.js": "214a5400220a7d0518ed523e79b95399",
"main.dart.js_97.part.js": "643b37d6a9cc5af7a1cf7601f8b3cd52",
"main.dart.js_278.part.js": "641df9816b97ed38ba6f0610e30935f4",
"main.dart.js_109.part.js": "f3a5a1882067e09d230f36c60ff1a996",
"main.dart.js_143.part.js": "59d6433846dd7f29c0ec64d3e87e5904",
"main.dart.js_305.part.js": "d53cb344f37a3ce36a8b153d6cb86495",
"main.dart.js_89.part.js": "c70166fe1aa7419e25a178f7f6236874",
"main.dart.js_292.part.js": "59bbf678395a72a0420cd87ca08a22b2",
"main.dart.js_108.part.js": "47d9050ecd96ce9bc14f85d8a2c1c5e5",
"main.dart.js_295.part.js": "19cc67fa67123bb3eeb9e65f2fc37bb3",
"main.dart.js_257.part.js": "4f158d52fce45e66de6a3537f7306900",
"main.dart.js_142.part.js": "3276f3ce1f96b7ce97a9c0325ea5aac8",
"main.dart.js_19.part.js": "5f67b5823608f03155bb5021b80329b9",
"main.dart.js_55.part.js": "34bb0a5841bd30906cf64af55428d7d3",
"main.dart.js": "bb85892d7bf27f06ddd1fde3b652a91c",
"main.dart.js_227.part.js": "59bedd0e37c1424945181ca88d5556f0",
"main.dart.js_280.part.js": "44921214822a88770826fb85ba43d98d",
"main.dart.js_266.part.js": "c83755a7f038a90516e1f5dc28b652d6",
"main.dart.js_261.part.js": "77fad0aa3c6f84e43205e1a9b9c3566f",
"main.dart.js_130.part.js": "c21d58b2210ffb02e9c830cf04abce85",
"main.dart.js_41.part.js": "f9475346ff3ce48efc6dadee47b24a56",
"main.dart.js_203.part.js": "3445d49fe3335398f06c0af3364f1180",
"main.dart.js_29.part.js": "fbd3bcc2391a9bc6770ca53838ed0786",
"main.dart.js_254.part.js": "04ecbcc75a4d1c73b3c2efa756a97a4e",
"main.dart.js_73.part.js": "7ec03fb680d98cef50cc7edb8c43a5d6",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_186.part.js": "e694bea9489507b46f04dc2438ff54bb",
"main.dart.js_271.part.js": "0ffe11997e346da142844364fd70bb5f",
"main.dart.js_151.part.js": "7812d11750f1e95da7ad422ac75fed54",
"main.dart.js_74.part.js": "be9102ddeef0cc809779c43f5f427b6e",
"main.dart.js_165.part.js": "de5ca58e6a6dc51b8083a033af7a8dfb",
"main.dart.js_263.part.js": "d967c6de04c222583f17c8cac6eb5cd1",
"main.dart.js_100.part.js": "44bf307d6078b5251c9a80c0ca1a5a8c",
"main.dart.js_184.part.js": "6ddd4286df95e77649b41b999e2c371c",
"main.dart.js_101.part.js": "66bd3c1b648491f93d4db55f27198766",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_281.part.js": "bf39961ffc03446730c9f6ac1d463587",
"main.dart.js_185.part.js": "7a907b5dfaef1b2054b561b318803717",
"main.dart.js_196.part.js": "90debd9b051dd27a521bdbc275a9dc06",
"main.dart.js_250.part.js": "84425be8aa5bec98a38e6df5d99554a6",
"main.dart.js_83.part.js": "57c122a6b4100f7f08c6bf7a4479c299",
"main.dart.js_102.part.js": "5e3303edfce9f5a34a807c10d20deb57",
"main.dart.js_216.part.js": "9df51c1e50c00a06ab0baf67136f45b8",
"main.dart.js_119.part.js": "6aea618760fd2ba32b26d4672bee7c6c",
"main.dart.js_225.part.js": "1990e7648bbb1ade1b9ff6cd30930e04",
"main.dart.js_211.part.js": "bcb4c1f7b316958b7086137c63f05edb",
"main.dart.js_171.part.js": "43e7e7368d17ce48c366d012d0ac8082",
"main.dart.js_162.part.js": "e8c496a36ec623d310be67ee41b63eee",
"main.dart.js_328.part.js": "c2513298636ddbddc861f5a986f175dd",
"main.dart.js_77.part.js": "cdbc23ba4db4823f4dfb3fd72742c7d4"};
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
