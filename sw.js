self.addEventListener('install', event => {
  self.skipWaiting();
  const files = [
    'a2hs.js',
    'favicon.svg',
    'index.html',
    'manifest.json',
    'notification.js',
    'push.js',
    'register-sw.js',
    'sensors.js',
    'style.css'
  ];
  event.waitUntil(caches.open('v1').then(cache => cache.addAll(files)));
});

self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', event => {
  event.respondWith(caches.open('v1').then(cache => {
    return fetch(event.request).catch(() => {
      if (event.request.mode === 'navigate') return cache.match('index.html');
      return cache.match(event.request);
    });
  }))
});

self.addEventListener('push', (event) => {
  if (!(self.Notification && self.Notification.permission === 'granted')) {
    return;
  }
  event.target.registration.showNotification('Demo Notification', {
    actions: [{ action: 'handleclick', title: 'Click Me!' }],
    // docs: https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData
    body: event.data.text()
  });
});

self.addEventListener('notificationclick', event => {
  event.waitUntil(clients.matchAll().then(windows => {
    if (!windows.length) return clients.openWindow(self.location.origin);
    windows[0].navigate(self.location.origin);
    windows[0].focus();
  }));
});
