importScripts('/apps/tiktok/uv/uv.bundle.js');
importScripts('/apps/tiktok/uv/uv.config.js');
importScripts('/apps/tiktok/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
