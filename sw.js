if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,d)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const c=e=>n(e,o),a={module:{uri:o},exports:s,require:c};i[o]=Promise.all(r.map((e=>a[e]||c(e)))).then((e=>(d(...e),s)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"d9af9867f599be23ea630a399227586a"},{url:"android-chrome-512x512.png",revision:"579750ae6624ea9c6d62a97d0e6d4772"},{url:"apple-touch-icon.png",revision:"9cc309a3b404e0c3a5c3488d5038af44"},{url:"assets/apple-touch-icon-DImA_66V.png",revision:null},{url:"assets/favicon-B0PcZL8p.ico",revision:null},{url:"assets/index-DzuLdAC6.css",revision:null},{url:"assets/index-nR0C8vwz.js",revision:null},{url:"favicon-16x16.png",revision:"d400faa498f80e57e175293e5acad09d"},{url:"favicon-32x32.png",revision:"50fd83ed4e3734eccefc830e786f2864"},{url:"favicon.ico",revision:"7dc1958df880867c233f60458d0b33dd"},{url:"index.html",revision:"c87e9591e9d2bb5ff188d3f78740569c"},{url:"maskable_icon.png",revision:"00533a77dab7ca07628313cd929b4d04"},{url:"registerSW.js",revision:"0555660eb5fe58dafa5e0d36094d99db"},{url:"favicon.ico",revision:"7dc1958df880867c233f60458d0b33dd"},{url:"android-chrome-192x192.png",revision:"d9af9867f599be23ea630a399227586a"},{url:"android-chrome-512x512.png",revision:"579750ae6624ea9c6d62a97d0e6d4772"},{url:"manifest.webmanifest",revision:"cd2ca029e9046a4a045fb102d047d05b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
