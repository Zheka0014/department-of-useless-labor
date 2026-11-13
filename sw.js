// Раньше здесь была веб-версия игры с работой без интернета. Теперь игра продаётся в Microsoft Store,
// а этот файл удаляет у посетителей старую сохранённую копию сайта и отключает себя.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
})()));
