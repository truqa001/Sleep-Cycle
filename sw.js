if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const c=e=>n(e,s),l={module:{uri:s},exports:d,require:c};i[s]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(o(...e),d)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"d9af9867f599be23ea630a399227586a"},{url:"android-chrome-512x512.png",revision:"579750ae6624ea9c6d62a97d0e6d4772"},{url:"apple-touch-icon.png",revision:"9cc309a3b404e0c3a5c3488d5038af44"},{url:"assets/apple-touch-icon-DImA_66V.png",revision:null},{url:"assets/favicon-B0PcZL8p.ico",revision:null},{url:"assets/index-C_UBflHB.js",revision:null},{url:"assets/index-DzuLdAC6.css",revision:null},{url:"favicon-16x16.png",revision:"d400faa498f80e57e175293e5acad09d"},{url:"favicon-32x32.png",revision:"50fd83ed4e3734eccefc830e786f2864"},{url:"favicon.ico",revision:"7dc1958df880867c233f60458d0b33dd"},{url:"index.html",revision:"1dcd5249726a1d452984395cb5b3d185"},{url:"maskable_icon.png",revision:"00533a77dab7ca07628313cd929b4d04"},{url:"registerSW.js",revision:"0555660eb5fe58dafa5e0d36094d99db"},{url:"favicon.ico",revision:"7dc1958df880867c233f60458d0b33dd"},{url:"manifest.webmanifest",revision:"f63ca861ce46f240db94156571457c53"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
