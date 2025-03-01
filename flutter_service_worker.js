'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_348.part.js": "71258df81d6418fd8d08d97fcea5e8fb",
"main.dart.js_157.part.js": "c22dcdeb42d22a89b4708d5a22dee5aa",
"main.dart.js_329.part.js": "016dbe3e70113940d054dfb4ef3cc02a",
"main.dart.js_283.part.js": "7ddb962e9ce5f96a6e13a2aed2cb9162",
"main.dart.js_266.part.js": "7aa6c33ebe8428302bba28ef4d0edec1",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"main.dart.js_126.part.js": "274f74ff989444b2e2a917107e6c987f",
"main.dart.js_202.part.js": "c52ab4fbc5e7ea18d59bdb8d1861cdb0",
"main.dart.js_271.part.js": "4398a9e4131b7e148e32eb116b60316d",
"main.dart.js_58.part.js": "6b4fab1645af0c617676544ad2701098",
"main.dart.js_93.part.js": "ffb7fbef273dbf92609a3aef34c065c5",
"main.dart.js_121.part.js": "58abeb4f60a21b5b22461846b463a07a",
"main.dart.js_345.part.js": "d25604fd2f5b5bc1430a5c88d1243346",
"main.dart.js_303.part.js": "8d3c474dbfbd6bdbaee21e365ad2ed2a",
"main.dart.js_9.part.js": "5351217487e266557ffe8556c9ec1c20",
"main.dart.js_166.part.js": "bc5723c0716d447dcffc42c66d9915ac",
"main.dart.js_170.part.js": "959717c781a836978c45a8cd3e9c509f",
"main.dart.js_236.part.js": "2b3004cca6d21bc420c29bb07d224766",
"main.dart.js_36.part.js": "af1d2fae9db335a2cdca296d2afb414f",
"main.dart.js_64.part.js": "6f402703417c1b6d4979668bb05c57a5",
"main.dart.js_229.part.js": "6b9be16747f5c91e9847bab48e14622f",
"main.dart.js_174.part.js": "f610e8b95041266ceae0fd6c9fc1b04d",
"main.dart.js_368.part.js": "f7a715f715a2e82291bfe9be3fe2aa35",
"main.dart.js_156.part.js": "a77ea42fc1703d0d2cb4055445843a26",
"main.dart.js_176.part.js": "8b1b307c9013168dcbfa917e7b9a479e",
"main.dart.js_258.part.js": "a8755eae3830e37f93be08886b91a3c2",
"main.dart.js_98.part.js": "9c1bd5dfd3c8799231810866e647f971",
"main.dart.js_136.part.js": "3121266890f54041c8686cbfc5b0eef8",
"main.dart.js_331.part.js": "c184fcb3bfe9214f0f98e6c779e7cef1",
"main.dart.js_346.part.js": "e2b06b6a02f92fa8c3d99d1c50f4315f",
"main.dart.js_247.part.js": "e16a04d1f9399417563b086d7865c12f",
"main.dart.js_212.part.js": "7d4ee6f4b4a6787cff9bc618ac2c43ae",
"main.dart.js_120.part.js": "d359f882bf6423bd7c28508e44466427",
"main.dart.js_357.part.js": "bc7176c4fffd7ec00baa919a9e1f8a36",
"main.dart.js_138.part.js": "37325ed719571067379c9beb6ee4ffb7",
"main.dart.js_184.part.js": "16dc9d1e8cafd87a5f030dffada062e8",
"main.dart.js_327.part.js": "c9ae72ed1ade5efb7ee7c534d3fbec39",
"main.dart.js_82.part.js": "5da0a562b252cf25813acaf9b54440b3",
"main.dart.js_113.part.js": "a81e40d962dae8da627bbcd7c4c55859",
"main.dart.js_62.part.js": "9af296339aae9cacf9d2b46620d46999",
"main.dart.js_34.part.js": "d1233a9d327bd6776154c531e5cb1dae",
"main.dart.js_30.part.js": "1e0ffe7457a1a9d3d7fc422cc21d8fa7",
"site.webmanifest": "b85c52eb99a4ccaa9ca181501d6eca10",
"main.dart.js_291.part.js": "bbbaeef8b4baec25a23df0e251c6df81",
"index.html": "248598bf4148bd61a03417e62b801bbc",
"/": "248598bf4148bd61a03417e62b801bbc",
"main.dart.js_29.part.js": "ea1eb5fe36cb589e582c4251a778fb8c",
"main.dart.js_12.part.js": "c7d1572ba9a10a5289edcba72faeb781",
"main.dart.js_79.part.js": "740ba4acdf70f0ad1bc327340714a499",
"main.dart.js_318.part.js": "b7dcb3ad6b4c83f8fc7c5df6d498bedb",
"main.dart.js_246.part.js": "5a26c8870ab838aefe3eb88b53d2e737",
"main.dart.js_298.part.js": "42e2f5983d3aef83f85aa3ce4bcf2334",
"main.dart.js_39.part.js": "300480deaecbacfc6bf65f1c5b85beca",
"main.dart.js_70.part.js": "05336fbcd963c339383747de507888a1",
"main.dart.js_164.part.js": "bcde3b7d4110de124d110e5ea8c07046",
"main.dart.js_124.part.js": "eac6e1d665cd2644c0647c595e0c3c7c",
"main.dart.js_137.part.js": "9449249f9a6267d5caa2793147b3ba54",
"main.dart.js_112.part.js": "079a6ed0d131a610b2fe7834a70bd95a",
"main.dart.js_32.part.js": "addc76b27c08cb3a0b0f2d063980db9a",
"main.dart.js_190.part.js": "051a140b0b3502b3f6f5a0fd231930ca",
"assets/NOTICES": "676824ae0f7212fa5a73ec0b0f4955b4",
"assets/assets/icons/fstapplogo.svg": "5a2496a741472cc3d5cd51ce0646da0b",
"assets/assets/icons/fstappicon.png": "70e3c90fa1d3008a5f4a0ffa96212821",
"assets/assets/icons/fstapplogo.dark.svg": "ba7250bc0804a3dd6bfbe6518bfd5b66",
"assets/assets/translations/uk.json": "06d8c6f66303ae3e257fa9a62fbf09d9",
"assets/assets/translations/pl.json": "35ea01cad74baa9737d80a3da9e49b41",
"assets/assets/translations/sk.json": "e20b4c2317f454bc552b2df9f86e40e5",
"assets/assets/translations/de.json": "6cb279c3defdbed7d78b640f2f566e12",
"assets/assets/translations/cs.json": "9a1c70aeddb3a33dbb99d7be315089eb",
"assets/assets/translations/en.json": "94ad0d1d6e4a5ea89152dc0854f941d4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1530d89653b9d401e12f4ec20750705d",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/MaterialIcons-Regular.otf": "bc3f627db7eac94f4991a54e95d809e8",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"assets/AssetManifest.bin.json": "a0c809cd11f7f5e19c2f0bb1efc8c824",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/AssetManifest.json": "99d32ddf9f4e4d541b982119595c1c4c",
"main.dart.js_95.part.js": "49c634bbbcde16682ae38c48b0200096",
"main.dart.js_301.part.js": "143c0f57400bd8535e61cd4ab8d6227a",
"main.dart.js_334.part.js": "b35d5d60e9c756fe7dea4611920cf4b0",
"main.dart.js_203.part.js": "3edc64e64a2d2317e16d5ab122cea5f7",
"main.dart.js_183.part.js": "45c8e1388ceaae64768a421d83e2454e",
"main.dart.js_370.part.js": "a2f7e78353376471ce5908539b322612",
"main.dart.js_21.part.js": "4e1c9ff5a513a99abaf457a2f9fbccd3",
"main.dart.js_110.part.js": "40879e09873c7e11eb923a39d1501bdd",
"main.dart.js_149.part.js": "5b1885cf32f34d626ff2c0300eff7a85",
"main.dart.js_55.part.js": "141465a170dcdef5b94d942baee31e7e",
"main.dart.js_213.part.js": "af7c0670609a325ab9ca7230d1996d2a",
"main.dart.js_135.part.js": "c5eba6946cc6199d55dfc21b13c77d45",
"main.dart.js_123.part.js": "530d48c653a9dec94f017b50cb849814",
"main.dart.js_319.part.js": "9a84546997f4f6d0b6374b1d3a9e89e3",
"main.dart.js_147.part.js": "a25bf10dc689a0d1bfb19e9807c22482",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_115.part.js": "5af72529742b7bbb2108a04340a07482",
"main.dart.js_260.part.js": "a702ed4f4031f14cea5fc8dc7eed6a29",
"main.dart.js_20.part.js": "9d4072ea1858d00129cd126813a3e5d8",
"main.dart.js_67.part.js": "aedd8f2cd0a1cad0959791eb1f36a054",
"main.dart.js_144.part.js": "18d3f0329463d1c1ec12738037b17082",
"main.dart.js_304.part.js": "c600608d03ec00c31e7ad51688191d3c",
"main.dart.js_240.part.js": "1e5b4011b24bb117f9cbbf52ea143239",
"version.json": "ddf3a33e22fd79382de18408e9a42539",
"main.dart.js_269.part.js": "a056d2e80d4461b8fd84c6fd1abdec01",
"main.dart.js_252.part.js": "0770e164f6ff3fb38e735d1fe18ea0d9",
"main.dart.js_75.part.js": "e0e172dfaaf2f724b6ba0e4a8d64f22e",
"main.dart.js_311.part.js": "5b37c33dea7042bc1b49999ca1284ea2",
"main.dart.js_347.part.js": "270d89bab3569e345ee3b437d5823c0a",
"main.dart.js_99.part.js": "0f65f7144be2c51aec27b10981589039",
"main.dart.js_14.part.js": "81455c0c8b9d77f7bceb02a3f38f0e52",
"main.dart.js_233.part.js": "5f2dbab39e23a40605baafdf636a2ad1",
"main.dart.js_277.part.js": "a84d43f16652e26e73abd13f2c2b27e2",
"main.dart.js_53.part.js": "cec3a9f28364f3d9022ed5e302c23812",
"main.dart.js_108.part.js": "8aab3c6170f9df98211f9311b440e0e3",
"main.dart.js_187.part.js": "801853fb7fe028bf72f9be9a2647315a",
"main.dart.js_281.part.js": "6344597c2f4f8c2ce15a13dbf1470b36",
"main.dart.js_325.part.js": "fb442d2c435134277fdb8456c7912811",
"main.dart.js_305.part.js": "e6ed5a66ce1d1828527cc90a6189be7e",
"main.dart.js_223.part.js": "b8220028a059098405cbf934b1591d04",
"main.dart.js_193.part.js": "871ab8cef9df6109425974248c2de07e",
"main.dart.js_366.part.js": "793f85cecb49663af9adac9b432b7d20",
"main.dart.js_264.part.js": "24d626bbe458a27d24481535321d2b64",
"main.dart.js_371.part.js": "ec554c95164e316b4fdc5129fa8096c2",
"main.dart.js_168.part.js": "07c9f69fe20fd990de4d95484f250eb5",
"main.dart.js_341.part.js": "b8070043702ab465407c2c6e572cea91",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_243.part.js": "f13ca135f5900d4c8b39ececfe380a0b",
"main.dart.js_294.part.js": "365e39b430c3c6fe64e40fff3f23cc6b",
"favicon.ico": "f3f4b2a26513ca4805474cf194bd9242",
"main.dart.js_343.part.js": "df302b7cdf39f9409a6739be0b6363cb",
"main.dart.js_195.part.js": "4b111169d976dd543f317874639928e2",
"main.dart.js": "1c6c68e9a53ff0163de94faf396d1044",
"main.dart.js_216.part.js": "6d8c0f75486a9de1c2cbdef15dc09bf3",
"main.dart.js_65.part.js": "4fdccf32f3c9bd334b8a6a6ae35fcafa",
"main.dart.js_354.part.js": "4347d267d1d4b0b99ba92cbf310b089c",
"main.dart.js_177.part.js": "12ff29a9fdf83c8559cbf8ddbc8b5fb7",
"main.dart.js_310.part.js": "04033f8675b2aca362f3dae98ad6d2de",
"main.dart.js_2.part.js": "d9845866ee9672fb1fa0bbe555da48ca",
"main.dart.js_24.part.js": "548aa303466f804a020cd589d78d7545",
"main.dart.js_244.part.js": "92307db39b3784e5eafe2c295461144b",
"main.dart.js_47.part.js": "1778b5c426ffef6143ae7a359d305841",
"main.dart.js_152.part.js": "c36cd4afdd28d3967e6af08294cb1c4e",
"main.dart.js_159.part.js": "27bb44456f3482a1d30bf8119206fccb",
"main.dart.js_300.part.js": "3b2a4d9ef8198141963a547d94546b28",
"main.dart.js_158.part.js": "0f53d784b6bd015542250b7cc5093e47",
"main.dart.js_71.part.js": "00b798adfa44b3aed103a60e34f57941",
"main.dart.js_342.part.js": "3e70fb2e7dde23576c5776e916b256bb",
"main.dart.js_340.part.js": "4dd0e8e928f86a57b5041ba46ae2140c",
"main.dart.js_338.part.js": "21b29f636fd09f8997ef0be27fa167bb",
"main.dart.js_116.part.js": "e76330ab1c4bdd2cd2d5b475356972d9",
"main.dart.js_165.part.js": "6675de4243e58a7a3df28095768e467c",
"main.dart.js_323.part.js": "bf456b7ab7ec0b515ac285c1319abc25",
"main.dart.js_142.part.js": "ca5e18396f46c8c4fd18cfa454521bf3",
"main.dart.js_163.part.js": "b338000dbcb338acdc9b36243b14e7cc",
"main.dart.js_313.part.js": "8dc5226f9402d0eb39db8bc6d29136df",
"main.dart.js_25.part.js": "4284cbf2da1c78a555ae74f743679e9e",
"main.dart.js_17.part.js": "601299534b025ce069e33e982d63314a",
"main.dart.js_312.part.js": "1023aa4aac26806b5600a38c3aafbf82",
"main.dart.js_61.part.js": "b590474f6f8b4f99162f33eba161367d",
"main.dart.js_101.part.js": "0ce14f884acba0d7336bdbfaeaa9b493",
"main.dart.js_333.part.js": "5fee1dda27b57e68fabd15322b51f122",
"main.dart.js_127.part.js": "873d52f0b32b17bf04c088155513e78a",
"main.dart.js_302.part.js": "6d1d8600c2f0aa27b31a5448f5633978",
"main.dart.js_351.part.js": "d03c965cb1f4d96e8c8c7a152e145815",
"main.dart.js_349.part.js": "a820402ee71405660f8e9bdb6aee718f",
"main.dart.js_220.part.js": "a682c40cb64e6fbfbba6575611261acc",
"main.dart.js_365.part.js": "c28b66011cf3cd2128cdfd6d1da301c9",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_306.part.js": "71a3282ec082ec2e39a91c87df7a723c",
"main.dart.js_139.part.js": "f3e4b2ea2d4e25f5c4e93713ecc300c4",
"main.dart.js_56.part.js": "bdd490306c6423ad1f6e7d4e7a480ec6",
"main.dart.js_238.part.js": "289b7039e8156e1be6955de040d5456e",
"main.dart.js_130.part.js": "a56a7ee261fe73e68338117d2e3cd067",
"main.dart.js_367.part.js": "23cb1570d20fe521d91e35e762d7e15f",
"main.dart.js_332.part.js": "2ae14bcf25cb06f4dc3f1572ea443fa6",
"main.dart.js_122.part.js": "d276c312a210a489dcba8000f96425ef",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_88.part.js": "93616df4088d381ed34d943b6a6d8efc",
"main.dart.js_4.part.js": "eeea18c74d7aa6d469ff799e4f8545ba",
"android-chrome-512x512.png": "43661cc1c4cd6d25de716924dc00601a",
"main.dart.js_337.part.js": "457b3f8777206b5389169c010c2dd982",
"main.dart.js_3.part.js": "9e5f895b7df6548ae9c7326d68cf74ad",
"main.dart.js_228.part.js": "a7ca3eb266e6bf00759ab6158051e628",
"main.dart.js_175.part.js": "a8e314c03ff1b57176c42e861ba21edb",
"main.dart.js_280.part.js": "f88ad09f1afff992eaf5a33caf539139",
"main.dart.js_262.part.js": "d38879b321ae668e3aaf171dcf76975a",
"main.dart.js_96.part.js": "51af6bc3c0a52b0ae84d0cdba382cc5f",
"main.dart.js_296.part.js": "a13f0f898ceee47bca3dfdc2679776f1",
"main.dart.js_308.part.js": "cffae1cbb170cb8e61d3e55092760e45",
"main.dart.js_40.part.js": "7c0cd13b317a6b16d6d63d3d5fdcfd4b",
"main.dart.js_107.part.js": "a5210310da4e79b2d3f6e9b74f5e4b40",
"main.dart.js_225.part.js": "37f587551e183ca48e0047aa3d50ef42",
"main.dart.js_321.part.js": "b46ba9dcaa316a4e75e2881a42a14022",
"main.dart.js_358.part.js": "8d6ca0b09975f511cd9ba8312be83655",
"main.dart.js_76.part.js": "2da65f80552ed35c64d4b236c9de6ecf",
"main.dart.js_90.part.js": "f392fe47a383543d81af05c3aa616ac0",
"main.dart.js_52.part.js": "06a45862cd606effa4e5fcc2d491f9bf",
"main.dart.js_255.part.js": "6569cc522e6638a14346cda699baf990",
"main.dart.js_282.part.js": "f79893fc958a8e348b0e71a7a136ce46",
"main.dart.js_28.part.js": "4b58fb2c8b7be56eb9a671544d4ff3ed",
"main.dart.js_288.part.js": "09c0403e5fed944e09f037d272102632",
"main.dart.js_241.part.js": "74d0d4bd79bb1b9f4cdbfdf09d0dbe06",
"main.dart.js_234.part.js": "0f0ee979c4db4a07ed2568d3aa95d958",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_200.part.js": "d8d8bd69f2c1b5306f223cd2f5dd9326",
"main.dart.js_344.part.js": "17700b9963a150be3bd85ed1693fbd06",
"main.dart.js_196.part.js": "fd9354347edada543c41d0109005603b",
"main.dart.js_77.part.js": "516f3de96354e3d7539bc47375de76f9",
"apple-touch-icon.png": "e4044af6b13bd450cfc5dc7268fc640e",
"main.dart.js_287.part.js": "3f96b271337ac0e9609c78c1697ea50e",
"main.dart.js_182.part.js": "6cce6caf11bf0086551955d6fd5c1983",
"main.dart.js_41.part.js": "1ae1961577fac188e7f8bae82ae6042f",
"main.dart.js_335.part.js": "18982a563a7449a9b4c500863cc26abe",
"main.dart.js_13.part.js": "3d367efdd759c8ee00f718d17cae0f10",
"main.dart.js_43.part.js": "48b9a87f5c54f01a075e931ea827f04f",
"main.dart.js_189.part.js": "b16550253139d98b015899fbf8c69911",
"main.dart.js_198.part.js": "d1217e4d764ad38428231cd4a1716106",
"main.dart.js_59.part.js": "8e86a7dfab713ceed1e78c1483c3c85f",
"main.dart.js_8.part.js": "11d996e7d949e657ed622b463a012712",
"main.dart.js_286.part.js": "b650c588453473f11c2e1c521a616d98",
"main.dart.js_111.part.js": "050ad4cb51d4dc7d0d8ca24f84a0b292",
"main.dart.js_100.part.js": "ab08d73e6625c7de7304dcfa48f17bc0",
"main.dart.js_224.part.js": "61dc339ad7383c5c1087325cc62eeba9",
"main.dart.js_22.part.js": "25db2a427df20c945ef922c22607d310",
"main.dart.js_355.part.js": "aebd1683889591cbbd940329de7708e7",
"favicon-32x32.png": "11d0dfb28bd3a57779a71773b8baff0e",
"main.dart.js_257.part.js": "e6e8d1c08fa54aad8176b485fe29267e",
"main.dart.js_227.part.js": "ba346f7035219cdd72efbd4febda2dbf",
"main.dart.js_172.part.js": "1290214e6c4e5d18a26f239f2bc01d06",
"main.dart.js_154.part.js": "11c3897ed9fbe6c3b68ecd68dd5f9782",
"main.dart.js_186.part.js": "a5d4d0b3a88c4ae210ebbd013cc410c0",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_102.part.js": "a3554a39f9d0c1c015018eee29e53268",
"main.dart.js_68.part.js": "d0ae16644684a8eb5dde76325c4bf4ce",
"main.dart.js_143.part.js": "6559b3925c0a4f9a9887e8f61dcf1bed",
"main.dart.js_211.part.js": "04452b5e909a14bb5a1edd21c7d4fea5",
"main.dart.js_364.part.js": "93a1a6abe7e47cec91824e7d2ccc87d7",
"main.dart.js_356.part.js": "58e40cad694869d8c548e50a3e076554",
"main.dart.js_169.part.js": "a5dcce2aa11d58c37d0ec9d550eddf6d",
"main.dart.js_180.part.js": "2987e39e5c9ad49448f2f0e8e83862e3",
"main.dart.js_181.part.js": "4f3a6373103d2ebeddab5872ea389f86",
"main.dart.js_16.part.js": "9bca150d0bbfd38474369efd74f8d7a2",
"main.dart.js_118.part.js": "1204c01ba85195edcb92652ae35641d2",
"main.dart.js_270.part.js": "cb78de2f6055b04e757510b671dc8f80",
"main.dart.js_103.part.js": "cfb701f6f6cb10763a99de8cb97bc620",
"main.dart.js_352.part.js": "e7b27b1ec267147802584b0a7374f691",
"main.dart.js_11.part.js": "bb8ab4aa56e695a62b91f60e105d0bc5",
"main.dart.js_92.part.js": "656878128f8bd7b6d141ec0d4bf29eea",
"main.dart.js_173.part.js": "94b6167c7ea4276dcedd78614c5c6318",
"main.dart.js_274.part.js": "6a20a7e67699ac78756971afd0a7cb89",
"main.dart.js_326.part.js": "1981e53a44250d4eb2abf2e486fcf14f",
"main.dart.js_7.part.js": "d22cba0dd52339a92a87762aaf443aec",
"main.dart.js_194.part.js": "b0a3ade2b312d5f35d5d009bbdd5a4e7",
"main.dart.js_87.part.js": "30b728d2f2d80c92a34f3c3b309009b9",
"main.dart.js_37.part.js": "2f2566f43809df2e2be7b4acecf2f823",
"main.dart.js_151.part.js": "db210825246fa579f7499e752ba45a05",
"main.dart.js_239.part.js": "88c7976603b03f91a3516a951bb0ac31",
"main.dart.js_320.part.js": "a84fdc577f28e10f536f927a89a45b2a",
"main.dart.js_289.part.js": "db6cd5e8827d4f4defe803c68588712d",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_54.part.js": "fa9c1276cce56f452984e85f45a5e680",
"main.dart.js_295.part.js": "381269006f98dbde2ee27c59a0d08b27",
"main.dart.js_199.part.js": "65f526e8d2f0ffb9bff01f4768b4184a",
"main.dart.js_150.part.js": "8c7fcb6f3e447d09188114f92d2cc3dd",
"main.dart.js_275.part.js": "981eee61da3b902a87c8922a363df117",
"main.dart.js_207.part.js": "c3425457cd3c0394a067aa808cbc888b",
"main.dart.js_119.part.js": "22144d3bca84fd38297d7048f2f0dd3f",
"main.dart.js_284.part.js": "bb7b35821ddc25c580c5e24ec0060408",
"main.dart.js_369.part.js": "93dfcb5326b364a07a16fc959b00d2b1",
"main.dart.js_191.part.js": "51f06999eb9beb67e782f5fefd095d75",
"main.dart.js_131.part.js": "44ec93f46b256028a01a14bdc0dbb373",
"main.dart.js_359.part.js": "85996e2cb8f8daa0e2772e53ca5e24e3",
"main.dart.js_141.part.js": "d5f8941fc47796e7552312f0aed02228",
"main.dart.js_94.part.js": "4b003eb2ad1ea53c619b09da064d47d1",
"main.dart.js_290.part.js": "50bba4d39203696bfe59711cdf77e161",
"main.dart.js_97.part.js": "f276c54d151eb87440d24b93581d7931",
"main.dart.js_222.part.js": "ddce1e114b949bf8766932f6e793bd33",
"main.dart.js_35.part.js": "f06b4fa55058b0ba5d5d66ffcfe0c662",
"main.dart.js_217.part.js": "0dd6d85f762a2dc952ec7c409ca15092",
"main.dart.js_109.part.js": "a2355cb169e03be63ab38bac1cc75c32",
"main.dart.js_145.part.js": "873618ccf0d6a7fbb753cdfb622560b7",
"main.dart.js_27.part.js": "fe6a1bd9c8b9bac127383d45cc74ed80",
"main.dart.js_330.part.js": "764c253a94089bedf47c8f991400fb42",
"main.dart.js_148.part.js": "9cca8ca2895f9aee68c3a1f094794349",
"main.dart.js_268.part.js": "77d24fac9207b4a79a3db528bc1e52ce",
"favicon-16x16.png": "517bb576ed98bfc4aa542bea1fc815e6",
"main.dart.js_242.part.js": "34e9a7ceee085456ba830dafe12fcd3a",
"main.dart.js_251.part.js": "d814c14cebadf43f4617a198f8f5df53",
"main.dart.js_80.part.js": "7d1440f523fed89e2160483c18b29f39",
"main.dart.js_18.part.js": "8a4cbae905b270cd6d31bdb7cdd9eb8c",
"main.dart.js_361.part.js": "4c630bcb029320b267f591d6870ad545",
"main.dart.js_26.part.js": "782defddeaddc72e2816da85f3ab22fa",
"main.dart.js_353.part.js": "86e26d5ac1b9f96943fbb69c9b572552",
"main.dart.js_51.part.js": "cad79c7e5f6bd4c3d1c408032a81c1e0",
"main.dart.js_250.part.js": "5e59275c566162f2de47c9b6529e3a95",
"main.dart.js_105.part.js": "d88e97ba68d914642ca6b5d46ba3f03b",
"main.dart.js_63.part.js": "db35480c8c65356847ca40b3b9d6194c",
"main.dart.js_235.part.js": "6f54c07d92b8b8a6f1c2c5ffcd63c2ad",
"main.dart.js_106.part.js": "9ed1b1c74c11eb805444ff3abad85ee9",
"main.dart.js_272.part.js": "65d576e76ef7003879c19cc85c248117",
"main.dart.js_134.part.js": "b7066a8ba18783ac79968306e2d22def",
"main.dart.js_161.part.js": "3429467790765fbb0a6822910e803c25",
"main.dart.js_38.part.js": "3db140e5beb28f49c8cad560537c3d7f",
"main.dart.js_360.part.js": "76cb297bd5868764e4f7c739b83fc009",
"main.dart.js_362.part.js": "543c87e20056e60996ed12376d027b85",
"main.dart.js_259.part.js": "c1233136443774bcbc7e5e62c6667b2d",
"main.dart.js_104.part.js": "cea26b90baae5ae31b9c13bae1127c7d",
"main.dart.js_31.part.js": "761c0085fe7a387ef6b1f3ddff45ca0d",
"main.dart.js_125.part.js": "390b6a24f25520e46b66c60c8faa4bd5",
"main.dart.js_19.part.js": "11cfeb20ebe32cea75f88248c910884c",
"main.dart.js_256.part.js": "dcf71283efea7de4679c2488f770e833",
"main.dart.js_297.part.js": "7e56d19bcea19d5dbf93a05be35ebf45",
"android-chrome-192x192.png": "431a129b17ffe4e91aa35a3eaad21eb8",
"main.dart.js_316.part.js": "d18fa92b8a0eddeaa8e70032de9c0301",
"main.dart.js_171.part.js": "5cc6c52865bcbeaefce1c0ad91c211ad",
"main.dart.js_363.part.js": "64482137293c84aec799d46e90934f41",
"main.dart.js_33.part.js": "1f735c48391ce05cd7503b709fcdfeee",
"main.dart.js_201.part.js": "1fc29d110c1473193d7bb6b45d96532d",
"main.dart.js_117.part.js": "59f83d894909ddd6caeb45dd5f79902c",
"main.dart.js_1.part.js": "d8e50493fdc5c324d38ad6c1c785e7b9",
"main.dart.js_261.part.js": "832a4620ed6a46e80c21bf019fff1440",
"main.dart.js_44.part.js": "42db1a9037868b7550bee24c89cf7395",
"main.dart.js_328.part.js": "47abe8ba3171aa5e99861ce30ab8de37",
"flutter_bootstrap.js": "dfcd615a7207f0e5727d1ec38075aeab",
"main.dart.js_15.part.js": "52c74251b4ce1d76912cdfa239586f0e",
"main.dart.js_226.part.js": "fed53e9bc6f0c39a73972d5607bd2f47",
"main.dart.js_167.part.js": "f8860d6b02c27b0f29c262d6916a08f2",
"main.dart.js_317.part.js": "a7c8b760f707369365aedabcbe4132b5"};
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
