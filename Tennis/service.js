self.addEventListener("install", e=> {
    e.waitUntil(
        chaces.open("static").then(cache=>
            {
                return cache.addAll(["./index.html","./logo_mani.png","./javascript.js","./intro.js","style.css"])
            })
    );
        });

       
        self.addEventListener("fetch",e =>
{
    e.respondWith(
        caches.match(e.request).then( response =>
            {
                return response || fetch(e.request);
            })
        
    );
    
});