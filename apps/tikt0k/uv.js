importScripts('/apps/tikt0k/uv/uv.bundle.js');
importScripts('/apps/tikt0k/uv/uv.config.js');
importScripts('/apps/tikt0k/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
