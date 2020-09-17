/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "954cd8ea3cd856ddcaf3eeda64d39663"
  },
  {
    "url": "about.html",
    "revision": "7e661562733a5a0ac37f1424b215acea"
  },
  {
    "url": "assets/css/0.styles.dc8946f9.css",
    "revision": "793438c5a427e4bac75ffad061f5c6b4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dff8bfe1.js",
    "revision": "8d3bd5018c2df6dc4208e8ffcfe7c0c2"
  },
  {
    "url": "assets/js/11.571648dc.js",
    "revision": "7e8aea61a2ede45d6a8e9aaa1dba1681"
  },
  {
    "url": "assets/js/12.4b9e0d07.js",
    "revision": "32b0aa5868f1d809aa64dfa5da56bdc0"
  },
  {
    "url": "assets/js/13.ead4a68b.js",
    "revision": "614414abe027f19a16a557052f5dc56b"
  },
  {
    "url": "assets/js/14.d58a5115.js",
    "revision": "0e49f8733da302f131db7b702998f289"
  },
  {
    "url": "assets/js/15.37892a8a.js",
    "revision": "ef4fb8a0d2b9cc17bcec244899ed19fa"
  },
  {
    "url": "assets/js/16.c621178c.js",
    "revision": "2c1052fc942f7e7748d96fc286efc871"
  },
  {
    "url": "assets/js/17.bf34a62d.js",
    "revision": "17fe5fd7893e4e1a878332a87f3edc90"
  },
  {
    "url": "assets/js/18.8a51b3bf.js",
    "revision": "cba400f0e979fc5817e30b1c5c34764a"
  },
  {
    "url": "assets/js/19.9243df07.js",
    "revision": "b628562f4e97d7214889482762e32ef9"
  },
  {
    "url": "assets/js/2.20115dad.js",
    "revision": "60c55580ad81d207b7f4cf3b99b7714a"
  },
  {
    "url": "assets/js/20.3a51089a.js",
    "revision": "d5592bba6bf1cb8466be8df8045f8ff5"
  },
  {
    "url": "assets/js/21.01db3c3d.js",
    "revision": "5fe9fec80671033f0fcd6016b7ae78c9"
  },
  {
    "url": "assets/js/22.1c06054a.js",
    "revision": "1de9ec089a94c4b018d911dabfdb9fab"
  },
  {
    "url": "assets/js/23.1009edf5.js",
    "revision": "21d2a394aa12cc5708f57041f0c57384"
  },
  {
    "url": "assets/js/24.22d5d5ae.js",
    "revision": "c8467897aceccc49d7355dcdc1a76b86"
  },
  {
    "url": "assets/js/25.7f4d9d78.js",
    "revision": "4be928b53dfb8af077b228c7aa890fc2"
  },
  {
    "url": "assets/js/26.04032c66.js",
    "revision": "42dec4e9f214f5f2bf25a7aee3f624ec"
  },
  {
    "url": "assets/js/27.b083e58b.js",
    "revision": "fe1a1eaf2e5f5ba562b3be4afe8a3534"
  },
  {
    "url": "assets/js/3.c62655c2.js",
    "revision": "1ba76477d44bf9c2cc160d8840f2506f"
  },
  {
    "url": "assets/js/4.1ae92357.js",
    "revision": "b8c9e78403bf0c6be59a1d7e58043579"
  },
  {
    "url": "assets/js/5.7e75d9d4.js",
    "revision": "0ba187f2ee57db2931fc864b5958665f"
  },
  {
    "url": "assets/js/6.c21c06e1.js",
    "revision": "2a6a1b7a4ede9558423a8a608b62ba3e"
  },
  {
    "url": "assets/js/7.7e31cc32.js",
    "revision": "9191d0227b6c7c55a50296c1df51c492"
  },
  {
    "url": "assets/js/8.01492cc7.js",
    "revision": "4417099c1a4238e8600d2463bb824e3b"
  },
  {
    "url": "assets/js/9.c68f678e.js",
    "revision": "24700ad8b668545992064f5762bcec0b"
  },
  {
    "url": "assets/js/app.e30c5893.js",
    "revision": "b229713b7ef789eeed380f2657596f4c"
  },
  {
    "url": "demo.html",
    "revision": "95cdd7aad600ba6a5491a46ca766c51f"
  },
  {
    "url": "en/about.html",
    "revision": "7acabe91ef8a91a6dcd0b95291c40bd6"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "e5a4889b6817655a017145222b84254c"
  },
  {
    "url": "en/guide/config.html",
    "revision": "4deeb298018e22121e2c5e0c7957a6aa"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "f98c61df5a75da4f9b2a891de5330932"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "1a30c5476749fca4fd4db9c108bb59f4"
  },
  {
    "url": "en/guide/index.html",
    "revision": "b56527f1362202fda5feedfe2ac3ed91"
  },
  {
    "url": "en/guide/page.html",
    "revision": "4a506c7fb57b45bb65252411df1dfeb5"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "8cd0ff11a8cb5f7b7727ffe578cdeb57"
  },
  {
    "url": "en/index.html",
    "revision": "2849be0dc5dc5e8f5d8519ab33650096"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "254a2a423101ef722b30b5eb93c1eaaa"
  },
  {
    "url": "guide/config.html",
    "revision": "d2344557343c05a6044a6569924883d1"
  },
  {
    "url": "guide/faq.html",
    "revision": "e6bf2be527f32e325078a9479ec5ce1a"
  },
  {
    "url": "guide/icon.html",
    "revision": "1c4c839c12bf2ba02243fbb2eb46a746"
  },
  {
    "url": "guide/index.html",
    "revision": "267959c340f386a0afedf242cfebc6cc"
  },
  {
    "url": "guide/migrate.html",
    "revision": "533d135e0e31dd0810bd585cd5b390fc"
  },
  {
    "url": "guide/page.html",
    "revision": "403eca14966bee1417552b506e5b93a8"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "e51e7b5f57e75445e8eb5dbde6c0c046"
  },
  {
    "url": "index.html",
    "revision": "3ea7ad8450994dc352093ec6284210cc"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
