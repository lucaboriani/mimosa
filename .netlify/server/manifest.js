var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: new Set(["favicon.png", "img/APG-Epildream.jpg", "img/Apg-SHAPEINPULSE_LogoRGB_preview.png", "img/Cuccio.jpg", "img/DECOLOGO.jpg", "img/DibiHydra.png", "img/Elizabeth-Arden-Simbolo.jpg", "img/Img-Scrub-Corpo.jpg", "img/KRF-banner.jpg", "img/KRF.jpg", "img/Logo_Olos Marrone con pay of_preview.png", "img/SMALTO-SICURO.jpg", "img/TRUCCO.jpg", "img/_Dibimilano.jpg", "img/banner_DIBI.jpg", "img/dibi-tonic-lifter.jpg", "img/dibi.png", "img/griglia.png", "img/home-donna.png", "img/home.jpg", "img/lamimosa.svg", "img/logo-dibi-center.png", "img/logotest.jpg", "img/lpg-endermologie.jpg", "img/lpg.png", "img/per-una-bellezza-senza-eta.jpeg", "img/priori-1.jpg", "img/thalasence.jpg", "img/time-of-ritual.jpg", "img/trattamento-viso.png", "img/trattamentoviso.jpg", "img/unnamed (1).png", "img/zoya-SMALTI.jpg", "robots.txt", "svelte-welcome.png", "svelte-welcome.webp"]),
  _: {
    mime: { ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".jpeg": "image/jpeg", ".txt": "text/plain", ".webp": "image/webp" },
    entry: { "file": "start-29cffcb3.js", "js": ["start-29cffcb3.js", "chunks/vendor-eeef5a3d.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toModule(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/5.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/visocollo\/?$/,
        params: null,
        path: "/visocollo",
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/servizi\/?$/,
        params: null,
        path: "/servizi",
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/about\/?$/,
        params: null,
        path: "/about",
        a: [0, 5],
        b: [1]
      }
    ]
  }
};
