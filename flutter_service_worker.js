'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "86abde27e281a0b7130dc27852baa615",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/background.jpeg": "facdf704e866ed087124f76f77f236a2",
"assets/images/profile.jpeg": "ff7c19e3103b6ed02adef001fbad4c36",
"assets/LICENSE": "e7deeccedd738306e7156534944ab043",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.ico": "5ce9100be6fccec9d0f7594a04fd316a",
"index.html": "9b3875b8470f10feb7d8b9b6b0eb7bf4",
"main.dart.js": "f55d0720357e97d266ba1aed40933fb6",
"manifest.json": "14e919b7b1dde549ab334b7ee3ce8412"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
