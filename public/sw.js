const STATIC_CACHE = 'groove-static-v1'
const RUNTIME_CACHE = 'groove-runtime-v1'
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/groove-icon.svg',
  '/images/placeholder.svg',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE_URLS))
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== STATIC_CACHE && cacheName !== RUNTIME_CACHE)
          .map((cacheName) => caches.delete(cacheName))
      )
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return
  }

  const requestUrl = new URL(event.request.url)

  if (requestUrl.origin !== self.location.origin) {
    return
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone()
          caches.open(RUNTIME_CACHE).then((cache) => cache.put('/index.html', copy))
          return response
        })
        .catch(async () => {
          const cachedIndex = await caches.match('/index.html')
          return cachedIndex || caches.match('/')
        })
    )
    return
  }

  const isStaticAsset = requestUrl.pathname.startsWith('/images/') || /\.(?:js|css|woff2?|ttf|otf|svg|png|jpe?g|webp|ico)$/.test(requestUrl.pathname)

  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse
        
        return fetch(event.request)
          .then((response) => {
            if (response && response.ok) {
              const copy = response.clone()
              caches.open(RUNTIME_CACHE).then((cache) => cache.put(event.request, copy))
            }
            return response
          })
          .catch(() => {
            // Return a blank response if both cache and network fail
            return new Response('', { status: 404 })
          })
      })
    )
    return
  }

  event.respondWith(
    fetch(event.request).catch(() => 
      caches.match(event.request).then((cachedResponse) => 
        cachedResponse || new Response('', { status: 503 })
      )
    )
  )
})