'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f0655d02bfaa5911e52bd8d500008d5f",
"assets/AssetManifest.bin.json": "ae9e5f6dc45f1a1a46982d6d898f5d87",
"assets/AssetManifest.json": "64c3e1dae862fb363ae27de0e56e2079",
"assets/assets/fonts/Murecho/static/Murecho-Black.ttf": "ae5976a96d420c4a368f8be2ac81389f",
"assets/assets/fonts/Murecho/static/Murecho-Bold.ttf": "7b0a22b6907f33e6fffbf5eee6447fe2",
"assets/assets/fonts/Murecho/static/Murecho-ExtraBold.ttf": "42c425398fcf4e6fe488d6988198cd1c",
"assets/assets/fonts/Murecho/static/Murecho-ExtraLight.ttf": "51eec04197e0c985091ba1455011f46b",
"assets/assets/fonts/Murecho/static/Murecho-Light.ttf": "2cc832d6d313168576ee663e2bdeb06e",
"assets/assets/fonts/Murecho/static/Murecho-Medium.ttf": "6a9b427be8995367e9bbc76bab99836a",
"assets/assets/fonts/Murecho/static/Murecho-Regular.ttf": "0f425fedb3326b4201d4d030bb3a9600",
"assets/assets/fonts/Murecho/static/Murecho-SemiBold.ttf": "a5793643a114130f017682af2612f60a",
"assets/assets/fonts/Murecho/static/Murecho-Thin.ttf": "54ce60964dd29310111a6afe3b72147c",
"assets/assets/images/bgrounds/bg_dote_yuyake.jpg": "2b61a1fe2afe28a92ab15da7c569bfeb",
"assets/assets/images/bgrounds/bg_ground.png": "f1498c543287f46c315f1affa0d37f49",
"assets/assets/images/bgrounds/bg_heaven_tengoku.jpg": "cd078098b03ca84f9f29e20ab1e4cf2a",
"assets/assets/images/bgrounds/smallbar.jpg": "2f35f65ce80a2f22800b701bfd7b9d89",
"assets/assets/images/bgrounds/time2_hiru.png": "6c963a2b3704d9149c2a4db6d489d8a0",
"assets/assets/images/bgrounds/time3_yuu.png": "80d67f386d02c712f62fb92a8f016417",
"assets/assets/images/bgrounds/time4_yoru.png": "5ad2f1e78cd04e09af7a80f54b5800c3",
"assets/assets/images/books/book1_green.png": "e22e026107f8df6b3d216362c4633486",
"assets/assets/images/books/book2_orange.png": "7390b4bc564587683394005482c6d190",
"assets/assets/images/books/book3_blue.png": "12cdbc18385c2ccba5d5633f13c66890",
"assets/assets/images/books/book4_red.png": "edefc4d6a124eed39b5c39f957a69966",
"assets/assets/images/books/book_zabuton.png": "ad3c30ac42626e67263e5ed42f26fdab",
"assets/assets/images/books/note_kurorekishi.png": "9f2579bf4b8c536ee2334e78084b4d2e",
"assets/assets/images/computer_cursor_finger_white.png": "a3c6663ba7a07c5dfcb424ac0286721d",
"assets/assets/images/doors/door_close.png": "740a93eb7256842f745f8e63169877dc",
"assets/assets/images/doors/door_half_open.png": "27c22652398b7234ecd5b6f645c7fc1f",
"assets/assets/images/doors/door_open.png": "8c31e30620fa761c6a52cebc06126c7f",
"assets/assets/images/food_cup_ra-men_close.png": "7c036bc721693e1f89390200808ced0e",
"assets/assets/images/gabyous/gabyou_pinned_plastic_blue.png": "49011e9cb2fa3e942b3802a974a7bd57",
"assets/assets/images/gabyous/gabyou_pinned_plastic_green.png": "99c9b1c78cd7c27882d45b3427dae32b",
"assets/assets/images/gabyous/gabyou_pinned_plastic_purple.png": "881c920dc3b1858368f711a70126ccf5",
"assets/assets/images/gabyous/gabyou_pinned_plastic_red.png": "513548189f31991bc797b9eb10d97ae1",
"assets/assets/images/gabyous/gabyou_pinned_plastic_white.png": "a0b068b66420b3cdf6f3b196c54fa169",
"assets/assets/images/gabyous/gabyou_pinned_plastic_yellow.png": "342868c20cbc165b8bfafcccfc1813d0",
"assets/assets/images/kamihikoukis/kamihikouki_omote.png": "35be677918b3df98d8869376b92ca3bb",
"assets/assets/images/kamihikoukis/kamihikouki_ura.png": "63df4187d2584caf06069e382e7346fe",
"assets/assets/images/komaru_icon_maru.png": "4131e0c884449b7b688887fef3555107",
"assets/assets/images/notes/book_sasshi3_green.png": "ff98457002253cd087c1fee6129a0bb0",
"assets/assets/images/notes/zabuton_notebook.png": "991444ff9d976475412f1b73d44fb9c8",
"assets/assets/images/text_company_kaigichu.png": "00fa59849d6b2a0349cfb35b113b5aa3",
"assets/assets/sounds/maou_se_8bit08.wav": "cadc3b5326bc2b9383d6f9738c8ccd0e",
"assets/assets/sounds/maou_se_jingle03.wav": "b6f8bd9def480fb55a0d7bf17f64e1ad",
"assets/assets/sounds/maou_se_onepoint26.wav": "511f785a47fbe01222078d070a3fb1a1",
"assets/assets/sounds/maou_se_system40.wav": "08c8d4beef419f7e8ff46b89116d6e06",
"assets/assets/sounds/maou_se_system46.wav": "ee9409e828a5a12fc242e32d31975958",
"assets/assets/sounds/maou_s_13.wav": "b681bdab5e6e6e89fa374744ce313ef0",
"assets/assets/sounds/maou_s_23.wav": "4b97f31b0e6415bd3a3c54eeedcba55c",
"assets/assets/sounds/maou_s_32.wav": "c32fd9427434384edbc90ac7b51af321",
"assets/assets/sounds/maou_s_37.wav": "1c4ce92708905a88ebafc0ae396d1b23",
"assets/FontManifest.json": "a3ce0ad5e3e172d8f6887a66b658b600",
"assets/fonts/MaterialIcons-Regular.otf": "0eb3c0d6fce44cfb0f743b9c70e07c96",
"assets/NOTICES": "c997c3b42ad37c3a35b4be6273e93582",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "b6530f23d5df9d8b334e31a4dc62e0d0",
"assets/packages/flutter_sound_web/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "08b625f48a690f69a4c95468ba5252fd",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "16a7d60e1e8351d6d677e7aef0423187",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/optimus/assets/mews_logo.svg": "23644c772c9b4d654cc7de48b6ef5160",
"assets/packages/optimus/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/packages/optimus/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/packages/optimus/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/packages/optimus/fonts/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/packages/optimus/fonts/OptimusIcons.ttf": "befc17a5f348723bc645e54a5cb3fd32",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6a53b0f42bb025528b7c3554f0f7ac7d",
"/": "6a53b0f42bb025528b7c3554f0f7ac7d",
"main.dart.js": "88584618a5124a26f9d25cfbfcc51996",
"manifest.json": "698c09812b843305b8fcb3e12d74c4fb",
"version.json": "a825e3556dd29bb86f64e8e9874de21e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
