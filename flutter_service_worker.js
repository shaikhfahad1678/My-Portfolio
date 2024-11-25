'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "920cb24ad94cc58e47e9be94cdfac0bb",
"assets/AssetManifest.bin.json": "dec37ca9ddc7e3da398cba384365d8a5",
"assets/AssetManifest.json": "0fd7ab17fc4d3e47eb6f71483f30d6f5",
"assets/assets/images/bloc.jpg": "e67619a116d25dc19062a5f049b043ae",
"assets/assets/images/bloc2.png": "ab1261792c28d3a77597b6316fdf39fc",
"assets/assets/images/burger.png": "a0c84b7e1f6f08db88b081faf18dc8f8",
"assets/assets/images/cake.png": "f5202503b6a0c0f974eccf8ff6e22c0f",
"assets/assets/images/calci.png": "145886b9aacb3808d2f92ff07fcd8a7d",
"assets/assets/images/cleanarchitecture.jpg": "78473624e531c516bf1d3e5525f68362",
"assets/assets/images/democake.png": "e44fedc4ee2d1cf1387103bbeacbae69",
"assets/assets/images/dosa.png": "7a4871413ccc147e91d9efdfadce0321",
"assets/assets/images/email.png": "49b7bb568a3f9c882e9eb76befb9bfaa",
"assets/assets/images/e_commerce_pic.png": "744b83da8e35b30ed7d84d52f7838b8b",
"assets/assets/images/firebase.png": "ee50e77d6caedb237bc736f4056035ab",
"assets/assets/images/firestore.png": "a22ebed1b9b120989ab47d8e08686960",
"assets/assets/images/flutter.png": "f338ad4f53fd124ab497f12a47eb717d",
"assets/assets/images/flutterauth.jpg": "983deeac1fd029acdbcd074a0b2754ec",
"assets/assets/images/forestcake.jpg": "63f69820fb2bc7a2c67dcfd6f979e1a6",
"assets/assets/images/idli.png": "6d3c3730bce15bafc7342b41b8cf3c85",
"assets/assets/images/juice.png": "6b51afca9c46160f0dc2376530d7ab08",
"assets/assets/images/login.png": "9b82cf1a6a9b2e3fb5a51b7bf2c5b487",
"assets/assets/images/logo.png": "d0515092173211776ceed19b39c2a041",
"assets/assets/images/mawa.png": "48dbd101cdeb4df45ff8ab3a03d07d22",
"assets/assets/images/notes_pic.png": "0e66cf1cc226925514e83f950cf61867",
"assets/assets/images/pizza.png": "546d62ebebf8720e49f229aa4e4fdbf7",
"assets/assets/images/profile_pic.png": "f7d91fc2d5655a1859adf57009bf9f0f",
"assets/assets/images/provider.jpg": "9ee6f9284af8801b655b9e08b774b2d5",
"assets/assets/images/restapi_pic.png": "2aca4c838fcff7aedd6bb171501ecc5e",
"assets/assets/images/samosa.png": "663fec68a62d2c0498c101573a8dbeb7",
"assets/assets/images/sweets.png": "aa95e87f4ffb4e17173fc1918a7080a1",
"assets/assets/images/veg.png": "a1cde76229a88f9e66273a2db958b15a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4a014c6e7d75556e0a2c36cca8143d0c",
"assets/NOTICES": "0d2ae80398ba47954e44251263ae1704",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6284b833aee65a8f601935955df9f72d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5ae86e16d35aa110423635920fb82d94",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3e718fc0ebba6a5d45906511a0a238bb",
"/": "3e718fc0ebba6a5d45906511a0a238bb",
"main.dart.js": "b43e6a6ae4b2bbf8305687f0ae8e6900",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"version.json": "cc132570d6d238130e38adc59e1f998d"};
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
