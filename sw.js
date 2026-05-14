
const CACHE_NAME = 'voice-reader-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1'
];

// تثبيت ملفات الموقع في الذاكرة
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// استرجاع الملفات من الذاكرة بدلاً من الإنترنت
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
