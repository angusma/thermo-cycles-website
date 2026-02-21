'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "01486e61397ed53a0bf8f6cb08443df7",
"version.json": "47fe52a9db5b54682bd1a8a4bd9c7845",
"index.html": "a4696f3a6917f56b514d96b38dc6a122",
"/": "a4696f3a6917f56b514d96b38dc6a122",
"main.dart.js": "20fd646f2f41163247207a402d760e39",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9e46c9a1469c53f96db7bb7924920ee1",
"assets/NOTICES": "b7a4a39df7201112f7100a8657da7c7a",
"assets/FontManifest.json": "f9097450010bd82cf16bb016ba2219d8",
"assets/AssetManifest.bin.json": "45a0d24c9785915775cb4b8d093b2095",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "8a97d1eee24600c32b85240f9fe41247",
"assets/fonts/MaterialIcons-Regular.otf": "f9ea34dd76f3f0fce41ee549ecc5c45e",
"assets/assets/tables/r152a/sat_temp.json": "8df4b00bf74792a28efdc1860c0afe1a",
"assets/assets/tables/r152a/superheated.json": "33bbac956c2590a710d148ea46fe1036",
"assets/assets/tables/r152a/sat_pressure.json": "816eda9c5142a1db993d3c428d37ffda",
"assets/assets/tables/r134a/superheated.json": "ac3382f90d1fc36931b9437fdc121478",
"assets/assets/tables/r134a/r134a_sat_temp.json": "e25aaed70b99b849d24d61272473f81a",
"assets/assets/tables/r134a/r134a_sat_pressure.json": "b57c1bc6bc8091b5bec695150f8a4d13",
"assets/assets/tables/r245fa/sat_temp.json": "5ddc375c2f67dc440821f3628bf50475",
"assets/assets/tables/r245fa/superheated.json": "2b28c1f3b195b225e14ab21579ddb52e",
"assets/assets/tables/r245fa/sat_pressure.json": "b8fdac99d0c319dd686df1ac2aba2a4e",
"assets/assets/tables/r22/sat_temp.json": "d1bee9dbb26e1cf9399e0b07b50e1eca",
"assets/assets/tables/r22/superheated.json": "72243775b52d37a4989fe35a97ec548a",
"assets/assets/tables/r22/sat_pressure.json": "f4e75029d54800271c2780c06ee4b24d",
"assets/assets/tables/r12/sat_temp.json": "96cb50882f65369db9d74c68ff26935c",
"assets/assets/tables/r12/superheated.json": "fd5e6058f1400661dfd662d817d30010",
"assets/assets/tables/r12/sat_pressure.json": "65855e58f731ec7519fd4cd881c0e17e",
"assets/assets/tables/water/sat_temp.json": "596e6a979f74fe41baa3f59215377324",
"assets/assets/tables/water/superheated.json": "c90aec06eecc1809a03e0bec340eca6e",
"assets/assets/tables/water/sat_pressure.json": "5f0e7a1a22d843fe2433a8aaa51e1a28",
"assets/assets/tables/r404a/sat_temp.json": "d5a789562148e27e7c7d3dd0fa87aef3",
"assets/assets/tables/r404a/superheated.json": "8450c8ac07e80785dc1a71c63e7efeef",
"assets/assets/tables/r404a/sat_pressure.json": "09c4491672e57038545b9a7e773c525c",
"assets/assets/tables/isobutane/sat_temp.json": "569e2b7df6f972971ffc050eb9b62189",
"assets/assets/tables/isobutane/superheated.json": "4cd68eb35eee6696e14f25f61e7d5fd3",
"assets/assets/tables/isobutane/sat_pressure.json": "eed715993fd003ceaf2041acac832fe1",
"assets/assets/tables/propane/sat_temp.json": "d3744939cfdddfecd9f3aeaebc3d337f",
"assets/assets/tables/propane/superheated.json": "0d95e670e0c76048ede55ebb4e7d0653",
"assets/assets/tables/propane/sat_pressure.json": "0f78e03a7e74d343482c1c1328f5575e",
"assets/assets/tables/r125/sat_temp.json": "37e2689d1aaa9656d96b9b010ea33442",
"assets/assets/tables/r125/superheated.json": "2a98d4f7549b5dcc231ce372072a5e1e",
"assets/assets/tables/r125/sat_pressure.json": "2342b5a4212406d370f81cef107739d6",
"assets/assets/tables/r123/sat_temp.json": "72caa7a4725976a294069d264092dfad",
"assets/assets/tables/r123/superheated.json": "40c46d24718a9127bb8d13835357f7f7",
"assets/assets/tables/r123/sat_pressure.json": "77beda1b2625d39a342f57b6f2c1dcaf",
"assets/assets/tables/r32/sat_temp.json": "5613b23cd4bcc0484cfe1afde2e93bd1",
"assets/assets/tables/r32/superheated.json": "f798f3d959bfaf2272a33fea6e456c2b",
"assets/assets/tables/r32/sat_pressure.json": "f38413d4535ef08704259fe452f9ef97",
"assets/assets/tables/r410a/sat_temp.json": "f60f95bea04a143a7bda4d5c2064398c",
"assets/assets/tables/r410a/superheated.json": "e46a9e429dba0090be29574108f24178",
"assets/assets/tables/r410a/sat_pressure.json": "1f319102e5236753560fa9f3106058a4",
"assets/assets/tables/ammonia/sat_temp.json": "295516c425121c2bef0b1ad8f59e93db",
"assets/assets/tables/ammonia/superheated.json": "6f6c8296717538bbae75c2def6c105d1",
"assets/assets/tables/ammonia/sat_pressure.json": "9f67136cd70491784595eb409dd4c8e8",
"assets/assets/tables/co2/sat_temp.json": "50af6d24cca3602c2047c341201e39dd",
"assets/assets/tables/co2/superheated.json": "7c3ceed4938a4363de9e1a25e64f4644",
"assets/assets/tables/co2/sat_pressure.json": "9ffd7232b2f3e9330d498021bfe9ef86",
"assets/assets/images/cycles/brayton_pv.png": "353ca8c089a998462852302503f204bd",
"assets/assets/images/cycles/pl/heat_pump_ref_process.png": "fa9eaad44916c1704caeb6c7cfbdc516",
"assets/assets/images/cycles/pl/rankine_process.png": "9d92a8b61dd613cfd7368aefd882182b",
"assets/assets/images/cycles/pl/flash_chamber_process.png": "ceec2eb11771ee105e591ca54a7eb62b",
"assets/assets/images/cycles/pl/cfwh_process.png": "b4b67ff3241a77d13a780610f12602c6",
"assets/assets/images/cycles/pl/regen_brayton_process.png": "2b7f5f99bf19b4fd88623439e66d1517",
"assets/assets/images/cycles/pl/diesel_process.png": "58808fd757e556d2310f5146453e38e2",
"assets/assets/images/cycles/pl/reheated_rankine_process.png": "5da6c82c8c6b2cb8e59891eedbb22a04",
"assets/assets/images/cycles/pl/otto_process.png": "017457093742d96ce5d6e182395fb4f6",
"assets/assets/images/cycles/pl/ofwh_process.png": "86bb3f766d6f67fd52ebfe54c3b1ab28",
"assets/assets/images/cycles/pl/cascading_process.png": "811fdf63221b9cf7f933277db0ea836c",
"assets/assets/images/cycles/pl/brayton_process.png": "6161505335b787057a4d6defe3045dcb",
"assets/assets/images/cycles/pl/carnot_process.png": "375b33dd7e9baf499b6751b87ca2545d",
"assets/assets/images/cycles/vi/heat_pump_ref_process.png": "62c8df4378e214926a5a9c83ff70ff2d",
"assets/assets/images/cycles/vi/rankine_process.png": "c827ef3718c5718e43ec1d03a0036c44",
"assets/assets/images/cycles/vi/flash_chamber_process.png": "b8e531e26b511fffff399488c14e3e81",
"assets/assets/images/cycles/vi/cfwh_process.png": "a8b77a97c1a2ecac6b2c7ab23cc4b5ac",
"assets/assets/images/cycles/vi/regen_brayton_process.png": "9c828aff2d86b2e691913ac383e99a7a",
"assets/assets/images/cycles/vi/diesel_process.png": "5c30880cdffde05d4d1dc9db513d7974",
"assets/assets/images/cycles/vi/reheated_rankine_process.png": "6777b42b6fc2211948f62c88ddc3d5bf",
"assets/assets/images/cycles/vi/otto_process.png": "29f353af2b157737c6c5f56f5bddb177",
"assets/assets/images/cycles/vi/ofwh_process.png": "6f8786cf9b07923f27dabb12931a6687",
"assets/assets/images/cycles/vi/cascading_process.png": "523768b98ba65d02acb7ba28556dec98",
"assets/assets/images/cycles/vi/brayton_process.png": "a2629df31dcf11c787b48cf1ef644d4b",
"assets/assets/images/cycles/vi/carnot_process.png": "103a9ef33e79390713bd4561fe2dd7f2",
"assets/assets/images/cycles/heat_pump_ref_process.png": "508aab0503aba367a5fbef7ff12ebd58",
"assets/assets/images/cycles/ms/heat_pump_ref_process.png": "3d9dba59d98a08c853dd4ca7fb416cad",
"assets/assets/images/cycles/ms/rankine_process.png": "3fda87877282b80092bb52bfc7403ac1",
"assets/assets/images/cycles/ms/flash_chamber_process.png": "7f9b0b82dcbc9dd691c262ee50045a45",
"assets/assets/images/cycles/ms/cfwh_process.png": "e04dac40a9cc6dd610ac9c54fe156849",
"assets/assets/images/cycles/ms/regen_brayton_process.png": "286439e07671881e46ed4076eccc05da",
"assets/assets/images/cycles/ms/diesel_process.png": "565d5808af2255f4feb4a1dc65a6e5fa",
"assets/assets/images/cycles/ms/reheated_rankine_process.png": "8688ee50dd20179606319345630f9d9d",
"assets/assets/images/cycles/ms/otto_process.png": "2667b8d94d0a601bf30df5e0215ce82d",
"assets/assets/images/cycles/ms/ofwh_process.png": "f91452ec824187d35a5595cf22a3daf7",
"assets/assets/images/cycles/ms/cascading_process.png": "2bf07864ff359d64cb33be6e605fe27b",
"assets/assets/images/cycles/ms/brayton_process.png": "f0c92c8cc5283b5dad6a7ef7b109c42f",
"assets/assets/images/cycles/ms/carnot_process.png": "cd125d36adbc731c5cd3ce6cac92ce19",
"assets/assets/images/cycles/reheated_rankine_ts.png": "0232ea5e292b4bc1da95fb9353367dc4",
"assets/assets/images/cycles/cascading_ts.png": "e98aeb05d737b238a1c5edb328a051ae",
"assets/assets/images/cycles/rankine_process.png": "6a9e1c255bb503937b833fc995bb3397",
"assets/assets/images/cycles/carnot_pv.png": "0bf029ae8a8ac8a186fbb6b95e52bf28",
"assets/assets/images/cycles/rankine_ts.png": "c101adc81f6f53d49fc64384c2528821",
"assets/assets/images/cycles/otto_ts.png": "b538fa87da2bba7b38ec60c679ee04a8",
"assets/assets/images/cycles/flash_chamber_ts.png": "46b378a8318c368f32a0b491ef36f2f1",
"assets/assets/images/cycles/regen_brayton_ts.png": "5c14ba62277f39bc2aa6b95779ccb7f7",
"assets/assets/images/cycles/ja/heat_pump_ref_process.png": "548b23207d49427d80aacb049473a18d",
"assets/assets/images/cycles/ja/rankine_process.png": "02808c4839524869e730622241e7d969",
"assets/assets/images/cycles/ja/flash_chamber_process.png": "dfdeae66b73b58c7b95f04a6a146ad4d",
"assets/assets/images/cycles/ja/cfwh_process.png": "e8522c84d3a75c37c4f31e53f4720ccf",
"assets/assets/images/cycles/ja/regen_brayton_process.png": "e9a625f5718453e77a3a8426d5660815",
"assets/assets/images/cycles/ja/diesel_process.png": "c90f658756b265c411e8bb92806f7ebb",
"assets/assets/images/cycles/ja/reheated_rankine_process.png": "ba208578034444bf9d0df7f67e65f7a7",
"assets/assets/images/cycles/ja/otto_process.png": "a27279e1b4d8c6be45a9ce1de761b6b6",
"assets/assets/images/cycles/ja/ofwh_process.png": "74e6e55bd420061b4d2bfe4ddcedd198",
"assets/assets/images/cycles/ja/cascading_process.png": "32062411edb3be400a95ae007bed639a",
"assets/assets/images/cycles/ja/brayton_process.png": "deb03d21a2aa10e2fef4b21678b9db5e",
"assets/assets/images/cycles/ja/carnot_process.png": "68195b37905a05e2165327bf154e7f1c",
"assets/assets/images/cycles/el/heat_pump_ref_process.png": "d5d8d1e97c3d59739e74682ec745fd20",
"assets/assets/images/cycles/el/rankine_process.png": "bc3f6d379932e555d4a6c3000c777235",
"assets/assets/images/cycles/el/flash_chamber_process.png": "36886682de597aae090233578a4d385c",
"assets/assets/images/cycles/el/cfwh_process.png": "a8278fdbc130fa4876d8d97b3b5ddefa",
"assets/assets/images/cycles/el/regen_brayton_process.png": "6f80da846c1d8755c44da193513ef773",
"assets/assets/images/cycles/el/diesel_process.png": "a29af0e038d353f296e3bfa7a2aabea1",
"assets/assets/images/cycles/el/reheated_rankine_process.png": "ce29c823c54daa92dc3425c18147cf0f",
"assets/assets/images/cycles/el/otto_process.png": "384f9b8d429c06929f491c8ad95f8e00",
"assets/assets/images/cycles/el/ofwh_process.png": "c3dcaec78d13e838b796a93216e79f37",
"assets/assets/images/cycles/el/cascading_process.png": "8f2655783b5c39f914e5eb56a215ad07",
"assets/assets/images/cycles/el/brayton_process.png": "603ae08d6e6e35c4925a9f222a9bb533",
"assets/assets/images/cycles/el/carnot_process.png": "03f0be230bff3674e3267c94ce144d61",
"assets/assets/images/cycles/it/heat_pump_ref_process.png": "5526d4cfd19c0046fa5cecdaba81625f",
"assets/assets/images/cycles/it/rankine_process.png": "b6f22171ad50a3853cdbd3476ce4b1e4",
"assets/assets/images/cycles/it/flash_chamber_process.png": "17b6c1603a63acae23f89ef245e4b25f",
"assets/assets/images/cycles/it/cfwh_process.png": "50cc5b02b012839e61c33b390423e141",
"assets/assets/images/cycles/it/regen_brayton_process.png": "e095dfae5b7b29546080211ccfc98c68",
"assets/assets/images/cycles/it/diesel_process.png": "bef94d2894a6ddf7eb488ab2ae00c238",
"assets/assets/images/cycles/it/reheated_rankine_process.png": "47fcf3b535731d58d7dd7bd011cf26fb",
"assets/assets/images/cycles/it/otto_process.png": "821a24f079e6ce80bfde271639945985",
"assets/assets/images/cycles/it/ofwh_process.png": "4a7054121c40091475b4867bcd39dd16",
"assets/assets/images/cycles/it/cascading_process.png": "43273f85f667f02523ca765d21ca3b97",
"assets/assets/images/cycles/it/brayton_process.png": "71b1e35d86298891843894b8631f4efe",
"assets/assets/images/cycles/it/carnot_process.png": "6960b47f60b7444849f5c0a2e0ba2f5e",
"assets/assets/images/cycles/cs/heat_pump_ref_process.png": "cd8184f577366bd2b93ce1e0a53820d1",
"assets/assets/images/cycles/cs/rankine_process.png": "ead6890c43589c7b95021d5024e896ba",
"assets/assets/images/cycles/cs/flash_chamber_process.png": "63439b56dbae587cb27ce09104c6f325",
"assets/assets/images/cycles/cs/cfwh_process.png": "8b21c08922fae425293301985a73d7f0",
"assets/assets/images/cycles/cs/regen_brayton_process.png": "5be63508fb6756db1d700c2055c01bdb",
"assets/assets/images/cycles/cs/diesel_process.png": "edc8d9145f981780a6eeba489d8754fb",
"assets/assets/images/cycles/cs/reheated_rankine_process.png": "cdc040a328f39491244719d51465945a",
"assets/assets/images/cycles/cs/otto_process.png": "6bd3f083651d2f979514aa11f0a7083f",
"assets/assets/images/cycles/cs/ofwh_process.png": "8a025f9b164cc584dac376a73dbae6c3",
"assets/assets/images/cycles/cs/cascading_process.png": "9b057d15345513f26140daffded6c930",
"assets/assets/images/cycles/cs/brayton_process.png": "5120440acb7a7cf1b96eeefd523d19fc",
"assets/assets/images/cycles/cs/carnot_process.png": "a1df6395b14d4a172f2af3b92e848119",
"assets/assets/images/cycles/ru/heat_pump_ref_process.png": "c2c377968dcb974f1ccf83f35c070960",
"assets/assets/images/cycles/ru/rankine_process.png": "a263ba5547e0f61ba798ae792bf6d87c",
"assets/assets/images/cycles/ru/flash_chamber_process.png": "fff82c27ccd93f839ce443a13368212d",
"assets/assets/images/cycles/ru/cfwh_process.png": "f6819daa5daea94e8d61178a4b38b43a",
"assets/assets/images/cycles/ru/regen_brayton_process.png": "09f5827cb9d23fb45a2a31c0023fd8c5",
"assets/assets/images/cycles/ru/diesel_process.png": "3e47008d94cf93cf53223cafd7c432b7",
"assets/assets/images/cycles/ru/reheated_rankine_process.png": "e6695b58124fe1c2a00977044571e3f0",
"assets/assets/images/cycles/ru/otto_process.png": "612f6608870ba8b15cf2b6e74add5284",
"assets/assets/images/cycles/ru/ofwh_process.png": "98253fe63c645c017085282c814bdb60",
"assets/assets/images/cycles/ru/cascading_process.png": "24ac6d1cd7ac313545ca191598abcc50",
"assets/assets/images/cycles/ru/brayton_process.png": "6823020b762b52b92db157acb2cdc0e6",
"assets/assets/images/cycles/ru/carnot_process.png": "86b82f0eb9d2a04e9357647a4ead06ea",
"assets/assets/images/cycles/flash_chamber_process.png": "e37546a0513f9e6c1d08a855315ba7b6",
"assets/assets/images/cycles/cfwh_process.png": "cf8428d03d5ae303ec8100b803edf17a",
"assets/assets/images/cycles/pt/heat_pump_ref_process.png": "52bbecc9786d07f991483a39d40d9d5b",
"assets/assets/images/cycles/pt/rankine_process.png": "64eaa93b1b6ffb7f706be118827be4b2",
"assets/assets/images/cycles/pt/flash_chamber_process.png": "ea54b5302f4bfcd1744f0df38b445c93",
"assets/assets/images/cycles/pt/cfwh_process.png": "db972da3aae3c46571addc9bdc15e50a",
"assets/assets/images/cycles/pt/regen_brayton_process.png": "c8c51f95a68f78497904846a3e0f5d55",
"assets/assets/images/cycles/pt/diesel_process.png": "232119cd8970267ac711c9963553064d",
"assets/assets/images/cycles/pt/reheated_rankine_process.png": "5c098a9b3643f54724cbca27fbb21c05",
"assets/assets/images/cycles/pt/otto_process.png": "bc43c10770508ae050c77697bfef1e55",
"assets/assets/images/cycles/pt/ofwh_process.png": "8cbf3d415e4d88454794cd0fcf55be98",
"assets/assets/images/cycles/pt/cascading_process.png": "469f39a3e50cf02ad8993308d49a71a3",
"assets/assets/images/cycles/pt/brayton_process.png": "4c96aec130e95942471c07610f469f33",
"assets/assets/images/cycles/pt/carnot_process.png": "7c79d3c0f6e821041b2d0af9c781870e",
"assets/assets/images/cycles/regen_brayton_process.png": "f4f7f16e103ebbb8a1ebf14496b17578",
"assets/assets/images/cycles/carnot_ts.png": "7e68d8a975c9bf0169685a615afaefbd",
"assets/assets/images/cycles/zh/heat_pump_ref_process.png": "dd157474b56e11748aea7a872e28e839",
"assets/assets/images/cycles/zh/rankine_process.png": "ac29ef92b6066c6a95433127a324a03e",
"assets/assets/images/cycles/zh/flash_chamber_process.png": "3f4710295e275892b29e389a4edca537",
"assets/assets/images/cycles/zh/cfwh_process.png": "40b6111df3f97cff556adc1527c82999",
"assets/assets/images/cycles/zh/regen_brayton_process.png": "4e924dfcb67cef5d2e87f76101760adb",
"assets/assets/images/cycles/zh/diesel_process.png": "8e03c6237f2efe4f2af539913b1df3e3",
"assets/assets/images/cycles/zh/reheated_rankine_process.png": "c2f3337eacbbdc27c7155fc4a93d7de2",
"assets/assets/images/cycles/zh/otto_process.png": "f3291a83e8823c783598b64e40b1a119",
"assets/assets/images/cycles/zh/ofwh_process.png": "979441f0bd1c90a0bb6b6f403c712d69",
"assets/assets/images/cycles/zh/cascading_process.png": "6f98d877a318a66a91ff87a887b61960",
"assets/assets/images/cycles/zh/brayton_process.png": "b712ce0a774b78e7e046ddf46685806e",
"assets/assets/images/cycles/zh/carnot_process.png": "749725518513d491960b92565f4fab13",
"assets/assets/images/cycles/ofwh_ts.png": "16e04eeec1931d9247f8dfc5800a886a",
"assets/assets/images/cycles/diesel_process.png": "6cb91ec148440ecf87633e0076a61bdd",
"assets/assets/images/cycles/reheated_rankine_process.png": "ff11b332d59a3e9476aba6c2a4bf8ab8",
"assets/assets/images/cycles/diesel_pv.png": "33d1b7029a5afa2ed998a140e81ed9a6",
"assets/assets/images/cycles/ar/heat_pump_ref_process.png": "52ba2a5b7b0f21cac96741c92a2fd4d6",
"assets/assets/images/cycles/ar/rankine_process.png": "129bb9348f3d2573c43230e5e90424da",
"assets/assets/images/cycles/ar/flash_chamber_process.png": "d1d60e0a20724bea1c58455460699c70",
"assets/assets/images/cycles/ar/cfwh_process.png": "d840b2762ad9e8fccc1556f4cfef3305",
"assets/assets/images/cycles/ar/regen_brayton_process.png": "81848083f9285ff98713b52de1311896",
"assets/assets/images/cycles/ar/diesel_process.png": "c24988be854745eb29aedcaf2d7853a8",
"assets/assets/images/cycles/ar/reheated_rankine_process.png": "312c006d1b65332244ef4c3f66a20f30",
"assets/assets/images/cycles/ar/otto_process.png": "c955f26cccb27d9959e34b0eef6deeb1",
"assets/assets/images/cycles/ar/ofwh_process.png": "3484c7f43161936d4db90cddaa647a55",
"assets/assets/images/cycles/ar/cascading_process.png": "a6e8346c80703cc2d54add13ecd4697b",
"assets/assets/images/cycles/ar/brayton_process.png": "5102a19675cf6914953d214fc3835699",
"assets/assets/images/cycles/ar/carnot_process.png": "e01aecefb026bc18436cca913f7b8e3c",
"assets/assets/images/cycles/heat_pump_ref_ts.png": "2f6b7461fe8f87ae6aba8ff9bf627d46",
"assets/assets/images/cycles/fil/heat_pump_ref_process.png": "3e934a1334d48f3669576d54b05f5713",
"assets/assets/images/cycles/fil/rankine_process.png": "d66972cae80f37d4d0227a4cbe748c98",
"assets/assets/images/cycles/fil/flash_chamber_process.png": "a6c30dea4eeedad6108d2a22737a9d6f",
"assets/assets/images/cycles/fil/cfwh_process.png": "d7e5d2d903e63b985fcdf2bc9d2b1918",
"assets/assets/images/cycles/fil/regen_brayton_process.png": "7f26a801dc4895b9f4d3e93a14186134",
"assets/assets/images/cycles/fil/diesel_process.png": "03c9975e2b0c8db5c41712352fe9a2c5",
"assets/assets/images/cycles/fil/reheated_rankine_process.png": "26e3a867a9aec5a76297c43c1352cfcf",
"assets/assets/images/cycles/fil/otto_process.png": "23addcfdd43245d16c4c62989bdd6b86",
"assets/assets/images/cycles/fil/ofwh_process.png": "60470826e381ceeb8545dc3d76cc9977",
"assets/assets/images/cycles/fil/cascading_process.png": "5fb27c51ad98f97f2f0bd121e324ef40",
"assets/assets/images/cycles/fil/brayton_process.png": "23825dcf65291c415e85b722b2d76025",
"assets/assets/images/cycles/fil/carnot_process.png": "4a18153c6d92a91fb4854320c585c7ba",
"assets/assets/images/cycles/hi/heat_pump_ref_process.png": "2adbd2385ea650e6215ed9ec99921db9",
"assets/assets/images/cycles/hi/rankine_process.png": "45c598a05e5cb28dffda4b376acfd615",
"assets/assets/images/cycles/hi/flash_chamber_process.png": "64c87e03e9ea429d7edced62f3301f49",
"assets/assets/images/cycles/hi/cfwh_process.png": "6749b819bf79f48ace10db5b4f893a0d",
"assets/assets/images/cycles/hi/regen_brayton_process.png": "9fc9a62fb84d7f62297d5ddbaa8c4537",
"assets/assets/images/cycles/hi/diesel_process.png": "e4b9062f4ae4f02f6767181b7eea5d1f",
"assets/assets/images/cycles/hi/reheated_rankine_process.png": "68601c8e81779fc77ef92dec267feb06",
"assets/assets/images/cycles/hi/otto_process.png": "049f072a6e02dd7d4a86336d85e82ced",
"assets/assets/images/cycles/hi/ofwh_process.png": "2e9cace6ef2566a490a4d3953ec1e300",
"assets/assets/images/cycles/hi/cascading_process.png": "6c1607fa927f441c7e90e703c3681af7",
"assets/assets/images/cycles/hi/brayton_process.png": "89b8bf6534c1ea784899cf26d031e126",
"assets/assets/images/cycles/hi/carnot_process.png": "7cef62dd56f3ae1126f8f53606e70bbb",
"assets/assets/images/cycles/de/heat_pump_ref_process.png": "0fb301991dcdf9e4625596018cb415a3",
"assets/assets/images/cycles/de/rankine_process.png": "080f640e4c3f71e1e59922ff721a84c6",
"assets/assets/images/cycles/de/flash_chamber_process.png": "ee6a1db42dd6e3f9d8841da06916b501",
"assets/assets/images/cycles/de/cfwh_process.png": "5aa7ee20e7a00dab88fdf68c78b39fd0",
"assets/assets/images/cycles/de/regen_brayton_process.png": "4a3a6c7bb76514e8d34e2547a6ac01fb",
"assets/assets/images/cycles/de/diesel_process.png": "42706132a2e05478f0716a69fd7c41b3",
"assets/assets/images/cycles/de/reheated_rankine_process.png": "a63dccc064fcf4b44c3a88c027114eba",
"assets/assets/images/cycles/de/otto_process.png": "a7893726ce36a8ba9a4faa0d59ced974",
"assets/assets/images/cycles/de/ofwh_process.png": "34159b2726390b035be63f719ca42607",
"assets/assets/images/cycles/de/cascading_process.png": "5ae27a0818b3178ced123552ae18bbd2",
"assets/assets/images/cycles/de/brayton_process.png": "91f6c36ccd7b9dc46e6dcf3da815d23c",
"assets/assets/images/cycles/de/carnot_process.png": "babba078041c7002bfd12ed14d7e818b",
"assets/assets/images/cycles/ko/heat_pump_ref_process.png": "e6b338b0c9ba450fbabffb073d66b440",
"assets/assets/images/cycles/ko/rankine_process.png": "882a685d22e7c9ecd120c1c8a2aec0fd",
"assets/assets/images/cycles/ko/flash_chamber_process.png": "7b38074c1917650092e0f6cff729ca13",
"assets/assets/images/cycles/ko/cfwh_process.png": "80c3726b732501cf40527d9eb5d1148a",
"assets/assets/images/cycles/ko/regen_brayton_process.png": "ce8e6024c1290888a56dbc3cef5c03f7",
"assets/assets/images/cycles/ko/diesel_process.png": "09d4af0719e9bcfe34c2e8741c3a8aa6",
"assets/assets/images/cycles/ko/reheated_rankine_process.png": "febd7ca488e8ee9f7d1a665fd8f3e6a4",
"assets/assets/images/cycles/ko/otto_process.png": "a30a850d5b97d2c13a3f6d65aab0991d",
"assets/assets/images/cycles/ko/ofwh_process.png": "e4335cd429f857b143761274368b3ad2",
"assets/assets/images/cycles/ko/cascading_process.png": "1dbf5bbe465bc52e7f199ec67c8fea66",
"assets/assets/images/cycles/ko/brayton_process.png": "f2216c9c8117e7c1dd41c3931e577a61",
"assets/assets/images/cycles/ko/carnot_process.png": "bc1a102596ac3bd9134ad8292cdb4182",
"assets/assets/images/cycles/id/heat_pump_ref_process.png": "dcb25df918ee1b65f3c0af77db7bfef3",
"assets/assets/images/cycles/id/rankine_process.png": "66a32e0f842a14aca3387952854596bd",
"assets/assets/images/cycles/id/flash_chamber_process.png": "310d8d4ad483ef063bacfb85bc0cfa85",
"assets/assets/images/cycles/id/cfwh_process.png": "78bfa646239dde1fe1312cdf862a105f",
"assets/assets/images/cycles/id/regen_brayton_process.png": "3e7098a19952869474135bffc9b8bb2b",
"assets/assets/images/cycles/id/diesel_process.png": "28f61836ed04fc70a4120738d18096f8",
"assets/assets/images/cycles/id/reheated_rankine_process.png": "cdbeae1cec6e6562967f77d371ad9a83",
"assets/assets/images/cycles/id/otto_process.png": "7ebfc1b0a55ae00a03aea89209e7bfda",
"assets/assets/images/cycles/id/ofwh_process.png": "f950c47e774ada2ace51a3d16478b607",
"assets/assets/images/cycles/id/cascading_process.png": "2d97cfb4c4274001bae231e7f88ec72f",
"assets/assets/images/cycles/id/brayton_process.png": "7202c67978a3a6e01143b388aa0d8546",
"assets/assets/images/cycles/id/carnot_process.png": "fc63827488bd6ca9e1288163b7a711d2",
"assets/assets/images/cycles/fr/heat_pump_ref_process.png": "b0ab52793891e6943d9f7748e7d357ce",
"assets/assets/images/cycles/fr/rankine_process.png": "64b1d94e290a4c25446fc2f9cc987fc5",
"assets/assets/images/cycles/fr/flash_chamber_process.png": "918a1cc9a1b6ec3a00d1bb42fe1fc9b7",
"assets/assets/images/cycles/fr/cfwh_process.png": "655f46e81c24ce8a5bcec96ff26968c2",
"assets/assets/images/cycles/fr/regen_brayton_process.png": "4007195a89581a5b5b48cec6183524fd",
"assets/assets/images/cycles/fr/diesel_process.png": "201e23465e5acb6b16b577414c44b3b7",
"assets/assets/images/cycles/fr/reheated_rankine_process.png": "a728ef2a3c8c5041aae13efb85ecd95a",
"assets/assets/images/cycles/fr/otto_process.png": "1b36c76565d2b9dfbbb41079e58003b6",
"assets/assets/images/cycles/fr/ofwh_process.png": "c30d5755c0fbee0efd573779ebebb91b",
"assets/assets/images/cycles/fr/cascading_process.png": "5166b5248701bcf9ae23e3dbac82fccd",
"assets/assets/images/cycles/fr/brayton_process.png": "7114977a94a4099ea538ca8e187094f2",
"assets/assets/images/cycles/fr/carnot_process.png": "c065801bc04c8ac622f26cb52394fe8d",
"assets/assets/images/cycles/cfwh_ts.png": "866f45c16a493597f35eefe1bf4a4ab9",
"assets/assets/images/cycles/otto_process.png": "58928735c6f01451f653290723dafb58",
"assets/assets/images/cycles/es/heat_pump_ref_process.png": "c987e51119b136728270a78e8c1f9a55",
"assets/assets/images/cycles/es/rankine_process.png": "8dd38b88aa50793a1e698ba7c7b0ba8c",
"assets/assets/images/cycles/es/flash_chamber_process.png": "db097a43efe06db259f5fca429948927",
"assets/assets/images/cycles/es/cfwh_process.png": "e573a8cc1f94ed464f778f60464279d8",
"assets/assets/images/cycles/es/regen_brayton_process.png": "c2d8d3a91801a0793952e9e6e66c7340",
"assets/assets/images/cycles/es/diesel_process.png": "409aa8313687113b5284ea6f341663f2",
"assets/assets/images/cycles/es/reheated_rankine_process.png": "ca3bf637ae1f875fa3e0ea6b4f3f5e64",
"assets/assets/images/cycles/es/otto_process.png": "a180610243aea5f175a32b289d85781e",
"assets/assets/images/cycles/es/ofwh_process.png": "c409a7519ee8544a258004b787c3cb6e",
"assets/assets/images/cycles/es/cascading_process.png": "4add96bea8b025c3da10c80ada320a89",
"assets/assets/images/cycles/es/brayton_process.png": "1ec9eb1c9436e1fe8a1ca55de997d7b8",
"assets/assets/images/cycles/es/carnot_process.png": "cfb8d155fcf9f5c63587b5ff151a4fa4",
"assets/assets/images/cycles/en/heat_pump_ref_process.png": "eeb43138c92b772fe8cc5adff48f0297",
"assets/assets/images/cycles/en/rankine_process.png": "466d79dc60c4382c71d8b5d073d66f51",
"assets/assets/images/cycles/en/flash_chamber_process.png": "974cc1ffc8ea637f913607491a80b4ae",
"assets/assets/images/cycles/en/cfwh_process.png": "7460cb1885dbf42e49d3f68e1770ddfa",
"assets/assets/images/cycles/en/regen_brayton_process.png": "af6d583195e582312d10b40bf863260f",
"assets/assets/images/cycles/en/diesel_process.png": "20da3d28c93c49f455d2b35c749f3142",
"assets/assets/images/cycles/en/reheated_rankine_process.png": "512a82dca326f524151a4246441aa10e",
"assets/assets/images/cycles/en/otto_process.png": "42d46c650d667aa2c965f554cc992dc6",
"assets/assets/images/cycles/en/ofwh_process.png": "8a420e6676bbeb22a5bc8a427cbedb5b",
"assets/assets/images/cycles/en/cascading_process.png": "5ab16a0df62b26f563f95a0989e069ad",
"assets/assets/images/cycles/en/brayton_process.png": "134cd9fb64a91971c400a1ef69da26da",
"assets/assets/images/cycles/en/carnot_process.png": "93c4509226ad0ed3bf42c8fe6fbaae1e",
"assets/assets/images/cycles/ofwh_process.png": "98d9a2388dc0326eb059d416bac3a0b7",
"assets/assets/images/cycles/cascading_process.png": "5eb52360e29de249d79937fcf5bd06b1",
"assets/assets/images/cycles/regen_brayton_pv.png": "39e05d4c7724a7428877c28b97c9511c",
"assets/assets/images/cycles/brayton_process.png": "19f14bf3e86627059bbc91906478c050",
"assets/assets/images/cycles/carnot_process.png": "288b9014f7da8b061f79c9fa3a381789",
"assets/assets/images/cycles/otto_pv.png": "4cc0be2dc20beced39e1a8154f9f3898",
"assets/assets/images/cycles/th/heat_pump_ref_process.png": "590999ec86cd6caa6ca99acab5d8141e",
"assets/assets/images/cycles/th/rankine_process.png": "e3cc1a079c99747e7f6a7598766e3919",
"assets/assets/images/cycles/th/flash_chamber_process.png": "f15483e54d79266522c1d6f990d8d5f4",
"assets/assets/images/cycles/th/cfwh_process.png": "92abcb82e9fa28ce29562715db5efb4d",
"assets/assets/images/cycles/th/regen_brayton_process.png": "525073f56e74c3e6133ae9acc61b19d8",
"assets/assets/images/cycles/th/diesel_process.png": "b11a3c6fb6066b4f934d6fe882e4cb40",
"assets/assets/images/cycles/th/reheated_rankine_process.png": "ba5b52bf1b703be0c5c629275bac5ba1",
"assets/assets/images/cycles/th/otto_process.png": "53eaa9f7dd5e1fcf7cc5574eefa0b6c8",
"assets/assets/images/cycles/th/ofwh_process.png": "35bf9e93073b2464565d266a274d5076",
"assets/assets/images/cycles/th/cascading_process.png": "95972c85850bab1de06c74c5388775c2",
"assets/assets/images/cycles/th/brayton_process.png": "c52d553d57a501036f13008020b7ea5a",
"assets/assets/images/cycles/th/carnot_process.png": "9bb9780b48113a86e855a0610674a236",
"assets/assets/images/cycles/tr/heat_pump_ref_process.png": "bccd115b3c0054b0db17a97c34f000c6",
"assets/assets/images/cycles/tr/rankine_process.png": "9db3c0528aaf2afda91ff336ae2ffcb9",
"assets/assets/images/cycles/tr/flash_chamber_process.png": "c55aa2e43574927be7e274253b31b679",
"assets/assets/images/cycles/tr/cfwh_process.png": "251a78d48bb982c8b5c09f229e1cd621",
"assets/assets/images/cycles/tr/regen_brayton_process.png": "17808bdb0bfee52bec76e344dc1d9520",
"assets/assets/images/cycles/tr/diesel_process.png": "fa9b4573eb35462d59b6e2bf49cdc033",
"assets/assets/images/cycles/tr/reheated_rankine_process.png": "da78163ae3f8322148afe24a2ab22564",
"assets/assets/images/cycles/tr/otto_process.png": "a101716cfe4d10ae4f3f7dbceda48a5a",
"assets/assets/images/cycles/tr/ofwh_process.png": "3993ea36be8ad6527373b82b800cf391",
"assets/assets/images/cycles/tr/cascading_process.png": "1d88ae1ed39d86771c673fffb2707404",
"assets/assets/images/cycles/tr/brayton_process.png": "075c55f3170bb6d190cd3f8b9d08b23f",
"assets/assets/images/cycles/tr/carnot_process.png": "d9e40ec55f204bda4405a7a8c254df99",
"assets/assets/fonts/NotoSans-Regular.ttf": "2c157a50aeb376ee5a69032d7813ffb2",
"assets/assets/fonts/NotoSans-Bold.ttf": "8bedd188f4c137b79409d437de74f91f",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
