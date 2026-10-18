const CACHE_NAME = 'al-anwar-cache-v1';
const assetsToCache = 
'/',
  '/index.html',
'/manifest.json'
//يمكنك اضافة اي صور او ملفات اخرى هنا 
]; 

// تثبيت التخزين المؤقت
self.addEventlistener('install',(even) => { even.waitUntill(
  caches.open(CACHE_NAME).then((cache) => { 
                               return cache.addAll(assetsToCache);
  })
  );
                                          });

// جلب الملفات عندما لا يوجد انترنت
self.addeventListener('fetch',(event) => {
  event.respondwith(
    caches.match(event.request).then
    ((response) => {
    return response || fetch(event.request
                             );
    })
    );
});
