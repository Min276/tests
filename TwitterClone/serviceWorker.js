const tweetAssist = "tweet-assist-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/jquery.hashtags.css",
  "https://kit.fontawesome.com/bbdccb4e58.js",
  "https://code.jquery.com/jquery-1.11.3.min.js",
  "/js/autochange.js",
  "/js/autosize.min.js",
  "/js/jquery.hashtags.js",
  "/js/speechRecognition.js",
  "/js/backend.app.js",
  "/js/index.js",
  "/favicon",
  "/js/connectivity.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(tweetAssist).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  