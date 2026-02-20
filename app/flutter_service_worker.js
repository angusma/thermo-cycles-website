'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e72099fc365c95f1a0e64596185f360a",
"version.json": "47fe52a9db5b54682bd1a8a4bd9c7845",
"index.html": "aadc05d2b0df2026e38b88e4a9d862cc",
"/": "aadc05d2b0df2026e38b88e4a9d862cc",
"main.dart.js": "191f38455e28c56a998555e4ae098ff5",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9e46c9a1469c53f96db7bb7924920ee1",
"assets/NOTICES": "cce9804ec140c76277bb4c3b80dab2f6",
"assets/FontManifest.json": "f9097450010bd82cf16bb016ba2219d8",
"assets/AssetManifest.bin.json": "2974d999a18585478c21965b84d362cd",
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
"assets/AssetManifest.bin": "c9de3b849d82edb10f1fd3698637fccf",
"assets/fonts/MaterialIcons-Regular.otf": "a977d58551a6494b2b182e6d4141e636",
"assets/assets/tables/r134a/superheated.json": "afd2f435b6334927da4ce5d5f3db4ca3",
"assets/assets/tables/r134a/r134a_sat_temp.json": "e25aaed70b99b849d24d61272473f81a",
"assets/assets/tables/r134a/r134a_sat_pressure.json": "b57c1bc6bc8091b5bec695150f8a4d13",
"assets/assets/tables/water/sat_temp.json": "596e6a979f74fe41baa3f59215377324",
"assets/assets/tables/water/superheated.json": "c90aec06eecc1809a03e0bec340eca6e",
"assets/assets/tables/water/sat_pressure.json": "5f0e7a1a22d843fe2433a8aaa51e1a28",
"assets/assets/images/cycles/brayton_pv.png": "9af838914274ad1881dcee64861da383",
"assets/assets/images/cycles/pl/heat_pump_ref_process.png": "ffc15aa8a1c6ada44e78c37d760d0df4",
"assets/assets/images/cycles/pl/rankine_process.png": "c1f8ee31e3882f805027ac146735f171",
"assets/assets/images/cycles/pl/flash_chamber_process.png": "d46c03b19040e781667cf346fb324c48",
"assets/assets/images/cycles/pl/cfwh_process.png": "c1c65f947cf0c35faff962da88ab0209",
"assets/assets/images/cycles/pl/regen_brayton_process.png": "cc942cc5740578fa568e75c87ee81b6e",
"assets/assets/images/cycles/pl/diesel_process.png": "8d1c9a61afe7c3a39519c6f5d9434e2d",
"assets/assets/images/cycles/pl/reheated_rankine_process.png": "34683c816510aa45f4c0667437127c6e",
"assets/assets/images/cycles/pl/otto_process.png": "35a54228878911927ee707bf30baa49b",
"assets/assets/images/cycles/pl/ofwh_process.png": "a92079f5c444a3833ccf8b78ec184361",
"assets/assets/images/cycles/pl/cascading_process.png": "dd175c5bba2691c14566df513b5aff67",
"assets/assets/images/cycles/pl/brayton_process.png": "1d9c3d0ce6b34139fb8d2b4040838cbc",
"assets/assets/images/cycles/pl/carnot_process.png": "4e405c482a368e93095fcab99bbab643",
"assets/assets/images/cycles/vi/heat_pump_ref_process.png": "cdc042e1e38631330e82613d703c63f0",
"assets/assets/images/cycles/vi/rankine_process.png": "6d0d46a29627841d7985f62d207d8672",
"assets/assets/images/cycles/vi/flash_chamber_process.png": "bdda78789d5dde61e2df4ec5900f9039",
"assets/assets/images/cycles/vi/cfwh_process.png": "33ee431c52cfaff19512b79857a7a8a1",
"assets/assets/images/cycles/vi/regen_brayton_process.png": "4fb5ad44cf22cb076a8a5286f362f684",
"assets/assets/images/cycles/vi/diesel_process.png": "a826aa7af919c6dd5aaacab637ab1956",
"assets/assets/images/cycles/vi/reheated_rankine_process.png": "3dbcc317efef34e176eb76668a1943c1",
"assets/assets/images/cycles/vi/otto_process.png": "760a22d2e17581ce7ac10be3c811164c",
"assets/assets/images/cycles/vi/ofwh_process.png": "d800cfb65f77d5b726013933d1f91f62",
"assets/assets/images/cycles/vi/cascading_process.png": "fea0a3135283b0d35b505a2e86527cca",
"assets/assets/images/cycles/vi/brayton_process.png": "2b7e1a3bc19753fdf7d1c145b9ad110e",
"assets/assets/images/cycles/vi/carnot_process.png": "c61537728cdf76c0f6a482e391d803dd",
"assets/assets/images/cycles/heat_pump_ref_process.png": "508aab0503aba367a5fbef7ff12ebd58",
"assets/assets/images/cycles/sv/heat_pump_ref_process.png": "70510a1ce05fc9fdc7f50fae698729c3",
"assets/assets/images/cycles/sv/rankine_process.png": "080cc87b676e2d690919c69d6dc89daa",
"assets/assets/images/cycles/sv/flash_chamber_process.png": "d806dbf706fb68a61fa81cc15d7d7469",
"assets/assets/images/cycles/sv/cfwh_process.png": "fc636dcf1e06d18c480481afa49b8f74",
"assets/assets/images/cycles/sv/regen_brayton_process.png": "00f462f8a674b91a931f84eb74407355",
"assets/assets/images/cycles/sv/diesel_process.png": "c6a69f3bed44c2220d117da208685573",
"assets/assets/images/cycles/sv/reheated_rankine_process.png": "e7d3a6a3b0b185d57b61eeda77211d08",
"assets/assets/images/cycles/sv/otto_process.png": "3165d8597e144852eaa43c42a8bc9fc6",
"assets/assets/images/cycles/sv/ofwh_process.png": "c85ee0d4eb6a1aaa2235960a30928ba7",
"assets/assets/images/cycles/sv/cascading_process.png": "d6cb52936d70b0e1f29624223753337e",
"assets/assets/images/cycles/sv/brayton_process.png": "61b9d8083086978fcbbdd9fa4d4fad05",
"assets/assets/images/cycles/sv/carnot_process.png": "8aa3f9aa72abe38a4e23183c7a393dfc",
"assets/assets/images/cycles/he/heat_pump_ref_process.png": "0a80342ce822a019f2b5278fc8d97f9f",
"assets/assets/images/cycles/he/rankine_process.png": "6a499b05e4e3bd8d9f4f0d713fc66c9a",
"assets/assets/images/cycles/he/flash_chamber_process.png": "117a9dd6081eefcf3cd16f72e94bd23a",
"assets/assets/images/cycles/he/cfwh_process.png": "9361a834d78aa0bc67f83da492eef315",
"assets/assets/images/cycles/he/regen_brayton_process.png": "89009c388e2735077254a6e58e26d87b",
"assets/assets/images/cycles/he/diesel_process.png": "26065192545d8c9e09b36fcffd5188b9",
"assets/assets/images/cycles/he/reheated_rankine_process.png": "c6b353c34c389f2f4e68319a82d75fe3",
"assets/assets/images/cycles/he/otto_process.png": "194bb4d6193f2afe020a72402a689814",
"assets/assets/images/cycles/he/ofwh_process.png": "132530d74b2c7031b01fdafed9428b86",
"assets/assets/images/cycles/he/cascading_process.png": "10ce60d2416807860677ea7fd00d8981",
"assets/assets/images/cycles/he/brayton_process.png": "ba259ca8ec5e4f6d161aeebac2a97d6c",
"assets/assets/images/cycles/he/carnot_process.png": "a13e9e20e3da9bac228b8fe1652a9c14",
"assets/assets/images/cycles/ms/heat_pump_ref_process.png": "4e069dd8d39c0878b4a362516e4558b8",
"assets/assets/images/cycles/ms/rankine_process.png": "121d68c9e0cf6ffce6dbd30f1d5cae38",
"assets/assets/images/cycles/ms/flash_chamber_process.png": "b32b2c685dfe4efaccbcbd795f347c27",
"assets/assets/images/cycles/ms/cfwh_process.png": "90c2b7ab4140c78a9aabcd7fbdc445df",
"assets/assets/images/cycles/ms/regen_brayton_process.png": "979933a5d90d3c39fc4ecb1dae846fd6",
"assets/assets/images/cycles/ms/diesel_process.png": "692d8dcbbdb5d7e9cb95c18511503d9e",
"assets/assets/images/cycles/ms/reheated_rankine_process.png": "ef8ec496279420c521ad5dd6c7dbf5b8",
"assets/assets/images/cycles/ms/otto_process.png": "b303859383d3881577c2f0cc13485398",
"assets/assets/images/cycles/ms/ofwh_process.png": "d633319bc7d2d593a523041f48165c19",
"assets/assets/images/cycles/ms/cascading_process.png": "279c7d66c45f792dcd836d46e7ec3e03",
"assets/assets/images/cycles/ms/brayton_process.png": "31bbb1bd8e4cbacb6c82ad5ba624efbd",
"assets/assets/images/cycles/ms/carnot_process.png": "7ad161f6091a3e6e7cf2cc879dc71a9a",
"assets/assets/images/cycles/reheated_rankine_ts.png": "961024f9b8e673c3f8c5a3a8a166ee57",
"assets/assets/images/cycles/cascading_ts.png": "d56c976cde6a24aae56e12f007529b53",
"assets/assets/images/cycles/rankine_process.png": "6a9e1c255bb503937b833fc995bb3397",
"assets/assets/images/cycles/no/heat_pump_ref_process.png": "34d11fdbd3cd13ca9eb8de7cd05e9df9",
"assets/assets/images/cycles/no/rankine_process.png": "21556a0c00b99039c0b81eaebc209290",
"assets/assets/images/cycles/no/flash_chamber_process.png": "be54778dff8000bd22166194d9b781b4",
"assets/assets/images/cycles/no/cfwh_process.png": "b6359a6e18660b16e56a5ba41b0ab33e",
"assets/assets/images/cycles/no/regen_brayton_process.png": "d321ccabf8e3b98775b40f68d16db5a4",
"assets/assets/images/cycles/no/diesel_process.png": "3cbbfa4bae8ae2feee10495919045b9e",
"assets/assets/images/cycles/no/reheated_rankine_process.png": "56738ab117581657f19d403bd5dee0d1",
"assets/assets/images/cycles/no/otto_process.png": "eab6a0c248e2fe6401ddb52cb809f721",
"assets/assets/images/cycles/no/ofwh_process.png": "0e745596fc29359ee9bf88408da32953",
"assets/assets/images/cycles/no/cascading_process.png": "dac4c36c475c4e6636379bb77e04fc73",
"assets/assets/images/cycles/no/brayton_process.png": "0875c697487a25a3615df75871159a01",
"assets/assets/images/cycles/no/carnot_process.png": "619959222781d8192a7f5c346c78bee4",
"assets/assets/images/cycles/carnot_pv.png": "7149860ad56c6cc1b923f99e6ea1a650",
"assets/assets/images/cycles/rankine_ts.png": "7f37b33732677d4db8f7a4fa3dacf836",
"assets/assets/images/cycles/otto_ts.png": "6efff6cb045fbee3ac5f7f02b5061d59",
"assets/assets/images/cycles/flash_chamber_ts.png": "c8bdd6d8eec295d060f2d1197ac29968",
"assets/assets/images/cycles/regen_brayton_ts.png": "5f0dd3eca4f12d838abe90ecf79190f2",
"assets/assets/images/cycles/ja/heat_pump_ref_process.png": "3c1b4735522b9ff5f2be06a77096d2e7",
"assets/assets/images/cycles/ja/rankine_process.png": "4568e8b2283f6c4b741fbe1fff8b2207",
"assets/assets/images/cycles/ja/flash_chamber_process.png": "493b0c52c0adb6886529afd221c0711f",
"assets/assets/images/cycles/ja/cfwh_process.png": "10a68b4240f0ef4f5d3dc765617fb877",
"assets/assets/images/cycles/ja/regen_brayton_process.png": "d61ee7662b510388abc2d567fb073882",
"assets/assets/images/cycles/ja/diesel_process.png": "291efb3d5b6e7d5a17472e958e2e0f26",
"assets/assets/images/cycles/ja/reheated_rankine_process.png": "49be63147d731c64f50295c549dee986",
"assets/assets/images/cycles/ja/otto_process.png": "6a98d7108f9f9b5525ab397adc3a59f3",
"assets/assets/images/cycles/ja/ofwh_process.png": "26a43af39d3da6889c6241b94c22259c",
"assets/assets/images/cycles/ja/cascading_process.png": "cbde3cdcfe186b1a04dc43b83f77e7e0",
"assets/assets/images/cycles/ja/brayton_process.png": "ca39f6493c199f9ba7415fa07450056e",
"assets/assets/images/cycles/ja/carnot_process.png": "fddfec878323e1ac74fe6130f32a6635",
"assets/assets/images/cycles/el/heat_pump_ref_process.png": "861f73e1c58f79b822e662aa25515498",
"assets/assets/images/cycles/el/rankine_process.png": "3d9bcf2a6c975de0fe571f71119a2e3f",
"assets/assets/images/cycles/el/flash_chamber_process.png": "f2f1cb02d2a44f6c4bbf1b2ae23aeb9d",
"assets/assets/images/cycles/el/cfwh_process.png": "f707b48ac0b65759e8bdd199730fd957",
"assets/assets/images/cycles/el/regen_brayton_process.png": "13dd28eece17e2556dce73635a8b96f0",
"assets/assets/images/cycles/el/diesel_process.png": "8e126c160c9e6f2b0eb5c6484feffc3a",
"assets/assets/images/cycles/el/reheated_rankine_process.png": "7c55d3dec1e4bde3e2f9a7e1a0d1b082",
"assets/assets/images/cycles/el/otto_process.png": "a0c161dc92dbcf379a4cee002f5f83f6",
"assets/assets/images/cycles/el/ofwh_process.png": "695984d34cbd79e3ed6c5935c740292e",
"assets/assets/images/cycles/el/cascading_process.png": "97a79c78f2bfbae8b36c2bc19d9a7a5d",
"assets/assets/images/cycles/el/brayton_process.png": "c30c0687b0f734aba8798319991a2490",
"assets/assets/images/cycles/el/carnot_process.png": "db6c5825988814838a4415f058b1c505",
"assets/assets/images/cycles/it/heat_pump_ref_process.png": "025bfd9fe4620f77cc2322eb669dca5f",
"assets/assets/images/cycles/it/rankine_process.png": "56a9f51e3612766f58f2c2d8eccae764",
"assets/assets/images/cycles/it/flash_chamber_process.png": "378660355adaeef7b946ca4ff355e973",
"assets/assets/images/cycles/it/cfwh_process.png": "bfb22bdad2a7e97081afc59bd6702c8c",
"assets/assets/images/cycles/it/regen_brayton_process.png": "c34cb425c4402bc2dff3e7a1b8047861",
"assets/assets/images/cycles/it/diesel_process.png": "c59c64875a31d8dd42a0c1e512af42bd",
"assets/assets/images/cycles/it/reheated_rankine_process.png": "b41d4be510df4996b5298721910de06c",
"assets/assets/images/cycles/it/otto_process.png": "dfbe3e3ac3e9d1f9d25de6437f9e4bc9",
"assets/assets/images/cycles/it/ofwh_process.png": "3b0634b053eb81dfe1ab2d6d70351e29",
"assets/assets/images/cycles/it/cascading_process.png": "59f151bef07d7e87e5ce20db89553b9f",
"assets/assets/images/cycles/it/brayton_process.png": "17df8003732ca439059a23758c093e08",
"assets/assets/images/cycles/it/carnot_process.png": "0fd9811b44c8e475f04073cb252f4bf5",
"assets/assets/images/cycles/cs/heat_pump_ref_process.png": "968b64d6581d913723e63e796038f8b2",
"assets/assets/images/cycles/cs/rankine_process.png": "721827f34d731ccd7f8efb90b09963f9",
"assets/assets/images/cycles/cs/flash_chamber_process.png": "1e33f81312c6778ba0e729b0eb166bb6",
"assets/assets/images/cycles/cs/cfwh_process.png": "0314daa5498045b972bcef8256c0b69c",
"assets/assets/images/cycles/cs/regen_brayton_process.png": "8f47ca64cdf5f5f4a855a492cfd8fd1a",
"assets/assets/images/cycles/cs/diesel_process.png": "ceb23e068882f1cb959a1f286ff1d63c",
"assets/assets/images/cycles/cs/reheated_rankine_process.png": "ed53f0cb55fa4eb4d2eb43969b8a58c9",
"assets/assets/images/cycles/cs/otto_process.png": "c5201fd3053eb8ae177c442cb29ed854",
"assets/assets/images/cycles/cs/ofwh_process.png": "4fb77da47bb0ed4e53fa2958663b8731",
"assets/assets/images/cycles/cs/cascading_process.png": "1ee89391fd45257bab9ac2eb08aced9a",
"assets/assets/images/cycles/cs/brayton_process.png": "47fd08965a84216694a4ef40f02f81bf",
"assets/assets/images/cycles/cs/carnot_process.png": "a68977684117d8e38123249310ea92ec",
"assets/assets/images/cycles/ru/heat_pump_ref_process.png": "ca930d1babf395c6e6f372a1bd5a9e3a",
"assets/assets/images/cycles/ru/rankine_process.png": "d8e88741f3a0c32fdad3a9d985127b67",
"assets/assets/images/cycles/ru/flash_chamber_process.png": "40e9c36899bce380d3a6609472bc2ddd",
"assets/assets/images/cycles/ru/cfwh_process.png": "da2ff62442bfb746aac81912a9833ef5",
"assets/assets/images/cycles/ru/regen_brayton_process.png": "2e0aed81df3074aa5fbc8b5d1801faa7",
"assets/assets/images/cycles/ru/diesel_process.png": "7b1434ebf5b990cfa6733bf9515becb7",
"assets/assets/images/cycles/ru/reheated_rankine_process.png": "052a2eb01c562cfd45e9d6ab4ebfc480",
"assets/assets/images/cycles/ru/otto_process.png": "5a37fdda642a003571d808db22edfa36",
"assets/assets/images/cycles/ru/ofwh_process.png": "2c5c084ff6ca6b25ae033c0e41d9d9ba",
"assets/assets/images/cycles/ru/cascading_process.png": "4ffd62cc1272e54bb5452760b50fd622",
"assets/assets/images/cycles/ru/brayton_process.png": "1fcdced2e9319d56b2af681fcb91f79f",
"assets/assets/images/cycles/ru/carnot_process.png": "85b2a637123540e7ca81e49cc7157387",
"assets/assets/images/cycles/flash_chamber_process.png": "e37546a0513f9e6c1d08a855315ba7b6",
"assets/assets/images/cycles/cfwh_process.png": "cf8428d03d5ae303ec8100b803edf17a",
"assets/assets/images/cycles/pt/heat_pump_ref_process.png": "5da5ea0ada591ae47b496ab1b7062882",
"assets/assets/images/cycles/pt/rankine_process.png": "7c683eeeac1d1a9acad1dab0cede3250",
"assets/assets/images/cycles/pt/flash_chamber_process.png": "fcde24e04a29d47620cc448bd6723a4a",
"assets/assets/images/cycles/pt/cfwh_process.png": "207785b1063928c7085067ca0745d4e5",
"assets/assets/images/cycles/pt/regen_brayton_process.png": "4aa51c7f59d99a11b03d57c1f027c929",
"assets/assets/images/cycles/pt/diesel_process.png": "902b7abf34931862de6846a4969878bc",
"assets/assets/images/cycles/pt/reheated_rankine_process.png": "2126e53d7745cdebb5040f8d28fc0473",
"assets/assets/images/cycles/pt/otto_process.png": "2cdbe9b3fc074039df50fb3f14e4e427",
"assets/assets/images/cycles/pt/ofwh_process.png": "5944532dcc3654971a0be8cb8a828957",
"assets/assets/images/cycles/pt/cascading_process.png": "6d5c2c72283cd588417a3327fcd97245",
"assets/assets/images/cycles/pt/brayton_process.png": "5bc3116916ced342c05d457da121588c",
"assets/assets/images/cycles/pt/carnot_process.png": "10433b32f2a392f256122614b18cb6e6",
"assets/assets/images/cycles/regen_brayton_process.png": "4abd57989cb415abb3582db3a8cdd551",
"assets/assets/images/cycles/carnot_ts.png": "2edbf6c2e1c8015a6348b6d61b88f1c1",
"assets/assets/images/cycles/zh/heat_pump_ref_process.png": "9fca439e6fabdff15a1e982e1baa35d2",
"assets/assets/images/cycles/zh/rankine_process.png": "9e9501f9e5f090be797e30bdfb88619d",
"assets/assets/images/cycles/zh/flash_chamber_process.png": "10877be7cc4790ad65dcf8c50674bdbe",
"assets/assets/images/cycles/zh/cfwh_process.png": "c396af6e98c3c49e117470baa3b92ec6",
"assets/assets/images/cycles/zh/regen_brayton_process.png": "2b80396d9c4dc485edba9ac10be4304d",
"assets/assets/images/cycles/zh/diesel_process.png": "85c3d2f4c6c4c114d8d82de012b37c19",
"assets/assets/images/cycles/zh/reheated_rankine_process.png": "d0fea65f2ed9039eff70b90345ca12dd",
"assets/assets/images/cycles/zh/otto_process.png": "73001704d0b42e531fdc04f8d0174130",
"assets/assets/images/cycles/zh/ofwh_process.png": "8a109f3d029c9928b40012743b2fc085",
"assets/assets/images/cycles/zh/cascading_process.png": "0db202f71acf51cb42e4d8e72de1355f",
"assets/assets/images/cycles/zh/brayton_process.png": "a9714c7dd2741c1e867800e2459aeed3",
"assets/assets/images/cycles/zh/carnot_process.png": "93ee8f07a7dba9c6fa874b743463f615",
"assets/assets/images/cycles/ofwh_ts.png": "e7e83b16e368288669acb4075c7d2b80",
"assets/assets/images/cycles/diesel_process.png": "f077e3f369960d9fd843144b977f91d2",
"assets/assets/images/cycles/reheated_rankine_process.png": "ff11b332d59a3e9476aba6c2a4bf8ab8",
"assets/assets/images/cycles/diesel_pv.png": "e3b40833cd376131672001188e569bdf",
"assets/assets/images/cycles/ar/heat_pump_ref_process.png": "fd30ed1d801f61b3f4ea526d35bf7046",
"assets/assets/images/cycles/ar/rankine_process.png": "80b2c79b829892f0f6bd28caafa28c85",
"assets/assets/images/cycles/ar/flash_chamber_process.png": "ae55f1e35dd4933d5cdd34f2974df884",
"assets/assets/images/cycles/ar/cfwh_process.png": "25f8973e509476b34e6ffe3246400c8c",
"assets/assets/images/cycles/ar/regen_brayton_process.png": "655e6e0b6562c5c2993eb709dd567249",
"assets/assets/images/cycles/ar/diesel_process.png": "54af3998299276a4565eca9322841e9f",
"assets/assets/images/cycles/ar/reheated_rankine_process.png": "cb02fcd68c7cd8803dcc6113ada71680",
"assets/assets/images/cycles/ar/otto_process.png": "c42e2e2e9c69bce8dce23b8f9aed57f4",
"assets/assets/images/cycles/ar/ofwh_process.png": "4346ba67ee66f78c416d023b386ef3f0",
"assets/assets/images/cycles/ar/cascading_process.png": "aad780b82362e9cd6efd39e01dba78d7",
"assets/assets/images/cycles/ar/brayton_process.png": "8f36dfa3c1e423e5bd38c603d904fe16",
"assets/assets/images/cycles/ar/carnot_process.png": "e8a0114000deff3adab7f8f04a941633",
"assets/assets/images/cycles/heat_pump_ref_ts.png": "3b3b8d977b6927d2f714718488a386d5",
"assets/assets/images/cycles/nl/heat_pump_ref_process.png": "db8b9cf690ac95de67fe976291ba4acc",
"assets/assets/images/cycles/nl/rankine_process.png": "a89217be7893ed991e69c9ae736bd960",
"assets/assets/images/cycles/nl/flash_chamber_process.png": "bd4e680f426ba1a78a64d0a95dc9e695",
"assets/assets/images/cycles/nl/cfwh_process.png": "710346248669a2f95151b8c312786e2e",
"assets/assets/images/cycles/nl/regen_brayton_process.png": "9c517c89e53297eb2025d55128e884de",
"assets/assets/images/cycles/nl/diesel_process.png": "b7c055d56bbe9c1ad39756f31c1447ff",
"assets/assets/images/cycles/nl/reheated_rankine_process.png": "6ae1652a717f7b01c0ec25d37ef27ba4",
"assets/assets/images/cycles/nl/otto_process.png": "884122d9a47f1246ca2162fc042dd5b1",
"assets/assets/images/cycles/nl/ofwh_process.png": "2af4756d7dbc81905e9cba28d627154c",
"assets/assets/images/cycles/nl/cascading_process.png": "d54b0ddd7fa336b75d76bda3d65af365",
"assets/assets/images/cycles/nl/brayton_process.png": "d32bc516eeb342aa920b528626a63efe",
"assets/assets/images/cycles/nl/carnot_process.png": "c950ccebbf6e367ff0a2f2476f9dfa9a",
"assets/assets/images/cycles/fil/heat_pump_ref_process.png": "0d32b4e06c42b283db2bbff31bab40f9",
"assets/assets/images/cycles/fil/rankine_process.png": "e154f46e26f4657588730e2de982fc21",
"assets/assets/images/cycles/fil/flash_chamber_process.png": "86d60f056efb5f847b6029390caf3bf5",
"assets/assets/images/cycles/fil/cfwh_process.png": "5b986d81d180f588f83763406261a7cf",
"assets/assets/images/cycles/fil/regen_brayton_process.png": "25d014b89b9a326dac2d54173ac0c7c6",
"assets/assets/images/cycles/fil/diesel_process.png": "68463f0a941479e7e7f5b3c25ec3ca3d",
"assets/assets/images/cycles/fil/reheated_rankine_process.png": "1a5676c498837842be659a88dc3b6c8a",
"assets/assets/images/cycles/fil/otto_process.png": "50a0eef91cc6b88a49972fcf748fefe9",
"assets/assets/images/cycles/fil/ofwh_process.png": "7dad13e287af68128103092e64bbbb02",
"assets/assets/images/cycles/fil/cascading_process.png": "b6b121357e9a6b28d6139adc250f46b6",
"assets/assets/images/cycles/fil/brayton_process.png": "f283023c38fdd3fa5a3597bf47ccb0fe",
"assets/assets/images/cycles/fil/carnot_process.png": "29ba09e92f4034a23455a1247c343684",
"assets/assets/images/cycles/hi/heat_pump_ref_process.png": "0bafc310a7c686f8a8c4d01cb0704a34",
"assets/assets/images/cycles/hi/rankine_process.png": "045c4dd32dec17375f1f0ccdcaa874fc",
"assets/assets/images/cycles/hi/flash_chamber_process.png": "d69bb6eb7dc22d733aef9e9f70eefb72",
"assets/assets/images/cycles/hi/cfwh_process.png": "f5e6b0b167b0bfac17fd57c08a7c2dac",
"assets/assets/images/cycles/hi/regen_brayton_process.png": "68c68129e4783d66ac7acb28c11cc81a",
"assets/assets/images/cycles/hi/diesel_process.png": "c01a2b52893c03839e67332272c58d24",
"assets/assets/images/cycles/hi/reheated_rankine_process.png": "6bae9e2cafbb4dbea79e658bcee0edc8",
"assets/assets/images/cycles/hi/otto_process.png": "87a2b9e6ea74346a040b7fe5928e5d09",
"assets/assets/images/cycles/hi/ofwh_process.png": "9e008eff3a77fa22960cb23678a393da",
"assets/assets/images/cycles/hi/cascading_process.png": "762c7d2db0998de3ffd31d3cdd23dee2",
"assets/assets/images/cycles/hi/brayton_process.png": "4f1ae145fb3de4c5f766edbbbfaa35e4",
"assets/assets/images/cycles/hi/carnot_process.png": "b4616aff9b8812064e55d4769bd1fcb9",
"assets/assets/images/cycles/de/heat_pump_ref_process.png": "18914ff5d2bb50b08872b6e4c91c7092",
"assets/assets/images/cycles/de/rankine_process.png": "82113935a3377388b0f098fcd572e8d1",
"assets/assets/images/cycles/de/flash_chamber_process.png": "14ff2147a68cc3575ab22f520194e5c6",
"assets/assets/images/cycles/de/cfwh_process.png": "4040eee2f9e7e2ad57f673ac6e495c92",
"assets/assets/images/cycles/de/regen_brayton_process.png": "2d7d8769774bb3dbe5627c11ffb6a2d9",
"assets/assets/images/cycles/de/diesel_process.png": "5766dcbb18be09962c4bbf0141a8528d",
"assets/assets/images/cycles/de/reheated_rankine_process.png": "ec8bac330bd593ba09893d4235564726",
"assets/assets/images/cycles/de/otto_process.png": "5acb3f754f16ea4fe8293cfd578e5fa5",
"assets/assets/images/cycles/de/ofwh_process.png": "023c39ada5574d828e8bc0a9bc5be6bc",
"assets/assets/images/cycles/de/cascading_process.png": "c9746f1062c047c3b395f65297efa9fd",
"assets/assets/images/cycles/de/brayton_process.png": "fc81f4de7716042f437bcc7232db8070",
"assets/assets/images/cycles/de/carnot_process.png": "b9b644d1a3c21327e408aa51daf71d31",
"assets/assets/images/cycles/ko/heat_pump_ref_process.png": "9500bf6a21cfb1a143f904f71be08d70",
"assets/assets/images/cycles/ko/rankine_process.png": "9e79cbef1317f702626757d25775a0d5",
"assets/assets/images/cycles/ko/flash_chamber_process.png": "c7c60c8d5b92ba2c09f1b090fcbfd774",
"assets/assets/images/cycles/ko/cfwh_process.png": "8b8b0e61b994f6b97579e46cee76622c",
"assets/assets/images/cycles/ko/regen_brayton_process.png": "dc12a20ac1ccb785bce467637a2226f3",
"assets/assets/images/cycles/ko/diesel_process.png": "5dd8c5ed23e9238567e4098126395700",
"assets/assets/images/cycles/ko/reheated_rankine_process.png": "d54857b68641155dd1cca2eaded7e01e",
"assets/assets/images/cycles/ko/otto_process.png": "cc56d0ff00b7ee9f10ef2caf4c4bba48",
"assets/assets/images/cycles/ko/ofwh_process.png": "37063e5726f4b9dddaa98255b086e8b5",
"assets/assets/images/cycles/ko/cascading_process.png": "3b3ac6705030776066850e1c6835bd4f",
"assets/assets/images/cycles/ko/brayton_process.png": "db8aeebbd4df5d961f77418b11c08dd9",
"assets/assets/images/cycles/ko/carnot_process.png": "4d05c41b82373e19a8d706850625e769",
"assets/assets/images/cycles/id/heat_pump_ref_process.png": "82c428f201272bb3cb52b3ad5eaf65a9",
"assets/assets/images/cycles/id/rankine_process.png": "7f1c3e15603e44db2896d5f8ce1679ca",
"assets/assets/images/cycles/id/flash_chamber_process.png": "6aa943cb6fac2c513e9f2d9dd3917266",
"assets/assets/images/cycles/id/cfwh_process.png": "adb8ef38e2486483bbea5ba0c9cae4b9",
"assets/assets/images/cycles/id/regen_brayton_process.png": "c212dd4d15ef2eafe0c2fcbf5428dc9c",
"assets/assets/images/cycles/id/diesel_process.png": "63ff521711341f8b9de70f98e993a3cd",
"assets/assets/images/cycles/id/reheated_rankine_process.png": "afd569dec60745570cd94cb872e37d5c",
"assets/assets/images/cycles/id/otto_process.png": "73efcd6fcf1641576926c1331dfe5805",
"assets/assets/images/cycles/id/ofwh_process.png": "4a60ea976795804b8251fcc2a338caf8",
"assets/assets/images/cycles/id/cascading_process.png": "d3a79c1645bd4cc6c9d6664c1d82c677",
"assets/assets/images/cycles/id/brayton_process.png": "92d92f14bca5e2c87ca27d489e404add",
"assets/assets/images/cycles/id/carnot_process.png": "985c18998c2721d9fd2c52b7d87d2d58",
"assets/assets/images/cycles/fr/heat_pump_ref_process.png": "24fa1c5995d73b2d29f10ee5f592e060",
"assets/assets/images/cycles/fr/rankine_process.png": "0f308b79c63fd0cf4374cf8c8afa7b9d",
"assets/assets/images/cycles/fr/flash_chamber_process.png": "c00c3e135d2c0dfad59f467e74e23fba",
"assets/assets/images/cycles/fr/cfwh_process.png": "e6777cb7e4096ff465d40a7ecc217244",
"assets/assets/images/cycles/fr/regen_brayton_process.png": "01e4e2c31c8d5ffff70057a5fea90a26",
"assets/assets/images/cycles/fr/diesel_process.png": "f37792f6f7f335858c1d399d0f32739f",
"assets/assets/images/cycles/fr/reheated_rankine_process.png": "8f830bc8cdc6f92774c49455566ba486",
"assets/assets/images/cycles/fr/otto_process.png": "988f6c292298f0be34bdb051d911625c",
"assets/assets/images/cycles/fr/ofwh_process.png": "81c61719fda4e6cf61491e6dd674654f",
"assets/assets/images/cycles/fr/cascading_process.png": "003456c85ac9e9dce67e791d7ebc515d",
"assets/assets/images/cycles/fr/brayton_process.png": "fa57324a86d965ef2d2c0f6ba3cd3b44",
"assets/assets/images/cycles/fr/carnot_process.png": "a36c4c80c9fc9b34480a2890fb27f589",
"assets/assets/images/cycles/cfwh_ts.png": "05adfa1fb6144abac3f5f1c4845ae52a",
"assets/assets/images/cycles/otto_process.png": "f44dc50cb5d8ba4d3c67179b7b339de7",
"assets/assets/images/cycles/es/heat_pump_ref_process.png": "1c2c90d350897d7a65081c92016fd34b",
"assets/assets/images/cycles/es/rankine_process.png": "4d0f87f1c22d5f7246cd35b8e7ae1b4e",
"assets/assets/images/cycles/es/flash_chamber_process.png": "f986dd832b1c87ded7a47f63a08b47cb",
"assets/assets/images/cycles/es/cfwh_process.png": "a82549e6b44e3b97d225780880b149c3",
"assets/assets/images/cycles/es/regen_brayton_process.png": "e44952dbae78192e16feab2212a83444",
"assets/assets/images/cycles/es/diesel_process.png": "ffae841b79f27a4ab1c59975f11a214d",
"assets/assets/images/cycles/es/reheated_rankine_process.png": "6cba7d5fd286810968b6462376632f52",
"assets/assets/images/cycles/es/otto_process.png": "0d6b0e86a97c4499aa7fee16eac2c3b3",
"assets/assets/images/cycles/es/ofwh_process.png": "ce80cb9fdf3d16f40fc0d0dbe6509ea1",
"assets/assets/images/cycles/es/cascading_process.png": "018235ffecde830063246e02c3f25442",
"assets/assets/images/cycles/es/brayton_process.png": "6765a8267ff2bc70ea089fa8a1fe347e",
"assets/assets/images/cycles/es/carnot_process.png": "40c850e5fb3dcdfdb22d6816eb8f475c",
"assets/assets/images/cycles/en/heat_pump_ref_process.png": "8ba8d1a2b009653fe6ff440535d7f852",
"assets/assets/images/cycles/en/rankine_process.png": "8c7166cd50da0aff04d9297eb909a724",
"assets/assets/images/cycles/en/flash_chamber_process.png": "89dce419a848ba4f7febbf89c81ef933",
"assets/assets/images/cycles/en/cfwh_process.png": "422290fb10fef81aec64545506117fdc",
"assets/assets/images/cycles/en/regen_brayton_process.png": "e631ed53a67e35a7856b2c394e809ced",
"assets/assets/images/cycles/en/diesel_process.png": "b79a8d91c18dd51de3ae52686709b44a",
"assets/assets/images/cycles/en/reheated_rankine_process.png": "f79a46783ade321a04073c63977aab18",
"assets/assets/images/cycles/en/otto_process.png": "82f4e7cf361dd378be90c02a5e5ebc0b",
"assets/assets/images/cycles/en/ofwh_process.png": "d3c8c7f863d5297436c781ab8980e7f0",
"assets/assets/images/cycles/en/cascading_process.png": "3051988f9976923d5c93cedf65370a7b",
"assets/assets/images/cycles/en/brayton_process.png": "234d2f0c39bc43bfa9363ba4b9f80627",
"assets/assets/images/cycles/en/carnot_process.png": "b9d7761e674d3f0ba1a8143b1bf33fdb",
"assets/assets/images/cycles/ofwh_process.png": "98d9a2388dc0326eb059d416bac3a0b7",
"assets/assets/images/cycles/cascading_process.png": "a195f1bc04e993e91a49b7ede14b152c",
"assets/assets/images/cycles/regen_brayton_pv.png": "d31303dac0209aad0d1e800569d695ce",
"assets/assets/images/cycles/brayton_process.png": "107acddfad95bb766eb5b23408c39ace",
"assets/assets/images/cycles/carnot_process.png": "28a2075c10ace637730b3bcefa9fa330",
"assets/assets/images/cycles/otto_pv.png": "5842c25a5d437581dc4a20cd76550e93",
"assets/assets/images/cycles/th/heat_pump_ref_process.png": "8451851c71f6f4d3c011c4044927585c",
"assets/assets/images/cycles/th/rankine_process.png": "40ce1424648231914cb2668ce967a4a6",
"assets/assets/images/cycles/th/flash_chamber_process.png": "b68fc9ba16a231943f7201f0e43d743f",
"assets/assets/images/cycles/th/cfwh_process.png": "008f2ec5dcde743ee723742eb66df700",
"assets/assets/images/cycles/th/regen_brayton_process.png": "619bbf28a9c7da560c81584a8d5a7c0b",
"assets/assets/images/cycles/th/diesel_process.png": "d0f100b4256c4784993cf198b2bf1c60",
"assets/assets/images/cycles/th/reheated_rankine_process.png": "bbcf6b99a75e2b0bb2e5fd22d2012477",
"assets/assets/images/cycles/th/otto_process.png": "dab22b9c734c0c934ee33e56ed015fb2",
"assets/assets/images/cycles/th/ofwh_process.png": "663e2856e5c67114177a7b2e957c5bac",
"assets/assets/images/cycles/th/cascading_process.png": "b55a1fa43c550acf9ea515ac9606d9d7",
"assets/assets/images/cycles/th/brayton_process.png": "5795787e78a9fcea71fc76feba304ca1",
"assets/assets/images/cycles/th/carnot_process.png": "01c36d33cc4219b9590034ea345c5239",
"assets/assets/images/cycles/tr/heat_pump_ref_process.png": "b47482bcaf15f085e7351e1c3da5cd64",
"assets/assets/images/cycles/tr/rankine_process.png": "31874b4899d6543947b05028253a95f0",
"assets/assets/images/cycles/tr/flash_chamber_process.png": "0fa62a2bc64876640e719df1e8991d9c",
"assets/assets/images/cycles/tr/cfwh_process.png": "4dad49adeab53bdf40e0fd9c90ae6bbc",
"assets/assets/images/cycles/tr/regen_brayton_process.png": "19d864eadd30167df7778d6fb7f577c7",
"assets/assets/images/cycles/tr/diesel_process.png": "3dd6972b5e340a84c16f3f51d637b989",
"assets/assets/images/cycles/tr/reheated_rankine_process.png": "303d0a224b403cffa52ca18a0fa3ff30",
"assets/assets/images/cycles/tr/otto_process.png": "acdbdbf1b52157a5f10bbf9fa4eceb99",
"assets/assets/images/cycles/tr/ofwh_process.png": "59f7feb472cd4899e6037f550bfc3ba5",
"assets/assets/images/cycles/tr/cascading_process.png": "f0da383eec2c930ec69695ae73a3d663",
"assets/assets/images/cycles/tr/brayton_process.png": "b3c8b138bf37842aea95e7f4c893f931",
"assets/assets/images/cycles/tr/carnot_process.png": "dc74cabd06bd13d5609e2ce2c5d99da2",
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
