if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const c=e=>s(e,r),t={module:{uri:r},exports:a,require:c};i[r]=Promise.all(n.map((e=>t[e]||c(e)))).then((e=>(o(...e),a)))}}define(["./workbox-fd269422"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"ae085bae11d6606142c753782498c375"},{url:"apple-touch-icon.png",revision:"f1f5603d3e5c39e63295843aab2fd6e6"},{url:"assets/index-C9s3DRij.js",revision:null},{url:"assets/index-DwXs2M0I.css",revision:null},{url:"favicon.ico",revision:"4831e769418dda3a07a5c87a1b2fb4bc"},{url:"index.html",revision:"1afe40215582dbd73c55811b9c89d1da"},{url:"pwa-192x192.png",revision:"8bf63424e7cb816540b036369d3e8625"},{url:"pwa-512x512.png",revision:"6a9aea3361df904d621ee640ef33c7b9"},{url:"registerSW.js",revision:"568f522406d17a60f97e131aec11fb08"},{url:"apple-touch-icon.png",revision:"f1f5603d3e5c39e63295843aab2fd6e6"},{url:"favicon.ico",revision:"4831e769418dda3a07a5c87a1b2fb4bc"},{url:"pwa-192x192.png",revision:"8bf63424e7cb816540b036369d3e8625"},{url:"pwa-512x512.png",revision:"6a9aea3361df904d621ee640ef33c7b9"},{url:"manifest.webmanifest",revision:"087f76323d0cb280a1de572aa8638828"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
